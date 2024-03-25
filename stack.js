/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */
  push(val) {
     // Create new node
     const newNode = new Node(val);

     // If the stack is empty, set the first and last nodes to newNode
     if (this.first === null){
       this.first = newNode;
       this.last = newNode;
     } 
     else {
       // Add the new node to the end of the stack
       this.last.next = newNode;
       // Update this.last point so that it is the last node in the stack
       this.last = newNode; 
     }
     // Increment size of the stack
     this.size++;
     return undefined;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.first === null){
      throw new Error ("This stack is empty!");
    } else {
      // Store the value of the first node in tempVal
      let tempVal = this.first.val;
      // Set first node equal to next node 
      this.first = this.first.next;
      // Decrement size of the queue after successful pop
      this.size --;
      return tempVal; 
    }
  }

  /** peek(): return the value of the first node in the stack. */
  peek() {
    // Check if stack is empty
    if (this.first === null){
      throw new Error ("This stack is empty!"); 
    }
   // If the stack is not empty, return the value of the first node 
    else{
      return this.first.val;
    }
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */
  isEmpty() {
    // if this.first is null, there is no nodes in the stack
    return this.first == null; 
  }
}

module.exports = Stack;