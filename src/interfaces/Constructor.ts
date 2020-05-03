export default interface Constructor<T extends {} = {}, A extends unknown[] = unknown[]> {
    new (...args: A): T;
}
