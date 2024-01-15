// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     push(element) {
//         this.items.push(element);
//     }

//     pop() {
//         if (this.items.length == 0)
//             return "Underflow";
//         return this.items.pop();
//     }

//     peek() {
//         return this.items[this.items.length - 1];
//     }

//     isEmpty() {
//         return this.items.length == 0;
//     }
// }

// function hanoi(disc, src, aux, dest) {
//     if (disc > 0) {
//         hanoi(disc - 1, src, dest, aux);
//         console.log('Move disc ' + disc + ' from ' + src + ' to ' + dest);
//         hanoi(disc - 1, aux, src, dest);
//     }
// }

// var discs = 3;
// hanoi(discs, 'Src', 'Aux', 'Dest');

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length == 0;
    }
}

class HanoiTower {
    constructor() {
        this.towers = {
            'Src': new Stack(),
            'Aux': new Stack(),
            'Dest': new Stack()
        };
    }

    initialize(discs) {
        for (let i = discs; i > 0; i--) {
            this.towers['Src'].push(i);
        }
    }

    moveDisc(source, destination) {
        if (!this.towers[source].isEmpty()) {
            const disc = this.towers[source].pop();
            this.towers[destination].push(disc);
            console.log(`Move disc ${disc} from ${source} to ${destination}`);
        } else {
            console.log(`Cannot move from ${source} to ${destination}. Source tower is empty.`);
        }
    }

    solveHanoi(disc, source, auxiliary, destination) {
        if (disc > 0) {
            this.solveHanoi(disc - 1, source, destination, auxiliary);
            this.moveDisc(source, destination);
            this.solveHanoi(disc - 1, auxiliary, source, destination);
        }
    }

    printTowers() {
        console.log("Current Tower State:");
        console.log("Src:", this.towers['Src'].items);
        console.log("Aux:", this.towers['Aux'].items);
        console.log("Dest:", this.towers['Dest'].items);
        console.log("----------------------");
    }
}

const hanoiTower = new HanoiTower();
hanoiTower.initialize(4);
hanoiTower.printTowers();
hanoiTower.solveHanoi(4, 'Src', 'Aux', 'Dest');
hanoiTower.printTowers();
