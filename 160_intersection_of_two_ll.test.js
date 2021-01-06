'use strict';

const LinkedList = require('./data_structures/linkedlist/linkedlist');
const Node = require('./data_structures/linkedlist/node');

// Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
// Output: Reference of the node with value = 2
// Input Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.

const getIntersectionNode = function(headA, headB) {
    // brute force:  traverse linkedlist
    while(headA){
        let headBTemp = headB;
        while(headBTemp){
            if(headBTemp === headA){
                return headA;
            } else{
                headBTemp = headBTemp.next;
            }
        }
        headA = headA.next;
    }
    return null;
}

describe('remove duplicates', () => {
    test('example 1', () => {
        let lla = new LinkedList();
        let llb = new LinkedList();
        lla.append(4);
        lla.append(1);
        lla.append(8);
        // lla.append(4);
        // lla.append(5);
        llb.append(5);
        llb.append(6);
        llb.append(1);
        llb.append(8);
        llb.append(4);
        llb.append(5);
        let a = getIntersectionNode(lla.head, llb.head);
        expect(a.value).toStrictEqual(8);
      })

})
