import { getObstacleEvents } from './computer-vision';



interface AutonomousCar {
    isRunning?: boolean,

    respond: (events: Events) => void;
}

interface AutonomousCarProps {
    isRunning?: boolean;
}

interface Events {
    [mode: string]: boolean
}

interface Control {
    execute: (command: string) => void;
}

interface Steering extends Control {
    turn: (direction: string) => void;
}


class SteeringControl implements Steering {
    execute(command: string) {
        console.log('Executing: ', command);
    }

    turn(direction: string) {
        this.execute(`turn ${direction}`);
    }
}

class Car implements AutonomousCar {
    isRunning;

    constructor(props: AutonomousCarProps) {
        this.isRunning = props.isRunning;
    }

    respond(events: Events) {
        if (!this.isRunning) {
            return 'Car is off';
        }
        return 'what a hell';
    }
    
}

const autonomousCar = new Car({isRunning: false});
console.log(autonomousCar.respond(getObstacleEvents()));