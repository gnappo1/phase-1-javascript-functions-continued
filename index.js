// code your solution here
console.log(saturdayFun("bowling"))
//! don't forget about HOISTING!!!
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

//! Function Expressions are never fully hoisted -> ReferenceError is raised
// console.log(mondayWork("go bowling"))

//! Functions Expression DOES NOT NECESSARILY mean arrow function
//! Arrow functions can be seen in function expressions OR passed in anonymously as callbacks
const mondayWork = (work="go to the office") => {
    return `This Monday, I will ${work}.`;
}
// const mondayWork2 = function(work="go to the office") {
//     return `This Monday, I will ${work}.`;
// }

function wrapAdjective(style="*") {
    // let count = 0
    return function(adjective="special") {
        // count++
        // console.log(count)
        return `You are ${style}${adjective}${style}!`
    }
}

const inner = wrapAdjective()
inner()
console.log("🚀 ~ something:", wrapAdjective("!")("fancy"))

// I.I.F.E.
//! used when the function is needed once and invoked right away!
// (function saturdayFun(activity = "roller-skate") {
//     return `This Saturday, I want to ${activity}!`;
// })()