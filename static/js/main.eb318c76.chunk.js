(this.webpackJsonpmoviesearcher=this.webpackJsonpmoviesearcher||[]).push([[0],{41:function(e,t,a){},61:function(e,t,a){e.exports=a(79)},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(42),o=a.n(i),s=(a(66),a(10)),l=a(11),c=a(13),m=a(8),u=a(12),h=(a(67),a(68),a(87)),v=a(80),f=a(89),d=a(86),p=a(91),g=a(90),E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).search=function(e){fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(a.props.apiKey,"&language=en-US&query=").concat(e,"&page=1&include_adult=false")).then((function(e){return e.json()})).then((function(e){return a.props.sendData(e.results.filter((function(e){return null!==e.poster_path})))}))},a.handleChange=function(e){e.preventDefault();var t=a.input.value;t&&a.search(t)},a.state={showSearch:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){return e.setState({showSearch:!e.state.showSearch})}),1e3)}},{key:"render",value:function(){var e=this;return r.a.createElement(v.a,{className:"header",tag:"header",direction:"row",align:"center",justify:"between",background:"brand",pad:{left:"medium",right:"small",vertical:"small"},elevation:"medium",style:{zIndex:"3"}},r.a.createElement(f.a,{onClick:this.props.goHome,color:"brand",level:"3",margin:"none"},"Movie Searcher"),r.a.createElement("span",{onClick:this.props.toggleFavorites,role:"img","aria-label":"favorite",className:"favorite",style:{fontSize:"2rem"}},"\u2764\ufe0f"),r.a.createElement(v.a,{flex:!0,direction:"row",style:{flex:"none",alignItems:"center"}},r.a.createElement(d.a,{direction:"horizontal",open:this.state.showSearch},r.a.createElement(p.a,{onChange:this.handleChange},r.a.createElement("input",{ref:function(t){return e.input=t,t&&t.focus()},type:"text"}))),r.a.createElement(g.a,{icon:r.a.createElement(h.a,{color:"brand"}),onClick:function(){return e.setState({showSearch:!e.state.showSearch})}})))}}]),t}(r.a.Component),b=(a(41),a(78),function(e){var t=e.movie,a=e.close;return r.a.createElement("div",null,r.a.createElement("div",{className:"overlay",onClick:a}),r.a.createElement("div",{className:"card"},r.a.createElement("img",{alt:"",src:"https://image.tmdb.org/t/p/w500/"+t.poster_path}),r.a.createElement("div",{className:"card_right"},r.a.createElement("h2",null,t.title),r.a.createElement("div",{className:"card_right__details"},r.a.createElement("div",{style:{justifyContent:"space-between",display:"flex",paddingRight:"4em"}},r.a.createElement("ul",null,r.a.createElement("li",null,t.release_date.split("-")[0]),r.a.createElement("li",null,t.vote_average)),r.a.createElement("ul",{id:"genres"},t.genres.map((function(e){return r.a.createElement("li",{key:e},e)})))),r.a.createElement("div",{className:"card_right__rating"},r.a.createElement("input",{id:"star5",name:"rating",type:"radio",value:"5"}),r.a.createElement("label",{className:"full",htmlFor:"star5"}),r.a.createElement("input",{id:"star4",name:"rating",type:"radio",value:"4"}),r.a.createElement("label",{className:"full",htmlFor:"star4"}),r.a.createElement("input",{id:"star3",name:"rating",type:"radio",value:"3"}),r.a.createElement("label",{className:"full",htmlFor:"star3"}),r.a.createElement("input",{id:"star2",name:"rating",type:"radio",value:"2"}),r.a.createElement("label",{className:"full",htmlFor:"star2"}),r.a.createElement("input",{id:"star1",name:"rating",type:"radio",value:"1"}),r.a.createElement("label",{className:"full",htmlFor:"star1"})),r.a.createElement("div",{className:"card_right__review"},r.a.createElement("p",null,t.overview))))))}),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).store=function(e){var t=JSON.parse(localStorage.getItem("favorites"));if(null==t||0===t.length){console.log("1.favorites is empty - add movie");var a=[];a.push(e),localStorage.setItem("favorites",JSON.stringify(a))}else t.some((function(t){return t.id===e.id}))?(console.log("already exists - deleted"),localStorage.setItem("favorites",JSON.stringify(t.filter((function(t){return t.id!==e.id}))))):(t.push(e),localStorage.setItem("favorites",JSON.stringify(t)))},a.state={movieIndex:void 0,showMovieCard:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(v.a,{className:"movies-wrapper"},this.props.movies.map((function(t,a){return r.a.createElement("div",{key:t.id,className:"textWithBlurredBg"},r.a.createElement("span",{className:"heart"},r.a.createElement("input",{onChange:function(){return e.store(t)},id:"fav",type:"checkbox"}),r.a.createElement("label",{htmlFor:"fav"})),r.a.createElement("img",{onClick:function(){return e.setState({movieIndex:a,showMovieCard:!e.state.showMovieCard})},alt:"",src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path)}),r.a.createElement("h2",null,t.title," (",t.release_date.split("-")[0],")"))})),this.state.showMovieCard&&r.a.createElement(b,{movie:this.props.movies[this.state.movieIndex],close:function(){return e.setState({showMovieCard:!e.state.showMovieCard})}}))}}]),t}(r.a.Component),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).removeFromStorage=function(e){a.setState({movies:a.state.movies.filter((function(t){return e!==t}))},(function(){localStorage.setItem("favorites",JSON.stringify(JSON.parse(localStorage.getItem("favorites")).filter((function(t){return t.id!==e.id}))))}))},a.state={movies:JSON.parse(localStorage.getItem("favorites")),showMovieCard:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return 0!==this.state.movies.length?r.a.createElement(v.a,{className:"movies-wrapper"},this.state.movies.map((function(t,a){return r.a.createElement("div",{key:t.id,className:"textWithBlurredBg"},r.a.createElement("span",{onClick:function(){return e.removeFromStorage(t)},className:"heart"},r.a.createElement("input",{id:"fav",type:"checkbox",defaultChecked:!0}),r.a.createElement("label",{htmlFor:"fav"})),r.a.createElement("img",{onClick:function(){return e.setState({movieIndex:a,showMovieCard:!e.state.showMovieCard})},alt:"",src:"https://image.tmdb.org/t/p/w500/"+t.poster_path}),r.a.createElement("h2",null,t.title," (",t.release_date.split("-")[0],")"))})),this.state.showMovieCard&&r.a.createElement(b,{movie:this.state.movies[this.state.movieIndex],close:function(){return e.setState({showMovieCard:!e.state.showMovieCard})}})):r.a.createElement(v.a,{className:"nothing"},r.a.createElement("h2",null,"Nothing here yet..."))}}]),t}(r.a.Component),S=a(88),O={global:{colors:{brand:"#fff"},font:{family:"Roboto",size:"14px",height:"20px"}}},C=[],N="3bfc2790af0abb18fd91abed5ebdd0d2",k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).getGenres=function(e){e.forEach((function(e){return e.genres=e.genre_ids.map((function(e){return C.filter((function(t){return t.id===e}))[0].name}))}))},a.getQuery=function(e){a.getGenres(e),a.setState({movies:e,favoritesIsOpen:!1})},a.getMovies=function(){fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(N,"&language=en-US")).then((function(e){return e.json()})).then((function(e){return C=e.genres})).then((function(){return fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(N,"&language=en-US&page=1"))})).then((function(e){return e.json()})).then((function(e){a.getGenres(e.results),a.setState({movies:e.results})}))},a.state={favoritesIsOpen:!1,movies:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this;return r.a.createElement(S.a,{theme:O,full:!0},r.a.createElement(v.a,{fill:!0},r.a.createElement(E,{toggleFavorites:function(){return e.setState({favoritesIsOpen:!e.state.favoritesIsOpen})},apiKey:N,goHome:function(){e.setState({favoritesIsOpen:!1,showMovieCard:!1}),e.getMovies()},sendData:this.getQuery}),r.a.createElement(v.a,{direction:"row",flex:!0,overflow:{horizontal:"hidden"}},this.state.favoritesIsOpen?r.a.createElement(w,null):r.a.createElement(y,{movies:this.state.movies}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[61,1,2]]]);
//# sourceMappingURL=main.eb318c76.chunk.js.map