"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[734],{4734:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var r=t(5861),a=t(4687),c=t.n(a),i=t(2791),o=t(9434),s=t(6907),u=t(9439),l="ContactForm_contactForm__y0Rca",m="ContactForm_submitButton__8wEUJ",d=function(e){return e.contacts.list},h=function(e){return e.contacts.loading},f=function(e){return e.contacts.error},p=t(3634),x=t(3402),b=t(184);function v(){var e=(0,i.useState)(""),n=(0,u.Z)(e,2),t=n[0],r=n[1],a=(0,i.useState)(""),c=(0,u.Z)(a,2),s=c[0],h=c[1],f=(0,o.I0)(),v=(0,o.v9)(d),j=function(e){var n=e.target,t=n.name,a=n.value;"name"===t&&r(a),"number"===t&&h(a)},_=function(){r(""),h("")};return(0,b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={name:t,number:s};v.map((function(e){return e.name})).includes(t)?x.Am.error("".concat(t," is already in contacts")):f((0,p.uK)(n)),_()},className:l,children:[(0,b.jsx)("label",{htmlFor:"name",children:"Name"}),(0,b.jsx)("input",{type:"text",name:"name",id:"name",value:t,onChange:j,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Jacob Mercer"}),(0,b.jsx)("label",{htmlFor:"number",children:"Number"}),(0,b.jsx)("input",{type:"tel",name:"number",id:"number",value:s,onChange:j,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"000-00-00"}),(0,b.jsx)("button",{type:"submit",className:m,children:"Add contact"})]})}var j=function(e){var n=d(e),t=function(e){return e.filter.status}(e);return""===t?n:n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},_="ContactList_deleteButton__3hT3n";function C(){var e=(0,o.v9)(j),n=(0,o.I0)(),t=function(e){var t=e.target.id;n((0,p.GK)(t))};return(0,b.jsx)("ul",{children:e.map((function(e){return(0,b.jsxs)("li",{children:[e.name,": ",e.number," ",(0,b.jsx)("button",{id:e.id,onClick:t,className:_,children:"Delete"})]},e.id)}))})}var y=t(1634),F="Filter_filter__vxThR",g="Filter_filterInput__1Cysk",k="Filter_filterLabel__+pnW-";function w(){var e=(0,o.I0)();return(0,b.jsxs)("div",{className:F,children:[(0,b.jsx)("label",{htmlFor:"filter",className:k,children:"Find contact by name"}),(0,b.jsx)("input",{type:"text",name:"filter",id:"filter",onChange:function(n){var t=n.currentTarget.value.toLowerCase();e((0,y.T)(t))},className:g})]})}function N(){var e=(0,o.I0)(),n=(0,o.v9)(h),t=(0,o.v9)(f),a=(0,o.v9)(j);return(0,i.useEffect)((function(){var n=function(){var n=(0,r.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e((0,p.yF)());case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[e]),(0,b.jsx)(s.B6,{children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(s.ql,{children:(0,b.jsx)("title",{children:"Your Phonebook"})}),(0,b.jsx)("h2",{children:"Phonebook"}),(0,b.jsx)(v,{}),(0,b.jsx)("h3",{children:"Contacts"}),(0,b.jsx)(w,{}),n&&!t?(0,b.jsx)("b",{children:"Request in progress..."}):0!==a.length||t?(0,b.jsx)(C,{}):(0,b.jsx)("p",{children:"The Phonebook is empty. Add your first contact."})]})})}}}]);
//# sourceMappingURL=734.d1d60f96.chunk.js.map