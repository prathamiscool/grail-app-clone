var e = typeof window < `u` ? window : void 0,
    t = typeof globalThis < `u` ? globalThis : e;
typeof self > `u` && (t.self = t), typeof File > `u` && (t.File = function() {});
var n = t ?.navigator,
    r = t ?.document,
    i = t ?.location,
    a = t ?.fetch,
    o = t != null && t.XMLHttpRequest && `withCredentials` in new t.XMLHttpRequest ? t.XMLHttpRequest : void 0,
    s = t ?.AbortController,
    c = t ?.CompressionStream,
    l = n ?.userAgent,
    u = e ?? {},
    d = `1.369.3`,
    f = {
        DEBUG: !1,
        LIB_VERSION: d,
        LIB_NAME: `web`,
        JS_SDK_VERSION: d
    };

function p(e, t, n, r, i, a, o) {
    try {
        var s = e[a](o),
            c = s.value
    } catch (e) {
        n(e);
        return
    }
    s.done ? t(c) : Promise.resolve(c).then(r, i)
}

function m(e) {
    return function() {
        var t = this,
            n = arguments;
        return new Promise((function(r, i) {
            var a = e.apply(t, n);

            function o(e) {
                p(a, r, i, o, s, `next`, e)
            }

            function s(e) {
                p(a, r, i, o, s, `throw`, e)
            }
            o(void 0)
        }))
    }
}

function h() {
    return h = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; arguments.length > t; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, h.apply(null, arguments)
}

function g(e, t) {
    if (e == null) return {};
    var n = {};
    for (var r in e)
        if ({}.hasOwnProperty.call(e, r)) {
            if (t.indexOf(r) !== -1) continue;
            n[r] = e[r]
        }
    return n
}

function _() {
    return (_ = m((function*(e, t, n) {
        t === void 0 && (t = !0);
        try {
            var r = new Blob([e], {
                type: `text/plain`
            }).stream().pipeThrough(new CompressionStream(`gzip`));
            return yield new Response(r).blob()
        } catch (e) {
            if (n != null && n.rethrow) throw e;
            return null
        }
    }))).apply(this, arguments)
}
var v = [`$snapshot`, `$pageview`, `$pageleave`, `$set`, `survey dismissed`, `survey sent`, `survey shown`, `$identify`, `$groupidentify`, `$create_alias`, `$$client_ingestion_warning`, `$web_experiment_applied`, `$feature_enrollment_update`, `$feature_flag_called`],
    y = `amazonbot,amazonproductbot,app.hypefactors.com,applebot,archive.org_bot,awariobot,backlinksextendedbot,baiduspider,bingbot,bingpreview,chrome-lighthouse,dataforseobot,deepscan,duckduckbot,facebookexternal,facebookcatalog,http://yandex.com/bots,hubspot,ia_archiver,leikibot,linkedinbot,meta-externalagent,mj12bot,msnbot,nessus,petalbot,pinterest,prerender,rogerbot,screaming frog,sebot-wa,sitebulb,slackbot,slurp,trendictionbot,turnitin,twitterbot,vercel-screenshot,vercelbot,yahoo! slurp,yandexbot,zoombot,bot.htm,bot.php,(bot;,bot/,crawler,ahrefsbot,ahrefssiteaudit,semrushbot,siteauditbot,splitsignalbot,gptbot,oai-searchbot,chatgpt-user,perplexitybot,better uptime bot,sentryuptimebot,uptimerobot,headlesschrome,cypress,google-hoteladsverifier,adsbot-google,apis-google,duplexweb-google,feedfetcher-google,google favicon,google web preview,google-read-aloud,googlebot,googleother,google-cloudvertexbot,googleweblight,mediapartners-google,storebot-google,google-inspectiontool,bytespider`.split(`,`),
    b = function(e, t) {
        if (t === void 0 && (t = []), !e) return !1;
        var n = e.toLowerCase();
        return y.concat(t).some((e => {
            var t = e.toLowerCase();
            return n.indexOf(t) !== -1
        }))
    };

function x(e, t) {
    return e.indexOf(t) !== -1
}
var S = function(e) {
        return e.trim()
    },
    C = function(e) {
        return e.replace(/^\$/, ``)
    },
    w = Object.prototype,
    ee = w.hasOwnProperty,
    T = w.toString,
    E = Array.isArray || function(e) {
        return T.call(e) === `[object Array]`
    },
    D = e => typeof e == `function`,
    O = e => e === Object(e) && !E(e),
    k = e => {
        if (O(e)) {
            for (var t in e)
                if (ee.call(e, t)) return !1;
            return !0
        }
        return !1
    },
    A = e => e === void 0,
    j = e => T.call(e) == `[object String]`,
    M = e => j(e) && e.trim().length === 0,
    N = e => e === null,
    P = e => A(e) || N(e),
    F = e => T.call(e) == `[object Number]` && e == e,
    I = e => F(e) && e > 0,
    L = e => T.call(e) === `[object Boolean]`,
    te = e => e instanceof FormData,
    ne = e => x(v, e);

function R(e) {
    return typeof e != `object` || !e
}

function re(e, t) {
    return {}.toString.call(e) === `[object ` + t + `]`
}

function ie(e) {
    return typeof Event < `u` && function(e, t) {
        try {
            return e instanceof t
        } catch {
            return !1
        }
    }(e, Event)
}
var ae = [!0, `true`, 1, `1`, `yes`],
    oe = e => x(ae, e),
    se = [!1, `false`, 0, `0`, `no`];

function z(e, t, n, r, i) {
    return t > n && (r.warn(`min cannot be greater than max.`), t = n), F(e) ? e > n ? (r.warn(` cannot be  greater than max: ` + n + `. Using max value instead.`), n) : t > e ? (r.warn(` cannot be less than min: ` + t + `. Using min value instead.`), t) : e : (r.warn(` must be a number. using max or fallback. max: ` + n + `, fallback: ` + i), z(i || n, t, n, r))
}
var ce = class {
        constructor(e) {
            this.Pt = {}, this.Dt = e.Dt, this.jt = z(e.bucketSize, 0, 100, e.qt), this.$t = z(e.refillRate, 0, this.jt, e.qt), this.Vt = z(e.refillInterval, 0, 864e5, e.qt)
        }
        Ht(e, t) {
            var n = Math.floor((t - e.lastAccess) / this.Vt);
            n > 0 && (e.tokens = Math.min(e.tokens + n * this.$t, this.jt), e.lastAccess += n * this.Vt)
        }
        consumeRateLimit(e) {
            var t, n = Date.now(),
                r = String(e),
                i = this.Pt[r];
            return i ? this.Ht(i, n) : this.Pt[r] = i = {
                tokens: this.jt,
                lastAccess: n
            }, i.tokens === 0 || (i.tokens--, i.tokens === 0 && ((t = this.Dt) == null || t.call(this, e)), i.tokens === 0)
        }
        stop() {
            this.Pt = {}
        }
    },
    le, ue, de, B = `Mobile`,
    fe = `iOS`,
    pe = `Android`,
    me = `Tablet`,
    he = pe + ` ` + me,
    ge = `iPad`,
    _e = `Apple`,
    ve = _e + ` Watch`,
    ye = `Safari`,
    be = `BlackBerry`,
    xe = `Samsung`,
    Se = xe + `Browser`,
    Ce = xe + ` Internet`,
    we = `Chrome`,
    Te = we + ` OS`,
    Ee = we + ` ` + fe,
    De = `Internet Explorer`,
    Oe = De + ` ` + B,
    ke = `Opera`,
    Ae = ke + ` Mini`,
    je = `Edge`,
    Me = `Microsoft ` + je,
    Ne = `Firefox`,
    Pe = Ne + ` ` + fe,
    Fe = `Nintendo`,
    Ie = `PlayStation`,
    Le = `Xbox`,
    Re = pe + ` ` + B,
    ze = B + ` ` + ye,
    Be = `Windows`,
    Ve = Be + ` Phone`,
    He = `Nokia`,
    Ue = `Ouya`,
    We = `Generic`,
    Ge = We + ` ` + B.toLowerCase(),
    Ke = We + ` ` + me.toLowerCase(),
    qe = `Konqueror`,
    V = `(\\d+(\\.\\d+)?)`,
    Je = RegExp(`Version/` + V),
    Ye = new RegExp(Le, `i`),
    Xe = RegExp(Ie + ` \\w+`, `i`),
    Ze = RegExp(Fe + ` \\w+`, `i`),
    Qe = RegExp(be + `|PlayBook|BB10`, `i`),
    $e = {
        "NT3.51": `NT 3.11`,
        "NT4.0": `NT 4.0`,
        "5.0": `2000`,
        5.1: `XP`,
        5.2: `XP`,
        "6.0": `Vista`,
        6.1: `7`,
        6.2: `8`,
        6.3: `8.1`,
        6.4: `10`,
        "10.0": `10`
    },
    et = function(e, t) {
        return t ||= ``, x(e, ` OPR/`) && x(e, `Mini`) ? Ae : x(e, ` OPR/`) ? ke : Qe.test(e) ? be : x(e, `IE` + B) || x(e, `WPDesktop`) ? Oe : x(e, Se) ? Ce : x(e, je) || x(e, `Edg/`) ? Me : x(e, `FBIOS`) ? `Facebook ` + B : x(e, `UCWEB`) || x(e, `UCBrowser`) ? `UC Browser` : x(e, `CriOS`) ? Ee : x(e, `CrMo`) || x(e, we) ? we : x(e, pe) && x(e, ye) ? Re : x(e, `FxiOS`) ? Pe : x(e.toLowerCase(), qe.toLowerCase()) ? qe : ((e, t) => t && x(t, _e) || function(e) {
            return x(e, ye) && !x(e, we) && !x(e, pe)
        }(e))(e, t) ? x(e, B) ? ze : ye : x(e, Ne) ? Ne : x(e, `MSIE`) || x(e, `Trident/`) ? De : x(e, `Gecko`) ? Ne : ``
    },
    tt = {
        [Oe]: [RegExp(`rv:` + V)],
        [Me]: [RegExp(je + `?\\/` + V)],
        [we]: [RegExp(`(` + we + `|CrMo)\\/` + V)],
        [Ee]: [RegExp(`CriOS\\/` + V)],
        "UC Browser": [RegExp(`(UCBrowser|UCWEB)\\/` + V)],
        [ye]: [Je],
        [ze]: [Je],
        [ke]: [RegExp(`(Opera|OPR)\\/` + V)],
        [Ne]: [RegExp(Ne + `\\/` + V)],
        [Pe]: [RegExp(`FxiOS\\/` + V)],
        [qe]: [RegExp(`Konqueror[:/]?` + V, `i`)],
        [be]: [RegExp(be + ` ` + V), Je],
        [Re]: [RegExp(`android\\s` + V, `i`)],
        [Ce]: [RegExp(Se + `\\/` + V)],
        [De]: [RegExp(`(rv:|MSIE )` + V)],
        Mozilla: [RegExp(`rv:` + V)]
    },
    nt = function(e, t) {
        var n = tt[et(e, t)];
        if (A(n)) return null;
        for (var r = 0; n.length > r; r++) {
            var i = e.match(n[r]);
            if (i) return parseFloat(i[i.length - 2])
        }
        return null
    },
    rt = [
        [RegExp(Le + `; ` + Le + ` (.*?)[);]`, `i`), e => [Le, e && e[1] || ``]],
        [new RegExp(Fe, `i`), [Fe, ``]],
        [new RegExp(Ie, `i`), [Ie, ``]],
        [Qe, [be, ``]],
        [new RegExp(Be, `i`), (e, t) => {
            if (/Phone/.test(t) || /WPDesktop/.test(t)) return [Ve, ``];
            if (new RegExp(B).test(t) && !/IEMobile\b/.test(t)) return [Be + ` ` + B, ``];
            var n = /Windows NT ([0-9.]+)/i.exec(t);
            if (n && n[1]) {
                var r = $e[n[1]] || ``;
                return /arm/i.test(t) && (r = `RT`), [Be, r]
            }
            return [Be, ``]
        }],
        [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, e => e && e[3] ? [fe, [e[3], e[4], e[5] || `0`].join(`.`)] : [fe, ``]],
        [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, e => {
            var t = ``;
            return e && e.length >= 3 && (t = A(e[2]) ? e[3] : e[2]), [`watchOS`, t]
        }],
        [RegExp(`(` + pe + ` (\\d+)\\.(\\d+)\\.?(\\d+)?|` + pe + `)`, `i`), e => e && e[2] ? [pe, [e[2], e[3], e[4] || `0`].join(`.`)] : [pe, ``]],
        [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, e => {
            var t = [`Mac OS X`, ``];
            return e && e[1] && (t[1] = [e[1], e[2], e[3] || `0`].join(`.`)), t
        }],
        [/Mac/i, [`Mac OS X`, ``]],
        [/CrOS/, [Te, ``]],
        [/Linux|debian/i, [`Linux`, ``]]
    ],
    it = function(e) {
        return Ze.test(e) ? Fe : Xe.test(e) ? Ie : Ye.test(e) ? Le : new RegExp(Ue, `i`).test(e) ? Ue : RegExp(`(` + Ve + `|WPDesktop)`, `i`).test(e) ? Ve : /iPad/.test(e) ? ge : /iPod/.test(e) ? `iPod Touch` : /iPhone/.test(e) ? `iPhone` : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e) ? ve : Qe.test(e) ? be : /(kobo)\s(ereader|touch)/i.test(e) ? `Kobo` : new RegExp(He, `i`).test(e) ? He : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e) || /(kf[a-z]+)( bui|\)).+silk\//i.test(e) ? `Kindle Fire` : /(Android|ZTE)/i.test(e) ? new RegExp(B).test(e) && !/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e) || /pixel[\daxl ]{1,6}/i.test(e) && !/pixel c/i.test(e) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e) || /lmy47v/i.test(e) && !/QTAQZ3/i.test(e) ? pe : he : RegExp(`(pda|` + B + `)`, `i`).test(e) ? Ge : new RegExp(me, `i`).test(e) && !RegExp(me + ` pc`, `i`).test(e) ? Ke : ``
    },
    at = e => e instanceof Error;

function ot(e) {
    var t = globalThis._posthogChunkIds;
    if (t) {
        var n = Object.keys(t);
        return de && n.length === ue || (ue = n.length, de = n.reduce(((n, r) => {
            le ||= {};
            var i = le[r];
            if (i) n[i[0]] = i[1];
            else
                for (var a = e(r), o = a.length - 1; o >= 0; o--) {
                    var s = a[o] ?.filename,
                        c = t[r];
                    if (s && c) {
                        n[s] = c, le[r] = [s, c];
                        break
                    }
                }
            return n
        }), {})), de
    }
}
var st = class {
        constructor(e, t, n) {
            n === void 0 && (n = []), this.coercers = e, this.stackParser = t, this.modifiers = n
        }
        buildFromUnknown(e, t) {
            t === void 0 && (t = {});
            var n = t && t.mechanism || {
                    handled: !0,
                    type: `generic`
                },
                r = this.buildCoercingContext(n, t, 0).apply(e),
                i = this.buildParsingContext(t),
                a = this.parseStacktrace(r, i);
            return {
                $exception_list: this.convertToExceptionList(a, n),
                $exception_level: `error`
            }
        }
        modifyFrames(e) {
            var t = this;
            return m((function*() {
                for (var n of e) n.stacktrace && n.stacktrace.frames && E(n.stacktrace.frames) && (n.stacktrace.frames = yield t.applyModifiers(n.stacktrace.frames));
                return e
            }))()
        }
        coerceFallback(e) {
            return {
                type: `Error`,
                value: `Unknown error`,
                stack: e.syntheticException ?.stack,
                synthetic: !0
            }
        }
        parseStacktrace(e, t) {
            var n, r;
            return e.cause != null && (n = this.parseStacktrace(e.cause, t)), e.stack != `` && e.stack != null && (r = this.applyChunkIds(this.stackParser(e.stack, e.synthetic ? t.skipFirstLines : 0), t.chunkIdMap)), h({}, e, {
                cause: n,
                stack: r
            })
        }
        applyChunkIds(e, t) {
            return e.map((e => (e.filename && t && (e.chunk_id = t[e.filename]), e)))
        }
        applyCoercers(e, t) {
            for (var n of this.coercers)
                if (n.match(e)) return n.coerce(e, t);
            return this.coerceFallback(t)
        }
        applyModifiers(e) {
            var t = this;
            return m((function*() {
                var n = e;
                for (var r of t.modifiers) n = yield r(n);
                return n
            }))()
        }
        convertToExceptionList(e, t) {
            var n, r, i = {
                type: e.type,
                value: e.value,
                mechanism: {
                    type: t.type ?? `generic`,
                    handled: (n = t.handled) == null || n,
                    synthetic: (r = e.synthetic) != null && r
                }
            };
            e.stack && (i.stacktrace = {
                type: `raw`,
                frames: e.stack
            });
            var a = [i];
            return e.cause != null && a.push(...this.convertToExceptionList(e.cause, h({}, t, {
                handled: !0
            }))), a
        }
        buildParsingContext(e) {
            return {
                chunkIdMap: ot(this.stackParser),
                skipFirstLines: e.skipFirstLines ?? 1
            }
        }
        buildCoercingContext(e, t, n) {
            n === void 0 && (n = 0);
            var r = (n, r) => {
                if (4 >= r) {
                    var i = this.buildCoercingContext(e, t, r);
                    return this.applyCoercers(n, i)
                }
            };
            return h({}, t, {
                syntheticException: n == 0 ? t.syntheticException : void 0,
                mechanism: e,
                apply: e => r(e, n),
                next: e => r(e, n + 1)
            })
        }
    },
    ct = `?`;

function lt(e, t, n, r, i) {
    var a = {
        platform: e,
        filename: t,
        function: n === `<anonymous>` ? ct : n,
        in_app: !0
    };
    return A(r) || (a.lineno = r), A(i) || (a.colno = i), a
}
var ut = (e, t) => {
        var n = e.indexOf(`safari-extension`) !== -1,
            r = e.indexOf(`safari-web-extension`) !== -1;
        return n || r ? [e.indexOf(`@`) === -1 ? ct : e.split(`@`)[0], n ? `safari-extension:` + t : `safari-web-extension:` + t] : [e, t]
    },
    dt = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
    ft = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
    pt = /\((\S*)(?::(\d+))(?::(\d+))\)/,
    mt = (e, t) => {
        var n = dt.exec(e);
        if (n) {
            var [, r, i, a] = n;
            return lt(t, r, ct, +i, +a)
        }
        var o = ft.exec(e);
        if (o) {
            if (o[2] && o[2].indexOf(`eval`) === 0) {
                var s = pt.exec(o[2]);
                s && (o[2] = s[1], o[3] = s[2], o[4] = s[3])
            }
            var [c, l] = ut(o[1] || ct, o[2]);
            return lt(t, l, c, o[3] ? +o[3] : void 0, o[4] ? +o[4] : void 0)
        }
    },
    ht = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
    gt = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
    _t = (e, t) => {
        var n = ht.exec(e);
        if (n) {
            if (n[3] && n[3].indexOf(` > eval`) > -1) {
                var r = gt.exec(n[3]);
                r && (n[1] = n[1] || `eval`, n[3] = r[1], n[4] = r[2], n[5] = ``)
            }
            var i = n[3],
                a = n[1] || ct;
            return [a, i] = ut(a, i), lt(t, i, a, n[4] ? +n[4] : void 0, n[5] ? +n[5] : void 0)
        }
    },
    vt = /\(error: (.*)\)/,
    yt = class {
        match(e) {
            return this.isDOMException(e) || this.isDOMError(e)
        }
        coerce(e, t) {
            var n = j(e.stack);
            return {
                type: this.getType(e),
                value: this.getValue(e),
                stack: n ? e.stack : void 0,
                cause: e.cause ? t.next(e.cause) : void 0,
                synthetic: !1
            }
        }
        getType(e) {
            return this.isDOMError(e) ? `DOMError` : `DOMException`
        }
        getValue(e) {
            var t = e.name || (this.isDOMError(e) ? `DOMError` : `DOMException`);
            return e.message ? t + `: ` + e.message : t
        }
        isDOMException(e) {
            return re(e, `DOMException`)
        }
        isDOMError(e) {
            return re(e, `DOMError`)
        }
    },
    bt = class {
        match(e) {
            return (e => e instanceof Error)(e)
        }
        coerce(e, t) {
            return {
                type: this.getType(e),
                value: this.getMessage(e, t),
                stack: this.getStack(e),
                cause: e.cause ? t.next(e.cause) : void 0,
                synthetic: !1
            }
        }
        getType(e) {
            return e.name || e.constructor.name
        }
        getMessage(e, t) {
            var n = e.message;
            return String(n.error && typeof n.error.message == `string` ? n.error.message : n)
        }
        getStack(e) {
            return e.stacktrace || e.stack || void 0
        }
    },
    xt = class {
        constructor() {}
        match(e) {
            return re(e, `ErrorEvent`) && e.error != null
        }
        coerce(e, t) {
            return t.apply(e.error) || {
                type: `ErrorEvent`,
                value: e.message,
                stack: t.syntheticException ?.stack,
                synthetic: !0
            }
        }
    },
    St = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
    Ct = class {
        match(e) {
            return typeof e == `string`
        }
        coerce(e, t) {
            var [n, r] = this.getInfos(e);
            return {
                type: n ?? `Error`,
                value: r ?? e,
                stack: t.syntheticException ?.stack,
                synthetic: !0
            }
        }
        getInfos(e) {
            var t = `Error`,
                n = e,
                r = e.match(St);
            return r && (t = r[1], n = r[2]), [t, n]
        }
    },
    wt = [`fatal`, `error`, `warning`, `log`, `info`, `debug`];

function Tt(e, t) {
    t === void 0 && (t = 40);
    var n = Object.keys(e);
    if (n.sort(), !n.length) return `[object has no keys]`;
    for (var r = n.length; r > 0; r--) {
        var i = n.slice(0, r).join(`, `);
        if (t >= i.length) return r === n.length ? i : i.length > t ? i.slice(0, t) + `...` : i
    }
    return ``
}
var Et = class {
        match(e) {
            return typeof e == `object` && !!e
        }
        coerce(e, t) {
            var n = this.getErrorPropertyFromObject(e);
            return n ? t.apply(n) : {
                type: this.getType(e),
                value: this.getValue(e),
                stack: t.syntheticException ?.stack,
                level: this.isSeverityLevel(e.level) ? e.level : `error`,
                synthetic: !0
            }
        }
        getType(e) {
            return ie(e) ? e.constructor.name : `Error`
        }
        getValue(e) {
            if (`name` in e && typeof e.name == `string`) {
                var t = `'` + e.name + `' captured as exception`;
                return `message` in e && typeof e.message == `string` && (t += ` with message: '` + e.message + `'`), t
            }
            if (`message` in e && typeof e.message == `string`) return e.message;
            var n = this.getObjectClassName(e);
            return (n && n !== `Object` ? `'` + n + `'` : `Object`) + ` captured as exception with keys: ` + Tt(e)
        }
        isSeverityLevel(e) {
            return j(e) && !M(e) && wt.indexOf(e) >= 0
        }
        getErrorPropertyFromObject(e) {
            for (var t in e)
                if ({}.hasOwnProperty.call(e, t)) {
                    var n = e[t];
                    if (at(n)) return n
                }
        }
        getObjectClassName(e) {
            try {
                var t = Object.getPrototypeOf(e);
                return t ? t.constructor.name : void 0
            } catch {
                return
            }
        }
    },
    Dt = class {
        match(e) {
            return ie(e)
        }
        coerce(e, t) {
            var n = e.constructor.name;
            return {
                type: n,
                value: n + ` captured as exception with keys: ` + Tt(e),
                stack: t.syntheticException ?.stack,
                synthetic: !0
            }
        }
    },
    Ot = class {
        match(e) {
            return R(e)
        }
        coerce(e, t) {
            return {
                type: `Error`,
                value: `Primitive value captured as exception: ` + String(e),
                stack: t.syntheticException ?.stack,
                synthetic: !0
            }
        }
    },
    kt = class {
        match(e) {
            return re(e, `PromiseRejectionEvent`) || this.isCustomEventWrappingRejection(e)
        }
        isCustomEventWrappingRejection(e) {
            if (!ie(e)) return !1;
            try {
                var t = e.detail;
                return typeof t == `object` && !!t && `reason` in t
            } catch {
                return !1
            }
        }
        coerce(e, t) {
            var n = this.getUnhandledRejectionReason(e);
            return R(n) ? {
                type: `UnhandledRejection`,
                value: `Non-Error promise rejection captured with value: ` + String(n),
                stack: t.syntheticException ?.stack,
                synthetic: !0
            } : t.apply(n)
        }
        getUnhandledRejectionReason(e) {
            try {
                if (`reason` in e) return e.reason;
                if (`detail` in e && e.detail != null && typeof e.detail == `object` && `reason` in e.detail) return e.detail.reason
            } catch {}
            return e
        }
    },
    At = function(t, n) {
        var {
            debugEnabled: r
        } = n === void 0 ? {} : n, i = {
            C(n) {
                if (e && (f.DEBUG || u.POSTHOG_DEBUG || r) && !A(e.console) && e.console) {
                    for (var i = (`__rrweb_original__` in e.console[n]) ? e.console[n].__rrweb_original__ : e.console[n], a = arguments.length, o = Array(a > 1 ? a - 1 : 0), s = 1; a > s; s++) o[s - 1] = arguments[s];
                    i(t, ...o)
                }
            },
            info() {
                for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n];
                i.C(`log`, ...t)
            },
            warn() {
                for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n];
                i.C(`warn`, ...t)
            },
            error() {
                for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n];
                i.C(`error`, ...t)
            },
            critical() {
                for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n]
            },
            uninitializedWarning(e) {
                i.error(`You must initialize PostHog before calling ` + e)
            },
            createLogger: (e, n) => At(t + ` ` + e, n)
        };
        return i
    },
    H = At(`[PostHog.js]`),
    U = H.createLogger,
    jt = U(`[ExternalScriptsLoader]`),
    Mt = (e, t, n) => {
        if (e.config.disable_external_dependency_loading) return jt.warn(t + ` was requested but loading of external scripts is disabled.`), n(`Loading of external scripts is disabled`);
        var i = r ?.querySelectorAll(`script`);
        if (i) {
            for (var a, o = function() {
                    if (i[s].src === t) {
                        var e = i[s];
                        return e.__posthog_loading_callback_fired ? {
                            v: n()
                        } : (e.addEventListener(`load`, (t => {
                            e.__posthog_loading_callback_fired = !0, n(void 0, t)
                        })), e.onerror = e => n(e), {
                            v: void 0
                        })
                    }
                }, s = 0; i.length > s; s++)
                if (a = o()) return a.v
        }
        var c = () => {
            if (!r) return n(`document not found`);
            var i = r.createElement(`script`);
            if (i.type = `text/javascript`, i.crossOrigin = `anonymous`, i.src = t, i.onload = e => {
                    i.__posthog_loading_callback_fired = !0, n(void 0, e)
                }, i.onerror = e => n(e), e.config.prepare_external_dependency_script && (i = e.config.prepare_external_dependency_script(i)), !i) return n(`prepare_external_dependency_script returned null`);
            if (e.config.external_scripts_inject_target === `head`) r.head.appendChild(i);
            else {
                var a, o = r.querySelectorAll(`body > script`);
                o.length > 0 ? (a = o[0].parentNode) == null || a.insertBefore(i, o[0]) : r.body.appendChild(i)
            }
        };
        r != null && r.body ? c() : r ?.addEventListener(`DOMContentLoaded`, c)
    };
u.__PosthogExtensions__ = u.__PosthogExtensions__ || {}, u.__PosthogExtensions__.loadExternalDependency = (e, t, n) => {
    if (t !== `remote-config`) {
        var r;
        if (e.config.__preview_external_dependency_versioned_paths) r = e.requestRouter.endpointFor(`assets`, `/static/` + e.version + `/` + t + `.js`);
        else {
            var i = `/static/` + t + `.js?v=` + e.version;
            if (t === `toolbar`) {
                var a = 3e5;
                i = i + `&t=` + Math.floor(Date.now() / a) * a
            }
            r = e.requestRouter.endpointFor(`assets`, i)
        }
        Mt(e, r, n)
    } else Mt(e, e.requestRouter.endpointFor(`assets`, `/array/` + e.config.token + `/config.js`), n)
}, u.__PosthogExtensions__.loadSiteApp = (e, t, n) => {
    Mt(e, e.requestRouter.endpointFor(`api`, t), n)
};
var Nt = `$people_distinct_id`,
    Pt = `$device_id`,
    Ft = `__alias`,
    It = `__timers`,
    Lt = `$autocapture_disabled_server_side`,
    Rt = `$heatmaps_enabled_server_side`,
    zt = `$exception_capture_enabled_server_side`,
    Bt = `$error_tracking_suppression_rules`,
    Vt = `$error_tracking_capture_extension_exceptions`,
    Ht = `$web_vitals_enabled_server_side`,
    Ut = `$dead_clicks_enabled_server_side`,
    Wt = `$product_tours_enabled_server_side`,
    Gt = `$web_vitals_allowed_metrics`,
    Kt = `$session_recording_remote_config`,
    qt = `$sesid`,
    Jt = `$session_is_sampled`,
    Yt = `$enabled_feature_flags`,
    Xt = `$early_access_features`,
    Zt = `$feature_flag_details`,
    Qt = `$feature_flag_payloads`,
    $t = `$override_feature_flag_payloads`,
    en = `$stored_person_properties`,
    tn = `$stored_group_properties`,
    nn = `$surveys`,
    rn = `ph_product_tours`,
    an = `$flag_call_reported`,
    on = `$flag_call_reported_session_id`,
    sn = `$feature_flag_errors`,
    cn = `$feature_flag_evaluated_at`,
    ln = `$user_state`,
    un = `$client_session_props`,
    dn = `$capture_rate_limit`,
    fn = `$initial_campaign_params`,
    pn = `$initial_referrer_info`,
    mn = `$initial_person_info`,
    hn = `$epp`,
    gn = `__POSTHOG_TOOLBAR__`,
    _n = `$posthog_cookieless`,
    vn = [Nt, Ft, `__cmpns`, It, `$session_recording_enabled_server_side`, Rt, qt, Yt, Bt, ln, Xt, Zt, tn, en, nn, an, on, sn, cn, un, dn, fn, pn, hn, mn, rn, `$product_tours_activated`, Wt, Kt, $t],
    yn = `PostHog loadExternalDependency extension not found.`,
    bn = `on_reject`,
    xn = `always`,
    Sn = `anonymous`,
    Cn = `identified`,
    wn = `identified_only`,
    Tn = `visibilitychange`,
    En = `beforeunload`,
    Dn = `$pageview`,
    On = `$pageleave`,
    kn = `$identify`,
    An = `$groupidentify`;

function jn(e, t) {
    E(e) && e.forEach(t)
}

function W(e, t) {
    if (!P(e))
        if (E(e)) e.forEach(t);
        else if (te(e)) e.forEach(((e, n) => t(e, n)));
    else
        for (var n in e) ee.call(e, n) && t(e[n], n)
}
var G = function(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
    for (var i of n)
        for (var a in i) i[a] !== void 0 && (e[a] = i[a]);
    return e
};

function Mn(e) {
    for (var t = Object.keys(e), n = t.length, r = Array(n); n--;) r[n] = [t[n], e[t[n]]];
    return r
}
var Nn = function(e) {
        try {
            return e()
        } catch {
            return
        }
    },
    Pn = function(e) {
        return function() {
            try {
                for (var t = arguments.length, n = Array(t), r = 0; t > r; r++) n[r] = arguments[r];
                return e.apply(this, n)
            } catch (e) {
                H.critical(`Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A.`), H.critical(e)
            }
        }
    },
    Fn = function(e) {
        var t = {};
        return W(e, (function(e, n) {
            (j(e) && e.length > 0 || F(e)) && (t[n] = e)
        })), t
    },
    In = [`herokuapp.com`, `vercel.app`, `netlify.app`];

function Ln(e) {
    var t = e ?.hostname;
    if (!j(t)) return !1;
    var n = t.split(`.`).slice(-2).join(`.`);
    for (var r of In)
        if (n === r) return !1;
    return !0
}

function K(e, t, n, r) {
    var {
        capture: i = !1,
        passive: a = !0
    } = r ?? {};
    e ?.addEventListener(t, n, {
        capture: i,
        passive: a
    })
}

function Rn(e) {
    return e.name === `ph_toolbar_internal`
}
Math.trunc || (Math.trunc = function(e) {
    return 0 > e ? Math.ceil(e) : Math.floor(e)
}), Number.isInteger || (Number.isInteger = function(e) {
    return F(e) && isFinite(e) && Math.floor(e) === e
});
var zn = class e {
        constructor(e) {
            if (this.bytes = e, e.length !== 16) throw TypeError(`not 128-bit length`)
        }
        static fromFieldsV7(t, n, r, i) {
            if (!Number.isInteger(t) || !Number.isInteger(n) || !Number.isInteger(r) || !Number.isInteger(i) || 0 > t || 0 > n || 0 > r || 0 > i || t > 0xffffffffffff || n > 4095 || r > 1073741823 || i > 4294967295) throw RangeError(`invalid field value`);
            var a = new Uint8Array(16);
            return a[0] = t / 2 ** 40, a[1] = t / 2 ** 32, a[2] = t / 2 ** 24, a[3] = t / 2 ** 16, a[4] = t / 2 ** 8, a[5] = t, a[6] = 112 | n >>> 8, a[7] = n, a[8] = 128 | r >>> 24, a[9] = r >>> 16, a[10] = r >>> 8, a[11] = r, a[12] = i >>> 24, a[13] = i >>> 16, a[14] = i >>> 8, a[15] = i, new e(a)
        }
        toString() {
            for (var e = ``, t = 0; this.bytes.length > t; t++) e = e + (this.bytes[t] >>> 4).toString(16) + (15 & this.bytes[t]).toString(16), t !== 3 && t !== 5 && t !== 7 && t !== 9 || (e += `-`);
            if (e.length !== 36) throw Error(`Invalid UUIDv7 was generated`);
            return e
        }
        clone() {
            return new e(this.bytes.slice(0))
        }
        equals(e) {
            return this.compareTo(e) === 0
        }
        compareTo(e) {
            for (var t = 0; 16 > t; t++) {
                var n = this.bytes[t] - e.bytes[t];
                if (n !== 0) return Math.sign(n)
            }
            return 0
        }
    },
    Bn = class {
        constructor() {
            this.I = 0, this.S = 0, this.k = new Un
        }
        generate() {
            var e = this.generateOrAbort();
            if (A(e)) {
                this.I = 0;
                var t = this.generateOrAbort();
                if (A(t)) throw Error(`Could not generate UUID after timestamp reset`);
                return t
            }
            return e
        }
        generateOrAbort() {
            var e = Date.now();
            if (e > this.I) this.I = e, this.A();
            else {
                if (this.I >= e + 1e4) return;
                this.S++, this.S > 4398046511103 && (this.I++, this.A())
            }
            return zn.fromFieldsV7(this.I, Math.trunc(this.S / 2 ** 30), this.S & 2 ** 30 - 1, this.k.nextUint32())
        }
        A() {
            this.S = 1024 * this.k.nextUint32() + (1023 & this.k.nextUint32())
        }
    },
    Vn, Hn = e => {
        if (typeof UUIDV7_DENY_WEAK_RNG < `u` && UUIDV7_DENY_WEAK_RNG) throw Error(`no cryptographically strong RNG available`);
        for (var t = 0; e.length > t; t++) e[t] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
        return e
    };
