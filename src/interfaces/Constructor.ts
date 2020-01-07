export default interface Constructor<T extends {} = {}> {
    new (...args: any[]): T;
}
