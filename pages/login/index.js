(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 22003 ], {
    13863: function(e, n, r) {
        var t = r(32180), o = r(57543), i = r(77886), a = r(65712), u = r(71515), c = r(19190), s = r(79919), l = r(87526), d = r(70420), p = r(67294), g = r(35299), h = r(45952), f = r(92954), v = r.n(f), x = r(3594), w = r(82197), _ = r(13336), m = {
            wrap: "index-module__wrap___Dhgnj",
            login_banner: "index-module__login_banner___z0wDi",
            btn: "index-module__btn____P54F",
            login_phone: "index-module__login_phone___c0ZGj"
        }, b = r(85893), Z = function() {
            var e = (0, p.useState)(!1), n = (0, a.Z)(e, 2), r = n[0], t = n[1], Z = (0, p.useRef)(""), k = (0, 
            p.useState)(!1), C = (0, a.Z)(k, 2), j = C[0], N = C[1], y = (0, p.useRef)(""), P = function() {
                var e = (0, i.Z)((0, o.Z)().mark(function e() {
                    var n;
                    return (0, o.Z)().wrap(function(e) {
                        while (1) switch (e.prev = e.next) {
                          case 0:
                            return N(!1), e.next = 3, h.B.getCode();

                          case 3:
                            n = e.sent, Z.current = n, N(!0);

                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }));
                return function() {
                    return e.apply(this, arguments);
                };
            }();
            (0, f.useDidShow)(P);
            var G = function() {
                var e = (0, i.Z)((0, o.Z)().mark(function e(n) {
                    return (0, o.Z)().wrap(function(e) {
                        while (1) switch (e.prev = e.next) {
                          case 0:
                            return g.Gq.showLoading(), e.prev = 1, e.next = 4, h.B.login();

                          case 4:
                            I(), e.next = 10;
                            break;

                          case 7:
                            e.prev = 7, e.t0 = e["catch"](1), console.error("自动登录", e.t0);

                          case 10:
                            g.Gq.hideLoading();

                          case 11:
                          case "end":
                            return e.stop();
                        }
                    }, e, null, [ [ 1, 7 ] ]);
                }));
                return function(n) {
                    return e.apply(this, arguments);
                };
            }(), R = (0, p.useRef)(""), T = function() {
                var e = (0, i.Z)((0, o.Z)().mark(function e() {
                    var n, r, t, i, a, u, c;
                    return (0, o.Z)().wrap(function(e) {
                        while (1) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, (0, g.M4)();

                          case 2:
                            if (t = v().getCurrentPages(), i = t.length - 1, a = t[i - 1 < 0 ? 0 : i - 1], R.current = a.route || "", 
                            u = (null === (n = f.Current.router) || void 0 === n || null === (n = n.params) || void 0 === n ? void 0 : n.backUrl) || "", 
                            c = (null === (r = f.Current.router) || void 0 === r || null === (r = r.params) || void 0 === r ? void 0 : r.autologin) || "", 
                            y.current = decodeURIComponent(u), "true" !== c) {
                                e.next = 12;
                                break;
                            }
                            return e.next = 12, G(u);

                          case 12:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }));
                return function() {
                    return e.apply(this, arguments);
                };
            }();
            (0, f.useReady)(T);
            var B = [ "/pages/index/index", "/pages/allOrder/index", "/pages/member/index", "/pages/my/index" ], I = function() {
                if (y.current) {
                    var e = B.filter(function(e) {
                        return y.current.startsWith(e);
                    });
                    e.length > 0 ? v().reLaunch({
                        url: y.current
                    }) : v().redirectTo({
                        url: y.current
                    });
                } else v().navigateBack();
            }, L = function() {
                var e = (0, i.Z)((0, o.Z)().mark(function e(n) {
                    var r, t, i, a;
                    return (0, o.Z)().wrap(function(e) {
                        while (1) switch (e.prev = e.next) {
                          case 0:
                            if (r = n.detail, t = r.encryptedData, i = r.iv, t && i) {
                                e.next = 3;
                                break;
                            }
                            return e.abrupt("return");

                          case 3:
                            return g.Gq.showLoading(), e.prev = 4, e.next = 7, h.B.loginByWXPhone(t, i, Z.current);

                          case 7:
                            a = e.sent, v().eventCenter.trigger(_.W.LOGIN_IN, R.current), D(a), e.next = 15;
                            break;

                          case 12:
                            e.prev = 12, e.t0 = e["catch"](4), P();

                          case 15:
                            g.Gq.hideLoading();

                          case 16:
                          case "end":
                            return e.stop();
                        }
                    }, e, null, [ [ 4, 12 ] ]);
                }));
                return function(n) {
                    return e.apply(this, arguments);
                };
            }(), U = (0, x.Z)(function() {
                v().navigateTo({
                    url: "/pages/loginPhone/index?backUrl=" + encodeURIComponent(y.current) + "&curUrl=" + encodeURIComponent(R.current)
                });
            }, {
                wait: 500,
                trailing: !1
            }), q = U.run, D = function(e) {
                null !== e && void 0 !== e && e.isNotice && null !== e && void 0 !== e && e.promptMsg ? v().showModal({
                    confirmText: "确认",
                    confirmColor: "#000000",
                    showCancel: !1,
                    content: null === e || void 0 === e ? void 0 : e.promptMsg,
                    success: function() {
                        I();
                    }
                }) : I();
            };
            return (0, b.jsxs)(u.View, {
                className: m.wrap,
                children: [ (0, b.jsx)(u.Image, {
                    className: m.login_banner,
                    src: c.ZPm.login_page_banner
                }), (0, b.jsx)(s.d, {
                    isAgreen: r,
                    onChange: function(e) {
                        return t(e);
                    }
                }), (0, b.jsx)(l._N, {
                    width: 566,
                    height: 88,
                    backgroundColor: "#F33429",
                    bold: !0,
                    className: m.btn,
                    openType: r && j ? "getPhoneNumber" : void 0,
                    onClick: function() {
                        r || g.Gq.showToast("请阅读并同意相关条例及协议");
                    },
                    onGetPhoneNumber: L,
                    children: "手机号快捷登录"
                }), (0, b.jsxs)(u.View, {
                    className: m.login_phone,
                    children: [ (0, b.jsx)(u.View, {
                        onClick: function() {
                            q();
                        },
                        children: "输入手机号登录/注册"
                    }), (0, b.jsx)(d.R, {}) ]
                }), (0, b.jsx)(w.g, {}) ]
            });
        }, k = Z, C = {
            navigationBarTitleText: "海底捞"
        };
        Page((0, t.createPageConfig)(k, "pages/login/index", {
            root: {
                cn: []
            }
        }, C || {}));
    }
}, function(e) {
    var n = function(n) {
        return e(e.s = n);
    };
    e.O(0, [ 62107, 11216, 68592 ], function() {
        return n(13863);
    });
    e.O();
} ]);