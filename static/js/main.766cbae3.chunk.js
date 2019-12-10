(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{19:function(t,n,e){t.exports=e(31)},30:function(t,n,e){},31:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),i=e(13),o=e.n(i),l=(e(24),e(14)),c=e(8),d=e(3),u=e(4),p=e(6),f=e(5),s=e(7),m=e(1),h=e(2);function x(){var t=Object(m.a)(["\n    font-size: 40px;\n    font-weight: 700;\n    color: #35308f;\n    @media (max-width: 767px) and (orientation: portrait) {\n        margin-bottom: 15px;\n    }\n    @media (max-width: 767px) {\n        font-size: 32px;\n    }\n"]);return x=function(){return t},t}var b=h.a.h1(x()),g=function(){return r.a.createElement(b,null,"My TODO List")};function v(){var t=Object(m.a)(["\n    font-size: 12px;\n    line-height: 18px;\n    color: #fff;\n    position: absolute;\n    left: 0;\n    top: 0;\n    margin-top: 1px;\n    width: 19px;\n    height: 19px;\n    border-radius: 3px;\n    border: 1px solid #a7a7a7;\n    text-align: center;\n    z-index: 1;\n    transition: all .3s;\n    &:before {\n        opacity: 0;\n        z-index: 1;\n        transition: all .3s;\n    }\n"]);return v=function(){return t},t}function O(){var t=Object(m.a)(["\n    flex: 1;\n    cursor: pointer;\n    padding: 0 15px 0 29px;\n    position: relative;\n    &:hover {\n        i {\n            border-color: #4fa441;\n        }\n    }\n    &.active {\n        color: #a7a7a7;\n        span {\n            text-decoration: line-through;\n        }\n        i {\n            background-color: #4fa441;\n            border-color: #4fa441;\n            &:before {\n                opacity: 1;\n            }\n        }\n    }\n"]);return O=function(){return t},t}function y(){var t=Object(m.a)(["\n    width: 100px;\n    display: inline-block;\n    vertical-align: top;\n    background-color: #34a50f;\n    border: none;\n    font-size: 14px;\n    font-weight: 600;\n    color: #fff;\n    box-shadow: none;\n    line-height: 34px;\n    border-radius: 4px;\n    cursor: pointer;\n    transition: all .3s;\n    &:hover {\n        background-color: #2a890b;\n    }\n    @media (max-width: 767px) {\n        font-size: 0;\n        position: relative;\n        width: 34px;\n        &:after {\n            content: '\\f067';\n            font-family: FontAwesome;\n            font-size: 16px;\n            line-height: 36px;\n            color: #fff;\n            position: absolute;\n            left: 1px;\n            top: 0;\n            text-align: center;\n            width: 100%;\n            height: 100%;\n        }\n    }\n"],["\n    width: 100px;\n    display: inline-block;\n    vertical-align: top;\n    background-color: #34a50f;\n    border: none;\n    font-size: 14px;\n    font-weight: 600;\n    color: #fff;\n    box-shadow: none;\n    line-height: 34px;\n    border-radius: 4px;\n    cursor: pointer;\n    transition: all .3s;\n    &:hover {\n        background-color: #2a890b;\n    }\n    @media (max-width: 767px) {\n        font-size: 0;\n        position: relative;\n        width: 34px;\n        &:after {\n            content: '\\\\f067';\n            font-family: FontAwesome;\n            font-size: 16px;\n            line-height: 36px;\n            color: #fff;\n            position: absolute;\n            left: 1px;\n            top: 0;\n            text-align: center;\n            width: 100%;\n            height: 100%;\n        }\n    }\n"]);return y=function(){return t},t}function j(){var t=Object(m.a)(["\n    width: calc(100% - 110px);\n    display: inline-block;\n    vertical-align: top;\n    border: none;\n    box-shadow: none;\n    background-color: #F9F9F9;\n    border-radius: 4px;\n    font-size: 16px;\n    font-weight: 400;\n    font-family: 'Nunito', sans-serif;\n    padding: 0 12px;\n    height: 34px;\n    margin-right: 10px;\n    &::placeholder {\n        color: #757575;\n    }                                   \n    @media (max-width: 767px) {\n        width: calc(100% - 44px);\n    }\n"]);return j=function(){return t},t}function w(){var t=Object(m.a)(["\n    padding: 10px 20px 10px 37px;\n    @media (max-width: 767px) {\n        padding: 10px 10px 10px 27px;\n    }\n"]);return w=function(){return t},t}var E=h.a.form(w()),k=h.a.input(j()),C=h.a.button(y()),S=h.a.label(O()),D=h.a.i(v()),I=function(t){return r.a.createElement(E,t)},N=function(t){return r.a.createElement(k,t)},F=function(t){return r.a.createElement(C,t)},z=function(t){return r.a.createElement(S,t)},A=function(t){return r.a.createElement(D,t)};function J(){var t=Object(m.a)(["\n    pointer-events: ",";\n    opacity: ",";\n"]);return J=function(){return t},t}function P(){var t=Object(m.a)(["\n    font-size: 18px;\n    color: #a7a7a7;\n    cursor: pointer;\n    margin-left: 15px;\n    transition: all .3s ease;\n    &:hover {\n        color: ",";\n    }\n"]);return P=function(){return t},t}function T(){var t=Object(m.a)(["\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    list-style-type: none;\n    border-top: 2px solid #f4f6fb;\n    padding: 14px 20px;\n    @media (max-width: 767px) {\n        padding: 14px 10px;\n    }\n"]);return T=function(){return t},t}var M=h.a.li(T()),R=h.a.i(P(),(function(t){return t.delete?"#f80c0c":"#302c83"})),U=h.a.div(J(),(function(t){return t.disabled?"none":"all"}),(function(t){return t.disabled?".4":"1"})),H=function(t){var n=t.title,e=t.completed,a=t.edit,i=t.handleComplete,o=t.handleEdit,l=t.handleDelete,c=e?"active":"",d=a?"disabled":"";return r.a.createElement(M,null,r.a.createElement(z,{className:c,onClick:i,completed:!!e},r.a.createElement(A,{className:"fa fa-check"}),r.a.createElement("span",null,n)),r.a.createElement(U,{disabled:d},r.a.createElement("button",{onClick:o},r.a.createElement(R,{className:"fa fa-edit"})),r.a.createElement("button",{onClick:l},r.a.createElement(R,{delete:!0,className:"fa fa-trash-o"}))))};function q(){var t=Object(m.a)(["\n    border-top: 2px solid #f4f6fb;\n    padding: 14px 49px;\n    @media (max-width: 767px) {\n        padding: 14px 39px;\n    }\n"]);return q=function(){return t},t}var B=h.a.li(q()),L=function(t){var n=t.data,e=t.edit,a=t.handleComplete,i=t.handleEdit,o=t.handleDelete,l=n.map((function(t){var n=t.id,l=t.title;return r.a.createElement(H,Object.assign({key:n,edit:e},t,{handleComplete:function(){return a(n)},handleEdit:function(){return i(n,l)},handleDelete:function(){return o(n)}}))}));return r.a.createElement("div",{className:"todo-list"},r.a.createElement("ul",null,l.length>0?l:r.a.createElement(B,null,"No tasks")))},Q=function(t){function n(){var t,e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=Object(p.a)(this,(t=Object(f.a)(n)).call.apply(t,[this].concat(r)))).state={title:""},e.handleInputChange=function(t){e.setState({title:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.setState({title:""}),e.props.onAddItem(e.state.title)},e}return Object(s.a)(n,t),Object(u.a)(n,[{key:"render",value:function(){var t=this.state.title;return r.a.createElement("div",{className:"new-item-list"},r.a.createElement(I,{onSubmit:this.handleSubmit},r.a.createElement(N,{type:"text",value:t,placeholder:"Type your task",onChange:this.handleInputChange}),r.a.createElement(F,null,"Add task")))}}]),n}(a.Component);function V(){var t=Object(m.a)(["\n    @media (max-width: 767px) {\n        &:after {\n            content: '\f021';\n        }\n    }\n"],["\n    @media (max-width: 767px) {\n        &:after {\n            content: '\\f021';\n        }\n    }\n"]);return V=function(){return t},t}function G(){var t=Object(m.a)(["\n    width: calc(100% - 110px);\n    display: inline-block;\n    vertical-align: top;\n    border: none;\n    box-shadow: none;\n    background-color: #F9F9F9;\n    border-radius: 4px;\n    font-size: 16px;\n    font-weight: 400;\n    font-family: 'Nunito', sans-serif;\n    padding: 0 12px;\n    height: 34px;\n    margin-right: 10px;\n    &::placeholder {\n        color: #757575;\n    }                                   \n    @media (max-width: 767px) {\n        width: calc(100% - 44px);\n    }\n"]);return G=function(){return t},t}var K=h.a.input(G()),W=Object(h.a)(F)(V()),X=function(t){function n(){var t,e;Object(d.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=Object(p.a)(this,(t=Object(f.a)(n)).call.apply(t,[this].concat(i)))).inputRef=r.a.createRef(),e.HandleSubmit=function(t){t.preventDefault(),e.props.onEditItem(t.target.updatedInput.value)},e}return Object(s.a)(n,t),Object(u.a)(n,[{key:"componentDidMount",value:function(){this.inputRef.current.focus()}},{key:"render",value:function(){return r.a.createElement("div",{className:"new-item-list"},r.a.createElement(I,{onSubmit:this.HandleSubmit},r.a.createElement(K,{type:"text",defaultValue:this.props.editTitle,name:"updatedInput",ref:this.inputRef}),r.a.createElement(W,{update:!0},"Update task")))}}]),n}(a.Component);function Y(){var t=Object(m.a)(["\n    padding-left: 3px;\n"]);return Y=function(){return t},t}function Z(){var t=Object(m.a)(["\n    background-color: transparent;\n    border: none;\n    padding: 10px 20px 13px;\n    display: inline-block;\n    vertical-align: top;\n    font-size: 16px;\n    font-weight: 600;\n    text-align: center;\n    border-radius: 4px;\n    color: ",";\n    background-color: ",";\n    cursor: pointer;\n    transition: all .3s;\n    &:hover {\n        color: #302c83;\n    }\n    @media (max-width: 767px) {\n        padding: 7px 16px 10px;\n    }\n"]);return Z=function(){return t},t}var $=h.a.button(Z(),(function(t){return t.active?"#302c83":"#928fd3"}),(function(t){return t.active?"#fff":"transparent"})),_=h.a.sup(Y()),tt=function(t){var n=t.activeFilter,e=t.handleFilter,a=t.totalCount,i=t.completedCount,o=[{id:"all",title:"All",amount:a},{id:"active",title:"Active",amount:a-i},{id:"completed",title:"Completed",amount:i}];return r.a.createElement("div",{className:"filter-tab"},o.map((function(t){var a=t.id,i=t.title,o=t.amount;return r.a.createElement($,{key:a,id:a,className:a===n?"active":"",active:a===n,onClick:e},i,r.a.createElement(_,null,o))})))};function nt(){var t=Object(m.a)(["\n    margin-right: 5px;\n    font-size: 12px;\n"]);return nt=function(){return t},t}function et(){var t=Object(m.a)(["\n    float: right;\n    color: #928fd3;\n    cursor: pointer;\n    transition: all .3s ease;\n    &:hover {\n        color: #f80c0c;\n    }\n"]);return et=function(){return t},t}function at(){var t=Object(m.a)(["\n    margin-top: 0;\n"]);return at=function(){return t},t}function rt(){var t=Object(m.a)(["\n    &.active {\n        color: #4fa441;\n        span {\n            text-decoration: none;\n        }\n    }\n"]);return rt=function(){return t},t}function it(){var t=Object(m.a)(["\n    padding: 20px 20px 0;\n    font-size: 14px;\n    @media (max-width: 767px) {\n        padding: 14px 10px;\n    }  \n"]);return it=function(){return t},t}var ot=h.a.div(it()),lt=Object(h.a)(z)(rt()),ct=Object(h.a)(A)(at()),dt=h.a.button(et()),ut=h.a.i(nt()),pt=function(t){var n=t.handleCheck,e=t.handleClear,a=t.totalCount,i=t.completedCount,o=i===a?"active":"";return r.a.createElement(ot,null,a>0&&r.a.createElement(lt,{className:o,onClick:n},r.a.createElement(ct,{className:"fa fa-check"}),"Check all tasks"),i>0&&r.a.createElement(dt,{onClick:e},r.a.createElement(ut,{className:"fa fa-times"}),"Clear completed"))};e(30);function ft(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function st(){var t=Object(m.a)(["\n    background-color: #fff;\n    border-radius: 4px;\n    overflow: hidden;\n"]);return st=function(){return t},t}function mt(){var t=Object(m.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 30px;\n    padding-left: 20px;\n    @media (max-width: 767px) and (orientation: portrait) {\n        display: block;\n        margin-bottom: 20px;\n        padding-left: 10px;\n    }\n"]);return mt=function(){return t},t}function ht(){var t=Object(m.a)(["\n    width: 830px;\n    max-width: 100%;\n    margin: 0 auto;\n    padding: 40px 15px;\n    @media (max-width: 767px) {\n        padding: 30px 15px;\n    }\n"]);return ht=function(){return t},t}var xt=h.a.div(ht()),bt=h.a.div(mt()),gt=h.a.div(st()),vt=[{id:1,title:"Delectus aut autem",completed:!1},{id:2,title:"Quis ut nam facilis et officia qui",completed:!1},{id:3,title:"Molestiae ipsa aut voluptatibus pariatur dolor nihil",completed:!0}],Ot=function(t){function n(){var t,e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=Object(p.a)(this,(t=Object(f.a)(n)).call.apply(t,[this].concat(r)))).state={data:[],activeFilter:"all",edit:!1,editId:null,editTitle:""},e.handleComplete=function(t){var n=e.state.data,a=n.findIndex((function(n){return n.id===t}));n[a].completed=!n[a].completed,e.setState({data:n}),localStorage.setItem("todoData",JSON.stringify(n))},e.handleDelete=function(t){var n=e.state.data.filter((function(n){return n.id!==t}));e.setState({data:n}),localStorage.setItem("todoData",JSON.stringify(n))},e.handleFilter=function(t){e.setState({activeFilter:t.target.getAttribute("id")})},e.handleAddItem=function(t){var n=+new Date,a={id:n,title:t,completed:!1};a.key=n;var r=[a].concat(Object(c.a)(e.state.data));0!==t.length&&e.setState({data:r}),localStorage.setItem("todoData",JSON.stringify(r))},e.handleCheck=function(){var t=e.state.data.map((function(t){return t.completed=!0,t}));e.setState({data:t}),localStorage.setItem("todoData",JSON.stringify(t))},e.handleClear=function(){var t=e.state.data.filter((function(t){return!t.completed}));e.setState({data:t}),localStorage.setItem("todoData",JSON.stringify(t))},e.handleEdit=function(t,n){e.setState({edit:!0,editId:t,editTitle:n})},e.handleUpdate=function(t){var n=e.state,a=n.data,r=n.editId,i=a.findIndex((function(t){return t.id===r})),o=function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?ft(Object(e),!0).forEach((function(n){Object(l.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):ft(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},a[i],{title:t}),d=[].concat(Object(c.a)(e.state.data.slice(0,i)),[o],Object(c.a)(e.state.data.slice(i+1)));e.setState({data:d,edit:!1}),localStorage.setItem("todoData",JSON.stringify(d))},e}return Object(s.a)(n,t),Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){localStorage.getItem("todoData")?this.setState({data:JSON.parse(localStorage.getItem("todoData"))}):(localStorage.setItem("todoData",JSON.stringify([].concat(vt))),this.setState({data:[].concat(vt)}))}},{key:"handleDataFilter",value:function(){var t=this.state,n=t.data;switch(t.activeFilter){case"all":return n;case"completed":return n.filter((function(t){return t.completed}));case"active":return n.filter((function(t){return!t.completed}));default:return n}}},{key:"render",value:function(){var t=this.state,n=t.data,e=t.activeFilter,a=t.edit,i=t.editTitle,o=n.length,l=n.filter((function(t){return t.completed})).length,c=this.handleDataFilter();return r.a.createElement(xt,null,r.a.createElement(bt,null,r.a.createElement(g,null),r.a.createElement(tt,{activeFilter:e,handleFilter:this.handleFilter,totalCount:o,completedCount:l})),r.a.createElement(gt,null,a?r.a.createElement(X,{onEditItem:this.handleUpdate,editTitle:i}):r.a.createElement(Q,{onAddItem:this.handleAddItem}),r.a.createElement(L,{data:c,edit:a,handleComplete:this.handleComplete,handleEdit:this.handleEdit,handleDelete:this.handleDelete})),r.a.createElement(pt,{handleCheck:this.handleCheck,handleClear:this.handleClear,totalCount:o,completedCount:l}))}}]),n}(a.Component);o.a.render(r.a.createElement(Ot,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.766cbae3.chunk.js.map