let answers = JSON.parse(sessionStorage.getItem("answers"))
// you can use answers now
// it is in form of array of object
//example=> answers =[{id:1},question:"blah",answer:"blah",selected:"..",status:"wrong"}]
console.log(answers)
// if you wanna use one by one you can do like answers[0] and access using .
// // for example  answers[0].status
// if you wanna generate items dynamically, you can use answers.map() or answers.forEach
