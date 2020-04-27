// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(adjective = "*") {
  return function (text) {
    if (adjective === "||") {
      return `You are ||${text}||!`;
    }
    return `You are *${text}*!`;
  };
}

let Calculator = {
  add: function (num1, num2) {
    return num1 + num2;
  },
  subtract: function (num1, num2) {
    return num1 - num2;
  },
  multiply: function (num1, num2) {
    return num1 * num2;
  },
  divide: function (num1, num2) {
    return num1 / num2;
  },
};

function actionApplyer(integer, function_array) {
  let a = integer;
  for (let i = 0; i < function_array.length; i++) {
    a = function_array[i](a);
  }
  return a;
}
