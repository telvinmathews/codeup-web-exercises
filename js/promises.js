"use strict";

// alert('js works!');

function getPromise(userName) {
    const url = `https://api.github.com/users/${userName}/events/public`;
    return fetch(url, {headers: {'Authorization': gitHubAccesToken}})
        .then(function (response) {
            // console.log(response.json());
            return response.json()
        })
}


getPromise('telvinmathews')
    .then(function (userData) {
        // console.log(userData[0].created_at);
        return userData[0].created_at
    })

function wait(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve('Here is your data: ...');
            } else {
                reject('Network Connection Error!');
            }
        }, number);
    });
}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));