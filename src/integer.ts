/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import ArgumentException from '@tsdotnet/exceptions/dist/ArgumentException';
import ArgumentOutOfRangeException from '@tsdotnet/exceptions/dist/ArgumentOutOfRangeException';

function integer (n: number): number
{
	return Math.floor(n);
}

/* eslint-disable no-inner-declarations,@typescript-eslint/no-namespace */
namespace integer
{
	/* tslint:disable:no-bitwise */

	export const MAX_32_BIT: number = 2147483647;
	export const MAX_VALUE: number = 9007199254740991;
	const NUMBER = 'number';

	/**
	 * Converts any number to its 32bit counterpart.
	 * Throws if conversion is not possible.
	 * @param n
	 * @returns {number}
	 */
	export function as32Bit (n: number): number
	{
		const result = n | 0;
		if(isNaN(n)) throw new ArgumentException('n', 'is not a number.');
		if(n!== -1 && result=== -1) throw new ArgumentOutOfRangeException('n', 'is too large to be a 32 bit integer.');
		return result;
	}

	/**
	 * Returns true if the value is an integer.
	 * @param n
	 * @returns {boolean}
	 */
	export function is (n: number): boolean
	{
		return typeof n===NUMBER && isFinite(n) && n===Math.floor(n);
	}

	/**
	 * Returns true if the value is within a 32 bit range.
	 * @param n
	 * @returns {boolean}
	 */
	export function is32Bit (n: number): boolean
	{
		return n===(n | 0);
	}

	/**
	 * Throws if not an integer.
	 * @param n
	 * @param argumentName
	 * @returns {boolean}
	 */
	export function assert (n: number, argumentName?: string): true | never
	{
		const i = is(n);
		if(!i) throw new ArgumentException(argumentName || 'n', 'must be a integer.');
		return i;
	}

	/**
	 * Throws if less than zero.
	 * @param n
	 * @param argumentName
	 * @returns {boolean}
	 */
	export function assertZeroOrGreater (n: number, argumentName?: string): true | never
	{
		const i = assert(n, argumentName) && n>=0;
		if(!i)
			throw new ArgumentOutOfRangeException(
				argumentName || 'n',
				n,
				'must be a valid integer greater than or equal to zero.'
			);
		return i;
	}

	/**
	 * Throws if not greater than zero.
	 * @param n
	 * @param argumentName
	 * @returns {boolean}
	 */
	export function assertPositive (n: number, argumentName?: string): true | never
	{
		const i = assert(n, argumentName) && n>0;
		if(!i) throw new ArgumentOutOfRangeException(argumentName || 'n', n, 'must be greater than zero.');
		return i;
	}
}

export default integer;
