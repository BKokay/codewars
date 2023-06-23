// In this kata, we will make a function to test whether a period is late.

// Our function will take three parameters:

// last - The Date object with the date of the last period

// today - The Date object with the date of the check

// cycleLength - Integer representing the length of the cycle in days

// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

//P takes in 3 parameters - 2 dates and an integer
//R true if today - last > cycleLength; false if not
//E (new Date(2016, 6, 13), new Date(2016, 7, 16), 28) === true
//P 

 // JavaScript program to illustrate 
    // calculation of no. of days between two date 
      
    // To set two dates to two variables
        // var date1 = new Date("06/30/2019");
        // var date2 = new Date("07/30/2019");
      
    // To calculate the time difference of two dates
        // var Difference_In_Time = date2.getTime() - date1.getTime();
      
    // To calculate the no. of days between two dates
        //var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      
    //To display the final no. of days (result)
        // console.log("Total number of days between dates  <br>"
        //            + date1 + "<br> and <br>" 
        //            + date2 + " is: <br> " 
        //            + Difference_In_Days);

function periodIsLate(last, today, cycleLength) {
    const differenceInTime = today.getTime() - last.getTime(); 
    const differenceInDays = differenceInTime / (1000 * 3600 *24);
    
    if(differenceInDays > cycleLength){
        return true;
    } else {
        return false;
    }
  };

  periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28)