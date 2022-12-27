export abstract class Combobox {
    abstract getItem(index: number): Promise<string>;
    abstract expand(): Promise<void>;
}