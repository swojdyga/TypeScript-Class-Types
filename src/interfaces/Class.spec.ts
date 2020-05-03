import "mocha";
import { expect } from "chai";
import Class from "./Class";

describe(`Class`, () => {
    it(`Should can set class into constant declared as Class interface.`, () => {
        class ExampleClass {

        }

        const someClass: Class = ExampleClass;
        const result = someClass;

        expect(result).to.be.instanceOf(Function);
    });

    it(`Should can create new object instance from constant declared as Class interface.`, () => {
        class ExampleClass {

        }

        const someClass: Class = ExampleClass;
        const result = new someClass();

        expect(result).to.be.instanceOf(ExampleClass);
    });

    it(`Should can create new object instance from constant declared as Class interface with concrete class as argument type.`, () => {
        class ExampleClass {
            public someMethod(): string {
                return `Hello World!`;
            }
        }

        const someClass: Class<ExampleClass> = ExampleClass;
        const result = new someClass();

        expect(result).to.be.instanceOf(ExampleClass);
    });

    it(`Should can create new object instance with concrete attributes from constant declared as Class interface with concrete class and concrete constructor arguments as arguments types.`, () => {
        class ExampleClass {
            constructor(a: number, b: string) {
                return;
            }
        }

        const someClass: Class<ExampleClass, [number, string]> = ExampleClass;
        const result = new someClass(10, "Hello World!");

        expect(result).to.be.instanceOf(ExampleClass);
    });

    it(`Should can create new object instance from constant declared as Class interface with concrete class as argument type and should can call method which existing in ExampleClass.`, () => {
        class ExampleClass {
            public someMethod(): string {
                return `Hello World!`;
            }
        }

        const someClass: Class<ExampleClass> = ExampleClass;
        const result = new someClass().someMethod();

        expect(result).to.be.equal(`Hello World!`);
    });

    it(`Should can extends constant declared as Class interface with concrete class as argument type.`, () => {
        class ExampleClass {
           public someMethod(): string {
               return `Hello`;
           }
        }

        const someClass: Class<ExampleClass> = ExampleClass;
        const extendedClass = class extends someClass {
            public secondSomeMethod(): string {
                return `Hello World!`;
            }
        };

        const result = new extendedClass().secondSomeMethod();

        expect(result).to.be.equal(`Hello World!`);
    });

    it(`Should can extends constant declared as Class interface with concrete class as argument type and should have access into super class.`, () => {
        class ExampleClass {
           public someMethod(): string {
               return `Hello`;
           }
        }

        const someClass: Class<ExampleClass> = ExampleClass;
        const extendedClass = class extends someClass {
            public someMethod(): string {
                return `${super.someMethod()} World!`;
            }
        };

        const result = new extendedClass().someMethod();

        expect(result).to.be.equal(`Hello World!`);
    });
});
