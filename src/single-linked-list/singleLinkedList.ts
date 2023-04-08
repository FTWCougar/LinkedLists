interface LLNode {
    // Need for linked list
    // value
    // insert next node (Function)
    // delete next node (Function)
    insertNode: (node: LLNode) => void;
    deleteNode: () => void;
    moveNext: () => LLNode;
    getValue: () => String;
}

class StringNode implements LLNode {
    private value: String;
    private nextNode: LLNode;

    constructor(value: String) {
        this.value = value;
    }

    insertNode(newNode: LLNode) {
        if (this.nextNode) {
            newNode.insertNode(this.nextNode);
        }

        this.nextNode = newNode;
    }

    deleteNode() {
        const tempNode = this.moveNext().moveNext();
        this.nextNode = tempNode;
    }

    moveNext() {
        return this.nextNode;
    }

    getValue() {
        return this.value;
    }
}

const n = new StringNode("n");
const o = new StringNode("o");

n.insertNode(o);

const printNodes = (n: LLNode) => {
    let current = n;
    while (true) {
        console.log(current.getValue());
        current = current.moveNext();

        if (!current) {
            break;
        }
    }

    console.log("\n\n");
};

printNodes(n);

const p = new StringNode("p");

n.insertNode(p);

printNodes(n);

n.deleteNode();

printNodes(n);
