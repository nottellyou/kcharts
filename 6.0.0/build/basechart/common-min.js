/*!build time : 2015-03-31 1:06:08 PM*/
KISSY.add("kg/kcharts/6.0.0/basechart/common",function(a,b){function c(b,c){if(b._cfg.title.isShow){var d=b.htmlPaper,e=c+"-title",f=b._cfg,g=b.getInnerContainer(),h=.6*g.y;b._title=d.rect(g.x,0,g.width,h).addClass(e).css(a.mix({"line-height":h+"px"},f.title.css)).html(f.title.content)}}function d(b,c){if(b._cfg.subTitle.isShow){var d=b.htmlPaper,e=c+"-subtitle",f=b._cfg,g=b.getInnerContainer(),h=.4*g.y;b._subTitle=d.rect(g.x,.6*g.y,g.width,h).addClass(e).css(a.mix({"line-height":h+"px"},f.subTitle.css)).html(f.subTitle.content)}}function e(a){if(a._cfg.xAxis.isShow){var b=a.getInnerContainer(),c=b.bl,d=b.width,e=a.htmlPaper,f=a._cfg.themeCls+"-axisx";return a._axisX=e.lineX(c.x,c.y,d).addClass(f).css(a._cfg.xAxis.css||{}),a._axisX}}function f(a){if(a._cfg.yAxis.isShow){var b=a.getInnerContainer(),c=b.tl,d=b.height,e=a.htmlPaper,f=a._cfg.themeCls+"-axisy";return a._axisY=e.lineY(c.x,c.y,d).addClass(f).css(a._cfg.yAxis.css||{}),a._axisY}}function g(a){if(a._cfg.yGrids.isShow)for(var b=a.getInnerContainer(),c=b.x,d=a._pointsY,e=(a._cfg.yGrids.template,0),f=d.length;f>e;e++)a._gridsY[e]={0:j(a,{x:c,y:d[e].y,index:e}),x:c,y:d[e].y,num:d[e].number}}function h(a){if(a._cfg.xGrids.isShow){var b,c=a._points[0],d=a.getInnerContainer();if(a._gridsX=[],"x"==a._cfg.zoomType){b=function(){var a=c.length,b=[];if(a>1){var d=(c[1].x-c[0].x)/2;b.push({x:c[0].x-d});for(var e in c)b.push({x:c[e].x- -d})}return b}();for(var e=0,f=b.length;f>e;e++)a._gridsX[e]={0:i(a,{index:e,x:b[e].x}),x:b[e].x,y:d.bl.y,index:e,num:a.coordNum[e]}}else for(var e in a._pointsX)a._gridsX[e]={index:e,0:i(a,{index:e,x:a._pointsX[e].x}),x:a._pointsX[e].x,y:d.bl.y,num:a.coordNumX[e]};return a._gridsX}}function i(c,d,e){if(c._cfg.xGrids.isShow){var f=c.getInnerContainer(),e=e||c._cfg.xGrids.css,g=c.htmlPaper,h=c._cfg.themeCls+"-gridsx",i=c._cfg.xGrids.template,j={index:d.index,paper:g,x:d.x,y:f.tl.y,height:f.height,css:e,className:h,chart:c};return i?a.isFunction(i)?i(j):b(i).render({data:j}):g.lineY(d.x,f.tl.y,f.height).addClass(h).css(e)}}function j(c,d,e){if(c._cfg.yGrids.isShow){var f=c.getInnerContainer(),e=e||c._cfg.yGrids.css,g=c.htmlPaper,h=c._cfg.themeCls+"-gridsy",i=c._cfg.yGrids.template,j={index:d.index,paper:g,x:f.x,y:d.y,width:f.width,css:e,className:h,chart:c};return i?a.isFunction(i)?i(j):b(i).render({data:j}):g.lineX(f.x,d.y,f.width).addClass(h).css(e)}}function k(a){if(a._cfg.yLabels.isShow){var b=a.getInnerContainer();for(var c in a._pointsY)a._labelY[c]={0:n(a,c,a._pointsY[c].number),num:a._pointsY[c].number,x:b.x,y:a._pointsY[c].y};return a._labelY}}function l(a){if(a._cfg.xLabels.isShow)for(var b in a._pointsX)a._labelX[b]={0:m(a,b,a._pointsX[b].number),num:a._pointsX[b].number,x:a._pointsX[b].x,y:a._pointsX[b].y}}function m(c,d,e){if(c._cfg.xLabels.isShow){var f,g=c.htmlPaper,h=c._pointsX.length||0,i=c._cfg.themeCls+"-xlabels",j="{{data}}",k="";return h>d?(j=c._cfg.xLabels.template||j,k=a.isFunction(j)?j(d,e):b(j).render({data:e}),k&&(f=g.text(c._pointsX[d].x,c._pointsX[d].y,"<span class="+i+">"+k+"</span>","center"),f.children().css(c._cfg.xLabels.css)),f):void 0}}function n(c,d,e){if(c._cfg.yLabels.isShow&&e){var f,g=c.htmlPaper,h=c._cfg.themeCls+"-ylabels",i="{{data}}",j="";return i=c._cfg.yLabels.template||i,j=a.isFunction(i)?i(d,e):b(i).render({data:e}),j&&(f=g.text(c._pointsY[d].x,c._pointsY[d].y,"<span class="+h+">"+j+"</span>","right","middle"),f.children().css(c._cfg.yLabels.css)),f}}function o(a){function b(b,c,d,e,f){for(var g="_grids"+b,l="_label"+b,o=Math.max.apply(null,[a[l].length,a[g].length]),p=function(){a[g]=[],a[l]=[];for(var b in c)a[g][b]={0:c[b].grid,y:d[b].y,x:d[b].x,num:c[b].num},a[l][b]={0:c[b].lbl,y:d[b].y,x:d[b].x,num:c[b].num};for(var b in e)e[b].remove()},q=0;o>q;q++)!function(i){var j=a[l][i]?a[l][i].num:a[g][i].num,m=u(j,d,f);if(m&&void 0!==m.x&&void 0!==m.y){var n="Y"==b?{top:m.y+"px"}:{left:m.x+"px"};c.push({num:j,lbl:a[l][i]&&a[l][i][0]&&a[l][i][0].stop().animate(n,h,k),grid:a[g][i]&&a[g][i][0]&&a[g][i][0].stop().animate(n,h,k)})}else{var n="Y"==b?{top:a[l][i]&&v(a[l][i]).y+"px",opacity:0}:{left:a[l][i]&&v(a[l][i]).x+"px",opacity:0};a[l][i]&&a[l][i][0]&&e.push(a[l][i][0].stop().animate(n,h,k)),a[g][i]&&a[g][i][0]&&e.push(a[g][i][0].stop().animate(n,h,k))}}(q);for(var q in d)if(!r(d[q].number,f)){var s="Y"==b?v(d[q]).y+"px":v(d[q]).x+"px",t="Y"==b?{top:s,opacity:0}:{left:s,opacity:0},w="Y"==b?{top:d[q].y,opacity:1}:{left:d[q].x,opacity:1};if("Y"==b){var x=n(a,q,d[q].number),y=j(a,v(d[q]).y);c.push({num:d[q].number,lbl:x&&x.css(t).stop().animate(w,h,k),grid:y&&y.css(t).stop().animate(w,h,k)})}else{var x=m(a,q,d[q].number),y=i(a,v(d[q]).x);c.push({num:d[q].number,lbl:x&&x.css(t).stop().animate(w,h,k),grid:y&&y.css(t).stop().animate(w,h,k)})}}Array.prototype.sort.call(c,function(a,b){return a.num-b.num}),p()}var c=a._cfg,d=c.zoomType,e=a._pointsY,f=a._pointsX,g=a.getInnerContainer(),h=.5,k="easeout",l=[],o=[],p=[],q=[],s=[],t=[],u=function(a,b,c){for(var d in b)if(a===b[d].number)return c.push(a),b[d]},v=function(a){if(a){var b=Math.min.apply(null,[c.canvasAttr.x,c.canvasAttr.y])/2,e=g.y+g.height/2,f=g.x+g.width/2;switch(d){case"x":return{y:a.y>e?g.bl.y+b:g.y-b,x:a.x};case"y":return{x:a.x>f?g.br.x+b:g.x-b,y:a.y};case"xy":return{y:a.y>e?g.bl.y+b:g.y-b,x:a.x>f?g.br.x+b:g.x-b}}}};switch(d){case"x":b("Y",s,e,p,l);break;case"y":b("X",t,f,q,o);break;case"xy":b("X",t,f,q,o),b("Y",s,e,p,l)}}function p(a){var b=0;for(var c in a)a[c].x&&a[c].y&&b++;return b}function q(a,b){var c="",d=(a._innerContainer.bl.y,p(b)),e=0;if(!b)return"";if(e=function(){for(var c in b)if(!a.isEmptyPoint(b[c]))return Math.round(c)}(),c+="M"+b[e].x+","+b[e].y,"arc"==a._cfg.lineType&&d>2){c+=" R";for(var f=e+1,d=b.length;d>f;f++)b[f].x&&b[f].y&&(c+=b[f].x+","+b[f].y+" ")}else for(var f=e+1,d=b.length;d>f;f++)b[f].x&&b[f].y&&(c+=" L"+b[f].x+","+b[f].y);return c}function r(a,b){for(var c in b)if(b[c]===a)return!0;return!1}return{drawTitle:c,drawSubTitle:d,drawAxisX:e,drawAxisY:f,drawGridsX:h,drawGridX:i,drawGridY:j,drawGridsY:g,drawLabelsX:l,drawLabelsY:k,drawLabelX:m,drawLabelY:n,getRealPointsNum:p,animateGridsAndLabels:o,getLinePath:q,isInArray:r}},{requires:["gallery/template/1.0/index"]});