(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tsdotnet/exceptions')) :
    typeof define === 'function' && define.amd ? define(['exports', '@tsdotnet/exceptions'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.tsdotnet = global.tsdotnet || {}, global.tsdotnet.integer = global.tsdotnet.integer || {}), global.tsdotnet.exceptions));
})(this, (function (exports, exceptions) { 'use strict';

    /*!
     * @author electricessence / https://github.com/electricessence/
     * Licensing: MIT
     */
    const MAX_32 = 2147483647;
    function integer(n) {
        if (typeof n != 'number')
            return NaN;
        if (n > 0)
            return n > MAX_32 ? Math.floor(n) : (n | 0);
        if (n < 0)
            return n < -MAX_32 ? Math.ceil(n) : (n | 0);
        return n;
    }
    (function (integer) {
        integer.MAX_32_BIT = 2147483647;
        integer.MAX_VALUE = 9007199254740991;
        const NUMBER = 'number';
        function as32Bit(n) {
            if (isNaN(n))
                throw new exceptions.ArgumentException('n', 'is not a number.');
            const result = n | 0;
            switch (result) {
                case 1:
                case -1:
                    if (n !== result)
                        throw new exceptions.ArgumentOutOfRangeException('n', n, 'is too large to be a 32 bit integer.');
            }
            return result;
        }
        integer.as32Bit = as32Bit;
        function is(n) {
            return typeof n === NUMBER && isFinite(n) && n === integer(n);
        }
        integer.is = is;
        function is32Bit(n) {
            return n === (n | 0);
        }
        integer.is32Bit = is32Bit;
        function assert(n, argumentName) {
            const i = is(n);
            if (!i)
                throw new exceptions.ArgumentException(argumentName || 'n', 'must be a integer.');
            return i;
        }
        integer.assert = assert;
        function assertZeroOrGreater(n, argumentName) {
            const i = assert(n, argumentName) && n >= 0;
            if (!i)
                throw new exceptions.ArgumentOutOfRangeException(argumentName || 'n', n, 'must be a valid integer greater than or equal to zero.');
            return i;
        }
        integer.assertZeroOrGreater = assertZeroOrGreater;
        function assertPositive(n, argumentName) {
            const i = assert(n, argumentName) && n > 0;
            if (!i)
                throw new exceptions.ArgumentOutOfRangeException(argumentName || 'n', n, 'must be greater than zero.');
            return i;
        }
        integer.assertPositive = assertPositive;
    })(integer || (integer = {}));
    var integer_default = integer;

    exports.default = integer_default;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=integer.js.map
