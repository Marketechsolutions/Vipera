; /*FB_PKG_DELIM*/

__d("BanzaiWWW", ["cr:1642797"], (function(a, b, c, d, e, f, g) {
    g["default"] = b("cr:1642797")
}), 98);
__d("PlatformDialog", ["cx", "CSS", "DOMEvent", "DOMEventListener"], (function(a, b, c, d, e, f, g) {
    var h;
    a = function() {
        "use strict";
        a.getInstance = function() {
            return h
        };

        function a(a, c, d) {
            var e = this;
            h = this;
            this.$1 = a;
            this.$2 = c;
            this.$3 = !1;
            b("DOMEventListener").add(this.$1, "submit", function(c) {
                if (e.$3) {
                    new(b("DOMEvent"))(c).kill();
                    return
                }
                e.$3 = !0;
                d && b("CSS").addClass(a, "_32qa")
            })
        }
        var c = a.prototype;
        c.getForm = function() {
            return this.$1
        };
        c.getDisplay = function() {
            return this.$2
        };
        c.hasBeenSubmitted = function() {
            return this.$3
        };
        return a
    }();
    a.RESPONSE = "platform/dialog/response";
    e.exports = a
}), null);
__d("BanzaiConsts", [], (function(a, b, c, d, e, f) {
    a = {
        SEND: "Banzai:SEND",
        OK: "Banzai:OK",
        ERROR: "Banzai:ERROR",
        SHUTDOWN: "Banzai:SHUTDOWN",
        BASIC: "basic",
        VITAL: "vital",
        BASIC_WAIT: 6e4,
        BASIC_WAIT_COMET: 2e3,
        VITAL_WAIT: 1e3,
        BATCH_SIZE_LIMIT: 64e3,
        EXPIRY: 864e5,
        BATCH_TIMEOUT: 1e4,
        LAST_STORAGE_FLUSH: "banzai:last_storage_flush",
        STORAGE_FLUSH_INTERVAL: 12 * 60 * 6e4,
        POST_READY: 0,
        POST_INFLIGHT: 1,
        POST_SENT: 2
    };
    b = a;
    f["default"] = b
}), 66);
__d("CurrentUser", ["Cookie", "CurrentUserInitialData"], (function(a, b, c, d, e, f) {
    var g, h = {
        getID: function() {
            return (g || (g = b("CurrentUserInitialData"))).USER_ID
        },
        getAccountID: function() {
            return (g || (g = b("CurrentUserInitialData"))).ACCOUNT_ID
        },
        getPossiblyNonFacebookUserID: function() {
            var a;
            return (a = (g || (g = b("CurrentUserInitialData"))).NON_FACEBOOK_USER_ID) != null ? a : this.getID()
        },
        getEIMU: function() {
            var a;
            return (a = (g || (g = b("CurrentUserInitialData"))).IG_USER_EIMU) != null ? a : "0"
        },
        getEmployeeWorkUserID: function() {
            return (g || (g = b("CurrentUserInitialData"))).WORK_USER_ID
        },
        getName: function() {
            return (g || (g = b("CurrentUserInitialData"))).NAME
        },
        getShortName: function() {
            return (g || (g = b("CurrentUserInitialData"))).SHORT_NAME
        },
        getEPOU: function() {
            var a;
            return (a = (g || (g = b("CurrentUserInitialData"))).EPOU_ID) != null ? a : "0"
        },
        getEOCPU: function() {
            var a;
            return (a = (g || (g = b("CurrentUserInitialData"))).EOCPU_ID) != null ? a : "0"
        },
        isLoggedIn: function() {
            return h.getPossiblyNonFacebookUserID() !== "0"
        },
        isLoggedInNow: function() {
            var a;
            if (!h.isLoggedIn()) return !1;
            if ((g || (g = b("CurrentUserInitialData"))).IS_INTERN_SITE) return !0;
            if ((g || (g = b("CurrentUserInitialData"))).IS_ENTERPRISE_USER || (g || (g = b("CurrentUserInitialData"))).IS_IMAGINE_USER || (g || (g = b("CurrentUserInitialData"))).IS_INSTAGRAM_USER || (g || (g = b("CurrentUserInitialData"))).IS_META_SPARK_USER || (g || (g = b("CurrentUserInitialData"))).IS_OCULUS_USER || (g || (g = b("CurrentUserInitialData"))).IS_TOGETHER_APP_USER || (g || (g = b("CurrentUserInitialData"))).IS_WORK_MESSENGER_CALL_GUEST_USER || (g || (g = b("CurrentUserInitialData"))).IS_WORK_USER || (g || (g = b("CurrentUserInitialData"))).IS_WORKROOMS_USER) return !0;
            if ((g || (g = b("CurrentUserInitialData"))).ORIGINAL_USER_ID != null && (g || (g = b("CurrentUserInitialData"))).ORIGINAL_USER_ID != "") return (g || (g = b("CurrentUserInitialData"))).ORIGINAL_USER_ID === b("Cookie").get("c_user");
            return (g || (g = b("CurrentUserInitialData"))).IS_BUSINESS_DOMAIN === !0 ? (g || (g = b("CurrentUserInitialData"))).USER_ID == b("Cookie").get("c_user") : (g || (g = b("CurrentUserInitialData"))).USER_ID === ((a = b("Cookie").get("i_user")) != null ? a : b("Cookie").get("c_user"))
        },
        isEmployee: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_EMPLOYEE
        },
        isTestUser: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_TEST_USER
        },
        hasWorkUser: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).HAS_WORK_USER
        },
        isWorkUser: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_WORK_USER
        },
        isWorkroomsUser: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_WORKROOMS_USER
        },
        isGray: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_GRAY
        },
        isUnderage: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_UNDERAGE
        },
        isMessengerOnlyUser: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_MESSENGER_ONLY_USER
        },
        isDeactivatedAllowedOnMessenger: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_DEACTIVATED_ALLOWED_ON_MESSENGER
        },
        isMessengerCallGuestUser: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_MESSENGER_CALL_GUEST_USER
        },
        isBusinessPersonAccount: function() {
            return (g || (g = b("CurrentUserInitialData"))).IS_BUSINESS_PERSON_ACCOUNT
        },
        hasSecondaryBusinessPerson: function() {
            return (g || (g = b("CurrentUserInitialData"))).HAS_SECONDARY_BUSINESS_PERSON
        },
        getAppID: function() {
            return (g || (g = b("CurrentUserInitialData"))).APP_ID
        },
        isFacebookWorkAccount: function() {
            return (g || (g = b("CurrentUserInitialData"))).IS_FACEBOOK_WORK_ACCOUNT
        },
        isInstagramBusinessPerson: function() {
            return (g || (g = b("CurrentUserInitialData"))).IS_INSTAGRAM_BUSINESS_PERSON
        },
        getPageMessagingMailboxId: function() {
            var a;
            return String((a = (g || (g = b("CurrentUserInitialData"))).PAGE_MESSAGING_MAILBOX_ID) != null ? a : "0")
        }
    };
    e.exports = h
}), null);
__d("BanzaiUtils", ["BanzaiConsts", "CurrentUser", "FBLogger", "WebSession", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i = {
        canSend: function(a) {
            return a[2] >= (g || (g = b("performanceAbsoluteNow")))() - (h || (h = b("BanzaiConsts"))).EXPIRY
        },
        filterPost: function(a, c, d, e) {
            if (e.overlimit) return !0;
            if (!e.sendMinimumOnePost && a[4] + e.currentSize > (h || (h = b("BanzaiConsts"))).BATCH_SIZE_LIMIT) return !0;
            var f = a.__meta;
            if (f.status != null && f.status >= (h || (h = b("BanzaiConsts"))).POST_SENT || !i.canSend(a)) return !1;
            if (f.status != null && f.status >= (h || (h = b("BanzaiConsts"))).POST_INFLIGHT) return !0;
            var g = f.compress != null ? f.compress : !0,
                j = (f.webSessionId != null ? f.webSessionId : "null") + (f.userID != null ? f.userID : "null") + (f.appID != null ? f.appID : "null") + (g ? "compress" : ""),
                k = e.wadMap.get(j);
            k || (k = {
                app_id: f.appID,
                needs_compression: g,
                posts: [],
                user: f.userID,
                webSessionId: f.webSessionId
            }, e.wadMap.set(j, k), c.push(k));
            f.status = (h || (h = b("BanzaiConsts"))).POST_INFLIGHT;
            Array.isArray(k.posts) ? k.posts.push(a) : b("FBLogger")("banzai").mustfix("Posts were a string instead of array");
            d.push(a);
            e.currentSize += a[4];
            e.currentSize >= (h || (h = b("BanzaiConsts"))).BATCH_SIZE_LIMIT && (e.overlimit = !0);
            return e.keepRetryable && Boolean(f.retry)
        },
        resetPostStatus: function(a) {
            a.__meta.status = (h || (h = b("BanzaiConsts"))).POST_READY
        },
        retryPost: function(a, c, d) {
            var e = a;
            e.__meta.status = (h || (h = b("BanzaiConsts"))).POST_READY;
            e[3] = (e[3] || 0) + 1;
            e.__meta.retry !== !0 && c >= 400 && c < 600 && d.push(a)
        },
        wrapData: function(a, c, d, e, f) {
            d = [a, c, d, 0, (a = f) != null ? a : c ? JSON.stringify(c).length : 0];
            d.__meta = {
                appID: b("CurrentUser").getAppID(),
                retry: e === !0,
                status: (h || (h = b("BanzaiConsts"))).POST_READY,
                userID: b("CurrentUser").getPossiblyNonFacebookUserID(),
                webSessionId: b("WebSession").getId()
            };
            return d
        }
    };
    e.exports = i
}), null);
__d("cancelIdleCallback", ["cr:7384"], (function(a, b, c, d, e, f, g) {
    g["default"] = b("cr:7384")
}), 98);
__d("SetIdleTimeoutAcrossTransitions", ["NavigationMetrics", "cancelIdleCallback", "clearTimeout", "nullthrows", "requestIdleCallbackAcrossTransitions", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = !1,
        i = new Map();

    function b(a, b) {
        if (h) {
            var d = c("setTimeoutAcrossTransitions")(function() {
                var b = c("requestIdleCallbackAcrossTransitions")(function() {
                    a(), i["delete"](b)
                });
                i.set(d, b)
            }, b);
            return d
        } else return c("setTimeoutAcrossTransitions")(a, b)
    }

    function d(a) {
        c("clearTimeout")(a), i.has(a) && (c("cancelIdleCallback")(c("nullthrows")(i.get(a))), i["delete"](a))
    }
    c("NavigationMetrics").addRetroactiveListener(c("NavigationMetrics").Events.EVENT_OCCURRED, function(b, c) {
        c.event === "all_pagelets_loaded" && (h = !!a.requestIdleCallback)
    });
    g.start = b;
    g.clear = d
}), 98);
__d("BanzaiStorage", ["BanzaiConsts", "BanzaiUtils", "CurrentUser", "SetIdleTimeoutAcrossTransitions", "WebSession", "WebStorage", "WebStorageMutex", "cr:8958", "isInIframe", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i, j = "bz:",
        k = b("isInIframe")(),
        l, m = !1,
        n = null;

    function o() {
        var a = "check_quota";
        try {
            var b = p();
            if (!b) return !1;
            b.setItem(a, a);
            b.removeItem(a);
            return !0
        } catch (a) {
            return !1
        }
    }

    function p() {
        m || (m = !0, l = (g || (g = b("WebStorage"))).getLocalStorage());
        return l
    }
    a = {
        flush: function(a) {
            if (k) return;
            var c = p();
            if (c) {
                n == null && (n = parseInt(c.getItem((h || (h = b("BanzaiConsts"))).LAST_STORAGE_FLUSH), 10));
                var d = n && (i || (i = b("performanceAbsoluteNow")))() - n >= (h || (h = b("BanzaiConsts"))).STORAGE_FLUSH_INTERVAL;
                d && a();
                (d || !n) && (n = (i || (i = b("performanceAbsoluteNow")))(), (g || (g = b("WebStorage"))).setItemGuarded(c, (h || (h = b("BanzaiConsts"))).LAST_STORAGE_FLUSH, n.toString()))
            }
        },
        restore: function(a) {
            if (k) return;
            var c = p();
            if (!c) return;
            var d = function(d) {
                var e = [];
                for (var f = 0; f < c.length; f++) {
                    var g = c.key(f);
                    typeof g === "string" && g.indexOf(j) === 0 && g.indexOf("bz:__") !== 0 && e.push(g)
                }
                e.forEach(function(d) {
                    var e = c.getItem(d);
                    c.removeItem(d);
                    if (e == null || e === "") return;
                    d = b("cr:8958").parse(e);
                    d.forEach(function(c) {
                        if (!c) return;
                        var d = c.__meta = c.pop(),
                            e = b("BanzaiUtils").canSend(c);
                        if (!e) return;
                        e = b("CurrentUser").getPossiblyNonFacebookUserID();
                        (d.userID === e || e === "0") && (b("BanzaiUtils").resetPostStatus(c), a(c))
                    })
                });
                d && d.unlock()
            };
            o() ? new(b("WebStorageMutex"))("banzai").lock(d) : b("SetIdleTimeoutAcrossTransitions").start(d, 0)
        },
        store: function(a) {
            if (k) return;
            var c = p(),
                d = a.filter(function(a) {
                    return a.__meta.status !== (h || (h = b("BanzaiConsts"))).POST_SENT
                });
            if (!c || d.length <= 0) return;
            d = d.map(function(a) {
                return [a[0], a[1], a[2], a[3] || 0, a[4], a.__meta]
            });
            a.splice(0, a.length);
            (g || (g = b("WebStorage"))).setItemGuarded(c, j + b("WebSession").getId() + "." + (i || (i = b("performanceAbsoluteNow")))(), b("cr:8958").stringify(d))
        }
    };
    e.exports = a
}), null);
__d("QueryString", [], (function(a, b, c, d, e, f) {
    function g(a) {
        var b = [];
        Object.keys(a).sort().forEach(function(c) {
            var d = a[c];
            if (d === void 0) return;
            if (d === null) {
                b.push(c);
                return
            }
            b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)))
        });
        return b.join("&")
    }

    function a(a, b) {
        b === void 0 && (b = !1);
        var c = {};
        if (a === "") return c;
        a = a.split("&");
        for (var d = 0; d < a.length; d++) {
            var e = a[d].split("=", 2),
                f = decodeURIComponent(e[0]);
            if (b && Object.prototype.hasOwnProperty.call(c, f)) throw new URIError("Duplicate key: " + f);
            c[f] = e.length === 2 ? decodeURIComponent(e[1]) : null
        }
        return c
    }

    function b(a, b) {
        return a + (a.indexOf("?") !== -1 ? "&" : "?") + (typeof b === "string" ? b : g(b))
    }
    c = {
        encode: g,
        decode: a,
        appendToUrl: b
    };
    f["default"] = c
}), 66);
__d("getCrossOriginTransport", ["invariant", "ExecutionEnvironment", "err"], (function(a, b, c, d, e, f, g) {
    var h;

    function i() {
        if (!(h || (h = b("ExecutionEnvironment"))).isInBrowser) throw b("err")("getCrossOriginTransport: %s", "Cross origin transport unavailable in the server environment.");
        try {
            var a = new XMLHttpRequest();
            !("withCredentials" in a) && typeof XDomainRequest !== "undefined" && (a = new XDomainRequest());
            return a
        } catch (a) {
            throw b("err")("getCrossOriginTransport: %s", a.message)
        }
    }
    i.withCredentials = function() {
        var a = i();
        "withCredentials" in a || g(0, 5150);
        var b = a.open;
        a.open = function() {
            b.apply(this, arguments), this.withCredentials = !0
        };
        return a
    };
    e.exports = i
}), null);
__d("ZeroRewrites", ["URI", "ZeroRewriteRules", "getCrossOriginTransport", "getSameOriginTransport", "isFacebookURI"], (function(a, b, c, d, e, f) {
    var g, h = {
        rewriteURI: function(a) {
            if (!b("isFacebookURI")(a) || h._isWhitelisted(a)) return a;
            var c = h._getRewrittenSubdomain(a);
            c !== null && c !== void 0 && (a = a.setSubdomain(c));
            return a
        },
        getTransportBuilderForURI: function(a) {
            return h.isRewritten(a) ? b("getCrossOriginTransport").withCredentials : b("getSameOriginTransport")
        },
        isRewriteSafe: function(a) {
            if (Object.keys(b("ZeroRewriteRules").rewrite_rules).length === 0 || !b("isFacebookURI")(a)) return !1;
            var c = h._getCurrentURI().getDomain(),
                d = new(g || (g = b("URI")))(a).qualify().getDomain();
            return c === d || h.isRewritten(a)
        },
        isRewritten: function(a) {
            a = a.getQualifiedURI();
            if (Object.keys(b("ZeroRewriteRules").rewrite_rules).length === 0 || !b("isFacebookURI")(a) || h._isWhitelisted(a)) return !1;
            var c = a.getSubdomain(),
                d = h._getCurrentURI(),
                e = h._getRewrittenSubdomain(d);
            return a.getDomain() !== d.getDomain() && c === e
        },
        _isWhitelisted: function(a) {
            a = a.getPath();
            a.endsWith("/") || (a += "/");
            return b("ZeroRewriteRules").whitelist && b("ZeroRewriteRules").whitelist[a] === 1
        },
        _getRewrittenSubdomain: function(a) {
            a = a.getQualifiedURI().getSubdomain();
            return b("ZeroRewriteRules").rewrite_rules[a]
        },
        _getCurrentURI: function() {
            return new(g || (g = b("URI")))("/").qualify()
        }
    };
    e.exports = h
}), null);
__d("once", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b = g(a);
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
        return b
    }

    function g(a) {
        var b = a,
            c;
        a = function() {
            if (b) {
                for (var a = arguments.length, d = new Array(a), e = 0; e < a; e++) d[e] = arguments[e];
                c = b.apply(this, d);
                b = null
            }
            return c
        };
        return a
    }
    f["default"] = a
}), 66);
__d("BanzaiAdapterWWW", ["invariant", "Arbiter", "BanzaiConfig", "BanzaiConsts", "BanzaiStorage", "QueryString", "Run", "StaticSiteData", "TimeSlice", "URI", "UserAgent", "ZeroRewrites", "getAsyncParams", "isInIframe", "lowerFacebookDomain", "once"], (function(a, b, c, d, e, f, g, h) {
    var i, j, k = [],
        l = new(c("Arbiter"))(),
        m = c("isInIframe")(),
        n = "/ajax/bz",
        o = "POST",
        p = {
            config: c("BanzaiConfig"),
            useBeacon: !0,
            getEndPointUrl: function(a) {
                a = c("getAsyncParams")(o);
                delete a[c("StaticSiteData").csr_key];
                a = c("QueryString").appendToUrl(n, a);
                a.length <= 2e3 || h(0, 21850, a);
                return a
            },
            getStorage: function() {
                return c("BanzaiStorage")
            },
            getTopLevel: function() {
                return m && c("lowerFacebookDomain").isValidDocumentDomain() ? window.top : null
            },
            inform: function(a) {
                l.inform(a)
            },
            subscribe: function(a, b) {
                return l.subscribe(a, b)
            },
            wrapInTimeSlice: function(a, b) {
                return c("TimeSlice").guard(function() {
                    a()
                }, b, {
                    propagationType: c("TimeSlice").PropagationType.ORPHAN
                })
            },
            cleanup: function() {
                var a = k;
                k = [];
                a.forEach(function(a) {
                    a.readyState < 4 && a.abort()
                })
            },
            preferredCompressionMethod: c("once")(function() {
                return "snappy_base64"
            }),
            readyToSend: function() {
                return c("UserAgent").isBrowser("IE <= 8") || navigator.onLine
            },
            send: function(a, b, e, f) {
                var g = p.getEndPointUrl(!1);
                g = d("ZeroRewrites").rewriteURI(new(i || (i = c("URI")))(g));
                var h = d("ZeroRewrites").getTransportBuilderForURI(g)();
                h.open(o, g.toString(), !0);
                h.onreadystatechange = function() {
                    if (h.readyState >= 4) {
                        var a = k.indexOf(h);
                        a >= 0 && k.splice(a, 1);
                        try {
                            a = h.status
                        } catch (b) {
                            a = 0
                        }
                        a == 200 ? (b && b(), f || p.inform((j || (j = c("BanzaiConsts"))).OK)) : (e && e(a), f || p.inform((j || (j = c("BanzaiConsts"))).ERROR))
                    }
                };
                k.push(h);
                h.send(a, !1)
            },
            setHooks: function(a) {},
            setUnloadHook: function(a) {
                d("Run").onAfterUnload(a._unload)
            },
            onUnload: function(a) {
                d("Run").onAfterUnload(a)
            },
            isOkToSendViaBeacon: function() {
                return !0
            }
        };
    a = p;
    g["default"] = a
}), 98);
__d("ArbiterFrame", [], (function(a, b, c, d, e, f) {
    a = {
        inform: function(a, b, c) {
            var d = parent.frames,
                e = d.length,
                f;
            b.crossFrame = !0;
            for (var g = 0; g < e; g++) {
                f = d[g];
                try {
                    if (!f || f == window) continue;
                    f.require ? f.require("Arbiter").inform(a, b, c) : f.ServerJSAsyncLoader && f.ServerJSAsyncLoader.wakeUp(a, b, c)
                } catch (a) {}
            }
        }
    };
    e.exports = a
}), null);
__d("isAdsExcelAddinURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)fbaddins\\.com$", "i"),
        h = ["https"];

    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !1 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain())
    }
    f["default"] = a
}), 66);
__d("isValidAsyncSignalURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("((^|\\.)instagram\\.com$)|((^|\\.)wit\\.ai$)|((^|\\.)accountkit\\.com$)", "i"),
        h = ["https"];

    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !1 : h.includes(a.getProtocol()) && g.test(a.getDomain())
    }
    f["default"] = a
}), 66);
__d("AsyncSignal", ["ErrorGuard", "Promise", "QueryString", "Run", "TimeSlice", "TrackingConfig", "URI", "ZeroRewrites", "getAsyncParams", "isAdsExcelAddinURI", "isFacebookURI", "isMessengerDotComURI", "isValidAsyncSignalURI", "isWorkplaceDotComURI", "memoize", "promiseDone"], (function(a, b, c, d, e, f) {
    var g, h, i, j;

    function a(a, c) {
        this.data = c || {}, this.uri = a.toString(), b("TrackingConfig").domain && this.uri.charAt(0) == "/" && (this.uri = b("TrackingConfig").domain + this.uri)
    }
    a.prototype.setHandler = function(a) {
        this.handler = a;
        return this
    };
    a.prototype.setTimeout = function(a) {
        this.timeout = a;
        return this
    };
    a.prototype.send = function() {
        b("TimeSlice").guard(this._send.bind(this), "AsyncSignal send", {
            propagationType: b("TimeSlice").PropagationType.ORPHAN
        })()
    };
    a.prototype._send = function() {
        var a = this.handler,
            c = this.data;
        c.asyncSignal = (Math.random() * 1e4 | 0) + 1;
        var d = b("ZeroRewrites").rewriteURI(new(g || (g = b("URI")))(this.uri));
        d = b("isFacebookURI")(d) || b("isMessengerDotComURI")(d) || b("isAdsExcelAddinURI")(d) || b("isWorkplaceDotComURI")(d) || b("isValidAsyncSignalURI")(d);
        if (d) Object.assign(c, b("getAsyncParams")("POST"));
        else throw new Error("'" + this.uri + "' is an external URL, you should not send async signals to offsite links.");
        var e = b("QueryString").appendToUrl(this.uri, c);
        j || (j = new(h || (h = b("Promise")))(function(a) {
            b("Run").onAfterLoad(a)
        }));
        d = j.then(function() {
            return new(h || (h = b("Promise")))(function(a, b) {
                var c = new Image();
                c.onload = a;
                c.onerror = c.onabort = b;
                c.src = e
            })
        });
        if (a) {
            var f = !1,
                k = b("memoize")(function() {
                    (i || (i = b("ErrorGuard"))).applyWithGuard(a, null, [f])
                });
            b("promiseDone")(d.then(function() {
                f = !0, k()
            }, k));
            this.timeout && setTimeout(k, this.timeout)
        }
        return this
    };
    e.exports = a
}), null);
__d("FbtResultBase", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function() {
        function a(a, b) {
            this.$1 = a, this.__errorListener = b, this.$3 = !1, this.$2 = null
        }
        var b = a.prototype;
        b.flattenToArray = function() {
            return a.flattenToArray(this.$1)
        };
        b.getContents = function() {
            return this.$1
        };
        b.toString = function() {
            if (Object.isFrozen(this)) return this.$4();
            if (this.$3) return "<<Reentering fbt.toString() is forbidden>>";
            this.$3 = !0;
            try {
                return this.$4()
            } finally {
                this.$3 = !1
            }
        };
        b.$4 = function() {
            if (this.$2 != null) return this.$2;
            var b = "",
                c = this.flattenToArray();
            for (var d = 0; d < c.length; ++d) {
                var e = c[d];
                if (typeof e === "string" || e instanceof a) b += e.toString();
                else {
                    var f;
                    (f = this.__errorListener) == null ? void 0 : f.onStringSerializationError == null ? void 0 : f.onStringSerializationError(e)
                }
            }
            Object.isFrozen(this) || (this.$2 = b);
            return b
        };
        b.toJSON = function() {
            return this.toString()
        };
        a.flattenToArray = function(b) {
            var c = [];
            for (var d = 0; d < b.length; ++d) {
                var e = b[d];
                Array.isArray(e) ? c.push.apply(c, a.flattenToArray(e)) : e instanceof a ? c.push.apply(c, e.flattenToArray()) : c.push(e)
            }
            return c
        };
        return a
    }();
    ["anchor", "big", "blink", "bold", "charAt", "charCodeAt", "codePointAt", "contains", "endsWith", "fixed", "fontcolor", "fontsize", "includes", "indexOf", "italics", "lastIndexOf", "link", "localeCompare", "match", "normalize", "repeat", "replace", "search", "slice", "small", "split", "startsWith", "strike", "sub", "substr", "substring", "sup", "toLocaleLowerCase", "toLocaleUpperCase", "toLowerCase", "toUpperCase", "trim", "trimLeft", "trimRight"].forEach(function(a) {
        g.prototype[a] = function() {
            var b;
            (b = this.__errorListener) == null ? void 0 : b.onStringMethodUsed == null ? void 0 : b.onStringMethodUsed(a);
            for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++) d[e] = arguments[e];
            return String.prototype[a].apply(this, d)
        }
    });
    a = g;
    e.exports = a
}), null);
__d("TrustedTypesIEFixDOMPolicy", ["TrustedTypes"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        createHTML: function(a) {
            return a
        }
    };
    b = c("TrustedTypes").createPolicy("dom-ie-fix", a);
    d = b;
    g["default"] = d
}), 98);
__d("UserAgent_DEPRECATED", [], (function(a, b, c, d, e, f) {
    var g = !1,
        h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w;

    function x() {
        if (g) return;
        g = !0;
        var a = navigator.userAgent,
            b = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(a),
            c = /(Mac OS X)|(Windows)|(Linux)/.exec(a);
        s = /\b(iPhone|iP[ao]d)/.exec(a);
        t = /\b(iP[ao]d)/.exec(a);
        q = /Android/i.exec(a);
        u = /FBAN\/\w+;/i.exec(a);
        v = /FBAN\/mLite;/i.exec(a);
        w = /Mobile/i.exec(a);
        r = !!/Win64/.exec(a);
        if (b) {
            h = b[1] ? parseFloat(b[1]) : b[5] ? parseFloat(b[5]) : NaN;
            h && document && document.documentMode && (h = document.documentMode);
            var d = /(?:Trident\/(\d+.\d+))/.exec(a);
            m = d ? parseFloat(d[1]) + 4 : h;
            i = b[2] ? parseFloat(b[2]) : NaN;
            j = b[3] ? parseFloat(b[3]) : NaN;
            k = b[4] ? parseFloat(b[4]) : NaN;
            k ? (b = /(?:Chrome\/(\d+\.\d+))/.exec(a), l = b && b[1] ? parseFloat(b[1]) : NaN) : l = NaN
        } else h = i = j = l = k = NaN;
        if (c) {
            if (c[1]) {
                d = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(a);
                n = d ? parseFloat(d[1].replace("_", ".")) : !0
            } else n = !1;
            o = !!c[2];
            p = !!c[3]
        } else n = o = p = !1
    }

    function y() {
        return x() || h
    }

    function a() {
        return x() || m > h
    }

    function b() {
        return y() && r
    }

    function c() {
        return x() || i
    }

    function d() {
        return x() || j
    }

    function z() {
        return x() || k
    }

    function e() {
        return z()
    }

    function A() {
        return x() || l
    }

    function B() {
        return x() || o
    }

    function C() {
        return x() || n
    }

    function D() {
        return x() || p
    }

    function E() {
        return x() || s
    }

    function F() {
        return x() || s || t || q || w
    }

    function G() {
        return x() || v != null ? null : u
    }

    function H() {
        return x() || q
    }

    function I() {
        return x() || t
    }
    f.ie = y;
    f.ieCompatibilityMode = a;
    f.ie64 = b;
    f.firefox = c;
    f.opera = d;
    f.webkit = z;
    f.safari = e;
    f.chrome = A;
    f.windows = B;
    f.osx = C;
    f.linux = D;
    f.iphone = E;
    f.mobile = F;
    f.nativeApp = G;
    f.android = H;
    f.ipad = I
}), 66);
__d("isScalar", [], (function(a, b, c, d, e, f) {
    function a(a) {
        return /string|number|boolean/.test(typeof a)
    }
    f["default"] = a
}), 66);
__d("DOM", ["$", "DOMQuery", "Event", "FBLogger", "FbtResultBase", "HTML", "TrustedTypesIEFixDOMPolicy", "UserAgent_DEPRECATED", "createArrayFromMixed", "fb-error", "isNode", "isScalar", "isTextNode"], (function(a, b, c, d, e, f, g) {
    a = function(a, b, c) {
        a = document.createElement(a);
        b && h.setAttributes(a, b);
        c != null && h.setContent(a, c);
        return a
    };
    var h = {
        find: (b = d("DOMQuery")).find,
        findPushSafe: b.findPushSafe,
        scry: b.scry,
        getSelection: b.getSelection,
        contains: b.contains,
        getRootElement: b.getRootElement,
        isNodeOfType: b.isNodeOfType,
        isInputNode: b.isInputNode,
        create: a,
        setAttributes: function(a, b) {
            b.type && (a.type = b.type);
            for (var d in b) {
                var e = b[d],
                    f = /^on/i.test(d);
                f && typeof e !== "function" && c("FBLogger")("dom").warn("Handlers passed to DOM.setAttributes must be functions. Handler passed for %s was %s", d, typeof e);
                if (d == "type") continue;
                else d == "style" ? typeof e === "string" ? a.style.cssText = e : Object.assign(a.style, e) : f ? c("Event").listen(a, d.substr(2), e) : d in a ? a[d] = e : a.setAttribute && a.setAttribute(d, e)
            }
        },
        prependContent: function(a, b) {
            if (!a) throw c("fb-error").TAAL.blameToPreviousFile(new Error("reference element is not a node"));
            return j(b, a, function(b) {
                a.firstChild ? a.insertBefore(b, a.firstChild) : a.appendChild(b)
            })
        },
        insertAfter: function(a, b) {
            if (!a || !a.parentNode) throw c("fb-error").TAAL.blameToPreviousFile(new Error("reference element does not have a parent"));
            var d = a.parentNode;
            return j(b, d, function(b) {
                a.nextSibling ? d.insertBefore(b, a.nextSibling) : d.appendChild(b)
            })
        },
        insertBefore: function(a, b) {
            if (!a || !a.parentNode) throw c("fb-error").TAAL.blameToPreviousFile(new Error("reference element does not have a parent"));
            var d = a.parentNode;
            return j(b, d, function(b) {
                d.insertBefore(b, a)
            })
        },
        setContent: function(a, b) {
            if (!a) throw c("fb-error").TAAL.blameToPreviousFile(new Error("reference element is not a node"));
            while (a.firstChild) i(a.firstChild);
            return h.appendContent(a, b)
        },
        appendContent: function(a, b) {
            if (!a) throw c("fb-error").TAAL.blameToPreviousFile(new Error("reference element is not a node"));
            return j(b, a, function(b) {
                a.appendChild(b)
            })
        },
        replace: function(a, b) {
            if (!a || !a.parentNode) throw c("fb-error").TAAL.blameToPreviousFile(new Error("reference element does not have a parent"));
            var d = a.parentNode;
            return j(b, d, function(b) {
                d.replaceChild(b, a)
            })
        },
        remove: function(a) {
            i(typeof a === "string" ? c("$")(a) : a)
        },
        empty: function(a) {
            a = typeof a === "string" ? c("$")(a) : a;
            while (a.firstChild) i(a.firstChild)
        }
    };

    function i(a) {
        a.parentNode && a.parentNode.removeChild(a)
    }

    function j(a, b, e) {
        a = c("HTML").replaceJSONWrapper(a);
        if (a instanceof c("HTML") && b.firstChild === null && -1 === a.toString().indexOf("<script")) {
            var f = d("UserAgent_DEPRECATED").ie();
            if (!f || f > 7 && !d("DOMQuery").isNodeOfType(b, ["table", "tbody", "thead", "tfoot", "tr", "select", "fieldset"])) {
                var g = f ? '<em style="display:none;">&nbsp;</em>' : "";
                b.innerHTML = c("TrustedTypesIEFixDOMPolicy").createHTML(g + a);
                f && b.removeChild(b.firstChild);
                return Array.from(b.childNodes)
            }
        } else if (c("isTextNode")(b)) {
            b.data = a;
            return [a]
        }
        g = document.createDocumentFragment();
        var h;
        f = [];
        b = [];
        var i = !1;
        a = c("createArrayFromMixed")(a);
        a.length === 1 && a[0] instanceof c("FbtResultBase") && (a = a[0].getContents());
        for (var j = 0; j < a.length; j++) {
            h = c("HTML").replaceJSONWrapper(a[j]);
            if (h instanceof c("HTML")) {
                b.push(h.getAction());
                var k = h.getNodes();
                !i && h.hasInlineJs() && (c("FBLogger")("staticresources").warn("DOM: adding HTML which contains inline JS"), i = !0);
                for (var l = 0; l < k.length; l++) f.push(k[l]), g.appendChild(k[l])
            } else if (c("isScalar")(h) || h instanceof c("FbtResultBase")) {
                l = document.createTextNode(h);
                f.push(l);
                g.appendChild(l)
            } else c("isNode")(h) ? (f.push(h), g.appendChild(h)) : (Array.isArray(h) && c("FBLogger")("dom").warn("Nest arrays not supported"), h !== null && c("FBLogger")("dom").warn("No way to set content %s", h))
        }
        e(g);
        b.forEach(function(a) {
            a()
        });
        return f
    }
    e = h;
    g["default"] = e
}), 98);
__d("camelize", [], (function(a, b, c, d, e, f) {
    var g = /-(.)/g;

    function a(a) {
        return a.replace(g, function(a, b) {
            return b.toUpperCase()
        })
    }
    f["default"] = a
}), 66);
__d("getOpacityStyleName", [], (function(a, b, c, d, e, f) {
    var g = !1,
        h = null;

    function a() {
        if (!g) {
            if (document.body && "opacity" in document.body.style) h = "opacity";
            else {
                var a = document.createElement("div");
                a.style.filter = "alpha(opacity=100)";
                a.style.filter && (h = "filter")
            }
            g = !0
        }
        return h
    }
    f["default"] = a
}), 66);
__d("hyphenate", [], (function(a, b, c, d, e, f) {
    var g = /([A-Z])/g;

    function a(a) {
        return a.replace(g, "-$1").toLowerCase()
    }
    f["default"] = a
}), 66);
__d("getStyleProperty", ["camelize", "hyphenate"], (function(a, b, c, d, e, f, g) {
    function h(a) {
        return a == null ? "" : String(a)
    }

    function a(a, b) {
        var d;
        if (window.getComputedStyle) {
            d = window.getComputedStyle(a, null);
            if (d) return h(d.getPropertyValue(c("hyphenate")(b)))
        }
        if (document.defaultView && document.defaultView.getComputedStyle) {
            d = document.defaultView.getComputedStyle(a, null);
            if (d) return h(d.getPropertyValue(c("hyphenate")(b)));
            if (b === "display") return "none"
        }
        return a.currentStyle ? b === "float" ? h(a.currentStyle.cssFloat || a.currentStyle.styleFloat) : h(a.currentStyle[c("camelize")(b)]) : h(a.style && a.style[c("camelize")(b)])
    }
    g["default"] = a
}), 98);
__d("StyleCore", ["invariant", "camelize", "containsNode", "err", "getOpacityStyleName", "getStyleProperty", "hyphenate"], (function(a, b, c, d, e, f, g, h) {
    function i(a, b) {
        a = o.get(a, b);
        return a === "auto" || a === "scroll"
    }
    var j = new RegExp("\\s*([^\\s:]+)\\s*:\\s*([^;('\"]*(?:(?:\\([^)]*\\)|\"[^\"]*\"|'[^']*')[^;(?:'\"]*)*)(?:;|$)", "g");

    function k(a) {
        var b = {};
        a.replace(j, function(a, c, d) {
            b[c] = d;
            return d
        });
        return b
    }

    function l(a) {
        var b = "";
        for (var c in a) a[c] && (b += c + ":" + a[c] + ";");
        return b
    }

    function m(a) {
        return a !== "" ? "alpha(opacity=" + a * 100 + ")" : ""
    }

    function n(a, b, d) {
        switch (c("hyphenate")(b)) {
            case "font-weight":
            case "line-height":
            case "opacity":
            case "z-index":
            case "animation-iteration-count":
            case "-webkit-animation-iteration-count":
                break;
            case "width":
            case "height":
                var e = parseInt(d, 10) < 0;
                e && h(0, 11849, a, b, d);
            default:
                isNaN(d) || !d || d === "0" || h(0, 11850, a, b, d, d + "px");
                break
        }
    }
    var o = {
        set: function(a, b, d) {
            n("Style.set", b, d);
            if (a == null) return;
            a = a.style;
            switch (b) {
                case "opacity":
                    c("getOpacityStyleName")() === "filter" ? a.filter = m(d) : a.opacity = d;
                    break;
                case "float":
                    a.cssFloat = a.styleFloat = d || "";
                    break;
                default:
                    try {
                        a[c("camelize")(b)] = d
                    } catch (a) {
                        throw c("err")('Style.set: "%s" argument is invalid: %s', b, d)
                    }
            }
        },
        apply: function(a, b) {
            var d;
            for (d in b) n("Style.apply", d, b[d]);
            "opacity" in b && c("getOpacityStyleName")() === "filter" && (b.filter = m(b.opacity), delete b.opacity);
            var e = k(a.style.cssText);
            for (d in b) {
                var f = b[d];
                delete b[d];
                var g = c("hyphenate")(d);
                for (var h in e)(h === g || h.indexOf(g + "-") === 0) && delete e[h];
                b[g] = f
            }
            Object.assign(e, b);
            a.style.cssText = l(e)
        },
        get: c("getStyleProperty"),
        getFloat: function(a, b) {
            return parseFloat(o.get(a, b), 10)
        },
        getOpacity: function(a) {
            if (c("getOpacityStyleName")() === "filter") {
                var b = o.get(a, "filter");
                if (b) {
                    b = /(\d+(?:\.\d+)?)/.exec(b);
                    if (b) return parseFloat(b.pop()) / 100
                }
            }
            return o.getFloat(a, "opacity") || 1
        },
        isFixed: function(a) {
            while (c("containsNode")(document.body, a)) {
                if (o.get(a, "position") === "fixed") return !0;
                a = a.parentNode
            }
            return !1
        },
        getScrollParent: function(a) {
            if (!a) return null;
            while (a && a !== document.body) {
                if (i(a, "overflow") || i(a, "overflowY") || i(a, "overflowX")) return a;
                a = a.parentNode
            }
            return window
        }
    };
    a = o;
    g["default"] = a
}), 98);
__d("Style", ["$", "StyleCore"], (function(a, b, c, d, e, f, g) {
    a = babelHelpers["extends"]({}, c("StyleCore"), {
        get: function(a, b) {
            typeof a === "string" && (a = c("$")(a));
            return c("StyleCore").get(a, b)
        },
        getFloat: function(a, b) {
            typeof a === "string" && (a = c("$")(a));
            return c("StyleCore").getFloat(a, b)
        }
    });
    b = a;
    g["default"] = b
}), 98);
__d("DOMDimensions", ["Style", "getDocumentScrollElement"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b = a ? a.offsetHeight : 0;
        a = a ? a.offsetWidth : 0;
        return {
            height: b,
            width: a
        }
    }

    function b(a) {
        a = c("getDocumentScrollElement")(a);
        var b = a.scrollWidth || 0;
        a = a.scrollHeight || 0;
        return {
            width: b,
            height: a
        }
    }

    function d(a, b, d, e, f) {
        var g;
        switch (b) {
            case "left":
            case "right":
            case "top":
            case "bottom":
                g = [b];
                break;
            case "width":
                g = ["left", "right"];
                break;
            case "height":
                g = ["top", "bottom"];
                break;
            default:
                throw Error("Invalid plane: " + b)
        }
        b = function(b, d) {
            var e = 0;
            for (var f = 0; f < g.length; f++) e += parseFloat(c("Style").get(a, b + "-" + g[f] + d)) || 0;
            return e
        };
        return (d ? b("padding", "") : 0) + (e ? b("border", "-width") : 0) + (f ? b("margin", "") : 0)
    }
    g.getElementDimensions = a;
    g.getDocumentDimensions = b;
    g.measureElementBox = d
}), 98);
__d("WebPixelRatio", ["SiteData"], (function(a, b, c, d, e, f, g) {
    function a() {
        return c("SiteData").pr != null && c("SiteData").pr > 0 ? c("SiteData").pr : window.devicePixelRatio || 1
    }
    g.get = a
}), 98);
__d("PixelRatioConst", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        cookieName: "dpr"
    });
    f["default"] = a
}), 66);
__d("WebPixelRatioDetector", ["Cookie", "DOMEventListener", "PixelRatioConst", "Run", "WebPixelRatio"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = !1,
        i = !1;

    function j() {
        return window.devicePixelRatio || 1
    }

    function k() {
        c("Cookie").set(c("PixelRatioConst").cookieName, String(j()))
    }

    function l() {
        if (i) return;
        i = !0;
        j() !== d("WebPixelRatio").get() && k()
    }

    function a(a) {
        if (h) return;
        h = !0;
        "onpagehide" in window && d("DOMEventListener").add(window, "pagehide", l);
        d("Run").onBeforeUnload(l, !1)
    }
    g.startDetecting = a
}), 98);
__d("Log", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = -1;
    b = {
        DEBUG: 3,
        INFO: 2,
        WARNING: 1,
        ERROR: 0
    };
    c = function(a, b, c) {
        for (var d = arguments.length, e = new Array(d > 3 ? d - 3 : 0), f = 3; f < d; f++) e[f - 3] = arguments[f];
        var h = 0,
            i = c.replace(/%s/g, function() {
                return String(e[h++])
            }),
            j = window.console;
        j && g >= b && j[a in j ? a : "log"](i)
    };

    function a(a) {
        g = a
    }
    d = c.bind(null, "debug", b.DEBUG);
    e = c.bind(null, "info", b.INFO);
    var h = c.bind(null, "warn", b.WARNING),
        i = c.bind(null, "error", b.ERROR);
    f.Level = b;
    f.log = c;
    f.setLevel = a;
    f.debug = d;
    f.info = e;
    f.warn = h;
    f.error = i
}), 66);
__d("Queue", [], (function(a, b, c, d, e, f) {
    var g = {};
    a = function() {
        function a(a) {
            this._timeout = null, this._interval = (a == null ? void 0 : a.interval) || 0, this._processor = a == null ? void 0 : a.processor, this._queue = [], this._stopped = !0
        }
        var b = a.prototype;
        b._dispatch = function(a) {
            var b = this;
            a === void 0;
            if (this._stopped || this._queue.length === 0) return;
            a = this._processor;
            if (a == null) {
                this._stopped = !0;
                throw new Error("No processor available")
            }
            var c = this._interval;
            if (c != null) a.call(this, this._queue.shift()), this._timeout = setTimeout(function() {
                return b._dispatch()
            }, c);
            else
                while (this._queue.length) a.call(this, this._queue.shift())
        };
        b.enqueue = function(a) {
            this._processor && !this._stopped ? this._processor(a) : this._queue.push(a);
            return this
        };
        b.start = function(a) {
            a && (this._processor = a);
            this._stopped = !1;
            this._dispatch();
            return this
        };
        b.isStarted = function() {
            return !this._stopped
        };
        b.dispatch = function() {
            this._dispatch(!0)
        };
        b.stop = function(a) {
            this._stopped = !0;
            a && this._timeout != null && clearTimeout(this._timeout);
            return this
        };
        b.merge = function(a, b) {
            if (b) {
                (b = this._queue).unshift.apply(b, a._queue)
            } else {
                (b = this._queue).push.apply(b, a._queue)
            }
            a._queue = [];
            this._dispatch();
            return this
        };
        b.getLength = function() {
            return this._queue.length
        };
        a.get = function(b, c) {
            var d;
            b in g ? d = g[b] : d = g[b] = new a(c);
            return d
        };
        a.exists = function(a) {
            return a in g
        };
        a.remove = function(a) {
            return delete g[a]
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("resolveWindow", [], (function(a, b, c, d, e, f) {
    function a(a) {
        if (a == null) return null;
        var b = window;
        a = a.split(".");
        try {
            for (var c = 0; c < a.length; c++) {
                var d = a[c],
                    e = /^frames\[[\'\"]?([a-zA-Z0-9\-_]+)[\'\"]?\]$/.exec(d);
                if (e) b = b.frames[e[1]];
                else if (d === "opener" || d === "parent" || d === "top") b = b[d];
                else return null
            }
        } catch (a) {
            return null
        }
        return b
    }
    f["default"] = a
}), 66);
__d("ObservableMixin", [], (function(a, b, c, d, e, f) {
    function a() {
        this.__observableEvents = {}
    }
    a.prototype = {
        inform: function(a) {
            var b = Array.prototype.slice.call(arguments, 1),
                c = Array.prototype.slice.call(this.getSubscribers(a));
            for (var d = 0; d < c.length; d++) {
                if (c[d] === null) continue;
                try {
                    c[d].apply(this, b)
                } catch (a) {
                    window.setTimeout(function() {
                        throw a
                    }, 0)
                }
            }
            return this
        },
        getSubscribers: function(a) {
            return this.__observableEvents[a] || (this.__observableEvents[a] = [])
        },
        clearSubscribers: function(a) {
            a && (this.__observableEvents[a] = []);
            return this
        },
        subscribe: function(a, b) {
            a = this.getSubscribers(a);
            a.push(b);
            return this
        },
        unsubscribe: function(a, b) {
            a = this.getSubscribers(a);
            for (var c = 0; c < a.length; c++)
                if (a[c] === b) {
                    a.splice(c, 1);
                    break
                }
            return this
        }
    };
    e.exports = a
}), null);
__d("ManagedError", [], (function(a, b, c, d, e, f) {
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c) {
            var d;
            d = a.call(this, b !== null && b !== void 0 ? b : "") || this;
            b !== null && b !== void 0 ? d.message = b : d.message = "";
            d.innerError = c;
            return d
        }
        return b
    }(babelHelpers.wrapNativeSuper(Error));
    f["default"] = a
}), 66);
__d("AssertionError", ["ManagedError"], (function(a, b, c, d, e, f, g) {
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            return a.call(this, b) || this
        }
        return b
    }(c("ManagedError"));
    g["default"] = a
}), 98);
__d("Assert", ["AssertionError", "sprintf"], (function(a, b, c, d, e, f, g) {
    function h(a, b) {
        if (typeof a !== "boolean" || a === !1) throw new(c("AssertionError"))(b);
        return a
    }

    function i(a, b, d) {
        var e;
        if (b === void 0) e = "undefined";
        else if (b === null) e = "null";
        else {
            var f = Object.prototype.toString.call(b);
            f = /\s(\w*)/.exec(f);
            e = f == null ? typeof f : f[1].toLowerCase()
        }
        h(a.indexOf(e) !== -1, (f = d) != null ? f : c("sprintf")("Expression is of type %s, not %s", e, a));
        return b
    }

    function a(a, b, c) {
        h(b instanceof a, (a = c) != null ? a : "Expression not instance of type");
        return b
    }

    function j(a, b) {
        k["is" + a] = b, k["maybe" + a] = function(a, c) {
            return a == null ? a : b(a, c)
        }
    }
    b = function(a, b) {
        return a
    };
    var k = {
        isInstanceOf: a,
        isTrue: h,
        isTruthy: function(a, b) {
            return h(!!a, b)
        },
        isBoolean: b,
        isFunction: b,
        isNumber: b,
        isObject: b,
        isString: b,
        isUndefined: b,
        maybeObject: b,
        maybeNumber: b,
        maybeFunction: b
    };
    ["Boolean", "Function", "Number", "Object", "String", "Undefined"].forEach(function(a) {
        j(a, i.bind(null, a.toLowerCase()))
    });
    d = k;
    g["default"] = d
}), 98);
__d("Type", ["Assert"], (function(a, b, c, d, e, f) {
    function g() {
        var a = this.__mixins;
        if (a)
            for (var b = 0; b < a.length; b++) a[b].apply(this, arguments)
    }

    function h(a, b) {
        if (b instanceof a) return !0;
        if (b instanceof g)
            for (var c = 0; c < b.__mixins.length; c++)
                if (b.__mixins[c] == a) return !0;
        return !1
    }

    function i(a, b) {
        var c = a.prototype;
        Array.isArray(b) || (b = [b]);
        for (a = 0; a < b.length; a++) {
            var d = b[a];
            typeof d === "function" && (c.__mixins.push(d), d = d.prototype);
            Object.keys(d).forEach(function(a) {
                c[a] = d[a]
            })
        }
    }

    function j(a, c, d) {
        var e = c && Object.prototype.hasOwnProperty.call(c, "constructor") ? c.constructor : function() {
            this.parent.apply(this, arguments)
        };
        b("Assert").isFunction(e);
        if (a && a.prototype instanceof g === !1) throw new Error("parent type does not inherit from Type");
        a = a || g;

        function f() {}
        f.prototype = a.prototype;
        e.prototype = new f();
        c && Object.assign(e.prototype, c);
        e.prototype.constructor = e;
        e.parent = a;
        e.prototype.__mixins = a.prototype.__mixins ? Array.prototype.slice.call(a.prototype.__mixins) : [];
        d && i(e, d);
        e.prototype.parent = function() {
            this.parent = a.prototype.parent, a.apply(this, arguments)
        };
        e.prototype.parentCall = function(b) {
            return a.prototype[b].apply(this, Array.prototype.slice.call(arguments, 1))
        };
        e.extend = function(a, b) {
            return j(this, a, b)
        };
        return e
    }
    Object.assign(g.prototype, {
        instanceOf: function(a) {
            return h(a, this)
        }
    });
    Object.assign(g, {
        extend: function(a, b) {
            return typeof a === "function" ? j.apply(null, arguments) : j(null, a, b)
        },
        instanceOf: h
    });
    e.exports = g
}), null);
__d("sdk.Model", ["ObservableMixin", "Type"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = c("Type").extend({
        constructor: function(a) {
            this.parent();
            var b = {},
                c = this;
            Object.keys(a).forEach(function(d) {
                b[d] = a[d], c["set" + d] = function(a) {
                    if (a === b[d]) return c;
                    b[d] = a;
                    c.inform(d + ".change", a);
                    return c
                }, c["get" + d] = function() {
                    return b[d]
                }
            })
        }
    }, c("ObservableMixin"));
    b = a;
    g["default"] = b
}), 98);
__d("sdk.Runtime", ["JSSDKRuntimeConfig", "sdk.Model"], (function(a, b, c, d, e, f, g) {
    var h = {
            UNKNOWN: 0,
            PAGETAB: 1,
            CANVAS: 2,
            PLATFORM: 4
        },
        i = new(c("sdk.Model"))({
            AccessToken: "",
            AutoLogAppEvents: !1,
            ClientID: "",
            CookieUserID: "",
            EnforceHttps: !1,
            Environment: h.UNKNOWN,
            FamilyLoginLoaded: !1,
            GraphDomain: "",
            Initialized: !1,
            IsSPIN: Boolean((a = d("JSSDKRuntimeConfig")).isSPIN),
            IsVersioned: !1,
            KidDirectedSite: void 0,
            Locale: a.locale,
            LoggedIntoFacebook: void 0,
            LoginStatus: void 0,
            Revision: a.revision,
            Rtl: a.rtl,
            Scope: void 0,
            SDKAB: a.sdkab,
            SDKUrl: a.sdkurl,
            SDKNS: a.sdkns,
            ShouldLoadFamilyLogin: !1,
            UseCookie: !1,
            UseLocalStorage: !0,
            UserID: "",
            Version: void 0
        });
    Object.assign(i, {
        ENVIRONMENTS: h,
        isEnvironment: function(a) {
            var b = this.getEnvironment();
            return (a | b) === b
        },
        isCanvasEnvironment: function() {
            return this.isEnvironment(h.CANVAS) || this.isEnvironment(h.PAGETAB)
        }
    });
    (function() {
        var a = /app_runner/.test(window.name) ? h.PAGETAB : /iframe_canvas/.test(window.name) ? h.CANVAS : h.UNKNOWN;
        (a | h.PAGETAB) === a && (a |= h.CANVAS);
        i.setEnvironment(a)
    })();
    b = i;
    g["default"] = b
}), 98);
__d("UrlMap", ["invariant", "UrlMapConfig", "sdk.Runtime"], (function(a, b, c, d, e, f, g, h) {
    function a(a) {
        var b = "https";
        if (a === "graph_domain") {
            var e = c("sdk.Runtime").getGraphDomain();
            e ? a = "graph_".concat(e) : a = "graph"
        }
        if (a in d("UrlMapConfig")) return b + "://" + d("UrlMapConfig")[a];
        a in d("UrlMapConfig") || h(0, 2511, a);
        return ""
    }
    g.resolve = a
}), 98);
__d("sdk.Scribe", ["QueryString", "UrlMap", "sdk.Runtime"], (function(a, b, c, d, e, f, g) {
    var h = {};

    function a(a, b, e) {
        e === void 0 && (e = !1);
        if (a === "jssdk_error") {
            var f = JSON.stringify(b);
            if (Object.prototype.hasOwnProperty.call(h, f)) return;
            else h[f] = !0
        }
        if (b.extra != null && typeof b.extra === "object") {
            f = b.extra;
            f.revision = c("sdk.Runtime").getRevision()
        }
        f = new Image();
        var g = d("UrlMap").resolve("www") + "/platform/scribe_endpoint.php/";
        e || (f.crossOrigin = "anonymous");
        f.src = c("QueryString").appendToUrl(g, {
            c: a,
            m: JSON.stringify(babelHelpers["extends"]({}, b, {
                isSPIN: c("sdk.Runtime").getIsSPIN()
            }))
        })
    }
    g.log = a
}), 98);
__d("XD", ["Arbiter", "DOM", "DOMDimensions", "Log", "PHPQuerySerializer", "Queue", "URI", "isFacebookURI", "isInIframe", "resolveWindow", "sdk.Scribe"], (function(a, b, c, d, e, f, g) {
    var h, i, j = {
        _callbacks: [],
        _opts: {
            autoResize: !1,
            allowShrink: !0,
            channelUrl: null,
            hideOverflow: !1,
            resizeTimeout: 1e3,
            resizeWidth: !1
        },
        _lastResizeAckId: 0,
        _resizeCount: 0,
        _resizeTimestamp: 0,
        _shrinker: null,
        _forcedMinWidth: 100,
        init: function(a) {
            var b = this;
            this._opts = babelHelpers["extends"]({}, this._opts, a);
            this._opts.autoResize && this._startResizeMonitor();
            c("Arbiter").subscribe("Connect.Unsafe.resize.ack", function(a, c) {
                c.id || (c.id = b._resizeCount), c.id > b._lastResizeAckId && (b._lastResizeAckId = c.id)
            })
        },
        getQueue: function() {
            this._queue || (this._queue = new(c("Queue"))());
            return this._queue
        },
        setChannelUrl: function(a) {
            var b = this;
            this.getQueue().start(function(c) {
                return b.send(c, a)
            })
        },
        send: function(a, b) {
            a === void 0 && (a = null);
            b === void 0 && (b = null);
            b = b || this._opts.channelUrl;
            if (!b) {
                this.getQueue().enqueue(a);
                return
            }
            var e = {};
            b = new(i || (i = c("URI")))(b);
            Object.assign(e, a, (h || (h = d("PHPQuerySerializer"))).deserialize(b.getFragment()));
            b = new i(e.origin);
            if (b.getDomain() === "") {
                d("Log").error("No valid domain for XD message target.");
                return
            }
            var f = b.getOrigin();
            if (typeof e.relation !== "string") {
                d("Log").error("No relation specified to resolve XD target window.");
                return
            }
            var g = c("resolveWindow")(e.relation.replace(/^parent\./, "")),
                j = 1;
            b = function b() {
                try {
                    g.postMessage((h || (h = d("PHPQuerySerializer"))).serialize(e), f)
                } catch (c) {
                    --j ? window.setTimeout(b, 200) : d("sdk.Scribe").log("jssdk_error", {
                        error: "POST_MESSAGE",
                        extra: {
                            message: c.message + ", html/js/modules/XD.js:139",
                            ancestor_origins: JSON.stringify(location.ancestorOrigins),
                            referrer: document.referrer,
                            data: a
                        }
                    })
                }
            };
            b()
        },
        _computeSize: function() {
            var a = d("DOMDimensions").getDocumentDimensions(),
                b = 0;
            if (this._opts.resizeWidth) {
                var e = document.body;
                if (e != null) {
                    if (e.clientWidth < e.scrollWidth) b = a.width;
                    else {
                        e = e.lastElementChild;
                        if (e != null && e instanceof HTMLElement) {
                            e = e;
                            e = e.offsetLeft + e.offsetWidth;
                            e > b && (b = e)
                        }
                    }
                    b = Math.max(b, j._forcedMinWidth)
                } else b = j._forcedMinWidth
            }
            a.width = b;
            this._opts.allowShrink && (this._shrinker || (this._shrinker = c("DOM").create("div")), c("DOM").appendContent(document.body, this._shrinker), a.height = Math.max(this._shrinker.offsetTop, 0));
            return a
        },
        _startResizeMonitor: function() {
            var a, b = this,
                d;
            a = (a = document.documentElement) != null ? a : {};
            if (this._opts.hideOverflow) {
                a.style.overflow = "hidden";
                ((a = document.body) != null ? a : {}).style.overflow = "hidden"
            }
            a = function() {
                var a = b._computeSize(),
                    e = Date.now();
                if (!d || b._opts.allowShrink && d.width != a.width || !b._opts.allowShrink && d.width < a.width || b._opts.allowShrink && d.height != a.height || !b._opts.allowShrink && d.height < a.height) {
                    d = a;
                    b._resizeCount++;
                    b._resizeTimestamp = e;
                    e = {
                        type: "resize",
                        height: a.height,
                        ackData: {
                            id: b._resizeCount
                        },
                        width: 0
                    };
                    a.width && a.width != 0 && (e.width = a.width);
                    try {
                        if (c("isFacebookURI")(new(i || (i = c("URI")))(document.referrer)) && c("isInIframe")() && window.name && window.parent.location && window.parent.location.toString && c("isFacebookURI")(new(i || (i = c("URI")))(window.parent.location))) {
                            a = window.parent.document.getElementsByTagName("iframe");
                            for (var f = 0; f < a.length; f++) a[f].name == window.name && (b._opts.resizeWidth && (a[f].style.width = e.width + "px"), a[f].style.height = e.height + "px")
                        }
                        b.send(e)
                    } catch (a) {
                        b.send(e)
                    }
                }
            };
            a();
            window.setInterval(a, this._opts.resizeTimeout)
        }
    };
    b = babelHelpers["extends"]({}, j);
    a.UnverifiedXD = b;
    a.XD = j;
    g.XD = j;
    g.UnverifiedXD = b
}), 98);
__d("cancelIdleCallbackWWW", ["cr:692209"], (function(a, b, c, d, e, f, g) {
    g["default"] = b("cr:692209")
}), 98);
__d("Plugin", ["Arbiter", "ArbiterFrame"], (function(a, b, c, d, e, f) {
    var g = {
        CONNECT: "platform/plugins/connect",
        DISCONNECT: "platform/plugins/disconnect",
        ERROR: "platform/plugins/error",
        RELOAD: "platform/plugins/reload",
        DIALOG: "platform/plugins/dialog",
        connect: function(a, c) {
            a = {
                identifier: a,
                href: a,
                story_fbid: c
            };
            b("Arbiter").inform(g.CONNECT, a);
            b("ArbiterFrame").inform(g.CONNECT, a)
        },
        disconnect: function(a, c) {
            a = {
                identifier: a,
                href: a,
                story_fbid: c
            };
            b("Arbiter").inform(g.DISCONNECT, a);
            b("ArbiterFrame").inform(g.DISCONNECT, a)
        },
        error: function(a, c) {
            b("Arbiter").inform(g.ERROR, {
                action: a,
                content: c
            })
        },
        reload: function(a) {
            b("Arbiter").inform(g.RELOAD, {
                reloadUrl: a || ""
            }), b("ArbiterFrame").inform(g.RELOAD, {
                reloadUrl: a || ""
            })
        },
        reloadOtherPlugins: function(a, c) {
            b("ArbiterFrame").inform(g.RELOAD, {
                reloadUrl: "",
                reload: a || "",
                identifier: c || ""
            })
        }
    };
    e.exports = g
}), null);
__d("PluginBundleInit", ["DOM"], (function(a, b, c, d, e, f, g) {
    function a() {
        var a = document.getElementById("jsbundle-loader");
        a && c("DOM").remove(a)
    }
    g.init = a
}), 98);
__d("StrSet", [], (function(a, b, c, d, e, f) {
    a = function() {
        function a(a) {
            this.$2 = {}, this.$1 = 0, a && this.addAll(a)
        }
        var b = a.prototype;
        b.add = function(a) {
            Object.prototype.hasOwnProperty.call(this.$2, a) || (this.$2[a] = !0, this.$1++);
            return this
        };
        b.addAll = function(a) {
            a.forEach(this.add, this);
            return this
        };
        b.remove = function(a) {
            Object.prototype.hasOwnProperty.call(this.$2, a) && (delete this.$2[a], this.$1--);
            return this
        };
        b.removeAll = function(a) {
            a.forEach(this.remove, this);
            return this
        };
        b.toArray = function() {
            return Object.keys(this.$2)
        };
        b.toMap = function(a) {
            var b = {};
            Object.keys(this.$2).forEach(function(c) {
                b[c] = typeof a === "function" ? a(c) : a || !0
            });
            return b
        };
        b.contains = function(a) {
            return Object.prototype.hasOwnProperty.call(this.$2, a)
        };
        b.count = function() {
            return this.$1
        };
        b.clear = function() {
            this.$2 = {};
            this.$1 = 0;
            return this
        };
        b.clone = function() {
            return new a(this)
        };
        b.forEach = function(a, b) {
            Object.keys(this.$2).forEach(a, b)
        };
        b.map = function(a, b) {
            return Object.keys(this.$2).map(a, b)
        };
        b.some = function(a, b) {
            return Object.keys(this.$2).some(a, b)
        };
        b.every = function(a, b) {
            return Object.keys(this.$2).every(a, b)
        };
        b.filter = function(b, c) {
            return new a(Object.keys(this.$2).filter(b, c))
        };
        b.union = function(a) {
            return this.clone().addAll(a)
        };
        b.intersect = function(a) {
            return this.filter(function(b) {
                return a.contains(b)
            })
        };
        b.difference = function(a) {
            var b = this;
            return a.filter(function(a) {
                return !b.contains(a)
            })
        };
        b.equals = function(a) {
            var b = function(a, b) {
                    return a === b ? 0 : a < b ? -1 : 1
                },
                c = this.toArray();
            a = a.toArray();
            if (c.length !== a.length) return !1;
            var d = c.length;
            c = c.sort(b);
            a = a.sort(b);
            while (d--)
                if (c[d] !== a[d]) return !1;
            return !0
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("PlatformVersioning", ["invariant", "PlatformVersions", "StrSet", "getObjectValues"], (function(a, b, c, d, e, f, g) {
    var h = new(b("StrSet"))(b("getObjectValues")(b("PlatformVersions").versions)),
        i = location.pathname;
    i = i.substring(1, i.indexOf("/", 1));
    var j = h.contains(i) ? i : b("PlatformVersions").versions.UNVERSIONED;

    function k(a, c) {
        if (c == b("PlatformVersions").versions.UNVERSIONED) return a;
        h.contains(c) || g(0, 3769);
        a = a.indexOf("/") !== 0 ? "/" + a : a;
        return "/" + c + a
    }

    function a() {
        return b("PlatformVersions").LATEST
    }

    function c(a) {
        return a.setPath(k(a.getPath(), j))
    }

    function d(a) {
        return k(a, j)
    }

    function e(a) {
        return h.contains(a.substring(1, a.indexOf("/", 1))) ? a.substring(a.indexOf("/", 1)) : a
    }
    i = {
        addVersionToPath: k,
        getLatestVersion: a,
        versionAwareURI: c,
        versionAwarePath: d,
        getUnversionedPath: e
    };
    a = i;
    f["default"] = a
}), 66);
__d("Banzai", ["cr:7383"], (function(a, b, c, d, e, f, g) {
    g["default"] = b("cr:7383")
}), 98);
__d("UnverifiedXD", ["XD"], (function(a, b, c, d, e, f, g) {
    g["default"] = d("XD").UnverifiedXD
}), 98);
__d("PluginConfirm", ["DOMEvent", "DOMEventListener", "PlatformVersioning", "PluginMessage", "PopupWindow", "URI"], (function(a, b, c, d, e, f) {
    var g;

    function h(a) {
        Object.assign(this, {
            plugin: a,
            confirm_params: {},
            return_params: (g || (g = b("URI"))).getRequestURI().getQueryData()
        }), this.addReturnParams({
            ret: "sentry"
        }), delete this.return_params.hash
    }
    Object.assign(h.prototype, {
        addConfirmParams: function(a) {
            Object.assign(this.confirm_params, a)
        },
        addReturnParams: function(a) {
            Object.assign(this.return_params, a);
            return this
        },
        start: function() {
            var a = b("PlatformVersioning").versionAwareURI(new(g || (g = b("URI")))("/plugins/error/confirm/" + this.plugin)).addQueryData(this.confirm_params).addQueryData({
                secure: g.getRequestURI().isSecure(),
                plugin: this.plugin,
                return_params: JSON.stringify(this.return_params)
            });
            this.popup = b("PopupWindow").open(a.toString(), 320, 486);
            b("PluginMessage").listen();
            return this
        }
    });
    h.starter = function(a, b, c) {
        a = new h(a);
        a.addConfirmParams(b || {});
        a.addReturnParams(c || {});
        return a.start.bind(a)
    };
    h.listen = function(a, c, d, e) {
        b("DOMEventListener").add(a, "click", function(a) {
            new(b("DOMEvent"))(a).kill(), h.starter(c, d, e)()
        })
    };
    e.exports = h
}), null);
__d("PluginDOMEventListener", ["DOMEventListener", "Log", "UserAgent", "promiseDone"], (function(a, b, c, d, e, f, g) {
    var h = !c("UserAgent").isBrowser("Safari < 12") && typeof document.hasStorageAccess === "function",
        i = !h,
        j = !1;
    !i && h && c("promiseDone")(document.hasStorageAccess(), function(a) {
        d("Log").debug("hasStorageAccess=%s", a), i = a
    }, function(a) {
        return d("Log").warn("Storage access check failed: %s", a)
    });

    function a(a, b, e, f) {
        f === void 0 && (f = !1);
        if (!h || i || j) return d("DOMEventListener").add.apply(this, arguments);
        else {
            var g = function() {
                var a = this;
                for (var b = arguments.length, f = new Array(b), g = 0; g < b; g++) f[g] = arguments[g];
                if (i || j) return e.apply(this, f);
                else {
                    var h = document.requestStorageAccess().then(function(b) {
                        d("Log").debug("Storage access request granted.");
                        i = !0;
                        return e.apply(a, f)
                    }, function(b) {
                        d("Log").warn("Storage access request denied.");
                        j = !0;
                        return e.apply(a, f)
                    });
                    c("promiseDone")(h)
                }
            };
            return d("DOMEventListener").add.call(null, a, b, g, f)
        }
    }
    g.add = a;
    g.remove = d("DOMEventListener").remove
}), 98);
__d("PluginITP", ["PluginDOMEventListener", "promiseDone"], (function(a, b, c, d, e, f, g) {
    function a() {
        if (!("hasStorageAccess" in document)) return;
        c("promiseDone")(document.hasStorageAccess(), function(a) {
            document.body && !a && d("PluginDOMEventListener").add(document.body, "click", function() {
                location.reload()
            })
        })
    }
    g.init = a
}), 98);
__d("PluginPageActionLogger", ["BanzaiLogger", "DOMEventListener", "DOMQuery", "ODS"], (function(a, b, c, d, e, f, g) {
    var h;

    function a(a, b, e, f, g, i, j, k, l, m) {
        function n(g, i) {
            g = d("DOMQuery").scry(f, "." + g)[0];
            if (!g) return;
            d("DOMEventListener").add(g, "click", function(f) {
                (h || (h = d("ODS"))).bumpEntityKey(2966, "platform_www", "platform.plugin.page.action"), c("BanzaiLogger").log("PagePluginActionsLoggerConfig", {
                    page_id: b,
                    page_plugin_action: i,
                    page_plugin_action_type: "click",
                    referer_url: e,
                    is_sdk: a
                })
            })
        }
        n(g, "page_like");
        n(i, "page_unlike");
        n(j, "page_avatar");
        n(k, "page_permalink");
        n(l, "page_share");
        n(m, "page_cta")
    }
    g.initializeClickLoggers = a
}), 98);
__d("Locale", ["SiteData"], (function(a, b, c, d, e, f) {
    function a() {
        return b("SiteData").is_rtl
    }
    e.exports = {
        isRTL: a
    }
}), null);
__d("getOffsetParent", ["Style"], (function(a, b, c, d, e, f) {
    function g(a) {
        a = a.parentNode;
        if (!a || a === document.documentElement) return document.documentElement;
        return b("Style").get(a, "position") !== "static" ? a : a === document.body ? document.documentElement : g(a)
    }
    e.exports = g
}), null);
__d("PluginResize", ["Locale", "Log", "UnverifiedXD", "getOffsetParent", "getStyleProperty"], (function(a, b, c, d, e, f) {
    function g(a) {
        a = a || document.body;
        var c = 0,
            d = b("getOffsetParent")(a);
        b("Locale").isRTL() && d ? c = d.offsetWidth - a.offsetLeft - a.offsetWidth : b("Locale").isRTL() || (c = a.offsetLeft);
        return h(a) + c
    }

    function h(a) {
        return Math.ceil(parseFloat(b("getStyleProperty")(a, "width"))) || a.offsetWidth
    }

    function i(a) {
        a = a || document.body;
        return a.offsetHeight + a.offsetTop
    }

    function j(a, b, c) {
        this.calcWidth = a || g, this.calcHeight = b || i, this.width = void 0, this.height = void 0, this.event = c || "resize"
    }
    Object.assign(j.prototype, {
        resize: function() {
            var a = this.calcWidth(),
                c = this.calcHeight();
            (a !== this.width || c !== this.height) && (b("Log").debug("Resizing Plugin: (%s, %s, %s, %s)", a, c, this.event), this.width = a, this.height = c, b("UnverifiedXD").send({
                type: this.event,
                width: a,
                height: c
            }));
            return this
        },
        auto: function(a) {
            setInterval(this.resize.bind(this), a || 250);
            return this
        }
    });
    j.auto = function(a, b, c) {
        return new j(g.bind(null, a), i.bind(null, a), b).resize().auto(c)
    };
    j.autoHeight = function(a, b, c, d) {
        return new j(function() {
            return a
        }, i.bind(null, b), c).resize().auto(d)
    };
    j.getElementWidth = h;
    e.exports = j
}), null);
__d("PlatformWidgetEndpoint", ["PlatformVersioning"], (function(a, b, c, d, e, f) {
    function a(a, c) {
        return b("PlatformVersioning").versionAwarePath("/dialog/" + a + (c ? "/" + c : ""))
    }

    function c(a, c) {
        return b("PlatformVersioning").versionAwarePath("/plugins/" + a + (c ? "/" + c : ""))
    }

    function d(a) {
        return /^\/plugins\//.test(b("PlatformVersioning").getUnversionedPath(a))
    }

    function f(a) {
        return /^\/dialog\//.test(b("PlatformVersioning").getUnversionedPath(a))
    }
    a = {
        dialog: a,
        plugins: c,
        isPluginEndpoint: d,
        isDialogEndpoint: f
    };
    e.exports = a
}), null);
__d("PluginReturn", ["invariant", "Arbiter", "Log", "PlatformDialog", "PlatformWidgetEndpoint", "Plugin", "URI"], (function(a, b, c, d, e, f, g) {
    var h;
    b("Arbiter").subscribe(b("PlatformDialog").RESPONSE, function(a, c) {
        if (c.error_code) {
            b("Log").debug("Plugin Return Error (%s): %s", c.error_code, c.error_message || c.error_description);
            return
        }
        b("Plugin").reload(c.plugin_reload)
    });
    var i = {
        auto: function() {
            b("Arbiter").subscribe(b("Plugin").RELOAD, function(a, b) {
                a = typeof b === "object" ? b.reloadUrl : b;
                i.reload(a)
            })
        },
        syncPlugins: function() {
            b("Arbiter").subscribe(b("Plugin").RELOAD, function(a, b) {
                b.crossFrame && i.reload(b.reloadUrl, b.reload, b.identifier)
            })
        },
        reload: function(a, c, d) {
            d = (h || (h = b("URI"))).getRequestURI().removeQueryData("ret").removeQueryData("act").removeQueryData("hash").addQueryData("reload", c).addQueryData("id", d);
            if (a) {
                var c = new(h || (h = b("URI")))(a);
                b("PlatformWidgetEndpoint").isPluginEndpoint(c.getPath()) || g(0, 1120);
                d.setPath(c.getPath()).addQueryData(c.getQueryData())
            }
            window.location.replace(d.toString())
        }
    };
    e.exports = i
}), null);
__d("SecurePostMessage", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "*";
    a = {
        sendMessageToSpecificOrigin: function(a, b, c, d) {
            c !== h || g(0, 21157), a.postMessage(b, c, d)
        },
        sendMessageForCurrentOrigin: function(a, b) {
            a.postMessage(b)
        },
        sendMessageAllowAnyOrigin_UNSAFE: function(a, b, c) {
            a.postMessage(b, h, c)
        }
    };
    e.exports = a
}), null);
__d("PluginXDReady", ["Arbiter", "Log", "SecurePostMessage", "UnverifiedXD"], (function(a, b, c, d, e, f, g) {
    b = {
        handleMessage: function(a) {
            d("Log").debug("PluginXDReady at " + window.name + " handleMessage " + JSON.stringify(a));
            if (!a.method) return;
            try {
                c("Arbiter").inform("Connect.Unsafe." + a.method, JSON.parse(a.params), "persistent")
            } catch (a) {}
        }
    };
    window.addEventListener("message", function(a) {
        d("Log").debug("PluginXDReady at " + window.name + " received message " + JSON.stringify(a.data.message));
        if (a.data.xdArbiterSyn) d("SecurePostMessage").sendMessageAllowAnyOrigin_UNSAFE(a.source, {
            xdArbiterAck: !0
        });
        else if (a.data.xdArbiterHandleMessage) {
            if (!a.data.message.method) return;
            try {
                c("Arbiter").inform("Connect.Unsafe." + a.data.message.method, JSON.parse(a.data.message.params), "persistent")
            } catch (a) {}
        }
    }, !1);
    a.XdArbiter = b;
    c("UnverifiedXD").send({
        xd_action: "plugin_ready",
        name: window.name
    });
    e = null;
    g["default"] = e
}), 98);
__d("BanzaiAdapter", ["cr:5866"], (function(a, b, c, d, e, f, g) {
    g["default"] = b("cr:5866")
}), 98);
__d("JstlMigrationFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1814852");
    b = d("FalcoLoggerInternal").create("jstl_migration", a);
    e = b;
    g["default"] = e
}), 98);
__d("getDataWithLoggerOptions", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        return babelHelpers["extends"]({}, a, {
            __options: babelHelpers["extends"]({
                event_time: Date.now() / 1e3
            }, b)
        })
    }
    f["default"] = a
}), 66);
__d("GeneratedLoggerUtils", ["invariant", "Banzai", "JstlMigrationFalcoEvent", "getDataWithLoggerOptions"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = window.location.search.indexOf("showlog") > -1;

    function a(a, c, d, e) {
        var f = b("getDataWithLoggerOptions")(c, e);
        c = a.split(":")[0];
        var g = a.split(":")[1];
        c == "logger" ? b("JstlMigrationFalcoEvent").log(function() {
            return {
                logger_config_name: g,
                payload: f
            }
        }) : b("Banzai").post(a, f, d);
        h
    }
    c = {
        log: a,
        serializeVector: function(a) {
            if (!a) return a;
            if (Array.isArray(a)) return a;
            if (a.toArray) {
                var b = a;
                return b.toArray()
            }
            if (typeof a === "object" && a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]) return Array.from(a);
            g(0, 3874, a)
        },
        serializeMap: function(a) {
            if (!a) return a;
            if (a.toJS) {
                var b = a;
                return b.toJS()
            }
            if (typeof a === "object" && a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]) {
                b = a;
                var c = {};
                for (var b = b, d = Array.isArray(b), e = 0, b = d ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var f;
                    if (d) {
                        if (e >= b.length) break;
                        f = b[e++]
                    } else {
                        e = b.next();
                        if (e.done) break;
                        f = e.value
                    }
                    f = f;
                    c[f[0]] = f[1]
                }
                return c
            }
            if (Object.prototype.toString.call(a) === "[object Object]") return a;
            g(0, 3875, a)
        },
        checkExtraDataFieldNames: function(a, b) {
            Object.keys(a).forEach(function(a) {
                Object.prototype.hasOwnProperty.call(b, a) && g(0, 3876, a)
            })
        },
        warnForInvalidFieldNames: function(a, b, c, d) {},
        throwIfNull: function(a, b) {
            a || g(0, 3877, b);
            return a
        }
    };
    e.exports = c
}), null);
__d("TransportSelectingClientSingletonConditional", ["cr:5800"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:5800")
}), 98);
__d("Deferred", ["Promise"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    (g || (g = b("Promise"))).resolve();
    a = function() {
        function a(a) {
            var c = this;
            a = a || g || (g = b("Promise"));
            this.$1 = !1;
            this.$2 = new a(function(a, b) {
                c.$3 = a, c.$4 = b
            })
        }
        var c = a.prototype;
        c.getPromise = function() {
            return this.$2
        };
        c.resolve = function(a) {
            this.$1 = !0, this.$3(a)
        };
        c.reject = function(a) {
            this.$1 = !0, this.$4(a)
        };
        c.isSettled = function() {
            return this.$1
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("RDFDRequireDeferredReference", ["RequireDeferredReference"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(c("RequireDeferredReference"));
    g["default"] = a
}), 98);
__d("requireDeferredForDisplay", ["RDFDRequireDeferredReference"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        return new(c("RDFDRequireDeferredReference"))(a)
    }
    g["default"] = a
}), 98);
__d("BdPdcSignalsFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1743095");
    b = d("FalcoLoggerInternal").create("bd_pdc_signals", a);
    e = b;
    g["default"] = e
}), 98);
__d("BotDetection_SignalFlags", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        ACTIVE: 1,
        DYNAMIC: 2,
        BIOMETRIC: 4,
        DEPRECATED: 8,
        WEB: 16,
        IOS_NATIVE: 32,
        ANDROID_NATIVE: 64,
        EQUAL_BY_VALUE: 128,
        EQUAL_BY_CONTEXT: 256,
        EQUAL_BY_TIMESTAMP: 512,
        SUSPICIOUS_TIER: 1024,
        PARANOID_TIER: 2048,
        RANDOM_SAMPLE_TIER_DEPRECATED: 4096,
        BENIGN_TIER: 262144,
        EMPLOYEES_TIER: 524288,
        BUNDLE: 8192,
        ONSITE: 16384,
        OFFSITE: 32768,
        OFFSITE_SENSITIVE: 65536,
        SENSITIVE: 131072
    });
    f["default"] = a
}), 66);
__d("FalcoAppUniverse", ["$InternalEnum"], (function(a, b, c, d, e, f) {
    a = b("$InternalEnum")({
        FACEBOOK: 1,
        INSTAGRAM: 2
    });
    c = a;
    f["default"] = c
}), 66);
__d("BDOperationTypedLogger", ["Banzai", "GeneratedLoggerUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:BDOperationLoggerConfig", this.$1, b("Banzai").BASIC, a)
        };
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:BDOperationLoggerConfig", this.$1, b("Banzai").VITAL, a)
        };
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:BDOperationLoggerConfig", this.$1, {
                signal: !0
            }, a)
        };
        c.clear = function() {
            this.$1 = {};
            return this
        };
        c.getData = function() {
            return babelHelpers["extends"]({}, this.$1)
        };
        c.updateData = function(a) {
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.setBdSessionID = function(a) {
            this.$1.bd_session_id = a;
            return this
        };
        c.setComponent = function(a) {
            this.$1.component = a;
            return this
        };
        c.setDurationUs = function(a) {
            this.$1.duration_us = a;
            return this
        };
        c.setExceptionMessage = function(a) {
            this.$1.exception_message = a;
            return this
        };
        c.setExceptionStackTrace = function(a) {
            this.$1.exception_stack_trace = a;
            return this
        };
        c.setExceptionType = function(a) {
            this.$1.exception_type = a;
            return this
        };
        c.setIntValue = function(a) {
            this.$1.int_value = a;
            return this
        };
        c.setLevel = function(a) {
            this.$1.level = a;
            return this
        };
        c.setOperation = function(a) {
            this.$1.operation = a;
            return this
        };
        c.setOperationInfo = function(a) {
            this.$1.operation_info = b("GeneratedLoggerUtils").serializeMap(a);
            return this
        };
        c.setSessionlets = function(a) {
            this.$1.sessionlets = b("GeneratedLoggerUtils").serializeVector(a);
            return this
        };
        return a
    }();
    c = {
        bd_session_id: !0,
        component: !0,
        duration_us: !0,
        exception_message: !0,
        exception_stack_trace: !0,
        exception_type: !0,
        int_value: !0,
        level: !0,
        operation: !0,
        operation_info: !0,
        sessionlets: !0
    };
    f["default"] = a
}), 66);
__d("uuidv4", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a() {
        var a;
        a = (a = self) == null ? void 0 : (a = a.crypto) == null ? void 0 : a.randomUUID;
        return typeof a === "function" ? self.crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = Math.random() * 16 | 0;
            a = a === "x" ? b : b & 3 | 8;
            return a.toString(16)
        })
    }
    f["default"] = a
}), 66);
__d("FalcoLoggerTransports", ["AnalyticsCoreData", "Banzai", "ExecutionEnvironment", "FalcoAppUniverse", "FalcoUtils", "ODS", "PersistedQueue", "Queue", "WebSession", "performanceAbsoluteNow", "promiseDone", "requireDeferredForDisplay", "uuidv4"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j, k, l = c("requireDeferredForDisplay")("TransportSelectingClientSingletonConditional").__setRef("FalcoLoggerTransports"),
        m = 5 * 1024,
        n = (b = (i || (i = c("AnalyticsCoreData"))).max_delay_br_queue) != null ? b : 60 * 1e3,
        o = (e = (i || (i = c("AnalyticsCoreData"))).max_delay_br_queue_immediate) != null ? e : 1e3;
    b = (f = (i || (i = c("AnalyticsCoreData"))).max_delay_br_init_not_complete) != null ? f : 1e3;
    var p = "falco:",
        q = new(c("Queue"))(),
        r = 5e3,
        s = 6e4,
        aa = c("uuidv4")(),
        ba = "ods_web_batch",
        t = new Map(),
        u = new Set(),
        v = new Set(),
        w = d("FalcoUtils").getTaggedBitmap(38),
        x = (e = c("FalcoAppUniverse").cast((i || (i = c("AnalyticsCoreData"))).app_universe)) != null ? e : 1,
        y = [],
        z = 0,
        A = null,
        B = !1,
        C = !1,
        D = !1,
        E = !0,
        F = !1,
        G = Date.now() - s,
        H = 1,
        I = b > n ? b : n,
        J = b;
    Y();
    for (e = (f = (i || (i = c("AnalyticsCoreData"))).stateful_events_list_for_br) != null ? f : [], b = Array.isArray(e), f = 0, e = b ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
        var K;
        if (b) {
            if (f >= e.length) break;
            K = e[f++]
        } else {
            f = e.next();
            if (f.done) break;
            K = f.value
        }
        K = K;
        u.add(K)
    }
    for (f = (K = (i || (i = c("AnalyticsCoreData"))).stateless_non_fb_events_for_br) != null ? K : [], b = Array.isArray(f), e = 0, f = b ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
        if (b) {
            if (e >= f.length) break;
            K = f[e++]
        } else {
            e = f.next();
            if (e.done) break;
            K = e.value
        }
        K = K;
        v.add(K)
    }

    function L() {
        return (i || (i = c("AnalyticsCoreData"))).enable_bladerunner && !(k || (k = c("ExecutionEnvironment"))).isInWorker
    }

    function M(a, b) {
        d("FalcoUtils").bumpODSMetrics(b.item.name, "event.info.streaming.batched", 1);
        var c = b.item.extra.length;
        z + c > m && (clearTimeout(A), N());
        y.push([a, b]);
        z += c
    }

    function N() {
        A = null;
        B = !1;
        var a = y;
        S("event.info.streaming.batch_processing", a.map(function(a) {
            return a[1].item
        }));
        !F ? O(a, "event.non_critical_failure.streaming_init_not_complete") : q.enqueue(function(b) {
            return b.log(a.map(function(a) {
                return a[1].item
            }), function(b) {
                if (!b) {
                    O(a, "event.info.banzai_fallback");
                    return
                }
                P(a, b, "event.info.streaming.enqueued")
            })
        });
        y = [];
        z = 0
    }

    function O(a, b) {
        var c = function() {
            var c, f = a[e],
                g = f[0],
                h = f[1];
            f = h.item;
            d("FalcoUtils").bumpODSMetrics(f.name, b, 1);
            if ((c = f.logCritical) != null ? c : !1) U.logCritical([f], function(a) {
                return g.markItem(h, a)
            });
            else {
                ((c = f.logImmediate) != null ? c : !1) ? U.logImmediately([f], function(a) {
                    return g.markItem(h, a)
                }): U.log([f], function(a) {
                    return g.markItem(h, a)
                })
            }
        };
        for (var e = 0; e < a.length; e++) c();
        return
    }

    function P(a, b, c) {
        for (var e = 0; e < a.length; e++) {
            var f = a[e],
                g = f[0];
            f = f[1];
            d("FalcoUtils").bumpODSMetrics(f.item.name, c, 1);
            g.markItem(f, b)
        }
    }

    function ca(a) {
        return {
            events: a.map(function(a) {
                return {
                    name: a.name,
                    extra: a.extra,
                    rate: a.policy.r,
                    time: a.time / 1e3,
                    tag: 0,
                    tags: a.tags,
                    shouldAddState: a.shouldAddState,
                    identity: Q(a.identity),
                    expTags: a.exptTags
                }
            })
        }
    }

    function da(a) {
        var b;
        a = {
            deviceId: (i || (i = c("AnalyticsCoreData"))).device_id,
            familyDeviceId: null,
            osBuildNumber: null,
            sessionId: a,
            appId: i.app_id,
            appVersion: (a = (i || (i = c("AnalyticsCoreData"))).app_version) != null ? a : null,
            bundleId: null,
            consentState: null,
            identity: null,
            pushPhase: i.push_phase
        };
        ((b = (b = (i || (i = c("AnalyticsCoreData"))).stateful_events_list_for_br) == null ? void 0 : b.length) != null ? b : 0) > 0 && (a.ambientState = (i || (i = c("AnalyticsCoreData"))).state_for_br);
        a.identity = Q(i.identity);
        return Object.freeze(a)
    }

    function Q(a) {
        if (x === 2) {
            var b = a == null ? void 0 : a.appScopedIdentity;
            if (b !== void 0) return {
                appScopedIdentity: {
                    uid: b,
                    identifier: b,
                    claims: []
                }
            }
        } else {
            b = a == null ? void 0 : a.fbIdentity;
            if (b !== void 0) return {
                facebookIdentity: {
                    actorId: b.actorId,
                    accountId: b.accountId,
                    claims: []
                }
            }
        }
        return null
    }

    function R(a, b) {
        for (var e = 0; e < a.length; e++) {
            var f, g = a[e];
            f = (f = {}, f.e = g.extra, f.r = g.policy.r, f.d = (i || (i = c("AnalyticsCoreData"))).device_id, f.s = d("WebSession").getId(), f.t = g.time, f);
            g.privacyContext && (f.p = g.privacyContext);
            g.tags != null && (f.b = g.tags);
            var h = g.identity;
            h && (f.id = h);
            c("Banzai").post(p + g.name, f, b)
        }
        S("event.uploaded", a)
    }

    function S(a, b) {
        for (var c = 0; c < b.length; c++) {
            var e = b[c];
            e.name !== ba && d("FalcoUtils").bumpODSMetrics(e.name, a, 1)
        }
    }

    function T(a, b) {
        var e = "falco.fabric.www." + (i || (i = c("AnalyticsCoreData"))).push_phase;
        (h || (h = d("ODS"))).bumpEntityKey(1344, e, a, b)
    }
    var U = {
        log: function(a, b) {
            S("event.info.banzai.log.upload_processing", a), R(a, c("Banzai").BASIC), b(!0)
        },
        logImmediately: function(a, b) {
            S("event.info.banzai.log_immediately.upload_processing", a), R(a, c("Banzai").VITAL), b(!0)
        },
        logCritical: function(a, b) {
            S("event.info.banzai.log_critical.upload_processing", a), R(a, {
                signal: !0,
                retry: !0
            }), b(!0)
        }
    };

    function ea(a) {
        Y();
        var b = V(a, "banzai_data_loss", "log"),
            d = V(a, "banzai_data_loss", "logImmediately"),
            e = V(a, "banzai_data_loss", "logCritical"),
            f = V(a, "bladerunner_data_loss", ""),
            g = V(a, "bladerunner_data_loss", "logCritical");
        T("js.br_data_loss.posted." + a, 1);
        if (F && E) try {
            q.enqueue(function(b) {
                return b.log([f], function(b) {
                    if (!b) {
                        T("js.br.transport_failure." + a, 1);
                        U.logCritical([g], function(b) {
                            T("js.br.failure_fallback_success_callback." + a, 1)
                        });
                        return
                    }
                    T("js.br.success_callback." + a, 1)
                })
            })
        } catch (b) {
            T("js.br.error_enqueueing." + a, 1), U.logCritical([g], function(b) {
                T("js.br.enqueuing_fallback_success_callback." + a, 1)
            })
        } else E || T("js.br.failed." + a, 1), F || T("js.br.init_not_complete." + a, 1), U.logCritical([g], function(b) {
            T("js.br.init_fallback_success_callback." + a, 1)
        });
        R([b], c("Banzai").BASIC);
        R([d], c("Banzai").VITAL);
        R([e], {
            signal: !0,
            retry: !0
        })
    }

    function V(a, b, d) {
        return {
            name: b,
            time: (j || (j = c("performanceAbsoluteNow")))(),
            policy: {
                r: 1
            },
            extra: JSON.stringify({
                event_index: a,
                falco_js_connection_id: aa,
                logging_mode: d,
                logging_flow_flag: "original_flow"
            })
        }
    }

    function W() {
        G + r < Date.now() && (ea(H), G = Date.now(), H++)
    }

    function X() {
        window.setTimeout(function() {
            W(), H <= 40 && X()
        }, s)
    }

    function fa(a) {
        q.start(function(b) {
            return b({
                log: function(d, b) {
                    S("event.info.streaming.queue_processing", d);
                    var e = JSON.stringify(ca(d));
                    a ? (i || (i = c("AnalyticsCoreData"))).enable_ack ? c("promiseDone")(a.amendWithAck(e), function(a) {
                        a ? (S("event.streamed.with_ack", d), S("event.uploaded", d)) : S("event.non_critical_failure.streaming.ack_failed", d), b(a)
                    }, function() {
                        S("event.non_critical_failure.streaming.ack_rejected", d), b(!1)
                    }) : (a.amendWithoutAck(e), S("event.streamed.without_ack", d), S("event.uploaded", d)) : (S("event.non_critical_error.streaming.stream_not_available", d), b(!1))
                },
                logImmediately: function(b, a) {
                    this.log(b, a)
                },
                logCritical: function(b, a) {
                    this.log(b, a)
                }
            })
        })
    }

    function Y() {
        if (C) return;
        F = !1;
        if (!L()) return;
        l.onReady(function(a) {
            if (!a) {
                E = !1;
                q.start(function(a) {
                    return a(U)
                });
                return
            }
            a = a;
            var b = {
                onTermination: function(a) {
                    a.message === "Stream closed" ? (q.stop(!0), C = !1) : (d("FalcoUtils").bumpODSMetrics("", "streaming.non_critical_failure.rejected", 1), E = !1, q.start(function(a) {
                        return a(U)
                    }))
                },
                onFlowStatus: function() {}
            };
            c("promiseDone")(a.requestStream({
                method: "Falco"
            }, JSON.stringify(da(d("WebSession").getId())), b, {
                requestId: ""
            }).then(function(b) {
                a = b, fa(a), F = !0, I = n, J = o
            })["catch"](function(a) {
                d("FalcoUtils").bumpODSMetrics("", "streaming.non_critical_failure.failed", 1), q.stop(!0), C = !1
            }))
        });
        C = !0
    }

    function Z(a) {
        var b, e = a.name;
        if (!L() || !E) return !1;
        if (u.has(e) || a.policy.s !== 1 && ((b = (i || (i = c("AnalyticsCoreData"))).br_stateful_migration_on) != null ? b : !1)) {
            a.shouldAddState = !0;
            a.tags = d("FalcoUtils").xorBitmap((b = a.tags) != null ? b : [0, 0], w);
            return !0
        }
        if (x !== 1 && (i || (i = c("AnalyticsCoreData"))).enable_non_fb_br_stateless_by_default !== !0 && !v.has(e)) return !1;
        if (a.policy.s === 1) {
            a.tags = d("FalcoUtils").xorBitmap((b = a.tags) != null ? b : [0, 0], w);
            return !0
        }
        return !1
    }

    function $(a) {
        if (a === "") return null;
        if (t.has(a)) return t.get(a);
        else {
            var b = {
                    claim: ""
                },
                c = a.split("^#");
            if (c.length >= 4) {
                var d = c[0],
                    e = c[1],
                    f = c[2];
                c = c[3];
                f !== "" ? b = {
                    appScopedIdentity: f,
                    claim: c
                } : d !== "" && (b = {
                    fbIdentity: {
                        accountId: d,
                        actorId: e
                    },
                    claim: c
                });
                t.set(a, b)
            }
            return b
        }
    }

    function a() {
        if (D) return;
        D = !0;
        c("PersistedQueue").setHandler("falco_queue_log", function(b) {
            var c, e = b.getQueueNameSuffix(),
                f = $(e);
            while (c = b.dequeueItem())(function(c) {
                Z(c.item) ? (d("FalcoUtils").bumpODSMetrics(c.item.name, "event.info.upload_method.streaming.log", 1), Y(), A == null && (A = setTimeout(N, I)), f && !a(e) && (c.item.identity = f), M(b, c)) : (f && (c.item.identity = f), U.log([c.item], function(a) {
                    return b.markItem(c, a)
                }))
            })(c)
        });
        c("PersistedQueue").setHandler("falco_queue_immediately", function(b) {
            var e, f = b.getQueueNameSuffix(),
                g = $(f);
            while (e = b.dequeueItem())(function(e) {
                Z(e.item) ? (d("FalcoUtils").bumpODSMetrics(e.item.name, "event.info.upload_method.streaming.log_immediately", 1), Y(), (A == null || !B) && (clearTimeout(A), A = setTimeout(N, J), B = !0), e.item.logImmediate = !0, g && !a(f) && (e.item.identity = g), M(b, e), c("PersistedQueue").isPersistenceAllowed() || (d("FalcoUtils").bumpODSMetrics(e.item.name, "event.info.streaming_no_persistence.log_immediately", 1), N())) : (d("FalcoUtils").bumpODSMetrics(e.item.name, "event.info.upload_method.banzai.log_immediately", 1), g && (e.item.identity = g), U.logImmediately([e.item], function(a) {
                    return b.markItem(e, a)
                }))
            })(e)
        });
        c("PersistedQueue").setHandler("falco_queue_critical", function(b) {
            var c, e = b.getQueueNameSuffix(),
                f = $(e);
            while (c = b.dequeueItem())(function(c) {
                var g = c.item;
                Z(g) ? (d("FalcoUtils").bumpODSMetrics(c.item.name, "event.info.upload_method.streaming.log_critical", 1), Y(), g.logCritical = !0, !F ? (f && (g.identity = f), O([
                    [b, c]
                ], "event.non_critical_failure.streaming_init_not_complete.log_critical")) : (f && !a(e) && (g.identity = f), q.enqueue(function(a) {
                    return a.logCritical([g], function(a) {
                        if (!a) {
                            !g.identity && f && (g.identity = f);
                            O([
                                [b, c]
                            ], "event.info.banzai_fallback.log_critical");
                            return
                        }
                        P([
                            [b, c]
                        ], a, "event.uploaded")
                    })
                }))) : (f && (g.identity = f), d("FalcoUtils").bumpODSMetrics(c.item.name, "event.info.upload_method.banzai.log_critical", 1), U.logCritical([g], function(a) {
                    return b.markItem(c, a)
                }))
            })(c)
        });
        (i || (i = c("AnalyticsCoreData"))).enable_dataloss_timer && (Y(), W(), X());

        function a(a) {
            try {
                var b = d("FalcoUtils").identityToString((i || (i = c("AnalyticsCoreData"))).identity);
                return a === b
            } catch (a) {
                (h || (h = d("ODS"))).bumpEntityKey(1344, "js.br.identity.check", "exception.when.comparing.with.current.user.identity", 1);
                return !0
            }
        }
    }
    g.attach = a
}), 98);
__d("cancelIdleCallbackBlue", ["IdleCallbackImplementation"], (function(a, b, c, d, e, f, g) {
    var h = (c = a.cancelIdleCallback) != null ? c : d("IdleCallbackImplementation").cancelIdleCallback;

    function b(a) {
        h(a)
    }
    g["default"] = b
}), 98);
__d("BDSignalBufferData", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {};
    b = a;
    f["default"] = b
}), 66);
__d("BDSignalWrapper", ["BDSignalBufferData", "SignalCollectorMap"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.signalFlags = a, this.signalType = b
        }
        var b = a.prototype;
        b.getSignalCollector = function() {
            return c("SignalCollectorMap").get(this.signalType)
        };
        b.getBufferConfig = function() {
            return c("BDSignalBufferData")[this.signalType]
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("SignalValueContext", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.cn = a
        }
        var b = a.prototype;
        b.getSignalValueContextName = function() {
            return this.cn
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("BDSignalCollectorBase", ["BDSignalBufferData", "SignalValueContext", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            this.signalType = a
        }
        var d = a.prototype;
        d.executeSignalCollection = function() {
            throw new Error("Child class responsibility to implement executeSignalCollection")
        };
        d.executeAsyncSignalCollection = function() {
            var a;
            return b("regeneratorRuntime").async(function(c) {
                while (1) switch (c.prev = c.next) {
                    case 0:
                        c.next = 2;
                        return b("regeneratorRuntime").awrap(this.executeSignalCollection());
                    case 2:
                        a = c.sent;
                        return c.abrupt("return", a);
                    case 4:
                    case "end":
                        return c.stop()
                }
            }, null, this)
        };
        a.getSanitizedURI = function() {
            var a = window.location.href,
                b = a.indexOf("?");
            return b < 0 ? a : a.substring(0, b)
        };
        d.getContext = function() {
            return new(c("SignalValueContext"))(a.getSanitizedURI())
        };
        d.throwIfNotInitialized = function() {
            if (!(this.signalType in c("BDSignalBufferData"))) throw new Error("Signal is not intialized")
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("BDLoggingConstants", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        ERROR: "error",
        WARNING: "warning",
        INFO: "info"
    };
    b = {
        KEY_NOT_FOUND: "key_not_found",
        APPEND_SIGNAL: "bd_append_signal",
        APPEND_SIGNAL_FAIL: "bd_append_signal_fail",
        HB_COLLECTED: "append_hb",
        HB_COLLECTION_FAILED: "hb_collection_failed",
        BD_EXCEPTION: "bd_exception",
        SIGNAL_NOT_IMPLEMENTED: "signal_not_implemented",
        SIGNAL_VALUE_NULL: "signal_value_null",
        EMPTY_SIGNAL_CONFIG: "empty_signal_config",
        INVALID_BUFFER_SIZE: "invalid_buffer_size",
        INVALID_DURATION: "invalid_duration",
        SIGNAL_FLAGS_MISSING: "signal_flags_missing",
        DYNAMIC_SIGNAL_COLLECTION_STARTED: "dynamic_signal_collection_started",
        BIOMETRIC_SIGNAL_COLLECTION_STARTED: "biometric_signal_collection_started",
        INVALID_GUID: "invalid_guid",
        INVALID_LENGTH: "invalid_length",
        GET_LOCAL_STORAGE_ERROR: "get_local_storage_error",
        WEB_STORAGE: "web_storage",
        PARSE_CONFIG_ERROR: "parse_config_error",
        HB_START_FAILURE: "hb_start_failure",
        HB_ALREADY_RUNNING: "hb_already_running",
        TRY_RESTARTING_HB: "try_restarting_hb",
        BANZAI_LOG_ERROR: "banzai_log_error"
    };
    c = "JS";
    f.LEVELS = a;
    f.OPERATIONS = b;
    f.COMPONENT_NAME = c
}), 66);
__d("BDOperationLogHelper", ["BDLoggingConstants", "BDOperationTypedLogger", "Random"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b, c, e) {
        h(a, d("BDLoggingConstants").LEVELS.INFO, b, c, e)
    }

    function b(a, b, c, e) {
        h(a, d("BDLoggingConstants").LEVELS.WARNING, b, c, e)
    }

    function e(a, b, c, e) {
        h(a, d("BDLoggingConstants").LEVELS.ERROR, b, c, e)
    }

    function h(a, b, e, f, g) {
        f === void 0 && (f = {});
        if (d("Random").coinflip(i(e))) {
            if (f === null) throw new Error("opeartion info null");
            f.source = a;
            new(c("BDOperationTypedLogger"))().setLevel(b).setDurationUs(g).setOperation(e).setComponent(d("BDLoggingConstants").COMPONENT_NAME).setOperationInfo(f).log()
        }
    }

    function i(a) {
        var b = d("BDLoggingConstants").OPERATIONS;
        switch (a) {
            case b.APPEND_SIGNAL:
            case b.HB_COLLECTED:
            case b.GET_LOCAL_STORAGE_ERROR:
            case b.WEB_STORAGE:
            case b.SIGNAL_NOT_IMPLEMENTED:
            case b.BIOMETRIC_SIGNAL_COLLECTION_STARTED:
                return 1e3;
            default:
                return 1
        }
    }
    g.logInfo = a;
    g.logWarning = b;
    g.logError = e;
    g.log = h;
    g.getFlipSamplingByOperation = i
}), 98);
__d("SignalErrorValueTypeDef", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = "ec",
        h = "en",
        i = "es",
        j = 500;
    a = function() {
        function a(a, b, c) {
            this.$1 = a, this.$2 = b, c != null && (this.$3 = c.substr(0, j))
        }
        var b = a.prototype;
        b.getErrorCode = function() {
            return this.$1
        };
        b.getErrorName = function() {
            return this.$2
        };
        b.getErrorDetails = function() {
            return this.$3
        };
        b.isEqual = function(a) {
            return this.$1 === a.getErrorCode() && this.$3 === a.getErrorDetails() && this.$2 === a.getErrorName()
        };
        b.toJSON = function() {
            var a = {};
            a[g] = this.$1;
            switch (this.$1) {
                case 0:
                    a[h] = this.$2;
                    a[i] = this.$3;
                    break
            }
            return a
        };
        return a
    }();
    f.SignalErrorValueTypeDef = a
}), 66);
__d("SignalValueTypeDef", ["BDLoggingConstants", "BDOperationLogHelper", "SignalErrorValueTypeDef"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "SignalValueTypeDef",
        i = "t",
        j = "ctx",
        k = "v",
        l = "e",
        m = {
            NUMBER: "NUMBER",
            STRING: "STRING",
            BOOLEAN: "BOOLEAN",
            CUSTOM_OBJECT: "CUSTOM_OBJECT",
            INT_ARRAY: "INT_ARRAY",
            TOUCH: "TOUCH",
            MAP: "MAP",
            LIST: "LIST",
            SENSOR: "SENSOR",
            ERROR: "ERROR"
        };
    a = function() {
        function a(a, b, c, d, e) {
            this.$1 = a, this.$2 = b, this.$3 = c, this.$4 = d, this.$5 = e != null ? e : 0
        }
        var b = a.prototype;
        b.getTimeStampMS = function() {
            return this.$1
        };
        b.getSignalContext = function() {
            return this.$2
        };
        b.getSignalValue = function() {
            return this.$3
        };
        b.getSignalValueType = function() {
            return this.$4
        };
        b.isEqual = function(a, b) {
            if (a == null) {
                d("BDOperationLogHelper").logWarning(h, d("BDLoggingConstants").OPERATIONS.SIGNAL_VALUE_NULL);
                return !1
            }
            if (this.getSignalValueType() !== a.getSignalValueType()) return !1;
            if (this.getSignalValueType() === m.ERROR && a.getSignalValueType() === m.ERROR) return this.equalValue(a);
            var c = !1;
            b.has(128) && (c = this.equalValue(a));
            b.has(256) && (c = c && this.getSignalContext() != null && a.getSignalContext() != null && this.getSignalContext().getSignalValueContextName() === a.getSignalContext().getSignalValueContextName());
            b.has(512) && (c = c && Math.abs(this.getTimeStampMS() - a.getTimeStampMS()) <= this.$5);
            return c
        };
        b.equalValue = function(a) {
            if (this.isPrimitiveType()) return this.getSignalValue() === a.getSignalValue();
            throw new Error("Must implement in the subclasses")
        };
        b.toJSON = function(a) {
            var b = {};
            a && (b[i] = this.$1 / 1e3, this.$2 != null && (b[j] = this.$2));
            this.$3 == null ? b[l] = new(d("SignalErrorValueTypeDef").SignalErrorValueTypeDef)(2) : this.addValueOrErrorToJSON(b);
            return b
        };
        b.addValueOrErrorToJSON = function(a) {
            if (this.isPrimitiveType()) a[k] = this.$3;
            else throw new Error("Must implement in the subclasses")
        };
        b.isPrimitiveType = function() {
            switch (typeof this.$3) {
                case "number":
                case "boolean":
                case "string":
                    return !0;
                default:
                    return !1
            }
        };
        return a
    }();
    g.BD_VALUE = k;
    g.BD_ERROR = l;
    g.VALUE_TYPES = m;
    g.SignalValueTypeDef = a
}), 98);
__d("ErrorSignalValueType", ["SignalValueTypeDef"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c, e) {
            return a.call(this, b, c, e, d("SignalValueTypeDef").VALUE_TYPES.ERROR) || this
        }
        var c = b.prototype;
        c.equalValue = function(a) {
            return this.getSignalValue().isEqual(a.getSignalValue())
        };
        c.addValueOrErrorToJSON = function(a) {
            a[d("SignalValueTypeDef").BD_ERROR] = this.getSignalValue().toJSON()
        };
        return b
    }(d("SignalValueTypeDef").SignalValueTypeDef);
    g["default"] = a
}), 98);
__d("NumberSignalValueType", ["SignalValueTypeDef"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c, e) {
            return a.call(this, b, c, e, d("SignalValueTypeDef").VALUE_TYPES.NUMBER) || this
        }
        return b
    }(d("SignalValueTypeDef").SignalValueTypeDef);
    g["default"] = a
}), 98);
__d("BDConnectionRTTSignalCollector", ["BDSignalCollectorBase", "ErrorSignalValueType", "NumberSignalValueType", "SignalErrorValueTypeDef"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.call(this, j.signalType) || this
            }
            var e = a.prototype;
            e.executeSignalCollection = function() {
                if (navigator.connection != null && navigator.connection.rtt != null) {
                    var a = navigator.connection.rtt;
                    a = new(c("NumberSignalValueType"))(Date.now(), this.getContext(), a)
                } else a = new(c("ErrorSignalValueType"))(Date.now(), this.getContext(), new(d("SignalErrorValueTypeDef").SignalErrorValueTypeDef)(3, "navigator.connection.rtt not supported"));
                return {
                    valueOrError: a
                }
            };
            return a
        }(c("BDSignalCollectorBase")),
        i = null,
        j = {
            signalType: 30004,
            get: function() {
                i == null && (i = new h());
                return i
            }
        };
    a = j;
    g["default"] = a
}), 98);
__d("CustomObjectSignalValueType", ["SignalValueTypeDef"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c, e) {
            return a.call(this, b, c, e, d("SignalValueTypeDef").VALUE_TYPES.CUSTOM_OBJECT) || this
        }
        var c = b.prototype;
        c.equalValue = function(a) {
            return this.getSignalValue().isEqual(a.getSignalValue())
        };
        c.addValueOrErrorToJSON = function(a) {
            a[d("SignalValueTypeDef").BD_VALUE] = this.getSignalValue().toJSON()
        };
        return b
    }(d("SignalValueTypeDef").SignalValueTypeDef);
    g["default"] = a
}), 98);
__d("HeartbeatObject", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.isAppForeground = !0
        }
        var b = a.prototype;
        b.toJSON = function() {
            return {
                f: this.isAppForeground
            }
        };
        b.isEqual = function(a) {
            return !1
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("BDHeartbeatSignalCollector", ["BDSignalCollectorBase", "CustomObjectSignalValueType", "HeartbeatObject"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.call(this, j.signalType) || this
            }
            var d = a.prototype;
            d.executeSignalCollection = function() {
                var a = new(c("CustomObjectSignalValueType"))(Date.now(), this.getContext(), new(c("HeartbeatObject"))());
                return {
                    valueOrError: a
                }
            };
            return a
        }(c("BDSignalCollectorBase")),
        i = null,
        j = {
            signalType: 38e3,
            get: function() {
                i == null && (i = new h());
                return i
            }
        };
    a = j;
    g["default"] = a
}), 98);
__d("BDBiometricSignalCollectorBase", ["BDSignalCollectorBase", "err"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = "biometric_signal_collected";
    b = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var d = b.prototype;
        d.listenForSignals = function() {
            throw c("err")("Child class responsibility to implement listenForSignals")
        };
        d.executeSignalCollection = function() {
            throw c("err")("executeAsyncSignalCollection and executeSignalCollection should not be called on biometric signals")
        };
        return b
    }(c("BDSignalCollectorBase"));
    g.BIOMETRIC_SIGNAL_COLLECTED_EVENT_NAME = a;
    g.BDBiometricSignalCollectorBase = b
}), 98);
__d("KeyDownUpObject", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.action = null, this.key_code = null, this.action = a, this.key_code = b
        }
        var b = a.prototype;
        b.toJSON = function() {
            return {
                action: this.action,
                key_code: this.key_code
            }
        };
        b.isEqual = function(b) {
            return b instanceof a ? this.action === b.action && this.key_code === b.key_code : !1
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("BDKeyDownUpSignalCollector", ["BDBiometricSignalCollectorBase", "CustomObjectSignalValueType", "KeyDownUpObject", "gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.call(this, j.signalType) || this
            }
            var e = a.prototype;
            e.listenForSignals = function() {
                var a = this;
                c("gkx")("21049") && (document.addEventListener("keydown", function(b) {
                    return a.collectSignals(2)
                }), document.addEventListener("keyup", function(b) {
                    return a.collectSignals(1)
                }))
            };
            e.collectSignals = function(a) {
                a = new(c("CustomObjectSignalValueType"))(Date.now(), this.getContext(), new(c("KeyDownUpObject"))(a, 0));
                a = {
                    signalId: this.signalType,
                    data: {
                        valueOrError: a
                    }
                };
                window.dispatchEvent(new CustomEvent(d("BDBiometricSignalCollectorBase").BIOMETRIC_SIGNAL_COLLECTED_EVENT_NAME, {
                    detail: a
                }))
            };
            return a
        }(d("BDBiometricSignalCollectorBase").BDBiometricSignalCollectorBase),
        i = null,
        j = {
            signalType: 30100,
            get: function() {
                i == null && (i = new h());
                return i
            }
        };
    a = j;
    g["default"] = a
}), 98);
__d("StringArrayObject", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.strings = [], this.strings = a
        }
        var b = a.prototype;
        b.toJSON = function() {
            return this.strings
        };
        b.isEqual = function(b) {
            if (!(b instanceof a)) return !1;
            if (b.strings === this.strings) return !0;
            if (b.strings.length !== this.strings.length) return !1;
            for (var c = 0; c < this.strings.length; c++)
                if (this.strings[c] !== b.strings[c]) return !1;
            return !0
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("BDLanguagesSignalCollector", ["BDSignalCollectorBase", "CustomObjectSignalValueType", "StringArrayObject"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.call(this, j.signalType) || this
            }
            var d = a.prototype;
            d.executeSignalCollection = function() {
                var a = [].concat(navigator.languages);
                a = new(c("CustomObjectSignalValueType"))(Date.now(), this.getContext(), new(c("StringArrayObject"))(a));
                return {
                    valueOrError: a
                }
            };
            return a
        }(c("BDSignalCollectorBase")),
        i = null,
        j = {
            signalType: 30003,
            get: function() {
                i == null && (i = new h());
                return i
            }
        };
    a = j;
    g["default"] = a
}), 98);
__d("BDMimeTypeCountSignalCollector", ["BDSignalCollectorBase", "NumberSignalValueType"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.call(this, j.signalType) || this
            }
            var d = a.prototype;
            d.executeSignalCollection = function() {
                var a = navigator.mimeTypes ? navigator.mimeTypes.length : -1;
                a = new(c("NumberSignalValueType"))(Date.now(), this.getContext(), a);
                return {
                    valueOrError: a
                }
            };
            return a
        }(c("BDSignalCollectorBase")),
        i = null,
        j = {
            signalType: 30002,
            get: function() {
                i == null && (i = new h());
                return i
            }
        };
    a = j;
    g["default"] = a
}), 98);
__d("BooleanSignalValueType", ["SignalValueTypeDef"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c, e) {
            return a.call(this, b, c, e, d("SignalValueTypeDef").VALUE_TYPES.BOOLEAN) || this
        }
        return b
    }(d("SignalValueTypeDef").SignalValueTypeDef);
    g["default"] = a
}), 98);
__d("BDTouchOrMouseSignalCollectorBase", ["BDBiometricSignalCollectorBase", "BDLoggingConstants", "BDOperationLogHelper", "BooleanSignalValueType"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "BDTouchOrMouseSignalCollectorBase";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c, d) {
            var e;
            e = a.call(this, b) || this;
            e.eventsToSubscribe = [];
            e.pauseTimeout = 60 * 60 * 1e3;
            e.eventsToSubscribe = c;
            e.pauseTimeout = d;
            e.handler = function(a) {
                return e.collectSignals(a)
            };
            return e
        }
        var e = b.prototype;
        e.listenForSignals = function() {
            this.collectSignals(), this.addListeners()
        };
        e.addListeners = function() {
            var a = this;
            this.eventsToSubscribe.forEach(function(b) {
                try {
                    document.addEventListener(b, a.handler)
                } catch (a) {
                    d("BDOperationLogHelper").logError(h, d("BDLoggingConstants").OPERATIONS.BD_EXCEPTION, {
                        e: a
                    })
                }
            })
        };
        e.pauseListeners = function() {
            var a = this;
            this.eventsToSubscribe.forEach(function(b) {
                document.removeEventListener(b, a.handler)
            });
            window.setTimeout(function() {
                return a.addListeners()
            }, this.pauseTimeout)
        };
        e.collectSignals = function(a) {
            a = a != null;
            a && this.pauseListeners();
            a = new(c("BooleanSignalValueType"))(Date.now(), this.getContext(), a);
            a = {
                signalId: this.signalType,
                data: {
                    valueOrError: a
                }
            };
            window.dispatchEvent(new CustomEvent(d("BDBiometricSignalCollectorBase").BIOMETRIC_SIGNAL_COLLECTED_EVENT_NAME, {
                detail: a
            }))
        };
        return b
    }(d("BDBiometricSignalCollectorBase").BDBiometricSignalCollectorBase);
    g["default"] = a
}), 98);
__d("BDMousePresenceSignalCollector", ["BDTouchOrMouseSignalCollectorBase"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 60 * 60 * 1e3,
        i = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.call(this, k.signalType, ["mousedown", "mousemove"], h) || this
            }
            return a
        }(c("BDTouchOrMouseSignalCollectorBase")),
        j = null,
        k = {
            signalType: 30106,
            get: function() {
                j == null && (j = new i());
                return j
            }
        };
    a = k;
    g["default"] = a
}), 98);
__d("StringSignalValueType", ["SignalValueTypeDef"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c, e) {
            return a.call(this, b, c, e, d("SignalValueTypeDef").VALUE_TYPES.STRING) || this
        }
        return b
    }(d("SignalValueTypeDef").SignalValueTypeDef);
    g["default"] = a
}), 98);
__d("BDNavigatorAppVersionSignalCollector", ["BDSignalCollectorBase", "StringSignalValueType"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.call(this, j.signalType) || this
            }
            var d = a.prototype;
            d.executeSignalCollection = function() {
                var a = navigator.appVersion;
                a = new(c("StringSignalValueType"))(Date.now(), this.getContext(), a);
                return {
                    valueOrError: a
                }
            };
            return a
        }(c("BDSignalCollectorBase")),
        i = null,
        j = {
            signalType: 30013,
            get: function() {
                i == null && (i = new h());
                return i
            }
        };
    a = j;
    g["default"] = a
}), 98);
__d("BDNavigatorHardwareConcurrencySignalCollector", ["BDSignalCollectorBase", "NumberSignalValueType"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.call(this, j.signalType) || this
            }
            var d = a.prototype;
            d.executeSignalCollection = function() {
                var a;
                a = new(c("NumberSignalValueType"))(Date.now(), this.getContext(), (a = navigator.hardwareConcurrency) != null ? a : 0);
                return {
                    valueOrError: a
                }
            };
            return a
        }(c("BDSignalCollectorBase")),
        i = null,
        j = {
            signalType: 30018,
            get: function() {
                i == null && (i = new h());
                return i
            }
        };
    a = j;
    g["default"] = a
}), 98);
__d("BDNavigatorMaxTouchPointSignalCollector", ["BDSignalCollectorBase", "NumberSignalValueType"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.call(this, j.signalType) || this
            }
            var d = a.prototype;
            d.executeSignalCollection = function() {
                var a = new(c("NumberSignalValueType"))(Date.now(), this.getContext(), navigator.maxTouchPoints);
                return {
                    valueOrError: a
                }
            };
            return a
        }(c("BDSignalCollectorBase")),
        i = null,
        j = {
            signalType: 30093,
            get: function() {
                i == null && (i = new h());
                return i
            }
        };
    a = j;
    g["default"] = a
}), 98);
__d("BDNavigatorNotificationPermissionSignalCollector", ["BDSignalCollectorBase", "ErrorSignalValueType", "SignalErrorValueTypeDef", "StringSignalValueType", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(e) {
            babelHelpers.inheritsLoose(a, e);

            function a() {
                return e.call(this, j.signalType) || this
            }
            var f = a.prototype;
            f.executeAsyncSignalCollection = function() {
                var a, e;
                return b("regeneratorRuntime").async(function(f) {
                    while (1) switch (f.prev = f.next) {
                        case 0:
                            f.prev = 0;
                            if (!navigator.permissions) {
                                f.next = 8;
                                break
                            }
                            f.next = 4;
                            return b("regeneratorRuntime").awrap(navigator.permissions.query({
                                name: "notifications"
                            }));
                        case 4:
                            e = f.sent;
                            a = new(c("StringSignalValueType"))(Date.now(), this.getContext(), e.state);
                            f.next = 9;
                            break;
                        case 8:
                            a = new(c("ErrorSignalValueType"))(Date.now(), this.getContext(), new(d("SignalErrorValueTypeDef").SignalErrorValueTypeDef)(3, "navigator.permissions not supported"));
                        case 9:
                            f.next = 14;
                            break;
                        case 11:
                            f.prev = 11, f.t0 = f["catch"](0), a = new(c("ErrorSignalValueType"))(Date.now(), this.getContext(), new(d("SignalErrorValueTypeDef").SignalErrorValueTypeDef)(3, "notifications cannot be queried from navigator.permissions"));
                        case 14:
                            return f.abrupt("return", {
                                valueOrError: a
                            });
                        case 15:
                        case "end":
                            return f.stop()
                    }
                }, null, this, [
                    [0, 11]
                ])
            };
            return a
        }(c("BDSignalCollectorBase")),
        i = null,
        j = {
            signalType: 30008,
            get: function() {
                i == null && (i = new h());
                return i
            }
        };
    a = j;
    g["default"] = a
}), 98);
__d("BDNavigatorPlatformSignalCollector", ["BDSignalCollectorBase", "StringSignalValueType"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.call(this, j.signalType) || this
            }
            var d = a.prototype;
            d.executeSignalCollection = function() {
                var a = new(c("StringSignalValueType"))(Date.now(), this.getContext(), navigator.platform);
                return {
                    valueOrError: a
                }
            };
            return a
        }(c("BDSignalCollectorBase")),
        i = null,
        j = {
            signalType: 30015,
            get: function() {
                i == null && (i = new h());
                return i
            }
        };
    a = j;
    g["default"] = a
}), 98);
__d("BDNavigatorPluginsFileExtensionsSignalCollector", ["BDSignalCollectorBase", "ErrorSignalValueType", "SignalErrorValueTypeDef", "StringArrayObject"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 10,
        i = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.call(this, k.signalType) || this
            }
            var e = a.prototype;
            e.executeSignalCollection = function() {
                var a = null;
                try {
                    var b = navigator.plugins ? navigator.plugins.length : 0,
                        e = new Set();
                    for (var f = 0; f < b; f++) {
                        var g = navigator.plugins[f].filename;
                        if (!g) continue;
                        var i = g.indexOf(".");
                        if (i == -1 || i == g.length - 1) continue;
                        e.add(g.substr(i + 1));
                        if (e.size >= h) break
                    }
                    e.size && (a = new(c("StringArrayObject"))(Array.from(e)))
                } catch (b) {
                    a = new(c("ErrorSignalValueType"))(Date.now(), this.getContext(), new(d("SignalErrorValueTypeDef").SignalErrorValueTypeDef)(3, "navigator.plugins is not defined"))
                }
                return {
                    valueOrError: a
                }
            };
            return a
        }(c("BDSignalCollectorBase")),
        j = null,
        k = {
            signalType: 30019,
            get: function() {
                j == null && (j = new i());
                return j
            }
        };
    a = k;
    g["default"] = a
}), 98);
__d("BDNavigatorUserAgentSignalCollector", ["BDSignalCollectorBase", "StringSignalValueType"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.call(this, j.signalType) || this
            }
            var d = a.prototype;
            d.executeSignalCollection = function() {
                var a = new(c("StringSignalValueType"))(Date.now(), this.getContext(), navigator.userAgent);
                return {
                    valueOrError: a
                }
            };
            return a
        }(c("BDSignalCollectorBase")),
        i = null,
        j = {
            signalType: 30094,
            get: function() {
                i == null && (i = new h());
                return i
            }
        };
    a = j;
    g["default"] = a
}), 98);
__d("BDNavigatorVendorSignalCollector", ["BDSignalCollectorBase", "StringSignalValueType"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.call(this, j.signalType) || this
            }
            var d = a.prototype;
            d.executeSignalCollection = function() {
                var a = navigator.vendor;
                a = new(c("StringSignalValueType"))(Date.now(), this.getContext(), a);
                return {
                    valueOrError: a
                }
            };
            return a
        }(c("BDSignalCollectorBase")),
        i = null,
        j = {
            signalType: 30012,
            get: function() {
                i == null && (i = new h());
                return i
            }
        };
    a = j;
    g["default"] = a
}), 98);
__d("BDNotificationPermissionSignalCollector", ["BDSignalCollectorBase", "ErrorSignalValueType", "SignalErrorValueTypeDef", "StringSignalValueType"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.call(this, j.signalType) || this
            }
            var e = a.prototype;
            e.executeSignalCollection = function() {
                var a;
                window.Notification ? a = new(c("StringSignalValueType"))(Date.now(), this.getContext(), Notification.permission) : a = new(c("ErrorSignalValueType"))(Date.now(), this.getContext(), new(d("SignalErrorValueTypeDef").SignalErrorValueTypeDef)(3, "Notification not supported"));
                return {
                    valueOrError: a
                }
            };
            return a
        }(c("BDSignalCollectorBase")),
        i = null,
        j = {
            signalType: 30007,
            get: function() {
                i == null && (i = new h());
                return i
            }
        };
    a = j;
    g["default"] = a
}), 98);
__d("BDPluginCountSignalCollector", ["BDSignalCollectorBase", "NumberSignalValueType"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.call(this, j.signalType) || this
            }
            var d = a.prototype;
            d.executeSignalCollection = function() {
                var a = navigator.plugins ? navigator.plugins.length : -1;
                a = new(c("NumberSignalValueType"))(Date.now(), this.getContext(), a);
                return {
                    valueOrError: a
                }
            };
            return a
        }(c("BDSignalCollectorBase")),
        i = null,
        j = {
            signalType: 30001,
            get: function() {
                i == null && (i = new h());
                return i
            }
        };
    a = j;
    g["default"] = a
}), 98);
__d("BDTimezoneOffsetSignalCollector", ["BDSignalCollectorBase", "NumberSignalValueType"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.call(this, j.signalType) || this
            }
            var d = a.prototype;
            d.executeSignalCollection = function() {
                var a;
                a = new(c("NumberSignalValueType"))(Date.now(), this.getContext(), (a = new Date().getTimezoneOffset()) != null ? a : 999);
                return {
                    valueOrError: a
                }
            };
            return a
        }(c("BDSignalCollectorBase")),
        i = null,
        j = {
            signalType: 30040,
            get: function() {
                i == null && (i = new h());
                return i
            }
        };
    a = j;
    g["default"] = a
}), 98);
__d("BDTouchPresenceSignalCollector", ["BDTouchOrMouseSignalCollectorBase"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 60 * 60 * 1e3,
        i = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.call(this, k.signalType, ["touchstart", "touchcancel"], h) || this
            }
            return a
        }(c("BDTouchOrMouseSignalCollectorBase")),
        j = null,
        k = {
            signalType: 30107,
            get: function() {
                j == null && (j = new i());
                return j
            }
        };
    a = k;
    g["default"] = a
}), 98);
__d("BDWebdriverSignalCollector", ["BDSignalCollectorBase", "BooleanSignalValueType"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.call(this, j.signalType) || this
            }
            var d = a.prototype;
            d.executeSignalCollection = function() {
                var a = !!navigator.webdriver;
                a = new(c("BooleanSignalValueType"))(Date.now(), this.getContext(), a);
                return {
                    valueOrError: a
                }
            };
            return a
        }(c("BDSignalCollectorBase")),
        i = null,
        j = {
            signalType: 3e4,
            get: function() {
                i == null && (i = new h());
                return i
            }
        };
    a = j;
    g["default"] = a
}), 98);
__d("BDWebglSupportSignalCollector", ["BDSignalCollectorBase", "BooleanSignalValueType"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.call(this, j.signalType) || this
            }
            var d = a.prototype;
            d.executeSignalCollection = function() {
                var a = document.createElement("canvas"),
                    b = null;
                try {
                    b = a.getContext("webgl") || a.getContext("experimental-webgl")
                } catch (a) {}
                a = Boolean(b);
                b = new(c("BooleanSignalValueType"))(Date.now(), this.getContext(), a);
                return {
                    valueOrError: b
                }
            };
            return a
        }(c("BDSignalCollectorBase")),
        i = null,
        j = {
            signalType: 30022,
            get: function() {
                i == null && (i = new h());
                return i
            }
        };
    a = j;
    g["default"] = a
}), 98);
__d("BDWindowHistoryLengthSignalCollector", ["BDSignalCollectorBase", "NumberSignalValueType"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.call(this, j.signalType) || this
            }
            var d = a.prototype;
            d.executeSignalCollection = function() {
                var a = new(c("NumberSignalValueType"))(Date.now(), this.getContext(), window.history ? window.history.length : 0);
                return {
                    valueOrError: a
                }
            };
            return a
        }(c("BDSignalCollectorBase")),
        i = null,
        j = {
            signalType: 30095,
            get: function() {
                i == null && (i = new h());
                return i
            }
        };
    a = j;
    g["default"] = a
}), 98);
__d("DimensionObject", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.width = null, this.height = null, this.width = a, this.height = b
        }
        var b = a.prototype;
        b.toJSON = function() {
            return {
                w: this.width,
                h: this.height
            }
        };
        b.isEqual = function(b) {
            if (b instanceof a) return this.width === b.width && this.height === b.height;
            else return !1
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("BDWindowOuterDimensionSignalCollector", ["BDSignalCollectorBase", "CustomObjectSignalValueType", "DimensionObject"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.call(this, j.signalType) || this
            }
            var d = a.prototype;
            d.executeSignalCollection = function() {
                var a = window.innerHeight,
                    b = window.innerWidth;
                b = new(c("CustomObjectSignalValueType"))(Date.now(), this.getContext(), new(c("DimensionObject"))(b, a));
                return {
                    valueOrError: b
                }
            };
            return a
        }(c("BDSignalCollectorBase")),
        i = null,
        j = {
            signalType: 30005,
            get: function() {
                i == null && (i = new h());
                return i
            }
        };
    a = j;
    g["default"] = a
}), 98);
__d("SignalCollectorMap", ["BDConnectionRTTSignalCollector", "BDHeartbeatSignalCollector", "BDHeartbeatV2SignalCollector", "BDKeyDownUpSignalCollector", "BDLanguagesSignalCollector", "BDMimeTypeCountSignalCollector", "BDMousePresenceSignalCollector", "BDNavigatorAppVersionSignalCollector", "BDNavigatorHardwareConcurrencySignalCollector", "BDNavigatorMaxTouchPointSignalCollector", "BDNavigatorNotificationPermissionSignalCollector", "BDNavigatorPlatformSignalCollector", "BDNavigatorPluginsFileExtensionsSignalCollector", "BDNavigatorUserAgentSignalCollector", "BDNavigatorVendorSignalCollector", "BDNotificationPermissionSignalCollector", "BDPluginCountSignalCollector", "BDTimezoneOffsetSignalCollector", "BDTouchPresenceSignalCollector", "BDWebdriverSignalCollector", "BDWebglSupportSignalCollector", "BDWindowHistoryLengthSignalCollector", "BDWindowOuterDimensionSignalCollector"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        get: function(a) {
            switch (a) {
                case 3e4:
                    return c("BDWebdriverSignalCollector").get();
                case 30001:
                    return c("BDPluginCountSignalCollector").get();
                case 30002:
                    return c("BDMimeTypeCountSignalCollector").get();
                case 30003:
                    return c("BDLanguagesSignalCollector").get();
                case 30004:
                    return c("BDConnectionRTTSignalCollector").get();
                case 30005:
                    return c("BDWindowOuterDimensionSignalCollector").get();
                case 30007:
                    return c("BDNotificationPermissionSignalCollector").get();
                case 30008:
                    return c("BDNavigatorNotificationPermissionSignalCollector").get();
                case 30012:
                    return c("BDNavigatorVendorSignalCollector").get();
                case 30013:
                    return c("BDNavigatorAppVersionSignalCollector").get();
                case 30015:
                    return c("BDNavigatorPlatformSignalCollector").get();
                case 30018:
                    return c("BDNavigatorHardwareConcurrencySignalCollector").get();
                case 30019:
                    return c("BDNavigatorPluginsFileExtensionsSignalCollector").get();
                case 30022:
                    return c("BDWebglSupportSignalCollector").get();
                case 30040:
                    return c("BDTimezoneOffsetSignalCollector").get();
                case 30093:
                    return c("BDNavigatorMaxTouchPointSignalCollector").get();
                case 30094:
                    return c("BDNavigatorUserAgentSignalCollector").get();
                case 30095:
                    return c("BDWindowHistoryLengthSignalCollector").get();
                case 30100:
                    return c("BDKeyDownUpSignalCollector").get();
                case 30106:
                    return c("BDMousePresenceSignalCollector").get();
                case 30107:
                    return c("BDTouchPresenceSignalCollector").get();
                case 38e3:
                    return c("BDHeartbeatSignalCollector").get();
                case 38001:
                    return c("BDHeartbeatV2SignalCollector").get()
            }
        }
    };
    b = a;
    g["default"] = b
}), 98);
__d("HeartbeatV2Object", ["HeartbeatObject"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            var c;
            c = a.call(this) || this;
            c.id = "";
            c.id = b;
            return c
        }
        var c = b.prototype;
        c.toJSON = function() {
            return {
                f: this.isAppForeground,
                id: this.id
            }
        };
        return b
    }(c("HeartbeatObject"));
    g["default"] = a
}), 98);
__d("BDHeartbeatV2SignalCollector", ["BDClientConfig", "BDSignalCollectorBase", "CustomObjectSignalValueType", "HeartbeatV2Object"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.call(this, j.signalType) || this
            }
            var d = a.prototype;
            d.executeSignalCollection = function() {
                var a = new(c("CustomObjectSignalValueType"))(Date.now(), this.getContext(), new(c("HeartbeatV2Object"))(c("BDClientConfig").get().getHeartbeatVersion()));
                return {
                    valueOrError: a
                }
            };
            return a
        }(c("BDSignalCollectorBase")),
        i = null,
        j = {
            signalType: 38001,
            get: function() {
                i == null && (i = new h());
                return i
            }
        };
    a = j;
    g["default"] = a
}), 98);
__d("BDClientConfig", ["BDLoggingConstants", "BDOperationLogHelper", "BDSignalWrapper"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "BDClientConfig",
        i = function() {
            function a() {
                this.staticSignalBufferSize = 1, this.dynamicSignalBufferSize = 1, this.biometricSignalBufferSize = 1, this.staticSignals = [], this.dynamicSignals = [], this.biometricSignals = [], this.biometricSignalsMap = new Map(), this.heartbeatSignal = new(c("BDSignalWrapper"))([], 38001), this.bufferSizeBySignalIdMap = {}, this.periodicCollectionIntervalMs = Number.MAX_SAFE_INTEGER, this.signalConfigGenerationTimeStampMs = 0, this.suspiciousTiersFlushDurationMs = Number.MAX_SAFE_INTEGER, this.allTiersFlushDurationMs = Number.MAX_SAFE_INTEGER, this.heartbeatIntervalMs = -1, this.parsingDone = !1, this.sid = -1, this.hbVersion = "", this.bufferSizeBySignalIdMap[38001] = 1
            }
            var b = a.prototype;
            b.setStaticSignalBufferSize = function(a) {
                a > 0 ? this.staticSignalBufferSize = a : d("BDOperationLogHelper").logError(h, d("BDLoggingConstants").OPERATIONS.INVALID_BUFFER_SIZE, {
                    size: a.toString(),
                    type: "s"
                });
                return this
            };
            b.getStaticSignalBufferSize = function() {
                return this.staticSignalBufferSize
            };
            b.setDynamicSignalBufferSize = function(a) {
                a > 1 ? this.dynamicSignalBufferSize = a : d("BDOperationLogHelper").logError(h, d("BDLoggingConstants").OPERATIONS.INVALID_BUFFER_SIZE, {
                    size: a.toString(),
                    type: "d"
                });
                return this
            };
            b.getDynamicSignalBufferSize = function() {
                return this.dynamicSignalBufferSize
            };
            b.setBiometricSignalBufferSize = function(a) {
                a > 1 ? this.biometricSignalBufferSize = a : d("BDOperationLogHelper").logError(h, d("BDLoggingConstants").OPERATIONS.INVALID_BUFFER_SIZE, {
                    size: a.toString(),
                    type: "b"
                });
                return this
            };
            b.setSID = function(a) {
                this.sid = a;
                return this
            };
            b.setHeartbeatVersion = function(a) {
                this.hbVersion = a;
                return this
            };
            b.getHeartbeatVersion = function() {
                return this.hbVersion
            };
            b.getBiometricSignalBufferSize = function() {
                return this.biometricSignalBufferSize
            };
            b.setConfigGenerationTimeStamp = function(a) {
                this.signalConfigGenerationTimeStampMs = a;
                return this
            };
            b.getConfigGenerationTimeStamp = function() {
                return this.signalConfigGenerationTimeStampMs
            };
            b.setHeartbeatIntervalMinutes = function(a) {
                this.heartbeatIntervalMs = a * 60 * 1e3;
                return this
            };
            b.getHeartbeatIntervalMs = function() {
                return this.heartbeatIntervalMs
            };
            b.setSuspiciousTiersFlushDurationMinutes = function(a) {
                a > 0 ? this.suspiciousTiersFlushDurationMs = a * 60 * 1e3 : d("BDOperationLogHelper").logError(h, d("BDLoggingConstants").OPERATIONS.INVALID_DURATION, {
                    size: a.toString(),
                    type: "fds"
                });
                return this
            };
            b.getSuspiciousTiersFlushDurationMs = function() {
                return this.suspiciousTiersFlushDurationMs
            };
            b.setAllTiersFlushDurationMinutes = function(a) {
                a > 0 ? this.allTiersFlushDurationMs = a * 60 * 1e3 : d("BDOperationLogHelper").logError(h, d("BDLoggingConstants").OPERATIONS.INVALID_DURATION, {
                    size: a.toString(),
                    type: "fda"
                });
                return this
            };
            b.getAllTiersFlushDurationMs = function() {
                return this.allTiersFlushDurationMs
            };
            b.addMultipleSignalsToClientConfig = function(a) {
                var b = this;
                a.forEach(function(a) {
                    return b.addSignalToClientConfig(a)
                });
                return this
            };
            b.addSignalToClientConfig = function(a) {
                var b = a.getSignalFlags(),
                    d = a.getSignalId();
                if (d === 38e3) return this;
                var e = new(c("BDSignalWrapper"))(b, d);
                if (d === 38001) {
                    this.heartbeatSignal = e;
                    return this
                }!b.includes(2) ? this.staticSignals.push(e) : b.includes(4) ? this.biometricSignals.push(e) : this.dynamicSignals.push(e);
                a.getBufferSize() > 0 && (this.bufferSizeBySignalIdMap[a.getSignalId()] = a.getBufferSize());
                return this
            };
            b.setPeriodicCollectionIntervalSeconds = function(a) {
                a > 0 ? this.periodicCollectionIntervalMs = a * 1e3 : d("BDOperationLogHelper").logError(h, d("BDLoggingConstants").OPERATIONS.INVALID_DURATION, {
                    size: a.toString(),
                    type: "pi"
                });
                return this
            };
            b.getPeriodicCollectionIntervalMs = function() {
                return this.periodicCollectionIntervalMs
            };
            b.getDynamicSignals = function() {
                return this.dynamicSignals
            };
            b.getStaticSignals = function() {
                return this.staticSignals
            };
            b.getBiometricSignals = function() {
                return this.biometricSignals
            };
            b.getBiometricSignalsMap = function() {
                this.biometricSignalsMap.size === 0 && this.biometricSignals.length > 0 && (this.biometricSignalsMap = this.biometricSignals.reduce(function(a, b) {
                    return a.set(b.signalType, b)
                }, new Map()));
                return this.biometricSignalsMap
            };
            b.getHeartbeatSignal = function() {
                return this.heartbeatSignal
            };
            b.getBufferSizeBySignalId = function(a) {
                return this.bufferSizeBySignalIdMap[a]
            };
            b.setParsingDone = function(a) {
                this.parsingDone = a
            };
            b.isParsingDone = function() {
                return this.parsingDone
            };
            return a
        }(),
        j = null;
    a = {
        get: function() {
            j == null && (j = new i());
            return j
        }
    };
    b = a;
    g["default"] = b
}), 98);
__d("BDCollectionTypeEnum", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
        STATIC: 0,
        DYNAMIC: 1,
        BIOMETRIC: 2
    });
    f["default"] = a
}), 66);
__d("BDServerSignalConfig", ["BDLoggingConstants", "BDOperationLogHelper", "BotDetection_SignalFlags"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "BDServerSignalConfig";
    a = function() {
        function a(a, b, c) {
            this.parsedSignalFlags = [], this.signalId = a, this.signalFlags = b, this.bufferSize = c
        }
        var b = a.prototype;
        b.getSignalId = function() {
            return this.signalId
        };
        b.getSignalFlags = function() {
            var a = this;
            if (this.parsedSignalFlags.length === 0) {
                var b = Object.keys(c("BotDetection_SignalFlags"));
                b.forEach(function(b) {
                    (c("BotDetection_SignalFlags")[b] & a.signalFlags) === c("BotDetection_SignalFlags")[b] && a.parsedSignalFlags.push(c("BotDetection_SignalFlags")[b])
                })
            }
            this.parsedSignalFlags.length === 0 && d("BDOperationLogHelper").logError(h, d("BDLoggingConstants").OPERATIONS.SIGNAL_FLAGS_MISSING, {
                id: this.signalId.toString(),
                flags: this.signalFlags.toString()
            });
            return this.parsedSignalFlags
        };
        b.getBufferSize = function() {
            return this.bufferSize != null ? this.bufferSize : 0
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("BDServerConfig", ["BDClientConfig", "BDLoggingConstants", "BDOperationLogHelper", "BDServerSignalConfig"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "BDServerConfig";

    function a(a) {
        var b = [];
        try {
            var e = JSON.parse(a.sc),
                f = new Map(e.c);
            f.forEach(function(a, d) {
                return b.push(new(c("BDServerSignalConfig"))(d, a))
            });
            if (f.size === 0) {
                d("BDOperationLogHelper").logError(h, d("BDLoggingConstants").OPERATIONS.EMPTY_SIGNAL_CONFIG);
                return
            }
            f = c("BDClientConfig").get();
            f.setPeriodicCollectionIntervalSeconds(a.i).addMultipleSignalsToClientConfig(b).setConfigGenerationTimeStamp(e.t).setAllTiersFlushDurationMinutes(a.fda).setSuspiciousTiersFlushDurationMinutes(a.fds).setHeartbeatIntervalMinutes(a.hbi).setStaticSignalBufferSize(a.sbs).setDynamicSignalBufferSize(a.dbs).setBiometricSignalBufferSize(a.bbs).setSID(a.sid).setHeartbeatVersion(a.hbv).setParsingDone(!0)
        } catch (a) {
            d("BDOperationLogHelper").logError(h, d("BDLoggingConstants").OPERATIONS.PARSE_CONFIG_ERROR, {
                e: a
            })
        }
    }
    g.parseConfig = a
}), 98);
__d("BDSignalBuffer", ["BDClientConfig", "BDCollectionTypeEnum", "BDLoggingConstants", "BDOperationLogHelper", "BDSignalBufferData"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "BDSignalBuffer";

    function a(a, b, d) {
        if (a in c("BDSignalBufferData")) return;
        var e = 1;
        b !== void 0 && (e = b);
        c("BDSignalBufferData")[a] = {
            values: [],
            max_buffer_size: e,
            signal_flags: (b = d) != null ? b : []
        }
    }

    function i(a) {
        if (a in c("BDSignalBufferData")) c("BDSignalBufferData")[a].values = [];
        else throw new Error("Tried to clear signal buffer that was not intialized:")
    }

    function b(a, b) {
        if (a in c("BDSignalBufferData")) {
            var e = c("BDSignalBufferData")[a],
                f = e.max_buffer_size;
            e.values.length >= f && e.values.shift();
            e.values.push(b);
            d("BDOperationLogHelper").logInfo(h, d("BDLoggingConstants").OPERATIONS.APPEND_SIGNAL, {
                id: a.toString()
            })
        } else {
            d("BDOperationLogHelper").logError(h, d("BDLoggingConstants").OPERATIONS.APPEND_SIGNAL_FAIL, {
                id: a.toString()
            });
            throw new Error("Tried to append signal that was not intialized:")
        }
    }

    function e() {
        var a = c("BDClientConfig").get();
        a = a.getBiometricSignals();
        a.forEach(function(a) {
            a.signalType in c("BDSignalBufferData") && i(a.signalType)
        })
    }

    function f(a) {
        var b;
        a = c("BDSignalBufferData")[a];
        b = a == null ? void 0 : (b = a.values) == null ? void 0 : b.length;
        return b != null && b > 0 ? a.values[b - 1] : {
            valueOrError: void 0
        }
    }

    function j(a) {
        return c("BDSignalBufferData")[a].values
    }

    function k(a) {
        var b = {};
        for (var d = 0; d < a.length; d++) {
            var e = a[d];
            e in c("BDSignalBufferData") && (b[e] = j(e).map(function(a) {
                return a.valueOrError
            }))
        }
        return b
    }

    function l(a) {
        a = m(a);
        return JSON.stringify(k(a))
    }

    function m(a) {
        var b = c("BDClientConfig").get(),
            d = [];
        a.forEach(function(a) {
            switch (a) {
                case c("BDCollectionTypeEnum").STATIC:
                    d = [].concat(d, b.getStaticSignals());
                    break;
                case c("BDCollectionTypeEnum").DYNAMIC:
                    d = [].concat(d, b.getDynamicSignals());
                    break;
                case c("BDCollectionTypeEnum").BIOMETRIC:
                    d = [].concat(d, b.getBiometricSignals());
                    break
            }
        });
        return d.map(function(a) {
            return a.signalType
        })
    }
    g.initialize = a;
    g.clearBuffer = i;
    g.appendSignal = b;
    g.clearBiometricSignals = e;
    g.getLastSignalFormatBySignalId = f;
    g.retrieveSignal = j;
    g.retrieveSignals = k;
    g.getSignalsAsJSONString = l;
    g._getSignalIdsByCollectionType = m
}), 98);
__d("BDUtils", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = Math.random() * 16 | 0;
            a = a == "x" ? b : b & 3 | 8;
            return a.toString(16)
        })
    }
    f.uuid = a
}), 66);
__d("SignalCollectionManager", ["BDBiometricSignalCollectorBase", "BDClientConfig", "BDLoggingConstants", "BDOperationLogHelper", "BDSignalBuffer", "Promise", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = "SignalCollectionManager",
        j = function() {
            function a() {
                var a = this;
                this.$1 = !1;
                this.$6 = function(b) {
                    if (b instanceof CustomEvent && b.detail != null && b.detail.data != null) {
                        var d = c("BDClientConfig").get().getBiometricSignalsMap().get(b.detail.signalId);
                        d != null && a.$4(b.detail.data, d)
                    }
                }
            }
            var e = a.prototype;
            e.collectSignals = function(a) {
                var c = this,
                    d;
                return b("regeneratorRuntime").async(function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            d = [];
                            a.forEach(function(a) {
                                a.signalFlags.includes(4) ? c.$2(a) : d.push(c.$3(a))
                            });
                            e.next = 4;
                            return b("regeneratorRuntime").awrap((h || (h = b("Promise"))).all(d));
                        case 4:
                        case "end":
                            return e.stop()
                    }
                }, null, this)
            };
            e.isEqualToLastCollectedSignal = function(a, b) {
                var c = d("BDSignalBuffer").getLastSignalFormatBySignalId(b.signalType);
                return c.valueOrError == void 0 ? !1 : a.isEqual(c.valueOrError, new Set(b.signalFlags))
            };
            e.getCircularBufferSize = function(a) {
                var b = c("BDClientConfig").get(),
                    d = b.getBufferSizeBySignalId(a.signalType);
                if (d != null && b.getBufferSizeBySignalId(a.signalType) > 0) return d;
                if (!a.signalFlags.includes(2)) return b.getStaticSignalBufferSize();
                else if (a.signalFlags.includes(4)) return b.getBiometricSignalBufferSize();
                else return b.getDynamicSignalBufferSize()
            };
            e.$3 = function(a) {
                var c, e;
                return b("regeneratorRuntime").async(function(f) {
                    while (1) switch (f.prev = f.next) {
                        case 0:
                            c = a.getSignalCollector();
                            if (!(c != null)) {
                                f.next = 12;
                                break
                            }
                            f.prev = 2;
                            f.next = 5;
                            return b("regeneratorRuntime").awrap(c.executeAsyncSignalCollection());
                        case 5:
                            e = f.sent;
                            this.$4(e, a);
                            f.next = 12;
                            break;
                        case 9:
                            f.prev = 9, f.t0 = f["catch"](2), d("BDOperationLogHelper").logError(i, d("BDLoggingConstants").OPERATIONS.BD_EXCEPTION, {
                                error: f.t0
                            });
                        case 12:
                        case "end":
                            return f.stop()
                    }
                }, null, this, [
                    [2, 9]
                ])
            };
            e.$2 = function(a) {
                this.$5();
                a = a.getSignalCollector();
                a != null && a instanceof d("BDBiometricSignalCollectorBase").BDBiometricSignalCollectorBase && a.listenForSignals()
            };
            e.$5 = function() {
                if (this.$1) return;
                window.addEventListener(d("BDBiometricSignalCollectorBase").BIOMETRIC_SIGNAL_COLLECTED_EVENT_NAME, this.$6);
                this.$1 = !0
            };
            e.$4 = function(a, b) {
                b.getBufferConfig() == null && d("BDSignalBuffer").initialize(b.signalType, this.getCircularBufferSize(b), b.signalFlags), a.valueOrError && !this.isEqualToLastCollectedSignal(a.valueOrError, b) && d("BDSignalBuffer").appendSignal(b.signalType, a)
            };
            return a
        }(),
        k = null;
    a = {
        get: function() {
            k == null && (k = new j());
            return k
        }
    };
    e = a;
    g["default"] = e
}), 98);
__d("BDClientSignalCollectionTrigger", ["BDClientConfig", "BDCollectionTypeEnum", "BDLoggingConstants", "BDOperationLogHelper", "BDServerConfig", "BDSignalBuffer", "BDUtils", "BdPdcSignalsFalcoEvent", "Promise", "SignalCollectionManager", "WebStorage", "javascript-blowfish", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = "BDClientSignalCollectionTrigger",
        k = "signal_flush_timestamp",
        l = !1,
        m = !1,
        n = !1,
        o = !1,
        p = 0,
        q = 0,
        r = 0,
        s = 30,
        t = 5,
        u, v, w = d("BDUtils").uuid(),
        x = c("BDClientConfig").get(),
        y = Object.freeze({
            NONE: 0,
            VITAL: 1,
            CRITICAL: 2
        }),
        z = {
            startSignalCollection: function(a) {
                return b("regeneratorRuntime").async(function(c) {
                    while (1) switch (c.prev = c.next) {
                        case 0:
                            x.setSID(a.sid);
                            if (l) {
                                c.next = 15;
                                break
                            }
                            l = !0;
                            d("BDServerConfig").parseConfig(a);
                            if (x.isParsingDone()) {
                                c.next = 8;
                                break
                            }
                            d("BDOperationLogHelper").logError(j, d("BDLoggingConstants").OPERATIONS.PARSE_CONFIG_ERROR, {
                                config: JSON.stringify(a)
                            });
                            l = !1;
                            return c.abrupt("return");
                        case 8:
                            a != null && (q = a.hbcbc && a.hbcbc > 0 ? a.hbcbc : q, r = a.hbvbc && a.hbvbc > 0 ? a.hbvbc : r, s = a.hbbi && a.hbbi > 0 ? a.hbbi : s);
                            z.startHeartbeatDelayed();
                            v = new(i || (i = b("Promise")))(function(a, b) {
                                try {
                                    x.getDynamicSignals().length > 0 && (z.collectDynamicSignals(), d("BDOperationLogHelper").logInfo(j, d("BDLoggingConstants").OPERATIONS.DYNAMIC_SIGNAL_COLLECTION_STARTED, {
                                        ts: Date.now().toString()
                                    })), x.getBiometricSignals().length > 0 && (z.collectBiometricSignals(), d("BDOperationLogHelper").logInfo(j, d("BDLoggingConstants").OPERATIONS.BIOMETRIC_SIGNAL_COLLECTION_STARTED, {
                                        ts: Date.now().toString()
                                    })), a()
                                } catch (a) {
                                    b(a)
                                }
                            });
                            c.next = 13;
                            return b("regeneratorRuntime").awrap(v);
                        case 13:
                            c.next = 15;
                            return b("regeneratorRuntime").awrap(z.startSignalPosting());
                        case 15:
                            l && !n && !o && t > 0 && (t -= 1, d("BDOperationLogHelper").logWarning(j, d("BDLoggingConstants").OPERATIONS.TRY_RESTARTING_HB), z.startHeartbeatDelayed());
                        case 16:
                        case "end":
                            return c.stop()
                    }
                }, null, this)
            },
            retrieveSignals: function() {
                return b("regeneratorRuntime").async(function(a) {
                    while (1) switch (a.prev = a.next) {
                        case 0:
                            a.next = 2;
                            return b("regeneratorRuntime").awrap(v);
                        case 2:
                            a.next = 4;
                            return b("regeneratorRuntime").awrap(z.postSignals([c("BDCollectionTypeEnum").DYNAMIC, c("BDCollectionTypeEnum").BIOMETRIC, c("BDCollectionTypeEnum").STATIC]));
                        case 4:
                        case "end":
                            return a.stop()
                    }
                }, null, this)
            },
            postSignals: function(a) {
                return b("regeneratorRuntime").async(function(c) {
                    while (1) switch (c.prev = c.next) {
                        case 0:
                            c.next = 2;
                            return b("regeneratorRuntime").awrap(z.collectStaticSignals());
                        case 2:
                            z._postSignalsHelper(d("BDSignalBuffer").getSignalsAsJSONString(a), y.NONE) && z.setTimestampInStorage(Date.now(), k);
                        case 3:
                        case "end":
                            return c.stop()
                    }
                }, null, this)
            },
            _postSignalsHelper: function(a, b) {
                if (a.length <= 2) return !1;
                var e = x.getConfigGenerationTimeStamp(),
                    f = z.encryptDataUsingAsid(w, a);
                a = function() {
                    return {
                        asid: w,
                        ct: e,
                        sjd: f,
                        sid: x.sid
                    }
                };
                var g = !1;
                try {
                    b === y.CRITICAL ? c("BdPdcSignalsFalcoEvent").logCritical(a) : b === y.VITAL ? c("BdPdcSignalsFalcoEvent").logImmediately(a) : c("BdPdcSignalsFalcoEvent").log(a), g = !0
                } catch (a) {
                    d("BDOperationLogHelper").logError(j, d("BDLoggingConstants").OPERATIONS.BANZAI_LOG_ERROR, a), g = !1
                } finally {
                    return g
                }
            },
            getInitialVector: function(a) {
                if (a.length !== 16) {
                    d("BDOperationLogHelper").logError(j, d("BDLoggingConstants").OPERATIONS.INVALID_LENGTH);
                    return ""
                }
                var b = "";
                for (var c = 0; c < 8; c++) b += String.fromCharCode(a.charCodeAt(c) ^ a.charCodeAt(8 + c));
                return b
            },
            encryptDataUsingAsid: function(a, b) {
                if (a.length !== 36) {
                    d("BDOperationLogHelper").logError(j, d("BDLoggingConstants").OPERATIONS.INVALID_GUID);
                    return b
                }
                a = a.slice(19, 23) + a.slice(24, 36);
                var e = z.getInitialVector(a);
                a = new(c("javascript-blowfish"))(a, "cbc");
                return a.base64Encode(a.encrypt(b, e))
            },
            startSignalPosting: function() {
                var a, c;
                return b("regeneratorRuntime").async(function(d) {
                    while (1) switch (d.prev = d.next) {
                        case 0:
                            a = z.getTimestampInStorage(k);
                            c = Date.now() - a;
                            if (!(c >= x.getAllTiersFlushDurationMs())) {
                                d.next = 7;
                                break
                            }
                            d.next = 5;
                            return b("regeneratorRuntime").awrap(z.postSignalsIntermittently());
                        case 5:
                            d.next = 8;
                            break;
                        case 7:
                            window.setTimeout(function() {
                                z.postSignalsIntermittently()
                            }, x.getAllTiersFlushDurationMs() - c);
                        case 8:
                        case "end":
                            return d.stop()
                    }
                }, null, this)
            },
            postSignalsIntermittently: function() {
                z.postSignals([c("BDCollectionTypeEnum").STATIC]), window.setInterval(function() {
                    z.postSignals([c("BDCollectionTypeEnum").STATIC, c("BDCollectionTypeEnum").DYNAMIC, c("BDCollectionTypeEnum").BIOMETRIC])
                }, x.getAllTiersFlushDurationMs())
            },
            setTimestampInStorage: function(a, b) {
                var e = (h || (h = c("WebStorage"))).getLocalStorage();
                if (!e) {
                    d("BDOperationLogHelper").logWarning(j, d("BDLoggingConstants").OPERATIONS.GET_LOCAL_STORAGE_ERROR);
                    return
                }
                e = h.setItemGuarded(e, b, a.toString());
                e != null && d("BDOperationLogHelper").logWarning(j, d("BDLoggingConstants").OPERATIONS.WEB_STORAGE, {
                    error: e.message
                })
            },
            getTimestampInStorage: function(a) {
                var b = (h || (h = c("WebStorage"))).getLocalStorage();
                if (!b) {
                    d("BDOperationLogHelper").logWarning(j, d("BDLoggingConstants").OPERATIONS.GET_LOCAL_STORAGE_ERROR);
                    return 0
                }
                b = b.getItem(a);
                if (b == null) return 0;
                a = Number.parseInt(b, 10);
                return Number.isFinite(a) ? a : 0
            },
            resetHeartbeatStartedForTest: function() {
                n = !1, o = !1
            },
            startHeartbeatDelayed: function() {
                if (n || o) return;
                var a = z.getTimestampInStorage(z.HEARTBEAT_TIMESTAMP_STORAGE_KEY);
                a = Date.now() - a;
                try {
                    a >= x.getHeartbeatIntervalMs() ? z.startHeartbeat() : (window.setTimeout(function() {
                        return z.startHeartbeat()
                    }, x.getHeartbeatIntervalMs() - a), o = !0)
                } catch (b) {
                    d("BDOperationLogHelper").logError(j, d("BDLoggingConstants").OPERATIONS.HB_START_FAILURE, {
                        lastBeatSince: a.toString(),
                        hbi: x.getHeartbeatIntervalMs().toString(),
                        e: b
                    })
                }
            },
            HEARTBEAT_TIMESTAMP_STORAGE_KEY: "hb_timestamp",
            startHeartbeat: function() {
                !n && x.getHeartbeatIntervalMs() > 0 && (z.collectHeartbeatTimes(q, r), p !== 0 && (window.clearInterval(p), d("BDOperationLogHelper").logWarning(j, d("BDLoggingConstants").OPERATIONS.HB_ALREADY_RUNNING)), p = window.setInterval(function() {
                    return z.collectHeartbeatTimes(q, r)
                }, x.getHeartbeatIntervalMs()), n = !0)
            },
            collectHeartbeatTimes: function(a, b) {
                if (a <= 0 && b <= 0) return;
                a > 0 && z.collectHeartbeat(y.CRITICAL);
                b > 0 && z.collectHeartbeat(y.VITAL);
                (a > 1 || b > 1) && window.setTimeout(function() {
                    return z.collectHeartbeatTimes(a - 1, b - 1)
                }, s * 1e3)
            },
            collectHeartbeat: function(a) {
                var b;
                b = x == null ? void 0 : (b = x.getHeartbeatSignal()) == null ? void 0 : (b = b.getSignalCollector()) == null ? void 0 : b.executeSignalCollection();
                if (b == null) {
                    d("BDOperationLogHelper").logError(j, d("BDLoggingConstants").OPERATIONS.HB_COLLECTION_FAILED, {
                        urgency: a.toString()
                    });
                    return
                } else d("BDOperationLogHelper").logInfo(j, d("BDLoggingConstants").OPERATIONS.HB_COLLECTED, {
                    urgency: a.toString()
                });
                z.postHeartbeat(a, b) && z.setTimestampInStorage(Date.now(), z.HEARTBEAT_TIMESTAMP_STORAGE_KEY)
            },
            postHeartbeat: function(a, b) {
                var c = {};
                c[38001] = [b == null ? void 0 : b.valueOrError];
                b = JSON.stringify(c);
                return z._postSignalsHelper(b, a)
            },
            collectStaticSignals: function() {
                return b("regeneratorRuntime").async(function(a) {
                    while (1) switch (a.prev = a.next) {
                        case 0:
                            a.next = 2;
                            return b("regeneratorRuntime").awrap(z.collectSignalsOneTime(x.getStaticSignals()));
                        case 2:
                        case "end":
                            return a.stop()
                    }
                }, null, this)
            },
            collectDynamicSignals: function() {
                z.stopDynamicSignalCollection(), u = window.setInterval(function() {
                    return b("regeneratorRuntime").async(function(a) {
                        while (1) switch (a.prev = a.next) {
                            case 0:
                                a.next = 2;
                                return b("regeneratorRuntime").awrap(z.collectSignalsOneTime(x.getDynamicSignals()));
                            case 2:
                            case "end":
                                return a.stop()
                        }
                    }, null, this)
                }, x.getPeriodicCollectionIntervalMs())
            },
            collectBiometricSignals: function() {
                z.collectSignalsOneTime(x.getBiometricSignals())
            },
            stopDynamicSignalCollection: function() {
                u != null && (window.clearInterval(u), u = null)
            },
            collectSignalsOneTime: function(a) {
                return b("regeneratorRuntime").async(function(d) {
                    while (1) switch (d.prev = d.next) {
                        case 0:
                            d.next = 2;
                            return b("regeneratorRuntime").awrap(c("SignalCollectionManager").get().collectSignals(a));
                        case 2:
                        case "end":
                            return d.stop()
                    }
                }, null, this)
            },
            startLoginTimeSignalCollection: function(a) {
                return b("regeneratorRuntime").async(function(c) {
                    while (1) switch (c.prev = c.next) {
                        case 0:
                            if (m) {
                                c.next = 9;
                                break
                            }
                            m = !0;
                            d("BDServerConfig").parseConfig(a);
                            c.next = 5;
                            return b("regeneratorRuntime").awrap(z.collectSignalsOneTime(x.getDynamicSignals()));
                        case 5:
                            c.next = 7;
                            return b("regeneratorRuntime").awrap(z.collectSignalsOneTime(x.getBiometricSignals()));
                        case 7:
                            c.next = 9;
                            return b("regeneratorRuntime").awrap(z.collectSignalsOneTime(x.getStaticSignals()));
                        case 9:
                        case "end":
                            return c.stop()
                    }
                }, null, this)
            },
            getSignalsAsJSONString: function() {
                return d("BDSignalBuffer").getSignalsAsJSONString([c("BDCollectionTypeEnum").DYNAMIC, c("BDCollectionTypeEnum").STATIC, c("BDCollectionTypeEnum").BIOMETRIC])
            }
        };
    a = z;
    g["default"] = a
}), 98);
__d("BDHeaderConfig", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = "129477";
    f.ASBD_ID = a
}), 66);
__d("getAsyncHeaders", ["BDHeaderConfig", "LSD", "ZeroCategoryHeader", "isFacebookURI"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        var b = {},
            d = c("isFacebookURI")(a);
        d && c("ZeroCategoryHeader").value && (b[c("ZeroCategoryHeader").header] = c("ZeroCategoryHeader").value);
        d = h(a);
        d && (b["X-FB-LSD"] = d);
        d = i(a);
        d && (b["X-ASBD-ID"] = d);
        return b
    }

    function h(a) {
        return j(a) ? null : c("LSD").token
    }

    function i(a) {
        return j(a) ? null : d("BDHeaderConfig").ASBD_ID
    }

    function j(a) {
        return !a.toString().startsWith("/") && a.getOrigin() !== document.location.origin
    }
    g["default"] = a
}), 98);
/**
 * License: https://www.facebook.com/legal/license/WRsJ32R7YJG/
 */
