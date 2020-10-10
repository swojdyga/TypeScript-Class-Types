import Constructor from "./Constructor";
import AbstractClass from "./AbstractClass";

export default interface Class<
    T extends any = any,
    A extends any[] = any[],
> extends AbstractClass<T>, Constructor<T, A> {

}
