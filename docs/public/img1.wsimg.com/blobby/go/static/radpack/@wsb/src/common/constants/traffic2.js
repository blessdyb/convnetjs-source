/* eslint id-length:0 */
import { mapValues } from "lodash";

const click = "click";
export const TRAFFIC_PREFIX = "pandc.vnext";

export default replaceValuesWithLongDottedStrings(TRAFFIC_PREFIX, {
  editor_preview: {
    submit_contact_form: click,
    messaging_fab_open: click,
    messaging_fab_close: click,
    messaging_webApp_appstore: click,
    conversations_learn_more: click,
  },
  shop_widget: {
    click_pagination_back_arrow: click,
    click_pagination_forward_arrow: click,
    click_pagination_number: click,
  },
});

// input format  :: eventMap.category.action = 'label';
// output format :: eventMap.category.action = 'prefix.category.action.label';
function replaceValuesWithLongDottedStrings(prefix, eventMap) {
  return mapValues(eventMap, (categoryValue, categoryKey) => {
    return mapValues(categoryValue, (label, action) => {
      return [prefix, categoryKey, action, label].join(".");
    });
  });
}
