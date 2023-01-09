interface Course {
    title:string;
    subtitle:string;
    lessonsCount: number;
}

function freezeCourse1(course:Course): Readonly<Course> {
    return Object.freeze(course);
}

const frozen = freezeCourse1({
    title: "TypeScript",
    subtitle: "TypeScript learing",
    lessonsCount: 100
});