define(
  "@widget/GALLERY/bs-gallery1-Gallery-27f64d1d.js",
  [
    "exports",
    "~/c/bs-dataAids",
    "@wsb/guac-widget-shared@^1/lib/components/Carousel",
    "~/c/bs-wrapWithDeviceDetection",
    "~/c/bs-CustomArrows",
    "~/c/bs-directionalKeyHandlers",
    "~/c/bs-util",
  ],
  function (e, t, a, o, l, s, i) {
    "use strict";
    const r = (e) => {
      let { maxWidthCaption: a, captionContainerHeight: o, caption: l } = e;
      return (global.React || guac.react).createElement(
        (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.FigCaption,
        {
          "data-aid": t.d.GALLERY_CAPTION_RENDERED,
          children: l,
          richtext: !0,
          style: {
            textAlign: "center",
            maxWidth: a || "",
            minHeight: o || "",
            paddingTop: "small",
            margin: "0 auto",
          },
        }
      );
    };
    r.propTypes = {
      maxWidthCaption: (global.PropTypes || guac["prop-types"]).string,
      captionContainerHeight: (global.PropTypes || guac["prop-types"]).string,
      caption: (global.PropTypes || guac["prop-types"]).string,
    };
    const n = {
      mobile: { minWidth: 200, maxWidth: 300, height: 210 },
      tablet: { minWidth: 400, maxWidth: 800, height: 600 },
      smallTablet: { minWidth: 300, maxWidth: 600, height: 400 },
    };
    var c = o.w(
      class extends (global.React || guac.react).Component {
        constructor(e) {
          super(e),
            (this.state = {
              arrows: !1,
              selectedIndex: 0,
              nextSlideIncremental: 0,
            }),
            (this.updateSelectedIndex = this.updateSelectedIndex.bind(this)),
            (this.handleMouseMove = this.handleMouseMove.bind(this)),
            (this.handleMouseEnter = this.handleMouseEnter.bind(this)),
            (this.handleMouseLeave = this.handleMouseLeave.bind(this)),
            (this.nextSlideDebounced = (global._ || guac.lodash).debounce(
              (e) => s.h({ keyCode: e.keyCode, context: this }),
              200
            ));
        }
        static get propTypes() {
          return {
            autoplay: (global.PropTypes || guac["prop-types"]).bool,
            category: (global.PropTypes || guac["prop-types"]).string,
            className: (global.PropTypes || guac["prop-types"]).string,
            device: (global.PropTypes || guac["prop-types"]).string,
            images: (global.PropTypes || guac["prop-types"]).array,
            renderAsThumbnail: (global.PropTypes || guac["prop-types"]).bool,
            section: (global.PropTypes || guac["prop-types"]).string,
            showthumbnails: (global.PropTypes || guac["prop-types"]).bool,
            size: (global.PropTypes || guac["prop-types"]).string,
            currentImageSelected: (global.PropTypes || guac["prop-types"])
              .string,
            fullBleed: (global.PropTypes || guac["prop-types"]).bool,
            showArrows: (global.PropTypes || guac["prop-types"]).bool,
            autoplayDelay: (global.PropTypes || guac["prop-types"]).string,
            hasCaption: (global.PropTypes || guac["prop-types"]).bool,
          };
        }
        static get defaultProps() {
          return {
            category: "neutral",
            device: "tablet",
            images: [],
            autoplay: !1,
            showArrows: !0,
          };
        }
        static getDerivedStateFromProps(e, t) {
          const { images: a = [] } = e,
            { selectedIndex: o } = t;
          return o >= a.length ? { selectedIndex: 0 } : null;
        }
        handleMouseLeave() {
          this.setState({ mouseOnCarousel: !1, arrows: !1 });
        }
        handleMouseEnter() {
          this.setState({ mouseOnCarousel: !0 }), this.handleMouseMove();
        }
        handleMouseMove() {
          this.state.arrows || this.setState({ arrows: !0 }),
            clearTimeout(this.timer),
            (this.timer = setTimeout(() => {
              this.setState({ arrows: !1 });
            }, 1e3));
        }
        renderFakeCarousel(e) {
          const t = {
              marginVertical: 0,
              marginHorizontal: "xxsmall",
              display: "inline-block",
              height: 500,
              width: 700,
            },
            a = e[e.length - 1],
            o = e[0],
            l = e.length > 1 ? e[1] : o,
            i = "mobile" !== this.props.device ? "700px" : null,
            { selectedIndex: n } = this.state;
          return (global.React || guac.react).createElement(
            (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
            { color: "highlight" },
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
              {
                style: {
                  width: 900,
                  overflow: "hidden",
                  margin: "0 auto",
                  whiteSpace: "nowrap",
                },
              },
              (global.React || guac.react).cloneElement(a, {
                style: (global._ || guac.lodash).merge({}, t, {
                  margin: "0 5px 0 -605px",
                  opacity: 0.3,
                }),
              }),
              (global.React || guac.react).cloneElement(o, { style: t }),
              (global.React || guac.react).cloneElement(l, {
                style: (global._ || guac.lodash).merge({}, t, { opacity: 0.3 }),
              })
            ),
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
              { style: { width: 900, overflow: "hidden", margin: "0 auto" } },
              (global.React || guac.react).createElement(r, {
                maxWidthCaption: i,
                captionContainerHeight: this.props.hasCaption ? 40 : 0,
                caption: e[n].caption || "",
              }),
              this.props.showthumbnails &&
                (global.React || guac.react).createElement(s.F, {
                  images: this.props.images,
                  thumbImageDimensions: s.t,
                  baseStyle: { position: "relative" },
                })
            )
          );
        }
        componentDidUpdate(e) {
          const { currentImageSelected: t } = this.props;
          t !== e.currentImageSelected &&
            t > -1 &&
            this.setState({ selectedIndex: parseInt(t, 10) });
        }
        componentWillUnmount() {
          s.m(this.nextSlideDebounced);
        }
        renderCarousel() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            o = arguments.length > 1 ? arguments[1] : void 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
          const {
              showthumbnails: c,
              device: g,
              currentImageSelected: p,
              images: d,
              fullBleed: h,
              autoplayDelay: u,
              autoplay: m,
              hasCaption: b,
            } = this.props,
            { selectedIndex: y, nextSlideIncremental: w } = this.state,
            x = p > -1 ? parseInt(p, 10) : y,
            C = { initialSlide: parseInt(x, 10) },
            v = (d[y] && d[y].caption) || "",
            E = "mobile" !== g ? "700px" : null,
            T = [];
          b &&
            T.push({
              component: r,
              props: {
                maxWidthCaption: E,
                captionContainerHeight: 40,
                caption: v,
              },
              position: "bottom",
            });
          const S = !h || c || b ? "auto" : `${o.height}px`,
            I = 1e3 * (parseFloat(u) || 3.5);
          if (c && "mobile" !== g && d.length > 1) {
            const { height: e } = s.t,
              t = { height: e, width: e },
              a = d.map((e) => {
                let { imageData: a } = e;
                return {
                  url: i.g(
                    (
                      global.Core || guac["@wsb/guac-widget-core"]
                    ).utils.generateImageServiceUrl(
                      (global._ || guac.lodash).omit(a, "position")
                    ),
                    t.height,
                    t.height
                  ),
                  caption: a.caption,
                  alt: a.alt,
                };
              });
            T.push({
              component: s.T,
              props: {
                images: a,
                thumbWidth: 70,
                thumbHeight: e,
                renderContainer: h,
              },
              position: "bottom",
            });
          }
          n &&
            T.push({
              component: l.C,
              props: {
                visible: this.state.arrows,
                overrideArrowStyle: { top: 0, marginTop: o.height / 2 + "px" },
                triggerNextSlide: w,
              },
              position: "bottom",
            });
          const M = h ? { imagesToPrefetch: 10 } : {};
          return (global.React || guac.react).createElement(
            a.default,
            t._(
              {
                key: p,
                dots: !1,
                arrows: !1,
                cellPadding: 5,
                infinite: d.length > 1,
                slideHeight: `${o.height}px`,
                slideWidth: "inherit",
                draggable: d.length > 1,
                autoplay: m,
                autoplaySpeed: I,
                afterChange: this.updateSelectedIndex,
                controls: T,
                children: e,
                pauseOnHover: !h,
                style: {
                  slide: { opacity: "0.3" },
                  selectedSlide: { opacity: "1" },
                  track: { lineHeight: 0 },
                },
                height: S,
              },
              C,
              M
            )
          );
        }
        updateSelectedIndex(e) {
          this.setState({ selectedIndex: e });
        }
        render() {
          const {
              device: e,
              images: a,
              renderAsThumbnail: l,
              size: i,
              fullBleed: r,
              showArrows: c,
            } = this.props,
            g = (global.Core || guac["@wsb/guac-widget-core"]).UX2.Component
              .Grid,
            p = e === o.T && "sm" === i ? n.smallTablet : n[e],
            d = ("mobile" === e || "xs" === i) && l,
            h = a.map((e, a) => {
              let { imageData: o } = e;
              const l = 1300,
                i = 800,
                r = (
                  global.Core || guac["@wsb/guac-widget-core"]
                ).utils.generateImageServiceUrl({
                  ...o,
                  additionalUrlParams: [`rs=w:${l},h:${i}`],
                });
              return (global.React || guac.react).createElement(
                (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                  .Image,
                t._(
                  {
                    src: r,
                    "data-aid": t.a(a),
                    "data-route": "",
                    alt: o.alt || "",
                    key: a,
                    style: {
                      maxWidth: "100%",
                      position: "relative",
                      height: "100%",
                      objectFit: "contain",
                    },
                    onMouseEnter: s.m.bind(this, this.nextSlideDebounced, !0),
                    onMouseLeave: s.m.bind(this, this.nextSlideDebounced),
                  },
                  t.g(a, { isImage: !0 })
                )
              );
            });
          let u = null;
          if (h.length) {
            const t = c && "mobile" !== e && h.length > 1,
              a = d ? this.renderFakeCarousel(h) : this.renderCarousel(h, p, t),
              o = (global.React || guac.react).createElement(
                (global.Core || guac["@wsb/guac-widget-core"]).UX2.Group
                  .Carousel,
                {
                  onMouseEnter: this.handleMouseEnter,
                  onMouseMove: this.handleMouseMove,
                  onMouseLeave: this.handleMouseLeave,
                  children: a,
                }
              );
            u = r
              ? o
              : (global.React || guac.react).createElement(g, { size: 1 }, o);
          }
          const m = r
            ? (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block
            : (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                .Container;
          return (global.React || guac.react).createElement(
            m,
            { "data-test-radpack": "bootstrap2" },
            u
          );
        }
      }
    );
    (e.default = c), Object.defineProperty(e, "__esModule", { value: !0 });
  }
),
  "undefined" != typeof window && (window.global = window);
//# sourceMappingURL=bs-gallery1-Gallery-27f64d1d.js.map
