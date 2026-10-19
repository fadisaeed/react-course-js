import { students } from "./data.js";
import withStatus from "./report.js";

const updatedstudents=withStatus(students);
for(let i=0;i<students.length;i++)
    console.log(updatedstudents[i].name + ": " + updatedstudents[i].status);

console.log(students[0].status);
