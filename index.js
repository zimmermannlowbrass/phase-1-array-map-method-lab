const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let newTutorialList = []
  for (const tutor of tutorials) {
    let x = ''
    let newTutor = tutor.split(' ')
    for (const tut of newTutor) {
      x += (capitalizeFirstLetter(tut))
      x += ' '
    }
    x = x.slice(0, (x.length - 1))
    newTutorialList.push(x)
  }
  return newTutorialList
}

function capitalizeFirstLetter(str) {
  return (str.slice(0,1).toUpperCase() + str.slice(1, str.length))
}