// This file depicts full implementation of Linked Lists.


// Singly-Linked List (SLL) - can only iterated forwards / less memory per node

class Node {
    constructor(data) {
        this.data = data;
        nextElement = null;

    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }
}

// Doubly-Linked List (DLL) - can iterate forwards and backwards / more memory per node

class Node {
    constructor(data) {
        this.data = data;
        nextElement = null;
        previousElement = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }
}