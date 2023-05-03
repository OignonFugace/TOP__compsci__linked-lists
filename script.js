class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }


    /**
    * Appends a new node with the given value to the end of the list.
    * @param {*} value - The value to be stored in the new node.
    */
    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            node.nextNode = this.tail;
        } else {
            let pointer = this.head;
            while (pointer.nextNode) {
                pointer = pointer.nextNode;
            }
            pointer.nextNode = node;
            node.nextNode = this.tail;
        }
    }


    /**
    * Prepends a new node with the given value to the beginning of the list.
    * @param {*} value - The value to be stored in the new node.
    */
    prepend(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            node.nextNode = this.tail;
        } else {
            node.nextNode = this.head;
            this.head = node;
        }
    }


    /**
    * Returns the number of nodes in the list.
    * @returns {number} - The size of the list.
    */
    get size() {
        if (!this.head) return 0;

        let size = 0;
        let pointer = this.head;
        while (pointer) {
            size += 1;
            pointer = pointer.nextNode;
        }
        return size;
    }


    /**
    * Returns the head node of the list.
    * @returns {Node|null} - The head node of the list, or null if the list is empty.
    */
    getHead() {
        return this.head;
    }


    /**
    * Returns the tail node of the list.
    * @returns {Node|null} - The tail node of the list, or null if the list is empty.
    */
    getTail() {
        if (!this.head) return null;
        let pointer = this.head;
        while (pointer.nextNode) {
            pointer = pointer.nextNode;
        }
        return pointer;
    }


    /**
    * Returns the value stored at the specified index in the list.
    * @param {number} index - The index of the node whose value is to be retrieved.
    * @returns {*|null} - The value stored at the specified index, or null if the index is invalid.
    */
    at(index) {
        if (!this.head) return null;

        let pointer = this.head;
        let currentIndex = 0;
        while (pointer) {
            if (index === currentIndex) return pointer.value;
            pointer = pointer.nextNode;
            currentIndex++;
        }
        return null;
    }


    /**
    * Removes the last node from the list and returns its value.
    * @returns {*|null} - The value of the removed node, or null if the list is empty.
    */
    pop() {
        if (!this.head) return null;

        if (this.size === 1) {
            const popedValue = this.head.value;
            this.head = null;
            return popedValue;
        }

        let pointer = this.head;
        while (pointer.nextNode.nextNode) {
            pointer = pointer.nextNode;
        }
        const popedValue = pointer.nextNode.value;
        pointer.nextNode = null;
        return popedValue;
    }


    /**
    * Checks if the list contains a node with the specified value.
    * @param {*} value - The value to search for in the list.
    * @returns {boolean} - True if the list contains a node with the specified value, false otherwise.
    */
    contains(value) {
        if (!this.head) return false;

        let pointer = this.head;
        while (pointer) {
            if (pointer.value === value) return true; 
            pointer = pointer.nextNode;
        }
        return false;
    }


    /**
    * Returns the index of the first node with the specified value in the list.
    * @param {*} value - The value to search for in the list.
    * @returns {number} - The index of the first node with the specified value, or -1 if the value is not found.
    */
    find(value) {
        if (!this.head) return -1;

        let pointer = this.head;
        let currentIndex = 0;
        while (pointer) {
            if (pointer.value === value) return currentIndex;
            pointer = pointer.nextNode;
            currentIndex++;
        }
        return -1;
    }


    /**
    * Returns a string representation of the list.
    * @returns {string} - A string representation of the list.
    */
    tostring() {
        if (!this.head) return 'null';

        let result = "";
        let pointer = this.head;
        while (pointer) {
            result += `( ${pointer.value} ) -> `;
            pointer = pointer.nextNode;
        }
        result += "null";
        return result;
    }


    /**
    * Inserts a new node with the given value at the specified index in the list.
    * @param {*} value - The value to be stored in the new node.
    * @param {number} index - The index at which the new node should be inserted.
    */
    insertAt(value, index) {
        if (index < 0 || index > this.size) {
            console.log("Invalid index");
            return;
        }

        if (!this.head && index === 0) {
            this.prepend(value);
            return;
        }
        
        if (index === 0) {
            this.prepend(value);
            return;
        }

        const node = new Node(value);
        let pointer = this.head;
        let currentIndex = 1;
        while (pointer.nextNode) {
            if (index === currentIndex) {
                node.nextNode = pointer.nextNode;
                pointer.nextNode = node;
                return;
            }
            pointer = pointer.nextNode;
            currentIndex++;
        }

        pointer.nextNode = node;
    }


    /**
    * Removes the node at the specified index from the list.
    * @param {number} index - The index of the node to remove.
    */
    removeAt(index) {
        if (index < 0 || index > this.size - 1) {
            console.log("Invalid index");
            return;
        }

        if (!this.head) return "Empty list";

        if (this.size === 1 && index === 0) {
            this.head = null;
            return;
        }

        if (index === 0) {
            this.head = this.head.nextNode;
            return;
        }

        let currentIndex = 1;
        let pointer = this.head;
        while (pointer.nextNode) {
            if (index === currentIndex) {
                pointer.nextNode = pointer.nextNode.nextNode;
                return;
            }
            pointer = pointer.nextNode;
            currentIndex++;
        }
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}


const list= new LinkedList();
list.prepend("Nouvelle, et donc première, valeur !");
list.append("Une valeur en fin de liste.");
list.append("hey!");



console.log(list.at(0));
console.log(list.at(1));
console.log(list.at(2));
console.log(list.at(3));
console.log(list.size);
console.log(list.getHead());
console.log(list.getTail());
list.pop();
console.log(list.getTail());

list.append(5);

console.log(list.contains(5));
console.log(list.contains('Hey'));

list.append('Hey');

console.log(list.contains('Hey'));

for (let i = 0 ; i < list.size ; i++) {
    console.log(i, ': ', list.at(i));
}

console.log(list.find(5));
console.log(list.find('Hey'));

console.log(list.tostring());

list.insertAt("Hello, I'm at index 2", 2);
console.log(list.tostring());

list.insertAt("last", list.size);
console.log(list.tostring());

list.removeAt(2);
console.log(list.tostring());

list.removeAt(0);
console.log(list.tostring());


console.log(list.size);
list.removeAt(list.size - 1);
console.log(list.tostring());
