var Parent = (function () {
    function Parent() {
        this.children = [];
    }
    return Parent;
}());
var animalInfo = { name: "Dog" };
var parents = new Parent();
parents.children.push(animalInfo);
console.log(parents.children);
var dogInfo = { name: "German Shephard", legs: 4 };
var robots = new Parent();
robots.children.push(dogInfo);
console.log(robots.children);
