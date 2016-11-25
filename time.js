'use strict';

function  initializeClock(objectDate,arr) {
    var dateFromArr = '';
    if (Array.isArray(objectDate)){
        arr = objectDate;
    }
    if(!(objectDate instanceof Date)) {
        objectDate = new Date();
    }
    if(arr===undefined||arr.length==0) {
        arr = ['hour', 'minute', 'second'];
    }
    for(var i=0; i<arr.length;i++) {
        if (i == 0) {
            var moreVal = "";
        }
        else {
            var moreVal = ":";
        }
        switch (arr[i]) {
            case 'year':
                dateFromArr+= moreVal + objectDate.getFullYear();
                break;
            case 'month':
                dateFromArr+= moreVal + objectDate.getMonth();
                break;
            case 'day':
                dateFromArr+= moreVal + objectDate.getDay();
                break;
            case 'hour':
                dateFromArr+= moreVal + objectDate.getHours();
                break;
            case 'minute':
                dateFromArr+= moreVal + objectDate.getMinutes();
                break;
            case 'second':
                dateFromArr+= moreVal + objectDate.getSeconds();
                break;
            case 'millisecond':
                dateFromArr+= moreVal + objectDate.getMilliseconds();
                break;
        }
    }
    document.getElementById('time').innerHTML = dateFromArr;
}
// initializeClock(new Date(2014, 6, 14));
// initializeClock(['hour', 'second']);
// initializeClock(new Date(2014, 6, 14), ['year', 'month', 'second']);
// initializeClock();

var a = [];

var goStart = function(){
    var today = new Date();
    initializeClock(today, a);
}

setInterval(function(){goStart()}, 1000)
