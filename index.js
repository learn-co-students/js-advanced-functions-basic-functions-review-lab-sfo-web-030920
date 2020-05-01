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
  add: function () {
    return 1 + 3;
  },
  subtract: function () {
    return 1 - 3;
  },
  multiply: () => 1 * 3,
  divide: () => 10 / 5,
};

function actionApplyer(integer, array) {
  return array.reduce(function (total, element) {
    return element(total);
  }, integer);
}
