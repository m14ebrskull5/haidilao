(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 88107 ], {
    23470: function(e, n, t) {
        var i = t(32180), a = t(3701), o = t(57543), c = t(77886), l = t(65712), r = t(19190), s = t(71515), u = t(94184), _ = t.n(u), d = t(70420), p = t(87526), h = t(2418), m = t(67294), x = t(40849), v = t(35299), w = t(92954), f = t.n(w), g = t(3594), b = t(83044), C = {
            main_wrap: "index-module__main_wrap___mFVJH",
            icon: "index-module__icon___wsl8u",
            phone_code: "index-module__phone_code___gHfI8",
            line_item: "index-module__line_item___k8vny",
            line_title: "index-module__line_title___mZsU4",
            phone_num: "index-module__phone_num___Rv10W",
            code: "index-module__code___Osb3N",
            code_timer: "index-module__code_timer___NHVyJ",
            gray: "index-module__gray___e1TaE",
            btn_wrap: "index-module__btn_wrap___w7_f6",
            btn: "index-module__btn___SVmyA",
            unbind_ipt_placeholder: "index-module__unbind_ipt_placeholder___yvtVL"
        }, Z = t(85893), j = function() {
            var e = (0, m.useState)(0), n = (0, l.Z)(e, 2), t = n[0], i = n[1], u = (0, b.Z)(""), j = (0, 
            l.Z)(u, 3), k = j[0], N = j[1], V = j[2], y = (0, b.Z)(""), I = (0, l.Z)(y, 3), T = I[0], F = I[1], G = I[2], J = (0, 
            g.Z)(function() {
                var e, n;
                if (!(t > 0)) {
                    var i = null === (e = w.Current.page) || void 0 === e || null === (n = e.selectComponent) || void 0 === n ? void 0 : n.call(e, "#captcha");
                    null === i || void 0 === i || i.show();
                }
            }, {
                wait: 1e3,
                leading: !1
            }), L = J.run, q = function(e) {
                console.log(e);
                var n = e.detail.ticket;
                n && x.ZP.sendMsg(G() || "", n, h.rk).then(function(e) {
                    i(59);
                }).catch(function(e) {
                    v.Gq.showToast(e && e.msg || "获取验证码失败");
                });
            }, B = (0, m.useRef)(0);
            (0, m.useEffect)(function() {
                return B.current = setInterval(function() {
                    console.log("timer"), t > 0 ? i(function(e) {
                        return --e;
                    }) : clearInterval(B.current);
                }, 1e3), function() {
                    clearInterval(B.current);
                };
            }, [ t ]);
            var E = function(e) {
                console.error("图形验证码error", e);
            }, H = (0, g.Z)((0, c.Z)((0, o.Z)().mark(function e() {
                var n, t;
                return (0, o.Z)().wrap(function(e) {
                    while (1) switch (e.prev = e.next) {
                      case 0:
                        if (!((null === (n = G()) || void 0 === n ? void 0 : n.length) < 11 || (null === (t = V()) || void 0 === t ? void 0 : t.length) < 6)) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return");

                      case 2:
                        f().showModal({
                            confirmText: "立即解绑",
                            confirmColor: "#F33429",
                            cancelText: "取消",
                            cancelColor: "#333333",
                            content: "是否确定解绑？",
                            success: function() {
                                var e = (0, c.Z)((0, o.Z)().mark(function e(n) {
                                    return (0, o.Z)().wrap(function(e) {
                                        while (1) switch (e.prev = e.next) {
                                          case 0:
                                            if (console.log(n), !n.confirm) {
                                                e.next = 15;
                                                break;
                                            }
                                            return e.prev = 2, f().showLoading(), e.next = 6, (0, x.gT)(G() || "", V());

                                          case 6:
                                            f().hideLoading(), v.Gq.showToast("解绑成功，请重新授权登录"), setTimeout(function() {
                                                f().navigateBack({
                                                    delta: 1
                                                });
                                            }, 2e3), e.next = 15;
                                            break;

                                          case 11:
                                            e.prev = 11, e.t0 = e["catch"](2), f().hideLoading(), v.Gq.showToast(e.t0 && e.t0.msg || "解绑失败");

                                          case 15:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e, null, [ [ 2, 11 ] ]);
                                }));
                                function n(n) {
                                    return e.apply(this, arguments);
                                }
                                return n;
                            }()
                        });

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
            })), {
                wait: 1e3,
                trailing: !1
            }), M = H.run;
            return (0, Z.jsxs)(s.View, {
                children: [ (0, Z.jsxs)(s.View, {
                    className: C.main_wrap,
                    children: [ (0, Z.jsx)(s.Image, {
                        src: r.Gwn,
                        className: C.icon
                    }), (0, Z.jsxs)(s.View, {
                        className: C.phone_code,
                        children: [ (0, Z.jsxs)(s.View, {
                            className: C.line_item,
                            children: [ (0, Z.jsx)(s.View, {
                                className: C.line_title,
                                children: "手机号"
                            }), (0, Z.jsx)(s.Input, {
                                className: C.phone_num,
                                placeholderClass: C.unbind_ipt_placeholder,
                                placeholder: "请输入手机号",
                                value: T,
                                type: "number",
                                maxlength: 11,
                                onInput: function(e) {
                                    return F(e.detail.value);
                                }
                            }) ]
                        }), (0, Z.jsxs)(s.View, {
                            className: C.line_item,
                            children: [ (0, Z.jsx)(s.View, {
                                className: C.line_title,
                                children: "验证码"
                            }), (0, Z.jsx)(s.Input, {
                                type: "number",
                                placeholder: "请输入验证码",
                                placeholderClass: C.unbind_ipt_placeholder,
                                className: C.code,
                                maxlength: 6,
                                value: k,
                                onInput: function(e) {
                                    return N(e.detail.value);
                                }
                            }), (0, Z.jsx)(s.View, {
                                className: _()(C.code_timer, (0, a.Z)({}, C.gray, t > 0 || T.length < 11)),
                                onClick: L,
                                children: t > 0 ? t + "s" : "获取验证码"
                            }) ]
                        }) ]
                    }) ]
                }), (0, Z.jsx)("t-captcha", {
                    class: "captcha",
                    id: "captcha",
                    appId: h.rk,
                    width: "640rpx",
                    onVerify: q,
                    onError: E
                }), (0, Z.jsxs)(s.View, {
                    className: C.btn_wrap,
                    children: [ (0, Z.jsx)(p._N, {
                        backgroundColor: (null === T || void 0 === T ? void 0 : T.length) >= 11 && (null === k || void 0 === k ? void 0 : k.length) >= 6 ? "#FF3B30" : "#CCCCCC",
                        className: C.btn,
                        onClick: M,
                        children: "确定解绑"
                    }), (0, Z.jsx)(d.R, {}) ]
                }) ]
            });
        }, k = j, N = {
            navigationBarTitleText: "解绑微信",
            usingComponents: {
                "t-captcha": "plugin://captcha/t-captcha"
            }
        };
        Page((0, i.createPageConfig)(k, "pages/unbindMobile/index", {
            root: {
                cn: []
            }
        }, N || {}));
    }
}, function(e) {
    var n = function(n) {
        return e(e.s = n);
    };
    e.O(0, [ 62107, 11216, 68592 ], function() {
        return n(23470);
    });
    e.O();
} ]);