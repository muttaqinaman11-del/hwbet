let subjectInput = document.querySelector('#subject')
let marksInput = document.querySelector('#marks')
let gradeParagraph = document.querySelector('#grade')

function check(){
    if(marksInput.value >= 90 && marksInput.value <= 100){
        gradeParagraph.innerHTML = "Grade: A+"
    }
    else if(marksInput.value >= 80 && marksInput.value < 90){
        gradeParagraph.innerHTML = "Grade: A"
    }
    else if (marksInput.value >= 70 && marksInput.value < 80){
        gradeParagraph.innerHTML = "Grade: B"
    }
    else if (marksInput.value >= 60 && marksInput.value < 70){
        gradeParagraph.innerHTML = "Grade: C"
    }
    else if (marksInput.value >= 50 && marksInput.value < 60){
        gradeParagraph.innerHTML = "Grade: D"
    }
    else {
        gradeParagraph.innerHTML = "Grade: F"
    }
}


for (let i = 0; i <= 5; i++) {
  console.log(i);
}

for(let i=0; i<=12; i=i+2){
  console.log(i)
}


for (let i = 0; i <= 5; i++) {
    console.log(i);
}

console.log("Even Numbers:");
for (let i = 0; i <= 12; i = i + 2) {
    console.log(i);
}

console.log("Even Numbers:");
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

console.log("Odd Numbers");
for (let i = 1; i <= 12; i = i + 2) {
    console.log(i);
}

console.log("Odd Numbers:");
for (i = 0; i <= 10; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}