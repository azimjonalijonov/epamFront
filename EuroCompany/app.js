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
// Employee class
var Employee = /** @class */ (function () {
    function Employee(name, currentProject) {
        this.name = name;
        this.currentProject = currentProject;
    }
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.getCurrentProject = function () {
        return this.currentProject;
    };
    return Employee;
}());
// Frontend class
var Frontend = /** @class */ (function (_super) {
    __extends(Frontend, _super);
    function Frontend(name, project) {
        return _super.call(this, name, project) || this;
    }
    return Frontend;
}(Employee));
// Backend class
var Backend = /** @class */ (function (_super) {
    __extends(Backend, _super);
    function Backend(name, project) {
        return _super.call(this, name, project) || this;
    }
    return Backend;
}(Employee));
// Company class
var Company = /** @class */ (function () {
    function Company() {
        this.employees = [];
    }
    Company.prototype.add = function (employee) {
        this.employees.push(employee);
    };
    Company.prototype.getProjectList = function () {
        return this.employees.map(function (employee) { return employee.getCurrentProject(); });
    };
    Company.prototype.getNameList = function () {
        return this.employees.map(function (employee) { return employee.getName(); });
    };
    return Company;
}());
// Create a company object
var europeCompany = new Company();
// Create Frontend and Backend employees
var frontendDev = new Frontend('Alice', 'Frontend Project');
var backendDev = new Backend('Bob', 'Backend Project');
// Add employees to the company
europeCompany.add(frontendDev);
europeCompany.add(backendDev);
// Display project list and name list
console.log('Project List:', europeCompany.getProjectList());
console.log('Name List:', europeCompany.getNameList());
