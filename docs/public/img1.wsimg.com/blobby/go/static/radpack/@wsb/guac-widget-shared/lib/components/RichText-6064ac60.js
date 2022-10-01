define(
  "@wsb/guac-widget-shared/lib/components/RichText-6064ac60.js",
  [
    "exports",
    "~/c/_commonjsHelpers",
    "~/c/_react_commonjs-external",
    "~/c/_react-dom_commonjs-external",
    "~/c/index",
  ],
  function (t, e, r, n, i) {
    "use strict";
    var o = e.c(function (t, r) {
        e.a,
          (t.exports = (function () {
            var t = Array.prototype.slice;
            function e(t, e) {
              e && (t.prototype = Object.create(e.prototype)),
                (t.prototype.constructor = t);
            }
            function r(t) {
              return a(t) ? t : $(t);
            }
            function n(t) {
              return u(t) ? t : G(t);
            }
            function i(t) {
              return s(t) ? t : V(t);
            }
            function o(t) {
              return a(t) && !c(t) ? t : X(t);
            }
            function a(t) {
              return !(!t || !t[f]);
            }
            function u(t) {
              return !(!t || !t[p]);
            }
            function s(t) {
              return !(!t || !t[h]);
            }
            function c(t) {
              return u(t) || s(t);
            }
            function l(t) {
              return !(!t || !t[d]);
            }
            e(n, r),
              e(i, r),
              e(o, r),
              (r.isIterable = a),
              (r.isKeyed = u),
              (r.isIndexed = s),
              (r.isAssociative = c),
              (r.isOrdered = l),
              (r.Keyed = n),
              (r.Indexed = i),
              (r.Set = o);
            var f = "@@__IMMUTABLE_ITERABLE__@@",
              p = "@@__IMMUTABLE_KEYED__@@",
              h = "@@__IMMUTABLE_INDEXED__@@",
              d = "@@__IMMUTABLE_ORDERED__@@",
              g = "delete",
              y = 5,
              v = 1 << y,
              m = v - 1,
              b = {},
              _ = { value: !1 },
              w = { value: !1 };
            function S(t) {
              return (t.value = !1), t;
            }
            function O(t) {
              t && (t.value = !0);
            }
            function k() {}
            function E(t, e) {
              e = e || 0;
              for (
                var r = Math.max(0, t.length - e), n = new Array(r), i = 0;
                i < r;
                i++
              )
                n[i] = t[i + e];
              return n;
            }
            function C(t) {
              return void 0 === t.size && (t.size = t.__iterate(D)), t.size;
            }
            function x(t, e) {
              if ("number" != typeof e) {
                var r = e >>> 0;
                if ("" + r !== e || 4294967295 === r) return NaN;
                e = r;
              }
              return e < 0 ? C(t) + e : e;
            }
            function D() {
              return !0;
            }
            function T(t, e, r) {
              return (
                (0 === t || (void 0 !== r && t <= -r)) &&
                (void 0 === e || (void 0 !== r && e >= r))
              );
            }
            function M(t, e) {
              return K(t, e, 0);
            }
            function I(t, e) {
              return K(t, e, e);
            }
            function K(t, e, r) {
              return void 0 === t
                ? r
                : t < 0
                ? Math.max(0, e + t)
                : void 0 === e
                ? t
                : Math.min(e, t);
            }
            var A = 0,
              L = 1,
              B = 2,
              P = "function" == typeof Symbol && Symbol.iterator,
              j = "@@iterator",
              R = P || j;
            function N(t) {
              this.next = t;
            }
            function F(t, e, r, n) {
              var i = 0 === t ? e : 1 === t ? r : [e, r];
              return n ? (n.value = i) : (n = { value: i, done: !1 }), n;
            }
            function z() {
              return { value: void 0, done: !0 };
            }
            function U(t) {
              return !!W(t);
            }
            function H(t) {
              return t && "function" == typeof t.next;
            }
            function q(t) {
              var e = W(t);
              return e && e.call(t);
            }
            function W(t) {
              var e = t && ((P && t[P]) || t[j]);
              if ("function" == typeof e) return e;
            }
            function Y(t) {
              return t && "number" == typeof t.length;
            }
            function $(t) {
              return null == t ? at() : a(t) ? t.toSeq() : ct(t);
            }
            function G(t) {
              return null == t
                ? at().toKeyedSeq()
                : a(t)
                ? u(t)
                  ? t.toSeq()
                  : t.fromEntrySeq()
                : ut(t);
            }
            function V(t) {
              return null == t
                ? at()
                : a(t)
                ? u(t)
                  ? t.entrySeq()
                  : t.toIndexedSeq()
                : st(t);
            }
            function X(t) {
              return (
                null == t ? at() : a(t) ? (u(t) ? t.entrySeq() : t) : st(t)
              ).toSetSeq();
            }
            (N.prototype.toString = function () {
              return "[Iterator]";
            }),
              (N.KEYS = A),
              (N.VALUES = L),
              (N.ENTRIES = B),
              (N.prototype.inspect = N.prototype.toSource =
                function () {
                  return this.toString();
                }),
              (N.prototype[R] = function () {
                return this;
              }),
              e($, r),
              ($.of = function () {
                return $(arguments);
              }),
              ($.prototype.toSeq = function () {
                return this;
              }),
              ($.prototype.toString = function () {
                return this.__toString("Seq {", "}");
              }),
              ($.prototype.cacheResult = function () {
                return (
                  !this._cache &&
                    this.__iterateUncached &&
                    ((this._cache = this.entrySeq().toArray()),
                    (this.size = this._cache.length)),
                  this
                );
              }),
              ($.prototype.__iterate = function (t, e) {
                return ft(this, t, e, !0);
              }),
              ($.prototype.__iterator = function (t, e) {
                return pt(this, t, e, !0);
              }),
              e(G, $),
              (G.prototype.toKeyedSeq = function () {
                return this;
              }),
              e(V, $),
              (V.of = function () {
                return V(arguments);
              }),
              (V.prototype.toIndexedSeq = function () {
                return this;
              }),
              (V.prototype.toString = function () {
                return this.__toString("Seq [", "]");
              }),
              (V.prototype.__iterate = function (t, e) {
                return ft(this, t, e, !1);
              }),
              (V.prototype.__iterator = function (t, e) {
                return pt(this, t, e, !1);
              }),
              e(X, $),
              (X.of = function () {
                return X(arguments);
              }),
              (X.prototype.toSetSeq = function () {
                return this;
              }),
              ($.isSeq = ot),
              ($.Keyed = G),
              ($.Set = X),
              ($.Indexed = V);
            var J,
              Z,
              Q,
              tt = "@@__IMMUTABLE_SEQ__@@";
            function et(t) {
              (this._array = t), (this.size = t.length);
            }
            function rt(t) {
              var e = Object.keys(t);
              (this._object = t), (this._keys = e), (this.size = e.length);
            }
            function nt(t) {
              (this._iterable = t), (this.size = t.length || t.size);
            }
            function it(t) {
              (this._iterator = t), (this._iteratorCache = []);
            }
            function ot(t) {
              return !(!t || !t[tt]);
            }
            function at() {
              return J || (J = new et([]));
            }
            function ut(t) {
              var e = Array.isArray(t)
                ? new et(t).fromEntrySeq()
                : H(t)
                ? new it(t).fromEntrySeq()
                : U(t)
                ? new nt(t).fromEntrySeq()
                : "object" == typeof t
                ? new rt(t)
                : void 0;
              if (!e)
                throw new TypeError(
                  "Expected Array or iterable object of [k, v] entries, or keyed object: " +
                    t
                );
              return e;
            }
            function st(t) {
              var e = lt(t);
              if (!e)
                throw new TypeError(
                  "Expected Array or iterable object of values: " + t
                );
              return e;
            }
            function ct(t) {
              var e = lt(t) || ("object" == typeof t && new rt(t));
              if (!e)
                throw new TypeError(
                  "Expected Array or iterable object of values, or keyed object: " +
                    t
                );
              return e;
            }
            function lt(t) {
              return Y(t)
                ? new et(t)
                : H(t)
                ? new it(t)
                : U(t)
                ? new nt(t)
                : void 0;
            }
            function ft(t, e, r, n) {
              var i = t._cache;
              if (i) {
                for (var o = i.length - 1, a = 0; a <= o; a++) {
                  var u = i[r ? o - a : a];
                  if (!1 === e(u[1], n ? u[0] : a, t)) return a + 1;
                }
                return a;
              }
              return t.__iterateUncached(e, r);
            }
            function pt(t, e, r, n) {
              var i = t._cache;
              if (i) {
                var o = i.length - 1,
                  a = 0;
                return new N(function () {
                  var t = i[r ? o - a : a];
                  return a++ > o ? z() : F(e, n ? t[0] : a - 1, t[1]);
                });
              }
              return t.__iteratorUncached(e, r);
            }
            function ht(t, e) {
              return e ? dt(e, t, "", { "": t }) : gt(t);
            }
            function dt(t, e, r, n) {
              return Array.isArray(e)
                ? t.call(
                    n,
                    r,
                    V(e).map(function (r, n) {
                      return dt(t, r, n, e);
                    })
                  )
                : yt(e)
                ? t.call(
                    n,
                    r,
                    G(e).map(function (r, n) {
                      return dt(t, r, n, e);
                    })
                  )
                : e;
            }
            function gt(t) {
              return Array.isArray(t)
                ? V(t).map(gt).toList()
                : yt(t)
                ? G(t).map(gt).toMap()
                : t;
            }
            function yt(t) {
              return (
                t && (t.constructor === Object || void 0 === t.constructor)
              );
            }
            function vt(t, e) {
              if (t === e || (t != t && e != e)) return !0;
              if (!t || !e) return !1;
              if (
                "function" == typeof t.valueOf &&
                "function" == typeof e.valueOf
              ) {
                if (
                  (t = t.valueOf()) === (e = e.valueOf()) ||
                  (t != t && e != e)
                )
                  return !0;
                if (!t || !e) return !1;
              }
              return !(
                "function" != typeof t.equals ||
                "function" != typeof e.equals ||
                !t.equals(e)
              );
            }
            function mt(t, e) {
              if (t === e) return !0;
              if (
                !a(e) ||
                (void 0 !== t.size && void 0 !== e.size && t.size !== e.size) ||
                (void 0 !== t.__hash &&
                  void 0 !== e.__hash &&
                  t.__hash !== e.__hash) ||
                u(t) !== u(e) ||
                s(t) !== s(e) ||
                l(t) !== l(e)
              )
                return !1;
              if (0 === t.size && 0 === e.size) return !0;
              var r = !c(t);
              if (l(t)) {
                var n = t.entries();
                return (
                  e.every(function (t, e) {
                    var i = n.next().value;
                    return i && vt(i[1], t) && (r || vt(i[0], e));
                  }) && n.next().done
                );
              }
              var i = !1;
              if (void 0 === t.size)
                if (void 0 === e.size)
                  "function" == typeof t.cacheResult && t.cacheResult();
                else {
                  i = !0;
                  var o = t;
                  (t = e), (e = o);
                }
              var f = !0,
                p = e.__iterate(function (e, n) {
                  if (
                    r
                      ? !t.has(e)
                      : i
                      ? !vt(e, t.get(n, b))
                      : !vt(t.get(n, b), e)
                  )
                    return (f = !1), !1;
                });
              return f && t.size === p;
            }
            function bt(t, e) {
              if (!(this instanceof bt)) return new bt(t, e);
              if (
                ((this._value = t),
                (this.size = void 0 === e ? 1 / 0 : Math.max(0, e)),
                0 === this.size)
              ) {
                if (Z) return Z;
                Z = this;
              }
            }
            function _t(t, e) {
              if (!t) throw new Error(e);
            }
            function wt(t, e, r) {
              if (!(this instanceof wt)) return new wt(t, e, r);
              if (
                (_t(0 !== r, "Cannot step a Range by 0"),
                (t = t || 0),
                void 0 === e && (e = 1 / 0),
                (r = void 0 === r ? 1 : Math.abs(r)),
                e < t && (r = -r),
                (this._start = t),
                (this._end = e),
                (this._step = r),
                (this.size = Math.max(0, Math.ceil((e - t) / r - 1) + 1)),
                0 === this.size)
              ) {
                if (Q) return Q;
                Q = this;
              }
            }
            function St() {
              throw TypeError("Abstract");
            }
            function Ot() {}
            function kt() {}
            function Et() {}
            ($.prototype[tt] = !0),
              e(et, V),
              (et.prototype.get = function (t, e) {
                return this.has(t) ? this._array[x(this, t)] : e;
              }),
              (et.prototype.__iterate = function (t, e) {
                for (var r = this._array, n = r.length - 1, i = 0; i <= n; i++)
                  if (!1 === t(r[e ? n - i : i], i, this)) return i + 1;
                return i;
              }),
              (et.prototype.__iterator = function (t, e) {
                var r = this._array,
                  n = r.length - 1,
                  i = 0;
                return new N(function () {
                  return i > n ? z() : F(t, i, r[e ? n - i++ : i++]);
                });
              }),
              e(rt, G),
              (rt.prototype.get = function (t, e) {
                return void 0 === e || this.has(t) ? this._object[t] : e;
              }),
              (rt.prototype.has = function (t) {
                return this._object.hasOwnProperty(t);
              }),
              (rt.prototype.__iterate = function (t, e) {
                for (
                  var r = this._object, n = this._keys, i = n.length - 1, o = 0;
                  o <= i;
                  o++
                ) {
                  var a = n[e ? i - o : o];
                  if (!1 === t(r[a], a, this)) return o + 1;
                }
                return o;
              }),
              (rt.prototype.__iterator = function (t, e) {
                var r = this._object,
                  n = this._keys,
                  i = n.length - 1,
                  o = 0;
                return new N(function () {
                  var a = n[e ? i - o : o];
                  return o++ > i ? z() : F(t, a, r[a]);
                });
              }),
              (rt.prototype[d] = !0),
              e(nt, V),
              (nt.prototype.__iterateUncached = function (t, e) {
                if (e) return this.cacheResult().__iterate(t, e);
                var r = q(this._iterable),
                  n = 0;
                if (H(r))
                  for (
                    var i;
                    !(i = r.next()).done && !1 !== t(i.value, n++, this);

                  );
                return n;
              }),
              (nt.prototype.__iteratorUncached = function (t, e) {
                if (e) return this.cacheResult().__iterator(t, e);
                var r = q(this._iterable);
                if (!H(r)) return new N(z);
                var n = 0;
                return new N(function () {
                  var e = r.next();
                  return e.done ? e : F(t, n++, e.value);
                });
              }),
              e(it, V),
              (it.prototype.__iterateUncached = function (t, e) {
                if (e) return this.cacheResult().__iterate(t, e);
                for (
                  var r, n = this._iterator, i = this._iteratorCache, o = 0;
                  o < i.length;

                )
                  if (!1 === t(i[o], o++, this)) return o;
                for (; !(r = n.next()).done; ) {
                  var a = r.value;
                  if (((i[o] = a), !1 === t(a, o++, this))) break;
                }
                return o;
              }),
              (it.prototype.__iteratorUncached = function (t, e) {
                if (e) return this.cacheResult().__iterator(t, e);
                var r = this._iterator,
                  n = this._iteratorCache,
                  i = 0;
                return new N(function () {
                  if (i >= n.length) {
                    var e = r.next();
                    if (e.done) return e;
                    n[i] = e.value;
                  }
                  return F(t, i, n[i++]);
                });
              }),
              e(bt, V),
              (bt.prototype.toString = function () {
                return 0 === this.size
                  ? "Repeat []"
                  : "Repeat [ " + this._value + " " + this.size + " times ]";
              }),
              (bt.prototype.get = function (t, e) {
                return this.has(t) ? this._value : e;
              }),
              (bt.prototype.includes = function (t) {
                return vt(this._value, t);
              }),
              (bt.prototype.slice = function (t, e) {
                var r = this.size;
                return T(t, e, r)
                  ? this
                  : new bt(this._value, I(e, r) - M(t, r));
              }),
              (bt.prototype.reverse = function () {
                return this;
              }),
              (bt.prototype.indexOf = function (t) {
                return vt(this._value, t) ? 0 : -1;
              }),
              (bt.prototype.lastIndexOf = function (t) {
                return vt(this._value, t) ? this.size : -1;
              }),
              (bt.prototype.__iterate = function (t, e) {
                for (var r = 0; r < this.size; r++)
                  if (!1 === t(this._value, r, this)) return r + 1;
                return r;
              }),
              (bt.prototype.__iterator = function (t, e) {
                var r = this,
                  n = 0;
                return new N(function () {
                  return n < r.size ? F(t, n++, r._value) : z();
                });
              }),
              (bt.prototype.equals = function (t) {
                return t instanceof bt ? vt(this._value, t._value) : mt(t);
              }),
              e(wt, V),
              (wt.prototype.toString = function () {
                return 0 === this.size
                  ? "Range []"
                  : "Range [ " +
                      this._start +
                      "..." +
                      this._end +
                      (1 !== this._step ? " by " + this._step : "") +
                      " ]";
              }),
              (wt.prototype.get = function (t, e) {
                return this.has(t) ? this._start + x(this, t) * this._step : e;
              }),
              (wt.prototype.includes = function (t) {
                var e = (t - this._start) / this._step;
                return e >= 0 && e < this.size && e === Math.floor(e);
              }),
              (wt.prototype.slice = function (t, e) {
                return T(t, e, this.size)
                  ? this
                  : ((t = M(t, this.size)),
                    (e = I(e, this.size)) <= t
                      ? new wt(0, 0)
                      : new wt(
                          this.get(t, this._end),
                          this.get(e, this._end),
                          this._step
                        ));
              }),
              (wt.prototype.indexOf = function (t) {
                var e = t - this._start;
                if (e % this._step == 0) {
                  var r = e / this._step;
                  if (r >= 0 && r < this.size) return r;
                }
                return -1;
              }),
              (wt.prototype.lastIndexOf = function (t) {
                return this.indexOf(t);
              }),
              (wt.prototype.__iterate = function (t, e) {
                for (
                  var r = this.size - 1,
                    n = this._step,
                    i = e ? this._start + r * n : this._start,
                    o = 0;
                  o <= r;
                  o++
                ) {
                  if (!1 === t(i, o, this)) return o + 1;
                  i += e ? -n : n;
                }
                return o;
              }),
              (wt.prototype.__iterator = function (t, e) {
                var r = this.size - 1,
                  n = this._step,
                  i = e ? this._start + r * n : this._start,
                  o = 0;
                return new N(function () {
                  var a = i;
                  return (i += e ? -n : n), o > r ? z() : F(t, o++, a);
                });
              }),
              (wt.prototype.equals = function (t) {
                return t instanceof wt
                  ? this._start === t._start &&
                      this._end === t._end &&
                      this._step === t._step
                  : mt(this, t);
              }),
              e(St, r),
              e(Ot, St),
              e(kt, St),
              e(Et, St),
              (St.Keyed = Ot),
              (St.Indexed = kt),
              (St.Set = Et);
            var Ct =
              "function" == typeof Math.imul && -2 === Math.imul(4294967295, 2)
                ? Math.imul
                : function (t, e) {
                    var r = 65535 & (t |= 0),
                      n = 65535 & (e |= 0);
                    return (
                      (r * n +
                        ((((t >>> 16) * n + r * (e >>> 16)) << 16) >>> 0)) |
                      0
                    );
                  };
            function xt(t) {
              return ((t >>> 1) & 1073741824) | (3221225471 & t);
            }
            function Dt(t) {
              if (!1 === t || null == t) return 0;
              if (
                "function" == typeof t.valueOf &&
                (!1 === (t = t.valueOf()) || null == t)
              )
                return 0;
              if (!0 === t) return 1;
              var e = typeof t;
              if ("number" === e) {
                if (t != t || t === 1 / 0) return 0;
                var r = 0 | t;
                for (r !== t && (r ^= 4294967295 * t); t > 4294967295; )
                  r ^= t /= 4294967295;
                return xt(r);
              }
              if ("string" === e) return t.length > Nt ? Tt(t) : Mt(t);
              if ("function" == typeof t.hashCode) return t.hashCode();
              if ("object" === e) return It(t);
              if ("function" == typeof t.toString) return Mt(t.toString());
              throw new Error("Value type " + e + " cannot be hashed.");
            }
            function Tt(t) {
              var e = Ut[t];
              return (
                void 0 === e &&
                  ((e = Mt(t)),
                  zt === Ft && ((zt = 0), (Ut = {})),
                  zt++,
                  (Ut[t] = e)),
                e
              );
            }
            function Mt(t) {
              for (var e = 0, r = 0; r < t.length; r++)
                e = (31 * e + t.charCodeAt(r)) | 0;
              return xt(e);
            }
            function It(t) {
              var e;
              if (Pt && void 0 !== (e = Bt.get(t))) return e;
              if (void 0 !== (e = t[Rt])) return e;
              if (!At) {
                if (
                  void 0 !==
                  (e = t.propertyIsEnumerable && t.propertyIsEnumerable[Rt])
                )
                  return e;
                if (void 0 !== (e = Lt(t))) return e;
              }
              if (((e = ++jt), 1073741824 & jt && (jt = 0), Pt)) Bt.set(t, e);
              else {
                if (void 0 !== Kt && !1 === Kt(t))
                  throw new Error(
                    "Non-extensible objects are not allowed as keys."
                  );
                if (At)
                  Object.defineProperty(t, Rt, {
                    enumerable: !1,
                    configurable: !1,
                    writable: !1,
                    value: e,
                  });
                else if (
                  void 0 !== t.propertyIsEnumerable &&
                  t.propertyIsEnumerable ===
                    t.constructor.prototype.propertyIsEnumerable
                )
                  (t.propertyIsEnumerable = function () {
                    return this.constructor.prototype.propertyIsEnumerable.apply(
                      this,
                      arguments
                    );
                  }),
                    (t.propertyIsEnumerable[Rt] = e);
                else {
                  if (void 0 === t.nodeType)
                    throw new Error(
                      "Unable to set a non-enumerable property on object."
                    );
                  t[Rt] = e;
                }
              }
              return e;
            }
            var Kt = Object.isExtensible,
              At = (function () {
                try {
                  return Object.defineProperty({}, "@", {}), !0;
                } catch (t) {
                  return !1;
                }
              })();
            function Lt(t) {
              if (t && t.nodeType > 0)
                switch (t.nodeType) {
                  case 1:
                    return t.uniqueID;
                  case 9:
                    return t.documentElement && t.documentElement.uniqueID;
                }
            }
            var Bt,
              Pt = "function" == typeof WeakMap;
            Pt && (Bt = new WeakMap());
            var jt = 0,
              Rt = "__immutablehash__";
            "function" == typeof Symbol && (Rt = Symbol(Rt));
            var Nt = 16,
              Ft = 255,
              zt = 0,
              Ut = {};
            function Ht(t) {
              _t(
                t !== 1 / 0,
                "Cannot perform this action with an infinite size."
              );
            }
            function qt(t) {
              return null == t
                ? ie()
                : Wt(t) && !l(t)
                ? t
                : ie().withMutations(function (e) {
                    var r = n(t);
                    Ht(r.size),
                      r.forEach(function (t, r) {
                        return e.set(r, t);
                      });
                  });
            }
            function Wt(t) {
              return !(!t || !t[$t]);
            }
            e(qt, Ot),
              (qt.of = function () {
                var e = t.call(arguments, 0);
                return ie().withMutations(function (t) {
                  for (var r = 0; r < e.length; r += 2) {
                    if (r + 1 >= e.length)
                      throw new Error("Missing value for key: " + e[r]);
                    t.set(e[r], e[r + 1]);
                  }
                });
              }),
              (qt.prototype.toString = function () {
                return this.__toString("Map {", "}");
              }),
              (qt.prototype.get = function (t, e) {
                return this._root ? this._root.get(0, void 0, t, e) : e;
              }),
              (qt.prototype.set = function (t, e) {
                return oe(this, t, e);
              }),
              (qt.prototype.setIn = function (t, e) {
                return this.updateIn(t, b, function () {
                  return e;
                });
              }),
              (qt.prototype.remove = function (t) {
                return oe(this, t, b);
              }),
              (qt.prototype.deleteIn = function (t) {
                return this.updateIn(t, function () {
                  return b;
                });
              }),
              (qt.prototype.update = function (t, e, r) {
                return 1 === arguments.length
                  ? t(this)
                  : this.updateIn([t], e, r);
              }),
              (qt.prototype.updateIn = function (t, e, r) {
                r || ((r = e), (e = void 0));
                var n = ye(this, wr(t), e, r);
                return n === b ? void 0 : n;
              }),
              (qt.prototype.clear = function () {
                return 0 === this.size
                  ? this
                  : this.__ownerID
                  ? ((this.size = 0),
                    (this._root = null),
                    (this.__hash = void 0),
                    (this.__altered = !0),
                    this)
                  : ie();
              }),
              (qt.prototype.merge = function () {
                return pe(this, void 0, arguments);
              }),
              (qt.prototype.mergeWith = function (e) {
                return pe(this, e, t.call(arguments, 1));
              }),
              (qt.prototype.mergeIn = function (e) {
                var r = t.call(arguments, 1);
                return this.updateIn(e, ie(), function (t) {
                  return "function" == typeof t.merge
                    ? t.merge.apply(t, r)
                    : r[r.length - 1];
                });
              }),
              (qt.prototype.mergeDeep = function () {
                return pe(this, he, arguments);
              }),
              (qt.prototype.mergeDeepWith = function (e) {
                var r = t.call(arguments, 1);
                return pe(this, de(e), r);
              }),
              (qt.prototype.mergeDeepIn = function (e) {
                var r = t.call(arguments, 1);
                return this.updateIn(e, ie(), function (t) {
                  return "function" == typeof t.mergeDeep
                    ? t.mergeDeep.apply(t, r)
                    : r[r.length - 1];
                });
              }),
              (qt.prototype.sort = function (t) {
                return Ue(lr(this, t));
              }),
              (qt.prototype.sortBy = function (t, e) {
                return Ue(lr(this, e, t));
              }),
              (qt.prototype.withMutations = function (t) {
                var e = this.asMutable();
                return (
                  t(e), e.wasAltered() ? e.__ensureOwner(this.__ownerID) : this
                );
              }),
              (qt.prototype.asMutable = function () {
                return this.__ownerID ? this : this.__ensureOwner(new k());
              }),
              (qt.prototype.asImmutable = function () {
                return this.__ensureOwner();
              }),
              (qt.prototype.wasAltered = function () {
                return this.__altered;
              }),
              (qt.prototype.__iterator = function (t, e) {
                return new te(this, t, e);
              }),
              (qt.prototype.__iterate = function (t, e) {
                var r = this,
                  n = 0;
                return (
                  this._root &&
                    this._root.iterate(function (e) {
                      return n++, t(e[1], e[0], r);
                    }, e),
                  n
                );
              }),
              (qt.prototype.__ensureOwner = function (t) {
                return t === this.__ownerID
                  ? this
                  : t
                  ? ne(this.size, this._root, t, this.__hash)
                  : ((this.__ownerID = t), (this.__altered = !1), this);
              }),
              (qt.isMap = Wt);
            var Yt,
              $t = "@@__IMMUTABLE_MAP__@@",
              Gt = qt.prototype;
            function Vt(t, e) {
              (this.ownerID = t), (this.entries = e);
            }
            function Xt(t, e, r) {
              (this.ownerID = t), (this.bitmap = e), (this.nodes = r);
            }
            function Jt(t, e, r) {
              (this.ownerID = t), (this.count = e), (this.nodes = r);
            }
            function Zt(t, e, r) {
              (this.ownerID = t), (this.keyHash = e), (this.entries = r);
            }
            function Qt(t, e, r) {
              (this.ownerID = t), (this.keyHash = e), (this.entry = r);
            }
            function te(t, e, r) {
              (this._type = e),
                (this._reverse = r),
                (this._stack = t._root && re(t._root));
            }
            function ee(t, e) {
              return F(t, e[0], e[1]);
            }
            function re(t, e) {
              return { node: t, index: 0, __prev: e };
            }
            function ne(t, e, r, n) {
              var i = Object.create(Gt);
              return (
                (i.size = t),
                (i._root = e),
                (i.__ownerID = r),
                (i.__hash = n),
                (i.__altered = !1),
                i
              );
            }
            function ie() {
              return Yt || (Yt = ne(0));
            }
            function oe(t, e, r) {
              var n, i;
              if (t._root) {
                var o = S(_),
                  a = S(w);
                if (
                  ((n = ae(t._root, t.__ownerID, 0, void 0, e, r, o, a)),
                  !a.value)
                )
                  return t;
                i = t.size + (o.value ? (r === b ? -1 : 1) : 0);
              } else {
                if (r === b) return t;
                (i = 1), (n = new Vt(t.__ownerID, [[e, r]]));
              }
              return t.__ownerID
                ? ((t.size = i),
                  (t._root = n),
                  (t.__hash = void 0),
                  (t.__altered = !0),
                  t)
                : n
                ? ne(i, n)
                : ie();
            }
            function ae(t, e, r, n, i, o, a, u) {
              return t
                ? t.update(e, r, n, i, o, a, u)
                : o === b
                ? t
                : (O(u), O(a), new Qt(e, n, [i, o]));
            }
            function ue(t) {
              return t.constructor === Qt || t.constructor === Zt;
            }
            function se(t, e, r, n, i) {
              if (t.keyHash === n) return new Zt(e, n, [t.entry, i]);
              var o,
                a = (0 === r ? t.keyHash : t.keyHash >>> r) & m,
                u = (0 === r ? n : n >>> r) & m;
              return new Xt(
                e,
                (1 << a) | (1 << u),
                a === u
                  ? [se(t, e, r + y, n, i)]
                  : ((o = new Qt(e, n, i)), a < u ? [t, o] : [o, t])
              );
            }
            function ce(t, e, r, n) {
              t || (t = new k());
              for (var i = new Qt(t, Dt(r), [r, n]), o = 0; o < e.length; o++) {
                var a = e[o];
                i = i.update(t, 0, void 0, a[0], a[1]);
              }
              return i;
            }
            function le(t, e, r, n) {
              for (
                var i = 0, o = 0, a = new Array(r), u = 0, s = 1, c = e.length;
                u < c;
                u++, s <<= 1
              ) {
                var l = e[u];
                void 0 !== l && u !== n && ((i |= s), (a[o++] = l));
              }
              return new Xt(t, i, a);
            }
            function fe(t, e, r, n, i) {
              for (var o = 0, a = new Array(v), u = 0; 0 !== r; u++, r >>>= 1)
                a[u] = 1 & r ? e[o++] : void 0;
              return (a[n] = i), new Jt(t, o + 1, a);
            }
            function pe(t, e, r) {
              for (var i = [], o = 0; o < r.length; o++) {
                var u = r[o],
                  s = n(u);
                a(u) ||
                  (s = s.map(function (t) {
                    return ht(t);
                  })),
                  i.push(s);
              }
              return ge(t, e, i);
            }
            function he(t, e, r) {
              return t && t.mergeDeep && a(e)
                ? t.mergeDeep(e)
                : vt(t, e)
                ? t
                : e;
            }
            function de(t) {
              return function (e, r, n) {
                if (e && e.mergeDeepWith && a(r)) return e.mergeDeepWith(t, r);
                var i = t(e, r, n);
                return vt(e, i) ? e : i;
              };
            }
            function ge(t, e, r) {
              return 0 ===
                (r = r.filter(function (t) {
                  return 0 !== t.size;
                })).length
                ? t
                : 0 !== t.size || t.__ownerID || 1 !== r.length
                ? t.withMutations(function (t) {
                    for (
                      var n = e
                          ? function (r, n) {
                              t.update(n, b, function (t) {
                                return t === b ? r : e(t, r, n);
                              });
                            }
                          : function (e, r) {
                              t.set(r, e);
                            },
                        i = 0;
                      i < r.length;
                      i++
                    )
                      r[i].forEach(n);
                  })
                : t.constructor(r[0]);
            }
            function ye(t, e, r, n) {
              var i = t === b,
                o = e.next();
              if (o.done) {
                var a = i ? r : t,
                  u = n(a);
                return u === a ? t : u;
              }
              _t(i || (t && t.set), "invalid keyPath");
              var s = o.value,
                c = i ? b : t.get(s, b),
                l = ye(c, e, r, n);
              return l === c
                ? t
                : l === b
                ? t.remove(s)
                : (i ? ie() : t).set(s, l);
            }
            function ve(t) {
              return (
                (t =
                  ((t =
                    (858993459 & (t -= (t >> 1) & 1431655765)) +
                    ((t >> 2) & 858993459)) +
                    (t >> 4)) &
                  252645135),
                (t += t >> 8),
                127 & (t += t >> 16)
              );
            }
            function me(t, e, r, n) {
              var i = n ? t : E(t);
              return (i[e] = r), i;
            }
            function be(t, e, r, n) {
              var i = t.length + 1;
              if (n && e + 1 === i) return (t[e] = r), t;
              for (var o = new Array(i), a = 0, u = 0; u < i; u++)
                u === e ? ((o[u] = r), (a = -1)) : (o[u] = t[u + a]);
              return o;
            }
            function _e(t, e, r) {
              var n = t.length - 1;
              if (r && e === n) return t.pop(), t;
              for (var i = new Array(n), o = 0, a = 0; a < n; a++)
                a === e && (o = 1), (i[a] = t[a + o]);
              return i;
            }
            (Gt[$t] = !0),
              (Gt[g] = Gt.remove),
              (Gt.removeIn = Gt.deleteIn),
              (Vt.prototype.get = function (t, e, r, n) {
                for (var i = this.entries, o = 0, a = i.length; o < a; o++)
                  if (vt(r, i[o][0])) return i[o][1];
                return n;
              }),
              (Vt.prototype.update = function (t, e, r, n, i, o, a) {
                for (
                  var u = i === b, s = this.entries, c = 0, l = s.length;
                  c < l && !vt(n, s[c][0]);
                  c++
                );
                var f = c < l;
                if (f ? s[c][1] === i : u) return this;
                if ((O(a), (u || !f) && O(o), !u || 1 !== s.length)) {
                  if (!f && !u && s.length >= we) return ce(t, s, n, i);
                  var p = t && t === this.ownerID,
                    h = p ? s : E(s);
                  return (
                    f
                      ? u
                        ? c === l - 1
                          ? h.pop()
                          : (h[c] = h.pop())
                        : (h[c] = [n, i])
                      : h.push([n, i]),
                    p ? ((this.entries = h), this) : new Vt(t, h)
                  );
                }
              }),
              (Xt.prototype.get = function (t, e, r, n) {
                void 0 === e && (e = Dt(r));
                var i = 1 << ((0 === t ? e : e >>> t) & m),
                  o = this.bitmap;
                return 0 == (o & i)
                  ? n
                  : this.nodes[ve(o & (i - 1))].get(t + y, e, r, n);
              }),
              (Xt.prototype.update = function (t, e, r, n, i, o, a) {
                void 0 === r && (r = Dt(n));
                var u = (0 === e ? r : r >>> e) & m,
                  s = 1 << u,
                  c = this.bitmap,
                  l = 0 != (c & s);
                if (!l && i === b) return this;
                var f = ve(c & (s - 1)),
                  p = this.nodes,
                  h = l ? p[f] : void 0,
                  d = ae(h, t, e + y, r, n, i, o, a);
                if (d === h) return this;
                if (!l && d && p.length >= Se) return fe(t, p, c, u, d);
                if (l && !d && 2 === p.length && ue(p[1 ^ f])) return p[1 ^ f];
                if (l && d && 1 === p.length && ue(d)) return d;
                var g = t && t === this.ownerID,
                  v = l ? (d ? c : c ^ s) : c | s,
                  _ = l ? (d ? me(p, f, d, g) : _e(p, f, g)) : be(p, f, d, g);
                return g
                  ? ((this.bitmap = v), (this.nodes = _), this)
                  : new Xt(t, v, _);
              }),
              (Jt.prototype.get = function (t, e, r, n) {
                void 0 === e && (e = Dt(r));
                var i = (0 === t ? e : e >>> t) & m,
                  o = this.nodes[i];
                return o ? o.get(t + y, e, r, n) : n;
              }),
              (Jt.prototype.update = function (t, e, r, n, i, o, a) {
                void 0 === r && (r = Dt(n));
                var u = (0 === e ? r : r >>> e) & m,
                  s = i === b,
                  c = this.nodes,
                  l = c[u];
                if (s && !l) return this;
                var f = ae(l, t, e + y, r, n, i, o, a);
                if (f === l) return this;
                var p = this.count;
                if (l) {
                  if (!f && --p < Oe) return le(t, c, p, u);
                } else p++;
                var h = t && t === this.ownerID,
                  d = me(c, u, f, h);
                return h
                  ? ((this.count = p), (this.nodes = d), this)
                  : new Jt(t, p, d);
              }),
              (Zt.prototype.get = function (t, e, r, n) {
                for (var i = this.entries, o = 0, a = i.length; o < a; o++)
                  if (vt(r, i[o][0])) return i[o][1];
                return n;
              }),
              (Zt.prototype.update = function (t, e, r, n, i, o, a) {
                void 0 === r && (r = Dt(n));
                var u = i === b;
                if (r !== this.keyHash)
                  return u ? this : (O(a), O(o), se(this, t, e, r, [n, i]));
                for (
                  var s = this.entries, c = 0, l = s.length;
                  c < l && !vt(n, s[c][0]);
                  c++
                );
                var f = c < l;
                if (f ? s[c][1] === i : u) return this;
                if ((O(a), (u || !f) && O(o), u && 2 === l))
                  return new Qt(t, this.keyHash, s[1 ^ c]);
                var p = t && t === this.ownerID,
                  h = p ? s : E(s);
                return (
                  f
                    ? u
                      ? c === l - 1
                        ? h.pop()
                        : (h[c] = h.pop())
                      : (h[c] = [n, i])
                    : h.push([n, i]),
                  p ? ((this.entries = h), this) : new Zt(t, this.keyHash, h)
                );
              }),
              (Qt.prototype.get = function (t, e, r, n) {
                return vt(r, this.entry[0]) ? this.entry[1] : n;
              }),
              (Qt.prototype.update = function (t, e, r, n, i, o, a) {
                var u = i === b,
                  s = vt(n, this.entry[0]);
                return (s ? i === this.entry[1] : u)
                  ? this
                  : (O(a),
                    u
                      ? void O(o)
                      : s
                      ? t && t === this.ownerID
                        ? ((this.entry[1] = i), this)
                        : new Qt(t, this.keyHash, [n, i])
                      : (O(o), se(this, t, e, Dt(n), [n, i])));
              }),
              (Vt.prototype.iterate = Zt.prototype.iterate =
                function (t, e) {
                  for (
                    var r = this.entries, n = 0, i = r.length - 1;
                    n <= i;
                    n++
                  )
                    if (!1 === t(r[e ? i - n : n])) return !1;
                }),
              (Xt.prototype.iterate = Jt.prototype.iterate =
                function (t, e) {
                  for (
                    var r = this.nodes, n = 0, i = r.length - 1;
                    n <= i;
                    n++
                  ) {
                    var o = r[e ? i - n : n];
                    if (o && !1 === o.iterate(t, e)) return !1;
                  }
                }),
              (Qt.prototype.iterate = function (t, e) {
                return t(this.entry);
              }),
              e(te, N),
              (te.prototype.next = function () {
                for (var t = this._type, e = this._stack; e; ) {
                  var r,
                    n = e.node,
                    i = e.index++;
                  if (n.entry) {
                    if (0 === i) return ee(t, n.entry);
                  } else if (n.entries) {
                    if (i <= (r = n.entries.length - 1))
                      return ee(t, n.entries[this._reverse ? r - i : i]);
                  } else if (i <= (r = n.nodes.length - 1)) {
                    var o = n.nodes[this._reverse ? r - i : i];
                    if (o) {
                      if (o.entry) return ee(t, o.entry);
                      e = this._stack = re(o, e);
                    }
                    continue;
                  }
                  e = this._stack = this._stack.__prev;
                }
                return z();
              });
            var we = v / 4,
              Se = v / 2,
              Oe = v / 4;
            function ke(t) {
              var e = Le();
              if (null == t) return e;
              if (Ee(t)) return t;
              var r = i(t),
                n = r.size;
              return 0 === n
                ? e
                : (Ht(n),
                  n > 0 && n < v
                    ? Ae(0, n, y, null, new De(r.toArray()))
                    : e.withMutations(function (t) {
                        t.setSize(n),
                          r.forEach(function (e, r) {
                            return t.set(r, e);
                          });
                      }));
            }
            function Ee(t) {
              return !(!t || !t[Ce]);
            }
            e(ke, kt),
              (ke.of = function () {
                return this(arguments);
              }),
              (ke.prototype.toString = function () {
                return this.__toString("List [", "]");
              }),
              (ke.prototype.get = function (t, e) {
                if ((t = x(this, t)) >= 0 && t < this.size) {
                  var r = Re(this, (t += this._origin));
                  return r && r.array[t & m];
                }
                return e;
              }),
              (ke.prototype.set = function (t, e) {
                return Be(this, t, e);
              }),
              (ke.prototype.remove = function (t) {
                return this.has(t)
                  ? 0 === t
                    ? this.shift()
                    : t === this.size - 1
                    ? this.pop()
                    : this.splice(t, 1)
                  : this;
              }),
              (ke.prototype.insert = function (t, e) {
                return this.splice(t, 0, e);
              }),
              (ke.prototype.clear = function () {
                return 0 === this.size
                  ? this
                  : this.__ownerID
                  ? ((this.size = this._origin = this._capacity = 0),
                    (this._level = y),
                    (this._root = this._tail = null),
                    (this.__hash = void 0),
                    (this.__altered = !0),
                    this)
                  : Le();
              }),
              (ke.prototype.push = function () {
                var t = arguments,
                  e = this.size;
                return this.withMutations(function (r) {
                  Ne(r, 0, e + t.length);
                  for (var n = 0; n < t.length; n++) r.set(e + n, t[n]);
                });
              }),
              (ke.prototype.pop = function () {
                return Ne(this, 0, -1);
              }),
              (ke.prototype.unshift = function () {
                var t = arguments;
                return this.withMutations(function (e) {
                  Ne(e, -t.length);
                  for (var r = 0; r < t.length; r++) e.set(r, t[r]);
                });
              }),
              (ke.prototype.shift = function () {
                return Ne(this, 1);
              }),
              (ke.prototype.merge = function () {
                return Fe(this, void 0, arguments);
              }),
              (ke.prototype.mergeWith = function (e) {
                return Fe(this, e, t.call(arguments, 1));
              }),
              (ke.prototype.mergeDeep = function () {
                return Fe(this, he, arguments);
              }),
              (ke.prototype.mergeDeepWith = function (e) {
                var r = t.call(arguments, 1);
                return Fe(this, de(e), r);
              }),
              (ke.prototype.setSize = function (t) {
                return Ne(this, 0, t);
              }),
              (ke.prototype.slice = function (t, e) {
                var r = this.size;
                return T(t, e, r) ? this : Ne(this, M(t, r), I(e, r));
              }),
              (ke.prototype.__iterator = function (t, e) {
                var r = 0,
                  n = Ke(this, e);
                return new N(function () {
                  var e = n();
                  return e === Ie ? z() : F(t, r++, e);
                });
              }),
              (ke.prototype.__iterate = function (t, e) {
                for (
                  var r, n = 0, i = Ke(this, e);
                  (r = i()) !== Ie && !1 !== t(r, n++, this);

                );
                return n;
              }),
              (ke.prototype.__ensureOwner = function (t) {
                return t === this.__ownerID
                  ? this
                  : t
                  ? Ae(
                      this._origin,
                      this._capacity,
                      this._level,
                      this._root,
                      this._tail,
                      t,
                      this.__hash
                    )
                  : ((this.__ownerID = t), this);
              }),
              (ke.isList = Ee);
            var Ce = "@@__IMMUTABLE_LIST__@@",
              xe = ke.prototype;
            function De(t, e) {
              (this.array = t), (this.ownerID = e);
            }
            (xe[Ce] = !0),
              (xe[g] = xe.remove),
              (xe.setIn = Gt.setIn),
              (xe.deleteIn = xe.removeIn = Gt.removeIn),
              (xe.update = Gt.update),
              (xe.updateIn = Gt.updateIn),
              (xe.mergeIn = Gt.mergeIn),
              (xe.mergeDeepIn = Gt.mergeDeepIn),
              (xe.withMutations = Gt.withMutations),
              (xe.asMutable = Gt.asMutable),
              (xe.asImmutable = Gt.asImmutable),
              (xe.wasAltered = Gt.wasAltered),
              (De.prototype.removeBefore = function (t, e, r) {
                if (r === e ? 1 << e : 0 === this.array.length) return this;
                var n = (r >>> e) & m;
                if (n >= this.array.length) return new De([], t);
                var i,
                  o = 0 === n;
                if (e > 0) {
                  var a = this.array[n];
                  if ((i = a && a.removeBefore(t, e - y, r)) === a && o)
                    return this;
                }
                if (o && !i) return this;
                var u = je(this, t);
                if (!o) for (var s = 0; s < n; s++) u.array[s] = void 0;
                return i && (u.array[n] = i), u;
              }),
              (De.prototype.removeAfter = function (t, e, r) {
                if (r === (e ? 1 << e : 0) || 0 === this.array.length)
                  return this;
                var n,
                  i = ((r - 1) >>> e) & m;
                if (i >= this.array.length) return this;
                if (e > 0) {
                  var o = this.array[i];
                  if (
                    (n = o && o.removeAfter(t, e - y, r)) === o &&
                    i === this.array.length - 1
                  )
                    return this;
                }
                var a = je(this, t);
                return a.array.splice(i + 1), n && (a.array[i] = n), a;
              });
            var Te,
              Me,
              Ie = {};
            function Ke(t, e) {
              var r = t._origin,
                n = t._capacity,
                i = ze(n),
                o = t._tail;
              return a(t._root, t._level, 0);
              function a(t, e, r) {
                return 0 === e ? u(t, r) : s(t, e, r);
              }
              function u(t, a) {
                var u = a === i ? o && o.array : t && t.array,
                  s = a > r ? 0 : r - a,
                  c = n - a;
                return (
                  c > v && (c = v),
                  function () {
                    if (s === c) return Ie;
                    var t = e ? --c : s++;
                    return u && u[t];
                  }
                );
              }
              function s(t, i, o) {
                var u,
                  s = t && t.array,
                  c = o > r ? 0 : (r - o) >> i,
                  l = 1 + ((n - o) >> i);
                return (
                  l > v && (l = v),
                  function () {
                    for (;;) {
                      if (u) {
                        var t = u();
                        if (t !== Ie) return t;
                        u = null;
                      }
                      if (c === l) return Ie;
                      var r = e ? --l : c++;
                      u = a(s && s[r], i - y, o + (r << i));
                    }
                  }
                );
              }
            }
            function Ae(t, e, r, n, i, o, a) {
              var u = Object.create(xe);
              return (
                (u.size = e - t),
                (u._origin = t),
                (u._capacity = e),
                (u._level = r),
                (u._root = n),
                (u._tail = i),
                (u.__ownerID = o),
                (u.__hash = a),
                (u.__altered = !1),
                u
              );
            }
            function Le() {
              return Te || (Te = Ae(0, 0, y));
            }
            function Be(t, e, r) {
              if ((e = x(t, e)) != e) return t;
              if (e >= t.size || e < 0)
                return t.withMutations(function (t) {
                  e < 0 ? Ne(t, e).set(0, r) : Ne(t, 0, e + 1).set(e, r);
                });
              e += t._origin;
              var n = t._tail,
                i = t._root,
                o = S(w);
              return (
                e >= ze(t._capacity)
                  ? (n = Pe(n, t.__ownerID, 0, e, r, o))
                  : (i = Pe(i, t.__ownerID, t._level, e, r, o)),
                o.value
                  ? t.__ownerID
                    ? ((t._root = i),
                      (t._tail = n),
                      (t.__hash = void 0),
                      (t.__altered = !0),
                      t)
                    : Ae(t._origin, t._capacity, t._level, i, n)
                  : t
              );
            }
            function Pe(t, e, r, n, i, o) {
              var a,
                u = (n >>> r) & m,
                s = t && u < t.array.length;
              if (!s && void 0 === i) return t;
              if (r > 0) {
                var c = t && t.array[u],
                  l = Pe(c, e, r - y, n, i, o);
                return l === c ? t : (((a = je(t, e)).array[u] = l), a);
              }
              return s && t.array[u] === i
                ? t
                : (O(o),
                  (a = je(t, e)),
                  void 0 === i && u === a.array.length - 1
                    ? a.array.pop()
                    : (a.array[u] = i),
                  a);
            }
            function je(t, e) {
              return e && t && e === t.ownerID
                ? t
                : new De(t ? t.array.slice() : [], e);
            }
            function Re(t, e) {
              if (e >= ze(t._capacity)) return t._tail;
              if (e < 1 << (t._level + y)) {
                for (var r = t._root, n = t._level; r && n > 0; )
                  (r = r.array[(e >>> n) & m]), (n -= y);
                return r;
              }
            }
            function Ne(t, e, r) {
              void 0 !== e && (e |= 0), void 0 !== r && (r |= 0);
              var n = t.__ownerID || new k(),
                i = t._origin,
                o = t._capacity,
                a = i + e,
                u = void 0 === r ? o : r < 0 ? o + r : i + r;
              if (a === i && u === o) return t;
              if (a >= u) return t.clear();
              for (var s = t._level, c = t._root, l = 0; a + l < 0; )
                (c = new De(c && c.array.length ? [void 0, c] : [], n)),
                  (l += 1 << (s += y));
              l && ((a += l), (i += l), (u += l), (o += l));
              for (var f = ze(o), p = ze(u); p >= 1 << (s + y); )
                (c = new De(c && c.array.length ? [c] : [], n)), (s += y);
              var h = t._tail,
                d = p < f ? Re(t, u - 1) : p > f ? new De([], n) : h;
              if (h && p > f && a < o && h.array.length) {
                for (var g = (c = je(c, n)), v = s; v > y; v -= y) {
                  var b = (f >>> v) & m;
                  g = g.array[b] = je(g.array[b], n);
                }
                g.array[(f >>> y) & m] = h;
              }
              if ((u < o && (d = d && d.removeAfter(n, 0, u)), a >= p))
                (a -= p),
                  (u -= p),
                  (s = y),
                  (c = null),
                  (d = d && d.removeBefore(n, 0, a));
              else if (a > i || p < f) {
                for (l = 0; c; ) {
                  var _ = (a >>> s) & m;
                  if ((_ !== p >>> s) & m) break;
                  _ && (l += (1 << s) * _), (s -= y), (c = c.array[_]);
                }
                c && a > i && (c = c.removeBefore(n, s, a - l)),
                  c && p < f && (c = c.removeAfter(n, s, p - l)),
                  l && ((a -= l), (u -= l));
              }
              return t.__ownerID
                ? ((t.size = u - a),
                  (t._origin = a),
                  (t._capacity = u),
                  (t._level = s),
                  (t._root = c),
                  (t._tail = d),
                  (t.__hash = void 0),
                  (t.__altered = !0),
                  t)
                : Ae(a, u, s, c, d);
            }
            function Fe(t, e, r) {
              for (var n = [], o = 0, u = 0; u < r.length; u++) {
                var s = r[u],
                  c = i(s);
                c.size > o && (o = c.size),
                  a(s) ||
                    (c = c.map(function (t) {
                      return ht(t);
                    })),
                  n.push(c);
              }
              return o > t.size && (t = t.setSize(o)), ge(t, e, n);
            }
            function ze(t) {
              return t < v ? 0 : ((t - 1) >>> y) << y;
            }
            function Ue(t) {
              return null == t
                ? We()
                : He(t)
                ? t
                : We().withMutations(function (e) {
                    var r = n(t);
                    Ht(r.size),
                      r.forEach(function (t, r) {
                        return e.set(r, t);
                      });
                  });
            }
            function He(t) {
              return Wt(t) && l(t);
            }
            function qe(t, e, r, n) {
              var i = Object.create(Ue.prototype);
              return (
                (i.size = t ? t.size : 0),
                (i._map = t),
                (i._list = e),
                (i.__ownerID = r),
                (i.__hash = n),
                i
              );
            }
            function We() {
              return Me || (Me = qe(ie(), Le()));
            }
            function Ye(t, e, r) {
              var n,
                i,
                o = t._map,
                a = t._list,
                u = o.get(e),
                s = void 0 !== u;
              if (r === b) {
                if (!s) return t;
                a.size >= v && a.size >= 2 * o.size
                  ? ((n = (i = a.filter(function (t, e) {
                      return void 0 !== t && u !== e;
                    }))
                      .toKeyedSeq()
                      .map(function (t) {
                        return t[0];
                      })
                      .flip()
                      .toMap()),
                    t.__ownerID && (n.__ownerID = i.__ownerID = t.__ownerID))
                  : ((n = o.remove(e)),
                    (i = u === a.size - 1 ? a.pop() : a.set(u, void 0)));
              } else if (s) {
                if (r === a.get(u)[1]) return t;
                (n = o), (i = a.set(u, [e, r]));
              } else (n = o.set(e, a.size)), (i = a.set(a.size, [e, r]));
              return t.__ownerID
                ? ((t.size = n.size),
                  (t._map = n),
                  (t._list = i),
                  (t.__hash = void 0),
                  t)
                : qe(n, i);
            }
            function $e(t, e) {
              (this._iter = t), (this._useKeys = e), (this.size = t.size);
            }
            function Ge(t) {
              (this._iter = t), (this.size = t.size);
            }
            function Ve(t) {
              (this._iter = t), (this.size = t.size);
            }
            function Xe(t) {
              (this._iter = t), (this.size = t.size);
            }
            function Je(t) {
              var e = mr(t);
              return (
                (e._iter = t),
                (e.size = t.size),
                (e.flip = function () {
                  return t;
                }),
                (e.reverse = function () {
                  var e = t.reverse.apply(this);
                  return (
                    (e.flip = function () {
                      return t.reverse();
                    }),
                    e
                  );
                }),
                (e.has = function (e) {
                  return t.includes(e);
                }),
                (e.includes = function (e) {
                  return t.has(e);
                }),
                (e.cacheResult = br),
                (e.__iterateUncached = function (e, r) {
                  var n = this;
                  return t.__iterate(function (t, r) {
                    return !1 !== e(r, t, n);
                  }, r);
                }),
                (e.__iteratorUncached = function (e, r) {
                  if (e === B) {
                    var n = t.__iterator(e, r);
                    return new N(function () {
                      var t = n.next();
                      if (!t.done) {
                        var e = t.value[0];
                        (t.value[0] = t.value[1]), (t.value[1] = e);
                      }
                      return t;
                    });
                  }
                  return t.__iterator(e === L ? A : L, r);
                }),
                e
              );
            }
            function Ze(t, e, r) {
              var n = mr(t);
              return (
                (n.size = t.size),
                (n.has = function (e) {
                  return t.has(e);
                }),
                (n.get = function (n, i) {
                  var o = t.get(n, b);
                  return o === b ? i : e.call(r, o, n, t);
                }),
                (n.__iterateUncached = function (n, i) {
                  var o = this;
                  return t.__iterate(function (t, i, a) {
                    return !1 !== n(e.call(r, t, i, a), i, o);
                  }, i);
                }),
                (n.__iteratorUncached = function (n, i) {
                  var o = t.__iterator(B, i);
                  return new N(function () {
                    var i = o.next();
                    if (i.done) return i;
                    var a = i.value,
                      u = a[0];
                    return F(n, u, e.call(r, a[1], u, t), i);
                  });
                }),
                n
              );
            }
            function Qe(t, e) {
              var r = mr(t);
              return (
                (r._iter = t),
                (r.size = t.size),
                (r.reverse = function () {
                  return t;
                }),
                t.flip &&
                  (r.flip = function () {
                    var e = Je(t);
                    return (
                      (e.reverse = function () {
                        return t.flip();
                      }),
                      e
                    );
                  }),
                (r.get = function (r, n) {
                  return t.get(e ? r : -1 - r, n);
                }),
                (r.has = function (r) {
                  return t.has(e ? r : -1 - r);
                }),
                (r.includes = function (e) {
                  return t.includes(e);
                }),
                (r.cacheResult = br),
                (r.__iterate = function (e, r) {
                  var n = this;
                  return t.__iterate(function (t, r) {
                    return e(t, r, n);
                  }, !r);
                }),
                (r.__iterator = function (e, r) {
                  return t.__iterator(e, !r);
                }),
                r
              );
            }
            function tr(t, e, r, n) {
              var i = mr(t);
              return (
                n &&
                  ((i.has = function (n) {
                    var i = t.get(n, b);
                    return i !== b && !!e.call(r, i, n, t);
                  }),
                  (i.get = function (n, i) {
                    var o = t.get(n, b);
                    return o !== b && e.call(r, o, n, t) ? o : i;
                  })),
                (i.__iterateUncached = function (i, o) {
                  var a = this,
                    u = 0;
                  return (
                    t.__iterate(function (t, o, s) {
                      if (e.call(r, t, o, s))
                        return u++, i(t, n ? o : u - 1, a);
                    }, o),
                    u
                  );
                }),
                (i.__iteratorUncached = function (i, o) {
                  var a = t.__iterator(B, o),
                    u = 0;
                  return new N(function () {
                    for (;;) {
                      var o = a.next();
                      if (o.done) return o;
                      var s = o.value,
                        c = s[0],
                        l = s[1];
                      if (e.call(r, l, c, t)) return F(i, n ? c : u++, l, o);
                    }
                  });
                }),
                i
              );
            }
            function er(t, e, r) {
              var n = qt().asMutable();
              return (
                t.__iterate(function (i, o) {
                  n.update(e.call(r, i, o, t), 0, function (t) {
                    return t + 1;
                  });
                }),
                n.asImmutable()
              );
            }
            function rr(t, e, r) {
              var n = u(t),
                i = (l(t) ? Ue() : qt()).asMutable();
              t.__iterate(function (o, a) {
                i.update(e.call(r, o, a, t), function (t) {
                  return (t = t || []).push(n ? [a, o] : o), t;
                });
              });
              var o = vr(t);
              return i.map(function (e) {
                return dr(t, o(e));
              });
            }
            function nr(t, e, r, n) {
              var i = t.size;
              if (
                (void 0 !== e && (e |= 0),
                void 0 !== r && (r === 1 / 0 ? (r = i) : (r |= 0)),
                T(e, r, i))
              )
                return t;
              var o = M(e, i),
                a = I(r, i);
              if (o != o || a != a) return nr(t.toSeq().cacheResult(), e, r, n);
              var u,
                s = a - o;
              s == s && (u = s < 0 ? 0 : s);
              var c = mr(t);
              return (
                (c.size = 0 === u ? u : (t.size && u) || void 0),
                !n &&
                  ot(t) &&
                  u >= 0 &&
                  (c.get = function (e, r) {
                    return (e = x(this, e)) >= 0 && e < u ? t.get(e + o, r) : r;
                  }),
                (c.__iterateUncached = function (e, r) {
                  var i = this;
                  if (0 === u) return 0;
                  if (r) return this.cacheResult().__iterate(e, r);
                  var a = 0,
                    s = !0,
                    c = 0;
                  return (
                    t.__iterate(function (t, r) {
                      if (!s || !(s = a++ < o))
                        return c++, !1 !== e(t, n ? r : c - 1, i) && c !== u;
                    }),
                    c
                  );
                }),
                (c.__iteratorUncached = function (e, r) {
                  if (0 !== u && r) return this.cacheResult().__iterator(e, r);
                  var i = 0 !== u && t.__iterator(e, r),
                    a = 0,
                    s = 0;
                  return new N(function () {
                    for (; a++ < o; ) i.next();
                    if (++s > u) return z();
                    var t = i.next();
                    return n || e === L
                      ? t
                      : F(e, s - 1, e === A ? void 0 : t.value[1], t);
                  });
                }),
                c
              );
            }
            function ir(t, e, r) {
              var n = mr(t);
              return (
                (n.__iterateUncached = function (n, i) {
                  var o = this;
                  if (i) return this.cacheResult().__iterate(n, i);
                  var a = 0;
                  return (
                    t.__iterate(function (t, i, u) {
                      return e.call(r, t, i, u) && ++a && n(t, i, o);
                    }),
                    a
                  );
                }),
                (n.__iteratorUncached = function (n, i) {
                  var o = this;
                  if (i) return this.cacheResult().__iterator(n, i);
                  var a = t.__iterator(B, i),
                    u = !0;
                  return new N(function () {
                    if (!u) return z();
                    var t = a.next();
                    if (t.done) return t;
                    var i = t.value,
                      s = i[0],
                      c = i[1];
                    return e.call(r, c, s, o)
                      ? n === B
                        ? t
                        : F(n, s, c, t)
                      : ((u = !1), z());
                  });
                }),
                n
              );
            }
            function or(t, e, r, n) {
              var i = mr(t);
              return (
                (i.__iterateUncached = function (i, o) {
                  var a = this;
                  if (o) return this.cacheResult().__iterate(i, o);
                  var u = !0,
                    s = 0;
                  return (
                    t.__iterate(function (t, o, c) {
                      if (!u || !(u = e.call(r, t, o, c)))
                        return s++, i(t, n ? o : s - 1, a);
                    }),
                    s
                  );
                }),
                (i.__iteratorUncached = function (i, o) {
                  var a = this;
                  if (o) return this.cacheResult().__iterator(i, o);
                  var u = t.__iterator(B, o),
                    s = !0,
                    c = 0;
                  return new N(function () {
                    var t, o, l;
                    do {
                      if ((t = u.next()).done)
                        return n || i === L
                          ? t
                          : F(i, c++, i === A ? void 0 : t.value[1], t);
                      var f = t.value;
                      (o = f[0]), (l = f[1]), s && (s = e.call(r, l, o, a));
                    } while (s);
                    return i === B ? t : F(i, o, l, t);
                  });
                }),
                i
              );
            }
            function ar(t, e) {
              var r = u(t),
                i = [t]
                  .concat(e)
                  .map(function (t) {
                    return (
                      a(t)
                        ? r && (t = n(t))
                        : (t = r ? ut(t) : st(Array.isArray(t) ? t : [t])),
                      t
                    );
                  })
                  .filter(function (t) {
                    return 0 !== t.size;
                  });
              if (0 === i.length) return t;
              if (1 === i.length) {
                var o = i[0];
                if (o === t || (r && u(o)) || (s(t) && s(o))) return o;
              }
              var c = new et(i);
              return (
                r ? (c = c.toKeyedSeq()) : s(t) || (c = c.toSetSeq()),
                ((c = c.flatten(!0)).size = i.reduce(function (t, e) {
                  if (void 0 !== t) {
                    var r = e.size;
                    if (void 0 !== r) return t + r;
                  }
                }, 0)),
                c
              );
            }
            function ur(t, e, r) {
              var n = mr(t);
              return (
                (n.__iterateUncached = function (n, i) {
                  var o = 0,
                    u = !1;
                  function s(t, c) {
                    var l = this;
                    t.__iterate(function (t, i) {
                      return (
                        (!e || c < e) && a(t)
                          ? s(t, c + 1)
                          : !1 === n(t, r ? i : o++, l) && (u = !0),
                        !u
                      );
                    }, i);
                  }
                  return s(t, 0), o;
                }),
                (n.__iteratorUncached = function (n, i) {
                  var o = t.__iterator(n, i),
                    u = [],
                    s = 0;
                  return new N(function () {
                    for (; o; ) {
                      var t = o.next();
                      if (!1 === t.done) {
                        var c = t.value;
                        if (
                          (n === B && (c = c[1]),
                          (e && !(u.length < e)) || !a(c))
                        )
                          return r ? t : F(n, s++, c, t);
                        u.push(o), (o = c.__iterator(n, i));
                      } else o = u.pop();
                    }
                    return z();
                  });
                }),
                n
              );
            }
            function sr(t, e, r) {
              var n = vr(t);
              return t
                .toSeq()
                .map(function (i, o) {
                  return n(e.call(r, i, o, t));
                })
                .flatten(!0);
            }
            function cr(t, e) {
              var r = mr(t);
              return (
                (r.size = t.size && 2 * t.size - 1),
                (r.__iterateUncached = function (r, n) {
                  var i = this,
                    o = 0;
                  return (
                    t.__iterate(function (t, n) {
                      return (!o || !1 !== r(e, o++, i)) && !1 !== r(t, o++, i);
                    }, n),
                    o
                  );
                }),
                (r.__iteratorUncached = function (r, n) {
                  var i,
                    o = t.__iterator(L, n),
                    a = 0;
                  return new N(function () {
                    return (!i || a % 2) && (i = o.next()).done
                      ? i
                      : a % 2
                      ? F(r, a++, e)
                      : F(r, a++, i.value, i);
                  });
                }),
                r
              );
            }
            function lr(t, e, r) {
              e || (e = _r);
              var n = u(t),
                i = 0,
                o = t
                  .toSeq()
                  .map(function (e, n) {
                    return [n, e, i++, r ? r(e, n, t) : e];
                  })
                  .toArray();
              return (
                o
                  .sort(function (t, r) {
                    return e(t[3], r[3]) || t[2] - r[2];
                  })
                  .forEach(
                    n
                      ? function (t, e) {
                          o[e].length = 2;
                        }
                      : function (t, e) {
                          o[e] = t[1];
                        }
                  ),
                n ? G(o) : s(t) ? V(o) : X(o)
              );
            }
            function fr(t, e, r) {
              if ((e || (e = _r), r)) {
                var n = t
                  .toSeq()
                  .map(function (e, n) {
                    return [e, r(e, n, t)];
                  })
                  .reduce(function (t, r) {
                    return pr(e, t[1], r[1]) ? r : t;
                  });
                return n && n[0];
              }
              return t.reduce(function (t, r) {
                return pr(e, t, r) ? r : t;
              });
            }
            function pr(t, e, r) {
              var n = t(r, e);
              return (0 === n && r !== e && (null == r || r != r)) || n > 0;
            }
            function hr(t, e, n) {
              var i = mr(t);
              return (
                (i.size = new et(n)
                  .map(function (t) {
                    return t.size;
                  })
                  .min()),
                (i.__iterate = function (t, e) {
                  for (
                    var r, n = this.__iterator(L, e), i = 0;
                    !(r = n.next()).done && !1 !== t(r.value, i++, this);

                  );
                  return i;
                }),
                (i.__iteratorUncached = function (t, i) {
                  var o = n.map(function (t) {
                      return (t = r(t)), q(i ? t.reverse() : t);
                    }),
                    a = 0,
                    u = !1;
                  return new N(function () {
                    var r;
                    return (
                      u ||
                        ((r = o.map(function (t) {
                          return t.next();
                        })),
                        (u = r.some(function (t) {
                          return t.done;
                        }))),
                      u
                        ? z()
                        : F(
                            t,
                            a++,
                            e.apply(
                              null,
                              r.map(function (t) {
                                return t.value;
                              })
                            )
                          )
                    );
                  });
                }),
                i
              );
            }
            function dr(t, e) {
              return ot(t) ? e : t.constructor(e);
            }
            function gr(t) {
              if (t !== Object(t))
                throw new TypeError("Expected [K, V] tuple: " + t);
            }
            function yr(t) {
              return Ht(t.size), C(t);
            }
            function vr(t) {
              return u(t) ? n : s(t) ? i : o;
            }
            function mr(t) {
              return Object.create((u(t) ? G : s(t) ? V : X).prototype);
            }
            function br() {
              return this._iter.cacheResult
                ? (this._iter.cacheResult(),
                  (this.size = this._iter.size),
                  this)
                : $.prototype.cacheResult.call(this);
            }
            function _r(t, e) {
              return t > e ? 1 : t < e ? -1 : 0;
            }
            function wr(t) {
              var e = q(t);
              if (!e) {
                if (!Y(t))
                  throw new TypeError("Expected iterable or array-like: " + t);
                e = q(r(t));
              }
              return e;
            }
            function Sr(t, e) {
              var r,
                n = function (o) {
                  if (o instanceof n) return o;
                  if (!(this instanceof n)) return new n(o);
                  if (!r) {
                    r = !0;
                    var a = Object.keys(t);
                    Cr(i, a),
                      (i.size = a.length),
                      (i._name = e),
                      (i._keys = a),
                      (i._defaultValues = t);
                  }
                  this._map = qt(o);
                },
                i = (n.prototype = Object.create(Or));
              return (i.constructor = n), n;
            }
            e(Ue, qt),
              (Ue.of = function () {
                return this(arguments);
              }),
              (Ue.prototype.toString = function () {
                return this.__toString("OrderedMap {", "}");
              }),
              (Ue.prototype.get = function (t, e) {
                var r = this._map.get(t);
                return void 0 !== r ? this._list.get(r)[1] : e;
              }),
              (Ue.prototype.clear = function () {
                return 0 === this.size
                  ? this
                  : this.__ownerID
                  ? ((this.size = 0),
                    this._map.clear(),
                    this._list.clear(),
                    this)
                  : We();
              }),
              (Ue.prototype.set = function (t, e) {
                return Ye(this, t, e);
              }),
              (Ue.prototype.remove = function (t) {
                return Ye(this, t, b);
              }),
              (Ue.prototype.wasAltered = function () {
                return this._map.wasAltered() || this._list.wasAltered();
              }),
              (Ue.prototype.__iterate = function (t, e) {
                var r = this;
                return this._list.__iterate(function (e) {
                  return e && t(e[1], e[0], r);
                }, e);
              }),
              (Ue.prototype.__iterator = function (t, e) {
                return this._list.fromEntrySeq().__iterator(t, e);
              }),
              (Ue.prototype.__ensureOwner = function (t) {
                if (t === this.__ownerID) return this;
                var e = this._map.__ensureOwner(t),
                  r = this._list.__ensureOwner(t);
                return t
                  ? qe(e, r, t, this.__hash)
                  : ((this.__ownerID = t),
                    (this._map = e),
                    (this._list = r),
                    this);
              }),
              (Ue.isOrderedMap = He),
              (Ue.prototype[d] = !0),
              (Ue.prototype[g] = Ue.prototype.remove),
              e($e, G),
              ($e.prototype.get = function (t, e) {
                return this._iter.get(t, e);
              }),
              ($e.prototype.has = function (t) {
                return this._iter.has(t);
              }),
              ($e.prototype.valueSeq = function () {
                return this._iter.valueSeq();
              }),
              ($e.prototype.reverse = function () {
                var t = this,
                  e = Qe(this, !0);
                return (
                  this._useKeys ||
                    (e.valueSeq = function () {
                      return t._iter.toSeq().reverse();
                    }),
                  e
                );
              }),
              ($e.prototype.map = function (t, e) {
                var r = this,
                  n = Ze(this, t, e);
                return (
                  this._useKeys ||
                    (n.valueSeq = function () {
                      return r._iter.toSeq().map(t, e);
                    }),
                  n
                );
              }),
              ($e.prototype.__iterate = function (t, e) {
                var r,
                  n = this;
                return this._iter.__iterate(
                  this._useKeys
                    ? function (e, r) {
                        return t(e, r, n);
                      }
                    : ((r = e ? yr(this) : 0),
                      function (i) {
                        return t(i, e ? --r : r++, n);
                      }),
                  e
                );
              }),
              ($e.prototype.__iterator = function (t, e) {
                if (this._useKeys) return this._iter.__iterator(t, e);
                var r = this._iter.__iterator(L, e),
                  n = e ? yr(this) : 0;
                return new N(function () {
                  var i = r.next();
                  return i.done ? i : F(t, e ? --n : n++, i.value, i);
                });
              }),
              ($e.prototype[d] = !0),
              e(Ge, V),
              (Ge.prototype.includes = function (t) {
                return this._iter.includes(t);
              }),
              (Ge.prototype.__iterate = function (t, e) {
                var r = this,
                  n = 0;
                return this._iter.__iterate(function (e) {
                  return t(e, n++, r);
                }, e);
              }),
              (Ge.prototype.__iterator = function (t, e) {
                var r = this._iter.__iterator(L, e),
                  n = 0;
                return new N(function () {
                  var e = r.next();
                  return e.done ? e : F(t, n++, e.value, e);
                });
              }),
              e(Ve, X),
              (Ve.prototype.has = function (t) {
                return this._iter.includes(t);
              }),
              (Ve.prototype.__iterate = function (t, e) {
                var r = this;
                return this._iter.__iterate(function (e) {
                  return t(e, e, r);
                }, e);
              }),
              (Ve.prototype.__iterator = function (t, e) {
                var r = this._iter.__iterator(L, e);
                return new N(function () {
                  var e = r.next();
                  return e.done ? e : F(t, e.value, e.value, e);
                });
              }),
              e(Xe, G),
              (Xe.prototype.entrySeq = function () {
                return this._iter.toSeq();
              }),
              (Xe.prototype.__iterate = function (t, e) {
                var r = this;
                return this._iter.__iterate(function (e) {
                  if (e) {
                    gr(e);
                    var n = a(e);
                    return t(n ? e.get(1) : e[1], n ? e.get(0) : e[0], r);
                  }
                }, e);
              }),
              (Xe.prototype.__iterator = function (t, e) {
                var r = this._iter.__iterator(L, e);
                return new N(function () {
                  for (;;) {
                    var e = r.next();
                    if (e.done) return e;
                    var n = e.value;
                    if (n) {
                      gr(n);
                      var i = a(n);
                      return F(t, i ? n.get(0) : n[0], i ? n.get(1) : n[1], e);
                    }
                  }
                });
              }),
              (Ge.prototype.cacheResult =
                $e.prototype.cacheResult =
                Ve.prototype.cacheResult =
                Xe.prototype.cacheResult =
                  br),
              e(Sr, Ot),
              (Sr.prototype.toString = function () {
                return this.__toString(Er(this) + " {", "}");
              }),
              (Sr.prototype.has = function (t) {
                return this._defaultValues.hasOwnProperty(t);
              }),
              (Sr.prototype.get = function (t, e) {
                if (!this.has(t)) return e;
                var r = this._defaultValues[t];
                return this._map ? this._map.get(t, r) : r;
              }),
              (Sr.prototype.clear = function () {
                if (this.__ownerID) return this._map && this._map.clear(), this;
                var t = this.constructor;
                return t._empty || (t._empty = kr(this, ie()));
              }),
              (Sr.prototype.set = function (t, e) {
                if (!this.has(t))
                  throw new Error(
                    'Cannot set unknown key "' + t + '" on ' + Er(this)
                  );
                if (
                  this._map &&
                  !this._map.has(t) &&
                  e === this._defaultValues[t]
                )
                  return this;
                var r = this._map && this._map.set(t, e);
                return this.__ownerID || r === this._map ? this : kr(this, r);
              }),
              (Sr.prototype.remove = function (t) {
                if (!this.has(t)) return this;
                var e = this._map && this._map.remove(t);
                return this.__ownerID || e === this._map ? this : kr(this, e);
              }),
              (Sr.prototype.wasAltered = function () {
                return this._map.wasAltered();
              }),
              (Sr.prototype.__iterator = function (t, e) {
                var r = this;
                return n(this._defaultValues)
                  .map(function (t, e) {
                    return r.get(e);
                  })
                  .__iterator(t, e);
              }),
              (Sr.prototype.__iterate = function (t, e) {
                var r = this;
                return n(this._defaultValues)
                  .map(function (t, e) {
                    return r.get(e);
                  })
                  .__iterate(t, e);
              }),
              (Sr.prototype.__ensureOwner = function (t) {
                if (t === this.__ownerID) return this;
                var e = this._map && this._map.__ensureOwner(t);
                return t
                  ? kr(this, e, t)
                  : ((this.__ownerID = t), (this._map = e), this);
              });
            var Or = Sr.prototype;
            function kr(t, e, r) {
              var n = Object.create(Object.getPrototypeOf(t));
              return (n._map = e), (n.__ownerID = r), n;
            }
            function Er(t) {
              return t._name || t.constructor.name || "Record";
            }
            function Cr(t, e) {
              try {
                e.forEach(xr.bind(void 0, t));
              } catch (t) {}
            }
            function xr(t, e) {
              Object.defineProperty(t, e, {
                get: function () {
                  return this.get(e);
                },
                set: function (t) {
                  _t(this.__ownerID, "Cannot set on an immutable record."),
                    this.set(e, t);
                },
              });
            }
            function Dr(t) {
              return null == t
                ? Br()
                : Tr(t) && !l(t)
                ? t
                : Br().withMutations(function (e) {
                    var r = o(t);
                    Ht(r.size),
                      r.forEach(function (t) {
                        return e.add(t);
                      });
                  });
            }
            function Tr(t) {
              return !(!t || !t[Ir]);
            }
            (Or[g] = Or.remove),
              (Or.deleteIn = Or.removeIn = Gt.removeIn),
              (Or.merge = Gt.merge),
              (Or.mergeWith = Gt.mergeWith),
              (Or.mergeIn = Gt.mergeIn),
              (Or.mergeDeep = Gt.mergeDeep),
              (Or.mergeDeepWith = Gt.mergeDeepWith),
              (Or.mergeDeepIn = Gt.mergeDeepIn),
              (Or.setIn = Gt.setIn),
              (Or.update = Gt.update),
              (Or.updateIn = Gt.updateIn),
              (Or.withMutations = Gt.withMutations),
              (Or.asMutable = Gt.asMutable),
              (Or.asImmutable = Gt.asImmutable),
              e(Dr, Et),
              (Dr.of = function () {
                return this(arguments);
              }),
              (Dr.fromKeys = function (t) {
                return this(n(t).keySeq());
              }),
              (Dr.prototype.toString = function () {
                return this.__toString("Set {", "}");
              }),
              (Dr.prototype.has = function (t) {
                return this._map.has(t);
              }),
              (Dr.prototype.add = function (t) {
                return Ar(this, this._map.set(t, !0));
              }),
              (Dr.prototype.remove = function (t) {
                return Ar(this, this._map.remove(t));
              }),
              (Dr.prototype.clear = function () {
                return Ar(this, this._map.clear());
              }),
              (Dr.prototype.union = function () {
                var e = t.call(arguments, 0);
                return 0 ===
                  (e = e.filter(function (t) {
                    return 0 !== t.size;
                  })).length
                  ? this
                  : 0 !== this.size || this.__ownerID || 1 !== e.length
                  ? this.withMutations(function (t) {
                      for (var r = 0; r < e.length; r++)
                        o(e[r]).forEach(function (e) {
                          return t.add(e);
                        });
                    })
                  : this.constructor(e[0]);
              }),
              (Dr.prototype.intersect = function () {
                var e = t.call(arguments, 0);
                if (0 === e.length) return this;
                e = e.map(function (t) {
                  return o(t);
                });
                var r = this;
                return this.withMutations(function (t) {
                  r.forEach(function (r) {
                    e.every(function (t) {
                      return t.includes(r);
                    }) || t.remove(r);
                  });
                });
              }),
              (Dr.prototype.subtract = function () {
                var e = t.call(arguments, 0);
                if (0 === e.length) return this;
                e = e.map(function (t) {
                  return o(t);
                });
                var r = this;
                return this.withMutations(function (t) {
                  r.forEach(function (r) {
                    e.some(function (t) {
                      return t.includes(r);
                    }) && t.remove(r);
                  });
                });
              }),
              (Dr.prototype.merge = function () {
                return this.union.apply(this, arguments);
              }),
              (Dr.prototype.mergeWith = function (e) {
                var r = t.call(arguments, 1);
                return this.union.apply(this, r);
              }),
              (Dr.prototype.sort = function (t) {
                return Pr(lr(this, t));
              }),
              (Dr.prototype.sortBy = function (t, e) {
                return Pr(lr(this, e, t));
              }),
              (Dr.prototype.wasAltered = function () {
                return this._map.wasAltered();
              }),
              (Dr.prototype.__iterate = function (t, e) {
                var r = this;
                return this._map.__iterate(function (e, n) {
                  return t(n, n, r);
                }, e);
              }),
              (Dr.prototype.__iterator = function (t, e) {
                return this._map
                  .map(function (t, e) {
                    return e;
                  })
                  .__iterator(t, e);
              }),
              (Dr.prototype.__ensureOwner = function (t) {
                if (t === this.__ownerID) return this;
                var e = this._map.__ensureOwner(t);
                return t
                  ? this.__make(e, t)
                  : ((this.__ownerID = t), (this._map = e), this);
              }),
              (Dr.isSet = Tr);
            var Mr,
              Ir = "@@__IMMUTABLE_SET__@@",
              Kr = Dr.prototype;
            function Ar(t, e) {
              return t.__ownerID
                ? ((t.size = e.size), (t._map = e), t)
                : e === t._map
                ? t
                : 0 === e.size
                ? t.__empty()
                : t.__make(e);
            }
            function Lr(t, e) {
              var r = Object.create(Kr);
              return (
                (r.size = t ? t.size : 0), (r._map = t), (r.__ownerID = e), r
              );
            }
            function Br() {
              return Mr || (Mr = Lr(ie()));
            }
            function Pr(t) {
              return null == t
                ? zr()
                : jr(t)
                ? t
                : zr().withMutations(function (e) {
                    var r = o(t);
                    Ht(r.size),
                      r.forEach(function (t) {
                        return e.add(t);
                      });
                  });
            }
            function jr(t) {
              return Tr(t) && l(t);
            }
            (Kr[Ir] = !0),
              (Kr[g] = Kr.remove),
              (Kr.mergeDeep = Kr.merge),
              (Kr.mergeDeepWith = Kr.mergeWith),
              (Kr.withMutations = Gt.withMutations),
              (Kr.asMutable = Gt.asMutable),
              (Kr.asImmutable = Gt.asImmutable),
              (Kr.__empty = Br),
              (Kr.__make = Lr),
              e(Pr, Dr),
              (Pr.of = function () {
                return this(arguments);
              }),
              (Pr.fromKeys = function (t) {
                return this(n(t).keySeq());
              }),
              (Pr.prototype.toString = function () {
                return this.__toString("OrderedSet {", "}");
              }),
              (Pr.isOrderedSet = jr);
            var Rr,
              Nr = Pr.prototype;
            function Fr(t, e) {
              var r = Object.create(Nr);
              return (
                (r.size = t ? t.size : 0), (r._map = t), (r.__ownerID = e), r
              );
            }
            function zr() {
              return Rr || (Rr = Fr(We()));
            }
            function Ur(t) {
              return null == t ? Gr() : Hr(t) ? t : Gr().unshiftAll(t);
            }
            function Hr(t) {
              return !(!t || !t[Wr]);
            }
            (Nr[d] = !0),
              (Nr.__empty = zr),
              (Nr.__make = Fr),
              e(Ur, kt),
              (Ur.of = function () {
                return this(arguments);
              }),
              (Ur.prototype.toString = function () {
                return this.__toString("Stack [", "]");
              }),
              (Ur.prototype.get = function (t, e) {
                var r = this._head;
                for (t = x(this, t); r && t--; ) r = r.next;
                return r ? r.value : e;
              }),
              (Ur.prototype.peek = function () {
                return this._head && this._head.value;
              }),
              (Ur.prototype.push = function () {
                if (0 === arguments.length) return this;
                for (
                  var t = this.size + arguments.length,
                    e = this._head,
                    r = arguments.length - 1;
                  r >= 0;
                  r--
                )
                  e = { value: arguments[r], next: e };
                return this.__ownerID
                  ? ((this.size = t),
                    (this._head = e),
                    (this.__hash = void 0),
                    (this.__altered = !0),
                    this)
                  : $r(t, e);
              }),
              (Ur.prototype.pushAll = function (t) {
                if (0 === (t = i(t)).size) return this;
                Ht(t.size);
                var e = this.size,
                  r = this._head;
                return (
                  t.reverse().forEach(function (t) {
                    e++, (r = { value: t, next: r });
                  }),
                  this.__ownerID
                    ? ((this.size = e),
                      (this._head = r),
                      (this.__hash = void 0),
                      (this.__altered = !0),
                      this)
                    : $r(e, r)
                );
              }),
              (Ur.prototype.pop = function () {
                return this.slice(1);
              }),
              (Ur.prototype.unshift = function () {
                return this.push.apply(this, arguments);
              }),
              (Ur.prototype.unshiftAll = function (t) {
                return this.pushAll(t);
              }),
              (Ur.prototype.shift = function () {
                return this.pop.apply(this, arguments);
              }),
              (Ur.prototype.clear = function () {
                return 0 === this.size
                  ? this
                  : this.__ownerID
                  ? ((this.size = 0),
                    (this._head = void 0),
                    (this.__hash = void 0),
                    (this.__altered = !0),
                    this)
                  : Gr();
              }),
              (Ur.prototype.slice = function (t, e) {
                if (T(t, e, this.size)) return this;
                var r = M(t, this.size);
                if (I(e, this.size) !== this.size)
                  return kt.prototype.slice.call(this, t, e);
                for (var n = this.size - r, i = this._head; r--; ) i = i.next;
                return this.__ownerID
                  ? ((this.size = n),
                    (this._head = i),
                    (this.__hash = void 0),
                    (this.__altered = !0),
                    this)
                  : $r(n, i);
              }),
              (Ur.prototype.__ensureOwner = function (t) {
                return t === this.__ownerID
                  ? this
                  : t
                  ? $r(this.size, this._head, t, this.__hash)
                  : ((this.__ownerID = t), (this.__altered = !1), this);
              }),
              (Ur.prototype.__iterate = function (t, e) {
                if (e) return this.reverse().__iterate(t);
                for (
                  var r = 0, n = this._head;
                  n && !1 !== t(n.value, r++, this);

                )
                  n = n.next;
                return r;
              }),
              (Ur.prototype.__iterator = function (t, e) {
                if (e) return this.reverse().__iterator(t);
                var r = 0,
                  n = this._head;
                return new N(function () {
                  if (n) {
                    var e = n.value;
                    return (n = n.next), F(t, r++, e);
                  }
                  return z();
                });
              }),
              (Ur.isStack = Hr);
            var qr,
              Wr = "@@__IMMUTABLE_STACK__@@",
              Yr = Ur.prototype;
            function $r(t, e, r, n) {
              var i = Object.create(Yr);
              return (
                (i.size = t),
                (i._head = e),
                (i.__ownerID = r),
                (i.__hash = n),
                (i.__altered = !1),
                i
              );
            }
            function Gr() {
              return qr || (qr = $r(0));
            }
            function Vr(t, e) {
              var r = function (r) {
                t.prototype[r] = e[r];
              };
              return (
                Object.keys(e).forEach(r),
                Object.getOwnPropertySymbols &&
                  Object.getOwnPropertySymbols(e).forEach(r),
                t
              );
            }
            (Yr[Wr] = !0),
              (Yr.withMutations = Gt.withMutations),
              (Yr.asMutable = Gt.asMutable),
              (Yr.asImmutable = Gt.asImmutable),
              (Yr.wasAltered = Gt.wasAltered),
              (r.Iterator = N),
              Vr(r, {
                toArray: function () {
                  Ht(this.size);
                  var t = new Array(this.size || 0);
                  return (
                    this.valueSeq().__iterate(function (e, r) {
                      t[r] = e;
                    }),
                    t
                  );
                },
                toIndexedSeq: function () {
                  return new Ge(this);
                },
                toJS: function () {
                  return this.toSeq()
                    .map(function (t) {
                      return t && "function" == typeof t.toJS ? t.toJS() : t;
                    })
                    .__toJS();
                },
                toJSON: function () {
                  return this.toSeq()
                    .map(function (t) {
                      return t && "function" == typeof t.toJSON
                        ? t.toJSON()
                        : t;
                    })
                    .__toJS();
                },
                toKeyedSeq: function () {
                  return new $e(this, !0);
                },
                toMap: function () {
                  return qt(this.toKeyedSeq());
                },
                toObject: function () {
                  Ht(this.size);
                  var t = {};
                  return (
                    this.__iterate(function (e, r) {
                      t[r] = e;
                    }),
                    t
                  );
                },
                toOrderedMap: function () {
                  return Ue(this.toKeyedSeq());
                },
                toOrderedSet: function () {
                  return Pr(u(this) ? this.valueSeq() : this);
                },
                toSet: function () {
                  return Dr(u(this) ? this.valueSeq() : this);
                },
                toSetSeq: function () {
                  return new Ve(this);
                },
                toSeq: function () {
                  return s(this)
                    ? this.toIndexedSeq()
                    : u(this)
                    ? this.toKeyedSeq()
                    : this.toSetSeq();
                },
                toStack: function () {
                  return Ur(u(this) ? this.valueSeq() : this);
                },
                toList: function () {
                  return ke(u(this) ? this.valueSeq() : this);
                },
                toString: function () {
                  return "[Iterable]";
                },
                __toString: function (t, e) {
                  return 0 === this.size
                    ? t + e
                    : t +
                        " " +
                        this.toSeq().map(this.__toStringMapper).join(", ") +
                        " " +
                        e;
                },
                concat: function () {
                  return dr(this, ar(this, t.call(arguments, 0)));
                },
                includes: function (t) {
                  return this.some(function (e) {
                    return vt(e, t);
                  });
                },
                entries: function () {
                  return this.__iterator(B);
                },
                every: function (t, e) {
                  Ht(this.size);
                  var r = !0;
                  return (
                    this.__iterate(function (n, i, o) {
                      if (!t.call(e, n, i, o)) return (r = !1), !1;
                    }),
                    r
                  );
                },
                filter: function (t, e) {
                  return dr(this, tr(this, t, e, !0));
                },
                find: function (t, e, r) {
                  var n = this.findEntry(t, e);
                  return n ? n[1] : r;
                },
                forEach: function (t, e) {
                  return Ht(this.size), this.__iterate(e ? t.bind(e) : t);
                },
                join: function (t) {
                  Ht(this.size), (t = void 0 !== t ? "" + t : ",");
                  var e = "",
                    r = !0;
                  return (
                    this.__iterate(function (n) {
                      r ? (r = !1) : (e += t),
                        (e += null != n ? n.toString() : "");
                    }),
                    e
                  );
                },
                keys: function () {
                  return this.__iterator(A);
                },
                map: function (t, e) {
                  return dr(this, Ze(this, t, e));
                },
                reduce: function (t, e, r) {
                  var n, i;
                  return (
                    Ht(this.size),
                    arguments.length < 2 ? (i = !0) : (n = e),
                    this.__iterate(function (e, o, a) {
                      i ? ((i = !1), (n = e)) : (n = t.call(r, n, e, o, a));
                    }),
                    n
                  );
                },
                reduceRight: function (t, e, r) {
                  var n = this.toKeyedSeq().reverse();
                  return n.reduce.apply(n, arguments);
                },
                reverse: function () {
                  return dr(this, Qe(this, !0));
                },
                slice: function (t, e) {
                  return dr(this, nr(this, t, e, !0));
                },
                some: function (t, e) {
                  return !this.every(tn(t), e);
                },
                sort: function (t) {
                  return dr(this, lr(this, t));
                },
                values: function () {
                  return this.__iterator(L);
                },
                butLast: function () {
                  return this.slice(0, -1);
                },
                isEmpty: function () {
                  return void 0 !== this.size
                    ? 0 === this.size
                    : !this.some(function () {
                        return !0;
                      });
                },
                count: function (t, e) {
                  return C(t ? this.toSeq().filter(t, e) : this);
                },
                countBy: function (t, e) {
                  return er(this, t, e);
                },
                equals: function (t) {
                  return mt(this, t);
                },
                entrySeq: function () {
                  var t = this;
                  if (t._cache) return new et(t._cache);
                  var e = t.toSeq().map(Qr).toIndexedSeq();
                  return (
                    (e.fromEntrySeq = function () {
                      return t.toSeq();
                    }),
                    e
                  );
                },
                filterNot: function (t, e) {
                  return this.filter(tn(t), e);
                },
                findEntry: function (t, e, r) {
                  var n = r;
                  return (
                    this.__iterate(function (r, i, o) {
                      if (t.call(e, r, i, o)) return (n = [i, r]), !1;
                    }),
                    n
                  );
                },
                findKey: function (t, e) {
                  var r = this.findEntry(t, e);
                  return r && r[0];
                },
                findLast: function (t, e, r) {
                  return this.toKeyedSeq().reverse().find(t, e, r);
                },
                findLastEntry: function (t, e, r) {
                  return this.toKeyedSeq().reverse().findEntry(t, e, r);
                },
                findLastKey: function (t, e) {
                  return this.toKeyedSeq().reverse().findKey(t, e);
                },
                first: function () {
                  return this.find(D);
                },
                flatMap: function (t, e) {
                  return dr(this, sr(this, t, e));
                },
                flatten: function (t) {
                  return dr(this, ur(this, t, !0));
                },
                fromEntrySeq: function () {
                  return new Xe(this);
                },
                get: function (t, e) {
                  return this.find(
                    function (e, r) {
                      return vt(r, t);
                    },
                    void 0,
                    e
                  );
                },
                getIn: function (t, e) {
                  for (var r, n = this, i = wr(t); !(r = i.next()).done; ) {
                    var o = r.value;
                    if ((n = n && n.get ? n.get(o, b) : b) === b) return e;
                  }
                  return n;
                },
                groupBy: function (t, e) {
                  return rr(this, t, e);
                },
                has: function (t) {
                  return this.get(t, b) !== b;
                },
                hasIn: function (t) {
                  return this.getIn(t, b) !== b;
                },
                isSubset: function (t) {
                  return (
                    (t = "function" == typeof t.includes ? t : r(t)),
                    this.every(function (e) {
                      return t.includes(e);
                    })
                  );
                },
                isSuperset: function (t) {
                  return (t =
                    "function" == typeof t.isSubset ? t : r(t)).isSubset(this);
                },
                keyOf: function (t) {
                  return this.findKey(function (e) {
                    return vt(e, t);
                  });
                },
                keySeq: function () {
                  return this.toSeq().map(Zr).toIndexedSeq();
                },
                last: function () {
                  return this.toSeq().reverse().first();
                },
                lastKeyOf: function (t) {
                  return this.toKeyedSeq().reverse().keyOf(t);
                },
                max: function (t) {
                  return fr(this, t);
                },
                maxBy: function (t, e) {
                  return fr(this, e, t);
                },
                min: function (t) {
                  return fr(this, t ? en(t) : on);
                },
                minBy: function (t, e) {
                  return fr(this, e ? en(e) : on, t);
                },
                rest: function () {
                  return this.slice(1);
                },
                skip: function (t) {
                  return this.slice(Math.max(0, t));
                },
                skipLast: function (t) {
                  return dr(this, this.toSeq().reverse().skip(t).reverse());
                },
                skipWhile: function (t, e) {
                  return dr(this, or(this, t, e, !0));
                },
                skipUntil: function (t, e) {
                  return this.skipWhile(tn(t), e);
                },
                sortBy: function (t, e) {
                  return dr(this, lr(this, e, t));
                },
                take: function (t) {
                  return this.slice(0, Math.max(0, t));
                },
                takeLast: function (t) {
                  return dr(this, this.toSeq().reverse().take(t).reverse());
                },
                takeWhile: function (t, e) {
                  return dr(this, ir(this, t, e));
                },
                takeUntil: function (t, e) {
                  return this.takeWhile(tn(t), e);
                },
                valueSeq: function () {
                  return this.toIndexedSeq();
                },
                hashCode: function () {
                  return this.__hash || (this.__hash = an(this));
                },
              });
            var Xr = r.prototype;
            (Xr[f] = !0),
              (Xr[R] = Xr.values),
              (Xr.__toJS = Xr.toArray),
              (Xr.__toStringMapper = rn),
              (Xr.inspect = Xr.toSource =
                function () {
                  return this.toString();
                }),
              (Xr.chain = Xr.flatMap),
              (Xr.contains = Xr.includes),
              Vr(n, {
                flip: function () {
                  return dr(this, Je(this));
                },
                mapEntries: function (t, e) {
                  var r = this,
                    n = 0;
                  return dr(
                    this,
                    this.toSeq()
                      .map(function (i, o) {
                        return t.call(e, [o, i], n++, r);
                      })
                      .fromEntrySeq()
                  );
                },
                mapKeys: function (t, e) {
                  var r = this;
                  return dr(
                    this,
                    this.toSeq()
                      .flip()
                      .map(function (n, i) {
                        return t.call(e, n, i, r);
                      })
                      .flip()
                  );
                },
              });
            var Jr = n.prototype;
            function Zr(t, e) {
              return e;
            }
            function Qr(t, e) {
              return [e, t];
            }
            function tn(t) {
              return function () {
                return !t.apply(this, arguments);
              };
            }
            function en(t) {
              return function () {
                return -t.apply(this, arguments);
              };
            }
            function rn(t) {
              return "string" == typeof t ? JSON.stringify(t) : String(t);
            }
            function nn() {
              return E(arguments);
            }
            function on(t, e) {
              return t < e ? 1 : t > e ? -1 : 0;
            }
            function an(t) {
              if (t.size === 1 / 0) return 0;
              var e = l(t),
                r = u(t),
                n = e ? 1 : 0;
              return un(
                t.__iterate(
                  r
                    ? e
                      ? function (t, e) {
                          n = (31 * n + sn(Dt(t), Dt(e))) | 0;
                        }
                      : function (t, e) {
                          n = (n + sn(Dt(t), Dt(e))) | 0;
                        }
                    : e
                    ? function (t) {
                        n = (31 * n + Dt(t)) | 0;
                      }
                    : function (t) {
                        n = (n + Dt(t)) | 0;
                      }
                ),
                n
              );
            }
            function un(t, e) {
              return (
                (e = Ct(e, 3432918353)),
                (e = Ct((e << 15) | (e >>> -15), 461845907)),
                (e = Ct((e << 13) | (e >>> -13), 5)),
                (e = Ct(
                  (e = ((e + 3864292196) | 0) ^ t) ^ (e >>> 16),
                  2246822507
                )),
                (e = xt((e = Ct(e ^ (e >>> 13), 3266489909)) ^ (e >>> 16)))
              );
            }
            function sn(t, e) {
              return (t ^ (e + 2654435769 + (t << 6) + (t >> 2))) | 0;
            }
            return (
              (Jr[p] = !0),
              (Jr[R] = Xr.entries),
              (Jr.__toJS = Xr.toObject),
              (Jr.__toStringMapper = function (t, e) {
                return JSON.stringify(e) + ": " + rn(t);
              }),
              Vr(i, {
                toKeyedSeq: function () {
                  return new $e(this, !1);
                },
                filter: function (t, e) {
                  return dr(this, tr(this, t, e, !1));
                },
                findIndex: function (t, e) {
                  var r = this.findEntry(t, e);
                  return r ? r[0] : -1;
                },
                indexOf: function (t) {
                  var e = this.keyOf(t);
                  return void 0 === e ? -1 : e;
                },
                lastIndexOf: function (t) {
                  var e = this.lastKeyOf(t);
                  return void 0 === e ? -1 : e;
                },
                reverse: function () {
                  return dr(this, Qe(this, !1));
                },
                slice: function (t, e) {
                  return dr(this, nr(this, t, e, !1));
                },
                splice: function (t, e) {
                  var r = arguments.length;
                  if (((e = Math.max(0 | e, 0)), 0 === r || (2 === r && !e)))
                    return this;
                  t = M(t, t < 0 ? this.count() : this.size);
                  var n = this.slice(0, t);
                  return dr(
                    this,
                    1 === r ? n : n.concat(E(arguments, 2), this.slice(t + e))
                  );
                },
                findLastIndex: function (t, e) {
                  var r = this.findLastEntry(t, e);
                  return r ? r[0] : -1;
                },
                first: function () {
                  return this.get(0);
                },
                flatten: function (t) {
                  return dr(this, ur(this, t, !1));
                },
                get: function (t, e) {
                  return (t = x(this, t)) < 0 ||
                    this.size === 1 / 0 ||
                    (void 0 !== this.size && t > this.size)
                    ? e
                    : this.find(
                        function (e, r) {
                          return r === t;
                        },
                        void 0,
                        e
                      );
                },
                has: function (t) {
                  return (
                    (t = x(this, t)) >= 0 &&
                    (void 0 !== this.size
                      ? this.size === 1 / 0 || t < this.size
                      : -1 !== this.indexOf(t))
                  );
                },
                interpose: function (t) {
                  return dr(this, cr(this, t));
                },
                interleave: function () {
                  var t = [this].concat(E(arguments)),
                    e = hr(this.toSeq(), V.of, t),
                    r = e.flatten(!0);
                  return e.size && (r.size = e.size * t.length), dr(this, r);
                },
                keySeq: function () {
                  return wt(0, this.size);
                },
                last: function () {
                  return this.get(-1);
                },
                skipWhile: function (t, e) {
                  return dr(this, or(this, t, e, !1));
                },
                zip: function () {
                  return dr(this, hr(this, nn, [this].concat(E(arguments))));
                },
                zipWith: function (t) {
                  var e = E(arguments);
                  return (e[0] = this), dr(this, hr(this, t, e));
                },
              }),
              (i.prototype[h] = !0),
              (i.prototype[d] = !0),
              Vr(o, {
                get: function (t, e) {
                  return this.has(t) ? t : e;
                },
                includes: function (t) {
                  return this.has(t);
                },
                keySeq: function () {
                  return this.valueSeq();
                },
              }),
              (o.prototype.has = Xr.includes),
              (o.prototype.contains = o.prototype.includes),
              Vr(G, n.prototype),
              Vr(V, i.prototype),
              Vr(X, o.prototype),
              Vr(Ot, n.prototype),
              Vr(kt, i.prototype),
              Vr(Et, o.prototype),
              {
                Iterable: r,
                Seq: $,
                Collection: St,
                Map: qt,
                OrderedMap: Ue,
                List: ke,
                Stack: Ur,
                Set: Dr,
                OrderedSet: Pr,
                Record: Sr,
                Range: wt,
                Repeat: bt,
                is: vt,
                fromJS: ht,
              }
            );
          })());
      }),
      a = o.OrderedMap,
      u = {
        createFromArray: function (t) {
          return a(
            t.map(function (t) {
              return [t.getKey(), t];
            })
          );
        },
      };
    function s(t, e) {
      return (
        (s = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            }),
        s(t, e)
      );
    }
    var c = o.Map,
      l = o.OrderedSet,
      f = o.Record,
      p = l(),
      h = { style: p, entity: null },
      d = (function (t) {
        var e, r;
        function n() {
          return t.apply(this, arguments) || this;
        }
        (r = t),
          ((e = n).prototype = Object.create(r.prototype)),
          (e.prototype.constructor = e),
          s(e, r);
        var i = n.prototype;
        return (
          (i.getStyle = function () {
            return this.get("style");
          }),
          (i.getEntity = function () {
            return this.get("entity");
          }),
          (i.hasStyle = function (t) {
            return this.getStyle().includes(t);
          }),
          (n.applyStyle = function (t, e) {
            var r = t.set("style", t.getStyle().add(e));
            return n.create(r);
          }),
          (n.removeStyle = function (t, e) {
            var r = t.set("style", t.getStyle().remove(e));
            return n.create(r);
          }),
          (n.applyEntity = function (t, e) {
            var r = t.getEntity() === e ? t : t.set("entity", e);
            return n.create(r);
          }),
          (n.create = function (t) {
            if (!t) return g;
            var e = c({ style: p, entity: null }).merge(t),
              r = y.get(e);
            if (r) return r;
            var i = new n(e);
            return (y = y.set(e, i)), i;
          }),
          n
        );
      })(f(h)),
      g = new d(),
      y = c([[c(h), g]]);
    d.EMPTY = g;
    var v = d;
    var m = function (t, e, r, n) {
      if (t.size) {
        var i = 0;
        t.reduce(function (t, o, a) {
          return e(t, o) || (r(t) && n(i, a), (i = a)), o;
        }),
          r(t.last()) && n(i, t.count());
      }
    };
    function b(t, e) {
      return (
        (b = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            }),
        b(t, e)
      );
    }
    var _ = o.List,
      w = o.Map,
      S = o.OrderedSet,
      O = o.Record,
      k = o.Repeat,
      E = S(),
      C = O({
        key: "",
        type: "unstyled",
        text: "",
        characterList: _(),
        depth: 0,
        data: w(),
      });
    function x(t, e) {
      return t.getStyle() === e.getStyle();
    }
    function D(t, e) {
      return t.getEntity() === e.getEntity();
    }
    var T = (function (t) {
      var e, r;
      function n(e) {
        return (
          t.call(
            this,
            (function (t) {
              if (!t) return t;
              var e = t.characterList,
                r = t.text;
              return r && !e && (t.characterList = _(k(v.EMPTY, r.length))), t;
            })(e)
          ) || this
        );
      }
      (r = t),
        ((e = n).prototype = Object.create(r.prototype)),
        (e.prototype.constructor = e),
        b(e, r);
      var i = n.prototype;
      return (
        (i.getKey = function () {
          return this.get("key");
        }),
        (i.getType = function () {
          return this.get("type");
        }),
        (i.getText = function () {
          return this.get("text");
        }),
        (i.getCharacterList = function () {
          return this.get("characterList");
        }),
        (i.getLength = function () {
          return this.getText().length;
        }),
        (i.getDepth = function () {
          return this.get("depth");
        }),
        (i.getData = function () {
          return this.get("data");
        }),
        (i.getInlineStyleAt = function (t) {
          var e = this.getCharacterList().get(t);
          return e ? e.getStyle() : E;
        }),
        (i.getEntityAt = function (t) {
          var e = this.getCharacterList().get(t);
          return e ? e.getEntity() : null;
        }),
        (i.findStyleRanges = function (t, e) {
          m(this.getCharacterList(), x, t, e);
        }),
        (i.findEntityRanges = function (t, e) {
          m(this.getCharacterList(), D, t, e);
        }),
        n
      );
    })(C);
    function M(t, e) {
      return (
        (M = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            }),
        M(t, e)
      );
    }
    var I = o.List,
      K = o.Map,
      A = o.OrderedSet,
      L = o.Record,
      B = o.Repeat,
      P = A(),
      j = {
        parent: null,
        characterList: I(),
        data: K(),
        depth: 0,
        key: "",
        text: "",
        type: "unstyled",
        children: I(),
        prevSibling: null,
        nextSibling: null,
      },
      R = function (t, e) {
        return t.getStyle() === e.getStyle();
      },
      N = function (t, e) {
        return t.getEntity() === e.getEntity();
      },
      F = function (t) {
        if (!t) return t;
        var e = t.characterList,
          r = t.text;
        return r && !e && (t.characterList = I(B(v.EMPTY, r.length))), t;
      },
      z = (function (t) {
        var e, r;
        function n() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : j;
          return t.call(this, F(e)) || this;
        }
        (r = t),
          ((e = n).prototype = Object.create(r.prototype)),
          (e.prototype.constructor = e),
          M(e, r);
        var i = n.prototype;
        return (
          (i.getKey = function () {
            return this.get("key");
          }),
          (i.getType = function () {
            return this.get("type");
          }),
          (i.getText = function () {
            return this.get("text");
          }),
          (i.getCharacterList = function () {
            return this.get("characterList");
          }),
          (i.getLength = function () {
            return this.getText().length;
          }),
          (i.getDepth = function () {
            return this.get("depth");
          }),
          (i.getData = function () {
            return this.get("data");
          }),
          (i.getInlineStyleAt = function (t) {
            var e = this.getCharacterList().get(t);
            return e ? e.getStyle() : P;
          }),
          (i.getEntityAt = function (t) {
            var e = this.getCharacterList().get(t);
            return e ? e.getEntity() : null;
          }),
          (i.getChildKeys = function () {
            return this.get("children");
          }),
          (i.getParentKey = function () {
            return this.get("parent");
          }),
          (i.getPrevSiblingKey = function () {
            return this.get("prevSibling");
          }),
          (i.getNextSiblingKey = function () {
            return this.get("nextSibling");
          }),
          (i.findStyleRanges = function (t, e) {
            m(this.getCharacterList(), R, t, e);
          }),
          (i.findEntityRanges = function (t, e) {
            m(this.getCharacterList(), N, t, e);
          }),
          n
        );
      })(L(j)),
      U = z,
      H = o.Map;
    function q(t, e, r, n) {
      var i = t.getBlockMap(),
        o = e.getStartKey(),
        a = e.getStartOffset(),
        u = e.getEndKey(),
        s = e.getEndOffset(),
        c = i
          .skipUntil(function (t, e) {
            return e === o;
          })
          .takeUntil(function (t, e) {
            return e === u;
          })
          .concat(H([[u, i.get(u)]]))
          .map(function (t, e) {
            var i, c;
            o === u
              ? ((i = a), (c = s))
              : ((i = e === o ? a : 0), (c = e === u ? s : t.getLength()));
            for (var l, f = t.getCharacterList(); i < c; )
              (l = f.get(i)),
                (f = f.set(i, n ? v.applyStyle(l, r) : v.removeStyle(l, r))),
                i++;
            return t.set("characterList", f);
          });
      return t.merge({
        blockMap: i.merge(c),
        selectionBefore: e,
        selectionAfter: e,
      });
    }
    var W = {
      add: function (t, e, r) {
        return q(t, e, r, !0);
      },
      remove: function (t, e, r) {
        return q(t, e, r, !1);
      },
    };
    var Y = function (t, e, r, n) {
      for (var i = t.getCharacterList(); e < r; )
        (i = i.set(e, v.applyEntity(i.get(e), n))), e++;
      return t.set("characterList", i);
    };
    var $ = function (t, e, r) {
        var n = t.getBlockMap(),
          i = e.getStartKey(),
          a = e.getStartOffset(),
          u = e.getEndKey(),
          s = e.getEndOffset(),
          c = n
            .skipUntil(function (t, e) {
              return e === i;
            })
            .takeUntil(function (t, e) {
              return e === u;
            })
            .toOrderedMap()
            .merge(o.OrderedMap([[u, n.get(u)]]))
            .map(function (t, e) {
              var n = e === i ? a : 0,
                o = e === u ? s : t.getLength();
              return Y(t, n, o, r);
            });
        return t.merge({
          blockMap: n.merge(c),
          selectionBefore: e,
          selectionAfter: e,
        });
      },
      G = {
        getRemovalRange: function (t, e, r, n, i) {
          var o = r.split(" ");
          o = o.map(function (t, e) {
            if ("forward" === i) {
              if (e > 0) return " " + t;
            } else if (e < o.length - 1) return t + " ";
            return t;
          });
          for (var a, u = n, s = null, c = null, l = 0; l < o.length; l++) {
            if (t < (a = u + o[l].length) && u < e)
              null !== s || (s = u), (c = a);
            else if (null !== s) break;
            u = a;
          }
          var f = n + r.length,
            p = s === n,
            h = c === f;
          return (
            ((!p && h) || (p && !h)) &&
              ("forward" === i ? c !== f && c++ : s !== n && s--),
            { start: s, end: c }
          );
        },
      },
      V = function (t) {
        if (void 0 === t)
          throw new Error("invariant(...): Second argument must be a string.");
      };
    var X = function (t, e) {
      for (
        var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2;
        i < r;
        i++
      )
        n[i - 2] = arguments[i];
      if ((V(e), !t)) {
        var o;
        if (void 0 === e)
          o = new Error(
            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
          );
        else {
          var a = 0;
          (o = new Error(
            e.replace(/%s/g, function () {
              return String(n[a++]);
            })
          )).name = "Invariant Violation";
        }
        throw ((o.framesToPop = 1), o);
      }
    };
    var J = function (t, e) {
      var r = [];
      return (
        t.findEntityRanges(
          function (t) {
            return t.getEntity() === e;
          },
          function (t, e) {
            r.push({ start: t, end: e });
          }
        ),
        r.length || X(!1),
        r
      );
    };
    function Z(t, e, r, n, i, o, a) {
      var u = r.getStartOffset(),
        s = r.getEndOffset(),
        c = t.__get(i).getMutability(),
        l = a ? u : s;
      if ("MUTABLE" === c) return r;
      var f = J(e, i).filter(function (t) {
        return l <= t.end && l >= t.start;
      });
      1 != f.length && X(!1);
      var p = f[0];
      if ("IMMUTABLE" === c)
        return r.merge({
          anchorOffset: p.start,
          focusOffset: p.end,
          isBackward: !1,
        });
      o || (a ? (s = p.end) : (u = p.start));
      var h = G.getRemovalRange(
        u,
        s,
        e.getText().slice(p.start, p.end),
        p.start,
        n
      );
      return r.merge({
        anchorOffset: h.start,
        focusOffset: h.end,
        isBackward: !1,
      });
    }
    var Q = function (t, e, r, n, i) {
        var o = n.getStartOffset(),
          a = n.getEndOffset(),
          u = e.getEntityAt(o),
          s = r.getEntityAt(a - 1);
        if (!u && !s) return n;
        var c = n;
        if (u && u === s) c = Z(t, e, c, i, u, !0, !0);
        else if (u && s) {
          var l = Z(t, e, c, i, u, !1, !0),
            f = Z(t, r, c, i, s, !1, !1);
          c = c.merge({
            anchorOffset: l.getAnchorOffset(),
            focusOffset: f.getFocusOffset(),
            isBackward: !1,
          });
        } else if (u) {
          var p = Z(t, e, c, i, u, !1, !0);
          c = c.merge({ anchorOffset: p.getStartOffset(), isBackward: !1 });
        } else if (s) {
          var h = Z(t, r, c, i, s, !1, !1);
          c = c.merge({ focusOffset: h.getEndOffset(), isBackward: !1 });
        }
        return c;
      },
      tt = {},
      et = Math.pow(2, 24);
    var rt = function () {
        for (var t; void 0 === t || tt.hasOwnProperty(t) || !isNaN(+t); )
          t = Math.floor(Math.random() * et).toString(32);
        return (tt[t] = !0), t;
      },
      nt = o.OrderedMap,
      it = function (t) {
        return t.first() instanceof U
          ? (function (t) {
              var e,
                r = {};
              return nt(
                t
                  .withMutations(function (t) {
                    t.forEach(function (n, i) {
                      var o = n.getKey(),
                        a = n.getNextSiblingKey(),
                        u = n.getPrevSiblingKey(),
                        s = n.getChildKeys(),
                        c = n.getParentKey(),
                        l = rt();
                      if (
                        ((r[o] = l),
                        a &&
                          (t.get(a)
                            ? t.setIn([a, "prevSibling"], l)
                            : t.setIn([o, "nextSibling"], null)),
                        u &&
                          (t.get(u)
                            ? t.setIn([u, "nextSibling"], l)
                            : t.setIn([o, "prevSibling"], null)),
                        c && t.get(c))
                      ) {
                        var f = t.get(c).getChildKeys();
                        t.setIn(
                          [c, "children"],
                          f.set(f.indexOf(n.getKey()), l)
                        );
                      } else t.setIn([o, "parent"], null), e && (t.setIn([e.getKey(), "nextSibling"], l), t.setIn([o, "prevSibling"], r[e.getKey()])), (e = t.get(o));
                      s.forEach(function (e) {
                        t.get(e)
                          ? t.setIn([e, "parent"], l)
                          : t.setIn(
                              [o, "children"],
                              n.getChildKeys().filter(function (t) {
                                return t !== e;
                              })
                            );
                      });
                    });
                  })
                  .toArray()
                  .map(function (t) {
                    return [r[t.getKey()], t.set("key", r[t.getKey()])];
                  })
              );
            })(t)
          : (function (t) {
              return nt(
                t.toArray().map(function (t) {
                  var e = rt();
                  return [e, t.set("key", e)];
                })
              );
            })(t);
      };
    function ot(t, e, r) {
      var n = e.getCharacterList(),
        i = r > 0 ? n.get(r - 1) : void 0,
        o = r < n.count() ? n.get(r) : void 0,
        a = i ? i.getEntity() : void 0,
        u = o ? o.getEntity() : void 0;
      if (u && u === a && "MUTABLE" !== t.__get(u).getMutability()) {
        for (
          var s,
            c = (function (t, e, r) {
              var n;
              return (
                m(
                  t,
                  function (t, e) {
                    return t.getEntity() === e.getEntity();
                  },
                  function (t) {
                    return t.getEntity() === e;
                  },
                  function (t, e) {
                    t <= r && e >= r && (n = { start: t, end: e });
                  }
                ),
                "object" != typeof n && X(!1),
                n
              );
            })(n, u, r),
            l = c.start,
            f = c.end;
          l < f;

        )
          (s = n.get(l)), (n = n.set(l, v.applyEntity(s, null))), l++;
        return e.set("characterList", n);
      }
      return e;
    }
    var at = function (t, e) {
        var r = t.getBlockMap(),
          n = t.getEntityMap(),
          i = {},
          o = e.getStartKey(),
          a = e.getStartOffset(),
          u = r.get(o),
          s = ot(n, u, a);
        s !== u && (i[o] = s);
        var c = e.getEndKey(),
          l = e.getEndOffset(),
          f = r.get(c);
        o === c && (f = s);
        var p = ot(n, f, l);
        return (
          p !== f && (i[c] = p),
          Object.keys(i).length
            ? t.merge({ blockMap: r.merge(i), selectionAfter: e })
            : t.set("selectionAfter", e)
        );
      },
      ut = function (t, e) {
        var r = e.getStartKey(),
          n = e.getStartOffset(),
          i = e.getEndKey(),
          o = e.getEndOffset(),
          a = at(t, e).getBlockMap(),
          u = a.keySeq(),
          s = u.indexOf(r),
          c = u.indexOf(i) + 1;
        return it(
          a.slice(s, c).map(function (t, e) {
            var a = t.getText(),
              u = t.getCharacterList();
            return r === i
              ? t.merge({ text: a.slice(n, o), characterList: u.slice(n, o) })
              : e === r
              ? t.merge({ text: a.slice(n), characterList: u.slice(n) })
              : e === i
              ? t.merge({ text: a.slice(0, o), characterList: u.slice(0, o) })
              : t;
          })
        );
      },
      st = function (t) {
        return (
          !("undefined" == typeof window || !window.__DRAFT_GKX) &&
          !!window.__DRAFT_GKX[t]
        );
      };
    var ct = function (t, e, r) {
        if (r === t.count())
          e.forEach(function (e) {
            t = t.push(e);
          });
        else if (0 === r)
          e.reverse().forEach(function (e) {
            t = t.unshift(e);
          });
        else {
          var n = t.slice(0, r),
            i = t.slice(r);
          t = n.concat(e, i).toList();
        }
        return t;
      },
      lt = o.List,
      ft = function (t, e, r, n, i, o) {
        var a = r.first() instanceof U,
          s = [],
          c = n.size,
          l = r.get(i),
          f = n.first(),
          p = n.last(),
          h = p.getLength(),
          d = p.getKey(),
          g = a && (!l.getChildKeys().isEmpty() || !f.getChildKeys().isEmpty());
        r.forEach(function (t, e) {
          e === i
            ? (g
                ? s.push(t)
                : s.push(
                    (function (t, e, r) {
                      var n = t.getText(),
                        i = t.getCharacterList(),
                        o = n.slice(0, e),
                        a = i.slice(0, e),
                        u = r.first();
                      return t.merge({
                        text: o + u.getText(),
                        characterList: a.concat(u.getCharacterList()),
                        type: o ? t.getType() : u.getType(),
                        data: u.getData(),
                      });
                    })(t, o, n)
                  ),
              n.slice(g ? 0 : 1, c - 1).forEach(function (t) {
                return s.push(t);
              }),
              s.push(
                (function (t, e, r) {
                  var n = t.getText(),
                    i = t.getCharacterList(),
                    o = n.length,
                    a = n.slice(e, o),
                    u = i.slice(e, o),
                    s = r.last();
                  return s.merge({
                    text: s.getText() + a,
                    characterList: s.getCharacterList().concat(u),
                    data: s.getData(),
                  });
                })(t, o, n)
              ))
            : s.push(t);
        });
        var y = u.createFromArray(s);
        return (
          a &&
            (y = (function (t, e, r, n) {
              return t.withMutations(function (e) {
                var i = r.getKey(),
                  o = n.getKey(),
                  a = r.getNextSiblingKey(),
                  u = r.getParentKey(),
                  s = (function (t, e) {
                    var r = t.getKey(),
                      n = t,
                      i = [];
                    for (e.get(r) && i.push(r); n && n.getNextSiblingKey(); ) {
                      var o = n.getNextSiblingKey();
                      if (!o) break;
                      i.push(o), (n = e.get(o));
                    }
                    return i;
                  })(n, t),
                  c = s[s.length - 1];
                if (
                  (e.get(o)
                    ? (e.setIn([i, "nextSibling"], o),
                      e.setIn([o, "prevSibling"], i))
                    : (e.setIn([i, "nextSibling"], n.getNextSiblingKey()),
                      e.setIn([n.getNextSiblingKey(), "prevSibling"], i)),
                  e.setIn([c, "nextSibling"], a),
                  a && e.setIn([a, "prevSibling"], c),
                  s.forEach(function (t) {
                    return e.setIn([t, "parent"], u);
                  }),
                  u)
                ) {
                  var l = t.get(u).getChildKeys(),
                    f = l.indexOf(i) + 1,
                    p = l.toArray();
                  p.splice.apply(p, [f, 0].concat(s)),
                    e.setIn([u, "children"], lt(p));
                }
              });
            })(y, 0, l, f)),
          t.merge({
            blockMap: y,
            selectionBefore: e,
            selectionAfter: e.merge({
              anchorKey: d,
              anchorOffset: h,
              focusKey: d,
              focusOffset: h,
              isBackward: !1,
            }),
          })
        );
      },
      pt = function (t, e, r) {
        e.isCollapsed() || X(!1);
        var n = t.getBlockMap(),
          i = it(r),
          o = e.getStartKey(),
          a = e.getStartOffset(),
          u = n.get(o);
        return (
          u instanceof U && (u.getChildKeys().isEmpty() || X(!1)),
          1 === i.size
            ? (function (t, e, r, n, i, o) {
                var a = r.get(i),
                  u = a.getText(),
                  s = a.getCharacterList(),
                  c = i,
                  l = o + n.getText().length,
                  f = a.merge({
                    text: u.slice(0, o) + n.getText() + u.slice(o),
                    characterList: ct(s, n.getCharacterList(), o),
                    data: n.getData(),
                  });
                return t.merge({
                  blockMap: r.set(i, f),
                  selectionBefore: e,
                  selectionAfter: e.merge({
                    anchorKey: c,
                    anchorOffset: l,
                    focusKey: c,
                    focusOffset: l,
                    isBackward: !1,
                  }),
                });
              })(t, e, n, i.first(), o, a)
            : ft(t, e, n, i, o, a)
        );
      },
      ht = o.Repeat;
    var dt = function (t, e, r, n) {
        e.isCollapsed() || X(!1);
        var i = r.length;
        if (!i) return t;
        var o = t.getBlockMap(),
          a = e.getStartKey(),
          u = e.getStartOffset(),
          s = o.get(a),
          c = s.getText(),
          l = s.merge({
            text: c.slice(0, u) + r + c.slice(u, s.getLength()),
            characterList: ct(s.getCharacterList(), ht(n, i).toList(), u),
          }),
          f = u + i;
        return t.merge({
          blockMap: o.set(a, l),
          selectionAfter: e.merge({ anchorOffset: f, focusOffset: f }),
        });
      },
      gt = o.Map;
    var yt = function (t, e, r) {
        var n = e.getStartKey(),
          i = e.getEndKey(),
          o = t.getBlockMap(),
          a = o
            .toSeq()
            .skipUntil(function (t, e) {
              return e === n;
            })
            .takeUntil(function (t, e) {
              return e === i;
            })
            .concat(gt([[i, o.get(i)]]))
            .map(r);
        return t.merge({
          blockMap: o.merge(a),
          selectionBefore: e,
          selectionAfter: e,
        });
      },
      vt = function (t, e) {
        if (!(t instanceof U)) return null;
        var r = t.getNextSiblingKey();
        if (r) return r;
        var n = t.getParentKey();
        if (!n) return null;
        for (var i = e.get(n); i && !i.getNextSiblingKey(); ) {
          var o = i.getParentKey();
          i = o ? e.get(o) : null;
        }
        return i ? i.getNextSiblingKey() : null;
      };
    o.List;
    var mt = o.Map,
      bt = function (t, e, r) {
        if (t) {
          var n = e.get(t);
          n && e.set(t, r(n));
        }
      },
      _t = function (t, e) {
        var r = [];
        if (!t) return r;
        for (var n = e.get(t); n && n.getParentKey(); ) {
          var i = n.getParentKey();
          i && r.push(i), (n = i ? e.get(i) : null);
        }
        return r;
      },
      wt = function (t, e, r) {
        if (!t) return null;
        for (var n = r.get(t.getKey()).getNextSiblingKey(); n && !e.get(n); )
          n = r.get(n).getNextSiblingKey() || null;
        return n;
      },
      St = function (t, e, r) {
        if (!t) return null;
        for (var n = r.get(t.getKey()).getPrevSiblingKey(); n && !e.get(n); )
          n = r.get(n).getPrevSiblingKey() || null;
        return n;
      },
      Ot = function (t, e, r, n) {
        return t.withMutations(function (i) {
          if (
            (bt(e.getKey(), i, function (t) {
              return t.merge({
                nextSibling: wt(t, i, n),
                prevSibling: St(t, i, n),
              });
            }),
            bt(r.getKey(), i, function (t) {
              return t.merge({
                nextSibling: wt(t, i, n),
                prevSibling: St(t, i, n),
              });
            }),
            _t(e.getKey(), n).forEach(function (t) {
              return bt(t, i, function (t) {
                return t.merge({
                  children: t.getChildKeys().filter(function (t) {
                    return i.get(t);
                  }),
                  nextSibling: wt(t, i, n),
                  prevSibling: St(t, i, n),
                });
              });
            }),
            bt(e.getNextSiblingKey(), i, function (t) {
              return t.merge({ prevSibling: e.getPrevSiblingKey() });
            }),
            bt(e.getPrevSiblingKey(), i, function (t) {
              return t.merge({ nextSibling: wt(t, i, n) });
            }),
            bt(r.getNextSiblingKey(), i, function (t) {
              return t.merge({ prevSibling: St(t, i, n) });
            }),
            bt(r.getPrevSiblingKey(), i, function (t) {
              return t.merge({ nextSibling: r.getNextSiblingKey() });
            }),
            _t(r.getKey(), n).forEach(function (t) {
              bt(t, i, function (t) {
                return t.merge({
                  children: t.getChildKeys().filter(function (t) {
                    return i.get(t);
                  }),
                  nextSibling: wt(t, i, n),
                  prevSibling: St(t, i, n),
                });
              });
            }),
            (function (t, e) {
              var r = [];
              if (!t) return r;
              for (var n = vt(t, e); n && e.get(n); ) {
                var i = e.get(n);
                r.push(n), (n = i.getParentKey() ? vt(i, e) : null);
              }
              return r;
            })(r, n).forEach(function (t) {
              return bt(t, i, function (t) {
                return t.merge({
                  nextSibling: wt(t, i, n),
                  prevSibling: St(t, i, n),
                });
              });
            }),
            null == t.get(e.getKey()) &&
              null != t.get(r.getKey()) &&
              r.getParentKey() === e.getKey() &&
              null == r.getPrevSiblingKey())
          ) {
            var o = e.getPrevSiblingKey();
            bt(r.getKey(), i, function (t) {
              return t.merge({ prevSibling: o });
            }),
              bt(o, i, function (t) {
                return t.merge({ nextSibling: r.getKey() });
              });
            var a = o ? t.get(o) : null,
              u = a ? a.getParentKey() : null;
            if (
              (e.getChildKeys().forEach(function (t) {
                bt(t, i, function (t) {
                  return t.merge({ parent: u });
                });
              }),
              null != u)
            ) {
              var s = t.get(u);
              bt(u, i, function (t) {
                return t.merge({
                  children: s.getChildKeys().concat(e.getChildKeys()),
                });
              });
            }
            bt(
              e.getChildKeys().find(function (e) {
                return null === t.get(e).getNextSiblingKey();
              }),
              i,
              function (t) {
                return t.merge({ nextSibling: e.getNextSiblingKey() });
              }
            );
          }
        });
      },
      kt = function (t, e, r) {
        if (0 === e) for (; e < r; ) (t = t.shift()), e++;
        else if (r === t.count()) for (; r > e; ) (t = t.pop()), r--;
        else {
          var n = t.slice(0, e),
            i = t.slice(r);
          t = n.concat(i).toList();
        }
        return t;
      },
      Et = function (t, e) {
        if (e.isCollapsed()) return t;
        var r,
          n = t.getBlockMap(),
          i = e.getStartKey(),
          o = e.getStartOffset(),
          a = e.getEndKey(),
          u = e.getEndOffset(),
          s = n.get(i),
          c = n.get(a),
          l = s instanceof U,
          f = [];
        if (l) {
          var p = c.getChildKeys(),
            h = _t(a, n);
          c.getNextSiblingKey() && (f = f.concat(h)),
            p.isEmpty() || (f = f.concat(h.concat([a]))),
            (f = f.concat(_t(vt(c, n), n)));
        }
        r =
          s === c
            ? kt(s.getCharacterList(), o, u)
            : s
                .getCharacterList()
                .slice(0, o)
                .concat(c.getCharacterList().slice(u));
        var d = 0 === o && u !== c.getText().length,
          g = d ? a : i,
          y = (d ? c : s).merge({
            text: s.getText().slice(0, o) + c.getText().slice(u),
            characterList: r,
          }),
          v =
            l &&
            0 === o &&
            0 === u &&
            c.getParentKey() === i &&
            null == c.getPrevSiblingKey()
              ? mt([[i, null]])
              : n
                  .toSeq()
                  .skipUntil(function (t, e) {
                    return e === i;
                  })
                  .takeUntil(function (t, e) {
                    return e === a;
                  })
                  .filter(function (t, e) {
                    return -1 === f.indexOf(e);
                  })
                  .concat(mt([[a, null]]))
                  .map(function (t, e) {
                    return e === g ? y : null;
                  }),
          m = n.merge(v).filter(function (t) {
            return !!t;
          });
        return (
          l && s !== c && (m = Ot(m, s, c, n)),
          t.merge({
            blockMap: m,
            selectionBefore: e,
            selectionAfter: e.merge({
              anchorKey: g,
              anchorOffset: o,
              focusKey: g,
              focusOffset: o,
              isBackward: !1,
            }),
          })
        );
      },
      Ct = o.List,
      xt = o.Map,
      Dt = function (t, e, r) {
        if (t) {
          var n = e.get(t);
          n && e.set(t, r(n));
        }
      },
      Tt = function (t, e) {
        e.isCollapsed() || X(!1);
        var r = e.getAnchorKey(),
          n = t.getBlockMap(),
          i = n.get(r),
          o = i.getText();
        if (!o) {
          var a = i.getType();
          if ("unordered-list-item" === a || "ordered-list-item" === a)
            return yt(t, e, function (t) {
              return t.merge({ type: "unstyled", depth: 0 });
            });
        }
        var u = e.getAnchorOffset(),
          s = i.getCharacterList(),
          c = rt(),
          l = i instanceof U,
          f = i.merge({ text: o.slice(0, u), characterList: s.slice(0, u) }),
          p = f.merge({
            key: c,
            text: o.slice(u),
            characterList: s.slice(u),
            data: xt(),
          }),
          h = n.toSeq().takeUntil(function (t) {
            return t === i;
          }),
          d = n
            .toSeq()
            .skipUntil(function (t) {
              return t === i;
            })
            .rest(),
          g = h
            .concat(
              [
                [r, f],
                [c, p],
              ],
              d
            )
            .toOrderedMap();
        return (
          l &&
            (i.getChildKeys().isEmpty() || X(!1),
            (g = (function (t, e, r) {
              return t.withMutations(function (t) {
                var n = e.getKey(),
                  i = r.getKey();
                Dt(e.getParentKey(), t, function (t) {
                  var e = t.getChildKeys(),
                    r = e.indexOf(n) + 1,
                    o = e.toArray();
                  return o.splice(r, 0, i), t.merge({ children: Ct(o) });
                }),
                  Dt(e.getNextSiblingKey(), t, function (t) {
                    return t.merge({ prevSibling: i });
                  }),
                  Dt(n, t, function (t) {
                    return t.merge({ nextSibling: i });
                  }),
                  Dt(i, t, function (t) {
                    return t.merge({ prevSibling: n });
                  });
              });
            })(g, f, p))),
          t.merge({
            blockMap: g,
            selectionBefore: e,
            selectionAfter: e.merge({
              anchorKey: c,
              anchorOffset: 0,
              focusKey: c,
              focusOffset: 0,
              isBackward: !1,
            }),
          })
        );
      },
      Mt = o.OrderedSet,
      It = {
        replaceText: function (t, e, r, n, i) {
          var o = at(t, e),
            a = Et(o, e),
            u = v.create({ style: n || Mt(), entity: i || null });
          return dt(a, a.getSelectionAfter(), r, u);
        },
        insertText: function (t, e, r, n, i) {
          return e.isCollapsed() || X(!1), It.replaceText(t, e, r, n, i);
        },
        moveText: function (t, e, r) {
          var n = ut(t, e),
            i = It.removeRange(t, e, "backward");
          return It.replaceWithFragment(i, r, n);
        },
        replaceWithFragment: function (t, e, r) {
          var n = at(t, e),
            i = Et(n, e);
          return pt(i, i.getSelectionAfter(), r);
        },
        removeRange: function (t, e, r) {
          var n, i, o, a;
          e.getIsBackward() &&
            (e = e.merge({
              anchorKey: e.getFocusKey(),
              anchorOffset: e.getFocusOffset(),
              focusKey: e.getAnchorKey(),
              focusOffset: e.getAnchorOffset(),
              isBackward: !1,
            })),
            (n = e.getAnchorKey()),
            (i = e.getFocusKey()),
            (o = t.getBlockForKey(n)),
            (a = t.getBlockForKey(i));
          var u = e.getStartOffset(),
            s = e.getEndOffset(),
            c = o.getEntityAt(u),
            l = a.getEntityAt(s - 1);
          if (n === i && c && c === l) {
            var f = Q(t.getEntityMap(), o, a, e, r);
            return Et(t, f);
          }
          var p = e;
          st("draft_segmented_entities_behavior") &&
            (p = Q(t.getEntityMap(), o, a, e, r));
          var h = at(t, p);
          return Et(h, p);
        },
        splitBlock: function (t, e) {
          var r = at(t, e),
            n = Et(r, e);
          return Tt(n, n.getSelectionAfter());
        },
        applyInlineStyle: function (t, e, r) {
          return W.add(t, e, r);
        },
        removeInlineStyle: function (t, e, r) {
          return W.remove(t, e, r);
        },
        setBlockType: function (t, e, r) {
          return yt(t, e, function (t) {
            return t.merge({ type: r, depth: 0 });
          });
        },
        setBlockData: function (t, e, r) {
          return yt(t, e, function (t) {
            return t.merge({ data: r });
          });
        },
        mergeBlockData: function (t, e, r) {
          return yt(t, e, function (t) {
            return t.merge({ data: t.getData().merge(r) });
          });
        },
        applyEntity: function (t, e, r) {
          var n = at(t, e);
          return $(n, e, r);
        },
      },
      Kt = It;
    function At(t) {
      return function () {
        return t;
      };
    }
    var Lt = function () {};
    (Lt.thatReturns = At),
      (Lt.thatReturnsFalse = At(!1)),
      (Lt.thatReturnsTrue = At(!0)),
      (Lt.thatReturnsNull = At(null)),
      (Lt.thatReturnsThis = function () {
        return this;
      }),
      (Lt.thatReturnsArgument = function (t) {
        return t;
      });
    var Bt = Lt,
      Pt = o.List,
      jt = o.Repeat,
      Rt = o.Record,
      Nt = Bt.thatReturnsTrue,
      Ft = Rt({ start: null, end: null }),
      zt = Rt({ start: null, end: null, decoratorKey: null, leaves: null });
    function Ut(t, e) {
      var r = [],
        n = t
          .map(function (t) {
            return t.getStyle();
          })
          .toList();
      return (
        m(n, Ht, Nt, function (t, n) {
          r.push(new Ft({ start: t + e, end: n + e }));
        }),
        Pt(r)
      );
    }
    function Ht(t, e) {
      return t === e;
    }
    var qt = {
      generate: function (t, e, r) {
        var n = e.getLength();
        if (!n)
          return Pt.of(
            new zt({
              start: 0,
              end: 0,
              decoratorKey: null,
              leaves: Pt.of(new Ft({ start: 0, end: 0 })),
            })
          );
        var i = [],
          o = r ? r.getDecorations(e, t) : Pt(jt(null, n)),
          a = e.getCharacterList();
        return (
          m(o, Ht, Nt, function (t, e) {
            i.push(
              new zt({
                start: t,
                end: e,
                decoratorKey: o.get(t),
                leaves: Ut(a.slice(t, e).toList(), t),
              })
            );
          }),
          Pt(i)
        );
      },
    };
    function Wt(t, e) {
      return (
        (Wt = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            }),
        Wt(t, e)
      );
    }
    var Yt = (function (t) {
        var e, r;
        function n() {
          return t.apply(this, arguments) || this;
        }
        (r = t),
          ((e = n).prototype = Object.create(r.prototype)),
          (e.prototype.constructor = e),
          Wt(e, r);
        var i = n.prototype;
        return (
          (i.getType = function () {
            return this.get("type");
          }),
          (i.getMutability = function () {
            return this.get("mutability");
          }),
          (i.getData = function () {
            return this.get("data");
          }),
          n
        );
      })(
        (0, o.Record)({ type: "TOKEN", mutability: "IMMUTABLE", data: Object })
      ),
      $t = Yt;
    function Gt(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function Vt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Gt(Object(r), !0).forEach(function (e) {
              Xt(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : Gt(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    function Xt(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    var Jt = (0, o.Map)(),
      Zt = 0;
    function Qt(t, e) {
      console.warn(
        "WARNING: " +
          t +
          ' will be deprecated soon!\nPlease use "' +
          e +
          '" instead.'
      );
    }
    var te = {
        getLastCreatedEntityKey: function () {
          return (
            Qt(
              "DraftEntity.getLastCreatedEntityKey",
              "contentState.getLastCreatedEntityKey"
            ),
            te.__getLastCreatedEntityKey()
          );
        },
        create: function (t, e, r) {
          return (
            Qt("DraftEntity.create", "contentState.createEntity"),
            te.__create(t, e, r)
          );
        },
        add: function (t) {
          return Qt("DraftEntity.add", "contentState.addEntity"), te.__add(t);
        },
        get: function (t) {
          return Qt("DraftEntity.get", "contentState.getEntity"), te.__get(t);
        },
        mergeData: function (t, e) {
          return (
            Qt("DraftEntity.mergeData", "contentState.mergeEntityData"),
            te.__mergeData(t, e)
          );
        },
        replaceData: function (t, e) {
          return (
            Qt("DraftEntity.replaceData", "contentState.replaceEntityData"),
            te.__replaceData(t, e)
          );
        },
        __getLastCreatedEntityKey: function () {
          return "" + Zt;
        },
        __create: function (t, e, r) {
          return te.__add(new $t({ type: t, mutability: e, data: r || {} }));
        },
        __add: function (t) {
          var e = "" + ++Zt;
          return (Jt = Jt.set(e, t)), e;
        },
        __get: function (t) {
          var e = Jt.get(t);
          return e || X(!1), e;
        },
        __mergeData: function (t, e) {
          var r = te.__get(t),
            n = Vt(Vt({}, r.getData()), e),
            i = r.set("data", n);
          return (Jt = Jt.set(t, i)), i;
        },
        __replaceData: function (t, e) {
          var r = te.__get(t).set("data", e);
          return (Jt = Jt.set(t, r)), r;
        },
      },
      ee = te;
    function re(t, e) {
      return (
        (re = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            }),
        re(t, e)
      );
    }
    var ne = (function (t) {
        var e, r;
        function n() {
          return t.apply(this, arguments) || this;
        }
        (r = t),
          ((e = n).prototype = Object.create(r.prototype)),
          (e.prototype.constructor = e),
          re(e, r);
        var i = n.prototype;
        return (
          (i.serialize = function () {
            return (
              "Anchor: " +
              this.getAnchorKey() +
              ":" +
              this.getAnchorOffset() +
              ", Focus: " +
              this.getFocusKey() +
              ":" +
              this.getFocusOffset() +
              ", Is Backward: " +
              String(this.getIsBackward()) +
              ", Has Focus: " +
              String(this.getHasFocus())
            );
          }),
          (i.getAnchorKey = function () {
            return this.get("anchorKey");
          }),
          (i.getAnchorOffset = function () {
            return this.get("anchorOffset");
          }),
          (i.getFocusKey = function () {
            return this.get("focusKey");
          }),
          (i.getFocusOffset = function () {
            return this.get("focusOffset");
          }),
          (i.getIsBackward = function () {
            return this.get("isBackward");
          }),
          (i.getHasFocus = function () {
            return this.get("hasFocus");
          }),
          (i.hasEdgeWithin = function (t, e, r) {
            var n = this.getAnchorKey(),
              i = this.getFocusKey();
            if (n === i && n === t) {
              var o = this.getStartOffset(),
                a = this.getEndOffset();
              return (e <= o && o <= r) || (e <= a && a <= r);
            }
            if (t !== n && t !== i) return !1;
            var u = t === n ? this.getAnchorOffset() : this.getFocusOffset();
            return e <= u && r >= u;
          }),
          (i.isCollapsed = function () {
            return (
              this.getAnchorKey() === this.getFocusKey() &&
              this.getAnchorOffset() === this.getFocusOffset()
            );
          }),
          (i.getStartKey = function () {
            return this.getIsBackward()
              ? this.getFocusKey()
              : this.getAnchorKey();
          }),
          (i.getStartOffset = function () {
            return this.getIsBackward()
              ? this.getFocusOffset()
              : this.getAnchorOffset();
          }),
          (i.getEndKey = function () {
            return this.getIsBackward()
              ? this.getAnchorKey()
              : this.getFocusKey();
          }),
          (i.getEndOffset = function () {
            return this.getIsBackward()
              ? this.getAnchorOffset()
              : this.getFocusOffset();
          }),
          (n.createEmpty = function (t) {
            return new n({
              anchorKey: t,
              anchorOffset: 0,
              focusKey: t,
              focusOffset: 0,
              isBackward: !1,
              hasFocus: !1,
            });
          }),
          n
        );
      })(
        (0, o.Record)({
          anchorKey: "",
          anchorOffset: 0,
          focusKey: "",
          focusOffset: 0,
          isBackward: !1,
          hasFocus: !1,
        })
      ),
      ie = ne,
      oe = new RegExp("\r", "g");
    var ae = function (t) {
      return t.replace(oe, "");
    };
    function ue(t, e) {
      return (
        (ue = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            }),
        ue(t, e)
      );
    }
    var se = o.List,
      ce = o.Record,
      le = o.Repeat,
      fe = (function (t) {
        var e, r;
        function n() {
          return t.apply(this, arguments) || this;
        }
        (r = t),
          ((e = n).prototype = Object.create(r.prototype)),
          (e.prototype.constructor = e),
          ue(e, r);
        var i = n.prototype;
        return (
          (i.getEntityMap = function () {
            return ee;
          }),
          (i.getBlockMap = function () {
            return this.get("blockMap");
          }),
          (i.getSelectionBefore = function () {
            return this.get("selectionBefore");
          }),
          (i.getSelectionAfter = function () {
            return this.get("selectionAfter");
          }),
          (i.getBlockForKey = function (t) {
            return this.getBlockMap().get(t);
          }),
          (i.getKeyBefore = function (t) {
            return this.getBlockMap()
              .reverse()
              .keySeq()
              .skipUntil(function (e) {
                return e === t;
              })
              .skip(1)
              .first();
          }),
          (i.getKeyAfter = function (t) {
            return this.getBlockMap()
              .keySeq()
              .skipUntil(function (e) {
                return e === t;
              })
              .skip(1)
              .first();
          }),
          (i.getBlockAfter = function (t) {
            return this.getBlockMap()
              .skipUntil(function (e, r) {
                return r === t;
              })
              .skip(1)
              .first();
          }),
          (i.getBlockBefore = function (t) {
            return this.getBlockMap()
              .reverse()
              .skipUntil(function (e, r) {
                return r === t;
              })
              .skip(1)
              .first();
          }),
          (i.getBlocksAsArray = function () {
            return this.getBlockMap().toArray();
          }),
          (i.getFirstBlock = function () {
            return this.getBlockMap().first();
          }),
          (i.getLastBlock = function () {
            return this.getBlockMap().last();
          }),
          (i.getPlainText = function (t) {
            return this.getBlockMap()
              .map(function (t) {
                return t ? t.getText() : "";
              })
              .join(t || "\n");
          }),
          (i.getLastCreatedEntityKey = function () {
            return ee.__getLastCreatedEntityKey();
          }),
          (i.hasText = function () {
            var t = this.getBlockMap();
            return t.size > 1 || t.first().getLength() > 0;
          }),
          (i.createEntity = function (t, e, r) {
            return ee.__create(t, e, r), this;
          }),
          (i.mergeEntityData = function (t, e) {
            return ee.__mergeData(t, e), this;
          }),
          (i.replaceEntityData = function (t, e) {
            return ee.__replaceData(t, e), this;
          }),
          (i.addEntity = function (t) {
            return ee.__add(t), this;
          }),
          (i.getEntity = function (t) {
            return ee.__get(t);
          }),
          (n.createFromBlockArray = function (t, e) {
            var r = Array.isArray(t) ? t : t.contentBlocks,
              i = u.createFromArray(r),
              o = i.isEmpty() ? new ie() : ie.createEmpty(i.first().getKey());
            return new n({
              blockMap: i,
              entityMap: e || ee,
              selectionBefore: o,
              selectionAfter: o,
            });
          }),
          (n.createFromText = function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : /\r\n?|\n/g,
              r = t.split(e),
              i = r.map(function (t) {
                return (
                  (t = ae(t)),
                  new (st("draft_tree_data_support") ? U : T)({
                    key: rt(),
                    text: t,
                    type: "unstyled",
                    characterList: se(le(v.EMPTY, t.length)),
                  })
                );
              });
            return n.createFromBlockArray(i);
          }),
          n
        );
      })(
        ce({
          entityMap: null,
          blockMap: null,
          selectionBefore: null,
          selectionAfter: null,
        })
      ),
      pe = fe,
      he = "LTR",
      de = null;
    function ge(t) {
      return t === he || "RTL" === t;
    }
    function ye(t) {
      return ge(t) || X(!1), t === he ? "ltr" : "rtl";
    }
    function ve(t) {
      de = t;
    }
    var me = {
        NEUTRAL: "NEUTRAL",
        LTR: he,
        RTL: "RTL",
        isStrong: ge,
        getHTMLDir: ye,
        getHTMLDirIfDifferent: function (t, e) {
          return ge(t) || X(!1), ge(e) || X(!1), t === e ? null : ye(t);
        },
        setGlobalDir: ve,
        initGlobalDir: function () {
          ve(he);
        },
        getGlobalDir: function () {
          return de || this.initGlobalDir(), de || X(!1), de;
        },
      },
      be =
        "֐־׀׃׆׈-׏א-ת׫-ׯװ-ײ׳-״׵-׿߀-߉ߊ-ߪߴ-ߵߺ߻-߿ࠀ-ࠕࠚࠤࠨ࠮-࠯࠰-࠾࠿ࡀ-ࡘ࡜-࡝࡞࡟-࢟‏יִײַ-ﬨשׁ-זּ﬷טּ-לּ﬽מּ﬿נּ-סּ﭂ףּ-פּ﭅צּ-ﭏ",
      _e =
        "؈؋؍؛؜؝؞-؟ؠ-ؿـف-ي٭ٮ-ٯٱ-ۓ۔ەۥ-ۦۮ-ۯۺ-ۼ۽-۾ۿ܀-܍܎܏ܐܒ-ܯ݋-݌ݍ-ޥޱ޲-޿ࢠ-ࢲࢳ-ࣣﭐ-ﮱ﮲-﯁﯂-﯒ﯓ-ﴽ﵀-﵏ﵐ-ﶏ﶐-﶑ﶒ-ﷇ﷈-﷏ﷰ-ﷻ﷼﷾-﷿ﹰ-ﹴ﹵ﹶ-ﻼ﻽-﻾",
      we = new RegExp(
        "[" +
          "A-Za-zªµºÀ-ÖØ-öø-ƺƻƼ-ƿǀ-ǃǄ-ʓʔʕ-ʯʰ-ʸʻ-ˁː-ˑˠ-ˤˮͰ-ͳͶ-ͷͺͻ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ҂Ҋ-ԯԱ-Ֆՙ՚-՟ա-և։ःऄ-हऻऽा-ीॉ-ौॎ-ॏॐक़-ॡ।-॥०-९॰ॱॲ-ঀং-ঃঅ-ঌএ-ঐও-নপ-রলশ-হঽা-ীে-ৈো-ৌৎৗড়-ঢ়য়-ৡ০-৯ৰ-ৱ৴-৹৺ਃਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਾ-ੀਖ਼-ੜਫ਼੦-੯ੲ-ੴઃઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽા-ીૉો-ૌૐૠ-ૡ૦-૯૰ଂ-ଃଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽାୀେ-ୈୋ-ୌୗଡ଼-ଢ଼ୟ-ୡ୦-୯୰ୱ୲-୷ஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹா-ிு-ூெ-ைொ-ௌௐௗ௦-௯௰-௲ఁ-ఃఅ-ఌఎ-ఐఒ-నప-హఽు-ౄౘ-ౙౠ-ౡ౦-౯౿ಂ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽಾಿೀ-ೄೆೇ-ೈೊ-ೋೕ-ೖೞೠ-ೡ೦-೯ೱ-ೲം-ഃഅ-ഌഎ-ഐഒ-ഺഽാ-ീെ-ൈൊ-ൌൎൗൠ-ൡ൦-൯൰-൵൹ൺ-ൿං-ඃඅ-ඖක-නඳ-රලව-ෆා-ෑෘ-ෟ෦-෯ෲ-ෳ෴ก-ะา-ำเ-ๅๆ๏๐-๙๚-๛ກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆ໐-໙ໜ-ໟༀ༁-༃༄-༒༓༔༕-༗༚-༟༠-༩༪-༳༴༶༸༾-༿ཀ-ཇཉ-ཬཿ྅ྈ-ྌ྾-࿅࿇-࿌࿎-࿏࿐-࿔࿕-࿘࿙-࿚က-ဪါ-ာေးျ-ြဿ၀-၉၊-၏ၐ-ၕၖ-ၗၚ-ၝၡၢ-ၤၥ-ၦၧ-ၭၮ-ၰၵ-ႁႃ-ႄႇ-ႌႎႏ႐-႙ႚ-ႜ႞-႟Ⴀ-ჅჇჍა-ჺ჻ჼჽ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፠-፨፩-፼ᎀ-ᎏᎠ-Ᏼᐁ-ᙬ᙭-᙮ᙯ-ᙿᚁ-ᚚᚠ-ᛪ᛫-᛭ᛮ-ᛰᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱ᜵-᜶ᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳាើ-ៅះ-ៈ។-៖ៗ៘-៚ៜ០-៩᠐-᠙ᠠ-ᡂᡃᡄ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᤣ-ᤦᤩ-ᤫᤰ-ᤱᤳ-ᤸ᥆-᥏ᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧀᧁ-ᧇᧈ-ᧉ᧐-᧙᧚ᨀ-ᨖᨙ-ᨚ᨞-᨟ᨠ-ᩔᩕᩗᩡᩣ-ᩤᩭ-ᩲ᪀-᪉᪐-᪙᪠-᪦ᪧ᪨-᪭ᬄᬅ-ᬳᬵᬻᬽ-ᭁᭃ-᭄ᭅ-ᭋ᭐-᭙᭚-᭠᭡-᭪᭴-᭼ᮂᮃ-ᮠᮡᮦ-ᮧ᮪ᮮ-ᮯ᮰-᮹ᮺ-ᯥᯧᯪ-ᯬᯮ᯲-᯳᯼-᯿ᰀ-ᰣᰤ-ᰫᰴ-ᰵ᰻-᰿᱀-᱉ᱍ-ᱏ᱐-᱙ᱚ-ᱷᱸ-ᱽ᱾-᱿᳀-᳇᳓᳡ᳩ-ᳬᳮ-ᳱᳲ-ᳳᳵ-ᳶᴀ-ᴫᴬ-ᵪᵫ-ᵷᵸᵹ-ᶚᶛ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‎ⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℴℵ-ℸℹℼ-ℿⅅ-ⅉⅎ⅏Ⅰ-ↂↃ-ↄↅ-ↈ⌶-⍺⎕⒜-ⓩ⚬⠀-⣿Ⰰ-Ⱞⰰ-ⱞⱠ-ⱻⱼ-ⱽⱾ-ⳤⳫ-ⳮⳲ-ⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵰ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々〆〇〡-〩〮-〯〱-〵〸-〺〻〼ぁ-ゖゝ-ゞゟァ-ヺー-ヾヿㄅ-ㄭㄱ-ㆎ㆐-㆑㆒-㆕㆖-㆟ㆠ-ㆺㇰ-ㇿ㈀-㈜㈠-㈩㈪-㉇㉈-㉏㉠-㉻㉿㊀-㊉㊊-㊰㋀-㋋㋐-㋾㌀-㍶㍻-㏝㏠-㏾㐀-䶵一-鿌ꀀ-ꀔꀕꀖ-ꒌꓐ-ꓷꓸ-ꓽ꓾-꓿ꔀ-ꘋꘌꘐ-ꘟ꘠-꘩ꘪ-ꘫꙀ-ꙭꙮꚀ-ꚛꚜ-ꚝꚠ-ꛥꛦ-ꛯ꛲-꛷Ꜣ-ꝯꝰꝱ-ꞇ꞉-꞊Ꞌ-ꞎꞐ-ꞭꞰ-Ʇꟷꟸ-ꟹꟺꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꠣ-ꠤꠧ꠰-꠵꠶-꠷ꡀ-ꡳꢀ-ꢁꢂ-ꢳꢴ-ꣃ꣎-꣏꣐-꣙ꣲ-ꣷ꣸-꣺ꣻ꤀-꤉ꤊ-ꤥ꤮-꤯ꤰ-ꥆꥒ-꥓꥟ꥠ-ꥼꦃꦄ-ꦲꦴ-ꦵꦺ-ꦻꦽ-꧀꧁-꧍ꧏ꧐-꧙꧞-꧟ꧠ-ꧤꧦꧧ-ꧯ꧰-꧹ꧺ-ꧾꨀ-ꨨꨯ-ꨰꨳ-ꨴꩀ-ꩂꩄ-ꩋꩍ꩐-꩙꩜-꩟ꩠ-ꩯꩰꩱ-ꩶ꩷-꩹ꩺꩻꩽꩾ-ꪯꪱꪵ-ꪶꪹ-ꪽꫀꫂꫛ-ꫜꫝ꫞-꫟ꫠ-ꫪꫫꫮ-ꫯ꫰-꫱ꫲꫳ-ꫴꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚ꭛ꭜ-ꭟꭤ-ꭥꯀ-ꯢꯣ-ꯤꯦ-ꯧꯩ-ꯪ꯫꯬꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ-豈-舘並-龎ﬀ-ﬆﬓ-ﬗＡ-Ｚａ-ｚｦ-ｯｰｱ-ﾝﾞ-ﾟﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ" +
          be +
          _e +
          "]"
      ),
      Se = new RegExp("[" + be + _e + "]");
    function Oe(t) {
      var e = we.exec(t);
      return null == e ? null : e[0];
    }
    function ke(t) {
      var e = Oe(t);
      return null == e ? me.NEUTRAL : Se.exec(e) ? me.RTL : me.LTR;
    }
    function Ee(t, e) {
      if (((e = e || me.NEUTRAL), !t.length)) return e;
      var r = ke(t);
      return r === me.NEUTRAL ? e : r;
    }
    function Ce(t, e) {
      return e || (e = me.getGlobalDir()), me.isStrong(e) || X(!1), Ee(t, e);
    }
    var xe = {
      firstStrongChar: Oe,
      firstStrongCharDir: ke,
      resolveBlockDir: Ee,
      getDirection: Ce,
      isDirectionLTR: function (t, e) {
        return Ce(t, e) === me.LTR;
      },
      isDirectionRTL: function (t, e) {
        return Ce(t, e) === me.RTL;
      },
    };
    function De(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    var Te,
      Me = (function () {
        function t(t) {
          De(this, "_defaultDir", void 0),
            De(this, "_lastDir", void 0),
            t ? me.isStrong(t) || X(!1) : (t = me.getGlobalDir()),
            (this._defaultDir = t),
            this.reset();
        }
        var e = t.prototype;
        return (
          (e.reset = function () {
            this._lastDir = this._defaultDir;
          }),
          (e.getDirection = function (t) {
            return (
              (this._lastDir = xe.getDirection(t, this._lastDir)), this._lastDir
            );
          }),
          t
        );
      })(),
      Ie = function (t) {
        if (null != t) return t;
        throw new Error("Got unexpected null or undefined");
      },
      Ke = o.OrderedMap,
      Ae = {
        getDirectionMap: function (t, e) {
          Te ? Te.reset() : (Te = new Me());
          var r = t.getBlockMap(),
            n = r.valueSeq().map(function (t) {
              return Ie(Te).getDirection(t.getText());
            }),
            i = Ke(r.keySeq().zip(n));
          return null != e && o.is(e, i) ? e : i;
        },
      };
    function Le(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function Be(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Le(Object(r), !0).forEach(function (e) {
              Pe(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : Le(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    function Pe(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    var je = o.OrderedSet,
      Re = o.Record,
      Ne = o.Stack,
      Fe = Re({
        allowUndo: !0,
        currentContent: null,
        decorator: null,
        directionMap: null,
        forceSelection: !1,
        inCompositionMode: !1,
        inlineStyleOverride: null,
        lastChangeType: null,
        nativelyRenderedContent: null,
        redoStack: Ne(),
        selection: null,
        treeMap: null,
        undoStack: Ne(),
      }),
      ze = (function () {
        (e.createEmpty = function (t) {
          return e.createWithContent(pe.createFromText(""), t);
        }),
          (e.createWithContent = function (t, r) {
            var n = t.getBlockMap().first().getKey();
            return e.create({
              currentContent: t,
              undoStack: Ne(),
              redoStack: Ne(),
              decorator: r || null,
              selection: ie.createEmpty(n),
            });
          }),
          (e.create = function (t) {
            var r = t.currentContent,
              n = t.decorator,
              i = Be(
                Be({}, t),
                {},
                { treeMap: He(r, n), directionMap: Ae.getDirectionMap(r) }
              );
            return new e(new Fe(i));
          }),
          (e.set = function (t, r) {
            return new e(
              t.getImmutable().withMutations(function (e) {
                var n = e.get("decorator"),
                  i = n;
                null === r.decorator
                  ? (i = null)
                  : r.decorator && (i = r.decorator);
                var o = r.currentContent || t.getCurrentContent();
                if (i !== n) {
                  var a,
                    u = e.get("treeMap");
                  return (
                    (a =
                      i && n
                        ? (function (t, e, r, n, i) {
                            return r.merge(
                              e
                                .toSeq()
                                .filter(function (e) {
                                  return (
                                    n.getDecorations(e, t) !==
                                    i.getDecorations(e, t)
                                  );
                                })
                                .map(function (e) {
                                  return qt.generate(t, e, n);
                                })
                            );
                          })(o, o.getBlockMap(), u, i, n)
                        : He(o, i)),
                    void e.merge({
                      decorator: i,
                      treeMap: a,
                      nativelyRenderedContent: null,
                    })
                  );
                }
                o !== t.getCurrentContent() &&
                  e.set(
                    "treeMap",
                    (function (t, e, r, n) {
                      var i = t.getCurrentContent().set("entityMap", r),
                        o = i.getBlockMap();
                      return t
                        .getImmutable()
                        .get("treeMap")
                        .merge(
                          e
                            .toSeq()
                            .filter(function (t, e) {
                              return t !== o.get(e);
                            })
                            .map(function (t) {
                              return qt.generate(i, t, n);
                            })
                        );
                    })(t, o.getBlockMap(), o.getEntityMap(), i)
                  ),
                  e.merge(r);
              })
            );
          });
        var t = e.prototype;
        function e(t) {
          Pe(this, "_immutable", void 0), (this._immutable = t);
        }
        return (
          (t.toJS = function () {
            return this.getImmutable().toJS();
          }),
          (t.getAllowUndo = function () {
            return this.getImmutable().get("allowUndo");
          }),
          (t.getCurrentContent = function () {
            return this.getImmutable().get("currentContent");
          }),
          (t.getUndoStack = function () {
            return this.getImmutable().get("undoStack");
          }),
          (t.getRedoStack = function () {
            return this.getImmutable().get("redoStack");
          }),
          (t.getSelection = function () {
            return this.getImmutable().get("selection");
          }),
          (t.getDecorator = function () {
            return this.getImmutable().get("decorator");
          }),
          (t.isInCompositionMode = function () {
            return this.getImmutable().get("inCompositionMode");
          }),
          (t.mustForceSelection = function () {
            return this.getImmutable().get("forceSelection");
          }),
          (t.getNativelyRenderedContent = function () {
            return this.getImmutable().get("nativelyRenderedContent");
          }),
          (t.getLastChangeType = function () {
            return this.getImmutable().get("lastChangeType");
          }),
          (t.getInlineStyleOverride = function () {
            return this.getImmutable().get("inlineStyleOverride");
          }),
          (e.setInlineStyleOverride = function (t, r) {
            return e.set(t, { inlineStyleOverride: r });
          }),
          (t.getCurrentInlineStyle = function () {
            var t = this.getInlineStyleOverride();
            if (null != t) return t;
            var e = this.getCurrentContent(),
              r = this.getSelection();
            return r.isCollapsed()
              ? (function (t, e) {
                  var r = e.getStartKey(),
                    n = e.getStartOffset(),
                    i = t.getBlockForKey(r);
                  if (n > 0) return i.getInlineStyleAt(n - 1);
                  if (i.getLength()) return i.getInlineStyleAt(0);
                  return We(t, r);
                })(e, r)
              : (function (t, e) {
                  var r = e.getStartKey(),
                    n = e.getStartOffset(),
                    i = t.getBlockForKey(r);
                  if (n < i.getLength()) return i.getInlineStyleAt(n);
                  if (n > 0) return i.getInlineStyleAt(n - 1);
                  return We(t, r);
                })(e, r);
          }),
          (t.getBlockTree = function (t) {
            return this.getImmutable().getIn(["treeMap", t]);
          }),
          (t.isSelectionAtStartOfContent = function () {
            var t = this.getCurrentContent().getBlockMap().first().getKey();
            return this.getSelection().hasEdgeWithin(t, 0, 0);
          }),
          (t.isSelectionAtEndOfContent = function () {
            var t = this.getCurrentContent().getBlockMap().last(),
              e = t.getLength();
            return this.getSelection().hasEdgeWithin(t.getKey(), e, e);
          }),
          (t.getDirectionMap = function () {
            return this.getImmutable().get("directionMap");
          }),
          (e.acceptSelection = function (t, e) {
            return Ue(t, e, !1);
          }),
          (e.forceSelection = function (t, e) {
            return e.getHasFocus() || (e = e.set("hasFocus", !0)), Ue(t, e, !0);
          }),
          (e.moveSelectionToEnd = function (t) {
            var r = t.getCurrentContent().getLastBlock(),
              n = r.getKey(),
              i = r.getLength();
            return e.acceptSelection(
              t,
              new ie({
                anchorKey: n,
                anchorOffset: i,
                focusKey: n,
                focusOffset: i,
                isBackward: !1,
              })
            );
          }),
          (e.moveFocusToEnd = function (t) {
            var r = e.moveSelectionToEnd(t);
            return e.forceSelection(r, r.getSelection());
          }),
          (e.push = function (t, r, n) {
            var i =
              !(arguments.length > 3 && void 0 !== arguments[3]) ||
              arguments[3];
            if (t.getCurrentContent() === r) return t;
            var o = Ae.getDirectionMap(r, t.getDirectionMap());
            if (!t.getAllowUndo())
              return e.set(t, {
                currentContent: r,
                directionMap: o,
                lastChangeType: n,
                selection: r.getSelectionAfter(),
                forceSelection: i,
                inlineStyleOverride: null,
              });
            var a = t.getSelection(),
              u = t.getCurrentContent(),
              s = t.getUndoStack(),
              c = r;
            a !== u.getSelectionAfter() || qe(t, n)
              ? ((s = s.push(u)), (c = c.set("selectionBefore", a)))
              : ("insert-characters" !== n &&
                  "backspace-character" !== n &&
                  "delete-character" !== n) ||
                (c = c.set("selectionBefore", u.getSelectionBefore()));
            var l = t.getInlineStyleOverride(),
              f = ["adjust-depth", "change-block-type", "split-block"];
            -1 === f.indexOf(n) && (l = null);
            var p = {
              currentContent: c,
              directionMap: o,
              undoStack: s,
              redoStack: Ne(),
              lastChangeType: n,
              selection: r.getSelectionAfter(),
              forceSelection: i,
              inlineStyleOverride: l,
            };
            return e.set(t, p);
          }),
          (e.undo = function (t) {
            if (!t.getAllowUndo()) return t;
            var r = t.getUndoStack(),
              n = r.peek();
            if (!n) return t;
            var i = t.getCurrentContent(),
              o = Ae.getDirectionMap(n, t.getDirectionMap());
            return e.set(t, {
              currentContent: n,
              directionMap: o,
              undoStack: r.shift(),
              redoStack: t.getRedoStack().push(i),
              forceSelection: !0,
              inlineStyleOverride: null,
              lastChangeType: "undo",
              nativelyRenderedContent: null,
              selection: i.getSelectionBefore(),
            });
          }),
          (e.redo = function (t) {
            if (!t.getAllowUndo()) return t;
            var r = t.getRedoStack(),
              n = r.peek();
            if (!n) return t;
            var i = t.getCurrentContent(),
              o = Ae.getDirectionMap(n, t.getDirectionMap());
            return e.set(t, {
              currentContent: n,
              directionMap: o,
              undoStack: t.getUndoStack().push(i),
              redoStack: r.shift(),
              forceSelection: !0,
              inlineStyleOverride: null,
              lastChangeType: "redo",
              nativelyRenderedContent: null,
              selection: n.getSelectionAfter(),
            });
          }),
          (t.getImmutable = function () {
            return this._immutable;
          }),
          e
        );
      })();
    function Ue(t, e, r) {
      return ze.set(t, {
        selection: e,
        forceSelection: r,
        nativelyRenderedContent: null,
        inlineStyleOverride: null,
      });
    }
    function He(t, e) {
      return t
        .getBlockMap()
        .map(function (r) {
          return qt.generate(t, r, e);
        })
        .toOrderedMap();
    }
    function qe(t, e) {
      return (
        e !== t.getLastChangeType() ||
        ("insert-characters" !== e &&
          "backspace-character" !== e &&
          "delete-character" !== e)
      );
    }
    function We(t, e) {
      var r = t
        .getBlockMap()
        .reverse()
        .skipUntil(function (t, r) {
          return r === e;
        })
        .skip(1)
        .skipUntil(function (t, e) {
          return t.getLength();
        })
        .first();
      return r ? r.getInlineStyleAt(r.getLength() - 1) : je();
    }
    var Ye = ze,
      $e = o.OrderedMap,
      Ge = o.List,
      Ve = function (t, e, r) {
        if (t) {
          var n = e.get(t);
          n && e.set(t, r(n));
        }
      },
      Xe = function (t, e, r, n, i) {
        if (!i) return t;
        var o = "after" === n,
          a = e.getKey(),
          u = r.getKey(),
          s = e.getParentKey(),
          c = e.getNextSiblingKey(),
          l = e.getPrevSiblingKey(),
          f = r.getParentKey(),
          p = o ? r.getNextSiblingKey() : u,
          h = o ? u : r.getPrevSiblingKey();
        return t.withMutations(function (t) {
          Ve(s, t, function (t) {
            var e = t.getChildKeys();
            return t.merge({ children: e.delete(e.indexOf(a)) });
          }),
            Ve(l, t, function (t) {
              return t.merge({ nextSibling: c });
            }),
            Ve(c, t, function (t) {
              return t.merge({ prevSibling: l });
            }),
            Ve(p, t, function (t) {
              return t.merge({ prevSibling: a });
            }),
            Ve(h, t, function (t) {
              return t.merge({ nextSibling: a });
            }),
            Ve(f, t, function (t) {
              var e = t.getChildKeys(),
                r = e.indexOf(u),
                n = o ? r + 1 : 0 !== r ? r - 1 : 0,
                i = e.toArray();
              return i.splice(n, 0, a), t.merge({ children: Ge(i) });
            }),
            Ve(a, t, function (t) {
              return t.merge({ nextSibling: p, prevSibling: h, parent: f });
            });
        });
      },
      Je = function (t, e, r, n) {
        "replace" === n && X(!1);
        var i = r.getKey(),
          o = e.getKey();
        o === i && X(!1);
        var a = t.getBlockMap(),
          u = e instanceof U,
          s = [e],
          c = a.delete(o);
        u &&
          ((s = []),
          (c = a.withMutations(function (t) {
            var r = e.getNextSiblingKey(),
              n = vt(e, t);
            t.toSeq()
              .skipUntil(function (t) {
                return t.getKey() === o;
              })
              .takeWhile(function (t) {
                var e = t.getKey(),
                  i = e === o,
                  a = r && e !== r,
                  u = !r && t.getParentKey() && (!n || e !== n);
                return !!(i || a || u);
              })
              .forEach(function (e) {
                s.push(e), t.delete(e.getKey());
              });
          })));
        var l = c.toSeq().takeUntil(function (t) {
            return t === r;
          }),
          f = c
            .toSeq()
            .skipUntil(function (t) {
              return t === r;
            })
            .skip(1),
          p = s.map(function (t) {
            return [t.getKey(), t];
          }),
          h = $e();
        if ("before" === n) {
          var d = t.getBlockBefore(i);
          d && d.getKey() === e.getKey() && X(!1),
            (h = l.concat([].concat(p, [[i, r]]), f).toOrderedMap());
        } else if ("after" === n) {
          var g = t.getBlockAfter(i);
          g && g.getKey() === o && X(!1),
            (h = l.concat([[i, r]].concat(p), f).toOrderedMap());
        }
        return t.merge({
          blockMap: Xe(h, e, r, n, u),
          selectionBefore: t.getSelectionAfter(),
          selectionAfter: t
            .getSelectionAfter()
            .merge({ anchorKey: o, focusKey: o }),
        });
      };
    function Ze(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function Qe(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Ze(Object(r), !0).forEach(function (e) {
              tr(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : Ze(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    function tr(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    var er = st("draft_tree_data_support"),
      rr = er ? U : T,
      nr = o.List,
      ir = o.Repeat,
      or = {
        insertAtomicBlock: function (t, e, r) {
          var n = t.getCurrentContent(),
            i = t.getSelection(),
            o = Kt.removeRange(n, i, "backward"),
            a = o.getSelectionAfter(),
            s = Kt.splitBlock(o, a),
            c = s.getSelectionAfter(),
            l = Kt.setBlockType(s, c, "atomic"),
            f = v.create({ entity: e }),
            p = {
              key: rt(),
              type: "atomic",
              text: r,
              characterList: nr(ir(f, r.length)),
            },
            h = { key: rt(), type: "unstyled" };
          er &&
            ((p = Qe(Qe({}, p), {}, { nextSibling: h.key })),
            (h = Qe(Qe({}, h), {}, { prevSibling: p.key })));
          var d = [new rr(p), new rr(h)],
            g = u.createFromArray(d),
            y = Kt.replaceWithFragment(l, c, g),
            m = y.merge({
              selectionBefore: i,
              selectionAfter: y.getSelectionAfter().set("hasFocus", !0),
            });
          return Ye.push(t, m, "insert-fragment");
        },
        moveAtomicBlock: function (t, e, r, n) {
          var i,
            o = t.getCurrentContent(),
            a = t.getSelection();
          if ("before" === n || "after" === n) {
            var u = o.getBlockForKey(
              "before" === n ? r.getStartKey() : r.getEndKey()
            );
            i = Je(o, e, u, n);
          } else {
            var s = Kt.removeRange(o, r, "backward"),
              c = s.getSelectionAfter(),
              l = s.getBlockForKey(c.getFocusKey());
            if (0 === c.getStartOffset()) i = Je(s, e, l, "before");
            else if (c.getEndOffset() === l.getLength())
              i = Je(s, e, l, "after");
            else {
              var f = Kt.splitBlock(s, c),
                p = f.getSelectionAfter(),
                h = f.getBlockForKey(p.getFocusKey());
              i = Je(f, e, h, "before");
            }
          }
          var d = i.merge({
            selectionBefore: a,
            selectionAfter: i.getSelectionAfter().set("hasFocus", !0),
          });
          return Ye.push(t, d, "move-block");
        },
      };
    var ar = o.List;
    var ur = (function () {
      function t(t) {
        var e, r, n;
        (n = void 0),
          (r = "_decorators") in (e = this)
            ? Object.defineProperty(e, r, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = n),
          (this._decorators = t.slice());
      }
      var e = t.prototype;
      return (
        (e.getDecorations = function (t, e) {
          var r = Array(t.getText().length).fill(null);
          return (
            this._decorators.forEach(function (n, i) {
              var o = 0;
              (0, n.strategy)(
                t,
                function (t, e) {
                  (function (t, e, r) {
                    for (var n = e; n < r; n++) if (null != t[n]) return !1;
                    return !0;
                  })(r, t, e) &&
                    (!(function (t, e, r, n) {
                      for (var i = e; i < r; i++) t[i] = n;
                    })(r, t, e, i + "." + o),
                    o++);
                },
                e
              );
            }),
            ar(r)
          );
        }),
        (e.getComponentForKey = function (t) {
          var e = parseInt(t.split(".")[0], 10);
          return this._decorators[e].component;
        }),
        (e.getPropsForKey = function (t) {
          var e = parseInt(t.split(".")[0], 10);
          return this._decorators[e].props;
        }),
        t
      );
    })();
    function sr(t) {
      return t.replace(/\//g, "-");
    }
    var cr = function (t) {
        return "object" == typeof t
          ? Object.keys(t)
              .filter(function (e) {
                return t[e];
              })
              .map(sr)
              .join(" ")
          : Array.prototype.map.call(arguments, sr).join(" ");
      },
      lr = (0, o.Map)({
        "header-one": { element: "h1" },
        "header-two": { element: "h2" },
        "header-three": { element: "h3" },
        "header-four": { element: "h4" },
        "header-five": { element: "h5" },
        "header-six": { element: "h6" },
        "unordered-list-item": {
          element: "li",
          wrapper: r._.createElement("ul", {
            className: cr("public/DraftStyleDefault/ul"),
          }),
        },
        "ordered-list-item": {
          element: "li",
          wrapper: r._.createElement("ol", {
            className: cr("public/DraftStyleDefault/ol"),
          }),
        },
        blockquote: { element: "blockquote" },
        atomic: { element: "figure" },
        "code-block": {
          element: "pre",
          wrapper: r._.createElement("pre", {
            className: cr("public/DraftStyleDefault/pre"),
          }),
        },
        unstyled: { element: "div", aliasedElements: ["p"] },
      }),
      fr = {
        BOLD: { fontWeight: "bold" },
        CODE: { fontFamily: "monospace", wordWrap: "break-word" },
        ITALIC: { fontStyle: "italic" },
        STRIKETHROUGH: { textDecoration: "line-through" },
        UNDERLINE: { textDecoration: "underline" },
      },
      pr = 8,
      hr = 9,
      dr = 13,
      gr = 27,
      yr = 32,
      vr = 37,
      mr = 38,
      br = 39,
      _r = 40,
      wr = 46,
      Sr = "-",
      Or = {
        encode: function (t, e, r) {
          return t + Sr + e + Sr + r;
        },
        decode: function (t) {
          var e = t.split(Sr).reverse(),
            r = e[0],
            n = e[1];
          return {
            blockKey: e.slice(2).reverse().join(Sr),
            decoratorKey: parseInt(n, 10),
            leafKey: parseInt(r, 10),
          };
        },
      },
      kr = e.c(function (t, r) {
        !(function (e, n) {
          var i = "function",
            o = "undefined",
            a = "object",
            u = "string",
            s = "model",
            c = "name",
            l = "type",
            f = "vendor",
            p = "version",
            h = "architecture",
            d = "console",
            g = "mobile",
            y = "tablet",
            v = "smarttv",
            m = "wearable",
            b = "embedded",
            _ = "Amazon",
            w = "Apple",
            S = "ASUS",
            O = "BlackBerry",
            k = "Firefox",
            E = "Google",
            C = "Huawei",
            x = "LG",
            D = "Microsoft",
            T = "Motorola",
            M = "Opera",
            I = "Samsung",
            K = "Sony",
            A = "Xiaomi",
            L = "Zebra",
            B = "Facebook",
            P = function (t) {
              for (var e = {}, r = 0; r < t.length; r++)
                e[t[r].toUpperCase()] = t[r];
              return e;
            },
            j = function (t, e) {
              return typeof t === u && -1 !== R(e).indexOf(R(t));
            },
            R = function (t) {
              return t.toLowerCase();
            },
            N = function (t, e) {
              if (typeof t === u)
                return (
                  (t = t.replace(/^\s\s*/, "").replace(/\s\s*$/, "")),
                  typeof e === o ? t : t.substring(0, 255)
                );
            },
            F = function (t, e) {
              for (var r, o, u, s, c, l, f = 0; f < e.length && !c; ) {
                var p = e[f],
                  h = e[f + 1];
                for (r = o = 0; r < p.length && !c; )
                  if ((c = p[r++].exec(t)))
                    for (u = 0; u < h.length; u++)
                      (l = c[++o]),
                        typeof (s = h[u]) === a && s.length > 0
                          ? 2 === s.length
                            ? typeof s[1] == i
                              ? (this[s[0]] = s[1].call(this, l))
                              : (this[s[0]] = s[1])
                            : 3 === s.length
                            ? typeof s[1] !== i || (s[1].exec && s[1].test)
                              ? (this[s[0]] = l ? l.replace(s[1], s[2]) : n)
                              : (this[s[0]] = l ? s[1].call(this, l, s[2]) : n)
                            : 4 === s.length &&
                              (this[s[0]] = l
                                ? s[3].call(this, l.replace(s[1], s[2]))
                                : n)
                          : (this[s] = l || n);
                f += 2;
              }
            },
            z = function (t, e) {
              for (var r in e)
                if (typeof e[r] === a && e[r].length > 0) {
                  for (var i = 0; i < e[r].length; i++)
                    if (j(e[r][i], t)) return "?" === r ? n : r;
                } else if (j(e[r], t)) return "?" === r ? n : r;
              return t;
            },
            U = {
              ME: "4.90",
              "NT 3.11": "NT3.51",
              "NT 4.0": "NT4.0",
              2e3: "NT 5.0",
              XP: ["NT 5.1", "NT 5.2"],
              Vista: "NT 6.0",
              7: "NT 6.1",
              8: "NT 6.2",
              8.1: "NT 6.3",
              10: ["NT 6.4", "NT 10.0"],
              RT: "ARM",
            },
            H = {
              browser: [
                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                [p, [c, "Chrome"]],
                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                [p, [c, "Edge"]],
                [
                  /(opera mini)\/([-\w\.]+)/i,
                  /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                  /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
                ],
                [c, p],
                [/opios[\/ ]+([\w\.]+)/i],
                [p, [c, "Opera Mini"]],
                [/\bopr\/([\w\.]+)/i],
                [p, [c, M]],
                [
                  /(kindle)\/([\w\.]+)/i,
                  /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                  /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                  /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                  /(?:ms|\()(ie) ([\w\.]+)/i,
                  /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,
                  /(weibo)__([\d\.]+)/i,
                ],
                [c, p],
                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                [p, [c, "UCBrowser"]],
                [/\bqbcore\/([\w\.]+)/i],
                [p, [c, "WeChat(Win) Desktop"]],
                [/micromessenger\/([\w\.]+)/i],
                [p, [c, "WeChat"]],
                [/konqueror\/([\w\.]+)/i],
                [p, [c, "Konqueror"]],
                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                [p, [c, "IE"]],
                [/yabrowser\/([\w\.]+)/i],
                [p, [c, "Yandex"]],
                [/(avast|avg)\/([\w\.]+)/i],
                [[c, /(.+)/, "$1 Secure Browser"], p],
                [/\bfocus\/([\w\.]+)/i],
                [p, [c, "Firefox Focus"]],
                [/\bopt\/([\w\.]+)/i],
                [p, [c, "Opera Touch"]],
                [/coc_coc\w+\/([\w\.]+)/i],
                [p, [c, "Coc Coc"]],
                [/dolfin\/([\w\.]+)/i],
                [p, [c, "Dolphin"]],
                [/coast\/([\w\.]+)/i],
                [p, [c, "Opera Coast"]],
                [/miuibrowser\/([\w\.]+)/i],
                [p, [c, "MIUI Browser"]],
                [/fxios\/([-\w\.]+)/i],
                [p, [c, k]],
                [/\bqihu|(qi?ho?o?|360)browser/i],
                [[c, "360 Browser"]],
                [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
                [[c, /(.+)/, "$1 Browser"], p],
                [/(comodo_dragon)\/([\w\.]+)/i],
                [[c, /_/g, " "], p],
                [
                  /(electron)\/([\w\.]+) safari/i,
                  /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                  /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
                ],
                [c, p],
                [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i],
                [c],
                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                [[c, B], p],
                [
                  /safari (line)\/([\w\.]+)/i,
                  /\b(line)\/([\w\.]+)\/iab/i,
                  /(chromium|instagram)[\/ ]([-\w\.]+)/i,
                ],
                [c, p],
                [/\bgsa\/([\w\.]+) .*safari\//i],
                [p, [c, "GSA"]],
                [/headlesschrome(?:\/([\w\.]+)| )/i],
                [p, [c, "Chrome Headless"]],
                [/ wv\).+(chrome)\/([\w\.]+)/i],
                [[c, "Chrome WebView"], p],
                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                [p, [c, "Android Browser"]],
                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                [c, p],
                [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],
                [p, [c, "Mobile Safari"]],
                [/version\/([\w\.]+) .*(mobile ?safari|safari)/i],
                [p, c],
                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                [
                  c,
                  [
                    p,
                    z,
                    {
                      "1.0": "/8",
                      1.2: "/1",
                      1.3: "/3",
                      "2.0": "/412",
                      "2.0.2": "/416",
                      "2.0.3": "/417",
                      "2.0.4": "/419",
                      "?": "/",
                    },
                  ],
                ],
                [/(webkit|khtml)\/([\w\.]+)/i],
                [c, p],
                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                [[c, "Netscape"], p],
                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                [p, [c, "Firefox Reality"]],
                [
                  /ekiohf.+(flow)\/([\w\.]+)/i,
                  /(swiftfox)/i,
                  /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                  /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                  /(firefox)\/([\w\.]+)/i,
                  /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                  /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                  /(links) \(([\w\.]+)/i,
                ],
                [c, p],
              ],
              cpu: [
                [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                [[h, "amd64"]],
                [/(ia32(?=;))/i],
                [[h, R]],
                [/((?:i[346]|x)86)[;\)]/i],
                [[h, "ia32"]],
                [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                [[h, "arm64"]],
                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                [[h, "armhf"]],
                [/windows (ce|mobile); ppc;/i],
                [[h, "arm"]],
                [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                [[h, /ower/, "", R]],
                [/(sun4\w)[;\)]/i],
                [[h, "sparc"]],
                [
                  /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
                ],
                [[h, R]],
              ],
              device: [
                [
                  /\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
                ],
                [s, [f, I], [l, y]],
                [
                  /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
                  /samsung[- ]([-\w]+)/i,
                  /sec-(sgh\w+)/i,
                ],
                [s, [f, I], [l, g]],
                [/\((ip(?:hone|od)[\w ]*);/i],
                [s, [f, w], [l, g]],
                [
                  /\((ipad);[-\w\),; ]+apple/i,
                  /applecoremedia\/[\w\.]+ \((ipad)/i,
                  /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
                ],
                [s, [f, w], [l, y]],
                [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                [s, [f, C], [l, y]],
                [
                  /(?:huawei|honor)([-\w ]+)[;\)]/i,
                  /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i,
                ],
                [s, [f, C], [l, g]],
                [
                  /\b(poco[\w ]+)(?: bui|\))/i,
                  /\b; (\w+) build\/hm\1/i,
                  /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                  /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                  /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
                ],
                [
                  [s, /_/g, " "],
                  [f, A],
                  [l, g],
                ],
                [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                [
                  [s, /_/g, " "],
                  [f, A],
                  [l, y],
                ],
                [
                  /; (\w+) bui.+ oppo/i,
                  /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
                ],
                [s, [f, "OPPO"], [l, g]],
                [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                [s, [f, "Vivo"], [l, g]],
                [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                [s, [f, "Realme"], [l, g]],
                [
                  /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                  /\bmot(?:orola)?[- ](\w*)/i,
                  /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
                ],
                [s, [f, T], [l, g]],
                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                [s, [f, T], [l, y]],
                [
                  /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i,
                ],
                [s, [f, x], [l, y]],
                [
                  /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                  /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                  /\blg-?([\d\w]+) bui/i,
                ],
                [s, [f, x], [l, g]],
                [
                  /(ideatab[-\w ]+)/i,
                  /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
                ],
                [s, [f, "Lenovo"], [l, y]],
                [
                  /(?:maemo|nokia).*(n900|lumia \d+)/i,
                  /nokia[-_ ]?([-\w\.]*)/i,
                ],
                [
                  [s, /_/g, " "],
                  [f, "Nokia"],
                  [l, g],
                ],
                [/(pixel c)\b/i],
                [s, [f, E], [l, y]],
                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                [s, [f, E], [l, g]],
                [
                  /droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
                ],
                [s, [f, K], [l, g]],
                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                [
                  [s, "Xperia Tablet"],
                  [f, K],
                  [l, y],
                ],
                [
                  / (kb2005|in20[12]5|be20[12][59])\b/i,
                  /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
                ],
                [s, [f, "OnePlus"], [l, g]],
                [
                  /(alexa)webm/i,
                  /(kf[a-z]{2}wi)( bui|\))/i,
                  /(kf[a-z]+)( bui|\)).+silk\//i,
                ],
                [s, [f, _], [l, y]],
                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                [
                  [s, /(.+)/g, "Fire Phone $1"],
                  [f, _],
                  [l, g],
                ],
                [/(playbook);[-\w\),; ]+(rim)/i],
                [s, f, [l, y]],
                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                [s, [f, O], [l, g]],
                [
                  /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
                ],
                [s, [f, S], [l, y]],
                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                [s, [f, S], [l, g]],
                [/(nexus 9)/i],
                [s, [f, "HTC"], [l, y]],
                [
                  /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                  /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                  /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i,
                ],
                [f, [s, /_/g, " "], [l, g]],
                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                [s, [f, "Acer"], [l, y]],
                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                [s, [f, "Meizu"], [l, g]],
                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                [s, [f, "Sharp"], [l, g]],
                [
                  /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                  /(hp) ([\w ]+\w)/i,
                  /(asus)-?(\w+)/i,
                  /(microsoft); (lumia[\w ]+)/i,
                  /(lenovo)[-_ ]?([-\w]+)/i,
                  /(jolla)/i,
                  /(oppo) ?([\w ]+) bui/i,
                ],
                [f, s, [l, g]],
                [
                  /(archos) (gamepad2?)/i,
                  /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                  /(kindle)\/([\w\.]+)/i,
                  /(nook)[\w ]+build\/(\w+)/i,
                  /(dell) (strea[kpr\d ]*[\dko])/i,
                  /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                  /(trinity)[- ]*(t\d{3}) bui/i,
                  /(gigaset)[- ]+(q\w{1,9}) bui/i,
                  /(vodafone) ([\w ]+)(?:\)| bui)/i,
                ],
                [f, s, [l, y]],
                [/(surface duo)/i],
                [s, [f, D], [l, y]],
                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                [s, [f, "Fairphone"], [l, g]],
                [/(u304aa)/i],
                [s, [f, "AT&T"], [l, g]],
                [/\bsie-(\w*)/i],
                [s, [f, "Siemens"], [l, g]],
                [/\b(rct\w+) b/i],
                [s, [f, "RCA"], [l, y]],
                [/\b(venue[\d ]{2,7}) b/i],
                [s, [f, "Dell"], [l, y]],
                [/\b(q(?:mv|ta)\w+) b/i],
                [s, [f, "Verizon"], [l, y]],
                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                [s, [f, "Barnes & Noble"], [l, y]],
                [/\b(tm\d{3}\w+) b/i],
                [s, [f, "NuVision"], [l, y]],
                [/\b(k88) b/i],
                [s, [f, "ZTE"], [l, y]],
                [/\b(nx\d{3}j) b/i],
                [s, [f, "ZTE"], [l, g]],
                [/\b(gen\d{3}) b.+49h/i],
                [s, [f, "Swiss"], [l, g]],
                [/\b(zur\d{3}) b/i],
                [s, [f, "Swiss"], [l, y]],
                [/\b((zeki)?tb.*\b) b/i],
                [s, [f, "Zeki"], [l, y]],
                [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                [[f, "Dragon Touch"], s, [l, y]],
                [/\b(ns-?\w{0,9}) b/i],
                [s, [f, "Insignia"], [l, y]],
                [/\b((nxa|next)-?\w{0,9}) b/i],
                [s, [f, "NextBook"], [l, y]],
                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                [[f, "Voice"], s, [l, g]],
                [/\b(lvtel\-)?(v1[12]) b/i],
                [[f, "LvTel"], s, [l, g]],
                [/\b(ph-1) /i],
                [s, [f, "Essential"], [l, g]],
                [/\b(v(100md|700na|7011|917g).*\b) b/i],
                [s, [f, "Envizen"], [l, y]],
                [/\b(trio[-\w\. ]+) b/i],
                [s, [f, "MachSpeed"], [l, y]],
                [/\btu_(1491) b/i],
                [s, [f, "Rotor"], [l, y]],
                [/(shield[\w ]+) b/i],
                [s, [f, "Nvidia"], [l, y]],
                [/(sprint) (\w+)/i],
                [f, s, [l, g]],
                [/(kin\.[onetw]{3})/i],
                [
                  [s, /\./g, " "],
                  [f, D],
                  [l, g],
                ],
                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                [s, [f, L], [l, y]],
                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                [s, [f, L], [l, g]],
                [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                [f, s, [l, d]],
                [/droid.+; (shield) bui/i],
                [s, [f, "Nvidia"], [l, d]],
                [/(playstation [345portablevi]+)/i],
                [s, [f, K], [l, d]],
                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                [s, [f, D], [l, d]],
                [/smart-tv.+(samsung)/i],
                [f, [l, v]],
                [/hbbtv.+maple;(\d+)/i],
                [
                  [s, /^/, "SmartTV"],
                  [f, I],
                  [l, v],
                ],
                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                [
                  [f, x],
                  [l, v],
                ],
                [/(apple) ?tv/i],
                [f, [s, "Apple TV"], [l, v]],
                [/crkey/i],
                [
                  [s, "Chromecast"],
                  [f, E],
                  [l, v],
                ],
                [/droid.+aft(\w)( bui|\))/i],
                [s, [f, _], [l, v]],
                [/\(dtv[\);].+(aquos)/i],
                [s, [f, "Sharp"], [l, v]],
                [
                  /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                  /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i,
                ],
                [
                  [f, N],
                  [s, N],
                  [l, v],
                ],
                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                [[l, v]],
                [/((pebble))app/i],
                [f, s, [l, m]],
                [/droid.+; (glass) \d/i],
                [s, [f, E], [l, m]],
                [/droid.+; (wt63?0{2,3})\)/i],
                [s, [f, L], [l, m]],
                [/(quest( 2)?)/i],
                [s, [f, B], [l, m]],
                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                [f, [l, b]],
                [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                [s, [l, g]],
                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                [s, [l, y]],
                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                [[l, y]],
                [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],
                [[l, g]],
                [/(android[-\w\. ]{0,9});.+buil/i],
                [s, [f, "Generic"]],
              ],
              engine: [
                [/windows.+ edge\/([\w\.]+)/i],
                [p, [c, "EdgeHTML"]],
                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                [p, [c, "Blink"]],
                [
                  /(presto)\/([\w\.]+)/i,
                  /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                  /ekioh(flow)\/([\w\.]+)/i,
                  /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                  /(icab)[\/ ]([23]\.[\d\.]+)/i,
                ],
                [c, p],
                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                [p, c],
              ],
              os: [
                [/microsoft (windows) (vista|xp)/i],
                [c, p],
                [
                  /(windows) nt 6\.2; (arm)/i,
                  /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                  /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                ],
                [c, [p, z, U]],
                [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                [
                  [c, "Windows"],
                  [p, z, U],
                ],
                [
                  /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                  /cfnetwork\/.+darwin/i,
                ],
                [
                  [p, /_/g, "."],
                  [c, "iOS"],
                ],
                [
                  /(mac os x) ?([\w\. ]*)/i,
                  /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
                ],
                [
                  [c, "Mac OS"],
                  [p, /_/g, "."],
                ],
                [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
                [p, c],
                [
                  /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                  /(blackberry)\w*\/([\w\.]*)/i,
                  /(tizen|kaios)[\/ ]([\w\.]+)/i,
                  /\((series40);/i,
                ],
                [c, p],
                [/\(bb(10);/i],
                [p, [c, O]],
                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                [p, [c, "Symbian"]],
                [
                  /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
                ],
                [p, [c, "Firefox OS"]],
                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                [p, [c, "webOS"]],
                [/crkey\/([\d\.]+)/i],
                [p, [c, "Chromecast"]],
                [/(cros) [\w]+ ([\w\.]+\w)/i],
                [[c, "Chromium OS"], p],
                [
                  /(nintendo|playstation) ([wids345portablevuch]+)/i,
                  /(xbox); +xbox ([^\);]+)/i,
                  /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                  /(mint)[\/\(\) ]?(\w*)/i,
                  /(mageia|vectorlinux)[; ]/i,
                  /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                  /(hurd|linux) ?([\w\.]*)/i,
                  /(gnu) ?([\w\.]*)/i,
                  /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                  /(haiku) (\w+)/i,
                ],
                [c, p],
                [/(sunos) ?([\w\.\d]*)/i],
                [[c, "Solaris"], p],
                [
                  /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                  /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                  /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
                  /(unix) ?([\w\.]*)/i,
                ],
                [c, p],
              ],
            },
            q = function (t, r) {
              if ((typeof t === a && ((r = t), (t = n)), !(this instanceof q)))
                return new q(t, r).getResult();
              var i =
                  t ||
                  (typeof e !== o && e.navigator && e.navigator.userAgent
                    ? e.navigator.userAgent
                    : ""),
                s = r
                  ? (function (t, e) {
                      var r = {};
                      for (var n in t)
                        e[n] && e[n].length % 2 == 0
                          ? (r[n] = e[n].concat(t[n]))
                          : (r[n] = t[n]);
                      return r;
                    })(H, r)
                  : H;
              return (
                (this.getBrowser = function () {
                  var t,
                    e = {};
                  return (
                    (e.name = n),
                    (e.version = n),
                    F.call(e, i, s.browser),
                    (e.major =
                      typeof (t = e.version) === u
                        ? t.replace(/[^\d\.]/g, "").split(".")[0]
                        : n),
                    e
                  );
                }),
                (this.getCPU = function () {
                  var t = {};
                  return (t.architecture = n), F.call(t, i, s.cpu), t;
                }),
                (this.getDevice = function () {
                  var t = {};
                  return (
                    (t.vendor = n),
                    (t.model = n),
                    (t.type = n),
                    F.call(t, i, s.device),
                    t
                  );
                }),
                (this.getEngine = function () {
                  var t = {};
                  return (
                    (t.name = n), (t.version = n), F.call(t, i, s.engine), t
                  );
                }),
                (this.getOS = function () {
                  var t = {};
                  return (t.name = n), (t.version = n), F.call(t, i, s.os), t;
                }),
                (this.getResult = function () {
                  return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU(),
                  };
                }),
                (this.getUA = function () {
                  return i;
                }),
                (this.setUA = function (t) {
                  return (
                    (i = typeof t === u && t.length > 255 ? N(t, 255) : t), this
                  );
                }),
                this.setUA(i),
                this
              );
            };
          (q.VERSION = "0.7.31"),
            (q.BROWSER = P([c, p, "major"])),
            (q.CPU = P([h])),
            (q.DEVICE = P([s, f, l, d, g, v, y, m, b])),
            (q.ENGINE = q.OS = P([c, p])),
            t.exports && (r = t.exports = q),
            (r.UAParser = q);
          var W = typeof e !== o && (e.jQuery || e.Zepto);
          if (W && !W.ua) {
            var Y = new q();
            (W.ua = Y.getResult()),
              (W.ua.get = function () {
                return Y.getUA();
              }),
              (W.ua.set = function (t) {
                Y.setUA(t);
                var e = Y.getResult();
                for (var r in e) W.ua[r] = e[r];
              });
          }
        })("object" == typeof window ? window : e.a);
      }),
      Er = "Unknown",
      Cr = { "Mac OS": "Mac OS X" };
    var xr,
      Dr = new kr().getResult(),
      Tr = (function (t) {
        if (!t) return { major: "", minor: "" };
        var e = t.split(".");
        return { major: e[0], minor: e[1] };
      })(Dr.browser.version),
      Mr = {
        browserArchitecture: Dr.cpu.architecture || Er,
        browserFullVersion: Dr.browser.version || Er,
        browserMinorVersion: Tr.minor || Er,
        browserName: Dr.browser.name || Er,
        browserVersion: Dr.browser.major || Er,
        deviceName: Dr.device.model || Er,
        engineName: Dr.engine.name || Er,
        engineVersion: Dr.engine.version || Er,
        platformArchitecture: Dr.cpu.architecture || Er,
        platformName: ((xr = Dr.os.name), Cr[xr] || xr || Er),
        platformVersion: Dr.os.version || Er,
        platformFullVersion: Dr.os.version || Er,
      },
      Ir = /\./,
      Kr = /\|\|/,
      Ar = /\s+\-\s+/,
      Lr = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/,
      Br = /^(\d*)(.*)/;
    function Pr(t, e) {
      var r = t.split(Kr);
      return r.length > 1
        ? r.some(function (t) {
            return $r.contains(t, e);
          })
        : (function (t, e) {
            var r = t.split(Ar);
            if (((r.length > 0 && r.length <= 2) || X(!1), 1 === r.length))
              return jr(r[0], e);
            var n = r[0],
              i = r[1];
            return (
              (Ur(n) && Ur(i)) || X(!1), jr(">=" + n, e) && jr("<=" + i, e)
            );
          })((t = r[0].trim()), e);
    }
    function jr(t, e) {
      if ("" === (t = t.trim())) return !0;
      var r,
        n = e.split(Ir),
        i = Fr(t),
        o = i.modifier,
        a = i.rangeComponents;
      switch (o) {
        case "<":
          return Rr(n, a);
        case "<=":
          return -1 === (r = Yr(n, a)) || 0 === r;
        case ">=":
          return Nr(n, a);
        case ">":
          return (function (t, e) {
            return 1 === Yr(t, e);
          })(n, a);
        case "~":
        case "~>":
          return (function (t, e) {
            var r = e.slice(),
              n = e.slice();
            n.length > 1 && n.pop();
            var i = n.length - 1,
              o = parseInt(n[i], 10);
            zr(o) && (n[i] = o + 1 + "");
            return Nr(t, r) && Rr(t, n);
          })(n, a);
        default:
          return (function (t, e) {
            return 0 === Yr(t, e);
          })(n, a);
      }
    }
    function Rr(t, e) {
      return -1 === Yr(t, e);
    }
    function Nr(t, e) {
      var r = Yr(t, e);
      return 1 === r || 0 === r;
    }
    function Fr(t) {
      var e = t.split(Ir),
        r = e[0].match(Lr);
      return (
        r || X(!1),
        { modifier: r[1], rangeComponents: [r[2]].concat(e.slice(1)) }
      );
    }
    function zr(t) {
      return !isNaN(t) && isFinite(t);
    }
    function Ur(t) {
      return !Fr(t).modifier;
    }
    function Hr(t, e) {
      for (var r = t.length; r < e; r++) t[r] = "0";
    }
    function qr(t, e) {
      var r = t.match(Br)[1],
        n = e.match(Br)[1],
        i = parseInt(r, 10),
        o = parseInt(n, 10);
      return zr(i) && zr(o) && i !== o ? Wr(i, o) : Wr(t, e);
    }
    function Wr(t, e) {
      return typeof t != typeof e && X(!1), t > e ? 1 : t < e ? -1 : 0;
    }
    function Yr(t, e) {
      for (
        var r = (function (t, e) {
            Hr((t = t.slice()), (e = e.slice()).length);
            for (var r = 0; r < e.length; r++) {
              var n = e[r].match(/^[x*]$/i);
              if (
                n &&
                ((e[r] = t[r] = "0"), "*" === n[0] && r === e.length - 1)
              )
                for (var i = r; i < t.length; i++) t[i] = "0";
            }
            return Hr(e, t.length), [t, e];
          })(t, e),
          n = r[0],
          i = r[1],
          o = 0;
        o < i.length;
        o++
      ) {
        var a = qr(n[o], i[o]);
        if (a) return a;
      }
      return 0;
    }
    var $r = {
        contains: function (t, e) {
          return Pr(t.trim(), e.trim());
        },
      },
      Gr = $r,
      Vr = Object.prototype.hasOwnProperty;
    var Xr = function (t, e, r) {
      if (!t) return null;
      var n = {};
      for (var i in t) Vr.call(t, i) && (n[i] = e.call(r, t[i], i, t));
      return n;
    };
    function Jr(t, e, r, n) {
      if (t === r) return !0;
      if (!r.startsWith(t)) return !1;
      var i = r.slice(t.length);
      return !!e && ((i = n ? n(i) : i), Gr.contains(i, e));
    }
    function Zr(t) {
      return "Windows" === Mr.platformName ? t.replace(/^\s*NT/, "") : t;
    }
    var Qr = Xr(
      {
        isBrowser: function (t) {
          return Jr(Mr.browserName, Mr.browserFullVersion, t);
        },
        isBrowserArchitecture: function (t) {
          return Jr(Mr.browserArchitecture, null, t);
        },
        isDevice: function (t) {
          return Jr(Mr.deviceName, null, t);
        },
        isEngine: function (t) {
          return Jr(Mr.engineName, Mr.engineVersion, t);
        },
        isPlatform: function (t) {
          return Jr(Mr.platformName, Mr.platformFullVersion, t, Zr);
        },
        isPlatformArchitecture: function (t) {
          return Jr(Mr.platformArchitecture, null, t);
        },
      },
      function (t) {
        var e = {};
        return function (r) {
          return e.hasOwnProperty(r) || (e[r] = t.call(this, r)), e[r];
        };
      }
    );
    var tn = function t(e) {
      if (e instanceof Element) {
        var r = e.getAttribute("data-offset-key");
        if (r) return r;
        for (var n = 0; n < e.childNodes.length; n++) {
          var i = t(e.childNodes[n]);
          if (i) return i;
        }
      }
      return null;
    };
    var en = function (t) {
      for (var e = t; e && e !== document.documentElement; ) {
        var r = tn(e);
        if (null != r) return r;
        e = e.parentNode;
      }
      return null;
    };
    function rn(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    var nn = o.Map,
      on = {
        subtree: !0,
        characterData: !0,
        childList: !0,
        characterDataOldValue: !1,
        attributes: !1,
      },
      an = Qr.isBrowser("IE <= 11"),
      un = (function () {
        function t(t) {
          var e = this;
          rn(this, "observer", void 0),
            rn(this, "container", void 0),
            rn(this, "mutations", void 0),
            rn(this, "onCharData", void 0),
            (this.container = t),
            (this.mutations = nn()),
            window.MutationObserver && !an
              ? (this.observer = new window.MutationObserver(function (t) {
                  return e.registerMutations(t);
                }))
              : (this.onCharData = function (t) {
                  t.target instanceof Node || X(!1),
                    e.registerMutation({
                      type: "characterData",
                      target: t.target,
                    });
                });
        }
        var e = t.prototype;
        return (
          (e.start = function () {
            this.observer
              ? this.observer.observe(this.container, on)
              : this.container.addEventListener(
                  "DOMCharacterDataModified",
                  this.onCharData
                );
          }),
          (e.stopAndFlushMutations = function () {
            this.observer
              ? (this.registerMutations(this.observer.takeRecords()),
                this.observer.disconnect())
              : this.container.removeEventListener(
                  "DOMCharacterDataModified",
                  this.onCharData
                );
            var t = this.mutations;
            return (this.mutations = nn()), t;
          }),
          (e.registerMutations = function (t) {
            for (var e = 0; e < t.length; e++) this.registerMutation(t[e]);
          }),
          (e.getMutationTextContent = function (t) {
            var e = t.type,
              r = t.target,
              n = t.removedNodes;
            if ("characterData" === e) {
              if ("" !== r.textContent) return r.textContent;
            } else if ("childList" === e && n && n.length) return "";
            return null;
          }),
          (e.registerMutation = function (t) {
            var e = this.getMutationTextContent(t);
            if (null != e) {
              var r = Ie(en(t.target));
              this.mutations = this.mutations.set(r, e);
            }
          }),
          t
        );
      })();
    function sn(t, e) {
      return e && "MUTABLE" === t.__get(e).getMutability() ? e : null;
    }
    var cn = function (t, e) {
      var r;
      if (e.isCollapsed()) {
        var n = e.getAnchorKey(),
          i = e.getAnchorOffset();
        return i > 0
          ? (r = t.getBlockForKey(n).getEntityAt(i - 1)) !==
            t.getBlockForKey(n).getEntityAt(i)
            ? null
            : sn(t.getEntityMap(), r)
          : null;
      }
      var o = e.getStartKey(),
        a = e.getStartOffset(),
        u = t.getBlockForKey(o);
      return (
        (r = a === u.getLength() ? null : u.getEntityAt(a)),
        sn(t.getEntityMap(), r)
      );
    };
    var ln = function (t, e, r, n, i) {
      var o = Ie(t.getSelection()),
        a = Or.decode(e),
        u = Or.decode(n),
        s = a.blockKey,
        c = u.blockKey,
        l = t.getBlockTree(s),
        f = t.getBlockTree(c);
      if (!l || !f) return o;
      var p = l.getIn([a.decoratorKey, "leaves", a.leafKey]),
        h = f.getIn([u.decoratorKey, "leaves", u.leafKey]),
        d = p.get("start"),
        g = h.get("start"),
        y = p ? d + r : null,
        v = h ? g + i : null;
      if (
        o.getAnchorKey() === s &&
        o.getAnchorOffset() === y &&
        o.getFocusKey() === c &&
        o.getFocusOffset() === v
      )
        return o;
      var m = !1;
      if (s === c) {
        var b = p.get("end"),
          _ = h.get("end");
        m = g === d && _ === b ? i < r : g < d;
      } else {
        m =
          t
            .getCurrentContent()
            .getBlockMap()
            .keySeq()
            .skipUntil(function (t) {
              return t === s || t === c;
            })
            .first() === c;
      }
      return o.merge({
        anchorKey: s,
        anchorOffset: y,
        focusKey: c,
        focusOffset: v,
        isBackward: m,
      });
    };
    function fn(t, e, r) {
      var n = e,
        i = en(n);
      if (
        (null != i || (t && (t === n || t.firstChild === n)) || X(!1),
        t === n &&
          (((n = n.firstChild) instanceof Element &&
            "true" === n.getAttribute("data-contents")) ||
            X(!1),
          r > 0 && (r = n.childNodes.length)),
        0 === r)
      ) {
        var o = null;
        if (null != i) o = i;
        else {
          var a = (function (t) {
            for (
              ;
              t.firstChild &&
              ((t.firstChild instanceof Element &&
                "true" === t.firstChild.getAttribute("data-blocks")) ||
                tn(t.firstChild));

            )
              t = t.firstChild;
            return t;
          })(n);
          o = Ie(tn(a));
        }
        return { key: o, offset: 0 };
      }
      var u = n.childNodes[r - 1],
        s = null,
        c = null;
      if (tn(u)) {
        var l = (function (t) {
          for (
            ;
            t.lastChild &&
            ((t.lastChild instanceof Element &&
              "true" === t.lastChild.getAttribute("data-blocks")) ||
              tn(t.lastChild));

          )
            t = t.lastChild;
          return t;
        })(u);
        (s = Ie(tn(l))), (c = pn(l));
      } else (s = Ie(i)), (c = pn(u));
      return { key: s, offset: c };
    }
    function pn(t) {
      var e = t.textContent;
      return "\n" === e ? 0 : e.length;
    }
    var hn = function (t, e, r, n, i, o) {
      var a = r.nodeType === Node.TEXT_NODE,
        u = i.nodeType === Node.TEXT_NODE;
      if (a && u)
        return {
          selectionState: ln(t, Ie(en(r)), n, Ie(en(i)), o),
          needsRecovery: !1,
        };
      var s = null,
        c = null,
        l = !0;
      return (
        a
          ? ((s = { key: Ie(en(r)), offset: n }), (c = fn(e, i, o)))
          : u
          ? ((c = { key: Ie(en(i)), offset: o }), (s = fn(e, r, n)))
          : ((s = fn(e, r, n)),
            (c = fn(e, i, o)),
            r === i &&
              n === o &&
              (l = !!r.firstChild && "BR" !== r.firstChild.nodeName)),
        {
          selectionState: ln(t, s.key, s.offset, c.key, c.offset),
          needsRecovery: l,
        }
      );
    };
    var dn = function (t, r) {
      var n = e.a.getSelection();
      return 0 === n.rangeCount
        ? {
            selectionState: t.getSelection().set("hasFocus", !1),
            needsRecovery: !1,
          }
        : hn(t, r, n.anchorNode, n.anchorOffset, n.focusNode, n.focusOffset);
    };
    var gn = function (t) {
        var e = n._.findDOMNode(t.editorContainer);
        return (
          e || X(!1), e.firstChild instanceof HTMLElement || X(!1), e.firstChild
        );
      },
      yn = function () {
        return null;
      },
      vn = function () {
        return null;
      };
    var mn = function (t) {
        if (
          t._blockSelectEvents ||
          t._latestEditorState !== t.props.editorState
        ) {
          if (t._blockSelectEvents) {
            var e = t.props.editorState.getSelection();
            yn({
              anonymizedDom: "N/A",
              extraParams: JSON.stringify({ stacktrace: new Error().stack }),
              selectionState: JSON.stringify(e.toJS()),
            });
          }
        } else {
          var r = t.props.editorState,
            n = dn(r, gn(t)),
            i = n.selectionState;
          i !== r.getSelection() &&
            ((r = n.needsRecovery
              ? Ye.forceSelection(r, i)
              : Ye.acceptSelection(r, i)),
            t.update(r));
        }
      },
      bn = !1,
      _n = !1,
      wn = null;
    var Sn = {
        onCompositionStart: function (t) {
          (_n = !0),
            (function (t) {
              wn || (wn = new un(gn(t))).start();
            })(t);
        },
        onCompositionEnd: function (t) {
          (bn = !1),
            (_n = !1),
            setTimeout(function () {
              bn || Sn.resolveComposition(t);
            }, 20);
        },
        onSelect: mn,
        onKeyDown: function (t, e) {
          if (!_n) return Sn.resolveComposition(t), void t._onKeyDown(e);
          (e.which !== br && e.which !== vr) || e.preventDefault();
        },
        onKeyPress: function (t, e) {
          e.which === dr && e.preventDefault();
        },
        resolveComposition: function (t) {
          if (!_n) {
            var e = Ie(wn).stopAndFlushMutations();
            (wn = null), (bn = !0);
            var r = Ye.set(t._latestEditorState, { inCompositionMode: !1 });
            if ((t.exitCurrentMode(), e.size)) {
              var n = r.getCurrentContent();
              e.forEach(function (t, e) {
                var i = Or.decode(e),
                  o = i.blockKey,
                  a = i.decoratorKey,
                  u = i.leafKey,
                  s = r.getBlockTree(o).getIn([a, "leaves", u]),
                  c = s.start,
                  l = s.end,
                  f = r
                    .getSelection()
                    .merge({
                      anchorKey: o,
                      focusKey: o,
                      anchorOffset: c,
                      focusOffset: l,
                      isBackward: !1,
                    }),
                  p = cn(n, f),
                  h = n.getBlockForKey(o).getInlineStyleAt(c);
                (n = Kt.replaceText(n, f, t, h, p)),
                  (r = Ye.set(r, { currentContent: n }));
              });
              var i = dn(r, gn(t)).selectionState;
              t.restoreEditorDOM();
              var o = Ye.acceptSelection(r, i);
              t.update(Ye.push(o, n, "insert-characters"));
            } else t.update(r);
          }
        },
      },
      On = Sn;
    function kn() {
      return (
        (kn = i.o
          ? i.o.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }),
        kn.apply(this, arguments)
      );
    }
    function En(t, e) {
      return (
        (En = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            }),
        En(t, e)
      );
    }
    var Cn = (function (t) {
        var e, n;
        function i() {
          return t.apply(this, arguments) || this;
        }
        return (
          (n = t),
          ((e = i).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          En(e, n),
          (i.prototype.render = function () {
            var t = this.props,
              e = t.block,
              n = t.children,
              i = t.contentState,
              o = t.decorator,
              a = t.decoratorKey,
              u = t.direction,
              s = t.leafSet,
              c = t.text,
              l = e.getKey(),
              f = s.get("leaves"),
              p = o.getComponentForKey(a),
              h = o.getPropsForKey(a),
              d = Or.encode(l, parseInt(a, 10), 0),
              g = c.slice(f.first().get("start"), f.last().get("end")),
              y = me.getHTMLDirIfDifferent(xe.getDirection(g), u);
            return r._.createElement(
              p,
              kn({}, h, {
                contentState: i,
                decoratedText: g,
                dir: y,
                key: d,
                entityKey: e.getEntityAt(s.get("start")),
                offsetKey: d,
              }),
              n
            );
          }),
          i
        );
      })(r._.Component),
      xn = Cn;
    function Dn(t, e) {
      return (
        (Dn = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            }),
        Dn(t, e)
      );
    }
    var Tn = Qr.isBrowser("IE <= 11");
    var Mn = Tn
        ? r._.createElement("span", { key: "A", "data-text": "true" }, "\n")
        : r._.createElement("br", { key: "A", "data-text": "true" }),
      In = Tn
        ? r._.createElement("span", { key: "B", "data-text": "true" }, "\n")
        : r._.createElement("br", { key: "B", "data-text": "true" }),
      Kn = (function (t) {
        var e, i;
        function o(e) {
          var r, n, i, o;
          return (
            (r = t.call(this, e) || this),
            (n = (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(r)),
            (o = void 0),
            (i = "_forceFlag") in n
              ? Object.defineProperty(n, i, {
                  value: o,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (n[i] = o),
            (r._forceFlag = !1),
            r
          );
        }
        (i = t),
          ((e = o).prototype = Object.create(i.prototype)),
          (e.prototype.constructor = e),
          Dn(e, i);
        var a = o.prototype;
        return (
          (a.shouldComponentUpdate = function (t) {
            var e = n._.findDOMNode(this),
              r = "" === t.children;
            return (
              e instanceof Element || X(!1),
              r
                ? !(function (t) {
                    return Tn ? "\n" === t.textContent : "BR" === t.tagName;
                  })(e)
                : e.textContent !== t.children
            );
          }),
          (a.componentDidMount = function () {
            this._forceFlag = !this._forceFlag;
          }),
          (a.componentDidUpdate = function () {
            this._forceFlag = !this._forceFlag;
          }),
          (a.render = function () {
            return "" === this.props.children
              ? this._forceFlag
                ? Mn
                : In
              : r._.createElement(
                  "span",
                  { key: this._forceFlag ? "A" : "B", "data-text": "true" },
                  this.props.children
                );
          }),
          o
        );
      })(r._.Component);
    var An = function (t) {
      var e = (t ? t.ownerDocument || t : document).defaultView || window;
      return !(
        !t ||
        !("function" == typeof e.Node
          ? t instanceof e.Node
          : "object" == typeof t &&
            "number" == typeof t.nodeType &&
            "string" == typeof t.nodeName)
      );
    };
    var Ln = function (t) {
      return An(t) && 3 == t.nodeType;
    };
    var Bn = function t(e, r) {
      return (
        !(!e || !r) &&
        (e === r ||
          (!Ln(e) &&
            (Ln(r)
              ? t(e, r.parentNode)
              : "contains" in e
              ? e.contains(r)
              : !!e.compareDocumentPosition &&
                !!(16 & e.compareDocumentPosition(r)))))
      );
    };
    var Pn = function (t) {
      if (
        void 0 ===
        (t = t || ("undefined" != typeof document ? document : void 0))
      )
        return null;
      try {
        return t.activeElement || t.body;
      } catch (e) {
        return t.body;
      }
    };
    function jn(t, e) {
      if (!t) return "[empty]";
      var r = Rn(t, e);
      return r.nodeType === Node.TEXT_NODE
        ? r.textContent
        : (r instanceof Element || X(!1), r.outerHTML);
    }
    function Rn(t, e) {
      var r = void 0 !== e ? e(t) : [];
      if (t.nodeType === Node.TEXT_NODE) {
        var n = t.textContent.length;
        return document.createTextNode(
          "[text " + n + (r.length ? " | " + r.join(", ") : "") + "]"
        );
      }
      var i = t.cloneNode();
      1 === i.nodeType &&
        r.length &&
        i.setAttribute("data-labels", r.join(", "));
      for (var o = t.childNodes, a = 0; a < o.length; a++)
        i.appendChild(Rn(o[a], e));
      return i;
    }
    function Nn(t, e) {
      for (var r = t; r; ) {
        if (r instanceof Element && r.hasAttribute("contenteditable"))
          return jn(r, e);
        r = r.parentNode;
      }
      return "Could not find contentEditable parent of node";
    }
    function Fn(t) {
      return null === t.nodeValue ? t.childNodes.length : t.nodeValue.length;
    }
    function zn(t, e, r, n) {
      var i = Pn();
      if (t.extend && Bn(i, e)) {
        r > Fn(e) &&
          vn({
            anonymizedDom: Nn(e),
            extraParams: JSON.stringify({ offset: r }),
            selectionState: JSON.stringify(n.toJS()),
          });
        var o = e === t.focusNode;
        try {
          t.extend(e, r);
        } catch (a) {
          throw (
            (vn({
              anonymizedDom: Nn(e, function (e) {
                var r = [];
                return (
                  e === i && r.push("active element"),
                  e === t.anchorNode && r.push("selection anchor node"),
                  e === t.focusNode && r.push("selection focus node"),
                  r
                );
              }),
              extraParams: JSON.stringify(
                {
                  activeElementName: i ? i.nodeName : null,
                  nodeIsFocus: e === t.focusNode,
                  nodeWasFocus: o,
                  selectionRangeCount: t.rangeCount,
                  selectionAnchorNodeName: t.anchorNode
                    ? t.anchorNode.nodeName
                    : null,
                  selectionAnchorOffset: t.anchorOffset,
                  selectionFocusNodeName: t.focusNode
                    ? t.focusNode.nodeName
                    : null,
                  selectionFocusOffset: t.focusOffset,
                  message: a ? "" + a : null,
                  offset: r,
                },
                null,
                2
              ),
              selectionState: JSON.stringify(n.toJS(), null, 2),
            }),
            a)
          );
        }
      } else {
        var a = t.getRangeAt(0);
        a.setEnd(e, r), t.addRange(a.cloneRange());
      }
    }
    function Un(t, e, r, n) {
      var i = document.createRange();
      r > Fn(e) &&
        vn({
          anonymizedDom: Nn(e),
          extraParams: JSON.stringify({ offset: r }),
          selectionState: JSON.stringify(n.toJS()),
        }),
        i.setStart(e, r),
        t.addRange(i);
    }
    var Hn = function (t, r, n, i, o) {
      if (Bn(document.documentElement, r)) {
        var a = e.a.getSelection(),
          u = t.getAnchorKey(),
          s = t.getAnchorOffset(),
          c = t.getFocusKey(),
          l = t.getFocusOffset(),
          f = t.getIsBackward();
        if (!a.extend && f) {
          var p = u,
            h = s;
          (u = c), (s = l), (c = p), (l = h), (f = !1);
        }
        var d = u === n && i <= s && o >= s,
          g = c === n && i <= l && o >= l;
        if (d && g)
          return (
            a.removeAllRanges(), Un(a, r, s - i, t), void zn(a, r, l - i, t)
          );
        if (f) {
          if ((g && (a.removeAllRanges(), Un(a, r, l - i, t)), d)) {
            var y = a.focusNode,
              v = a.focusOffset;
            a.removeAllRanges(), Un(a, r, s - i, t), zn(a, y, v, t);
          }
        } else
          d && (a.removeAllRanges(), Un(a, r, s - i, t)),
            g && zn(a, r, l - i, t);
      }
    };
    function qn(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function Wn(t, e) {
      return (
        (Wn = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            }),
        Wn(t, e)
      );
    }
    function Yn(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    var $n = (function (t) {
        var e, o;
        function a() {
          for (var e, r = arguments.length, n = new Array(r), i = 0; i < r; i++)
            n[i] = arguments[i];
          return (
            Yn(
              qn((e = t.call.apply(t, [this].concat(n)) || this)),
              "leaf",
              void 0
            ),
            e
          );
        }
        (o = t),
          ((e = a).prototype = Object.create(o.prototype)),
          (e.prototype.constructor = e),
          Wn(e, o);
        var u = a.prototype;
        return (
          (u._setSelection = function () {
            var t = this.props.selection;
            if (null != t && t.getHasFocus()) {
              var e = this.props,
                r = e.block,
                i = e.start,
                o = e.text,
                a = r.getKey(),
                u = i + o.length;
              if (t.hasEdgeWithin(a, i, u)) {
                var s = n._.findDOMNode(this);
                s || X(!1);
                var c,
                  l = s.firstChild;
                l || X(!1),
                  l.nodeType === Node.TEXT_NODE
                    ? (c = l)
                    : "BR" === l.tagName
                    ? (c = s)
                    : (c = l.firstChild) || X(!1),
                  Hn(t, c, a, i, u);
              }
            }
          }),
          (u.shouldComponentUpdate = function (t) {
            var e = n._.findDOMNode(this.leaf);
            return (
              e || X(!1),
              e.textContent !== t.text ||
                t.styleSet !== this.props.styleSet ||
                t.forceSelection
            );
          }),
          (u.componentDidUpdate = function () {
            this._setSelection();
          }),
          (u.componentDidMount = function () {
            this._setSelection();
          }),
          (u.render = function () {
            var t = this,
              e = this.props.block,
              n = this.props.text;
            n.endsWith("\n") && this.props.isLast && (n += "\n");
            var o = this.props,
              a = o.customStyleMap,
              u = o.customStyleFn,
              s = o.offsetKey,
              c = o.styleSet,
              l = c.reduce(function (t, e) {
                var r = {},
                  n = a[e];
                return (
                  void 0 !== n &&
                    t.textDecoration !== n.textDecoration &&
                    (r.textDecoration = [t.textDecoration, n.textDecoration]
                      .join(" ")
                      .trim()),
                  i.o(t, n, r)
                );
              }, {});
            if (u) {
              var f = u(c, e);
              l = i.o(l, f);
            }
            return r._.createElement(
              "span",
              {
                "data-offset-key": s,
                ref: function (e) {
                  return (t.leaf = e);
                },
                style: l,
              },
              r._.createElement(Kn, null, n)
            );
          }),
          a
        );
      })(r._.Component),
      Gn = $n;
    function Vn(t, e) {
      return (
        (Vn = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            }),
        Vn(t, e)
      );
    }
    o.List;
    var Xn = (function (t) {
        var e, n;
        function i() {
          return t.apply(this, arguments) || this;
        }
        return (
          (n = t),
          ((e = i).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          Vn(e, n),
          (i.prototype.render = function () {
            var t = this.props,
              e = t.block,
              n = t.contentState,
              i = t.customStyleFn,
              o = t.customStyleMap,
              a = t.decorator,
              u = t.direction,
              s = t.forceSelection,
              c = t.hasSelection,
              l = t.selection,
              f = t.tree,
              p = e.getKey(),
              h = e.getText(),
              d = f.size - 1,
              g =
                this.props.children ||
                f
                  .map(function (t, f) {
                    var g = t.get("decoratorKey"),
                      y = t.get("leaves"),
                      v = y.size - 1,
                      m = y
                        .map(function (t, n) {
                          var a = Or.encode(p, f, n),
                            u = t.get("start"),
                            y = t.get("end");
                          return r._.createElement(Gn, {
                            key: a,
                            offsetKey: a,
                            block: e,
                            start: u,
                            selection: c ? l : null,
                            forceSelection: s,
                            text: h.slice(u, y),
                            styleSet: e.getInlineStyleAt(u),
                            customStyleMap: o,
                            customStyleFn: i,
                            isLast: g === d && n === v,
                          });
                        })
                        .toArray();
                    return g && a
                      ? r._.createElement(xn, {
                          block: e,
                          children: m,
                          contentState: n,
                          decorator: a,
                          decoratorKey: g,
                          direction: u,
                          leafSet: t,
                          text: h,
                          key: f,
                        })
                      : m;
                  })
                  .toArray();
            return r._.createElement(
              "div",
              {
                "data-offset-key": Or.encode(p, 0, 0),
                className: cr({
                  "public/DraftStyleDefault/block": !0,
                  "public/DraftStyleDefault/ltr": "LTR" === u,
                  "public/DraftStyleDefault/rtl": "RTL" === u,
                }),
              },
              g
            );
          }),
          i
        );
      })(r._.Component),
      Jn = Xn;
    function Zn(t, e) {
      return !!e && (t === e.documentElement || t === e.body);
    }
    var Qn = {
        getTop: function (t) {
          var e = t.ownerDocument;
          return Zn(t, e)
            ? e.body.scrollTop || e.documentElement.scrollTop
            : t.scrollTop;
        },
        setTop: function (t, e) {
          var r = t.ownerDocument;
          Zn(t, r)
            ? (r.body.scrollTop = r.documentElement.scrollTop = e)
            : (t.scrollTop = e);
        },
        getLeft: function (t) {
          var e = t.ownerDocument;
          return Zn(t, e)
            ? e.body.scrollLeft || e.documentElement.scrollLeft
            : t.scrollLeft;
        },
        setLeft: function (t, e) {
          var r = t.ownerDocument;
          Zn(t, r)
            ? (r.body.scrollLeft = r.documentElement.scrollLeft = e)
            : (t.scrollLeft = e);
        },
      },
      ti = /-(.)/g;
    var ei = function (t) {
        return t.replace(ti, function (t, e) {
          return e.toUpperCase();
        });
      },
      ri = /([A-Z])/g;
    var ni = function (t) {
      return t.replace(ri, "-$1").toLowerCase();
    };
    function ii(t) {
      return null == t ? t : String(t);
    }
    var oi = function (t, e) {
      var r;
      if (window.getComputedStyle && (r = window.getComputedStyle(t, null)))
        return ii(r.getPropertyValue(ni(e)));
      if (document.defaultView && document.defaultView.getComputedStyle) {
        if ((r = document.defaultView.getComputedStyle(t, null)))
          return ii(r.getPropertyValue(ni(e)));
        if ("display" === e) return "none";
      }
      return t.currentStyle
        ? ii(
            "float" === e
              ? t.currentStyle.cssFloat || t.currentStyle.styleFloat
              : t.currentStyle[ei(e)]
          )
        : ii(t.style && t.style[ei(e)]);
    };
    function ai(t, e) {
      var r = ui.get(t, e);
      return "auto" === r || "scroll" === r;
    }
    var ui = {
        get: oi,
        getScrollParent: function (t) {
          if (!t) return null;
          for (var e = t.ownerDocument; t && t !== e.body; ) {
            if (ai(t, "overflow") || ai(t, "overflowY") || ai(t, "overflowX"))
              return t;
            t = t.parentNode;
          }
          return e.defaultView || e.parentWindow;
        },
      },
      si = ui;
    var ci = function (t) {
      var e = t.ownerDocument.documentElement;
      if (!("getBoundingClientRect" in t) || !Bn(e, t))
        return { left: 0, right: 0, top: 0, bottom: 0 };
      var r = t.getBoundingClientRect();
      return {
        left: Math.round(r.left) - e.clientLeft,
        right: Math.round(r.right) - e.clientLeft,
        top: Math.round(r.top) - e.clientTop,
        bottom: Math.round(r.bottom) - e.clientTop,
      };
    };
    var li = function (t) {
        var e = ci(t);
        return {
          x: e.left,
          y: e.top,
          width: e.right - e.left,
          height: e.bottom - e.top,
        };
      },
      fi =
        "undefined" != typeof navigator &&
        navigator.userAgent.indexOf("AppleWebKit") > -1;
    var pi = function (t) {
      return (t = t || document).scrollingElement
        ? t.scrollingElement
        : fi || "CSS1Compat" !== t.compatMode
        ? t.body
        : t.documentElement;
    };
    var hi = function (t) {
      return t.Window && t instanceof t.Window
        ? {
            x: t.pageXOffset || t.document.documentElement.scrollLeft,
            y: t.pageYOffset || t.document.documentElement.scrollTop,
          }
        : { x: t.scrollLeft, y: t.scrollTop };
    };
    var di = function (t) {
      var e = pi(t.ownerDocument || t.document);
      t.Window && t instanceof t.Window && (t = e);
      var r = hi(t),
        n = t === e ? t.ownerDocument.documentElement : t,
        i = t.scrollWidth - n.clientWidth,
        o = t.scrollHeight - n.clientHeight;
      return (
        (r.x = Math.max(0, Math.min(r.x, i))),
        (r.y = Math.max(0, Math.min(r.y, o))),
        r
      );
    };
    function gi() {
      var t;
      return (
        document.documentElement && (t = document.documentElement.clientWidth),
        !t && document.body && (t = document.body.clientWidth),
        t || 0
      );
    }
    function yi() {
      var t;
      return (
        document.documentElement && (t = document.documentElement.clientHeight),
        !t && document.body && (t = document.body.clientHeight),
        t || 0
      );
    }
    function vi() {
      return {
        width: window.innerWidth || gi(),
        height: window.innerHeight || yi(),
      };
    }
    vi.withoutScrollbars = function () {
      return { width: gi(), height: yi() };
    };
    var mi = vi;
    function bi() {
      return (
        (bi = i.o
          ? i.o.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }),
        bi.apply(this, arguments)
      );
    }
    function _i(t, e) {
      return (
        (_i = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            }),
        _i(t, e)
      );
    }
    function wi(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function Si(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? wi(Object(r), !0).forEach(function (e) {
              Oi(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : wi(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    function Oi(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function ki(t, e) {
      var r =
        ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
      if (!r) {
        if (
          Array.isArray(t) ||
          (r = (function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return Ei(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return Ei(t, e);
          })(t)) ||
          (e && t && "number" == typeof t.length)
        ) {
          r && (t = r);
          var n = 0,
            i = function () {};
          return {
            s: i,
            n: function () {
              return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
            },
            e: function (t) {
              throw t;
            },
            f: i,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var o,
        a = !0,
        u = !1;
      return {
        s: function () {
          r = r.call(t);
        },
        n: function () {
          var t = r.next();
          return (a = t.done), t;
        },
        e: function (t) {
          (u = !0), (o = t);
        },
        f: function () {
          try {
            a || null == r.return || r.return();
          } finally {
            if (u) throw o;
          }
        },
      };
    }
    function Ei(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    o.List;
    var Ci = function (t, e) {
        return t.getAnchorKey() === e || t.getFocusKey() === e;
      },
      xi = function (t, e) {
        var r = e.get(t.getType()) || e.get("unstyled"),
          n = r.wrapper;
        return {
          Element: r.element || e.get("unstyled").element,
          wrapperTemplate: n,
        };
      },
      Di = function (t, e) {
        var r = e(t);
        return r
          ? {
              CustomComponent: r.component,
              customProps: r.props,
              customEditable: r.editable,
            }
          : {};
      },
      Ti = function (t, e, r, n, i) {
        var o = {
            "data-block": !0,
            "data-editor": e,
            "data-offset-key": r,
            key: t.getKey(),
          },
          a = n(t);
        return (
          a && (o.className = a),
          void 0 !== i.customEditable &&
            (o = Si(
              Si({}, o),
              {},
              {
                contentEditable: i.customEditable,
                suppressContentEditableWarning: !0,
              }
            )),
          o
        );
      },
      Mi = (function (t) {
        var e, i;
        function o() {
          return t.apply(this, arguments) || this;
        }
        (i = t),
          ((e = o).prototype = Object.create(i.prototype)),
          (e.prototype.constructor = e),
          _i(e, i);
        var a = o.prototype;
        return (
          (a.shouldComponentUpdate = function (t) {
            var e = this.props,
              r = e.block,
              n = e.direction,
              i = e.tree,
              o = !r.getChildKeys().isEmpty(),
              a =
                r !== t.block ||
                i !== t.tree ||
                n !== t.direction ||
                (Ci(t.selection, t.block.getKey()) && t.forceSelection);
            return o || a;
          }),
          (a.componentDidMount = function () {
            var t = this.props.selection,
              e = t.getEndKey();
            if (t.getHasFocus() && e === this.props.block.getKey()) {
              var r,
                i = n._.findDOMNode(this),
                o = si.getScrollParent(i),
                a = di(o);
              if (o === window) {
                var u = li(i);
                (r = u.y + u.height - mi().height) > 0 &&
                  window.scrollTo(a.x, a.y + r + 10);
              } else {
                i instanceof HTMLElement || X(!1),
                  (r = i.offsetHeight + i.offsetTop - (o.offsetHeight + a.y)) >
                    0 && Qn.setTop(o, Qn.getTop(o) + r + 10);
              }
            }
          }),
          (a.render = function () {
            var t = this,
              e = this.props,
              n = e.block,
              i = e.blockRenderMap,
              a = e.blockRendererFn,
              u = e.blockStyleFn,
              s = e.contentState,
              c = e.decorator,
              l = e.editorKey,
              f = e.editorState,
              p = e.customStyleFn,
              h = e.customStyleMap,
              d = e.direction,
              g = e.forceSelection,
              y = e.selection,
              v = e.tree,
              m = null;
            n.children.size &&
              (m = n.children.reduce(function (e, n) {
                var c = Or.encode(n, 0, 0),
                  p = s.getBlockForKey(n),
                  h = Di(p, a),
                  d = h.CustomComponent || o,
                  g = xi(p, i),
                  y = g.Element,
                  v = g.wrapperTemplate,
                  m = Ti(p, l, c, u, h),
                  b = Si(
                    Si({}, t.props),
                    {},
                    {
                      tree: f.getBlockTree(n),
                      blockProps: h.customProps,
                      offsetKey: c,
                      block: p,
                    }
                  );
                return (
                  e.push(r._.createElement(y, m, r._.createElement(d, b))),
                  !v ||
                    (function (t, e) {
                      var r = t.getNextSiblingKey();
                      return (
                        !!r && e.getBlockForKey(r).getType() === t.getType()
                      );
                    })(p, s) ||
                    (function (t, e, n) {
                      var i,
                        o = [],
                        a = ki(n.reverse());
                      try {
                        for (a.s(); !(i = a.n()).done; ) {
                          var u = i.value;
                          if (u.type !== e) break;
                          o.push(u);
                        }
                      } catch (t) {
                        a.e(t);
                      } finally {
                        a.f();
                      }
                      n.splice(n.indexOf(o[0]), o.length + 1);
                      var s = o.reverse(),
                        c = s[0].key;
                      n.push(
                        r._.cloneElement(
                          t,
                          {
                            key: "".concat(c, "-wrap"),
                            "data-offset-key": Or.encode(c, 0, 0),
                          },
                          s
                        )
                      );
                    })(v, y, e),
                  e
                );
              }, []));
            var b = n.getKey(),
              _ = Or.encode(b, 0, 0),
              w = Di(n, a),
              S = w.CustomComponent,
              O =
                null != S
                  ? r._.createElement(
                      S,
                      bi({}, this.props, {
                        tree: f.getBlockTree(b),
                        blockProps: w.customProps,
                        offsetKey: _,
                        block: n,
                      })
                    )
                  : r._.createElement(Jn, {
                      block: n,
                      children: m,
                      contentState: s,
                      customStyleFn: p,
                      customStyleMap: h,
                      decorator: c,
                      direction: d,
                      forceSelection: g,
                      hasSelection: Ci(y, b),
                      selection: y,
                      tree: v,
                    });
            if (n.getParentKey()) return O;
            var k = xi(n, i).Element,
              E = Ti(n, l, _, u, w);
            return r._.createElement(k, E, O);
          }),
          o
        );
      })(r._.Component),
      Ii = Mi;
    function Ki() {
      return (
        (Ki = i.o
          ? i.o.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }),
        Ki.apply(this, arguments)
      );
    }
    function Ai(t, e) {
      return (
        (Ai = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            }),
        Ai(t, e)
      );
    }
    var Li = (function (t) {
        var e, n;
        function i() {
          return t.apply(this, arguments) || this;
        }
        (n = t),
          ((e = i).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          Ai(e, n);
        var o = i.prototype;
        return (
          (o.shouldComponentUpdate = function (t) {
            var e = this.props.editorState,
              r = t.editorState;
            if (e.getDirectionMap() !== r.getDirectionMap()) return !0;
            if (
              e.getSelection().getHasFocus() !== r.getSelection().getHasFocus()
            )
              return !0;
            var n = r.getNativelyRenderedContent(),
              i = e.isInCompositionMode(),
              o = r.isInCompositionMode();
            if (
              e === r ||
              (null !== n && r.getCurrentContent() === n) ||
              (i && o)
            )
              return !1;
            var a = e.getCurrentContent(),
              u = r.getCurrentContent(),
              s = e.getDecorator(),
              c = r.getDecorator();
            return i !== o || a !== u || s !== c || r.mustForceSelection();
          }),
          (o.render = function () {
            for (
              var t = this.props,
                e = t.blockRenderMap,
                n = t.blockRendererFn,
                i = t.blockStyleFn,
                o = t.customStyleMap,
                a = t.customStyleFn,
                u = t.editorState,
                s = t.editorKey,
                c = t.textDirectionality,
                l = u.getCurrentContent(),
                f = u.getSelection(),
                p = u.mustForceSelection(),
                h = u.getDecorator(),
                d = Ie(u.getDirectionMap()),
                g = [],
                y = l.getBlocksAsArray()[0];
              y;

            ) {
              var v = y.getKey(),
                m = {
                  blockRenderMap: e,
                  blockRendererFn: n,
                  blockStyleFn: i,
                  contentState: l,
                  customStyleFn: a,
                  customStyleMap: o,
                  decorator: h,
                  editorKey: s,
                  editorState: u,
                  forceSelection: p,
                  selection: f,
                  block: y,
                  direction: c || d.get(v),
                  tree: u.getBlockTree(v),
                },
                b = (e.get(y.getType()) || e.get("unstyled")).wrapper;
              g.push({
                block: r._.createElement(Ii, Ki({ key: v }, m)),
                wrapperTemplate: b,
                key: v,
                offsetKey: Or.encode(v, 0, 0),
              });
              var _ = y.getNextSiblingKey();
              y = _ ? l.getBlockForKey(_) : null;
            }
            for (var w = [], S = 0; S < g.length; ) {
              var O = g[S];
              if (O.wrapperTemplate) {
                var k = [];
                do {
                  k.push(g[S].block), S++;
                } while (
                  S < g.length &&
                  g[S].wrapperTemplate === O.wrapperTemplate
                );
                var E = r._.cloneElement(
                  O.wrapperTemplate,
                  { key: O.key + "-wrap", "data-offset-key": O.offsetKey },
                  k
                );
                w.push(E);
              } else w.push(O.block), S++;
            }
            return r._.createElement("div", { "data-contents": "true" }, w);
          }),
          i
        );
      })(r._.Component),
      Bi = Li;
    function Pi() {
      return (
        (Pi = i.o
          ? i.o.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }),
        Pi.apply(this, arguments)
      );
    }
    function ji(t, e) {
      return (
        (ji = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            }),
        ji(t, e)
      );
    }
    var Ri = function (t, e) {
        return t.getAnchorKey() === e || t.getFocusKey() === e;
      },
      Ni = (function (t) {
        var e, i;
        function o() {
          return t.apply(this, arguments) || this;
        }
        (i = t),
          ((e = o).prototype = Object.create(i.prototype)),
          (e.prototype.constructor = e),
          ji(e, i);
        var a = o.prototype;
        return (
          (a.shouldComponentUpdate = function (t) {
            return (
              this.props.block !== t.block ||
              this.props.tree !== t.tree ||
              this.props.direction !== t.direction ||
              (Ri(t.selection, t.block.getKey()) && t.forceSelection)
            );
          }),
          (a.componentDidMount = function () {
            var t = this.props.selection,
              e = t.getEndKey();
            if (t.getHasFocus() && e === this.props.block.getKey()) {
              var r,
                i = n._.findDOMNode(this),
                o = si.getScrollParent(i),
                a = di(o);
              if (o === window) {
                var u = li(i);
                (r = u.y + u.height - mi().height) > 0 &&
                  window.scrollTo(a.x, a.y + r + 10);
              } else {
                i instanceof HTMLElement || X(!1),
                  (r = i.offsetHeight + i.offsetTop - (o.offsetHeight + a.y)) >
                    0 && Qn.setTop(o, Qn.getTop(o) + r + 10);
              }
            }
          }),
          (a._renderChildren = function () {
            var t = this,
              e = this.props.block,
              n = e.getKey(),
              i = e.getText(),
              o = this.props.tree.size - 1,
              a = Ri(this.props.selection, n);
            return this.props.tree
              .map(function (u, s) {
                var c = u.get("leaves"),
                  l = c.size - 1,
                  f = c
                    .map(function (u, c) {
                      var f = Or.encode(n, s, c),
                        p = u.get("start"),
                        h = u.get("end");
                      return r._.createElement(Gn, {
                        key: f,
                        offsetKey: f,
                        block: e,
                        start: p,
                        selection: a ? t.props.selection : null,
                        forceSelection: t.props.forceSelection,
                        text: i.slice(p, h),
                        styleSet: e.getInlineStyleAt(p),
                        customStyleMap: t.props.customStyleMap,
                        customStyleFn: t.props.customStyleFn,
                        isLast: s === o && c === l,
                      });
                    })
                    .toArray(),
                  p = u.get("decoratorKey");
                if (null == p) return f;
                if (!t.props.decorator) return f;
                var h = Ie(t.props.decorator),
                  d = h.getComponentForKey(p);
                if (!d) return f;
                var g = h.getPropsForKey(p),
                  y = Or.encode(n, s, 0),
                  v = c.first().get("start"),
                  m = c.last().get("end"),
                  b = i.slice(v, m),
                  _ = e.getEntityAt(u.get("start")),
                  w = me.getHTMLDirIfDifferent(
                    xe.getDirection(b),
                    t.props.direction
                  ),
                  S = {
                    contentState: t.props.contentState,
                    decoratedText: b,
                    dir: w,
                    key: y,
                    start: v,
                    end: m,
                    blockKey: n,
                    entityKey: _,
                    offsetKey: y,
                  };
                return r._.createElement(d, Pi({}, g, S), f);
              })
              .toArray();
          }),
          (a.render = function () {
            var t = this.props,
              e = t.direction,
              n = t.offsetKey,
              i = cr({
                "public/DraftStyleDefault/block": !0,
                "public/DraftStyleDefault/ltr": "LTR" === e,
                "public/DraftStyleDefault/rtl": "RTL" === e,
              });
            return r._.createElement(
              "div",
              { "data-offset-key": n, className: i },
              this._renderChildren()
            );
          }),
          o
        );
      })(r._.Component),
      Fi = Ni;
    var zi = function (t) {
      var e = t || "",
        r = arguments.length;
      if (r > 1)
        for (var n = 1; n < r; n++) {
          var i = arguments[n];
          i && (e = (e ? e + " " : "") + i);
        }
      return e;
    };
    function Ui(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function Hi(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Ui(Object(r), !0).forEach(function (e) {
              qi(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : Ui(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    function qi(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function Wi(t, e) {
      return (
        (Wi = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            }),
        Wi(t, e)
      );
    }
    var Yi = function (t, e, r, n) {
        return cr({
          "public/DraftStyleDefault/unorderedListItem":
            "unordered-list-item" === t,
          "public/DraftStyleDefault/orderedListItem": "ordered-list-item" === t,
          "public/DraftStyleDefault/reset": r,
          "public/DraftStyleDefault/depth0": 0 === e,
          "public/DraftStyleDefault/depth1": 1 === e,
          "public/DraftStyleDefault/depth2": 2 === e,
          "public/DraftStyleDefault/depth3": 3 === e,
          "public/DraftStyleDefault/depth4": e >= 4,
          "public/DraftStyleDefault/listLTR": "LTR" === n,
          "public/DraftStyleDefault/listRTL": "RTL" === n,
        });
      },
      $i = (function (t) {
        var e, n;
        function i() {
          return t.apply(this, arguments) || this;
        }
        (n = t),
          ((e = i).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          Wi(e, n);
        var o = i.prototype;
        return (
          (o.shouldComponentUpdate = function (t) {
            var e = this.props.editorState,
              r = t.editorState;
            if (e.getDirectionMap() !== r.getDirectionMap()) return !0;
            if (
              e.getSelection().getHasFocus() !== r.getSelection().getHasFocus()
            )
              return !0;
            var n = r.getNativelyRenderedContent(),
              i = e.isInCompositionMode(),
              o = r.isInCompositionMode();
            if (
              e === r ||
              (null !== n && r.getCurrentContent() === n) ||
              (i && o)
            )
              return !1;
            var a = e.getCurrentContent(),
              u = r.getCurrentContent(),
              s = e.getDecorator(),
              c = r.getDecorator();
            return i !== o || a !== u || s !== c || r.mustForceSelection();
          }),
          (o.render = function () {
            for (
              var t = this.props,
                e = t.blockRenderMap,
                n = t.blockRendererFn,
                i = t.blockStyleFn,
                o = t.customStyleMap,
                a = t.customStyleFn,
                u = t.editorState,
                s = t.editorKey,
                c = t.textDirectionality,
                l = u.getCurrentContent(),
                f = u.getSelection(),
                p = u.mustForceSelection(),
                h = u.getDecorator(),
                d = Ie(u.getDirectionMap()),
                g = l.getBlocksAsArray(),
                y = [],
                v = null,
                m = null,
                b = 0;
              b < g.length;
              b++
            ) {
              var _ = g[b],
                w = _.getKey(),
                S = _.getType(),
                O = n(_),
                k = void 0,
                E = void 0,
                C = void 0;
              O && ((k = O.component), (E = O.props), (C = O.editable));
              var x = c || d.get(w),
                D = Or.encode(w, 0, 0),
                T = {
                  contentState: l,
                  block: _,
                  blockProps: E,
                  blockStyleFn: i,
                  customStyleMap: o,
                  customStyleFn: a,
                  decorator: h,
                  direction: x,
                  forceSelection: p,
                  key: w,
                  offsetKey: D,
                  selection: f,
                  tree: u.getBlockTree(w),
                },
                M = e.get(S) || e.get("unstyled"),
                I = M.wrapper,
                K = M.element || e.get("unstyled").element,
                A = _.getDepth(),
                L = "";
              if ((i && (L = i(_)), "li" === K))
                L = zi(L, Yi(S, A, m !== I || null === v || A > v, x));
              var B = k || Fi,
                P = {
                  className: L,
                  "data-block": !0,
                  "data-editor": s,
                  "data-offset-key": D,
                  key: w,
                };
              void 0 !== C &&
                (P = Hi(
                  Hi({}, P),
                  {},
                  { contentEditable: C, suppressContentEditableWarning: !0 }
                ));
              var j = r._.createElement(K, P, r._.createElement(B, T));
              y.push({ block: j, wrapperTemplate: I, key: w, offsetKey: D }),
                (v = I ? _.getDepth() : null),
                (m = I);
            }
            for (var R = [], N = 0; N < y.length; ) {
              var F = y[N];
              if (F.wrapperTemplate) {
                var z = [];
                do {
                  z.push(y[N].block), N++;
                } while (
                  N < y.length &&
                  y[N].wrapperTemplate === F.wrapperTemplate
                );
                var U = r._.cloneElement(
                  F.wrapperTemplate,
                  { key: F.key + "-wrap", "data-offset-key": F.offsetKey },
                  z
                );
                R.push(U);
              } else R.push(F.block), N++;
            }
            return r._.createElement("div", { "data-contents": "true" }, R);
          }),
          i
        );
      })(r._.Component),
      Gi = $i,
      Vi = st("draft_tree_data_support") ? Bi : Gi,
      Xi = {
        isImage: function (t) {
          return "image" === Ji(t)[0];
        },
        isJpeg: function (t) {
          var e = Ji(t);
          return Xi.isImage(t) && ("jpeg" === e[1] || "pjpeg" === e[1]);
        },
      };
    function Ji(t) {
      return t.split("/");
    }
    var Zi = Xi;
    var Qi = function (t) {
        return (function (t) {
          return (
            !!t &&
            ("object" == typeof t || "function" == typeof t) &&
            "length" in t &&
            !("setInterval" in t) &&
            "number" != typeof t.nodeType &&
            (Array.isArray(t) || "callee" in t || "item" in t)
          );
        })(t)
          ? Array.isArray(t)
            ? t.slice()
            : (function (t) {
                var e = t.length;
                if (
                  ((Array.isArray(t) ||
                    ("object" != typeof t && "function" != typeof t)) &&
                    X(!1),
                  "number" != typeof e && X(!1),
                  0 === e || e - 1 in t || X(!1),
                  "function" == typeof t.callee && X(!1),
                  t.hasOwnProperty)
                )
                  try {
                    return Array.prototype.slice.call(t);
                  } catch (t) {}
                for (var r = Array(e), n = 0; n < e; n++) r[n] = t[n];
                return r;
              })(t)
          : [t];
      },
      to = new RegExp("\r\n", "g"),
      eo = { "text/rtf": 1, "text/html": 1 };
    function ro(t) {
      if ("file" == t.kind) return t.getAsFile();
    }
    var no = (function () {
        function t(t) {
          (this.data = t), (this.types = t.types ? Qi(t.types) : []);
        }
        var e = t.prototype;
        return (
          (e.isRichText = function () {
            return (
              !(!this.getHTML() || !this.getText()) ||
              (!this.isImage() &&
                this.types.some(function (t) {
                  return eo[t];
                }))
            );
          }),
          (e.getText = function () {
            var t;
            return (
              this.data.getData &&
                (this.types.length
                  ? -1 != this.types.indexOf("text/plain") &&
                    (t = this.data.getData("text/plain"))
                  : (t = this.data.getData("Text"))),
              t ? t.replace(to, "\n") : null
            );
          }),
          (e.getHTML = function () {
            if (this.data.getData) {
              if (!this.types.length) return this.data.getData("Text");
              if (-1 != this.types.indexOf("text/html"))
                return this.data.getData("text/html");
            }
          }),
          (e.isLink = function () {
            return this.types.some(function (t) {
              return (
                -1 != t.indexOf("Url") ||
                -1 != t.indexOf("text/uri-list") ||
                t.indexOf("text/x-moz-url")
              );
            });
          }),
          (e.getLink = function () {
            return this.data.getData
              ? -1 != this.types.indexOf("text/x-moz-url")
                ? this.data.getData("text/x-moz-url").split("\n")[0]
                : -1 != this.types.indexOf("text/uri-list")
                ? this.data.getData("text/uri-list")
                : this.data.getData("url")
              : null;
          }),
          (e.isImage = function () {
            var t = this.types.some(function (t) {
              return -1 != t.indexOf("application/x-moz-file");
            });
            if (t) return !0;
            for (var e = this.getFiles(), r = 0; r < e.length; r++) {
              var n = e[r].type;
              if (!Zi.isImage(n)) return !1;
            }
            return !0;
          }),
          (e.getCount = function () {
            return this.data.hasOwnProperty("items")
              ? this.data.items.length
              : this.data.hasOwnProperty("mozItemCount")
              ? this.data.mozItemCount
              : this.data.files
              ? this.data.files.length
              : null;
          }),
          (e.getFiles = function () {
            return this.data.items
              ? Array.prototype.slice
                  .call(this.data.items)
                  .map(ro)
                  .filter(Bt.thatReturnsArgument)
              : this.data.files
              ? Array.prototype.slice.call(this.data.files)
              : [];
          }),
          (e.hasFiles = function () {
            return this.getFiles().length > 0;
          }),
          t
        );
      })(),
      io = /\.textClipping$/,
      oo = { "text/plain": !0, "text/html": !0, "text/rtf": !0 };
    var ao = function (t, r) {
      var n = 0,
        i = [];
      t.forEach(function (o) {
        !(function (t, r) {
          if (!e.a.FileReader || (t.type && !(t.type in oo))) return void r("");
          if ("" === t.type) {
            var n = "";
            return io.test(t.name) && (n = t.name.replace(io, "")), void r(n);
          }
          var i = new FileReader();
          (i.onload = function () {
            var t = i.result;
            "string" != typeof t && X(!1), r(t);
          }),
            (i.onerror = function () {
              r("");
            }),
            i.readAsText(t);
        })(o, function (e) {
          n++, e && i.push(e.slice(0, 5e3)), n == t.length && r(i.join("\r"));
        });
      });
    };
    var uo = function (t) {
      return "handled" === t || !0 === t;
    };
    function so(t) {
      t._internalDrag = !1;
      var e = n._.findDOMNode(t);
      if (e) {
        var r = new MouseEvent("mouseup", {
          view: window,
          bubbles: !0,
          cancelable: !0,
        });
        e.dispatchEvent(r);
      }
    }
    function co(t, e, r) {
      var n = Kt.insertText(
        t.getCurrentContent(),
        e,
        r,
        t.getCurrentInlineStyle()
      );
      return Ye.push(t, n, "insert-fragment");
    }
    var lo = {
      onDragEnd: function (t) {
        t.exitCurrentMode(), so(t);
      },
      onDrop: function (t, e) {
        var r = new no(e.nativeEvent.dataTransfer),
          n = t._latestEditorState,
          i = (function (t, e) {
            var r = null,
              n = null;
            if ("function" == typeof document.caretRangeFromPoint) {
              var i = document.caretRangeFromPoint(t.x, t.y);
              (r = i.startContainer), (n = i.startOffset);
            } else {
              if (!t.rangeParent) return null;
              (r = t.rangeParent), (n = t.rangeOffset);
            }
            (r = Ie(r)), (n = Ie(n));
            var o = Ie(en(r));
            return ln(e, o, n, o, n);
          })(e.nativeEvent, n);
        if (
          (e.preventDefault(),
          (t._dragCount = 0),
          t.exitCurrentMode(),
          null != i)
        ) {
          var o = r.getFiles();
          if (o.length > 0) {
            if (
              t.props.handleDroppedFiles &&
              uo(t.props.handleDroppedFiles(i, o))
            )
              return;
            ao(o, function (e) {
              e && t.update(co(n, i, e));
            });
          } else {
            var a = t._internalDrag ? "internal" : "external";
            (t.props.handleDrop && uo(t.props.handleDrop(i, r, a))) ||
              (t._internalDrag
                ? t.update(
                    (function (t, e) {
                      var r = Kt.moveText(
                        t.getCurrentContent(),
                        t.getSelection(),
                        e
                      );
                      return Ye.push(t, r, "insert-fragment");
                    })(n, i)
                  )
                : t.update(co(n, i, r.getText()))),
              so(t);
          }
        }
      },
    };
    var fo = function (t) {
      var e = t.getSelection(),
        r = e.getAnchorKey(),
        n = t.getBlockTree(r),
        i = e.getStartOffset(),
        o = !1;
      return (
        n.some(function (t) {
          return i === t.get("start")
            ? ((o = !0), !0)
            : i < t.get("end") &&
                t.get("leaves").some(function (t) {
                  var e = t.get("start");
                  return i === e && ((o = !0), !0);
                });
        }),
        o
      );
    };
    !(function (t, e) {
      if (!t.setImmediate) {
        var r,
          n,
          i,
          o,
          a,
          u = 1,
          s = {},
          c = !1,
          l = t.document,
          f = Object.getPrototypeOf && Object.getPrototypeOf(t);
        (f = f && f.setTimeout ? f : t),
          "[object process]" === {}.toString.call(t.process)
            ? (r = function (t) {
                process.nextTick(function () {
                  h(t);
                });
              })
            : !(function () {
                if (t.postMessage && !t.importScripts) {
                  var e = !0,
                    r = t.onmessage;
                  return (
                    (t.onmessage = function () {
                      e = !1;
                    }),
                    t.postMessage("", "*"),
                    (t.onmessage = r),
                    e
                  );
                }
              })()
            ? t.MessageChannel
              ? (((i = new MessageChannel()).port1.onmessage = function (t) {
                  h(t.data);
                }),
                (r = function (t) {
                  i.port2.postMessage(t);
                }))
              : l && "onreadystatechange" in l.createElement("script")
              ? ((n = l.documentElement),
                (r = function (t) {
                  var e = l.createElement("script");
                  (e.onreadystatechange = function () {
                    h(t),
                      (e.onreadystatechange = null),
                      n.removeChild(e),
                      (e = null);
                  }),
                    n.appendChild(e);
                }))
              : (r = function (t) {
                  setTimeout(h, 0, t);
                })
            : ((o = "setImmediate$" + Math.random() + "$"),
              (a = function (e) {
                e.source === t &&
                  "string" == typeof e.data &&
                  0 === e.data.indexOf(o) &&
                  h(+e.data.slice(o.length));
              }),
              t.addEventListener
                ? t.addEventListener("message", a, !1)
                : t.attachEvent("onmessage", a),
              (r = function (e) {
                t.postMessage(o + e, "*");
              })),
          (f.setImmediate = function (t) {
            "function" != typeof t && (t = new Function("" + t));
            for (
              var e = new Array(arguments.length - 1), n = 0;
              n < e.length;
              n++
            )
              e[n] = arguments[n + 1];
            var i = { callback: t, args: e };
            return (s[u] = i), r(u), u++;
          }),
          (f.clearImmediate = p);
      }
      function p(t) {
        delete s[t];
      }
      function h(t) {
        if (c) setTimeout(h, 0, t);
        else {
          var e = s[t];
          if (e) {
            c = !0;
            try {
              !(function (t) {
                var e = t.callback,
                  r = t.args;
                switch (r.length) {
                  case 0:
                    e();
                    break;
                  case 1:
                    e(r[0]);
                    break;
                  case 2:
                    e(r[0], r[1]);
                    break;
                  case 3:
                    e(r[0], r[1], r[2]);
                    break;
                  default:
                    e.apply(void 0, r);
                }
              })(e);
            } finally {
              p(t), (c = !1);
            }
          }
        }
      }
    })("undefined" == typeof self ? (e.a, e.a) : self);
    var po = e.a.setImmediate,
      ho = Qr.isBrowser("Firefox");
    function go(t, e, r, n, i) {
      var o = Kt.replaceText(t.getCurrentContent(), t.getSelection(), e, r, n);
      return Ye.push(t, o, "insert-characters", i);
    }
    var yo = function (t, r) {
      void 0 !== t._pendingStateFromBeforeInput &&
        (t.update(t._pendingStateFromBeforeInput),
        (t._pendingStateFromBeforeInput = void 0));
      var n = t._latestEditorState,
        i = r.data;
      if (i)
        if (
          t.props.handleBeforeInput &&
          uo(t.props.handleBeforeInput(i, n, r.timeStamp))
        )
          r.preventDefault();
        else {
          var o = n.getSelection(),
            a = o.getStartOffset(),
            u = o.getAnchorKey();
          if (!o.isCollapsed())
            return (
              r.preventDefault(),
              void t.update(
                go(
                  n,
                  i,
                  n.getCurrentInlineStyle(),
                  cn(n.getCurrentContent(), n.getSelection()),
                  !0
                )
              )
            );
          var s,
            c = go(
              n,
              i,
              n.getCurrentInlineStyle(),
              cn(n.getCurrentContent(), n.getSelection()),
              !1
            ),
            l = !1;
          if ((l || (l = fo(t._latestCommittedEditorState)), !l)) {
            var f = e.a.getSelection();
            if (f.anchorNode && f.anchorNode.nodeType === Node.TEXT_NODE) {
              var p = f.anchorNode.parentNode;
              l =
                "SPAN" === p.nodeName &&
                p.firstChild.nodeType === Node.TEXT_NODE &&
                -1 !== p.firstChild.nodeValue.indexOf("\t");
            }
          }
          if (!l) {
            var h = n.getBlockTree(u),
              d = c.getBlockTree(u);
            l =
              h.size !== d.size ||
              h.zip(d).some(function (t) {
                var e = t[0],
                  r = t[1],
                  n = e.get("start"),
                  o = n + (n >= a ? i.length : 0),
                  u = e.get("end"),
                  s = u + (u >= a ? i.length : 0);
                return (
                  e.get("decoratorKey") !== r.get("decoratorKey") ||
                  e.get("leaves").size !== r.get("leaves").size ||
                  o !== r.get("start") ||
                  s !== r.get("end")
                );
              });
          }
          if (
            (l || ((s = i), (l = ho && ("'" == s || "/" == s))),
            l ||
              (l =
                Ie(c.getDirectionMap()).get(u) !==
                Ie(n.getDirectionMap()).get(u)),
            l)
          )
            return (
              r.preventDefault(),
              (c = Ye.set(c, { forceSelection: !0 })),
              void t.update(c)
            );
          (c = Ye.set(c, { nativelyRenderedContent: c.getCurrentContent() })),
            (t._pendingStateFromBeforeInput = c),
            po(function () {
              void 0 !== t._pendingStateFromBeforeInput &&
                (t.update(t._pendingStateFromBeforeInput),
                (t._pendingStateFromBeforeInput = void 0));
            });
        }
    };
    var vo = function (t, r) {
      if (Pn() === document.body) {
        var n = e.a.getSelection(),
          i = t.editor;
        1 === n.rangeCount &&
          Bn(i, n.anchorNode) &&
          Bn(i, n.focusNode) &&
          n.removeAllRanges();
      }
      var o = t._latestEditorState,
        a = o.getSelection();
      if (a.getHasFocus()) {
        var u = a.set("hasFocus", !1);
        t.props.onBlur && t.props.onBlur(r), t.update(Ye.acceptSelection(o, u));
      }
    };
    var mo = function (t, e) {
        t.setMode("composite"),
          t.update(Ye.set(t._latestEditorState, { inCompositionMode: !0 })),
          t._onCompositionStart(e);
      },
      bo = {
        stringify: function (t) {
          return "_" + String(t);
        },
        unstringify: function (t) {
          return t.slice(1);
        },
      },
      _o = /[\uD800-\uDFFF]/;
    function wo(t) {
      return 55296 <= t && t <= 57343;
    }
    function So(t) {
      return _o.test(t);
    }
    function Oo(t, e) {
      return 1 + wo(t.charCodeAt(e));
    }
    function ko(t, e, r) {
      if (((e = e || 0), (r = void 0 === r ? 1 / 0 : r || 0), !So(t)))
        return t.substr(e, r);
      var n = t.length;
      if (n <= 0 || e > n || r <= 0) return "";
      var i = 0;
      if (e > 0) {
        for (; e > 0 && i < n; e--) i += Oo(t, i);
        if (i >= n) return "";
      } else if (e < 0) {
        for (i = n; e < 0 && 0 < i; e++) i -= Oo(t, i - 1);
        i < 0 && (i = 0);
      }
      var o = n;
      if (r < n) for (o = i; r > 0 && o < n; r--) o += Oo(t, o);
      return t.substring(i, o);
    }
    var Eo = {
        getCodePoints: function (t) {
          for (var e = [], r = 0; r < t.length; r += Oo(t, r))
            e.push(t.codePointAt(r));
          return e;
        },
        getUTF16Length: Oo,
        hasSurrogateUnit: So,
        isCodeUnitInSurrogateRange: wo,
        isSurrogatePair: function (t, e) {
          if (((0 <= e && e < t.length) || X(!1), e + 1 === t.length))
            return !1;
          var r = t.charCodeAt(e),
            n = t.charCodeAt(e + 1);
          return 55296 <= r && r <= 56319 && 56320 <= n && n <= 57343;
        },
        strlen: function (t) {
          if (!So(t)) return t.length;
          for (var e = 0, r = 0; r < t.length; r += Oo(t, r)) e++;
          return e;
        },
        substring: function (t, e, r) {
          (e = e || 0) < 0 && (e = 0),
            (r = void 0 === r ? 1 / 0 : r || 0) < 0 && (r = 0);
          var n = Math.abs(r - e);
          return ko(t, (e = e < r ? e : r), n);
        },
        substr: ko,
      },
      Co = Eo,
      xo = Co.strlen;
    var Do = function (t, e) {
        var r = [];
        return (
          t.findEntityRanges(
            function (t) {
              return !!t.getEntity();
            },
            function (n, i) {
              var o = t.getText(),
                a = t.getEntityAt(n);
              r.push({
                offset: xo(o.slice(0, n)),
                length: xo(o.slice(n, i)),
                key: Number(e[bo.stringify(a)]),
              });
            }
          ),
          r
        );
      },
      To = function (t, e) {
        return t === e;
      },
      Mo = function (t) {
        return !!t;
      },
      Io = [];
    var Ko = function (t) {
      var e = t
          .getCharacterList()
          .map(function (t) {
            return t.getStyle();
          })
          .toList(),
        r = e
          .flatten()
          .toSet()
          .map(function (r) {
            return (function (t, e, r) {
              var n = [],
                i = e
                  .map(function (t) {
                    return t.has(r);
                  })
                  .toList();
              return (
                m(i, To, Mo, function (e, i) {
                  var o = t.getText();
                  n.push({
                    offset: Co.strlen(o.slice(0, e)),
                    length: Co.strlen(o.slice(e, i)),
                    style: r,
                  });
                }),
                n
              );
            })(t, e, r);
          });
      return Array.prototype.concat.apply(Io, r.toJS());
    };
    function Ao(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function Lo(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Ao(Object(r), !0).forEach(function (e) {
              Bo(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : Ao(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    function Bo(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    var Po = function (t, e) {
        return {
          key: t.getKey(),
          text: t.getText(),
          type: t.getType(),
          depth: t.getDepth(),
          inlineStyleRanges: Ko(t),
          entityRanges: Do(t, e),
          data: t.getData().toObject(),
        };
      },
      jo = function (t, e) {
        var r = e.entityMap,
          n = [],
          i = {},
          o = {},
          a = 0;
        return (
          t.getBlockMap().forEach(function (t) {
            t.findEntityRanges(
              function (t) {
                return null !== t.getEntity();
              },
              function (e) {
                var n = t.getEntityAt(e),
                  i = bo.stringify(n);
                o[i] || ((o[i] = n), (r[i] = "".concat(a)), a++);
              }
            ),
              (function (t, e, r, n) {
                if (t instanceof T) r.push(Po(t, e));
                else {
                  t instanceof U || X(!1);
                  var i = t.getParentKey(),
                    o = (n[t.getKey()] = Lo(
                      Lo({}, Po(t, e)),
                      {},
                      { children: [] }
                    ));
                  i ? n[i].children.push(o) : r.push(o);
                }
              })(t, r, n, i);
          }),
          { blocks: n, entityMap: r }
        );
      },
      Ro = function (t) {
        var e = { entityMap: {}, blocks: [] };
        return (
          (e = (function (t, e) {
            var r = e.blocks,
              n = e.entityMap,
              i = {};
            return (
              Object.keys(n).forEach(function (e, r) {
                var n = t.getEntity(bo.unstringify(e));
                i[r] = {
                  type: n.getType(),
                  mutability: n.getMutability(),
                  data: n.getData(),
                };
              }),
              { blocks: r, entityMap: i }
            );
          })(t, (e = jo(t, e)))),
          e
        );
      };
    var No = function (t) {
      var e = t.getSelection();
      return e.isCollapsed() ? null : ut(t.getCurrentContent(), e);
    };
    var Fo = function (t, e) {
      if (t._latestEditorState.getSelection().isCollapsed()) e.preventDefault();
      else {
        var r = No(t._latestEditorState);
        if ((t.setClipboard(r), e.clipboardData && r)) {
          var n = pe.createFromBlockArray(r.toArray()),
            i = JSON.stringify(Ro(n)),
            o = document.createElement("div"),
            a = window.getSelection();
          o.appendChild(a.getRangeAt(0).cloneContents()),
            o.setAttribute("data-editor-content", i),
            o.setAttribute("style", "white-space: pre-wrap;"),
            e.clipboardData.setData("text/plain", a.toString()),
            e.clipboardData.setData("text/html", o.outerHTML),
            e.preventDefault();
        }
      }
    };
    var zo = function (t, e) {
      var r,
        n = t._latestEditorState,
        i = n.getSelection(),
        o = e.target;
      if (i.isCollapsed()) e.preventDefault();
      else {
        o instanceof Node && (r = di(si.getScrollParent(o)));
        var a = No(n);
        t.setClipboard(a),
          t.setMode("cut"),
          setTimeout(function () {
            t.restoreEditorDOM(r),
              t.exitCurrentMode(),
              t.update(
                (function (t) {
                  var e = Kt.removeRange(
                    t.getCurrentContent(),
                    t.getSelection(),
                    "forward"
                  );
                  return Ye.push(t, e, "remove-range");
                })(n)
              );
          }, 0);
      }
    };
    var Uo = function (t, e) {
      t.setMode("drag"), e.preventDefault();
    };
    var Ho = function (t) {
      (t._internalDrag = !0), t.setMode("drag");
    };
    var qo = function (t, e) {
      var r = t._latestEditorState,
        n = r.getSelection();
      if (!n.getHasFocus()) {
        var i = n.set("hasFocus", !0);
        t.props.onFocus && t.props.onFocus(e),
          Qr.isBrowser("Chrome < 60.0.3081.0")
            ? t.update(Ye.forceSelection(r, i))
            : t.update(Ye.acceptSelection(r, i));
      }
    };
    var Wo = function (t, e) {
        var r = t.getSelection(),
          n = t.getCurrentContent(),
          i = r.getStartKey(),
          o = r.getStartOffset(),
          a = i,
          u = 0;
        if (e > o) {
          var s = n.getKeyBefore(i);
          if (null == s) a = i;
          else (a = s), (u = n.getBlockForKey(s).getText().length);
        } else u = o - e;
        return r.merge({ focusKey: a, focusOffset: u, isBackward: !0 });
      },
      Yo = st("draft_tree_data_support");
    var $o = function (t, e, r) {
      var n = t.getSelection(),
        i = t.getCurrentContent(),
        o = n,
        a = n.getAnchorKey(),
        u = n.getFocusKey(),
        s = i.getBlockForKey(a);
      if (Yo && "forward" === r && a !== u) return i;
      if (n.isCollapsed()) {
        if ("forward" === r) {
          if (t.isSelectionAtEndOfContent()) return i;
          if (Yo)
            if (n.getAnchorOffset() === i.getBlockForKey(a).getLength()) {
              var c = i.getBlockForKey(s.nextSibling);
              if (!c || 0 === c.getLength()) return i;
            }
        } else if (t.isSelectionAtStartOfContent()) return i;
        if ((o = e(t)) === n) return i;
      }
      return Kt.removeRange(i, o, r);
    };
    var Go = function (t) {
        var e = $o(
          t,
          function (t) {
            var e = t.getSelection(),
              r = t.getCurrentContent(),
              n = e.getAnchorKey(),
              i = e.getAnchorOffset(),
              o = r.getBlockForKey(n).getText()[i - 1];
            return Wo(t, o ? Co.getUTF16Length(o, 0) : 1);
          },
          "backward"
        );
        if (e === t.getCurrentContent()) return t;
        var r = t.getSelection();
        return Ye.push(
          t,
          e.set("selectionBefore", r),
          r.isCollapsed() ? "backspace-character" : "remove-range"
        );
      },
      Vo = Qr.isEngine("Gecko");
    var Xo = function (t, r) {
        void 0 !== t._pendingStateFromBeforeInput &&
          (t.update(t._pendingStateFromBeforeInput),
          (t._pendingStateFromBeforeInput = void 0));
        var n = e.a.getSelection(),
          i = n.anchorNode,
          o = n.isCollapsed,
          a = i.nodeType !== Node.TEXT_NODE,
          u = i.nodeType !== Node.TEXT_NODE && i.nodeType !== Node.ELEMENT_NODE;
        if (st("draft_killswitch_allow_nontextnodes")) {
          if (a) return;
        } else if (u) return;
        if (
          i.nodeType === Node.TEXT_NODE &&
          (null !== i.previousSibling || null !== i.nextSibling)
        ) {
          var s = i.parentNode;
          i.nodeValue = s.textContent;
          for (var c = s.firstChild; null !== c; c = c.nextSibling)
            c !== i && s.removeChild(c);
        }
        var l = i.textContent,
          f = t._latestEditorState,
          p = Ie(en(i)),
          h = Or.decode(p),
          d = h.blockKey,
          g = h.decoratorKey,
          y = h.leafKey,
          v = f.getBlockTree(d).getIn([g, "leaves", y]),
          m = v.start,
          b = v.end,
          _ = f.getCurrentContent(),
          w = _.getBlockForKey(d),
          S = w.getText().slice(m, b);
        if ((l.endsWith("\n\n") && (l = l.slice(0, -1)), l !== S)) {
          var O,
            k,
            E,
            C,
            x = f.getSelection(),
            D = x.merge({ anchorOffset: m, focusOffset: b, isBackward: !1 }),
            T = w.getEntityAt(m),
            M = T && _.getEntity(T),
            I = "MUTABLE" === (M && M.getMutability()),
            K = I ? "spellcheck-change" : "apply-entity",
            A = Kt.replaceText(
              _,
              D,
              l,
              w.getInlineStyleAt(m),
              I ? w.getEntityAt(m) : null
            );
          if (Vo)
            (O = n.anchorOffset),
              (k = n.focusOffset),
              (C = (E = m + Math.min(O, k)) + Math.abs(O - k)),
              (O = E),
              (k = C);
          else {
            var L = l.length - S.length;
            (E = x.getStartOffset()),
              (C = x.getEndOffset()),
              (O = o ? C + L : E),
              (k = C + L);
          }
          var B = A.merge({
            selectionBefore: _.getSelectionAfter(),
            selectionAfter: x.merge({ anchorOffset: O, focusOffset: k }),
          });
          t.update(Ye.push(f, B, K));
        } else {
          var P = r.nativeEvent.inputType;
          if (P) {
            var j = (function (t, e) {
              return "deleteContentBackward" === t ? Go(e) : e;
            })(P, f);
            if (j !== f) return t.restoreEditorDOM(), void t.update(j);
          }
        }
      },
      Jo = Qr.isPlatform("Mac OS X"),
      Zo = {
        isCtrlKeyCommand: function (t) {
          return !!t.ctrlKey && !t.altKey;
        },
        isOptionKeyCommand: function (t) {
          return Jo && t.altKey;
        },
        usesMacOSHeuristics: function () {
          return Jo;
        },
        hasCommandModifier: function (t) {
          return Jo ? !!t.metaKey && !t.altKey : Zo.isCtrlKeyCommand(t);
        },
      },
      Qo = Zo,
      ta = null,
      ea = {
        cut: function (t) {
          var e = t.getCurrentContent(),
            r = t.getSelection(),
            n = null;
          if (r.isCollapsed()) {
            var i = r.getAnchorKey(),
              o = e.getBlockForKey(i).getLength();
            n =
              o === r.getAnchorOffset()
                ? r.set("focusKey", e.getKeyAfter(i)).set("focusOffset", 0)
                : r.set("focusOffset", o);
          } else n = r;
          (n = Ie(n)), (ta = ut(e, n));
          var a = Kt.removeRange(e, n, "forward");
          return a === e ? t : Ye.push(t, a, "remove-range");
        },
        paste: function (t) {
          if (!ta) return t;
          var e = Kt.replaceWithFragment(
            t.getCurrentContent(),
            t.getSelection(),
            ta
          );
          return Ye.push(t, e, "insert-fragment");
        },
      };
    var ra = Qr.isBrowser("Chrome")
      ? function (t) {
          for (
            var e = t.cloneRange(), r = [], n = t.endContainer;
            null != n;
            n = n.parentNode
          ) {
            var i = n === t.commonAncestorContainer;
            i
              ? e.setStart(t.startContainer, t.startOffset)
              : e.setStart(e.endContainer, 0);
            var o,
              a = Array.from(e.getClientRects());
            if ((r.push(a), i)) return r.reverse(), (o = []).concat.apply(o, r);
            e.setEndBefore(n);
          }
          X(!1);
        }
      : function (t) {
          return Array.from(t.getClientRects());
        };
    function na(t, e) {
      for (
        var r = 1 / 0, n = 1 / 0, i = -1 / 0, o = -1 / 0, a = 0;
        a < t.length;
        a++
      ) {
        var u = t[a];
        0 !== u.width &&
          1 !== u.width &&
          ((r = Math.min(r, u.top)),
          (n = Math.min(n, u.bottom)),
          (i = Math.max(i, u.top)),
          (o = Math.max(o, u.bottom)));
      }
      return i <= n && i - r < e && o - n < e;
    }
    function ia(t) {
      switch (t.nodeType) {
        case Node.DOCUMENT_TYPE_NODE:
          return 0;
        case Node.TEXT_NODE:
        case Node.PROCESSING_INSTRUCTION_NODE:
        case Node.COMMENT_NODE:
          return t.length;
        default:
          return t.childNodes.length;
      }
    }
    var oa = function (t) {
      t.collapsed || X(!1);
      var e = (t = t.cloneRange()).startContainer;
      1 !== e.nodeType && (e = e.parentNode);
      var r = (function (t) {
          var e = getComputedStyle(t),
            r = document.createElement("div");
          (r.style.fontFamily = e.fontFamily),
            (r.style.fontSize = e.fontSize),
            (r.style.fontStyle = e.fontStyle),
            (r.style.fontWeight = e.fontWeight),
            (r.style.lineHeight = e.lineHeight),
            (r.style.position = "absolute"),
            (r.textContent = "M");
          var n = document.body;
          n || X(!1), n.appendChild(r);
          var i = r.getBoundingClientRect();
          return n.removeChild(r), i.height;
        })(e),
        n = t.endContainer,
        i = t.endOffset;
      for (
        t.setStart(t.startContainer, 0);
        na(ra(t), r) &&
        ((n = t.startContainer),
        (i = t.startOffset),
        n.parentNode || X(!1),
        t.setStartBefore(n),
        1 !== n.nodeType || "inline" === getComputedStyle(n).display);

      );
      for (var o = n, a = i - 1; ; ) {
        for (var u = o.nodeValue, s = a; s >= 0; s--)
          if (!(null != u && s > 0 && Co.isSurrogatePair(u, s - 1))) {
            if ((t.setStart(o, s), !na(ra(t), r))) break;
            (n = o), (i = s);
          }
        if (-1 === s || 0 === o.childNodes.length) break;
        a = ia((o = o.childNodes[s]));
      }
      return t.setStart(n, i), t;
    };
    var aa = function (t) {
        var r = $o(
          t,
          function (t) {
            var r = t.getSelection();
            if (r.isCollapsed() && 0 === r.getAnchorOffset()) return Wo(t, 1);
            var n = e.a.getSelection().getRangeAt(0);
            return (
              (n = oa(n)),
              hn(
                t,
                null,
                n.endContainer,
                n.endOffset,
                n.startContainer,
                n.startOffset
              ).selectionState
            );
          },
          "backward"
        );
        return r === t.getCurrentContent() ? t : Ye.push(t, r, "remove-range");
      },
      ua =
        "\\s|(?![_])" +
        (function () {
          return "[.,+*?$|#{}()'\\^\\-\\[\\]\\\\\\/!@%\"~=<>_:;・、。〈-】〔-〟：-？！-／［-｀｛-･⸮؟٪-٬؛،؍﴾﴿᠁।၊။‐-‧‰-⁞¡-±´-¸º»¿]";
        })(),
      sa = new RegExp(
        "^(?:" + ua + ")*(?:" + "['‘’]|(?!" + ua + ").)*(?:(?!" + ua + ").)"
      ),
      ca = new RegExp(
        "(?:(?!" + ua + ").)(?:" + "['‘’]|(?!" + ua + ").)*(?:" + ua + ")*$"
      );
    function la(t, e) {
      var r = e ? ca.exec(t) : sa.exec(t);
      return r ? r[0] : t;
    }
    var fa = {
      getBackward: function (t) {
        return la(t, !0);
      },
      getForward: function (t) {
        return la(t, !1);
      },
    };
    var pa = function (t) {
      var e = $o(
        t,
        function (t) {
          var e = t.getSelection(),
            r = e.getStartOffset();
          if (0 === r) return Wo(t, 1);
          var n = e.getStartKey(),
            i = t.getCurrentContent().getBlockForKey(n).getText().slice(0, r),
            o = fa.getBackward(i);
          return Wo(t, o.length || 1);
        },
        "backward"
      );
      return e === t.getCurrentContent() ? t : Ye.push(t, e, "remove-range");
    };
    var ha = function (t, e) {
      var r,
        n = t.getSelection(),
        i = n.getStartKey(),
        o = n.getStartOffset(),
        a = t.getCurrentContent(),
        u = i;
      return (
        e > a.getBlockForKey(i).getText().length - o
          ? ((u = a.getKeyAfter(i)), (r = 0))
          : (r = o + e),
        n.merge({ focusKey: u, focusOffset: r })
      );
    };
    var da = function (t) {
      var e = $o(
        t,
        function (t) {
          var e = t.getSelection(),
            r = e.getStartOffset(),
            n = e.getStartKey(),
            i = t.getCurrentContent().getBlockForKey(n).getText().slice(r),
            o = fa.getForward(i);
          return ha(t, o.length || 1);
        },
        "forward"
      );
      return e === t.getCurrentContent() ? t : Ye.push(t, e, "remove-range");
    };
    var ga = function (t) {
      var e = Kt.splitBlock(t.getCurrentContent(), t.getSelection());
      return Ye.push(t, e, "split-block");
    };
    var ya = function (t) {
      var e = t.getSelection(),
        r = e.getEndKey(),
        n = t.getCurrentContent().getBlockForKey(r).getLength();
      return Ye.set(t, {
        selection: e.merge({
          anchorKey: r,
          anchorOffset: n,
          focusKey: r,
          focusOffset: n,
          isBackward: !1,
        }),
        forceSelection: !0,
      });
    };
    var va = function (t) {
      var e = t.getSelection(),
        r = e.getStartKey();
      return Ye.set(t, {
        selection: e.merge({
          anchorKey: r,
          anchorOffset: 0,
          focusKey: r,
          focusOffset: 0,
          isBackward: !1,
        }),
        forceSelection: !0,
      });
    };
    var ma = function (t) {
      var e = $o(
        t,
        function (t) {
          var e = t.getSelection(),
            r = t.getCurrentContent(),
            n = e.getAnchorKey(),
            i = e.getAnchorOffset(),
            o = r.getBlockForKey(n).getText()[i];
          return ha(t, o ? Co.getUTF16Length(o, 0) : 1);
        },
        "forward"
      );
      if (e === t.getCurrentContent()) return t;
      var r = t.getSelection();
      return Ye.push(
        t,
        e.set("selectionBefore", r),
        r.isCollapsed() ? "delete-character" : "remove-range"
      );
    };
    var ba = function (t) {
      var e = t.getSelection();
      if (!e.isCollapsed()) return t;
      var r = e.getAnchorOffset();
      if (0 === r) return t;
      var n,
        i,
        o = e.getAnchorKey(),
        a = t.getCurrentContent(),
        u = a.getBlockForKey(o).getLength();
      if (u <= 1) return t;
      r === u
        ? ((n = e.set("anchorOffset", r - 1)), (i = e))
        : (i = (n = e.set("focusOffset", r + 1)).set("anchorOffset", r + 1));
      var s = ut(a, n),
        c = Kt.removeRange(a, n, "backward"),
        l = c.getSelectionAfter(),
        f = l.getAnchorOffset() - 1,
        p = l.merge({ anchorOffset: f, focusOffset: f }),
        h = Kt.replaceWithFragment(c, p, s),
        d = Ye.push(t, h, "insert-fragment");
      return Ye.acceptSelection(d, i);
    };
    var _a = function (t, e, r) {
        var n = Ye.undo(e);
        if ("spellcheck-change" !== e.getLastChangeType())
          t.preventDefault(),
            e.getNativelyRenderedContent()
              ? (r(Ye.set(e, { nativelyRenderedContent: null })),
                setTimeout(function () {
                  r(n);
                }, 0))
              : r(n);
        else {
          var i = n.getCurrentContent();
          r(Ye.set(n, { nativelyRenderedContent: i }));
        }
      },
      wa = Qo.isOptionKeyCommand,
      Sa = Qr.isBrowser("Chrome");
    var Oa = function (t, e) {
      var r = e.which,
        n = t._latestEditorState;
      function i(r) {
        var n = t.props[r];
        return !!n && (n(e), !0);
      }
      switch (r) {
        case dr:
          if (
            (e.preventDefault(),
            t.props.handleReturn && uo(t.props.handleReturn(e, n)))
          )
            return;
          break;
        case gr:
          if ((e.preventDefault(), i("onEscape"))) return;
          break;
        case hr:
          if (i("onTab")) return;
          break;
        case mr:
          if (i("onUpArrow")) return;
          break;
        case br:
          if (i("onRightArrow")) return;
          break;
        case _r:
          if (i("onDownArrow")) return;
          break;
        case vr:
          if (i("onLeftArrow")) return;
          break;
        case yr:
          Sa && wa(e) && e.preventDefault();
      }
      var o = t.props.keyBindingFn(e);
      if (o)
        if ("undo" !== o) {
          if (
            (e.preventDefault(),
            !t.props.handleKeyCommand ||
              !uo(t.props.handleKeyCommand(o, n, e.timeStamp)))
          ) {
            var a = (function (t, e) {
              switch (t) {
                case "redo":
                  return Ye.redo(e);
                case "delete":
                  return ma(e);
                case "delete-word":
                  return da(e);
                case "backspace":
                  return Go(e);
                case "backspace-word":
                  return pa(e);
                case "backspace-to-start-of-line":
                  return aa(e);
                case "split-block":
                  return ga(e);
                case "transpose-characters":
                  return ba(e);
                case "move-selection-to-start-of-block":
                  return va(e);
                case "move-selection-to-end-of-block":
                  return ya(e);
                case "secondary-cut":
                  return ea.cut(e);
                case "secondary-paste":
                  return ea.paste(e);
                default:
                  return e;
              }
            })(o, n);
            a !== n && t.update(a);
          }
        } else _a(e, n, t.update);
      else if (r === yr && Sa && wa(e)) {
        var u = Kt.replaceText(n.getCurrentContent(), n.getSelection(), " ");
        t.update(Ye.push(n, u, "insert-characters"));
      }
    };
    var ka = (function () {
        function t(t) {
          var e, r, n;
          (n = void 0),
            (r = "_uri") in (e = this)
              ? Object.defineProperty(e, r, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[r] = n),
            (this._uri = t);
        }
        return (
          (t.prototype.toString = function () {
            return this._uri;
          }),
          t
        );
      })(),
      Ea = Qr.isBrowser("IE <= 9");
    var Ca,
      xa = function (t) {
        var e,
          r = null;
        return (
          !Ea &&
            document.implementation &&
            document.implementation.createHTMLDocument &&
            ((e = document.implementation.createHTMLDocument("foo"))
              .documentElement || X(!1),
            (e.documentElement.innerHTML = t),
            (r = e.getElementsByTagName("body")[0])),
          r
        );
      };
    function Da(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function Ta(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Da(Object(r), !0).forEach(function (e) {
              Ma(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : Da(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    function Ma(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    var Ia,
      Ka,
      Aa = o.Set,
      La = st("draft_tree_data_support"),
      Ba = o.List,
      Pa = o.OrderedSet,
      ja = " ",
      Ra = new RegExp("\r", "g"),
      Na = new RegExp("\n", "g"),
      Fa = new RegExp("^\n", "g"),
      za = new RegExp("&nbsp;", "g"),
      Ua = new RegExp("&#13;?", "g"),
      Ha = new RegExp("&#8203;?", "g"),
      qa = ["bold", "bolder", "500", "600", "700", "800", "900"],
      Wa = ["light", "lighter", "100", "200", "300", "400"],
      Ya = {
        b: "BOLD",
        code: "CODE",
        del: "STRIKETHROUGH",
        em: "ITALIC",
        i: "ITALIC",
        s: "STRIKETHROUGH",
        strike: "STRIKETHROUGH",
        strong: "BOLD",
        u: "UNDERLINE",
        mark: "HIGHLIGHT",
      },
      $a =
        (Ma((Ca = {}), cr("public/DraftStyleDefault/depth0"), 0),
        Ma(Ca, cr("public/DraftStyleDefault/depth1"), 1),
        Ma(Ca, cr("public/DraftStyleDefault/depth2"), 2),
        Ma(Ca, cr("public/DraftStyleDefault/depth3"), 3),
        Ma(Ca, cr("public/DraftStyleDefault/depth4"), 4),
        Ca),
      Ga = ["className", "href", "rel", "target", "title"],
      Va = ["alt", "className", "height", "src", "width"],
      Xa = { text: "", inlines: [], entities: [], blocks: [] },
      Ja = { children: Ba(), depth: 0, key: "", type: "" },
      Za = function (t, e) {
        return "li" === t
          ? "ol" === e
            ? "ordered-list-item"
            : "unordered-list-item"
          : null;
      },
      Qa = function (t, e, r) {
        var n = r
          .filter(function (e) {
            return (
              e.element === t ||
              e.wrapper === t ||
              (e.aliasedElements &&
                e.aliasedElements.some(function (e) {
                  return e === t;
                }))
            );
          })
          .keySeq()
          .toSet()
          .toArray()
          .sort();
        switch (n.length) {
          case 0:
            return "unstyled";
          case 1:
            return n[0];
          default:
            return (
              (function (t, e, r) {
                for (var n = 0; n < r.length; n++) {
                  var i = r[n](t, e);
                  if (i) return i;
                }
                return null;
              })(t, e, [Za]) || "unstyled"
            );
        }
      },
      tu = function (t, e, r) {
        var n = t.text.slice(-1),
          i = e.text.slice(0, 1);
        if (
          ("\r" !== n ||
            "\r" !== i ||
            r ||
            ((t.text = t.text.slice(0, -1)),
            t.inlines.pop(),
            t.entities.pop(),
            t.blocks.pop()),
          "\r" === n)
        ) {
          if (e.text === ja || "\n" === e.text) return t;
          (i !== ja && "\n" !== i) ||
            ((e.text = e.text.slice(1)), e.inlines.shift(), e.entities.shift());
        }
        return {
          text: t.text + e.text,
          inlines: t.inlines.concat(e.inlines),
          entities: t.entities.concat(e.entities),
          blocks: t.blocks.concat(e.blocks),
        };
      },
      eu = function (t) {
        t instanceof HTMLAnchorElement || X(!1);
        var e = t.protocol;
        return "http:" === e || "https:" === e || "mailto:" === e;
      },
      ru = function (t) {
        var e = new Array(1);
        return (
          t && (e[0] = t),
          Ta(Ta({}, Xa), {}, { text: ja, inlines: [Pa()], entities: e })
        );
      },
      nu = function () {
        return Ta(
          Ta({}, Xa),
          {},
          { text: "\n", inlines: [Pa()], entities: new Array(1) }
        );
      },
      iu = function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return Ta(Ta({}, Ja), t);
      },
      ou = function (t, e) {
        var r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return {
          text: "\r",
          inlines: [Pa()],
          entities: new Array(1),
          blocks: [
            iu({
              parent: r,
              key: rt(),
              type: t,
              depth: Math.max(0, Math.min(4, e)),
            }),
          ],
        };
      },
      au = function t(e, r, n, i, o, a, u, s, c, l) {
        var f,
          p = Ia,
          h = r.nodeName.toLowerCase(),
          d = e,
          g = "unstyled",
          y = !1,
          v = o && Qa(o, i, s),
          m = Ta({}, Xa);
        if ("#text" === h) {
          var b = r.textContent,
            _ = b.trim();
          if (i && "" === _ && r.parentElement) {
            var w = r.parentElement.nodeName.toLowerCase();
            if ("ol" === w || "ul" === w)
              return { chunk: Ta({}, Xa), entityMap: e };
          }
          return "" === _ && "pre" !== o
            ? { chunk: ru(c), entityMap: e }
            : ("pre" !== o && (b = (b = b.replace(Fa, "")).replace(Na, ja)),
              (Ia = h),
              {
                chunk: {
                  text: b,
                  inlines: Array(b.length).fill(n),
                  entities: Array(b.length).fill(c),
                  blocks: [],
                },
                entityMap: e,
              });
        }
        if (((Ia = h), "br" === h))
          return "br" !== p || (o && "unstyled" !== v)
            ? { chunk: nu(), entityMap: e }
            : { chunk: ou("unstyled", u, l), entityMap: e };
        if (
          "img" === h &&
          r instanceof HTMLImageElement &&
          r.attributes.getNamedItem("src") &&
          r.attributes.getNamedItem("src").value
        ) {
          var S = r,
            O = {};
          Va.forEach(function (t) {
            var e = S.getAttribute(t);
            e && (O[t] = e);
          }),
            st("draftjs_fix_paste_for_img")
              ? "presentation" !== r.getAttribute("role") &&
                (r.textContent = "📷")
              : (r.textContent = "📷"),
            (c = ee.__create("IMAGE", "MUTABLE", O || {}));
        }
        (n = (function (t, e, r) {
          var n = Ya[t];
          if (n) r = r.add(n).toOrderedSet();
          else if (e instanceof HTMLElement) {
            var i = e;
            r = r
              .withMutations(function (t) {
                var e = i.style.fontWeight,
                  r = i.style.fontStyle,
                  n = i.style.textDecoration;
                qa.indexOf(e) >= 0
                  ? t.add("BOLD")
                  : Wa.indexOf(e) >= 0 && t.remove("BOLD"),
                  "italic" === r
                    ? t.add("ITALIC")
                    : "normal" === r && t.remove("ITALIC"),
                  "underline" === n && t.add("UNDERLINE"),
                  "line-through" === n && t.add("STRIKETHROUGH"),
                  "none" === n &&
                    (t.remove("UNDERLINE"), t.remove("STRIKETHROUGH"));
              })
              .toOrderedSet();
          }
          return r;
        })(h, r, n)),
          ("ul" !== h && "ol" !== h) || (i && (u += 1), (i = h)),
          !La &&
            "li" === h &&
            r instanceof HTMLElement &&
            (u = (function (t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0;
              return (
                Object.keys($a).some(function (r) {
                  t.classList.contains(r) && (e = $a[r]);
                }),
                e
              );
            })(r, u));
        var k = Qa(h, i, s),
          E = i && "li" === o && "li" === h,
          C = (!o || La) && -1 !== a.indexOf(h);
        (E || C) && ((f = (m = ou(k, u, l)).blocks[0].key), (o = h), (y = !La)),
          E && (g = "ul" === i ? "unordered-list-item" : "ordered-list-item");
        var x = r.firstChild;
        null != x && (h = x.nodeName.toLowerCase());
        for (var D = null; x; ) {
          x instanceof HTMLAnchorElement && x.href && eu(x)
            ? (function () {
                var t = x,
                  e = {};
                Ga.forEach(function (r) {
                  var n = t.getAttribute(r);
                  n && (e[r] = n);
                }),
                  (e.url = new ka(t.href).toString()),
                  (D = ee.__create("LINK", "MUTABLE", e || {}));
              })()
            : (D = void 0);
          var T = t(d, x, n, i, o, a, u, s, D || c, La ? f : null),
            M = T.chunk;
          (d = T.entityMap), (m = tu(m, M, La));
          var I = x.nextSibling;
          !l && I && a.indexOf(h) >= 0 && o && (m = tu(m, nu())),
            I && (h = I.nodeName.toLowerCase()),
            (x = I);
        }
        return y && (m = tu(m, ou(g, u, l))), { chunk: m, entityMap: d };
      },
      uu = function (t, e, r, n) {
        t = t
          .trim()
          .replace(Ra, "")
          .replace(za, ja)
          .replace(Ua, "")
          .replace(Ha, "");
        var i = (function (t) {
            var e = t.get("unstyled").element,
              r = Aa([]);
            return (
              t.forEach(function (t) {
                t.aliasedElements &&
                  t.aliasedElements.forEach(function (t) {
                    r = r.add(t);
                  }),
                  (r = r.add(t.element));
              }),
              r
                .filter(function (t) {
                  return t && t !== e;
                })
                .toArray()
                .sort()
            );
          })(r),
          o = e(t);
        if (!o) return null;
        Ia = null;
        var a = (function (t, e) {
            return e.some(function (e) {
              return -1 !== t.indexOf("<" + e);
            });
          })(t, i)
            ? i
            : ["div"],
          u = au(n, o, Pa(), "ul", null, a, -1, r),
          s = u.chunk,
          c = u.entityMap;
        return (
          0 === s.text.indexOf("\r") &&
            (s = {
              text: s.text.slice(1),
              inlines: s.inlines.slice(1),
              entities: s.entities.slice(1),
              blocks: s.blocks,
            }),
          "\r" === s.text.slice(-1) &&
            ((s.text = s.text.slice(0, -1)),
            (s.inlines = s.inlines.slice(0, -1)),
            (s.entities = s.entities.slice(0, -1)),
            s.blocks.pop()),
          0 === s.blocks.length &&
            s.blocks.push(Ta(Ta({}, Xa), {}, { type: "unstyled", depth: 0 })),
          s.text.split("\r").length === s.blocks.length + 1 &&
            s.blocks.unshift({ type: "unstyled", depth: 0 }),
          { chunk: s, entityMap: c }
        );
      },
      su = function (t) {
        if (!t || !t.text || !Array.isArray(t.blocks)) return null;
        var e = 0,
          r = t.blocks,
          n = t.inlines,
          i = t.entities,
          o = La ? U : T;
        return t.text.split("\r").reduce(
          function (t, a, u) {
            a = ae(a);
            var s = r[u],
              c = e + a.length,
              l = n.slice(e, c),
              f = i.slice(e, c),
              p = Ba(
                l.map(function (t, e) {
                  var r = { style: t, entity: null };
                  return f[e] && (r.entity = f[e]), v.create(r);
                })
              );
            e = c + 1;
            var h = s.depth,
              d = s.type,
              g = s.parent,
              y = s.key || rt(),
              m = null;
            if (g) {
              var b = t.cacheRef[g],
                _ = t.contentBlocks[b];
              if (_.getChildKeys().isEmpty() && _.getText()) {
                var w = _.getCharacterList(),
                  S = _.getText();
                m = rt();
                var O = new U({
                  key: m,
                  text: S,
                  characterList: w,
                  parent: g,
                  nextSibling: y,
                });
                t.contentBlocks.push(O),
                  (_ = _.withMutations(function (t) {
                    t.set("characterList", Ba())
                      .set("text", "")
                      .set("children", _.children.push(O.getKey()));
                  }));
              }
              t.contentBlocks[b] = _.set("children", _.children.push(y));
            }
            var k = new o({
              key: y,
              parent: g,
              type: d,
              depth: h,
              text: a,
              characterList: p,
              prevSibling:
                m || (0 === u || r[u - 1].parent !== g ? null : r[u - 1].key),
              nextSibling:
                u === r.length - 1 || r[u + 1].parent !== g
                  ? null
                  : r[u + 1].key,
            });
            return t.contentBlocks.push(k), (t.cacheRef[k.key] = u), t;
          },
          { cacheRef: {}, contentBlocks: [] }
        ).contentBlocks;
      },
      cu = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xa,
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lr,
          n = uu(t, e, r, ee);
        if (null == n) return null;
        var i = n.chunk,
          o = n.entityMap,
          a = su(i);
        return { contentBlocks: a, entityMap: o };
      };
    function lu(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function fu(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? lu(Object(r), !0).forEach(function (e) {
              pu(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : lu(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    function pu(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    var hu = o.List,
      du = o.Map,
      gu = o.OrderedSet,
      yu = st("draft_tree_data_support"),
      vu = new RegExp("\r", "g"),
      mu = new RegExp("\n", "g"),
      bu = new RegExp("^\n", "g"),
      _u = new RegExp("&nbsp;", "g"),
      wu = new RegExp("&#13;?", "g"),
      Su = new RegExp("&#8203;?", "g"),
      Ou = ["bold", "bolder", "500", "600", "700", "800", "900"],
      ku = ["light", "lighter", "100", "200", "300", "400"],
      Eu = ["className", "href", "rel", "target", "title"],
      Cu = ["alt", "className", "height", "src", "width"],
      xu =
        (pu((Ka = {}), cr("public/DraftStyleDefault/depth0"), 0),
        pu(Ka, cr("public/DraftStyleDefault/depth1"), 1),
        pu(Ka, cr("public/DraftStyleDefault/depth2"), 2),
        pu(Ka, cr("public/DraftStyleDefault/depth3"), 3),
        pu(Ka, cr("public/DraftStyleDefault/depth4"), 4),
        Ka),
      Du = du({
        b: "BOLD",
        code: "CODE",
        del: "STRIKETHROUGH",
        em: "ITALIC",
        i: "ITALIC",
        s: "STRIKETHROUGH",
        strike: "STRIKETHROUGH",
        strong: "BOLD",
        u: "UNDERLINE",
        mark: "HIGHLIGHT",
      }),
      Tu = function (t) {
        var e = {};
        return (
          t.mapKeys(function (t, r) {
            var n = [r.element];
            void 0 !== r.aliasedElements && n.push.apply(n, r.aliasedElements),
              n.forEach(function (r) {
                void 0 === e[r]
                  ? (e[r] = t)
                  : "string" == typeof e[r]
                  ? (e[r] = [e[r], t])
                  : e[r].push(t);
              });
          }),
          du(e)
        );
      },
      Mu = function (t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (
          Object.keys(xu).some(function (r) {
            t.classList.contains(r) && (e = xu[r]);
          }),
          e
        );
      },
      Iu = function (t) {
        return !(
          !(t instanceof HTMLAnchorElement && t.href) ||
          ("http:" !== t.protocol &&
            "https:" !== t.protocol &&
            "mailto:" !== t.protocol)
        );
      },
      Ku = function (t) {
        return !!(
          t instanceof HTMLImageElement &&
          t.attributes.getNamedItem("src") &&
          t.attributes.getNamedItem("src").value
        );
      },
      Au = function (t) {
        return "ul" === t || "ol" === t;
      },
      Lu = (function () {
        function t(t, e) {
          pu(this, "characterList", hu()),
            pu(this, "currentBlockType", "unstyled"),
            pu(this, "currentDepth", -1),
            pu(this, "currentEntity", null),
            pu(this, "currentStyle", gu()),
            pu(this, "currentText", ""),
            pu(this, "wrapper", null),
            pu(this, "blockConfigs", []),
            pu(this, "contentBlocks", []),
            pu(this, "entityMap", ee),
            pu(this, "blockTypeMap", void 0),
            pu(this, "disambiguate", void 0),
            this.clear(),
            (this.blockTypeMap = t),
            (this.disambiguate = e);
        }
        var e = t.prototype;
        return (
          (e.clear = function () {
            (this.characterList = hu()),
              (this.blockConfigs = []),
              (this.currentBlockType = "unstyled"),
              (this.currentDepth = -1),
              (this.currentEntity = null),
              (this.currentStyle = gu()),
              (this.currentText = ""),
              (this.entityMap = ee),
              (this.wrapper = null),
              (this.contentBlocks = []);
          }),
          (e.addDOMNode = function (t) {
            var e;
            return (
              (this.contentBlocks = []),
              (e = this.blockConfigs).push.apply(e, this._toBlockConfigs([t])),
              this._trimCurrentText(),
              "" !== this.currentText &&
                this.blockConfigs.push(this._makeBlockConfig()),
              this
            );
          }),
          (e.getContentBlocks = function () {
            return (
              0 === this.contentBlocks.length &&
                (yu
                  ? this._toContentBlocks(this.blockConfigs)
                  : this._toFlatContentBlocks(this.blockConfigs)),
              { contentBlocks: this.contentBlocks, entityMap: this.entityMap }
            );
          }),
          (e.addStyle = function (t) {
            this.currentStyle = this.currentStyle.add(t);
          }),
          (e.removeStyle = function (t) {
            this.currentStyle = this.currentStyle.remove(t);
          }),
          (e._makeBlockConfig = function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              e = t.key || rt(),
              r = fu(
                {
                  key: e,
                  type: this.currentBlockType,
                  text: this.currentText,
                  characterList: this.characterList,
                  depth: Math.max(0, this.currentDepth),
                  parent: null,
                  children: hu(),
                  prevSibling: null,
                  nextSibling: null,
                  childConfigs: [],
                },
                t
              );
            return (
              (this.characterList = hu()),
              (this.currentBlockType = "unstyled"),
              (this.currentDepth = -1),
              (this.currentText = ""),
              r
            );
          }),
          (e._toBlockConfigs = function (t) {
            for (var e = [], r = 0; r < t.length; r++) {
              var n = t[r],
                i = n.nodeName.toLowerCase();
              if ("body" === i || Au(i)) {
                this._trimCurrentText(),
                  "" !== this.currentText && e.push(this._makeBlockConfig());
                var o = this.currentDepth,
                  a = this.wrapper;
                Au(i) && ((this.wrapper = i), Au(a) && this.currentDepth++),
                  e.push.apply(
                    e,
                    this._toBlockConfigs(Array.from(n.childNodes))
                  ),
                  (this.currentDepth = o),
                  (this.wrapper = a);
              } else {
                var u = this.blockTypeMap.get(i);
                if (void 0 === u)
                  if ("#text" !== i)
                    if ("br" !== i)
                      if (Ku(n)) this._addImgNode(n);
                      else if (Iu(n)) this._addAnchorNode(n, e);
                      else {
                        var s = Du.get(i);
                        void 0 !== s && this.addStyle(s),
                          e.push.apply(
                            e,
                            this._toBlockConfigs(Array.from(n.childNodes))
                          ),
                          void 0 !== s && this.removeStyle(s),
                          this._updateStyleFromNodeAttributes(n);
                      }
                    else this._addBreakNode(n);
                  else this._addTextNode(n);
                else {
                  this._trimCurrentText(),
                    "" !== this.currentText && e.push(this._makeBlockConfig());
                  var c = this.currentDepth,
                    l = this.wrapper;
                  (this.wrapper = "pre" === i ? "pre" : this.wrapper),
                    "string" != typeof u &&
                      (u =
                        this.disambiguate(i, this.wrapper) ||
                        u[0] ||
                        "unstyled"),
                    !yu &&
                      n instanceof HTMLElement &&
                      ("unordered-list-item" === u ||
                        "ordered-list-item" === u) &&
                      (this.currentDepth = Mu(n, this.currentDepth));
                  var f = rt(),
                    p = this._toBlockConfigs(Array.from(n.childNodes));
                  this._trimCurrentText(),
                    e.push(
                      this._makeBlockConfig({
                        key: f,
                        childConfigs: p,
                        type: u,
                      })
                    ),
                    (this.currentDepth = c),
                    (this.wrapper = l);
                }
              }
            }
            return e;
          }),
          (e._appendText = function (t) {
            var e;
            this.currentText += t;
            var r = v.create({
              style: this.currentStyle,
              entity: this.currentEntity,
            });
            this.characterList = (e = this.characterList).push.apply(
              e,
              Array(t.length).fill(r)
            );
          }),
          (e._trimCurrentText = function () {
            var t = this.currentText.length,
              e = t - this.currentText.trimLeft().length,
              r = this.currentText.trimRight().length,
              n = this.characterList.findEntry(function (t) {
                return null !== t.getEntity();
              });
            (e = void 0 !== n ? Math.min(e, n[0]) : e) >
            (r =
              void 0 !==
              (n = this.characterList.reverse().findEntry(function (t) {
                return null !== t.getEntity();
              }))
                ? Math.max(r, t - n[0])
                : r)
              ? ((this.currentText = ""), (this.characterList = hu()))
              : ((this.currentText = this.currentText.slice(e, r)),
                (this.characterList = this.characterList.slice(e, r)));
          }),
          (e._addTextNode = function (t) {
            var e = t.textContent;
            "" === e.trim() && "pre" !== this.wrapper && (e = " "),
              "pre" !== this.wrapper &&
                (e = (e = e.replace(bu, "")).replace(mu, " ")),
              this._appendText(e);
          }),
          (e._addBreakNode = function (t) {
            t instanceof HTMLBRElement && this._appendText("\n");
          }),
          (e._addImgNode = function (t) {
            if (t instanceof HTMLImageElement) {
              var e = t,
                r = {};
              Cu.forEach(function (t) {
                var n = e.getAttribute(t);
                n && (r[t] = n);
              }),
                (this.currentEntity = this.entityMap.__create(
                  "IMAGE",
                  "MUTABLE",
                  r
                )),
                st("draftjs_fix_paste_for_img")
                  ? "presentation" !== t.getAttribute("role") &&
                    this._appendText("📷")
                  : this._appendText("📷"),
                (this.currentEntity = null);
            }
          }),
          (e._addAnchorNode = function (t, e) {
            if (t instanceof HTMLAnchorElement) {
              var r = t,
                n = {};
              Eu.forEach(function (t) {
                var e = r.getAttribute(t);
                e && (n[t] = e);
              }),
                (n.url = new ka(r.href).toString()),
                (this.currentEntity = this.entityMap.__create(
                  "LINK",
                  "MUTABLE",
                  n || {}
                )),
                e.push.apply(e, this._toBlockConfigs(Array.from(t.childNodes))),
                (this.currentEntity = null);
            }
          }),
          (e._updateStyleFromNodeAttributes = function (t) {
            if (t instanceof HTMLElement) {
              var e = t,
                r = e.style.fontWeight,
                n = e.style.fontStyle,
                i = e.style.textDecoration;
              Ou.indexOf(r) >= 0
                ? this.addStyle("BOLD")
                : ku.indexOf(r) >= 0 && this.removeStyle("BOLD"),
                "italic" === n
                  ? this.addStyle("ITALIC")
                  : "normal" === n && this.removeStyle("ITALIC"),
                "underline" === i && this.addStyle("UNDERLINE"),
                "line-through" === i && this.addStyle("STRIKETHROUGH"),
                "none" === i &&
                  (this.removeStyle("UNDERLINE"),
                  this.removeStyle("STRIKETHROUGH"));
            }
          }),
          (e._toContentBlocks = function (t) {
            for (
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null,
                r = t.length - 1,
                n = 0;
              n <= r;
              n++
            ) {
              var i = t[n];
              (i.parent = e),
                (i.prevSibling = n > 0 ? t[n - 1].key : null),
                (i.nextSibling = n < r ? t[n + 1].key : null),
                (i.children = hu(
                  i.childConfigs.map(function (t) {
                    return t.key;
                  })
                )),
                this.contentBlocks.push(new U(fu({}, i))),
                this._toContentBlocks(i.childConfigs, i.key);
            }
          }),
          (e._toFlatContentBlocks = function (t) {
            for (var e = t.length - 1, r = 0; r <= e; r++) {
              var n = t[r],
                i = this._extractTextFromBlockConfigs(n.childConfigs),
                o = i.text,
                a = i.characterList;
              this.contentBlocks.push(
                new T(
                  fu(
                    fu({}, n),
                    {},
                    {
                      text: n.text + o,
                      characterList: n.characterList.concat(a),
                    }
                  )
                )
              );
            }
          }),
          (e._extractTextFromBlockConfigs = function (t) {
            for (var e = t.length - 1, r = "", n = hu(), i = 0; i <= e; i++) {
              var o = t[i];
              (r += o.text),
                (n = n.concat(o.characterList)),
                "" !== r &&
                  "unstyled" !== o.blockType &&
                  ((r += "\n"), (n = n.push(n.last())));
              var a = this._extractTextFromBlockConfigs(o.childConfigs);
              (r += a.text), (n = n.concat(a.characterList));
            }
            return { text: r, characterList: n };
          }),
          t
        );
      })(),
      Bu = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xa,
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lr,
          n = e(
            (t = t
              .trim()
              .replace(vu, "")
              .replace(_u, " ")
              .replace(wu, "")
              .replace(Su, ""))
          );
        if (!n) return null;
        var i = Tu(r),
          o = function (t, e) {
            return "li" === t
              ? "ol" === e
                ? "ordered-list-item"
                : "unordered-list-item"
              : null;
          };
        return new Lu(i, o).addDOMNode(n).getContentBlocks();
      };
    function Pu(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function ju(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Pu(Object(r), !0).forEach(function (e) {
              Ru(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : Pu(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    function Ru(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    var Nu = function (t) {
        if (!t || !t.type) return !1;
        var e = t.type;
        return "unordered-list-item" === e || "ordered-list-item" === e;
      },
      Fu = {
        fromRawTreeStateToRawState: function (t) {
          var e = t.blocks,
            r = [];
          return (
            Array.isArray(e) || X(!1),
            Array.isArray(e) && e.length
              ? ((function (t, e) {
                  for (var r = [].concat(t).reverse(); r.length; ) {
                    var n = r.pop();
                    e(n);
                    var i = n.children;
                    Array.isArray(i) || X(!1),
                      (r = r.concat([].concat(i.reverse())));
                  }
                })(e, function (t) {
                  var e = ju({}, t);
                  (Nu(t) &&
                    ((e.depth = e.depth || 0),
                    (function (t) {
                      Array.isArray(t.children) &&
                        (t.children = t.children.map(function (e) {
                          return e.type === t.type
                            ? ju(ju({}, e), {}, { depth: (t.depth || 0) + 1 })
                            : e;
                        }));
                    })(t),
                    null != t.children && t.children.length > 0)) ||
                    (delete e.children, r.push(e));
                }),
                (t.blocks = r),
                ju(ju({}, t), {}, { blocks: r }))
              : t
          );
        },
        fromRawStateToRawTreeState: function (t) {
          var e = [],
            r = [];
          return (
            t.blocks.forEach(function (t) {
              var n = Nu(t),
                i = t.depth || 0,
                o = ju(ju({}, t), {}, { children: [] });
              if (n) {
                var a = r[0];
                if (null == a && 0 === i) e.push(o);
                else if (null == a || a.depth < i - 1) {
                  var u = {
                    key: rt(),
                    text: "",
                    depth: i - 1,
                    type: t.type,
                    children: [],
                    entityRanges: [],
                    inlineStyleRanges: [],
                  };
                  r.unshift(u),
                    1 === i ? e.push(u) : null != a && a.children.push(u),
                    u.children.push(o);
                } else if (a.depth === i - 1) a.children.push(o);
                else {
                  for (; null != a && a.depth >= i; ) r.shift(), (a = r[0]);
                  i > 0 ? a.children.push(o) : e.push(o);
                }
              } else e.push(o);
            }),
            ju(ju({}, t), {}, { blocks: e })
          );
        },
      },
      zu = o.List;
    var Uu = function (t, e) {
        var r = t.map(function (t, r) {
          var n = e[r];
          return v.create({ style: t, entity: n });
        });
        return zu(r);
      },
      Hu = Co.substr;
    var qu = function (t, e) {
        var r = Array(t.length).fill(null);
        return (
          e &&
            e.forEach(function (e) {
              for (
                var n = Hu(t, 0, e.offset).length,
                  i = n + Hu(t, e.offset, e.length).length,
                  o = n;
                o < i;
                o++
              )
                r[o] = e.key;
            }),
          r
        );
      },
      Wu = o.OrderedSet,
      Yu = Co.substr,
      $u = Wu();
    var Gu = function (t, e) {
      var r = Array(t.length).fill($u);
      return (
        e &&
          e.forEach(function (e) {
            for (
              var n = Yu(t, 0, e.offset).length,
                i = n + Yu(t, e.offset, e.length).length;
              n < i;

            )
              (r[n] = r[n].add(e.style)), n++;
          }),
        r
      );
    };
    function Vu(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function Xu(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Vu(Object(r), !0).forEach(function (e) {
              Ju(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : Vu(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    function Ju(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    var Zu = st("draft_tree_data_support"),
      Qu = o.List,
      ts = o.Map,
      es = o.OrderedMap,
      rs = function (t, e) {
        var r = t.key,
          n = t.type,
          i = t.data;
        return {
          text: t.text,
          depth: t.depth || 0,
          type: n || "unstyled",
          key: r || rt(),
          data: ts(i),
          characterList: ns(t, e),
        };
      },
      ns = function (t, e) {
        var r = t.text,
          n = t.entityRanges,
          i = t.inlineStyleRanges,
          o = n || [];
        return Uu(
          Gu(r, i || []),
          qu(
            r,
            o
              .filter(function (t) {
                return e.hasOwnProperty(t.key);
              })
              .map(function (t) {
                return Xu(Xu({}, t), {}, { key: e[t.key] });
              })
          )
        );
      },
      is = function (t) {
        return Xu(Xu({}, t), {}, { key: t.key || rt() });
      },
      os = function (t, e, r) {
        var n = e.map(function (t) {
          return Xu(Xu({}, t), {}, { parentRef: r });
        });
        return t.concat(n.reverse());
      },
      as = function (t, e) {
        var r = t.blocks.find(function (t) {
            return Array.isArray(t.children) && t.children.length > 0;
          }),
          n = Zu && !r ? Fu.fromRawStateToRawTreeState(t).blocks : t.blocks;
        if (!Zu)
          return (function (t, e) {
            return es(
              t.map(function (t) {
                var r = new T(rs(t, e));
                return [r.getKey(), r];
              })
            );
          })(r ? Fu.fromRawTreeStateToRawState(t).blocks : n, e);
        var i = (function (t, e) {
          return t.map(is).reduce(function (r, n, i) {
            Array.isArray(n.children) || X(!1);
            var o = n.children.map(is),
              a = new U(
                Xu(
                  Xu({}, rs(n, e)),
                  {},
                  {
                    prevSibling: 0 === i ? null : t[i - 1].key,
                    nextSibling: i === t.length - 1 ? null : t[i + 1].key,
                    children: Qu(
                      o.map(function (t) {
                        return t.key;
                      })
                    ),
                  }
                )
              );
            r = r.set(a.getKey(), a);
            for (var u = os([], o, a); u.length > 0; ) {
              var s = u.pop(),
                c = s.parentRef,
                l = c.getChildKeys(),
                f = l.indexOf(s.key),
                p = Array.isArray(s.children);
              if (!p) {
                p || X(!1);
                break;
              }
              var h = s.children.map(is),
                d = new U(
                  Xu(
                    Xu({}, rs(s, e)),
                    {},
                    {
                      parent: c.getKey(),
                      children: Qu(
                        h.map(function (t) {
                          return t.key;
                        })
                      ),
                      prevSibling: 0 === f ? null : l.get(f - 1),
                      nextSibling: f === l.size - 1 ? null : l.get(f + 1),
                    }
                  )
                );
              (r = r.set(d.getKey(), d)), (u = os(u, h, d));
            }
            return r;
          }, es());
        })(n, e);
        return i;
      },
      us = function (t) {
        Array.isArray(t.blocks) || X(!1);
        var e = (function (t) {
            var e = t.entityMap,
              r = {};
            return (
              Object.keys(e).forEach(function (t) {
                var n = e[t],
                  i = n.type,
                  o = n.mutability,
                  a = n.data;
                r[t] = ee.__create(i, o, a || {});
              }),
              r
            );
          })(t),
          r = as(t, e),
          n = r.isEmpty() ? new ie() : ie.createEmpty(r.first().getKey());
        return new pe({
          blockMap: r,
          entityMap: e,
          selectionBefore: n,
          selectionAfter: n,
        });
      };
    function ss(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function cs(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ss(Object(r), !0).forEach(function (e) {
              ls(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : ss(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    function ls(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    var fs = o.List,
      ps = o.Repeat,
      hs = st("draft_tree_data_support"),
      ds = hs ? U : T,
      gs = st("draft_refactored_html_importer") ? Bu : cu,
      ys = {
        processHTML: function (t, e) {
          var r = xa(t),
            n = r && r.querySelector("[data-editor-content]"),
            i = (n && n.getAttribute("data-editor-content")) || null;
          if (i) {
            var o;
            try {
              o = JSON.parse(i);
            } catch (t) {}
            if (o) {
              var a = us(o);
              return {
                contentBlocks: a.getBlocksAsArray(),
                entityMap: a.getEntityMap(),
              };
            }
          }
          return gs(t, xa, e);
        },
        processText: function (t, e, r) {
          return t.reduce(function (t, n, i) {
            n = ae(n);
            var o = rt(),
              a = {
                key: o,
                type: r,
                text: n,
                characterList: fs(ps(e, n.length)),
              };
            if (hs && 0 !== i) {
              var u = i - 1,
                s = (t[u] = t[u].merge({ nextSibling: o }));
              a = cs(cs({}, a), {}, { prevSibling: s.getKey() });
            }
            return t.push(new ds(a)), t;
          }, []);
        },
      },
      vs = ys;
    var ms = function (t, e, r, n) {
        var i = e.getStartKey(),
          o = e.getEndKey(),
          a = t.getBlockMap(),
          u = a
            .toSeq()
            .skipUntil(function (t, e) {
              return e === i;
            })
            .takeUntil(function (t, e) {
              return e === o;
            })
            .concat([[o, a.get(o)]])
            .map(function (t) {
              var e = t.getDepth() + r;
              return (e = Math.max(0, Math.min(e, n))), t.set("depth", e);
            });
        return (
          (a = a.merge(u)),
          t.merge({ blockMap: a, selectionBefore: e, selectionAfter: e })
        );
      },
      bs = {
        currentBlockContainsLink: function (t) {
          var e = t.getSelection(),
            r = t.getCurrentContent(),
            n = r.getEntityMap();
          return r
            .getBlockForKey(e.getAnchorKey())
            .getCharacterList()
            .slice(e.getStartOffset(), e.getEndOffset())
            .some(function (t) {
              var e = t.getEntity();
              return !!e && "LINK" === n.__get(e).getType();
            });
        },
        getCurrentBlockType: function (t) {
          var e = t.getSelection();
          return t
            .getCurrentContent()
            .getBlockForKey(e.getStartKey())
            .getType();
        },
        getDataObjectForLinkURL: function (t) {
          return { url: t.toString() };
        },
        handleKeyCommand: function (t, e, r) {
          switch (e) {
            case "bold":
              return bs.toggleInlineStyle(t, "BOLD");
            case "italic":
              return bs.toggleInlineStyle(t, "ITALIC");
            case "underline":
              return bs.toggleInlineStyle(t, "UNDERLINE");
            case "code":
              return bs.toggleCode(t);
            case "backspace":
            case "backspace-word":
            case "backspace-to-start-of-line":
              return bs.onBackspace(t);
            case "delete":
            case "delete-word":
            case "delete-to-end-of-block":
              return bs.onDelete(t);
            default:
              return null;
          }
        },
        insertSoftNewline: function (t) {
          var e = Kt.insertText(
              t.getCurrentContent(),
              t.getSelection(),
              "\n",
              t.getCurrentInlineStyle(),
              null
            ),
            r = Ye.push(t, e, "insert-characters");
          return Ye.forceSelection(r, e.getSelectionAfter());
        },
        onBackspace: function (t) {
          var e = t.getSelection();
          if (!e.isCollapsed() || e.getAnchorOffset() || e.getFocusOffset())
            return null;
          var r = t.getCurrentContent(),
            n = e.getStartKey(),
            i = r.getBlockBefore(n);
          if (i && "atomic" === i.getType()) {
            var o = r.getBlockMap().delete(i.getKey()),
              a = r.merge({ blockMap: o, selectionAfter: e });
            if (a !== r) return Ye.push(t, a, "remove-range");
          }
          var u = bs.tryToRemoveBlockStyle(t);
          return u ? Ye.push(t, u, "change-block-type") : null;
        },
        onDelete: function (t) {
          var e = t.getSelection();
          if (!e.isCollapsed()) return null;
          var r = t.getCurrentContent(),
            n = e.getStartKey(),
            i = r.getBlockForKey(n).getLength();
          if (e.getStartOffset() < i) return null;
          var o = r.getBlockAfter(n);
          if (!o || "atomic" !== o.getType()) return null;
          var a = e.merge({ focusKey: o.getKey(), focusOffset: o.getLength() }),
            u = Kt.removeRange(r, a, "forward");
          return u !== r ? Ye.push(t, u, "remove-range") : null;
        },
        onTab: function (t, e, r) {
          var n = e.getSelection(),
            i = n.getAnchorKey();
          if (i !== n.getFocusKey()) return e;
          var o = e.getCurrentContent(),
            a = o.getBlockForKey(i),
            u = a.getType();
          if ("unordered-list-item" !== u && "ordered-list-item" !== u)
            return e;
          t.preventDefault();
          var s = a.getDepth();
          if (!t.shiftKey && s === r) return e;
          var c = ms(o, n, t.shiftKey ? -1 : 1, r);
          return Ye.push(e, c, "adjust-depth");
        },
        toggleBlockType: function (t, e) {
          var r = t.getSelection(),
            n = r.getStartKey(),
            i = r.getEndKey(),
            o = t.getCurrentContent(),
            a = r;
          if (n !== i && 0 === r.getEndOffset()) {
            var u = Ie(o.getBlockBefore(i));
            (i = u.getKey()),
              (a = a.merge({
                anchorKey: n,
                anchorOffset: r.getStartOffset(),
                focusKey: i,
                focusOffset: u.getLength(),
                isBackward: !1,
              }));
          }
          if (
            o
              .getBlockMap()
              .skipWhile(function (t, e) {
                return e !== n;
              })
              .reverse()
              .skipWhile(function (t, e) {
                return e !== i;
              })
              .some(function (t) {
                return "atomic" === t.getType();
              })
          )
            return t;
          var s = o.getBlockForKey(n).getType() === e ? "unstyled" : e;
          return Ye.push(t, Kt.setBlockType(o, a, s), "change-block-type");
        },
        toggleCode: function (t) {
          var e = t.getSelection(),
            r = e.getAnchorKey(),
            n = e.getFocusKey();
          return e.isCollapsed() || r !== n
            ? bs.toggleBlockType(t, "code-block")
            : bs.toggleInlineStyle(t, "CODE");
        },
        toggleInlineStyle: function (t, e) {
          var r = t.getSelection(),
            n = t.getCurrentInlineStyle();
          if (r.isCollapsed())
            return Ye.setInlineStyleOverride(
              t,
              n.has(e) ? n.remove(e) : n.add(e)
            );
          var i,
            o = t.getCurrentContent();
          return (
            (i = n.has(e)
              ? Kt.removeInlineStyle(o, r, e)
              : Kt.applyInlineStyle(o, r, e)),
            Ye.push(t, i, "change-inline-style")
          );
        },
        toggleLink: function (t, e, r) {
          var n = Kt.applyEntity(t.getCurrentContent(), e, r);
          return Ye.push(t, n, "apply-entity");
        },
        tryToRemoveBlockStyle: function (t) {
          var e = t.getSelection(),
            r = e.getAnchorOffset();
          if (e.isCollapsed() && 0 === r) {
            var n = e.getAnchorKey(),
              i = t.getCurrentContent(),
              o = i.getBlockForKey(n).getType(),
              a = i.getBlockBefore(n);
            if (
              "code-block" === o &&
              a &&
              "code-block" === a.getType() &&
              0 !== a.getLength()
            )
              return null;
            if ("unstyled" !== o) return Kt.setBlockType(i, e, "unstyled");
          }
          return null;
        },
      },
      _s = bs,
      ws = /\r\n?|\n/g;
    var Ss = function (t) {
      return t.split(ws);
    };
    function Os(t, e, r) {
      var n = Kt.replaceWithFragment(
        t.getCurrentContent(),
        t.getSelection(),
        e
      );
      return Ye.push(t, n.set("entityMap", r), "insert-fragment");
    }
    var ks = {
      onBeforeInput: yo,
      onBlur: vo,
      onCompositionStart: mo,
      onCopy: Fo,
      onCut: zo,
      onDragOver: Uo,
      onDragStart: Ho,
      onFocus: qo,
      onInput: Xo,
      onKeyDown: Oa,
      onPaste: function (t, e) {
        e.preventDefault();
        var r = new no(e.clipboardData);
        if (!r.isRichText()) {
          var n = r.getFiles(),
            i = r.getText();
          if (n.length > 0) {
            if (t.props.handlePastedFiles && uo(t.props.handlePastedFiles(n)))
              return;
            return void ao(n, function (e) {
              if ((e = e || i)) {
                var r = t._latestEditorState,
                  n = Ss(e),
                  o = v.create({
                    style: r.getCurrentInlineStyle(),
                    entity: cn(r.getCurrentContent(), r.getSelection()),
                  }),
                  a = _s.getCurrentBlockType(r),
                  s = vs.processText(n, o, a),
                  c = u.createFromArray(s),
                  l = Kt.replaceWithFragment(
                    r.getCurrentContent(),
                    r.getSelection(),
                    c
                  );
                t.update(Ye.push(r, l, "insert-fragment"));
              }
            });
          }
        }
        var o = [],
          a = r.getText(),
          s = r.getHTML(),
          c = t._latestEditorState;
        if (
          !t.props.handlePastedText ||
          !uo(t.props.handlePastedText(a, s, c))
        ) {
          if ((a && (o = Ss(a)), !t.props.stripPastedStyles)) {
            var l = t.getClipboard();
            if (r.isRichText() && l) {
              if (
                -1 !== s.indexOf(t.getEditorKey()) ||
                (1 === o.length && 1 === l.size && l.first().getText() === a)
              )
                return void t.update(Os(t._latestEditorState, l));
            } else if (
              l &&
              r.types.includes("com.apple.webarchive") &&
              !r.types.includes("text/html") &&
              (function (t, e) {
                return (
                  t.length === e.size &&
                  e.valueSeq().every(function (e, r) {
                    return e.getText() === t[r];
                  })
                );
              })(o, l)
            )
              return void t.update(Os(t._latestEditorState, l));
            if (s) {
              var f = vs.processHTML(s, t.props.blockRenderMap);
              if (f) {
                var p = f.contentBlocks,
                  h = f.entityMap;
                if (p) {
                  var d = u.createFromArray(p);
                  return void t.update(Os(t._latestEditorState, d, h));
                }
              }
            }
            t.setClipboard(null);
          }
          if (o.length) {
            var g = v.create({
                style: c.getCurrentInlineStyle(),
                entity: cn(c.getCurrentContent(), c.getSelection()),
              }),
              y = _s.getCurrentBlockType(c),
              m = vs.processText(o, g, y),
              b = u.createFromArray(m);
            t.update(Os(t._latestEditorState, b));
          }
        }
      },
      onSelect: mn,
    };
    function Es(t, e) {
      return (
        (Es = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            }),
        Es(t, e)
      );
    }
    var Cs = (function (t) {
        var e, n;
        function i() {
          return t.apply(this, arguments) || this;
        }
        (n = t),
          ((e = i).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          Es(e, n);
        var o = i.prototype;
        return (
          (o.shouldComponentUpdate = function (t) {
            return (
              this.props.text !== t.text ||
              this.props.editorState.getSelection().getHasFocus() !==
                t.editorState.getSelection().getHasFocus()
            );
          }),
          (o.render = function () {
            var t = this.props.editorState.getSelection().getHasFocus(),
              e = cr({
                "public/DraftEditorPlaceholder/root": !0,
                "public/DraftEditorPlaceholder/hasFocus": t,
              });
            return r._.createElement(
              "div",
              { className: e },
              r._.createElement(
                "div",
                {
                  className: cr("public/DraftEditorPlaceholder/inner"),
                  id: this.props.accessibilityID,
                  style: { whiteSpace: "pre-wrap" },
                },
                this.props.text
              )
            );
          }),
          i
        );
      })(r._.Component),
      xs = Cs,
      Ds = Qr.isPlatform("Mac OS X"),
      Ts = Ds && Qr.isBrowser("Firefox < 29"),
      Ms = Qo.hasCommandModifier,
      Is = Qo.isCtrlKeyCommand;
    function Ks(t) {
      return (Ds && t.altKey) || Is(t);
    }
    var As = function (t) {
      switch (t.keyCode) {
        case 66:
          return Ms(t) ? "bold" : null;
        case 68:
          return Is(t) ? "delete" : null;
        case 72:
          return Is(t) ? "backspace" : null;
        case 73:
          return Ms(t) ? "italic" : null;
        case 74:
          return Ms(t) ? "code" : null;
        case 75:
          return Ds && Is(t) ? "secondary-cut" : null;
        case 77:
        case 79:
          return Is(t) ? "split-block" : null;
        case 84:
          return Ds && Is(t) ? "transpose-characters" : null;
        case 85:
          return Ms(t) ? "underline" : null;
        case 87:
          return Ds && Is(t) ? "backspace-word" : null;
        case 89:
          return Is(t) ? (Ds ? "secondary-paste" : "redo") : null;
        case 90:
          return (
            (function (t) {
              return Ms(t) ? (t.shiftKey ? "redo" : "undo") : null;
            })(t) || null
          );
        case dr:
          return "split-block";
        case wr:
          return (function (t) {
            return !Ds && t.shiftKey ? null : Ks(t) ? "delete-word" : "delete";
          })(t);
        case pr:
          return (function (t) {
            return Ms(t) && Ds
              ? "backspace-to-start-of-line"
              : Ks(t)
              ? "backspace-word"
              : "backspace";
          })(t);
        case vr:
          return Ts && Ms(t) ? "move-selection-to-start-of-block" : null;
        case br:
          return Ts && Ms(t) ? "move-selection-to-end-of-block" : null;
        default:
          return null;
      }
    };
    function Ls(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function Bs(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Ls(Object(r), !0).forEach(function (e) {
              js(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : Ls(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    function Ps(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function js(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function Rs(t, e) {
      (t.prototype = Object.create(e.prototype)),
        (t.prototype.constructor = t),
        Ns(t, e);
    }
    function Ns(t, e) {
      return (
        (Ns = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            }),
        Ns(t, e)
      );
    }
    var Fs = Qr.isBrowser("IE"),
      zs = !Fs,
      Us = { edit: ks, composite: On, drag: lo, cut: null, render: null },
      Hs = !1,
      qs = (function (t) {
        function e() {
          return t.apply(this, arguments) || this;
        }
        Rs(e, t);
        var r = e.prototype;
        return (
          (r.render = function () {
            return null;
          }),
          (r.componentDidMount = function () {
            this._update();
          }),
          (r.componentDidUpdate = function () {
            this._update();
          }),
          (r._update = function () {
            var t = this.props.editor;
            (t._latestEditorState = this.props.editorState),
              (t._blockSelectEvents = !0);
          }),
          e
        );
      })(r._.Component),
      Ws = (function (t) {
        function e(e) {
          var r;
          return (
            js(Ps((r = t.call(this, e) || this)), "_blockSelectEvents", void 0),
            js(Ps(r), "_clipboard", void 0),
            js(Ps(r), "_handler", void 0),
            js(Ps(r), "_dragCount", void 0),
            js(Ps(r), "_internalDrag", void 0),
            js(Ps(r), "_editorKey", void 0),
            js(Ps(r), "_placeholderAccessibilityID", void 0),
            js(Ps(r), "_latestEditorState", void 0),
            js(Ps(r), "_latestCommittedEditorState", void 0),
            js(Ps(r), "_pendingStateFromBeforeInput", void 0),
            js(Ps(r), "_onBeforeInput", void 0),
            js(Ps(r), "_onBlur", void 0),
            js(Ps(r), "_onCharacterData", void 0),
            js(Ps(r), "_onCompositionEnd", void 0),
            js(Ps(r), "_onCompositionStart", void 0),
            js(Ps(r), "_onCopy", void 0),
            js(Ps(r), "_onCut", void 0),
            js(Ps(r), "_onDragEnd", void 0),
            js(Ps(r), "_onDragOver", void 0),
            js(Ps(r), "_onDragStart", void 0),
            js(Ps(r), "_onDrop", void 0),
            js(Ps(r), "_onInput", void 0),
            js(Ps(r), "_onFocus", void 0),
            js(Ps(r), "_onKeyDown", void 0),
            js(Ps(r), "_onKeyPress", void 0),
            js(Ps(r), "_onKeyUp", void 0),
            js(Ps(r), "_onMouseDown", void 0),
            js(Ps(r), "_onMouseUp", void 0),
            js(Ps(r), "_onPaste", void 0),
            js(Ps(r), "_onSelect", void 0),
            js(Ps(r), "editor", void 0),
            js(Ps(r), "editorContainer", void 0),
            js(Ps(r), "focus", void 0),
            js(Ps(r), "blur", void 0),
            js(Ps(r), "setMode", void 0),
            js(Ps(r), "exitCurrentMode", void 0),
            js(Ps(r), "restoreEditorDOM", void 0),
            js(Ps(r), "setClipboard", void 0),
            js(Ps(r), "getClipboard", void 0),
            js(Ps(r), "getEditorKey", void 0),
            js(Ps(r), "update", void 0),
            js(Ps(r), "onDragEnter", void 0),
            js(Ps(r), "onDragLeave", void 0),
            js(Ps(r), "focus", function (t) {
              var e = r.props.editorState,
                i = e.getSelection().getHasFocus(),
                o = n._.findDOMNode(r.editor);
              if (o) {
                var a = si.getScrollParent(o),
                  u = t || di(a),
                  s = u.x,
                  c = u.y;
                o instanceof HTMLElement || X(!1),
                  o.focus(),
                  a === window ? window.scrollTo(s, c) : Qn.setTop(a, c),
                  i || r.update(Ye.forceSelection(e, e.getSelection()));
              }
            }),
            js(Ps(r), "blur", function () {
              var t = n._.findDOMNode(r.editor);
              t instanceof HTMLElement || X(!1), t.blur();
            }),
            js(Ps(r), "setMode", function (t) {
              r._handler = Us[t];
            }),
            js(Ps(r), "exitCurrentMode", function () {
              r.setMode("edit");
            }),
            js(Ps(r), "restoreEditorDOM", function (t) {
              r.setState({ contentsKey: r.state.contentsKey + 1 }, function () {
                r.focus(t);
              });
            }),
            js(Ps(r), "setClipboard", function (t) {
              r._clipboard = t;
            }),
            js(Ps(r), "getClipboard", function () {
              return r._clipboard;
            }),
            js(Ps(r), "update", function (t) {
              (r._latestEditorState = t), r.props.onChange(t);
            }),
            js(Ps(r), "onDragEnter", function () {
              r._dragCount++;
            }),
            js(Ps(r), "onDragLeave", function () {
              r._dragCount--, 0 === r._dragCount && r.exitCurrentMode();
            }),
            (r._blockSelectEvents = !1),
            (r._clipboard = null),
            (r._handler = null),
            (r._dragCount = 0),
            (r._editorKey = e.editorKey || rt()),
            (r._placeholderAccessibilityID = "placeholder-" + r._editorKey),
            (r._latestEditorState = e.editorState),
            (r._latestCommittedEditorState = e.editorState),
            (r._onBeforeInput = r._buildHandler("onBeforeInput")),
            (r._onBlur = r._buildHandler("onBlur")),
            (r._onCharacterData = r._buildHandler("onCharacterData")),
            (r._onCompositionEnd = r._buildHandler("onCompositionEnd")),
            (r._onCompositionStart = r._buildHandler("onCompositionStart")),
            (r._onCopy = r._buildHandler("onCopy")),
            (r._onCut = r._buildHandler("onCut")),
            (r._onDragEnd = r._buildHandler("onDragEnd")),
            (r._onDragOver = r._buildHandler("onDragOver")),
            (r._onDragStart = r._buildHandler("onDragStart")),
            (r._onDrop = r._buildHandler("onDrop")),
            (r._onInput = r._buildHandler("onInput")),
            (r._onFocus = r._buildHandler("onFocus")),
            (r._onKeyDown = r._buildHandler("onKeyDown")),
            (r._onKeyPress = r._buildHandler("onKeyPress")),
            (r._onKeyUp = r._buildHandler("onKeyUp")),
            (r._onMouseDown = r._buildHandler("onMouseDown")),
            (r._onMouseUp = r._buildHandler("onMouseUp")),
            (r._onPaste = r._buildHandler("onPaste")),
            (r._onSelect = r._buildHandler("onSelect")),
            (r.getEditorKey = function () {
              return r._editorKey;
            }),
            (r.state = { contentsKey: 0 }),
            r
          );
        }
        Rs(e, t);
        var i = e.prototype;
        return (
          (i._buildHandler = function (t) {
            var e = this,
              r = n._.unstable_flushControlled;
            return function (n) {
              if (!e.props.readOnly) {
                var i = e._handler && e._handler[t];
                i &&
                  (r
                    ? r(function () {
                        return i(e, n);
                      })
                    : i(e, n));
              }
            };
          }),
          (i._showPlaceholder = function () {
            return (
              !!this.props.placeholder &&
              !this.props.editorState.isInCompositionMode() &&
              !this.props.editorState.getCurrentContent().hasText()
            );
          }),
          (i._renderPlaceholder = function () {
            if (this._showPlaceholder()) {
              var t = {
                text: Ie(this.props.placeholder),
                editorState: this.props.editorState,
                textAlignment: this.props.textAlignment,
                accessibilityID: this._placeholderAccessibilityID,
              };
              return r._.createElement(xs, t);
            }
            return null;
          }),
          (i.render = function () {
            var t = this,
              e = this.props,
              n = e.blockRenderMap,
              i = e.blockRendererFn,
              o = e.blockStyleFn,
              a = e.customStyleFn,
              u = e.customStyleMap,
              s = e.editorState,
              c = e.readOnly,
              l = e.textAlignment,
              f = e.textDirectionality,
              p = cr({
                "DraftEditor/root": !0,
                "DraftEditor/alignLeft": "left" === l,
                "DraftEditor/alignRight": "right" === l,
                "DraftEditor/alignCenter": "center" === l,
              }),
              h = this.props.role || "textbox",
              d = "combobox" === h ? !!this.props.ariaExpanded : null,
              g = {
                blockRenderMap: n,
                blockRendererFn: i,
                blockStyleFn: o,
                customStyleMap: Bs(Bs({}, fr), u),
                customStyleFn: a,
                editorKey: this._editorKey,
                editorState: s,
                key: "contents" + this.state.contentsKey,
                textDirectionality: f,
              };
            return r._.createElement(
              "div",
              { className: p },
              this._renderPlaceholder(),
              r._.createElement(
                "div",
                {
                  className: cr("DraftEditor/editorContainer"),
                  ref: function (e) {
                    return (t.editorContainer = e);
                  },
                },
                r._.createElement(
                  "div",
                  {
                    "aria-activedescendant": c
                      ? null
                      : this.props.ariaActiveDescendantID,
                    "aria-autocomplete": c ? null : this.props.ariaAutoComplete,
                    "aria-controls": c ? null : this.props.ariaControls,
                    "aria-describedby":
                      this.props.ariaDescribedBy ||
                      this._placeholderAccessibilityID,
                    "aria-expanded": c ? null : d,
                    "aria-label": this.props.ariaLabel,
                    "aria-labelledby": this.props.ariaLabelledBy,
                    "aria-multiline": this.props.ariaMultiline,
                    "aria-owns": c ? null : this.props.ariaOwneeID,
                    autoCapitalize: this.props.autoCapitalize,
                    autoComplete: this.props.autoComplete,
                    autoCorrect: this.props.autoCorrect,
                    className: cr({
                      notranslate: !c,
                      "public/DraftEditor/content": !0,
                    }),
                    contentEditable: !c,
                    "data-testid": this.props.webDriverTestID,
                    onBeforeInput: this._onBeforeInput,
                    onBlur: this._onBlur,
                    onCompositionEnd: this._onCompositionEnd,
                    onCompositionStart: this._onCompositionStart,
                    onCopy: this._onCopy,
                    onCut: this._onCut,
                    onDragEnd: this._onDragEnd,
                    onDragEnter: this.onDragEnter,
                    onDragLeave: this.onDragLeave,
                    onDragOver: this._onDragOver,
                    onDragStart: this._onDragStart,
                    onDrop: this._onDrop,
                    onFocus: this._onFocus,
                    onInput: this._onInput,
                    onKeyDown: this._onKeyDown,
                    onKeyPress: this._onKeyPress,
                    onKeyUp: this._onKeyUp,
                    onMouseUp: this._onMouseUp,
                    onPaste: this._onPaste,
                    onSelect: this._onSelect,
                    ref: function (e) {
                      return (t.editor = e);
                    },
                    role: c ? null : h,
                    spellCheck: zs && this.props.spellCheck,
                    style: {
                      outline: "none",
                      userSelect: "text",
                      WebkitUserSelect: "text",
                      whiteSpace: "pre-wrap",
                      wordWrap: "break-word",
                    },
                    suppressContentEditableWarning: !0,
                    tabIndex: this.props.tabIndex,
                  },
                  r._.createElement(qs, { editor: this, editorState: s }),
                  r._.createElement(Vi, g)
                )
              )
            );
          }),
          (i.componentDidMount = function () {
            (this._blockSelectEvents = !1),
              !Hs && st("draft_ods_enabled") && (Hs = !0),
              this.setMode("edit"),
              Fs && document.execCommand("AutoUrlDetect", !1, !1);
          }),
          (i.componentDidUpdate = function () {
            (this._blockSelectEvents = !1),
              (this._latestEditorState = this.props.editorState),
              (this._latestCommittedEditorState = this.props.editorState);
          }),
          e
        );
      })(r._.Component);
    js(Ws, "defaultProps", {
      blockRenderMap: lr,
      blockRendererFn: Bt.thatReturnsNull,
      blockStyleFn: Bt.thatReturns(""),
      keyBindingFn: As,
      readOnly: !1,
      spellCheck: !1,
      stripPastedStyles: !1,
    });
    var Ys = Ws,
      $s = Object.freeze({ __proto__: null });
    var Gs = function (t) {
      var e = ra(t),
        r = 0,
        n = 0,
        i = 0,
        o = 0;
      if (e.length) {
        if (e.length > 1 && 0 === e[0].width) {
          var a = e[1];
          (r = a.top), (n = a.right), (i = a.bottom), (o = a.left);
        } else {
          var u = e[0];
          (r = u.top), (n = u.right), (i = u.bottom), (o = u.left);
        }
        for (var s = 1; s < e.length; s++) {
          var c = e[s];
          0 !== c.height &&
            0 !== c.width &&
            ((r = Math.min(r, c.top)),
            (n = Math.max(n, c.right)),
            (i = Math.max(i, c.bottom)),
            (o = Math.min(o, c.left)));
        }
      }
      return {
        top: r,
        right: n,
        bottom: i,
        left: o,
        width: n - o,
        height: i - r,
      };
    };
    var Vs = function (t) {
        var e = t.getSelection();
        if (!e.rangeCount) return null;
        var r = e.getRangeAt(0),
          n = Gs(r),
          i = n.top,
          o = n.right,
          a = n.bottom,
          u = n.left;
        return 0 === i && 0 === o && 0 === a && 0 === u ? null : n;
      },
      Xs = e.b($s),
      Js = st("draft_refactored_html_importer") ? Bu : cu,
      Zs = {
        Editor: Ys,
        EditorBlock: Fi,
        EditorState: Ye,
        CompositeDecorator: ur,
        Entity: ee,
        EntityInstance: $t,
        BlockMapBuilder: u,
        CharacterMetadata: v,
        ContentBlock: T,
        ContentState: pe,
        RawDraftContentState: Xs,
        SelectionState: ie,
        AtomicBlockUtils: or,
        KeyBindingUtil: Qo,
        Modifier: Kt,
        RichUtils: _s,
        DefaultDraftBlockRenderMap: lr,
        DefaultDraftInlineStyle: fr,
        convertFromHTML: Js,
        convertFromRaw: us,
        convertToRaw: Ro,
        genKey: rt,
        getDefaultKeyBinding: As,
        getVisibleSelectionRect: Vs,
      },
      Qs = e.c(function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            },
          n = function (t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t))
              return (function (t, e) {
                var r = [],
                  n = !0,
                  i = !1,
                  o = void 0;
                try {
                  for (
                    var a, u = t[Symbol.iterator]();
                    !(n = (a = u.next()).done) &&
                    (r.push(a.value), !e || r.length !== e);
                    n = !0
                  );
                } catch (t) {
                  (i = !0), (o = t);
                } finally {
                  try {
                    !n && u.return && u.return();
                  } finally {
                    if (i) throw o;
                  }
                }
                return r;
              })(t, e);
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          };
        e.default = function (t, e) {
          if (null == t) return e;
          var i = n(e, 2),
            o = i[0],
            a = i[1],
            u = r({}, o),
            s = [].concat(
              (function (t) {
                if (Array.isArray(t)) {
                  for (var e = 0, r = Array(t.length); e < t.length; e++)
                    r[e] = t[e];
                  return r;
                }
                return Array.from(t);
              })(a)
            ),
            c = !0,
            l = !1,
            f = void 0;
          try {
            for (
              var p, h = Object.keys(t)[Symbol.iterator]();
              !(c = (p = h.next()).done);
              c = !0
            ) {
              var d = p.value;
              if (o.hasOwnProperty(d)) {
                var g = o[d];
                u[d] = r({}, g, t[d]);
              } else (u[d] = t[d]), s.push(d);
            }
          } catch (t) {
            (l = !0), (f = t);
          } finally {
            try {
              !c && h.return && h.return();
            } finally {
              if (l) throw f;
            }
          }
          return [u, s];
        };
      }),
      tc = e.c(function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = {
          acceptCharset: "accept-charset",
          className: "class",
          htmlFor: "for",
          httpEquiv: "http-equiv",
        };
        e.default = function (t) {
          if (null == t) return t;
          var e = {},
            n = !1,
            i = !0,
            o = !1,
            a = void 0;
          try {
            for (
              var u, s = Object.keys(t)[Symbol.iterator]();
              !(i = (u = s.next()).done);
              i = !0
            ) {
              var c = u.value,
                l = c;
              r.hasOwnProperty(c) && ((l = r[c]), (n = !0)), (e[l] = t[c]);
            }
          } catch (t) {
            (o = !0), (a = t);
          } finally {
            try {
              !i && s.return && s.return();
            } finally {
              if (o) throw a;
            }
          }
          return n ? e : t;
        };
      }),
      ec = e.c(function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = /^(moz|ms|o|webkit)-/,
          n = /^\d+$/,
          i = /([A-Z])/g,
          o = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          };
        e.default = function (t) {
          return Object.keys(t)
            .map(function (e) {
              var a = (function (t, e) {
                  var r = void 0;
                  return (
                    "string" == typeof e
                      ? (r = n.test(e))
                      : ((r = !0), (e = String(e))),
                    r && "0" !== e && !0 !== o[t] ? e + "px" : e
                  );
                })(e, t[e]),
                u = (function (t) {
                  return t.replace(i, "-$1").toLowerCase().replace(r, "-$1-");
                })(e);
              return u + ": " + a;
            })
            .join("; ");
        };
      }),
      rc = e.c(function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = (e.BLOCK_TYPE = {
            UNSTYLED: "unstyled",
            HEADER_ONE: "header-one",
            HEADER_TWO: "header-two",
            HEADER_THREE: "header-three",
            HEADER_FOUR: "header-four",
            HEADER_FIVE: "header-five",
            HEADER_SIX: "header-six",
            UNORDERED_LIST_ITEM: "unordered-list-item",
            ORDERED_LIST_ITEM: "ordered-list-item",
            BLOCKQUOTE: "blockquote",
            PULLQUOTE: "pullquote",
            CODE: "code-block",
            ATOMIC: "atomic",
          }),
          n = (e.ENTITY_TYPE = { LINK: "LINK", IMAGE: "IMAGE" }),
          i = (e.INLINE_STYLE = {
            BOLD: "BOLD",
            CODE: "CODE",
            ITALIC: "ITALIC",
            STRIKETHROUGH: "STRIKETHROUGH",
            UNDERLINE: "UNDERLINE",
          });
        e.default = { BLOCK_TYPE: r, ENTITY_TYPE: n, INLINE_STYLE: i };
      }),
      nc = e.c(function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.EMPTY_SET = void 0),
          (e.default = function (t, e) {
            for (
              var r = null, i = null, o = [], a = 0, u = 0, s = t.length;
              u < s;
              u++
            ) {
              i = r;
              var c = e.get(u);
              (r = c ? c.getEntity() : null),
                u > 0 &&
                  r !== i &&
                  (o.push([i, n(t.slice(a, u), e.slice(a, u))]), (a = u));
            }
            return o.push([r, n(t.slice(a), e.slice(a))]), o;
          });
        var r = (e.EMPTY_SET = new o.OrderedSet());
        function n(t, e) {
          for (
            var n = r, i = r, a = [], u = 0, s = 0, c = t.length;
            s < c;
            s++
          ) {
            i = n;
            var l = e.get(s);
            (n = l ? l.getStyle() : r),
              s > 0 &&
                !(0, o.is)(n, i) &&
                (a.push([t.slice(u, s), i]), (u = s));
          }
          return a.push([t.slice(u), n]), a;
        }
      }),
      ic = e.c(function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = function (t, e, r) {
            var n = e === r,
              i = t.getBlockForKey(e);
            if (!i) return [];
            var o = [i];
            if (!n)
              for (var a = e; a !== r; ) {
                var u = t.getBlockAfter(a);
                if (!u) {
                  o = [];
                  break;
                }
                o.push(u), (a = u.getKey());
              }
            return o;
          });
      }),
      oc = e.c(function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r,
          n = (r = ic) && r.__esModule ? r : { default: r };
        e.default = function (t) {
          return function (e, r) {
            var i = e.getCurrentContent(),
              o = r || e.getSelection(),
              a = o.getStartKey(),
              u = o.getEndKey(),
              s = o.getStartOffset(),
              c = o.getEndOffset(),
              l = a === u,
              f = (0, n.default)(i, a, u),
              p = !1,
              h = s + 1,
              d = c - 1;
            return (
              f.forEach(function (e) {
                t(
                  e,
                  function (t, r) {
                    if (!p) {
                      var n = e.getKey();
                      (l && (r < h || t > d)) ||
                        (n === a && r < h) ||
                        (n === u && t > d) ||
                        (p = !0);
                    }
                  },
                  i
                );
              }),
              p
            );
          };
        };
      }),
      ac = e.c(function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r,
          n = (r = ic) && r.__esModule ? r : { default: r };
        e.default = function (t, e) {
          for (
            var r = arguments.length, i = Array(r > 2 ? r - 2 : 0), o = 2;
            o < r;
            o++
          )
            i[o - 2] = arguments[o];
          var a = t.getCurrentContent(),
            u = t.getSelection(),
            s = u.getStartKey(),
            c = u.getEndKey(),
            l = u.getStartOffset(),
            f = u.getEndOffset(),
            p = s === c,
            h = (0, n.default)(a, s, c),
            d = t;
          return (
            h.forEach(function (t) {
              var r = t.getKey(),
                n = l,
                o = f;
              r === s
                ? ((n = l), (o = p ? f : t.getText().length))
                : r === c
                ? ((n = p ? l : 0), (o = f))
                : ((n = 0), (o = t.getText().length));
              var a = new Zs.SelectionState({
                anchorKey: r,
                anchorOffset: n,
                focusKey: r,
                focusOffset: o,
              });
              d = e.apply(void 0, [d, a].concat(i));
            }),
            Zs.EditorState.forceSelection(d, u)
          );
        };
      }),
      uc = e.c(function (t, e) {
        function r(t) {
          return t && t.__esModule ? t : { default: t };
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.keys(rc).forEach(function (t) {
            "default" !== t &&
              "__esModule" !== t &&
              Object.defineProperty(e, t, {
                enumerable: !0,
                get: function () {
                  return rc[t];
                },
              });
          }),
          Object.defineProperty(e, "Constants", {
            enumerable: !0,
            get: function () {
              return r(rc).default;
            },
          }),
          Object.defineProperty(e, "getEntityRanges", {
            enumerable: !0,
            get: function () {
              return r(nc).default;
            },
          }),
          Object.defineProperty(e, "getSelectedBlocks", {
            enumerable: !0,
            get: function () {
              return r(ic).default;
            },
          }),
          Object.defineProperty(e, "selectionContainsEntity", {
            enumerable: !0,
            get: function () {
              return r(oc).default;
            },
          }),
          Object.defineProperty(e, "callModifierForSelectedBlocks", {
            enumerable: !0,
            get: function () {
              return r(ac).default;
            },
          });
      }),
      sc = e.c(function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r,
          n,
          i,
          o =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            },
          a = function (t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t))
              return (function (t, e) {
                var r = [],
                  n = !0,
                  i = !1,
                  o = void 0;
                try {
                  for (
                    var a, u = t[Symbol.iterator]();
                    !(n = (a = u.next()).done) &&
                    (r.push(a.value), !e || r.length !== e);
                    n = !0
                  );
                } catch (t) {
                  (i = !0), (o = t);
                } finally {
                  try {
                    !n && u.return && u.return();
                  } finally {
                    if (i) throw o;
                  }
                }
                return r;
              })(t, e);
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          },
          u = (function () {
            function t(t, e) {
              for (var r = 0; r < e.length; r++) {
                var n = e[r];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(t, n.key, n);
              }
            }
            return function (e, r, n) {
              return r && t(e.prototype, r), n && t(e, n), e;
            };
          })();
        e.default = function (t, e) {
          return new E(t, e).generate();
        };
        var s = f(Qs),
          c = f(tc),
          l = f(ec);
        function f(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function p(t, e, r) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        var h = uc.INLINE_STYLE.BOLD,
          d = uc.INLINE_STYLE.CODE,
          g = uc.INLINE_STYLE.ITALIC,
          y = uc.INLINE_STYLE.STRIKETHROUGH,
          v = uc.INLINE_STYLE.UNDERLINE,
          m = "<br>",
          b = /^data-([a-z0-9-]+)$/,
          _ =
            (p((r = {}), h, { element: "strong" }),
            p(r, d, { element: "code" }),
            p(r, g, { element: "em" }),
            p(r, y, { element: "del" }),
            p(r, v, { element: "u" }),
            r),
          w = [h, g, v, y, d],
          S =
            (p((n = {}), uc.ENTITY_TYPE.LINK, {
              url: "href",
              href: "href",
              rel: "rel",
              target: "target",
              title: "title",
              className: "class",
            }),
            p(n, uc.ENTITY_TYPE.IMAGE, {
              src: "src",
              height: "height",
              width: "width",
              alt: "alt",
              className: "class",
            }),
            n),
          O =
            (p((i = {}), uc.ENTITY_TYPE.LINK, function (t, e) {
              var r = S.hasOwnProperty(t) ? S[t] : {},
                n = e.getData(),
                i = {},
                o = !0,
                a = !1,
                u = void 0;
              try {
                for (
                  var s, c = Object.keys(n)[Symbol.iterator]();
                  !(o = (s = c.next()).done);
                  o = !0
                ) {
                  var l = s.value,
                    f = n[l];
                  if (r.hasOwnProperty(l)) i[r[l]] = f;
                  else b.test(l) && (i[l] = f);
                }
              } catch (t) {
                (a = !0), (u = t);
              } finally {
                try {
                  !o && c.return && c.return();
                } finally {
                  if (a) throw u;
                }
              }
              return i;
            }),
            p(i, uc.ENTITY_TYPE.IMAGE, function (t, e) {
              var r = S.hasOwnProperty(t) ? S[t] : {},
                n = e.getData(),
                i = {},
                o = !0,
                a = !1,
                u = void 0;
              try {
                for (
                  var s, c = Object.keys(n)[Symbol.iterator]();
                  !(o = (s = c.next()).done);
                  o = !0
                ) {
                  var l = s.value,
                    f = n[l];
                  if (r.hasOwnProperty(l)) i[r[l]] = f;
                  else b.test(l) && (i[l] = f);
                }
              } catch (t) {
                (a = !0), (u = t);
              } finally {
                try {
                  !o && c.return && c.return();
                } finally {
                  if (a) throw u;
                }
              }
              return i;
            }),
            i);
        function k(t, e) {
          switch (t) {
            case uc.BLOCK_TYPE.HEADER_ONE:
              return ["h1"];
            case uc.BLOCK_TYPE.HEADER_TWO:
              return ["h2"];
            case uc.BLOCK_TYPE.HEADER_THREE:
              return ["h3"];
            case uc.BLOCK_TYPE.HEADER_FOUR:
              return ["h4"];
            case uc.BLOCK_TYPE.HEADER_FIVE:
              return ["h5"];
            case uc.BLOCK_TYPE.HEADER_SIX:
              return ["h6"];
            case uc.BLOCK_TYPE.UNORDERED_LIST_ITEM:
            case uc.BLOCK_TYPE.ORDERED_LIST_ITEM:
              return ["li"];
            case uc.BLOCK_TYPE.BLOCKQUOTE:
              return ["blockquote"];
            case uc.BLOCK_TYPE.CODE:
              return ["pre", "code"];
            case uc.BLOCK_TYPE.ATOMIC:
              return ["figure"];
            default:
              return null === e ? [] : [e || "p"];
          }
        }
        var E = (function () {
          function t(e, r) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              null == r && (r = {}),
              (this.contentState = e),
              (this.options = r);
            var n = (0, s.default)(r.inlineStyles, [_, w]),
              i = a(n, 2),
              o = i[0],
              u = i[1];
            (this.inlineStyles = o),
              (this.inlineStyleFn = r.inlineStyleFn),
              (this.styleOrder = u);
          }
          return (
            u(t, [
              {
                key: "generate",
                value: function () {
                  for (
                    this.output = [],
                      this.blocks = this.contentState.getBlocksAsArray(),
                      this.totalBlocks = this.blocks.length,
                      this.currentBlock = 0,
                      this.indentLevel = 0,
                      this.wrapperTag = null;
                    this.currentBlock < this.totalBlocks;

                  )
                    this.processBlock();
                  return this.closeWrapperTag(), this.output.join("").trim();
                },
              },
              {
                key: "processBlock",
                value: function () {
                  var t = this.options,
                    e = t.blockRenderers,
                    r = t.defaultBlockTag,
                    n = this.blocks[this.currentBlock],
                    i = n.getType(),
                    o = (function (t) {
                      switch (t) {
                        case uc.BLOCK_TYPE.UNORDERED_LIST_ITEM:
                          return "ul";
                        case uc.BLOCK_TYPE.ORDERED_LIST_ITEM:
                          return "ol";
                        default:
                          return null;
                      }
                    })(i);
                  this.wrapperTag !== o &&
                    (this.wrapperTag && this.closeWrapperTag(),
                    o && this.openWrapperTag(o)),
                    this.indent();
                  var a = null != e && e.hasOwnProperty(i) ? e[i] : null,
                    u = a ? a(n) : null;
                  if (null != u)
                    return (
                      this.output.push(u),
                      this.output.push("\n"),
                      void (this.currentBlock += 1)
                    );
                  this.writeStartTag(n, r),
                    this.output.push(this.renderBlockContent(n));
                  var s = this.getNextBlock();
                  if (
                    (function (t) {
                      switch (t) {
                        case uc.BLOCK_TYPE.UNORDERED_LIST_ITEM:
                        case uc.BLOCK_TYPE.ORDERED_LIST_ITEM:
                          return !0;
                        default:
                          return !1;
                      }
                    })(i) &&
                    s &&
                    s.getDepth() === n.getDepth() + 1
                  ) {
                    this.output.push("\n");
                    var c = this.wrapperTag;
                    (this.wrapperTag = null),
                      (this.indentLevel += 1),
                      (this.currentBlock += 1),
                      this.processBlocksAtDepth(s.getDepth()),
                      (this.wrapperTag = c),
                      (this.indentLevel -= 1),
                      this.indent();
                  } else this.currentBlock += 1;
                  this.writeEndTag(n, r);
                },
              },
              {
                key: "processBlocksAtDepth",
                value: function (t) {
                  for (
                    var e = this.blocks[this.currentBlock];
                    e && e.getDepth() === t;

                  )
                    this.processBlock(), (e = this.blocks[this.currentBlock]);
                  this.closeWrapperTag();
                },
              },
              {
                key: "getNextBlock",
                value: function () {
                  return this.blocks[this.currentBlock + 1];
                },
              },
              {
                key: "writeStartTag",
                value: function (t, e) {
                  var r = k(t.getType(), e),
                    n = void 0;
                  if (this.options.blockStyleFn) {
                    var i = this.options.blockStyleFn(t) || {},
                      a = i.attributes,
                      u = i.style;
                    if (((a = (0, c.default)(a)), null != u)) {
                      var s = (0, l.default)(u);
                      a = null == a ? { style: s } : o({}, a, { style: s });
                    }
                    n = C(a);
                  } else n = "";
                  var f = !0,
                    p = !1,
                    h = void 0;
                  try {
                    for (
                      var d, g = r[Symbol.iterator]();
                      !(f = (d = g.next()).done);
                      f = !0
                    ) {
                      var y = d.value;
                      this.output.push("<" + y + n + ">");
                    }
                  } catch (t) {
                    (p = !0), (h = t);
                  } finally {
                    try {
                      !f && g.return && g.return();
                    } finally {
                      if (p) throw h;
                    }
                  }
                },
              },
              {
                key: "writeEndTag",
                value: function (t, e) {
                  var r = k(t.getType(), e);
                  if (1 === r.length) this.output.push("</" + r[0] + ">\n");
                  else {
                    var n = [],
                      i = !0,
                      o = !1,
                      a = void 0;
                    try {
                      for (
                        var u, s = r[Symbol.iterator]();
                        !(i = (u = s.next()).done);
                        i = !0
                      ) {
                        var c = u.value;
                        n.unshift("</" + c + ">");
                      }
                    } catch (t) {
                      (o = !0), (a = t);
                    } finally {
                      try {
                        !i && s.return && s.return();
                      } finally {
                        if (o) throw a;
                      }
                    }
                    this.output.push(n.join("") + "\n");
                  }
                },
              },
              {
                key: "openWrapperTag",
                value: function (t) {
                  (this.wrapperTag = t),
                    this.indent(),
                    this.output.push("<" + t + ">\n"),
                    (this.indentLevel += 1);
                },
              },
              {
                key: "closeWrapperTag",
                value: function () {
                  var t = this.wrapperTag;
                  t &&
                    ((this.indentLevel -= 1),
                    this.indent(),
                    this.output.push("</" + t + ">\n"),
                    (this.wrapperTag = null));
                },
              },
              {
                key: "indent",
                value: function () {
                  this.output.push("  ".repeat(this.indentLevel));
                },
              },
              {
                key: "withCustomInlineStyles",
                value: function (t, e) {
                  if (!this.inlineStyleFn) return t;
                  var r = this.inlineStyleFn(e);
                  if (!r) return t;
                  var n = r.element,
                    i = void 0 === n ? "span" : n,
                    a = r.attributes,
                    u = r.style;
                  return (
                    "<" +
                    i +
                    C(o({}, a, { style: u && (0, l.default)(u) })) +
                    ">" +
                    t +
                    "</" +
                    i +
                    ">"
                  );
                },
              },
              {
                key: "renderBlockContent",
                value: function (t) {
                  var e = this,
                    r = t.getType(),
                    n = t.getText();
                  if ("" === n) return m;
                  n = this.preserveWhitespace(n);
                  var i = t.getCharacterList();
                  return (0, uc.getEntityRanges)(n, i)
                    .map(function (t) {
                      var n = a(t, 2),
                        i = n[0],
                        u = n[1]
                          .map(function (t) {
                            var n = a(t, 2),
                              i = n[0],
                              u = n[1],
                              s = (function (t) {
                                return t
                                  .split("&")
                                  .join("&amp;")
                                  .split("<")
                                  .join("&lt;")
                                  .split(">")
                                  .join("&gt;")
                                  .split(" ")
                                  .join("&nbsp;")
                                  .split("\n")
                                  .join("<br>\n");
                              })(i),
                              f = !0,
                              p = !1,
                              h = void 0;
                            try {
                              for (
                                var g, y = e.styleOrder[Symbol.iterator]();
                                !(f = (g = y.next()).done);
                                f = !0
                              ) {
                                var v = g.value;
                                if (
                                  (v !== d || r !== uc.BLOCK_TYPE.CODE) &&
                                  u.has(v)
                                ) {
                                  var m = e.inlineStyles[v],
                                    b = m.element,
                                    _ = m.attributes,
                                    w = m.style;
                                  if (
                                    (null == b && (b = "span"),
                                    (_ = (0, c.default)(_)),
                                    null != w)
                                  ) {
                                    var S = (0, l.default)(w);
                                    _ =
                                      null == _
                                        ? { style: S }
                                        : o({}, _, { style: S });
                                  }
                                  s = "<" + b + C(_) + ">" + s + "</" + b + ">";
                                }
                              }
                            } catch (t) {
                              (p = !0), (h = t);
                            } finally {
                              try {
                                !f && y.return && y.return();
                              } finally {
                                if (p) throw h;
                              }
                            }
                            return e.withCustomInlineStyles(s, u);
                          })
                          .join(""),
                        s = i ? e.contentState.getEntity(i) : null,
                        f = null == s ? null : s.getType().toUpperCase(),
                        p = void 0;
                      if (
                        null != s &&
                        e.options.entityStyleFn &&
                        (p = e.options.entityStyleFn(s))
                      ) {
                        var h = p,
                          g = h.element,
                          y = h.attributes,
                          v = h.style;
                        if (
                          (null == g && (g = "span"),
                          (y = (0, c.default)(y)),
                          null != v)
                        ) {
                          var m = (0, l.default)(v);
                          y = null == y ? { style: m } : o({}, y, { style: m });
                        }
                        return "<" + g + C(y) + ">" + u + "</" + g + ">";
                      }
                      return null != f && f === uc.ENTITY_TYPE.LINK
                        ? "<a" +
                            C(O.hasOwnProperty(f) ? O[f](f, s) : null) +
                            ">" +
                            u +
                            "</a>"
                        : null != f && f === uc.ENTITY_TYPE.IMAGE
                        ? "<img" +
                          C(O.hasOwnProperty(f) ? O[f](f, s) : null) +
                          "/>"
                        : u;
                    })
                    .join("");
                },
              },
              {
                key: "preserveWhitespace",
                value: function (t) {
                  for (var e = t.length, r = new Array(e), n = 0; n < e; n++)
                    " " !== t[n] || (0 !== n && n !== e - 1 && " " !== t[n - 1])
                      ? (r[n] = t[n])
                      : (r[n] = " ");
                  return r.join("");
                },
              },
            ]),
            t
          );
        })();
        function C(t) {
          if (null == t) return "";
          var e = [],
            r = !0,
            n = !1,
            i = void 0;
          try {
            for (
              var o, a = Object.keys(t)[Symbol.iterator]();
              !(r = (o = a.next()).done);
              r = !0
            ) {
              var u = o.value,
                s = t[u];
              null != s &&
                e.push(
                  " " +
                    u +
                    '="' +
                    ((s + "")
                      .split("&")
                      .join("&amp;")
                      .split("<")
                      .join("&lt;")
                      .split(">")
                      .join("&gt;")
                      .split('"')
                      .join("&quot;") +
                      '"')
                );
            }
          } catch (t) {
            (n = !0), (i = t);
          } finally {
            try {
              !r && a.return && a.return();
            } finally {
              if (n) throw i;
            }
          }
          return e.join("");
        }
      }),
      cc = e.c(function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "stateToHTML", {
            enumerable: !0,
            get: function () {
              return ((t = sc), t && t.__esModule ? t : { default: t }).default;
              var t;
            },
          });
      });
    const lc = global._ || guac.lodash;
    var fc = e.c(function (t, e) {
        function r(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function n(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? r(Object(n), !0).forEach(function (e) {
                  i(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : r(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        function i(t, e, r) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function o(t, e, r) {
          return t
            ? ",cg:true".concat(e ? ",m" : "").concat(r ? ",i:true" : "")
            : "";
        }
        function a(t) {
          var e = t.outputWidth,
            r = void 0 === e ? 0 : e,
            n = t.outputHeight,
            i = void 0 === n ? 0 : n,
            o = t.aspectRatio,
            a = t.quality,
            u = t.rotation,
            s = t.left,
            c = t.top,
            l = t.width,
            f = void 0 === l ? "" : l,
            p = t.height,
            h = void 0 === p ? "" : p;
          return (0,
          lc.pickBy)({ outputWidth: r, outputHeight: i, aspectRatio: o, quality: a, rotation: u, left: s, top: c, width: f, height: h }, function (t) {
            return !isNaN(parseInt(t, 10));
          });
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = n(n({}, t), e),
              i = r.imageUrl,
              u = r.canGrow,
              s = void 0 === u || u,
              c = r.ignoreAspect,
              l = r.additionalUrlParams,
              f = void 0 === l ? [] : l,
              p = r.enableImageDimension,
              h = r.imageDimension,
              d = a(r),
              g = d.outputWidth,
              y = d.outputHeight,
              v = d.aspectRatio,
              m = d.quality,
              b = d.rotation,
              _ = d.left,
              w = d.top,
              S = d.width,
              O = d.height,
              k = [],
              E = parseFloat(v || 0),
              C = g && y ? g / y : E,
              x = Math.abs(E - C) < 0.05;
            if (p || !h) {
              (b = parseInt(b || 0, 10)) && k.push("rt=d:".concat(b));
              var D,
                T = o(s, !0, c);
              x &&
                (parseInt(O, 10) >= 100 &&
                  O.indexOf("%") > -1 &&
                  ((O = "100%"), (w = "0%"), (T = o(s, !1, c))),
                parseInt(S, 10) >= 100 &&
                  S.indexOf("%") > -1 &&
                  ((S = "100%"), (_ = "0%"), (T = o(s, !1, c)))),
                g && y
                  ? (D = "rs=w:".concat(g, ",h:").concat(y).concat(T))
                  : y
                  ? (D = "rs=h:".concat(y).concat(T))
                  : g && (D = "rs=w:".concat(g).concat(T)),
                w && _ && S && O && x
                  ? (k.push(
                      "cr=t:"
                        .concat(w, ",l:")
                        .concat(_, ",w:")
                        .concat(S, ",h:")
                        .concat(O)
                    ),
                    D && k.push(D))
                  : (D && k.push(D),
                    y && g && k.push("cr=w:".concat(g, ",h:").concat(y))),
                m && k.push("qt=q:".concat(m));
            }
            return (
              i +
              "/:/" +
              encodeURI(
                k
                  .concat(
                    f.filter(function (t) {
                      return t && t.length > 0;
                    })
                  )
                  .join("/")
              )
            );
          });
      }),
      pc = e.g(fc);
    const hc = function () {
      let t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      if (!t) return t;
      let e = t.replace("?", "&");
      return (
        (e = e.replace("ols/categories/", "olsPage=t/")),
        (e = e.replace("ols/all", "olsPage=all")),
        e
      );
    };
    function dc(t) {
      for (const e in t)
        if (t.hasOwnProperty(e)) {
          const r = t[e].tags;
          if (Array.isArray(r) && r.includes("SHOP")) return t[e];
        }
      return {};
    }
    const gc = "products",
      yc = "external",
      vc = "internal",
      mc = "EXTERNAL",
      bc = "#",
      { renderModes: _c } = (global.Core || guac["@wsb/guac-widget-core"])
        .constants,
      { sanitizeUrl: wc } = (global.Core || guac["@wsb/guac-widget-core"])
        .utils;
    function Sc(t) {
      return t.linkType
        ? t.linkType
        : (t.pageId && t.pageId !== mc) || !t.url
        ? vc
        : yc;
    }
    function Oc(t) {
      let e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const { internalLinks: r } = e;
      return r && t.linkId ? r[t.linkId] : null;
    }
    function kc(t, e) {
      if (t.linkId) {
        const r = Oc(t, e);
        return r ? r.widgetId : null;
      }
      return t.widgetId || null;
    }
    function Ec(t, e) {
      switch (Sc(t)) {
        case yc: {
          const { url: e } = t;
          return /^\w+:\/\//.test(e) ? e : `http://${e}`;
        }
        case vc: {
          const r = kc(t, e),
            n = (function (t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              if (t.linkId) {
                const r = Oc(t, e);
                return r ? r.routePath : "";
              }
              let { navigationMap: r } = e;
              if (t.pageId && r) {
                r = r.toJS ? r.toJS() : r;
                const e = r[t.pageId];
                return e ? e.href : null;
              }
              return null;
            })(t, e);
          return n ? (r ? `${n}#${r}` : n) : bc;
        }
        case gc: {
          const r = dc(e.navigationMap).href || "/";
          return (
            r +
            ("/" === r.slice(-1) ? "" : "/") +
            ((t) => {
              if (!t || "string" != typeof t) return t;
              let e = t.substr(t.indexOf("?olsPage") + 1);
              return (
                (e = e.substring(e.indexOf("/ols") + 1)),
                (e = e.replace("olsPage=t/&", "ols/all?")),
                (e = e.replace("olsPage=t/", "ols/categories/")),
                -1 === e.indexOf("?") && (e = e.replace("&", "?")),
                e
              );
            })(t.productsLink)
          );
        }
        case "phone":
          return t.phone ? `tel:${t.phone.replace(".", "")}` : bc;
        case "email": {
          const { email: e, subject: r, body: n } = t;
          if (!e) return bc;
          let i = `mailto:${e.replace(/\s/g, "")}`;
          return (
            r && r.length > 0 && (i = `${i}?subject=${encodeURIComponent(r)}`),
            n &&
              n.length > 0 &&
              (i +=
                (i.split("?")[1] ? "&" : "?") +
                `body=${encodeURIComponent(n)}`),
            i
          );
        }
        default:
          return bc;
      }
    }
    function Cc(t, e, r) {
      if (Sc(t) === vc) {
        const n = (function (t) {
            let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            if (t.linkId) {
              const r = Oc(t, e);
              return r ? r.pageId : null;
            }
            return t.pageId === mc ? null : t.pageId || null;
          })(t, e),
          i = kc(t, e);
        if (i && n) return { "data-page": n, "data-section-jump": i };
        if (n)
          return {
            "data-page": n,
            "data-page-query": r === _c.PREVIEW ? "&scrollToTop=true" : null,
          };
      }
      return Sc(t) === gc
        ? dc(e.navigationMap).active && r !== _c.PUBLISH
          ? {}
          : {
              "data-page-query": hc(t.productsLink),
              "data-page": dc(e.navigationMap).pageId,
            }
        : {};
    }
    function xc(t, e, r, n) {
      let i =
          arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        o = arguments.length > 5 ? arguments[5] : void 0,
        a = arguments.length > 6 ? arguments[6] : void 0;
      if (r) return e;
      const u = a ? `mailto:${a}` : wc(e),
        s = t({ href: n ? null : u }),
        c = s ? `class="${s}" ` : "";
      if (n) return e.replace("href=", `${c}href=`);
      const l = i.toLowerCase(),
        f = "mailto:" === l || "tel:" === l ? o : e;
      return `<a ${c}href="${u}" target="_blank">${f}</a>`;
    }
    const Dc = new RegExp(
      /(<(?:img|iframe)[^>]+\/>)|(<a[^>]+>.+<\/a>)|(?=\b)(https?:\/\/|www\.|mailto:|tel:)([^ <\t]+)|((?=\b)(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})))/i.source,
      "gi"
    );
    const { escapeHtml: Tc, mergeProps: Mc } = (
        global.Core || guac["@wsb/guac-widget-core"]
      ).utils,
      { fontScales: Ic } = (global.Core || guac["@wsb/guac-widget-core"])
        .constants,
      Kc = {
        "header-one": 1,
        "header-two": 2,
        "header-three": 3,
        "header-four": 4,
        "header-five": 5,
        "header-six": 6,
      },
      Ac = {
        font: "inherit",
        letterSpacing: "inherit",
        textTransform: "inherit",
        fontSize: "inherit !important",
        color: "inherit",
        fontWeight: "inherit",
        lineHeight: "inherit",
      },
      Lc = { textTransform: "unset", letterSpacing: "unset" },
      {
        INLINE_FONT_SCALES: Bc,
        DEFAULT_WEBSITE_FONT_SCALES: Pc,
        BASE_INLINE_FONT_SCALE_INDEX: jc,
      } = Ic;
    function Rc(t, e) {
      const r = Bc[jc + e] || Bc[jc];
      return (Pc[t] || Pc.medium) * r;
    }
    function Nc(t, e) {
      return null != t ? t : "_blank" === e ? "noopener" : "";
    }
    function Fc(t) {
      let e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const r = new t(e),
        n = r.render ? r.render() : r;
      return "function" == typeof n.type
        ? Fc(n.type, n.props)
        : n.props.className || "";
    }
    function zc(t) {
      var e;
      let { fontSize: r, ...n } = t;
      const i = n.fontScale,
        o = null === (e = n.theme) || void 0 === e ? void 0 : e.base;
      function a(t) {
        return Fc(
          (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Link
            .Content,
          (global._ || guac.lodash).merge({}, n, t, {
            style: { fontSize: "inherit" },
            fontSize: "unset",
          })
        );
      }
      const u = {
        LINK(t) {
          const { internalLinks: e } = n,
            {
              url: r,
              href: i,
              linkId: o,
              target: u,
              rel: s,
              widgetId: c,
              pageId: l,
            } = t.getData(),
            f =
              (function (t, e) {
                if (
                  (function (t, e) {
                    return t && e && t[e];
                  })(t, e)
                )
                  return Ec({ linkId: e }, { internalLinks: t });
              })(e, o) ||
              r ||
              i;
          return {
            element: "a",
            attributes: {
              className: a({ href: f }),
              href: f,
              rel: Nc(s, u),
              target: u,
              ...Cc(
                { linkId: o, widgetId: c, pageId: l },
                { internalLinks: e }
              ),
            },
          };
        },
      };
      return {
        getLinkClassName: a,
        blockStyleFn(t) {
          const e = t.getType(),
            a = Kc.hasOwnProperty(e),
            u = parseInt(t.getData().get("fontScale"), 10),
            s = !(Number.isNaN(u) || (null != o && o.fontScaleMultiplier));
          if (a) {
            const t = { style: Lc, level: Kc[e] };
            return (
              s && (t.fontScale = Rc(i, u)),
              {
                attributes: {
                  class: Fc(
                    (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                      .Heading,
                    Mc(n, t)
                  ),
                },
              }
            );
          }
          if (s)
            return {
              attributes: {
                class: Fc(
                  (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                    .Element,
                  Mc(n, { fontSize: r, style: Lc, fontScale: Rc(i, u) })
                ),
              },
            };
        },
        blockRenderers: {
          atomic(t) {
            const e = t.getEntityAt(0),
              r = Zs.ContentState.createFromBlockArray([t]),
              i = (e || 0 === e) && r.getEntity(e),
              o = i && i.type && i.type.toLowerCase(),
              u = i && i.getData();
            switch (o) {
              case "image":
                return (function (t, e, r) {
                  const { imgOptions: n = {} } = t,
                    {
                      src: i,
                      top: o,
                      left: a,
                      width: u,
                      height: s,
                      rotation: c,
                      caption: l,
                      alignment: f,
                      alt: p,
                      href: h,
                      target: d,
                    } = e,
                    g = r({ href: h }),
                    y = (function (t, e) {
                      return t && "PUBLISH" === e
                        ? `target="${t}" ${
                            "_blank" === t ? 'rel="noopener"' : ""
                          }`
                        : 'target="_blank" rel="noopener"';
                    })(d, t.renderMode),
                    v = pc({
                      imageUrl: i,
                      outputWidth: n.outputWidth,
                      canGrow: !1,
                      top: o,
                      left: a,
                      width: u,
                      height: s,
                      rotation: c,
                    }),
                    m = Fc(
                      (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                        .Image,
                      t
                    ),
                    b = Fc(
                      (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                        .FigCaption,
                      t
                    ),
                    _ = Fc(
                      (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                        .Figure,
                      Mc(t, { alignment: f })
                    ),
                    w = Tc(p),
                    S = `<figure class="${_}"><div><img src="${v}" class="${m}" ${
                      p ? `alt="${w}" title="${w}" ` : ""
                    }/>${
                      l ? `<figcaption class="${b}">${l}</figcaption>` : ""
                    }</div></figure>`;
                  return h ? `<a class="${g}" href="${h}" ${y}>${S}</a>` : S;
                })(n, u, a);
              case "divider":
                return (function (t) {
                  return `<hr class="${Fc(
                    (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                      .HR,
                    t
                  )}" />`;
                })(n);
              case "video":
                return (function (t, e) {
                  const { embedSrc: r } = e;
                  return `<div class="${Fc(
                    (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                      .Embed.Container,
                    t
                  )}"><iframe src="${r}" class="${Fc(
                    (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                      .Embed,
                    t
                  )}" allowfullscreen></iframe></div>`;
                })(n, u);
              default:
                return;
            }
          },
        },
        entityStyles: u,
        entityStyleFn(t) {
          const e = t.get("type");
          if (u.hasOwnProperty(e)) return u[e](t);
        },
        inlineStyles: {
          BOLD: {
            attributes: {
              className: Fc(
                (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                  .Element,
                Mc(n, { style: { ...Ac, fontWeight: "bold" } })
              ),
            },
          },
          CODE: { element: "span" },
          ITALIC: {
            attributes: {
              className: Fc(
                (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                  .Element,
                Mc(n, { style: { ...Ac, fontStyle: "italic" } })
              ),
            },
          },
          STRIKETHROUGH: {
            attributes: {
              className: Fc(
                (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                  .Element,
                Mc(n, { style: { ...Ac, textDecoration: "line-through" } })
              ),
            },
          },
          UNDERLINE: {
            attributes: {
              className: Fc(
                (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                  .Element,
                Mc(n, { style: { ...Ac, textDecoration: "underline" } })
              ),
            },
          },
        },
      };
    }
    const { contextTypes: Uc } = (global.Core || guac["@wsb/guac-widget-core"])
        .constants,
      { getContextProps: Hc } = (global.Core || guac["@wsb/guac-widget-core"])
        .utils,
      qc = ["imgParams", "imgOptions"];
    class Wc extends (global.React || guac.react).PureComponent {
      getTags(t) {
        let e = t;
        return "p" === t && (e = "div"), { blockTag: "p", containerTag: e };
      }
      getRawData(t) {
        if ((global.React || guac.react).isValidElement(t))
          throw Error(
            "The `richtext` prop should get applied to the closest parent element to the rendered draft-js object.\n"
          );
        try {
          return JSON.parse(t) || {};
        } catch (e) {
          const r = Zs.ContentState.createFromText(t);
          return Zs.convertToRaw(r) || {};
        }
      }
      getBlockArrays(t) {
        let e;
        const r = ["atomic", "unstyled"],
          n = [];
        return (
          (t.blocks || []).forEach((t) => {
            const i = !r.includes(t.type),
              o = e && e.type === t.type;
            n.length && (t.depth > 0 || (i && o))
              ? n[n.length - 1].push(t)
              : n.push([t]),
              (e = t);
          }),
          n
        );
      }
      render() {
        const { tag: t, children: e, ...r } = this.props,
          n = this.context && this.context.v2 && this.context.v2.theme,
          i = { margin: "0" },
          o = this.getRawData(e),
          a = this.getBlockArrays(o),
          { blockTag: u, containerTag: s } = this.getTags(t),
          c = {
            ...Hc(this.context, r),
            ...(global._ || guac.lodash).pick(r, qc),
          },
          {
            getLinkClassName: l,
            inlineStyles: f,
            blockStyleFn: p,
            blockRenderers: h,
            entityStyleFn: d,
          } = zc({ ...c, theme: n }),
          g = {
            ...(global._ || guac.lodash).omit(r, qc),
            className: `${r.className} x-rt`,
          };
        return (global.React || guac.react).createElement(
          s,
          g,
          a.map((t) => {
            const { key: e, type: r } = t[0];
            let n = cc.stateToHTML(Zs.convertFromRaw({ ...o, blocks: t }), {
              inlineStyles: f,
              blockStyleFn: p,
              blockRenderers: h,
              entityStyleFn: d,
            });
            (n = n.replace(
              /^<\s*p(\s+[^>]*)?>([\s\S]*?)<\s*\/\s*p\s*>/gm,
              "<span$1>$2</span>"
            )),
              "atomic" !== r &&
                (n = (function () {
                  let t = arguments.length > 1 ? arguments[1] : void 0;
                  return (
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : ""
                  ).replace(Dc, function () {
                    for (
                      var e = arguments.length, r = new Array(e), n = 0;
                      n < e;
                      n++
                    )
                      r[n] = arguments[n];
                    return xc(t, ...r);
                  });
                })(n, l));
            const a = r.startsWith("header") ? "div" : u;
            return (global.React || guac.react).createElement(a, {
              style: i,
              key: e,
              dangerouslySetInnerHTML: { __html: n },
            });
          })
        );
      }
    }
    (Wc.propTypes = {
      tag: (global.PropTypes || guac["prop-types"]).string.isRequired,
      children: (global.PropTypes || guac["prop-types"]).string.isRequired,
    }),
      (Wc.contextTypes = Uc),
      (Wc.defaultProps = { children: "" }),
      (t.default = Wc),
      Object.defineProperty(t, "__esModule", { value: !0 });
  }
),
  "undefined" != typeof window && (window.global = window);
//# sourceMappingURL=RichText-6064ac60.js.map
