var hints = [{id: "quad4a-h1", type: "hint", dependencies: [], title: "Discriminant", text: "To find the discriminant, of a quadratic equation, we calculate $$b^2-4ac$$. If that value is greater than 0 it has 2 real solutions, if it is smaller than 0 it has no real solutions, and if it is equal to 0 it has 1 real solution."}, {id: "quad4a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0"], dependencies: ["quad4a-h1"], title: "Discriminant", text: "In this case, what is our discriminant?"}, {id: "quad4a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["1 real"], dependencies: ["quad4a-h2"], title: "Discriminant", text: "Since this value is equal to 0, is this equation's solutions real or not real? If it is real, how many solutions does it have?", choices: ["not real", "1 real", "2 real"]}, ]; export {hints};