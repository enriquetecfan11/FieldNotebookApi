import express from "express";
import morgan from "morgan";
import os from "os";
import si from "systeminformation";

// Api settings
const app = express();
app.use(express.json());
app.use(morgan(':remote-addr || :remote-user || [:date[clf]] || :method || :url || :status || :res[content-length] || :response-time ms'));

// Api Routes
import getRoutes from "./routes/getRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import deleteRoutes from "./routes/deleteRoutes.js";
app.use(getRoutes, postRoutes, deleteRoutes);


// System information and server status

import SystemInformation from "./systeminformation.js";

app.get('/status', async (req, res) => {
  const status = await SystemInformation().getServerStatus();
  const date = new Date();
  const hour = new Intl.DateTimeFormat('es', { hour: 'numeric', hour12: false }).format(date);
  const minute = new Intl.DateTimeFormat('es', { minute: 'numeric' }).format(date);
  const second = new Intl.DateTimeFormat('es', { second: 'numeric' }).format(date);

  res.status(200).json({
    message: '🟢 Server Status OK',
    time: `🕒  Time: ${hour}:${minute}:${second}`,
    ip: `🌐  IP: ${status.ip}`,
    cpu: `🖥️  CPU: Model -> ${status.cpu.manufacturer} ${status.cpu.brand} , Cores -> ${status.cpu.cores} , Speed -> ${status.cpu.speed} GHz`,
    ram: `💻  RAM: ${status.ram.total} GB`,
    disk: `📀  Disk: Total -> ${status.disk[0].size} GB , Used -> ${status.disk[0].used} GB`
  });
});

export default app;
