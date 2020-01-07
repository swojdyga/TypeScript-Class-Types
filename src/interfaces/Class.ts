import Constructor from "./Constructor";
import AbstractClass from "./AbstractClass";

export default interface Class<T extends {} = {}> extends AbstractClass<T>, Constructor<T> {

}
