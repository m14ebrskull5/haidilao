(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 7272 ], {
    63196: function(e, t, c) {
        var n = c(32180), i = c(66058), a = c(57543), s = c(77886), r = c(65712), l = c(89398), o = c(71515), u = c(19190), y = c(67294), f = c(11245), p = c(92954), g = c.n(p), x = c(40849), d = c(32537), h = c(82197), S = c(3594), m = c(47007), w = c(44803), N = c(13090), j = c(85893), v = function() {
            var e = (0, y.useState)(""), t = (0, r.Z)(e, 2), c = t[0], n = t[1], v = (0, y.useState)([]), I = (0, 
            r.Z)(v, 2), _ = I[0], C = I[1], O = (0, f.uj)(), Z = (0, y.useRef)([]), k = (0, 
            m.I0)(), T = (0, y.useState)(!1), V = (0, r.Z)(T, 2), b = V[0], J = V[1], P = function() {
                n("");
            }, Y = function() {
                if ("" != c) {
                    var e = Z.current.filter(function(e) {
                        return e.city = e.city.replace(/\u5e02/g, ""), e.city.includes(c);
                    });
                    0 === e.length ? J(!0) : J(!1), C(e);
                }
            }, L = function() {
                var e = (0, s.Z)((0, a.Z)().mark(function e() {
                    var t, c;
                    return (0, a.Z)().wrap(function(e) {
                        while (1) switch (e.prev = e.next) {
                          case 0:
                            if (e.prev = 0, t = g().getStorageSync(d.a.CITY_LIST), !t) {
                                e.next = 6;
                                break;
                            }
                            Z.current = JSON.parse(t), e.next = 10;
                            break;

                          case 6:
                            return e.next = 8, x.ZP.getCityList();

                          case 8:
                            c = e.sent, Z.current = c.cityList;

                          case 10:
                            e.next = 15;
                            break;

                          case 12:
                            e.prev = 12, e.t0 = e["catch"](0), console.log(e.t0);

                          case 15:
                          case "end":
                            return e.stop();
                        }
                    }, e, null, [ [ 0, 12 ] ]);
                }));
                return function() {
                    return e.apply(this, arguments);
                };
            }(), B = function(e) {
                if (e && null !== e && void 0 !== e && e.city) try {
                    var t = g().getStorageSync(d.a.SOON_CITY), c = [];
                    if (t) {
                        c = JSON.parse(t);
                        var n = c.findIndex(function(t) {
                            return t.cityId === e.cityId;
                        });
                        n > -1 && c.splice(n, 1);
                    }
                    c.unshift(e), c.length > 4 && (c = c.slice(0, 4)), g().setStorageSync(d.a.SOON_CITY, JSON.stringify(c));
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    g().setStorageSync(d.a.SOON_CITY, JSON.stringify([])), console.log(e);
                }
            }, R = (0, S.Z)(function(e) {
                B(e), k((0, w.iT)({
                    cityCode: e.cityId,
                    cityName: e.city.replace(/\u5e02/g, ""),
                    cityInfo: (0, i.Z)({}, e)
                })), g().navigateBack({
                    delta: 2
                });
            }, {
                wait: 1e3,
                trailing: !1
            }), W = R.run;
            return (0, p.useReady)(L), (0, j.jsxs)(o.View, {
                className: "select-city-page",
                children: [ (0, j.jsxs)(o.View, {
                    children: [ (0, j.jsx)(l.Y, {
                        title: "选择城市",
                        titleStyle: {
                            color: "#000000",
                            fontWeight: "bold"
                        }
                    }), (0, j.jsx)(o.View, {
                        className: "top",
                        style: {
                            top: O + 44
                        },
                        children: (0, j.jsxs)(o.View, {
                            className: "search_box",
                            children: [ (0, j.jsx)(o.Image, {
                                className: "search_icon",
                                src: u.ZPm.welfare_searchCity
                            }), (0, j.jsx)(o.View, {
                                className: "search_text",
                                children: (0, j.jsx)(o.Input, {
                                    type: "text",
                                    placeholder: "请输入城市名称",
                                    value: c,
                                    onInput: function(e) {
                                        n(e.detail.value);
                                    },
                                    onConfirm: Y
                                })
                            }), c && (0, j.jsx)(o.View, {
                                className: "close_icon_wrap",
                                onClick: P,
                                children: (0, j.jsx)(o.Image, {
                                    className: "close_icon",
                                    src: u.ZPm.close
                                })
                            }) ]
                        })
                    }) ]
                }), (0, j.jsx)(o.ScrollView, {
                    className: "city",
                    scrollY: !0,
                    children: b ? (0, j.jsx)(N.j, {
                        src: u.ZPm.empty_2,
                        text: "没有找到符合指定条件的城市",
                        top: 468
                    }) : (0, j.jsx)(o.View, {
                        className: "city_list",
                        style: {
                            paddingTop: O + 44 + 58
                        },
                        children: _.map(function(e, t) {
                            return (0, j.jsx)(o.View, {
                                className: "city_item",
                                onClick: function() {
                                    W(e);
                                },
                                children: e.city
                            }, t);
                        })
                    })
                }), (0, j.jsx)(h.g, {}) ]
            });
        }, I = v, _ = {
            navigationBarTitleText: "选择城市",
            disableScroll: !0,
            navigationStyle: "custom"
        };
        Page((0, n.createPageConfig)(I, "pages/searchCity/index", {
            root: {
                cn: []
            }
        }, _ || {}));
    }
}, function(e) {
    var t = function(t) {
        return e(e.s = t);
    };
    e.O(0, [ 62107, 11216, 68592 ], function() {
        return t(63196);
    });
    e.O();
} ]);