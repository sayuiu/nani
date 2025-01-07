(() => {
  
    !function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).EmblaCarousel=t()}(this,(function(){"use strict";function n(n){return"number"==typeof n}function t(n){return"string"==typeof n}function e(n){return"boolean"==typeof n}function r(n){return"[object Object]"===Object.prototype.toString.call(n)}function o(n){return"undefined"!=typeof MouseEvent&&n instanceof MouseEvent}function i(n){return Math.abs(n)}function c(n){return Math.sign(n)}function u(n,t){return i(n-t)}function s(n){return l(n).map(Number)}function a(n){return n[d(n)]}function d(n){return Math.max(0,n.length-1)}function l(n){return Object.keys(n)}function f(n,t){return[n,t].reduce(((n,t)=>(l(t).forEach((e=>{const o=n[e],i=t[e],c=r(o)&&r(i);n[e]=c?f(o,i):i})),n)),{})}function p(t,e){const r={start:function(){return 0},center:function(n){return o(n)/2},end:o};function o(n){return e-n}return{measure:function(o){return n(t)?e*Number(t):r[t](o)}}}function m(n,t){const e=i(n-t);function r(t){return t<n}function o(n){return n>t}function c(n){return r(n)||o(n)}return{length:e,max:t,min:n,constrain:function(e){return c(e)?r(e)?n:t:e},reachedAny:c,reachedMax:o,reachedMin:r,removeOffset:function(n){return e?n-e*Math.ceil((n-t)/e):n}}}function g(n,t,e){const{min:r,constrain:o}=m(0,n),c=n+1;let u=s(t);function s(n){return e?i((c+n)%c):o(n)}function a(){return u}function d(n){return u=s(n),l}const l={add:function(n){return d(a()+n)},clone:function(){return g(n,a(),e)},get:a,set:d,min:r,max:n};return l}function h(){let n=[];const t={add:function(e,r,o,i={passive:!0}){return e.addEventListener(r,o,i),n.push((()=>e.removeEventListener(r,o,i))),t},clear:function(){n=n.filter((n=>n()))}};return t}function x(n,t,r,s,a,d,l,f,p,g,x,y,v,b,S,w,E){const{cross:D}=n,M=["INPUT","SELECT","TEXTAREA"],A={passive:!1},I=h(),O=h(),P=m(50,225).constrain(v.measure(20)),T={mouse:300,touch:400},z={mouse:500,touch:600},B=b?43:25;let L=!1,k=0,H=0,F=!1,N=!1,C=!1,R=!1;function V(n){const e=a.readPoint(n),r=a.readPoint(n,D),o=u(e,k),i=u(r,H);if(!N&&!R){if(!n.cancelable)return j(n);if(N=o>i,!N)return j(n)}const c=a.pointerMove(n);o>S&&(C=!0),p.useFriction(.3).useDuration(1),l.start(),s.add(t.apply(c)),n.preventDefault()}function j(n){const e=g.byDistance(0,!1).index!==x.get(),r=a.pointerUp(n)*(b?z:T)[R?"mouse":"touch"],o=function(n,t){const e=x.clone().add(-1*c(n)),r=g.byDistance(n,!b).distance;return b||i(n)<P?r:w&&t?.5*r:g.byIndex(e.get(),0).distance}(t.apply(r),e),s=function(n,t){if(0===n||0===t)return 0;if(i(n)<=i(t))return 0;const e=u(i(n),i(t));return i(e/n)}(r,o),d=B-10*s,l=E+s/50;N=!1,F=!1,O.clear(),p.useDuration(d).useFriction(l),f.distance(o,!b),R=!1,y.emit("pointerUp")}function U(n){C&&(n.stopPropagation(),n.preventDefault())}return{init:function(n,t){if(!t)return;function i(i){(e(t)||t(n,i))&&function(n){const t=o(n);if(R=t,t&&0!==n.button)return;if(function(n){const t=n.nodeName||"";return M.includes(t)}(n.target))return;C=b&&t&&!n.buttons&&L,L=u(s.get(),d.get())>=2,F=!0,a.pointerDown(n),p.useFriction(0).useDuration(0),s.set(d),function(){const n=R?document:r;O.add(n,"touchmove",V,A).add(n,"touchend",j).add(n,"mousemove",V,A).add(n,"mouseup",j)}(),k=a.readPoint(n),H=a.readPoint(n,D),y.emit("pointerDown")}(i)}const c=r;I.add(c,"dragstart",(n=>n.preventDefault()),A).add(c,"touchmove",(()=>{}),A).add(c,"touchend",(()=>{})).add(c,"touchstart",i).add(c,"mousedown",i).add(c,"touchcancel",j).add(c,"contextmenu",j).add(c,"click",U,!0)},pointerDown:function(){return F},destroy:function(){I.clear(),O.clear()}}}function y(n){let t,e;function r(n){return n.timeStamp}function c(t,e){const r="client"+("x"===(e||n.scroll)?"X":"Y");return(o(t)?t:t.touches[0])[r]}return{pointerDown:function(n){return t=n,e=n,c(n)},pointerMove:function(n){const o=c(n)-c(e),i=r(n)-r(t)>170;return e=n,i&&(t=n),o},pointerUp:function(n){if(!t||!e)return 0;const o=c(e)-c(t),u=r(n)-r(t),s=r(n)-r(e)>170,a=o/u;return u&&!s&&i(a)>.1?a:0},readPoint:c}}function v(n,t,r,o){let i,c,u=[],s=!1;function a(n){return r.measureSize(n.getBoundingClientRect())}return{init:function(r,d){if(!d)return;c=a(n),u=t.map(a),i=new ResizeObserver((i=>{s||(e(d)||d(r,i))&&function(e){for(const i of e){const e=i.target===n,s=t.indexOf(i.target);if((e?c:u[s])!==a(e?n:t[s])){r.reInit(),o.emit("resize");break}}}(i)})),[n].concat(t).forEach((n=>i.observe(n)))},destroy:function(){i&&i.disconnect(),s=!0}}}function b(n,t,e,r,o){const c=o.measure(10),u=o.measure(50),s=m(.1,.99);let a=!1;return{constrain:function(o){if(a||!n.reachedAny(e.get())||!n.reachedAny(t.get()))return;const d=n.reachedMin(t.get())?"min":"max",l=i(n[d]-t.get()),f=e.get()-t.get(),p=s.constrain(l/u);e.subtract(f*p),!o&&i(f)<c&&(e.set(n.constrain(e.get())),r.useDuration(25).useBaseFriction())},toggleActive:function(n){a=!n}}}function S(n,t,e,r){const o=m(-t+n,e[0]),i=e.map(o.constrain);return{snapsContained:function(){if(t<=n)return[o.max];if("keepSnaps"===r)return i;const{min:e,max:c}=function(){const n=i[0],t=a(i),e=i.lastIndexOf(n),r=i.indexOf(t)+1;return m(e,r)}();return i.slice(e,c)}()}}function w(n,t,e,r){const o=t.min+.1,i=t.max+.1,{reachedMin:c,reachedMax:u}=m(o,i);return{loop:function(t){if(!function(n){return 1===n?u(e.get()):-1===n&&c(e.get())}(t))return;const o=n*(-1*t);r.forEach((n=>n.add(o)))}}}function E(n){const{max:t,length:e}=n;return{get:function(n){return(n-t)/-e}}}function D(n,t,e,r,o){const{reachedAny:u,removeOffset:s,constrain:a}=r;function d(n){return n.concat().sort(((n,t)=>i(n)-i(t)))[0]}function l(t,r){const o=[t,t+e,t-e];if(!n)return o[0];if(!r)return d(o);return d(o.filter((n=>c(n)===r)))}return{byDistance:function(e,r){const c=o.get()+e,{index:d,distance:f}=function(e){const r=n?s(e):a(e),o=t.map((n=>n-r)).map((n=>l(n,0))).map(((n,t)=>({diff:n,index:t}))).sort(((n,t)=>i(n.diff)-i(t.diff))),{index:c}=o[0];return{index:c,distance:r}}(c),p=!n&&u(c);return!r||p?{index:d,distance:e}:{index:d,distance:e+l(t[d]-f,0)}},byIndex:function(n,e){return{index:n,distance:l(t[n]-o.get(),e)}},shortcut:l}}function M(t){let e=t;function r(t){return n(t)?t:t.get()}return{get:function(){return e},set:function(n){e=r(n)},add:function(n){e+=r(n)},subtract:function(n){e-=r(n)}}}function A(n,t,e){const r="x"===n.scroll?function(n){return`translate3d(${n}px,0px,0px)`}:function(n){return`translate3d(0px,${n}px,0px)`},o=e.style;let i=!1;return{clear:function(){i||(o.transform="",e.getAttribute("style")||e.removeAttribute("style"))},to:function(n){i||(o.transform=r(t.apply(n)))},toggleActive:function(n){i=!n}}}function I(n,t,e,r,o,i,c,u,a){const d=s(o),l=s(o).reverse(),f=function(){const n=i[0]-1;return g(m(l,n),"end")}().concat(function(){const n=e-i[0]-1;return g(m(d,n),"start")}());function p(n,t){return n.reduce(((n,t)=>n-o[t]),t)}function m(n,t){return n.reduce(((n,e)=>p(n,t)>0?n.concat([e]):n),[])}function g(e,o){const i="start"===o,s=i?-r:r,d=c.findSlideBounds([s]);return e.map((e=>{const o=i?0:-r,c=i?r:0,s=d.filter((n=>n.index===e))[0][i?"end":"start"],l=M(-1),f=A(n,t,a[e]);return{index:e,location:l,translate:f,target:()=>u.get()>s?o:c}}))}return{canLoop:function(){return f.every((({index:n})=>p(d.filter((t=>t!==n)),e)<=.1))},clear:function(){f.forEach((n=>n.translate.clear()))},loop:function(){f.forEach((n=>{const{target:t,translate:e,location:r}=n,o=t();o!==r.get()&&(e.to(o),r.set(o))}))},loopPoints:f}}function O(n,t){let r,o=!1;return{init:function(i,c){c&&(r=new MutationObserver((n=>{o||(e(c)||c(i,n))&&function(n){for(const e of n)if("childList"===e.type){i.reInit(),t.emit("slidesChanged");break}}(n)})),r.observe(n,{childList:!0}))},destroy:function(){r&&r.disconnect(),o=!0}}}function P(n,t,e,r,o,i,c){const{removeOffset:u,constrain:s}=o,a=i?[0,t,-t]:[0],d=l(a,c);function l(t,o){const i=t||a,c=function(n){const t=n||0;return e.map((n=>m(.5,n-.5).constrain(n*t)))}(o);return i.reduce(((t,o)=>{const i=r.map(((t,r)=>({start:t-e[r]+c[r]+o,end:t+n-c[r]+o,index:r})));return t.concat(i)}),[])}return{check:function(n,t){const e=i?u(n):s(n);return(t||d).reduce(((n,t)=>{const{index:r,start:o,end:i}=t;return!n.includes(r)&&(o<e&&i>e)?n.concat([r]):n}),[])},findSlideBounds:l}}function T(t,e,r){const o=n(r);return{groupSlides:function(n){return o?function(n,t){return s(n).filter((n=>n%t==0)).map((e=>n.slice(e,e+t)))}(n,r):function(n){return s(n).reduce(((n,r)=>{const o=e.slice(a(n),r+1).reduce(((n,t)=>n+t),0);return!r||o>t?n.concat(r):n}),[]).map(((t,e,r)=>n.slice(t,r[e+1])))}(n)}}}function z(n,t,e,r,o){const{align:u,axis:l,direction:f,startIndex:z,inViewThreshold:B,loop:L,duration:k,dragFree:H,dragThreshold:F,slidesToScroll:N,skipSnaps:C,containScroll:R}=r,V=t.getBoundingClientRect(),j=e.map((n=>n.getBoundingClientRect())),U=function(n){const t="rtl"===n?-1:1;return{apply:function(n){return n*t}}}(f),q=function(n,t){const e="y"===n?"y":"x";return{scroll:e,cross:"y"===n?"x":"y",startEdge:"y"===e?"top":"rtl"===t?"right":"left",endEdge:"y"===e?"bottom":"rtl"===t?"left":"right",measureSize:function(n){const{width:t,height:r}=n;return"x"===e?t:r}}}(l,f),$=q.measureSize(V),G=function(n){return{measure:function(t){return n*(t/100)}}}($),Q=p(u,$),W=!L&&!!R,X=L||!!R,{slideSizes:Y,slideSizesWithGaps:J}=function(n,t,e,r,o){const{measureSize:c,startEdge:u,endEdge:s}=n,l=e[0]&&o,f=function(){if(!l)return 0;const n=e[0];return i(t[u]-n[u])}(),p=function(){if(!l)return 0;const n=window.getComputedStyle(a(r));return parseFloat(n.getPropertyValue(`margin-${s}`))}(),m=e.map(c),g=e.map(((n,t,e)=>{const r=!t,o=t===d(e);return r?m[t]+f:o?m[t]+p:e[t+1][u]-n[u]})).map(i);return{slideSizes:m,slideSizesWithGaps:g}}(q,V,j,e,X),K=T($,J,N),{snaps:Z,snapsAligned:_}=function(n,t,e,r,o,c,u){const{startEdge:s,endEdge:l}=n,{groupSlides:f}=c,p=f(r).map((n=>a(n)[l]-n[0][s])).map(i).map(t.measure),m=r.map((n=>e[s]-n[s])).map((n=>-i(n))),g=function(){const n=a(m)-a(o);return f(m).map((n=>n[0])).map(((t,e,r)=>{const o=!e,i=e===d(r);return u&&o?0:u&&i?n:t+p[e]}))}();return{snaps:m,snapsAligned:g}}(q,Q,V,j,J,K,W),nn=-a(Z)+a(J),{snapsContained:tn}=S($,nn,_,R),en=W?tn:_,{limit:rn}=function(n,t,e){return{limit:function(){const r=t[0],o=a(t);return m(e?r-n:o,r)}()}}(nn,en,L),on=g(d(en),z,L),cn=on.clone(),un=s(e),sn=function(n,t){const e=h(),r=1e3/60;let o,c=null,u=0,s=0;function a(n,t){return()=>{n===!!s&&t()}}function d(e){if(!c)return c=e,l();const a=e-c;for(c=e,u+=a;u>=r;)n(o),u-=r;t(o,i(u/r)),s&&l()}function l(){s=window.requestAnimationFrame(d)}function f(){window.cancelAnimationFrame(s),c=null,u=0,s=0}return{init:function(n){o=n,e.add(document,"visibilitychange",(()=>{document.hidden&&(c=null,u=0)}))},destroy:function(){f(),e.clear()},start:a(!1,l),stop:a(!0,f)}}((({dragHandler:n,scrollBody:t,scrollBounds:e,scrollLooper:r,slideLooper:o,eventHandler:i,animation:c})=>{const u=n.pointerDown();L||e.constrain(u);const s=t.seek().settled();s&&!u&&(c.stop(),i.emit("settle")),s||i.emit("scroll"),L&&(r.loop(t.direction()),o.loop())}),(({scrollBody:n,translate:t,location:e},r)=>{const o=n.velocity(),i=e.get()-o+o*r;t.to(i)})),an=en[on.get()],dn=M(an),ln=M(an),fn=function(n,t,e,r){let o=!0,u=0,s=0,a=e,d=r;function l(n){return a=n,p}function f(n){return d=n,p}const p={direction:function(){return s},seek:function(){const e=t.get()-n.get();return d&&a?(u+=e/a,u*=d,n.add(u)):(u=0,n.set(t)),s=c(u||e),o=i(e)<.001,p},settled:function(){return o&&n.set(t),o},useBaseFriction:function(){return f(r)},useBaseDuration:function(){return l(e)},useFriction:f,useDuration:l,velocity:function(){return u}};return p}(dn,ln,k,.68),pn=D(L,en,nn,rn,ln),mn=function(n,t,e,r,o,i){function c(r){const c=r.distance,u=r.index!==t.get();c&&(n.start(),o.add(c)),u&&(e.set(t.get()),t.set(r.index),i.emit("select"))}return{distance:function(n,t){c(r.byDistance(n,t))},index:function(n,e){const o=t.clone().set(n);c(r.byIndex(o.get(),e))}}}(sn,on,cn,pn,ln,o),gn=P($,nn,Y,Z,rn,L,B);return{eventHandler:o,containerRect:V,slideRects:j,animation:sn,axis:q,direction:U,dragHandler:x(q,U,n,ln,y(q),dn,sn,mn,fn,pn,on,o,G,H,F,C,.68),eventStore:h(),percentOfView:G,index:on,indexPrevious:cn,limit:rn,location:dn,options:r,resizeHandler:v(t,e,q,o),scrollBody:fn,scrollBounds:b(rn,dn,ln,fn,G),scrollLooper:w(nn,rn,dn,[dn,ln]),scrollProgress:E(rn),scrollSnaps:en,scrollTarget:pn,scrollTo:mn,slideLooper:I(q,U,$,nn,J,en,gn,dn,e),slidesHandler:O(t,o),slidesInView:gn,slideIndexes:un,slidesToScroll:K,target:ln,translate:A(q,U,t)}}const B={align:"center",axis:"x",container:null,slides:null,containScroll:null,direction:"ltr",slidesToScroll:1,breakpoints:{},dragFree:!1,dragThreshold:10,inViewThreshold:0,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function L(){function n(n,t){return f(n,t||{})}const t={mergeOptions:n,optionsAtMedia:function(t){const e=t.breakpoints||{},r=l(e).filter((n=>window.matchMedia(n).matches)).map((n=>e[n])).reduce(((t,e)=>n(t,e)),{});return n(t,r)},optionsMediaQueries:function(n){return n.map((n=>l(n.breakpoints||{}))).reduce(((n,t)=>n.concat(t)),[]).map(window.matchMedia)}};return t}function k(n,e,r){const o=h(),i=function(){const n=L();let t=[];return{init:function(e,r){return t=e.filter((({options:t})=>!1!==n.optionsAtMedia(t).active)),t.forEach((t=>t.init(r,n))),e.reduce(((n,t)=>Object.assign(n,{[t.name]:t})),{})},destroy:function(){t=t.filter((n=>n.destroy()))}}}(),c=function(){const n={};let t;function e(t){return n[t]||[]}const r={init:function(n){t=n},emit:function(n){return e(n).forEach((e=>e(t,n))),r},off:function(t,o){return n[t]=e(t).filter((n=>n!==o)),r},on:function(t,o){return n[t]=e(t).concat([o]),r}};return r}(),{mergeOptions:u,optionsAtMedia:s,optionsMediaQueries:a}=L(),{on:d,off:l,emit:f}=c,p=D;let m,g,x,y,v=!1,b=u(B,k.globalOptions),S=u(b),w=[];function E(e,r){if(!v){if(b=u(b,e),S=s(b),function(){const{container:e,slides:r}=S,o=t(e)?n.querySelector(e):e;x=o||n.children[0];const i=t(r)?x.querySelectorAll(r):r;y=[].slice.call(i||x.children)}(),m=z(n,x,y,S,c),!S.active)return M();if(m.translate.to(m.location.get()),w=r||w,g=i.init(w,P),a([b,...w.map((({options:n})=>n))]).forEach((n=>o.add(n,"change",D))),m.animation.init(m),m.eventHandler.init(P),m.resizeHandler.init(P,S.watchResize),m.slidesHandler.init(P,S.watchSlides),S.loop){if(!m.slideLooper.canLoop())return M(),E({loop:!1},r),void(b=u(b,{loop:!0}));m.slideLooper.loop()}x.offsetParent&&y.length&&m.dragHandler.init(P,S.watchDrag)}}function D(n,t){const e=O();M(),E(u({startIndex:e},n),t),c.emit("reInit")}function M(){m.dragHandler.destroy(),m.animation.destroy(),m.eventStore.clear(),m.translate.clear(),m.slideLooper.clear(),m.resizeHandler.destroy(),m.slidesHandler.destroy(),i.destroy(),o.clear()}function A(n){const t=m[n?"target":"location"].get(),e=S.loop?"removeOffset":"constrain";return m.slidesInView.check(m.limit[e](t))}function I(n,t,e){S.active&&!v&&(m.scrollBody.useBaseFriction().useDuration(t?0:S.duration),m.scrollTo.index(n,e||0))}function O(){return m.index.get()}const P={canScrollNext:function(){return m.index.clone().add(1).get()!==O()},canScrollPrev:function(){return m.index.clone().add(-1).get()!==O()},containerNode:function(){return x},internalEngine:function(){return m},destroy:function(){v||(v=!0,o.clear(),M(),c.emit("destroy"))},off:l,on:d,emit:f,plugins:function(){return g},previousScrollSnap:function(){return m.indexPrevious.get()},reInit:p,rootNode:function(){return n},scrollNext:function(n){I(m.index.clone().add(1).get(),!0===n,-1)},scrollPrev:function(n){I(m.index.clone().add(-1).get(),!0===n,1)},scrollProgress:function(){return m.scrollProgress.get(m.location.get())},scrollSnapList:function(){return m.scrollSnaps.map(m.scrollProgress.get)},scrollTo:I,selectedScrollSnap:O,slideNodes:function(){return y},slidesInView:A,slidesNotInView:function(n){const t=A(n);return m.slideIndexes.filter((n=>!t.includes(n)))}};return E(e,r),setTimeout((()=>c.emit("init")),0),P}return k.globalOptions=void 0,k}));
    
    const mbls = () => {
    
        // header height
        function updateHeaderHeight() {
            const headerHeight = document.querySelector('header').offsetHeight;
            const cssVariable = `--header: ${headerHeight}px;`;
            document.documentElement.style.cssText += cssVariable;
        }	  
        window.addEventListener('load', updateHeaderHeight);
        window.addEventListener('resize', updateHeaderHeight);
        
        // dark
      const schemas = document.querySelectorAll(".btn-mode");
    
      function scheme () {
        const darkModeMediaQuery = window.matchMedia(
          "(prefers-color-scheme: dark)"
        );
        const isSystemDarkMode = darkModeMediaQuery.matches;
        const isDarkMode = document.documentElement.classList.toggle("dark");
      
        if (isDarkMode === isSystemDarkMode) {
          delete window.localStorage.isDarkMode;
        } else {
          window.localStorage.isDarkMode = isDarkMode;
        }
      }
      
        if (schemas) {
            schemas.forEach((schema) => schema.addEventListener("click", scheme));
        }
    
        // toggle box
        function toggleBox(event) {
            event.preventDefault();
            const targetId = this.getAttribute("data-target");
            const target = document.getElementById(targetId);
            const expanded = this.getAttribute("aria-expanded") === "true";
            this.setAttribute("aria-expanded", !expanded);
            target.setAttribute("aria-hidden", expanded);
            target.classList.toggle("show");
            this.classList.toggle("on");
            if (this.classList.contains("btn-viewport")) {
                document.documentElement.classList.toggle("overflow-hidden");
            }
        }	
        Array.from(document.querySelectorAll(".btn-toggle")).forEach((button) => {
            button.addEventListener("click", toggleBox);
        });
        function handleEscapeKey(event) {
            if (event.key === "Escape") {
                const btnViewport = document.querySelector(".btn-toggle.btn-viewport.on");
                if (btnViewport) {
                    toggleBox.call(btnViewport, event);
                }
            }
        }	
        document.addEventListener("keydown", handleEscapeKey);
    
        // modal
        var openModalButtons = document.getElementsByClassName("btn-modal");
        var modals = document.getElementsByClassName("modal");
        var closeModalButtons = document.getElementsByClassName("btn-modal-close");
        function openModal(modal) {
            modal.classList.add("show");
            document.documentElement.classList.add("overflow-hidden");
        }
        function closeModal(modal) {
            modal.classList.remove("show");
            document.documentElement.classList.remove("overflow-hidden");
        }
        for (var i = 0; i < openModalButtons.length; i++) {
            openModalButtons[i].addEventListener("click", function () {
                var modalId = this.getAttribute("data-modal");
                var modal = document.getElementById(modalId);
                openModal(modal);
            });
        }
        for (var i = 0; i < closeModalButtons.length; i++) {
            closeModalButtons[i].addEventListener("click", function () {
                var modal = this.closest(".modal");
                closeModal(modal);
            });
        }
        window.addEventListener("click", function (event) {
            for (var i = 0; i < modals.length; i++) {
                var modalContent = modals[i].querySelector(".modal-content");
                if (event.target == modalContent) {
                    return;
                }
                if (event.target == modals[i]) {
                    closeModal(modals[i]);
                }
            }
        });
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                for (var i = 0; i < modals.length; i++) {
                    if (modals[i].classList.contains("show")) {
                        closeModal(modals[i]);
                    }
                }
            }
        });
    
        // embla
        const setupPrevNextBtns = (prevBtn, nextBtn, embla) => {
            if (prevBtn) {
                prevBtn.addEventListener('click', embla.scrollPrev, false);
            }
            if (nextBtn) {
                nextBtn.addEventListener('click', embla.scrollNext, false);
            }
        };	
        const disablePrevAndNextBtns = (prevBtn, nextBtn, embla) => {
            return () => {
                if (embla.canScrollPrev()) prevBtn.removeAttribute('disabled');
                else prevBtn.setAttribute('disabled', 'disabled');
        
                if (embla.canScrollNext()) nextBtn.removeAttribute('disabled');
                else nextBtn.setAttribute('disabled', 'disabled');
            };
        };	
        const setupDotBtns = (dotsArray, embla) => {
            dotsArray.forEach((dotNode, i) => {
                dotNode.classList.add('embla__dot');
                dotNode.setAttribute('aria-label', 'dot button');
                dotNode.addEventListener('click', () => embla.scrollTo(i), false);
            });
        };	
        const generateDotBtns = (dots, embla) => {
            const scrollSnaps = embla.scrollSnapList();
            const dotsFrag = document.createDocumentFragment();
            const dotsArray = scrollSnaps.map(() => document.createElement('button'));
            if (dots) {
                dotsArray.forEach((dotNode) => dotsFrag.appendChild(dotNode));
                dots.appendChild(dotsFrag);
            }
            return dotsArray;
        };	
        const selectDotBtn = (dotsArray, embla) => () => {
            const previous = embla.previousScrollSnap();
            const selected = embla.selectedScrollSnap();
            dotsArray[previous].classList.remove('is-selected');
            dotsArray[selected].classList.add('is-selected');
        };	
        const setupEmbla = (emblaNode, options) => {
            const viewPort = emblaNode.querySelector('.embla__viewport');
            const prevBtn = emblaNode.querySelector('.embla__prev');
            const nextBtn = emblaNode.querySelector('.embla__next');
            const dots = emblaNode.querySelector('.embla__dots');
            const embla = EmblaCarousel(viewPort, options);
            const dotsArray = generateDotBtns(dots, embla);
            const setSelectedDotBtn = selectDotBtn(dotsArray, embla);
            setupPrevNextBtns(prevBtn, nextBtn, embla);
            setupDotBtns(dotsArray, embla);
            embla.on('select', setSelectedDotBtn);
            embla.on('select', disablePrevAndNextBtns);
            embla.on('init', setSelectedDotBtn);
            embla.on('init', disablePrevAndNextBtns);
            if (prevBtn && nextBtn) {
                setupPrevNextBtns(prevBtn, nextBtn, embla);
                embla.on('init', disablePrevAndNextBtns(prevBtn, nextBtn, embla));
                embla.on('select', disablePrevAndNextBtns(prevBtn, nextBtn, embla));
            }
        };	
        const options = {
            containScroll: 'trimSnaps',
            skipSnaps: false,
            loop: false
            // direction: 'rtl',
        };	
        const emblaNodes = [].slice.call(document.querySelectorAll('.embla'));
        emblaNodes.map((emblaNode) => {
            setupEmbla(emblaNode, options);
        });
        
    
    };
    mbls()
    
    })();