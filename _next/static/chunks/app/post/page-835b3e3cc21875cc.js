(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[297],{8135:function(t,e,s){Promise.resolve().then(s.bind(s,4524))},1046:function(t,e,s){"use strict";s.d(e,{Z:function(){return g}});var a={};s.r(a),s.d(a,{getPostComments:function(){return d},getPostDetail:function(){return i},getPosts:function(){return o},postComments:function(){return h},postLike:function(){return l}});var n={};s.r(n),s.d(n,{postLogin:function(){return p},postSignUp:function(){return u}});var c={};s.r(c),s.d(c,{fetchVisits:function(){return m}});var r=s(8472);let o=async t=>{try{return(await r.Z.get("".concat("https://kjiyu-devlog.com","/api/post/list/").concat(t,"/view"),{withCredentials:!0})).data}catch(e){let t=e.response?e.response.data.message:e.message;throw Error("Error fetching posts: ".concat(t))}},i=async t=>{try{return(await r.Z.get("".concat("https://kjiyu-devlog.com","/api/post/").concat(t,"/detail"),{withCredentials:!0})).data}catch(e){let t=e.response?e.response.data.message:e.message;throw Error("Error fetching post detail: ".concat(t))}},l=async(t,e)=>{try{return(await r.Z.post("".concat("https://kjiyu-devlog.com","/api/post/").concat(t,"/like"),e,{headers:{"Content-Type":"application/json"}})).data}catch(e){let t=e.response?e.response.data.message:e.message;throw Error("Error posting like: ".concat(t))}},d=async t=>{try{return(await r.Z.get("".concat("https://kjiyu-devlog.com","/api/post/").concat(t,"/comments"))).data}catch(e){let t=e.response?e.response.data.message:e.message;throw Error("Error fetching post detail: ".concat(t))}},h=async(t,e)=>{try{return(await r.Z.post("".concat("https://kjiyu-devlog.com","/api/post/").concat(t,"/comments"),e)).data}catch(e){let t=e.response?e.response.data.message:e.message;throw Error("Error fetching post detail: ".concat(t))}},p=async t=>{try{return(await r.Z.post("".concat("https://kjiyu-devlog.com","/api/auth"),t,{headers:{"Content-Type":"application/json"}})).data}catch(t){throw t.response.data}},u=async t=>{try{return(await r.Z.post("".concat("https://kjiyu-devlog.com","/api/auth/signup"),t,{headers:{"Content-Type":"application/json"}})).data}catch(t){throw t.response.data}},m=async t=>{try{return(await r.Z.post("".concat("https://kjiyu-devlog.com","/api/visitor/visit"),t)).data}catch(t){throw t.response.data}};var g={post:a,auth:n,visit:c}},3776:function(t,e,s){"use strict";s.d(e,{w:function(){return a}});let a={OPEN_MODAL:"OPEN_MODAL",CLOSE_MODAL:"CLOSE_MODAL",OPEN_CONFIRM_MODAL:"OPEN_CONFIRM_MODAL",CLOSE_CONFIRM_MODAL:"CLOSE_CONFIRM_MODAL",LOGIN_SUCCESS:"LOGIN_SUCCESS",LOGOUT_SUCCESS:"LOGOUT_SUCCESS",SET_POSTS:"SET_POSTS"}},4524:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return m}});var a=s(7437),n=s(2265),c=s(1046),r=s(6463),o=s(5079),i=s(6920),l=t=>{let{children:e}=t,s=(0,r.useRouter)();return(0,a.jsxs)("div",{className:"footer-wrapper",children:[(0,a.jsx)(i.G,{icon:o.acZ,style:{marginRight:"5px"},onClick:()=>s.back()}),(0,a.jsx)(a.Fragment,{children:e})]})},d=s(1444),h=s(3580),p=s(3776);let u=()=>{let t=(0,d.I0)(),{auth:e,modal:s,postList:u}=(0,d.v9)(t=>({auth:t.auth,modal:t.modals.modal,postList:t.post.postList})),[m,g]=(0,n.useState)(!0),[j,v]=(0,n.useState)(null),[y,x]=(0,n.useState)([]),[N,f]=(0,n.useState)(!1),[w,C]=(0,n.useState)(!1),[k,_]=(0,n.useState)(""),O=j?j.likes.length:0,E=j?j.comments.length:0,S=(0,n.useMemo)(()=>{var t;return j?!!j.likes.includes(null==e?void 0:null===(t=e.user)||void 0===t?void 0:t.id):0},[j]),L=(0,r.useSearchParams)().get("id"),M=async t=>{if(e.isAuthenticated)try{let s=await c.Z.post.postLike(t,{userId:e.user.id,token:e.token});v(s)}catch(t){console.error("Error fetching post:",t)}finally{g(!1)}else P()},A=(0,n.useCallback)(async()=>{try{let t=j&&await c.Z.post.getPostComments(j._id);C(!w),t&&x(t)}catch(t){console.error("Error fetching post:",t)}},[j,e,w]),P=()=>{(0,h.Am)("로그인 후 이용 가능해요"),setTimeout(()=>{e.isAuthenticated||t({type:p.w.OPEN_MODAL,data:{type:"login",title:"Login"}})},500)},Z=async t=>{let s={contents:k,userId:e.user.id,userName:e.user.name,id:null==j?void 0:j._id};await c.Z.post.postComments(t,s).then(t=>{v(t),A(),(0,h.Am)("댓글을 작성했어요")})};return((0,n.useEffect)(()=>{(async()=>{if(!L){console.error("Post ID is missing"),g(!1);return}try{let t=await c.Z.post.getPostDetail(L);v(t)}catch(t){console.error("Error fetching post:",t)}finally{g(!1)}})()},[L]),m)?(0,a.jsx)("div",{children:"Loading..."}):j?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"detail-wrapper",children:[(0,a.jsx)("p",{className:"category",children:j.category.categoryName}),(0,a.jsx)("h2",{className:"title",children:j.title}),(0,a.jsxs)("div",{className:"info-wrap",children:[(0,a.jsx)("p",{className:"date",children:j.date}),(0,a.jsx)("span",{className:"separator",children:"|"}),(0,a.jsxs)("p",{className:"views",children:["조회수 ",j.views]})]}),(0,a.jsx)("div",{className:"content",dangerouslySetInnerHTML:{__html:j.contents}}),(0,a.jsxs)("div",{className:"like-cmt-wrap",children:[(0,a.jsxs)("button",{className:"likes ".concat(S?"mylike":""),onClick:()=>M(j._id),children:[(0,a.jsx)(i.G,{icon:o.m6i}),O]}),(0,a.jsxs)("button",{className:"cmt ".concat(N?"cmtOpen":""),onClick:()=>{f(!N),N||A()},children:[(0,a.jsx)(i.G,{icon:o.Mzg}),E]})]}),N&&(0,a.jsxs)("div",{className:"content cmt-wrap",children:[(0,a.jsx)("div",{className:"cmt-header",children:"댓글"}),0===y.length&&(0,a.jsx)("div",{className:"no-cmt",children:"댓글이 없습니다."}),y.length>0&&y.map(t=>(0,a.jsxs)("div",{className:"cmt-container",children:[(0,a.jsx)("p",{className:"creator",children:t.creatorName}),(0,a.jsx)("p",{className:"date",children:t.date}),(0,a.jsx)("p",{className:"contents",children:t.contents})]},t._id)),(0,a.jsxs)("div",{className:"input-wrap",children:[(0,a.jsx)("input",{value:k,onChange:t=>_(t.target.value),onClick:e.isAuthenticated?()=>{}:P,placeholder:"".concat(e.isAuthenticated?"내용을 입력해주세요":"댓글 작성은 로그인 후 가능합니다")}),e.isAuthenticated&&(0,a.jsx)("button",{onClick:()=>Z(j._id),children:"댓글 작성"})]})]})]}),(0,a.jsx)(l,{children:(0,a.jsx)("div",{className:"right-wrap",children:(0,a.jsxs)("p",{className:"likes_cmt",children:[(0,a.jsxs)("div",{className:"likes",onClick:()=>M(j._id),children:[(0,a.jsx)(i.G,{icon:o.m6i}),O]}),(0,a.jsxs)("div",{className:"cmt",onClick:()=>{f(!0),A().then(()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})})},children:[(0,a.jsx)(i.G,{icon:o.Mzg}),E]})]})})})]}):(0,a.jsx)("div",{children:"Post not found"})};var m=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.Suspense,{fallback:(0,a.jsx)("div",{children:"Loading..."}),children:(0,a.jsx)(u,{})})})}},function(t){t.O(0,[676,58,920,580,971,23,744],function(){return t(t.s=8135)}),_N_E=t.O()}]);