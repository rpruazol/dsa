'use strict';

let Node = require('./node')


class LinkedList {
  constructor(){
    this.head = null;
  }
  append(value){
    let node = new Node(value);
    if(!this.head){
      this.head = node;
    }
    else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    return this;
  }
  getLength() {
    let current = this.head;
    let length = 0;
    while(current) {
      length++;
      current = current.next;
    }
    return length;
  }
}

module.exports = LinkedList;