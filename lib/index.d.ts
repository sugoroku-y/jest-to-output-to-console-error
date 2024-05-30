declare global {
    namespace jest {
        interface Matchers<R, T> {
            toOutputToConsoleError(...errors: T extends PromiseLike<unknown> ? unknown[][] : T extends () => void ? unknown[][] : [] & {
                message: `expectにはPromiseか関数を指定してください`;
            }): T extends PromiseLike<unknown> ? Promise<R> : T extends (...a: never) => PromiseLike<unknown> ? Promise<R> : R;
        }
    }
}
export {};
