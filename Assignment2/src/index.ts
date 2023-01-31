class User {
    
    name:string;
    age:Number;
    mobile:string;

    constructor(name:string,age:Number,mobile:string){
        this.name = name;
        this.age = age;
        this.mobile = mobile;
    }
}

interface setOfOpeation{
    designation:string;
    salary:Number;
    officeTime:string;
    printEmployee():void;
}

class Employee extends User implements setOfOpeation{
    designation:string;
    salary:Number;
    officeTime:string;
    constructor(name:string,age:Number,mobile:string,designation:string,salary:Number,officeTime:string){
        super(name,age,mobile)
        this.designation=designation;
        this.salary = salary;
        this.officeTime = officeTime;
        
    }

    printEmployee(): void {
        console.log(`The name of employee is ${this.name}, age ${this.age}, mobile ${this.mobile}, designation ${this.designation}, salary ${this.salary} with officeTime ${this.officeTime}`);
    }


}

let emp = new Employee("Mayank Raj", 21, "9784399760","sde_intern",20000,"11:00 - 8:00");
emp.printEmployee();
