import { foo } from "./MyType";

declare module "./MyType" {
  interface MyType {
    foo: string;
  }
}

export const baz = foo;