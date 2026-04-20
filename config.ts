export class Config {
    private static instance: Config
    private constructor() {
        console.log("Configuração inicializada")
    }

    public static getInstance(): Config {
        if (!Config.instance) {
            Config.instance = new Config()
        }
        return Config.instance
    }
    public getconfig() {
        return "Configurações do sistema"
    }
}