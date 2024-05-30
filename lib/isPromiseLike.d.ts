/**
 * 指定した値がPromiseのように振る舞うオブジェクトかどうかを判定します。
 * @param o 対象の値
 * @returns PromiseLikeであれば真を返します。
 */
export declare function isPromiseLike(o: unknown): o is PromiseLike<unknown>;
