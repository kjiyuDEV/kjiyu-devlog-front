(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1955:function(e,t,a){Promise.resolve().then(a.bind(a,7587))},8515:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var s={};a.r(s),a.d(s,{getPostDetail:function(){return r},getPosts:function(){return i},postLike:function(){return c}});var n={};a.r(n),a.d(n,{postLogin:function(){return l},postSignUp:function(){return d}});var o=a(8472);let i=async e=>{try{return(await o.Z.get("".concat("https://kjiyu-devlog.com","/api/post/list/").concat(e,"/view"),{withCredentials:!0})).data}catch(t){let e=t.response?t.response.data.message:t.message;throw Error("Error fetching posts: ".concat(e))}},r=async e=>{try{return(await o.Z.get("".concat("https://kjiyu-devlog.com","/api/post/").concat(e,"/detail"),{withCredentials:!0})).data}catch(t){let e=t.response?t.response.data.message:t.message;throw Error("Error fetching post detail: ".concat(e))}},c=async(e,t)=>{try{return(await o.Z.post("".concat("https://kjiyu-devlog.com","/api/post/").concat(e,"/like"),t,{headers:{"Content-Type":"application/json"}})).data}catch(t){let e=t.response?t.response.data.message:t.message;throw Error("Error posting like: ".concat(e))}},l=async e=>{try{return(await o.Z.post("".concat("https://kjiyu-devlog.com","/api/auth"),e,{headers:{"Content-Type":"application/json"}})).data}catch(e){throw e.response.data}},d=async e=>{try{return(await o.Z.post("".concat("https://kjiyu-devlog.com","/api/auth/signup"),e,{headers:{"Content-Type":"application/json"}})).data}catch(e){throw e.response.data}};var p={post:s,auth:n}},3776:function(e,t,a){"use strict";a.d(t,{w:function(){return s}});let s={OPEN_MODAL:"OPEN_MODAL",CLOSE_MODAL:"CLOSE_MODAL",OPEN_CONFIRM_MODAL:"OPEN_CONFIRM_MODAL",CLOSE_CONFIRM_MODAL:"CLOSE_CONFIRM_MODAL",LOGIN_SUCCESS:"LOGIN_SUCCESS",LOGOUT_SUCCESS:"LOGOUT_SUCCESS"}},7587:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return w}});var s=a(7437),n=a(6648),o=a(6463),i=a(1444),r=a(2265),c=a(5079),l=a(6920),d=e=>{let{children:t}=e,a=(0,i.I0)(),{modal:n}=(0,i.v9)(e=>(console.log(e,"<state"),{modal:e.modals.modal,auth:e.auth}));return n.open?(0,s.jsx)("div",{className:"modal-overlay",children:(0,s.jsxs)("div",{className:"modal-content",children:[n.data.title&&(0,s.jsx)("h2",{className:"modal-title",children:n.data.title}),(0,s.jsx)("button",{className:"modal-close",onClick:()=>{a({type:"CLOSE_MODAL"})},children:(0,s.jsx)(l.G,{icon:c.NBC})}),(0,s.jsx)("div",{className:"modal-body",children:t})]})}):null},p=a(8515),u=a(3580),h=a(3776),m=()=>{let e=(0,i.I0)(),t=(0,o.useRouter)(),{modal:a,confirmModal:n,auth:c}=(0,i.v9)(e=>({modal:e.modals.modal,auth:e.auth,confirmModal:e.modals.confirmModal})),[l,m]=(0,r.useState)(""),[g,w]=(0,r.useState)(""),[y,N]=(0,r.useState)(""),j=()=>{p.Z.auth.postLogin({userId:l,password:g}).then(async a=>{N(""),e({type:h.w.CLOSE_MODAL}),await t.push("/list"),e({type:h.w.LOGIN_SUCCESS,payload:a}),(0,u.Am)("".concat(a.user.name,"님, 안녕하세요!"))}).catch(e=>{"01"===e.code&&w(""),N(e.msg)})};return(0,s.jsxs)(d,{children:[(0,s.jsxs)("div",{className:"input-wrap",children:[(0,s.jsx)("input",{value:l,className:"login-input id",type:"text",placeholder:"ID",onChange:e=>{m(e.target.value)},onKeyDown:e=>{"Enter"===e.key&&j()}}),(0,s.jsx)("input",{value:g,className:"login-input password",type:"password",placeholder:"Password",onChange:e=>{w(e.target.value)},onKeyDown:e=>{"Enter"===e.key&&j()}})]}),""!==y&&(0,s.jsx)("h5",{className:"error login-msg",children:y}),(0,s.jsx)("button",{className:"login-button",onClick:j,children:"Login"})]})},g=()=>{let e=(0,i.I0)(),[t,a]=(0,r.useState)({name:"",nickname:"",id:"",password1:"",password2:""}),[n,o]=(0,r.useState)(""),c=e=>{o(""),a({...t,[e.target.name]:e.target.value})},l=async()=>{let a={userId:t.id,name:t.name,password:t.password2,nickname:t.nickname};await p.Z.auth.postSignUp(a).then(t=>{e({type:h.w.CLOSE_MODAL,payload:t}),e({type:h.w.LOGIN_SUCCESS,payload:t}),u.Am.success("회원가입이 완료되었습니다.")}).catch(e=>{o(e.msg)})};return(0,s.jsxs)(d,{children:[(0,s.jsxs)("div",{className:"input-wrap signup",children:[(0,s.jsx)("input",{value:t.name,className:"login-input name",type:"text",placeholder:"이름 (Name, 특수문자 및 숫자 제외 가능)",name:"name",onChange:c}),(0,s.jsx)("input",{value:t.nickname,className:"login-input name",type:"text",placeholder:"별명 (Nickname, 공백시 이름과 동일)",name:"nickname",onChange:c}),(0,s.jsx)("input",{value:t.id,className:"login-input id",type:"text",placeholder:"아이디 (id)",name:"id",onChange:c}),(0,s.jsx)("input",{value:t.password1,className:"login-input password",type:"password",placeholder:"비밀번호 (password)",name:"password1",onChange:c}),(0,s.jsx)("input",{value:t.password2,className:"login-input password",type:"password",placeholder:"비밀번호 확인 (password check)",name:"password2",onChange:c})]}),""!==n&&(0,s.jsx)("h5",{className:"error login-msg",children:n}),(0,s.jsx)("button",{className:"login-button",onClick:l,children:"등록하기"})]})};function w(){let e=(0,o.useRouter)(),t=(0,i.I0)(),{modal:a,auth:r}=(0,i.v9)(e=>({modal:e.modals.modal,auth:e.auth})),c=()=>{r.isAuthenticated&&t({type:h.w.OPEN_CONFIRM_MODAL,data:{type:"logout",content:"로그아웃 하시겠어요?"}}),r.isAuthenticated||t({type:h.w.OPEN_MODAL,data:{type:"login",title:"Login"}})},l=()=>{r.isAuthenticated||t({type:h.w.OPEN_MODAL,data:{type:"signUp",title:"회원가입"}})};return(0,s.jsxs)("div",{className:"main-wrapper",children:[(0,s.jsxs)("div",{className:"main-wrap",children:[(0,s.jsx)("h1",{children:"Kjiyu-dev-log"}),(0,s.jsx)("h3",{children:"frontend-developer"}),(0,s.jsx)(n.default,{src:"https://cdn1.iconfinder.com/data/icons/3d-isometric-color/512/computer-iso-color.png",alt:"main-illust",width:"300",height:"300"}),(0,s.jsx)("p",{children:"일상 및 개발일지를 기록 합니다."}),(0,s.jsx)("p",{children:"React/Typescript/NextJs, Node"})]}),(0,s.jsxs)("div",{className:"sign-wrap",children:[(0,s.jsx)("button",{onClick:()=>{c()},children:r.isAuthenticated?"Logout":"Login"}),(0,s.jsxs)("div",{className:"new-container",children:[!r.isAuthenticated&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{children:"New here?"}),(0,s.jsx)("button",{onClick:()=>{l()},children:"Register"})]}),(0,s.jsx)("p",{className:"just-view",onClick:()=>{e.push("/list")},children:r.isAuthenticated?"Go List":"Just View"})]})]}),"login"===a.data.type&&(0,s.jsx)(m,{}),"signUp"===a.data.type&&(0,s.jsx)(g,{})]})}}},function(e){e.O(0,[676,194,472,580,648,971,23,744],function(){return e(e.s=1955)}),_N_E=e.O()}]);