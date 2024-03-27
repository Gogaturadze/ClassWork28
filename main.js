// 7.1

const weekDays = {
  1: "ორშაბათი",
  2: "სამშაბათი",
  3: "ოთხშაბათი",
  4: "ხუთშაბათი",
  5: "პარასკევი",
  6: "შაბათი",
  7: "კვირა",
};

console.log(weekDays);

// 7.2

let obj = {
  "9name": 10,
  key7: 20,
  "a-b": 30,
  "city 10": 40,
  city10: 50,
};

console.log(obj["9name"]);
console.log(obj["key7"]);
console.log(obj["a-b"]);
console.log(obj["city 10"]);
console.log(obj["city10"]);

// 7.3

const person = { name: "ვაჟა ცხადაძე", gender: "მამრობითი" };
const dob = { data_of_birth: 2011 };

const personInfo = {
  ...person,
  ...dob,
};

console.log(personInfo);

// 7.4

const person1 = {
  name: "ვაჟა ცხადაძე",
  gender: "მამრობითი",
};

let personName = person1.name;
let personGender = person1.gender;

console.log(personName);
console.log(personGender);

// 7.5

const person2 = {
  name: "ვაჟა ცხადაძე",
  gender: "მამრობითი",
  data_of_birth: 2011,
};

let canVote = (canVOte) => {
  let nowDay = new Date().getFullYear();
  let age = nowDay - person2.data_of_birth;

  if (age >= 18) {
    console.log(true);
  } else {
    console.log(false);
  }
};

canVote(person2);
