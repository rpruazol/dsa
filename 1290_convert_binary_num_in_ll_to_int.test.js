'use strict';

const Node = require('./data_structures/linkedlist/node');
const LinkedList = require('./data_structures/linkedlist/linkedlist');

`
Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

Example 1:
Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10

Example 2:
Input: head = [0]
Output: 0

Example 3:
Input: head = [1]
Output: 1

Example 4:
Input: head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
Output: 18880

Example 5:
Input: head = [0,0]
Output: 0

`
// [1,0,1]

let getDecimalValue = function(head) {

  // traverse linked list
  let current = head;
  let valueArr = [];
  let output = '';
  while(current){
    valueArr.push(current.value)
    current = current.next;
  }
  for (let i = 0; i < valueArr.length; i++) {
    output += valueArr[i].toString();
  }
  let a = parseInt(output, 2);
  return a;
}


describe('challenge', () => {
  test('test [1,0,1]', () => {
    let ll = new LinkedList()
    ll.append(1)
    ll.append(0)
    ll.append(1)
    expect(getDecimalValue(ll.head)).toStrictEqual(5);
  })
  test('test [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]', () => {
    let ll = new LinkedList()
    let arr = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0];
    arr.forEach(value => {
      ll.append(value);
    })
    expect(getDecimalValue(ll.head)).toStrictEqual(18880)
  })
})