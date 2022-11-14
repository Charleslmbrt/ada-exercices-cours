//--------------------- PIMP MY RIDE - PART 1 ---------------------

// --------- ETAPE 1 - PARSING -------------------------------------

let tripToParse = "Perdita 8 10 8";

const parseTrip = (trip) => {
  let tripArray = trip.split(" ");

  const user = {
    client: tripArray[0],
    start: parseInt(tripArray[1]),
    duration: parseInt(tripArray[2]),
    price: parseInt(tripArray[3]),
  };
  return user;
};
console.log("etape 1", parseTrip(tripToParse));

// --------- ETAPE 2 - LOOP PARSING ---------------------------------

let tripsToParse = [
  "Roger 0 5 10",
  "Pongo 3 7 14",
  "Perdita 8 10 8",
  "Anita 16 3 7",
];

let tripsArray = [];

const parseTrips = (trips) => {
  trips.map((trip) => {
    let users = parseTrip(trip);
    tripsArray.push(users);
  });
  return tripsArray;
};

console.log("etape 2", parseTrips(tripsToParse));

// --------- ETAPE 3 - PRICES ---------------------------------------

const getTripsPrice = (tripsList) => {
  let tripSum = 0;
  tripsList.map((trip) => {
    let priceNumber = trip.price;
    tripSum += priceNumber;
  });
  return tripSum;
};
console.log("etape 3", getTripsPrice(tripsArray));

// --------- ETAPE 4 - COMPATIBILITY --------------------------------

const checkCompatibility = (tripA, tripB) => {
  if (tripA.duration + tripA.start < tripB.start) {
    return true;
  } else {
    return false;
  }
};

console.log("etape 4", checkCompatibility(tripsArray[1], tripsArray[2]));

// --------- ETAPE 5 - POSSIBILITIES --------------------------------

let newTripsList = [];

const finCompatibilities = (tripsList) => {
  for (let i = 0; i < tripsList.length; i++) {
    for (let j = 0; j < tripsList.length; j++) {
      let compatibilitiesArray = checkCompatibility(tripsList[i], tripsList[j]);

      if (compatibilitiesArray === true) {
        newTripsList.push([tripsList[i], tripsList[j]]);
      }
    }
  }
  return newTripsList;
};

console.log("etape 5", finCompatibilities(tripsArray));

// --------- ETAPE 6 - FINAL CHOICE ----------------------------------

const findBestPrice = (tripsList) => {
  let finalArray = tripsList.map((trips) => {
    return getTripsPrice(trips);
  });

  const bestPrice = Math.max(...finalArray);

  return bestPrice;
};

console.log("etape 6", findBestPrice(newTripsList));
