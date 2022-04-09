(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([[5], {
    "+tvP": function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return m
        }));
        a("kYxP");
        var n = a("ERkP"), c = a.n(n), r = a("DqXN"), l = a.n(r), o = a("IFWP"), i = a("S4EX"), s = a("2uVm");
        const u = l.a.maxProfileNameLength, m = e => {
            let {onChange: t, profileName: a = ""} = e;
            const r = Object(o.useTranslate)(), l = r("account.profileNameRequired"),
                m = r("account.profileNameTooLong", {maxLength: u}), p = a.length > u,
                b = a && !p, [d, f] = Object(n.useState)(!1), [g, O] = Object(n.useState)(l),
                E = Object(n.useCallback)(e => {
                    e.preventDefault(), t(e.target.value)
                }, [t]);
            return c.a.createElement(s.a, null, c.a.createElement(i.e, {
                name: "profileName",
                value: a,
                onChange: E,
                label: r("account.profile.name"),
                hasError: d,
                errorText: g,
                onBlur: () => {
                    a || O(l), p && O(m), f(!b)
                }
            }))
        }
    }, "0QuS": function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return u
        }));
        var n = a("ERkP"), c = a.n(n), r = a("j/s1"), l = a("Jvjd"), o = a("5+Jc"), i = a("IFWP");
        const s = r.d.h1.withConfig({componentId: "thrmu4-0"})(["font-size:20px;line-height:1.35;text-transform:uppercase;font-weight:bold;text-align:center;", ";"], l.p.lt(o.e.medium, Object(r.c)(["font-size:16px;text-align:left;"]))),
            u = e => {
                let {titleKey: t, number: a, className: n} = e;
                return c.a.createElement(s, {className: n}, c.a.createElement(i.Trans, {i18nKey: t, number: a}))
            };
        u.defaultProps = {number: void 0}
    }, "0fBN": function (e, t, a) {
        "use strict";
        a.r(t);
        var n = a("ERkP"), c = a.n(n), r = a("IFWP"), l = a("E/P7"), o = a("47v5"), i = a("m8Ei"), s = a("uMmH"),
            u = (a("kYxP"), a("uDfI")), m = a("j/s1"), p = a("rPqC"), b = a("OXCn"), d = a("S4EX"), f = a("lcx8"),
            g = a("R5CS"), O = a("m03+"), E = a("QUYU"), j = a("wgY5"), h = a.n(j), v = a("DqXN"), y = a.n(v),
            C = a("N70H");
        const k = Object(m.d)(f.b).withConfig({componentId: "brnm0m-0"})(["color:", ";"], Object(p.h)("colors.state.invalid")),
            I = Object(m.d)(b.a).withConfig({componentId: "brnm0m-1"})(["margin-top:44px;"]), w = e => {
                let {errorMessage: t, onPasswordVerification: a} = e;
                const l = Object(r.useTranslate)(), [o, i] = Object(n.useState)(""), s = 0 === o.length;
                return c.a.createElement(p.d, {mode: p.c.LIGHT}, c.a.createElement("form", {
                    onSubmit: e => {
                        e.preventDefault(), a(o)
                    }
                }, c.a.createElement(d.d, {
                    name: "password", value: o, onChange: e => {
                        const t = e.target.value;
                        i(t)
                    }
                }), t && c.a.createElement(k, {level: f.a.MEXICO}, t), c.a.createElement(I, {
                    type: "submit",
                    label: l("global.submit"),
                    disabled: s
                })))
            }, P = e => {
                let {children: t, onSuccess: a, onRepeatedError: l} = e;
                const o = Object(u.d)(), i = Object(u.e)(g.l), m = Object(u.e)(g.r), p = (() => {
                    const e = Object(u.e)(C.e), [t, a] = Object(n.useState)(null),
                        c = Object(r.useTranslate)(), {expirationPeriod: l, numberOfAttempts: o} = y.a.accountLockout,
                        i = c("onboarding.errorMessages.accountLockedOut", {
                            expirationPeriod: h.a.duration(l, "seconds").humanize(),
                            numberOfAttempts: o
                        }), s = c("account.invalidCurrentPassword");
                    return Object(n.useEffect)(() => {
                        e ? e.type !== O.f.ACCOUNT_TEMPORARILY_LOCKED_OUT ? a(s) : a(i) : a(null)
                    }, [e]), t
                })();
                Object(n.useEffect)(() => () => {
                    o(Object(E.g)()), o(s.D)
                }, []);
                const b = i === O.h.SUCCESS;
                Object(n.useEffect)(() => {
                    a && b && a()
                }, [b]), Object(n.useEffect)(() => {
                    l && m && l()
                }, [m]);
                return c.a.createElement(c.a.Fragment, null, b ? t : c.a.createElement(w, {
                    errorMessage: p,
                    onPasswordVerification: e => o(Object(E.i)(e))
                }))
            };
        var _ = a("Jvjd"), N = a("5+Jc"), x = a("EHrM");
        const S = m.d.div.withConfig({componentId: "ra72nq-0"})(["display:flex;align-items:center;", ";"], _.p.lt(N.e.small, Object(m.c)(["min-width:224px;"]))),
            D = m.d.button.withConfig({componentId: "ra72nq-1"})(["display:flex;justify-content:center;align-items:center;border-radius:100%;margin:4px 0;position:relative;background-color:transparent;border:solid 2px ", ";transition:border-color 0.3s;min-width:48px;width:48px;height:48px;&[aria-pressed='true']{border-color:", ";}", ";"], Object(p.h)("colors.text.primary", e => Object(_.s)(e, .5)), Object(p.h)("colors.state.invalid"), _.p.gt(N.e.small, Object(m.c)(["min-width:56px;width:56px;height:56px;"]))),
            R = Object(m.d)(x.c).withConfig({componentId: "ra72nq-2"})(["width:32px;height:32px;color:", ";opacity:0.6;[aria-pressed='true'] &{opacity:1;}", ";"], Object(p.h)("colors.text.primary"), _.p.gt(N.e.small, Object(m.c)(["width:40px;height:40px;"]))),
            T = Object(m.d)(r.HtmlTrans).withConfig({componentId: "ra72nq-3"})(["color:", ";"], Object(p.h)("colors.text.primary")),
            A = m.d.div.withConfig({componentId: "ra72nq-4"})(["position:relative;margin-left:8px;margin-right:8px;color:", ";[aria-pressed='true'] ~ &{color:", ";}", ";", ";"], Object(p.h)("colors.text.primary"), Object(p.h)("colors.state.invalid"), _.p.gt(N.e.small, Object(m.c)(["margin-right:16px;"])), _.p.gt(N.e.xlarge, Object(m.c)(["margin-left:12px;margin-right:24px;"]))),
            M = e => {
                let {
                    age: t, iconName: a, isActive: n = !1, onClick: r = (() => {
                    }), rightIcon: l, title: o
                } = e;
                return c.a.createElement(S, null, c.a.createElement(D, {
                    isActive: n,
                    type: "button",
                    "aria-pressed": n,
                    title: o,
                    "aria-label": o,
                    onClick: r
                }, c.a.createElement(R, {name: a})), c.a.createElement(A, {
                    isActive: n,
                    "aria-hidden": !0
                }, l), c.a.createElement(T, {i18nKey: "account.parentalControl.valueDescription", data: {age: t}}))
            };

        function F(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), a.push.apply(a, n)
            }
            return a
        }

        function L(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a, e
        }

        M.displayName = "AgeLimit";
        const Y = m.d.div.withConfig({componentId: "sc-1uhofpu-0"})(["background-color:", ";width:2px;height:8px;margin-left:23px;", ";", ";"], Object(p.h)("colors.text.primary", e => Object(_.s)(e, .5)), _.p.gt(N.e.small, Object(m.c)(["margin-left:27px;"])), Object(_.e)(Object(_.l)("isActive"), Object(m.c)(["background-color:", ";"], Object(p.h)("colors.state.invalid")))),
            q = Object(m.d)(x.c).withConfig({componentId: "sc-1uhofpu-1"})(["height:32px;width:32px;"]),
            B = m.d.ul.withConfig({componentId: "sc-1uhofpu-2"})(["list-style-type:none;margin:0;align-items:center;&:after{", ";}"], Object(_.e)(Object(_.l)("isPartiallyActive"), Object(m.c)(["background-color:", ";"], Object(p.h)("colors.state.invalid")))),
            U = m.d.li.withConfig({componentId: "sc-1uhofpu-3"})(["display:block;", "{", ";}"], Y, Object(_.e)(Object(_.l)("isActive"), Object(m.c)(["background-color:", ";"], Object(p.h)("colors.state.invalid")))),
            z = (e, t) => e.reduce((e, a) => {
                const n = null != t && a.value >= t;
                return function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? F(Object(a), !0).forEach((function (t) {
                            L(e, t, a[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : F(Object(a)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                        }))
                    }
                    return e
                }({}, e, {[a.value]: n})
            }, {}), G = e => {
                let {agesConfig: t, className: a, "data-testid": r, onSelection: l, value: o} = e;
                const i = Object(n.useCallback)(e => t => {
                    t.preventDefault(), l(e === o ? null : e)
                }, [o]), s = Object(n.useMemo)(() => z(t, o), [t, o]), u = !!o, m = Object.values(s).every(e => e);
                return c.a.createElement(B, {
                    className: a,
                    isActive: m,
                    isPartiallyActive: u
                }, t.map(e => c.a.createElement(U, {
                    isActive: s[e.value],
                    key: e.value
                }, c.a.createElement(Y, null), c.a.createElement(M, {
                    age: e.value,
                    iconName: e.icon,
                    isActive: s[e.value],
                    onClick: i(e.value),
                    title: e.title,
                    rightIcon: c.a.createElement(q, {name: s[e.value] ? x.a.FreemiumLock : x.a.Unlock})
                }), c.a.createElement(Y, null))))
            };

        function H() {
            return (H = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                }
                return e
            }).apply(this, arguments)
        }

        const K = m.d.div.withConfig({componentId: "sc-1p0air9-0"})(["margin-bottom:40px;"]),
            V = Object(m.d)(f.b).withConfig({componentId: "sc-1p0air9-1"})(["margin-bottom:32px;"]),
            W = e => c.a.createElement(V, H({level: f.a.KINSHASA}, e)),
            X = m.d.p.withConfig({componentId: "sc-1p0air9-2"})(["margin-bottom:24px;min-height:50px;"]), Z = e => {
                let {selectedAgeRating: t, onParentalRestrictionSelection: a, onParentalRestrictionRemoval: l} = e;
                const o = Object(r.useTranslate)(), i = Object(u.e)(C.q), s = Object(n.useMemo)(() => i.map(e => ({
                    value: e.age,
                    icon: x.a[e.icon_name],
                    title: o("account.parentalControl.actionDescription", {age: e.age})
                })), [o, i]), m = Object(n.useCallback)(e => null === e ? l() : a(e), []);
                return c.a.createElement(c.a.Fragment, null, c.a.createElement(W, null, o("account.parentalControl.title")), c.a.createElement(X, null, t ? c.a.createElement(r.HtmlTrans, {
                    i18nKey: "account.parentalControl.description",
                    data: {age: t}
                }) : c.a.createElement(r.Trans, {i18nKey: "account.parentalControl.noRestriction"})), c.a.createElement(G, {
                    agesConfig: s,
                    onSelection: m,
                    value: t
                }))
            };
        var Q = a("9tjd"), J = a("p1RZ"), $ = a("2kSs");
        const ee = e => {
            let {onParentalCodeChange: t, parentalCode: a, selectedAgeRating: n, autofocus: l = !0} = e;
            const o = Object(r.useTranslate)();
            return c.a.createElement(c.a.Fragment, null, c.a.createElement(W, null, o("account.parentalControl.parentalCode.title")), n ? c.a.createElement(c.a.Fragment, null, c.a.createElement(X, null, o("account.parentalControl.parentalCode.description")), c.a.createElement($.b, {
                inputLength: 4,
                authorizedCharacters: /\d/,
                onChange: t,
                value: a,
                name: "parentalCode",
                autofocus: l
            })) : c.a.createElement(X, null, o("account.parentalControl.instruction")))
        };
        var te = a("cn6j");
        const ae = () => {
            const e = Object(r.useTranslate)(), t = Object(u.d)(), a = Object(u.e)(g.j),
                l = Object(u.e)(g.k), [o, i] = Object(n.useState)(a), [s, m] = Object(n.useState)(l),
                p = Object(u.e)(g.s);
            Object(n.useEffect)(() => {
                p && t(Q.h)
            }, [p]);
            const d = !o || !s || 4 !== s.length;
            Object(n.useEffect)(() => {
                i(a)
            }, [a]), Object(n.useEffect)(() => {
                m(l)
            }, [l]);
            const f = Object(n.useCallback)(e => {
                i(e)
            }, []), O = Object(n.useCallback)(() => {
                t(Q.l), i(null)
            }, []), E = Object(n.useCallback)(e => {
                e.preventDefault(), t(Object(Q.e)({code: s, maxAge: o})), Object(te.k)("clickCreateParentalControl")
            }, [s, o]), j = Object(n.useCallback)(() => {
                m(""), O(), Object(te.k)("clickDeleteParentalControl")
            }, []);
            return c.a.createElement("form", {onSubmit: E}, c.a.createElement(K, null, c.a.createElement(Z, {
                selectedAgeRating: o,
                onParentalRestrictionRemoval: O,
                onParentalRestrictionSelection: f,
                key: "parental-control"
            })), c.a.createElement(K, null, c.a.createElement(ee, {
                onParentalCodeChange: m,
                parentalCode: s,
                selectedAgeRating: o,
                autofocus: !1
            })), c.a.createElement(J.b, null, c.a.createElement(J.a, {
                type: "submit",
                disabled: d,
                label: e("global.submit")
            }), s && c.a.createElement(J.a, {
                type: "button",
                label: e("global.remove"),
                buttonMode: b.c.SECONDARY,
                onClick: j
            })))
        };
        var ne = a("CMFl"), ce = a("ML4P");
        const re = () => {
            const e = Object(r.useTranslate)(), [t, a] = Object(n.useState)(!1),
                l = Object(n.useMemo)(() => t ? null : e("account.confirmPasswordToContinue"), [t]), o = Object(u.d)(),
                i = Object(n.useCallback)(() => {
                    a(!0)
                }, []);
            return c.a.createElement(ne.a, {title: l}, c.a.createElement(P, {
                onSuccess: i, onRepeatedError: () => {
                    o(Object(ce.n)("account_forgot_password"))
                }
            }, c.a.createElement(ae, null)))
        }, le = () => {
            const e = Object(r.useTranslate)();
            return c.a.createElement(c.a.Fragment, null, c.a.createElement(l.a, null, c.a.createElement(o.a, {title: e("account.parentalControl.pageTitle")})), c.a.createElement(i.a, {large: 1}, c.a.createElement(re, null)))
        };
        le.fetchData = async (e, t, a) => a(Object(s.u)());
        t.default = le
    }, "1Jen": function (e, t, a) {
        "use strict";
        a.r(t);
        var n = a("ERkP"), c = a.n(n), r = a("IFWP"), l = a("E/P7"), o = a("47v5"), i = a("m8Ei"), s = a("j/s1"),
            u = a("x3LB"), m = a("uDfI"), p = a("lcx8"), b = a("CMFl"), d = a("wTMg"), f = a("R5CS"), g = a("9tjd");
        const O = Object(s.d)(p.b).withConfig({componentId: "sc-1tjezq1-0"})(["margin-top:24px;"]), E = () => {
            const e = Object(r.useTranslate)(), t = Object(m.d)(), a = Object(m.e)(f.i),
                n = e(a ? "account.parentalFilter.deactivateParentalFilter" : "account.parentalFilter.activateParentalFilter");
            return c.a.createElement(b.a, {title: e("account.parentalFilter.title")}, c.a.createElement(d.b, null, c.a.createElement(d.a, null, c.a.createElement(d.d, {
                id: "account-parentalFilter-toggle-title",
                level: p.a.BERLIN
            }, e("account.parentalFilter.toggleText"))), c.a.createElement(u.a, {
                checked: a,
                onClick: () => {
                    t(Object(g.f)(!a))
                },
                name: "parental-filter",
                label: n,
                ariaLabelledBy: "account-parentalFilter-toggle-title",
                dataTestId: "parental-filter-toggle"
            })), c.a.createElement(O, {level: p.a.MADRID}, e("account.parentalFilter.legalMention")))
        };
        t.default = () => {
            const e = Object(r.useTranslate)();
            return c.a.createElement(c.a.Fragment, null, c.a.createElement(l.a, null, c.a.createElement(o.a, {title: e("global.parentalFilter")})), c.a.createElement(i.a, null, c.a.createElement(E, null)))
        }
    }, "2o7O": function (e, t, a) {
        "use strict";
        a.r(t);
        var n = a("ERkP"), c = a.n(n), r = a("j/s1"), l = a("DqXN"), o = a.n(l), i = a("IFWP"), s = a("wKTk"),
            u = a("lcx8"), m = a("E/P7"), p = a("47v5"), b = a("m8Ei"), d = a("XJ1h"), f = (a("kYxP"), a("x3LB")),
            g = a("uDfI"), O = a("CMFl"), E = a("wTMg"), j = a("R5CS"), h = a("WPdd"), v = a("Xe1R");
        const y = r.d.div.withConfig({componentId: "umziof-0"})(["margin-top:30px;&:first-of-type{margin-top:0;}&:last-of-type{select{margin-top:20px;}margin-bottom:30px;}"]),
            C = () => {
                const e = Object(i.useTranslate)(),
                    t = Object(g.d)(), {videoSettings: {autoplay: a, videoMaxQuality: r}} = Object(g.e)(j.p), [l, o] = Object(n.useState)(!1), [s, u] = Object(n.useState)(null), [m, p] = Object(n.useState)(!1);
                Object(n.useEffect)(() => {
                    o(!a)
                }, [a]), Object(n.useEffect)(() => {
                    p(!a && r !== v.s.VIDEO_QUALITY_AUTO)
                }, [a, r]), Object(n.useEffect)(() => {
                    const e = Object(d.a)(r) || r > v.s.VIDEO_QUALITY_LOW;
                    u(!e)
                }, [r]);
                const b = e("account.settings.paperTitle");
                return c.a.createElement(O.a, {title: b}, c.a.createElement(y, null, c.a.createElement(E.b, {key: "settings"}, c.a.createElement(E.a, null, c.a.createElement(E.d, {id: "settingsId"}, e("account.settings.settings")), c.a.createElement(E.c, {id: "descId"}, e("account.settings.settingsDescription"))), c.a.createElement(f.a, {
                    label: e("account.settings.settings"),
                    name: "settings",
                    ariaDescribedBy: "descId",
                    ariaLabelledBy: "settingsId",
                    onClick: () => {
                        t(Object(h.g)(!m))
                    },
                    checked: m,
                    dataTestId: "settings-greenmode-toggle"
                }))), c.a.createElement(y, null, c.a.createElement(E.b, null, c.a.createElement(E.a, null, c.a.createElement(E.d, {id: "videoQualityId"}, e("account.settings.videoQuality")), c.a.createElement(E.c, {id: "vidDescId"}, e("account.settings.videoQualityDescription"))), c.a.createElement(f.a, {
                    label: e("account.settings.videoQuality"),
                    name: "videoQuality",
                    ariaDescribedBy: "vidDescId",
                    ariaLabelledBy: "videoQualityId",
                    onClick: () => {
                        t(Object(h.h)(!s))
                    },
                    checked: s,
                    dataTestId: "settings-video-quality"
                }))), c.a.createElement(y, null, c.a.createElement(E.b, {key: "autoplay"}, c.a.createElement(E.a, null, c.a.createElement(E.d, {id: "autoplayId"}, e("account.settings.autoplay"))), c.a.createElement(f.a, {
                    label: e("account.settings.autoplay"),
                    name: "autoplay",
                    ariaDescribedBy: "autoplayDescId",
                    ariaLabelledBy: "autoplayId",
                    onClick: () => {
                        t(Object(h.f)(!a))
                    },
                    checked: l,
                    dataTestId: "settings-autoplay-toggle"
                }))))
            };
        C.fetchData = async (e, t, a, n) => {
            const c = n();
            return Object(j.t)(c) ? a(h.e) : Promise.resolve()
        };
        var k = C, I = a("MeMf"), w = a("ctUD"), P = a("Z0zz"), _ = a("wYlQ");

        function N() {
            return (N = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                }
                return e
            }).apply(this, arguments)
        }

        const x = Object(r.d)(w.a).withConfig({componentId: "gpwin2-0"})(["width:100%;"]),
            S = Object(r.d)(s.g).withConfig({componentId: "gpwin2-1"})(["color:#0b0426;", ";h2{margin-bottom:10px;", ";font-weight:bold;}a{color:#0b0426;}"], Object(u.g)(u.a.BERLIN), Object(u.g)(u.a.KINSHASA)),
            D = () => {
                const {image1Id: e, image2Id: t} = o.a.accountSettings, a = Object(i.useTranslate)(),
                    n = P.a.greenstream.filePath, r = "(min-width: 768px) calc(100vw / 2), calc(100vw / 4)", l = {
                        image1Props: {
                            imageId: e,
                            alt: "Description de 5 gestes que vous pouvez faire au quotidien",
                            sizes: r
                        }, image2Props: {imageId: t, alt: "", sizes: r}
                    };
                return c.a.createElement(c.a.Fragment, null, c.a.createElement(m.a, null, c.a.createElement(p.a, {title: a("account.settings.pageTitle")})), c.a.createElement(b.a, {hasMasonry: !0}, c.a.createElement(k, null), c.a.createElement(x, N({}, l.image1Props, {forceEager: !0})), c.a.createElement(x, N({}, l.image2Props, {forceEager: !0})), c.a.createElement(S, null, c.a.createElement(I.a, {pageName: n}))))
            };
        D.fetchData = Object(_.a)(k);
        t.default = D
    }, "2uVm": function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return n
        }));
        const n = a("j/s1").d.div.withConfig({componentId: "in5x4q-0"})(["margin-bottom:40px;"])
    }, "47v5": function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return d
        }));
        var n = a("ERkP"), c = a.n(n), r = a("j/s1"), l = a("lcx8"), o = a("rPqC"), i = a("5+Jc"), s = a("Jvjd"),
            u = a("CcBG");

        function m() {
            return (m = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                }
                return e
            }).apply(this, arguments)
        }

        function p(e, t) {
            if (null == e) return {};
            var a, n, c = function (e, t) {
                if (null == e) return {};
                var a, n, c = {}, r = Object.keys(e);
                for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || (c[a] = e[a]);
                return c
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (c[a] = e[a])
            }
            return c
        }

        const b = Object(r.d)(l.b).withConfig({componentId: "gep3d3-0"})(["font-weight:bold;color:", ";", ""], Object(o.h)("colors.text.primary"), s.p.gt(u.d.SMALL, Object(r.c)(["", ""], Object(i.m)((e, t) => Object(r.c)(["padding-left:", "px;"], Object(i.p)(t)))))),
            d = e => {
                let {title: t} = e, a = p(e, ["title"]);
                return c.a.createElement(b, m({level: l.a.KINSHASA, component: "h1"}, a), t)
            }
    }, "4LJG": function (e, t, a) {
        "use strict";
        a.r(t);
        var n = a("ERkP"), c = a.n(n), r = a("IFWP"), l = a("47v5"), o = a("m8Ei"), i = a("uDfI"), s = a("CMFl"),
            u = a("ODEI"), m = a("T/BM"), p = a("R5CS"), b = a("cn6j"), d = a("bAtj"), f = a("mZvw");
        const g = () => {
            const e = Object(r.useTranslate)(), t = Object(i.d)(), a = Object(i.e)(m.C), l = Object(i.e)(p.t);
            Object(n.useEffect)(() => {
                l && t(Object(d.b)())
            }, [l]);
            const o = Object(n.useCallback)((e, a) => {
                Object(b.k)({key: "toggleUserGDPRConsent", id: e}), t(Object(f.a)(e, a))
            }, []);
            return c.a.createElement(s.a, {title: e("account.privacyConfiguration.title")}, c.a.createElement(u.a, {
                userConsents: a,
                onToggle: o
            }))
        };
        var O = a("E/P7");
        t.default = () => {
            const e = Object(r.useTranslate)();
            return c.a.createElement(c.a.Fragment, null, c.a.createElement(O.a, null, c.a.createElement(l.a, {title: e("account.menu.privacy")})), c.a.createElement(o.a, null, c.a.createElement(g, null)))
        }
    }, "4dUg": function (e, t, a) {
        "use strict";
        a.r(t);
        a("kYxP");
        var n = a("ERkP"), c = a.n(n), r = a("uDfI"), l = a("IFWP"), o = a("ML4P"), i = a("pEs5"), s = a("j68i"),
            u = a("R5CS"), m = a("j7ca"), p = a("j/s1"), b = a("lcx8"), d = a("OXCn"), f = a("E/P7"), g = a("47v5"),
            O = a("m8Ei"), E = a("CMFl"), j = a("p1RZ"), h = a("sDRi");
        const v = Object(p.d)(h.a).withConfig({componentId: "sc-1y6a7v3-0"})(["margin:16px auto;"]), y = e => {
            let {onCancelDeleteProfile: t, onConfirmDeleteProfile: a, profile: n} = e;
            const r = Object(l.useTranslate)();
            return c.a.createElement(c.a.Fragment, null, c.a.createElement(f.a, null, c.a.createElement(g.a, {title: r("account.menu.profile")})), c.a.createElement(O.a, null, c.a.createElement(E.a, {title: r("account.profile.delete")}, c.a.createElement(b.b, {level: b.a.OTTAWA}, r("account.deleteProfileConfirmation.title")), c.a.createElement(v, {profile: n}), c.a.createElement(b.b, {level: b.a.BERLIN}, r("account.deleteProfileConfirmation.text")), c.a.createElement(j.b, null, c.a.createElement(j.a, {
                onClick: a,
                to: "account_info",
                label: r("account.profile.delete")
            }), c.a.createElement(j.a, {
                label: r("account.deleteProfileConfirmation.cancelButton"),
                buttonMode: d.c.SECONDARY,
                onClick: t,
                type: "button"
            })))))
        };
        var C = a("dkCR"), k = a("r6MD"), I = a("DqXN"), w = a.n(I), P = a("Gv/o"), _ = a("xbjX"), N = a("+tvP"),
            x = a("9B+4");
        const S = w.a.maxProfileNameLength, D = e => {
            let {avatar: t, onAvatarClick: a, onFormSubmit: r, profile: o} = e;
            const i = Object(l.useTranslate)(), [s, u] = Object(n.useState)(Object(k.a)(o, "username", "")),
                m = s.length > S, p = !(s && !m), b = Object(n.useCallback)(e => u(e), [u]),
                d = Object(n.useCallback)(async e => (e.preventDefault(), p ? null : r({
                    profileName: s,
                    avatarId: Object(k.a)(t, "id", null)
                })), [r, s, t]);
            return c.a.createElement("form", {onSubmit: d}, c.a.createElement(_.a, null, c.a.createElement(P.a, {
                avatar: t,
                isKid: !1,
                onAvatarClick: a,
                profileType: x.a.home
            }), c.a.createElement(N.a, {
                onChange: b,
                profileName: s
            })), c.a.createElement(j.b, null, c.a.createElement(j.a, {
                type: "submit",
                disabled: p,
                label: i("global.save")
            })))
        };
        var R = a("cn6j");
        const T = e => {
            let {match: {params: t}} = e;
            const {uid: a} = t || {}, u = Object(r.d)(), p = Object(l.useTranslate)(), b = Object(r.e)(i.f),
                d = Object(r.e)(i.g), f = d[a], [g, O] = Object(n.useState)(!1),
                E = Object(n.useMemo)(() => !(!f || !f.is_kid) || b.filter(e => !d[e].is_kid).length > 1, [f, b, d]);
            Object(n.useEffect)(() => {
                f || u(Object(o.n)("account_profiles"))
            }, [f]);
            const j = Object(n.useCallback)(() => {
                    Object(R.k)("clickDeleteProfile"), O(!0)
                }, []),
                h = Object(n.useCallback)(() => (u(Object(o.x)({name: "account_profiles"})), u(Object(s.l)(a))), [a]),
                v = Object(n.useCallback)(() => O(!1), []), k = Object(n.useCallback)(e => {
                    let {avatarId: t, kid: n, profileName: c, birthDate: r, gender: l} = e;
                    return u(Object(s.s)({profileUid: a, kid: n, profileName: c, birthDate: r, gender: l, avatarId: t}))
                }, [f]);
            if (g) return c.a.createElement(y, {onConfirmDeleteProfile: h, onCancelDeleteProfile: v, profile: f});
            const I = f && "home" === f.profile_type ? D : C.a;
            return c.a.createElement(m.a, {
                ProfileFormComponent: I,
                pageTitle: p("account.menu.profile"),
                formTitle: p("account.profile.edit"),
                canBeDeleted: E,
                onDeleteProfile: j,
                onFormSubmit: k,
                profile: f
            })
        };
        T.fetchData = async (e, t, a, n) => {
            const c = n(), r = Object(u.n)(c);
            return a(Object(s.n)(r))
        };
        t.default = T
    }, "9B+4": function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return n
        }));
        const n = {adult: "adult", home: "home", kid: "kid"}
    }, "9ko/": function (e, t, a) {
        "use strict";
        a.r(t);
        var n = a("uDfI"), c = a("9OUN"), r = a("ERkP"), l = a.n(r), o = a("cn6j"), i = a("t/Ae"), s = a("0QuS");

        class u extends r.Component {
            componentDidMount() {
                Object(o.m)("printAccountParameters"), this.props.isConnected && this.props.getUserConsent()
            }

            render() {
                const {parentalFilter: e} = this.props;
                return l.a.createElement("div", {className: "account-content__container"}, l.a.createElement("div", {className: "page__content account-parameters-page"}, l.a.createElement("div", {className: "account-parameters-page__container"}, l.a.createElement(s.a, {titleKey: "gdpr.accountPage.additionalTitle"}), l.a.createElement("div", {className: "account-parameters-page__content"}, l.a.createElement(i.a, {
                    name: "parentalFilter",
                    action: this.props.changeParentalFilter,
                    isChecked: e
                })))))
            }
        }

        var m = u, p = a("R5CS"), b = a("9tjd"), d = a("T/BM"), f = a("mZvw"), g = a("bAtj");

        function O(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), a.push.apply(a, n)
            }
            return a
        }

        function E(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a, e
        }

        const j = Object(n.c)(e => ({
            parentalFilter: Object(p.i)(e),
            isConnected: Object(p.t)(e),
            consents: Object(d.C)(e),
            userUnderage: Object(d.D)(e)
        }), e => (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? O(Object(a), !0).forEach((function (t) {
                    E(e, t, a[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : O(Object(a)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }))
            }
            return e
        })({
            changeParentalFilter: t => e(Object(b.f)(t)),
            setUserConsent: t => a => e(Object(f.a)(t, a))
        }, Object(c.b)({getUserConsent: g.b}, e)))(m);
        j.fetchData = (e, t, a, n) => Object(p.t)(n()) ? a(Object(g.b)()) : Promise.resolve();
        t.default = j
    }, B7wd: function (e, t, a) {
    }, BBfM: function (e, t, a) {
    }, BODk: function (e, t, a) {
    }, CMFl: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return E
        }));
        var n = a("ERkP"), c = a.n(n), r = a("uDfI"), l = a("j/s1"), o = a("wKTk"), i = a("EHrM"), s = a("5+Jc"),
            u = a("Jvjd"), m = a("rPqC"), p = a("R5CS");

        function b() {
            return (b = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                }
                return e
            }).apply(this, arguments)
        }

        function d(e, t) {
            if (null == e) return {};
            var a, n, c = function (e, t) {
                if (null == e) return {};
                var a, n, c = {}, r = Object.keys(e);
                for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || (c[a] = e[a]);
                return c
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (c[a] = e[a])
            }
            return c
        }

        const f = Object(l.d)(i.c).withConfig({componentId: "sc-191op9q-0"})(["width:16px;height:16px;", ";"], u.p.gt(s.e.medium, Object(l.c)(["width:24px;height:24px;"]))),
            g = l.d.button.withConfig({componentId: "sc-191op9q-1"})(["outline:none;"]),
            O = (e, t) => () => c.a.createElement(g, {onClick: t, type: "button"}, c.a.createElement(f, {name: e})),
            E = e => {
                let {title: t, headerActionIconName: a, onHeaderActionClick: n, children: l} = e,
                    s = d(e, ["title", "headerActionIconName", "onHeaderActionClick", "children"]);
                const u = Object(r.e)(p.t);
                return c.a.createElement(o.g, b({
                    title: t,
                    renderHeaderActions: a ? O(a, n) : null
                }, s), c.a.createElement(m.d, {mode: m.c.LIGHT}, u ? l : c.a.createElement(i.c, {
                    name: i.a.Loading,
                    size: 24
                })))
            }
    }, "E/P7": function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return s
        }));
        var n = a("ERkP"), c = a.n(n), r = a("j/s1"), l = a("Jvjd"), o = a("CcBG");
        const i = r.d.div.withConfig({componentId: "sc-1mxvyrm-0"})(["display:flex;flex-direction:column;align-items:center;", " ", ""], l.t, l.p.gt(o.d.SMALL, Object(r.c)(["align-items:flex-start;"]))),
            s = e => {
                let {children: t} = e;
                return c.a.createElement(i, {
                    marginTop: {small: 4, medium: 10, large: 12},
                    marginBottom: {xsmall: 8, small: 12, medium: 8, large: 10}
                }, t)
            }
    }, E0v2: function (e, t, a) {
        "use strict";
        a.r(t);
        var n = a("uDfI"), c = a("ERkP"), r = a.n(c), l = a("Xe1R"), o = (a("kYxP"), a("IFWP"));
        a("f3HA");
        const i = /^((?:(?![aeiou])[a-z]){5})$/i;

        class s extends r.a.Component {
            constructor(e) {
                super(e), function (e, t, a) {
                    t in e ? Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = a
                }(this, "handleInput", () => {
                    const e = this.getValue(), t = [];
                    for (let a = 0; a < 5; a++) t.push(a < e.length ? e[a] : "");
                    this.setState({placeholders: t}), this.props.onInput(e)
                }), this.state = {placeholders: ["", "", "", "", ""]}
            }

            getValue() {
                return this.refs.pairingInput.value
            }

            isTokenValid() {
                return i.test(this.getValue())
            }

            render() {
                return r.a.createElement("div", {className: "pairing-input"}, r.a.createElement("input", {
                    className: "pairing-input__input",
                    type: "text",
                    maxLength: "5",
                    autoComplete: "off",
                    id: "pairingInput",
                    ref: "pairingInput",
                    onChange: this.handleInput
                }), r.a.createElement("label", {
                    className: "pairing-input__label",
                    htmlFor: "pairingInput"
                }), r.a.createElement("div", {
                    className: "pairing-input__placeholder",
                    ref: "placeholder"
                }, this.state.placeholders.map((e, t) => r.a.createElement("div", {key: t}, e))))
            }
        }

        var u = s, m = a("07br");
        var p = e => {
            let {user: t} = e;
            const a = Object(o.useTranslate)(),
                l = Object(n.d)(), [i, s] = Object(c.useState)(!0), [p, b] = Object(c.useState)(!1),
                d = Object(c.useRef)();
            Object(c.useEffect)(() => {
                t.UID && l(Object(m.v)(t))
            }, [t.UID]);
            const f = Object(c.useCallback)(() => {
                b(!0)
            }, []), g = Object(c.useCallback)(e => {
                s(5 !== e.length)
            }, []), O = Object(c.useCallback)(e => {
                e.preventDefault();
                const a = d.current.getValue();
                l(Object(m.z)(t, a))
            }, [t]);
            let E, j, h, v;
            return p ? (h = r.a.createElement("div", {className: "account-pairing__instructions"}, r.a.createElement("div", {className: "account-pairing__container"}, r.a.createElement("ol", {className: "account-pairing__list"}, r.a.createElement("li", null, a("pairing.home.openApp")), r.a.createElement("li", null, a("pairing.home.clickOnSofaIcon"), r.a.createElement("img", {src: "/assets/images/modules/pairing/foyer-a18b266c8a.png"})), r.a.createElement("li", null, a("pairing.home.copyCode"))))), v = r.a.createElement("div", {className: "account-pairing__providers"}, r.a.createElement("div", {className: "account-pairing__providers-message"}, r.a.createElement("small", null, a("pairing.home.providersUnavailable"))), r.a.createElement("div", {className: "account-pairing__providers-logos"}, r.a.createElement("div", null, r.a.createElement("img", {src: "/assets/images/modules/pairing/logo-sfr-18211e75b3.png"})), r.a.createElement("div", null, r.a.createElement("img", {src: "/assets/images/modules/pairing/logo-orange-203806f672.png"})), r.a.createElement("div", null, r.a.createElement("img", {src: "/assets/images/modules/pairing/logo-numericable-f10e4de5cb.png"})), r.a.createElement("div", null, r.a.createElement("img", {src: "/assets/images/modules/pairing/logo-canal-b68c09b3e9.png"}))))) : E = r.a.createElement("button", {
                type: "button",
                className: "account-pairing__help",
                onClick: f
            }, a("pairing.home.whereToGetMyCode")), i || (j = r.a.createElement("div", {className: "account-pairing__button-container"}, r.a.createElement("button", {
                type: "submit",
                className: "account-pairing__button account-pairing__button--active"
            }, a("global.submit")))), r.a.createElement("div", {className: "account-pairing__content account-pairing__content--home"}, r.a.createElement("div", {className: "account-pairing__wrapper"}, r.a.createElement("p", {className: "account-pairing__message--important"}, a("pairing.home.enterCode")), r.a.createElement("div", {className: "account-pairing__container"}, r.a.createElement("form", {
                method: "post",
                onSubmit: O,
                className: "account-pairing__form"
            }, r.a.createElement(u, {ref: d, onInput: g}), j)), E, h), r.a.createElement("div", null, v))
        }, b = a("EN3g"), d = a("O94r"), f = a.n(d), g = a("1h05"), O = a("w1n8"), E = a("zKc3");
        a("R+7c");
        var j = e => {
            let {profile: t, pairingStatus: a} = e;
            const n = a === l.q.PAIRING_UNSYNCHRONIZED, c = a === l.q.PAIRING_SYNCHRONIZED,
                o = a === l.q.PAIRING_CONFIRM_SYNCHRONIZED, {email: i, firstName: s} = t;
            return r.a.createElement("div", {className: f()("pairing-tv", {"pairing-tv--disconnected": n})}, r.a.createElement("div", {className: "pairing-tv__content"}, r.a.createElement("div", {className: "pairing-tv__avatar"}, r.a.createElement(O.a, {
                className: "avatar--fluid avatar__pairing",
                profile: t
            }, r.a.createElement(E.a, {
                className: f()({
                    "avatar-status--off": n,
                    "avatar-status--on": c || o
                })
            }))), !s && (o || n || c) ? r.a.createElement("span", {className: "pairing-tv__username"}, "Â ") : r.a.createElement(g.a, {
                email: i,
                firstName: s,
                className: "pairing-tv__username"
            })))
        };
        var h = Object(o.translate)(e => {
            let {profile: t, UID: a, boxId: n, boxType: c, removePair: o, t: i} = e;
            return r.a.createElement("div", {className: "account-pairing__content"}, r.a.createElement(j, {
                profile: t,
                pairingStatus: l.q.PAIRING_SYNCHRONIZED
            }), r.a.createElement("p", {className: "account-pairing__message u-margin-top-1"}, i("pairing.validate.message")), r.a.createElement("div", {className: "account-pairing__button--detach"}, r.a.createElement(b.a, {
                className: "account-pairing__button account-pairing__button--secondary account-pairing__button--no-hover",
                action: () => o(a, c, n)
            }, i("pairing.validate.action"))))
        }), v = a("R5CS"), y = a("A03L");
        var C = Object(n.c)(e => ({
            profile: Object(v.m)(e),
            UID: Object(v.n)(e),
            boxType: Object(y.c)(e),
            boxId: Object(y.b)(e)
        }), e => ({removePair: (t, a, n) => e(Object(m.x)(t, a, n))}))(h);
        var k = Object(o.translate)(e => {
            let {profile: t, gotIt: a, t: n} = e;
            return r.a.createElement("div", {className: "account-pairing__content account-pairing__valid"}, r.a.createElement(j, {
                profile: t,
                pairingStatus: l.q.PAIRING_CONFIRM_SYNCHRONIZED
            }), r.a.createElement("p", {className: "account-pairing__message u-margin-top-1"}, n("pairing.valid.message")), r.a.createElement("div", {className: "account-pairing__button--detach"}, r.a.createElement(b.a, {
                className: "account-pairing__button account-pairing__button--active",
                action: () => a(l.q.PAIRING_SYNCHRONIZED)
            }, n("account.noted"))))
        });
        var I = Object(n.c)(e => ({profile: Object(v.m)(e)}), e => ({gotIt: t => e(Object(m.n)(t))}))(k);
        var w = Object(o.translate)(e => {
            let {profile: t, confirmPairing: a, t: n} = e;
            return r.a.createElement("div", {className: "account-pairing__content"}, r.a.createElement(j, {
                profile: t,
                pairingStatus: l.q.PAIRING_UNSYNCHRONIZED
            }), r.a.createElement("p", {className: "account-pairing__message"}, n("pairing.unsynchronized.message")), r.a.createElement("div", {className: "account-pairing__button--detach"}, r.a.createElement(b.a, {
                className: "account-pairing__button account-pairing__button--active",
                action: () => a(null)
            }, n("account.noted"))))
        });
        var P = Object(n.c)(e => ({profile: Object(v.m)(e)}), e => ({confirmPairing: t => e(Object(m.n)(t))}))(w);
        a("BODk");
        var _ = e => {
            let {className: t} = e;
            return r.a.createElement("div", {className: f()("wifi", t)}, r.a.createElement("svg", {
                className: "wifi__animation",
                viewBox: "0 0 100 113"
            }, r.a.createElement("g", {fill: "#69B9F8"}, r.a.createElement("path", {d: "M2.332 80.3c-.597 0-1.187-.229-1.648-.688a2.373 2.373 0 0 1 0-3.333c5.387-5.428 8.355-12.652 8.355-20.312 0-7.677-2.968-14.9-8.355-20.353-.912-.895-.912-2.39 0-3.308a2.336 2.336 0 0 1 3.313 0c6.252 6.299 9.723 14.719 9.723 23.661 0 8.926-3.471 17.345-9.723 23.645a2.324 2.324 0 0 1-1.665.689"}), r.a.createElement("path", {
                d: "M17.85 95.961c-.596 0-1.185-.253-1.641-.689a2.361 2.361 0 0 1 0-3.332c9.541-9.614 14.789-22.402 14.789-35.996 0-13.589-5.248-26.353-14.79-35.967a2.36 2.36 0 0 1 0-3.332 2.319 2.319 0 0 1 3.308 0c10.406 10.51 16.162 24.468 16.162 39.3 0 14.859-5.756 28.818-16.162 39.327a2.426 2.426 0 0 1-1.665.69",
                mask: "url(#b)"
            }), r.a.createElement("path", {
                d: "M33.393 111.604c-.59 0-1.21-.235-1.665-.694a2.371 2.371 0 0 1 0-3.333c28.258-28.472 28.258-74.765 0-103.237a2.378 2.378 0 0 1 0-3.338 2.329 2.329 0 0 1 3.307 0c30.086 30.314 30.086 79.599 0 109.908a2.306 2.306 0 0 1-1.642.694",
                mask: "url(#b)"
            }))))
        };
        var N = Object(o.translate)(e => {
            let {profile: t, t: a} = e;
            return r.a.createElement("div", {className: "account-pairing__content"}, r.a.createElement(g.a, {
                className: "account-pairing__title account-pairing__title--bigger",
                firstName: t.firstName || a("pairing.synchronizing.letsgo")
            }), r.a.createElement("p", {className: "account-pairing__message"}, a("pairing.synchronizing.message")), r.a.createElement("div", {className: "account-pairing__horizontal-wrapper"}, r.a.createElement("div", {className: "account-pairing__avatar"}, r.a.createElement(O.a, {
                className: "avatar--fluid avatar__pairing",
                profile: t
            })), r.a.createElement(_, null)))
        });
        var x = Object(n.c)(e => ({profile: Object(v.m)(e)}))(N), S = a("VtqW");
        var D = Object(o.translate)(e => {
            let {clearPairingToken: t, t: a} = e;
            return r.a.createElement("div", {className: "account-pairing__content"}, r.a.createElement("div", {className: "account-pairing__image"}, r.a.createElement(S.a, {className: "error-emoticon__drop--single"})), r.a.createElement("span", {className: "account-pairing__title account-pairing__title-highlight u-margin-top-1 u-font-size-2"}, a("pairing.invalid.title")), r.a.createElement("p", {className: "account-pairing__message"}, a("pairing.invalid.promptTryAgain")), r.a.createElement("div", {className: "account-pairing__button--detach"}, r.a.createElement(b.a, {
                className: "account-pairing__button account-pairing__button--active",
                action: t
            }, a("pairing.invalid.tryAgain"))))
        });
        var R = Object(n.c)(e => ({profile: Object(v.m)(e)}), e => ({clearPairingToken: () => e(Object(m.m)())}))(D);
        a("w4JB");
        var T = e => {
            let t = null;
            return t = e.status === l.q.PAIRING_SYNCHRONIZED ? r.a.createElement(C, null) : e.status === l.q.PAIRING_CONFIRM_SYNCHRONIZED ? r.a.createElement(I, null) : e.status === l.q.PAIRING_UNSYNCHRONIZED ? r.a.createElement(P, null) : e.status === l.q.PAIRING_SYNCHRONIZING ? r.a.createElement(x, null) : e.status === l.q.PAIRING_INVALID_SYNCHRONIZED || e.status === l.q.ERROR ? r.a.createElement(R, null) : r.a.createElement(p, e), r.a.createElement("div", {className: "account-content__container account-pairing"}, t)
        };
        t.default = Object(n.c)(e => ({
            user: Object(v.o)(e),
            status: Object(y.e)(e),
            token: Object(y.f)(e),
            boxType: Object(y.c)(e)
        }))(T)
    }, GI2F: function (e, t, a) {
    }, "Gv/o": function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return b
        }));
        var n = a("ERkP"), c = a.n(n), r = a("j/s1"), l = a("IFWP"), o = a("OXCn"), i = a("sDRi"), s = a("2uVm"),
            u = (a("9B+4"), a("cn6j"));
        const m = Object(r.d)(s.a).withConfig({componentId: "pxqy3j-0"})(["display:flex;align-items:center;"]),
            p = Object(r.d)(i.a).withConfig({componentId: "pxqy3j-1"})(["margin-right:16px;"]), b = e => {
                let {avatar: t, isKid: a = !1, onAvatarClick: r, profileType: i} = e;
                const s = Object(l.useTranslate)(), b = {avatar: t, is_kid: a},
                    d = s(t ? "account.profile.updateAvatar" : "account.profile.chooseAvatar"),
                    f = Object(n.useCallback)(() => {
                        Object(u.k)("clickChangeAvatar"), r({profileType: i})
                    }, [i]);
                return c.a.createElement(m, null, c.a.createElement(p, {profile: b}), c.a.createElement(o.a, {
                    type: "button",
                    onClick: f,
                    label: d,
                    buttonMode: o.c.SECONDARY
                }))
            }
    }, HWe6: function (e, t, a) {
        "use strict";
        a.r(t);
        var n = a("hqLi"), c = (a("kYxP"), a("ERkP")), r = a.n(c), l = a("uDfI"), o = a("/Z5K"), i = a("IFWP"),
            s = a("rPqC"), u = a("5+Jc"), m = a("Jvjd"), p = a("j/s1"), b = a("xk+H"), d = a.n(b), f = a("tR9X"),
            g = a("cySE"), O = a("90YP"), E = a("ML4P"), j = a("oj5B"), h = a("s+IR"), v = (a("ub7D"), a("EC9c")),
            y = (a("vbGR"), a("pEs5")), C = a("HTup");
        const k = p.d.div.withConfig({componentId: "sc-1agff4h-0"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;color:", ";min-height:100vh;.profilesGate{flex:0;}"], Object(s.h)("colors.text.primary")),
            I = Object(p.d)(f.a).withConfig({componentId: "sc-1agff4h-1"})(["max-width:219px;", ";"], m.p.gt(u.e.large, Object(p.c)(["margin-bottom:32px;"]))),
            w = e => "".concat(e).concat(o.i.frontspace, "search");
        t.default = e => {
            let {layout: t} = e;
            const a = Object(i.useTranslate)(), u = Object(l.d)(), m = Object(v.a)(),
                p = Object(l.e)(Object(j.s)(m)), [b, f] = Object(c.useState)(!1),
                P = Object(l.e)(y.b), [_, N] = Object(c.useState)(!1), [x, S] = Object(c.useState)(null),
                D = "account_profile_bookmarks" === Object(l.e)(j.e), [R, T] = Object(c.useState)(t),
                A = Object(c.useMemo)(() => Object(n.a)(R), [R]);
            return Object(c.useEffect)(() => {
                T(t)
            }, [t]), Object(c.useEffect)(() => (u(h.d), () => {
                _ || u(Object(C.z)()), S(null), u(h.c)
            }), []), Object(c.useEffect)(() => {
                P && S(P)
            }, [P]), Object(c.useEffect)(() => {
                let e;
                if (x) {
                    u(Object(C.y)());
                    const n = d()(t, "blocks.0.title", {
                        long: a("splashScreen.loadingProfile"),
                        short: a("splashScreen.loadingProfile")
                    });
                    T(n), window.scrollTo && window.scrollTo({top: 0, behavior: "smooth"}), e = setTimeout(() => {
                        N(!0)
                    }, 3e3)
                }
                return () => {
                    e && clearTimeout(e)
                }
            }, [x]), Object(c.useEffect)(() => {
                p && (f(!0), u(E.z))
            }, [p]), Object(c.useEffect)(() => {
                b && _ && (u(Object(C.z)()), u(E.r))
            }, [b, _]), D ? r.a.createElement(O.a, {
                classNameWrapper: x ? "profilesGate profile-selected" : "profilesGate",
                entityType: o.i.frontspace,
                blocks: t.blocks,
                entityId: o.j.profilesgate,
                transitionId: w
            }) : r.a.createElement(s.d, {mode: s.c.DARK}, r.a.createElement(k, null, r.a.createElement(I, {size: 150}), A ? r.a.createElement(g.a, {
                key: "loading",
                delay: "0"
            }, r.a.createElement(i.Trans, {i18nKey: "splashScreen.loading"})) : r.a.createElement(O.a, {
                classNameWrapper: x ? "profilesGate profile-selected" : "profilesGate",
                entityType: o.i.frontspace,
                blocks: R.blocks,
                entityId: o.j.profilesgate,
                transitionId: w
            })))
        }
    }, Jsve: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return T
        }));
        a("kYxP");
        var n = a("ERkP"), c = a.n(n), r = a("uDfI"), l = a("wgY5"), o = a.n(l), i = a("IFWP"), s = a("DqXN"),
            u = a("OXCn"), m = a("R5CS"), p = a("j/s1"), b = a("D3ax"), d = a("MpDc"), f = a("+5/e"), g = a("lUr6"),
            O = a("S4EX"), E = a("rp+Z");
        const j = e => {
            let {disabled: t, errorText: a, hasError: n, hideIcon: r, lastNameInput: l, readOnly: o, setFormFields: s} = e;
            const u = Object(i.useTranslate)(), m = E.c.lengthWithRequired(l), p = !(!l || m);
            return c.a.createElement(O.e, {
                label: u("account.lastName"),
                type: "text",
                name: "lastName",
                value: l,
                onChange: e => {
                    s({lastNameInput: e.target.value})
                },
                hasError: p || n,
                valid: m,
                disabled: t,
                hideIcon: r || o,
                errorText: a,
                readOnly: o
            })
        };
        var h = a("VGyI");
        const v = p.d.div.withConfig({componentId: "sc-1lgaxuq-0"})(["margin-top:48px;"]), y = e => {
            let {
                fields: t = {}, onFormFieldChange: a = (() => {
                }), readOnly: n = !1
            } = e;
            const l = Object(i.useTranslate)(), o = Object(r.e)(Object(h.mb)("zipCode")), s = Object(r.e)(h.ub);
            return c.a.createElement(c.a.Fragment, null, c.a.createElement(v, null, c.a.createElement(g.a, {
                firstNameInput: t.firstNameInput,
                readOnly: n,
                setFormFields: a,
                errorText: l("account.invalidFirstName")
            })), s ? c.a.createElement(v, null, c.a.createElement(j, {
                lastNameInput: t.lastNameInput,
                readOnly: n,
                setFormFields: a,
                errorText: l("account.invalidLastName")
            })) : null, c.a.createElement(v, null, c.a.createElement(b.a, {
                birthdateInput: t.birthdateInput,
                readOnly: n,
                setFormFields: a
            })), c.a.createElement(v, null, c.a.createElement(d.a, {
                genderInput: t.gender,
                readOnly: n,
                setFormFields: a,
                label: l("onboarding.labels.gender"),
                title: n ? "-" : l("onboarding.labels.genderChoice")
            })), o && c.a.createElement(v, null, c.a.createElement(f.a, {
                onValidationChange: e => a({isZipCodeValid: e}),
                readOnly: n,
                setFormFields: a,
                zipCodeInput: t.zipCodeInput
            })))
        };
        var C = a("DEJH"), k = a("p1RZ");

        function I(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), a.push.apply(a, n)
            }
            return a
        }

        function w(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a, e
        }

        const P = e => t => Object.values(e).reduce((e, a) => a ? e && a(t) : e, !0), _ = e => {
            let {onCancelButtonClick: t, onSubmitForm: a} = e;
            const l = Object(i.useTranslate)(), {firstName: p, lastName: b, gender: d, zip: f} = Object(r.e)(m.m),
                g = Object(C.e)(), O = Object(r.e)(h.nb), j = Object(r.e)(h.tb), v = Object(r.e)(h.ub),
                _ = Object(r.e)(h.rb), [N, x] = Object(n.useState)({
                    birthdateInput: g,
                    firstNameInput: p || "",
                    lastNameInput: b || "",
                    gender: d,
                    isBirthdateValid: !0,
                    isZipCodeValid: !0,
                    zipCodeInput: f
                }), S = Object(n.useMemo)(() => {
                    const e = {check: E.c.length, required: O && E.c.required};
                    return P(e)(N.firstNameInput)
                }, [O, N.firstNameInput]), D = Object(n.useMemo)(() => {
                    const e = {check: v && E.c.length, required: j && E.c.required};
                    return P(e)(N.lastNameInput)
                }, [v, j, N.lastNameInput]), R = !_ || N.gender, T = S && D && N.isBirthdateValid && N.isZipCodeValid && R,
                A = Object(n.useCallback)(e => x(function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? I(Object(a), !0).forEach((function (t) {
                            w(e, t, a[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : I(Object(a)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                        }))
                    }
                    return e
                }({}, N, {}, e)), [N]), M = Object(n.useCallback)(e => {
                    if (e.preventDefault(), !T) return;
                    const {shortDate: t} = s.moment.formats, n = o()(N.birthdateInput, t), c = {
                        birthDay: n.format("DD"),
                        birthMonth: n.format("MM"),
                        birthYear: n.format("YYYY"),
                        firstName: N.firstNameInput,
                        lastName: N.lastNameInput,
                        gender: N.gender || null,
                        zip: N.zipCodeInput
                    };
                    a(c)
                }, [N.birthdateInput, N.firstNameInput, N.lastNameInput, N.gender, N.zipCodeInput, a, T]);
            return c.a.createElement("form", {onSubmit: M}, c.a.createElement(y, {
                fields: N,
                onFormFieldChange: A
            }), c.a.createElement(k.b, null, c.a.createElement(k.a, {
                disabled: !T,
                type: "submit",
                label: l("global.submit")
            }), c.a.createElement(k.a, {
                type: "button",
                label: l("global.cancel"),
                buttonMode: u.c.SECONDARY,
                onClick: t
            })))
        };
        var N = a("Xe1R"), x = a("cn6j"), S = a("3tgQ");
        const D = e => {
            let {mode: t = N.r.READONLY, onUpdateButtonClick: a} = e;
            const l = Object(i.useTranslate)(), {firstName: o, lastName: s, gender: p, zip: b} = Object(r.e)(m.m),
                d = Object(C.e)(), f = t === N.r.DISPLAY, g = Object(r.e)(Object(h.mb)("accountDeletion")),
                O = {firstNameInput: o, lastNameInput: s, birthdateInput: d, gender: p, zipCodeInput: b},
                E = Object(n.useCallback)(() => {
                    a(), Object(x.k)("clickModifyInformation")
                }, [a]);
            return c.a.createElement("div", null, c.a.createElement(y, {
                fields: O,
                readOnly: !0
            }), f ? null : c.a.createElement(k.b, null, c.a.createElement(k.a, {
                type: "button",
                label: l("global.update"),
                onClick: E
            }), g && c.a.createElement(k.a, {
                component: S.a,
                to: "account_delete",
                label: l("account.deleteAction"),
                buttonMode: u.c.SECONDARY
            })))
        };
        var R = a("07br");
        const T = e => {
            let {mode: t = N.r.READONLY} = e;
            const a = Object(r.d)(), [l, o] = Object(n.useState)(t === N.r.EDIT),
                i = Object(n.useCallback)(e => () => o(e), []), s = Object(n.useCallback)(e => {
                    a(Object(R.q)({profile: e})).then(() => o(!1))
                }, []);
            return l ? c.a.createElement(_, {
                onCancelButtonClick: i(!1),
                onSubmitForm: s
            }) : c.a.createElement(D, {mode: t, onUpdateButtonClick: i(!0)})
        }
    }, MqOk: function (e, t, a) {
        "use strict";
        a.r(t);
        var n = a("uDfI"), c = a("ERkP"), r = a.n(c), l = a("cn6j"), o = a("uXyq"), i = a("v209"), s = a("2H+z"),
            u = a("+3Pp"), m = a("W6XZ"), p = a("O94r"), b = a.n(p), d = a("IFWP"), f = a("3tgQ"), g = a("Z/c1"),
            O = a("cYRl");
        a("jboz");
        const E = e => {
            let {hasUserAccess: t, service: a, isActive: n, children: c, t: l} = e;
            return a ? r.a.createElement("div", {
                className: "freemium-pack",
                "data-code": a.code
            }, r.a.createElement("div", {className: "freemium-pack__line"}, r.a.createElement("span", {className: "freemium-pack__icon-service"}, r.a.createElement(O.a, {
                folder: "icon-service",
                image: a.code,
                title: a.title
            })), r.a.createElement(g.a, {
                extraClassName: "freemium-pack__icon",
                hasUserAccess: t,
                serviceCode: t ? a.code : null,
                isActive: n
            }), r.a.createElement("span", {className: "freemium-pack__status"}, l("freemium.".concat(t ? "subscribed" : "notSubscribed")))), c) : null
        };
        E.defaultProps = {hasUserAccess: !1, children: null};
        var j = Object(d.translate)(E), h = a("NUgN"), v = a("lAuQ");
        var y = Object(n.c)((e, t) => {
            let {freemiumPack: a} = t;
            return {service: Object(h.j)(e, a), isActive: Object(v.m)(e)}
        })(j), C = a("ppam"), k = a("0QuS");

        class I extends r.a.Component {
            static getSSOChoiceLink(e, t) {
                const a = b()("account-content__line-sso", {"account-content__line-sso--spaced": !!t});
                return r.a.createElement("div", {className: a}, t ? r.a.createElement("p", null, t) : null, r.a.createElement(f.a, {
                    className: "account-content__link",
                    to: "sso_partner_choice"
                }, e))
            }

            getHeader() {
                const {userOperator: e, t: t} = this.props;
                return e ? r.a.createElement("div", {className: "account-content__legend"}, this.getNoPacksText(), r.a.createElement("div", {className: "account-content__line-sso"}, r.a.createElement(C.a, {
                    captionText: e.title,
                    images: e.images,
                    role: "vignette",
                    template: "square-88",
                    quality: "high"
                })), I.getSSOChoiceLink(t("freemium.changeOperator"))) : I.getSSOChoiceLink(t("freemium.addOperator"), t("freemium.addOperatorPretext"))
            }

            getNoPacksText() {
                const {userOperator: e = {}, userPacks: t, t: a} = this.props;
                return !!Object(m.a)(t, t => t.subscription.store_code === e.code) ? null : r.a.createElement("p", {className: "account-content__line-sso"}, a("freemium.noOperatorSub"))
            }

            getFreemiumPacksFromOperator() {
                const {freemiumPacks: e, operators: t, userOperator: a, userPacks: n} = this.props;
                if (!a) return [];
                const c = Object(u.a)(n, e => !t[e.subscription.store_code]);
                return Object(s.a)(e, (e, n) => {
                    const l = Object(m.a)(c, {id: n.id}), o = !!l, i = o && t[l.subscription.store_code],
                        s = !o && Object(m.a)(n.freemium_stores, {code: a.code});
                    return (i || s) && e.push(r.a.createElement(y, {freemiumPack: n, hasUserAccess: o, key: n.id})), e
                }, [])
            }

            render() {
                const {ssoFlipping: e} = this.props;
                return e ? r.a.createElement("div", {className: "account-content__block"}, r.a.createElement("div", {className: "u-txt-center"}, r.a.createElement(k.a, {titleKey: "freemium.operatorSubscriptions"}), this.getHeader()), this.getFreemiumPacksFromOperator()) : null
            }
        }

        var w = Object(d.translate)(I), P = a("R5CS"), _ = a("1M5G");
        var N = Object(n.c)(e => ({
            operators: Object(_.b)(e),
            userOperator: Object(_.f)(e),
            isConnected: Object(P.t)(e)
        }))(w), x = a("j/s1"), S = a("rPqC");
        const D = {CONSUMABLE: "consumable", LIFETIME: "lifetime", MONTHLY: "monthly"},
            R = {APPLE: "itunes-store", GOOGLE: "google-play"};
        var T = a("IBrT");
        var A = Object(d.translate)(e => {
            let {pack: t = {}, className: a, onClick: n, trackEvent: c, t: l} = e;
            return r.a.createElement(f.a, {
                to: "freemium",
                params: {pack: t.code},
                className: a,
                trackEvent: c,
                onClick: n
            }, function (e, t) {
                const a = Object(T.d)(e);
                return a ? e.type === D.CONSUMABLE || e.type === D.LIFETIME ? r.a.createElement("span", null, r.a.createElement("span", {className: "freemium-button__label"}, t("freemium.accessContent")), r.a.createElement("span", {className: "freemium-button__price"}, a)) : r.a.createElement("span", null, r.a.createElement("span", {className: "freemium-button__label"}, t("freemium.subscribeFor")), r.a.createElement("span", {className: "freemium-button__fee"}, r.a.createElement("span", {className: "freemium-button__price"}, t("freemium.packPrice", {packPrice: a})), r.a.createElement("span", {className: "freemium-button__period"}, t("freemium.packPeriod")))) : r.a.createElement("span", {className: "freemium-button__label"}, t("freemium.subscribe"))
            }(t, l))
        });
        const M = x.d.div.withConfig({componentId: "sc-1eswxrd-0"})(["font-weight:bold;text-decoration:underline;color:", ";cursor:pointer;"], Object(S.h)("legacyColors.darker_grey"));

        class F extends r.a.Component {
            constructor(e) {
                var t, a, n;
                super(e), n = () => {
                    this.setState(e => {
                        let {showManageSubContent: t} = e;
                        return {showManageSubContent: !t}
                    })
                }, (a = "displayManageSubContent") in (t = this) ? Object.defineProperty(t, a, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[a] = n, this.state = {showManageSubContent: !1}
            }

            renderSubscribed() {
                const {pack: e, userPack: t, t: a} = this.props;
                let n, c;
                t.subscription.store_code === R.APPLE ? (c = "Apple", n = r.a.createElement("div", null, r.a.createElement("div", null, a("freemium.editSubiOS")), r.a.createElement("div", null, a("freemium.editSubItunes")))) : t.subscription.store_code === R.GOOGLE && (c = "Android", n = r.a.createElement("div", null, r.a.createElement("div", null, a("freemium.editSubAndroid"), r.a.createElement("a", {
                    href: "https://payments.google.com/",
                    target: "_blank"
                }, a("freemium.editSubAndroidLink")))));
                const l = b()("account-infos__line", "account-infos__pack-management", {"account-infos__pack-management--disabled": !this.state.showManageSubContent});
                return r.a.createElement("div", {className: "account-infos account-infos--freemium"}, r.a.createElement(y, {
                    freemiumPack: e,
                    hasUserAccess: !0
                }), r.a.createElement("div", {className: "account-infos__line"}, r.a.createElement("p", null, a("freemium.subscribedPack", e))), r.a.createElement("div", {className: "line"}, r.a.createElement(M, {onClick: this.displayManageSubContent}, a("freemium.handleSubscription")), r.a.createElement("div", {className: l}, r.a.createElement("p", {className: "line__info"}, a("freemium.cannotHandleSub")), r.a.createElement("div", {className: "line__management"}, r.a.createElement("span", null, a("freemium.deviceSub", {device: c})), n))))
            }

            render() {
                const {pack: e, service: t} = this.props;
                return t ? this.props.userPack ? this.renderSubscribed() : r.a.createElement("div", {className: "account-infos account-infos--freemium"}, r.a.createElement(y, {freemiumPack: e}, r.a.createElement("div", {className: "u-clearfix"}, r.a.createElement(A, {
                    className: "freemium-button freemium-button--account",
                    pack: e,
                    service: t
                })))) : null
            }
        }

        var L = Object(d.translate)(F);
        var Y = Object(n.c)((e, t) => {
            let {pack: a} = t;
            return {service: Object(h.j)(e, a)}
        })(L);
        var q = e => {
            let {freemiumPacks: t, userPacks: a, operators: n} = e;
            const c = Object(u.a)(a, e => !!n[e.subscription.store_code]);
            let l = Object(s.a)(t, (e, t) => {
                const a = Object(m.a)(c, {id: t.id});
                return (a && !n[a.subscription.store_code] || !a) && e.push(r.a.createElement(Y, {
                    pack: t,
                    userPack: a,
                    key: t.id
                })), e
            }, []);
            return l = Object(u.a)(l, e => !e.props.userPack), r.a.createElement("div", {className: "account-content__block"}, r.a.createElement(k.a, {titleKey: "freemium.subListTitle"}), l)
        };
        var B = Object(n.c)(e => ({operators: Object(_.b)(e)}))(q);
        const U = e => {
            let {isSSOActivated: t, userPacks: a, freemiumPacks: n} = e;
            return r.a.createElement(r.a.Fragment, null, r.a.createElement(B, {
                freemiumPacks: n,
                userPacks: a
            }), t && r.a.createElement(N, {freemiumPacks: n, ssoFlipping: t, userPacks: a}))
        };

        class z extends r.a.Component {
            componentDidMount() {
                Object(l.m)("printAccountSubscriptions"), this.props.getFreemiumPacks()
            }

            render() {
                const {freemiumPacks: e, userPacks: t, ssoFlipping: a} = this.props;
                return r.a.createElement("div", {className: "account-content__page"}, r.a.createElement("div", {className: "account-content__container"}, r.a.createElement(U, {
                    isSSOActivated: a,
                    freemiumPacks: e,
                    userPacks: t
                })), r.a.createElement(i.a, {flippingKey: "subscriptionHelpPageLink"}, r.a.createElement("div", {className: "account-content__footer"}, r.a.createElement("div", {className: "account-content__container"}, r.a.createElement(o.a, null)))))
            }
        }

        var G = z, H = a("VGyI"), K = a("VNep");
        const V = Object(n.c)(e => {
            const t = Object(v.e)(e);
            return {userPacks: Object(v.h)(e), freemiumPacks: t, ssoFlipping: Object(H.mb)("sso")(e)}
        }, e => ({getFreemiumPacks: () => e(K.f)}))(G);
        t.default = V
    }, MyIs: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return k
        }));
        var n = a("r6MD"), c = (a("kYxP"), a("ERkP")), r = a.n(c), l = a("uDfI"), o = a("IFWP"), i = a("DqXN"),
            s = a.n(i), u = a("j/s1"), m = a("OXCn"), p = a("EHrM"), b = a("2kSs"), d = a("lcx8"), f = a("R5CS"),
            g = a("07br"), O = a("cn6j"), E = a("p1RZ"), j = a("CMFl"), h = a("A03L");
        const v = Object(u.d)(b.b).withConfig({componentId: "sc-14pculr-0"})(["text-transform:uppercase;"]),
            y = Object(u.d)(d.b).withConfig({componentId: "sc-14pculr-1"})(["margin-bottom:24px;"]),
            C = /[BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz]/, k = e => {
                let {analyticsEventKey: t} = e;
                const a = Object(o.useTranslate)(), [i, u] = Object(c.useState)(""), [b, d] = Object(c.useState)(!1), [k, I] = Object(c.useState)(!1),
                    w = Object(l.d)(), P = Object(l.e)(f.o),
                    _ = Object(n.a)(s.a, "account.papers.pairing.pairingNewDeviceHelpLink"), N = Object(l.e)(f.t),
                    x = Object(l.e)(h.i), S = Object(l.e)(h.k), D = N && S, R = !b || k || x,
                    T = x ? a("pairing.invalid.tooManyDevicesOrAlreadyUsed") : null, A = Object(c.useCallback)(e => {
                        u(e.toUpperCase()), d(5 === e.length)
                    }, []), M = Object(c.useCallback)(async e => {
                        e.preventDefault(), b ? (I(!0), await w(Object(g.z)(P, i, t)), I(!1), u(""), d(!1)) : Object(O.k)({
                            key: t,
                            state: "fail"
                        })
                    }, [P, i, t]);
                return D ? r.a.createElement(j.a, {title: a("pairing.home.addDevice")}, r.a.createElement("form", {onSubmit: M}, r.a.createElement(y, null, a("pairing.home.pairingIntro")), r.a.createElement(v, {
                    errorText: T,
                    name: "pairing-code",
                    value: i,
                    authorizedCharacters: C,
                    inputLength: 5,
                    onChange: A
                }), r.a.createElement(E.b, null, r.a.createElement(E.a, {
                    label: k ? null : a("global.submit"),
                    iconName: k ? p.a.Loading : null,
                    disabled: R,
                    onClick: M
                }), _ && r.a.createElement(E.a, {
                    component: "a",
                    href: _,
                    buttonMode: m.c.TERTIARY,
                    label: a("pairing.home.whereToGetMyCode"),
                    rel: "noopener",
                    target: "_blank"
                })))) : null
            }
    }, ON3x: function (e, t, a) {
        "use strict";
        a.r(t);
        a("kYxP");
        var n = a("ERkP"), c = a.n(n), r = a("uDfI"), l = a("r4sd"), o = a("O94r"), i = a.n(o), s = a("Ji1+"),
            u = a("UvSA"), m = a("R5CS"), p = a("oj5B"), b = a("IFWP"), d = a("v209"), f = a("3tgQ"), g = a("w1n8");
        a("m8DA");
        var O = Object(b.translate)(e => {
            let t, {isConnected: a, user: n, t: r} = e;
            return a && (t = c.a.createElement("div", {className: "account-profile__mail"}, n.profile.email)), c.a.createElement("div", {className: "account-profile"}, c.a.createElement("h1", {className: "account-profile__title"}, r("global.myProfile")), c.a.createElement(g.a, {
                className: "account-profile__avatar avatar--account-profile",
                profile: n.profile
            }), t, c.a.createElement("div", {className: "account-profile__line"}))
        });
        a("B7wd");
        const E = "account_info", j = "account_selection", h = "account_pairing", v = "account_subscriptions",
            y = "account_newsletters", C = function (e, t, a) {
                let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {
                };
                return c.a.createElement("li", {
                    key: e,
                    className: e === t ? "account-menu__link--selected" : ""
                }, c.a.createElement(f.a, {to: e, noHistory: !0, onClick: n}, a))
            };
        var k = Object(b.translate)(e => {
            let {isConnected: t, user: a, currentRouteName: n, isMediaAboveIntermediate: r, dispatch: l, t: o} = e;
            const i = C("parental_filter", n, o("global.parentalFilter"));
            let s, u, m, p, b, f;
            return r && (s = c.a.createElement(O, {
                user: a,
                isConnected: t
            })), t && (u = C(E, n, o("account.myData"), l.resetStep), m = C(j, n, o("global.mySelection")), p = c.a.createElement(d.a, {flippingKey: "accountPairing"}, C(h, n, o("account.myPairing"))), b = c.a.createElement(d.a, {oneOfKeys: ["freemium", "premium"]}, C(v, n, o("account.mySubscriptions.other"))), f = C(y, n, o("account.myNewsletters"))), c.a.createElement("div", {className: "account-menu"}, s, c.a.createElement("ul", {className: "account-menu__nav"}, u, f, p, m, b, i))
        }), I = a("CcBG"), w = a("07br");
        var P = Object(r.c)(e => ({
            isMediaAboveIntermediate: Object(u.f)(e, I.d.INTERMEDIATE),
            user: Object(m.o)(e),
            isConnected: Object(m.t)(e),
            currentRouteName: Object(p.e)(e)
        }), e => ({dispatch: {resetStep: () => e(w.y)}}))(k), _ = a("N70H");
        Promise.all([a.e(1), a.e(0), a.e(5)]).then(a.t.bind(null, "tGuV", 7)), Promise.all([a.e(1), a.e(0), a.e(5)]).then(a.t.bind(null, "GI2F", 7));
        t.default = e => {
            let {location: t, route: a} = e;
            const n = Object(r.e)(_.A), o = i()("app__wrapper", {"login--open": n});
            return c.a.createElement("div", {className: o}, c.a.createElement("div", {className: "account"}, c.a.createElement(s.a, {
                withSearch: !1,
                newMenuOnly: !0,
                connection: !0
            }), c.a.createElement("div", {className: "account__content"}, c.a.createElement(P, {location: t}), c.a.createElement("div", {className: "account-content"}, Object(l.b)(a.routes)))))
        }
    }, Olmu: function (e, t, a) {
        "use strict";
        a.r(t);
        var n = a("ERkP"), c = a.n(n), r = a("IFWP"), l = a("47v5"), o = a("r6MD"),
            i = (a("kYxP"), a("jQ/y"), a("uDfI")), s = a("M6S4"), u = a("x3LB"), m = a("uMmH"), p = a("VGyI"),
            b = a("wTMg"), d = a("ebrp"), f = a("R5CS");
        const g = {show: !0, message: "account.successEdit", duration: 6e3, type: s.d.SUCCESS}, O = () => {
            const e = Object(r.useTranslate)(), t = Object(i.d)(), a = Object(i.e)(p.P), l = Object(i.e)(f.f),
                s = Object(n.useCallback)(e => async () => {
                    const {code: a} = e;
                    await t(Object(d.c)({[a]: !Object(o.a)(l, "".concat(e.code, ".subscribed"), !1)})), t(Object(m.G)(g))
                }, [l]), O = a || {};
            return c.a.createElement(c.a.Fragment, null, Object.entries(O).map(t => {
                let [a, n] = t;
                const r = "description-".concat(a), i = "label-".concat(a);
                return c.a.createElement(b.b, {key: a}, c.a.createElement(b.a, null, c.a.createElement(b.d, {id: i}, e(n.label)), c.a.createElement(b.c, {id: r}, e(n.description))), c.a.createElement(u.a, {
                    label: e(n.label),
                    name: a,
                    ariaDescribedBy: r,
                    ariaLabelledBy: i,
                    checked: Object(o.a)(l, "".concat(n.code, ".subscribed"), !1),
                    onClick: s(n),
                    dataTestId: "newsletter-".concat(a, "-toggle")
                }))
            }))
        };
        O.fetchData = (e, t, a, n) => {
            const c = n();
            return Object(f.t)(c) ? a(d.b) : Promise.resolve()
        };
        var E = a("CMFl"), j = a("m8Ei"), h = a("E/P7"), v = a("wYlQ");
        const y = () => {
            const e = Object(r.useTranslate)();
            return c.a.createElement(c.a.Fragment, null, c.a.createElement(h.a, null, c.a.createElement(l.a, {title: e("account.menu.newsletter")})), c.a.createElement(j.a, null, c.a.createElement(E.a, {title: e("account.myNewsletters")}, c.a.createElement(O, null))))
        };
        y.fetchData = Object(v.a)(O);
        t.default = y
    }, "R+7c": function (e, t, a) {
    }, RszI: function (e, t, a) {
        "use strict";
        a.r(t), a.d(t, "AccountUniverse", (function () {
            return K
        }));
        var n = a("W6XZ"), c = a("ERkP"), r = a.n(c), l = a("uDfI"), o = a("r4sd"), i = a("j/s1"), s = a("5+Jc"),
            u = a("Jvjd"), m = a("Ji1+"), p = a("phJP"), b = (a("kYxP"), a("IFWP")), d = a("rPqC"), f = a("lN5B");
        const g = i.d.ul.withConfig({componentId: "pcbanq-0"})(["list-style:none;display:flex;flex-direction:row;align-items:center;padding:16px 0;overflow-x:auto;overflow-y:hidden;white-space:nowrap;-webkit-overflow-scrolling:touch;position:relative;margin:0;", ";"], u.p.gt(s.e.small, Object(i.c)(["flex-direction:column;overflow:visible;align-items:unset;border-left:1px solid ", ";padding:0 0 0 16px;"], Object(d.h)("colors.text.primary", e => Object(f.m)(.4, e))))),
            O = i.d.li.withConfig({componentId: "pcbanq-1"})(["display:inline-block;padding:8px 16px;flex:1;color:", ";white-space:normal;&[aria-current='page']{color:", ";}&:last-child{padding-right:24px;}", ";"], Object(d.h)("colors.text.primary", e => Object(f.m)(.4, e)), Object(d.h)("colors.text.primary"), u.p.gt(s.e.small, Object(i.c)(["display:block;border-left:0;padding:0;&:not(:last-child){margin-bottom:16px;}"]))),
            E = i.d.nav.withConfig({componentId: "pcbanq-2"})(["position:relative;"]),
            j = i.d.div.withConfig({componentId: "pcbanq-3"})(["width:1px;height:", "px;position:absolute;top:0;left:0;background:", ";transform:translate(0px,", "px);transition:transform ease 0.3s,height ease 0.3s;", ";"], Object(u.l)("indicatorHeight"), Object(d.h)("colors.text.primary"), Object(u.l)("verticalOffset"), u.p.lte(s.e.small, Object(i.c)(["display:none;"]))),
            h = e => {
                let {activeIndex: t, updateIndicatorAdditionalSources: a = [], children: n, className: l} = e;
                const o = Object(c.useRef)(null), [i, s] = Object(c.useState)(0), [u, m] = Object(c.useState)(0);
                return Object(c.useEffect)(() => {
                    const e = o.current.querySelector("li[aria-current]");
                    if (e) {
                        const t = e.getBoundingClientRect(), a = t.top, n = o.current.getBoundingClientRect().top;
                        s(a - n), m(t.height)
                    }
                }, [t, ...a]), r.a.createElement(E, {
                    role: "navigation",
                    ref: o,
                    className: l
                }, null == t ? null : r.a.createElement(j, {
                    verticalOffset: i,
                    indicatorHeight: u
                }), r.a.createElement(g, null, r.a.Children.map(n, (e, a) => r.a.createElement(O, {"aria-current": a === t ? "page" : null}, e))))
            };
        var v = a("/Z5K"), y = a("lcx8"), C = a("3tgQ"), k = a("nYau"), I = a("UvSA"), w = a("eiga"), P = a("DEJH"),
            _ = a("dJBH"), N = a("mSGg"), x = a("Xe1R");

        function S() {
            return (S = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                }
                return e
            }).apply(this, arguments)
        }

        const D = Object(i.d)(h).withConfig({componentId: "zain8u-0"})(["margin-bottom:40px;"]),
            R = Object(i.d)(C.a).withConfig({componentId: "zain8u-1"})(["color:", ";background:inherit;border:0;text-decoration:none;"], e => Object(d.h)("colors.text.primary", t => Object(f.m)(e.active ? 0 : .4, t))),
            T = () => {
                const e = Object(b.useTranslate)(), [t, a] = Object(k.a)(v.k.desktop), n = Object(l.e)(I.c),
                    o = Object(P.b)(t, x.p.TYPE_ONE), i = Object(c.useMemo)(() => !!o.length, [o]),
                    s = Object(c.useMemo)(() => o.map((t, n) => r.a.createElement(R, S({
                        key: t.id,
                        noHistory: !0,
                        action: t.action,
                        active: n === a,
                        as: w.a
                    }, Object(w.c)(t)), r.a.createElement(y.b, {
                        component: "span",
                        level: y.a.BERLIN
                    }, e(t.label)))), [o]), u = Object(c.useMemo)(() => [n, s], [n, s]);
                return r.a.createElement(r.a.Fragment, null, i ? r.a.createElement(D, {
                    activeIndex: a,
                    updateIndicatorAdditionalSources: u
                }, s) : null, Object(P.c)(t) ? r.a.createElement(_.a, {target: v.k.desktop}) : r.a.createElement(N.a, null))
            };
        var A = a("gZGY"), M = a("R5CS"), F = a("ML4P"), L = a("qhim"), Y = a("oj5B"), q = a("p8Sw");
        const B = i.d.main.withConfig({componentId: "sc-7gaa3b-0"})(["display:flex;flex-direction:column;min-width:320px;min-height:100vh;margin-bottom:", "px;", ";", " ", ""], 24, u.p.gt(s.e.small, Object(i.c)(["flex-direction:row;"])), u.p.gt(s.e.medium, Object(i.c)(["margin-bottom:", "px;"], 32)), u.p.gt(s.e.xlarge, Object(i.c)(["margin-bottom:", "px;"], 40))),
            U = Object(i.d)(A.a).withConfig({componentId: "sc-7gaa3b-1"})(["margin-top:48px;margin-bottom:40px;"]),
            z = i.d.aside.withConfig({componentId: "sc-7gaa3b-2"})(["display:none;align-items:center;", ";"], u.p.gt(s.e.small, Object(i.c)(["display:flex;flex-direction:column;width:100%;max-width:248px;margin-left:40px;"]))),
            G = i.d.div.withConfig({componentId: "sc-7gaa3b-3"})(["display:flex;flex-direction:column;"]),
            H = i.d.div.withConfig({componentId: "sc-7gaa3b-4"})(["flex-basis:100%;flex-grow:1;padding-top:56px;", ""], u.p.gt(s.e.small, Object(i.c)(["padding-top:0;"]))),
            K = e => {
                let {route: t} = e;
                const a = Object(l.d)(), i = Object(l.e)(M.s), s = Object(l.e)(M.t);
                Object(c.useEffect)(() => {
                    i && !s && a(F.y)
                }, [i]);
                const u = Object(l.e)(Y.d), b = Object(l.e)(e => Object(q.f)(e, u.entityType, u.entityId));
                return b.entity && b.entity.id && !Object(n.a)(t.routes, e => {
                    let {entityId: t} = e;
                    return t === b.entity.id
                }) ? Object(o.b)(t.routes) : r.a.createElement(G, null, r.a.createElement(L.a, {location: "account_info"}), r.a.createElement(m.a, {
                    withSearch: !1,
                    newMenuOnly: !0,
                    connection: !0
                }), r.a.createElement(B, {
                    role: "main",
                    className: "has-navigation-control"
                }, r.a.createElement(z, null, r.a.createElement(U, null), r.a.createElement(T, null)), r.a.createElement(H, null, Object(o.b)(t.routes))), r.a.createElement(p.a, null))
            };
        t.default = K
    }, UiPw: function (e, t, a) {
        "use strict";
        a.r(t);
        var n = a("ERkP"), c = a.n(n), r = a("IFWP"), l = a("E/P7"), o = a("47v5"), i = a("m8Ei"), s = a("uDfI"),
            u = a("OXCn"), m = a("DqXN"), p = a.n(m), b = a("5+Jc"), d = a("j/s1"), f = a("ML4P"), g = a("cn6j"),
            O = a("pEs5");
        const E = d.d.div.withConfig({componentId: "sc-5zgnx5-0"})(["margin-top:40px;", ""], Object(b.m)(i.b)),
            j = e => {
                let {className: t} = e;
                const a = Object(s.d)(), l = Object(r.useTranslate)(),
                    o = Object(s.e)(O.f).length >= p.a.maxAuthorizedProfiles, i = Object(n.useCallback)(e => {
                        e.preventDefault(), a(Object(f.n)("account_profile_add")), Object(g.k)("clickCreateProfile")
                    }, []);
                return o ? null : c.a.createElement(E, null, c.a.createElement(u.a, {
                    className: t,
                    label: l("account.addProfile"),
                    type: "button",
                    onClick: i
                }))
            };
        var h = a("j68i"), v = a("R5CS"), y = a("CMFl"), C = a("sDRi");
        const k = Object(d.d)(y.a).withConfig({componentId: "sc-1lzkqzc-0"})(["height:100%;"]),
            I = d.d.div.withConfig({componentId: "sc-1lzkqzc-1"})(["height:100%;display:flex;flex-direction:column;align-items:center;padding-bottom:22px;"]),
            w = d.d.div.withConfig({componentId: "sc-1lzkqzc-2"})(["flex-grow:1;"]),
            P = Object(d.d)(u.a).withConfig({componentId: "sc-1lzkqzc-3"})(["margin-top:20px;"]), _ = e => {
                let {profile: t, className: a} = e;
                const l = Object(s.d)(), o = Object(s.e)(O.c), i = Object(r.useTranslate)(), u = !!o && t.uid === o.uid,
                    m = Object(n.useCallback)(e => {
                        e.preventDefault(), Object(g.k)("clickEditProfile"), l(Object(f.n)("account_profile_edit", {uid: t.uid}))
                    }, [t.uid]);
                return c.a.createElement(k, {className: a}, c.a.createElement(I, null, c.a.createElement(w, null, c.a.createElement(C.a, {
                    profile: t,
                    isActive: u
                })), c.a.createElement(P, {label: i("global.edit"), onClick: m})))
            }, N = () => {
                const e = Object(r.useTranslate)(), t = (() => {
                    const e = Object(s.e)(O.f), t = Object(s.e)(O.g);
                    return e.length ? e.map(e => c.a.createElement(_, {key: e, profile: t[e]})) : null
                })();
                return c.a.createElement(c.a.Fragment, null, c.a.createElement(l.a, null, c.a.createElement(o.a, {title: e("account.menu.profile")})), c.a.createElement(i.a, {columns: 4}, t), c.a.createElement(j, null))
            };
        N.fetchData = async (e, t, a, n) => {
            const c = n(), r = Object(v.n)(c);
            return a(Object(h.n)(r))
        };
        t.default = N
    }, Y76z: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return f
        }));
        var n = a("r6MD"), c = a("W6XZ"), r = a("ERkP"), l = a.n(r), o = a("j/s1"), i = a("IFWP"), s = a("lcx8"),
            u = a("Err7"), m = a("qZ4L"), p = a("cXnQ"), b = a("bK21");
        const d = Object(o.d)(s.b).withConfig({componentId: "sc-19t9mrv-0"})(["font-weight:600;"]), f = e => {
            let {option: t, type: a} = e;
            const o = Object(i.useTranslate)(), {theme_web: f} = t, {priceWithCurrency: g, title: O, purchasedWithTranslateKey: E, operator: j} = ((e, t) => {
                let a, l, o, i, {option: s, type: m} = e;
                const {freemium_stores: d, subscription: f, title: g} = s,
                    O = Object(r.useMemo)(() => Object(c.a)(d, e => e.code === f.store_code), [s]);
                switch (m) {
                    case p.a.FREEMIUM:
                        l = g, O && (o = O.type === u.a.OPERATOR ? "account.options.purchasedWithOperator" : "account.options.purchasedWithApp", i = O.title, O.target_price && (a = t("freemium.packPrice", {packPrice: O.target_price})));
                        break;
                    case p.a.PREMIUM: {
                        const {current_contract: {store_code: e, payment_method: t, variant: c} = {}, offer: {title: r}} = s,
                            i = Object(n.a)(t, "type");
                        e === u.a.OPERATOR ? o = "account.options.purchasedWithOperator" : i === p.b.FREE_COUPON ? o = "account.options.purchasedWithCoupon" : [p.b.APPLE_STORE, p.b.GOOGLE_PLAY].includes(i) && (o = "account.options.purchasedWithApp"), a = Object(b.c)(c), l = r;
                        break
                    }
                }
                return {priceWithCurrency: a, title: l, purchasedWithTranslateKey: o, operator: i}
            })({option: t, type: a}, o);
            return l.a.createElement(m.a, {
                title: O,
                serviceThemeName: f,
                priceWithCurrency: g,
                marginBottom: 2
            }, E && l.a.createElement(d, {level: s.a.MEXICO}, l.a.createElement(i.HtmlTrans, {
                i18nKey: E,
                data: {operator: j}
            })))
        }
    }, a8zY: function (e, t, a) {
        "use strict";
        a.r(t);
        var n = a("uDfI"), c = a("ERkP"), r = a.n(c), l = a("Xe1R"), o = a("cn6j"), i = a("wgY5"), s = a.n(i),
            u = a("IFWP"), m = a("EN3g"), p = a("O94r"), b = a.n(p);
        a("t+gt");
        var d = e => {
            let {title: t, text: a, children: n, url: c, className: l, direction: o} = e;
            return r.a.createElement("div", {className: l}, r.a.createElement("a", {
                href: c,
                className: "tooltip"
            }, n, r.a.createElement("div", {className: b()("tooltip__content", "tooltip__content-direction--".concat(o))}, r.a.createElement("div", {className: "tooltip__inner"}, t ? r.a.createElement("div", {className: "tooltip__title"}, t) : null, a ? r.a.createElement("div", {className: "tooltip__text"}, a) : null))))
        };
        var f = e => {
            let {className: t} = e;
            return r.a.createElement("svg", {
                className: t,
                viewBox: "0 0 52 52"
            }, r.a.createElement("path", {fill: "none", stroke: "#FFF", d: "M14.1 27.2l7.1 7.2 16.7-16.8"}))
        }, g = a("WR+0");
        var O, E = Object(u.translate)(e => {
            let {isEmailVerified: t, className: a, t: n} = e;
            const c = t ? r.a.createElement(f, {className: "account-content__check--valid"}) : r.a.createElement(g.a, {className: "account-content__check--invalid"}),
                l = n(t ? "account.emailUpdated" : "account.emailNotUpdated");
            return r.a.createElement(d, {
                text: l,
                className: a,
                direction: "bottom"
            }, r.a.createElement("div", {className: "account-content__check"}, c))
        }), j = a("qhim"), h = a("aWzz"), v = a.n(h), y = a("j/s1"), C = a("Jvjd"), k = a("/LMg"), I = a("M8pX");
        const w = y.d.button.withConfig({componentId: "sc-1vs328x-0"})(["display:block;width:100%;height:35px;padding:0 16px;background-color:", ";border:none;text-decoration:none;line-height:35px;text-align:center;font-size:16px;color:white;white-space:nowrap;cursor:pointer;", ";", ";"], e => e.secondary ? I.c : I.b, k.a.minMedium(O || (P = ["\n    max-width: 400px;\n    margin-left: auto;\n    margin-right: auto;\n  "], _ || (_ = P.slice(0)), O = Object.freeze(Object.defineProperties(P, {raw: {value: Object.freeze(_)}})))), Object(C.A)(Object(y.c)([":hover,:focus{background-color:", ";}"], e => e.secondary ? I.d : I.a)));
        var P, _, N;
        w.propTypes = {secondary: v.a.bool};
        const x = y.d.div.withConfig({componentId: "sc-1amdhaz-0"})(["display:flex;flex-direction:", ";flex-wrap:wrap;margin-top:", ";margin-right:-8px;margin-bottom:4px;margin-left:-8px;", ";"], e => e.narrow ? "column" : "row", e => e.narrow ? "4px" : "28px", k.a.maxSmall(N || (N = function (e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))
            }(["\n    flex-direction: column;\n  "])))),
            S = y.d.div.withConfig({componentId: "sc-1amdhaz-1"})(["flex:1 0 0;margin:4px 8px;"]), D = e => {
                let {children: t, narrow: a} = e;
                return r.a.createElement(x, {narrow: a}, c.Children.map(t, e => r.a.createElement(S, null, e)))
            };
        var R = a("0QuS");
        const T = w.withComponent(m.a);

        class A extends c.PureComponent {
            componentDidMount() {
                this.props.closeCRMBanner()
            }

            render() {
                const {profile: e, isEmailVerified: t, isConnected: a, accountEditInfo: n, accountDeletionInfo: c, t: l, logoutAction: o} = this.props,
                    i = s()([e.birthYear, e.birthMonth ? e.birthMonth - 1 : null, e.birthDay]);
                let u, p;
                return a && (u = r.a.createElement(r.a.Fragment, null, r.a.createElement(D, {narrow: !0}, r.a.createElement(T, {action: n}, l("account.updateInformation")), r.a.createElement(T, {
                    action: o,
                    secondary: !0,
                    component: "button",
                    type: "button"
                }, l("user.logout"))), r.a.createElement(m.a, {
                    className: "account-content__link",
                    action: c
                }, l("account.deleteAction"))), p = r.a.createElement(E, {
                    isEmailVerified: t,
                    className: "account-content__tooltip"
                })), r.a.createElement("div", {className: "account-content__container"}, r.a.createElement(j.a, {location: "account_info"}), r.a.createElement(R.a, {titleKey: "account.myData"}), r.a.createElement("div", {className: "account-content__line"}, r.a.createElement("label", null, l("account.email"), " "), r.a.createElement("span", null, e.email, p)), r.a.createElement("div", {className: "account-content__line"}, r.a.createElement("label", null, l("global.password"), " "), r.a.createElement("span", null, l("account.stars"), " ")), r.a.createElement("div", {className: "account-content__line"}, r.a.createElement("label", null, l("account.lastName"), " "), r.a.createElement("span", null, e.lastName || l("account.notFilled"))), r.a.createElement("div", {className: "account-content__line"}, r.a.createElement("label", null, l("account.firstName"), " "), r.a.createElement("span", null, e.firstName || l("account.notFilled"))), r.a.createElement("div", {className: "account-content__line"}, r.a.createElement("label", null, l("account.birthDay"), " "), r.a.createElement("span", null, i.isValid() ? i.format("L") : l("account.notFilled"))), u)
            }
        }

        var M = Object(u.translate)(A), F = a("07br"), L = a("R5CS"), Y = a("uMmH"), q = a("ML4P"), B = a("OQb5");
        var U = Object(n.c)(e => ({
            profile: Object(L.m)(e),
            isEmailVerified: Object(L.u)(e),
            isNewsletterActive: Object(L.z)(e),
            isNewsletterPartnerActive: Object(L.A)(e),
            isConnected: Object(L.t)(e)
        }), e => ({
            accountEditInfo: () => e(F.r),
            accountDeletionInfo: () => e(F.p),
            closeCRMBanner: () => e(Object(Y.m)()),
            logoutAction: () => e(B.b).then(() => e(Object(q.n)("home")))
        }))(M);
        a("BBfM");
        var z = e => {
            let {"data-testid": t, children: a} = e;
            return r.a.createElement("div", {className: "error-message"}, r.a.createElement("img", {
                className: "error-message__image",
                src: "/assets/images/pages/auth/alert-a0181c14f9.png"
            }), r.a.createElement("div", {className: "error-message__body"}, a))
        };

        function G(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a, e
        }

        const H = ["lastName", "firstName", "email", "birthdate"];

        class K extends c.Component {
            constructor(e) {
                super(e), G(this, "onEmailChange", e => {
                    this.setState({isEmailVerified: this.props.isEmailVerified && e.target.value === this.props.profile.email})
                }), G(this, "handleSubmit", e => {
                    e.preventDefault();
                    const {t: t} = this.props, a = {birthDay: null, birthMonth: null, birthYear: null},
                        n = s()(this.refs.birthdate.value, "L");
                    n.isValid() ? (a.birthDay = n.format("DD"), a.birthMonth = n.format("MM"), a.birthYear = n.format("YYYY"), a.email = this.refs.email.value || "", a.firstName = this.refs.firstName.value || "", a.lastName = this.refs.lastName.value || "", this.props.editAccountInfos({
                        isNewsletterActive: this.state.isNewsletterActive,
                        isNewsletterPartnerActive: this.state.isNewsletterPartnerActive,
                        profile: a
                    }).then(() => this.props.accountInfo()).catch(e => {
                        403043 === e.code && this.setErrorByField("email", t("account.alreadyUsedEmail"))
                    })) : this.setErrorByField("birthdate", t("account.invalidBirthdate"))
                }), this.state = {
                    isEmailVerified: this.props.isEmailVerified,
                    isNewsletterActive: this.props.isNewsletterActive,
                    isNewsletterPartnerActive: this.props.isNewsletterPartnerActive
                }, H.forEach(e => {
                    this.state[e] = {"account-form__cell": !0, "account-form__cell--error": !1}
                })
            }

            setErrorByField(e, t) {
                const a = {};
                a[e] = {"account-form__cell": !0, "account-form__cell--error": t}, this.setState(a)
            }

            generateField(e, t, a) {
                let n;
                return this.state[t]["account-form__cell--error"] && (n = r.a.createElement(z, null, this.state[t]["account-form__cell--error"])), "email" === t ? r.a.createElement("div", {className: b()(this.state[t])}, r.a.createElement("label", {htmlFor: t}, e, r.a.createElement("div", {className: "account-content__check account-content__check-form"}, r.a.createElement(E, {
                    isEmailVerified: this.state.isEmailVerified,
                    className: "account-content__tooltip"
                }))), r.a.createElement("input", {
                    id: t,
                    defaultValue: a,
                    ref: "email",
                    name: "email",
                    type: "email",
                    onChange: this.onEmailChange,
                    required: !0
                }), n) : r.a.createElement("div", {className: b()(this.state[t])}, r.a.createElement("label", {htmlFor: t}, e), r.a.createElement("input", {
                    id: t,
                    defaultValue: a,
                    ref: t,
                    name: t
                }), n)
            }

            render() {
                const {profile: e, t: t} = this.props,
                    a = s()([e.birthYear, e.birthMonth ? e.birthMonth - 1 : null, e.birthDay]);
                return r.a.createElement("div", {className: "account-content__container"}, r.a.createElement(R.a, {titleKey: "account.informationUpdate"}), r.a.createElement("form", {
                    method: "post",
                    className: "account-form",
                    onSubmit: this.handleSubmit
                }, r.a.createElement("div", {className: "account-form__grid"}, this.generateField(t("account.lastName"), "lastName", e.lastName), this.generateField(t("account.firstName"), "firstName", e.firstName), this.generateField(t("account.email"), "email", e.email), this.generateField(t("account.birthDay"), "birthdate", a.isValid() ? a.format("L") : ""), r.a.createElement("div", {className: "account-form__cell"}, r.a.createElement("label", null, t("global.password")), r.a.createElement("span", null, t("account.stars"), r.a.createElement(m.a, {
                    className: "account-form__forgot-password",
                    action: this.props.accountEditPassword
                }, t("account.updatePassword"))))), r.a.createElement(w, {type: "submit"}, t("account.saveData"))))
            }
        }

        var V = Object(u.translate)(K), W = a("bw8S");
        var X = Object(n.c)(e => ({
            profile: Object(L.m)(e),
            isNewsletterActive: Object(L.z)(e),
            isNewsletterPartnerActive: Object(L.A)(e),
            isEmailVerified: Object(L.u)(e)
        }), e => ({
            accountInfo: () => e(F.w),
            accountEditInfo: () => e(F.r),
            accountEditPassword: () => e(F.s),
            editAccountInfos: t => e(Object(W.b)(t))
        }))(V), Z = a("U/Ze"), Q = a("QfA6");

        function J(e, t) {
            if (null == e) return {};
            var a, n, c = function (e, t) {
                if (null == e) return {};
                var a, n, c = {}, r = Object.keys(e);
                for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || (c[a] = e[a]);
                return c
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (c[a] = e[a])
            }
            return c
        }

        const $ = y.d.div.withConfig({componentId: "sc-138xyw4-0"})(["font-size:13px;"]),
            ee = y.d.div.withConfig({componentId: "sc-138xyw4-1"})(["display:flex;align-items:center;"]),
            te = y.d.img.withConfig({componentId: "sc-138xyw4-2"})(["flex:0 0 54px;height:54px;"]),
            ae = y.d.h3.withConfig({componentId: "sc-138xyw4-3"})(["margin-left:10px;font-size:17px;color:", ";"], e => {
                let {theme: t} = e;
                return t.colors.textSecondary
            }), ne = y.d.p.withConfig({componentId: "sc-138xyw4-4"})(["margin:28px 0 8px;line-height:20px;"]),
            ce = y.d.div.withConfig({componentId: "sc-138xyw4-5"})(["width:100px;height:100px;margin:0 auto;"]),
            re = w.withComponent(e => {
                let {secondary: t} = e, a = J(e, ["secondary"]);
                return r.a.createElement(Z.a, a)
            });
        var le = e => {
            let t, {dispatch: {accountInfos: a, deleteAccount: n}, deleteStatus: c} = e;
            switch (c) {
                case l.o.DELETING:
                    t = r.a.createElement(ce, null, r.a.createElement(Q.a, null));
                    break;
                default:
                    t = r.a.createElement(D, null, r.a.createElement(re, {
                        secondary: !0,
                        action: a
                    }, r.a.createElement(u.Trans, {i18nKey: "global.cancel"})), r.a.createElement(re, {action: n}, r.a.createElement(u.Trans, {i18nKey: "account.deleteAction"})))
            }
            return r.a.createElement("div", {className: "account-content__container"}, r.a.createElement($, null, r.a.createElement(R.a, {titleKey: "account.deleteAccount"}), r.a.createElement(ee, null, r.a.createElement(te, {src: "/assets/images/icons/sad-emoticon-13995409e0.svg"}), r.a.createElement(ae, null, r.a.createElement(u.Trans, {i18nKey: "account.deleteValidation"}))), r.a.createElement(ne, null, r.a.createElement(u.Trans, {i18nKey: "account.deleteText"})), t))
        }, oe = a("A03L");
        var ie = Object(n.c)(e => ({deleteStatus: Object(oe.a)(e)}), e => ({
            dispatch: {
                accountInfos: () => e(F.w),
                deleteAccount: () => e(Object(F.o)(() => new Promise(e => setTimeout(e, l.a))))
            }
        }))(le), se = (a("kYxP"), a("N70H")), ue = a("m03+"), me = a("QUYU");

        function pe() {
            return (pe = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                }
                return e
            }).apply(this, arguments)
        }

        function be(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), a.push.apply(a, n)
            }
            return a
        }

        function de(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? be(Object(a), !0).forEach((function (t) {
                    fe(e, t, a[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : be(Object(a)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }))
            }
            return e
        }

        function fe(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a, e
        }

        function ge(e, t) {
            if (null == e) return {};
            var a, n, c = function (e, t) {
                if (null == e) return {};
                var a, n, c = {}, r = Object.keys(e);
                for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || (c[a] = e[a]);
                return c
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (c[a] = e[a])
            }
            return c
        }

        const Oe = w.withComponent(e => {
            let {secondary: t} = e, a = ge(e, ["secondary"]);
            return r.a.createElement(m.a, a)
        }), Ee = e => {
            let {label: t, children: a, name: n, value: c, error: l, onFieldChange: o} = e;
            return r.a.createElement("div", {
                className: b()({
                    "account-form__cell": !0,
                    "account-form__cell--error": !!l
                })
            }, r.a.createElement("label", null, t), r.a.createElement("input", {
                type: "password",
                value: c,
                onChange: o,
                name: n
            }), a, l ? r.a.createElement(z, null, l) : null)
        }, je = (e, t) => {
            e(e => de({}, e, {error: t}))
        }, he = e => t => {
            const {value: a} = t.target;
            e(e => de({}, e, {value: a}))
        }, ve = () => {
            const [e, t] = Object(c.useState)({value: "", error: null}), [a, l] = Object(c.useState)({
                    value: "",
                    error: null
                }), [o, i] = Object(c.useState)({value: "", error: null}), s = Object(u.useTranslate)(), p = Object(n.d)(),
                b = Object(n.e)(se.f), d = Object(c.useCallback)(() => {
                    je(t, null), je(l, null), je(i, null)
                });
            Object(c.useEffect)(() => {
                b && (d(), b.type === ue.f.INVALID_LOGIN_ID && je(t, s("account.invalidCurrentPassword")), b.type === ue.f.INVALID_PARAMETER_VALUE && je(l, s("user.passwordMinimum")))
            }, [b]);
            const f = Object(c.useCallback)(n => (n.preventDefault(), d(), "" === e.value ? (je(t, s("account.requiredField")), null) : "" === a.value ? (je(l, s("account.requiredField")), null) : e.value === a.value ? (je(l, s("account.newPasswordHasToBeNew")), null) : a.value !== o.value ? (je(i, s("account.newPasswordConfirmationFailed")), null) : p(Object(me.h)(e.value, a.value)))),
                g = Object(c.useCallback)(() => p(F.u), []), O = Object(c.useCallback)(() => p(F.r), []);
            return r.a.createElement("div", {className: "account-content__container"}, r.a.createElement(R.a, {titleKey: "account.passwordUpdate"}), r.a.createElement("form", {
                method: "post",
                className: "account-form",
                onSubmit: f
            }, r.a.createElement("div", {className: "account-form__grid"}, r.a.createElement(Ee, pe({
                onFieldChange: he(t),
                label: s("account.currentPassword"),
                name: "currentPassword"
            }, e), r.a.createElement("span", {className: "account-form__lost-password"}, r.a.createElement(m.a, {action: g}, s("account.passwordForgotten")))), r.a.createElement("div", {className: "account-form__row-2"}, r.a.createElement(Ee, pe({
                onFieldChange: he(l),
                label: s("global.newPassword"),
                name: "newPassword"
            }, a)), r.a.createElement(Ee, pe({
                onFieldChange: he(i),
                label: s("account.confirmPassword"),
                name: "confirmNewPassword"
            }, o)))), r.a.createElement(D, null, r.a.createElement(Oe, {
                secondary: !0,
                action: O
            }, s("global.cancel")), r.a.createElement(w, {type: "submit"}, s("account.updatePassword")))))
        };
        var ye = Object(u.translate)(e => {
            let {dispatch: {accountInfos: t}, t: a} = e;
            return r.a.createElement("div", {className: "account-content__container"}, r.a.createElement(R.a, {titleKey: "account.passwordUpdate"}), r.a.createElement("div", {className: "account-infos"}, r.a.createElement("div", {className: "account-infos__line"}, r.a.createElement("p", null, a("account.passwordUpdateSuccess")))), r.a.createElement("div", {className: "account-form"}, r.a.createElement(m.a, {
                className: "account-content__link",
                action: t
            }, a("account.backToHome"))))
        });
        var Ce = Object(n.c)(void 0, e => ({dispatch: {accountInfos: () => e(F.w)}}))(ye), ke = a("daAW"),
            Ie = a("vbGR"), we = a("tTd1");

        function Pe(e, t) {
            if (null == e) return {};
            var a, n, c = function (e, t) {
                if (null == e) return {};
                var a, n, c = {}, r = Object.keys(e);
                for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || (c[a] = e[a]);
                return c
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (c[a] = e[a])
            }
            return c
        }

        const _e = w.withComponent(e => {
            let {secondary: t} = e, a = Pe(e, ["secondary"]);
            return r.a.createElement(Z.a, a)
        }), Ne = w.withComponent(e => {
            let {secondary: t} = e, a = Pe(e, ["secondary"]);
            return r.a.createElement(ke.a, a)
        }), xe = e => {
            let {isModal: t} = e;
            const [a, l] = Object(c.useState)(null), [o, i] = Object(c.useState)(""), s = Object(u.useTranslate)(),
                m = Object(n.d)(), p = Object(n.e)(L.t), b = Object(n.e)(se.e);
            Object(c.useEffect)(() => {
                b && l(s("user.unknownEmail"))
            }, [b]);
            let d, f;
            if (a && (d = r.a.createElement(z, null, a)), p) f = r.a.createElement(_e, {
                secondary: !0,
                action: () => m(F.s)
            }, s("global.cancel")); else {
                let e;
                t && (e = e => {
                    e.preventDefault(), m(Object(Y.l)(we.a.LOGIN))
                }), f = r.a.createElement(Ne, {secondary: !0, to: Ie.b.get("login"), onClick: e}, s("global.cancel"))
            }
            return r.a.createElement("div", {className: "password-description"}, r.a.createElement("div", {className: "password-description__text"}, s("user.enterEmail")), r.a.createElement("form", {
                method: "post",
                onSubmit: e => {
                    e.preventDefault(), o.length ? m(Object(me.e)(o)) : l(s("user.emptySingleFieldError"))
                },
                className: "auth-content-form",
                id: "form-password"
            }, r.a.createElement("input", {
                className: "auth-content-form__input",
                type: "email",
                name: "email",
                onChange: e => i(e.target.value),
                value: o,
                placeholder: s("user.emailPlaceholder")
            }), d, r.a.createElement(D, {narrow: !L.t}, r.a.createElement(w, {type: "submit"}, s("user.send")), f)))
        };
        xe.defaultProps = {isModal: !1};
        const Se = w.withComponent(m.a), De = w.withComponent(ke.a), Re = e => {
            let {userEmail: t = "", isModal: a = !1, isConnected: n, dispatch: {accountInfos: c, authModalLogin: l}, t: o} = e;
            const i = Ie.b.get("login");
            let s;
            if (n) s = r.a.createElement(Se, {action: c}, o("user.goBack")); else {
                let e;
                a && (e = e => {
                    e.preventDefault(), l()
                }), s = r.a.createElement(De, {to: i, onClick: e}, o("user.login"))
            }
            const u = b()({"password-reset": !0, "password-reset--account": !a});
            return r.a.createElement("div", {className: u}, r.a.createElement("div", {className: "password-reset__text"}, o("user.emailSent")), r.a.createElement("div", {className: "password-reset__email"}, t), r.a.createElement("div", {className: "password-reset__note"}, o("user.checkForSpam")), s)
        };
        Re.defaultProps = {isModal: !1};
        var Te = Object(u.translate)(Re);
        var Ae = Object(n.c)(e => ({
            authError: Object(se.e)(e),
            isConnected: Object(L.t)(e)
        }), e => ({dispatch: {accountInfos: () => e(F.w), authModalLogin: () => e(Object(Y.l)(we.a.LOGIN))}}))(Te);
        var Me = e => {
            let t, {userEmail: a} = e;
            return t = a ? r.a.createElement(Ae, {userEmail: a}) : r.a.createElement(xe, null), r.a.createElement("div", {className: "account-content__container"}, r.a.createElement(R.a, {titleKey: "account.passwordForgotten"}), t)
        };
        var Fe = Object(n.c)(e => ({userEmail: Object(L.c)(e)}))(Me);

        class Le extends r.a.Component {
            componentDidMount() {
                Object(o.m)("printAccountInfos")
            }

            componentWillUnmount() {
                this.props.dispatch.resetStep()
            }

            render() {
                const {step: e} = this.props;
                switch (e) {
                    case l.t.EDIT_PASSWORD:
                        return r.a.createElement(ve, null);
                    case l.t.EDIT_PASSWORD_SUCCESS:
                        return r.a.createElement(Ce, null);
                    case l.t.FORGOT_PASSWORD_ACCOUNT:
                        return r.a.createElement(Fe, null);
                    case l.t.DELETE_ACCOUNT:
                        return r.a.createElement(ie, null);
                    case l.t.EDIT_INFOS:
                        return r.a.createElement(X, null);
                    case l.t.INFOS:
                    default:
                        return r.a.createElement(U, null)
                }
            }
        }

        var Ye = Le;
        t.default = Object(n.c)(e => ({step: Object(oe.g)(e)}), e => ({dispatch: {resetStep: () => e(F.y)}}))(Ye)
    }, cXnQ: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return n
        })), a.d(t, "b", (function () {
            return c
        }));
        const n = {PREMIUM: "PREMIUM", FREEMIUM: "FREEMIUM"},
            c = {GOOGLE_PLAY: "GooglePlay", APPLE_STORE: "AppleStore", FREE_COUPON: "FreeCoupons"}
    }, dhxY: function (e, t, a) {
        "use strict";
        a.r(t);
        a("kYxP");
        var n = a("ERkP"), c = a.n(n), r = a("uDfI"), l = a("IFWP"), o = a("KhDj"), i = a("m8Ei"), s = a("47v5"),
            u = a("j/s1"), m = a("OXCn"), p = a("lcx8"), b = a("CMFl"), d = a("p1RZ"), f = a("jt5Z"), g = a("rp+Z");
        const O = u.d.form.withConfig({componentId: "nx4mz9-0"})(["margin-top:32px;"]), E = e => {
            let {onSubmit: t, onCancel: a} = e;
            const r = Object(l.useTranslate)(), [o, i] = Object(n.useState)(""),
                s = Object(n.useMemo)(() => g.b.check(o), [o]), u = Object(n.useCallback)(e => {
                    let {emailInput: t} = e;
                    i(t)
                }, []), E = Object(n.useCallback)(async e => {
                    e.preventDefault(), t(o)
                }, [o]);
            return c.a.createElement(b.a, {title: r("account.passwordForgotten")}, c.a.createElement(p.b, null, r("onboarding.forgotPasswordInstructions")), c.a.createElement(O, {onSubmit: E}, c.a.createElement(f.a, {
                emailInput: o,
                setFormFields: u
            }), c.a.createElement(d.b, null, c.a.createElement(d.a, {
                disabled: !s,
                label: r("user.send"),
                type: "submit"
            }), c.a.createElement(d.a, {
                label: r("global.cancel"),
                buttonMode: m.c.SECONDARY,
                onClick: a,
                type: "button"
            }))))
        }, j = Object(u.d)(p.b).withConfig({componentId: "plwccg-0"})(["overflow-wrap:break-word;"]), h = e => {
            let {recoveryEmail: t, onContinue: a} = e;
            const n = Object(l.useTranslate)();
            return c.a.createElement(b.a, {title: n("onboarding.labels.emailSent")}, c.a.createElement(j, null, n("account.forgotPasswordSuccessMessage", {email: t})), c.a.createElement(d.b, null, c.a.createElement(d.a, {
                label: n("global.continue"),
                onClick: a,
                type: "button"
            })))
        };
        var v = a("E/P7"), y = a("u0Ku");
        t.default = () => {
            const e = Object(l.useTranslate)(), t = Object(r.d)(), [a, u] = Object(n.useState)(""), m = () => {
                t(Object(o.d)())
            }, p = Object(n.useCallback)(async e => {
                await t(Object(y.a)(e)), u(e)
            }, []);
            return c.a.createElement(c.a.Fragment, null, c.a.createElement(v.a, null, c.a.createElement(s.a, {title: e("account.menu.information")})), c.a.createElement(i.a, null, a ? c.a.createElement(h, {
                recoveryEmail: a,
                onContinue: m
            }) : c.a.createElement(E, {onSubmit: p, onCancel: m})))
        }
    }, dkCR: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return k
        }));
        var n = a("r6MD"), c = (a("kYxP"), a("ERkP")), r = a.n(c), l = a("wgY5"), o = a.n(l), i = a("DqXN"), s = a.n(i),
            u = a("MKnV"), m = a("x3LB"), p = a("OXCn"), b = a("IFWP"), d = a("D3ax"), f = a("MpDc"), g = a("p1RZ"),
            O = a("Gv/o"), E = a("+tvP"), j = a("xbjX"), h = a("2uVm"), v = a("9B+4"), y = a("cn6j");
        const C = s.a.maxProfileNameLength, k = e => {
            let {avatar: t, canBeDeleted: a, onAvatarClick: l, onDeleteProfile: k, onFormSubmit: I, profile: w} = e;
            const P = Object(b.useTranslate)(),
                _ = s.a.account.profile.requiredFields.includes(u.account.profile.fields.BIRTHDATE),
                N = s.a.account.profile.requiredFields.includes(u.account.profile.fields.GENDER), [x, S] = Object(c.useState)(Object(n.a)(w, "username", "")), [D, R] = Object(c.useState)(Object(n.a)(w, "birthdate", null)), [T, A] = Object(c.useState)(!!_ && !D), [M, F] = Object(c.useState)(Object(n.a)(w, "gender", null)), [L, Y] = Object(c.useState)(Object(n.a)(w, "is_kid", !1)), [q, B] = Object(c.useState)(Object(n.a)(w, "profile_type", v.a.adult)),
                U = Object(c.useMemo)(() => {
                    const e = o()(D);
                    return e.isValid() ? e.format(i.moment.formats.shortDate) : null
                }, [D]), z = " (".concat(P("global.optional"), ")"), G = x.length > C,
                H = !(x && !G) || !L && (T || !(!N || !!M)), K = Object(c.useCallback)(e => S(e), [S]),
                V = Object(c.useCallback)(() => {
                    F(null), R(null), Y(e => {
                        const t = !e;
                        return Object(y.k)({
                            key: "clickSectionProfile",
                            state: t ? "on" : "off"
                        }), B(t ? v.a.kid : v.a.adult), t
                    })
                }, [F, R, Y]), W = Object(c.useCallback)(e => {
                    let {gender: t} = e;
                    return F(t || null)
                }, [F]), X = Object(c.useCallback)(e => {
                    let {birthdateInput: t, isBirthdateValid: a} = e;
                    const n = !a;
                    n !== T && A(n), R(t ? o()(t, i.moment.formats.shortDate).format("YYYY-MM-DD") : null)
                }, [R, A, T]), Z = Object(c.useCallback)(async e => (e.preventDefault(), H ? null : I({
                    kid: L,
                    profileName: x,
                    birthDate: D,
                    gender: M,
                    avatarId: Object(n.a)(t, "id", null)
                })), [I, x, D, M, L, t]);
            return r.a.createElement("form", {onSubmit: Z}, r.a.createElement(j.a, null, r.a.createElement(O.a, {
                avatar: t,
                isKid: L,
                onAvatarClick: l,
                profileType: q
            }), r.a.createElement(E.a, {
                onChange: K,
                profileName: x
            }), r.a.createElement(h.a, null, r.a.createElement(m.b, {
                name: "isKid",
                id: "isKid",
                onClick: V,
                checked: L,
                label: P("account.profile.child"),
                title: P("account.profile.profileType")
            })), !L && r.a.createElement(h.a, null, r.a.createElement(d.a, {
                birthdateInput: U,
                setFormFields: X,
                withMinimalAge: !1,
                isMandatory: _,
                label: "".concat(P("onboarding.labels.birthdate")).concat(_ ? "" : z)
            })), !L && r.a.createElement(h.a, null, r.a.createElement(f.a, {
                setFormFields: W,
                title: P("onboarding.labels.gender"),
                label: P("onboarding.labels.gender"),
                genderInput: M
            }))), r.a.createElement(g.b, null, r.a.createElement(g.a, {
                type: "submit",
                disabled: H,
                label: P("global.save")
            }), w && r.a.createElement(g.a, {
                disabled: !a,
                label: P("account.profile.delete"),
                buttonMode: p.c.SECONDARY,
                onClick: k,
                type: "button"
            })))
        }
    }, f3HA: function (e, t, a) {
    }, fhEX: function (e, t, a) {
        "use strict";
        a.r(t);
        var n = a("ERkP"), c = a.n(n), r = a("IFWP"), l = a("E/P7"), o = a("47v5"), i = a("m8Ei"), s = a("uDfI"),
            u = a("lcx8"), m = a("OXCn"), p = a("3tgQ"), b = a("07br"), d = a("CMFl"), f = a("p1RZ");
        const g = () => {
            const e = Object(r.useTranslate)(), t = Object(s.d)();
            return c.a.createElement(d.a, {title: e("account.deleteAccountPaper.title")}, c.a.createElement(u.b, {level: u.a.OTTAWA}, e("account.deleteAccountPaper.areYouSure")), c.a.createElement(u.b, {level: u.a.BERLIN}, e("account.deleteAccountPaper.content")), c.a.createElement(f.b, null, c.a.createElement(f.a, {
                type: "button",
                onClick: () => {
                    t(Object(b.o)())
                },
                label: e("account.deleteAccountPaper.confirm")
            }), c.a.createElement(f.a, {
                type: "button",
                buttonMode: m.c.SECONDARY,
                component: p.a,
                to: "account_info",
                label: e("global.cancel")
            })))
        };
        t.default = () => {
            const e = Object(r.useTranslate)();
            return c.a.createElement(c.a.Fragment, null, c.a.createElement(l.a, null, c.a.createElement(o.a, {title: e("account.menu.information")})), c.a.createElement(i.a, null, c.a.createElement(g, null)))
        }
    }, "gR6+": function (e, t, a) {
        "use strict";
        a.r(t);
        var n = a("ERkP"), c = a.n(n), r = a("uDfI"), l = a("IFWP"), o = a("j68i"), i = a("j7ca"), s = a("dkCR");
        t.default = () => {
            const e = Object(l.useTranslate)(), t = Object(r.d)(), a = Object(n.useCallback)(e => {
                let {kid: a, profileName: n, birthDate: c, gender: r, avatarId: l} = e;
                return t(Object(o.k)({kid: a, profileName: n, birthDate: c, gender: r, avatarId: l}))
            }, []);
            return c.a.createElement(i.a, {
                ProfileFormComponent: s.a,
                pageTitle: e("account.menu.profile"),
                formTitle: e("account.profile.addNew"),
                onFormSubmit: a
            })
        }
    }, iffx: function (e, t, a) {
        "use strict";
        a.r(t);
        var n = a("ERkP"), c = a.n(n), r = a("IFWP"), l = a("E/P7"), o = a("47v5"), i = a("m8Ei"), s = a("MyIs"),
            u = a("uDfI"), m = a("lcx8"), p = a("M6S4"), b = a("j/s1"), d = a("A03L"), f = a("R5CS"), g = a("07br"),
            O = a("uMmH"), E = a("qHZp"), j = a("rPqC"), h = a("ddlj");
        const v = Object(b.d)(E.a).withConfig({componentId: "sc-1kogmyl-0"})(["display:flex;flex-wrap:wrap;align-items:center;margin-bottom:8px;"]),
            y = Object(b.d)(m.b).withConfig({componentId: "sc-1kogmyl-1"})(["font-weight:bold;flex-grow:1;"]),
            C = b.d.span.withConfig({componentId: "sc-1kogmyl-2"})(["flex-basis:100%;color:", ";"], Object(j.h)("colors.text.tertiary")),
            k = b.d.button.withConfig({componentId: "sc-1kogmyl-3"})(["border:none;text-decoration:underline;background-color:transparent;"]),
            I = e => {
                let {box: t, removePairing: a} = e;
                const n = Object(r.useTranslate)(), l = Object(h.b)(t.pairedAt);
                return c.a.createElement(v, {dataTestid: "box-detail"}, c.a.createElement(y, {
                    level: m.a.BERLIN,
                    component: "h3"
                }, t.boxType), c.a.createElement(k, {
                    onClick: e => {
                        e.preventDefault(), a(t)
                    }
                }, n("pairing.home.unpair")), c.a.createElement(C, null, c.a.createElement(r.Trans, {
                    i18nKey: "pairing.home.pairedAt",
                    data: {date: l}
                })))
            };
        var w = a("cn6j"), P = a("CMFl"), _ = a("OXCn");
        const N = Object(b.d)(_.a).withConfig({componentId: "n4mapy-0"})(["margin-top:16px;"]), x = () => {
                const e = Object(r.useTranslate)(), t = Object(u.d)(), a = Object(u.e)(f.o), l = Object(u.e)(d.d),
                    o = Object(n.useMemo)(() => l.length > 0, [l]), i = Object(n.useCallback)(e => {
                        e.preventDefault(), t(Object(g.B)(a.UID)), Object(w.k)("allDevicesUnpaired")
                    }, [a]);
                return o ? c.a.createElement(N, {label: e("pairing.home.unpairAll"), onClick: i}) : null
            },
            S = Object(b.d)(m.b).withConfig({componentId: "sc-3vdnew-0"})(["font-weight:bold;margin-top:40px;margin-bottom:28px;"]),
            D = {show: !0, message: "pairing.unsynchronized.message", duration: 6e3, type: p.d.SUCCESS}, R = () => {
                const e = Object(r.useTranslate)(), t = Object(u.d)(), a = Object(u.e)(f.o), l = Object(u.e)(f.t),
                    o = Object(u.e)(d.d), i = o.length > 0;
                Object(n.useEffect)(() => {
                    a && t(Object(g.v)(a))
                }, [a]);
                const s = Object(n.useCallback)(async e => {
                    await t(Object(g.x)(a.UID, e.boxType, e.boxId)), Object(w.k)("deviceUnpaired"), t(Object(O.G)(D))
                }, [a]);
                return l && i ? c.a.createElement(P.a, {title: e("pairing.home.yourDevices")}, c.a.createElement(m.b, null, e("pairing.home.devicesThatAccessAccount")), c.a.createElement(S, {
                    component: "h2",
                    level: m.a.BERLIN
                }, e("pairing.home.alreadySyncDevices", void 0, o.length)), c.a.createElement("div", null, o.map(e => c.a.createElement(I, {
                    box: e,
                    key: e.boxId,
                    removePairing: s
                }))), c.a.createElement(x, null)) : null
            };
        t.default = () => {
            const e = Object(r.useTranslate)();
            return c.a.createElement(c.a.Fragment, null, c.a.createElement(l.a, null, c.a.createElement(o.a, {title: e("account.menu.pairing")})), c.a.createElement(i.a, null, c.a.createElement(s.a, {analyticsEventKey: "pairingResultPairing"}), c.a.createElement(R, null)))
        }
    }, j7ca: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return F
        }));
        var n = a("r6MD"), c = (a("kYxP"), a("ERkP")), r = a.n(c), l = a("j/s1"), o = a("uDfI"), i = a("IFWP"),
            s = a("OXCn"), u = a("lcx8"), m = a("CMFl"), p = (a("dkCR"), a("47v5")), b = a("m8Ei"), d = a("E/P7"),
            f = a("Tc2z"), g = a("Y7RG"), O = a("PtyX"), E = a("rPqC"), j = a("pEs5"), h = a("sDRi");

        function v(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), a.push.apply(a, n)
            }
            return a
        }

        function y(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a, e
        }

        const C = l.d.ul.withConfig({componentId: "sc-1wc8tvj-0"})(["display:flex;flex-wrap:wrap;list-style:none;margin:0 -8px;"]),
            k = l.d.section.withConfig({componentId: "sc-1wc8tvj-1"})(["", ";color:", ";margin-top:24px;"], Object(b.b)(), Object(E.h)("colors.text.primary")),
            I = l.d.li.withConfig({componentId: "sc-1wc8tvj-2"})(["margin:0 8px 24px;"]),
            w = Object(l.d)(u.b).withConfig({componentId: "sc-1wc8tvj-3"})(["font-weight:bold;margin-top:24px;margin-bottom:24px;"]),
            P = e => {
                let {currentAvatar: t, profileAvatar: a, onAvatarSelection: l} = e;
                const s = Object(i.useTranslate)(), m = Object(o.e)(j.a), p = Object(n.a)(t, "id"),
                    b = Object(n.a)(a, "id"), d = Object(c.useMemo)(() => {
                        const e = Object(n.a)(a, "type");
                        return e && !m[e] ? function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? v(Object(a), !0).forEach((function (t) {
                                    y(e, t, a[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : v(Object(a)).forEach((function (t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                                }))
                            }
                            return e
                        }({}, m, {[e]: [a]}) : Object(O.a)(m, (e, t) => Object(n.a)(a, "type") === t && e.every(e => e.id !== b) ? [a, ...e] : e)
                    }, [m, a]), E = Object(g.a)(m, e => e.length > 0), P = Object(c.useCallback)(e => () => {
                        l(e)
                    }, [l]);
                return E ? Object(f.a)(d, (e, t) => r.a.createElement("section", {key: t}, r.a.createElement(w, {level: u.a.BERLIN}, s("account.theme", {type: t})), r.a.createElement(C, null, e.map(e => r.a.createElement(I, {key: e.id}, r.a.createElement(h.a, {
                    imageSize: 80,
                    isActive: p === e.id,
                    profile: {avatar: {imageExternalKey: e.imageExternalKey}},
                    onClick: P(e),
                    unselected: p !== e.id
                })))))) : r.a.createElement(k, null, r.a.createElement(i.Trans, {i18nKey: "account.noAvatarAvailable"}))
            };
        var _ = a("j68i"), N = a("Jvjd");
        const x = l.d.div.withConfig({componentId: "sc-13h1dsb-0"})(["display:none;", ""], Object(N.e)("$on", Object(l.c)(["display:block;"])));
        var S = a("p1RZ"), D = a("3tgQ"), R = a("cn6j");

        function T() {
            return (T = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                }
                return e
            }).apply(this, arguments)
        }

        function A(e, t) {
            if (null == e) return {};
            var a, n, c = function (e, t) {
                if (null == e) return {};
                var a, n, c = {}, r = Object.keys(e);
                for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || (c[a] = e[a]);
                return c
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (c[a] = e[a])
            }
            return c
        }

        const M = Object(l.d)(u.b).withConfig({componentId: "kbxxlc-0"})(["font-weight:bold;color:grey;"]), F = e => {
            let {ProfileFormComponent: t, pageTitle: a, formTitle: l} = e,
                f = A(e, ["ProfileFormComponent", "pageTitle", "formTitle"]);
            const g = Object(i.useTranslate)(), O = Object(o.d)(), [E, j] = Object(c.useState)(!1),
                h = Object(n.a)(f, "profile.avatar"), [v, y] = Object(c.useState)(h),
                C = Object(c.useCallback)(async e => {
                    let {profileType: t} = e;
                    await O(Object(_.m)({profileType: t})), j(!0)
                }, []), k = Object(c.useCallback)(e => {
                    y(e), Object(R.k)("clickSelectAvatar")
                }, []), I = Object(c.useCallback)(e => {
                    e.preventDefault(), j(!1)
                }, [j]), w = Object(c.useCallback)(e => {
                    e.preventDefault(), j(!1), y(h)
                }, []), N = v === h;
            return r.a.createElement(r.a.Fragment, null, r.a.createElement(x, {$on: !E}, r.a.createElement(d.a, {
                marginTop: {
                    small: 4,
                    medium: 10,
                    large: 12
                }, marginBottom: {xsmall: 8, small: 12, medium: 8, large: 10}
            }, r.a.createElement(p.a, {title: a})), r.a.createElement(b.a, null, r.a.createElement(m.a, {title: l}, r.a.createElement(t, T({
                avatar: v,
                onAvatarClick: C
            }, f))))), r.a.createElement(x, {$on: E}, r.a.createElement(d.a, {
                marginTop: {
                    small: 4,
                    medium: 10,
                    large: 12
                }, marginBottom: {xsmall: 8, small: 12, medium: 8, large: 10}
            }, r.a.createElement(p.a, {title: g("account.editProfile")})), r.a.createElement(b.a, null, r.a.createElement(m.a, {title: g("account.changeAvatar")}, r.a.createElement(M, {level: u.a.BERLIN}, g("account.chooseAvatar")), r.a.createElement(P, {
                onAvatarSelection: k,
                currentAvatar: v,
                profileAvatar: h
            }), r.a.createElement(S.b, null, r.a.createElement(S.a, {
                buttonMode: s.c.PRIMARY,
                label: g("global.submit"),
                type: "submit",
                disabled: N,
                onClick: I
            }), r.a.createElement(S.a, {
                component: D.a,
                buttonMode: s.c.SECONDARY,
                to: "account_info",
                label: g("global.back"),
                type: "button",
                onClick: w
            }))))))
        }
    }, jboz: function (e, t, a) {
    }, lBpo: function (e, t, a) {
        "use strict";
        a.r(t);
        var n = a("ERkP"), c = a.n(n), r = a("IFWP"), l = a("uDfI"), o = a("VGyI"), i = a("m8Ei"), s = a("CMFl"),
            u = a("47v5"), m = a("E/P7"), p = a("Jsve"), b = (a("kYxP"), a("j/s1")), d = a("rPqC"), f = a("OXCn"),
            g = a("r6MD"), O = a("S4EX"), E = a("lcx8"), j = a("0Scd"), h = a("m03+"), v = a("QUYU"), y = a("N70H"),
            C = a("uMmH"), k = a("cn6j"), I = a("3tgQ"), w = a("Xe1R");
        const {INVALID_LOGIN_ID: P} = h.f, _ = b.d.form.withConfig({componentId: "sfa3q5-0"})(["max-width:800px;"]),
            N = Object(b.d)(f.a).withConfig({componentId: "sfa3q5-1"})(["margin:32px 16px 0 0;"]),
            x = b.d.div.withConfig({componentId: "sfa3q5-2"})(["margin-top:48px;"]),
            S = b.d.p.withConfig({componentId: "sfa3q5-3"})(["color:", ";font-size:14px;margin-top:32px;"], Object(d.h)("colors.form.textfield.error")),
            D = Object(b.d)(f.a).withConfig({componentId: "sfa3q5-4"})(["margin-top:8px;"]), R = e => t => {
                const {value: a} = t.target;
                e(a)
            }, T = e => {
                let {onCancel: t, onSubmit: a} = e;
                const [o, i] = Object(n.useState)(""), [s, u] = Object(n.useState)(""), [m, p] = Object(n.useState)(""),
                    b = Object(r.useTranslate)(), d = Object(l.d)(), h = Object(l.e)(y.f);
                Object(n.useEffect)(() => {
                    h && d(C.D)
                }, [s, o]);
                const T = Object(g.a)(h, "type") === P, A = !(!o || !s || o !== s), M = !(!s || !m || s === m),
                    F = !(o && s && m) || !o || !s || !m || T || A || M;
                return c.a.createElement(_, {
                    onSubmit: async e => {
                        e.preventDefault(), Object(k.k)("createNewPassword"), await d(Object(v.h)(o, s)), await d(Object(C.G)(w.i)), a()
                    }
                }, c.a.createElement(x, null, c.a.createElement(O.d, {
                    onChange: R(i),
                    value: o,
                    label: b("account.currentPassword"),
                    errorText: b("account.invalidCurrentPassword"),
                    hasError: T
                })), c.a.createElement(D, {
                    component: I.a,
                    type: "button",
                    label: b("account.passwordForgotten"),
                    buttonMode: f.c.TERTIARY,
                    to: "account_forgot_password"
                }), c.a.createElement(x, null, c.a.createElement(j.a, {
                    onValidate: e => u(e),
                    labelKey: "global.newPassword"
                })), c.a.createElement(x, null, c.a.createElement(O.d, {
                    onChange: R(p),
                    value: m,
                    label: b("passwordReset.confirmPassword"),
                    errorText: b("account.newPasswordConfirmationFailed"),
                    hasError: M
                })), A && c.a.createElement(S, null, c.a.createElement(E.b, {level: E.a.MADRID}, b("account.invalidNewPasswordIsTheSame"))), c.a.createElement(N, {
                    type: "submit",
                    disabled: F,
                    label: b("global.save")
                }), c.a.createElement(N, {
                    type: "button",
                    onClick: t,
                    label: b("global.cancel"),
                    buttonMode: f.c.SECONDARY
                }))
            }, A = Object(b.d)(f.a).withConfig({componentId: "bxij94-0"})(["margin-bottom:16px;"]),
            M = Object(b.d)(I.a).withConfig({componentId: "bxij94-1"})(["color:", ";"], Object(d.h)("colors.text.primary")),
            F = () => {
                const e = Object(r.useTranslate)(), [t, a] = Object(n.useState)(!1), l = Object(n.useCallback)(() => {
                    a(!0), Object(k.k)("clickModifyPassword")
                }, []), o = Object(n.useCallback)(() => {
                    a(!1)
                }, []);
                return c.a.createElement(s.a, {title: e("account.changePassword")}, t ? c.a.createElement(T, {
                    onSubmit: o,
                    onCancel: o
                }) : c.a.createElement(c.a.Fragment, null, c.a.createElement(A, {
                    type: "button",
                    label: e("global.update"),
                    onClick: l
                }), c.a.createElement("div", null, c.a.createElement(M, {to: "account_forgot_password"}, c.a.createElement(r.Trans, {i18nKey: "account.passwordForgotten"})))))
            };
        var L = a("MKnV"), Y = a("x3LB"), q = a("mZvw"), B = a("6jJV");

        function U() {
            return (U = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                }
                return e
            }).apply(this, arguments)
        }

        const z = b.d.div.withConfig({componentId: "cbew7u-0"})(["display:flex;align-items:center;"]),
            G = Object(b.d)(E.b).withConfig({componentId: "cbew7u-1"})(["padding-right:16px;"]),
            H = b.d.div.withConfig({componentId: "cbew7u-2"})(["padding-left:16px;"]), {USER_AD_TARGETING_DATA_SHARING_CONSENT: K} = L.gdpr.userConsents,
            V = e => c.a.createElement(I.a, U({}, e, {
                target: "_blank",
                to: "privacyPolicies",
                params: {sectionRoute: "mes-informations-personnelles"}
            })), W = {MyPartner: V, MyInformation: V}, X = () => {
                const e = Object(r.useTranslate)(), t = Object(l.d)(), a = Object(l.e)(B.a);
                return c.a.createElement(s.a, {title: e("gdpr.consent.partnerConsent.account.title")}, c.a.createElement(z, null, c.a.createElement(G, {level: E.a.BERLIN}, c.a.createElement(r.Trans, {
                    i18nKey: "gdpr.consent.partnerConsent.account.description",
                    renderers: W
                })), c.a.createElement(H, null, c.a.createElement(Y.a, {
                    name: "partnerconsent-toggle",
                    ariaDescribedBy: "description-partnerconsent-toggle",
                    ariaLabelledBy: "label-partnerconsent-toggle",
                    checked: a,
                    onClick: () => {
                        Object(k.k)({
                            key: "toggleUserGDPRConsent",
                            id: K
                        }), t(Object(q.a)(K, !a)), Object(k.k)({key: "partnerConsentAccountConsent", consent: !a})
                    },
                    dataTestId: "partnerconsent-toggle",
                    label: ""
                }))))
            };
        var Z = a("An8f"), Q = a("2kSs"), J = a("R5CS"), $ = a("rp+Z"), ee = a("jt5Z"), te = a("p1RZ"), ae = a("DqXN"),
            ne = a("M6S4"), ce = a("nuUC"), re = a("JTGz"), le = a("XPOl"), oe = a("qbAh");
        const ie = e => async (t, a) => {
            const n = a(), c = Object(J.b)(n), {key: r} = Object(o.H)(n);
            try {
                const a = await Object(ce.a)(t, n), l = await a.sendCode({email: c, lang: ae.lang, apiKey: r});
                return t(Object(re.b)(l)), t(Object(C.G)({type: ne.d.SUCCESS, show: !0, message: e, duration: 6e3}))
            } catch (e) {
                const a = {tags: {context: "iamVerificationToken"}}, n = ["user", "error", "sendIamVerificationCode"];
                return Object(le.a)("user:gigya:iamVerificationToken", e, a, n), t(Object(C.G)({
                    type: ne.d.ERROR,
                    show: !0,
                    message: Object(oe.c)(e),
                    duration: 6e3
                }))
            }
        };
        var se = a("/Z5K"), ue = a("07br");
        const me = e => {
                let {email: t, iamVerificationCode: a, onSuccess: n} = e;
                return async (e, c) => {
                    if (Object(o.Hb)(c())) try {
                        await e((e => async (t, a) => {
                            const n = a(), c = Object(J.e)(n), {key: r} = Object(o.H)(n);
                            try {
                                return (await Object(ce.a)(t, n)).verifyCode({code: e, iamVerificationToken: c, apiKey: r})
                            } catch (e) {
                                const t = {tags: {context: "iamVerificationToken"}},
                                    a = ["user", "error", "verifyIamVerificationCode"];
                                return Object(le.a)("user:gigya:iamVerificationToken", e, t, a)
                            }
                        })(a))
                    } catch (t) {
                        if (t instanceof se.f) return e(Object(C.G)({
                            type: ne.d.ERROR,
                            message: "user.iamVerificationCodeError",
                            duration: 6e3,
                            show: !0
                        }));
                        throw t
                    }
                    const r = {profile: {email: t}};
                    try {
                        return await e(Object(ue.q)(r)).then(n)
                    } catch (e) {
                        return Object(le.a)("app:account:editUserEmail", e, ["account", "editUserEmail", "failure"])
                    }
                }
            }, pe = e => {
                let {isEditing: t, email: a} = e;
                const [o, i] = Object(n.useState)(!0), s = Object(n.useRef)(), u = Object(r.useTranslate)(),
                    m = Object(l.d)();
                Object(n.useEffect)(() => (t && !s.current && (s.current = setTimeout(() => i(!1), 1e4)), t || (i(!0), clearTimeout(s.current), s.current = null), () => s.current && clearTimeout(s.current)), [t]);
                const p = Object(n.useCallback)(() => {
                    m(ie(u("user.iamVerificationCodeSentSuccess", {email: a})))
                }, [m, a]);
                return c.a.createElement(f.a, {
                    marginTop: 3,
                    disabled: o,
                    type: "button",
                    buttonMode: f.c.TERTIARY,
                    label: u("account.changeEmailPaper.sendCodeAgain"),
                    onClick: p
                })
            }, be = b.d.div.withConfig({componentId: "u9j82p-0"})([".is-editing{display:flex;align-items:center;}"]),
            de = Object(b.d)(E.b).withConfig({componentId: "u9j82p-1"})(["overflow-wrap:anywhere;"]),
            fe = b.d.div.withConfig({componentId: "u9j82p-2"})([":not(.without-label){padding:32px 0 16px;", ";", ";", ";}"], Z.b.min(Z.c.small, Object(b.c)(["padding:32px 0 24px;"])), Z.b.min(Z.c.large, Object(b.c)(["padding:48px 0 24px;"])), Z.b.min(Z.c.wide, Object(b.c)(["padding:62px 0 24px;"]))),
            ge = Object(b.d)(f.a).withConfig({componentId: "u9j82p-3"})(["width:fit-content;margin-top:16px;"]),
            Oe = Object(b.d)(Q.b).withConfig({componentId: "u9j82p-4"})(["padding:16px 16px 12px;text-transform:uppercase;", ";", ";"], Z.b.min(Z.c.xsmall, Object(b.c)(["padding:16px 0 12px;"])), Z.b.min(Z.c.xlarge, Object(b.c)(["padding:24px 0 24px;"]))),
            Ee = /[0123456789]/, je = () => {
                const e = Object(r.useTranslate)(),
                    t = Object(l.d)(), [a, i] = Object(n.useState)(!1), {email: u} = Object(l.e)(J.m), [m, p] = Object(n.useState)(""),
                    b = Object(n.useMemo)(() => $.b.check(m), [m]), {code: d, isCodeValid: g, handleCodeChange: O} = Object(Q.c)(6),
                    j = Object(l.e)(o.Hb), h = () => {
                        p(""), O(""), i(!1)
                    }, v = Object(n.useCallback)(() => {
                        i(!0), j && t(ie(e("user.iamVerificationCodeSentSuccess", {email: u}))), Object(k.k)("clickModifyInformation")
                    }, [i, t, u, j]), y = !b || j && !g;
                return c.a.createElement(s.a, {title: e("account.changeEmailPaper.myEmail")}, c.a.createElement(be, {className: a ? "is-editing" : null}, a ? c.a.createElement("div", null, c.a.createElement(de, {level: E.a.BERLIN}, e("account.changeEmailPaper.purpose")), j && c.a.createElement(c.a.Fragment, null, c.a.createElement("br", null), c.a.createElement(de, {level: E.a.BERLIN}, c.a.createElement(r.HtmlTrans, {
                    i18nKey: "account.changeEmailPaper.verification",
                    data: {email: u}
                }))), c.a.createElement("form", {
                    onSubmit: async e => (e.preventDefault(), !!b && t(me({
                        email: m,
                        iamVerificationCode: d,
                        onSuccess: h
                    })))
                }, c.a.createElement(fe, null, c.a.createElement(ee.a, {
                    name: "modify-email-input",
                    label: "account.changeEmailPaper.newEmail",
                    emailInput: m,
                    setFormFields: e => {
                        let {emailInput: t} = e;
                        p(t)
                    }
                })), j && c.a.createElement(c.a.Fragment, null, c.a.createElement(Oe, {
                    name: "modify-email-code",
                    value: d,
                    authorizedCharacters: Ee,
                    inputLength: 6,
                    onChange: O
                }), c.a.createElement(pe, {
                    isEditing: a,
                    email: u
                })), c.a.createElement(te.b, null, c.a.createElement(te.a, {
                    disabled: y,
                    type: "submit",
                    label: e("global.submit")
                }), c.a.createElement(te.a, {
                    type: "button",
                    label: e("global.cancel"),
                    buttonMode: f.c.SECONDARY,
                    onClick: h
                })))) : c.a.createElement(c.a.Fragment, null, c.a.createElement(fe, {className: "without-label"}, c.a.createElement(ee.a, {
                    emailInput: u,
                    readOnly: !0
                })), c.a.createElement(ge, {type: "button", label: e("global.update"), onClick: v}))))
            };
        t.default = () => {
            const e = Object(r.useTranslate)(), t = Object(l.e)(o.zb);
            return c.a.createElement(c.a.Fragment, null, c.a.createElement(m.a, null, c.a.createElement(u.a, {title: e("account.menu.information")})), c.a.createElement(i.a, {hasMasonry: !0}, c.a.createElement(s.a, {title: e("account.myPrivateData")}, c.a.createElement(p.a, null)), c.a.createElement(F, null), c.a.createElement(je, null), t && c.a.createElement(X, null)))
        }
    }, m8DA: function (e, t, a) {
    }, m8Ei: function (e, t, a) {
        "use strict";
        a.d(t, "b", (function () {
            return s
        })), a.d(t, "a", (function () {
            return m
        }));
        var n = a("ERkP"), c = a.n(n), r = a("j/s1"), l = a("5+Jc");

        function o() {
            return (o = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                }
                return e
            }).apply(this, arguments)
        }

        const i = (e, t) => Object(r.c)(["padding-left:", "px;"], Object(l.p)(t)),
            s = () => Object(r.c)(["", ""], Object(l.m)(i)),
            u = Object(r.d)(l.d).withConfig({componentId: "sc-1eq6ctx-0"})(["", ""], Object(l.m)((e, t) => Object(r.c)(["margin-bottom:", "px;"], Object(l.q)(t)))),
            m = e => {
                let t = Object.assign({}, e);
                return c.a.createElement(u, o({columns: 2, medium: 1, small: 1, xsmall: 1}, t))
            }
    }, o1cQ: function (e, t, a) {
        "use strict";
        a.r(t);
        var n = a("ERkP"), c = a.n(n), r = a("IFWP"), l = a("m8Ei"), o = a("47v5"), i = a("MyIs"), s = a("Xe1R"),
            u = a("CMFl"), m = a("Jsve"), p = a("3tgQ"), b = a("p1RZ"), d = a("cn6j");
        const f = () => {
            const e = Object(r.useTranslate)(), t = Object(n.useCallback)(() => {
                Object(d.k)("clickManageInformation")
            }, []);
            return c.a.createElement(u.a, {title: e("account.myData")}, c.a.createElement(m.a, {mode: s.r.DISPLAY}), c.a.createElement(b.b, null, c.a.createElement(b.a, {
                component: p.a,
                to: "account_info",
                label: e("account.manageMyData"),
                onClick: t
            })))
        };
        a("kYxP");
        var g = a("uDfI"), O = a("lAuQ"), E = a("vDdw"), j = a("VNep"), h = a("HN4/"), v = a("R5CS"), y = a("Y76z"),
            C = a("cXnQ");
        const k = () => {
            const e = Object(r.useTranslate)();
            return c.a.createElement(c.a.Fragment, null, c.a.createElement(r.Trans, {i18nKey: "account.options.noOption"}), c.a.createElement(b.b, null, c.a.createElement(b.a, {
                component: p.a,
                to: "account_subscriptions_list",
                type: "button",
                label: e("account.options.seeOffersButton")
            })))
        }, I = () => {
            const e = Object(r.useTranslate)(), t = Object(g.e)(O.h), a = Object(g.e)(E.e), n = Object(g.e)(E.n),
                l = Object(g.e)(O.m);
            if (!n && !l) return null;
            const o = t.length > 0 || a.length > 0;
            return c.a.createElement(u.a, {title: e("account.options.paperTitle")}, o ? c.a.createElement(c.a.Fragment, null, t.map(e => c.a.createElement(y.a, {
                key: e.code,
                option: e,
                type: C.a.FREEMIUM
            })), a.map(e => c.a.createElement(y.a, {
                key: e.offer.code,
                option: e,
                type: C.a.PREMIUM
            })), c.a.createElement(b.b, null, c.a.createElement(b.a, {
                component: p.a,
                to: "account_subscriptions_list",
                type: "button",
                label: e("account.options.manage")
            }))) : c.a.createElement(k, null))
        };
        I.fetchData = (e, t, a, n) => {
            const c = n(), r = [];
            return Object(E.n)(c) && Object(v.t)(c) && r.push(a(Object(h.t)(Object(v.o)(c)))), Object(O.m)(c) && Object(v.t)(c) && r.push(a(j.g)), Promise.all(r)
        };
        var w = a("wYlQ"), P = a("E/P7");
        const _ = () => {
            const e = Object(r.useTranslate)();
            return c.a.createElement(c.a.Fragment, null, c.a.createElement(P.a, null, c.a.createElement(o.a, {title: e("account.menu.dashboard")})), c.a.createElement(l.a, {hasMasonry: !0}, c.a.createElement(f, null), c.a.createElement(i.a, {analyticsEventKey: "pairingResultOverview"}), c.a.createElement(I, null)))
        };
        _.fetchData = Object(w.a)(f, i.a, I);
        t.default = _
    }, p1RZ: function (e, t, a) {
        "use strict";
        a.d(t, "b", (function () {
            return l
        })), a.d(t, "a", (function () {
            return o
        }));
        var n = a("j/s1"), c = a("OXCn"), r = a("wKTk");
        const l = Object(n.d)(r.a).withConfig({componentId: "o6a45d-0"})([""]),
            o = Object(n.d)(c.a).withConfig({componentId: "o6a45d-1"})([""])
    }, qHZp: function (e, t, a) {
        "use strict";
        var n = a("ERkP"), c = a.n(n), r = a("O94r"), l = a.n(r), o = a("rPqC"), i = a("lN5B");
        const s = e => {
            let {dark: {PRIMARY: t, TERTIARY: a}} = e;
            return {
                primary: {background: t, backgroundScrollable: Object(i.i)(a, .1), foreground: a, borderColor: a},
                tertiary: {background: a, backgroundScrollable: Object(i.i)(t, .1), foreground: t, borderColor: t}
            }
        };
        var u = a("j/s1"), m = a("Jvjd"), p = a("5+Jc");
        const b = u.d.div.withConfig({componentId: "sc-1um1o3q-0"})(["border-radius:8px;padding:16px;", " &.is-primary{background-color:", ";color:", ";border:1px solid ", ";}&.is-tertiary{background-color:", ";color:", ";border:1px solid ", ";}&.is-scrollable{overflow:auto;}&.is-scrollable.is-primary{background-color:", ";}&.is-scrollable.is-tertiary{background-color:", ";}", ";", ";"], m.t, Object(o.h)("scope_flap.primary.background"), Object(o.h)("scope_flap.primary.foreground"), Object(o.h)("scope_flap.primary.borderColor"), Object(o.h)("scope_flap.tertiary.background"), Object(o.h)("scope_flap.tertiary.foreground"), Object(o.h)("scope_flap.tertiary.borderColor"), Object(o.h)("scope_flap.primary.backgroundScrollable"), Object(o.h)("scope_flap.tertiary.backgroundScrollable"), m.p.gt(p.e.small, Object(u.c)(["padding:16px 24px;"])), m.p.gt(p.e.xlarge, Object(u.c)(["padding:16px 32px;"]))),
            d = u.d.div.withConfig({componentId: "sc-1um1o3q-1"})(["overflow:auto;height:100%;"]),
            f = {PRIMARY: "primary", TERTIARY: "tertiary"};

        function g() {
            return (g = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                }
                return e
            }).apply(this, arguments)
        }

        function O(e, t) {
            if (null == e) return {};
            var a, n, c = function (e, t) {
                if (null == e) return {};
                var a, n, c = {}, r = Object.keys(e);
                for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || (c[a] = e[a]);
                return c
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (c[a] = e[a])
            }
            return c
        }

        t.a = e => {
            let {children: t, className: a, dataTestid: n, variant: r = f.PRIMARY, scrollable: i = !1} = e,
                u = O(e, ["children", "className", "dataTestid", "variant", "scrollable"]);
            return c.a.createElement(o.d, {mode: r === f.PRIMARY ? o.c.LIGHT : o.c.DARK}, c.a.createElement(o.e, {
                buildTheme: s,
                scope: "flap"
            }, c.a.createElement(b, g({
                className: l()(a, {"is-scrollable": i}, {"is-primary": r === f.PRIMARY}, {"is-tertiary": r === f.TERTIARY}),
                variant: r
            }, u), c.a.createElement(d, null, t))))
        }
    }, qZ4L: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return f
        }));
        var n = a("ERkP"), c = a.n(n), r = a("j/s1"), l = a("IFWP"), o = a("qHZp"), i = a("lcx8"), s = a("bceI"),
            u = a("rPqC"), m = a("ppam");

        function p() {
            return (p = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                }
                return e
            }).apply(this, arguments)
        }

        function b(e, t) {
            if (null == e) return {};
            var a, n, c = function (e, t) {
                if (null == e) return {};
                var a, n, c = {}, r = Object.keys(e);
                for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || (c[a] = e[a]);
                return c
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (c[a] = e[a])
            }
            return c
        }

        const d = Object(r.d)(i.b).withConfig({componentId: "sc-2jlgl1-0"})(["font-weight:600;"]), f = e => {
            let {title: t, serviceThemeName: a, priceWithCurrency: n, children: r, image: f} = e,
                g = b(e, ["title", "serviceThemeName", "priceWithCurrency", "children", "image"]);
            const O = Object(l.useTranslate)(), E = a && !!u.k[a];
            let j = c.a.createElement(c.a.Fragment, null);
            return j = E ? c.a.createElement(u.f, {code: a}, c.a.createElement(s.b, {size: "M"})) : f ? c.a.createElement(m.a, p({
                imageId: f.id,
                captionText: f.caption,
                role: "logo",
                template: "square-logo"
            }, f)) : c.a.createElement(d, {
                marginBottom: 2,
                level: i.a.MADRID
            }, t), c.a.createElement(o.a, g, j, n && c.a.createElement(d, {
                marginTop: 6,
                marginBottom: 4,
                level: i.a.MADRID
            }, "".concat(O("account.options.price"), " ").concat(n, " ").concat(O("freemium.packPeriod"))), r)
        }
    }, "t+gt": function (e, t, a) {
    }, tGuV: function (e, t, a) {
    }, u3ej: function (e, t, a) {
        "use strict";
        a.r(t), a.d(t, "MESSAGE_SUCCESS_EDIT", (function () {
            return O
        })), a.d(t, "AccountNewsletterPage", (function () {
            return h
        }));
        var n = a("r6MD"), c = (a("kYxP"), a("jQ/y"), a("ERkP")), r = a.n(c), l = a("j/s1"), o = a("IFWP"),
            i = a("M6S4"), s = a("uDfI"), u = a("8iCr");
        const m = e => {
            let {name: t, checked: a, onChange: n, label: c, description: l, disabled: o = !1, dataTestId: i} = e;
            return r.a.createElement(u.a, {
                titleKey: c,
                descriptionKey: l,
                name: t,
                onChange: n,
                isChecked: a,
                disabled: o,
                dataTestId: i
            })
        };
        var p = a("0QuS"), b = a("R5CS"), d = a("ebrp"), f = a("uMmH"), g = a("VGyI");
        const O = {show: !0, message: "account.successEdit", duration: 6e3, type: i.d.SUCCESS},
            E = l.d.div.withConfig({componentId: "ssbcfv-0"})(["display:flex;flex-direction:column;"]),
            j = l.d.div.withConfig({componentId: "ssbcfv-1"})(["margin-top:40px;"]), h = () => {
                const e = Object(s.e)(b.t), t = Object(o.useTranslate)(), a = Object(s.d)(), l = Object(s.e)(g.P),
                    i = Object(s.e)(b.f), u = Object(c.useCallback)(e => async () => {
                        const {code: t} = e;
                        await a(Object(d.c)({[t]: !Object(n.a)(i, "".concat(e.code, ".subscribed"), !1)})), a(Object(f.G)(O))
                    }, [i]), h = l || {};
                return r.a.createElement(E, {className: "account-content__container"}, r.a.createElement(p.a, {titleKey: "account.myNewsletters"}), r.a.createElement(j, null, Object.entries(h).map(a => {
                    let [c, l] = a;
                    return r.a.createElement(m, {
                        key: c,
                        dataTestId: "newsletter-".concat(c),
                        name: c,
                        checked: Object(n.a)(i, "".concat(l.code, ".subscribed"), !1),
                        onChange: u(l),
                        disabled: !e,
                        label: t(l.label),
                        description: t(l.description)
                    })
                })))
            };
        t.default = h
    }, u6kg: function (e, t, a) {
        "use strict";
        a.r(t);
        var n = a("uDfI"), c = a("ERkP"), r = a.n(c), l = a("nkBd"), o = a("cn6j"), i = a("0QuS"), s = a("j/s1"),
            u = a("IFWP");
        const m = s.d.p.withConfig({componentId: "sc-1o9wuqt-0"})(["margin:20px 8px;"]), p = e => {
            let {messageKey: t} = e;
            return r.a.createElement(m, null, r.a.createElement(u.Trans, {i18nKey: t}))
        };

        class b extends r.a.Component {
            componentDidMount() {
                Object(o.m)("printAccountPreferences")
            }

            render() {
                const {rootService: e, interests: {program: t, character: a, theme: n}} = this.props;
                return r.a.createElement("div", {className: "account-content__container"}, r.a.createElement(i.a, {titleKey: "global.mySelection"}), r.a.createElement(p, {messageKey: "account.editMySelection"}), r.a.createElement(l.a, {
                    interests: t,
                    trackEvents: {subscribe: "clickAccountAddInterest", unsubscribe: "clickAccountRemoveInterest"},
                    rootService: e,
                    interestClassModifiers: ["account"]
                }), r.a.createElement("hr", null), r.a.createElement(l.a, {
                    interests: a,
                    rootService: e,
                    interestClassModifiers: ["account"]
                }), r.a.createElement("hr", null), r.a.createElement(l.a, {
                    interests: n,
                    rootService: e,
                    interestClassModifiers: ["account"]
                }))
            }
        }

        var d = b, f = a("NUgN"), g = a("LNqv"), O = a("LkS6");
        const E = Object(n.c)(e => ({interests: Object(g.b)(e), rootService: Object(f.f)(e)}))(d);
        E.fetchData = (e, t, a) => a(O.i);
        t.default = E
    }, w4JB: function (e, t, a) {
    }, wYlQ: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return n
        }));
        a("kYxP");
        const n = function () {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            return (e, a, n, c) => Promise.all(t.filter(e => {
                let {fetchData: t} = e;
                return "function" == typeof t
            }).map(t => {
                let {fetchData: r} = t;
                return r(e, a, n, c)
            }))
        }
    }, xbjX: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return n
        }));
        const n = a("j/s1").d.div.withConfig({componentId: "sc-1nlzzy-0"})(["position:relative;display:flex;flex-direction:column;"])
    }, yKO1: function (e, t, a) {
        "use strict";
        a.r(t);
        var n = a("ERkP"), c = a.n(n), r = a("IFWP"), l = a("wYlQ"), o = a("m8Ei"), i = a("47v5"), s = a("uDfI"),
            u = a("lcx8"), m = a("3tgQ"), p = a("CMFl"), b = a("p1RZ"), d = a("1M5G"), f = a("M/dh"), g = a("R5CS"),
            O = a("VGyI");
        const E = () => {
            const e = Object(r.useTranslate)(), t = Object(s.d)(), a = Object(s.e)(g.t), l = Object(s.e)(d.g),
                o = Object(s.e)(O.Bb);
            return Object(n.useEffect)(() => {
                o && a && t(f.i)
            }, [a, o]), o && a && !l ? c.a.createElement(p.a, {title: e("account.operatorPaper.title")}, c.a.createElement(u.b, null, e("account.operatorPaper.content")), c.a.createElement(b.b, null, c.a.createElement(b.a, {
                to: "sso_partner_choice",
                component: m.a,
                label: e("account.operatorPaper.cta")
            }))) : null
        };
        var j = a("E/P7"), h = a("j/s1"), v = a("EHrM"), y = a("rPqC"), C = a("Jvjd"), k = a("5+Jc");
        const I = Object(h.d)(m.a).withConfig({componentId: "takj85-0"})(["color:", ";opacity:50%;display:flex;align-items:center;", " ", ""], Object(y.h)("colors.text.primary"), C.p.gt(k.e.small, Object(h.c)(["", ""], Object(k.m)((e, t) => Object(h.c)(["padding-left:", "px;"], Object(k.p)(t))))), C.p.gt(k.e.xlarge, Object(h.c)(["svg{width:24px;height:auto;}"]))),
            w = e => {
                let {to: t} = e;
                const a = Object(r.useTranslate)();
                return c.a.createElement(I, {to: t, target: "_blank"}, c.a.createElement(v.c, {
                    name: "Help",
                    color: "white",
                    size: "16",
                    marginRight: 2
                }), c.a.createElement(u.b, {level: u.a.MADRID, component: "span"}, a("account.needHelp")))
            };
        a("kYxP");
        var P = a("VNep"), _ = a("lAuQ"), N = a("IBrT"), x = a("HN4/"), S = a("vDdw"), D = a("bK21"), R = a("Y76z"),
            T = a("OXCn"), A = a("qZ4L"), M = a("cXnQ");
        const F = e => {
            let {option: t, type: a} = e;
            const n = Object(r.useTranslate)(), {title: l, theme_web: o, image: i} = t, {priceWithCurrency: s, to: u, params: p} = ((e, t) => {
                let {option: a, type: n} = e;
                const {code: c} = a;
                let r, l, o;
                switch (n) {
                    case M.a.FREEMIUM: {
                        const e = Object(N.d)(a);
                        e && (r = t("freemium.packPrice", {packPrice: e})), l = "freemium", o = {pack: c};
                        break
                    }
                    case M.a.PREMIUM:
                        r = Object(D.c)(Object(D.e)(a)), l = "offerPage", o = {offerCode: c}
                }
                return {priceWithCurrency: r, to: l, params: o}
            })({option: t, type: a}, n);
            return c.a.createElement(A.a, {
                title: l,
                serviceThemeName: o,
                image: i,
                priceWithCurrency: s,
                marginBottom: 2,
                dataTestid: "options-paper-available-option"
            }, c.a.createElement(T.a, {component: m.a, label: n("freemium.subscribe"), to: u, params: p}))
        }, L = h.d.div.withConfig({componentId: "sc-5zk305-0"})(["& + &{margin-top:24px;}"]), Y = () => {
            const e = Object(r.useTranslate)(), t = Object(s.e)(_.e), a = Object(s.e)(_.h), n = Object(s.e)(S.e),
                l = Object(s.e)(S.j), o = Object(s.e)(S.n), i = Object(s.e)(_.m);
            if (!o && !i) return null;
            const m = i ? Object(N.b)(t, a) : [], b = o ? Object(D.d)(l, n) : [], d = b.length > 0 || m.length > 0,
                f = a.length > 0 || n.length > 0;
            return c.a.createElement(p.a, {title: e("freemium.allOptions")}, f && c.a.createElement(L, null, c.a.createElement(u.b, {
                marginBottom: 3,
                level: u.a.BERLIN
            }, e("account.options.currentOptions")), a.map(e => c.a.createElement(R.a, {
                key: e.code,
                option: e,
                type: M.a.FREEMIUM
            })), n.map(e => c.a.createElement(R.a, {
                key: e.offer.code,
                option: e,
                type: M.a.PREMIUM
            }))), d && c.a.createElement(L, null, c.a.createElement(u.b, {
                marginBottom: 3,
                level: u.a.BERLIN
            }, e("freemium.availableOptions")), m.map(e => c.a.createElement(F, {
                key: e.code,
                option: e,
                type: M.a.FREEMIUM
            })), b.map(e => c.a.createElement(F, {key: e.code, option: e, type: M.a.PREMIUM}))))
        };
        Y.fetchData = (e, t, a, n) => {
            const c = n(), r = [];
            return Object(S.n)(c) && (r.push(a(Object(x.r)())), Object(g.t)(c) && r.push(a(Object(x.t)(Object(g.o)(c))))), Object(_.m)(c) && (r.push(a(P.f)), Object(g.t)(c) && r.push(a(P.g))), Promise.all(r)
        };
        var q = a("ppam");
        const B = Object(h.d)(q.a).withConfig({componentId: "jwbg3i-0"})(["margin-top:24px;margin-bottom:24px;"]),
            U = () => {
                const e = Object(r.useTranslate)(), t = Object(s.e)(d.f), a = Object(s.e)(_.h), n = Object(s.e)(d.g);
                if (!Object(s.e)(O.Bb) || !n) return null;
                const l = (t ? a.filter(e => e.subscription.store_code === t.code).map(e => e.title) : []).join(", ");
                return c.a.createElement(p.a, {title: e("account.freemium.subscriptionViaOperator")}, a && t ? c.a.createElement(c.a.Fragment, null, c.a.createElement(u.b, {level: u.a.BERLIN}, e("account.freemium.accountLinkedToOperator")), c.a.createElement(B, {
                    captionText: t.title,
                    images: t.images,
                    role: "vignette",
                    template: "square-88",
                    quality: "high"
                }), c.a.createElement(u.b, {level: u.a.BERLIN}, e("account.freemium.accessToFeatures", {features: l})), c.a.createElement(b.b, null, c.a.createElement(b.a, {
                    to: "sso_partner_choice",
                    component: m.a,
                    label: e("freemium.changeOperator")
                }))) : null)
            };
        U.fetchData = (e, t, a, n) => {
            const c = n();
            return Object(_.m)(c) && Object(g.t)(c) ? Promise.all([a(f.i), a(P.g)]) : Promise.resolve()
        };
        const z = () => {
            const e = Object(r.useTranslate)();
            return c.a.createElement(c.a.Fragment, null, c.a.createElement(j.a, null, c.a.createElement(i.a, {title: e("account.menu.subscription")}), c.a.createElement(w, {to: "https://etvous.m6.fr/faq/6play"})), c.a.createElement(o.a, {hasMasonry: !0}, c.a.createElement(Y, null), c.a.createElement(E, null), c.a.createElement(U, null)))
        };
        z.fetchData = Object(l.a)(Y, E, U);
        t.default = z
    }, zCYO: function (e, t, a) {
        "use strict";
        a.r(t);
        var n = a("m4c8"), c = a("ERkP"), r = a.n(c), l = a("j/s1"), o = a("OXCn"), i = a("lcx8"), s = a("EHrM"),
            u = a("Jvjd"), m = a("rPqC"), p = a("5+Jc"), b = a("IFWP"), d = a("/Z5K"), f = a("47v5"), g = a("eiga"),
            O = a("90YP"), E = a("/yeY"), j = a("E/P7");
        const h = l.d.aside.withConfig({componentId: "sc-15gqllc-0"})(["color:", ";margin-top:8px;", ";"], Object(m.h)("colors.text.primary"), Object(p.m)((e, t) => Object(l.c)(["padding-left:", "px;"], Object(p.p)(t)))),
            v = Object(l.d)(i.b).withConfig({componentId: "sc-15gqllc-1"})(["margin:24px 0;"]),
            y = l.d.div.withConfig({componentId: "sc-15gqllc-2"})(["", "{&.is-first.need-top-space{padding-top:0;", ";}}"], E.a, u.t),
            C = e => "".concat(e).concat(d.i.frontspace, "search");
        const k = e => {
            let {layout: t} = e;
            const a = Object(b.useTranslate)(), c = 0 === Object(n.a)(t.blocks);
            return r.a.createElement(r.a.Fragment, null, c ? r.a.createElement(m.d, {mode: m.c.DARK}, r.a.createElement(j.a, null, r.a.createElement(f.a, {title: a("account.bookmarks.myList")})), r.a.createElement(h, null, r.a.createElement(v, {level: i.a.BERLIN}, a("account.bookmarks.noResultMessage")), r.a.createElement(o.a, {
                component: g.a,
                to: "home",
                iconName: s.a.Plus,
                label: a("account.bookmarks.browse"),
                buttonMode: o.c.PRIMARY,
                trackEvent: "clickExploreCatalog"
            }))) : r.a.createElement(y, {
                marginTop: {
                    small: 4,
                    medium: 10,
                    large: 12
                }
            }, r.a.createElement(O.a, {
                blocks: t.blocks,
                layoutTheme: t.layout.theme,
                entityType: d.i.frontspace,
                classNameWrapper: "out",
                entityId: "bookmarks",
                transitionId: C
            })))
        };
        t.default = k
    }
}]);
