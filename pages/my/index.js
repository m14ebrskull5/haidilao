(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 82825 ], {
    73846: function(e, i, n) {
        var t = n(32180), _ = n(57543), c = n(77886), a = n(65712), s = n(3701), o = n(71515), r = n(19190), l = n(67294), m = n(47007), u = n(92954), d = n.n(u), x = n(85291), g = n(40849), p = n(56904), h = n(94184), f = n.n(h), w = n(82197), j = n(44380), N = n(3594), y = n(13066), k = {
            notice_box: "index-module__notice_box___vvFHk",
            notice_icon_box: "index-module__notice_icon_box___tJKAW",
            notice_list_con: "index-module__notice_list_con___LETjU",
            notice_list_copy: "index-module__notice_list_copy___oxquU",
            notice_icon: "index-module__notice_icon___z9WH5",
            notice_text: "index-module__notice_text___H3C8w",
            line: "index-module__line___K4omg",
            notice_con: "index-module__notice_con___s6u74",
            notice_list: "index-module__notice_list___kifcR",
            notice_item: "index-module__notice_item___y1yTY",
            imgbox: "index-module__imgbox___eGg3P",
            notice_jt: "index-module__notice_jt___Tn2Xg"
        }, b = n(85893), v = function(e, i) {
            return {
                transform: "translateX(".concat(-e, "px)"),
                transitionProperty: "transform",
                transitionDuration: "".concat(i, "s"),
                transitionTimingFunction: "linear",
                transformOrigin: "50% 50% 0",
                "-webkit-transform": "translateX(".concat(-e, "px)"),
                "-webkit-transition-property": "transform",
                "-webkit-transition-duration": "".concat(i, "s"),
                "-webkit-transition-timing-function": "linear",
                "-webkit-transform-origin": " 50% 50% 0"
            };
        }, V = function(e, i) {
            var n = e.list, t = e.className, _ = void 0 === t ? "" : t, c = (0, l.useState)({}), s = (0, 
            a.Z)(c, 2), m = s[0], u = s[1], x = (0, l.useRef)(null), g = (0, l.useState)(0), p = (0, 
            a.Z)(g, 2), h = p[0], w = p[1];
            (0, l.useImperativeHandle)(i, function() {
                return {
                    resetAni: function() {
                        j();
                    }
                };
            });
            var j = function() {
                var e = 40;
                u({}), clearTimeout(x.current), x.current = setTimeout(function() {
                    if (h) d().nextTick(function() {
                        var i = h / +e;
                        u(v(h, i));
                    }); else {
                        var i = d().createSelectorQuery();
                        i.select(".".concat(k.notice_list_con)).boundingClientRect().exec(function(i) {
                            var n = i[0];
                            if (n) {
                                var t = n.width;
                                w(t);
                                var _ = t / +e;
                                u(v(t, _));
                            }
                        });
                    }
                }, 0);
            }, V = (0, N.Z)(function(e) {
                -1 === e.indexOf("http") && (e = y.O_ + e), d().navigateTo({
                    url: "/pages/wxMemberWebView/index?url=".concat(encodeURIComponent(e))
                });
            }, {
                wait: 500,
                trailing: !1
            }), Z = V.run;
            return (0, l.useEffect)(function() {
                w(0), j();
            }, [ n ]), n && n.length > 0 ? (0, b.jsxs)(o.View, {
                className: f()(k.notice_box, _),
                children: [ (0, b.jsxs)(o.View, {
                    className: k.notice_icon_box,
                    children: [ (0, b.jsx)(o.Image, {
                        className: k.notice_icon,
                        src: r.ZPm.notice
                    }), (0, b.jsx)(o.Text, {
                        className: k.notice_text,
                        children: "公告"
                    }), (0, b.jsx)(o.View, {
                        className: k.line
                    }) ]
                }), (0, b.jsx)(o.View, {
                    className: k.notice_con,
                    id: "noticeBox",
                    onClick: function() {
                        Z(n[0].href);
                    },
                    children: (0, b.jsxs)(o.View, {
                        className: k.notice_list,
                        id: "noticeList",
                        style: m,
                        onTransitionEnd: function() {
                            j();
                        },
                        children: [ (0, b.jsx)(o.View, {
                            id: "noticeListTrue",
                            className: k.notice_list_con,
                            children: n.map(function(e, i) {
                                return (0, b.jsx)(o.View, {
                                    className: k.notice_item,
                                    children: e.title
                                }, i);
                            })
                        }), (0, b.jsx)(o.View, {
                            id: "noticeListCopy",
                            className: k.notice_list_copy,
                            children: n.map(function(e, i) {
                                return (0, b.jsx)(o.View, {
                                    className: k.notice_item,
                                    children: e.title
                                }, i);
                            })
                        }) ]
                    })
                }), (0, b.jsx)(o.View, {
                    className: k.imgbox,
                    onClick: function() {
                        Z(n[0].href);
                    },
                    children: (0, b.jsx)(o.Image, {
                        className: k.notice_jt,
                        src: r.ZPm.jt_red
                    })
                }) ]
            }) : null;
        }, Z = (0, l.forwardRef)(V);
        Z.displayName = "NoticeBar";
        var T = n(2418), I = n(45952), C = n(35299), P = n(70420), O = n(47525), R = n(87481), S = n(32537), A = n(40405), M = {
            item: "index-module__item___yMIm3",
            item_icon: "index-module__item_icon___hiVhD",
            item_num: "index-module__item_num___R2DhJ",
            money_icon: "index-module__money_icon___QTk4U",
            money_num: "index-module__money_num___MC5n4",
            money_decimals: "index-module__money_decimals___fohba",
            other_num: "index-module__other_num___Jkf9f",
            other_num_no: "index-module__other_num_no___V1Sq7",
            other_num_no_text: "index-module__other_num_no_text___FhUqx",
            item_title: "index-module__item_title___auC8R",
            tip: "index-module__tip___SdiRg",
            scale: "index-module__scale___gwNgL",
            tip_text: "index-module__tip_text___gNQyg"
        }, L = function(e) {
            var i = e.onClick, n = e.icon, t = e.title, _ = e.num, c = e.tip, s = void 0 !== c && c, r = e.topTip, m = e.bottomTip, u = e.isMoney, d = void 0 !== u && u, x = (0, 
            l.useState)(""), g = (0, a.Z)(x, 2), p = g[0], h = g[1];
            return (0, l.useEffect)(function() {
                if ("***" !== _) if ("敬请期待" !== _) if (d) {
                    var e = Number(_).toFixed(2).split(".");
                    h((0, b.jsxs)(b.Fragment, {
                        children: [ (0, b.jsx)(o.View, {
                            className: M.money_icon,
                            children: "¥"
                        }), (0, b.jsx)(o.View, {
                            className: M.money_num,
                            children: e[0]
                        }), (0, b.jsxs)(o.View, {
                            className: M.money_decimals,
                            children: [ ".", e[1] || "00" ]
                        }) ]
                    }));
                } else h((0, b.jsx)(o.View, {
                    className: M.other_num,
                    children: _
                })); else h((0, b.jsx)(o.View, {
                    className: M.other_num_no_text,
                    children: "敬请期待"
                })); else h((0, b.jsx)(o.View, {
                    className: M.other_num_no,
                    children: "***"
                }));
            }, [ d, _ ]), (0, b.jsxs)(o.View, {
                className: M.item,
                onClick: function() {
                    null === i || void 0 === i || i();
                },
                children: [ n ? (0, b.jsx)(o.Image, {
                    className: M.item_icon,
                    src: n
                }) : "", (0, b.jsx)(o.View, {
                    className: f()(M.item_num, "gilroy_bold"),
                    children: p
                }), (0, b.jsx)(o.Text, {
                    className: M.item_title,
                    children: t
                }), s ? (0, b.jsxs)(o.View, {
                    className: f()("gilroy_bold", M.tip),
                    children: [ (0, b.jsx)(o.Text, {
                        className: M.tip_text,
                        children: r
                    }), (0, b.jsx)(o.Text, {
                        className: M.tip_text,
                        children: m
                    }) ]
                }) : null ]
            });
        }, B = {
            page: "my-module__page___ne7v7",
            banner_bg: "my-module__banner_bg___a4tsL",
            main_wrap: "my-module__main_wrap___mH_rO",
            header_wrap: "my-module__header_wrap___MGlB6",
            login_btn: "my-module__login_btn___0ChVk",
            user_info: "my-module__user_info___lBOZm",
            user_hello: "my-module__user_hello___Xcv3l",
            hello: "my-module__hello___JBJkp",
            slogan: "my-module__slogan___yJbI7",
            user_header: "my-module__user_header___XzvAw",
            property: "my-module__property___nXnrm",
            property_bg: "my-module__property_bg___uhFjt",
            hihi: "my-module__hihi____2yjx",
            property_list_wrap: "my-module__property_list_wrap___PjEss",
            property_title: "my-module__property_title___azatw",
            notice: "my-module__notice___KSV2c",
            point_wrap: "my-module__point_wrap___qaG82",
            point_item: "my-module__point_item___FkCTg",
            point_img: "my-module__point_img___TOZgZ",
            point_text: "my-module__point_text___Ts_V3",
            point_line: "my-module__point_line___Y5R0w",
            panel_wrap: "my-module__panel_wrap___RWsgm",
            row: "my-module__row___jx5Rw",
            notice_box: "my-module__notice_box___I6Ojs",
            notice_icon_box: "my-module__notice_icon_box___a6DZ9",
            notice_icon: "my-module__notice_icon___cy8t0",
            line: "my-module__line___BhSyM",
            notice_bar: "my-module__notice_bar___mx23E",
            login_out: "my-module__login_out___EpYk3",
            login_out_icon: "my-module__login_out_icon___gCnR4",
            scan_wrap: "my-module__scan_wrap___rBweP",
            scan_box: "my-module__scan_box___XJ2AG",
            scan: "my-module__scan___KmSHa",
            scan_w: "my-module__scan_w___QfMMz",
            scan_icon: "my-module__scan_icon___arUeq",
            function_list: "my-module__function_list___k5CFw",
            function_item: "my-module__function_item___jsXoA",
            item_left: "my-module__item_left____CJgv",
            item_icon: "my-module__item_icon___OdaYY",
            item_text: "my-module__item_text___h42js",
            item_text_remark: "my-module__item_text_remark___iU8KA",
            item_text_remark_check: "my-module__item_text_remark_check___tIEp0",
            item_text_remark_check_icon: "my-module__item_text_remark_check_icon___iAhrt",
            item_text_remark_nocheck: "my-module__item_text_remark_nocheck___fVUmw",
            item_right: "my-module__item_right___PMIHO"
        }, q = function(e) {
            return (0, b.jsx)(o.View, {
                className: B.scan_box,
                children: (0, b.jsxs)(o.View, {
                    className: f()(B.scan, (0, s.Z)({}, B.scan_w, "white" === e.theme)),
                    onClick: function() {
                        var i;
                        null === e || void 0 === e || null === (i = e.onClick) || void 0 === i || i.call(e);
                    },
                    children: [ (0, b.jsx)(o.Image, {
                        className: B.scan_icon,
                        src: "black" === e.theme ? r.ZPm.scan_b : r.ZPm.scan_w
                    }), (0, b.jsx)(o.Text, {
                        className: B.scan_text,
                        children: "扫一扫"
                    }) ]
                })
            });
        }, U = function() {
            var e = (0, m.v9)(function(e) {
                return e.user;
            }), i = (0, m.v9)(function(e) {
                return e.user.isLogin;
            }), n = (0, m.I0)(), t = (0, l.useRef)(null), s = (0, l.useState)([]), h = (0, a.Z)(s, 2), y = h[0], k = h[1], v = (0, 
            l.useState)(!1), V = (0, a.Z)(v, 2), M = V[0], U = V[1], F = (0, l.useState)(""), J = (0, 
            a.Z)(F, 2), E = J[0], G = J[1], X = function() {
                C.Gq.showLoading(), g.ZP.getNotice().then(function(e) {
                    var i, n;
                    (C.Gq.hideLoading(), null !== e && void 0 !== e && null !== (i = e.data) && void 0 !== i && i.data) && k(null === e || void 0 === e || null === (n = e.data) || void 0 === n ? void 0 : n.data);
                }).catch(function() {
                    C.Gq.hideLoading();
                });
            }, H = function() {
                var e = (0, c.Z)((0, _.Z)().mark(function e() {
                    var i;
                    return (0, _.Z)().wrap(function(e) {
                        while (1) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, g.ZP.queryCouponNum();

                          case 2:
                            i = e.sent, n((0, x.ps)({
                                newCouponNum: i
                            }));

                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }));
                return function() {
                    return e.apply(this, arguments);
                };
            }(), W = (0, l.useState)(0), D = (0, a.Z)(W, 2), Y = D[0], z = D[1], K = (0, l.useState)(0), Q = (0, 
            a.Z)(K, 2), $ = Q[0], ee = Q[1], ie = function() {
                var e = (0, c.Z)((0, _.Z)().mark(function e() {
                    var i;
                    return (0, _.Z)().wrap(function(e) {
                        while (1) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, (0, g.JR)();

                          case 2:
                            i = e.sent, z(i);

                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }));
                return function() {
                    return e.apply(this, arguments);
                };
            }(), ne = function() {
                (0, p.pO)().then(function(e) {
                    var i = e.useCardNum + e.prensetCardNum || 0;
                    ee(i);
                });
            }, te = function() {
                (0, p.VT)().then(function(e) {
                    G(e.status);
                });
            }, _e = function() {
                H(), ie(), ne(), te(), I.B.getUserInfo(), (0, A._g)().then(function(e) {
                    U("Y" === e);
                });
            };
            (0, l.useEffect)(function() {
                i ? _e() : U(!1);
            }, [ i ]);
            var ce = (0, N.Z)(function() {
                (0, O.S_)("我的"), (0, O.sd)();
            }, {
                wait: 1e3,
                trailing: !1
            }), ae = ce.run;
            (0, u.useDidShow)((0, c.Z)((0, _.Z)().mark(function i() {
                return (0, _.Z)().wrap(function(i) {
                    while (1) switch (i.prev = i.next) {
                      case 0:
                        if (ae(), X(), !e.isLogin) {
                            i.next = 6;
                            break;
                        }
                        _e(), i.next = 16;
                        break;

                      case 6:
                        return C.Gq.showLoading(""), i.prev = 7, i.next = 10, I.B.login();

                      case 10:
                        i.next = 15;
                        break;

                      case 12:
                        i.prev = 12, i.t0 = i["catch"](7), console.log(i.t0);

                      case 15:
                        C.Gq.hideLoading();

                      case 16:
                      case "end":
                        return i.stop();
                    }
                }, i, null, [ [ 7, 12 ] ]);
            }))), (0, u.useTabItemTap)(function() {
                C.Gq.setCoinTip(!1), d().setStorageSync(T.nJ, !0), (0, O.GL)();
            });
            var se = (0, N.Z)(function() {
                (0, O.OI)({
                    current_page: "我的",
                    click_location: "退出登录"
                }), d().showModal({
                    confirmText: "再想想",
                    confirmColor: "#F33429",
                    cancelText: "确认",
                    cancelColor: "#323233",
                    content: "您确认要退出登录吗？",
                    success: function(e) {
                        var i;
                        e.cancel && I.B.unBind().then(null === (i = t.current) || void 0 === i ? void 0 : i.resetAni);
                    }
                });
            }, {
                wait: 500,
                trailing: !1
            }), oe = se.run, re = (0, N.Z)((0, c.Z)((0, _.Z)().mark(function e() {
                var n, t, c, a;
                return (0, _.Z)().wrap(function(e) {
                    while (1) switch (e.prev = e.next) {
                      case 0:
                        if ((0, O.OI)({
                            current_page: "我的",
                            click_location: "捞币明细"
                        }), !i) {
                            e.next = 21;
                            break;
                        }
                        return e.prev = 2, e.next = 5, R.T.getTempllds();

                      case 5:
                        return n = e.sent, t = n["coin"], c = t.tmplldIds.map(function(e) {
                            return e.templateId;
                        }), e.next = 10, R.T.subscribeMessage(c);

                      case 10:
                        a = e.sent, R.T.subscribeMessageTracker(a, t.tmplldIds, t.name), d().navigateTo({
                            url: "/propertyPackage/pages/base/lbDetailed/index"
                        }), e.next = 19;
                        break;

                      case 15:
                        e.prev = 15, e.t0 = e["catch"](2), console.log(e.t0), d().navigateTo({
                            url: "/propertyPackage/pages/base/lbDetailed/index"
                        });

                      case 19:
                        e.next = 22;
                        break;

                      case 21:
                        (0, C.R9)("/propertyPackage/pages/base/lbDetailed/index");

                      case 22:
                      case "end":
                        return e.stop();
                    }
                }, e, null, [ [ 2, 15 ] ]);
            })), {
                wait: 500,
                trailing: !1
            }), le = re.run, me = (0, N.Z)(function() {
                (0, O.OI)({
                    current_page: "我的",
                    click_location: "优惠券"
                }), i ? d().navigateTo({
                    url: "/propertyPackage/pages/base/myCoupon/index"
                }) : d().navigateTo({
                    url: "/pages/login/index?backUrl=" + encodeURIComponent("/propertyPackage/pages/base/myCoupon/index")
                });
            }, {
                wait: 500,
                trailing: !1
            }), ue = me.run, de = (0, N.Z)(function() {
                (0, O.OI)({
                    current_page: "我的",
                    click_location: "卡包"
                }), (0, O.cw)(), i ? d().navigateTo({
                    url: "/propertyPackage/pages/cardBag/index"
                }) : (0, C.R9)("/propertyPackage/pages/cardBag/index");
            }, {
                wait: 500,
                trailing: !1
            }), xe = de.run, ge = (0, N.Z)(function() {
                (0, O.OI)({
                    current_page: "我的",
                    click_location: "线上欢乐卡"
                }), i ? d().navigateTo({
                    url: "/hicardPackage/pages/index/index"
                }) : (0, C.R9)("/hicardPackage/pages/index/index");
            }, {
                wait: 500,
                trailing: !1
            }), pe = ge.run, he = (0, N.Z)(function() {
                if ((0, O.OI)({
                    current_page: "我的",
                    click_location: "扫一扫"
                }), i) {
                    var e = d().getStorageSync(S.a.CAMERA_AUTH);
                    e ? (0, C.SX)() : d().showModal({
                        title: "“海底捞”想要申请访问您的相机",
                        content: "请允许海底捞使用您的相机，用于扫一扫，识别二维码。",
                        confirmText: "同意",
                        confirmColor: "#F33429",
                        cancelText: "拒绝",
                        cancelColor: "#323233",
                        success: function(e) {
                            e.confirm && (d().setStorageSync(S.a.CAMERA_AUTH, !0), (0, C.SX)());
                        }
                    });
                } else (0, C.R9)();
            }, {
                wait: 500,
                trailing: !1
            }), fe = he.run, we = (0, N.Z)(function() {
                (0, C.R9)();
            }, {
                wait: 500,
                trailing: !1
            }), je = we.run, Ne = (0, N.Z)(function() {
                (0, O.OI)({
                    current_page: "我的",
                    click_location: "就餐偏好"
                }), d().navigateTo({
                    url: "/pages/repastPreference/index"
                });
            }, {
                wait: 500,
                trailing: !1
            }), ye = Ne.run, ke = (0, N.Z)(function() {
                (0, O.OI)({
                    current_page: "我的",
                    click_location: "个人资料"
                }), i ? d().navigateTo({
                    url: "/pages/memberInfo/index"
                }) : (0, C.R9)("/pages/memberInfo/index");
            }, {
                wait: 500,
                trailing: !1
            }), be = ke.run, ve = (0, N.Z)(function() {
                (0, O.OI)({
                    current_page: "我的",
                    click_location: "发票中心"
                }), i ? d().navigateTo({
                    url: "/invoicePackage/pages/index/index"
                }) : (0, C.R9)();
            }, {
                wait: 500,
                trailing: !1
            }), Ve = ve.run, Ze = (0, N.Z)(function() {
                (0, O.OI)({
                    current_page: "我的",
                    click_location: "线下活动"
                }), i ? d().navigateTo({
                    url: "/pages/joinActive/index"
                }) : (0, C.R9)("/pages/joinActive/index");
            }, {
                wait: 500,
                trailing: !1
            }), Te = Ze.run;
            return (0, b.jsxs)(o.View, {
                className: B.page,
                children: [ (0, b.jsxs)(o.View, {
                    className: B.scan_wrap,
                    children: [ (0, b.jsx)(P.W, {}), (0, b.jsx)(q, {
                        onClick: function() {
                            fe();
                        },
                        theme: "white"
                    }) ]
                }), (0, b.jsx)(o.Image, {
                    src: r.ZPm.my_header_bg,
                    className: B.banner_bg
                }), (0, b.jsxs)(o.View, {
                    className: B.main_wrap,
                    children: [ (0, b.jsxs)(o.View, {
                        className: B.header_wrap,
                        children: [ (0, b.jsxs)(o.View, {
                            className: B.user_info,
                            children: [ (0, b.jsx)(o.Image, {
                                className: B.user_header,
                                src: i ? e.portraitsUrl : r.ZPm.normal_header
                            }), (0, b.jsxs)(o.View, {
                                className: B.user_hello,
                                children: [ (0, b.jsx)(o.View, {
                                    className: B.hello,
                                    children: i ? e.customerName : "欢迎来到海底捞"
                                }), (0, b.jsx)(o.View, {
                                    className: B.slogan,
                                    children: i ? e.moodWords : "马上登录，查看优惠信息"
                                }) ]
                            }) ]
                        }), !i && (0, b.jsx)(o.Image, {
                            className: B.login_btn,
                            src: r.ZPm.index_header_login_btn,
                            onClick: function() {
                                je();
                            }
                        }) ]
                    }), (0, b.jsxs)(o.View, {
                        className: B.property,
                        children: [ (0, b.jsx)(o.Image, {
                            className: B.property_bg,
                            src: r.ZPm.property_panel_bg
                        }), (0, b.jsxs)(o.View, {
                            className: B.property_list_wrap,
                            children: [ i && (0, b.jsx)(o.Image, {
                                className: B.hihi,
                                src: r.ZPm.hihi
                            }), (0, b.jsx)(L, {
                                onClick: function() {
                                    ue();
                                },
                                num: i ? e.newCouponNum || "0" : "***",
                                title: "优惠券"
                            }), (0, b.jsx)(L, {
                                onClick: function() {
                                    le();
                                },
                                num: i ? e.coinNum || "0" : "***",
                                title: "捞币"
                            }), (0, b.jsx)(L, {
                                onClick: function() {
                                    xe();
                                },
                                num: i ? Y || "0" : "***",
                                title: "卡包"
                            }), (0, b.jsx)(L, {
                                onClick: function() {
                                    pe();
                                },
                                topTip: "购卡有礼",
                                num: i ? $ || "0" : "***",
                                title: "线上欢乐卡"
                            }) ]
                        }), (0, b.jsx)(o.View, {
                            className: B.notice,
                            children: (0, b.jsx)(Z, {
                                list: y,
                                ref: t
                            })
                        }) ]
                    }), (0, b.jsxs)(o.View, {
                        className: f()(B.panel_wrap, B.point_wrap),
                        children: [ (0, b.jsxs)(o.View, {
                            className: B.point_item,
                            onClick: function() {
                                Te();
                            },
                            children: [ (0, b.jsx)(o.Image, {
                                className: B.point_img,
                                src: r.ZPm.icon_xxhd
                            }), (0, b.jsx)(o.Text, {
                                className: B.point_text,
                                children: "线下活动"
                            }) ]
                        }), (0, b.jsx)(o.View, {
                            className: B.point_item,
                            children: (0, b.jsx)(o.View, {
                                className: B.point_line
                            })
                        }), (0, b.jsxs)(o.View, {
                            className: B.point_item,
                            onClick: function() {
                                Ve();
                            },
                            children: [ (0, b.jsx)(o.Image, {
                                className: B.point_img,
                                src: r.ZPm.icon_fpzx
                            }), (0, b.jsx)(o.Text, {
                                className: B.point_text,
                                children: "发票中心"
                            }) ]
                        }) ]
                    }), (0, b.jsxs)(o.View, {
                        className: f()(B.panel_wrap, B.function_list),
                        children: [ e.isLogin && Number(e.memberLevel) >= 4 ? (0, b.jsxs)(o.View, {
                            className: B.function_item,
                            onClick: function() {
                                (0, O.OI)({
                                    current_page: "我的",
                                    click_location: "会员二维码"
                                }), d().navigateTo({
                                    url: "/propertyPackage/pages/blackQrcode/index"
                                });
                            },
                            children: [ (0, b.jsxs)(o.View, {
                                className: B.item_left,
                                children: [ (0, b.jsx)(o.Image, {
                                    className: B.item_icon,
                                    src: r.gxh
                                }), (0, b.jsx)(o.Text, {
                                    className: B.item_text,
                                    children: "会员二维码"
                                }) ]
                            }), (0, b.jsx)(o.Image, {
                                className: B.item_right,
                                src: r.ZPm.jtright10
                            }) ]
                        }) : null, M && (0, b.jsxs)(o.View, {
                            className: B.function_item,
                            onClick: function() {
                                ye();
                            },
                            children: [ (0, b.jsxs)(o.View, {
                                className: B.item_left,
                                children: [ (0, b.jsx)(o.Image, {
                                    className: B.item_icon,
                                    src: r.ZPm.preference_icon
                                }), (0, b.jsx)(o.Text, {
                                    className: B.item_text,
                                    children: "就餐偏好"
                                }) ]
                            }), (0, b.jsx)(o.Image, {
                                className: B.item_right,
                                src: r.ZPm.jtright10
                            }) ]
                        }), (0, b.jsxs)(o.View, {
                            className: B.function_item,
                            onClick: function() {
                                be();
                            },
                            children: [ (0, b.jsxs)(o.View, {
                                className: B.item_left,
                                children: [ (0, b.jsx)(o.Image, {
                                    className: B.item_icon,
                                    src: r.ZPm.user_more_info
                                }), (0, b.jsx)(o.Text, {
                                    className: B.item_text,
                                    children: "个人资料"
                                }) ]
                            }), (0, b.jsx)(o.Image, {
                                className: B.item_right,
                                src: r.ZPm.jtright10
                            }) ]
                        }), (0, b.jsxs)(o.View, {
                            className: B.function_item,
                            onClick: function() {
                                (0, O.OI)({
                                    current_page: "我的",
                                    click_location: "会员须知"
                                }), d().navigateTo({
                                    url: "/pages/wxMemberWebView/index?type=notice"
                                });
                            },
                            children: [ (0, b.jsxs)(o.View, {
                                className: B.item_left,
                                children: [ (0, b.jsx)(o.Image, {
                                    className: B.item_icon,
                                    src: r.ZPm.vip_icon
                                }), (0, b.jsx)(o.Text, {
                                    className: B.item_text,
                                    children: "会员须知"
                                }) ]
                            }), (0, b.jsx)(o.Image, {
                                className: B.item_right,
                                src: r.ZPm.jtright10
                            }) ]
                        }), (0, b.jsxs)(o.View, {
                            className: B.function_item,
                            onClick: function() {
                                (0, O.OI)({
                                    current_page: "我的",
                                    click_location: "常见问题"
                                }), d().navigateTo({
                                    url: "/pages/wxMemberWebView/index?type=faq"
                                });
                            },
                            children: [ (0, b.jsxs)(o.View, {
                                className: B.item_left,
                                children: [ (0, b.jsx)(o.Image, {
                                    className: B.item_icon,
                                    src: r.ZPm.faq_icon
                                }), (0, b.jsx)(o.Text, {
                                    className: B.item_text,
                                    children: "常见问题"
                                }) ]
                            }), (0, b.jsx)(o.Image, {
                                className: B.item_right,
                                src: r.ZPm.jtright10
                            }) ]
                        }), (0, b.jsxs)(o.View, {
                            className: B.function_item,
                            onClick: function() {
                                (0, O.OI)({
                                    current_page: "我的",
                                    click_location: "帮助中心"
                                }), d().navigateTo({
                                    url: "/pages/wxMemberWebView/index?type=help"
                                });
                            },
                            children: [ (0, b.jsxs)(o.View, {
                                className: B.item_left,
                                children: [ (0, b.jsx)(o.Image, {
                                    className: B.item_icon,
                                    src: r.ZPm.help_icon
                                }), (0, b.jsx)(o.Text, {
                                    className: B.item_text,
                                    children: "帮助中心"
                                }) ]
                            }), (0, b.jsx)(o.Image, {
                                className: B.item_right,
                                src: r.ZPm.jtright10
                            }) ]
                        }), (0, b.jsxs)(o.View, {
                            className: B.function_item,
                            onClick: function() {
                                (0, O.OI)({
                                    current_page: "我的",
                                    click_location: "实名认证"
                                }), i ? d().navigateTo({
                                    url: "/hicardPackage/pages/realNameAuthent/index"
                                }) : (0, C.R9)("/hicardPackage/pages/realNameAuthent/index");
                            },
                            children: [ (0, b.jsxs)(o.View, {
                                className: B.item_left,
                                children: [ (0, b.jsx)(o.Image, {
                                    className: B.item_icon,
                                    src: r.Oxh
                                }), (0, b.jsx)(o.Text, {
                                    className: B.item_text,
                                    children: "实名认证"
                                }), E && i && (0, b.jsxs)(o.View, {
                                    className: f()(B.item_text_remark, "2" === E ? B.item_text_remark_check : B.item_text_remark_nocheck),
                                    children: [ "2" === E && (0, b.jsxs)(b.Fragment, {
                                        children: [ (0, b.jsx)(o.Image, {
                                            className: B.item_text_remark_check_icon,
                                            src: r.V5B
                                        }), "已实名" ]
                                    }), "10" === E && "未实名" ]
                                }) ]
                            }), (0, b.jsx)(o.Image, {
                                className: B.item_right,
                                src: r.ZPm.jtright10
                            }) ]
                        }), (0, b.jsxs)(o.View, {
                            className: B.function_item,
                            onClick: function() {
                                (0, O.OI)({
                                    current_page: "我的",
                                    click_location: "设置"
                                }), d().navigateTo({
                                    url: "/pages/settingPage/index"
                                });
                            },
                            children: [ (0, b.jsxs)(o.View, {
                                className: B.item_left,
                                children: [ (0, b.jsx)(o.Image, {
                                    className: B.item_icon,
                                    src: r.ZPm.setting_icon
                                }), (0, b.jsx)(o.Text, {
                                    className: B.item_text,
                                    children: "设置"
                                }) ]
                            }), (0, b.jsx)(o.Image, {
                                className: B.item_right,
                                src: r.ZPm.jtright10
                            }) ]
                        }) ]
                    }), e.isLogin ? (0, b.jsxs)(l.Fragment, {
                        children: [ (0, b.jsxs)(o.View, {
                            className: B.login_out,
                            onClick: function() {
                                oe();
                            },
                            children: [ (0, b.jsx)(o.Image, {
                                className: B.login_out_icon,
                                src: r.ZPm.login_out
                            }), (0, b.jsx)(o.Text, {
                                children: "退出登录"
                            }) ]
                        }), (0, b.jsx)(o.View, {
                            className: "bottom-heigt"
                        }) ]
                    }) : null ]
                }), (0, b.jsx)(w.g, {}), (0, b.jsx)(j.Z, {}) ]
            });
        }, F = U, J = {
            navigationBarTitleText: "",
            navigationStyle: "custom",
            disableScroll: !1
        };
        Page((0, t.createPageConfig)(F, "pages/my/index", {
            root: {
                cn: []
            }
        }, J || {}));
    }
}, function(e) {
    var i = function(i) {
        return e(e.s = i);
    };
    e.O(0, [ 62107, 11216, 68592 ], function() {
        return i(73846);
    });
    e.O();
} ]);