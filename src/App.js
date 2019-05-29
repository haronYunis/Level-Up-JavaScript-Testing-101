export const hello = () => 'hello';
export const add = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return null;
    }
    return x + y;
}
// Create a function that removes all s names out of given array of strings.
export const removeSNames = names => {
    return names.filter(name => name.toLowerCase().charAt(0) !== 's')
}

// Create a function that removes all elements that are greater than 60 out if an array of integers
export const removeNum = nums => {
    return nums.filter(num => num < 100)
}

// High order map function example
// Should accumulate total cost of items
// Should not return a float

export const totalCost = items => {
    return items.reduce((total, amount) => total + amount);

}