//add object keyword of my choice
const workObject = { name: "Victor", dept: "Computer/statistics", level: "300lvl", field: "fullstack web development", height: "tall", mycolor: "Blue", hobby: "Watching movies", footballclub: "Chelsea", age: "18-24", favmovie: "Avengers and others" };

console.log(workObject)


 //delete atleast two

delete workObject.favmovie;
delete workObject.age;
console.log(workObject)


//add three
workObject.favactor = "Jackie chan"
workObject.LastName = "Ezenma"
workObject.favfootbalplayer = "Lionel messi"
console.log(workObject)


//print with length on the console
let work = {
    name: "Victor",
    dept: "Computer/statistics",
    level: "300lvl",
    field: "full stack web development",
    height: "Tall",
    mycolor: "blue",
    footballclub: "Chelsea ",
    hobby: "watching movies",
    favactor: "Jackie chan",
    LastName: "Ezenma",
    favfootbalplayer: "Lionel messi"
}

console.log(Object.keys(work).length)
