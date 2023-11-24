(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 44837 ], {
    15091: function(e, n, t) {
        var r = t(32180), o = t(3701), i = t(66058), c = t(65712), _ = t(71515), a = t(67294), s = t(92954), f = t.n(s), l = t(19190), u = t(89398), p = t(40405), m = t(88281), d = t(70420), g = t(82197), b = t(35299), x = t(94184), h = t.n(x), v = {
            preference_page_top: "index-module__preference_page_top___DkkF4",
            preference_page_top_bg: "index-module__preference_page_top_bg___ltmAl",
            preference_page_con: "index-module__preference_page_con___tQfhe",
            preference_item: "index-module__preference_item___sp_Hy",
            preference_item_title: "index-module__preference_item_title___Jyxp2",
            preference_bottom: "index-module__preference_bottom___QnMVc",
            preference_bottom_btn: "index-module__preference_bottom_btn___hrBkW",
            preference_bottom_btn_disabled: "index-module__preference_bottom_btn_disabled___myrmh"
        }, N = t(85893), j = function() {
            var e = (0, a.useState)([]), n = (0, c.Z)(e, 2), t = n[0], r = n[1], x = (0, a.useMemo)(function() {
                return !t.some(function(e) {
                    var n;
                    return null === (n = e.subTagList) || void 0 === n ? void 0 : n.some(function(e) {
                        return e.selectOr;
                    });
                });
            }, [ t ]), j = (0, a.useState)(!0), w = (0, c.Z)(j, 2), y = w[0], T = w[1];
            (0, s.usePageScroll)(function(e) {
                e.scrollTop > 20 ? T(!1) : T(!0);
            }), (0, s.useReady)(function() {
                (0, p.fe)().then(function(e) {
                    r(e);
                });
            });
            var k = function() {
                if (!x) {
                    b.Gq.showLoading();
                    var e = [];
                    t.forEach(function(n) {
                        var t;
                        null === (t = n.subTagList) || void 0 === t || t.forEach(function(t) {
                            t.selectOr && e.push({
                                tagId: n.id,
                                tagName: n.typeName,
                                subTagId: t.id,
                                subTagName: t.itemName
                            });
                        });
                    }), (0, p.Zl)(e).then(function() {
                        f().showToast({
                            title: "保存成功",
                            icon: "success"
                        });
                    }).finally(function() {
                        b.Gq.hideLoading();
                    });
                }
            }, V = function(e, n) {
                var o, c = (0, b.xZ)([], t);
                c[e].subTagList = null === (o = c[e].subTagList) || void 0 === o ? void 0 : o.map(function(e) {
                    return (0, i.Z)((0, i.Z)({}, e), {}, {
                        selectOr: n.indexOf(e.itemName) > -1
                    });
                }), r(c);
            };
            return (0, N.jsxs)(_.View, {
                className: v.preference_page,
                children: [ (0, N.jsx)(u.Y, {
                    boxStyle: {
                        backgroundColor: y ? "transparent" : "#ffffff"
                    },
                    leftIcon: y ? l.nC7 : l.ho9,
                    title: y ? "" : "就餐偏好",
                    isAni: !0,
                    titleStyle: {
                        color: y ? "#ffffff" : "#333333"
                    }
                }), (0, N.jsx)(_.View, {
                    className: v.preference_page_top,
                    children: (0, N.jsx)(_.Image, {
                        className: v.preference_page_top_bg,
                        src: l.fMR
                    })
                }), (0, N.jsx)(_.View, {
                    className: v.preference_page_con,
                    children: t.map(function(e, n) {
                        var t;
                        return (0, N.jsx)(N.Fragment, {
                            children: (0, N.jsxs)(_.View, {
                                className: v.preference_item,
                                children: [ (0, N.jsx)(_.View, {
                                    className: v.preference_item_title,
                                    children: e.typeName
                                }), (0, N.jsx)(m.B, {
                                    styleType: "3",
                                    type: "2",
                                    onChange: function(e) {
                                        V(n, e);
                                    },
                                    list: (null === (t = e.subTagList) || void 0 === t ? void 0 : t.map(function(e) {
                                        return {
                                            value: e.itemName,
                                            text: e.itemName,
                                            check: e.selectOr
                                        };
                                    })) || []
                                }) ]
                            })
                        });
                    })
                }), (0, N.jsxs)(_.View, {
                    className: v.preference_bottom,
                    children: [ (0, N.jsx)(_.View, {
                        className: h()(v.preference_bottom_btn, (0, o.Z)({}, v.preference_bottom_btn_disabled, x)),
                        onClick: k,
                        children: "保存偏好"
                    }), (0, N.jsx)(d.R, {}) ]
                }), (0, N.jsx)(g.g, {}) ]
            });
        }, w = j, y = {
            navigationStyle: "custom"
        };
        Page((0, r.createPageConfig)(w, "pages/repastPreference/index", {
            root: {
                cn: []
            }
        }, y || {}));
    }
}, function(e) {
    var n = function(n) {
        return e(e.s = n);
    };
    e.O(0, [ 62107, 11216, 68592 ], function() {
        return n(15091);
    });
    e.O();
} ]);