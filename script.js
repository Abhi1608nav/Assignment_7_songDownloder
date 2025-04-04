const downloadPercentage = document.querySelector('.downloadPercentage');
const downloadBtn = document.querySelector('.download');
const downloadBar = document.querySelector('.downloadBar')

console.log(downloadBar,downloadBtn,downloadPercentage)

let downloadval = 0;
let isDownload = false;
downloadBtn.addEventListener('click',function(){
    if(isDownload)return;
    isDownload=true;
    
    downloadval=0;
    downloadBtn.style.opacity=0.8;
    downloadBtn.innerHTML = 'Downloading...';

    const interval = setInterval(function(){
        if(downloadval<100)
        {
            downloadval+=Number(Math.floor(Math.random()*10));
            downloadval = Math.min(downloadval,100);
            console.log(downloadval);
            downloadPercentage.innerHTML = `${downloadval}%`;
            downloadBar.style.width = `${downloadval}%`;
    
        }
        else{
            downloadPercentage.innerHTML='100%';
            clearInterval(interval);// to clear the instance of interval to stop it.
            downloadBtn.style.opacity=1;
            isDownload = false;
            downloadBtn.innerHTML='Download'
            
        }
        
    },500);

})