/*
    Avoid `console` errors in browsers that lack a console.
 */
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/* 
 * onScreen.js
 * Checks if matched elements are inside the viewport.
 *
 * Copyright by Silvestre Herrera, 2013 Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 */
(function(g){g.fn.onScreen=function(t){var a=g.extend({container:window,direction:"vertical",toggleClass:!0,doIn:null,doOut:null,tolerance:0,lazyAttr:null,lazyPlaceholder:"data:image/gif;base64,R0lGODlhEAAFAIAAAP///////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCQAAACwAAAAAEAAFAAACCIyPqcvtD00BACH5BAkJAAIALAAAAAAQAAUAgfT29Pz6/P///wAAAAIQTGCiywKPmjxUNhjtMlWrAgAh+QQJCQAFACwAAAAAEAAFAIK8urzc2tzEwsS8vrzc3tz///8AAAAAAAADFEiyUf6wCEBHvLPemIHdTzCMDegkACH5BAkJAAYALAAAAAAQAAUAgoSChLS2tIyKjLy+vIyOjMTCxP///wAAAAMUWCQ09jAaAiqQmFosdeXRUAkBCCUAIfkECQkACAAsAAAAABAABQCDvLq83N7c3Nrc9Pb0xMLE/P78vL68/Pr8////AAAAAAAAAAAAAAAAAAAAAAAAAAAABCEwkCnKGbegvQn4RjGMx8F1HxBi5Il4oEiap2DcVYlpZwQAIfkECQkACAAsAAAAABAABQCDvLq85OLkxMLE9Pb0vL685ObkxMbE/Pr8////AAAAAAAAAAAAAAAAAAAAAAAAAAAABCDwnCGHEcIMxPn4VAGMQNBx0zQEZHkiYNiap5RaBKG9EQAh+QQJCQAJACwAAAAAEAAFAIOEgoTMysyMjozs6uyUlpSMiozMzsyUkpTs7uz///8AAAAAAAAAAAAAAAAAAAAAAAAEGTBJiYgoBM09DfhAwHEeKI4dGKLTIHzCwEUAIfkECQkACAAsAAAAABAABQCDvLq85OLkxMLE9Pb0vL685ObkxMbE/Pr8////AAAAAAAAAAAAAAAAAAAAAAAAAAAABCAQSTmMEGaco8+UBSACwWBqHxKOJYd+q1iaXFoRRMbtEQAh+QQJCQAIACwAAAAAEAAFAIO8urzc3tzc2tz09vTEwsT8/vy8vrz8+vz///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAEIhBJWc6wJZAtJh3gcRBAaXiIZV2kiRbgNZbA6VXiUAhGL0QAIfkECQkABgAsAAAAABAABQCChIKEtLa0jIqMvL68jI6MxMLE////AAAAAxRoumxFgoxGCbiANos145e3DJcQJAAh+QQJCQAFACwAAAAAEAAFAIK8urzc2tzEwsS8vrzc3tz///8AAAAAAAADFFi6XCQwtCmAHbPVm9kGWKcEQxkkACH5BAkJAAIALAAAAAAQAAUAgfT29Pz6/P///wAAAAIRlI8SAZsPYnuJMUCRnNksWwAAOw==",
debug:!1},t);return this.each(function(){function f(){a.container!=window&&"static"==g(a.container).css("position")&&g(a.container).css("position","relative");h=g(a.container);m=h.height();n=h.width();p=h.scrollTop()+m;q=h.scrollLeft()+n;k=b.outerHeight(!0);l=b.outerWidth(!0);a.container==window?(d=b.offset().top,e=b.offset().left):(d=b.position().top,e=b.position().left);r=h.scrollTop();s=h.scrollLeft();a.debug&&(console.log("Container: "+a.container+"\nWidth: "+m+"\nHeight: "+n+"\nBottom: "+p+"\nRight: "+
q),console.log("Matched element: "+("undefined"!=typeof b.attr("class")?b.prop("tagName").toLowerCase()+"."+b.attr("class"):b.prop("tagName").toLowerCase())+"\nLeft: "+e+"\nTop: "+d+"\nWidth: "+l+"\nHeight: "+k));var f;f="vertical"==a.direction?a.container==window?d<p-a.tolerance&&r<d+k-a.tolerance&&!c:d<m-a.tolerance&&d>-k+a.tolerance&&!c:"horizontal"==a.direction?a.container==window?e<q-a.tolerance&&s<e+l-a.tolerance&&!c:e<n-a.tolerance&&e>-l+a.tolerance&&!c:void 0;f?(a.toggleClass&&b.addClass("onScreen"),
"function"==typeof a.doIn&&a.doIn.call(b[0]),a.lazyAttr&&"IMG"===b.prop("tagName")&&(lazyImg=b.attr(a.lazyAttr),b.css({background:"url("+a.lazyPlaceholder+") center center no-repeat","min-height":"5px","min-width":"16px"}),b.prop("src",lazyImg)),c=!0):(f="vertical"==a.direction?a.container==window?d+k<r&&c||d>p&&c:d>m-a.tolerance&&c||-k+a.tolerance>d&&c:"horizontal"==a.direction?a.container==window?e+l<s&&c||e>q&&c:e>n-a.tolerance&&c||-l+a.tolerance>e&&c:void 0,f&&(a.toggleClass&&b.removeClass("onScreen"),
"function"==typeof a.doOut&&a.doOut.call(b[0]),c=!1))}var c=!1,r,s,b=g(this),h,m,n,p,q,k,l,d,e;f();g(a.container).on("scroll",f).on("resize",f).on("load",f)})}})(jQuery);