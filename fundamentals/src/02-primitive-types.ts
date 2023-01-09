
// primitive types: number
const lessonsCount = 10;

const total = lessonsCount + 10;

console.log("total =", total);

// primitive types: string
let title = "Typescript Bootcamp";

let subtitle = "Learn the language fundamentals, build practical projects";

let fullTitle = `Full title:${title}: ${subtitle}`;

console.log(`Full title: ${fullTitle}`);

// primitive types: boolean
const published = true;

if (published) {
    console.log("The course is published.");
}

printCourse(title, subtitle, lessonsCount);

function printCourse(title:string, subtitle:string, lessonsCount:number) {

    let fullTitle = title + subtitle;

}
/*
author: {
    firstName: "Vasco",
        lastName: "Cavalheiro"
}*/


// primitive types: object

let course = {
  title: "Typescript Bootcamp",
  subtitle: "Learn the language fundamentals, build practical projects",
  lessonsCount: 10
};

console.log("type of course is " + typeof course);

export {}


/* IMP Note */

/* 
The course/printCourselessonsCount variable is declared somewhere in the typings for the DOM library, 
so the global type definition clashes with the local variable declaration. 
*/

// You can solve the error, by converting your file to an ES module. LIKE(line number 49) export {}