__d("SnappyCompress", [], (function(a, b, c, d, e, f) {
    "use strict";

    function g() {
        return typeof process === "object" && (typeof process.versions === "object" && typeof process.versions.node !== "undefined") ? !0 : !1
    }

    function h(a) {
        return a instanceof Uint8Array && (!g() || !Buffer.isBuffer(a))
    }

    function i(a) {
        return a instanceof ArrayBuffer
    }

    function j(a) {
        return !g() ? !1 : Buffer.isBuffer(a)
    }
    var k = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";

    function a(a) {
        if (!h(a) && !i(a) && !j(a)) throw new TypeError(k);
        var b = !1,
            c = !1;
        h(a) ? b = !0 : i(a) && (c = !0, a = new Uint8Array(a));
        a = new A(a);
        var d = a.readUncompressedLength();
        if (d === -1) throw new Error("Invalid Snappy bitstream");
        if (b) {
            b = new Uint8Array(d);
            if (!a.uncompressToBuffer(b)) throw new Error("Invalid Snappy bitstream")
        } else if (c) {
            b = new ArrayBuffer(d);
            c = new Uint8Array(b);
            if (!a.uncompressToBuffer(c)) throw new Error("Invalid Snappy bitstream")
        } else {
            b = Buffer.alloc(d);
            if (!a.uncompressToBuffer(b)) throw new Error("Invalid Snappy bitstream")
        }
        return b
    }

    function b(a) {
        if (!h(a) && !i(a) && !j(a)) throw new TypeError(k);
        var b = !1,
            c = !1;
        h(a) ? b = !0 : i(a) && (c = !0, a = new Uint8Array(a));
        a = new x(a);
        var d = a.maxCompressedLength(),
            e, f, g;
        b ? (e = new Uint8Array(d), g = a.compressToBuffer(e)) : c ? (e = new ArrayBuffer(d), f = new Uint8Array(e), g = a.compressToBuffer(f)) : (e = Buffer.alloc(d), g = a.compressToBuffer(e));
        if (!e.slice) {
            f = new Uint8Array(Array.prototype.slice.call(e, 0, g));
            if (b) return f;
            else if (c) return f.buffer;
            else throw new Error("not implemented")
        }
        return e.slice(0, g)
    }
    c = 16;
    var l = 1 << c,
        m = 14,
        n = new Array(m + 1);

    function o(a, b) {
        return a * 506832829 >>> b
    }

    function p(a, b) {
        return a[b] + (a[b + 1] << 8) + (a[b + 2] << 16) + (a[b + 3] << 24)
    }

    function q(a, b, c) {
        return a[b] === a[c] && a[b + 1] === a[c + 1] && a[b + 2] === a[c + 2] && a[b + 3] === a[c + 3]
    }

    function r(a, b, c, d, e) {
        var f;
        for (f = 0; f < e; f++) c[d + f] = a[b + f]
    }

    function s(a, b, c, d, e) {
        c <= 60 ? (d[e] = c - 1 << 2, e += 1) : c < 256 ? (d[e] = 60 << 2, d[e + 1] = c - 1, e += 2) : (d[e] = 61 << 2, d[e + 1] = c - 1 & 255, d[e + 2] = c - 1 >>> 8, e += 3);
        r(a, b, d, e, c);
        return e + c
    }

    function t(a, b, c, d) {
        if (d < 12 && c < 2048) {
            a[b] = 1 + (d - 4 << 2) + (c >>> 8 << 5);
            a[b + 1] = c & 255;
            return b + 2
        } else {
            a[b] = 2 + (d - 1 << 2);
            a[b + 1] = c & 255;
            a[b + 2] = c >>> 8;
            return b + 3
        }
    }

    function u(a, b, c, d) {
        while (d >= 68) b = t(a, b, c, 64), d -= 64;
        d > 64 && (b = t(a, b, c, 60), d -= 60);
        return t(a, b, c, d)
    }

    function v(a, b, c, d, e) {
        var f = 1;
        while (1 << f <= c && f <= m) f += 1;
        f -= 1;
        var g = 32 - f;
        typeof n[f] === "undefined" && (n[f] = new Uint16Array(1 << f));
        f = n[f];
        var h;
        for (h = 0; h < f.length; h++) f[h] = 0;
        h = b + c;
        var i = b,
            j = b,
            k, l, r, t, v, w = !0,
            x = 15;
        if (c >= x) {
            c = h - x;
            b += 1;
            x = o(p(a, b), g);
            while (w) {
                t = 32;
                l = b;
                do {
                    b = l;
                    k = x;
                    v = t >>> 5;
                    t += 1;
                    l = b + v;
                    if (b > c) {
                        w = !1;
                        break
                    }
                    x = o(p(a, l), g);
                    r = i + f[k];
                    f[k] = b - i
                } while (!q(a, b, r));
                if (!w) break;
                e = s(a, j, b - j, d, e);
                do {
                    v = b;
                    k = 4;
                    while (b + k < h && a[b + k] === a[r + k]) k += 1;
                    b += k;
                    l = v - r;
                    e = u(d, e, l, k);
                    j = b;
                    if (b >= c) {
                        w = !1;
                        break
                    }
                    t = o(p(a, b - 1), g);
                    f[t] = b - 1 - i;
                    v = o(p(a, b), g);
                    r = i + f[v];
                    f[v] = b - i
                } while (q(a, b, r));
                if (!w) break;
                b += 1;
                x = o(p(a, b), g)
            }
        }
        j < h && (e = s(a, j, h - j, d, e));
        return e
    }

    function w(a, b, c) {
        do b[c] = a & 127, a = a >>> 7, a > 0 && (b[c] += 128), c += 1; while (a > 0);
        return c
    }

    function x(a) {
        this.array = a
    }
    x.prototype.maxCompressedLength = function() {
        var a = this.array.length;
        return 32 + a + Math.floor(a / 6)
    };
    x.prototype.compressToBuffer = function(a) {
        var b = this.array,
            c = b.length,
            d = 0,
            e = 0,
            f;
        e = w(c, a, e);
        while (d < c) f = Math.min(c - d, l), e = v(b, d, f, a, e), d += f;
        return e
    };
    var y = [0, 255, 65535, 16777215, 4294967295];

    function r(a, b, c, d, e) {
        var f;
        for (f = 0; f < e; f++) c[d + f] = a[b + f]
    }

    function z(a, b, c, d) {
        var e;
        for (e = 0; e < d; e++) a[b + e] = a[b - c + e]
    }

    function A(a) {
        this.array = a, this.pos = 0
    }
    A.prototype.readUncompressedLength = function() {
        var a = 0,
            b = 0,
            c, d;
        while (b < 32 && this.pos < this.array.length) {
            c = this.array[this.pos];
            this.pos += 1;
            d = c & 127;
            if (d << b >>> b !== d) return -1;
            a |= d << b;
            if (c < 128) return a;
            b += 7
        }
        return -1
    };
    A.prototype.uncompressToBuffer = function(a) {
        var b = this.array,
            c = b.length,
            d = this.pos,
            e = 0,
            f, g, h, i;
        while (d < b.length) {
            f = b[d];
            d += 1;
            if ((f & 3) === 0) {
                g = (f >>> 2) + 1;
                if (g > 60) {
                    if (d + 3 >= c) return !1;
                    h = g - 60;
                    g = b[d] + (b[d + 1] << 8) + (b[d + 2] << 16) + (b[d + 3] << 24);
                    g = (g & y[h]) + 1;
                    d += h
                }
                if (d + g > c) return !1;
                r(b, d, a, e, g);
                d += g;
                e += g
            } else {
                switch (f & 3) {
                    case 1:
                        g = (f >>> 2 & 7) + 4;
                        i = b[d] + (f >>> 5 << 8);
                        d += 1;
                        break;
                    case 2:
                        if (d + 1 >= c) return !1;
                        g = (f >>> 2) + 1;
                        i = b[d] + (b[d + 1] << 8);
                        d += 2;
                        break;
                    case 3:
                        if (d + 3 >= c) return !1;
                        g = (f >>> 2) + 1;
                        i = b[d] + (b[d + 1] << 8) + (b[d + 2] << 16) + (b[d + 3] << 24);
                        d += 4;
                        break;
                    default:
                        break
                }
                if (i === 0 || i > e) return !1;
                z(a, e, i, g);
                e += g
            }
        }
        return !0
    };
    e.exports.uncompress = a;
    e.exports.compress = b
}), null);
__d("SnappyCompressUtil", ["SnappyCompress"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = a.Uint8Array,
        h = a.btoa,
        i = a.TextEncoder,
        j = {
            compressUint8ArrayToSnappy: function(a) {
                if (a == null || h == null) return null;
                var c = null;
                try {
                    c = b("SnappyCompress").compress(a)
                } catch (a) {
                    return null
                }
                a = "";
                for (var d = 0; d < c.length; d++) a += String.fromCharCode(c[d]);
                return h(a)
            },
            compressStringToSnappy: function(b) {
                if (g == null || h == null) return null;
                var c = new a.Uint8Array(b.length);
                for (var d = 0; d < b.length; d++) {
                    var e = b.charCodeAt(d);
                    if (e > 127) return null;
                    c[d] = e
                }
                return j.compressUint8ArrayToSnappy(c)
            },
            compressStringToSnappyBinary: function(a) {
                if (g == null) return null;
                var c = null;
                if (i != null) c = new i().encode(a);
                else {
                    c = new g(a.length);
                    for (var d = 0; d < a.length; d++) {
                        var e = a.charCodeAt(d);
                        if (e > 127) return null;
                        c[d] = e
                    }
                }
                e = null;
                try {
                    e = b("SnappyCompress").compress(c)
                } catch (a) {
                    return null
                }
                return e
            }
        };
    e.exports = j
}), null);
__d("BanzaiCompressionUtils", ["FBLogger", "Promise", "SnappyCompressUtil", "once", "performanceNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i = b("once")(function() {
            if (a.CompressionStream == null) return !1;
            if (a.Response == null) return !1;
            try {
                new a.CompressionStream("deflate")
            } catch (a) {
                return !1
            }
            return !0
        }),
        j = {
            compressWad: function(a, c) {
                if (a.needs_compression !== !0) {
                    delete a.needs_compression;
                    return
                }
                if (c === "deflate") {
                    j.compressWad(a, "snappy");
                    return
                }
                var d = (g || (g = b("performanceNow")))(),
                    e = JSON.stringify(a.posts),
                    f;
                switch (c) {
                    case "snappy":
                        f = b("SnappyCompressUtil").compressStringToSnappyBinary(e);
                        break;
                    case "snappy_base64":
                        f = b("SnappyCompressUtil").compressStringToSnappy(e);
                        break;
                    default:
                        break
                }
                f != null && f.length < e.length ? (a.posts = f, a.compression = c, a.snappy_ms = Math.ceil((g || (g = b("performanceNow")))() - d), a.snappy_ms < 0 && b("FBLogger")("BanzaiCompressionUtils").warn("Expected positive snappy_ms but got %s", a.snappy_ms)) : a.compression = "";
                delete a.needs_compression
            },
            compressWadAsync: function(c, d) {
                if (d !== "deflate") {
                    j.compressWad(c, "snappy");
                    return (h || (h = b("Promise"))).resolve()
                }
                if (!i()) return j.compressWadAsync(c, "snappy");
                var e = (g || (g = b("performanceNow")))(),
                    f = JSON.stringify(c.posts),
                    k = new Response(f).body;
                if (!k) {
                    c.compression = "";
                    delete c.needs_compression;
                    return (h || (h = b("Promise"))).resolve()
                }
                k = k.pipeThrough(new a.CompressionStream("deflate"));
                return new Response(k).arrayBuffer().then(function(a) {
                    a.byteLength < f.length ? (c.posts = new Uint8Array(a), c.compression = d, c.snappy_ms = Math.ceil((g || (g = b("performanceNow")))() - e), c.snappy_ms < 0 && b("FBLogger")("BanzaiCompressionUtils").warn("Expected positive snappy_ms but got %s", c.snappy_ms)) : c.compression = "", delete c.needs_compression
                })["catch"](function() {
                    c.compression = "", delete c.needs_compression
                })
            },
            outOfBandsPosts: function(a) {
                var b = 0,
                    c = {};
                for (var d = 0; d < a.length; d++) {
                    var e = a[d],
                        f = e.compression === "snappy" || e.compression === "deflate";
                    if (f) {
                        f = new Blob([e.posts], {
                            type: "application/octet-stream"
                        });
                        e.posts = String(b);
                        c["post_" + String(b)] = f;
                        b++
                    }
                }
                return c
            }
        };
    e.exports = j
}), null);
__d("BanzaiBase", ["BanzaiAdapter", "BanzaiCompressionUtils", "BanzaiConsts", "BanzaiLazyQueue", "BanzaiUtils", "CurrentUser", "ErrorGuard", "ExecutionEnvironment", "FBLogger", "NavigationMetrics", "SetIdleTimeoutAcrossTransitions", "Visibility", "WebSession", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    var g, h, i, j, k, l, m = [],
        n = null,
        o = {
            _clearPostBuffer: function() {
                m = []
            },
            _flushLazyQueue: function() {
                b("BanzaiLazyQueue").flushQueue().forEach(function(a) {
                    return o.post.apply(o, a)
                })
            },
            _gatherWadsAndPostsFromBuffer: function(a, c, d, e, f) {
                var g = {
                    currentSize: 0,
                    keepRetryable: d,
                    overlimit: !1,
                    sendMinimumOnePost: f,
                    wadMap: new Map()
                };
                d = e.filter(function(d, e) {
                    return b("BanzaiUtils").filterPost(d, a, c, g)
                });
                g.overlimit && d.length && o._schedule(0);
                return d
            },
            _getEventTime: function() {
                return (g || (g = b("performanceAbsoluteNow")))()
            },
            _getWebSessionId: function() {
                return b("WebSession").getId()
            },
            _getPostBuffer: function() {
                return m
            },
            _getUserId: function() {
                return b("CurrentUser").getPossiblyNonFacebookUserID()
            },
            _getAppId: function() {
                return b("CurrentUser").getAppID()
            },
            _initialize: function() {
                (h || (h = b("ExecutionEnvironment"))).canUseDOM && (o.adapter.useBeacon && b("Visibility").isSupported() ? (b("Visibility").addListener(b("Visibility").HIDDEN, function() {
                    o._getPostBuffer().length > 0 && (o._tryToSendViaBeacon() || o._store())
                }), o.isEnabled("enable_client_logging_clear_on_visible") && b("Visibility").addListener(b("Visibility").VISIBLE, function() {
                    o._tryToSendViaBeacon() || o._restore()
                })) : o.adapter.setHooks(o), o.adapter.setUnloadHook(o), b("NavigationMetrics").addListener(b("NavigationMetrics").Events.NAVIGATION_DONE, function(a, c) {
                    if (c.pageType !== "normal") return;
                    o._restore();
                    b("NavigationMetrics").removeCurrentListener()
                }))
            },
            _sendBeacon: function(b, c) {
                return a.navigator.sendBeacon(b, c)
            },
            _prepForTransit: function(a) {
                var c = new FormData();
                c.append("ts", String(Date.now()));
                var d = b("BanzaiCompressionUtils").outOfBandsPosts(a);
                Object.keys(d).forEach(function(a) {
                    c.append(a, d[a])
                });
                c.append("q", JSON.stringify(a));
                return c
            },
            _prepWadForTransit: function(a) {
                b("BanzaiCompressionUtils").compressWad(a, b("BanzaiAdapter").preferredCompressionMethod())
            },
            _processCallbacksAndSendViaBeacon: function() {
                var a = [],
                    c = [],
                    d = [];
                o._gatherWadsAndPostsFromBuffer(c, d, !0, a, !1);
                if (c.length > 0) {
                    c[0].send_method = "beacon";
                    c.map(o._prepWadForTransit);
                    d = o._prepForTransit(c);
                    a = b("BanzaiAdapter").getEndPointUrl(!0);
                    c = o._sendBeacon(a, d);
                    c || b("FBLogger")("banzai").warn("Error sending beacon")
                }
            },
            _restore: function() {
                var a = b("BanzaiAdapter").getStorage(),
                    c = function(a) {
                        m.push(a)
                    };
                (i || (i = b("ErrorGuard"))).applyWithGuard(a.restore, a, [c]);
                o._schedule(b("BanzaiAdapter").config.RESTORE_WAIT || (j || (j = b("BanzaiConsts"))).VITAL_WAIT)
            },
            _schedule: function(a) {
                var c = o._getEventTime() + a;
                if (!l || c < l) {
                    l = c;
                    b("SetIdleTimeoutAcrossTransitions").clear(k);
                    k = b("SetIdleTimeoutAcrossTransitions").start(b("BanzaiAdapter").wrapInTimeSlice(o._sendWithCallbacks, "Banzai.send"), a);
                    return !0
                }
                return !1
            },
            _sendWithCallbacks: function(a, c) {
                l = null;
                o._schedule(o.BASIC.delay);
                if (!b("BanzaiAdapter").readyToSend()) {
                    c && c();
                    return
                }
                if (o.isEnabled("flush_storage_periodically")) {
                    var d = b("BanzaiAdapter").getStorage(),
                        e = function() {
                            o._restore()
                        };
                    (i || (i = b("ErrorGuard"))).applyWithGuard(d.flush, d, [e])
                }
                b("BanzaiAdapter").inform((j || (j = b("BanzaiConsts"))).SEND);
                d = [];
                var f = [];
                m = o._gatherWadsAndPostsFromBuffer(d, f, !0, m, !0);
                if (d.length <= 0) {
                    b("BanzaiAdapter").inform((j || (j = b("BanzaiConsts"))).OK);
                    a && a();
                    return
                }
                d[0].trigger = n;
                n = null;
                d[0].send_method = "ajax";
                d.map(o._prepWadForTransit);
                b("BanzaiAdapter").send(o._prepForTransit(d), function() {
                    f.forEach(function(a) {
                        a = a;
                        a.__meta.status = (j || (j = b("BanzaiConsts"))).POST_SENT;
                        a.__meta.callback && a.__meta.callback()
                    }), a && a()
                }, function(a) {
                    f.forEach(function(c) {
                        b("BanzaiUtils").retryPost(c, a, m)
                    }), c && c()
                })
            },
            _store: function() {
                var a = b("BanzaiAdapter").getStorage();
                (i || (i = b("ErrorGuard"))).applyWithGuard(a.store, a, [m])
            },
            _testState: function() {
                return {
                    postBuffer: m,
                    triggerRoute: n
                }
            },
            _tryToSendViaBeacon: function() {
                if (!(navigator && navigator.sendBeacon && b("BanzaiAdapter").isOkToSendViaBeacon())) return !1;
                var a = [],
                    c = [];
                m = o._gatherWadsAndPostsFromBuffer(a, c, !1, m, !1);
                if (a.length <= 0) return !1;
                a[0].send_method = "beacon";
                a.map(o._prepWadForTransit);
                a = o._prepForTransit(a);
                var d = b("BanzaiAdapter").getEndPointUrl(!0);
                d = o._sendBeacon(d, a);
                if (!d) {
                    c.forEach(function(a) {
                        m.push(a)
                    });
                    return !1
                }
                return !0
            },
            _unload: function() {
                if (b("BanzaiAdapter").config.disabled) return;
                o._flushLazyQueue();
                navigator && navigator.sendBeacon && b("BanzaiAdapter").isOkToSendViaBeacon() && o._processCallbacksAndSendViaBeacon();
                b("BanzaiAdapter").cleanup();
                b("BanzaiAdapter").inform((j || (j = b("BanzaiConsts"))).SHUTDOWN);
                m.length > 0 && ((!o.adapter.useBeacon || !o._tryToSendViaBeacon()) && o._store())
            },
            BASIC: {
                delay: b("BanzaiAdapter").config.MAX_WAIT || (j || (j = b("BanzaiConsts"))).BASIC_WAIT
            },
            BASIC_WAIT: (j || (j = b("BanzaiConsts"))).BASIC_WAIT,
            ERROR: j.ERROR,
            OK: j.OK,
            SEND: j.SEND,
            SHUTDOWN: j.SHUTDOWN,
            VITAL: {
                delay: b("BanzaiAdapter").config.MIN_WAIT || (j || (j = b("BanzaiConsts"))).VITAL_WAIT
            },
            VITAL_WAIT: j.VITAL_WAIT,
            adapter: b("BanzaiAdapter"),
            canUseNavigatorBeacon: function() {
                return Boolean(navigator && navigator.sendBeacon && b("BanzaiAdapter").isOkToSendViaBeacon())
            },
            flush: function(a, c) {
                b("SetIdleTimeoutAcrossTransitions").clear(k), o._sendWithCallbacks(a, c)
            },
            isEnabled: function(a) {
                return Boolean(b("BanzaiAdapter").config.gks && b("BanzaiAdapter").config.gks[a] && !b("BanzaiAdapter").config.disabled)
            },
            post: function(a, c, d) {
                a || b("FBLogger")("banzai").mustfix("Banzai.post called without specifying a route");
                o._flushLazyQueue();
                var e = a.split(":");
                if ((b("BanzaiAdapter").config.known_routes || []).indexOf(e[0]) === -1) {
                    b("BanzaiAdapter").config.should_log_unknown_routes === !0 && b("FBLogger")("banzai").blameToPreviousFrame().mustfix("Attempted to post to invalid Banzai route '" + a + "'. This call site should be cleaned up.");
                    if (b("BanzaiAdapter").config.should_drop_unknown_routes === !0) return
                }
                var f = "";
                try {
                    var g;
                    f = (g = JSON.stringify(c)) != null ? g : ""
                } catch (c) {
                    b("FBLogger")("banzai").catching(c).addToCategoryKey(a).mustfix("Could not JSON.stringify banzai data for route %s", a);
                    return
                }
                var i = d == null ? void 0 : d.retry;
                if (b("BanzaiAdapter").config.disabled) return;
                if (!(h || (h = b("ExecutionEnvironment"))).canUseDOM && !(h || (h = b("ExecutionEnvironment"))).isInWorker) return;
                var k = o.adapter.getTopLevel();
                if (k) {
                    var l;
                    try {
                        l = k.require("Banzai")
                    } catch (a) {
                        l = null
                    }
                    if (l) {
                        l.post.apply(l, arguments);
                        return
                    }
                }
                var p = b("BanzaiAdapter").config.blacklist;
                if (p && (p.indexOf && (typeof p.indexOf == "function" && p.indexOf(a) != -1))) return;
                var q = f.length,
                    r = b("BanzaiUtils").wrapData(a, c, o._getEventTime(), i, q),
                    s = r;
                (d == null ? void 0 : d.callback) && (s.__meta.callback = d == null ? void 0 : d.callback);
                (d == null ? void 0 : d.compress) != null && (s.__meta.compress = d == null ? void 0 : d.compress);
                var t = d == null ? void 0 : d.delay;
                t == null && (t = (j || (j = b("BanzaiConsts"))).BASIC_WAIT);
                if (d == null ? void 0 : d.signal) {
                    s.__meta.status = (j || (j = b("BanzaiConsts"))).POST_INFLIGHT;
                    var u = [{
                        user: o._getUserId(),
                        webSessionId: o._getWebSessionId(),
                        app_id: o._getAppId(),
                        posts: [r],
                        trigger: a
                    }];
                    b("BanzaiAdapter").send(o._prepForTransit(u), function() {
                        s.__meta.status = (j || (j = b("BanzaiConsts"))).POST_SENT, s.__meta.callback && s.__meta.callback()
                    }, function(a) {
                        b("BanzaiUtils").retryPost(r, a, m)
                    }, !0);
                    if (!i) return
                }
                m.push(r);
                (o._schedule(t) || !n) && (n = a)
            },
            subscribe: b("BanzaiAdapter").subscribe
        };
    o._initialize();
    e.exports = o
}), null);