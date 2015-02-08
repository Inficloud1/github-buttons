(function(){var t,e,n,r,o,i,a,c,s,u,l,f,d,h,p,g,m,w,y,b,v=[].slice,_=function(t,e){for(var n in e){if(k.call(e,n))t[n]=e[n]}function r(){this.constructor=t}r.prototype=e.prototype;t.prototype=new r;t.__super__=e.prototype;return t},k={}.hasOwnProperty;i={api:"https://api.github.com",anchorClass:"github-button",iconClass:"octicon",icon:"octicon-mark-github",scriptId:"github-bjs",styles:["default","mega"]};if(i.script=document.getElementById(i.scriptId)){i.url=i.script.src.replace(/[?#].*$/,"").replace(/buttons\.js$/,"")}s=function(){var t;function e(){}e.flatten=function(e){var n,r;n=function(e,o){var i,a,c,s,u,l;switch(t.call(e)){case"[object Object]":for(c in e){s=e[c];n(s,o?o+"."+c:c)}break;case"[object Array]":for(i=u=0,l=e.length;u<l;i=++u){a=e[i];n(a,o?o+"["+i+"]":"["+i+"]")}break;default:r[o]=e}};r={};n(e);return r};e.expand=function(e){var n,r,o,i,a,c,s,u,l,f,d,h,p,g;a=[];for(n in e){u=e[n];o=[];p=n.split(".");for(l=0,d=p.length;l<d;l++){r=p[l];i=r.match(/^(.*?)((?:\[[0-9]+\])*)$/);if(i[1]){o.push(i[1])}if(i[2]){g=i[2].replace(/^\[|\]$/g,"").split("][");for(f=0,h=g.length;f<h;f++){c=g[f];o.push(Number(c))}}}s=a;r=0;while(o.length){if(s[r]==null){switch(t.call(o[0])){case"[object String]":s[r]={};break;case"[object Number]":s[r]=[]}}s=s[r];r=o.shift()}s[r]=u}return a[0]};t=Object.prototype.toString;return e}();g=function(){function t(){}t.stringify=function(t){var e,n,r;n=[];for(e in t){r=t[e];if(r==null){r=""}n.push(e+"="+r)}return n.join("&")};t.parse=function(t){var e,n,r,o,i,a,c,s;n={};c=t.split("&");for(i=0,a=c.length;i<a;i++){r=c[i];if(!(r!=="")){continue}s=r.split("="),e=s[0],o=2<=s.length?v.call(s,1):[];if(e!==""){n[e]=o.join("=")}}return n};return t}();d=function(){function t(){}t.encode=function(t){return"#"+encodeURIComponent(g.stringify(s.flatten(t)))};t.decode=function(t){if(t==null){t=document.location.hash}return s.expand(g.parse(decodeURIComponent(t.replace(/^#/,""))))||{}};return t}();c=function(){var t,e,n,r,o,i,a;function c(t,e){this.$=t&&t.nodeType===1?t:document.createElement(t);if(e){e.apply(this,[this.$])}}c.prototype.get=function(){return this.$};c.prototype.on=function(){var t,n,r,o,i,a,c;r=2<=arguments.length?v.call(arguments,0,i=arguments.length-1):(i=0,[]),o=arguments[i++];t=function(t){return function(e){return o.apply(t,[e||window.event])}}(this);for(a=0,c=r.length;a<c;a++){n=r[a];e(this.$,n,t)}};c.prototype.once=function(){var t,n,r,o,i,c,s;r=2<=arguments.length?v.call(arguments,0,i=arguments.length-1):(i=0,[]),o=arguments[i++];t=function(e){return function(n){var i,c,s;for(c=0,s=r.length;c<s;c++){i=r[c];a(e.$,i,t)}return o.apply(e,[n||window.event])}}(this);for(c=0,s=r.length;c<s;c++){n=r[c];e(this.$,n,t)}};c.prototype.addClass=function(e){if(!n(this.$,e)){t(this.$,e)}};c.prototype.removeClass=function(t){if(n(this.$,t)){i(this.$,t)}};c.prototype.hasClass=function(t){return n(this.$,t)};e=function(t,e,n){if(t.addEventListener){t.addEventListener(""+e,n)}else{t.attachEvent("on"+e,n)}};a=function(t,e,n){if(t.removeEventListener){t.removeEventListener(""+e,n)}else{t.detachEvent("on"+e,n)}};o=/[ \t\n\f\r]+/g;r=/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g;t=function(t,e){t.className+=" "+e};i=function(t,e){t.className=(" "+t.className+" ").replace(o," ").replace(" "+e+" ","").replace(r,"")};n=function(t,e){return(" "+t.className+" ").replace(o," ").indexOf(" "+e+" ")>=0};return c}();l=function(t){_(e,t);function e(t){e.__super__.constructor.call(this,"iframe",function(e){var n,r,o,i;o={allowtransparency:true,scrolling:"no",frameBorder:0};for(n in o){r=o[n];e.setAttribute(n,r)}i={border:"none",height:"0",width:"1px"};for(n in i){r=i[n];e.style[n]=r}if(t){t.apply(this,[e])}})}e.prototype.html=function(t){var e;try{e=this.$.contentWindow.document;e.open();e.write(t);e.close()}catch(n){}};e.prototype.load=function(t){return this.$.src=t};e.prototype.size=function(){var t,e,n,r;try{e=this.$.contentWindow.document;n=e.documentElement;t=e.body;n.style.overflow=t.style.overflow=window.opera?"scroll":"visible";r={width:t.scrollWidth+"px",height:t.scrollHeight+"px"};n.style.overflow=t.style.overflow="";return r}catch(o){return{}}};e.prototype.resize=function(t){var e,n,r;r=t!=null?t:this.size(),n=r.width,e=r.height;if(n){this.$.style.width=n}if(e){return this.$.style.height=e}};return e}(c);t=function(){var t;function e(){}e.parse=function(e){var n,r,o;return{href:t(e.href),text:e.getAttribute("data-text")||e.textContent||e.innerText,data:{count:{api:(n=e.getAttribute("data-count-api"))&&~n.indexOf("#")?("/"!==n.charAt(0)?n="/"+n:void 0,n):void 0,href:t(e.getAttribute("data-count-href"))||t(e.href)},style:(o=e.getAttribute("data-style"))?o:void 0,icon:(r=e.getAttribute("data-icon"))?r:void 0}}};t=function(t){if(/^\s*javascript:/i.test(t)){return""}else{return t}};return e}();n=function(t){_(e,t);function e(){var t,n,r;n=arguments[0],t=2<=arguments.length?v.call(arguments,1):[];e.__super__.constructor.call(this,t.shift());r=function(e){return function(){var r;r=e.size();e.once("load",function(){this.resize(r);if(t[0]){t.shift().apply(this,[this.$])}});e.load(i.url+"buttons.html"+n)}}(this);this.once("load",function(){var t,e;if(t=this.$.contentWindow.callback){e=t.script;if(e.readyState){new c(e).on("readystatechange",function(){if(/loaded|complete/.test(e.readyState)){r()}})}else{new c(e).on("load","error",function(){r()})}}else{r()}});this.html('<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8">\n<title></title>\n<base target="_blank"><!--[if lte IE 6]></base><![endif]-->\n<link rel="stylesheet" href="'+i.url+'assets/css/buttons.css">\n<style>html{visibility:hidden;}</style>\n<script>document.location.hash = "'+n+'";</script>\n</head>\n<body>\n<script src="'+i.script.src+'"></script>\n</body>\n</html>')}return e}(l);r=function(){var t,e;function n(n){if(n&&n.data){document.body.className=function(){var t,e,r,o;o=i.styles;for(e=0,r=o.length;e<r;e++){t=o[e];if(t===n.data.style){return t}}return i.styles[0]}();document.getElementsByTagName("base")[0].href=n.href;new t(n,function(t){document.body.appendChild(t)});new e(n,function(t){document.body.appendChild(t)})}}t=function(t){_(e,t);function e(t,n){e.__super__.constructor.call(this,"a",function(e){e.className="button";if(t.href){e.href=t.href}new c("i",function(n){n=document.createElement("i");n.className=function(){var e;e=[t.data.icon||i.icon];if(i.iconClass){e.push(i.iconClass)}return e.join(" ")}();e.appendChild(n)});new c("span",function(t){t.appendChild(document.createTextNode(" "));e.appendChild(t)});new c("span",function(n){if(t.text){n.appendChild(document.createTextNode(t.text))}e.appendChild(n)});if(n){n(e)}})}return e}(c);e=function(t){_(e,t);function e(t,n){if(t.data.count.api){e.__super__.constructor.call(this,"a",function(e){e.className="count";if(t.data.count.href){e.href=t.data.count.href}new c("b",function(t){e.appendChild(t)});new c("i",function(t){e.appendChild(t)});new c("span",function(r){var o;e.appendChild(r);o=function(){var e,n;n=t.data.count.api.split("#")[0];e=g.parse(n.split("?").slice(1).join("?"));e.callback="callback";return n.split("?")[0]+"?"+g.stringify(e)}();new c("script",function(a){var c;a.async=true;a.src=""+i.api+o;window.callback=function(o){var i;window.callback=null;if(o.meta.status===200){i=s.flatten(o.data)[t.data.count.api.split("#").slice(1).join("#")];if(Object.prototype.toString.call(i)==="[object Number]"){i=i.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}r.appendChild(document.createTextNode(" "+i+" "));if(n){n(e)}}};window.callback.script=a;this.on("error",function(){window.callback=null});if(a.readyState){this.on("readystatechange",function(){if(a.readyState==="loaded"&&a.children&&a.readyState==="loading"){window.callback=null}})}c=document.getElementsByTagName("head")[0];c.insertBefore(a,c.firstChild)})})})}}return e}(c);return n}();f=function(){function t(){}t.low_rate_limit=false;window.callback=function(e){t.rate_limit=e.data;t.low_rate_limit=t.rate_limit.resources.core.remaining<16};t.update=function(){if(!window.callback.script){new c("script",function(t){var e;t.async=true;t.src="https://api.github.com/rate_limit?callback=callback";window.callback.script=t;this.on("readystatechange","load","error",function(){if(!t.readyState||/loaded|complete/.test(t.readyState)){t.parentNode.removeChild(t);window.callback.script=null}});e=document.getElementsByTagName("head")[0];e.insertBefore(t,e.firstChild)})}};t.update();return t}();u=function(t){_(e,t);function e(){return e.__super__.constructor.apply(this,arguments)}e.prototype.on=function(){var t,n,r,o,i,a,s,u;r=2<=arguments.length?v.call(arguments,0,i=arguments.length-1):(i=0,[]),o=arguments[i++];if(r.indexOf("change")>=0){t=function(t){return function(e){return o.apply(t,[e||window.event])}}(this);u=this.get().elements;for(a=0,s=u.length;a<s;a++){n=u[a];new c(n).on("change","input",t)}}return e.__super__.on.apply(this,arguments)};e.prototype.serialize=function(){var t,e,n,r,o;t={};o=this.get().elements;for(n=0,r=o.length;n<r;n++){e=o[n];if(e.name){switch(e.type){case"radio":case"checkbox":if(e.checked){t[e.name]=e.value}break;default:t[e.name]=e.value}}}return t};return e}(c);a=function(t){_(e,t);function e(){e.__super__.constructor.apply(this,arguments);this.on("load",function(){var t,e,n,r;r=this.get().contentWindow.document.getElementsByTagName("a");for(e=0,n=r.length;e<n;e++){t=r[e];new c(t).on("click",function(t){t.preventDefault();return false})}new c(this.get().contentWindow.document.body).on("click",function(t){return function(){t.get().parentNode.click()}}(this))})}return e}(c);h=function(t){_(e,t);function e(t,n){var r,o,a;o=t.href,a=t.text,r=t.data;e.__super__.constructor.call(this,"a",function(t){var e,c;t.className=i.anchorClass;t.href=o;t.appendChild(document.createTextNode(""+a));for(e in r){c=r[e];t.setAttribute("data-"+e,c)}if(n){n(t)}})}return e}(c);p=function(t){_(e,t);function e(t){this.$=t;this.on("load",function(){var t,e;if(t=this.get().contentWindow.callback){e=t.script;if(e.readyState){new c(e).on("readystatechange",function(){if(/loaded|complete/.test(e.readyState)){this.resize()}})}else{new c(e).on("load","error",function(){this.resize()})}}else{this.resize()}})}e.prototype.load=function(t){this.get().parentNode.style.height=(t.data.style==="mega"?28:20)+2+"px";this.get().style.width="1px";this.get().style.height="0";this.get().src="buttons.html"+d.encode(t);this.get().contentWindow.document.location.reload()};return e}(l);o=function(t){_(e,t);function e(){e.__super__.constructor.apply(this,arguments);this.on("focus",function(){this.get().select()});this.on("click",function(){this.get().select()});this.on("mouseup",function(t){t.preventDefault();return false})}return e}(c);e=function(e){_(n,e);function n(e,n){var r,o,i,a,c,s,u,l,p;this.$=e;a=n.content,p=n.preview,r=p.button,c=p.frame,i=p.code,l=p.warning,s=n.snippet,u=n.user_repo;s.get().value='<!-- Place this tag right after the last button or just before your close body tag. -->\n<script async defer id="github-bjs" src="https://buttons.github.io/buttons.js"></script>';o=function(e){return function(n){var o,s,p,g,m,w,y,b,v,_;s=n.force;g=e.serialize();if(g.type){a.removeClass("hidden");v=["repo","standard-icon"];for(m=0,y=v.length;m<y;m++){p=v[m];e.get().elements[p].disabled=g.type==="follow"}_=["show-count"];for(w=0,b=_.length;w<b;w++){p=_[w];e.get().elements[p].disabled=g.type==="download"}if(!((!g.user||/^[a-z0-9][a-z0-9-]*$/i.test(g.user))&&(g.type==="follow"||!g.repo||/^[\w.-]+$/.test(g.repo)&&!/^\.\.?$/.test(g.repo)))){u.addClass("has-error")}else{u.removeClass("has-error");if(g.user===""||g.type!=="follow"&&g.repo===""){u.addClass("has-warning")}else{u.removeClass("has-warning")}}if(u.hasClass("has-error")||u.hasClass("has-warning")){g.user="ntkme";g.repo="github-buttons"}if(e.cache!==(o=d.encode(g))||s){e.cache=o;new h(e.parse(g),function(n){var o;i.get().value="<!-- Place this tag where you want the button to render. -->\n"+n.outerHTML;r.addClass("hidden");if(g["show-count"]!=null&&g.type!=="download"){f.update();if(f.low_rate_limit){r.removeClass("hidden");o=new Date(f.rate_limit.resources.core.reset*1e3);if(!e.reset||o>e.reset){e.reset=o;l.removeClass("hidden")}if(s){l.addClass("hidden")}else{n.removeAttribute("data-count-api")}}}c.load(t.parse(n));n=null})}}}}(this);r.on("click",function(t){t.preventDefault();o({force:true});return false});this.on("change",o)}n.prototype.parse=function(t){var e,n,r,o;if(t==null){t=this.serialize()}r=t.type,o=t.user,n=t.repo;e={className:"github-button",href:function(){switch(r){case"follow":return"https://github.com/"+o;case"watch":case"star":case"fork":return"https://github.com/"+o+"/"+n;case"issue":return"https://github.com/"+o+"/"+n+"/issues";case"download":return"https://github.com/"+o+"/"+n+"/archive/master.zip";default:return"https://github.com/"}}(),text:function(){switch(r){case"follow":return"Follow @"+o;default:return r.charAt(0).toUpperCase()+r.slice(1).toLowerCase()}}(),data:{icon:function(){switch(r){case"watch":return"octicon-eye";case"star":return"octicon-star";case"fork":return"octicon-git-branch";case"issue":return"octicon-issue-opened";case"download":return"octicon-cloud-download";default:return"octicon-mark-github"}}()}};if(t["large-button"]!=null){e.data.style="mega"}if(t["show-count"]!=null){switch(r){case"follow":e.data["count-href"]="/"+o+"/followers";e.data["count-api"]="/users/"+o+"#followers";break;case"watch":e.data["count-href"]="/"+o+"/"+n+"/watchers";e.data["count-api"]="/repos/"+o+"/"+n+"#subscribers_count";break;case"star":e.data["count-href"]="/"+o+"/"+n+"/stargazers";e.data["count-api"]="/repos/"+o+"/"+n+"#stargazers_count";break;case"fork":e.data["count-href"]="/"+o+"/"+n+"/network";e.data["count-api"]="/repos/"+o+"/"+n+"#forks_count";break;case"issue":e.data["count-api"]="/repos/"+o+"/"+n+"#open_issues_count"}}if(t["standard-icon"]!=null||e.data.icon==="octicon-mark-github"){delete e.data.icon}return e};return n}(u);b=document.getElementsByTagName("iframe");for(w=0,y=b.length;w<y;w++){m=b[w];if(m.parentNode.id!=="preview"){new a(m)}}new e(document.getElementById("button-config"),{content:new c(document.getElementById("content")),user_repo:new c(document.getElementById("user-repo")),preview:{button:new c(document.getElementById("preview-button")),frame:new p(document.getElementById("preview").getElementsByTagName("iframe")[0]),code:new o(document.getElementById("code")),warning:new c(document.getElementById("preview-warning"))},snippet:new o(document.getElementById("snippet"))});this.onbeforeunload=function(){}}).call(this);
//# sourceMappingURL=main.js.map