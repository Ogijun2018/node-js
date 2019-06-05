let Hoge = function(){};

Hoge.prototype.add = (val1, val2) => {
    return val1 + val2;
}

Hoge.prototype.sub = (val1, val2) => {
    return val1 - val2;
}

let hoge = new Hoge();
module.exports = hoge;

//classの方が楽.