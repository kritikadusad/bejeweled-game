(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(27)},17:function(e,t,n){},18:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),i=n.n(c),o=(n(17),n(3)),l=n(4),u=n(6),s=n(5),m=n(1),d=n(7),v=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={game:[]},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:{1:"white",2:"pink",3:"blue",4:"red",5:"yellow",6:"purple",7:"aqua"}[this.props.jewel]},'""')}}]),t}(a.Component),h=(n(18),n(10)),f=n.n(h),b=[1,2,3,4,5,6,7],j=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={game:[]},n.generateJewel=n.generateJewel.bind(Object(m.a)(n)),n.createGrid=n.createGrid.bind(Object(m.a)(n)),n.jewelRemove=n.jewelRemove.bind(Object(m.a)(n)),n.countSameAdjacent=n.countSameAdjacent.bind(Object(m.a)(n)),n.checkGrid=n.checkGrid.bind(Object(m.a)(n)),n.checkMovePossible=n.checkMovePossible.bind(Object(m.a)(n)),n.checkSameJewelsAndRemove=n.checkSameJewelsAndRemove.bind(Object(m.a)(n)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"generateJewel",value:function(e){return e[Math.floor(e.length*Math.random())]}},{key:"checkSameJewelsAndRemove",value:function(e,t,n){return t===n?this.jewelRemove(e,t):e}},{key:"jewelRemove",value:function(e,t){return e.filter(function(e){return e!==t})}},{key:"createGrid",value:function(e){for(var t=[],n=0;n<8;n++){t[n]=[];for(var a=0;a<8;a++){var r=Array.from(e);n>1&&(r=this.checkSameJewelsAndRemove(r,t[n-1][a],t[n-2][a])),a>1&&(r=this.checkSameJewelsAndRemove(r,t[n][a-1],t[n][a-2]));var c=this.generateJewel(r);t[n][a]=c}}return t}},{key:"resetGame",value:function(){this.setState({game:[]})}},{key:"countSameAdjacent",value:function(e,t,n,a){var r=0;return t>=1&&e===a[t-1][n]&&r++,t<=6&&e===a[t+1][n]&&r++,n>=1&&e===a[t][n-1]&&r++,n<=6&&e===a[t][n+1]&&r++,r}},{key:"checkMovePossible",value:function(e,t,n){var a=n[e][t];if(e>=2&&a===n[e-1][t]&&this.countSameAdjacent(a,e-2,t,n)>=2)return!0;if(e<=5&&a===n[e+1][t]&&this.countSameAdjacent(a,e+2,t,n)>=2)return!0;if(t>=2&&a===n[e][t-1]&&this.countSameAdjacent(a,e,t-2,n)>=2)return!0;if(t<=5&&a===n[e][t+1]&&this.countSameAdjacent(a,e,t+2,n)>=2)return!0}},{key:"checkGrid",value:function(e){for(var t=0;t<8;t++)for(var n=0;n<8;n++)if(this.checkMovePossible(t,n,e))return!0;this.resetGame()}},{key:"render",value:function(){var e=this.createGrid(b);this.checkGrid(e);var t=r.a.createElement("div",null),n=[],a=!0,c=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done);a=!0){var u=o.value,s=!0,m=!1,d=void 0;try{for(var h,j=u[Symbol.iterator]();!(s=(h=j.next()).done);s=!0){var k=h.value;n.push(k)}}catch(w){m=!0,d=w}finally{try{s||null==j.return||j.return()}finally{if(m)throw d}}t=r.a.createElement("div",{className:"grid-container"},n.map(function(e){return r.a.createElement("div",{className:"grid-item",key:f.a.generate()},r.a.createElement(v,{jewel:e}))}))}}catch(w){c=!0,i=w}finally{try{a||null==l.return||l.return()}finally{if(c)throw i}}return r.a.createElement("div",{className:"board"},r.a.createElement("h3",null," Lets play Bejeweled!"),t,r.a.createElement("button",{className:"reset-button",onClick:this.resetGame.bind(this)},"Reset"))}}]),t}(a.Component);i.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.0f609602.chunk.js.map