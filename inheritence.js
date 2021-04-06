class Parent {
    constructor(){
        this.FathersName = "ajskd"
    }
}
class Child extends Parent{
    constructor(namme){
        // only use super to get inherited..
        super();
        this.name = namme;
    }
}
const fNames = new Child("nadim sajid")
const names = new Child("montu")
console.log(names,fNames);                     
