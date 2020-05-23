/* eslint-disable @typescript-eslint/no-use-before-define */
import {expect} from 'chai';
import integer from '../src/integer';

const TEST_FLOAT = 10.915, TEST_INT = 10, MAX = 9007199254740991;

describe('(value)', () => {
	it('should convert float number to integer without rounding', () => {
		expect(integer(TEST_FLOAT))
			.equal(TEST_INT);
	});
});

describe('.as32Bit(value)', () => {
	it('should convert float number to integer without rounding', () => {
		expect(integer.as32Bit(TEST_FLOAT))
			.equal(TEST_INT);
	});

	it('should throw not possible to convert', () => {
		expect(() => integer.as32Bit(MAX)).to.throw();
	});
});

describe('.is(value)', () => {
	it('should detect a number that is not an integer', () => {
		baseTests(integer.is);
		baseTests(integer.is32Bit);

		expect(
			integer.is32Bit(integer.MAX_32_BIT + 1))
			.to.be.false;

		function baseTests (fn: (n: number) => boolean): void
		{
			expect(
				fn('1' as any))
				.to.be.false;

			expect(
				fn('test' as any))
				.to.be.false;

			expect(
				fn(NaN))
				.to.be.false;

			expect(
				fn(Infinity))
				.to.be.false;

			expect(
				fn(-Infinity))
				.to.be.false;

			expect(
				fn(TEST_FLOAT))
				.to.be.false;

			expect(
				fn(-TEST_FLOAT))
				.to.be.false;
		}
	});

	it('should detect a number that is an integer', () => {
		baseTests(integer.is);
		baseTests(integer.is32Bit);

		expect(
			integer.is(integer.MAX_32_BIT + 1))
			.to.be.true;

		expect(
			integer.is(-MAX))
			.to.be.true;

		expect(
			integer.is(MAX))
			.to.be.true;

		function baseTests (fn: (n: number) => boolean): void
		{

			expect(
				fn(-0))
				.to.be.true;

			expect(
				fn(-TEST_INT))
				.to.be.true;

			expect(
				fn(TEST_INT))
				.to.be.true;

			expect(
				fn(integer.MAX_32_BIT))
				.to.be.true;

			expect(
				fn(-integer.MAX_32_BIT))
				.to.be.true;
		}
	});
});


describe('.assert(value)', () => {
	it('should detect a number that is not an integer', () => {
		expect(() => integer.assert(TEST_FLOAT)).to.throw();
	});

	it('should detect a number that is an integer', () => {
		expect(integer.assert(TEST_INT)).to.be.true;
	});
});

