require("./common"), require("./vendors"), require("./taro"), require("./runtime"), 
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 32143 ], {
    71035: function(e, a, n) {
        n(17488);
        var i = n(32180), s = n(88744), p = n(92954), r = n.n(p), d = n(33661), t = n(12742), g = n(95333), o = n(14175), c = n(67294), x = n.t(c, 2), l = n(47007), u = n(91589), v = n(84828), m = n(47525), b = n(87481), h = n(85893);
        try {
            var y = r().getAccountInfoSync();
            "develop" == y.miniProgram.envVersion || "trial" == y.miniProgram.envVersion ? i.options.debug = !0 : i.options.debug = !1;
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            console.log(e);
        }
        m.Uh.initSensors(), m.Uh.registerProperties();
        var P = function(e) {
            (0, g.Z)(n, e);
            var a = (0, o.Z)(n);
            function n() {
                return (0, d.Z)(this, n), a.apply(this, arguments);
            }
            return (0, t.Z)(n, [ {
                key: "componentDidMount",
                value: function() {
                    r().onError(function(e) {
                        v.Z.error(e);
                    });
                    var e = r().getUpdateManager();
                    e.onCheckForUpdate(function(e) {
                        console.log("新版本更新信息", e.hasUpdate);
                    }), e.onUpdateReady(function() {
                        console.log("新版本准备好了"), r().showModal({
                            title: "更新提示",
                            content: "新版本已经准备好，是否重启应用？",
                            showCancel: !1,
                            success: function() {
                                e.applyUpdate();
                            }
                        });
                    }), e.onUpdateFailed(function() {
                        console.log("下载新版本失败");
                    });
                }
            }, {
                key: "onLaunch",
                value: function() {
                    b.T && b.T._initTmpllds();
                }
            }, {
                key: "render",
                value: function() {
                    return (0, h.jsx)(l.zt, {
                        store: u.Z,
                        children: this.props.children
                    });
                }
            } ]), n;
        }(c.Component), f = P, _ = n(88967), k = {
            pages: [ "pages/index/index", "pages/loginPhone/index", "pages/joinActive/index", "pages/my/index", "pages/wxMemberWebView/index", "pages/selectCity/index", "pages/searchCity/index", "pages/member/index", "pages/login/index", "pages/repastPreference/index", "pages/memberInfo/index", "pages/coupon/index", "pages/unbindMobile/index", "pages/systemUpgrade/index", "pages/allResult/index", "pages/webViewLogin/index", "pages/allOrder/index", "pages/privacyTips/index", "pages/settingPage/index", "pages/accountManagement/index", "pages/accountCancellation/index", "pages/servicesAndAgreements/index", "pages/thirdPartyInformation/index", "pages/settingPageWebview/index", "pages/saveMoney/index", "pages/saveMoneyOne/index" ],
            subpackages: [ {
                root: "walletPackage",
                pages: [ "pages/topup/index", "pages/helpCenter/index", "pages/management/index", "pages/walletDetails/index", "pages/payMent/index", "pages/payResult/index", "pages/payAbnormal/index", "pages/resetPassword/index", "pages/topupResult/index", "pages/topupResultWarn/index", "pages/topupResultError/index", "pages/cardAgreement/index" ]
            }, {
                root: "diningPackage",
                pages: [ "pages/numeral/index", "pages/reserve/index", "pages/share/index", "pages/shareBlack/index", "pages/search/index", "pages/reserveSubmit/index", "pages/blackReserveSubmit/index", "pages/reserveDetail/index", "pages/numeralSubmit/index", "pages/numeralDetail/index", "pages/orderList/index", "pages/appraise/orderList/index", "pages/appraise/orderDetail/index", "pages/appraise/grade/index", "pages/appraise/gradeDetail/index", "pages/appraise/gradeDetail_old/index", "pages/offlineNumbering/index", "pages/appraise/gradeDetailV3/index", "pages/reserveHistoryOrder/index" ]
            }, {
                root: "activePackage",
                pages: [ "pages/vipactive/activeInfo/index", "pages/vipactive/backActiveInfo/index", "pages/vipactive/selectShop/index", "pages/vipactive/question/index", "pages/vipactive/activeList/index", "pages/signPackage/index/index", "pages/convertPrize/shop/shop", "pages/convertPrize/Record/index", "pages/convertPrize/GoodInfo/index", "pages/privateDomain/welfare/index", "pages/privateDomain/welfareSearch/index", "pages/privateDomain/participate/index", "pages/privateDomain/welfareStore/index", "pages/privateActivityList/index", "pages/cards/buyCard/index", "pages/cards/rule/index", "pages/cards/oneCardInfo/index", "pages/cards/demo/index", "pages/cards/equityCardDetail/index", "pages/couponActIndex/index", "pages/areaCard/index", "pages/areacardFile/index", "pages/bannerQrcode/index" ]
            }, {
                root: "propertyPackage",
                pages: [ "pages/base/couponCenter/index", "pages/base/growthValue/index", "pages/base/myCoupon/index", "pages/base/lbDetailed/index", "pages/base/canvas/index", "pages/cardBag/index", "pages/failureCardBag/index", "pages/cardList/index", "pages/cardMoreInfo/index", "pages/base/myHistoryCoupon/index", "pages/base/selectCoupons/index", "pages/blackQrcode/index" ]
            }, {
                root: "invoicePackage",
                pages: [ "pages/index/index", "pages/invoice/index", "pages/result/index", "pages/orderList/index", "pages/history/index", "pages/detail/index", "pages/resend/index" ]
            }, {
                root: "scanLoginPackage",
                pages: [ "pages/index/index", "pages/pay/billDetail/index", "pages/pay/confirmPay/index", "pages/pay/payResult/index", "pages/payLogin/index" ]
            }, {
                root: "staticPagePackage",
                pages: [ "pages/peopleKnow/index", "pages/agreement/index", "pages/purchaseAgreement/index", "pages/equityAgreement/index", "pages/shopList/index" ],
                independent: !0
            }, {
                root: "hicardPackage",
                pages: [ "pages/index/index", "pages/listMore/index", "pages/middle/index", "pages/posPay/index", "pages/buyCard/index", "pages/buyCardProtocol/index", "pages/useCardProtocol/index", "pages/coupons/index", "pages/cardGift/index", "pages/giveRecord/index", "pages/consumeRecord/index", "pages/purchaseRecord/index", "pages/purchaseRecordDetail/index", "pages/refundHICard/index", "pages/refundSuccess/index", "pages/buyResult/index", "pages/realNameAuthent/index" ]
            } ],
            preloadRule: {
                "pages/member/index": {
                    network: "wifi",
                    packages: [ "propertyPackage" ]
                }
            },
            window: {
                backgroundTextStyle: "light",
                navigationBarBackgroundColor: "#fff",
                navigationBarTitleText: "WeChat",
                navigationBarTextStyle: "black",
                backgroundColor: "#f7f7f7"
            },
            tabBar: {
                color: "#999999",
                selectedColor: "#F62B27",
                borderStyle: "black",
                list: [ {
                    text: "首页",
                    pagePath: "pages/index/index",
                    iconPath: "./images/tab_bar_index_v2.png",
                    selectedIconPath: "./images/tab_bar_index_on_v2.png"
                }, {
                    text: "订单",
                    pagePath: "pages/allOrder/index",
                    iconPath: "./images/tab_bar_order_v1.png",
                    selectedIconPath: "./images/tab_bar_order_on_v1.png"
                }, {
                    text: "会员",
                    pagePath: "pages/member/index",
                    iconPath: "./images/tab_bar_member_v1.png",
                    selectedIconPath: "./images/tab_bar_member_on_v1.png"
                }, {
                    text: "省钱卡",
                    pagePath: "pages/saveMoney/index",
                    iconPath: "./images/tab_bar_saveMoney_v2.png",
                    selectedIconPath: "./images/tab_bar_saveMoney_on_v2.png"
                }, {
                    text: "我的",
                    pagePath: "pages/my/index",
                    iconPath: "./images/tab_bar_my_v2.png",
                    selectedIconPath: "./images/tab_bar_my_on_v2.png"
                } ]
            },
            permission: {
                "scope.userLocation": {
                    desc: "申请获取您的位置用于海底捞线下活动门店信息匹配"
                }
            },
            requiredPrivateInfos: [ "getLocation" ],
            plugins: {
                captcha: {
                    version: "1.0.3",
                    provider: "wxb302e0fc8ab232b4"
                }
            },
            __usePrivacyCheck__: !0,
            serviceProviderTicket: "P7HaykCvHB3JTfYUBVAHc/ahAOr7TFAwpvaDAsQ7FL2MxSIkw+oEaTAueP6/lGNZnzCkGNl9F8zmSHh4FcMzGT+c+Zmy7mvgF1c="
        };
        i.window.__taroAppConfig = k;
        App((0, s.Ox)(f, x, _.ZP, k));
        (0, p.initPxTransform)({
            designWidth: 750,
            deviceRatio: {
                640: 1.17,
                750: 1,
                828: .905
            },
            baseFontSize: 20,
            unitPrecision: void 0,
            targetUnit: void 0
        });
    }
}, function(e) {
    var a = function(a) {
        return e(e.s = a);
    };
    e.O(0, [ 62107, 11216, 68592 ], function() {
        return a(71035);
    });
    e.O();
} ]);