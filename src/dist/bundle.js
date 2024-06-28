!function(){"use strict";var t={},e={},n={},a={formatDistance:void 0};const r={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};a.formatDistance=(t,e,n)=>{let a;const o=r[t];return a="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a};var o={},i={};i.buildFormatLongFn=function(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}},o.formatLong=void 0;var s=i;o.formatLong={date:(0,s.buildFormatLongFn)({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:(0,s.buildFormatLongFn)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,s.buildFormatLongFn)({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var u={formatRelative:void 0};const d={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};u.formatRelative=(t,e,n,a)=>d[t];var c={},l={};l.buildLocalizeFn=function(t){return(e,n)=>{let a;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,r=n?.width?String(n.width):e;a=t.formattingValues[r]||t.formattingValues[e]}else{const e=t.defaultWidth,r=n?.width?String(n.width):t.defaultWidth;a=t.values[r]||t.values[e]}return a[t.argumentCallback?t.argumentCallback(e):e]}},c.localize=void 0;var m=l;c.localize={ordinalNumber:(t,e)=>{const n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:(0,m.buildLocalizeFn)({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:(0,m.buildLocalizeFn)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:(0,m.buildLocalizeFn)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:(0,m.buildLocalizeFn)({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:(0,m.buildLocalizeFn)({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};var h={},f={};f.buildMatchFn=function(t){return(e,n={})=>{const a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(r);if(!o)return null;const i=o[0],s=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(s)?function(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n;return}(s,(t=>t.test(i))):function(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n;return}(s,(t=>t.test(i)));let d;d=t.valueCallback?t.valueCallback(u):u,d=n.valueCallback?n.valueCallback(d):d;return{value:d,rest:e.slice(i.length)}}};var g={};g.buildMatchPatternFn=function(t){return(e,n={})=>{const a=e.match(t.matchPattern);if(!a)return null;const r=a[0],o=e.match(t.parsePattern);if(!o)return null;let i=t.valueCallback?t.valueCallback(o[0]):o[0];i=n.valueCallback?n.valueCallback(i):i;return{value:i,rest:e.slice(r.length)}}},h.match=void 0;var w=f,b=g;h.match={ordinalNumber:(0,b.buildMatchPatternFn)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)}),era:(0,w.buildMatchFn)({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:(0,w.buildMatchFn)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:(0,w.buildMatchFn)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,w.buildMatchFn)({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,w.buildMatchFn)({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},n.enUS=void 0;var y=a,v=o,p=u,M=c,k=h;n.enUS={code:"en-US",formatDistance:y.formatDistance,formatLong:v.formatLong,formatRelative:p.formatRelative,localize:M.localize,match:k.match,options:{weekStartsOn:0,firstWeekContainsDate:1}},function(t){Object.defineProperty(t,"defaultLocale",{enumerable:!0,get:function(){return e.enUS}});var e=n}(e);var D={getDefaultOptions:function(){return W},setDefaultOptions:function(t){W=t}};let W={};var O={},S={},F={},P={};P.secondsInYear=P.secondsInWeek=P.secondsInQuarter=P.secondsInMonth=P.secondsInMinute=P.secondsInHour=P.secondsInDay=P.quartersInYear=P.monthsInYear=P.monthsInQuarter=P.minutesInYear=P.minutesInMonth=P.minutesInHour=P.minutesInDay=P.minTime=P.millisecondsInWeek=P.millisecondsInSecond=P.millisecondsInMinute=P.millisecondsInHour=P.millisecondsInDay=P.maxTime=P.daysInYear=P.daysInWeek=void 0,P.daysInWeek=7;const I=P.daysInYear=365.2425,L=P.maxTime=24*Math.pow(10,8)*60*60*1e3;P.minTime=-L,P.millisecondsInWeek=6048e5,P.millisecondsInDay=864e5,P.millisecondsInMinute=6e4,P.millisecondsInHour=36e5,P.millisecondsInSecond=1e3,P.minutesInYear=525600,P.minutesInMonth=43200,P.minutesInDay=1440,P.minutesInHour=60,P.monthsInQuarter=3,P.monthsInYear=12,P.quartersInYear=4;const Y=P.secondsInHour=3600;P.secondsInMinute=60;const x=P.secondsInDay=24*Y;P.secondsInWeek=7*x;const T=P.secondsInYear=x*I,C=P.secondsInMonth=T/12;P.secondsInQuarter=3*C;var z={},H={};H.toDate=function(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)},z.startOfDay=function(t){const e=(0,N.toDate)(t);return e.setHours(0,0,0,0),e};var N=H;var q={getTimezoneOffsetInMilliseconds:function(t){const e=(0,E.toDate)(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}},E=H;F.differenceInCalendarDays=function(t,e){const n=(0,j.startOfDay)(t),a=(0,j.startOfDay)(e),r=+n-(0,Q.getTimezoneOffsetInMilliseconds)(n),o=+a-(0,Q.getTimezoneOffsetInMilliseconds)(a);return Math.round((r-o)/Z.millisecondsInDay)};var Z=P,j=z,Q=q;var A={},B={};B.constructFrom=function(t,e){return t instanceof Date?new t.constructor(e):new Date(e)},A.startOfYear=function(t){const e=(0,G.toDate)(t),n=(0,X.constructFrom)(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n};var G=H,X=B;S.getDayOfYear=function(t){const e=(0,U.toDate)(t),n=(0,$.differenceInCalendarDays)(e,(0,R.startOfYear)(e));return n+1};var $=F,R=A,U=H;var J={},V={},K={startOfWeek:function(t,e){const n=(0,tt.getDefaultOptions)(),a=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,r=(0,_.toDate)(t),o=r.getDay(),i=(o<a?7:0)+o-a;return r.setDate(r.getDate()-i),r.setHours(0,0,0,0),r}},_=H,tt=D;V.startOfISOWeek=function(t){return(0,et.startOfWeek)(t,{weekStartsOn:1})};var et=K;var nt={},at={getISOWeekYear:function(t){const e=(0,it.toDate)(t),n=e.getFullYear(),a=(0,rt.constructFrom)(t,0);a.setFullYear(n+1,0,4),a.setHours(0,0,0,0);const r=(0,ot.startOfISOWeek)(a),o=(0,rt.constructFrom)(t,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const i=(0,ot.startOfISOWeek)(o);return e.getTime()>=r.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}},rt=B,ot=V,it=H;nt.startOfISOWeekYear=function(t){const e=(0,st.getISOWeekYear)(t),n=(0,dt.constructFrom)(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),(0,ut.startOfISOWeek)(n)};var st=at,ut=V,dt=B;J.getISOWeek=function(t){const e=(0,ht.toDate)(t),n=+(0,lt.startOfISOWeek)(e)-+(0,mt.startOfISOWeekYear)(e);return Math.round(n/ct.millisecondsInWeek)+1};var ct=P,lt=V,mt=nt,ht=H;var ft={},gt={},wt={getWeekYear:function(t,e){const n=(0,vt.toDate)(t),a=n.getFullYear(),r=(0,pt.getDefaultOptions)(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=(0,bt.constructFrom)(t,0);i.setFullYear(a+1,0,o),i.setHours(0,0,0,0);const s=(0,yt.startOfWeek)(i,e),u=(0,bt.constructFrom)(t,0);u.setFullYear(a,0,o),u.setHours(0,0,0,0);const d=(0,yt.startOfWeek)(u,e);return n.getTime()>=s.getTime()?a+1:n.getTime()>=d.getTime()?a:a-1}},bt=B,yt=K,vt=H,pt=D;gt.startOfWeekYear=function(t,e){const n=(0,Wt.getDefaultOptions)(),a=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,r=(0,kt.getWeekYear)(t,e),o=(0,Mt.constructFrom)(t,0);o.setFullYear(r,0,a),o.setHours(0,0,0,0);return(0,Dt.startOfWeek)(o,e)};var Mt=B,kt=wt,Dt=K,Wt=D;ft.getWeek=function(t,e){const n=(0,Pt.toDate)(t),a=+(0,St.startOfWeek)(n,e)-+(0,Ft.startOfWeekYear)(n,e);return Math.round(a/Ot.millisecondsInWeek)+1};var Ot=P,St=K,Ft=gt,Pt=H;var It={};It.addLeadingZeros=function(t,e){const n=t<0?"-":"",a=Math.abs(t).toString().padStart(e,"0");return n+a};var Lt={lightFormatters:void 0},Yt=It;Lt.lightFormatters={y(t,e){const n=t.getFullYear(),a=n>0?n:1-n;return(0,Yt.addLeadingZeros)("yy"===e?a%100:a,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):(0,Yt.addLeadingZeros)(n+1,2)},d:(t,e)=>(0,Yt.addLeadingZeros)(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>(0,Yt.addLeadingZeros)(t.getHours()%12||12,e.length),H:(t,e)=>(0,Yt.addLeadingZeros)(t.getHours(),e.length),m:(t,e)=>(0,Yt.addLeadingZeros)(t.getMinutes(),e.length),s:(t,e)=>(0,Yt.addLeadingZeros)(t.getSeconds(),e.length),S(t,e){const n=e.length,a=t.getMilliseconds(),r=Math.trunc(a*Math.pow(10,n-3));return(0,Yt.addLeadingZeros)(r,e.length)}},O.formatters=void 0;var xt=S,Tt=J,Ct=at,zt=ft,Ht=wt,Nt=It,qt=Lt;const Et="midnight",Zt="noon",jt="morning",Qt="afternoon",At="evening",Bt="night";function Gt(t,e=""){const n=t>0?"-":"+",a=Math.abs(t),r=Math.trunc(a/60),o=a%60;return 0===o?n+String(r):n+String(r)+e+(0,Nt.addLeadingZeros)(o,2)}function Xt(t,e){if(t%60==0){return(t>0?"-":"+")+(0,Nt.addLeadingZeros)(Math.abs(t)/60,2)}return $t(t,e)}function $t(t,e=""){const n=t>0?"-":"+",a=Math.abs(t);return n+(0,Nt.addLeadingZeros)(Math.trunc(a/60),2)+e+(0,Nt.addLeadingZeros)(a%60,2)}O.formatters={G:function(t,e,n){const a=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),a=e>0?e:1-e;return n.ordinalNumber(a,{unit:"year"})}return qt.lightFormatters.y(t,e)},Y:function(t,e,n,a){const r=(0,Ht.getWeekYear)(t,a),o=r>0?r:1-r;if("YY"===e){const t=o%100;return(0,Nt.addLeadingZeros)(t,2)}return"Yo"===e?n.ordinalNumber(o,{unit:"year"}):(0,Nt.addLeadingZeros)(o,e.length)},R:function(t,e){const n=(0,Ct.getISOWeekYear)(t);return(0,Nt.addLeadingZeros)(n,e.length)},u:function(t,e){const n=t.getFullYear();return(0,Nt.addLeadingZeros)(n,e.length)},Q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return(0,Nt.addLeadingZeros)(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return(0,Nt.addLeadingZeros)(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){const a=t.getMonth();switch(e){case"M":case"MM":return qt.lightFormatters.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){const a=t.getMonth();switch(e){case"L":return String(a+1);case"LL":return(0,Nt.addLeadingZeros)(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){const r=(0,zt.getWeek)(t,a);return"wo"===e?n.ordinalNumber(r,{unit:"week"}):(0,Nt.addLeadingZeros)(r,e.length)},I:function(t,e,n){const a=(0,Tt.getISOWeek)(t);return"Io"===e?n.ordinalNumber(a,{unit:"week"}):(0,Nt.addLeadingZeros)(a,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):qt.lightFormatters.d(t,e)},D:function(t,e,n){const a=(0,xt.getDayOfYear)(t);return"Do"===e?n.ordinalNumber(a,{unit:"dayOfYear"}):(0,Nt.addLeadingZeros)(a,e.length)},E:function(t,e,n){const a=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){const r=t.getDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return(0,Nt.addLeadingZeros)(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){const r=t.getDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return(0,Nt.addLeadingZeros)(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){const a=t.getDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return(0,Nt.addLeadingZeros)(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const a=t.getHours();let r;switch(r=12===a?Zt:0===a?Et:a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){const a=t.getHours();let r;switch(r=a>=17?At:a>=12?Qt:a>=4?jt:Bt,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return qt.lightFormatters.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):qt.lightFormatters.H(t,e)},K:function(t,e,n){const a=t.getHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):(0,Nt.addLeadingZeros)(a,e.length)},k:function(t,e,n){let a=t.getHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):(0,Nt.addLeadingZeros)(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):qt.lightFormatters.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):qt.lightFormatters.s(t,e)},S:function(t,e){return qt.lightFormatters.S(t,e)},X:function(t,e,n){const a=t.getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return Xt(a);case"XXXX":case"XX":return $t(a);default:return $t(a,":")}},x:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"x":return Xt(a);case"xxxx":case"xx":return $t(a);default:return $t(a,":")}},O:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Gt(a,":");default:return"GMT"+$t(a,":")}},z:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Gt(a,":");default:return"GMT"+$t(a,":")}},t:function(t,e,n){const a=Math.trunc(t.getTime()/1e3);return(0,Nt.addLeadingZeros)(a,e.length)},T:function(t,e,n){const a=t.getTime();return(0,Nt.addLeadingZeros)(a,e.length)}};var Rt={longFormatters:void 0};const Ut=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},Jt=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}};Rt.longFormatters={p:Jt,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],a=n[1],r=n[2];if(!r)return Ut(t,e);let o;switch(a){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",Ut(a,e)).replace("{{time}}",Jt(r,e))}};var Vt={isProtectedDayOfYearToken:function(t){return Kt.test(t)},isProtectedWeekYearToken:function(t){return _t.test(t)},warnOrThrowProtectedError:function(t,e,n){const a=function(t,e,n){const a="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${a} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(a),te.includes(t))throw new RangeError(a)}};const Kt=/^D+$/,_t=/^Y+$/,te=["D","DD","YY","YYYY"];var ee={},ne={};ne.isDate=function(t){return t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)},ee.isValid=function(t){if(!(0,ae.isDate)(t)&&"number"!=typeof t)return!1;const e=(0,re.toDate)(t);return!isNaN(Number(e))};var ae=ne,re=H;!function(t){t.format=t.formatDate=function(t,e,l){const m=(0,a.getDefaultOptions)(),g=l?.locale??m.locale??n.defaultLocale,w=l?.firstWeekContainsDate??l?.locale?.options?.firstWeekContainsDate??m.firstWeekContainsDate??m.locale?.options?.firstWeekContainsDate??1,b=l?.weekStartsOn??l?.locale?.options?.weekStartsOn??m.weekStartsOn??m.locale?.options?.weekStartsOn??0,y=(0,u.toDate)(t);if(!(0,s.isValid)(y))throw new RangeError("Invalid time value");let v=e.match(c).map((t=>{const e=t[0];if("p"===e||"P"===e){return(0,o.longFormatters[e])(t,g.formatLong)}return t})).join("").match(d).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:f(t)};if(r.formatters[e])return{isToken:!0,value:t};if(e.match(h))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));g.localize.preprocessor&&(v=g.localize.preprocessor(y,v));const p={firstWeekContainsDate:w,weekStartsOn:b,locale:g};return v.map((n=>{if(!n.isToken)return n.value;const a=n.value;(!l?.useAdditionalWeekYearTokens&&(0,i.isProtectedWeekYearToken)(a)||!l?.useAdditionalDayOfYearTokens&&(0,i.isProtectedDayOfYearToken)(a))&&(0,i.warnOrThrowProtectedError)(a,e,String(t));return(0,r.formatters[a[0]])(y,a,g.localize,p)})).join("")},Object.defineProperty(t,"formatters",{enumerable:!0,get:function(){return r.formatters}}),Object.defineProperty(t,"longFormatters",{enumerable:!0,get:function(){return o.longFormatters}});var n=e,a=D,r=O,o=Rt,i=Vt,s=ee,u=H;const d=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,c=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,l=/^'([^]*?)'?$/,m=/''/g,h=/[a-zA-Z]/;function f(t){const e=t.match(l);return e?e[1].replace(m,"'"):t}}(t),async function(){const e=await async function(t){const e=new URLSearchParams({id:t.toString()});return await fetch(`https://fwd.innopolis.university/api/comic?${e.toString()}`).then((t=>t.json()))}(await async function(){const t=new URLSearchParams({email:"e.belozerov@innopolis.university"});return await fetch(`https://fwd.innopolis.university/api/hw2?${t.toString()}`).then((t=>t.json()))}()),n=t.format(new Date(e.year,e.month,e.day),"MMM d, yyyy"),a=document.createElement("div"),r=document.createElement("img"),o=document.createElement("h3"),i=document.createTextNode(e.safe_title);o.appendChild(i);const s=document.createTextNode(n),u=document.createElement("h3");u.appendChild(s),a.appendChild(o),a.appendChild(r),a.appendChild(u),r.src=e.img,r.alt=e.alt;const d=document.getElementById("image-container");null!=d&&d.appendChild(a)}()}();
//# sourceMappingURL=bundle.js.map