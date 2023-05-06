/*
* Class로 정의 할 경우 런타임에서 체크가 가능하다.
* 인터페이스틑 타입으로만 사용 가능하지만, Class는 값, 타입 둘 다 가능하기 때문이다.
* */

class Square {
  constructor(width: number) {
  }
}

class Rectangle extends Square {
  constructor(width: number, height: number) {
    super(width);
  }
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) return;
  else return;
}


export {};
