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

    // Search in SLL - see if value is within list:
    search(value) {

        // check if list is empty
        if(this.isEmpty()) {
            return this;
        }

        let currentNode = this.head;

        while(currentNode !== null) {
            if(currentNode.data === value){
                return true;
            }
            currentNode = currentNode.nextElement();
        }

        return false;
    }

    // Deletions in SSL
    deleteAtHead () {
        // check if list is empty
        if(this.isEmpty()) {
            return this;
        }

        let firstElement = this.head;

        // makes next element new head - essentially severs previous firstElement
        this.head = firstElement.nextElement;

        return this;
    }
    // Delete at Head ==> O(1)

    deleteAtTail () {
        if(this.isEmpty()) {
            return this;
        }

        let currentNode = this.head;

        while(currentNode.nextElement.nextElement != null) {
            currentNode = currentNode.nextElement;
        }

        currentNode.nextElement = null;

        return this;
    }

    // Delete at Tail (no pointer, SLL) ==> O(n)

    deleteByValue (value) {
        if(this.isEmpty()) {
            return this;
        }

        let currentNode = this.head;

        while(currentNode.nextElement != null) {
            if(currentNode.nextElement.data === value) {
                currentNode.nextElement = currentNode.nextElement.nextElement;

            }
            currentNode = currentNode.nextElement;
        }

        return this;
    }
    // Delete by Value ==> O(n)
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
mySLL.insertAtHead(1);
console.log(mySLL.deleteAtTail());