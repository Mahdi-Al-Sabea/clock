


function showTime(){
    
    const currentDate=new Date();
    
    let hours=document.querySelector('.hours');
    let minutes=document.querySelector('.minutes');
    let seconds=document.querySelector('.seconds');
    let timePeriod=document.querySelector('.time-period');
    
    hours.innerText=currentDate.getHours();
    minutes.innerText=currentDate.getMinutes();
    seconds.innerText=currentDate.getSeconds();
    timePeriod.innerText=getTimeSpan(currentDate.getHours());

    console.log(currentDate.getMonth);
    
    
    
    
    function getTimeSpan(currentHours){
        if(currentHours>12){
            return 'PM';
        }
        else
        return 'AM';
    }
    
    
    
    
    
    }
    
    
    
    
    
    setInterval(showTime,1000);