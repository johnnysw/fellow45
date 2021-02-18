// export let a = 'hello';
// export let fn1 = () => 'word';


let a = 'hello';
let fn1 = () => 'word';
export { a, fn1 }

class Person {
  constructor(name) {
    this.name = name
  }
  sleep() {
    console.log('sleep');
  }
}

export default Person