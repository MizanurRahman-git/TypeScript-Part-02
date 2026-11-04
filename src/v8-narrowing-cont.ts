//* some caveat of type guard

const printAll = (x: string | string[] | null) => {
  if (x && typeof x === "object") {
    for (let str of x) {
      console.log(str);
    }
  } else if (typeof x === "string") {
    console.log(x);
  } else {
    console.log(" ");
  }
};

printAll(["mizanur", "Rahman", "Hridoy"]);

//* Equality

const printAll2 = (x: string | string[] | null) => {
  if (x !== null) {
    if (typeof x === "object") {
      for (let str of x) {
        console.log(str);
      }
      return
    }
    console.log(x);
    return
  }
  console.log("");
};

printAll2("hello");

//* "in" Operator

type Bird = { fly: () => void }
type Fish = { swim: () => void }

const move = (animal: Bird | Fish) => {
    if("fly" in animal){
        animal.fly()
        return
    }

    animal.swim()
}

//* "instanceof" check

const date = new Date();
const err = new Error("Something went wrong")

console.log(date instanceof Date);
console.log(err instanceof Error);

const showDate = (x: Date | string) => {
    if(x instanceof Date){
        console.log(x.toISOString())
        return
    }

    const date = new Date(x)
    console.log(date.toISOString());
}

showDate(new Date("04-23-2003"))
showDate("02-23-2008")

//* Discriminated Union

interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square",
    sideLength: number
}

const getArea = (shape: Circle | Square) => {
    if(shape.kind === "circle"){
        console.log(shape.radius);
    } else {
        console.log(shape.sideLength);
    }
}


getArea({kind: "circle",radius:2323})