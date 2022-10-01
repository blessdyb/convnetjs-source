define("@widget/GALLERY/c/bs-dataAids-c2caba6d.js", ["exports"], function (l) {
  "use strict";
  function e() {
    return (
      (e = Object.assign
        ? Object.assign.bind()
        : function (l) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var L in n)
                Object.prototype.hasOwnProperty.call(n, L) && (l[L] = n[L]);
            }
            return l;
          }),
      e.apply(this, arguments)
    );
  }
  var n = (global.keyMirror || guac.keymirror)({
    CAROUSEL_BACKGROUND: null,
    CAROUSEL_BLUR_BACKGROUND: null,
    CAROUSEL_CONTENT: null,
    CAROUSEL_IMAGE_CAPTION: null,
    GALLERY_SECTION_TITLE_RENDERED: null,
    GALLERY_CAPTION_RENDERED: null,
    GALLERY_SLIDE_POSITION: null,
    GALLERY_MORE_BUTTON: null,
    LAYOUT_TWO_ZERO_STATE: null,
    LIGHTBOX_CLOSE: null,
    LIGHTBOX_MODAL: null,
    GALLERY_SCROLL_LEFT_ARROW: null,
    GALLERY_SCROLL_RIGHT_ARROW: null,
    THUMBNAIL_NAV_LIST: null,
    FAKE_THUMBNAIL_NAV_LIST: null,
    GALLERY_CAPTION_MORE_BUTTON: null,
  });
  (l._ = e),
    (l.a = (l) => `GALLERY_IMAGE${l}_RENDERED`),
    (l.b = function (l, e, n) {
      return (
        e in l
          ? Object.defineProperty(l, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[e] = n),
        l
      );
    }),
    (l.c = (l) => `GALLERY_IMAGE${l}_CELL_RENDERED`),
    (l.d = n),
    (l.g = (l, e) => {
      let { isImage: n, useImageField: L = !0 } = e;
      return {
        "data-field-id": n
          ? L
            ? "galleryImages.image"
            : "galleryImages"
          : "galleryImages.caption",
        "data-field-route": `/galleryImages/${l}`,
      };
    });
}),
  "undefined" != typeof window && (window.global = window);
//# sourceMappingURL=bs-dataAids-c2caba6d.js.map
