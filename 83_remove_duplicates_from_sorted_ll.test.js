'use strict';

const LinkedList = require('./data_structures/linkedlist/linkedlist');


// function removeDuplicates(head) {
//     if(!head){
//         return null
//     }
//     let current = head;
//     let previous = current;
//     let checkObj = {};

//     while(current){
//         if(current.value in checkObj){
//             previous.next = current.next;
//             current.next = null;
//             current = previous.next;
//         } else {
//             checkObj[current.value] = true;
//             previous = current;
//             current = current.next;
//         }

//     }
//     return head;
// }


// function removeDuplicates(head) {
//     if(!head){
//         return null
//     }
//     let current = head;
//     // let previous = current;

//     while(current && current.next){
//         if(current.value === current.next.value){
//             let tmp = current.next;
//             current.next = tmp.next;
//             tmp.next = null;
//             tmp = current.next;
//             console.log(head);
//             while(tmp){
//                 if(tmp.value === current.value){
//                     current.next = tmp.next;
//                     tmp.next = null;
//                     tmp = current.next;
//                 }
//                 break;
//             }
//             current = current.next;
//         } else{
//             current = current.next;
//         }
//     }
//     return head;
// }

function removeDuplicates(head){
    if(!head){
        return null;
    }
    let current = head;
    while(current && current.next) {
        if(current.value === current.next.value) { 
            current.next = current.next.next
        }
        else{
            current = current.next;  // only move the current pointer if the next node is different
        }
    }
    return head;
}

describe('remove duplicates', () => {
    test('example 1', () => {
        let ll = new LinkedList();
        ll.append(0);
        ll.append(1);
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
    })
    test('example 4', () => {
    let ll = new LinkedList();
    ll.append(1);
    ll.append(1);
    ll.append(1);
    removeDuplicates(ll.head);
    expect(ll.getLength()).toStrictEqual(1);
    })
    test('example 5', () => {
        let ll = new LinkedList();
        ll.append(1);
        ll.append(2);
        removeDuplicates(ll.head);
        expect(ll.getLength()).toStrictEqual(2);
        })
    test('example 6', () => {
        let ll = new LinkedList();
        ll.append(1);
        ll.append(1);
        ll.append(2);
        removeDuplicates(ll.head);
        expect(ll.getLength()).toStrictEqual(2);
        })
})