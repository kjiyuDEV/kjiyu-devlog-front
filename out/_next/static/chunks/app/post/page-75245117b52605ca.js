(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[297],{8135:function(e,t,s){Promise.resolve().then(s.bind(s,4524))},8515:function(e,t,s){"use strict";s.d(t,{Z:function(){return p}});var a={};s.r(a),s.d(a,{getPostComments:function(){return l},getPostDetail:function(){return o},getPosts:function(){return c},postLike:function(){return i}});var n={};s.r(n),s.d(n,{postLogin:function(){return d},postSignUp:function(){return h}});var r=s(8472);let c=async e=>{try{return(await r.Z.get("".concat("https://kjiyu-devlog.com","/api/post/list/").concat(e,"/view"),{withCredentials:!0})).data}catch(t){let e=t.response?t.response.data.message:t.message;throw Error("Error fetching posts: ".concat(e))}},o=async e=>{try{return(await r.Z.get("".concat("https://kjiyu-devlog.com","/api/post/").concat(e,"/detail"),{withCredentials:!0})).data}catch(t){let e=t.response?t.response.data.message:t.message;throw Error("Error fetching post detail: ".concat(e))}},i=async(e,t)=>{try{return(await r.Z.post("".concat("https://kjiyu-devlog.com","/api/post/").concat(e,"/like"),t,{headers:{"Content-Type":"application/json"}})).data}catch(t){let e=t.response?t.response.data.message:t.message;throw Error("Error posting like: ".concat(e))}},l=async e=>{console.log(e,"<id");try{return(await r.Z.get("".concat("https://kjiyu-devlog.com","/api/post/").concat(e,"/comments"))).data}catch(t){let e=t.response?t.response.data.message:t.message;throw Error("Error fetching post detail: ".concat(e))}},d=async e=>{try{return(await r.Z.post("".concat("https://kjiyu-devlog.com","/api/auth"),e,{headers:{"Content-Type":"application/json"}})).data}catch(e){throw e.response.data}},h=async e=>{try{return(await r.Z.post("".concat("https://kjiyu-devlog.com","/api/auth/signup"),e,{headers:{"Content-Type":"application/json"}})).data}catch(e){throw e.response.data}};var p={post:a,auth:n}},4524:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return m}});var a=s(7437),n=s(2265),r=s(8515),c=s(6463),o=s(5079),i=s(6920),l=e=>{let{children:t}=e,s=(0,c.useRouter)();return(0,a.jsxs)("div",{className:"footer-wrapper",children:[(0,a.jsx)(i.G,{icon:o.acZ,style:{marginRight:"5px"},onClick:()=>s.back()}),(0,a.jsx)(a.Fragment,{children:t})]})},d=s(1444),h=s(3580),p=s(4398);let u=()=>{let{auth:e}=(0,d.v9)(e=>({auth:e.auth})),[t,s]=(0,n.useState)(!0),[u,m]=(0,n.useState)(null),[g,j]=(0,n.useState)([]),[x,v]=(0,n.useState)(!1),[y,f]=(0,n.useState)(!1),k=u?u.likes.length:0,w=u?u.comments.length:0,N=(0,n.useMemo)(()=>{var t;return u?!!u.likes.includes(null==e?void 0:null===(t=e.user)||void 0===t?void 0:t.id):0},[u]),C=(0,c.useSearchParams)().get("id"),E=async t=>{if(e.isAuthenticated)try{let s=await r.Z.post.postLike(t,{userId:e.user.id,token:e.token});m(s)}catch(e){console.error("Error fetching post:",e)}finally{s(!1)}else(0,h.Am)("로그인 후 이용해주세요.")},_=(0,n.useCallback)(async()=>{if(!y)try{let e=u&&await r.Z.post.getPostComments(u._id);f(!0),e&&j(e)}catch(e){console.error("Error fetching post:",e)}},[u,e,y]);return((0,n.useEffect)(()=>{(async()=>{if(!C){console.error("Post ID is missing"),s(!1);return}try{let e=await r.Z.post.getPostDetail(C);m(e)}catch(e){console.error("Error fetching post:",e)}finally{s(!1)}})()},[C]),t)?(0,a.jsx)("div",{children:"Loading..."}):u?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"detail-wrapper",children:[(0,a.jsx)("p",{className:"category",children:u.category.categoryName}),(0,a.jsx)("h2",{className:"title",children:u.title}),(0,a.jsxs)("div",{className:"info-wrap",children:[(0,a.jsx)("p",{className:"date",children:u.date}),(0,a.jsx)("span",{className:"separator",children:"|"}),(0,a.jsxs)("p",{className:"views",children:["조회수 ",u.views]})]}),(0,a.jsx)("div",{className:"content",dangerouslySetInnerHTML:{__html:u.contents}}),p.nI&&(0,a.jsxs)("div",{className:"like-cmt-wrap",children:[(0,a.jsxs)("button",{className:"likes ".concat(N?"mylike":""),onClick:()=>E(u._id),children:[(0,a.jsx)(i.G,{icon:o.m6i}),k]}),(0,a.jsxs)("button",{className:"cmt ".concat(x?"cmtOpen":""),onClick:()=>{v(!x),x||_()},children:[(0,a.jsx)(i.G,{icon:o.Mzg}),w]})]}),x&&(0,a.jsxs)("div",{className:"content cmt-wrap",children:[(0,a.jsx)("div",{className:"cmt-header",children:"댓글"}),g.map(e=>(0,a.jsxs)("div",{className:"cmt-container",children:[(0,a.jsx)("p",{className:"creator",children:e.creatorName}),(0,a.jsx)("p",{className:"date",children:e.date}),(0,a.jsx)("p",{className:"contents",children:e.contents})]},e._id))]})]}),(0,a.jsx)(l,{children:(0,a.jsx)("div",{className:"right-wrap",children:(0,a.jsxs)("p",{className:"likes_cmt",children:[(0,a.jsxs)("div",{className:"likes",onClick:()=>E(u._id),children:[(0,a.jsx)(i.G,{icon:o.m6i}),k]}),(0,a.jsxs)("div",{className:"cmt onClick={handleCmtModal}",children:[(0,a.jsx)(i.G,{icon:o.Mzg}),w]})]})})})]}):(0,a.jsx)("div",{children:"Post not found"})};var m=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.Suspense,{fallback:(0,a.jsx)("div",{children:"Loading..."}),children:(0,a.jsx)(u,{})})})}},function(e){e.O(0,[676,194,472,580,858,971,23,744],function(){return e(e.s=8135)}),_N_E=e.O()}]);