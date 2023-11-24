(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 6369 ], {
    7971: function(n, e, i) {
        var t = i(32180), a = i(80503), r = i(69074), c = i(71515), g = i(3594), l = i(92954), s = i.n(l), o = i(85893), u = function() {
            var n = (0, g.Z)(function() {
                s().navigateTo({
                    url: "/pages/accountManagement/index"
                });
            }, {
                wait: 500,
                trailing: !1
            }), e = n.run, i = (0, g.Z)(function() {
                s().navigateTo({
                    url: "/pages/servicesAndAgreements/index"
                });
            }, {
                wait: 500,
                trailing: !1
            }), t = i.run, l = (0, g.Z)(function() {
                s().navigateTo({
                    url: "/pages/thirdPartyInformation/index"
                });
            }, {
                wait: 500,
                trailing: !1
            }), u = l.run, p = (0, g.Z)(function() {
                s().navigateTo({
                    url: "/pages/settingPageWebview/index?pageType=personalInfo"
                });
            }, {
                wait: 500,
                trailing: !1
            }), d = p.run, x = (0, g.Z)(function() {
                s().navigateTo({
                    url: "/pages/settingPageWebview/index?pageType=privacyZY"
                });
            }, {
                wait: 500,
                trailing: !1
            }), f = x.run;
            return (0, o.jsx)(c.View, {
                children: (0, o.jsxs)(r.L, {
                    width: 686,
                    mt: 32,
                    children: [ (0, o.jsx)(a.H, {
                        title: "账号与个人信息管理",
                        clickHandle: e
                    }), (0, o.jsx)(a.H, {
                        title: "服务与协议",
                        clickHandle: t
                    }), (0, o.jsx)(a.H, {
                        title: "个人信息收集清单",
                        clickHandle: d
                    }), (0, o.jsx)(a.H, {
                        title: "第三方信息共享清单",
                        clickHandle: u
                    }), (0, o.jsx)(a.H, {
                        title: "隐私政策摘要",
                        clickHandle: f
                    }) ]
                })
            });
        }, p = u, d = {
            navigationBarTitleText: "设置"
        };
        Page((0, t.createPageConfig)(p, "pages/settingPage/index", {
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
        return e(7971);
    });
    n.O();
} ]);