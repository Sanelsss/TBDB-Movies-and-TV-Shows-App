(this["webpackJsonpreact-movies-app"]=this["webpackJsonpreact-movies-app"]||[]).push([[0],{14:function(n,e,t){},16:function(n,e,t){},17:function(n,e,t){"use strict";t.r(e);var i=t(1),a=t.n(i),c=t(7),r=t.n(c),o=(t(14),t(4)),s=t.n(o),u=t(5),l=t(3),b=Object(i.createContext)(),d=function(n){var e=n.children,t=Object(i.useState)(!0),c=Object(l.a)(t,2),r=c[0],o=c[1],d=Object(i.useState)("TV Shows"),p=Object(l.a)(d,2),h=p[0],m=p[1],x=Object(i.useState)(""),f=Object(l.a)(x,2),w=f[0],j=f[1],v=Object(i.useState)(1),O=Object(l.a)(v,2),g=O[0],y=O[1],k=Object(i.useState)([]),S=Object(l.a)(k,2),C=S[0],M=S[1],T=Object(i.useState)([]),N=Object(l.a)(T,2),L=N[0],E=N[1],P=a.a.useState(null),_=Object(l.a)(P,2),z=_[0],B=_[1],D=Object(i.useState)(""),H=Object(l.a)(D,2),V=H[0],A=H[1],J=function(){var n=Object(u.a)(s.a.mark((function n(){var e,t,i;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=580eb2cbd86f3cc1c8b2fe2780e3e4c4&language=en-US");case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,i=t.results.slice(0,10),E(i),console.log(i);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),U=function(){var n=Object(u.a)(s.a.mark((function n(){var e,t,i;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=".concat("580eb2cbd86f3cc1c8b2fe2780e3e4c4","&language=en-US?limit=10"));case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,i=t.results.slice(0,10),console.log(i.name),M(i);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),W=function(){L.map((function(n){return w.length<3?setTimeout((function(){j("")}),2e3):n.title.toLowerCase().includes(w.toLowerCase())&&w.length>2?E([n]):void 0})),C.map((function(n){return w.length<3?setTimeout((function(){j("")}),2e3):n.name.toLowerCase().includes(w.toLowerCase())&&w.length>2?M([n]):void 0}))};return Object(i.useEffect)((function(){var n=setTimeout((function(){W()}),1e3);return function(){return clearTimeout(n)}}),[L]),Object(i.useEffect)((function(){J(),U()}),[w,g]),a.a.createElement(b.Provider,{value:{filmovi:L,setFilmovi:E,search:w,setSearch:j,activeLink:h,setActiveLink:m,handleSearch:W,currentPage:g,setCurrentPage:y,popularMovies:C,setPopularMovies:M,hiddenMenu:r,setHiddenMenu:o,phone:z,setPhone:B,select:V,setSelect:A}},e)},p=t(2),h=t(0);function m(){var n=Object(p.a)(["\n  width: 100%;\n  max-width: 1300px;\n  margin: 0 auto;\n"]);return m=function(){return n},n}var x=Object(h.a)(m()),f=function(n){var e=n.children;return Object(h.b)("div",{css:x,className:"container"},e)};function w(){var n=Object(p.a)(["\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 22px;\n  margin-right: \n  ;\n  font-weight: 700;\n  cursor: pointer;\n  user-select: none;\n  @media (max-width: 860px) {\n    font-size: 40px;\n  }\n"]);return w=function(){return n},n}var j=Object(h.a)(w()),v=function(n){var e=n.btnText,t=n.btn,a=Object(i.useContext)(b),c=a.activeLink,r=a.setSelect,o=a.setActiveLink,s=a.setHiddenMenu;return Object(h.b)("button",{style:{color:c===e?"#5fc5a3":"#fff"},css:j,onClick:function(){o(e),r(t),s(!0)}},e)};function O(){var n=Object(p.a)(["\n  padding-left: 50px;\n  @media (max-width: 860px) {\n    position: absolute;\n    top: 0;\n    left: 6rem;\n    opacity: 1;\n    min-height: 100vh;\n    background: rgba(0, 0, 0, 0.8);\n    padding-left: 0;\n    padding: 20px 50px;\n    width: 100%;\n    max-width: 340px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    transition: all 800ms ease-in-out;\n    &.hidden {\n      left: -600px;\n      opacity: 0;\n    }\n  }\n"]);return O=function(){return n},n}var g=Object(h.a)(O()),y=function(){var n=Object(i.useContext)(b).hiddenMenu;return Object(h.b)("div",{css:g,className:(n?"hidden":"")+" heroNavMenu"},Object(h.b)(v,{btnText:"TV Shows",btn:"popular"}),Object(h.b)(v,{className:"mx-2",btnText:"Movies",btn:"movies"}))};function k(){var n=Object(p.a)(["\n  height: 40px;\n  min-height: 40px;\n  input {\n    border: none;\n    outline: none;\n    border-radius: 50px;\n    border: 1px solid #2c2f39;\n    background: transparent;\n    padding: 10px 16px;\n    width: 860px;\n    color: #5fc5a3;\n    &::placeholder {\n      color: #5fc5a3;\n      letter-spacing: 1px;\n    }\n  }\n  @media (max-width: 860px) {\n    input {\n      width: 220px;\n    }\n  }\n"]);return k=function(){return n},n}var S=Object(h.a)(k()),C=function(){var n=Object(i.useContext)(b),e=n.search,t=n.setSearch,a=n.handleSearch;return Object(h.b)("form",{css:S,onSubmit:a},Object(h.b)("input",{type:"text",placeholder:"Search ...",value:e,onChange:function(n){return t(n.target.value)}}))};function M(){var n=Object(p.a)(["\n  width: 100%;\n  min-height: 80px;\n  padding: 20px 0;\n  background: #212229;\n  .container {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    .wrapper {\n      display: flex;\n      align-items: center;\n    }\n    #burgerMenu {\n      color: #f9a5ff;\n      cursor: pointer;\n      display: none;\n    }\n  }\n  @media (max-width: 860px) {\n    .container {\n      #burgerMenu {\n        display: block;\n      }\n    }\n  }\n  @media (max-width: 1365px) {\n    .container {\n      max-width: 90%;\n    }\n  }\n"]);return M=function(){return n},n}var T=Object(h.a)(M()),N=function(){var n=Object(i.useContext)(b),e=n.hiddenMenu,t=n.setHiddenMenu;return Object(h.b)("nav",{css:T},Object(h.b)(f,null,Object(h.b)("div",{className:"wrapper"},Object(h.b)(y,null)),Object(h.b)(C,null),Object(h.b)("i",{onClick:function(){return t(!e)},id:"burgerMenu",className:e?"fas fa-bars":"fas fa-times"})))};function L(){var n=Object(p.a)(["\nss{\n  color: #5fc5a3;\n \n}\n  width: 100%;\n  .container {\n    &:nth-child(1) {\n      height: 80vh;\n      overflow-y: scroll;\n      display: flex;\n      justify-content: space-between;\n      flex-wrap: wrap;\n      &::-webkit-scrollbar {\n        width: 0;\n      }\n      .error {\n        font-size: 38px;\n        color: red;\n        height: 32px;\n      }\n    }\n    img {\n      width: 100%;\n      max-width: 240px;\n      height: 360px;\n      margin: 10px 0;\n    }\n  }\n  @media (max-width: 600px) {\n    .container {\n      img {\n        max-width: 100%;\n        height: 500px;\n      }\n    }\n  }\n  @media (min-width: 601px) and (max-width: 854px) {\n    .container {\n      img {\n        max-width: 48%;\n      }\n    }\n  }\n  @media (min-width: 855px) and (max-width: 1144px) {\n    .container {\n      img {\n        max-width: 31%;\n      }\n    }\n  }\n  @media (min-width: 1145px) and (max-width: 1365px) {\n    .container {\n      img {\n        max-width: 23.4%;\n      }\n    }\n  }\n"]);return L=function(){return n},n}var E=Object(h.a)(L()),P=function(){var n=Object(i.useContext)(b),e=n.filmovi,t=n.setPhone;return Object(h.b)("div",{css:E,className:"movies"},Object(h.b)(f,null,e.map((function(n,e){return Object(h.b)("p",{onClick:function(){return t(n)}},Object(h.b)("img",{key:e,src:"https://image.tmdb.org/t/p/w400/".concat(n.poster_path),alt:"poster"}),Object(h.b)("div",null,Object(h.b)(v,{btnText:"Details",btn:"movies"})))}))))};function _(){var n=Object(p.a)(["\n  width: 100%;\n  .container {\n    &:nth-child(1) {\n      height: 80vh;\n      overflow-y: scroll;\n      display: flex;\n      justify-content: space-between;\n      flex-wrap: wrap;\n      &::-webkit-scrollbar {\n        width: 0;\n      }\n      .error {\n        font-size: 38px;\n        color: red;\n        height: 32px;\n      }\n    }\n    img {\n      width: 100%;\n      max-width: 240px;\n      height: 360px;\n      margin: 10px 0;\n    }\n  }\n  @media (max-width: 600px) {\n    .container {\n      img {\n        max-width: 100%;\n        height: 500px;\n      }\n    }\n  }\n  @media (min-width: 601px) and (max-width: 854px) {\n    .container {\n      img {\n        max-width: 48%;\n      }\n    }\n  }\n  @media (min-width: 855px) and (max-width: 1144px) {\n    .container {\n      img {\n        max-width: 31%;\n      }\n    }\n  }\n  @media (min-width: 1145px) and (max-width: 1365px) {\n    .container {\n      img {\n        max-width: 23.4%;\n      }\n    }\n  }\n"]);return _=function(){return n},n}var z=Object(h.a)(_()),B=function(){var n=Object(i.useContext)(b),e=n.popularMovies,t=n.setPhone;return Object(h.b)("div",{css:z,className:"popularMovies"},Object(h.b)(f,null,e&&e.map((function(n,e){return Object(h.b)("p",{onClick:function(){return t(n)}},Object(h.b)("img",{key:e,src:"https://image.tmdb.org/t/p/w400/".concat(n.poster_path),alt:"poster"}),Object(h.b)("div",null,Object(h.b)(v,{className:"mx-4",btnText:"Details",btn:"popular"})))}))))};function D(){var n=Object(p.a)(["\n  width: 100%;\n  .s{\n    color: red;\n\n  }\n  .container {\n    &:nth-child(1) {\n      height: 81vh;\n      overflow-y: scroll;\n      display: flex;\n      justify-content: space-between;\n      flex-wrap: wrap;\n      &::-webkit-scrollbar {\n        width: 0;\n      }\n      .error {\n        font-size: 38px;\n        color: red;\n        height: 32px;\n      }\n    }\n    img {\n      width: 100%;\n      max-width: 240px;\n      height: 360px;\n      margin: 10px 0;\n    }\n  }\n  @media (max-width: 600px) {\n    .container {\n      img {\n        max-width: 100%;\n        height: 500px;\n      }\n    }\n  }\n  @media (min-width: 601px) and (max-width: 854px) {\n    .container {\n      img {\n        max-width: 48%;\n      }\n    }\n  }\n  @media (min-width: 855px) and (max-width: 1144px) {\n    .container {\n      img {\n        max-width: 31%;\n      }\n    }\n  }\n  @media (min-width: 1145px) and (max-width: 1365px) {\n    .container {\n      img {\n        max-width: 23.4%;\n      }\n    }\n  }\n"]);return D=function(){return n},n}var H=Object(h.a)(D()),V=function(){var n=Object(i.useContext)(b),e=n.select,t=n.phone;return Object(h.b)("div",{css:H},Object(h.b)(v,{className:"s",btnText:"Back",btn:e}),Object(h.b)(f,null,Object(h.b)("p",null,Object(h.b)("img",{src:"https://image.tmdb.org/t/p/w400/".concat(t.poster_path),alt:"poster"}),Object(h.b)("h4",null,t.title),Object(h.b)("h4",null,t.overview))))};function A(){var n=Object(p.a)(["\n  width: 100%;\n  min-height: calc(100vh - 80px);\n  display: flex;\n  > .container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n  }\n  @media (max-width: 1365px) {\n    > .container {\n      max-width: 90%;\n    }\n  }\n"]);return A=function(){return n},n}var J=Object(h.a)(A()),U=function(){var n=Object(i.useContext)(b),e=n.select,t=n.activeLink;return Object(h.b)("div",{css:J,className:"output"},"Movies"===t&&Object(h.b)(f,null,Object(h.b)(P,null)),"TV Shows"===t&&Object(h.b)(f,null,Object(h.b)(B,null)),"Back"===t&&("movies"===e?Object(h.b)(f,null,Object(h.b)(P,null)):Object(h.b)(f,null,Object(h.b)(B,null))),"Details"===t&&Object(h.b)(f,null,Object(h.b)(V,null)))};function W(){var n=Object(p.a)(["\n  width: 100%;\n  min-height: 100vh;\n  background: #1b1c22;\n"]);return W=function(){return n},n}var F=Object(h.a)(W()),I=function(){return Object(h.b)("section",{css:F,className:"hero"},Object(h.b)(N,null),Object(h.b)(U,null))},$=(t(16),function(){return a.a.createElement(d,null,a.a.createElement(I,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},9:function(n,e,t){n.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.50f10310.chunk.js.map