// const sangyoon = {
//     nickname : "pierre"
// };

// sangyoon.hello();
// //Property 'hello' does not exist on type '{ nickname: string; }'.

// [1,2,3,4] + false;
// //Operator '+' cannot be applied to types 'number[]' and 'boolean'.

// function divide (a,b) {
//     return a/b
// }
// //Parameter 'a' implicitly has an 'any' type.

// divide("hello")
// //Expected 2 arguments, but got 1.

// const player = {
//     age : 12
// };

// player.age = false;
// //Type 'boolean' is not assignable to type 'number'.

// const player : {
//     name : string;
//     age : number;
// } = {
//     name : "SY"
// }

// const player2 : {
//     name : string;
//     age? : number;
// } = {
//     name : "SY"
// }

// const playerNico : {
//     name : string;
//     age? : number;
// } = {
//     name:"nico"
// }

// const playerSY : {
//     name : string;
//     age? : number;
// } = {
//     name:"SY",
//     age:13
// }
// // 같은 것을 반복하는것은 비효율적이다.

// type age = number;
// type name = string;
// type Player = {
//     readonly name : name,
//     age? : age
// }

// const playerMaker = (name:string) : Player => {(name)}
// const nico =playerMaker("nico")

// const numlist: readonly number[] = [1,2,3,4]
// numlist.push(3) //readonly가 들어가면 Property 'push' does not exist on type 'readonly number[] 에러를 출력한다
// //push filter, map 등 list를 변화시키는 모든 함수들이 비활성화된다.

// Tuple

// function hello(): never {
//     return "x"
// }

// type AddType2  = {
//     (a:number, b:number) : number
//     (a:number, b:number, c:number) : number
// }

// const add : AddType2 = (a,b,c) =>{
//     return a+b

// type Superprint = {
//     <T>(arr: T[]) : void
//     // (arr: any[]) : void
// }
// const superPrint : Superprint = (arr) => {
//     arr.forEach(i => console.log(i))

// }

// type FirstPrintType = {
// <TypePlaceholder>(arr: TypePlaceholder[]) : TypePlaceholder
// }
// const printFirst : FirstPrintType = (arr) => arr[0]

// const a = superPrint([1,2,3,4])
// //const superPrint: <number>(arr: number[]) => void
// const b = superPrint([true,false,false])
// //const superPrint: <boolean>(arr: boolean[]) => void
// const c = superPrint(["a", "b", "c", "d"])
// //const superPrint: <string>(arr: string[]) => void
// const d = superPrint([1,true,false,"hello"])
// //const superPrint: <string | number | boolean>(arr: (string | number | boolean)[]) => void

//#4.0 Class

class Player {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickName: string
  ) {}
}

const sy = new Player("Sangyoon", "kim", "pierre");

// sy.firstName
//Property 'firstName' is private and only accessible within class 'Player'
sy.nickName;

////////////////////Abstract Class /////////////////////////

abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickName: string
  ) {}
  //private getFullName(){ //private를 쓰면 외부에서 이 함수를 쓸 수 없다.
  getFullName() {
    return `$(this.firstName) $(this.lastName)`; //method의 implementation(구현)
  }
}

class Player2 extends User {}
const sy2 = new Player2("Sangyoon", "kim", "pierre");
sy2.getFullName();

//////////////Abstract Method //////////////////////////

abstract class User3 {
  constructor(
    private firstName: string,
    public lastName: string,
    protected nickName: string // private nickName : string,
  ) {}
  abstract getfirstName(): void;
  abstract getlastName(): void;
  abstract getNickname(): void;
}

class Player3 extends User3 {
  getfirstName(): void {
    console.log(this.firstName); // private는 정의한 클래스 밖에서는 사용할 수 없다.
  }
  getlastName(): void {
    console.log(this.lastName); // public은 어디에서든 쓸 수 있다.
  }
  getNickname(): void {
    console.log(this.nickName); // protected는 정의한 클래스와, 상속한 클래스에서 쓸 수 있다.
  }
}

const sy3 = new Player3("Sangyoon", "kim", "pierre");

sy3.firstName; // private는 정의한 클래스 밖에서는 사용할 수 없다.
sy3.lastName; // public은 어디에서든 사용할 수 있다.
sy3.nickname; // 상속한 클래스 내부가 아니므로 protected 는 쓸 수 없다.
