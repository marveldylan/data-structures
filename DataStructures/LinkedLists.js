// This file depicts full implementation of Linked Lists.


// Singly-Linked List (SLL) - can only iterated forwards / less memory per node

class SLLNode {
    constructor(data) {
        this.data = data;
        this.nextElement = null;

    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    // list methods

    // returns true if list head is null
    isEmpty() {
        return(this.head === null);
    }

    getHead() {
        return this.head;
    }
    // insertions

    insertAtHead(data) {
        let tempNode = new SLLNode(data);
        tempNode.nextElement = this.head;
        this.head = tempNode;
        return this;
    }
    // insertAtHead ==> O(1)

    insertAtTail(data) {
        let node = new SLLNode(data);

        // if list is empty, just insert as list head
        if(this.isEmpty()){
            this.head = node;
            return this;
        }

        // iterate through list til you get to end
        let currentNode = this.head;

        while(currentNode.nextElement !== null) {
            currentNode = currentNode.nextElement;
        }

        currentNode.nextElement = node;
        return this;
    }
    // insertAtTail SLL ==> O(n), n = # of nodes in list. Unless there is a tail pointer (like head)
}

// Doubly-Linked List (DLL) - can iterate forwards and backwards / more memory per node

class DLLNode {
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

    // list methods

    // returns true if list head is null
    isEmpty() {
        return (this.head === null);
    }
}

let mySLL = new SinglyLinkedList;

mySLL.insertAtHead('I was inserted at head');
mySLL.insertAtHead('So was I');
mySLL.insertAtTail('And I was inserted at tail');
console.log(mySLL.getHead());