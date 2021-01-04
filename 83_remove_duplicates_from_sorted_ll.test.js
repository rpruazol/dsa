'use strict';

const LinkedList = require('./data_structures/linkedlist/linkedlist');


function removeDuplicates(head) {
    if(!head){
        return null
    }
    let current = head;
    let previous = current;
    let checkObj = {};

    while(current){
        if(current.value in checkObj){
            previous.next = current.next;
            current.next = null;
            current = previous.next;
        } else {
            checkObj[current.value] = true;
            previous = current;
            current = current.next;
        }

    }
    return head;
}

describe('remove duplicates', () => {
    test('example 1', () => {
        let ll = new LinkedList();
        ll.append(1);
        ll.append(0);
        ll.append(1);
        removeDuplicates(ll.head);
        expect(ll.getLength()).toStrictEqual(2);
      })
    test('example 2', () => {
        let ll = new LinkedList();
        ll.append(1);
        ll.append(1);
        ll.append(2);
        ll.append(3);
        ll.append(3);
        removeDuplicates(ll.head);
        expect(ll.getLength()).toStrictEqual(3);
        // expect(removeDuplicates(ll.head).next.next.value).toStrictEqual(3);
    })
})