import { hello, add, removeSNames } from './App';

describe('hello', () => {
    it('testing hello output', () => {
        expect(hello()).toBe('hello');
    })
})

describe('add', () => {
    it('tesing add function', () => {
        expect(add(3, 5)).toEqual(8);
        expect(add(2, 2)).toEqual(4);
    })

    it('testing for only numbers', () => {
        expect(add(2, '2')).toEqual(null);
    })

    it('testing for only numbers', () => {
        expect(add(2, {})).toEqual(null);
    })

    it('testing for only numbers', () => {
        expect(add(2, [])).toEqual(null);
    })
})

describe('Removing all S names', () => {
    let names = ['Scott', 'Val', 'scott'];
    
    it('should remove all Snames', () => {
        expect(removeSNames(names)).not.toContain('Scott', 'scott');
    })
    it('should not remove other names', () => {
        expect(removeSNames(names)).toContain('Val');
    })
    it('should account for case', () => {
        expect(removeSNames(names)).toContain('Val');
    })
})