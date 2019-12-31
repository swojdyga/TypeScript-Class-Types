export interface Prototype<T extends {} = {}> extends Function {
    prototype: T;
}
