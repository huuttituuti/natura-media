"use strict";(()=>{function H(){var a,e;let o=document.querySelectorAll("[stamp='item']"),t=document.querySelectorAll("[stamp='card']"),n=[];for(let u=0;u<o.length;u++){let l=(a=o[u].querySelector("[stamp='type']"))==null?void 0:a.textContent,d=o[u].querySelector("[stamp='image']"),S=o[u].querySelectorAll("[stamp='product']"),h=(e=document.querySelector("[stamp='name']"))==null?void 0:e.textContent;n=Array.from(S).map(r=>r.textContent);for(let r=0;r<t.length;r++)n.some(L=>{h!=null&&h.includes(L)&&(l!=null&&l.includes("Suosittelee")?(t[r].append(d==null?void 0:d.cloneNode(!0)),t[r].setAttribute("fs-cmssort-field","ajankohtaiset")):l!=null&&l.includes("Uutuus")&&(d==null||d.classList.add("uutuus"),t[r].append(d==null?void 0:d.cloneNode(!0)),t[r].setAttribute("fs-cmssort-field","ajankohtaiset")))})}let i=document.querySelector("[stamp='list-wrp']");i==null||i.remove()}function w(){var u;let o=document.querySelector("[allergens='wrp']"),t=document.querySelector("[allergens='header']"),n=Array.from(document.querySelectorAll("[allergens='item']")),i=[],a=[],e=[];for(let l=0;l<n.length;l++)n[l].innerHTML.includes("Vegaani-leima")||e.push(n[l].textContent);for(let l=0;l<e.length;l++)e[l].includes("Vegaani-leima")&&e.splice(e.indexOf(e[l]),1);if(e.join(""),e.length===1)e[0]=" "+e[0]+".",t.textContent="Ei sis\xE4ll\xE4 "+e[0];else if(e.length===2)e[0]=" "+e[0]+" eik\xE4 ",e[1]+=".",t.textContent="Ei sis\xE4ll\xE4 "+e[0]+e[1];else if(e.length>=3){let l=" "+e[0]+", ",d=e[e.length-1]+".",S=e[e.length-2]+" eik\xE4 ",h=e.slice(1,e.length-2);for(let r=0;r<h.length;r++)h[r]=h[r]+", ";i.push(l,h,S,d),a=i.flat(),a=a.join(""),t.textContent="Ei sis\xE4ll\xE4 "+a}(u=document.querySelector("[allergens='list']"))==null||u.remove()}function M(){let o=document.querySelector("[html-table='content']");if(o.textContent){let t=o.querySelector("strong").textContent,n=document.querySelector("[html-table='container"),i=document.createElement("table");i.classList.add("table"),n==null||n.appendChild(i);let a=i.createTHead();a.classList.add("table_thead");let e=i.createTBody(),u=Array.from(t.split("|")),l=a.insertRow(0),d=u[0];l.insertCell(0).innerHTML=d;let S=u.slice(1,-1);for(let s=0;s<S.length;s++){let m=l.insertCell();m.innerHTML=S[s],m.style.paddingLeft=".25rem",m.style.paddingRight=".25rem",m.style.textAlign="center"}let h=u.slice(-1),r=l.insertCell(-1);r.innerHTML=h,r.style.textAlign="right",r.style.paddingRight="1rem";let L=a.querySelectorAll("td").length,C=[],T=o.querySelectorAll("p");for(let s=0;s<T.length;s++)T[s].innerHTML.includes("<strong>")||C.push(T[s]);let q=[];for(let s=0;s<C.length;s++){let m=e.insertRow(),g=C[s].textContent;if(g[0]==="*")q.push(C[s]);else{let c=Array.from(g.split("|")),f=c[0],y=m.insertCell(0);y.innerHTML=f,y.style.paddingRight=".25rem";let x=c.slice(1);for(let b=0;b<x.length;b++){let p=m.insertCell();p.innerHTML=x[b],p.style.paddingLeft=".25rem",p.style.paddingRight=".25rem",L===2||x[b].includes("%")?(p.style.textAlign="right",p.style.paddingRight="1rem"):p.style.textAlign="center"}}let A=document.querySelectorAll("td");for(let c=0;c<A.length;c++)A[c].textContent[0]==="-"&&A[c].classList.add("padThisCell");if(C[s].innerHTML.includes("<em>")){let c=C[s].querySelector("em").textContent,f=e.querySelectorAll("td");for(let y=0;y<f.length;y++)f[y].innerHTML.includes(c)&&(f[y].innerHTML=f[y].innerHTML.replace(c,`<em>${c}</em>`))}o.style.display="none"}if(q.length>0){for(let g=0;g<q.length;g++){let A=q[g].textContent,c=e.insertRow();if(A[1]==="%"){let f=c.insertCell(0);f.innerHTML=A,f.colSpan=100}else{let f=A.slice(1),y=c.insertCell(0);y.innerHTML=f,y.colSpan=100}}let s=q[0].textContent.slice(1),m=e.querySelectorAll("tr");for(let g=0;g<m.length;g++)m[g].innerHTML.includes(s)&&m[g].classList.add("table_first-footnote")}}}function R(){let o=document.querySelector("[gallery='main-image']"),t=document.querySelector("[gallery='list']"),n=document.querySelector("[gallery='info-card']"),i=document.querySelector("[gallery='list-wrp']"),a=document.querySelector("[gallery='desktop']"),e;n.getAttribute("gallery-location")&&(e=Number(n.getAttribute("gallery-location"))-1),t.childElementCount===0?(i.remove(),n.getAttribute("gallery-location")?t.insertBefore(n,t.children[e]):n.insertAdjacentElement("afterend",o)):t.childElementCount===1?(t!=null&&t.querySelectorAll("invisible")&&i.remove(),n.getAttribute("gallery-location")?t.insertBefore(n,t.children[e]):a.insertBefore(o,t.children[1])):t.childElementCount>1&&(t.insertBefore(o,t.children[1]),n.getAttribute("gallery-location")?(t.insertBefore(n,t.children[e]),t.insertBefore(o,t.children[1])):t.insertBefore(n,t.children[3]))}window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{H(),R(),M(),w()});})();
