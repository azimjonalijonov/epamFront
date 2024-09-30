interface IEmployee {
    getCurrentProject(): string;
    getName(): string;
}

interface ILocation {
    addPerson(person: IEmployee): void;
    getPerson(index: number): IEmployee;
    getCount(): number;
}

class CompanyLocationArray implements ILocation {
    private people: IEmployee[] = [];

    addPerson(person: IEmployee): void {
        this.people.push(person);
    }

    getPerson(index: number): IEmployee {
        return this.people[index];
    }

    getCount(): number {
        return this.people.length;
    }
}

class CompanyLocationLocalStorage implements ILocation {
    private storageKey = 'employees';

    constructor() {
        localStorage.setItem(this.storageKey, JSON.stringify([]));
    }

    addPerson(person: IEmployee): void {
        const people = this.getPeopleFromStorage();
        people.push(person);
        localStorage.setItem(this.storageKey, JSON.stringify(people));
    }

    getPerson(index: number): IEmployee {
        const people = this.getPeopleFromStorage();
        return people[index];
    }

    getCount(): number {
        return this.getPeopleFromStorage().length;
    }

    private getPeopleFromStorage(): IEmployee[] {
        return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    }
}

class Employee implements IEmployee {
    private name: string;
    private currentProject: string;

    constructor(name: string, project: string) {
        this.name = name;
        this.currentProject = project;
    }

    getCurrentProject(): string {
        return this.currentProject;
    }

    getName(): string {
        return this.name;
    }
}

class Company {
    private location: ILocation;

    constructor(location: ILocation) {
        this.location = location;
    }

    addEmployee(employee: IEmployee) {
        this.location.addPerson(employee);
    }

    getProjectList(): string[] {
        const projects: string[] = [];
        for (let i = 0; i < this.location.getCount(); i++) {
            projects.push(this.location.getPerson(i).getCurrentProject());
        }
        return projects;
    }

    getNameList(): string[] {
        const names: string[] = [];
        for (let i = 0; i < this.location.getCount(); i++) {
            names.push(this.location.getPerson(i).getName());
        }
        return names;
    }
}

 const britishCompanyArray = new Company(new CompanyLocationArray());
const britishCompanyLocalStorage = new Company(new CompanyLocationLocalStorage());

const employee1 = new Employee('Emma', 'Cloud Migration');
const employee2 = new Employee('Liam', 'Security Audit');

britishCompanyArray.addEmployee(employee1);
britishCompanyLocalStorage.addEmployee(employee2);

 console.log("Project List (Array): ", britishCompanyArray.getProjectList());
console.log("Name List (Array): ", britishCompanyArray.getNameList());

console.log("Project List (LocalStorage): ", britishCompanyLocalStorage.getProjectList());
console.log("Name List (LocalStorage): ", britishCompanyLocalStorage.getNameList());
