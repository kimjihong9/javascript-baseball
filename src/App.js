const MissionUtils = require("@woowacourse/mission-utils");


class App {
  selectComputerNum(){
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  play() {

    const computer_num = this.selectComputerNum();

  }
}

module.exports = App;
