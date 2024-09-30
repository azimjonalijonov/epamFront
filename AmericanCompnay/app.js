var Frontend = /** @class */ (function () {
    function Frontend(name, project) {
        this.name = name;
        this.currentProject = project;
    }
    Frontend.prototype.getCurrentProject = function () {
        return this.currentProject;
    };
    Frontend.prototype.getName = function () {
        return this.name;
    };
    return Frontend;
}());
var Backend = /** @class */ (function () {
    function Backend(name, project) {
        this.name = name;
        this.currentProject = project;
    }
    Backend.prototype.getCurrentProject = function () {
        return this.currentProject;
    };
    Backend.prototype.getName = function () {
        return this.name;
    };
    return Backend;
}());
var Company = /** @class */ (function () {
    function Company() {
        this.employees = [];
    }
    Company.prototype.add = function (employee) {
        this.employees.push(employee);
    };
    Company.prototype.getProjectList = function () {
        return this.employees.map(function (emp) { return emp.getCurrentProject(); });
    };
    Company.prototype.getNameList = function () {
        return this.employees.map(function (emp) { return emp.getName(); });
    };
    return Company;
}());
var americanCompany = new Company();
var frontendDev = new Frontend('John', 'Mobile App');
var backendDev = new Backend('Jane', 'Database Optimization');
americanCompany.add(frontendDev);
americanCompany.add(backendDev);
console.log("Project List: ", americanCompany.getProjectList());
console.log("Name List: ", americanCompany.getNameList());
