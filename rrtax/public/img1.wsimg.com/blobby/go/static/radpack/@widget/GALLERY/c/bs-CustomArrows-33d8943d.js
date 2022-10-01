define(
  "@widget/GALLERY/c/bs-CustomArrows-33d8943d.js",
  ["exports", "~/c/bs-dataAids"],
  function (e, t) {
    "use strict";
    class o extends (global.React || guac.react).Component {
      componentDidUpdate(e) {
        const { nextSlide: t, prevSlide: o, triggerNextSlide: r } = this.props;
        r > e.triggerNextSlide && t(), r < e.triggerNextSlide && o();
      }
      render() {
        const {
            prevSlide: e,
            nextSlide: o,
            visible: r,
            overrideArrowStyle: l = {},
          } = this.props,
          a = {
            opacity: r ? 1 : 0,
            transition: "opacity 0.5s",
            ":hover": { opacity: 1 },
          };
        return (global.React || guac.react).createElement(
          (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
          { style: a },
          (global.React || guac.react).createElement(
            (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Button
              .Previous,
            { "data-aid": t.d.GALLERY_SCROLL_LEFT_ARROW, onClick: e, style: l }
          ),
          (global.React || guac.react).createElement(
            (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Button
              .Next,
            { "data-aid": t.d.GALLERY_SCROLL_RIGHT_ARROW, onClick: o, style: l }
          )
        );
      }
    }
    (o.propTypes = {
      prevSlide: (global.PropTypes || guac["prop-types"]).func,
      nextSlide: (global.PropTypes || guac["prop-types"]).func,
      visible: (global.PropTypes || guac["prop-types"]).bool,
      overrideArrowStyle: (global.PropTypes || guac["prop-types"]).object,
      triggerNextSlide: (global.PropTypes || guac["prop-types"]).number,
    }),
      (e.C = o);
  }
),
  "undefined" != typeof window && (window.global = window);
//# sourceMappingURL=bs-CustomArrows-33d8943d.js.map
