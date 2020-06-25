const assert = require('assert');

const { getColor } = require("../helpers")

describe('Colors', function () {
  describe('#get red color', function () {
    it('should log red color with red colored', function () {
      console.log(getColor("FgRed"), 'red color');
    });
  });
});
