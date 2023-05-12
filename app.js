const sub=document.getElementById('submit1');
const ok=document.getElementById('btn2');
const msg1=document.getElementById('msg1');


const msg = ()=>{
    msg1.classList.add('showme');
}

const remmsg = ()=>{
    msg1.classList.remove('showme');
}

sub.addEventListener('click',msg);
ok.addEventListener('click',remmsg);