const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
const menu=$('#menu'),tg=$('#menu-toggle');
const setMenu=o=>{menu.classList.toggle('open',o);tg.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''};
tg.onclick=()=>setMenu(true);$('.x',menu).onclick=()=>setMenu(false);
$$('a',menu).forEach(a=>a.onclick=()=>setMenu(false));
addEventListener('keydown',e=>e.key==='Escape'&&setMenu(false));
const nav=$('nav');const sc=()=>nav.classList.toggle('scrolled',scrollY>8);sc();addEventListener('scroll',sc,{passive:true});
const links=$$('.links a[href^="#"]');
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&links.forEach(l=>l.classList.toggle('on',l.getAttribute('href')==='#'+e.target.id))),{rootMargin:'-45% 0px -50% 0px'});
$$('section[id]').forEach(s=>io.observe(s));
$$('.slider').forEach(s=>{const tr=$('.slides',s),n=tr.children.length,d=$('.dots',s);let i=0,h;
 const go=k=>{i=(k+n)%n;tr.style.transform=`translateX(-${i*100}%)`;[...d.children].forEach((b,j)=>b.classList.toggle('on',j===i))};
 for(let k=0;k<n;k++){const b=document.createElement('button');b.setAttribute('aria-label','Show image '+(k+1));b.onclick=()=>go(k);d.append(b)}
 go(0);if(!rm){const p=()=>h=setInterval(()=>go(i+1),4000);p();s.onmouseenter=()=>clearInterval(h);s.onmouseleave=p}});
const ty=$('#typed'),ph=['web applications','Android & mobile apps','enterprise systems','e-commerce platforms'];
if(rm)ty.textContent=ph[0];else{let p=0,c=0,del=false;(function tick(){const w=ph[p];c+=del?-1:1;ty.textContent=w.slice(0,c);let t=del?30:65;if(!del&&c===w.length){del=true;t=1600}else if(del&&c===0){del=false;p=(p+1)%ph.length;t=300}setTimeout(tick,t)})()}
$('#yr').textContent=new Date().getFullYear();
