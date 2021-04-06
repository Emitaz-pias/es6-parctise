const myFrineds = {
  names: "akash",
  roll: 2,
  wifeName: "batashi",
  homeTown: "salna",
};

// object destructure
const { names } = myFrineds;
console.log(names);
const yourFriends = [
 "akash",
   2,
 "batashi",
    "salna",
]
// array destructure ... will copy the entire arraay before
const  [...wifeName] = yourFriends;
console.log(wifeName);