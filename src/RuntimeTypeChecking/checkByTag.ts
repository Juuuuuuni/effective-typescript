/*
* 태그 기법
* */
interface Square {
  kind: "square";
  width: number;
}

interface Rectangle {
  kind: "rectangle";
  height: number;
  width: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if (shape.kind === "rectangle") {}
  else {}
}

export {};
