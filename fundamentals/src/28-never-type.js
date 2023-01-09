"use strict";
exports.__esModule = true;
var anyValue;
var courseStatus;
if (courseStatus == "draft") {
}
else if (courseStatus == "published") {
}
else if (courseStatus == "unpublished") {
}
else {
    unexpectedError(courseStatus);
}
function unexpectedError(value) {
    throw new Error("Unexpected value: ".concat(value));
}