e && !A(e.crypto) && crypto.getRandomValues && (Hn = e => crypto.getRandomValues(e));
var Un = class {
        constructor() {
            this.T = new Uint32Array(8), this.N = 1 / 0
        }
        nextUint32() {
            return this.T.length > this.N || (Hn(this.T), this.N = 0), this.T[this.N++]
        }
    },
    Wn = () => Gn().toString(),
    Gn = () => (Vn ||= new Bn).generate(),
    Kn = ``,
    qn = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i,
    Jn = {
        Ut: () => !!r,
        Yt(e) {
            H.error(`cookieStore error: ` + e)
        },
        Gt(e) {
            if (r) {
                try {
                    for (var t = e + `=`, n = r.cookie.split(`;`).filter((e => e.length)), i = 0; n.length > i; i++) {
                        for (var a = n[i]; a.charAt(0) == ` `;) a = a.substring(1, a.length);
                        if (a.indexOf(t) === 0) return decodeURIComponent(a.substring(t.length, a.length))
                    }
                } catch {}
                return null
            }
        },
        Wt(e) {
            var t;
            try {
                t = JSON.parse(Jn.Gt(e)) || {}
            } catch {}
            return t
        },
        Xt(e, t, n, i, a) {
            if (r) try {
                var o = ``,
                    s = ``,
                    c = function(e, t) {
                        if (t) {
                            var n = function(e, t) {
                                if (t === void 0 && (t = r), Kn) return Kn;
                                if (!t || [`localhost`, `127.0.0.1`].includes(e)) return ``;
                                for (var n = e.split(`.`), i = Math.min(n.length, 8), a = `dmn_chk_` + Wn(); !Kn && i--;) {
                                    var o = n.slice(i).join(`.`),
                                        s = a + `=1;domain=.` + o + `;path=/`;
                                    t.cookie = s + `;max-age=3`, t.cookie.includes(a) && (t.cookie = s + `;max-age=0`, Kn = o)
                                }
                                return Kn
                            }(e);
                            if (!n) {
                                var i = (e => {
                                    var t = e.match(qn);
                                    return t ? t[0] : ``
                                })(e);
                                i !== n && H.info(`Warning: cookie subdomain discovery mismatch`, i, n), n = i
                            }
                            return n ? `; domain=.` + n : ``
                        }
                        return ``
                    }(r.location.hostname, i);
                if (n) {
                    var l = new Date;
                    l.setTime(l.getTime() + 864e5 * n), o = `; expires=` + l.toUTCString()
                }
                a && (s = `; secure`);
                var u = e + `=` + encodeURIComponent(JSON.stringify(t)) + o + `; SameSite=Lax; path=/` + c + s;
                return u.length > 3686.4 && H.warn(`cookieStore warning: large cookie, len=` + u.length), r.cookie = u, u
            } catch {
                return
            }
        },
        Jt(e, t) {
            if (r != null && r.cookie) try {
                Jn.Xt(e, ``, -1, t)
            } catch {
                return
            }
        }
    },
    Yn = null,
    q = {
        Ut() {
            if (!N(Yn)) return Yn;
            var t = !0;
            if (A(e)) t = !1;
            else try {
                var n = `__mplssupport__`;
                q.Xt(n, `xyz`), q.Gt(n) !== `"xyz"` && (t = !1), q.Jt(n)
            } catch {
                t = !1
            }
            return t || H.error(`localStorage unsupported; falling back to cookie store`), Yn = t, t
        },
        Yt(e) {
            H.error(`localStorage error: ` + e)
        },
        Gt(t) {
            try {
                return e ?.localStorage.getItem(t)
            } catch (e) {
                q.Yt(e)
            }
            return null
        },
        Wt(e) {
            try {
                return JSON.parse(q.Gt(e)) || {}
            } catch {}
            return null
        },
        Xt(t, n) {
            try {
                e ?.localStorage.setItem(t, JSON.stringify(n))
            } catch (e) {
                q.Yt(e)
            }
        },
        Jt(t) {
            try {
                e ?.localStorage.removeItem(t)
            } catch (e) {
                q.Yt(e)
            }
        }
    },
    Xn = [Pt, `distinct_id`, qt, Jt, hn, mn, ln],
    Zn = {},
    Qn = {
        Ut: () => !0,
        Yt(e) {
            H.error(`memoryStorage error: ` + e)
        },
        Gt: e => Zn[e] || null,
        Wt: e => Zn[e] || null,
        Xt(e, t) {
            Zn[e] = t
        },
        Jt(e) {
            delete Zn[e]
        }
    },
    $n = null,
    J = {
        Ut() {
            if (!N($n)) return $n;
            if ($n = !0, A(e)) $n = !1;
            else try {
                var t = `__support__`;
                J.Xt(t, `xyz`), J.Gt(t) !== `"xyz"` && ($n = !1), J.Jt(t)
            } catch {
                $n = !1
            }
            return $n
        },
        Yt(e) {
            H.error(`sessionStorage error: `, e)
        },
        Gt(t) {
            try {
                return e ?.sessionStorage.getItem(t)
            } catch (e) {
                J.Yt(e)
            }
            return null
        },
        Wt(e) {
            try {
                return JSON.parse(J.Gt(e)) || null
            } catch {}
            return null
        },
        Xt(t, n) {
            try {
                e ?.sessionStorage.setItem(t, JSON.stringify(n))
            } catch (e) {
                J.Yt(e)
            }
        },
        Jt(t) {
            try {
                e ?.sessionStorage.removeItem(t)
            } catch (e) {
                J.Yt(e)
            }
        }
    },
    er = class {
        constructor(e) {
            this._instance = e
        }
        get Rt() {
            return this._instance.config
        }
        get consent() {
            return this.Kt() ? 0 : this.Qt
        }
        isOptedOut() {
            return this.Rt.cookieless_mode === xn || this.consent === 0 || this.consent === -1 && (this.Rt.opt_out_capturing_by_default || this.Rt.cookieless_mode === bn)
        }
        isOptedIn() {
            return !this.isOptedOut()
        }
        isExplicitlyOptedOut() {
            return this.consent === 0
        }
        optInOut(e) {
            this.ti.Xt(this.ei, +!!e, this.Rt.cookie_expiration, this.Rt.cross_subdomain_cookie, this.Rt.secure_cookie)
        }
        reset() {
            this.ti.Jt(this.ei, this.Rt.cross_subdomain_cookie)
        }
        get ei() {
            var {
                token: e,
                opt_out_capturing_cookie_prefix: t,
                consent_persistence_name: n
            } = this._instance.config;
            return n || (t ? t + e : `__ph_opt_in_out_` + e)
        }
        get Qt() {
            var e = this.ti.Gt(this.ei);
            return oe(e) ? 1 : x(se, e) ? 0 : -1
        }
        get ti() {
            var e = this.Rt.opt_out_capturing_persistence_type,
                t = e === `localStorage` ? q : Jn;
            if (!this.ii || this.ii !== t) {
                this.ii = t;
                var n = e === `localStorage` ? Jn : q;
                n.Gt(this.ei) && (this.ii.Gt(this.ei) || this.optInOut(oe(n.Gt(this.ei))), n.Jt(this.ei, this.Rt.cross_subdomain_cookie))
            }
            return this.ii
        }
        Kt() {
            return !!this.Rt.respect_dnt && [n ?.doNotTrack, n ?.msDoNotTrack, u.doNotTrack].some((e => oe(e)))
        }
    },
    tr = U(`[Dead Clicks]`),
    nr = () => !0,
    rr = e => {
        var t, n = !((t = e.instance.persistence) == null || !t.get_property(Ut)),
            r = e.instance.config.capture_dead_clicks;
        return L(r) ? r : !!O(r) || n
    },
    ir = class {
        get lazyLoadedDeadClicksAutocapture() {
            return this.ri
        }
        constructor(e, t, n) {
            this.instance = e, this.isEnabled = t, this.onCapture = n, this.startIfEnabledOrStop()
        }
        onRemoteConfig(e) {
            `captureDeadClicks` in e && (this.instance.persistence && this.instance.persistence.register({
                [Ut]: e.captureDeadClicks
            }), this.startIfEnabledOrStop())
        }
        startIfEnabledOrStop() {
            this.isEnabled(this) ? this.ni((() => {
                this.si()
            })) : this.stop()
        }
        ni(e) {
            var t, n;
            (t = u.__PosthogExtensions__) != null && t.initDeadClicksAutocapture && e(), (n = u.__PosthogExtensions__) == null || n.loadExternalDependency == null || n.loadExternalDependency(this.instance, `dead-clicks-autocapture`, (t => {
                t ? tr.error(`failed to load script`, t) : e()
            }))
        }
        si() {
            var e;
            if (r) {
                if (!this.ri && (e = u.__PosthogExtensions__) != null && e.initDeadClicksAutocapture) {
                    var t = O(this.instance.config.capture_dead_clicks) ? this.instance.config.capture_dead_clicks : {};
                    t.__onCapture = this.onCapture, this.ri = u.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, t), this.ri.start(r), tr.info(`starting...`)
                }
            } else tr.error("`document` not found. Cannot start.")
        }
        stop() {
            this.ri && (this.ri.stop(), this.ri = void 0, tr.info(`stopping...`))
        }
    },
    ar = U(`[SegmentIntegration]`),
    or = `posthog-js`;

