var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, age, mobile) {
        this.name = name;
        this.age = age;
        this.mobile = mobile;
    }
    return User;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, mobile, designation, salary, officeTime) {
        var _this = _super.call(this, name, age, mobile) || this;
        _this.designation = designation;
        _this.salary = salary;
        _this.officeTime = officeTime;
        return _this;
    }
    Employee.prototype.printEmployee = function () {
        console.log("The name of employee is ".concat(this.name, ", age ").concat(this.age, ", mobile ").concat(this.mobile, ", designation ").concat(this.designation, ", salary ").concat(this.salary, " with officeTime ").concat(this.officeTime));
    };
    return Employee;
}(User));
var emp = new Employee("Ashish", 20, "9308797663", "SDE - 1", 10000, "10:00 - 6:00");
emp.printEmployee();
