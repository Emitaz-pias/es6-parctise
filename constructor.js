//class is used for to crete similar objects with ssimilar porpertrys

class Student{
    constructor(sId,sName,sSchool){
        this.id=sId;
        this.name=sName;
        this.school=sSchool;
    }
}
const student1 = new Student(12,"Mr.goruchur","gorchura ideal high school");
const student2 = new Student(11,"Mr. khete chur","kheta chura ideal high school")
console.log(student1);
console.log(student2);