// code your solution here
function saturdayFun(activity) {
    if (activity == null) {
        activity = 'roller-skate';
    }
    return (`This Saturday, I want to ${activity}!`)
}

function mondayWork(activity = "go to the office") {
    return(`This Monday, I will ${activity}.`);
}

function wrapAdjective(wrapper= '*'){
    return function (inner = 'special'){
        return(`You are ${wrapper}${inner}${wrapper}!`);
    }
}