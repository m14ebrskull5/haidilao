(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 62048 ], {
    99636: function(e, n, i) {
        var t = i(32180), a = i(80503), r = i(69074), c = i(92954), s = i.n(c), o = i(71515), u = i(3594), g = i(85893), p = function() {
            var e = (0, u.Z)(function() {
                s().navigateTo({
                    url: "/pages/settingPageWebview/index?pageType=privacy"
                });
            }, {
                wait: 500,
                trailing: !1
            }), n = e.run;
            return (0, g.jsx)(o.View, {
                children: (0, g.jsx)(r.L, {
                    width: 686,
                    mt: 32,
                    children: (0, g.jsx)(a.H, {
                        title: "隐私政策",
                        clickHandle: n
                    })
                })
            });
        }, l = p, v = {
            navigationBarTitleText: "服务与协议"
        };
        Page((0, t.createPageConfig)(l, "pages/servicesAndAgreements/index", {
            root: {
                cn: []
            }
        }, v || {}));
    }
}, function(e) {
    var n = function(n) {
        return e(e.s = n);
    };
    e.O(0, [ 62107, 11216, 68592 ], function() {
        return n(99636);
    });
    e.O();
} ]);