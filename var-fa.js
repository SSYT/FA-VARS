/*
    - Adaugarea de variabile intr-o pagina html
    - http://help.forumgratuit.ro/t16009-adaugarea-de-variabile-intr-o-pagina-html
    - Copyright (c) Forumgratuit
*/
(function(n){n.get("/popup_help.forum?l=miscvars",function(f){for(var g="FORUMURL FORUMURLINK FORUMNAME FORUMNAMELINK FORUMDESC FORUMBIRTHDAY FORUMAGE FORUMCOUNTFORUM FORUMCOUNTOPIC FORUMCOUNTPOST FORUMCOUNTUSER FORUMONLINEUSER FORUMONLINEDATE FORUMLASTUSER FORUMLASTUSERLINK USERNAME USERLINK USERBIRTHDAY USERAGE USERREGDATE USERLASTVISIT USERCOUNTPOST NOW NOWWITHTIME".split(" "),c=0;c<g.length;c++){var h=g[c],d=f.replace(RegExp('^.+<li style="margin-bottom:5px;direction:ltr;text-align:left;"><strong>&#123;'+
h+"&#125;</strong>&nbsp;:&nbsp;(.*?)&nbsp;<span style='direction:ltr'>(.*?)</span><br /></li>.+$"),"$1");if(f!=d){for(var k=document.getElementsByTagName("*")||document.all,b=[],a=-1;++a<k.length;)for(var l=k[a],m=l.className.split(" "),e=0;e<m.length;e++)if(m[e]==h){b.push(l);break}for(a=-1;++a!=b.length;)"INPUT"==b[a].tagName||"TEXTAREA"==b[a].tagName?b[a].value+=d:b[a].innerHTML+=d}}})})(window.jQuery);
