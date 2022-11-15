//--------------------- PIMP MY RIDE - POO - PART 2 ---------------------

class Trip {
  constructor(client, start, duration, price) {
    this.client = client;
    this.start = start;
    this.duration = duration;
    this.price = price;
    this.end = this.start + this.duration;

    this.isCompatible = function (trip) {
      if (trip.end < this.start || trip.end == this.end) {
        return true;
      } else {
        return false;
      }
    };
  }
}

let trip1 = new Trip("Perdita", 8, 10, 8);
let trip2 = new Trip("Roger", 0, 5, 10);
let trip3 = new Trip("Pongo", 3, 7, 14);
let trip4 = new Trip("Anita", 16, 3, 7);

// --------- ETAPE 1 - PARSING -------------------------------------

const parseTrip = (trip) => {
  return trip;
};
console.log("etape 1", parseTrip(trip1));

// --------- ETAPE 2 - LOOP PARSING ---------------------------------

let tripsToParse = [trip1, trip2, trip3, trip4];

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

console.log("etape 4", trip1.isCompatible(trip2));

// --------- ETAPE 5 - POSSIBILITIES --------------------------------

let newTripsList = [];

function findCompatibilities(trips) {
  for (let i = 0; i < trips.length; i++) {
    for (let j = 0; j < trips.length; j++) {
      let compatibilitiesArray = trips[i].isCompatible(trips[j]);

      if (compatibilitiesArray === true) {
        newTripsList.push([trips[i], trips[j]]);
      }
    }
  }
  return newTripsList;
}
console.log("etape 5", findCompatibilities(tripsArray));

// --------- ETAPE 6 - FINAL CHOICE ----------------------------------

const findBestPrice = (tripsList) => {
  let finalArray = tripsList.map((trips) => {
    return getTripsPrice(trips);
  });

  const bestPrice = Math.max(...finalArray);

  return bestPrice;
};

console.log("etape 6", findBestPrice(newTripsList));
