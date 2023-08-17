


function showTime(){
    
    const currentDate=new Date();
    currentDate.setMonth(8);

    
    let hours=document.querySelector('.hours');
    let minutes=document.querySelector('.minutes');
    let seconds=document.querySelector('.seconds');
    let timePeriod=document.querySelector('.time-period');
    let date=document.querySelector('.date');
    
    hours.innerText=currentDate.getHours();
    minutes.innerText=currentDate.getMinutes();
    seconds.innerText=currentDate.getSeconds();
    timePeriod.innerText=getTimeSpan(currentDate.getHours());

    date.innerHTML=`${currentDate.getMonth()}/${currentDate.getUTCDate()}/${currentDate.getFullYear()}`;

   
    
    
    
    
    function getTimeSpan(currentHours){
        if(currentHours>12){
            return 'PM';
        }
        else
        return 'AM';
    }
    
    
    
    
    
    }
    
    
    
    
    
    setInterval(showTime,1000);