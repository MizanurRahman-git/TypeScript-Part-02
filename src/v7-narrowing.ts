//TODO: Narrowing Down ====>

//* "typeof"

let x = ["abc"];

console.log(typeof x === "object");

//* type guard

const print = (value: string | number) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value;
  }
};

//* Truthiness

type User = {
  name: string;
  address?: {
    street: string;
  };
} | null;

const loggedInUser: User = {
  name: "mizanur",
  address: {
    street: "Rangpur",
  },
};

const showAddress = (user: User) => {
  if (user && user.address) {
    console.log(user.address.street);
    return
  }

  throw new Error("User not found")
};


