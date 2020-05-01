function saturdayFun(string = "roller-skate") {
  return `This Saturday, I want to ${string}!`;
}

const mondayWork = function (string = "go to the office") {
  return `This Monday, I will ${string}.`;
};

function wrapAdjective(flair = "*") {
  return function (compliment = "special") {
    return `You are ${flair}${compliment}${flair}!`;
  };
}

const Calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  divide: (a, b) => {
    return a / b;
  },
};

function actionApplyer(integer, array) {
  return array.reduce(function (total, element) {
    return element(total);
  }, integer);
}
