(function(){var a=Handlebars.template,b=Handlebars.templates=Handlebars.templates||{};b.menu=a(function(a,b,c,d,e){function i(a,b){var e="",f;e+="\n      ",f=a,f=h.invokePartial(d.menu_item,"menu_item",f,c,d);if(f||f===0)e+=f;return e+="\n    ",e}c=c||a.helpers,d=d||a.partials;var f="",g,h=this;f+="<div class='menu span3'>\n  <div class='menu-separator'>Contos</div>\n  <ul class='menu-list menu-favorites'>\n    ",g=b.favorites,g=c.each.call(b,g,{hash:{},inverse:h.noop,fn:h.program(1,i,e)});if(g||g===0)f+=g;return f+="\n  </ul>\n  <div class='menu-separator'>Categorias</div>\n  <ul class='menu-list menu-categories'>\n  </ul>\n</div>\n\n",f}),b.menu_item=a(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i="function",j=this.escapeExpression;return f+="<li>\n  <a href='#'>\n    <i class='icon-",h=c.icon,h?g=h.call(b,{hash:{}}):(g=b.icon,g=typeof g===i?g():g),f+=j(g)+"'></i>\n    ",h=c.name,h?g=h.call(b,{hash:{}}):(g=b.name,g=typeof g===i?g():g),f+=j(g)+"\n  </a>\n</li>\n\n",f}),b.layout=a(function(a,b,c,d,e){c=c||a.helpers,d=d||a.partials;var f="",g,h,i=this,j="function";f+="<!doctype html>\n<head>\n  <script src='/javascripts/baco.min.js'></script>\n  <link rel='stylesheet' href='/stylesheets/baco.min.css'>\n</head>\n<body>\n  <div class='container'>\n    <h1>Living Large</h1>\n    <div class='wrapper row'>\n      ",g=b,g=i.invokePartial(d.menu,"menu",g,c,d);if(g||g===0)f+=g;f+="\n      <div class='content-pane span9'>\n        <div class='header'>\n          ",g=b,g=i.invokePartial(d.header,"header",g,c,d);if(g||g===0)f+=g;f+="\n        </div>\n        <div class='content'>\n          ",h=c.body,h?g=h.call(b,{hash:{}}):(g=b.body,g=typeof g===j?g():g);if(g||g===0)f+=g;return f+="\n        </div>\n      </div>\n    </div>\n  </div>\n</body>\n</html>\n",f}),b.index=a(function(a,b,c,d,e){function k(a,b){var d="",e,f;d+="\n    <li>\n      <h2>\n        <a href='contos/",f=c.id,f?e=f.call(a,{hash:{}}):(e=a.id,e=typeof e===h?e():e),d+=i(e)+"'>",e=a.value,e=e==null||e===!1?e:e.title,e=typeof e===h?e():e,d+=i(e)+"</a>\n      </h2>\n      <p>",e=a.value,e=e==null||e===!1?e:e.content,e=typeof e===h?e():e,d+=i(e)+"</p>\n      <div class='timeago'></div>\n      <div class='tags'>\n        <div><i class='icon-tags'></i></div>\n        <ul class='unstyled'>\n          ",e=a.value,e=e==null||e===!1?e:e.tags,e=c.each.call(a,e,{hash:{},inverse:j.noop,fn:j.program(2,l,b)});if(e||e===0)d+=e;return d+="\n        </ul>\n    </li>\n  ",d}function l(a,b){var c="";return c+="\n            <li><a href='categorias/",a=typeof a===h?a():a,c+=i(a)+"'>",a=typeof a===h?a():a,c+=i(a)+"</a>\n          ",c}c=c||a.helpers;var f="",g,h="function",i=this.escapeExpression,j=this;f+="<ul class='stories unstyled'>\n  ",g=b.stories,g=c.each.call(b,g,{hash:{},inverse:j.noop,fn:j.program(1,k,e)});if(g||g===0)f+=g;return f+="\n</ul>\n",f}),b.header=a(function(a,b,c,d,e){return c=c||a.helpers,"<form class='form-inline'>\n  <label class='checkbox'>\n    <input type='checkbox'>Ler sem as maos</input>\n  </label>\n</form>\n"})})()