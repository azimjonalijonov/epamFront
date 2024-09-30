var CompanyLocationArray = /** @class */ (function () {
    function CompanyLocationArray() {
        this.people = [];
    }
    CompanyLocationArray.prototype.addPerson = function (person) {
        this.people.push(person);
    };
    CompanyLocationArray.prototype.getPerson = function (index) {
        return this.people[index];
    };
    CompanyLocationArray.prototype.getCount = function () {
        return this.people.length;
    };
    return CompanyLocationArray;
}());
var CompanyLocationLocalStorage = /** @class */ (function () {
    function CompanyLocationLocalStorage() {
        this.storageKey = 'employees';
        localStorage.setItem(this.storageKey, JSON.stringify([]));
    }
    CompanyLocationLocalStorage.prototype.addPerson = function (person) {
        var people = this.getPeopleFromStorage();
        people.push(person);
        localStorage.setItem(this.storageKey, JSON.stringify(people));
    };
    CompanyLocationLocalStorage.prototype.getPerson = function (index) {
        var people = this.getPeopleFromStorage();
        return people[index];
    };
    CompanyLocationLocalStorage.prototype.getCount = function () {
        return this.getPeopleFromStorage().length;
    };
    CompanyLocationLocalStorage.prototype.getPeopleFromStorage = function () {
        return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    };
    return CompanyLocationLocalStorage;
}());
var Employee = /** @class */ (function () {
    function Employee(name, project) {
        this.name = name;
        this.currentProject = project;
    }
    Employee.prototype.getCurrentProject = function () {
        return this.currentProject;
    };
    Employee.prototype.getName = function () {
        return this.name;
    };
    return Employee;
}());
var Company = /** @class */ (function () {
    function Company(location) {
        this.location = location;
    }
    Company.prototype.addEmployee = function (employee) {
        this.location.addPerson(employee);
    };
    Company.prototype.getProjectList = function () {
        var projects = [];
        for (var i = 0; i < this.location.getCount(); i++) {
            projects.push(this.location.getPerson(i).getCurrentProject());
        }
        return projects;
    };
    Company.prototype.getNameList = function () {
        var names = [];
        for (var i = 0; i < this.location.getCount(); i++) {
            names.push(this.location.getPerson(i).getName());
        }
        return names;
    };
    return Company;
}());
var britishCompanyArray = new Company(new CompanyLocationArray());
var britishCompanyLocalStorage = new Company(new CompanyLocationLocalStorage());
var employee1 = new Employee('Emma', 'Cloud Migration');
var employee2 = new Employee('Liam', 'Security Audit');
britishCompanyArray.addEmployee(employee1);
britishCompanyLocalStorage.addEmployee(employee2);
console.log("Project List (Array): ", britishCompanyArray.getProjectList());
console.log("Name List (Array): ", britishCompanyArray.getNameList());
console.log("Project List (LocalStorage): ", britishCompanyLocalStorage.getProjectList());
console.log("Name List (LocalStorage): ", britishCompanyLocalStorage.getNameList());
