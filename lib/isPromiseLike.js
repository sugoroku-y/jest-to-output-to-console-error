"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPromiseLike = isPromiseLike;
/**
 * 指定した値がPromiseのように振る舞うオブジェクトかどうかを判定します。
 * @param o 対象の値
 * @returns PromiseLikeであれば真を返します。
 */
function isPromiseLike(o) {
    return (o instanceof Promise ||
        (typeof o === 'object' &&
            o !== null &&
            'then' in o &&
            typeof o.then === 'function'));
}
//# sourceMappingURL=isPromiseLike.js.map