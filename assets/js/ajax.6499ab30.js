import {
    X as e
} from "./client.1520e461.js";
var t, r, o, s = {};
t = {
    get exports() {
        return s
    },
    set exports(e) {
        s = e
    }
}, r = s, o = function() {
    if ("undefined" != typeof self) return self;
    if ("undefined" != typeof window) return window;
    if (void 0 !== o) return o;
    throw new Error("unable to locate global object")
}(), t.exports = r = o.fetch, o.fetch && (r.default = o.fetch.bind(o)), r.Headers = o.Headers, r.Request = o.Request, r.Response = o.Response;
var n = s;
const i = "undefined" != typeof window,
    a = i ? window.AbortController : AbortController,
    c = i ? window.fetch : n,
    h = i ? window.Headers : s.Headers,
    d = i ? window.Request : s.Request,
    f = {
        body: void 0,
        cache: "no-store",
        credentials: "omit",
        keepalive: !1,
        method: "GET",
        mode: "cors",
        headers: {},
        signal: void 0,
        integrity: "",
        redirect: "follow",
        referrer: "about:client",
        referrerPolicy: "no-referrer",
        timeout: 1e4
    },
    u = "invalidurl",
    l = "requesterror",
    p = "fetcherror",
    w = "notfound",
    m = "notmodified",
    b = "parsererror",
    g = "timeout",
    y = "abort",
    P = "error";
var _ = {
    post: function(t, r = "", o = {}) {
        console.log(t, r, o)
        const s = Object.assign({}, o, {
            body: "",
            method: "POST"
        });
        if (e.property_exists(s, "headers") || (s.headers = {}), e.is_object(r)) {
            s.body = e.buildSearchParams(r);
            new h(s.headers).get("content-type") || (s.headers["content-type"] = "application/x-www-form-urlencoded; charset=utf-8")
        } else {
            s.body = e.string_to_buffer(r);
            new h(s.headers).get("content-type") || (s.headers["content-type"] = "text/plain; charset=utf-8")
        }
        return this.get(t, s)
    },
    get: function(t, r = {}) {
        const o = {
            abortController: new a,
            isPending: !0,
            responseHeaders: {},
            status: 0,
            abort: function() {
                return this.abortController instanceof a && (this.abortController.signal.aborted || this.abortController.abort()), this
            },
            _promise: async function({
                url: t,
                options: r
            }) {
                const o = new h;
                Object.entries(Object.assign({}, f.headers, r.headers)).forEach((([e, t]) => {
                    o.set(e, t)
                })), (r = Object.assign({}, f, r, {
                    signal: this.abortController.signal
                })).headers = o;
                const s = parseInt(r.timeout);
                if (r.timeout = void 0, !e.parseUrl(t)) throw this.isPending = !1, u;
                const n = new d(t, r);
                let i = null;
                const a = await Promise.race([c(n).catch((e => {
                    if ("AbortError" === new v(e).details.name) throw y;
                    throw l
                })), new Promise(((e, t) => {
                    i = setTimeout((() => {
                        t(g)
                    }), s)
                }))]).catch((e => {
                    throw e === g && this.abortController.abort(), this.isPending = !1, e
                }));
                if (clearTimeout(i), !a) throw this.isPending = !1, P;
                this.status = a.status;
                for (let [e, t] of a.headers) this.responseHeaders[e] = t;
                if (!a.ok || !this.responseHeaders["content-type"]) {
                    switch (this.isPending = !1, this.status) {
                        case 304:
                            throw m;
                        case 404:
                            throw w
                    }
                    throw p
                }
                this.isPending = !1;
                const _ = await a.arrayBuffer().catch((e => {
                    throw this.isPending = !1, b
                })).then((e => new Uint8Array(e).reduce(((e, t) => e + String.fromCharCode.apply(null, [t])), "")));
                if (-1 !== this.responseHeaders["content-type"].indexOf("json")) {
                    const t = e.json_decode(_);
                    if (!t) throw this.isPending = !1, b;
                    return t
                }
                return _
            },
            done: function(e) {
                return this._promise instanceof Promise && this._promise.then((t => {
                    e instanceof Function && (void 0 === t && (t = "undef"), e(t))
                }), (e => {})), this
            },
            fail: function(e) {
                return this._promise instanceof Promise && this._promise.catch((t => {
                    e instanceof Function && e(t)
                })), this
            },
            always: function(e) {
                return this._promise instanceof Promise && this._promise.catch((e => {})).then((t => {
                    e instanceof Function && e()
                })), this
            }
        };
        return o._promise = o._promise({
            url: t,
            options: r
        }), o
    }
};
class v extends Error {
    constructor(e) {
        super(), this.message = "fetch error", this.details = e
    }
}
export {
    _ as a
};
