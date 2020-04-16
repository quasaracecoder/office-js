var oteljs=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";var r,i,o,a,s,u,c,l,f,d;function p(e,t){return{name:e,dataType:r.Boolean,value:t}}function v(e,t){return{name:e,dataType:r.Int64,value:t}}function y(e,t){return{name:e,dataType:r.Double,value:t}}function h(e,t){return{name:e,dataType:r.String,value:t}}function g(e,t){return{name:e,dataType:r.Guid,value:t}}function m(e,t,n){var r=n.map((function(t){return{name:e+"."+t.name,value:t.value,dataType:t.dataType}}));return T(r,e,t),r}function T(e,t,n){e.push(h("zC."+t,n))}n.r(t),n.d(t,"Contracts",(function(){return S})),n.d(t,"ActivityScope",(function(){return $})),n.d(t,"getFieldsForContract",(function(){return m})),n.d(t,"addContractField",(function(){return T})),n.d(t,"DataClassification",(function(){return G})),n.d(t,"makeBooleanDataField",(function(){return p})),n.d(t,"makeInt64DataField",(function(){return v})),n.d(t,"makeDoubleDataField",(function(){return y})),n.d(t,"makeStringDataField",(function(){return h})),n.d(t,"makeGuidDataField",(function(){return g})),n.d(t,"DataFieldType",(function(){return r})),n.d(t,"getEffectiveEventFlags",(function(){return q})),n.d(t,"SamplingPolicy",(function(){return H})),n.d(t,"PersistencePriority",(function(){return B})),n.d(t,"CostPriority",(function(){return R})),n.d(t,"DataCategories",(function(){return J})),n.d(t,"DiagnosticLevel",(function(){return z})),n.d(t,"LogLevel",(function(){return x})),n.d(t,"Category",(function(){return _})),n.d(t,"onNotification",(function(){return D})),n.d(t,"logNotification",(function(){return M})),n.d(t,"logError",(function(){return j})),n.d(t,"SuppressNexus",(function(){return Y})),n.d(t,"SimpleTelemetryLogger",(function(){return ee})),n.d(t,"TelemetryLogger",(function(){return ie})),function(e){e[e.String=0]="String",e[e.Boolean=1]="Boolean",e[e.Int64=2]="Int64",e[e.Double=3]="Double",e[e.Guid=4]="Guid"}(r||(r={})),(i||(i={})).getFields=function(e,t){var n=[];return n.push(v(e+".Code",t.code)),void 0!==t.type&&n.push(h(e+".Type",t.type)),void 0!==t.tag&&n.push(v(e+".Tag",t.tag)),void 0!==t.isExpected&&n.push(p(e+".IsExpected",t.isExpected)),T(n,e,"Office.System.Result"),n},(a=o||(o={})).contractName="Office.System.Activity",a.getFields=function(e){var t=[];return void 0!==e.cV&&t.push(h("Activity.CV",e.cV)),t.push(v("Activity.Duration",e.duration)),t.push(v("Activity.Count",e.count)),t.push(v("Activity.AggMode",e.aggMode)),void 0!==e.success&&t.push(p("Activity.Success",e.success)),void 0!==e.result&&t.push.apply(t,i.getFields("Activity.Result",e.result)),T(t,"Activity",a.contractName),t},(s||(s={})).getFields=function(e,t){var n=[];return void 0!==t.id&&n.push(h(e+".Id",t.id)),void 0!==t.version&&n.push(h(e+".Version",t.version)),void 0!==t.sessionId&&n.push(h(e+".SessionId",t.sessionId)),T(n,e,"Office.System.Host"),n},(u||(u={})).getFields=function(e,t){var n=[];return void 0!==t.alias&&n.push(h(e+".Alias",t.alias)),void 0!==t.primaryIdentityHash&&n.push(h(e+".PrimaryIdentityHash",t.primaryIdentityHash)),void 0!==t.primaryIdentitySpace&&n.push(h(e+".PrimaryIdentitySpace",t.primaryIdentitySpace)),void 0!==t.tenantId&&n.push(h(e+".TenantId",t.tenantId)),void 0!==t.tenantGroup&&n.push(h(e+".TenantGroup",t.tenantGroup)),void 0!==t.isAnonymous&&n.push(p(e+".IsAnonymous",t.isAnonymous)),T(n,e,"Office.System.User"),n},(c||(c={})).getFields=function(e,t){var n=[];return void 0!==t.id&&n.push(h(e+".Id",t.id)),void 0!==t.version&&n.push(h(e+".Version",t.version)),void 0!==t.instanceId&&n.push(h(e+".InstanceId",t.instanceId)),void 0!==t.name&&n.push(h(e+".Name",t.name)),void 0!==t.marketplaceType&&n.push(h(e+".MarketplaceType",t.marketplaceType)),void 0!==t.sessionId&&n.push(h(e+".SessionId",t.sessionId)),void 0!==t.browserToken&&n.push(h(e+".BrowserToken",t.browserToken)),void 0!==t.osfRuntimeVersion&&n.push(h(e+".OsfRuntimeVersion",t.osfRuntimeVersion)),void 0!==t.officeJsVersion&&n.push(h(e+".OfficeJsVersion",t.officeJsVersion)),void 0!==t.hostJsVersion&&n.push(h(e+".HostJsVersion",t.hostJsVersion)),void 0!==t.assetId&&n.push(h(e+".AssetId",t.assetId)),void 0!==t.providerName&&n.push(h(e+".ProviderName",t.providerName)),void 0!==t.type&&n.push(h(e+".Type",t.type)),T(n,e,"Office.System.SDX"),n},(l||(l={})).getFields=function(e,t){var n=[];return void 0!==t.name&&n.push(h(e+".Name",t.name)),void 0!==t.state&&n.push(h(e+".State",t.state)),T(n,e,"Office.System.Funnel"),n},(f||(f={})).getFields=function(e,t){var n=[];return void 0!==t.id&&n.push(v(e+".Id",t.id)),void 0!==t.name&&n.push(h(e+".Name",t.name)),void 0!==t.commandSurface&&n.push(h(e+".CommandSurface",t.commandSurface)),void 0!==t.parentName&&n.push(h(e+".ParentName",t.parentName)),void 0!==t.triggerMethod&&n.push(h(e+".TriggerMethod",t.triggerMethod)),void 0!==t.timeOffsetMs&&n.push(v(e+".TimeOffsetMs",t.timeOffsetMs)),T(n,e,"Office.System.UserAction"),n},function(e){e.getFields=function(e,t){var n=[];return n.push(h(e+".ErrorGroup",t.errorGroup)),n.push(v(e+".Tag",t.tag)),void 0!==t.code&&n.push(v(e+".Code",t.code)),void 0!==t.id&&n.push(v(e+".Id",t.id)),void 0!==t.count&&n.push(v(e+".Count",t.count)),T(n,e,"Office.System.Error"),n}}(d||(d={}));var S,F,b=o,w=i,C=d,E=l,N=s,A=c,I=f,k=u;!function(e){!function(e){!function(e){e.Activity=b,e.Result=w,e.Error=C,e.Funnel=E,e.Host=N,e.SDX=A,e.User=k,e.UserAction=I}(e.System||(e.System={}))}(e.Office||(e.Office={}))}(S||(S={})),function(e){var t,n=0;e.getNext=function(){return void 0===t&&(t=function(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t=[],n=0;n<22;n++)t.push(e.charAt(Math.floor(Math.random()*e.length)));return t.join("")}()),new r(t,++n)},e.getNextChild=function(e){return new r(e.getString(),++e.nextChild)};var r=function(){function e(e,t){this.base=e,this.id=t,this.nextChild=0}return e.prototype.getString=function(){return this.base+"."+this.id},e}();e.CV=r}(F||(F={}));var x,_,O=function(){function e(){this._listeners=[]}return e.prototype.fireEvent=function(e){this._listeners.forEach((function(t){return t(e)}))},e.prototype.addListener=function(e){e&&this._listeners.push(e)},e.prototype.removeListener=function(e){this._listeners=this._listeners.filter((function(t){return t!==e}))},e.prototype.getListenerCount=function(){return this._listeners.length},e}(),P=new O;function D(){return P}function M(e,t,n){P.fireEvent({level:e,category:t,message:n})}function j(e,t,n){M(x.Error,e,(function(){var e=n instanceof Error?n.message:"";return t+": "+e}))}!function(e){e[e.Error=0]="Error",e[e.Warning=1]="Warning",e[e.Info=2]="Info",e[e.Verbose=3]="Verbose"}(x||(x={})),function(e){e[e.Core=0]="Core",e[e.Sink=1]="Sink",e[e.Transport=2]="Transport"}(_||(_={}));var V=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function s(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))},L=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},U=function(){return 1e3*Date.now()};"object"==typeof window.performance&&"now"in window.performance&&(U=function(){return 1e3*Math.floor(window.performance.now())});var G,H,B,R,J,z,W,Z,X,$=function(){function e(e,t,n){this._optionalEventFlags={},this._ended=!1,this._telemetryLogger=e,this._activityName=t,this._cv=n?F.getNextChild(n._cv):F.getNext(),this._dataFields=[],this._success=void 0,this._startTime=U()}return e.createNew=function(t,n){return new e(t,n)},e.prototype.createChildActivity=function(t){return new e(this._telemetryLogger,t,this)},e.prototype.setEventFlags=function(e){this._optionalEventFlags=e},e.prototype.addDataField=function(e){this._dataFields.push(e)},e.prototype.addDataFields=function(e){var t;(t=this._dataFields).push.apply(t,e)},e.prototype.setSuccess=function(e){this._success=e},e.prototype.setResult=function(e,t,n){this._result={code:e,type:t,tag:n}},e.prototype.endNow=function(){if(!this._ended){void 0===this._success&&void 0===this._result&&M(x.Warning,_.Core,(function(){return"Activity does not have success or result set"}));var e=U()-this._startTime;this._ended=!0;var t={duration:e,count:1,aggMode:0,cV:this._cv.getString(),success:this._success,result:this._result};return this._telemetryLogger.sendActivity(this._activityName,t,this._dataFields,this._optionalEventFlags)}M(x.Error,_.Core,(function(){return"Activity has already ended"}))},e.prototype.executeAsync=function(e){return V(this,void 0,void 0,(function(){var t=this;return L(this,(function(n){return[2,e(this).then((function(e){return t.endNow(),e})).catch((function(e){throw t.endNow(),e}))]}))}))},e.prototype.executeSync=function(e){try{var t=e(this);return this.endNow(),t}catch(e){throw this.endNow(),e}},e.prototype.executeChildActivityAsync=function(e,t){return V(this,void 0,void 0,(function(){return L(this,(function(n){return[2,this.createChildActivity(e).executeAsync(t)]}))}))},e.prototype.executeChildActivitySync=function(e,t){return this.createChildActivity(e).executeSync(t)},e}();function q(e){var t={costPriority:R.Normal,samplingPolicy:H.Measure,persistencePriority:B.Normal,dataCategories:J.NotSet,diagnosticLevel:z.FullEvent};return e.eventFlags&&e.eventFlags.dataCategories||M(x.Error,_.Core,(function(){return"Event is missing DataCategories event flag"})),e.eventFlags?(e.eventFlags.costPriority&&(t.costPriority=e.eventFlags.costPriority),e.eventFlags.samplingPolicy&&(t.samplingPolicy=e.eventFlags.samplingPolicy),e.eventFlags.persistencePriority&&(t.persistencePriority=e.eventFlags.persistencePriority),e.eventFlags.dataCategories&&(t.dataCategories=e.eventFlags.dataCategories),e.eventFlags.diagnosticLevel&&(t.diagnosticLevel=e.eventFlags.diagnosticLevel),t):t}!function(e){e[e.EssentialServiceMetadata=1]="EssentialServiceMetadata",e[e.AccountData=2]="AccountData",e[e.SystemMetadata=4]="SystemMetadata",e[e.OrganizationIdentifiableInformation=8]="OrganizationIdentifiableInformation",e[e.EndUserIdentifiableInformation=16]="EndUserIdentifiableInformation",e[e.CustomerContent=32]="CustomerContent",e[e.AccessControl=64]="AccessControl"}(G||(G={})),function(e){e[e.NotSet=0]="NotSet",e[e.Measure=1]="Measure",e[e.Diagnostics=2]="Diagnostics",e[e.CriticalBusinessImpact=191]="CriticalBusinessImpact",e[e.CriticalCensus=192]="CriticalCensus",e[e.CriticalExperimentation=193]="CriticalExperimentation",e[e.CriticalUsage=194]="CriticalUsage"}(H||(H={})),function(e){e[e.NotSet=0]="NotSet",e[e.Normal=1]="Normal",e[e.High=2]="High"}(B||(B={})),function(e){e[e.NotSet=0]="NotSet",e[e.Normal=1]="Normal",e[e.High=2]="High"}(R||(R={})),function(e){e[e.NotSet=0]="NotSet",e[e.SoftwareSetup=1]="SoftwareSetup",e[e.ProductServiceUsage=2]="ProductServiceUsage",e[e.ProductServicePerformance=4]="ProductServicePerformance",e[e.DeviceConfiguration=8]="DeviceConfiguration",e[e.InkingTypingSpeech=16]="InkingTypingSpeech"}(J||(J={})),function(e){e[e.ReservedDoNotUse=0]="ReservedDoNotUse",e[e.BasicEvent=10]="BasicEvent",e[e.FullEvent=100]="FullEvent",e[e.NecessaryServiceDataEvent=110]="NecessaryServiceDataEvent",e[e.AlwaysOnNecessaryServiceDataEvent=120]="AlwaysOnNecessaryServiceDataEvent"}(z||(z={})),function(e){e[e.Aria=0]="Aria",e[e.Nexus=1]="Nexus"}(W||(W={})),function(e){var t={},n={},r={};function i(e){if("object"!=typeof e)throw new Error("tokenTree must be an object");r=function e(t,n){if("object"!=typeof n)return n;for(var r=0,i=Object.keys(n);r<i.length;r++){var o=i[r];o in t&&(t[o],1)?t[o]=e(t[o],n[o]):t[o]=n[o]}return t}(r,e)}function o(e){if(t[e])return t[e];var n=s(e,W.Aria);return"string"==typeof n?(t[e]=n,n):void 0}function a(e){if(n[e])return n[e];var t=s(e,W.Nexus);return"number"==typeof t?(n[e]=t,t):void 0}function s(e,t){var n=e.split("."),i=r,o=void 0;if(i){for(var a=0;a<n.length-1;a++)i[n[a]]&&(i=i[n[a]],t===W.Aria&&"string"==typeof i.ariaTenantToken?o=i.ariaTenantToken:t===W.Nexus&&"number"==typeof i.nexusTenantToken&&(o=i.nexusTenantToken));return o}}e.setTenantToken=function(e,t,n){var r=e.split(".");if(r.length<2||"Office"!==r[0])M(x.Error,_.Core,(function(){return"Invalid namespace: "+e}));else{var o=Object.create(Object.prototype);t&&(o.ariaTenantToken=t),n&&(o.nexusTenantToken=n);var a,s=o;for(a=r.length-1;a>=0;--a){var u=Object.create(Object.prototype);u[r[a]]=s,s=u}i(s)}},e.setTenantTokens=i,e.getTenantTokens=function(e){var t=o(e),n=a(e);if(!n||!t)throw new Error("Could not find tenant token for "+e);return{ariaTenantToken:t,nexusTenantToken:n}},e.getAriaTenantToken=o,e.getNexusTenantToken=a,e.clear=function(){t={},n={},r={}}}(Z||(Z={})),function(e){var t=/^[A-Z][a-zA-Z0-9]*$/,n=/^[a-zA-Z0-9_\.]*$/;function i(e){return void 0!==e&&n.test(e)}function o(e){if(!((t=e.name)&&i(t)&&t.length+5<100))throw new Error("Invalid dataField name");var t;e.dataType===r.Int64&&a(e.value)}function a(e){if("number"!=typeof e||!isFinite(e)||Math.floor(e)!==e||e<-9007199254740991||e>9007199254740991)throw new Error("Invalid integer "+JSON.stringify(e))}e.validateTelemetryEvent=function(e){if(!function(e){if(!e||e.length>98)return!1;var n=e.split("."),r=n[n.length-1];return function(e){return!!e&&e.length>=3&&"Office"===e[0]}(n)&&(i=r,void 0!==i&&t.test(i));var i}(e.eventName))throw new Error("Invalid eventName");if(e.eventContract&&!i(e.eventContract.name))throw new Error("Invalid eventContract");if(null!=e.dataFields)for(var n=0;n<e.dataFields.length;n++)o(e.dataFields[n])},e.validateInt=a}(X||(X={}));var K,Q=function(){return(Q=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},Y=-1,ee=function(){function e(e,t,n){var r,i;this.onSendEvent=new O,this.persistentDataFields=[],this.config=n||{},e?(this.onSendEvent=e.onSendEvent,(r=this.persistentDataFields).push.apply(r,e.persistentDataFields),this.config=Q(Q({},e.getConfig()),this.config)):this.persistentDataFields.push(h("OTelJS.Version","3.1.40")),t&&(i=this.persistentDataFields).push.apply(i,t)}return e.prototype.sendTelemetryEvent=function(e){var t;try{if(0===this.onSendEvent.getListenerCount())return void M(x.Warning,_.Core,(function(){return"No telemetry sinks are attached."}));t=this.cloneEvent(e),this.processTelemetryEvent(t)}catch(e){return void j(_.Core,"SendTelemetryEvent",e)}try{this.onSendEvent.fireEvent(t)}catch(e){}},e.prototype.processTelemetryEvent=function(e){var t;e.telemetryProperties||(e.telemetryProperties=Z.getTenantTokens(e.eventName)),e.dataFields&&this.persistentDataFields&&(t=e.dataFields).push.apply(t,this.persistentDataFields),this.config.disableValidation||X.validateTelemetryEvent(e)},e.prototype.addSink=function(e){this.onSendEvent.addListener((function(t){return e.sendTelemetryEvent(t)}))},e.prototype.setTenantToken=function(e,t,n){Z.setTenantToken(e,t,n)},e.prototype.setTenantTokens=function(e){Z.setTenantTokens(e)},e.prototype.cloneEvent=function(e){var t={eventName:e.eventName,eventFlags:e.eventFlags};return e.telemetryProperties&&(t.telemetryProperties={ariaTenantToken:e.telemetryProperties.ariaTenantToken,nexusTenantToken:e.telemetryProperties.nexusTenantToken}),e.eventContract&&(t.eventContract={name:e.eventContract.name,dataFields:e.eventContract.dataFields.slice()}),t.dataFields=e.dataFields?e.dataFields.slice():[],t},e.prototype.getConfig=function(){return this.config},e}(),te=(K=function(e,t){return(K=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}K(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),ne=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function s(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))},re=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},ie=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return te(t,e),t.prototype.executeActivityAsync=function(e,t){return ne(this,void 0,void 0,(function(){return re(this,(function(n){return[2,this.createNewActivity(e).executeAsync(t)]}))}))},t.prototype.executeActivitySync=function(e,t){return this.createNewActivity(e).executeSync(t)},t.prototype.createNewActivity=function(e){return $.createNew(this,e)},t.prototype.sendActivity=function(e,t,n,r){return this.sendTelemetryEvent({eventName:e,eventContract:{name:S.Office.System.Activity.contractName,dataFields:S.Office.System.Activity.getFields(t)},dataFields:n,eventFlags:r})},t.prototype.sendError=function(e){var t=d.getFields("Error",e.error);return null!=e.dataFields&&t.push.apply(t,e.dataFields),this.sendTelemetryEvent({eventName:e.eventName,dataFields:t,eventFlags:e.eventFlags})},t}(ee)}]);