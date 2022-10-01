define("@widget/LAYOUT/c/bs-index2-5a810c82.js", ["exports"], function (t) {
  "use strict";
  (t.a = function () {
    let t =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "medium";
    return {
      "> :nth-child(n)": { marginBottom: t },
      " > :last-child": { marginBottom: "0 !important" },
    };
  }),
    (t.b = function () {
      let t =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : "medium";
      return {
        "> :nth-child(n)": { marginRight: t },
        " > :last-child": { marginRight: "0 !important" },
      };
    }),
    (t.c = function (t) {
      const n =
        (function (t) {
          if ("string" != typeof t || "{" !== t[0]) return null;
          try {
            return JSON.parse(t);
          } catch (t) {
            return null;
          }
        })(t) || {};
      let e = 0;
      return (
        n.blocks &&
          n.blocks.forEach((t) => {
            const n = t.text.length;
            e += (global._ || guac.lodash).clamp(n, 25, Math.max(n, 25));
          }),
        e
      );
    }),
    (t.g = () => {
      const t = document.getElementsByClassName("ux-scaled");
      let n = 1;
      return t && t.length > 0 && (n = t[0].getAttribute("data-scale")), n;
    }),
    (t.r = (t) => {
      let { count: n = 0, fontSizeMap: e = {}, defaultFontSize: r } = t;
      const i = (global._ || guac.lodash).reduce(
        e,
        (t, n, e) => {
          let [r, i = Number.MAX_VALUE] = n;
          return t.push({ range: [r, i], fontSize: e }), t;
        },
        []
      );
      let l = r || void 0;
      return (
        i.forEach((t) => {
          let {
            range: [e, r],
            fontSize: i,
          } = t;
          n >= e && n <= r && (l = i);
        }),
        l
      );
    }),
    (t.s = (t) => {
      if ("string" == typeof t) return { children: t.trim() };
      if (t && "object" == typeof t) {
        let { children: n = null } = t;
        return "string" == typeof n && (n = n.trim()), { ...t, children: n };
      }
      return { children: null };
    });
}),
  "undefined" != typeof window && (window.global = window);
//# sourceMappingURL=bs-index2-5a810c82.js.map
