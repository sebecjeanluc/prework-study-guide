var shape = 'circle'
var topics = 'HTML, CSS, Git, JavaScript'

console.log(topics)

var topic = 'Hello'

if (topic === 'HTML') {
	console.log("let's study HTML!")
} else if (topic === 'CSS') {
	console.log("let's study CSS")
} else if (topic === 'Git') {
	console.log("let's study Git")
} else if (topic === 'JavaScript') {
	console.log("let's study JavaScript")
} else {
	console.log('please Try again')
}

var shapes = ['triangle', 'square', 'circle']
var studentInfo = ['Lu', 53, true]

console.log(shapes, studentInfo)
console.log('take out the thrid item in the shapes array -> ' + shapes[2])

for (var x = 0; x < shapes.length; x++) {
	console.log(shapes[x])
}
