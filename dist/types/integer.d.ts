/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
declare function integer(n: number): number;
declare namespace integer {
    const MAX_32_BIT: number;
    const MAX_VALUE: number;
    function as32Bit(n: number): number;
    function is(n: number): boolean;
    function is32Bit(n: number): boolean;
    function assert(n: number, argumentName?: string): true | never;
    function assertZeroOrGreater(n: number, argumentName?: string): true | never;
    function assertPositive(n: number, argumentName?: string): true | never;
}
export default integer;
