import { hello } from './App';

describe('hello', () => {
    it('testing hello output', () => {
        expect(hello()).toBe('hello');
    })
})