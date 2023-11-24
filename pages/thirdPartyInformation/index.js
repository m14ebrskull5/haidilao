(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 76404 ], {
    55795: function(n, e, i) {
        var t = i(32180), a = i(80503), r = i(69074), c = i(71515), g = i(92954), o = i.n(g), s = i(3594), u = i(85893), l = function() {
            var n = (0, s.Z)(function() {
                o().navigateTo({
                    url: "/pages/settingPageWebview/index?pageType=partnerShare"
                });
            }, {
                wait: 500,
                trailing: !1
            }), e = n.run, i = (0, s.Z)(function() {
                o().navigateTo({
                    url: "/pages/settingPageWebview/index?pageType=thirdSDK"
                });
            }, {
                wait: 500,
                trailing: !1
            }), t = i.run;
            return (0, u.jsx)(c.View, {
                children: (0, u.jsxs)(r.L, {
                    width: 686,
                    mt: 32,
                    children: [ (0, u.jsx)(a.H, {
                        title: "第三方SDK列表",
                        clickHandle: t
                    }), (0, u.jsx)(a.H, {
                        title: "合作商共享清单",
                        clickHandle: e
                    }) ]
                })
            });
        }, p = l, d = {
            navigationBarTitleText: "第三方信息共享清单"
        };
        Page((0, t.createPageConfig)(p, "pages/thirdPartyInformation/index", {
            root: {
                cn: []
            }
        }, d || {}));
    }
}, function(n) {
    var e = function(e) {
        return n(n.s = e);
    };
    n.O(0, [ 62107, 11216, 68592 ], function() {
        return e(55795);
    });
    n.O();
} ]);