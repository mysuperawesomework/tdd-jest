import { PasswordErrors, PasswordChecker } from "../../app/pass_checker/PasswordChecker";


describe('Password checker', ()=>{

    let sut: PasswordChecker

    beforeEach(()=>{
        sut = new PasswordChecker ();
    })

    it('Password with less than 8 chars is invalid', ()=>{
        const actual = sut.checkpassword('1234567');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.SHORT);
    });

    it('Password with more than 8 chars is valid', ()=>{
        const actual = sut.checkpassword('123456789');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).not.toContain(PasswordErrors.SHORT);
    });

    it('Password with no upper case is invalid', ()=>{
        const actual = sut.checkpassword('abcd');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE);
    });

    it('Password with an upper case is valid', ()=>{
        const actual = sut.checkpassword('ABC');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).not.toContain(PasswordErrors.NO_UPPER_CASE);
    });

    it('Password with no lower case is invalid', ()=>{
        const actual = sut.checkpassword('ABCD');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.NO_LOWER_CASE);
    });

    it('Password with lower case is valid', ()=>{
        const actual = sut.checkpassword('abcd');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).not.toContain(PasswordErrors.NO_LOWER_CASE);
    });
    it('Complex Password is valid', ()=> {
        const actual = sut.checkpassword('abc123DEF');
        expect(actual.valid).toBe(true);
        expect(actual.reasons.length);
    });
})