import { __exports as _ } from "./index.es64.js";
import we from "react";
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ue;
function he() {
  return ue ? _ : (ue = 1, process.env.NODE_ENV !== "production" && function() {
    function s(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === me ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case j:
          return "Fragment";
        case de:
          return "Portal";
        case K:
          return "Profiler";
        case H:
          return "StrictMode";
        case A:
          return "Suspense";
        case R:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case q:
            return (e.displayName || "Context") + ".Provider";
          case X:
            return (e._context.displayName || "Context") + ".Consumer";
          case S:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case k:
            return r = e.displayName || null, r !== null ? r : s(e.type) || "Memo";
          case p:
            r = e._payload, e = e._init;
            try {
              return s(e(r));
            } catch {
            }
        }
      return null;
    }
    function M(e) {
      return "" + e;
    }
    function W(e) {
      try {
        M(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var o = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), M(e);
      }
    }
    function $() {
    }
    function le() {
      if (g === 0) {
        Z = console.log, F = console.info, I = console.warn, L = console.error, Q = console.group, D = console.groupCollapsed, ee = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: $,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      g++;
    }
    function fe() {
      if (g--, g === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: v({}, e, { value: Z }),
          info: v({}, e, { value: F }),
          warn: v({}, e, { value: I }),
          error: v({}, e, { value: L }),
          group: v({}, e, { value: Q }),
          groupCollapsed: v({}, e, { value: D }),
          groupEnd: v({}, e, { value: ee })
        });
      }
      0 > g && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function y(e) {
      if (x === void 0)
        try {
          throw Error();
        } catch (o) {
          var r = o.stack.trim().match(/\n( *(at )?)/);
          x = r && r[1] || "", re = -1 < o.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < o.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + x + e + re;
    }
    function U(e, r) {
      if (!e || P) return "";
      var o = Y.get(e);
      if (o !== void 0) return o;
      P = !0, o = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var n = null;
      n = E.H, E.H = null, le();
      try {
        var u = {
          DetermineComponentFrameRoot: function() {
            try {
              if (r) {
                var i = function() {
                  throw Error();
                };
                if (Object.defineProperty(i.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(i, []);
                  } catch (c) {
                    var w = c;
                  }
                  Reflect.construct(e, [], i);
                } else {
                  try {
                    i.call();
                  } catch (c) {
                    w = c;
                  }
                  e.call(i.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (c) {
                  w = c;
                }
                (i = e()) && typeof i.catch == "function" && i.catch(function() {
                });
              }
            } catch (c) {
              if (c && w && typeof c.stack == "string")
                return [c.stack, w.stack];
            }
            return [null, null];
          }
        };
        u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var a = Object.getOwnPropertyDescriptor(
          u.DetermineComponentFrameRoot,
          "name"
        );
        a && a.configurable && Object.defineProperty(
          u.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var t = u.DetermineComponentFrameRoot(), f = t[0], d = t[1];
        if (f && d) {
          var l = f.split(`
`), b = d.split(`
`);
          for (t = a = 0; a < l.length && !l[a].includes(
            "DetermineComponentFrameRoot"
          ); )
            a++;
          for (; t < b.length && !b[t].includes(
            "DetermineComponentFrameRoot"
          ); )
            t++;
          if (a === l.length || t === b.length)
            for (a = l.length - 1, t = b.length - 1; 1 <= a && 0 <= t && l[a] !== b[t]; )
              t--;
          for (; 1 <= a && 0 <= t; a--, t--)
            if (l[a] !== b[t]) {
              if (a !== 1 || t !== 1)
                do
                  if (a--, t--, 0 > t || l[a] !== b[t]) {
                    var m = `
` + l[a].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, m), m;
                  }
                while (1 <= a && 0 <= t);
              break;
            }
        }
      } finally {
        P = !1, E.H = n, fe(), Error.prepareStackTrace = o;
      }
      return l = (l = e ? e.displayName || e.name : "") ? y(l) : "", typeof e == "function" && Y.set(e, l), l;
    }
    function T(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var r = e.prototype;
        return U(
          e,
          !(!r || !r.isReactComponent)
        );
      }
      if (typeof e == "string") return y(e);
      switch (e) {
        case A:
          return y("Suspense");
        case R:
          return y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case S:
            return e = U(e.render, !1), e;
          case k:
            return T(e.type);
          case p:
            r = e._payload, e = e._init;
            try {
              return T(e(r));
            } catch {
            }
        }
      return "";
    }
    function C() {
      var e = E.A;
      return e === null ? null : e.getOwner();
    }
    function ce(e) {
      if (J.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function se(e, r) {
      function o() {
        oe || (oe = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      o.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: o,
        configurable: !0
      });
    }
    function ie() {
      var e = s(this.type);
      return te[e] || (te[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function Ee(e, r, o, n, u, a) {
      return o = a.ref, e = {
        $$typeof: O,
        type: e,
        key: r,
        props: a,
        _owner: u
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: ie
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function z(e, r, o, n, u, a) {
      if (typeof e == "string" || typeof e == "function" || e === j || e === K || e === H || e === A || e === R || e === ge || typeof e == "object" && e !== null && (e.$$typeof === p || e.$$typeof === k || e.$$typeof === q || e.$$typeof === X || e.$$typeof === S || e.$$typeof === _e || e.getModuleId !== void 0)) {
        var t = r.children;
        if (t !== void 0)
          if (n)
            if (N(t)) {
              for (n = 0; n < t.length; n++)
                V(t[n], e);
              Object.freeze && Object.freeze(t);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else V(t, e);
      } else
        t = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (t += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? n = "null" : N(e) ? n = "array" : e !== void 0 && e.$$typeof === O ? (n = "<" + (s(e.type) || "Unknown") + " />", t = " Did you accidentally export a JSX literal instead of a component?") : n = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          n,
          t
        );
      if (J.call(r, "key")) {
        t = s(e);
        var f = Object.keys(r).filter(function(l) {
          return l !== "key";
        });
        n = 0 < f.length ? "{key: someKey, " + f.join(": ..., ") + ": ...}" : "{key: someKey}", ne[t + n] || (f = 0 < f.length ? "{" + f.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          t,
          f,
          t
        ), ne[t + n] = !0);
      }
      if (t = null, o !== void 0 && (W(o), t = "" + o), ce(r) && (W(r.key), t = "" + r.key), "key" in r) {
        o = {};
        for (var d in r)
          d !== "key" && (o[d] = r[d]);
      } else o = r;
      return t && se(
        o,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), Ee(e, t, a, u, C(), o);
    }
    function V(e, r) {
      if (typeof e == "object" && e && e.$$typeof !== ye) {
        if (N(e))
          for (var o = 0; o < e.length; o++) {
            var n = e[o];
            h(n) && G(n, r);
          }
        else if (h(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? o = null : (o = B && e[B] || e["@@iterator"], o = typeof o == "function" ? o : null), typeof o == "function" && o !== e.entries && (o = o.call(e), o !== e))
          for (; !(e = o.next()).done; )
            h(e.value) && G(e.value, r);
      }
    }
    function h(e) {
      return typeof e == "object" && e !== null && e.$$typeof === O;
    }
    function G(e, r) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, r = ve(r), !ae[r])) {
        ae[r] = !0;
        var o = "";
        e && e._owner != null && e._owner !== C() && (o = null, typeof e._owner.tag == "number" ? o = s(e._owner.type) : typeof e._owner.name == "string" && (o = e._owner.name), o = " It was passed a child from " + o + ".");
        var n = E.getCurrentStack;
        E.getCurrentStack = function() {
          var u = T(e.type);
          return n && (u += n() || ""), u;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          r,
          o
        ), E.getCurrentStack = n;
      }
    }
    function ve(e) {
      var r = "", o = C();
      return o && (o = s(o.type)) && (r = `

Check the render method of \`` + o + "`."), r || (e = s(e)) && (r = `

Check the top-level render call using <` + e + ">."), r;
    }
    var be = we, O = Symbol.for("react.transitional.element"), de = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), H = Symbol.for("react.strict_mode"), K = Symbol.for("react.profiler"), X = Symbol.for("react.consumer"), q = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), ge = Symbol.for("react.offscreen"), B = Symbol.iterator, me = Symbol.for("react.client.reference"), E = be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = Object.prototype.hasOwnProperty, v = Object.assign, _e = Symbol.for("react.client.reference"), N = Array.isArray, g = 0, Z, F, I, L, Q, D, ee;
    $.__reactDisabledLog = !0;
    var x, re, P = !1, Y = new (typeof WeakMap == "function" ? WeakMap : Map)(), ye = Symbol.for("react.client.reference"), oe, te = {}, ne = {}, ae = {};
    _.Fragment = j, _.jsx = function(e, r, o, n, u) {
      return z(e, r, o, !1, n, u);
    }, _.jsxs = function(e, r, o, n, u) {
      return z(e, r, o, !0, n, u);
    };
  }(), _);
}
export {
  he as __require
};
//# sourceMappingURL=index.es62.js.map
