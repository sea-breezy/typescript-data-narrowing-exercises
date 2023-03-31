const loggedInUsers = (num: number | null) => {
  if (num) {
    console.log(`${num} users online`);
  } else {
    console.log('everyone is offline');
  }
}

const logStringsType = (strs: string | string[] | null): void => {
  if (strs) {
    if (typeof strs === 'object') {
      console.log('this is an object of strings');
    } else if (typeof strs === "string") {
      console.log('this is a string');
    }
  } else {
    console.log('this is not a string');
  }
}

loggedInUsers(10);
loggedInUsers(0);
loggedInUsers(null);

logStringsType("hello");
logStringsType(["hello", "world"]);
logStringsType("");
logStringsType(null);