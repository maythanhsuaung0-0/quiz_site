var correct = 0;

function Questions(question, choice, answer){
    this.question = question;
    this.choice = choice;
    this.answer = answer;

    this.checking = function(selectedChoice){
        if (selectedChoice = this.answer){
            console.log(`${selectedChoice}, is correct`)
            correct++;
        }
    }
}

var questionList = [new Questions("Which keyword is used to declare a variable in JavaScript?",
                        ["var", "define", "int", "dim"],
                        "var"),
                    new Questions("What does `===` mean in JavaScript?",
                        ["Assignment", "Equals", "Strict equality", "Type casting"],
                        "Strict equality"),
                    new Questions("How do you write a comment in JavaScript?",
                        ["# This is a comment", "// This is a comment", "<!-- This is a comment -->", "** This is a comment"],
                        "// This is a comment"),
                    new Questions("Which method converts JSON to a JavaScript object?",
                        ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"],
                        "JSON.parse()"),
                    new Questions("Which of the following is not a JavaScript data type?",
                        ["Number", "String", "Boolean", "Character"],
                        "Character"),
                    new Questions("How do you create a function in JavaScript?",
                        ["function = myFunction()", "function:myFunction()", "function myFunction()", "create function myFunction()"],
                        "function myFunction()"),
                    new Questions("What will `typeof null` return?",
                        ["'null'", "'object'", "'undefined'", "'boolean'"],
                        "'object'"),
                    new Questions("Which of the following is used to define an arrow function?",
                        ["=>", "<=", "-->", "==>"],
                        "=>"),
                    new Questions("What is the output of `Boolean(0)`?",
                        ["true", "false", "undefined", "NaN"],
                        "false"),
                    new Questions("Which array method removes the last element from an array?",
                        ["pop()", "shift()", "unshift()", "splice()"],
                        "pop()"),
                    new Questions("What does the `addEventListener()` method do?",
                        ["Adds two numbers", "Registers an event handler", "Creates a DOM element", "Submits a form"],
                        "Registers an event handler"),
                    new Questions("What is the purpose of `use strict`?",
                        ["Disables modern features", "Enables modern JavaScript", "Runs code in strict mode", "Disables errors"],
                        "Runs code in strict mode"),
                    new Questions("How can you convert a string to an integer in JavaScript?",
                        ["parseInt()", "int()", "toInteger()", "Number.parse()"],
                        "parseInt()"),
                    new Questions("Which object represents the browser window in JavaScript?",
                        ["document", "screen", "window", "navigator"],
                        "window"),
                    new Questions("Which operator is used for exponentiation in JavaScript?",
                        ["^", "**", "exp", "^^"],
                        "**"),
                    new Questions("What is the default value of an uninitialized variable?",
                        ["null", "undefined", "0", "NaN"],
                        "undefined"),
                    new Questions("Which keyword is used to define a constant in JavaScript?",
                        ["var", "let", "const", "define"],
                        "const"),
                    new Questions("What does `Array.isArray([])` return?",
                        ["true", "false", "null", "undefined"],
                        "true"),
                    new Questions("Which method can be used to join array elements into a single string?",
                        ["concat()", "split()", "join()", "merge()"],
                        "join()"),
                    new Questions("How do you write an if statement in JavaScript?",
                        ["if x > y then", "if (x > y)", "if x > y:", "if x > y {}"],
                        "if (x > y)")
];

//Fomating the Question Board




console.log(questionList[1].question);