(this["webpackJsonpstarter-app"]=this["webpackJsonpstarter-app"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(2),r=a.n(c),i=(a(13),a(5)),s=a(3),m=a(4),l=a(7),u=a(6),h=(a(14),a(15),function(){return o.a.createElement("nav",{className:"nav-container"},o.a.createElement("div",{className:"nav-wrapper"},o.a.createElement("a",{href:"#",className:"logo"},"Find-Me")))}),p=function(e){return o.a.createElement("div",{className:"searchBox"},o.a.createElement("form",{className:"searchInput",action:"",onSubmit:e.handleSubmit},o.a.createElement("input",{className:"searchInput-form",type:"text",name:"",placeholder:"Search",onChange:e.handleChange,onSubmit:e.handleSubmit})),o.a.createElement("button",{className:"searchButton",href:"#",onClick:e.handleSubmit},o.a.createElement("i",{className:"material-icons"}," search ")))},v=function(e){return o.a.createElement("div",{className:"movie-container"},o.a.createElement("img",{src:null==e.movie.poster_path?"https://eticketsolutions.com/demo/themes/e-ticket/img/movie.jpg":"https://image.tmdb.org/t/p/w200/".concat(e.movie.poster_path),alt:"movie poster"}),o.a.createElement("div",null,o.a.createElement("p",null," ",e.movie.original_title)))},d=function(e){return o.a.createElement("div",{className:"movie-grid-container"},e.movies.map((function(e,t){return o.a.createElement(v,{key:t,movie:e})})))},f=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).onSubmit=function(t){t.preventDefault(),fetch("".concat(e.api_url,"?api_key=").concat(e.key,"&query=").concat(e.state.term)).then((function(t){return t.json().then((function(t){try{e.setState({movies:Object(i.a)(t.results)})}catch(a){console.log(a)}}))}))},e.onChange=function(t){e.setState({term:t.target.value})},e.api_url="https://api.themoviedb.org/3/search/movie",e.key="b9ebb3701c1c957e4e6d67be378edc8f",e.state={term:"",movies:[]},e}return Object(m.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(h,null),o.a.createElement(p,{handleSubmit:this.onSubmit,handleChange:this.onChange}),o.a.createElement(d,{movies:this.state.movies}))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.73c933a6.chunk.js.map