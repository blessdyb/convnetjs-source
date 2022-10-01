import React, { Component } from "react";
import { UX } from "@wsb/guac-widget-core";

class Badge extends Component {
  render() {
    return <UX.Style>{".grecaptcha-badge { visibility: hidden; }"}</UX.Style>;
  }
}

export default Badge;
