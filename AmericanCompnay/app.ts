interface IEmployee {
    getCurrentProject(): string;
    getName(): string;
}

class Frontend implements IEmployee {
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

class Backend implements IEmployee {
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
    private employees: IEmployee[] = [];

    add(employee: IEmployee) {
        this.employees.push(employee);
    }

    getProjectList(): string[] {
        return this.employees.map(emp => emp.getCurrentProject());
    }

    getNameList(): string[] {
        return this.employees.map(emp => emp.getName());
    }
}

 const americanCompany = new Company();
const frontendDev = new Frontend('John', 'Mobile App');
const backendDev = new Backend('Jane', 'Database Optimization');
americanCompany.add(frontendDev);
americanCompany.add(backendDev);

console.log("Project List: ", americanCompany.getProjectList());
console.log("Name List: ", americanCompany.getNameList());
