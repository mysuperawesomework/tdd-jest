import { getStringInfo, toUpperCase } from "../app/Utils";

describe('Utils test suite', ()=> {

    it('should return uppercase of valid string', ()=>{
        // Arrange:
        const sut = toUpperCase; 
        const expected = 'ABC'

        // Act:
        const actual = toUpperCase('abc');

        // Assert:
        expect(actual).toBe('ABC');
    });

    it.only('shold return info for valid string', ()=>{
        const actual = getStringInfo('My-String');

        expect(actual.lowerCase).toBe('my-string');
        expect(actual.extraInfo).toEqual({});

        expect(actual.characters).toHaveLength(9);

        expect(actual.characters).toContain<string>('M');
        expect(actual.characters).toEqual(
            expect.arrayContaining(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g'])
        );
        expect(actual.extraInfo).toBeTruthy();
    });

});