


function showTime(){
    
    const currentDate=new Date();
    

    
    let hours=document.querySelector('.hours');
    let minutes=document.querySelector('.minutes');
    let seconds=document.querySelector('.seconds');
    let timePeriod=document.querySelector('.time-period');
    let date=document.querySelector('.date');
    
    hours.innerText=addZero(hoursFormat(currentDate.getHours()));
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
            currenthours=currenthours-12;
        }
        if(currenthours===0){
            currenthours=12;
        }
        return currenthours;
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