export default interface Constructor<
    T extends {} = {},
    A extends any[] = any[],
> {
    new (...args: A): T;
}
