// Given an array of network objects representing network requests,
// assign the boolean 'true' to the variable 'inProgress'
// if any network request has a 'status' of 'pending'

let requests = [
    { url: '/photos', status: 'complete' },
    { url: '/albums', status: 'pending' },
    { url: '/users', status: 'failed' }
];

let inProgress = requests.some(function (request) {
   return request.status === 'pending';
});