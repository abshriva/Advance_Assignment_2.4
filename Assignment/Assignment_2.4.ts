interface IAnimal {
    name: string;
}

interface IDog {
    name : string;
    legs : number;
}

class Parent<T> {
    children: T[];
    constructor() {
        this.children = [];
    }
}

let animalInfo : IAnimal = { name: "Dog"};
let parents: Parent<IAnimal> = new Parent<IAnimal>();
parents.children.push(animalInfo);
console.log(parents.children);

let dogInfo : IDog = { name : "German Shephard", legs : 4};
let robots: Parent<IDog> = new Parent<IDog>();
robots.children.push(dogInfo);
console.log(robots.children);