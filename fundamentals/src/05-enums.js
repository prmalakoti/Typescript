"use strict";
exports.__esModule = true;
var CourseType;
(function (CourseType) {
    CourseType["FREE"] = "FREE";
    CourseType["PREMIUM"] = "PREMIUM";
    CourseType["PRIVATE"] = "PRIVATE";
    CourseType["HIDDEN"] = "HIDDEN";
})(CourseType || (CourseType = {}));
var course = {
    title: "Typescript Bootcamp",
    type: CourseType.HIDDEN
};
console.log(course);
