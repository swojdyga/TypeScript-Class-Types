import "mocha";
import { expect } from "chai";
import Constructor from "./Constructor";

describe(`Constructor`, () => {
    it(`Should can set class into constant declared as Constructor interface.`, () => {
        class ExampleClass {

        }

        const someClass: Constructor = ExampleClass;
        const result = someClass;

        expect(result).to.be.instanceOf(Function);
    });

    it(`Should can create new object instance from constant declared as Constructor interface.`, () => {
        class ExampleClass {

        }

        const someClass: Constructor = ExampleClass;
        const result = new someClass();

        expect(result).to.be.instanceOf(ExampleClass);
    });

    it(`Should can create new object instance from constant declared as Constructor interface with concrete class as argument type.`, () => {
        class ExampleClass {

        }

        const someClass: Constructor<ExampleClass> = ExampleClass;
        const result = new someClass();

        expect(result).to.be.instanceOf(ExampleClass);
    });

    it(`Should can create new object instance with concrete attributes from constant declared as Constructor interface with concrete class and concrete constructor arguments as arguments types.`, () => {
        class ExampleClass {
            constructor(a: number, b: string) {
                return;
            }
        }

        const someClass: Constructor<ExampleClass, [number, string]> = ExampleClass;
        const result = new someClass(10, "Hello World!");

        expect(result).to.be.instanceOf(ExampleClass);
    });
});
