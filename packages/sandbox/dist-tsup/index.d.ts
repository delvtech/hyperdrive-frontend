interface MyType {
}

declare module "./MyType" {
    interface MyType {
        foo: string;
    }
}

type MyTypeKeys = keyof MyType;

export type { MyTypeKeys };
