(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,o){e.exports=o(17)},15:function(e,t,o){},16:function(e,t,o){},17:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),l=o(8),r=o.n(l),c=(o(15),o(16),o(1)),i=o(9),s=o(2),d=o(3),m=o(5),u=o(4),p=o(6),f=function(e){function t(e){var o;return Object(s.a)(this,t),(o=Object(m.a)(this,Object(u.a)(t).call(this,e))).changeEditMode=function(){o.setState({isInEditMode:!o.state.isInEditMode})},o.onValueChange=function(e){o.setState({value:e.target.value})},o.changeTodoTitle=function(){var e=o.state.value,t=o.props.id;if(""===e.trim())return o.props.removeTodo(t);o.props.editTodo(e,t),o.setState({isInEditMode:!1})},o.state={value:o.props.title,isInEditMode:!1},o}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.todo,o=e.removeTodo,a=e.onCompleted;return n.a.createElement("li",{className:t.completed?"completed":""},n.a.createElement("div",{className:"view"},n.a.createElement("input",{type:"checkbox",className:"toggle",id:t.id,onChange:a,checked:t.completed}),this.state.isInEditMode?n.a.createElement("form",{onSubmit:this.changeTodoTitle},n.a.createElement("input",{type:"text",className:"edit",onChange:this.onValueChange,value:this.state.value})):n.a.createElement("label",{className:"label",onDoubleClick:this.changeEditMode},t.title),n.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return o(t.id)}})))}}]),t}(n.a.Component);var h=function(e){var t=e.todoList,o=e.removeTodo,a=e.changeCompleted,l=e.selectedPage,r=e.markAllAsComplete,i=e.editTodo,s=[];switch(l){case"All":s=Object(c.a)(t);break;case"Active":s=Object(c.a)(t).filter(function(e){return!1===e.completed});break;case"Completed":s=Object(c.a)(t).filter(function(e){return!0===e.completed})}return n.a.createElement("section",{className:"main"},n.a.createElement("input",{onClick:r,type:"checkbox",id:"toggle-all",className:"toggle-all"}),n.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),n.a.createElement("ul",{className:"todo-list"},s.map(function(e){return n.a.createElement(f,{todo:e,key:e.id,removeTodo:o,onCompleted:a,editTodo:i,title:e.title,id:e.id})})))};var b=function(e){var t=e.todosFilter,o=e.selectedPage;return n.a.createElement("ul",{className:"filters"},n.a.createElement("li",null,n.a.createElement("a",{onClick:t,href:"#/",className:"All"===o?"selected":""},"All")),n.a.createElement("li",null,n.a.createElement("a",{onClick:t,href:"#/active",className:"Active"===o?"selected":""},"Active")),n.a.createElement("li",null,n.a.createElement("a",{onClick:t,href:"#/completed",className:"Completed"===o?"selected":""},"Completed")))};var g=function(e){var t=e.todoList,o=e.todosFilter,a=e.selectedPage,l=e.clearCompleted;return n.a.createElement("footer",{className:"footer"},n.a.createElement("span",{className:"todo-count"},t.filter(function(e){return!e.completed}).length),n.a.createElement("span",{className:"todo-count"},"items left"),n.a.createElement(b,{todosFilter:o,selectedPage:a}),t.some(function(e){return e.completed})&&n.a.createElement("button",{type:"button",onClick:l,className:"clear-completed",style:{display:"block"}},"Clear completed"))};function v(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,a)}return o}function E(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?v(o,!0).forEach(function(t){Object(i.a)(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):v(o).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}var C=function(e){function t(e){var o;return Object(s.a)(this,t),(o=Object(m.a)(this,Object(u.a)(t).call(this,e))).onInputChange=function(e){o.setState({title:e.target.value})},o.addTodo=function(e){if(e.preventDefault(),""!==o.state.title.trim()){var t={id:o.state.id,title:o.state.title,completed:!1};o.setState(function(e){return E({},e,{todoList:[].concat(Object(c.a)(e.todoList),[t]),id:e.id+1,title:""})})}},o.removeTodo=function(e){o.setState(function(t){return E({},t,{todoList:Object(c.a)(t.todoList).filter(function(t){return t.id!==e})})})},o.changeCompleted=function(e){var t=+e.target.id;o.setState(function(e){return E({},e,{todoList:e.todoList.map(function(e){return t===e.id?E({},e,{completed:!e.completed}):e})})})},o.todosFilter=function(e){var t=e.target.innerText;o.setState({selectedPage:t})},o.markAllAsComplete=function(){o.setState(function(e){return E({},e,{todoList:e.todoList.map(function(t){return e.todoList.every(function(e){return e.completed})?E({},t,{completed:!1}):E({},t,{completed:!0})})})})},o.clearCompleted=function(){o.setState(function(e){return E({},e,{todoList:e.todoList.filter(function(e){return!e.completed})})})},o.editTodo=function(e,t){o.setState(function(o){return E({},o,{todoList:o.todoList.map(function(o){return o.id===t?E({},o,{title:e}):o})})})},o.state={todoList:[],id:1,title:"",selectedPage:"All"},o}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.todoList,o=e.selectedPage;return n.a.createElement("section",{className:"todoapp"},n.a.createElement("header",{className:"header"},n.a.createElement("h1",null,"todos"),n.a.createElement("form",{onSubmit:this.addTodo},n.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",onChange:this.onInputChange,value:this.state.title}))),n.a.createElement(h,{todoList:t,removeTodo:this.removeTodo,changeCompleted:this.changeCompleted,selectedPage:o,markAllAsComplete:this.markAllAsComplete,editTodo:this.editTodo}),n.a.createElement(g,{todoList:t,selectedPage:o,todosFilter:this.todosFilter,clearCompleted:this.clearCompleted}))}}]),t}(n.a.Component);r.a.render(n.a.createElement(C,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.3cfb8d49.chunk.js.map