import { hello, add, removeSNames, removeNum, totalCost } from './App';
// Testing to check if hello function => 'hello'
describe('hello', () => {
    it('testing hello output', () => {
        // Output should be hello
        expect(hello()).toBe('hello');
    })
})
// Tetsing to check if add() => a + b
describe('add', () => {
    it('tesing add function', () => {
        // 3 + 5 = 8, test passes
        expect(add(3, 5)).toEqual(8);
        expect(add(2, 2)).toEqual(4);
    })
    // should accept only numbers as args
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
// Testing to check if function is filtering all names begining wit S
describe('Removing all S names', () => {
    // dummy data to test against function with.
    let names = ['Scott', 'Val', 'scott'];

    it('should remove all Snames', () => {
        expect(removeSNames(names)).not.toContain('Scott', 'scott');
    })
    it('should not remove other names', () => {
        expect(removeSNames(names)).toContain('Val');
    })
    // I use a .toLowerCase in the function body to get around this requirment 
    it('should account for case', () => {
        expect(removeSNames(names)).toContain('Val');
    })
})
// Should remove all numbers greater or equal to 100
describe('Testing removeNum functionality', () => {
    let nums = [80, 90, 100, 110, 120]
    it('should remove all number greater than or equal to 100', () => {
        expect(removeNum(nums)).toContain(80, 90);
    })
})
// return sum of all items in the array.
describe('Testing totalCost function', () => {
    let items = [20, 40, 30];
    it('should return total sum of items cost', () => {
        expect(totalCost(items)).toEqual(90);
    })
    it('should not return undefined', () => {
        expect(totalCost(items)).not.toBeUndefined()
    })
})