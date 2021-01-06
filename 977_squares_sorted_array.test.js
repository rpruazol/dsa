'use strict';


let sortedSquares = function(nums) {
    for(let i = 0; i < nums.length; i++){
        nums[i] = nums[i] * nums[i];
    }
    return nums.sort((a,b) => {
        return a-b;
    })
}


describe('sorted Squares', () => {
    test('example 1', () => {
        let a = [-4,-1,0,3,10];
        expect(sortedSquares(a)).toStrictEqual([0,1,9,16,100])
    })
    test('example 2', () => {
        let a = [-7,-3,2,3,11];
        expect(sortedSquares(a)).toStrictEqual([4,9,9,49,121])
    })
})

