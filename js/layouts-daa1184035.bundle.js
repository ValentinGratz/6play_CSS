(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([[23], {
    d2i0: function (e, t, n) {
        "use strict";
        n.r(t);
        var a = n("ERkP"), o = n.n(a), c = n("zCf4"), i = n("r4sd");

        class r extends a.PureComponent {
            render() {
                const {location: e, route: t} = this.props;
                return o.a.createElement(c.c, {location: e}, Object(i.b)(t.routes))
            }
        }

        t.default = r
    }, dXFg: function (e, t, n) {
        "use strict";
        n.r(t);
        n("kYxP");
        var a = n("ERkP"), o = n.n(a), c = n("uDfI"), i = n("xikY"), r = n("Uhtm"), l = n("5+Jc"), s = n("Jvjd"),
            d = n("j/s1"), b = n("aWzz"), m = n.n(b), p = n("JfGh"), u = n("YEPb");

        function g() {
            return (g = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }).apply(this, arguments)
        }

        function O(e, t) {
            if (null == e) return {};
            var n, a, o = function (e, t) {
                if (null == e) return {};
                var n, a, o = {}, c = Object.keys(e);
                for (a = 0; a < c.length; a++) n = c[a], t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (a = 0; a < c.length; a++) n = c[a], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }

        const j = d.d.div.withConfig({componentId: "e5bz8b-0"})(["position:fixed;top:0;left:0;z-index:3;margin:auto;width:100%;transition:opacity 0.4s,transform 0.1s ease 0.1s;", ";&.hidden{transform:translateY(-", "px);}"], s.p.gt(l.e.small, Object(d.c)(["display:none;"])), p.a),
            f = o.a.forwardRef((e, t) => {
                let {branding: n} = e, a = O(e, ["branding"]);
                return o.a.createElement(j, g({}, Object(s.z)(a), {ref: t}), o.a.createElement(p.c, {branding: n}))
            });
        f.propTypes = {branding: m.a.shape(u.a)};
        var h = n("DYG5");
        const w = (e, t, n) => {
            const a = window.scrollY;
            return e(t, a, n, document.body.scrollHeight - document.body.offsetHeight), a
        }, v = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], n = null;
            const [o, c] = Object(a.useState)(null), i = {passive: !0}, r = Object(h.a)(() => {
                n = requestAnimationFrame(e)
            }, 150);
            return Object(a.useEffect)(() => (o && document.addEventListener("scroll", r, i), () => {
                n && cancelAnimationFrame(n), document.removeEventListener("scroll", r, i)
            }), [o, ...t]), [o, c]
        };
        var E = n("jfNW");
        const x = e => {
            let {branding: t} = e;
            const n = Object(c.d)(), a = e => n(Object(E.j)(e));
            let i = 0;
            const [r, l] = v(() => {
                i = w((e => (t, n, a, o) => {
                    if (t) {
                        const c = a > n && n < o || n <= 0;
                        t.style.opacity = c ? 1 : 0, t.classList[c ? "remove" : "add"]("hidden"), e(c)
                    }
                })(a), r, i)
            });
            return o.a.createElement(f, {ref: l, branding: t})
        };
        var y = n("hqLi"), k = n("3zA8"), C = n("W6XZ"), I = n("r6MD"), A = n("/Z5K"), H = n("eiga"), N = n("zv5m");
        const P = [],
            z = Object(d.d)(r.c).withConfig({componentId: "g2a1nk-0"})(["display:none;", ";"], s.p.gt(l.e.small, Object(d.c)(["display:inherit;"]))),
            B = e => {
                let {setHeaderHeight: t, inFlow: n, currentSectionCode: i, branding: l, isBannerVisible: s} = e;
                const d = Object(c.d)(), b = Object(I.a)(l, "title");
                let m = 0;
                const p = Object(c.e)(Object(N.b)(A.k.desktop)), u = Object(c.e)(Object(N.a)(A.k.desktop)),
                    g = Object(c.e)(Object(N.c)("desktop")), [O, j] = Object(a.useState)(!1), [f, h] = Object(a.useState)(!1);
                let x = g;
                const B = Object(I.a)(p, "[0].entries", P), [q, S] = g,
                    D = Object(C.a)(u, {id: q}), {actionList: L = []} = D || {}, _ = Object(a.useCallback)((e, n) => {
                        if (e) {
                            const e = s && !!b && n >= r.a;
                            j(e), h(n > 1), e && t(2 * r.a)
                        }
                    }, [s, b]), [M, T] = v(() => {
                        m = w(_, M, m)
                    }, [_]);
                return Object(a.useEffect)(() => {
                    (e => d(Object(E.k)(e)))(O)
                }, [O]), Object(k.a)(S) && !Object(y.a)(L) && (x = [q]), o.a.createElement(z, {
                    ref: T,
                    bannerTitle: b,
                    isBannerTitleVisible: O,
                    isNavbarOpaque: f,
                    inFlow: n,
                    items: B,
                    navigationGroups: p,
                    currentItemsIds: x,
                    currentSectionCode: i,
                    ActionComponent: H.a,
                    buildActionProps: H.c
                })
            };
        var q = n("lN5B"), S = n("ld4t"), D = n("rPqC"), L = n("lcx8"), _ = n("SeUj"), M = n("N4hH");
        const T = Object(d.d)(M.b).withConfig({componentId: "sc-2fgk77-0"})(["background-color:", ";height:calc(100% - ", "px + 3px);padding-bottom:0;", ";::before{background-color:", ";}"], Object(D.h)("colors.modal.background"), Object(s.l)("bottomBarHeight"), s.p.lte(l.e.xsmall, Object(d.c)(["padding:24px 0 0;"])), Object(D.h)("colors.modal.background")),
            Y = d.d.div.withConfig({componentId: "sc-2fgk77-1"})(["height:calc(100% - ", "px);overflow-y:scroll;"], Object(s.l)("bottomBarHeight")),
            F = d.d.div.withConfig({componentId: "sc-2fgk77-2"})(["padding:16px 0 16px;display:flex;justify-content:center;align-items:center;font-size:20px;font-weight:bold;color:", ";"], Object(D.h)("colors.modal.foreground")),
            R = e => {
                let {className: t, children: n, label: c, isOpen: i, bottomBarHeight: r, "data-testid": l} = e;
                return Object(a.useEffect)(() => (document.body.style.overflow = i ? "hidden" : "initial", () => {
                    document.body.style.overflow = "initial"
                }), [i]), o.a.createElement(D.d, {mode: D.c.DARK}, o.a.createElement(T, {
                    className: t,
                    bottomBarHeight: r
                }, c && o.a.createElement(F, null, c), o.a.createElement(Y, {bottomBarHeight: r}, n)))
            }, G = L.a.MADRID, J = d.d.div.withConfig({componentId: "sc-6rcq5r-0"})(["margin:0 ", "px;"], 16),
            U = d.d.div.withConfig({componentId: "sc-6rcq5r-1"})(["display:grid;grid-template-columns:repeat(", ",minmax(calc(100% / 2 - ", "px),1fr));grid-auto-rows:max-content;justify-items:center;grid-column-gap:", "px;padding:", "px 0 0;", ";"], 2, 16, 16, 16, Object(s.r)());
        var W = n("bceI");
        const K = d.d.div.withConfig({componentId: "sc-8s10k6-0"})(["position:relative;background-color:black;width:100%;min-width:100%;color:", ";display:flex;justify-content:center;align-items:center;text-decoration:none;margin-bottom:", "px;text-align:center;&.no-image{height:100px;}"], Object(D.h)("colors.modal.foreground"), 16),
            V = d.d.div.withConfig({componentId: "sc-8s10k6-1"})(["position:absolute;display:flex;width:100%;padding:", "px ", "px;align-items:center;justify-content:center;img{max-width:", "px;}.with-label{width:50%;}.with-picto{margin-left:8px;text-align:left;width:50%;}"], 16, 8, W.a);

        function X() {
            return (X = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }).apply(this, arguments)
        }

        const Z = K.withComponent(H.a), Q = d.d.span.withConfig({componentId: "ns11li-0"})(["", ";"], Object(s.j)(2)),
            $ = Object(d.d)(_.c).withConfig({componentId: "ns11li-1"})(["&:not(.", ").", "{padding-top:0;}"], _.a, _.b),
            ee = {light: q.b, dark: q.e};
        var te = e => {
            let {modalId: t, isOpen: n, bottomBarHeight: i, layoutTheme: r} = e;
            const l = Object(c.e)(Object(N.a)(A.k.webview)).find(e => e.id === t), s = Object(I.a)(l, "actionList", []),
                d = Object(I.a)(l, "label"), b = Object(I.a)(r, "backgroundColor", "transparent"),
                m = Object(a.useCallback)((e, t) => {
                    let {dark: n} = e;
                    return {placeholderBackground: ee[t](.1, n.TERTIARY)}
                }, [b]);
            return o.a.createElement(D.e, {buildTheme: m, scope: "block"}, o.a.createElement(R, {
                isOpen: n,
                label: d,
                labelArrow: !1,
                bottomBarHeight: i
            }, s && o.a.createElement(J, null, o.a.createElement(U, null, s.map(e => o.a.createElement(Z, X({
                className: e.image ? "" : "no-image",
                key: e.id
            }, Object(H.c)(e)), e.image && o.a.createElement($, X({}, e.image, {
                alt: e.image.caption,
                sizes: "calc(100vw /2)"
            })), o.a.createElement(V, null, e.picto && o.a.createElement(S.a, {
                className: e.label ? "with-label" : "",
                picto: e.picto,
                size: 24,
                marginless: !0
            }), e.label && o.a.createElement(L.b, {
                className: e.picto ? "with-picto" : "",
                component: "span",
                level: G
            }, o.a.createElement(Q, null, e.label)))))))))
        }, ne = n("EHrM"), ae = n("IFWP"), oe = n("A03L"), ce = n("3tgQ"), ie = n("nYau"), re = n("gZGY");
        const le = L.a.OTTAWA;
        var se = n("DEJH"), de = n("dJBH"), be = n("mSGg"), me = n("Xe1R");

        function pe() {
            return (pe = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }).apply(this, arguments)
        }

        const ue = Object(d.d)(re.a).withConfig({componentId: "qqq9zm-0"})(["margin-bottom:60px;"]),
            ge = Object(d.d)(R).withConfig({componentId: "qqq9zm-1"})(["padding:40px;padding-bottom:", "px;height:100%;nav{display:flex;flex-direction:column;}button{margin:0 auto;}ul{list-style:none;margin-bottom:50px;}", ""], i.a + 40, s.p.gt(l.e.small, Object(d.c)(["display:none;height:100%;"]))),
            Oe = Object(d.d)(ce.a).withConfig({componentId: "qqq9zm-2"})(["color:", ";text-decoration:none;display:flex;justify-content:space-between;align-items:center;padding:5px 0;width:100%;"], e => Object(D.h)("colors.text.primary", t => Object(q.m)(e.active ? 0 : .4, t))),
            je = e => {
                let {className: t} = e;
                const n = Object(c.e)(oe.j), a = Object(c.e)(N.e), [i, r] = Object(ie.a)(A.k.webview),
                    l = Object(ae.useTranslate)(), s = Object(se.b)(i, me.p.TYPE_ONE), d = n && !a;
                if (!d) return null;
                const b = s.map((e, t) => o.a.createElement("li", {key: e.id}, o.a.createElement(Oe, pe({
                    noHistory: !0,
                    active: t === r,
                    action: e.action,
                    as: H.a
                }, Object(H.c)(e)), o.a.createElement(L.b, {
                    level: le,
                    component: "span"
                }, l(e.label)), o.a.createElement(ne.c, {name: ne.a.ArrowRight, size: 28}))));
                return o.a.createElement(ge, {
                    className: t,
                    isOpen: d
                }, o.a.createElement(ue, null), o.a.createElement("nav", null, s.length > 0 && o.a.createElement("ul", null, b), Object(se.c)(i) ? o.a.createElement(de.a, {target: A.k.webview}) : o.a.createElement(be.a, null)))
            };
        var fe = e => {
            let {className: t, items: n, currentItemsIds: r, ActionComponent: l, buildActionProps: s, modalOpen: d, submenuModalCurrentId: b, isAccountMobileMenuOpen: m} = e;
            const [p] = r;
            let u = "";
            return d && (u = b), m && (u = "account"), (() => {
                const e = Object(c.d)();
                Object(a.useEffect)(() => (e(Object(E.h)(!0)), () => {
                    e(Object(E.h)(!1))
                }), [])
            })(), o.a.createElement(o.a.Fragment, null, d && o.a.createElement(te, {
                isOpen: d,
                modalId: b,
                className: t,
                bottomBarHeight: i.a
            }), o.a.createElement(je, null), o.a.createElement(i.b, {
                className: t,
                items: n,
                currentId: p,
                openModalId: u,
                isAccountMobileMenuOpen: m,
                ActionComponent: l,
                buildActionProps: s
            }))
        };
        const he = Object(d.d)(fe).withConfig({componentId: "sc-1gfpxx5-0"})(["position:fixed;bottom:0;z-index:", ";"], r.b),
            we = () => {
                const e = Object(c.e)(Object(N.a)(A.k.webview)), t = Object(c.e)(Object(N.c)(A.k.webview)),
                    n = Object(c.e)(N.e), a = Object(c.e)(N.d), i = Object(c.e)(oe.j);
                return o.a.createElement(he, {
                    items: e,
                    ActionComponent: H.a,
                    buildActionProps: H.c,
                    modalOpen: n,
                    submenuModalCurrentId: a,
                    isAccountMobileMenuOpen: i,
                    currentItemsIds: t
                })
            };
        var ve = n("UvSA");
        t.default = e => {
            let {inFlow: t, currentSectionCode: n, branding: s} = e;
            const [d, b] = Object(a.useState)(r.a), m = Object(c.e)(Object(ve.j)(l.e.small)),
                p = Object(c.e)(Object(N.i)(s, m));
            return o.a.createElement("header", {
                role: "banner",
                className: t ? "in-flow" : "out-flow",
                "data-height": d,
                "data-mob-height": i.a
            }, !m && o.a.createElement(B, {
                currentSectionCode: n,
                setHeaderHeight: b,
                inFlow: t,
                branding: s,
                isBannerVisible: p
            }), p ? o.a.createElement(x, {branding: s}) : null, m && o.a.createElement(we, null))
        }
    }
}]);
