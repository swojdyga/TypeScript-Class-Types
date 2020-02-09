Typescriptowe typy pomagające operować na klasach.

Typy
Class
AbstractClass

Przykłady

Bardzo podstawowe użycie:
```typescript
import { Class } from "typescript-class-types";

function doSomethingWithClass(someClass: Class): void {
    //do something
}

class ExampleClass {

}

doSomethingWithClass(ExampleClass);

```

Wymaganie klasy z określonym interfejsem:
```typescript
import { Class } from "typescript-class-types";

interface ExampleInterface {
    someMethod(): void;
}

function doSomethingWithClass(someClass: Class<ExampleInterface>): void {
    //do something
}

class ExampleClass implements ExampleInterface {
    public someMethod(): void {

    }
}

doSomethingWithClass(ExampleClass); //works correct, ExampleClass implements ExampleInterface interface

class SecondExampleClass {

}

doSomethingWithClass(SecondExampleClass); //TypeScript error, SecondExampleClass not implements ExampleInterface interface
```

Zamiana klasy abstrakcynej na zwykłą:
```typescript
import { AbstractClass } from "typescript-class-types";

abstract class AbstractExampleClass {
    public someMethod(): void;
}

function transformAbstractClassIntoClass<T>(abstractClass: AbstractClass<T>): Class<T> {
    const class: Class<T> = /* some logic to transform abstract class into class */;
    return class;
}

const exampleClass = transformAbstractClassIntoClass(AbstractExampleClass);
const example = new exampleClass(); //works correct, can create instance on non-abstract class
```


Injektor