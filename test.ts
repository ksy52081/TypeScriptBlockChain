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



const player : {
    name : string;
    age : number;
} = {
    name : "SY"
}


const player2 : {
    name : string;
    age? : number;
} = {
    name : "SY"
}



const playerNico : {
    name : string;
    age? : number;
} = {
    name:"nico"
}

const playerSY : {
    name : string;
    age? : number;
} = {
    name:"SY",
    age:13
}
// 같은 것을 반복하는것은 비효율적이다.