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

type age = number;
type name = string;
type Player = {
    readonly name : name,
    age? : age
}

const playerMaker = (name:string) : Player => {(name)}
const nico =playerMaker("nico")

const numlist: readonly number[] = [1,2,3,4]
numlist.push(3) //readonly가 들어가면 Property 'push' does not exist on type 'readonly number[] 에러를 출력한다
//push filter, map 등 list를 변화시키는 모든 함수들이 비활성화된다.

Tuple 

function hello(): never {
    return "x"
} 

type AddType2  = {
    (a:number, b:number) : number
    (a:number, b:number, c:number) : number
}

const add : AddType2 = (a,b,c) =>{
    return a+b
}