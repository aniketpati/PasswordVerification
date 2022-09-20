
function check()
{
    var input = document.getElementById("password").value;
    
    input=input.trim();
    document.getElementById("password").value=input;
    document.getElementById("count").innerText="Length : " + input.length;
    if(input.length>=8)
    {
        document.getElementById("check0").style.color="green";
    }
    else
    {
       document.getElementById("check0").style.color="red"; 
    }
    
    if(input.length<=20)
    {
        document.getElementById("check1").style.color="green";
    }
    else
    {
       document.getElementById("check1").style.color="red"; 
    }
    
    if(input.match(/[0-9]/i))
    {
        document.getElementById("check2").style.color="green";
    }
    else
    {
       document.getElementById("check2").style.color="red"; 
    }
    
    if(input.match(/[^A-Za-z0-9-' ']/i))
    {
        document.getElementById("check3").style.color="green";
    }
    else
    {
       document.getElementById("check3").style.color="red"; 
    }
    if(input.match(/[A-Z]/))
    {
        document.getElementById("check4").style.color="green";
    }
    else {
        document.getElementById("check4").style.color="red";
    }

    
}

