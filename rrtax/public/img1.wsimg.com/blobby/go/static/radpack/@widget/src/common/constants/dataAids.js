/* eslint-disable id-length */
import keyMirror from "keymirror";

var dataAids = keyMirror({
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

const getGalleryDataAid = (num) => {
  return `GALLERY_IMAGE${num}_RENDERED`;
};

const getGalleryCellDataAid = (num) => {
  return `GALLERY_IMAGE${num}_CELL_RENDERED`;
};

const getGalleryDataRouteProps = (num, { isImage, useImageField = true }) => {
  const imageFieldId = useImageField ? "galleryImages.image" : "galleryImages";
  return {
    "data-field-id": isImage ? imageFieldId : "galleryImages.caption",
    "data-field-route": `/galleryImages/${num}`,
  };
};

export {
  dataAids,
  getGalleryDataAid,
  getGalleryCellDataAid,
  getGalleryDataRouteProps,
};
