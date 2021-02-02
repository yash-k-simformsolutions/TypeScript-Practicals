interface Value<x>{
    value: x;
}

let val: Value<string> = {value: 'yola' };
val.value;

interface Filter<T = any>{
    (val: T): boolean;
}

const stringFilter: Filter<string> = val => typeof val === "string"
stringFilter('yash');

//associated with scope
function startTuple<T>(a: T){
    return function finishTuple<U>(b: U){
        return [a, b] as [T, U];
    };
}
const myTuple = startTuple("yola")(21);  