(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[3],{100:function(e,s,a){e.exports={messagesItems:"Message_messagesItems__1Lnga"}},108:function(e,s,a){"use strict";a.r(s);var t=a(59),n=a(31),i=a.n(n),c=a(9),r=a(99),m=a.n(r),d=a(0),g=function(e){var s="/messenger/"+e.id;return Object(d.jsx)("div",{className:m.a.dialog,children:Object(d.jsx)(c.b,{to:s,activeClassName:m.a.active,children:e.name})})},o=a(100),b=a.n(o),u=function(e){return Object(d.jsx)("div",{className:b.a.message,children:e.message})},l=(a(1),a(25)),j=a(13),x=a(30),O=function(e){return Object(d.jsx)(l.b,{onSubmit:e.onSubmit,render:function(e){var s=e.handleSubmit,a=(e.form,e.submitting);e.pristine,e.values;return Object(d.jsxs)("form",{onSubmit:s,children:[Object(d.jsx)(l.a,{component:x.b,name:"newMessageText",placeholder:"Enter your message",validate:Object(j.a)(j.d,Object(j.b)(25),Object(j.c)(5))}),Object(d.jsx)("div",{className:i.a.buttonBlock,children:Object(d.jsx)("button",{type:"submit",disabled:a,children:"Send message"})})]})}})},h=function(e){var s=e.dialogs.map((function(e){return Object(d.jsx)(g,{id:e.id,name:e.name},e.id)})),a=e.messages.map((function(e){return Object(d.jsx)(u,{message:e.message},e.id)}));return Object(d.jsxs)("div",{className:i.a.dialogs,children:[Object(d.jsx)("div",{className:i.a.dialogsItems,children:s}),Object(d.jsx)("div",{className:i.a.messagesItems,children:a}),Object(d.jsx)("div",{className:i.a.newMessage,children:Object(d.jsx)(O,{onSubmit:function(s){return e.addMessage(s.newMessageText)}})})]})},v=a(11),f=a(66),p=a(21);s.default=Object(p.c)(Object(v.b)((function(e){return{dialogs:e.messengerPage.dialogsData,messages:e.messengerPage.messagesData,newMessageText:e.messengerPage.newMessageText,isAuth:e.auth.isAuth}}),{addMessage:t.a}),f.a)(h)},99:function(e,s,a){e.exports={dialog:"DialogItem_dialog__2ChCf",active:"DialogItem_active__9glsg"}}}]);
//# sourceMappingURL=3.e901e7ff.chunk.js.map