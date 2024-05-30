"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isPromiseLike_1 = require("./isPromiseLike");
function toOutputToConsoleError(received, ...errors) {
    if (jest.isMockFunction(console.error)) {
        throw new Error('already console.error mocked! Maybe the function `act` is not enclosed in {}?');
    }
    const mock = jest.spyOn(console, 'error').mockImplementation(() => { });
    let awaiting;
    try {
        const result = typeof received === 'function' ? received() : received;
        if (!(0, isPromiseLike_1.isPromiseLike)(result)) {
            return testConsoleError(this, mock, errors);
        }
        awaiting = true;
        return (async () => {
            try {
                await result;
                return testConsoleError(this, mock, errors);
            }
            finally {
                mock.mockRestore();
            }
        })();
    }
    finally {
        if (!awaiting) {
            mock.mockRestore();
        }
    }
}
function testConsoleError({ utils, isNot, expand, equals }, { mock: { calls: received }, }, expected) {
    const pass = equals(expected, received);
    return {
        pass,
        message() {
            return `${utils.matcherHint('toOutputToConsoleError', undefined, undefined, { isNot })}\n\n${pass
                ? `Expected: not ${utils.printExpected(expected)}\n` +
                    `Received:     ${utils.printReceived(received)}`
                : utils.printDiffOrStringify(expected, received, 'Expected', 'Received', expand !== false)}`;
        },
    };
}
expect.extend({ toOutputToConsoleError });
//# sourceMappingURL=index.js.map