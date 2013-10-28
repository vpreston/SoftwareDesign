function dv_rolloutManager(handlersDefsArray, baseHandler) {
    this.handle = function () {
        var errorsArr = [];

        var handler = chooseEvaluationHandler(handlersDefsArray);
        if (handler) {
            var errorObj = handleSpecificHandler(handler);
            if (errorObj == null)
                return errorsArr;
            else {
                handler.onFailure();
                errorsArr.push(errorObj);
            }
        }

        var errorObjHandler = handleSpecificHandler(baseHandler);
        if (errorObjHandler) {
            errorObjHandler['dvp_isLostImp'] = 1;
            errorsArr.push(errorObjHandler);
        }
        return errorsArr;
    }

    function handleSpecificHandler(handler) {
        var url;
        var errorObj = null;

        try {
            url = handler.createRequest();
            if (url) {
                url += '&' + handler.getVersionParamName() + '=' + handler.getVersion();
                if (!handler.sendRequest(url))
                    errorObj = createAndGetError('sendRequest failed.', url, handler.getVersion(), handler.getVersionParamName());
            }
            else
                errorObj = createAndGetError('createRequest failed.', url, handler.getVersion(), handler.getVersionParamName());
        }
        catch (e) {
            errorObj = createAndGetError(e, url, handler.getVersion(), handler.getVersionParamName());
        }

        return errorObj;
    }

    function createAndGetError(error, url, ver, versionParamName) {
        var errorObj = {};
        errorObj[versionParamName] = ver;
        errorObj['dvp_jsErrMsg'] = encodeURIComponent(error);
        if (url)
            errorObj['dvp_jsErrUrl'] = url;
        return errorObj;
    }

    function chooseEvaluationHandler(handlersArray) {
        var rand = Math.random() * 100;
        for (var i = 0; i < handlersArray.length; i++) {
            if (rand >= handlersArray[i].minRate && rand < handlersArray[i].maxRate) {
                if (handlersArray[i].handler.isApplicable())
                    return handlersArray[i].handler;
                else
                    break;
            }
        }
        return null;
    }    
}

function dv_GetParam(url, name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(url);
    if (results == null)
        return null;
    else
        return results[1];
}

function dv_SendErrorImp(serverUrl, errorsArr) {

    for (var j = 0; j < errorsArr.length; j++) {
        var errorQueryString = '';
        var errorObj = errorsArr[j];
        for (key in errorObj) {
            if (errorObj.hasOwnProperty(key)) {
                if (key.indexOf('dvp_jsErrUrl') == -1) {
                    errorQueryString += '&' + key + '=' + errorObj[key];
                }
                else {
                    var params = ['ctx', 'cmp', 'plc', 'sid'];
                    for (var i = 0; i < params.length; i++) {
                        var pvalue = dv_GetParam(errorObj[key], params[i]);
                        if (pvalue) {
                            errorQueryString += '&dvp_js' + params[i] + '=' + pvalue;
                        }
                    }
                }
            }
        }

        var errorImp = window.location.protocol + '//' + serverUrl + errorQueryString;        
        dv_sendRequest(errorImp);
    }
}

function dv_sendRequest(url) {
    document.write('<scr' + 'ipt language="javascript" src="' + url + '"></scr' + 'ipt>');
}

