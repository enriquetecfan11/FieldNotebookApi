import app from "./src/app.js";
import si from "systeminformation";
import os from "os";
import { sequelize } from "./src/database/database.js";
// import "./models/models.js";

// System information
import SystemInformation from "./src/systeminformation.js";

const port = process.env.PORT || 5000;

async function main() {
  // Sequelize connect to database
  // only if you want to drop all tables and recreate them force false
  await sequelize.sync({ force: false });
  // Start server with system information
  app.listen(port, async () => {
    const status = await SystemInformation().getServerStatus();
    const date = new Date();
    const hour = new Intl.DateTimeFormat("es", {
      hour: "numeric",
      hour12: false,
    }).format(date);
    const minute = new Intl.DateTimeFormat("es", { minute: "numeric" }).format(
      date
    );
    const second = new Intl.DateTimeFormat("es", { second: "numeric" }).format(
      date
    );
    console.log(
      `🚀 Server started on port ${port} \n🕒  Time: ${hour}:${minute}:${second} \n🌐  IP: ${status.ip} \n🖥️  CPU: Model -> ${status.cpu.manufacturer} ${status.cpu.brand} , Cores -> ${status.cpu.cores} , Speed -> ${status.cpu.speed} GHz \n💻  RAM: ${status.ram.total} GB \n📀  Disk: Total -> ${status.disk[0].size} GB , Used -> ${status.disk[0].used} GB`
    );

  }).on('error', console.error);
}

main();
