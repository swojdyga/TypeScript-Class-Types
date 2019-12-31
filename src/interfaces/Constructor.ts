export interface Constructor<T extends {} = {}> {
    (...args: any[]): T;
}
