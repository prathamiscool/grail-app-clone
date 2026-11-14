import {
    t as e
} from "./preload-helper-rov5CBGT.js";
var t = `phc_vdvYidzkbtMGCUFzaiaMM4xDxshSQrC3kLcp4nt2sKFd`,
    n = `https://eu.i.posthog.com`,
    r = !1,
    i = null,
    a = [],
    o = null;

function s() {
    if (r) return;
    r = !0;
    let e = () => {
        c()
    };
    typeof requestIdleCallback == `function` ? requestIdleCallback(e, {
        timeout: 3e3
    }) : setTimeout(e, 1200)
}
async function c() {
    try {
        let r = (await e(() =>
            import (`./module-BDwWso9v.js`), [])).default;
        r.init(t, {
            api_host: n,
            capture_pageview: !0,
            disable_session_recording: !0,
            respect_dnt: !0,
            persistence: `localStorage+cookie`,
            autocapture: !1,
            capture_performance: {
                web_vitals: !0
            },
            loaded: e => {}
        }), i = r, o &&= (r.identify(o.id, o.traits), null);
        for (let e of a.splice(0)) r.capture(e.name, e.payload)
    } catch {}
}

function l(e, t) {
    if (r) {
        if (!i) {
            a.length < 50 && a.push({
                name: e,
                payload: t
            });
            return
        }
        try {
            i.capture(e, t)
        } catch {}
    }
}

function u(e, t) {
    if (r) {
        if (!i) {
            o = {
                id: e,
                traits: t
            };
            return
        }
        try {
            i.identify(e, t)
        } catch {}
    }
}
export {
    s as n, l as r, u as t
};