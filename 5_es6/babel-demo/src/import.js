import { a as aaa, fn1 } from "./export";

import Person1 from './export'

console.log(aaa);
console.log(fn1());

let p1 = new Person1('wangwu');
p1.sleep();