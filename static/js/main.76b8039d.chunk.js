(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n.n(c),i=n(4),s=n(5),r=n(7),b=n(6),o=n(1),d=n.n(o),l=n(0),u=function(t){var e,n=t.tabs,c=t.selectedTabId,a=t.selectTab;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{children:n.map((function(t){return Object(l.jsx)("button",{onClick:function(){return a(t)},type:"button",children:t.title},t.id)}))}),Object(l.jsx)("h2",{children:null===(e=n.find((function(t){return t.id===c})))||void 0===e?void 0:e.content})]})},j=(n(13),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),h=function(t){Object(r.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={selectedTab:j[0]},t.selectedTab=function(e){t.setState({selectedTab:e})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state.selectedTab;return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Selected tab is ".concat(t.title)}),Object(l.jsx)(u,{tabs:j,selectedTabId:t.id,selectTab:this.selectedTab})]})}}]),n}(d.a.Component);a.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.76b8039d.chunk.js.map