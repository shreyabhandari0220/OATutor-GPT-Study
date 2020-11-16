var hints = [{id: "LinIneq11a-h1", type: "hint", dependencies: [], title: "Interpreting the Problem", text: "We are trying to determine where $$y<0$$, which is when $$-\\left(\\frac{1}{2}\\right) |4x-5|+3<0$$."}, {id: "LinIneq11a-h2", type: "hint", dependencies: ["LinIneq11a-h1"], title: "Isolating the Absolute Value", text: "We can subtract 3 from both side, then multiply both sides by -2, which gives $$\\operatorname{usabs}\\left(4x-5\\right)>6$$."}, {id: "LinIneq11a-h3", type: "hint", dependencies: ["LinIneq11a-h2"], title: "Solve Equality", text: "We proceed to solve for the $$\\operatorname{equalityabs}\\left(4x-5\\right)=6$$."}, {id: "LinIneq11a-h4", type: "hint", dependencies: ["LinIneq11a-h3"], title: "Solve Equality", text: "We can write $$\\operatorname{outabs}\\left(4x-5\\right)=6$$ as $$4x-5=6$$ and $$4x-5=-6$$"}, {id: "LinIneq11a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["11/4"], dependencies: ["LinIneq11a-h4"], title: "Solve Equality", text: "Solve $$4x-5=6$$. What is x?"}, {id: "LinIneq11a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-1/4"], dependencies: ["LinIneq11a-h4"], title: "Solve Equality", text: "Solve $$4x-5=-6$$. What is x?"}, {id: "LinIneq11a-h7", type: "hint", dependencies: ["LinIneq11a-h6"], title: "Examine Graph", text: "Now, we can examine the graph to observe where the y-values are negative. We observe where the branches are below the x-axis. Notice that it is not important exactly what the graph looks like, as long as we know that it crosses the horizontal axis at $$x=\\frac{-1}{4}$$ and x=11/4,and that the graph opens downward.\n##figure1.gif##"}, ]; export {hints};