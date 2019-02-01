const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Dogs collection and inserts the 5 dogs below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/dogSocialization"
);

const dogSeed = [
  {
    name: "Tennison",
    pic: "https://i.postimg.cc/kXx7dnd9/Tennison.jpg",
    kennel: 95,
    shelterID: "A754918",
    intakeDate: 1 / 5 / 2019,
    decription: "male, brown & black German Shepherd Dog",
    playStyle: "W",
    active: true,
    notes: "no other dogs, will re-direct when walking in close proximity to dogs, approval needed to walk dog",
    socialization: [{ type: "Walk", duration: 40, ampm: "am" }, { type: "BRBreak", duration: 15, ampm: "pm" }],
    checkout:"",
    location: "Grassy 1"
  },
  {
    name: "Harvey",
    pic: "https://i.postimg.cc/8CCGWMfP/Harvey.jpg",
    kennel: 16,
    shelterID: "A754995",
    intakeDate: 1 / 7 / 2019,
    decription: "8 Yrs NEUTERED, black & white Siberian Husky mix",
    playStyle: "GD",
    active: true,
    notes: "gd, social",
    socialization: [{ type: "Group", duration: 40, ampm: "am" }, { type: "Group", duration: 40, ampm: "pm" }],
    checkout:"",
    location: "North Concrete"
  },
  {
    name: "Raisinet",
    pic: "https://i.postimg.cc/pLRRWg2j/Raisinet.jpg",
    kennel: 11,
    shelterID: "A755433",
    intakeDate: 1 / 15 / 2019,
    decription: "3 Yrs female, brown & black German Shepherd Dog",
    playStyle: "GD",
    active: true,
    notes: "gd, social, runs from humans in yard, hard to catch",
    socialization: [{ type: "BRBreak", duration: 10, ampm: "am" }, { type: "Group", duration: 40, ampm: "pm" }],
    checkout:"",
    location: "East Group Area"
  },
  {
    name: "Benson",
    pic: "https://i.postimg.cc/rwjcKQmP/Benson.jpg",
    kennel: 1,
    shelterID: "A753693",
    intakeDate: 12 / 13 / 2018,
    decription: "2 Yrs NEUTERED, black & white Pit Bull Terrier",
    playStyle: "Soft RR",
    active: true,
    notes: "soft rr, social, sexually motivated",
    socialization: [{ type: "Group", duration: 40, ampm: "am" }, { type: "Group", duration: 40, ampm: "pm" }],
    checkout:"",
    location: "East Group Area"
  },
  {
    name: "Yuki",
    pic: "https://i.postimg.cc/XvDbgq9K/Yuki.jpg",
    kennel: 14,
    shelterID: "A754337",
    intakeDate: 12 / 24 / 2018,
    decription: "2 Yrs female, tan & white Pit Bull Terrier mix",
    playStyle: "W",
    active: true,
    notes: "",
    socialization: [{ type: "Walk", duration: 30, ampm: "am" }, { type: "BRBreak", duration: 10, ampm: "am" }, { type: "Walk", duration: 30, ampm: "pm" }],
    checkout:"",
    location: "East Group Area"
  },
];

const staffSeed=[
  {
    name:"Delyse",
    pic:"",
    email:"dgan@gmail.com",
    notes:"",
    mobile:"916-555-1212",
    worked:[],
    checkout:01/30/2019,
    location:"East Group Area",
    active:true
  },
  {
    name:"Robert",
    pic:"",
    email:"rive@gmail.com",
    notes:"",
    mobile:"530-555-1212",
    worked:[],
    checkout:"",
    location:"Grassy 1",
    active:false
  },
  {
    name:"Sandi",
    pic:"",
    email:"sandi@gmail.com",
    notes:"",
    mobile:"415-555-1212",
    worked:[],
    checkout:"",
    location:"Off Campus",
    active:true
  },
  {
    name:"Caroline",
    pic:"",
    email:"carol@gmail.com",
    notes:"",
    mobile:"209-555-1212",
    worked:[],
    checkout:01/29/2019,
    location:"Off Campus",
    active:true
  },
];

db.Dog
  .remove({})
  .then(() => db.Dog.collection.insertMany(dogSeed))
  .then(data => {
    console.log(data.result.n + " dog records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Volunteer
  .remove({})
  .then(() => db.Volunteer.collection.insertMany(staffSeed))
  .then(data => {
    console.log(data.result.n + " volunteer records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });