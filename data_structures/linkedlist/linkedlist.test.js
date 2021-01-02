'use strict';

const { test, expect } = require('@jest/globals');
let LinkedList = require('./linkedlist');
let Node = require('./node');


describe('Linked List', () => {
  test('ll with one node', () => {
    let a = new LinkedList();
    a.append(1);
    expect(a.head.value).toStrictEqual(1);
    expect(a.head.next).toStrictEqual(null);
  })
  test('ll with 3 nodes', () => {
    let a = new LinkedList();
    a.append(30);
    a.append(4);
    a.append('banana');
    expect(a.head.value).toStrictEqual(30);
    expect(a.head.next.next.value).toStrictEqual('banana');
    expect(a.head.next.next.next).toStrictEqual(null);
  });
});