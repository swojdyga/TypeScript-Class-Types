export default interface Constructor<
    T extends any = any,
    A extends any[] = [],
> {
    new (...args: A): T;
}
