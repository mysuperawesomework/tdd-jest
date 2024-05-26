import { PasswordErrors, PasswordChecker } from "../../app/pass_checker/PasswordChecker";


describe('Password checker', ()=>{

    let sut: PasswordChecker

    beforeEach(()=>{
        sut = new PasswordChecker ();
    })

    it('Password with less than 8 chars is invalid', ()=>{
        const actual = sut.checkPassword('1234567');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.SHORT);
    });

    it('Password with more than 8 chars is valid', ()=>{
        const actual = sut.checkPassword('123456789');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).not.toContain(PasswordErrors.SHORT);
    });

    it('Password with no upper case is invalid', ()=>{
        const actual = sut.checkPassword('abcd');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE);
    });

    it('Password with an upper case is valid', ()=>{
        const actual = sut.checkPassword('ABC');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).not.toContain(PasswordErrors.NO_UPPER_CASE);
    });

    it('Password with no lower case is invalid', ()=>{
        const actual = sut.checkPassword('ABCD');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.NO_LOWER_CASE);
    });

    it('Password with lower case is valid', ()=>{
        const actual = sut.checkPassword('abcd');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).not.toContain(PasswordErrors.NO_LOWER_CASE);
    });
    it('Complex Password is valid', ()=> {
        const actual = sut.checkPassword('abc123DEF');
        expect(actual.valid).toBe(true);
        expect(actual.reasons).toHaveLength(0);
    });

    it('Admin Password must contain numbers', ()=> {
        const actual = sut.checkAdminPassword('abcdABCD');
        expect(actual.reasons).toContain(PasswordErrors.NO_NUMBER);
        expect(actual.valid).toBe(false);
    });

    it('Admin Password with number is valid', ()=> {
        const actual = sut.checkAdminPassword('abcdABCD7');
        expect(actual.reasons).not.toContain(PasswordErrors.NO_NUMBER)
        expect(actual.valid).toBe(true);
    });
})