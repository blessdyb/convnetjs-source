define(
  "@widget/CONTACT/bs-contact1-contact-form-86ebbd51.js",
  [
    "exports",
    "~/c/bs-_rollupPluginBabelHelpers",
    "@wsb/guac-widget-shared@^1/lib/components/Form",
    "~/c/bs-data-aids",
    "~/c/bs-routes",
  ],
  function (e, t, o, a, r) {
    "use strict";
    class l extends (global.React || guac.react).Component {
      render() {
        const { formTitle: e, category: l, section: c } = this.props,
          s = (global.React || guac.react).createElement(
            (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Heading
              .Minor,
            {
              style: {
                marginBottom: "medium",
                "@xs-only": { textAlign: "center" },
              },
              "data-aid": a.D.CONTACT_FORM_TITLE_REND,
              "data-route": r.F.FORM_TITLE,
              "data-field-route": r.a,
              children: e,
            }
          );
        return (global.React || guac.react).createElement(
          (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
          { category: l, section: c },
          (global.React || guac.react).createElement(
            o.default,
            t.a(
              {
                title: s,
                formFieldVariationOptions: {
                  EMAIL_OPT_IN: { styleOverrides: { justifyContent: "left" } },
                },
                dataAidPrefix: "CONTACT",
                fullWidth: !0,
              },
              this.props
            )
          )
        );
      }
    }
    (l.propTypes = {
      blankInfo: (global.PropTypes || guac["prop-types"]).bool,
      category: (global.PropTypes || guac["prop-types"]).string,
      formTitle: (global.PropTypes || guac["prop-types"]).string,
      section: (global.PropTypes || guac["prop-types"]).string,
      ...o.default.propTypes,
    }),
      (e.default = l),
      Object.defineProperty(e, "__esModule", { value: !0 });
  }
),
  "undefined" != typeof window && (window.global = window);
//# sourceMappingURL=bs-contact1-contact-form-86ebbd51.js.map
