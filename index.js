"use strict";

module.exports.create = () => {
    let _acc = 0;
    return {
        value:()=>_acc,
        clear: () => _acc = 0,
        add: a => _acc += a,
        sub: a => _acc -= a,
        mul: a => _acc *= a,
        div: a => _acc /= a };
}


