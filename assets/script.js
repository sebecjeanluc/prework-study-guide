var shape = 'circle'
var topics = ['HTML', 'CSS', 'Git', 'JavaScript']

console.log(topics)

var topic = 'Hello'

var shapes = ['triangle', 'square', 'circle']
var studentInfo = ['Lu', 53, true]

console.log(shapes, studentInfo)
console.log('take out the thrid item in the shapes array -> ' + shapes[2])

for (var x = 0; x < shapes.length; x++) {
	console.log(shapes[x])
}

function helloWorld() {
	console.log('Hello, world. I am a fucntion')
}

console.log(helloWorld())

var randomTopic = topics[Math.floor(Math.random() * topics.length)]

function listTopics() {
	for (var x = 0; x < topics.length; x++) {
		console.log(topics[x])
	}
}

function selectTopic() {
	if (randomTopic === 'HTML') {
		console.log("let's study HTML!")
	} else if (randomTopic === 'CSS') {
		console.log("let's study CSS")
	} else if (randomTopic === 'Git') {
		console.log("let's study Git")
	} else if (randomTopic === 'JavaScript') {
		console.log("let's study JavaScript")
	} else {
		console.log('please Try again')
	}
}

listTopics()

console.log("Let's see which topic we should study first")
selectTopic()
