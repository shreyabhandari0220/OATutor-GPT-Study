var hints = [{id: "RecCord12a-h1", type: "hint", dependencies: [], title: "Distance Formula", text: "Given endpoints (x_1,y_1), and (x_2,y_2), the distance between two points is given $$\\operatorname{bysqrt}\\left({\\left(x_2-x_1\\right)}^2+{\\left(y_2-y_1\\right)}^2\\right)$$ ."}, {id: "RecCord12a-h2", type: "hint", dependencies: ["RecCord12a-h1"], title: "Plug into the formula", text: "We should first calculate 3-(-4) and (-4)-1."}, {id: "RecCord12a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["7"], dependencies: ["RecCord12a-h2"], title: "Subtraction", text: "What is 3-(-4)?"}, {id: "RecCord12a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-5"], dependencies: ["RecCord12a-h2"], title: "Subtraction", text: "What is (-4)-1?"}, {id: "RecCord12a-h5", type: "hint", dependencies: ["RecCord12a-h3", "RecCord12a-h4"], title: "Simplification", text: "We need to simplify the expression $$7^2+{-5}^2$$."}, {id: "RecCord12a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["49"], dependencies: ["RecCord12a-h5"], title: "Square", text: "What is $$7^2$$?"}, {id: "RecCord12a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["25"], dependencies: ["RecCord12a-h5"], title: "Square", text: "What is $${-5}^2$$?"}, {id: "RecCord12a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["74"], dependencies: ["RecCord12a-h6", "RecCord12a-h7"], title: "Addition", text: "What is $$49+25$$?"}, {id: "RecCord12a-h9", type: "hint", dependencies: ["RecCord12a-h8"], title: "Extraction of square root", text: "The thid step is computing the principal square root."}, {id: "RecCord12a-h10", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["sqrt(74)"], dependencies: ["RecCord12a-h9"], title: "Square root", text: "What is the principal square root of 74?"}, ]; export {hints};