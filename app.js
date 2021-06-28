'use strict';

// alert('hello js');
// global array for the working hours
const workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


// Global Function Random number btw 2 values
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let Seattle = {
    locationName: 'Seattle',
    minCustomers: 23,
    maxCustomers: 65,
    avgCookies: 6.3,
    total: 0,
    // empty array to store the values inside
    customersEachHour: [],
    // empty array to store the cookies purchased per hour
    cookiesEachHour: [],
    // calculate the number of customers every hour
    calcCustomersEachHour: function() {
        for (let i = 0; i < workingHours.length; i++) {
            // console.log(i);
            // console.log(random(this.minCustomers, this.maxCustomers));
            this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));
        }
        // console.log(this.customersEachHour);
    },

    // method to calculate the cookies per hour
    calcCookiesEachHour: function() {
        for (let i = 0; i < workingHours.length; i++) {
            // console.log(this.customersEachHour);
            // console.log(this.customersEachHour[i]);
            // console.log(Math.floor(this.avgCookies * this.customersEachHour[i]));
            this.cookiesEachHour.push(Math.floor(this.avgCookies * this.customersEachHour[i]));
            this.total += this.cookiesEachHour[i];
        }
        // console.log(this.cookiesEachHour);
        // console.log(this.total);
    },

    render: function() {
        // render the data on the browser
        // DOM
        // get the element from the html file [sales]
        let parent = document.getElementById('result');
        console.log(parent);
        // shop Name
        let shopName = document.createElement('h3');
        // after each create plz append
        parent.appendChild(shopName);

        shopName.textContent = this.locationName;

        // creating the list
        let unOrderedList = document.createElement('ul');
        parent.appendChild(unOrderedList);
        // li elements, array workingHours
        for (let i = 0; i < workingHours.length; i++) {

            // create li
            let listItem = document.createElement('li');
            unOrderedList.appendChild(listItem);
            // give it a text content
            listItem.textContent = `${workingHours[i]}: ${this.cookiesEachHour[i]} cookies`
        }

        // calc the total
        let totalItem = document.createElement('li');
        unOrderedList.appendChild(totalItem);
        totalItem.textContent = `Total: ${this.total} cookies`;
    }

}

Seattle.calcCustomersEachHour();
Seattle.calcCookiesEachHour();
Seattle.render();


let Tokyo = {
    locationName: 'Tokyo',
    minCustomers: 3,
    maxCustomers: 24,
    avgCookies: 1.2,
    total: 0,
    // empty array to store the values inside
    customersEachHour: [],
    // empty array to store the cookies purchased per hour
    cookiesEachHour: [],
    // calculate the number of customers every hour
    calcCustomersEachHour: function() {
        for (let i = 0; i < workingHours.length; i++) {
            // console.log(i);
            // console.log(random(this.minCustomers, this.maxCustomers));
            this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));
        }
        // console.log(this.customersEachHour);
    },

    // method to calculate the cookies per hour
    calcCookiesEachHour: function() {
        for (let i = 0; i < workingHours.length; i++) {
            // console.log(this.customersEachHour);
            // console.log(this.customersEachHour[i]);
            // console.log(Math.floor(this.avgCookies * this.customersEachHour[i]));
            this.cookiesEachHour.push(Math.floor(this.avgCookies * this.customersEachHour[i]));
            this.total += this.cookiesEachHour[i];
        }
        // console.log(this.cookiesEachHour);
        // console.log(this.total);
    },

    render: function() {
        // render the data on the browser
        // DOM
        // get the element from the html file [sales]
        let parent = document.getElementById('result');
        console.log(parent);
        // shop Name
        let shopName = document.createElement('h3');
        // after each create plz append
        parent.appendChild(shopName);

        shopName.textContent = this.locationName;

        // creating the list
        let unOrderedList = document.createElement('ul');
        parent.appendChild(unOrderedList);
        // li elements, array workingHours
        for (let i = 0; i < workingHours.length; i++) {

            // create li
            let listItem = document.createElement('li');
            unOrderedList.appendChild(listItem);
            // give it a text content
            listItem.textContent = `${workingHours[i]}: ${this.cookiesEachHour[i]} cookies`
        }

        // calc the total
        let totalItem = document.createElement('li');
        unOrderedList.appendChild(totalItem);
        totalItem.textContent = `Total: ${this.total} cookies`;
    }

}

Tokyo.calcCustomersEachHour();
Tokyo.calcCookiesEachHour();
Tokyo.render();