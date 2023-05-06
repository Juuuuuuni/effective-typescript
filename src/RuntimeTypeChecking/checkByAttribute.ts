/*
* 런타임에서 특정 타입을 명확하게 체크하기 위해서는 해당 타입에 존재하는 속성 여부로 확인
* */
interface Shape {
  height: number;
  width: number;
}

function calculateArea(shape: Shape) {
  if ("height" in shape) {
    return shape.width * shape.height;
  }
}

export {}