function dv_baseHandler(){function n(c,b,d,a,e){var f="__verify_callback_"+c.rand;window[f]=function(a){document.write(1!=a?c.tagsrc:c.altsrc)};void 0==c.dvregion&&(c.dvregion=0);var g="http:",h="0";"https"==window.location.toString().match("^https")&&(g="https:",h="1");try{for(var i=d,j=0;10>j&&i!=window.top;)j++,i=i.parent;d.depth=j;var p=r(d),k="&aUrl="+encodeURIComponent(p.url),l="&aUrlD="+p.depth,q=d.depth+a;e&&d.depth--}catch(n){l=k=q=d.depth=""}d=g+"//rtb"+c.dvregion+".doubleverify.com/rtb.ashx/verifyc?"+
c.dvparams+"&num=5&srcurlD="+d.depth+"&callback="+f+"&ssl="+h+"&refD="+q;b="dv_url="+encodeURIComponent(b);if((a=window[m("=@42E:@?")][m("2?46DE@C~C:8:?D")])&&0<a.length){e=[];e[0]=window.location.protocol+"//"+window.location.hostname;for(f=0;f<a.length;f++)e[f+1]=a[f];a=e.reverse().join(",")}else a=null;a&&(b+="&ancChain="+encodeURIComponent(a));if(!1==/MSIE (\d+\.\d+);/.test(navigator.userAgent)||7<new Number(RegExp.$1)||2E3>=k.length+l.length+d.length)d+=l,b+=k;return d+"&eparams="+encodeURIComponent(m(b))}
function r(c){try{if(1>=c.depth)return{url:"",depth:""};var b,d=[];d.push({win:window.top,depth:0});for(var a,e=1,f=0;0<e&&100>f;){try{if(f++,a=d.shift(),e--,0<a.win.location.toString().length&&a.win!=c)return 0==a.win.document.referrer.length||0==a.depth?{url:a.win.location,depth:a.depth}:{url:a.win.document.referrer,depth:a.depth-1}}catch(g){}b=a.win.frames.length;for(var h=0;h<b;h++)d.push({win:a.win.frames[h],depth:a.depth+1}),e++}return{url:"",depth:""}}catch(i){return{url:"",depth:""}}}function m(c){new String;
var b=new String,d,a,e;for(d=0;d<c.length;d++)e=c.charAt(d),a="!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~".indexOf(e),0<=a&&(e="!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~".charAt((a+47)%94)),b+=e;return b}this.createRequest=function(){var c=!1,b=window,d=0,a=!1;try{for(dv_i=0;10>=dv_i;dv_i++)if(null!=b.parent&&b.parent!=b)if(0<b.parent.location.toString().length)b=b.parent,d++,c=!0;else{c=!1;
break}else{0==dv_i&&(c=!0);break}}catch(e){c=!1}0==b.document.referrer.length?c=b.location:c?c=b.location:(c=b.document.referrer,a=!0);var f=document.getElementsByTagName("script");for(dv_i in f){var g=f[dv_i].src;if(g=g&&g.match(/bsredirect5(_plain)?\.js\?callback=/)?g.replace(/^.+?callback=(.+?)(&|$)/,"$1"):null)if((this.redirect=eval(g+"()"))&&!this.redirect.done)return this.redirect.done=!0,n(this.redirect,c,b,d,a)}};this.isApplicable=function(){return!0};this.onFailure=function(){};this.sendRequest=
function(c){dv_sendRequest(c);return!0};this.getVersionParamName=function(){return"ver"};this.getVersion=function(){return"4"}};


function dv_bs5_main(dv_baseHandlerIns, dv_handlersDefs) {

    this.baseHandlerIns = dv_baseHandlerIns;
    this.handlersDefs = dv_handlersDefs;

    this.exec = function() {
        try{
            window._dv_win = (window._dv_win || window);
            var errorsArr = (new dv_rolloutManager(this.handlersDefs, this.baseHandlerIns)).handle();
            if (errorsArr && errorsArr.length > 0)
                dv_SendErrorImp('rtb0.doubleverify.com/rtb.ashx/verifyc?ctx=818052&cmp=1619415', errorsArr);
        }
        catch(e){
           try{
                dv_SendErrorImp('rtb0.doubleverify.com/rtb.ashx/verifyc?ctx=818052&cmp=1619415&ver=0&dvp_isLostImp=1', { dvp_jsErrMsg: encodeURIComponent(e) });   
           }catch(e){}
        }
    }
}

try {
    window._dv_win = window;
    var dv_baseHandlerIns = new dv_baseHandler();
	

    var dv_handlersDefs = [];
    (new dv_bs5_main(dv_baseHandlerIns, dv_handlersDefs)).exec();
} catch (e) { }
