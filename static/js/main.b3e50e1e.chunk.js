(this["webpackJsonpstarter-app"]=this["webpackJsonpstarter-app"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(3),r=a.n(c),i=(a(13),a(1)),s=a(4),l=a(5),m=a(7),u=a(6),h=(a(14),a(15),function(){return o.a.createElement("nav",{className:"nav-container"},o.a.createElement("div",{className:"nav-wrapper"},o.a.createElement("a",{href:"#",className:"logo"},"Find-Me")))}),p=function(e){return o.a.createElement("div",{className:"searchBox"},o.a.createElement("form",{className:"searchInput",action:"",onSubmit:e.handleSubmit},o.a.createElement("input",{className:"searchInput-form",type:"text",name:"",placeholder:"Search",onChange:e.handleChange,onSubmit:e.handleSubmit})),o.a.createElement("button",{className:"searchButton",href:"#",onClick:e.handleSubmit},o.a.createElement("i",{className:"material-icons"}," search ")))},v=function(e){return o.a.createElement("div",{className:"movie-container"},o.a.createElement("img",{src:null==e.movie.poster_path?"https://eticketsolutions.com/demo/themes/e-ticket/img/movie.jpg":"https://image.tmdb.org/t/p/w200/".concat(e.movie.poster_path),alt:"movie poster"}),o.a.createElement("div",null,o.a.createElement("p",null," ",e.movie.original_title)))},g=function(e){return o.a.createElement("div",{className:"movie-grid-container"},e.movies.map((function(e,t){return o.a.createElement(v,{key:t,movie:e})})))},f=function(e){for(var t=[],a=function(a){t.push(o.a.createElement("li",{key:a,onClick:function(){return e.onPageChange(a)}},e.currPage===a?o.a.createElement("a",{className:"active",href:"#"},a):o.a.createElement("a",{href:"#"}," ",a," ")))},n=1;n<=e.pages+1;n++)a(n);return console.log(t),o.a.createElement("div",{className:"pagecontainer"},o.a.createElement("ul",{className:"pagination"},t))},d=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).onSubmit=function(t){t.preventDefault(),fetch("".concat(e.api_url,"?api_key=").concat(e.key,"&query=").concat(e.state.term)).then((function(t){return t.json().then((function(t){try{e.setState({movies:Object(i.a)(t.results),totalMovies:t.total_results})}catch(a){console.log(a)}}))}))},e.onChange=function(t){e.setState({term:t.target.value})},e.onPageChange=function(t){fetch("".concat(e.api_url,"?api_key=").concat(e.key,"&query=").concat(e.state.term,"&page=").concat(t)).then((function(a){return a.json().then((function(a){try{e.setState({movies:Object(i.a)(a.results),currPage:t})}catch(n){console.log(n)}}))}))},e.api_url="https://api.themoviedb.org/3/search/movie",e.key="b9ebb3701c1c957e4e6d67be378edc8f",e.state={term:"",movies:[],totalMovies:0,currPage:1},e}return Object(l.a)(a,[{key:"render",value:function(){var e=Math.floor(this.state.totalMovies/20);return o.a.createElement("div",{className:"App"},o.a.createElement(h,null),o.a.createElement(p,{handleSubmit:this.onSubmit,handleChange:this.onChange}),o.a.createElement(g,{movies:this.state.movies}),this.state.totalMovies>20?o.a.createElement(f,{pages:e,onPageChange:this.onPageChange,currPage:this.currPage}):"")}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.b3e50e1e.chunk.js.map