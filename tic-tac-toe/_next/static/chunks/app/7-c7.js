"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[7], {
    7401: (e, t, r) => {
        r.d(t, {
            A: () => l
        });
        var i = r(2115);
        let n = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
          , o = function() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return t.filter( (e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t).join(" ").trim()
        };
        var s = {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        };
        let a = (0,
        i.forwardRef)( (e, t) => {
            let {color: r="currentColor", size: n=24, strokeWidth: a=2, absoluteStrokeWidth: l, className: u="", children: d, iconNode: h, ...c} = e;
            return (0,
            i.createElement)("svg", {
                ref: t,
                ...s,
                width: n,
                height: n,
                stroke: r,
                strokeWidth: l ? 24 * Number(a) / Number(n) : a,
                className: o("lucide", u),
                ...c
            }, [...h.map(e => {
                let[t,r] = e;
                return (0,
                i.createElement)(t, r)
            }
            ), ...Array.isArray(d) ? d : [d]])
        }
        )
          , l = (e, t) => {
            let r = (0,
            i.forwardRef)( (r, s) => {
                let {className: l, ...u} = r;
                return (0,
                i.createElement)(a, {
                    ref: s,
                    iconNode: t,
                    className: o("lucide-".concat(n(e)), l),
                    ...u
                })
            }
            );
            return r.displayName = "".concat(e),
            r
        }
    }
    ,
    3565: (e, t, r) => {
        r.d(t, {
            A: () => i
        });
        let i = (0,
        r(7401).A)("Circle", [["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }]])
    }
    ,
    9257: (e, t, r) => {
        r.d(t, {
            A: () => i
        });
        let i = (0,
        r(7401).A)("Cpu", [["rect", {
            width: "16",
            height: "16",
            x: "4",
            y: "4",
            rx: "2",
            key: "14l7u7"
        }], ["rect", {
            width: "6",
            height: "6",
            x: "9",
            y: "9",
            rx: "1",
            key: "5aljv4"
        }], ["path", {
            d: "M15 2v2",
            key: "13l42r"
        }], ["path", {
            d: "M15 20v2",
            key: "15mkzm"
        }], ["path", {
            d: "M2 15h2",
            key: "1gxd5l"
        }], ["path", {
            d: "M2 9h2",
            key: "1bbxkp"
        }], ["path", {
            d: "M20 15h2",
            key: "19e6y8"
        }], ["path", {
            d: "M20 9h2",
            key: "19tzq7"
        }], ["path", {
            d: "M9 2v2",
            key: "165o2o"
        }], ["path", {
            d: "M9 20v2",
            key: "i2bqo8"
        }]])
    }
    ,
    4947: (e, t, r) => {
        r.d(t, {
            A: () => i
        });
        let i = (0,
        r(7401).A)("History", [["path", {
            d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
            key: "1357e3"
        }], ["path", {
            d: "M3 3v5h5",
            key: "1xhq8a"
        }], ["path", {
            d: "M12 7v5l4 2",
            key: "1fdv2h"
        }]])
    }
    ,
    6527: (e, t, r) => {
        r.d(t, {
            A: () => i
        });
        let i = (0,
        r(7401).A)("Minus", [["path", {
            d: "M5 12h14",
            key: "1ays0h"
        }]])
    }
    ,
    2104: (e, t, r) => {
        r.d(t, {
            A: () => i
        });
        let i = (0,
        r(7401).A)("Moon", [["path", {
            d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",
            key: "a7tn18"
        }]])
    }
    ,
    1556: (e, t, r) => {
        r.d(t, {
            A: () => i
        });
        let i = (0,
        r(7401).A)("RotateCcw", [["path", {
            d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
            key: "1357e3"
        }], ["path", {
            d: "M3 3v5h5",
            key: "1xhq8a"
        }]])
    }
    ,
    8236: (e, t, r) => {
        r.d(t, {
            A: () => i
        });
        let i = (0,
        r(7401).A)("Settings", [["path", {
            d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
            key: "1qme2f"
        }], ["circle", {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }]])
    }
    ,
    7725: (e, t, r) => {
        r.d(t, {
            A: () => i
        });
        let i = (0,
        r(7401).A)("Sun", [["circle", {
            cx: "12",
            cy: "12",
            r: "4",
            key: "4exip2"
        }], ["path", {
            d: "M12 2v2",
            key: "tus03m"
        }], ["path", {
            d: "M12 20v2",
            key: "1lh1kg"
        }], ["path", {
            d: "m4.93 4.93 1.41 1.41",
            key: "149t6j"
        }], ["path", {
            d: "m17.66 17.66 1.41 1.41",
            key: "ptbguv"
        }], ["path", {
            d: "M2 12h2",
            key: "1t8f8n"
        }], ["path", {
            d: "M20 12h2",
            key: "1q8mjw"
        }], ["path", {
            d: "m6.34 17.66-1.41 1.41",
            key: "1m8zz5"
        }], ["path", {
            d: "m19.07 4.93-1.41 1.41",
            key: "1shlcs"
        }]])
    }
    ,
    7819: (e, t, r) => {
        r.d(t, {
            A: () => i
        });
        let i = (0,
        r(7401).A)("Trophy", [["path", {
            d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6",
            key: "17hqa7"
        }], ["path", {
            d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18",
            key: "lmptdp"
        }], ["path", {
            d: "M4 22h16",
            key: "57wxv0"
        }], ["path", {
            d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
            key: "1nw9bq"
        }], ["path", {
            d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
            key: "1np0yb"
        }], ["path", {
            d: "M18 2H6v7a6 6 0 0 0 12 0V2Z",
            key: "u46fv3"
        }]])
    }
    ,
    1466: (e, t, r) => {
        r.d(t, {
            A: () => i
        });
        let i = (0,
        r(7401).A)("User", [["path", {
            d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
            key: "975kel"
        }], ["circle", {
            cx: "12",
            cy: "7",
            r: "4",
            key: "17ys0d"
        }]])
    }
    ,
    767: (e, t, r) => {
        r.d(t, {
            A: () => i
        });
        let i = (0,
        r(7401).A)("X", [["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }], ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]])
    }
    ,
    3610: (e, t, r) => {
        r.d(t, {
            m: () => i
        });
        function i(e, t, {checkForDefaultPrevented: r=!0}={}) {
            return function(i) {
                if (e?.(i),
                !1 === r || !i.defaultPrevented)
                    return t?.(i)
            }
        }
    }
    ,
    8068: (e, t, r) => {
        r.d(t, {
            s: () => s,
            t: () => o
        });
        var i = r(2115);
        function n(e, t) {
            if ("function" == typeof e)
                return e(t);
            null != e && (e.current = t)
        }
        function o(...e) {
            return t => {
                let r = !1
                  , i = e.map(e => {
                    let i = n(e, t);
                    return r || "function" != typeof i || (r = !0),
                    i
                }
                );
                if (r)
                    return () => {
                        for (let t = 0; t < i.length; t++) {
                            let r = i[t];
                            "function" == typeof r ? r() : n(e[t], null)
                        }
                    }
            }
        }
        function s(...e) {
            return i.useCallback(o(...e), e)
        }
    }
    ,
    8166: (e, t, r) => {
        r.d(t, {
            A: () => o
        });
        var i = r(2115)
          , n = r(5155);
        function o(e, t=[]) {
            let r = []
              , s = () => {
                let t = r.map(e => i.createContext(e));
                return function(r) {
                    let n = r?.[e] || t;
                    return i.useMemo( () => ({
                        [`__scope${e}`]: {
                            ...r,
                            [e]: n
                        }
                    }), [r, n])
                }
            }
            ;
            return s.scopeName = e,
            [function(t, o) {
                let s = i.createContext(o)
                  , a = r.length;
                r = [...r, o];
                let l = t => {
                    let {scope: r, children: o, ...l} = t
                      , u = r?.[e]?.[a] || s
                      , d = i.useMemo( () => l, Object.values(l));
                    return (0,
                    n.jsx)(u.Provider, {
                        value: d,
                        children: o
                    })
                }
                ;
                return l.displayName = t + "Provider",
                [l, function(r, n) {
                    let l = n?.[e]?.[a] || s
                      , u = i.useContext(l);
                    if (u)
                        return u;
                    if (void 0 !== o)
                        return o;
                    throw Error(`\`${r}\` must be used within \`${t}\``)
                }
                ]
            }
            , function(...e) {
                let t = e[0];
                if (1 === e.length)
                    return t;
                let r = () => {
                    let r = e.map(e => ({
                        useScope: e(),
                        scopeName: e.scopeName
                    }));
                    return function(e) {
                        let n = r.reduce( (t, {useScope: r, scopeName: i}) => {
                            let n = r(e)[`__scope${i}`];
                            return {
                                ...t,
                                ...n
                            }
                        }
                        , {});
                        return i.useMemo( () => ({
                            [`__scope${t.scopeName}`]: n
                        }), [n])
                    }
                }
                ;
                return r.scopeName = t.scopeName,
                r
            }(s, ...t)]
        }
    }
    ,
    4256: (e, t, r) => {
        r.d(t, {
            jH: () => o
        });
        var i = r(2115);
        r(5155);
        var n = i.createContext(void 0);
        function o(e) {
            let t = i.useContext(n);
            return e || t || "ltr"
        }
    }
    ,
    6195: (e, t, r) => {
        r.d(t, {
            b: () => a
        });
        var i = r(2115)
          , n = r(3360)
          , o = r(5155)
          , s = i.forwardRef( (e, t) => (0,
        o.jsx)(n.sG.label, {
            ...e,
            ref: t,
            onMouseDown: t => {
                var r;
                t.target.closest("button, input, select, textarea") || (null === (r = e.onMouseDown) || void 0 === r || r.call(e, t),
                !t.defaultPrevented && t.detail > 1 && t.preventDefault())
            }
        }));
        s.displayName = "Label";
        var a = s
    }
    ,
    7028: (e, t, r) => {
        r.d(t, {
            C: () => s
        });
        var i = r(2115)
          , n = r(8068)
          , o = r(6611)
          , s = e => {
            let {present: t, children: r} = e
              , s = function(e) {
                var t, r;
                let[n,s] = i.useState()
                  , l = i.useRef({})
                  , u = i.useRef(e)
                  , d = i.useRef("none")
                  , [h,c] = (t = e ? "mounted" : "unmounted",
                r = {
                    mounted: {
                        UNMOUNT: "unmounted",
                        ANIMATION_OUT: "unmountSuspended"
                    },
                    unmountSuspended: {
                        MOUNT: "mounted",
                        ANIMATION_END: "unmounted"
                    },
                    unmounted: {
                        MOUNT: "mounted"
                    }
                },
                i.useReducer( (e, t) => {
                    let i = r[e][t];
                    return null != i ? i : e
                }
                , t));
                return i.useEffect( () => {
                    let e = a(l.current);
                    d.current = "mounted" === h ? e : "none"
                }
                , [h]),
                (0,
                o.N)( () => {
                    let t = l.current
                      , r = u.current;
                    if (r !== e) {
                        let i = d.current
                          , n = a(t);
                        e ? c("MOUNT") : "none" === n || (null == t ? void 0 : t.display) === "none" ? c("UNMOUNT") : r && i !== n ? c("ANIMATION_OUT") : c("UNMOUNT"),
                        u.current = e
                    }
                }
                , [e, c]),
                (0,
                o.N)( () => {
                    if (n) {
                        var e;
                        let t;
                        let r = null !== (e = n.ownerDocument.defaultView) && void 0 !== e ? e : window
                          , i = e => {
                            let i = a(l.current).includes(e.animationName);
                            if (e.target === n && i && (c("ANIMATION_END"),
                            !u.current)) {
                                let e = n.style.animationFillMode;
                                n.style.animationFillMode = "forwards",
                                t = r.setTimeout( () => {
                                    "forwards" === n.style.animationFillMode && (n.style.animationFillMode = e)
                                }
                                )
                            }
                        }
                          , o = e => {
                            e.target === n && (d.current = a(l.current))
                        }
                        ;
                        return n.addEventListener("animationstart", o),
                        n.addEventListener("animationcancel", i),
                        n.addEventListener("animationend", i),
                        () => {
                            r.clearTimeout(t),
                            n.removeEventListener("animationstart", o),
                            n.removeEventListener("animationcancel", i),
                            n.removeEventListener("animationend", i)
                        }
                    }
                    c("ANIMATION_END")
                }
                , [n, c]),
                {
                    isPresent: ["mounted", "unmountSuspended"].includes(h),
                    ref: i.useCallback(e => {
                        e && (l.current = getComputedStyle(e)),
                        s(e)
                    }
                    , [])
                }
            }(t)
              , l = "function" == typeof r ? r({
                present: s.isPresent
            }) : i.Children.only(r)
              , u = (0,
            n.s)(s.ref, function(e) {
                var t, r;
                let i = null === (t = Object.getOwnPropertyDescriptor(e.props, "ref")) || void 0 === t ? void 0 : t.get
                  , n = i && "isReactWarning"in i && i.isReactWarning;
                return n ? e.ref : (n = (i = null === (r = Object.getOwnPropertyDescriptor(e, "ref")) || void 0 === r ? void 0 : r.get) && "isReactWarning"in i && i.isReactWarning) ? e.props.ref : e.props.ref || e.ref
            }(l));
            return "function" == typeof r || s.isPresent ? i.cloneElement(l, {
                ref: u
            }) : null
        }
        ;
        function a(e) {
            return (null == e ? void 0 : e.animationName) || "none"
        }
        s.displayName = "Presence"
    }
    ,
    3360: (e, t, r) => {
        r.d(t, {
            sG: () => s
        });
        var i = r(2115);
        r(7650);
        var n = r(2317)
          , o = r(5155)
          , s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce( (e, t) => {
            let r = i.forwardRef( (e, r) => {
                let {asChild: i, ...s} = e
                  , a = i ? n.DX : t;
                return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0),
                (0,
                o.jsx)(a, {
                    ...s,
                    ref: r
                })
            }
            );
            return r.displayName = `Primitive.${t}`,
            {
                ...e,
                [t]: r
            }
        }
        , {})
    }
    ,
    2341: (e, t, r) => {
        r.d(t, {
            OK: () => Y,
            bL: () => X,
            VM: () => S,
            lr: () => V,
            LM: () => G
        });
        var i = r(2115)
          , n = r(3360)
          , o = r(7028)
          , s = r(8166)
          , a = r(8068)
          , l = r(1524)
          , u = r(4256)
          , d = r(6611)
          , h = r(3610)
          , c = r(5155)
          , p = "ScrollArea"
          , [m,f] = (0,
        s.A)(p)
          , [v,g] = m(p)
          , y = i.forwardRef( (e, t) => {
            let {__scopeScrollArea: r, type: o="hover", dir: s, scrollHideDelay: l=600, ...d} = e
              , [h,p] = i.useState(null)
              , [m,f] = i.useState(null)
              , [g,y] = i.useState(null)
              , [b,x] = i.useState(null)
              , [w,S] = i.useState(null)
              , [T,P] = i.useState(0)
              , [A,E] = i.useState(0)
              , [C,k] = i.useState(!1)
              , [M,R] = i.useState(!1)
              , D = (0,
            a.s)(t, e => p(e))
              , j = (0,
            u.jH)(s);
            return (0,
            c.jsx)(v, {
                scope: r,
                type: o,
                dir: j,
                scrollHideDelay: l,
                scrollArea: h,
                viewport: m,
                onViewportChange: f,
                content: g,
                onContentChange: y,
                scrollbarX: b,
                onScrollbarXChange: x,
                scrollbarXEnabled: C,
                onScrollbarXEnabledChange: k,
                scrollbarY: w,
                onScrollbarYChange: S,
                scrollbarYEnabled: M,
                onScrollbarYEnabledChange: R,
                onCornerWidthChange: P,
                onCornerHeightChange: E,
                children: (0,
                c.jsx)(n.sG.div, {
                    dir: j,
                    ...d,
                    ref: D,
                    style: {
                        position: "relative",
                        "--radix-scroll-area-corner-width": T + "px",
                        "--radix-scroll-area-corner-height": A + "px",
                        ...e.style
                    }
                })
            })
        }
        );
        y.displayName = p;
        var b = "ScrollAreaViewport"
          , x = i.forwardRef( (e, t) => {
            let {__scopeScrollArea: r, children: o, nonce: s, ...l} = e
              , u = g(b, r)
              , d = i.useRef(null)
              , h = (0,
            a.s)(t, d, u.onViewportChange);
            return (0,
            c.jsxs)(c.Fragment, {
                children: [(0,
                c.jsx)("style", {
                    dangerouslySetInnerHTML: {
                        __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
                    },
                    nonce: s
                }), (0,
                c.jsx)(n.sG.div, {
                    "data-radix-scroll-area-viewport": "",
                    ...l,
                    ref: h,
                    style: {
                        overflowX: u.scrollbarXEnabled ? "scroll" : "hidden",
                        overflowY: u.scrollbarYEnabled ? "scroll" : "hidden",
                        ...e.style
                    },
                    children: (0,
                    c.jsx)("div", {
                        ref: u.onContentChange,
                        style: {
                            minWidth: "100%",
                            display: "table"
                        },
                        children: o
                    })
                })]
            })
        }
        );
        x.displayName = b;
        var w = "ScrollAreaScrollbar"
          , S = i.forwardRef( (e, t) => {
            let {forceMount: r, ...n} = e
              , o = g(w, e.__scopeScrollArea)
              , {onScrollbarXEnabledChange: s, onScrollbarYEnabledChange: a} = o
              , l = "horizontal" === e.orientation;
            return i.useEffect( () => (l ? s(!0) : a(!0),
            () => {
                l ? s(!1) : a(!1)
            }
            ), [l, s, a]),
            "hover" === o.type ? (0,
            c.jsx)(T, {
                ...n,
                ref: t,
                forceMount: r
            }) : "scroll" === o.type ? (0,
            c.jsx)(P, {
                ...n,
                ref: t,
                forceMount: r
            }) : "auto" === o.type ? (0,
            c.jsx)(A, {
                ...n,
                ref: t,
                forceMount: r
            }) : "always" === o.type ? (0,
            c.jsx)(E, {
                ...n,
                ref: t
            }) : null
        }
        );
        S.displayName = w;
        var T = i.forwardRef( (e, t) => {
            let {forceMount: r, ...n} = e
              , s = g(w, e.__scopeScrollArea)
              , [a,l] = i.useState(!1);
            return i.useEffect( () => {
                let e = s.scrollArea
                  , t = 0;
                if (e) {
                    let r = () => {
                        window.clearTimeout(t),
                        l(!0)
                    }
                      , i = () => {
                        t = window.setTimeout( () => l(!1), s.scrollHideDelay)
                    }
                    ;
                    return e.addEventListener("pointerenter", r),
                    e.addEventListener("pointerleave", i),
                    () => {
                        window.clearTimeout(t),
                        e.removeEventListener("pointerenter", r),
                        e.removeEventListener("pointerleave", i)
                    }
                }
            }
            , [s.scrollArea, s.scrollHideDelay]),
            (0,
            c.jsx)(o.C, {
                present: r || a,
                children: (0,
                c.jsx)(A, {
                    "data-state": a ? "visible" : "hidden",
                    ...n,
                    ref: t
                })
            })
        }
        )
          , P = i.forwardRef( (e, t) => {
            var r, n;
            let {forceMount: s, ...a} = e
              , l = g(w, e.__scopeScrollArea)
              , u = "horizontal" === e.orientation
              , d = H( () => m("SCROLL_END"), 100)
              , [p,m] = (r = "hidden",
            n = {
                hidden: {
                    SCROLL: "scrolling"
                },
                scrolling: {
                    SCROLL_END: "idle",
                    POINTER_ENTER: "interacting"
                },
                interacting: {
                    SCROLL: "interacting",
                    POINTER_LEAVE: "idle"
                },
                idle: {
                    HIDE: "hidden",
                    SCROLL: "scrolling",
                    POINTER_ENTER: "interacting"
                }
            },
            i.useReducer( (e, t) => {
                let r = n[e][t];
                return null != r ? r : e
            }
            , r));
            return i.useEffect( () => {
                if ("idle" === p) {
                    let e = window.setTimeout( () => m("HIDE"), l.scrollHideDelay);
                    return () => window.clearTimeout(e)
                }
            }
            , [p, l.scrollHideDelay, m]),
            i.useEffect( () => {
                let e = l.viewport
                  , t = u ? "scrollLeft" : "scrollTop";
                if (e) {
                    let r = e[t]
                      , i = () => {
                        let i = e[t];
                        r !== i && (m("SCROLL"),
                        d()),
                        r = i
                    }
                    ;
                    return e.addEventListener("scroll", i),
                    () => e.removeEventListener("scroll", i)
                }
            }
            , [l.viewport, u, m, d]),
            (0,
            c.jsx)(o.C, {
                present: s || "hidden" !== p,
                children: (0,
                c.jsx)(E, {
                    "data-state": "hidden" === p ? "hidden" : "visible",
                    ...a,
                    ref: t,
                    onPointerEnter: (0,
                    h.m)(e.onPointerEnter, () => m("POINTER_ENTER")),
                    onPointerLeave: (0,
                    h.m)(e.onPointerLeave, () => m("POINTER_LEAVE"))
                })
            })
        }
        )
          , A = i.forwardRef( (e, t) => {
            let r = g(w, e.__scopeScrollArea)
              , {forceMount: n, ...s} = e
              , [a,l] = i.useState(!1)
              , u = "horizontal" === e.orientation
              , d = H( () => {
                if (r.viewport) {
                    let e = r.viewport.offsetWidth < r.viewport.scrollWidth
                      , t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                    l(u ? e : t)
                }
            }
            , 10);
            return _(r.viewport, d),
            _(r.content, d),
            (0,
            c.jsx)(o.C, {
                present: n || a,
                children: (0,
                c.jsx)(E, {
                    "data-state": a ? "visible" : "hidden",
                    ...s,
                    ref: t
                })
            })
        }
        )
          , E = i.forwardRef( (e, t) => {
            let {orientation: r="vertical", ...n} = e
              , o = g(w, e.__scopeScrollArea)
              , s = i.useRef(null)
              , a = i.useRef(0)
              , [l,u] = i.useState({
                content: 0,
                viewport: 0,
                scrollbar: {
                    size: 0,
                    paddingStart: 0,
                    paddingEnd: 0
                }
            })
              , d = B(l.viewport, l.content)
              , h = {
                ...n,
                sizes: l,
                onSizesChange: u,
                hasThumb: !!(d > 0 && d < 1),
                onThumbChange: e => s.current = e,
                onThumbPointerUp: () => a.current = 0,
                onThumbPointerDown: e => a.current = e
            };
            function p(e, t) {
                return function(e, t, r) {
                    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "ltr"
                      , n = z(r)
                      , o = t || n / 2
                      , s = r.scrollbar.paddingStart + o
                      , a = r.scrollbar.size - r.scrollbar.paddingEnd - (n - o)
                      , l = r.content - r.viewport;
                    return $([s, a], "ltr" === i ? [0, l] : [-1 * l, 0])(e)
                }(e, a.current, l, t)
            }
            return "horizontal" === r ? (0,
            c.jsx)(C, {
                ...h,
                ref: t,
                onThumbPositionChange: () => {
                    if (o.viewport && s.current) {
                        let e = U(o.viewport.scrollLeft, l, o.dir);
                        s.current.style.transform = "translate3d(".concat(e, "px, 0, 0)")
                    }
                }
                ,
                onWheelScroll: e => {
                    o.viewport && (o.viewport.scrollLeft = e)
                }
                ,
                onDragScroll: e => {
                    o.viewport && (o.viewport.scrollLeft = p(e, o.dir))
                }
            }) : "vertical" === r ? (0,
            c.jsx)(k, {
                ...h,
                ref: t,
                onThumbPositionChange: () => {
                    if (o.viewport && s.current) {
                        let e = U(o.viewport.scrollTop, l);
                        s.current.style.transform = "translate3d(0, ".concat(e, "px, 0)")
                    }
                }
                ,
                onWheelScroll: e => {
                    o.viewport && (o.viewport.scrollTop = e)
                }
                ,
                onDragScroll: e => {
                    o.viewport && (o.viewport.scrollTop = p(e))
                }
            }) : null
        }
        )
          , C = i.forwardRef( (e, t) => {
            let {sizes: r, onSizesChange: n, ...o} = e
              , s = g(w, e.__scopeScrollArea)
              , [l,u] = i.useState()
              , d = i.useRef(null)
              , h = (0,
            a.s)(t, d, s.onScrollbarXChange);
            return i.useEffect( () => {
                d.current && u(getComputedStyle(d.current))
            }
            , [d]),
            (0,
            c.jsx)(D, {
                "data-orientation": "horizontal",
                ...o,
                ref: h,
                sizes: r,
                style: {
                    bottom: 0,
                    left: "rtl" === s.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                    right: "ltr" === s.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                    "--radix-scroll-area-thumb-width": z(r) + "px",
                    ...e.style
                },
                onThumbPointerDown: t => e.onThumbPointerDown(t.x),
                onDragScroll: t => e.onDragScroll(t.x),
                onWheelScroll: (t, r) => {
                    if (s.viewport) {
                        let i = s.viewport.scrollLeft + t.deltaX;
                        e.onWheelScroll(i),
                        function(e, t) {
                            return e > 0 && e < t
                        }(i, r) && t.preventDefault()
                    }
                }
                ,
                onResize: () => {
                    d.current && s.viewport && l && n({
                        content: s.viewport.scrollWidth,
                        viewport: s.viewport.offsetWidth,
                        scrollbar: {
                            size: d.current.clientWidth,
                            paddingStart: O(l.paddingLeft),
                            paddingEnd: O(l.paddingRight)
                        }
                    })
                }
            })
        }
        )
          , k = i.forwardRef( (e, t) => {
            let {sizes: r, onSizesChange: n, ...o} = e
              , s = g(w, e.__scopeScrollArea)
              , [l,u] = i.useState()
              , d = i.useRef(null)
              , h = (0,
            a.s)(t, d, s.onScrollbarYChange);
            return i.useEffect( () => {
                d.current && u(getComputedStyle(d.current))
            }
            , [d]),
            (0,
            c.jsx)(D, {
                "data-orientation": "vertical",
                ...o,
                ref: h,
                sizes: r,
                style: {
                    top: 0,
                    right: "ltr" === s.dir ? 0 : void 0,
                    left: "rtl" === s.dir ? 0 : void 0,
                    bottom: "var(--radix-scroll-area-corner-height)",
                    "--radix-scroll-area-thumb-height": z(r) + "px",
                    ...e.style
                },
                onThumbPointerDown: t => e.onThumbPointerDown(t.y),
                onDragScroll: t => e.onDragScroll(t.y),
                onWheelScroll: (t, r) => {
                    if (s.viewport) {
                        let i = s.viewport.scrollTop + t.deltaY;
                        e.onWheelScroll(i),
                        function(e, t) {
                            return e > 0 && e < t
                        }(i, r) && t.preventDefault()
                    }
                }
                ,
                onResize: () => {
                    d.current && s.viewport && l && n({
                        content: s.viewport.scrollHeight,
                        viewport: s.viewport.offsetHeight,
                        scrollbar: {
                            size: d.current.clientHeight,
                            paddingStart: O(l.paddingTop),
                            paddingEnd: O(l.paddingBottom)
                        }
                    })
                }
            })
        }
        )
          , [M,R] = m(w)
          , D = i.forwardRef( (e, t) => {
            let {__scopeScrollArea: r, sizes: o, hasThumb: s, onThumbChange: u, onThumbPointerUp: d, onThumbPointerDown: p, onThumbPositionChange: m, onDragScroll: f, onWheelScroll: v, onResize: y, ...b} = e
              , x = g(w, r)
              , [S,T] = i.useState(null)
              , P = (0,
            a.s)(t, e => T(e))
              , A = i.useRef(null)
              , E = i.useRef("")
              , C = x.viewport
              , k = o.content - o.viewport
              , R = (0,
            l.c)(v)
              , D = (0,
            l.c)(m)
              , j = H(y, 10);
            function V(e) {
                A.current && f({
                    x: e.clientX - A.current.left,
                    y: e.clientY - A.current.top
                })
            }
            return i.useEffect( () => {
                let e = e => {
                    let t = e.target;
                    (null == S ? void 0 : S.contains(t)) && R(e, k)
                }
                ;
                return document.addEventListener("wheel", e, {
                    passive: !1
                }),
                () => document.removeEventListener("wheel", e, {
                    passive: !1
                })
            }
            , [C, S, k, R]),
            i.useEffect(D, [o, D]),
            _(S, j),
            _(x.content, j),
            (0,
            c.jsx)(M, {
                scope: r,
                scrollbar: S,
                hasThumb: s,
                onThumbChange: (0,
                l.c)(u),
                onThumbPointerUp: (0,
                l.c)(d),
                onThumbPositionChange: D,
                onThumbPointerDown: (0,
                l.c)(p),
                children: (0,
                c.jsx)(n.sG.div, {
                    ...b,
                    ref: P,
                    style: {
                        position: "absolute",
                        ...b.style
                    },
                    onPointerDown: (0,
                    h.m)(e.onPointerDown, e => {
                        0 === e.button && (e.target.setPointerCapture(e.pointerId),
                        A.current = S.getBoundingClientRect(),
                        E.current = document.body.style.webkitUserSelect,
                        document.body.style.webkitUserSelect = "none",
                        x.viewport && (x.viewport.style.scrollBehavior = "auto"),
                        V(e))
                    }
                    ),
                    onPointerMove: (0,
                    h.m)(e.onPointerMove, V),
                    onPointerUp: (0,
                    h.m)(e.onPointerUp, e => {
                        let t = e.target;
                        t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId),
                        document.body.style.webkitUserSelect = E.current,
                        x.viewport && (x.viewport.style.scrollBehavior = ""),
                        A.current = null
                    }
                    )
                })
            })
        }
        )
          , j = "ScrollAreaThumb"
          , V = i.forwardRef( (e, t) => {
            let {forceMount: r, ...i} = e
              , n = R(j, e.__scopeScrollArea);
            return (0,
            c.jsx)(o.C, {
                present: r || n.hasThumb,
                children: (0,
                c.jsx)(L, {
                    ref: t,
                    ...i
                })
            })
        }
        )
          , L = i.forwardRef( (e, t) => {
            let {__scopeScrollArea: r, style: o, ...s} = e
              , l = g(j, r)
              , u = R(j, r)
              , {onThumbPositionChange: d} = u
              , p = (0,
            a.s)(t, e => u.onThumbChange(e))
              , m = i.useRef(void 0)
              , f = H( () => {
                m.current && (m.current(),
                m.current = void 0)
            }
            , 100);
            return i.useEffect( () => {
                let e = l.viewport;
                if (e) {
                    let t = () => {
                        if (f(),
                        !m.current) {
                            let t = W(e, d);
                            m.current = t,
                            d()
                        }
                    }
                    ;
                    return d(),
                    e.addEventListener("scroll", t),
                    () => e.removeEventListener("scroll", t)
                }
            }
            , [l.viewport, f, d]),
            (0,
            c.jsx)(n.sG.div, {
                "data-state": u.hasThumb ? "visible" : "hidden",
                ...s,
                ref: p,
                style: {
                    width: "var(--radix-scroll-area-thumb-width)",
                    height: "var(--radix-scroll-area-thumb-height)",
                    ...o
                },
                onPointerDownCapture: (0,
                h.m)(e.onPointerDownCapture, e => {
                    let t = e.target.getBoundingClientRect()
                      , r = e.clientX - t.left
                      , i = e.clientY - t.top;
                    u.onThumbPointerDown({
                        x: r,
                        y: i
                    })
                }
                ),
                onPointerUp: (0,
                h.m)(e.onPointerUp, u.onThumbPointerUp)
            })
        }
        );
        V.displayName = j;
        var F = "ScrollAreaCorner"
          , N = i.forwardRef( (e, t) => {
            let r = g(F, e.__scopeScrollArea)
              , i = !!(r.scrollbarX && r.scrollbarY);
            return "scroll" !== r.type && i ? (0,
            c.jsx)(I, {
                ...e,
                ref: t
            }) : null
        }
        );
        N.displayName = F;
        var I = i.forwardRef( (e, t) => {
            let {__scopeScrollArea: r, ...o} = e
              , s = g(F, r)
              , [a,l] = i.useState(0)
              , [u,d] = i.useState(0)
              , h = !!(a && u);
            return _(s.scrollbarX, () => {
                var e;
                let t = (null === (e = s.scrollbarX) || void 0 === e ? void 0 : e.offsetHeight) || 0;
                s.onCornerHeightChange(t),
                d(t)
            }
            ),
            _(s.scrollbarY, () => {
                var e;
                let t = (null === (e = s.scrollbarY) || void 0 === e ? void 0 : e.offsetWidth) || 0;
                s.onCornerWidthChange(t),
                l(t)
            }
            ),
            h ? (0,
            c.jsx)(n.sG.div, {
                ...o,
                ref: t,
                style: {
                    width: a,
                    height: u,
                    position: "absolute",
                    right: "ltr" === s.dir ? 0 : void 0,
                    left: "rtl" === s.dir ? 0 : void 0,
                    bottom: 0,
                    ...e.style
                }
            }) : null
        }
        );
        function O(e) {
            return e ? parseInt(e, 10) : 0
        }
        function B(e, t) {
            let r = e / t;
            return isNaN(r) ? 0 : r
        }
        function z(e) {
            let t = B(e.viewport, e.content)
              , r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd;
            return Math.max((e.scrollbar.size - r) * t, 18)
        }
        function U(e, t) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ltr"
              , i = z(t)
              , n = t.scrollbar.paddingStart + t.scrollbar.paddingEnd
              , o = t.scrollbar.size - n
              , s = t.content - t.viewport
              , a = function(e, [t,r]) {
                return Math.min(r, Math.max(t, e))
            }(e, "ltr" === r ? [0, s] : [-1 * s, 0]);
            return $([0, s], [0, o - i])(a)
        }
        function $(e, t) {
            return r => {
                if (e[0] === e[1] || t[0] === t[1])
                    return t[0];
                let i = (t[1] - t[0]) / (e[1] - e[0]);
                return t[0] + i * (r - e[0])
            }
        }
        var W = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}
              , r = {
                left: e.scrollLeft,
                top: e.scrollTop
            }
              , i = 0;
            return !function n() {
                let o = {
                    left: e.scrollLeft,
                    top: e.scrollTop
                }
                  , s = r.left !== o.left
                  , a = r.top !== o.top;
                (s || a) && t(),
                r = o,
                i = window.requestAnimationFrame(n)
            }(),
            () => window.cancelAnimationFrame(i)
        };
        function H(e, t) {
            let r = (0,
            l.c)(e)
              , n = i.useRef(0);
            return i.useEffect( () => () => window.clearTimeout(n.current), []),
            i.useCallback( () => {
                window.clearTimeout(n.current),
                n.current = window.setTimeout(r, t)
            }
            , [r, t])
        }
        function _(e, t) {
            let r = (0,
            l.c)(t);
            (0,
            d.N)( () => {
                let t = 0;
                if (e) {
                    let i = new ResizeObserver( () => {
                        cancelAnimationFrame(t),
                        t = window.requestAnimationFrame(r)
                    }
                    );
                    return i.observe(e),
                    () => {
                        window.cancelAnimationFrame(t),
                        i.unobserve(e)
                    }
                }
            }
            , [e, r])
        }
        var X = y
          , G = x
          , Y = N
    }
    ,
    2317: (e, t, r) => {
        r.d(t, {
            DX: () => s
        });
        var i = r(2115)
          , n = r(8068)
          , o = r(5155)
          , s = i.forwardRef( (e, t) => {
            let {children: r, ...n} = e
              , s = i.Children.toArray(r)
              , l = s.find(u);
            if (l) {
                let e = l.props.children
                  , r = s.map(t => t !== l ? t : i.Children.count(e) > 1 ? i.Children.only(null) : i.isValidElement(e) ? e.props.children : null);
                return (0,
                o.jsx)(a, {
                    ...n,
                    ref: t,
                    children: i.isValidElement(e) ? i.cloneElement(e, void 0, r) : null
                })
            }
            return (0,
            o.jsx)(a, {
                ...n,
                ref: t,
                children: r
            })
        }
        );
        s.displayName = "Slot";
        var a = i.forwardRef( (e, t) => {
            let {children: r, ...o} = e;
            if (i.isValidElement(r)) {
                let e = function(e) {
                    let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get
                      , r = t && "isReactWarning"in t && t.isReactWarning;
                    return r ? e.ref : (r = (t = Object.getOwnPropertyDescriptor(e, "ref")?.get) && "isReactWarning"in t && t.isReactWarning) ? e.props.ref : e.props.ref || e.ref
                }(r)
                  , s = function(e, t) {
                    let r = {
                        ...t
                    };
                    for (let i in t) {
                        let n = e[i]
                          , o = t[i];
                        /^on[A-Z]/.test(i) ? n && o ? r[i] = (...e) => {
                            o(...e),
                            n(...e)
                        }
                        : n && (r[i] = n) : "style" === i ? r[i] = {
                            ...n,
                            ...o
                        } : "className" === i && (r[i] = [n, o].filter(Boolean).join(" "))
                    }
                    return {
                        ...e,
                        ...r
                    }
                }(o, r.props);
                return r.type !== i.Fragment && (s.ref = t ? (0,
                n.t)(t, e) : e),
                i.cloneElement(r, s)
            }
            return i.Children.count(r) > 1 ? i.Children.only(null) : null
        }
        );
        a.displayName = "SlotClone";
        var l = ({children: e}) => (0,
        o.jsx)(o.Fragment, {
            children: e
        });
        function u(e) {
            return i.isValidElement(e) && e.type === l
        }
    }
    ,
    9558: (e, t, r) => {
        r.d(t, {
            bL: () => w,
            zi: () => S
        });
        var i = r(2115)
          , n = r(3610)
          , o = r(8068)
          , s = r(8166)
          , a = r(1488)
          , l = r(6611)
          , u = r(3360)
          , d = r(5155)
          , h = "Switch"
          , [c,p] = (0,
        s.A)(h)
          , [m,f] = c(h)
          , v = i.forwardRef( (e, t) => {
            let {__scopeSwitch: r, name: s, checked: l, defaultChecked: h, required: c, disabled: p, value: f="on", onCheckedChange: v, form: g, ...y} = e
              , [w,S] = i.useState(null)
              , T = (0,
            o.s)(t, e => S(e))
              , P = i.useRef(!1)
              , A = !w || g || !!w.closest("form")
              , [E=!1,C] = (0,
            a.i)({
                prop: l,
                defaultProp: h,
                onChange: v
            });
            return (0,
            d.jsxs)(m, {
                scope: r,
                checked: E,
                disabled: p,
                children: [(0,
                d.jsx)(u.sG.button, {
                    type: "button",
                    role: "switch",
                    "aria-checked": E,
                    "aria-required": c,
                    "data-state": x(E),
                    "data-disabled": p ? "" : void 0,
                    disabled: p,
                    value: f,
                    ...y,
                    ref: T,
                    onClick: (0,
                    n.m)(e.onClick, e => {
                        C(e => !e),
                        A && (P.current = e.isPropagationStopped(),
                        P.current || e.stopPropagation())
                    }
                    )
                }), A && (0,
                d.jsx)(b, {
                    control: w,
                    bubbles: !P.current,
                    name: s,
                    value: f,
                    checked: E,
                    required: c,
                    disabled: p,
                    form: g,
                    style: {
                        transform: "translateX(-100%)"
                    }
                })]
            })
        }
        );
        v.displayName = h;
        var g = "SwitchThumb"
          , y = i.forwardRef( (e, t) => {
            let {__scopeSwitch: r, ...i} = e
              , n = f(g, r);
            return (0,
            d.jsx)(u.sG.span, {
                "data-state": x(n.checked),
                "data-disabled": n.disabled ? "" : void 0,
                ...i,
                ref: t
            })
        }
        );
        y.displayName = g;
        var b = e => {
            let {control: t, checked: r, bubbles: n=!0, ...o} = e
              , s = i.useRef(null)
              , a = function(e) {
                let t = i.useRef({
                    value: e,
                    previous: e
                });
                return i.useMemo( () => (t.current.value !== e && (t.current.previous = t.current.value,
                t.current.value = e),
                t.current.previous), [e])
            }(r)
              , u = function(e) {
                let[t,r] = i.useState(void 0);
                return (0,
                l.N)( () => {
                    if (e) {
                        r({
                            width: e.offsetWidth,
                            height: e.offsetHeight
                        });
                        let t = new ResizeObserver(t => {
                            let i, n;
                            if (!Array.isArray(t) || !t.length)
                                return;
                            let o = t[0];
                            if ("borderBoxSize"in o) {
                                let e = o.borderBoxSize
                                  , t = Array.isArray(e) ? e[0] : e;
                                i = t.inlineSize,
                                n = t.blockSize
                            } else
                                i = e.offsetWidth,
                                n = e.offsetHeight;
                            r({
                                width: i,
                                height: n
                            })
                        }
                        );
                        return t.observe(e, {
                            box: "border-box"
                        }),
                        () => t.unobserve(e)
                    }
                    r(void 0)
                }
                , [e]),
                t
            }(t);
            return i.useEffect( () => {
                let e = s.current
                  , t = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked").set;
                if (a !== r && t) {
                    let i = new Event("click",{
                        bubbles: n
                    });
                    t.call(e, r),
                    e.dispatchEvent(i)
                }
            }
            , [a, r, n]),
            (0,
            d.jsx)("input", {
                type: "checkbox",
                "aria-hidden": !0,
                defaultChecked: r,
                ...o,
                tabIndex: -1,
                ref: s,
                style: {
                    ...e.style,
                    ...u,
                    position: "absolute",
                    pointerEvents: "none",
                    opacity: 0,
                    margin: 0
                }
            })
        }
        ;
        function x(e) {
            return e ? "checked" : "unchecked"
        }
        var w = v
          , S = y
    }
    ,
    1965: (e, t, r) => {
        r.d(t, {
            UC: () => J,
            B8: () => Z,
            bL: () => q,
            l9: () => Q
        });
        var i = r(2115)
          , n = r.t(i, 2)
          , o = r(3610)
          , s = r(8166)
          , a = r(8068)
          , l = r(2317)
          , u = r(5155)
          , d = r(6611)
          , h = n["useId".toString()] || ( () => void 0)
          , c = 0;
        function p(e) {
            let[t,r] = i.useState(h());
            return (0,
            d.N)( () => {
                e || r(e => e ?? String(c++))
            }
            , [e]),
            e || (t ? `radix-${t}` : "")
        }
        var m = r(3360)
          , f = r(1524)
          , v = r(1488)
          , g = r(4256)
          , y = "rovingFocusGroup.onEntryFocus"
          , b = {
            bubbles: !1,
            cancelable: !0
        }
          , x = "RovingFocusGroup"
          , [w,S,T] = function(e) {
            let t = e + "CollectionProvider"
              , [r,n] = (0,
            s.A)(t)
              , [o,d] = r(t, {
                collectionRef: {
                    current: null
                },
                itemMap: new Map
            })
              , h = e => {
                let {scope: t, children: r} = e
                  , n = i.useRef(null)
                  , s = i.useRef(new Map).current;
                return (0,
                u.jsx)(o, {
                    scope: t,
                    itemMap: s,
                    collectionRef: n,
                    children: r
                })
            }
            ;
            h.displayName = t;
            let c = e + "CollectionSlot"
              , p = i.forwardRef( (e, t) => {
                let {scope: r, children: i} = e
                  , n = d(c, r)
                  , o = (0,
                a.s)(t, n.collectionRef);
                return (0,
                u.jsx)(l.DX, {
                    ref: o,
                    children: i
                })
            }
            );
            p.displayName = c;
            let m = e + "CollectionItemSlot"
              , f = "data-radix-collection-item"
              , v = i.forwardRef( (e, t) => {
                let {scope: r, children: n, ...o} = e
                  , s = i.useRef(null)
                  , h = (0,
                a.s)(t, s)
                  , c = d(m, r);
                return i.useEffect( () => (c.itemMap.set(s, {
                    ref: s,
                    ...o
                }),
                () => void c.itemMap.delete(s))),
                (0,
                u.jsx)(l.DX, {
                    [f]: "",
                    ref: h,
                    children: n
                })
            }
            );
            return v.displayName = m,
            [{
                Provider: h,
                Slot: p,
                ItemSlot: v
            }, function(t) {
                let r = d(e + "CollectionConsumer", t);
                return i.useCallback( () => {
                    let e = r.collectionRef.current;
                    if (!e)
                        return [];
                    let t = Array.from(e.querySelectorAll("[".concat(f, "]")));
                    return Array.from(r.itemMap.values()).sort( (e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current))
                }
                , [r.collectionRef, r.itemMap])
            }
            , n]
        }(x)
          , [P,A] = (0,
        s.A)(x, [T])
          , [E,C] = P(x)
          , k = i.forwardRef( (e, t) => (0,
        u.jsx)(w.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: (0,
            u.jsx)(w.Slot, {
                scope: e.__scopeRovingFocusGroup,
                children: (0,
                u.jsx)(M, {
                    ...e,
                    ref: t
                })
            })
        }));
        k.displayName = x;
        var M = i.forwardRef( (e, t) => {
            let {__scopeRovingFocusGroup: r, orientation: n, loop: s=!1, dir: l, currentTabStopId: d, defaultCurrentTabStopId: h, onCurrentTabStopIdChange: c, onEntryFocus: p, preventScrollOnEntryFocus: x=!1, ...w} = e
              , T = i.useRef(null)
              , P = (0,
            a.s)(t, T)
              , A = (0,
            g.jH)(l)
              , [C=null,k] = (0,
            v.i)({
                prop: d,
                defaultProp: h,
                onChange: c
            })
              , [M,R] = i.useState(!1)
              , D = (0,
            f.c)(p)
              , j = S(r)
              , L = i.useRef(!1)
              , [F,N] = i.useState(0);
            return i.useEffect( () => {
                let e = T.current;
                if (e)
                    return e.addEventListener(y, D),
                    () => e.removeEventListener(y, D)
            }
            , [D]),
            (0,
            u.jsx)(E, {
                scope: r,
                orientation: n,
                dir: A,
                loop: s,
                currentTabStopId: C,
                onItemFocus: i.useCallback(e => k(e), [k]),
                onItemShiftTab: i.useCallback( () => R(!0), []),
                onFocusableItemAdd: i.useCallback( () => N(e => e + 1), []),
                onFocusableItemRemove: i.useCallback( () => N(e => e - 1), []),
                children: (0,
                u.jsx)(m.sG.div, {
                    tabIndex: M || 0 === F ? -1 : 0,
                    "data-orientation": n,
                    ...w,
                    ref: P,
                    style: {
                        outline: "none",
                        ...e.style
                    },
                    onMouseDown: (0,
                    o.m)(e.onMouseDown, () => {
                        L.current = !0
                    }
                    ),
                    onFocus: (0,
                    o.m)(e.onFocus, e => {
                        let t = !L.current;
                        if (e.target === e.currentTarget && t && !M) {
                            let t = new CustomEvent(y,b);
                            if (e.currentTarget.dispatchEvent(t),
                            !t.defaultPrevented) {
                                let e = j().filter(e => e.focusable);
                                V([e.find(e => e.active), e.find(e => e.id === C), ...e].filter(Boolean).map(e => e.ref.current), x)
                            }
                        }
                        L.current = !1
                    }
                    ),
                    onBlur: (0,
                    o.m)(e.onBlur, () => R(!1))
                })
            })
        }
        )
          , R = "RovingFocusGroupItem"
          , D = i.forwardRef( (e, t) => {
            let {__scopeRovingFocusGroup: r, focusable: n=!0, active: s=!1, tabStopId: a, ...l} = e
              , d = p()
              , h = a || d
              , c = C(R, r)
              , f = c.currentTabStopId === h
              , v = S(r)
              , {onFocusableItemAdd: g, onFocusableItemRemove: y} = c;
            return i.useEffect( () => {
                if (n)
                    return g(),
                    () => y()
            }
            , [n, g, y]),
            (0,
            u.jsx)(w.ItemSlot, {
                scope: r,
                id: h,
                focusable: n,
                active: s,
                children: (0,
                u.jsx)(m.sG.span, {
                    tabIndex: f ? 0 : -1,
                    "data-orientation": c.orientation,
                    ...l,
                    ref: t,
                    onMouseDown: (0,
                    o.m)(e.onMouseDown, e => {
                        n ? c.onItemFocus(h) : e.preventDefault()
                    }
                    ),
                    onFocus: (0,
                    o.m)(e.onFocus, () => c.onItemFocus(h)),
                    onKeyDown: (0,
                    o.m)(e.onKeyDown, e => {
                        if ("Tab" === e.key && e.shiftKey) {
                            c.onItemShiftTab();
                            return
                        }
                        if (e.target !== e.currentTarget)
                            return;
                        let t = function(e, t, r) {
                            var i;
                            let n = (i = e.key,
                            "rtl" !== r ? i : "ArrowLeft" === i ? "ArrowRight" : "ArrowRight" === i ? "ArrowLeft" : i);
                            if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(n)) && !("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(n)))
                                return j[n]
                        }(e, c.orientation, c.dir);
                        if (void 0 !== t) {
                            if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey)
                                return;
                            e.preventDefault();
                            let r = v().filter(e => e.focusable).map(e => e.ref.current);
                            if ("last" === t)
                                r.reverse();
                            else if ("prev" === t || "next" === t) {
                                "prev" === t && r.reverse();
                                let i = r.indexOf(e.currentTarget);
                                r = c.loop ? function(e, t) {
                                    return e.map( (r, i) => e[(t + i) % e.length])
                                }(r, i + 1) : r.slice(i + 1)
                            }
                            setTimeout( () => V(r))
                        }
                    }
                    )
                })
            })
        }
        );
        D.displayName = R;
        var j = {
            ArrowLeft: "prev",
            ArrowUp: "prev",
            ArrowRight: "next",
            ArrowDown: "next",
            PageUp: "first",
            Home: "first",
            PageDown: "last",
            End: "last"
        };
        function V(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , r = document.activeElement;
            for (let i of e)
                if (i === r || (i.focus({
                    preventScroll: t
                }),
                document.activeElement !== r))
                    return
        }
        var L = r(7028)
          , F = "Tabs"
          , [N,I] = (0,
        s.A)(F, [A])
          , O = A()
          , [B,z] = N(F)
          , U = i.forwardRef( (e, t) => {
            let {__scopeTabs: r, value: i, onValueChange: n, defaultValue: o, orientation: s="horizontal", dir: a, activationMode: l="automatic", ...d} = e
              , h = (0,
            g.jH)(a)
              , [c,f] = (0,
            v.i)({
                prop: i,
                onChange: n,
                defaultProp: o
            });
            return (0,
            u.jsx)(B, {
                scope: r,
                baseId: p(),
                value: c,
                onValueChange: f,
                orientation: s,
                dir: h,
                activationMode: l,
                children: (0,
                u.jsx)(m.sG.div, {
                    dir: h,
                    "data-orientation": s,
                    ...d,
                    ref: t
                })
            })
        }
        );
        U.displayName = F;
        var $ = "TabsList"
          , W = i.forwardRef( (e, t) => {
            let {__scopeTabs: r, loop: i=!0, ...n} = e
              , o = z($, r)
              , s = O(r);
            return (0,
            u.jsx)(k, {
                asChild: !0,
                ...s,
                orientation: o.orientation,
                dir: o.dir,
                loop: i,
                children: (0,
                u.jsx)(m.sG.div, {
                    role: "tablist",
                    "aria-orientation": o.orientation,
                    ...n,
                    ref: t
                })
            })
        }
        );
        W.displayName = $;
        var H = "TabsTrigger"
          , _ = i.forwardRef( (e, t) => {
            let {__scopeTabs: r, value: i, disabled: n=!1, ...s} = e
              , a = z(H, r)
              , l = O(r)
              , d = Y(a.baseId, i)
              , h = K(a.baseId, i)
              , c = i === a.value;
            return (0,
            u.jsx)(D, {
                asChild: !0,
                ...l,
                focusable: !n,
                active: c,
                children: (0,
                u.jsx)(m.sG.button, {
                    type: "button",
                    role: "tab",
                    "aria-selected": c,
                    "aria-controls": h,
                    "data-state": c ? "active" : "inactive",
                    "data-disabled": n ? "" : void 0,
                    disabled: n,
                    id: d,
                    ...s,
                    ref: t,
                    onMouseDown: (0,
                    o.m)(e.onMouseDown, e => {
                        n || 0 !== e.button || !1 !== e.ctrlKey ? e.preventDefault() : a.onValueChange(i)
                    }
                    ),
                    onKeyDown: (0,
                    o.m)(e.onKeyDown, e => {
                        [" ", "Enter"].includes(e.key) && a.onValueChange(i)
                    }
                    ),
                    onFocus: (0,
                    o.m)(e.onFocus, () => {
                        let e = "manual" !== a.activationMode;
                        c || n || !e || a.onValueChange(i)
                    }
                    )
                })
            })
        }
        );
        _.displayName = H;
        var X = "TabsContent"
          , G = i.forwardRef( (e, t) => {
            let {__scopeTabs: r, value: n, forceMount: o, children: s, ...a} = e
              , l = z(X, r)
              , d = Y(l.baseId, n)
              , h = K(l.baseId, n)
              , c = n === l.value
              , p = i.useRef(c);
            return i.useEffect( () => {
                let e = requestAnimationFrame( () => p.current = !1);
                return () => cancelAnimationFrame(e)
            }
            , []),
            (0,
            u.jsx)(L.C, {
                present: o || c,
                children: r => {
                    let {present: i} = r;
                    return (0,
                    u.jsx)(m.sG.div, {
                        "data-state": c ? "active" : "inactive",
                        "data-orientation": l.orientation,
                        role: "tabpanel",
                        "aria-labelledby": d,
                        hidden: !i,
                        id: h,
                        tabIndex: 0,
                        ...a,
                        ref: t,
                        style: {
                            ...e.style,
                            animationDuration: p.current ? "0s" : void 0
                        },
                        children: i && s
                    })
                }
            })
        }
        );
        function Y(e, t) {
            return "".concat(e, "-trigger-").concat(t)
        }
        function K(e, t) {
            return "".concat(e, "-content-").concat(t)
        }
        G.displayName = X;
        var q = U
          , Z = W
          , Q = _
          , J = G
    }
    ,
    1524: (e, t, r) => {
        r.d(t, {
            c: () => n
        });
        var i = r(2115);
        function n(e) {
            let t = i.useRef(e);
            return i.useEffect( () => {
                t.current = e
            }
            ),
            i.useMemo( () => (...e) => t.current?.(...e), [])
        }
    }
    ,
    1488: (e, t, r) => {
        r.d(t, {
            i: () => o
        });
        var i = r(2115)
          , n = r(1524);
        function o({prop: e, defaultProp: t, onChange: r= () => {}
        }) {
            let[o,s] = function({defaultProp: e, onChange: t}) {
                let r = i.useState(e)
                  , [o] = r
                  , s = i.useRef(o)
                  , a = (0,
                n.c)(t);
                return i.useEffect( () => {
                    s.current !== o && (a(o),
                    s.current = o)
                }
                , [o, s, a]),
                r
            }({
                defaultProp: t,
                onChange: r
            })
              , a = void 0 !== e
              , l = a ? e : o
              , u = (0,
            n.c)(r);
            return [l, i.useCallback(t => {
                if (a) {
                    let r = "function" == typeof t ? t(e) : t;
                    r !== e && u(r)
                } else
                    s(t)
            }
            , [a, e, s, u])]
        }
    }
    ,
    6611: (e, t, r) => {
        r.d(t, {
            N: () => n
        });
        var i = r(2115)
          , n = globalThis?.document ? i.useLayoutEffect : () => {}
    }
    ,
    1027: (e, t, r) => {
        r.d(t, {
            F: () => s
        });
        var i = r(3463);
        let n = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e
          , o = i.$
          , s = (e, t) => r => {
            var i;
            if ((null == t ? void 0 : t.variants) == null)
                return o(e, null == r ? void 0 : r.class, null == r ? void 0 : r.className);
            let {variants: s, defaultVariants: a} = t
              , l = Object.keys(s).map(e => {
                let t = null == r ? void 0 : r[e]
                  , i = null == a ? void 0 : a[e];
                if (null === t)
                    return null;
                let o = n(t) || n(i);
                return s[e][o]
            }
            )
              , u = r && Object.entries(r).reduce( (e, t) => {
                let[r,i] = t;
                return void 0 === i || (e[r] = i),
                e
            }
            , {});
            return o(e, l, null == t ? void 0 : null === (i = t.compoundVariants) || void 0 === i ? void 0 : i.reduce( (e, t) => {
                let {class: r, className: i, ...n} = t;
                return Object.entries(n).every(e => {
                    let[t,r] = e;
                    return Array.isArray(r) ? r.includes({
                        ...a,
                        ...u
                    }[t]) : ({
                        ...a,
                        ...u
                    })[t] === r
                }
                ) ? [...e, r, i] : e
            }
            , []), null == r ? void 0 : r.class, null == r ? void 0 : r.className)
        }
    }
    ,
    3463: (e, t, r) => {
        r.d(t, {
            $: () => i
        });
        function i() {
            for (var e, t, r = 0, i = "", n = arguments.length; r < n; r++)
                (e = arguments[r]) && (t = function e(t) {
                    var r, i, n = "";
                    if ("string" == typeof t || "number" == typeof t)
                        n += t;
                    else if ("object" == typeof t) {
                        if (Array.isArray(t)) {
                            var o = t.length;
                            for (r = 0; r < o; r++)
                                t[r] && (i = e(t[r])) && (n && (n += " "),
                                n += i)
                        } else
                            for (i in t)
                                t[i] && (n && (n += " "),
                                n += i)
                    }
                    return n
                }(e)) && (i && (i += " "),
                i += t);
            return i
        }
    }
    ,
    5683: (e, t, r) => {
        r.d(t, {
            N: () => g
        });
        var i = r(5155)
          , n = r(2115)
          , o = r(4710)
          , s = r(9234)
          , a = r(9656)
          , l = r(7249);
        class u extends n.Component {
            getSnapshotBeforeUpdate(e) {
                let t = this.props.childRef.current;
                if (t && e.isPresent && !this.props.isPresent) {
                    let e = t.offsetParent
                      , r = e instanceof HTMLElement && e.offsetWidth || 0
                      , i = this.props.sizeRef.current;
                    i.height = t.offsetHeight || 0,
                    i.width = t.offsetWidth || 0,
                    i.top = t.offsetTop,
                    i.left = t.offsetLeft,
                    i.right = r - i.width - i.left
                }
                return null
            }
            componentDidUpdate() {}
            render() {
                return this.props.children
            }
        }
        function d(e) {
            let {children: t, isPresent: r, anchorX: o} = e
              , s = (0,
            n.useId)()
              , a = (0,
            n.useRef)(null)
              , d = (0,
            n.useRef)({
                width: 0,
                height: 0,
                top: 0,
                left: 0,
                right: 0
            })
              , {nonce: h} = (0,
            n.useContext)(l.Q);
            return (0,
            n.useInsertionEffect)( () => {
                let {width: e, height: t, top: i, left: n, right: l} = d.current;
                if (r || !a.current || !e || !t)
                    return;
                a.current.dataset.motionPopId = s;
                let u = document.createElement("style");
                return h && (u.nonce = h),
                document.head.appendChild(u),
                u.sheet && u.sheet.insertRule('\n          [data-motion-pop-id="'.concat(s, '"] {\n            position: absolute !important;\n            width: ').concat(e, "px !important;\n            height: ").concat(t, "px !important;\n            ").concat("left" === o ? "left: ".concat(n) : "right: ".concat(l), "px !important;\n            top: ").concat(i, "px !important;\n          }\n        ")),
                () => {
                    document.head.removeChild(u)
                }
            }
            , [r]),
            (0,
            i.jsx)(u, {
                isPresent: r,
                childRef: a,
                sizeRef: d,
                children: n.cloneElement(t, {
                    ref: a
                })
            })
        }
        let h = e => {
            let {children: t, initial: r, isPresent: o, onExitComplete: l, custom: u, presenceAffectsLayout: h, mode: p, anchorX: m} = e
              , f = (0,
            s.M)(c)
              , v = (0,
            n.useId)()
              , g = (0,
            n.useCallback)(e => {
                for (let t of (f.set(e, !0),
                f.values()))
                    if (!t)
                        return;
                l && l()
            }
            , [f, l])
              , y = (0,
            n.useMemo)( () => ({
                id: v,
                initial: r,
                isPresent: o,
                custom: u,
                onExitComplete: g,
                register: e => (f.set(e, !1),
                () => f.delete(e))
            }), h ? [Math.random(), g] : [o, g]);
            return (0,
            n.useMemo)( () => {
                f.forEach( (e, t) => f.set(t, !1))
            }
            , [o]),
            n.useEffect( () => {
                o || f.size || !l || l()
            }
            , [o]),
            "popLayout" === p && (t = (0,
            i.jsx)(d, {
                isPresent: o,
                anchorX: m,
                children: t
            })),
            (0,
            i.jsx)(a.t.Provider, {
                value: y,
                children: t
            })
        }
        ;
        function c() {
            return new Map
        }
        var p = r(5087);
        let m = e => e.key || "";
        function f(e) {
            let t = [];
            return n.Children.forEach(e, e => {
                (0,
                n.isValidElement)(e) && t.push(e)
            }
            ),
            t
        }
        var v = r(5403);
        let g = e => {
            let {children: t, custom: r, initial: a=!0, onExitComplete: l, presenceAffectsLayout: u=!0, mode: d="sync", propagate: c=!1, anchorX: g="left"} = e
              , [y,b] = (0,
            p.xQ)(c)
              , x = (0,
            n.useMemo)( () => f(t), [t])
              , w = c && !y ? [] : x.map(m)
              , S = (0,
            n.useRef)(!0)
              , T = (0,
            n.useRef)(x)
              , P = (0,
            s.M)( () => new Map)
              , [A,E] = (0,
            n.useState)(x)
              , [C,k] = (0,
            n.useState)(x);
            (0,
            v.E)( () => {
                S.current = !1,
                T.current = x;
                for (let e = 0; e < C.length; e++) {
                    let t = m(C[e]);
                    w.includes(t) ? P.delete(t) : !0 !== P.get(t) && P.set(t, !1)
                }
            }
            , [C, w.length, w.join("-")]);
            let M = [];
            if (x !== A) {
                let e = [...x];
                for (let t = 0; t < C.length; t++) {
                    let r = C[t]
                      , i = m(r);
                    w.includes(i) || (e.splice(t, 0, r),
                    M.push(r))
                }
                return "wait" === d && M.length && (e = M),
                k(f(e)),
                E(x),
                null
            }
            let {forceRender: R} = (0,
            n.useContext)(o.L);
            return (0,
            i.jsx)(i.Fragment, {
                children: C.map(e => {
                    let t = m(e)
                      , n = (!c || !!y) && (x === C || w.includes(t));
                    return (0,
                    i.jsx)(h, {
                        isPresent: n,
                        initial: (!S.current || !!a) && void 0,
                        custom: r,
                        presenceAffectsLayout: u,
                        mode: d,
                        onExitComplete: n ? void 0 : () => {
                            if (!P.has(t))
                                return;
                            P.set(t, !0);
                            let e = !0;
                            P.forEach(t => {
                                t || (e = !1)
                            }
                            ),
                            e && (null == R || R(),
                            k(T.current),
                            c && (null == b || b()),
                            l && l())
                        }
                        ,
                        anchorX: g,
                        children: e
                    }, t)
                }
                )
            })
        }
    }
    ,
    5087: (e, t, r) => {
        r.d(t, {
            xQ: () => o
        });
        var i = r(2115)
          , n = r(9656);
        function o(e=!0) {
            let t = (0,
            i.useContext)(n.t);
            if (null === t)
                return [!0, null];
            let {isPresent: r, onExitComplete: s, register: a} = t
              , l = (0,
            i.useId)();
            (0,
            i.useEffect)( () => {
                if (e)
                    return a(l)
            }
            , [e]);
            let u = (0,
            i.useCallback)( () => e && s && s(l), [l, s, e]);
            return !r && s ? [!1, u] : [!0]
        }
    }
    ,
    4710: (e, t, r) => {
        r.d(t, {
            L: () => i
        });
        let i = (0,
        r(2115).createContext)({})
    }
    ,
    7249: (e, t, r) => {
        r.d(t, {
            Q: () => i
        });
        let i = (0,
        r(2115).createContext)({
            transformPagePoint: e => e,
            isStatic: !1,
            reducedMotion: "never"
        })
    }
    ,
    9656: (e, t, r) => {
        r.d(t, {
            t: () => i
        });
        let i = (0,
        r(2115).createContext)(null)
    }
    ,
    3478: (e, t, r) => {
        let i;
        function n(e) {
            return null !== e && "object" == typeof e && "function" == typeof e.start
        }
        function o(e, t, r, i) {
            if ("function" == typeof t || ("string" == typeof t && (t = e.variants && e.variants[t]),
            "function" == typeof t)) {
                let[n,o] = function(e) {
                    let t = [{}, {}];
                    return null == e || e.values.forEach( (e, r) => {
                        t[0][r] = e.get(),
                        t[1][r] = e.getVelocity()
                    }
                    ),
                    t
                }(i);
                t = t(void 0 !== r ? r : e.custom, n, o)
            }
            return t
        }
        function s(e, t, r) {
            let i = e.getProps();
            return o(i, t, void 0 !== r ? r : i.custom, e)
        }
        function a(e) {
            let t;
            return () => (void 0 === t && (t = e()),
            t)
        }
        r.d(t, {
            P: () => og
        });
        let l = a( () => void 0 !== window.ScrollTimeline);
        class u {
            constructor(e) {
                this.stop = () => this.runAll("stop"),
                this.animations = e.filter(Boolean)
            }
            get finished() {
                return Promise.all(this.animations.map(e => "finished"in e ? e.finished : e))
            }
            getAll(e) {
                return this.animations[0][e]
            }
            setAll(e, t) {
                for (let r = 0; r < this.animations.length; r++)
                    this.animations[r][e] = t
            }
            attachTimeline(e, t) {
                let r = this.animations.map(r => l() && r.attachTimeline ? r.attachTimeline(e) : "function" == typeof t ? t(r) : void 0);
                return () => {
                    r.forEach( (e, t) => {
                        e && e(),
                        this.animations[t].stop()
                    }
                    )
                }
            }
            get time() {
                return this.getAll("time")
            }
            set time(e) {
                this.setAll("time", e)
            }
            get speed() {
                return this.getAll("speed")
            }
            set speed(e) {
                this.setAll("speed", e)
            }
            get startTime() {
                return this.getAll("startTime")
            }
            get duration() {
                let e = 0;
                for (let t = 0; t < this.animations.length; t++)
                    e = Math.max(e, this.animations[t].duration);
                return e
            }
            runAll(e) {
                this.animations.forEach(t => t[e]())
            }
            flatten() {
                this.runAll("flatten")
            }
            play() {
                this.runAll("play")
            }
            pause() {
                this.runAll("pause")
            }
            cancel() {
                this.runAll("cancel")
            }
            complete() {
                this.runAll("complete")
            }
        }
        class d extends u {
            then(e, t) {
                return Promise.all(this.animations).then(e).catch(t)
            }
        }
        function h(e, t) {
            return e ? e[t] || e.default || e : void 0
        }
        function c(e) {
            let t = 0
              , r = e.next(t);
            for (; !r.done && t < 2e4; )
                t += 50,
                r = e.next(t);
            return t >= 2e4 ? 1 / 0 : t
        }
        function p(e) {
            return "function" == typeof e
        }
        function m(e, t) {
            e.timeline = t,
            e.onfinish = null
        }
        let f = e => Array.isArray(e) && "number" == typeof e[0]
          , v = {
            linearEasing: void 0
        }
          , g = function(e, t) {
            let r = a(e);
            return () => {
                var e;
                return null !== (e = v[t]) && void 0 !== e ? e : r()
            }
        }( () => {
            try {
                document.createElement("div").animate({
                    opacity: 0
                }, {
                    easing: "linear(0, 1)"
                })
            } catch (e) {
                return !1
            }
            return !0
        }
        , "linearEasing")
          , y = (e, t, r) => {
            let i = t - e;
            return 0 === i ? 1 : (r - e) / i
        }
          , b = (e, t, r=10) => {
            let i = ""
              , n = Math.max(Math.round(t / r), 2);
            for (let t = 0; t < n; t++)
                i += e(y(0, n - 1, t)) + ", ";
            return `linear(${i.substring(0, i.length - 2)})`
        }
          , x = ([e,t,r,i]) => `cubic-bezier(${e}, ${t}, ${r}, ${i})`
          , w = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: x([0, .65, .55, 1]),
            circOut: x([.55, 0, 1, .45]),
            backIn: x([.31, .01, .66, -.59]),
            backOut: x([.33, 1.53, .69, .99])
        }
          , S = {
            x: !1,
            y: !1
        };
        function T(e, t) {
            let r = function(e, t, r) {
                if (e instanceof EventTarget)
                    return [e];
                if ("string" == typeof e) {
                    let t = document.querySelectorAll(e);
                    return t ? Array.from(t) : []
                }
                return Array.from(e)
            }(e)
              , i = new AbortController;
            return [r, {
                passive: !0,
                ...t,
                signal: i.signal
            }, () => i.abort()]
        }
        function P(e) {
            return !("touch" === e.pointerType || S.x || S.y)
        }
        function A(e, t) {
            let r = `${t}PointerCapture`;
            if (e.target instanceof Element && r in e.target && void 0 !== e.pointerId)
                try {
                    e.target[r](e.pointerId)
                } catch (e) {}
        }
        let E = (e, t) => !!t && (e === t || E(e, t.parentElement))
          , C = e => "mouse" === e.pointerType ? "number" != typeof e.button || e.button <= 0 : !1 !== e.isPrimary
          , k = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"])
          , M = new WeakSet;
        function R(e) {
            return t => {
                "Enter" === t.key && e(t)
            }
        }
        function D(e, t) {
            e.dispatchEvent(new PointerEvent("pointer" + t,{
                isPrimary: !0,
                bubbles: !0
            }))
        }
        let j = (e, t) => {
            let r = e.currentTarget;
            if (!r)
                return;
            let i = R( () => {
                if (M.has(r))
                    return;
                D(r, "down");
                let e = R( () => {
                    D(r, "up")
                }
                );
                r.addEventListener("keyup", e, t),
                r.addEventListener("blur", () => D(r, "cancel"), t)
            }
            );
            r.addEventListener("keydown", i, t),
            r.addEventListener("blur", () => r.removeEventListener("keydown", i), t)
        }
        ;
        function V(e) {
            return C(e) && !(S.x || S.y)
        }
        let L = e => 1e3 * e
          , F = e => e / 1e3
          , N = e => e
          , I = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
          , O = new Set(I)
          , B = new Set(["width", "height", "top", "left", "right", "bottom", ...I])
          , z = e => Array.isArray(e)
          , U = e => !!(e && "object" == typeof e && e.mix && e.toValue)
          , $ = e => z(e) ? e[e.length - 1] || 0 : e
          , W = {
            skipAnimations: !1,
            useManualTiming: !1
        }
          , H = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
          , _ = {
            value: null,
            addProjectionMetrics: null
        };
        function X(e, t) {
            let r = !1
              , i = !0
              , n = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
            }
              , o = () => r = !0
              , s = H.reduce( (e, r) => (e[r] = function(e, t) {
                let r = new Set
                  , i = new Set
                  , n = !1
                  , o = !1
                  , s = new WeakSet
                  , a = {
                    delta: 0,
                    timestamp: 0,
                    isProcessing: !1
                }
                  , l = 0;
                function u(t) {
                    s.has(t) && (d.schedule(t),
                    e()),
                    l++,
                    t(a)
                }
                let d = {
                    schedule: (e, t=!1, o=!1) => {
                        let a = o && n ? r : i;
                        return t && s.add(e),
                        a.has(e) || a.add(e),
                        e
                    }
                    ,
                    cancel: e => {
                        i.delete(e),
                        s.delete(e)
                    }
                    ,
                    process: e => {
                        if (a = e,
                        n) {
                            o = !0;
                            return
                        }
                        n = !0,
                        [r,i] = [i, r],
                        r.forEach(u),
                        t && _.value && _.value.frameloop[t].push(l),
                        l = 0,
                        r.clear(),
                        n = !1,
                        o && (o = !1,
                        d.process(e))
                    }
                };
                return d
            }(o, t ? r : void 0),
            e), {})
              , {read: a, resolveKeyframes: l, update: u, preRender: d, render: h, postRender: c} = s
              , p = () => {
                let o = W.useManualTiming ? n.timestamp : performance.now();
                r = !1,
                W.useManualTiming || (n.delta = i ? 1e3 / 60 : Math.max(Math.min(o - n.timestamp, 40), 1)),
                n.timestamp = o,
                n.isProcessing = !0,
                a.process(n),
                l.process(n),
                u.process(n),
                d.process(n),
                h.process(n),
                c.process(n),
                n.isProcessing = !1,
                r && t && (i = !1,
                e(p))
            }
              , m = () => {
                r = !0,
                i = !0,
                n.isProcessing || e(p)
            }
            ;
            return {
                schedule: H.reduce( (e, t) => {
                    let i = s[t];
                    return e[t] = (e, t=!1, n=!1) => (r || m(),
                    i.schedule(e, t, n)),
                    e
                }
                , {}),
                cancel: e => {
                    for (let t = 0; t < H.length; t++)
                        s[H[t]].cancel(e)
                }
                ,
                state: n,
                steps: s
            }
        }
        let {schedule: G, cancel: Y, state: K, steps: q} = X("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : N, !0);
        function Z() {
            i = void 0
        }
        let Q = {
            now: () => (void 0 === i && Q.set(K.isProcessing || W.useManualTiming ? K.timestamp : performance.now()),
            i),
            set: e => {
                i = e,
                queueMicrotask(Z)
            }
        };
        function J(e, t) {
            -1 === e.indexOf(t) && e.push(t)
        }
        function ee(e, t) {
            let r = e.indexOf(t);
            r > -1 && e.splice(r, 1)
        }
        class et {
            constructor() {
                this.subscriptions = []
            }
            add(e) {
                return J(this.subscriptions, e),
                () => ee(this.subscriptions, e)
            }
            notify(e, t, r) {
                let i = this.subscriptions.length;
                if (i) {
                    if (1 === i)
                        this.subscriptions[0](e, t, r);
                    else
                        for (let n = 0; n < i; n++) {
                            let i = this.subscriptions[n];
                            i && i(e, t, r)
                        }
                }
            }
            getSize() {
                return this.subscriptions.length
            }
            clear() {
                this.subscriptions.length = 0
            }
        }
        let er = e => !isNaN(parseFloat(e))
          , ei = {
            current: void 0
        };
        class en {
            constructor(e, t={}) {
                this.version = "12.4.10",
                this.canTrackVelocity = null,
                this.events = {},
                this.updateAndNotify = (e, t=!0) => {
                    let r = Q.now();
                    this.updatedAt !== r && this.setPrevFrameValue(),
                    this.prev = this.current,
                    this.setCurrent(e),
                    this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
                    t && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                }
                ,
                this.hasAnimated = !1,
                this.setCurrent(e),
                this.owner = t.owner
            }
            setCurrent(e) {
                this.current = e,
                this.updatedAt = Q.now(),
                null === this.canTrackVelocity && void 0 !== e && (this.canTrackVelocity = er(this.current))
            }
            setPrevFrameValue(e=this.current) {
                this.prevFrameValue = e,
                this.prevUpdatedAt = this.updatedAt
            }
            onChange(e) {
                return this.on("change", e)
            }
            on(e, t) {
                this.events[e] || (this.events[e] = new et);
                let r = this.events[e].add(t);
                return "change" === e ? () => {
                    r(),
                    G.read( () => {
                        this.events.change.getSize() || this.stop()
                    }
                    )
                }
                : r
            }
            clearListeners() {
                for (let e in this.events)
                    this.events[e].clear()
            }
            attach(e, t) {
                this.passiveEffect = e,
                this.stopPassiveEffect = t
            }
            set(e, t=!0) {
                t && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, t)
            }
            setWithVelocity(e, t, r) {
                this.set(t),
                this.prev = void 0,
                this.prevFrameValue = e,
                this.prevUpdatedAt = this.updatedAt - r
            }
            jump(e, t=!0) {
                this.updateAndNotify(e),
                this.prev = e,
                this.prevUpdatedAt = this.prevFrameValue = void 0,
                t && this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
            get() {
                return ei.current && ei.current.push(this),
                this.current
            }
            getPrevious() {
                return this.prev
            }
            getVelocity() {
                var e;
                let t = Q.now();
                if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30)
                    return 0;
                let r = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                return e = parseFloat(this.current) - parseFloat(this.prevFrameValue),
                r ? 1e3 / r * e : 0
            }
            start(e) {
                return this.stop(),
                new Promise(t => {
                    this.hasAnimated = !0,
                    this.animation = e(t),
                    this.events.animationStart && this.events.animationStart.notify()
                }
                ).then( () => {
                    this.events.animationComplete && this.events.animationComplete.notify(),
                    this.clearAnimation()
                }
                )
            }
            stop() {
                this.animation && (this.animation.stop(),
                this.events.animationCancel && this.events.animationCancel.notify()),
                this.clearAnimation()
            }
            isAnimating() {
                return !!this.animation
            }
            clearAnimation() {
                delete this.animation
            }
            destroy() {
                this.clearListeners(),
                this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
        }
        function eo(e, t) {
            return new en(e,t)
        }
        let es = e => !!(e && e.getVelocity);
        function ea(e, t) {
            let r = e.getValue("willChange");
            if (es(r) && r.add)
                return r.add(t)
        }
        let el = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
          , eu = "data-" + el("framerAppearId")
          , ed = {
            current: !1
        }
          , eh = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e;
        function ec(e, t, r, i) {
            if (e === t && r === i)
                return N;
            let n = t => (function(e, t, r, i, n) {
                let o, s;
                let a = 0;
                do
                    (o = eh(s = t + (r - t) / 2, i, n) - e) > 0 ? r = s : t = s;
                while (Math.abs(o) > 1e-7 && ++a < 12);
                return s
            }
            )(t, 0, 1, e, r);
            return e => 0 === e || 1 === e ? e : eh(n(e), t, i)
        }
        let ep = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
          , em = e => t => 1 - e(1 - t)
          , ef = ec(.33, 1.53, .69, .99)
          , ev = em(ef)
          , eg = ep(ev)
          , ey = e => (e *= 2) < 1 ? .5 * ev(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
          , eb = e => 1 - Math.sin(Math.acos(e))
          , ex = em(eb)
          , ew = ep(eb)
          , eS = e => /^0[^.\s]+$/u.test(e)
          , eT = (e, t, r) => r > t ? t : r < e ? e : r
          , eP = {
            test: e => "number" == typeof e,
            parse: parseFloat,
            transform: e => e
        }
          , eA = {
            ...eP,
            transform: e => eT(0, 1, e)
        }
          , eE = {
            ...eP,
            default: 1
        }
          , eC = e => Math.round(1e5 * e) / 1e5
          , ek = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
          , eM = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
          , eR = (e, t) => r => !!("string" == typeof r && eM.test(r) && r.startsWith(e) || t && null != r && Object.prototype.hasOwnProperty.call(r, t))
          , eD = (e, t, r) => i => {
            if ("string" != typeof i)
                return i;
            let[n,o,s,a] = i.match(ek);
            return {
                [e]: parseFloat(n),
                [t]: parseFloat(o),
                [r]: parseFloat(s),
                alpha: void 0 !== a ? parseFloat(a) : 1
            }
        }
          , ej = e => eT(0, 255, e)
          , eV = {
            ...eP,
            transform: e => Math.round(ej(e))
        }
          , eL = {
            test: eR("rgb", "red"),
            parse: eD("red", "green", "blue"),
            transform: ({red: e, green: t, blue: r, alpha: i=1}) => "rgba(" + eV.transform(e) + ", " + eV.transform(t) + ", " + eV.transform(r) + ", " + eC(eA.transform(i)) + ")"
        }
          , eF = {
            test: eR("#"),
            parse: function(e) {
                let t = ""
                  , r = ""
                  , i = ""
                  , n = "";
                return e.length > 5 ? (t = e.substring(1, 3),
                r = e.substring(3, 5),
                i = e.substring(5, 7),
                n = e.substring(7, 9)) : (t = e.substring(1, 2),
                r = e.substring(2, 3),
                i = e.substring(3, 4),
                n = e.substring(4, 5),
                t += t,
                r += r,
                i += i,
                n += n),
                {
                    red: parseInt(t, 16),
                    green: parseInt(r, 16),
                    blue: parseInt(i, 16),
                    alpha: n ? parseInt(n, 16) / 255 : 1
                }
            },
            transform: eL.transform
        }
          , eN = e => ({
            test: t => "string" == typeof t && t.endsWith(e) && 1 === t.split(" ").length,
            parse: parseFloat,
            transform: t => `${t}${e}`
        })
          , eI = eN("deg")
          , eO = eN("%")
          , eB = eN("px")
          , ez = eN("vh")
          , eU = eN("vw")
          , e$ = {
            ...eO,
            parse: e => eO.parse(e) / 100,
            transform: e => eO.transform(100 * e)
        }
          , eW = {
            test: eR("hsl", "hue"),
            parse: eD("hue", "saturation", "lightness"),
            transform: ({hue: e, saturation: t, lightness: r, alpha: i=1}) => "hsla(" + Math.round(e) + ", " + eO.transform(eC(t)) + ", " + eO.transform(eC(r)) + ", " + eC(eA.transform(i)) + ")"
        }
          , eH = {
            test: e => eL.test(e) || eF.test(e) || eW.test(e),
            parse: e => eL.test(e) ? eL.parse(e) : eW.test(e) ? eW.parse(e) : eF.parse(e),
            transform: e => "string" == typeof e ? e : e.hasOwnProperty("red") ? eL.transform(e) : eW.transform(e)
        }
          , e_ = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu
          , eX = "number"
          , eG = "color"
          , eY = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
        function eK(e) {
            let t = e.toString()
              , r = []
              , i = {
                color: [],
                number: [],
                var: []
            }
              , n = []
              , o = 0
              , s = t.replace(eY, e => (eH.test(e) ? (i.color.push(o),
            n.push(eG),
            r.push(eH.parse(e))) : e.startsWith("var(") ? (i.var.push(o),
            n.push("var"),
            r.push(e)) : (i.number.push(o),
            n.push(eX),
            r.push(parseFloat(e))),
            ++o,
            "${}")).split("${}");
            return {
                values: r,
                split: s,
                indexes: i,
                types: n
            }
        }
        function eq(e) {
            return eK(e).values
        }
        function eZ(e) {
            let {split: t, types: r} = eK(e)
              , i = t.length;
            return e => {
                let n = "";
                for (let o = 0; o < i; o++)
                    if (n += t[o],
                    void 0 !== e[o]) {
                        let t = r[o];
                        t === eX ? n += eC(e[o]) : t === eG ? n += eH.transform(e[o]) : n += e[o]
                    }
                return n
            }
        }
        let eQ = e => "number" == typeof e ? 0 : e
          , eJ = {
            test: function(e) {
                var t, r;
                return isNaN(e) && "string" == typeof e && ((null === (t = e.match(ek)) || void 0 === t ? void 0 : t.length) || 0) + ((null === (r = e.match(e_)) || void 0 === r ? void 0 : r.length) || 0) > 0
            },
            parse: eq,
            createTransformer: eZ,
            getAnimatableNone: function(e) {
                let t = eq(e);
                return eZ(e)(t.map(eQ))
            }
        }
          , e0 = new Set(["brightness", "contrast", "saturate", "opacity"]);
        function e1(e) {
            let[t,r] = e.slice(0, -1).split("(");
            if ("drop-shadow" === t)
                return e;
            let[i] = r.match(ek) || [];
            if (!i)
                return e;
            let n = r.replace(i, "")
              , o = e0.has(t) ? 1 : 0;
            return i !== r && (o *= 100),
            t + "(" + o + n + ")"
        }
        let e2 = /\b([a-z-]*)\(.*?\)/gu
          , e5 = {
            ...eJ,
            getAnimatableNone: e => {
                let t = e.match(e2);
                return t ? t.map(e1).join(" ") : e
            }
        }
          , e3 = {
            ...eP,
            transform: Math.round
        }
          , e4 = {
            borderWidth: eB,
            borderTopWidth: eB,
            borderRightWidth: eB,
            borderBottomWidth: eB,
            borderLeftWidth: eB,
            borderRadius: eB,
            radius: eB,
            borderTopLeftRadius: eB,
            borderTopRightRadius: eB,
            borderBottomRightRadius: eB,
            borderBottomLeftRadius: eB,
            width: eB,
            maxWidth: eB,
            height: eB,
            maxHeight: eB,
            top: eB,
            right: eB,
            bottom: eB,
            left: eB,
            padding: eB,
            paddingTop: eB,
            paddingRight: eB,
            paddingBottom: eB,
            paddingLeft: eB,
            margin: eB,
            marginTop: eB,
            marginRight: eB,
            marginBottom: eB,
            marginLeft: eB,
            backgroundPositionX: eB,
            backgroundPositionY: eB,
            rotate: eI,
            rotateX: eI,
            rotateY: eI,
            rotateZ: eI,
            scale: eE,
            scaleX: eE,
            scaleY: eE,
            scaleZ: eE,
            skew: eI,
            skewX: eI,
            skewY: eI,
            distance: eB,
            translateX: eB,
            translateY: eB,
            translateZ: eB,
            x: eB,
            y: eB,
            z: eB,
            perspective: eB,
            transformPerspective: eB,
            opacity: eA,
            originX: e$,
            originY: e$,
            originZ: eB,
            zIndex: e3,
            size: eB,
            fillOpacity: eA,
            strokeOpacity: eA,
            numOctaves: e3
        }
          , e6 = {
            ...e4,
            color: eH,
            backgroundColor: eH,
            outlineColor: eH,
            fill: eH,
            stroke: eH,
            borderColor: eH,
            borderTopColor: eH,
            borderRightColor: eH,
            borderBottomColor: eH,
            borderLeftColor: eH,
            filter: e5,
            WebkitFilter: e5
        }
          , e7 = e => e6[e];
        function e9(e, t) {
            let r = e7(e);
            return r !== e5 && (r = eJ),
            r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
        }
        let e8 = new Set(["auto", "none", "0"])
          , te = e => e === eP || e === eB
          , tt = (e, t) => parseFloat(e.split(", ")[t])
          , tr = (e, t) => (r, {transform: i}) => {
            if ("none" === i || !i)
                return 0;
            let n = i.match(/^matrix3d\((.+)\)$/u);
            if (n)
                return tt(n[1], t);
            {
                let t = i.match(/^matrix\((.+)\)$/u);
                return t ? tt(t[1], e) : 0
            }
        }
          , ti = new Set(["x", "y", "z"])
          , tn = I.filter(e => !ti.has(e))
          , to = {
            width: ({x: e}, {paddingLeft: t="0", paddingRight: r="0"}) => e.max - e.min - parseFloat(t) - parseFloat(r),
            height: ({y: e}, {paddingTop: t="0", paddingBottom: r="0"}) => e.max - e.min - parseFloat(t) - parseFloat(r),
            top: (e, {top: t}) => parseFloat(t),
            left: (e, {left: t}) => parseFloat(t),
            bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
            right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
            x: tr(4, 13),
            y: tr(5, 14)
        };
        to.translateX = to.x,
        to.translateY = to.y;
        let ts = new Set
          , ta = !1
          , tl = !1;
        function tu() {
            if (tl) {
                let e = Array.from(ts).filter(e => e.needsMeasurement)
                  , t = new Set(e.map(e => e.element))
                  , r = new Map;
                t.forEach(e => {
                    let t = function(e) {
                        let t = [];
                        return tn.forEach(r => {
                            let i = e.getValue(r);
                            void 0 !== i && (t.push([r, i.get()]),
                            i.set(r.startsWith("scale") ? 1 : 0))
                        }
                        ),
                        t
                    }(e);
                    t.length && (r.set(e, t),
                    e.render())
                }
                ),
                e.forEach(e => e.measureInitialState()),
                t.forEach(e => {
                    e.render();
                    let t = r.get(e);
                    t && t.forEach( ([t,r]) => {
                        var i;
                        null === (i = e.getValue(t)) || void 0 === i || i.set(r)
                    }
                    )
                }
                ),
                e.forEach(e => e.measureEndState()),
                e.forEach(e => {
                    void 0 !== e.suspendedScrollY && window.scrollTo(0, e.suspendedScrollY)
                }
                )
            }
            tl = !1,
            ta = !1,
            ts.forEach(e => e.complete()),
            ts.clear()
        }
        function td() {
            ts.forEach(e => {
                e.readKeyframes(),
                e.needsMeasurement && (tl = !0)
            }
            )
        }
        class th {
            constructor(e, t, r, i, n, o=!1) {
                this.isComplete = !1,
                this.isAsync = !1,
                this.needsMeasurement = !1,
                this.isScheduled = !1,
                this.unresolvedKeyframes = [...e],
                this.onComplete = t,
                this.name = r,
                this.motionValue = i,
                this.element = n,
                this.isAsync = o
            }
            scheduleResolve() {
                this.isScheduled = !0,
                this.isAsync ? (ts.add(this),
                ta || (ta = !0,
                G.read(td),
                G.resolveKeyframes(tu))) : (this.readKeyframes(),
                this.complete())
            }
            readKeyframes() {
                let {unresolvedKeyframes: e, name: t, element: r, motionValue: i} = this;
                for (let n = 0; n < e.length; n++)
                    if (null === e[n]) {
                        if (0 === n) {
                            let n = null == i ? void 0 : i.get()
                              , o = e[e.length - 1];
                            if (void 0 !== n)
                                e[0] = n;
                            else if (r && t) {
                                let i = r.readValue(t, o);
                                null != i && (e[0] = i)
                            }
                            void 0 === e[0] && (e[0] = o),
                            i && void 0 === n && i.set(e[0])
                        } else
                            e[n] = e[n - 1]
                    }
            }
            setFinalKeyframe() {}
            measureInitialState() {}
            renderEndStyles() {}
            measureEndState() {}
            complete() {
                this.isComplete = !0,
                this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
                ts.delete(this)
            }
            cancel() {
                this.isComplete || (this.isScheduled = !1,
                ts.delete(this))
            }
            resume() {
                this.isComplete || this.scheduleResolve()
            }
        }
        let tc = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)
          , tp = e => t => "string" == typeof t && t.startsWith(e)
          , tm = tp("--")
          , tf = tp("var(--")
          , tv = e => !!tf(e) && tg.test(e.split("/*")[0].trim())
          , tg = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
          , ty = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
          , tb = e => t => t.test(e)
          , tx = [eP, eB, eO, eI, eU, ez, {
            test: e => "auto" === e,
            parse: e => e
        }]
          , tw = e => tx.find(tb(e));
        class tS extends th {
            constructor(e, t, r, i, n) {
                super(e, t, r, i, n, !0)
            }
            readKeyframes() {
                let {unresolvedKeyframes: e, element: t, name: r} = this;
                if (!t || !t.current)
                    return;
                super.readKeyframes();
                for (let r = 0; r < e.length; r++) {
                    let i = e[r];
                    if ("string" == typeof i && tv(i = i.trim())) {
                        let n = function e(t, r, i=1) {
                            N(i <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
                            let[n,o] = function(e) {
                                let t = ty.exec(e);
                                if (!t)
                                    return [, ];
                                let[,r,i,n] = t;
                                return [`--${null != r ? r : i}`, n]
                            }(t);
                            if (!n)
                                return;
                            let s = window.getComputedStyle(r).getPropertyValue(n);
                            if (s) {
                                let e = s.trim();
                                return tc(e) ? parseFloat(e) : e
                            }
                            return tv(o) ? e(o, r, i + 1) : o
                        }(i, t.current);
                        void 0 !== n && (e[r] = n),
                        r === e.length - 1 && (this.finalKeyframe = i)
                    }
                }
                if (this.resolveNoneKeyframes(),
                !B.has(r) || 2 !== e.length)
                    return;
                let[i,n] = e
                  , o = tw(i)
                  , s = tw(n);
                if (o !== s) {
                    if (te(o) && te(s))
                        for (let t = 0; t < e.length; t++) {
                            let r = e[t];
                            "string" == typeof r && (e[t] = parseFloat(r))
                        }
                    else
                        this.needsMeasurement = !0
                }
            }
            resolveNoneKeyframes() {
                let {unresolvedKeyframes: e, name: t} = this
                  , r = [];
                for (let t = 0; t < e.length; t++) {
                    var i;
                    ("number" == typeof (i = e[t]) ? 0 === i : null === i || "none" === i || "0" === i || eS(i)) && r.push(t)
                }
                r.length && function(e, t, r) {
                    let i, n = 0;
                    for (; n < e.length && !i; ) {
                        let t = e[n];
                        "string" == typeof t && !e8.has(t) && eK(t).values.length && (i = e[n]),
                        n++
                    }
                    if (i && r)
                        for (let n of t)
                            e[n] = e9(r, i)
                }(e, r, t)
            }
            measureInitialState() {
                let {element: e, unresolvedKeyframes: t, name: r} = this;
                if (!e || !e.current)
                    return;
                "height" === r && (this.suspendedScrollY = window.pageYOffset),
                this.measuredOrigin = to[r](e.measureViewportBox(), window.getComputedStyle(e.current)),
                t[0] = this.measuredOrigin;
                let i = t[t.length - 1];
                void 0 !== i && e.getValue(r, i).jump(i, !1)
            }
            measureEndState() {
                var e;
                let {element: t, name: r, unresolvedKeyframes: i} = this;
                if (!t || !t.current)
                    return;
                let n = t.getValue(r);
                n && n.jump(this.measuredOrigin, !1);
                let o = i.length - 1
                  , s = i[o];
                i[o] = to[r](t.measureViewportBox(), window.getComputedStyle(t.current)),
                null !== s && void 0 === this.finalKeyframe && (this.finalKeyframe = s),
                (null === (e = this.removedTransforms) || void 0 === e ? void 0 : e.length) && this.removedTransforms.forEach( ([e,r]) => {
                    t.getValue(e).set(r)
                }
                ),
                this.resolveNoneKeyframes()
            }
        }
        let tT = (e, t) => "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && (eJ.test(e) || "0" === e) && !e.startsWith("url("))
          , tP = e => null !== e;
        function tA(e, {repeat: t, repeatType: r="loop"}, i) {
            let n = e.filter(tP)
              , o = t && "loop" !== r && t % 2 == 1 ? 0 : n.length - 1;
            return o && void 0 !== i ? i : n[o]
        }
        class tE {
            constructor({autoplay: e=!0, delay: t=0, type: r="keyframes", repeat: i=0, repeatDelay: n=0, repeatType: o="loop", ...s}) {
                this.isStopped = !1,
                this.hasAttemptedResolve = !1,
                this.createdAt = Q.now(),
                this.options = {
                    autoplay: e,
                    delay: t,
                    type: r,
                    repeat: i,
                    repeatDelay: n,
                    repeatType: o,
                    ...s
                },
                this.updateFinishedPromise()
            }
            calcStartTime() {
                return this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt
            }
            get resolved() {
                return this._resolved || this.hasAttemptedResolve || (td(),
                tu()),
                this._resolved
            }
            onKeyframesResolved(e, t) {
                this.resolvedAt = Q.now(),
                this.hasAttemptedResolve = !0;
                let {name: r, type: i, velocity: n, delay: o, onComplete: s, onUpdate: a, isGenerator: l} = this.options;
                if (!l && !function(e, t, r, i) {
                    let n = e[0];
                    if (null === n)
                        return !1;
                    if ("display" === t || "visibility" === t)
                        return !0;
                    let o = e[e.length - 1]
                      , s = tT(n, t)
                      , a = tT(o, t);
                    return N(s === a, `You are trying to animate ${t} from "${n}" to "${o}". ${n} is not an animatable value - to enable this animation set ${n} to a value animatable to ${o} via the \`style\` property.`),
                    !!s && !!a && (function(e) {
                        let t = e[0];
                        if (1 === e.length)
                            return !0;
                        for (let r = 0; r < e.length; r++)
                            if (e[r] !== t)
                                return !0
                    }(e) || ("spring" === r || p(r)) && i)
                }(e, r, i, n)) {
                    if (ed.current || !o) {
                        a && a(tA(e, this.options, t)),
                        s && s(),
                        this.resolveFinishedPromise();
                        return
                    }
                    this.options.duration = 0
                }
                let u = this.initPlayback(e, t);
                !1 !== u && (this._resolved = {
                    keyframes: e,
                    finalKeyframe: t,
                    ...u
                },
                this.onPostResolved())
            }
            onPostResolved() {}
            then(e, t) {
                return this.currentFinishedPromise.then(e, t)
            }
            flatten() {
                this.options.type = "keyframes",
                this.options.ease = "linear"
            }
            updateFinishedPromise() {
                this.currentFinishedPromise = new Promise(e => {
                    this.resolveFinishedPromise = e
                }
                )
            }
        }
        let tC = {
            layout: 0,
            mainThread: 0,
            waapi: 0
        }
          , tk = (e, t, r) => e + (t - e) * r;
        function tM(e, t, r) {
            return (r < 0 && (r += 1),
            r > 1 && (r -= 1),
            r < 1 / 6) ? e + (t - e) * 6 * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
        }
        function tR(e, t) {
            return r => r > 0 ? t : e
        }
        let tD = (e, t, r) => {
            let i = e * e
              , n = r * (t * t - i) + i;
            return n < 0 ? 0 : Math.sqrt(n)
        }
          , tj = [eF, eL, eW]
          , tV = e => tj.find(t => t.test(e));
        function tL(e) {
            let t = tV(e);
            if (N(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`),
            !t)
                return !1;
            let r = t.parse(e);
            return t === eW && (r = function({hue: e, saturation: t, lightness: r, alpha: i}) {
                e /= 360,
                r /= 100;
                let n = 0
                  , o = 0
                  , s = 0;
                if (t /= 100) {
                    let i = r < .5 ? r * (1 + t) : r + t - r * t
                      , a = 2 * r - i;
                    n = tM(a, i, e + 1 / 3),
                    o = tM(a, i, e),
                    s = tM(a, i, e - 1 / 3)
                } else
                    n = o = s = r;
                return {
                    red: Math.round(255 * n),
                    green: Math.round(255 * o),
                    blue: Math.round(255 * s),
                    alpha: i
                }
            }(r)),
            r
        }
        let tF = (e, t) => {
            let r = tL(e)
              , i = tL(t);
            if (!r || !i)
                return tR(e, t);
            let n = {
                ...r
            };
            return e => (n.red = tD(r.red, i.red, e),
            n.green = tD(r.green, i.green, e),
            n.blue = tD(r.blue, i.blue, e),
            n.alpha = tk(r.alpha, i.alpha, e),
            eL.transform(n))
        }
          , tN = (e, t) => r => t(e(r))
          , tI = (...e) => e.reduce(tN)
          , tO = new Set(["none", "hidden"]);
        function tB(e, t) {
            return r => tk(e, t, r)
        }
        function tz(e) {
            return "number" == typeof e ? tB : "string" == typeof e ? tv(e) ? tR : eH.test(e) ? tF : tW : Array.isArray(e) ? tU : "object" == typeof e ? eH.test(e) ? tF : t$ : tR
        }
        function tU(e, t) {
            let r = [...e]
              , i = r.length
              , n = e.map( (e, r) => tz(e)(e, t[r]));
            return e => {
                for (let t = 0; t < i; t++)
                    r[t] = n[t](e);
                return r
            }
        }
        function t$(e, t) {
            let r = {
                ...e,
                ...t
            }
              , i = {};
            for (let n in r)
                void 0 !== e[n] && void 0 !== t[n] && (i[n] = tz(e[n])(e[n], t[n]));
            return e => {
                for (let t in i)
                    r[t] = i[t](e);
                return r
            }
        }
        let tW = (e, t) => {
            let r = eJ.createTransformer(t)
              , i = eK(e)
              , n = eK(t);
            return i.indexes.var.length === n.indexes.var.length && i.indexes.color.length === n.indexes.color.length && i.indexes.number.length >= n.indexes.number.length ? tO.has(e) && !n.values.length || tO.has(t) && !i.values.length ? function(e, t) {
                return tO.has(e) ? r => r <= 0 ? e : t : r => r >= 1 ? t : e
            }(e, t) : tI(tU(function(e, t) {
                var r;
                let i = []
                  , n = {
                    color: 0,
                    var: 0,
                    number: 0
                };
                for (let o = 0; o < t.values.length; o++) {
                    let s = t.types[o]
                      , a = e.indexes[s][n[s]]
                      , l = null !== (r = e.values[a]) && void 0 !== r ? r : 0;
                    i[o] = l,
                    n[s]++
                }
                return i
            }(i, n), n.values), r) : (N(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),
            tR(e, t))
        }
        ;
        function tH(e, t, r) {
            return "number" == typeof e && "number" == typeof t && "number" == typeof r ? tk(e, t, r) : tz(e)(e, t)
        }
        function t_(e, t, r) {
            var i, n;
            let o = Math.max(t - 5, 0);
            return i = r - e(o),
            (n = t - o) ? 1e3 / n * i : 0
        }
        let tX = {
            stiffness: 100,
            damping: 10,
            mass: 1,
            velocity: 0,
            duration: 800,
            bounce: .3,
            visualDuration: .3,
            restSpeed: {
                granular: .01,
                default: 2
            },
            restDelta: {
                granular: .005,
                default: .5
            },
            minDuration: .01,
            maxDuration: 10,
            minDamping: .05,
            maxDamping: 1
        };
        function tG(e, t) {
            return e * Math.sqrt(1 - t * t)
        }
        let tY = ["duration", "bounce"]
          , tK = ["stiffness", "damping", "mass"];
        function tq(e, t) {
            return t.some(t => void 0 !== e[t])
        }
        function tZ(e=tX.visualDuration, t=tX.bounce) {
            let r;
            let i = "object" != typeof e ? {
                visualDuration: e,
                keyframes: [0, 1],
                bounce: t
            } : e
              , {restSpeed: n, restDelta: o} = i
              , s = i.keyframes[0]
              , a = i.keyframes[i.keyframes.length - 1]
              , l = {
                done: !1,
                value: s
            }
              , {stiffness: u, damping: d, mass: h, duration: p, velocity: m, isResolvedFromDuration: f} = function(e) {
                let t = {
                    velocity: tX.velocity,
                    stiffness: tX.stiffness,
                    damping: tX.damping,
                    mass: tX.mass,
                    isResolvedFromDuration: !1,
                    ...e
                };
                if (!tq(e, tK) && tq(e, tY)) {
                    if (e.visualDuration) {
                        let r = 2 * Math.PI / (1.2 * e.visualDuration)
                          , i = r * r
                          , n = 2 * eT(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
                        t = {
                            ...t,
                            mass: tX.mass,
                            stiffness: i,
                            damping: n
                        }
                    } else {
                        let r = function({duration: e=tX.duration, bounce: t=tX.bounce, velocity: r=tX.velocity, mass: i=tX.mass}) {
                            let n, o;
                            N(e <= L(tX.maxDuration), "Spring duration must be 10 seconds or less");
                            let s = 1 - t;
                            s = eT(tX.minDamping, tX.maxDamping, s),
                            e = eT(tX.minDuration, tX.maxDuration, F(e)),
                            s < 1 ? (n = t => {
                                let i = t * s
                                  , n = i * e;
                                return .001 - (i - r) / tG(t, s) * Math.exp(-n)
                            }
                            ,
                            o = t => {
                                let i = t * s * e
                                  , o = Math.pow(s, 2) * Math.pow(t, 2) * e
                                  , a = Math.exp(-i)
                                  , l = tG(Math.pow(t, 2), s);
                                return (i * r + r - o) * a * (-n(t) + .001 > 0 ? -1 : 1) / l
                            }
                            ) : (n = t => -.001 + Math.exp(-t * e) * ((t - r) * e + 1),
                            o = t => e * e * (r - t) * Math.exp(-t * e));
                            let a = function(e, t, r) {
                                let i = r;
                                for (let r = 1; r < 12; r++)
                                    i -= e(i) / t(i);
                                return i
                            }(n, o, 5 / e);
                            if (e = L(e),
                            isNaN(a))
                                return {
                                    stiffness: tX.stiffness,
                                    damping: tX.damping,
                                    duration: e
                                };
                            {
                                let t = Math.pow(a, 2) * i;
                                return {
                                    stiffness: t,
                                    damping: 2 * s * Math.sqrt(i * t),
                                    duration: e
                                }
                            }
                        }(e);
                        (t = {
                            ...t,
                            ...r,
                            mass: tX.mass
                        }).isResolvedFromDuration = !0
                    }
                }
                return t
            }({
                ...i,
                velocity: -F(i.velocity || 0)
            })
              , v = m || 0
              , g = d / (2 * Math.sqrt(u * h))
              , y = a - s
              , x = F(Math.sqrt(u / h))
              , w = 5 > Math.abs(y);
            if (n || (n = w ? tX.restSpeed.granular : tX.restSpeed.default),
            o || (o = w ? tX.restDelta.granular : tX.restDelta.default),
            g < 1) {
                let e = tG(x, g);
                r = t => a - Math.exp(-g * x * t) * ((v + g * x * y) / e * Math.sin(e * t) + y * Math.cos(e * t))
            } else if (1 === g)
                r = e => a - Math.exp(-x * e) * (y + (v + x * y) * e);
            else {
                let e = x * Math.sqrt(g * g - 1);
                r = t => {
                    let r = Math.exp(-g * x * t)
                      , i = Math.min(e * t, 300);
                    return a - r * ((v + g * x * y) * Math.sinh(i) + e * y * Math.cosh(i)) / e
                }
            }
            let S = {
                calculatedDuration: f && p || null,
                next: e => {
                    let t = r(e);
                    if (f)
                        l.done = e >= p;
                    else {
                        let i = 0;
                        g < 1 && (i = 0 === e ? L(v) : t_(r, e, t));
                        let s = Math.abs(i) <= n
                          , u = Math.abs(a - t) <= o;
                        l.done = s && u
                    }
                    return l.value = l.done ? a : t,
                    l
                }
                ,
                toString: () => {
                    let e = Math.min(c(S), 2e4)
                      , t = b(t => S.next(e * t).value, e, 30);
                    return e + "ms " + t
                }
            };
            return S
        }
        function tQ({keyframes: e, velocity: t=0, power: r=.8, timeConstant: i=325, bounceDamping: n=10, bounceStiffness: o=500, modifyTarget: s, min: a, max: l, restDelta: u=.5, restSpeed: d}) {
            let h, c;
            let p = e[0]
              , m = {
                done: !1,
                value: p
            }
              , f = e => void 0 !== a && e < a || void 0 !== l && e > l
              , v = e => void 0 === a ? l : void 0 === l ? a : Math.abs(a - e) < Math.abs(l - e) ? a : l
              , g = r * t
              , y = p + g
              , b = void 0 === s ? y : s(y);
            b !== y && (g = b - p);
            let x = e => -g * Math.exp(-e / i)
              , w = e => b + x(e)
              , S = e => {
                let t = x(e)
                  , r = w(e);
                m.done = Math.abs(t) <= u,
                m.value = m.done ? b : r
            }
              , T = e => {
                f(m.value) && (h = e,
                c = tZ({
                    keyframes: [m.value, v(m.value)],
                    velocity: t_(w, e, m.value),
                    damping: n,
                    stiffness: o,
                    restDelta: u,
                    restSpeed: d
                }))
            }
            ;
            return T(0),
            {
                calculatedDuration: null,
                next: e => {
                    let t = !1;
                    return (c || void 0 !== h || (t = !0,
                    S(e),
                    T(e)),
                    void 0 !== h && e >= h) ? c.next(e - h) : (t || S(e),
                    m)
                }
            }
        }
        let tJ = ec(.42, 0, 1, 1)
          , t0 = ec(0, 0, .58, 1)
          , t1 = ec(.42, 0, .58, 1)
          , t2 = e => Array.isArray(e) && "number" != typeof e[0]
          , t5 = {
            linear: N,
            easeIn: tJ,
            easeInOut: t1,
            easeOut: t0,
            circIn: eb,
            circInOut: ew,
            circOut: ex,
            backIn: ev,
            backInOut: eg,
            backOut: ef,
            anticipate: ey
        }
          , t3 = e => {
            if (f(e)) {
                N(4 === e.length, "Cubic bezier arrays must contain four numerical values.");
                let[t,r,i,n] = e;
                return ec(t, r, i, n)
            }
            return "string" == typeof e ? (N(void 0 !== t5[e], `Invalid easing type '${e}'`),
            t5[e]) : e
        }
        ;
        function t4({duration: e=300, keyframes: t, times: r, ease: i="easeInOut"}) {
            let n = t2(i) ? i.map(t3) : t3(i)
              , o = {
                done: !1,
                value: t[0]
            }
              , s = function(e, t, {clamp: r=!0, ease: i, mixer: n}={}) {
                let o = e.length;
                if (N(o === t.length, "Both input and output ranges must be the same length"),
                1 === o)
                    return () => t[0];
                if (2 === o && t[0] === t[1])
                    return () => t[1];
                let s = e[0] === e[1];
                e[0] > e[o - 1] && (e = [...e].reverse(),
                t = [...t].reverse());
                let a = function(e, t, r) {
                    let i = []
                      , n = r || tH
                      , o = e.length - 1;
                    for (let r = 0; r < o; r++) {
                        let o = n(e[r], e[r + 1]);
                        t && (o = tI(Array.isArray(t) ? t[r] || N : t, o)),
                        i.push(o)
                    }
                    return i
                }(t, i, n)
                  , l = a.length
                  , u = r => {
                    if (s && r < e[0])
                        return t[0];
                    let i = 0;
                    if (l > 1)
                        for (; i < e.length - 2 && !(r < e[i + 1]); i++)
                            ;
                    let n = y(e[i], e[i + 1], r);
                    return a[i](n)
                }
                ;
                return r ? t => u(eT(e[0], e[o - 1], t)) : u
            }((r && r.length === t.length ? r : function(e) {
                let t = [0];
                return function(e, t) {
                    let r = e[e.length - 1];
                    for (let i = 1; i <= t; i++) {
                        let n = y(0, t, i);
                        e.push(tk(r, 1, n))
                    }
                }(t, e.length - 1),
                t
            }(t)).map(t => t * e), t, {
                ease: Array.isArray(n) ? n : t.map( () => n || t1).splice(0, t.length - 1)
            });
            return {
                calculatedDuration: e,
                next: t => (o.value = s(t),
                o.done = t >= e,
                o)
            }
        }
        let t6 = e => {
            let t = ({timestamp: t}) => e(t);
            return {
                start: () => G.update(t, !0),
                stop: () => Y(t),
                now: () => K.isProcessing ? K.timestamp : Q.now()
            }
        }
          , t7 = {
            decay: tQ,
            inertia: tQ,
            tween: t4,
            keyframes: t4,
            spring: tZ
        }
          , t9 = e => e / 100;
        class t8 extends tE {
            constructor(e) {
                super(e),
                this.holdTime = null,
                this.cancelTime = null,
                this.currentTime = 0,
                this.playbackSpeed = 1,
                this.pendingPlayState = "running",
                this.startTime = null,
                this.state = "idle",
                this.stop = () => {
                    if (this.resolver.cancel(),
                    this.isStopped = !0,
                    "idle" === this.state)
                        return;
                    this.teardown();
                    let {onStop: e} = this.options;
                    e && e()
                }
                ;
                let {name: t, motionValue: r, element: i, keyframes: n} = this.options
                  , o = (null == i ? void 0 : i.KeyframeResolver) || th;
                this.resolver = new o(n, (e, t) => this.onKeyframesResolved(e, t),t,r,i),
                this.resolver.scheduleResolve()
            }
            flatten() {
                super.flatten(),
                this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
            }
            initPlayback(e) {
                let t, r;
                let {type: i="keyframes", repeat: n=0, repeatDelay: o=0, repeatType: s, velocity: a=0} = this.options
                  , l = p(i) ? i : t7[i] || t4;
                l !== t4 && "number" != typeof e[0] && (t = tI(t9, tH(e[0], e[1])),
                e = [0, 100]);
                let u = l({
                    ...this.options,
                    keyframes: e
                });
                "mirror" === s && (r = l({
                    ...this.options,
                    keyframes: [...e].reverse(),
                    velocity: -a
                })),
                null === u.calculatedDuration && (u.calculatedDuration = c(u));
                let {calculatedDuration: d} = u
                  , h = d + o;
                return {
                    generator: u,
                    mirroredGenerator: r,
                    mapPercentToKeyframes: t,
                    calculatedDuration: d,
                    resolvedDuration: h,
                    totalDuration: h * (n + 1) - o
                }
            }
            onPostResolved() {
                let {autoplay: e=!0} = this.options;
                tC.mainThread++,
                this.play(),
                "paused" !== this.pendingPlayState && e ? this.state = this.pendingPlayState : this.pause()
            }
            tick(e, t=!1) {
                let {resolved: r} = this;
                if (!r) {
                    let {keyframes: e} = this.options;
                    return {
                        done: !0,
                        value: e[e.length - 1]
                    }
                }
                let {finalKeyframe: i, generator: n, mirroredGenerator: o, mapPercentToKeyframes: s, keyframes: a, calculatedDuration: l, totalDuration: u, resolvedDuration: d} = r;
                if (null === this.startTime)
                    return n.next(0);
                let {delay: h, repeat: c, repeatType: p, repeatDelay: m, onUpdate: f} = this.options;
                this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - u / this.speed, this.startTime)),
                t ? this.currentTime = e : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
                let v = this.currentTime - h * (this.speed >= 0 ? 1 : -1)
                  , g = this.speed >= 0 ? v < 0 : v > u;
                this.currentTime = Math.max(v, 0),
                "finished" === this.state && null === this.holdTime && (this.currentTime = u);
                let y = this.currentTime
                  , b = n;
                if (c) {
                    let e = Math.min(this.currentTime, u) / d
                      , t = Math.floor(e)
                      , r = e % 1;
                    !r && e >= 1 && (r = 1),
                    1 === r && t--,
                    (t = Math.min(t, c + 1)) % 2 && ("reverse" === p ? (r = 1 - r,
                    m && (r -= m / d)) : "mirror" === p && (b = o)),
                    y = eT(0, 1, r) * d
                }
                let x = g ? {
                    done: !1,
                    value: a[0]
                } : b.next(y);
                s && (x.value = s(x.value));
                let {done: w} = x;
                g || null === l || (w = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
                let S = null === this.holdTime && ("finished" === this.state || "running" === this.state && w);
                return S && void 0 !== i && (x.value = tA(a, this.options, i)),
                f && f(x.value),
                S && this.finish(),
                x
            }
            get duration() {
                let {resolved: e} = this;
                return e ? F(e.calculatedDuration) : 0
            }
            get time() {
                return F(this.currentTime)
            }
            set time(e) {
                e = L(e),
                this.currentTime = e,
                null !== this.holdTime || 0 === this.speed ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed)
            }
            get speed() {
                return this.playbackSpeed
            }
            set speed(e) {
                let t = this.playbackSpeed !== e;
                this.playbackSpeed = e,
                t && (this.time = F(this.currentTime))
            }
            play() {
                if (this.resolver.isScheduled || this.resolver.resume(),
                !this._resolved) {
                    this.pendingPlayState = "running";
                    return
                }
                if (this.isStopped)
                    return;
                let {driver: e=t6, onPlay: t, startTime: r} = this.options;
                this.driver || (this.driver = e(e => this.tick(e))),
                t && t();
                let i = this.driver.now();
                null !== this.holdTime ? this.startTime = i - this.holdTime : this.startTime ? "finished" === this.state && (this.startTime = i) : this.startTime = null != r ? r : this.calcStartTime(),
                "finished" === this.state && this.updateFinishedPromise(),
                this.cancelTime = this.startTime,
                this.holdTime = null,
                this.state = "running",
                this.driver.start()
            }
            pause() {
                var e;
                if (!this._resolved) {
                    this.pendingPlayState = "paused";
                    return
                }
                this.state = "paused",
                this.holdTime = null !== (e = this.currentTime) && void 0 !== e ? e : 0
            }
            complete() {
                "running" !== this.state && this.play(),
                this.pendingPlayState = this.state = "finished",
                this.holdTime = null
            }
            finish() {
                this.teardown(),
                this.state = "finished";
                let {onComplete: e} = this.options;
                e && e()
            }
            cancel() {
                null !== this.cancelTime && this.tick(this.cancelTime),
                this.teardown(),
                this.updateFinishedPromise()
            }
            teardown() {
                this.state = "idle",
                this.stopDriver(),
                this.resolveFinishedPromise(),
                this.updateFinishedPromise(),
                this.startTime = this.cancelTime = null,
                this.resolver.cancel(),
                tC.mainThread--
            }
            stopDriver() {
                this.driver && (this.driver.stop(),
                this.driver = void 0)
            }
            sample(e) {
                return this.startTime = 0,
                this.tick(e, !0)
            }
        }
        let re = new Set(["opacity", "clipPath", "filter", "transform"])
          , rt = a( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
          , rr = {
            anticipate: ey,
            backInOut: eg,
            circInOut: ew
        };
        class ri extends tE {
            constructor(e) {
                super(e);
                let {name: t, motionValue: r, element: i, keyframes: n} = this.options;
                this.resolver = new tS(n, (e, t) => this.onKeyframesResolved(e, t),t,r,i),
                this.resolver.scheduleResolve()
            }
            initPlayback(e, t) {
                var r;
                let {duration: i=300, times: n, ease: o, type: s, motionValue: a, name: l, startTime: u} = this.options;
                if (!a.owner || !a.owner.current)
                    return !1;
                if ("string" == typeof o && g() && o in rr && (o = rr[o]),
                p((r = this.options).type) || "spring" === r.type || !function e(t) {
                    return !!("function" == typeof t && g() || !t || "string" == typeof t && (t in w || g()) || f(t) || Array.isArray(t) && t.every(e))
                }(r.ease)) {
                    let {onComplete: t, onUpdate: r, motionValue: a, element: l, ...u} = this.options
                      , d = function(e, t) {
                        let r = new t8({
                            ...t,
                            keyframes: e,
                            repeat: 0,
                            delay: 0,
                            isGenerator: !0
                        })
                          , i = {
                            done: !1,
                            value: e[0]
                        }
                          , n = []
                          , o = 0;
                        for (; !i.done && o < 2e4; )
                            n.push((i = r.sample(o)).value),
                            o += 10;
                        return {
                            times: void 0,
                            keyframes: n,
                            duration: o - 10,
                            ease: "linear"
                        }
                    }(e, u);
                    1 === (e = d.keyframes).length && (e[1] = e[0]),
                    i = d.duration,
                    n = d.times,
                    o = d.ease,
                    s = "keyframes"
                }
                let d = function(e, t, r, {delay: i=0, duration: n=300, repeat: o=0, repeatType: s="loop", ease: a="easeInOut", times: l}={}) {
                    let u = {
                        [t]: r
                    };
                    l && (u.offset = l);
                    let d = function e(t, r) {
                        if (t)
                            return "function" == typeof t && g() ? b(t, r) : f(t) ? x(t) : Array.isArray(t) ? t.map(t => e(t, r) || w.easeOut) : w[t]
                    }(a, n);
                    Array.isArray(d) && (u.easing = d),
                    _.value && tC.waapi++;
                    let h = e.animate(u, {
                        delay: i,
                        duration: n,
                        easing: Array.isArray(d) ? "linear" : d,
                        fill: "both",
                        iterations: o + 1,
                        direction: "reverse" === s ? "alternate" : "normal"
                    });
                    return _.value && h.finished.finally( () => {
                        tC.waapi--
                    }
                    ),
                    h
                }(a.owner.current, l, e, {
                    ...this.options,
                    duration: i,
                    times: n,
                    ease: o
                });
                return d.startTime = null != u ? u : this.calcStartTime(),
                this.pendingTimeline ? (m(d, this.pendingTimeline),
                this.pendingTimeline = void 0) : d.onfinish = () => {
                    let {onComplete: r} = this.options;
                    a.set(tA(e, this.options, t)),
                    r && r(),
                    this.cancel(),
                    this.resolveFinishedPromise()
                }
                ,
                {
                    animation: d,
                    duration: i,
                    times: n,
                    type: s,
                    ease: o,
                    keyframes: e
                }
            }
            get duration() {
                let {resolved: e} = this;
                if (!e)
                    return 0;
                let {duration: t} = e;
                return F(t)
            }
            get time() {
                let {resolved: e} = this;
                if (!e)
                    return 0;
                let {animation: t} = e;
                return F(t.currentTime || 0)
            }
            set time(e) {
                let {resolved: t} = this;
                if (!t)
                    return;
                let {animation: r} = t;
                r.currentTime = L(e)
            }
            get speed() {
                let {resolved: e} = this;
                if (!e)
                    return 1;
                let {animation: t} = e;
                return t.playbackRate
            }
            set speed(e) {
                let {resolved: t} = this;
                if (!t)
                    return;
                let {animation: r} = t;
                r.playbackRate = e
            }
            get state() {
                let {resolved: e} = this;
                if (!e)
                    return "idle";
                let {animation: t} = e;
                return t.playState
            }
            get startTime() {
                let {resolved: e} = this;
                if (!e)
                    return null;
                let {animation: t} = e;
                return t.startTime
            }
            attachTimeline(e) {
                if (this._resolved) {
                    let {resolved: t} = this;
                    if (!t)
                        return N;
                    let {animation: r} = t;
                    m(r, e)
                } else
                    this.pendingTimeline = e;
                return N
            }
            play() {
                if (this.isStopped)
                    return;
                let {resolved: e} = this;
                if (!e)
                    return;
                let {animation: t} = e;
                "finished" === t.playState && this.updateFinishedPromise(),
                t.play()
            }
            pause() {
                let {resolved: e} = this;
                if (!e)
                    return;
                let {animation: t} = e;
                t.pause()
            }
            stop() {
                if (this.resolver.cancel(),
                this.isStopped = !0,
                "idle" === this.state)
                    return;
                this.resolveFinishedPromise(),
                this.updateFinishedPromise();
                let {resolved: e} = this;
                if (!e)
                    return;
                let {animation: t, keyframes: r, duration: i, type: n, ease: o, times: s} = e;
                if ("idle" === t.playState || "finished" === t.playState)
                    return;
                if (this.time) {
                    let {motionValue: e, onUpdate: t, onComplete: a, element: l, ...u} = this.options
                      , d = new t8({
                        ...u,
                        keyframes: r,
                        duration: i,
                        type: n,
                        ease: o,
                        times: s,
                        isGenerator: !0
                    })
                      , h = L(this.time);
                    e.setWithVelocity(d.sample(h - 10).value, d.sample(h).value, 10)
                }
                let {onStop: a} = this.options;
                a && a(),
                this.cancel()
            }
            complete() {
                let {resolved: e} = this;
                e && e.animation.finish()
            }
            cancel() {
                let {resolved: e} = this;
                e && e.animation.cancel()
            }
            static supports(e) {
                let {motionValue: t, name: r, repeatDelay: i, repeatType: n, damping: o, type: s} = e;
                if (!t || !t.owner || !(t.owner.current instanceof HTMLElement))
                    return !1;
                let {onUpdate: a, transformTemplate: l} = t.owner.getProps();
                return rt() && r && re.has(r) && !a && !l && !i && "mirror" !== n && 0 !== o && "inertia" !== s
            }
        }
        let rn = {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        }
          , ro = e => ({
            type: "spring",
            stiffness: 550,
            damping: 0 === e ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
        })
          , rs = {
            type: "keyframes",
            duration: .8
        }
          , ra = {
            type: "keyframes",
            ease: [.25, .1, .35, 1],
            duration: .3
        }
          , rl = (e, {keyframes: t}) => t.length > 2 ? rs : O.has(e) ? e.startsWith("scale") ? ro(t[1]) : rn : ra
          , ru = (e, t, r, i={}, n, o) => s => {
            let a = h(i, e) || {}
              , l = a.delay || i.delay || 0
              , {elapsed: u=0} = i;
            u -= L(l);
            let c = {
                keyframes: Array.isArray(r) ? r : [null, r],
                ease: "easeOut",
                velocity: t.getVelocity(),
                ...a,
                delay: -u,
                onUpdate: e => {
                    t.set(e),
                    a.onUpdate && a.onUpdate(e)
                }
                ,
                onComplete: () => {
                    s(),
                    a.onComplete && a.onComplete()
                }
                ,
                name: e,
                motionValue: t,
                element: o ? void 0 : n
            };
            !function({when: e, delay: t, delayChildren: r, staggerChildren: i, staggerDirection: n, repeat: o, repeatType: s, repeatDelay: a, from: l, elapsed: u, ...d}) {
                return !!Object.keys(d).length
            }(a) && (c = {
                ...c,
                ...rl(e, c)
            }),
            c.duration && (c.duration = L(c.duration)),
            c.repeatDelay && (c.repeatDelay = L(c.repeatDelay)),
            void 0 !== c.from && (c.keyframes[0] = c.from);
            let p = !1;
            if (!1 !== c.type && (0 !== c.duration || c.repeatDelay) || (c.duration = 0,
            0 !== c.delay || (p = !0)),
            (ed.current || W.skipAnimations) && (p = !0,
            c.duration = 0,
            c.delay = 0),
            p && !o && void 0 !== t.get()) {
                let e = tA(c.keyframes, a);
                if (void 0 !== e)
                    return G.update( () => {
                        c.onUpdate(e),
                        c.onComplete()
                    }
                    ),
                    new d([])
            }
            return !o && ri.supports(c) ? new ri(c) : new t8(c)
        }
        ;
        function rd(e, t, {delay: r=0, transitionOverride: i, type: n}={}) {
            var o;
            let {transition: a=e.getDefaultTransition(), transitionEnd: l, ...u} = t;
            i && (a = i);
            let d = []
              , c = n && e.animationState && e.animationState.getState()[n];
            for (let t in u) {
                let i = e.getValue(t, null !== (o = e.latestValues[t]) && void 0 !== o ? o : null)
                  , n = u[t];
                if (void 0 === n || c && function({protectedKeys: e, needsAnimating: t}, r) {
                    let i = e.hasOwnProperty(r) && !0 !== t[r];
                    return t[r] = !1,
                    i
                }(c, t))
                    continue;
                let s = {
                    delay: r,
                    ...h(a || {}, t)
                }
                  , l = !1;
                if (window.MotionHandoffAnimation) {
                    let r = e.props[eu];
                    if (r) {
                        let e = window.MotionHandoffAnimation(r, t, G);
                        null !== e && (s.startTime = e,
                        l = !0)
                    }
                }
                ea(e, t),
                i.start(ru(t, i, n, e.shouldReduceMotion && B.has(t) ? {
                    type: !1
                } : s, e, l));
                let p = i.animation;
                p && d.push(p)
            }
            return l && Promise.all(d).then( () => {
                G.update( () => {
                    l && function(e, t) {
                        let {transitionEnd: r={}, transition: i={}, ...n} = s(e, t) || {};
                        for (let t in n = {
                            ...n,
                            ...r
                        }) {
                            let r = $(n[t]);
                            e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, eo(r))
                        }
                    }(e, l)
                }
                )
            }
            ),
            d
        }
        function rh(e, t, r={}) {
            var i;
            let n = s(e, t, "exit" === r.type ? null === (i = e.presenceContext) || void 0 === i ? void 0 : i.custom : void 0)
              , {transition: o=e.getDefaultTransition() || {}} = n || {};
            r.transitionOverride && (o = r.transitionOverride);
            let a = n ? () => Promise.all(rd(e, n, r)) : () => Promise.resolve()
              , l = e.variantChildren && e.variantChildren.size ? (i=0) => {
                let {delayChildren: n=0, staggerChildren: s, staggerDirection: a} = o;
                return function(e, t, r=0, i=0, n=1, o) {
                    let s = []
                      , a = (e.variantChildren.size - 1) * i
                      , l = 1 === n ? (e=0) => e * i : (e=0) => a - e * i;
                    return Array.from(e.variantChildren).sort(rc).forEach( (e, i) => {
                        e.notify("AnimationStart", t),
                        s.push(rh(e, t, {
                            ...o,
                            delay: r + l(i)
                        }).then( () => e.notify("AnimationComplete", t)))
                    }
                    ),
                    Promise.all(s)
                }(e, t, n + i, s, a, r)
            }
            : () => Promise.resolve()
              , {when: u} = o;
            if (!u)
                return Promise.all([a(), l(r.delay)]);
            {
                let[e,t] = "beforeChildren" === u ? [a, l] : [l, a];
                return e().then( () => t())
            }
        }
        function rc(e, t) {
            return e.sortNodePosition(t)
        }
        function rp(e, t) {
            if (!Array.isArray(t))
                return !1;
            let r = t.length;
            if (r !== e.length)
                return !1;
            for (let i = 0; i < r; i++)
                if (t[i] !== e[i])
                    return !1;
            return !0
        }
        function rm(e) {
            return "string" == typeof e || Array.isArray(e)
        }
        let rf = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
          , rv = ["initial", ...rf]
          , rg = rv.length
          , ry = [...rf].reverse()
          , rb = rf.length;
        function rx(e=!1) {
            return {
                isActive: e,
                protectedKeys: {},
                needsAnimating: {},
                prevResolvedValues: {}
            }
        }
        function rw() {
            return {
                animate: rx(!0),
                whileInView: rx(),
                whileHover: rx(),
                whileTap: rx(),
                whileDrag: rx(),
                whileFocus: rx(),
                exit: rx()
            }
        }
        class rS {
            constructor(e) {
                this.isMounted = !1,
                this.node = e
            }
            update() {}
        }
        class rT extends rS {
            constructor(e) {
                super(e),
                e.animationState || (e.animationState = function(e) {
                    let t = t => Promise.all(t.map( ({animation: t, options: r}) => (function(e, t, r={}) {
                        let i;
                        if (e.notify("AnimationStart", t),
                        Array.isArray(t))
                            i = Promise.all(t.map(t => rh(e, t, r)));
                        else if ("string" == typeof t)
                            i = rh(e, t, r);
                        else {
                            let n = "function" == typeof t ? s(e, t, r.custom) : t;
                            i = Promise.all(rd(e, n, r))
                        }
                        return i.then( () => {
                            e.notify("AnimationComplete", t)
                        }
                        )
                    }
                    )(e, t, r)))
                      , r = rw()
                      , i = !0
                      , o = t => (r, i) => {
                        var n;
                        let o = s(e, i, "exit" === t ? null === (n = e.presenceContext) || void 0 === n ? void 0 : n.custom : void 0);
                        if (o) {
                            let {transition: e, transitionEnd: t, ...i} = o;
                            r = {
                                ...r,
                                ...i,
                                ...t
                            }
                        }
                        return r
                    }
                    ;
                    function a(a) {
                        let {props: l} = e
                          , u = function e(t) {
                            if (!t)
                                return;
                            if (!t.isControllingVariants) {
                                let r = t.parent && e(t.parent) || {};
                                return void 0 !== t.props.initial && (r.initial = t.props.initial),
                                r
                            }
                            let r = {};
                            for (let e = 0; e < rg; e++) {
                                let i = rv[e]
                                  , n = t.props[i];
                                (rm(n) || !1 === n) && (r[i] = n)
                            }
                            return r
                        }(e.parent) || {}
                          , d = []
                          , h = new Set
                          , c = {}
                          , p = 1 / 0;
                        for (let t = 0; t < rb; t++) {
                            var m;
                            let s = ry[t]
                              , f = r[s]
                              , v = void 0 !== l[s] ? l[s] : u[s]
                              , g = rm(v)
                              , y = s === a ? f.isActive : null;
                            !1 === y && (p = t);
                            let b = v === u[s] && v !== l[s] && g;
                            if (b && i && e.manuallyAnimateOnMount && (b = !1),
                            f.protectedKeys = {
                                ...c
                            },
                            !f.isActive && null === y || !v && !f.prevProp || n(v) || "boolean" == typeof v)
                                continue;
                            let x = (m = f.prevProp,
                            "string" == typeof v ? v !== m : !!Array.isArray(v) && !rp(v, m))
                              , w = x || s === a && f.isActive && !b && g || t > p && g
                              , S = !1
                              , T = Array.isArray(v) ? v : [v]
                              , P = T.reduce(o(s), {});
                            !1 === y && (P = {});
                            let {prevResolvedValues: A={}} = f
                              , E = {
                                ...A,
                                ...P
                            }
                              , C = t => {
                                w = !0,
                                h.has(t) && (S = !0,
                                h.delete(t)),
                                f.needsAnimating[t] = !0;
                                let r = e.getValue(t);
                                r && (r.liveStyle = !1)
                            }
                            ;
                            for (let e in E) {
                                let t = P[e]
                                  , r = A[e];
                                if (!c.hasOwnProperty(e))
                                    (z(t) && z(r) ? rp(t, r) : t === r) ? void 0 !== t && h.has(e) ? C(e) : f.protectedKeys[e] = !0 : null != t ? C(e) : h.add(e)
                            }
                            f.prevProp = v,
                            f.prevResolvedValues = P,
                            f.isActive && (c = {
                                ...c,
                                ...P
                            }),
                            i && e.blockInitialAnimation && (w = !1);
                            let k = !(b && x) || S;
                            w && k && d.push(...T.map(e => ({
                                animation: e,
                                options: {
                                    type: s
                                }
                            })))
                        }
                        if (h.size) {
                            let t = {};
                            if ("boolean" != typeof l.initial) {
                                let r = s(e, Array.isArray(l.initial) ? l.initial[0] : l.initial);
                                r && r.transition && (t.transition = r.transition)
                            }
                            h.forEach(r => {
                                let i = e.getBaseTarget(r)
                                  , n = e.getValue(r);
                                n && (n.liveStyle = !0),
                                t[r] = null != i ? i : null
                            }
                            ),
                            d.push({
                                animation: t
                            })
                        }
                        let f = !!d.length;
                        return i && (!1 === l.initial || l.initial === l.animate) && !e.manuallyAnimateOnMount && (f = !1),
                        i = !1,
                        f ? t(d) : Promise.resolve()
                    }
                    return {
                        animateChanges: a,
                        setActive: function(t, i) {
                            var n;
                            if (r[t].isActive === i)
                                return Promise.resolve();
                            null === (n = e.variantChildren) || void 0 === n || n.forEach(e => {
                                var r;
                                return null === (r = e.animationState) || void 0 === r ? void 0 : r.setActive(t, i)
                            }
                            ),
                            r[t].isActive = i;
                            let o = a(t);
                            for (let e in r)
                                r[e].protectedKeys = {};
                            return o
                        },
                        setAnimateFunction: function(r) {
                            t = r(e)
                        },
                        getState: () => r,
                        reset: () => {
                            r = rw(),
                            i = !0
                        }
                    }
                }(e))
            }
            updateAnimationControlsSubscription() {
                let {animate: e} = this.node.getProps();
                n(e) && (this.unmountControls = e.subscribe(this.node))
            }
            mount() {
                this.updateAnimationControlsSubscription()
            }
            update() {
                let {animate: e} = this.node.getProps()
                  , {animate: t} = this.node.prevProps || {};
                e !== t && this.updateAnimationControlsSubscription()
            }
            unmount() {
                var e;
                this.node.animationState.reset(),
                null === (e = this.unmountControls) || void 0 === e || e.call(this)
            }
        }
        let rP = 0;
        class rA extends rS {
            constructor() {
                super(...arguments),
                this.id = rP++
            }
            update() {
                if (!this.node.presenceContext)
                    return;
                let {isPresent: e, onExitComplete: t} = this.node.presenceContext
                  , {isPresent: r} = this.node.prevPresenceContext || {};
                if (!this.node.animationState || e === r)
                    return;
                let i = this.node.animationState.setActive("exit", !e);
                t && !e && i.then( () => {
                    t(this.id)
                }
                )
            }
            mount() {
                let {register: e, onExitComplete: t} = this.node.presenceContext || {};
                t && t(this.id),
                e && (this.unmount = e(this.id))
            }
            unmount() {}
        }
        function rE(e, t, r, i={
            passive: !0
        }) {
            return e.addEventListener(t, r, i),
            () => e.removeEventListener(t, r)
        }
        function rC(e) {
            return {
                point: {
                    x: e.pageX,
                    y: e.pageY
                }
            }
        }
        let rk = e => t => C(t) && e(t, rC(t));
        function rM(e, t, r, i) {
            return rE(e, t, rk(r), i)
        }
        function rR({top: e, left: t, right: r, bottom: i}) {
            return {
                x: {
                    min: t,
                    max: r
                },
                y: {
                    min: e,
                    max: i
                }
            }
        }
        function rD(e) {
            return e.max - e.min
        }
        function rj(e, t, r, i=.5) {
            e.origin = i,
            e.originPoint = tk(t.min, t.max, e.origin),
            e.scale = rD(r) / rD(t),
            e.translate = tk(r.min, r.max, e.origin) - e.originPoint,
            (e.scale >= .9999 && e.scale <= 1.0001 || isNaN(e.scale)) && (e.scale = 1),
            (e.translate >= -.01 && e.translate <= .01 || isNaN(e.translate)) && (e.translate = 0)
        }
        function rV(e, t, r, i) {
            rj(e.x, t.x, r.x, i ? i.originX : void 0),
            rj(e.y, t.y, r.y, i ? i.originY : void 0)
        }
        function rL(e, t, r) {
            e.min = r.min + t.min,
            e.max = e.min + rD(t)
        }
        function rF(e, t, r) {
            e.min = t.min - r.min,
            e.max = e.min + rD(t)
        }
        function rN(e, t, r) {
            rF(e.x, t.x, r.x),
            rF(e.y, t.y, r.y)
        }
        let rI = () => ({
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
        })
          , rO = () => ({
            x: rI(),
            y: rI()
        })
          , rB = () => ({
            min: 0,
            max: 0
        })
          , rz = () => ({
            x: rB(),
            y: rB()
        });
        function rU(e) {
            return [e("x"), e("y")]
        }
        function r$(e) {
            return void 0 === e || 1 === e
        }
        function rW({scale: e, scaleX: t, scaleY: r}) {
            return !r$(e) || !r$(t) || !r$(r)
        }
        function rH(e) {
            return rW(e) || r_(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
        }
        function r_(e) {
            var t, r;
            return (t = e.x) && "0%" !== t || (r = e.y) && "0%" !== r
        }
        function rX(e, t, r, i, n) {
            return void 0 !== n && (e = i + n * (e - i)),
            i + r * (e - i) + t
        }
        function rG(e, t=0, r=1, i, n) {
            e.min = rX(e.min, t, r, i, n),
            e.max = rX(e.max, t, r, i, n)
        }
        function rY(e, {x: t, y: r}) {
            rG(e.x, t.translate, t.scale, t.originPoint),
            rG(e.y, r.translate, r.scale, r.originPoint)
        }
        function rK(e, t) {
            e.min = e.min + t,
            e.max = e.max + t
        }
        function rq(e, t, r, i, n=.5) {
            let o = tk(e.min, e.max, n);
            rG(e, t, r, o, i)
        }
        function rZ(e, t) {
            rq(e.x, t.x, t.scaleX, t.scale, t.originX),
            rq(e.y, t.y, t.scaleY, t.scale, t.originY)
        }
        function rQ(e, t) {
            return rR(function(e, t) {
                if (!t)
                    return e;
                let r = t({
                    x: e.left,
                    y: e.top
                })
                  , i = t({
                    x: e.right,
                    y: e.bottom
                });
                return {
                    top: r.y,
                    left: r.x,
                    bottom: i.y,
                    right: i.x
                }
            }(e.getBoundingClientRect(), t))
        }
        function rJ(e) {
            return e && "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current")
        }
        let r0 = (e, t) => Math.abs(e - t);
        class r1 {
            constructor(e, t, {transformPagePoint: r, dragSnapToOrigin: i=!1}={}) {
                if (this.startEvent = null,
                this.lastMoveEvent = null,
                this.lastMoveEventInfo = null,
                this.handlers = {},
                this.updatePoint = () => {
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let e = r3(this.lastMoveEventInfo, this.history)
                      , t = null !== this.startEvent
                      , r = function(e, t) {
                        return Math.sqrt(r0(e.x, t.x) ** 2 + r0(e.y, t.y) ** 2)
                    }(e.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                    if (!t && !r)
                        return;
                    let {point: i} = e
                      , {timestamp: n} = K;
                    this.history.push({
                        ...i,
                        timestamp: n
                    });
                    let {onStart: o, onMove: s} = this.handlers;
                    t || (o && o(this.lastMoveEvent, e),
                    this.startEvent = this.lastMoveEvent),
                    s && s(this.lastMoveEvent, e)
                }
                ,
                this.handlePointerMove = (e, t) => {
                    if (this.index = r6(e.currentTarget),
                    e.target instanceof Element && e.target.hasPointerCapture && void 0 !== e.pointerId)
                        try {
                            if (!e.target.hasPointerCapture(e.pointerId))
                                return
                        } catch (e) {}
                    this.lastMoveEvent = e,
                    this.lastMoveEventInfo = r2(t, this.transformPagePoint),
                    G.update(this.updatePoint, !0)
                }
                ,
                this.handlePointerUp = (e, t) => {
                    A(e, "release"),
                    this.end();
                    let {onEnd: r, onSessionEnd: i, resumeAnimation: n} = this.handlers;
                    if (this.dragSnapToOrigin && n && n(),
                    !(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let o = r3("pointercancel" === e.type || "lostpointercapture" === e.type ? this.lastMoveEventInfo : r2(t, this.transformPagePoint), this.history);
                    this.startEvent && r && r(e, o),
                    i && i(e, o)
                }
                ,
                !C(e))
                    return;
                this.dragSnapToOrigin = i,
                this.handlers = t,
                this.transformPagePoint = r;
                let n = r2(rC(e), this.transformPagePoint)
                  , {point: o} = n
                  , {timestamp: s} = K;
                this.history = [{
                    ...o,
                    timestamp: s
                }];
                let {onSessionStart: a} = t;
                a && a(e, r3(n, this.history)),
                A(e, "set"),
                this.removeListeners = tI(rM(e.currentTarget, "pointermove", this.handlePointerMove), rM(e.currentTarget, "pointerup", this.handlePointerUp), rM(e.currentTarget, "pointercancel", this.handlePointerUp), rM(e.currentTarget, "lostpointercapture", (e, t) => {
                    r6(e.currentTarget) !== this.index ? A(e, "set") : this.handlePointerUp(e, t)
                }
                ))
            }
            updateHandlers(e) {
                this.handlers = e
            }
            end() {
                this.removeListeners && this.removeListeners(),
                Y(this.updatePoint)
            }
        }
        function r2(e, t) {
            return t ? {
                point: t(e.point)
            } : e
        }
        function r5(e, t) {
            return {
                x: e.x - t.x,
                y: e.y - t.y
            }
        }
        function r3({point: e}, t) {
            return {
                point: e,
                delta: r5(e, r4(t)),
                offset: r5(e, t[0]),
                velocity: function(e, t) {
                    if (e.length < 2)
                        return {
                            x: 0,
                            y: 0
                        };
                    let r = e.length - 1
                      , i = null
                      , n = r4(e);
                    for (; r >= 0 && (i = e[r],
                    !(n.timestamp - i.timestamp > L(.1))); )
                        r--;
                    if (!i)
                        return {
                            x: 0,
                            y: 0
                        };
                    let o = F(n.timestamp - i.timestamp);
                    if (0 === o)
                        return {
                            x: 0,
                            y: 0
                        };
                    let s = {
                        x: (n.x - i.x) / o,
                        y: (n.y - i.y) / o
                    };
                    return s.x === 1 / 0 && (s.x = 0),
                    s.y === 1 / 0 && (s.y = 0),
                    s
                }(t, 0)
            }
        }
        function r4(e) {
            return e[e.length - 1]
        }
        function r6(e) {
            return e.parentNode ? Array.from(e.parentNode.children).indexOf(e) : -1
        }
        function r7(e, t, r) {
            return {
                min: void 0 !== t ? e.min + t : void 0,
                max: void 0 !== r ? e.max + r - (e.max - e.min) : void 0
            }
        }
        function r9(e, t) {
            let r = t.min - e.min
              , i = t.max - e.max;
            return t.max - t.min < e.max - e.min && ([r,i] = [i, r]),
            {
                min: r,
                max: i
            }
        }
        function r8(e, t, r) {
            return {
                min: ie(e, t),
                max: ie(e, r)
            }
        }
        function ie(e, t) {
            return "number" == typeof e ? e : e[t] || 0
        }
        let it = new WeakMap;
        class ir {
            constructor(e) {
                this.openDragLock = null,
                this.isDragging = !1,
                this.currentDirection = null,
                this.originPoint = {
                    x: 0,
                    y: 0
                },
                this.constraints = !1,
                this.hasMutatedConstraints = !1,
                this.elastic = rz(),
                this.visualElement = e
            }
            start(e, {snapToCursor: t=!1}={}) {
                let {presenceContext: r} = this.visualElement;
                if (r && !1 === r.isPresent)
                    return;
                let {dragSnapToOrigin: i} = this.getProps();
                this.panSession = new r1(e,{
                    onSessionStart: e => {
                        let {dragSnapToOrigin: r} = this.getProps();
                        r ? this.pauseAnimation() : this.stopAnimation(),
                        t && this.snapToCursor(rC(e).point)
                    }
                    ,
                    onStart: (e, t) => {
                        let {drag: r, dragPropagation: i, onDragStart: n} = this.getProps();
                        if (r && !i && (this.openDragLock && this.openDragLock(),
                        this.openDragLock = "x" === r || "y" === r ? S[r] ? null : (S[r] = !0,
                        () => {
                            S[r] = !1
                        }
                        ) : S.x || S.y ? null : (S.x = S.y = !0,
                        () => {
                            S.x = S.y = !1
                        }
                        ),
                        !this.openDragLock))
                            return;
                        this.isDragging = !0,
                        this.currentDirection = null,
                        this.resolveConstraints(),
                        this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                        this.visualElement.projection.target = void 0),
                        rU(e => {
                            let t = this.getAxisMotionValue(e).get() || 0;
                            if (eO.test(t)) {
                                let {projection: r} = this.visualElement;
                                if (r && r.layout) {
                                    let i = r.layout.layoutBox[e];
                                    i && (t = rD(i) * (parseFloat(t) / 100))
                                }
                            }
                            this.originPoint[e] = t
                        }
                        ),
                        n && G.postRender( () => n(e, t)),
                        ea(this.visualElement, "transform");
                        let {animationState: o} = this.visualElement;
                        o && o.setActive("whileDrag", !0)
                    }
                    ,
                    onMove: (e, t) => {
                        let {dragPropagation: r, dragDirectionLock: i, onDirectionLock: n, onDrag: o} = this.getProps();
                        if (!r && !this.openDragLock)
                            return;
                        let {offset: s} = t;
                        if (i && null === this.currentDirection) {
                            this.currentDirection = function(e, t=10) {
                                let r = null;
                                return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"),
                                r
                            }(s),
                            null !== this.currentDirection && n && n(this.currentDirection);
                            return
                        }
                        this.updateAxis("x", t.point, s),
                        this.updateAxis("y", t.point, s),
                        this.visualElement.render(),
                        o && o(e, t)
                    }
                    ,
                    onSessionEnd: (e, t) => this.stop(e, t),
                    resumeAnimation: () => rU(e => {
                        var t;
                        return "paused" === this.getAnimationState(e) && (null === (t = this.getAxisMotionValue(e).animation) || void 0 === t ? void 0 : t.play())
                    }
                    )
                },{
                    transformPagePoint: this.visualElement.getTransformPagePoint(),
                    dragSnapToOrigin: i
                })
            }
            stop(e, t) {
                let r = this.isDragging;
                if (this.cancel(),
                !r)
                    return;
                let {velocity: i} = t;
                this.startAnimation(i);
                let {onDragEnd: n} = this.getProps();
                n && G.postRender( () => n(e, t))
            }
            cancel() {
                this.isDragging = !1;
                let {projection: e, animationState: t} = this.visualElement;
                e && (e.isAnimationBlocked = !1),
                this.panSession && this.panSession.end(),
                this.panSession = void 0;
                let {dragPropagation: r} = this.getProps();
                !r && this.openDragLock && (this.openDragLock(),
                this.openDragLock = null),
                t && t.setActive("whileDrag", !1)
            }
            updateAxis(e, t, r) {
                let {drag: i} = this.getProps();
                if (!r || !ii(e, i, this.currentDirection))
                    return;
                let n = this.getAxisMotionValue(e)
                  , o = this.originPoint[e] + r[e];
                this.constraints && this.constraints[e] && (o = function(e, {min: t, max: r}, i) {
                    return void 0 !== t && e < t ? e = i ? tk(t, e, i.min) : Math.max(e, t) : void 0 !== r && e > r && (e = i ? tk(r, e, i.max) : Math.min(e, r)),
                    e
                }(o, this.constraints[e], this.elastic[e])),
                n.set(o)
            }
            resolveConstraints() {
                var e;
                let {dragConstraints: t, dragElastic: r} = this.getProps()
                  , i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (e = this.visualElement.projection) || void 0 === e ? void 0 : e.layout
                  , n = this.constraints;
                t && rJ(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && i ? this.constraints = function(e, {top: t, left: r, bottom: i, right: n}) {
                    return {
                        x: r7(e.x, r, n),
                        y: r7(e.y, t, i)
                    }
                }(i.layoutBox, t) : this.constraints = !1,
                this.elastic = function(e=.35) {
                    return !1 === e ? e = 0 : !0 === e && (e = .35),
                    {
                        x: r8(e, "left", "right"),
                        y: r8(e, "top", "bottom")
                    }
                }(r),
                n !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && rU(e => {
                    !1 !== this.constraints && this.getAxisMotionValue(e) && (this.constraints[e] = function(e, t) {
                        let r = {};
                        return void 0 !== t.min && (r.min = t.min - e.min),
                        void 0 !== t.max && (r.max = t.max - e.min),
                        r
                    }(i.layoutBox[e], this.constraints[e]))
                }
                )
            }
            resolveRefConstraints() {
                var e;
                let {dragConstraints: t, onMeasureDragConstraints: r} = this.getProps();
                if (!t || !rJ(t))
                    return !1;
                let i = t.current;
                N(null !== i, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                let {projection: n} = this.visualElement;
                if (!n || !n.layout)
                    return !1;
                let o = function(e, t, r) {
                    let i = rQ(e, r)
                      , {scroll: n} = t;
                    return n && (rK(i.x, n.offset.x),
                    rK(i.y, n.offset.y)),
                    i
                }(i, n.root, this.visualElement.getTransformPagePoint())
                  , s = {
                    x: r9((e = n.layout.layoutBox).x, o.x),
                    y: r9(e.y, o.y)
                };
                if (r) {
                    let e = r(function({x: e, y: t}) {
                        return {
                            top: t.min,
                            right: e.max,
                            bottom: t.max,
                            left: e.min
                        }
                    }(s));
                    this.hasMutatedConstraints = !!e,
                    e && (s = rR(e))
                }
                return s
            }
            startAnimation(e) {
                let {drag: t, dragMomentum: r, dragElastic: i, dragTransition: n, dragSnapToOrigin: o, onDragTransitionEnd: s} = this.getProps()
                  , a = this.constraints || {};
                return Promise.all(rU(s => {
                    if (!ii(s, t, this.currentDirection))
                        return;
                    let l = a && a[s] || {};
                    o && (l = {
                        min: 0,
                        max: 0
                    });
                    let u = {
                        type: "inertia",
                        velocity: r ? e[s] : 0,
                        bounceStiffness: i ? 200 : 1e6,
                        bounceDamping: i ? 40 : 1e7,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...n,
                        ...l
                    };
                    return this.startAxisValueAnimation(s, u)
                }
                )).then(s)
            }
            startAxisValueAnimation(e, t) {
                let r = this.getAxisMotionValue(e);
                return ea(this.visualElement, e),
                r.start(ru(e, r, 0, t, this.visualElement, !1))
            }
            stopAnimation() {
                rU(e => this.getAxisMotionValue(e).stop())
            }
            pauseAnimation() {
                rU(e => {
                    var t;
                    return null === (t = this.getAxisMotionValue(e).animation) || void 0 === t ? void 0 : t.pause()
                }
                )
            }
            getAnimationState(e) {
                var t;
                return null === (t = this.getAxisMotionValue(e).animation) || void 0 === t ? void 0 : t.state
            }
            getAxisMotionValue(e) {
                let t = `_drag${e.toUpperCase()}`
                  , r = this.visualElement.getProps();
                return r[t] || this.visualElement.getValue(e, (r.initial ? r.initial[e] : void 0) || 0)
            }
            snapToCursor(e) {
                rU(t => {
                    let {drag: r} = this.getProps();
                    if (!ii(t, r, this.currentDirection))
                        return;
                    let {projection: i} = this.visualElement
                      , n = this.getAxisMotionValue(t);
                    if (i && i.layout) {
                        let {min: r, max: o} = i.layout.layoutBox[t];
                        n.set(e[t] - tk(r, o, .5))
                    }
                }
                )
            }
            scalePositionWithinConstraints() {
                if (!this.visualElement.current)
                    return;
                let {drag: e, dragConstraints: t} = this.getProps()
                  , {projection: r} = this.visualElement;
                if (!rJ(t) || !r || !this.constraints)
                    return;
                this.stopAnimation();
                let i = {
                    x: 0,
                    y: 0
                };
                rU(e => {
                    let t = this.getAxisMotionValue(e);
                    if (t && !1 !== this.constraints) {
                        let r = t.get();
                        i[e] = function(e, t) {
                            let r = .5
                              , i = rD(e)
                              , n = rD(t);
                            return n > i ? r = y(t.min, t.max - i, e.min) : i > n && (r = y(e.min, e.max - n, t.min)),
                            eT(0, 1, r)
                        }({
                            min: r,
                            max: r
                        }, this.constraints[e])
                    }
                }
                );
                let {transformTemplate: n} = this.visualElement.getProps();
                this.visualElement.current.style.transform = n ? n({}, "") : "none",
                r.root && r.root.updateScroll(),
                r.updateLayout(),
                this.resolveConstraints(),
                rU(t => {
                    if (!ii(t, e, null))
                        return;
                    let r = this.getAxisMotionValue(t)
                      , {min: n, max: o} = this.constraints[t];
                    r.set(tk(n, o, i[t]))
                }
                )
            }
            addListeners() {
                if (!this.visualElement.current)
                    return;
                it.set(this.visualElement, this);
                let e = rM(this.visualElement.current, "pointerdown", e => {
                    let {drag: t, dragListener: r=!0} = this.getProps();
                    t && r && this.start(e)
                }
                )
                  , t = () => {
                    let {dragConstraints: e} = this.getProps();
                    rJ(e) && e.current && (this.constraints = this.resolveRefConstraints())
                }
                  , {projection: r} = this.visualElement
                  , i = r.addEventListener("measure", t);
                r && !r.layout && (r.root && r.root.updateScroll(),
                r.updateLayout()),
                G.read(t);
                let n = rE(window, "resize", () => this.scalePositionWithinConstraints())
                  , o = r.addEventListener("didUpdate", ({delta: e, hasLayoutChanged: t}) => {
                    this.isDragging && t && (rU(t => {
                        let r = this.getAxisMotionValue(t);
                        r && (this.originPoint[t] += e[t].translate,
                        r.set(r.get() + e[t].translate))
                    }
                    ),
                    this.visualElement.render())
                }
                );
                return () => {
                    n(),
                    e(),
                    i(),
                    o && o()
                }
            }
            getProps() {
                let e = this.visualElement.getProps()
                  , {drag: t=!1, dragDirectionLock: r=!1, dragPropagation: i=!1, dragConstraints: n=!1, dragElastic: o=.35, dragMomentum: s=!0} = e;
                return {
                    ...e,
                    drag: t,
                    dragDirectionLock: r,
                    dragPropagation: i,
                    dragConstraints: n,
                    dragElastic: o,
                    dragMomentum: s
                }
            }
        }
        function ii(e, t, r) {
            return (!0 === t || t === e) && (null === r || r === e)
        }
        class io extends rS {
            constructor(e) {
                super(e),
                this.removeGroupControls = N,
                this.removeListeners = N,
                this.controls = new ir(e)
            }
            mount() {
                let {dragControls: e} = this.node.getProps();
                e && (this.removeGroupControls = e.subscribe(this.controls)),
                this.removeListeners = this.controls.addListeners() || N
            }
            unmount() {
                this.removeGroupControls(),
                this.removeListeners()
            }
        }
        let is = e => (t, r) => {
            e && G.postRender( () => e(t, r))
        }
        ;
        class ia extends rS {
            constructor() {
                super(...arguments),
                this.removePointerDownListener = N
            }
            onPointerDown(e) {
                this.session = new r1(e,this.createPanHandlers(),{
                    transformPagePoint: this.node.getTransformPagePoint()
                })
            }
            createPanHandlers() {
                let {onPanSessionStart: e, onPanStart: t, onPan: r, onPanEnd: i} = this.node.getProps();
                return {
                    onSessionStart: is(e),
                    onStart: is(t),
                    onMove: r,
                    onEnd: (e, t) => {
                        delete this.session,
                        i && G.postRender( () => i(e, t))
                    }
                }
            }
            mount() {
                this.removePointerDownListener = rM(this.node.current, "pointerdown", e => this.onPointerDown(e))
            }
            update() {
                this.session && this.session.updateHandlers(this.createPanHandlers())
            }
            unmount() {
                this.removePointerDownListener(),
                this.session && this.session.end()
            }
        }
        var il, iu, id = r(5155), ih = r(2115), ic = r(5087), ip = r(4710);
        let im = (0,
        ih.createContext)({})
          , {schedule: iv, cancel: ig} = X(queueMicrotask, !1)
          , iy = {
            hasAnimatedSinceResize: !0,
            hasEverUpdated: !1
        };
        function ib(e, t) {
            return t.max === t.min ? 0 : e / (t.max - t.min) * 100
        }
        let ix = {
            correct: (e, t) => {
                if (!t.target)
                    return e;
                if ("string" == typeof e) {
                    if (!eB.test(e))
                        return e;
                    e = parseFloat(e)
                }
                let r = ib(e, t.target.x)
                  , i = ib(e, t.target.y);
                return `${r}% ${i}%`
            }
        }
          , iw = {};
        class iS extends ih.Component {
            componentDidMount() {
                let {visualElement: e, layoutGroup: t, switchLayoutGroup: r, layoutId: i} = this.props
                  , {projection: n} = e;
                !function(e) {
                    for (let t in e)
                        iw[t] = e[t],
                        tm(t) && (iw[t].isCSSVariable = !0)
                }(iP),
                n && (t.group && t.group.add(n),
                r && r.register && i && r.register(n),
                n.root.didUpdate(),
                n.addEventListener("animationComplete", () => {
                    this.safeToRemove()
                }
                ),
                n.setOptions({
                    ...n.options,
                    onExitComplete: () => this.safeToRemove()
                })),
                iy.hasEverUpdated = !0
            }
            getSnapshotBeforeUpdate(e) {
                let {layoutDependency: t, visualElement: r, drag: i, isPresent: n} = this.props
                  , o = r.projection;
                return o && (o.isPresent = n,
                i || e.layoutDependency !== t || void 0 === t || e.isPresent !== n ? o.willUpdate() : this.safeToRemove(),
                e.isPresent === n || (n ? o.promote() : o.relegate() || G.postRender( () => {
                    let e = o.getStack();
                    e && e.members.length || this.safeToRemove()
                }
                ))),
                null
            }
            componentDidUpdate() {
                let {projection: e} = this.props.visualElement;
                e && (e.root.didUpdate(),
                iv.postRender( () => {
                    !e.currentAnimation && e.isLead() && this.safeToRemove()
                }
                ))
            }
            componentWillUnmount() {
                let {visualElement: e, layoutGroup: t, switchLayoutGroup: r} = this.props
                  , {projection: i} = e;
                i && (i.scheduleCheckAfterUnmount(),
                t && t.group && t.group.remove(i),
                r && r.deregister && r.deregister(i))
            }
            safeToRemove() {
                let {safeToRemove: e} = this.props;
                e && e()
            }
            render() {
                return null
            }
        }
        function iT(e) {
            let[t,r] = (0,
            ic.xQ)()
              , i = (0,
            ih.useContext)(ip.L);
            return (0,
            id.jsx)(iS, {
                ...e,
                layoutGroup: i,
                switchLayoutGroup: (0,
                ih.useContext)(im),
                isPresent: t,
                safeToRemove: r
            })
        }
        let iP = {
            borderRadius: {
                ...ix,
                applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
            },
            borderTopLeftRadius: ix,
            borderTopRightRadius: ix,
            borderBottomLeftRadius: ix,
            borderBottomRightRadius: ix,
            boxShadow: {
                correct: (e, {treeScale: t, projectionDelta: r}) => {
                    let i = eJ.parse(e);
                    if (i.length > 5)
                        return e;
                    let n = eJ.createTransformer(e)
                      , o = "number" != typeof i[0] ? 1 : 0
                      , s = r.x.scale * t.x
                      , a = r.y.scale * t.y;
                    i[0 + o] /= s,
                    i[1 + o] /= a;
                    let l = tk(s, a, .5);
                    return "number" == typeof i[2 + o] && (i[2 + o] /= l),
                    "number" == typeof i[3 + o] && (i[3 + o] /= l),
                    n(i)
                }
            }
        }
          , iA = (e, t) => e.depth - t.depth;
        class iE {
            constructor() {
                this.children = [],
                this.isDirty = !1
            }
            add(e) {
                J(this.children, e),
                this.isDirty = !0
            }
            remove(e) {
                ee(this.children, e),
                this.isDirty = !0
            }
            forEach(e) {
                this.isDirty && this.children.sort(iA),
                this.isDirty = !1,
                this.children.forEach(e)
            }
        }
        function iC(e) {
            let t = es(e) ? e.get() : e;
            return U(t) ? t.toValue() : t
        }
        let ik = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
          , iM = ik.length
          , iR = e => "string" == typeof e ? parseFloat(e) : e
          , iD = e => "number" == typeof e || eB.test(e);
        function ij(e, t) {
            return void 0 !== e[t] ? e[t] : e.borderRadius
        }
        let iV = iF(0, .5, ex)
          , iL = iF(.5, .95, N);
        function iF(e, t, r) {
            return i => i < e ? 0 : i > t ? 1 : r(y(e, t, i))
        }
        function iN(e, t) {
            e.min = t.min,
            e.max = t.max
        }
        function iI(e, t) {
            iN(e.x, t.x),
            iN(e.y, t.y)
        }
        function iO(e, t) {
            e.translate = t.translate,
            e.scale = t.scale,
            e.originPoint = t.originPoint,
            e.origin = t.origin
        }
        function iB(e, t, r, i, n) {
            return e -= t,
            e = i + 1 / r * (e - i),
            void 0 !== n && (e = i + 1 / n * (e - i)),
            e
        }
        function iz(e, t, [r,i,n], o, s) {
            !function(e, t=0, r=1, i=.5, n, o=e, s=e) {
                if (eO.test(t) && (t = parseFloat(t),
                t = tk(s.min, s.max, t / 100) - s.min),
                "number" != typeof t)
                    return;
                let a = tk(o.min, o.max, i);
                e === o && (a -= t),
                e.min = iB(e.min, t, r, a, n),
                e.max = iB(e.max, t, r, a, n)
            }(e, t[r], t[i], t[n], t.scale, o, s)
        }
        let iU = ["x", "scaleX", "originX"]
          , i$ = ["y", "scaleY", "originY"];
        function iW(e, t, r, i) {
            iz(e.x, t, iU, r ? r.x : void 0, i ? i.x : void 0),
            iz(e.y, t, i$, r ? r.y : void 0, i ? i.y : void 0)
        }
        function iH(e) {
            return 0 === e.translate && 1 === e.scale
        }
        function i_(e) {
            return iH(e.x) && iH(e.y)
        }
        function iX(e, t) {
            return e.min === t.min && e.max === t.max
        }
        function iG(e, t) {
            return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
        }
        function iY(e, t) {
            return iG(e.x, t.x) && iG(e.y, t.y)
        }
        function iK(e) {
            return rD(e.x) / rD(e.y)
        }
        function iq(e, t) {
            return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
        }
        class iZ {
            constructor() {
                this.members = []
            }
            add(e) {
                J(this.members, e),
                e.scheduleRender()
            }
            remove(e) {
                if (ee(this.members, e),
                e === this.prevLead && (this.prevLead = void 0),
                e === this.lead) {
                    let e = this.members[this.members.length - 1];
                    e && this.promote(e)
                }
            }
            relegate(e) {
                let t;
                let r = this.members.findIndex(t => e === t);
                if (0 === r)
                    return !1;
                for (let e = r; e >= 0; e--) {
                    let r = this.members[e];
                    if (!1 !== r.isPresent) {
                        t = r;
                        break
                    }
                }
                return !!t && (this.promote(t),
                !0)
            }
            promote(e, t) {
                let r = this.lead;
                if (e !== r && (this.prevLead = r,
                this.lead = e,
                e.show(),
                r)) {
                    r.instance && r.scheduleRender(),
                    e.scheduleRender(),
                    e.resumeFrom = r,
                    t && (e.resumeFrom.preserveOpacity = !0),
                    r.snapshot && (e.snapshot = r.snapshot,
                    e.snapshot.latestValues = r.animationValues || r.latestValues),
                    e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
                    let {crossfade: i} = e.options;
                    !1 === i && r.hide()
                }
            }
            exitAnimationComplete() {
                this.members.forEach(e => {
                    let {options: t, resumingFrom: r} = e;
                    t.onExitComplete && t.onExitComplete(),
                    r && r.options.onExitComplete && r.options.onExitComplete()
                }
                )
            }
            scheduleRender() {
                this.members.forEach(e => {
                    e.instance && e.scheduleRender(!1)
                }
                )
            }
            removeLeadSnapshot() {
                this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
            }
        }
        let iQ = {
            nodes: 0,
            calculatedTargetDeltas: 0,
            calculatedProjections: 0
        }
          , iJ = ["", "X", "Y", "Z"]
          , i0 = {
            visibility: "hidden"
        }
          , i1 = 0;
        function i2(e, t, r, i) {
            let {latestValues: n} = t;
            n[e] && (r[e] = n[e],
            t.setStaticValue(e, 0),
            i && (i[e] = 0))
        }
        function i5({attachResizeListener: e, defaultParent: t, measureScroll: r, checkIsScrollRoot: i, resetTransform: n}) {
            return class {
                constructor(e={}, r=null == t ? void 0 : t()) {
                    this.id = i1++,
                    this.animationId = 0,
                    this.children = new Set,
                    this.options = {},
                    this.isTreeAnimating = !1,
                    this.isAnimationBlocked = !1,
                    this.isLayoutDirty = !1,
                    this.isProjectionDirty = !1,
                    this.isSharedProjectionDirty = !1,
                    this.isTransformDirty = !1,
                    this.updateManuallyBlocked = !1,
                    this.updateBlockedByResize = !1,
                    this.isUpdating = !1,
                    this.isSVG = !1,
                    this.needsReset = !1,
                    this.shouldResetTransform = !1,
                    this.hasCheckedOptimisedAppear = !1,
                    this.treeScale = {
                        x: 1,
                        y: 1
                    },
                    this.eventHandlers = new Map,
                    this.hasTreeAnimated = !1,
                    this.updateScheduled = !1,
                    this.scheduleUpdate = () => this.update(),
                    this.projectionUpdateScheduled = !1,
                    this.checkUpdateFailed = () => {
                        this.isUpdating && (this.isUpdating = !1,
                        this.clearAllSnapshots())
                    }
                    ,
                    this.updateProjection = () => {
                        this.projectionUpdateScheduled = !1,
                        _.value && (iQ.nodes = iQ.calculatedTargetDeltas = iQ.calculatedProjections = 0),
                        this.nodes.forEach(i6),
                        this.nodes.forEach(ni),
                        this.nodes.forEach(nn),
                        this.nodes.forEach(i7),
                        _.addProjectionMetrics && _.addProjectionMetrics(iQ)
                    }
                    ,
                    this.resolvedRelativeTargetAt = 0,
                    this.hasProjected = !1,
                    this.isVisible = !0,
                    this.animationProgress = 0,
                    this.sharedNodes = new Map,
                    this.latestValues = e,
                    this.root = r ? r.root || r : this,
                    this.path = r ? [...r.path, r] : [],
                    this.parent = r,
                    this.depth = r ? r.depth + 1 : 0;
                    for (let e = 0; e < this.path.length; e++)
                        this.path[e].shouldResetTransform = !0;
                    this.root === this && (this.nodes = new iE)
                }
                addEventListener(e, t) {
                    return this.eventHandlers.has(e) || this.eventHandlers.set(e, new et),
                    this.eventHandlers.get(e).add(t)
                }
                notifyListeners(e, ...t) {
                    let r = this.eventHandlers.get(e);
                    r && r.notify(...t)
                }
                hasListeners(e) {
                    return this.eventHandlers.has(e)
                }
                mount(t, r=this.root.hasTreeAnimated) {
                    if (this.instance)
                        return;
                    this.isSVG = t instanceof SVGElement && "svg" !== t.tagName,
                    this.instance = t;
                    let {layoutId: i, layout: n, visualElement: o} = this.options;
                    if (o && !o.current && o.mount(t),
                    this.root.nodes.add(this),
                    this.parent && this.parent.children.add(this),
                    r && (n || i) && (this.isLayoutDirty = !0),
                    e) {
                        let r;
                        let i = () => this.root.updateBlockedByResize = !1;
                        e(t, () => {
                            this.root.updateBlockedByResize = !0,
                            r && r(),
                            r = function(e, t) {
                                let r = Q.now()
                                  , i = ({timestamp: t}) => {
                                    let n = t - r;
                                    n >= 250 && (Y(i),
                                    e(n - 250))
                                }
                                ;
                                return G.read(i, !0),
                                () => Y(i)
                            }(i, 250),
                            iy.hasAnimatedSinceResize && (iy.hasAnimatedSinceResize = !1,
                            this.nodes.forEach(nr))
                        }
                        )
                    }
                    i && this.root.registerSharedNode(i, this),
                    !1 !== this.options.animate && o && (i || n) && this.addEventListener("didUpdate", ({delta: e, hasLayoutChanged: t, hasRelativeLayoutChanged: r, layout: i}) => {
                        if (this.isTreeAnimationBlocked()) {
                            this.target = void 0,
                            this.relativeTarget = void 0;
                            return
                        }
                        let n = this.options.transition || o.getDefaultTransition() || nd
                          , {onLayoutAnimationStart: s, onLayoutAnimationComplete: a} = o.getProps()
                          , l = !this.targetLayout || !iY(this.targetLayout, i)
                          , u = !t && r;
                        if (this.options.layoutRoot || this.resumeFrom || u || t && (l || !this.currentAnimation)) {
                            this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                            this.resumingFrom.resumingFrom = void 0),
                            this.setAnimationOrigin(e, u);
                            let t = {
                                ...h(n, "layout"),
                                onPlay: s,
                                onComplete: a
                            };
                            (o.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0,
                            t.type = !1),
                            this.startAnimation(t)
                        } else
                            t || nr(this),
                            this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                        this.targetLayout = i
                    }
                    )
                }
                unmount() {
                    this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this);
                    let e = this.getStack();
                    e && e.remove(this),
                    this.parent && this.parent.children.delete(this),
                    this.instance = void 0,
                    Y(this.updateProjection)
                }
                blockUpdate() {
                    this.updateManuallyBlocked = !0
                }
                unblockUpdate() {
                    this.updateManuallyBlocked = !1
                }
                isUpdateBlocked() {
                    return this.updateManuallyBlocked || this.updateBlockedByResize
                }
                isTreeAnimationBlocked() {
                    return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                }
                startUpdate() {
                    !this.isUpdateBlocked() && (this.isUpdating = !0,
                    this.nodes && this.nodes.forEach(no),
                    this.animationId++)
                }
                getTransformTemplate() {
                    let {visualElement: e} = this.options;
                    return e && e.getProps().transformTemplate
                }
                willUpdate(e=!0) {
                    if (this.root.hasTreeAnimated = !0,
                    this.root.isUpdateBlocked()) {
                        this.options.onExitComplete && this.options.onExitComplete();
                        return
                    }
                    if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function e(t) {
                        if (t.hasCheckedOptimisedAppear = !0,
                        t.root === t)
                            return;
                        let {visualElement: r} = t.options;
                        if (!r)
                            return;
                        let i = r.props[eu];
                        if (window.MotionHasOptimisedAnimation(i, "transform")) {
                            let {layout: e, layoutId: r} = t.options;
                            window.MotionCancelOptimisedAnimation(i, "transform", G, !(e || r))
                        }
                        let {parent: n} = t;
                        n && !n.hasCheckedOptimisedAppear && e(n)
                    }(this),
                    this.root.isUpdating || this.root.startUpdate(),
                    this.isLayoutDirty)
                        return;
                    this.isLayoutDirty = !0;
                    for (let e = 0; e < this.path.length; e++) {
                        let t = this.path[e];
                        t.shouldResetTransform = !0,
                        t.updateScroll("snapshot"),
                        t.options.layoutRoot && t.willUpdate(!1)
                    }
                    let {layoutId: t, layout: r} = this.options;
                    if (void 0 === t && !r)
                        return;
                    let i = this.getTransformTemplate();
                    this.prevTransformTemplateValue = i ? i(this.latestValues, "") : void 0,
                    this.updateSnapshot(),
                    e && this.notifyListeners("willUpdate")
                }
                update() {
                    if (this.updateScheduled = !1,
                    this.isUpdateBlocked()) {
                        this.unblockUpdate(),
                        this.clearAllSnapshots(),
                        this.nodes.forEach(i8);
                        return
                    }
                    this.isUpdating || this.nodes.forEach(ne),
                    this.isUpdating = !1,
                    this.nodes.forEach(nt),
                    this.nodes.forEach(i3),
                    this.nodes.forEach(i4),
                    this.clearAllSnapshots();
                    let e = Q.now();
                    K.delta = eT(0, 1e3 / 60, e - K.timestamp),
                    K.timestamp = e,
                    K.isProcessing = !0,
                    q.update.process(K),
                    q.preRender.process(K),
                    q.render.process(K),
                    K.isProcessing = !1
                }
                didUpdate() {
                    this.updateScheduled || (this.updateScheduled = !0,
                    iv.read(this.scheduleUpdate))
                }
                clearAllSnapshots() {
                    this.nodes.forEach(i9),
                    this.sharedNodes.forEach(ns)
                }
                scheduleUpdateProjection() {
                    this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
                    G.preRender(this.updateProjection, !1, !0))
                }
                scheduleCheckAfterUnmount() {
                    G.postRender( () => {
                        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                    }
                    )
                }
                updateSnapshot() {
                    this.snapshot || !this.instance || (this.snapshot = this.measure(),
                    !this.snapshot || rD(this.snapshot.measuredBox.x) || rD(this.snapshot.measuredBox.y) || (this.snapshot = void 0))
                }
                updateLayout() {
                    if (!this.instance || (this.updateScroll(),
                    !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                        return;
                    if (this.resumeFrom && !this.resumeFrom.instance)
                        for (let e = 0; e < this.path.length; e++)
                            this.path[e].updateScroll();
                    let e = this.layout;
                    this.layout = this.measure(!1),
                    this.layoutCorrected = rz(),
                    this.isLayoutDirty = !1,
                    this.projectionDelta = void 0,
                    this.notifyListeners("measure", this.layout.layoutBox);
                    let {visualElement: t} = this.options;
                    t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0)
                }
                updateScroll(e="measure") {
                    let t = !!(this.options.layoutScroll && this.instance);
                    if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1),
                    t) {
                        let t = i(this.instance);
                        this.scroll = {
                            animationId: this.root.animationId,
                            phase: e,
                            isRoot: t,
                            offset: r(this.instance),
                            wasRoot: this.scroll ? this.scroll.isRoot : t
                        }
                    }
                }
                resetTransform() {
                    if (!n)
                        return;
                    let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
                      , t = this.projectionDelta && !i_(this.projectionDelta)
                      , r = this.getTransformTemplate()
                      , i = r ? r(this.latestValues, "") : void 0
                      , o = i !== this.prevTransformTemplateValue;
                    e && (t || rH(this.latestValues) || o) && (n(this.instance, i),
                    this.shouldResetTransform = !1,
                    this.scheduleRender())
                }
                measure(e=!0) {
                    var t;
                    let r = this.measurePageBox()
                      , i = this.removeElementScroll(r);
                    return e && (i = this.removeTransform(i)),
                    np((t = i).x),
                    np(t.y),
                    {
                        animationId: this.root.animationId,
                        measuredBox: r,
                        layoutBox: i,
                        latestValues: {},
                        source: this.id
                    }
                }
                measurePageBox() {
                    var e;
                    let {visualElement: t} = this.options;
                    if (!t)
                        return rz();
                    let r = t.measureViewportBox();
                    if (!((null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot) || this.path.some(nf))) {
                        let {scroll: e} = this.root;
                        e && (rK(r.x, e.offset.x),
                        rK(r.y, e.offset.y))
                    }
                    return r
                }
                removeElementScroll(e) {
                    var t;
                    let r = rz();
                    if (iI(r, e),
                    null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot)
                        return r;
                    for (let t = 0; t < this.path.length; t++) {
                        let i = this.path[t]
                          , {scroll: n, options: o} = i;
                        i !== this.root && n && o.layoutScroll && (n.wasRoot && iI(r, e),
                        rK(r.x, n.offset.x),
                        rK(r.y, n.offset.y))
                    }
                    return r
                }
                applyTransform(e, t=!1) {
                    let r = rz();
                    iI(r, e);
                    for (let e = 0; e < this.path.length; e++) {
                        let i = this.path[e];
                        !t && i.options.layoutScroll && i.scroll && i !== i.root && rZ(r, {
                            x: -i.scroll.offset.x,
                            y: -i.scroll.offset.y
                        }),
                        rH(i.latestValues) && rZ(r, i.latestValues)
                    }
                    return rH(this.latestValues) && rZ(r, this.latestValues),
                    r
                }
                removeTransform(e) {
                    let t = rz();
                    iI(t, e);
                    for (let e = 0; e < this.path.length; e++) {
                        let r = this.path[e];
                        if (!r.instance || !rH(r.latestValues))
                            continue;
                        rW(r.latestValues) && r.updateSnapshot();
                        let i = rz();
                        iI(i, r.measurePageBox()),
                        iW(t, r.latestValues, r.snapshot ? r.snapshot.layoutBox : void 0, i)
                    }
                    return rH(this.latestValues) && iW(t, this.latestValues),
                    t
                }
                setTargetDelta(e) {
                    this.targetDelta = e,
                    this.root.scheduleUpdateProjection(),
                    this.isProjectionDirty = !0
                }
                setOptions(e) {
                    this.options = {
                        ...this.options,
                        ...e,
                        crossfade: void 0 === e.crossfade || e.crossfade
                    }
                }
                clearMeasurements() {
                    this.scroll = void 0,
                    this.layout = void 0,
                    this.snapshot = void 0,
                    this.prevTransformTemplateValue = void 0,
                    this.targetDelta = void 0,
                    this.target = void 0,
                    this.isLayoutDirty = !1
                }
                forceRelativeParentToResolveTarget() {
                    this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== K.timestamp && this.relativeParent.resolveTargetDelta(!0)
                }
                resolveTargetDelta(e=!1) {
                    var t, r, i, n;
                    let o = this.getLead();
                    this.isProjectionDirty || (this.isProjectionDirty = o.isProjectionDirty),
                    this.isTransformDirty || (this.isTransformDirty = o.isTransformDirty),
                    this.isSharedProjectionDirty || (this.isSharedProjectionDirty = o.isSharedProjectionDirty);
                    let s = !!this.resumingFrom || this !== o;
                    if (!(e || s && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                        return;
                    let {layout: a, layoutId: l} = this.options;
                    if (this.layout && (a || l)) {
                        if (this.resolvedRelativeTargetAt = K.timestamp,
                        !this.targetDelta && !this.relativeTarget) {
                            let e = this.getClosestProjectingParent();
                            e && e.layout && 1 !== this.animationProgress ? (this.relativeParent = e,
                            this.forceRelativeParentToResolveTarget(),
                            this.relativeTarget = rz(),
                            this.relativeTargetOrigin = rz(),
                            rN(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox),
                            iI(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                        }
                        if (this.relativeTarget || this.targetDelta) {
                            if ((this.target || (this.target = rz(),
                            this.targetWithTransforms = rz()),
                            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(),
                            r = this.target,
                            i = this.relativeTarget,
                            n = this.relativeParent.target,
                            rL(r.x, i.x, n.x),
                            rL(r.y, i.y, n.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : iI(this.target, this.layout.layoutBox),
                            rY(this.target, this.targetDelta)) : iI(this.target, this.layout.layoutBox),
                            this.attemptToResolveRelativeTarget) {
                                this.attemptToResolveRelativeTarget = !1;
                                let e = this.getClosestProjectingParent();
                                e && !!e.resumingFrom == !!this.resumingFrom && !e.options.layoutScroll && e.target && 1 !== this.animationProgress ? (this.relativeParent = e,
                                this.forceRelativeParentToResolveTarget(),
                                this.relativeTarget = rz(),
                                this.relativeTargetOrigin = rz(),
                                rN(this.relativeTargetOrigin, this.target, e.target),
                                iI(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            _.value && iQ.calculatedTargetDeltas++
                        }
                    }
                }
                getClosestProjectingParent() {
                    return !this.parent || rW(this.parent.latestValues) || r_(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                }
                isProjecting() {
                    return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                }
                calcProjection() {
                    var e;
                    let t = this.getLead()
                      , r = !!this.resumingFrom || this !== t
                      , i = !0;
                    if ((this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty)) && (i = !1),
                    r && (this.isSharedProjectionDirty || this.isTransformDirty) && (i = !1),
                    this.resolvedRelativeTargetAt === K.timestamp && (i = !1),
                    i)
                        return;
                    let {layout: n, layoutId: o} = this.options;
                    if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
                    this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                    !this.layout || !(n || o))
                        return;
                    iI(this.layoutCorrected, this.layout.layoutBox);
                    let s = this.treeScale.x
                      , a = this.treeScale.y;
                    !function(e, t, r, i=!1) {
                        let n, o;
                        let s = r.length;
                        if (s) {
                            t.x = t.y = 1;
                            for (let a = 0; a < s; a++) {
                                o = (n = r[a]).projectionDelta;
                                let {visualElement: s} = n.options;
                                (!s || !s.props.style || "contents" !== s.props.style.display) && (i && n.options.layoutScroll && n.scroll && n !== n.root && rZ(e, {
                                    x: -n.scroll.offset.x,
                                    y: -n.scroll.offset.y
                                }),
                                o && (t.x *= o.x.scale,
                                t.y *= o.y.scale,
                                rY(e, o)),
                                i && rH(n.latestValues) && rZ(e, n.latestValues))
                            }
                            t.x < 1.0000000000001 && t.x > .999999999999 && (t.x = 1),
                            t.y < 1.0000000000001 && t.y > .999999999999 && (t.y = 1)
                        }
                    }(this.layoutCorrected, this.treeScale, this.path, r),
                    t.layout && !t.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (t.target = t.layout.layoutBox,
                    t.targetWithTransforms = rz());
                    let {target: l} = t;
                    if (!l) {
                        this.prevProjectionDelta && (this.createProjectionDeltas(),
                        this.scheduleRender());
                        return
                    }
                    this.projectionDelta && this.prevProjectionDelta ? (iO(this.prevProjectionDelta.x, this.projectionDelta.x),
                    iO(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(),
                    rV(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
                    this.treeScale.x === s && this.treeScale.y === a && iq(this.projectionDelta.x, this.prevProjectionDelta.x) && iq(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0,
                    this.scheduleRender(),
                    this.notifyListeners("projectionUpdate", l)),
                    _.value && iQ.calculatedProjections++
                }
                hide() {
                    this.isVisible = !1
                }
                show() {
                    this.isVisible = !0
                }
                scheduleRender(e=!0) {
                    var t;
                    if (null === (t = this.options.visualElement) || void 0 === t || t.scheduleRender(),
                    e) {
                        let e = this.getStack();
                        e && e.scheduleRender()
                    }
                    this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                }
                createProjectionDeltas() {
                    this.prevProjectionDelta = rO(),
                    this.projectionDelta = rO(),
                    this.projectionDeltaWithTransform = rO()
                }
                setAnimationOrigin(e, t=!1) {
                    let r;
                    let i = this.snapshot
                      , n = i ? i.latestValues : {}
                      , o = {
                        ...this.latestValues
                    }
                      , s = rO();
                    this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0),
                    this.attemptToResolveRelativeTarget = !t;
                    let a = rz()
                      , l = (i ? i.source : void 0) !== (this.layout ? this.layout.source : void 0)
                      , u = this.getStack()
                      , d = !u || u.members.length <= 1
                      , h = !!(l && !d && !0 === this.options.crossfade && !this.path.some(nu));
                    this.animationProgress = 0,
                    this.mixTargetDelta = t => {
                        let i = t / 1e3;
                        if (na(s.x, e.x, i),
                        na(s.y, e.y, i),
                        this.setTargetDelta(s),
                        this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                            var u, c, p, m;
                            rN(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                            p = this.relativeTarget,
                            m = this.relativeTargetOrigin,
                            nl(p.x, m.x, a.x, i),
                            nl(p.y, m.y, a.y, i),
                            r && (u = this.relativeTarget,
                            c = r,
                            iX(u.x, c.x) && iX(u.y, c.y)) && (this.isProjectionDirty = !1),
                            r || (r = rz()),
                            iI(r, this.relativeTarget)
                        }
                        l && (this.animationValues = o,
                        function(e, t, r, i, n, o) {
                            n ? (e.opacity = tk(0, void 0 !== r.opacity ? r.opacity : 1, iV(i)),
                            e.opacityExit = tk(void 0 !== t.opacity ? t.opacity : 1, 0, iL(i))) : o && (e.opacity = tk(void 0 !== t.opacity ? t.opacity : 1, void 0 !== r.opacity ? r.opacity : 1, i));
                            for (let n = 0; n < iM; n++) {
                                let o = `border${ik[n]}Radius`
                                  , s = ij(t, o)
                                  , a = ij(r, o);
                                (void 0 !== s || void 0 !== a) && (s || (s = 0),
                                a || (a = 0),
                                0 === s || 0 === a || iD(s) === iD(a) ? (e[o] = Math.max(tk(iR(s), iR(a), i), 0),
                                (eO.test(a) || eO.test(s)) && (e[o] += "%")) : e[o] = a)
                            }
                            (t.rotate || r.rotate) && (e.rotate = tk(t.rotate || 0, r.rotate || 0, i))
                        }(o, n, this.latestValues, i, h, d)),
                        this.root.scheduleUpdateProjection(),
                        this.scheduleRender(),
                        this.animationProgress = i
                    }
                    ,
                    this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                }
                startAnimation(e) {
                    this.notifyListeners("animationStart"),
                    this.currentAnimation && this.currentAnimation.stop(),
                    this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
                    this.pendingAnimation && (Y(this.pendingAnimation),
                    this.pendingAnimation = void 0),
                    this.pendingAnimation = G.update( () => {
                        iy.hasAnimatedSinceResize = !0,
                        tC.layout++,
                        this.currentAnimation = function(e, t, r) {
                            let i = es(0) ? 0 : eo(0);
                            return i.start(ru("", i, 1e3, r)),
                            i.animation
                        }(0, 0, {
                            ...e,
                            onUpdate: t => {
                                this.mixTargetDelta(t),
                                e.onUpdate && e.onUpdate(t)
                            }
                            ,
                            onStop: () => {
                                tC.layout--
                            }
                            ,
                            onComplete: () => {
                                tC.layout--,
                                e.onComplete && e.onComplete(),
                                this.completeAnimation()
                            }
                        }),
                        this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                        this.pendingAnimation = void 0
                    }
                    )
                }
                completeAnimation() {
                    this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                    this.resumingFrom.preserveOpacity = void 0);
                    let e = this.getStack();
                    e && e.exitAnimationComplete(),
                    this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                    this.notifyListeners("animationComplete")
                }
                finishAnimation() {
                    this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3),
                    this.currentAnimation.stop()),
                    this.completeAnimation()
                }
                applyTransformsToTarget() {
                    let e = this.getLead()
                      , {targetWithTransforms: t, target: r, layout: i, latestValues: n} = e;
                    if (t && r && i) {
                        if (this !== e && this.layout && i && nm(this.options.animationType, this.layout.layoutBox, i.layoutBox)) {
                            r = this.target || rz();
                            let t = rD(this.layout.layoutBox.x);
                            r.x.min = e.target.x.min,
                            r.x.max = r.x.min + t;
                            let i = rD(this.layout.layoutBox.y);
                            r.y.min = e.target.y.min,
                            r.y.max = r.y.min + i
                        }
                        iI(t, r),
                        rZ(t, n),
                        rV(this.projectionDeltaWithTransform, this.layoutCorrected, t, n)
                    }
                }
                registerSharedNode(e, t) {
                    this.sharedNodes.has(e) || this.sharedNodes.set(e, new iZ),
                    this.sharedNodes.get(e).add(t);
                    let r = t.options.initialPromotionConfig;
                    t.promote({
                        transition: r ? r.transition : void 0,
                        preserveFollowOpacity: r && r.shouldPreserveFollowOpacity ? r.shouldPreserveFollowOpacity(t) : void 0
                    })
                }
                isLead() {
                    let e = this.getStack();
                    return !e || e.lead === this
                }
                getLead() {
                    var e;
                    let {layoutId: t} = this.options;
                    return t && (null === (e = this.getStack()) || void 0 === e ? void 0 : e.lead) || this
                }
                getPrevLead() {
                    var e;
                    let {layoutId: t} = this.options;
                    return t ? null === (e = this.getStack()) || void 0 === e ? void 0 : e.prevLead : void 0
                }
                getStack() {
                    let {layoutId: e} = this.options;
                    if (e)
                        return this.root.sharedNodes.get(e)
                }
                promote({needsReset: e, transition: t, preserveFollowOpacity: r}={}) {
                    let i = this.getStack();
                    i && i.promote(this, r),
                    e && (this.projectionDelta = void 0,
                    this.needsReset = !0),
                    t && this.setOptions({
                        transition: t
                    })
                }
                relegate() {
                    let e = this.getStack();
                    return !!e && e.relegate(this)
                }
                resetSkewAndRotation() {
                    let {visualElement: e} = this.options;
                    if (!e)
                        return;
                    let t = !1
                      , {latestValues: r} = e;
                    if ((r.z || r.rotate || r.rotateX || r.rotateY || r.rotateZ || r.skewX || r.skewY) && (t = !0),
                    !t)
                        return;
                    let i = {};
                    r.z && i2("z", e, i, this.animationValues);
                    for (let t = 0; t < iJ.length; t++)
                        i2(`rotate${iJ[t]}`, e, i, this.animationValues),
                        i2(`skew${iJ[t]}`, e, i, this.animationValues);
                    for (let t in e.render(),
                    i)
                        e.setStaticValue(t, i[t]),
                        this.animationValues && (this.animationValues[t] = i[t]);
                    e.scheduleRender()
                }
                getProjectionStyles(e) {
                    var t, r;
                    if (!this.instance || this.isSVG)
                        return;
                    if (!this.isVisible)
                        return i0;
                    let i = {
                        visibility: ""
                    }
                      , n = this.getTransformTemplate();
                    if (this.needsReset)
                        return this.needsReset = !1,
                        i.opacity = "",
                        i.pointerEvents = iC(null == e ? void 0 : e.pointerEvents) || "",
                        i.transform = n ? n(this.latestValues, "") : "none",
                        i;
                    let o = this.getLead();
                    if (!this.projectionDelta || !this.layout || !o.target) {
                        let t = {};
                        return this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1,
                        t.pointerEvents = iC(null == e ? void 0 : e.pointerEvents) || ""),
                        this.hasProjected && !rH(this.latestValues) && (t.transform = n ? n({}, "") : "none",
                        this.hasProjected = !1),
                        t
                    }
                    let s = o.animationValues || o.latestValues;
                    this.applyTransformsToTarget(),
                    i.transform = function(e, t, r) {
                        let i = ""
                          , n = e.x.translate / t.x
                          , o = e.y.translate / t.y
                          , s = (null == r ? void 0 : r.z) || 0;
                        if ((n || o || s) && (i = `translate3d(${n}px, ${o}px, ${s}px) `),
                        (1 !== t.x || 1 !== t.y) && (i += `scale(${1 / t.x}, ${1 / t.y}) `),
                        r) {
                            let {transformPerspective: e, rotate: t, rotateX: n, rotateY: o, skewX: s, skewY: a} = r;
                            e && (i = `perspective(${e}px) ${i}`),
                            t && (i += `rotate(${t}deg) `),
                            n && (i += `rotateX(${n}deg) `),
                            o && (i += `rotateY(${o}deg) `),
                            s && (i += `skewX(${s}deg) `),
                            a && (i += `skewY(${a}deg) `)
                        }
                        let a = e.x.scale * t.x
                          , l = e.y.scale * t.y;
                        return (1 !== a || 1 !== l) && (i += `scale(${a}, ${l})`),
                        i || "none"
                    }(this.projectionDeltaWithTransform, this.treeScale, s),
                    n && (i.transform = n(s, i.transform));
                    let {x: a, y: l} = this.projectionDelta;
                    for (let e in i.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`,
                    o.animationValues ? i.opacity = o === this ? null !== (r = null !== (t = s.opacity) && void 0 !== t ? t : this.latestValues.opacity) && void 0 !== r ? r : 1 : this.preserveOpacity ? this.latestValues.opacity : s.opacityExit : i.opacity = o === this ? void 0 !== s.opacity ? s.opacity : "" : void 0 !== s.opacityExit ? s.opacityExit : 0,
                    iw) {
                        if (void 0 === s[e])
                            continue;
                        let {correct: t, applyTo: r, isCSSVariable: n} = iw[e]
                          , a = "none" === i.transform ? s[e] : t(s[e], o);
                        if (r) {
                            let e = r.length;
                            for (let t = 0; t < e; t++)
                                i[r[t]] = a
                        } else
                            n ? this.options.visualElement.renderState.vars[e] = a : i[e] = a
                    }
                    return this.options.layoutId && (i.pointerEvents = o === this ? iC(null == e ? void 0 : e.pointerEvents) || "" : "none"),
                    i
                }
                clearSnapshot() {
                    this.resumeFrom = this.snapshot = void 0
                }
                resetTree() {
                    this.root.nodes.forEach(e => {
                        var t;
                        return null === (t = e.currentAnimation) || void 0 === t ? void 0 : t.stop()
                    }
                    ),
                    this.root.nodes.forEach(i8),
                    this.root.sharedNodes.clear()
                }
            }
        }
        function i3(e) {
            e.updateLayout()
        }
        function i4(e) {
            var t;
            let r = (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) || e.snapshot;
            if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
                let {layoutBox: t, measuredBox: i} = e.layout
                  , {animationType: n} = e.options
                  , o = r.source !== e.layout.source;
                "size" === n ? rU(e => {
                    let i = o ? r.measuredBox[e] : r.layoutBox[e]
                      , n = rD(i);
                    i.min = t[e].min,
                    i.max = i.min + n
                }
                ) : nm(n, r.layoutBox, t) && rU(i => {
                    let n = o ? r.measuredBox[i] : r.layoutBox[i]
                      , s = rD(t[i]);
                    n.max = n.min + s,
                    e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
                    e.relativeTarget[i].max = e.relativeTarget[i].min + s)
                }
                );
                let s = rO();
                rV(s, t, r.layoutBox);
                let a = rO();
                o ? rV(a, e.applyTransform(i, !0), r.measuredBox) : rV(a, t, r.layoutBox);
                let l = !i_(s)
                  , u = !1;
                if (!e.resumeFrom) {
                    let i = e.getClosestProjectingParent();
                    if (i && !i.resumeFrom) {
                        let {snapshot: n, layout: o} = i;
                        if (n && o) {
                            let s = rz();
                            rN(s, r.layoutBox, n.layoutBox);
                            let a = rz();
                            rN(a, t, o.layoutBox),
                            iY(s, a) || (u = !0),
                            i.options.layoutRoot && (e.relativeTarget = a,
                            e.relativeTargetOrigin = s,
                            e.relativeParent = i)
                        }
                    }
                }
                e.notifyListeners("didUpdate", {
                    layout: t,
                    snapshot: r,
                    delta: a,
                    layoutDelta: s,
                    hasLayoutChanged: l,
                    hasRelativeLayoutChanged: u
                })
            } else if (e.isLead()) {
                let {onExitComplete: t} = e.options;
                t && t()
            }
            e.options.transition = void 0
        }
        function i6(e) {
            _.value && iQ.nodes++,
            e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
            e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
            e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
        }
        function i7(e) {
            e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
        }
        function i9(e) {
            e.clearSnapshot()
        }
        function i8(e) {
            e.clearMeasurements()
        }
        function ne(e) {
            e.isLayoutDirty = !1
        }
        function nt(e) {
            let {visualElement: t} = e.options;
            t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
            e.resetTransform()
        }
        function nr(e) {
            e.finishAnimation(),
            e.targetDelta = e.relativeTarget = e.target = void 0,
            e.isProjectionDirty = !0
        }
        function ni(e) {
            e.resolveTargetDelta()
        }
        function nn(e) {
            e.calcProjection()
        }
        function no(e) {
            e.resetSkewAndRotation()
        }
        function ns(e) {
            e.removeLeadSnapshot()
        }
        function na(e, t, r) {
            e.translate = tk(t.translate, 0, r),
            e.scale = tk(t.scale, 1, r),
            e.origin = t.origin,
            e.originPoint = t.originPoint
        }
        function nl(e, t, r, i) {
            e.min = tk(t.min, r.min, i),
            e.max = tk(t.max, r.max, i)
        }
        function nu(e) {
            return e.animationValues && void 0 !== e.animationValues.opacityExit
        }
        let nd = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        }
          , nh = e => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
          , nc = nh("applewebkit/") && !nh("chrome/") ? Math.round : N;
        function np(e) {
            e.min = nc(e.min),
            e.max = nc(e.max)
        }
        function nm(e, t, r) {
            return "position" === e || "preserve-aspect" === e && !(.2 >= Math.abs(iK(t) - iK(r)))
        }
        function nf(e) {
            var t;
            return e !== e.root && (null === (t = e.scroll) || void 0 === t ? void 0 : t.wasRoot)
        }
        let nv = i5({
            attachResizeListener: (e, t) => rE(e, "resize", t),
            measureScroll: () => ({
                x: document.documentElement.scrollLeft || document.body.scrollLeft,
                y: document.documentElement.scrollTop || document.body.scrollTop
            }),
            checkIsScrollRoot: () => !0
        })
          , ng = {
            current: void 0
        }
          , ny = i5({
            measureScroll: e => ({
                x: e.scrollLeft,
                y: e.scrollTop
            }),
            defaultParent: () => {
                if (!ng.current) {
                    let e = new nv({});
                    e.mount(window),
                    e.setOptions({
                        layoutScroll: !0
                    }),
                    ng.current = e
                }
                return ng.current
            }
            ,
            resetTransform: (e, t) => {
                e.style.transform = void 0 !== t ? t : "none"
            }
            ,
            checkIsScrollRoot: e => "fixed" === window.getComputedStyle(e).position
        });
        function nb(e, t, r) {
            let {props: i} = e;
            e.animationState && i.whileHover && e.animationState.setActive("whileHover", "Start" === r);
            let n = i["onHover" + r];
            n && G.postRender( () => n(t, rC(t)))
        }
        class nx extends rS {
            mount() {
                let {current: e} = this.node;
                e && (this.unmount = function(e, t, r={}) {
                    let[i,n,o] = T(e, r)
                      , s = e => {
                        if (!P(e))
                            return;
                        let {target: r} = e
                          , i = t(r, e);
                        if ("function" != typeof i || !r)
                            return;
                        let o = e => {
                            P(e) && (i(e),
                            r.removeEventListener("pointerleave", o))
                        }
                        ;
                        r.addEventListener("pointerleave", o, n)
                    }
                    ;
                    return i.forEach(e => {
                        e.addEventListener("pointerenter", s, n)
                    }
                    ),
                    o
                }(e, (e, t) => (nb(this.node, t, "Start"),
                e => nb(this.node, e, "End"))))
            }
            unmount() {}
        }
        class nw extends rS {
            constructor() {
                super(...arguments),
                this.isActive = !1
            }
            onFocus() {
                let e = !1;
                try {
                    e = this.node.current.matches(":focus-visible")
                } catch (t) {
                    e = !0
                }
                e && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0),
                this.isActive = !0)
            }
            onBlur() {
                this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1),
                this.isActive = !1)
            }
            mount() {
                this.unmount = tI(rE(this.node.current, "focus", () => this.onFocus()), rE(this.node.current, "blur", () => this.onBlur()))
            }
            unmount() {}
        }
        function nS(e, t, r) {
            let {props: i} = e;
            if (e.current instanceof HTMLButtonElement && e.current.disabled)
                return;
            e.animationState && i.whileTap && e.animationState.setActive("whileTap", "Start" === r);
            let n = i["onTap" + ("End" === r ? "" : r)];
            n && G.postRender( () => n(t, rC(t)))
        }
        class nT extends rS {
            mount() {
                let {current: e} = this.node;
                e && (this.unmount = function(e, t, r={}) {
                    let[i,n,o] = T(e, r)
                      , s = e => {
                        let r = e.currentTarget;
                        if (!r || !V(e) || M.has(r))
                            return;
                        M.add(r),
                        A(e, "set");
                        let i = t(r, e)
                          , o = (e, t) => {
                            r.removeEventListener("pointerup", s),
                            r.removeEventListener("pointercancel", a),
                            A(e, "release"),
                            V(e) && M.has(r) && (M.delete(r),
                            "function" == typeof i && i(e, {
                                success: t
                            }))
                        }
                          , s = e => {
                            var t;
                            e.isTrusted && (t = r instanceof Element ? r.getBoundingClientRect() : {
                                left: 0,
                                top: 0,
                                right: window.innerWidth,
                                bottom: window.innerHeight
                            },
                            e.clientX < t.left || e.clientX > t.right || e.clientY < t.top || e.clientY > t.bottom) ? o(e, !1) : o(e, !(r instanceof Element) || E(r, e.target))
                        }
                          , a = e => {
                            o(e, !1)
                        }
                        ;
                        r.addEventListener("pointerup", s, n),
                        r.addEventListener("pointercancel", a, n),
                        r.addEventListener("lostpointercapture", a, n)
                    }
                    ;
                    return i.forEach(e => {
                        e = r.useGlobalTarget ? window : e;
                        let t = !1;
                        if (e instanceof HTMLElement) {
                            var i;
                            t = !0,
                            i = e,
                            k.has(i.tagName) || -1 !== i.tabIndex || null !== e.getAttribute("tabindex") || (e.tabIndex = 0)
                        }
                        e.addEventListener("pointerdown", s, n),
                        t && e.addEventListener("focus", e => j(e, n), n)
                    }
                    ),
                    o
                }(e, (e, t) => (nS(this.node, t, "Start"),
                (e, {success: t}) => nS(this.node, e, t ? "End" : "Cancel")), {
                    useGlobalTarget: this.node.props.globalTapTarget
                }))
            }
            unmount() {}
        }
        let nP = new WeakMap
          , nA = new WeakMap
          , nE = e => {
            let t = nP.get(e.target);
            t && t(e)
        }
          , nC = e => {
            e.forEach(nE)
        }
          , nk = {
            some: 0,
            all: 1
        };
        class nM extends rS {
            constructor() {
                super(...arguments),
                this.hasEnteredView = !1,
                this.isInView = !1
            }
            startObserver() {
                this.unmount();
                let {viewport: e={}} = this.node.getProps()
                  , {root: t, margin: r, amount: i="some", once: n} = e
                  , o = {
                    root: t ? t.current : void 0,
                    rootMargin: r,
                    threshold: "number" == typeof i ? i : nk[i]
                };
                return function(e, t, r) {
                    let i = function({root: e, ...t}) {
                        let r = e || document;
                        nA.has(r) || nA.set(r, {});
                        let i = nA.get(r)
                          , n = JSON.stringify(t);
                        return i[n] || (i[n] = new IntersectionObserver(nC,{
                            root: e,
                            ...t
                        })),
                        i[n]
                    }(t);
                    return nP.set(e, r),
                    i.observe(e),
                    () => {
                        nP.delete(e),
                        i.unobserve(e)
                    }
                }(this.node.current, o, e => {
                    let {isIntersecting: t} = e;
                    if (this.isInView === t || (this.isInView = t,
                    n && !t && this.hasEnteredView))
                        return;
                    t && (this.hasEnteredView = !0),
                    this.node.animationState && this.node.animationState.setActive("whileInView", t);
                    let {onViewportEnter: r, onViewportLeave: i} = this.node.getProps()
                      , o = t ? r : i;
                    o && o(e)
                }
                )
            }
            mount() {
                this.startObserver()
            }
            update() {
                if ("undefined" == typeof IntersectionObserver)
                    return;
                let {props: e, prevProps: t} = this.node;
                ["amount", "margin", "root"].some(function({viewport: e={}}, {viewport: t={}}={}) {
                    return r => e[r] !== t[r]
                }(e, t)) && this.startObserver()
            }
            unmount() {}
        }
        let nR = (0,
        ih.createContext)({
            strict: !1
        });
        var nD = r(7249);
        let nj = (0,
        ih.createContext)({});
        function nV(e) {
            return n(e.animate) || rv.some(t => rm(e[t]))
        }
        function nL(e) {
            return !!(nV(e) || e.variants)
        }
        function nF(e) {
            return Array.isArray(e) ? e.join(" ") : e
        }
        var nN = r(5687);
        let nI = {
            animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
            exit: ["exit"],
            drag: ["drag", "dragControls"],
            focus: ["whileFocus"],
            hover: ["whileHover", "onHoverStart", "onHoverEnd"],
            tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
            pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
            inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
            layout: ["layout", "layoutId"]
        }
          , nO = {};
        for (let e in nI)
            nO[e] = {
                isEnabled: t => nI[e].some(e => !!t[e])
            };
        let nB = Symbol.for("motionComponentSymbol");
        var nz = r(9656)
          , nU = r(5403);
        function n$(e, {layout: t, layoutId: r}) {
            return O.has(e) || e.startsWith("origin") || (t || void 0 !== r) && (!!iw[e] || "opacity" === e)
        }
        let nW = (e, t) => t && "number" == typeof e ? t.transform(e) : e
          , nH = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        }
          , n_ = I.length;
        function nX(e, t, r) {
            let {style: i, vars: n, transformOrigin: o} = e
              , s = !1
              , a = !1;
            for (let e in t) {
                let r = t[e];
                if (O.has(e)) {
                    s = !0;
                    continue
                }
                if (tm(e)) {
                    n[e] = r;
                    continue
                }
                {
                    let t = nW(r, e4[e]);
                    e.startsWith("origin") ? (a = !0,
                    o[e] = t) : i[e] = t
                }
            }
            if (!t.transform && (s || r ? i.transform = function(e, t, r) {
                let i = ""
                  , n = !0;
                for (let o = 0; o < n_; o++) {
                    let s = I[o]
                      , a = e[s];
                    if (void 0 === a)
                        continue;
                    let l = !0;
                    if (!(l = "number" == typeof a ? a === (s.startsWith("scale") ? 1 : 0) : 0 === parseFloat(a)) || r) {
                        let e = nW(a, e4[s]);
                        if (!l) {
                            n = !1;
                            let t = nH[s] || s;
                            i += `${t}(${e}) `
                        }
                        r && (t[s] = e)
                    }
                }
                return i = i.trim(),
                r ? i = r(t, n ? "" : i) : n && (i = "none"),
                i
            }(t, e.transform, r) : i.transform && (i.transform = "none")),
            a) {
                let {originX: e="50%", originY: t="50%", originZ: r=0} = o;
                i.transformOrigin = `${e} ${t} ${r}`
            }
        }
        let nG = () => ({
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {}
        });
        function nY(e, t, r) {
            for (let i in t)
                es(t[i]) || n$(i, r) || (e[i] = t[i])
        }
        let nK = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
        function nq(e) {
            return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || nK.has(e)
        }
        let nZ = e => !nq(e);
        try {
            !function(e) {
                e && (nZ = t => t.startsWith("on") ? !nq(t) : e(t))
            }(require("@emotion/is-prop-valid").default)
        } catch (e) {}
        let nQ = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
        function nJ(e) {
            if ("string" != typeof e || e.includes("-"))
                ;
            else if (nQ.indexOf(e) > -1 || /[A-Z]/u.test(e))
                return !0;
            return !1
        }
        let n0 = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        }
          , n1 = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        };
        function n2(e, t, r) {
            return "string" == typeof e ? e : eB.transform(t + r * e)
        }
        function n5(e, {attrX: t, attrY: r, attrScale: i, originX: n, originY: o, pathLength: s, pathSpacing: a=1, pathOffset: l=0, ...u}, d, h) {
            if (nX(e, u, h),
            d) {
                e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
                return
            }
            e.attrs = e.style,
            e.style = {};
            let {attrs: c, style: p, dimensions: m} = e;
            c.transform && (m && (p.transform = c.transform),
            delete c.transform),
            m && (void 0 !== n || void 0 !== o || p.transform) && (p.transformOrigin = function(e, t, r) {
                let i = n2(t, e.x, e.width)
                  , n = n2(r, e.y, e.height);
                return `${i} ${n}`
            }(m, void 0 !== n ? n : .5, void 0 !== o ? o : .5)),
            void 0 !== t && (c.x = t),
            void 0 !== r && (c.y = r),
            void 0 !== i && (c.scale = i),
            void 0 !== s && function(e, t, r=1, i=0, n=!0) {
                e.pathLength = 1;
                let o = n ? n0 : n1;
                e[o.offset] = eB.transform(-i);
                let s = eB.transform(t)
                  , a = eB.transform(r);
                e[o.array] = `${s} ${a}`
            }(c, s, a, l, !1)
        }
        let n3 = () => ({
            ...nG(),
            attrs: {}
        })
          , n4 = e => "string" == typeof e && "svg" === e.toLowerCase();
        var n6 = r(9234);
        let n7 = e => (t, r) => {
            let i = (0,
            ih.useContext)(nj)
              , s = (0,
            ih.useContext)(nz.t)
              , a = () => (function({scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: r}, i, s, a) {
                let l = {
                    latestValues: function(e, t, r, i) {
                        let s = {}
                          , a = i(e, {});
                        for (let e in a)
                            s[e] = iC(a[e]);
                        let {initial: l, animate: u} = e
                          , d = nV(e)
                          , h = nL(e);
                        t && h && !d && !1 !== e.inherit && (void 0 === l && (l = t.initial),
                        void 0 === u && (u = t.animate));
                        let c = !!r && !1 === r.initial
                          , p = (c = c || !1 === l) ? u : l;
                        if (p && "boolean" != typeof p && !n(p)) {
                            let t = Array.isArray(p) ? p : [p];
                            for (let r = 0; r < t.length; r++) {
                                let i = o(e, t[r]);
                                if (i) {
                                    let {transitionEnd: e, transition: t, ...r} = i;
                                    for (let e in r) {
                                        let t = r[e];
                                        if (Array.isArray(t)) {
                                            let e = c ? t.length - 1 : 0;
                                            t = t[e]
                                        }
                                        null !== t && (s[e] = t)
                                    }
                                    for (let t in e)
                                        s[t] = e[t]
                                }
                            }
                        }
                        return s
                    }(i, s, a, e),
                    renderState: t()
                };
                return r && (l.onMount = e => r({
                    props: i,
                    current: e,
                    ...l
                }),
                l.onUpdate = e => r(e)),
                l
            }
            )(e, t, i, s);
            return r ? a() : (0,
            n6.M)(a)
        }
        ;
        function n9(e, t, r) {
            var i;
            let {style: n} = e
              , o = {};
            for (let s in n)
                (es(n[s]) || t.style && es(t.style[s]) || n$(s, e) || (null === (i = null == r ? void 0 : r.getValue(s)) || void 0 === i ? void 0 : i.liveStyle) !== void 0) && (o[s] = n[s]);
            return o
        }
        let n8 = {
            useVisualState: n7({
                scrapeMotionValuesFromProps: n9,
                createRenderState: nG
            })
        };
        function oe(e, t) {
            try {
                t.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
            } catch (e) {
                t.dimensions = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                }
            }
        }
        function ot(e, {style: t, vars: r}, i, n) {
            for (let o in Object.assign(e.style, t, n && n.getProjectionStyles(i)),
            r)
                e.style.setProperty(o, r[o])
        }
        let or = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
        function oi(e, t, r, i) {
            for (let r in ot(e, t, void 0, i),
            t.attrs)
                e.setAttribute(or.has(r) ? r : el(r), t.attrs[r])
        }
        function on(e, t, r) {
            let i = n9(e, t, r);
            for (let r in e)
                (es(e[r]) || es(t[r])) && (i[-1 !== I.indexOf(r) ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r] = e[r]);
            return i
        }
        let oo = ["x", "y", "width", "height", "cx", "cy", "r"]
          , os = {
            useVisualState: n7({
                scrapeMotionValuesFromProps: on,
                createRenderState: n3,
                onUpdate: ({props: e, prevProps: t, current: r, renderState: i, latestValues: n}) => {
                    if (!r)
                        return;
                    let o = !!e.drag;
                    if (!o) {
                        for (let e in n)
                            if (O.has(e)) {
                                o = !0;
                                break
                            }
                    }
                    if (!o)
                        return;
                    let s = !t;
                    if (t)
                        for (let r = 0; r < oo.length; r++) {
                            let i = oo[r];
                            e[i] !== t[i] && (s = !0)
                        }
                    s && G.read( () => {
                        oe(r, i),
                        G.render( () => {
                            n5(i, n, n4(r.tagName), e.transformTemplate),
                            oi(r, i)
                        }
                        )
                    }
                    )
                }
            })
        }
          , oa = {
            current: null
        }
          , ol = {
            current: !1
        }
          , ou = [...tx, eH, eJ]
          , od = e => ou.find(tb(e))
          , oh = new WeakMap
          , oc = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
        class op {
            scrapeMotionValuesFromProps(e, t, r) {
                return {}
            }
            constructor({parent: e, props: t, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: n, visualState: o}, s={}) {
                this.current = null,
                this.children = new Set,
                this.isVariantNode = !1,
                this.isControllingVariants = !1,
                this.shouldReduceMotion = null,
                this.values = new Map,
                this.KeyframeResolver = th,
                this.features = {},
                this.valueSubscriptions = new Map,
                this.prevMotionValues = {},
                this.events = {},
                this.propEventSubscriptions = {},
                this.notifyUpdate = () => this.notify("Update", this.latestValues),
                this.render = () => {
                    this.current && (this.triggerBuild(),
                    this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                }
                ,
                this.renderScheduledAt = 0,
                this.scheduleRender = () => {
                    let e = Q.now();
                    this.renderScheduledAt < e && (this.renderScheduledAt = e,
                    G.render(this.render, !1, !0))
                }
                ;
                let {latestValues: a, renderState: l, onUpdate: u} = o;
                this.onUpdate = u,
                this.latestValues = a,
                this.baseTarget = {
                    ...a
                },
                this.initialValues = t.initial ? {
                    ...a
                } : {},
                this.renderState = l,
                this.parent = e,
                this.props = t,
                this.presenceContext = r,
                this.depth = e ? e.depth + 1 : 0,
                this.reducedMotionConfig = i,
                this.options = s,
                this.blockInitialAnimation = !!n,
                this.isControllingVariants = nV(t),
                this.isVariantNode = nL(t),
                this.isVariantNode && (this.variantChildren = new Set),
                this.manuallyAnimateOnMount = !!(e && e.current);
                let {willChange: d, ...h} = this.scrapeMotionValuesFromProps(t, {}, this);
                for (let e in h) {
                    let t = h[e];
                    void 0 !== a[e] && es(t) && t.set(a[e], !1)
                }
            }
            mount(e) {
                this.current = e,
                oh.set(e, this),
                this.projection && !this.projection.instance && this.projection.mount(e),
                this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
                this.values.forEach( (e, t) => this.bindToMotionValue(t, e)),
                ol.current || function() {
                    if (ol.current = !0,
                    nN.B) {
                        if (window.matchMedia) {
                            let e = window.matchMedia("(prefers-reduced-motion)")
                              , t = () => oa.current = e.matches;
                            e.addListener(t),
                            t()
                        } else
                            oa.current = !1
                    }
                }(),
                this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || oa.current),
                this.parent && this.parent.children.add(this),
                this.update(this.props, this.presenceContext)
            }
            unmount() {
                for (let e in this.projection && this.projection.unmount(),
                Y(this.notifyUpdate),
                Y(this.render),
                this.valueSubscriptions.forEach(e => e()),
                this.valueSubscriptions.clear(),
                this.removeFromVariantTree && this.removeFromVariantTree(),
                this.parent && this.parent.children.delete(this),
                this.events)
                    this.events[e].clear();
                for (let e in this.features) {
                    let t = this.features[e];
                    t && (t.unmount(),
                    t.isMounted = !1)
                }
                this.current = null
            }
            bindToMotionValue(e, t) {
                let r;
                this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
                let i = O.has(e);
                i && this.onBindTransform && this.onBindTransform();
                let n = t.on("change", t => {
                    this.latestValues[e] = t,
                    this.props.onUpdate && G.preRender(this.notifyUpdate),
                    i && this.projection && (this.projection.isTransformDirty = !0)
                }
                )
                  , o = t.on("renderRequest", this.scheduleRender);
                window.MotionCheckAppearSync && (r = window.MotionCheckAppearSync(this, e, t)),
                this.valueSubscriptions.set(e, () => {
                    n(),
                    o(),
                    r && r(),
                    t.owner && t.stop()
                }
                )
            }
            sortNodePosition(e) {
                return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0
            }
            updateFeatures() {
                let e = "animation";
                for (e in nO) {
                    let t = nO[e];
                    if (!t)
                        continue;
                    let {isEnabled: r, Feature: i} = t;
                    if (!this.features[e] && i && r(this.props) && (this.features[e] = new i(this)),
                    this.features[e]) {
                        let t = this.features[e];
                        t.isMounted ? t.update() : (t.mount(),
                        t.isMounted = !0)
                    }
                }
            }
            triggerBuild() {
                this.build(this.renderState, this.latestValues, this.props)
            }
            measureViewportBox() {
                return this.current ? this.measureInstanceViewportBox(this.current, this.props) : rz()
            }
            getStaticValue(e) {
                return this.latestValues[e]
            }
            setStaticValue(e, t) {
                this.latestValues[e] = t
            }
            update(e, t) {
                (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
                this.prevProps = this.props,
                this.props = e,
                this.prevPresenceContext = this.presenceContext,
                this.presenceContext = t;
                for (let t = 0; t < oc.length; t++) {
                    let r = oc[t];
                    this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](),
                    delete this.propEventSubscriptions[r]);
                    let i = e["on" + r];
                    i && (this.propEventSubscriptions[r] = this.on(r, i))
                }
                this.prevMotionValues = function(e, t, r) {
                    for (let i in t) {
                        let n = t[i]
                          , o = r[i];
                        if (es(n))
                            e.addValue(i, n);
                        else if (es(o))
                            e.addValue(i, eo(n, {
                                owner: e
                            }));
                        else if (o !== n) {
                            if (e.hasValue(i)) {
                                let t = e.getValue(i);
                                !0 === t.liveStyle ? t.jump(n) : t.hasAnimated || t.set(n)
                            } else {
                                let t = e.getStaticValue(i);
                                e.addValue(i, eo(void 0 !== t ? t : n, {
                                    owner: e
                                }))
                            }
                        }
                    }
                    for (let i in r)
                        void 0 === t[i] && e.removeValue(i);
                    return t
                }(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues),
                this.handleChildMotionValue && this.handleChildMotionValue(),
                this.onUpdate && this.onUpdate(this)
            }
            getProps() {
                return this.props
            }
            getVariant(e) {
                return this.props.variants ? this.props.variants[e] : void 0
            }
            getDefaultTransition() {
                return this.props.transition
            }
            getTransformPagePoint() {
                return this.props.transformPagePoint
            }
            getClosestVariantNode() {
                return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
            }
            addVariantChild(e) {
                let t = this.getClosestVariantNode();
                if (t)
                    return t.variantChildren && t.variantChildren.add(e),
                    () => t.variantChildren.delete(e)
            }
            addValue(e, t) {
                let r = this.values.get(e);
                t !== r && (r && this.removeValue(e),
                this.bindToMotionValue(e, t),
                this.values.set(e, t),
                this.latestValues[e] = t.get())
            }
            removeValue(e) {
                this.values.delete(e);
                let t = this.valueSubscriptions.get(e);
                t && (t(),
                this.valueSubscriptions.delete(e)),
                delete this.latestValues[e],
                this.removeValueFromRenderState(e, this.renderState)
            }
            hasValue(e) {
                return this.values.has(e)
            }
            getValue(e, t) {
                if (this.props.values && this.props.values[e])
                    return this.props.values[e];
                let r = this.values.get(e);
                return void 0 === r && void 0 !== t && (r = eo(null === t ? void 0 : t, {
                    owner: this
                }),
                this.addValue(e, r)),
                r
            }
            readValue(e, t) {
                var r;
                let i = void 0 === this.latestValues[e] && this.current ? null !== (r = this.getBaseTargetFromProps(this.props, e)) && void 0 !== r ? r : this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e];
                return null != i && ("string" == typeof i && (tc(i) || eS(i)) ? i = parseFloat(i) : !od(i) && eJ.test(t) && (i = e9(e, t)),
                this.setBaseTarget(e, es(i) ? i.get() : i)),
                es(i) ? i.get() : i
            }
            setBaseTarget(e, t) {
                this.baseTarget[e] = t
            }
            getBaseTarget(e) {
                var t;
                let r;
                let {initial: i} = this.props;
                if ("string" == typeof i || "object" == typeof i) {
                    let n = o(this.props, i, null === (t = this.presenceContext) || void 0 === t ? void 0 : t.custom);
                    n && (r = n[e])
                }
                if (i && void 0 !== r)
                    return r;
                let n = this.getBaseTargetFromProps(this.props, e);
                return void 0 === n || es(n) ? void 0 !== this.initialValues[e] && void 0 === r ? void 0 : this.baseTarget[e] : n
            }
            on(e, t) {
                return this.events[e] || (this.events[e] = new et),
                this.events[e].add(t)
            }
            notify(e, ...t) {
                this.events[e] && this.events[e].notify(...t)
            }
        }
        class om extends op {
            constructor() {
                super(...arguments),
                this.KeyframeResolver = tS
            }
            sortInstanceNodePosition(e, t) {
                return 2 & e.compareDocumentPosition(t) ? 1 : -1
            }
            getBaseTargetFromProps(e, t) {
                return e.style ? e.style[t] : void 0
            }
            removeValueFromRenderState(e, {vars: t, style: r}) {
                delete t[e],
                delete r[e]
            }
            handleChildMotionValue() {
                this.childSubscription && (this.childSubscription(),
                delete this.childSubscription);
                let {children: e} = this.props;
                es(e) && (this.childSubscription = e.on("change", e => {
                    this.current && (this.current.textContent = `${e}`)
                }
                ))
            }
        }
        class of extends om {
            constructor() {
                super(...arguments),
                this.type = "html",
                this.renderInstance = ot
            }
            readValueFromInstance(e, t) {
                if (O.has(t)) {
                    let e = e7(t);
                    return e && e.default || 0
                }
                {
                    let r = window.getComputedStyle(e)
                      , i = (tm(t) ? r.getPropertyValue(t) : r[t]) || 0;
                    return "string" == typeof i ? i.trim() : i
                }
            }
            measureInstanceViewportBox(e, {transformPagePoint: t}) {
                return rQ(e, t)
            }
            build(e, t, r) {
                nX(e, t, r.transformTemplate)
            }
            scrapeMotionValuesFromProps(e, t, r) {
                return n9(e, t, r)
            }
        }
        class ov extends om {
            constructor() {
                super(...arguments),
                this.type = "svg",
                this.isSVGTag = !1,
                this.measureInstanceViewportBox = rz,
                this.updateDimensions = () => {
                    this.current && !this.renderState.dimensions && oe(this.current, this.renderState)
                }
            }
            getBaseTargetFromProps(e, t) {
                return e[t]
            }
            readValueFromInstance(e, t) {
                if (O.has(t)) {
                    let e = e7(t);
                    return e && e.default || 0
                }
                return t = or.has(t) ? t : el(t),
                e.getAttribute(t)
            }
            scrapeMotionValuesFromProps(e, t, r) {
                return on(e, t, r)
            }
            onBindTransform() {
                this.current && !this.renderState.dimensions && G.postRender(this.updateDimensions)
            }
            build(e, t, r) {
                n5(e, t, this.isSVGTag, r.transformTemplate)
            }
            renderInstance(e, t, r, i) {
                oi(e, t, r, i)
            }
            mount(e) {
                this.isSVGTag = n4(e.tagName),
                super.mount(e)
            }
        }
        let og = function(e) {
            if ("undefined" == typeof Proxy)
                return e;
            let t = new Map;
            return new Proxy( (...t) => e(...t),{
                get: (r, i) => "create" === i ? e : (t.has(i) || t.set(i, e(i)),
                t.get(i))
            })
        }((il = {
            animation: {
                Feature: rT
            },
            exit: {
                Feature: rA
            },
            inView: {
                Feature: nM
            },
            tap: {
                Feature: nT
            },
            focus: {
                Feature: nw
            },
            hover: {
                Feature: nx
            },
            pan: {
                Feature: ia
            },
            drag: {
                Feature: io,
                ProjectionNode: ny,
                MeasureLayout: iT
            },
            layout: {
                ProjectionNode: ny,
                MeasureLayout: iT
            }
        },
        iu = (e, t) => nJ(e) ? new ov(t) : new of(t,{
            allowProjection: e !== ih.Fragment
        }),
        function(e, {forwardMotionProps: t}={
            forwardMotionProps: !1
        }) {
            return function(e) {
                var t, r;
                let {preloadedFeatures: i, createVisualElement: n, useRender: o, useVisualState: s, Component: a} = e;
                function l(e, t) {
                    var r;
                    let i;
                    let l = {
                        ...(0,
                        ih.useContext)(nD.Q),
                        ...e,
                        layoutId: function(e) {
                            let {layoutId: t} = e
                              , r = (0,
                            ih.useContext)(ip.L).id;
                            return r && void 0 !== t ? r + "-" + t : t
                        }(e)
                    }
                      , {isStatic: u} = l
                      , d = function(e) {
                        let {initial: t, animate: r} = function(e, t) {
                            if (nV(e)) {
                                let {initial: t, animate: r} = e;
                                return {
                                    initial: !1 === t || rm(t) ? t : void 0,
                                    animate: rm(r) ? r : void 0
                                }
                            }
                            return !1 !== e.inherit ? t : {}
                        }(e, (0,
                        ih.useContext)(nj));
                        return (0,
                        ih.useMemo)( () => ({
                            initial: t,
                            animate: r
                        }), [nF(t), nF(r)])
                    }(e)
                      , h = s(e, u);
                    if (!u && nN.B) {
                        (0,
                        ih.useContext)(nR).strict;
                        let e = function(e) {
                            let {drag: t, layout: r} = nO;
                            if (!t && !r)
                                return {};
                            let i = {
                                ...t,
                                ...r
                            };
                            return {
                                MeasureLayout: (null == t ? void 0 : t.isEnabled(e)) || (null == r ? void 0 : r.isEnabled(e)) ? i.MeasureLayout : void 0,
                                ProjectionNode: i.ProjectionNode
                            }
                        }(l);
                        i = e.MeasureLayout,
                        d.visualElement = function(e, t, r, i, n) {
                            var o, s;
                            let {visualElement: a} = (0,
                            ih.useContext)(nj)
                              , l = (0,
                            ih.useContext)(nR)
                              , u = (0,
                            ih.useContext)(nz.t)
                              , d = (0,
                            ih.useContext)(nD.Q).reducedMotion
                              , h = (0,
                            ih.useRef)(null);
                            i = i || l.renderer,
                            !h.current && i && (h.current = i(e, {
                                visualState: t,
                                parent: a,
                                props: r,
                                presenceContext: u,
                                blockInitialAnimation: !!u && !1 === u.initial,
                                reducedMotionConfig: d
                            }));
                            let c = h.current
                              , p = (0,
                            ih.useContext)(im);
                            c && !c.projection && n && ("html" === c.type || "svg" === c.type) && function(e, t, r, i) {
                                let {layoutId: n, layout: o, drag: s, dragConstraints: a, layoutScroll: l, layoutRoot: u} = t;
                                e.projection = new r(e.latestValues,t["data-framer-portal-id"] ? void 0 : function e(t) {
                                    if (t)
                                        return !1 !== t.options.allowProjection ? t.projection : e(t.parent)
                                }(e.parent)),
                                e.projection.setOptions({
                                    layoutId: n,
                                    layout: o,
                                    alwaysMeasureLayout: !!s || a && rJ(a),
                                    visualElement: e,
                                    animationType: "string" == typeof o ? o : "both",
                                    initialPromotionConfig: i,
                                    layoutScroll: l,
                                    layoutRoot: u
                                })
                            }(h.current, r, n, p);
                            let m = (0,
                            ih.useRef)(!1);
                            (0,
                            ih.useInsertionEffect)( () => {
                                c && m.current && c.update(r, u)
                            }
                            );
                            let f = r[eu]
                              , v = (0,
                            ih.useRef)(!!f && !(null === (o = window.MotionHandoffIsComplete) || void 0 === o ? void 0 : o.call(window, f)) && (null === (s = window.MotionHasOptimisedAnimation) || void 0 === s ? void 0 : s.call(window, f)));
                            return (0,
                            nU.E)( () => {
                                c && (m.current = !0,
                                window.MotionIsMounted = !0,
                                c.updateFeatures(),
                                iv.render(c.render),
                                v.current && c.animationState && c.animationState.animateChanges())
                            }
                            ),
                            (0,
                            ih.useEffect)( () => {
                                c && (!v.current && c.animationState && c.animationState.animateChanges(),
                                v.current && (queueMicrotask( () => {
                                    var e;
                                    null === (e = window.MotionHandoffMarkAsComplete) || void 0 === e || e.call(window, f)
                                }
                                ),
                                v.current = !1))
                            }
                            ),
                            c
                        }(a, h, l, n, e.ProjectionNode)
                    }
                    return (0,
                    id.jsxs)(nj.Provider, {
                        value: d,
                        children: [i && d.visualElement ? (0,
                        id.jsx)(i, {
                            visualElement: d.visualElement,
                            ...l
                        }) : null, o(a, e, (r = d.visualElement,
                        (0,
                        ih.useCallback)(e => {
                            e && h.onMount && h.onMount(e),
                            r && (e ? r.mount(e) : r.unmount()),
                            t && ("function" == typeof t ? t(e) : rJ(t) && (t.current = e))
                        }
                        , [r])), h, u, d.visualElement)]
                    })
                }
                i && function(e) {
                    for (let t in e)
                        nO[t] = {
                            ...nO[t],
                            ...e[t]
                        }
                }(i),
                l.displayName = "motion.".concat("string" == typeof a ? a : "create(".concat(null !== (r = null !== (t = a.displayName) && void 0 !== t ? t : a.name) && void 0 !== r ? r : "", ")"));
                let u = (0,
                ih.forwardRef)(l);
                return u[nB] = a,
                u
            }({
                ...nJ(e) ? os : n8,
                preloadedFeatures: il,
                useRender: function(e=!1) {
                    return (t, r, i, {latestValues: n}, o) => {
                        let s = (nJ(t) ? function(e, t, r, i) {
                            let n = (0,
                            ih.useMemo)( () => {
                                let r = n3();
                                return n5(r, t, n4(i), e.transformTemplate),
                                {
                                    ...r.attrs,
                                    style: {
                                        ...r.style
                                    }
                                }
                            }
                            , [t]);
                            if (e.style) {
                                let t = {};
                                nY(t, e.style, e),
                                n.style = {
                                    ...t,
                                    ...n.style
                                }
                            }
                            return n
                        }
                        : function(e, t) {
                            let r = {}
                              , i = function(e, t) {
                                let r = e.style || {}
                                  , i = {};
                                return nY(i, r, e),
                                Object.assign(i, function({transformTemplate: e}, t) {
                                    return (0,
                                    ih.useMemo)( () => {
                                        let r = nG();
                                        return nX(r, t, e),
                                        Object.assign({}, r.vars, r.style)
                                    }
                                    , [t])
                                }(e, t)),
                                i
                            }(e, t);
                            return e.drag && !1 !== e.dragListener && (r.draggable = !1,
                            i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
                            i.touchAction = !0 === e.drag ? "none" : `pan-${"x" === e.drag ? "y" : "x"}`),
                            void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0),
                            r.style = i,
                            r
                        }
                        )(r, n, o, t)
                          , a = function(e, t, r) {
                            let i = {};
                            for (let n in e)
                                ("values" !== n || "object" != typeof e.values) && (nZ(n) || !0 === r && nq(n) || !t && !nq(n) || e.draggable && n.startsWith("onDrag")) && (i[n] = e[n]);
                            return i
                        }(r, "string" == typeof t, e)
                          , l = t !== ih.Fragment ? {
                            ...a,
                            ...s,
                            ref: i
                        } : {}
                          , {children: u} = r
                          , d = (0,
                        ih.useMemo)( () => es(u) ? u.get() : u, [u]);
                        return (0,
                        ih.createElement)(t, {
                            ...l,
                            children: d
                        })
                    }
                }(t),
                createVisualElement: iu,
                Component: e
            })
        }
        ))
    }
    ,
    5687: (e, t, r) => {
        r.d(t, {
            B: () => i
        });
        let i = "undefined" != typeof window
    }
    ,
    9234: (e, t, r) => {
        r.d(t, {
            M: () => n
        });
        var i = r(2115);
        function n(e) {
            let t = (0,
            i.useRef)(null);
            return null === t.current && (t.current = e()),
            t.current
        }
    }
    ,
    5403: (e, t, r) => {
        r.d(t, {
            E: () => n
        });
        var i = r(2115);
        let n = r(5687).B ? i.useLayoutEffect : i.useEffect
    }
    ,
    7113: (e, t, r) => {
        r.d(t, {
            D: () => d,
            N: () => h
        });
        var i = r(2115)
          , n = (e, t, r, i, n, o, s, a) => {
            let l = document.documentElement
              , u = ["light", "dark"];
            function d(t) {
                (Array.isArray(e) ? e : [e]).forEach(e => {
                    let r = "class" === e
                      , i = r && o ? n.map(e => o[e] || e) : n;
                    r ? (l.classList.remove(...i),
                    l.classList.add(t)) : l.setAttribute(e, t)
                }
                ),
                a && u.includes(t) && (l.style.colorScheme = t)
            }
            if (i)
                d(i);
            else
                try {
                    let e = localStorage.getItem(t) || r
                      , i = s && "system" === e ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : e;
                    d(i)
                } catch (e) {}
        }
          , o = ["light", "dark"]
          , s = "(prefers-color-scheme: dark)"
          , a = "undefined" == typeof window
          , l = i.createContext(void 0)
          , u = {
            setTheme: e => {}
            ,
            themes: []
        }
          , d = () => {
            var e;
            return null != (e = i.useContext(l)) ? e : u
        }
          , h = e => i.useContext(l) ? i.createElement(i.Fragment, null, e.children) : i.createElement(p, {
            ...e
        })
          , c = ["light", "dark"]
          , p = e => {
            let {forcedTheme: t, disableTransitionOnChange: r=!1, enableSystem: n=!0, enableColorScheme: a=!0, storageKey: u="theme", themes: d=c, defaultTheme: h=n ? "system" : "light", attribute: p="data-theme", value: y, children: b, nonce: x, scriptProps: w} = e
              , [S,T] = i.useState( () => f(u, h))
              , [P,A] = i.useState( () => f(u))
              , E = y ? Object.values(y) : d
              , C = i.useCallback(e => {
                let t = e;
                if (!t)
                    return;
                "system" === e && n && (t = g());
                let i = y ? y[t] : t
                  , s = r ? v(x) : null
                  , l = document.documentElement
                  , u = e => {
                    "class" === e ? (l.classList.remove(...E),
                    i && l.classList.add(i)) : e.startsWith("data-") && (i ? l.setAttribute(e, i) : l.removeAttribute(e))
                }
                ;
                if (Array.isArray(p) ? p.forEach(u) : u(p),
                a) {
                    let e = o.includes(h) ? h : null
                      , r = o.includes(t) ? t : e;
                    l.style.colorScheme = r
                }
                null == s || s()
            }
            , [x])
              , k = i.useCallback(e => {
                let t = "function" == typeof e ? e(S) : e;
                T(t);
                try {
                    localStorage.setItem(u, t)
                } catch (e) {}
            }
            , [S])
              , M = i.useCallback(e => {
                A(g(e)),
                "system" === S && n && !t && C("system")
            }
            , [S, t]);
            i.useEffect( () => {
                let e = window.matchMedia(s);
                return e.addListener(M),
                M(e),
                () => e.removeListener(M)
            }
            , [M]),
            i.useEffect( () => {
                let e = e => {
                    e.key === u && (e.newValue ? T(e.newValue) : k(h))
                }
                ;
                return window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
            }
            , [k]),
            i.useEffect( () => {
                C(null != t ? t : S)
            }
            , [t, S]);
            let R = i.useMemo( () => ({
                theme: S,
                setTheme: k,
                forcedTheme: t,
                resolvedTheme: "system" === S ? P : S,
                themes: n ? [...d, "system"] : d,
                systemTheme: n ? P : void 0
            }), [S, k, t, P, n, d]);
            return i.createElement(l.Provider, {
                value: R
            }, i.createElement(m, {
                forcedTheme: t,
                storageKey: u,
                attribute: p,
                enableSystem: n,
                enableColorScheme: a,
                defaultTheme: h,
                value: y,
                themes: d,
                nonce: x,
                scriptProps: w
            }), b)
        }
          , m = i.memo(e => {
            let {forcedTheme: t, storageKey: r, attribute: o, enableSystem: s, enableColorScheme: a, defaultTheme: l, value: u, themes: d, nonce: h, scriptProps: c} = e
              , p = JSON.stringify([o, r, l, t, d, u, s, a]).slice(1, -1);
            return i.createElement("script", {
                ...c,
                suppressHydrationWarning: !0,
                nonce: "undefined" == typeof window ? h : "",
                dangerouslySetInnerHTML: {
                    __html: "(".concat(n.toString(), ")(").concat(p, ")")
                }
            })
        }
        )
          , f = (e, t) => {
            let r;
            if (!a) {
                try {
                    r = localStorage.getItem(e) || void 0
                } catch (e) {}
                return r || t
            }
        }
          , v = e => {
            let t = document.createElement("style");
            return e && t.setAttribute("nonce", e),
            t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),
            document.head.appendChild(t),
            () => {
                window.getComputedStyle(document.body),
                setTimeout( () => {
                    document.head.removeChild(t)
                }
                , 1)
            }
        }
          , g = e => (e || (e = window.matchMedia(s)),
        e.matches ? "dark" : "light")
    }
    ,
    9795: (e, t, r) => {
        r.d(t, {
            QP: () => K
        });
        let i = e => {
            let t = a(e)
              , {conflictingClassGroups: r, conflictingClassGroupModifiers: i} = e;
            return {
                getClassGroupId: e => {
                    let r = e.split("-");
                    return "" === r[0] && 1 !== r.length && r.shift(),
                    n(r, t) || s(e)
                }
                ,
                getConflictingClassGroupIds: (e, t) => {
                    let n = r[e] || [];
                    return t && i[e] ? [...n, ...i[e]] : n
                }
            }
        }
          , n = (e, t) => {
            if (0 === e.length)
                return t.classGroupId;
            let r = e[0]
              , i = t.nextPart.get(r)
              , o = i ? n(e.slice(1), i) : void 0;
            if (o)
                return o;
            if (0 === t.validators.length)
                return;
            let s = e.join("-");
            return t.validators.find( ({validator: e}) => e(s))?.classGroupId
        }
          , o = /^\[(.+)\]$/
          , s = e => {
            if (o.test(e)) {
                let t = o.exec(e)[1]
                  , r = t?.substring(0, t.indexOf(":"));
                if (r)
                    return "arbitrary.." + r
            }
        }
          , a = e => {
            let {theme: t, prefix: r} = e
              , i = {
                nextPart: new Map,
                validators: []
            };
            return h(Object.entries(e.classGroups), r).forEach( ([e,r]) => {
                l(r, i, e, t)
            }
            ),
            i
        }
          , l = (e, t, r, i) => {
            e.forEach(e => {
                if ("string" == typeof e) {
                    ("" === e ? t : u(t, e)).classGroupId = r;
                    return
                }
                if ("function" == typeof e) {
                    if (d(e)) {
                        l(e(i), t, r, i);
                        return
                    }
                    t.validators.push({
                        validator: e,
                        classGroupId: r
                    });
                    return
                }
                Object.entries(e).forEach( ([e,n]) => {
                    l(n, u(t, e), r, i)
                }
                )
            }
            )
        }
          , u = (e, t) => {
            let r = e;
            return t.split("-").forEach(e => {
                r.nextPart.has(e) || r.nextPart.set(e, {
                    nextPart: new Map,
                    validators: []
                }),
                r = r.nextPart.get(e)
            }
            ),
            r
        }
          , d = e => e.isThemeGetter
          , h = (e, t) => t ? e.map( ([e,r]) => [e, r.map(e => "string" == typeof e ? t + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map( ([e,r]) => [t + e, r])) : e)]) : e
          , c = e => {
            if (e < 1)
                return {
                    get: () => void 0,
                    set: () => {}
                };
            let t = 0
              , r = new Map
              , i = new Map
              , n = (n, o) => {
                r.set(n, o),
                ++t > e && (t = 0,
                i = r,
                r = new Map)
            }
            ;
            return {
                get(e) {
                    let t = r.get(e);
                    return void 0 !== t ? t : void 0 !== (t = i.get(e)) ? (n(e, t),
                    t) : void 0
                },
                set(e, t) {
                    r.has(e) ? r.set(e, t) : n(e, t)
                }
            }
        }
          , p = e => {
            let {separator: t, experimentalParseClassName: r} = e
              , i = 1 === t.length
              , n = t[0]
              , o = t.length
              , s = e => {
                let r;
                let s = []
                  , a = 0
                  , l = 0;
                for (let u = 0; u < e.length; u++) {
                    let d = e[u];
                    if (0 === a) {
                        if (d === n && (i || e.slice(u, u + o) === t)) {
                            s.push(e.slice(l, u)),
                            l = u + o;
                            continue
                        }
                        if ("/" === d) {
                            r = u;
                            continue
                        }
                    }
                    "[" === d ? a++ : "]" === d && a--
                }
                let u = 0 === s.length ? e : e.substring(l)
                  , d = u.startsWith("!")
                  , h = d ? u.substring(1) : u;
                return {
                    modifiers: s,
                    hasImportantModifier: d,
                    baseClassName: h,
                    maybePostfixModifierPosition: r && r > l ? r - l : void 0
                }
            }
            ;
            return r ? e => r({
                className: e,
                parseClassName: s
            }) : s
        }
          , m = e => {
            if (e.length <= 1)
                return e;
            let t = []
              , r = [];
            return e.forEach(e => {
                "[" === e[0] ? (t.push(...r.sort(), e),
                r = []) : r.push(e)
            }
            ),
            t.push(...r.sort()),
            t
        }
          , f = e => ({
            cache: c(e.cacheSize),
            parseClassName: p(e),
            ...i(e)
        })
          , v = /\s+/
          , g = (e, t) => {
            let {parseClassName: r, getClassGroupId: i, getConflictingClassGroupIds: n} = t
              , o = []
              , s = e.trim().split(v)
              , a = "";
            for (let e = s.length - 1; e >= 0; e -= 1) {
                let t = s[e]
                  , {modifiers: l, hasImportantModifier: u, baseClassName: d, maybePostfixModifierPosition: h} = r(t)
                  , c = !!h
                  , p = i(c ? d.substring(0, h) : d);
                if (!p) {
                    if (!c || !(p = i(d))) {
                        a = t + (a.length > 0 ? " " + a : a);
                        continue
                    }
                    c = !1
                }
                let f = m(l).join(":")
                  , v = u ? f + "!" : f
                  , g = v + p;
                if (o.includes(g))
                    continue;
                o.push(g);
                let y = n(p, c);
                for (let e = 0; e < y.length; ++e) {
                    let t = y[e];
                    o.push(v + t)
                }
                a = t + (a.length > 0 ? " " + a : a)
            }
            return a
        }
        ;
        function y() {
            let e, t, r = 0, i = "";
            for (; r < arguments.length; )
                (e = arguments[r++]) && (t = b(e)) && (i && (i += " "),
                i += t);
            return i
        }
        let b = e => {
            let t;
            if ("string" == typeof e)
                return e;
            let r = "";
            for (let i = 0; i < e.length; i++)
                e[i] && (t = b(e[i])) && (r && (r += " "),
                r += t);
            return r
        }
          , x = e => {
            let t = t => t[e] || [];
            return t.isThemeGetter = !0,
            t
        }
          , w = /^\[(?:([a-z-]+):)?(.+)\]$/i
          , S = /^\d+\/\d+$/
          , T = new Set(["px", "full", "screen"])
          , P = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
          , A = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
          , E = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
          , C = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
          , k = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
          , M = e => D(e) || T.has(e) || S.test(e)
          , R = e => H(e, "length", _)
          , D = e => !!e && !Number.isNaN(Number(e))
          , j = e => H(e, "number", D)
          , V = e => !!e && Number.isInteger(Number(e))
          , L = e => e.endsWith("%") && D(e.slice(0, -1))
          , F = e => w.test(e)
          , N = e => P.test(e)
          , I = new Set(["length", "size", "percentage"])
          , O = e => H(e, I, X)
          , B = e => H(e, "position", X)
          , z = new Set(["image", "url"])
          , U = e => H(e, z, Y)
          , $ = e => H(e, "", G)
          , W = () => !0
          , H = (e, t, r) => {
            let i = w.exec(e);
            return !!i && (i[1] ? "string" == typeof t ? i[1] === t : t.has(i[1]) : r(i[2]))
        }
          , _ = e => A.test(e) && !E.test(e)
          , X = () => !1
          , G = e => C.test(e)
          , Y = e => k.test(e);
        Symbol.toStringTag;
        let K = function(e, ...t) {
            let r, i, n;
            let o = function(a) {
                return i = (r = f(t.reduce( (e, t) => t(e), e()))).cache.get,
                n = r.cache.set,
                o = s,
                s(a)
            };
            function s(e) {
                let t = i(e);
                if (t)
                    return t;
                let o = g(e, r);
                return n(e, o),
                o
            }
            return function() {
                return o(y.apply(null, arguments))
            }
        }( () => {
            let e = x("colors")
              , t = x("spacing")
              , r = x("blur")
              , i = x("brightness")
              , n = x("borderColor")
              , o = x("borderRadius")
              , s = x("borderSpacing")
              , a = x("borderWidth")
              , l = x("contrast")
              , u = x("grayscale")
              , d = x("hueRotate")
              , h = x("invert")
              , c = x("gap")
              , p = x("gradientColorStops")
              , m = x("gradientColorStopPositions")
              , f = x("inset")
              , v = x("margin")
              , g = x("opacity")
              , y = x("padding")
              , b = x("saturate")
              , w = x("scale")
              , S = x("sepia")
              , T = x("skew")
              , P = x("space")
              , A = x("translate")
              , E = () => ["auto", "contain", "none"]
              , C = () => ["auto", "hidden", "clip", "visible", "scroll"]
              , k = () => ["auto", F, t]
              , I = () => [F, t]
              , z = () => ["", M, R]
              , H = () => ["auto", D, F]
              , _ = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
              , X = () => ["solid", "dashed", "dotted", "double", "none"]
              , G = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
              , Y = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
              , K = () => ["", "0", F]
              , q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
              , Z = () => [D, F];
            return {
                cacheSize: 500,
                separator: ":",
                theme: {
                    colors: [W],
                    spacing: [M, R],
                    blur: ["none", "", N, F],
                    brightness: Z(),
                    borderColor: [e],
                    borderRadius: ["none", "", "full", N, F],
                    borderSpacing: I(),
                    borderWidth: z(),
                    contrast: Z(),
                    grayscale: K(),
                    hueRotate: Z(),
                    invert: K(),
                    gap: I(),
                    gradientColorStops: [e],
                    gradientColorStopPositions: [L, R],
                    inset: k(),
                    margin: k(),
                    opacity: Z(),
                    padding: I(),
                    saturate: Z(),
                    scale: Z(),
                    sepia: K(),
                    skew: Z(),
                    space: I(),
                    translate: I()
                },
                classGroups: {
                    aspect: [{
                        aspect: ["auto", "square", "video", F]
                    }],
                    container: ["container"],
                    columns: [{
                        columns: [N]
                    }],
                    "break-after": [{
                        "break-after": q()
                    }],
                    "break-before": [{
                        "break-before": q()
                    }],
                    "break-inside": [{
                        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                    }],
                    "box-decoration": [{
                        "box-decoration": ["slice", "clone"]
                    }],
                    box: [{
                        box: ["border", "content"]
                    }],
                    display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                    float: [{
                        float: ["right", "left", "none", "start", "end"]
                    }],
                    clear: [{
                        clear: ["left", "right", "both", "none", "start", "end"]
                    }],
                    isolation: ["isolate", "isolation-auto"],
                    "object-fit": [{
                        object: ["contain", "cover", "fill", "none", "scale-down"]
                    }],
                    "object-position": [{
                        object: [..._(), F]
                    }],
                    overflow: [{
                        overflow: C()
                    }],
                    "overflow-x": [{
                        "overflow-x": C()
                    }],
                    "overflow-y": [{
                        "overflow-y": C()
                    }],
                    overscroll: [{
                        overscroll: E()
                    }],
                    "overscroll-x": [{
                        "overscroll-x": E()
                    }],
                    "overscroll-y": [{
                        "overscroll-y": E()
                    }],
                    position: ["static", "fixed", "absolute", "relative", "sticky"],
                    inset: [{
                        inset: [f]
                    }],
                    "inset-x": [{
                        "inset-x": [f]
                    }],
                    "inset-y": [{
                        "inset-y": [f]
                    }],
                    start: [{
                        start: [f]
                    }],
                    end: [{
                        end: [f]
                    }],
                    top: [{
                        top: [f]
                    }],
                    right: [{
                        right: [f]
                    }],
                    bottom: [{
                        bottom: [f]
                    }],
                    left: [{
                        left: [f]
                    }],
                    visibility: ["visible", "invisible", "collapse"],
                    z: [{
                        z: ["auto", V, F]
                    }],
                    basis: [{
                        basis: k()
                    }],
                    "flex-direction": [{
                        flex: ["row", "row-reverse", "col", "col-reverse"]
                    }],
                    "flex-wrap": [{
                        flex: ["wrap", "wrap-reverse", "nowrap"]
                    }],
                    flex: [{
                        flex: ["1", "auto", "initial", "none", F]
                    }],
                    grow: [{
                        grow: K()
                    }],
                    shrink: [{
                        shrink: K()
                    }],
                    order: [{
                        order: ["first", "last", "none", V, F]
                    }],
                    "grid-cols": [{
                        "grid-cols": [W]
                    }],
                    "col-start-end": [{
                        col: ["auto", {
                            span: ["full", V, F]
                        }, F]
                    }],
                    "col-start": [{
                        "col-start": H()
                    }],
                    "col-end": [{
                        "col-end": H()
                    }],
                    "grid-rows": [{
                        "grid-rows": [W]
                    }],
                    "row-start-end": [{
                        row: ["auto", {
                            span: [V, F]
                        }, F]
                    }],
                    "row-start": [{
                        "row-start": H()
                    }],
                    "row-end": [{
                        "row-end": H()
                    }],
                    "grid-flow": [{
                        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                    }],
                    "auto-cols": [{
                        "auto-cols": ["auto", "min", "max", "fr", F]
                    }],
                    "auto-rows": [{
                        "auto-rows": ["auto", "min", "max", "fr", F]
                    }],
                    gap: [{
                        gap: [c]
                    }],
                    "gap-x": [{
                        "gap-x": [c]
                    }],
                    "gap-y": [{
                        "gap-y": [c]
                    }],
                    "justify-content": [{
                        justify: ["normal", ...Y()]
                    }],
                    "justify-items": [{
                        "justify-items": ["start", "end", "center", "stretch"]
                    }],
                    "justify-self": [{
                        "justify-self": ["auto", "start", "end", "center", "stretch"]
                    }],
                    "align-content": [{
                        content: ["normal", ...Y(), "baseline"]
                    }],
                    "align-items": [{
                        items: ["start", "end", "center", "baseline", "stretch"]
                    }],
                    "align-self": [{
                        self: ["auto", "start", "end", "center", "stretch", "baseline"]
                    }],
                    "place-content": [{
                        "place-content": [...Y(), "baseline"]
                    }],
                    "place-items": [{
                        "place-items": ["start", "end", "center", "baseline", "stretch"]
                    }],
                    "place-self": [{
                        "place-self": ["auto", "start", "end", "center", "stretch"]
                    }],
                    p: [{
                        p: [y]
                    }],
                    px: [{
                        px: [y]
                    }],
                    py: [{
                        py: [y]
                    }],
                    ps: [{
                        ps: [y]
                    }],
                    pe: [{
                        pe: [y]
                    }],
                    pt: [{
                        pt: [y]
                    }],
                    pr: [{
                        pr: [y]
                    }],
                    pb: [{
                        pb: [y]
                    }],
                    pl: [{
                        pl: [y]
                    }],
                    m: [{
                        m: [v]
                    }],
                    mx: [{
                        mx: [v]
                    }],
                    my: [{
                        my: [v]
                    }],
                    ms: [{
                        ms: [v]
                    }],
                    me: [{
                        me: [v]
                    }],
                    mt: [{
                        mt: [v]
                    }],
                    mr: [{
                        mr: [v]
                    }],
                    mb: [{
                        mb: [v]
                    }],
                    ml: [{
                        ml: [v]
                    }],
                    "space-x": [{
                        "space-x": [P]
                    }],
                    "space-x-reverse": ["space-x-reverse"],
                    "space-y": [{
                        "space-y": [P]
                    }],
                    "space-y-reverse": ["space-y-reverse"],
                    w: [{
                        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", F, t]
                    }],
                    "min-w": [{
                        "min-w": [F, t, "min", "max", "fit"]
                    }],
                    "max-w": [{
                        "max-w": [F, t, "none", "full", "min", "max", "fit", "prose", {
                            screen: [N]
                        }, N]
                    }],
                    h: [{
                        h: [F, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    "min-h": [{
                        "min-h": [F, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    "max-h": [{
                        "max-h": [F, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    size: [{
                        size: [F, t, "auto", "min", "max", "fit"]
                    }],
                    "font-size": [{
                        text: ["base", N, R]
                    }],
                    "font-smoothing": ["antialiased", "subpixel-antialiased"],
                    "font-style": ["italic", "not-italic"],
                    "font-weight": [{
                        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", j]
                    }],
                    "font-family": [{
                        font: [W]
                    }],
                    "fvn-normal": ["normal-nums"],
                    "fvn-ordinal": ["ordinal"],
                    "fvn-slashed-zero": ["slashed-zero"],
                    "fvn-figure": ["lining-nums", "oldstyle-nums"],
                    "fvn-spacing": ["proportional-nums", "tabular-nums"],
                    "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                    tracking: [{
                        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", F]
                    }],
                    "line-clamp": [{
                        "line-clamp": ["none", D, j]
                    }],
                    leading: [{
                        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", M, F]
                    }],
                    "list-image": [{
                        "list-image": ["none", F]
                    }],
                    "list-style-type": [{
                        list: ["none", "disc", "decimal", F]
                    }],
                    "list-style-position": [{
                        list: ["inside", "outside"]
                    }],
                    "placeholder-color": [{
                        placeholder: [e]
                    }],
                    "placeholder-opacity": [{
                        "placeholder-opacity": [g]
                    }],
                    "text-alignment": [{
                        text: ["left", "center", "right", "justify", "start", "end"]
                    }],
                    "text-color": [{
                        text: [e]
                    }],
                    "text-opacity": [{
                        "text-opacity": [g]
                    }],
                    "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                    "text-decoration-style": [{
                        decoration: [...X(), "wavy"]
                    }],
                    "text-decoration-thickness": [{
                        decoration: ["auto", "from-font", M, R]
                    }],
                    "underline-offset": [{
                        "underline-offset": ["auto", M, F]
                    }],
                    "text-decoration-color": [{
                        decoration: [e]
                    }],
                    "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                    "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                    "text-wrap": [{
                        text: ["wrap", "nowrap", "balance", "pretty"]
                    }],
                    indent: [{
                        indent: I()
                    }],
                    "vertical-align": [{
                        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", F]
                    }],
                    whitespace: [{
                        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                    }],
                    break: [{
                        break: ["normal", "words", "all", "keep"]
                    }],
                    hyphens: [{
                        hyphens: ["none", "manual", "auto"]
                    }],
                    content: [{
                        content: ["none", F]
                    }],
                    "bg-attachment": [{
                        bg: ["fixed", "local", "scroll"]
                    }],
                    "bg-clip": [{
                        "bg-clip": ["border", "padding", "content", "text"]
                    }],
                    "bg-opacity": [{
                        "bg-opacity": [g]
                    }],
                    "bg-origin": [{
                        "bg-origin": ["border", "padding", "content"]
                    }],
                    "bg-position": [{
                        bg: [..._(), B]
                    }],
                    "bg-repeat": [{
                        bg: ["no-repeat", {
                            repeat: ["", "x", "y", "round", "space"]
                        }]
                    }],
                    "bg-size": [{
                        bg: ["auto", "cover", "contain", O]
                    }],
                    "bg-image": [{
                        bg: ["none", {
                            "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, U]
                    }],
                    "bg-color": [{
                        bg: [e]
                    }],
                    "gradient-from-pos": [{
                        from: [m]
                    }],
                    "gradient-via-pos": [{
                        via: [m]
                    }],
                    "gradient-to-pos": [{
                        to: [m]
                    }],
                    "gradient-from": [{
                        from: [p]
                    }],
                    "gradient-via": [{
                        via: [p]
                    }],
                    "gradient-to": [{
                        to: [p]
                    }],
                    rounded: [{
                        rounded: [o]
                    }],
                    "rounded-s": [{
                        "rounded-s": [o]
                    }],
                    "rounded-e": [{
                        "rounded-e": [o]
                    }],
                    "rounded-t": [{
                        "rounded-t": [o]
                    }],
                    "rounded-r": [{
                        "rounded-r": [o]
                    }],
                    "rounded-b": [{
                        "rounded-b": [o]
                    }],
                    "rounded-l": [{
                        "rounded-l": [o]
                    }],
                    "rounded-ss": [{
                        "rounded-ss": [o]
                    }],
                    "rounded-se": [{
                        "rounded-se": [o]
                    }],
                    "rounded-ee": [{
                        "rounded-ee": [o]
                    }],
                    "rounded-es": [{
                        "rounded-es": [o]
                    }],
                    "rounded-tl": [{
                        "rounded-tl": [o]
                    }],
                    "rounded-tr": [{
                        "rounded-tr": [o]
                    }],
                    "rounded-br": [{
                        "rounded-br": [o]
                    }],
                    "rounded-bl": [{
                        "rounded-bl": [o]
                    }],
                    "border-w": [{
                        border: [a]
                    }],
                    "border-w-x": [{
                        "border-x": [a]
                    }],
                    "border-w-y": [{
                        "border-y": [a]
                    }],
                    "border-w-s": [{
                        "border-s": [a]
                    }],
                    "border-w-e": [{
                        "border-e": [a]
                    }],
                    "border-w-t": [{
                        "border-t": [a]
                    }],
                    "border-w-r": [{
                        "border-r": [a]
                    }],
                    "border-w-b": [{
                        "border-b": [a]
                    }],
                    "border-w-l": [{
                        "border-l": [a]
                    }],
                    "border-opacity": [{
                        "border-opacity": [g]
                    }],
                    "border-style": [{
                        border: [...X(), "hidden"]
                    }],
                    "divide-x": [{
                        "divide-x": [a]
                    }],
                    "divide-x-reverse": ["divide-x-reverse"],
                    "divide-y": [{
                        "divide-y": [a]
                    }],
                    "divide-y-reverse": ["divide-y-reverse"],
                    "divide-opacity": [{
                        "divide-opacity": [g]
                    }],
                    "divide-style": [{
                        divide: X()
                    }],
                    "border-color": [{
                        border: [n]
                    }],
                    "border-color-x": [{
                        "border-x": [n]
                    }],
                    "border-color-y": [{
                        "border-y": [n]
                    }],
                    "border-color-s": [{
                        "border-s": [n]
                    }],
                    "border-color-e": [{
                        "border-e": [n]
                    }],
                    "border-color-t": [{
                        "border-t": [n]
                    }],
                    "border-color-r": [{
                        "border-r": [n]
                    }],
                    "border-color-b": [{
                        "border-b": [n]
                    }],
                    "border-color-l": [{
                        "border-l": [n]
                    }],
                    "divide-color": [{
                        divide: [n]
                    }],
                    "outline-style": [{
                        outline: ["", ...X()]
                    }],
                    "outline-offset": [{
                        "outline-offset": [M, F]
                    }],
                    "outline-w": [{
                        outline: [M, R]
                    }],
                    "outline-color": [{
                        outline: [e]
                    }],
                    "ring-w": [{
                        ring: z()
                    }],
                    "ring-w-inset": ["ring-inset"],
                    "ring-color": [{
                        ring: [e]
                    }],
                    "ring-opacity": [{
                        "ring-opacity": [g]
                    }],
                    "ring-offset-w": [{
                        "ring-offset": [M, R]
                    }],
                    "ring-offset-color": [{
                        "ring-offset": [e]
                    }],
                    shadow: [{
                        shadow: ["", "inner", "none", N, $]
                    }],
                    "shadow-color": [{
                        shadow: [W]
                    }],
                    opacity: [{
                        opacity: [g]
                    }],
                    "mix-blend": [{
                        "mix-blend": [...G(), "plus-lighter", "plus-darker"]
                    }],
                    "bg-blend": [{
                        "bg-blend": G()
                    }],
                    filter: [{
                        filter: ["", "none"]
                    }],
                    blur: [{
                        blur: [r]
                    }],
                    brightness: [{
                        brightness: [i]
                    }],
                    contrast: [{
                        contrast: [l]
                    }],
                    "drop-shadow": [{
                        "drop-shadow": ["", "none", N, F]
                    }],
                    grayscale: [{
                        grayscale: [u]
                    }],
                    "hue-rotate": [{
                        "hue-rotate": [d]
                    }],
                    invert: [{
                        invert: [h]
                    }],
                    saturate: [{
                        saturate: [b]
                    }],
                    sepia: [{
                        sepia: [S]
                    }],
                    "backdrop-filter": [{
                        "backdrop-filter": ["", "none"]
                    }],
                    "backdrop-blur": [{
                        "backdrop-blur": [r]
                    }],
                    "backdrop-brightness": [{
                        "backdrop-brightness": [i]
                    }],
                    "backdrop-contrast": [{
                        "backdrop-contrast": [l]
                    }],
                    "backdrop-grayscale": [{
                        "backdrop-grayscale": [u]
                    }],
                    "backdrop-hue-rotate": [{
                        "backdrop-hue-rotate": [d]
                    }],
                    "backdrop-invert": [{
                        "backdrop-invert": [h]
                    }],
                    "backdrop-opacity": [{
                        "backdrop-opacity": [g]
                    }],
                    "backdrop-saturate": [{
                        "backdrop-saturate": [b]
                    }],
                    "backdrop-sepia": [{
                        "backdrop-sepia": [S]
                    }],
                    "border-collapse": [{
                        border: ["collapse", "separate"]
                    }],
                    "border-spacing": [{
                        "border-spacing": [s]
                    }],
                    "border-spacing-x": [{
                        "border-spacing-x": [s]
                    }],
                    "border-spacing-y": [{
                        "border-spacing-y": [s]
                    }],
                    "table-layout": [{
                        table: ["auto", "fixed"]
                    }],
                    caption: [{
                        caption: ["top", "bottom"]
                    }],
                    transition: [{
                        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", F]
                    }],
                    duration: [{
                        duration: Z()
                    }],
                    ease: [{
                        ease: ["linear", "in", "out", "in-out", F]
                    }],
                    delay: [{
                        delay: Z()
                    }],
                    animate: [{
                        animate: ["none", "spin", "ping", "pulse", "bounce", F]
                    }],
                    transform: [{
                        transform: ["", "gpu", "none"]
                    }],
                    scale: [{
                        scale: [w]
                    }],
                    "scale-x": [{
                        "scale-x": [w]
                    }],
                    "scale-y": [{
                        "scale-y": [w]
                    }],
                    rotate: [{
                        rotate: [V, F]
                    }],
                    "translate-x": [{
                        "translate-x": [A]
                    }],
                    "translate-y": [{
                        "translate-y": [A]
                    }],
                    "skew-x": [{
                        "skew-x": [T]
                    }],
                    "skew-y": [{
                        "skew-y": [T]
                    }],
                    "transform-origin": [{
                        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", F]
                    }],
                    accent: [{
                        accent: ["auto", e]
                    }],
                    appearance: [{
                        appearance: ["none", "auto"]
                    }],
                    cursor: [{
                        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", F]
                    }],
                    "caret-color": [{
                        caret: [e]
                    }],
                    "pointer-events": [{
                        "pointer-events": ["none", "auto"]
                    }],
                    resize: [{
                        resize: ["none", "y", "x", ""]
                    }],
                    "scroll-behavior": [{
                        scroll: ["auto", "smooth"]
                    }],
                    "scroll-m": [{
                        "scroll-m": I()
                    }],
                    "scroll-mx": [{
                        "scroll-mx": I()
                    }],
                    "scroll-my": [{
                        "scroll-my": I()
                    }],
                    "scroll-ms": [{
                        "scroll-ms": I()
                    }],
                    "scroll-me": [{
                        "scroll-me": I()
                    }],
                    "scroll-mt": [{
                        "scroll-mt": I()
                    }],
                    "scroll-mr": [{
                        "scroll-mr": I()
                    }],
                    "scroll-mb": [{
                        "scroll-mb": I()
                    }],
                    "scroll-ml": [{
                        "scroll-ml": I()
                    }],
                    "scroll-p": [{
                        "scroll-p": I()
                    }],
                    "scroll-px": [{
                        "scroll-px": I()
                    }],
                    "scroll-py": [{
                        "scroll-py": I()
                    }],
                    "scroll-ps": [{
                        "scroll-ps": I()
                    }],
                    "scroll-pe": [{
                        "scroll-pe": I()
                    }],
                    "scroll-pt": [{
                        "scroll-pt": I()
                    }],
                    "scroll-pr": [{
                        "scroll-pr": I()
                    }],
                    "scroll-pb": [{
                        "scroll-pb": I()
                    }],
                    "scroll-pl": [{
                        "scroll-pl": I()
                    }],
                    "snap-align": [{
                        snap: ["start", "end", "center", "align-none"]
                    }],
                    "snap-stop": [{
                        snap: ["normal", "always"]
                    }],
                    "snap-type": [{
                        snap: ["none", "x", "y", "both"]
                    }],
                    "snap-strictness": [{
                        snap: ["mandatory", "proximity"]
                    }],
                    touch: [{
                        touch: ["auto", "none", "manipulation"]
                    }],
                    "touch-x": [{
                        "touch-pan": ["x", "left", "right"]
                    }],
                    "touch-y": [{
                        "touch-pan": ["y", "up", "down"]
                    }],
                    "touch-pz": ["touch-pinch-zoom"],
                    select: [{
                        select: ["none", "text", "all", "auto"]
                    }],
                    "will-change": [{
                        "will-change": ["auto", "scroll", "contents", "transform", F]
                    }],
                    fill: [{
                        fill: [e, "none"]
                    }],
                    "stroke-w": [{
                        stroke: [M, R, j]
                    }],
                    stroke: [{
                        stroke: [e, "none"]
                    }],
                    sr: ["sr-only", "not-sr-only"],
                    "forced-color-adjust": [{
                        "forced-color-adjust": ["auto", "none"]
                    }]
                },
                conflictingClassGroups: {
                    overflow: ["overflow-x", "overflow-y"],
                    overscroll: ["overscroll-x", "overscroll-y"],
                    inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                    "inset-x": ["right", "left"],
                    "inset-y": ["top", "bottom"],
                    flex: ["basis", "grow", "shrink"],
                    gap: ["gap-x", "gap-y"],
                    p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                    px: ["pr", "pl"],
                    py: ["pt", "pb"],
                    m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                    mx: ["mr", "ml"],
                    my: ["mt", "mb"],
                    size: ["w", "h"],
                    "font-size": ["leading"],
                    "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                    "fvn-ordinal": ["fvn-normal"],
                    "fvn-slashed-zero": ["fvn-normal"],
                    "fvn-figure": ["fvn-normal"],
                    "fvn-spacing": ["fvn-normal"],
                    "fvn-fraction": ["fvn-normal"],
                    "line-clamp": ["display", "overflow"],
                    rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                    "rounded-s": ["rounded-ss", "rounded-es"],
                    "rounded-e": ["rounded-se", "rounded-ee"],
                    "rounded-t": ["rounded-tl", "rounded-tr"],
                    "rounded-r": ["rounded-tr", "rounded-br"],
                    "rounded-b": ["rounded-br", "rounded-bl"],
                    "rounded-l": ["rounded-tl", "rounded-bl"],
                    "border-spacing": ["border-spacing-x", "border-spacing-y"],
                    "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                    "border-w-x": ["border-w-r", "border-w-l"],
                    "border-w-y": ["border-w-t", "border-w-b"],
                    "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                    "border-color-x": ["border-color-r", "border-color-l"],
                    "border-color-y": ["border-color-t", "border-color-b"],
                    "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                    "scroll-mx": ["scroll-mr", "scroll-ml"],
                    "scroll-my": ["scroll-mt", "scroll-mb"],
                    "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                    "scroll-px": ["scroll-pr", "scroll-pl"],
                    "scroll-py": ["scroll-pt", "scroll-pb"],
                    touch: ["touch-x", "touch-y", "touch-pz"],
                    "touch-x": ["touch"],
                    "touch-y": ["touch"],
                    "touch-pz": ["touch"]
                },
                conflictingClassGroupModifiers: {
                    "font-size": ["leading"]
                }
            }
        }
        )
    }
}]);
