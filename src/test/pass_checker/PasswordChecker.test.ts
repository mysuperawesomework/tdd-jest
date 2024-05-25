import { PasswordChecker } from "../../app/pass_checker/PasswordChecker";


describe('Password checker', ()=>{

    let sut: PasswordChecker

    beforeEach(()=>{
        sut = new PasswordChecker ();
    })

    it('Should do nothing', ()=>{
        sut.checkpassword();
    })
})