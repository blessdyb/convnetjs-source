define(
  "@widget/LAYOUT/c/bs-_rollupPluginBabelHelpers-5f52e4cb.js",
  ["exports"],
  function (e) {
    "use strict";
    function n() {
      return (
        (n = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var t in r)
                  Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
              }
              return e;
            }),
        n.apply(this, arguments)
      );
    }
    (e._ = function (e, n, r) {
      return (
        n in e
          ? Object.defineProperty(e, n, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[n] = r),
        e
      );
    }),
      (e.a = n);
  }
),
  "undefined" != typeof window && (window.global = window);
//# sourceMappingURL=bs-_rollupPluginBabelHelpers-5f52e4cb.js.map
