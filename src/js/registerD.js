document.addEventListener('DOMContentLoaded',function(){
    var input_i=document.querySelector('.reg_input>p>i');
    input_i.innerHTML=vcode(4);
    var input_a=document.querySelector('.reg_input>p>a');
    input_i.onmouseenter=function(){
        input_a.style.display="block";
        input_a.onclick=function(){
            input_i.innerHTML=vcode(4);
        }
    }
    input_a.onmouseleave=function(){
        input_a.style.display="none";
    }
    console.log(input_a);
})