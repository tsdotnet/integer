/* eslint-disable @typescript-eslint/no-use-before-define */
import integer from '../src/integer';

const TEST_FLOAT = 10.915, TEST_INT = 10, MAX = 9007199254740991;

describe('(value)', () => {
	it('should convert float number to integer without rounding', () => {
		expect(integer(TEST_FLOAT))
			.toBe(TEST_INT);
	});
});

describe('.as32Bit(value)', () => {
	it('should convert float number to integer without rounding', () => {
		expect(integer.as32Bit(TEST_FLOAT))
			.toBe(TEST_INT);
	});

	it('should throw not possible to convert', () => {
		expect(() => integer.as32Bit(MAX)).toThrow();
	});
});

describe('.is(value)', () => {
	it('should detect a number that is not an integer', () => {
		baseTests(integer.is);
		baseTests(integer.is32Bit);

		expect(
			integer.is32Bit(integer.MAX_32_BIT + 1))
			.toBeFalse();

		function baseTests (fn: (n: number) => boolean): void
		{
			expect(
				fn('1' as any))
				.toBeFalse();

			expect(
				fn('test' as any))
				.toBeFalse();

			expect(
				fn(NaN))
				.toBeFalse();

			expect(
				fn(Infinity))
				.toBeFalse();

			expect(
				fn(-Infinity))
				.toBeFalse();

			expect(
				fn(TEST_FLOAT))
				.toBeFalse();

			expect(
				fn(-TEST_FLOAT))
				.toBeFalse();
		}
	});

	it('should detect a number that is an integer', () => {
		baseTests(integer.is);
		baseTests(integer.is32Bit);

		expect(
			integer.is(integer.MAX_32_BIT + 1))
			.toBeTrue();

		expect(
			integer.is(-MAX))
			.toBeTrue();

		expect(
			integer.is(MAX))
			.toBeTrue();

		function baseTests (fn: (n: number) => boolean): void
		{

			expect(
				fn(-0))
				.toBeTrue();

			expect(
				fn(-TEST_INT))
				.toBeTrue();

			expect(
				fn(TEST_INT))
				.toBeTrue();

			expect(
				fn(integer.MAX_32_BIT))
				.toBeTrue();

			expect(
				fn(-integer.MAX_32_BIT))
				.toBeTrue();
		}
	});
});


describe('.assert(value)', () => {
	it('should detect a number that is not an integer', () => {
		expect(() => integer.assert(TEST_FLOAT)).toThrow();
	});

	it('should detect a number that is an integer', () => {
		expect(integer.assert(TEST_INT)).toBeTrue();
	});
});

