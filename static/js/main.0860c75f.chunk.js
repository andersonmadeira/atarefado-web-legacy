(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(8),r=n.n(s),l=n(4),i=n(1),c=n(2),u=n(5),d=n(3),f=n(6),h=(n(15),function(e){var t=e.task,n=e.handleToggleStatus,a=e.handleTaskRemove,s=t.done?"checked":"";return o.a.createElement("li",{className:s},o.a.createElement("span",{className:"label",onClick:function(){return n(t)}},t.label),o.a.createElement("span",{className:"close",onClick:function(e){e.stopPropagation(),a(t)}},"\xd7"))}),k=(n(16),function(e){var t=e.handleToggleStatus,n=e.handleTaskRemove,a=e.tasks.map(function(e){return o.a.createElement(h,{key:e.label,task:e,handleToggleStatus:t,handleTaskRemove:n})});return o.a.createElement("ul",{className:"task-list"},a)}),v=(n(17),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={nextTask:""},n.onInputChange=function(e){n.setState({nextTask:e.target.value})},n.onFormSubmit=function(e){e.preventDefault(),n.props.handleTaskAdd(n.state.nextTask),n.setState({nextTask:""})},n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.nextTask;return o.a.createElement("div",{className:"header"},o.a.createElement("h2",{className:"app-title"},"Task List"),o.a.createElement("form",{onSubmit:this.onFormSubmit},o.a.createElement("input",{className:"entry-field",type:"text",spellCheck:"false",value:e,onChange:this.onInputChange,placeholder:"Enter your next task..."}),o.a.createElement("button",{type:"submit",className:"add-button"},"Add")))}}]),t}(o.a.Component)),m=(n(18),function(e){localStorage.setItem("tasks",JSON.stringify(e))}),b=function(){var e=localStorage.getItem("tasks");return JSON.parse(e||"[]")},g=function(e){var t=[].concat(Object(l.a)(b()),[e]);m(t)},p=function(e){var t=b().filter(function(t){return t.label!==e.label});m(t)},w=function(e){var t=b().map(function(t){return t.label===e.label?{label:t.label,done:!t.done}:t});m(t)},T=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={tasks:[]},n.handleTaskRemove=function(e){var t=n.state.tasks.filter(function(t){return t.label!==e.label});p({label:e.label}),n.setState({tasks:t})},n.handleTaskAdd=function(e){if(e&&!n.state.tasks.find(function(t){return t.label===e})){var t={label:e,done:!1},a=[].concat(Object(l.a)(n.state.tasks),[t]);g(t),n.setState({tasks:a})}},n.handleToggleStatus=function(e){var t=n.state.tasks.map(function(t){return t.label===e.label?{label:t.label,done:!t.done}:t});w(e),n.setState({tasks:t})},n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=b();this.setState({tasks:e})}},{key:"render",value:function(){var e=this.state.tasks;return o.a.createElement("div",null,o.a.createElement(v,{handleTaskAdd:this.handleTaskAdd}),o.a.createElement(k,{tasks:e,handleToggleStatus:this.handleToggleStatus,handleTaskRemove:this.handleTaskRemove}))}}]),t}(o.a.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(T,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-task-list",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/react-task-list","/service-worker.js");S?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):y(t,e)})}}()}],[[9,1,2]]]);