// glabal variables
const weekdays= ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] 

/*clock settings*/
let clock = setTimeout(function clockSet() {
    const today = new Date(); //fetching date
    
    // date options
    let y = today.getFullYear();
    let mo = (today.getMonth()+1);
    let d = today.getDate();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    am= ''  // am:pm empty string

    let day= weekdays[today.getDay()]; // turning number to weekdays. 

    // format 12 hours && decide am/pm
    if (h>12){
        h= (checkTime(h)-12);
        am= 'pm'
    }else{
         am='am'
        }

    //make douple digits
    mo = checkTime(mo);
    d  = checkTime(d);
    h  = checkTime(h);
    m  = checkTime(m);
    s  = checkTime(s);

    function checkTime(i) {
        if (i < 10) {
            i = '0' + i
        }; 
        return i;
    }


    const time= h + ':' + m + ':' + s ;   //full time
    document.getElementById('time').textContent=time; //fill time
    document.getElementById('am').textContent=am;

    date= y+'.'+ mo+'.' + d;  //full date 
    document.getElementById('day').textContent=day; // fill date
    document.getElementById('date').textContent=date;

    //console.log(time , date) 

    //fill time elements
    function displayTime() {
        const timeChar = document.querySelectorAll('.time-char')
        timeChar.forEach((timeChar, index) => {
            timeChar.textContent = timeArray[index]
        });
    }
    displayTime();
    
    //fill date elements
    function displayDate() {
        const dateChar = document.querySelectorAll('.date-char')
        dateChar.forEach((dateChar, index) => {
            dateChar.textContent = dateArray[index]
        });
    }
    displayDate();

    clock= setTimeout(clockSet, 1000); //nest setTimeOut 
},1000) //repeat every second





