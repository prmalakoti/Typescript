import { HasId, HasTitle } from "./02-interfaces";

abstract class Course implements HasTitle {

    static TOTAL_COURSE = 0;
    static readonly COURSE_TITLE = "NODEJS";
    constructor(
        public id: string,
        protected _title: string,
        protected price: number,
        protected subtitle = "",
        protected creationDt = new Date(2000, 1, 1) //default parameters
    ) {
        Course.TOTAL_COURSE++,
            this.validate()
        // this.title = _title,
        //     this.subtitle = subtitle,
        //     this.creationDt = creationDt
    }

    printId() {
        console.log(`The course id is ${this.id}`);
    }

    protected validate() {
        if (this.price <= 0) {
            throw "Price must be larger than zero"
        }
    }

    static printTitle(course: Course) { // Same like normal function it's invoke the using Course class
        console.log(`Course name is ${course.title}`);
    }
    get title() {
        return this._title;
    }
    set title(newTitle: string) {
        if (!newTitle) {
            throw "New title can not be empty";
        }
        this._title = newTitle;
    }
    get age() {
        const ageInMs = new Date().getTime() - this.creationDt.getTime();
        return Math.round(ageInMs / 1000 / 60 / 24);
    }
}

class FreeCourse extends Course {
    constructor(
        id: string,
        title: string,
        subtitle = "",
        creationDt = new Date(2000, 1, 1)) {
        super(id, title, 0, subtitle, creationDt);
    }
    protected validate() { // its overwrite the parent class course validate method
        console.log("Called freecourses  class");
    }

}

const typescript = new FreeCourse("TypeScript", ""); // second parameter for interface id
//course.title = "New value for title";
console.log(typescript);

/* abstract call can not be initiated directly  due to that commented below reactjs/nodejs object */
// const reactjs = new Course("ReactJs", 100);
// console.log(reactjs.title);

// const nodejs = new Course(Course.COURSE_TITLE, 100);
// console.log(nodejs.title);

console.log(Course.TOTAL_COURSE);


// Course.printTitle(nodejs);
