class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

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

    getHead() {
        return this.head;
    }

    getTail() {
        if (!this.head) return null;
        let pointer = this.head;
        while (pointer.nextNode) {
            pointer = pointer.nextNode;
        }
        return pointer;
    }

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

    contains(value) {
        if (!this.head) return false;

        let pointer = this.head;
        while (pointer) {
            if (pointer.value === value) return true; 
            pointer = pointer.nextNode;
        }
        return false;
    }

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
