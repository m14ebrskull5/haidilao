(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 90550 ], {
    81959: function(e, t, s) {
        var r = s(32180), n = s(66058), R = s(89476), c = s(60210), u = s(19190), o = s(82584), x = s(71515), a = s(92954), i = s(85893), T = new Map();
        function E() {
            var e = (0, a.useRouter)(), t = T.get((null === e || void 0 === e ? void 0 : e.params.code) || "");
            return console.log(null === e || void 0 === e ? void 0 : e.params.code), t ? (0, 
            i.jsx)(x.View, {
                children: (0, i.jsx)(R.W, (0, n.Z)((0, n.Z)({}, t), {}, {
                    top: 188
                }))
            }) : (0, i.jsx)(x.View, {
                children: "未知错误"
            });
        }
        T.set(c.wX.NET_ERROR + "", {
            src: u.KrM,
            subText: "无法连接到网络  请检查网络设置或稍后重试"
        }), T.set(c.wX.POSITION_ERROR + "", {
            src: u.uqw,
            text: "不在当前门店地址位置范围内",
            subText: "无法使用，请到店支付"
        }), T.set(c.wX.QRCODE_FAILURE + "", {
            src: u.HMW,
            text: "二维码已过期，请联系门店"
        }), T.set(c.wX.ORDERs_FAILURE + "", {
            src: u.HMW,
            text: "当前账单已失效，请联系服务员结账"
        }), T.set(c.vj.OFFLINE_STATUS_ERROR, {
            src: u.q3Y,
            text: "扫码排号关闭",
            subText: "请联系门店门迎员工进行取号操作"
        }), T.set(c.vj.DISTANCE_ERROR, {
            src: u.uqw,
            text: "位置异常",
            subText: "请联系门店门迎员工进行取号操作"
        }), T.set(c.vj.STORE_STATUS_ERROR, {
            src: o.Pz,
            text: "门店未营业",
            subText: "请在门店营业时间内进行排号"
        }), T.set(c.vj.ALL_ERROR, {
            src: u.q3Y,
            text: "系统异常",
            subText: "请重新扫码或者询问门迎伙伴取号"
        });
        var O = {
            navigationBarTitleText: "海底捞"
        };
        Page((0, r.createPageConfig)(E, "pages/allResult/index", {
            root: {
                cn: []
            }
        }, O || {}));
    }
}, function(e) {
    var t = function(t) {
        return e(e.s = t);
    };
    e.O(0, [ 62107, 11216, 68592 ], function() {
        return t(81959);
    });
    e.O();
} ]);