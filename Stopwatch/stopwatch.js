let minTag=document.getElementById('min');
let secTag=document.getElementById('sec');
let msecTag=document.getElementById('msec');
let reBtn=document.getElementById('restart');
let playBtn=document.getElementById('start');
let pauseBtn=document.getElementById('pause');

let mSec=0;
let sec=0;
let min=0;

let interval=null;
let flag=false;

function timer()
{
    mSec=mSec+1;
    if(mSec==100)
    {
        sec=sec+1;
        mSec=0;
        if(sec==60)
        {
            min=min+1;
            sec=0;
        }
    }
    msecTag.innerText=concatZero(mSec);
    secTag.innerText=concatZero(sec);
    minTag.innerText=concatZero(min);
}
playBtn.addEventListener('click', function()
{
    if(!flag)
    {
        interval=setInterval(timer,10);
        flag=true;
    }
});

pauseBtn.addEventListener('click', function()
{
    if(flag)
    {
        clearInterval(interval);
        flag=false;
    }
});

reBtn.addEventListener('click', function()
{
    clearInterval(interval);
    flag=false;
    mSec=0;
    min=0;
    sec=0;
    msecTag.innerText="00";
    secTag.innerText="00";
    minTag.innerText="00";
});

function concatZero(time)
{
    if(time<10)
    {
        return "0"+time;
    }
    else
    {
        return time;
    }
}