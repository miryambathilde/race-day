let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 18;

if (early && age > 18){
  raceNumber +=1000;
}

if (early && age > 18){
  console.log(`Your race will start at 9:30 and your race number is: ${raceNumber}.`);
}
else if (!early && age > 18){
  console.log(`Your race will start at 11:00 and your race number is: ${raceNumber}.`);
}
else if (age < 18){
  console.log(`Your race will start at 12:30 and your race number is: ${raceNumber}.`);
}
else {
  console.log('Please approach the registraton desk, do not forget!');
}

