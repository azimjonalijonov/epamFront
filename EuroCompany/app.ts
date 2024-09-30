 class Employee {
    private name: string;
    private currentProject: string;

    constructor(name: string, currentProject: string) {
        this.name = name;
        this.currentProject = currentProject;
    }

    getName(): string {
        return this.name;
    }

    getCurrentProject(): string {
        return this.currentProject;
    }
}

 class Frontend extends Employee {
    constructor(name: string, project: string) {
        super(name, project);
    }
}

 class Backend extends Employee {
    constructor(name: string, project: string) {
        super(name, project);
    }
}

 class Company {
    private employees: Employee[] = [];

    add(employee: Employee): void {
        this.employees.push(employee);
    }

    getProjectList(): string[] {
        return this.employees.map(employee => employee.getCurrentProject());
    }

    getNameList(): string[] {
        return this.employees.map(employee => employee.getName());
    }
}

 
const europeCompany = new Company();

 
const frontendDev = new Frontend('Alice', 'Frontend Project');
const backendDev = new Backend('Bob', 'Backend Project');

 europeCompany.add(frontendDev);
europeCompany.add(backendDev);

console.log('Project List:', europeCompany.getProjectList());
console.log('Name List:', europeCompany.getNameList());
