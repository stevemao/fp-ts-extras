import {stringify, parse} from '../'
import * as E from 'fp-ts/lib/Either'

describe('stringify', () => {
    test('should successfully stringify an object', () => {
        const reality = stringify({
            foo: "bar"
        })
        const expected = E.either.of(JSON.stringify({
            foo: "bar"
        }))
        expect(reality).toStrictEqual(expected);
    });    

    test('should fail to stringify an object with circular reference', () => {
        const circularReference: any = {};
        circularReference.myself = circularReference;

        const reality = stringify(circularReference)

        expect(E.isLeft(reality)).toEqual(true);
    });    
})

describe('parse', () => {
    test('should successfully parse a json string', () => {
        const reality = parse(
            JSON.stringify({
                foo: "bar"
            })
        )
        const expected = E.either.of({
            foo: "bar"
        })
        expect(reality).toStrictEqual(expected);
    })

    test('should fail to parse a non json string', () => {
        const reality = parse("abc")

        expect(E.isLeft(reality)).toEqual(true);
    })
})
