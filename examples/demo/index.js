"use strict";

let _factory = require("@brandednomad/simplecalc");
let calc = _factory.create();
calc.clear(); calc.add(20);
calc.sub(5); calc.mul(4);
let result = calc.div(2);
console.log(result);

