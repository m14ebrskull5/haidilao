(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 50417 ], {
    54932: function(e, n, t) {
        var i = t(32180), o = t(57543), r = t(77886), l = t(66058), a = t(65712), c = t(3701), s = t(89398), u = t(71515), d = t(19190), p = t(94184), m = t.n(p), x = t(92954), _ = t.n(x), v = t(67294), y = t(3594), h = t(76871), b = t(45952), f = t(79551), N = t(35299), w = t(20732), g = t(51916), Z = t(65361), j = t(47007), T = t(87481), k = t(47525), I = t(31083), S = t(13090), C = t(70420), V = t(9526), D = t(83902), L = t(122), O = t(62623), B = t(92921), R = {
            setmeal: "index-module__setmeal___z5YnR",
            ctx: "index-module__ctx___bgPrb",
            title: "index-module__title___XttPn",
            money_box: "index-module__money_box___MJVYw",
            money_unit: "index-module__money_unit___OlXbs",
            money_num: "index-module__money_num___Lw2Yz",
            money_decimals: "index-module__money_decimals___gfXSt",
            money_underline: "index-module__money_underline___nLCuA",
            tip: "index-module__tip___Fqyjp",
            card_on: "index-module__card_on___UN1At",
            slogan: "index-module__slogan___kp0No",
            tip_red_bg: "index-module__tip_red_bg___XhFXH",
            tip_text: "index-module__tip_text___anvob"
        }, Y = t(85893), P = function(e) {
            console.log("SetMealOrigin", e);
            var n = e.title, t = e.tip, i = e.label, o = e.price, r = e.linePrice, l = e.checked, a = e.onClick, c = (0, 
            N.Fr)(+o / 100), s = c.int, p = c.decimal;
            return (0, Y.jsxs)(u.View, {
                className: R.setmeal,
                onClick: function() {
                    null === a || void 0 === a || a();
                },
                children: [ (0, Y.jsxs)(u.View, {
                    className: R.ctx,
                    children: [ (0, Y.jsx)(u.View, {
                        className: R.title,
                        children: n
                    }), (0, Y.jsxs)(u.View, {
                        className: m()(R.money_box),
                        children: [ (0, Y.jsx)(u.Text, {
                            className: m()(R.money_unit),
                            children: "¥"
                        }), (0, Y.jsx)(u.Text, {
                            className: R.money_num,
                            children: s
                        }), p ? (0, Y.jsxs)(u.Text, {
                            className: R.money_decimals,
                            children: [ ".", p ]
                        }) : null, r ? (0, Y.jsxs)(u.Text, {
                            className: R.money_underline,
                            children: [ "¥", +r / 100 ]
                        }) : null ]
                    }) ]
                }), (0, Y.jsx)(u.View, {
                    className: R.tip,
                    children: t
                }), l ? (0, Y.jsx)(u.Image, {
                    className: R.card_on,
                    src: d.RJ0
                }) : null, i ? (0, Y.jsx)(u.View, {
                    className: R.slogan,
                    children: i
                }) : null ]
            });
        }, W = (0, v.memo)(P, function(e, n) {
            return e.id === n.id && e.checked === n.checked;
        }), q = t(37240), F = t(57205), U = t(62494), G = t(54514), X = t(88082), A = {
            body: {
                backgroundColor: "transparent"
            },
            title: {
                color: "#000000"
            },
            tabColor: {
                default: "#999999",
                active: "#333333"
            }
        }, M = {
            body: {
                backgroundColor: "#ffffff"
            },
            title: {
                color: "#000000"
            },
            tabColor: {
                default: "#999999",
                active: "#333333"
            }
        }, E = function(e) {
            var n = e.changeFn, t = e.data, i = e.color, o = e.activeColor, r = e.nowValue;
            return t.length < 2 ? null : (0, Y.jsx)(u.ScrollView, {
                className: V.Z.card_type_wrap,
                enableFlex: !0,
                scrollX: !0,
                "scroll-into-view": "tab_".concat(Math.max(r - 1, 0)),
                scrollWithAnimation: !0,
                showScrollbar: !1,
                enhanced: !0,
                children: t.map(function(e, l) {
                    var a;
                    return (0, Y.jsxs)(u.View, {
                        id: "tab_".concat(l),
                        onClick: function() {
                            n(l);
                        },
                        className: m()(V.Z.card_type_item, (a = {}, (0, c.Z)(a, V.Z.active, r === l), (0, 
                        c.Z)(a, V.Z.auto_width, 2 == t.length), a)),
                        style: {
                            color: r === l ? o : i
                        },
                        children: [ e.value, (0, Y.jsx)(u.View, {
                            className: V.Z.card_type_line
                        }) ]
                    }, e.type);
                })
            });
        }, z = function() {
            var e, n, t, i, p = (0, x.useRouter)(), R = (0, v.useRef)(w.T), P = (0, j.v9)(function(e) {
                return e.user;
            }), z = P.portraitsUrl, H = P.memberLevel, J = P.isLogin, K = P.customerName, Q = (0, 
            v.useState)(!1), $ = (0, a.Z)(Q, 2), ee = $[0], ne = $[1], te = (0, y.Z)(function() {
                (0, k.vI)();
            }, {
                wait: 1e3,
                trailing: !1
            }), ie = te.run;
            (0, x.useReady)(function() {
                _().setTabBarStyle({
                    borderStyle: "white"
                });
                var e = (0, l.Z)({}, w.T);
                e.from = p.params.from ? g.B[p.params.from] : "海底捞小程序", e.fromID = p.params.from || "5", 
                e.storeId = p.params.storeId || "", e.storeName = p.params.storeName ? decodeURIComponent(p.params.storeName) : "", 
                e.tableNo = p.params.tableNo || "", e.billNo = p.params.billNo || "", e.sourceType = p.params.sourceType || "", 
                e.cardNo = p.params.cardNo || "";
                var n = p.params.q;
                if (n) {
                    var t = decodeURIComponent(n), i = t.split("?")[1] || "", o = (0, N.dD)(i);
                    e.from = g.B[o.from || "4"], e.fromID = o.from || "4", e.storeId = o.storeId || "", 
                    e.storeName = o.storeName ? decodeURIComponent(o.storeName) : "", e.tableNo = o.tableNo || "", 
                    e.billNo = o.billNo || "", e.sourceType = o.sourceType || "", e.cardNo = o.cardNo || "";
                }
                R.current = e;
            }), (0, x.useDidShow)(function() {
                _().setTabBarStyle({
                    borderStyle: "white"
                }), ie(), J ? (console.log("init15", Ze.current), je(!0)) : (console.log("init12", Ze.current), 
                b.B.login().then(function(e) {
                    console.log("init13", Ze.current), e && (console.log("init14", Ze.current), je(!0));
                }));
            }), (0, v.useEffect)(function() {
                J || (console.log("init16", Ze.current), Ze.current = !1, Ae(), we(0));
            }, [ J ]), (0, x.useDidHide)(function() {
                _().setTabBarStyle({
                    borderStyle: "black"
                }), Ae();
            });
            var oe = (0, v.useState)([]), re = (0, a.Z)(oe, 2), le = re[0], ae = re[1], ce = (0, 
            v.useState)(0), se = (0, a.Z)(ce, 2), ue = se[0], de = se[1], pe = (0, v.useState)(0), me = (0, 
            a.Z)(pe, 2), xe = me[0], _e = me[1], ve = (0, v.useState)(), ye = (0, a.Z)(ve, 2), he = ye[0], be = ye[1], fe = null === he || void 0 === he ? void 0 : he.detailList[xe], Ne = (0, 
            v.useRef)({
                type: 0,
                buyRecordDetailId: 0
            }), we = function(e) {
                De(!1), de(e), _e(0);
            }, ge = (0, v.useRef)(!0), Ze = (0, v.useRef)(!1), je = function() {
                var e = (0, r.Z)((0, o.Z)().mark(function e(n) {
                    var t, i, r, l;
                    return (0, o.Z)().wrap(function(e) {
                        while (1) switch (e.prev = e.next) {
                          case 0:
                            if (console.log("init", Ze.current), !Ze.current) {
                                e.next = 3;
                                break;
                            }
                            return e.abrupt("return");

                          case 3:
                            return Ze.current = !0, console.log("init1", Ze.current), we(ue || 0), e.prev = 6, 
                            _().showLoading(), e.next = 10, (0, f.c6)();

                          case 10:
                            if (t = e.sent, console.log("init2", Ze.current), t && 0 != t.length) {
                                e.next = 20;
                                break;
                            }
                            return ae([]), be(void 0), ne(!0), _().hideLoading(), Ze.current = !1, console.log("init3", Ze.current), 
                            e.abrupt("return");

                          case 20:
                            return i = "", ue > t.length - 1 ? (de(0), i = t[0].cardNo) : i = t[ue || 0].cardNo, 
                            ge.current && (console.log("init4", Ze.current), r = t.findIndex(function(e) {
                                return e.cardNo == R.current.cardNo;
                            }), r > -1 && (de(r), i = R.current.cardNo || ""), ge.current = !1, console.log("init5", Ze.current)), 
                            console.log("init6", Ze.current), Ie(), e.next = 27, ke(i);

                          case 27:
                            l = e.sent, console.log("init7", Ze.current), n && (0, k.oj)({
                                xcx_is_buy: "Y" == l.canBuy ? "未购买" : "已购买",
                                xcx_card_num: l.cardNo
                            }), console.log("init8", Ze.current), ae(t), be(l), Ze.current = !1, ne(!0), console.log("init9", Ze.current), 
                            _().hideLoading(), e.next = 51;
                            break;

                          case 39:
                            e.prev = 39, e.t0 = e["catch"](6), console.log("init10", Ze.current), Ze.current = !1, 
                            ae([]), de(0), be(void 0), ne(!0), console.log("init11", Ze.current), _().hideLoading(), 
                            N.Gq.showToast((null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.msg) || "小程序太火爆了，请稍后再试"), 
                            console.error(e.t0);

                          case 51:
                          case "end":
                            return e.stop();
                        }
                    }, e, null, [ [ 6, 39 ] ]);
                }));
                return function(n) {
                    return e.apply(this, arguments);
                };
            }(), Te = (0, h.ZP)(f.oO, {
                manual: !0
            }), ke = Te.run, Ie = Te.cancel;
            (0, x.useTabItemTap)(function() {
                (0, k.ap)();
            });
            var Se = (0, v.useState)(!1), Ce = (0, a.Z)(Se, 2), Ve = Ce[0], De = Ce[1], Le = (0, 
            y.Z)(function() {
                De(!Ve);
            }, {
                wait: 500,
                trailing: !1
            }), Oe = Le.run, Be = (0, v.useState)(A), Re = (0, a.Z)(Be, 2), Ye = Re[0], Pe = Re[1], We = function(e) {
                Pe("white" === e ? M : A);
            }, qe = (0, v.useState)({
                title: "",
                text: "",
                isOpened: !1
            }), Fe = (0, a.Z)(qe, 2), Ue = Fe[0], Ge = Fe[1], Xe = (0, y.Z)(function() {
                Ge({
                    title: "",
                    text: "",
                    isOpened: !1
                });
            }, {
                wait: 500,
                trailing: !1
            }), Ae = Xe.run, Me = (0, y.Z)(function(e) {
                1 == e ? Ge({
                    title: "活动规则说明",
                    text: (null === he || void 0 === he ? void 0 : he.rule) || "",
                    isOpened: !0
                }) : 2 == e ? Ge({
                    title: "权益详情介绍",
                    text: (null === he || void 0 === he ? void 0 : he.benefitIntro) || "",
                    isOpened: !0
                }) : 3 == e ? Ge({
                    title: "常见问题",
                    text: (null === he || void 0 === he ? void 0 : he.commonProblem) || "",
                    isOpened: !0
                }) : 4 == e && Ge({
                    title: "购买须知",
                    text: (null === he || void 0 === he ? void 0 : he.buyNotes) || "",
                    isOpened: !0
                });
            }, {
                wait: 500,
                trailing: !1
            }), Ee = Me.run, ze = (0, v.useRef)({
                payStatus: !1,
                count: 0
            }), He = (0, h.ZP)(f.Tj, {
                pollingInterval: 1e3,
                pollingWhenHidden: !1,
                manual: !0,
                onError: function(e) {
                    ze.current.payStatus = !1, Ke();
                },
                onSuccess: function() {
                    var e = (0, r.Z)((0, o.Z)().mark(function e(n) {
                        return (0, o.Z)().wrap(function(e) {
                            while (1) switch (e.prev = e.next) {
                              case 0:
                                1 === n.status ? (ze.current.payStatus = !1, Ke(), ze.current.count = 0, _().hideLoading(), 
                                _().showToast({
                                    icon: "success",
                                    title: "购卡成功"
                                }), Ie(), ke((null === he || void 0 === he ? void 0 : he.cardNo) || "").then(function(e) {
                                    Ze.current = !1, be(e);
                                }).catch(function(e) {
                                    Ze.current = !1, N.Gq.showToast((null === e || void 0 === e ? void 0 : e.msg) || "小程序太火爆了，请稍后再试"), 
                                    setTimeout(function() {
                                        je();
                                    }, 1e3);
                                })) : ze.current.count >= 10 ? (_().hideLoading(), ze.current.payStatus = !1, N.Gq.showToast("查询支付结果失败"), 
                                Ke()) : ze.current.count++;

                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }));
                    function n(n) {
                        return e.apply(this, arguments);
                    }
                    return n;
                }()
            }), Je = He.run, Ke = He.cancel, Qe = function() {
                var e = (0, r.Z)((0, o.Z)().mark(function e(n) {
                    var t, i, r, l, a, c, s, u;
                    return (0, o.Z)().wrap(function(e) {
                        while (1) switch (e.prev = e.next) {
                          case 0:
                            if (e.prev = 0, !ze.current.payStatus) {
                                e.next = 3;
                                break;
                            }
                            return e.abrupt("return");

                          case 3:
                            return ze.current.payStatus = !0, _().showLoading({
                                title: "加载中...",
                                mask: !0
                            }), e.next = 7, (0, f.WK)({
                                cardNo: (null === he || void 0 === he ? void 0 : he.cardNo) || "",
                                buyChannel: (null === (t = R.current) || void 0 === t ? void 0 : t.from) || "",
                                waiterName: (null === (i = R.current) || void 0 === i ? void 0 : i.waiterName) || "",
                                waiterNo: (null === (r = R.current) || void 0 === r ? void 0 : r.waiterNo) || "",
                                storeId: (null === (l = R.current) || void 0 === l ? void 0 : l.storeId) || "",
                                storeName: (null === (a = R.current) || void 0 === a ? void 0 : a.storeName) || "",
                                tableNo: (null === (c = R.current) || void 0 === c ? void 0 : c.tableNo) || "",
                                billNo: (null === (s = R.current) || void 0 === s ? void 0 : s.billNo) || "",
                                cardDetailId: null === fe || void 0 === fe ? void 0 : fe.id,
                                typeCode: "DISCOUNT_CARD"
                            });

                          case 7:
                            return u = e.sent, _().hideLoading(), e.next = 11, _().requestPayment({
                                timeStamp: u.timestamp,
                                nonceStr: u.nonceStr,
                                package: u.packag,
                                signType: "MD5",
                                paySign: u.paySign
                            });

                          case 11:
                            _().showLoading({
                                title: "查询支付结果",
                                mask: !0
                            }), ze.current.count = 0, Je(u.tradeId, "DISCOUNT_CARD"), e.next = 22;
                            break;

                          case 16:
                            e.prev = 16, e.t0 = e["catch"](0), ze.current.payStatus = !1, _().hideLoading(), 
                            N.Gq.showToast((null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.msg) || "支付失败"), 
                            console.log("支付失败", e.t0);

                          case 22:
                          case "end":
                            return e.stop();
                        }
                    }, e, null, [ [ 0, 16 ] ]);
                }));
                return function(n) {
                    return e.apply(this, arguments);
                };
            }(), $e = (0, y.Z)(function(e) {
                e !== ue && (we(e), _().createSelectorQuery().select("#save_money_scroll").node().exec(function(e) {
                    var n;
                    null === (n = e[0]) || void 0 === n || n.node.scrollTo({
                        top: 0
                    });
                }), _().createSelectorQuery().select("#save_money_meal").node().exec(function(e) {
                    var n;
                    null === (n = e[0]) || void 0 === n || n.node.scrollTo({
                        left: 0
                    });
                }), Ie(), _().showLoading(), ke(le[e].cardNo).then(function(e) {
                    be(e), (0, k.gb)({
                        xcx_card_num: e.cardNo,
                        xcx_is_buy: "Y" == e.canBuy ? "未购买" : "已购买"
                    }), _().hideLoading();
                }).catch(function(e) {
                    N.Gq.showToast((null === e || void 0 === e ? void 0 : e.msg) || "小程序太火爆了，请稍后再试"), 
                    Ze.current = !1, je();
                }));
            }, {
                wait: 500,
                trailing: !1
            }), en = $e.run, nn = function() {
                var e = (0, r.Z)((0, o.Z)().mark(function e(n, t, i, r) {
                    return (0, o.Z)().wrap(function(e) {
                        while (1) switch (e.prev = e.next) {
                          case 0:
                            if (e.prev = 0, "Y" != (null === he || void 0 === he ? void 0 : he.canBuy)) {
                                e.next = 3;
                                break;
                            }
                            return e.abrupt("return");

                          case 3:
                            if (2 != t) {
                                e.next = 7;
                                break;
                            }
                            return an({
                                title: (null === i || void 0 === i ? void 0 : i.benefitDescription) || "",
                                tip: "此内容为多选一权益，分别为".concat(r.map(function(e) {
                                    return e.benefitDescription;
                                }).join(","), "，选择后不可修改。"),
                                isOpened: !0
                            }), Ne.current = {
                                type: +n.type,
                                buyRecordDetailId: +n.buyRecordDetailId
                            }, e.abrupt("return");

                          case 7:
                            return e.next = 9, tn(n);

                          case 9:
                            e.next = 14;
                            break;

                          case 11:
                            e.prev = 11, e.t0 = e["catch"](0), console.error(e.t0);

                          case 14:
                          case "end":
                            return e.stop();
                        }
                    }, e, null, [ [ 0, 11 ] ]);
                }));
                return function(n, t, i, o) {
                    return e.apply(this, arguments);
                };
            }(), tn = function() {
                var e = (0, r.Z)((0, o.Z)().mark(function e(n) {
                    var t, i;
                    return (0, o.Z)().wrap(function(e) {
                        while (1) switch (e.prev = e.next) {
                          case 0:
                            return _().showLoading(), e.next = 3, (0, f.IO)((0, l.Z)({}, n));

                          case 3:
                            t = e.sent, an({
                                title: "",
                                tip: "",
                                isOpened: !1
                            }), e.t0 = +n.type, e.next = e.t0 === U.W1.hdl || e.t0 === U.W1.gd || e.t0 === U.W1.wyy || e.t0 === U.W1.tx || e.t0 === U.W1.xmly || e.t0 === U.W1.szzc || e.t0 === U.W1.ydjd || e.t0 === U.W1["58dj"] ? 8 : e.t0 === U.W1.hzh || e.t0 === U.W1.qd || e.t0 === U.W1.hlkq ? 10 : 12;
                            break;

                          case 8:
                            return N.Gq.showToast("领取成功"), e.abrupt("break", 12);

                          case 10:
                            return dn({
                                codeList: t || [],
                                isOpened: !0,
                                codeTypeTip: U.Uy[n.type].tip
                            }), e.abrupt("break", 12);

                          case 12:
                            return _().hideLoading(), e.next = 15, ke(le[ue].cardNo);

                          case 15:
                            i = e.sent, be(i);

                          case 17:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }));
                return function(n) {
                    return e.apply(this, arguments);
                };
            }(), on = (0, v.useState)({
                title: "",
                tip: "",
                isOpened: !1
            }), rn = (0, a.Z)(on, 2), ln = rn[0], an = rn[1], cn = (0, v.useState)({
                codeList: [],
                isOpened: !1,
                codeTypeTip: ""
            }), sn = (0, a.Z)(cn, 2), un = sn[0], dn = sn[1], pn = function() {
                var e = (0, r.Z)((0, o.Z)().mark(function e(n) {
                    var t;
                    return (0, o.Z)().wrap(function(e) {
                        while (1) switch (e.prev = e.next) {
                          case 0:
                            return e.prev = 0, _().showLoading(), e.next = 4, (0, f.E9)((0, l.Z)({}, n));

                          case 4:
                            t = e.sent, dn({
                                codeList: t || [],
                                isOpened: !0,
                                codeTypeTip: U.Uy[n.type].tip
                            }), _().hideLoading(), e.next = 12;
                            break;

                          case 9:
                            e.prev = 9, e.t0 = e["catch"](0), console.error(e.t0);

                          case 12:
                          case "end":
                            return e.stop();
                        }
                    }, e, null, [ [ 0, 9 ] ]);
                }));
                return function(n) {
                    return e.apply(this, arguments);
                };
            }();
            return J ? ee ? (0, Y.jsxs)(u.View, {
                className: V.Z.page,
                children: [ (0, Y.jsxs)(u.View, {
                    className: V.Z.nav_box,
                    style: {
                        backgroundColor: Ye.body.backgroundColor
                    },
                    children: [ (0, Y.jsx)(s.Y, {
                        title: "省钱卡",
                        leftStyle: {
                            display: "none"
                        },
                        boxStyle: (0, l.Z)({}, Ye.body),
                        titleStyle: (0, l.Z)({
                            fontWeight: "bold"
                        }, Ye.title)
                    }), (0, Y.jsx)(s.h, {}), (0, Y.jsx)(E, {
                        changeFn: function(e) {
                            en(e);
                        },
                        nowValue: ue,
                        backColor: Ye.body.backgroundColor,
                        color: Ye.tabColor.default,
                        activeColor: Ye.tabColor.active,
                        data: le.map(function(e) {
                            return {
                                type: +e.typeId,
                                theme: 0,
                                value: e.title
                            };
                        })
                    }) ]
                }), (null === le || void 0 === le ? void 0 : le.length) > 0 ? (0, Y.jsxs)(u.ScrollView, {
                    id: "save_money_scroll",
                    scrollY: !0,
                    enableFlex: !0,
                    enhanced: !0,
                    className: V.Z.scroll_wrap,
                    onScroll: function(e) {
                        e.detail.scrollTop > 40 ? We("white") : We();
                    },
                    children: [ (0, Y.jsx)(s.h, {}), (null === le || void 0 === le ? void 0 : le.length) > 1 && (0, 
                    Y.jsx)(u.View, {
                        className: V.Z.tab_holder
                    }), (0, Y.jsxs)(u.View, {
                        className: V.Z.card_wrap,
                        children: [ (0, Y.jsx)(u.Image, {
                            className: V.Z.card_banner,
                            src: ("Y" == (null === he || void 0 === he ? void 0 : he.canBuy) ? null === he || void 0 === he ? void 0 : he.pic : null === he || void 0 === he ? void 0 : he.afterBuyPic) || ""
                        }), "N" == (null === he || void 0 === he ? void 0 : he.canBuy) && (0, Y.jsxs)(u.View, {
                            className: V.Z.user_info_box,
                            children: [ (0, Y.jsx)(u.Image, {
                                className: V.Z.sx_tag,
                                src: d.zbX
                            }), (0, Y.jsxs)(u.View, {
                                className: V.Z.top_ctx,
                                children: [ (0, Y.jsx)(u.Image, {
                                    className: V.Z.portraitsUrl,
                                    src: z || ""
                                }), (0, Y.jsxs)(u.View, {
                                    className: V.Z.card_name_box,
                                    children: [ (0, Y.jsxs)(u.View, {
                                        className: V.Z.card_name_level,
                                        children: [ (0, Y.jsx)(u.View, {
                                            className: V.Z.card_name,
                                            children: K
                                        }), (0, Y.jsx)(u.Image, {
                                            className: V.Z.member_label,
                                            src: (0, I.K)(H || 0).levelPlate || ""
                                        }) ]
                                    }), (0, Y.jsxs)(u.View, {
                                        className: V.Z.card_time,
                                        children: [ he.cardExpireTime, "到期" ]
                                    }) ]
                                }) ]
                            }), null !== fe && void 0 !== fe && fe.availableDays && +fe.availableDays > 30 ? (0, 
                            Y.jsx)(u.View, {
                                className: V.Z.card_time_tip,
                                children: "每30天为您更新权益，记得领取哦"
                            }) : null ]
                        }) ]
                    }), (0, Y.jsxs)(u.View, {
                        className: V.Z.card_ctx,
                        children: [ null !== he && void 0 !== he && he.discountExplain ? (0, Y.jsxs)(u.View, {
                            className: V.Z.panel_title_wrap,
                            children: [ (0, Y.jsx)(u.Image, {
                                src: d.Wdp,
                                mode: "heightFix",
                                className: V.Z.panel_title_line
                            }), (0, Y.jsx)(u.View, {
                                className: V.Z.panel_title_text,
                                children: null === he || void 0 === he ? void 0 : he.discountExplain
                            }), (0, Y.jsx)(u.Image, {
                                src: d.Wdp,
                                mode: "heightFix",
                                className: m()(V.Z.panel_title_line, V.Z.panel_title_line_right)
                            }) ]
                        }) : (0, Y.jsx)(u.View, {
                            className: V.Z.panel_title_wrap_holder
                        }), (0, Y.jsx)(u.CustomWrapper, {
                            children: null !== he && void 0 !== he && he.detailList && (null === he || void 0 === he || null === (e = he.detailList) || void 0 === e ? void 0 : e.length) > 1 ? (0, 
                            Y.jsx)(u.ScrollView, {
                                id: "save_money_meal",
                                scrollX: !0,
                                enhanced: !0,
                                enableFlex: !0,
                                showScrollbar: !1,
                                className: V.Z.meal_wrap,
                                children: (0, Y.jsx)(u.View, {
                                    className: V.Z.meal_wrap_ctx,
                                    children: null === he || void 0 === he || null === (n = he.detailList) || void 0 === n ? void 0 : n.map(function(e, n) {
                                        return (0, Y.jsx)(W, {
                                            onClick: function() {
                                                _e(n), (0, k.pU)({
                                                    xcx_card_num: null === he || void 0 === he ? void 0 : he.cardNo,
                                                    xcx_is_buy: "未购买",
                                                    xcx_save_price: (Number(null === e || void 0 === e ? void 0 : e.salePrice) / 100).toFixed(2) || "be_ull"
                                                });
                                            },
                                            id: e.id,
                                            checked: +n == +xe,
                                            price: e.salePrice,
                                            tip: e.discountDescription,
                                            title: e.packageName,
                                            label: e.tagDescription,
                                            linePrice: e.crossedPrice
                                        }, e.id);
                                    })
                                })
                            }, he.cardNo) : null
                        }), (0, Y.jsx)(u.CustomWrapper, {
                            children: null === fe || void 0 === fe || null === (t = fe.moduleList) || void 0 === t ? void 0 : t.map(function(e, n) {
                                var t, i;
                                return 1 === e.type || 13 == e.type || 2 == e.type ? (0, Y.jsx)(L.P, {
                                    title: e.title,
                                    tip: e.subhead,
                                    children: null === (t = e.couponList) || void 0 === t ? void 0 : t.map(function(n) {
                                        return (0, Y.jsx)(D.G, {
                                            onClick: (0, r.Z)((0, o.Z)().mark(function t() {
                                                var i, r, l;
                                                return (0, o.Z)().wrap(function(t) {
                                                    while (1) switch (t.prev = t.next) {
                                                      case 0:
                                                        if ((0, k.XA)({
                                                            xcx_card_num: (null === he || void 0 === he ? void 0 : he.cardNo) || "be_null",
                                                            xcx_is_buy: "Y" == (null === he || void 0 === he ? void 0 : he.canBuy) ? "未购买" : "已购买",
                                                            xcx_coumodule_name: e.title,
                                                            xcx_coupon_name: n.templateName
                                                        }), "Y" != (null === he || void 0 === he ? void 0 : he.canBuy)) {
                                                            t.next = 4;
                                                            break;
                                                        }
                                                        return N.Gq.showToast("开卡后可领取"), t.abrupt("return");

                                                      case 4:
                                                        if ("Y" != n.hasDraw) {
                                                            t.next = 6;
                                                            break;
                                                        }
                                                        return t.abrupt("return");

                                                      case 6:
                                                        return t.next = 8, T.T.getTempllds();

                                                      case 8:
                                                        i = t.sent, r = i["equity"], l = r.tmplldIds.map(function(e) {
                                                            return e.templateId;
                                                        }), T.T.subscribeMessage(l).then(function(t) {
                                                            T.T.subscribeMessageTracker(t, r.tmplldIds, r.name), nn({
                                                                orderNo: (null === he || void 0 === he ? void 0 : he.orderNo) || "",
                                                                type: e.type + "",
                                                                buyRecordDetailId: n.orderDetailId
                                                            }, e.configType, n, e.couponList);
                                                        }).catch(function() {
                                                            nn({
                                                                orderNo: (null === he || void 0 === he ? void 0 : he.orderNo) || "",
                                                                type: e.type + "",
                                                                buyRecordDetailId: n.orderDetailId
                                                            }, e.configType, n, e.couponList);
                                                        });

                                                      case 12:
                                                      case "end":
                                                        return t.stop();
                                                    }
                                                }, t);
                                            })),
                                            haveDraw: n.hasDraw,
                                            title: 1 == e.type ? "堂食券" : 13 == e.type ? "商城券" : "外卖券",
                                            type: 1 == e.type ? n.couponType : 2,
                                            discount: (0, Z.A$)(1 == e.type ? n.couponType : 2, n.maxDiscountCount, n.maxDiscountValue, n.discountValue),
                                            threshold: (0, Z.su)(1 == e.type ? n.couponType : 2, n.minConsumeCount, n.minConsumeValue)
                                        }, (0, N.Vj)());
                                    })
                                }) : (0, Y.jsx)(L.L, {
                                    title: e.title,
                                    tip: e.subhead,
                                    children: null === (i = e.notCouponBenefit) || void 0 === i ? void 0 : i.map(function(n) {
                                        return (0, Y.jsx)(O.p, {
                                            onClick: function() {
                                                (0, k.RO)({
                                                    xcx_is_buy: "Y" == (null === he || void 0 === he ? void 0 : he.canBuy) ? "未购买" : "已购买",
                                                    xcx_card_num: (null === he || void 0 === he ? void 0 : he.cardNo) || "be_null",
                                                    xcx_equity_name: n.benefitDescription,
                                                    xcx_equmodule_name: e.title
                                                }), "Y" != (null === he || void 0 === he ? void 0 : he.canBuy) && "Y" != n.hasDraw && nn({
                                                    orderNo: (null === he || void 0 === he ? void 0 : he.orderNo) || "",
                                                    type: n.type + "",
                                                    buyRecordDetailId: n.orderDetailId
                                                }, e.configType, n, e.notCouponBenefit);
                                            },
                                            type: n.type,
                                            canBuy: (null === he || void 0 === he ? void 0 : he.canBuy) || "Y",
                                            hasDraw: n.hasDraw,
                                            title: n.benefitDescription,
                                            tip: n.subheadDescription,
                                            icon: n.fileUrl,
                                            openCode: function() {
                                                (0, k.RO)({
                                                    xcx_is_buy: "Y" == (null === he || void 0 === he ? void 0 : he.canBuy) ? "未购买" : "已购买",
                                                    xcx_card_num: (null === he || void 0 === he ? void 0 : he.cardNo) || "be_null",
                                                    xcx_equity_name: n.benefitDescription,
                                                    xcx_equmodule_name: e.title
                                                }), pn({
                                                    orderNo: (null === he || void 0 === he ? void 0 : he.orderNo) || "",
                                                    type: n.type + "",
                                                    buyRecordDetailId: n.orderDetailId
                                                });
                                            }
                                        }, n.type);
                                    })
                                });
                            })
                        }), (0, Y.jsxs)(u.View, {
                            className: m()(V.Z.list_panel, (0, c.Z)({}, V.Z.canbuy, "Y" == (null === he || void 0 === he ? void 0 : he.canBuy))),
                            children: [ (0, Y.jsx)(B.H, {
                                icon: d.AGf,
                                text: "活动规则说明",
                                onClick: function() {
                                    (0, k.Z8)({
                                        xcx_card_num: (null === he || void 0 === he ? void 0 : he.cardNo) || "be_null",
                                        xcx_is_buy: "Y" == (null === he || void 0 === he ? void 0 : he.canBuy) ? "未购买" : "已购买"
                                    }), Ee(1);
                                }
                            }), null !== he && void 0 !== he && he.benefitIntro ? (0, Y.jsx)(B.H, {
                                icon: d.roX,
                                text: "权益详情介绍",
                                onClick: function() {
                                    (0, k.Ko)({
                                        xcx_card_num: (null === he || void 0 === he ? void 0 : he.cardNo) || "be_null",
                                        xcx_is_buy: "Y" == (null === he || void 0 === he ? void 0 : he.canBuy) ? "未购买" : "已购买"
                                    }), Ee(2);
                                }
                            }) : null, null !== he && void 0 !== he && he.commonProblem ? (0, Y.jsx)(B.H, {
                                icon: d.Vs8,
                                text: "常见问题",
                                onClick: function() {
                                    (0, k.l7)({
                                        xcx_card_num: (null === he || void 0 === he ? void 0 : he.cardNo) || "be_null",
                                        xcx_is_buy: "Y" == (null === he || void 0 === he ? void 0 : he.canBuy) ? "未购买" : "已购买"
                                    }), Ee(3);
                                }
                            }) : null ]
                        }) ]
                    }), "Y" == (null === he || void 0 === he ? void 0 : he.canBuy) && (0, Y.jsxs)(u.View, {
                        className: V.Z.buy_wrap,
                        children: [ (0, Y.jsxs)(u.View, {
                            className: V.Z.buy_xieyi,
                            onClick: Oe,
                            children: [ (0, Y.jsx)(u.Image, {
                                className: V.Z.buy_xieyi_icon,
                                src: Ve ? d.yAE : d.BF5
                            }), (0, Y.jsx)(u.View, {
                                className: V.Z.buy_xieyi_text,
                                children: "我已阅读并同意"
                            }), (0, Y.jsx)(u.View, {
                                className: V.Z.buy_xieyi_red,
                                onClick: function(e) {
                                    e.stopPropagation(), Ee(4);
                                },
                                children: "《购买须知》"
                            }) ]
                        }), (0, Y.jsxs)(u.View, {
                            className: V.Z.buy_btn_box,
                            children: [ null !== he && void 0 !== he && he.detailList && 1 == (null === he || void 0 === he || null === (i = he.detailList) || void 0 === i ? void 0 : i.length) && null !== fe && void 0 !== fe && fe.tagDescription ? (0, 
                            Y.jsx)(u.View, {
                                className: V.Z.slogan,
                                children: null === fe || void 0 === fe ? void 0 : fe.tagDescription
                            }) : null, (0, Y.jsxs)(u.View, {
                                className: V.Z.money_box,
                                children: [ (0, Y.jsx)(u.Text, {
                                    className: m()(V.Z.money_unit),
                                    children: "¥"
                                }), null !== fe && void 0 !== fe && fe.salePrice ? (0, Y.jsx)(u.Text, {
                                    className: m()(V.Z.money_num_int),
                                    children: +(+fe.salePrice / 100).toFixed(2)
                                }) : null, null !== fe && void 0 !== fe && fe.crossedPrice ? (0, Y.jsxs)(u.Text, {
                                    className: m()(V.Z.money_crossed),
                                    children: [ "¥", +fe.crossedPrice / 100 ]
                                }) : null ]
                            }), (0, Y.jsx)(u.Image, {
                                onClick: (0, r.Z)((0, o.Z)().mark(function e() {
                                    var n, t, i;
                                    return (0, o.Z)().wrap(function(e) {
                                        while (1) switch (e.prev = e.next) {
                                          case 0:
                                            if ((0, k.bj)({
                                                xcx_is_buy: "Y" == (null === he || void 0 === he ? void 0 : he.canBuy) ? "未购买" : "已购买",
                                                xcx_card_num: (null === he || void 0 === he ? void 0 : he.cardNo) || "be_null",
                                                xcx_save_price: (Number(null === fe || void 0 === fe ? void 0 : fe.salePrice) / 100).toFixed(2) || "be_ull"
                                            }), Ve) {
                                                e.next = 4;
                                                break;
                                            }
                                            return N.Gq.showToast("请阅读并勾选《购买须知》"), e.abrupt("return");

                                          case 4:
                                            return e.next = 6, T.T.getTempllds();

                                          case 6:
                                            n = e.sent, t = n["equity"], i = t.tmplldIds.map(function(e) {
                                                return e.templateId;
                                            }), T.T.subscribeMessage(i, !0).then(function(e) {
                                                T.T.subscribeMessageTracker(e, t.tmplldIds, t.name), Qe((null === fe || void 0 === fe ? void 0 : fe.id) || "");
                                            }).catch(function() {
                                                Qe((null === fe || void 0 === fe ? void 0 : fe.id) || "");
                                            });

                                          case 10:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                })),
                                className: V.Z.buy_btn_button,
                                src: d.Bnv
                            }) ]
                        }) ]
                    }) ]
                }) : (0, Y.jsxs)(u.View, {
                    className: V.Z.empty_wrap,
                    children: [ (0, Y.jsx)(C.W, {}), (0, Y.jsx)(S.j, {
                        src: d.q,
                        top: 258,
                        text: "暂无会员卡活动，敬请期待"
                    }) ]
                }), (0, Y.jsx)(G.L, {
                    isoOpened: Ue.isOpened,
                    id: Ue.title + (null === fe || void 0 === fe ? void 0 : fe.id) + (null === he || void 0 === he ? void 0 : he.cardNo),
                    title: Ue.title,
                    text: Ue.text,
                    closeRule: Ae
                }), (0, Y.jsx)(q.Y, {
                    onClose: function() {
                        an({
                            title: "",
                            tip: "",
                            isOpened: !1
                        });
                    },
                    onReceive: function() {
                        tn({
                            orderNo: (null === he || void 0 === he ? void 0 : he.orderNo) || "",
                            type: Ne.current.type + "",
                            buyRecordDetailId: Ne.current.buyRecordDetailId + ""
                        });
                    },
                    isOpened: ln.isOpened,
                    title: ln.title,
                    tip: ln.tip
                }), (0, Y.jsx)(F.s, {
                    codeList: un.codeList,
                    isOpened: un.isOpened,
                    channel: un.codeTypeTip,
                    onClose: function() {
                        dn({
                            codeList: [],
                            isOpened: !1,
                            codeTypeTip: ""
                        });
                    }
                }) ]
            }) : null : (0, Y.jsxs)(u.View, {
                className: V.Z.no_login_page,
                children: [ (0, Y.jsx)(s.Y, {
                    title: "省钱卡",
                    leftStyle: {
                        display: "none"
                    },
                    titleStyle: {
                        fontWeight: "bold"
                    }
                }), (0, Y.jsx)(s.h, {}), (0, Y.jsx)(X.$Y, {}) ]
            });
        }, H = z, J = {
            navigationStyle: "custom"
        };
        Page((0, i.createPageConfig)(H, "pages/saveMoney/index", {
            root: {
                cn: []
            }
        }, J || {}));
    }
}, function(e) {
    var n = function(n) {
        return e(e.s = n);
    };
    e.O(0, [ 62107, 11216, 68592 ], function() {
        return n(54932);
    });
    e.O();
} ]);