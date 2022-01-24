const myfunc=()=>{
    var x=document.getElementById('menu')
    var y=document.getElementById('cross_burger')
    if(x.style.display=="none"){
        x.style.display="block";
        y.innerHTML="X"
    }
    else{
        x.style.display="none";
        y.innerHTML="&#9776;"
    }
    
}