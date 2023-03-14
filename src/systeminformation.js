import os from "os";
import si from "systeminformation";

const SystemInformation = () => {
    const getIP = () => Object.values(os.networkInterfaces())
    .flatMap(iface => iface.filter(address => !address.internal && address.family === 'IPv4'))
    .map(address => address.address);

    const getCPU = () => si.cpu();

    const getDisk = () => si.fsSize();

    const getRAM = () => si.mem();

    const getServerStatus = async () => {
      const [cpu, disk, ram, ip] = await Promise.all([getCPU(), getDisk(), getRAM(), getIP()]);
      return { cpu, disk, ram, ip };
    }

    return {
        getIP,
        getCPU,
        getDisk,
        getRAM,
        getServerStatus
    }
}

export default SystemInformation;
