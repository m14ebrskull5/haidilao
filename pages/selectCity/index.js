(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 96608 ], {
    90128: function(e, i, t) {
        var c = t(32180), s = t(66058), a = t(18453), n = t(65712), l = t(89398), r = t(71515), o = t(67608), y = t(40849), g = t(92954), h = t.n(g), u = t(94184), x = t.n(u), f = t(47007), m = t(44803), d = t(19190), j = t(67294), N = t(32537), p = t(3594), S = t(11245), w = t(85893), v = void 0, C = function(e) {
            var i = e.text, t = e.flag, c = e.onClick;
            return (0, w.jsxs)(r.View, {
                className: "city-item-com flex",
                onClick: function() {
                    null === c || void 0 === c || c();
                },
                children: [ t ? (0, w.jsx)(r.Image, {
                    className: "city-flag",
                    src: d.ZPm.location
                }) : "", (0, w.jsx)(r.Text, {
                    className: "ellipsis city-item-name",
                    children: i
                }) ]
            });
        }, V = function() {
            var e = (0, j.useState)(1), i = (0, n.Z)(e, 2), t = i[0], c = i[1], u = (0, j.useState)([]), V = (0, 
            n.Z)(u, 2), k = V[0], I = V[1], Z = (0, j.useState)([]), T = (0, n.Z)(Z, 2), O = T[0], b = T[1], L = (0, 
            j.useState)([]), _ = (0, n.Z)(L, 2), J = _[0], Y = _[1], P = (0, f.v9)(function(e) {
                return e.enterForm;
            }), M = (0, f.I0)(), E = function(e) {
                if (e && null !== e && void 0 !== e && e.city) {
                    try {
                        var i = h().getStorageSync(N.a.SOON_CITY), t = [];
                        if (i) {
                            t = JSON.parse(i);
                            var c = t.findIndex(function(i) {
                                return i.cityId === e.cityId;
                            });
                            c > -1 && t.splice(c, 1);
                        }
                        t.unshift(e), t.length > 4 && (t = t.slice(0, 4)), h().setStorageSync(N.a.SOON_CITY, JSON.stringify(t));
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        h().setStorageSync(N.a.SOON_CITY, JSON.stringify([])), console.log(e);
                    }
                    try {
                        Y((0, a.Z)(JSON.parse(h().getStorageSync(N.a.SOON_CITY))));
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        console.log(e);
                    }
                }
            }, B = (0, p.Z)(function(e) {
                E(e), M((0, m.iT)({
                    cityCode: e.cityId,
                    cityName: e.city.replace(/\u5e02/g, ""),
                    cityInfo: (0, s.Z)({}, e)
                })), h().navigateBack();
            }, {
                wait: 1e3,
                trailing: !1
            }), K = B.run;
            (0, g.useDidShow)(function() {
                try {
                    h().removeStorageSync(N.a.CITY_LIST);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    console.log(e);
                }
                y.ZP.getCityList().then(function(e) {
                    I(e.cityList), b(e.hotCityList);
                    try {
                        h().setStorageSync(N.a.CITY_LIST, JSON.stringify(e.cityList));
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        console.log(e);
                    }
                });
                try {
                    E(P.cityInfo);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    console.log(e);
                }
            });
            var D = (0, j.useMemo)(function() {
                var e = [], i = [], t = {}, c = {};
                k.forEach(function(e) {
                    if (e.logogram) {
                        var i = e.logogram[0].toLocaleUpperCase();
                        2 === e.regionMark ? c[i] ? c[i].push((0, s.Z)((0, s.Z)({
                            name: e.city
                        }, e), {}, {
                            city: e.city
                        })) : c[i] = [ (0, s.Z)((0, s.Z)({
                            name: e.city
                        }, e), {}, {
                            city: e.city
                        }) ] : 1 !== e.regionMark && 3 !== e.regionMark || (t[i] ? t[i].push((0, s.Z)((0, 
                        s.Z)({
                            name: e.city.replace(/\u5e02/g, "")
                        }, e), {}, {
                            city: e.city.replace(/\u5e02/g, "")
                        })) : t[i] = [ (0, s.Z)((0, s.Z)({
                            name: e.city.replace(/\u5e02/g, "")
                        }, e), {}, {
                            city: e.city.replace(/\u5e02/g, "")
                        }) ]);
                    } else ;
                });
                var a = Object.keys(t);
                a.sort(), a.forEach(function(i) {
                    e.push({
                        title: i,
                        key: i,
                        items: t[i]
                    });
                });
                var n = Object.keys(c);
                return n.sort(), n.forEach(function(e) {
                    i.push({
                        title: e,
                        key: e,
                        items: c[e]
                    });
                }), {
                    cityList: e,
                    cityListN: i
                };
            }, [ k ]), F = D.cityList, U = D.cityListN, W = function(e) {
                c(e);
            }, q = (0, S.uj)(), z = (0, S.gp)(), A = (0, p.Z)(function() {
                h().navigateTo({
                    url: "/pages/searchCity/index"
                });
            }, {
                wait: 1e3,
                trailing: !1
            }), G = A.run;
            return (0, w.jsxs)(r.View, {
                className: "select-city-page",
                children: [ (0, w.jsxs)(r.View, {
                    children: [ (0, w.jsx)(l.Y, {
                        title: "选择城市",
                        titleStyle: {
                            color: "#000000",
                            fontWeight: "bold"
                        }
                    }), (0, w.jsxs)(r.View, {
                        className: "top",
                        style: {
                            top: q + 44
                        },
                        children: [ (0, w.jsxs)(r.View, {
                            className: "search_box",
                            onClick: function() {
                                G();
                            },
                            children: [ (0, w.jsx)(r.Image, {
                                className: "search_icon",
                                src: d.ZPm.welfare_searchCity
                            }), (0, w.jsx)(r.Text, {
                                className: "search_text",
                                children: "请输入城市名称"
                            }) ]
                        }), (0, w.jsx)(r.View, {
                            className: "tabs",
                            children: (0, w.jsxs)(r.View, {
                                className: "tabs-itmes flex-align",
                                children: [ (0, w.jsxs)(r.View, {
                                    className: "tab-item flex-col-align",
                                    onClick: W.bind(v, 1),
                                    children: [ (0, w.jsx)(r.Text, {
                                        children: "国内（含港澳台）"
                                    }), (0, w.jsx)(r.View, {
                                        className: x()("active-line", {
                                            active: 1 === t
                                        })
                                    }) ]
                                }), (0, w.jsxs)(r.View, {
                                    className: "tab-item flex-col-align",
                                    onClick: W.bind(v, 2),
                                    children: [ (0, w.jsx)(r.Text, {
                                        children: "海外"
                                    }), (0, w.jsx)(r.View, {
                                        className: x()("active-line", {
                                            active: 2 === t
                                        })
                                    }) ]
                                }) ]
                            })
                        }) ]
                    }) ]
                }), (0, w.jsxs)(r.View, {
                    style: {
                        height: "100vh"
                    },
                    children: [ (0, w.jsx)(r.View, {
                        style: {
                            height: q + 44 + 100
                        }
                    }), (0, w.jsxs)(r.View, {
                        style: {
                            height: z - q - 44 - 100
                        },
                        children: [ (0, w.jsx)(o.tL, {
                            className: x()("city-1", {
                                hide: 1 !== t
                            }),
                            list: F,
                            onClick: function(e) {
                                K(e);
                            },
                            isVibrate: !1,
                            isShowToast: !1,
                            topKey: "热",
                            children: (0, w.jsxs)(r.View, {
                                className: "custom-area ",
                                children: [ (0, w.jsx)(r.View, {
                                    className: "city-title",
                                    children: "定位/最近访问"
                                }), (0, w.jsx)(r.View, {
                                    className: "flex-align city-list",
                                    children: J.map(function(e, i) {
                                        return (0, w.jsx)(C, {
                                            onClick: function() {
                                                K(e);
                                            },
                                            text: e.city.replace(/\u5e02/g, ""),
                                            flag: 0 === i
                                        }, e.cityId);
                                    })
                                }), (0, w.jsx)(r.View, {
                                    className: "city-title",
                                    children: "热门城市"
                                }), (0, w.jsx)(r.View, {
                                    className: "flex-align city-list",
                                    children: O.map(function(e) {
                                        return (0, w.jsx)(C, {
                                            onClick: function() {
                                                K(e);
                                            },
                                            text: e.city.replace(/\u5e02/g, "")
                                        }, e.cityId);
                                    })
                                }) ]
                            })
                        }), (0, w.jsx)(o.tL, {
                            className: x()("city-2", {
                                hide: 2 !== t
                            }),
                            list: U,
                            onClick: function(e) {
                                K(e);
                            },
                            isVibrate: !1,
                            isShowToast: !1,
                            topKey: "热",
                            children: (0, w.jsxs)(r.View, {
                                className: "custom-area ",
                                children: [ (0, w.jsx)(r.View, {
                                    className: "city-title",
                                    children: "定位/最近访问"
                                }), (0, w.jsx)(r.View, {
                                    className: "flex-align city-list",
                                    children: J.map(function(e, i) {
                                        return (0, w.jsx)(C, {
                                            onClick: function() {
                                                K(e);
                                            },
                                            text: e.city.replace(/\u5e02/g, ""),
                                            flag: 0 === i
                                        }, e.cityId);
                                    })
                                }) ]
                            })
                        }) ]
                    }) ]
                }) ]
            });
        }, k = V, I = {
            navigationBarTitleText: "选择城市",
            disableScroll: !0,
            navigationStyle: "custom"
        };
        Page((0, c.createPageConfig)(k, "pages/selectCity/index", {
            root: {
                cn: []
            }
        }, I || {}));
    }
}, function(e) {
    var i = function(i) {
        return e(e.s = i);
    };
    e.O(0, [ 62107, 11216, 68592 ], function() {
        return i(90128);
    });
    e.O();
} ]);