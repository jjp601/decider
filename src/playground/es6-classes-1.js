class Person {
    constructor(name = 'Anonymous', age= 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi! I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` There major is ${this.major}.`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, home) {
        super(name, age)
        this.home = home;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if (this.home) {
            greeting += ` I'm visiting from ${this.home}.`;
        }

        return greeting;
    }
}

const me = new Traveler('Jon Powell', 29, 'Omaha')
console.log(me.getGreeting());