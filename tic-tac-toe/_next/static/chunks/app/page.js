(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[974], {
    6543: (e, a, t) => {
        Promise.resolve().then(t.bind(t, 4627)),
        Promise.resolve().then(t.bind(t, 5261))
    }
    ,
    4627: (e, a, t) => {
        "use strict";
        t.d(a, {
            ThemeProvider: () => i
        });
        var s = t(5155);
        t(2115);
        var r = t(7113);
        function i(e) {
            let {children: a, ...t} = e;
            return (0,
            s.jsx)(r.N, {
                ...t,
                children: a
            })
        }
    }
    ,
    5261: (e, a, t) => {
        "use strict";
        t.d(a, {
            default: () => Z
        });
        var s = t(5155)
          , r = t(2115)
          , i = t(3478)
          , n = t(5683)
          , l = t(1466)
          , d = t(9257)
          , o = t(7725)
          , c = t(2104)
          , m = t(8236)
          , u = t(4947)
          , x = t(7819)
          , h = t(767)
          , f = t(3565)
          , g = t(1556)
          , p = t(2317)
          , v = t(1027)
          , b = t(3463)
          , j = t(9795);
        function N() {
            for (var e = arguments.length, a = Array(e), t = 0; t < e; t++)
                a[t] = arguments[t];
            return (0,
            j.QP)((0,
            b.$)(a))
        }
        let y = (0,
        v.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
            variants: {
                variant: {
                    default: "bg-primary text-primary-foreground hover:bg-primary/90",
                    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                    ghost: "hover:bg-accent hover:text-accent-foreground",
                    link: "text-primary underline-offset-4 hover:underline"
                },
                size: {
                    default: "h-10 px-4 py-2",
                    sm: "h-9 rounded-md px-3",
                    lg: "h-11 rounded-md px-8",
                    icon: "h-10 w-10"
                }
            },
            defaultVariants: {
                variant: "default",
                size: "default"
            }
        })
          , w = r.forwardRef( (e, a) => {
            let {className: t, variant: r, size: i, asChild: n=!1, ...l} = e
              , d = n ? p.DX : "button";
            return (0,
            s.jsx)(d, {
                className: N(y({
                    variant: r,
                    size: i,
                    className: t
                })),
                ref: a,
                ...l
            })
        }
        );
        w.displayName = "Button";
        let k = r.forwardRef( (e, a) => {
            let {className: t, ...r} = e;
            return (0,
            s.jsx)("div", {
                ref: a,
                className: N("rounded-lg border bg-card text-card-foreground shadow-sm", t),
                ...r
            })
        }
        );
        k.displayName = "Card",
        r.forwardRef( (e, a) => {
            let {className: t, ...r} = e;
            return (0,
            s.jsx)("div", {
                ref: a,
                className: N("flex flex-col space-y-1.5 p-6", t),
                ...r
            })
        }
        ).displayName = "CardHeader",
        r.forwardRef( (e, a) => {
            let {className: t, ...r} = e;
            return (0,
            s.jsx)("div", {
                ref: a,
                className: N("text-2xl font-semibold leading-none tracking-tight", t),
                ...r
            })
        }
        ).displayName = "CardTitle",
        r.forwardRef( (e, a) => {
            let {className: t, ...r} = e;
            return (0,
            s.jsx)("div", {
                ref: a,
                className: N("text-sm text-muted-foreground", t),
                ...r
            })
        }
        ).displayName = "CardDescription",
        r.forwardRef( (e, a) => {
            let {className: t, ...r} = e;
            return (0,
            s.jsx)("div", {
                ref: a,
                className: N("p-6 pt-0", t),
                ...r
            })
        }
        ).displayName = "CardContent",
        r.forwardRef( (e, a) => {
            let {className: t, ...r} = e;
            return (0,
            s.jsx)("div", {
                ref: a,
                className: N("flex items-center p-6 pt-0", t),
                ...r
            })
        }
        ).displayName = "CardFooter";
        var A = t(1965);
        let I = A.bL
          , M = r.forwardRef( (e, a) => {
            let {className: t, ...r} = e;
            return (0,
            s.jsx)(A.B8, {
                ref: a,
                className: N("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", t),
                ...r
            })
        }
        );
        M.displayName = A.B8.displayName;
        let R = r.forwardRef( (e, a) => {
            let {className: t, ...r} = e;
            return (0,
            s.jsx)(A.l9, {
                ref: a,
                className: N("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", t),
                ...r
            })
        }
        );
        R.displayName = A.l9.displayName;
        let D = r.forwardRef( (e, a) => {
            let {className: t, ...r} = e;
            return (0,
            s.jsx)(A.UC, {
                ref: a,
                className: N("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", t),
                ...r
            })
        }
        );
        D.displayName = A.UC.displayName;
        var C = t(9558);
        let E = r.forwardRef( (e, a) => {
            let {className: t, ...r} = e;
            return (0,
            s.jsx)(C.bL, {
                className: N("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", t),
                ...r,
                ref: a,
                children: (0,
                s.jsx)(C.zi, {
                    className: N("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")
                })
            })
        }
        );
        E.displayName = C.bL.displayName;
        var P = t(6195);
        let _ = (0,
        v.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")
          , S = r.forwardRef( (e, a) => {
            let {className: t, ...r} = e;
            return (0,
            s.jsx)(P.b, {
                ref: a,
                className: N(_(), t),
                ...r
            })
        }
        );
        function W(e) {
            let {board: a, winnerLine: t, onClick: r, animations: i=!0} = e;
            return (0,
            s.jsxs)("div", {
                className: "relative",
                children: [(0,
                s.jsx)("div", {
                    className: "grid grid-cols-3 gap-3 max-w-xs mx-auto",
                    children: a.map( (e, a) => (0,
                    s.jsx)(F, {
                        value: e,
                        isWinningSquare: null == t ? void 0 : t.includes(a),
                        onClick: () => r(a),
                        animations: i
                    }, a))
                }), (0,
                s.jsx)("div", {
                    className: "absolute inset-0 pointer-events-none",
                    children: (0,
                    s.jsx)("div", {
                        className: "h-full w-full grid grid-cols-3 grid-rows-3",
                        children: (0,
                        s.jsxs)("div", {
                            className: "col-span-3 row-span-3 grid grid-cols-3 grid-rows-3",
                            children: [(0,
                            s.jsx)("div", {
                                className: "col-start-1 col-end-2 row-span-3 border-r-2 border-gray-200 dark:border-gray-700 mx-auto w-0 h-full"
                            }), (0,
                            s.jsx)("div", {
                                className: "col-start-2 col-end-3 row-span-3 border-r-2 border-gray-200 dark:border-gray-700 mx-auto w-0 h-full"
                            }), (0,
                            s.jsx)("div", {
                                className: "col-span-3 row-start-1 row-end-2 border-b-2 border-gray-200 dark:border-gray-700 my-auto w-full h-0"
                            }), (0,
                            s.jsx)("div", {
                                className: "col-span-3 row-start-2 row-end-3 border-b-2 border-gray-200 dark:border-gray-700 my-auto w-full h-0"
                            })]
                        })
                    })
                })]
            })
        }
        function F(e) {
            let {value: a, isWinningSquare: t, onClick: r, animations: n} = e
              , l = {
                initial: {
                    opacity: 0,
                    scale: .8
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                tap: {
                    scale: .95
                }
            };
            return (0,
            s.jsx)(i.P.button, {
                className: N("h-24 w-24 rounded-lg flex items-center justify-center text-4xl font-bold transition-colors", t ? "bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/40 dark:to-green-800/40" : "bg-white/80 dark:bg-gray-800/80 hover:bg-white hover:dark:bg-gray-700/80", "backdrop-blur-sm shadow-md"),
                onClick: r,
                whileTap: n ? l.tap : void 0,
                initial: n ? l.initial : void 0,
                animate: n ? l.animate : void 0,
                transition: {
                    duration: .2
                },
                children: a && (0,
                s.jsx)(i.P.div, {
                    initial: n ? {
                        scale: 0
                    } : void 0,
                    animate: n ? {
                        scale: 1
                    } : void 0,
                    transition: n ? {
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                    } : void 0,
                    children: "X" === a ? (0,
                    s.jsx)(h.A, {
                        className: "h-12 w-12 text-indigo-500 drop-shadow-md",
                        strokeWidth: 3
                    }) : (0,
                    s.jsx)(f.A, {
                        className: "h-12 w-12 text-pink-500 drop-shadow-md",
                        strokeWidth: 3
                    })
                })
            })
        }
        S.displayName = P.b.displayName;
        var L = t(2341);
        let G = r.forwardRef( (e, a) => {
            let {className: t, children: r, ...i} = e;
            return (0,
            s.jsxs)(L.bL, {
                ref: a,
                className: N("relative overflow-hidden", t),
                ...i,
                children: [(0,
                s.jsx)(L.LM, {
                    className: "h-full w-full rounded-[inherit]",
                    children: r
                }), (0,
                s.jsx)(H, {}), (0,
                s.jsx)(L.OK, {})]
            })
        }
        );
        G.displayName = L.bL.displayName;
        let H = r.forwardRef( (e, a) => {
            let {className: t, orientation: r="vertical", ...i} = e;
            return (0,
            s.jsx)(L.VM, {
                ref: a,
                orientation: r,
                className: N("flex touch-none select-none transition-colors", "vertical" === r && "h-full w-2.5 border-l border-l-transparent p-[1px]", "horizontal" === r && "h-2.5 flex-col border-t border-t-transparent p-[1px]", t),
                ...i,
                children: (0,
                s.jsx)(L.lr, {
                    className: "relative flex-1 rounded-full bg-border"
                })
            })
        }
        );
        function O(e) {
            let {history: a, animations: t=!0} = e
              , [n,l] = (0,
            r.useState)(null);
            return 0 === a.length ? (0,
            s.jsx)("div", {
                className: "text-center py-12 text-muted-foreground",
                children: (0,
                s.jsxs)(i.P.div, {
                    initial: t ? {
                        opacity: 0,
                        y: 10
                    } : void 0,
                    animate: t ? {
                        opacity: 1,
                        y: 0
                    } : void 0,
                    transition: {
                        duration: .5
                    },
                    children: [(0,
                    s.jsx)("div", {
                        className: "mb-4 opacity-50",
                        children: (0,
                        s.jsx)(T, {
                            className: "h-12 w-12 mx-auto"
                        })
                    }), (0,
                    s.jsx)("p", {
                        children: "No moves have been made yet."
                    }), (0,
                    s.jsx)("p", {
                        className: "text-sm mt-2",
                        children: "Start playing to see your move history!"
                    })]
                })
            }) : (0,
            s.jsxs)("div", {
                className: "mt-4",
                children: [(0,
                s.jsx)("h3", {
                    className: "font-medium mb-3 text-center",
                    children: "Move History"
                }), (0,
                s.jsx)(G, {
                    className: "h-[300px] rounded-md border p-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm",
                    children: (0,
                    s.jsx)("div", {
                        className: "space-y-2",
                        children: a.map( (e, a) => (0,
                        s.jsxs)(w, {
                            variant: n === a ? "default" : "outline",
                            className: N("w-full justify-start", n === a ? "bg-gradient-to-r from-indigo-500 to-purple-600" : "bg-white/80 dark:bg-gray-800/80"),
                            onClick: () => l(a),
                            children: [(0,
                            s.jsxs)("span", {
                                className: "mr-2 font-mono",
                                children: [String(a + 1).padStart(2, "0"), "."]
                            }), "X" === e.move ? (0,
                            s.jsx)(h.A, {
                                className: "h-4 w-4 text-indigo-500 mr-2"
                            }) : (0,
                            s.jsx)(f.A, {
                                className: "h-4 w-4 text-pink-500 mr-2"
                            }), (0,
                            s.jsxs)("span", {
                                children: ["Move to position ", e.position + 1]
                            })]
                        }, a))
                    })
                }), null !== n && (0,
                s.jsxs)(i.P.div, {
                    className: "mt-6",
                    initial: t ? {
                        opacity: 0,
                        y: 10
                    } : void 0,
                    animate: t ? {
                        opacity: 1,
                        y: 0
                    } : void 0,
                    transition: {
                        duration: .3
                    },
                    children: [(0,
                    s.jsxs)("h4", {
                        className: "font-medium mb-3 text-center",
                        children: ["Board at move ", n + 1]
                    }), (0,
                    s.jsx)(k, {
                        className: "p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm",
                        children: (0,
                        s.jsx)("div", {
                            className: "grid grid-cols-3 gap-2 max-w-[180px] mx-auto",
                            children: a[n].board.map( (e, a) => (0,
                            s.jsx)("div", {
                                className: "h-12 w-12 bg-white/80 dark:bg-gray-700/80 rounded-md flex items-center justify-center shadow-sm",
                                children: "X" === e ? (0,
                                s.jsx)(h.A, {
                                    className: "h-8 w-8 text-indigo-500"
                                }) : "O" === e ? (0,
                                s.jsx)(f.A, {
                                    className: "h-8 w-8 text-pink-500"
                                }) : null
                            }, a))
                        })
                    })]
                })]
            })
        }
        function T(e) {
            let {className: a} = e;
            return (0,
            s.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: a,
                children: [(0,
                s.jsx)("path", {
                    d: "M3 3v5h5"
                }), (0,
                s.jsx)("path", {
                    d: "M3 3c6.01 0 11.27 4.1 12.67 10"
                }), (0,
                s.jsx)("path", {
                    d: "M21 21v-5h-5"
                }), (0,
                s.jsx)("path", {
                    d: "M21 21c-6.01 0-11.27-4.1-12.67-10"
                })]
            })
        }
        H.displayName = L.VM.displayName;
        var X = t(6527);
        function Y(e) {
            let {stats: a, animations: t=!0} = e
              , {xWins: r, oWins: n, draws: l, totalGames: d} = a
              , o = d > 0 ? Math.round(r / d * 100) : 0
              , c = d > 0 ? Math.round(n / d * 100) : 0
              , m = d > 0 ? Math.round(l / d * 100) : 0;
            return (0,
            s.jsxs)("div", {
                className: "mt-4 space-y-6",
                children: [(0,
                s.jsx)("h3", {
                    className: "font-medium text-center",
                    children: "Game Statistics"
                }), 0 === d ? (0,
                s.jsx)("div", {
                    className: "text-center py-12 text-muted-foreground",
                    children: (0,
                    s.jsxs)(i.P.div, {
                        initial: t ? {
                            opacity: 0,
                            y: 10
                        } : void 0,
                        animate: t ? {
                            opacity: 1,
                            y: 0
                        } : void 0,
                        transition: {
                            duration: .5
                        },
                        children: [(0,
                        s.jsx)("div", {
                            className: "mb-4 opacity-50",
                            children: (0,
                            s.jsx)(U, {
                                className: "h-12 w-12 mx-auto"
                            })
                        }), (0,
                        s.jsx)("p", {
                            children: "No games have been played yet."
                        }), (0,
                        s.jsx)("p", {
                            className: "text-sm mt-2",
                            children: "Complete a game to see your statistics!"
                        })]
                    })
                }) : (0,
                s.jsxs)(s.Fragment, {
                    children: [(0,
                    s.jsxs)("div", {
                        className: "grid grid-cols-3 gap-3",
                        children: [(0,
                        s.jsx)(z, {
                            icon: (0,
                            s.jsx)(h.A, {
                                className: "h-8 w-8 text-indigo-500"
                            }),
                            label: "X Wins",
                            value: r,
                            percent: o,
                            color: "bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-900/30 dark:to-indigo-800/30",
                            animations: t
                        }), (0,
                        s.jsx)(z, {
                            icon: (0,
                            s.jsx)(f.A, {
                                className: "h-8 w-8 text-pink-500"
                            }),
                            label: "O Wins",
                            value: n,
                            percent: c,
                            color: "bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900/30 dark:to-pink-800/30",
                            animations: t
                        }), (0,
                        s.jsx)(z, {
                            icon: (0,
                            s.jsx)(X.A, {
                                className: "h-8 w-8 text-amber-500"
                            }),
                            label: "Draws",
                            value: l,
                            percent: m,
                            color: "bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/30",
                            animations: t
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: "mt-6",
                        children: [(0,
                        s.jsx)("h4", {
                            className: "text-sm font-medium mb-3 text-center",
                            children: "Win Rate"
                        }), (0,
                        s.jsx)("div", {
                            className: "h-8 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner",
                            children: (0,
                            s.jsxs)("div", {
                                className: "flex h-full",
                                children: [(0,
                                s.jsx)(i.P.div, {
                                    className: "bg-gradient-to-r from-indigo-400 to-indigo-500 h-full",
                                    initial: t ? {
                                        width: 0
                                    } : void 0,
                                    animate: {
                                        width: "".concat(o, "%")
                                    },
                                    transition: {
                                        duration: 1
                                    }
                                }), (0,
                                s.jsx)(i.P.div, {
                                    className: "bg-gradient-to-r from-pink-400 to-pink-500 h-full",
                                    initial: t ? {
                                        width: 0
                                    } : void 0,
                                    animate: {
                                        width: "".concat(c, "%")
                                    },
                                    transition: {
                                        duration: 1
                                    }
                                }), (0,
                                s.jsx)(i.P.div, {
                                    className: "bg-gradient-to-r from-amber-400 to-amber-500 h-full",
                                    initial: t ? {
                                        width: 0
                                    } : void 0,
                                    animate: {
                                        width: "".concat(m, "%")
                                    },
                                    transition: {
                                        duration: 1
                                    }
                                })]
                            })
                        }), (0,
                        s.jsxs)("div", {
                            className: "flex justify-between text-xs mt-2 px-1",
                            children: [(0,
                            s.jsxs)("div", {
                                className: "flex items-center",
                                children: [(0,
                                s.jsx)("div", {
                                    className: "w-3 h-3 rounded-full bg-indigo-500 mr-1"
                                }), (0,
                                s.jsxs)("span", {
                                    children: ["X: ", o, "%"]
                                })]
                            }), (0,
                            s.jsxs)("div", {
                                className: "flex items-center",
                                children: [(0,
                                s.jsx)("div", {
                                    className: "w-3 h-3 rounded-full bg-pink-500 mr-1"
                                }), (0,
                                s.jsxs)("span", {
                                    children: ["O: ", c, "%"]
                                })]
                            }), (0,
                            s.jsxs)("div", {
                                className: "flex items-center",
                                children: [(0,
                                s.jsx)("div", {
                                    className: "w-3 h-3 rounded-full bg-amber-500 mr-1"
                                }), (0,
                                s.jsxs)("span", {
                                    children: ["Draw: ", m, "%"]
                                })]
                            })]
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: "text-sm text-center text-muted-foreground mt-4",
                        children: ["Total Games: ", d]
                    })]
                })]
            })
        }
        function z(e) {
            let {icon: a, label: t, value: r, percent: n, color: l, animations: d} = e;
            return (0,
            s.jsx)(i.P.div, {
                initial: d ? {
                    opacity: 0,
                    y: 20
                } : void 0,
                animate: d ? {
                    opacity: 1,
                    y: 0
                } : void 0,
                transition: {
                    duration: .5
                },
                children: (0,
                s.jsxs)(k, {
                    className: "p-4 flex flex-col items-center ".concat(l, " backdrop-blur-sm"),
                    children: [(0,
                    s.jsx)("div", {
                        className: "mb-2",
                        children: a
                    }), (0,
                    s.jsx)("div", {
                        className: "text-sm font-medium",
                        children: t
                    }), (0,
                    s.jsx)("div", {
                        className: "text-3xl font-bold",
                        children: r
                    }), (0,
                    s.jsxs)("div", {
                        className: "text-xs text-muted-foreground",
                        children: [n, "%"]
                    })]
                })
            })
        }
        function U(e) {
            let {className: a} = e;
            return (0,
            s.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: a,
                children: [(0,
                s.jsx)("path", {
                    d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6"
                }), (0,
                s.jsx)("path", {
                    d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18"
                }), (0,
                s.jsx)("path", {
                    d: "M4 22h16"
                }), (0,
                s.jsx)("path", {
                    d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"
                }), (0,
                s.jsx)("path", {
                    d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"
                }), (0,
                s.jsx)("path", {
                    d: "M18 2H6v7a6 6 0 0 0 12 0V2Z"
                })]
            })
        }
        function V() {
            return (0,
            s.jsxs)("div", {
                className: "flex items-center justify-center",
                children: [(0,
                s.jsx)(d.A, {
                    className: "h-5 w-5 mr-2 text-purple-500"
                }), (0,
                s.jsx)("span", {
                    className: "mr-1",
                    children: "AI thinking"
                }), (0,
                s.jsxs)(i.P.div, {
                    className: "flex space-x-1",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    children: [(0,
                    s.jsx)(B, {
                        delay: 0
                    }), (0,
                    s.jsx)(B, {
                        delay: .2
                    }), (0,
                    s.jsx)(B, {
                        delay: .4
                    })]
                })]
            })
        }
        function B(e) {
            let {delay: a} = e;
            return (0,
            s.jsx)(i.P.div, {
                className: "h-1.5 w-1.5 rounded-full bg-purple-500",
                initial: {
                    y: 0
                },
                animate: {
                    y: [0, -5, 0]
                },
                transition: {
                    duration: .6,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    delay: a
                }
            })
        }
        var q = t(7113);
        let K = {
            FRIEND: "friend",
            AI_EASY: "ai-easy",
            AI_MEDIUM: "ai-medium",
            AI_HARD: "ai-hard"
        }
          , Q = {
            PLAYING: "playing",
            WIN: "win",
            DRAW: "draw"
        };
        function Z() {
            let[e,a] = (0,
            r.useState)(Array(9).fill(null))
              , [t,p] = (0,
            r.useState)(!0)
              , [v,b] = (0,
            r.useState)(K.FRIEND)
              , [j,y] = (0,
            r.useState)(Q.PLAYING)
              , [A,C] = (0,
            r.useState)(null)
              , [P,_] = (0,
            r.useState)([])
              , [F,L] = (0,
            r.useState)("game")
              , [G,H] = (0,
            r.useState)({
                xWins: 0,
                oWins: 0,
                draws: 0,
                totalGames: 0
            })
              , [T,X] = (0,
            r.useState)(!1)
              , [z,U] = (0,
            r.useState)(!1)
              , [B,Z] = (0,
            r.useState)(!0)
              , {theme: $, setTheme: J} = (0,
            q.D)();
            (0,
            r.useEffect)( () => {
                let a = en(e);
                a ? (y(Q.WIN),
                C(a),
                ee(a)) : e.includes(null) || (y(Q.DRAW),
                ee(null))
            }
            , [e]),
            (0,
            r.useEffect)( () => {
                if (!t && j === Q.PLAYING && v !== K.FRIEND) {
                    X(!0);
                    let e = setTimeout( () => {
                        es(),
                        X(!1)
                    }
                    , v === K.AI_HARD ? 1200 : 800);
                    return () => {
                        clearTimeout(e),
                        X(!1)
                    }
                }
            }
            , [t, j, v]);
            let ee = e => {
                H(a => {
                    let t = {
                        ...a,
                        totalGames: a.totalGames + 1
                    };
                    return "X" === e ? t.xWins = a.xWins + 1 : "O" === e ? t.oWins = a.oWins + 1 : t.draws = a.draws + 1,
                    t
                }
                )
            }
              , ea = s => {
                if (e[s] || j !== Q.PLAYING || !t && v !== K.FRIEND || T)
                    return;
                let r = [...e];
                r[s] = t ? "X" : "O";
                let i = [...P, {
                    board: [...r],
                    move: t ? "X" : "O",
                    position: s
                }];
                a(r),
                _(i),
                p(!t)
            }
              , et = () => {
                a(Array(9).fill(null)),
                p(!0),
                y(Q.PLAYING),
                C(null),
                _([])
            }
              , es = () => {
                let a;
                if (j === Q.PLAYING) {
                    switch (v) {
                    case K.AI_EASY:
                        a = er(e);
                        break;
                    case K.AI_MEDIUM:
                        a = Math.random() > .5 ? ei(e, 1) : er(e);
                        break;
                    case K.AI_HARD:
                        a = ei(e, 3);
                        break;
                    default:
                        a = er(e)
                    }
                    null !== a && ea(a)
                }
            }
              , er = e => {
                let a = e.map( (e, a) => null === e ? a : null).filter(e => null !== e);
                return 0 === a.length ? null : a[Math.floor(Math.random() * a.length)]
            }
              , ei = (e, a) => {
                for (let a = 0; a < 9; a++)
                    if (!e[a]) {
                        let t = [...e];
                        if (t[a] = "O",
                        "O" === en(t))
                            return a
                    }
                for (let a = 0; a < 9; a++)
                    if (!e[a]) {
                        let t = [...e];
                        if (t[a] = "X",
                        "X" === en(t))
                            return a
                    }
                if (a > 1) {
                    if (!e[4])
                        return 4;
                    let a = [0, 2, 6, 8].filter(a => !e[a]);
                    if (a.length > 0)
                        return a[Math.floor(Math.random() * a.length)]
                }
                return er(e)
            }
              , en = e => {
                let a = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
                for (let t = 0; t < a.length; t++) {
                    let[s,r,i] = a[t];
                    if (e[s] && e[s] === e[r] && e[s] === e[i])
                        return e[s]
                }
                return null
            }
            ;
            return (0,
            s.jsx)("div", {
                className: "w-full max-w-md",
                children: (0,
                s.jsxs)(k, {
                    className: "p-6 shadow-xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-t border-l border-white/20 dark:border-white/10",
                    children: [(0,
                    s.jsxs)("div", {
                        className: "flex justify-between items-center mb-6",
                        children: [(0,
                        s.jsx)("h1", {
                            className: "text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent",
                            children: "Tic-Tac-Toe"
                        }), (0,
                        s.jsx)(w, {
                            variant: "ghost",
                            size: "icon",
                            onClick: () => U(!z),
                            className: "rounded-full",
                            children: (0,
                            s.jsx)(m.A, {
                                className: "h-5 w-5"
                            })
                        })]
                    }), (0,
                    s.jsx)(n.N, {
                        children: z && (0,
                        s.jsxs)(i.P.div, {
                            initial: {
                                opacity: 0,
                                y: -20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -20
                            },
                            className: "mb-6 p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-md",
                            children: [(0,
                            s.jsx)("h2", {
                                className: "text-lg font-semibold mb-3",
                                children: "Settings"
                            }), (0,
                            s.jsxs)("div", {
                                className: "space-y-4",
                                children: [(0,
                                s.jsxs)("div", {
                                    className: "flex items-center justify-between",
                                    children: [(0,
                                    s.jsxs)("div", {
                                        children: [(0,
                                        s.jsx)(S, {
                                            htmlFor: "theme-toggle",
                                            className: "font-medium",
                                            children: "Theme"
                                        }), (0,
                                        s.jsx)("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: "Switch between light and dark mode"
                                        })]
                                    }), (0,
                                    s.jsx)(w, {
                                        variant: "outline",
                                        size: "icon",
                                        onClick: () => J("dark" === $ ? "light" : "dark"),
                                        children: "dark" === $ ? (0,
                                        s.jsx)(o.A, {
                                            className: "h-5 w-5"
                                        }) : (0,
                                        s.jsx)(c.A, {
                                            className: "h-5 w-5"
                                        })
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: "flex items-center justify-between",
                                    children: [(0,
                                    s.jsxs)("div", {
                                        children: [(0,
                                        s.jsx)(S, {
                                            htmlFor: "animations-toggle",
                                            className: "font-medium",
                                            children: "Animations"
                                        }), (0,
                                        s.jsx)("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: "Enable or disable game animations"
                                        })]
                                    }), (0,
                                    s.jsx)(E, {
                                        id: "animations-toggle",
                                        checked: B,
                                        onCheckedChange: Z
                                    })]
                                })]
                            })]
                        })
                    }), (0,
                    s.jsxs)("div", {
                        className: "mb-6",
                        children: [(0,
                        s.jsx)("h2", {
                            className: "text-lg font-semibold mb-2 text-center",
                            children: "Choose Game Mode"
                        }), (0,
                        s.jsxs)("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [(0,
                            s.jsxs)(w, {
                                variant: v === K.FRIEND ? "default" : "outline",
                                className: N("h-20 flex flex-col items-center justify-center transition-all", v === K.FRIEND ? "bg-gradient-to-br from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700" : ""),
                                onClick: () => {
                                    b(K.FRIEND),
                                    et()
                                }
                                ,
                                children: [(0,
                                s.jsx)(l.A, {
                                    className: "h-6 w-6 mb-1"
                                }), (0,
                                s.jsx)("span", {
                                    children: "Play with Friend"
                                })]
                            }), (0,
                            s.jsxs)(w, {
                                variant: v !== K.FRIEND ? "default" : "outline",
                                className: N("h-20 flex flex-col items-center justify-center transition-all", v !== K.FRIEND ? "bg-gradient-to-br from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700" : ""),
                                onClick: () => {
                                    v === K.FRIEND && (b(K.AI_MEDIUM),
                                    et())
                                }
                                ,
                                children: [(0,
                                s.jsx)(d.A, {
                                    className: "h-6 w-6 mb-1"
                                }), (0,
                                s.jsx)("span", {
                                    children: "Play with AI"
                                })]
                            })]
                        }), v !== K.FRIEND && (0,
                        s.jsxs)(i.P.div, {
                            initial: {
                                opacity: 0,
                                height: 0
                            },
                            animate: {
                                opacity: 1,
                                height: "auto"
                            },
                            exit: {
                                opacity: 0,
                                height: 0
                            },
                            transition: {
                                duration: .3
                            },
                            className: "mt-3",
                            children: [(0,
                            s.jsx)("h3", {
                                className: "text-sm font-medium mb-2 text-center",
                                children: "AI Difficulty"
                            }), (0,
                            s.jsxs)("div", {
                                className: "grid grid-cols-3 gap-2",
                                children: [(0,
                                s.jsx)(w, {
                                    variant: v === K.AI_EASY ? "default" : "outline",
                                    size: "sm",
                                    className: N(v === K.AI_EASY ? "bg-green-500 hover:bg-green-600" : ""),
                                    onClick: () => {
                                        b(K.AI_EASY),
                                        et()
                                    }
                                    ,
                                    children: "Easy"
                                }), (0,
                                s.jsx)(w, {
                                    variant: v === K.AI_MEDIUM ? "default" : "outline",
                                    size: "sm",
                                    className: N(v === K.AI_MEDIUM ? "bg-yellow-500 hover:bg-yellow-600 text-black" : ""),
                                    onClick: () => {
                                        b(K.AI_MEDIUM),
                                        et()
                                    }
                                    ,
                                    children: "Medium"
                                }), (0,
                                s.jsx)(w, {
                                    variant: v === K.AI_HARD ? "default" : "outline",
                                    size: "sm",
                                    className: N(v === K.AI_HARD ? "bg-red-500 hover:bg-red-600" : ""),
                                    onClick: () => {
                                        b(K.AI_HARD),
                                        et()
                                    }
                                    ,
                                    children: "Hard"
                                })]
                            })]
                        })]
                    }), (0,
                    s.jsxs)(I, {
                        value: F,
                        onValueChange: L,
                        className: "w-full",
                        children: [(0,
                        s.jsxs)(M, {
                            className: "grid w-full grid-cols-3 mb-4",
                            children: [(0,
                            s.jsx)(R, {
                                value: "game",
                                className: "data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-600",
                                children: "Game"
                            }), (0,
                            s.jsxs)(R, {
                                value: "history",
                                className: "data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-600",
                                children: [(0,
                                s.jsx)(u.A, {
                                    className: "h-4 w-4 mr-1"
                                }), "History"]
                            }), (0,
                            s.jsxs)(R, {
                                value: "stats",
                                className: "data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-red-600",
                                children: [(0,
                                s.jsx)(x.A, {
                                    className: "h-4 w-4 mr-1"
                                }), "Stats"]
                            })]
                        }), (0,
                        s.jsxs)(D, {
                            value: "game",
                            className: "mt-0",
                            children: [(0,
                            s.jsx)("div", {
                                className: "text-center mb-4 font-medium p-2 rounded-md bg-gray-100 dark:bg-gray-800",
                                children: T ? (0,
                                s.jsx)(V, {}) : (0,
                                s.jsx)(i.P.div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    className: "flex items-center justify-center",
                                    children: j === Q.WIN ? (0,
                                    s.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [(0,
                                        s.jsx)("span", {
                                            className: "mr-2",
                                            children: "Winner:"
                                        }), "X" === A ? (0,
                                        s.jsx)(h.A, {
                                            className: "h-5 w-5 text-indigo-500"
                                        }) : (0,
                                        s.jsx)(f.A, {
                                            className: "h-5 w-5 text-pink-500"
                                        })]
                                    }) : j === Q.DRAW ? (0,
                                    s.jsx)("span", {
                                        children: "Game ended in a draw!"
                                    }) : (0,
                                    s.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [(0,
                                        s.jsx)("span", {
                                            className: "mr-2",
                                            children: "Next player:"
                                        }), t ? (0,
                                        s.jsx)(h.A, {
                                            className: "h-5 w-5 text-indigo-500"
                                        }) : (0,
                                        s.jsx)(f.A, {
                                            className: "h-5 w-5 text-pink-500"
                                        })]
                                    })
                                }, j === Q.WIN ? "Winner: ".concat(A) : j === Q.DRAW ? "Game ended in a draw!" : "Next player: ".concat(t ? "X" : "O"))
                            }), (0,
                            s.jsx)(W, {
                                board: e,
                                winnerLine: j === Q.WIN ? (e => {
                                    let a = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
                                    for (let t = 0; t < a.length; t++) {
                                        let[s,r,i] = a[t];
                                        if (e[s] && e[s] === e[r] && e[s] === e[i])
                                            return a[t]
                                    }
                                    return null
                                }
                                )(e) : null,
                                onClick: ea,
                                animations: B
                            }), (0,
                            s.jsx)("div", {
                                className: "mt-6 flex justify-center",
                                children: (0,
                                s.jsxs)(w, {
                                    onClick: et,
                                    variant: "outline",
                                    className: "flex items-center px-6 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 hover:from-indigo-100 hover:to-purple-100 dark:hover:from-gray-700 dark:hover:to-gray-600",
                                    children: [(0,
                                    s.jsx)(g.A, {
                                        className: "mr-2 h-4 w-4"
                                    }), "Reset Game"]
                                })
                            })]
                        }), (0,
                        s.jsx)(D, {
                            value: "history",
                            children: (0,
                            s.jsx)(O, {
                                history: P,
                                animations: B
                            })
                        }), (0,
                        s.jsx)(D, {
                            value: "stats",
                            children: (0,
                            s.jsx)(Y, {
                                stats: G,
                                animations: B
                            })
                        })]
                    })]
                })
            })
        }
    }
}, e => {
    var a = a => e(e.s = a);
    e.O(0, [7, 441, 517, 358], () => a(6543)),
    _N_E = e.O()
}
]);
