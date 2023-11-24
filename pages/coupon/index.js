(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 32516 ], {
    40299: function(e, n, o) {
        var t = o(32180), i = o(3701), u = o(57543), c = o(77886), a = o(65712), r = o(71515), s = o(89398), _ = o(19190), l = o(5933), d = o(94184), p = o.n(d), m = o(67294), v = o(3594), x = o(70420), f = o(92954), h = o.n(f), w = o(35299), g = o(72431), b = o(45952), j = o(47007), S = o(47525), k = o(82197), N = o(20179), Z = o(13090), y = o(65361), V = {
            page_wrap: "index-module__page_wrap___QCSmr",
            empty: "index-module__empty___V1xkR",
            coupon_wrap: "index-module__coupon_wrap___fHZ2S",
            coupon_main: "index-module__coupon_main___f52fn",
            coupon: "index-module__coupon___GRyOz",
            coupon_top: "index-module__coupon_top___WvIX6",
            coupon_icon: "index-module__coupon_icon___aXPha",
            end: "index-module__end___MXmdD",
            coupon_top_main: "index-module__coupon_top_main___WpzIf",
            coupon_top_left: "index-module__coupon_top_left___U4CPr",
            coupon_top_right: "index-module__coupon_top_right___BL_xd",
            coupon_name: "index-module__coupon_name___jx1Xc",
            coupon_goods: "index-module__coupon_goods___YwdJ7",
            coupon_bottom: "index-module__coupon_bottom___O5YsP",
            coupon_time_rule: "index-module__coupon_time_rule___DkAWX",
            ticket_rule_btn_wrap: "index-module__ticket_rule_btn_wrap___vgL6n",
            ticket_rule_icon: "index-module__ticket_rule_icon___OzRfv",
            rotate: "index-module__rotate___mHJoi",
            coupon_time: "index-module__coupon_time___KCkS5",
            btns_wrap: "index-module__btns_wrap___QlOIh",
            btns: "index-module__btns___iizDS"
        }, C = o(85893), I = function() {
            var e = (0, j.v9)(function(e) {
                return e.user.isLogin;
            }), n = (0, m.useState)(!1), o = (0, a.Z)(n, 2), t = o[0], d = o[1], I = (0, m.useState)(!1), R = (0, 
            a.Z)(I, 2), D = R[0], G = R[1], L = (0, m.useState)(!1), T = (0, a.Z)(L, 2), q = T[0], O = T[1], z = (0, 
            m.useState)(null), A = (0, a.Z)(z, 2), J = A[0], M = A[1], P = (0, m.useRef)(!1), B = (0, 
            m.useRef)(), X = (0, m.useState)(!1), U = (0, a.Z)(X, 2), W = U[0], E = U[1], Y = (0, 
            m.useRef)(""), H = (0, f.useRouter)();
            (0, f.useDidShow)((0, c.Z)((0, u.Z)().mark(function n() {
                var o, t, i, c, a;
                return (0, u.Z)().wrap(function(n) {
                    while (1) switch (n.prev = n.next) {
                      case 0:
                        return console.log(null === H || void 0 === H ? void 0 : H.params), n.next = 3, 
                        (0, w.M4)();

                      case 3:
                        return null !== H && void 0 !== H && null !== (o = H.params) && void 0 !== o && o.scene ? Y.current = (null === H || void 0 === H || null === (i = H.params) || void 0 === i ? void 0 : i.scene) || "" : null !== H && void 0 !== H && null !== (t = H.params) && void 0 !== t && t.q && (a = decodeURIComponent(null === H || void 0 === H || null === (c = H.params) || void 0 === c ? void 0 : c.q), 
                        Y.current = (0, w.Wz)(a, "scene") || ""), n.next = 6, Q();

                      case 6:
                        if (n.prev = 6, w.Gq.showLoading(), e) {
                            n.next = 11;
                            break;
                        }
                        return n.next = 11, b.B.login();

                      case 11:
                        $(), n.next = 18;
                        break;

                      case 14:
                        n.prev = 14, n.t0 = n["catch"](6), console.log(n.t0), w.Gq.hideLoading();

                      case 18:
                      case "end":
                        return n.stop();
                    }
                }, n, null, [ [ 6, 14 ] ]);
            })));
            var K = (0, m.useRef)(!1), Q = function() {
                var e = (0, c.Z)((0, u.Z)().mark(function e() {
                    var n;
                    return (0, u.Z)().wrap(function(e) {
                        while (1) switch (e.prev = e.next) {
                          case 0:
                            if (e.prev = 0, !K.current) {
                                e.next = 3;
                                break;
                            }
                            return e.abrupt("return");

                          case 3:
                            return w.Gq.showLoading(), K.current = !0, e.next = 7, (0, g.$1)({
                                scene: Y.current
                            });

                          case 7:
                            n = e.sent, 2 === n.couponStatus || 3 === n.couponStatus ? (O(!0), G(!0)) : (M((null === n || void 0 === n ? void 0 : n.blackMemberGiftCouponInfo) || {}), 
                            B.current = null === n || void 0 === n ? void 0 : n.blackMemberGiftCouponInfo, (0, 
                            S.Lz)("转赠礼页面")), e.next = 14;
                            break;

                          case 11:
                            e.prev = 11, e.t0 = e["catch"](0), O(!0);

                          case 14:
                            return e.prev = 14, w.Gq.hideLoading(), K.current = !1, e.finish(14);

                          case 18:
                          case "end":
                            return e.stop();
                        }
                    }, e, null, [ [ 0, 11, 14, 18 ] ]);
                }));
                return function() {
                    return e.apply(this, arguments);
                };
            }(), $ = function() {
                (0, g.dD)({
                    scene: Y.current
                }).then(function(e) {
                    e && d(!0);
                }).catch(function(e) {
                    O(!0);
                });
            }, F = (0, v.Z)(function() {
                E(!0), ie("分享给好友");
            }, {
                wait: 500,
                trailing: !1
            }), ee = F.run, ne = (0, v.Z)(function() {
                e ? D ? h().redirectTo({
                    url: "/propertyPackage/pages/base/myCoupon/index"
                }) : te() : (0, w.R9)();
            }, {
                wait: 500,
                trailing: !1
            }), oe = ne.run, te = function() {
                P.current || (P.current = !0, (0, S.Lz)("领取到券包"), (0, g.GR)({
                    scene: Y.current
                }).then(function(e) {
                    w.Gq.showToast("领取成功"), G(!0), P.current = !1, (0, S.Lz)("领取成功页面");
                }).catch(function(e) {
                    w.Gq.showAlert(e && e.msg || "领取失败"), P.current = !1;
                }));
            }, ie = function(e) {
                var n, o;
                (0, S.uO)({
                    current_page: "权益中心",
                    click_location: "立即赠送",
                    coupon_name: null === (n = B.current) || void 0 === n ? void 0 : n.name,
                    coupon_id: null === (o = B.current) || void 0 === o ? void 0 : o.templateId,
                    equity_type: "转赠礼",
                    coupon_share: e
                });
            }, ue = function() {
                E(!1), ie("取消");
            }, ce = function() {
                var e, n;
                h().navigateTo({
                    url: "/propertyPackage/pages/base/canvas/index?scene=".concat(Y.current, "&couponName=").concat((null === (e = B.current) || void 0 === e ? void 0 : e.name) || "", "&couponId=").concat((null === (n = B.current) || void 0 === n ? void 0 : n.templateId) || "")
                }), ie("生成图片");
            };
            (0, f.useShareAppMessage)(function() {
                return {
                    title: "送你一张海底捞优惠劵",
                    path: "/pages/coupon/index?scene=".concat(Y.current),
                    imageUrl: _.BNl
                };
            });
            var ae = (0, m.useState)(!1), re = (0, a.Z)(ae, 2), se = re[0], _e = re[1], le = (0, 
            v.Z)(function() {
                _e(function(e) {
                    return !e;
                });
            }, {
                wait: 500,
                trailing: !1
            }), de = le.run, pe = (0, m.useState)(), me = (0, a.Z)(pe, 2), ve = me[0], xe = me[1], fe = (0, 
            m.useState)(""), he = (0, a.Z)(fe, 2), we = he[0], ge = he[1], be = (0, m.useState)(""), je = (0, 
            a.Z)(be, 2), Se = je[0], ke = je[1], Ne = (0, m.useState)(""), Ze = (0, a.Z)(Ne, 2), ye = Ze[0], Ve = Ze[1], Ce = (0, 
            m.useState)([]), Ie = (0, a.Z)(Ce, 2), Re = Ie[0], De = Ie[1];
            return (0, m.useEffect)(function() {
                if (J) {
                    var e = (0, y.yt)(J.type, null === J || void 0 === J ? void 0 : J.couponType);
                    if (!e) return void console.error("未知的券类型");
                    var n = J.effectiveDateType, o = J.effectiveDuration, t = J.effectiveDurationUnit, i = J.effectiveEndTimeStr, u = J.effectiveStartTimeStr, c = J.delayEffective;
                    e && xe(+e), ge((0, y.su)(e, (null === J || void 0 === J ? void 0 : J.minConsumeCount) || "", (null === J || void 0 === J ? void 0 : J.minConsumeValue) || "")), 
                    ke((0, y.A$)(e, (null === J || void 0 === J ? void 0 : J.maxDiscountCount) || "", (null === J || void 0 === J ? void 0 : J.maxDiscountValue) || "", (null === J || void 0 === J ? void 0 : J.discountValue) || "")), 
                    Ve((0, y.Bp)(n, o, t, i, u, c));
                    var a = [];
                    if (J.useInstruction) {
                        try {
                            a = JSON.parse(null === J || void 0 === J ? void 0 : J.useInstruction);
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            a = [];
                        }
                        De(a);
                    }
                }
            }, [ J ]), (0, C.jsxs)(r.View, {
                className: p()(V.page_wrap, (0, i.Z)({}, V.empty, q)),
                children: [ (0, C.jsx)(s.Y, {
                    leftIcon: !q && _.nC7,
                    title: "海底捞",
                    boxStyle: {
                        backgroundColor: "transparent"
                    },
                    titleStyle: {
                        color: q ? "#333333" : "#ffffff"
                    }
                }), q ? (0, C.jsx)(Z.j, {
                    text: "券不在啦，请ta再送一张吧",
                    top: 260,
                    src: _.ve3
                }) : (0, C.jsxs)(C.Fragment, {
                    children: [ (0, C.jsxs)(r.View, {
                        className: V.coupon_wrap,
                        children: [ (0, C.jsx)(r.View, {
                            className: V.coupon_main,
                            children: (0, C.jsxs)(r.View, {
                                className: V.coupon,
                                children: [ (0, C.jsxs)(r.View, {
                                    className: V.coupon_top,
                                    children: [ (0, C.jsx)(r.Image, {
                                        className: p()(V.coupon_icon, D ? V.end : ""),
                                        src: D ? _.DJs : _.UXD
                                    }), (0, C.jsxs)(r.View, {
                                        className: V.coupon_top_main,
                                        children: [ (0, C.jsx)(r.View, {
                                            className: V.coupon_top_left,
                                            children: ve ? (0, C.jsx)(l.J0, {
                                                couponType: ve,
                                                discounts: Se,
                                                threshold: we
                                            }) : null
                                        }), (0, C.jsx)(r.View, {
                                            className: V.coupon_top_right,
                                            children: (0, C.jsxs)(r.View, {
                                                className: p()(V.coupon_name, "line-clamp"),
                                                children: [ null === J || void 0 === J ? void 0 : J.name, " ", Number(null === J || void 0 === J ? void 0 : J.sendNum) > 1 ? "x" + (null === J || void 0 === J ? void 0 : J.sendNum) : null ]
                                            })
                                        }) ]
                                    }) ]
                                }), (0, C.jsxs)(r.View, {
                                    className: V.coupon_bottom,
                                    children: [ (0, C.jsxs)(r.View, {
                                        className: V.coupon_time_rule,
                                        children: [ (0, C.jsx)(r.View, {
                                            className: V.coupon_time,
                                            children: ye
                                        }), (0, C.jsxs)(r.View, {
                                            className: V.ticket_rule_btn_wrap,
                                            onClick: de,
                                            children: [ "使用规则", (0, C.jsx)(r.Image, {
                                                className: p()(V.ticket_rule_icon, (0, i.Z)({}, V.rotate, se)),
                                                src: _.tpq
                                            }) ]
                                        }) ]
                                    }), (0, C.jsx)(l.K3, {
                                        descList: Re,
                                        open: se
                                    }) ]
                                }) ]
                            })
                        }), (0, C.jsx)(x.R, {}) ]
                    }), (0, C.jsxs)(r.View, {
                        className: V.btns_wrap,
                        children: [ t ? (0, C.jsx)(r.View, {
                            className: V.btns,
                            onClick: ee,
                            children: "分享给好友"
                        }) : (0, C.jsx)(r.View, {
                            className: V.btns,
                            onClick: oe,
                            children: D ? "领取成功 去券包中查看" : "领取到券包"
                        }), (0, C.jsx)(x.R, {}) ]
                    }) ]
                }), (0, C.jsx)(k.g, {}), (0, C.jsx)(N.A, {
                    source: "share",
                    isOpened: W,
                    onCancel: ue,
                    onWechet: function() {
                        ie("微信好友");
                    },
                    onGenerate: ce
                }) ]
            });
        }, R = I, D = {
            navigationBarTitleText: "海底捞",
            navigationStyle: "custom",
            enableShareAppMessage: !0,
            navigationBarTextStyle: "white"
        };
        R.enableShareAppMessage = !0;
        Page((0, t.createPageConfig)(R, "pages/coupon/index", {
            root: {
                cn: []
            }
        }, D || {}));
    }
}, function(e) {
    var n = function(n) {
        return e(e.s = n);
    };
    e.O(0, [ 62107, 11216, 68592 ], function() {
        return n(40299);
    });
    e.O();
} ]);