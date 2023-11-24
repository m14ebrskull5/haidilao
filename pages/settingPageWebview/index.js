(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 95287 ], {
    52381: function(e, n, t) {
        var r = t(32180), a = t(13066), i = t(92954), o = t(71515), c = t(85893), s = {
            privacy: "wechatHdlPrivacyAgreement",
            personalInfo: "wechatHdlInformationCollection",
            thirdSDK: "wechatSDKList",
            privacyZY: "wechatHdlPrivacyAgreementZY",
            iOSPermission: "wechatIos",
            AndroidPermission: "wechatAndroid",
            partnerShare: "wechatShareInfo",
            logoutNotice: "accountCancellation"
        }, u = function() {
            var e = (0, i.useRouter)(), n = e.params.pageType;
            if (!n) return null;
            var t = a._n + "/member-center/#/" + s[n] + "?t=" + new Date().getTime();
            return (0, c.jsx)(o.WebView, {
                src: t
            });
        }, w = u, p = {
            navigationBarTitleText: "海底捞"
        };
        Page((0, r.createPageConfig)(w, "pages/settingPageWebview/index", {
            root: {
                cn: []
            }
        }, p || {}));
    }
}, function(e) {
    var n = function(n) {
        return e(e.s = n);
    };
    e.O(0, [ 62107, 11216, 68592 ], function() {
        return n(52381);
    });
    e.O();
} ]);