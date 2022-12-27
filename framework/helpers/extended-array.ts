export class ArrayHelper<T> extends Array<T> {
    async asyncMap<E>(callbackfn: (value: T, index: number, array: T[]) => Promise<E>) {
        let result: ArrayHelper<E> = new ArrayHelper();
        for (let index = 0; index < this.length; index++) {
            result.push(await callbackfn(this[index], index, this));
        }
        return result;
    }
}

declare global {
    interface Array<T> {
        asyncMap<E>(callbackfn: (value: T, index: number, array: T[]) => Promise<E>): Promise<E[]>
    }
    
}

Array.prototype.asyncMap = async function <E>(callbackfn: (this: any, value: any, index: number, array: any[]) => Promise<E>) {
    let result: E[] = [];
    for (let index = 0; index < this.length; index++) {
        result.push(await callbackfn(this[index], index, this));
    }
    return result;
}
