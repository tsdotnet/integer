"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ArgumentException_1 = (0, tslib_1.__importDefault)(require("@tsdotnet/exceptions/dist/ArgumentException"));
const ArgumentOutOfRangeException_1 = (0, tslib_1.__importDefault)(require("@tsdotnet/exceptions/dist/ArgumentOutOfRangeException"));
function integer(n) {
    return Math.floor(n);
}
/* eslint-disable no-inner-declarations,@typescript-eslint/no-namespace */
(function (integer) {
    /* tslint:disable:no-bitwise */
    integer.MAX_32_BIT = 2147483647;
    integer.MAX_VALUE = 9007199254740991;
    const NUMBER = 'number';
    /**
     * Converts any number to its 32bit counterpart.
     * Throws if conversion is not possible.
     * @param n
     * @returns {number}
     */
    function as32Bit(n) {
        const result = n | 0;
        if (isNaN(n))
            throw new ArgumentException_1.default('n', 'is not a number.');
        if (n !== -1 && result === -1)
            throw new ArgumentOutOfRangeException_1.default('n', 'is too large to be a 32 bit integer.');
        return result;
    }
    integer.as32Bit = as32Bit;
    /**
     * Returns true if the value is an integer.
     * @param n
     * @returns {boolean}
     */
    function is(n) {
        return typeof n === NUMBER && isFinite(n) && n === Math.floor(n);
    }
    integer.is = is;
    /**
     * Returns true if the value is within a 32 bit range.
     * @param n
     * @returns {boolean}
     */
    function is32Bit(n) {
        return n === (n | 0);
    }
    integer.is32Bit = is32Bit;
    /**
     * Throws if not an integer.
     * @param n
     * @param argumentName
     * @returns {boolean}
     */
    function assert(n, argumentName) {
        const i = is(n);
        if (!i)
            throw new ArgumentException_1.default(argumentName || 'n', 'must be a integer.');
        return i;
    }
    integer.assert = assert;
    /**
     * Throws if less than zero.
     * @param n
     * @param argumentName
     * @returns {boolean}
     */
    function assertZeroOrGreater(n, argumentName) {
        const i = assert(n, argumentName) && n >= 0;
        if (!i)
            throw new ArgumentOutOfRangeException_1.default(argumentName || 'n', n, 'must be a valid integer greater than or equal to zero.');
        return i;
    }
    integer.assertZeroOrGreater = assertZeroOrGreater;
    /**
     * Throws if not greater than zero.
     * @param n
     * @param argumentName
     * @returns {boolean}
     */
    function assertPositive(n, argumentName) {
        const i = assert(n, argumentName) && n > 0;
        if (!i)
            throw new ArgumentOutOfRangeException_1.default(argumentName || 'n', n, 'must be greater than zero.');
        return i;
    }
    integer.assertPositive = assertPositive;
})(integer || (integer = {}));
exports.default = integer;
//# sourceMappingURL=integer.js.map