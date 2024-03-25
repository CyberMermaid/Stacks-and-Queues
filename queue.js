/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    // Create new node
    const newNode = new Node(val);

    // If the queue is empty, set the first and last nodes to newNode
    if (this.first === null){
      this.first = newNode;
      this.last = newNode;
    } 
    else {
      // Add the new node to the end of the queue
      this.last.next = newNode;
      // Update this.last point so that it is the last node in the queue
      this.last = newNode; 
    }
    // Increment size of the queue
    this.size++;
    return undefined;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    try {
      if (this.first === null){
        throw new Error ("The queue is empty");
      } else {
        // Declare tempVal and assign the value of the first node to it
        let tempVal = this.first.val;
        // Set first node equal to next node 
        this.first = this.first.next;
        // Decrement size of the queue after successful dequeue
        this.size --;
        return tempVal;
      }
    }
    catch(err) {
      console.error(err);
      return undefined;
    }    
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    // Check if queue is empty
      if (this.first === null){
        throw new Error ("This queue is empty!"); 
      }
     // if queue is not empty, return the value of the first node 
      else{
        return this.first.val;
      }
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    // if this.first is null, there is no nodes in the queue
    if (this.first === null){
    return true;
    }
    return false;
  }
}

module.exports = Queue;