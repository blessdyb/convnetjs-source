define(
  "@widget/GALLERY/c/bs-wrapWithDeviceDetection-795d2967.js",
  ["exports", "~/c/bs-dataAids"],
  function (e, t) {
    "use strict";
    const i = "tablet",
      a = "mobile",
      s = /mobile/i;
    function c(e) {
      return s.test(e) ? a : i;
    }
    const { MatchMedia: n } = (global.Core || guac["@wsb/guac-widget-core"]).UX,
      o = "PUBLISH";
    (e.M = a),
      (e.T = i),
      (e.w = function (e) {
        return class extends (global.React || guac.react).Component {
          static get propTypes() {
            return {
              renderMode: (global.PropTypes || guac["prop-types"]).string,
              viewDevice: (global.PropTypes || guac["prop-types"]).string,
            };
          }
          constructor(e) {
            super(...arguments),
              (this.handleMatchMedia = this.handleMatchMedia.bind(this));
            const t = {};
            e.renderMode !== o && (t.device = c(e.viewDevice)),
              (this.state = t);
          }
          componentWillReceiveProps(e) {
            e.renderMode !== o && this.setState({ device: c(e.viewDevice) });
          }
          handleMatchMedia(e) {
            this.state.size !== e.size && this.setState({ size: e.size });
          }
          render() {
            const { size: s } = this.state;
            let { device: c } = this.state;
            return (
              c || (c = "xs" === s ? a : i),
              (global.React || guac.react).createElement(
                "div",
                null,
                (global.React || guac.react).createElement(
                  e,
                  t._({}, this.props, { device: c, size: s })
                ),
                (global.React || guac.react).createElement(n, {
                  onChange: this.handleMatchMedia,
                })
              )
            );
          }
        };
      });
  }
),
  "undefined" != typeof window && (window.global = window);
//# sourceMappingURL=bs-wrapWithDeviceDetection-795d2967.js.map
