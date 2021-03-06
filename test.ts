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

// class Player {
//   constructor(
//     private firstName: string,
//     private lastName: string,
//     public nickName: string
//   ) {}
// }

// const sy = new Player("Sangyoon", "kim", "pierre");

// // sy.firstName
// //Property 'firstName' is private and only accessible within class 'Player'
// sy.nickName;

// ////////////////////Abstract Class /////////////////////////

// abstract class User {
//   constructor(
//     private firstName: string,
//     private lastName: string,
//     public nickName: string
//   ) {}
//   //private getFullName(){ //private를 쓰면 외부에서 이 함수를 쓸 수 없다.
//   getFullName() {
//     return `$(this.firstName) $(this.lastName)`; //method의 implementation(구현)
//   }
// }

// class Player2 extends User {}
// const sy2 = new Player2("Sangyoon", "kim", "pierre");
// sy2.getFullName();

// //////////////Abstract Method //////////////////////////

// abstract class User3 {
//   constructor(
//     private firstName: string,
//     public lastName: string,
//     protected nickName: string // private nickName : string,
//   ) {}
//   abstract getfirstName(): void;
//   abstract getlastName(): void;
//   abstract getNickname(): void;
// }

// class Player3 extends User3 {
//   getfirstName(): void {
//     console.log(this.firstName); // private는 정의한 클래스 밖에서는 사용할 수 없다.
//   }
//   getlastName(): void {
//     console.log(this.lastName); // public은 어디에서든 쓸 수 있다.
//   }
//   getNickname(): void {
//     console.log(this.nickName); // protected는 정의한 클래스와, 상속한 클래스에서 쓸 수 있다.
//   }
// }

// const sy3 = new Player3("Sangyoon", "kim", "pierre");

// sy3.firstName; // private는 정의한 클래스 밖에서는 사용할 수 없다.
// sy3.lastName; // public은 어디에서든 사용할 수 있다.
// sy3.nickname; // 상속한 클래스 내부가 아니므로 protected 는 쓸 수 없다.


// // #4.1
// type Words = {
//   [key:string]:string // Words타입이 string만을 property로 가지는 오브젝트다!
// }

// class Dict {
//   private words : Words //constructor에서 직접 초기화 되지 않는 property이다.
//   constructor(){
//     this.words = {}
//   }
//   add(word:Word){
//     if(this.words[word.term]===undefined){
//       this.words[word.term] = word.definition;
//     }
//   }
//   getDef(term:string){
//     return this.words[term]
//   }
//   static hello(){
//       return "hello"
//   }
// }

// class Word {
//   constructor(
//     public term : string,
//     public definition : string
//   ){}
// }

// const kimchi = new Word("kimchi", "korean pickled vegetable")

// const dict = new Dict()

// dict.add(kimchi);
// dict.getDef("kimchi");

// // #4.2
// interface User {
//     name : string
// }
// interface Player extends User {
// }
// const sy : Player ={
//     name : "sykim"
// }
// //is same
// type UserT = {
//     name : string
// }
// type PlayerT = UserT & {}
// const syT : Player ={
//     name : "sykim"
// }

// interface Human {
//     name : string
// }
// interface Human {
//     age : number
// }
// interface Human {
//     gender : "male" | "female"
// }

// interface Human2 {
//     name: string,
//     age : number,
//     gender : "male" | "female"
// }


// // #4.3
// /* 아래는 abstract class 를 이용한 정의 */
// abstract class User {
//   constructor(
//       protected firstName:string,
//       protected lastName : string,
//   ) {}
//   abstract sayHi(name:string): string
//   abstract fullName():string
// }

// class Player extends User {
//   fullName(){
//       return `${this.firstName} ${this.lastName}`
//   }
//   sayHi(name:string){
//       return `hello ${name}. My name is ${this.fullName()}`
//   }
// }
// //추상 클래스는 인스턴스를 만드는걸 허용하지 않는다.
// // 즉, new User() 가 불가능하다는 뜻,
// // 만들고 싶다면, 추상 클래스를 상속하는 새로운 클래스를 만들어야 한다.


