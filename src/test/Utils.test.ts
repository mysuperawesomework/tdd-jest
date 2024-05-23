import { toUpperCase } from "../app/Utils";

describe('Utils test suite', ()=> {

    test('should return uppercase of valid string', ()=>{
        // Arrange:
        const sut = toUpperCase; 
        const expected = 'ABC'

        // Act:
        const actual = toUpperCase('abc');

        // Assert:
        expect(actual).toBe('ABC');
    });

});