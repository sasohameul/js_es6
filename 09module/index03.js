

let result = 0;

function add(x) {
    result += x;
}

const minus = (x) => result -=x;

//kye방식 or 향상된 리터럴
export default {a: add, b: minus}