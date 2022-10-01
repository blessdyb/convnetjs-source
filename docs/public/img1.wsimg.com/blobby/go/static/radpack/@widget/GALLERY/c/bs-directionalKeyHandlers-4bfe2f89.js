define(
  "@widget/GALLERY/c/bs-directionalKeyHandlers-4bfe2f89.js",
  ["exports", "~/c/bs-dataAids"],
  function (e, t) {
    "use strict";
    const o = { left: { step: -1 }, right: { step: 1 } };
    class a extends (global.React || guac.react).Component {
      constructor(e) {
        var a;
        super(e),
          (a = this),
          t.b(this, "onResize", () => {
            this.setState({ conveyorWidth: this.conveyor.offsetWidth });
          }),
          t.b(this, "moveConveyor", function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1;
            return (r) => {
              r && r.preventDefault();
              const n = a.state.conveyorMarginLeft,
                l = Math.abs(n);
              let i = t * a.props.stepSize;
              "left" === e && l < i
                ? (i = l)
                : "right" === e &&
                  a.thumbsExceededWidth - l < i &&
                  (i = a.thumbsExceededWidth - l),
                a.setState({ conveyorMarginLeft: n + -o[e].step * i });
            };
          }),
          (this.state = { conveyorMarginLeft: 0, conveyorWidth: 0 });
      }
      componentDidMount() {
        (this._resizeObserver = new ResizeObserver(this.onResize)),
          this._resizeObserver.observe(this.conveyor),
          this.onResize();
      }
      componentWillUnmount() {
        this._resizeObserver.disconnect();
      }
      componentDidUpdate(e) {
        const {
            selectedIndex: t,
            thumbWidth: o,
            thumbMargin: a,
            stepSize: r,
          } = this.props,
          { conveyorMarginLeft: n, conveyorWidth: l } = this.state;
        if (t === e.selectedIndex) return;
        const i = n + t * (o + a);
        i < 0
          ? this.moveConveyor("left", Math.ceil(-i / r))()
          : l < i + o &&
            this.moveConveyor("right", Math.ceil((i + o - l) / r))();
      }
      get thumbsExceededWidth() {
        const { thumbWidth: e, thumbMargin: t, images: o } = this.props,
          { conveyorWidth: a } = this.state;
        return e * o.length + t * (o.length - 1) - a;
      }
      renderThumbnails() {
        const {
            images: e,
            selectedIndex: o,
            goToSlide: a,
            thumbWidth: r,
            thumbMargin: n,
            thumbHeight: l,
          } = this.props,
          { conveyorMarginLeft: i, conveyorWidth: c } = this.state;
        let s = null;
        if (c) {
          const t = r + n,
            g = Math.max(0, Math.floor(Math.abs(i) / t) - 1),
            h = g + Math.ceil(c / t) + 1;
          s = e.map((e, t) => {
            const n = e.url,
              i = t === o ? { outline: "3px solid", outlineOffset: -3 } : null,
              c = {
                color: "highlight",
                overflowY: "hidden",
                margin: `0 0 0 ${0 === t ? 0 : "10px"}`,
                width: r,
                height: l,
              },
              s =
                t >= g && t <= h
                  ? (global.React || guac.react).createElement(
                      (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                        .Image,
                      {
                        src: n,
                        "data-route": "",
                        alt: e.alt || `image${t}`,
                        key: t,
                        style: { width: r, cursor: "pointer", ...i },
                        "data-edit-interactive": !0,
                      }
                    )
                  : (global.React || guac.react).createElement("span", {
                      key: t,
                    });
            return (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                .ListItem.Inline,
              {
                tag: "li",
                key: `thumb-${t}`,
                "data-index": `thumb-${t}`,
                style: c,
                onClick: a.bind(null, t),
              },
              s
            );
          });
        }
        const g = {
          listStyle: "none",
          padding: 0,
          margin: 0,
          textAlign: "left",
          whiteSpace: "nowrap",
          transition: "margin-left 0.5s",
          marginLeft: i,
        };
        return (global.React || guac.react).createElement(
          (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
          { style: { position: "relative" } },
          (global.React || guac.react).createElement(
            (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
            {
              tag: "button",
              style: this.getArrowStyle("left"),
              onClick: this.moveConveyor("left"),
            },
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon,
              {
                "data-edit-interactive": !0,
                style: { color: "white" },
                icon: "chevronLeft",
              }
            )
          ),
          (global.React || guac.react).createElement("ul", {
            style: g,
            "data-aid": t.d.THUMBNAIL_NAV_LIST,
            children: s,
          }),
          (global.React || guac.react).createElement(
            (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
            {
              tag: "button",
              style: this.getArrowStyle("right"),
              onClick: this.moveConveyor("right"),
            },
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon,
              {
                "data-edit-interactive": !0,
                style: { color: "white" },
                icon: "chevronRight",
              }
            )
          )
        );
      }
      getArrowStyle(e) {
        const { transparentBackground: t, thumbHeight: o } = this.props,
          { conveyorMarginLeft: a } = this.state,
          r = this.thumbsExceededWidth,
          n = { display: "none" };
        return ("left" === e && a) ||
          ("right" === e && r !== Math.abs(a) && r > 0)
          ? ((global._ || guac.lodash).merge(n, {
              position: "absolute",
              zIndex: 1,
              border: "none",
              height: o,
              width: 50,
              background: t ? "transparent" : "rgba(0, 0, 0, 0.5)",
              padding: 0,
              cursor: "pointer",
              outline: "none",
              top: 0,
              display: "block",
            }),
            "left" === e ? (n.left = 0) : (n.right = 0),
            n)
          : n;
      }
      render() {
        const { renderContainer: e, overrideStyle: t } = this.props,
          o = e
            ? (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                .Container
            : (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
          a = { marginTop: "small", ...t };
        return (global.React || guac.react).createElement(
          o,
          { style: a },
          (global.React || guac.react).createElement("div", {
            style: { overflow: "hidden", width: "100%" },
            ref: (e) => {
              this.conveyor = e;
            },
            children: this.renderThumbnails(),
          })
        );
      }
    }
    (a.propTypes = {
      goToSlide: (global.PropTypes || guac["prop-types"]).func,
      selectedIndex: (global.PropTypes || guac["prop-types"]).number,
      images: (global.PropTypes || guac["prop-types"]).array.isRequired,
      transparentBackground: (global.PropTypes || guac["prop-types"]).bool,
      stepSize: (global.PropTypes || guac["prop-types"]).number,
      thumbHeight: (global.PropTypes || guac["prop-types"]).number,
      overrideStyle: (global.PropTypes || guac["prop-types"]).object,
      renderContainer: (global.PropTypes || guac["prop-types"]).bool,
      thumbWidth: (global.PropTypes || guac["prop-types"]).number,
      thumbMargin: (global.PropTypes || guac["prop-types"]).number,
    }),
      (a.defaultProps = {
        goToSlide: (global._ || guac.lodash).noop,
        selectedIndex: 0,
        renderContainer: !1,
        thumbMargin: 10,
        thumbWidth: 70,
        thumbHeight: 70,
        stepSize: 200,
      });
    class r extends (global.React || guac.react).Component {
      render() {
        const {
            images: e,
            thumbImageDimensions: o,
            thumbLength: a,
            baseStyle: r,
          } = this.props,
          n = Math.min(this.props.images.length, a);
        if (n <= 1) return null;
        const { width: l, height: i } = o,
          c = [];
        (global._ || guac.lodash).some(e, (e, t) => {
          let { imageData: o } = e;
          if (t === n) return !0;
          const a = {
            height: i,
            overflowY: "hidden",
            marginLeft: 0 === t ? 0 : 10,
            ...(0 === t
              ? {
                  border: "5px solid",
                  borderColor: "inherit",
                  boxSizing: "border-box",
                }
              : null),
          };
          c.push(
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                .ListItem.Inline,
              {
                tag: "li",
                style: a,
                key: `fakeThumb-${t}`,
                "data-index": `fakeThumb-${t}`,
              },
              (global.React || guac.react).createElement(
                (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                  .Image,
                {
                  "data-route": "",
                  key: t,
                  style: { maxWidth: "none", width: l, height: i },
                  imageData: o,
                }
              )
            )
          );
        });
        const s = {
          listStyle: "none",
          padding: 0,
          margin: 0,
          textAlign: "left",
          height: i,
          whiteSpace: "nowrap",
        };
        return (global.React || guac.react).createElement(
          (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
          { style: r },
          (global.React || guac.react).createElement(
            (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.List,
            {
              tag: "ul",
              style: s,
              "data-aid": t.d.FAKE_THUMBNAIL_NAV_LIST,
              children: c,
            }
          )
        );
      }
    }
    (r.propTypes = {
      images: (global.PropTypes || guac["prop-types"]).array,
      thumbLength: (global.PropTypes || guac["prop-types"]).number,
      thumbImageDimensions: (global.PropTypes || guac["prop-types"]).object,
      baseStyle: (global.PropTypes || guac["prop-types"]).object,
    }),
      (r.defaultProps = { thumbLength: 9 });
    const n = 37,
      l = 39;
    (e.F = r),
      (e.T = a),
      (e.h = (e) => {
        let { keyCode: t, context: o } = e,
          a = o.state.nextSlideIncremental;
        t === n && (a -= 1),
          t === l && (a += 1),
          o.setState({ nextSlideIncremental: a });
      }),
      (e.m = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : () => {},
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        t
          ? document.addEventListener("keydown", e, !1)
          : document.removeEventListener("keydown", e, !1);
      }),
      (e.s = { height: 68, width: 95 }),
      (e.t = { height: 70, width: 100 });
  }
),
  "undefined" != typeof window && (window.global = window);
//# sourceMappingURL=bs-directionalKeyHandlers-4bfe2f89.js.map
