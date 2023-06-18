function check(){
    var a = document.getElementById("pa1").value;
    var b = document.getElementById("pa2").value;
    var c = "Passwords are not same";
    var d = "";
    if( a != b)
    {
       alert("Passwords are not Same");
       document.getElementById("pa2").value="";

       return false;
    }
    else{
        return true;

    }

}
function che(){
     var a=document.getElementById("pass").value;
        if(a.match(/[0-9]/))
        {
            document.getElementById("n").style.color = "green";
        }
        if(a.match(/[A-Z]/))
        {
            document.getElementById("u").style.color = "green";
        }
        if(a.match(/[a-z]/))
        {
            document.getElementById("l").style.color = "green";
        }
        if(a.match(/[!,$,#,%,&,*,@,_]/))
        {
            document.getElementById("s").style.color = "green";
        }
        if((a.length > 8))
        {
            document.getElementById("c").style.color = "green";
        }
        if(a.match(/[a-z]/g) && a.match(/[A-Z]/g) && a.match(/[0-9]/g) && a.match(/[a-z A-Z\d]/g) && a.match(/[!@#$%&*]/g) && a.length>8)
    {
        document.getElementById("c").style.display = "none";
        document.getElementById("u").style.display = "none";
        document.getElementById("l").style.display = "none";
        document.getElementById("n").style.display = "none";
        document.getElementById("s").style.display = "none";
        document.getElementById("log").style.marginTop = "-100px";

    }
    
}

function val(){
    var a=document.getElementById("pass").value;
    if(a.match(/[a-z]/g) && a.match(/[A-Z]/g) && a.match(/[0-9]/g) && a.match(/[a-z A-Z\d]/g) && a.match(/[!@#$%&*]/g) && a.length>8)
    {
      
        return true;
    }
    else{
        return false;
    }
}