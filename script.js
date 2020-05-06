function setup(){
    document.getElementById("result-evaluation").style.display = "none";
}




function generateNumber(){
    var digits=Math.floor(Math.random()*1000000);
    document.getElementById("number").innerHTML=digits;
    window.setTimeout(function(){
        window.localStorage.setItem('Number' , digits);
        document.getElementById("number-generator").style.display = "none";
        document.getElementById("result-evaluation").style.display = "block";

    },5000);
    document.getElementById("refresh").innerHTML="Refreshing the page in 5 seconds..";

}
function guess(){
    
    var userResult = document.getElementById("result").value;
    var randomNumber=localStorage.getItem('Number');
    if(document.getElementById("result").value == '')
    {
        alert("Enter a Number");
    }
    
    else{
        var count=0;
        var userResult = userResult.split("");
        var randomNumber = randomNumber.split("");
        
        for( let i=0;i<6;i++)
        {
            if(userResult[i]==randomNumber[i])
            {
                count++;
            }
            
        }
        document.getElementById("resultt").innerHTML= count + ' Correct guesses';

        window.localStorage.clear();
    }

    
}

function replayGame(){
    window.localStorage.clear();
    location.reload();
}

