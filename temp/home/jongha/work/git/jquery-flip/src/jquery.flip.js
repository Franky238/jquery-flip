if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['/home/jongha/work/git/jquery-flip/src/jquery.flip.js']) {
   __coverage__['/home/jongha/work/git/jquery-flip/src/jquery.flip.js'] = {"path":"/home/jongha/work/git/jquery-flip/src/jquery.flip.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0},"b":{"1":[0,0,0],"2":[0,0],"3":[0,0],"4":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":1},"end":{"line":1,"column":13}}},"2":{"name":"(anonymous_2)","line":2,"loc":{"start":{"line":2,"column":13},"end":{"line":2,"column":31}}},"3":{"name":"(anonymous_3)","line":7,"loc":{"start":{"line":7,"column":17},"end":{"line":7,"column":36}}},"4":{"name":"(anonymous_4)","line":8,"loc":{"start":{"line":8,"column":16},"end":{"line":8,"column":31}}},"5":{"name":"(anonymous_5)","line":16,"loc":{"start":{"line":16,"column":22},"end":{"line":16,"column":46}}},"6":{"name":"(anonymous_6)","line":25,"loc":{"start":{"line":25,"column":15},"end":{"line":25,"column":26}}},"7":{"name":"(anonymous_7)","line":29,"loc":{"start":{"line":29,"column":24},"end":{"line":29,"column":35}}},"8":{"name":"(anonymous_8)","line":40,"loc":{"start":{"line":40,"column":4},"end":{"line":40,"column":29}}},"9":{"name":"(anonymous_9)","line":44,"loc":{"start":{"line":44,"column":15},"end":{"line":44,"column":26}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":67,"column":11}},"2":{"start":{"line":2,"column":1},"end":{"line":66,"column":3}},"3":{"start":{"line":4,"column":2},"end":{"line":4,"column":54}},"4":{"start":{"line":5,"column":2},"end":{"line":11,"column":14}},"5":{"start":{"line":7,"column":38},"end":{"line":7,"column":109}},"6":{"start":{"line":8,"column":33},"end":{"line":8,"column":78}},"7":{"start":{"line":13,"column":2},"end":{"line":13,"column":40}},"8":{"start":{"line":16,"column":2},"end":{"line":23,"column":4}},"9":{"start":{"line":17,"column":3},"end":{"line":22,"column":5}},"10":{"start":{"line":25,"column":2},"end":{"line":27,"column":5}},"11":{"start":{"line":26,"column":3},"end":{"line":26,"column":62}},"12":{"start":{"line":29,"column":2},"end":{"line":63,"column":5}},"13":{"start":{"line":30,"column":3},"end":{"line":30,"column":40}},"14":{"start":{"line":32,"column":3},"end":{"line":38,"column":32}},"15":{"start":{"line":40,"column":3},"end":{"line":62,"column":26}},"16":{"start":{"line":41,"column":4},"end":{"line":41,"column":47}},"17":{"start":{"line":42,"column":4},"end":{"line":42,"column":45}},"18":{"start":{"line":44,"column":4},"end":{"line":61,"column":17}},"19":{"start":{"line":46,"column":5},"end":{"line":51,"column":7}},"20":{"start":{"line":53,"column":5},"end":{"line":59,"column":6}},"21":{"start":{"line":54,"column":6},"end":{"line":54,"column":19}},"22":{"start":{"line":55,"column":6},"end":{"line":55,"column":18}},"23":{"start":{"line":57,"column":6},"end":{"line":57,"column":19}},"24":{"start":{"line":58,"column":6},"end":{"line":58,"column":18}},"25":{"start":{"line":65,"column":2},"end":{"line":65,"column":14}}},"branchMap":{"1":{"line":4,"type":"binary-expr","locations":[{"start":{"line":4,"column":18},"end":{"line":4,"column":25}},{"start":{"line":4,"column":29},"end":{"line":4,"column":45}},{"start":{"line":4,"column":50},"end":{"line":4,"column":53}}]},"2":{"line":7,"type":"cond-expr","locations":[{"start":{"line":7,"column":69},"end":{"line":7,"column":84}},{"start":{"line":7,"column":88},"end":{"line":7,"column":89}}]},"3":{"line":8,"type":"cond-expr","locations":[{"start":{"line":8,"column":51},"end":{"line":8,"column":63}},{"start":{"line":8,"column":66},"end":{"line":8,"column":77}}]},"4":{"line":53,"type":"if","locations":[{"start":{"line":53,"column":5},"end":{"line":53,"column":5}},{"start":{"line":53,"column":5},"end":{"line":53,"column":5}}]}}};
}
var __cov_hppo8UsVdX1Dxtw8UhPKfg = __coverage__['/home/jongha/work/git/jquery-flip/src/jquery.flip.js'];
__cov_hppo8UsVdX1Dxtw8UhPKfg.s['1']++;(function($){__cov_hppo8UsVdX1Dxtw8UhPKfg.f['1']++;__cov_hppo8UsVdX1Dxtw8UhPKfg.s['2']++;$.fn.flip=function(options){__cov_hppo8UsVdX1Dxtw8UhPKfg.f['2']++;__cov_hppo8UsVdX1Dxtw8UhPKfg.s['3']++;var interval=(__cov_hppo8UsVdX1Dxtw8UhPKfg.b['1'][0]++,options)&&(__cov_hppo8UsVdX1Dxtw8UhPKfg.b['1'][1]++,options.interval)||(__cov_hppo8UsVdX1Dxtw8UhPKfg.b['1'][2]++,200);__cov_hppo8UsVdX1Dxtw8UhPKfg.s['4']++;var settings=$.extend({'interval':interval,'transition':function(interval){__cov_hppo8UsVdX1Dxtw8UhPKfg.f['3']++;__cov_hppo8UsVdX1Dxtw8UhPKfg.s['5']++;return'all '+(interval?(__cov_hppo8UsVdX1Dxtw8UhPKfg.b['2'][0]++,interval/1000):(__cov_hppo8UsVdX1Dxtw8UhPKfg.b['2'][1]++,0))+'s ease-in-out';},'transform':function(back){__cov_hppo8UsVdX1Dxtw8UhPKfg.f['4']++;__cov_hppo8UsVdX1Dxtw8UhPKfg.s['6']++;return!!back?(__cov_hppo8UsVdX1Dxtw8UhPKfg.b['3'][0]++,'scaleX(-1)'):(__cov_hppo8UsVdX1Dxtw8UhPKfg.b['3'][1]++,'scaleX(1)');},'front':'.flip-front','back':'.flip-back'},options);__cov_hppo8UsVdX1Dxtw8UhPKfg.s['7']++;options=$.extend(settings,options);__cov_hppo8UsVdX1Dxtw8UhPKfg.s['8']++;var setTransition=function(obj,interval){__cov_hppo8UsVdX1Dxtw8UhPKfg.f['5']++;__cov_hppo8UsVdX1Dxtw8UhPKfg.s['9']++;return obj.css({'-webkit-transition':options.transition(interval)},{'-moz-transition':options.transition(interval)},{'-o-transition':options.transition(interval)},{'transition':options.transition(interval)});};__cov_hppo8UsVdX1Dxtw8UhPKfg.s['10']++;$(this).each(function(){__cov_hppo8UsVdX1Dxtw8UhPKfg.f['6']++;__cov_hppo8UsVdX1Dxtw8UhPKfg.s['11']++;setTransition($(this),interval).find(options.back).hide();});__cov_hppo8UsVdX1Dxtw8UhPKfg.s['12']++;$(this).bind('click',function(){__cov_hppo8UsVdX1Dxtw8UhPKfg.f['7']++;__cov_hppo8UsVdX1Dxtw8UhPKfg.s['13']++;var condition=$(this).data('flip');__cov_hppo8UsVdX1Dxtw8UhPKfg.s['14']++;setTransition($(this),interval).css({'-webkit-transform':options.transform(true)},{'-moz-transform':options.transform(true)},{'-o-transform':options.transform(true)},{'transform':options.transform(true)}).data('flip',!!!condition);__cov_hppo8UsVdX1Dxtw8UhPKfg.s['15']++;(function(obj,condition){__cov_hppo8UsVdX1Dxtw8UhPKfg.f['8']++;__cov_hppo8UsVdX1Dxtw8UhPKfg.s['16']++;var front=obj.find(options.front).hide();__cov_hppo8UsVdX1Dxtw8UhPKfg.s['17']++;var back=obj.find(options.back).hide();__cov_hppo8UsVdX1Dxtw8UhPKfg.s['18']++;setTimeout(function(){__cov_hppo8UsVdX1Dxtw8UhPKfg.f['9']++;__cov_hppo8UsVdX1Dxtw8UhPKfg.s['19']++;setTransition(obj,0).css({'-webkit-transform':options.transform()},{'-moz-transform':options.transform()},{'-o-transform':options.transform()},{'transform':options.transform()});__cov_hppo8UsVdX1Dxtw8UhPKfg.s['20']++;if(condition){__cov_hppo8UsVdX1Dxtw8UhPKfg.b['4'][0]++;__cov_hppo8UsVdX1Dxtw8UhPKfg.s['21']++;front.show();__cov_hppo8UsVdX1Dxtw8UhPKfg.s['22']++;back.hide();}else{__cov_hppo8UsVdX1Dxtw8UhPKfg.b['4'][1]++;__cov_hppo8UsVdX1Dxtw8UhPKfg.s['23']++;front.hide();__cov_hppo8UsVdX1Dxtw8UhPKfg.s['24']++;back.show();}},interval);}($(this),condition));});__cov_hppo8UsVdX1Dxtw8UhPKfg.s['25']++;return this;};}(jQuery));
