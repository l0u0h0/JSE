# JS function

### 기본

- <u>매개변수로 받아서 사용</u>

```javascript
function func(x, y) {
  return x + y;
}
const a = func(1, 3);
console.log(a);
```

- <u>인수가 많아 매개변수로 일일히 지정하기 힘들 때</u> (이러한 방법도 있다~ 많이 사용 X)

```javascript
function func() {
  return argument[0] + argument[1];
}
const a = func(1, 3);
console.log(a);
```

---

<br/>

### 화살표 함수

-

```javascript
const a = function (x) {
  return x + 2;
};
```

-

```javascript
const a = (x) => {
  return x + 2;
};
```

- <u>매개변수가 하나일 때는 괄호를 생략하여 사용할수도 있다.</u>

```javascript
const a = (x) => x + 2;
```

---

<br/>

### 즉시실행함수

### IIFE (Immediately-Invoked Function Expression)

- <u>이름이 없는 함수에 소괄호로 묶어주어 즉시 실행 함수 완성</u>

```javascript
const a = 7(function () {
  console.log(a * 2);
})();
```

- <u>함수를 둘러싼 소괄호 안에 위 코드의 마지막 괄호를 넣어두 실행이 된다.</u>

```javascript
const a = 7(
  (function () {
    console.log(a * 2);
  })()
);
```

---

<br/>

### 호이스팅(Hoisting)

- <u>함수 선언부가 유효범위의 최상단으로 올려지는 현상</u>
- <u>특정 함수를 시작하기 위해 많은 로직을 거치지 않고 바로 실행하기 위할 때 사용</u>

```javascript
const a = 7;
func();
function func() {
  console.log(a * 2);
}
```

---

<br/>

### 생성자

- <u>this는 해당 객체를 의미, 객체의 이름이 바뀔 수 있기에 this로 명시</u>

```javascript
const abc = {
  first: "hello",
  second: "hi",
  last: function () {
    return `${this.first} ${this.second}`;
  },
};
console.log(abc);
```

- <u>first와 second가 같이 등장</u>

```javascript
console.log(abc.last());
```

- <u> 비슷한 로직의 여러 함수가 사용되면 메모리에 할당되기에 효율적인 메모리를 위해</u>

```javascript
function User(first, last) {
  this.firstName = first;
  this.lastName = last;
}
const lee = new User("uhan", "lee");
```

`new` 로 생성된 함수를 <u>생성자 함수</u>라 한다.

- prototype

```javascript
User.prototype.getFullName() = function () {
  return `${this.firstName} ${this.lastName}`
}
```

`User` 에 숨어있는 `prototype` 이라는 속성에 `getFullName` 을 할당해주어서 동일한 로직의 기능을 수행하게 해준다.  
참조한다는 개념.

---

<br/>

### this

- 일반 함수는 호출 위치에 따라 this 정의  
  화살표 함수는 자신이 선언된 함수 범위에서 this 정의

```javascript
const func = {
  name: "hello",
  normal: function () {
    console.log(this.name);
  },
  arrow: function () {
    console.log(this.name);
  },
};
func.normal();
func.arrow();
```

`normal()` 로 선언된 부분은 제대로 콘솔에 찍히지만  
`arrow()` 로 선언된 부분은 `undefined` 로 출력

```javascript
const abc = {
  name: "lee",
  normal: func.normal,
  arrow: func.arrow,
};
abc.normal();
abc.arrow();
```

`normal()` 을 호출할 때 연결된 객체는 `abc` 이므로  
이를 `this` 로 보고 위와 동일하게 출력
`arrow()` 도 마찬가지로 `undefined` 로 출력

```javascript
function User(name) {
  this.name = name;
}
User.prototype.normal = function () {
  console.log(this.name);
};
User.prototype.arrow = function () {
  console.log(this.name);
};
const name = new User("uhan");
name.normal();
name.arrow();
```

- 화살표 함수로 출력 가능한 예

```javascript
const timer = {
  name: 'uhan!',
  timeout; function () {
    setTimeout(() => {
      console.log(this.name);
    }, 2000)
  }
}
timer.timeout();
```

호출된 함수가 자신의 범위 내에 있어서 가능가능

---

<br/>

### ES6 클래스 패턴

- `prototype` 으로 가져왔던 부분을 `constructor` 를 사용해 구현

```javascript
class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
const one = new User("one", "Soju");
console.log(one.getFullName());
```

---

<br/>

### extends - 상속(확장)

- `super` 는 확장된 클래스를 의미

```javascript
class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel);
  }
}
```

에서 `super`는 `Vehicle`을 해당 위치에서 실행한다는 의미

```javascript
class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel);
    this.license = license;
  }
}
```
