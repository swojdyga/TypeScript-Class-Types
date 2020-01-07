import "mocha";
import { expect } from "chai";
import AbstractClass from "./AbstractClass";

describe(`Abstract Class`, () => {
    it(`Should can set abstract class into constant declared as AbstractClass interface.`, () => {
        abstract class ExampleClass {
           public abstract someMethod(): string;
        }

        const someClass: AbstractClass = ExampleClass;
        const result = someClass;

        expect(result).to.be.instanceOf(Function);
    });

    it(`Should can set class into constant declared as AbstractClass interface.`, () => {
        class ExampleClass {
            public someMethod(): string {
                return `Hello World!`;
            }
        }

        const someClass: AbstractClass = ExampleClass;
        const result = someClass;

        expect(result).to.be.instanceOf(Function);
    });
});
