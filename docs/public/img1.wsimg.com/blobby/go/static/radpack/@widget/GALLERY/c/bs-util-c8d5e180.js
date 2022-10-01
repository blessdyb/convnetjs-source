define("@widget/GALLERY/c/bs-util-c8d5e180.js", ["exports"], function (e) {
  "use strict";
  (e.a = function (e) {
    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
      n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r + 2;
    if (e <= n) return [e];
    const i = [];
    let t = n + 1,
      o = e;
    for (; t > r; ) {
      t--;
      const r = e / t,
        n = Math.ceil(r);
      if (n > o) break;
      o = n;
      const a = Math.floor(r),
        d = e - a * t;
      i.push({ cur: t, maxes: a, remainder: d });
    }
    const a = i.sort((e, r) =>
        e.remainder > r.remainder ? 1 : e.remainder < r.remainder ? -1 : 0
      )[0],
      d = Array(a.maxes).fill(a.cur);
    if (0 === a.remainder) return d;
    if (a.remainder < r) {
      const e = d.pop() - a.remainder;
      d.push(e), d.push(r);
    } else d.push(a.remainder);
    return d;
  }),
    (e.g = function (e, r, n) {
      let i,
        t =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : "image";
      return (
        "image" === t
          ? (i = [e, `rs=w:${r},h:${n},cg:true,m/cr=w:${r},h:${n},a:cc`].join(
              e.endsWith("/") ? "" : "/"
            ))
          : "background" === t &&
            (i = e.replace(/\{width\}/g, r).replace(/\{height\}/g, n)),
        i
      );
    });
}),
  "undefined" != typeof window && (window.global = window);
//# sourceMappingURL=bs-util-c8d5e180.js.map
