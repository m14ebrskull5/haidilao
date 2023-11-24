(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 20573 ], {
    21445: function(e, t, n) {
        var r = n(32180), i = n(18453), c = n(57543), a = n(77886), s = n(65712), o = n(71515), u = n(67608), l = n(67294), d = n(19190), v = n(40849), f = n(35299), p = n(13090), x = n(47007), h = n(3594), m = n(92954), w = n.n(m), g = n(87526), Z = n(47525), b = n(45952), k = n(31051), y = n(85893), j = void 0, S = function() {
            var e = (0, l.useState)(0), t = (0, s.Z)(e, 2), n = t[0], r = t[1], S = (0, l.useState)([]), N = (0, 
            s.Z)(S, 2), C = N[0], T = N[1], L = (0, l.useState)([]), I = (0, s.Z)(L, 2), P = I[0], _ = I[1], q = (0, 
            l.useState)([]), V = (0, s.Z)(q, 2), A = V[0], F = V[1], G = (0, x.v9)(function(e) {
                return e.user.isLogin;
            }), R = (0, l.useState)(0), B = (0, s.Z)(R, 2), U = B[0], Y = B[1], D = (0, l.useState)(0), J = (0, 
            s.Z)(D, 2), O = J[0], H = J[1], M = (0, l.useState)(0), $ = (0, s.Z)(M, 2), z = $[0], E = $[1], K = (0, 
            x.v9)(function(e) {
                return e.enterForm;
            }), Q = [ {
                title: "全部"
            }, {
                title: "已报名"
            }, {
                title: "已结束"
            } ], W = [ "all", "join", "end" ], X = (0, l.useRef)(), ee = (0, h.Z)(function() {
                w().navigateTo({
                    url: "/pages/login/index"
                });
            }, {
                wait: 500,
                trailing: !1
            }), te = ee.run, ne = (0, h.Z)(function(e) {
                w().navigateTo({
                    url: "/activePackage/pages/vipactive/activeInfo/index?id=".concat(e, "&from=线下活动页&clickType=活动卡片&clickBtn=立即报名")
                });
            }, {
                wait: 500,
                trailing: !1
            }), re = ne.run, ie = function(e) {
                return G ? e && e.length > 0 ? e.map(function(e, t) {
                    return e.activityStatus = Number(e.status), "3" === e.status || "4" === e.status ? e.giveUp + "" == "1" ? (0, 
                    y.jsx)(k.Cw, {
                        items: [ "addr", "actStartTime" ],
                        className: "item mar",
                        actInfo: e
                    }, null === e || void 0 === e ? void 0 : e.activityId) : (0, y.jsx)(k.Cw, {
                        items: [ "addr", "actStartTime" ],
                        className: "item mar",
                        actInfo: e,
                        giveUpFn: function() {
                            (0, Z.So)({
                                active_name: e.activityName,
                                active_page_id: e.activityId + "",
                                hdl_store_name: e.storeName
                            }), pe(e.registerId);
                        }
                    }, null === e || void 0 === e ? void 0 : e.activityId) : (0, y.jsx)(k.Cw, {
                        items: [ "actTime" ],
                        className: "item mar",
                        actInfo: e,
                        clickFn: function() {
                            re(e.activityId);
                        }
                    }, null === e || void 0 === e ? void 0 : e.activityId);
                }) : (0, y.jsx)(p.j, {
                    src: d.ZPm.empty_2,
                    text: "暂无活动",
                    top: 240
                }) : (0, y.jsxs)(o.View, {
                    className: "flex-col",
                    children: [ (0, y.jsx)(p.j, {
                        src: d.ZPm.empty_2,
                        text: "没有查到您的活动状态，请登录后查看",
                        top: 240
                    }), (0, y.jsx)(g._N, {
                        className: "login_btn",
                        bold: !0,
                        width: 486,
                        height: 88,
                        backgroundColor: "#F33429",
                        onClick: function() {
                            return te();
                        },
                        children: "去登录"
                    }) ]
                });
            }, ce = function() {
                var e = (0, a.Z)((0, c.Z)().mark(function e(t) {
                    return (0, c.Z)().wrap(function(e) {
                        while (1) switch (e.prev = e.next) {
                          case 0:
                            if (r(t), !G) {
                                e.next = 42;
                                break;
                            }
                            if (0 !== t) {
                                e.next = 16;
                                break;
                            }
                            return Y(0), H(.01), E(.01), e.prev = 6, e.next = 9, se();

                          case 9:
                            e.next = 14;
                            break;

                          case 11:
                            e.prev = 11, e.t0 = e["catch"](6), console.log(e.t0);

                          case 14:
                            e.next = 42;
                            break;

                          case 16:
                            if (1 !== t) {
                                e.next = 30;
                                break;
                            }
                            return Y(.01), H(0), E(.01), e.prev = 20, e.next = 23, de();

                          case 23:
                            e.next = 28;
                            break;

                          case 25:
                            e.prev = 25, e.t1 = e["catch"](20), console.log(e.t1);

                          case 28:
                            e.next = 42;
                            break;

                          case 30:
                            if (2 !== t) {
                                e.next = 42;
                                break;
                            }
                            return Y(.01), H(.01), E(0), e.prev = 34, e.next = 37, ue();

                          case 37:
                            e.next = 42;
                            break;

                          case 39:
                            e.prev = 39, e.t2 = e["catch"](34), console.log(e.t2);

                          case 42:
                          case "end":
                            return e.stop();
                        }
                    }, e, null, [ [ 6, 11 ], [ 20, 25 ], [ 34, 39 ] ]);
                }));
                return function(t) {
                    return e.apply(this, arguments);
                };
            }(), ae = (0, l.useRef)(!1), se = function() {
                var e = (0, a.Z)((0, c.Z)().mark(function e() {
                    var t;
                    return (0, c.Z)().wrap(function(e) {
                        while (1) switch (e.prev = e.next) {
                          case 0:
                            if (!ae.current) {
                                e.next = 2;
                                break;
                            }
                            return e.abrupt("return");

                          case 2:
                            return ae.current = !0, e.prev = 3, e.next = 6, v.ZP.queryAllActivityList("all", K.cityCode || "");

                          case 6:
                            t = e.sent, t && t.list && t.list.length > 0 ? T((0, i.Z)(null === t || void 0 === t ? void 0 : t.list)) : T([]), 
                            ae.current = !1, e.next = 15;
                            break;

                          case 11:
                            e.prev = 11, e.t0 = e["catch"](3), ae.current = !1, console.log(e.t0);

                          case 15:
                          case "end":
                            return e.stop();
                        }
                    }, e, null, [ [ 3, 11 ] ]);
                }));
                return function() {
                    return e.apply(this, arguments);
                };
            }(), oe = (0, l.useRef)(!1), ue = function() {
                var e = (0, a.Z)((0, c.Z)().mark(function e() {
                    var t;
                    return (0, c.Z)().wrap(function(e) {
                        while (1) switch (e.prev = e.next) {
                          case 0:
                            if (!oe.current) {
                                e.next = 2;
                                break;
                            }
                            return e.abrupt("return");

                          case 2:
                            return oe.current = !0, e.prev = 3, e.next = 6, v.ZP.queryAllActivityList("end", K.cityCode || "");

                          case 6:
                            t = e.sent, t && t.list && t.list.length > 0 ? F((0, i.Z)(null === t || void 0 === t ? void 0 : t.list)) : F([]), 
                            oe.current = !1, e.next = 15;
                            break;

                          case 11:
                            e.prev = 11, e.t0 = e["catch"](3), oe.current = !1, F([]);

                          case 15:
                          case "end":
                            return e.stop();
                        }
                    }, e, null, [ [ 3, 11 ] ]);
                }));
                return function() {
                    return e.apply(this, arguments);
                };
            }(), le = (0, l.useRef)(!1), de = function() {
                var e = (0, a.Z)((0, c.Z)().mark(function e() {
                    var t;
                    return (0, c.Z)().wrap(function(e) {
                        while (1) switch (e.prev = e.next) {
                          case 0:
                            if (!le.current) {
                                e.next = 2;
                                break;
                            }
                            return e.abrupt("return");

                          case 2:
                            return le.current = !0, e.prev = 3, e.next = 6, v.ZP.queryActivityListByUid("join", K.cityCode || "");

                          case 6:
                            t = e.sent, _(t ? (0, i.Z)(t) : []), le.current = !1, e.next = 15;
                            break;

                          case 11:
                            e.prev = 11, e.t0 = e["catch"](3), _([]), le.current = !1;

                          case 15:
                          case "end":
                            return e.stop();
                        }
                    }, e, null, [ [ 3, 11 ] ]);
                }));
                return function() {
                    return e.apply(this, arguments);
                };
            }(), ve = (0, h.Z)(function() {
                (0, Z.S_)("活动");
            }, {
                wait: 1e3,
                trailing: !1
            }), fe = ve.run;
            (0, m.useReady)(function() {
                var e;
                (0, Z.j$)(null === (e = m.Current.router) || void 0 === e ? void 0 : e.params);
            }), (0, m.useDidShow)((0, a.Z)((0, c.Z)().mark(function e() {
                return (0, c.Z)().wrap(function(e) {
                    while (1) switch (e.prev = e.next) {
                      case 0:
                        if (fe(), !G) {
                            e.next = 8;
                            break;
                        }
                        ce(0), Y(.01), H(.01), E(.01), e.next = 18;
                        break;

                      case 8:
                        return e.prev = 8, e.next = 11, b.B.login();

                      case 11:
                        r(0), se(), e.next = 18;
                        break;

                      case 15:
                        e.prev = 15, e.t0 = e["catch"](8), console.log(e.t0);

                      case 18:
                      case "end":
                        return e.stop();
                    }
                }, e, null, [ [ 8, 15 ] ]);
            }))), (0, m.useDidHide)(function() {
                ce(0), Y(0), H(0), E(0);
            });
            var pe = function(e) {
                w().showModal({
                    cancelText: "确认",
                    cancelColor: "#323233",
                    confirmText: "再想想",
                    confirmColor: "#F33429",
                    content: "您确认要放弃参与吗？",
                    success: function(t) {
                        if (t.cancel) {
                            if (X.current) return;
                            w().showLoading(), v.ZP.giveUp(e).then(function() {
                                w().hideLoading(), X.current = !1;
                            }).catch(function(e) {
                                w().hideLoading(), f.Gq.showToast(e && e.msg || "放弃失败"), X.current = !1;
                            }).finally(function() {
                                xe();
                            });
                        }
                    }
                });
            }, xe = function() {
                f.Gq.showLoading(), 1 == n ? de() : v.ZP.queryAllActivityList(W[n], K.cityCode || "").then(function(e) {
                    f.Gq.hideLoading(), e && e.list && e.list.length > 0 ? 0 == n ? T((0, i.Z)(e.list)) : 2 == n && F((0, 
                    i.Z)(e.list)) : 0 == n ? T([]) : 2 == n && F([]);
                }).catch(function(e) {
                    f.Gq.hideLoading(), f.Gq.showToast(e && e.msg || "网络出错 请稍后再试");
                });
            };
            return (0, y.jsx)(o.View, {
                className: "join-active-page",
                children: (0, y.jsxs)(u.CI, {
                    tabScrollView: {},
                    current: n,
                    tabList: Q,
                    onClick: ce.bind(j),
                    swipeable: !0,
                    animated: !1,
                    children: [ (0, y.jsx)(u.Sc, {
                        current: n,
                        index: 0,
                        children: (0, y.jsx)(o.ScrollView, {
                            scrollY: !0,
                            className: "tab-pane",
                            scrollTop: U,
                            enhanced: !0,
                            children: (0, y.jsx)(o.View, {
                                className: "item-real-view",
                                children: ie(C)
                            })
                        })
                    }), (0, y.jsx)(u.Sc, {
                        current: n,
                        index: 1,
                        children: (0, y.jsx)(o.ScrollView, {
                            scrollY: !0,
                            className: "tab-pane",
                            scrollTop: O,
                            enhanced: !0,
                            children: (0, y.jsx)(o.View, {
                                className: "item-real-view",
                                children: ie(P)
                            })
                        })
                    }), (0, y.jsx)(u.Sc, {
                        current: n,
                        index: 2,
                        children: (0, y.jsx)(o.ScrollView, {
                            scrollY: !0,
                            className: "tab-pane",
                            scrollTop: z,
                            enhanced: !0,
                            children: (0, y.jsx)(o.View, {
                                className: "item-real-view",
                                children: ie(A)
                            })
                        })
                    }) ]
                })
            });
        }, N = S, C = {
            navigationBarTitleText: "活动",
            navigationStyle: "default",
            disableScroll: !0
        };
        Page((0, r.createPageConfig)(N, "pages/joinActive/index", {
            root: {
                cn: []
            }
        }, C || {}));
    }
}, function(e) {
    var t = function(t) {
        return e(e.s = t);
    };
    e.O(0, [ 62107, 11216, 68592 ], function() {
        return t(21445);
    });
    e.O();
} ]);