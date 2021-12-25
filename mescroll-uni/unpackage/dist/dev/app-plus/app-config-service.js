
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/base/list-msg","pages/base/list-news","pages/base/list-products","pages/base/mescroll-options","pages/base/sticky","pages/base/sticky-data","pages/base/sticky-scroll","pages/base/sticky-scroll-data","pages/base/sticky-uni","pages/base/mescroll-comp","pages/base/mescroll-one","pages/base/mescroll-more","pages/base/list-search","pages/base/mescroll-uni-part","pages/base/mescroll-body-part","pages/base/mescroll-native","pages/base/mescroll-uni","pages/intermediate/mescroll-swiper","pages/intermediate/beibei","pages/intermediate/xinlang"],"window":{"backgroundColorTop":"#FFFFFF","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#fff"},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"mescroll_uni","compilerVersion":"3.2.10","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true},"window":{"navigationBarTitleText":"mescroll"}},{"path":"/pages/base/list-msg","meta":{},"window":{"navigationBarTitleText":"list-msg"}},{"path":"/pages/base/list-news","meta":{},"window":{"navigationBarTitleText":"list-news"}},{"path":"/pages/base/list-products","meta":{},"window":{"navigationBarTitleText":"list-products"}},{"path":"/pages/base/mescroll-options","meta":{},"window":{"navigationBarTitleText":"mescroll-options","backgroundColorTop":"#E75A7C"}},{"path":"/pages/base/sticky","meta":{},"window":{"navigationBarTitleText":"sticky吸顶悬浮 (切换刷新列表,原生css实现)"}},{"path":"/pages/base/sticky-data","meta":{},"window":{"navigationBarTitleText":"sticky吸顶悬浮 (缓存列表数据,原生css实现)"}},{"path":"/pages/base/sticky-scroll","meta":{},"window":{"navigationBarTitleText":"sticky吸顶悬浮 (切换刷新列表,监听滚动实现)"}},{"path":"/pages/base/sticky-scroll-data","meta":{},"window":{"navigationBarTitleText":"sticky吸顶悬浮 (缓存列表数据,监听滚动实现)"}},{"path":"/pages/base/sticky-uni","meta":{},"window":{"navigationBarTitleText":"sticky吸顶悬浮 (mescroll-uni使用sticky)"}},{"path":"/pages/base/mescroll-comp","meta":{},"window":{"navigationBarTitleText":"mescroll-body写在子组件"}},{"path":"/pages/base/mescroll-one","meta":{},"window":{"navigationBarTitleText":"mescroll-one"}},{"path":"/pages/base/mescroll-more","meta":{},"window":{"navigationBarTitleText":"mescroll-more"}},{"path":"/pages/base/list-search","meta":{},"window":{"navigationBarTitleText":"list-search"}},{"path":"/pages/base/mescroll-uni-part","meta":{},"window":{"navigationBarTitleText":"mescroll-uni-part","disableScroll":true,"bounce":"none"}},{"path":"/pages/base/mescroll-body-part","meta":{},"window":{"navigationBarTitleText":"mescroll-body-part"}},{"path":"/pages/base/mescroll-native","meta":{},"window":{"navigationBarTitleText":"mescroll-native","enablePullDownRefresh":true}},{"path":"/pages/base/mescroll-uni","meta":{},"window":{"navigationBarTitleText":"mescroll-uni","disableScroll":true,"bounce":"none"}},{"path":"/pages/intermediate/mescroll-swiper","meta":{},"window":{"navigationBarTitleText":"轮播菜单导航 mescroll-swiper.vue","disableScroll":true,"bounce":"none"}},{"path":"/pages/intermediate/beibei","meta":{},"window":{"navigationBarTitleText":"贝贝 mescroll-beibei.vue"}},{"path":"/pages/intermediate/xinlang","meta":{},"window":{"navigationBarTitleText":"新浪微博 mescroll-xinlang.vue"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});