import { isPromiseLike } from '../src/isPromiseLike';

describe('isPromiseLike', () => {
    test('Promise', () => {
        expect(isPromiseLike(Promise.resolve())).toBe(true);
    });
    test('string', () => {
        expect(isPromiseLike('')).toBe(false);
    });
    test('null', () => {
        expect(isPromiseLike(null)).toBe(false);
    });
    test('empty object', () => {
        expect(isPromiseLike({})).toBe(false);
    });
    test('non-method-then', () => {
        expect(isPromiseLike({ then: '' })).toBe(false);
    });
    test('method-then', () => {
        expect(isPromiseLike({ then() {} })).toBe(true);
    });
});
