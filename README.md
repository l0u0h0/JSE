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

- <u></u>

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
