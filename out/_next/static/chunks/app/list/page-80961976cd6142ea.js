(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[122],{2116:function(e,t,s){Promise.resolve().then(s.bind(s,659))},2851:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var a={};s.r(a),s.d(a,{getPostDetail:function(){return n},getPosts:function(){return r}});var c=s(8472);let r=async e=>{try{return(await c.Z.get("".concat("https://kjiyu-devlog.com","/api/post/list/").concat(e,"/view"),{withCredentials:!0})).data}catch(t){let e=t.response?t.response.data.message:t.message;throw Error("Error fetching posts: ".concat(e))}},n=async e=>{try{return(await c.Z.get("".concat("https://kjiyu-devlog.com","/api/post/").concat(e,"/detail"),{withCredentials:!0})).data}catch(t){let e=t.response?t.response.data.message:t.message;throw Error("Error fetching post detail: ".concat(e))}};var i={post:a}},659:function(e,t,s){"use strict";s.r(t);var a=s(7437),c=s(2265),r=s(6920),n=s(5079),i=s(2851),o=s(6463);t.default=()=>{let e=(0,o.useRouter)(),[t,s]=(0,c.useState)([]),[l,d]=(0,c.useState)([]),[h,p]=(0,c.useState)("all"),u=async e=>{p(e);try{let t=await i.Z.post.getPosts(e);s(t.postsList)}catch(e){console.error("Error fetching data:",e)}},m=async()=>{try{let e=await i.Z.post.getPosts("all");s(e.postsList),d([{categoryName:"전체",_id:"all"},...e.categoryFindResult])}catch(e){console.error("Error fetching data:",e)}};return(0,c.useEffect)(()=>{m()},[]),(0,a.jsxs)("div",{className:"wrapper",children:[(0,a.jsx)("div",{className:"ctgr-wrap",children:l.map(e=>(0,a.jsx)("p",{className:"pointer ".concat(h===e._id?"active":""),onClick:()=>u(e._id),children:e.categoryName}))}),(0,a.jsx)("div",{className:"list-wrap",children:t.map(t=>{var s;return(0,a.jsxs)("div",{className:"list-container",children:[(0,a.jsx)("h4",{className:"title",children:t.title}),(0,a.jsxs)("div",{className:"info",children:[(0,a.jsx)("p",{className:"category",children:null===(s=l.find(e=>e._id===t.category))||void 0===s?void 0:s.categoryName}),(0,a.jsx)("p",{className:"date",children:t.date}),(0,a.jsxs)("p",{className:"likes_cmt",children:[(0,a.jsxs)("div",{className:"likes",children:[(0,a.jsx)(r.G,{icon:n.m6i}),t.likes.length]}),(0,a.jsxs)("div",{className:"cmt",children:[(0,a.jsx)(r.G,{icon:n.Mzg}),t.comments.length]})]})]}),(0,a.jsx)("div",{className:"content",children:t.previewContents}),(0,a.jsx)("button",{className:"read",onClick:()=>e.push("/post/?id=".concat(t._id)),children:"Read more"})]})})})]})}}},function(e){e.O(0,[676,236,920,971,23,744],function(){return e(e.s=2116)}),_N_E=e.O()}]);