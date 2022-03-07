# JS function

### 기본

- 매개변수로 받아서 사용

```javascript
function func(x, y) {
  return x + y;
}
const a = func(1, 3);
console.log(a);
```

- 인수가 많아 매개변수로 일일히 지정하기 힘들 때 (이러한 방법도 있다~ 많이 사용 X)

```javascript
function func() {
  return argument[0] + argument[1];
}
const a = func(1, 3);
console.log(a);
```

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

- 매개변수가 하나일 때는 괄호를 생략하여 사용할수도 있다.

```javascript
const a = (x) => x + 2;
```
