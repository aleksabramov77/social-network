(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[4],{101:function(e,t,n){e.exports={user:"User_user__3Hjt1",name:"User_name__3Vnrh",status:"User_status__1fle2",followed:"User_followed__1DjBc",country:"User_country__1e0wl",city:"User_city__11qII",avatar:"User_avatar__100ti",followButton:"User_followButton__39dvV"}},102:function(e,t,n){e.exports={pageSelector:"Paginator_pageSelector__2o99D",currentPage:"Paginator_currentPage__OPVut",pageNumberButton:"Paginator_pageNumberButton__3fdbd",arrowButton:"Paginator_arrowButton__1fqo2"}},107:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(18),o=n(22),s=n(20),u=n(19),c=n(1),l=n.n(c),i=n(11),f=n(60),d=n(101),g=n.n(d),p=n(50),b=n(9),h=n(0),j=function(e){return Object(h.jsxs)("div",{className:g.a.user,children:[Object(h.jsxs)("div",{className:g.a.name,children:[Object(h.jsx)(b.b,{to:"/profile/".concat(e.userData.id),children:Object(h.jsx)("img",{className:g.a.avatar,alt:"userAvatar",src:e.userData.photos.small?e.userData.photos.small:p.a})}),Object(h.jsxs)("span",{children:[e.userData.name,Object(h.jsx)("br",{}),"id: ",e.userData.id]})]}),Object(h.jsxs)("div",{className:g.a.country,children:["    ","props.userData.location.country","    "]}),Object(h.jsxs)("div",{className:g.a.city,children:["    ","props.userData.location.city","    "]}),Object(h.jsxs)("div",{className:g.a.status,children:["    ",e.userData.status,"    "]}),e.isAuth&&Object(h.jsx)("div",{className:g.a.followed,children:e.userData.followed?Object(h.jsx)("button",{disabled:e.followingInProgress.some((function(t){return t===e.userData.id})),onClick:function(){return e.unfollowUser(e.userData.id)},className:g.a.followButton,children:" Unfollow "}):Object(h.jsx)("button",{disabled:e.followingInProgress.some((function(t){return t===e.userData.id})),onClick:function(){return e.followUser(e.userData.id)},className:g.a.followButton,children:" Follow "})})]})},m=n(45),v=n(102),O=n.n(v),P=function(e){var t=e.totalItemsCount,n=e.itemsOnPage,r=void 0===n?10:n,a=e.currentPage,o=void 0===a?1:a,s=e.pagesOnScreen,u=void 0===s?10:s,l=e.onPageChanged,i=Math.ceil(t/r),f=Math.ceil(i/u);i<u&&(u=i);var d=Object(c.useState)(Math.ceil(o/u)||1),g=Object(m.a)(d,2),p=g[0],b=g[1];Object(c.useEffect)((function(){b(Math.ceil(o/u))}),[t]);for(var j=[],v=(p-1)*u+1;v<=Math.min(i,p*u);v++)j.push(v);return Object(h.jsxs)("div",{className:O.a.pageSelector,children:[Object(h.jsxs)("button",{className:"".concat(O.a.pageNumberButton," ").concat(O.a.arrowButton),disabled:p<=1,onClick:function(){return b(1)},children:[" ","<<"," "]}),Object(h.jsxs)("button",{className:"".concat(O.a.pageNumberButton," ").concat(O.a.arrowButton),disabled:p<=1,onClick:function(){return b(p-1)},children:[" ","<"," "]}),j.map((function(e){return Object(h.jsx)("button",{disabled:o===e,className:"".concat(O.a.pageNumberButton,"  ").concat(e===o?O.a.currentPage:""),onClick:function(){return l(e)},children:e},e)})),Object(h.jsxs)("button",{className:"".concat(O.a.pageNumberButton," ").concat(O.a.arrowButton),disabled:p>=f,onClick:function(){return b(p+1)},children:[" ",">"," "]}),Object(h.jsxs)("button",{className:"".concat(O.a.pageNumberButton," ").concat(O.a.arrowButton),disabled:p>=f,onClick:function(){return b(Math.ceil(i/u))},children:[" ",">>"," "]})]})},w=function(e){var t=e.totalUsersCount,n=e.usersOnPage,r=e.currentPage,a=e.onPageChanged,o=e.users,s=e.followUser,u=e.unfollowUser,c=e.followingInProgress,l=e.isAuth;return Object(h.jsxs)("div",{children:[Object(h.jsx)(P,{totalItemsCount:t,itemsOnPage:n,currentPage:r,onPageChanged:a}),o.map((function(e){return Object(h.jsx)(j,{userData:e,followUser:s,unfollowUser:u,followingInProgress:c,isAuth:l},e.id)}))]})};function _(e,t){return e===t}function x(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}function y(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}var U=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];var o=0,s=r.pop(),u=y(r),c=e.apply(void 0,[function(){return o++,s.apply(null,arguments)}].concat(n)),l=e((function(){for(var e=[],t=u.length,n=0;n<t;n++)e.push(u[n].apply(null,arguments));return c.apply(null,e)}));return l.resultFunc=s,l.dependencies=u,l.recomputations=function(){return o},l.resetRecomputations=function(){return o=0},l}}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_,n=null,r=null;return function(){return x(t,n,arguments)||(r=e.apply(null,arguments)),n=arguments,r}}));var N=U((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),C=function(e){return e.auth.isAuth},B=function(e){return e.usersPage.totalUsersCount},D=function(e){return e.usersPage.usersOnPage},k=function(e){return e.usersPage.currentPage},A=function(e){return e.usersPage.followingInProgress},I=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).onPageChanged=function(t){var n=e.props.usersOnPage;e.props.setCurrentPage(t),e.props.requestUsers(n,t)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.usersOnPage,n=e.currentPage;this.props.requestUsers(t,n)}},{key:"render",value:function(){return Object(h.jsx)(w,Object(r.a)(Object(r.a)({},this.props),{},{onPageChanged:this.onPageChanged}))}}]),n}(l.a.Component);t.default=Object(i.b)((function(e){return{users:N(e),isAuth:C(e),totalUsersCount:B(e),usersOnPage:D(e),currentPage:k(e),followingInProgress:A(e)}}),{setCurrentPage:f.d,requestUsers:f.c,unfollowUser:f.e,followUser:f.b})(I)}}]);
//# sourceMappingURL=4.d33892ca.chunk.js.map