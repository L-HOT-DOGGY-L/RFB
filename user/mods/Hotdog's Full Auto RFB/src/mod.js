var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LogTextColor_1 = require("C:/snapshot/project/obj/models/spt/logging/LogTextColor");
const path_1 = __importDefault(require("path"));
class Mod {
    preAkiLoad(container) {
        const logger = container.resolve("WinstonLogger");
        logger.logWithColor("spray and pray", LogTextColor_1.LogTextColor.GREEN);
    }
    postDBLoad(container) {
        const databaseServer = container.resolve("DatabaseServer");
        const tables = databaseServer.getTables();
        const rfb = tables.templates.items["5f2a9575926fd9352339381f"];
        //---------------------------------------------------------------------------------------------
        //saiga-9 changes
        rfb._props.weapFireType.push("fullauto");
        rfb._props.bFirerate = 600;
    }
}
module.exports = { mod: new Mod() };
//# sourceMappingURL=mod.js.map