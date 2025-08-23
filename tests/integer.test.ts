/* eslint-disable @typescript-eslint/no-use-before-define */
import { describe, it, expect } from 'vitest';
import integer from '../src/integer';

const TEST_FLOAT = 10.915, TEST_INT = 10, MAX = 9007199254740991;

describe('(value)', () => {
	it('should convert float number to integer without rounding', () => {
		expect(integer(TEST_FLOAT))
			.equal(TEST_INT);
	});

	it('should convert negative float number to integer without rounding', () => {
		expect(integer(-TEST_FLOAT))
			.equal(-TEST_INT);
	});

	it('should convert larger than 32 bit numbers appropriately',() => {
		const v05 = MAX - 0.5, v1 = MAX - 1;
		expect(integer(v05))
			.equal(v1);
		expect(integer(-v05))
			.equal(-v1);
	});

	it('should return NaN for non-numbers',() => {
		expect(integer(<any>'hello')).to.be.NaN;
		expect(integer(NaN)).to.be.NaN;
	});
});

describe('.as32Bit(value)', () => {
	it('should convert float number to integer without rounding', () => {
		expect(integer.as32Bit(1))
			.equal(1);
		expect(integer.as32Bit(-1))
			.equal(-1);			
		expect(integer.as32Bit(TEST_FLOAT))
			.equal(TEST_INT);
		expect(integer.as32Bit(-TEST_FLOAT))
			.equal(-TEST_INT);			
	});

	it('should throw not possible to convert', () => {
		expect(() => integer.as32Bit(MAX)).toThrow();
		expect(() => integer.as32Bit(-MAX)).toThrow();
	});
});

describe('.is(value)', () => {
	it('should detect a number that is not an integer', () => {
		baseTests(integer.is);
		baseTests(integer.is32Bit);

		expect(
			integer.is32Bit(integer.MAX_32_BIT))
			.toBe(true);

		expect(
			integer.is32Bit(integer.MAX_32_BIT + 0.1))
			.toBe(false);

		expect(
			integer.is32Bit(integer.MAX_32_BIT + 1))
			.toBe(false);

		function baseTests (fn: (n: number) => boolean): void
		{
			expect(
				fn('1' as any))
				.toBe(false);

			expect(
				fn('test' as any))
				.toBe(false);

			expect(
				fn(NaN))
				.toBe(false);

			expect(
				fn(Infinity))
				.toBe(false);

			expect(
				fn(-Infinity))
				.toBe(false);

			expect(
				fn(TEST_FLOAT))
				.toBe(false);

			expect(
				fn(-TEST_FLOAT))
				.toBe(false);
		}
	});

	it('should detect a number that is an integer', () => {
		baseTests(integer.is);
		baseTests(integer.is32Bit);

		expect(
			integer.is(integer.MAX_32_BIT + 1))
			.toBe(true);

		expect(
			integer.is(-MAX))
			.toBe(true);

		expect(
			integer.is(MAX))
			.toBe(true);

		function baseTests (fn: (n: number) => boolean): void
		{

			expect(
				fn(-0))
				.toBe(true);

			expect(
				fn(-TEST_INT))
				.toBe(true);

			expect(
				fn(TEST_INT))
				.toBe(true);

			expect(
				fn(integer.MAX_32_BIT))
				.toBe(true);

			expect(
				fn(-integer.MAX_32_BIT))
				.toBe(true);
		}
	});
});

describe('.assert(value)', () => {
	it('should detect a number that is not an integer', () => {
		expect(() => integer.assert(TEST_FLOAT)).toThrow();
		expect(() => integer.assert(-TEST_FLOAT)).toThrow();
	});

	it('should detect a number that is an integer', () => {
		expect(integer.assert(TEST_INT)).toBe(true);
		expect(integer.assert(-TEST_INT)).toBe(true);
	});
});

describe('.assertZeroOrGreater(value)', () => {
	it('should pass for valid positive integers', () => {
		expect(integer.assertZeroOrGreater(0)).toBe(true);
		expect(integer.assertZeroOrGreater(1)).toBe(true);
		expect(integer.assertZeroOrGreater(100)).toBe(true);
	});

	it('should throw for negative integers', () => {
		expect(() => integer.assertZeroOrGreater(-1)).toThrow();
		expect(() => integer.assertZeroOrGreater(-10)).toThrow();
	});

	it('should throw for non-integers', () => {
		expect(() => integer.assertZeroOrGreater(1.5)).toThrow();
		expect(() => integer.assertZeroOrGreater(-1.5)).toThrow();
	});

	it('should throw with custom argument name', () => {
		expect(() => integer.assertZeroOrGreater(-1, 'customArg')).toThrow();
	});
});

describe('.assertPositive(value)', () => {
	it('should pass for positive integers', () => {
		expect(integer.assertPositive(1)).toBe(true);
		expect(integer.assertPositive(100)).toBe(true);
	});

	it('should throw for zero', () => {
		expect(() => integer.assertPositive(0)).toThrow();
	});

	it('should throw for negative integers', () => {
		expect(() => integer.assertPositive(-1)).toThrow();
		expect(() => integer.assertPositive(-10)).toThrow();
	});

	it('should throw for non-integers', () => {
		expect(() => integer.assertPositive(1.5)).toThrow();
		expect(() => integer.assertPositive(-1.5)).toThrow();
	});

	it('should throw with custom argument name', () => {
		expect(() => integer.assertPositive(-1, 'customArg')).toThrow();
	});
});

