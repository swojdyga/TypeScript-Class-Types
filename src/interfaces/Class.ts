import { Constructor } from "./Constructor";
import { AbstractClass } from "./AbstractClass";

export interface Class<T extends {} = {}> extends AbstractClass<T>, Constructor<T> {

}
