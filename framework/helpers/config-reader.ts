import { readdirSync, readFileSync } from "fs";

export type ConfigType = {
    [key: string]: boolean | string | number | ConfigType | (boolean | string | number)[];
}

export class ConfigReader {
    private configData: ConfigType;
    constructor(configName = 'selenium') {
        const dir = readdirSync('.')
        this.configData = JSON.parse(readFileSync('./configs/' + configName + '.json').toLocaleString());
    }

    public getProperty(name: string) {
        const split = name.split('.');
        let index = 0;
        let result: any;
        do {
            result = this.configData[split[index]];
            index++;
        } while(index < split.length);

        return result;
    }
}