'use strict';


const LinkedList = require('./data_structures/linkedlist/linkedlist');
const Node = require('./data_structures/linkedlist/node');



function mergeTwoLists(l1, l2) {
    console.log('l1', l1);
    console.log('l2', l2);
    if(!l1.head && !l2.head){
        return null;
    }
    if(!l1.head){
        return l2;
    }
    if(!l2.head){
        return l1;
    }
    let current = l2.head;
    let tmp = l2.head.next;
    let next = l1.head;

    // splice the first node in each together

    current.next = next;
    current = next;
    next = current.next;
    current = current.next;
    
    next = current.next;
    current.next = tmp;
    current = current.next;

    tmp = current.next;
    current.next = next;
    current = current.next

    current.next = tmp;
    current = current.next

    return l2;
};



describe('mergeTwoLists tests', () => {
    xtest('example 1', () => {
        const a = new LinkedList();
        const b = new LinkedList();
        a.append(1)
        a.append(2)
        a.append(4)
        b.append(1)
        b.append(3)
        b.append(4)
        let output = mergeTwoLists(a, b);
        expect(output.head).toStrictEqual(b.head);
        expect(output.head.next.next.next.next.value).toStrictEqual(4)
        expect(output.head.next.next.next.next.next.value).toStrictEqual(4)
    })
    test('example 2', () => {
        const a = new LinkedList();
        const b = new LinkedList();
        let output = mergeTwoLists(a, b)
        expect(output).toStrictEqual(null);
    })
    test('example 3', () => {
        const a = new LinkedList();
        const b = new LinkedList();
        b.append(0)
        let output = mergeTwoLists(a, b)
        expect(output.head).toStrictEqual(b.head);
    })

})