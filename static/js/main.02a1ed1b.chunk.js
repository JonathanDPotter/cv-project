(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(4),i=n.n(a),c=n(7),d=n.n(c),r=n(6),s=n(1),l=n(3),h=n(8),o=n(9),j=n(2),b=n(11),u=n(10),m=n(0),x=function(e){return Object(m.jsxs)("form",{id:"general-form",className:!0===e.genState.hidden?"hidden":"form",name:"general",onSubmit:e.handleSubmit,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"general first",children:"First Name: "}),Object(m.jsx)("input",{type:"text",name:"general first",id:"first-name-input",onChange:e.handleChange,value:e.genState.first})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"general last",children:"Last Name: "}),Object(m.jsx)("input",{type:"text",name:"general last",id:"last-name-input",onChange:e.handleChange,value:e.genState.last})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"general bio",children:"bio: "}),Object(m.jsx)("textarea",{name:"general bio",id:"bio-input",onChange:e.handleChange,value:e.genState.bio})]}),Object(m.jsx)("button",{type:"reset",onClick:e.handleCancel,name:"general",children:"cancel"}),Object(m.jsx)("button",{type:"submit",children:"save"})]})};var O=function(e){return Object(m.jsx)("header",{children:Object(m.jsxs)("div",{id:"content-box",children:[Object(m.jsx)("h1",{children:"CV-Generator"}),Object(m.jsx)("button",{id:"update-general",name:"general",className:"head-btn",onClick:e.hideUnhide,children:"General"}),Object(m.jsx)("button",{id:"add-education",name:"education",className:"head-btn",onClick:e.hideUnhide,children:"Education"}),Object(m.jsx)("button",{id:"add-experience",name:"experience",className:"head-btn",onClick:e.hideUnhide,children:"Experience"})]})})};var p=function(e){return Object(m.jsxs)("form",{id:"education-form",className:!0===e.edState.hidden?"hidden":"form",onSubmit:e.handleSubmit,name:"education",required:!0,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"education school",children:"School: "}),Object(m.jsx)("input",{type:"text",name:"education school",id:"school-input",onChange:e.handleChange,value:e.edState.school,required:!0})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"education from",children:"From: "}),Object(m.jsx)("input",{type:"text",name:"education from",id:"from-input",onChange:e.handleChange,value:e.edState.from,required:!0})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"education to",children:"To: "}),Object(m.jsx)("input",{type:"text",name:"education to",id:"to-input",onChange:e.handleChange,value:e.edState.to,required:!0})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"education degree",children:"Degree: "}),Object(m.jsx)("input",{type:"text",name:"education degree",id:"degree-input",onChange:e.handleChange,value:e.edState.degree,required:!0})]}),Object(m.jsx)("button",{type:"reset",onClick:e.handleCancel,name:"education",children:"cancel"}),Object(m.jsx)("button",{type:"submit",children:"save"})]})};var v=function(e){return Object(m.jsxs)("form",{id:"experience-form",className:e.expState.hidden?"hidden":"form",name:"experience",onSubmit:e.handleSubmit,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"experience company",children:"Company: "}),Object(m.jsx)("input",{type:"text",name:"experience company",id:"company-input",onChange:e.handleChange,value:e.expState.company,required:!0})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"from",children:"From: "}),Object(m.jsx)("input",{type:"text",name:"experience from",id:"from-input",onChange:e.handleChange,value:e.expState.from,required:!0})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"to",children:"To: "}),Object(m.jsx)("input",{type:"text",name:"experience to",id:"to-input",onChange:e.handleChange,value:e.expState.to,required:!0})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"experience position",children:"Postition: "}),Object(m.jsx)("input",{type:"text",name:"experience position",id:"postition-input",onChange:e.handleChange,value:e.expState.position,required:!0})]}),Object(m.jsx)("button",{type:"reset",onClick:e.handleCancel,name:"experience",children:"cancel"}),Object(m.jsx)("button",{type:"submit",children:"save"})]})};var g=function(e){var t=e.education,n=e.general,a=e.experience,i="".concat(n.first," ").concat(n.last),c=n.bio;return Object(m.jsxs)("div",{id:"cee-vee",children:[Object(m.jsxs)("div",{id:"name",children:[Object(m.jsx)("h1",{children:void 0===n.first?"name":i}),Object(m.jsx)("p",{children:c}),Object(m.jsx)("br",{})]}),Object(m.jsxs)("div",{id:"education",children:[Object(m.jsx)("h2",{children:"Educatation"}),Object(m.jsx)("hr",{}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{className:"list-item",children:t.map((function(t,n){return function(t,n){return Object(m.jsxs)("div",{className:"education","data-key":n,children:[Object(m.jsxs)("div",{className:"cv-btn",children:[Object(m.jsx)("button",{onClick:e.editItem,children:"edit"}),Object(m.jsx)("button",{onClick:e.removeItem,children:"remove"})]}),Object(m.jsx)("h3",{className:"school",children:t.school}),Object(m.jsxs)("h4",{className:"fromTo",children:["From: ",t.from," To: ",t.to]}),Object(m.jsx)("h4",{className:"degree",children:t.degree}),Object(m.jsx)("br",{})]},n)}(t,n)}))})]}),Object(m.jsxs)("div",{id:"expierience",children:[Object(m.jsx)("h2",{children:"Experience"}),Object(m.jsx)("hr",{}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{className:"list-item",children:a.map((function(t,n){return function(t,n){return Object(m.jsxs)("div",{className:"experience","data-key":n,children:[Object(m.jsxs)("div",{className:"cv-btn",children:[Object(m.jsx)("button",{onClick:e.editItem,children:"edit"}),Object(m.jsx)("button",{onClick:e.removeItem,children:"remove"})]}),Object(m.jsx)("h3",{className:"company",children:t.company}),Object(m.jsxs)("h4",{className:"fromTo",children:["From: ",t.from," To: ",t.to]}),Object(m.jsx)("h4",{className:"position",children:t.position}),Object(m.jsx)("br",{})]},n)}(t,n)}))})]})]})},f=(n(17),function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={general:{list:{},hidden:!1,first:"",last:"",bio:""},education:{list:[],hidden:!0,school:"",from:"",to:"",degree:""},experience:{list:[],hidden:!0,company:"",from:"",to:"",position:""}},a.handleSubmit=a.handleSubmit.bind(Object(j.a)(a)),a.handleChange=a.handleChange.bind(Object(j.a)(a)),a.hideUnhide=a.hideUnhide.bind(Object(j.a)(a)),a.handleCancel=a.handleCancel.bind(Object(j.a)(a)),a.editItem=a.editItem.bind(Object(j.a)(a)),a.removeItem=a.removeItem.bind(Object(j.a)(a)),a}return Object(o.a)(n,[{key:"hideUnhide",value:function(e){var t=e.target.name,n=Object(l.a)({},this.state[t]);!0===n.hidden&&(n.hidden=!1),this.setState(Object(s.a)({},t,n))}},{key:"handleSubmit",value:function(e){e.preventDefault();for(var t=e.target.name,n=Object(l.a)({},this.state[t]),a={},i=[],c=0,d=Object.entries(n);c<d.length;c++){var h=Object(r.a)(d[c],2),o=h[0],j=h[1];a[o]=j}delete a.list,"general"===t?i=a:(i=n.list.map((function(e){return e}))).push(a),n.hidden=!0,n.list=i,"general"!==t&&(n=this.clearNamedState(n)),this.setState(Object(s.a)({},t,n))}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value,i=n.split(" "),c=Object(r.a)(i,2),d=c[0],h=c[1],o=Object(l.a)({},this.state[d]);o[h]=a,this.setState(Object(s.a)({},d,o))}},{key:"handleCancel",value:function(e){var t=e.target.name,n=Object(l.a)({},this.state[t]);"general"!==t&&(n=this.clearNamedState(n)),n.hidden=!0,this.setState(Object(s.a)({},t,n))}},{key:"clearNamedState",value:function(e){for(var t in e)"list"!==t&&"hidden"!==t&&(e[t]="");return e}},{key:"editItem",value:function(e){var t=this;e.preventDefault();var n=e.target.parentNode.parentNode,a=n.dataset.key,i=n.className,c=Object(l.a)({},this.state[i]),d=c.list[a];for(var r in d)"list"!==r&&"hidden"!==r&&(c[r]=d[r]);c.list.splice(a,1),this.setState(Object(s.a)({},i,c),(function(){return t.hideUnhide({target:{name:i}})}))}},{key:"removeItem",value:function(e){e.preventDefault();var t=e.target.parentNode.parentNode,n=t.dataset.key,a=t.className,i=Object(l.a)({},this.state[a]);i.list.splice(n,1),this.setState(Object(s.a)({},a,i))}},{key:"render",value:function(){var e=this.state,t=e.general,n=e.education,a=e.experience;return Object(m.jsxs)("div",{id:"return",children:[Object(m.jsx)(O,{hideUnhide:this.hideUnhide}),Object(m.jsx)(x,{handleSubmit:this.handleSubmit,handleChange:this.handleChange,handleCancel:this.handleCancel,genState:this.state.general}),Object(m.jsx)(p,{handleSubmit:this.handleSubmit,handleChange:this.handleChange,handleCancel:this.handleCancel,edState:this.state.education}),Object(m.jsx)(v,{handleSubmit:this.handleSubmit,handleChange:this.handleChange,handleCancel:this.handleCancel,expState:this.state.experience}),Object(m.jsx)(g,{education:n.list,general:t.list,experience:a.list,editItem:this.editItem,removeItem:this.removeItem})]})}}]),n}(a.Component));d.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.02a1ed1b.chunk.js.map