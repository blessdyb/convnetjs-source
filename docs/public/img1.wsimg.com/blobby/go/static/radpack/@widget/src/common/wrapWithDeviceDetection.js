/* eslint-disable react/no-deprecated */

import React, { Component } from "react";
import PropTypes from "prop-types";
import convertViewDevice from "./convertViewDevice";
import { UX } from "@wsb/guac-widget-core";
import { TABLET, MOBILE } from "./constants/device";

const { MatchMedia } = UX;
const PUBLISH_MODE = "PUBLISH";

export default function wrapWithDeviceDetection(WrappedComponent) {
  return class Wrapper extends Component {
    static get propTypes() {
      return {
        renderMode: PropTypes.string,
        viewDevice: PropTypes.string,
      };
    }

    constructor(props) {
      super(...arguments);
      this.handleMatchMedia = this.handleMatchMedia.bind(this);

      const initialState = {};

      if (props.renderMode !== PUBLISH_MODE) {
        initialState.device = convertViewDevice(props.viewDevice);
      }

      this.state = initialState;
    }

    componentWillReceiveProps(newProps) {
      if (newProps.renderMode !== PUBLISH_MODE) {
        this.setState({
          device: convertViewDevice(newProps.viewDevice),
        });
      }
    }

    handleMatchMedia(data) {
      if (this.state.size !== data.size) {
        this.setState({ size: data.size });
      }
    }

    render() {
      const { size } = this.state;
      let { device } = this.state;

      if (!device) {
        device = size === "xs" ? MOBILE : TABLET;
      }

      return (
        <div>
          <WrappedComponent {...this.props} device={device} size={size} />
          <MatchMedia onChange={this.handleMatchMedia} />
        </div>
      );
    }
  };
}
