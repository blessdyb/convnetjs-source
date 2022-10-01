define(
  "@wsb/guac-widget-shared/lib/components/Carousel-3d82957b.js",
  [
    "exports",
    "~/c/_rollupPluginBabelHelpers",
    "~/c/_commonjsHelpers",
    "~/c/interopRequireDefault",
    "~/c/_react_commonjs-external",
  ],
  function (e, t, n, i, r) {
    "use strict";
    var s = n.c(function (e) {
        function t(n) {
          return (
            (e.exports = t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(n)
          );
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      }),
      o = n.c(function (e) {
        var t = s.default;
        function n(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            i = new WeakMap();
          return (n = function (e) {
            return e ? i : t;
          })(e);
        }
        (e.exports = function (e, i) {
          if (!i && e && e.__esModule) return e;
          if (null === e || ("object" !== t(e) && "function" != typeof e))
            return { default: e };
          var r = n(i);
          if (r && r.has(e)) return r.get(e);
          var s = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
              var l = o ? Object.getOwnPropertyDescriptor(e, a) : null;
              l && (l.get || l.set)
                ? Object.defineProperty(s, a, l)
                : (s[a] = e[a]);
            }
          return (s.default = e), r && r.set(e, s), s;
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      }),
      a = n.c(function (e) {
        function t() {
          return (
            (e.exports = t =
              Object.assign
                ? Object.assign.bind()
                : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) &&
                          (e[i] = n[i]);
                    }
                    return e;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t.apply(this, arguments)
          );
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      }),
      l = n.c(function (e) {
        (e.exports = function (e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      }),
      d = 1e3,
      u = 60 * d,
      c = 60 * u,
      h = 24 * c,
      f = 7 * h,
      p = 365.25 * h,
      g = function (e, t) {
        t = t || {};
        var n = typeof e;
        if ("string" === n && e.length > 0)
          return (function (e) {
            if ((e = String(e)).length > 100) return;
            var t =
              /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                e
              );
            if (!t) return;
            var n = parseFloat(t[1]);
            switch ((t[2] || "ms").toLowerCase()) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return n * p;
              case "weeks":
              case "week":
              case "w":
                return n * f;
              case "days":
              case "day":
              case "d":
                return n * h;
              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return n * c;
              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return n * u;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return n * d;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return n;
              default:
                return;
            }
          })(e);
        if ("number" === n && isFinite(e))
          return t.long
            ? (function (e) {
                var t = Math.abs(e);
                if (t >= h) return m(e, t, h, "day");
                if (t >= c) return m(e, t, c, "hour");
                if (t >= u) return m(e, t, u, "minute");
                if (t >= d) return m(e, t, d, "second");
                return e + " ms";
              })(e)
            : (function (e) {
                var t = Math.abs(e);
                if (t >= h) return Math.round(e / h) + "d";
                if (t >= c) return Math.round(e / c) + "h";
                if (t >= u) return Math.round(e / u) + "m";
                if (t >= d) return Math.round(e / d) + "s";
                return e + "ms";
              })(e);
        throw new Error(
          "val is not a non-empty string or a valid number. val=" +
            JSON.stringify(e)
        );
      };
    function m(e, t, n, i) {
      var r = t >= 1.5 * n;
      return Math.round(e / n) + " " + i + (r ? "s" : "");
    }
    var v = n.c(function (e) {
      /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
      !(function () {
        var t = {}.hasOwnProperty;
        function n() {
          for (var e = [], i = 0; i < arguments.length; i++) {
            var r = arguments[i];
            if (r) {
              var s = typeof r;
              if ("string" === s || "number" === s) e.push(r);
              else if (Array.isArray(r)) {
                if (r.length) {
                  var o = n.apply(null, r);
                  o && e.push(o);
                }
              } else if ("object" === s) {
                if (
                  r.toString !== Object.prototype.toString &&
                  !r.toString.toString().includes("[native code]")
                ) {
                  e.push(r.toString());
                  continue;
                }
                for (var a in r) t.call(r, a) && r[a] && e.push(a);
              }
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((n.default = n), (e.exports = n))
          : (window.classNames = n);
      })();
    });
    const y = global.PropTypes || guac["prop-types"];
    var b = n.c(function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var n = o(r._),
          s = i.i(y),
          a = i.i(v);
        class l extends n.Component {
          static get propTypes() {
            return {
              numSlides: s.default.number.isRequired,
              selectedIndex: s.default.number.isRequired,
              goToSlide: s.default.func.isRequired,
            };
          }
          render() {
            const { numSlides: e, selectedIndex: t, goToSlide: i } = this.props,
              r = [];
            for (let s = 0; s < e; s++) {
              const e = (0, a.default)("carousel-dot", { selected: s === t });
              r.push(
                n.default.createElement(
                  "li",
                  { key: `dot-${s}` },
                  n.default.createElement(
                    "button",
                    { className: e, onClick: i.bind(null, s) },
                    "•"
                  )
                )
              );
            }
            return n.default.createElement(
              "ul",
              { className: "carousel-dots" },
              r
            );
          }
        }
        t.default = l;
      }),
      w = n.c(function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var n = o(r._),
          s = i.i(y);
        class a extends n.Component {
          static get propTypes() {
            return {
              numSlides: s.default.number.isRequired,
              selectedIndex: s.default.number.isRequired,
              infinite: s.default.bool.isRequired,
              prevSlide: s.default.func.isRequired,
              nextSlide: s.default.func.isRequired,
              direction: s.default.oneOf(["left", "right"]).isRequired,
              arrows: s.default.oneOfType([
                s.default.bool,
                s.default.shape({
                  left: s.default.node.isRequired,
                  right: s.default.node.isRequired,
                  className: s.default.string,
                }),
              ]),
            };
          }
          hasNext() {
            const {
              direction: e,
              infinite: t,
              numSlides: n,
              selectedIndex: i,
            } = this.props;
            return t || ("left" === e ? i > 0 : i < n - 1);
          }
          render() {
            const {
              prevSlide: e,
              nextSlide: t,
              direction: i,
              arrows: r,
            } = this.props;
            let s = null,
              o = "carousel-arrow-default";
            return (
              r.left &&
                ((o = r.className ? r.className : ""),
                (s = "left" === i ? r.left : r.right)),
              n.default.createElement(
                "button",
                {
                  type: "button",
                  disabled: !this.hasNext(),
                  onClick: "left" === i ? e : t,
                  className: `carousel-arrow carousel-${i}-arrow ${o}`,
                },
                s
              )
            );
          }
        }
        t.default = a;
      }),
      S = n.c(function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "Dots", {
            enumerable: !0,
            get: function () {
              return n.default;
            },
          }),
          Object.defineProperty(t, "Arrow", {
            enumerable: !0,
            get: function () {
              return r.default;
            },
          });
        var n = i.i(b),
          r = i.i(w);
      }),
      x = n.c(function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var n = function (e, t) {
          if (e.length !== t.length) return !1;
          for (let n = 0; n < e.length; n++) {
            if (e[n].props.src !== t[n].props.src) return !1;
          }
          return !0;
        };
        t.default = n;
      }),
      _ = n.c(function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e, t) {
            if (!e || !e.length) return;
            const n = e.length;
            return (t += t < 0 ? n : 0) >= 0 && t < n ? e[t] : void 0;
          });
      }),
      T = n.c(function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var n = i.i(a),
          s = i.i(l),
          d = o(r._),
          u = i.i(y),
          c = i.i(g),
          h = i.i(v),
          f = i.i(x),
          p = i.i(_);
        const m = "carousel-slide-selected",
          b = "carousel-slide-loading";
        class w extends d.Component {
          static get propTypes() {
            return {
              initialSlide: u.default.number,
              className: u.default.string,
              transition: u.default.oneOf(["slide", "fade"]),
              dots: u.default.bool,
              arrows: u.default.oneOfType([
                u.default.bool,
                u.default.shape({
                  left: u.default.node.isRequired,
                  right: u.default.node.isRequired,
                  className: u.default.string,
                }),
              ]),
              infinite: u.default.bool,
              children: u.default.any,
              viewportWidth: u.default.string,
              viewportHeight: u.default.string,
              width: u.default.string,
              height: u.default.string,
              imagesToPrefetch: u.default.number,
              maxRenderedSlides: u.default.number,
              cellPadding: u.default.number,
              slideWidth: u.default.string,
              slideHeight: u.default.string,
              slideAlignment: u.default.oneOf(["left", "center", "right"]),
              beforeChange: u.default.func,
              afterChange: u.default.func,
              transitionDuration: u.default.oneOfType([
                u.default.number,
                u.default.string,
              ]),
              autoplay: u.default.bool,
              autoplaySpeed: u.default.oneOfType([
                u.default.number,
                u.default.string,
              ]),
              lazyLoad: u.default.bool,
              controls: u.default.arrayOf(
                u.default.shape({
                  component: u.default.func.isRequired,
                  props: u.default.object,
                  position: u.default.oneOf(["top", "bottom"]),
                })
              ),
              draggable: u.default.bool,
              pauseOnHover: u.default.bool,
              clickToNavigate: u.default.bool,
              dragThreshold: u.default.number,
              onSlideTransitioned: u.default.func,
              easing: u.default.oneOf([
                "ease",
                "linear",
                "ease-in",
                "ease-out",
                "ease-in-out",
              ]),
              style: u.default.shape({
                container: u.default.object,
                containerInner: u.default.object,
                viewport: u.default.object,
                track: u.default.object,
                slide: u.default.object,
                selectedSlide: u.default.object,
              }),
              dir: u.default.oneOf(["ltr", "rtl"]),
            };
          }
          static get defaultProps() {
            return {
              initialSlide: 0,
              dots: !0,
              arrows: !0,
              infinite: !0,
              viewportWidth: "100%",
              width: "100%",
              height: "auto",
              imagesToPrefetch: 5,
              maxRenderedSlides: 5,
              cellPadding: 0,
              slideAlignment: "center",
              transitionDuration: 500,
              autoplay: !1,
              autoplaySpeed: 4e3,
              lazyLoad: !0,
              controls: [],
              draggable: !0,
              pauseOnHover: !0,
              transition: "slide",
              dragThreshold: 0.2,
              clickToNavigate: !0,
              easing: "ease-in-out",
              style: {},
              dir: "ltr",
            };
          }
          constructor(e) {
            super(...arguments),
              (0, s.default)(this, "handleInitialLoad", () => {
                const { currentSlide: e } = this.state,
                  t = this._track.childNodes,
                  { slideWidth: n, slideHeight: i } = this.props;
                if (!n || !i)
                  for (let n = 0; n < t.length; n++) {
                    const i = t[n];
                    if (parseInt(i.getAttribute("data-index"), 10) === e) {
                      if (!i.offsetWidth || !i.offsetHeight)
                        return void (this._initialLoadTimer = setTimeout(
                          this.handleInitialLoad,
                          10
                        ));
                      this.setState({
                        slideDimensions: {
                          width: i.offsetWidth,
                          height: i.offsetHeight,
                        },
                      });
                      break;
                    }
                  }
              }),
              (0, s.default)(this, "goToSlide", (e, t, n = !1) => {
                const {
                    beforeChange: i,
                    transitionDuration: r,
                    transition: s,
                    onSlideTransitioned: o,
                    children: a,
                  } = this.props,
                  { currentSlide: l } = this.state,
                  u = d.Children.count(a) - 1,
                  c = e < 0 ? u + e + 1 : e <= u ? e : e - u - 1;
                (t = t || (e > l ? "right" : "left")),
                  o && o({ autoPlay: n, index: c, direction: t }),
                  l !== c &&
                    (this._animating ||
                      ((this._animating = !0),
                      i && i(c, l, t),
                      this.setState({ transitionDuration: r }, () => {
                        this.setState(
                          {
                            currentSlide: c,
                            direction: t,
                            transitioningFrom: l,
                          },
                          () => {
                            (r && "fade" !== s) || this.slideTransitionEnd();
                          }
                        );
                      })));
              }),
              (0, s.default)(this, "nextSlide", (e) => {
                const { currentSlide: t } = this.state;
                this.goToSlide(t + 1, "right", "object" != typeof e);
              }),
              (0, s.default)(this, "prevSlide", () => {
                const { currentSlide: e } = this.state;
                this.goToSlide(e - 1, "left");
              }),
              (0, s.default)(this, "slideTransitionEnd", (e) => {
                const { currentSlide: t } = this.state,
                  { afterChange: n } = this.props;
                (e && "transform" !== e.propertyName) ||
                  ((this._animating = !1),
                  this.setState(
                    {
                      direction: null,
                      transitioningFrom: null,
                      transitionDuration: 0,
                    },
                    () => {
                      this._allImagesLoaded || this.fetchImages();
                    }
                  ),
                  this.props.autoplay && this.startAutoplay(),
                  n && n(t));
              }),
              (0, s.default)(this, "calcLeftOffset", (e = 0) => {
                const { direction: t, loading: n } = this.state,
                  i = this._viewport && this._viewport.offsetWidth;
                if ((clearTimeout(this._retryTimer), !this._track || !i))
                  return void (this._retryTimer = setTimeout(
                    this.calcLeftOffset,
                    10
                  ));
                const {
                  infinite: r,
                  children: s,
                  cellPadding: o,
                  slideAlignment: a,
                } = this.props;
                let { currentSlide: l } = this.state;
                const u = this._track.childNodes,
                  c = d.Children.count(s);
                r &&
                  (0 === l && "right" === t
                    ? (l = c)
                    : l === c - 1 && "left" === t && (l = -1));
                let h,
                  f,
                  p = 0,
                  g = !1,
                  m = !1;
                for (
                  let e = 0;
                  e < u.length &&
                  ((h = u[e]),
                  (p -= o),
                  (m = -1 !== h.className.indexOf(b)),
                  (f = h.offsetWidth),
                  (g = g || (!f && !m)),
                  parseInt(h.getAttribute("data-index"), 10) !== l);
                  e++
                )
                  p -= f;
                "center" === a
                  ? (p += (i - f) / 2)
                  : "right" === a && (p += i - f);
                const v = g && e < 500;
                p !== this.state.leftOffset && this.setState({ leftOffset: p }),
                  v
                    ? (this._retryTimer = setTimeout(
                        this.calcLeftOffset.bind(this, ++e),
                        10
                      ))
                    : n && this.setState({ loading: !1 });
              }),
              (0, s.default)(this, "handleSlideClick", (e) => {
                const { clickToNavigate: t } = this.props,
                  { currentSlide: n } = this.state,
                  i = parseInt(e.currentTarget.getAttribute("data-index"), 10);
                !t ||
                  i === n ||
                  Math.abs(this._startPos.x - e.clientX) > 0.01 ||
                  this.goToSlide(i);
              }),
              (0, s.default)(this, "onMouseDown", (e) => {
                const { draggable: t, transition: n } = this.props;
                "IMG" === e.target.nodeName && e.preventDefault(),
                  t &&
                    "fade" !== n &&
                    !this._animating &&
                    (this._autoplayTimer && clearTimeout(this._autoplayTimer),
                    (this._startPos = {
                      x: e.clientX,
                      y: e.clientY,
                      startTime: Date.now(),
                    }),
                    this.setState({ transitionDuration: 0 }),
                    document.addEventListener("mousemove", this.onMouseMove, {
                      passive: !1,
                    }),
                    document.addEventListener(
                      "mouseup",
                      this.stopDragging,
                      !1
                    ));
              }),
              (0, s.default)(this, "onMouseMove", (e) => {
                e.preventDefault(),
                  this.setState({ dragOffset: e.clientX - this._startPos.x });
              }),
              (0, s.default)(this, "onMouseEnter", () => {
                document.addEventListener("mousemove", this.handleMovement, !1);
              }),
              (0, s.default)(this, "handleMovement", () => {
                this.setHoverState(!0);
              }),
              (0, s.default)(this, "onMouseOver", () => {
                this.setHoverState(!0);
              }),
              (0, s.default)(this, "onMouseLeave", () => {
                document.removeEventListener(
                  "mousemove",
                  this.handleMovement,
                  !1
                ),
                  this.setHoverState(!1),
                  !this._animating && this._startPos && this.stopDragging();
              }),
              (0, s.default)(this, "onTouchStart", (e) => {
                const { draggable: t, transition: n } = this.props;
                t &&
                  "fade" !== n &&
                  !this._animating &&
                  (this._autoplayTimer && clearTimeout(this._autoplayTimer),
                  1 === e.touches.length &&
                    ((this._startPos = {
                      x: e.touches[0].screenX,
                      y: e.touches[0].screenY,
                      startTime: Date.now(),
                    }),
                    document.addEventListener("touchmove", this.onTouchMove, {
                      passive: !1,
                    }),
                    document.addEventListener(
                      "touchend",
                      this.stopDragging,
                      !1
                    )));
              }),
              (0, s.default)(this, "onTouchMove", (e) => {
                const { x: t, y: n } = this._prevPos || this._startPos,
                  { screenX: i, screenY: r } = e.touches[0],
                  s = (180 * Math.abs(Math.atan2(r - n, i - t))) / Math.PI;
                (this._prevPos = { x: i, y: r }),
                  (s < 20 || s > 160) &&
                    (e.preventDefault(),
                    this.setState({ dragOffset: i - this._startPos.x }));
              }),
              (0, s.default)(this, "stopDragging", () => {
                const { dragThreshold: e, transitionDuration: t } = this.props,
                  { dragOffset: n } = this.state,
                  i = (this._viewport && this._viewport.offsetWidth) || 1,
                  r = Math.abs(n / i),
                  s = Date.now() - this._startPos.startTime || 1,
                  o = s / (r * i),
                  a = r > 0.05 && s < 250;
                let l;
                (l =
                  a || r > e
                    ? Math.min(
                        o * (1 - r) * i,
                        (0, c.default)("" + t) * (1 - r)
                      )
                    : (0, c.default)("" + t) * r),
                  this.removeDragListeners(),
                  this.setState({ transitionDuration: l }, () => {
                    const { children: t, infinite: i } = this.props,
                      { currentSlide: s } = this.state,
                      o = d.Children.count(t);
                    let l = s,
                      u = "";
                    (r > e || a) &&
                      (n > 0
                        ? (l--, l < 0 && (l = i ? o - 1 : s))
                        : (l++, l === o && (l = i ? 0 : s)),
                      (u = n > 0 ? "left" : "right")),
                      this.setState({
                        dragOffset: 0,
                        currentSlide: l,
                        direction: u,
                      });
                  }),
                  this.props.autoplay && this.startAutoplay();
              }),
              (this.state = {
                currentSlide: e.initialSlide,
                loading: e.lazyLoad,
                loadedImages: {},
                slideDimensions: {},
                dragOffset: 0,
                transitionDuration: 0,
                transitioningFrom: null,
              });
          }
          static getDerivedStateFromProps(e, t) {
            const { currentSlide: n } = t,
              i = d.Children.count(e.children);
            return n >= i ? { currentSlide: i ? i - 1 : 0 } : null;
          }
          componentDidUpdate(e, t) {
            const {
                children: n,
                autoplay: i,
                slideWidth: r,
                slideAlignment: s,
              } = this.props,
              {
                currentSlide: o,
                loadedImages: a,
                direction: l,
                loading: u,
                slideDimensions: c,
              } = this.state,
              h = e.children;
            (l === t.direction &&
              o === t.currentSlide &&
              a === t.loadedImages &&
              r === e.slideWidth &&
              c.width === t.slideDimensions.width &&
              c.height === t.slideDimensions.height &&
              s === e.slideAlignment) ||
              this.calcLeftOffset(),
              (0, f.default)(d.Children.toArray(n), d.Children.toArray(h)) ||
                ((this._animating = !1), this.fetchImages()),
              i && ((!u && t.loading) || !e.autoplay) && this.startAutoplay();
          }
          componentDidMount() {
            const { lazyLoad: e, autoplay: t } = this.props;
            (this._isMounted = !0),
              e
                ? this.fetchImages()
                : (t && this.startAutoplay(), this.calcLeftOffset()),
              window.addEventListener("resize", this.calcLeftOffset, !1),
              window.IntersectionObserver &&
                ((this._observer = new window.IntersectionObserver((e) => {
                  this.props.autoplay &&
                    (e && e[0] && e[0].isIntersecting
                      ? this.startAutoplay()
                      : clearTimeout(this._autoplayTimer));
                })),
                this._observer.observe(this._containerRef));
          }
          componentWillUnmount() {
            this.removeDragListeners(),
              window.removeEventListener("resize", this.calcLeftOffset, !1),
              document.removeEventListener(
                "mousemove",
                this.handleMovement,
                !1
              ),
              clearTimeout(this._autoplayTimer),
              clearTimeout(this._retryTimer),
              clearTimeout(this._initialLoadTimer),
              this._observer && this._observer.unobserve(this._containerRef),
              (this._isMounted = !1);
          }
          startAutoplay() {
            clearTimeout(this._autoplayTimer),
              (this._autoplayTimer = setTimeout(() => {
                const { autoplay: e } = this.props;
                e && this.nextSlide();
              }, (0, c.default)("" + this.props.autoplaySpeed)));
          }
          fetchImages() {
            const { children: e } = this.props,
              { loadedImages: t, currentSlide: n } = this.state,
              i = d.Children.toArray(e),
              r = Math.min(this.props.imagesToPrefetch, i.length),
              s = n - Math.floor(r / 2),
              o = s + r,
              a = [],
              l = i[n].props.src;
            for (let e = s; e < o; e++) {
              const n = (0, p.default)(i, e % i.length).props.src;
              n && !t[n] && a.push(n);
            }
            a.length
              ? a.forEach((e) => {
                  const t = new Image();
                  (t.onload = t.onerror =
                    () => {
                      this._isMounted &&
                        this.setState(
                          {
                            loadedImages: {
                              ...this.state.loadedImages,
                              [e]: {
                                width: t.width || "auto",
                                height: t.height || "auto",
                              },
                            },
                          },
                          () => {
                            e === l && this.handleInitialLoad();
                          }
                        );
                    }),
                    (t.src = e);
                })
              : this.calcLeftOffset();
          }
          getControls() {
            const { arrows: e, dots: t, controls: n } = this.props;
            let i = n.slice(0);
            return (
              t && i.push({ component: S.Dots }),
              e &&
                (i = i.concat([
                  { component: S.Arrow, props: { direction: "left" } },
                  { component: S.Arrow, props: { direction: "right" } },
                ])),
              i
            );
          }
          render() {
            const {
                className: e,
                viewportWidth: t,
                viewportHeight: i,
                width: r,
                height: s,
                dots: o,
                infinite: a,
                children: l,
                slideHeight: u,
                transition: f,
                style: p,
                draggable: g,
                easing: m,
                arrows: v,
                dir: y,
              } = this.props,
              {
                loading: b,
                transitionDuration: w,
                dragOffset: S,
                currentSlide: x,
                leftOffset: _,
              } = this.state,
              T = d.Children.count(l),
              M = (0, h.default)("carousel", e, { loaded: !b }),
              O = { ...(p.container || {}), width: r, height: s },
              E = {
                ...(p.containerInner || {}),
                width: r,
                height: s,
                marginBottom: o ? "20px" : 0,
              },
              k = { ...(p.viewport || {}), width: t, height: i || u || "auto" },
              L = "rtl" === y;
            let D = { ...p.track };
            if ("fade" !== f) {
              const e = _ + S;
              D = {
                ...D,
                transform: `translateX(${L ? -e : e}px)`,
                transition: w
                  ? `transform ${(0, c.default)("" + w)}ms ${m}`
                  : "none",
              };
            }
            g || (D.touchAction = "auto");
            const P = this.getControls();
            return d.default.createElement(
              "div",
              {
                className: M,
                style: O,
                ref: (e) => {
                  this._containerRef = e;
                },
              },
              d.default.createElement(
                "div",
                { className: "carousel-container-inner", style: E },
                P.filter((e) => "top" === e.position).map((e, t) =>
                  d.default.createElement(
                    e.component,
                    (0, n.default)({}, e.props, {
                      key: `control-${t}`,
                      selectedIndex: x,
                      numSlides: T,
                      nextSlide: this.nextSlide,
                      prevSlide: this.prevSlide,
                      goToSlide: this.goToSlide,
                      infinite: a,
                    })
                  )
                ),
                d.default.createElement(
                  "div",
                  {
                    className: "carousel-viewport",
                    ref: (e) => {
                      this._viewport = e;
                    },
                    style: k,
                  },
                  d.default.createElement(
                    "ul",
                    {
                      className: "carousel-track",
                      style: D,
                      ref: (e) => {
                        this._track = e;
                      },
                      onTransitionEnd: this.slideTransitionEnd,
                      onMouseDown: this.onMouseDown,
                      onMouseLeave: this.onMouseLeave,
                      onMouseOver: this.onMouseOver,
                      onMouseEnter: this.onMouseEnter,
                      onTouchStart: this.onTouchStart,
                    },
                    this.renderSlides()
                  )
                ),
                P.filter((e) => "top" !== e.position).map((e, t) =>
                  d.default.createElement(
                    e.component,
                    (0, n.default)({}, e.props, {
                      key: `control-${t}`,
                      selectedIndex: x,
                      numSlides: T,
                      nextSlide: this.nextSlide,
                      prevSlide: this.prevSlide,
                      goToSlide: this.goToSlide,
                      arrows: v,
                      infinite: a,
                    })
                  )
                )
              )
            );
          }
          renderSlides() {
            const {
                children: e,
                infinite: t,
                cellPadding: n,
                slideWidth: i,
                slideHeight: r,
                transition: s,
                transitionDuration: o,
                style: a,
                easing: l,
                lazyLoad: u,
              } = this.props,
              {
                slideDimensions: f,
                currentSlide: p,
                loadedImages: g,
              } = this.state;
            this._allImagesLoaded = !0;
            let v = d.Children.map(e, (e, t) => {
              const v = `slide-${t}`,
                y = e.props.src,
                w = (0, h.default)("carousel-slide", {
                  [m]: t === p,
                  "carousel-slide-fade": "fade" === s,
                });
              let S = { marginLeft: `${n}px`, height: r, width: i };
              "fade" === s &&
                (S.transition = `opacity ${(0, c.default)("" + o)}ms ${l}`),
                r && ((S.overflowY = "hidden"), (S.minHeight = r)),
                i && ((S.overflowX = "hidden"), (S.minWidth = i)),
                (S = {
                  ...S,
                  ...(a.slide || {}),
                  ...((t === p && a.selectedSlide) || {}),
                });
              const x = {
                  ...(S || {}),
                  marginLeft: S.marginLeft,
                  width: i || f.width,
                  height: r || f.height,
                },
                _ = this.getIndicesToRender();
              if (!u || (y ? g[y] : _.indexOf(t) > -1)) {
                if (y && g[y]) {
                  const { width: e, height: t } = g[y];
                  (S.height = S.height || t), (S.width = S.width || e);
                }
                return d.default.createElement(
                  "li",
                  {
                    key: v,
                    style: S,
                    "data-index": t,
                    className: w,
                    onClick: this.handleSlideClick,
                  },
                  e
                );
              }
              return (
                y && (this._allImagesLoaded = !1),
                d.default.createElement("li", {
                  key: v,
                  style: x,
                  "data-index": t,
                  className: (0, h.default)(w, b),
                  onClick: this.handleSlideClick,
                })
              );
            });
            return t && "fade" !== s && (v = this.addClones(v)), v;
          }
          getIndicesToRender() {
            const { currentSlide: e, transitioningFrom: t } = this.state,
              { children: n, infinite: i, maxRenderedSlides: r } = this.props,
              s = d.Children.count(n);
            function o(e, t) {
              const n = [];
              for (let r = e; r <= t; r++)
                i && r < 0
                  ? n.push(s + r)
                  : i && r >= s
                  ? n.push(r - s)
                  : n.push(r);
              return n;
            }
            const a = Math.max(1, r),
              l = Math.floor((a - 1) / 2),
              u = Math.floor(a / 2);
            let c = o(e - l, e + u);
            return null !== t && (c = c.concat(o(t - l, t + u))), c;
          }
          addClones(e) {
            const t = e.length,
              n = [
                (0, p.default)(e, t - 2),
                (0, p.default)(e, t - 1),
                (0, p.default)(e, 0),
                (0, p.default)(e, Math.min(1, t - 1)),
              ],
              i = [
                (0, d.cloneElement)(n[0], {
                  key: "clone-1",
                  "data-index": -2,
                  className: n[0].props.className.replace(m, ""),
                }),
                (0, d.cloneElement)(n[1], {
                  key: "clone-0",
                  "data-index": -1,
                  className: n[1].props.className.replace(m, ""),
                }),
              ],
              r = [
                (0, d.cloneElement)(n[2], {
                  key: "clone-2",
                  "data-index": t,
                  className: n[2].props.className.replace(m, ""),
                }),
                (0, d.cloneElement)(n[3], {
                  key: "clone-3",
                  "data-index": t + 1,
                  className: n[3].props.className.replace(m, ""),
                }),
              ];
            return i.concat(e).concat(r);
          }
          setHoverState(e) {
            const { pauseOnHover: t, autoplay: n } = this.props;
            t &&
              n &&
              (clearTimeout(this._hoverTimer),
              e
                ? (clearTimeout(this._autoplayTimer),
                  (this._hoverTimer = setTimeout(() => {
                    this.setHoverState(!1);
                  }, 2e3)))
                : this.startAutoplay());
          }
          removeDragListeners() {
            document.removeEventListener("mousemove", this.onMouseMove, {
              passive: !1,
            }),
              document.removeEventListener("mouseup", this.stopDragging, !1),
              document.removeEventListener("touchmove", this.onTouchMove, {
                passive: !1,
              }),
              document.removeEventListener("touchend", this.stopDragging, !1);
          }
        }
        t.default = w;
      }),
      M = n.g(T),
      O =
        '.carousel {\n  text-align: center;\n  position: relative;\n  opacity: 0;\n  margin: 0 auto;\n  transition: opacity 0.5s;\n}\n.carousel .carousel-container-inner {\n  margin: 0 auto;\n  position: relative;\n}\n.carousel .carousel-viewport {\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: left;\n}\n.carousel .carousel-arrow-default {\n  border: 3px solid !important;\n  border-radius: 50%;\n  color: rgba(255, 255, 255, 0.9);\n  height: 32px;\n  width: 32px;\n  font-weight: 900;\n  background: rgba(0, 0, 0, 0.15);\n}\n.carousel .carousel-arrow {\n  position: absolute;\n  z-index: 1;\n  bottom: 23px;\n  padding: 0;\n  cursor: pointer;\n  border: none;\n}\n.carousel .carousel-arrow:focus {\n  outline: none;\n}\n.carousel .carousel-arrow:before {\n  font-size: 19px;\n  display: block;\n  margin-top: -2px;\n}\n.carousel .carousel-arrow:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.carousel .carousel-left-arrow {\n  left: 23px;\n}\n.carousel .carousel-right-arrow {\n  right: 23px;\n}\n.carousel .carousel-left-arrow.carousel-arrow-default:before {\n  content: \'<\';\n  padding-right: 2px;\n}\n.carousel .carousel-right-arrow.carousel-arrow-default:before {\n  content: \'>\';\n  padding-left: 2px;\n}\n.carousel .carousel-track {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  touch-action: pan-y pinch-zoom;\n}\n.carousel .carousel-track .carousel-slide {\n  display: inline-block;\n  opacity: 0.7;\n  transition: opacity 0.5s ease-in-out;\n}\n.carousel .carousel-track .carousel-slide > * {\n  display: block;\n  white-space: normal;\n}\n.carousel .carousel-track .carousel-slide.carousel-slide-loading {\n  background: rgba(204, 204, 204, 0.7);\n}\n.carousel .carousel-track .carousel-slide.carousel-slide-fade {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  opacity: 0;\n}\n.carousel .carousel-track .carousel-slide.carousel-slide-selected {\n  opacity: 1;\n  z-index: 1;\n}\n.carousel.loaded {\n  opacity: 1;\n}\n.carousel .carousel-dots {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: -30px;\n  text-align: center;\n}\n.carousel .carousel-dots li {\n  display: inline-block;\n}\n.carousel .carousel-dots button {\n  border: 0;\n  background: transparent;\n  font-size: 1.1em;\n  cursor: pointer;\n  color: #CCC;\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.carousel .carousel-dots button.selected {\n  color: black;\n}\n.carousel .carousel-dots button:focus {\n  outline: none;\n}\n[dir="rtl"] .carousel .carousel-viewport {\n  text-align: right;\n}\n[dir="rtl"] .carousel .carousel-left-arrow {\n  left: unset;\n  right: 23px;\n}\n[dir="rtl"] .carousel .carousel-right-arrow {\n  right: unset;\n  left: 23px;\n}\n[dir="rtl"] .carousel .carousel-left-arrow.carousel-arrow-default:before {\n  padding-left: 2px;\n  padding-right: unset;\n}\n[dir="rtl"] .carousel .carousel-right-arrow.carousel-arrow-default:before {\n  padding-right: 2px;\n  padding-left: unset;\n}\n';
    const E = "carousel-stylesheet";
    var k = (global.React || guac.react).forwardRef((e, n) => {
      const i = "undefined" == typeof window;
      return (
        (global.React || guac.react).useEffect(() => {
          if (
            (window.dispatchEvent(new Event("resize")),
            document.getElementById(E))
          )
            return;
          const e = document.createElement("style");
          e.setAttribute("id", E),
            (e.textContent = O),
            (e.onload = () => {
              window.dispatchEvent(new Event("resize"));
            }),
            document.head.appendChild(e);
        }, []),
        (global.React || guac.react).createElement(
          (global.React || guac.react).Fragment,
          null,
          (global.React || guac.react).createElement(M, t._({}, e, { ref: n })),
          i &&
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX.Style,
              { attributes: { id: E } },
              " ",
              O,
              " "
            )
        )
      );
    });
    (e.default = k), Object.defineProperty(e, "__esModule", { value: !0 });
  }
),
  "undefined" != typeof window && (window.global = window);
//# sourceMappingURL=Carousel-3d82957b.js.map
