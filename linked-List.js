class Node {
    constructor(value = null, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
}

class List{
    constructor() {
        this.head = null;
    }

    prepend(value) {
        let tmp = null;
        if(this.head != null) tmp = this.head;
            this.head = new Node(value);
            this.head.nextNode = tmp;
    }

    append(value) {
        if(this.head == null) this.prepend(value);
        else {
            let tmp = this.head;
            while(tmp.nextNode != null) tmp = tmp.nextNode;
            tmp.nextNode = new Node(value);
        }
    }

    size() {
        let tmp = this.head;
        let nodeCounter = 0;
        while(tmp != null) {
            nodeCounter++;
            tmp = tmp.nextNode;
        }
        return nodeCounter;
    }

    listHead() {
        return this.head;
    }

    listTail() {
        let tmp = this.head;
        while(tmp.nextNode != null) {
            tmp = tmp.nextNode;
        }
        return tmp;
    }

    at(index) {
        let tmp = this.head;
        for(let i = 0; i < index; i++){
            tmp = tmp.nextNode;
            if(tmp == null) return "No item exists for this index";
        }
        return tmp;
    }

    pop() {
        let current = this.head;
        let previous = null;
        while(current.nextNode != null) {
            previous = current;
            current = current.nextNode;
        }
        previous.nextNode = null;
    }

    contains(value) {
        let tmp = this.head;
        while(tmp != null) {
            if(tmp.value === value) return true;
            tmp = tmp.nextNode;
        }
        return false;
    }

    find(value) {
        let tmp = this.head;
        let index = 0;
        while(tmp != null){
            if(tmp.value === value) return index;
            tmp = tmp.nextNode;
            index ++;
        }
        return "No such value";
    }

    toString() {
        let tmp = this.head;
        let stringFormat = "";
        while(tmp != null) {
            stringFormat += `${tmp.value} => `;
            tmp = tmp.nextNode;
        }
        return (stringFormat += null);
    }

    insertAt(value, index) {
        if(this.head == null) this.prepend(value);
             else {
                let current = this.head;
                let previous = null;
                for(let i = 0; i < index; i++) {
                    previous = current;
                    current = current.nextNode;
                    if(current == null) break; //this means index is greater than size of list
                }
                const tmp = new Node(value);
                previous.nextNode = tmp;
                tmp.nextNode = current;
             }
    }

    removeAt(index) {
        if(this.head == null) return "List Empty";
        let current = this.head;
        let previous = null;
        for(let i = 0; i < index; i++) {
            previous = current;
            current = current.nextNode;
            if(current == null) return "Could not find item with tthe given index"
        }
        previous.nextNode = current.nextNode;
    }

}

const linkedList = new List();

linkedList.append("List-1");
linkedList.append("List-2");
linkedList.append("List-3");
linkedList.append("List-4");

// list SIZE
console.log("Linked List Size: ", linkedList.size()); //returns 4

// List Head
console.log("Linked List HEAD: ", linkedList.listHead());// returns "list-1"

// List Tail
console.log("Linked-List TAIL: ", linkedList.listTail()); //returns "list-4"

// Get value at random index
console.log("Linked-List at index 2:", linkedList.at(2));

// Returns True/False if value exists in Linked-List
console.log("Linked List contains: ", linkedList.contains("List-4"));

// Print Linked List to String format
console.log(linkedList.toString()); //returns <List-1 => List-2 => List-3 => List-4 => null>

// Insert new List Node at random index
// linkedList.insertAt("LIST-5", 5)
// console.log(linkedList.toString()); //returns <List-1 => List-2 => List-3 => List-4 => LIST-5 => null>

// Remove List Node at random index
// linkedList.removeAt(3);
// console.log(linkedList.toString()) //returns <List-1 => List-2 => List-3 => LIST-5 => null>

// Add Linked-List at First NODE
// linkedList.prepend("List-0");
// console.log(linkedList.toString()); //returns <List-0 => List-1 => List-2 => List-3 => LIST-5 => null>

// Removes last Node
// linkedList.pop();
// console.log(linkedList.toString());

// finds value in list
console.log(linkedList.find("List-6")); //returns "No such value"