'use strict';

const LinkedList = require('./data_structures/linkedlist/linkedlist');
const Node = require('./data_structures/linkedlist/node');

// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?

const reverseList = function(head) {
    if(!head){
        return null;
    }
    let current = head;
    let previous = null;
    let next = current.next;

    while(current){
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    head = previous;
    return head;
};

// recursively

// const reverseList = function(head) {
//     // base case
//     if(!head || !head.next){
//         return head;
//     }
//     let tmp = reverseList(head.next);
//     head.next.next = head;
//     head.next = null;
//     return tmp;
// }






describe('reverse ll', () => {
    test('reverse a small ll', () => {
        let a = new LinkedList();
        a.append('hello');
        a.append('world');
        let output = reverseList(a.head);
        expect(output.value).toStrictEqual('world');
        expect(output.next.value).toStrictEqual('hello');
    })
    test('reverse a large ll', () => {
        let a = new LinkedList();
        a.append(1);
        a.append(2);
        a.append(3);
        a.append(4);
        a.append(5);
        a.append(6);
        a.append(7);
        a.append(8);
        let output = reverseList(a.head);
        console.log(a);
        expect(output.value).toStrictEqual(8);
        expect(output.next.next.next.value).toStrictEqual(5);
    })
})