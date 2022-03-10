(this["webpackJsonpreact-course"]=this["webpackJsonpreact-course"]||[]).push([[0],{10:function(e,t,c){e.exports={header:"MainNavigation_header__2OfVc",logo:"MainNavigation_logo__37Sjs",selected:"MainNavigation_selected__28khn"}},13:function(e,t,c){e.exports={item:"MeetingItem_item__1P7Lm",image:"MeetingItem_image__3O4rX",content:"MeetingItem_content__2GGFN",actions:"MeetingItem_actions__3ZRbR"}},20:function(e,t,c){e.exports={card:"Card_card__36qio"}},21:function(e,t,c){e.exports={list:"MeetingList_list__2XLfr"}},22:function(e,t,c){e.exports={main:"Layout_main__3P0B1"}},28:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(17),r=c.n(s),a=(c(28),c(2)),o=c(9),d=c.n(o),j=c(0),l=function(){var e=Object(a.f)(),t=Object(n.useRef)(),c=Object(n.useRef)(),i=Object(n.useRef)(),s=Object(n.useRef)();return Object(j.jsxs)("form",{className:d.a.form,onSubmit:function(n){n.preventDefault();var r={title:t.current.value,image:c.current.value,description:i.current.value,address:s.current.value};fetch("https://react-todo-12e28-default-rtdb.firebaseio.com/meetings.json",{method:"post",body:JSON.stringify(r),headers:{"content-type":"application/json"}}),e.push("/")},children:[Object(j.jsxs)("div",{className:d.a.control,children:[Object(j.jsx)("label",{htmlFor:"title",children:"Title"}),Object(j.jsx)("input",{type:"text",id:"title",ref:t})]}),Object(j.jsxs)("div",{className:d.a.control,children:[Object(j.jsx)("label",{htmlFor:"url",children:"Url"}),Object(j.jsx)("input",{type:"url",id:"url",ref:c})]}),Object(j.jsxs)("div",{className:d.a.control,children:[Object(j.jsx)("label",{htmlFor:"description",children:"Description"}),Object(j.jsx)("textarea",{id:"description",rows:"2",cols:"50",ref:i})]}),Object(j.jsxs)("div",{className:d.a.control,children:[Object(j.jsx)("label",{htmlFor:"address",children:"Address"}),Object(j.jsx)("input",{type:"text",id:"address",ref:s})]}),Object(j.jsx)("div",{className:d.a.actions,children:Object(j.jsx)("button",{children:"Add Meeting"})})]})},u=c(20),b=c.n(u),O=function(e){return Object(j.jsx)("div",{className:b.a.card,children:e.children})},h=function(){return Object(j.jsx)(O,{children:Object(j.jsx)(l,{})})},x=c(23),m=c(12),v=c(13),f=c.n(v),p=i.a.createContext({userFavorites:[],totalFavourites:0,addToFav:function(e){},removeFromFav:function(e){},itemInFav:function(e){}}),_=function(e){var t=Object(n.useState)([]),c=Object(m.a)(t,2),i=c[0],s=c[1],r={userFavorites:i,totalFavourites:i.length,addToFav:function(e){s((function(t){return t.concat(e)}))},removeFromFav:function(e){s((function(t){return t.filter((function(t){return t.id!==e}))}))},itemInFav:function(e){return i.some((function(t){return t.id===e}))}};return Object(j.jsx)(p.Provider,{value:r,children:e.children})},g=p,F=function(e){var t=Object(n.useContext)(g),c=t.itemInFav(e.id);return Object(j.jsx)(O,{children:Object(j.jsxs)("li",{className:f.a.item,children:[Object(j.jsx)("div",{className:f.a.image,children:Object(j.jsx)("img",{src:e.image,alt:"url"})}),Object(j.jsxs)("div",{className:f.a.content,children:[Object(j.jsx)("h2",{children:e.title}),Object(j.jsx)("p",{children:e.description}),Object(j.jsx)("address",{children:e.address})]}),Object(j.jsx)("div",{className:f.a.actions,children:Object(j.jsx)("button",{onClick:function(){c?t.removeFromFav(e.id):t.addToFav({id:e.id,title:e.title,description:e.description,address:e.address,image:e.image})},children:c?"Remove from Fav":"Add to Fav"})})]})})},N=c(21),M=c.n(N),y=function(e){return console.log(e.meetups),Object(j.jsx)("div",{children:Object(j.jsx)("ul",{className:M.a.list,children:e.meetups.map((function(e){return Object(j.jsx)(F,{id:e.id,image:e.image,title:e.title,address:e.address,description:e.description},e.id)}))})})},C=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)(!0),r=Object(m.a)(s,2),a=r[0],o=r[1];return Object(n.useEffect)((function(){o(!0),fetch("https://react-todo-12e28-default-rtdb.firebaseio.com/meetings.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var c in e){var n=Object(x.a)({id:c},e[c]);t.push(n)}i(t),o(!1)}))}),[]),a?Object(j.jsx)("p",{children:"Loading..."}):Object(j.jsx)("div",{children:Object(j.jsx)(y,{meetups:c})})},R=function(){var e=Object(n.useContext)(g);return 0===e.totalFavourites?Object(j.jsx)("p",{children:"No Favorites Found."}):Object(j.jsx)(y,{meetups:e.userFavorites})},w=c(7),I=c(10),L=c.n(I),S=function(){var e=Object(n.useContext)(g);return Object(j.jsxs)("header",{className:L.a.header,children:[Object(j.jsx)("div",{className:L.a.logo,children:"React Meet"}),Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(w.b,{to:"/",exact:!0,activeClassName:L.a.selected,children:"All Meetings"})}),Object(j.jsx)("li",{children:Object(j.jsx)(w.b,{to:"/new-meetings",activeClassName:L.a.selected,children:"Add Meetings"})}),Object(j.jsx)("li",{children:Object(j.jsxs)(w.b,{to:"/favorites",activeClassName:L.a.selected,children:["Favorites ",Object(j.jsx)("span",{children:e.totalFavourites})]})})]})})]})},A=c(22),k=c.n(A),T=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)(S,{}),Object(j.jsx)("main",{className:k.a.main,children:e.children})]})};var E=function(){return Object(j.jsx)(T,{children:Object(j.jsxs)(a.c,{children:[Object(j.jsx)(a.a,{path:"/",exact:!0,children:Object(j.jsx)(C,{})}),Object(j.jsx)(a.a,{path:"/new-meetings",children:Object(j.jsx)(h,{})}),Object(j.jsx)(a.a,{path:"/favorites",children:Object(j.jsx)(R,{})})]})})};r.a.render(Object(j.jsx)(_,{children:Object(j.jsx)(w.a,{children:Object(j.jsx)(E,{})})}),document.getElementById("root"))},9:function(e,t,c){e.exports={form:"NewMeeting_form__3KpqG",control:"NewMeeting_control__28gyz",actions:"NewMeeting_actions__3LEvR"}}},[[38,1,2]]]);
//# sourceMappingURL=main.332bdadd.chunk.js.map