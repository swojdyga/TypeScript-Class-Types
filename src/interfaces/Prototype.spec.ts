import "mocha";
import { expect } from "chai";
import Prototype from "./Prototype";

describe(`Prototype`, () => {
    it(`Should can set abstract class into constant declared as Prototype interface.`, () => {
        abstract class ExampleClass {
           public abstract someMethod(): string;
        }

        const someClass: Prototype = ExampleClass;
        const result = someClass;

        expect(result).to.be.instanceOf(Function);
    });

    it(`Should can set class into constant declared as Prototype interface.`, () => {
        class ExampleClass {
            public someMethod(): string {
                return `Hello World!`;
            }
        }

        const someClass: Prototype = ExampleClass;
        const result = someClass;

        expect(result).to.be.instanceOf(Function);
    });
});
