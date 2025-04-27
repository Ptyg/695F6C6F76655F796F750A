import{r as i}from"./chunk-BAXFHI7N-Dpmsv6QR.js";const g=()=>{const o=i.useRef([]),s=i.useCallback((t,c=30)=>{const a=Math.min(t,c),e=Date.now();Array.from({length:a}).forEach((l,m)=>{const r=document.createElement("span");r.textContent="❤️";const $=Math.random()*100,u=Math.random()*200,d=(Math.random()-.5)*100,v=.8+Math.random()*.6,f=3+Math.random()*4,p=m*50+Math.random()*100;if(Object.assign(r.style,{position:"fixed",left:`${$}%`,transform:`translateX(${d}px)`,top:`calc(100vh + ${u}px)`,fontSize:`${1.5*v}rem`,color:`hsl(${Math.random()*30+330}, 70%, 65%)`,pointerEvents:"none",animation:`floatUpHeart-${e} ${f}s ease-in ${p}ms forwards`,zIndex:"9999",opacity:"0"}),!document.getElementById(`heart-float-style-${e}`)){const n=document.createElement("style");n.id=`heart-float-style-${e}`,n.innerHTML=`
          @keyframes floatUpHeart-${e} {
            0% {
              transform: translateY(0) translateX(${d}px);
              opacity: 0;
            }
            20% {
              opacity: 1;
            }
            100% {
              transform: translateY(calc(-100vh - ${u}px)) translateX(${d}px);
              opacity: 0;
            }
          }
        `,document.head.appendChild(n)}document.body.appendChild(r),o.current.push(r),setTimeout(()=>{r.remove(),o.current=o.current.filter(n=>n!==r),m===a-1&&setTimeout(()=>{const n=document.getElementById(`heart-float-style-${e}`);n&&n.remove()},f*1e3)},f*1e3+p)})},[]),h=()=>{o.current.forEach(t=>{t.remove()}),o.current=[]},y=(t,c=30)=>{i.useEffect(()=>{const a=e=>{const l=e.target;l.tagName==="BUTTON"||l.tagName==="INPUT"||l.tagName==="SELECT"||l.tagName==="TEXTAREA"||s(t,c)};return document.body.style.cursor="pointer",document.addEventListener("click",a),()=>{document.body.style.cursor="",document.removeEventListener("click",a)}},[t,s])},E=(t,c=30,a=800)=>{i.useEffect(()=>{const e=setInterval(()=>{s(t,c)},a);return()=>clearInterval(e)},[t,a,s])};return i.useEffect(()=>()=>h(),[]),{spawnHearts:s,useClickToSpawn:y,useEndlessHearts:E}};export{g as u};