// /* 아래는 Interface를 이용한 정의 */
// // inplements는 js에 존재하지 않는 키워드이다. (TS에만 있고 JS에는 없다.)
// interface User_I {
//   firstName : string,
//   lastName : string,
//   sayHi(name:string) : string
//   fullName():string
// }

// class Player_I implements User_I {
//     constructor(
//     public firstName:string,
//     public lastName : string, //interface의 경우 public이어야 한다. protected도 유효하지 않음
//     // protected lastName : string,
// ) {}
// fullName(){
//     return `${this.firstName} ${this.lastName}`
// }
// sayHi(name:string){
//     return `hello ${name}. My name is ${this.fullName()}`
// }
// }

// interface Human {
//   health : number
// }

// class Player_I2 implements User_I, Human {
//   constructor(
//     public firstName:string,
//     public lastName : string, 
//     public health: number
// ) {}
// fullName(){
//     return `${this.firstName} ${this.lastName}`
// }
// sayHi(name:string){
//     return `hello ${name}. My name is ${this.fullName()}`
// }
// }

// function makeUser(user:User_I){
//   return "hi"
// }

// makeUser({
//   firstName:"sy",
//   lastName:"kim",
//   fullName: () => "xx",
//   sayHi: (name) => "string"
// })

// function showUser(user:User_I):User_I{
//   return{
//     firstName:"sy",
//     lastName:"kim",
//     fullName: () => "xx",
//     sayHi: (name) => "string"
//   }

//   // return new User_I { ~~~~}
//   // 인터페이스로 조건이 잡힐 경우 return 할 대상을 
//   // 클래스로 조건이 잡힐 때처럼 new XXX 를 할 필요 없다.
//   // 그냥 인터페이스에서 요구하는 조건을 오브젝트 안에 빠짐없이 넣어서 리턴만 해주면 만족함.
// }

// //#4.4 Recap

// type PlayerA = {
//   name: string
// }
// type PlayerAA = PlayerA & {
//   lastName : string
// }
// // type PlayerAA = {
// //   health : number
// // } //Duplicate identifier 'PlayerAA'
// const playerA : PlayerAA ={
//   name :"sy",
//   lastName:"Kim"
// }

// interface PlayerB {
//   name: string
// }
// interface PlayerBB extends PlayerB {
//   lastName : string
// }
// interface PlayerBB {
//   health:number
// } // 문제 없이 작동함
// const playerB : PlayerBB = {
//   name:"sy",
//   lastName : "Kim",
//   health : 82
// }



// // type 이든 interface든 상속법은 똑같다. & 둘다 추상 클래스를 대체할 수 있다.
// type PlayerT1 = {
//   firstName:string
// }
// interface PlayerI1 {
//   firstName:string
// }

// class UserT1 implements PlayerT1 {
//   constructor(
//     public firstName : string
//   ){}
// }
// class UserI1 implements PlayerI1 {
//   constructor(
//     public firstName : string
//   ){}
// }


//#4.5 Polymorphism

interface SStorage<T> {
  [key:string] : T //제한 되지 않은 오브젝트를 정의하게 해준다.
}

class LocalStorage<T> {
  private storage : SStorage<T> = {}
  set(key:string, value:T){
      this.storage[key] = value;
  }
  remove(key:string){
      delete this.storage[key]
  }
  get(key:string):T {
      return this.storage[key]
  }
  clear(){
      this.storage={}
  }
}

const stringStorage = new LocalStorage<string>()
stringStorage.set("hello", "how are you")
stringStorage.get("hello")
const booleanStorage = new LocalStorage<boolean>();
booleanStorage.set("xxx", false);
booleanStorage.get("xxx")