function sr(e, t) {
    var {
        organization: n,
        projectId: r,
        prefix: i,
        severityAllowList: a = [`error`],
        sendExceptionsToPostHog: o = !0
    } = t === void 0 ? {} : t;
    return t => {
        if (a !== `*` && !a.includes(t.level) || !e.__loaded) return t;
        t.tags ||= {};
        var s = e.requestRouter.endpointFor(`ui`, `/project/` + e.config.token + `/person/` + e.get_distinct_id());
        t.tags[`PostHog Person URL`] = s, e.sessionRecordingStarted() && (t.tags[`PostHog Recording URL`] = e.get_session_replay_url({
            withTimestamp: !0
        }));
        var c, l = t.exception ?.values || [],
            u = l.map((e => h({}, e, {
                stacktrace: e.stacktrace ? h({}, e.stacktrace, {
                    type: `raw`,
                    frames: (e.stacktrace.frames || []).map((e => h({}, e, {
                        platform: `web:javascript`
                    })))
                }) : void 0
            }))),
            d = {
                $exception_message: l[0] ?.value || t.message,
                $exception_type: l[0] ?.type,
                $exception_level: t.level,
                $exception_list: u,
                $sentry_event_id: t.event_id,
                $sentry_exception: t.exception,
                $sentry_exception_message: l[0] ?.value || t.message,
                $sentry_exception_type: l[0] ?.type,
                $sentry_tags: t.tags
            };
        return n && r && (d.$sentry_url = (i || `https://sentry.io/organizations/`) + n + `/issues/?project=` + r + `&query=` + t.event_id), o && ((c = e.exceptions) == null || c.sendExceptionEvent(d)), t
    }
}
var cr = class {
        constructor(e, t, n, r, i, a) {
            this.name = or, this.setupOnce = function(o) {
                o(sr(e, {
                    organization: t,
                    projectId: n,
                    prefix: r,
                    severityAllowList: i,
                    sendExceptionsToPostHog: a == null || a
                }))
            }
        }
    },
    lr = class {
        constructor(e) {
            this.oi = (e, t, n) => {
                n && (n.noSessionId || n.activityTimeout || n.sessionPastMaximumLength) && (H.info(`[PageViewManager] Session rotated, clearing pageview state`, {
                    sessionId: e,
                    changeReason: n
                }), this.ai = void 0, this._instance.scrollManager.resetContext())
            }, this._instance = e, this.li()
        }
        li() {
            this.ui = this._instance.sessionManager ?.onSessionId(this.oi)
        }
        destroy() {
            var e;
            (e = this.ui) == null || e.call(this), this.ui = void 0
        }
        doPageView(t, n) {
            var r = this.hi(t, n);
            return this.ai = {
                pathname: e ?.location.pathname ?? ``,
                pageViewId: n,
                timestamp: t
            }, this._instance.scrollManager.resetContext(), r
        }
        doPageLeave(e) {
            return this.hi(e, this.ai ?.pageViewId)
        }
        doEvent() {
            return {
                $pageview_id: this.ai ?.pageViewId
            }
        }
        hi(e, t) {
            var n = this.ai;
            if (!n) return {
                $pageview_id: t
            };
            var r = {
                    $pageview_id: t,
                    $prev_pageview_id: n.pageViewId
                },
                i = this._instance.scrollManager.getContext();
            if (i && !this._instance.config.disable_scroll_properties) {
                var {
                    maxScrollHeight: a,
                    lastScrollY: o,
                    maxScrollY: s,
                    maxContentHeight: c,
                    lastContentY: l,
                    maxContentY: u
                } = i;
                if (!(A(a) || A(o) || A(s) || A(c) || A(l) || A(u))) {
                    a = Math.ceil(a), o = Math.ceil(o), s = Math.ceil(s), c = Math.ceil(c), l = Math.ceil(l), u = Math.ceil(u);
                    var d = a > 1 ? z(o / a, 0, 1, H) : 1,
                        f = a > 1 ? z(s / a, 0, 1, H) : 1,
                        p = c > 1 ? z(l / c, 0, 1, H) : 1,
                        m = c > 1 ? z(u / c, 0, 1, H) : 1;
                    r = G(r, {
                        $prev_pageview_last_scroll: o,
                        $prev_pageview_last_scroll_percentage: d,
                        $prev_pageview_max_scroll: s,
                        $prev_pageview_max_scroll_percentage: f,
                        $prev_pageview_last_content: l,
                        $prev_pageview_last_content_percentage: p,
                        $prev_pageview_max_content: u,
                        $prev_pageview_max_content_percentage: m
                    })
                }
            }
            return n.pathname && (r.$prev_pageview_pathname = n.pathname), n.timestamp && (r.$prev_pageview_duration = (e.getTime() - n.timestamp.getTime()) / 1e3), r
        }
    },
    ur = e => {
        var t = r ?.createElement(`a`);
        return A(t) ? null : (t.href = e, t)
    },
    dr = function(e, t) {
        for (var n, r = ((e.split(`#`)[0] || ``).split(/\?(.*)/)[1] || ``).replace(/^\?+/g, ``).split(`&`), i = 0; r.length > i; i++) {
            var a = r[i].split(`=`);
            if (a[0] === t) {
                n = a;
                break
            }
        }
        if (!E(n) || 2 > n.length) return ``;
        var o = n[1];
        try {
            o = decodeURIComponent(o)
        } catch {
            H.error(`Skipping decoding for malformed query param: ` + o)
        }
        return o.replace(/\+/g, ` `)
    },
    fr = function(e, t, n) {
        if (!e || !t || !t.length) return e;
        for (var r = e.split(`#`), i = r[1], a = (r[0] || ``).split(`?`), o = a[1], s = a[0], c = (o || ``).split(`&`), l = [], u = 0; c.length > u; u++) {
            var d = c[u].split(`=`);
            E(d) && (t.includes(d[0]) ? l.push(d[0] + `=` + n) : l.push(c[u]))
        }
        var f = s;
        return o != null && (f += `?` + l.join(`&`)), i != null && (f += `#` + i), f
    },
    pr = function(e, t) {
        var n = e.match(RegExp(t + `=([^&]*)`));
        return n ? n[1] : null
    },
    mr = `https?://(.*)`,
    hr = [`gclid`, `gclsrc`, `dclid`, `gbraid`, `wbraid`, `fbclid`, `msclkid`, `twclid`, `li_fat_id`, `igshid`, `ttclid`, `rdt_cid`, `epik`, `qclid`, `sccid`, `irclid`, `_kx`],
    gr = [`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `gad_source`, `mc_cid`, ...hr],
    _r = `<masked>`,
    vr = [`li_fat_id`];

function yr(e, t, n) {
    if (!r) return {};
    var i, a = t ? [...hr, ...n || []] : [],
        o = br(fr(r.URL, a, _r), e);
    return G((i = {}, W(vr, (function(e) {
        var t = Jn.Gt(e);
        i[e] = t || null
    })), i), o)
}

function br(e, t) {
    var n = gr.concat(t || []),
        r = {};
    return W(n, (function(t) {
        r[t] = dr(e, t) || null
    })), r
}

function xr(e) {
    var t = function(e) {
            return e ? e.search(mr + `google.([^/?]*)`) === 0 ? `google` : e.search(mr + `bing.com`) === 0 ? `bing` : e.search(mr + `yahoo.com`) === 0 ? `yahoo` : e.search(mr + `duckduckgo.com`) === 0 ? `duckduckgo` : null : null
        }(e),
        n = t == `yahoo` ? `p` : `q`,
        i = {};
    if (!N(t)) {
        i.$search_engine = t;
        var a = r ? dr(r.referrer, n) : ``;
        a.length && (i.ph_keyword = a)
    }
    return i
}

function Sr() {
    return navigator.language || navigator.userLanguage
}
var Cr = `$direct`;

function wr() {
    return r ?.referrer || Cr
}

function Tr(e, t) {
    var n = e ? [...hr, ...t || []] : [],
        r = i ?.href.substring(0, 1e3);
    return {
        r: wr().substring(0, 1e3),
        u: r ? fr(r, n, _r) : void 0
    }
}

function Er(e) {
    var {
        r: t,
        u: n
    } = e, r = {
        $referrer: t,
        $referring_domain: t == null ? void 0 : t == Cr ? Cr : ur(t) ?.host
    };
    if (n) {
        r.$current_url = n;
        var i = ur(n);
        r.$host = i ?.host, r.$pathname = i ?.pathname, G(r, br(n))
    }
    return t && G(r, xr(t)), r
}

function Dr() {
    try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone
    } catch {
        return
    }
}

function Or() {
    try {
        return new Date().getTimezoneOffset()
    } catch {
        return
    }
}
var kr = [`cookie`, `localstorage`, `localstorage+cookie`, `sessionstorage`, `memory`],
    Ar = class {
        constructor(e, t) {
            this.Rt = e, this.props = {}, this.ci = !1, this.di = (e => {
                var t = ``;
                return e.token && (t = e.token.replace(/\+/g, `PL`).replace(/\//g, `SL`).replace(/=/g, `EQ`)), e.persistence_name ? `ph_` + e.persistence_name : `ph_` + t + `_posthog`
            })(e), this.ti = this.vi(e), this.load(), e.debug && H.info(`Persistence loaded`, e.persistence, h({}, this.props)), this.update_config(e, e, t), this.save()
        }
        isDisabled() {
            return !!this.fi
        }
        vi(t) {
            kr.indexOf(t.persistence.toLowerCase()) === -1 && (H.critical(`Unknown persistence type ` + t.persistence + `; falling back to localStorage+cookie`), t.persistence = `localStorage+cookie`);
            var n = function(t) {
                    t === void 0 && (t = []);
                    var n = [...Xn, ...t];
                    return h({}, q, {
                        Wt(e) {
                            try {
                                var t = {};
                                try {
                                    t = Jn.Wt(e) || {}
                                } catch {}
                                var n = G(t, JSON.parse(q.Gt(e) || `{}`));
                                return q.Xt(e, n), n
                            } catch {}
                            return null
                        },
                        Xt(e, t, r, i, a, o) {
                            try {
                                q.Xt(e, t, void 0, void 0, o);
                                var s = {};
                                n.forEach((e => {
                                    t[e] && (s[e] = t[e])
                                })), Object.keys(s).length && Jn.Xt(e, s, r, i, a, o)
                            } catch (e) {
                                q.Yt(e)
                            }
                        },
                        Jt(t, n) {
                            try {
                                e ?.localStorage.removeItem(t), Jn.Jt(t, n)
                            } catch (e) {
                                q.Yt(e)
                            }
                        }
                    })
                }(t.cookie_persisted_properties || []),
                r = t.persistence.toLowerCase();
            return r === `localstorage` && q.Ut() ? q : r === `localstorage+cookie` && n.Ut() ? n : r === `sessionstorage` && J.Ut() ? J : r === `memory` ? Qn : r === `cookie` ? Jn : n.Ut() ? n : Jn
        }
        pi(e) {
            var t = e ?? this.Rt.feature_flag_cache_ttl_ms;
            if (!t || 0 >= t) return !1;
            var n = this.props[cn];
            return !n || typeof n != `number` || Date.now() - n > t
        }
        properties() {
            var e = {};
            return W(this.props, ((t, n) => {
                if (n === Yt && O(t)) {
                    if (!this.pi())
                        for (var r = Object.keys(t), i = 0; r.length > i; i++) e[`$feature/` + r[i]] = t[r[i]]
                } else vn.indexOf(n) === -1 && (e[n] = t)
            })), e
        }
        load() {
            if (!this.fi) {
                var e = this.ti.Wt(this.di);
                e && (this.props = G({}, e))
            }
        }
        save() {
            this.fi || this.ti.Xt(this.di, this.props, this.gi, this.mi, this.yi, this.Rt.debug)
        }
        remove() {
            this.ti.Jt(this.di, !1), this.ti.Jt(this.di, !0)
        }
        clear() {
            this.remove(), this.props = {}
        }
        register_once(e, t, n) {
            if (O(e)) {
                A(t) && (t = `None`), this.gi = A(n) ? this.bi : n;
                var r = !1;
                if (W(e, ((e, n) => {
                        this.props.hasOwnProperty(n) && this.props[n] !== t || (this.props[n] = e, r = !0)
                    })), r) return this.save(), !0
            }
            return !1
        }
        register(e, t) {
            if (O(e)) {
                this.gi = A(t) ? this.bi : t;
                var n = !1;
                if (W(e, ((t, r) => {
                        e.hasOwnProperty(r) && this.props[r] !== t && (this.props[r] = t, n = !0)
                    })), n) return this.save(), !0
            }
            return !1
        }
        unregister(e) {
            e in this.props && (delete this.props[e], this.save())
        }
        update_campaign_params() {
            if (!this.ci) {
                var e = yr(this.Rt.custom_campaign_params, this.Rt.mask_personal_data_properties, this.Rt.custom_personal_data_properties);
                k(Fn(e)) || this.register(e), this.ci = !0
            }
        }
        update_search_keyword() {
            var e;
            this.register((e = r ?.referrer) ? xr(e) : {})
        }
        update_referrer_info() {
            this.register_once({
                $referrer: wr(),
                $referring_domain: r != null && r.referrer && ur(r.referrer) ?.host || Cr
            }, void 0)
        }
        set_initial_person_info() {
            this.props[fn] || this.props[pn] || this.register_once({
                [mn]: Tr(this.Rt.mask_personal_data_properties, this.Rt.custom_personal_data_properties)
            }, void 0)
        }
        get_initial_props() {
            var e = {};
            W([pn, fn], (t => {
                var n = this.props[t];
                n && W(n, (function(t, n) {
                    e[`$initial_` + C(n)] = t
                }))
            }));
            var t, n, r = this.props[mn];
            return r && G(e, (t = Er(r), n = {}, W(t, (function(e, t) {
                n[`$initial_` + C(t)] = e
            })), n)), e
        }
        safe_merge(e) {
            return W(this.props, (function(t, n) {
                n in e || (e[n] = t)
            })), e
        }
        update_config(e, t, n) {
            if (this.bi = this.gi = e.cookie_expiration, this.set_disabled(e.disable_persistence || !!n), this.set_cross_subdomain(e.cross_subdomain_cookie), this.set_secure(e.secure_cookie), e.persistence !== t.persistence || !((e, t) => {
                    if (e.length !== t.length) return !1;
                    var n = [...e].sort(),
                        r = [...t].sort();
                    return n.every(((e, t) => e === r[t]))
                })(e.cookie_persisted_properties || [], t.cookie_persisted_properties || [])) {
                var r = this.vi(e),
                    i = this.props;
                this.clear(), this.ti = r, this.props = i, this.save()
            }
        }
        set_disabled(e) {
            this.fi = e, this.fi ? this.remove() : this.save()
        }
        set_cross_subdomain(e) {
            e !== this.mi && (this.mi = e, this.remove(), this.save())
        }
        set_secure(e) {
            e !== this.yi && (this.yi = e, this.remove(), this.save())
        }
        set_event_timer(e, t) {
            var n = this.props[It] || {};
            n[e] = t, this.props[It] = n, this.save()
        }
        remove_event_timer(e) {
            var t = (this.props[It] || {})[e];
            return A(t) || (delete this.props[It][e], this.save()), t
        }
        get_property(e) {
            return this.props[e]
        }
        set_property(e, t) {
            this.props[e] = t, this.save()
        }
    },
    jr = {
        Activation: `events`,
        Cancellation: `cancelEvents`
    },
    Mr = {
        Button: `button`,
        Tab: `tab`,
        Selector: `selector`
    },
    Nr = {
        TopLeft: `top_left`,
        TopRight: `top_right`,
        TopCenter: `top_center`,
        MiddleLeft: `middle_left`,
        MiddleRight: `middle_right`,
        MiddleCenter: `middle_center`,
        Left: `left`,
        Center: `center`,
        Right: `right`,
        NextToTrigger: `next_to_trigger`
    },
    Pr = {
        Top: `top`,
        Left: `left`,
        Right: `right`,
        Bottom: `bottom`
    },
    Fr = {
        Popover: `popover`,
        API: `api`,
        Widget: `widget`,
        ExternalSurvey: `external_survey`
    },
    Ir = {
        Open: `open`,
        MultipleChoice: `multiple_choice`,
        SingleChoice: `single_choice`,
        Rating: `rating`,
        Link: `link`
    },
    Lr = {
        NextQuestion: `next_question`,
        End: `end`,
        ResponseBased: `response_based`,
        SpecificQuestion: `specific_question`
    },
    Rr = {
        Once: `once`,
        Recurring: `recurring`,
        Always: `always`
    },
    zr = {
        SHOWN: `survey shown`,
        DISMISSED: `survey dismissed`,
        SENT: `survey sent`,
        ABANDONED: `survey abandoned`
    },
    Br = {
        SURVEY_ID: `$survey_id`,
        SURVEY_NAME: `$survey_name`,
        SURVEY_RESPONSE: `$survey_response`,
        SURVEY_ITERATION: `$survey_iteration`,
        SURVEY_ITERATION_START_DATE: `$survey_iteration_start_date`,
        SURVEY_PARTIALLY_COMPLETED: `$survey_partially_completed`,
        SURVEY_SUBMISSION_ID: `$survey_submission_id`,
        SURVEY_QUESTIONS: `$survey_questions`,
        SURVEY_COMPLETED: `$survey_completed`,
        PRODUCT_TOUR_ID: `$product_tour_id`,
        SURVEY_LAST_SEEN_DATE: `$survey_last_seen_date`
    },
    Vr = {
        Popover: `popover`,
        Inline: `inline`
    },
    Hr = {
        backgroundColor: `#ffffff`,
        textColor: `#1d1f27`,
        buttonColor: `#1d1f27`,
        borderRadius: 8,
        buttonBorderRadius: 6,
        borderColor: `#e5e7eb`,
        fontFamily: `system-ui`,
        boxShadow: `0 4px 12px rgba(0, 0, 0, 0.15)`,
        showOverlay: !0,
        whiteLabel: !1,
        dismissOnClickOutside: !0,
        zIndex: 2147483646
    },
    Ur = {
        SHOWN: `product tour shown`,
        DISMISSED: `product tour dismissed`,
        COMPLETED: `product tour completed`,
        STEP_SHOWN: `product tour step shown`,
        STEP_COMPLETED: `product tour step completed`,
        BUTTON_CLICKED: `product tour button clicked`,
        STEP_SELECTOR_FAILED: `product tour step selector failed`,
        BANNER_CONTAINER_SELECTOR_FAILED: `product tour banner container selector failed`,
        BANNER_ACTION_CLICKED: `product tour banner action clicked`
    },
    Wr = {
        TOUR_ID: `$product_tour_id`,
        TOUR_NAME: `$product_tour_name`,
        TOUR_ITERATION: `$product_tour_iteration`,
        TOUR_RENDER_REASON: `$product_tour_render_reason`,
        TOUR_STEP_ID: `$product_tour_step_id`,
        TOUR_STEP_ORDER: `$product_tour_step_order`,
        TOUR_STEP_TYPE: `$product_tour_step_type`,
        TOUR_DISMISS_REASON: `$product_tour_dismiss_reason`,
        TOUR_BUTTON_TEXT: `$product_tour_button_text`,
        TOUR_BUTTON_ACTION: `$product_tour_button_action`,
        TOUR_BUTTON_LINK: `$product_tour_button_link`,
        TOUR_BUTTON_TOUR_ID: `$product_tour_button_tour_id`,
        TOUR_STEPS_COUNT: `$product_tour_steps_count`,
        TOUR_STEP_SELECTOR: `$product_tour_step_selector`,
        TOUR_STEP_SELECTOR_FOUND: `$product_tour_step_selector_found`,
        TOUR_STEP_ELEMENT_TAG: `$product_tour_step_element_tag`,
        TOUR_STEP_ELEMENT_ID: `$product_tour_step_element_id`,
        TOUR_STEP_ELEMENT_CLASSES: `$product_tour_step_element_classes`,
        TOUR_STEP_ELEMENT_TEXT: `$product_tour_step_element_text`,
        TOUR_ERROR: `$product_tour_error`,
        TOUR_MATCHES_COUNT: `$product_tour_matches_count`,
        TOUR_FAILURE_PHASE: `$product_tour_failure_phase`,
        TOUR_WAITED_FOR_ELEMENT: `$product_tour_waited_for_element`,
        TOUR_WAIT_DURATION_MS: `$product_tour_wait_duration_ms`,
        TOUR_BANNER_SELECTOR: `$product_tour_banner_selector`,
        TOUR_LINKED_SURVEY_ID: `$product_tour_linked_survey_id`,
        USE_MANUAL_SELECTOR: `$use_manual_selector`,
        INFERENCE_DATA_PRESENT: `$inference_data_present`,
        TOUR_LAST_SEEN_DATE: `$product_tour_last_seen_date`,
        TOUR_TYPE: `$product_tour_type`
    },
    Gr = U(`[RateLimiter]`),
    Kr = class {
        constructor(e) {
            this.serverLimits = {}, this.lastEventRateLimited = !1, this.checkForLimiting = e => {
                var t = e.text;
                if (t && t.length) try {
                    (JSON.parse(t).quota_limited || []).forEach((e => {
                        Gr.info((e || `events`) + ` is quota limited.`), this.serverLimits[e] = new Date().getTime() + 6e4
                    }))
                } catch (e) {
                    Gr.warn(`could not rate limit - continuing. Error: "` + e ?.message + `"`, {
                        text: t
                    });
                    return
                }
            }, this.instance = e, this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited
        }
        get captureEventsPerSecond() {
            return this.instance.config.rate_limiting ?.events_per_second || 10
        }
        get captureEventsBurstLimit() {
            return Math.max(this.instance.config.rate_limiting ?.events_burst_limit || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond)
        }
        clientRateLimitContext(e) {
            var t;
            e === void 0 && (e = !1);
            var {
                captureEventsBurstLimit: n,
                captureEventsPerSecond: r
            } = this, i = new Date().getTime(), a = this.instance.persistence ?.get_property(dn) ?? {
                tokens: n,
                last: i
            };
            a.tokens += (i - a.last) / 1e3 * r, a.last = i, a.tokens > n && (a.tokens = n);
            var o = 1 > a.tokens;
            return o || e || (a.tokens = Math.max(0, a.tokens - 1)), !o || this.lastEventRateLimited || e || this.instance.capture(`$$client_ingestion_warning`, {
                $$client_ingestion_warning_message: `posthog-js client rate limited. Config is set to ` + r + ` events per second and ` + n + ` events burst limit.`
            }, {
                skip_client_rate_limiting: !0
            }), this.lastEventRateLimited = o, (t = this.instance.persistence) == null || t.set_property(dn, a), {
                isRateLimited: o,
                remainingTokens: a.tokens
            }
        }
        isServerRateLimited(e) {
            var t = this.serverLimits[e || `events`] || !1;
            return !1 !== t && new Date().getTime() < t
        }
    },
    qr = U(`[RemoteConfig]`),
    Jr = class {
        constructor(e) {
            this._instance = e
        }
        get remoteConfig() {
            var e;
            return (e = u._POSTHOG_REMOTE_CONFIG) == null || (e = e[this._instance.config.token]) == null ? void 0 : e.config
        }
        wi(e) {
            var t, n;
            (t = u.__PosthogExtensions__) != null && t.loadExternalDependency ? (n = u.__PosthogExtensions__) == null || n.loadExternalDependency == null || n.loadExternalDependency(this._instance, `remote-config`, (() => e(this.remoteConfig))) : e()
        }
        Ii(e) {
            this._instance._send_request({
                method: `GET`,
                url: this._instance.requestRouter.endpointFor(`assets`, `/array/` + this._instance.config.token + `/config`),
                callback(t) {
                    e(t.json)
                }
            })
        }
        load() {
            try {
                if (this.remoteConfig) return qr.info(`Using preloaded remote config`, this.remoteConfig), this.Ci(this.remoteConfig), void this.Si();
                if (this._instance.ki()) return void qr.warn(`Remote config is disabled. Falling back to local config.`);
                this.wi((e => {
                    if (!e) return qr.info(`No config found after loading remote JS config. Falling back to JSON.`), void this.Ii((e => {
                        this.Ci(e), this.Si()
                    }));
                    this.Ci(e), this.Si()
                }))
            } catch (e) {
                qr.error(`Error loading remote config`, e)
            }
        }
        stop() {
            this.xi &&= (clearInterval(this.xi), void 0)
        }
        refresh() {
            this._instance.ki() || r ?.visibilityState === `hidden` || this._instance.reloadFeatureFlags()
        }
        Si() {
            if (!this.xi) {
                var e = this._instance.config.remote_config_refresh_interval_ms ?? 3e5;
                e !== 0 && (this.xi = setInterval((() => {
                    this.refresh()
                }), e))
            }
        }
        Ci(e) {
            var t;
            e || qr.error(`Failed to fetch remote config from PostHog.`), this._instance.Ci(e ?? {}), !1 !== e ?.hasFeatureFlags && (this._instance.config.advanced_disable_feature_flags_on_first_load || (t = this._instance.featureFlags) == null || t.ensureFlagsLoaded())
        }
    },
    Yr = [`fatal`, `error`, `warning`, `log`, `info`, `debug`],
    Xr = {
        GZipJS: `gzip-js`,
        Base64: `base64`
    },
    Y = Uint8Array,
    X = Uint16Array,
    Zr = Uint32Array,
    Qr = new Y([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
    $r = new Y([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
    ei = new Y([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
    ti = function(e, t) {
        for (var n = new X(31), r = 0; 31 > r; ++r) n[r] = t += 1 << e[r - 1];
        var i = new Zr(n[30]);
        for (r = 1; 30 > r; ++r)
            for (var a = n[r]; n[r + 1] > a; ++a) i[a] = a - n[r] << 5 | r;
        return [n, i]
    },
    ni = ti(Qr, 2),
    ri = ni[1];
ni[0][28] = 258, ri[258] = 28;
for (var ii = ti($r, 0)[1], ai = new X(32768), Z = 0; 32768 > Z; ++Z) {
    var oi = (43690 & Z) >>> 1 | (21845 & Z) << 1;
    ai[Z] = ((65280 & (oi = (61680 & (oi = (52428 & oi) >>> 2 | (13107 & oi) << 2)) >>> 4 | (3855 & oi) << 4)) >>> 8 | (255 & oi) << 8) >>> 1
}
var si = function(e, t, n) {
        for (var r = e.length, i = 0, a = new X(t); r > i; ++i) ++a[e[i] - 1];
        var o, s = new X(t);
        for (i = 0; t > i; ++i) s[i] = s[i - 1] + a[i - 1] << 1;
        if (n) {
            o = new X(1 << t);
            var c = 15 - t;
            for (i = 0; r > i; ++i)
                if (e[i])
                    for (var l = i << 4 | e[i], u = t - e[i], d = s[e[i] - 1]++ << u, f = d | (1 << u) - 1; f >= d; ++d) o[ai[d] >>> c] = l
        } else
            for (o = new X(r), i = 0; r > i; ++i) o[i] = ai[s[e[i] - 1]++] >>> 15 - e[i];
        return o
    },
    ci = new Y(288);
for (Z = 0; 144 > Z; ++Z) ci[Z] = 8;
for (Z = 144; 256 > Z; ++Z) ci[Z] = 9;
for (Z = 256; 280 > Z; ++Z) ci[Z] = 7;
for (Z = 280; 288 > Z; ++Z) ci[Z] = 8;
var li = new Y(32);
for (Z = 0; 32 > Z; ++Z) li[Z] = 5;
var ui = si(ci, 9, 0),
    di = si(li, 5, 0),
    fi = function(e) {
        return (e / 8 >> 0) + (7 & e && 1)
    },
    pi = function(e, t, n) {
        (n == null || n > e.length) && (n = e.length);
        var r = new(e instanceof X ? X : e instanceof Zr ? Zr : Y)(n - t);
        return r.set(e.subarray(t, n)), r
    },
    mi = function(e, t, n) {
        var r = t / 8 >> 0;
        e[r] |= n <<= 7 & t, e[r + 1] |= n >>> 8
    },
    hi = function(e, t, n) {
        var r = t / 8 >> 0;
        e[r] |= n <<= 7 & t, e[r + 1] |= n >>> 8, e[r + 2] |= n >>> 16
    },
    gi = function(e, t) {
        for (var n = [], r = 0; e.length > r; ++r) e[r] && n.push({
            s: r,
            f: e[r]
        });
        var i = n.length,
            a = n.slice();
        if (!i) return [new Y(0), 0];
        if (i == 1) {
            var o = new Y(n[0].s + 1);
            return o[n[0].s] = 1, [o, 1]
        }
        n.sort((function(e, t) {
            return e.f - t.f
        })), n.push({
            s: -1,
            f: 25001
        });
        var s = n[0],
            c = n[1],
            l = 0,
            u = 1,
            d = 2;
        for (n[0] = {
                s: -1,
                f: s.f + c.f,
                l: s,
                r: c
            }; u != i - 1;) s = n[n[d].f > n[l].f ? l++ : d++], c = n[l != u && n[d].f > n[l].f ? l++ : d++], n[u++] = {
            s: -1,
            f: s.f + c.f,
            l: s,
            r: c
        };
        var f = a[0].s;
        for (r = 1; i > r; ++r) a[r].s > f && (f = a[r].s);
        var p = new X(f + 1),
            m = _i(n[u - 1], p, 0);
        if (m > t) {
            r = 0;
            var h = 0,
                g = m - t,
                _ = 1 << g;
            for (a.sort((function(e, t) {
                    return p[t.s] - p[e.s] || e.f - t.f
                })); i > r; ++r) {
                var v = a[r].s;
                if (t >= p[v]) break;
                h += _ - (1 << m - p[v]), p[v] = t
            }
            for (h >>>= g; h > 0;) {
                var y = a[r].s;
                t > p[y] ? h -= 1 << t - p[y]++ - 1 : ++r
            }
            for (; r >= 0 && h; --r) {
                var b = a[r].s;
                p[b] == t && (--p[b], ++h)
            }
            m = t
        }
        return [new Y(p), m]
    },
    _i = function(e, t, n) {
        return e.s == -1 ? Math.max(_i(e.l, t, n + 1), _i(e.r, t, n + 1)) : t[e.s] = n
    },
    vi = function(e) {
        for (var t = e.length; t && !e[--t];);
        for (var n = new X(++t), r = 0, i = e[0], a = 1, o = function(e) {
                n[r++] = e
            }, s = 1; t >= s; ++s)
            if (e[s] == i && s != t) ++a;
            else {
                if (!i && a > 2) {
                    for (; a > 138; a -= 138) o(32754);
                    a > 2 && (o(a > 10 ? a - 11 << 5 | 28690 : a - 3 << 5 | 12305), a = 0)
                } else if (a > 3) {
                    for (o(i), --a; a > 6; a -= 6) o(8304);
                    a > 2 && (o(a - 3 << 5 | 8208), a = 0)
                }
                for (; a--;) o(i);
                a = 1, i = e[s]
            }
        return [n.subarray(0, r), t]
    },
    yi = function(e, t) {
        for (var n = 0, r = 0; t.length > r; ++r) n += e[r] * t[r];
        return n
    },
    bi = function(e, t, n) {
        var r = n.length,
            i = fi(t + 2);
        e[i] = 255 & r, e[i + 1] = r >>> 8, e[i + 2] = 255 ^ e[i], e[i + 3] = 255 ^ e[i + 1];
        for (var a = 0; r > a; ++a) e[i + a + 4] = n[a];
        return 8 * (i + 4 + r)
    },
    xi = function(e, t, n, r, i, a, o, s, c, l, u) {
        mi(t, u++, n), ++i[256];
        for (var d = gi(i, 15), f = d[0], p = d[1], m = gi(a, 15), h = m[0], g = m[1], _ = vi(f), v = _[0], y = _[1], b = vi(h), x = b[0], S = b[1], C = new X(19), w = 0; v.length > w; ++w) C[31 & v[w]]++;
        for (w = 0; x.length > w; ++w) C[31 & x[w]]++;
        for (var ee = gi(C, 7), T = ee[0], E = ee[1], D = 19; D > 4 && !T[ei[D - 1]]; --D);
        var O, k, A, j, M = l + 5 << 3,
            N = yi(i, ci) + yi(a, li) + o,
            P = yi(i, f) + yi(a, h) + o + 14 + 3 * D + yi(C, T) + (2 * C[16] + 3 * C[17] + 7 * C[18]);
        if (N >= M && P >= M) return bi(t, u, e.subarray(c, c + l));
        if (mi(t, u, 1 + (N > P)), u += 2, N > P) {
            O = si(f, p, 0), k = f, A = si(h, g, 0), j = h;
            var F = si(T, E, 0);
            for (mi(t, u, y - 257), mi(t, u + 5, S - 1), mi(t, u + 10, D - 4), u += 14, w = 0; D > w; ++w) mi(t, u + 3 * w, T[ei[w]]);
            u += 3 * D;
            for (var I = [v, x], L = 0; 2 > L; ++L) {
                var te = I[L];
                for (w = 0; te.length > w; ++w) mi(t, u, F[ne = 31 & te[w]]), u += T[ne], ne > 15 && (mi(t, u, te[w] >>> 5 & 127), u += te[w] >>> 12)
            }
        } else O = ui, k = ci, A = di, j = li;
        for (w = 0; s > w; ++w)
            if (r[w] > 255) {
                var ne;
                hi(t, u, O[257 + (ne = r[w] >>> 18 & 31)]), u += k[ne + 257], ne > 7 && (mi(t, u, r[w] >>> 23 & 31), u += Qr[ne]);
                var R = 31 & r[w];
                hi(t, u, A[R]), u += j[R], R > 3 && (hi(t, u, r[w] >>> 5 & 8191), u += $r[R])
            } else hi(t, u, O[r[w]]), u += k[r[w]];
        return hi(t, u, O[256]), u + k[256]
    },
    Si = new Zr([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
    Ci = function() {
        for (var e = new Zr(256), t = 0; 256 > t; ++t) {
            for (var n = t, r = 9; --r;) n = (1 & n && 3988292384) ^ n >>> 1;
            e[t] = n
        }
        return e
    }(),
    wi = function(e, t, n) {
        for (; n; ++t) e[t] = n, n >>>= 8
    };

function Ti(e, t) {
    t === void 0 && (t = {});
    var n = function() {
            var e = 4294967295;
            return {
                p(t) {
                    for (var n = e, r = 0; t.length > r; ++r) n = Ci[255 & n ^ t[r]] ^ n >>> 8;
                    e = n
                },
                d() {
                    return 4294967295 ^ e
                }
            }
        }(),
        r = e.length;
    n.p(e);
    var i, a, o, s, c, l = (s = 10 + ((i = t).filename && i.filename.length + 1 || 0), c = 8, function(e, t, n, r, i, a) {
            var o = e.length,
                s = new Y(r + o + 5 * (1 + Math.floor(o / 7e3)) + i),
                c = s.subarray(r, s.length - i),
                l = 0;
            if (!t || 8 > o)
                for (var u = 0; o >= u; u += 65535) {
                    var d = u + 65535;
                    o > d ? l = bi(c, l, e.subarray(u, d)) : (c[u] = !0, l = bi(c, l, e.subarray(u, o)))
                } else {
                    for (var f = Si[t - 1], p = f >>> 13, m = 8191 & f, h = (1 << n) - 1, g = new X(32768), _ = new X(h + 1), v = Math.ceil(n / 3), y = 2 * v, b = function(t) {
                            return (e[t] ^ e[t + 1] << v ^ e[t + 2] << y) & h
                        }, x = new Zr(25e3), S = new X(288), C = new X(32), w = 0, ee = 0, T = (u = 0, 0), E = 0, D = 0; o > u; ++u) {
                        var O = b(u),
                            k = 32767 & u,
                            A = _[O];
                        if (g[k] = A, _[O] = k, u >= E) {
                            var j = o - u;
                            if ((w > 7e3 || T > 24576) && j > 423) {
                                l = xi(e, c, 0, x, S, C, ee, T, D, u - D, l), T = w = ee = 0, D = u;
                                for (var M = 0; 286 > M; ++M) S[M] = 0;
                                for (M = 0; 30 > M; ++M) C[M] = 0
                            }
                            var N = 2,
                                P = 0,
                                F = m,
                                I = k - A & 32767;
                            if (j > 2 && O == b(u - I))
                                for (var L = Math.min(p, j) - 1, te = Math.min(32767, u), ne = Math.min(258, j); te >= I && --F && k != A;) {
                                    if (e[u + N] == e[u + N - I]) {
                                        for (var R = 0; ne > R && e[u + R] == e[u + R - I]; ++R);
                                        if (R > N) {
                                            if (N = R, P = I, R > L) break;
                                            var re = Math.min(I, R - 2),
                                                ie = 0;
                                            for (M = 0; re > M; ++M) {
                                                var ae = u - I + M + 32768 & 32767,
                                                    oe = ae - g[ae] + 32768 & 32767;
                                                oe > ie && (ie = oe, A = ae)
                                            }
                                        }
                                    }
                                    I += (k = A) - (A = g[k]) + 32768 & 32767
                                }
                            if (P) {
                                x[T++] = 268435456 | ri[N] << 18 | ii[P];
                                var se = 31 & ri[N],
                                    z = 31 & ii[P];
                                ee += Qr[se] + $r[z], ++S[257 + se], ++C[z], E = u + N, ++w
                            } else x[T++] = e[u], ++S[e[u]]
                        }
                    }
                    l = xi(e, c, !0, x, S, C, ee, T, D, u - D, l)
                }
            return pi(s, 0, r + fi(l) + i)
        }(a = e, (o = t).level == null ? 6 : o.level, o.mem == null ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(a.length)))) : 12 + o.mem, s, c)),
        u = l.length;
    return function(e, t) {
        var n = t.filename;
        if (e[0] = 31, e[1] = 139, e[2] = 8, e[8] = 2 > t.level ? 4 : t.level == 9 ? 2 : 0, e[9] = 3, t.mtime != 0 && wi(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)), n) {
            e[3] = 8;
            for (var r = 0; n.length >= r; ++r) e[r + 10] = n.charCodeAt(r)
        }
    }(l, t), wi(l, u - 8, n.d()), wi(l, u - 4, r), l
}
var Ei = !!o || !!a,
    Di = `text/plain`,
    Oi = !1,
    ki = function(e, t, n) {
        n === void 0 && (n = !0);
        var [r, i] = e.split(`?`), a = h({}, t), o = i ?.split(`&`).map((e => {
            var t, [r, i] = e.split(`=`),
                o = n && (t = a[r]) != null ? t : i;
            return delete a[r], r + `=` + o
        })) ?? [], s = function(e, t) {
            var n, r;
            t === void 0 && (t = `&`);
            var i = [];
            return W(e, (function(e, t) {
                A(e) || A(t) || t === `undefined` || (n = encodeURIComponent((e => e instanceof File)(e) ? e.name : e.toString()), r = encodeURIComponent(t), i[i.length] = r + `=` + n)
            })), i.join(t)
        }(a);
        return s && o.push(s), r + `?` + o.join(`&`)
    },
    Ai = (e, t) => JSON.stringify(e, ((e, t) => typeof t == `bigint` ? t.toString() : t), t),
    ji = e => {
        if (e.zt) return e.zt;
        var {
            data: t,
            compression: n
        } = e;
        if (t) {
            if (n === Xr.GZipJS) {
                var r = Ti(function(e, t) {
                    var n = e.length;
                    if (typeof TextEncoder < `u`) return new TextEncoder().encode(e);
                    for (var r = new Y(e.length + (e.length >>> 1)), i = 0, a = function(e) {
                            r[i++] = e
                        }, o = 0; n > o; ++o) {
                        if (i + 5 > r.length) {
                            var s = new Y(i + 8 + (n - o << 1));
                            s.set(r), r = s
                        }
                        var c = e.charCodeAt(o);
                        128 > c ? a(c) : 2048 > c ? (a(192 | c >>> 6), a(128 | 63 & c)) : c > 55295 && 57344 > c ? (a(240 | (c = 65536 + (1047552 & c) | 1023 & e.charCodeAt(++o)) >>> 18), a(128 | c >>> 12 & 63), a(128 | c >>> 6 & 63), a(128 | 63 & c)) : (a(224 | c >>> 12), a(128 | c >>> 6 & 63), a(128 | 63 & c))
                    }
                    return pi(r, 0, i)
                }(Ai(t)), {
                    mtime: 0
                });
                return {
                    contentType: Di,
                    body: r.buffer.slice(r.byteOffset, r.byteOffset + r.byteLength),
                    estimatedSize: r.byteLength
                }
            }
            if (n === Xr.Base64) {
                var i = (e => `data=` + encodeURIComponent(typeof e == `string` ? e : Ai(e)))(function(e) {
                    return e && btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, ((e, t) => String.fromCharCode(parseInt(t, 16)))))
                }(Ai(t)));
                return {
                    contentType: `application/x-www-form-urlencoded`,
                    body: i,
                    estimatedSize: new Blob([i]).size
                }
            }
            var a = Ai(t);
            return {
                contentType: `application/json`,
                body: a,
                estimatedSize: new Blob([a]).size
            }
        }
    },
    Mi = function() {
        var e = m((function*(e) {
            var t = yield function(e, t, n) {
                return _.apply(this, arguments)
            }(Ai(e.data), f.DEBUG, {
                rethrow: !0
            });
            if (!t) return e;
            var n = yield t.arrayBuffer();
            return h({}, e, {
                zt: {
                    contentType: Di,
                    body: n,
                    estimatedSize: n.byteLength
                }
            })
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    }(),
    Ni = (e, t) => ki(e, {
        _: new Date().getTime().toString(),
        ver: f.JS_SDK_VERSION,
        compression: t
    }),
    Pi = [];
a && Pi.push({
    transport: `fetch`,
    method(e) {
        var {
            contentType: t,
            body: n,
            estimatedSize: r
        } = ji(e) ?? {}, i = new Headers;
        W(e.headers, (function(e, t) {
            i.append(t, e)
        })), t && i.append(`Content-Type`, t);
        var o = e.url,
            c = null;
        if (s) {
            var l = new s;
            c = {
                signal: l.signal,
                timeout: setTimeout((() => l.abort()), e.timeout)
            }
        }
        a(o, h({
            method: e ?.method || `GET`,
            headers: i,
            keepalive: e.method === `POST` && 52428.8 > (r || 0),
            body: n,
            signal: c ?.signal
        }, e.fetchOptions)).then((t => t.text().then((n => {
            var r = {
                statusCode: t.status,
                text: n
            };
            if (t.status === 200) try {
                r.json = JSON.parse(n)
            } catch (e) {
                H.error(e)
            }
            e.callback == null || e.callback(r)
        })))).catch((t => {
            H.error(t), e.callback == null || e.callback({
                statusCode: 0,
                error: t
            })
        })).finally((() => c ? clearTimeout(c.timeout) : null))
    }
}), o && Pi.push({
    transport: `XHR`,
    method(e) {
        var t = new o;
        t.open(e.method || `GET`, e.url, !0);
        var {
            contentType: n,
            body: r
        } = ji(e) ?? {};
        W(e.headers, (function(e, n) {
            t.setRequestHeader(n, e)
        })), n && t.setRequestHeader(`Content-Type`, n), e.timeout && (t.timeout = e.timeout), e.disableXHRCredentials || (t.withCredentials = !0), t.onreadystatechange = () => {
            if (t.readyState === 4) {
                var n = {
                    statusCode: t.status,
                    text: t.responseText
                };
                if (t.status === 200) try {
                    n.json = JSON.parse(t.responseText)
                } catch {}
                e.callback == null || e.callback(n)
            }
        }, t.send(r)
    }
}), n != null && n.sendBeacon && Pi.push({
    transport: `sendBeacon`,
    method(e) {
        var t = ki(e.url, {
            beacon: `1`
        });
        try {
            var {
                contentType: r,
                body: i
            } = ji(e) ?? {};
            if (!i) return;
            var a = i instanceof Blob ? i : new Blob([i], {
                type: r
            });
            n.sendBeacon(t, a)
        } catch {}
    }
});
var Fi = 3e3,
    Ii = class {
        constructor(e, t) {
            this.Ti = !0, this.Ai = [], this.Ei = z(t ?.flush_interval_ms || Fi, 250, 5e3, H.createLogger(`flush interval`), Fi), this.Ri = e
        }
        enqueue(e) {
            this.Ai.push(e), this.Ni || this.Mi()
        }
        unload() {
            this.Fi();
            var e = this.Ai.length > 0 ? this.Oi() : {},
                t = Object.values(e);
            [...t.filter((e => e.url.indexOf(`/e`) === 0)), ...t.filter((e => e.url.indexOf(`/e`) !== 0))].map((e => {
                this.Ri(h({}, e, {
                    transport: `sendBeacon`
                }))
            }))
        }
        enable() {
            this.Ti = !1, this.Mi()
        }
        Mi() {
            var e = this;
            this.Ti || (this.Ni = setTimeout((() => {
                if (this.Fi(), this.Ai.length > 0) {
                    var t = this.Oi(),
                        n = function() {
                            var n = t[r],
                                i = new Date().getTime();
                            n.data && E(n.data) && W(n.data, (e => {
                                e.offset = Math.abs(e.timestamp - i), delete e.timestamp
                            })), e.Ri(n)
                        };
                    for (var r in t) n()
                }
            }), this.Ei))
        }
        Fi() {
            clearTimeout(this.Ni), this.Ni = void 0
        }
        Oi() {
            var e = {};
            return W(this.Ai, (t => {
                var n, r = t,
                    i = (r ? r.batchKey : null) || r.url;
                A(e[i]) && (e[i] = h({}, r, {
                    data: []
                })), (n = e[i].data) == null || n.push(r.data)
            })), this.Ai = [], e
        }
    },
    Li = [`retriesPerformedSoFar`],
    Ri = class {
        constructor(t) {
            this.Pi = !1, this.Li = 3e3, this.Ai = [], this._instance = t, this.Ai = [], this.Di = !0, !A(e) && `onLine` in e.navigator && (this.Di = e.navigator.onLine, this.Bi = () => {
                this.Di = !0, this.ji()
            }, this.qi = () => {
                this.Di = !1
            }, K(e, `online`, this.Bi), K(e, `offline`, this.qi))
        }
        get length() {
            return this.Ai.length
        }
        retriableRequest(e) {
            var {
                retriesPerformedSoFar: t
            } = e, n = g(e, Li);
            I(t) && (n.url = ki(n.url, {
                retry_count: t
            })), this._instance._send_request(h({}, n, {
                callback: e => {
                    e.statusCode === 200 || e.statusCode >= 400 && 500 > e.statusCode || (t ?? 0) >= 10 ? n.callback == null || n.callback(e) : this.Zi(h({
                        retriesPerformedSoFar: t
                    }, n))
                }
            }))
        }
        Zi(e) {
            var t = e.retriesPerformedSoFar || 0;
            e.retriesPerformedSoFar = t + 1;
            var n = function(e) {
                    var t = 3e3 * 2 ** e,
                        n = t / 2,
                        r = Math.min(18e5, t),
                        i = Math.random() - .5;
                    return Math.ceil(r + i * (r - n))
                }(t),
                r = Date.now() + n;
            this.Ai.push({
                retryAt: r,
                requestOptions: e
            });
            var i = `Enqueued failed request for retry in ` + n;
            navigator.onLine || (i += ` (Browser is offline)`), H.warn(i), this.Pi || (this.Pi = !0, this.$i())
        }
        $i() {
            if (this.Vi && clearTimeout(this.Vi), this.Ai.length === 0) return this.Pi = !1, void(this.Vi = void 0);
            this.Vi = setTimeout((() => {
                this.Di && this.Ai.length > 0 && this.ji(), this.$i()
            }), this.Li)
        }
        ji() {
            var e = Date.now(),
                t = [],
                n = this.Ai.filter((n => e > n.retryAt || (t.push(n), !1)));
            if (this.Ai = t, n.length > 0)
                for (var {
                        requestOptions: r
                    } of n) this.retriableRequest(r)
        }
        unload() {
            for (var {
                    requestOptions: t
                } of (this.Vi &&= (clearTimeout(this.Vi), void 0), this.Pi = !1, A(e) || (this.Bi &&= (e.removeEventListener(`online`, this.Bi), void 0), this.qi &&= (e.removeEventListener(`offline`, this.qi), void 0)), this.Ai)) try {
                this._instance._send_request(h({}, t, {
                    transport: `sendBeacon`
                }))
            } catch (e) {
                H.error(e)
            }
            this.Ai = []
        }
    },
    zi = class {
        constructor(e) {
            this.Hi = () => {
                this.zi ||= {};
                var e = this.scrollElement(),
                    t = this.scrollY(),
                    n = e ? Math.max(0, e.scrollHeight - e.clientHeight) : 0,
                    r = t + (e ?.clientHeight || 0),
                    i = e ?.scrollHeight || 0;
                this.zi.lastScrollY = Math.ceil(t), this.zi.maxScrollY = Math.max(t, this.zi.maxScrollY ?? 0), this.zi.maxScrollHeight = Math.max(n, this.zi.maxScrollHeight ?? 0), this.zi.lastContentY = r, this.zi.maxContentY = Math.max(r, this.zi.maxContentY ?? 0), this.zi.maxContentHeight = Math.max(i, this.zi.maxContentHeight ?? 0)
            }, this._instance = e
        }
        get Ui() {
            return this._instance.config.scroll_root_selector
        }
        getContext() {
            return this.zi
        }
        resetContext() {
            var e = this.zi;
            return setTimeout(this.Hi, 0), e
        }
        startMeasuringScrollPosition() {
            K(e, `scroll`, this.Hi, {
                capture: !0
            }), K(e, `scrollend`, this.Hi, {
                capture: !0
            }), K(e, `resize`, this.Hi)
        }
        scrollElement() {
            if (!this.Ui) return e ?.document.documentElement;
            for (var t of E(this.Ui) ? this.Ui : [this.Ui]) {
                var n = e ?.document.querySelector(t);
                if (n) return n
            }
        }
        scrollY() {
            if (this.Ui) {
                var t = this.scrollElement();
                return t && t.scrollTop || 0
            }
            return e && (e.scrollY || e.pageYOffset || e.document.documentElement.scrollTop) || 0
        }
        scrollX() {
            if (this.Ui) {
                var t = this.scrollElement();
                return t && t.scrollLeft || 0
            }
            return e && (e.scrollX || e.pageXOffset || e.document.documentElement.scrollLeft) || 0
        }
    },
    Bi = e => Tr(e ?.config.mask_personal_data_properties, e ?.config.custom_personal_data_properties),
    Vi = class {
        constructor(e, t, n, r) {
            this.Yi = e => {
                var t = this.Gi();
                if (!t || t.sessionId !== e) {
                    var n = {
                        sessionId: e,
                        props: this.Wi(this._instance)
                    };
                    this.Xi.register({
                        [un]: n
                    })
                }
            }, this._instance = e, this.Ji = t, this.Xi = n, this.Wi = r || Bi, this.Ji.onSessionId(this.Yi)
        }
        Gi() {
            return this.Xi.props[un]
        }
        getSetOnceProps() {
            var e = this.Gi() ?.props;
            return e ? `r` in e ? Er(e) : {
                $referring_domain: e.referringDomain,
                $pathname: e.initialPathName,
                utm_source: e.utm_source,
                utm_campaign: e.utm_campaign,
                utm_medium: e.utm_medium,
                utm_content: e.utm_content,
                utm_term: e.utm_term
            } : {}
        }
        getSessionProps() {
            var e = {};
            return W(Fn(this.getSetOnceProps()), ((t, n) => {
                n === `$current_url` && (n = `url`), e[`$session_entry_` + C(n)] = t
            })), e
        }
    },
    Hi = class {
        constructor() {
            this.Ki = {}
        }
        on(e, t) {
            return this.Ki[e] || (this.Ki[e] = []), this.Ki[e].push(t), () => {
                this.Ki[e] = this.Ki[e].filter((e => e !== t))
            }
        }
        emit(e, t) {
            for (var n of this.Ki[e] || []) n(t);
            for (var r of this.Ki[`*`] || []) r(e, t)
        }
    },
    Ui = U(`[SessionId]`),
    Wi = class {
        on(e, t) {
            return this.Qi.on(e, t)
        }
        constructor(e, t, n) {
            var r;
            if (this.tr = [], this.er = void 0, this.Qi = new Hi, this.ir = (e, t) => !(!I(e) || !I(t)) && Math.abs(e - t) > this.sessionTimeoutMs, !e.persistence) throw Error(`SessionIdManager requires a PostHogPersistence instance`);
            if (e.config.cookieless_mode === xn) throw Error(`SessionIdManager cannot be used with cookieless_mode="always"`);
            this.Rt = e.config, this.Xi = e.persistence, this.rr = void 0, this.nr = void 0, this._sessionStartTimestamp = null, this._sessionActivityTimestamp = null, this.sr = t || Wn, this.ar = n || Wn;
            var i = this.Rt.persistence_name || this.Rt.token;
            if (this._sessionTimeoutMs = 1e3 * z(this.Rt.session_idle_timeout_seconds || 1800, 60, 36e3, Ui.createLogger(`session_idle_timeout_seconds`), 1800), e.register({
                    $configured_session_timeout_ms: this._sessionTimeoutMs
                }), this.lr(), this.ur = `ph_` + i + `_window_id`, this.hr = `ph_` + i + `_primary_window_exists`, this.cr()) {
                var a = J.Wt(this.ur),
                    o = J.Wt(this.hr);
                a && !o ? this.rr = a : J.Jt(this.ur), J.Xt(this.hr, !0)
            }
            if ((r = this.Rt.bootstrap) != null && r.sessionID) try {
                var s = (e => {
                    var t = this.Rt.bootstrap.sessionID.replace(/-/g, ``);
                    if (t.length !== 32) throw Error(`Not a valid UUID`);
                    if (t[12] !== `7`) throw Error(`Not a UUIDv7`);
                    return parseInt(t.substring(0, 12), 16)
                })();
                this.dr(this.Rt.bootstrap.sessionID, new Date().getTime(), s)
            } catch (e) {
                Ui.error(`Invalid sessionID in bootstrap`, e)
            }
            this.vr()
        }
        get sessionTimeoutMs() {
            return this._sessionTimeoutMs
        }
        onSessionId(e) {
            return A(this.tr) && (this.tr = []), this.tr.push(e), this.nr && e(this.nr, this.rr), () => {
                this.tr = this.tr.filter((t => t !== e))
            }
        }
        cr() {
            return this.Rt.persistence !== `memory` && !this.Xi.fi && J.Ut()
        }
        pr(e) {
            e !== this.rr && (this.rr = e, this.cr() && J.Xt(this.ur, e))
        }
        gr() {
            return this.rr ? this.rr : this.cr() ? J.Wt(this.ur) : null
        }
        dr(e, t, n) {
            e === this.nr && t === this._sessionActivityTimestamp && n === this._sessionStartTimestamp || (this._sessionStartTimestamp = n, this._sessionActivityTimestamp = t, this.nr = e, this.Xi.register({
                [qt]: [t, e, n]
            }))
        }
        mr() {
            var e = this.Xi.props[qt];
            return E(e) && e.length === 2 && e.push(e[0]), e || [0, null, 0]
        }
        resetSessionId() {
            this.dr(null, null, null)
        }
        destroy() {
            clearTimeout(this.yr), this.yr = void 0, this.er && e && (e.removeEventListener(En, this.er, {
                capture: !1
            }), this.er = void 0), this.tr = []
        }
        vr() {
            this.er = () => {
                this.cr() && J.Jt(this.hr)
            }, K(e, En, this.er, {
                capture: !1
            })
        }
        checkAndGetSessionAndWindowId(e, t) {
            if (e === void 0 && (e = !1), t === void 0 && (t = null), this.Rt.cookieless_mode === xn) throw Error(`checkAndGetSessionAndWindowId should not be called with cookieless_mode="always"`);
            var n = t || new Date().getTime(),
                [r, i, a] = this.mr(),
                o = this.gr(),
                s = I(a) && Math.abs(n - a) > 864e5,
                c = !1,
                l = !i,
                u = !l && !e && this.ir(n, r);
            l || u || s ? (i = this.sr(), o = this.ar(), Ui.info(`new session ID generated`, {
                sessionId: i,
                windowId: o,
                changeReason: {
                    noSessionId: l,
                    activityTimeout: u,
                    sessionPastMaximumLength: s
                }
            }), a = n, c = !0) : o || (o = this.ar(), c = !0);
            var d = I(r) && e && !s ? r : n,
                f = I(a) ? a : new Date().getTime();
            return this.pr(o), this.dr(i, d, f), e || this.lr(), c && this.tr.forEach((e => e(i, o, c ? {
                noSessionId: l,
                activityTimeout: u,
                sessionPastMaximumLength: s
            } : void 0))), {
                sessionId: i,
                windowId: o,
                sessionStartTimestamp: f,
                changeReason: c ? {
                    noSessionId: l,
                    activityTimeout: u,
                    sessionPastMaximumLength: s
                } : void 0,
                lastActivityTimestamp: r
            }
        }
        lr() {
            clearTimeout(this.yr), this.yr = setTimeout((() => {
                var [e] = this.mr();
                if (this.ir(new Date().getTime(), e)) {
                    var t = this.nr;
                    this.resetSessionId(), this.Qi.emit(`forcedIdleReset`, {
                        idleSessionId: t
                    })
                }
            }), 1.1 * this.sessionTimeoutMs)
        }
    },
    Gi = function(e, t) {
        if (!e) return !1;
        var n = e.userAgent;
        if (n && b(n, t)) return !0;
        try {
            var r = e ?.userAgentData;
            if (r != null && r.brands && r.brands.some((e => b(e ?.brand, t)))) return !0
        } catch {}
        return !!e.webdriver
    },
    Ki = function(e, t) {
        if (! function(e) {
                try {
                    new RegExp(e)
                } catch {
                    return !1
                }
                return !0
            }(t)) return !1;
        try {
            return new RegExp(t).test(e)
        } catch {
            return !1
        }
    };

function qi(e, t, n) {
    return Ai({
        distinct_id: e,
        userPropertiesToSet: t,
        userPropertiesToSetOnce: n
    })
}
var Ji = {
        exact: (e, t) => t.some((t => e.some((e => t === e)))),
        is_not: (e, t) => t.every((t => e.every((e => t !== e)))),
        regex: (e, t) => t.some((t => e.some((e => Ki(t, e))))),
        not_regex: (e, t) => t.every((t => e.every((e => !Ki(t, e))))),
        icontains: (e, t) => t.map(Yi).some((t => e.map(Yi).some((e => t.includes(e))))),
        not_icontains: (e, t) => t.map(Yi).every((t => e.map(Yi).every((e => !t.includes(e))))),
        gt: (e, t) => t.some((t => {
            var n = parseFloat(t);
            return !isNaN(n) && e.some((e => n > parseFloat(e)))
        })),
        lt: (e, t) => t.some((t => {
            var n = parseFloat(t);
            return !isNaN(n) && e.some((e => n < parseFloat(e)))
        }))
    },
    Yi = e => e.toLowerCase();

function Xi(e, t) {
    return !e || Object.entries(e).every((e => {
        var [n, r] = e, i = t ?.[n];
        if (A(i) || N(i)) return !1;
        var a = [String(i)],
            o = Ji[r.operator];
        return !!o && o(r.values, a)
    }))
}
var Zi = `custom`,
    Qi = `i.posthog.com`,
    $i = /^\/static\//,
    ea = class {
        constructor(e) {
            this.br = {}, this.instance = e
        }
        get apiHost() {
            var e = this.instance.config.api_host.trim().replace(/\/$/, ``);
            return e === `https://app.posthog.com` ? `https://us.i.posthog.com` : e
        }
        get flagsApiHost() {
            var e = this.instance.config.flags_api_host;
            return e ? e.trim().replace(/\/$/, ``) : this.apiHost
        }
        get uiHost() {
            var e = this.instance.config.ui_host ?.replace(/\/$/, ``);
            return e ||= this.apiHost.replace(`.` + Qi, `.posthog.com`), e === `https://app.posthog.com` ? `https://us.posthog.com` : e
        }
        get region() {
            return this.br[this.apiHost] || (this.br[this.apiHost] = /https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? `us` : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? `eu` : Zi), this.br[this.apiHost]
        }
        wr(e) {
            var t = this.instance.config.__preview_external_dependency_versioned_paths;
            if (typeof t == `string` && $i.test(e)) return t.trim().replace(/\/$/, ``) || void 0
        }
        endpointFor(e, t) {
            if (t === void 0 && (t = ``), t &&= t[0] === `/` ? t : `/` + t, e === `ui`) return this.uiHost + t;
            if (e === `flags`) return this.flagsApiHost + t;
            if (e === `assets`) {
                var n = this.wr(t);
                if (n) return `` + n + t
            }
            if (this.region === Zi) return this.apiHost + t;
            var r = Qi + t;
            switch (e) {
                case `assets`:
                    return `https://` + this.region + `-assets.` + r;
                case `api`:
                    return `https://` + this.region + `.` + r
            }
        }
    },
    Q = U(`[Surveys]`),
    ta = `seenSurvey_`,
    na = (e, t) => {
        var n = `$survey_` + t + `/` + e.id;
        return e.current_iteration && e.current_iteration > 0 && (n = `$survey_` + t + `/` + e.id + `/` + e.current_iteration), n
    },
    ra = e => ((e, t) => {
        var n = `` + ta + t.id;
        return t.current_iteration && t.current_iteration > 0 && (n = `` + ta + t.id + `_` + t.current_iteration), n
    })(0, e),
    ia = [Fr.Popover, Fr.Widget, Fr.API],
    aa = {
        ignoreConditions: !1,
        ignoreDelay: !1,
        displayType: Vr.Popover
    },
    oa = U(`[PostHog ExternalIntegrations]`),
    sa = {
        intercom: `intercom-integration`,
        crispChat: `crisp-chat-integration`
    },
    ca = class {
        constructor(e) {
            this._instance = e
        }
        ni(e, t) {
            var n;
            (n = u.__PosthogExtensions__) == null || n.loadExternalDependency == null || n.loadExternalDependency(this._instance, e, (e => {
                if (e) return oa.error(`failed to load script`, e);
                t()
            }))
        }
        startIfEnabledOrStop() {
            var e = this,
                t = function(t) {
                    var n, i, a;
                    !r || (n = u.__PosthogExtensions__) != null && (n = n.integrations) != null && n[t] || e.ni(sa[t], (() => {
                        var n;
                        (n = u.__PosthogExtensions__) == null || (n = n.integrations) == null || (n = n[t]) == null || n.start(e._instance)
                    })), !r && (i = u.__PosthogExtensions__) != null && (i = i.integrations) != null && i[t] && ((a = u.__PosthogExtensions__) == null || (a = a.integrations) == null || (a = a[t]) == null || a.stop())
                };
            for (var [n, r] of Object.entries((i = this._instance.config.integrations) ?? {})) {
                var i;
                t(n)
            }
        }
    },
    la, ua = {},
    da = 0,
    fa = () => {},
    pa = `Consent opt in/out is not valid with cookieless_mode="always" and will be ignored`,
    ma = `Surveys module not available`,
    ha = `sanitize_properties is deprecated. Use before_send instead`,
    ga = `Invalid value for property_denylist config: `,
    _a = `posthog`,
    va = !Ei && l ?.indexOf(`MSIE`) === -1 && l ?.indexOf(`Mozilla`) === -1,
    ya = t => {
        var n;
        return h({
            api_host: `https://us.i.posthog.com`,
            flags_api_host: null,
            ui_host: null,
            token: ``,
            autocapture: !0,
            cross_subdomain_cookie: Ln(r ?.location),
            persistence: `localStorage+cookie`,
            persistence_name: ``,
            cookie_persisted_properties: [],
            loaded: fa,
            save_campaign_params: !0,
            custom_campaign_params: [],
            custom_blocked_useragents: [],
            save_referrer: !0,
            capture_pageleave: `if_capture_pageview`,
            defaults: t ?? `unset`,
            __preview_deferred_init_extensions: !1,
            __preview_external_dependency_versioned_paths: !1,
            debug: i && j(i ?.search) && i.search.indexOf(`__posthog_debug=true`) !== -1 || !1,
            cookie_expiration: 365,
            upgrade: !1,
            disable_session_recording: !1,
            disable_persistence: !1,
            disable_web_experiments: !0,
            disable_surveys: !1,
            disable_surveys_automatic_display: !1,
            disable_conversations: !1,
            disable_product_tours: !1,
            disable_external_dependency_loading: !1,
            enable_recording_console_log: void 0,
            secure_cookie: (e == null || (n = e.location) == null ? void 0 : n.protocol) === `https:`,
            ip: !1,
            opt_out_capturing_by_default: !1,
            opt_out_persistence_by_default: !1,
            opt_out_useragent_filter: !1,
            opt_out_capturing_persistence_type: `localStorage`,
            consent_persistence_name: null,
            opt_out_capturing_cookie_prefix: null,
            opt_in_site_apps: !1,
            property_denylist: [],
            respect_dnt: !1,
            sanitize_properties: null,
            request_headers: {},
            request_batching: !0,
            properties_string_max_length: 65535,
            mask_all_element_attributes: !1,
            mask_all_text: !1,
            mask_personal_data_properties: !1,
            custom_personal_data_properties: [],
            advanced_disable_flags: !1,
            advanced_disable_decide: !1,
            advanced_disable_feature_flags: !1,
            advanced_disable_feature_flags_on_first_load: !1,
            advanced_only_evaluate_survey_feature_flags: !1,
            advanced_feature_flags_dedup_per_session: !1,
            advanced_enable_surveys: !1,
            advanced_disable_toolbar_metrics: !1,
            feature_flag_request_timeout_ms: 3e3,
            surveys_request_timeout_ms: 1e4,
            on_request_error(e) {
                H.error(`Bad HTTP status: ` + e.statusCode + ` ` + e.text)
            },
            get_device_id: e => e,
            capture_performance: void 0,
            name: `posthog`,
            bootstrap: {},
            disable_compression: !1,
            session_idle_timeout_seconds: 1800,
            person_profiles: wn,
            before_send: void 0,
            request_queue_config: {
                flush_interval_ms: Fi
            },
            error_tracking: {},
            _onCapture: fa,
            __preview_eager_load_replay: !1
        }, (e => ({
            rageclick: !e || `2025-11-30` > e || {
                content_ignorelist: !0
            },
            capture_pageview: !e || `2025-05-24` > e || `history_change`,
            session_recording: e && e >= `2025-11-30` ? {
                strictMinimumDuration: !0
            } : {},
            external_scripts_inject_target: e && e >= `2026-01-30` ? `head` : `body`,
            internal_or_test_user_hostname: e && e >= `2026-01-30` ? /^(localhost|127\.0\.0\.1)$/ : void 0
        }))(t))
    },
    ba = [
        [`process_person`, `person_profiles`],
        [`xhr_headers`, `request_headers`],
        [`cookie_name`, `persistence_name`],
        [`disable_cookie`, `disable_persistence`],
        [`store_google`, `save_campaign_params`],
        [`verbose`, `debug`]
    ],
    xa = e => {
        var t = {};
        for (var [n, r] of ba) A(e[n]) || (t[r] = e[n]);
        var i = G({}, t, e);
        return E(e.property_blacklist) && (A(e.property_denylist) ? i.property_denylist = e.property_blacklist : E(e.property_denylist) ? i.property_denylist = [...e.property_blacklist, ...e.property_denylist] : H.error(ga + e.property_denylist)), i
    },
    Sa = class {
        constructor() {
            this.__forceAllowLocalhost = !1
        }
        get _r() {
            return this.__forceAllowLocalhost
        }
        set _r(e) {
            H.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = e
        }
    },
    Ca = class t {
        Ir(e, t) {
            if (e) {
                var n = this.Cr.indexOf(e);
                n !== -1 && this.Cr.splice(n, 1)
            }
            return this.Cr.push(t), t.initialize == null || t.initialize(), t
        }
        get decideEndpointWasHit() {
            var e;
            return (e = this.featureFlags ?.hasLoadedFlags) != null && e
        }
        get flagsEndpointWasHit() {
            var e;
            return (e = this.featureFlags ?.hasLoadedFlags) != null && e
        }
        constructor() {
            this.webPerformance = new Sa, this.Sr = !1, this.version = f.LIB_VERSION, this.kr = new Hi, this.Cr = [], this._calculate_event_properties = this.calculateEventProperties.bind(this), this.config = ya(), this.SentryIntegration = cr, this.sentryIntegration = e => function(e, t) {
                var n = sr(e, t);
                return {
                    name: or,
                    processEvent: e => n(e)
                }
            }(this, e), this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = `/e/`, this.Tr = !1, this.Ar = null, this.Er = null, this.Rr = null, this.scrollManager = new zi(this), this.pageViewManager = new lr(this), this.rateLimiter = new Kr(this), this.requestRouter = new ea(this), this.consent = new er(this), this.externalIntegrations = new ca(this);
            var e = t.__defaultExtensionClasses ?? {};
            this.featureFlags = e.featureFlags && new e.featureFlags(this), this.toolbar = e.toolbar && new e.toolbar(this), this.surveys = e.surveys && new e.surveys(this), this.conversations = e.conversations && new e.conversations(this), this.logs = e.logs && new e.logs(this), this.experiments = e.experiments && new e.experiments(this), this.exceptions = e.exceptions && new e.exceptions(this), this.people = {
                set: (e, t, n) => {
                    var r = j(e) ? {
                        [e]: t
                    } : e;
                    this.setPersonProperties(r), n ?.({})
                },
                set_once: (e, t, n) => {
                    var r = j(e) ? {
                        [e]: t
                    } : e;
                    this.setPersonProperties(void 0, r), n ?.({})
                }
            }, this.on(`eventCaptured`, (e => H.info(`send "` + e ?.event + `"`, e)))
        }
        init(e, n, r) {
            if (r && r !== _a) {
                var i = ua[r] ?? new t;
                return i._init(e, n, r), ua[r] = i, ua[_a][r] = i, i
            }
            return this._init(e, n, r)
        }
        _init(t, n, r) {
            var i;
            if (n === void 0 && (n = {}), A(t) || M(t)) return H.critical(`PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()`), this;
            if (this.__loaded) return this;
            this.__loaded = !0, this.config = {}, n.debug = this.Nr(n.debug), this.Mr = n, this.Fr = [], n.person_profiles ? this.Er = n.person_profiles : n.process_person && (this.Er = n.process_person), this.set_config(G({}, ya(n.defaults), xa(n), {
                name: r,
                token: t
            })), this.config.on_xhr_error && H.error(`on_xhr_error is deprecated. Use on_request_error instead`), this.compression = n.disable_compression ? void 0 : Xr.GZipJS;
            var a = this.Or();
            this.persistence = new Ar(this.config, a), this.sessionPersistence = this.config.persistence === `sessionStorage` || this.config.persistence === `memory` ? this.persistence : new Ar(h({}, this.config, {
                persistence: `sessionStorage`
            }), a);
            var o = h({}, this.persistence.props),
                s = h({}, this.sessionPersistence.props);
            this.register({
                $initialization_time: new Date().toISOString()
            }), this.Pr = new Ii((e => this.Lr(e)), this.config.request_queue_config), this.Dr = new Ri(this), this.__request_queue = [];
            var c = this.config.cookieless_mode === xn || this.config.cookieless_mode === bn && this.consent.isExplicitlyOptedOut();
            if (c || (this.sessionManager = new Wi(this), this.sessionPropsManager = new Vi(this, this.sessionManager, this.persistence)), this.config.__preview_deferred_init_extensions ? (H.info(`Deferring extension initialization to improve startup performance`), setTimeout((() => {
                    this.Br(c)
                }), 0)) : (H.info(`Initializing extensions synchronously`), this.Br(c)), f.DEBUG = f.DEBUG || this.config.debug, f.DEBUG && H.info(`Starting in debug mode`, {
                    this: this,
                    config: n,
                    thisC: h({}, this.config),
                    p: o,
                    s
                }), !this.config.identity_distinct_id || (i = n.bootstrap) != null && i.distinctID || (n.bootstrap = h({}, n.bootstrap, {
                    distinctID: this.config.identity_distinct_id,
                    isIdentifiedID: !0
                })), n.bootstrap ?.distinctID !== void 0) {
                var l = n.bootstrap.distinctID,
                    u = this.get_distinct_id(),
                    d = this.persistence.get_property(ln);
                if (n.bootstrap.isIdentifiedID && u != null && u !== l && d === Sn) this.identify(l);
                else if (n.bootstrap.isIdentifiedID && u != null && u !== l && d === Cn) H.warn(`Bootstrap distinctID differs from an already-identified user. The existing identity is preserved. Call reset() before reinitializing if you intend to switch users.`);
                else {
                    var p = this.config.get_device_id(Wn()),
                        m = n.bootstrap.isIdentifiedID ? p : l;
                    this.persistence.set_property(ln, n.bootstrap.isIdentifiedID ? Cn : Sn), this.register({
                        distinct_id: l,
                        $device_id: m
                    })
                }
            }
            if (c) this.register_once({
                distinct_id: _n,
                $device_id: null
            }, ``);
            else if (!this.get_distinct_id()) {
                var g = this.config.get_device_id(Wn());
                this.register_once({
                    distinct_id: g,
                    $device_id: g
                }, ``), this.persistence.set_property(ln, Sn)
            }
            return K(e, `onpagehide` in self ? `pagehide` : `unload`, this._handle_unload.bind(this), {
                passive: !1
            }), n.segment ? function(e, t) {
                var n = e.config.segment;
                if (!n) return t();
                (function(e, t) {
                    var n = e.config.segment;
                    if (!n) return t();
                    var r = n => {
                            var r = () => n.anonymousId() || Wn();
                            e.config.get_device_id = r, n.id() && (e.register({
                                distinct_id: n.id(),
                                $device_id: r()
                            }), e.persistence.set_property(ln, Cn)), t()
                        },
                        i = n.user();
                    `then` in i && D(i.then) ? i.then(r) : r(i)
                })(e, (() => {
                    n.register((e => {
                        Promise && Promise.resolve || ar.warn(`This browser does not have Promise support, and can not use the segment integration`);
                        var t = (t, n) => {
                            if (!n) return t;
                            t.event.userId || t.event.anonymousId === e.get_distinct_id() || (ar.info(`No userId set, resetting PostHog`), e.reset()), t.event.userId && t.event.userId !== e.get_distinct_id() && (ar.info(`UserId set, identifying with PostHog`), e.identify(t.event.userId));
                            var r = e.calculateEventProperties(n, t.event.properties);
                            return t.event.properties = Object.assign({}, r, t.event.properties), t
                        };
                        return {
                            name: `PostHog JS`,
                            type: `enrichment`,
                            version: `1.0.0`,
                            isLoaded: () => !0,
                            load: () => Promise.resolve(),
                            track: e => t(e, e.event.event),
                            page: e => t(e, Dn),
                            identify: e => t(e, kn),
                            screen: e => t(e, `$screen`)
                        }
                    })(e)).then((() => {
                        t()
                    }))
                }))
            }(this, (() => this.jr())) : this.jr(), D(this.config._onCapture) && this.config._onCapture !== fa && (H.warn("onCapture is deprecated. Please use `before_send` instead"), this.on(`eventCaptured`, (e => this.config._onCapture(e.event, e)))), this.config.ip && H.warn('The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or "Discard IP data" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information.'), this
        }
        Br(e) {
            var n = performance.now(),
                r = h({}, t.__defaultExtensionClasses, this.config.__extensionClasses),
                i = [];
            r.featureFlags && this.Cr.push(this.featureFlags = this.featureFlags ?? new r.featureFlags(this)), r.exceptions && this.Cr.push(this.exceptions = this.exceptions ?? new r.exceptions(this)), r.historyAutocapture && this.Cr.push(this.historyAutocapture = new r.historyAutocapture(this)), r.tracingHeaders && this.Cr.push(new r.tracingHeaders(this)), r.siteApps && this.Cr.push(this.siteApps = new r.siteApps(this)), r.sessionRecording && !e && this.Cr.push(this.sessionRecording = new r.sessionRecording(this)), this.config.disable_scroll_properties || i.push((() => {
                this.scrollManager.startMeasuringScrollPosition()
            })), r.autocapture && this.Cr.push(this.autocapture = new r.autocapture(this)), r.surveys && this.Cr.push(this.surveys = this.surveys ?? new r.surveys(this)), r.logs && this.Cr.push(this.logs = this.logs ?? new r.logs(this)), r.conversations && this.Cr.push(this.conversations = this.conversations ?? new r.conversations(this)), r.productTours && this.Cr.push(this.productTours = new r.productTours(this)), r.heatmaps && this.Cr.push(this.heatmaps = new r.heatmaps(this)), r.webVitalsAutocapture && this.Cr.push(this.webVitalsAutocapture = new r.webVitalsAutocapture(this)), r.exceptionObserver && this.Cr.push(this.exceptionObserver = new r.exceptionObserver(this)), r.deadClicksAutocapture && this.Cr.push(this.deadClicksAutocapture = new r.deadClicksAutocapture(this, rr)), r.toolbar && this.Cr.push(this.toolbar = this.toolbar ?? new r.toolbar(this)), r.experiments && this.Cr.push(this.experiments = this.experiments ?? new r.experiments(this)), this.Cr.forEach((e => {
                e.initialize && i.push((() => {
                    e.initialize == null || e.initialize()
                }))
            })), i.push((() => {
                if (this.qr) {
                    var e = this.qr;
                    this.qr = void 0, this.Ci(e)
                }
            })), this.Zr(i, n)
        }
        Zr(e, t) {
            for (; e.length > 0;) {
                if (this.config.__preview_deferred_init_extensions && performance.now() - t >= 30 && e.length > 0) return void setTimeout((() => {
                    this.Zr(e, t)
                }), 0);
                var n = e.shift();
                if (n) try {
                    n()
                } catch (e) {
                    H.error(`Error initializing extension:`, e)
                }
            }
            var r = Math.round(performance.now() - t);
            this.register_for_session({
                $sdk_debug_extensions_init_method: this.config.__preview_deferred_init_extensions ? `deferred` : `synchronous`,
                $sdk_debug_extensions_init_time_ms: r
            }), this.config.__preview_deferred_init_extensions && H.info(`PostHog extensions initialized (` + r + `ms)`)
        }
        Ci(e) {
            var t;
            if (!r || !r.body) return H.info(`document not ready yet, trying again in 500 milliseconds...`), void setTimeout((() => {
                this.Ci(e)
            }), 500);
            this.config.__preview_deferred_init_extensions && (this.qr = e), this.compression = void 0, e.supportedCompression && !this.config.disable_compression && (this.compression = x(e.supportedCompression, Xr.GZipJS) ? Xr.GZipJS : x(e.supportedCompression, Xr.Base64) ? Xr.Base64 : void 0), (t = e.analytics) != null && t.endpoint && (this.analyticsDefaultEndpoint = e.analytics.endpoint), this.set_config({
                person_profiles: this.Er ? this.Er : wn
            }), this.Cr.forEach((t => t.onRemoteConfig == null ? void 0 : t.onRemoteConfig(e)))
        }
        jr() {
            try {
                this.config.loaded(this)
            } catch (e) {
                H.critical("`loaded` function failed", e)
            }
            if (this.$r(), this.config.internal_or_test_user_hostname && i != null && i.hostname) {
                var e = i.hostname,
                    t = this.config.internal_or_test_user_hostname;
                (typeof t == `string` ? e === t : t.test(e)) && this.setInternalOrTestUser()
            }
            this.config.capture_pageview && setTimeout((() => {
                (this.consent.isOptedIn() || this.config.cookieless_mode === xn) && this.Vr()
            }), 1), this.Hr = new Jr(this), this.Hr.load()
        }
        $r() {
            var e;
            this.is_capturing() && this.config.request_batching && ((e = this.Pr) == null || e.enable())
        }
        _dom_loaded() {
            this.is_capturing() && jn(this.__request_queue, (e => this.Lr(e))), this.__request_queue = [], this.$r()
        }
        _handle_unload() {
            var e, t, n, r;
            (e = this.surveys) == null || e.handlePageUnload(), this.config.request_batching ? (this.zr() && this.capture(On), (t = this.logs) == null || t.flushLogs(`sendBeacon`), (n = this.Pr) == null || n.unload(), (r = this.Dr) == null || r.unload()) : this.zr() && this.capture(On, null, {
                transport: `sendBeacon`
            })
        }
        _send_request(e) {
            this.__loaded && (va ? this.__request_queue.push(e) : this.rateLimiter.isServerRateLimited(e.batchKey) || (e.transport = e.transport || this.config.api_transport, e.url = ki(e.url, {
                ip: +!!this.config.ip
            }), e.headers = h({}, this.config.request_headers, e.headers), e.compression = e.compression === `best-available` ? this.compression : e.compression, e.disableXHRCredentials = this.config.__preview_disable_xhr_credentials, this.config.__preview_disable_beacon && (e.disableTransport = [`sendBeacon`]), e.fetchOptions = e.fetchOptions || this.config.fetch_options, (e => {
                var t = h({}, e);
                t.timeout = t.timeout || 6e4, t.url = Ni(t.url, t.compression);
                var n = t.transport ?? `fetch`,
                    r = Pi.filter((e => !t.disableTransport || !e.transport || !t.disableTransport.includes(e.transport))),
                    i = function(e, t) {
                        for (var r = 0; e.length > r; r++)
                            if (e[r].transport === n) return e[r]
                    }(r) ?.method ?? r[0].method;
                if (!i) throw Error(`No available transport method`);
                n !== `sendBeacon` && t.data && t.compression === Xr.GZipJS && c && !Oi ? Mi(t).then((e => {
                    i(e)
                })).catch((n => {
                    if ((e => !(!e || typeof e != `object`) && (`name` in e ? String(e.name) : ``) === `NotReadableError`)(n)) return Oi = !0, void i(h({}, t, {
                        compression: void 0,
                        url: Ni(e.url, void 0)
                    }));
                    i(t)
                })) : i(t)
            })(h({}, e, {
                callback: t => {
                    var n, r;
                    this.rateLimiter.checkForLimiting(t), 400 > t.statusCode || (n = (r = this.config).on_request_error) == null || n.call(r, t), e.callback == null || e.callback(t)
                }
            }))))
        }
        Lr(e) {
            this.Dr ? this.Dr.retriableRequest(e) : this._send_request(e)
        }
        _execute_array(e) {
            da++;
            try {
                var t, n = [],
                    r = [],
                    i = [];
                jn(e, (e => {
                    e && (E(t = e[0]) ? i.push(e) : D(e) ? e.call(this) : E(e) && t === `alias` ? n.push(e) : E(e) && t.indexOf(`capture`) !== -1 && D(this[t]) ? i.push(e) : r.push(e))
                }));
                var a = function(e, t) {
                    jn(e, (function(e) {
                        if (E(e[0])) {
                            var n = t;
                            W(e, (function(e) {
                                n = n[e[0]].apply(n, e.slice(1))
                            }))
                        } else t[e[0]].apply(t, e.slice(1))
                    }))
                };
                a(n, this), a(r, this), a(i, this)
            } finally {
                da--
            }
        }
        push(e) {
            if (da > 0 && E(e) && j(e[0])) {
                var n = t.prototype[e[0]];
                D(n) && n.apply(this, e.slice(1))
            } else this._execute_array([e])
        }
        capture(e, t, n) {
            var r, i, a, o;
            if (this.__loaded && this.persistence && this.sessionPersistence && this.Pr) {
                if (this.is_capturing())
                    if (!A(e) && j(e)) {
                        var s = !this.config.opt_out_useragent_filter && this._is_bot();
                        if (!s || this.config.__preview_capture_bot_pageviews) {
                            var c = n != null && n.skip_client_rate_limiting ? void 0 : this.rateLimiter.clientRateLimitContext();
                            if (c == null || !c.isRateLimited) {
                                t != null && t.$current_url && !j(t ?.$current_url) && (H.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."), t == null || delete t.$current_url), e !== `$exception` || n != null && n.Ur || H.warn("Using `posthog.capture('$exception')` is unreliable because it does not attach required metadata. Use `posthog.captureException(error)` instead, which attaches required metadata automatically."), this.sessionPersistence.update_search_keyword(), this.config.save_campaign_params && this.sessionPersistence.update_campaign_params(), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.save_campaign_params || this.config.save_referrer) && this.persistence.set_initial_person_info();
                                var l = new Date,
                                    u = n ?.timestamp || l,
                                    d = Wn(),
                                    f = {
                                        uuid: d,
                                        event: e,
                                        properties: this.calculateEventProperties(e, t || {}, u, d)
                                    };
                                e === Dn && this.config.__preview_capture_bot_pageviews && s && (f.event = `$bot_pageview`, f.properties.$browser_type = `bot`), c && (f.properties.$lib_rate_limit_remaining_tokens = c.remainingTokens), n != null && n.$set && (f.$set = n ?.$set);
                                var p, m = this.Yr(n ?.$set_once, e !== An, e === kn);
                                if (m && (f.$set_once = m), n != null && n._noTruncate || (r = this.config.properties_string_max_length, i = f, a = e => j(e) ? e.slice(0, r) : e, o = new Set, f = function e(t, n) {
                                        return t === Object(t) ? o.has(t) ? void 0 : (o.add(t), E(t) ? (r = [], jn(t, (t => {
                                            r.push(e(t))
                                        }))) : (r = {}, W(t, ((t, n) => {
                                            o.has(t) || (r[n] = e(t, n))
                                        }))), r) : a ? a(t) : t;
                                        var r
                                    }(i)), f.timestamp = u, A(n ?.timestamp) || (f.properties.$event_time_override_provided = !0, f.properties.$event_time_override_system_time = l), e === zr.DISMISSED || e === zr.SENT) {
                                    var g = t ?.[Br.SURVEY_ID],
                                        _ = t ?.[Br.SURVEY_ITERATION];
                                    p = {
                                        id: g,
                                        current_iteration: _
                                    }, localStorage.getItem(ra(p)) || localStorage.setItem(ra(p), `true`), f.$set = h({}, f.$set, {
                                        [na({
                                            id: g,
                                            current_iteration: _
                                        }, e === zr.SENT ? `responded` : `dismissed`)]: !0
                                    })
                                } else e === zr.SHOWN && (f.$set = h({}, f.$set, {
                                    [Br.SURVEY_LAST_SEEN_DATE]: new Date().toISOString()
                                }));
                                if (e === Ur.SHOWN) {
                                    var v = t ?.[Wr.TOUR_TYPE];
                                    v && (f.$set = h({}, f.$set, {
                                        [Wr.TOUR_LAST_SEEN_DATE + `/` + v]: new Date().toISOString()
                                    }))
                                }
                                var y = h({}, f.properties.$set, f.$set);
                                if (k(y) || this.setPersonPropertiesForFlags(y), !P(this.config.before_send)) {
                                    var b = this.Gr(f);
                                    if (!b) return;
                                    f = b
                                }
                                this.kr.emit(`eventCaptured`, f);
                                var x = {
                                    method: `POST`,
                                    url: n ?._url ?? this.requestRouter.endpointFor(`api`, this.analyticsDefaultEndpoint),
                                    data: f,
                                    compression: `best-available`,
                                    batchKey: n ?._batchKey
                                };
                                return !this.config.request_batching || n && (n == null || !n._batchKey) || n != null && n.send_instantly ? this.Lr(x) : this.Pr.enqueue(x), f
                            }
                            H.critical(`This capture call is ignored due to client rate limiting.`)
                        }
                    } else H.error(`No event name provided to posthog.capture`)
            } else H.uninitializedWarning(`posthog.capture`)
        }
        _addCaptureHook(e) {
            return this.on(`eventCaptured`, (t => e(t.event, t)))
        }
        calculateEventProperties(t, n, a, o, s) {
            if (a ||= new Date, !this.persistence || !this.sessionPersistence) return n;
            var c = s ? void 0 : this.persistence.remove_event_timer(t),
                u = h({}, n);
            if (u.token = this.config.token, u.$config_defaults = this.config.defaults, (this.config.cookieless_mode == xn || this.config.cookieless_mode == bn && this.consent.isExplicitlyOptedOut()) && (u.$cookieless_mode = !0), t === `$snapshot`) {
                var d = h({}, this.persistence.properties(), this.sessionPersistence.properties());
                return u.distinct_id = d.distinct_id, (!j(u.distinct_id) && !F(u.distinct_id) || M(u.distinct_id)) && H.error(`Invalid distinct_id for replay event. This indicates a bug in your implementation`), u
            }
            var p, m = function(t, n) {
                var r, a, o;
                if (!l) return {};
                var s, c, u, d, p = t ? [...hr, ...n || []] : [],
                    [m, h] = function(e) {
                        for (var t = 0; rt.length > t; t++) {
                            var [n, r] = rt[t], i = n.exec(e), a = i && (D(r) ? r(i, e) : r);
                            if (a) return a
                        }
                        return [``, ``]
                    }(l);
                return G(Fn({
                    $os: m,
                    $os_version: h,
                    $browser: et(l, navigator.vendor),
                    $device: it(l),
                    $device_type: (c = l, u = {
                        userAgentDataPlatform: (r = navigator) == null || (r = r.userAgentData) == null ? void 0 : r.platform,
                        maxTouchPoints: navigator ?.maxTouchPoints,
                        screenWidth: e == null || (a = e.screen) == null ? void 0 : a.width,
                        screenHeight: e == null || (o = e.screen) == null ? void 0 : o.height,
                        devicePixelRatio: e ?.devicePixelRatio
                    }, d = it(c), d === ge || d === he || d === `Kobo` || d === `Kindle Fire` || d === Ke ? me : d === Fe || d === Le || d === Ie || d === Ue ? `Console` : d === ve ? `Wearable` : d ? B : u ?.userAgentDataPlatform === `Android` && (u ?.maxTouchPoints ?? 0) > 0 ? 600 > Math.min(u ?.screenWidth ?? 0, u ?.screenHeight ?? 0) / (u ?.devicePixelRatio ?? 1) ? B : me : `Desktop`),
                    $timezone: Dr(),
                    $timezone_offset: Or()
                }), {
                    $current_url: fr(i ?.href, p, _r),
                    $host: i ?.host,
                    $pathname: i ?.pathname,
                    $raw_user_agent: l.length > 1e3 ? l.substring(0, 997) + `...` : l,
                    $browser_version: nt(l, navigator.vendor),
                    $browser_language: Sr(),
                    $browser_language_prefix: (s = Sr(), typeof s == `string` ? s.split(`-`)[0] : void 0),
                    $screen_height: e ?.screen.height,
                    $screen_width: e ?.screen.width,
                    $viewport_height: e ?.innerHeight,
                    $viewport_width: e ?.innerWidth,
                    $lib: f.LIB_NAME,
                    $lib_version: f.LIB_VERSION,
                    $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
                    $time: Date.now() / 1e3
                })
            }(this.config.mask_personal_data_properties, this.config.custom_personal_data_properties);
            if (this.sessionManager) {
                var {
                    sessionId: g,
                    windowId: _
                } = this.sessionManager.checkAndGetSessionAndWindowId(s, a.getTime());
                u.$session_id = g, u.$window_id = _
            }
            this.sessionPropsManager && G(u, this.sessionPropsManager.getSessionProps());
            try {
                this.sessionRecording && G(u, this.sessionRecording.sdkDebugProperties), u.$sdk_debug_retry_queue_size = this.Dr ?.length
            } catch (e) {
                u.$sdk_debug_error_capturing_properties = String(e)
            }
            if (this.requestRouter.region === Zi && (u.$lib_custom_api_host = this.config.api_host), p = t !== Dn || s ? t !== On || s ? this.pageViewManager.doEvent() : this.pageViewManager.doPageLeave(a) : this.pageViewManager.doPageView(a, o), u = G(u, p), t === Dn && r && (u.title = r.title), !A(c)) {
                var v = a.getTime() - c;
                u.$duration = parseFloat((v / 1e3).toFixed(3))
            }
            l && this.config.opt_out_useragent_filter && (u.$browser_type = this._is_bot() ? `bot` : `browser`), (u = G({}, m, this.persistence.properties(), this.sessionPersistence.properties(), u)).$is_identified = this._isIdentified(), E(this.config.property_denylist) ? W(this.config.property_denylist, (function(e) {
                delete u[e]
            })) : H.error(ga + this.config.property_denylist + ` or property_blacklist config: ` + this.config.property_blacklist);
            var y = this.config.sanitize_properties;
            y && (H.error(ha), u = y(u, t));
            var b = this.Wr();
            return u.$process_person_profile = b, b && !s && this.Xr(`_calculate_event_properties`), u
        }
        Yr(e, t, n) {
            if (t === void 0 && (t = !0), n === void 0 && (n = !1), !this.persistence || !this.Wr() || this.Sr && !n) return e;
            var r = G({}, this.persistence.get_initial_props(), this.sessionPropsManager ?.getSetOnceProps() || {}, e || {}),
                i = this.config.sanitize_properties;
            return i && (H.error(ha), r = i(r, `$set_once`)), t && (this.Sr = !0), k(r) ? void 0 : r
        }
        register(e, t) {
            var n;
            (n = this.persistence) == null || n.register(e, t)
        }
        register_once(e, t, n) {
            var r;
            (r = this.persistence) == null || r.register_once(e, t, n)
        }
        register_for_session(e) {
            var t;
            (t = this.sessionPersistence) == null || t.register(e)
        }
        unregister(e) {
            var t;
            (t = this.persistence) == null || t.unregister(e)
        }
        unregister_for_session(e) {
            var t;
            (t = this.sessionPersistence) == null || t.unregister(e)
        }
        Jr(e, t) {
            this.register({
                [e]: t
            })
        }
        getFeatureFlag(e, t) {
            return this.featureFlags ?.getFeatureFlag(e, t)
        }
        getFeatureFlagPayload(e) {
            return this.featureFlags ?.getFeatureFlagPayload(e)
        }
        getFeatureFlagResult(e, t) {
            return this.featureFlags ?.getFeatureFlagResult(e, t)
        }
        isFeatureEnabled(e, t) {
            return this.featureFlags ?.isFeatureEnabled(e, t)
        }
        reloadFeatureFlags() {
            var e;
            (e = this.featureFlags) == null || e.reloadFeatureFlags()
        }
        updateFlags(e, t, n) {
            var r;
            (r = this.featureFlags) == null || r.updateFlags(e, t, n)
        }
        updateEarlyAccessFeatureEnrollment(e, t, n) {
            var r;
            (r = this.featureFlags) == null || r.updateEarlyAccessFeatureEnrollment(e, t, n)
        }
        getEarlyAccessFeatures(e, t, n) {
            return t === void 0 && (t = !1), this.featureFlags ?.getEarlyAccessFeatures(e, t, n)
        }
        on(e, t) {
            return this.kr.on(e, t)
        }
        onFeatureFlags(e) {
            return this.featureFlags ? this.featureFlags.onFeatureFlags(e) : (e([], {}, {
                errorsLoading: !0
            }), () => {})
        }
        onSurveysLoaded(e) {
            return this.surveys ? this.surveys.onSurveysLoaded(e) : (e([], {
                isLoaded: !1,
                error: ma
            }), () => {})
        }
        onSessionId(e) {
            return this.sessionManager ?.onSessionId(e) ?? (() => {})
        }
        getSurveys(e, t) {
            t === void 0 && (t = !1), this.surveys ? this.surveys.getSurveys(e, t) : e([], {
                isLoaded: !1,
                error: ma
            })
        }
        getActiveMatchingSurveys(e, t) {
            t === void 0 && (t = !1), this.surveys ? this.surveys.getActiveMatchingSurveys(e, t) : e([], {
                isLoaded: !1,
                error: ma
            })
        }
        renderSurvey(e, t) {
            var n;
            (n = this.surveys) == null || n.renderSurvey(e, t)
        }
        displaySurvey(e, t) {
            var n;
            t === void 0 && (t = aa), (n = this.surveys) == null || n.displaySurvey(e, t)
        }
        cancelPendingSurvey(e) {
            var t;
            (t = this.surveys) == null || t.cancelPendingSurvey(e)
        }
        canRenderSurvey(e) {
            return this.surveys ?.canRenderSurvey(e) ?? {
                visible: !1,
                disabledReason: ma
            }
        }
        canRenderSurveyAsync(e, t) {
            return t === void 0 && (t = !1), this.surveys ?.canRenderSurveyAsync(e, t) ?? Promise.resolve({
                visible: !1,
                disabledReason: ma
            })
        }
        Kr(e) {
            return !e || M(e) ? (H.critical(`Unique user id has not been set in posthog.identify`), !1) : e === _n ? (H.critical(`The string "` + e + `" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.`), !1) : ![`distinct_id`, `distinctid`].includes(e.toLowerCase()) && ![`undefined`, `null`].includes(e.toLowerCase()) || (H.critical(`The string "` + e + `" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.`), !1)
        }
        identify(e, t, n) {
            if (!this.__loaded || !this.persistence) return H.uninitializedWarning(`posthog.identify`);
            if (F(e) && (e = e.toString(), H.warn(`The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.`)), this.Kr(e) && this.Xr(`posthog.identify`)) {
                var r = this.get_distinct_id();
                this.register({
                    $user_id: e
                }), this.get_property(Pt) || this.register_once({
                    $had_persisted_distinct_id: !0,
                    $device_id: r
                }, ``), e !== r && e !== this.get_property(Ft) && (this.unregister(Ft), this.register({
                    distinct_id: e
                }));
                var i, a = (this.persistence.get_property(ln) || Sn) === Sn;
                e !== r && a ? (this.persistence.set_property(ln, Cn), this.setPersonPropertiesForFlags({
                    $set: t || {},
                    $set_once: n || {}
                }, !1), this.capture(kn, {
                    distinct_id: e,
                    $anon_distinct_id: r
                }, {
                    $set: t || {},
                    $set_once: n || {}
                }), this.Rr = qi(e, t, n), (i = this.featureFlags) == null || i.setAnonymousDistinctId(r)) : (t || n) && this.setPersonProperties(t, n), e !== r && (this.reloadFeatureFlags(), this.unregister(an))
            }
        }
        setPersonProperties(e, t) {
            if ((e || t) && this.Xr(`posthog.setPersonProperties`)) {
                var n = qi(this.get_distinct_id(), e, t);
                this.Rr === n ? H.info(`A duplicate setPersonProperties call was made with the same properties. It has been ignored.`) : (this.setPersonPropertiesForFlags({
                    $set: e || {},
                    $set_once: t || {}
                }, !0), this.capture(`$set`, {
                    $set: e || {},
                    $set_once: t || {}
                }), this.Rr = n)
            }
        }
        group(e, t, n) {
            if (e && t) {
                var r = this.getGroups(),
                    i = r[e] !== t;
                if (i && this.resetGroupPropertiesForFlags(e), this.register({
                        $groups: h({}, r, {
                            [e]: t
                        })
                    }), i || n) {
                    var a = {
                        $group_type: e,
                        $group_key: t
                    };
                    n && (a.$group_set = n), this.capture(An, a)
                }
                n && this.setGroupPropertiesForFlags({
                    [e]: n
                }), i && !n && this.reloadFeatureFlags()
            } else H.error(`posthog.group requires a group type and group key`)
        }
        resetGroups() {
            this.register({
                $groups: {}
            }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags()
        }
        setPersonPropertiesForFlags(e, t) {
            var n;
            t === void 0 && (t = !0), (n = this.featureFlags) == null || n.setPersonPropertiesForFlags(e, t)
        }
        resetPersonPropertiesForFlags() {
            var e;
            (e = this.featureFlags) == null || e.resetPersonPropertiesForFlags()
        }
        setGroupPropertiesForFlags(e, t) {
            var n;
            t === void 0 && (t = !0), this.Xr(`posthog.setGroupPropertiesForFlags`) && ((n = this.featureFlags) == null || n.setGroupPropertiesForFlags(e, t))
        }
        resetGroupPropertiesForFlags(e) {
            var t;
            (t = this.featureFlags) == null || t.resetGroupPropertiesForFlags(e)
        }
        reset(e) {
            var t, n, r, i, a, o, s, c;
            if (H.info(`reset`), !this.__loaded) return H.uninitializedWarning(`posthog.reset`);
            var l = this.get_property(Pt);
            if (this.consent.reset(), (t = this.persistence) == null || t.clear(), (n = this.sessionPersistence) == null || n.clear(), (r = this.surveys) == null || r.reset(), (i = this.Hr) == null || i.stop(), (a = this.featureFlags) == null || a.reset(), (o = this.conversations) == null || o.reset(), (s = this.persistence) == null || s.set_property(ln, Sn), (c = this.sessionManager) == null || c.resetSessionId(), this.Rr = null, this.config.cookieless_mode === xn) this.register_once({
                distinct_id: _n,
                $device_id: null
            }, ``);
            else {
                var u = this.config.get_device_id(Wn());
                this.register_once({
                    distinct_id: u,
                    $device_id: e ? u : l
                }, ``)
            }
            this.register({
                $last_posthog_reset: new Date().toISOString()
            }, 1), delete this.config.identity_distinct_id, delete this.config.identity_hash, this.reloadFeatureFlags()
        }
        setIdentity(e, t) {
            var n;
            this.config.identity_distinct_id = e, this.config.identity_hash = t, this.alias(e), (n = this.conversations) == null || n.Qr()
        }
        clearIdentity() {
            var e;
            delete this.config.identity_distinct_id, delete this.config.identity_hash, (e = this.conversations) == null || e.tn()
        }
        get_distinct_id() {
            return this.get_property(`distinct_id`)
        }
        getGroups() {
            return this.get_property(`$groups`) || {}
        }
        get_session_id() {
            return this.sessionManager ?.checkAndGetSessionAndWindowId(!0).sessionId ?? ``
        }
        get_session_replay_url(e) {
            if (!this.sessionManager) return ``;
            var {
                sessionId: t,
                sessionStartTimestamp: n
            } = this.sessionManager.checkAndGetSessionAndWindowId(!0), r = this.requestRouter.endpointFor(`ui`, `/project/` + this.config.token + `/replay/` + t);
            if (e != null && e.withTimestamp && n) {
                var i = e.timestampLookBack ?? 10;
                if (!n) return r;
                r += `?t=` + Math.max(Math.floor((new Date().getTime() - n) / 1e3) - i, 0)
            }
            return r
        }
        alias(e, t) {
            return e === this.get_property(Nt) ? (H.critical(`Attempting to create alias for existing People user - aborting.`), -2) : this.Xr(`posthog.alias`) ? (A(t) && (t = this.get_distinct_id()), e === t ? (H.warn(`alias matches current distinct_id - skipping api call.`), this.identify(e), -1) : (this.Jr(Ft, e), this.capture(`$create_alias`, {
                alias: e,
                distinct_id: t
            }))) : void 0
        }
        set_config(e) {
            var t = h({}, this.config);
            if (O(e)) {
                var n, r, i, a, o, s, c, l, u;
                G(this.config, xa(e));
                var d = this.Or();
                (n = this.persistence) == null || n.update_config(this.config, t, d), this.sessionPersistence = this.config.persistence === `sessionStorage` || this.config.persistence === `memory` ? this.persistence : new Ar(h({}, this.config, {
                    persistence: `sessionStorage`
                }), d);
                var p = this.Nr(this.config.debug);
                L(p) && (this.config.debug = p), L(this.config.debug) && (this.config.debug ? (f.DEBUG = !0, q.Ut() && q.Xt(`ph_debug`, !0), H.info(`set_config`, {
                    config: e,
                    oldConfig: t,
                    newConfig: h({}, this.config)
                })) : (f.DEBUG = !1, q.Ut() && q.Jt(`ph_debug`))), (r = this.exceptionObserver) == null || r.onConfigChange(), (i = this.sessionRecording) == null || i.startIfEnabledOrStop(), (a = this.autocapture) == null || a.startIfEnabled(), (o = this.heatmaps) == null || o.startIfEnabled(), (s = this.exceptionObserver) == null || s.startIfEnabledOrStop(), (c = this.deadClicksAutocapture) == null || c.startIfEnabledOrStop(), (l = this.surveys) == null || l.loadIfEnabled(), this.en(), (u = this.externalIntegrations) == null || u.startIfEnabledOrStop()
            }
        }
        _overrideSDKInfo(e, t) {
            f.LIB_NAME = e, f.LIB_VERSION = t
        }
        startSessionRecording(e) {
            var t, n, r, i, a, o = !0 === e,
                s = {
                    sampling: o || !(e == null || !e.sampling),
                    linked_flag: o || !(e == null || !e.linked_flag),
                    url_trigger: o || !(e == null || !e.url_trigger),
                    event_trigger: o || !(e == null || !e.event_trigger)
                };
            Object.values(s).some(Boolean) && ((t = this.sessionManager) == null || t.checkAndGetSessionAndWindowId(), s.sampling && ((n = this.sessionRecording) == null || n.overrideSampling()), s.linked_flag && ((r = this.sessionRecording) == null || r.overrideLinkedFlag()), s.url_trigger && ((i = this.sessionRecording) == null || i.overrideTrigger(`url`)), s.event_trigger && ((a = this.sessionRecording) == null || a.overrideTrigger(`event`))), this.set_config({
                disable_session_recording: !1
            })
        }
        stopSessionRecording() {
            this.set_config({
                disable_session_recording: !0
            })
        }
        sessionRecordingStarted() {
            var e;
            return !((e = this.sessionRecording) == null || !e.started)
        }
        captureException(e, t) {
            if (this.exceptions) {
                var n = Error(`PostHog syntheticException`),
                    r = this.exceptions.buildProperties(e, {
                        handled: !0,
                        syntheticException: n
                    });
                return this.exceptions.sendExceptionEvent(h({}, r, t))
            }
        }
        captureLog(e) {
            var t;
            (t = this.logs) == null || t.captureLog(e)
        }
        get logger() {
            return this.logs ?.logger ?? t.rn
        }
        startExceptionAutocapture(e) {
            this.set_config({
                capture_exceptions: e == null || e
            })
        }
        stopExceptionAutocapture() {
            this.set_config({
                capture_exceptions: !1
            })
        }
        loadToolbar(e) {
            var t;
            return (t = this.toolbar ?.loadToolbar(e)) != null && t
        }
        get_property(e) {
            return this.persistence ?.props[e]
        }
        getSessionProperty(e) {
            return this.sessionPersistence ?.props[e]
        }
        toString() {
            var e = this.config.name ?? _a;
            return e !== _a && (e = _a + `.` + e), e
        }
        _isIdentified() {
            return this.persistence ?.get_property(ln) === Cn || this.sessionPersistence ?.get_property(ln) === Cn
        }
        Wr() {
            var e, t;
            return !(this.config.person_profiles === `never` || this.config.person_profiles === wn && !this._isIdentified() && k(this.getGroups()) && ((e = this.persistence) == null || (e = e.props) == null || !e[Ft]) && ((t = this.persistence) == null || (t = t.props) == null || !t[hn]))
        }
        zr() {
            return !0 === this.config.capture_pageleave || this.config.capture_pageleave === `if_capture_pageview` && (!0 === this.config.capture_pageview || this.config.capture_pageview === `history_change`)
        }
        createPersonProfile() {
            this.Wr() || this.Xr(`posthog.createPersonProfile`) && this.setPersonProperties({}, {})
        }
        setInternalOrTestUser() {
            this.Xr(`posthog.setInternalOrTestUser`) && this.setPersonProperties({
                $internal_or_test_user: !0
            })
        }
        Xr(e) {
            return this.config.person_profiles === `never` ? (H.error(e + ` was called, but process_person is set to "never". This call will be ignored.`), !1) : (this.Jr(hn, !0), !0)
        }
        Or() {
            if (this.config.cookieless_mode === `always`) return !0;
            var e = this.consent.isOptedOut();
            return this.config.disable_persistence || e && !(!this.config.opt_out_persistence_by_default && this.config.cookieless_mode !== bn)
        }
        en() {
            var e, t, n = this.Or();
            return this.persistence ?.fi !== n && ((e = this.persistence) == null || e.set_disabled(n)), this.sessionPersistence ?.fi !== n && ((t = this.sessionPersistence) == null || t.set_disabled(n)), n
        }
        opt_in_capturing(e) {
            var n;
            if (this.config.cookieless_mode !== xn) {
                if (this.config.cookieless_mode === bn && this.consent.isExplicitlyOptedOut()) {
                    var r, i;
                    this.reset(!0), (r = this.sessionManager) == null || r.destroy(), (i = this.pageViewManager) == null || i.destroy(), this.sessionManager = new Wi(this), this.pageViewManager = new lr(this), this.persistence && (this.sessionPropsManager = new Vi(this, this.sessionManager, this.persistence));
                    var a = this.config.__extensionClasses ?.sessionRecording ?? t.__defaultExtensionClasses ?.sessionRecording;
                    a && (this.sessionRecording = this.Ir(this.sessionRecording, new a(this)))
                }
                var o;
                this.consent.optInOut(!0), this.en(), this.$r(), (n = this.sessionRecording) == null || n.startIfEnabledOrStop(), this.config.cookieless_mode == bn && ((o = this.surveys) == null || o.loadIfEnabled()), (A(e ?.captureEventName) || e != null && e.captureEventName) && this.capture(e ?.captureEventName ?? `$opt_in`, e ?.captureProperties, {
                    send_instantly: !0
                }), this.config.capture_pageview && this.Vr()
            } else H.warn(pa)
        }
        opt_out_capturing() {
            var e, t, n;
            this.config.cookieless_mode === xn ? H.warn(pa) : (this.config.cookieless_mode === bn && this.consent.isOptedIn() && this.reset(!0), this.consent.optInOut(!1), this.en(), this.config.cookieless_mode === bn && (this.register({
                distinct_id: _n,
                $device_id: null
            }), (e = this.sessionManager) == null || e.destroy(), (t = this.pageViewManager) == null || t.destroy(), this.sessionManager = void 0, this.sessionPropsManager = void 0, (n = this.sessionRecording) == null || n.stopRecording(), this.sessionRecording = void 0, this.Vr()))
        }
        has_opted_in_capturing() {
            return this.consent.isOptedIn()
        }
        has_opted_out_capturing() {
            return this.consent.isOptedOut()
        }
        get_explicit_consent_status() {
            var e = this.consent.consent;
            return e === 1 ? `granted` : e === 0 ? `denied` : `pending`
        }
        is_capturing() {
            return this.config.cookieless_mode === xn || (this.config.cookieless_mode === bn ? this.consent.isExplicitlyOptedOut() || this.consent.isOptedIn() : !this.has_opted_out_capturing())
        }
        clear_opt_in_out_capturing() {
            this.consent.reset(), this.en()
        }
        _is_bot() {
            return n ? Gi(n, this.config.custom_blocked_useragents) : void 0
        }
        Vr() {
            r && (r.visibilityState === `visible` ? this.Tr || (this.Tr = !0, this.capture(Dn, {
                title: r.title
            }, {
                send_instantly: !0
            }), this.Ar &&= (r.removeEventListener(Tn, this.Ar), null)) : this.Ar || (this.Ar = this.Vr.bind(this), K(r, Tn, this.Ar)))
        }
        debug(t) {
            !1 === t ? (e ?.console.log(`You've disabled debug mode.`), this.set_config({
                debug: !1
            })) : (e ?.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), this.set_config({
                debug: !0
            }))
        }
        ki() {
            var e, t, n, r, i, a, o = this.Mr || {};
            return `advanced_disable_flags` in o ? !!o.advanced_disable_flags : !1 === this.config.advanced_disable_flags ? !0 === this.config.advanced_disable_decide ? (H.warn(`Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version.`), !0) : (n = `advanced_disable_decide`, r = H, i = (t = `advanced_disable_flags`) in (e = o) && !P(e[t]), a = n in e && !P(e[n]), i ? e[t] : !!a && (r && r.warn(`Config field '` + n + `' is deprecated. Please use '` + t + `' instead. The old field will be removed in a future major version.`), e[n])) : !!this.config.advanced_disable_flags
        }
        Gr(e) {
            if (P(this.config.before_send)) return e;
            var t = E(this.config.before_send) ? this.config.before_send : [this.config.before_send],
                n = e;
            for (var r of t) {
                if (n = r(n), P(n)) {
                    var i = `Event '` + e.event + `' was rejected in beforeSend function`;
                    return ne(e.event) ? H.warn(i + `. This can cause unexpected behavior.`) : H.info(i), null
                }
                n.properties && !k(n.properties) || H.warn(`Event '` + e.event + `' has no properties after beforeSend function, this is likely an error.`)
            }
            return n
        }
        getPageViewId() {
            return this.pageViewManager.ai ?.pageViewId
        }
        captureTraceFeedback(e, t) {
            this.capture(`$ai_feedback`, {
                $ai_trace_id: String(e),
                $ai_feedback_text: t
            })
        }
        captureTraceMetric(e, t, n) {
            this.capture(`$ai_metric`, {
                $ai_trace_id: String(e),
                $ai_metric_name: t,
                $ai_metric_value: String(n)
            })
        }
        Nr(e) {
            var t = L(e) && !e,
                n = q.Ut() && q.Gt(`ph_debug`) === `true`;
            return !t && (!!n || e)
        }
    };

function wa(e) {
    return e instanceof Element && (e.id === gn || !(e.closest == null || !e.closest(`.toolbar-global-fade-container`)))
}

function Ta(e) {
    return !!e && e.nodeType === 1
}

function Ea(e, t) {
    return !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase()
}

function Da(e) {
    return !!e && e.nodeType === 3
}

function Oa(e) {
    return !!e && e.nodeType === 11
}

function ka(e) {
    return e ? S(e).split(/\s+/) : []
}

function Aa(t) {
    var n = e ?.location.href;
    return !!(n && t && t.some((e => n.match(e))))
}

function ja(e) {
    var t = ``;
    switch (typeof e.className) {
        case `string`:
            t = e.className;
            break;
        case `object`:
            t = (e.className && `baseVal` in e.className ? e.className.baseVal : null) || e.getAttribute(`class`) || ``;
            break;
        default:
            t = ``
    }
    return ka(t)
}

function Ma(e) {
    return P(e) ? null : S(e).split(/(\s+)/).filter((e => Xa(e))).join(``).replace(/[\r\n]/g, ` `).replace(/[ ]+/g, ` `).substring(0, 255)
}

function Na(e) {
    var t = ``;
    return Ha(e) && !Ua(e) && e.childNodes && e.childNodes.length && W(e.childNodes, (function(e) {
        Da(e) && e.textContent && (t += Ma(e.textContent) ?? ``)
    })), S(t)
}

function Pa(e) {
    return A(e.target) ? e.srcElement || null : (t = e.target) != null && t.shadowRoot ? e.composedPath()[0] || null : e.target || null;
    var t
}
Ca.__defaultExtensionClasses = {}, Ca.rn = {
        trace: la = () => {},
        debug: la,
        info: la,
        warn: la,
        error: la,
        fatal: la
    },
    function(e, t) {
        for (var n = 0; t.length > n; n++) e.prototype[t[n]] = Pn(e.prototype[t[n]])
    }(Ca, [`identify`]);
var Fa = [`a`, `button`, `form`, `input`, `select`, `textarea`, `label`];

function Ia(e, t) {
    if (A(t)) return !0;
    var n, r = function(e) {
        if (t.some((t => e.matches(t)))) return {
            v: !0
        }
    };
    for (var i of e)
        if (n = r(i)) return n.v;
    return !1
}

function La(e) {
    var t = e.parentNode;
    return !(!t || !Ta(t)) && t
}
var Ra = [`next`, `previous`, `prev`, `>`, `<`],
    za = [`.ph-no-rageclick`, `.ph-no-capture`],
    Ba = e => !e || Ea(e, `html`) || !Ta(e),
    Va = (t, n) => {
        if (!e || Ba(t)) return {
            parentIsUsefulElement: !1,
            targetElementList: []
        };
        for (var r = !1, i = [t], a = t; a.parentNode && !Ea(a, `body`);)
            if (Oa(a.parentNode)) i.push(a.parentNode.host), a = a.parentNode.host;
            else {
                var o = La(a);
                if (!o) break;
                if (n || Fa.indexOf(o.tagName.toLowerCase()) > -1) r = !0;
                else {
                    var s = e.getComputedStyle(o);
                    s && s.getPropertyValue(`cursor`) === `pointer` && (r = !0)
                }
                i.push(o), a = o
            }
        return {
            parentIsUsefulElement: r,
            targetElementList: i
        }
    };

function Ha(e) {
    for (var t = e; t.parentNode && !Ea(t, `body`); t = t.parentNode) {
        var n = ja(t);
        if (x(n, `ph-sensitive`) || x(n, `ph-no-capture`)) return !1
    }
    if (x(ja(e), `ph-include`)) return !0;
    var r = e.type || ``;
    if (j(r)) switch (r.toLowerCase()) {
        case `hidden`:
        case `password`:
            return !1
    }
    var i = e.name || e.id || ``;
    return !j(i) || !/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(i.replace(/[^a-zA-Z0-9]/g, ``))
}

function Ua(e) {
    return !!(Ea(e, `input`) && ![`button`, `checkbox`, `submit`, `reset`].includes(e.type) || Ea(e, `select`) || Ea(e, `textarea`) || e.getAttribute(`contenteditable`) === `true`)
}
var Wa = `(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})`,
    Ga = RegExp(`^(?:` + Wa + `)$`),
    Ka = new RegExp(Wa),
    qa = `\\d{3}-?\\d{2}-?\\d{4}`,
    Ja = RegExp(`^(` + qa + `)$`),
    Ya = RegExp(`(` + qa + `)`);

function Xa(e, t) {
    return t === void 0 && (t = !0), !(P(e) || j(e) && (e = S(e), (t ? Ga : Ka).test((e || ``).replace(/[- ]/g, ``)) || (t ? Ja : Ya).test(e)))
}

function Za(e) {
    var t = Na(e);
    return Xa(t = (t + ` ` + Qa(e)).trim()) ? t : ``
}

function Qa(e) {
    var t = ``;
    return e && e.childNodes && e.childNodes.length && W(e.childNodes, (function(e) {
        if (e && e.tagName ?.toLowerCase() === `span`) try {
            var n = Na(e);
            t = (t + ` ` + n).trim(), e.childNodes && e.childNodes.length && (t = (t + ` ` + Qa(e)).trim())
        } catch (e) {
            H.error(`[AutoCapture]`, e)
        }
    })), t
}

function $a(e) {
    return e.replace(/"|\\"/g, `\\"`)
}

function eo(e) {
    var t = e.attr__class;
    return t ? E(t) ? t : ka(t) : void 0
}
var to = class {
        constructor(e) {
            this.disabled = !1 === e;
            var t = O(e) ? e : {};
            this.thresholdPx = t.threshold_px || 30, this.timeoutMs = t.timeout_ms || 1e3, this.clickCount = t.click_count || 3, this.clicks = []
        }
        isRageClick(e, t, n) {
            if (this.disabled) return !1;
            var r = this.clicks[this.clicks.length - 1];
            if (r && Math.abs(e - r.x) + Math.abs(t - r.y) < this.thresholdPx && this.timeoutMs > n - r.timestamp) {
                if (this.clicks.push({
                        x: e,
                        y: t,
                        timestamp: n
                    }), this.clicks.length === this.clickCount) return !0
            } else this.clicks = [{
                x: e,
                y: t,
                timestamp: n
            }];
            return !1
        }
    },
    no = `$copy_autocapture`,
    ro = U(`[AutoCapture]`);

function io(e, t) {
    return t.length > e ? t.slice(0, e) + `...` : t
}

function ao(e) {
    if (e.previousElementSibling) return e.previousElementSibling;
    var t = e;
    do t = t.previousSibling; while (t && !Ta(t));
    return t
}

function oo(t, n) {
    for (var r, {
            e: i,
            maskAllElementAttributes: a,
            maskAllText: o,
            elementAttributeIgnoreList: s,
            elementsChainAsString: c
        } = n, l = [t], u = t; u.parentNode && !Ea(u, `body`);) Oa(u.parentNode) ? (l.push(u.parentNode.host), u = u.parentNode.host) : (l.push(u.parentNode), u = u.parentNode);
    var d, f, p = [],
        m = {},
        g = !1,
        _ = !1;
    if (W(l, (e => {
            var t = Ha(e);
            e.tagName.toLowerCase() === `a` && (g = e.getAttribute(`href`), g = t && g && Xa(g) && g), x(ja(e), `ph-no-capture`) && (_ = !0), p.push(function(e, t, n, r) {
                var i = e.tagName.toLowerCase(),
                    a = {
                        tag_name: i
                    };
                Fa.indexOf(i) > -1 && !n && (a.$el_text = i.toLowerCase() === `a` || i.toLowerCase() === `button` ? io(1024, Za(e)) : io(1024, Na(e)));
                var o = ja(e);
                o.length > 0 && (a.classes = o.filter((function(e) {
                    return e !== ``
                }))), W(e.attributes, (function(n) {
                    var i;
                    if ((!Ua(e) || [`name`, `id`, `class`, `aria-label`].indexOf(n.name) !== -1) && (r == null || !r.includes(n.name)) && !t && Xa(n.value) && (!j(i = n.name) || i.substring(0, 10) !== `_ngcontent` && i.substring(0, 7) !== `_nghost`)) {
                        var o = n.value;
                        n.name === `class` && (o = ka(o).join(` `)), a[`attr__` + n.name] = io(1024, o)
                    }
                }));
                for (var s = 1, c = 1, l = e; l = ao(l);) s++, l.tagName === e.tagName && c++;
                return a.nth_child = s, a.nth_of_type = c, a
            }(e, a, o, s)), G(m, function(e) {
                if (!Ha(e)) return {};
                var t = {};
                return W(e.attributes, (function(e) {
                    if (e.name && e.name.indexOf(`data-ph-capture-attribute`) === 0) {
                        var n = e.name.replace(`data-ph-capture-attribute-`, ``),
                            r = e.value;
                        n && r && Xa(r) && (t[n] = r)
                    }
                })), t
            }(e))
        })), _) return {
        props: {},
        explicitNoCapture: _
    };
    if (o || (p[0].$el_text = t.tagName.toLowerCase() === `a` || t.tagName.toLowerCase() === `button` ? Za(t) : Na(t)), g) {
        var v;
        p[0].attr__href = g;
        var y = ur(g) ?.host,
            b = e == null || (v = e.location) == null ? void 0 : v.host;
        y && b && y !== b && (d = g)
    }
    return {
        props: G({
            $event_type: i.type,
            $ce_version: 1
        }, c ? {} : {
            $elements: p
        }, {
            $elements_chain: (f = p, function(e) {
                return e.map((e => {
                    var t = ``;
                    if (e.tag_name && (t += e.tag_name), e.attr_class)
                        for (var n of (e.attr_class.sort(), e.attr_class)) t += `.` + n.replace(/"/g, ``);
                    var r = h({}, e.text ? {
                            text: e.text
                        } : {}, {
                            "nth-child": e.nth_child ?? 0,
                            "nth-of-type": e.nth_of_type ?? 0
                        }, e.href ? {
                            href: e.href
                        } : {}, e.attr_id ? {
                            attr_id: e.attr_id
                        } : {}, e.attributes),
                        i = {};
                    return Mn(r).sort(((e, t) => {
                        var [n] = e, [r] = t;
                        return n.localeCompare(r)
                    })).forEach((e => {
                        var [t, n] = e;
                        return i[$a(t.toString())] = $a(n.toString())
                    })), (t += `:`) + Mn(i).map((e => {
                        var [t, n] = e;
                        return t + `="` + n + `"`
                    })).join(``)
                })).join(`;`)
            }(function(e) {
                return e.map((e => {
                    var t = {
                        text: e.$el_text ?.slice(0, 400),
                        tag_name: e.tag_name,
                        href: e.attr__href ?.slice(0, 2048),
                        attr_class: eo(e),
                        attr_id: e.attr__id,
                        nth_child: e.nth_child,
                        nth_of_type: e.nth_of_type,
                        attributes: {}
                    };
                    return Mn(e).filter((e => {
                        var [t] = e;
                        return t.indexOf(`attr__`) === 0
                    })).forEach((e => {
                        var [n, r] = e;
                        return t.attributes[n] = r
                    })), t
                }))
            }(f)))
        }, (r = p[0]) != null && r.$el_text ? {
            $el_text: p[0] ?.$el_text
        } : {}, d && i.type === `click` ? {
            $external_click_url: d
        } : {}, m)
    }
}
var so = U(`[ExceptionAutocapture]`);

function co(e, t, n) {
    try {
        if (!(t in e)) return () => {};
        var r = e[t],
            i = n(r);
        return D(i) && (i.prototype = i.prototype || {}, Object.defineProperties(i, {
            __posthog_wrapped__: {
                enumerable: !1,
                value: !0
            }
        })), e[t] = i, () => {
            e[t] = r
        }
    } catch {
        return () => {}
    }
}
var lo = U(`[TracingHeaders]`),
    uo = U(`[Web Vitals]`),
    fo = 9e5,
    po = `disabled`,
    mo = `lazy_loading`,
    ho = `awaiting_config`,
    go = `missing_config`;
U(`[SessionRecording]`), U(`[SessionRecording]`);
var _o = `[SessionRecording]`,
    vo = U(_o),
    yo = U(`[Heatmaps]`);

function bo(e) {
    return O(e) && `clientX` in e && `clientY` in e && F(e.clientX) && F(e.clientY)
}
var xo = U(`[Product Tours]`),
    So = [`$set_once`, `$set`],
    Co = U(`[SiteApps]`),
    wo = `Error while initializing PostHog app with config id `;

function To(e, t, n) {
    if (P(e)) return !1;
    switch (n) {
        case `exact`:
            return e === t;
        case `contains`:
            var r = t.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`).replace(/_/g, `.`).replace(/%/g, `.*`);
            return new RegExp(r, `i`).test(e);
        case `regex`:
            try {
                return new RegExp(t).test(e)
            } catch {
                return !1
            }
        default:
            return !1
    }
}
var Eo = class {
        constructor(e) {
            this.nn = new Hi, this.sn = (e, t) => this.an(e, t) && this.ln(e, t) && this.un(e, t) && this.hn(e, t), this.an = (e, t) => t == null || !t.event || e ?.event === t ?.event, this._instance = e, this.cn = new Set, this.dn = new Set
        }
        init() {
            var e;
            A(this._instance ?._addCaptureHook) || (e = this._instance) == null || e._addCaptureHook(((e, t) => {
                this.on(e, t)
            }))
        }
        register(e) {
            var t;
            if (!A(this._instance ?._addCaptureHook) && (e.forEach((e => {
                    var t, n;
                    (t = this.dn) == null || t.add(e), (n = e.steps) == null || n.forEach((e => {
                        var t;
                        (t = this.cn) == null || t.add(e ?.event || ``)
                    }))
                })), (t = this._instance) != null && t.autocapture)) {
                var n, r = new Set;
                e.forEach((e => {
                    var t;
                    (t = e.steps) == null || t.forEach((e => {
                        e != null && e.selector && r.add(e ?.selector)
                    }))
                })), (n = this._instance) == null || n.autocapture.setElementSelectors(r)
            }
        }
        on(e, t) {
            t != null && e.length != 0 && (this.cn.has(e) || this.cn.has(t ?.event)) && this.dn && this.dn ?.size > 0 && this.dn.forEach((e => {
                this.vn(t, e) && this.nn.emit(`actionCaptured`, e.name)
            }))
        }
        fn(e) {
            this.onAction(`actionCaptured`, (t => e(t)))
        }
        vn(e, t) {
            if (t ?.steps == null) return !1;
            for (var n of t.steps)
                if (this.sn(e, n)) return !0;
            return !1
        }
        onAction(e, t) {
            return this.nn.on(e, t)
        }
        ln(e, t) {
            if (t != null && t.url) {
                var n, r = e == null || (n = e.properties) == null ? void 0 : n.$current_url;
                if (!r || typeof r != `string` || !To(r, t.url, t.url_matching || `contains`)) return !1
            }
            return !0
        }
        un(e, t) {
            return !!this.pn(e, t) && !!this.gn(e, t) && !!this.mn(e, t)
        }
        pn(e, t) {
            var n;
            if (t == null || !t.href) return !0;
            var r = this.yn(e);
            if (r.length > 0) return r.some((e => To(e.href, t.href, t.href_matching || `exact`)));
            var i, a = (e == null || (n = e.properties) == null ? void 0 : n.$elements_chain) || ``;
            return !!a && To((i = a.match(/(?::|")href="(.*?)"/)) ? i[1] : ``, t.href, t.href_matching || `exact`)
        }
        gn(e, t) {
            var n;
            if (t == null || !t.text) return !0;
            var r = this.yn(e);
            if (r.length > 0) return r.some((e => To(e.text, t.text, t.text_matching || `exact`) || To(e.$el_text, t.text, t.text_matching || `exact`)));
            var i, a, o, s = (e == null || (n = e.properties) == null ? void 0 : n.$elements_chain) || ``;
            return !!s && (i = function(e) {
                for (var t, n = [], r = /(?::|")text="(.*?)"/g; !P(t = r.exec(e));) n.includes(t[1]) || n.push(t[1]);
                return n
            }(s), a = t.text, o = t.text_matching || `exact`, i.some((e => To(e, a, o))))
        }
        mn(e, t) {
            var n, r;
            if (t == null || !t.selector) return !0;
            var i = e == null || (n = e.properties) == null ? void 0 : n.$element_selectors;
            if (i != null && i.includes(t.selector)) return !0;
            var a = (e == null || (r = e.properties) == null ? void 0 : r.$elements_chain) || ``;
            if (t.selector_regex && a) try {
                return new RegExp(t.selector_regex).test(a)
            } catch {
                return !1
            }
            return !1
        }
        yn(e) {
            var t;
            return (e == null || (t = e.properties) == null ? void 0 : t.$elements) == null ? [] : e ?.properties.$elements
        }
        hn(e, t) {
            return t == null || !t.properties || t.properties.length === 0 || Xi(t.properties.reduce(((e, t) => {
                var n = E(t.value) ? t.value.map(String) : t.value == null ? [] : [String(t.value)];
                return e[t.key] = {
                    values: n,
                    operator: t.operator || `exact`
                }, e
            }), {}), e ?.properties)
        }
    },
    Do = class {
        constructor(e) {
            this._instance = e, this.bn = new Map, this.wn = new Map, this._n = new Map
        }
        In(e, t) {
            return !!e && Xi(e.propertyFilters, t ?.properties)
        }
        Cn(e, t) {
            var n = new Map;
            return e.forEach((e => {
                var r;
                (r = e.conditions) == null || (r = r[t]) == null || (r = r.values) == null || r.forEach((t => {
                    if (t != null && t.name) {
                        var r = n.get(t.name) || [];
                        r.push(e.id), n.set(t.name, r)
                    }
                }))
            })), n
        }
        Sn(e, t, n) {
            var r = (n === jr.Activation ? this.bn : this.wn).get(e),
                i = [];
            return this.kn((e => {
                i = e.filter((e => r ?.includes(e.id)))
            })), i.filter((r => {
                var i, a = (i = r.conditions) == null || (i = i[n]) == null || (i = i.values) == null ? void 0 : i.find((t => t.name === e));
                return this.In(a, t)
            }))
        }
        register(e) {
            A(this._instance ?._addCaptureHook) || (this.xn(e), this.Tn(e))
        }
        Tn(e) {
            var t = e.filter((e => {
                var t;
                return e.conditions ?.actions && ((t = e.conditions) == null || (t = t.actions) == null || (t = t.values) == null ? void 0 : t.length) > 0
            }));
            t.length !== 0 && (this.An ?? (this.An = new Eo(this._instance), this.An.init(), this.An.fn((e => {
                this.onAction(e)
            }))), t.forEach((e => {
                var t, n, r, i, a;
                e.conditions && (t = e.conditions) != null && t.actions && (n = e.conditions) != null && (n = n.actions) != null && n.values && ((r = e.conditions) == null || (r = r.actions) == null || (r = r.values) == null ? void 0 : r.length) > 0 && ((i = this.An) == null || i.register(e.conditions.actions.values), (a = e.conditions) == null || (a = a.actions) == null || (a = a.values) == null || a.forEach((t => {
                    if (t && t.name) {
                        var n = this._n.get(t.name);
                        n && n.push(e.id), this._n.set(t.name, n || [e.id])
                    }
                })))
            })))
        }
        xn(e) {
            var t, n = e.filter((e => {
                    var t;
                    return e.conditions ?.events && ((t = e.conditions) == null || (t = t.events) == null || (t = t.values) == null ? void 0 : t.length) > 0
                })),
                r = e.filter((e => {
                    var t;
                    return e.conditions ?.cancelEvents && ((t = e.conditions) == null || (t = t.cancelEvents) == null || (t = t.values) == null ? void 0 : t.length) > 0
                }));
            n.length === 0 && r.length === 0 || ((t = this._instance) == null || t._addCaptureHook(((e, t) => {
                this.onEvent(e, t)
            })), this.bn = this.Cn(e, jr.Activation), this.wn = this.Cn(e, jr.Cancellation))
        }
        onEvent(e, t) {
            var n, r = this.re(),
                i = this.En(),
                a = this.Rn(),
                o = ((n = this._instance) == null || (n = n.persistence) == null ? void 0 : n.props[i]) || [];
            if (a === e && t && o.length > 0) {
                var s, c;
                r.info(`event matched, removing item from activated items`, {
                    event: e,
                    eventPayload: t,
                    existingActivatedItems: o
                });
                var l = (t == null || (s = t.properties) == null ? void 0 : s.$survey_id) || (t == null || (c = t.properties) == null ? void 0 : c.$product_tour_id);
                if (l) {
                    var u = o.indexOf(l);
                    0 > u || (o.splice(u, 1), this.Nn(o))
                }
            } else {
                if (this.wn.has(e)) {
                    var d = this.Sn(e, t, jr.Cancellation);
                    d.length > 0 && (r.info(`cancel event matched, cancelling items`, {
                        event: e,
                        itemsToCancel: d.map((e => e.id))
                    }), d.forEach((e => {
                        var t = o.indexOf(e.id);
                        0 > t || o.splice(t, 1), this.Mn(e.id)
                    })), this.Nn(o))
                }
                if (this.bn.has(e)) {
                    r.info(`event name matched`, {
                        event: e,
                        eventPayload: t,
                        items: this.bn.get(e)
                    });
                    var f = this.Sn(e, t, jr.Activation);
                    this.Nn(o.concat(f.map((e => e.id)) || []))
                }
            }
        }
        onAction(e) {
            var t, n = this.En(),
                r = ((t = this._instance) == null || (t = t.persistence) == null ? void 0 : t.props[n]) || [];
            this._n.has(e) && this.Nn(r.concat(this._n.get(e) || []))
        }
        Nn(e) {
            var t, n = this.re(),
                r = this.En(),
                i = [...new Set(e)].filter((e => !this.Fn(e)));
            n.info(`updating activated items`, {
                activatedItems: i
            }), (t = this._instance) == null || (t = t.persistence) == null || t.register({
                [r]: i
            })
        }
        getActivatedIds() {
            var e, t = this.En();
            return ((e = this._instance) == null || (e = e.persistence) == null ? void 0 : e.props[t]) || []
        }
        getEventToItemsMap() {
            return this.bn
        }
        On() {
            return this.An
        }
    },
    Oo = class extends Do {
        constructor(e) {
            super(e)
        }
        En() {
            return `$surveys_activated`
        }
        Rn() {
            return zr.SHOWN
        }
        kn(e) {
            var t;
            (t = this._instance) == null || t.getSurveys(e)
        }
        Mn(e) {
            var t;
            (t = this._instance) == null || t.cancelPendingSurvey(e)
        }
        re() {
            return Q
        }
        Fn() {
            return !1
        }
        getSurveys() {
            return this.getActivatedIds()
        }
        getEventToSurveys() {
            return this.getEventToItemsMap()
        }
    },
    ko = `SDK is not enabled or survey functionality is not yet loaded`,
    Ao = `Disabled. Not loading surveys.`,
    jo = e != null && e.location ? pr(e.location.hash, `__posthog`) || pr(location.hash, `state`) : null,
    Mo = `_postHogToolbarParams`,
    No = U(`[Toolbar]`),
    $ = U(`[FeatureFlags]`),
    Po = U(`[FeatureFlags]`, {
        debugEnabled: !0
    }),
    Fo = `" failed. Feature flags didn't load in time.`,
    Io = `$active_feature_flags`,
    Lo = `$override_feature_flags`,
    Ro = `$feature_flag_request_id`,
    zo = e => {
        for (var t = {}, n = 0; e.length > n; n++) t[e[n]] = !0;
        return t
    },
    Bo = e => {
        var t = {};
        for (var [n, r] of Mn(e || {})) r && (t[n] = r);
        return t
    },
    Vo = U(`[Error tracking]`),
    Ho = `Refusing to render web experiment since the viewer is a likely bot`,
    Uo = {
        icontains: (t, n) => !!e && n.href.toLowerCase().indexOf(t.toLowerCase()) > -1,
        not_icontains: (t, n) => !!e && n.href.toLowerCase().indexOf(t.toLowerCase()) === -1,
        regex: (t, n) => !!e && Ki(n.href, t),
        not_regex: (t, n) => !!e && !Ki(n.href, t),
        exact: (e, t) => t.href === e,
        is_not: (e, t) => t.href !== e
    },
    Wo = class t {
        get Rt() {
            return this._instance.config
        }
        constructor(e) {
            var n = this;
            this.getWebExperimentsAndEvaluateDisplayLogic = function(e) {
                e === void 0 && (e = !1), n.getWebExperiments((e => {
                    t.Pn(`retrieved web experiments from the server`), n.Ln = new Map, e.forEach((e => {
                        if (e.feature_flag_key) {
                            var r;
                            n.Ln && (t.Pn(`setting flag key `, e.feature_flag_key, ` to web experiment `, e), (r = n.Ln) == null || r.set(e.feature_flag_key, e));
                            var i = n._instance.getFeatureFlag(e.feature_flag_key);
                            j(i) && e.variants[i] && n.Dn(e.name, i, e.variants[i].transforms)
                        } else if (e.variants)
                            for (var a in e.variants) {
                                var o = e.variants[a];
                                t.Bn(o) && n.Dn(e.name, a, o.transforms)
                            }
                    }))
                }), e)
            }, this._instance = e, this._instance.onFeatureFlags((e => {
                this.onFeatureFlags(e)
            }))
        }
        initialize() {}
        onFeatureFlags(e) {
            if (this._is_bot()) t.Pn(Ho);
            else if (!this.Rt.disable_web_experiments) {
                if (P(this.Ln)) return this.Ln = new Map, this.loadIfEnabled(), void this.previewWebExperiment();
                t.Pn(`applying feature flags`, e), e.forEach((e => {
                    var t;
                    if (this.Ln && (t = this.Ln) != null && t.has(e)) {
                        var n = this._instance.getFeatureFlag(e),
                            r = this.Ln ?.get(e);
                        n && r != null && r.variants[n] && this.Dn(r.name, n, r.variants[n].transforms)
                    }
                }))
            }
        }
        previewWebExperiment() {
            var e = t.getWindowLocation();
            if (e != null && e.search) {
                var n = dr(e ?.search, `__experiment_id`),
                    r = dr(e ?.search, `__experiment_variant`);
                n && r && (t.Pn(`previewing web experiments ` + n + ` && ` + r), this.getWebExperiments((e => {
                    this.jn(parseInt(n), r, e)
                }), !1, !0))
            }
        }
        loadIfEnabled() {
            this.Rt.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic()
        }
        getWebExperiments(e, t, n) {
            if (this.Rt.disable_web_experiments && !n) return e([]);
            var r = this._instance.get_property(`$web_experiments`);
            if (r && !t) return e(r);
            this._instance._send_request({
                url: this._instance.requestRouter.endpointFor(`api`, `/api/web_experiments/?token=` + this.Rt.token),
                method: `GET`,
                callback: t => e(t.statusCode === 200 && t.json && t.json.experiments || [])
            })
        }
        jn(e, n, r) {
            var i = r.filter((t => t.id === e));
            i && i.length > 0 && (t.Pn(`Previewing web experiment [` + i[0].name + `] with variant [` + n + `]`), this.Dn(i[0].name, n, i[0].variants[n].transforms))
        }
        static Bn(e) {
            return !P(e.conditions) && t.qn(e) && t.Zn(e)
        }
        static qn(e) {
            if (P(e.conditions) || P(e.conditions ?.url)) return !0;
            var n, r = t.getWindowLocation();
            return !!r && ((n = e.conditions) == null || !n.url || Uo[e.conditions ?.urlMatchType ?? `icontains`](e.conditions.url, r))
        }
        static getWindowLocation() {
            return e ?.location
        }
        static Zn(e) {
            if (P(e.conditions) || P(e.conditions ?.utm)) return !0;
            var t = yr();
            if (t.utm_source) {
                var n, r, i, a, o, s, c, l, u = (n = e.conditions) == null || (n = n.utm) == null || !n.utm_campaign || ((r = e.conditions) == null || (r = r.utm) == null ? void 0 : r.utm_campaign) == t.utm_campaign,
                    d = (i = e.conditions) == null || (i = i.utm) == null || !i.utm_source || ((a = e.conditions) == null || (a = a.utm) == null ? void 0 : a.utm_source) == t.utm_source,
                    f = (o = e.conditions) == null || (o = o.utm) == null || !o.utm_medium || ((s = e.conditions) == null || (s = s.utm) == null ? void 0 : s.utm_medium) == t.utm_medium,
                    p = (c = e.conditions) == null || (c = c.utm) == null || !c.utm_term || ((l = e.conditions) == null || (l = l.utm) == null ? void 0 : l.utm_term) == t.utm_term;
                return u && f && p && d
            }
            return !1
        }
        static Pn(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
            H.info(`[WebExperiments] ` + e, n)
        }
        Dn(e, n, r) {
            this._is_bot() ? t.Pn(Ho) : n === `control` ? t.Pn(`Control variants leave the page unmodified.`) : r.forEach((r => {
                r.selector && (t.Pn(`applying transform of variant ` + n + ` for experiment ` + e + ` `, r), (document ?.querySelectorAll(r.selector)) ?.forEach((e => {
                    var t = e;
                    r.html && (t.innerHTML = r.html), r.css && t.setAttribute(`style`, r.css)
                })))
            }))
        }
        _is_bot() {
            return n && this._instance ? Gi(n, this.Rt.custom_blocked_useragents) : void 0
        }
    },
    Go = U(`[Conversations]`),
    Ko = `Conversations not available yet.`,
    qo = {
        trace: {
            text: `TRACE`,
            number: 1
        },
        debug: {
            text: `DEBUG`,
            number: 5
        },
        info: {
            text: `INFO`,
            number: 9
        },
        warn: {
            text: `WARN`,
            number: 13
        },
        error: {
            text: `ERROR`,
            number: 17
        },
        fatal: {
            text: `FATAL`,
            number: 21
        }
    },
    Jo = qo.info;

function Yo(e) {
    if (L(e)) return {
        boolValue: e
    };
    if (F(e)) return Number.isInteger(e) ? {
        intValue: e
    } : {
        doubleValue: e
    };
    if (typeof e == `string`) return {
        stringValue: e
    };
    if (E(e)) return {
        arrayValue: {
            values: e.map((e => Yo(e)))
        }
    };
    try {
        return {
            stringValue: JSON.stringify(e)
        }
    } catch {
        return {
            stringValue: String(e)
        }
    }
}

function Xo(e) {
    var t = [];
    for (var n in e) {
        var r = e[n];
        N(r) || A(r) || t.push({
            key: n,
            value: Yo(r)
        })
    }
    return t
}
var Zo = {
        featureFlags: class {
            constructor(e) {
                this.$n = !1, this.Vn = !1, this.Hn = !1, this.zn = !1, this.Un = !1, this.Yn = !1, this.Gn = !1, this.Wn = !1, this._instance = e, this.featureFlagEventHandlers = []
            }
            get Rt() {
                return this._instance.config
            }
            get Xi() {
                return this._instance.persistence
            }
            Xn(e) {
                return this._instance.get_property(e)
            }
            Jn() {
                var e;
                return (e = this.Xi ?.pi(this.Rt.feature_flag_cache_ttl_ms)) != null && e
            }
            Kn() {
                return !!this.Jn() && (this.Wn || this.Hn || (this.Wn = !0, $.warn(`Feature flag cache is stale, triggering refresh...`), this.reloadFeatureFlags()), !0)
            }
            Qn() {
                var e = this.Rt.evaluation_contexts ?? this.Rt.evaluation_environments;
                return !this.Rt.evaluation_environments || this.Rt.evaluation_contexts || this.Gn || ($.warn(`evaluation_environments is deprecated. Use evaluation_contexts instead. evaluation_environments will be removed in a future version.`), this.Gn = !0), e != null && e.length ? e.filter((e => {
                    var t = e && typeof e == `string` && e.trim().length > 0;
                    return t || $.error(`Invalid evaluation context found:`, e, `Expected non-empty string`), t
                })) : []
            }
            ts() {
                return this.Qn().length > 0
            }
            initialize() {
                var {
                    config: e
                } = this._instance, t = e.bootstrap ?.featureFlags ?? {};
                if (Object.keys(t).length) {
                    var n = e.bootstrap ?.featureFlagPayloads ?? {},
                        r = Object.keys(t).filter((e => !!t[e])).reduce(((e, n) => (e[n] = t[n] || !1, e)), {}),
                        i = Object.keys(n).filter((e => r[e])).reduce(((e, t) => (n[t] && (e[t] = n[t]), e)), {});
                    this.receivedFeatureFlags({
                        featureFlags: r,
                        featureFlagPayloads: i
                    })
                }
            }
            updateFlags(e, t, n) {
                var r = n != null && n.merge ? this.getFlagVariants() : {},
                    i = n != null && n.merge ? this.getFlagPayloads() : {},
                    a = h({}, r, e),
                    o = h({}, i, t),
                    s = {};
                for (var [c, l] of Object.entries(a)) {
                    var u = typeof l == `string`;
                    s[c] = {
                        key: c,
                        enabled: !!u || !!l,
                        variant: u ? l : void 0,
                        reason: void 0,
                        metadata: A(o ?.[c]) ? void 0 : {
                            id: 0,
                            version: void 0,
                            description: void 0,
                            payload: o[c]
                        }
                    }
                }
                this.receivedFeatureFlags({
                    flags: s
                })
            }
            get hasLoadedFlags() {
                return this.Vn
            }
            getFlags() {
                return Object.keys(this.getFlagVariants())
            }
            getFlagsWithDetails() {
                var e = this.Xn(Zt),
                    t = this.Xn(Lo),
                    n = this.Xn($t);
                if (!n && !t) return e || {};
                var r = G({}, e || {});
                for (var i of [...new Set([...Object.keys(n || {}), ...Object.keys(t || {})])]) {
                    var a, o, s = r[i],
                        c = t ?.[i],
                        l = A(c) ? (a = s ?.enabled) != null && a : !!c,
                        u = A(c) ? s.variant : typeof c == `string` ? c : void 0,
                        d = n ?.[i],
                        f = h({}, s, {
                            enabled: l,
                            variant: l ? u ?? s ?.variant : void 0
                        });
                    l !== s ?.enabled && (f.original_enabled = s ?.enabled), u !== s ?.variant && (f.original_variant = s ?.variant), d && (f.metadata = h({}, s ?.metadata, {
                        payload: d,
                        original_payload: s == null || (o = s.metadata) == null ? void 0 : o.payload
                    })), r[i] = f
                }
                return this.$n ||= ($.warn(` Overriding feature flag details!`, {
                    flagDetails: e,
                    overriddenPayloads: n,
                    finalDetails: r
                }), !0), r
            }
            getFlagVariants() {
                var e = this.Xn(Yt),
                    t = this.Xn(Lo);
                if (!t) return e || {};
                for (var n = G({}, e), r = Object.keys(t), i = 0; r.length > i; i++) n[r[i]] = t[r[i]];
                return this.$n ||= ($.warn(` Overriding feature flags!`, {
                    enabledFlags: e,
                    overriddenFlags: t,
                    finalFlags: n
                }), !0), n
            }
            getFlagPayloads() {
                var e = this.Xn(Qt),
                    t = this.Xn($t);
                if (!t) return e || {};
                for (var n = G({}, e || {}), r = Object.keys(t), i = 0; r.length > i; i++) n[r[i]] = t[r[i]];
                return this.$n ||= ($.warn(` Overriding feature flag payloads!`, {
                    flagPayloads: e,
                    overriddenPayloads: t,
                    finalPayloads: n
                }), !0), n
            }
            reloadFeatureFlags() {
                this.zn || this.Rt.advanced_disable_feature_flags || this.es || (this._instance.kr.emit(`featureFlagsReloading`, !0), this.es = setTimeout((() => {
                    this.rs()
                }), 5))
            }
            ns() {
                clearTimeout(this.es), this.es = void 0
            }
            ensureFlagsLoaded() {
                this.Vn || this.Hn || this.es || this.reloadFeatureFlags()
            }
            setAnonymousDistinctId(e) {
                this.$anon_distinct_id = e
            }
            setReloadingPaused(e) {
                this.zn = e
            }
            rs(e) {
                if (this.ns(), !this._instance.ki())
                    if (this.Hn) this.Un = !0;
                    else {
                        var t = this.Rt.token,
                            n = this.Xn(Pt),
                            r = {
                                token: t,
                                distinct_id: this._instance.get_distinct_id(),
                                groups: this._instance.getGroups(),
                                $anon_distinct_id: this.$anon_distinct_id,
                                person_properties: h({}, this.Xi ?.get_initial_props() || {}, this.Xn(en) || {}),
                                group_properties: this.Xn(tn),
                                timezone: Dr()
                            };
                        N(n) || A(n) || (r.$device_id = n), (e != null && e.disableFlags || this.Rt.advanced_disable_feature_flags) && (r.disable_flags = !0), this.ts() && (r.evaluation_contexts = this.Qn());
                        var i = this._instance.requestRouter.endpointFor(`flags`, `/flags/?v=2` + (this.Rt.advanced_only_evaluate_survey_feature_flags ? `&only_evaluate_survey_feature_flags=true` : ``));
                        this.Hn = !0, this._instance._send_request({
                            method: `POST`,
                            url: i,
                            data: r,
                            compression: this.Rt.disable_compression ? void 0 : Xr.Base64,
                            timeout: this.Rt.feature_flag_request_timeout_ms,
                            callback: e => {
                                var t, n, i, a = !0;
                                if (e.statusCode === 200 && (this.Un || (this.$anon_distinct_id = void 0), a = !1), this.Hn = !1, !r.disable_flags || this.Un) {
                                    this.Yn = !a;
                                    var o = [];
                                    e.error ? e.error instanceof Error ? o.push(e.error.name === `AbortError` ? `timeout` : `connection_error`) : o.push(`unknown_error`) : e.statusCode !== 200 && o.push(`api_error_` + e.statusCode), (t = e.json) != null && t.errorsWhileComputingFlags && o.push(`errors_while_computing_flags`);
                                    var s = !((n = e.json) == null || (n = n.quotaLimited) == null || !n.includes(`feature_flags`));
                                    s && o.push(`quota_limited`), (i = this.Xi) == null || i.register({
                                        [sn]: o
                                    }), s ? $.warn(`You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.`) : (r.disable_flags || this.receivedFeatureFlags(e.json ?? {}, a, {
                                        partialResponse: !!this.Rt.advanced_only_evaluate_survey_feature_flags
                                    }), this.Un && (this.Un = !1, this.rs()))
                                }
                            }
                        })
                    }
            }
            getFeatureFlag(e, t) {
                if (t === void 0 && (t = {}), !t.fresh || this.Yn)
                    if (this.Vn || this.getFlags() && this.getFlags().length > 0) {
                        if (!this.Kn()) {
                            var n = this.getFeatureFlagResult(e, t);
                            return n ?.variant ?? n ?.enabled
                        }
                    } else $.warn(`getFeatureFlag for key "` + e + Fo)
            }
            getFeatureFlagDetails(e) {
                return this.getFlagsWithDetails()[e]
            }
            getFeatureFlagPayload(e) {
                return this.getFeatureFlagResult(e, {
                    send_event: !1
                }) ?.payload
            }
            getFeatureFlagResult(e, t) {
                if (t === void 0 && (t = {}), !t.fresh || this.Yn)
                    if (this.Vn || this.getFlags() && this.getFlags().length > 0) {
                        if (!this.Kn()) {
                            var n = this.getFlagVariants(),
                                r = e in n,
                                i = n[e],
                                a = this.getFlagPayloads()[e],
                                o = String(i),
                                s = this.Xn(Ro) || void 0,
                                c = this.Xn(cn) || void 0,
                                l = this.Xn(an) || {};
                            if (this.Rt.advanced_feature_flags_dedup_per_session) {
                                var u, d = this._instance.get_session_id(),
                                    f = this.Xn(on);
                                d && d !== f && (l = {}, (u = this.Xi) == null || u.register({
                                    [an]: l,
                                    [on]: d
                                }))
                            }
                            if ((t.send_event || !(`send_event` in t)) && (!(e in l) || !l[e].includes(o))) {
                                var p, m, h, g, _, v, y, b;
                                E(l[e]) ? l[e].push(o) : l[e] = [o], (p = this.Xi) == null || p.register({
                                    [an]: l
                                });
                                var x = this.getFeatureFlagDetails(e),
                                    S = [...this.Xn(sn) ?? []];
                                A(i) && S.push(`flag_missing`);
                                var C = {
                                    $feature_flag: e,
                                    $feature_flag_response: i,
                                    $feature_flag_payload: a || null,
                                    $feature_flag_request_id: s,
                                    $feature_flag_evaluated_at: c,
                                    $feature_flag_bootstrapped_response: ((m = this.Rt.bootstrap) == null || (m = m.featureFlags) == null ? void 0 : m[e]) || null,
                                    $feature_flag_bootstrapped_payload: ((h = this.Rt.bootstrap) == null || (h = h.featureFlagPayloads) == null ? void 0 : h[e]) || null,
                                    $used_bootstrap_value: !this.Yn
                                };
                                A(x == null || (g = x.metadata) == null ? void 0 : g.version) || (C.$feature_flag_version = x.metadata.version);
                                var w, ee = (x == null || (_ = x.reason) == null ? void 0 : _.description) ?? (x == null || (v = x.reason) == null ? void 0 : v.code);
                                ee && (C.$feature_flag_reason = ee), x != null && (y = x.metadata) != null && y.id && (C.$feature_flag_id = x.metadata.id), A(x ?.original_variant) && A(x ?.original_enabled) || (C.$feature_flag_original_response = A(x.original_variant) ? x.original_enabled : x.original_variant), x != null && (b = x.metadata) != null && b.original_payload && (C.$feature_flag_original_payload = x == null || (w = x.metadata) == null ? void 0 : w.original_payload), S.length && (C.$feature_flag_error = S.join(`,`)), this._instance.capture(`$feature_flag_called`, C)
                            }
                            if (r) {
                                var T = a;
                                if (!A(a)) try {
                                    T = JSON.parse(a)
                                } catch {}
                                return {
                                    key: e,
                                    enabled: !!i,
                                    variant: typeof i == `string` ? i : void 0,
                                    payload: T
                                }
                            }
                        }
                    } else $.warn(`getFeatureFlagResult for key "` + e + Fo)
            }
            getRemoteConfigPayload(e, t) {
                var n = this.Rt.token,
                    r = {
                        distinct_id: this._instance.get_distinct_id(),
                        token: n
                    };
                this.ts() && (r.evaluation_contexts = this.Qn()), this._instance._send_request({
                    method: `POST`,
                    url: this._instance.requestRouter.endpointFor(`flags`, `/flags/?v=2`),
                    data: r,
                    compression: this.Rt.disable_compression ? void 0 : Xr.Base64,
                    timeout: this.Rt.feature_flag_request_timeout_ms,
                    callback(n) {
                        var r = n.json ?.featureFlagPayloads;
                        t(r ?.[e] || void 0)
                    }
                })
            }
            isFeatureEnabled(e, t) {
                if (t === void 0 && (t = {}), !t.fresh || this.Yn) {
                    if (this.Vn || this.getFlags() && this.getFlags().length > 0) {
                        var n = this.getFeatureFlag(e, t);
                        return A(n) ? void 0 : !!n
                    }
                    $.warn(`isFeatureEnabled for key "` + e + Fo)
                }
            }
            addFeatureFlagsHandler(e) {
                this.featureFlagEventHandlers.push(e)
            }
            removeFeatureFlagsHandler(e) {
                this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter((t => t !== e))
            }
            receivedFeatureFlags(e, t, n) {
                if (this.Xi) {
                    this.Vn = !0;
                    var r = this.getFlagVariants(),
                        i = this.getFlagPayloads(),
                        a = this.getFlagsWithDetails();
                    (function(e, t, n, r, i, a) {
                        n === void 0 && (n = {}), r === void 0 && (r = {}), i === void 0 && (i = {});
                        var o = (e => {
                                var t = e.flags;
                                return t ? (e.featureFlags = Object.fromEntries(Object.keys(t).map((e => [e, t[e].variant ?? t[e].enabled]))), e.featureFlagPayloads = Object.fromEntries(Object.keys(t).filter((e => t[e].enabled)).filter((e => t[e].metadata ?.payload)).map((e => [e, t[e].metadata ?.payload])))) : $.warn(`Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version`), e
                            })(e),
                            s = o.flags,
                            c = o.featureFlags,
                            l = o.featureFlagPayloads;
                        if (c) {
                            var u = e.requestId,
                                d = e.evaluatedAt;
                            if (E(c)) {
                                $.warn(`v1 of the feature flags endpoint is deprecated. Please use the latest version.`);
                                var f = {};
                                if (c)
                                    for (var p = 0; c.length > p; p++) f[c[p]] = !0;
                                t && t.register({
                                    [Io]: c,
                                    [Yt]: f
                                })
                            } else {
                                var m = c,
                                    g = l,
                                    _ = s;
                                if (a != null && a.partialResponse) m = h({}, n, m), g = h({}, r, g), _ = h({}, i, _);
                                else if (e.errorsWhileComputingFlags)
                                    if (s) {
                                        var v = new Set(Object.keys(s).filter((e => {
                                            var t;
                                            return !((t = s[e]) != null && t.failed)
                                        })));
                                        m = h({}, n, Object.fromEntries(Object.entries(m).filter((e => {
                                            var [t] = e;
                                            return v.has(t)
                                        })))), g = h({}, r, Object.fromEntries(Object.entries(g || {}).filter((e => {
                                            var [t] = e;
                                            return v.has(t)
                                        })))), _ = h({}, i, Object.fromEntries(Object.entries(_ || {}).filter((e => {
                                            var [t] = e;
                                            return v.has(t)
                                        }))))
                                    } else m = h({}, n, m), g = h({}, r, g), _ = h({}, i, _);
                                t && t.register(h({
                                    [Io]: Object.keys(Bo(m)),
                                    [Yt]: m || {},
                                    [Qt]: g || {},
                                    [Zt]: _ || {}
                                }, u ? {
                                    [Ro]: u
                                } : {}, d ? {
                                    [cn]: d
                                } : {}))
                            }
                        }
                    })(e, this.Xi, r, i, a, n), t || (this.Wn = !1), this.ss(t)
                }
            }
            override(e, t) {
                t === void 0 && (t = !1), $.warn(`override is deprecated. Please use overrideFeatureFlags instead.`), this.overrideFeatureFlags({
                    flags: e,
                    suppressWarning: t
                })
            }
            overrideFeatureFlags(e) {
                if (!this._instance.__loaded || !this.Xi) return $.uninitializedWarning(`posthog.featureFlags.overrideFeatureFlags`);
                if (!1 === e) return this.Xi.unregister(Lo), this.Xi.unregister($t), this.ss(), Po.info(`All overrides cleared`);
                if (E(e)) {
                    var t = zo(e);
                    return this.Xi.register({
                        [Lo]: t
                    }), this.ss(), Po.info(`Flag overrides set`, {
                        flags: e
                    })
                }
                if (e && typeof e == `object` && (`flags` in e || `payloads` in e)) {
                    var n, r = e;
                    if (this.$n = !!((n = r.suppressWarning) != null && n), `flags` in r) {
                        if (!1 === r.flags) this.Xi.unregister(Lo), Po.info(`Flag overrides cleared`);
                        else if (r.flags) {
                            if (E(r.flags)) {
                                var i = zo(r.flags);
                                this.Xi.register({
                                    [Lo]: i
                                })
                            } else this.Xi.register({
                                [Lo]: r.flags
                            });
                            Po.info(`Flag overrides set`, {
                                flags: r.flags
                            })
                        }
                    }
                    `payloads` in r && (!1 === r.payloads ? (this.Xi.unregister($t), Po.info(`Payload overrides cleared`)) : r.payloads && (this.Xi.register({
                        [$t]: r.payloads
                    }), Po.info(`Payload overrides set`, {
                        payloads: r.payloads
                    }))), this.ss();
                    return
                }
                if (e && typeof e == `object`) return this.Xi.register({
                    [Lo]: e
                }), this.ss(), Po.info(`Flag overrides set`, {
                    flags: e
                });
                $.warn(`Invalid overrideOptions provided to overrideFeatureFlags`, {
                    overrideOptions: e
                })
            }
            onFeatureFlags(e) {
                if (this.addFeatureFlagsHandler(e), this.Vn) {
                    var {
                        flags: t,
                        flagVariants: n
                    } = this.os();
                    e(t, n)
                }
                return () => this.removeFeatureFlagsHandler(e)
            }
            updateEarlyAccessFeatureEnrollment(e, t, n) {
                var r, i = (this.Xn(Xt) || []).find((t => t.flagKey === e)),
                    a = {
                        [`$feature_enrollment/` + e]: t
                    },
                    o = {
                        $feature_flag: e,
                        $feature_enrollment: t,
                        $set: a
                    };
                i && (o.$early_access_feature_name = i.name), n && (o.$feature_enrollment_stage = n), this._instance.capture(`$feature_enrollment_update`, o), this.setPersonPropertiesForFlags(a, !1);
                var s = h({}, this.getFlagVariants(), {
                    [e]: t
                });
                (r = this.Xi) == null || r.register({
                    [Io]: Object.keys(Bo(s)),
                    [Yt]: s
                }), this.ss()
            }
            getEarlyAccessFeatures(e, t, n) {
                t === void 0 && (t = !1);
                var r = this.Xn(Xt),
                    i = n ? `&` + n.map((e => `stage=` + e)).join(`&`) : ``;
                if (r && !t) return e(r);
                this._instance._send_request({
                    url: this._instance.requestRouter.endpointFor(`api`, `/api/early_access_features/?token=` + this.Rt.token + i),
                    method: `GET`,
                    callback: t => {
                        var n, r;
                        if (t.json) {
                            var i = t.json.earlyAccessFeatures;
                            return (n = this.Xi) == null || n.unregister(Xt), (r = this.Xi) == null || r.register({
                                [Xt]: i
                            }), e(i)
                        }
                    }
                })
            }
            os() {
                var e = this.getFlags(),
                    t = this.getFlagVariants();
                return {
                    flags: e.filter((e => t[e])),
                    flagVariants: Object.keys(t).filter((e => t[e])).reduce(((e, n) => (e[n] = t[n], e)), {})
                }
            }
            ss(e) {
                var {
                    flags: t,
                    flagVariants: n
                } = this.os();
                this.featureFlagEventHandlers.forEach((r => r(t, n, {
                    errorsLoading: e
                })))
            }
            setPersonPropertiesForFlags(e, t) {
                t === void 0 && (t = !0);
                var n = this.Xn(en) || {},
                    r = e ?.$set || (e != null && e.$set_once ? {} : e),
                    i = e ?.$set_once,
                    a = {};
                if (i)
                    for (var o in i)({}).hasOwnProperty.call(i, o) && (o in n || (a[o] = i[o]));
                this._instance.register({
                    [en]: h({}, n, a, r)
                }), t && this._instance.reloadFeatureFlags()
            }
            resetPersonPropertiesForFlags() {
                this._instance.unregister(en)
            }
            setGroupPropertiesForFlags(e, t) {
                t === void 0 && (t = !0);
                var n = this.Xn(tn) || {};
                Object.keys(n).length !== 0 && Object.keys(n).forEach((t => {
                    n[t] = h({}, n[t], e[t]), delete e[t]
                })), this._instance.register({
                    [tn]: h({}, n, e)
                }), t && this._instance.reloadFeatureFlags()
            }
            resetGroupPropertiesForFlags(e) {
                if (e) {
                    var t = this.Xn(tn) || {};
                    this._instance.register({
                        [tn]: h({}, t, {
                            [e]: {}
                        })
                    })
                } else this._instance.unregister(tn)
            }
            reset() {
                this.Vn = !1, this.Hn = !1, this.zn = !1, this.Un = !1, this.Yn = !1, this.$anon_distinct_id = void 0, this.ns(), this.$n = !1
            }
        }
    },
    Qo = {
        sessionRecording: class {
            get Rt() {
                return this._instance.config
            }
            get Xi() {
                return this._instance.persistence
            }
            get started() {
                var e;
                return !((e = this.ls) == null || !e.isStarted)
            }
            get status() {
                return this.us === ho || this.us === go ? this.us : this.ls ?.status ?? this.us
            }
            constructor(e) {
                if (this._forceAllowLocalhostNetworkCapture = !1, this.us = po, this.hs = void 0, this._instance = e, !this._instance.sessionManager) throw vo.error(`started without valid sessionManager`), Error(_o + ` started without valid sessionManager. This is a bug.`);
                if (this.Rt.cookieless_mode === xn) throw Error(_o + ` cannot be used with cookieless_mode="always"`)
            }
            initialize() {
                this.startIfEnabledOrStop()
            }
            get cs() {
                var t, n = !((t = this._instance.get_property(Kt)) == null || !t.enabled),
                    r = !this.Rt.disable_session_recording,
                    i = this.Rt.disable_session_recording || this._instance.consent.isOptedOut();
                return e && n && r && !i
            }
            startIfEnabledOrStop(e) {
                var t;
                if (!this.cs || (t = this.ls) == null || !t.isStarted) {
                    var n = !A(Object.assign) && !A(Array.from);
                    this.cs && n ? (this.ds(e), vo.info(`starting`)) : (this.us = po, this.stopRecording())
                }
            }
            ds(e) {
                var t, n, r;
                this.cs && (this.us !== ho && this.us !== go && (this.us = mo), u != null && (t = u.__PosthogExtensions__) != null && (t = t.rrweb) != null && t.record && (n = u.__PosthogExtensions__) != null && n.initSessionRecording ? this.vs(e) : (r = u.__PosthogExtensions__) == null || r.loadExternalDependency == null || r.loadExternalDependency(this._instance, this.fs, (t => {
                    if (t) return vo.error(`could not load recorder`, t);
                    this.vs(e)
                })))
            }
            stopRecording() {
                var e, t;
                (e = this.hs) == null || e.call(this), this.hs = void 0, (t = this.ls) == null || t.stop()
            }
            ps() {
                var e, t;
                (e = this.hs) == null || e.call(this), this.hs = void 0, (t = this.ls) == null || t.discard()
            }
            gs() {
                var e;
                (e = this.Xi) == null || e.unregister(Jt)
            }
            ys(e, t) {
                if (P(e)) return null;
                var n, r = F(e) ? e : parseFloat(e);
                return typeof(n = r) != `number` || !Number.isFinite(n) || 0 > n || n > 1 ? (vo.warn(t + ` must be between 0 and 1. Ignoring invalid value:`, e), null) : r
            }
            bs(e) {
                if (this.Xi) {
                    var t, n = this.Xi,
                        r = () => {
                            var t = !1 === e.sessionRecording ? void 0 : e.sessionRecording,
                                r = this.ys(this.Rt.session_recording ?.sampleRate, `session_recording.sampleRate`),
                                i = this.ys(t ?.sampleRate, `remote config sampleRate`),
                                a = r ?? i;
                            P(a) && this.gs();
                            var o = t ?.minimumDurationMilliseconds;
                            n.register({
                                [Kt]: h({
                                    cache_timestamp: Date.now(),
                                    enabled: !!t
                                }, t, {
                                    networkPayloadCapture: h({
                                        capturePerformance: e.capturePerformance
                                    }, t ?.networkPayloadCapture),
                                    canvasRecording: {
                                        enabled: t ?.recordCanvas,
                                        fps: t ?.canvasFps,
                                        quality: t ?.canvasQuality
                                    },
                                    sampleRate: a,
                                    minimumDurationMilliseconds: A(o) ? null : o,
                                    endpoint: t ?.endpoint,
                                    triggerMatchType: t ?.triggerMatchType,
                                    masking: t ?.masking,
                                    urlTriggers: t ?.urlTriggers,
                                    version: t ?.version,
                                    triggerGroups: t ?.triggerGroups
                                })
                            })
                        };
                    r(), (t = this.hs) == null || t.call(this), this.hs = this._instance.sessionManager ?.onSessionId(r)
                }
            }
            onRemoteConfig(e) {
                `sessionRecording` in e ? !1 === e.sessionRecording ? (this.bs(e), this.ps()) : (this.bs(e), this.startIfEnabledOrStop()) : (this.us === ho && (this.us = go, vo.warn(`config refresh failed, recording will not start until page reload`)), this.startIfEnabledOrStop())
            }
            log(e, t) {
                var n;
                t === void 0 && (t = `log`), (n = this.ls) != null && n.log ? this.ls.log(e, t) : vo.warn(`log called before recorder was ready`)
            }
            get fs() {
                var e, t, n = (e = this._instance) == null || (e = e.persistence) == null ? void 0 : e.get_property(Kt);
                return (n == null || (t = n.scriptConfig) == null ? void 0 : t.script) || `lazy-recorder`
            }
            ws() {
                var e = this._instance.get_property(Kt);
                if (!e) return !1;
                var t = (typeof e == `object` ? e : JSON.parse(e)).cache_timestamp ?? Date.now();
                return 36e5 >= Date.now() - t
            }
            vs(e) {
                var t;
                if ((t = u.__PosthogExtensions__) == null || !t.initSessionRecording) return vo.warn(`Called on script loaded before session recording is available. This can be caused by adblockers.`), void this._instance.register_for_session({
                    $sdk_debug_recording_script_not_loaded: !0
                });
                if (this.ls || (this.ls = u.__PosthogExtensions__ ?.initSessionRecording(this._instance), this.ls._forceAllowLocalhostNetworkCapture = this._forceAllowLocalhostNetworkCapture), !this.ws()) {
                    if (this.us === go || this.us === ho) return;
                    this.us = ho, vo.info(`persisted remote config is stale, requesting fresh config before starting`), new Jr(this._instance).load();
                    return
                }
                this.us = mo, this.ls.start(e)
            }
            onRRwebEmit(e) {
                var t;
                (t = this.ls) == null || t.onRRwebEmit == null || t.onRRwebEmit(e)
            }
            overrideLinkedFlag() {
                var e, t;
                this.ls || (t = this.Xi) == null || t.register({
                    $replay_override_linked_flag: !0
                }), (e = this.ls) == null || e.overrideLinkedFlag()
            }
            overrideSampling() {
                var e, t;
                this.ls || (t = this.Xi) == null || t.register({
                    $replay_override_sampling: !0
                }), (e = this.ls) == null || e.overrideSampling()
            }
            overrideTrigger(e) {
                var t, n;
                this.ls || (n = this.Xi) == null || n.register({
                    [e === `url` ? `$replay_override_url_trigger` : `$replay_override_event_trigger`]: !0
                }), (t = this.ls) == null || t.overrideTrigger(e)
            }
            get sdkDebugProperties() {
                return this.ls ?.sdkDebugProperties || {
                    $recording_status: this.status
                }
            }
            tryAddCustomEvent(e, t) {
                var n;
                return !((n = this.ls) == null || !n.tryAddCustomEvent(e, t))
            }
        }
    },
    $o = {
        autocapture: class {
            constructor(e) {
                this._s = !1, this.Is = null, this.Cs = !1, this.instance = e, this.rageclicks = new to(e.config.rageclick), this.Ss = null
            }
            initialize() {
                this.startIfEnabled()
            }
            get Rt() {
                var e = O(this.instance.config.autocapture) ? this.instance.config.autocapture : {};
                return e.url_allowlist = e.url_allowlist ?.map((e => new RegExp(e))), e.url_ignorelist = e.url_ignorelist ?.map((e => new RegExp(e))), e
            }
            ks() {
                if (this.isBrowserSupported()) {
                    if (e && r) {
                        var t = t => {
                            t ||= e ?.event;
                            try {
                                this.xs(t)
                            } catch (e) {
                                ro.error(`Failed to capture event`, e)
                            }
                        };
                        if (K(r, `submit`, t, {
                                capture: !0
                            }), K(r, `change`, t, {
                                capture: !0
                            }), K(r, `click`, t, {
                                capture: !0
                            }), this.Rt.capture_copied_text) {
                            var n = t => {
                                this.xs(t ||= e ?.event, no)
                            };
                            K(r, `copy`, n, {
                                capture: !0
                            }), K(r, `cut`, n, {
                                capture: !0
                            })
                        }
                    }
                } else ro.info(`Disabling Automatic Event Collection because this browser is not supported`)
            }
            startIfEnabled() {
                this.isEnabled && !this._s && (this.ks(), this._s = !0)
            }
            onRemoteConfig(e) {
                e.elementsChainAsString && (this.Cs = e.elementsChainAsString), this.instance.persistence && this.instance.persistence.register({
                    [Lt]: !!e.autocapture_opt_out
                }), this.Is = !!e.autocapture_opt_out, this.startIfEnabled()
            }
            setElementSelectors(e) {
                this.Ss = e
            }
            getElementSelectors(e) {
                var t, n = [];
                return (t = this.Ss) == null || t.forEach((t => {
                    (r ?.querySelectorAll(t)) ?.forEach((r => {
                        e === r && n.push(t)
                    }))
                })), n
            }
            get isEnabled() {
                var e = this.instance.persistence ?.props[Lt];
                if (N(this.Is) && !L(e) && !this.instance.ki()) return !1;
                var t = this.Is ?? !!e;
                return !!this.instance.config.autocapture && !t
            }
            xs(t, n) {
                if (n === void 0 && (n = `$autocapture`), this.isEnabled) {
                    var r, i = Pa(t);
                    Da(i) && (i = i.parentNode || null), n === `$autocapture` && t.type === `click` && t instanceof MouseEvent && this.instance.config.rageclick && (r = this.rageclicks) != null && r.isRageClick(t.clientX, t.clientY, t.timeStamp || new Date().getTime()) && function(t, n) {
                        if (!e || Ba(t)) return !1;
                        var r, i;
                        if (L(n) ? (r = !!n && za, i = void 0) : (r = n ?.css_selector_ignorelist ?? za, i = n ?.content_ignorelist), !1 === r) return !1;
                        var {
                            targetElementList: a
                        } = Va(t, !1);
                        return ! function(e, t) {
                            if (!1 === e || A(e)) return !1;
                            var n;
                            if (!0 === e) n = Ra;
                            else {
                                if (!E(e)) return !1;
                                if (e.length > 10) return H.error(`[PostHog] content_ignorelist array cannot exceed 10 items. Use css_selector_ignorelist for more complex matching.`), !1;
                                n = e.map((e => e.toLowerCase()))
                            }
                            return t.some((e => {
                                var {
                                    safeText: t,
                                    ariaLabel: r
                                } = e;
                                return n.some((e => t.includes(e) || r.includes(e)))
                            }))
                        }(i, a.map((e => ({
                            safeText: Na(e).toLowerCase(),
                            ariaLabel: e.getAttribute(`aria-label`) ?.toLowerCase().trim() || ``
                        })))) && !Ia(a, r)
                    }(i, this.instance.config.rageclick) && this.xs(t, `$rageclick`);
                    var a = n === no;
                    if (i && function(t, n, r, i, a) {
                            var o, s, c;
                            if (r === void 0 && (r = void 0), !e || Ba(t) || (o = r) != null && o.url_allowlist && !Aa(r.url_allowlist) || (s = r) != null && s.url_ignorelist && Aa(r.url_ignorelist)) return !1;
                            if ((c = r) != null && c.dom_event_allowlist) {
                                var l = r.dom_event_allowlist;
                                if (l && !l.some((e => n.type === e))) return !1
                            }
                            var {
                                parentIsUsefulElement: u,
                                targetElementList: d
                            } = Va(t, i);
                            if (! function(e, t) {
                                    var n = t ?.element_allowlist;
                                    if (A(n)) return !0;
                                    var r, i = function(e) {
                                        if (n.some((t => e.tagName.toLowerCase() === t))) return {
                                            v: !0
                                        }
                                    };
                                    for (var a of e)
                                        if (r = i(a)) return r.v;
                                    return !1
                                }(d, r) || !Ia(d, r ?.css_selector_allowlist)) return !1;
                            var f = e.getComputedStyle(t);
                            if (f && f.getPropertyValue(`cursor`) === `pointer` && n.type === `click`) return !0;
                            var p = t.tagName.toLowerCase();
                            switch (p) {
                                case `html`:
                                    return !1;
                                case `form`:
                                    return (a || [`submit`]).indexOf(n.type) >= 0;
                                case `input`:
                                case `select`:
                                case `textarea`:
                                    return (a || [`change`, `click`]).indexOf(n.type) >= 0;
                                default:
                                    return u ? (a || [`click`]).indexOf(n.type) >= 0 : (a || [`click`]).indexOf(n.type) >= 0 && (Fa.indexOf(p) > -1 || t.getAttribute(`contenteditable`) === `true`)
                            }
                        }(i, t, this.Rt, a, a ? [`copy`, `cut`] : void 0)) {
                        var {
                            props: o,
                            explicitNoCapture: s
                        } = oo(i, {
                            e: t,
                            maskAllElementAttributes: this.instance.config.mask_all_element_attributes,
                            maskAllText: this.instance.config.mask_all_text,
                            elementAttributeIgnoreList: this.Rt.element_attribute_ignorelist,
                            elementsChainAsString: this.Cs
                        });
                        if (s) return !1;
                        var c = this.getElementSelectors(i);
                        if (c && c.length > 0 && (o.$element_selectors = c), n === no) {
                            var l, u = Ma(e == null || (l = e.getSelection()) == null ? void 0 : l.toString()),
                                d = t.type || `clipboard`;
                            if (!u) return !1;
                            o.$selected_content = u, o.$copy_type = d
                        }
                        return this.instance.capture(n, o), !0
                    }
                }
            }
            isBrowserSupported() {
                return D(r ?.querySelectorAll)
            }
        },
        historyAutocapture: class {
            constructor(t) {
                var n;
                this._instance = t, this.Ts = (e == null || (n = e.location) == null ? void 0 : n.pathname) || ``
            }
            initialize() {
                this.startIfEnabled()
            }
            get isEnabled() {
                return this._instance.config.capture_pageview === `history_change`
            }
            startIfEnabled() {
                this.isEnabled && (H.info(`History API monitoring enabled, starting...`), this.monitorHistoryChanges())
            }
            stop() {
                this.As && this.As(), this.As = void 0, H.info(`History API monitoring stopped`)
            }
            monitorHistoryChanges() {
                var t, n;
                if (e && e.history) {
                    var r = this;
                    (t = e.history.pushState) != null && t.__posthog_wrapped__ || co(e.history, `pushState`, (e => function(t, n, i) {
                        e.call(this, t, n, i), r.Es(`pushState`)
                    })), (n = e.history.replaceState) != null && n.__posthog_wrapped__ || co(e.history, `replaceState`, (e => function(t, n, i) {
                        e.call(this, t, n, i), r.Es(`replaceState`)
                    })), this.Rs()
                }
            }
            Es(t) {
                try {
                    var n, r = e == null || (n = e.location) == null ? void 0 : n.pathname;
                    if (!r) return;
                    r !== this.Ts && this.isEnabled && this._instance.capture(Dn, {
                        navigation_type: t
                    }), this.Ts = r
                } catch (e) {
                    H.error(`Error capturing ` + t + ` pageview`, e)
                }
            }
            Rs() {
                if (!this.As) {
                    var t = () => {
                        this.Es(`popstate`)
                    };
                    K(e, `popstate`, t), this.As = () => {
                        e && e.removeEventListener(`popstate`, t)
                    }
                }
            }
        },
        heatmaps: class {
            get Rt() {
                return this.instance.config
            }
            constructor(e) {
                var t;
                this.Ns = !1, this._s = !1, this.Ms = null, this.instance = e, this.Ns = !((t = this.instance.persistence) == null || !t.props[Rt]), this.rageclicks = new to(e.config.rageclick)
            }
            initialize() {
                this.startIfEnabled()
            }
            get flushIntervalMilliseconds() {
                var e = 5e3;
                return O(this.Rt.capture_heatmaps) && this.Rt.capture_heatmaps.flush_interval_milliseconds && (e = this.Rt.capture_heatmaps.flush_interval_milliseconds), e
            }
            get isEnabled() {
                return P(this.Rt.capture_heatmaps) ? P(this.Rt.enable_heatmaps) ? this.Ns : this.Rt.enable_heatmaps : !1 !== this.Rt.capture_heatmaps
            }
            startIfEnabled() {
                if (this.isEnabled) {
                    if (this._s) return;
                    yo.info(`starting...`), this.Fs(), this.Tt()
                } else clearInterval(this.Ms ?? void 0), this.Os(), this.getAndClearBuffer()
            }
            onRemoteConfig(e) {
                if (`heatmaps` in e) {
                    var t = !!e.heatmaps;
                    this.instance.persistence && this.instance.persistence.register({
                        [Rt]: t
                    }), this.Ns = t, this.startIfEnabled()
                }
            }
            getAndClearBuffer() {
                var e = this.T;
                return this.T = void 0, e
            }
            Ps(e) {
                this.wt(e.originalEvent, `deadclick`)
            }
            Tt() {
                this.Ms && clearInterval(this.Ms), this.Ms = r ?.visibilityState === `visible` ? setInterval(this.ji.bind(this), this.flushIntervalMilliseconds) : null
            }
            Fs() {
                e && r && (this.Ls = this.ji.bind(this), K(e, En, this.Ls), this.Ds = t => this.wt(t || e ?.event), K(r, `click`, this.Ds, {
                    capture: !0
                }), this.Bs = t => this.js(t || e ?.event), K(r, `mousemove`, this.Bs, {
                    capture: !0
                }), this.qs = new ir(this.instance, nr, this.Ps.bind(this)), this.qs.startIfEnabledOrStop(), this.Zs = this.Tt.bind(this), K(r, Tn, this.Zs), this._s = !0)
            }
            Os() {
                var t;
                e && r && (this.Ls && e.removeEventListener(En, this.Ls), this.Ds && r.removeEventListener(`click`, this.Ds, {
                    capture: !0
                }), this.Bs && r.removeEventListener(`mousemove`, this.Bs, {
                    capture: !0
                }), this.Zs && r.removeEventListener(Tn, this.Zs), clearTimeout(this.$s), (t = this.qs) == null || t.stop(), this._s = !1)
            }
            Vs(t, n) {
                var r = this.instance.scrollManager.scrollY(),
                    i = this.instance.scrollManager.scrollX(),
                    a = this.instance.scrollManager.scrollElement(),
                    o = function(t, n, r) {
                        for (var i = t; i && Ta(i) && !Ea(i, `body`);) {
                            if (i === r) return !1;
                            if (x(n, e ?.getComputedStyle(i).position)) return !0;
                            i = La(i)
                        }
                        return !1
                    }(Pa(t), [`fixed`, `sticky`], a);
                return {
                    x: t.clientX + (o ? 0 : i),
                    y: t.clientY + (o ? 0 : r),
                    target_fixed: o,
                    type: n
                }
            }
            wt(e, t) {
                var n;
                if (t === void 0 && (t = `click`), !wa(e.target) && bo(e)) {
                    var r = this.Vs(e, t);
                    (n = this.rageclicks) != null && n.isRageClick(e.clientX, e.clientY, new Date().getTime()) && this.Hs(h({}, r, {
                        type: `rageclick`
                    })), this.Hs(r)
                }
            }
            js(e) {
                !wa(e.target) && bo(e) && (clearTimeout(this.$s), this.$s = setTimeout((() => {
                    this.Hs(this.Vs(e, `mousemove`))
                }), 500))
            }
            Hs(t) {
                if (e) {
                    var n = e.location.href,
                        r = this.Rt.custom_personal_data_properties,
                        i = fr(n, this.Rt.mask_personal_data_properties ? [...hr, ...r || []] : [], _r);
                    this.T = this.T || {}, this.T[i] || (this.T[i] = []), this.T[i].push(t)
                }
            }
            ji() {
                this.T && !k(this.T) && this.instance.capture(`$$heatmap`, {
                    $heatmap_data: this.getAndClearBuffer()
                })
            }
        },
        deadClicksAutocapture: ir,
        webVitalsAutocapture: class {
            constructor(e) {
                var t;
                this.Ns = !1, this._s = !1, this.T = {
                    url: void 0,
                    metrics: [],
                    firstMetricTimestamp: void 0
                }, this.zs = () => {
                    clearTimeout(this.Us), this.T.metrics.length !== 0 && (this._instance.capture(`$web_vitals`, this.T.metrics.reduce(((e, t) => h({}, e, {
                        [`$web_vitals_` + t.name + `_event`]: h({}, t),
                        [`$web_vitals_` + t.name + `_value`]: t.value
                    })), {})), this.T = {
                        url: void 0,
                        metrics: [],
                        firstMetricTimestamp: void 0
                    })
                }, this.nt = e => {
                    var t = this._instance.sessionManager ?.checkAndGetSessionAndWindowId(!0);
                    if (A(t)) uo.error(`Could not read session ID. Dropping metrics!`);
                    else {
                        this.T = this.T || {
                            url: void 0,
                            metrics: [],
                            firstMetricTimestamp: void 0
                        };
                        var n = this.Ys();
                        A(n) || (P(e ?.name) || P(e ?.value) ? uo.error(`Invalid metric received`, e) : !this.Gs || this.Gs > e.value ? (this.T.url !== n && (this.zs(), this.Us = setTimeout(this.zs, this.flushToCaptureTimeoutMs)), A(this.T.url) && (this.T.url = n), this.T.firstMetricTimestamp = A(this.T.firstMetricTimestamp) ? Date.now() : this.T.firstMetricTimestamp, e.attribution && e.attribution.interactionTargetElement && (e.attribution.interactionTargetElement = void 0), this.T.metrics.push(h({}, e, {
                            $current_url: n,
                            $session_id: t.sessionId,
                            $window_id: t.windowId,
                            timestamp: Date.now()
                        })), this.T.metrics.length === this.allowedMetrics.length && this.zs()) : uo.error(`Ignoring metric with value >= ` + this.Gs, e))
                    }
                }, this.Ws = () => {
                    if (!this._s) {
                        var e, t, n, r, i = u.__PosthogExtensions__;
                        A(i) || A(i.postHogWebVitalsCallbacks) || ({
                            onLCP: e,
                            onCLS: t,
                            onFCP: n,
                            onINP: r
                        } = i.postHogWebVitalsCallbacks), e && t && n && r ? (this.allowedMetrics.indexOf(`LCP`) > -1 && e(this.nt.bind(this)), this.allowedMetrics.indexOf(`CLS`) > -1 && t(this.nt.bind(this)), this.allowedMetrics.indexOf(`FCP`) > -1 && n(this.nt.bind(this)), this.allowedMetrics.indexOf(`INP`) > -1 && r(this.nt.bind(this)), this._s = !0) : uo.error(`web vitals callbacks not loaded - not starting`)
                    }
                }, this._instance = e, this.Ns = !((t = this._instance.persistence) == null || !t.props[Ht]), this.startIfEnabled()
            }
            get Xs() {
                return this._instance.config.capture_performance
            }
            get allowedMetrics() {
                var e = O(this.Xs) ? this.Xs ?.web_vitals_allowed_metrics : void 0;
                return P(e) ? this._instance.persistence ?.props[Gt] || [`CLS`, `FCP`, `INP`, `LCP`] : e
            }
            get flushToCaptureTimeoutMs() {
                return (O(this.Xs) ? this.Xs.web_vitals_delayed_flush_ms : void 0) || 5e3
            }
            get useAttribution() {
                var e = O(this.Xs) ? this.Xs.web_vitals_attribution : void 0;
                return e != null && e
            }
            get Gs() {
                var e = O(this.Xs) && F(this.Xs.__web_vitals_max_value) ? this.Xs.__web_vitals_max_value : fo;
                return e > 0 && 6e4 >= e ? fo : e
            }
            get isEnabled() {
                var e = i ?.protocol;
                if (e !== `http:` && e !== `https:`) return uo.info(`Web Vitals are disabled on non-http/https protocols`), !1;
                var t = O(this.Xs) ? this.Xs.web_vitals : L(this.Xs) ? this.Xs : void 0;
                return L(t) ? t : this.Ns
            }
            startIfEnabled() {
                this.isEnabled && !this._s && (uo.info(`enabled, starting...`), this.ni(this.Ws))
            }
            onRemoteConfig(e) {
                if (`capturePerformance` in e) {
                    var t = O(e.capturePerformance) && !!e.capturePerformance.web_vitals,
                        n = O(e.capturePerformance) ? e.capturePerformance.web_vitals_allowed_metrics : void 0;
                    this._instance.persistence && (this._instance.persistence.register({
                        [Ht]: t
                    }), this._instance.persistence.register({
                        [Gt]: n
                    })), this.Ns = t, this.startIfEnabled()
                }
            }
            ni(e) {
                var t, n;
                (t = u.__PosthogExtensions__) != null && t.postHogWebVitalsCallbacks ? e() : (n = u.__PosthogExtensions__) == null || n.loadExternalDependency == null || n.loadExternalDependency(this._instance, this.useAttribution ? `web-vitals-with-attribution` : `web-vitals`, (t => {
                    t ? uo.error(`failed to load script`, t) : e()
                }))
            }
            Ys() {
                var t = e ? e.location.href : void 0;
                if (t) {
                    var n = this._instance.config.custom_personal_data_properties;
                    return fr(t, this._instance.config.mask_personal_data_properties ? [...hr, ...n || []] : [], _r)
                }
                uo.error(`Could not determine current URL`)
            }
        }
    },
    es = {
        exceptionObserver: class {
            constructor(t) {
                var n;
                this.Ws = () => {
                    var t;
                    if (e && this.isEnabled && (t = u.__PosthogExtensions__) != null && t.errorWrappingFunctions) {
                        var n = u.__PosthogExtensions__.errorWrappingFunctions.wrapOnError,
                            r = u.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection,
                            i = u.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError;
                        try {
                            !this.Js && this.Rt.capture_unhandled_errors && (this.Js = n(this.captureException.bind(this))), !this.Ks && this.Rt.capture_unhandled_rejections && (this.Ks = r(this.captureException.bind(this))), !this.Qs && this.Rt.capture_console_errors && (this.Qs = i(this.captureException.bind(this)))
                        } catch (e) {
                            so.error(`failed to start`, e), this.eo()
                        }
                    }
                }, this._instance = t, this.io = !((n = this._instance.persistence) == null || !n.props[zt]), this.ro = new ce({
                    refillRate: this._instance.config.error_tracking.__exceptionRateLimiterRefillRate ?? 1,
                    bucketSize: this._instance.config.error_tracking.__exceptionRateLimiterBucketSize ?? 10,
                    refillInterval: 1e4,
                    qt: so
                }), this.Rt = this.no(), this.startIfEnabledOrStop()
            }
            no() {
                var e = this._instance.config.capture_exceptions,
                    t = {
                        capture_unhandled_errors: !1,
                        capture_unhandled_rejections: !1,
                        capture_console_errors: !1
                    };
                return O(e) ? t = h({}, t, e) : (A(e) ? this.io : e) && (t = h({}, t, {
                    capture_unhandled_errors: !0,
                    capture_unhandled_rejections: !0
                })), t
            }
            get isEnabled() {
                return this.Rt.capture_console_errors || this.Rt.capture_unhandled_errors || this.Rt.capture_unhandled_rejections
            }
            startIfEnabledOrStop() {
                this.isEnabled ? (so.info(`enabled`), this.eo(), this.ni(this.Ws)) : this.eo()
            }
            ni(e) {
                var t, n;
                (t = u.__PosthogExtensions__) != null && t.errorWrappingFunctions && e(), (n = u.__PosthogExtensions__) == null || n.loadExternalDependency == null || n.loadExternalDependency(this._instance, `exception-autocapture`, (t => {
                    if (t) return so.error(`failed to load script`, t);
                    e()
                }))
            }
            eo() {
                var e, t, n;
                (e = this.Js) == null || e.call(this), this.Js = void 0, (t = this.Ks) == null || t.call(this), this.Ks = void 0, (n = this.Qs) == null || n.call(this), this.Qs = void 0
            }
            onRemoteConfig(e) {
                `autocaptureExceptions` in e && (this.io = !!e.autocaptureExceptions || !1, this._instance.persistence && this._instance.persistence.register({
                    [zt]: this.io
                }), this.Rt = this.no(), this.startIfEnabledOrStop())
            }
            onConfigChange() {
                this.Rt = this.no()
            }
            captureException(e) {
                var t, n, r = (e == null || (t = e.$exception_list) == null || (t = t[0]) == null ? void 0 : t.type) ?? `Exception`;
                this.ro.consumeRateLimit(r) ? so.info(`Skipping exception capture because of client rate limiting.`, {
                    exception: r
                }) : (n = this._instance.exceptions) == null || n.sendExceptionEvent(e)
            }
        },
        exceptions: class {
            constructor(e) {
                this.so = [], this.oo = new st([new yt, new kt, new xt, new bt, new Dt, new Et, new Ct, new Ot], function(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
                    return function(t, r) {
                        r === void 0 && (r = 0);
                        for (var i = [], a = t.split(`
`), o = r; a.length > o; o++) {
                            var s = a[o];
                            if (1024 >= s.length) {
                                var c = vt.test(s) ? s.replace(vt, `$1`) : s;
                                if (!c.match(/\S*Error: /)) {
                                    for (var l of n) {
                                        var u = l(c, e);
                                        if (u) {
                                            i.push(u);
                                            break
                                        }
                                    }
                                    if (i.length >= 50) break
                                }
                            }
                        }
                        return function(e) {
                            if (!e.length) return [];
                            var t = Array.from(e);
                            return t.reverse(), t.slice(0, 50).map((e => {
                                return h({}, e, {
                                    filename: e.filename || (n = t, n[n.length - 1] || {}).filename,
                                    function: e.function || ct
                                });
                                var n
                            }))
                        }(i)
                    }
                }(`web:javascript`, mt, _t)), this._instance = e, this.so = this._instance.persistence ?.get_property(Bt) ?? []
            }
            onRemoteConfig(e) {
                if (`errorTracking` in e) {
                    var t = e.errorTracking ?.suppressionRules ?? [],
                        n = e.errorTracking ?.captureExtensionExceptions;
                    this.so = t, this._instance.persistence && this._instance.persistence.register({
                        [Bt]: this.so,
                        [Vt]: n
                    })
                }
            }
            get ao() {
                var e, t = !!this._instance.get_property(Vt);
                return (e = this._instance.config.error_tracking.captureExtensionExceptions ?? t) != null && e
            }
            buildProperties(e, t) {
                return this.oo.buildFromUnknown(e, {
                    syntheticException: t ?.syntheticException,
                    mechanism: {
                        handled: t ?.handled
                    }
                })
            }
            sendExceptionEvent(e) {
                var t = e.$exception_list;
                if (this.lo(t)) {
                    if (this.uo(t)) return void Vo.info(`Skipping exception capture because a suppression rule matched`);
                    if (!this.ao && this.ho(t)) return void Vo.info(`Skipping exception capture because it was thrown by an extension`);
                    if (!this._instance.config.error_tracking.__capturePostHogExceptions && this.co(t)) return void Vo.info(`Skipping exception capture because it was thrown by the PostHog SDK`)
                }
                return this._instance.capture(`$exception`, e, {
                    _noTruncate: !0,
                    _batchKey: `exceptionEvent`,
                    Ur: !0
                })
            }
            uo(e) {
                if (e.length === 0) return !1;
                var t = e.reduce(((e, t) => {
                    var {
                        type: n,
                        value: r
                    } = t;
                    return j(n) && n.length > 0 && e.$exception_types.push(n), j(r) && r.length > 0 && e.$exception_values.push(r), e
                }), {
                    $exception_types: [],
                    $exception_values: []
                });
                return this.so.some((e => {
                    var n = e.values.map((e => {
                        var n = Ji[e.operator],
                            r = E(e.value) ? e.value : [e.value],
                            i = t[e.key] ?? [];
                        return r.length > 0 && n(r, i)
                    }));
                    return e.type === `OR` ? n.some(Boolean) : n.every(Boolean)
                }))
            }
            ho(e) {
                return e.flatMap((e => e.stacktrace ?.frames ?? [])).some((e => e.filename && e.filename.startsWith(`chrome-extension://`)))
            }
            co(e) {
                if (e.length > 0) {
                    var t, n, r = e[0].stacktrace ?.frames ?? [],
                        i = r[r.length - 1];
                    return (t = i == null || (n = i.filename) == null ? void 0 : n.includes(`posthog.com/static`)) != null && t
                }
                return !1
            }
            lo(e) {
                return !P(e) && E(e)
            }
        }
    },
    ts = h({
        productTours: class {
            get Xi() {
                return this._instance.persistence
            }
            constructor(e) {
                this.do = null, this.vo = null, this._instance = e
            }
            initialize() {
                this.loadIfEnabled()
            }
            onRemoteConfig(e) {
                `productTours` in e && (this.Xi && this.Xi.register({
                    [Wt]: !!e.productTours
                }), this.loadIfEnabled())
            }
            loadIfEnabled() {
                var e, t;
                this.do || (e = this._instance).config.disable_product_tours || (t = e.persistence) == null || !t.get_property(Wt) || this.ni((() => this.fo()))
            }
            ni(e) {
                var t, n;
                (t = u.__PosthogExtensions__) != null && t.generateProductTours ? e() : (n = u.__PosthogExtensions__) == null || n.loadExternalDependency == null || n.loadExternalDependency(this._instance, `product-tours`, (t => {
                    t ? xo.error(`Could not load product tours script`, t) : e()
                }))
            }
            fo() {
                var e;
                !this.do && (e = u.__PosthogExtensions__) != null && e.generateProductTours && (this.do = u.__PosthogExtensions__.generateProductTours(this._instance, !0))
            }
            getProductTours(e, t) {
                if (t === void 0 && (t = !1), !E(this.vo) || t) {
                    var n = this.Xi;
                    if (n) {
                        var r = n.props[rn];
                        if (E(r) && !t) return this.vo = r, void e(r, {
                            isLoaded: !0
                        })
                    }
                    this._instance._send_request({
                        url: this._instance.requestRouter.endpointFor(`api`, `/api/product_tours/?token=` + this._instance.config.token),
                        method: `GET`,
                        callback: t => {
                            var r = t.statusCode;
                            if (r !== 200 || !t.json) {
                                var i = `Product Tours API could not be loaded, status: ` + r;
                                xo.error(i), e([], {
                                    isLoaded: !1,
                                    error: i
                                });
                                return
                            }
                            var a = E(t.json.product_tours) ? t.json.product_tours : [];
                            this.vo = a, n && n.register({
                                [rn]: a
                            }), e(a, {
                                isLoaded: !0
                            })
                        }
                    })
                } else e(this.vo, {
                    isLoaded: !0
                })
            }
            getActiveProductTours(e) {
                P(this.do) ? e([], {
                    isLoaded: !1,
                    error: `Product tours not loaded`
                }) : this.do.getActiveProductTours(e)
            }
            showProductTour(e) {
                var t;
                (t = this.do) == null || t.showTourById(e)
            }
            previewTour(e) {
                this.do ? this.do.previewTour(e) : this.ni((() => {
                    var t;
                    this.fo(), (t = this.do) == null || t.previewTour(e)
                }))
            }
            dismissProductTour() {
                var e;
                (e = this.do) == null || e.dismissTour(`user_clicked_skip`)
            }
            nextStep() {
                var e;
                (e = this.do) == null || e.nextStep()
            }
            previousStep() {
                var e;
                (e = this.do) == null || e.previousStep()
            }
            clearCache() {
                var e;
                this.vo = null, (e = this.Xi) == null || e.unregister(rn)
            }
            resetTour(e) {
                var t;
                (t = this.do) == null || t.resetTour(e)
            }
            resetAllTours() {
                var e;
                (e = this.do) == null || e.resetAllTours()
            }
            cancelPendingTour(e) {
                var t;
                (t = this.do) == null || t.cancelPendingTour(e)
            }
        }
    }, Zo),
    ns = {
        siteApps: class {
            constructor(e) {
                this._instance = e, this.po = [], this.apps = {}
            }
            get isEnabled() {
                return !!this._instance.config.opt_in_site_apps
            }
            mo(e, t) {
                if (t) {
                    var n = this.globalsForEvent(t);
                    this.po.push(n), this.po.length > 1e3 && (this.po = this.po.slice(10))
                }
            }
            get siteAppLoaders() {
                var e;
                return (e = u._POSTHOG_REMOTE_CONFIG) == null || (e = e[this._instance.config.token]) == null ? void 0 : e.siteApps
            }
            initialize() {
                if (this.isEnabled) {
                    var e = this._instance._addCaptureHook(this.mo.bind(this));
                    this.yo = () => {
                        e(), this.po = [], this.yo = void 0
                    }
                }
            }
            globalsForEvent(e) {
                if (!e) throw Error(`Event payload is required`);
                var t = {},
                    n = this._instance.get_property(`$groups`) || [],
                    r = this._instance.get_property(`$stored_group_properties`) || {};
                for (var [i, a] of Object.entries(r)) t[i] = {
                    id: n[i],
                    type: i,
                    properties: a
                };
                var {
                    $set_once: o,
                    $set: s
                } = e;
                return {
                    event: h({}, g(e, So), {
                        properties: h({}, e.properties, s ? {
                            $set: h({}, e.properties ?.$set ?? {}, s)
                        } : {}, o ? {
                            $set_once: h({}, e.properties ?.$set_once ?? {}, o)
                        } : {}),
                        elements_chain: e.properties ?.$elements_chain ?? ``,
                        distinct_id: e.properties ?.distinct_id
                    }),
                    person: {
                        properties: this._instance.get_property(`$stored_person_properties`)
                    },
                    groups: t
                }
            }
            setupSiteApp(e) {
                var t = this.apps[e.id],
                    n = () => {
                        var n;
                        !t.errored && this.po.length && (Co.info(`Processing ` + this.po.length + ` events for site app with id ` + e.id), this.po.forEach((e => t.processEvent == null ? void 0 : t.processEvent(e))), t.processedBuffer = !0), Object.values(this.apps).every((e => e.processedBuffer || e.errored)) && ((n = this.yo) == null || n.call(this))
                    },
                    r = !1,
                    i = i => {
                        t.errored = !i, t.loaded = !0, Co.info(`Site app with id ` + e.id + ` ` + (i ? `loaded` : `errored`)), r && n()
                    };
                try {
                    var {
                        processEvent: a
                    } = e.init({
                        posthog: this._instance,
                        callback(e) {
                            i(e)
                        }
                    });
                    a && (t.processEvent = a), r = !0
                } catch (t) {
                    Co.error(wo + e.id, t), i(!1)
                }
                if (r && t.loaded) try {
                    n()
                } catch (n) {
                    Co.error(`Error while processing buffered events PostHog app with config id ` + e.id, n), t.errored = !0
                }
            }
            bo() {
                var e = this.siteAppLoaders || [];
                for (var t of e) this.apps[t.id] = {
                    id: t.id,
                    loaded: !1,
                    errored: !1,
                    processedBuffer: !1
                };
                for (var n of e) this.setupSiteApp(n)
            }
            wo(e) {
                if (Object.keys(this.apps).length !== 0) {
                    var t = this.globalsForEvent(e);
                    for (var n of Object.values(this.apps)) try {
                        n.processEvent == null || n.processEvent(t)
                    } catch (t) {
                        Co.error(`Error while processing event ` + e.event + ` for site app ` + n.id, t)
                    }
                }
            }
            onRemoteConfig(e) {
                var t, n, r, i = this;
                if ((t = this.siteAppLoaders) != null && t.length) return this.isEnabled ? (this.bo(), void this._instance.on(`eventCaptured`, (e => this.wo(e)))) : void Co.error(`PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.`);
                if ((n = this.yo) == null || n.call(this), (r = e.siteApps) != null && r.length)
                    if (this.isEnabled) {
                        var a = function(e) {
                            var t;
                            u[`__$$ph_site_app_` + e] = i._instance, (t = u.__PosthogExtensions__) == null || t.loadSiteApp == null || t.loadSiteApp(i._instance, s, (t => {
                                if (t) return Co.error(wo + e, t)
                            }))
                        };
                        for (var {
                                id: o,
                                url: s
                            } of e.siteApps) a(o)
                    } else Co.error(`PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.`)
            }
        }
    },
    rs = {
        tracingHeaders: class {
            constructor(e) {
                this._o = void 0, this.Io = void 0, this.Ws = () => {
                    var e, t;
                    A(this._o) && ((e = u.__PosthogExtensions__) == null || (e = e.tracingHeadersPatchFns) == null || e._patchXHR(this._instance.config.__add_tracing_headers || [], this._instance.get_distinct_id(), this._instance.sessionManager)), A(this.Io) && ((t = u.__PosthogExtensions__) == null || (t = t.tracingHeadersPatchFns) == null || t._patchFetch(this._instance.config.__add_tracing_headers || [], this._instance.get_distinct_id(), this._instance.sessionManager))
                }, this._instance = e
            }
            initialize() {
                this.startIfEnabledOrStop()
            }
            ni(e) {
                var t, n;
                (t = u.__PosthogExtensions__) != null && t.tracingHeadersPatchFns && e(), (n = u.__PosthogExtensions__) == null || n.loadExternalDependency == null || n.loadExternalDependency(this._instance, `tracing-headers`, (t => {
                    if (t) return lo.error(`failed to load script`, t);
                    e()
                }))
            }
            startIfEnabledOrStop() {
                var e, t;
                this._instance.config.__add_tracing_headers ? this.ni(this.Ws) : ((e = this._o) == null || e.call(this), (t = this.Io) == null || t.call(this), this._o = void 0, this.Io = void 0)
            }
        }
    },
    is = h({
        surveys: class {
            get Rt() {
                return this._instance.config
            }
            constructor(e) {
                this.Co = void 0, this._surveyManager = null, this.So = !1, this.ko = [], this.xo = null, this._instance = e, this._surveyEventReceiver = null
            }
            initialize() {
                this.loadIfEnabled()
            }
            onRemoteConfig(e) {
                if (!this.Rt.disable_surveys) {
                    var t = e.surveys;
                    if (P(t)) return Q.warn(`Flags not loaded yet. Not loading surveys.`);
                    this.Co = E(t) ? t.length > 0 : t, Q.info(`flags response received, isSurveysEnabled: ` + this.Co), this.loadIfEnabled()
                }
            }
            reset() {
                localStorage.removeItem(`lastSeenSurveyDate`);
                for (var e = [], t = 0; t < localStorage.length; t++) {
                    var n = localStorage.key(t);
                    (n != null && n.startsWith(ta) || n != null && n.startsWith(`inProgressSurvey_`)) && e.push(n)
                }
                e.forEach((e => localStorage.removeItem(e)))
            }
            loadIfEnabled() {
                if (!this._surveyManager)
                    if (this.So) Q.info(`Already initializing surveys, skipping...`);
                    else if (this.Rt.disable_surveys) Q.info(Ao);
                else if (this.Rt.cookieless_mode && this._instance.consent.isOptedOut()) Q.info(`Not loading surveys in cookieless mode without consent.`);
                else {
                    var e = u ?.__PosthogExtensions__;
                    if (e) {
                        if (!A(this.Co) || this.Rt.advanced_enable_surveys) {
                            var t = this.Co || this.Rt.advanced_enable_surveys;
                            this.So = !0;
                            try {
                                var n = e.generateSurveys;
                                if (n) return void this.To(n, t);
                                var r = e.loadExternalDependency;
                                if (!r) return void this.Ao(yn);
                                r(this._instance, `surveys`, (n => {
                                    n || !e.generateSurveys ? this.Ao(`Could not load surveys script`, n) : this.To(e.generateSurveys, t)
                                }))
                            } catch (e) {
                                throw this.Ao(`Error initializing surveys`, e), e
                            } finally {
                                this.So = !1
                            }
                        }
                    } else Q.error(`PostHog Extensions not found.`)
                }
            }
            To(e, t) {
                this._surveyManager = e(this._instance, t), this._surveyEventReceiver = new Oo(this._instance), Q.info(`Surveys loaded successfully`), this.Eo({
                    isLoaded: !0
                })
            }
            Ao(e, t) {
                Q.error(e, t), this.Eo({
                    isLoaded: !1,
                    error: e
                })
            }
            onSurveysLoaded(e) {
                return this.ko.push(e), this._surveyManager && this.Eo({
                    isLoaded: !0
                }), () => {
                    this.ko = this.ko.filter((t => t !== e))
                }
            }
            getSurveys(e, t) {
                if (t === void 0 && (t = !1), this.Rt.disable_surveys) return Q.info(Ao), e([]);
                var n, r = this._instance.get_property(nn);
                if (r && !t) return e(r, {
                    isLoaded: !0
                });
                typeof Promise < `u` && this.xo ? this.xo.then((t => {
                    var {
                        surveys: n,
                        context: r
                    } = t;
                    return e(n, r)
                })) : (typeof Promise < `u` && (this.xo = new Promise((e => {
                    n = e
                }))), this._instance._send_request({
                    url: this._instance.requestRouter.endpointFor(`api`, `/api/surveys/?token=` + this.Rt.token),
                    method: `GET`,
                    timeout: this.Rt.surveys_request_timeout_ms,
                    callback: t => {
                        var r;
                        this.xo = null;
                        var i = t.statusCode;
                        if (i !== 200 || !t.json) {
                            var a = `Surveys API could not be loaded, status: ` + i;
                            Q.error(a);
                            var o = {
                                isLoaded: !1,
                                error: a
                            };
                            e([], o), n ?.({
                                surveys: [],
                                context: o
                            });
                            return
                        }
                        var s, c = t.json.surveys || [],
                            l = c.filter((e => function(e) {
                                return !(!e.start_date || e.end_date)
                            }(e) && (function(e) {
                                var t;
                                return !((t = e.conditions) == null || (t = t.events) == null || (t = t.values) == null || !t.length)
                            }(e) || function(e) {
                                var t;
                                return !((t = e.conditions) == null || (t = t.actions) == null || (t = t.values) == null || !t.length)
                            }(e))));
                        l.length > 0 && ((s = this._surveyEventReceiver) == null || s.register(l)), (r = this._instance.persistence) == null || r.register({
                            [nn]: c
                        });
                        var u = {
                            isLoaded: !0
                        };
                        e(c, u), n ?.({
                            surveys: c,
                            context: u
                        })
                    }
                }))
            }
            Eo(e) {
                for (var t of this.ko) try {
                    if (!e.isLoaded) return t([], e);
                    this.getSurveys(t)
                } catch (e) {
                    Q.error(`Error in survey callback`, e)
                }
            }
            getActiveMatchingSurveys(e, t) {
                if (t === void 0 && (t = !1), !P(this._surveyManager)) return this._surveyManager.getActiveMatchingSurveys(e, t);
                Q.warn(`init was not called`)
            }
            Ro(e) {
                var t = null;
                return this.getSurveys((n => {
                    t = n.find((t => t.id === e)) ?? null
                })), t
            }
            No(e) {
                if (P(this._surveyManager)) return {
                    eligible: !1,
                    reason: ko
                };
                var t = typeof e == `string` ? this.Ro(e) : e;
                return t ? this._surveyManager.checkSurveyEligibility(t) : {
                    eligible: !1,
                    reason: `Survey not found`
                }
            }
            canRenderSurvey(e) {
                if (P(this._surveyManager)) return Q.warn(`init was not called`), {
                    visible: !1,
                    disabledReason: ko
                };
                var t = this.No(e);
                return {
                    visible: t.eligible,
                    disabledReason: t.reason
                }
            }
            canRenderSurveyAsync(e, t) {
                return P(this._surveyManager) ? (Q.warn(`init was not called`), Promise.resolve({
                    visible: !1,
                    disabledReason: ko
                })) : new Promise((n => {
                    this.getSurveys((t => {
                        var r = t.find((t => t.id === e)) ?? null;
                        if (r) {
                            var i = this.No(r);
                            n({
                                visible: i.eligible,
                                disabledReason: i.reason
                            })
                        } else n({
                            visible: !1,
                            disabledReason: `Survey not found`
                        })
                    }), t)
                }))
            }
            renderSurvey(e, t, n) {
                var i;
                if (P(this._surveyManager)) Q.warn(`init was not called`);
                else {
                    var a = typeof e == `string` ? this.Ro(e) : e;
                    if (a != null && a.id)
                        if (ia.includes(a.type)) {
                            var o = r ?.querySelector(t);
                            if (o) return (i = a.appearance) != null && i.surveyPopupDelaySeconds ? (Q.info(`Rendering survey ` + a.id + ` with delay of ` + a.appearance.surveyPopupDelaySeconds + ` seconds`), void setTimeout((() => {
                                var e;
                                Q.info(`Rendering survey ` + a.id + ` with delay of ` + a.appearance ?.surveyPopupDelaySeconds + ` seconds`), (e = this._surveyManager) == null || e.renderSurvey(a, o, n), Q.info(`Survey ` + a.id + ` rendered`)
                            }), 1e3 * a.appearance.surveyPopupDelaySeconds)) : void this._surveyManager.renderSurvey(a, o, n);
                            Q.warn(`Survey element not found`)
                        } else Q.warn(`Surveys of type ` + a.type + ` cannot be rendered in the app`);
                    else Q.warn(`Survey not found`)
                }
            }
            displaySurvey(e, t) {
                var n;
                if (P(this._surveyManager)) Q.warn(`init was not called`);
                else {
                    var r = this.Ro(e);
                    if (r) {
                        var i = r;
                        if ((n = r.appearance) != null && n.surveyPopupDelaySeconds && t.ignoreDelay && (i = h({}, r, {
                                appearance: h({}, r.appearance, {
                                    surveyPopupDelaySeconds: 0
                                })
                            })), t.displayType !== Vr.Popover && t.initialResponses && Q.warn(`initialResponses is only supported for popover surveys. prefill will not be applied.`), !1 === t.ignoreConditions) {
                            var a = this.canRenderSurvey(r);
                            if (!a.visible) return void Q.warn(`Survey is not eligible to be displayed: `, a.disabledReason)
                        }
                        t.displayType === Vr.Inline ? this.renderSurvey(i, t.selector, t.properties) : this._surveyManager.handlePopoverSurvey(i, t)
                    } else Q.warn(`Survey not found`)
                }
            }
            cancelPendingSurvey(e) {
                P(this._surveyManager) ? Q.warn(`init was not called`) : this._surveyManager.cancelSurvey(e)
            }
            handlePageUnload() {
                var e;
                (e = this._surveyManager) == null || e.handlePageUnload()
            }
        }
    }, Zo),
    as = {
        toolbar: class {
            constructor(e) {
                this.instance = e
            }
            Mo(e) {
                u.ph_toolbar_state = e
            }
            Fo() {
                return u.ph_toolbar_state ?? 0
            }
            initialize() {
                return this.maybeLoadToolbar()
            }
            maybeLoadToolbar(t, n, i) {
                if (t === void 0 && (t = void 0), n === void 0 && (n = void 0), i === void 0 && (i = void 0), Rn(this.instance.config) || !e || !r) return !1;
                t ??= e.location, i ??= e.history;
                try {
                    if (!n) {
                        try {
                            e.localStorage.setItem(`test`, `test`), e.localStorage.removeItem(`test`)
                        } catch {
                            return !1
                        }
                        n = e ?.localStorage
                    }
                    var a, o = jo || pr(t.hash, `__posthog`) || pr(t.hash, `state`),
                        s = o ? Nn((() => JSON.parse(atob(decodeURIComponent(o))))) || Nn((() => JSON.parse(decodeURIComponent(o)))) : null;
                    return s && s.action === `ph_authorize` ? ((a = s).source = `url`, a && Object.keys(a).length > 0 && (s.desiredHash ? t.hash = s.desiredHash : i ? i.replaceState(i.state, ``, t.pathname + t.search) : t.hash = ``)) : ((a = JSON.parse(n.getItem(Mo) || `{}`)).source = `localstorage`, delete a.userIntent), !(!a.token || this.instance.config.token !== a.token || (this.loadToolbar(a), 0))
                } catch {
                    return !1
                }
            }
            Oo(e) {
                var t = u.ph_load_toolbar || u.ph_load_editor;
                !P(t) && D(t) ? t(e, this.instance) : No.warn(`No toolbar load function found`)
            }
            loadToolbar(t) {
                var n = !(r == null || !r.getElementById(gn));
                if (!e || n) return !1;
                var i = this.instance.requestRouter.region === `custom` && this.instance.config.advanced_disable_toolbar_metrics,
                    a = h({
                        token: this.instance.config.token
                    }, t, {
                        apiURL: this.instance.requestRouter.endpointFor(`ui`)
                    }, i ? {
                        instrument: !1
                    } : {});
                if (e.localStorage.setItem(Mo, JSON.stringify(h({}, a, {
                        source: void 0
                    }))), this.Fo() === 2) this.Oo(a);
                else if (this.Fo() === 0) {
                    var o;
                    this.Mo(1), (o = u.__PosthogExtensions__) == null || o.loadExternalDependency == null || o.loadExternalDependency(this.instance, `toolbar`, (e => {
                        if (e) return No.error(`[Toolbar] Failed to load`, e), void this.Mo(0);
                        this.Mo(2), this.Oo(a)
                    })), K(e, `turbolinks:load`, (() => {
                        this.Mo(0), this.loadToolbar(a)
                    }))
                }
                return !0
            }
            Po(e) {
                return this.loadToolbar(e)
            }
            maybeLoadEditor(e, t, n) {
                return e === void 0 && (e = void 0), t === void 0 && (t = void 0), n === void 0 && (n = void 0), this.maybeLoadToolbar(e, t, n)
            }
        }
    },
    os = h({
        experiments: Wo
    }, Zo),
    ss = h({}, Zo, Qo, $o, es, ts, ns, is, rs, as, os, {
        conversations: class {
            constructor(e) {
                this.Lo = void 0, this._conversationsManager = null, this.Do = !1, this.Bo = null, this._instance = e
            }
            initialize() {
                this.loadIfEnabled()
            }
            onRemoteConfig(e) {
                if (!this._instance.config.disable_conversations) {
                    var t = e.conversations;
                    P(t) || (L(t) ? this.Lo = t : (this.Lo = t.enabled, this.Bo = t), this.loadIfEnabled())
                }
            }
            reset() {
                var e;
                (e = this._conversationsManager) == null || e.reset(), this._conversationsManager = null, this.Lo = void 0, this.Bo = null
            }
            loadIfEnabled() {
                if (!(this._conversationsManager || this.Do || this._instance.config.disable_conversations || Rn(this._instance.config) || this._instance.config.cookieless_mode && this._instance.consent.isOptedOut())) {
                    var e = u ?.__PosthogExtensions__;
                    if (e && !A(this.Lo) && this.Lo)
                        if (this.Bo && this.Bo.token) {
                            this.Do = !0;
                            try {
                                var t = e.initConversations;
                                if (t) return this.jo(t), void(this.Do = !1);
                                var n = e.loadExternalDependency;
                                if (!n) return void this.qo(yn);
                                n(this._instance, `conversations`, (t => {
                                    t || !e.initConversations ? this.qo(`Could not load conversations script`, t) : this.jo(e.initConversations), this.Do = !1
                                }))
                            } catch (e) {
                                this.qo(`Error initializing conversations`, e), this.Do = !1
                            }
                        } else Go.error(`Conversations enabled but missing token in remote config.`)
                }
            }
            jo(e) {
                if (this.Bo) try {
                    this._conversationsManager = e(this.Bo, this._instance), Go.info(`Conversations loaded successfully`)
                } catch (e) {
                    this.qo(`Error completing conversations initialization`, e)
                } else Go.error(`Cannot complete initialization: remote config is null`)
            }
            qo(e, t) {
                Go.error(e, t), this._conversationsManager = null, this.Do = !1
            }
            show() {
                this._conversationsManager ? this._conversationsManager.show() : Go.warn(`Conversations not loaded yet.`)
            }
            hide() {
                this._conversationsManager && this._conversationsManager.hide()
            }
            isAvailable() {
                return !0 === this.Lo && !N(this._conversationsManager)
            }
            isVisible() {
                var e;
                return (e = this._conversationsManager ?.isVisible()) != null && e
            }
            sendMessage(e, t, n) {
                var r = this;
                return m((function*() {
                    return r._conversationsManager ? r._conversationsManager.sendMessage(e, t, n) : (Go.warn(Ko), null)
                }))()
            }
            getMessages(e, t) {
                var n = this;
                return m((function*() {
                    return n._conversationsManager ? n._conversationsManager.getMessages(e, t) : (Go.warn(Ko), null)
                }))()
            }
            markAsRead(e) {
                var t = this;
                return m((function*() {
                    return t._conversationsManager ? t._conversationsManager.markAsRead(e) : (Go.warn(Ko), null)
                }))()
            }
            getTickets(e) {
                var t = this;
                return m((function*() {
                    return t._conversationsManager ? t._conversationsManager.getTickets(e) : (Go.warn(Ko), null)
                }))()
            }
            requestRestoreLink(e) {
                var t = this;
                return m((function*() {
                    return t._conversationsManager ? t._conversationsManager.requestRestoreLink(e) : (Go.warn(Ko), null)
                }))()
            }
            restoreFromToken(e) {
                var t = this;
                return m((function*() {
                    return t._conversationsManager ? t._conversationsManager.restoreFromToken(e) : (Go.warn(Ko), null)
                }))()
            }
            restoreFromUrlToken() {
                var e = this;
                return m((function*() {
                    return e._conversationsManager ? e._conversationsManager.restoreFromUrlToken() : (Go.warn(Ko), null)
                }))()
            }
            getCurrentTicketId() {
                return this._conversationsManager ?.getCurrentTicketId() ?? null
            }
            getWidgetSessionId() {
                return this._conversationsManager ?.getWidgetSessionId() ?? null
            }
            Qr() {
                var e;
                (e = this._conversationsManager) == null || e.setIdentity()
            }
            tn() {
                var e;
                (e = this._conversationsManager) == null || e.clearIdentity()
            }
        }
    }, {
        logs: class {
            constructor(e) {
                var t;
                this.Zo = !1, this.$o = !1, this.qt = U(`[logs]`), this.Vo = [], this.Ho = 0, this.zo = 0, this.Uo = !1, this._instance = e, this._instance && (t = this._instance.config.logs) != null && t.captureConsoleLogs && (this.Zo = !0)
            }
            initialize() {
                this.loadIfEnabled()
            }
            onRemoteConfig(e) {
                var t = e.logs ?.captureConsoleLogs;
                !P(t) && t && (this.Zo = !0, this.loadIfEnabled())
            }
            reset() {
                this.Vo = [], this.Ni &&= (clearTimeout(this.Ni), void 0), this.Ho = 0, this.zo = 0, this.Uo = !1
            }
            loadIfEnabled() {
                if (this.Zo && !this.$o) {
                    var e = u ?.__PosthogExtensions__;
                    if (e) {
                        var t = e.loadExternalDependency;
                        t ? t(this._instance, `logs`, (t => {
                            var n;
                            t || (n = e.logs) == null || !n.initializeLogs ? this.qt.error(`Could not load logs script`, t) : (e.logs.initializeLogs(this._instance), this.$o = !0)
                        })) : this.qt.error(yn)
                    } else this.qt.error(`PostHog Extensions not found.`)
                }
            }
            captureLog(e) {
                if (this._instance.is_capturing())
                    if (e && e.body) {
                        var t = this._instance.config.logs ?.flushIntervalMs ?? 3e3,
                            n = this._instance.config.logs ?.maxLogsPerInterval ?? 1e3,
                            r = Date.now();
                        if (t > r - this.zo || (this.zo = r, this.Ho = 0, this.Uo = !1), n > this.Ho) {
                            this.Ho++;
                            var i = function(e, t) {
                                var {
                                    text: n,
                                    number: r
                                } = qo[e.level || `info`] || Jo, i = String(Date.now()) + `000000`, a = {};
                                t.distinctId && (a.posthogDistinctId = t.distinctId), t.sessionId && (a.sessionId = t.sessionId), t.currentUrl && (a[`url.full`] = t.currentUrl), t.activeFeatureFlags && t.activeFeatureFlags.length > 0 && (a.feature_flags = t.activeFeatureFlags);
                                var o = h({}, a, e.attributes || {}),
                                    s = {
                                        timeUnixNano: i,
                                        observedTimeUnixNano: i,
                                        severityNumber: r,
                                        severityText: n,
                                        body: {
                                            stringValue: e.body
                                        },
                                        attributes: Xo(o)
                                    };
                                return e.trace_id && (s.traceId = e.trace_id), e.span_id && (s.spanId = e.span_id), A(e.trace_flags) || (s.flags = e.trace_flags), s
                            }(e, this.Yo());
                            this.Vo.push({
                                record: i
                            }), (this._instance.config.logs ?.maxBufferSize ?? 100) > this.Vo.length ? this.Go() : this.flushLogs()
                        } else this.Uo ||= (this.qt.warn(`captureLog dropping logs: exceeded ` + n + ` logs per ` + t + `ms`), !0)
                    } else this.qt.warn(`captureLog requires a body`)
            }
            get logger() {
                return this.Wo ||= {
                    trace: (e, t) => this.captureLog({
                        body: e,
                        level: `trace`,
                        attributes: t
                    }),
                    debug: (e, t) => this.captureLog({
                        body: e,
                        level: `debug`,
                        attributes: t
                    }),
                    info: (e, t) => this.captureLog({
                        body: e,
                        level: `info`,
                        attributes: t
                    }),
                    warn: (e, t) => this.captureLog({
                        body: e,
                        level: `warn`,
                        attributes: t
                    }),
                    error: (e, t) => this.captureLog({
                        body: e,
                        level: `error`,
                        attributes: t
                    }),
                    fatal: (e, t) => this.captureLog({
                        body: e,
                        level: `fatal`,
                        attributes: t
                    })
                }, this.Wo
            }
            flushLogs(e) {
                if (this.Ni &&= (clearTimeout(this.Ni), void 0), this.Vo.length !== 0) {
                    var t = this.Vo;
                    this.Vo = [];
                    var n = this._instance.config.logs,
                        r = h({
                            "service.name": n ?.serviceName || `unknown_service`
                        }, n ?.environment && {
                            "deployment.environment": n.environment
                        }, n ?.serviceVersion && {
                            "service.version": n.serviceVersion
                        }, n ?.resourceAttributes),
                        i = function(e, t) {
                            return {
                                resourceLogs: [{
                                    resource: {
                                        attributes: Xo(t)
                                    },
                                    scopeLogs: [{
                                        scope: {
                                            name: f.LIB_NAME
                                        },
                                        logRecords: e
                                    }]
                                }]
                            }
                        }(t.map((e => e.record)), r),
                        a = this._instance.requestRouter.endpointFor(`api`, `/i/v1/logs`) + `?token=` + encodeURIComponent(this._instance.config.token);
                    this._instance.Lr({
                        method: `POST`,
                        url: a,
                        data: i,
                        compression: `best-available`,
                        batchKey: `logs`,
                        transport: e
                    })
                }
            }
            Go() {
                this.Ni ||= setTimeout((() => {
                    this.Ni = void 0, this.flushLogs()
                }), this._instance.config.logs ?.flushIntervalMs ?? 3e3)
            }
            Yo() {
                var e, t = {
                    lib: f.LIB_NAME
                };
                if (t.distinctId = this._instance.get_distinct_id(), this._instance.sessionManager) {
                    var {
                        sessionId: n
                    } = this._instance.sessionManager.checkAndGetSessionAndWindowId(!0);
                    t.sessionId = n
                }
                if (u != null && (e = u.location) != null && e.href && (t.currentUrl = u.location.href), this._instance.featureFlags) {
                    var r = this._instance.featureFlags.getFlags();
                    r && r.length > 0 && (t.activeFeatureFlags = r)
                }
                return t
            }
        }
    });
Ca.__defaultExtensionClasses = h({}, ss);
var cs, ls = (cs = ua[_a] = new Ca, function() {
    function t() {
        t.done || (t.done = !0, va = !1, W(ua, (function(e) {
            e._dom_loaded()
        })))
    }
    r != null && r.addEventListener ? r.readyState === `complete` ? t() : K(r, `DOMContentLoaded`, t, {
        capture: !1
    }) : e && H.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized")
}(), cs);
export {
    Xr as Compression, Hr as DEFAULT_PRODUCT_TOUR_APPEARANCE, Vr as DisplaySurveyType, Ca as PostHog, Ur as ProductTourEventName, Wr as ProductTourEventProperties, zr as SurveyEventName, Br as SurveyEventProperties, jr as SurveyEventType, Nr as SurveyPosition, Lr as SurveyQuestionBranchingType, Ir as SurveyQuestionType, Rr as SurveySchedule, Pr as SurveyTabPosition, Fr as SurveyType, Mr as SurveyWidgetType, ls as
    default, ls as posthog, Yr as severityLevels
};