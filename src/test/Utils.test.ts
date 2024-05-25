import { StringUtils, getStringInfo, toUpperCase } from "../app/Utils";

describe('Utils test suite', ()=> {

    describe('StringUtils tests', ()=>{

            let sut: StringUtils;

        beforeEach(()=>{
            sut = new StringUtils();
            console.log('Setup')
        })

        it('Should return correct upperCase', ()=>{
            const sut = new StringUtils();

            const actual = sut.toUpperCase('abc');

            expect(actual).toBe('ABC');
        })

        it('Should throw error on invalid argument - function', ()=>{
            function expectError(){
                const actual = sut.toUpperCase('');
            }
            expect(expectError).toThrow();
            expect(expectError).toThrow('Invalid Argument!');
        });

        it('Should throw error on invalid argument - arrow function', ()=>{
            expect(()=>{
                const actual = sut.toUpperCase('');
            }).toThrow();
        });

        it('Should throw error on invalid argument - try catch block', (done)=>{
            try{
                sut.toUpperCase('');
                done('GetStringInfo should throw error for invalid arg!')
            } catch(error) {
                expect(error).toBeInstanceOf(Error);
                expect(error).toHaveProperty('message', 'Invalid Argument!');
                done();
            }
    
        })
    });

    it('should return uppercase of valid string', ()=>{
        // Arrange:
        const sut = toUpperCase; 
        const expected = 'ABC'

        // Act:
        const actual = toUpperCase('abc');

        // Assert:
        expect(actual).toBe('ABC');
    });


    describe('ToUpperCase examples', ()=>{
        it.each([
            {input: 'abc', expected: 'ABC'},
            {input: 'My-String', expected: 'MY-STRING'},
            {input: 'def', expected: 'DEF'}
        ])('input toUpperCase should be $expected',({input, expected})=>{

        })
    })

    describe('getSringInfo for arg My-String should', ()=>{
        test('return correct length',()=>{
            const actual = getStringInfo('My-String');
            expect(actual.characters).toHaveLength(9);
        });
        test('return correct lower case',()=>{
            const actual = getStringInfo('My-String');
            expect(actual.lowerCase).toBe('my-string');
        });
        test('return correct upper case',()=>{
            const actual = getStringInfo('My-String');
            expect(actual.upperCase).toBe('MY-STRING');
        });
        test('return correct characters',()=>{
            const actual = getStringInfo('My-String');
            expect(actual.characters).toContain<string>('M');
            expect(actual.characters).toEqual(
                expect.arrayContaining(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g'])
            )
        });
        test('return defined extra info',()=>{
            const actual = getStringInfo('My-String');
            expect(actual.extraInfo).toBeDefined();
        });
        test('return correct extra info',()=>{
            const actual = getStringInfo('My-String');
            expect(actual.extraInfo).toEqual({});
        });
    });
});