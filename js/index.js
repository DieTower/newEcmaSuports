import Hello from './indexConsoleText.js';

class Main {
    constructor() {
        console.log("Hello");
        this.hello = new Hello();
    }
}

let main = new Main();