'use strict';


// hash map solution
var hasCycle = function(head) {
    let hashMap = {};
    let i = 0;
    while(head){
        if(Object.values(hashMap).indexOf(head) > -1){
            return true
        }
        else{
            hashMap[i++] = head;
            head = head.next
        }
    }
    return false
};


// two pointer solution
var hasCycle = function(head) {
    if(!head){
        return false;
    }
    let fast = head.next;
    let slow = head;
    
    while(fast !== slow){
        if(!fast || !slow){
            return false //we reached the end, therefore its not a cycle
        }
        else {
            if(!fast.next){
                return false //
            }
            else {
                slow = slow.next;
                fast = fast.next.next;    
            }
        }
    }
    return true
};