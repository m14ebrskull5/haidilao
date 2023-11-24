(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 32867 ], {
    30381: function(n, t, e) {
        var i = e(32180), a = e(80503), c = e(69074), r = e(71515), o = e(3594), u = e(92954), s = e.n(u), g = e(47007), l = e(35299), f = e(85893), x = function() {
            var n = (0, g.v9)(function(n) {
                return n.user.isLogin;
            }), t = (0, o.Z)(function() {
                n ? s().navigateTo({
                    url: "/pages/accountCancellation/index"
                }) : (0, l.R9)();
            }, {
                wait: 500,
                trailing: !1
            }), e = t.run;
            return (0, f.jsx)(r.View, {
                children: (0, f.jsx)(c.L, {
                    width: 686,
                    mt: 32,
                    children: (0, f.jsx)(a.H, {
                        title: "账号注销",
                        clickHandle: e
                    })
                })
            });
        }, p = x, w = {
            navigationBarTitleText: "账号与个人信息管理"
        };
        Page((0, i.createPageConfig)(p, "pages/accountManagement/index", {
            root: {
                cn: []
            }
        }, w || {}));
    }
}, function(n) {
    var t = function(t) {
        return n(n.s = t);
    };
    n.O(0, [ 62107, 11216, 68592 ], function() {
        return t(30381);
    });
    n.O();
} ]);