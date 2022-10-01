/* eslint-disable callback-return */

// NOTE: Exported functions within this module expect to be executed within the
// context of the browser.

import { includes } from "lodash";

const URL = "https://www.google.com/recaptcha/api.js";
const RECAPTCHA_SCRIPT_ID = "recaptcha-script";

const initialRecaptchaState = () => ({
  siteKey: null,
  siteKeyRequested: false,
  siteKeyCallbacks: [],
  scriptCallbacks: [],
});

function isScriptLoaded() {
  return typeof window.grecaptcha !== "undefined" && window.grecaptcha.execute;
}

function getExistingScript() {
  return document.querySelector(`#${RECAPTCHA_SCRIPT_ID}`);
}

function addScriptLoadCallback(callback) {
  window.wsb.recaptcha.scriptCallbacks.push(callback);
}

function onScriptLoad() {
  window.grecaptcha.ready(() => {
    const callbacks = window.wsb.recaptcha.scriptCallbacks;
    while (callbacks.length) {
      const callback = callbacks.pop();
      callback();
    }
  });
}

function createScript(siteKey) {
  const script = document.createElement("script");
  script.setAttribute("src", `${URL}?render=${encodeURIComponent(siteKey)}`);
  script.setAttribute("id", RECAPTCHA_SCRIPT_ID);
  script.setAttribute("async", true);
  script.setAttribute("defer", true);
  script.onload = onScriptLoad;
  document.body.appendChild(script);
  return script;
}

function addOnSiteKeyLoadCallback(callback) {
  window.wsb.recaptcha.siteKeyCallbacks.push(callback);
}

function onSiteKeyLoad(xhr) {
  if (xhr.readyState !== 4 || !includes([200, 304], xhr.status)) {
    return;
  }

  const response = JSON.parse(xhr.responseText);
  const { recaptcha } = window.wsb;
  const callbacks = recaptcha.siteKeyCallbacks;

  if (!response.siteKey) {
    return;
  }

  recaptcha.siteKey = response.siteKey;

  while (callbacks.length) {
    const callback = callbacks.pop();
    callback(recaptcha.siteKey);
  }
}

function addRecaptchaToWindow() {
  if (window.wsb && window.wsb.recaptcha) {
    return;
  }

  window.wsb = window.wsb || {};
  window.wsb.recaptcha = initialRecaptchaState();
}

// Testing utility function that lets internal state to be reset.
export function resetState() {
  window.wsb = window.wsb || {};
  window.wsb.recaptcha = initialRecaptchaState();
}

export function loadSiteKey(url, callback) {
  addRecaptchaToWindow();
  const { recaptcha } = window.wsb;

  if (recaptcha.siteKey) {
    callback(recaptcha.siteKey);
    return;
  }

  addOnSiteKeyLoadCallback(callback);
  if (recaptcha.siteKeyRequested) {
    return;
  }

  recaptcha.siteKeyRequested = true;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();
  xhr.onreadystatechange = () => onSiteKeyLoad(xhr);
}

export function loadScript({ siteKey }, onLoad) {
  addRecaptchaToWindow();
  if (isScriptLoaded()) {
    onLoad();
    return;
  }

  addScriptLoadCallback(onLoad);
  if (getExistingScript()) {
    return;
  }

  createScript(siteKey);
}
