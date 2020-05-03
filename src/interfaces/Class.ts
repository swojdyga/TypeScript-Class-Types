import Constructor from "./Constructor";
import AbstractClass from "./AbstractClass";

export default interface Class<
    T extends {} = {},
    A extends unknown[] = unknown[],
> extends AbstractClass<T>, Constructor<T, A> {

}
