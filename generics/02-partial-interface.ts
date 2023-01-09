export interface Course {
    title:string;
    subtitle:string;
    lessioncount: 0;
}

export function updateCourse(courseId : string, upadte: Partial<Course>){

}

updateCourse("1", {
    title: "New version of title"
});

updateCourse("2",{
    subtitle: "New version of sub title"
});

