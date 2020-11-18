
// counter
const h1 = document.querySelector("#counter")
// let counter = parseInt(h1.textContent)
let numLikes = 0

window.onload = function () {
    RecurringTimer();
}
function RecurringTimer(callback, delay) {
    var timerId, start, remaining = delay;

    this.pause = function() {
        window.clearTimeout(timerId);
        remaining -= new Date() - start;
    };

    var resume = function() {
        start = new Date();
        timerId = window.setTimeout(function() {
            remaining = delay;
            resume();
            callback();
        }, remaining);
    };
    
    this.resume = resume;

    this.resume();
}

var timer = new RecurringTimer(function() {
    display = document.querySelector("#counter").innerHTML = ++count
    // document.getElementById("counter").innerHTML = ++count;
}, 1000);

var count = 0;


function increment() {
    display = display + 1
    h1.textContent = display
    // console.log(counter)
    };
function decrement() {
    display = display - 1
    h1.textContent = display
    // console.log(counter)
};


// function increment() {
//     if (pause.textContent === " pause "){
//     setInterval(function () {
//         counter = counter + 1
//         h1.textContent = `${counter} with ${numLikes} Likes!`
//         // console.log(counter)
//     }, 1000);
//     }
//     else if (pause.textContent === " resume ") {
       
//     }
// }

//plus button

const plus = document.querySelector("#plus")

plus.addEventListener("click", increment)

// minus button

const minus = document.querySelector("#minus")

minus.addEventListener("click", decrement)

//pause button
const pause = document.querySelector("#pause")

pause.addEventListener("click", function() {
    if (pause.textContent === " pause ") {
        timer.pause()
        plus.disabled = true
        minus.disabled = true
        likeBtn.disabled = true
        submit.disabled = true
        pause.textContent = " resume "
}
else if (pause.textContent === " resume ") {
    timer.resume() 
    plus.disabled = false
    minus.disabled = false
    likeBtn.disabled = false
    submit.disabled = false
    pause.textContent = " pause "
}
})

//like button
const likeBtn = document.querySelector("#heart")
const ul = document.querySelector(".likes")
const list = ul.querySelectorAll("li")
likeBtn.addEventListener("click", function () {
    // list.forEach(item => item.includes(display))
    //     if (item.includes(display)) {
    //         numLikes = numLikes + 1
    //     }
    //     else { 
    const li = document.createElement("li")
    // let liText =  li.textContent
    // liText = `${display} has ${numLikes} Likes!`
    li.textContent = `${display} has ${numlikes} Likes!`
   numLikes = numLikes + 1
   ul.append(li)
})

// Comment form submit
const submit = document.querySelector("#submit")
const form = document.querySelector("#comment-form")

form.addEventListener("submit", formSubmit)

function formSubmit(event) {
  event.preventDefault()
  const input = document.querySelector("#comment-input")
  const div = document.querySelector(".comments")
  const li = document.createElement("li")
  li.textContent = input.value
  div.append(li)
}
