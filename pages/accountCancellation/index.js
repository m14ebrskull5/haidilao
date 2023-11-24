(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 80481 ], {
    27060: function(e, n, a) {
        var c = a(32180), r = a(3701), t = a(57543), i = a(77886), o = a(65712), l = a(71515), s = a(19190), u = a(87526), d = a(70420), _ = a(67294), m = a(3594), p = a(92954), x = a.n(p), w = a(94184), h = a.n(w), g = a(40849), I = a(47007), f = a(45952), j = a(35299), F = {
            pageWrap: "index-module__pageWrap___bXw8q",
            tipWrap: "index-module__tipWrap___jk5uw",
            tipTitle: "index-module__tipTitle___pW3W2",
            tipRow: "index-module__tipRow___SJHAk",
            accountWrap: "index-module__accountWrap___DjFmu",
            accountWrapTop: "index-module__accountWrapTop___BzP4e",
            accountFormTitle: "index-module__accountFormTitle___aoJeF",
            accountWatermark: "index-module__accountWatermark___UMqBJ",
            accountFormWrap: "index-module__accountFormWrap___CBoN4",
            accFormItem: "index-module__accFormItem___Afl5S",
            accFormItemTitle: "index-module__accFormItemTitle___jIFcq",
            accFormItemInput: "index-module__accFormItemInput___fuAto",
            accInputPlaceholder: "index-module__accInputPlaceholder___IDZWv",
            accFormItemCode: "index-module__accFormItemCode___aOfGX",
            disabled: "index-module__disabled___ofYNE",
            btnWrap: "index-module__btnWrap___dlj3o",
            agreenWrap: "index-module__agreenWrap___HVEwX",
            agreenIcon: "index-module__agreenIcon___sUgEI",
            agreenFile: "index-module__agreenFile___Ou5yp"
        }, W = a(85893), N = function() {
            var e = (0, _.useState)(!1), n = (0, o.Z)(e, 2), a = n[0], c = n[1], w = (0, _.useState)(0), N = (0, 
            o.Z)(w, 2), v = N[0], T = N[1], V = (0, _.useState)(""), b = (0, o.Z)(V, 2), k = b[0], Z = b[1], C = (0, 
            I.v9)(function(e) {
                return e.user;
            }), R = C.isLogin, P = C.mobile;
            (0, p.useDidShow)(function() {
                R || f.B.login().catch(function() {
                    (0, j.R9)();
                });
            });
            var y = (0, m.Z)(function() {
                c(function(e) {
                    return !e;
                });
            }, {
                wait: 500,
                trailing: !1
            }), B = y.run, E = (0, m.Z)(function() {
                x().navigateTo({
                    url: "/pages/settingPageWebview/index?pageType=logoutNotice"
                });
            }, {
                wait: 500,
                trailing: !1
            }), S = E.run, A = (0, _.useRef)(null), J = (0, m.Z)((0, i.Z)((0, t.Z)().mark(function e() {
                return (0, t.Z)().wrap(function(e) {
                    while (1) switch (e.prev = e.next) {
                      case 0:
                        if (e.prev = 0, P && "--" !== P) {
                            e.next = 3;
                            break;
                        }
                        return e.abrupt("return");

                      case 3:
                        return e.next = 5, (0, g.T$)({
                            phone: P
                        });

                      case 5:
                        clearInterval(A.current), T(60), A.current = setInterval(function() {
                            T(function(e) {
                                return 0 === e ? (clearInterval(A.current), 0) : e - 1;
                            });
                        }, 1e3), e.next = 13;
                        break;

                      case 10:
                        e.prev = 10, e.t0 = e["catch"](0), console.error("处理验证码错误");

                      case 13:
                      case "end":
                        return e.stop();
                    }
                }, e, null, [ [ 0, 10 ] ]);
            })), {
                wait: 500,
                trailing: !1
            }), O = J.run, $ = (0, m.Z)((0, i.Z)((0, t.Z)().mark(function e() {
                return (0, t.Z)().wrap(function(e) {
                    while (1) switch (e.prev = e.next) {
                      case 0:
                        if (e.prev = 0, a) {
                            e.next = 4;
                            break;
                        }
                        return x().showToast({
                            title: "请勾选注销服务须知",
                            icon: "none",
                            duration: 2e3
                        }), e.abrupt("return");

                      case 4:
                        if (k) {
                            e.next = 7;
                            break;
                        }
                        return x().showToast({
                            title: "请输入验证码",
                            icon: "none",
                            duration: 2e3
                        }), e.abrupt("return");

                      case 7:
                        return e.next = 9, (0, g.pj)({
                            code: k,
                            type: 1
                        });

                      case 9:
                        return e.next = 11, f.B.clearUserInfo();

                      case 11:
                        x().showToast({
                            title: "注销成功",
                            icon: "none",
                            duration: 2e3
                        }), D.current = setTimeout(function() {
                            x().reLaunch({
                                url: "/pages/index/index"
                            });
                        }, 1500), e.next = 18;
                        break;

                      case 15:
                        e.prev = 15, e.t0 = e["catch"](0), console.error("注销错误");

                      case 18:
                      case "end":
                        return e.stop();
                    }
                }, e, null, [ [ 0, 15 ] ]);
            })), {
                wait: 500,
                trailing: !1
            }), q = $.run, D = (0, _.useRef)(null);
            return (0, _.useEffect)(function() {
                return function() {
                    clearTimeout(D.current), clearInterval(A.current);
                };
            }, []), (0, W.jsxs)(l.View, {
                className: F.pageWrap,
                children: [ (0, W.jsxs)(l.View, {
                    className: F.tipWrap,
                    children: [ (0, W.jsx)(l.View, {
                        className: F.tipTitle,
                        children: "注销后，您将放弃以下权益："
                    }), (0, W.jsx)(l.View, {
                        className: F.tipRow,
                        children: "（1）自愿放弃海底捞本会员账户的资产及虚拟权益（包括但不限于优惠券、线上欢乐卡、捞币、会员积分等与海底捞会员账号关联的兑换代码、卡券）均即刻作废。记录将被清空且无法恢复。"
                    }), (0, W.jsx)(l.View, {
                        className: F.tipRow,
                        children: "（2）您的所有交易记录将被清空，请确保账户内所有交易订单和服务（包括但不限于客服工单的售后工单）均已经完成且无纠纷。如果交易尚未完成的，建议您在交易完成后再申请注销。提醒您注意：注销后因历史交易记录被清空，相关交易的退换货、维权相关的资金退回等权益将无法实施。"
                    }), (0, W.jsx)(l.View, {
                        className: F.tipRow,
                        children: "（3）您的评价、点赞、收藏、关注、消息、浏览记录等行为数据活动的行为和数据将被清空且无法恢复。"
                    }), (0, W.jsx)(l.View, {
                        className: F.tipRow,
                        children: "（4）您参与的活动、签到、发布的信息等行为和数据将被清空且无法恢复。"
                    }), (0, W.jsx)(l.View, {
                        className: F.tipRow,
                        children: "（5）无正在进行中的投诉举报或被投诉举报。"
                    }) ]
                }), (0, W.jsxs)(l.View, {
                    className: F.accountWrap,
                    children: [ (0, W.jsxs)(l.View, {
                        className: F.accountWrapTop,
                        children: [ (0, W.jsx)(l.View, {
                            className: F.accountFormTitle,
                            children: "验证手机号码"
                        }), (0, W.jsx)(l.Image, {
                            src: s.AQG,
                            className: F.accountWatermark
                        }) ]
                    }), (0, W.jsxs)(l.View, {
                        className: F.accountFormWrap,
                        children: [ (0, W.jsxs)(l.View, {
                            className: F.accFormItem,
                            children: [ (0, W.jsx)(l.View, {
                                className: F.accFormItemTitle,
                                children: "当前号码"
                            }), (0, W.jsxs)(l.View, {
                                className: F.accFormItemInput,
                                children: [ "+86 ", "--" != P && P ? null === P || void 0 === P ? void 0 : P.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2") : "" ]
                            }) ]
                        }), (0, W.jsxs)(l.View, {
                            className: F.accFormItem,
                            children: [ (0, W.jsx)(l.View, {
                                className: F.accFormItemTitle,
                                children: "验证码"
                            }), (0, W.jsx)(l.Input, {
                                type: "number",
                                alwaysEmbed: !0,
                                adjustPosition: !0,
                                value: k,
                                maxlength: 6,
                                onInput: function(e) {
                                    return Z(e.detail.value);
                                },
                                className: F.accFormItemInput,
                                placeholder: "请输入验证码",
                                placeholderClass: F.accInputPlaceholder
                            }), (0, W.jsx)(l.View, {
                                className: h()(F.accFormItemCode, (0, r.Z)({}, F.disabled, v > 0)),
                                children: v > 0 ? "".concat(v, "s") : (0, W.jsx)(l.Text, {
                                    onClick: O,
                                    children: "获取验证码"
                                })
                            }) ]
                        }) ]
                    }) ]
                }), (0, W.jsxs)(l.View, {
                    className: F.btnWrap,
                    children: [ (0, W.jsx)(u.a3, {
                        theme: (null === k || void 0 === k ? void 0 : k.length) >= 6 && a ? "default" : "gray",
                        onClick: q,
                        children: "同意注销"
                    }), (0, W.jsxs)(l.View, {
                        className: F.agreenWrap,
                        onClick: B,
                        children: [ (0, W.jsx)(l.Image, {
                            className: F.agreenIcon,
                            src: a ? s.yAE : s.BF5
                        }), "已阅读并同意", (0, W.jsx)(l.View, {
                            className: F.agreenFile,
                            onClick: function(e) {
                                e.stopPropagation(), S();
                            },
                            children: "《注销服务须知》"
                        }) ]
                    }), (0, W.jsx)(d.R, {}) ]
                }) ]
            });
        }, v = N, T = {
            navigationBarTitleText: "注销账号须知"
        };
        Page((0, c.createPageConfig)(v, "pages/accountCancellation/index", {
            root: {
                cn: []
            }
        }, T || {}));
    }
}, function(e) {
    var n = function(n) {
        return e(e.s = n);
    };
    e.O(0, [ 62107, 11216, 68592 ], function() {
        return n(27060);
    });
    e.O();
} ]);