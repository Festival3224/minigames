(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M24%2012.2727C24%2011.4218%2023.9221%2010.6036%2023.7774%209.81818H12.2449V14.4655H18.8349C18.5455%2015.96%2017.6772%2017.2255%2016.3748%2018.0764V21.0982H20.3488C22.6642%2019.0036%2024%2015.9273%2024%2012.2727Z'%20fill='%234285F4'/%3e%3cpath%20d='M12.2449%2024C15.551%2024%2018.3228%2022.9309%2020.3488%2021.0982L16.3748%2018.0764C15.2839%2018.7964%2013.8924%2019.2327%2012.2449%2019.2327C9.06122%2019.2327%206.35622%2017.1273%205.38776%2014.2909H1.31354V17.3891C3.32839%2021.3055%207.45826%2024%2012.2449%2024Z'%20fill='%2334A853'/%3e%3cpath%20d='M5.38776%2014.28C5.14286%2013.56%204.99814%2012.7964%204.99814%2012C4.99814%2011.2036%205.14286%2010.44%205.38776%209.72V6.62182H1.31354C0.478664%208.23636%200%2010.0582%200%2012C0%2013.9418%200.478664%2015.7636%201.31354%2017.3782L4.48609%2014.9564L5.38776%2014.28Z'%20fill='%23FBBC05'/%3e%3cpath%20d='M12.2449%204.77818C14.0482%204.77818%2015.6512%205.38909%2016.9314%206.56727L20.4379%203.13091C18.3117%201.18909%2015.551%200%2012.2449%200C7.45826%200%203.32839%202.69455%201.31354%206.62182L5.38776%209.72C6.35622%206.88364%209.06122%204.77818%2012.2449%204.77818Z'%20fill='%23EA4335'/%3e%3c/svg%3e`,t={isValid:!0,error:``},n=e=>e?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)?t:{isValid:!1,error:`Enter a valid email address.`}:{isValid:!1,error:`Email is required.`},r=e=>e?e.length<2||e.length>30?{isValid:!1,error:`Username must be between 2 and 30 characters.`}:/^[A-Z]/.test(e)?/^[A-Za-z0-9]+$/.test(e)?t:{isValid:!1,error:`Username may contain English letters and digits only.`}:{isValid:!1,error:`Username must start with an uppercase English letter.`}:{isValid:!1,error:`Username is required.`},i=e=>e?e.length<6?{isValid:!1,error:`Password must contain at least 6 characters.`}:/^[\u{21}-\u{7E}]+$/u.test(e)?/[A-Z]/.test(e)?/\d/.test(e)?/[^A-Za-z0-9]/.test(e)?t:{isValid:!1,error:`Password must contain at least one special character.`}:{isValid:!1,error:`Password must contain at least one digit.`}:{isValid:!1,error:`Password must contain at least one uppercase English letter.`}:{isValid:!1,error:`Password may contain English letters, digits, and special characters only.`}:{isValid:!1,error:`Password is required.`},a=e=>e?e.length<6?{isValid:!1,error:`Password must contain at least 6 characters.`}:t:{isValid:!1,error:`Password is required.`},o=(e,n)=>n?n===e?t:{isValid:!1,error:`Passwords do not match.`}:{isValid:!1,error:`Password confirmation is required.`},s=()=>void 0,c=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)==55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)==56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},l=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let a=e[n++];t[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){let a=e[n++],o=e[n++],s=e[n++],c=((i&7)<<18|(a&63)<<12|(o&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{let a=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|o&63)}}return t.join(``)},u={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`,get ENCODED_VALS(){return this.ENCODED_VALS_BASE+`+/=`},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+`-_.`},HAS_NATIVE_SUPPORT:typeof atob==`function`,encodeByteArray(e,t){if(!Array.isArray(e))throw Error(`encodeByteArray takes an array as a parameter`);this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let i=e[t],a=t+1<e.length,o=a?e[t+1]:0,s=t+2<e.length,c=s?e[t+2]:0,l=i>>2,u=(i&3)<<4|o>>4,d=(o&15)<<2|c>>6,f=c&63;s||(f=64,a||(d=64)),r.push(n[l],n[u],n[d],n[f])}return r.join(``)},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(c(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):l(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let i=n[e.charAt(t++)],a=t<e.length?n[e.charAt(t)]:0;++t;let o=t<e.length?n[e.charAt(t)]:64;++t;let s=t<e.length?n[e.charAt(t)]:64;if(++t,i==null||a==null||o==null||s==null)throw new d;let c=i<<2|a>>4;if(r.push(c),o!==64){let e=a<<4&240|o>>2;if(r.push(e),s!==64){let e=o<<6&192|s;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},d=class extends Error{constructor(){super(...arguments),this.name=`DecodeBase64StringError`}},f=function(e){let t=c(e);return u.encodeByteArray(t,!0)},p=function(e){return f(e).replace(/\./g,``)},m=function(e){try{return u.decodeString(e,!0)}catch(e){console.error(`base64Decode failed: `,e)}return null};function h(){if(typeof self<`u`)return self;if(typeof window<`u`)return window;if(typeof global<`u`)return global;throw Error(`Unable to locate global object.`)}var g=()=>h().__FIREBASE_DEFAULTS__,_=()=>{if(typeof process>`u`)return;let e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},v=()=>{if(typeof document>`u`)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let t=e&&m(e[1]);return t&&JSON.parse(t)},y=()=>{try{return s()||g()||_()||v()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},b=e=>y()?.emulatorHosts?.[e],x=()=>y()?.config,S=e=>y()?.[`_${e}`],C=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e==`function`&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}};function w(){return typeof navigator<`u`&&typeof navigator.userAgent==`string`?navigator.userAgent:``}function T(){return typeof window<`u`&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(w())}function E(){return typeof navigator<`u`&&navigator.userAgent===`Cloudflare-Workers`}function D(){let e=typeof chrome==`object`?chrome.runtime:typeof browser==`object`?browser.runtime:void 0;return typeof e==`object`&&e.id!==void 0}function O(){return typeof navigator==`object`&&navigator.product===`ReactNative`}function k(){let e=w();return e.indexOf(`MSIE `)>=0||e.indexOf(`Trident/`)>=0}function ee(){try{return typeof indexedDB==`object`}catch{return!1}}function A(){return new Promise((e,t)=>{try{let n=!0,r=`validate-browser-context-for-indexeddb-analytics-module`,i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{t(i.error?.message||``)}}catch(e){t(e)}})}var te=`FirebaseError`,j=class e extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=te,Object.setPrototypeOf(this,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,M.prototype.create)}},M=class{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?ne(i,n):`Error`;return new j(r,`${this.serviceName}: ${a} (${r}).`,n)}};function ne(e,t){try{let n=0,r=``;for(;n<e.length;){let i=e.indexOf(`{$`,n);if(i===-1){r+=e.substring(n);break}let a=e.indexOf(`}`,i+2);if(a===-1){r+=e.substring(n);break}let o=e.substring(i+2,a),s=t[o];r+=e.substring(n,i)+(s==null?`<${o}?>`:String(s)),n=a+1}return r}catch{return e}}function re(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ie(e,t){if(e===t)return!0;let n=Object.keys(e),r=Object.keys(t);for(let i of n){if(!r.includes(i))return!1;let n=e[i],a=t[i];if(ae(n)&&ae(a)){if(!ie(n,a))return!1}else if(n!==a)return!1}for(let e of r)if(!n.includes(e))return!1;return!0}function ae(e){return typeof e==`object`&&!!e}function oe(e){let t=[];for(let[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+`=`+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+`=`+encodeURIComponent(r));return t.length?`&`+t.join(`&`):``}function se(e){let t={};return e.replace(/^\?/,``).split(`&`).forEach(e=>{if(e){let[n,r]=e.split(`=`);t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function ce(e){let t=e.indexOf(`?`);if(!t)return``;let n=e.indexOf(`#`,t);return e.substring(t,n>0?n:void 0)}function le(e,t){let n=new ue(e,t);return n.subscribe.bind(n)}var ue=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(e===void 0&&t===void 0&&n===void 0)throw Error(`Missing Observer.`);r=de(e,[`next`,`error`,`complete`])?e:{next:e,error:t,complete:n},r.next===void 0&&(r.next=fe),r.error===void 0&&(r.error=fe),r.complete===void 0&&(r.complete=fe);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers!==void 0&&this.observers[e]!==void 0&&(delete this.observers[e],--this.observerCount,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(e){typeof console<`u`&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function de(e,t){if(typeof e!=`object`||!e)return!1;for(let n of t)if(n in e&&typeof e[n]==`function`)return!0;return!1}function fe(){}function N(e){return e&&e._delegate?e._delegate:e}function pe(e){try{return(e.startsWith(`http://`)||e.startsWith(`https://`)?new URL(e).hostname:e).endsWith(`.cloudworkstations.dev`)}catch{return!1}}async function me(e){return(await fetch(e,{credentials:`include`})).ok}var he=class{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode=`LAZY`,this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}},ge=`[DEFAULT]`,_e=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new C;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){let t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(e){if(n)return null;throw e}if(n)return null;throw Error(`Service ${this.name} is not available`)}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(ye(e))try{this.getOrInitializeService({instanceIdentifier:ge})}catch{}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch{}}}}clearInstance(e=ge){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>`INTERNAL`in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>`_delete`in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ge){return this.instances.has(e)}getOptions(e=ge){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(e)&&t.resolve(r);return r}onInit(e,t){let n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);let i=this.instances.get(n);return i&&e(i,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:ve(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=ge){return this.component?this.component.multipleInstances?e:ge:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!==`EXPLICIT`}};function ve(e){return e===ge?void 0:e}function ye(e){return e.instantiationMode===`EAGER`}var be=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new _e(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}},xe=[],P;(function(e){e[e.DEBUG=0]=`DEBUG`,e[e.VERBOSE=1]=`VERBOSE`,e[e.INFO=2]=`INFO`,e[e.WARN=3]=`WARN`,e[e.ERROR=4]=`ERROR`,e[e.SILENT=5]=`SILENT`})(P||={});var Se={debug:P.DEBUG,verbose:P.VERBOSE,info:P.INFO,warn:P.WARN,error:P.ERROR,silent:P.SILENT},Ce=P.INFO,we={[P.DEBUG]:`log`,[P.VERBOSE]:`log`,[P.INFO]:`info`,[P.WARN]:`warn`,[P.ERROR]:`error`},Te=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=we[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)},Ee=class{constructor(e){this.name=e,this._logLevel=Ce,this._logHandler=Te,this._userLogHandler=null,xe.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in P))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e==`string`?Se[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!=`function`)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,P.DEBUG,...e),this._logHandler(this,P.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,P.VERBOSE,...e),this._logHandler(this,P.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,P.INFO,...e),this._logHandler(this,P.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,P.WARN,...e),this._logHandler(this,P.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,P.ERROR,...e),this._logHandler(this,P.ERROR,...e)}},De=(e,t)=>t.some(t=>e instanceof t),Oe,ke;function Ae(){return Oe||=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]}function je(){return ke||=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey]}var Me=new WeakMap,Ne=new WeakMap,Pe=new WeakMap,Fe=new WeakMap,Ie=new WeakMap;function Le(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener(`success`,i),e.removeEventListener(`error`,a)},i=()=>{t(F(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener(`success`,i),e.addEventListener(`error`,a)});return t.then(t=>{t instanceof IDBCursor&&Me.set(t,e)}).catch(()=>{}),Ie.set(t,e),t}function Re(e){if(Ne.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener(`complete`,i),e.removeEventListener(`error`,a),e.removeEventListener(`abort`,a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException(`AbortError`,`AbortError`)),r()};e.addEventListener(`complete`,i),e.addEventListener(`error`,a),e.addEventListener(`abort`,a)});Ne.set(e,t)}var ze={get(e,t,n){if(e instanceof IDBTransaction){if(t===`done`)return Ne.get(e);if(t===`objectStoreNames`)return e.objectStoreNames||Pe.get(e);if(t===`store`)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return F(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t===`done`||t===`store`)||t in e}};function Be(e){ze=e(ze)}function Ve(e){return e===IDBDatabase.prototype.transaction&&!(`objectStoreNames`in IDBTransaction.prototype)?function(t,...n){let r=e.call(Ue(this),t,...n);return Pe.set(r,t.sort?t.sort():[t]),F(r)}:je().includes(e)?function(...t){return e.apply(Ue(this),t),F(Me.get(this))}:function(...t){return F(e.apply(Ue(this),t))}}function He(e){return typeof e==`function`?Ve(e):(e instanceof IDBTransaction&&Re(e),De(e,Ae())?new Proxy(e,ze):e)}function F(e){if(e instanceof IDBRequest)return Le(e);if(Fe.has(e))return Fe.get(e);let t=He(e);return t!==e&&(Fe.set(e,t),Ie.set(t,e)),t}var Ue=e=>Ie.get(e);function We(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){let o=indexedDB.open(e,t),s=F(o);return r&&o.addEventListener(`upgradeneeded`,e=>{r(F(o.result),e.oldVersion,e.newVersion,F(o.transaction),e)}),n&&o.addEventListener(`blocked`,e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{a&&e.addEventListener(`close`,()=>a()),i&&e.addEventListener(`versionchange`,e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s}var Ge=[`get`,`getKey`,`getAll`,`getAllKeys`,`count`],Ke=[`put`,`add`,`delete`,`clear`],qe=new Map;function Je(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t==`string`))return;if(qe.get(t))return qe.get(t);let n=t.replace(/FromIndex$/,``),r=t!==n,i=Ke.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ge.includes(n)))return;let a=async function(e,...t){let a=this.transaction(e,i?`readwrite`:`readonly`),o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return qe.set(t,a),a}Be(e=>({...e,get:(t,n,r)=>Je(t,n)||e.get(t,n,r),has:(t,n)=>!!Je(t,n)||e.has(t,n)}));var Ye=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Xe(e)){let t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(` `)}};function Xe(e){return e.getComponent()?.type===`VERSION`}var Ze=`@firebase/app`,Qe=`0.16.2`,I=new Ee(`@firebase/app`),$e=`@firebase/app-compat`,et=`@firebase/analytics-compat`,tt=`@firebase/analytics`,nt=`@firebase/app-check-compat`,rt=`@firebase/app-check`,it=`@firebase/auth`,at=`@firebase/auth-compat`,ot=`@firebase/database`,st=`@firebase/data-connect`,ct=`@firebase/database-compat`,lt=`@firebase/functions`,ut=`@firebase/functions-compat`,dt=`@firebase/installations`,ft=`@firebase/installations-compat`,pt=`@firebase/messaging`,mt=`@firebase/messaging-compat`,ht=`@firebase/performance`,gt=`@firebase/performance-compat`,_t=`@firebase/remote-config`,vt=`@firebase/remote-config-compat`,yt=`@firebase/storage`,bt=`@firebase/storage-compat`,xt=`@firebase/firestore`,St=`@firebase/ai`,Ct=`@firebase/firestore-compat`,wt=`firebase`,Tt=`12.19.0`,Et=`[DEFAULT]`,Dt={[Ze]:`fire-core`,[$e]:`fire-core-compat`,[tt]:`fire-analytics`,[et]:`fire-analytics-compat`,[rt]:`fire-app-check`,[nt]:`fire-app-check-compat`,[it]:`fire-auth`,[at]:`fire-auth-compat`,[ot]:`fire-rtdb`,[st]:`fire-data-connect`,[ct]:`fire-rtdb-compat`,[lt]:`fire-fn`,[ut]:`fire-fn-compat`,[dt]:`fire-iid`,[ft]:`fire-iid-compat`,[pt]:`fire-fcm`,[mt]:`fire-fcm-compat`,[ht]:`fire-perf`,[gt]:`fire-perf-compat`,[_t]:`fire-rc`,[vt]:`fire-rc-compat`,[yt]:`fire-gcs`,[bt]:`fire-gcs-compat`,[xt]:`fire-fst`,[Ct]:`fire-fst-compat`,[St]:`fire-vertex`,"fire-js":`fire-js`,[wt]:`fire-js-all`},Ot=new Map,kt=new Map,At=new Map;function jt(e,t){try{e.container.addComponent(t)}catch(n){I.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Mt(e){let t=e.name;if(At.has(t))return I.debug(`There were multiple attempts to register component ${t}.`),!1;At.set(t,e);for(let t of Ot.values())jt(t,e);for(let t of kt.values())jt(t,e);return!0}function Nt(e,t){let n=e.container.getProvider(`heartbeat`).getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function L(e){return e!=null&&e.settings!==void 0}var R=new M(`app`,`Firebase`,{"no-app":`No Firebase App '{$appName}' has been created - call initializeApp() first`,"bad-app-name":`Illegal App name: '{$appName}'`,"duplicate-app":`Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.`,"app-deleted":`Firebase App named '{$appName}' already deleted`,"server-app-deleted":`Firebase Server App has been deleted`,"no-options":`Need to provide options, when not being deployed to hosting via source.`,"invalid-app-argument":`firebase.{$appName}() takes either no argument or a Firebase App instance.`,"invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":`Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.`,"idb-get":`Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.`,"idb-set":`Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.`,"idb-delete":`Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.`,"finalization-registry-not-supported":`FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.`,"invalid-server-app-environment":`FirebaseServerApp is not for use in browser environments.`}),Pt=class{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new he(`app`,()=>this,`PUBLIC`))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw R.create(`app-deleted`,{appName:this._name})}},Ft=Tt;function It(e,t={}){let n=e;typeof t!=`object`&&(t={name:t});let r={name:Et,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!=`string`||!i)throw R.create(`bad-app-name`,{appName:String(i)});if(n||=x(),!n)throw R.create(`no-options`);let a=Ot.get(i);if(a){if(!ie(n,a.options))throw R.create(`duplicate-app`,{appName:i,mismatchedParam:`options`,oldValue:JSON.stringify(a.options),newValue:JSON.stringify(n)});if(ie(r,a.config))return a;throw R.create(`duplicate-app`,{appName:i,mismatchedParam:`config`,oldValue:JSON.stringify(a.config),newValue:JSON.stringify(r)})}let o=new be(i);for(let e of At.values())o.addComponent(e);let s=new Pt(n,r,o);return Ot.set(i,s),s}function Lt(e=Et){let t=Ot.get(e);if(!t&&e===`[DEFAULT]`&&x())return It();if(!t)throw R.create(`no-app`,{appName:e});return t}function Rt(e,t,n){let r=Dt[e]??e;n&&(r+=`-${n}`);let i=r.match(/\s|\//),a=t.match(/\s|\//);if(i||a){let e=[`Unable to register library "${r}" with version "${t}":`];i&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&e.push(`and`),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),I.warn(e.join(` `));return}Mt(new he(`${r}-version`,()=>({library:r,version:t}),`VERSION`))}var zt=`firebase-heartbeat-database`,Bt=1,Vt=`firebase-heartbeat-store`,Ht=null;function Ut(){return Ht||=We(zt,Bt,{upgrade:(e,t)=>{if(t===0)try{e.createObjectStore(Vt)}catch(e){console.warn(e)}}}).catch(e=>{throw R.create(`idb-open`,{originalErrorMessage:e.message})}),Ht}async function Wt(e){try{let t=(await Ut()).transaction(Vt),n=await t.objectStore(Vt).get(Kt(e));return await t.done,n}catch(e){if(e instanceof j)I.warn(e.message);else{let t=R.create(`idb-get`,{originalErrorMessage:e?.message});I.warn(t.message)}}}async function Gt(e,t){try{let n=(await Ut()).transaction(Vt,`readwrite`);await n.objectStore(Vt).put(t,Kt(e)),await n.done}catch(e){if(e instanceof j)I.warn(e.message);else{let t=R.create(`idb-set`,{originalErrorMessage:e?.message});I.warn(t.message)}}}function Kt(e){return`${e.name}!${e.options.appId}`}var qt=1024,Jt=30,Yt=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider(`app`).getImmediate();this._storage=new Qt(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{let e=this.container.getProvider(`platform-logger`).getImmediate().getPlatformInfoString(),t=Xt();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(e=>e.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats.length>Jt){let e=en(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){I.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return``;let e=Xt(),{heartbeatsToSend:t,unsentEntries:n}=Zt(this._heartbeatsCache.heartbeats),r=p(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return I.warn(e),``}}};function Xt(){return new Date().toISOString().substring(0,10)}function Zt(e,t=qt){let n=[],r=e.slice();for(let i of e){let e=n.find(e=>e.agent===i.agent);if(!e){if(n.push({agent:i.agent,dates:[i.date]}),$t(n)>t){n.pop();break}}else if(e.dates.push(i.date),$t(n)>t){e.dates.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}var Qt=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ee()?A().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let e=await Wt(this.app);return e?.heartbeats?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){let t=await this.read();return Gt(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){if(await this._canUseIndexedDBPromise){let t=await this.read();return Gt(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}};function $t(e){return p(JSON.stringify({version:2,heartbeats:e})).length}function en(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}function tn(e){Mt(new he(`platform-logger`,e=>new Ye(e),`PRIVATE`)),Mt(new he(`heartbeat`,e=>new Yt(e),`PRIVATE`)),Rt(Ze,Qe,e),Rt(Ze,Qe,`esm2020`),Rt(`fire-js`,``)}tn(``);function nn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var rn=nn,an=new M(`auth`,`Firebase`,nn()),on=new Ee(`@firebase/auth`);function sn(e,...t){on.logLevel<=P.WARN&&on.warn(`Auth (${Ft}): ${e}`,...t)}function cn(e,...t){on.logLevel<=P.ERROR&&on.error(`Auth (${Ft}): ${e}`,...t)}function z(e,...t){throw dn(e,...t)}function B(e,...t){return dn(e,...t)}function ln(e,t,n){return new M(`auth`,`Firebase`,{...rn(),[t]:n}).create(t,{appName:e.name})}function V(e){return ln(e,`operation-not-supported-in-this-environment`,`Operations that alter the current user are not supported in conjunction with FirebaseServerApp`)}function un(e,t,n){let r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&z(e,`argument-error`),ln(e,`argument-error`,`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function dn(e,...t){if(typeof e!=`string`){let n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return an.create(e,...t)}function H(e,t,...n){if(!e)throw dn(t,...n)}function U(e){let t=`INTERNAL ASSERTION FAILED: `+e;throw cn(t),Error(t)}function W(e,t){e||U(t)}function fn(){return typeof self<`u`&&self.location?.href||``}function pn(){return mn()===`http:`||mn()===`https:`}function mn(){return typeof self<`u`&&self.location?.protocol||null}function hn(){return typeof navigator<`u`&&navigator&&`onLine`in navigator&&typeof navigator.onLine==`boolean`&&(pn()||D()||`connection`in navigator)?navigator.onLine:!0}function gn(){if(typeof navigator>`u`)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}var _n=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,W(t>e,`Short delay should be less than long delay!`),this.isMobile=T()||O()}get(){return hn()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function vn(e,t){W(e.emulator,`Emulator should always be set here`);let{url:n}=e.emulator;return t?`${n}${t.startsWith(`/`)?t.slice(1):t}`:n}var yn=class{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<`u`&&`fetch`in self)return self.fetch;if(typeof globalThis<`u`&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<`u`)return fetch;U(`Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill`)}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<`u`&&`Headers`in self)return self.Headers;if(typeof globalThis<`u`&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<`u`)return Headers;U(`Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill`)}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<`u`&&`Response`in self)return self.Response;if(typeof globalThis<`u`&&globalThis.Response)return globalThis.Response;if(typeof Response<`u`)return Response;U(`Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill`)}},bn={CREDENTIAL_MISMATCH:`custom-token-mismatch`,MISSING_CUSTOM_TOKEN:`internal-error`,INVALID_IDENTIFIER:`invalid-email`,MISSING_CONTINUE_URI:`internal-error`,INVALID_PASSWORD:`wrong-password`,MISSING_PASSWORD:`missing-password`,INVALID_LOGIN_CREDENTIALS:`invalid-credential`,EMAIL_EXISTS:`email-already-in-use`,PASSWORD_LOGIN_DISABLED:`operation-not-allowed`,INVALID_IDP_RESPONSE:`invalid-credential`,INVALID_PENDING_TOKEN:`invalid-credential`,FEDERATED_USER_ID_ALREADY_LINKED:`credential-already-in-use`,MISSING_REQ_TYPE:`internal-error`,EMAIL_NOT_FOUND:`user-not-found`,RESET_PASSWORD_EXCEED_LIMIT:`too-many-requests`,EXPIRED_OOB_CODE:`expired-action-code`,INVALID_OOB_CODE:`invalid-action-code`,MISSING_OOB_CODE:`internal-error`,CREDENTIAL_TOO_OLD_LOGIN_AGAIN:`requires-recent-login`,INVALID_ID_TOKEN:`invalid-user-token`,TOKEN_EXPIRED:`user-token-expired`,USER_NOT_FOUND:`user-token-expired`,TOO_MANY_ATTEMPTS_TRY_LATER:`too-many-requests`,PASSWORD_DOES_NOT_MEET_REQUIREMENTS:`password-does-not-meet-requirements`,INVALID_CODE:`invalid-verification-code`,INVALID_SESSION_INFO:`invalid-verification-id`,INVALID_TEMPORARY_PROOF:`invalid-credential`,MISSING_SESSION_INFO:`missing-verification-id`,SESSION_EXPIRED:`code-expired`,MISSING_ANDROID_PACKAGE_NAME:`missing-android-pkg-name`,UNAUTHORIZED_DOMAIN:`unauthorized-continue-uri`,INVALID_OAUTH_CLIENT_ID:`invalid-oauth-client-id`,ADMIN_ONLY_OPERATION:`admin-restricted-operation`,INVALID_MFA_PENDING_CREDENTIAL:`invalid-multi-factor-session`,MFA_ENROLLMENT_NOT_FOUND:`multi-factor-info-not-found`,MISSING_MFA_ENROLLMENT_ID:`missing-multi-factor-info`,MISSING_MFA_PENDING_CREDENTIAL:`missing-multi-factor-session`,SECOND_FACTOR_EXISTS:`second-factor-already-in-use`,SECOND_FACTOR_LIMIT_EXCEEDED:`maximum-second-factor-count-exceeded`,BLOCKING_FUNCTION_ERROR_RESPONSE:`internal-error`,RECAPTCHA_NOT_ENABLED:`recaptcha-not-enabled`,MISSING_RECAPTCHA_TOKEN:`missing-recaptcha-token`,INVALID_RECAPTCHA_TOKEN:`invalid-recaptcha-token`,INVALID_RECAPTCHA_ACTION:`invalid-recaptcha-action`,MISSING_CLIENT_TYPE:`missing-client-type`,MISSING_RECAPTCHA_VERSION:`missing-recaptcha-version`,INVALID_RECAPTCHA_VERSION:`invalid-recaptcha-version`,INVALID_REQ_TYPE:`invalid-req-type`},xn=[`/v1/accounts:signInWithCustomToken`,`/v1/accounts:signInWithEmailLink`,`/v1/accounts:signInWithIdp`,`/v1/accounts:signInWithPassword`,`/v1/accounts:signInWithPhoneNumber`,`/v1/token`],Sn=new _n(3e4,6e4);function G(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function K(e,t,n,r,i={}){return Cn(e,i,async()=>{let i={},a={};r&&(t===`GET`?a=r:i={body:JSON.stringify(r)});let o=oe({...a,key:e.config.apiKey}).slice(1),s=await e._getAdditionalHeaders();s[`Content-Type`]=`application/json`,e.languageCode&&(s[`X-Firebase-Locale`]=e.languageCode);let c={method:t,headers:s,...i};return E()||(c.referrerPolicy=`strict-origin-when-cross-origin`),e.emulatorConfig&&pe(e.emulatorConfig.host)&&(c.credentials=`include`),yn.fetch()(await Tn(e,e.config.apiHost,n,o),c)})}async function Cn(e,t,n){e._canInitEmulator=!1;let r={...bn,...t};try{let t=new Dn(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();let a=await i.json();if(`needConfirmation`in a)throw On(e,`account-exists-with-different-credential`,a);if(i.ok&&!(`errorMessage`in a))return a;{let[t,n]=(i.ok?a.errorMessage:a.error.message).split(` : `);if(t===`FEDERATED_USER_ID_ALREADY_LINKED`)throw On(e,`credential-already-in-use`,a);if(t===`EMAIL_EXISTS`)throw On(e,`email-already-in-use`,a);if(t===`USER_DISABLED`)throw On(e,`user-disabled`,a);let o=r[t]||t.toLowerCase().replace(/[_\s]+/g,`-`);if(n)throw ln(e,o,n);z(e,o)}}catch(t){if(t instanceof j)throw t;z(e,`network-request-failed`,{message:String(t)})}}async function wn(e,t,n,r,i={}){let a=await K(e,t,n,r,i);return`mfaPendingCredential`in a&&z(e,`multi-factor-auth-required`,{_serverResponse:a}),a}async function Tn(e,t,n,r){let i=`${t}${n}?${r}`,a=e,o=a.config.emulator?vn(e.config,i):`${e.config.apiScheme}://${i}`;return xn.includes(n)&&(await a._persistenceManagerAvailable,a._getPersistenceType()===`COOKIE`)?a._getPersistence()._getFinalTarget(o).toString():o}function En(e){switch(e){case`ENFORCE`:return`ENFORCE`;case`AUDIT`:return`AUDIT`;case`OFF`:return`OFF`;default:return`ENFORCEMENT_STATE_UNSPECIFIED`}}var Dn=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(B(this.auth,`network-request-failed`)),Sn.get())})}};function On(e,t,n){let r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);let i=B(e,t,r);return i.customData._tokenResponse=n,i}function kn(e){return e!==void 0&&e.enterprise!==void 0}var An=class{constructor(e){if(this.siteKey=``,this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw Error(`recaptchaKey undefined`);this.siteKey=e.recaptchaKey.split(`/`)[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return En(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)===`ENFORCE`||this.getProviderEnforcementState(e)===`AUDIT`}isAnyProviderEnabled(){return this.isProviderEnabled(`EMAIL_PASSWORD_PROVIDER`)||this.isProviderEnabled(`PHONE_PROVIDER`)}};async function jn(e,t){return K(e,`GET`,`/v2/recaptchaConfig`,G(e,t))}async function Mn(e,t){return K(e,`POST`,`/v1/accounts:delete`,t)}async function Nn(e,t){return K(e,`POST`,`/v1/accounts:lookup`,t)}function Pn(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Fn(e,t=!1){let n=N(e),r=await n.getIdToken(t),i=Ln(r);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,`internal-error`);let a=typeof i.firebase==`object`?i.firebase:void 0,o=a?.sign_in_provider;return{claims:i,token:r,authTime:Pn(In(i.auth_time)),issuedAtTime:Pn(In(i.iat)),expirationTime:Pn(In(i.exp)),signInProvider:o||null,signInSecondFactor:a?.sign_in_second_factor||null}}function In(e){return Number(e)*1e3}function Ln(e){let[t,n,r]=e.split(`.`);if(t===void 0||n===void 0||r===void 0)return cn(`JWT malformed, contained fewer than 3 sections`),null;try{let e=m(n);return e?JSON.parse(e):(cn(`Failed to decode base64 JWT payload`),null)}catch(e){return cn(`Caught error parsing JWT payload as JSON`,e?.toString()),null}}function Rn(e){let t=Ln(e);return H(t,`internal-error`),H(t.exp!==void 0,`internal-error`),H(t.iat!==void 0,`internal-error`),Number(t.exp)-Number(t.iat)}async function zn(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof j&&Bn(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}function Bn({code:e}){return e===`auth/user-disabled`||e===`auth/user-token-expired`}var Vn=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){let e=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),e}{this.errorBackoff=3e4;let e=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code===`auth/network-request-failed`&&this.schedule(!0);return}this.schedule()}},Hn=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pn(this.lastLoginAt),this.creationTime=Pn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function Un(e){let t=e.auth,n=await zn(e,Nn(t,{idToken:await e.getIdToken()}));H(n?.users.length,t,`internal-error`);let r=n.users[0];e._notifyReloadListener(r);let i=r.providerUserInfo?.length?Kn(r.providerUserInfo):[],a=Gn(e.providerData,i),o=e.isAnonymous,s=!(e.email&&r.passwordHash)&&!a?.length,c=o?s:!1,l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Hn(r.createdAt,r.lastLoginAt),isAnonymous:c};Object.assign(e,l)}async function Wn(e){let t=N(e);await Un(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Gn(e,t){return[...e.filter(e=>!t.some(t=>t.providerId===e.providerId)),...t]}function Kn(e){return e.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||``,displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}async function qn(e,t){let n=await Cn(e,{},async()=>{let n=oe({grant_type:`refresh_token`,refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,a=await Tn(e,r,`/v1/token`,`key=${i}`),o=await e._getAdditionalHeaders();o[`Content-Type`]=`application/x-www-form-urlencoded`;let s={method:`POST`,headers:o,body:n};return e.emulatorConfig&&pe(e.emulatorConfig.host)&&(s.credentials=`include`),yn.fetch()(a,s)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Jn(e,t){return K(e,`POST`,`/v2/accounts:revokeToken`,G(e,t))}var Yn=class e{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,`internal-error`),H(e.idToken!==void 0,`internal-error`),H(e.refreshToken!==void 0,`internal-error`);let t=`expiresIn`in e&&e.expiresIn!==void 0?Number(e.expiresIn):Rn(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){H(e.length!==0,`internal-error`);let t=Rn(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,`user-token-expired`),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:n,refreshToken:r,expiresIn:i}=await qn(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(t,n){let{refreshToken:r,accessToken:i,expirationTime:a}=n,o=new e;return r&&(H(typeof r==`string`,`internal-error`,{appName:t}),o.refreshToken=r),i&&(H(typeof i==`string`,`internal-error`,{appName:t}),o.accessToken=i),a&&(H(typeof a==`number`,`internal-error`,{appName:t}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new e,this.toJSON())}_performRefresh(){return U(`not implemented`)}};function q(e,t){H(typeof e==`string`||e===void 0,`internal-error`,{appName:t})}var Xn=class e{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId=`firebase`,this.proactiveRefresh=new Vn(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Hn(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){let t=await zn(this,this.stsTokenManager.getToken(this.auth,e));return H(t,this.auth,`internal-error`),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Fn(this,e)}reload(){return Wn(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,`internal-error`),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(t){let n=new e({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,`internal-error`),this.reloadListener=e,this.reloadUserInfo&&=(this._notifyReloadListener(this.reloadUserInfo),null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Un(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(L(this.auth.app))return Promise.reject(V(this.auth));let e=await this.getIdToken();return await zn(this,Mn(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||``}static _fromJSON(t,n){let r=n.displayName??void 0,i=n.email??void 0,a=n.phoneNumber??void 0,o=n.photoURL??void 0,s=n.tenantId??void 0,c=n._redirectEventId??void 0,l=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:d,emailVerified:f,isAnonymous:p,providerData:m,stsTokenManager:h}=n;H(d&&h,t,`internal-error`);let g=Yn.fromJSON(this.name,h);H(typeof d==`string`,t,`internal-error`),q(r,t.name),q(i,t.name),H(typeof f==`boolean`,t,`internal-error`),H(typeof p==`boolean`,t,`internal-error`),q(a,t.name),q(o,t.name),q(s,t.name),q(c,t.name),q(l,t.name),q(u,t.name);let _=new e({uid:d,auth:t,email:i,emailVerified:f,displayName:r,isAnonymous:p,photoURL:o,phoneNumber:a,tenantId:s,stsTokenManager:g,createdAt:l,lastLoginAt:u});return m&&Array.isArray(m)&&(_.providerData=m.map(e=>({...e}))),c&&(_._redirectEventId=c),_}static async _fromIdTokenResponse(t,n,r=!1){let i=new Yn;i.updateFromServerResponse(n);let a=new e({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Un(a),a}static async _fromGetAccountInfoResponse(t,n,r){let i=n.users[0];H(i.localId!==void 0,`internal-error`);let a=i.providerUserInfo===void 0?[]:Kn(i.providerUserInfo),o=!(i.email&&i.passwordHash)&&!a?.length,s=new Yn;s.updateFromIdToken(r);let c=new e({uid:i.localId,auth:t,stsTokenManager:s,isAnonymous:o}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Hn(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!a?.length};return Object.assign(c,l),c}},Zn=new Map;function J(e){W(e instanceof Function,`Expected a class definition`);let t=Zn.get(e);return t?(W(t instanceof e,`Instance stored in cache mismatched with class`),t):(t=new e,Zn.set(e,t),t)}var Qn=class{constructor(){this.type=`NONE`,this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};Qn.type=`NONE`;var $n=Qn;function er(e,t,n){return`firebase:${e}:${t}:${n}`}var tr=class e{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;let{config:r,name:i}=this.auth;this.fullUserKey=er(this.userKey,r.apiKey,i),this.fullPersistenceKey=er(`persistence`,r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e==`string`){let t=await Nn(this.auth,{idToken:e}).catch(()=>void 0);return t?Xn._fromGetAccountInfoResponse(this.auth,t,e):null}return Xn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(t,n,r=`authUser`){if(!n.length)return new e(J($n),t,r);let i=(await Promise.all(n.map(async e=>{try{if(await e._isAvailable())return e}catch{return}}))).filter(e=>e),a=i[0]||J($n),o=er(r,t.config.apiKey,t.name),s=null;for(let e of n)try{let n=await e._get(o);if(n){let r;if(typeof n==`string`){let e=await Nn(t,{idToken:n}).catch(()=>void 0);if(!e)break;r=await Xn._fromGetAccountInfoResponse(t,e,n)}else r=Xn._fromJSON(t,n);e!==a&&(s=r),a=e;break}}catch{}let c=i.filter(e=>e._shouldAllowMigration);return!a._shouldAllowMigration||!c.length?new e(a,t,r):(a=c[0],s&&await a._set(o,s.toJSON()),await Promise.all(n.map(async e=>{if(e!==a)try{await e._remove(o)}catch{}})),new e(a,t,r))}};function nr(e){let t=e.toLowerCase();if(t.includes(`opera/`)||t.includes(`opr/`)||t.includes(`opios/`))return`Opera`;if(or(t))return`IEMobile`;if(t.includes(`msie`)||t.includes(`trident/`))return`IE`;if(t.includes(`edge/`))return`Edge`;if(rr(t))return`Firefox`;if(t.includes(`silk/`))return`Silk`;if(cr(t))return`Blackberry`;if(lr(t))return`Webos`;if(ir(t))return`Safari`;if((t.includes(`chrome/`)||ar(t))&&!t.includes(`edge/`))return`Chrome`;if(sr(t))return`Android`;{let t=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if(t?.length===2)return t[1]}return`Other`}function rr(e=w()){return/firefox\//i.test(e)}function ir(e=w()){let t=e.toLowerCase();return t.includes(`safari/`)&&!t.includes(`chrome/`)&&!t.includes(`crios/`)&&!t.includes(`android`)}function ar(e=w()){return/crios\//i.test(e)}function or(e=w()){return/iemobile/i.test(e)}function sr(e=w()){return/android/i.test(e)}function cr(e=w()){return/blackberry/i.test(e)}function lr(e=w()){return/webos/i.test(e)}function ur(e=w()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function dr(e=w()){return ur(e)&&!!window.navigator?.standalone}function fr(){return k()&&document.documentMode===10}function pr(e=w()){return ur(e)||sr(e)||lr(e)||cr(e)||/windows phone/i.test(e)||or(e)}function mr(e,t=[]){let n;switch(e){case`Browser`:n=nr(w());break;case`Worker`:n=`${nr(w())}-${e}`;break;default:n=e}let r=t.length?t.join(`,`):`FirebaseCore-web`;return`${n}/JsCore/${Ft}/${r}`}var hr=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let n=t=>new Promise((n,r)=>{try{n(e(t))}catch(e){r(e)}});n.onAbort=t,this.queue.push(n);let r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(let e of t)try{e()}catch{}throw this.auth._errorFactory.create(`login-blocked`,{originalMessage:e?.message})}}};async function gr(e,t={}){return K(e,`GET`,`/v2/passwordPolicy`,G(e,t))}var _r=6,vr=class{constructor(e){let t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??_r,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState===`ENFORCEMENT_STATE_UNSPECIFIED`&&(this.enforcementState=`OFF`),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join(``)??``,this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){let t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&=t.meetsMinPasswordLength??!0,t.isValid&&=t.meetsMaxPasswordLength??!0,t.isValid&&=t.containsLowercaseLetter??!0,t.isValid&&=t.containsUppercaseLetter??!0,t.isValid&&=t.containsNumericCharacter??!0,t.isValid&&=t.containsNonAlphanumericCharacter??!0,t}validatePasswordLengthOptions(e,t){let n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>=`a`&&n<=`z`,n>=`A`&&n<=`Z`,n>=`0`&&n<=`9`,this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||=t),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||=n),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||=r),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||=i)}},yr=class{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new br(this),this.idTokenSubscription=new br(this),this.beforeStateQueue=new hr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=an,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=J(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted){try{this.persistenceManager=await tr.create(this,e)}catch(e){sn(`Failed to initialize persistence: ${e}`),this.persistenceManager=await tr.create(this,[])}finally{this._resolvePersistenceManagerAvailable?.()}if(!this._deleted){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(t)}catch(e){sn(`Failed to initialize current user: ${e}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await Nn(this,{idToken:e}),n=await Xn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(e){console.warn(`FirebaseServerApp could not login user with provided authIdToken: `,e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(L(this.app)){let e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}let t=await this.assertedPersistence.getCurrentUser(),n=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let t=this.redirectUser?._redirectEventId,i=n?._redirectEventId,a=await this.tryRedirectSignIn(e);(!t||t===i)&&a?.user&&(n=a.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,`argument-error`),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Un(e)}catch(e){if(e?.code!==`auth/network-request-failed`)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gn()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(L(this.app))return Promise.reject(V(this));let t=e?N(e):null;return t&&H(t.auth.config.apiKey===this.config.apiKey,this,`invalid-user-token`),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,`tenant-id-mismatch`),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return L(this.app)?Promise.reject(V(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return L(this.app)?Promise.reject(V(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(J(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion===this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?t.validatePassword(e):Promise.reject(this._errorFactory.create(`unsupported-password-policy-schema-version`,{}))}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=new vr(await gr(this));this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new M(`auth`,`Firebase`,e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t={providerId:`apple.com`,tokenType:`ACCESS_TOKEN`,token:e,idToken:await this.currentUser.getIdToken()};this.tenantId!=null&&(t.tenantId=this.tenantId),await Jn(this,t)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){let n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&J(e)||this._popupRedirectResolver;H(t,this,`argument-error`),this.redirectPersistenceManager=await tr.create(this,[J(t._redirectPersistence)],`redirectUser`),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};let i=typeof t==`function`?t:t.next.bind(t),a=!1,o=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(o,this,`internal-error`),o.then(()=>{a||i(this.currentUser)}).catch(e=>{if(!a){if(typeof t!=`function`&&t.error)t.error(e);else if(n)n(e);else throw e}}),typeof t==`function`){let i=e.addObserver(t,n,r);return()=>{a=!0,i()}}{let n=e.addObserver(t);return()=>{a=!0,n()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(e){let t=e?.message||String(e),n=ln(this,`internal-error`,`An internal AuthError has occurred: ${t}`);throw n.customData={originalError:e},n}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,`internal-error`),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){let e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e[`X-Firebase-gmpid`]=this.app.options.appId);let t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e[`X-Firebase-Client`]=t);let n=await this._getAppCheckToken();return n&&(e[`X-Firebase-AppCheck`]=n),e}async _getAppCheckToken(){if(L(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&sn(`Error while retrieving App Check token: ${e.error}`),e?.token}};function Y(e){return N(e)}var br=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=le(e=>this.observer=e)}get next(){return H(this.observer,this.auth,`internal-error`),this.observer.next.bind(this.observer)}},xr={async loadJS(){throw Error(`Unable to load external scripts`)},recaptchaV2Script:``,recaptchaEnterpriseScript:``,gapiScript:``};function Sr(e){xr=e}function Cr(e){return xr.loadJS(e)}function wr(){return xr.recaptchaEnterpriseScript}function Tr(){return xr.gapiScript}function Er(e){return`__${e}${Math.floor(Math.random()*1e6)}`}var Dr=class{constructor(){this.enterprise=new Or}ready(e){e()}execute(e,t){return Promise.resolve(`token`)}render(e,t){return``}},Or=class{ready(e){e()}execute(e,t){return Promise.resolve(`token`)}render(e,t){return``}},kr=`recaptcha-enterprise`,Ar=`NO_RECAPTCHA`,jr=`onFirebaseAuthREInstanceReady`,Mr=class e{constructor(e){this.type=kr,this.auth=Y(e)}async verify(t=`verify`,n=!1){async function r(e){if(!n){if(e.tenantId==null&&e._agentRecaptchaConfig!=null)return e._agentRecaptchaConfig.siteKey;if(e.tenantId!=null&&e._tenantRecaptchaConfigs[e.tenantId]!==void 0)return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{jn(e,{clientType:`CLIENT_TYPE_WEB`,version:`RECAPTCHA_ENTERPRISE`}).then(r=>{if(r.recaptchaKey===void 0)n(Error(`recaptcha Enterprise site key undefined`));else{let n=new An(r);return e.tenantId==null?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}}).catch(e=>{n(e)})})}function i(e,n,r){let i=window.grecaptcha;kn(i)?i.enterprise.ready(()=>{i.enterprise.execute(e,{action:t}).then(e=>{n(e)}).catch(()=>{n(Ar)})}):r(Error(`No reCAPTCHA enterprise script loaded.`))}return this.auth.settings.appVerificationDisabledForTesting?new Dr().execute(`siteKey`,{action:`verify`}):new Promise((t,a)=>{r(this.auth).then(async r=>{if(!n&&kn(window.grecaptcha)&&e.scriptInjectionDeferred)await e.scriptInjectionDeferred.promise,i(r,t,a);else{if(typeof window>`u`){a(Error(`RecaptchaVerifier is only supported in browser`));return}let n=wr();n.length!==0&&(n+=r+`&onload=${jr}`),e.scriptInjectionDeferred=new C,window[jr]=()=>{e.scriptInjectionDeferred?.resolve()},Cr(n).then(()=>e.scriptInjectionDeferred?.promise).then(()=>{i(r,t,a)}).catch(e=>{a(e)})}}).catch(e=>{a(e)})})}};Mr.scriptInjectionDeferred=null;async function Nr(e,t,n,r=!1,i=!1){let a=new Mr(e),o;if(i)o=Ar;else try{o=await a.verify(n)}catch{o=await a.verify(n,!0)}let s={...t};if(n===`mfaSmsEnrollment`||n===`mfaSmsSignIn`){if(`phoneEnrollmentInfo`in s){let e=s.phoneEnrollmentInfo.phoneNumber,t=s.phoneEnrollmentInfo.recaptchaToken;Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:o,clientType:`CLIENT_TYPE_WEB`,recaptchaVersion:`RECAPTCHA_ENTERPRISE`}})}else if(`phoneSignInInfo`in s){let e=s.phoneSignInInfo.recaptchaToken;Object.assign(s,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:o,clientType:`CLIENT_TYPE_WEB`,recaptchaVersion:`RECAPTCHA_ENTERPRISE`}})}return s}return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:`CLIENT_TYPE_WEB`}),Object.assign(s,{recaptchaVersion:`RECAPTCHA_ENTERPRISE`}),s}async function Pr(e,t,n,r,i){return i===`EMAIL_PASSWORD_PROVIDER`?e._getRecaptchaConfig()?.isProviderEnabled(`EMAIL_PASSWORD_PROVIDER`)?r(e,await Nr(e,t,n,n===`getOobCode`)):r(e,t).catch(async i=>i.code===`auth/missing-recaptcha-token`?(console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`),r(e,await Nr(e,t,n,n===`getOobCode`))):Promise.reject(i)):i===`PHONE_PROVIDER`?e._getRecaptchaConfig()?.isProviderEnabled(`PHONE_PROVIDER`)?r(e,await Nr(e,t,n)).catch(async i=>e._getRecaptchaConfig()?.getProviderEnforcementState(`PHONE_PROVIDER`)===`AUDIT`&&(i.code===`auth/missing-recaptcha-token`||i.code===`auth/invalid-app-credential`)?(console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`),r(e,await Nr(e,t,n,!1,!0))):Promise.reject(i)):r(e,await Nr(e,t,n,!1,!0)):Promise.reject(i+` provider is not supported.`)}function Fr(e,t){let n=Nt(e,`auth`);if(n.isInitialized()){let e=n.getImmediate();if(ie(n.getOptions(),t??{}))return e;z(e,`already-initialized`)}return n.initialize({options:t})}function Ir(e,t){let n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(J);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}function Lr(e,t,n){let r=Y(e);H(/^https?:\/\//.test(t),r,`invalid-emulator-scheme`);let i=!!n?.disableWarnings,a=Rr(t),{host:o,port:s}=zr(t),c=s===null?``:`:${s}`,l={url:`${a}//${o}${c}/`},u=Object.freeze({host:o,port:s,protocol:a.replace(`:`,``),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){H(r.config.emulator&&r.emulatorConfig,r,`emulator-config-failed`),H(ie(l,r.config.emulator)&&ie(u,r.emulatorConfig),r,`emulator-config-failed`);return}r.config.emulator=l,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,pe(o)?me(`${a}//${o}${c}`):i||Vr()}function Rr(e){let t=e.indexOf(`:`);return t<0?``:e.substr(0,t+1)}function zr(e){let t=Rr(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:``,port:null};let r=n[2].split(`@`).pop()||``,i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let e=i[1];return{host:e,port:Br(r.substr(e.length+1))}}{let[e,t]=r.split(`:`);return{host:e,port:Br(t)}}}function Br(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}function Vr(){function e(){let e=document.createElement(`p`),t=e.style;e.innerText=`Running in emulator mode. Do not use with production credentials.`,t.position=`fixed`,t.width=`100%`,t.backgroundColor=`#ffffff`,t.border=`.1em solid #000000`,t.color=`#b50000`,t.bottom=`0px`,t.left=`0px`,t.margin=`0px`,t.zIndex=`10000`,t.textAlign=`center`,e.classList.add(`firebase-emulator-warning`),document.body.appendChild(e)}typeof console<`u`&&typeof console.info==`function`&&console.info(`WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.`),typeof window<`u`&&typeof document<`u`&&(document.readyState===`loading`?window.addEventListener(`DOMContentLoaded`,e):e())}var Hr=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return U(`not implemented`)}_getIdTokenResponse(e){return U(`not implemented`)}_linkToIdToken(e,t){return U(`not implemented`)}_getReauthenticationResolver(e){return U(`not implemented`)}};async function Ur(e,t){return K(e,`POST`,`/v1/accounts:signUp`,t)}async function Wr(e,t){return wn(e,`POST`,`/v1/accounts:signInWithPassword`,G(e,t))}async function Gr(e,t){return K(e,`POST`,`/v1/accounts:sendOobCode`,G(e,t))}async function Kr(e,t){return Gr(e,t)}async function qr(e,t){return wn(e,`POST`,`/v1/accounts:signInWithEmailLink`,G(e,t))}async function Jr(e,t){return wn(e,`POST`,`/v1/accounts:signInWithEmailLink`,G(e,t))}var Yr=class e extends Hr{constructor(e,t,n,r=null){super(`password`,n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(t,n){return new e(t,n,`password`)}static _fromEmailAndCode(t,n,r=null){return new e(t,n,`emailLink`,r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e==`string`?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod===`password`)return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod===`emailLink`)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case`password`:return Pr(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:`CLIENT_TYPE_WEB`},`signInWithPassword`,Wr,`EMAIL_PASSWORD_PROVIDER`);case`emailLink`:return qr(e,{email:this._email,oobCode:this._password});default:z(e,`internal-error`)}}async _linkToIdToken(e,t){switch(this.signInMethod){case`password`:return Pr(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:`CLIENT_TYPE_WEB`},`signUpPassword`,Ur,`EMAIL_PASSWORD_PROVIDER`);case`emailLink`:return Jr(e,{idToken:t,email:this._email,oobCode:this._password});default:z(e,`internal-error`)}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function Xr(e,t){return wn(e,`POST`,`/v1/accounts:signInWithIdp`,G(e,t))}var Zr=`http://localhost`,Qr=class e extends Hr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){let n=new e(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):z(`argument-error`),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){let{providerId:n,signInMethod:r,...i}=typeof t==`string`?JSON.parse(t):t;if(!n||!r)return null;let a=new e(n,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){return Xr(e,this.buildRequest())}_linkToIdToken(e,t){let n=this.buildRequest();return n.idToken=t,Xr(e,n)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,Xr(e,t)}buildRequest(){let e={requestUri:Zr,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=oe(t)}return e}};function $r(e){switch(e){case`recoverEmail`:return`RECOVER_EMAIL`;case`resetPassword`:return`PASSWORD_RESET`;case`signIn`:return`EMAIL_SIGNIN`;case`verifyEmail`:return`VERIFY_EMAIL`;case`verifyAndChangeEmail`:return`VERIFY_AND_CHANGE_EMAIL`;case`revertSecondFactorAddition`:return`REVERT_SECOND_FACTOR_ADDITION`;default:return null}}function ei(e){let t=se(ce(e)).link,n=t?se(ce(t)).deep_link_id:null,r=se(ce(e)).deep_link_id;return(r?se(ce(r)).link:null)||r||n||t||e}var ti=class e{constructor(e){let t=se(ce(e)),n=t.apiKey??null,r=t.oobCode??null,i=$r(t.mode??null);H(n&&r&&i,`argument-error`),this.apiKey=n,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(t){let n=ei(t);try{return new e(n)}catch{return null}}},ni=class e{constructor(){this.providerId=e.PROVIDER_ID}static credential(e,t){return Yr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let n=ti.parseLink(t);return H(n,`argument-error`),Yr._fromEmailAndCode(e,n.code,n.tenantId)}};ni.PROVIDER_ID=`password`,ni.EMAIL_PASSWORD_SIGN_IN_METHOD=`password`,ni.EMAIL_LINK_SIGN_IN_METHOD=`emailLink`;var ri=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}},ii=class extends ri{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}},ai=class e extends ii{constructor(){super(`facebook.com`)}static credential(t){return Qr._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return e.credentialFromTaggedObject(t)}static credentialFromError(t){return e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!(`oauthAccessToken`in t)||!t.oauthAccessToken)return null;try{return e.credential(t.oauthAccessToken)}catch{return null}}};ai.FACEBOOK_SIGN_IN_METHOD=`facebook.com`,ai.PROVIDER_ID=`facebook.com`;var oi=class e extends ii{constructor(){super(`google.com`),this.addScope(`profile`)}static credential(t,n){return Qr._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return e.credentialFromTaggedObject(t)}static credentialFromError(t){return e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;let{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return e.credential(n,r)}catch{return null}}};oi.GOOGLE_SIGN_IN_METHOD=`google.com`,oi.PROVIDER_ID=`google.com`;var si=class e extends ii{constructor(){super(`github.com`)}static credential(t){return Qr._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return e.credentialFromTaggedObject(t)}static credentialFromError(t){return e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!(`oauthAccessToken`in t)||!t.oauthAccessToken)return null;try{return e.credential(t.oauthAccessToken)}catch{return null}}};si.GITHUB_SIGN_IN_METHOD=`github.com`,si.PROVIDER_ID=`github.com`;var ci=class e extends ii{constructor(){super(`twitter.com`)}static credential(t,n){return Qr._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return e.credentialFromTaggedObject(t)}static credentialFromError(t){return e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;let{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return e.credential(n,r)}catch{return null}}};ci.TWITTER_SIGN_IN_METHOD=`twitter.com`,ci.PROVIDER_ID=`twitter.com`;async function li(e,t){return wn(e,`POST`,`/v1/accounts:signUp`,G(e,t))}var ui=class e{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){let a=await Xn._fromIdTokenResponse(t,r,i),o=di(r);return new e({user:a,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);let i=di(r);return new e({user:t,providerId:i,_tokenResponse:r,operationType:n})}};function di(e){return e.providerId?e.providerId:`phoneNumber`in e?`phone`:null}var fi=class e extends j{constructor(t,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,e.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new e(t,n,r,i)}};function pi(e,t,n,r){return(t===`reauthenticate`?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{throw n.code===`auth/multi-factor-auth-required`?fi._fromErrorAndOperation(e,n,t,r):n})}async function mi(e,t,n=!1){let r=await zn(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ui._forOperation(e,`link`,r)}async function hi(e,t,n=!1){let{auth:r}=e;if(L(r.app))return Promise.reject(V(r));let i=`reauthenticate`;try{let a=await zn(e,pi(r,i,t,e),n);H(a.idToken,r,`internal-error`);let o=Ln(a.idToken);H(o,r,`internal-error`);let{sub:s}=o;return H(e.uid===s,r,`user-mismatch`),ui._forOperation(e,i,a)}catch(e){throw e?.code===`auth/user-not-found`&&z(r,`user-mismatch`),e}}async function gi(e,t,n=!1){if(L(e.app))return Promise.reject(V(e));let r=`signIn`,i=await pi(e,r,t),a=await ui._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(a.user),a}async function _i(e,t){return gi(Y(e),t)}function vi(e,t,n){H(n.url?.length>0,e,`invalid-continue-uri`),H(n.dynamicLinkDomain===void 0||n.dynamicLinkDomain.length>0,e,`invalid-dynamic-link-domain`),H(n.linkDomain===void 0||n.linkDomain.length>0,e,`invalid-hosting-link-domain`),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.linkDomain=n.linkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(H(n.iOS.bundleId.length>0,e,`missing-ios-bundle-id`),t.iOSBundleId=n.iOS.bundleId),n.android&&(H(n.android.packageName.length>0,e,`missing-android-pkg-name`),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}async function yi(e){let t=Y(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function bi(e,t,n){let r=Y(e),i={requestType:`PASSWORD_RESET`,email:t,clientType:`CLIENT_TYPE_WEB`};n&&vi(r,i,n),await Pr(r,i,`getOobCode`,Kr,`EMAIL_PASSWORD_PROVIDER`)}async function xi(e,t,n){if(L(e.app))return Promise.reject(V(e));let r=Y(e),i=await Pr(r,{returnSecureToken:!0,email:t,password:n,clientType:`CLIENT_TYPE_WEB`},`signUpPassword`,li,`EMAIL_PASSWORD_PROVIDER`).catch(t=>{throw t.code===`auth/password-does-not-meet-requirements`&&yi(e),t}),a=await ui._fromIdTokenResponse(r,`signIn`,i);return await r._updateCurrentUser(a.user),a}function Si(e,t,n){return L(e.app)?Promise.reject(V(e)):_i(N(e),ni.credential(t,n)).catch(async t=>{throw t.code===`auth/password-does-not-meet-requirements`&&yi(e),t})}async function Ci(e,t){return K(e,`POST`,`/v1/accounts:update`,t)}async function wi(e,t){let{displayName:n,photoURL:r}=t;if(n===void 0&&r===void 0)return;let i=N(e),a={idToken:await i.getIdToken(),displayName:n,photoUrl:r,returnSecureToken:!0},o=await zn(i,Ci(i.auth,a));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;let s=i.providerData.find(({providerId:e})=>e===`password`);s&&(s.displayName=i.displayName,s.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function Ti(e,t,n,r){return N(e).onIdTokenChanged(t,n,r)}function Ei(e,t,n){return N(e).beforeAuthStateChanged(t,n)}function Di(e){return N(e).signOut()}var Oi=`__sak`,ki=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Oi,`1`),this.storage.removeItem(Oi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}},Ai=1e3,ji=10,Mi=class extends ki{constructor(){super(()=>window.localStorage,`LOCAL`),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=pr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});return}let n=e.key;t?this.detachListener():this.stopPolling();let r=()=>{let e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);fr()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,ji):r()}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let e of Array.from(n))e(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent(`storage`,{key:e,oldValue:t,newValue:n}),!0)})},Ai)}stopPolling(){this.pollTimer&&=(clearInterval(this.pollTimer),null)}attachListener(){window.addEventListener(`storage`,this.boundEventHandler)}detachListener(){window.removeEventListener(`storage`,this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};Mi.type=`LOCAL`;var Ni=Mi,Pi=class extends ki{constructor(){super(()=>window.sessionStorage,`SESSION`)}_addListener(e,t){}_removeListener(e,t){}};Pi.type=`SESSION`;var Fi=Pi;function Ii(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}}))}var Li=class e{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){let n=this.receivers.find(e=>e.isListeningto(t));if(n)return n;let r=new e(t);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:n,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!a?.size)return;t.ports[0].postMessage({status:`ack`,eventId:n,eventType:r});let o=await Ii(Array.from(a).map(async e=>e(t.origin,i)));t.ports[0].postMessage({status:`done`,eventId:n,eventType:r,response:o})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener(`message`,this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener(`message`,this.boundEventHandler)}};Li.receivers=[];function Ri(e=``,t=10){let n=``;for(let e=0;e<t;e++)n+=Math.floor(Math.random()*10);return e+n}var zi=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener(`message`,e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){let r=typeof MessageChannel<`u`?new MessageChannel:null;if(!r)throw Error(`connection_unavailable`);let i,a;return new Promise((o,s)=>{let c=Ri(``,20);r.port1.start();let l=setTimeout(()=>{s(Error(`unsupported_event`))},n);a={messageChannel:r,onMessage(e){let t=e;if(t.data.eventId===c)switch(t.data.status){case`ack`:clearTimeout(l),i=setTimeout(()=>{s(Error(`timeout`))},3e3);break;case`done`:clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),s(Error(`invalid_response`))}}},this.handlers.add(a),r.port1.addEventListener(`message`,a.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}};function X(){return window}function Bi(e){X().location.href=e}function Vi(){return X().WorkerGlobalScope!==void 0&&typeof X().importScripts==`function`}async function Hi(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ui(){return navigator?.serviceWorker?.controller||null}function Wi(){return Vi()?self:null}var Gi=`firebaseLocalStorageDb`,Ki=1,qi=`firebaseLocalStorage`,Ji=`fbase_key`,Yi=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener(`success`,()=>{e(this.request.result)}),this.request.addEventListener(`error`,()=>{t(this.request.error)})})}};function Xi(e,t){return e.transaction([qi],t?`readwrite`:`readonly`).objectStore(qi)}function Zi(){return new Yi(indexedDB.deleteDatabase(Gi)).toPromise()}function Qi(){let e=indexedDB.open(Gi,Ki);return new Promise((t,n)=>{e.addEventListener(`error`,()=>{n(e.error)}),e.addEventListener(`upgradeneeded`,()=>{let t=e.result;try{t.createObjectStore(qi,{keyPath:Ji})}catch(e){n(e)}}),e.addEventListener(`success`,async()=>{let n=e.result;n.objectStoreNames.contains(qi)?t(n):(n.close(),await Zi(),t(await Qi()))})})}async function $i(e,t,n){return new Yi(Xi(e,!0).put({[Ji]:t,value:n})).toPromise()}async function ea(e,t){let n=await new Yi(Xi(e,!1).get(t)).toPromise();return n===void 0?null:n.value}function ta(e,t){return new Yi(Xi(e,!0).delete(t)).toPromise()}var na=800,ra=3,ia=class{registerLifecycleListeners(){typeof window<`u`&&typeof window.addEventListener==`function`&&(window.addEventListener(`pagehide`,this.onPageHide),window.addEventListener(`pageshow`,this.onPageShow))}unregisterLifecycleListeners(){typeof window<`u`&&typeof window.removeEventListener==`function`&&(window.removeEventListener(`pagehide`,this.onPageHide),window.removeEventListener(`pageshow`,this.onPageShow))}constructor(){this.type=`LOCAL`,this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&=(this.dbPromise.then(e=>e.close()).catch(()=>{}),null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Qi(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{return await e(await this._openDb())}catch(e){if(t++>ra)throw e;if(this.dbPromise){let e=this.dbPromise;this.dbPromise=null;try{(await e).close()}catch{}}}}async initializeServiceWorkerMessaging(){return Vi()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Li._getInstance(Wi()),this.receiver._subscribe(`keyChanged`,async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe(`ping`,async(e,t)=>[`keyChanged`])}async initializeSender(){if(this.activeServiceWorker=await Hi(),!this.activeServiceWorker)return;this.sender=new zi(this.activeServiceWorker);let e=await this.sender._send(`ping`,{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes(`keyChanged`)&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Ui()===this.activeServiceWorker)try{await this.sender._send(`keyChanged`,{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await $i(e,Oi,`1`),await ta(e,Oi)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>$i(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>ea(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ta(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{let e=await this._withRetries(e=>new Yi(Xi(e,!1).getAll()).toPromise());if(this.isClosing||!e||this.pendingWrites!==0)return[];let t=[],n=new Set;if(e.length!==0)for(let{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(let e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}catch(e){return this.isClosing||sn(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),na)}stopPolling(){this.pollTimer&&=(clearInterval(this.pollTimer),null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}};ia.type=`LOCAL`;var aa=ia;Er(`rcb`),new _n(3e4,6e4);function oa(e,t){return t?J(t):(H(e._popupRedirectResolver,e,`argument-error`),e._popupRedirectResolver)}var sa=class extends Hr{constructor(e){super(`custom`,`custom`),this.params=e}_getIdTokenResponse(e){return Xr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Xr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Xr(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function ca(e){return gi(e.auth,new sa(e),e.bypassAuthState)}function la(e){let{auth:t,user:n}=e;return H(n,t,`internal-error`),hi(n,new sa(e),e.bypassAuthState)}async function ua(e){let{auth:t,user:n}=e;return H(n,t,`internal-error`),mi(n,new sa(e),e.bypassAuthState)}var da=class{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:a,type:o}=e;if(a){this.reject(a);return}let s={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(s))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case`signInViaPopup`:case`signInViaRedirect`:return ca;case`linkViaPopup`:case`linkViaRedirect`:return ua;case`reauthViaPopup`:case`reauthViaRedirect`:return la;default:z(this.auth,`internal-error`)}}resolve(e){W(this.pendingPromise,`Pending promise was never set`),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){W(this.pendingPromise,`Pending promise was never set`),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}},fa=new _n(2e3,1e4);async function pa(e,t,n){if(L(e.app))return Promise.reject(B(e,`operation-not-supported-in-this-environment`));let r=Y(e);return un(e,t,ri),new ma(r,`signInViaPopup`,t,oa(r,n)).executeNotNull()}var ma=class e extends da{constructor(t,n,r,i,a){super(t,n,i,a),this.provider=r,this.authWindow=null,this.pollId=null,e.currentPopupAction&&e.currentPopupAction.cancel(),e.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return H(e,this.auth,`internal-error`),e}async onExecution(){W(this.filter.length===1,`Popup operations only handle one event`);let e=Ri();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(B(this.auth,`web-storage-unsupported`))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(B(this.auth,`cancelled-popup-request`))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,e.currentPopupAction=null}pollUserCancellation(){let e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(B(this.auth,`popup-closed-by-user`))},8e3);return}this.pollId=window.setTimeout(e,fa.get())};e()}};ma.currentPopupAction=null;var ha=`pendingRedirect`,ga=new Map,_a=class extends da{constructor(e,t,n=!1){super(e,[`signInViaRedirect`,`linkViaRedirect`,`reauthViaRedirect`,`unknown`],t,void 0,n),this.eventId=null}async execute(){let e=ga.get(this.auth._key());if(!e){try{let t=await va(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}ga.set(this.auth._key(),e)}return this.bypassAuthState||ga.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type===`signInViaRedirect`)return super.onAuthEvent(e);if(e.type===`unknown`){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function va(e,t){let n=xa(t),r=ba(e);if(!await r._isAvailable())return!1;let i=await r._get(n)===`true`;return await r._remove(n),i}function ya(e,t){ga.set(e._key(),t)}function ba(e){return J(e._redirectPersistence)}function xa(e){return er(ha,e.config.apiKey,e.name)}async function Sa(e,t,n=!1){if(L(e.app))return Promise.reject(V(e));let r=Y(e),i=await new _a(r,oa(r,t),n).execute();return i&&!n&&(delete i.user._redirectEventId,await r._persistUserIfCurrent(i.user),await r._setRedirectUser(null,t)),i}var Ca=6e5,wa=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Da(e)?t:(this.hasHandledPotentialRedirect=!0,t||=(this.queuedRedirectEvent=e,!0),t)}sendToConsumer(e,t){if(e.error&&!Ea(e)){let n=e.error.code?.split(`auth/`)[1]||`internal-error`;t.onError(B(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ca&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ta(e))}saveEventToCache(e){this.cachedEventUids.add(Ta(e)),this.lastProcessedEventTime=Date.now()}};function Ta(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join(`-`)}function Ea({type:e,error:t}){return e===`unknown`&&t?.code===`auth/no-auth-event`}function Da(e){switch(e.type){case`signInViaRedirect`:case`linkViaRedirect`:case`reauthViaRedirect`:return!0;case`unknown`:return Ea(e);default:return!1}}async function Oa(e,t={}){return K(e,`GET`,`/v1/projects`,t)}var ka=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Aa=/^https?/;async function ja(e){if(e.config.emulator)return;let{authorizedDomains:t}=await Oa(e);for(let e of t)try{if(Ma(e))return}catch{}z(e,`unauthorized-domain`)}function Ma(e){let t=fn(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith(`chrome-extension://`)){let i=new URL(e);return i.hostname===``&&r===``?n===`chrome-extension:`&&e.replace(`chrome-extension://`,``)===t.replace(`chrome-extension://`,``):n===`chrome-extension:`&&i.hostname===r}if(!Aa.test(n))return!1;if(ka.test(e))return r===e;let i=e.replace(/\./g,`\\.`);return RegExp(`^(.+\\.`+i+`|`+i+`)$`,`i`).test(r)}var Na=new _n(3e4,6e4);function Pa(){let e=X().___jsl;if(e?.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}function Fa(e){return new Promise((t,n)=>{function r(){Pa(),gapi.load(`gapi.iframes`,{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Pa(),n(B(e,`network-request-failed`))},timeout:Na.get()})}if(X().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(X().gapi?.load)r();else{let t=Er(`iframefcb`);return X()[t]=()=>{gapi.load?r():n(B(e,`network-request-failed`))},Cr(`${Tr()}?onload=${t}`).catch(e=>n(e))}}).catch(e=>{throw Ia=null,e})}var Ia=null;function La(e){return Ia||=Fa(e),Ia}var Ra=new _n(5e3,15e3),za=`__/auth/iframe`,Ba=`emulator/auth/iframe`,Va={style:{position:`absolute`,top:`-100px`,width:`1px`,height:`1px`},"aria-hidden":`true`,tabindex:`-1`},Ha=new Map([[`identitytoolkit.googleapis.com`,`p`],[`staging-identitytoolkit.sandbox.googleapis.com`,`s`],[`test-identitytoolkit.sandbox.googleapis.com`,`t`]]);function Ua(e){let t=e.config;H(t.authDomain,e,`auth-domain-config-required`);let n=t.emulator?vn(t,Ba):`https://${e.config.authDomain}/${za}`,r={apiKey:t.apiKey,appName:e.name,v:Ft},i=Ha.get(e.config.apiHost);i&&(r.eid=i);let a=e._getFrameworks();return a.length&&(r.fw=a.join(`,`)),`${n}?${oe(r).slice(1)}`}async function Wa(e){let t=await La(e),n=X().gapi;return H(n,e,`internal-error`),t.open({where:document.body,url:Ua(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Va,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});let i=B(e,`network-request-failed`),a=X().setTimeout(()=>{r(i)},Ra.get());function o(){X().clearTimeout(a),n(t)}t.ping(o).then(o,()=>{r(i)})}))}var Ga={location:`yes`,resizable:`yes`,statusbar:`yes`,toolbar:`no`},Ka=500,qa=600,Ja=`_blank`,Ya=`http://localhost`,Xa=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function Za(e,t,n,r=Ka,i=qa){let a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString(),s=``,c={...Ga,width:r.toString(),height:i.toString(),top:a,left:o},l=w().toLowerCase();n&&(s=ar(l)?Ja:n),rr(l)&&(t||=Ya,c.scrollbars=`yes`);let u=Object.entries(c).reduce((e,[t,n])=>`${e}${t}=${n},`,``);if(dr(l)&&s!==`_self`)return Qa(t||``,s),new Xa(null);let d=window.open(t||``,s,u);H(d,e,`popup-blocked`);try{d.focus()}catch{}return new Xa(d)}function Qa(e,t){let n=document.createElement(`a`);n.href=e,n.target=t;let r=document.createEvent(`MouseEvent`);r.initMouseEvent(`click`,!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}var $a=`__/auth/handler`,eo=`emulator/auth/handler`,to=`fac`;async function no(e,t,n,r,i,a){H(e.config.authDomain,e,`auth-domain-config-required`),H(e.config.apiKey,e,`invalid-api-key`);let o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ft,eventId:i};if(t instanceof ri){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||``,re(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(let[e,t]of Object.entries(a||{}))o[e]=t}if(t instanceof ii){let e=t.getScopes().filter(e=>e!==``);e.length>0&&(o.scopes=e.join(`,`))}e.tenantId&&(o.tid=e.tenantId);let s=o;for(let e of Object.keys(s))s[e]===void 0&&delete s[e];let c=await e._getAppCheckToken(),l=c?`#${to}=${encodeURIComponent(c)}`:``;return`${ro(e)}?${oe(s).slice(1)}${l}`}function ro({config:e}){return e.emulator?vn(e,eo):`https://${e.authDomain}/${$a}`}var io=`webStorageSupport`,ao=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fi,this._completeRedirectFn=Sa,this._overrideRedirectResult=ya}async _openPopup(e,t,n,r){return W(this.eventManagers[e._key()]?.manager,`_initialize() not called before _openPopup()`),Za(e,await no(e,t,n,fn(),r),Ri())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Bi(await no(e,t,n,fn(),r)),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(W(n,`If manager is not set, promise should be`),n)}let n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){let t=await Wa(e),n=new wa(e);return t.register(`authEvent`,t=>(H(t?.authEvent,e,`invalid-auth-event`),{status:n.onEvent(t.authEvent)?`ACK`:`ERROR`}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(io,{type:io},n=>{let r=n?.[0]?.[io];r!==void 0&&t(!!r),z(e,`internal-error`)},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ja(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return pr()||ir()||ur()}},oo=`@firebase/auth`,so=`1.13.6`,co=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,`dependent-sdk-initialized-before-auth`)}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function lo(e){switch(e){case`Node`:return`node`;case`ReactNative`:return`rn`;case`Worker`:return`webworker`;case`Cordova`:return`cordova`;case`WebExtension`:return`web-extension`;default:return}}function uo(e){Mt(new he(`auth`,(t,{options:n})=>{let r=t.getProvider(`app`).getImmediate(),i=t.getProvider(`heartbeat`),a=t.getProvider(`app-check-internal`),{apiKey:o,authDomain:s}=r.options;H(o&&!o.includes(`:`),`invalid-api-key`,{appName:r.name});let c=new yr(r,i,a,{apiKey:o,authDomain:s,clientPlatform:e,apiHost:`identitytoolkit.googleapis.com`,tokenApiHost:`securetoken.googleapis.com`,apiScheme:`https`,sdkClientVersion:mr(e)});return Ir(c,n),c},`PUBLIC`).setInstantiationMode(`EXPLICIT`).setInstanceCreatedCallback((e,t,n)=>{e.getProvider(`auth-internal`).initialize()})),Mt(new he(`auth-internal`,e=>(e=>new co(e))(Y(e.getProvider(`auth`).getImmediate())),`PRIVATE`).setInstantiationMode(`EXPLICIT`)),Rt(oo,so,lo(e)),Rt(oo,so,`esm2020`)}var fo=S(`authIdTokenMaxAge`)||300,po=null,mo=e=>async t=>{let n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>fo)return;let i=n?.token;po!==i&&(po=i,await fetch(e,{method:i?`POST`:`DELETE`,headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ho(e=Lt()){let t=Nt(e,`auth`);if(t.isInitialized())return t.getImmediate();let n=Fr(e,{popupRedirectResolver:ao,persistence:[aa,Ni,Fi]}),r=S(`authTokenSyncURL`);if(r&&typeof isSecureContext==`boolean`&&isSecureContext){let e=new URL(r,location.origin);if(location.origin===e.origin){let t=mo(e.toString());Ei(n,t,()=>t(n.currentUser)),Ti(n,e=>t(e))}}let i=b(`auth`);return i&&Lr(n,`http://${i}`),n}function go(){return document.getElementsByTagName(`head`)?.[0]??document}Sr({loadJS(e){return new Promise((t,n)=>{let r=document.createElement(`script`);r.setAttribute(`src`,e),r.onload=t,r.onerror=e=>{let t=B(`internal-error`);t.customData=e,n(t)},r.type=`text/javascript`,r.charset=`UTF-8`,go().appendChild(r)})},gapiScript:`https://apis.google.com/js/api.js`,recaptchaV2Script:`https://www.google.com/recaptcha/api.js`,recaptchaEnterpriseScript:`https://www.google.com/recaptcha/enterprise.js?render=`}),uo(`Browser`),Rt(`firebase`,`12.19.0`,`app`);var _o=ho(It({apiKey:`AIzaSyCk0dil9HD8Je5aMzhK3XCerK9k1Mt2OxI`,authDomain:`minigames-festival3224.firebaseapp.com`,projectId:`minigames-festival3224`,storageBucket:`minigames-festival3224.firebasestorage.app`,messagingSenderId:`1098774483021`,appId:`1:1098774483021:web:7bd2c3ff7f516a95a34c04`})),vo=`minigames:festival3224:app-session`,yo=3e5;function bo(e,t=Date.now()){return{displayName:e.displayName,email:e.email,authenticatedAt:t,...e.avatarUrl&&{avatarUrl:e.avatarUrl}}}function xo(e){if(typeof e!=`object`||!e||Array.isArray(e))return!1;let t=e;return!(typeof t.displayName!=`string`||typeof t.email!=`string`||typeof t.authenticatedAt!=`number`||!Number.isFinite(t.authenticatedAt)||`avatarUrl`in t&&typeof t.avatarUrl!=`string`)}function So(e,t=Date.now()){return t-e.authenticatedAt>=yo}function Co(e){localStorage.setItem(vo,JSON.stringify(e))}function wo(){let e=localStorage.getItem(vo);if(!e)return{status:`missing`};try{let t=JSON.parse(e);return xo(t)?{status:`valid`,session:t}:{status:`invalid`}}catch{return{status:`invalid`}}}function To(){localStorage.removeItem(vo)}var Eo=(()=>{let e;return{get(){return e},set(t){e=t}}})();function Do(){return Eo.get()}function Oo(e){let t=bo(e);return Co(t),Eo.set(t),t}var ko=`minigames:app-session-changed`;async function Ao(){Eo.set(void 0),To();try{return await Di(_o),{isFirebaseSignOutSuccessful:!0}}catch{return{isFirebaseSignOutSuccessful:!1}}}async function jo(){To(),await Di(_o)}async function Z(e=Date.now()){let t=wo();return t.status===`missing`?(Eo.set(void 0),{status:`guest`}):t.status===`invalid`?(Eo.set(void 0),await jo(),{status:`invalid`}):So(t.session,e)?(Eo.set(void 0),await jo(),{status:`expired`}):(Eo.set(t.session),{status:`authenticated`,session:t.session})}var Mo=new oi;async function No(e,t){return(await Si(_o,e,t)).user}async function Po(e,t,n){let r=await xi(_o,e,t);return await wi(r.user,{displayName:n}),r.user}async function Fo(e){await bi(_o,e)}async function Io(){return(await pa(_o,Mo)).user}function Q({message:e,variant:t,duration:n=4e3}){document.querySelector(`.snackbar`)?.remove();let r=document.createElement(`div`);r.className=`snackbar snackbar--${t}`,r.setAttribute(`role`,`status`),r.innerHTML=`
    <span class="snackbar__message">${e}</span>

    <button
      class="snackbar__close"
      type="button"
      aria-label="Close notification"
    >
      <span class="material-symbols-outlined" aria-hidden="true">
        close
      </span>
    </button>
  `;let i=r.querySelector(`.snackbar__close`),a=()=>{r.remove()};i?.addEventListener(`click`,a),document.body.append(r),setTimeout(a,n)}var Lo=`minigamesAuthEntry`;function Ro(e){let t=new URLSearchParams(location.search);if(t.get(`auth`)===e)return;t.set(`auth`,e);let n=t.toString(),r=n?`${location.pathname}?${n}`:location.pathname;history.replaceState(history.state,``,r)}function zo(){let e=new URL(location.href);e.searchParams.delete(`auth`),history.replaceState(history.state,``,`${e.pathname}${e.search}${e.hash}`)}async function Bo(e){if(Oo({displayName:e.displayName??``,email:e.email??``,...e.photoURL&&{avatarUrl:e.photoURL}}),document.querySelector(`.auth-overlay`)?.classList.remove(`auth-overlay--open`),await new Promise(e=>{setTimeout(e,360)}),history.state?.[Lo]===!0){history.back();return}zo(),dispatchEvent(new Event(ko))}function Vo(e){let t=new URL(location.href);t.searchParams.set(`auth`,e),history.pushState({...history.state,[Lo]:!0},``,`${t.pathname}${t.search}${t.hash}`)}async function Ho(e){let t=await Z();if(t.status===`authenticated`){zo(),Q({message:`You are already authenticated.`,variant:`error`});return}if(t.status===`expired`&&Q({message:`Your session has expired. Please log in again.`,variant:`error`}),document.querySelector(`.auth-overlay`))return;Vo(e);let n=Uo(e,()=>{history.back()});document.body.append(n)}function Uo(t=`login`,s){let c=document.createElement(`div`);c.className=`auth-overlay`,c.innerHTML=`
            <div class="auth-dialog" role="dialog" aria-modal="true" aria-label="Authentication">
              <div class="auth-dialog__tabs">
                <button
                  class="auth-dialog__tab auth-dialog__tab--active"
                  type="button"
                  data-auth-tab="login"
                >
                  Login
                </button>

                <button
                  class="auth-dialog__tab"
                  type="button"
                  data-auth-tab="register"
                >
                  Register
                </button>
              </div>

        <div class="auth-dialog__login">
          <div class="auth-dialog__heading">
            <h2 class="auth-dialog__title">Welcome Back!</h2>
            <p class="auth-dialog__subtitle">
              Sign in to resume your games and progress.
            </p>
          </div>

          <form class="auth-dialog__form">
            <div class="auth-dialog__form-fields">
                <label class="auth-dialog__field">
                  <span class="auth-dialog__label">Email Address</span>

                  <div class="auth-dialog__input-wrapper">
                    <span
                      class="material-symbols-outlined auth-dialog__input-icon"
                      aria-hidden="true"
                    >
                      mail
                    </span>

                    <input
                      class="auth-dialog__input"
                      type="email"
                      name="email"
                      placeholder="e.g. alex@minigames.com"
                      autocomplete="email"
                    />
                  </div>
                  <span class="auth-dialog__error" aria-live="polite"></span>
                </label>

                <label class="auth-dialog__field">
                  <span class="auth-dialog__label">Password</span>

                  <div class="auth-dialog__input-wrapper">
                    <span
                      class="material-symbols-outlined auth-dialog__input-icon"
                      aria-hidden="true"
                    >
                      lock
                    </span>

                    <input
                        class="auth-dialog__input"
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        autocomplete="current-password"
                    />

                    <button
                        class="auth-dialog__password-toggle"
                        type="button"
                        aria-label="Show password"
                    >
                    <span class="material-symbols-outlined" aria-hidden="true">
                        visibility_off
                    </span>
                    </button>
                  </div>
                  <span class="auth-dialog__error" aria-live="polite"></span>
                </label>

                <button class="auth-dialog__forgot" type="button">
                   Forgot Password?
                </button>
            </div>


            <div class="auth-dialog__actions">
                <button class="auth-dialog__submit" type="submit" disabled>
                  Login
                </button>

                <div class="auth-dialog__divider">
                    <span class="auth-dialog__divider-line"></span>
                    <span class="auth-dialog__divider-text">OR</span>
                    <span class="auth-dialog__divider-line"></span>
                </div>

                <button class="auth-dialog__google" type="button">
                    <img
                        class="auth-dialog__google-icon"
                        src="${e}"
                        alt=""
                        aria-hidden="true"
                    />
                    <span class="auth-dialog__google-text">
                      Continue with Google
                    </span>
                </button>
            </div>
          </form>

          <p class="auth-dialog__switch">
            Don’t have an account?
            <button
               class="auth-dialog__switch-button"
               type="button"
               data-auth-switch="register"
            >
              Register
            </button>
          </p>
  
        </div>

        <div class="auth-dialog__register" hidden>
      <div class="auth-dialog__heading">
        <h2 class="auth-dialog__title">Create Account</h2>
        <p class="auth-dialog__subtitle">
          Join MiniGames to track your score & streak.
        </p>
      </div>

      <form class="auth-dialog__form">
        <div class="auth-dialog__form-fields">
          <label class="auth-dialog__field">
            <span class="auth-dialog__label">Username</span>

            <div class="auth-dialog__input-wrapper">
              <span
                class="material-symbols-outlined auth-dialog__input-icon"
                aria-hidden="true"
              >
                person
              </span>

              <input
                class="auth-dialog__input"
                type="text"
                name="username"
                placeholder="e.g. CozyGamer99"
                autocomplete="username"
              />
            </div>
            <span class="auth-dialog__error" aria-live="polite"></span>
          </label>

          <label class="auth-dialog__field">
            <span class="auth-dialog__label">Email Address</span>

            <div class="auth-dialog__input-wrapper">
              <span
                class="material-symbols-outlined auth-dialog__input-icon"
                aria-hidden="true"
              >
                mail
              </span>

              <input
                class="auth-dialog__input"
                type="email"
                name="email"
                placeholder="your.email@domain.com"
                autocomplete="email"
              />
            </div>
            <span class="auth-dialog__error" aria-live="polite"></span>
          </label>

          <label class="auth-dialog__field">
            <span class="auth-dialog__label">Password</span>

            <div class="auth-dialog__input-wrapper">
              <span
                class="material-symbols-outlined auth-dialog__input-icon"
                aria-hidden="true"
              >
                lock
              </span>

              <input
                class="auth-dialog__input"
                type="password"
                name="password"
                placeholder="Min. 6 characters"
                autocomplete="new-password"
              />
            </div>
            <span class="auth-dialog__error" aria-live="polite"></span>
          </label>

          <label class="auth-dialog__field">
            <span class="auth-dialog__label">Confirm Password</span>

            <div class="auth-dialog__input-wrapper">
              <span
                class="material-symbols-outlined auth-dialog__input-icon"
                aria-hidden="true"
              >
                lock
              </span>

              <input
                class="auth-dialog__input"
                type="password"
                name="confirmPassword"
                placeholder="Repeat your password"
                autocomplete="new-password"
              />
            </div>
            <span class="auth-dialog__error" aria-live="polite"></span>
          </label>
        </div>

        <div class="auth-dialog__actions">
          <button class="auth-dialog__submit" type="submit" disabled>
            Create Account
          </button>

          <div class="auth-dialog__divider">
            <span class="auth-dialog__divider-line"></span>
            <span class="auth-dialog__divider-text">OR</span>
            <span class="auth-dialog__divider-line"></span>
          </div>

          <button class="auth-dialog__google" type="button">
            <img
              class="auth-dialog__google-icon"
              src="${e}"
              alt=""
              aria-hidden="true"
            />
              <span class="auth-dialog__google-text">
                Sign up with Google
              </span>
          </button>
        </div>
      </form>

      <p class="auth-dialog__switch">
        Already have an account?
        <button
          class="auth-dialog__switch-button"
          type="button"
          data-auth-switch="login"
        >
          Login
        </button>
      </p>
    </div>
    </div>
  `;let l=c.querySelector(`.auth-dialog__login`),u=c.querySelector(`.auth-dialog__register`),d=c.querySelector(`[data-auth-tab="login"]`),f=c.querySelector(`[data-auth-tab="register"]`),p=c.querySelectorAll(`.auth-dialog__switch-button`),m=c.querySelectorAll(`.auth-dialog__google`);function h(e){for(let t of m){let n=t.querySelector(`.auth-dialog__google-text`);if(n){if(e){n.dataset.originalText=n.textContent?.trim()??``,n.textContent=`Connecting…`;continue}n.textContent=n.dataset.originalText??n.textContent,delete n.dataset.originalText}}}let g=c.querySelector(`.auth-dialog__password-toggle`),_=c.querySelector(`.auth-dialog__forgot`),v=g?.closest(`.auth-dialog__input-wrapper`)?.querySelector(`.auth-dialog__input`),y=l?.querySelector(`.auth-dialog__form`),b=u?.querySelector(`.auth-dialog__form`);_?.addEventListener(`click`,async()=>{let e=y?.querySelector(`input[name="email"]`);if(!e)return;let t=e.value.trim();if(!t){Q({message:`Enter your email address first.`,variant:`error`});return}try{await Fo(t),Q({message:`Password reset email sent.`,variant:`success`})}catch{Q({message:`Unable to send password reset email.`,variant:`error`})}});let x=!1;function S(e,t,n){let r=e.querySelector(`.auth-dialog__submit`);if(!r)return;if(t){r.dataset.originalText=r.textContent?.trim()??``,r.textContent=n;return}let i=r.dataset.originalText;i&&(r.textContent=i),delete r.dataset.originalText}function C(e){x=e;let t=c.querySelectorAll(`input, button`);for(let n of t)n.disabled=e;e||(k?.(),ee?.())}async function w(){h(!0),C(!0);try{await Bo(await Io())}catch{h(!1),C(!1),Q({message:`Google sign-in was canceled or failed. Please try again.`,variant:`error`})}}for(let e of m)e.addEventListener(`click`,()=>{w()});function T(e,t,n){let r=e.closest(`.auth-dialog__field`);if(!r)return;let i=r.querySelector(`.auth-dialog__input-wrapper`),a=r.querySelector(`.auth-dialog__error`);i?.classList.toggle(`auth-dialog__input-wrapper--error`,!t),a&&(a.textContent=t?``:n),e.setAttribute(`aria-invalid`,String(!t))}function E(e){e.reset();let t=e.querySelectorAll(`.auth-dialog__error`);for(let e of t)e.textContent=``;let n=e.querySelectorAll(`.auth-dialog__input-wrapper`);for(let e of n)e.classList.remove(`auth-dialog__input-wrapper--error`);let r=e.querySelectorAll(`.auth-dialog__input`);for(let e of r)e.removeAttribute(`aria-invalid`);let i=e.querySelector(`.auth-dialog__submit`);i&&(i.disabled=!0)}function D(e){let t=e.querySelector(`input[name="email"]`),r=e.querySelector(`input[name="password"]`),i=e.querySelector(`.auth-dialog__submit`);if(!t||!r||!i)return;let o=t,s=r,c=i;function l(){let e=n(o.value),t=a(s.value);c.disabled=!(e.isValid&&t.isValid)}function u(){let e=n(o.value);T(o,e.isValid,e.error),l()}function d(){let e=a(s.value);T(s,e.isValid,e.error),l()}return o.addEventListener(`input`,u),o.addEventListener(`blur`,u),s.addEventListener(`input`,d),s.addEventListener(`blur`,d),l}function O(e){let t=e.querySelector(`input[name="username"]`),a=e.querySelector(`input[name="email"]`),s=e.querySelector(`input[name="password"]`),c=e.querySelector(`input[name="confirmPassword"]`),l=e.querySelector(`.auth-dialog__submit`);if(!t||!a||!s||!c||!l)return;let u=t,d=a,f=s,p=c,m=l;function h(){let e=r(u.value),t=n(d.value),a=i(f.value),s=o(f.value,p.value);m.disabled=!(e.isValid&&t.isValid&&a.isValid&&s.isValid)}function g(){let e=r(u.value);T(u,e.isValid,e.error),h()}function _(){let e=n(d.value);T(d,e.isValid,e.error),h()}function v(){let e=i(f.value);T(f,e.isValid,e.error),y()}function y(){let e=o(f.value,p.value);T(p,e.isValid,e.error),h()}return t.addEventListener(`input`,g),t.addEventListener(`blur`,g),a.addEventListener(`input`,_),a.addEventListener(`blur`,_),s.addEventListener(`input`,v),s.addEventListener(`blur`,v),c.addEventListener(`input`,y),c.addEventListener(`blur`,y),h}let k=y?D(y):void 0,ee=b?O(b):void 0;y?.addEventListener(`submit`,async e=>{e.preventDefault();let t=y.querySelector(`input[name="email"]`),n=y.querySelector(`input[name="password"]`);if(t&&n){S(y,!0,`Signing in…`),C(!0);try{await Bo(await No(t.value,n.value))}catch{Q({message:`Unable to sign in. Check your credentials and try again.`,variant:`error`}),S(y,!1,``),C(!1)}}}),b?.addEventListener(`submit`,async e=>{e.preventDefault();let t=b.querySelector(`input[name="username"]`),n=b.querySelector(`input[name="email"]`),r=b.querySelector(`input[name="password"]`);if(t&&n&&r){S(b,!0,`Creating account…`),C(!0);try{Bo(await Po(n.value,r.value,t.value))}catch{Q({message:`Unable to create account. Please try again.`,variant:`error`}),S(b,!1,``),C(!1)}}}),g?.addEventListener(`click`,()=>{if(!v)return;let e=v.type===`password`;v.type=e?`text`:`password`;let t=g.querySelector(`.material-symbols-outlined`);t&&(t.textContent=e?`visibility`:`visibility_off`),g.setAttribute(`aria-label`,e?`Hide password`:`Show password`)});let A=c.querySelector(`.auth-dialog`);function te(e){if(!A){e();return}let t=A.getBoundingClientRect().height;A.style.height=`${t}px`,e(),A.style.height=`auto`;let n=A.getBoundingClientRect().height;A.style.height=`${t}px`,requestAnimationFrame(()=>{A.style.height=`${n}px`});let r=e=>{e.propertyName===`height`&&(A.style.height=`auto`,A.removeEventListener(`transitionend`,r))};A.addEventListener(`transitionend`,r)}function j(){b&&E(b),y&&E(y),te(()=>{l?.removeAttribute(`hidden`),u?.setAttribute(`hidden`,``),d?.classList.add(`auth-dialog__tab--active`),f?.classList.remove(`auth-dialog__tab--active`)})}function M(){b&&E(b),y&&E(y),te(()=>{u?.removeAttribute(`hidden`),l?.setAttribute(`hidden`,``),f?.classList.add(`auth-dialog__tab--active`),d?.classList.remove(`auth-dialog__tab--active`)})}t===`register`&&(u?.removeAttribute(`hidden`),l?.setAttribute(`hidden`,``),f?.classList.add(`auth-dialog__tab--active`),d?.classList.remove(`auth-dialog__tab--active`)),d?.addEventListener(`click`,()=>{j(),Ro(`login`)}),f?.addEventListener(`click`,()=>{M(),Ro(`register`)});function ne(){x||(s?.(),c.classList.remove(`auth-overlay--open`),setTimeout(()=>{c.remove(),document.removeEventListener(`keydown`,re)},360))}function re(e){!x&&e.key===`Escape`&&ne()}c.addEventListener(`click`,e=>{!x&&e.target===c&&ne()});for(let e of p)e.addEventListener(`click`,()=>{if(e.dataset.authSwitch===`register`){M(),Ro(`register`);return}j(),Ro(`login`)});return document.addEventListener(`keydown`,re),requestAnimationFrame(()=>{c.classList.add(`auth-overlay--open`)}),c}async function Wo(){let e=new URLSearchParams(location.search).get(`auth`);if(e!==`login`&&e!==`register`)return;if((await Z()).status===`authenticated`){zo(),Q({message:`You are already authenticated.`,variant:`error`});return}if(document.querySelector(`.auth-overlay`))return;let t=Uo(e,()=>{history.back()});document.body.append(t)}var Go=`data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cpath%20d='M26%201H6C3.23858%201%201%203.23858%201%206V26C1%2028.7614%203.23858%2031%206%2031H26C28.7614%2031%2031%2028.7614%2031%2026V6C31%203.23858%2028.7614%201%2026%201Z'%20fill='url(%23pattern0_1_259)'%20stroke='%23242145'%20stroke-width='2'/%3e%3cdefs%3e%3cpattern%20id='pattern0_1_259'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_1_259'%20transform='scale(0.03125)'/%3e%3c/pattern%3e%3cimage%20id='image0_1_259'%20width='32'%20height='32'%20preserveAspectRatio='none'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABCNJREFUeAG1V91rXEUU/83szeazNj5YTRVJQWoEg1YqKD6of4KKL2KxD4qPPuiLltpabKlatUIefFFEQQT7KAhFSAVfRKFSQQShXbWUZrMJCdm0m9175/TM1/3YvR9J0x52mLkzc875na+ZHcAREU1yO6KI5rnRbWrnQ6KDSJFwyqcJmOfhNMqIPMe2qcFinhVCNIw4RnapUvmtR6SV76uRdcnBm5Mryhn8dP7yJE9vCB0X/ngUt4y25JVzGgBtT8b2MMjcWVEhnTGTUuh2Q9PrJtKsWwAvsSUi81OK8MHps9j/9EnMPnEcn8z9pBM5DvdWKD8EfjEWmPKpViQE9swexq5dO3mW0Gyu4eKfx7JQDUt1LEo9QBko2WGnG9k9/N3rRYM8pbGgzQHwm3u9EKFWYtxshX564gV4BB+ffD7ZrXOD96soyYvBuCTASkNgmQkX/rqMA699g4iFs1yjZGJiGEGtZmSFoUK73UEgJfjH8xJfff4yHpm9vzIngirlmu69507U6wFqtRyHkVU4uXMsmWKUU1OTsa2UsptSfHqiPATOU2NjdWNlpr6LeqZeFOGOidFYT1pnv+xyAI5jZDiwNS98dts1kTbJR5Lnuhuh8ZjZg/I6CNKAKFaqjDwpLT5ddpGiRJDKyStfdowy5L1SJmqV+87LB5nmt9p0nUu8+fYZ7H3sKO6bOYSvv/sVE+PDzgNkeo2GPPI+C3aMj+DbM79h94Pv4IF9R/DWoe8NiDzKVoEbdrnkHn/mFEZHAqNM5PGKxGg9ZkFQukdiqYQGKzgkEX45+wbGR0cs+BQFGR+6oJIWpnTMa1ZgfKWm71fbKQeQZAqM26EMC7FBG2xMPTcZZMYk19frNbx64Ek0F9Zx+f8lzH34ojmMtALhDiPh8Eple0HJUa2T8PSJ53D1ygoWFtt4/ZWnjNy8g7nwINKHjU9CTXv3H+Nat6VllPHSUusaJ2eEu+/aYYSTuSeA1dXr+Pv3d2NepW9LmVOvKClDwcpNwhGZBBoyh5CznIcPz+zGP+cP49KF9/DQzFRGrD4RtVJjiJNVVJCDAHL80dnoYWgoMO7XMpoLbXwx95IpT01f8ri1vB6fCwGHsNMJE4HWPcijQQA5ibKyeg31wGcbIRjqY2HNxmIX5HpQQ3u9k5VZcBrJEr2uKoB//1vG4lKbLV9Ds7XGNx3h+Ec/WPsY0PunfuRkgllb5P8GreU2LjZaiRwq1LCJ27AAILlw+NX+deX+uFSRzKIsIB/GuFHsHX+ymIRN7ckop2IdGsA5WCOKSRSggj8mU4DK+Ae3/CGZ9edc2aXks4pQfd8VE6fNZ8I8SgH9OJmuYkjfvv3z6FsTJd9u3JBC7OEmVvRDkecaqCDa5Foe0L4/Jg2ns28TvxP1U+02Ps/nI6Kj2ute5w08AKp+H2eCQgAAAABJRU5ErkJggg=='/%3e%3c/defs%3e%3c/svg%3e`,Ko=`Player`;function qo(e,t){return e.trim()||t.split(`@`,1)[0]?.trim()||Ko}function Jo(e){return[...e].find(e=>/[\p{L}\p{N}]/u.test(e))}function Yo(e){let t=e.trim().split(/\s+/).filter(Boolean);if(t.length===0)return;let n=Jo(t[0]);if(!n)return;if(t.length===1)return n.toLocaleUpperCase();let r=Jo(t[1]);return r?`${n}${r}`.toLocaleUpperCase():n.toLocaleUpperCase()}function Xo(){let e=document.createElement(`header`);e.className=`header`;let t=Do(),n=t?qo(t.displayName,t.email):void 0,r=n?Yo(n):void 0;e.innerHTML=`
      <div class="header__container">
        <a class="header__logo" href="/" aria-label="MiniGames home">
          <img
              class="header__logo-icon"
              src="${Go}"
              alt=""
              aria-hidden="true"
          />
          <span>MiniGames</span>
        </a>

        <div class="header__actions">
          <nav class="header__nav" aria-label="Main navigation">
            <a class="header__nav-link" href="/" data-route="home">Home</a>
            <a class="header__nav-link" href="/library" data-route="library">Library</a>
            <a class="header__nav-link" href="/">Tournaments</a>
            <a class="header__nav-link" href="/">Community</a>
          </nav>

          <div class="header__user-actions">
            ${t?`
      <div class="header__profile">
        <div class="header__profile-main">
          <span class="header__profile-name"></span>

          <div class="header__avatar">
            ${t.avatarUrl?`
                  <img
                    class="header__avatar-image"
                    src="${t.avatarUrl}"
                    alt=""
                  />
                `:`
                  <span class="header__avatar-initials"></span>
                `}
          </div>
        </div>

        <button class="header__logout" type="button">
          Log Out
        </button>
      </div>
    `:`
      <button class="header__login" type="button">
        Log In
      </button>

      <button class="header__signup" type="button">
        Sign Up
      </button>
    `}

            <button
              class="header__menu"
              type="button"
              aria-label="Open menu"
              aria-expanded="false"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

        </div>
      </div>

      <div class="header__mobile-menu" aria-hidden="true">
        <div class="header__mobile-menu-top">
          <a class="header__mobile-logo" href="#" aria-label="MiniGames home">
            <img
              class="header__mobile-logo-icon"
              src="${Go}"
              alt=""
              aria-hidden="true"
            />
            <span>MiniGames</span>
          </a>

          <button
            class="header__mobile-close"
            type="button"
            aria-label="Close menu"
          >
            <span class="material-symbols-outlined" aria-hidden="true">close</span>
          </button>
      </div>

      <nav class="header__mobile-nav" aria-label="Mobile navigation">
        <a class="header__mobile-link" href="/" data-route="home">Home</a>
        <a class="header__mobile-link" href="/library" data-route="library">Library</a>
        <a class="header__mobile-link" href="/">Tournaments</a>
        <a class="header__mobile-link" href="/">Community</a>
      </nav>

      <div class="header__mobile-actions">
        ${t?`
      <div class="header__mobile-profile">
        <div class="header__mobile-profile-info">
          <div class="header__mobile-avatar">
            ${t.avatarUrl?`
                  <img
                    class="header__mobile-avatar-image"
                    src="${t.avatarUrl}"
                    alt=""
                  />
                `:`
                  <span class="header__mobile-avatar-initials"></span>
                `}
          </div>

          <span class="header__mobile-profile-name"></span>
        </div>

        <button class="header__mobile-logout" type="button">
          Log Out
        </button>
      </div>
    `:`
      <button class="header__mobile-login" type="button">
        Log In
      </button>

      <button class="header__mobile-signup" type="button">
        Sign Up
      </button>
    `}
      </div>
    </div>

    <div class="header__backdrop"></div>

  `;let i=e.querySelector(`.header__mobile-profile-name`);i&&n&&(i.textContent=n);let a=e.querySelector(`.header__mobile-avatar-initials`);a&&r&&(a.textContent=r);let o=e.querySelector(`.header__profile-name`);o&&n&&(o.textContent=n);let s=e.querySelector(`.header__avatar-initials`);s&&r&&(s.textContent=r);function c(t,n,i,a){let o=e.querySelector(t),s=e.querySelector(n);s?.addEventListener(`error`,()=>{if(s.remove(),r){let e=document.createElement(`span`);e.className=i,e.textContent=r,o?.append(e);return}o?.classList.add(a)})}c(`.header__avatar`,`.header__avatar-image`,`header__avatar-initials`,`header__avatar--fallback`),c(`.header__mobile-avatar`,`.header__mobile-avatar-image`,`header__mobile-avatar-initials`,`header__mobile-avatar--fallback`);let l=e.querySelector(`.header__menu`),u=e.querySelector(`.header__mobile-close`),d=e.querySelector(`.header__mobile-menu`),f=e.querySelector(`.header__backdrop`),p=e.querySelector(`.header__login`),m=e.querySelector(`.header__signup`),h=e.querySelector(`.header__mobile-login`),g=e.querySelector(`.header__mobile-signup`),_=(location.pathname.replace(`/minigames/`,`/`)||`/`)===`/library`?`library`:`home`,v=e.querySelectorAll(`[data-route]`);for(let e of v)e.dataset.route===_&&(e.classList.contains(`header__nav-link`)&&e.classList.add(`header__nav-link--active`),e.classList.contains(`header__mobile-link`)&&e.classList.add(`header__mobile-link--active`));for(let e of v)e.addEventListener(`click`,t=>{if(t.preventDefault(),e.dataset.route===`library`){al(`/library`);return}al(`/`)});let y=e.querySelectorAll(`.header__logo, .header__mobile-logo`);for(let e of y)e.addEventListener(`click`,e=>{e.preventDefault(),al(`/`)});p?.addEventListener(`click`,()=>{Ho(`login`)}),m?.addEventListener(`click`,()=>{Ho(`register`)});function b(){d?.classList.add(`header__mobile-menu--open`),f?.classList.add(`header__backdrop--visible`),l?.setAttribute(`aria-expanded`,`true`),d?.setAttribute(`aria-hidden`,`false`),document.body.classList.add(`menu-open`)}function x(){d?.classList.remove(`header__mobile-menu--open`),f?.classList.remove(`header__backdrop--visible`),l?.setAttribute(`aria-expanded`,`false`),d?.setAttribute(`aria-hidden`,`true`),document.body.classList.remove(`menu-open`)}h?.addEventListener(`click`,()=>{x(),Ho(`login`)}),g?.addEventListener(`click`,()=>{x(),Ho(`register`)}),l?.addEventListener(`click`,b),u?.addEventListener(`click`,x),f?.addEventListener(`click`,x);let S=e.querySelectorAll(`.header__mobile-link`);for(let e of S)e.addEventListener(`click`,t=>{x(),!e.dataset.route&&(t.preventDefault(),al(`/`))});let C=e.querySelector(`.header__logout`),w=e.querySelector(`.header__mobile-logout`);async function T(){let{isFirebaseSignOutSuccessful:t}=await Ao(),n=Xo();e.replaceWith(n),t||Q({message:`Signed out locally, but Firebase sign-out failed.`,variant:`error`})}return C?.addEventListener(`click`,()=>{T()}),w?.addEventListener(`click`,()=>{x(),T()}),e}function Zo(){let e=document.createElement(`section`);return e.className=`hero`,e.innerHTML=`
    <div class="hero__container">
      <div class="hero__card">
        <h1 class="hero__title">
          Take a Short Break<br />
          & Have Fun
        </h1>

        <p class="hero__text hero__text--desktop">
           Discover hundreds of curated casual mini-games. Play instantly in your browser —
           puzzle, match 3, farm, and board classics.
        </p>

        <p class="hero__text hero__text--mobile">
            Discover hundreds of curated casual mini-games right in your browser.
        </p>

        <button class="hero__button" type="button">
          Browse Library
        </button>
      </div>
    </div>
  `,e}var Qo=`/minigames/assets/cat-mail-co-card-B0GMTC_n.jpg`,$o=`/minigames/assets/heartopia-card-DRd_6OVG.jpg`,es=`/minigames/assets/islanders-card-DljrohUL.jpg`,ts=`/minigames/assets/palia-card-8xT8yeZQ.jpg`,ns=`/minigames/assets/shelve-the-potions-card-DTY_N_zq.jpg`,rs=`/minigames/assets/tailside-cozy-cafe-sim-card-C7B0rePC.jpg`,is=`/minigames/assets/tiny-glade-card-CS2XLEzK.jpg`,as=`/minigames/assets/vacation-cafe-card-Bzcyczbo.jpg`,os=`/minigames/assets/winter-burrow-card-KbzzF82b.jpg`,$=`https://faxb76kxra.execute-api.eu-central-1.amazonaws.com/api`;async function ss(){let e=await fetch(`${$}/games?featured=true`);if(!e.ok)throw Error(`Failed to load featured games: ${e.status}`);return(await e.json()).data}var cs=class extends Error{constructor(e){super(e),this.name=`GameNotFoundError`}},ls=class extends Error{constructor(e){super(e),this.name=`LibraryDataNotFoundError`}};async function us(e=1,t=`all`,n=`rating-desc`){let r=await fetch(`${$}/games?category=${t}&sort=${n}&page=${e}&limit=6`);if(r.status===400)throw new ls(`Library data not found`);if(!r.ok)throw Error(`Failed to load library games: ${r.status}`);return await r.json()}async function ds(){let e=await fetch(`${$}/categories`);if(!e.ok)throw Error(`Failed to load categories: ${e.status}`);return(await e.json()).data}async function fs(e,t){let n=t?`?userEmail=${encodeURIComponent(t)}`:``,r=await fetch(`${$}/games/${e}${n}`);if(r.status===404)throw new cs(`Game not found: ${e}`);if(!r.ok)throw Error(`Failed to load game details: ${r.status}`);return(await r.json()).data}async function ps(e,t){let n=await fetch(`${$}/games/${e}/favorite`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({userEmail:t})});if(!n.ok)throw Error(`Failed to toggle favorite: ${n.status}`);return(await n.json()).data}async function ms(e,t){let n=new URLSearchParams({limit:`3`,sort:`newest`});t&&n.set(`userEmail`,t);let r=await fetch(`${$}/games/${e}/comments?${n.toString()}`);if(!r.ok)throw Error(`Failed to load game comments: ${r.status}`);return await r.json()}async function hs(e,t,n,r){let i=await fetch(`${$}/games/${e}/comments`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({userEmail:t,authorName:n,text:r})});if(i.status!==201)throw Error(`Failed to submit comment: ${i.status}`);return(await i.json()).data}async function gs(e,t){let n=await fetch(`${$}/comments/${e}/like`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({userEmail:t})});if(!n.ok)throw Error(`Failed to toggle comment like: ${n.status}`);return(await n.json()).data}async function _s(){let e=await fetch(`${$}/leaderboard`);if(!e.ok)throw Error(`Failed to load leaderboard: ${e.status}`);return(await e.json()).data}var vs=`data:image/svg+xml,%3csvg%20width='24'%20height='29'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.825%209L9.425%2014.6L8%2016L1.19209e-07%208L8%20-9.53674e-07L9.425%201.4L3.825%207H16V9H3.825Z'%20fill='%23242145'/%3e%3c/svg%3e`,ys=`data:image/svg+xml,%3csvg%20width='24'%20height='29'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.175%209H1.19209e-07V7H12.175L6.575%201.4L8%20-9.53674e-07L16%208L8%2016L6.575%2014.6L12.175%209Z'%20fill='%23242145'/%3e%3c/svg%3e`,bs=`data:image/svg+xml,%3csvg%20width='20'%20height='19'%20viewBox='0%200%2020%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.85%2014.825L10%2012.925L13.15%2014.85L12.325%2011.25L15.1%208.85L11.45%208.525L10%205.125L8.55%208.5L4.9%208.825L7.675%2011.25L6.85%2014.825ZM3.825%2019L5.45%2011.975L0%207.25L7.2%206.625L10%200L12.8%206.625L20%207.25L14.55%2011.975L16.175%2019L10%2015.275L3.825%2019Z'%20fill='%23FFD02B'/%3e%3c/svg%3e`,xs=`data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2021L10.55%2019.7C8.86667%2018.1834%207.475%2016.875%206.375%2015.775C5.275%2014.675%204.4%2013.6917%203.75%2012.825C3.1%2011.9417%202.64167%2011.1334%202.375%2010.4C2.125%209.66669%202%208.91669%202%208.15002C2%206.58336%202.525%205.27502%203.575%204.22502C4.625%203.17502%205.93333%202.65002%207.5%202.65002C8.36667%202.65002%209.19167%202.83336%209.975%203.20002C10.7583%203.56669%2011.4333%204.08336%2012%204.75003C12.5667%204.08336%2013.2417%203.56669%2014.025%203.20002C14.8083%202.83336%2015.6333%202.65002%2016.5%202.65002C18.0667%202.65002%2019.375%203.17502%2020.425%204.22502C21.475%205.27502%2022%206.58336%2022%208.15002C22%208.91669%2021.8667%209.66669%2021.6%2010.4C21.35%2011.1334%2020.9%2011.9417%2020.25%2012.825C19.6%2013.6917%2018.725%2014.675%2017.625%2015.775C16.525%2016.875%2015.1333%2018.1834%2013.45%2019.7L12%2021ZM12%2018.3C13.6%2016.8667%2014.9167%2015.6417%2015.95%2014.625C16.9833%2013.5917%2017.8%2012.7%2018.4%2011.95C19%2011.1834%2019.4167%2010.5084%2019.65%209.92503C19.8833%209.32503%2020%208.73336%2020%208.15002C20%207.15002%2019.6667%206.31669%2019%205.65003C18.3333%204.98336%2017.5%204.65003%2016.5%204.65003C15.7167%204.65003%2014.9917%204.87503%2014.325%205.32503C13.6583%205.75836%2013.2%206.31669%2012.95%207.00003H11.05C10.8%206.31669%2010.3417%205.75836%209.675%205.32503C9.00833%204.87503%208.28333%204.65003%207.5%204.65003C6.5%204.65003%205.66667%204.98336%205%205.65003C4.33333%206.31669%204%207.15002%204%208.15002C4%208.73336%204.11667%209.32503%204.35%209.92503C4.58333%2010.5084%205%2011.1834%205.6%2011.95C6.2%2012.7%207.01667%2013.5917%208.05%2014.625C9.08333%2015.6417%2010.4%2016.8667%2012%2018.3Z'%20fill='%23FF4B4B'/%3e%3c/svg%3e`;function Ss({slug:e,title:t,imageSrc:n,rating:r,likes:i,className:a=``}){let o=document.createElement(`article`);o.className=`game-card ${a}`.trim(),o.dataset.slug=e;let s=r&&i?`
        <div class="game-card__meta">
          <span class="game-card__rating">
            <img
              class="game-card__rating-icon"
              src="${bs}"
              alt=""
              aria-hidden="true"
            />
            ${r}
          </span>

          <span class="game-card__likes">
            <img
              class="game-card__likes-icon"
              src="${xs}"
              alt=""
              aria-hidden="true"
            />
            ${i}
          </span>
        </div>
      `:``;return o.innerHTML=`
    <img class="game-card__image" src="${n}" alt="" draggable="false"/>

    ${`
    <div class="game-card__overlay">
      ${t?`<h3 class="game-card__title">${t}</h3>`:``}
      ${s}
    </div>
  `}
  `,o}var Cs=`/minigames/assets/camper-van-make-it-home-hero-pwfm3znw.jpg`,ws=`/minigames/assets/cast-n-chill-hero-8veDqaQs.jpg`,Ts=`/minigames/assets/cat-chess-hero-BHbuGtch.jpg`,Es=`/minigames/assets/cat-mail-co-hero-DbYEE9Th.jpg`,Ds=`/minigames/assets/cozy-solitaire-hero-BRbaEfNe.jpg`,Os=`/minigames/assets/cozy-sudoku-hero-C3SdMet6.jpg`,ks=`/minigames/assets/grimshire-hero-T4rzibu3.jpg`,As=`/minigames/assets/heartopia-hero-CMAZ-f6E.jpg`,js=`/minigames/assets/islanders-new-shores-hero-De9RnJZj.jpg`,Ms=`/minigames/assets/koroneko-hero-VMaYEKgL.jpg`,Ns=`/minigames/assets/leaf-it-alone-hero-CV390ovr.jpg`,Ps=`/minigames/assets/leafy-corner-hero-CZzWvrUG.jpg`,Fs=`/minigames/assets/little-corners-hero-B0OQFWAJ.jpg`,Is=`/minigames/assets/organized-inside-hero-FV62oWy5.jpg`,Ls=`/minigames/assets/palia-hero-CCZCUrCw.jpg`,Rs=`/minigames/assets/shelve-the-potions-hero-Cm4UQOCB.jpg`,zs=`/minigames/assets/tailside-cozy-cafe-sim-hero-CxkZW35G.jpg`,Bs=`/minigames/assets/the-wild-at-heart-hero-C48oeLv2.jpg`,Vs=`/minigames/assets/tiny-glade-hero-u35s1BKW.jpg`,Hs=`/minigames/assets/tukoni-forest-keepers-hero-D-UQTA7d.jpg`,Us=`/minigames/assets/vacation-cafe-simulator-hero-DHuU6sOY.jpg`,Ws=`/minigames/assets/whisper-of-the-house-hero-ciSQ2ovS.jpg`,Gs=`/minigames/assets/winter-burrow-hero-oJn7juUA.jpg`,Ks=`/minigames/assets/wytchwood-hero-DzdPASTa.jpg`;function qs(e){return e<1e3?String(e):`${Math.floor(e/100)/10}K`}function Js(e){return e.toFixed(1)}function Ys(e){let t=new Date(e),n=Math.floor((new Date().getTime()-t.getTime())/864e5);if(n<1)return`today`;if(n<7)return`${n} day${n===1?``:`s`} ago`;let r=Math.floor(n/7);return`${r} week${r===1?``:`s`} ago`}var Xs=Object.assign({"../assets/library/camper-van-make-it-home-hero.jpg":Cs,"../assets/library/cast-n-chill-hero.jpg":ws,"../assets/library/cat-chess-hero.jpg":Ts,"../assets/library/cat-mail-co-hero.jpg":Es,"../assets/library/cozy-solitaire-hero.jpg":Ds,"../assets/library/cozy-sudoku-hero.jpg":Os,"../assets/library/grimshire-hero.jpg":ks,"../assets/library/heartopia-hero.jpg":As,"../assets/library/islanders-new-shores-hero.jpg":js,"../assets/library/koroneko-hero.jpg":Ms,"../assets/library/leaf-it-alone-hero.jpg":Ns,"../assets/library/leafy-corner-hero.jpg":Ps,"../assets/library/little-corners-hero.jpg":Fs,"../assets/library/organized-inside-hero.jpg":Is,"../assets/library/palia-hero.jpg":Ls,"../assets/library/shelve-the-potions-hero.jpg":Rs,"../assets/library/tailside-cozy-cafe-sim-hero.jpg":zs,"../assets/library/the-wild-at-heart-hero.jpg":Bs,"../assets/library/tiny-glade-hero.jpg":Vs,"../assets/library/tukoni-forest-keepers-hero.jpg":Hs,"../assets/library/vacation-cafe-simulator-hero.jpg":Us,"../assets/library/whisper-of-the-house-hero.jpg":Ws,"../assets/library/winter-burrow-hero.jpg":Gs,"../assets/library/wytchwood-hero.jpg":Ks}),Zs=new Map,Qs=[`game-details-dialog__comment-avatar--random-1`,`game-details-dialog__comment-avatar--random-2`,`game-details-dialog__comment-avatar--random-3`,`game-details-dialog__comment-avatar--random-4`,`game-details-dialog__comment-avatar--random-5`];function $s(e){let t=e.split(`/`).pop();if(!t)return``;let n=Object.keys(Xs).find(e=>e.endsWith(`/${t}`));return n?Xs[n]:``}function ec(e,t){let n=t.split(`@`,1)[0]?.trim()??``;return[e.trim(),n,`Player`].find(e=>e.length>=2&&e.length<=30)??`Player`}var tc={1:`🥇`,2:`🥈`,3:`🥉`};function nc(e){return e.map(e=>`
        <div class="game-details-dialog__record">
          <div class="game-details-dialog__record-player-group">
            <span class="game-details-dialog__record-medal" aria-hidden="true">
              ${tc[e.position]??``}
            </span>

            <span class="game-details-dialog__record-player">
              ${e.playerName}
            </span>
          </div>

          <div class="game-details-dialog__record-result-group">
            <span class="game-details-dialog__record-score">
              ${e.score.toLocaleString()} pts
            </span>

            <span class="game-details-dialog__record-time">
              ${Ys(e.achievedAt)}
            </span>
          </div>
        </div>
      `).join(``)}function rc(e,t){let n=document.createElement(`article`);n.className=`game-details-dialog__comment`,n.dataset.commentId=e.commentId,n.innerHTML=`
    <div class="game-details-dialog__comment-header">
      <div class="game-details-dialog__comment-author-group">
        <span
          class="game-details-dialog__comment-avatar ${t}"
        ></span>

        <span class="game-details-dialog__comment-author"></span>
      </div>

      <span class="game-details-dialog__comment-time"></span>
    </div>

    <p class="game-details-dialog__comment-text"></p>

    <div class="game-details-dialog__comment-likes">
      <button
        class="game-details-dialog__comment-likes-group"
        type="button"
        aria-label="Like comment"
        aria-pressed="false"
      >
        <span class="material-symbols-outlined" aria-hidden="true">
          favorite
        </span>

        <span class="game-details-dialog__comment-likes-count"></span>
      </button>
    </div>
  `;let r=n.querySelector(`.game-details-dialog__comment-avatar`),i=n.querySelector(`.game-details-dialog__comment-author`),a=n.querySelector(`.game-details-dialog__comment-time`),o=n.querySelector(`.game-details-dialog__comment-text`),s=n.querySelector(`.game-details-dialog__comment-likes-group`),c=n.querySelector(`.game-details-dialog__comment-likes-count`);return r&&(r.textContent=e.authorName.trim().charAt(0).toLocaleUpperCase()),i&&(i.textContent=e.authorName),a&&(a.textContent=Ys(e.createdAt)),o&&(o.textContent=e.text),c&&(c.textContent=String(e.likesCount)),s?.classList.toggle(`game-details-dialog__comment-likes-group--active`,e.isLikedByCurrentUser),s?.setAttribute(`aria-pressed`,String(e.isLikedByCurrentUser)),n}function ic(e,t){let n=document.createElement(`div`);n.className=`game-details-backdrop`,document.body.classList.add(`dialog-open`);let r=document.createElement(`section`);r.className=`game-details-dialog`,r.setAttribute(`role`,`dialog`),r.setAttribute(`aria-modal`,`true`),r.setAttribute(`aria-label`,`Game details`);let i=new Map;function a(e){let t=i.get(e);if(t)return t;let n=Qs[Math.floor(Math.random()*Qs.length)];return i.set(e,n),n}let o=()=>{r.querySelector(`.game-details-dialog__error`)?.remove();let e=document.createElement(`div`);e.className=`game-details-dialog__error`,e.innerHTML=`
      <p class="game-details-dialog__error-title">
        Failed to load game details.
      </p>

      <button
        class="game-details-dialog__retry"
        type="button"
      >
        Retry
      </button>
    `,e.querySelector(`.game-details-dialog__retry`)?.addEventListener(`click`,()=>{e.remove(),c()}),r.prepend(e);let t=r.querySelector(`.game-details-dialog__title`),n=r.querySelector(`.game-details-dialog__description`);t&&(t.textContent=`Game details unavailable`),n&&(n.textContent=`Please try again.`)},s=()=>{let e=r.querySelector(`.game-details-dialog__content`);e&&(e.innerHTML=`
      <div class="game-details-dialog__empty">
        <p class="game-details-dialog__empty-title">
          Game not found.
        </p>

        <p class="game-details-dialog__empty-text">
          Please try another game.
        </p>
      </div>
    `)},c=async()=>{try{let t=await fs(e,Do()?.email);if(!t){s();return}let n=r.querySelector(`.game-details-dialog__hero-image`),i=r.querySelector(`.game-details-dialog__title`),a=r.querySelector(`.game-details-dialog__rating`),o=r.querySelector(`.game-details-dialog__likes`),c=r.querySelector(`.game-details-dialog__description`),l=r.querySelectorAll(`.game-details-dialog__info-value`),u=r.querySelector(`.game-details-dialog__records-list`);n&&(n.src=$s(t.heroImage)),i&&(i.textContent=t.name),a&&(a.innerHTML=`
        <img src="${bs}" alt="" aria-hidden="true" />
        ${Js(t.rating)}
      `),o&&(o.innerHTML=`
        <img src="${xs}" alt="" aria-hidden="true" />
        ${qs(t.likesCount)}
      `);let d=r.querySelector(`.game-details-dialog__favorite`),f=d?.querySelector(`.game-details-dialog__favorite-text`);d&&(d.classList.toggle(`game-details-dialog__favorite--active`,t.isLikedByCurrentUser),d.setAttribute(`aria-pressed`,String(t.isLikedByCurrentUser))),f&&(f.textContent=t.isLikedByCurrentUser?`Remove from Favorites`:`Add to Favorites`),c&&(c.textContent=t.fullDescription);let p=[t.specs.genre,t.specs.players,t.specs.duration,t.specs.price];for(let[e,t]of p.entries()){let n=l[e];n&&(n.textContent=t)}u&&(u.innerHTML=nc(t.topRecords))}catch(e){if(e instanceof cs){s();return}o(),Q({message:`Failed to load game details.`,variant:`error`})}},l=async()=>{try{let t=await ms(e,Do()?.email);if(t.data.length===0){let e=r.querySelector(`.game-details-dialog__comments-title`),n=r.querySelector(`.game-details-dialog__comments-list`);e&&(e.textContent=`Comments (${t.meta.totalComments})`),n&&(n.innerHTML=`
            <div class="game-details-dialog__comments-empty">
              No comments yet.
            </div>
          `);return}let n=r.querySelector(`.game-details-dialog__comments-title`),i=r.querySelector(`.game-details-dialog__comments-list`);n&&(n.textContent=`Comments (${t.meta.totalComments})`),i&&i.replaceChildren(...t.data.map(e=>rc(e,a(e.authorName))))}catch{let e=r.querySelector(`.game-details-dialog__comments-list`);e&&(e.innerHTML=`
          <div class="game-details-dialog__comments-error">
            Failed to load comments.
          </div>
        `),Q({message:`Failed to load comments.`,variant:`error`})}};r.innerHTML=`
  <div class="game-details-dialog__hero">
    <img
      class="game-details-dialog__hero-image"
      src=""
      alt=""
    />

    <button
      class="game-details-dialog__close"
      type="button"
      aria-label="Close game details"
    >
      <span class="material-symbols-outlined" aria-hidden="true">
        close
      </span>
    </button>
  </div>

  <div class="game-details-dialog__content">
    <div class="game-details-dialog__title-row">  
      <h2 class="game-details-dialog__title">
        Loading...
      </h2>  

      <div class="game-details-dialog__ratings">
        <span class="game-details-dialog__rating">
          <img src="${bs}" alt="" aria-hidden="true" />
          -
        </span>

        <span class="game-details-dialog__likes">
          <img src="${xs}" alt="" aria-hidden="true" />
          -
        </span>
      </div>
    </div>

    <p class="game-details-dialog__description">
      Loading game details... <!-- description -->
    </p>

    <div class="game-details-dialog__info">
      <div class="game-details-dialog__info-item">
        <span class="game-details-dialog__info-label">Genre</span>
        <span class="game-details-dialog__info-value">-</span>
      </div>

      <div class="game-details-dialog__info-item">
        <span class="game-details-dialog__info-label">Players</span>
        <span class="game-details-dialog__info-value">-</span>
      </div>

      <div class="game-details-dialog__info-item">
        <span class="game-details-dialog__info-label">Duration</span>
        <span class="game-details-dialog__info-value">-</span>
      </div>

      <div class="game-details-dialog__info-item">
        <span class="game-details-dialog__info-label">Price</span>
        <span class="game-details-dialog__info-value">-</span>
      </div>
    </div>

   <div class="game-details-dialog__actions">
      <button class="game-details-dialog__play" type="button">
        Play Now
      </button>

      <button
        class="game-details-dialog__favorite"
        type="button"
        aria-label="Add to Favorites"
        aria-pressed="false"
      >
        <span class="material-symbols-outlined" aria-hidden="true">
          favorite
        </span>

        <span class="game-details-dialog__favorite-text">
          Add to Favorites
        </span>
      </button>
    </div>

    <section class="game-details-dialog__records">
      <div class="game-details-dialog__records-title">
        <span aria-hidden="true">🏆</span>
        <h3>Top Records</h3>
      </div>

      <div class="game-details-dialog__records-list"></div>
    </section>

    <section class="game-details-dialog__comments">
      <h3 class="game-details-dialog__comments-title">
        Comments (0)
      </h3>

    <div class="game-details-dialog__comment-form">
      <div class="game-details-dialog__user-avatar" aria-hidden="true">
        U
      </div>

      <textarea
        class="game-details-dialog__comment-input"
        placeholder="Write a comment..."
        aria-label="Write a comment"
      ></textarea>

      <button
        class="game-details-dialog__send"
        type="button"
        aria-label="Send comment"
      >
        <span class="material-symbols-outlined" aria-hidden="true">
          send
        </span>
      </button>
    </div>

      <div class="game-details-dialog__comments-list">
        <div class="game-details-dialog__comments-list">
          <div class="game-details-dialog__comments-loading">
            Loading comments...
          </div>
        </div>
      </div>
    </section>
  </div>
`,c(),l();let u=r.querySelector(`.game-details-dialog__favorite`);function d(t){Q({message:t,variant:`error`});let i=r.querySelector(`.game-details-dialog__comment-input`);i?.value&&Zs.set(e,i.value),document.removeEventListener(`keydown`,E),n.remove(),document.body.classList.remove(`dialog-open`),Ho(`login`)}let f=!1;u?.addEventListener(`click`,async()=>{if(f)return;let t=await Z();if(t.status!==`authenticated`){d(t.status===`expired`?`Your session has expired. Please log in again.`:`Log in to add games to your favorites.`);return}f=!0,u.disabled=!0;let n=u.querySelector(`.game-details-dialog__favorite-text`),i=n?.textContent??``;n&&(n.textContent=`Updating…`);try{let i=await ps(e,t.session.email);u.classList.toggle(`game-details-dialog__favorite--active`,i.isFavorited),u.setAttribute(`aria-pressed`,String(i.isFavorited)),n&&(n.textContent=i.isFavorited?`Remove from Favorites`:`Add to Favorites`);let a=r.querySelector(`.game-details-dialog__likes`);a&&(a.innerHTML=`
        <img src="${xs}" alt="" aria-hidden="true" />
        ${qs(i.likesCount)}
      `)}catch{n&&(n.textContent=i),Q({message:`Unable to update favorites. The result is unknown. Please try again.`,variant:`error`})}finally{f=!1,u.disabled=!1}}),n.append(r);let p=r.querySelector(`.game-details-dialog__comment-input`),m=r.querySelector(`.game-details-dialog__send`),h=r.querySelector(`.game-details-dialog__comments-list`),g=r.querySelector(`.game-details-dialog__user-avatar`),_=Do();p&&(p.disabled=!_,_||(p.placeholder=`Log in to write a comment`)),g&&_&&(g.textContent=[...qo(_.displayName,_.email).trim()][0]?.toLocaleUpperCase()??`U`);let v=!1,y=()=>{if(!p||!m)return;let e=p.value.trim().length;m.disabled=v||!Do()||e===0||e>500},b=new Set,x=()=>{p&&(p.style.height=`auto`,p.style.height=`${p.scrollHeight}px`)},S=Zs.get(e);p&&S&&(p.value=S,x()),p?.addEventListener(`input`,()=>{x(),y()}),y();async function C(){if(!p||!m||v)return;let t=p.value.trim();if(t.length===0||t.length>500){Q({message:`Comment must contain between 1 and 500 characters.`,variant:`error`});return}let n=await Z();if(n.status!==`authenticated`){d(n.status===`expired`?`Your session has expired. Please log in again.`:`Log in to post a comment.`);return}v=!0,p.disabled=!0,m.disabled=!0;let r=ec(n.session.displayName,n.session.email);try{await hs(e,n.session.email,r,t),Zs.delete(e),p.value=``,p.style.height=``,await l()}catch(e){Q({message:e instanceof TypeError?`Comment submission result is unknown. Please check before retrying.`:`Unable to post comment. Please try again.`,variant:`error`})}finally{v=!1,document.body.contains(p)&&(p.disabled=!1,y())}}m?.addEventListener(`click`,()=>{C()}),p?.addEventListener(`keydown`,e=>{e.key!==`Enter`||e.shiftKey||m?.disabled||(e.preventDefault(),C())}),h?.addEventListener(`click`,async e=>{let t=e.target;if(!(t instanceof HTMLElement))return;let n=t.closest(`.game-details-dialog__comment-likes-group`);if(!n)return;let r=n.closest(`.game-details-dialog__comment`)?.dataset.commentId;if(!r||b.has(r))return;let i=await Z();if(i.status!==`authenticated`){d(i.status===`expired`?`Your session has expired. Please log in again.`:`Log in to like comments.`);return}b.add(r),n.disabled=!0,n.setAttribute(`aria-busy`,`true`);let a=n.querySelector(`.game-details-dialog__comment-likes-count`),o=a?.textContent??``;a&&(a.textContent=`…`);try{let e=await gs(r,i.session.email);n.classList.toggle(`game-details-dialog__comment-likes-group--active`,e.isLikedByCurrentUser),n.setAttribute(`aria-pressed`,String(e.isLikedByCurrentUser)),a&&(a.textContent=String(e.likesCount))}catch{a&&(a.textContent=o),Q({message:`Unable to update the comment like. The result is unknown. Please try again.`,variant:`error`})}finally{b.delete(r),document.body.contains(n)&&(n.disabled=!1,n.removeAttribute(`aria-busy`))}});let w=r.querySelector(`.game-details-dialog__close`);function T(){n.classList.contains(`game-details-backdrop--closing`)||(document.removeEventListener(`keydown`,E),n.classList.add(`game-details-backdrop--closing`),n.addEventListener(`animationend`,e=>{e.target===n&&(document.body.classList.remove(`dialog-open`),n.remove(),t?.())}))}function E(e){e.key===`Escape`&&T()}return w?.addEventListener(`click`,T),n.addEventListener(`click`,e=>{e.target===n&&T()}),document.addEventListener(`keydown`,E),n}function ac(e){let t=new URLSearchParams(location.search);e?t.set(`game`,e):t.delete(`game`);let n=`/minigames/`,r=t.toString(),i=r?`${n}?${r}`:n;history.pushState({},``,i)}var oc=Object.assign({"../assets/home/cat-mail-co-card.jpg":Qo,"../assets/home/heartopia-card.jpg":$o,"../assets/home/islanders-new-shores-card.jpg":es,"../assets/home/palia-card.jpg":ts,"../assets/home/shelve-the-potions-card.jpg":ns,"../assets/home/tailside-cozy-cafe-sim-card.jpg":rs,"../assets/home/tiny-glade-card.jpg":is,"../assets/home/vacation-cafe-simulator-card.jpg":as,"../assets/home/winter-burrow-card.jpg":os});function sc(e){let t=e.split(`/`).pop();return t?oc[`../assets/home/${t}`]??``:``}var cc=[`game-card--edge`,`game-card--regular`,`game-card--featured`,`game-card--regular`,`game-card--edge`],lc=(()=>{let e=0;return{getIndex(){return e},setIndex(t){e=t}}})();function uc(){let e=document.createElement(`section`);e.className=`new-games`,e.innerHTML=`
    <div class="new-games__header">
      <h2 class="new-games__title">New Games</h2>

      <div class="new-games__controls">
        <button
          class="new-games__control"
          type="button"
          aria-label="Previous games"
        >
          <img src="${vs}" alt="" aria-hidden="true" />
        </button>

        <button
          class="new-games__control new-games__control--next"
          type="button"
          aria-label="Next games"
        >
          <img src="${ys}" alt="" aria-hidden="true" />
        </button>
      </div>
    </div>

    <div class="new-games__viewport">
      <div class="new-games__track">
        <!-- game cards will go here -->
      </div>
    </div>
  `;let t=e.querySelector(`.new-games__track`);if(!t)throw Error(`New games track not found`);let n=[],r=e.querySelector(`.new-games__control:not(.new-games__control--next)`),i=e.querySelector(`.new-games__control--next`),a=e=>{r&&(r.disabled=e),i&&(i.disabled=e)},o=lc.getIndex();function s(){return Array.from({length:5},(e,t)=>{let r=(o+t)%n.length;return n[r]})}let c=()=>{t.replaceChildren();for(let e=0;e<5;e+=1){let n=document.createElement(`div`);n.className=`game-card game-card--skeleton ${cc[e]}`,t.append(n)}},l=()=>{t.replaceChildren();let e=document.createElement(`div`);e.className=`new-games__empty`,e.innerHTML=`
      <p class="new-games__empty-title">No featured games available.</p>
      <p class="new-games__empty-text">Please check back later.</p>
    `,t.append(e)},u=()=>{t.replaceChildren();let e=s();for(let[n,r]of e.entries())t.append(Ss({...r,className:cc[n]}))},d=async()=>{a(!0),c();try{let e=await ss();if(e.length===0){l();return}n=e.map(e=>({slug:e.slug,title:e.name,imageSrc:sc(e.cardImage),rating:e.rating.toFixed(1),likes:`${(e.likesCount/1e3).toFixed(1)}K`})),a(!1),u(),new URLSearchParams(location.search).has(`game`)||b()}catch{f(),Q({message:`Failed to load featured games.`,variant:`error`})}},f=()=>{t.replaceChildren();let e=document.createElement(`div`);e.className=`new-games__error`,e.innerHTML=`
      <p class="new-games__error-title">Failed to load featured games.</p>
      <button class="new-games__retry" type="button">
        Retry
      </button>
    `,e.querySelector(`.new-games__retry`)?.addEventListener(`click`,()=>{d()}),t.append(e)};d();function p(e){for(let[t,n]of e.entries()){n.classList.remove(`game-card--edge`,`game-card--regular`,`game-card--featured`);let e=cc[t];e&&n.classList.add(e)}}let m=()=>{if(n.length===0)return;let e=[...t.children][0];if(!e)return;o=(o+1)%n.length,lc.setIndex(o);let r=(o+4)%n.length,i=n[r],a=Ss({...i,className:`game-card--edge`});e.remove(),t.append(a),p([...t.children])},h=()=>{if(n.length===0)return;let e=[...t.children].at(-1);if(!e)return;o=(o-1+n.length)%n.length,lc.setIndex(o);let r=n[o],i=Ss({...r,className:`game-card--edge`});e.remove(),t.prepend(i),p([...t.children])},g=4e3,_,v=0,y=g,b=(e=g)=>{clearTimeout(_),y=e,v=Date.now(),_=setTimeout(()=>{m(),b()},e)},x=()=>{if(_===void 0)return;let e=Date.now()-v;y=Math.max(0,y-e),clearTimeout(_),_=void 0},S=()=>{b(y)},C=()=>{b()},w=0,T=0,E=!1,D;t.addEventListener(`pointerdown`,e=>{let n=e.target;n instanceof HTMLElement&&n.closest(`.new-games__retry`)||(E=!0,w=e.clientX,T=e.clientX,D=n instanceof HTMLElement?n.closest(`.game-card`)??void 0:void 0,t.setPointerCapture(e.pointerId),e.preventDefault(),x())}),t.addEventListener(`pointermove`,e=>{E&&(T=e.clientX)}),t.addEventListener(`pointerup`,e=>{if(!E)return;E=!1,t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId);let n=T-w;if(Math.abs(n)>=50){n<0?m():h(),D=void 0,C();return}if(!D){S();return}let r=D.dataset.slug;if(!r){S(),D=void 0;return}x(),ac(r);let i=ic(r,()=>{history.back()});document.body.append(i),D=void 0}),t.addEventListener(`pointercancel`,e=>{E=!1,t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),S()}),r?.addEventListener(`click`,()=>{h(),C()}),i?.addEventListener(`click`,()=>{m(),C()});let O=new URLSearchParams(location.search).get(`game`);if(O&&(x(),!document.querySelector(`.game-details-backdrop`))){let e=ic(O,()=>{history.back()});document.body.append(e)}return e}function dc(e){return{Alex_Pro99:`AP`,CozyGamer_x:`CG`,MatchMaster:`MM`,BubblePop:`BP`,SudokuGod:`SG`}[e]??e.slice(0,2).toUpperCase()}function fc(e){return e.map(e=>`
        <tr>
          <td class="leaderboard__rank">#${e.rank}</td>
          <td class="leaderboard__player">
            <span class="leaderboard__avatar">${dc(e.playerName)}</span>
            <span class="leaderboard__player-name">${e.playerName}</span>
          </td>
          <td class="leaderboard__games">${e.gamesPlayed}</td>

          <td class="leaderboard__score">
            <span class="leaderboard__score-desktop">
              ${e.totalScore.toLocaleString(`en-US`)}
            </span>
            <span class="leaderboard__score-mobile">
              ${(e.totalScore/1e3).toFixed(1)}K
            </span>
          </td>

          <td class="leaderboard__streak">
            🔥
            <span class="leaderboard__streak-desktop">${e.streakDays} days</span>
            <span class="leaderboard__streak-tablet">${e.streakDays}d</span>
          </td>

          <td>
            <span class="leaderboard__game">${e.favoriteGameName}</span>
          </td>
        </tr>
      `).join(``)}function pc(){let e=document.createElement(`section`);e.className=`leaderboard`,e.innerHTML=`
    <h2 class="leaderboard__title">
        <span class="leaderboard__title-desktop">Top Players This Week</span>
        <span class="leaderboard__title-mobile">Top Players</span>
    </h2>

    <div class="leaderboard__table-wrapper">
      <table class="leaderboard__table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th class="leaderboard__games">
                <span class="leaderboard__heading-desktop">Games Played</span>
                <span class="leaderboard__heading-tablet">Games</span>
            </th>
            <th>
                <span class="leaderboard__heading-desktop">Total Score</span>
                <span class="leaderboard__heading-tablet">Score</span>
            </th>
            <th>Streak</th>
            <th>Favorite Game</th>
          </tr>
        </thead>

        <tbody class="leaderboard__body"></tbody>
      </table>
    </div>
  `;let t=e.querySelector(`.leaderboard__body`);if(!t)return e;let n=async()=>{t.innerHTML=`
      <tr>
        <td colspan="6" class="leaderboard__loading">
          Loading leaderboard...
        </td>
      </tr>
    `;try{let e=await _s();if(e.length===0){t.innerHTML=`
          <tr>
            <td colspan="6" class="leaderboard__empty">
              No leaderboard data available.
            </td>
          </tr>
        `;return}t.innerHTML=fc(e)}catch{t.innerHTML=`
        <tr>
          <td colspan="6" class="leaderboard__error">
            <div class="leaderboard__error-content">
              <span>Failed to load leaderboard.</span>

              <button
                class="leaderboard__retry"
                type="button"
              >
                Retry
              </button>
            </div>
          </td>
        </tr>
      `,t.querySelector(`.leaderboard__retry`)?.addEventListener(`click`,()=>{n()}),Q({message:`Failed to load leaderboard.`,variant:`error`})}};return n(),e}var mc=`/minigames/assets/illustration-side-DsQZrXDY.png`,hc=`data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%203V15M7%208L12%203L17%208M21%2015V19C21%2019.5304%2020.7893%2020.0391%2020.4142%2020.4142C20.0391%2020.7893%2019.5304%2021%2019%2021H5C4.46957%2021%203.96086%2020.7893%203.58579%2020.4142C3.21071%2020.0391%203%2019.5304%203%2019V15'%20stroke='%23242145'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e`;function gc(){let e=document.createElement(`section`);return e.className=`developer-cta`,e.innerHTML=`
    <img
      class="developer-cta__image"
      src="${mc}"
      alt=""
      aria-hidden="true"
    />

    <div class="developer-cta__card">
      <h2 class="developer-cta__title">Are You a Game Developer?</h2>

      <p class="developer-cta__text">
        Want to see your game on MiniGames? We’re always looking for fun,<br>
        engaging mini games to add to our platform. Submit your game<br>
        and reach thousands of players!
      </p>

      <button class="developer-cta__button" type="button">
        <img
           class="developer-cta__button-icon"
           src="${hc}"
           alt=""
           aria-hidden="true"
        />
        Submit Form
      </button>

      <p class="developer-cta__contact">
        or contact us at developers@minigames.com
      </p>
    </div>
  `,e}var _c=`data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='20'%20height='20'%20rx='10'%20fill='%23242145'/%3e%3cpath%20d='M5.00568%2013V7.18182H7.30114C7.74053%207.18182%208.11553%207.26042%208.42614%207.41761C8.73864%207.57292%208.97633%207.79356%209.1392%208.07955C9.30398%208.36364%209.38636%208.69792%209.38636%209.08239C9.38636%209.46875%209.30303%209.80114%209.13636%2010.0795C8.9697%2010.3561%208.72822%2010.5682%208.41193%2010.7159C8.09754%2010.8636%207.71686%2010.9375%207.26989%2010.9375H5.73295V9.94886H7.07102C7.30587%209.94886%207.50095%209.91667%207.65625%209.85227C7.81155%209.78788%207.92708%209.69129%208.00284%209.5625C8.08049%209.43371%208.11932%209.27367%208.11932%209.08239C8.11932%208.8892%208.08049%208.72633%208.00284%208.59375C7.92708%208.46117%207.81061%208.3608%207.65341%208.29261C7.49811%208.22254%207.30208%208.1875%207.06534%208.1875H6.2358V13H5.00568ZM8.14773%2010.3523L9.59375%2013H8.2358L6.82102%2010.3523H8.14773ZM13.1119%208.85511C13.0892%208.62595%2012.9917%208.44792%2012.8193%208.32102C12.647%208.19413%2012.4131%208.13068%2012.1176%208.13068C11.9169%208.13068%2011.7473%208.15909%2011.6091%208.21591C11.4708%208.27083%2011.3648%208.34754%2011.2909%208.44602C11.2189%208.54451%2011.183%208.65625%2011.183%208.78125C11.1792%208.88542%2011.2009%208.97633%2011.2483%209.05398C11.2975%209.13163%2011.3648%209.19886%2011.45%209.25568C11.5352%209.31061%2011.6337%209.3589%2011.7455%209.40057C11.8572%209.44034%2011.9765%209.47443%2012.1034%209.50284L12.6261%209.62784C12.8799%209.68466%2013.1129%209.76042%2013.325%209.85511C13.5371%209.94981%2013.7208%2010.0663%2013.8761%2010.2045C14.0314%2010.3428%2014.1517%2010.5057%2014.2369%2010.6932C14.3241%2010.8807%2014.3686%2011.0956%2014.3705%2011.3381C14.3686%2011.6941%2014.2777%2012.0028%2014.0977%2012.2642C13.9197%2012.5237%2013.6621%2012.7254%2013.325%2012.8693C12.9898%2013.0114%2012.5854%2013.0824%2012.1119%2013.0824C11.6422%2013.0824%2011.2331%2013.0104%2010.8847%2012.8665C10.5381%2012.7225%2010.2672%2012.5095%2010.0722%2012.2273C9.87898%2011.9432%209.77765%2011.5919%209.76818%2011.1733H10.9585C10.9718%2011.3684%2011.0277%2011.5312%2011.1261%2011.6619C11.2265%2011.7907%2011.36%2011.8883%2011.5267%2011.9545C11.6953%2012.0189%2011.8856%2012.0511%2012.0977%2012.0511C12.3061%2012.0511%2012.4869%2012.0208%2012.6403%2011.9602C12.7956%2011.8996%2012.9159%2011.8153%2013.0011%2011.7074C13.0864%2011.5994%2013.129%2011.4754%2013.129%2011.3352C13.129%2011.2045%2013.0902%2011.0947%2013.0125%2011.0057C12.9367%2010.9167%2012.825%2010.8409%2012.6773%2010.7784C12.5314%2010.7159%2012.3525%2010.6591%2012.1403%2010.608L11.5068%2010.4489C11.0163%2010.3295%2010.629%2010.143%2010.3449%209.8892C10.0608%209.63542%209.9197%209.29356%209.92159%208.86364C9.9197%208.51136%2010.0134%208.2036%2010.2028%207.94034C10.3941%207.67708%2010.6564%207.47159%2010.9898%207.32386C11.3231%207.17614%2011.7019%207.10227%2012.1261%207.10227C12.558%207.10227%2012.9348%207.17614%2013.2568%207.32386C13.5807%207.47159%2013.8326%207.67708%2014.0125%207.94034C14.1924%208.2036%2014.2852%208.50852%2014.2909%208.85511H13.1119Z'%20fill='%23FFD02B'/%3e%3c/svg%3e`,vc=`data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='20'%20height='20'%20rx='10'%20fill='white'/%3e%3cpath%20d='M7.9%2014L4.4%2010.5L7.9%207L8.64375%207.74375L5.8875%2010.5L8.64375%2013.2562L7.9%2014ZM12.1%2014L11.3563%2013.2562L14.1125%2010.5L11.3563%207.74375L12.1%207L15.6%2010.5L12.1%2014Z'%20fill='%23242145'/%3e%3c/svg%3e`;function yc(){let e=document.createElement(`footer`);return e.className=`footer`,e.innerHTML=`
    <div class="footer__top">
      <div class="footer__brand">
        <div class="footer__logo">
          <img
            class="footer__logo-icon"
            src="${Go}"
            alt=""
            aria-hidden="true"
          />
          <span>MiniGames</span>
        </div>

        <p class="footer__description">
          Take a short break and have fun. Hundreds of curated casual
          mini-games right in your web browser. No download required.
        </p>
      </div>

      <div class="footer__links">
        <nav class="footer__column" aria-label="Explore">
          <h3 class="footer__title">Explore</h3>
          <a href="#">Home</a>
          <a href="#">Library</a>
          <a href="#">Categories</a>
          <a href="#">Tournaments</a>
        </nav>

        <nav class="footer__column" aria-label="Company">
          <h3 class="footer__title">Company</h3>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </nav>

        <div class="footer__community">
          <h3 class="footer__title">Community</h3>

          <div class="footer__socials">
            <a href="#" class="footer__social" aria-label="Share">
                <span class="material-symbols-outlined">share</span>
            </a>

            <a href="#" class="footer__social" aria-label="Chat">
                <span class="material-symbols-outlined">chat</span>
            </a>

            <a href="#" class="footer__social" aria-label="RSS">
                <span class="material-symbols-outlined">rss_feed</span>
            </a>
          </div>

        </div>
      </div>
    </div>

    <div class="footer__divider"></div>

    <div class="footer__bottom">
      <span class="footer__copyright">
        © 2026 MiniGames. All rights reserved.
      </span>

      <div class="footer__meta">
        <a
          href="https://rs.school/courses/short-track"
          class="footer__meta-link footer__rsschool"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="footer__rs-logo"
            src="${_c}"
            alt=""
            aria-hidden="true"
          />
          <span>RS School</span>
        </a>

        <a
          href="https://github.com/Festival3224"
          target="_blank"
          rel="noopener noreferrer"
          class="footer__meta-link footer__student"
        >
          <img
            class="footer__github-icon"
            src="${vc}"
            alt=""
            aria-hidden="true"
          />
          <span>@Festival3224</span>
        </a>
      </div>

      <span class="footer__love">Designed with love</span>
    </div>
  `,e}function bc(){let e=document.createElement(`div`);e.append(Xo());let t=document.createElement(`main`);return t.append(Zo()),t.append(uc()),t.append(pc()),t.append(gc()),t.append(yc()),e.append(t),Wo(),e}var xc=`/minigames/assets/camper-van-make-it-home-card-61XprhL7.jpg`,Sc=`/minigames/assets/cast-n-chill-card-CRLWRuq0.jpg`,Cc=`/minigames/assets/cat-chess-card-BkETDAfr.jpg`,wc=`/minigames/assets/cat-mail-co-card-B0GMTC_n.jpg`,Tc=`/minigames/assets/cozy-solitaire-card-CSczvhq9.jpg`,Ec=`/minigames/assets/cozy-sudoku-card-CyAOOis5.jpg`,Dc=`/minigames/assets/grimshire-card-D1QcLtZT.jpg`,Oc=`/minigames/assets/heartopia-card-DRd_6OVG.jpg`,kc=`/minigames/assets/islanders-card-DljrohUL.jpg`,Ac=`/minigames/assets/leaf-it-alone-card-CGXXB8uI.jpg`,jc=`/minigames/assets/leafy-corner-card-CAdJaXNI.jpg`,Mc=`/minigames/assets/cat-mail-co-card-B0GMTC_n.jpg`,Nc=`/minigames/assets/heartopia-card-DRd_6OVG.jpg`,Pc=`/minigames/assets/koroneko-card-BXvG49TG.jpg`,Fc=`/minigames/assets/palia-card-8xT8yeZQ.jpg`,Ic=`/minigames/assets/tukoni-forest-keepers-card-CkPF-Hda.jpg`,Lc=`/minigames/assets/little-corners-card-BzTzTJLT.jpg`,Rc=`/minigames/assets/organized-inside-card-CyWIV6Rk.jpg`,zc=`/minigames/assets/palia-card-8xT8yeZQ.jpg`,Bc=`/minigames/assets/shelve-the-potions-card-DTY_N_zq.jpg`,Vc=`/minigames/assets/the-wild-at-heart-card-DfO3UIaM.jpg`,Hc=`/minigames/assets/tiny-glade-card-CS2XLEzK.jpg`,Uc=`/minigames/assets/vacation-cafe-card-Bzcyczbo.jpg`,Wc=`/minigames/assets/vacation-cafe-card-Bzcyczbo.jpg`,Gc=`/minigames/assets/whisper-of-the-house-card-BE7Dq45b.jpg`,Kc=`/minigames/assets/winter-burrow-card-KbzzF82b.jpg`,qc=`/minigames/assets/wytchwood-card-XvNmJ299.jpg`;function Jc(e,t,n){let r=document.createElement(`nav`);r.className=`pagination`,r.setAttribute(`aria-label`,`Library pagination`);let i=n=>{if(e<=n)return Array.from({length:e},(e,t)=>t+1);let r=Math.max(1,t-Math.floor(n/2)),i=r+n-1;return i>e&&(i=e,r=i-n+1),Array.from({length:i-r+1},(e,t)=>r+t)},a=()=>{r.replaceChildren();let a=document.createElement(`button`);a.className=`pagination__arrow`,a.type=`button`,a.innerHTML=`
      <span class="material-symbols-outlined" aria-hidden="true">
        chevron_left
      </span>
    `,a.disabled=t===1,a.addEventListener(`click`,()=>{t<=1||n(t-1)}),r.append(a);let o=matchMedia(`(max-width: 499px)`).matches?3:4,s=i(o);for(let e of s){let i=document.createElement(`button`);i.className=`pagination__page`,i.type=`button`,i.textContent=String(e),i.dataset.page=String(e),e===t&&(i.classList.add(`pagination__page--active`),i.setAttribute(`aria-current`,`page`)),i.addEventListener(`click`,()=>{n(e)}),r.append(i)}let c=document.createElement(`button`);c.className=`pagination__arrow`,c.type=`button`,c.innerHTML=`
      <span class="material-symbols-outlined" aria-hidden="true">
        chevron_right
      </span>
    `,c.disabled=t===e,c.addEventListener(`click`,()=>{t>=e||n(t+1)}),r.append(c)};return a(),addEventListener(`resize`,a),r}function Yc({slug:e,title:t,imageSrc:n,category:r,description:i,rating:a,likes:o,price:s}){let c=document.createElement(`article`);return c.className=`library-game-card`,c.dataset.slug=e,c.innerHTML=`
    <img
      class="library-game-card__image"
      src="${n}"
      alt=""
    />

    <div class="library-game-card__content">
      <div class="library-game-card__heading">
        <h2 class="library-game-card__title">${t}</h2>
        <span class="library-game-card__tag">${r}</span>
      </div>

      <span class="library-game-card__price">${s}</span>

      <p class="library-game-card__description">
        ${i}
      </p>

      <div class="library-game-card__meta">
        <span class="library-game-card__rating">
          <img src="${bs}" alt="" aria-hidden="true" />
          ${a}
        </span>

        <span class="library-game-card__likes">
          <img src="${xs}" alt="" aria-hidden="true" />
          ${o}
        </span>
      </div>

      <button class="library-game-card__details" type="button">
        Details
      </button>
    </div>
  `,c}function Xc(e){let t=new URLSearchParams(location.search);e?t.set(`game`,e):t.delete(`game`);let n=`/minigames/library?${t.toString()}`;history.pushState({},``,n)}function Zc(e){let t=new URLSearchParams;t.set(`category`,e.category),t.set(`sort`,e.sort),t.set(`page`,String(e.page));let n=`/minigames/library?${t.toString()}`;history.pushState({},``,n)}function Qc(){let e=new URLSearchParams(location.search),t=e.get(`category`)??`all`,n=e.get(`sort`),r=n&&[`rating-desc`,`rating-asc`,`name-asc`,`name-desc`].includes(n)?n:`rating-desc`,i=Number(e.get(`page`));return{category:t,sort:r,page:Number.isSafeInteger(i)&&i>0?i:1}}var $c=Object.assign({"../assets/camper-van-make-it-home-card.jpg":xc,"../assets/cast-n-chill-card.jpg":Sc,"../assets/cat-chess-card.jpg":Cc,"../assets/cat-mail-co-card.jpg":wc,"../assets/cozy-solitaire-card.jpg":Tc,"../assets/cozy-sudoku-card.jpg":Ec,"../assets/grimshire-card.jpg":Dc,"../assets/heartopia-card.jpg":Oc,"../assets/home/cat-mail-co-card.jpg":Qo,"../assets/home/heartopia-card.jpg":$o,"../assets/home/islanders-new-shores-card.jpg":es,"../assets/home/palia-card.jpg":ts,"../assets/home/shelve-the-potions-card.jpg":ns,"../assets/home/tailside-cozy-cafe-sim-card.jpg":rs,"../assets/home/tiny-glade-card.jpg":is,"../assets/home/vacation-cafe-simulator-card.jpg":as,"../assets/home/winter-burrow-card.jpg":os,"../assets/islanders-card.jpg":kc,"../assets/leaf-it-alone-card.jpg":Ac,"../assets/leafy-corner-card.jpg":jc,"../assets/library/cat-mail-co-card.jpg":Mc,"../assets/library/heartopia-card.jpg":Nc,"../assets/library/koroneko-card.jpg":Pc,"../assets/library/palia-card.jpg":Fc,"../assets/library/tukoni-forest-keepers-card.jpg":Ic,"../assets/little-corners-card.jpg":Lc,"../assets/organized-inside-card.jpg":Rc,"../assets/palia-card.jpg":zc,"../assets/shelve-the-potions-card.jpg":Bc,"../assets/the-wild-at-heart-card.jpg":Vc,"../assets/tiny-glade-card.jpg":Hc,"../assets/vacation-cafe-card.jpg":Uc,"../assets/vacation-cafe-simulator-card.jpg":Wc,"../assets/whisper-of-the-house-card.jpg":Gc,"../assets/winter-burrow-card.jpg":Kc,"../assets/wytchwood-card.jpg":qc});function el(e){let t=e.split(`/`).pop();if(!t)return``;let n=Object.keys($c).find(e=>e.endsWith(`/${t}`));return n?$c[n]:``}function tl(){let e=Qc(),t=document.createElement(`div`);t.className=`page`,t.append(Xo());let n=document.createElement(`main`);n.className=`library`;let r=document.createElement(`section`);r.className=`library__title-section`;let i=document.createElement(`h1`);i.className=`library__title`,i.textContent=`Game Library`;let a=document.createElement(`p`);a.className=`library__subtitle`,a.textContent=`Browse our collection of casual mini-games`,r.append(i,a);let o=document.createElement(`div`);o.className=`library__controls`;let s=document.createElement(`div`);s.className=`library__filters`;let c=e.category,l=e.sort,u=()=>{s.replaceChildren();let e=document.createElement(`span`);e.className=`library__filters-loading`,e.textContent=`Loading categories...`,s.append(e)},d=()=>{s.replaceChildren();let e=document.createElement(`span`);e.className=`library__filters-empty`,e.textContent=`No categories available.`,s.append(e)},f=()=>{s.replaceChildren();let e=document.createElement(`div`);e.className=`library__filters-error`,e.innerHTML=`
      <span>Failed to load categories.</span>
      <button class="library__filters-retry" type="button">
        Retry
      </button>
    `,e.querySelector(`.library__filters-retry`)?.addEventListener(`click`,()=>{p()}),s.append(e)},p=async()=>{u();try{let e=await ds();if(e.length===0){d();return}s.replaceChildren();for(let t of e){let e=document.createElement(`button`);e.className=`library__filter`,e.type=`button`,e.textContent=t.label,e.dataset.category=t.slug;let n=t.slug===c;e.setAttribute(`aria-pressed`,String(n)),n&&e.classList.add(`library__filter--active`),s.append(e)}}catch{f(),Q({message:`Failed to load categories.`,variant:`error`})}};p();let m=!1,h=!1,g=0,_=0,v=0;s.addEventListener(`pointerdown`,e=>{m=!0,h=!1,g=e.clientX,_=s.scrollLeft,v=0}),s.addEventListener(`pointermove`,e=>{if(!m)return;let t=e.clientX-g;v=Math.abs(t),!(v<=5)&&(h||(h=!0,s.setPointerCapture(e.pointerId)),s.scrollLeft=_-t)}),s.addEventListener(`pointerup`,e=>{m=!1,h&&s.hasPointerCapture(e.pointerId)&&s.releasePointerCapture(e.pointerId),h=!1}),s.addEventListener(`pointercancel`,()=>{m=!1,h=!1}),s.addEventListener(`click`,e=>{if(v>5)return;let t=e.target;if(!(t instanceof HTMLElement))return;let n=t.closest(`.library__filter`);if(!n)return;let r=n.dataset.category;if(r){for(let e of s.querySelectorAll(`.library__filter`))e.classList.remove(`library__filter--active`),e.setAttribute(`aria-pressed`,`false`);n.classList.add(`library__filter--active`),n.setAttribute(`aria-pressed`,`true`),c=r,k=1,Zc({category:c,sort:l,page:k}),j(1)}});let y=document.createElement(`div`);y.className=`library__sort-wrapper`;let b=document.createElement(`button`);b.className=`library__sort`,b.type=`button`,b.setAttribute(`aria-expanded`,`false`),b.setAttribute(`aria-haspopup`,`listbox`);let x=document.createElement(`div`);x.className=`library__sort-menu`,x.setAttribute(`role`,`listbox`),x.hidden=!0;let S=[{label:`Rating ↓`,value:`rating-desc`},{label:`Rating ↑`,value:`rating-asc`},{label:`Name A→Z`,value:`name-asc`},{label:`Name Z→A`,value:`name-desc`}],C=S.find(e=>e.value===l),w=document.createElement(`span`);w.textContent=`Sort by: ${C?.label??`Rating ↓`}`;let T=document.createElement(`span`);T.className=`material-symbols-outlined`,T.setAttribute(`aria-hidden`,`true`),T.textContent=`arrow_drop_down`,b.append(w,T);for(let e of S){let t=document.createElement(`button`);t.className=`library__sort-option`,t.type=`button`,t.setAttribute(`role`,`option`),t.textContent=e.label,t.dataset.sort=e.value,e.value===l?(t.classList.add(`library__sort-option--active`),t.setAttribute(`aria-selected`,`true`)):t.setAttribute(`aria-selected`,`false`),x.append(t)}b.addEventListener(`click`,()=>{let e=!x.hidden;x.hidden=e,b.setAttribute(`aria-expanded`,String(!e))});let E=x.querySelectorAll(`.library__sort-option`);for(let e of E)e.addEventListener(`click`,()=>{for(let e of E)e.classList.remove(`library__sort-option--active`),e.setAttribute(`aria-selected`,`false`);e.classList.add(`library__sort-option--active`),e.setAttribute(`aria-selected`,`true`),w.textContent=`Sort by: ${e.textContent}`;let t=e.dataset.sort;t&&(l=t,k=1,Zc({category:c,sort:l,page:k}),j(1),x.hidden=!0,b.setAttribute(`aria-expanded`,`false`))});y.append(b,x);let D=document.createElement(`div`);D.className=`library__games`;let O=document.createElement(`div`),k=e.page,ee=()=>{D.replaceChildren();for(let e=0;e<6;e+=1){let e=document.createElement(`article`);e.className=`library-game-card library-game-card--skeleton`,D.append(e)}},A=()=>{D.replaceChildren();let e=document.createElement(`div`);e.className=`library__empty`,e.innerHTML=`
      <p class="library__empty-title">No games available.</p>
      <p class="library__empty-text">Please check back later.</p>
    `,D.append(e)},te=()=>{D.replaceChildren();let e=document.createElement(`div`);e.className=`library__error`,e.innerHTML=`
      <p class="library__error-title">Failed to load games.</p>
      <button class="library__retry" type="button">
        Retry
      </button>
    `,e.querySelector(`.library__retry`)?.addEventListener(`click`,()=>{j()}),D.append(e)},j=async(e=1)=>{ee();try{let t=await us(e,c,l);if(k=t.meta.page,t.data.length===0){A(),O.replaceChildren(Jc(1,1,()=>{}));return}D.replaceChildren();for(let e of t.data)D.append(Yc({slug:e.slug,title:e.name,imageSrc:el(e.cardImage),category:e.category,description:e.shortDescription,rating:Js(e.rating),likes:qs(e.likesCount),price:e.price}));O.replaceChildren(Jc(t.meta.totalPages,k,e=>{k=e,Zc({category:c,sort:l,page:k}),j(k)}))}catch(e){if(e instanceof ls){D.replaceChildren();let e=document.createElement(`div`);e.className=`library__not-found`,e.innerHTML=`
          <p class="library__not-found-title">Data Not Found</p>
          <p class="library__not-found-text">
            No library data matches the current URL parameters.
          </p>
        `,D.append(e),O.replaceChildren();return}te(),Q({message:`Failed to load games.`,variant:`error`})}};j(k);let M=new URLSearchParams(location.search).get(`game`);if(M&&!document.querySelector(`.game-details-backdrop`)){let e=ic(M,()=>{history.back()});document.body.append(e)}return D.addEventListener(`click`,e=>{let t=e.target;if(!(t instanceof HTMLElement))return;let n=t.closest(`.library-game-card__details`);if(!n)return;let r=n.closest(`.library-game-card`)?.dataset.slug;if(!r)return;Xc(r);let i=ic(r,()=>{history.back()});document.body.append(i)}),o.append(s,y),n.append(r,o,D,O),t.append(n),t.append(yc()),Wo(),t}function nl(){let e=document.createElement(`div`);e.className=`page`,e.append(Xo());let t=document.createElement(`main`);return t.className=`not-found`,t.innerHTML=`
    <section class="not-found__content">
      <p class="not-found__code">404</p>

      <h1 class="not-found__title">
        Page not found
      </h1>

      <p class="not-found__text">
        The page you’re looking for doesn’t exist.
      </p>

      <button
        class="not-found__home"
        type="button"
      >
        Return to Home Page
      </button>
    </section>
  `,t.querySelector(`.not-found__home`)?.addEventListener(`click`,()=>{al(`/`)}),e.append(t),e.append(yc()),e}function rl(){let e=location.pathname.replace(`/minigames/`,`/`)||`/`;return e===`/`||e===`/home`?`home`:e===`/library`?`library`:`not-found`}function il(e){let t=document.querySelector(`#app`);if(t){if(t.replaceChildren(),e===`library`){t.append(tl());return}if(e===`home`){t.append(bc());return}t.append(nl())}}async function al(e){(await Z()).status===`expired`&&Q({message:`Your session has expired. Please log in again.`,variant:`error`});let t=`/minigames/`,n=e===`/`?t:`${t}${e.slice(1)}`;history.pushState({},``,n),il(rl())}var ol=document.createElement(`div`);ol.id=`app`,document.body.append(ol);function sl(){document.querySelector(`.game-details-backdrop`)?.remove(),document.querySelector(`.auth-overlay`)?.remove(),document.body.classList.remove(`dialog-open`),il(rl())}addEventListener(`popstate`,sl),addEventListener(ko,sl);async function cl(){let e=await Z();sl(),e.status===`expired`&&Q({message:`Your session has expired. Please log in again.`,variant:`error`})}cl();async function ll(){document.visibilityState===`visible`&&(await Z()).status===`expired`&&(sl(),Q({message:`Your session has expired. Please log in again.`,variant:`error`}))}document.addEventListener(`visibilitychange`,()=>{ll()});