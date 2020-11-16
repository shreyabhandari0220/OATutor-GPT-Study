var hints = [{id: "complex11a-h1", type: "hint", dependencies: [], title: "Distributing the Negative Sign", text: "Because the second part of the expression is being subtracted, we can distribute the negative sign into that part. $$-\\left(-6+9i\\right)=6-9i$$. The expression is now $$-4+4i+6-9i$$."}, {id: "complex11a-h2", type: "hint", dependencies: ["complex11a-h1"], title: "Associative Property", text: "The next step is to group the like terms. We can use the Associative Property to rewrite this expression as $$-4+6+4i-9i$$."}, {id: "complex11a-h3", type: "hint", dependencies: ["complex11a-h2"], title: "Combining Like Terms", text: "Now, we can add numbers in the parentheses to combine like terms."}, {id: "complex11a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2"], dependencies: ["complex11a-h3"], title: "Combining Like Terms", text: "What is $$-4+6$$?"}, {id: "complex11a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-5i"], dependencies: ["complex11a-h3"], title: "Combining Like Terms", text: "What is 4i-9i?"}, {id: "complex11a-h6", type: "hint", dependencies: ["complex11a-h4", "complex11a-h5"], title: "Standard Form", text: "Finally, we can write the expression in $$a+bi$$ form: 2-5i."}, ]; export {hints};