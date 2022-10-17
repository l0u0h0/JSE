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

### Promise

- 비동기적 처리를 할 때 콜백 방식으로 처리르 하게 되는데 프로미스를 사용하게 되면  
  비동기 메서드에서 동기 메서드처럼 값을 반환할 수 있다.

```js
new Promise((resolve, reject) => {
  resolve();
  reject();
});
```

- `resolve`가 이루어지면 프로미스는 그 다음 단계로 진행할 수 있게 된다.

```js
new Promise((resolve, reject) => {
  resolve("hello");
  reject();
}).then((value) => {
  console.log(value);
});
```

- `then` 구문으로 안에 담긴 `value`가 전달되어 넘어간다.

---

```js
new Promise((resolve, reject) => {
  console.log("inside Promise");
  reject(new Error("First reject"));
  resolve("First resolve");
})
  .then((value) => {
    console.log("inside then");
    console.log(value);
  })
  .catch((err) => {
    console.log("error", err);
  });
```

- `reject`를 호출하게 되면 `then` 구문을 건너뛰고 에러가 캐치된다.

```js
new Promise((resolve, reject) => {
  console.log("inside Promise");
  reject(new Error("First reject"));
  resolve("First resolve");
})
  .catch((err) => {
    console.log("error", err);
  })
  .then((value) => {
    console.log("inside then");
    console.log(value);
  });
```

- `catch`된 이후에 `then` 구문이 실행된다.
- `catch`는 가장 가까이에 있는 에러를 잡아준다.
- `then` 구문에서의 `value`는 아무것도 담겨있지 않다. `resolve`가 된 적이 업기 때문
- `resolve`, `reject`의 순서를 바꾼다면 `reject`는 실행되지 않는다.

---

```js
new Promise((resolve, reject) => {
  console.log("before Timeout");
  setTimeout(() => {
    resolve(Math.random());
    console.log("after resolve");
  }, 1000);
})
  .then((value) => {
    console.log("value", value);
  })
  .then(() => {
    console.log("then 2");
  })
  .then(() => {
    console.log("then 3");
  });
```

- `then` 구문이 순차적으로 출력됨.

```js
function returnPromiseForTimeout() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.random());
      console.log("after resolve");
    }, 1000);
  });
}

returnPromiseForTimeout()
  .then((value) => {
    console.log("value", value);
    return returnPromiseForTimeout();
  })
  .then((value) => {
    console.log("then 2");
    console.log("value", value);
    return returnPromiseForTimeout();
  })
  .then((value) => {
    console.log("then 3");
    console.log("value", value);
    return returnPromiseForTimeout();
  });

returnPromiseForTimeout();
```

- 순차적인 `then` 체인 안에서 각각 프로미스객체를 리턴하면  
  해당 객체가 `resolve` 될때까지 순차적으로 기다렷다가 실행됨.

### async, await

```js
/**
 *
 * @param {number} duration
 */
async function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, duration);
  });
}

async function main() {
  console.log("1");
  await sleep(1000);
  console.log("2");
  await sleep(1000);
  console.log("3");
  await sleep(1000);
  console.log("finish");
}

main();
```

- `async`, `await`
- `await`은 `async` 함수를 기다려줄 수 있다.
