console.log(process.argv)

const { addNote} = require("../utils/notes")
const yargs = require("yargs")
console.log(yargs.argv)
const command = process.argv[2]

if (command == "add") {
    console.log("adding a note")
    addNote(yargs.argv.note)
} else if (command == "remove"){
    console.log("removing a note")
} else if (command == "list"){
    console.log("listing notes")
} else {
    console.log("command not recognised")
}




// console.log(process.argv)

// if (process.argv[2] == "phil") {
//     console.log("thats my name")   
// } else {
//     console.log("thats my not name") 
// }

