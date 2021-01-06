'use strict';


const Node = require('./data_structures/linkedlist/node')
const LinkedList = require('./data_structures/linkedlist/linkedlist');


let isPalindrone = function(head){
    let input = [];
    let output = [];
    while(head){
        output.push(head.value);
        input.unshift(head.value);
        head = head.next;
    }
    if(output.length !== input.length){
        return false
    }
    for(let i = 0; i < output.length; i++){
        if(output[i] !== input[i]){
            return false;
        }
    }
    return true;
}


describe('palindrome linked list', () => {
    test('example 1', () => {
        let a = new LinkedList();
        a.append(1);
        a.append(1);
        expect(isPalindrone(a.head)).toStrictEqual(true);
    })
    test('example 2', () => {
        let a = new LinkedList();
        a.append(1);
        a.append(2);
        expect(isPalindrone(a.head)).toStrictEqual(false);
    })
    test('example 2', () => {
        let a = new LinkedList();
        a.append(1);
        a.append(0);
        a.append(0);
        a.append(1);
        a.append(1);
        a.append(0);
        a.append(0);
        a.append(1);
        a.append(1);
        a.append(0);
        a.append(0);
        a.append(1);
        expect(isPalindrone(a.head)).toStrictEqual(true);
    })
})