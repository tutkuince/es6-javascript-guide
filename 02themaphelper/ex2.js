let trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
];

let speeds = trips.map(function (trip) {
    return trip.distance / trip.time;
});