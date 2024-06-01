import { DataBase } from "../../../app/server_app/data/DataBase"
import * as IdGenerator from "../../../app/server_app/data/IdGenerator";

type someTypeWithId = {
    id: string,
    name: string,
    color: string
}

describe("Database test suite", () => {
    let sut: DataBase<someTypeWithId>;

    const fakeId = '1234';

    const someObject = {
        id: '',
        name: 'someName',
        color: 'blue'
    }

    const someObject2 = {
        id: '',
        name: 'someOtherName',
        color: 'blue'
    }

    beforeEach(() => {
        sut = new DataBase<someTypeWithId>();
        jest.spyOn(IdGenerator, 'generateRandomId').mockReturnValue(fakeId);
    })

    it('Should return id after insert', async ()=>{
        const actual = await sut.insert({
            id: '',
        } as any)

        expect(actual).toBe(fakeId);
    });

    it('Should get an element after insert', async ()=>{
        const id = await sut.insert(someObject);
        const actual = await sut.getBy('id', id);
        expect(actual).toBe(someObject);
    });


    it('Should find all elements with the same property', async ()=>{
        await sut.insert(someObject);
        await sut.insert(someObject2);
        const expected = [someObject, someObject2];

        const actual = await sut.findAllBy('color', 'blue');
        
        expect(actual).toEqual(expected);
    });

    it('Should change the color on object', async ()=>{
        const id = await sut.insert(someObject);
        const expectedColor = 'red';
        await sut.update(id, 'color', expectedColor);
        const object = await sut.getBy('id', id);
        const actualColor = object?.color;
        expect(actualColor).toBe(expectedColor);
    });

    it('Should delete object', async ()=>{
        const id = await sut.insert(someObject)
        await sut.delete(id);
        const actual = await sut.getBy('id', id)
        expect(actual).toBeUndefined();
    });

    it('Should get all elements', async ()=>{
        await sut.insert(someObject);
        await sut.insert(someObject2);
        const expected = [someObject, someObject2];

        const actual = await sut.getAllElements();
        expect(actual).toEqual(expected);
    });
})