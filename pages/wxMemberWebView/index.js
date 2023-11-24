(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 18328 ], {
    58021: function(e, n, t) {
        var r = t(32180), a = t(65712), o = t(71515), i = t(13066), u = t(27484), s = t.n(u), c = t(67294), l = t(92954), v = t.n(l), d = t(85893), p = s()().format("YYYYMMDD"), f = "random=".concat(p), g = function() {
            var e = (0, c.useState)(""), n = (0, a.Z)(e, 2), t = n[0], r = n[1];
            return (0, l.useReady)(function() {
                var e, n, t, a, o = null === (e = v().getCurrentInstance().router) || void 0 === e ? void 0 : e.params.type, u = null === (n = v().getCurrentInstance().router) || void 0 === n ? void 0 : n.params.id, s = null === (t = v().getCurrentInstance().router) || void 0 === t ? void 0 : t.params.level, c = null === (a = v().getCurrentInstance().router) || void 0 === a ? void 0 : a.params.url;
                r(c ? decodeURIComponent(c) : "yinsi" === o ? i.HA + "" : "argeement" === o ? i.O$ + "?" + f : "help" === o ? i.mK + "?" + f : "notice" === o ? i.Xs + "?" + f : "faq" === o ? i.Z0 + "&" + f : "level" === o ? i.DP + "?" + f : "coin" === o ? i.XY + "?" + f : "ship" === o ? i.hf + "/" + u + "?" + f + "&level=" + s : i.Cu + "&" + f);
            }), (0, d.jsx)(o.WebView, {
                src: t
            });
        }, m = g, w = {
            navigationBarTitleText: "海底捞",
            navigationStyle: "default",
            disableScroll: !1
        };
        Page((0, r.createPageConfig)(m, "pages/wxMemberWebView/index", {
            root: {
                cn: []
            }
        }, w || {}));
    }
}, function(e) {
    var n = function(n) {
        return e(e.s = n);
    };
    e.O(0, [ 62107, 11216, 68592 ], function() {
        return n(58021);
    });
    e.O();
} ]);