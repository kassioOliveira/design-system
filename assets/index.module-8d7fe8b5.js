import{R as g,r as u,a as we}from"./index-c0290abd.js";import{_ as M}from"./extends-98964cd2.js";var S="colors",C="sizes",p="space",Pe={gap:p,gridGap:p,columnGap:p,gridColumnGap:p,rowGap:p,gridRowGap:p,inset:p,insetBlock:p,insetBlockEnd:p,insetBlockStart:p,insetInline:p,insetInlineEnd:p,insetInlineStart:p,margin:p,marginTop:p,marginRight:p,marginBottom:p,marginLeft:p,marginBlock:p,marginBlockEnd:p,marginBlockStart:p,marginInline:p,marginInlineEnd:p,marginInlineStart:p,padding:p,paddingTop:p,paddingRight:p,paddingBottom:p,paddingLeft:p,paddingBlock:p,paddingBlockEnd:p,paddingBlockStart:p,paddingInline:p,paddingInlineEnd:p,paddingInlineStart:p,top:p,right:p,bottom:p,left:p,scrollMargin:p,scrollMarginTop:p,scrollMarginRight:p,scrollMarginBottom:p,scrollMarginLeft:p,scrollMarginX:p,scrollMarginY:p,scrollMarginBlock:p,scrollMarginBlockEnd:p,scrollMarginBlockStart:p,scrollMarginInline:p,scrollMarginInlineEnd:p,scrollMarginInlineStart:p,scrollPadding:p,scrollPaddingTop:p,scrollPaddingRight:p,scrollPaddingBottom:p,scrollPaddingLeft:p,scrollPaddingX:p,scrollPaddingY:p,scrollPaddingBlock:p,scrollPaddingBlockEnd:p,scrollPaddingBlockStart:p,scrollPaddingInline:p,scrollPaddingInlineEnd:p,scrollPaddingInlineStart:p,fontSize:"fontSizes",background:S,backgroundColor:S,backgroundImage:S,borderImage:S,border:S,borderBlock:S,borderBlockEnd:S,borderBlockStart:S,borderBottom:S,borderBottomColor:S,borderColor:S,borderInline:S,borderInlineEnd:S,borderInlineStart:S,borderLeft:S,borderLeftColor:S,borderRight:S,borderRightColor:S,borderTop:S,borderTopColor:S,caretColor:S,color:S,columnRuleColor:S,fill:S,outline:S,outlineColor:S,stroke:S,textDecorationColor:S,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:C,minBlockSize:C,maxBlockSize:C,inlineSize:C,minInlineSize:C,maxInlineSize:C,width:C,minWidth:C,maxWidth:C,height:C,minHeight:C,maxHeight:C,flexBasis:C,gridTemplateColumns:C,gridTemplateRows:C,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},Me=(e,t)=>typeof t=="function"?{"()":Function.prototype.toString.call(t)}:t,D=()=>{const e=Object.create(null);return(t,r,...n)=>{const o=(i=>JSON.stringify(i,Me))(t);return o in e?e[o]:e[o]=r(t,...n)}},W=Symbol.for("sxs.internal"),ne=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),ie=e=>{for(const t in e)return!0;return!1},{hasOwnProperty:Le}=Object.prototype,ee=e=>e.includes("-")?e:e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()),Ae=/\s+(?![^()]*\))/,_=e=>t=>e(...typeof t=="string"?String(t).split(Ae):[t]),se={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:_((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:_((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:_((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:_((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:_((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:_((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},Q=/([\d.]+)([^]*)/,We=(e,t)=>e.length?e.reduce((r,n)=>(r.push(...t.map(o=>o.includes("&")?o.replace(/&/g,/[ +>|~]/.test(n)&&/&.*&/.test(o)?`:is(${n})`:n):n+" "+o)),r),[]):t,je=(e,t)=>e in ze&&typeof t=="string"?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(r,n,o,i)=>n+(o==="stretch"?`-moz-available${i};${ee(e)}:${n}-webkit-fill-available`:`-moz-fit-content${i};${ee(e)}:${n}fit-content`)+i):String(t),ze={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},L=e=>e?e+"-":"",pe=(e,t,r)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(n,o,i,a,s)=>a=="$"==!!i?n:(o||a=="--"?"calc(":"")+"var(--"+(a==="$"?L(t)+(s.includes("$")?"":L(r))+s.replace(/\$/g,"-"):s)+")"+(o||a=="--"?"*"+(o||"")+(i||"1")+")":"")),Ne=/\s*,\s*(?![^()]*\))/,Te=Object.prototype.toString,F=(e,t,r,n,o)=>{let i,a,s;const c=(d,h,f)=>{let l,m;const b=y=>{for(l in y){const v=l.charCodeAt(0)===64,E=v&&Array.isArray(y[l])?y[l]:[y[l]];for(m of E){const x=/[A-Z]/.test($=l)?$:$.replace(/-[^]/g,R=>R[1].toUpperCase()),U=typeof m=="object"&&m&&m.toString===Te&&(!n.utils[x]||!h.length);if(x in n.utils&&!U){const R=n.utils[x];if(R!==a){a=R,b(R(m)),a=null;continue}}else if(x in se){const R=se[x];if(R!==s){s=R,b(R(m)),s=null;continue}}if(v&&(k=l.slice(1)in n.media?"@media "+n.media[l.slice(1)]:l,l=k.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(R,B,w,A,I,P)=>{const O=Q.test(B),q=.0625*(O?-1:1),[Z,oe]=O?[A,B]:[B,A];return"("+(w[0]==="="?"":w[0]===">"===O?"max-":"min-")+Z+":"+(w[0]!=="="&&w.length===1?oe.replace(Q,(Ie,X,Y)=>Number(X)+q*(w===">"?1:-1)+Y):oe)+(I?") and ("+(I[0]===">"?"min-":"max-")+Z+":"+(I.length===1?P.replace(Q,(Ie,X,Y)=>Number(X)+q*(I===">"?-1:1)+Y):P):"")+")"})),U){const R=v?f.concat(l):[...f],B=v?[...h]:We(h,l.split(Ne));i!==void 0&&o(ce(...i)),i=void 0,c(m,B,R)}else i===void 0&&(i=[[],h,f]),l=v||l.charCodeAt(0)!==36?l:`--${L(n.prefix)}${l.slice(1).replace(/\$/g,"-")}`,m=U?m:typeof m=="number"?m&&x in Oe?String(m)+"px":String(m):pe(je(x,m??""),n.prefix,n.themeMap[x]),i[0].push(`${v?`${l} `:`${ee(l)}:`}${m}`)}}var k,$};b(d),i!==void 0&&o(ce(...i)),i=void 0};c(e,t,r)},ce=(e,t,r)=>`${r.map(n=>`${n}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(r.length?r.length+1:0).join("}")}`,Oe={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},ae=e=>String.fromCharCode(e+(e>25?39:97)),j=e=>(t=>{let r,n="";for(r=Math.abs(t);r>52;r=r/52|0)n=ae(r%52)+n;return ae(r%52)+n})(((t,r)=>{let n=r.length;for(;n;)t=33*t^r.charCodeAt(--n);return t})(5381,JSON.stringify(e))>>>0),H=["themed","global","styled","onevar","resonevar","allvar","inline"],_e=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch{return!1}},Fe=e=>{let t;const r=()=>{const{cssRules:o}=t.sheet;return[].map.call(o,(i,a)=>{const{cssText:s}=i;let c="";if(s.startsWith("--sxs"))return"";if(o[a-1]&&(c=o[a-1].cssText).startsWith("--sxs")){if(!i.cssRules.length)return"";for(const d in t.rules)if(t.rules[d].group===i)return`--sxs{--sxs:${[...t.rules[d].cache].join(" ")}}${s}`;return i.cssRules.length?`${c}${s}`:""}return s}).join("")},n=()=>{if(t){const{rules:s,sheet:c}=t;if(!c.deleteRule){for(;Object(Object(c.cssRules)[0]).type===3;)c.cssRules.splice(0,1);c.cssRules=[]}for(const d in s)delete s[d]}const o=Object(e).styleSheets||[];for(const s of o)if(_e(s)){for(let c=0,d=s.cssRules;d[c];++c){const h=Object(d[c]);if(h.type!==1)continue;const f=Object(d[c+1]);if(f.type!==4)continue;++c;const{cssText:l}=h;if(!l.startsWith("--sxs"))continue;const m=l.slice(14,-3).trim().split(/\s+/),b=H[m[0]];b&&(t||(t={sheet:s,reset:n,rules:{},toString:r}),t.rules[b]={group:f,index:c,cache:new Set(m)})}if(t)break}if(!t){const s=(c,d)=>({type:d,cssRules:[],insertRule(h,f){this.cssRules.splice(f,0,s(h,{import:3,undefined:1}[(h.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return c==="@media{}"?`@media{${[].map.call(this.cssRules,h=>h.cssText).join("")}}`:c}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:s("","text/css"),rules:{},reset:n,toString:r}}const{sheet:i,rules:a}=t;for(let s=H.length-1;s>=0;--s){const c=H[s];if(!a[c]){const d=H[s+1],h=a[d]?a[d].index:i.cssRules.length;i.insertRule("@media{}",h),i.insertRule(`--sxs{--sxs:${s}}`,h),a[c]={group:i.cssRules[h+1],index:h,cache:new Set([s])}}De(a[c])}};return n(),t},De=e=>{const t=e.group;let r=t.cssRules.length;e.apply=n=>{try{t.insertRule(n,r),++r}catch{}}},V=Symbol(),Ue=D(),le=(e,t)=>Ue(e,()=>(...r)=>{let n={type:null,composers:new Set};for(const o of r)if(o!=null)if(o[W]){n.type==null&&(n.type=o[W].type);for(const i of o[W].composers)n.composers.add(i)}else o.constructor!==Object||o.$$typeof?n.type==null&&(n.type=o):n.composers.add(Ve(o,e));return n.type==null&&(n.type="span"),n.composers.size||n.composers.add(["PJLV",{},[],[],{},[]]),He(e,n,t)}),Ve=({variants:e,compoundVariants:t,defaultVariants:r,...n},o)=>{const i=`${L(o.prefix)}c-${j(n)}`,a=[],s=[],c=Object.create(null),d=[];for(const l in r)c[l]=String(r[l]);if(typeof e=="object"&&e)for(const l in e){h=c,f=l,Le.call(h,f)||(c[l]="undefined");const m=e[l];for(const b in m){const y={[l]:String(b)};String(b)==="undefined"&&d.push(l);const k=m[b],$=[y,k,!ie(k)];a.push($)}}var h,f;if(typeof t=="object"&&t)for(const l of t){let{css:m,...b}=l;m=typeof m=="object"&&m||{};for(const k in b)b[k]=String(b[k]);const y=[b,m,!ie(m)];s.push(y)}return[i,n,a,s,c,d]},He=(e,t,r)=>{const[n,o,i,a]=Ge(t.composers),s=typeof t.type=="function"||t.type.$$typeof?(f=>{function l(){for(let m=0;m<l[V].length;m++){const[b,y]=l[V][m];f.rules[b].apply(y)}return l[V]=[],null}return l[V]=[],l.rules={},H.forEach(m=>l.rules[m]={apply:b=>l[V].push([m,b])}),l})(r):null,c=(s||r).rules,d=`.${n}${o.length>1?`:where(.${o.slice(1).join(".")})`:""}`,h=f=>{f=typeof f=="object"&&f||qe;const{css:l,...m}=f,b={};for(const $ in i)if(delete m[$],$ in f){let v=f[$];typeof v=="object"&&v?b[$]={"@initial":i[$],...v}:(v=String(v),b[$]=v!=="undefined"||a.has($)?v:i[$])}else b[$]=i[$];const y=new Set([...o]);for(const[$,v,E,x]of t.composers){r.rules.styled.cache.has($)||(r.rules.styled.cache.add($),F(v,[`.${$}`],[],e,B=>{c.styled.apply(B)}));const U=de(E,b,e.media),R=de(x,b,e.media,!0);for(const B of U)if(B!==void 0)for(const[w,A,I]of B){const P=`${$}-${j(A)}-${w}`;y.add(P);const O=(I?r.rules.resonevar:r.rules.onevar).cache,q=I?c.resonevar:c.onevar;O.has(P)||(O.add(P),F(A,[`.${P}`],[],e,Z=>{q.apply(Z)}))}for(const B of R)if(B!==void 0)for(const[w,A]of B){const I=`${$}-${j(A)}-${w}`;y.add(I),r.rules.allvar.cache.has(I)||(r.rules.allvar.cache.add(I),F(A,[`.${I}`],[],e,P=>{c.allvar.apply(P)}))}}if(typeof l=="object"&&l){const $=`${n}-i${j(l)}-css`;y.add($),r.rules.inline.cache.has($)||(r.rules.inline.cache.add($),F(l,[`.${$}`],[],e,v=>{c.inline.apply(v)}))}for(const $ of String(f.className||"").trim().split(/\s+/))$&&y.add($);const k=m.className=[...y].join(" ");return{type:t.type,className:k,selector:d,props:m,toString:()=>k,deferredInjector:s}};return ne(h,{className:n,selector:d,[W]:t,toString:()=>(r.rules.styled.cache.has(n)||h(),n)})},Ge=e=>{let t="";const r=[],n={},o=[];for(const[i,,,,a,s]of e){t===""&&(t=i),r.push(i),o.push(...s);for(const c in a){const d=a[c];(n[c]===void 0||d!=="undefined"||s.includes(d))&&(n[c]=d)}}return[t,r,n,new Set(o)]},de=(e,t,r,n)=>{const o=[];e:for(let[i,a,s]of e){if(s)continue;let c,d=0,h=!1;for(c in i){const f=i[c];let l=t[c];if(l!==f){if(typeof l!="object"||!l)continue e;{let m,b,y=0;for(const k in l){if(f===String(l[k])){if(k!=="@initial"){const $=k.slice(1);(b=b||[]).push($ in r?r[$]:k.replace(/^@media ?/,"")),h=!0}d+=y,m=!0}++y}if(b&&b.length&&(a={["@media "+b.join(", ")]:a}),!m)continue e}}}(o[d]=o[d]||[]).push([n?"cv":`${c}-${i[c]}`,a,h])}return o},qe={},Ze=D(),Ke=(e,t)=>Ze(e,()=>(...r)=>{const n=()=>{for(let o of r){o=typeof o=="object"&&o||{};let i=j(o);if(!t.rules.global.cache.has(i)){if(t.rules.global.cache.add(i),"@import"in o){let a=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let s of[].concat(o["@import"]))s=s.includes('"')||s.includes("'")?s:`"${s}"`,t.sheet.insertRule(`@import ${s};`,a++);delete o["@import"]}F(o,[],[],e,a=>{t.rules.global.apply(a)})}}return""};return ne(n,{toString:n})}),Je=D(),Xe=(e,t)=>Je(e,()=>r=>{const n=`${L(e.prefix)}k-${j(r)}`,o=()=>{if(!t.rules.global.cache.has(n)){t.rules.global.cache.add(n);const i=[];F(r,[],[],e,s=>i.push(s));const a=`@keyframes ${n}{${i.join("")}}`;t.rules.global.apply(a)}return n};return ne(o,{get name(){return o()},toString:o})}),Ye=class{constructor(e,t,r,n){this.token=e==null?"":String(e),this.value=t==null?"":String(t),this.scale=r==null?"":String(r),this.prefix=n==null?"":String(n)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+L(this.prefix)+L(this.scale)+this.token}toString(){return this.computedValue}},Qe=D(),et=(e,t)=>Qe(e,()=>(r,n)=>{n=typeof r=="object"&&r||Object(n);const o=`.${r=(r=typeof r=="string"?r:"")||`${L(e.prefix)}t-${j(n)}`}`,i={},a=[];for(const c in n){i[c]={};for(const d in n[c]){const h=`--${L(e.prefix)}${c}-${d}`,f=pe(String(n[c][d]),e.prefix,c);i[c][d]=new Ye(d,f,c,e.prefix),a.push(`${h}:${f}`)}}const s=()=>{if(a.length&&!t.rules.themed.cache.has(r)){t.rules.themed.cache.add(r);const c=`${n===e.theme?":root,":""}.${r}{${a.join(";")}}`;t.rules.themed.apply(c)}return r};return{...i,get className(){return s()},selector:o,toString:s}}),tt=D(),nt=D(),jt=e=>{const t=(r=>{let n=!1;const o=tt(r,i=>{n=!0;const a="prefix"in(i=typeof i=="object"&&i||{})?String(i.prefix):"",s=typeof i.media=="object"&&i.media||{},c=typeof i.root=="object"?i.root||null:globalThis.document||null,d=typeof i.theme=="object"&&i.theme||{},h={prefix:a,media:s,theme:d,themeMap:typeof i.themeMap=="object"&&i.themeMap||{...Pe},utils:typeof i.utils=="object"&&i.utils||{}},f=Fe(c),l={css:le(h,f),globalCss:Ke(h,f),keyframes:Xe(h,f),createTheme:et(h,f),reset(){f.reset(),l.theme.toString()},theme:{},sheet:f,config:h,prefix:a,getCssText:f.toString,toString:f.toString};return String(l.theme=l.createTheme(d)),l});return n||o.reset(),o})(e);return t.styled=(({config:r,sheet:n})=>nt(r,()=>{const o=le(r,n);return(...i)=>{const a=o(...i),s=a[W].type,c=g.forwardRef((d,h)=>{const f=d&&d.as||s,{props:l,deferredInjector:m}=a(d);return delete l.as,l.ref=h,m?g.createElement(g.Fragment,null,g.createElement(f,l),g.createElement(m,null)):g.createElement(f,l)});return c.className=a.className,c.displayName=`Styled.${s.displayName||s.name||s}`,c.selector=a.selector,c.toString=()=>a.selector,c[W]=a[W],c}}))(t),t};function me(e,t=[]){let r=[];function n(i,a){const s=u.createContext(a),c=r.length;r=[...r,a];function d(f){const{scope:l,children:m,...b}=f,y=(l==null?void 0:l[e][c])||s,k=u.useMemo(()=>b,Object.values(b));return u.createElement(y.Provider,{value:k},m)}function h(f,l){const m=(l==null?void 0:l[e][c])||s,b=u.useContext(m);if(b)return b;if(a!==void 0)return a;throw new Error(`\`${f}\` must be used within \`${i}\``)}return d.displayName=i+"Provider",[d,h]}const o=()=>{const i=r.map(a=>u.createContext(a));return function(s){const c=(s==null?void 0:s[e])||i;return u.useMemo(()=>({[`__scope${e}`]:{...s,[e]:c}}),[s,c])}};return o.scopeName=e,[n,rt(o,...t)]}function rt(...e){const t=e[0];if(e.length===1)return t;const r=()=>{const n=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const a=n.reduce((s,{useScope:c,scopeName:d})=>{const f=c(i)[`__scope${d}`];return{...s,...f}},{});return u.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return r.scopeName=t.scopeName,r}function re(e){const t=u.useRef(e);return u.useEffect(()=>{t.current=e}),u.useMemo(()=>(...r)=>{var n;return(n=t.current)===null||n===void 0?void 0:n.call(t,...r)},[])}const J=globalThis!=null&&globalThis.document?u.useLayoutEffect:()=>{};function ot(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function he(...e){return t=>e.forEach(r=>ot(r,t))}function ge(...e){return u.useCallback(he(...e),e)}const be=u.forwardRef((e,t)=>{const{children:r,...n}=e,o=u.Children.toArray(r),i=o.find(st);if(i){const a=i.props.children,s=o.map(c=>c===i?u.Children.count(a)>1?u.Children.only(null):u.isValidElement(a)?a.props.children:null:c);return u.createElement(te,M({},n,{ref:t}),u.isValidElement(a)?u.cloneElement(a,void 0,s):null)}return u.createElement(te,M({},n,{ref:t}),r)});be.displayName="Slot";const te=u.forwardRef((e,t)=>{const{children:r,...n}=e;return u.isValidElement(r)?u.cloneElement(r,{...ct(n,r.props),ref:he(t,r.ref)}):u.Children.count(r)>1?u.Children.only(null):null});te.displayName="SlotClone";const it=({children:e})=>u.createElement(u.Fragment,null,e);function st(e){return u.isValidElement(e)&&e.type===it}function ct(e,t){const r={...t};for(const n in t){const o=e[n],i=t[n];/^on[A-Z]/.test(n)?o&&i?r[n]=(...s)=>{i(...s),o(...s)}:o&&(r[n]=o):n==="style"?r[n]={...o,...i}:n==="className"&&(r[n]=[o,i].filter(Boolean).join(" "))}return{...e,...r}}const at=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],G=at.reduce((e,t)=>{const r=u.forwardRef((n,o)=>{const{asChild:i,...a}=n,s=i?be:t;return u.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),u.createElement(s,M({},a,{ref:o}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),$e="Avatar",[lt,zt]=me($e),[dt,ke]=lt($e),ut=u.forwardRef((e,t)=>{const{__scopeAvatar:r,...n}=e,[o,i]=u.useState("idle");return u.createElement(dt,{scope:r,imageLoadingStatus:o,onImageLoadingStatusChange:i},u.createElement(G.span,M({},n,{ref:t})))}),ft="AvatarImage",pt=u.forwardRef((e,t)=>{const{__scopeAvatar:r,src:n,onLoadingStatusChange:o=()=>{},...i}=e,a=ke(ft,r),s=gt(n),c=re(d=>{o(d),a.onImageLoadingStatusChange(d)});return J(()=>{s!=="idle"&&c(s)},[s,c]),s==="loaded"?u.createElement(G.img,M({},i,{ref:t,src:n})):null}),mt="AvatarFallback",ht=u.forwardRef((e,t)=>{const{__scopeAvatar:r,delayMs:n,...o}=e,i=ke(mt,r),[a,s]=u.useState(n===void 0);return u.useEffect(()=>{if(n!==void 0){const c=window.setTimeout(()=>s(!0),n);return()=>window.clearTimeout(c)}},[n]),a&&i.imageLoadingStatus!=="loaded"?u.createElement(G.span,M({},o,{ref:t})):null});function gt(e){const[t,r]=u.useState("idle");return u.useEffect(()=>{if(!e){r("error");return}let n=!0;const o=new window.Image,i=a=>()=>{n&&r(a)};return r("loading"),o.onload=i("loaded"),o.onerror=i("error"),o.src=e,()=>{n=!1}},[e]),t}const Nt=ut,Tt=pt,Ot=ht;var bt=u.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Se=function(t,r,n){var o=n.get(t);return o?o(r):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function ue(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}var ye=u.forwardRef(function(e,t){var r=e.alt,n=e.color,o=e.size,i=e.weight,a=e.mirrored,s=e.children,c=e.renderPath,d=ue(e,["alt","color","size","weight","mirrored","children","renderPath"]),h=u.useContext(bt),f=h.color,l=f===void 0?"currentColor":f,m=h.size,b=h.weight,y=b===void 0?"regular":b,k=h.mirrored,$=k===void 0?!1:k,v=ue(h,["color","size","weight","mirrored"]);return g.createElement("svg",Object.assign({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o??m,height:o??m,fill:n??l,viewBox:"0 0 256 256",transform:a||$?"scale(-1, 1)":void 0},v,d),!!r&&g.createElement("title",null,r),s,g.createElement("rect",{width:"256",height:"256",fill:"none"}),c(i??y,n??l))});ye.displayName="IconBase";const ve=ye;var N=new Map;N.set("bold",function(e){return g.createElement(g.Fragment,null,g.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});N.set("duotone",function(e){return g.createElement(g.Fragment,null,g.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});N.set("fill",function(){return g.createElement(g.Fragment,null,g.createElement("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"}))});N.set("light",function(e){return g.createElement(g.Fragment,null,g.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});N.set("thin",function(e){return g.createElement(g.Fragment,null,g.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});N.set("regular",function(e){return g.createElement(g.Fragment,null,g.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var $t=function(t,r){return Se(t,r,N)},xe=u.forwardRef(function(e,t){return g.createElement(ve,Object.assign({ref:t},e,{renderPath:$t}))});xe.displayName="Check";const _t=xe;var T=new Map;T.set("bold",function(e){return g.createElement(g.Fragment,null,g.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),g.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});T.set("duotone",function(e){return g.createElement(g.Fragment,null,g.createElement("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),g.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),g.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});T.set("fill",function(){return g.createElement(g.Fragment,null,g.createElement("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"}))});T.set("light",function(e){return g.createElement(g.Fragment,null,g.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),g.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});T.set("thin",function(e){return g.createElement(g.Fragment,null,g.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),g.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});T.set("regular",function(e){return g.createElement(g.Fragment,null,g.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),g.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var kt=function(t,r){return Se(t,r,T)},Ee=u.forwardRef(function(e,t){return g.createElement(ve,Object.assign({ref:t},e,{renderPath:kt}))});Ee.displayName="User";const Ft=Ee;function fe(e,t,{checkForDefaultPrevented:r=!0}={}){return function(o){if(e==null||e(o),r===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function St({prop:e,defaultProp:t,onChange:r=()=>{}}){const[n,o]=yt({defaultProp:t,onChange:r}),i=e!==void 0,a=i?e:n,s=re(r),c=u.useCallback(d=>{if(i){const f=typeof d=="function"?d(e):d;f!==e&&s(f)}else o(d)},[i,e,o,s]);return[a,c]}function yt({defaultProp:e,onChange:t}){const r=u.useState(e),[n]=r,o=u.useRef(n),i=re(t);return u.useEffect(()=>{o.current!==n&&(i(n),o.current=n)},[n,o,i]),r}function vt(e){const t=u.useRef({value:e,previous:e});return u.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}function xt(e){const[t,r]=u.useState(void 0);return J(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const n=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let a,s;if("borderBoxSize"in i){const c=i.borderBoxSize,d=Array.isArray(c)?c[0]:c;a=d.inlineSize,s=d.blockSize}else a=e.offsetWidth,s=e.offsetHeight;r({width:a,height:s})});return n.observe(e,{box:"border-box"}),()=>n.unobserve(e)}else r(void 0)},[e]),t}function Et(e,t){return u.useReducer((r,n)=>{const o=t[r][n];return o??r},e)}const Ce=e=>{const{present:t,children:r}=e,n=Ct(t),o=typeof r=="function"?r({present:n.isPresent}):u.Children.only(r),i=ge(n.ref,o.ref);return typeof r=="function"||n.isPresent?u.cloneElement(o,{ref:i}):null};Ce.displayName="Presence";function Ct(e){const[t,r]=u.useState(),n=u.useRef({}),o=u.useRef(e),i=u.useRef("none"),a=e?"mounted":"unmounted",[s,c]=Et(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return u.useEffect(()=>{const d=K(n.current);i.current=s==="mounted"?d:"none"},[s]),J(()=>{const d=n.current,h=o.current;if(h!==e){const l=i.current,m=K(d);e?c("MOUNT"):m==="none"||(d==null?void 0:d.display)==="none"?c("UNMOUNT"):c(h&&l!==m?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,c]),J(()=>{if(t){const d=f=>{const m=K(n.current).includes(f.animationName);f.target===t&&m&&we.flushSync(()=>c("ANIMATION_END"))},h=f=>{f.target===t&&(i.current=K(n.current))};return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else c("ANIMATION_END")},[t,c]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:u.useCallback(d=>{d&&(n.current=getComputedStyle(d)),r(d)},[])}}function K(e){return(e==null?void 0:e.animationName)||"none"}const Re="Checkbox",[Rt,Dt]=me(Re),[Bt,It]=Rt(Re),wt=u.forwardRef((e,t)=>{const{__scopeCheckbox:r,name:n,checked:o,defaultChecked:i,required:a,disabled:s,value:c="on",onCheckedChange:d,...h}=e,[f,l]=u.useState(null),m=ge(t,E=>l(E)),b=u.useRef(!1),y=f?!!f.closest("form"):!0,[k=!1,$]=St({prop:o,defaultProp:i,onChange:d}),v=u.useRef(k);return u.useEffect(()=>{const E=f==null?void 0:f.form;if(E){const x=()=>$(v.current);return E.addEventListener("reset",x),()=>E.removeEventListener("reset",x)}},[f,$]),u.createElement(Bt,{scope:r,state:k,disabled:s},u.createElement(G.button,M({type:"button",role:"checkbox","aria-checked":z(k)?"mixed":k,"aria-required":a,"data-state":Be(k),"data-disabled":s?"":void 0,disabled:s,value:c},h,{ref:m,onKeyDown:fe(e.onKeyDown,E=>{E.key==="Enter"&&E.preventDefault()}),onClick:fe(e.onClick,E=>{$(x=>z(x)?!0:!x),y&&(b.current=E.isPropagationStopped(),b.current||E.stopPropagation())})})),y&&u.createElement(Lt,{control:f,bubbles:!b.current,name:n,value:c,checked:k,required:a,disabled:s,style:{transform:"translateX(-100%)"}}))}),Pt="CheckboxIndicator",Mt=u.forwardRef((e,t)=>{const{__scopeCheckbox:r,forceMount:n,...o}=e,i=It(Pt,r);return u.createElement(Ce,{present:n||z(i.state)||i.state===!0},u.createElement(G.span,M({"data-state":Be(i.state),"data-disabled":i.disabled?"":void 0},o,{ref:t,style:{pointerEvents:"none",...e.style}})))}),Lt=e=>{const{control:t,checked:r,bubbles:n=!0,...o}=e,i=u.useRef(null),a=vt(r),s=xt(t);return u.useEffect(()=>{const c=i.current,d=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(d,"checked").set;if(a!==r&&f){const l=new Event("click",{bubbles:n});c.indeterminate=z(r),f.call(c,z(r)?!1:r),c.dispatchEvent(l)}},[a,r,n]),u.createElement("input",M({type:"checkbox","aria-hidden":!0,defaultChecked:z(r)?!1:r},o,{tabIndex:-1,ref:i,style:{...e.style,...s,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function z(e){return e==="indeterminate"}function Be(e){return z(e)?"indeterminate":e?"checked":"unchecked"}const Ut=wt,Vt=Mt;export{Nt as $,_t as C,ve as I,Ft as U,Tt as a,Ot as b,Ut as c,Vt as d,Pe as n,jt as q,Se as r};
//# sourceMappingURL=index.module-8d7fe8b5.js.map