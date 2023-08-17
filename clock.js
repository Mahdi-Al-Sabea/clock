


function showTime(){
    
    const currentDate=new Date();
    currentDate.setMonth(8);

    
    let hours=document.querySelector('.hours');
    let minutes=document.querySelector('.minutes');
    let seconds=document.querySelector('.seconds');
    let timePeriod=document.querySelector('.time-period');
    let date=document.querySelector('.date');
    
    hours.innerText=hoursFormat(addZero(currentDate.getHours()));
    minutes.innerText=addZero(currentDate.getMinutes());
    seconds.innerText=addZero(currentDate.getSeconds());
    timePeriod.innerText=getTimeSpan(currentDate.getHours());

    date.innerHTML=`${currentDate.getMonth()}/${currentDate.getUTCDate()}/${currentDate.getFullYear()}`;

   
    function addZero(time){
        if(time<10){
           return '0'+time;
        }
        else
        return time
    }
    
    function hoursFormat(currenthours){
        if(currenthours>12){
            return currenthours-12;
        }
    }
    
    function getTimeSpan(currentHours){
        if(currentHours>12){
            return 'PM';
        }
        else
        return 'AM';
    }
    
    
    
    
    
    }
    
    
    
    
    
    setInterval(showTime,1000);