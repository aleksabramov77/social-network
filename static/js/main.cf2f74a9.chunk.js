(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[0],{18:function(e,t,a){e.exports={profileMainBlock:"ProfileInfo_profileMainBlock__2mhcL",profileAvatarBlock:"ProfileInfo_profileAvatarBlock__2oVcg",profileAvatar:"ProfileInfo_profileAvatar__11Krx",profileDataBlock:"ProfileInfo_profileDataBlock__2lCIC",profileStatusBlock:"ProfileInfo_profileStatusBlock__24DQD",profileDataItem:"ProfileInfo_profileDataItem__xfKPe",profileDataItem_value:"ProfileInfo_profileDataItem_value__2Gs6S",contactsBlock:"ProfileInfo_contactsBlock__91rpb",profileDataItem_type:"ProfileInfo_profileDataItem_type__2k8vY"}},20:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return d}));var n=a(2),r=a(65),s=(a(1),a(49)),c=a.n(s),o=a(0),i=["input","meta"],u=function(e){return function(t){var a=t.input,s=t.meta,u=Object(r.a)(t,i),l=s.submitError||s.touched&&s.error;return Object(o.jsxs)("div",{className:c.a.formControl+" "+(l?c.a.error:""),children:[l&&Object(o.jsxs)("span",{children:[" ",s.error||s.submitError," "]}),Object(o.jsx)(e,Object(n.a)(Object(n.a)({},a),u))]})}},l=u("textarea"),d=u("input")},22:function(e,t,a){e.exports={dialogs:"Messenger_dialogs__3UwQV",dialogsItems:"Messenger_dialogsItems__1EBxi",messagesItems:"Messenger_messagesItems__20Dp5",message:"Messenger_message__3fpq2",newMessage:"Messenger_newMessage___84Py",textareaBlock:"Messenger_textareaBlock__PARKv",buttonBlock:"Messenger_buttonBlock__1yLvw",submitError:"Messenger_submitError__3yqr2"}},27:function(e,t,a){"use strict";a.d(t,"b",(function(){return j})),a.d(t,"c",(function(){return h})),a.d(t,"d",(function(){return O}));var n=a(37),r=a(4),s=a.n(r),c=a(8),o=a(2),i=a(9),u=a(28),l=a(7),d=(a(1),"auth/SET_USER"),p="auth/SET_CAPTCHA",b={id:null,email:null,login:null,isAuth:!1,captchaURL:null},f=function(e,t,a,n){return{type:d,payload:{id:e,email:t,login:a,isAuth:n,captchaURL:null}}},j=function(){return function(){var e=Object(c.a)(s.a.mark((function e(t){var a,n,r,c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(l.c)(!0)),e.next=3,i.a.me();case 3:0===(a=e.sent).data.resultCode&&(n=a.data.data,r=n.id,c=n.email,o=n.login,t(f(r,c,o,!0))),t(Object(l.c)(!1));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h=function(e,t,a,r){return function(){var o=Object(c.a)(s.a.mark((function c(o){var d;return s.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return o(Object(l.c)(!0)),s.next=3,i.a.logIn(e,t,a,r);case 3:if(d=s.sent,o(Object(l.c)(!1)),0!==d.data.resultCode){s.next=9;break}o(j()),s.next=11;break;case 9:return 10===d.data.resultCode&&o(m()),s.abrupt("return",Object(n.a)({},u.a,d.data.messages[0]));case 11:case"end":return s.stop()}}),c)})));return function(e){return o.apply(this,arguments)}}()},O=function(){return function(){var e=Object(c.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(l.c)(!0)),e.next=3,i.a.logOut();case 3:0===e.sent.data.resultCode&&t(f(null,null,null,!1)),t(Object(l.c)(!1));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m=function(){return function(){var e=Object(c.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.c.getCaptchaURL();case 2:a=e.sent,t((n=a.data.url,{type:p,payload:{captchaURL:n}}));case 4:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:case p:return Object(o.a)(Object(o.a)({},e),t.payload);default:return e}}},29:function(e,t,a){e.exports={appWrapper:"App_appWrapper__yboJz",block:"App_block__PeutB",header:"App_header__2iIFd",navbar:"App_navbar__39CPW",content:"App_content__3zoXh"}},30:function(e,t,a){e.exports={nav:"Navbar_nav__1CPnx",active:"Navbar_active__2oxIi"}},39:function(e,t,a){e.exports={appWrapperContent:"Content_appWrapperContent__yDoLp",contentHeadImage:"Content_contentHeadImage__3XBMn",dynamicContent:"Content_dynamicContent__2I9rW"}},40:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__WJfQt",posts:"MyPosts_posts__2Rffb",post:"MyPosts_post__vBcSb",textareaBlock:"MyPosts_textareaBlock__sAX7I",buttonBlock:"MyPosts_buttonBlock__3eRfm"}},41:function(e,t,a){e.exports={post:"Post_post__334D8",avatar:"Post_avatar__2UaWx",postText:"Post_postText__3VQl_",likesCounter:"Post_likesCounter__10VO1"}},42:function(e,t,a){e.exports={header:"Header_header__S_AL9",headerImg:"Header_headerImg__-IdV9",loginBlock:"Header_loginBlock__kdbO2"}},47:function(e,t,a){},48:function(e,t,a){e.exports={statusBlock:"ProfileStatus_statusBlock__LzKVV",statusInputBlock:"ProfileStatus_statusInputBlock__35F80"}},49:function(e,t,a){e.exports={formControl:"FormsControls_formControl__hjWRA",error:"FormsControls_error__21DJK"}},50:function(e,t,a){"use strict";t.a=a.p+"static/media/defaultAvatar.031be920.png"},59:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(19),r=a(2),s="messengerPage/ADD_MESSAGE",c={dialogsData:[{id:1,name:"Dimych"},{id:2,name:"Sasha"},{id:3,name:"Viktor"},{id:4,name:"Lena"},{id:5,name:"Misha"},{id:6,name:"Egor"},{id:7,name:"Sveta"}],messagesData:[{id:1,message:"Hi !!!"},{id:2,message:"How are you ?"},{id:4,message:"Yo"},{id:3,message:"Yo yo"},{id:5,message:"Yo yo yo"}]},o=function(e){return{type:s,newMessageText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var a={id:e.messagesData.length+1,message:t.newMessageText};return Object(r.a)(Object(r.a)({},e),{},{messagesData:[].concat(Object(n.a)(e.messagesData),[a])});default:return e}}},6:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"d",(function(){return r})),a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return c}));var n=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(e){return t.reduce((function(t,a){return t||a(e)}),void 0)}},r=function(e){return e?void 0:"Field is required"},s=function(e){return function(t){return t&&t.length>e?"Must be ".concat(e," characters or less"):void 0}},c=function(e){return function(t){return t&&t.length<e?"Must be ".concat(e," characters or more"):void 0}}},60:function(e,t,a){"use strict";a.d(t,"d",(function(){return g})),a.d(t,"c",(function(){return P})),a.d(t,"e",(function(){return y})),a.d(t,"b",(function(){return w}));var n=a(4),r=a.n(n),s=a(8),c=a(19),o=a(2),i=a(9),u=a(7),l=function(e,t,a,n){return e.map((function(e){return e[a]===t?Object(o.a)(Object(o.a)({},e),n):e}))},d="usersPage/FOLLOW",p="usersPage/UNFOLLOW",b="usersPage/SET_USERS",f="usersPage/SET_CURRENT_PAGE",j="usersPage/SET_TOTAL_USERS_COUNT",h="usersPage/TOGGLE_FOLLOWING",O="usersPage/FAKE",m={users:[],totalUsersCount:0,usersOnPage:20,currentPage:1,followingInProgress:[],fake:0},v=function(e){return{type:d,userId:e}},x=function(e){return{type:p,userId:e}},g=function(e){return{type:f,currentPage:e}},_=function(e,t){return{type:h,following:e,id:t}},P=function(e,t){return function(){var a=Object(s.a)(r.a.mark((function a(n){var s;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(Object(u.c)(!0)),a.next=3,i.d.getUsers(e,t);case 3:s=a.sent,n((c=s.data.items,{type:b,users:c})),n((r=s.data.totalCount,{type:j,totalUsersCount:r})),n(Object(u.c)(!1));case 7:case"end":return a.stop()}var r,c}),a)})));return function(e){return a.apply(this,arguments)}}()},k=function(){var e=Object(s.a)(r.a.mark((function e(t,a,n,s){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(_(!0,a)),e.next=3,n(a);case 3:0===e.sent.data.resultCode&&(t(s(a)),t(_(!1,a)));case 5:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),y=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(a,e,i.d.unfollowUser.bind(i.d),x);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(a,e,i.d.followUser.bind(i.d),v);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(o.a)(Object(o.a)({},e),{},{users:l(e.users,t.userId,"id",{followed:!0})});case p:return Object(o.a)(Object(o.a)({},e),{},{users:l(e.users,t.userId,"id",{followed:!1})});case b:return Object(o.a)(Object(o.a)({},e),{},{users:t.users});case f:return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.currentPage});case j:return Object(o.a)(Object(o.a)({},e),{},{totalUsersCount:t.totalUsersCount});case h:return Object(o.a)(Object(o.a)({},e),{},{followingInProgress:t.following?[].concat(Object(c.a)(e.followingInProgress),[t.id]):Object(c.a)(e.followingInProgress.filter((function(e){return e!==t.id})))});case O:return Object(o.a)(Object(o.a)({},e),{},{fake:e.fake+1});default:return e}}},62:function(e,t,a){e.exports={preloader:"Preloader_preloader__1UWqk"}},7:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return d}));var n=a(4),r=a.n(n),s=a(8),c=a(2),o=a(27),i="app/INITIALIZED_SUCCESS",u={initialized:!1,isFetching:!0},l=function(e){return{type:"app/TOGGLE_FETCHING",isFetching:e}},d=function(){return function(){var e=Object(s.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Object(o.b)());case 2:a=e.sent,Promise.all([a]).then((function(){return t({type:i})}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(c.a)(Object(c.a)({},e),{},{initialized:!0});default:return e}}},70:function(e,t,a){},9:function(e,t,a){"use strict";a.d(t,"d",(function(){return c})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return u}));var n=a(2),r=a(63),s=a.n(r).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"05f0dc87-f93b-4a11-b796-0fb78655f73d"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return s.get("users?count=".concat(e,"&page=").concat(t))},unfollowUser:function(e){return s.delete("follow/".concat(e))},followUser:function(e){return s.post("follow/".concat(e),{})},getProfile:function(e,t){return console.warn('Obsolete method" Please profileAPI object'),o.getProfile(e,t)}},o={getProfile:function(e){return s.get("profile/".concat(e))},getUserStatus:function(e){return s.get("profile/status/".concat(e))},updateUserStatus:function(e){return s.put("profile/status",{status:e})},updatePhoto:function(e){var t=new FormData;return t.append("image",e),s.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},updateProfileData:function(e){return s.put("profile",Object(n.a)(Object(n.a)({},e),e.contacts))}},i={me:function(){return s.get("auth/me")},logIn:function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return s.post("auth/login",{email:e,password:t,rememberMe:a,captcha:n})},logOut:function(){return s.delete("auth/login")}},u={getCaptchaURL:function(){return s.get("security/get-captcha-url")}}},97:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(35),c=a.n(s),o=(a(70),a(23)),i=a(26),u=a(25),l=a(24),d=a(29),p=a.n(d),b=a(13),f=a(30),j=a.n(f),h=a(0),O=function(e){return Object(h.jsxs)("nav",{className:j.a.nav,children:[Object(h.jsx)("div",{children:Object(h.jsx)(b.b,{to:"/profile",activeClassName:j.a.active,children:"Profile"})}),Object(h.jsx)("div",{children:Object(h.jsx)(b.b,{to:"/messenger",activeClassName:j.a.active,children:"Messenger"})}),Object(h.jsx)("div",{children:Object(h.jsx)(b.b,{to:"/users",activeClassName:j.a.active,children:"Users"})}),Object(h.jsx)("div",{children:Object(h.jsx)(b.b,{to:"/news",activeClassName:j.a.active,children:"News"})}),Object(h.jsx)("div",{children:Object(h.jsx)(b.b,{to:"/music",activeClassName:j.a.active,children:"Music"})}),Object(h.jsx)("div",{children:Object(h.jsx)(b.b,{to:"/settings",activeClassName:j.a.active,children:"Settings"})})]})},m=a(5),v=a(39),x=a.n(v),g=a(16),_=a(47),P=a.n(_),k=a(4),y=a.n(k),w=a(8),I=a(2),S=a(19),C=a(32),D=a(18),E=a.n(D),M=a(50),N=a(48),U=a.n(N),A=function(e){var t=r.a.useState(!1),a=Object(C.a)(t,2),n=a[0],s=a[1],c=r.a.useState(e.status),o=Object(C.a)(c,2),i=o[0],u=o[1];r.a.useEffect((function(){u(e.status)}),[e.status]);return Object(h.jsx)("div",{children:n?Object(h.jsx)("div",{children:Object(h.jsx)("input",{className:U.a.statusInputBlock,onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){s(!1),e.updateUserStatus(i)},value:i})}):Object(h.jsx)("div",{children:Object(h.jsx)("span",{className:U.a.statusBlock,onDoubleClick:function(){e.authId===e.userId&&s(!0)},children:i||"No status"})})})},T=a(62),B=a.n(T),L=a.p+"static/media/Spinner-1s-200px.a77e97c8.svg",F=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("img",{alt:"preloader",className:B.a.preloader,src:L})})},R=a(17),V=a(6),z=a(20),W=function(e){var t=e.editMode,a=e.dataType,n=e.dataValue,r=e.name,s=void 0===r?"":r,c=e.type,o=void 0===c?"text":c,i=e.validators,u=void 0===i?[]:i;return Object(h.jsxs)("div",{className:E.a.profileDataItem,children:[Object(h.jsx)("div",{className:E.a.profileDataItem_type,children:Object(h.jsx)("b",{children:a+": "})}),Object(h.jsx)("div",{className:E.a.profileDataItem_value,children:t?Object(h.jsx)(R.a,{name:s,component:z.a,type:o,placeholder:a,validate:V.a.apply(void 0,Object(S.a)(u))}):n||"-"})]})},J=function(e){var t=e.userProfile,a=e.setEditMode,n=e.isOwner,r=e.editMode;return Object(h.jsxs)("div",{children:[n&&Object(h.jsx)("button",{onClick:function(){return a(!0)},children:"Edit Info"}),Object(h.jsx)(W,{editMode:r,dataType:"Full name",dataValue:t.fullName}),Object(h.jsx)(W,{editMode:r,dataType:"ID",dataValue:t.userId}),Object(h.jsx)(W,{editMode:r,dataType:"About me",dataValue:t.aboutMe}),Object(h.jsx)(W,{editMode:r,dataType:"Looking for a job",dataValue:t.lookingForAJob?"yes":"no"}),Object(h.jsx)(W,{editMode:r,dataType:"My profs skills",dataValue:t.lookingForAJobDescription}),Object(h.jsx)("div",{children:Object(h.jsx)("b",{children:"Contacts"})}),Object(h.jsxs)("div",{className:E.a.contactsBlock,children:[" ",Object.keys(t.contacts).map((function(e){return Object(h.jsx)(W,{editMode:r,dataType:e,dataValue:t.contacts[e]},e)}))]})]})},H=function(e){var t=e.userProfile,a=e.editMode,n=e.authId,r=e.exitEditMode,s=e.updateProfileData,c=Object(I.a)(Object(I.a)({},t),t.contacts);delete c.photos;var o=function(){var e=Object(w.a)(y.a.mark((function e(t){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(t);case 2:if(!(a=e.sent)){e.next=5;break}return e.abrupt("return",a);case 5:r();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(R.b,{onSubmit:o,initialValues:c,render:function(e){var r=e.submitError,s=e.handleSubmit,c=e.hasValidationErrors,o=e.submitting,i=e.pristine;return Object(h.jsxs)("form",{onSubmit:s,children:[Object(h.jsx)("button",{type:"submit",disabled:o||i||c,children:"Submit"}),Object(h.jsx)("span",{children:r&&" "+r}),Object(h.jsx)(W,{editMode:a,dataType:"Full name",dataValue:t.fullName,name:"fullName",validators:[V.d]}),Object(h.jsx)(W,{editMode:!1,dataType:"ID",dataValue:t.userId,name:"userId",validators:[function(e){return String(e)===String(n)?void 0:"ID is not ".concat(n)}]}),Object(h.jsx)(W,{editMode:a,dataType:"About me",dataValue:t.aboutMe,name:"aboutMe",validators:[V.d]}),Object(h.jsx)(W,{editMode:a,dataType:"Looking for a job",dataValue:t.lookingForAJob?"yes":"no",name:"lookingForAJob",type:"checkbox"}),Object(h.jsx)(W,{editMode:a,dataType:"My profs skills",dataValue:t.lookingForAJobDescription,name:"lookingForAJobDescription",validators:[V.d]}),Object(h.jsx)("div",{children:Object(h.jsx)("b",{children:"Contacts"})}),Object(h.jsxs)("div",{className:E.a.contactsBlock,children:[" ",Object.keys(t.contacts).map((function(e){return Object(h.jsx)(W,{editMode:a,dataType:e,dataValue:t.contacts[e],name:"contacts."+e},e)}))]})]})}})},G=function(e){var t=e.authId,a=e.userProfile,n=e.status,s=e.updateUserStatus,c=e.isOwner,o=e.updatePhoto,i=e.updateProfileData,u=r.a.useState(!1),l=Object(C.a)(u,2),d=l[0],p=l[1];return a.userId?Object(h.jsxs)("div",{className:E.a.profileMainBlock,children:[Object(h.jsxs)("div",{className:E.a.profileAvatarBlock,children:[Object(h.jsx)("img",{className:E.a.profileAvatar,alt:"userAvatar",src:a.photos.small?a.photos.small:M.a}),c&&Object(h.jsx)("input",{type:"file",onChange:function(e){return o(e.target.files[0])}})]}),Object(h.jsx)("div",{className:E.a.profileDataBlock,children:d?Object(h.jsx)(H,{userProfile:a,editMode:d,authId:t,exitEditMode:function(){return p(!1)},updateProfileData:i}):Object(h.jsx)(J,{userProfile:a,editMode:d,setEditMode:p,isOwner:c})}),Object(h.jsx)("div",{className:E.a.profileStatusBlock,children:Object(h.jsx)(A,{authId:t,userId:a.userId,status:n,updateUserStatus:s})})]}):Object(h.jsx)(F,{})},K=a(9),q=a(7),X=(a(28),"profilePage/ADD_POST"),Y="profilePage/DELETE_POST",Q="profilePage/SET_USER_PROFILE_DATA",Z="profilePage/SET_STATUS",$="profilePage/SET_PROFILE_PHOTO",ee={status:"",userProfile:{userId:null,lookingForAJob:!1,lookingForAJobDescription:"",fullName:"",aboutMe:"",contacts:{},photos:{small:null,large:null}},postsData:[{id:1,message:"Hi, how are you",likesCount:5},{id:2,message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",likesCount:10}]},te=function(e){return{type:Q,userProfile:e}},ae=function(e){return{type:Z,statusText:e}},ne=function(e){return function(){var t=Object(w.a)(y.a.mark((function t(a){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Object(q.c)(!0),t.next=3,K.b.getProfile(e);case 3:n=t.sent,a(te(n.data)),a(Object(q.c)(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:var a={id:e.postsData.length+1,message:t.newPostText,likesCount:e.postsData.length+1};return Object(I.a)(Object(I.a)({},e),{},{postsData:[].concat(Object(S.a)(e.postsData),[a])});case Y:return Object(I.a)(Object(I.a)({},e),{},{postsData:Object(S.a)(e.postsData.filter((function(e){return e.id!==t.id})))});case Q:return Object(I.a)(Object(I.a)({},e),{},{userProfile:Object(I.a)(Object(I.a)({},t.userProfile),{},{contacts:Object(I.a)({},t.userProfile.contacts),photos:Object(I.a)({},t.userProfile.photos)})});case Z:return Object(I.a)(Object(I.a)({},e),{},{status:t.statusText});case $:return Object(I.a)(Object(I.a)({},e),{},{userProfile:Object(I.a)(Object(I.a)({},e.userProfile),{},{photos:Object(I.a)({},t.photos)})});default:return e}},se=a(40),ce=a.n(se),oe=a(41),ie=a.n(oe),ue=function(e){return Object(h.jsxs)("div",{className:ie.a.post,children:[Object(h.jsx)("img",{alt:"ava",className:ie.a.avatar,src:"https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg"}),Object(h.jsx)("div",{className:ie.a.postText,children:e.message}),Object(h.jsx)("div",{children:Object(h.jsxs)("span",{children:[e.likesCount," likes"]})})]})},le=r.a.memo((function(e){var t=e.posts.slice(0).reverse().map((function(e){return Object(h.jsx)(ue,{message:e.message,likesCount:e.likesCount},e.id)}));return Object(h.jsxs)("div",{className:ce.a.postsBlock,children:["My posts",Object(h.jsx)("div",{children:Object(h.jsx)(de,{onSubmit:function(t){return e.addPost(t.newPostText)}})}),Object(h.jsx)("div",{className:ce.a.posts,children:t})]})})),de=function(e){return Object(h.jsx)(R.b,{onSubmit:e.onSubmit,render:function(e){var t=e.handleSubmit,a=(e.form,e.submitting);e.pristine,e.values;return Object(h.jsxs)("form",{onSubmit:t,children:[Object(h.jsx)(R.a,{name:"newPostText",component:z.b,className:ce.a.textareaBlock,placeholder:"Enter your new post",validate:Object(V.a)(V.d,Object(V.b)(25),Object(V.c)(5))}),Object(h.jsx)("button",{type:"submit",disabled:a,children:"Add post"})]})}})},pe=le,be=Object(g.b)((function(e){return{posts:e.profilePage.postsData,newPostText:e.profilePage.newPostText}}),{addPost:function(e){return{type:X,newPostText:e}}})(pe),fe=function(e){var t=e.authId,a=e.userProfile,n=e.status,r=e.updateUserStatus,s=e.isOwner,c=e.updatePhoto,o=e.updateProfileData;return Object(h.jsxs)("div",{children:[Object(h.jsx)(G,{className:P.a.profileInfoBlock,authId:t,userProfile:a,status:n,updateUserStatus:r,isOwner:s,updatePhoto:c,updateProfileData:o}),Object(h.jsx)(be,{className:P.a.profileInfoBlock})]})},je=a(21),he=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId||this.props.authId;e?(this.props.getUserProfile(e),this.props.getUserStatus(e)):this.props.history.push("/login")}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){e.match.params.userId!==this.props.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[this.props.isFetching?Object(h.jsx)(F,{}):null,Object(h.jsx)(fe,{authId:this.props.authId,userProfile:this.props.userProfile,status:this.props.status,updateUserStatus:this.props.updateUserStatus,isOwner:!this.props.match.params.userId||String(this.props.match.params.userId)===String(this.props.authId),updatePhoto:this.props.updatePhoto,updateProfileData:this.props.updateProfileData})]})}}]),a}(r.a.Component),Oe=Object(je.c)(Object(g.b)((function(e){return{authId:e.auth.id,userProfile:e.profilePage.userProfile,status:e.profilePage.status,isFetching:e.profilePage.isFetching}}),{getUserProfile:ne,getUserStatus:function(e){return function(){var t=Object(w.a)(y.a.mark((function t(a){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,K.b.getUserStatus(e);case 2:n=t.sent,a(ae(n.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateUserStatus:function(e){return function(){var t=Object(w.a)(y.a.mark((function t(a){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,K.b.updateUserStatus(e);case 3:0===t.sent.data.resultCode&&a(ae(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),alert('Error from thank "updateUserStatus":'+t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},setUserProfileData:te,updatePhoto:function(e){return function(){var t=Object(w.a)(y.a.mark((function t(a){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Object(q.c)(!0),t.next=3,K.b.updatePhoto(e);case 3:0===(n=t.sent).data.resultCode&&(a((r=n.data.data.photos,{type:$,photos:r})),a(Object(q.c)(!1)));case 5:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},updateProfileData:function(e){return function(){var t=Object(w.a)(y.a.mark((function t(a){var n,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Object(q.c)(!0),t.next=3,K.b.updateProfileData(e);case 3:if(0!==(n=t.sent).data.resultCode){t.next=9;break}a(ne(e.userId)),a(Object(q.c)(!1)),t.next=12;break;case 9:return r={contacts:{}},n.data.messages.map((function(e){var t=e.split("->")[1].replace(")","").toLowerCase();r.contacts[t]=e})),t.abrupt("return",r);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),m.g)(he),me=a(27),ve=a(22),xe=a.n(ve),ge=function(e){var t=e.logIn,a=e.captchaURL;return Object(h.jsx)(R.b,{onSubmit:function(e){var a=e.email,n=e.password,r=(e.rememberMe,e.captcha);return t(a,n,!1,r)},render:function(e){var t=e.submitError,n=e.handleSubmit,r=(e.reset,e.form),s=e.submitting;e.pristine,e.values;return Object(h.jsxs)("form",{onSubmit:n,children:[Object(h.jsx)("div",{className:xe.a.submitError,children:t}),Object(h.jsx)(R.a,{name:"email",className:t?xe.a.submitError:xe.a.correct,component:z.a,placeholder:"Email",validate:Object(V.a)(V.d,Object(V.b)(25),Object(V.c)(5))}),Object(h.jsx)(R.a,{name:"password",className:t?xe.a.submitError:xe.a.correct,placeholder:"Password",component:z.a,type:"password",validate:Object(V.a)(V.d,Object(V.b)(25),Object(V.c)(5))}),Object(h.jsxs)("label",{children:[Object(h.jsx)(R.a,{name:"rememberMe",component:z.a,type:"checkbox"}),"remember me "]}),Object(h.jsxs)("div",{children:[a&&Object(h.jsx)("img",{src:a}),a&&Object(h.jsx)(R.a,{name:"captcha",className:t?xe.a.submitError:xe.a.correct,placeholder:"Captcha",component:z.a,type:"text",validate:Object(V.a)(V.d,Object(V.b)(10))})]}),Object(h.jsxs)("div",{className:xe.a.buttonBlock,children:[Object(h.jsx)("button",{type:"submit",disabled:s,children:"Login"}),Object(h.jsx)("button",{type:"button",onClick:r.reset,children:"Reset"})]})]})}})},_e=function(e){var t=e.isAuth,a=e.logIn,n=e.captchaURL;return t?Object(h.jsx)(m.a,{to:"/profile"}):Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Login"}),Object(h.jsx)(ge,{logIn:a,captchaURL:n})]})},Pe=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(h.jsx)(_e,Object(I.a)({},this.props))}}]),a}(r.a.Component),ke=Object(g.b)((function(e){return{isAuth:e.auth.isAuth,captchaURL:e.auth.captchaURL}}),{logIn:me.c})(Pe),ye=r.a.lazy((function(){return a.e(3).then(a.bind(null,106))})),we=r.a.lazy((function(){return a.e(4).then(a.bind(null,105))})),Ie=r.a.lazy((function(){return a.e(6).then(a.bind(null,102))})),Se=r.a.lazy((function(){return a.e(5).then(a.bind(null,103))})),Ce=r.a.lazy((function(){return a.e(7).then(a.bind(null,104))})),De=function(){return Object(h.jsxs)("div",{className:x.a.appWrapperContent,children:[Object(h.jsx)("div",{className:x.a.contentHeadImage}),Object(h.jsx)("div",{className:x.a.dynamicContent,children:Object(h.jsx)(r.a.Suspense,{fallback:Object(h.jsx)(F,{}),children:Object(h.jsxs)(m.d,{children:[Object(h.jsx)(m.a,{exact:!0,from:"/",to:"/profile"}),Object(h.jsx)(m.b,{path:"/profile/:userId?",render:function(){return Object(h.jsx)(Oe,{})}}),Object(h.jsx)(m.b,{path:"/messenger",render:function(){return Object(h.jsx)(ye,{})}}),Object(h.jsx)(m.b,{path:"/users",render:function(){return Object(h.jsx)(we,{})}}),Object(h.jsx)(m.b,{path:"/news",render:function(){return Object(h.jsx)(Ie,{})}}),Object(h.jsx)(m.b,{path:"/music",render:function(){return Object(h.jsx)(Se,{})}}),Object(h.jsx)(m.b,{path:"/settings",render:function(){return Object(h.jsx)(Ce,{})}}),Object(h.jsx)(m.b,{path:"/login",render:function(){return Object(h.jsx)(ke,{})}}),Object(h.jsx)(m.b,{path:"*",render:function(){return Object(h.jsx)("div",{children:" 404 Not Found "})}})]})})})]})},Ee=a(42),Me=a.n(Ee),Ne=function(e){return Object(h.jsxs)("header",{className:Me.a.header,children:[Object(h.jsx)("img",{alt:"logo",src:"https://templates.iqonic.design/socialv/intro/images/logo-full.png",className:Me.a.headerImg}),Object(h.jsx)("div",{className:Me.a.loginBlock,children:e.isAuth?Object(h.jsxs)("div",{children:[" ",e.login+" ",Object(h.jsx)("button",{type:"button",onClick:e.logOut,children:" LogOut"})]}):Object(h.jsx)(b.b,{to:"/login",children:"Login"})})]})},Ue=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(h.jsx)(Ne,Object(I.a)({},this.props))}}]),a}(r.a.Component),Ae=Object(g.b)((function(e){return{login:e.auth.login,isAuth:e.auth.isAuth}}),{logOut:me.d})(Ue),Te=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).catchAllUnhandledErrors=function(e,t){alert("unhandled error is catched: ".concat(e)),console.error(e,t)},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(h.jsx)(b.a,{children:Object(h.jsxs)("div",{className:p.a.appWrapper,children:[Object(h.jsx)("div",{className:p.a.block+" "+p.a.header,children:Object(h.jsx)(Ae,{})}),Object(h.jsx)("div",{className:p.a.block+" "+p.a.navbar,children:Object(h.jsx)(O,{})}),Object(h.jsx)("div",{className:p.a.block+" "+p.a.content,children:Object(h.jsx)(De,{})})]})}):Object(h.jsx)(F,{})}}]),a}(r.a.Component),Be=Object(je.c)(Object(g.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:q.b}))(Te),Le=a(59),Fe={},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe;return e},Ve=a(60),ze=a(64),We=Object(je.b)({profilePage:re,messengerPage:Le.b,usersPage:Ve.a,sidebar:Re,auth:me.a,app:q.a}),Je=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||je.c,He=Object(je.d)(We,Je(Object(je.a)(ze.a)));window.__store__=He;var Ge=He;c.a.render(Object(h.jsx)(g.a,{store:Ge,children:Object(h.jsx)(Be,{})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.cf2f74a9.chunk.js.map