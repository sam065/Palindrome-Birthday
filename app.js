function reverseStr(str) {

    var listOfChars = str.split(''); //["H", "e", "l", "l", "o"]
    var reverseListOfChars = listOfChars.reverse(); // reversed the above list
    var reversedStr = reverseListOfChars.join(''); // joined the above list
    return reversedStr;

    // 1  line to reverse
    // return str.split('').reverse().join('')
}

// checks if the given string is palindrome or not
function isPalindrome(str) {

    var reverse = reverseStr(str);
    return str === reverse;
}

// converts given date object to a string
function convertDateToString(date) {

    var dateStr = { day: '', month: '', year: '' };
    // if day < 10, we add '0' ; same for month for getting valid date format

    // day
    if (date.day < 10) {
        dateStr.day = '0' + date.day;
    } else {
        dateStr.day = date.day.toString();
    }

    // month
    if (date.month < 10) {
        dateStr.month = '0' + date.month;
    } else {
        dateStr.month = date.month.toString();
    }

    // year
    dateStr.year = date.year.toString();

    return dateStr;


}

// retrieves all possible date formats
function getAllDateFormats(date) {
    var dateStr = convertDateToString(date);
    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

// checks palindrome for all date formats
function checkPalindromeForAllDateFormats(date) {
    var listOfPalindromes = getAllDateFormats(date);

    var flag = false;

    for (var i = 0; i < listOfPalindromes.length; i++) {
        if (isPalindrome(listOfPalindromes[i])) {
            flag = true;
            break;
        }
    }

    return flag;
}

// checks if a year is leap or not
function isLeapYear(year) {
    if (year % 400 === 0) {
        return true
    };

    if (year % 100 === 0) {
        return false
    };

    if (year % 4 === 0) {
        return true
    };

    return false;
}

// advances the date and takes care of day, month and year and returns the new date object
function getNextDate(date) {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // days in months of a non-leap year

    if (month === 2) {
        // leap year check 
        if (isLeapYear(year)) {
            if (day > 29) {
                day = 1;
                month++;
            }
        } else {
            if (day > 28) {
                day = 1;
                month++;
            }

        }



    } else {
        // if day exceeds current month's maximum days
        if (day > daysInMonth[month - 1]) {
            day = 1;
            month++;
        }
    }

    // if month is > 12, we will simply restart the month from January and increment year
    if (month > 12) {
        month = 1;
        year++;
    }

    return {
        day: day,
        month: month,
        year: year,
    };



}

// retrieves the next Palindromic date from a given date and returns it
function getNextPalindromeDate(date) {
    var ctr = 0;
    var nextDate = getNextDate(date);

    while (1) {
        ctr++;
        var flag = checkPalindromeForAllDateFormats(nextDate);
        if (flag) { // means if flag === True
            break;
        } else {
            nextDate = getNextDate(nextDate);
        }
    }

    return [ctr, nextDate];


}


// build previous date function

// build get Previous Palindrome date function

var dateInputRef = document.querySelector("#bday-input");
var showBtnRef = document.querySelector("#show-btn");
var resultRef = document.querySelector("#result");


function clickHandler(e) {
    var bdayStr = dateInputRef.value;

    if (bdayStr.length === 0) {
        alert("Please enter DOB. Do not leave this field empty");
    }

    if (bdayStr !== '') {
        var listOfDate = bdayStr.split('-'); // array of date : year, month, date in form of strings
        var date = {
            day: Number(listOfDate[2]),
            month: Number(listOfDate[1]),
            year: Number(listOfDate[0])
        }


        var flag = checkPalindromeForAllDateFormats(date);
        if (flag) {
            resultRef.innerText = "It is a Palindrome cause it reads the same from backwards💯 "
        } else {
            var [ctr, nextDate] = getNextPalindromeDate(date);
            // resultRef.innerText = "It is not a Palindrome cause it reads different from backwards ☢"
        }
        resultRef.innerText = `The nearest palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed by ${ctr} days 😢`;
    }
    // console.log(dateInputRef.value);
}
// reverses the string
function reverseStr(str) {

    var listOfChars = str.split(''); //["H", "e", "l", "l", "o"]
    var reverseListOfChars = listOfChars.reverse(); // reversed the above list
    var reversedStr = reverseListOfChars.join(''); // joined the above list
    return reversedStr;

    // 1  line to reverse
    // return str.split('').reverse().join('')
}

// checks if the given string is palindrome or not
function isPalindrome(str) {

    var reverse = reverseStr(str);
    return str === reverse;
}

// converts given date object to a string
function convertDateToString(date) {

    var dateStr = { day: '', month: '', year: '' };
    // if day < 10, we add '0' ; same for month for getting valid date format

    // day
    if (date.day < 10) {
        dateStr.day = '0' + date.day;
    } else {
        dateStr.day = date.day.toString();
    }

    // month
    if (date.month < 10) {
        dateStr.month = '0' + date.month;
    } else {
        dateStr.month = date.month.toString();
    }

    // year
    dateStr.year = date.year.toString();

    return dateStr;


}

// retrieves all possible date formats
function getAllDateFormats(date) {
    var dateStr = convertDateToString(date);
    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

// checks palindrome for all date formats
function checkPalindromeForAllDateFormats(date) {
    var listOfPalindromes = getAllDateFormats(date);

    var flag = false;

    for (var i = 0; i < listOfPalindromes.length; i++) {
        if (isPalindrome(listOfPalindromes[i])) {
            flag = true;
            break;
        }
    }

    return flag;
}

// checks if a year is leap or not
function isLeapYear(year) {
    if (year % 400 === 0) {
        return true
    };

    if (year % 100 === 0) {
        return false
    };

    if (year % 4 === 0) {
        return true
    };

    return false;
}

// advances the date and takes care of day, month and year and returns the new date object
function getNextDate(date) {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // days in months of a non-leap year

    if (month === 2) {
        // leap year check 
        if (isLeapYear(year)) {
            if (day > 29) {
                day = 1;
                month++;
            }
        } else {
            if (day > 28) {
                day = 1;
                month++;
            }

        }



    } else {
        // if day exceeds current month's maximum days
        if (day > daysInMonth[month - 1]) {
            day = 1;
            month++;
        }
    }

    // if month is > 12, we will simply restart the month from January and increment year
    if (month > 12) {
        month = 1;
        year++;
    }

    return {
        day: day,
        month: month,
        year: year,
    };



}

// retrieves the next Palindromic date from a given date and returns it
function getNextPalindromeDate(date) {
    var ctr = 0;
    var nextDate = getNextDate(date);

    while (1) {
        ctr++;
        var flag = checkPalindromeForAllDateFormats(nextDate);
        if (flag) { // means if flag === True
            break;
        } else {
            nextDate = getNextDate(nextDate);
        }
    }

    return [ctr, nextDate];


}


// build previous date function

// build get Previous Palindrome date function

var dateInputRef = document.querySelector("#bday-input");
var showBtnRef = document.querySelector("#show-btn");
var resultRef = document.querySelector("#result");


function clickHandler(e) {
    var bdayStr = dateInputRef.value;

    if (bdayStr !== '') {
        var listOfDate = bdayStr.split('-'); // array of date : year, month, date in form of strings
        var date = {
            day: Number(listOfDate[2]),
            month: Number(listOfDate[1]),
            year: Number(listOfDate[0])
        }
    } else {
        resultRef.innerText = "Please do not leave the field empty."
    }


    var flag = checkPalindromeForAllDateFormats(date);
    if (flag) {
        resultRef.innerText = "Yay, your birthday is a palindrome! "
    } else {
        var [ctr, nextDate] = getNextPalindromeDate(date);
        // resultRef.innerText = "It is not a Palindrome cause it reads different from backwards ☢"
    }
    resultRef.innerText = `sorry. The nearest palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed by ${ctr} days.`;
}
// console.log(dateInputRef.value);
showBtnRef.addEventListener("click", clickHandler);