define(
  "@widget/LAYOUT/bs-layout27-Theme-publish-Theme-426a6752.js",
  [
    "exports",
    "~/c/bs-_rollupPluginBabelHelpers",
    "~/c/bs-index3",
    "~/c/bs-minimalSocialIconPack",
    "~/c/bs-humanisticFilled",
    "~/c/bs-loaders",
    "~/c/bs-index",
    "~/c/bs-overlayTypes",
  ],
  function (e, t, r, o, a, n, i, l) {
    "use strict";
    const { colorPackCategories: s, buttons: g } = (
        global.Core || guac["@wsb/guac-widget-core"]
      ).constants,
      {
        LIGHT: d,
        LIGHT_ALT: u,
        LIGHT_COLORFUL: c,
        DARK: m,
        DARK_ALT: p,
        DARK_COLORFUL: h,
        COLORFUL: y,
      } = (global.Core || guac["@wsb/guac-widget-core"]).constants.paintJobs,
      b = { [l.F]: "none", [l.b]: "none", [l.I]: "category-solid" },
      f = { defaultHeaderTreatment: l.I, hasLegacy: !1, imageTreatments: b };
    var C = {
      id: "layout27",
      name: "bisque",
      packs: { color: "#CB4154", font: "playfair-display" },
      logo: { font: "primary" },
      packCategories: { color: s.NEUTRAL },
      headerProperties: {
        alignmentOption: "center",
        defaultLogoAlign: "center",
      },
      headerTreatmentsConfig: f,
      paintJobs: [d, u, c, y, h, p, m],
      defaultPaintJob: d,
      buttons: {
        primary: {
          fill: g.fills.SOLID,
          shape: g.shapes.SQUARE,
          decoration: g.decorations.NONE,
          shadow: g.shadows.NONE,
          color: g.colors.PRIMARY,
        },
        secondary: {
          fill: g.fills.SOLID,
          decoration: g.decorations.NONE,
          shadow: g.shadows.NONE,
          color: g.colors.PRIMARY,
        },
        ...i.C,
      },
    };
    const { buttons: x } = (global.Core || guac["@wsb/guac-widget-core"])
        .constants,
      S = [
        "about1",
        "about3",
        "about4",
        "about10",
        "content2",
        "content3",
        "content7",
      ],
      w = ["rss1", "subscribe3"],
      H = ["about5", "payment3", "contact4", "fundraising1"],
      L = { marginBottom: "30px !important" },
      B = {
        style: {
          font: "primary",
          color: "highContrast",
          fontSize: "xlarge",
          fontWeight: "normal",
          letterSpacing: "0.031em",
        },
      };
    class T extends r.D {
      static get displayName() {
        return "Theme27";
      }
      static getMutatorDefaultProps(e, t) {
        const r = super.getMutatorDefaultProps(e, t);
        return "HEADER" === e
          ? {
              ...r,
              useWelcomeLine: !0,
              phoneOnSecondaryPage: !0,
              useSocialLinks: !0,
              useCropBackground: !0,
              hasLogoAlign: !0,
              headerTreatmentsConfig: {
                headerTreatments: [l.F, l.b, l.I],
                defaultHeaderTreatment: l.I,
                imageTreatments: {
                  [l.F]: "none",
                  [l.b]: "none",
                  [l.I]: "category-solid",
                },
              },
              renderParallaxToggle: !1,
            }
          : r;
      }
      static getWidgetDefaultProps(e, t) {
        return {
          ...super.getWidgetDefaultProps(e, t),
          ...("HEADER" === e && { logoAlign: "center" }),
        };
      }
      constructor() {
        super(),
          (this.mappedValues = {
            ...this.mappedValues,
            backgroundColorPrimaryLight() {
              const [e] = r.g(this, ["primary"]);
              return e.setLightness(96).setAlpha(100);
            },
            backgroundColorSectionDefault:
              this.mappedValues.backgroundColorSection,
            backgroundColorSection() {
              const { category: e, section: t } = this.base;
              return "neutral" === e && "alt" === t
                ? this.mappedValues.backgroundColorPrimaryLight.call(this)
                : this.mappedValues.backgroundColorSectionDefault.call(this);
            },
            backgroundColorLightTransp() {
              return this.mappedValues.backgroundColorPrimaryLight
                .call(this)
                .setAlpha(80);
            },
            backgroundColorSectionTransp() {
              return this.mappedValues.backgroundColorSection
                .call(this)
                .setAlpha(80);
            },
            backgroundColorSearchMobilePrimary() {
              const [e] = r.g(this, ["primary"]);
              return e.darken(1).setAlpha(10);
            },
            colorPrimaryDefault: this.mappedValues.colorPrimary,
            colorPrimary() {
              const { category: e } = this.base;
              return "primary" === e
                ? this.mappedValues.colorHighContrast.call(this)
                : this.mappedValues.colorPrimaryDefault.call(this);
            },
            themeFontMultipliers: { xxlarge: 1.05 },
            typographyOverrides: {
              LogoAlpha: { ...B },
              HeadingAlpha: {
                style: {
                  font: "primary",
                  color: "highContrast",
                  fontSize: "xxlarge",
                  fontWeight: "normal",
                  letterSpacing: "0.023em",
                },
              },
              HeadingBeta: {
                style: {
                  font: "alternate",
                  color: "highlight",
                  fontSize: "medium",
                  fontWeight: "normal",
                  letterSpacing: "0.125em",
                  textTransform: "uppercase",
                },
              },
              HeadingGamma: { ...B },
              HeadingDelta: {
                style: {
                  font: "alternate",
                  color: "highContrast",
                  fontSize: "large",
                  fontWeight: "normal",
                  letterSpacing: "0.045em",
                },
              },
              HeadingEpsilon: {
                style: {
                  font: "primary",
                  color: "highlight",
                  fontSize: "xlarge",
                  fontWeight: "normal",
                  letterSpacing: "0.031em",
                },
              },
              BodyGamma: {
                style: {
                  font: "alternate",
                  color: "highlight",
                  fontSize: "large",
                  fontWeight: "normal",
                  letterSpacing: "normal",
                },
              },
              DetailsGamma: {
                style: {
                  font: "alternate",
                  color: "lowContrast",
                  fontSize: "xsmall",
                  fontWeight: "normal",
                  letterSpacing: "0.083em",
                  textTransform: "uppercase",
                },
              },
              NavAlpha: {
                style: {
                  font: "alternate",
                  color: "highContrast",
                  fontSize: "small",
                  fontWeight: "normal",
                  letterSpacing: "0.214em",
                  textTransform: "uppercase",
                  ":hover": { color: "highlight" },
                  ":active": { color: "highContrast" },
                },
                active: {
                  style: {
                    color: "highContrast",
                    fontWeight: "normal",
                    borderBottom: "1px solid",
                    borderColor: "primary",
                    paddingBottom: "xxsmall",
                    ":hover": { color: "highlight" },
                  },
                },
              },
              SubNavAlpha: {
                style: {
                  font: "alternate",
                  color: "section",
                  fontSize: "small",
                  fontWeight: "normal",
                  letterSpacing: "normal",
                  textTransform: "none",
                  ":hover": { color: "highlight" },
                  ":active": { color: "highlight" },
                },
                active: { style: { fontWeight: "normal" } },
              },
              NavBeta: {
                style: {
                  font: "alternate",
                  color: "highContrast",
                  fontSize: "large",
                  fontWeight: "normal",
                  letterSpacing: "0.136em",
                  textTransform: "uppercase",
                  ":hover": { color: "highlight" },
                  ":active": { color: "highlight" },
                },
              },
              SubNavBeta: {
                style: {
                  font: "alternate",
                  color: "section",
                  fontSize: "medium",
                  fontWeight: "normal",
                  letterSpacing: "normal",
                  textTransform: "none",
                  ":hover": { color: "highlight" },
                  ":active": { color: "highlight" },
                },
              },
              ButtonAlpha: (e) => {
                const { size: t = "default" } = e;
                return {
                  style: {
                    font: "alternate",
                    fontWeight: "bold",
                    letterSpacing: "0.214em",
                    textTransform: "uppercase",
                    ...{
                      small: { fontSize: "xsmall" },
                      default: { fontSize: "small" },
                      large: { fontSize: "medium" },
                    }[t],
                  },
                };
              },
            },
          });
      }
      Widget(e) {
        const { widgetPreset: t } = this.base;
        return -1 !== H.indexOf(t)
          ? super.Widget(
              this.merge(e, {
                style: {
                  backgroundColor: "neutral",
                  "> div": {
                    position: "relative",
                    overflow: "hidden",
                    margin: "auto",
                    paddingHorizontal: "medium",
                    "@sm": { maxWidth: "smContainer" },
                    "@md": { maxWidth: "mdContainer" },
                    "@lg": { maxWidth: "lgContainer" },
                    "@xl": { maxWidth: "xlContainer" },
                  },
                },
              })
            )
          : super.Widget(e);
      }
      Section(e) {
        let { children: t, skipDivider: r, ...o } = e;
        const a =
          -1 !== S.indexOf(this.base.widgetPreset)
            ? { backgroundColor: "neutral" }
            : {};
        return (
          "FOOTER" !== this.base.widgetType ||
            r ||
            (t = (global.React || guac.react).createElement(
              (global.React || guac.react).Fragment,
              null,
              (global.React || guac.react).createElement(
                (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                  .Divider,
                { style: { paddingVertical: "medium" } }
              ),
              t
            )),
          super.Section(
            this.merge(o, {
              children: t,
              style: {
                "@xs-only": { paddingVertical: "large" },
                paddingVertical: "xlarge",
                ...a,
              },
            })
          )
        );
      }
      SectionSplit(e) {
        const { category: t } = this.base;
        return super.Section(
          this.merge(e, {
            style: {
              backgroundColor: "neutral" === t ? "primaryLight" : "section",
              paddingHorizontal: "medium",
              paddingVertical: "xxlarge",
              maxWidth: "100% !important",
              "@md": { paddingHorizontal: "xlarge" },
            },
          })
        );
      }
      Hero(e) {
        return super.Hero(
          this.merge(
            { style: { textAlign: "center", "@md": { maxWidth: "100%" } } },
            e
          )
        );
      }
      HeroLeft(e) {
        return this.Hero(
          this.merge(
            {
              style: {
                "@sm": {
                  borderColor: "rgba(255, 255, 255, 0.5)",
                  borderLeftStyle: "solid",
                  borderLeftWidth: "1px",
                  paddingLeft: "large",
                },
                border: "none",
                paddingLeft: "none",
              },
            },
            e
          )
        );
      }
      HeroRight(e) {
        return this.Hero(
          this.merge(
            {
              style: {
                "@sm": {
                  borderColor: "rgba(255, 255, 255, 0.5)",
                  borderRightStyle: "solid",
                  borderRightWidth: "1px",
                  paddingRight: "large",
                },
                border: "none",
                paddingRight: 0,
              },
            },
            e
          )
        );
      }
      HeroText(e) {
        return super.SubTagline(
          this.merge(e, {
            typography: "BodyAlpha",
            featured: !1,
            style: {
              display: "inline-block",
              width: "100%",
              maxWidth: "750px",
              marginHorizontal: "auto",
              marginBottom: "small",
            },
          })
        );
      }
      Divider(e) {
        const t = "FOOTER" === this.base.widgetType ? { display: "none" } : {};
        return super.Divider(this.merge(e, { style: t }));
      }
      HR(e) {
        const t =
          "FOOTER" === this.base.widgetType
            ? { borderColor: "transparent", marginBottom: 0 }
            : {};
        return super.HR(this.merge(e, { style: t }));
      }
      Table(e) {
        return super.Table(
          this.merge({ style: { borderRadius: "medium" } }, e)
        );
      }
      Input(e) {
        return super.Input(
          this.merge(
            {
              typography: "BodyAlpha",
              style: {
                paddingVertical: "small",
                paddingHorizontal: "xsmall",
                borderColor: "input",
                borderRadius: "none",
                borderStyle: "solid",
                borderWidth: "xsmall",
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
              },
            },
            e
          )
        );
      }
      InputTextArea(e) {
        return super.InputTextArea(
          this.merge(
            {
              style: {
                backgroundColor: "transparent",
                borderTopWidth: 1,
                borderLeftWidth: 1,
                borderRightWidth: 1,
                borderRadius: 3,
                WebkitAppearance: "none !important",
              },
            },
            e
          )
        );
      }
      InputFloatLabel(e) {
        return super.InputFloatLabel(
          this.merge({ style: { backgroundColor: "transparent" } }, e)
        );
      }
      InputFloatLabelLabel(e) {
        return super.InputFloatLabelLabel(
          this.merge({ typography: "BodyAlpha", style: { left: "xsmall" } }, e)
        );
      }
      InputFloatLabelInput(e) {
        return super.InputFloatLabelInput(
          this.merge({ style: { paddingBottom: "xsmall" } }, e)
        );
      }
      InputSelect(e) {
        return super.InputSelect(
          this.merge(
            {
              typography: "BodyAlpha",
              style: {
                borderWidth: "xsmall",
                borderRadius: "medium",
                borderStyle: "solid",
              },
            },
            e
          )
        );
      }
      InputSelectElement(e) {
        return super.InputSelectElement(
          this.merge(
            { style: { paddingVertical: "small", paddingHorizontal: "small" } },
            e
          )
        );
      }
      Button(e) {
        const { renderMode: t } = this.base,
          {
            fill: r = this.getButtonDefaults().fill,
            shadow: o = this.getButtonDefaults().shadow,
          } = e,
          a =
            t &&
            t ===
              (global.Core || guac["@wsb/guac-widget-core"]).constants
                .renderModes.EDIT,
          n = r !== x.fills.OPEN ? { style: { transition: "all 0.3s" } } : {},
          i =
            r === x.fills.SOLID && o === x.shadows.NONE
              ? {
                  style: {
                    ...(!a && {
                      ":hover": {
                        "@md": {
                          boxShadow: "0 10px 10px -10px rgba(0, 0, 0, 0.5)",
                        },
                      },
                    }),
                  },
                }
              : {};
        return super.Button(this.merge(i, n, e));
      }
      Phone(e) {
        return super.Phone(
          this.merge(e, {
            typography: "BodyGamma",
            featured: !1,
            style: { textAlign: "center" },
          })
        );
      }
      SupTagline(e) {
        return super.SupTagline(
          this.merge(
            {
              typography: "HeadingBeta",
              featured: !1,
              style: {
                width: "100%",
                textAlign: "inherit",
                marginHorizontal: "auto",
                marginBottom: "small",
                position: "relative",
              },
            },
            e
          )
        );
      }
      Heading(e) {
        const { tag: t, level: o } = e;
        return super.Heading(
          this.merge(
            { typography: { 2: "HeadingAlpha" }[r.l({ tag: t, level: o })] },
            e
          )
        );
      }
      Tagline(e) {
        return super.Tagline(
          this.merge(e, {
            typography: "HeadingAlpha",
            style: {
              marginHorizontal: "auto",
              width: "100%",
              marginBottom: "small",
              wordWrap: "break-word",
              overflowWrap: "break-word",
              position: "relative",
            },
          })
        );
      }
      HeroCenterHeading(e) {
        return this.HeroHeading(
          this.merge(
            {
              style: {
                borderBottomStyle: "solid",
                borderBottomWidth: "1px",
                borderColor: "rgba(255, 255, 255, 0.5)",
                paddingBottom: "small",
              },
            },
            e
          )
        );
      }
      LogoHeading(e) {
        const { style: t = {} } = e,
          r = "logo" === t.font;
        return super.LogoHeading(
          this.merge(
            e,
            {
              style: {
                textAlign: "center",
                paddingVertical: "xsmall",
                paddingHorizontal: "small",
                lineHeight: 1,
                width: "fit-content",
                margin: "0 auto",
                "@md": { overflowWrap: "break-word" },
                ...(r
                  ? {}
                  : {
                      borderWidth: "xsmall",
                      borderStyle: "solid",
                      borderColor: "highContrast",
                    }),
              },
            },
            e
          )
        );
      }
      ContentBasic(e) {
        return "content7" === this.base.widgetPreset
          ? super.ContentBasic(this.merge(e, { category: "neutral" }))
          : super.ContentBasic(e);
      }
      SectionHeading(e) {
        const { category: t } = e,
          { widgetPreset: r } = this.base;
        return super.SectionHeading(
          this.merge(e, {
            category: -1 !== S.indexOf(r) ? "neutral" : t,
            style: {
              marginBottom: "medium",
              textAlign: "left",
              "@sm": { marginBottom: "large" },
            },
          })
        );
      }
      HeadingMajor(e) {
        return super.HeadingMajor(
          this.merge({ typography: "HeadingGamma" }, e)
        );
      }
      DisplayHeading(e) {
        return super.DisplayHeading(
          this.merge({ typography: "HeadingEpsilon" }, e)
        );
      }
      Intro(e) {
        return super.Intro(
          this.merge(
            {
              style: {
                marginBottom: "medium",
                "@sm": { marginBottom: "large" },
              },
            },
            e
          )
        );
      }
      Icon(e) {
        let { icon: t } = e;
        return (
          (t = o.m[t] || t),
          super.Icon(this.merge(e, { icon: t, iconPack: { ...a.f, ...o.s } }))
        );
      }
      Loader(e) {
        return n.a.apply(this, [e]);
      }
      UtilitiesMenuIcon(e) {
        return super.UtilitiesMenuIcon(
          this.merge(
            {
              typography: !1,
              style: {
                "@xs": { color: "primary" },
                "@md": {
                  display: "initial",
                  color: "primary",
                  ":hover": { color: "highContrast" },
                },
              },
            },
            e
          )
        );
      }
      UtilitiesMenuLink(e) {
        return super.UtilitiesMenuLink(
          this.merge({ typography: !1, style: { color: "primary" } }, e)
        );
      }
      FormSearch(e) {
        return super.FormSearch(
          this.merge(
            {
              style: {
                "@md": {
                  width: "100%",
                  marginLeft: "7px",
                  marginRight: "medium",
                },
              },
            },
            e
          )
        );
      }
      InputSearch(e) {
        return super.InputSearch(
          this.merge(
            {
              style: {
                borderStyle: "solid",
                borderColor: "primary",
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderBottomWidth: "1px !important",
                borderRadius: 0,
                backgroundColor: "white",
                paddingHorizontal: "medium",
                "::placeholder": { color: "primary" },
              },
            },
            e
          )
        );
      }
      CloseIcon(e) {
        return super.CloseIcon(
          this.merge(e, {
            style: {
              color: "primary",
              ":hover": { color: "highContrast" },
              "@md": { color: "primary", ":hover": { color: "highContrast" } },
            },
          })
        );
      }
      PromoBanner(e) {
        const { category: t } = e;
        return super.PromoBanner(
          this.merge(e, {
            categoryOverride:
              { primary: "accent", accent: "primary", neutral: "primary" }[t] ||
              t,
          })
        );
      }
      PromoBannerText(e) {
        return super.Text(
          this.merge(e, {
            typography: "HeadingBeta",
            style: {
              textAlign: "center",
              paddingHorizontal: "xlarge",
              "@xs-only": { paddingHorizontal: 0 },
            },
          })
        );
      }
      NavLinkActive(e) {
        const t =
          this.parseSizedUnit(this.mapPropValue("padding", "-xxsmall"))[0] - 1;
        return this.NavLink(
          this.merge({ active: !0, style: { marginBottom: t } }, e)
        );
      }
      NavMoreMenuLinkActive(e) {
        return super.NavMoreMenuLinkActive(
          this.merge({ style: { marginBottom: "medium" } }, e)
        );
      }
      Dropdown(e) {
        return super.Dropdown(
          this.merge(e, {
            style: {
              borderRadius: 0,
              boxShadow: "0 3px 6px 3px rgba(0, 0, 0, 0.16)",
            },
          })
        );
      }
      NavFooterLink(e) {
        return super.NavFooterLink(this.merge({ typography: "LinkAlpha" }, e));
      }
      NavigationDrawerList(e) {
        return super.List(this.merge({ style: { paddingBottom: 0 } }, e));
      }
      NavigationDrawerListItem(e) {
        return super.NavigationDrawerListItem(
          this.merge({ style: { borderBottomWidth: 0 } }, e)
        );
      }
      NavigationDrawerContainer(e) {
        return super.Container(
          this.merge({ style: { paddingHorizontal: "large" } }, e)
        );
      }
      NavigationDrawerCloseIcon(e) {
        return super.CloseIcon(this.merge({ style: { color: "black" } }, e));
      }
      NavigationDrawerIcon(e) {
        const t = { top: "unset", transform: "unset" };
        return super.IconSearch(
          this.merge(
            {
              style: {
                ...("magGlass" === e.icon
                  ? { color: "primary" }
                  : { "@xs-only": { ...t }, "@sm-only": { ...t } }),
              },
            },
            e
          )
        );
      }
      IconHamburger(e) {
        return super.IconHamburger(
          this.merge({ style: { "@xs": { color: "primary" } } }, e)
        );
      }
      CardBanner(e) {
        const { category: r } = this.base,
          { heading: o, headingProps: a = {}, action: n } = e,
          i = {
            container: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column !important",
              "@md": { maxWidth: "500px", paddingVertical: "large" },
              "> div:nth-child(2)": { paddingLeft: "0 !important" },
            },
            headingStyles: {
              marginBottom: n ? "medium" : "0px",
              textAlign: "center",
            },
          };
        return super.Container(
          this.merge(e, {
            tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
              .Container,
            group: "Card",
            groupType: "Banner",
            children: (global.React || guac.react).createElement(
              (global.React || guac.react).Fragment,
              null,
              o &&
                (global.React || guac.react).createElement(
                  (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                    .Heading.Major,
                  t.a({ group: "Group", typography: "HeadingGamma" }, a, {
                    style: i.headingStyles,
                    category: r,
                    children: o,
                  })
                ),
              n &&
                (global.React || guac.react).createElement(
                  (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                    .Block,
                  { category: r, children: n }
                )
            ),
            style: i.container,
          })
        );
      }
      CardBannerBlock(e) {
        const { widgetPreset: t } = this.base;
        return super.CardBannerBlock(
          this.merge(e, {
            style: {
              maxWidth: ["content5", "ordering1"].includes(t)
                ? "100% !important"
                : "inherit",
            },
          })
        );
      }
      SectionBanner(e) {
        const { section: t } = e,
          { widgetPreset: r } = this.base,
          o = this.base.category,
          a = "default" === t ? "alt" : "default";
        return super.SectionBanner(
          this.merge(e, {
            ...(-1 === w.indexOf(r) ? { category: o } : {}),
            ...("social1" === r ? { section: "neutral" === o ? a : t } : {}),
          })
        );
      }
      Content(e) {
        const { widgetPreset: t } = this.base;
        if ("about4" === t) {
          const { section: t } = e,
            r = this.base.category;
          return super.Content(
            this.merge(e, {
              section: "neutral" === r && "default" === t ? "alt" : t,
              category: r,
              style: { backgroundColor: "section" },
            })
          );
        }
        return super.Content(e);
      }
      ContentCard(e) {
        const { widgetPreset: t, category: r } = this.base,
          o = (e.text && e.text.children) || e.heading;
        return super.ContentCard(
          this.merge(e, {
            style: {
              backgroundColor: o
                ? "neutral" === r
                  ? "primaryLight"
                  : "section"
                : "transparent",
              paddingBottom: "large",
              paddingTop:
                ["about1", "about3", "about7", "about8", "about10"].includes(
                  t
                ) &&
                (e.image || e.video)
                  ? 0
                  : "large",
            },
          })
        );
      }
      ContentCardWrapperImage(e) {
        return super.ContentCardWrapperImage(this.merge(e, { style: L }));
      }
      ContentCardImageThumbnail(e) {
        return super.ContentCardImageThumbnail(
          this.merge(
            { style: { height: "100%", width: "100%", borderRadius: "none" } },
            e
          )
        );
      }
      ContentCardHeading(e) {
        return super.ContentHeading(
          this.merge(e, {
            style: { width: "100%", paddingHorizontal: "large" },
          })
        );
      }
      ContentCardText(e) {
        return super.ContentCardText(
          this.merge(e, { style: { paddingHorizontal: "large" } })
        );
      }
      ContentCardButton(e) {
        return super.ContentCardButton(
          this.merge(e, {
            style: {
              width: "auto",
              marginHorizontal: "large",
              alignSelf: "auto",
            },
          })
        );
      }
      ContentText(e) {
        return super.ContentText(
          this.merge(
            {
              style: {
                "@xs-only": {
                  "> p > ul": { marginHorizontal: 0, paddingLeft: "medium" },
                },
              },
            },
            e
          )
        );
      }
      Image(e) {
        var t;
        const { widgetPreset: o } = this.base;
        let a = {};
        (null === (t = e.imageData) || void 0 === t
          ? void 0
          : t.imageDimension) === r.C && (a = { padding: "small" });
        const n = {
            height: "auto",
            "@md": { width: i.A },
            "@lg": { width: "100%" },
            ...a,
          },
          l = {
            about1: n,
            about10: n,
            content2: { ...a },
            content9: { ...a },
            about2: { ...a },
            about3: { ...a },
            about7: { ...a },
            about8: { ...a },
          },
          s = l[o] ? l[o] : {};
        return super.Image(
          this.merge(e, {
            style: { borderRadius: "0px !important", ...s },
            mobileGutterWidth: 24,
          })
        );
      }
      DividerHR(e) {
        return super.HR(this.merge({ style: { borderColor: "! #999" } }, e));
      }
      MediaObjectBackground(e) {
        return super.MediaObjectBackground(
          this.merge({ style: { borderRadius: "0" } }, e)
        );
      }
      FooterText(e) {
        return super.FooterText(this.merge({ typography: "DetailsGamma" }, e));
      }
      FooterDetails(e) {
        return super.FooterDetails(
          this.merge({ typography: "DetailsGamma" }, e)
        );
      }
    }
    t._(T, "config", C),
      t._(
        T,
        "excludedProps",
        (global._ || guac.lodash).without(r.D.excludedProps, "welcomeLine")
      ),
      (e.contentCardMediaStyles = L),
      (e.default = T),
      Object.defineProperty(e, "__esModule", { value: !0 });
  }
),
  "undefined" != typeof window && (window.global = window);
//# sourceMappingURL=bs-layout27-Theme-publish-Theme-426a6752.js.map
