document.addEventListener('DOMContentLoaded',function(){
    var input_span=document.querySelector('.input>p>span');
    input_span.innerHTML=vcode(4);
    var input_i=document.querySelector('.input>p>i');
    input_span.onmouseenter=function(){
        input_i.style.display="block";
        input_i.onclick=function(){
            input_span.innerHTML=vcode(4);
        }
    }
    input_i.onmouseleave=function(){
        input_i.style.display="none";
    }
    console.log(input_i);
})
