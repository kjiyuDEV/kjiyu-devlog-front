(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[297],{8135:function(e,t,s){Promise.resolve().then(s.bind(s,654))},2851:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var a={};s.r(a),s.d(a,{getPostDetail:function(){return c},getPosts:function(){return n}});var r=s(8472);let n=async e=>{try{return(await r.Z.get("".concat("https://kjiyu-devlog.com","/api/post/list/").concat(e,"/view"),{withCredentials:!0})).data}catch(t){let e=t.response?t.response.data.message:t.message;throw Error("Error fetching posts: ".concat(e))}},c=async e=>{try{return(await r.Z.get("".concat("https://kjiyu-devlog.com","/api/post/").concat(e,"/detail"),{withCredentials:!0})).data}catch(t){let e=t.response?t.response.data.message:t.message;throw Error("Error fetching post detail: ".concat(e))}};var i={post:a}},654:function(e,t,s){"use strict";s.r(t);var a=s(7437),r=s(2265),n=s(2851),c=s(6463);let i=()=>{let[e,t]=(0,r.useState)(null),[s,i]=(0,r.useState)(!0),o=(0,c.useSearchParams)().get("id");return((0,r.useEffect)(()=>{(async()=>{if(!o){console.error("Post ID is missing"),i(!1);return}try{let e=await n.Z.post.getPostDetail(o);t(e)}catch(e){console.error("Error fetching post:",e)}finally{i(!1)}})()},[o]),s)?(0,a.jsx)("div",{children:"Loading..."}):e?(0,a.jsxs)("div",{className:"detail-wrapper",children:[(0,a.jsx)("p",{className:"category",children:e.category.categoryName}),(0,a.jsx)("h2",{className:"title",children:e.title}),(0,a.jsxs)("div",{className:"info-wrap",children:[(0,a.jsx)("p",{className:"date",children:e.date}),(0,a.jsx)("span",{className:"separator",children:"|"})," ",(0,a.jsxs)("p",{className:"views",children:["조회수 ",e.views]})]}),(0,a.jsx)("div",{className:"content",dangerouslySetInnerHTML:{__html:e.contents}})]}):(0,a.jsx)("div",{children:"Post not found"})};t.default=()=>(0,a.jsx)(r.Suspense,{fallback:(0,a.jsx)("div",{children:"Loading..."}),children:(0,a.jsx)(i,{})})}},function(e){e.O(0,[236,971,23,744],function(){return e(e.s=8135)}),_N_E=e.O()}]);