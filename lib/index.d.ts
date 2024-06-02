declare global {
    namespace jest {
        interface Matchers<R, T> {
            toOutputToConsoleError(...errors: T extends PromiseLike<unknown> ? readonly (readonly unknown[])[] : T extends () => void ? readonly (readonly unknown[])[] : [] & {
                message: `expectにはPromiseか関数を指定してください`;
            }): T extends PromiseLike<unknown> ? Promise<R> : T extends (...a: never) => PromiseLike<unknown> ? Promise<R> : R;
        }
    }
}
export {};
