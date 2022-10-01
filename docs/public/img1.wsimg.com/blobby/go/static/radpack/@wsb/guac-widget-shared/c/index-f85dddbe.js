define(
  "@wsb/guac-widget-shared/c/index-f85dddbe.js",
  ["exports"],
  function (e) {
    "use strict";
    /*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/ var r = Object.getOwnPropertySymbols,
      t = Object.prototype.hasOwnProperty,
      n = Object.prototype.propertyIsEnumerable;
    function o(e) {
      if (null == e)
        throw new TypeError(
          "Object.assign cannot be called with null or undefined"
        );
      return Object(e);
    }
    var i = (function () {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
          return !1;
        for (var r = {}, t = 0; t < 10; t++)
          r["_" + String.fromCharCode(t)] = t;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(r)
            .map(function (e) {
              return r[e];
            })
            .join("")
        )
          return !1;
        var n = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function (e) {
            n[e] = e;
          }),
          "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
        );
      } catch (e) {
        return !1;
      }
    })()
      ? Object.assign
      : function (e, i) {
          for (var c, a, f = o(e), s = 1; s < arguments.length; s++) {
            for (var b in (c = Object(arguments[s])))
              t.call(c, b) && (f[b] = c[b]);
            if (r) {
              a = r(c);
              for (var u = 0; u < a.length; u++)
                n.call(c, a[u]) && (f[a[u]] = c[a[u]]);
            }
          }
          return f;
        };
    e.o = i;
  }
),
  "undefined" != typeof window && (window.global = window);
//# sourceMappingURL=index-f85dddbe.js.map
