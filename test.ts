const sangyoon = {
    nickname : "pierre"
};

sangyoon.hello();
//Property 'hello' does not exist on type '{ nickname: string; }'.

[1,2,3,4] + false;
//Operator '+' cannot be applied to types 'number[]' and 'boolean'.

function divide (a,b) {
    return a/b
}
//Parameter 'a' implicitly has an 'any' type.

divide("hello")
//Expected 2 arguments, but got 1.

const player = {
    age : 12
};

player.age = false;
//Type 'boolean' is not assignable to type 'number'.