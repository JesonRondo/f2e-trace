/**
 * @filename  f2e-trace.js
 * @desc      f2e 错误上报
 * @author    longzhou (buji)
 * @blog      http://vicbeta.com
 * @email     pancnlz@gmail.com
 * @create    2013-11-13
 * @update    2013-11-13
 * @version   1.0.0
 */
var Trace = Trace || {};

Trace = {
    _interface: '/mtalk/log/jserrorlog?log=',

    beacon: function(log) {
        var i = new Image();
        i.src = this._interface + encodeURIComponent(log);
        alert(log);
    },

    log: function(info) {
        var msgs = [], p;

        for (p in info) {
            if (info.hasOwnProperty(p)) msgs.push(p + ': ' + info[p]);
        }
        this.beacon(msgs.join(' | '));
    }
};

window.onerror = function(msg, url, line) {
    Trace.log({msg: msg, url: url, line: line, type: 'javascript error'});
};
