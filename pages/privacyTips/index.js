(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 62758 ], {
    82110: function(e, n, i) {
        var r = i(32180), a = i(65712), t = i(23068), o = i(32537), s = i(71515), c = i(92954), l = i.n(c), _ = i(35299), u = i(67294), d = {
            yinsi_alert_con: "index-module__yinsi_alert_con___y4sGM",
            yinsi_alert_href: "index-module__yinsi_alert_href___DtOfo",
            yinsi_alert_bold: "index-module__yinsi_alert_bold___v1Fik",
            confirm: "index-module__confirm___wSann"
        }, x = i(85893), f = function(e) {
            var n = function() {
                t && (l().setStorageSync(o.a.IS_AGREE_PRIVACY, !0), l().reLaunch({
                    url: e.url
                }));
            }, i = (0, u.useState)(!1), r = (0, a.Z)(i, 2), t = r[0], f = r[1], h = (0, u.useState)(!1), g = (0, 
            a.Z)(h, 2), m = g[0], y = g[1];
            return (0, c.useLoad)(function() {
                l().getSystemInfo().then(function(e) {
                    var n = (0, _.yC)(e.SDKVersion || "0", "2.32.3");
                    y(n >= 0), f(!0);
                });
            }), m ? (0, x.jsx)(s.Button, {
                className: d.confirm,
                hoverClass: "none",
                openType: "agreePrivacyAuthorization",
                onAgreePrivacyAuthorization: n,
                children: "同意并继续"
            }) : (0, x.jsx)(s.Button, {
                className: d.confirm,
                hoverClass: "none",
                onClick: n,
                children: "同意并继续"
            });
        }, h = function() {
            var e;
            return (0, x.jsx)(s.View, {
                children: (0, x.jsx)(t.Y, {
                    tittle: "法律条款及隐私保护提示",
                    confirmText: (0, x.jsx)(f, {
                        url: decodeURIComponent((null === (e = c.Current.router) || void 0 === e ? void 0 : e.params.fromUrl) || "") || "/pages/index/index"
                    }),
                    cancelText: (0, x.jsx)(s.View, {
                        onClick: function() {
                            l().setStorageSync(o.a.IS_AGREE_PRIVACY, !1), l().exitMiniProgram();
                        },
                        children: "不同意"
                    }),
                    isOpened: !0,
                    children: (0, x.jsxs)(s.View, {
                        className: d.yinsi_alert_con,
                        children: [ (0, x.jsx)(s.View, {
                            children: "您在使用海底捞产品/服务前，请仔细阅读相关用户条款、平台规则及隐私政策，当您点击同意，即表示您已经理解并同意该条款，该条款将构成对您具有法律约束力的文件。该隐私政策主要包含以下内容：个人信息（包括手机号码、位置信息等）的收集使用规则及设备权限的调用情况。您确认本弹窗并不会直接开启相关权限，我们会就具体权限开启另行征得您的同意。请阅读并同意法律条款与个人信息保护政策。"
                        }), (0, x.jsxs)(s.View, {
                            children: [ "您可以阅读完整版", (0, x.jsx)(s.Text, {
                                className: d.yinsi_alert_href,
                                onClick: function() {
                                    l().navigateTo({
                                        url: "/staticPagePackage/pages/agreement/index"
                                    });
                                },
                                children: "用户许可使用协议"
                            }), " ", "和", (0, x.jsx)(s.View, {
                                className: d.yinsi_alert_href,
                                onClick: function() {
                                    l().navigateTo({
                                        url: "/pages/settingPageWebview/index?pageType=privacy"
                                    });
                                },
                                children: "隐私政策"
                            }) ]
                        }), (0, x.jsxs)(s.View, {
                            children: [ "您可以通过", (0, x.jsx)(s.Text, {
                                className: d.yinsi_alert_bold,
                                children: "“我的-设置--服务与协议-隐私政策”"
                            }), " 再次查看隐私政策" ]
                        }) ]
                    })
                })
            });
        }, g = h, m = {
            navigationStyle: "custom"
        };
        Page((0, r.createPageConfig)(g, "pages/privacyTips/index", {
            root: {
                cn: []
            }
        }, m || {}));
    }
}, function(e) {
    var n = function(n) {
        return e(e.s = n);
    };
    e.O(0, [ 62107, 11216, 68592 ], function() {
        return n(82110);
    });
    e.O();
} ]);