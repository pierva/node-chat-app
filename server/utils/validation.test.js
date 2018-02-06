const expect = require('expect');
const {isRealString} = require('./validation');

describe('Check string validation', () => {
    it('should reject non-string values', () => {
        var noString = 345643;
        expect(isRealString(noString)).toBe(false);
    });

    it('should reject string with only spaces', () => {
        var spaces = '      ';
        expect(isRealString(spaces)).toBe(false);
    });

    it('Should allow string with non-space characters', () => {
        var string = "  aRealString  ";
        expect(isRealString(string)).toBe(true);
    })
})
