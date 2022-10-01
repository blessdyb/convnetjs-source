export function selfOrParentHasAttribute(elm, attr, value) {
  let target = elm;
  while (target) {
    const val = target.getAttribute && target.getAttribute(attr);
    if (val && (typeof value === "undefined" || val === value)) {
      return true;
    }
    target = target.parentNode;
  }
  return false;
}

export function selfOrParentHasClass(elm, className) {
  let target = elm;
  while (target) {
    if (target.classList && target.classList.contains(className)) {
      return true;
    }
    target = target.parentNode;
  }
  return false;
}

export function selfOrParentHasId(elm, id) {
  return selfOrParentHasAttribute(elm, "id", id);
}

export function selfOrParentGetAttribute(elm, attr) {
  let target = elm;
  while (target) {
    const val = target.getAttribute && target.getAttribute(attr);
    if (val) {
      return val;
    }
    target = target.parentNode;
  }
}
