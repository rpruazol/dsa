'use strict';


const LinkedList = require('./data_structures/linkedlist/linkedlist');
const Node = require('./data_structures/linkedlist/node');



function mergeTwoLists(l1, l2) {
  let tmp = new LinkedList().append(0);
  let head = tmp;
  console.log('before>>', head);
  l1 = l1.head;
  l2 = l2.head;
  while(l1 && l2){
      if(l1.value < l2.value){
        // console.log('tmp', tmp)
        tmp.next = l1; // assign
        l1 = l1.next; //shift reference to next node
      }
      else{
        tmp.next = l2;
        l2 = l2.next;
      }
      tmp = tmp.next;
    }
    // console.log('tmp after while loop >> ', tmp);
    if (l1 !== null) {
      tmp.next = l1;
  } else {
      tmp.next = l2;
  }
  return head.next;
};



describe('mergeTwoLists tests', () => {
    test('example 1', () => {
        const a = new LinkedList();
        const b = new LinkedList();
        a.append(1)
        a.append(2)
        a.append(4)
        b.append(1)
        b.append(3)
        b.append(4)
        let output = mergeTwoLists(a, b);
        expect(output).toStrictEqual(b.head);
        // expect(output.head.next.next.next.next.value).toStrictEqual(4)
        // expect(output.head.next.next.next.next.next.value).toStrictEqual(4)
    })
    xtest('example 2', () => {
        const a = new LinkedList();
        const b = new LinkedList();
        let output = mergeTwoLists(a, b)
        expect(output).toStrictEqual(null);
    })
    xtest('example 3', () => {
        const a = new LinkedList();
        const b = new LinkedList();
        b.append(0)
        let output = mergeTwoLists(a, b)
        expect(output.head).toStrictEqual(b.head);
    })

})