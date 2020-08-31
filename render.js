!(function (e) {
  const t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    const a = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
  (n.m = e),
  (n.c = t),
  (n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
  }),
  (n.r = function (e) {
    typeof Symbol !== 'undefined'
        && Symbol.toStringTag
        && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
    Object.defineProperty(e, '__esModule', { value: !0 });
  }),
  (n.t = function (e, t) {
    if ((1 & t && (e = n(e)), 8 & t)) return e;
    if (4 & t && typeof e === 'object' && e && e.__esModule) return e;
    const r = Object.create(null);
    if (
      (n.r(r),
      Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
      2 & t && typeof e !== 'string')
    ) { for (const a in e) {n.d(
          r,
          a,
          function (t) {
            return e[t];
          }.bind(null, a),
        );}}
    return r;
  }),
  (n.n = function (e) {
    const t = e && e.__esModule
      ? function () {
        return e.default;
      }
      : function () {
        return e;
      };
    return n.d(t, 'a', t), t;
  }),
  (n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }),
  (n.p = '/orientation-2020/'),
  n((n.s = 30));
}([
  function (e, t, n) {
    

    e.exports = n(31);
  },
  function (e, t, n) {
    

    (function (e) {
      n.d(t, 'b', () => rt),
      n.d(t, 'a', () => Ke);
      const r = n(18);
      var a = n.n(r);
      var i = n(25);
      var o = n.n(i);
      var l = n(0);
      var s = n.n(l);
      var u = n(26);
      var c = n(11);
      var d = n(19);
      var f = (n(9), n(28));
      var p = n(29);
      var h = function (e, t) {
        for (var n = [e[0]], r = 0, a = t.length; r < a; r += 1) n.push(t[r], e[r + 1]);
        return n;
      };
      var m =          "function" === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (e) {
              return typeof e;
            }
            : function (e) {
              return e
                  && "function" === typeof Symbol
                  && e.constructor === Symbol
                  && e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            };
      var g = function (e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      };
      var v = (function () {
        function e(e, t) {
          for (let n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      }());
      var b =          Object.assign
          || function (e) {
            for (let t = 1; t < arguments.length; t++) {
              let n = arguments[t];
              for (let r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          };
      var y = function (e, t) {
        if ('function' !== typeof t && t !== null) throw new TypeError(
            "Super expression must either be null or a function, not "
                + typeof t,
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        t
              && (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
      };
      var w = function (e, t) {
        var n = {};
        for (let r in e) t.indexOf(r) >= 0
              || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
        return n;
      };
      var x = function (e, t) {
        if (!e) throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ('object' !== typeof t && 'function' !== typeof t)
          ? e
          : t;
      };
      var S = function (e) {
        return (
          "object" === ('undefined' === typeof e ? 'undefined' : m(e))
            && e.constructor === Object
        );
      };
      var k = Object.freeze([]);
      var E = Object.freeze({});
      function C(e) {
        return typeof e === 'function';
      }
      function T(e) {
        return e.displayName || e.name || 'Component';
      }
      function O(e) {
        return e && typeof e.styledComponentId === 'string';
      }
      const P = (typeof e !== 'undefined'
            && (Object({ NODE_ENV: 'production', PUBLIC_URL: '/orientation-2020' })
              .REACT_APP_SC_ATTR
              || Object({
                NODE_ENV: 'production',
                PUBLIC_URL: '/orientation-2020',
              }).SC_ATTR))
          || 'data-styled';
      var A = 'undefined' !== typeof window && 'HTMLElement' in window;
      var M =          ('boolean' === typeof SC_DISABLE_SPEEDY && SC_DISABLE_SPEEDY)
          || ('undefined' !== typeof e
            && (Object({ NODE_ENV: 'production', PUBLIC_URL: '/orientation-2020' })
              .REACT_APP_SC_DISABLE_SPEEDY
              || Object({
                NODE_ENV: 'production',
                PUBLIC_URL: '/orientation-2020'
              }).SC_DISABLE_SPEEDY))
          || !1;
      var _ = {};
      let N = (function (e) {
          function t(n) {
            g(this, t);
            for (
              var r = arguments.length, a = Array(r > 1 ? r - 1 : 0), i = 1;
              i < r;
              i++
            ) a[i - 1] = arguments[i];
            const o = x(
              this,
              e.call(
                this,
                `An error occurred. See https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/errors.md#${ 
                  n
                   } for more information.${
                   a.length > 0 ? ' Additional arguments: ' + a.join(', ') : ''}`,
              ),
            );
            return x(o);
          }
          return y(t, e), t;
        }(Error));
        let F = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm;
        let D = function (e) {
          let t = '' + (e || '');
            var n = [];
          return (
            t.replace(F, (e, t, r) => {
              return n.push({ componentId: t, matchIndex: r }), e;
            }),
            n.map((e, r) => {
              var a = e.componentId,
                i = e.matchIndex,
                o = n[r + 1];
              return {
                componentId: a,
                cssFromDOM: o ? t.slice(i, o.matchIndex) : t.slice(i)
              };
            })
          );
        };
        let I = /^\s*\/\/.*$/gm;
        let j = new a.a({
          global: !1,
          cascade: !0,
          keyframe: !1,
          prefix: !1,
          compress: !1,
          semicolon: !0,
        });
        let R = new a.a({
          global: !1,
          cascade: !0,
          keyframe: !1,
          prefix: !0,
          compress: !1,
          semicolon: !1,
        });
        let z = [];
        let B = function (e) {
          if (e === -2) {
            let t = z;
            return (z = []), t;
          }
        };
        let L = o()((e) => {
          z.push(e);
        });
        let U = void 0;
        let H = void 0;
        let W = void 0;
        let V = function (e, t, n) {
          return t > 0
            && n.slice(0, t).indexOf(H) !== -1
            && n.slice(t - H.length, t) !== H
            ? `.${  U}`
            : e;
        };
      R.use([
        function (e, t, n) {
          e === 2
            && n.length
            && n[0].lastIndexOf(H) > 0
            && (n[0] = n[0].replace(W, V));
        },
        L,
        B,
      ]),
      j.use([L, B]);
      const q = function (e) {
        return j('', e);
      };
      function G(e, t, n) {
        const r = arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : '&';
          let a = e.join('').replace(I, '');
          let i = t && n ? `${n} ${ t} { ${ a } }` : a;
        return (
          (U = r),
          (H = t),
          (W = new RegExp(`\\${  H  }\\b`, 'g')),
          R(n || !t ? '' : t, i)
        );
      }
      const Y = function () {
        return n.nc;
      };
      var K = function (e, t, n) {
        n && ((e[t] || (e[t] = Object.create(null)))[n] = !0);
      };
      var Q = function (e, t) {
        e[t] = Object.create(null);
      };
      var $ = function (e) {
        return function (t, n) {
          return void 0 !== e[t] && e[t][n];
        };
      };
      var X = function (e) {
        var t = '';
        for (let n in e) t += `${Object.keys(e[n]).join(" ")  } `;
        return t.trim();
      };
      var Z = function (e) {
        if (e.sheet) return e.sheet;
        for (
          var t = e.ownerDocument.styleSheets.length, n = 0;
          n < t;
          n += 1
        ) {
          var r = e.ownerDocument.styleSheets[n];
          if (r.ownerNode === e) return r;
        }
        throw new N(10);
      };
      var J = function (e, t, n) {
        if (!t) return !1;
        var r = e.cssRules.length;
        try {
          e.insertRule(t, n <= r ? n : r);
        } catch (a) {
          return !1;
        }
        return !0;
      };
      var ee = function (e) {
        return '\n/* sc-component-id: ' + e + ' */\n';
      };
      var te = function (e, t) {
        for (var n = 0, r = 0; r <= t; r += 1) n += e[r];
        return n;
      };
      var ne = function (e, t) {
        return function (n) {
          var r = Y();
          return (
            "<style "
              + [
                r && `nonce="${  r  }"`,
                `${P  }="${  X(t)  }"`,
                'data-styled-version="4.4.1"',
                n,
              ]
                .filter(Boolean)
                .join(' ')
              + ">"
              + e()
              + "</style>"
          );
        };
      };
      var re = function (e, t) {
        return function () {
          var n;
              var r =
                (((n = {})[P] = X(t)), (n["data-styled-version"] = "4.4.1"), n);
              var a = Y();
          return (
            a && (r.nonce = a),
            s.a.createElement(
              "style",
              b({}, r, { dangerouslySetInnerHTML: { __html: e() } }),
            )
          );
        };
      };
      var ae = function (e) {
        return function () {
          return Object.keys(e);
        };
      };
      var ie = function (e, t) {
        return e.createTextNode(ee(t));
      };
      var oe = function e(t, n) {
        var r = void 0 === t ? Object.create(null) : t;
            var a = void 0 === n ? Object.create(null) : n;
            var i = function(e) {
              var t = a[e];
              return void 0 !== t ? t : (a[e] = [""]);
            };
            var o = function () {
            var e = '';
            for (let t in a) {
              var n = a[t][0];
              n && (e += ee(t) + n);
            }
            return e;
          };
        return {
          clone: function () {
            var t = (function (e) {
                var t = Object.create(null);
                for (let n in e) t[n] = { ...e[n]};
                return t;
              }(r)),
              n = Object.create(null);
            for (let i in a) n[i] = [a[i][0]];
            return e(t, n);
          },
          css: o,
          getIds: ae(a),
          hasNameForId: $(r),
          insertMarker: i,
          insertRules: function (e, t, n) {
            (i(e)[0] += t.join(' ')), K(r, e, n);
          },
          removeRules: function (e) {
            var t = a[e];
            void 0 !== t && ((t[0] = ''), Q(r, e));
          },
          sealed: !1,
          styleTag: null,
          toElement: re(o, r),
          toHTML: ne(o, r),
        };
      };
      var le = function (e, t, n, r, a) {
        if (A && !n) {
          var i = (function (e, t, n) {
            var r = document;
            e ? (r = e.ownerDocument) : t && (r = t.ownerDocument);
            var a = r.createElement('style');
            a.setAttribute(P, ''),
            a.setAttribute('data-styled-version', '4.4.1');
            var i = Y();
            if (
              (i && a.setAttribute('nonce', i),
              a.appendChild(r.createTextNode('')),
              e && !t)
            ) e.appendChild(a);
            else {
              if (!t || !e || !t.parentNode) throw new N(6);
              t.parentNode.insertBefore(a, n ? t : t.nextSibling);
            }
            return a;
          }(e, t, r));
          return M
            ? (function (e, t) {
              var n = Object.create(null);
                    var r = Object.create(null);
                    var a = void 0 !== t;
                    var i = !1;
                    var o = function(t) {
                      var a = r[t];
                      return void 0 !== a
                        ? a
                        : ((r[t] = ie(e.ownerDocument, t)),
                          e.appendChild(r[t]),
                          (n[t] = Object.create(null)),
                          r[t]);
                    };
                    var l = function () {
                  var e = '';
                  for (let t in r) e += r[t].data;
                  return e;
                };
              return {
                clone: function () {
                  throw new N(5);
                },
                css: l,
                getIds: ae(r),
                hasNameForId: $(n),
                insertMarker: o,
                insertRules: function (e, r, l) {
                  for (
                    var s = o(e), u = [], c = r.length, d = 0;
                    d < c;
                    d += 1
                  ) {
                    var f = r[d];
                          var p = a;
                    if (p && f.indexOf("@import") !== -1) u.push(f);
                    else {
                      p = !1;
                      var h = d === c - 1 ? '' : ' ';
                      s.appendData('' + f + h);
                    }
                  }
                  K(n, e, l),
                  a
                          && u.length > 0
                          && ((i = !0), t().insertRules(`${e  }-import`, u));
                },
                removeRules: function (o) {
                  var l = r[o];
                  if (void 0 !== l) {
                    var s = ie(e.ownerDocument, o);
                    e.replaceChild(s, l),
                    (r[o] = s),
                    Q(n, o),
                    a && i && t().removeRules(`${o  }-import`);
                  }
                },
                sealed: !1,
                styleTag: e,
                toElement: re(l, n),
                toHTML: ne(l, n),
              };
            }(i, a))
            : (function (e, t) {
              var n = Object.create(null);
                    var r = Object.create(null);
                    var a = [];
                    var i = void 0 !== t;
                    var o = !1;
                    var l = function(e) {
                      var t = r[e];
                      return void 0 !== t
                        ? t
                        : ((r[e] = a.length), a.push(0), Q(n, e), r[e]);
                    };
                    var s = function () {
                  var t = Z(e).cssRules;
                        var n = '';
                  for (let i in r) {
                    n += ee(i);
                    for (
                      var o = r[i], l = te(a, o), s = l - a[o];
                      s < l;
                      s += 1
                    ) {
                      var u = t[s];
                      void 0 !== u && (n += u.cssText);
                    }
                  }
                  return n;
                };
              return {
                clone: function () {
                  throw new N(5);
                },
                css: s,
                getIds: ae(r),
                hasNameForId: $(n),
                insertMarker: l,
                insertRules: function (r, s, u) {
                  for (
                    var c = l(r),
                      d = Z(e),
                      f = te(a, c),
                      p = 0,
                      h = [],
                      m = s.length,
                      g = 0;
                    g < m;
                    g += 1
                  ) {
                    var v = s[g];
                          var b = i;
                    b && v.indexOf("@import") !== -1
                      ? h.push(v)
                      : J(d, v, f + p) && ((b = !1), (p += 1));
                  }
                  i
                        && h.length > 0
                        && ((o = !0), t().insertRules(`${r  }-import`, h)),
                  (a[c] += p),
                  K(n, r, u);
                },
                removeRules: function (l) {
                  var s = r[l];
                  if (void 0 !== s && !1 !== e.isConnected) {
                    var u = a[s];
                    !(function (e, t, n) {
                      for (let r = t - n, a = t; a > r; a -= 1) e.deleteRule(a);
                    }(Z(e), te(a, s) - 1, u)),
                    (a[s] = 0),
                    Q(n, l),
                    i && o && t().removeRules(`${l  }-import`);
                  }
                },
                sealed: !1,
                styleTag: e,
                toElement: re(s, n),
                toHTML: ne(s, n),
              };
            }(i, a));
        }
        return oe();
      };
      var se = /\s+/;
      var ue = void 0;
      ue = A ? (M ? 40 : 1e3) : -1;
      let ce = 0;
      var de = void 0;
      var fe = (function () {
        function e() {
          var t = this;
              var n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : A
                  ? document.head
                  : null;
              var r =                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          g(this, e),
          (this.getImportRuleTag = function () {
            var e = t.importRuleTag;
            if (void 0 !== e) return e;
            var n = t.tags[0];
            return (t.importRuleTag = le(
              t.target,
              n ? n.styleTag : null,
              t.forceServer,
              !0,
            ));
          }),
          (ce += 1),
          (this.id = ce),
          (this.forceServer = r),
          (this.target = r ? null : n),
          (this.tagMap = {}),
          (this.deferred = {}),
          (this.rehydratedNames = {}),
          (this.ignoreRehydratedNames = {}),
          (this.tags = []),
          (this.capacity = 1),
          (this.clones = []);
        }
        return (
          (e.prototype.rehydrate = function () {
            if (!A || this.forceServer) return this;
            var e = [];
                var t = [];
                var n = !1;
                var r = document.querySelectorAll(
                  "style[" + P + '][data-styled-version="4.4.1"]'
                );
                var a = r.length;
            if (!a) return this;
            for (let i = 0; i < a; i += 1) {
              var o = r[i];
              n || (n = !!o.getAttribute('data-styled-streamed'));
              for (
                var l,
                  s = (o.getAttribute(P) || '').trim().split(se),
                  u = s.length,
                  c = 0;
                c < u;
                c += 1
              ) (l = s[c]), (this.rehydratedNames[l] = !0);
              t.push.apply(t, D(o.textContent)), e.push(o);
            }
            var d = t.length;
            if (!d) return this;
            var f = this.makeTag(null);
            !(function (e, t, n) {
              for (let r = 0, a = n.length; r < a; r += 1) {
                var i = n[r];
                    var o = i.componentId;
                    var l = i.cssFromDOM;
                    var s = q(l);
                e.insertRules(o, s);
              }
              for (let u = 0, c = t.length; u < c; u += 1) {
                var d = t[u];
                d.parentNode && d.parentNode.removeChild(d);
              }
            }(f, e, t)),
            (this.capacity = Math.max(1, ue - d)),
            this.tags.push(f);
            for (let p = 0; p < d; p += 1) this.tagMap[t[p].componentId] = f;
            return this;
          }),
          (e.reset = function () {
            var t =                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            de = new e(void 0, t).rehydrate();
          }),
          (e.prototype.clone = function () {
            var t = new e(this.target, this.forceServer);
            return (
              this.clones.push(t),
              (t.tags = this.tags.map((e) => {
                  for (
                    var n = e.getIds(), r = e.clone(), a = 0;
                    a < n.length;
                    a += 1
                  )
                    t.tagMap[n[a]] = r;
                  return r;
                })),
              (t.rehydratedNames = { ...this.rehydratedNames}),
              (t.deferred = { ...this.deferred}),
              t
            );
          }),
          (e.prototype.sealAllTags = function () {
            (this.capacity = 1),
            this.tags.forEach((e) => {
                  e.sealed = !0;
                });
          }),
          (e.prototype.makeTag = function (e) {
            var t = e ? e.styleTag : null;
            return le(
              this.target,
              t,
              this.forceServer,
              !1,
              this.getImportRuleTag,
            );
          }),
          (e.prototype.getTagForId = function (e) {
            var t = this.tagMap[e];
            if (void 0 !== t && !t.sealed) return t;
            var n = this.tags[this.tags.length - 1];
            return (
              (this.capacity -= 1),
              0 === this.capacity
                  && ((this.capacity = ue),
                  (n = this.makeTag(n)),
                  this.tags.push(n)),
              (this.tagMap[e] = n)
            );
          }),
          (e.prototype.hasId = function (e) {
            return void 0 !== this.tagMap[e];
          }),
          (e.prototype.hasNameForId = function (e, t) {
            if (
              void 0 === this.ignoreRehydratedNames[e]
                && this.rehydratedNames[t]
            ) return !0;
            var n = this.tagMap[e];
            return void 0 !== n && n.hasNameForId(e, t);
          }),
          (e.prototype.deferredInject = function (e, t) {
            if (void 0 === this.tagMap[e]) {
              for (let n = this.clones, r = 0; r < n.length; r += 1) n[r].deferredInject(e, t);
              this.getTagForId(e).insertMarker(e), (this.deferred[e] = t);
            }
          }),
          (e.prototype.inject = function (e, t, n) {
            for (let r = this.clones, a = 0; a < r.length; a += 1) r[a].inject(e, t, n);
            var i = this.getTagForId(e);
            if (void 0 !== this.deferred[e]) {
              var o = this.deferred[e].concat(t);
              i.insertRules(e, o, n), (this.deferred[e] = void 0);
            } else i.insertRules(e, t, n);
          }),
          (e.prototype.remove = function (e) {
            var t = this.tagMap[e];
            if (void 0 !== t) {
              for (let n = this.clones, r = 0; r < n.length; r += 1) n[r].remove(e);
              t.removeRules(e),
              (this.ignoreRehydratedNames[e] = !0),
              (this.deferred[e] = void 0);
            }
          }),
          (e.prototype.toHTML = function () {
            return this.tags
              .map((e) => {
                  return e.toHTML();
                })
              .join('');
          }),
          (e.prototype.toReactElements = function () {
            var e = this.id;
            return this.tags.map((t, n) => {
                var r = "sc-" + e + "-" + n;
                return Object(l.cloneElement)(t.toElement(), { key: r });
              });
          }),
          v(e, null, [
            {
              key: 'master',
              get: function () {
                return de || (de = new e().rehydrate());
              },
            },
            {
              key: 'instance',
              get: function () {
                return e.master;
              },
            },
          ]),
          e
        );
      }());
      var pe = (function () {
        function e(t, n) {
          var r = this;
          g(this, e),
          (this.inject = function (e) {
            e.hasNameForId(r.id, r.name) || e.inject(r.id, r.rules, r.name);
          }),
          (this.toString = function () {
            throw new N(12, String(r.name));
          }),
          (this.name = t),
          (this.rules = n),
          (this.id = 'sc-keyframes-' + t);
        }
        return (
          (e.prototype.getName = function () {
            return this.name;
          }),
          e
        );
      }());
      var he = /([A-Z])/g;
      var me = /^ms-/;
      function ge(e) {
        return e
          .replace(he, '-$1')
          .toLowerCase()
          .replace(me, '-ms-');
      }
      const ve = function (e) {
        return void 0 === e || e === null || !1 === e || e === '';
      };
      var be = function e(t, n) {
        let r = [];
        return (
          Object.keys(t).forEach((n) => {
            if (!ve(t[n])) {
              if (S(t[n])) return r.push.apply(r, e(t[n], n)), r;
              if (C(t[n])) return r.push(`${ge(n)  }:`, t[n], ';'), r;
              r.push(
                ge(n)
                    + ": "
                    + ((a = n),
                    (i = t[n]) == null || 'boolean' === typeof i || '' === i
                      ? ''
                      : 'number' !== typeof i || i === 0 || a in u.a
                        ? String(i).trim()
                        : `${i  }px`)
                    + ";",
              );
            }
            var a; var 
i;
            return r;
          }),
          n ? [`${n} {`].concat(r, ['}']) : r
        );
      };
      function ye(e, t, n) {
        if (Array.isArray(e)) {
          for (var r, a = [], i = 0, o = e.length; i < o; i += 1) (r = ye(e[i], t, n)) !== null
              && (Array.isArray(r) ? a.push.apply(a, r) : a.push(r));
          return a;
        }
        return ve(e)
          ? null
          : O(e)
            ? `.${  e.styledComponentId}`
            : C(e)
              ? typeof (l = e) !== 'function'
            || (l.prototype && l.prototype.isReactComponent)
            || !t
                ? e
                : ye(e(t), t, n)
              : e instanceof pe
                ? n
                  ? (e.inject(n), e.getName())
                  : e
                : S(e)
                  ? be(e)
                  : e.toString();
        let l;
      }
      function we(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        ) n[r - 1] = arguments[r];
        return C(e) || S(e) ? ye(h(k, [e].concat(n))) : ye(h(e, n));
      }
      function xe(e) {
        for (var t, n = 0 | e.length, r = 0 | n, a = 0; n >= 4;) {(t =            1540483477
              * (65535
                & (t =                  (255 & e.charCodeAt(a))
                  | ((255 & e.charCodeAt(++a)) << 8)
                  | ((255 & e.charCodeAt(++a)) << 16)
                  | ((255 & e.charCodeAt(++a)) << 24)))
            + (((1540483477 * (t >>> 16)) & 65535) << 16)),
          (r =              (1540483477 * (65535 & r)
                + (((1540483477 * (r >>> 16)) & 65535) << 16))
              ^ (t =                1540483477 * (65535 & (t ^= t >>> 24))
                + (((1540483477 * (t >>> 16)) & 65535) << 16))),
          (n -= 4),
          ++a;}
        switch (n) {
          case 3:
            r ^= (255 & e.charCodeAt(a + 2)) << 16;
          case 2:
            r ^= (255 & e.charCodeAt(a + 1)) << 8;
          case 1:
            r = 1540483477 * (65535 & (r ^= 255 & e.charCodeAt(a)))
              + (((1540483477 * (r >>> 16)) & 65535) << 16);
        }
        return (
          ((r = 1540483477 * (65535 & (r ^= r >>> 13))
            + (((1540483477 * (r >>> 16)) & 65535) << 16))
            ^ (r >>> 15))
          >>> 0
        );
      }
      const Se = 52;
      var ke = function (e) {
        return String.fromCharCode(e + (e > 25 ? 39 : 97));
      };
      function Ee(e) {
        let t = '';
          let n = void 0;
        for (n = e; n > Se; n = Math.floor(n / Se)) t = ke(n % Se) + t;
        return ke(n % Se) + t;
      }
      function Ce(e, t) {
        for (let n = 0; n < e.length; n += 1) {
          const r = e[n];
          if (Array.isArray(r) && !Ce(r, t)) return !1;
          if (C(r) && !O(r)) return !1;
        }
        return !t.some((e) => (
            C(e) ||
            (function(e) {
              for (var t in e) if (C(e[t])) return !0;
              return !1;
            })(e)
          ));
      }
      let Te;
      var Oe = function (e) {
        return Ee(xe(e));
      };
      var Pe = (function () {
        function e(t, n, r) {
          g(this, e),
          (this.rules = t),
          (this.isStatic = Ce(t, n)),
          (this.componentId = r),
          fe.master.hasId(r) || fe.master.deferredInject(r, []);
        }
        return (
          (e.prototype.generateAndInjectStyles = function (e, t) {
            var n = this.isStatic;
                var r = this.componentId;
                var a = this.lastClassName;
            if (A && n && 'string' === typeof a && t.hasNameForId(r, a)) return a;
            var i = ye(this.rules, e, t);
                var o = Oe(this.componentId + i.join(''));
            return (
              t.hasNameForId(r, o)
                  || t.inject(this.componentId, G(i, '.' + o, void 0, r), o),
              (this.lastClassName = o),
              o
            );
          }),
          (e.generateName = function (e) {
            return Oe(e);
          }),
          e
        );
      }());
      var Ae = function (e, t) {
        var n =              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : E;
            var r = !!n && e.theme === n.theme;
            var a = e.theme && !r ? e.theme : t || n.theme;
        return a;
      };
      var Me = /[[\].#*$><+~=|^:(),"'`-]+/g;
      var _e = /(^-|-$)/g;
      function Ne(e) {
        return e.replace(Me, '-').replace(_e, '');
      }
      function Fe(e) {
        return typeof e === 'string' && !0;
      }
      const De = {
        childContextTypes: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDerivedStateFromProps: !0,
        propTypes: !0,
        type: !0,
      };
      var Ie = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0,
      };
      var je = (((Te = {})[c.ForwardRef] = { $$typeof: !0, render: !0 }), Te);
      var Re = Object.defineProperty;
      var ze = Object.getOwnPropertyNames;
      var Be = Object.getOwnPropertySymbols;
      var Le =          void 0 === Be
            ? function () {
              return [];
            }
            : Be;
      var Ue = Object.getOwnPropertyDescriptor;
      var He = Object.getPrototypeOf;
      var We = Object.prototype;
      var Ve = Array.prototype;
      function qe(e, t, n) {
        if (typeof t !== 'string') {
          const r = He(t);
          r && r !== We && qe(e, r, n);
          for (
            let a = Ve.concat(ze(t), Le(t)),
              i = je[e.$$typeof] || De,
              o = je[t.$$typeof] || De,
              l = a.length,
              s = void 0,
              u = void 0;
            l--;

          ) {if (
              ((u = a[l]),
              !Ie[u]
                && (!n || !n[u])
                && (!o || !o[u])
                && (!i || !i[u])
                && (s = Ue(t, u)))
            ) try {
                Re(e, u, s);
              } catch (c) {}}
          return e;
        }
        return e;
      }
      let Ge = Object(l.createContext)();
      var Ye = Ge.Consumer;
      var Ke = (function (e) {
        function t(n) {
          g(this, t);
          var r = x(this, e.call(this, n));
          return (
            (r.getContext = Object(d.a)(r.getContext.bind(r))),
            (r.renderInner = r.renderInner.bind(r)),
            r
          );
        }
        return (
          y(t, e),
          (t.prototype.render = function () {
            return this.props.children
              ? s.a.createElement(Ge.Consumer, null, this.renderInner)
              : null;
          }),
          (t.prototype.renderInner = function (e) {
            var t = this.getContext(this.props.theme, e);
            return s.a.createElement(
              Ge.Provider,
              { value: t },
              this.props.children,
            );
          }),
          (t.prototype.getTheme = function (e, t) {
            if (C(e)) return e(t);
            if (
              null === e
                || Array.isArray(e)
                || "object" !== ('undefined' === typeof e ? 'undefined' : m(e))
            ) throw new N(8);
            return { ...t, ...e};
          }),
          (t.prototype.getContext = function (e, t) {
            return this.getTheme(e, t);
          }),
          t
        );
      }(l.Component));
      var Qe =          ((function () {
            function e() {
              g(this, e),
              (this.masterSheet = fe.master),
              (this.instance = this.masterSheet.clone()),
              (this.sealed = !1);
            }
            (e.prototype.seal = function () {
              if (!this.sealed) {
                let e = this.masterSheet.clones.indexOf(this.instance);
                this.masterSheet.clones.splice(e, 1), (this.sealed = !0);
              }
            }),
            (e.prototype.collectStyles = function (e) {
              if (this.sealed) throw new N(2);
              return s.a.createElement(Xe, { sheet: this.instance }, e);
            }),
            (e.prototype.getStyleTags = function () {
              return this.seal(), this.instance.toHTML();
            }),
            (e.prototype.getStyleElement = function () {
              return this.seal(), this.instance.toReactElements();
            }),
            (e.prototype.interleaveWithNodeStream = function (e) {
              throw new N(3);
            });
          }()),
          Object(l.createContext)());
      var $e = Qe.Consumer;
      var Xe = (function (e) {
        function t(n) {
          g(this, t);
          var r = x(this, e.call(this, n));
          return (r.getContext = Object(d.a)(r.getContext)), r;
        }
        return (
          y(t, e),
          (t.prototype.getContext = function (e, t) {
            if (e) return e;
            if (t) return new fe(t);
            throw new N(4);
          }),
          (t.prototype.render = function () {
            var e = this.props;
                var t = e.children;
                var n = e.sheet;
                var r = e.target;
            return s.a.createElement(
              Qe.Provider,
              { value: this.getContext(n, r) },
              t,
            );
          }),
          t
        );
      }(l.Component));
      var Ze = {};
      const Je = (function (e) {
        function t() {
          g(this, t);
          const n = x(this, e.call(this));
          return (
            (n.attrs = {}),
            (n.renderOuter = n.renderOuter.bind(n)),
            (n.renderInner = n.renderInner.bind(n)),
            n
          );
        }
        return (
          y(t, e),
          (t.prototype.render = function () {
            return s.a.createElement($e, null, this.renderOuter);
          }),
          (t.prototype.renderOuter = function () {
            const e = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : fe.master;
            return (
              (this.styleSheet = e),
              this.props.forwardedComponent.componentStyle.isStatic
                ? this.renderInner()
                : s.a.createElement(Ye, null, this.renderInner)
            );
          }),
          (t.prototype.renderInner = function (e) {
            const t = this.props.forwardedComponent;
            var n = t.componentStyle;
            var r = t.defaultProps;
            var a = (t.displayName, t.foldedComponentIds);
            var i = t.styledComponentId;
            var o = t.target;
            var s = void 0;
            s = n.isStatic
              ? this.generateAndInjectStyles(E, this.props)
              : this.generateAndInjectStyles(
                Ae(this.props, e, r) || E,
                this.props,
              );
            const u = this.props.as || this.attrs.as || o;
            var c = Fe(u);
            var d = {};
            var p = { ...this.props, ...this.attrs};
            var h = void 0;
            for (h in p) 'forwardedComponent' !== h
                && 'as' !== h
                && (h === 'forwardedRef'
                  ? (d.ref = p[h])
                  : h === 'forwardedAs'
                    ? (d.as = p[h])
                    : (c && !Object(f.a)(h)) || (d[h] = p[h]));
            return (
              this.props.style
                && this.attrs.style
                && (d.style = { ...this.attrs.style, ...this.props.style }),
              (d.className = Array.prototype
                .concat(
                  a,
                  i,
                  s !== i ? s : null,
                  this.props.className,
                  this.attrs.className,
                )
                .filter(Boolean)
                .join(' ')),
              Object(l.createElement)(u, d)
            );
          }),
          (t.prototype.buildExecutionContext = function (e, t, n) {
            const r = this;
            var a = { ...t, theme: e };
            return n.length
              ? ((this.attrs = {}),
              n.forEach((e) => {
                var t;
                    var n = e;
                    var i = !1;
                    var o = void 0;
                    var l = void 0;
                for (l in (C(n) && ((n = n(a)), (i = !0)), n)) (o = n[l]),
                  i
                        || !C(o)
                        || ((t = o)
                          && t.prototype
                          && t.prototype.isReactComponent)
                        || O(o)
                        || (o = o(a)),
                  (r.attrs[l] = o),
                  (a[l] = o);
              }),
              a)
              : a;
          }),
          (t.prototype.generateAndInjectStyles = function (e, t) {
            const n = t.forwardedComponent;
            var r = n.attrs;
            var a = n.componentStyle;
            n.warnTooManyClasses;
            return a.isStatic && !r.length
              ? a.generateAndInjectStyles(E, this.styleSheet)
              : a.generateAndInjectStyles(
                this.buildExecutionContext(e, t, r),
                this.styleSheet,
              );
          }),
          t
        );
      }(l.Component));
      function et(e, t, n) {
        const r = O(e);
        var a = !Fe(e);
        var i = t.displayName;
        var o =            void 0 === i
              ? (function (e) {
                return Fe(e) ? 'styled.' + e : 'Styled(' + T(e) + ')';
              }(e))
              : i;
        var l = t.componentId;
        var u =            void 0 === l
              ? (function (e, t, n) {
                var r = 'string' !== typeof t ? 'sc' : Ne(t);
                    var a = (Ze[r] || 0) + 1;
                Ze[r] = a;
                var i = `${r  }-${  e.generateName(r + a)}`;
                return n ? `${n  }-${  i}` : i;
              }(Pe, t.displayName, t.parentComponentId))
              : l;
        var c = t.ParentComponent;
        var d = void 0 === c ? Je : c;
        var f = t.attrs;
        var h = void 0 === f ? k : f;
        var m =            t.displayName && t.componentId
              ? `${Ne(t.displayName)  }-${  t.componentId}`
              : t.componentId || u;
        var g =            r && e.attrs
              ? Array.prototype.concat(e.attrs, h).filter(Boolean)
              : h;
        var v = new Pe(r ? e.componentStyle.rules.concat(n) : n, g, m);
        var y = void 0;
        var x = function (e, t) {
          return s.a.createElement(
            d,
            { ...e, forwardedComponent: y, forwardedRef: t },
          );
        };
        return (
          (x.displayName = o),
          ((y = s.a.forwardRef(x)).displayName = o),
          (y.attrs = g),
          (y.componentStyle = v),
          (y.foldedComponentIds = r
            ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId)
            : k),
          (y.styledComponentId = m),
          (y.target = r ? e.target : e),
          (y.withComponent = function (e) {
            const r = t.componentId;
            var a = w(t, ['componentId']);
            var i = r && `${r}-${ Fe(e) ? e : Ne(T(e))}`;
            return et(
              e,
              {
 ...a, attrs: g, componentId: i, ParentComponent: d },
              n,
            );
          }),
          Object.defineProperty(y, 'defaultProps', {
            get() {
              return this._foldedDefaultProps;
            },
            set(t) {
              this._foldedDefaultProps = r ? Object(p.a)(e.defaultProps, t) : t;
            },
          }),
          (y.toString = function () {
            return `.${  y.styledComponentId}`;
          }),
          a
            && qe(y, e, {
              attrs: !0,
              componentStyle: !0,
              displayName: !0,
              foldedComponentIds: !0,
              styledComponentId: !0,
              target: !0,
              withComponent: !0,
            }),
          y
        );
      }
      const tt = function (e) {
        return (function e(t, n) {
          const r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E;
          if (!Object(c.isValidElementType)(n)) throw new N(1, String(n));
          const a = function () {
            return t(n, r, we.apply(void 0, arguments));
          };
          return (
            (a.withConfig = function (a) {
              return e(t, n, { ...r, ...a });
            }),
            (a.attrs = function (a) {
              return e(
                t,
                n,
                { ...r, attrs: Array.prototype.concat(r.attrs, a).filter(Boolean) },
              );
            }),
            a
          );
        }(et, e));
      };
      [
        'a',
        'abbr',
        'address',
        'area',
        'article',
        'aside',
        'audio',
        'b',
        'base',
        'bdi',
        'bdo',
        'big',
        'blockquote',
        'body',
        'br',
        'button',
        'canvas',
        'caption',
        'cite',
        'code',
        'col',
        'colgroup',
        'data',
        'datalist',
        'dd',
        'del',
        'details',
        'dfn',
        'dialog',
        'div',
        'dl',
        'dt',
        'em',
        'embed',
        'fieldset',
        'figcaption',
        'figure',
        'footer',
        'form',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'head',
        'header',
        'hgroup',
        'hr',
        'html',
        'i',
        'iframe',
        'img',
        'input',
        'ins',
        'kbd',
        'keygen',
        'label',
        'legend',
        'li',
        'link',
        'main',
        'map',
        'mark',
        'marquee',
        'menu',
        'menuitem',
        'meta',
        'meter',
        'nav',
        'noscript',
        'object',
        'ol',
        'optgroup',
        'option',
        'output',
        'p',
        'param',
        'picture',
        'pre',
        'progress',
        'q',
        'rp',
        'rt',
        'ruby',
        's',
        'samp',
        'script',
        'section',
        'select',
        'small',
        'source',
        'span',
        'strong',
        'style',
        'sub',
        'summary',
        'sup',
        'table',
        'tbody',
        'td',
        'textarea',
        'tfoot',
        'th',
        'thead',
        'time',
        'title',
        'tr',
        'track',
        'u',
        'ul',
        'var',
        'video',
        'wbr',
        'circle',
        'clipPath',
        'defs',
        'ellipse',
        'foreignObject',
        'g',
        'image',
        'line',
        'linearGradient',
        'marker',
        'mask',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'radialGradient',
        'rect',
        'stop',
        'svg',
        'text',
        'tspan',
      ].forEach((e) => {
        tt[e] = tt(e);
      });
      const nt = (function () {
        function e(t, n) {
          g(this, e),
          (this.rules = t),
          (this.componentId = n),
          (this.isStatic = Ce(t, k)),
          fe.master.hasId(n) || fe.master.deferredInject(n, []);
        }
        return (
          (e.prototype.createStyles = function (e, t) {
            const n = G(ye(this.rules, e, t), '');
            t.inject(this.componentId, n);
          }),
          (e.prototype.removeStyles = function (e) {
            const t = this.componentId;
            e.hasId(t) && e.remove(t);
          }),
          (e.prototype.renderStyles = function (e, t) {
            this.removeStyles(t), this.createStyles(e, t);
          }),
          e
        );
      }());
      function rt(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        ) n[r - 1] = arguments[r];
        const a = we.apply(void 0, [e].concat(n));
        var i = 'sc-global-' + xe(JSON.stringify(a));
        var o = new nt(a, i);
        var l = (function (e) {
          function t(n) {
            g(this, t);
            let r = x(this, e.call(this, n));
            var a = r.constructor;
            var i = a.globalStyle;
            var o = a.styledComponentId;
            return (
              A
                  && (window.scCGSHMRCache[o] = (window.scCGSHMRCache[o] || 0) + 1),
              (r.state = { globalStyle: i, styledComponentId: o }),
              r
            );
          }
          return (
            y(t, e),
            (t.prototype.componentWillUnmount = function () {
              window.scCGSHMRCache[this.state.styledComponentId]
                  && (window.scCGSHMRCache[this.state.styledComponentId] -= 1),
              0 === window.scCGSHMRCache[this.state.styledComponentId]
                    && this.state.globalStyle.removeStyles(this.styleSheet);
            }),
            (t.prototype.render = function () {
              let e = this;
              return s.a.createElement($e, null, (t) => {
                e.styleSheet = t || fe.master;
                var n = e.state.globalStyle;
                return n.isStatic
                  ? (n.renderStyles(_, e.styleSheet), null)
                  : s.a.createElement(Ye, null, (t) => {
                        var r = e.constructor.defaultProps,
                          a = b({}, e.props);
                        return (
                          "undefined" !== typeof t &&
                            (a.theme = Ae(e.props, t, r)),
                          n.renderStyles(a, e.styleSheet),
                          null
                        );
                      });
              });
            }),
            t
          );
        }(s.a.Component));
        return (l.globalStyle = o), (l.styledComponentId = i), l;
      }
      A && (window.scCGSHMRCache = {});
      t.c = tt;
    }.call(this, n(41)));
  },
  function (e, t, n) {
    

    n.d(t, 'a', () => b),
    n.d(t, 'b', () => w),
    n.d(t, 'c', () => C),
    n.d(t, 'd', () => M),
    n.d(t, 'e', () => v),
    n.d(t, 'f', () => j),
    n.d(t, 'g', () => R),
    n.d(t, 'h', () => g),
    n.d(t, 'i', () => E),
    n.d(t, 'j', () => A),
    n.d(t, 'k', () => L),
    n.d(t, 'l', () => U),
    n.d(t, 'm', () => H),
    n.d(t, 'n', () => W),
    n.d(t, 'o', () => z);
    let r = n(5);
    var a = n(0);
    var i = n.n(a);
    var o = (n(9), n(7));
    var l = n(16);
    var s = n(6);
    var u = n(4);
    var c = n(17);
    var d = n.n(c);
    var f = (n(11), n(10));
    var p = n(24);
    var h = n.n(p);
    var m = (function (e) {
      var t = Object(l.a)();
      return (t.displayName = e), t;
    }("Router-History"));
    var g = (function (e) {
      var t = Object(l.a)();
      return (t.displayName = e), t;
    }("Router"));
    var v = (function (e) {
      function t(t) {
        let n;
        return (
          ((n = e.call(this, t) || this).state = {
            location: t.history.location,
          }),
          (n._isMounted = !1),
          (n._pendingLocation = null),
          t.staticContext
              || (n.unlisten = t.history.listen((e) => {
                n._isMounted
                  ? n.setState({ location: e })
                  : (n._pendingLocation = e);
              })),
          n
        );
      }
      Object(r.a)(t, e),
      (t.computeRootMatch = function (e) {
        return {
          path: '/', url: '/', params: {}, isExact: e === '/' 
        };
      });
      let n = t.prototype;
      return (
        (n.componentDidMount = function () {
          (this._isMounted = !0),
          this._pendingLocation
                && this.setState({ location: this._pendingLocation });
        }),
        (n.componentWillUnmount = function () {
          this.unlisten && this.unlisten();
        }),
        (n.render = function () {
          return i.a.createElement(
            g.Provider,
            {
              value: {
                history: this.props.history,
                location: this.state.location,
                match: t.computeRootMatch(this.state.location.pathname),
                staticContext: this.props.staticContext,
              },
            },
            i.a.createElement(m.Provider, {
              children: this.props.children || null,
              value: this.props.history,
            }),
          );
        }),
        t
      );
    }(i.a.Component));
    var b = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
        return (
          ((t = e.call.apply(e, [this].concat(r)) || this).history = Object(
            o.d,
          )(t.props)),
          t
        );
      }
      return (
        Object(r.a)(t, e),
        (t.prototype.render = function () {
          return i.a.createElement(v, {
            history: this.history,
            children: this.props.children,
          });
        }),
        t
      );
    }(i.a.Component));
    const y = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      Object(r.a)(t, e);
      const n = t.prototype;
      return (
        (n.componentDidMount = function () {
          this.props.onMount && this.props.onMount.call(this, this);
        }),
        (n.componentDidUpdate = function (e) {
          this.props.onUpdate && this.props.onUpdate.call(this, this, e);
        }),
        (n.componentWillUnmount = function () {
          this.props.onUnmount && this.props.onUnmount.call(this, this);
        }),
        (n.render = function () {
          return null;
        }),
        t
      );
    }(i.a.Component));
    function w(e) {
      const t = e.message;
      var n = e.when;
      var r = void 0 === n || n;
      return i.a.createElement(g.Consumer, null, (e) => {
        if ((e || Object(s.a)(!1), !r || e.staticContext)) return null;
        let n = e.history.block;
        return i.a.createElement(y, {
          onMount(e) {
            e.release = n(t);
          },
          onUpdate(e, r) {
            r.message !== t && (e.release(), (e.release = n(t)));
          },
          onUnmount(e) {
            e.release();
          },
          message: t,
        });
      });
    }
    const x = {};
    var S = 1e4;
    var k = 0;
    function E(e, t) {
      return (
        void 0 === e && (e = '/'),
        void 0 === t && (t = {}),
        e === '/'
          ? e
          : (function (e) {
            if (x[e]) return x[e];
            let t = d.a.compile(e);
            return k < S && ((x[e] = t), k++), t;
          }(e))(t, { pretty: !0 })
      );
    }
    function C(e) {
      const t = e.computedMatch;
      var n = e.to;
      var r = e.push;
      var a = void 0 !== r && r;
      return i.a.createElement(g.Consumer, null, (e) => {
        e || Object(s.a)(!1);
        let r = e.history;
          var l = e.staticContext;
          var c = a ? r.push : r.replace;
          var d = Object(o.c)(
            t
              ? 'string' === typeof n
                ? E(n, t.params)
                : Object(u.a)({}, n, { pathname: E(n.pathname, t.params) })
              : n,
          );
        return l
          ? (c(d), null)
          : i.a.createElement(y, {
            onMount: function () {
              c(d);
            },
            onUpdate: function (e, t) {
              var n = Object(o.c)(t.to);
              Object(o.f)(n, Object(u.a)({}, d, { key: n.key })) || c(d);
            },
            to: n,
          });
      });
    }
    const T = {};
    var O = 1e4;
    var P = 0;
    function A(e, t) {
      void 0 === t && (t = {}),
      (typeof t === 'string' || Array.isArray(t)) && (t = { path: t });
      const n = t;
      var r = n.path;
      var a = n.exact;
      var i = void 0 !== a && a;
      var o = n.strict;
      var l = void 0 !== o && o;
      var s = n.sensitive;
      var u = void 0 !== s && s;
      return [].concat(r).reduce((t, n) => {
        if (!n && '' !== n) return null;
        if (t) return t;
        let r = (function (e, t) {
            let n = '' + t.end + t.strict + t.sensitive;
              var r = T[n] || (T[n] = {});
            if (r[e]) return r[e];
            let a = [];
              var i = { regexp: d()(e, a, t), keys: a };
            return P < O && ((r[e] = i), P++), i;
          }(n, { end: i, strict: l, sensitive: u })),
          a = r.regexp,
          o = r.keys,
          s = a.exec(e);
        if (!s) return null;
        let c = s[0];
          var f = s.slice(1);
          var p = e === c;
        return i && !p
          ? null
          : {
            path: n,
            url: '/' === n && '' === c ? '/' : c,
            isExact: p,
            params: o.reduce((e, t, n) => {
                return (e[t.name] = f[n]), e;
              }, {}),
          };
      }, null);
    }
    var M = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (
        Object(r.a)(t, e),
        (t.prototype.render = function () {
          const e = this;
          return i.a.createElement(g.Consumer, null, (t) => {
            t || Object(s.a)(!1);
            let n = e.props.location || t.location;
              var r = e.props.computedMatch
                ? e.props.computedMatch
                : e.props.path
                ? A(n.pathname, e.props)
                : t.match;
              var a = Object(u.a)({}, t, { location: n, match: r });
              var o = e.props;
              var l = o.children;
              var c = o.component;
              var d = o.render;
            return (
              Array.isArray(l) && l.length === 0 && (l = null),
              i.a.createElement(
                g.Provider,
                { value: a },
                a.match
                  ? l
                    ? 'function' === typeof l
                      ? l(a)
                      : l
                    : c
                      ? i.a.createElement(c, a)
                      : d
                        ? d(a)
                        : null
                  : 'function' === typeof l
                    ? l(a)
                    : null,
              )
            );
          });
        }),
        t
      );
    }(i.a.Component));
    function _(e) {
      return e.charAt(0) === '/' ? e : `/${  e}`;
    }
    function N(e, t) {
      if (!e) return t;
      const n = _(e);
      return t.pathname.indexOf(n) !== 0
        ? t
        : Object(u.a)({}, t, { pathname: t.pathname.substr(n.length) });
    }
    function F(e) {
      return typeof e === 'string' ? e : Object(o.e)(e);
    }
    function D(e) {
      return function () {
        Object(s.a)(!1);
      };
    }
    function I() {}
    var j = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
        return (
          ((t = e.call.apply(e, [this].concat(r)) || this).handlePush = function (
            e,
          ) {
            return t.navigateTo(e, 'PUSH');
          }),
          (t.handleReplace = function (e) {
            return t.navigateTo(e, 'REPLACE');
          }),
          (t.handleListen = function () {
            return I;
          }),
          (t.handleBlock = function () {
            return I;
          }),
          t
        );
      }
      Object(r.a)(t, e);
      const n = t.prototype;
      return (
        (n.navigateTo = function (e, t) {
          const n = this.props;
          var r = n.basename;
          var a = void 0 === r ? '' : r;
          var i = n.context;
          var l = void 0 === i ? {} : i;
          (l.action = t),
          (l.location = (function (e, t) {
            return e
              ? Object(u.a)({}, t, { pathname: _(e) + t.pathname })
              : t;
          }(a, Object(o.c)(e)))),
          (l.url = F(l.location));
        }),
        (n.render = function () {
          const e = this.props;
          var t = e.basename;
          var n = void 0 === t ? '' : t;
          var r = e.context;
          var a = void 0 === r ? {} : r;
          var l = e.location;
          var s = void 0 === l ? '/' : l;
          var c = Object(f.a)(e, ['basename', 'context', 'location']);
          var d = {
            createHref(e) {
              return _(n + F(e));
            },
            action: 'POP',
            location: N(n, Object(o.c)(s)),
            push: this.handlePush,
            replace: this.handleReplace,
            go: D(),
            goBack: D(),
            goForward: D(),
            listen: this.handleListen,
            block: this.handleBlock,
          };
          return i.a.createElement(
            v,
            Object(u.a)({}, c, { history: d, staticContext: a }),
          );
        }),
        t
      );
    }(i.a.Component));
    var R = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (
        Object(r.a)(t, e),
        (t.prototype.render = function () {
          const e = this;
          return i.a.createElement(g.Consumer, null, (t) => {
            t || Object(s.a)(!1);
            let n;
              var r;
              var a = e.props.location || t.location;
            return (
              i.a.Children.forEach(e.props.children, (e) => {
                if (null == r && i.a.isValidElement(e)) {
                  n = e;
                  var o = e.props.path || e.props.from;
                  r = o
                    ? A(a.pathname, Object(u.a)({}, e.props, { path: o }))
                    : t.match;
                }
              }),
              r ? i.a.cloneElement(n, { location: a, computedMatch: r }) : null
            );
          });
        }),
        t
      );
    }(i.a.Component));
    function z(e) {
      const t = `withRouter(${  e.displayName || e.name  })`,
        n = function (t) {
          const n = t.wrappedComponentRef;
          var r = Object(f.a)(t, ['wrappedComponentRef']);
          return i.a.createElement(g.Consumer, null, (t) => ((
              t || Object(s.a)(!1),
              i.a.createElement(e, Object(u.a)({}, r, t, { ref: n }))
            )));
        };
      return (n.displayName = t), (n.WrappedComponent = e), h()(n, e);
    }
    const B = i.a.useContext;
    function L() {
      return B(m);
    }
    function U() {
      return B(g).location;
    }
    function H() {
      const e = B(g).match;
      return e ? e.params : {};
    }
    function W(e) {
      const t = U();
      var n = B(g).match;
      return e ? A(t.pathname, e) : n;
    }
  },
  function (e, t, n) {
    

    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.ResponsiveComponent = t.LargeDesktop = t.SmallDesktop = t.Desktop = t.MobileAndTablet = t.Tablet = t.Mobile = void 0);
    const r = n(13);
    (t.Mobile = r.Mobile),
    (t.Tablet = r.Tablet),
    (t.MobileAndTablet = r.MobileAndTablet),
    (t.Desktop = r.Desktop),
    (t.SmallDesktop = r.SmallDesktop),
    (t.LargeDesktop = r.LargeDesktop),
    (t.ResponsiveComponent = r.ResponsiveComponent);
  },
  function (e, t, n) {
    

    function r() {
      return (r = Object.assign
        || function (e) {
          for (let t = 1; t < arguments.length; t++) {
            const n = arguments[t];
            for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    n.d(t, 'a', () => r);
  },
  function (e, t, n) {
    

    function r(e, t) {
      (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      (e.__proto__ = t);
    }
    n.d(t, 'a', () => r);
  },
  function (e, t, n) {
    

    const r = !0;
    var a = 'Invariant failed';
    t.a = function (e, t) {
      if (!e) {
        if (r) throw new Error(a);
        throw new Error(`${a }: ${ t || ''}`);
      }
    };
  },
  function (e, t, n) {
    

    const r = n(4);
    function a(e) {
      return e.charAt(0) === '/';
    }
    function i(e, t) {
      for (let n = t, r = n + 1, a = e.length; r < a; n += 1, r += 1) e[n] = e[r];
      e.pop();
    }
    const o = function (e, t) {
      void 0 === t && (t = '');
      let n;
      var r = (e && e.split('/')) || [];
      var o = (t && t.split('/')) || [];
      var l = e && a(e);
      var s = t && a(t);
      var u = l || s;
      if (
        (e && a(e) ? (o = r) : r.length && (o.pop(), (o = o.concat(r))),
        !o.length)
      ) return '/';
      if (o.length) {
        const c = o[o.length - 1];
        n = c === '.' || c === '..' || c === '';
      } else n = !1;
      for (var d = 0, f = o.length; f >= 0; f--) {
        const p = o[f];
        p === '.' ? i(o, f) : p === '..' ? (i(o, f), d++) : d && (i(o, f), d--);
      }
      if (!u) for (; d--; d) o.unshift('..');
      !u || o[0] === '' || (o[0] && a(o[0])) || o.unshift('');
      let h = o.join('/');
      return n && h.substr(-1) !== '/' && (h += '/'), h;
    };
    function l(e) {
      return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
    }
    const s = function e(t, n) {
      if (t === n) return !0;
      if (t == null || n == null) return !1;
      if (Array.isArray(t)) {return (
            Array.isArray(n)
            && t.length === n.length
            && t.every((t, r) => {
              return e(t, n[r]);
            })
          );}
      if (typeof t === 'object' || typeof n === 'object') {
        let r = l(t);
        var a = l(n);
        return r !== t || a !== n
          ? e(r, a)
          : Object.keys({ ...t, ...n }).every((r) => e(t[r], n[r]));
      }
      return !1;
    };
    var u = n(6);
    function c(e) {
      return e.charAt(0) === '/' ? e : `/${  e}`;
    }
    function d(e) {
      return e.charAt(0) === '/' ? e.substr(1) : e;
    }
    function f(e, t) {
      return (function (e, t) {
        return (
          e.toLowerCase().indexOf(t.toLowerCase()) === 0
          && "/?#".indexOf(e.charAt(t.length)) !== -1
        );
      }(e, t))
        ? e.substr(t.length)
        : e;
    }
    function p(e) {
      return e.charAt(e.length - 1) === '/' ? e.slice(0, -1) : e;
    }
    function h(e) {
      const t = e.pathname;
      var n = e.search;
      var r = e.hash;
      var a = t || '/';
      return (
        n && n !== '?' && (a += n.charAt(0) === '?' ? n : `?${  n}`),
        r && r !== '#' && (a += r.charAt(0) === '#' ? r : `#${  r}`),
        a
      );
    }
    function m(e, t, n, a) {
      let i;
      typeof e === 'string'
        ? ((i = (function (e) {
          let t = e || '/';
            var n = '';
            var r = '';
            var a = t.indexOf('#');
          a !== -1 && ((r = t.substr(a)), (t = t.substr(0, a)));
          let i = t.indexOf('?');
          return (
            i !== -1 && ((n = t.substr(i)), (t = t.substr(0, i))),
            {
              pathname: t,
              search: n === '?' ? '' : n,
              hash: r === '#' ? '' : r,
            }
          );
        }(e))).state = t)
        : (void 0 === (i = Object(r.a)({}, e)).pathname && (i.pathname = ''),
        i.search
          ? i.search.charAt(0) !== '?' && (i.search = `?${  i.search}`)
          : (i.search = ''),
        i.hash
          ? i.hash.charAt(0) !== '#' && (i.hash = `#${  i.hash}`)
          : (i.hash = ''),
        void 0 !== t && void 0 === i.state && (i.state = t));
      try {
        i.pathname = decodeURI(i.pathname);
      } catch (l) {
        throw l instanceof URIError
          ? new URIError(
            `Pathname "${
                 i.pathname
                 }" could not be decoded. This is likely caused by an invalid percent-encoding.`,
          )
          : l;
      }
      return (
        n && (i.key = n),
        a
          ? i.pathname
            ? i.pathname.charAt(0) !== '/'
              && (i.pathname = o(i.pathname, a.pathname))
            : (i.pathname = a.pathname)
          : i.pathname || (i.pathname = '/'),
        i
      );
    }
    function g(e, t) {
      return (
        e.pathname === t.pathname
        && e.search === t.search
        && e.hash === t.hash
        && e.key === t.key
        && s(e.state, t.state)
      );
    }
    function v() {
      let e = null;
      let t = [];
      return {
        setPrompt(t) {
          return (
            (e = t),
            function () {
              e === t && (e = null);
            }
          );
        },
        confirmTransitionTo(t, n, r, a) {
          if (e != null) {
            let i = 'function' === typeof e ? e(t, n) : e;
            'string' === typeof i
              ? 'function' === typeof r
                ? r(i, a)
                : a(!0)
              : a(!1 !== i);
          } else a(!0);
        },
        appendListener(e) {
          let n = !0;
          function r() {
            n && e.apply(void 0, arguments);
          }
          return (
            t.push(r),
            function () {
              (n = !1),
              (t = t.filter((e) => {
                  return e !== r;
                }));
            }
          );
        },
        notifyListeners() {
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
          t.forEach((e) => {
            return e.apply(void 0, n);
          });
        },
      };
    }
    n.d(t, 'a', () => k),
    n.d(t, 'b', () => A),
    n.d(t, 'd', () => _),
    n.d(t, 'c', () => m),
    n.d(t, 'f', () => g),
    n.d(t, 'e', () => h);
    const b = !(
      typeof window === 'undefined'
      || !window.document
      || !window.document.createElement
    );
    function y(e, t) {
      t(window.confirm(e));
    }
    const w = 'popstate';
      let x = 'hashchange';
    function S() {
      try {
        return window.history.state || {};
      } catch (e) {
        return {};
      }
    }
    function k(e) {
      void 0 === e && (e = {}), b || Object(u.a)(!1);
      const t = window.history;
      var n = (function () {
        var e = window.navigator.userAgent;
        return (
          ((e.indexOf("Android 2.") === -1 &&
              e.indexOf("Android 4.0") === -1)
              || -1 === e.indexOf('Mobile Safari')
              || -1 !== e.indexOf('Chrome')
              || -1 !== e.indexOf('Windows Phone'))
            && window.history && 'pushState' in window.history
        );
      }());
      var a = !(window.navigator.userAgent.indexOf("Trident") === -1);
      var i = e;
      var o = i.forceRefresh;
      var l = void 0 !== o && o;
      var s = i.getUserConfirmation;
      var d = void 0 === s ? y : s;
      var g = i.keyLength;
      var k = void 0 === g ? 6 : g;
      var E = e.basename ? p(c(e.basename)) : '';
      function C(e) {
        const t = e || {};
        var n = t.key;
        var r = t.state;
        var a = window.location;
        var i = a.pathname + a.search + a.hash;
        return E && (i = f(i, E)), m(i, r, n);
      }
      function T() {
        return Math.random()
          .toString(36)
          .substr(2, k);
      }
      const O = v();
      function P(e) {
        Object(r.a)(L, e),
        (L.length = t.length),
        O.notifyListeners(L.location, L.action);
      }
      function A(e) {
        (function (e) {
          return (
            void 0 === e.state && navigator.userAgent.indexOf('CriOS') === -1
          );
        }(e)) || N(C(e.state));
      }
      function M() {
        N(C(S()));
      }
      let _ = !1;
      function N(e) {
        if (_) (_ = !1), P();
        else {
          O.confirmTransitionTo(e, 'POP', d, (t) => {
            t
              ? P({ action: 'POP', location: e })
              : (function (e) {
                var t = L.location;
                    var n = D.indexOf(t.key);
                -1 === n && (n = 0);
                var r = D.indexOf(e.key);
                -1 === r && (r = 0);
                var a = n - r;
                a && ((_ = !0), j(a));
              }(e));
          });
        }
      }
      let F = C(S());
      var D = [F.key];
      function I(e) {
        return E + h(e);
      }
      function j(e) {
        t.go(e);
      }
      let R = 0;
      function z(e) {
        (R += e) === 1 && e === 1
          ? (window.addEventListener(w, A), a && window.addEventListener(x, M))
          : R === 0
            && (window.removeEventListener(w, A),
            a && window.removeEventListener(x, M));
      }
      let B = !1;
      var L = {
        length: t.length,
        action: 'POP',
        location: F,
        createHref: I,
        push(e, r) {
          let a = m(e, r, T(), L.location);
          O.confirmTransitionTo(a, 'PUSH', d, (e) => {
            if (e) {
              var r = I(a),
                i = a.key,
                o = a.state;
              if (n)
                if ((t.pushState({ key: i, state: o }, null, r), l))
                  window.location.href = r;
                else {
                  var s = D.indexOf(L.location.key),
                    u = D.slice(0, s + 1);
                  u.push(a.key), (D = u), P({ action: "PUSH", location: a });
                }
              else window.location.href = r;
            }
          });
        },
        replace(e, r) {
          let a = m(e, r, T(), L.location);
          O.confirmTransitionTo(a, 'REPLACE', d, (e) => {
            if (e) {
              var r = I(a),
                i = a.key,
                o = a.state;
              if (n)
                if ((t.replaceState({ key: i, state: o }, null, r), l))
                  window.location.replace(r);
                else {
                  var s = D.indexOf(L.location.key);
                  -1 !== s && (D[s] = a.key),
                    P({ action: "REPLACE", location: a });
                }
              else window.location.replace(r);
            }
          });
        },
        go: j,
        goBack() {
          j(-1);
        },
        goForward() {
          j(1);
        },
        block(e) {
          void 0 === e && (e = !1);
          let t = O.setPrompt(e);
          return (
            B || (z(1), (B = !0)),
            function () {
              return B && ((B = !1), z(-1)), t();
            }
          );
        },
        listen(e) {
          let t = O.appendListener(e);
          return (
            z(1),
            function () {
              z(-1), t();
            }
          );
        },
      };
      return L;
    }
    const E = 'hashchange';
      let C = {
        hashbang: {
          encodePath(e) {
            return '!' === e.charAt(0) ? e : '!/' + d(e);
          },
          decodePath(e) {
            return '!' === e.charAt(0) ? e.substr(1) : e;
          },
        },
        noslash: { encodePath: d, decodePath: c },
        slash: { encodePath: c, decodePath: c },
      };
    function T(e) {
      const t = e.indexOf('#');
      return t === -1 ? e : e.slice(0, t);
    }
    function O() {
      const e = window.location.href;
      var t = e.indexOf('#');
      return t === -1 ? '' : e.substring(t + 1);
    }
    function P(e) {
      window.location.replace(`${T(window.location.href)}#${e}`);
    }
    function A(e) {
      void 0 === e && (e = {}), b || Object(u.a)(!1);
      const t = window.history;
      var n = (window.navigator.userAgent.indexOf('Firefox'), e);
      var a = n.getUserConfirmation;
      var i = void 0 === a ? y : a;
      var o = n.hashType;
      var l = void 0 === o ? 'slash' : o;
      var s = e.basename ? p(c(e.basename)) : '';
      var d = C[l];
      var g = d.encodePath;
      var w = d.decodePath;
      function x() {
        let e = w(O());
        return s && (e = f(e, s)), m(e);
      }
      const S = v();
      function k(e) {
        Object(r.a)(L, e),
        (L.length = t.length),
        S.notifyListeners(L.location, L.action);
      }
      let A = !1;
      var M = null;
      function _() {
        let e;
        var t;
        var n = O();
        var r = g(n);
        if (n !== r) P(r);
        else {
          const a = x();
          var o = L.location;
          if (
            !A
            && ((t = a),
            (e = o).pathname === t.pathname
              && e.search === t.search
              && e.hash === t.hash)
          ) return;
          if (M === h(a)) return;
          (M = null),
          (function (e) {
            if (A) (A = !1), k();
            else {
              S.confirmTransitionTo(e, 'POP', i, (t) => {
                t
                  ? k({ action: 'POP', location: e })
                  : (function (e) {
                    var t = L.location;
                          var n = I.lastIndexOf(h(t));
                    -1 === n && (n = 0);
                    var r = I.lastIndexOf(h(e));
                    -1 === r && (r = 0);
                    var a = n - r;
                    a && ((A = !0), j(a));
                  }(e));
              });
            }
          }(a));
        }
      }
      const N = O();
      var F = g(N);
      N !== F && P(F);
      let D = x();
      var I = [h(D)];
      function j(e) {
        t.go(e);
      }
      let R = 0;
      function z(e) {
        (R += e) === 1 && e === 1
          ? window.addEventListener(E, _)
          : R === 0 && window.removeEventListener(E, _);
      }
      let B = !1;
      var L = {
        length: t.length,
        action: 'POP',
        location: D,
        createHref(e) {
          let t = document.querySelector('base');
            var n = '';
          return (
            t && t.getAttribute('href') && (n = T(window.location.href)),
            `${n  }#${  g(s + h(e))}`
          );
        },
        push(e, t) {
          let n = m(e, void 0, void 0, L.location);
          S.confirmTransitionTo(n, 'PUSH', i, (e) => {
            if (e) {
              var t = h(n),
                r = g(s + t);
              if (O() !== r) {
                (M = t),
                  (function(e) {
                    window.location.hash = e;
                  })(r);
                var a = I.lastIndexOf(h(L.location)),
                  i = I.slice(0, a + 1);
                i.push(t), (I = i), k({ action: "PUSH", location: n });
              } else k();
            }
          });
        },
        replace(e, t) {
          let n = m(e, void 0, void 0, L.location);
          S.confirmTransitionTo(n, 'REPLACE', i, (e) => {
            if (e) {
              var t = h(n),
                r = g(s + t);
              O() !== r && ((M = t), P(r));
              var a = I.indexOf(h(L.location));
              -1 !== a && (I[a] = t), k({ action: "REPLACE", location: n });
            }
          });
        },
        go: j,
        goBack() {
          j(-1);
        },
        goForward() {
          j(1);
        },
        block(e) {
          void 0 === e && (e = !1);
          let t = S.setPrompt(e);
          return (
            B || (z(1), (B = !0)),
            function () {
              return B && ((B = !1), z(-1)), t();
            }
          );
        },
        listen(e) {
          let t = S.appendListener(e);
          return (
            z(1),
            function () {
              z(-1), t();
            }
          );
        },
      };
      return L;
    }
    function M(e, t, n) {
      return Math.min(Math.max(e, t), n);
    }
    function _(e) {
      void 0 === e && (e = {});
      const t = e;
      var n = t.getUserConfirmation;
      var a = t.initialEntries;
      var i = void 0 === a ? ['/'] : a;
      var o = t.initialIndex;
      var l = void 0 === o ? 0 : o;
      var s = t.keyLength;
      var u = void 0 === s ? 6 : s;
      var c = v();
      function d(e) {
        Object(r.a)(w, e),
        (w.length = w.entries.length),
        c.notifyListeners(w.location, w.action);
      }
      function f() {
        return Math.random()
          .toString(36)
          .substr(2, u);
      }
      const p = M(l, 0, i.length - 1);
      var g = i.map((e) => {
          return m(e, void 0, "string" === typeof e ? f() : e.key || f());
        });
      var b = h;
      function y(e) {
        const t = M(w.index + e, 0, w.entries.length - 1);
        var r = w.entries[t];
        c.confirmTransitionTo(r, 'POP', n, (e) => {
          e ? d({ action: 'POP', location: r, index: t }) : d();
        });
      }
      var w = {
        length: g.length,
        action: 'POP',
        location: g[p],
        index: p,
        entries: g,
        createHref: b,
        push(e, t) {
          let r = m(e, t, f(), w.location);
          c.confirmTransitionTo(r, 'PUSH', n, (e) => {
            if (e) {
              var t = w.index + 1,
                n = w.entries.slice(0);
              n.length > t ? n.splice(t, n.length - t, r) : n.push(r),
                d({ action: "PUSH", location: r, index: t, entries: n });
            }
          });
        },
        replace(e, t) {
          let r = m(e, t, f(), w.location);
          c.confirmTransitionTo(r, 'REPLACE', n, (e) => {
            e &&
              ((w.entries[w.index] = r), d({ action: "REPLACE", location: r }));
          });
        },
        go: y,
        goBack() {
          y(-1);
        },
        goForward() {
          y(1);
        },
        canGo(e) {
          let t = w.index + e;
          return t >= 0 && t < w.entries.length;
        },
        block(e) {
          return void 0 === e && (e = !1), c.setPrompt(e);
        },
        listen(e) {
          return c.appendListener(e);
        },
      };
      return w;
    }
  },
  function (e, t, n) {
    

    Object.defineProperty(t, '__esModule', { value: !0 });
    const r = Object.assign
        || function (e) {
          for (let t = 1; t < arguments.length; t++) {
            const n = arguments[t];
            for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        };
    var a = (function () {
      function e(e, t) {
        for (let n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }());
    var i = function (e, t, n) {
      for (let r = !0; r;) {
        let a = e;
        var i = t;
        var o = n;
        (r = !1), a === null && (a = Function.prototype);
        let l = Object.getOwnPropertyDescriptor(a, i);
        if (void 0 !== l) {
          if ('value' in l) return l.value;
          let s = l.get;
          if (void 0 === s) return;
          return s.call(o);
        }
        let u = Object.getPrototypeOf(a);
        if (u === null) return;
        (e = u), (t = i), (n = o), (r = !0), (l = u = void 0);
      }
    };
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    const l = n(0);
    var s = o(l);
    var u = o(n(15));
    var c = o(n(9));
    var d = o(n(44));
    var f = o(n(45));
    var p = o(n(46));
    (t.default = function (e) {
      const t = (function (t) {
        function n(t) {
          if (
            ((function (e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }(this, n)),
            i(Object.getPrototypeOf(n.prototype), 'constructor', this).call(
              this,
              t,
            ),
            (this.state = { isOpen: !1 }),
            !e)
          ) throw new Error('No styles supplied');
        }
        return (
          (function (e, t) {
            if (typeof t !== 'function' && t !== null) {throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t,
              );}
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            t
                && (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          }(n, l.Component)),
          a(n, [
            {
              key: 'toggleMenu',
              value() {
                let e = this;
                  var t =
                    arguments.length <= 0 || void 0 === arguments[0]
                      ? {}
                      : arguments[0];
                  var n = t.isOpen;
                  var r = t.noStateChange;
                  var a = {
                    isOpen: 'undefined' !== typeof n ? n : !this.state.isOpen,
                  };
                this.applyWrapperStyles(),
                this.setState(a, () => {
                    if (
                      (!r && e.props.onStateChange(a),
                      !e.props.disableAutoFocus)
                    )
                      if (a.isOpen) {
                        var t = document.querySelector(".bm-item");
                        t && t.focus();
                      } else
                        document.activeElement
                          ? document.activeElement.blur()
                          : document.body.blur();
                    e.timeoutId && clearTimeout(e.timeoutId),
                      (e.timeoutId = setTimeout(function() {
                        (e.timeoutId = null),
                          a.isOpen || e.applyWrapperStyles(!1);
                      }, 500));
                  });
              },
            },
            {
              key: 'open',
              value() {
                'function' === typeof this.props.onOpen
                  ? this.props.onOpen()
                  : this.toggleMenu();
              },
            },
            {
              key: 'close',
              value() {
                'function' === typeof this.props.onClose
                  ? this.props.onClose()
                  : this.toggleMenu();
              },
            },
            {
              key: 'overlayClick',
              value() {
                !0 === this.props.disableOverlayClick
                  || ('function' === typeof this.props.disableOverlayClick
                    && this.props.disableOverlayClick())
                  || this.close();
              },
            },
            {
              key: 'applyWrapperStyles',
              value() {
                let t =                    arguments.length <= 0
                    || void 0 === arguments[0]
                    || arguments[0];
                  var n = function (e, n) {
                    return e.classList[t ? 'add' : 'remove'](n);
                  };
                this.props.htmlClassName
                  && n(document.querySelector('html'), this.props.htmlClassName),
                this.props.bodyClassName
                    && n(document.querySelector('body'), this.props.bodyClassName),
                e.pageWrap
                    && this.props.pageWrapId
                    && this.handleExternalWrapper(
                      this.props.pageWrapId,
                      e.pageWrap,
                      t,
                    ),
                e.outerContainer
                    && this.props.outerContainerId
                    && this.handleExternalWrapper(
                      this.props.outerContainerId,
                      e.outerContainer,
                      t,
                    );
              },
            },
            {
              key: 'handleExternalWrapper',
              value(e, t, n) {
                let r = document.getElementById(e);
                if (r) {
                  let a = this.getStyle(t);
                  for (let i in a) a.hasOwnProperty(i) && (r.style[i] = n ? a[i] : '');
                  let o = function (e) {
                    return (e.style['overflow-x'] = n ? 'hidden' : '');
                  };
                  this.props.htmlClassName || o(document.querySelector('html')),
                  this.props.bodyClassName
                      || o(document.querySelector('body'));
                } else console.error(`Element with ID '${  e  }' not found`);
              },
            },
            {
              key: 'getStyles',
              value(t, n, a) {
                let i =                    "bm" + t.replace(t.charAt(0), t.charAt(0).toUpperCase());
                  var o = d.default[t] ? this.getStyle(d.default[t]) : {};
                return (
                  e[t] && (o = { ...o, ...this.getStyle(e[t], n + 1)}),
                  this.props.styles[i] && (o = { ...o, ...this.props.styles[i]}),
                  a && (o = { ...o, ...a}),
                  this.props.noTransition && delete o.transition,
                  o
                );
              },
            },
            {
              key: 'getStyle',
              value(e, t) {
                let n = this.props.width;
                  var r = 'string' !== typeof n ? `${n  }px` : n;
                return e(this.state.isOpen, r, this.props.right, t);
              },
            },
            {
              key: 'listenForClose',
              value(e) {
                (e = e || window.event),
                this.props.disableCloseOnEsc
                    || !this.state.isOpen
                    || ('Escape' !== e.key && e.keyCode !== 27)
                    || this.close();
              },
            },
            {
              key: 'componentDidMount',
              value() {
                this.props.customOnKeyDown
                  ? (window.onkeydown = this.props.customOnKeyDown)
                  : (window.onkeydown = this.listenForClose.bind(this)),
                this.props.isOpen
                    && this.toggleMenu({ isOpen: !0, noStateChange: !0 });
              },
            },
            {
              key: 'componentWillUnmount',
              value() {
                (window.onkeydown = null),
                this.applyWrapperStyles(!1),
                this.timeoutId && clearTimeout(this.timeoutId);
              },
            },
            {
              key: 'componentDidUpdate',
              value(t) {
                let n = this;
                'undefined' !== typeof this.props.isOpen
                && this.props.isOpen !== this.state.isOpen
                && this.props.isOpen !== t.isOpen
                  ? this.toggleMenu()
                  : e.svg
                    && (function () {
                      let t = u.default.findDOMNode(n, 'bm-morph-shape');
                        var r = e.svg.lib(t).select('path');
                      n.state.isOpen
                        ? e.svg.animate(r)
                        : setTimeout(() => {
                            r.attr("d", e.svg.pathInitial);
                          }, 300);
                    }());
              },
            },
            {
              key: 'render',
              value() {
                let t = this;
                return s.default.createElement(
                  'div',
                  null,
                  !this.props.noOverlay
                    && s.default.createElement('div', {
                      className: (
                        'bm-overlay ' + this.props.overlayClassName
                      ).trim(),
                      onClick() {
                        return t.overlayClick();
                      },
                      style: this.getStyles('overlay'),
                    }),
                  s.default.createElement(
                    'div',
                    {
                      id: this.props.id,
                      className: (
                        'bm-menu-wrap ' + this.props.className
                      ).trim(),
                      style: this.getStyles('menuWrap'),
                    },
                    e.svg
                      && s.default.createElement(
                        'div',
                        {
                          className: (
                            'bm-morph-shape ' + this.props.morphShapeClassName
                          ).trim(),
                          style: this.getStyles('morphShape'),
                        },
                        s.default.createElement(
                          'svg',
                          {
                            width: '100%',
                            height: '100%',
                            viewBox: '0 0 100 800',
                            preserveAspectRatio: 'none'
                          },
                          s.default.createElement('path', {
                            d: e.svg.pathInitial,
                          }),
                        ),
                      ),
                    s.default.createElement(
                      'div',
                      {
                        className: (
                          'bm-menu ' + this.props.menuClassName
                        ).trim(),
                        style: this.getStyles('menu'),
                      },
                      s.default.createElement(
                        'nav',
                        {
                          className: (
                            'bm-item-list ' + this.props.itemListClassName
                          ).trim(),
                          style: this.getStyles('itemList'),
                        },
                        s.default.Children.map(this.props.children, (
                          e,
                          n
                        ) => {
                          if (e) {
                            var r = {
                              key: n,
                              className: [
                                "bm-item",
                                t.props.itemClassName,
                                e.props.className
                              ]
                                .filter(function(e) {
                                  return !!e;
                                })
                                .join(" "),
                              style: t.getStyles("item", n, e.props.style),
                              tabIndex: t.state.isOpen ? 0 : -1
                            };
                            return s.default.cloneElement(e, r);
                          }
                        }),
                      ),
                    ),
                    !1 !== this.props.customCrossIcon
                      && s.default.createElement(
                        'div',
                        { style: this.getStyles('closeButton') },
                        s.default.createElement(p.default, {
                          onClick() {
                            return t.close();
                          },
                          styles: this.props.styles,
                          customIcon: this.props.customCrossIcon,
                          className: this.props.crossButtonClassName,
                          crossClassName: this.props.crossClassName,
                          tabIndex: this.state.isOpen ? 0 : -1,
                        }),
                      ),
                  ),
                  !1 !== this.props.customBurgerIcon
                    && s.default.createElement(
                      'div',
                      { style: this.getStyles('burgerIcon') },
                      s.default.createElement(f.default, {
                        onClick() {
                          return t.open();
                        },
                        styles: this.props.styles,
                        customIcon: this.props.customBurgerIcon,
                        className: this.props.burgerButtonClassName,
                        barClassName: this.props.burgerBarClassName,
                        onIconStateChange: this.props.onIconStateChange,
                      }),
                    ),
                );
              },
            },
          ]),
          n
        );
      }());
      return (
        (t.propTypes = {
          bodyClassName: c.default.string,
          burgerBarClassName: c.default.string,
          burgerButtonClassName: c.default.string,
          className: c.default.string,
          crossButtonClassName: c.default.string,
          crossClassName: c.default.string,
          customBurgerIcon: c.default.oneOfType([
            c.default.element,
            c.default.oneOf([!1]),
          ]),
          customCrossIcon: c.default.oneOfType([
            c.default.element,
            c.default.oneOf([!1]),
          ]),
          customOnKeyDown: c.default.func,
          disableAutoFocus: c.default.bool,
          disableCloseOnEsc: c.default.bool,
          disableOverlayClick: c.default.oneOfType([
            c.default.bool,
            c.default.func,
          ]),
          htmlClassName: c.default.string,
          id: c.default.string,
          isOpen: c.default.bool,
          itemClassName: c.default.string,
          itemListClassName: c.default.string,
          menuClassName: c.default.string,
          morphShapeClassName: c.default.string,
          noOverlay: c.default.bool,
          noTransition: c.default.bool,
          onClose: c.default.func,
          onIconHoverChange: c.default.func,
          onOpen: c.default.func,
          onStateChange: c.default.func,
          outerContainerId:
            e && e.outerContainer
              ? c.default.string.isRequired
              : c.default.string,
          overlayClassName: c.default.string,
          pageWrapId:
            e && e.pageWrap ? c.default.string.isRequired : c.default.string,
          right: c.default.bool,
          styles: c.default.object,
          width: c.default.oneOfType([c.default.number, c.default.string]),
        }),
        (t.defaultProps = {
          bodyClassName: '',
          burgerBarClassName: '',
          burgerButtonClassName: '',
          className: '',
          crossButtonClassName: '',
          crossClassName: '',
          disableAutoFocus: !1,
          disableCloseOnEsc: !1,
          htmlClassName: '',
          id: '',
          itemClassName: '',
          itemListClassName: '',
          menuClassName: '',
          morphShapeClassName: '',
          noOverlay: !1,
          noTransition: !1,
          onStateChange() {},
          outerContainerId: '',
          overlayClassName: '',
          pageWrapId: '',
          styles: {},
          width: 300,
          onIconHoverChange() {},
        }),
        t
      );
    }),
    (e.exports = t.default);
  },
  function (e, t, n) {
    e.exports = n(36)();
  },
  function (e, t, n) {
    

    function r(e, t) {
      if (e == null) return {};
      let n;
      var r;
      var a = {};
      var i = Object.keys(e);
      for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a;
    }
    n.d(t, 'a', () => r);
  },
  function (e, t, n) {
    

    e.exports = n(40);
  },
  function (e, t, n) {
    

    n.r(t),
    n.d(t, 'BrowserRouter', () => d),
    n.d(t, 'HashRouter', () => f),
    n.d(t, 'Link', () => b),
    n.d(t, 'NavLink', () => x);
    const r = n(2);
    n.d(t, 'MemoryRouter', () => r.a),
    n.d(t, 'Prompt', () => r.b),
    n.d(t, 'Redirect', () => r.c),
    n.d(t, 'Route', () => r.d),
    n.d(t, 'Router', () => r.e),
    n.d(t, 'StaticRouter', () => r.f),
    n.d(t, 'Switch', () => r.g),
    n.d(t, 'generatePath', () => r.i),
    n.d(t, 'matchPath', () => r.j),
    n.d(t, 'useHistory', () => r.k),
    n.d(t, 'useLocation', () => r.l),
    n.d(t, 'useParams', () => r.m),
    n.d(t, 'useRouteMatch', () => r.n),
    n.d(t, 'withRouter', () => r.o);
    let a = n(5);
    var i = n(0);
    var o = n.n(i);
    var l = n(7);
    var s = (n(9), n(4));
    var u = n(10);
    var c = n(6);
    var d = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
        return (
          ((t = e.call.apply(e, [this].concat(r)) || this).history = Object(
            l.a,
          )(t.props)),
          t
        );
      }
      return (
        Object(a.a)(t, e),
        (t.prototype.render = function () {
          return o.a.createElement(r.e, {
            history: this.history,
            children: this.props.children,
          });
        }),
        t
      );
    }(o.a.Component));
    var f = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
        return (
          ((t = e.call.apply(e, [this].concat(r)) || this).history = Object(
            l.b,
          )(t.props)),
          t
        );
      }
      return (
        Object(a.a)(t, e),
        (t.prototype.render = function () {
          return o.a.createElement(r.e, {
            history: this.history,
            children: this.props.children,
          });
        }),
        t
      );
    }(o.a.Component));
    const p = function (e, t) {
      return typeof e === 'function' ? e(t) : e;
    };
    var h = function (e, t) {
      return 'string' === typeof e ? Object(l.c)(e, null, null, t) : e;
    };
    var m = function (e) {
      return e;
    };
    var g = o.a.forwardRef;
    typeof g === 'undefined' && (g = m);
    const v = g((e, t) => {
      let n = e.innerRef;
        var r = e.navigate;
        var a = e.onClick;
        var i = Object(u.a)(e, ["innerRef", "navigate", "onClick"]);
        var l = i.target;
        var c = Object(s.a)({}, i, {
          onClick(e) {
            try {
              a && a(e);
            } catch (t) {
              throw (e.preventDefault(), t);
            }
            e.defaultPrevented ||
              0 !== e.button ||
              (l && "_self" !== l) ||
              (function(e) {
                return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
              })(e) ||
              (e.preventDefault(), r());
          }
        });
      return (c.ref = (m !== g && t) || n), o.a.createElement('a', c);
    });
    var b = g((e, t) => {
      var n = e.component;
          var a = void 0 === n ? v : n;
          var i = e.replace;
          var l = e.to;
          var d = e.innerRef;
          var f = Object(u.a)(e, ['component', 'replace', 'to', 'innerRef']);
      return o.a.createElement(r.h.Consumer, null, (e) => {
          e || Object(c.a)(!1);
          var n = e.history,
            r = h(p(l, e.location), e.location),
            u = r ? n.createHref(r) : "",
            v = Object(s.a)({}, f, {
              href: u,
              navigate: function() {
                var t = p(l, e.location);
                (i ? n.replace : n.push)(t);
              }
            });
          return (
            m !== g ? (v.ref = t || d) : (v.innerRef = d),
            o.a.createElement(a, v)
          );
        });
    });
    var y = function (e) {
      return e;
    };
    var w = o.a.forwardRef;
    typeof w === 'undefined' && (w = y);
    var x = w((e, t) => {
      let n = e['aria-current'];
        var a = void 0 === n ? "page" : n;
        var i = e.activeClassName;
        var l = void 0 === i ? "active" : i;
        var d = e.activeStyle;
        var f = e.className;
        var m = e.exact;
        var g = e.isActive;
        var v = e.location;
        var x = e.sensitive;
        var S = e.strict;
        var k = e.style;
        var E = e.to;
        var C = e.innerRef;
        var T = Object(u.a)(e, [
          'aria-current',
          'activeClassName',
          'activeStyle',
          'className',
          'exact',
          'isActive',
          'location',
          'sensitive',
          'strict',
          'style',
          'to',
          'innerRef'
        ]);
      return o.a.createElement(r.h.Consumer, null, (e) => {
        e || Object(c.a)(!1);
        var n = v || e.location,
          i = h(p(E, n), n),
          u = i.pathname,
          O = u && u.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1"),
          P = O
            ? Object(r.j)(n.pathname, {
                path: O,
                exact: m,
                sensitive: x,
                strict: S
              })
            : null,
          A = !!(g ? g(P, n) : P),
          M = A
            ? (function() {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                return t
                  .filter(function(e) {
                    return e;
                  })
                  .join(" ");
              })(f, l)
            : f,
          _ = A ? Object(s.a)({}, k, {}, d) : k,
          N = Object(s.a)(
            { "aria-current": (A && a) || null, className: M, style: _, to: i },
            T
          );
        return (
          y !== w ? (N.ref = t || C) : (N.innerRef = C), o.a.createElement(b, N)
        );
      });
    });
  },
  function (e, t, n) {
    

    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.LargeDesktop = t.SmallDesktop = t.Desktop = t.MobileAndTablet = t.Tablet = t.Mobile = t.ResponsiveComponent = void 0);
    let r;
    var a = (function () {
      function e(e, t) {
        for (let n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }());
    var i = n(0);
    var o = (r = i) && r.__esModule ? r : { default: r };
    const l = (function (e) {
      function t(e) {
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        }(this, t));
        const n = (function (e, t) {
          if (!e) {throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );}
          return !t || (typeof t !== 'object' && typeof t !== 'function')
            ? e
            : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)));
        return (
          (n.state = { display: n.breakpointActive(window.innerWidth) }),
          (n.breakpointActive = n.breakpointActive.bind(n)),
          (n.updateDimensions = n.updateDimensions.bind(n)),
          n
        );
      }
      return (
        (function (e, t) {
          if (typeof t !== 'function' && t !== null) {throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t,
            );}
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          t
              && (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        }(t, i.Component)),
        a(t, [
          {
            key: 'breakpointActive',
            value(e) {
              return (
                (!this.props.min && !this.props.max)
                || (this.props.min
                  ? this.props.max
                    ? e >= this.props.min && e < this.props.max
                    : e >= this.props.min
                  : e < this.props.max)
              );
            },
          },
          {
            key: 'updateDimensions',
            value() {
              this.state.display != this.breakpointActive(window.innerWidth)
                && this.setState({
                  display: this.breakpointActive(window.innerWidth),
                });
            },
          },
          {
            key: 'componentDidMount',
            value() {
              window.addEventListener('resize', this.updateDimensions);
            },
          },
          {
            key: 'componentWillUnmount',
            value() {
              window.removeEventListener('resize', this.updateDimensions);
            },
          },
          {
            key: 'render',
            value() {
              return this.state.display
                ? o.default.createElement('div', null, this.props.children)
                : o.default.createElement('div', null);
            },
          },
        ]),
        t
      );
    }());
    (t.ResponsiveComponent = l),
    (t.Mobile = function (e) {
      return o.default.createElement(
        l,
        { min: Number.MIN_VALUE, max: 768 },
        e.children,
      );
    }),
    (t.Tablet = function (e) {
      return o.default.createElement(l, { min: 768, max: 992 }, e.children);
    }),
    (t.MobileAndTablet = function (e) {
      return o.default.createElement(l, { max: 992 }, e.children);
    }),
    (t.Desktop = function (e) {
      return o.default.createElement(l, { min: 992 }, e.children);
    }),
    (t.SmallDesktop = function (e) {
      return o.default.createElement(l, { min: 992, max: 1200 }, e.children);
    }),
    (t.LargeDesktop = function (e) {
      return o.default.createElement(l, { min: 1200 }, e.children);
    });
  },,
  function (e, t, n) {
    

    !(function e() {
      if (
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined'
        && 'function' === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
      ) {try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
        } catch (t) {
          console.error(t);
        }}
    }()),
    (e.exports = n(32));
  },
  function (e, t, n) {
    

    (function (e) {
      const r = n(0);
      var a = n.n(r);
      var i = n(5);
      var o = n(9);
      var l = n.n(o);
      var s = 1073741823;
      var u = "undefined" !== typeof globalThis
        ? globalThis
        : typeof window !== 'undefined'
          ? window
          : typeof e !== 'undefined'
            ? e
            : {};
      const c = a.a.createContext
        || function (e, t) {
          let n;
          var a;
          var o =              "__create-react-context-"
              + (function () {
                let e = '__global_unique_id__';
                return (u[e] = (u[e] || 0) + 1);
              }()) +
              '__';
          var c = (function (e) {
            function n() {
              let t;
              return (
                ((t = e.apply(this, arguments) || this).emitter = (function (
                  e,
                ) {
                  let t = [];
                  return {
                    on(e) {
                      t.push(e);
                    },
                    off(e) {
                      t = t.filter((t) => {
                          return t !== e;
                        });
                    },
                    get() {
                      return e;
                    },
                    set(n, r) {
                      (e = n),
                      t.forEach((t) => {
                            return t(e, r);
                          });
                    },
                  };
                }(t.props.value))),
                t
              );
            }
            Object(i.a)(n, e);
            let r = n.prototype;
            return (
              (r.getChildContext = function () {
                let e;
                return ((e = {})[o] = this.emitter), e;
              }),
              (r.componentWillReceiveProps = function (e) {
                if (this.props.value !== e.value) {
                  let n;
                  var r = this.props.value;
                  var a = e.value;
                  ((i = r) === (o = a)
                    ? i !== 0 || 1 / i === 1 / o
                    : i !== i && o !== o)
                    ? (n = 0)
                    : ((n = typeof t === 'function' ? t(r, a) : s),
                    0 !== (n |= 0) && this.emitter.set(e.value, n));
                }
                let i; let 
                  o;
              }),
              (r.render = function () {
                return this.props.children;
              }),
              n
            );
          }(r.Component));
          c.childContextTypes = (((n = {})[o] = l.a.object.isRequired), n);
          const d = (function (t) {
            function n() {
              let e;
              return (
                ((e = t.apply(this, arguments) || this).state = {
                  value: e.getValue(),
                }),
                (e.onUpdate = function (t, n) {
                  ((0 | e.observedBits) & n) !== 0
                    && e.setState({ value: e.getValue() });
                }),
                e
              );
            }
            Object(i.a)(n, t);
            const r = n.prototype;
            return (
              (r.componentWillReceiveProps = function (e) {
                const t = e.observedBits;
                this.observedBits = void 0 === t || t === null ? s : t;
              }),
              (r.componentDidMount = function () {
                this.context[o] && this.context[o].on(this.onUpdate);
                const e = this.props.observedBits;
                this.observedBits = void 0 === e || e === null ? s : e;
              }),
              (r.componentWillUnmount = function () {
                this.context[o] && this.context[o].off(this.onUpdate);
              }),
              (r.getValue = function () {
                return this.context[o] ? this.context[o].get() : e;
              }),
              (r.render = function () {
                return ((e = this.props.children), Array.isArray(e) ? e[0] : e)(
                  this.state.value,
                );
                let e;
              }),
              n
            );
          }(r.Component));
          return (
            (d.contextTypes = (((a = {})[o] = l.a.object), a)),
            { Provider: c, Consumer: d }
          );
        };
      t.a = c;
    }.call(this, n(38)));
  },
  function (e, t, n) {
    const r = n(39);
    (e.exports = p),
    (e.exports.parse = i),
    (e.exports.compile = function (e, t) {
      return l(i(e, t), t);
    }),
    (e.exports.tokensToFunction = l),
    (e.exports.tokensToRegExp = f);
    const a = new RegExp(
      [
        '(\\\\.)',
        '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))',
      ].join('|'),
      'g',
    );
    function i(e, t) {
      for (
        var n, r = [], i = 0, o = 0, l = '', c = (t && t.delimiter) || '/';
        (n = a.exec(e)) != null;

      ) {
        const d = n[0];
        var f = n[1];
        var p = n.index;
        if (((l += e.slice(o, p)), (o = p + d.length), f)) l += f[1];
        else {
          const h = e[o];
          var m = n[2];
          var g = n[3];
          var v = n[4];
          var b = n[5];
          var y = n[6];
          var w = n[7];
          l && (r.push(l), (l = ''));
          const x = m != null && h != null && h !== m;
          var S = '+' === y || '*' === y;
          var k = '?' === y || '*' === y;
          var E = n[2] || c;
          var C = v || b;
          r.push({
            name: g || i++,
            prefix: m || '',
            delimiter: E,
            optional: k,
            repeat: S,
            partial: x,
            asterisk: !!w,
            pattern: C ? u(C) : w ? '.*' : `[^${  s(E)  }]+?`
          });
        }
      }
      return o < e.length && (l += e.substr(o)), l && r.push(l), r;
    }
    function o(e) {
      return encodeURI(e).replace(/[\/?#]/g, (e) => (
          "%" +
          e
            .charCodeAt(0)
            .toString(16)
            .toUpperCase()
        ));
    }
    function l(e, t) {
      for (var n = new Array(e.length), a = 0; a < e.length; a++) 'object' === typeof e[a]
          && (n[a] = new RegExp(`^(?:${  e[a].pattern  })$`, d(t)));
      return function (t, a) {
        for (
          var i = '',
            l = t || {},
            s = (a || {}).pretty ? o : encodeURIComponent,
            u = 0;
          u < e.length;
          u++
        ) {
          const c = e[u];
          if (typeof c !== 'string') {
            var d;
            var f = l[c.name];
            if (f == null) {
              if (c.optional) {
                c.partial && (i += c.prefix);
                continue;
              }
              throw new TypeError(`Expected "${c.name }" to be defined`);
            }
            if (r(f)) {
              if (!c.repeat) {throw new TypeError(
                  `Expected "${ 
                    c.name 
                    }" to not repeat, but received \`${ 
                    JSON.stringify(f) 
                    }\``
                );}
              if (f.length === 0) {
                if (c.optional) continue;
                throw new TypeError(
                  `Expected "${ c.name}" to not be empty`,
                );
              }
              for (let p = 0; p < f.length; p++) {
                if (((d = s(f[p])), !n[u].test(d))) {throw new TypeError(
                    `Expected all "${ 
                      c.name 
                      }" to match "${ 
                      c.pattern 
                      }", but received \`${ 
                      JSON.stringify(d) 
                      }\``
                  );}
                i += (p === 0 ? c.prefix : c.delimiter) + d;
              }
            } else {
              if (
                ((d = c.asterisk
                  ? encodeURI(f).replace(/[?#]/g, (e) => (
                        "%" +
                        e
                          .charCodeAt(0)
                          .toString(16)
                          .toUpperCase()
                      ))
                  : s(f)),
                !n[u].test(d))
              ) {throw new TypeError(
                  `Expected "${ 
                    c.name 
                    }" to match "${ 
                    c.pattern 
                    }", but received "${ 
                    d 
                    }"`
                );}
              i += c.prefix + d;
            }
          } else i += c;
        }
        return i;
      };
    }
    function s(e) {
      return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
    }
    function u(e) {
      return e.replace(/([=!:$\/()])/g, '\\$1');
    }
    function c(e, t) {
      return (e.keys = t), e;
    }
    function d(e) {
      return e && e.sensitive ? '' : 'i';
    }
    function f(e, t, n) {
      r(t) || ((n = t || n), (t = []));
      for (
        var a = (n = n || {}).strict, i = !1 !== n.end, o = '', l = 0;
        l < e.length;
        l++
      ) {
        const u = e[l];
        if (typeof u === 'string') o += s(u);
        else {
          const f = s(u.prefix);
          var p = `(?:${  u.pattern  })`;
          t.push(u),
          u.repeat && (p += `(?:${  f  }${p  })*`),
          (o += p = u.optional
            ? u.partial
              ? `${f}(${ p})?`
              : `(?:${  f  }(${  p  }))?`
            : `${f }(${ p})`);
        }
      }
      const h = s(n.delimiter || '/');
      var m = o.slice(-h.length) === h;
      return (
        a || (o = `${m ? o.slice(0, -h.length) : o}(?:${h}(?=$))?`),
        (o += i ? '$' : a && m ? '' : `(?=${  h  }|$)`),
        c(new RegExp(`^${  o}`, d(n)), t)
      );
    }
    function p(e, t, n) {
      return (
        r(t) || ((n = t || n), (t = [])),
        (n = n || {}),
        e instanceof RegExp
          ? (function (e, t) {
            let n = e.source.match(/\((?!\?)/g);
            if (n) {for (let r = 0; r < n.length; r++) t.push({
                  name: r,
                  prefix: null,
                  delimiter: null,
                  optional: !1,
                  repeat: !1,
                  partial: !1,
                  asterisk: !1,
                  pattern: null,
                });}
            return c(e, t);
          }(e, t))
          : r(e)
            ? (function (e, t, n) {
              for (var r = [], a = 0; a < e.length; a++) r.push(p(e[a], t, n).source);
              return c(new RegExp(`(?:${  r.join('|')  })`, d(n)), t);
            }(e, t, n))
            : (function (e, t, n) {
              return f(i(e, n), t, n);
            }(e, t, n))
      );
    }
  },
  function (e, t, n) {
    e.exports = (function e(t) {
      

      const n = /^\0+/g;
      var r = /[\0\r\f]/g;
      var a = /: */g;
      var i = /zoo|gra/;
      var o = /([,: ])(transform)/g;
      var l = /,+\s*(?![^(]*[)])/g;
      var s = / +\s*(?![^(]*[)])/g;
      var u = / *[\0] */g;
      var c = /,\r+?/g;
      var d = /([\t\r\n ])*\f?&/g;
      var f = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g;
      var p = /\W+/g;
      var h = /@(k\w+)\s*(\S*)\s*/;
      var m = /::(place)/g;
      var g = /:(read-only)/g;
      var v = /\s+(?=[{\];=:>])/g;
      var b = /([[}=:>])\s+/g;
      var y = /(\{[^{]+?);(?=\})/g;
      var w = /\s{2,}/g;
      var x = /([^\(])(:+) */g;
      var S = /[svh]\w+-[tblr]{2}/;
      var k = /\(\s*(.*)\s*\)/g;
      var E = /([\s\S]*?);/g;
      var C = /-self|flex-/g;
      var T = /[^]*?(:[rp][el]a[\w-]+)[^]*/;
      var O = /stretch|:\s*\w+\-(?:conte|avail)/;
      var P = /([^-])(image-set\()/;
      var A = '-webkit-';
      var M = '-moz-';
      var _ = '-ms-';
      var N = 59;
      var F = 125;
      var D = 123;
      var I = 40;
      var j = 41;
      var R = 91;
      var z = 93;
      var B = 10;
      var L = 13;
      var U = 9;
      var H = 64;
      var W = 32;
      var V = 38;
      var q = 45;
      var G = 95;
      var Y = 42;
      var K = 44;
      var Q = 58;
      var $ = 39;
      var X = 34;
      var Z = 47;
      var J = 62;
      var ee = 43;
      var te = 126;
      var ne = 0;
      var re = 12;
      var ae = 11;
      var ie = 107;
      var oe = 109;
      var le = 115;
      var se = 112;
      var ue = 111;
      var ce = 105;
      var de = 99;
      var fe = 100;
      var pe = 112;
      var he = 1;
      var me = 1;
      var ge = 0;
      var ve = 1;
      var be = 1;
      var ye = 1;
      var we = 0;
      var xe = 0;
      var Se = 0;
      var ke = [];
      var Ee = [];
      var Ce = 0;
      var Te = null;
      var Oe = -2;
      var Pe = -1;
      var Ae = 0;
      var Me = 1;
      var _e = 2;
      var Ne = 3;
      var Fe = 0;
      var De = 1;
      var Ie = '';
      var je = '';
      var Re = '';
      function ze(e, t, a, i, o) {
        for (
          var l,
            s,
            c = 0,
            d = 0,
            f = 0,
            p = 0,
            v = 0,
            b = 0,
            y = 0,
            w = 0,
            S = 0,
            E = 0,
            C = 0,
            T = 0,
            O = 0,
            P = 0,
            G = 0,
            we = 0,
            Ee = 0,
            Te = 0,
            Oe = 0,
            Pe = a.length,
            Le = Pe - 1,
            Ge = '',
            Ye = '',
            Ke = '',
            Qe = '',
            $e = '',
            Xe = '';
          G < Pe;

        ) {
          if (
            ((y = a.charCodeAt(G)),
            G === Le
              && d + p + f + c !== 0
              && (d !== 0 && (y = d === Z ? B : Z), (p = f = c = 0), Pe++, Le++),
            d + p + f + c === 0)
          ) {
            if (
              G === Le
              && (we > 0 && (Ye = Ye.replace(r, '')), Ye.trim().length > 0)
            ) {
              switch (y) {
                case W:
                case U:
                case N:
                case L:
                case B:
                  break;
                default:
                  Ye += a.charAt(G);
              }
              y = N;
            }
            if (Ee === 1) {switch (y) {
                case D:
                case F:
                case N:
                case X:
                case $:
                case I:
                case j:
                case K:
                  Ee = 0;
                case U:
                case L:
                case B:
                case W:
                  break;
                default:
                  for (Ee = 0, Oe = G, v = y, G--, y = N; Oe < Pe;) switch (a.charCodeAt(Oe++)) {
                      case B:
                      case L:
                      case N:
                        ++G, (y = v), (Oe = Pe);
                        break;
                      case Q:
                        we > 0 && (++G, (y = v));
                      case D:
                        Oe = Pe;
                    }
              }}
            switch (y) {
              case D:
                for (
                  v = (Ye = Ye.trim()).charCodeAt(0), C = 1, Oe = ++G;
                  G < Pe;

                ) {
                  switch ((y = a.charCodeAt(G))) {
                    case D:
                      C++;
                      break;
                    case F:
                      C--;
                      break;
                    case Z:
                      switch ((b = a.charCodeAt(G + 1))) {
                        case Y:
                        case Z:
                          G = qe(b, G, Le, a);
                      }
                      break;
                    case R:
                      y++;
                    case I:
                      y++;
                    case X:
                    case $:
                      for (; G++ < Le && a.charCodeAt(G) !== y;);
                  }
                  if (C === 0) break;
                  G++;
                }
                switch (
                  ((Ke = a.substring(Oe, G)),
                  v === ne
                    && (v = (Ye = Ye.replace(n, '').trim()).charCodeAt(0)),
                  v)
                ) {
                  case H:
                    switch (
                      (we > 0 && (Ye = Ye.replace(r, '')),
                      (b = Ye.charCodeAt(1)))
                    ) {
                      case fe:
                      case oe:
                      case le:
                      case q:
                        l = t;
                        break;
                      default:
                        l = ke;
                    }
                    if (
                      ((Oe = (Ke = ze(t, l, Ke, b, o + 1)).length),
                      Se > 0 && Oe === 0 && (Oe = Ye.length),
                      Ce > 0
                        && ((l = Be(ke, Ye, Te)),
                        (s = Ve(Ne, Ke, l, t, me, he, Oe, b, o, i)),
                        (Ye = l.join('')),
                        void 0 !== s
                          && (Oe = (Ke = s.trim()).length) === 0
                          && ((b = 0), (Ke = ''))),
                      Oe > 0)
                    ) {switch (b) {
                        case le:
                          Ye = Ye.replace(k, We);
                        case fe:
                        case oe:
                        case q:
                          Ke = `${Ye  }{${  Ke  }}`;
                          break;
                        case ie:
                          (Ke =                            (Ye = Ye.replace(h, '$1 $2' + (De > 0 ? Ie : '')))
                            + "{"
                            + Ke
                            + "}"),
                          (Ke =                              1 === be || (be === 2 && He('@' + Ke, 3))
                                ? '@' + A + Ke + '@' + Ke
                                : '@' + Ke);
                          break;
                        default:
                          (Ke = Ye + Ke), i === pe && ((Qe += Ke), (Ke = ''));
                      }}
                    else Ke = '';
                    break;
                  default:
                    Ke = ze(t, Be(t, Ye, Te), Ke, i, o + 1);
                }
                ($e += Ke),
                (T = 0),
                (Ee = 0),
                (P = 0),
                (we = 0),
                (Te = 0),
                (O = 0),
                (Ye = ''),
                (Ke = ''),
                (y = a.charCodeAt(++G));
                break;
              case F:
              case N:
                if (
                  (Oe = (Ye = (we > 0 ? Ye.replace(r, '') : Ye).trim())
                    .length) > 1
                ) {switch (
                    (P === 0 &&
                      ((v = Ye.charCodeAt(0)) === q || (v > 96 && v < 123))
                      && (Oe = (Ye = Ye.replace(' ', ':')).length),
                    Ce > 0
                      && void 0
                        !== (s = Ve(Me, Ye, t, e, me, he, Qe.length, i, o, i))
                      && 0 === (Oe = (Ye = s.trim()).length)
                      && (Ye = '\0\0'),
                    (v = Ye.charCodeAt(0)),
                    (b = Ye.charCodeAt(1)),
                    v)
                  ) {
                    case ne:
                      break;
                    case H:
                      if (b === ce || b === de) {
                        Xe += Ye + a.charAt(G);
                        break;
                      }
                    default:
                      if (Ye.charCodeAt(Oe - 1) === Q) break;
                      Qe += Ue(Ye, v, b, Ye.charCodeAt(2));
                  }}
                (T = 0),
                (Ee = 0),
                (P = 0),
                (we = 0),
                (Te = 0),
                (Ye = ''),
                (y = a.charCodeAt(++G));
            }
          }
          switch (y) {
            case L:
            case B:
              if (d + p + f + c + xe === 0) {switch (E) {
                  case j:
                  case $:
                  case X:
                  case H:
                  case te:
                  case J:
                  case Y:
                  case ee:
                  case Z:
                  case q:
                  case Q:
                  case K:
                  case N:
                  case D:
                  case F:
                    break;
                  default:
                    P > 0 && (Ee = 1);
                }}
              d === Z
                ? (d = 0)
                : ve + T === 0
                  && i !== ie
                  && Ye.length > 0
                  && ((we = 1), (Ye += '\0')),
              Ce * Fe > 0 && Ve(Ae, Ye, t, e, me, he, Qe.length, i, o, i),
              (he = 1),
              me++;
              break;
            case N:
            case F:
              if (d + p + f + c === 0) {
                he++;
                break;
              }
            default:
              switch ((he++, (Ge = a.charAt(G)), y)) {
                case U:
                case W:
                  if (p + c + d === 0) {switch (w) {
                      case K:
                      case Q:
                      case U:
                      case W:
                        Ge = '';
                        break;
                      default:
                        y !== W && (Ge = ' ');
                    }}
                  break;
                case ne:
                  Ge = '\\0';
                  break;
                case re:
                  Ge = '\\f';
                  break;
                case ae:
                  Ge = '\\v';
                  break;
                case V:
                  p + d + c === 0
                    && ve > 0
                    && ((Te = 1), (we = 1), (Ge = `\f${  Ge}`));
                  break;
                case 108:
                  if (p + d + c + ge === 0 && P > 0) {switch (G - P) {
                      case 2:
                        w === se && a.charCodeAt(G - 3) === Q && (ge = w);
                      case 8:
                        S === ue && (ge = S);
                    }}
                  break;
                case Q:
                  p + d + c === 0 && (P = G);
                  break;
                case K:
                  d + f + p + c === 0 && ((we = 1), (Ge += '\r'));
                  break;
                case X:
                case $:
                  d === 0 && (p = p === y ? 0 : p === 0 ? y : p);
                  break;
                case R:
                  p + d + f === 0 && c++;
                  break;
                case z:
                  p + d + f === 0 && c--;
                  break;
                case j:
                  p + d + c === 0 && f--;
                  break;
                case I:
                  if (p + d + c === 0) {
                    if (T === 0) {switch (2 * w + 3 * S) {
                        case 533:
                          break;
                        default:
                          (C = 0), (T = 1);
                      }}
                    f++;
                  }
                  break;
                case H:
                  d + f + p + c + P + O === 0 && (O = 1);
                  break;
                case Y:
                case Z:
                  if (p + c + f > 0) break;
                  switch (d) {
                    case 0:
                      switch (2 * y + 3 * a.charCodeAt(G + 1)) {
                        case 235:
                          d = Z;
                          break;
                        case 220:
                          (Oe = G), (d = Y);
                      }
                      break;
                    case Y:
                      y === Z
                        && w === Y
                        && Oe + 2 !== G
                        && (a.charCodeAt(Oe + 2) === 33
                          && (Qe += a.substring(Oe, G + 1)),
                        (Ge = ''),
                        (d = 0));
                  }
              }
              if (d === 0) {
                if (ve + p + c + O === 0 && i !== ie && y !== N) {switch (y) {
                    case K:
                    case te:
                    case J:
                    case ee:
                    case j:
                    case I:
                      if (T === 0) {
                        switch (w) {
                          case U:
                          case W:
                          case B:
                          case L:
                            Ge += '\0';
                            break;
                          default:
                            Ge = '\0' + Ge + (y === K ? '' : '\0');
                        }
                        we = 1;
                      } else switch (y) {
                          case I:
                            P + 7 === G && w === 108 && (P = 0), (T = ++C);
                            break;
                          case j:
                            (T = --C) == 0 && ((we = 1), (Ge += '\0'));
                        }
                      break;
                    case U:
                    case W:
                      switch (w) {
                        case ne:
                        case D:
                        case F:
                        case N:
                        case K:
                        case re:
                        case U:
                        case W:
                        case B:
                        case L:
                          break;
                        default:
                          T === 0 && ((we = 1), (Ge += '\0'));
                      }
                  }}
                (Ye += Ge), y !== W && y !== U && (E = y);
              }
          }
          (S = w), (w = y), G++;
        }
        if (
          ((Oe = Qe.length),
          Se > 0
            && Oe === 0
            && $e.length === 0
            && (t[0].length === 0) == 0
            && (i !== oe || (t.length === 1 && (ve > 0 ? je : Re) === t[0]))
            && (Oe = t.join(',').length + 2),
          Oe > 0)
        ) {
          if (
            ((l = 0 === ve && i !== ie
              ? (function (e) {
                for (
                  var t, n, a = 0, i = e.length, o = Array(i);
                  a < i;
                  ++a
                ) {
                  for (
                    var l = e[a].split(u),
                      s = '',
                      c = 0,
                      d = 0,
                      f = 0,
                      p = 0,
                      h = l.length;
                    c < h;
                    ++c
                  ) {if (!((d = (n = l[c]).length) === 0 && h > 1)) {
                        if (
                          ((f = s.charCodeAt(s.length - 1)),
                          (p = n.charCodeAt(0)),
                          (t = ''),
                          0 !== c)
                        ) switch (f) {
                            case Y:
                            case te:
                            case J:
                            case ee:
                            case W:
                            case I:
                              break;
                            default:
                              t = ' ';
                          }
                        switch (p) {
                          case V:
                            n = t + je;
                          case te:
                          case J:
                          case ee:
                          case W:
                          case j:
                          case I:
                            break;
                          case R:
                            n = t + n + je;
                            break;
                          case Q:
                            switch (
                              2 * n.charCodeAt(1)
                                + 3 * n.charCodeAt(2)
                            ) {
                              case 530:
                                if (ye > 0) {
                                  n = t + n.substring(8, d - 1);
                                  break;
                                }
                              default:
                                (c < 1 || l[c - 1].length < 1)
                                    && (n = t + je + n);
                            }
                            break;
                          case K:
                            t = '';
                          default:
                            n =                                d > 1 && n.indexOf(':') > 0
                                  ? t + n.replace(x, '$1' + je + '$2')
                                  : t + n + je;
                        }
                        s += n;
                      }}
                  o[a] = s.replace(r, '').trim();
                }
                return o;
              }(t))
              : t),
            Ce > 0
              && void 0 !== (s = Ve(_e, Qe, l, e, me, he, Oe, i, o, i))
              && (Qe = s).length === 0)
          ) return Xe + Qe + $e;
          if (((Qe = `${l.join(',') }{${ Qe }}`), be * ge != 0)) {
            switch ((be !== 2 || He(Qe, 2) || (ge = 0), ge)) {
              case ue:
                Qe = Qe.replace(g, `:${  M  }$1`) + Qe;
                break;
              case se:
                Qe = Qe.replace(m, `::${  A  }input-$1`)
                  + Qe.replace(m, `::${  M  }$1`)
                  + Qe.replace(m, `:${  _  }input-$1`)
                  + Qe;
            }
            ge = 0;
          }
        }
        return Xe + Qe + $e;
      }
      function Be(e, t, n) {
        const r = t.trim().split(c);
        var a = r;
        var i = r.length;
        var o = e.length;
        switch (o) {
          case 0:
          case 1:
            for (var l = 0, s = o === 0 ? '' : `${e[0]} `; l < i; ++l) a[l] = Le(s, a[l], n, o).trim();
            break;
          default:
            l = 0;
            var u = 0;
            for (a = []; l < i; ++l) for (let d = 0; d < o; ++d) a[u++] = Le(`${e[d]} `, r[l], n, o).trim();
        }
        return a;
      }
      function Le(e, t, n, r) {
        let a = t;
        var i = a.charCodeAt(0);
        switch ((i < 33 && (i = (a = a.trim()).charCodeAt(0)), i)) {
          case V:
            switch (ve + r) {
              case 0:
              case 1:
                if (e.trim().length === 0) break;
              default:
                return a.replace(d, `$1${  e.trim()}`);
            }
            break;
          case Q:
            switch (a.charCodeAt(1)) {
              case 103:
                if (ye > 0 && ve > 0) return a.replace(f, '$1').replace(d, `$1${  Re}`);
                break;
              default:
                return e.trim() + a.replace(d, `$1${  e.trim()}`);
            }
          default:
            if (n * ve > 0 && a.indexOf('\f') > 0) {return a.replace(
                d,
                (e.charCodeAt(0) === Q ? '' : '$1') + e.trim(),
              );}
        }
        return e + a;
      }
      function Ue(e, t, n, r) {
        let u;
        var c = 0;
        var d = `${e  };`;
        var f = 2 * t + 3 * n + 4 * r;
        if (f === 944) {return (function (e) {
            let t = e.length;
              var n = e.indexOf(":", 9) + 1;
              var r = e.substring(0, n).trim();
              var a = e.substring(n, t - 1).trim();
            switch (e.charCodeAt(9) * De) {
              case 0:
                break;
              case q:
                if (e.charCodeAt(10) !== 110) break;
              default:
                var i = a.split(((a = ''), l));
                  var o = 0;
                for (n = 0, t = i.length; o < t; n = 0, ++o) {
                  for (var u = i[o], c = u.split(s); (u = c[n]);) {
                    let d = u.charCodeAt(0);
                    if (
                      De === 1 &&
                      ((d > H && d < 90)
                        || (d > 96 && d < 123)
                        || d === G
                        || (d === q && u.charCodeAt(1) !== q))
                    ) switch (isNaN(parseFloat(u)) + (u.indexOf("(") !== -1)) {
                        case 1:
                          switch (u) {
                            case 'infinite':
                            case 'alternate':
                            case 'backwards':
                            case 'running':
                            case 'normal':
                            case 'forwards':
                            case 'both':
                            case 'none':
                            case 'linear':
                            case 'ease':
                            case 'ease-in':
                            case 'ease-out':
                            case 'ease-in-out':
                            case 'paused':
                            case 'reverse':
                            case 'alternate-reverse':
                            case 'inherit':
                            case 'initial':
                            case 'unset':
                            case 'step-start':
                            case 'step-end':
                              break;
                            default:
                              u += Ie;
                          }
                      }
                    c[n++] = u;
                  }
                  a += (o === 0 ? '' : ',') + c.join(' ');
                }
            }
            return (
              (a = `${r + a  };`),
              be === 1 || (be === 2 && He(a, 1)) ? A + a + a : a
            );
          }(d));}
        if (be === 0 || (be === 2 && !He(d, 1))) return d;
        switch (f) {
          case 1015:
            return d.charCodeAt(10) === 97 ? A + d + d : d;
          case 951:
            return d.charCodeAt(3) === 116 ? A + d + d : d;
          case 963:
            return d.charCodeAt(5) === 110 ? A + d + d : d;
          case 1009:
            if (d.charCodeAt(4) !== 100) break;
          case 969:
          case 942:
            return A + d + d;
          case 978:
            return A + d + M + d + d;
          case 1019:
          case 983:
            return A + d + M + d + _ + d + d;
          case 883:
            return d.charCodeAt(8) === q
              ? A + d + d
              : d.indexOf('image-set(', 11) > 0
                ? d.replace(P, `$1${  A  }$2`) + d
                : d;
          case 932:
            if (d.charCodeAt(4) === q) {switch (d.charCodeAt(5)) {
                case 103:
                  return (
                    `${A 
                    }box-${ 
                    d.replace("-grow", "") 
                    }${A 
                    }${d 
                    }${_ 
                    }${d.replace("grow", "positive") 
                    }${d}`
                  );
                case 115:
                  return A + d + _ + d.replace('shrink', 'negative') + d;
                case 98:
                  return A + d + _ + d.replace('basis', 'preferred-size') + d;
              }}
            return A + d + _ + d + d;
          case 964:
            return `${A + d + _ }flex-${ d}${d}`;
          case 1023:
            if (d.charCodeAt(8) !== 99) break;
            return (
              (u = d
                .substring(d.indexOf(':', 15))
                .replace('flex-', '')
                .replace('space-between', 'justify')),
              `${A}box-pack${u }${A}${d }${_}flex-pack${ u}${d}`
            );
          case 1005:
            return i.test(d)
              ? d.replace(a, `:${  A}`) + d.replace(a, `:${  M}`) + d
              : d;
          case 1e3:
            switch (
              ((c = (u = d.substring(13).trim()).indexOf('-') + 1),
              u.charCodeAt(0) + u.charCodeAt(c))
            ) {
              case 226:
                u = d.replace(S, 'tb');
                break;
              case 232:
                u = d.replace(S, 'tb-rl');
                break;
              case 220:
                u = d.replace(S, 'lr');
                break;
              default:
                return d;
            }
            return A + d + _ + u + d;
          case 1017:
            if (d.indexOf('sticky', 9) === -1) return d;
          case 975:
            switch (
              ((c = (d = e).length - 10),
              (f = (u = (d.charCodeAt(c) === 33 ? d.substring(0, c) : d)
                .substring(e.indexOf(':', 7) + 1)
                .trim()).charCodeAt(0)
                + (0 | u.charCodeAt(7))))
            ) {
              case 203:
                if (u.charCodeAt(8) < 111) break;
              case 115:
                d = `${d.replace(u, A + u)};${ d}`;
                break;
              case 207:
              case 102:
                d = d.replace(u, `${A + (f > 102 ? 'inline-' : '')}box`)
                  + ';'
                  + d.replace(u, A + u)
                  + ';'
                  + d.replace(u, `${_ + u }box`)
                  + ';'
                  + d;
            }
            return `${d };`;
          case 938:
            if (d.charCodeAt(5) === q) {switch (d.charCodeAt(6)) {
                case 105:
                  return (
                    (u = d.replace('-items', '')),
                    `${A + d + A  }box-${  u  }${_  }flex-${  u  }${d}`
                  );
                case 115:
                  return `${A + d + _  }flex-item-${  d.replace(C, "")  }${d}`;
                default:
                  return (
                    `${A +
                    d +
                    _ 
                    }flex-line-pack${ 
                    d.replace("align-content", "").replace(C, "") 
                    }${d}`
                  );
              }}
            break;
          case 973:
          case 989:
            if (d.charCodeAt(3) !== q || d.charCodeAt(4) === 122) break;
          case 931:
          case 953:
            if (!0 === O.test(e)) {return (u = e.substring(e.indexOf(":") + 1)).charCodeAt(0) === 115
                ? Ue(e.replace('stretch', 'fill-available'), t, n, r).replace(
                  ":fill-available",
                  ":stretch",
                )
                : d.replace(u, A + u)
                    + d.replace(u, M + u.replace('fill-', ''))
                    + d;}
            break;
          case 962:
            if (
              ((d = A + d + (d.charCodeAt(5) === 102 ? _ + d : '') + d),
              n + r === 211
                && d.charCodeAt(13) === 105
                && d.indexOf('transform', 10) > 0)
            ) {return (
                d
                  .substring(0, d.indexOf(';', 27) + 1)
                  .replace(o, '$1' + A + '$2') + d
              );}
        }
        return d;
      }
      function He(e, t) {
        const n = e.indexOf(t === 1 ? ':' : '{');
        var r = e.substring(0, t !== 3 ? n : 10);
        var a = e.substring(n + 1, e.length - 1);
        return Te(t !== 2 ? r : r.replace(T, '$1'), a, t);
      }
      function We(e, t) {
        const n = Ue(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
        return n !== `${t };`
          ? n.replace(E, ' or ($1)').substring(4)
          : `(${  t  })`;
      }
      function Ve(e, t, n, r, a, i, o, l, s, u) {
        for (var c, d = 0, f = t; d < Ce; ++d) {switch ((c = Ee[d].call(Ye, e, f, n, r, a, i, o, l, s, u))) {
            case void 0:
            case !1:
            case !0:
            case null:
              break;
            default:
              f = c;
          }}
        if (f !== t) return f;
      }
      function qe(e, t, n, r) {
        for (var a = t + 1; a < n; ++a) {switch (r.charCodeAt(a)) {
            case Z:
              if (e === Y && r.charCodeAt(a - 1) === Y && t + 2 !== a) return a + 1;
              break;
            case B:
              if (e === Z) return a + 1;
          }}
        return a;
      }
      function Ge(e) {
        for (const t in e) {
          const n = e[t];
          switch (t) {
            case 'keyframe':
              De = 0 | n;
              break;
            case 'global':
              ye = 0 | n;
              break;
            case 'cascade':
              ve = 0 | n;
              break;
            case 'compress':
              we = 0 | n;
              break;
            case 'semicolon':
              xe = 0 | n;
              break;
            case 'preserve':
              Se = 0 | n;
              break;
            case 'prefix':
              (Te = null),
              n
                ? typeof n !== 'function'
                  ? (be = 1)
                  : ((be = 2), (Te = n))
                : (be = 0);
          }
        }
        return Ge;
      }
      function Ye(t, n) {
        if (void 0 !== this && this.constructor === Ye) return e(t);
        let a = t;
        var i = a.charCodeAt(0);
        i < 33 && (i = (a = a.trim()).charCodeAt(0)),
        De > 0 && (Ie = a.replace(p, i === R ? '' : '-')),
        (i = 1),
        ve === 1 ? (Re = a) : (je = a);
        let o;
        var l = [Re];
        Ce > 0
          && void 0 !== (o = Ve(Pe, n, l, l, me, he, 0, 0, 0, 0))
          && 'string' === typeof o
          && (n = o);
        let s = ze(ke, l, n, 0, 0);
        return (
          Ce > 0
            && void 0 !== (o = Ve(Oe, s, l, l, me, he, s.length, 0, 0, 0))
            && 'string' !== typeof (s = o)
            && (i = 0),
          (Ie = ''),
          (Re = ''),
          (je = ''),
          (ge = 0),
          (me = 1),
          (he = 1),
          we * i == 0
            ? s
            : s
              .replace(r, '')
              .replace(v, '')
              .replace(b, '$1')
              .replace(y, '$1')
              .replace(w, ' ')
        );
      }
      return (
        (Ye.use = function e(t) {
          switch (t) {
            case void 0:
            case null:
              Ce = Ee.length = 0;
              break;
            default:
              if (typeof t === 'function') Ee[Ce++] = t;
              else if (typeof t === 'object') for (let n = 0, r = t.length; n < r; ++n) e(t[n]);
              else Fe = 0 | !!t;
          }
          return e;
        }),
        (Ye.set = Ge),
        void 0 !== t && Ge(t),
        Ye
      );
    }(null));
  },
  function (e, t, n) {
    

    function r(e, t) {
      if (e.length !== t.length) return !1;
      for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
      return !0;
    }
    t.a = function (e, t) {
      let n;
      void 0 === t && (t = r);
      let a;
      var i = [];
      var o = !1;
      return function () {
        for (var r = [], l = 0; l < arguments.length; l++) r[l] = arguments[l];
        return o && n === this && t(r, i)
          ? a
          : ((a = e.apply(this, r)), (o = !0), (n = this), (i = r), a);
      };
    };
  },
  function (e, t, n) {
    

    const r = Object.getOwnPropertySymbols;
    var a = Object.prototype.hasOwnProperty;
    var i = Object.prototype.propertyIsEnumerable;
    function o(e) {
      if (e === null || void 0 === e) {throw new TypeError(
          'Object.assign cannot be called with null or undefined'
        );}
      return Object(e);
    }
    e.exports = (function () {
      try {
        if (!Object.assign) return !1;
        const e = new String('abc');
        if (((e[5] = 'de'), Object.getOwnPropertyNames(e)[0] === '5')) return !1;
        for (var t = {}, n = 0; n < 10; n++) t[`_${  String.fromCharCode(n)}`] = n;
        if (
          Object.getOwnPropertyNames(t)
            .map((e) => {
              return t[e];
            })
            .join('') !==
          '0123456789'
        ) return !1;
        const r = {};
        return (
          'abcdefghijklmnopqrst'.split('').forEach((e) => {
            r[e] = e;
          }),
          Object.keys({ ...r}).join('') === 'abcdefghijklmnopqrst'
        );
      } catch (a) {
        return !1;
      }
    }())
      ? Object.assign
      : function (e, t) {
        for (var n, l, s = o(e), u = 1; u < arguments.length; u++) {
          for (const c in (n = Object(arguments[u]))) a.call(n, c) && (s[c] = n[c]);
          if (r) {
            l = r(n);
            for (let d = 0; d < l.length; d++) i.call(n, l[d]) && (s[l[d]] = n[l[d]]);
          }
        }
        return s;
      };
  },
  function (e, t, n) {
    

    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.default = function () {
      let e = void 0;
      try {
        e = n(49);
      } finally {
        return e;
      }
    }),
    (e.exports = t.default);
  },
  function (e, t, n) {
    

    Object.defineProperty(t, '__esModule', { value: !0 });
    t.pxToNum = function (e) {
      return parseInt(e.slice(0, -2), 10);
    };
  },
  function (e, t, n) {
    

    Object.defineProperty(t, '__esModule', { value: !0 });
    const r = Object.assign
        || function (e) {
          for (let t = 1; t < arguments.length; t++) {
            const n = arguments[t];
            for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        };
    var a = "function" === typeof Symbol && typeof Symbol.iterator === 'symbol'
      ? function (e) {
        return typeof e;
      }
      : function (e) {
        return e
                && 'function' === typeof Symbol
                && e.constructor === Symbol
                && e !== Symbol.prototype
          ? 'symbol'
          : typeof e;
      };
    (t.genericHashLink = m), (t.HashLink = g), (t.NavHashLink = v);
    const i = s(n(0));
    var o = s(n(9));
    var l = n(12);
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    let u = '';
      let c = null;
      let d = null;
      let f = null;
    function p() {
      (u = ''),
      c !== null && c.disconnect(),
      d !== null && (window.clearTimeout(d), (d = null));
    }
    function h() {
      const e = document.getElementById(u);
      return e !== null && (f(e), p(), !0);
    }
    function m(e, t) {
      e.scroll, e.smooth;
      const n = (function (e, t) {
        const n = {};
        for (const r in e) {t.indexOf(r) >= 0
            || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));}
        return n;
      }(e, ['scroll', 'smooth']));
      return i.default.createElement(
        t,
        {
 ...n,
onClick: function (t) {
          p(),
          e.onClick && e.onClick(t),
          "string" === typeof e.to
            ? (u = e.to
              .split('#')
              .slice(1)
              .join('#'))
            : 'object' === a(e.to)
                  && "string" === typeof e.to.hash
                  && (u = e.to.hash.replace('#', '')),
          "" !== u
                && ((f =                  e.scroll
                  || function (t) {
                    return e.smooth
                      ? t.scrollIntoView({ behavior: 'smooth' })
                      : t.scrollIntoView();
                  }),
                window.setTimeout(() => {
                  !1 === h() &&
                    (null === c && (c = new MutationObserver(h)),
                    c.observe(document, {
                      attributes: !0,
                      childList: !0,
                      subtree: !0
                    }),
                    (d = window.setTimeout(function() {
                      p();
                    }, 1e4)));
                }, 0));
        }
},
        e.children,
      );
    }
    function g(e) {
      return m(e, l.Link);
    }
    function v(e) {
      return m(e, l.NavLink);
    }
    const b = {
      onClick: o.default.func,
      children: o.default.node,
      scroll: o.default.func,
      to: o.default.oneOfType([o.default.string, o.default.object]),
    };
    (g.propTypes = b), (v.propTypes = b);
  },
  function (e, t, n) {
    

    const r = n(11);
    var a = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    };
    var i = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    };
    var o = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    };
    var l = {};
    function s(e) {
      return r.isMemo(e) ? o : l[e.$$typeof] || a;
    }
    (l[r.ForwardRef] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (l[r.Memo] = o);
    const u = Object.defineProperty;
    var c = Object.getOwnPropertyNames;
    var d = Object.getOwnPropertySymbols;
    var f = Object.getOwnPropertyDescriptor;
    var p = Object.getPrototypeOf;
    var h = Object.prototype;
    e.exports = function e(t, n, r) {
      if (typeof n !== 'string') {
        if (h) {
          const a = p(n);
          a && a !== h && e(t, a, r);
        }
        let o = c(n);
        d && (o = o.concat(d(n)));
        for (let l = s(t), m = s(n), g = 0; g < o.length; ++g) {
          const v = o[g];
          if (!i[v] && (!r || !r[v]) && (!m || !m[v]) && (!l || !l[v])) {
            const b = f(n, v);
            try {
              u(t, v, b);
            } catch (y) {}
          }
        }
      }
      return t;
    };
  },
  function (e, t, n) {
    e.exports = (function () {
      

      return function (e) {
        function t(t) {
          if (t) {try {
              e(`${t  }}`);
            } catch (n) {}}
        }
        return function (n, r, a, i, o, l, s, u, c, d) {
          switch (n) {
            case 1:
              if (c === 0 && r.charCodeAt(0) === 64) return e(`${r};`), '';
              break;
            case 2:
              if (u === 0) return `${r }/*|*/`;
              break;
            case 3:
              switch (u) {
                case 102:
                case 112:
                  return e(a[0] + r), '';
                default:
                  return r + (d === 0 ? '/*|*/' : '');
              }
            case -2:
              r.split('/*|*/}').forEach(t);
          }
        };
      };
    }());
  },
  function (e, t, n) {
    

    t.a = {
      animationIterationCount: 1,
      borderImageOutset: 1,
      borderImageSlice: 1,
      borderImageWidth: 1,
      boxFlex: 1,
      boxFlexGroup: 1,
      boxOrdinalGroup: 1,
      columnCount: 1,
      columns: 1,
      flex: 1,
      flexGrow: 1,
      flexPositive: 1,
      flexShrink: 1,
      flexNegative: 1,
      flexOrder: 1,
      gridRow: 1,
      gridRowEnd: 1,
      gridRowSpan: 1,
      gridRowStart: 1,
      gridColumn: 1,
      gridColumnEnd: 1,
      gridColumnSpan: 1,
      gridColumnStart: 1,
      msGridRow: 1,
      msGridRowSpan: 1,
      msGridColumn: 1,
      msGridColumnSpan: 1,
      fontWeight: 1,
      lineHeight: 1,
      opacity: 1,
      order: 1,
      orphans: 1,
      tabSize: 1,
      widows: 1,
      zIndex: 1,
      zoom: 1,
      WebkitLineClamp: 1,
      fillOpacity: 1,
      floodOpacity: 1,
      stopOpacity: 1,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      strokeMiterlimit: 1,
      strokeOpacity: 1,
      strokeWidth: 1,
    };
  },
  function (e, t, n) {
    

    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.default = {
      slide: n(43),
      stack: n(47),
      elastic: n(48),
      bubble: n(51),
      push: n(52),
      pushRotate: n(53),
      scaleDown: n(54),
      scaleRotate: n(55),
      fallDown: n(56),
      reveal: n(57),
    }),
    (e.exports = t.default);
  },
  function (e, t, n) {
    

    const r = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
    var a = (function (e) {
      let t = {};
      return function (n) {
        return void 0 === t[n] && (t[n] = e(n)), t[n];
      };
    }((e) => {
        return (
          r.test(e) ||
          (111 === e.charCodeAt(0) &&
            110 === e.charCodeAt(1) &&
            e.charCodeAt(2) < 91)
        );
      }));
    t.a = a;
  },
  function (e, t, n) {
    

    function r(e) {
      return Object.prototype.toString.call(e).slice(8, -1);
    }
    function a(e) {
      return (
        r(e) === 'Object'
        && e.constructor === Object
          && Object.getPrototypeOf(e) === Object.prototype
      );
    }
    function i(e) {
      return r(e) === 'Array';
    }
    function o(e) {
      return r(e) === 'Symbol';
    }
    function l() {
      for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
      const r = Array(e);
      var a = 0;
      for (t = 0; t < n; t++) for (let i = arguments[t], o = 0, l = i.length; o < l; o++, a++) r[a] = i[o];
      return r;
    }
    function s(e, t, n, r) {
      const a = r.propertyIsEnumerable(t) ? 'enumerable' : 'nonenumerable';
      a === 'enumerable' && (e[t] = n),
      'nonenumerable' === a
          && Object.defineProperty(e, t, {
            value: n,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          });
    }
    t.a = function (e) {
      for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      let r = null;
      var u = e;
      return (
        a(e)
          && e.extensions
          && Object.keys(e).length === 1
          && ((u = {}), (r = e.extensions)),
        t.reduce((e, t) => (function e(t, n, r) {
            if (!a(n))
              return (
                r &&
                  i(r) &&
                  r.forEach(function(e) {
                    n = e(t, n);
                  }),
                n
              );
            var u = {};
            a(t) &&
              (u = l(
                Object.getOwnPropertyNames(t),
                Object.getOwnPropertySymbols(t)
              ).reduce(function(e, r) {
                var a = t[r];
                return (
                  ((!o(r) && !Object.getOwnPropertyNames(n).includes(r)) ||
                    (o(r) && !Object.getOwnPropertySymbols(n).includes(r))) &&
                    s(e, r, a, t),
                  e
                );
              }, {}));
            return l(
              Object.getOwnPropertyNames(n),
              Object.getOwnPropertySymbols(n)
            ).reduce(function(o, l) {
              var u = n[l],
                c = a(t) ? t[l] : void 0;
              return (
                r &&
                  i(r) &&
                  r.forEach(function(e) {
                    u = e(c, u);
                  }),
                void 0 !== c && a(u) && (u = e(c, u, r)),
                s(o, l, u, n),
                o
              );
            }, u);
          })(e, t, r), u)
      );
    };
  },
  function (e, t, n) {
    e.exports = n(58);
  },
  function (e, t, n) {
    

    const r = n(20);
    var a = 'function' === typeof Symbol && Symbol.for;
    var i = a ? Symbol.for('react.element') : 60103;
    var o = a ? Symbol.for('react.portal') : 60106;
    var l = a ? Symbol.for('react.fragment') : 60107;
    var s = a ? Symbol.for('react.strict_mode') : 60108;
    var u = a ? Symbol.for('react.profiler') : 60114;
    var c = a ? Symbol.for('react.provider') : 60109;
    var d = a ? Symbol.for('react.context') : 60110;
    var f = a ? Symbol.for('react.forward_ref') : 60112;
    var p = a ? Symbol.for('react.suspense') : 60113;
    var h = a ? Symbol.for('react.memo') : 60115;
    var m = a ? Symbol.for('react.lazy') : 60116;
    var g = typeof Symbol === 'function' && Symbol.iterator;
    function v(e) {
      for (
        var t = `https://reactjs.org/docs/error-decoder.html?invariant=${  e}`,
          n = 1;
        n < arguments.length;
        n++
      ) t += `&args[]=${  encodeURIComponent(arguments[n])}`;
      return (
        `Minified React error #${ 
        e
         }; visit ${
         t
         } for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    const b = {
      isMounted() {
        return !1;
      },
      enqueueForceUpdate() {},
      enqueueReplaceState() {},
      enqueueSetState() {},
    };
    var y = {};
    function w(e, t, n) {
      (this.props = e),
      (this.context = t),
      (this.refs = y),
      (this.updater = n || b);
    }
    function x() {}
    function S(e, t, n) {
      (this.props = e),
      (this.context = t),
      (this.refs = y),
      (this.updater = n || b);
    }
    (w.prototype.isReactComponent = {}),
    (w.prototype.setState = function (e, t) {
      if (typeof e !== 'object' && typeof e !== 'function' && e != null) throw Error(v(85));
      this.updater.enqueueSetState(this, e, t, 'setState');
    }),
    (w.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
    }),
    (x.prototype = w.prototype);
    const k = (S.prototype = new x());
    (k.constructor = S), r(k, w.prototype), (k.isPureReactComponent = !0);
    const E = { current: null };
    var C = Object.prototype.hasOwnProperty;
    var T = {
      key: !0, ref: !0, __self: !0, __source: !0, 
    };
    function O(e, t, n) {
      let r;
      var a = {};
      var o = null;
      var l = null;
      if (t != null) {for (r in (void 0 !== t.ref && (l = t.ref),
        void 0 !== t.key && (o = '' + t.key),
        t)) C.call(t, r) && !T.hasOwnProperty(r) && (a[r] = t[r]);}
      let s = arguments.length - 2;
      if (s === 1) a.children = n;
      else if (s > 1) {
        for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
        a.children = u;
      }
      if (e && e.defaultProps) for (r in (s = e.defaultProps)) void 0 === a[r] && (a[r] = s[r]);
      return {
        $$typeof: i,
        type: e,
        key: o,
        ref: l,
        props: a,
        _owner: E.current,
      };
    }
    function P(e) {
      return typeof e === 'object' && e !== null && e.$$typeof === i;
    }
    const A = /\/+/g;
    var M = [];
    function _(e, t, n, r) {
      if (M.length) {
        const a = M.pop();
        return (
          (a.result = e),
          (a.keyPrefix = t),
          (a.func = n),
          (a.context = r),
          (a.count = 0),
          a
        );
      }
      return {
        result: e, keyPrefix: t, func: n, context: r, count: 0, 
      };
    }
    function N(e) {
      (e.result = null),
      (e.keyPrefix = null),
      (e.func = null),
      (e.context = null),
      (e.count = 0),
      M.length < 10 && M.push(e);
    }
    function F(e, t, n) {
      return e == null
        ? 0
        : (function e(t, n, r, a) {
          let l = typeof t;
          (l !== 'undefined' && l !== 'boolean') || (t = null);
          let s = !1;
          if (t === null) s = !0;
          else {switch (l) {
              case 'string':
              case 'number':
                s = !0;
                break;
              case 'object':
                switch (t.$$typeof) {
                  case i:
                  case o:
                    s = !0;
                }
            }}
          if (s) return r(a, t, n === '' ? `.${  D(t, 0)}` : n), 1;
          if (((s = 0), (n = n === '' ? '.' : `${n }:`), Array.isArray(t))) {for (var u = 0; u < t.length; u++) {
              var c = n + D((l = t[u]), u);
              s += e(l, c, r, a);
            }}
          else if (
            ((c = null === t || typeof t !== 'object'
              ? null
              : typeof (c = (g && t[g]) || t['@@iterator']) === 'function'
                ? c
                : null),
            'function' === typeof c)
          ) for (t = c.call(t), u = 0; !(l = t.next()).done;) s += e((l = l.value), (c = n + D(l, u++)), r, a);
          else if (l === 'object') {throw ((r = '' + t),
            Error(
              v(
                31,
                "[object Object]" === r
                  ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                  : r,
                "",
              ),
            ));}
          return s;
        }(e, '', t, n));
    }
    function D(e, t) {
      return typeof e === 'object' && e !== null && e.key != null
        ? (function (e) {
          let t = { '=': '=0', ':': '=2' };
          return (
            '$'
              + (`${  e}`).replace(/[=:]/g, (e) => t[e])
          );
        }(e.key))
        : t.toString(36);
    }
    function I(e, t) {
      e.func.call(e.context, t, e.count++);
    }
    function j(e, t, n) {
      const r = e.result;
      var a = e.keyPrefix;
      (e = e.func.call(e.context, t, e.count++)),
      Array.isArray(e)
        ? R(e, r, n, (e) => e)
        : e != null
            && (P(e)
              && (e = (function (e, t) {
                return {
                  $$typeof: i,
                  type: e.type,
                  key: t,
                  ref: e.ref,
                  props: e.props,
                  _owner: e._owner,
                };
              }(
                e,
                a
                  + (!e.key || (t && t.key === e.key)
                    ? ''
                    : `${("" + e.key).replace(A, "$&/")  }/`)
                  + n,
              ))),
            r.push(e));
    }
    function R(e, t, n, r, a) {
      let i = '';
      n != null && (i = `${('' + n).replace(A, '$&/')}/`),
      F(e, j, (t = _(t, i, r, a))),
      N(t);
    }
    const z = { current: null };
    function B() {
      const e = z.current;
      if (e === null) throw Error(v(321));
      return e;
    }
    const L = {
      ReactCurrentDispatcher: z,
      ReactCurrentBatchConfig: { suspense: null },
      ReactCurrentOwner: E,
      IsSomeRendererActing: { current: !1 },
      assign: r,
    };
    (t.Children = {
      map(e, t, n) {
        if (e == null) return e;
        let r = [];
        return R(e, r, null, t, n), r;
      },
      forEach(e, t, n) {
        if (e == null) return e;
        F(e, I, (t = _(null, null, t, n))), N(t);
      },
      count(e) {
        return F(
          e,
          () => {
            return null;
          },
          null,
        );
      },
      toArray(e) {
        let t = [];
        return (
          R(e, t, null, (e) => {
            return e;
          }),
          t
        );
      },
      only(e) {
        if (!P(e)) throw Error(v(143));
        return e;
      },
    }),
    (t.Component = w),
    (t.Fragment = l),
    (t.Profiler = u),
    (t.PureComponent = S),
    (t.StrictMode = s),
    (t.Suspense = p),
    (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L),
    (t.cloneElement = function (e, t, n) {
      if (e === null || void 0 === e) throw Error(v(267, e));
      let a = r({}, e.props);
      var o = e.key;
      var l = e.ref;
      var s = e._owner;
      if (t != null) {
        if (
          (void 0 !== t.ref && ((l = t.ref), (s = E.current)),
          void 0 !== t.key && (o = `${  t.key}`),
          e.type && e.type.defaultProps)
        ) var u = e.type.defaultProps;
        for (c in t) {C.call(t, c)
              && !T.hasOwnProperty(c)
              && (a[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c]);}
      }
      var c = arguments.length - 2;
      if (c === 1) a.children = n;
      else if (c > 1) {
        u = Array(c);
        for (let d = 0; d < c; d++) u[d] = arguments[d + 2];
        a.children = u;
      }
      return {
        $$typeof: i,
        type: e.type,
        key: o,
        ref: l,
        props: a,
        _owner: s,
      };
    }),
    (t.createContext = function (e, t) {
      return (
        void 0 === t && (t = null),
        ((e = {
          $$typeof: d,
          _calculateChangedBits: t,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }).Provider = { $$typeof: c, _context: e }),
        (e.Consumer = e)
      );
    }),
    (t.createElement = O),
    (t.createFactory = function (e) {
      let t = O.bind(null, e);
      return (t.type = e), t;
    }),
    (t.createRef = function () {
      return { current: null };
    }),
    (t.forwardRef = function (e) {
      return { $$typeof: f, render: e };
    }),
    (t.isValidElement = P),
    (t.lazy = function (e) {
      return {
        $$typeof: m, _ctor: e, _status: -1, _result: null, 
      };
    }),
    (t.memo = function (e, t) {
      return { $$typeof: h, type: e, compare: void 0 === t ? null : t };
    }),
    (t.useCallback = function (e, t) {
      return B().useCallback(e, t);
    }),
    (t.useContext = function (e, t) {
      return B().useContext(e, t);
    }),
    (t.useDebugValue = function () {}),
    (t.useEffect = function (e, t) {
      return B().useEffect(e, t);
    }),
    (t.useImperativeHandle = function (e, t, n) {
      return B().useImperativeHandle(e, t, n);
    }),
    (t.useLayoutEffect = function (e, t) {
      return B().useLayoutEffect(e, t);
    }),
    (t.useMemo = function (e, t) {
      return B().useMemo(e, t);
    }),
    (t.useReducer = function (e, t, n) {
      return B().useReducer(e, t, n);
    }),
    (t.useRef = function (e) {
      return B().useRef(e);
    }),
    (t.useState = function (e) {
      return B().useState(e);
    }),
    (t.version = '16.13.1');
  },
  function (e, t, n) {
    

    const r = n(0);
    var a = n(20);
    var i = n(33);
    function o(e) {
      for (
        var t = `https://reactjs.org/docs/error-decoder.html?invariant=${  e}`,
          n = 1;
        n < arguments.length;
        n++
      ) t += `&args[]=${  encodeURIComponent(arguments[n])}`;
      return (
        `Minified React error #${ 
        e
         }; visit ${
         t
         } for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    if (!r) throw Error(o(227));
    let l = !1;
    var s = null;
    var u = !1;
    var c = null;
    var d = {
      onError(e) {
        (l = !0), (s = e);
      },
    };
    function f(e, t, n, r, a, i, o, u, c) {
      (l = !1),
      (s = null),
      function (e, t, n, r, a, i, o, l, s) {
        let u = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(n, u);
        } catch (c) {
          this.onError(c);
        }
      }.apply(d, arguments);
    }
    let p = null;
    var h = null;
    var m = null;
    function g(e, t, n) {
      const r = e.type || 'unknown-event';
      (e.currentTarget = m(n)),
      (function (e, t, n, r, a, i, d, p, h) {
        if ((f.apply(this, arguments), l)) {
          if (!l) throw Error(o(198));
          let m = s;
          (l = !1), (s = null), u || ((u = !0), (c = m));
        }
      }(r, t, void 0, e)),
      (e.currentTarget = null);
    }
    let v = null;
    var b = {};
    function y() {
      if (v) {for (let e in b) {
          let t = b[e];
            var n = v.indexOf(e);
          if (!(n > -1)) throw Error(o(96, e));
          if (!x[n]) {
            if (!t.extractEvents) throw Error(o(97, e));
            for (let r in ((x[n] = t), (n = t.eventTypes))) {
              let a = void 0;
                var i = n[r];
                var l = t;
                var s = r;
              if (S.hasOwnProperty(s)) throw Error(o(99, s));
              S[s] = i;
              let u = i.phasedRegistrationNames;
              if (u) {
                for (a in u) u.hasOwnProperty(a) && w(u[a], l, s);
                a = !0;
              } else i.registrationName
                  ? (w(i.registrationName, l, s), (a = !0))
                  : (a = !1);
              if (!a) throw Error(o(98, r, e));
            }
          }
        }}
    }
    function w(e, t, n) {
      if (k[e]) throw Error(o(100, e));
      (k[e] = t), (E[e] = t.eventTypes[n].dependencies);
    }
    var x = [];
    var S = {};
    var k = {};
    var E = {};
    function C(e) {
      let t;
      var n = !1;
      for (t in e) {if (e.hasOwnProperty(t)) {
          let r = e[t];
          if (!b.hasOwnProperty(t) || b[t] !== r) {
            if (b[t]) throw Error(o(102, t));
            (b[t] = r), (n = !0);
          }
        }}
      n && y();
    }
    const T = !(
      'undefined' === typeof window
        || 'undefined' === typeof window.document
        || 'undefined' === typeof window.document.createElement
    );
    var O = null;
    var P = null;
    var A = null;
    function M(e) {
      if ((e = h(e))) {
        if (typeof O !== 'function') throw Error(o(280));
        let t = e.stateNode;
        t && ((t = p(t)), O(e.stateNode, e.type, t));
      }
    }
    function _(e) {
      P ? (A ? A.push(e) : (A = [e])) : (P = e);
    }
    function N() {
      if (P) {
        let e = P;
        var t = A;
        if (((A = P = null), M(e), t)) for (e = 0; e < t.length; e++) M(t[e]);
      }
    }
    function F(e, t) {
      return e(t);
    }
    function D(e, t, n, r, a) {
      return e(t, n, r, a);
    }
    function I() {}
    let j = F;
    var R = !1;
    var z = !1;
    function B() {
      (P === null && A === null) || (I(), N());
    }
    function L(e, t, n) {
      if (z) return e(t, n);
      z = !0;
      try {
        return j(e, t, n);
      } finally {
        (z = !1), B();
      }
    }
    const U = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
    var H = Object.prototype.hasOwnProperty;
    var W = {};
    var V = {};
    function q(e, t, n, r, a, i) {
      (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = a),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i);
    }
    const G = {};
    'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
      .split(' ')
      .forEach((e) => {
        G[e] = new q(e, 0, !1, e, null, !1);
      }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach((e) => {
      var t = e[0];
      G[t] = new q(t, 1, !1, e[1], null, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach((
      e,
    ) => {
      G[e] = new q(e, 2, !1, e.toLowerCase(), null, !1);
    }),
    [
      'autoReverse',
      'externalResourcesRequired',
      'focusable',
      'preserveAlpha',
    ].forEach((e) => {
      G[e] = new q(e, 2, !1, e, null, !1);
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach((e) => {
        G[e] = new q(e, 3, !1, e.toLowerCase(), null, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach((e) => {
      G[e] = new q(e, 3, !0, e, null, !1);
    }),
    ['capture', 'download'].forEach((e) => {
      G[e] = new q(e, 4, !1, e, null, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach((e) => {
      G[e] = new q(e, 6, !1, e, null, !1);
    }),
    ['rowSpan', 'start'].forEach((e) => {
      G[e] = new q(e, 5, !1, e.toLowerCase(), null, !1);
    });
    const Y = /[\-:]([a-z])/g;
    function K(e) {
      return e[1].toUpperCase();
    }
    'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
      .split(' ')
      .forEach((e) => {
        let t = e.replace(Y, K);
        G[t] = new q(t, 1, !1, e, null, !1);
      }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach((e) => {
        var t = e.replace(Y, K);
        G[t] = new q(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach((e) => {
      var t = e.replace(Y, K);
      G[t] = new q(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach((e) => {
      G[e] = new q(e, 1, !1, e.toLowerCase(), null, !1);
    }),
    (G.xlinkHref = new q(
      'xlinkHref',
      1,
      !1,
      'xlink:href',
      'http://www.w3.org/1999/xlink',
      !0,
    )),
    ['src', 'href', 'action', 'formAction'].forEach((e) => {
      G[e] = new q(e, 1, !1, e.toLowerCase(), null, !0);
    });
    const Q = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function $(e, t, n, r) {
      let a = G.hasOwnProperty(t) ? G[t] : null;
      (a !== null
        ? a.type === 0
        : !r
          && t.length > 2
            && (t[0] === 'o' || t[0] === 'O')
            && (t[1] === 'n' || t[1] === 'N'))
        || ((function (e, t, n, r) {
          if (
            t === null
            || 'undefined' === typeof t
            || (function (e, t, n, r) {
              if (n !== null && n.type === 0) return !1;
              switch (typeof t) {
                case 'function':
                case 'symbol':
                  return !0;
                case 'boolean':
                  return (
                    !r
                    && (n !== null
                      ? !n.acceptsBooleans
                      : (e = e.toLowerCase().slice(0, 5)) !== 'data-'
                        && 'aria-' !== e)
                  );
                default:
                  return !1;
              }
            }(e, t, n, r))
          ) return !0;
          if (r) return !1;
          if (n !== null) {switch (n.type) {
              case 3:
                return !t;
              case 4:
                return !1 === t;
              case 5:
                return isNaN(t);
              case 6:
                return isNaN(t) || t < 1;
            }}
          return !1;
        }(t, n, a, r)) && (n = null),
        r || a === null
          ? (function (e) {
            return (
              !!H.call(V, e)
                || (!H.call(W, e) && (U.test(e) ? (V[e] = !0) : ((W[e] = !0), !1)))
            );
          }(t))
            && (n === null ? e.removeAttribute(t) : e.setAttribute(t, `${  n}`))
          : a.mustUseProperty
            ? (e[a.propertyName] = n === null ? a.type !== 3 && '' : n)
            : ((t = a.attributeName),
            (r = a.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((n = 3 === (a = a.type) || (a === 4 && !0 === n) ? '' : `${  n}`),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    Q.hasOwnProperty('ReactCurrentDispatcher')
      || (Q.ReactCurrentDispatcher = { current: null }),
    Q.hasOwnProperty('ReactCurrentBatchConfig')
        || (Q.ReactCurrentBatchConfig = { suspense: null });
    const X = /^(.*)[\\\/]/;
    var Z = 'function' === typeof Symbol && Symbol.for;
    var J = Z ? Symbol.for('react.element') : 60103;
    var ee = Z ? Symbol.for('react.portal') : 60106;
    var te = Z ? Symbol.for('react.fragment') : 60107;
    var ne = Z ? Symbol.for('react.strict_mode') : 60108;
    var re = Z ? Symbol.for('react.profiler') : 60114;
    var ae = Z ? Symbol.for('react.provider') : 60109;
    var ie = Z ? Symbol.for('react.context') : 60110;
    var oe = Z ? Symbol.for('react.concurrent_mode') : 60111;
    var le = Z ? Symbol.for('react.forward_ref') : 60112;
    var se = Z ? Symbol.for('react.suspense') : 60113;
    var ue = Z ? Symbol.for('react.suspense_list') : 60120;
    var ce = Z ? Symbol.for('react.memo') : 60115;
    var de = Z ? Symbol.for('react.lazy') : 60116;
    var fe = Z ? Symbol.for('react.block') : 60121;
    var pe = typeof Symbol === 'function' && Symbol.iterator;
    function he(e) {
      return e === null || typeof e !== 'object'
        ? null
        : typeof (e = (pe && e[pe]) || e['@@iterator']) === 'function'
          ? e
          : null;
    }
    function me(e) {
      if (e == null) return null;
      if (typeof e === 'function') return e.displayName || e.name || null;
      if (typeof e === 'string') return e;
      switch (e) {
        case te:
          return 'Fragment';
        case ee:
          return 'Portal';
        case re:
          return 'Profiler';
        case ne:
          return 'StrictMode';
        case se:
          return 'Suspense';
        case ue:
          return 'SuspenseList';
      }
      if (typeof e === 'object') {switch (e.$$typeof) {
          case ie:
            return 'Context.Consumer';
          case ae:
            return 'Context.Provider';
          case le:
            var t = e.render;
            return (
              (t = t.displayName || t.name || ''),
              e.displayName
                || ('' !== t ? 'ForwardRef(' + t + ')' : 'ForwardRef')
            );
          case ce:
            return me(e.type);
          case fe:
            return me(e.render);
          case de:
            if ((e = e._status === 1 ? e._result : null)) return me(e);
        }}
      return null;
    }
    function ge(e) {
      let t = '';
      do {
        switch (e.tag) {
          case 3:
          case 4:
          case 6:
          case 7:
          case 10:
          case 9:
            var n = '';
            break;
          default:
            var r = e._debugOwner;
            var a = e._debugSource;
            var i = me(e.type);
            (n = null),
            r && (n = me(r.type)),
            (r = i),
            (i = ''),
            a
              ? (i = " (at "
                    + a.fileName.replace(X, '')
                    + ':'
                    + a.lineNumber
                    + ')')
              : n && (i = ` (created by ${  n  })`),
            (n = `\n    in ${  r || 'Unknown'  }${i}`);
        }
        (t += n), (e = e.return);
      } while (e);
      return t;
    }
    function ve(e) {
      switch (typeof e) {
        case 'boolean':
        case 'number':
        case 'object':
        case 'string':
        case 'undefined':
          return e;
        default:
          return '';
      }
    }
    function be(e) {
      const t = e.type;
      return (
        (e = e.nodeName)
        && 'input' === e.toLowerCase()
        && (t === 'checkbox' || t === 'radio')
      );
    }
    function ye(e) {
      e._valueTracker
        || (e._valueTracker = (function (e) {
          let t = be(e) ? 'checked' : 'value';
            let n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
            let r = `${  e[t]}`;
          if (
            !e.hasOwnProperty(t)
            && 'undefined' !== typeof n
            && 'function' === typeof n.get
            && 'function' === typeof n.set
          ) {
            const a = n.get;
            var i = n.set;
            return (
              Object.defineProperty(e, t, {
                configurable: !0,
                get() {
                  return a.call(this);
                },
                set(e) {
                  (r = '' + e), i.call(this, e);
                },
              }),
              Object.defineProperty(e, t, { enumerable: n.enumerable }),
              {
                getValue() {
                  return r;
                },
                setValue(e) {
                  r = '' + e;
                },
                stopTracking() {
                  (e._valueTracker = null), delete e[t];
                },
              }
            );
          }
        }(e)));
    }
    function we(e) {
      if (!e) return !1;
      const t = e._valueTracker;
      if (!t) return !0;
      const n = t.getValue();
      var r = '';
      return (
        e && (r = be(e) ? (e.checked ? 'true' : 'false') : e.value),
        (e = r) !== n && (t.setValue(e), !0)
      );
    }
    function xe(e, t) {
      const n = t.checked;
      return a({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n != null ? n : e._wrapperState.initialChecked,
      });
    }
    function Se(e, t) {
      let n = t.defaultValue == null ? '' : t.defaultValue;
      var r = t.checked != null ? t.checked : t.defaultChecked;
      (n = ve(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
            t.type === 'checkbox' || t.type === 'radio'
              ? t.checked != null
              : t.value != null,
      });
    }
    function ke(e, t) {
      (t = t.checked) != null && $(e, 'checked', t, !1);
    }
    function Ee(e, t) {
      ke(e, t);
      const n = ve(t.value);
      var r = t.type;
      if (n != null) 'number' === r
        ? ((n === 0 && e.value === '') || e.value != n) && (e.value = `${  n}`)
        : e.value !== `${  n}` && (e.value = `${  n}`);
      else if (r === 'submit' || r === 'reset') return void e.removeAttribute('value');
      t.hasOwnProperty('value')
        ? Te(e, t.type, n)
        : t.hasOwnProperty('defaultValue') && Te(e, t.type, ve(t.defaultValue)),
      t.checked == null
          && t.defaultChecked != null
          && (e.defaultChecked = !!t.defaultChecked);
    }
    function Ce(e, t, n) {
      if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
        const r = t.type;
        if (
          !(
            (r !== 'submit' && r !== 'reset')
            || (void 0 !== t.value && t.value !== null)
          )
        ) return;
        (t = `${  e._wrapperState.initialValue}`),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
      }
      (n = e.name) !== '' && (e.name = ''),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      '' !== n && (e.name = n);
    }
    function Te(e, t, n) {
      (t === 'number' && e.ownerDocument.activeElement === e)
        || (n == null
          ? (e.defaultValue = `${  e._wrapperState.initialValue}`)
          : e.defaultValue !== `${  n}` && (e.defaultValue = `${  n}`));
    }
    function Oe(e, t) {
      return (
        (e = a({ children: void 0 }, t)),
        (t = (function (e) {
          let t = '';
          return (
            r.Children.forEach(e, (e) => {
              e != null && (t += e);
            }),
            t
          );
        }(t.children))) && (e.children = t),
        e
      );
    }
    function Pe(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var a = 0; a < n.length; a++) t[`$${  n[a]}`] = !0;
        for (n = 0; n < e.length; n++) {(a = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== a && (e[n].selected = a),
          a && r && (e[n].defaultSelected = !0);}
      } else {
        for (n = `${  ve(n)}`, t = null, a = 0; a < e.length; a++) {
          if (e[a].value === n) {return (
              (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
            );}
          t !== null || e[a].disabled || (t = e[a]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Ae(e, t) {
      if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
      return a({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: `${  e._wrapperState.initialValue}`,
      });
    }
    function Me(e, t) {
      let n = t.value;
      if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
          if (t != null) throw Error(o(92));
          if (Array.isArray(n)) {
            if (!(n.length <= 1)) throw Error(o(93));
            n = n[0];
          }
          t = n;
        }
        t == null && (t = ''), (n = t);
      }
      e._wrapperState = { initialValue: ve(n) };
    }
    function _e(e, t) {
      let n = ve(t.value);
      var r = ve(t.defaultValue);
      n != null
        && ((n = `${  n}`) !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = `${  r}`);
    }
    function Ne(e) {
      const t = e.textContent;
      t === e._wrapperState.initialValue
        && '' !== t
        && t !== null
        && (e.value = t);
    }
    const Fe = 'http://www.w3.org/1999/xhtml';
      let De = 'http://www.w3.org/2000/svg';
    function Ie(e) {
      switch (e) {
        case 'svg':
          return 'http://www.w3.org/2000/svg';
        case 'math':
          return 'http://www.w3.org/1998/Math/MathML';
        default:
          return 'http://www.w3.org/1999/xhtml';
      }
    }
    function je(e, t) {
      return e == null || e === 'http://www.w3.org/1999/xhtml'
        ? Ie(t)
        : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
          ? 'http://www.w3.org/1999/xhtml'
          : e;
    }
    let Re;
    var ze = (function (e) {
      return typeof MSApp !== 'undefined' && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, a) {
          MSApp.execUnsafeLocalFunction(() => e(t, n));
        }
        : e;
    }((e, t) => {
        if (e.namespaceURI !== De || "innerHTML" in e) e.innerHTML = t;
        else {
          for (
            (Re = Re || document.createElement("div")).innerHTML =
              "<svg>" + t.valueOf().toString() + "</svg>",
              t = Re.firstChild;
            e.firstChild;

          )
            e.removeChild(e.firstChild);
          for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
      }));
    function Be(e, t) {
      if (t) {
        const n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) return void (n.nodeValue = t);
      }
      e.textContent = t;
    }
    function Le(e, t) {
      const n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit${  e}`] = `webkit${  t}`),
        (n[`Moz${  e}`] = `moz${  t}`),
        n
      );
    }
    const Ue = {
      animationend: Le('Animation', 'AnimationEnd'),
      animationiteration: Le('Animation', 'AnimationIteration'),
      animationstart: Le('Animation', 'AnimationStart'),
      transitionend: Le('Transition', 'TransitionEnd'),
    };
    var He = {};
    var We = {};
    function Ve(e) {
      if (He[e]) return He[e];
      if (!Ue[e]) return e;
      let t;
      var n = Ue[e];
      for (t in n) if (n.hasOwnProperty(t) && t in We) return (He[e] = n[t]);
      return e;
    }
    T
      && ((We = document.createElement('div').style),
      'AnimationEvent' in window
        || (delete Ue.animationend.animation,
        delete Ue.animationiteration.animation,
        delete Ue.animationstart.animation),
      'TransitionEvent' in window || delete Ue.transitionend.transition);
    const qe = Ve('animationend');
    var Ge = Ve('animationiteration');
    var Ye = Ve('animationstart');
    var Ke = Ve('transitionend');
    var Qe = 'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      " ",
    );
    var $e = new (typeof WeakMap === 'function' ? WeakMap : Map)();
    function Xe(e) {
      let t = $e.get(e);
      return void 0 === t && ((t = new Map()), $e.set(e, t)), t;
    }
    function Ze(e) {
      let t = e;
      var n = e;
      if (e.alternate) for (; t.return;) t = t.return;
      else {
        e = t;
        do {
          (1026 & (t = e).effectTag) !== 0 && (n = t.return), (e = t.return);
        } while (e);
      }
      return t.tag === 3 ? n : null;
    }
    function Je(e) {
      if (e.tag === 13) {
        let t = e.memoizedState;
        if (
          (t === null && (e = e.alternate) !== null && (t = e.memoizedState),
          t !== null)
        ) return t.dehydrated;
      }
      return null;
    }
    function et(e) {
      if (Ze(e) !== e) throw Error(o(188));
    }
    function tt(e) {
      if (
        !(e = (function (e) {
          let t = e.alternate;
          if (!t) {
            if ((t = Ze(e)) === null) throw Error(o(188));
            return t !== e ? null : e;
          }
          for (var n = e, r = t; ;) {
            const a = n.return;
            if (a === null) break;
            let i = a.alternate;
            if (i === null) {
              if ((r = a.return) !== null) {
                n = r;
                continue;
              }
              break;
            }
            if (a.child === i.child) {
              for (i = a.child; i;) {
                if (i === n) return et(a), e;
                if (i === r) return et(a), t;
                i = i.sibling;
              }
              throw Error(o(188));
            }
            if (n.return !== r.return) (n = a), (r = i);
            else {
              for (var l = !1, s = a.child; s;) {
                if (s === n) {
                  (l = !0), (n = a), (r = i);
                  break;
                }
                if (s === r) {
                  (l = !0), (r = a), (n = i);
                  break;
                }
                s = s.sibling;
              }
              if (!l) {
                for (s = i.child; s;) {
                  if (s === n) {
                    (l = !0), (n = i), (r = a);
                    break;
                  }
                  if (s === r) {
                    (l = !0), (r = i), (n = a);
                    break;
                  }
                  s = s.sibling;
                }
                if (!l) throw Error(o(189));
              }
            }
            if (n.alternate !== r) throw Error(o(190));
          }
          if (n.tag !== 3) throw Error(o(188));
          return n.stateNode.current === n ? e : t;
        }(e)))
      ) return null;
      for (let t = e; ;) {
        if (t.tag === 5 || t.tag === 6) return t;
        if (t.child) (t.child.return = t), (t = t.child);
        else {
          if (t === e) break;
          for (; !t.sibling;) {
            if (!t.return || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      }
      return null;
    }
    function nt(e, t) {
      if (t == null) throw Error(o(30));
      return e == null
        ? t
        : Array.isArray(e)
          ? Array.isArray(t)
            ? (e.push.apply(e, t), e)
            : (e.push(t), e)
          : Array.isArray(t)
            ? [e].concat(t)
            : [e, t];
    }
    function rt(e, t, n) {
      Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
    }
    let at = null;
    function it(e) {
      if (e) {
        const t = e._dispatchListeners;
        var n = e._dispatchInstances;
        if (Array.isArray(t)) for (let r = 0; r < t.length && !e.isPropagationStopped(); r++) g(e, t[r], n[r]);
        else t && g(e, t, n);
        (e._dispatchListeners = null),
        (e._dispatchInstances = null),
        e.isPersistent() || e.constructor.release(e);
      }
    }
    function ot(e) {
      if ((e !== null && (at = nt(at, e)), (e = at), (at = null), e)) {
        if ((rt(e, it), at)) throw Error(o(95));
        if (u) throw ((e = c), (u = !1), (c = null), e);
      }
    }
    function lt(e) {
      return (
        (e = e.target || e.srcElement || window).correspondingUseElement
          && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    function st(e) {
      if (!T) return !1;
      let t = (e = `on${  e}`) in document;
      return (
        t
          || ((t = document.createElement('div')).setAttribute(e, 'return;'),
          (t = typeof t[e] === 'function')),
        t
      );
    }
    const ut = [];
    function ct(e) {
      (e.topLevelType = null),
      (e.nativeEvent = null),
      (e.targetInst = null),
      (e.ancestors.length = 0),
      ut.length < 10 && ut.push(e);
    }
    function dt(e, t, n, r) {
      if (ut.length) {
        const a = ut.pop();
        return (
          (a.topLevelType = e),
          (a.eventSystemFlags = r),
          (a.nativeEvent = t),
          (a.targetInst = n),
          a
        );
      }
      return {
        topLevelType: e,
        eventSystemFlags: r,
        nativeEvent: t,
        targetInst: n,
        ancestors: [],
      };
    }
    function ft(e) {
      let t = e.targetInst;
      var n = t;
      do {
        if (!n) {
          e.ancestors.push(n);
          break;
        }
        var r = n;
        if (r.tag === 3) r = r.stateNode.containerInfo;
        else {
          for (; r.return;) r = r.return;
          r = r.tag !== 3 ? null : r.stateNode.containerInfo;
        }
        if (!r) break;
        ((t = n.tag) !== 5 && t !== 6) || e.ancestors.push(n), (n = Pn(r));
      } while (n);
      for (n = 0; n < e.ancestors.length; n++) {
        t = e.ancestors[n];
        const a = lt(e.nativeEvent);
        r = e.topLevelType;
        const i = e.nativeEvent;
        var o = e.eventSystemFlags;
        n === 0 && (o |= 64);
        for (var l = null, s = 0; s < x.length; s++) {
          let u = x[s];
          u && (u = u.extractEvents(r, t, i, a, o)) && (l = nt(l, u));
        }
        ot(l);
      }
    }
    function pt(e, t, n) {
      if (!n.has(e)) {
        switch (e) {
          case 'scroll':
            Yt(t, 'scroll', !0);
            break;
          case 'focus':
          case 'blur':
            Yt(t, 'focus', !0),
            Yt(t, 'blur', !0),
            n.set('blur', null),
            n.set('focus', null);
            break;
          case 'cancel':
          case 'close':
            st(e) && Yt(t, e, !0);
            break;
          case 'invalid':
          case 'submit':
          case 'reset':
            break;
          default:
            Qe.indexOf(e) === -1 && Gt(e, t);
        }
        n.set(e, null);
      }
    }
    let ht;
    var mt;
    var gt;
    var vt = !1;
    var bt = [];
    var yt = null;
    var wt = null;
    var xt = null;
    var St = new Map();
    var kt = new Map();
    var Et = [];
    var Ct = 'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit'.split(
      " ",
    );
    var Tt = 'focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture'.split(
      ' ',
    );
    function Ot(e, t, n, r, a) {
      return {
        blockedOn: e,
        topLevelType: t,
        eventSystemFlags: 32 | n,
        nativeEvent: a,
        container: r,
      };
    }
    function Pt(e, t) {
      switch (e) {
        case 'focus':
        case 'blur':
          yt = null;
          break;
        case 'dragenter':
        case 'dragleave':
          wt = null;
          break;
        case 'mouseover':
        case 'mouseout':
          xt = null;
          break;
        case 'pointerover':
        case 'pointerout':
          St.delete(t.pointerId);
          break;
        case 'gotpointercapture':
        case 'lostpointercapture':
          kt.delete(t.pointerId);
      }
    }
    function At(e, t, n, r, a, i) {
      return e === null || e.nativeEvent !== i
        ? ((e = Ot(t, n, r, a, i)),
        t !== null && (t = An(t)) !== null && mt(t),
        e)
        : ((e.eventSystemFlags |= r), e);
    }
    function Mt(e) {
      let t = Pn(e.target);
      if (t !== null) {
        const n = Ze(t);
        if (n !== null) {if ((t = n.tag) === 13) {
            if ((t = Je(n)) !== null) return (
                (e.blockedOn = t),
                void i.unstable_runWithPriority(e.priority, () => {
                  gt(n);
                })
              );
          } else if (t === 3 && n.stateNode.hydrate) return void (e.blockedOn =              3 === n.tag ? n.stateNode.containerInfo : null);}
      }
      e.blockedOn = null;
    }
    function _t(e) {
      if (e.blockedOn !== null) return !1;
      const t = Qt(
        e.topLevelType,
        e.eventSystemFlags,
        e.container,
        e.nativeEvent,
      );
      if (t !== null) {
        const n = An(t);
        return n !== null && mt(n), (e.blockedOn = t), !1;
      }
      return !0;
    }
    function Nt(e, t, n) {
      _t(e) && n.delete(t);
    }
    function Ft() {
      for (vt = !1; bt.length > 0;) {
        let e = bt[0];
        if (e.blockedOn !== null) {
          (e = An(e.blockedOn)) !== null && ht(e);
          break;
        }
        const t = Qt(
          e.topLevelType,
          e.eventSystemFlags,
          e.container,
          e.nativeEvent,
        );
        t !== null ? (e.blockedOn = t) : bt.shift();
      }
      yt !== null && _t(yt) && (yt = null),
      wt !== null && _t(wt) && (wt = null),
      xt !== null && _t(xt) && (xt = null),
      St.forEach(Nt),
      kt.forEach(Nt);
    }
    function Dt(e, t) {
      e.blockedOn === t
        && ((e.blockedOn = null),
        vt
          || ((vt = !0),
          i.unstable_scheduleCallback(i.unstable_NormalPriority, Ft)));
    }
    function It(e) {
      function t(t) {
        return Dt(t, e);
      }
      if (bt.length > 0) {
        Dt(bt[0], e);
        for (var n = 1; n < bt.length; n++) {
          var r = bt[n];
          r.blockedOn === e && (r.blockedOn = null);
        }
      }
      for (
        yt !== null && Dt(yt, e),
        wt !== null && Dt(wt, e),
        xt !== null && Dt(xt, e),
        St.forEach(t),
        kt.forEach(t),
        n = 0;
        n < Et.length;
        n++
      ) (r = Et[n]).blockedOn === e && (r.blockedOn = null);
      for (; Et.length > 0 && (n = Et[0]).blockedOn === null;) Mt(n), n.blockedOn === null && Et.shift();
    }
    const jt = {};
    var Rt = new Map();
    var zt = new Map();
    var Bt = [
      'abort',
      'abort',
      qe,
      'animationEnd',
      Ge,
      'animationIteration',
      Ye,
      'animationStart',
      'canplay',
      'canPlay',
      'canplaythrough',
      'canPlayThrough',
      'durationchange',
      'durationChange',
      'emptied',
      'emptied',
      'encrypted',
      'encrypted',
      'ended',
      'ended',
      'error',
      'error',
      'gotpointercapture',
      'gotPointerCapture',
      'load',
      'load',
      'loadeddata',
      'loadedData',
      'loadedmetadata',
      'loadedMetadata',
      'loadstart',
      'loadStart',
      'lostpointercapture',
      'lostPointerCapture',
      'playing',
      'playing',
      'progress',
      'progress',
      'seeking',
      'seeking',
      'stalled',
      'stalled',
      'suspend',
      'suspend',
      'timeupdate',
      'timeUpdate',
      Ke,
      'transitionEnd',
      'waiting',
      'waiting',
    ];
    function Lt(e, t) {
      for (let n = 0; n < e.length; n += 2) {
        const r = e[n];
        var a = e[n + 1];
        var i = `on${  a[0].toUpperCase() + a.slice(1)}`;
        (i = {
          phasedRegistrationNames: { bubbled: i, captured: `${i}Capture` },
          dependencies: [r],
          eventPriority: t,
        }),
        zt.set(r, t),
        Rt.set(r, i),
        (jt[a] = i);
      }
    }
    Lt(
      'blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange'.split(
        ' ',
      ),
      0,
    ),
    Lt(
      'drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel'.split(
        ' ',
      ),
      1,
    ),
    Lt(Bt, 2);
    for (
      let Ut = 'change selectionchange textInput compositionstart compositionend compositionupdate'.split(
          ' ',
        ),
        Ht = 0;
      Ht < Ut.length;
      Ht++
    ) zt.set(Ut[Ht], 0);
    const Wt = i.unstable_UserBlockingPriority;
    var Vt = i.unstable_runWithPriority;
    var qt = !0;
    function Gt(e, t) {
      Yt(t, e, !1);
    }
    function Yt(e, t, n) {
      let r = zt.get(t);
      switch (void 0 === r ? 2 : r) {
        case 0:
          r = function (e, t, n, r) {
            R || I();
            const a = Kt;
            var i = R;
            R = !0;
            try {
              D(a, e, t, n, r);
            } finally {
              (R = i) || B();
            }
          }.bind(null, t, 1, e);
          break;
        case 1:
          r = function (e, t, n, r) {
            Vt(Wt, Kt.bind(null, e, t, n, r));
          }.bind(null, t, 1, e);
          break;
        default:
          r = Kt.bind(null, t, 1, e);
      }
      n ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1);
    }
    function Kt(e, t, n, r) {
      if (qt) {if (bt.length > 0 && Ct.indexOf(e) > -1) (e = Ot(null, e, t, n, r)), bt.push(e);
        else {
          let a = Qt(e, t, n, r);
          if (a === null) Pt(e, r);
          else if (Ct.indexOf(e) > -1) (e = Ot(a, e, t, n, r)), bt.push(e);
          else if (
            !(function (e, t, n, r, a) {
              switch (t) {
                case 'focus':
                  return (yt = At(yt, e, t, n, r, a)), !0;
                case 'dragenter':
                  return (wt = At(wt, e, t, n, r, a)), !0;
                case 'mouseover':
                  return (xt = At(xt, e, t, n, r, a)), !0;
                case 'pointerover':
                  var i = a.pointerId;
                  return St.set(i, At(St.get(i) || null, e, t, n, r, a)), !0;
                case 'gotpointercapture':
                  return (
                    (i = a.pointerId),
                    kt.set(i, At(kt.get(i) || null, e, t, n, r, a)),
                    !0
                  );
              }
              return !1;
            }(a, e, t, n, r))
          ) {
            Pt(e, r), (e = dt(e, r, null, t));
            try {
              L(ft, e);
            } finally {
              ct(e);
            }
          }
        }}
    }
    function Qt(e, t, n, r) {
      if ((n = Pn((n = lt(r)))) !== null) {
        const a = Ze(n);
        if (a === null) n = null;
        else {
          const i = a.tag;
          if (i === 13) {
            if ((n = Je(a)) !== null) return n;
            n = null;
          } else if (i === 3) {
            if (a.stateNode.hydrate) return a.tag === 3 ? a.stateNode.containerInfo : null;
            n = null;
          } else a !== n && (n = null);
        }
      }
      e = dt(e, r, n, t);
      try {
        L(ft, e);
      } finally {
        ct(e);
      }
      return null;
    }
    const $t = {
      animationIterationCount: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
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
    var Xt = ['Webkit', 'ms', 'Moz', 'O'];
    function Zt(e, t, n) {
      return t == null || typeof t === 'boolean' || t === ''
        ? ''
        : n
          || 'number' !== typeof t
          || t === 0
          || ($t.hasOwnProperty(e) && $t[e])
          ? (`${  t}`).trim()
          : `${t}px`;
    }
    function Jt(e, t) {
      for (let n in ((e = e.style), t)) {if (t.hasOwnProperty(n)) {
          let r = n.indexOf("--") === 0,
            a = Zt(n, t[n], r);
          'float' === n && (n = 'cssFloat'),
          r ? e.setProperty(n, a) : (e[n] = a);
        }}
    }
    Object.keys($t).forEach((e) => {
      Xt.forEach((t) => {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), ($t[t] = $t[e]);
      });
    });
    const en = a(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      },
    );
    function tn(e, t) {
      if (t) {
        if (en[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(o(137, e, ''));
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null) throw Error(o(60));
          if (
            !(
              typeof t.dangerouslySetInnerHTML === 'object'
              && '__html' in t.dangerouslySetInnerHTML
            )
          ) throw Error(o(61));
        }
        if (t.style != null && typeof t.style !== 'object') throw Error(o(62, ''));
      }
    }
    function nn(e, t) {
      if (e.indexOf('-') === -1) return typeof t.is === 'string';
      switch (e) {
        case 'annotation-xml':
        case 'color-profile':
        case 'font-face':
        case 'font-face-src':
        case 'font-face-uri':
        case 'font-face-format':
        case 'font-face-name':
        case 'missing-glyph':
          return !1;
        default:
          return !0;
      }
    }
    const rn = Fe;
    function an(e, t) {
      const n = Xe(
        (e = e.nodeType === 9 || e.nodeType === 11 ? e : e.ownerDocument),
      );
      t = E[t];
      for (let r = 0; r < t.length; r++) pt(t[r], e, n);
    }
    function on() {}
    function ln(e) {
      if (
        typeof (e = e || ('undefined' !== typeof document ? document : void 0)) ===
        'undefined'
      ) return null;
      try {
        return e.activeElement || e.body;
      } catch (t) {
        return e.body;
      }
    }
    function sn(e) {
      for (; e && e.firstChild;) e = e.firstChild;
      return e;
    }
    function un(e, t) {
      let n;
      var r = sn(e);
      for (e = 0; r;) {
        if (r.nodeType === 3) {
          if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
          e = n;
        }
        e: {
          for (; r;) {
            if (r.nextSibling) {
              r = r.nextSibling;
              break e;
            }
            r = r.parentNode;
          }
          r = void 0;
        }
        r = sn(r);
      }
    }
    function cn() {
      for (var e = window, t = ln(); t instanceof e.HTMLIFrameElement;) {
        try {
          var n = typeof t.contentWindow.location.href === 'string';
        } catch (r) {
          n = !1;
        }
        if (!n) break;
        t = ln((e = t.contentWindow).document);
      }
      return t;
    }
    function dn(e) {
      const t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t
        && ((t === 'input'
          && (e.type === 'text'
            || 'search' === e.type
            || 'tel' === e.type
            || 'url' === e.type
            || 'password' === e.type))
          || 'textarea' === t
          || 'true' === e.contentEditable)
      );
    }
    let fn = '$';
      let pn = '/$';
      let hn = '$?';
      let mn = '$!';
      let gn = null;
      let vn = null;
    function bn(e, t) {
      switch (e) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          return !!t.autoFocus;
      }
      return !1;
    }
    function yn(e, t) {
      return (
        e === 'textarea'
        || 'option' === e
        || 'noscript' === e
        || 'string' === typeof t.children
        || 'number' === typeof t.children
        || (typeof t.dangerouslySetInnerHTML === 'object'
          && t.dangerouslySetInnerHTML !== null
          && t.dangerouslySetInnerHTML.__html != null)
      );
    }
    const wn = typeof setTimeout === 'function' ? setTimeout : void 0;
    var xn = typeof clearTimeout === 'function' ? clearTimeout : void 0;
    function Sn(e) {
      for (; e != null; e = e.nextSibling) {
        const t = e.nodeType;
        if (t === 1 || t === 3) break;
      }
      return e;
    }
    function kn(e) {
      e = e.previousSibling;
      for (let t = 0; e;) {
        if (e.nodeType === 8) {
          const n = e.data;
          if (n === fn || n === mn || n === hn) {
            if (t === 0) return e;
            t--;
          } else n === pn && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    const En = Math.random()
      .toString(36)
      .slice(2);
    var Cn = '__reactInternalInstance$' + En;
    var Tn = '__reactEventHandlers$' + En;
    var On = `__reactContainere$${  En}`;
    function Pn(e) {
      let t = e[Cn];
      if (t) return t;
      for (let n = e.parentNode; n;) {
        if ((t = n[On] || n[Cn])) {
          if (
            ((n = t.alternate),
            t.child !== null || (n !== null && n.child !== null))
          ) {for (e = kn(e); e !== null;) {
              if ((n = e[Cn])) return n;
              e = kn(e);
            }}
          return t;
        }
        n = (e = n).parentNode;
      }
      return null;
    }
    function An(e) {
      return !(e = e[Cn] || e[On])
        || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e;
    }
    function Mn(e) {
      if (e.tag === 5 || e.tag === 6) return e.stateNode;
      throw Error(o(33));
    }
    function _n(e) {
      return e[Tn] || null;
    }
    function Nn(e) {
      do {
        e = e.return;
      } while (e && e.tag !== 5);
      return e || null;
    }
    function Fn(e, t) {
      let n = e.stateNode;
      if (!n) return null;
      let r = p(n);
      if (!r) return null;
      n = r[t];
      switch (t) {
        case 'onClick':
        case 'onClickCapture':
        case 'onDoubleClick':
        case 'onDoubleClickCapture':
        case 'onMouseDown':
        case 'onMouseDownCapture':
        case 'onMouseMove':
        case 'onMouseMoveCapture':
        case 'onMouseUp':
        case 'onMouseUpCapture':
        case 'onMouseEnter':
          (r = !r.disabled)
            || (r = !(
              (e = e.type) === 'button'
              || 'input' === e
              || 'select' === e
              || 'textarea' === e
            )),
          (e = !r);
          break;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n !== 'function') throw Error(o(231, t, typeof n));
      return n;
    }
    function Dn(e, t, n) {
      (t = Fn(e, n.dispatchConfig.phasedRegistrationNames[t]))
        && ((n._dispatchListeners = nt(n._dispatchListeners, t)),
        (n._dispatchInstances = nt(n._dispatchInstances, e)));
    }
    function In(e) {
      if (e && e.dispatchConfig.phasedRegistrationNames) {
        for (var t = e._targetInst, n = []; t;) n.push(t), (t = Nn(t));
        for (t = n.length; t-- > 0;) Dn(n[t], 'captured', e);
        for (t = 0; t < n.length; t++) Dn(n[t], 'bubbled', e);
      }
    }
    function jn(e, t, n) {
      e
        && n
        && n.dispatchConfig.registrationName
        && (t = Fn(e, n.dispatchConfig.registrationName))
        && ((n._dispatchListeners = nt(n._dispatchListeners, t)),
        (n._dispatchInstances = nt(n._dispatchInstances, e)));
    }
    function Rn(e) {
      e && e.dispatchConfig.registrationName && jn(e._targetInst, null, e);
    }
    function zn(e) {
      rt(e, In);
    }
    let Bn = null;
    var Ln = null;
    var Un = null;
    function Hn() {
      if (Un) return Un;
      let e;
      var t;
      var n = Ln;
      var r = n.length;
      var a = 'value' in Bn ? Bn.value : Bn.textContent;
      var i = a.length;
      for (e = 0; e < r && n[e] === a[e]; e++);
      const o = r - e;
      for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
      return (Un = a.slice(e, t > 1 ? 1 - t : void 0));
    }
    function Wn() {
      return !0;
    }
    function Vn() {
      return !1;
    }
    function qn(e, t, n, r) {
      for (const a in ((this.dispatchConfig = e),
      (this._targetInst = t),
      (this.nativeEvent = n),
      (e = this.constructor.Interface))) {e.hasOwnProperty(a)
          && ((t = e[a])
            ? (this[a] = t(n))
            : 'target' === a
              ? (this.target = r)
              : (this[a] = n[a]));}
      return (
        (this.isDefaultPrevented = (n.defaultPrevented != null
          ? n.defaultPrevented
          : !1 === n.returnValue)
          ? Wn
          : Vn),
        (this.isPropagationStopped = Vn),
        this
      );
    }
    function Gn(e, t, n, r) {
      if (this.eventPool.length) {
        const a = this.eventPool.pop();
        return this.call(a, e, t, n, r), a;
      }
      return new this(e, t, n, r);
    }
    function Yn(e) {
      if (!(e instanceof this)) throw Error(o(279));
      e.destructor(), this.eventPool.length < 10 && this.eventPool.push(e);
    }
    function Kn(e) {
      (e.eventPool = []), (e.getPooled = Gn), (e.release = Yn);
    }
    a(qn.prototype, {
      preventDefault() {
        this.defaultPrevented = !0;
        let e = this.nativeEvent;
        e
          && (e.preventDefault
            ? e.preventDefault()
            : 'unknown' !== typeof e.returnValue && (e.returnValue = !1),
          (this.isDefaultPrevented = Wn));
      },
      stopPropagation() {
        let e = this.nativeEvent;
        e
          && (e.stopPropagation
            ? e.stopPropagation()
            : 'unknown' !== typeof e.cancelBubble && (e.cancelBubble = !0),
          (this.isPropagationStopped = Wn));
      },
      persist() {
        this.isPersistent = Wn;
      },
      isPersistent: Vn,
      destructor() {
        let e;
          var t = this.constructor.Interface;
        for (e in t) this[e] = null;
        (this.nativeEvent = this._targetInst = this.dispatchConfig = null),
        (this.isPropagationStopped = this.isDefaultPrevented = Vn),
        (this._dispatchInstances = this._dispatchListeners = null);
      },
    }),
    (qn.Interface = {
      type: null,
      target: null,
      currentTarget () {
        return null;
      },
      eventPhase: null,
      bubbles: null,
      cancelable: null,
      timeStamp (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: null,
      isTrusted: null,
    }),
    (qn.extend = function (e) {
      function t() {}
      function n() {
        return r.apply(this, arguments);
      }
      var r = this;
      t.prototype = r.prototype;
      let i = new t();
      return (
        a(i, n.prototype),
        (n.prototype = i),
        (n.prototype.constructor = n),
        (n.Interface = a({}, r.Interface, e)),
        (n.extend = r.extend),
        Kn(n),
        n
      );
    }),
    Kn(qn);
    const Qn = qn.extend({ data: null });
    var $n = qn.extend({ data: null });
    var Xn = [9, 13, 27, 32];
    var Zn = T && 'CompositionEvent' in window;
    var Jn = null;
    T && 'documentMode' in document && (Jn = document.documentMode);
    const er = T && 'TextEvent' in window && !Jn;
    var tr = T && (!Zn || (Jn && Jn > 8 && Jn <= 11));
    var nr = String.fromCharCode(32);
    var rr = {
      beforeInput: {
        phasedRegistrationNames: {
          bubbled: 'onBeforeInput',
          captured: 'onBeforeInputCapture'
        },
        dependencies: ['compositionend', 'keypress', 'textInput', 'paste'],
      },
      compositionEnd: {
        phasedRegistrationNames: {
          bubbled: 'onCompositionEnd',
          captured: 'onCompositionEndCapture'
        },
        dependencies: 'blur compositionend keydown keypress keyup mousedown'.split(
          " ",
        ),
      },
      compositionStart: {
        phasedRegistrationNames: {
          bubbled: 'onCompositionStart',
          captured: 'onCompositionStartCapture'
        },
        dependencies: 'blur compositionstart keydown keypress keyup mousedown'.split(
          " ",
        ),
      },
      compositionUpdate: {
        phasedRegistrationNames: {
          bubbled: 'onCompositionUpdate',
          captured: 'onCompositionUpdateCapture'
        },
        dependencies: 'blur compositionupdate keydown keypress keyup mousedown'.split(
          " ",
        ),
      },
    };
    var ar = !1;
    function ir(e, t) {
      switch (e) {
        case 'keyup':
          return Xn.indexOf(t.keyCode) !== -1;
        case 'keydown':
          return t.keyCode !== 229;
        case 'keypress':
        case 'mousedown':
        case 'blur':
          return !0;
        default:
          return !1;
      }
    }
    function or(e) {
      return typeof (e = e.detail) === 'object' && 'data' in e ? e.data : null;
    }
    let lr = !1;
    const sr = {
      eventTypes: rr,
      extractEvents(e, t, n, r) {
        var a;
        if (Zn) e: {
            switch (e) {
              case 'compositionstart':
                var i = rr.compositionStart;
                break e;
              case 'compositionend':
                i = rr.compositionEnd;
                break e;
              case 'compositionupdate':
                i = rr.compositionUpdate;
                break e;
            }
            i = void 0;
          }
        else lr
            ? ir(e, n) && (i = rr.compositionEnd)
            : 'keydown' === e
                && 229 === n.keyCode
                && (i = rr.compositionStart);
        return (
          i
            ? (tr
                  && "ko" !== n.locale
                  && (lr || i !== rr.compositionStart
                    ? i === rr.compositionEnd && lr && (a = Hn())
                    : ((Ln = 'value' in (Bn = r) ? Bn.value : Bn.textContent),
                    (lr = !0))),
            (i = Qn.getPooled(i, t, n, r)),
            a ? (i.data = a) : (a = or(n)) !== null && (i.data = a),
            zn(i),
            (a = i))
            : (a = null),
          (e = er
            ? (function (e, t) {
              switch (e) {
                case 'compositionend':
                  return or(t);
                case 'keypress':
                  return t.which !== 32 ? null : ((ar = !0), nr);
                case 'textInput':
                  return (e = t.data) === nr && ar ? null : e;
                default:
                  return null;
              }
            }(e, n))
            : (function (e, t) {
              if (lr) return 'compositionend' === e || (!Zn && ir(e, t))
                  ? ((e = Hn()), (Un = Ln = Bn = null), (lr = !1), e)
                  : null;
              switch (e) {
                case 'paste':
                  return null;
                case 'keypress':
                  if (
                    !(t.ctrlKey || t.altKey || t.metaKey)
                        || (t.ctrlKey && t.altKey)
                  ) {
                    if (t.char && t.char.length > 1) return t.char;
                    if (t.which) return String.fromCharCode(t.which);
                  }
                  return null;
                case 'compositionend':
                  return tr && 'ko' !== t.locale ? null : t.data;
                default:
                  return null;
              }
            }(e, n)))
            ? (((t = $n.getPooled(rr.beforeInput, t, n, r)).data = e), zn(t))
            : (t = null),
          null === a ? t : t === null ? a : [a, t]
        );
      },
    };
    var ur = {
      color: !0,
      date: !0,
      datetime: !0,
      'datetime-local': !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function cr(e) {
      const t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === 'input' ? !!ur[e.type] : t === 'textarea';
    }
    const dr = {
      change: {
        phasedRegistrationNames: {
          bubbled: 'onChange',
          captured: 'onChangeCapture',
        },
        dependencies: 'blur change click focus input keydown keyup selectionchange'.split(
          ' ',
        ),
      },
    };
    function fr(e, t, n) {
      return (
        ((e = qn.getPooled(dr.change, e, t, n)).type = 'change'), _(n), zn(e), e
      );
    }
    let pr = null;
    var hr = null;
    function mr(e) {
      ot(e);
    }
    function gr(e) {
      if (we(Mn(e))) return e;
    }
    function vr(e, t) {
      if (e === 'change') return t;
    }
    let br = !1;
    function yr() {
      pr && (pr.detachEvent('onpropertychange', wr), (hr = pr = null));
    }
    function wr(e) {
      if (e.propertyName === 'value' && gr(hr)) {if (((e = fr(hr, e, lt(e))), R)) ot(e);
        else {
          R = !0;
          try {
            F(mr, e);
          } finally {
            (R = !1), B();
          }
        }}
    }
    function xr(e, t, n) {
      e === 'focus'
        ? (yr(), (hr = n), (pr = t).attachEvent('onpropertychange', wr))
        : e === 'blur' && yr();
    }
    function Sr(e) {
      if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return gr(hr);
    }
    function kr(e, t) {
      if (e === 'click') return gr(t);
    }
    function Er(e, t) {
      if (e === 'input' || e === 'change') return gr(t);
    }
    T
      && (br = st('input') && (!document.documentMode || document.documentMode > 9));
    const Cr = {
      eventTypes: dr,
      _isInputEventSupported: br,
      extractEvents(e, t, n, r) {
        var a = t ? Mn(t) : window;
            var i = a.nodeName && a.nodeName.toLowerCase();
        if ('select' === i || ('input' === i && 'file' === a.type)) var o = vr;
        else if (cr(a)) if (br) o = Er;
          else {
            o = Sr;
            var l = xr;
          }
        else (i = a.nodeName)
              && "input" === i.toLowerCase()
              && ('checkbox' === a.type || 'radio' === a.type)
              && (o = kr);
        if (o && (o = o(e, t))) return fr(o, n, r);
        l && l(e, a, t),
        "blur" === e
              && (e = a._wrapperState)
              && e.controlled
              && "number" === a.type
              && Te(a, 'number', a.value);
      },
    };
    var Tr = qn.extend({ view: null, detail: null });
    var Or = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
    function Pr(e) {
      const t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : !!(e = Or[e]) && !!t[e];
    }
    function Ar() {
      return Pr;
    }
    let Mr = 0;
    var _r = 0;
    var Nr = !1;
    var Fr = !1;
    var Dr = Tr.extend({
      screenX: null,
      screenY: null,
      clientX: null,
      clientY: null,
      pageX: null,
      pageY: null,
      ctrlKey: null,
      shiftKey: null,
      altKey: null,
      metaKey: null,
      getModifierState: Ar,
      button: null,
      buttons: null,
      relatedTarget: function (e) {
        return (
          e.relatedTarget
            || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
        );
      },
      movementX: function (e) {
        if ('movementX' in e) return e.movementX;
        var t = Mr;
        return (
          (Mr = e.screenX),
          Nr ? ('mousemove' === e.type ? e.screenX - t : 0) : ((Nr = !0), 0)
        );
      },
      movementY: function (e) {
        if ('movementY' in e) return e.movementY;
        var t = _r;
        return (
          (_r = e.screenY),
          Fr ? ('mousemove' === e.type ? e.screenY - t : 0) : ((Fr = !0), 0)
        );
      },
    });
    var Ir = Dr.extend({
      pointerId: null,
      width: null,
      height: null,
      pressure: null,
      tangentialPressure: null,
      tiltX: null,
      tiltY: null,
      twist: null,
      pointerType: null,
      isPrimary: null,
    });
    var jr = {
      mouseEnter: {
        registrationName: 'onMouseEnter',
        dependencies: ['mouseout', 'mouseover'],
      },
      mouseLeave: {
        registrationName: 'onMouseLeave',
        dependencies: ['mouseout', 'mouseover'],
      },
      pointerEnter: {
        registrationName: 'onPointerEnter',
        dependencies: ['pointerout', 'pointerover'],
      },
      pointerLeave: {
        registrationName: 'onPointerLeave',
        dependencies: ['pointerout', 'pointerover'],
      },
    };
    var Rr = {
      eventTypes: jr,
      extractEvents(e, t, n, r, a) {
        var i = 'mouseover' === e || 'pointerover' === e;
            var o = 'mouseout' === e || 'pointerout' === e;
        if (
          (i && (32 & a) === 0 && (n.relatedTarget || n.fromElement))
            || (!o && !i)
        ) return null;
        ((i =            r.window === r
              ? r
              : (i = r.ownerDocument)
                ? i.defaultView || i.parentWindow
                : window),
        o)
          ? ((o = t),
          null
                !== (t = (t = n.relatedTarget || n.toElement) ? Pn(t) : null)
                && (t !== Ze(t) || (t.tag !== 5 && t.tag !== 6))
                && (t = null))
          : (o = null);
        if (o === t) return null;
        if ('mouseout' === e || 'mouseover' === e) var l = Dr;
              var s = jr.mouseLeave;
              var u = jr.mouseEnter;
              var c = 'mouse';
        else ('pointerout' !== e && 'pointerover' !== e)
              || ((l = Ir),
              (s = jr.pointerLeave),
              (u = jr.pointerEnter),
              (c = 'pointer'));
        if (
          ((e = o == null ? i : Mn(o)),
          (i = t == null ? i : Mn(t)),
          ((s = l.getPooled(s, o, n, r)).type = `${c  }leave`),
          (s.target = e),
          (s.relatedTarget = i),
          ((n = l.getPooled(u, t, n, r)).type = `${c  }enter`),
          (n.target = i),
          (n.relatedTarget = e),
          (c = t),
          (r = o) && c)
        ) e: {
            for (u = c, o = 0, e = l = r; e; e = Nn(e)) o++;
            for (e = 0, t = u; t; t = Nn(t)) e++;
            for (; o - e > 0;) (l = Nn(l)), o--;
            for (; e - o > 0;) (u = Nn(u)), e--;
            for (; o--;) {
              if (l === u || l === u.alternate) break e;
              (l = Nn(l)), (u = Nn(u));
            }
            l = null;
          }
        else l = null;
        for (
          u = l, l = [];
          r && r !== u && ((o = r.alternate) === null || o !== u);

        ) l.push(r), (r = Nn(r));
        for (
          r = [];
          c && c !== u && ((o = c.alternate) === null || o !== u);

        ) r.push(c), (c = Nn(c));
        for (c = 0; c < l.length; c++) jn(l[c], 'bubbled', s);
        for (c = r.length; c-- > 0;) jn(r[c], 'captured', n);
        return (64 & a) === 0 ? [s] : [s, n];
      },
    };
    const zr = "function" === typeof Object.is
      ? Object.is
      : function (e, t) {
        return (
          (e === t && (e !== 0 || 1 / e === 1 / t))
                || (e !== e && t !== t)
        );
      };
    var Br = Object.prototype.hasOwnProperty;
    function Lr(e, t) {
      if (zr(e, t)) return !0;
      if (
        typeof e !== 'object'
        || e === null
        || 'object' !== typeof t
        || t === null
      ) return !1;
      const n = Object.keys(e);
      var r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) if (!Br.call(t, n[r]) || !zr(e[n[r]], t[n[r]])) return !1;
      return !0;
    }
    let Ur = T && 'documentMode' in document && document.documentMode <= 11;
      let Hr = {
        select: {
          phasedRegistrationNames: {
            bubbled: 'onSelect',
            captured: 'onSelectCapture'
          },
          dependencies: 'blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange'.split(
            ' '
          ),
        },
      };
      let Wr = null;
      let Vr = null;
      let qr = null;
      let Gr = !1;
    function Yr(e, t) {
      let n = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
      return Gr || Wr == null || Wr !== ln(n)
        ? null
        : ('selectionStart' in (n = Wr) && dn(n)
          ? (n = { start: n.selectionStart, end: n.selectionEnd })
          : (n = {
            anchorNode: (n = (
              (n.ownerDocument && n.ownerDocument.defaultView)
                  || window
            ).getSelection()).anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset,
          }),
        qr && Lr(qr, n)
          ? null
          : ((qr = n),
          ((e = qn.getPooled(Hr.select, Vr, e, t)).type = 'select'),
          (e.target = Wr),
          zn(e),
          e));
    }
    const Kr = {
      eventTypes: Hr,
      extractEvents(e, t, n, r, a, i) {
        if (
          !(i = !(a =              i
              || (r.window === r
                ? r.document
                : r.nodeType === 9
                  ? r
                  : r.ownerDocument)))
        ) {
          e: {
            (a = Xe(a)), (i = E.onSelect);
            for (let o = 0; o < i.length; o++) if (!a.has(i[o])) {
                a = !1;
                break e;
              }
            a = !0;
          }
          i = !a;
        }
        if (i) return null;
        switch (((a = t ? Mn(t) : window), e)) {
          case 'focus':
            (cr(a) || 'true' === a.contentEditable)
                && ((Wr = a), (Vr = t), (qr = null));
            break;
          case 'blur':
            qr = Vr = Wr = null;
            break;
          case 'mousedown':
            Gr = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            return (Gr = !1), Yr(n, r);
          case 'selectionchange':
            if (Ur) break;
          case 'keydown':
          case 'keyup':
            return Yr(n, r);
        }
        return null;
      },
    };
    var Qr = qn.extend({
      animationName: null,
      elapsedTime: null,
      pseudoElement: null,
    });
    var $r = qn.extend({
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    });
    var Xr = Tr.extend({ relatedTarget: null });
    function Zr(e) {
      const t = e.keyCode;
      return (
        'charCode' in e
          ? (e = e.charCode) === 0 && t === 13 && (e = 13)
          : (e = t),
        e === 10 && (e = 13),
        e >= 32 || e === 13 ? e : 0
      );
    }
    const Jr = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    };
    var ea = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta'
    };
    var ta = Tr.extend({
      key: function (e) {
        if (e.key) {
          var t = Jr[e.key] || e.key;
          if ('Unidentified' !== t) return t;
        }
        return 'keypress' === e.type
          ? (e = Zr(e)) === 13
            ? 'Enter'
            : String.fromCharCode(e)
          : 'keydown' === e.type || 'keyup' === e.type
            ? ea[e.keyCode] || 'Unidentified'
            : '';
      },
      location: null,
      ctrlKey: null,
      shiftKey: null,
      altKey: null,
      metaKey: null,
      repeat: null,
      locale: null,
      getModifierState: Ar,
      charCode: function (e) {
        return 'keypress' === e.type ? Zr(e) : 0;
      },
      keyCode: function (e) {
        return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
      },
      which: function (e) {
        return 'keypress' === e.type
          ? Zr(e)
          : 'keydown' === e.type || 'keyup' === e.type
            ? e.keyCode
            : 0;
      },
    });
    var na = Dr.extend({ dataTransfer: null });
    var ra = Tr.extend({
      touches: null,
      targetTouches: null,
      changedTouches: null,
      altKey: null,
      metaKey: null,
      ctrlKey: null,
      shiftKey: null,
      getModifierState: Ar,
    });
    var aa = qn.extend({
      propertyName: null,
      elapsedTime: null,
      pseudoElement: null,
    });
    var ia = Dr.extend({
      deltaX: function (e) {
        return 'deltaX' in e
          ? e.deltaX
          : 'wheelDeltaX' in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: null,
      deltaMode: null,
    });
    var oa = {
      eventTypes: jt,
      extractEvents(e, t, n, r) {
        var a = Rt.get(e);
        if (!a) return null;
        switch (e) {
          case 'keypress':
            if (Zr(n) === 0) return null;
          case 'keydown':
          case 'keyup':
            e = ta;
            break;
          case 'blur':
          case 'focus':
            e = Xr;
            break;
          case 'click':
            if (n.button === 2) return null;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            e = Dr;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            e = na;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            e = ra;
            break;
          case qe:
          case Ge:
          case Ye:
            e = Qr;
            break;
          case Ke:
            e = aa;
            break;
          case 'scroll':
            e = Tr;
            break;
          case 'wheel':
            e = ia;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            e = $r;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            e = Ir;
            break;
          default:
            e = qn;
        }
        return zn((t = e.getPooled(a, t, n, r))), t;
      },
    };
    if (v) throw Error(o(101));
    (v = Array.prototype.slice.call(
      'ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin'.split(
        ' ',
      ),
    )),
    y(),
    (p = _n),
    (h = An),
    (m = Mn),
    C({
      SimpleEventPlugin: oa,
      EnterLeaveEventPlugin: Rr,
      ChangeEventPlugin: Cr,
      SelectEventPlugin: Kr,
      BeforeInputEventPlugin: sr,
    });
    const la = [];
    var sa = -1;
    function ua(e) {
      sa < 0 || ((e.current = la[sa]), (la[sa] = null), sa--);
    }
    function ca(e, t) {
      (la[++sa] = e.current), (e.current = t);
    }
    const da = {};
    var fa = { current: da };
    var pa = { current: !1 };
    var ha = da;
    function ma(e, t) {
      const n = e.type.contextTypes;
      if (!n) return da;
      const r = e.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
      let a;
      var i = {};
      for (a in n) i[a] = t[a];
      return (
        r
          && (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
          (e.__reactInternalMemoizedMaskedChildContext = i)),
        i
      );
    }
    function ga(e) {
      return (e = e.childContextTypes) !== null && void 0 !== e;
    }
    function va() {
      ua(pa), ua(fa);
    }
    function ba(e, t, n) {
      if (fa.current !== da) throw Error(o(168));
      ca(fa, t), ca(pa, n);
    }
    function ya(e, t, n) {
      let r = e.stateNode;
      if (((e = t.childContextTypes), typeof r.getChildContext !== 'function')) return n;
      for (const i in (r = r.getChildContext())) if (!(i in e)) throw Error(o(108, me(t) || 'Unknown', i));
      return a({}, n, {}, r);
    }
    function wa(e) {
      return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext)
          || da),
        (ha = fa.current),
        ca(fa, e),
        ca(pa, pa.current),
        !0
      );
    }
    function xa(e, t, n) {
      const r = e.stateNode;
      if (!r) throw Error(o(169));
      n
        ? ((e = ya(e, t, ha)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ua(pa),
        ua(fa),
        ca(fa, e))
        : ua(pa),
      ca(pa, n);
    }
    const Sa = i.unstable_runWithPriority;
    var ka = i.unstable_scheduleCallback;
    var Ea = i.unstable_cancelCallback;
    var Ca = i.unstable_requestPaint;
    var Ta = i.unstable_now;
    var Oa = i.unstable_getCurrentPriorityLevel;
    var Pa = i.unstable_ImmediatePriority;
    var Aa = i.unstable_UserBlockingPriority;
    var Ma = i.unstable_NormalPriority;
    var _a = i.unstable_LowPriority;
    var Na = i.unstable_IdlePriority;
    var Fa = {};
    var Da = i.unstable_shouldYield;
    var Ia = void 0 !== Ca ? Ca : function () {};
    var ja = null;
    var Ra = null;
    var za = !1;
    var Ba = Ta();
    var La = 1e4 > Ba
      ? Ta
      : function () {
        return Ta() - Ba;
      };
    function Ua() {
      switch (Oa()) {
        case Pa:
          return 99;
        case Aa:
          return 98;
        case Ma:
          return 97;
        case _a:
          return 96;
        case Na:
          return 95;
        default:
          throw Error(o(332));
      }
    }
    function Ha(e) {
      switch (e) {
        case 99:
          return Pa;
        case 98:
          return Aa;
        case 97:
          return Ma;
        case 96:
          return _a;
        case 95:
          return Na;
        default:
          throw Error(o(332));
      }
    }
    function Wa(e, t) {
      return (e = Ha(e)), Sa(e, t);
    }
    function Va(e, t, n) {
      return (e = Ha(e)), ka(e, t, n);
    }
    function qa(e) {
      return ja === null ? ((ja = [e]), (Ra = ka(Pa, Ya))) : ja.push(e), Fa;
    }
    function Ga() {
      if (Ra !== null) {
        const e = Ra;
        (Ra = null), Ea(e);
      }
      Ya();
    }
    function Ya() {
      if (!za && ja !== null) {
        za = !0;
        let e = 0;
        try {
          const t = ja;
          Wa(99, () => {
            for (; e < t.length; e++) {
              let n = t[e];
              do {
                n = n(!0);
              } while (n !== null);
            }
          }),
          (ja = null);
        } catch (n) {
          throw (ja !== null && (ja = ja.slice(e + 1)), ka(Pa, Ga), n);
        } finally {
          za = !1;
        }
      }
    }
    function Ka(e, t, n) {
      return (
        1073741821 - (1 + (((1073741821 - e + t / 10) / (n /= 10)) | 0)) * n
      );
    }
    function Qa(e, t) {
      if (e && e.defaultProps) for (const n in ((t = a({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
      return t;
    }
    const $a = { current: null };
    var Xa = null;
    var Za = null;
    var Ja = null;
    function ei() {
      Ja = Za = Xa = null;
    }
    function ti(e) {
      const t = $a.current;
      ua($a), (e.type._context._currentValue = t);
    }
    function ni(e, t) {
      for (; e !== null;) {
        const n = e.alternate;
        if (e.childExpirationTime < t) {(e.childExpirationTime = t),
          null !== n
              && n.childExpirationTime < t
              && (n.childExpirationTime = t);}
        else {
          if (!(n !== null && n.childExpirationTime < t)) break;
          n.childExpirationTime = t;
        }
        e = e.return;
      }
    }
    function ri(e, t) {
      (Xa = e),
      (Ja = Za = null),
      (e = e.dependencies) !== null
          && e.firstContext !== null
          && (e.expirationTime >= t && (_o = !0), (e.firstContext = null));
    }
    function ai(e, t) {
      if (Ja !== e && !1 !== t && t !== 0) {if (
          (('number' === typeof t && t !== 1073741823)
            || ((Ja = e), (t = 1073741823)),
          (t = { context: e, observedBits: t, next: null }),
          Za === null)
        ) {
          if (Xa === null) throw Error(o(308));
          (Za = t),
          (Xa.dependencies = {
            expirationTime: 0,
            firstContext: t,
            responders: null,
          });
        } else Za = Za.next = t;}
      return e._currentValue;
    }
    let ii = !1;
    function oi(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        baseQueue: null,
        shared: { pending: null },
        effects: null,
      };
    }
    function li(e, t) {
      (e = e.updateQueue),
      t.updateQueue === e
          && (t.updateQueue = {
            baseState: e.baseState,
            baseQueue: e.baseQueue,
            shared: e.shared,
            effects: e.effects,
          });
    }
    function si(e, t) {
      return ((e = {
        expirationTime: e,
        suspenseConfig: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
      }).next = e);
    }
    function ui(e, t) {
      if ((e = e.updateQueue) !== null) {
        const n = (e = e.shared).pending;
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t);
      }
    }
    function ci(e, t) {
      let n = e.alternate;
      n !== null && li(n, e),
      (n = (e = e.updateQueue).baseQueue) === null
        ? ((e.baseQueue = t.next = t), (t.next = t))
        : ((t.next = n.next), (n.next = t));
    }
    function di(e, t, n, r) {
      const i = e.updateQueue;
      ii = !1;
      let o = i.baseQueue;
      var l = i.shared.pending;
      if (l !== null) {
        if (o !== null) {
          var s = o.next;
          (o.next = l.next), (l.next = s);
        }
        (o = l),
        (i.shared.pending = null),
        (s = e.alternate) !== null
            && (s = s.updateQueue) !== null && (s.baseQueue = l);
      }
      if (o !== null) {
        s = o.next;
        let u = i.baseState;
        var c = 0;
        var d = null;
        var f = null;
        var p = null;
        if (s !== null) {for (let h = s; ;) {
            if ((l = h.expirationTime) < r) {
              var m = {
                expirationTime: h.expirationTime,
                suspenseConfig: h.suspenseConfig,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null,
              };
              p === null ? ((f = p = m), (d = u)) : (p = p.next = m),
              l > c && (c = l);
            } else {
              p !== null &&
                (p = p.next = {
                  expirationTime: 1073741823,
                  suspenseConfig: h.suspenseConfig,
                  tag: h.tag,
                  payload: h.payload,
                  callback: h.callback,
                  next: null,
                }),
              hs(l, h.suspenseConfig);
              e: {
                let g = e;
                  var v = h;
                switch (((l = t), (m = n), v.tag)) {
                  case 1:
                    if ('function' === typeof (g = v.payload)) {
                      u = g.call(m, u, l);
                      break e;
                    }
                    u = g;
                    break e;
                  case 3:
                    g.effectTag = (-4097 & g.effectTag) | 64;
                  case 0:
                    if (
                      (l =
                          "function" === typeof (g = v.payload)
                            ? g.call(m, u, l)
                            : g) ===
                        null ||
                      void 0 === l
                    ) break e;
                    u = a({}, u, l);
                    break e;
                  case 2:
                    ii = !0;
                }
              }
              h.callback !== null &&
                ((e.effectTag |= 32),
                (l = i.effects) === null ? (i.effects = [h]) : l.push(h));
            }
            if ((h = h.next) === null || h === s) {
              if ((l = i.shared.pending) === null) break;
              (h = o.next = l.next),
              (l.next = s),
              (i.baseQueue = o = l),
              (i.shared.pending = null);
            }
          }}
        p === null ? (d = u) : (p.next = f),
        (i.baseState = d),
        (i.baseQueue = p),
        ms(c),
        (e.expirationTime = c),
        (e.memoizedState = u);
      }
    }
    function fi(e, t, n) {
      if (((e = t.effects), (t.effects = null), e !== null)) {for (t = 0; t < e.length; t++) {
          let r = e[t];
            var a = r.callback;
          if (a !== null) {
            if (
              ((r.callback = null), (r = a), (a = n), 'function' !== typeof r)
            ) throw Error(o(191, r));
            r.call(a);
          }
        }}
    }
    const pi = Q.ReactCurrentBatchConfig;
    var hi = new r.Component().refs;
    function mi(e, t, n, r) {
      (n = null === (n = n(r, (t = e.memoizedState))) || void 0 === n
        ? t
        : a({}, t, n)),
      (e.memoizedState = n),
      e.expirationTime === 0 && (e.updateQueue.baseState = n);
    }
    const gi = {
      isMounted(e) {
        return !!(e = e._reactInternalFiber) && Ze(e) === e;
      },
      enqueueSetState(e, t, n) {
        e = e._reactInternalFiber;
        let r = ns();
          var a = pi.suspense;
        ((a = si((r = rs(r, e, a)), a)).payload = t),
        void 0 !== n && n !== null && (a.callback = n),
        ui(e, a),
        as(e, r);
      },
      enqueueReplaceState(e, t, n) {
        e = e._reactInternalFiber;
        let r = ns();
          var a = pi.suspense;
        ((a = si((r = rs(r, e, a)), a)).tag = 1),
        (a.payload = t),
        void 0 !== n && n !== null && (a.callback = n),
        ui(e, a),
        as(e, r);
      },
      enqueueForceUpdate(e, t) {
        e = e._reactInternalFiber;
        let n = ns();
          var r = pi.suspense;
        ((r = si((n = rs(n, e, r)), r)).tag = 2),
        void 0 !== t && t !== null && (r.callback = t),
        ui(e, r),
        as(e, n);
      },
    };
    function vi(e, t, n, r, a, i, o) {
      return typeof (e = e.stateNode).shouldComponentUpdate === 'function'
        ? e.shouldComponentUpdate(r, i, o)
        : !t.prototype
            || !t.prototype.isPureReactComponent
            || !Lr(n, r) || !Lr(a, i);
    }
    function bi(e, t, n) {
      let r = !1;
      var a = da;
      var i = t.contextType;
      return (
        typeof i === 'object' && i !== null
          ? (i = ai(i))
          : ((a = ga(t) ? ha : fa.current),
          (i = (r = (r = t.contextTypes) !== null && void 0 !== r)
            ? ma(e, a)
            : da)),
        (t = new t(n, i)),
        (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = gi),
        (e.stateNode = t),
        (t._reactInternalFiber = e),
        r
          && (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
          (e.__reactInternalMemoizedMaskedChildContext = i)),
        t
      );
    }
    function yi(e, t, n, r) {
      (e = t.state),
      'function' === typeof t.componentWillReceiveProps
          && t.componentWillReceiveProps(n, r),
      'function' === typeof t.UNSAFE_componentWillReceiveProps
          && t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && gi.enqueueReplaceState(t, t.state, null);
    }
    function wi(e, t, n, r) {
      const a = e.stateNode;
      (a.props = n), (a.state = e.memoizedState), (a.refs = hi), oi(e);
      let i = t.contextType;
      typeof i === 'object' && i !== null
        ? (a.context = ai(i))
        : ((i = ga(t) ? ha : fa.current), (a.context = ma(e, i))),
      di(e, n, a, r),
      (a.state = e.memoizedState),
      'function' === typeof (i = t.getDerivedStateFromProps)
          && (mi(e, t, i, n), (a.state = e.memoizedState)),
      'function' === typeof t.getDerivedStateFromProps
          || 'function' === typeof a.getSnapshotBeforeUpdate
          || (typeof a.UNSAFE_componentWillMount !== 'function'
            && 'function' !== typeof a.componentWillMount)
          || ((t = a.state),
          typeof a.componentWillMount === 'function' && a.componentWillMount(),
          typeof a.UNSAFE_componentWillMount === 'function'
            && a.UNSAFE_componentWillMount(),
          t !== a.state && gi.enqueueReplaceState(a, a.state, null),
          di(e, n, a, r),
          (a.state = e.memoizedState)),
      'function' === typeof a.componentDidMount && (e.effectTag |= 4);
    }
    const xi = Array.isArray;
    function Si(e, t, n) {
      if (
        (e = n.ref) !== null
        && 'function' !== typeof e
        && 'object' !== typeof e
      ) {
        if (n._owner) {
          if ((n = n._owner)) {
            if (n.tag !== 1) throw Error(o(309));
            var r = n.stateNode;
          }
          if (!r) throw Error(o(147, e));
          const a = `${  e}`;
          return t !== null
            && t.ref !== null
            && 'function' === typeof t.ref
            && t.ref._stringRef === a
            ? t.ref
            : (((t = function (e) {
              let t = r.refs;
              t === hi && (t = r.refs = {}),
              e === null ? delete t[a] : (t[a] = e);
            })._stringRef = a),
            t);
        }
        if (typeof e !== 'string') throw Error(o(284));
        if (!n._owner) throw Error(o(290, e));
      }
      return e;
    }
    function ki(e, t) {
      if (e.type !== 'textarea') {throw Error(
          o(
            31,
            '[object Object]' === Object.prototype.toString.call(t)
              ? 'object with keys {' + Object.keys(t).join(', ') + '}'
              : t,
            ''
          ),
        );}
    }
    function Ei(e) {
      function t(t, n) {
        if (e) {
          const r = t.lastEffect;
          r !== null
            ? ((r.nextEffect = n), (t.lastEffect = n))
            : (t.firstEffect = t.lastEffect = n),
          (n.nextEffect = null),
          (n.effectTag = 8);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; r !== null;) t(n, r), (r = r.sibling);
        return null;
      }
      function r(e, t) {
        for (e = new Map(); t !== null;) t.key !== null ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
        return e;
      }
      function a(e, t) {
        return ((e = Fs(e, t)).index = 0), (e.sibling = null), e;
      }
      function i(t, n, r) {
        return (
          (t.index = r),
          e
            ? (r = t.alternate) !== null
              ? (r = r.index) < n
                ? ((t.effectTag = 2), n)
                : r
              : ((t.effectTag = 2), n)
            : n
        );
      }
      function l(t) {
        return e && t.alternate === null && (t.effectTag = 2), t;
      }
      function s(e, t, n, r) {
        return t === null || t.tag !== 6
          ? (((t = js(n, e.mode, r)).return = e), t)
          : (((t = a(t, n)).return = e), t);
      }
      function u(e, t, n, r) {
        return t !== null && t.elementType === n.type
          ? (((r = a(t, n.props)).ref = Si(e, t, n)), (r.return = e), r)
          : (((r = Ds(n.type, n.key, n.props, null, e.mode, r)).ref = Si(
            e,
            t,
            n,
          )),
          (r.return = e),
          r);
      }
      function c(e, t, n, r) {
        return t === null
          || t.tag !== 4
          || t.stateNode.containerInfo !== n.containerInfo
          || t.stateNode.implementation !== n.implementation
          ? (((t = Rs(n, e.mode, r)).return = e), t)
          : (((t = a(t, n.children || [])).return = e), t);
      }
      function d(e, t, n, r, i) {
        return t === null || t.tag !== 7
          ? (((t = Is(n, e.mode, r, i)).return = e), t)
          : (((t = a(t, n)).return = e), t);
      }
      function f(e, t, n) {
        if (typeof t === 'string' || typeof t === 'number') return ((t = js(`${  t}`, e.mode, n)).return = e), t;
        if (typeof t === 'object' && t !== null) {
          switch (t.$$typeof) {
            case J:
              return (
                ((n = Ds(t.type, t.key, t.props, null, e.mode, n)).ref = Si(
                  e,
                  null,
                  t,
                )),
                (n.return = e),
                n
              );
            case ee:
              return ((t = Rs(t, e.mode, n)).return = e), t;
          }
          if (xi(t) || he(t)) return ((t = Is(t, e.mode, n, null)).return = e), t;
          ki(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        const a = t !== null ? t.key : null;
        if (typeof n === 'string' || typeof n === 'number') return a !== null ? null : s(e, t, `${  n}`, r);
        if (typeof n === 'object' && n !== null) {
          switch (n.$$typeof) {
            case J:
              return n.key === a
                ? n.type === te
                  ? d(e, t, n.props.children, r, a)
                  : u(e, t, n, r)
                : null;
            case ee:
              return n.key === a ? c(e, t, n, r) : null;
          }
          if (xi(n) || he(n)) return a !== null ? null : d(e, t, n, r, null);
          ki(e, n);
        }
        return null;
      }
      function h(e, t, n, r, a) {
        if (typeof r === 'string' || typeof r === 'number') return s(t, (e = e.get(n) || null), `${  r}`, a);
        if (typeof r === 'object' && r !== null) {
          switch (r.$$typeof) {
            case J:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                r.type === te
                  ? d(t, e, r.props.children, a, r.key)
                  : u(t, e, r, a)
              );
            case ee:
              return c(
                t,
                (e = e.get(r.key === null ? n : r.key) || null),
                r,
                a,
              );
          }
          if (xi(r) || he(r)) return d(t, (e = e.get(n) || null), r, a, null);
          ki(t, r);
        }
        return null;
      }
      function m(a, o, l, s) {
        for (
          var u = null, c = null, d = o, m = (o = 0), g = null;
          d !== null && m < l.length;
          m++
        ) {
          d.index > m ? ((g = d), (d = null)) : (g = d.sibling);
          const v = p(a, d, l[m], s);
          if (v === null) {
            d === null && (d = g);
            break;
          }
          e && d && v.alternate === null && t(a, d),
          (o = i(v, o, m)),
          c === null ? (u = v) : (c.sibling = v),
          (c = v),
          (d = g);
        }
        if (m === l.length) return n(a, d), u;
        if (d === null) {
          for (; m < l.length; m++) (d = f(a, l[m], s)) !== null
              && ((o = i(d, o, m)),
              c === null ? (u = d) : (c.sibling = d),
              (c = d));
          return u;
        }
        for (d = r(a, d); m < l.length; m++) (g = h(d, a, m, l[m], s)) !== null
            && (e && g.alternate !== null && d.delete(g.key === null ? m : g.key),
            (o = i(g, o, m)),
            c === null ? (u = g) : (c.sibling = g),
            (c = g));
        return (
          e
            && d.forEach((e) => t(a, e)),
          u
        );
      }
      function g(a, l, s, u) {
        let c = he(s);
        if (typeof c !== 'function') throw Error(o(150));
        if ((s = c.call(s)) == null) throw Error(o(151));
        for (
          var d = (c = null), m = l, g = (l = 0), v = null, b = s.next();
          m !== null && !b.done;
          g++, b = s.next()
        ) {
          m.index > g ? ((v = m), (m = null)) : (v = m.sibling);
          const y = p(a, m, b.value, u);
          if (y === null) {
            m === null && (m = v);
            break;
          }
          e && m && y.alternate === null && t(a, m),
          (l = i(y, l, g)),
          d === null ? (c = y) : (d.sibling = y),
          (d = y),
          (m = v);
        }
        if (b.done) return n(a, m), c;
        if (m === null) {
          for (; !b.done; g++, b = s.next()) (b = f(a, b.value, u)) !== null
              && ((l = i(b, l, g)),
              d === null ? (c = b) : (d.sibling = b),
              (d = b));
          return c;
        }
        for (m = r(a, m); !b.done; g++, b = s.next()) (b = h(m, a, g, b.value, u)) !== null
            && (e && b.alternate !== null && m.delete(b.key === null ? g : b.key),
            (l = i(b, l, g)),
            d === null ? (c = b) : (d.sibling = b),
            (d = b));
        return (
          e
            && m.forEach((e) => t(a, e)),
          c
        );
      }
      return function (e, r, i, s) {
        let u = "object" === typeof i
          && i !== null
          && i.type === te
          && i.key === null;
        u && (i = i.props.children);
        let c = typeof i === 'object' && i !== null;
        if (c) {switch (i.$$typeof) {
            case J:
              e: {
                for (c = i.key, u = r; u !== null;) {
                  if (u.key === c) {
                    switch (u.tag) {
                      case 7:
                        if (i.type === te) {
                          n(e, u.sibling),
                          ((r = a(u, i.props.children)).return = e),
                          (e = r);
                          break e;
                        }
                        break;
                      default:
                        if (u.elementType === i.type) {
                          n(e, u.sibling),
                          ((r = a(u, i.props)).ref = Si(e, u, i)),
                          (r.return = e),
                          (e = r);
                          break e;
                        }
                    }
                    n(e, u);
                    break;
                  }
                  t(e, u), (u = u.sibling);
                }
                i.type === te
                  ? (((r = Is(i.props.children, e.mode, s, i.key)).return = e),
                  (e = r))
                  : (((s = Ds(
                    i.type,
                    i.key,
                    i.props,
                    null,
                    e.mode,
                    s,
                  )).ref = Si(e, r, i)),
                  (s.return = e),
                  (e = s));
              }
              return l(e);
            case ee:
              e: {
                for (u = i.key; r !== null;) {
                  if (r.key === u) {
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === i.containerInfo
                      && r.stateNode.implementation === i.implementation
                    ) {
                      n(e, r.sibling),
                      ((r = a(r, i.children || [])).return = e),
                      (e = r);
                      break e;
                    }
                    n(e, r);
                    break;
                  }
                  t(e, r), (r = r.sibling);
                }
                ((r = Rs(i, e.mode, s)).return = e), (e = r);
              }
              return l(e);
          }}
        if (typeof i === 'string' || typeof i === 'number') {return (
            (i = '' + i),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), ((r = a(r, i)).return = e), (e = r))
              : (n(e, r), ((r = js(i, e.mode, s)).return = e), (e = r)),
            l(e)
          );}
        if (xi(i)) return m(e, r, i, s);
        if (he(i)) return g(e, r, i, s);
        if ((c && ki(e, i), typeof i === 'undefined' && !u)) {switch (e.tag) {
            case 1:
            case 0:
              throw ((e = e.type),
              Error(o(152, e.displayName || e.name || 'Component')));
          }}
        return n(e, r);
      };
    }
    const Ci = Ei(!0);
    var Ti = Ei(!1);
    var Oi = {};
    var Pi = { current: Oi };
    var Ai = { current: Oi };
    var Mi = { current: Oi };
    function _i(e) {
      if (e === Oi) throw Error(o(174));
      return e;
    }
    function Ni(e, t) {
      switch ((ca(Mi, t), ca(Ai, e), ca(Pi, Oi), (e = t.nodeType))) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : je(null, '');
          break;
        default:
          t = je(
            (t = (e = e === 8 ? t.parentNode : t).namespaceURI || null),
            (e = e.tagName),
          );
      }
      ua(Pi), ca(Pi, t);
    }
    function Fi() {
      ua(Pi), ua(Ai), ua(Mi);
    }
    function Di(e) {
      _i(Mi.current);
      const t = _i(Pi.current);
      var n = je(t, e.type);
      t !== n && (ca(Ai, e), ca(Pi, n));
    }
    function Ii(e) {
      Ai.current === e && (ua(Pi), ua(Ai));
    }
    const ji = { current: 0 };
    function Ri(e) {
      for (let t = e; t !== null;) {
        if (t.tag === 13) {
          let n = t.memoizedState;
          if (
            n !== null
            && ((n = n.dehydrated) === null || n.data === hn || n.data === mn)
          ) return t;
        } else if (t.tag === 19 && void 0 !== t.memoizedProps.revealOrder) {
          if ((64 & t.effectTag) !== 0) return t;
        } else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
      return null;
    }
    function zi(e, t) {
      return { responder: e, props: t };
    }
    const Bi = Q.ReactCurrentDispatcher;
    var Li = Q.ReactCurrentBatchConfig;
    var Ui = 0;
    var Hi = null;
    var Wi = null;
    var Vi = null;
    var qi = !1;
    function Gi() {
      throw Error(o(321));
    }
    function Yi(e, t) {
      if (t === null) return !1;
      for (let n = 0; n < t.length && n < e.length; n++) if (!zr(e[n], t[n])) return !1;
      return !0;
    }
    function Ki(e, t, n, r, a, i) {
      if (
        ((Ui = i),
        (Hi = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.expirationTime = 0),
        (Bi.current = e === null || e.memoizedState === null ? bo : yo),
        (e = n(r, a)),
        t.expirationTime === Ui)
      ) {
        i = 0;
        do {
          if (((t.expirationTime = 0), !(i < 25))) throw Error(o(301));
          (i += 1),
          (Vi = Wi = null),
          (t.updateQueue = null),
          (Bi.current = wo),
          (e = n(r, a));
        } while (t.expirationTime === Ui);
      }
      if (
        ((Bi.current = vo),
        (t = Wi !== null && Wi.next !== null),
        (Ui = 0),
        (Vi = Wi = Hi = null),
        (qi = !1),
        t)
      ) throw Error(o(300));
      return e;
    }
    function Qi() {
      const e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return Vi === null ? (Hi.memoizedState = Vi = e) : (Vi = Vi.next = e), Vi;
    }
    function $i() {
      if (Wi === null) {
        var e = Hi.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Wi.next;
      const t = Vi === null ? Hi.memoizedState : Vi.next;
      if (t !== null) (Vi = t), (Wi = e);
      else {
        if (e === null) throw Error(o(310));
        (e = {
          memoizedState: (Wi = e).memoizedState,
          baseState: Wi.baseState,
          baseQueue: Wi.baseQueue,
          queue: Wi.queue,
          next: null,
        }),
        Vi === null ? (Hi.memoizedState = Vi = e) : (Vi = Vi.next = e);
      }
      return Vi;
    }
    function Xi(e, t) {
      return typeof t === 'function' ? t(e) : t;
    }
    function Zi(e) {
      const t = $i();
      var n = t.queue;
      if (n === null) throw Error(o(311));
      n.lastRenderedReducer = e;
      let r = Wi;
      var a = r.baseQueue;
      var i = n.pending;
      if (i !== null) {
        if (a !== null) {
          var l = a.next;
          (a.next = i.next), (i.next = l);
        }
        (r.baseQueue = a = i), (n.pending = null);
      }
      if (a !== null) {
        (a = a.next), (r = r.baseState);
        let s = (l = i = null);
        var u = a;
        do {
          const c = u.expirationTime;
          if (c < Ui) {
            const d = {
              expirationTime: u.expirationTime,
              suspenseConfig: u.suspenseConfig,
              action: u.action,
              eagerReducer: u.eagerReducer,
              eagerState: u.eagerState,
              next: null,
            };
            s === null ? ((l = s = d), (i = r)) : (s = s.next = d),
            c > Hi.expirationTime && ((Hi.expirationTime = c), ms(c));
          } else s !== null
              && (s = s.next = {
                expirationTime: 1073741823,
                suspenseConfig: u.suspenseConfig,
                action: u.action,
                eagerReducer: u.eagerReducer,
                eagerState: u.eagerState,
                next: null,
              }),
          hs(c, u.suspenseConfig),
          (r = u.eagerReducer === e ? u.eagerState : e(r, u.action));
          u = u.next;
        } while (u !== null && u !== a);
        s === null ? (i = r) : (s.next = l),
        zr(r, t.memoizedState) || (_o = !0),
        (t.memoizedState = r),
        (t.baseState = i),
        (t.baseQueue = s),
        (n.lastRenderedState = r);
      }
      return [t.memoizedState, n.dispatch];
    }
    function Ji(e) {
      const t = $i();
      var n = t.queue;
      if (n === null) throw Error(o(311));
      n.lastRenderedReducer = e;
      const r = n.dispatch;
      var a = n.pending;
      var i = t.memoizedState;
      if (a !== null) {
        n.pending = null;
        let l = (a = a.next);
        do {
          (i = e(i, l.action)), (l = l.next);
        } while (l !== a);
        zr(i, t.memoizedState) || (_o = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i);
      }
      return [i, r];
    }
    function eo(e) {
      const t = Qi();
      return (
        typeof e === 'function' && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = (e = t.queue = {
          pending: null,
          dispatch: null,
          lastRenderedReducer: Xi,
          lastRenderedState: e,
        }).dispatch = go.bind(null, Hi, e)),
        [t.memoizedState, e]
      );
    }
    function to(e, t, n, r) {
      return (
        (e = {
          tag: e, create: t, destroy: n, deps: r, next: null, 
        }),
        (t = Hi.updateQueue) === null
          ? ((t = { lastEffect: null }),
          (Hi.updateQueue = t),
          (t.lastEffect = e.next = e))
          : (n = t.lastEffect) === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function no() {
      return $i().memoizedState;
    }
    function ro(e, t, n, r) {
      const a = Qi();
      (Hi.effectTag |= e),
      (a.memoizedState = to(1 | t, n, void 0, void 0 === r ? null : r));
    }
    function ao(e, t, n, r) {
      const a = $i();
      r = void 0 === r ? null : r;
      let i = void 0;
      if (Wi !== null) {
        const o = Wi.memoizedState;
        if (((i = o.destroy), r !== null && Yi(r, o.deps))) return void to(t, n, i, r);
      }
      (Hi.effectTag |= e), (a.memoizedState = to(1 | t, n, i, r));
    }
    function io(e, t) {
      return ro(516, 4, e, t);
    }
    function oo(e, t) {
      return ao(516, 4, e, t);
    }
    function lo(e, t) {
      return ao(4, 2, e, t);
    }
    function so(e, t) {
      return typeof t === 'function'
        ? ((e = e()),
        t(e),
        function () {
          t(null);
        })
        : t !== null && void 0 !== t
          ? ((e = e()),
          (t.current = e),
          function () {
            t.current = null;
          })
          : void 0;
    }
    function uo(e, t, n) {
      return (
        (n = n !== null && void 0 !== n ? n.concat([e]) : null),
        ao(4, 2, so.bind(null, t, e), n)
      );
    }
    function co() {}
    function fo(e, t) {
      return (Qi().memoizedState = [e, void 0 === t ? null : t]), e;
    }
    function po(e, t) {
      const n = $i();
      t = void 0 === t ? null : t;
      const r = n.memoizedState;
      return r !== null && t !== null && Yi(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
    }
    function ho(e, t) {
      const n = $i();
      t = void 0 === t ? null : t;
      const r = n.memoizedState;
      return r !== null && t !== null && Yi(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
    }
    function mo(e, t, n) {
      const r = Ua();
      Wa(r < 98 ? 98 : r, () => {
        e(!0);
      }),
      Wa(r > 97 ? 97 : r, () => {
        var r = Li.suspense;
        Li.suspense = void 0 === t ? null : t;
        try {
          e(!1), n();
        } finally {
          Li.suspense = r;
        }
      });
    }
    function go(e, t, n) {
      let r = ns();
      var a = pi.suspense;
      a = {
        expirationTime: (r = rs(r, e, a)),
        suspenseConfig: a,
        action: n,
        eagerReducer: null,
        eagerState: null,
        next: null,
      };
      let i = t.pending;
      if (
        (i === null ? (a.next = a) : ((a.next = i.next), (i.next = a)),
        (t.pending = a),
        (i = e.alternate),
        e === Hi || (i !== null && i === Hi))
      ) (qi = !0), (a.expirationTime = Ui), (Hi.expirationTime = Ui);
      else {
        if (
          e.expirationTime === 0
          && (i === null || i.expirationTime === 0)
          && (i = t.lastRenderedReducer) !== null
        ) {try {
            let o = t.lastRenderedState;
              var l = i(o, n);
            if (((a.eagerReducer = i), (a.eagerState = l), zr(l, o))) return;
          } catch (s) {}}
        as(e, r);
      }
    }
    var vo = {
      readContext: ai,
      useCallback: Gi,
      useContext: Gi,
      useEffect: Gi,
      useImperativeHandle: Gi,
      useLayoutEffect: Gi,
      useMemo: Gi,
      useReducer: Gi,
      useRef: Gi,
      useState: Gi,
      useDebugValue: Gi,
      useResponder: Gi,
      useDeferredValue: Gi,
      useTransition: Gi,
    };
    var bo = {
      readContext: ai,
      useCallback: fo,
      useContext: ai,
      useEffect: io,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n !== null && void 0 !== n ? n.concat([e]) : null),
          ro(4, 2, so.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return ro(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Qi();
        return (
          (t = void 0 === t ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = Qi();
        return (
          (t = void 0 !== n ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = (e = r.queue = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }).dispatch = go.bind(null, Hi, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        return (e = { current: e }), (Qi().memoizedState = e);
      },
      useState: eo,
      useDebugValue: co,
      useResponder: zi,
      useDeferredValue: function (e, t) {
        var n = eo(e);
            var r = n[0];
            var a = n[1];
        return (
          io(
            function () {
              var n = Li.suspense;
              Li.suspense = void 0 === t ? null : t;
              try {
                a(e);
              } finally {
                Li.suspense = n;
              }
            },
            [e, t],
          ),
          r
        );
      },
      useTransition: function (e) {
        var t = eo(!1);
            var n = t[0];
        return (t = t[1]), [fo(mo.bind(null, t, e), [t, e]), n];
      },
    };
    var yo = {
      readContext: ai,
      useCallback: po,
      useContext: ai,
      useEffect: oo,
      useImperativeHandle: uo,
      useLayoutEffect: lo,
      useMemo: ho,
      useReducer: Zi,
      useRef: no,
      useState: function () {
        return Zi(Xi);
      },
      useDebugValue: co,
      useResponder: zi,
      useDeferredValue: function (e, t) {
        var n = Zi(Xi);
            var r = n[0];
            var a = n[1];
        return (
          oo(
            function () {
              var n = Li.suspense;
              Li.suspense = void 0 === t ? null : t;
              try {
                a(e);
              } finally {
                Li.suspense = n;
              }
            },
            [e, t],
          ),
          r
        );
      },
      useTransition: function (e) {
        var t = Zi(Xi);
            var n = t[0];
        return (t = t[1]), [po(mo.bind(null, t, e), [t, e]), n];
      },
    };
    var wo = {
      readContext: ai,
      useCallback: po,
      useContext: ai,
      useEffect: oo,
      useImperativeHandle: uo,
      useLayoutEffect: lo,
      useMemo: ho,
      useReducer: Ji,
      useRef: no,
      useState: function () {
        return Ji(Xi);
      },
      useDebugValue: co,
      useResponder: zi,
      useDeferredValue: function (e, t) {
        var n = Ji(Xi);
            var r = n[0];
            var a = n[1];
        return (
          oo(
            function () {
              var n = Li.suspense;
              Li.suspense = void 0 === t ? null : t;
              try {
                a(e);
              } finally {
                Li.suspense = n;
              }
            },
            [e, t],
          ),
          r
        );
      },
      useTransition: function (e) {
        var t = Ji(Xi);
            var n = t[0];
        return (t = t[1]), [po(mo.bind(null, t, e), [t, e]), n];
      },
    };
    var xo = null;
    var So = null;
    var ko = !1;
    function Eo(e, t) {
      const n = _s(5, null, null, 0);
      (n.elementType = 'DELETED'),
      (n.type = 'DELETED'),
      (n.stateNode = t),
      (n.return = e),
      (n.effectTag = 8),
      e.lastEffect !== null
        ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
        : (e.firstEffect = e.lastEffect = n);
    }
    function Co(e, t) {
      switch (e.tag) {
        case 5:
          var n = e.type;
          return (
            (t =                1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase()
                  ? null
                  : t)
              !== null && ((e.stateNode = t), !0)
          );
        case 6:
          return (
            (t = '' === e.pendingProps || t.nodeType !== 3 ? null : t)
              !== null
            && ((e.stateNode = t), !0)
          );
        case 13:
        default:
          return !1;
      }
    }
    function To(e) {
      if (ko) {
        let t = So;
        if (t) {
          const n = t;
          if (!Co(e, t)) {
            if (!(t = Sn(n.nextSibling)) || !Co(e, t)) {return (
                (e.effectTag = (-1025 & e.effectTag) | 2),
                (ko = !1),
                void (xo = e)
              );}
            Eo(xo, n);
          }
          (xo = e), (So = Sn(t.firstChild));
        } else (e.effectTag = (-1025 & e.effectTag) | 2), (ko = !1), (xo = e);
      }
    }
    function Oo(e) {
      for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

      ) e = e.return;
      xo = e;
    }
    function Po(e) {
      if (e !== xo) return !1;
      if (!ko) return Oo(e), (ko = !0), !1;
      let t = e.type;
      if (
        e.tag !== 5
        || (t !== 'head' && t !== 'body' && !yn(t, e.memoizedProps))
      ) for (t = So; t;) Eo(e, t), (t = Sn(t.nextSibling));
      if ((Oo(e), e.tag === 13)) {
        if (!(e = (e = e.memoizedState) !== null ? e.dehydrated : null)) throw Error(o(317));
        e: {
          for (e = e.nextSibling, t = 0; e;) {
            if (e.nodeType === 8) {
              const n = e.data;
              if (n === pn) {
                if (t === 0) {
                  So = Sn(e.nextSibling);
                  break e;
                }
                t--;
              } else (n !== fn && n !== mn && n !== hn) || t++;
            }
            e = e.nextSibling;
          }
          So = null;
        }
      } else So = xo ? Sn(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Ao() {
      (So = xo = null), (ko = !1);
    }
    let Mo = Q.ReactCurrentOwner;
    var _o = !1;
    function No(e, t, n, r) {
      t.child = e === null ? Ti(t, null, n, r) : Ci(t, e.child, n, r);
    }
    function Fo(e, t, n, r, a) {
      n = n.render;
      const i = t.ref;
      return (
        ri(t, a),
        (r = Ki(e, t, n, r, i, a)),
        e === null || _o
          ? ((t.effectTag |= 1), No(e, t, r, a), t.child)
          : ((t.updateQueue = e.updateQueue),
          (t.effectTag &= -517),
          e.expirationTime <= a && (e.expirationTime = 0),
          $o(e, t, a))
      );
    }
    function Do(e, t, n, r, a, i) {
      if (e === null) {
        var o = n.type;
        return typeof o !== 'function'
          || Ns(o)
          || void 0 !== o.defaultProps
          || n.compare !== null
          || void 0 !== n.defaultProps
          ? (((e = Ds(n.type, null, r, null, t.mode, i)).ref = t.ref),
          (e.return = t),
          (t.child = e))
          : ((t.tag = 15), (t.type = o), Io(e, t, o, r, a, i));
      }
      return (
        (o = e.child),
        a < i
        && ((a = o.memoizedProps),
        (n = (n = n.compare) !== null ? n : Lr)(a, r) && e.ref === t.ref)
          ? $o(e, t, i)
          : ((t.effectTag |= 1),
          ((e = Fs(o, r)).ref = t.ref),
          (e.return = t),
          (t.child = e))
      );
    }
    function Io(e, t, n, r, a, i) {
      return e !== null
        && Lr(e.memoizedProps, r)
        && e.ref === t.ref
        && ((_o = !1), a < i)
        ? ((t.expirationTime = e.expirationTime), $o(e, t, i))
        : Ro(e, t, n, r, i);
    }
    function jo(e, t) {
      const n = t.ref;
      ((e === null && n !== null) || (e !== null && e.ref !== n))
        && (t.effectTag |= 128);
    }
    function Ro(e, t, n, r, a) {
      let i = ga(n) ? ha : fa.current;
      return (
        (i = ma(t, i)),
        ri(t, a),
        (n = Ki(e, t, n, r, i, a)),
        e === null || _o
          ? ((t.effectTag |= 1), No(e, t, n, a), t.child)
          : ((t.updateQueue = e.updateQueue),
          (t.effectTag &= -517),
          e.expirationTime <= a && (e.expirationTime = 0),
          $o(e, t, a))
      );
    }
    function zo(e, t, n, r, a) {
      if (ga(n)) {
        var i = !0;
        wa(t);
      } else i = !1;
      if ((ri(t, a), t.stateNode === null)) e !== null
          && ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
      bi(t, n, r),
      wi(t, n, r, a),
      (r = !0);
      else if (e === null) {
        var o = t.stateNode;
        var l = t.memoizedProps;
        o.props = l;
        var s = o.context;
        var u = n.contextType;
        typeof u === 'object' && u !== null
          ? (u = ai(u))
          : (u = ma(t, (u = ga(n) ? ha : fa.current)));
        var c = n.getDerivedStateFromProps;
        var d = "function" === typeof c
            || 'function' === typeof o.getSnapshotBeforeUpdate;
        d
          || (typeof o.UNSAFE_componentWillReceiveProps !== 'function'
            && 'function' !== typeof o.componentWillReceiveProps)
          || ((l !== r || s !== u) && yi(t, o, r, u)),
        (ii = !1);
        var f = t.memoizedState;
        (o.state = f),
        di(t, r, o, a),
        (s = t.memoizedState),
        l !== r || f !== s || pa.current || ii
          ? (typeof c === 'function'
                && (mi(t, n, c, r), (s = t.memoizedState)),
          (l = ii || vi(t, n, l, r, f, s, u))
            ? (d
                    || (typeof o.UNSAFE_componentWillMount !== 'function'
                      && 'function' !== typeof o.componentWillMount)
                    || (typeof o.componentWillMount === 'function'
                      && o.componentWillMount(),
                    typeof o.UNSAFE_componentWillMount === 'function'
                      && o.UNSAFE_componentWillMount()),
            'function' === typeof o.componentDidMount
                    && (t.effectTag |= 4))
            : (typeof o.componentDidMount === 'function'
                    && (t.effectTag |= 4),
            (t.memoizedProps = r),
            (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = u),
          (r = l))
          : (typeof o.componentDidMount === 'function' && (t.effectTag |= 4),
          (r = !1));
      } else {(o = t.stateNode),
        li(e, t),
        (l = t.memoizedProps),
        (o.props = t.type === t.elementType ? l : Qa(t.type, l)),
        (s = o.context),
        "object" === typeof (u = n.contextType) && u !== null
          ? (u = ai(u))
          : (u = ma(t, (u = ga(n) ? ha : fa.current))),
        (d =            "function" === typeof (c = n.getDerivedStateFromProps)
            || "function" === typeof o.getSnapshotBeforeUpdate)
            || ('function' !== typeof o.UNSAFE_componentWillReceiveProps
              && "function" !== typeof o.componentWillReceiveProps)
            || ((l !== r || s !== u) && yi(t, o, r, u)),
        (ii = !1),
        (s = t.memoizedState),
        (o.state = s),
        di(t, r, o, a),
        (f = t.memoizedState),
        l !== r || s !== f || pa.current || ii
          ? ('function' === typeof c
                && (mi(t, n, c, r), (f = t.memoizedState)),
          (c = ii || vi(t, n, l, r, s, f, u))
            ? (d
                    || ('function' !== typeof o.UNSAFE_componentWillUpdate
                      && "function" !== typeof o.componentWillUpdate)
                    || ('function' === typeof o.componentWillUpdate
                      && o.componentWillUpdate(r, f, u),
                    'function' === typeof o.UNSAFE_componentWillUpdate
                      && o.UNSAFE_componentWillUpdate(r, f, u)),
            "function" === typeof o.componentDidUpdate
                    && (t.effectTag |= 4),
            "function" === typeof o.getSnapshotBeforeUpdate
                    && (t.effectTag |= 256))
            : ('function' !== typeof o.componentDidUpdate
                    || (l === e.memoizedProps && s === e.memoizedState)
                    || (t.effectTag |= 4),
            "function" !== typeof o.getSnapshotBeforeUpdate
                    || (l === e.memoizedProps && s === e.memoizedState)
                    || (t.effectTag |= 256),
            (t.memoizedProps = r),
            (t.memoizedState = f)),
          (o.props = r),
          (o.state = f),
          (o.context = u),
          (r = c))
          : ('function' !== typeof o.componentDidUpdate
                || (l === e.memoizedProps && s === e.memoizedState)
                || (t.effectTag |= 4),
          "function" !== typeof o.getSnapshotBeforeUpdate
                || (l === e.memoizedProps && s === e.memoizedState)
                || (t.effectTag |= 256),
          (r = !1));}
      return Bo(e, t, n, r, i, a);
    }
    function Bo(e, t, n, r, a, i) {
      jo(e, t);
      const o = (64 & t.effectTag) !== 0;
      if (!r && !o) return a && xa(t, n, !1), $o(e, t, i);
      (r = t.stateNode), (Mo.current = t);
      const l = o && typeof n.getDerivedStateFromError !== 'function'
        ? null
        : r.render();
      return (
        (t.effectTag |= 1),
        e !== null && o
          ? ((t.child = Ci(t, e.child, null, i)), (t.child = Ci(t, null, l, i)))
          : No(e, t, l, i),
        (t.memoizedState = r.state),
        a && xa(t, n, !0),
        t.child
      );
    }
    function Lo(e) {
      const t = e.stateNode;
      t.pendingContext
        ? ba(0, t.pendingContext, t.pendingContext !== t.context)
        : t.context && ba(0, t.context, !1),
      Ni(e, t.containerInfo);
    }
    let Uo;
    var Ho;
    var Wo;
    var Vo;
    var qo = { dehydrated: null, retryTime: 0 };
    function Go(e, t, n) {
      let r;
      var a = t.mode;
      var i = t.pendingProps;
      var o = ji.current;
      var l = !1;
      if (
        ((r = (64 & t.effectTag) !== 0)
          || (r = (2 & o) !== 0 && (e === null || e.memoizedState !== null)),
        r
          ? ((l = !0), (t.effectTag &= -65))
          : (e !== null && e.memoizedState === null)
            || void 0 === i.fallback
            || !0 === i.unstable_avoidThisFallback
            || (o |= 1),
        ca(ji, 1 & o),
        e === null)
      ) {
        if ((void 0 !== i.fallback && To(t), l)) {
          if (
            ((l = i.fallback),
            ((i = Is(null, a, 0, null)).return = t),
            (2 & t.mode) === 0)
          ) {for (
              e = t.memoizedState !== null ? t.child.child : t.child,
              i.child = e;
              e !== null;

            ) (e.return = i), (e = e.sibling);}
          return (
            ((n = Is(l, a, n, null)).return = t),
            (i.sibling = n),
            (t.memoizedState = qo),
            (t.child = i),
            n
          );
        }
        return (
          (a = i.children),
          (t.memoizedState = null),
          (t.child = Ti(t, null, a, n))
        );
      }
      if (e.memoizedState !== null) {
        if (((a = (e = e.child).sibling), l)) {
          if (
            ((i = i.fallback),
            ((n = Fs(e, e.pendingProps)).return = t),
            (2 & t.mode) === 0
              && (l = t.memoizedState !== null ? t.child.child : t.child)
                !== e.child)
          ) for (n.child = l; l !== null;) (l.return = n), (l = l.sibling);
          return (
            ((a = Fs(a, i)).return = t),
            (n.sibling = a),
            (n.childExpirationTime = 0),
            (t.memoizedState = qo),
            (t.child = n),
            a
          );
        }
        return (
          (n = Ci(t, e.child, i.children, n)),
          (t.memoizedState = null),
          (t.child = n)
        );
      }
      if (((e = e.child), l)) {
        if (
          ((l = i.fallback),
          ((i = Is(null, a, 0, null)).return = t),
          (i.child = e),
          e !== null && (e.return = i),
          (2 & t.mode) === 0)
        ) {for (
            e = t.memoizedState !== null ? t.child.child : t.child, i.child = e;
            e !== null;

          ) (e.return = i), (e = e.sibling);}
        return (
          ((n = Is(l, a, n, null)).return = t),
          (i.sibling = n),
          (n.effectTag |= 2),
          (i.childExpirationTime = 0),
          (t.memoizedState = qo),
          (t.child = i),
          n
        );
      }
      return (t.memoizedState = null), (t.child = Ci(t, e, i.children, n));
    }
    function Yo(e, t) {
      e.expirationTime < t && (e.expirationTime = t);
      const n = e.alternate;
      n !== null && n.expirationTime < t && (n.expirationTime = t),
      ni(e.return, t);
    }
    function Ko(e, t, n, r, a, i) {
      const o = e.memoizedState;
      o === null
        ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailExpiration: 0,
          tailMode: a,
          lastEffect: i,
        })
        : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailExpiration = 0),
        (o.tailMode = a),
        (o.lastEffect = i));
    }
    function Qo(e, t, n) {
      let r = t.pendingProps;
      var a = r.revealOrder;
      var i = r.tail;
      if ((No(e, t, r.children, n), (2 & (r = ji.current)) !== 0)) (r = (1 & r) | 2), (t.effectTag |= 64);
      else {
        if (e !== null && (64 & e.effectTag) !== 0) {e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Yo(e, n);
            else if (e.tag === 19) Yo(e, n);
            else if (e.child !== null) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break;
            for (; e.sibling === null;) {
              if (e.return === null || e.return === t) break e;
              e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
          }}
        r &= 1;
      }
      if ((ca(ji, r), (2 & t.mode) === 0)) t.memoizedState = null;
      else {switch (a) {
          case 'forwards':
            for (n = t.child, a = null; n !== null;) null !== (e = n.alternate) && Ri(e) === null && (a = n),
              (n = n.sibling);
            (n = a) === null
              ? ((a = t.child), (t.child = null))
              : ((a = n.sibling), (n.sibling = null)),
            Ko(t, !1, a, n, i, t.lastEffect);
            break;
          case 'backwards':
            for (n = null, a = t.child, t.child = null; a !== null;) {
              if ((e = a.alternate) !== null && Ri(e) === null) {
                t.child = a;
                break;
              }
              (e = a.sibling), (a.sibling = n), (n = a), (a = e);
            }
            Ko(t, !0, n, null, i, t.lastEffect);
            break;
          case 'together':
            Ko(t, !1, null, null, void 0, t.lastEffect);
            break;
          default:
            t.memoizedState = null;
        }}
      return t.child;
    }
    function $o(e, t, n) {
      e !== null && (t.dependencies = e.dependencies);
      const r = t.expirationTime;
      if ((r !== 0 && ms(r), t.childExpirationTime < n)) return null;
      if (e !== null && t.child !== e.child) throw Error(o(153));
      if (t.child !== null) {
        for (
          n = Fs((e = t.child), e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;

        ) (e = e.sibling), ((n = n.sibling = Fs(e, e.pendingProps)).return = t);
        n.sibling = null;
      }
      return t.child;
    }
    function Xo(e, t) {
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var n = null; t !== null;) t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case 'collapsed':
          n = e.tail;
          for (var r = null; n !== null;) n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
    }
    function Zo(e, t, n) {
      let r = t.pendingProps;
      switch (t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return null;
        case 1:
          return ga(t.type) && va(), null;
        case 3:
          return (
            Fi(),
            ua(pa),
            ua(fa),
            (n = t.stateNode).pendingContext
              && ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e !== null && e.child !== null) || !Po(t) || (t.effectTag |= 4),
            Ho(t),
            null
          );
        case 5:
          Ii(t), (n = _i(Mi.current));
          var i = t.type;
          if (e !== null && t.stateNode != null) Wo(e, t, i, r, n), e.ref !== t.ref && (t.effectTag |= 128);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(o(166));
              return null;
            }
            if (((e = _i(Pi.current)), Po(t))) {
              (r = t.stateNode), (i = t.type);
              var l = t.memoizedProps;
              switch (((r[Cn] = t), (r[Tn] = l), i)) {
                case 'iframe':
                case 'object':
                case 'embed':
                  Gt('load', r);
                  break;
                case 'video':
                case 'audio':
                  for (e = 0; e < Qe.length; e++) Gt(Qe[e], r);
                  break;
                case 'source':
                  Gt('error', r);
                  break;
                case 'img':
                case 'image':
                case 'link':
                  Gt('error', r), Gt('load', r);
                  break;
                case 'form':
                  Gt('reset', r), Gt('submit', r);
                  break;
                case 'details':
                  Gt('toggle', r);
                  break;
                case 'input':
                  Se(r, l), Gt('invalid', r), an(n, 'onChange');
                  break;
                case 'select':
                  (r._wrapperState = { wasMultiple: !!l.multiple }),
                  Gt('invalid', r),
                  an(n, 'onChange');
                  break;
                case 'textarea':
                  Me(r, l), Gt('invalid', r), an(n, 'onChange');
              }
              for (var s in (tn(i, l), (e = null), l)) {if (l.hasOwnProperty(s)) {
                  var u = l[s];
                  'children' === s
                    ? 'string' === typeof u
                      ? r.textContent !== u && (e = ['children', u])
                      : 'number' === typeof u
                        && r.textContent !== '' + u
                        && (e = ['children', '' + u])
                    : k.hasOwnProperty(s) && u != null && an(n, s);
                }}
              switch (i) {
                case 'input':
                  ye(r), Ce(r, l, !0);
                  break;
                case 'textarea':
                  ye(r), Ne(r);
                  break;
                case 'select':
                case 'option':
                  break;
                default:
                  typeof l.onClick === 'function' && (r.onclick = on);
              }
              (n = e), (t.updateQueue = n), n !== null && (t.effectTag |= 4);
            } else {
              switch (
                ((s = n.nodeType === 9 ? n : n.ownerDocument),
                e === rn && (e = Ie(i)),
                e === rn
                  ? i === 'script'
                    ? (((e = s.createElement('div')).innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                    : typeof r.is === 'string'
                      ? (e = s.createElement(i, { is: r.is }))
                      : ((e = s.createElement(i)),
                      i === 'select'
                        && ((s = e),
                        r.multiple
                          ? (s.multiple = !0)
                          : r.size && (s.size = r.size)))
                  : (e = s.createElementNS(e, i)),
                (e[Cn] = t),
                (e[Tn] = r),
                Uo(e, t, !1, !1),
                (t.stateNode = e),
                (s = nn(i, r)),
                i)
              ) {
                case 'iframe':
                case 'object':
                case 'embed':
                  Gt('load', e), (u = r);
                  break;
                case 'video':
                case 'audio':
                  for (u = 0; u < Qe.length; u++) Gt(Qe[u], e);
                  u = r;
                  break;
                case 'source':
                  Gt('error', e), (u = r);
                  break;
                case 'img':
                case 'image':
                case 'link':
                  Gt('error', e), Gt('load', e), (u = r);
                  break;
                case 'form':
                  Gt('reset', e), Gt('submit', e), (u = r);
                  break;
                case 'details':
                  Gt('toggle', e), (u = r);
                  break;
                case 'input':
                  Se(e, r), (u = xe(e, r)), Gt('invalid', e), an(n, 'onChange');
                  break;
                case 'option':
                  u = Oe(e, r);
                  break;
                case 'select':
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (u = a({}, r, { value: void 0 })),
                  Gt('invalid', e),
                  an(n, 'onChange');
                  break;
                case 'textarea':
                  Me(e, r), (u = Ae(e, r)), Gt('invalid', e), an(n, 'onChange');
                  break;
                default:
                  u = r;
              }
              tn(i, u);
              const c = u;
              for (l in c) {if (c.hasOwnProperty(l)) {
                  let d = c[l];
                  'style' === l
                    ? Jt(e, d)
                    : 'dangerouslySetInnerHTML' === l
                      ? (d = d ? d.__html : void 0) != null && ze(e, d)
                      : 'children' === l
                        ? 'string' === typeof d
                          ? ('textarea' !== i || '' !== d) && Be(e, d)
                          : 'number' === typeof d && Be(e, '' + d)
                        : 'suppressContentEditableWarning' !== l
                      && "suppressHydrationWarning" !== l
                      && "autoFocus" !== l
                      && (k.hasOwnProperty(l)
                        ? d != null && an(n, l)
                        : d != null && $(e, l, d, s));
                }}
              switch (i) {
                case 'input':
                  ye(e), Ce(e, r, !1);
                  break;
                case 'textarea':
                  ye(e), Ne(e);
                  break;
                case 'option':
                  r.value != null && e.setAttribute('value', `${  ve(r.value)}`);
                  break;
                case 'select':
                  (e.multiple = !!r.multiple),
                  (n = r.value) != null
                    ? Pe(e, !!r.multiple, n, !1)
                    : r.defaultValue != null
                        && Pe(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof u.onClick === 'function' && (e.onclick = on);
              }
              bn(i, r) && (t.effectTag |= 4);
            }
            t.ref !== null && (t.effectTag |= 128);
          }
          return null;
        case 6:
          if (e && t.stateNode != null) Vo(e, t, e.memoizedProps, r);
          else {
            if (typeof r !== 'string' && t.stateNode === null) throw Error(o(166));
            (n = _i(Mi.current)),
            _i(Pi.current),
            Po(t)
              ? ((n = t.stateNode),
              (r = t.memoizedProps),
              (n[Cn] = t),
              n.nodeValue !== r && (t.effectTag |= 4))
              : (((n = (n.nodeType === 9
                ? n
                : n.ownerDocument
              ).createTextNode(r))[Cn] = t),
              (t.stateNode = n));
          }
          return null;
        case 13:
          return (
            ua(ji),
            (r = t.memoizedState),
            (64 & t.effectTag) !== 0
              ? ((t.expirationTime = n), t)
              : ((n = r !== null),
              (r = !1),
              e === null
                ? void 0 !== t.memoizedProps.fallback && Po(t)
                : ((r = (i = e.memoizedState) !== null),
                n
                      || i === null
                      || ((i = e.child.sibling) !== null
                        && ((l = t.firstEffect) !== null
                          ? ((t.firstEffect = i), (i.nextEffect = l))
                          : ((t.firstEffect = t.lastEffect = i),
                          (i.nextEffect = null)),
                        (i.effectTag = 8)))),
              n
                  && !r
                  && (2 & t.mode) !== 0
                  && ((e === null
                    && !0 !== t.memoizedProps.unstable_avoidThisFallback)
                  || (1 & ji.current) !== 0
                    ? jl === Tl && (jl = Al)
                    : ((jl !== Tl && jl !== Al) || (jl = Ml),
                    Ul !== 0 && Fl !== null && (Ls(Fl, Il), Us(Fl, Ul)))),
              (n || r) && (t.effectTag |= 4),
              null)
          );
        case 4:
          return Fi(), Ho(t), null;
        case 10:
          return ti(t), null;
        case 17:
          return ga(t.type) && va(), null;
        case 19:
          if ((ua(ji), (r = t.memoizedState) === null)) return null;
          if (((i = (64 & t.effectTag) !== 0), (l = r.rendering) === null)) {
            if (i) Xo(r, !1);
            else if (jl !== Tl || (e !== null && (64 & e.effectTag) !== 0)) {for (l = t.child; l !== null;) {
                if ((e = Ri(l)) !== null) {
                  for (
                    t.effectTag |= 64,
                    Xo(r, !1),
                    null !== (i = e.updateQueue)
                        && ((t.updateQueue = i), (t.effectTag |= 4)),
                    null === r.lastEffect && (t.firstEffect = null),
                    t.lastEffect = r.lastEffect,
                    r = t.child;
                    r !== null;

                  ) (l = n),
                    ((i = r).effectTag &= 2),
                    (i.nextEffect = null),
                    (i.firstEffect = null),
                    (i.lastEffect = null),
                    null === (e = i.alternate)
                      ? ((i.childExpirationTime = 0),
                      (i.expirationTime = l),
                      (i.child = null),
                      (i.memoizedProps = null),
                      (i.memoizedState = null),
                      (i.updateQueue = null),
                      (i.dependencies = null))
                      : ((i.childExpirationTime = e.childExpirationTime),
                      (i.expirationTime = e.expirationTime),
                      (i.child = e.child),
                      (i.memoizedProps = e.memoizedProps),
                      (i.memoizedState = e.memoizedState),
                      (i.updateQueue = e.updateQueue),
                      (l = e.dependencies),
                      (i.dependencies =                            null === l
                              ? null
                              : {
                                expirationTime: l.expirationTime,
                                firstContext: l.firstContext,
                                responders: l.responders,
                              })),
                    (r = r.sibling);
                  return ca(ji, (1 & ji.current) | 2), t.child;
                }
                l = l.sibling;
              }}
          } else {
            if (!i) {if ((e = Ri(l)) !== null) {
                if (
                  ((t.effectTag |= 64),
                  (i = !0),
                  (n = e.updateQueue) !== null &&
                    ((t.updateQueue = n), (t.effectTag |= 4)),
                  Xo(r, !0),
                  r.tail === null && 'hidden' === r.tailMode && !l.alternate)
                ) return (
                    (t = t.lastEffect = r.lastEffect) !== null &&
                      (t.nextEffect = null),
                    null
                  );
              } else 2 * La() - r.renderingStartTime > r.tailExpiration
                  && 1 < n
                  && ((t.effectTag |= 64),
                  (i = !0),
                  Xo(r, !1),
                  (t.expirationTime = t.childExpirationTime = n - 1));}
            r.isBackwards
              ? ((l.sibling = t.child), (t.child = l))
              : ((n = r.last) !== null ? (n.sibling = l) : (t.child = l),
              (r.last = l));
          }
          return r.tail !== null
            ? (r.tailExpiration === 0 && (r.tailExpiration = La() + 500),
            (n = r.tail),
            (r.rendering = n),
            (r.tail = n.sibling),
            (r.lastEffect = t.lastEffect),
            (r.renderingStartTime = La()),
            (n.sibling = null),
            (t = ji.current),
            ca(ji, i ? (1 & t) | 2 : 1 & t),
            n)
            : null;
      }
      throw Error(o(156, t.tag));
    }
    function Jo(e) {
      switch (e.tag) {
        case 1:
          ga(e.type) && va();
          var t = e.effectTag;
          return 4096 & t ? ((e.effectTag = (-4097 & t) | 64), e) : null;
        case 3:
          if ((Fi(), ua(pa), ua(fa), (64 & (t = e.effectTag)) !== 0)) throw Error(o(285));
          return (e.effectTag = (-4097 & t) | 64), e;
        case 5:
          return Ii(e), null;
        case 13:
          return (
            ua(ji),
            4096 & (t = e.effectTag)
              ? ((e.effectTag = (-4097 & t) | 64), e)
              : null
          );
        case 19:
          return ua(ji), null;
        case 4:
          return Fi(), null;
        case 10:
          return ti(e), null;
        default:
          return null;
      }
    }
    function el(e, t) {
      return { value: e, source: t, stack: ge(t) };
    }
    (Uo = function (e, t) {
      for (let n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
          (n.child.return = n), (n = n.child);
          continue;
        }
        if (n === t) break;
        for (; n.sibling === null;) {
          if (n.return === null || n.return === t) return;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }),
    (Ho = function () {}),
    (Wo = function (e, t, n, r, i) {
      let o = e.memoizedProps;
      if (o !== r) {
        let l;
        var s;
        var u = t.stateNode;
        switch ((_i(Pi.current), (e = null), n)) {
          case 'input':
            (o = xe(u, o)), (r = xe(u, r)), (e = []);
            break;
          case 'option':
            (o = Oe(u, o)), (r = Oe(u, r)), (e = []);
            break;
          case 'select':
            (o = a({}, o, { value: void 0 })),
            (r = a({}, r, { value: void 0 })),
            (e = []);
            break;
          case 'textarea':
            (o = Ae(u, o)), (r = Ae(u, r)), (e = []);
            break;
          default:
            'function' !== typeof o.onClick
                && 'function' === typeof r.onClick
                && (u.onclick = on);
        }
        for (l in (tn(n, r), (n = null), o)) {if (!r.hasOwnProperty(l) && o.hasOwnProperty(l) && o[l] != null) if ('style' === l) for (s in (u = o[l])) u.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''));
            else "dangerouslySetInnerHTML" !== l
                  && "children" !== l
                  && "suppressContentEditableWarning" !== l
                  && "suppressHydrationWarning" !== l
                  && "autoFocus" !== l
                  && (k.hasOwnProperty(l)
                    ? e || (e = [])
                    : (e = e || []).push(l, null));}
        for (l in r) {
          let c = r[l];
          if (
            ((u = o != null ? o[l] : void 0),
            r.hasOwnProperty(l) && c !== u && (c != null || u != null))
          ) {if ('style' === l) if (u) {
                for (s in u) !u.hasOwnProperty(s)
                      || (c && c.hasOwnProperty(s))
                      || (n || (n = {}), (n[s] = ''));
                for (s in c) c.hasOwnProperty(s)
                      && u[s] !== c[s]
                      && (n || (n = {}), (n[s] = c[s]));
              } else n || (e || (e = []), e.push(l, n)), (n = c);
            else "dangerouslySetInnerHTML" === l
                ? ((c = c ? c.__html : void 0),
                (u = u ? u.__html : void 0),
                null != c && u !== c && (e = e || []).push(l, c))
                : 'children' === l
                  ? u === c
                    || ('string' !== typeof c && 'number' !== typeof c)
                    || (e = e || []).push(l, '' + c)
                  : 'suppressContentEditableWarning' !== l
                    && "suppressHydrationWarning" !== l
                    && (k.hasOwnProperty(l)
                      ? (c != null && an(i, l), e || u === c || (e = []))
                      : (e = e || []).push(l, c));}
        }
        n && (e = e || []).push('style', n),
        (i = e),
        (t.updateQueue = i) && (t.effectTag |= 4);
      }
    }),
    (Vo = function (e, t, n, r) {
      n !== r && (t.effectTag |= 4);
    });
    const tl = typeof WeakSet === 'function' ? WeakSet : Set;
    function nl(e, t) {
      const n = t.source;
      var r = t.stack;
      r === null && n !== null && (r = ge(n)),
      n !== null && me(n.type),
      (t = t.value),
      e !== null && e.tag === 1 && me(e.type);
      try {
        console.error(t);
      } catch (a) {
        setTimeout(() => {
          throw a;
        });
      }
    }
    function rl(e) {
      const t = e.ref;
      if (t !== null) {if ('function' === typeof t) try {
            t(null);
          } catch (n) {
            Ts(e, n);
          }
        else t.current = null;}
    }
    function al(e, t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          return;
        case 1:
          if (256 & t.effectTag && e !== null) {
            const n = e.memoizedProps;
            var r = e.memoizedState;
            (t = (e = t.stateNode).getSnapshotBeforeUpdate(
              t.elementType === t.type ? n : Qa(t.type, n),
              r,
            )),
            (e.__reactInternalSnapshotBeforeUpdate = t);
          }
          return;
        case 3:
        case 5:
        case 6:
        case 4:
        case 17:
          return;
      }
      throw Error(o(163));
    }
    function il(e, t) {
      if ((t = (t = t.updateQueue) !== null ? t.lastEffect : null) !== null) {
        let n = (t = t.next);
        do {
          if ((n.tag & e) === e) {
            const r = n.destroy;
            (n.destroy = void 0), void 0 !== r && r();
          }
          n = n.next;
        } while (n !== t);
      }
    }
    function ol(e, t) {
      if ((t = (t = t.updateQueue) !== null ? t.lastEffect : null) !== null) {
        let n = (t = t.next);
        do {
          if ((n.tag & e) === e) {
            const r = n.create;
            n.destroy = r();
          }
          n = n.next;
        } while (n !== t);
      }
    }
    function ll(e, t, n) {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          return void ol(3, n);
        case 1:
          if (((e = n.stateNode), 4 & n.effectTag)) {if (t === null) e.componentDidMount();
            else {
              let r =                n.elementType === n.type
                  ? t.memoizedProps
                  : Qa(n.type, t.memoizedProps);
              e.componentDidUpdate(
                r,
                t.memoizedState,
                e.__reactInternalSnapshotBeforeUpdate,
              );
            }}
          return void ((t = n.updateQueue) !== null && fi(n, t, e));
        case 3:
          if ((t = n.updateQueue) !== null) {
            if (((e = null), n.child !== null)) {switch (n.child.tag) {
                case 5:
                  e = n.child.stateNode;
                  break;
                case 1:
                  e = n.child.stateNode;
              }}
            fi(n, t, e);
          }
          return;
        case 5:
          return (
            (e = n.stateNode),
            void (
              t === null
              && 4 & n.effectTag
              && bn(n.type, n.memoizedProps)
              && e.focus()
            )
          );
        case 6:
        case 4:
        case 12:
          return;
        case 13:
          return void (
            n.memoizedState === null
            && ((n = n.alternate),
            n !== null
              && ((n = n.memoizedState),
              n !== null && ((n = n.dehydrated), n !== null && It(n))))
          );
        case 19:
        case 17:
        case 20:
        case 21:
          return;
      }
      throw Error(o(163));
    }
    function sl(e, t, n) {
      switch ((typeof As === 'function' && As(t), t.tag)) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          if ((e = t.updateQueue) !== null && (e = e.lastEffect) !== null) {
            const r = e.next;
            Wa(n > 97 ? 97 : n, () => {
              let e = r;
              do {
                let n = e.destroy;
                if (void 0 !== n) {
                  let a = t;
                  try {
                    n();
                  } catch (i) {
                    Ts(a, i);
                  }
                }
                e = e.next;
              } while (e !== r);
            });
          }
          break;
        case 1:
          rl(t),
          'function' === typeof (n = t.stateNode).componentWillUnmount
              && (function (e, t) {
                try {
                  (t.props = e.memoizedProps),
                  (t.state = e.memoizedState),
                  t.componentWillUnmount();
                } catch (n) {
                  Ts(e, n);
                }
              }(t, n));
          break;
        case 5:
          rl(t);
          break;
        case 4:
          fl(e, t, n);
      }
    }
    function ul(e) {
      const t = e.alternate;
      (e.return = null),
      (e.child = null),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.dependencies = null),
      (e.alternate = null),
      (e.firstEffect = null),
      (e.lastEffect = null),
      (e.pendingProps = null),
      (e.memoizedProps = null),
      (e.stateNode = null),
      t !== null && ul(t);
    }
    function cl(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function dl(e) {
      e: {
        for (var t = e.return; t !== null;) {
          if (cl(t)) {
            var n = t;
            break e;
          }
          t = t.return;
        }
        throw Error(o(160));
      }
      switch (((t = n.stateNode), n.tag)) {
        case 5:
          var r = !1;
          break;
        case 3:
        case 4:
          (t = t.containerInfo), (r = !0);
          break;
        default:
          throw Error(o(161));
      }
      16 & n.effectTag && (Be(t, ''), (n.effectTag &= -17));
      e: t: for (n = e; ;) {
        for (; n.sibling === null;) {
          if (n.return === null || cl(n.return)) {
            n = null;
            break e;
          }
          n = n.return;
        }
        for (
          n.sibling.return = n.return, n = n.sibling;
          n.tag !== 5 && n.tag !== 6 && n.tag !== 18;

        ) {
          if (2 & n.effectTag) continue t;
          if (n.child === null || n.tag === 4) continue t;
          (n.child.return = n), (n = n.child);
        }
        if (!(2 & n.effectTag)) {
          n = n.stateNode;
          break e;
        }
      }
      r
        ? (function e(t, n, r) {
          let a = t.tag;
          var i = a === 5 || a === 6;
          if (i) {(t = i ? t.stateNode : t.stateNode.instance),
            n
              ? r.nodeType === 8
                ? r.parentNode.insertBefore(t, n)
                : r.insertBefore(t, n)
              : (r.nodeType === 8
                ? ((n = r.parentNode), n.insertBefore(t, r))
                : ((n = r), n.appendChild(t)),
              (r = r._reactRootContainer),
              (r !== null && void 0 !== r)
                      || null !== n.onclick
                      || (n.onclick = on));}
          else if (a !== 4 && ((t = t.child), t !== null)) for (e(t, n, r), t = t.sibling; t !== null;) e(t, n, r), (t = t.sibling);
        }(e, n, t))
        : (function e(t, n, r) {
          let a = t.tag;
          var i = a === 5 || a === 6;
          if (i) {(t = i ? t.stateNode : t.stateNode.instance),
            n ? r.insertBefore(t, n) : r.appendChild(t);}
          else if (a !== 4 && ((t = t.child), t !== null)) for (e(t, n, r), t = t.sibling; t !== null;) e(t, n, r), (t = t.sibling);
        }(e, n, t));
    }
    function fl(e, t, n) {
      for (var r, a, i = t, l = !1; ;) {
        if (!l) {
          l = i.return;
          e: for (;;) {
            if (l === null) throw Error(o(160));
            switch (((r = l.stateNode), l.tag)) {
              case 5:
                a = !1;
                break e;
              case 3:
              case 4:
                (r = r.containerInfo), (a = !0);
                break e;
            }
            l = l.return;
          }
          l = !0;
        }
        if (i.tag === 5 || i.tag === 6) {
          e: for (var s = e, u = i, c = n, d = u; ;) {if ((sl(s, d, c), d.child !== null && d.tag !== 4)) (d.child.return = d), (d = d.child);
            else {
              if (d === u) break;
              for (; d.sibling === null;) {
                if (d.return === null || d.return === u) break e;
                d = d.return;
              }
              (d.sibling.return = d.return), (d = d.sibling);
            }}
          a
            ? ((s = r),
            (u = i.stateNode),
            s.nodeType === 8 ? s.parentNode.removeChild(u) : s.removeChild(u))
            : r.removeChild(i.stateNode);
        } else if (i.tag === 4) {
          if (i.child !== null) {
            (r = i.stateNode.containerInfo),
            (a = !0),
            (i.child.return = i),
            (i = i.child);
            continue;
          }
        } else if ((sl(e, i, n), i.child !== null)) {
          (i.child.return = i), (i = i.child);
          continue;
        }
        if (i === t) break;
        for (; i.sibling === null;) {
          if (i.return === null || i.return === t) return;
          (i = i.return).tag === 4 && (l = !1);
        }
        (i.sibling.return = i.return), (i = i.sibling);
      }
    }
    function pl(e, t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          return void il(3, t);
        case 1:
          return;
        case 5:
          var n = t.stateNode;
          if (n != null) {
            var r = t.memoizedProps;
            var a = e !== null ? e.memoizedProps : r;
            e = t.type;
            var i = t.updateQueue;
            if (((t.updateQueue = null), i !== null)) {
              for (
                n[Tn] = r,
                'input' === e
                    && 'radio' === r.type
                    && r.name != null
                    && ke(n, r),
                nn(e, a),
                t = nn(e, r),
                a = 0;
                a < i.length;
                a += 2
              ) {
                const l = i[a];
                var s = i[a + 1];
                l === 'style'
                  ? Jt(n, s)
                  : l === 'dangerouslySetInnerHTML'
                    ? ze(n, s)
                    : l === 'children'
                      ? Be(n, s)
                      : $(n, l, s, t);
              }
              switch (e) {
                case 'input':
                  Ee(n, r);
                  break;
                case 'textarea':
                  _e(n, r);
                  break;
                case 'select':
                  (t = n._wrapperState.wasMultiple),
                  (n._wrapperState.wasMultiple = !!r.multiple),
                  (e = r.value) != null
                    ? Pe(n, !!r.multiple, e, !1)
                    : t !== !!r.multiple
                        && (r.defaultValue != null
                          ? Pe(n, !!r.multiple, r.defaultValue, !0)
                          : Pe(n, !!r.multiple, r.multiple ? [] : '', !1));
              }
            }
          }
          return;
        case 6:
          if (t.stateNode === null) throw Error(o(162));
          return void (t.stateNode.nodeValue = t.memoizedProps);
        case 3:
          return void (
            (t = t.stateNode).hydrate && ((t.hydrate = !1), It(t.containerInfo))
          );
        case 12:
          return;
        case 13:
          if (
            ((n = t),
            t.memoizedState === null
              ? (r = !1)
              : ((r = !0), (n = t.child), (Wl = La())),
            n !== null)
          ) {e: for (e = n; ;) {
              if (e.tag === 5) (i = e.stateNode),
                r
                  ? 'function' === typeof (i = i.style).setProperty
                    ? i.setProperty('display', 'none', 'important')
                    : (i.display = 'none')
                  : ((i = e.stateNode),
                  (a =                        void 0 !== (a = e.memoizedProps.style)
                        && null !== a
                        && a.hasOwnProperty('display')
                          ? a.display
                          : null),
                  (i.style.display = Zt('display', a)));
              else if (e.tag === 6) e.stateNode.nodeValue = r ? '' : e.memoizedProps;
              else {
                if (
                  e.tag === 13 &&
                  e.memoizedState !== null &&
                  e.memoizedState.dehydrated === null
                ) {
                  ((i = e.child.sibling).return = e), (e = i);
                  continue;
                }
                if (e.child !== null) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
              }
              if (e === n) break;
              for (; e.sibling === null;) {
                if (e.return === null || e.return === n) break e;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }}
          return void hl(t);
        case 19:
          return void hl(t);
        case 17:
          return;
      }
      throw Error(o(163));
    }
    function hl(e) {
      const t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        let n = e.stateNode;
        n === null && (n = e.stateNode = new tl()),
        t.forEach((t) => {
          var r = function (e, t) {
            var n = e.stateNode;
            null !== n && n.delete(t),
            0 === (t = 0) && (t = rs((t = ns()), e, null)),
            null !== (e = is(e, t)) && ls(e);
          }.bind(null, e, t);
          n.has(t) || (n.add(t), t.then(r, r));
        });
      }
    }
    const ml = typeof WeakMap === 'function' ? WeakMap : Map;
    function gl(e, t, n) {
      ((n = si(n, null)).tag = 3), (n.payload = { element: null });
      const r = t.value;
      return (
        (n.callback = function () {
          Gl || ((Gl = !0), (Yl = r)), nl(e, t);
        }),
        n
      );
    }
    function vl(e, t, n) {
      (n = si(n, null)).tag = 3;
      const r = e.type.getDerivedStateFromError;
      if (typeof r === 'function') {
        const a = t.value;
        n.payload = function () {
          return nl(e, t), r(a);
        };
      }
      const i = e.stateNode;
      return (
        i !== null
          && 'function' === typeof i.componentDidCatch
          && (n.callback = function () {
            typeof r !== 'function'
              && (Kl === null ? (Kl = new Set([this])) : Kl.add(this), nl(e, t));
            const n = t.stack;
            this.componentDidCatch(t.value, {
              componentStack: n !== null ? n : '',
            });
          }),
        n
      );
    }
    let bl;
    var yl = Math.ceil;
    var wl = Q.ReactCurrentDispatcher;
    var xl = Q.ReactCurrentOwner;
    var Sl = 0;
    var kl = 8;
    var El = 16;
    var Cl = 32;
    var Tl = 0;
    var Ol = 1;
    var Pl = 2;
    var Al = 3;
    var Ml = 4;
    var _l = 5;
    var Nl = Sl;
    var Fl = null;
    var Dl = null;
    var Il = 0;
    var jl = Tl;
    var Rl = null;
    var zl = 1073741823;
    var Bl = 1073741823;
    var Ll = null;
    var Ul = 0;
    var Hl = !1;
    var Wl = 0;
    var Vl = 500;
    var ql = null;
    var Gl = !1;
    var Yl = null;
    var Kl = null;
    var Ql = !1;
    var $l = null;
    var Xl = 90;
    var Zl = null;
    var Jl = 0;
    var es = null;
    var ts = 0;
    function ns() {
      return (Nl & (El | Cl)) !== Sl
        ? 1073741821 - ((La() / 10) | 0)
        : ts !== 0
          ? ts
          : (ts = 1073741821 - ((La() / 10) | 0));
    }
    function rs(e, t, n) {
      if ((2 & (t = t.mode)) === 0) return 1073741823;
      const r = Ua();
      if ((4 & t) === 0) return r === 99 ? 1073741823 : 1073741822;
      if ((Nl & El) !== Sl) return Il;
      if (n !== null) e = Ka(e, 0 | n.timeoutMs || 5e3, 250);
      else {switch (r) {
          case 99:
            e = 1073741823;
            break;
          case 98:
            e = Ka(e, 150, 100);
            break;
          case 97:
          case 96:
            e = Ka(e, 5e3, 250);
            break;
          case 95:
            e = 2;
            break;
          default:
            throw Error(o(326));
        }}
      return Fl !== null && e === Il && --e, e;
    }
    function as(e, t) {
      if (Jl > 50) throw ((Jl = 0), (es = null), Error(o(185)));
      if ((e = is(e, t)) !== null) {
        let n = Ua();
        t === 1073741823
          ? (Nl & kl) !== Sl && (Nl & (El | Cl)) === Sl
            ? ss(e)
            : (ls(e), Nl === Sl && Ga())
          : ls(e),
        (4 & Nl) === Sl
            || (n !== 98 && n !== 99)
            || (Zl === null
              ? (Zl = new Map([[e, t]]))
              : (void 0 === (n = Zl.get(e)) || n > t) && Zl.set(e, t));
      }
    }
    function is(e, t) {
      e.expirationTime < t && (e.expirationTime = t);
      let n = e.alternate;
      n !== null && n.expirationTime < t && (n.expirationTime = t);
      let r = e.return;
      var a = null;
      if (r === null && e.tag === 3) a = e.stateNode;
      else {for (; r !== null;) {
          if (
            ((n = r.alternate),
            r.childExpirationTime < t && (r.childExpirationTime = t),
            n !== null &&
              n.childExpirationTime < t
              && (n.childExpirationTime = t),
            r.return === null && r.tag === 3)
          ) {
            a = r.stateNode;
            break;
          }
          r = r.return;
        }}
      return (
        a !== null && (Fl === a && (ms(t), jl === Ml && Ls(a, Il)), Us(a, t)), a
      );
    }
    function os(e) {
      let t = e.lastExpiredTime;
      if (t !== 0) return t;
      if (!Bs(e, (t = e.firstPendingTime))) return t;
      const n = e.lastPingedTime;
      return (e = n > (e = e.nextKnownPendingLevel) ? n : e) <= 2 && t !== e
        ? 0
        : e;
    }
    function ls(e) {
      if (e.lastExpiredTime !== 0) {(e.callbackExpirationTime = 1073741823),
        (e.callbackPriority = 99),
        (e.callbackNode = qa(ss.bind(null, e)));}
      else {
        let t = os(e);
        var n = e.callbackNode;
        if (t === 0) n !== null
            && ((e.callbackNode = null),
            (e.callbackExpirationTime = 0),
            (e.callbackPriority = 90));
        else {
          let r = ns();
          if (
            (t === 1073741823
              ? (r = 99)
              : t === 1 || t === 2
                ? (r = 95)
                : (r = 0 >= (r = 10 * (1073741821 - t) - 10 * (1073741821 - r))
                  ? 99
                  : r <= 250
                    ? 98
                    : r <= 5250
                      ? 97
                      : 95),
            n !== null)
          ) {
            const a = e.callbackPriority;
            if (e.callbackExpirationTime === t && a >= r) return;
            n !== Fa && Ea(n);
          }
          (e.callbackExpirationTime = t),
          (e.callbackPriority = r),
          (t = 1073741823 === t
            ? qa(ss.bind(null, e))
            : Va(
              r,
              function e(t, n) {
                ts = 0;
                if (n) return (n = ns()), Hs(t, n), ls(t), null;
                var r = os(t);
                if (r !== 0) {
                  if (((n = t.callbackNode), (Nl & (El | Cl)) !== Sl)) throw Error(o(327));
                  if (
                    (ks(),
                    (t === Fl && r === Il) || ds(t, r),
                    null !== Dl)
                  ) {
                    var a = Nl;
                    Nl |= El;
                    for (var i = ps(); ;) {try {
                            vs();
                            break;
                          } catch (u) {
                            fs(t, u);
                          }}
                    if ((ei(), (Nl = a), (wl.current = i), jl === Ol)) throw ((n = Rl), ds(t, r), Ls(t, r), ls(t), n);
                    if (Dl === null) {switch (
                            ((i = t.finishedWork = t.current.alternate),
                            (t.finishedExpirationTime = r),
                            (a = jl),
                            (Fl = null),
                            a)
                          ) {
                            case Tl:
                            case Ol:
                              throw Error(o(345));
                            case Pl:
                              Hs(t, r > 2 ? 2 : r);
                              break;
                            case Al:
                              if (
                                (Ls(t, r),
                                (a = t.lastSuspendedTime),
                                r === a && (t.nextKnownPendingLevel = ws(i)),
                                1073741823 === zl
                                    && 10 < (i = Wl + Vl - La()))
                              ) {
                                if (Hl) {
                                  var l = t.lastPingedTime;
                                  if (l === 0 || l >= r) {
                                    (t.lastPingedTime = r), ds(t, r);
                                    break;
                                  }
                                }
                                if ((l = os(t)) !== 0 && l !== r) break;
                                if (a !== 0 && a !== r) {
                                  t.lastPingedTime = a;
                                  break;
                                }
                                t.timeoutHandle = wn(xs.bind(null, t), i);
                                break;
                              }
                              xs(t);
                              break;
                            case Ml:
                              if (
                                (Ls(t, r),
                                (a = t.lastSuspendedTime),
                                r === a && (t.nextKnownPendingLevel = ws(i)),
                                Hl
                                    && ((i = t.lastPingedTime) === 0 || i >= r))
                              ) {
                                (t.lastPingedTime = r), ds(t, r);
                                break;
                              }
                              if ((i = os(t)) !== 0 && i !== r) break;
                              if (a !== 0 && a !== r) {
                                t.lastPingedTime = a;
                                break;
                              }
                              if (
                                (Bl !== 1073741823
                                  ? (a = 10 * (1073741821 - Bl) - La())
                                  : zl === 1073741823
                                    ? (a = 0)
                                    : ((a = 10 * (1073741821 - zl) - 5e3),
                                    (i = La()),
                                    (r = 10 * (1073741821 - r) - i),
                                    0 > (a = i - a) && (a = 0),
                                    (a =                                        (a < 120
                                          ? 120
                                          : a < 480
                                            ? 480
                                            : a < 1080
                                              ? 1080
                                              : a < 1920
                                                ? 1920
                                                : a < 3e3
                                                  ? 3e3
                                                  : a < 4320
                                                    ? 4320
                                                    : 1960 * yl(a / 1960)) - a),
                                    r < a && (a = r)),
                                10 < a)
                              ) {
                                t.timeoutHandle = wn(xs.bind(null, t), a);
                                break;
                              }
                              xs(t);
                              break;
                            case _l:
                              if (zl !== 1073741823 && Ll !== null) {
                                l = zl;
                                var s = Ll;
                                if (
                                  ((a = 0 | s.busyMinDurationMs) <= 0
                                    ? (a = 0)
                                    : ((i = 0 | s.busyDelayMs),
                                    (l =                                          La()
                                          - (10 * (1073741821 - l)
                                            - (0 | s.timeoutMs || 5e3))),
                                    (a = l <= i ? 0 : i + a - l)),
                                  10 < a)
                                ) {
                                  Ls(t, r),
                                  (t.timeoutHandle = wn(
                                    xs.bind(null, t),
                                    a,
                                  ));
                                  break;
                                }
                              }
                              xs(t);
                              break;
                            default:
                              throw Error(o(329));
                          }}
                    if ((ls(t), t.callbackNode === n)) return e.bind(null, t);
                  }
                }
                return null;
              }.bind(null, e),
              { timeout: 10 * (1073741821 - t) - La() },
            )),
          (e.callbackNode = t);
        }
      }
    }
    function ss(e) {
      let t = e.lastExpiredTime;
      if (((t = t !== 0 ? t : 1073741823), (Nl & (El | Cl)) !== Sl)) throw Error(o(327));
      if ((ks(), (e === Fl && t === Il) || ds(e, t), Dl !== null)) {
        let n = Nl;
        Nl |= El;
        for (var r = ps(); ;) {try {
            gs();
            break;
          } catch (a) {
            fs(e, a);
          }}
        if ((ei(), (Nl = n), (wl.current = r), jl === Ol)) throw ((n = Rl), ds(e, t), Ls(e, t), ls(e), n);
        if (Dl !== null) throw Error(o(261));
        (e.finishedWork = e.current.alternate),
        (e.finishedExpirationTime = t),
        (Fl = null),
        xs(e),
        ls(e);
      }
      return null;
    }
    function us(e, t) {
      const n = Nl;
      Nl |= 1;
      try {
        return e(t);
      } finally {
        (Nl = n) === Sl && Ga();
      }
    }
    function cs(e, t) {
      const n = Nl;
      (Nl &= -2), (Nl |= kl);
      try {
        return e(t);
      } finally {
        (Nl = n) === Sl && Ga();
      }
    }
    function ds(e, t) {
      (e.finishedWork = null), (e.finishedExpirationTime = 0);
      let n = e.timeoutHandle;
      if ((n !== -1 && ((e.timeoutHandle = -1), xn(n)), Dl !== null)) {for (n = Dl.return; n !== null;) {
          let r = n;
          switch (r.tag) {
            case 1:
              (r = r.type.childContextTypes) !== null && void 0 !== r && va();
              break;
            case 3:
              Fi(), ua(pa), ua(fa);
              break;
            case 5:
              Ii(r);
              break;
            case 4:
              Fi();
              break;
            case 13:
            case 19:
              ua(ji);
              break;
            case 10:
              ti(r);
          }
          n = n.return;
        }}
      (Fl = e),
      (Dl = Fs(e.current, null)),
      (Il = t),
      (jl = Tl),
      (Rl = null),
      (Bl = zl = 1073741823),
      (Ll = null),
      (Ul = 0),
      (Hl = !1);
    }
    function fs(e, t) {
      for (;;) {
        try {
          if ((ei(), (Bi.current = vo), qi)) {for (let n = Hi.memoizedState; n !== null;) {
              let r = n.queue;
              r !== null && (r.pending = null), (n = n.next);
            }}
          if (
            ((Ui = 0),
            (Vi = Wi = Hi = null),
            (qi = !1),
            Dl === null || Dl.return === null)
          ) return (jl = Ol), (Rl = t), (Dl = null);
          e: {
            const a = e;
            var i = Dl.return;
            var o = Dl;
            var l = t;
            if (
              ((t = Il),
              (o.effectTag |= 2048),
              (o.firstEffect = o.lastEffect = null),
              l !== null
                && 'object' === typeof l
                && 'function' === typeof l.then)
            ) {
              var s = l;
              if ((2 & o.mode) === 0) {
                const u = o.alternate;
                u
                  ? ((o.updateQueue = u.updateQueue),
                  (o.memoizedState = u.memoizedState),
                  (o.expirationTime = u.expirationTime))
                  : ((o.updateQueue = null), (o.memoizedState = null));
              }
              var c = (1 & ji.current) !== 0;
                var d = i;
              do {
                var f;
                if ((f = d.tag === 13)) {
                  const p = d.memoizedState;
                  if (p !== null) f = p.dehydrated !== null;
                  else {
                    const h = d.memoizedProps;
                    f = void 0 !== h.fallback
                      && (!0 !== h.unstable_avoidThisFallback || !c);
                  }
                }
                if (f) {
                  const m = d.updateQueue;
                  if (m === null) {
                    const g = new Set();
                    g.add(s), (d.updateQueue = g);
                  } else m.add(s);
                  if ((2 & d.mode) === 0) {
                    if (
                      ((d.effectTag |= 64), (o.effectTag &= -2981), o.tag === 1)
                    ) {if (o.alternate === null) o.tag = 17;
                      else {
                        let v = si(1073741823, null);
                        (v.tag = 2), ui(o, v);
                      }}
                    o.expirationTime = 1073741823;
                    break e;
                  }
                  (l = void 0), (o = t);
                  let b = a.pingCache;
                  if (
                    (b === null
                      ? ((b = a.pingCache = new ml()),
                      (l = new Set()),
                      b.set(s, l))
                      : void 0 === (l = b.get(s))
                        && ((l = new Set()), b.set(s, l)),
                    !l.has(o))
                  ) {
                    l.add(o);
                    const y = Os.bind(null, a, s, o);
                    s.then(y, y);
                  }
                  (d.effectTag |= 4096), (d.expirationTime = t);
                  break e;
                }
                d = d.return;
              } while (d !== null);
              l = Error(
                `${me(o.type) || 'A React component' 
                } suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.${
                  ge(o)}`,
              );
            }
            jl !== _l && (jl = Pl), (l = el(l, o)), (d = i);
            do {
              switch (d.tag) {
                case 3:
                  (s = l),
                  (d.effectTag |= 4096),
                  (d.expirationTime = t),
                  ci(d, gl(d, s, t));
                  break e;
                case 1:
                  s = l;
                  var w = d.type;
                  var x = d.stateNode;
                  if (
                    (64 & d.effectTag) === 0
                    && (typeof w.getDerivedStateFromError === 'function'
                      || (x !== null
                        && 'function' === typeof x.componentDidCatch
                        && (Kl === null || !Kl.has(x))))
                  ) {
                    (d.effectTag |= 4096),
                    (d.expirationTime = t),
                    ci(d, vl(d, s, t));
                    break e;
                  }
              }
              d = d.return;
            } while (d !== null);
          }
          Dl = ys(Dl);
        } catch (S) {
          t = S;
          continue;
        }
        break;
      }
    }
    function ps() {
      const e = wl.current;
      return (wl.current = vo), e === null ? vo : e;
    }
    function hs(e, t) {
      e < zl && e > 2 && (zl = e),
      t !== null && e < Bl && e > 2 && ((Bl = e), (Ll = t));
    }
    function ms(e) {
      e > Ul && (Ul = e);
    }
    function gs() {
      for (; Dl !== null;) Dl = bs(Dl);
    }
    function vs() {
      for (; Dl !== null && !Da();) Dl = bs(Dl);
    }
    function bs(e) {
      let t = bl(e.alternate, e, Il);
      return (
        (e.memoizedProps = e.pendingProps),
        t === null && (t = ys(e)),
        (xl.current = null),
        t
      );
    }
    function ys(e) {
      Dl = e;
      do {
        let t = Dl.alternate;
        if (((e = Dl.return), (2048 & Dl.effectTag) === 0)) {
          if (((t = Zo(t, Dl, Il)), Il === 1 || Dl.childExpirationTime !== 1)) {
            for (var n = 0, r = Dl.child; r !== null;) {
              const a = r.expirationTime;
              var i = r.childExpirationTime;
              a > n && (n = a), i > n && (n = i), (r = r.sibling);
            }
            Dl.childExpirationTime = n;
          }
          if (t !== null) return t;
          e !== null
            && (2048 & e.effectTag) === 0
            && (e.firstEffect === null && (e.firstEffect = Dl.firstEffect),
            Dl.lastEffect !== null
              && (e.lastEffect !== null
                && (e.lastEffect.nextEffect = Dl.firstEffect),
              (e.lastEffect = Dl.lastEffect)),
            Dl.effectTag > 1
              && (e.lastEffect !== null
                ? (e.lastEffect.nextEffect = Dl)
                : (e.firstEffect = Dl),
              (e.lastEffect = Dl)));
        } else {
          if ((t = Jo(Dl)) !== null) return (t.effectTag &= 2047), t;
          e !== null
            && ((e.firstEffect = e.lastEffect = null), (e.effectTag |= 2048));
        }
        if ((t = Dl.sibling) !== null) return t;
        Dl = e;
      } while (Dl !== null);
      return jl === Tl && (jl = _l), null;
    }
    function ws(e) {
      const t = e.expirationTime;
      return t > (e = e.childExpirationTime) ? t : e;
    }
    function xs(e) {
      const t = Ua();
      return (
        Wa(
          99,
          ((e, t) => {
            do {
              ks();
            } while ($l !== null);
            if ((Nl & (El | Cl)) !== Sl) throw Error(o(327));
            let n = e.finishedWork;
              var r = e.finishedExpirationTime;
            if (n === null) return null;
            if (
              ((e.finishedWork = null),
              (e.finishedExpirationTime = 0),
              n === e.current)
            ) throw Error(o(177));
            (e.callbackNode = null),
            (e.callbackExpirationTime = 0),
            (e.callbackPriority = 90),
            (e.nextKnownPendingLevel = 0);
            let a = ws(n);
            if (
              ((e.firstPendingTime = a),
              r <= e.lastSuspendedTime
                ? (e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0)
                : r <= e.firstSuspendedTime && (e.firstSuspendedTime = r - 1),
              r <= e.lastPingedTime && (e.lastPingedTime = 0),
              r <= e.lastExpiredTime && (e.lastExpiredTime = 0),
              e === Fl && ((Dl = Fl = null), (Il = 0)),
              n.effectTag > 1
                ? n.lastEffect !== null
                  ? ((n.lastEffect.nextEffect = n), (a = n.firstEffect))
                  : (a = n)
                : (a = n.firstEffect),
              a !== null)
            ) {
              let i = Nl;
              (Nl |= Cl), (xl.current = null), (gn = qt);
              let l = cn();
              if (dn(l)) {
                if ('selectionStart' in l) var s = { start: l.selectionStart, end: l.selectionEnd };
                else e: {
                    let u =                      (s = ((s = l.ownerDocument) && s.defaultView) || window)
                        .getSelection && s.getSelection();
                    if (u && u.rangeCount !== 0) {
                      s = u.anchorNode;
                      var c = u.anchorOffset;
                        var d = u.focusNode;
                      u = u.focusOffset;
                      try {
                        s.nodeType, d.nodeType;
                      } catch (T) {
                        s = null;
                        break e;
                      }
                      let f = 0;
                        var p = -1;
                        var h = -1;
                        var m = 0;
                        var g = 0;
                        var v = l;
                        var b = null;
                      t: for (;;) {
                        for (
                          var y;
                          v !== s
                            || (c !== 0 && v.nodeType !== 3)
                            || (p = f + c),
                          v !== d
                              || (u !== 0 && v.nodeType !== 3)
                              || (h = f + u),
                          3 === v.nodeType && (f += v.nodeValue.length),
                          null !== (y = v.firstChild);

                        ) (b = v), (v = y);
                        for (;;) {
                          if (v === l) break t;
                          if (
                            (b === s && ++m === c && (p = f),
                            b === d && ++g === u && (h = f),
                            (y = v.nextSibling) !== null)
                          ) break;
                          b = (v = b).parentNode;
                        }
                        v = y;
                      }
                      s = p === -1 || h === -1 ? null : { start: p, end: h };
                    } else s = null;
                  }
                s = s || { start: 0, end: 0 };
              } else s = null;
              (vn = {
                activeElementDetached: null,
                focusedElem: l,
                selectionRange: s,
              }),
              (qt = !1),
              (ql = a);
              do {
                try {
                  Ss();
                } catch (T) {
                  if (ql === null) throw Error(o(330));
                  Ts(ql, T), (ql = ql.nextEffect);
                }
              } while (ql !== null);
              ql = a;
              do {
                try {
                  for (l = e, s = t; ql !== null;) {
                    var w = ql.effectTag;
                    if ((16 & w && Be(ql.stateNode, ''), 128 & w)) {
                      var x = ql.alternate;
                      if (x !== null) {
                        var S = x.ref;
                        S !== null &&
                          ('function' === typeof S
                            ? S(null)
                            : (S.current = null));
                      }
                    }
                    switch (1038 & w) {
                      case 2:
                        dl(ql), (ql.effectTag &= -3);
                        break;
                      case 6:
                        dl(ql), (ql.effectTag &= -3), pl(ql.alternate, ql);
                        break;
                      case 1024:
                        ql.effectTag &= -1025;
                        break;
                      case 1028:
                        (ql.effectTag &= -1025), pl(ql.alternate, ql);
                        break;
                      case 4:
                        pl(ql.alternate, ql);
                        break;
                      case 8:
                        fl(l, (c = ql), s), ul(c);
                    }
                    ql = ql.nextEffect;
                  }
                } catch (T) {
                  if (ql === null) throw Error(o(330));
                  Ts(ql, T), (ql = ql.nextEffect);
                }
              } while (ql !== null);
              if (
                ((S = vn),
                (x = cn()),
                (w = S.focusedElem),
                (s = S.selectionRange),
                x !== w
                  && w
                  && w.ownerDocument
                  && (function e(t, n) {
                    return (
                      !(!t || !n)
                      && (t === n
                        || ((!t || t.nodeType !== 3)
                          && (n && n.nodeType === 3
                            ? e(t, n.parentNode)
                            : 'contains' in t
                              ? t.contains(n)
                              : !!t.compareDocumentPosition
                              && !!(16 & t.compareDocumentPosition(n)))))
                    );
                  }(w.ownerDocument.documentElement, w)))
              ) {
                s !== null &&
                  dn(w)
                  && ((x = s.start),
                  void 0 === (S = s.end) && (S = x),
                  'selectionStart' in w
                    ? ((w.selectionStart = x),
                    (w.selectionEnd = Math.min(S, w.value.length)))
                    : (S =                        ((x = w.ownerDocument || document) && x.defaultView)
                        || window).getSelection
                      && ((S = S.getSelection()),
                      (c = w.textContent.length),
                      (l = Math.min(s.start, c)),
                      (s = void 0 === s.end ? l : Math.min(s.end, c)),
                      !S.extend && l > s && ((c = s), (s = l), (l = c)),
                      (c = un(w, l)),
                      (d = un(w, s)),
                      c
                        && d
                        && (S.rangeCount !== 1 ||
                          S.anchorNode !== c.node
                          || S.anchorOffset !== c.offset
                          || S.focusNode !== d.node
                          || S.focusOffset !== d.offset)
                        && ((x = x.createRange()).setStart(c.node, c.offset),
                        S.removeAllRanges(),
                        l > s
                          ? (S.addRange(x), S.extend(d.node, d.offset))
                          : (x.setEnd(d.node, d.offset), S.addRange(x))))),
                (x = []);
                for (S = w; (S = S.parentNode);) 1 === S.nodeType
                    && x.push({
                      element: S,
                      left: S.scrollLeft,
                      top: S.scrollTop,
                    });
                for (
                  'function' === typeof w.focus && w.focus(), w = 0;
                  w < x.length;
                  w++
                ) ((S = x[w]).element.scrollLeft = S.left),
                  (S.element.scrollTop = S.top);
              }
              (qt = !!gn), (vn = gn = null), (e.current = n), (ql = a);
              do {
                try {
                  for (w = e; ql !== null;) {
                    let k = ql.effectTag;
                    if ((36 & k && ll(w, ql.alternate, ql), 128 & k)) {
                      x = void 0;
                      let E = ql.ref;
                      if (E !== null) {
                        let C = ql.stateNode;
                        switch (ql.tag) {
                          case 5:
                            x = C;
                            break;
                          default:
                            x = C;
                        }
                        'function' === typeof E ? E(x) : (E.current = x);
                      }
                    }
                    ql = ql.nextEffect;
                  }
                } catch (T) {
                  if (ql === null) throw Error(o(330));
                  Ts(ql, T), (ql = ql.nextEffect);
                }
              } while (ql !== null);
              (ql = null), Ia(), (Nl = i);
            } else e.current = n;
            if (Ql) (Ql = !1), ($l = e), (Xl = t);
            else for (ql = a; ql !== null;) (t = ql.nextEffect), (ql.nextEffect = null), (ql = t);
            if (
              ((t = e.firstPendingTime) === 0 && (Kl = null),
              t === 1073741823
                ? e === es
                  ? Jl++
                  : ((Jl = 0), (es = e))
                : (Jl = 0),
              'function' === typeof Ps && Ps(n.stateNode, r),
              ls(e),
              Gl)
            ) throw ((Gl = !1), (e = Yl), (Yl = null), e);
            return (Nl & kl) !== Sl ? null : (Ga(), null);
          }).bind(null, e, t),
        ),
        null
      );
    }
    function Ss() {
      for (; ql !== null;) {
        const e = ql.effectTag;
        (256 & e) !== 0 && al(ql.alternate, ql),
        (512 & e) === 0
            || Ql
            || ((Ql = !0),
            Va(97, () => (ks(), null))),
        (ql = ql.nextEffect);
      }
    }
    function ks() {
      if (Xl !== 90) {
        const e = Xl > 97 ? 97 : Xl;
        return (Xl = 90), Wa(e, Es);
      }
    }
    function Es() {
      if ($l === null) return !1;
      let e = $l;
      if ((($l = null), (Nl & (El | Cl)) !== Sl)) throw Error(o(331));
      const t = Nl;
      for (Nl |= Cl, e = e.current.firstEffect; e !== null;) {
        try {
          var n = e;
          if ((512 & n.effectTag) !== 0) {switch (n.tag) {
              case 0:
              case 11:
              case 15:
              case 22:
                il(5, n), ol(5, n);
            }}
        } catch (r) {
          if (e === null) throw Error(o(330));
          Ts(e, r);
        }
        (n = e.nextEffect), (e.nextEffect = null), (e = n);
      }
      return (Nl = t), Ga(), !0;
    }
    function Cs(e, t, n) {
      ui(e, (t = gl(e, (t = el(n, t)), 1073741823))),
      (e = is(e, 1073741823)) !== null && ls(e);
    }
    function Ts(e, t) {
      if (e.tag === 3) Cs(e, e, t);
      else {for (let n = e.return; n !== null;) {
          if (n.tag === 3) {
            Cs(n, e, t);
            break;
          }
          if (n.tag === 1) {
            let r = n.stateNode;
            if (
              'function' === typeof n.type.getDerivedStateFromError
              || ('function' === typeof r.componentDidCatch
                && (Kl === null || !Kl.has(r)))
            ) {
              ui(n, (e = vl(n, (e = el(t, e)), 1073741823))),
              null !== (n = is(n, 1073741823)) && ls(n);
              break;
            }
          }
          n = n.return;
        }}
    }
    function Os(e, t, n) {
      const r = e.pingCache;
      r !== null && r.delete(t),
      Fl === e && Il === n
        ? jl === Ml || (jl === Al && zl === 1073741823 && La() - Wl < Vl)
          ? ds(e, Il)
          : (Hl = !0)
        : Bs(e, n)
            && (((t = e.lastPingedTime) !== 0 && t < n)
              || ((e.lastPingedTime = n), ls(e)));
    }
    bl = function (e, t, n) {
      let r = t.expirationTime;
      if (e !== null) {
        var a = t.pendingProps;
        if (e.memoizedProps !== a || pa.current) _o = !0;
        else {
          if (r < n) {
            switch (((_o = !1), t.tag)) {
              case 3:
                Lo(t), Ao();
                break;
              case 5:
                if ((Di(t), 4 & t.mode && n !== 1 && a.hidden)) return (t.expirationTime = t.childExpirationTime = 1), null;
                break;
              case 1:
                ga(t.type) && wa(t);
                break;
              case 4:
                Ni(t, t.stateNode.containerInfo);
                break;
              case 10:
                (r = t.memoizedProps.value),
                (a = t.type._context),
                ca($a, a._currentValue),
                (a._currentValue = r);
                break;
              case 13:
                if (t.memoizedState !== null) {return (r = t.child.childExpirationTime) !== 0 && r >= n
                    ? Go(e, t, n)
                    : (ca(ji, 1 & ji.current),
                    null !== (t = $o(e, t, n)) ? t.sibling : null);}
                ca(ji, 1 & ji.current);
                break;
              case 19:
                if (
                  ((r = t.childExpirationTime >= n), (64 & e.effectTag) !== 0)
                ) {
                  if (r) return Qo(e, t, n);
                  t.effectTag |= 64;
                }
                if (
                  ((a = t.memoizedState) !== null
                    && ((a.rendering = null), (a.tail = null)),
                  ca(ji, ji.current),
                  !r)
                ) return null;
            }
            return $o(e, t, n);
          }
          _o = !1;
        }
      } else _o = !1;
      switch (((t.expirationTime = 0), t.tag)) {
        case 2:
          if (
            ((r = t.type),
            e !== null
              && ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
            (e = t.pendingProps),
            (a = ma(t, fa.current)),
            ri(t, n),
            (a = Ki(null, t, r, e, a, n)),
            (t.effectTag |= 1),
            typeof a === 'object'
              && a !== null
              && 'function' === typeof a.render
              && void 0 === a.$$typeof)
          ) {
            if (
              ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              ga(r))
            ) {
              var i = !0;
              wa(t);
            } else i = !1;
            (t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null),
            oi(t);
            var l = r.getDerivedStateFromProps;
            typeof l === 'function' && mi(t, r, l, e),
            (a.updater = gi),
            (t.stateNode = a),
            (a._reactInternalFiber = t),
            wi(t, r, e, n),
            (t = Bo(null, t, r, !0, i, n));
          } else (t.tag = 0), No(null, t, a, n), (t = t.child);
          return t;
        case 16:
          e: {
            if (
              ((a = t.elementType),
              e !== null
                && ((e.alternate = null),
                (t.alternate = null),
                (t.effectTag |= 2)),
              (e = t.pendingProps),
              (function (e) {
                if (e._status === -1) {
                  e._status = 0;
                  let t = e._ctor;
                  (t = t()),
                  (e._result = t),
                  t.then(
                    (t) => {
                      0 === e._status
                          && ((t = t.default), (e._status = 1), (e._result = t));
                    },
                    (t) => {
                      0 === e._status && ((e._status = 2), (e._result = t));
                    },
                  );
                }
              }(a)),
              a._status !== 1)
            ) throw a._result;
            switch (
              ((a = a._result),
              (t.type = a),
              (i = t.tag = (function (e) {
                if (typeof e === 'function') return Ns(e) ? 1 : 0;
                if (void 0 !== e && e !== null) {
                  if ((e = e.$$typeof) === le) return 11;
                  if (e === ce) return 14;
                }
                return 2;
              }(a))),
              (e = Qa(a, e)),
              i)
            ) {
              case 0:
                t = Ro(null, t, a, e, n);
                break e;
              case 1:
                t = zo(null, t, a, e, n);
                break e;
              case 11:
                t = Fo(null, t, a, e, n);
                break e;
              case 14:
                t = Do(null, t, a, Qa(a.type, e), r, n);
                break e;
            }
            throw Error(o(306, a, ''));
          }
          return t;
        case 0:
          return (
            (r = t.type),
            (a = t.pendingProps),
            Ro(e, t, r, (a = t.elementType === r ? a : Qa(r, a)), n)
          );
        case 1:
          return (
            (r = t.type),
            (a = t.pendingProps),
            zo(e, t, r, (a = t.elementType === r ? a : Qa(r, a)), n)
          );
        case 3:
          if ((Lo(t), (r = t.updateQueue), e === null || r === null)) throw Error(o(282));
          if (
            ((r = t.pendingProps),
            (a = (a = t.memoizedState) !== null ? a.element : null),
            li(e, t),
            di(t, r, null, n),
            (r = t.memoizedState.element) === a)
          ) Ao(), (t = $o(e, t, n));
          else {
            if (
              ((a = t.stateNode.hydrate)
                && ((So = Sn(t.stateNode.containerInfo.firstChild)),
                (xo = t),
                (a = ko = !0)),
              a)
            ) for (n = Ti(t, null, r, n), t.child = n; n;) (n.effectTag = (-3 & n.effectTag) | 1024), (n = n.sibling);
            else No(e, t, r, n), Ao();
            t = t.child;
          }
          return t;
        case 5:
          return (
            Di(t),
            e === null && To(t),
            (r = t.type),
            (a = t.pendingProps),
            (i = e !== null ? e.memoizedProps : null),
            (l = a.children),
            yn(r, a)
              ? (l = null)
              : i !== null && yn(r, i) && (t.effectTag |= 16),
            jo(e, t),
            4 & t.mode && n !== 1 && a.hidden
              ? ((t.expirationTime = t.childExpirationTime = 1), (t = null))
              : (No(e, t, l, n), (t = t.child)),
            t
          );
        case 6:
          return e === null && To(t), null;
        case 13:
          return Go(e, t, n);
        case 4:
          return (
            Ni(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = Ci(t, null, r, n)) : No(e, t, r, n),
            t.child
          );
        case 11:
          return (
            (r = t.type),
            (a = t.pendingProps),
            Fo(e, t, r, (a = t.elementType === r ? a : Qa(r, a)), n)
          );
        case 7:
          return No(e, t, t.pendingProps, n), t.child;
        case 8:
        case 12:
          return No(e, t, t.pendingProps.children, n), t.child;
        case 10:
          e: {
            (r = t.type._context),
            (a = t.pendingProps),
            (l = t.memoizedProps),
            (i = a.value);
            let s = t.type._context;
            if ((ca($a, s._currentValue), (s._currentValue = i), l !== null)) {if (
                ((s = l.value),
                (i = zr(s, i)
                    ? 0
                    : 0 |
                      ("function" === typeof r._calculateChangedBits
                        ? r._calculateChangedBits(s, i)
                        : 1073741823)) ===
                  0)
              ) {
                if (l.children === a.children && !pa.current) {
                  t = $o(e, t, n);
                  break e;
                }
              } else for ((s = t.child) !== null && (s.return = t); s !== null;) {
                  let u = s.dependencies;
                  if (u !== null) {
                    l = s.child;
                    for (let c = u.firstContext; c !== null;) {
                      if (c.context === r && (c.observedBits & i) !== 0) {
                        s.tag === 1 && (((c = si(n, null)).tag = 2), ui(s, c)),
                        s.expirationTime < n && (s.expirationTime = n),
                        null !== (c = s.alternate)
                            && c.expirationTime < n
                            && (c.expirationTime = n),
                        ni(s.return, n),
                        u.expirationTime < n && (u.expirationTime = n);
                        break;
                      }
                      c = c.next;
                    }
                  } else l = s.tag === 10 && s.type === t.type ? null : s.child;
                  if (l !== null) l.return = s;
                  else for (l = s; l !== null;) {
                      if (l === t) {
                        l = null;
                        break;
                      }
                      if ((s = l.sibling) !== null) {
                        (s.return = l.return), (l = s);
                        break;
                      }
                      l = l.return;
                    }
                  s = l;
                }}
            No(e, t, a.children, n), (t = t.child);
          }
          return t;
        case 9:
          return (
            (a = t.type),
            (r = (i = t.pendingProps).children),
            ri(t, n),
            (r = r((a = ai(a, i.unstable_observedBits)))),
            (t.effectTag |= 1),
            No(e, t, r, n),
            t.child
          );
        case 14:
          return (
            (i = Qa((a = t.type), t.pendingProps)),
            Do(e, t, a, (i = Qa(a.type, i)), r, n)
          );
        case 15:
          return Io(e, t, t.type, t.pendingProps, r, n);
        case 17:
          return (
            (r = t.type),
            (a = t.pendingProps),
            (a = t.elementType === r ? a : Qa(r, a)),
            e !== null
              && ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
            (t.tag = 1),
            ga(r) ? ((e = !0), wa(t)) : (e = !1),
            ri(t, n),
            bi(t, r, a),
            wi(t, r, a, n),
            Bo(null, t, r, !0, e, n)
          );
        case 19:
          return Qo(e, t, n);
      }
      throw Error(o(156, t.tag));
    };
    var Ps = null;
    var As = null;
    function Ms(e, t, n, r) {
      (this.tag = e),
      (this.key = n),
      (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = r),
      (this.effectTag = 0),
      (this.lastEffect = this.firstEffect = this.nextEffect = null),
      (this.childExpirationTime = this.expirationTime = 0),
      (this.alternate = null);
    }
    function _s(e, t, n, r) {
      return new Ms(e, t, n, r);
    }
    function Ns(e) {
      return !(!(e = e.prototype) || !e.isReactComponent);
    }
    function Fs(e, t) {
      let n = e.alternate;
      return (
        n === null
          ? (((n = _s(e.tag, t, e.key, e.mode)).elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
          : ((n.pendingProps = t),
          (n.effectTag = 0),
          (n.nextEffect = null),
          (n.firstEffect = null),
          (n.lastEffect = null)),
        (n.childExpirationTime = e.childExpirationTime),
        (n.expirationTime = e.expirationTime),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies = null === t
          ? null
          : {
            expirationTime: t.expirationTime,
            firstContext: t.firstContext,
            responders: t.responders,
          }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
      );
    }
    function Ds(e, t, n, r, a, i) {
      let l = 2;
      if (((r = e), typeof e === 'function')) Ns(e) && (l = 1);
      else if (typeof e === 'string') l = 5;
      else {e: switch (e) {
          case te:
            return Is(n.children, a, i, t);
          case oe:
            (l = 8), (a |= 7);
            break;
          case ne:
            (l = 8), (a |= 1);
            break;
          case re:
            return (
              ((e = _s(12, n, t, 8 | a)).elementType = re),
              (e.type = re),
              (e.expirationTime = i),
              e
            );
          case se:
            return (
              ((e = _s(13, n, t, a)).type = se),
              (e.elementType = se),
              (e.expirationTime = i),
              e
            );
          case ue:
            return (
              ((e = _s(19, n, t, a)).elementType = ue),
              (e.expirationTime = i),
              e
            );
          default:
            if ('object' === typeof e && e !== null) switch (e.$$typeof) {
                case ae:
                  l = 10;
                  break e;
                case ie:
                  l = 9;
                  break e;
                case le:
                  l = 11;
                  break e;
                case ce:
                  l = 14;
                  break e;
                case de:
                  (l = 16), (r = null);
                  break e;
                case fe:
                  l = 22;
                  break e;
              }
            throw Error(o(130, e == null ? e : typeof e, ''));
        }}
      return (
        ((t = _s(l, n, t, a)).elementType = e),
        (t.type = r),
        (t.expirationTime = i),
        t
      );
    }
    function Is(e, t, n, r) {
      return ((e = _s(7, e, r, t)).expirationTime = n), e;
    }
    function js(e, t, n) {
      return ((e = _s(6, e, null, t)).expirationTime = n), e;
    }
    function Rs(e, t, n) {
      return (
        ((t = _s(
          4,
          e.children !== null ? e.children : [],
          e.key,
          t,
        )).expirationTime = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    function zs(e, t, n) {
      (this.tag = t),
      (this.current = null),
      (this.containerInfo = e),
      (this.pingCache = this.pendingChildren = null),
      (this.finishedExpirationTime = 0),
      (this.finishedWork = null),
      (this.timeoutHandle = -1),
      (this.pendingContext = this.context = null),
      (this.hydrate = n),
      (this.callbackNode = null),
      (this.callbackPriority = 90),
      (this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0);
    }
    function Bs(e, t) {
      const n = e.firstSuspendedTime;
      return (e = e.lastSuspendedTime), n !== 0 && n >= t && e <= t;
    }
    function Ls(e, t) {
      const n = e.firstSuspendedTime;
      var r = e.lastSuspendedTime;
      n < t && (e.firstSuspendedTime = t),
      (r > t || n === 0) && (e.lastSuspendedTime = t),
      t <= e.lastPingedTime && (e.lastPingedTime = 0),
      t <= e.lastExpiredTime && (e.lastExpiredTime = 0);
    }
    function Us(e, t) {
      t > e.firstPendingTime && (e.firstPendingTime = t);
      const n = e.firstSuspendedTime;
      n !== 0
        && (t >= n
          ? (e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0)
          : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1),
        t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t));
    }
    function Hs(e, t) {
      const n = e.lastExpiredTime;
      (n === 0 || n > t) && (e.lastExpiredTime = t);
    }
    function Ws(e, t, n, r) {
      const a = t.current;
      var i = ns();
      var l = pi.suspense;
      i = rs(i, a, l);
      e: if (n) {
        t: {
          if (Ze((n = n._reactInternalFiber)) !== n || n.tag !== 1) throw Error(o(170));
          var s = n;
          do {
            switch (s.tag) {
              case 3:
                s = s.stateNode.context;
                break t;
              case 1:
                if (ga(s.type)) {
                  s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                  break t;
                }
            }
            s = s.return;
          } while (s !== null);
          throw Error(o(171));
        }
        if (n.tag === 1) {
          const u = n.type;
          if (ga(u)) {
            n = ya(n, u, s);
            break e;
          }
        }
        n = s;
      } else n = da;
      return (
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        ((t = si(i, l)).payload = { element: e }),
        (r = void 0 === r ? null : r) !== null && (t.callback = r),
        ui(a, t),
        as(a, i),
        i
      );
    }
    function Vs(e) {
      if (!(e = e.current).child) return null;
      switch (e.child.tag) {
        case 5:
        default:
          return e.child.stateNode;
      }
    }
    function qs(e, t) {
      (e = e.memoizedState) !== null
        && e.dehydrated !== null
        && e.retryTime < t
        && (e.retryTime = t);
    }
    function Gs(e, t) {
      qs(e, t), (e = e.alternate) && qs(e, t);
    }
    function Ys(e, t, n) {
      const r = new zs(e, t, (n = n != null && !0 === n.hydrate));
      var a = _s(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0);
      (r.current = a),
      (a.stateNode = r),
      oi(a),
      (e[On] = r.current),
      n
          && t !== 0
          && (function (e, t) {
            const n = Xe(t);
            Ct.forEach((e) => {
              pt(e, t, n);
            }),
            Tt.forEach((e) => {
              pt(e, t, n);
            });
          }(0, e.nodeType === 9 ? e : e.ownerDocument)),
      (this._internalRoot = r);
    }
    function Ks(e) {
      return !(
        !e
        || (e.nodeType !== 1
          && e.nodeType !== 9
          && e.nodeType !== 11
          && (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
      );
    }
    function Qs(e, t, n, r, a) {
      let i = n._reactRootContainer;
      if (i) {
        var o = i._internalRoot;
        if (typeof a === 'function') {
          const l = a;
          a = function () {
            const e = Vs(o);
            l.call(e);
          };
        }
        Ws(t, o, e, a);
      } else {
        if (
          ((i = n._reactRootContainer = (function (e, t) {
            if (
              (t
                || (t = !(
                  !(t = e
                    ? e.nodeType === 9
                      ? e.documentElement
                      : e.firstChild
                    : null)
                  || t.nodeType !== 1
                  || !t.hasAttribute('data-reactroot')
                )),
              !t)
            ) for (var n; (n = e.lastChild);) e.removeChild(n);
            return new Ys(e, 0, t ? { hydrate: !0 } : void 0);
          }(n, r))),
          (o = i._internalRoot),
          typeof a === 'function')
        ) {
          const s = a;
          a = function () {
            const e = Vs(o);
            s.call(e);
          };
        }
        cs(() => {
          Ws(t, o, e, a);
        });
      }
      return Vs(o);
    }
    function $s(e, t) {
      const n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!Ks(t)) throw Error(o(200));
      return (function (e, t, n) {
        const r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
          $$typeof: ee,
          key: r == null ? null : `${  r}`,
          children: e,
          containerInfo: t,
          implementation: n,
        };
      }(e, t, null, n));
    }
    (Ys.prototype.render = function (e) {
      Ws(e, this._internalRoot, null, null);
    }),
    (Ys.prototype.unmount = function () {
      let e = this._internalRoot;
      var t = e.containerInfo;
      Ws(null, e, null, () => {
        t[On] = null;
      });
    }),
    (ht = function (e) {
      if (e.tag === 13) {
        let t = Ka(ns(), 150, 100);
        as(e, t), Gs(e, t);
      }
    }),
    (mt = function (e) {
      e.tag === 13 && (as(e, 3), Gs(e, 3));
    }),
    (gt = function (e) {
      if (e.tag === 13) {
        let t = ns();
        as(e, (t = rs(t, e, null))), Gs(e, t);
      }
    }),
    (O = function (e, t, n) {
      switch (t) {
        case 'input':
          if ((Ee(e, n), (t = n.name), n.type === 'radio' && t != null)) {
            for (n = e; n.parentNode;) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name=' + JSON.stringify(`${  t}`) + '][type="radio"]',
              ),
              t = 0;
              t < n.length;
              t++
            ) {
              let r = n[t];
              if (r !== e && r.form === e.form) {
                let a = _n(r);
                if (!a) throw Error(o(90));
                we(r), Ee(r, a);
              }
            }
          }
          break;
        case 'textarea':
          _e(e, n);
          break;
        case 'select':
          (t = n.value) != null && Pe(e, !!n.multiple, t, !1);
      }
    }),
    (F = us),
    (D = function (e, t, n, r, a) {
      let i = Nl;
      Nl |= 4;
      try {
        return Wa(98, e.bind(null, t, n, r, a));
      } finally {
        (Nl = i) === Sl && Ga();
      }
    }),
    (I = function () {
      (Nl & (1 | El | Cl)) === Sl
          && ((function () {
            if (Zl !== null) {
              const e = Zl;
              (Zl = null),
              e.forEach((e, t) => {
                Hs(t, e), ls(t);
              }),
              Ga();
            }
          }()),
          ks());
    }),
    (j = function (e, t) {
      let n = Nl;
      Nl |= 2;
      try {
        return e(t);
      } finally {
        (Nl = n) === Sl && Ga();
      }
    });
    const Xs = {
      Events: [
        An,
        Mn,
        _n,
        C,
        S,
        zn,
        function (e) {
          rt(e, Rn);
        },
        _,
        N,
        Kt,
        ot,
        ks,
        { current: !1 },
      ],
    };
    !(function (e) {
      const t = e.findFiberByHostInstance;
      (function (e) {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') return !1;
        const t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (t.isDisabled || !t.supportsFiber) return !0;
        try {
          const n = t.inject(e);
          (Ps = function (e) {
            try {
              t.onCommitFiberRoot(
                n,
                e,
                void 0,
                (64 & e.current.effectTag) === 64,
              );
            } catch (r) {}
          }),
          (As = function (e) {
            try {
              t.onCommitFiberUnmount(n, e);
            } catch (r) {}
          });
        } catch (r) {}
      }(
        a({}, e, {
          overrideHookState: null,
          overrideProps: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: Q.ReactCurrentDispatcher,
          findHostInstanceByFiber(e) {
            return null === (e = tt(e)) ? null : e.stateNode;
          },
          findFiberByHostInstance(e) {
            return t ? t(e) : null;
          },
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null,
        }),
      ));
    }({
      findFiberByHostInstance: Pn,
      bundleType: 0,
      version: '16.13.1',
      rendererPackageName: 'react-dom'
    })),
    (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xs),
    (t.createPortal = $s),
    (t.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      let t = e._reactInternalFiber;
      if (void 0 === t) {
        if (typeof e.render === 'function') throw Error(o(188));
        throw Error(o(268, Object.keys(e)));
      }
      return (e = (e = tt(t)) === null ? null : e.stateNode);
    }),
    (t.flushSync = function (e, t) {
      if ((Nl & (El | Cl)) !== Sl) throw Error(o(187));
      let n = Nl;
      Nl |= 1;
      try {
        return Wa(99, e.bind(null, t));
      } finally {
        (Nl = n), Ga();
      }
    }),
    (t.hydrate = function (e, t, n) {
      if (!Ks(t)) throw Error(o(200));
      return Qs(null, e, t, !0, n);
    }),
    (t.render = function (e, t, n) {
      if (!Ks(t)) throw Error(o(200));
      return Qs(null, e, t, !1, n);
    }),
    (t.unmountComponentAtNode = function (e) {
      if (!Ks(e)) throw Error(o(40));
      return (
        !!e._reactRootContainer
          && (cs(() => {
            Qs(null, null, e, !1, () => {
              (e._reactRootContainer = null), (e[On] = null);
            });
          }),
          !0)
      );
    }),
    (t.unstable_batchedUpdates = us),
    (t.unstable_createPortal = function (e, t) {
      return $s(
        e,
        t,
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      );
    }),
    (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Ks(n)) throw Error(o(200));
      if (e == null || void 0 === e._reactInternalFiber) throw Error(o(38));
      return Qs(e, t, n, !1, r);
    }),
    (t.version = '16.13.1');
  },
  function (e, t, n) {
    

    e.exports = n(34);
  },
  function (e, t, n) {
    

    let r; let a; let i; let o; let 
      l;
    if (typeof window === 'undefined' || typeof MessageChannel !== 'function') {
      let s = null;
      var u = null;
      var c = function e() {
        if (s !== null) try {
            var n = t.unstable_now();
            s(!0, n), (s = null);
          } catch (r) {
            throw (setTimeout(e, 0), r);
          }
      };
      var d = Date.now();
      (t.unstable_now = function () {
        return Date.now() - d;
      }),
      (r = function (e) {
        s !== null ? setTimeout(r, 0, e) : ((s = e), setTimeout(c, 0));
      }),
      (a = function (e, t) {
        u = setTimeout(e, t);
      }),
      (i = function () {
        clearTimeout(u);
      }),
      (o = function () {
        return !1;
      }),
      (l = t.unstable_forceFrameRate = function () {});
    } else {
      const f = window.performance;
      var p = window.Date;
      var h = window.setTimeout;
      var m = window.clearTimeout;
      if (typeof console !== 'undefined') {
        const g = window.cancelAnimationFrame;
        typeof window.requestAnimationFrame !== 'function'
          && console.error(
            "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills",
          ),
        'function' !== typeof g
            && console.error(
              "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills",
            );
      }
      if (typeof f === 'object' && typeof f.now === 'function') {t.unstable_now = function () {
          return f.now();
        };}
      else {
        const v = p.now();
        t.unstable_now = function () {
          return p.now() - v;
        };
      }
      let b = !1;
      var y = null;
      var w = -1;
      var x = 5;
      var S = 0;
      (o = function () {
        return t.unstable_now() >= S;
      }),
      (l = function () {}),
      (t.unstable_forceFrameRate = function (e) {
        e < 0 || e > 125
          ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported',
          )
          : (x = e > 0 ? Math.floor(1e3 / e) : 5);
      });
      const k = new MessageChannel();
      var E = k.port2;
      (k.port1.onmessage = function () {
        if (y !== null) {
          const e = t.unstable_now();
          S = e + x;
          try {
            y(!0, e) ? E.postMessage(null) : ((b = !1), (y = null));
          } catch (n) {
            throw (E.postMessage(null), n);
          }
        } else b = !1;
      }),
      (r = function (e) {
        (y = e), b || ((b = !0), E.postMessage(null));
      }),
      (a = function (e, n) {
        w = h(() => {
          e(t.unstable_now());
        }, n);
      }),
      (i = function () {
        m(w), (w = -1);
      });
    }
    function C(e, t) {
      let n = e.length;
      e.push(t);
      for (;;) {
        const r = (n - 1) >>> 1;
        var a = e[r];
        if (!(void 0 !== a && P(a, t) > 0)) break;
        (e[r] = t), (e[n] = a), (n = r);
      }
    }
    function T(e) {
      return void 0 === (e = e[0]) ? null : e;
    }
    function O(e) {
      const t = e[0];
      if (void 0 !== t) {
        const n = e.pop();
        if (n !== t) {
          e[0] = n;
          for (let r = 0, a = e.length; r < a;) {
            const i = 2 * (r + 1) - 1;
            var o = e[i];
            var l = i + 1;
            var s = e[l];
            if (void 0 !== o && P(o, n) < 0) {void 0 !== s && P(s, o) < 0
                ? ((e[r] = s), (e[l] = n), (r = l))
                : ((e[r] = o), (e[i] = n), (r = i));}
            else {
              if (!(void 0 !== s && P(s, n) < 0)) break;
              (e[r] = s), (e[l] = n), (r = l);
            }
          }
        }
        return t;
      }
      return null;
    }
    function P(e, t) {
      const n = e.sortIndex - t.sortIndex;
      return n !== 0 ? n : e.id - t.id;
    }
    const A = [];
    var M = [];
    var _ = 1;
    var N = null;
    var F = 3;
    var D = !1;
    var I = !1;
    var j = !1;
    function R(e) {
      for (let t = T(M); t !== null;) {
        if (t.callback === null) O(M);
        else {
          if (!(t.startTime <= e)) break;
          O(M), (t.sortIndex = t.expirationTime), C(A, t);
        }
        t = T(M);
      }
    }
    function z(e) {
      if (((j = !1), R(e), !I)) {if (T(A) !== null) (I = !0), r(B);
        else {
          let t = T(M);
          t !== null && a(z, t.startTime - e);
        }}
    }
    function B(e, n) {
      (I = !1), j && ((j = !1), i()), (D = !0);
      const r = F;
      try {
        for (
          R(n), N = T(A);
          N !== null && (!(N.expirationTime > n) || (e && !o()));

        ) {
          const l = N.callback;
          if (l !== null) {
            (N.callback = null), (F = N.priorityLevel);
            const s = l(N.expirationTime <= n);
            (n = t.unstable_now()),
            'function' === typeof s ? (N.callback = s) : N === T(A) && O(A),
            R(n);
          } else O(A);
          N = T(A);
        }
        if (N !== null) var u = !0;
        else {
          const c = T(M);
          c !== null && a(z, c.startTime - n), (u = !1);
        }
        return u;
      } finally {
        (N = null), (F = r), (D = !1);
      }
    }
    function L(e) {
      switch (e) {
        case 1:
          return -1;
        case 2:
          return 250;
        case 5:
          return 1073741823;
        case 4:
          return 1e4;
        default:
          return 5e3;
      }
    }
    const U = l;
    (t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (e) {
      e.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      I || D || ((I = !0), r(B));
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return F;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return T(A);
    }),
    (t.unstable_next = function (e) {
      switch (F) {
        case 1:
        case 2:
        case 3:
          var t = 3;
          break;
        default:
          t = F;
      }
      let n = F;
      F = t;
      try {
        return e();
      } finally {
        F = n;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = U),
    (t.unstable_runWithPriority = function (e, t) {
      switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          e = 3;
      }
      let n = F;
      F = e;
      try {
        return t();
      } finally {
        F = n;
      }
    }),
    (t.unstable_scheduleCallback = function (e, n, o) {
      let l = t.unstable_now();
      if (typeof o === 'object' && o !== null) {
        var s = o.delay;
        (s = typeof s === 'number' && s > 0 ? l + s : l),
        (o = typeof o.timeout === 'number' ? o.timeout : L(e));
      } else (o = L(e)), (s = l);
      return (
        (e = {
          id: _++,
          callback: n,
          priorityLevel: e,
          startTime: s,
          expirationTime: (o = s + o),
          sortIndex: -1,
        }),
        s > l
          ? ((e.sortIndex = s),
          C(M, e),
          T(A) === null && e === T(M) && (j ? i() : (j = !0), a(z, s - l)))
          : ((e.sortIndex = o), C(A, e), I || D || ((I = !0), r(B))),
        e
      );
    }),
    (t.unstable_shouldYield = function () {
      let e = t.unstable_now();
      R(e);
      let n = T(A);
      return (
        (n !== N
            && N !== null
            && n !== null
            && n.callback !== null
            && n.startTime <= e
            && n.expirationTime < N.expirationTime)
          || o()
      );
    }),
    (t.unstable_wrapCallback = function (e) {
      let t = F;
      return function () {
        let n = F;
        F = t;
        try {
          return e.apply(this, arguments);
        } finally {
          F = n;
        }
      };
    });
  },
  function (e, t, n) {},
  function (e, t, n) {
    

    const r = n(37);
    function a() {}
    function i() {}
    (i.resetWarningCache = a),
    (e.exports = function () {
      function e(e, t, n, a, i, o) {
        if (o !== r) {
          let l = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
          );
          throw ((l.name = 'Invariant Violation'), l);
        }
      }
      function t() {
        return e;
      }
      e.isRequired = e;
      let n = {
        array: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: i,
        resetWarningCache: a,
      };
      return (n.PropTypes = n), n;
    });
  },
  function (e, t, n) {
    

    e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  },
  function (e, t) {
    let n;
    n = (function () {
      return this;
    }());
    try {
      n = n || new Function('return this')();
    } catch (r) {
      typeof window === 'object' && (n = window);
    }
    e.exports = n;
  },
  function (e, t) {
    e.exports = Array.isArray
      || function (e) {
        return Object.prototype.toString.call(e) == '[object Array]';
      };
  },
  function (e, t, n) {
    

    Object.defineProperty(t, '__esModule', { value: !0 });
    const r = typeof Symbol === 'function' && Symbol.for;
    var a = r ? Symbol.for('react.element') : 60103;
    var i = r ? Symbol.for('react.portal') : 60106;
    var o = r ? Symbol.for('react.fragment') : 60107;
    var l = r ? Symbol.for('react.strict_mode') : 60108;
    var s = r ? Symbol.for('react.profiler') : 60114;
    var u = r ? Symbol.for('react.provider') : 60109;
    var c = r ? Symbol.for('react.context') : 60110;
    var d = r ? Symbol.for('react.async_mode') : 60111;
    var f = r ? Symbol.for('react.concurrent_mode') : 60111;
    var p = r ? Symbol.for('react.forward_ref') : 60112;
    var h = r ? Symbol.for('react.suspense') : 60113;
    var m = r ? Symbol.for('react.suspense_list') : 60120;
    var g = r ? Symbol.for('react.memo') : 60115;
    var v = r ? Symbol.for('react.lazy') : 60116;
    var b = r ? Symbol.for('react.fundamental') : 60117;
    var y = r ? Symbol.for('react.responder') : 60118;
    function w(e) {
      if (typeof e === 'object' && e !== null) {
        const t = e.$$typeof;
        switch (t) {
          case a:
            switch ((e = e.type)) {
              case d:
              case f:
              case o:
              case s:
              case l:
              case h:
                return e;
              default:
                switch ((e = e && e.$$typeof)) {
                  case c:
                  case p:
                  case u:
                    return e;
                  default:
                    return t;
                }
            }
          case v:
          case g:
          case i:
            return t;
        }
      }
    }
    function x(e) {
      return w(e) === f;
    }
    (t.typeOf = w),
    (t.AsyncMode = d),
    (t.ConcurrentMode = f),
    (t.ContextConsumer = c),
    (t.ContextProvider = u),
    (t.Element = a),
    (t.ForwardRef = p),
    (t.Fragment = o),
    (t.Lazy = v),
    (t.Memo = g),
    (t.Portal = i),
    (t.Profiler = s),
    (t.StrictMode = l),
    (t.Suspense = h),
    (t.isValidElementType = function (e) {
      return (
        'string' === typeof e
          || 'function' === typeof e
          || e === o
          || e === f
          || e === s
          || e === l
          || e === h
          || e === m
          || (typeof e === 'object'
            && e !== null
            && (e.$$typeof === v
              || e.$$typeof === g
              || e.$$typeof === u
              || e.$$typeof === c
              || e.$$typeof === p
              || e.$$typeof === b
              || e.$$typeof === y))
      );
    }),
    (t.isAsyncMode = function (e) {
      return x(e) || w(e) === d;
    }),
    (t.isConcurrentMode = x),
    (t.isContextConsumer = function (e) {
      return w(e) === c;
    }),
    (t.isContextProvider = function (e) {
      return w(e) === u;
    }),
    (t.isElement = function (e) {
      return typeof e === 'object' && e !== null && e.$$typeof === a;
    }),
    (t.isForwardRef = function (e) {
      return w(e) === p;
    }),
    (t.isFragment = function (e) {
      return w(e) === o;
    }),
    (t.isLazy = function (e) {
      return w(e) === v;
    }),
    (t.isMemo = function (e) {
      return w(e) === g;
    }),
    (t.isPortal = function (e) {
      return w(e) === i;
    }),
    (t.isProfiler = function (e) {
      return w(e) === s;
    }),
    (t.isStrictMode = function (e) {
      return w(e) === l;
    }),
    (t.isSuspense = function (e) {
      return w(e) === h;
    });
  },
  function (e, t) {
    let n;
    var r;
    var a = (e.exports = {});
    function i() {
      throw new Error('setTimeout has not been defined');
    }
    function o() {
      throw new Error('clearTimeout has not been defined');
    }
    function l(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === i || !n) && setTimeout) return (n = setTimeout), setTimeout(e, 0);
      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        n = typeof setTimeout === 'function' ? setTimeout : i;
      } catch (e) {
        n = i;
      }
      try {
        r = typeof clearTimeout === 'function' ? clearTimeout : o;
      } catch (e) {
        r = o;
      }
    }());
    let s;
    var u = [];
    var c = !1;
    var d = -1;
    function f() {
      c
        && s
        && ((c = !1), s.length ? (u = s.concat(u)) : (d = -1), u.length && p());
    }
    function p() {
      if (!c) {
        const e = l(f);
        c = !0;
        for (let t = u.length; t;) {
          for (s = u, u = []; ++d < t;) s && s[d].run();
          (d = -1), (t = u.length);
        }
        (s = null),
        (c = !1),
        (function (e) {
          if (r === clearTimeout) return clearTimeout(e);
          if ((r === o || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(e);
          try {
            r(e);
          } catch (t) {
            try {
              return r.call(null, e);
            } catch (t) {
              return r.call(this, e);
            }
          }
        }(e));
      }
    }
    function h(e, t) {
      (this.fun = e), (this.array = t);
    }
    function m() {}
    (a.nextTick = function (e) {
      const t = new Array(arguments.length - 1);
      if (arguments.length > 1) for (let n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      u.push(new h(e, t)), u.length !== 1 || c || l(p);
    }),
    (h.prototype.run = function () {
      this.fun.apply(null, this.array);
    }),
    (a.title = 'browser'),
    (a.browser = !0),
    (a.env = {}),
    (a.argv = []),
    (a.version = ''),
    (a.versions = {}),
    (a.on = m),
    (a.addListener = m),
    (a.once = m),
    (a.off = m),
    (a.removeListener = m),
    (a.removeAllListeners = m),
    (a.emit = m),
    (a.prependListener = m),
    (a.prependOnceListener = m),
    (a.listeners = function (e) {
      return [];
    }),
    (a.binding = function (e) {
      throw new Error('process.binding is not supported');
    }),
    (a.cwd = function () {
      return '/';
    }),
    (a.chdir = function (e) {
      throw new Error('process.chdir is not supported');
    }),
    (a.umask = function () {
      return 0;
    });
  },
  function (e, t, n) {},
  function (e, t, n) {
    

    Object.defineProperty(t, '__esModule', { value: !0 });
    let r;
    var a = n(8);
    var i = (r = a) && r.__esModule ? r : { default: r };
    (t.default = (0, i.default)({})), (e.exports = t.default);
  },
  function (e, t, n) {
    

    Object.defineProperty(t, '__esModule', { value: !0 });
    (t.default = {
      overlay(e) {
        return {
          position: 'fixed',
          zIndex: 1e3,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.3)',
          opacity: e ? 1 : 0,
          MozTransform: e ? '' : 'translate3d(100%, 0, 0)',
          MsTransform: e ? '' : 'translate3d(100%, 0, 0)',
          OTransform: e ? '' : 'translate3d(100%, 0, 0)',
          WebkitTransform: e ? '' : 'translate3d(100%, 0, 0)',
          transform: e ? '' : 'translate3d(100%, 0, 0)',
          transition: e ? 'opacity 0.3s' : 'opacity 0.3s, transform 0s 0.3s'
        };
      },
      menuWrap(e, t, n) {
        return {
          position: 'fixed',
          right: n ? 0 : 'inherit',
          zIndex: 1100,
          width: t,
          height: '100%',
          MozTransform: e
            ? ''
            : n
              ? 'translate3d(100%, 0, 0)'
              : 'translate3d(-100%, 0, 0)',
          MsTransform: e
            ? ''
            : n
              ? 'translate3d(100%, 0, 0)'
              : 'translate3d(-100%, 0, 0)',
          OTransform: e
            ? ''
            : n
              ? 'translate3d(100%, 0, 0)'
              : 'translate3d(-100%, 0, 0)',
          WebkitTransform: e
            ? ''
            : n
              ? 'translate3d(100%, 0, 0)'
              : 'translate3d(-100%, 0, 0)',
          transform: e
            ? ''
            : n
              ? 'translate3d(100%, 0, 0)'
              : 'translate3d(-100%, 0, 0)',
          transition: 'all 0.5s'
        };
      },
      menu() {
        return { height: '100%', boxSizing: 'border-box', overflow: 'auto' };
      },
      itemList() {
        return { height: '100%' };
      },
      item() {
        return { display: 'block' };
      },
    }),
    (e.exports = t.default);
  },
  function (e, t, n) {
    

    Object.defineProperty(t, '__esModule', { value: !0 });
    const r = Object.assign
        || function (e) {
          for (let t = 1; t < arguments.length; t++) {
            const n = arguments[t];
            for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        };
    var a = (function () {
      function e(e, t) {
        for (let n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }());
    var i = function (e, t, n) {
      for (let r = !0; r;) {
        let a = e;
        var i = t;
        var o = n;
        (r = !1), a === null && (a = Function.prototype);
        let l = Object.getOwnPropertyDescriptor(a, i);
        if (void 0 !== l) {
          if ('value' in l) return l.value;
          let s = l.get;
          if (void 0 === s) return;
          return s.call(o);
        }
        let u = Object.getPrototypeOf(a);
        if (u === null) return;
        (e = u), (t = i), (n = o), (r = !0), (l = u = void 0);
      }
    };
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    const l = n(0);
    var s = o(l);
    var u = o(n(9));
    var c = (function (e) {
      function t(e) {
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        }(this, t)),
        i(Object.getPrototypeOf(t.prototype), 'constructor', this).call(
          this,
          e,
        ),
        (this.state = { hover: !1 });
      }
      return (
        (function (e, t) {
          if (typeof t !== 'function' && t !== null) {throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t,
              );}
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          t
                && (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
        }(t, l.Component)),
        a(t, [
          {
            key: 'getLineStyle',
            value(e) {
              return {
                  position: "absolute",
                    height: "20%",
                    left: 0,
                    right: 0,
                    top: 2 * e * 20 + "%",
                    opacity: this.state.hover ? 0.6 : 1,
                  ...this.state.hover && this.props.styles.bmBurgerBarsHover
                };
            },
          },
          {
            key: 'render',
            value() {
              var e = this;
                  var t = void 0;
              if (this.props.customIcon) {
                var n = {
                  className: (
                    "bm-icon " + (this.props.customIcon.props.className || '')
                  ).trim(),
                  style: {
                      width: "100%", height: "100%",
                      ...this.props.styles.bmIcon
                    }
                };
                t = s.default.cloneElement(this.props.customIcon, n);
              } else t = s.default.createElement(
                  "span",
                  null,
                  [0, 1, 2].map((t) => {
                      return s.default.createElement("span", {
                        key: t,
                        className: (
                          "bm-burger-bars " +
                          e.props.barClassName +
                          " " +
                          (e.state.hover ? "bm-burger-bars-hover" : "")
                        ).trim(),
                        style: r(
                          {},
                          e.getLineStyle(t),
                          e.props.styles.bmBurgerBars
                        )
                      });
                    }),
                );
              return s.default.createElement(
                "div",
                {
                  className: (
                    "bm-burger-button " + this.props.className
                  ).trim(),
                  style: {zIndex: 1e3, ...this.props.styles.bmBurgerButton}
                },
                t,
                s.default.createElement(
                  "button",
                  {
                    onClick: this.props.onClick,
                    onMouseOver: function () {
                      e.setState({ hover: !0 }),
                      e.props.onIconHoverChange
                            && e.props.onIconHoverChange({ isMouseIn: !0 });
                    },
                    onMouseOut: function () {
                      e.setState({ hover: !1 }),
                      e.props.onIconHoverChange
                            && e.props.onIconHoverChange({ isMouseIn: !1 });
                    },
                    style: {
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      width: '100%',
                      height: '100%',
                      margin: 0,
                      padding: 0,
                      border: 'none',
                      fontSize: 0,
                      background: 'transparent',
                      cursor: 'pointer'
                    },
                  },
                  "Open Menu",
                ),
              );
            },
          },
        ]),
        t
      );
    }());
    (t.default = c),
    (c.propTypes = {
      barClassName: u.default.string,
      customIcon: u.default.element,
      styles: u.default.object,
    }),
    (c.defaultProps = { barClassName: '', className: '', styles: {} }),
    (e.exports = t.default);
  },
  function (e, t, n) {
    

    Object.defineProperty(t, '__esModule', { value: !0 });
    const r = Object.assign
        || function (e) {
          for (let t = 1; t < arguments.length; t++) {
            const n = arguments[t];
            for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        };
    var a = (function () {
      function e(e, t) {
        for (let n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }());
    var i = function (e, t, n) {
      for (let r = !0; r;) {
        let a = e;
        var i = t;
        var o = n;
        (r = !1), a === null && (a = Function.prototype);
        let l = Object.getOwnPropertyDescriptor(a, i);
        if (void 0 !== l) {
          if ('value' in l) return l.value;
          let s = l.get;
          if (void 0 === s) return;
          return s.call(o);
        }
        let u = Object.getPrototypeOf(a);
        if (u === null) return;
        (e = u), (t = i), (n = o), (r = !0), (l = u = void 0);
      }
    };
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    const l = n(0);
    var s = o(l);
    var u = o(n(9));
    var c = (function (e) {
      function t() {
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        }(this, t)),
        i(Object.getPrototypeOf(t.prototype), 'constructor', this).apply(
          this,
          arguments,
        );
      }
      return (
        (function (e, t) {
          if (typeof t !== 'function' && t !== null) {throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t,
              );}
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          t
                && (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
        }(t, l.Component)),
        a(t, [
          {
            key: 'getCrossStyle',
            value(e) {
              return {
                position: 'absolute',
                width: 3,
                height: 14,
                transform: 'before' === e ? 'rotate(45deg)' : 'rotate(-45deg)'
              };
            },
          },
          {
            key: 'render',
            value() {
              var e;
                  var t = this;
              if (this.props.customIcon) {
                var n = {
                  className: (
                    "bm-cross "
                      + (this.props.customIcon.props.className || '')
                  ).trim(),
                  style: {
                      width: "100%", height: "100%",
                      ...this.props.styles.bmCross
                    }
                };
                e = s.default.cloneElement(this.props.customIcon, n);
              } else e = s.default.createElement(
                  "span",
                  {
                    style: { position: 'absolute', top: '6px', right: '14px' },
                  },
                  ['before', 'after'].map((e, n) => {
                      return s.default.createElement("span", {
                        key: n,
                        className: (
                          "bm-cross " + t.props.crossClassName
                        ).trim(),
                        style: r({}, t.getCrossStyle(e), t.props.styles.bmCross)
                      });
                    }),
                );
              return s.default.createElement(
                "div",
                {
                  className: (
                    "bm-cross-button " + this.props.className
                  ).trim(),
                  style: {
                      
                      position: "absolute",
                        width: 24,
                        height: 24,
                        right: 8,
                        top: 8,
                      ...this.props.styles.bmCrossButton
                    }
                },
                e,
                s.default.createElement(
                  "button",
                  {
                    onClick: this.props.onClick,
                    style: {
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      width: '100%',
                      height: '100%',
                      margin: 0,
                      padding: 0,
                      border: 'none',
                      fontSize: 0,
                      background: 'transparent',
                      cursor: 'pointer'
                    },
                    tabIndex: this.props.tabIndex,
                  },
                  "Close Menu",
                ),
              );
            },
          },
        ]),
        t
      );
    }());
    (t.default = c),
    (c.propTypes = {
      crossClassName: u.default.string,
      customIcon: u.default.element,
      styles: u.default.object,
      tabIndex: u.default.number,
    }),
    (c.defaultProps = {
      crossClassName: '',
      className: '',
      styles: {},
      tabIndex: 0,
    }),
    (e.exports = t.default);
  },
  function (e, t, n) {
    

    Object.defineProperty(t, '__esModule', { value: !0 });
    let r;
    var a = n(8);
    var i = (r = a) && r.__esModule ? r : { default: r };
    (t.default = (0, i.default)({
      menuWrap(e, t, n) {
        return {
          MozTransform: e
            ? ''
            : n
              ? 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(-' + t + ', 0, 0)',
          MsTransform: e
            ? ''
            : n
              ? 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(-' + t + ', 0, 0)',
          OTransform: e
            ? ''
            : n
              ? 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(-' + t + ', 0, 0)',
          WebkitTransform: e
            ? ''
            : n
              ? 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(-' + t + ', 0, 0)',
          transform: e
            ? ''
            : n
              ? 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(-' + t + ', 0, 0)',
          transition: e
            ? 'transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)'
            : 'transform 0.4s cubic-bezier(0.7, 0, 0.3, 1)'
        };
      },
      item(e, t, n, r) {
        return {
          MozTransform: e ? '' : 'translate3d(0, ' + 500 * r + 'px, 0)',
          MsTransform: e ? '' : 'translate3d(0, ' + 500 * r + 'px, 0)',
          OTransform: e ? '' : 'translate3d(0, ' + 500 * r + 'px, 0)',
          WebkitTransform: e ? '' : 'translate3d(0, ' + 500 * r + 'px, 0)',
          transform: e ? '' : 'translate3d(0, ' + 500 * r + 'px, 0)',
          transition: e
            ? 'transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)'
            : 'transform 0s 0.2s cubic-bezier(0.7, 0, 0.3, 1)'
        };
      },
    })),
    (e.exports = t.default);
  },
  function (e, t, n) {
    

    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    const a = r(n(21));
    var i = r(n(8));
    var o = n(22);
    var l = {
      svg: {
        lib: a.default,
        pathInitial:
            'M-1,0h101c0,0-97.833,153.603-97.833,396.167C2.167,627.579,100,800,100,800H-1V0z',
        pathOpen: 'M-1,0h101c0,0,0-1,0,395c0,404,0,405,0,405H-1V0z',
        animate(e) {
          e.animate({ path: this.pathOpen }, 400, window.mina.easeinout);
        },
      },
      morphShape(e, t, n) {
        return {
          position: 'absolute',
          width: 120,
          height: '100%',
          right: n ? 'inherit' : 0,
          left: n ? 0 : 'inherit',
          MozTransform: n ? 'rotateY(180deg)' : '',
          MsTransform: n ? 'rotateY(180deg)' : '',
          OTransform: n ? 'rotateY(180deg)' : '',
          WebkitTransform: n ? 'rotateY(180deg)' : '',
          transform: n ? 'rotateY(180deg)' : ''
        };
      },
      menuWrap(e, t, n) {
        return {
          MozTransform: e
            ? 'translate3d(0, 0, 0)'
            : n
              ? 'translate3d(100%, 0, 0)'
              : 'translate3d(-100%, 0, 0)',
          MsTransform: e
            ? 'translate3d(0, 0, 0)'
            : n
              ? 'translate3d(100%, 0, 0)'
              : 'translate3d(-100%, 0, 0)',
          OTransform: e
            ? 'translate3d(0, 0, 0)'
            : n
              ? 'translate3d(100%, 0, 0)'
              : 'translate3d(-100%, 0, 0)',
          WebkitTransform: e
            ? 'translate3d(0, 0, 0)'
            : n
              ? 'translate3d(100%, 0, 0)'
              : 'translate3d(-100%, 0, 0)',
          transform: e
            ? 'translate3d(0, 0, 0)'
            : n
              ? 'translate3d(100%, 0, 0)'
              : 'translate3d(-100%, 0, 0)',
          transition: 'all 0.3s'
        };
      },
      menu(e, t, n) {
        return {
          position: 'fixed',
          right: n ? 0 : 'inherit',
          width: (0, o.pxToNum)(t) - 120,
          whiteSpace: 'nowrap',
          boxSizing: 'border-box',
          overflow: 'visible'
        };
      },
      itemList(e, t, n) {
        if (n) return {
            position: 'relative',
            left: '-110px',
            width: '170%',
            overflow: 'auto'
          };
      },
      pageWrap(e, t, n) {
        return {
          MozTransform: e
            ? ''
            : n
              ? 'translate3d(-100px, 0, 0)'
              : 'translate3d(100px, 0, 0)',
          MsTransform: e
            ? ''
            : n
              ? 'translate3d(-100px, 0, 0)'
              : 'translate3d(100px, 0, 0)',
          OTransform: e
            ? ''
            : n
              ? 'translate3d(-100px, 0, 0)'
              : 'translate3d(100px, 0, 0)',
          WebkitTransform: e
            ? ''
            : n
              ? 'translate3d(-100px, 0, 0)'
              : 'translate3d(100px, 0, 0)',
          transform: e
            ? ''
            : n
              ? 'translate3d(-100px, 0, 0)'
              : 'translate3d(100px, 0, 0)',
          transition: e ? 'all 0.3s' : 'all 0.3s 0.1s'
        };
      },
      outerContainer(e) {
        return { overflow: e ? '' : 'hidden' };
      },
    };
    (t.default = (0, i.default)(l)), (e.exports = t.default);
  },
  function (e, t, n) {
    window.eve = n(50);
    const r = (function (e) {
        let t;
        var n = {};
        var r =            window.requestAnimationFrame
            || window.webkitRequestAnimationFrame
            || window.mozRequestAnimationFrame
            || window.oRequestAnimationFrame
            || window.msRequestAnimationFrame
            || function (e) {
              return setTimeout(e, 16, new Date().getTime()), !0;
            };
        var a =            Array.isArray
            || function (e) {
              return (
                e instanceof Array
                || "[object Array]" == Object.prototype.toString.call(e)
              );
            };
        var i = 0;
        var o = 'M' + (+new Date()).toString(36);
        var l =            Date.now
            || function () {
              return +new Date();
            };
        var s = function (e) {
          var t = this;
          if (e == null) return t.s;
          var n = t.s - e;
          (t.b += t.dur * n), (t.B += t.dur * n), (t.s = e);
        };
        var u = function (e) {
          if (e == null) return this.spd;
          this.spd = e;
        };
        var c = function (e) {
          var t = this;
          if (e == null) return t.dur;
          (t.s = (t.s * e) / t.dur), (t.dur = e);
        };
        var d = function () {
          var t = this;
          delete n[t.id], t.update(), e('mina.stop.' + t.id, t);
        };
        var f = function () {
          var e = this;
          e.pdif || (delete n[e.id], e.update(), (e.pdif = e.get() - e.b));
        };
        var p = function () {
          var e = this;
          e.pdif
              && ((e.b = e.get() - e.pdif), delete e.pdif, (n[e.id] = e), m());
        };
        var h = function () {
          var e;
              var t = this;
          if (a(t.start)) {
            e = [];
            for (let n = 0, r = t.start.length; n < r; n++) e[n] = +t.start[n] + (t.end[n] - t.start[n]) * t.easing(t.s);
          } else e = +t.start + (t.end - t.start) * t.easing(t.s);
          t.set(e);
        };
        var m = function a(i) {
          if (i) {
            var o = 0;
            for (let l in n) if (n.hasOwnProperty(l)) {
                var s = n[l];
                    var u = s.get();
                o++,
                (s.s = (u - s.b) / (s.dur / s.spd)),
                s.s >= 1
                      && (delete n[l],
                      (s.s = 1),
                      o--,
                      (function (t) {
                        setTimeout(() => {
                          e("mina.finish." + t.id, t);
                        });
                      }(s))),
                s.update();
              }
            t = !!o && r(a);
          } else t || (t = r(a));
        };
        var g = function e(t, r, a, l, g, v, b) {
          let y = {
            id: o + (i++).toString(36),
            start: t,
            end: r,
            b: a,
            s: 0,
            dur: l - a,
            spd: 1,
            get: g,
            set: v,
            easing: b || e.linear,
            status: s,
            speed: u,
            duration: c,
            stop: d,
            pause: f,
            resume: p,
            update: h,
          };
          n[y.id] = y;
          let w;
          var x = 0;
          for (w in n) if (n.hasOwnProperty(w) && ++x == 2) break;
          return x == 1 && m(), y;
        };
        return (
          (g.time = l),
          (g.getById = function (e) {
            return n[e] || null;
          }),
          (g.linear = function (e) {
            return e;
          }),
          (g.easeout = function (e) {
            return Math.pow(e, 1.7);
          }),
          (g.easein = function (e) {
            return Math.pow(e, 0.48);
          }),
          (g.easeinout = function (e) {
            if (e == 1) return 1;
            if (e == 0) return 0;
            const t = 0.48 - e / 1.04;
            var n = Math.sqrt(0.1734 + t * t);
            var r = n - t;
            var a = -n - t;
            var i = Math.pow(Math.abs(r), 1 / 3) * (r < 0 ? -1 : 1)
                + Math.pow(Math.abs(a), 1 / 3) * (a < 0 ? -1 : 1)
                + 0.5;
            return 3 * (1 - i) * i * i + i * i * i;
          }),
          (g.backin = function (e) {
            if (e == 1) return 1;
            const t = 1.70158;
            return e * e * ((t + 1) * e - t);
          }),
          (g.backout = function (e) {
            if (e == 0) return 0;
            const t = 1.70158;
            return (e -= 1) * e * ((t + 1) * e + t) + 1;
          }),
          (g.elastic = function (e) {
            return e == !!e
              ? e
              : Math.pow(2, -10 * e)
                  * Math.sin(((e - 0.075) * (2 * Math.PI)) / 0.3)
                  + 1;
          }),
          (g.bounce = function (e) {
            const t = 7.5625;
            var n = 2.75;
            return e < 1 / n
              ? t * e * e
              : e < 2 / n
                ? t * (e -= 1.5 / n) * e + 0.75
                : e < 2.5 / n
                  ? t * (e -= 2.25 / n) * e + 0.9375
                  : t * (e -= 2.625 / n) * e + 0.984375;
          }),
          (window.mina = g),
          g
        );
      }('undefined' === typeof eve ? () => {} : eve));
      let a = (function (e) {
        function t(e, r) {
          if (e) {
            if (e.nodeType) return V(e);
            if (P(e, 'array') && t.set) return t.set.apply(t, e);
            if (e instanceof L) return e;
            if (r == null) {try {
                return V((e = n.doc.querySelector(String(e))));
              } catch (a) {
                return null;
              }}
          }
          return new W(
            (e = e == null ? '100%' : e),
            (r = r == null ? '100%' : r),
          );
        }
        (t.version = '0.5.1'),
        (t.toString = function () {
          return `Snap v${  this.version}`;
        }),
        (t._ = {});
        var n = { win: e.window, doc: e.window.document };
        t._.glob = n;
        let r = 'hasOwnProperty';
          let a = String;
          let i = parseFloat;
          let o = parseInt;
          let l = Math;
          let s = l.max;
          let u = l.min;
          let c = l.abs;
          let d = (l.pow, l.PI);
          let f = (l.round, '');
          let p = Object.prototype.toString;
          let h = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i;
          let m = ((t._.separator = /[,\s]+/), /[\s]*,[\s]*/);
          let v = { hs: 1, rg: 1 };
          let b = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi;
          let y = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi;
          let w = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/gi;
          let x = 0;
          let S = 'S' + (+new Date()).toString(36);
          let k = function (e) {
            return (e && e.type ? e.type : f) + S + (x++).toString(36);
          };
          let E = 'http://www.w3.org/1999/xlink';
          let C = 'http://www.w3.org/2000/svg';
          let T = {};
        t.url = function (e) {
          return `url('#${e}')`;
        };
        function O(e, t) {
          if (t) {
            if (
              (e == '#text'
                && (e = n.doc.createTextNode(t.text || t['#text'] || '')),
              e == '#comment'
                && (e = n.doc.createComment(t.text || t['#text'] || '')),
              typeof e === 'string' && (e = O(e)),
              typeof t === 'string')
            ) {return e.nodeType == 1
                ? 'xlink:' == t.substring(0, 6)
                  ? e.getAttributeNS(E, t.substring(6))
                  : 'xml:' == t.substring(0, 4)
                    ? e.getAttributeNS(C, t.substring(4))
                    : e.getAttribute(t)
                : 'text' == t
                  ? e.nodeValue
                  : null;}
            if (e.nodeType == 1) {
              for (const i in t) {if (t[r](i)) {
                  let o = a(t[i]);
                  o
                    ? 'xlink:' == i.substring(0, 6)
                      ? e.setAttributeNS(E, i.substring(6), o)
                      : 'xml:' == i.substring(0, 4)
                        ? e.setAttributeNS(C, i.substring(4), o)
                        : e.setAttribute(i, o)
                    : e.removeAttribute(i);
                }}
            } else 'text' in t && (e.nodeValue = t.text);
          } else e = n.doc.createElementNS(C, e);
          return e;
        }
        function P(e, t) {
          return (t = a.prototype.toLowerCase.call(t)) == 'finite'
            ? isFinite(e)
            : !(
              'array' != t
                || !(e instanceof Array || (Array.isArray && Array.isArray(e)))
            )
                || (t == 'null' && e === null)
                  || (t === typeof e && e !== null)
                  || (t == 'object' && e === Object(e))
                  || p
                    .call(e)
                    .slice(8, -1)
                    .toLowerCase() == t;
        }
        function A(e, t, n) {
          return function a() {
            const i = Array.prototype.slice.call(arguments, 0);
            var o = i.join('\u2400');
            var l = (a.cache = a.cache || {});
            var s = (a.count = a.count || []);
            return l[r](o)
              ? ((function (e, t) {
                for (let n = 0, r = e.length; n < r; n++) if (e[n] === t) return e.push(e.splice(n, 1)[0]);
              }(s, o)),
              n ? n(l[o]) : l[o])
              : (s.length >= 1e3 && delete l[s.shift()],
              s.push(o),
              (l[o] = e.apply(t, i)),
              n ? n(l[o]) : l[o]);
          };
        }
        function M(e) {
          return ((e % 360) * d) / 180;
        }
        (t._.$ = O),
        (t._.id = k),
        (t.format = (function () {
          let e = /\{([^\}]+)\}/g;
          var t = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g;
          return function (n, r) {
            return a(n).replace(e, (e, n) => (function(e, n, r) {
                  var a = r;
                  return (
                    n.replace(t, function(e, t, n, r, i) {
                      (t = t || r),
                        a &&
                          (t in a && (a = a[t]),
                          "function" == typeof a && i && (a = a()));
                    }),
                    (a = (null == a || a == r ? e : a) + "")
                  );
                })(e, n, r));
          };
        }())),
        (t._.clone = function e(t) {
          if (typeof t === 'function' || Object(t) !== t) return t;
          let n = new t.constructor();
          for (const a in t) t[r](a) && (n[a] = e(t[a]));
          return n;
        }),
        (t._.cacher = A),
        (t.rad = M),
        (t.deg = function (e) {
          return ((180 * e) / d) % 360;
        }),
        (t.sin = function (e) {
          return l.sin(t.rad(e));
        }),
        (t.tan = function (e) {
          return l.tan(t.rad(e));
        }),
        (t.cos = function (e) {
          return l.cos(t.rad(e));
        }),
        (t.asin = function (e) {
          return t.deg(l.asin(e));
        }),
        (t.acos = function (e) {
          return t.deg(l.acos(e));
        }),
        (t.atan = function (e) {
          return t.deg(l.atan(e));
        }),
        (t.atan2 = function (e) {
          return t.deg(l.atan2(e));
        }),
        (t.angle = function e(t, n, r, a, i, o) {
          if (i == null) {
            let s = t - r;
            var u = n - a;
            return s || u
              ? (180 + (180 * l.atan2(-u, -s)) / d + 360) % 360
              : 0;
          }
          return e(t, n, i, o) - e(r, a, i, o);
        }),
        (t.len = function (e, n, r, a) {
          return Math.sqrt(t.len2(e, n, r, a));
        }),
        (t.len2 = function (e, t, n, r) {
          return (e - n) * (e - n) + (t - r) * (t - r);
        }),
        (t.closestPoint = function (e, t, n) {
          function r(e) {
            let r = e.x - t;
            var a = e.y - n;
            return r * r + a * a;
          }
          for (
            var a,
              i,
              o,
              l,
              s = e.node,
              u = s.getTotalLength(),
              c = (u / s.pathSegList.numberOfItems) * 0.125,
              d = 1 / 0,
              f = 0;
            f <= u;
            f += c
          ) {(l = r((o = s.getPointAtLength(f)))) < d
                && ((a = o), (i = f), (d = l));}
          for (c *= 0.5; c > 0.5;) {
            var p; var h; var m; var g; var v; var
              b;
            (m = i - c) >= 0 && (v = r((p = s.getPointAtLength(m)))) < d
              ? ((a = p), (i = m), (d = v))
              : (g = i + c) <= u && (b = r((h = s.getPointAtLength(g)))) < d
                ? ((a = h), (i = g), (d = b))
                : (c *= 0.5);
          }
          return (a = {
            x: a.x, y: a.y, length: i, distance: Math.sqrt(d), 
          });
        }),
        (t.is = P),
        (t.snapTo = function (e, t, n) {
          if (((n = P(n, 'finite') ? n : 10), P(e, 'array'))) {
            for (let r = e.length; r--;) if (c(e[r] - t) <= n) return e[r];
          } else {
            let a = t % (e = +e);
            if (a < n) return t - a;
            if (a > e - n) return t - a + e;
          }
          return t;
        }),
        (t.getRGB = A((e) => {
          if (!e || (e = a(e)).indexOf('-') + 1) return {
              r: -1,
              g: -1,
              b: -1,
              hex: 'none',
              error: 1,
              toString: D,
            };
          if ('none' == e) return {
 r: -1, g: -1, b: -1, hex: 'none', toString: D 
};
          if (
            (!v[r](e.toLowerCase().substring(0, 2))
                && "#" != e.charAt()
                && (e = _(e)),
            !e)
          ) return {
              r: -1,
              g: -1,
              b: -1,
              hex: 'none',
              error: 1,
              toString: D,
            };
          var n;
              var c;
              var d;
              var f;
              var p;
              var g;
              var b = e.match(h);
          return b
            ? (b[2]
                  && ((d = o(b[2].substring(5), 16)),
                  (c = o(b[2].substring(3, 5), 16)),
                  (n = o(b[2].substring(1, 3), 16))),
            b[3]
                  && ((d = o((p = b[3].charAt(3)) + p, 16)),
                  (c = o((p = b[3].charAt(2)) + p, 16)),
                  (n = o((p = b[3].charAt(1)) + p, 16))),
            b[4]
                  && ((g = b[4].split(m)),
                  (n = i(g[0])),
                  '%' == g[0].slice(-1) && (n *= 2.55),
                  (c = i(g[1])),
                  '%' == g[1].slice(-1) && (c *= 2.55),
                  (d = i(g[2])),
                  '%' == g[2].slice(-1) && (d *= 2.55),
                  'rgba' == b[1].toLowerCase().slice(0, 4) && (f = i(g[3])),
                  g[3] && '%' == g[3].slice(-1) && (f /= 100)),
            b[5]
              ? ((g = b[5].split(m)),
              (n = i(g[0])),
              "%" == g[0].slice(-1) && (n /= 100),
              (c = i(g[1])),
              "%" == g[1].slice(-1) && (c /= 100),
              (d = i(g[2])),
              "%" == g[2].slice(-1) && (d /= 100),
              ('deg' == g[0].slice(-3) || '\xb0' == g[0].slice(-1))
                      && (n /= 360),
              "hsba" == b[1].toLowerCase().slice(0, 4) && (f = i(g[3])),
              g[3] && '%' == g[3].slice(-1) && (f /= 100),
              t.hsb2rgb(n, c, d, f))
              : b[6]
                ? ((g = b[6].split(m)),
                (n = i(g[0])),
                "%" == g[0].slice(-1) && (n /= 100),
                (c = i(g[1])),
                "%" == g[1].slice(-1) && (c /= 100),
                (d = i(g[2])),
                "%" == g[2].slice(-1) && (d /= 100),
                ('deg' == g[0].slice(-3) || '\xb0' == g[0].slice(-1))
                      && (n /= 360),
                "hsla" == b[1].toLowerCase().slice(0, 4) && (f = i(g[3])),
                g[3] && '%' == g[3].slice(-1) && (f /= 100),
                t.hsl2rgb(n, c, d, f))
                : ((n = u(l.round(n), 255)),
                (c = u(l.round(c), 255)),
                (d = u(l.round(d), 255)),
                (f = u(s(f, 0), 1)),
                ((b = {
 r: n, g: c, b: d, toString: D 
}).hex =                      "#"
                      + (16777216 | d | (c << 8) | (n << 16))
                        .toString(16)
                        .slice(1)),
                (b.opacity = P(f, 'finite') ? f : 1),
                b))
            : {
 r: -1, g: -1, b: -1, hex: 'none', error: 1, toString: D 
};
        }, t)),
        (t.hsb = A((e, n, r) => t.hsb2rgb(e, n, r).hex)),
        (t.hsl = A((e, n, r) => t.hsl2rgb(e, n, r).hex)),
        (t.rgb = A((e, t, n, r) => {
          if (P(r, 'finite')) {
            var a = l.round;
            return 'rgba(' + [a(e), a(t), a(n), +r.toFixed(2)] + ')';
          }
          return (
            "#" + (16777216 | n | (t << 8) | (e << 16)).toString(16).slice(1)
          );
        }));
        var _ = function (e) {
          let t = n.doc.getElementsByTagName('head')[0]
                || n.doc.getElementsByTagName('svg')[0];
          var r = 'rgb(255, 0, 0)';
          return (_ = A((e) => {
            if ('red' == e.toLowerCase()) return r;
            (t.style.color = r), (t.style.color = e);
            var a = n.doc.defaultView
              .getComputedStyle(t, f)
              .getPropertyValue('color');
            return a == r ? null : a;
          }))(e);
        };
        var N = function () {
          return 'hsb(' + [this.h, this.s, this.b] + ')';
        };
        var F = function () {
          return 'hsl(' + [this.h, this.s, this.l] + ')';
        };
        var D = function () {
          return this.opacity == 1 || this.opacity == null
            ? this.hex
            : 'rgba(' + [this.r, this.g, this.b, this.opacity] + ')';
        };
        var I = function (e, n, r) {
          if (
            (n == null &&
                P(e, 'object')
                && "r" in e
                && "g" in e
                && "b" in e
                && ((r = e.b), (n = e.g), (e = e.r)),
            null == n && P(e, string))
          ) {
            var a = t.getRGB(e);
            (e = a.r), (n = a.g), (r = a.b);
          }
          return (
            (e > 1 || n > 1 || r > 1) && ((e /= 255), (n /= 255), (r /= 255)),
            [e, n, r]
          );
        };
        var j = function (e, n, r, a) {
          let i = {
            r: (e = l.round(255 * e)),
            g: (n = l.round(255 * n)),
            b: (r = l.round(255 * r)),
            opacity: P(a, 'finite') ? a : 1,
            hex: t.rgb(e, n, r),
            toString: D,
          };
          return P(a, 'finite') && (i.opacity = a), i;
        };
        (t.color = function (e) {
          let n;
          return (
            P(e, 'object') && 'h' in e && 's' in e && 'b' in e
              ? ((n = t.hsb2rgb(e)),
              (e.r = n.r),
              (e.g = n.g),
              (e.b = n.b),
              (e.opacity = 1),
              (e.hex = n.hex))
              : P(e, 'object') && 'h' in e && 's' in e && 'l' in e
                ? ((n = t.hsl2rgb(e)),
                (e.r = n.r),
                (e.g = n.g),
                (e.b = n.b),
                (e.opacity = 1),
                (e.hex = n.hex))
                : (P(e, 'string') && (e = t.getRGB(e)),
                P(e, 'object')
                && 'r' in e
                && 'g' in e
                && 'b' in e
                && !('error' in e)
                  ? ((n = t.rgb2hsl(e)),
                  (e.h = n.h),
                  (e.s = n.s),
                  (e.l = n.l),
                  (n = t.rgb2hsb(e)),
                  (e.v = n.b))
                  : (((e = {
                    hex: 'none',
                  }).r = e.g = e.b = e.h = e.s = e.v = e.l = -1),
                  (e.error = 1))),
            (e.toString = D),
            e
          );
        }),
        (t.hsb2rgb = function (e, t, n, r) {
          let a; let i; let o; let l; let 
            s;
          return (
            P(e, 'object')
                && 'h' in e
                && 's' in e
                && 'b' in e
                && ((n = e.b), (t = e.s), (r = e.o), (e = e.h)),
            (l = (s = n * t) * (1 - c(((e = ((e *= 360) % 360) / 60) % 2) - 1))),
            (a = i = o = n - s),
            j(
              (a += [s, l, 0, 0, l, s][(e = ~~e)]),
              (i += [l, s, s, l, 0, 0][e]),
              (o += [0, 0, l, s, s, l][e]),
              r,
            )
          );
        }),
        (t.hsl2rgb = function (e, t, n, r) {
          let a; let i; let o; let l; let 
            s;
          return (
            P(e, 'object')
                && 'h' in e
                && 's' in e
                && 'l' in e
                && ((n = e.l), (t = e.s), (e = e.h)),
            (e > 1 || t > 1 || n > 1) && ((e /= 360), (t /= 100), (n /= 100)),
            (l = (s = 2 * t * (n < 0.5 ? n : 1 - n))
                * (1 - c(((e = ((e *= 360) % 360) / 60) % 2) - 1))),
            (a = i = o = n - s / 2),
            j(
              (a += [s, l, 0, 0, l, s][(e = ~~e)]),
              (i += [l, s, s, l, 0, 0][e]),
              (o += [0, 0, l, s, s, l][e]),
              r,
            )
          );
        }),
        (t.rgb2hsb = function (e, t, n) {
          let r; let 
            a;
          return (
            (e = (n = I(e, t, n))[0]),
            (t = n[1]),
            (n = n[2]),
            {
              h:
                  (((((a = (r = s(e, t, n)) - u(e, t, n)) == 0
                    ? null
                    : r == e
                      ? (t - n) / a
                      : r == t
                        ? (n - e) / a + 2
                        : (e - t) / a + 4)
                    + 360)
                    % 6)
                    * 60)
                  / 360,
              s: a == 0 ? 0 : a / r,
              b: r,
              toString: N,
            }
          );
        }),
        (t.rgb2hsl = function (e, t, n) {
          let r; let a; let i; let 
            o;
          return (
            (e = (n = I(e, t, n))[0]),
            (t = n[1]),
            (n = n[2]),
            (r = ((a = s(e, t, n)) + (i = u(e, t, n))) / 2),
            {
              h:
                  (((((o = a - i) == 0
                    ? null
                    : a == e
                      ? (t - n) / o
                      : a == t
                        ? (n - e) / o + 2
                        : (e - t) / o + 4)
                    + 360)
                    % 6)
                    * 60)
                  / 360,
              s: o == 0 ? 0 : r < 0.5 ? o / (2 * r) : o / (2 - 2 * r),
              l: r,
              toString: F,
            }
          );
        }),
        (t.parsePathString = function (e) {
          if (!e) return null;
          let n = t.path(e);
          if (n.arr) return t.path.clone(n.arr);
          let r = {
            a: 7,
            c: 6,
            o: 2,
            h: 1,
            l: 2,
            m: 2,
            r: 4,
            q: 4,
            s: 4,
            t: 2,
            v: 1,
            u: 3,
            z: 0,
          };
          var i = [];
          return (
            P(e, 'array') && P(e[0], 'array') && (i = t.path.clone(e)),
            i.length
                || a(e).replace(b, (e, t, n) => {
                  let a = [];
                    var o = t.toLowerCase();
                  if (
                    (n.replace(w, (e, t) => {
                      t && a.push(+t);
                    }),
                    'm' == o
                      && a.length > 2
                      && (i.push([t].concat(a.splice(0, 2))),
                      (o = 'l'),
                      (t = 'm' == t ? 'l' : 'L')),
                    'o' == o && a.length == 1 && i.push([t, a[0]]),
                    'r' == o)
                  ) i.push([t].concat(a));
                  else for (
                      ;
                      a.length >= r[o]
                      && (i.push([t].concat(a.splice(0, r[o]))), r[o]);

                    );
                }),
            (i.toString = t.path.toString),
            (n.arr = t.path.clone(i)),
            i
          );
        });
        const R = (t.parseTransformString = function (e) {
          if (!e) return null;
          let n = [];
          return (
            P(e, 'array') && P(e[0], 'array') && (n = t.path.clone(e)),
            n.length
              || a(e).replace(y, (e, t, r) => {
                let a = [];
                t.toLowerCase();
                r.replace(w, (e, t) => {
                  t && a.push(+t);
                }),
                n.push([t].concat(a));
              }),
            (n.toString = t.path.toString),
            n
          );
        });
        (t._.svgTransform2string = function (e) {
          const t = [];
          return (
            (e = e.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, (e, n, r) => ((
                (r = r.split(/\s*,\s*|\s+/)),
                "rotate" == n && 1 == r.length && r.push(0, 0),
                "scale" == n &&
                  (r.length > 2
                    ? (r = r.slice(0, 2))
                    : 2 == r.length && r.push(0, 0),
                  1 == r.length && r.push(r[0], 0, 0)),
                "skewX" == n
                  ? t.push(["m", 1, 0, l.tan(M(r[0])), 1, 0, 0])
                  : "skewY" == n
                  ? t.push(["m", 1, l.tan(M(r[0])), 0, 1, 0, 0])
                  : t.push([n.charAt(0)].concat(r)),
                e
              )))),
            t
          );
        }),
        (t._.rgTransform = /^[a-z][\s]*-?\.?\d/i),
        (t._.transform2matrix = function (e, n) {
          let r = R(e);
          var i = new t.Matrix();
          if (r) {for (let o = 0, l = r.length; o < l; o++) {
              var s;
                  var u;
                  var c;
                  var d;
                  var f;
                  var p = r[o];
                  var h = p.length;
                  var m = a(p[0]).toLowerCase();
                  var g = p[0] != m;
                  var v = g ? i.invert() : 0;
              "t" == m && h == 2
                ? i.translate(p[1], 0)
                : 't' == m && h == 3
                  ? g
                    ? ((s = v.x(0, 0)),
                    (u = v.y(0, 0)),
                    (c = v.x(p[1], p[2])),
                    (d = v.y(p[1], p[2])),
                    i.translate(c - s, d - u))
                    : i.translate(p[1], p[2])
                  : 'r' == m
                    ? h == 2
                      ? ((f = f || n),
                      i.rotate(p[1], f.x + f.width / 2, f.y + f.height / 2))
                      : h == 4 &&
                      (g
                        ? ((c = v.x(p[2], p[3])),
                        (d = v.y(p[2], p[3])),
                        i.rotate(p[1], c, d))
                        : i.rotate(p[1], p[2], p[3]))
                    : 's' == m
                      ? h == 2 || h == 3
                        ? ((f = f || n),
                        i.scale(
                          p[1],
                          p[h - 1],
                          f.x + f.width / 2,
                          f.y + f.height / 2,
                        ))
                        : h == 4
                          ? g
                            ? ((c = v.x(p[2], p[3])),
                            (d = v.y(p[2], p[3])),
                            i.scale(p[1], p[1], c, d))
                            : i.scale(p[1], p[1], p[2], p[3])
                          : h == 5 &&
                      (g
                        ? ((c = v.x(p[3], p[4])),
                        (d = v.y(p[3], p[4])),
                        i.scale(p[1], p[2], c, d))
                        : i.scale(p[1], p[2], p[3], p[4]))
                      : 'm' == m
                    && 7 == h
                    && i.add(p[1], p[2], p[3], p[4], p[5], p[6]);
            }}
          return i;
        }),
        (t._unit2px = function (e, t, n) {
          let r = z(e).node;
          var a = {};
          var i = r.querySelector('.svg---mgr');
          i
              || ((i = O('rect')),
              O(i, {
                x: -9e9,
                y: -9e9,
                width: 10,
                height: 10,
                class: 'svg---mgr',
                fill: 'none',
              }),
              r.appendChild(i));
          function o(e) {
            if (e == null) return f;
            if (e == +e) return e;
            O(i, { width: e });
            try {
              return i.getBBox().width;
            } catch (t) {
              return 0;
            }
          }
          function l(e) {
            if (e == null) return f;
            if (e == +e) return e;
            O(i, { height: e });
            try {
              return i.getBBox().height;
            } catch (t) {
              return 0;
            }
          }
          function s(r, i) {
            t == null
              ? (a[r] = i(e.attr(r) || 0))
              : r == t && (a = i(n == null ? e.attr(r) || 0 : n));
          }
          switch (e.type) {
            case 'rect':
              s('rx', o), s('ry', l);
            case 'image':
              s('width', o), s('height', l);
            case 'text':
              s('x', o), s('y', l);
              break;
            case 'circle':
              s('cx', o), s('cy', l), s('r', o);
              break;
            case 'ellipse':
              s('cx', o), s('cy', l), s('rx', o), s('ry', l);
              break;
            case 'line':
              s('x1', o), s('x2', o), s('y1', l), s('y2', l);
              break;
            case 'marker':
              s('refX', o),
              s('markerWidth', o),
              s('refY', l),
              s('markerHeight', l);
              break;
            case 'radialGradient':
              s('fx', o), s('fy', l);
              break;
            case 'tspan':
              s('dx', o), s('dy', l);
              break;
            default:
              s(t, o);
          }
          return r.removeChild(i), a;
        });
        n.doc.contains || n.doc.compareDocumentPosition;
        function z(e) {
          return (
            (e.node.ownerSVGElement && V(e.node.ownerSVGElement))
            || t.select('svg')
          );
        }
        function B(e) {
          P(e, 'array') || (e = Array.prototype.slice.call(arguments, 0));
          for (var t = 0, n = 0, r = this.node; this[t];) delete this[t++];
          for (t = 0; t < e.length; t++) 'set' == e[t].type
            ? e[t].forEach((e) => {
              r.appendChild(e.node);
            })
            : r.appendChild(e[t].node);
          const a = r.childNodes;
          for (t = 0; t < a.length; t++) this[n++] = V(a[t]);
          return this;
        }
        function L(e) {
          if (e.snap in T) return T[e.snap];
          let t;
          try {
            t = e.ownerSVGElement;
          } catch (i) {}
          (this.node = e),
          t && (this.paper = new W(t)),
          (this.type = e.tagName || e.nodeName);
          const n = (this.id = k(this));
          if (
            ((this.anims = {}),
            (this._ = { transform: [] }),
            (e.snap = n),
            (T[n] = this),
            this.type == 'g' && (this.add = B),
            this.type in {
              g: 1, mask: 1, pattern: 1, symbol: 1, 
            })
          ) for (const a in W.prototype) W.prototype[r](a) && (this[a] = W.prototype[a]);
        }
        function U(e) {
          this.node = e;
        }
        function H(e, t) {
          const n = O(e);
          return t.appendChild(n), V(n);
        }
        function W(e, t) {
          let a;
          var i;
          var o;
          var l = W.prototype;
          if (e && e.tagName && e.tagName.toLowerCase() == 'svg') {
            if (e.snap in T) return T[e.snap];
            const s = e.ownerDocument;
            for (const u in ((a = new L(e)),
            (i = e.getElementsByTagName('desc')[0]),
            (o = e.getElementsByTagName('defs')[0]),
            i
              || ((i = O('desc')).appendChild(
                s.createTextNode('Created with Snap'),
              ),
              a.node.appendChild(i)),
            o || ((o = O('defs')), a.node.appendChild(o)),
            (a.defs = o),
            l)) l[r](u) && (a[u] = l[u]);
            a.paper = a.root = a;
          } else {O((a = H('svg', n.doc.body)).node, {
              height: t,
              version: 1.1,
              width: e,
              xmlns: C,
            });}
          return a;
        }
        function V(e) {
          return e
            ? e instanceof L || e instanceof U
              ? e
              : e.tagName && e.tagName.toLowerCase() == 'svg'
                ? new W(e)
                : e.tagName
                && 'object' == e.tagName.toLowerCase()
                && 'image/svg+xml' == e.type
                  ? new W(e.contentDocument.getElementsByTagName('svg')[0])
                  : new L(e)
            : e;
        }
        (t._.getSomeDefs = function (e) {
          const n = (e.node.ownerSVGElement && V(e.node.ownerSVGElement))
              || (e.node.parentNode && V(e.node.parentNode))
              || t.select('svg')
              || t(0, 0);
          var r = n.select('defs');
          var a = r != null && r.node;
          return a || (a = H('defs', n.node).node), a;
        }),
        (t._.getSomeSVG = z),
        (t.select = function (e) {
          return (
            (e = a(e).replace(/([^\\]):/g, '$1\\:')),
            V(n.doc.querySelector(e))
          );
        }),
        (t.selectAll = function (e) {
          for (
            var r = n.doc.querySelectorAll(e), a = (t.set || Array)(), i = 0;
            i < r.length;
            i++
          ) a.push(V(r[i]));
          return a;
        }),
        setInterval(() => {
          for (let e in T) if (T[r](e)) {
              var t = T[e];
                  var n = t.node;
              (('svg' != t.type && !n.ownerSVGElement)
                  || ('svg' == t.type
                    && (!n.parentNode
                      || ('ownerSVGElement' in n.parentNode
                        && !n.ownerSVGElement))))
                  && delete T[e];
            }
        }, 1e4),
        (L.prototype.attr = function (e, t) {
          let n = this;
          var a = n.node;
          if (!e) {
            if (a.nodeType != 1) return { text: a.nodeValue };
            for (
              var i = a.attributes, o = {}, l = 0, s = i.length;
              l < s;
              l++
            ) o[i[l].nodeName] = i[l].nodeValue;
            return o;
          }
          if (P(e, 'string')) {
            if (!(arguments.length > 1)) return eve(`snap.util.getattr.${  e}`, n).firstDefined();
            let u = {};
            (u[e] = t), (e = u);
          }
          for (const c in e) e[r](c) && eve(`snap.util.attr.${  c}`, n, e[c]);
          return n;
        }),
        (t.parse = function (e) {
          let t = n.doc.createDocumentFragment();
          var r = !0;
          var i = n.doc.createElement('div');
          if (
            ((e = a(e)).match(/^\s*<\s*svg(?:\s|>)/)
                || ((e = `<svg>${  e  }</svg>`), (r = !1)),
            (i.innerHTML = e),
            (e = i.getElementsByTagName('svg')[0]))
          ) {if (r) t = e;
            else for (; e.firstChild;) t.appendChild(e.firstChild);}
          return new U(t);
        }),
        (t.fragment = function () {
          for (
            var e = Array.prototype.slice.call(arguments, 0),
              r = n.doc.createDocumentFragment(),
              a = 0,
              i = e.length;
            a < i;
            a++
          ) {
            let o = e[a];
            o.node && o.node.nodeType && r.appendChild(o.node),
            o.nodeType && r.appendChild(o),
            'string' === typeof o && r.appendChild(t.parse(o).node);
          }
          return new U(r);
        }),
        (t._.make = H),
        (t._.wrap = V),
        (W.prototype.el = function (e, t) {
          let n = H(e, this.node);
          return t && n.attr(t), n;
        }),
        (L.prototype.children = function () {
          for (
            var e = [], n = this.node.childNodes, r = 0, a = n.length;
            r < a;
            r++
          ) e[r] = t(n[r]);
          return e;
        }),
        (L.prototype.toJSON = function () {
          let e = [];
          return (
            (function e(t, n) {
              for (let r = 0, a = t.length; r < a; r++) {
                let i = { type: t[r].type, attr: t[r].attr() };
                var o = t[r].children();
                n.push(i), o.length && e(o, (i.childNodes = []));
              }
            }([this], e)),
            e[0]
          );
        }),
        eve.on('snap.util.getattr', function () {
          let e = eve.nt();
          var t = (e = e.substring(e.lastIndexOf('.') + 1)).replace(
            /[A-Z]/g,
            function (e) {
              return `-${  e.toLowerCase()}`;
            },
          );
          return q[r](t)
            ? this.node.ownerDocument.defaultView
              .getComputedStyle(this.node, null)
              .getPropertyValue(t)
            : O(this.node, e);
        });
        var q = {
          'alignment-baseline': 0,
          'baseline-shift': 0,
          clip: 0,
          'clip-path': 0,
          'clip-rule': 0,
          color: 0,
          'color-interpolation': 0,
          'color-interpolation-filters': 0,
          'color-profile': 0,
          'color-rendering': 0,
          cursor: 0,
          direction: 0,
          display: 0,
          'dominant-baseline': 0,
          'enable-background': 0,
          fill: 0,
          'fill-opacity': 0,
          'fill-rule': 0,
          filter: 0,
          'flood-color': 0,
          'flood-opacity': 0,
          font: 0,
          'font-family': 0,
          'font-size': 0,
          'font-size-adjust': 0,
          'font-stretch': 0,
          'font-style': 0,
          'font-variant': 0,
          'font-weight': 0,
          'glyph-orientation-horizontal': 0,
          'glyph-orientation-vertical': 0,
          'image-rendering': 0,
          kerning: 0,
          'letter-spacing': 0,
          'lighting-color': 0,
          marker: 0,
          'marker-end': 0,
          'marker-mid': 0,
          'marker-start': 0,
          mask: 0,
          opacity: 0,
          overflow: 0,
          'pointer-events': 0,
          'shape-rendering': 0,
          'stop-color': 0,
          'stop-opacity': 0,
          stroke: 0,
          'stroke-dasharray': 0,
          'stroke-dashoffset': 0,
          'stroke-linecap': 0,
          'stroke-linejoin': 0,
          'stroke-miterlimit': 0,
          'stroke-opacity': 0,
          'stroke-width': 0,
          'text-anchor': 0,
          'text-decoration': 0,
          'text-rendering': 0,
          'unicode-bidi': 0,
          visibility: 0,
          'word-spacing': 0,
          'writing-mode': 0,
        };
        eve.on('snap.util.attr', function (e) {
          let t = eve.nt();
          var n = {};
          n[(t = t.substring(t.lastIndexOf('.') + 1))] = e;
          const a = t.replace(/-(\w)/gi, (e, t) => t.toUpperCase());
          var i = t.replace(/[A-Z]/g, (e) => "-" + e.toLowerCase());
          q[r](i) ? (this.node.style[a] = e == null ? f : e) : O(this.node, n);
        }),
        W.prototype,
        (t.ajax = function (e, t, n, r) {
          let a = new XMLHttpRequest();
          var i = k();
          if (a) {
            if (P(t, 'function')) (r = n), (n = t), (t = null);
            else if (P(t, 'object')) {
              let o = [];
              for (const l in t) {t.hasOwnProperty(l)
                    && o.push(
                      `${encodeURIComponent(l)  }=${  encodeURIComponent(t[l])}`
                    );}
              t = o.join('&');
            }
            return (
              a.open(t ? 'POST' : 'GET', e, !0),
              t
                  && (a.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
                  a.setRequestHeader(
                    'Content-type',
                    'application/x-www-form-urlencoded',
                  )),
              n
                  && (eve.once(`snap.ajax.${  i  }.0`, n),
                  eve.once(`snap.ajax.${  i  }.200`, n),
                  eve.once(`snap.ajax.${  i  }.304`, n)),
              (a.onreadystatechange = function () {
                a.readyState == 4
                    && eve(`snap.ajax.${  i  }.${  a.status}`, r, a);
              }),
              a.readyState == 4 ? a : (a.send(t), a)
            );
          }
        }),
        (t.load = function (e, n, r) {
          t.ajax(e, (e) => {
            var a = t.parse(e.responseText);
            r ? n.call(r, a) : n(a);
          });
        });
        return (
          (t.getElementByPoint = function (e, t) {
            this.canvas;
            let r = n.doc.elementFromPoint(e, t);
            if (n.win.opera && r.tagName == 'svg') {
              const a = (function (e) {
                  const t = e.getBoundingClientRect();
                  var n = e.ownerDocument;
                  var r = n.body;
                  var a = n.documentElement;
                  var i = a.clientTop || r.clientTop || 0;
                  var o = a.clientLeft || r.clientLeft || 0;
                  return {
                    y:
                      t.top
                      + (g.win.pageYOffset || a.scrollTop || r.scrollTop)
                      - i,
                    x:
                      t.left
                      + (g.win.pageXOffset || a.scrollLeft || r.scrollLeft)
                      - o,
                  };
                }(r));
                let i = r.createSVGRect();
              (i.x = e - a.x), (i.y = t - a.y), (i.width = i.height = 1);
              const o = r.getIntersectionList(i, null);
              o.length && (r = o[o.length - 1]);
            }
            return r ? V(r) : null;
          }),
          (t.plugin = function (e) {
            e(t, L, W, n, U);
          }),
          (n.win.Snap = t),
          t
        );
      }(window || this));
    a.plugin((e, t, n, r, a) => {
      let i = t.prototype;
        var o = e.is;
        var l = String;
        var s = e._unit2px;
        var u = e._.$;
        var c = e._.make;
        var d = e._.getSomeDefs;
        var f = "hasOwnProperty";
        var p = e._.wrap;
      i.getBBox = function (t) {
        if ('tspan' == this.type) return e._.box(this.node.getClientRects().item(0));
        if (!e.Matrix || !e.path) return this.node.getBBox();
        let n = this;
          var r = new e.Matrix();
        if (n.removed) return e._.box();
        for (; 'use' == n.type;) if (
            (t
              || (r = r.add(
                n
                  .transform()
                  .localMatrix.translate(n.attr('x') || 0, n.attr('y') || 0),
              )),
            n.original)
          ) n = n.original;
          else {
            let a = n.attr('xlink:href');
            n = n.original = n.node.ownerDocument.getElementById(
              a.substring(a.indexOf('#') + 1),
            );
          }
        let i = n._;
          var o = e.path.get[n.type] || e.path.get.deflt;
        try {
          return t
            ? ((i.bboxwt = o
              ? e.path.getBBox((n.realPath = o(n)))
              : e._.box(n.node.getBBox())),
            e._.box(i.bboxwt))
            : ((n.realPath = o(n)),
            (n.matrix = n.transform().localMatrix),
            (i.bbox = e.path.getBBox(
              e.path.map(n.realPath, r.add(n.matrix)),
            )),
            e._.box(i.bbox));
        } catch (l) {
          return e._.box();
        }
      };
      let h = function () {
        return this.string;
      };
      function m(t, n) {
        if (n == null) {
          var r = !0;
          if (
            !(n =              "linearGradient" == t.type || 'radialGradient' == t.type
                ? t.node.getAttribute('gradientTransform')
                : 'pattern' == t.type
                  ? t.node.getAttribute('patternTransform')
                  : t.node.getAttribute('transform'))
          ) return new e.Matrix();
          n = e._.svgTransform2string(n);
        } else (n = e._.rgTransform.test(n) ? l(n).replace(/\.{3}|\u2026/g, t._.transform || '') : e._.svgTransform2string(n)), o(n, 'array') && (n = e.path ? e.path.toString.call(n) : l(n)), (t._.transform = n);
        let a = e._.transform2matrix(n, t.getBBox(1));
        if (r) return a;
        t.matrix = a;
      }
      (i.transform = function (t) {
        let n = this._;
        if (t == null) {
          for (
            var r,
              a = this,
              i = new e.Matrix(this.node.getCTM()),
              o = m(this),
              s = [o],
              c = new e.Matrix(),
              d = o.toTransformString(),
              f = l(o) == l(this.matrix) ? l(n.transform) : d;
            'svg' != a.type && (a = a.parent());

          ) s.push(m(a));
          for (r = s.length; r--;) c.add(s[r]);
          return {
            string: f,
            globalMatrix: i,
            totalMatrix: c,
            localMatrix: o,
            diffMatrix: i.clone().add(o.invert()),
            global: i.toTransformString(),
            total: c.toTransformString(),
            local: d,
            toString: h,
          };
        }
        return (
          t instanceof e.Matrix
            ? ((this.matrix = t), (this._.transform = t.toTransformString()))
            : m(this, t),
          this.node
            && ('linearGradient' == this.type || 'radialGradient' == this.type
              ? u(this.node, { gradientTransform: this.matrix })
              : 'pattern' == this.type
                ? u(this.node, { patternTransform: this.matrix })
                : u(this.node, { transform: this.matrix })),
          this
        );
      }),
      (i.parent = function () {
        return p(this.node.parentNode);
      }),
      (i.append = i.add = function (e) {
        if (e) {
          if ('set' == e.type) {
            var t = this;
            return (
              e.forEach((e) => {
                  t.add(e);
                }),
              this
            );
          }
          (e = p(e)), this.node.appendChild(e.node), (e.paper = this.paper);
        }
        return this;
      }),
      (i.appendTo = function (e) {
        return e && (e = p(e)).append(this), this;
      }),
      (i.prepend = function (e) {
        if (e) {
          if ('set' == e.type) {
            var t;
                var n = this;
            return (
              e.forEach((e) => {
                  t ? t.after(e) : n.prepend(e), (t = e);
                }),
              this
            );
          }
          var r = (e = p(e)).parent();
          this.node.insertBefore(e.node, this.node.firstChild),
          this.add && this.add(),
          (e.paper = this.paper),
          this.parent() && this.parent().add(),
          r && r.add();
        }
        return this;
      }),
      (i.prependTo = function (e) {
        return (e = p(e)).prepend(this), this;
      }),
      (i.before = function (e) {
        if ('set' == e.type) {
          var t = this;
          return (
            e.forEach((e) => {
                var n = e.parent();
                t.node.parentNode.insertBefore(e.node, t.node), n && n.add();
              }),
            this.parent().add(),
            this
          );
        }
        var n = (e = p(e)).parent();
        return (
          this.node.parentNode.insertBefore(e.node, this.node),
          this.parent() && this.parent().add(),
          n && n.add(),
          (e.paper = this.paper),
          this
        );
      }),
      (i.after = function (e) {
        var t = (e = p(e)).parent();
        return (
          this.node.nextSibling
            ? this.node.parentNode.insertBefore(e.node, this.node.nextSibling)
            : this.node.parentNode.appendChild(e.node),
          this.parent() && this.parent().add(),
          t && t.add(),
          (e.paper = this.paper),
          this
        );
      }),
      (i.insertBefore = function (e) {
        e = p(e);
        var t = this.parent();
        return (
          e.node.parentNode.insertBefore(this.node, e.node),
          (this.paper = e.paper),
          t && t.add(),
          e.parent() && e.parent().add(),
          this
        );
      }),
      (i.insertAfter = function (e) {
        e = p(e);
        var t = this.parent();
        return (
          e.node.parentNode.insertBefore(this.node, e.node.nextSibling),
          (this.paper = e.paper),
          t && t.add(),
          e.parent() && e.parent().add(),
          this
        );
      }),
      (i.remove = function () {
        var e = this.parent();
        return (
          this.node.parentNode && this.node.parentNode.removeChild(this.node),
          delete this.paper,
          (this.removed = !0),
          e && e.add(),
          this
        );
      }),
      (i.select = function (e) {
        return p(this.node.querySelector(e));
      }),
      (i.selectAll = function (t) {
        for (
          var n = this.node.querySelectorAll(t),
            r = (e.set || Array)(),
            a = 0;
          a < n.length;
          a++
        ) r.push(p(n[a]));
        return r;
      }),
      (i.asPX = function (e, t) {
        return t == null && (t = this.attr(e)), +s(this, e, t);
      }),
      (i.use = function () {
        var e;
            var t = this.node.id;
        return (
          t || ((t = this.id), u(this.node, { id: t })),
          (e =              "linearGradient" == this.type
              || "radialGradient" == this.type
              || "pattern" == this.type
                ? c(this.type, this.node.parentNode)
                : c('use', this.node.parentNode)),
          u(e.node, { 'xlink:href': '#' + t }),
          (e.original = this),
          e
        );
      }),
      (i.clone = function () {
        var t = p(this.node.cloneNode(!0));
        return (
          u(t.node, 'id') && u(t.node, { id: t.id }),
          (function (t) {
            var n;
                var r = t.selectAll("*");
                var a = /^\s*url\(("|'|)(.*)\1\)\s*$/;
                var i = [];
                var o = {};
            function l(t, n) {
              var r = u(t.node, n);
              (r = (r = r && r.match(a)) && r[2])
                  && "#" == r.charAt()
                  && (r = r.substring(1))
                  && (o[r] = (o[r] || []).concat((r) => {
                    var a = {};
                    (a[n] = e.url(r)), u(t.node, a);
                  }));
            }
            function s(e) {
              var t = u(e.node, 'xlink:href');
              t
                  && "#" == t.charAt()
                  && (t = t.substring(1))
                  && (o[t] = (o[t] || []).concat((t) => {
                    e.attr("xlink:href", "#" + t);
                  }));
            }
            for (var c = 0, d = r.length; c < d; c++) {
              l((n = r[c]), 'fill'),
              l(n, 'stroke'),
              l(n, 'filter'),
              l(n, 'mask'),
              l(n, 'clip-path'),
              s(n);
              var f = u(n.node, 'id');
              f && (u(n.node, { id: n.id }), i.push({ old: f, id: n.id }));
            }
            for (c = 0, d = i.length; c < d; c++) {
              var p = o[i[c].old];
              if (p) for (let h = 0, m = p.length; h < m; h++) p[h](i[c].id);
            }
          }(t)),
          t.insertAfter(this),
          t
        );
      }),
      (i.toDefs = function () {
        return d(this).appendChild(this.node), this;
      }),
      (i.pattern = i.toPattern = function (e, t, n, r) {
        var a = c('pattern', d(this));
        return (
          null == e && (e = this.getBBox()),
          o(e, 'object')
              && "x" in e
              && ((t = e.y), (n = e.width), (r = e.height), (e = e.x)),
          u(a.node, {
            x: e,
            y: t,
            width: n,
            height: r,
            patternUnits: 'userSpaceOnUse',
            id: a.id,
            viewBox: [e, t, n, r].join(' '),
          }),
          a.node.appendChild(this.node),
          a
        );
      }),
      (i.marker = function (e, t, n, r, a, i) {
        var l = c('marker', d(this));
        return (
          null == e && (e = this.getBBox()),
          o(e, 'object')
              && "x" in e
              && ((t = e.y),
              (n = e.width),
              (r = e.height),
              (a = e.refX || e.cx),
              (i = e.refY || e.cy),
              (e = e.x)),
          u(l.node, {
            viewBox: [e, t, n, r].join(' '),
            markerWidth: n,
            markerHeight: r,
            orient: 'auto',
            refX: a || 0,
            refY: i || 0,
            id: l.id,
          }),
          l.node.appendChild(this.node),
          l
        );
      });
      let g = {};
      function v(e) {
        return function () {
          let t = e ? '<' + this.type : '',
            n = this.node.attributes,
            r = this.node.childNodes;
          if (e) for (var a = 0, i = n.length; a < i; a++) t
                += " " + n[a].name + '="' + n[a].value.replace(/"/g, '\\"') + '"';
          if (r.length) {
            for (e && (t += '>'), a = 0, i = r.length; a < i; a++) 3 == r[a].nodeType
                ? (t += r[a].nodeValue)
                : r[a].nodeType == 1 && (t += p(r[a]).toString());
            e && (t += '</' + this.type + '>');
          } else e && (t += '/>');
          return t;
        };
      }
      (i.data = function (t, n) {
        let r = (g[this.id] = g[this.id] || {});
        if (arguments.length == 0) return eve('snap.data.get.' + this.id, this, r, null), r;
        if (arguments.length == 1) {
          if (e.is(t, 'object')) {
            for (let a in t) t[f](a) && this.data(a, t[a]);
            return this;
          }
          return eve('snap.data.get.' + this.id, this, r[t], t), r[t];
        }
        return (r[t] = n), eve('snap.data.set.' + this.id, this, n, t), this;
      }),
      (i.removeData = function (e) {
        return (
          null == e ? (g[this.id] = {}) : g[this.id] && delete g[this.id][e],
          this
        );
      }),
      (i.outerSVG = i.toString = v(1)),
      (i.innerSVG = v()),
      (i.toDataURL = function () {
        if (window && window.btoa) {
          var t = this.getBBox();
              var n = e.format(
              '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>',
              {
                x: +t.x.toFixed(3),
                y: +t.y.toFixed(3),
                width: +t.width.toFixed(3),
                height: +t.height.toFixed(3),
                contents: this.outerSVG(),
              },
            );
          return (
            "data:image/svg+xml;base64,"
              + btoa(unescape(encodeURIComponent(n)))
          );
        }
      }),
      (a.prototype.select = i.select),
      (a.prototype.selectAll = i.selectAll);
    }),
    a.plugin((e, t, n, r, a) => {
      var i = Object.prototype.toString;
          var o = String;
          var l = Math;
      function s(e, t, n, r, a, o) {
        if (t == null && '[object SVGMatrix]' == i.call(e)) return (
            (this.a = e.a),
            (this.b = e.b),
            (this.c = e.c),
            (this.d = e.d),
            (this.e = e.e),
            void (this.f = e.f)
          );
        null != e
          ? ((this.a = +e),
          (this.b = +t),
          (this.c = +n),
          (this.d = +r),
          (this.e = +a),
          (this.f = +o))
          : ((this.a = 1),
          (this.b = 0),
          (this.c = 0),
          (this.d = 1),
          (this.e = 0),
          (this.f = 0));
      }
      !(function (t) {
        function n(e) {
          return e[0] * e[0] + e[1] * e[1];
        }
        function r(e) {
          var t = l.sqrt(n(e));
          e[0] && (e[0] /= t), e[1] && (e[1] /= t);
        }
        (t.add = function (e, t, n, r, a, i) {
          if (e && e instanceof s) return this.add(e.a, e.b, e.c, e.d, e.e, e.f);
          var o = e * this.a + t * this.c;
              var l = e * this.b + t * this.d;
          return (
            (this.e += a * this.a + i * this.c),
            (this.f += a * this.b + i * this.d),
            (this.c = n * this.a + r * this.c),
            (this.d = n * this.b + r * this.d),
            (this.a = o),
            (this.b = l),
            this
          );
        }),
        (s.prototype.multLeft = function (e, t, n, r, a, i) {
          if (e && e instanceof s) return this.multLeft(e.a, e.b, e.c, e.d, e.e, e.f);
          var o = e * this.a + n * this.b;
                var l = e * this.c + n * this.d;
                var u = e * this.e + n * this.f + a;
          return (
            (this.b = t * this.a + r * this.b),
            (this.d = t * this.c + r * this.d),
            (this.f = t * this.e + r * this.f + i),
            (this.a = o),
            (this.c = l),
            (this.e = u),
            this
          );
        }),
        (t.invert = function () {
          var e = this;
                var t = e.a * e.d - e.b * e.c;
          return new s(
            e.d / t,
            -e.b / t,
            -e.c / t,
            e.a / t,
            (e.c * e.f - e.d * e.e) / t,
            (e.b * e.e - e.a * e.f) / t,
          );
        }),
        (t.clone = function () {
          return new s(this.a, this.b, this.c, this.d, this.e, this.f);
        }),
        (t.translate = function (e, t) {
          return (
            (this.e += e * this.a + t * this.c),
            (this.f += e * this.b + t * this.d),
            this
          );
        }),
        (t.scale = function (e, t, n, r) {
          return (
            null == t && (t = e),
            (n || r) && this.translate(n, r),
            (this.a *= e),
            (this.b *= e),
            (this.c *= t),
            (this.d *= t),
            (n || r) && this.translate(-n, -r),
            this
          );
        }),
        (t.rotate = function (t, n, r) {
          (t = e.rad(t)), (n = n || 0), (r = r || 0);
          var a = +l.cos(t).toFixed(9);
                var i = +l.sin(t).toFixed(9);
          return this.add(a, i, -i, a, n, r), this.add(1, 0, 0, 1, -n, -r);
        }),
        (t.skewX = function (e) {
          return this.skew(e, 0);
        }),
        (t.skewY = function (e) {
          return this.skew(0, e);
        }),
        (t.skew = function (t, n) {
          (t = t || 0), (n = n || 0), (t = e.rad(t)), (n = e.rad(n));
          var r = l.tan(t).toFixed(9);
                var a = l.tan(n).toFixed(9);
          return this.add(1, a, r, 1, 0, 0);
        }),
        (t.x = function (e, t) {
          return e * this.a + t * this.c + this.e;
        }),
        (t.y = function (e, t) {
          return e * this.b + t * this.d + this.f;
        }),
        (t.get = function (e) {
          return +this[o.fromCharCode(97 + e)].toFixed(4);
        }),
        (t.toString = function () {
          return (
            "matrix("
                + [
                  this.get(0),
                  this.get(1),
                  this.get(2),
                  this.get(3),
                  this.get(4),
                  this.get(5),
                ].join()
                + ")"
          );
        }),
        (t.offset = function () {
          return [this.e.toFixed(4), this.f.toFixed(4)];
        }),
        (t.determinant = function () {
          return this.a * this.d - this.b * this.c;
        }),
        (t.split = function () {
          var t = {};
          (t.dx = this.e), (t.dy = this.f);
          var a = [
            [this.a, this.b],
            [this.c, this.d],
          ];
          (t.scalex = l.sqrt(n(a[0]))),
          r(a[0]),
          (t.shear = a[0][0] * a[1][0] + a[0][1] * a[1][1]),
          (a[1] = [
            a[1][0] - a[0][0] * t.shear,
            a[1][1] - a[0][1] * t.shear,
          ]),
          (t.scaley = l.sqrt(n(a[1]))),
          r(a[1]),
          (t.shear /= t.scaley),
          this.determinant() < 0 && (t.scalex = -t.scalex);
          var i = a[0][1];
                var o = a[1][1];
          return (
            o < 0
              ? ((t.rotate = e.deg(l.acos(o))),
              i < 0 && (t.rotate = 360 - t.rotate))
              : (t.rotate = e.deg(l.asin(i))),
            (t.isSimple =                  !+t.shear.toFixed(9)
                  && (t.scalex.toFixed(9) == t.scaley.toFixed(9) || !t.rotate)),
            (t.isSuperSimple =                  !+t.shear.toFixed(9)
                  && t.scalex.toFixed(9) == t.scaley.toFixed(9)
                  && !t.rotate),
            (t.noRotation = !+t.shear.toFixed(9) && !t.rotate),
            t
          );
        }),
        (t.toTransformString = function (e) {
          var t = e || this.split();
          return +t.shear.toFixed(9)
            ? 'm' +
                    [
                      this.get(0),
                      this.get(1),
                      this.get(2),
                      this.get(3),
                      this.get(4),
                      this.get(5),
                    ]
            : ((t.scalex = +t.scalex.toFixed(4)),
            (t.scaley = +t.scaley.toFixed(4)),
            (t.rotate = +t.rotate.toFixed(4)),
            (t.dx || t.dy
              ? 't' + [+t.dx.toFixed(4), +t.dy.toFixed(4)]
              : '')
                    + (t.rotate ? 'r' + [+t.rotate.toFixed(4), 0, 0] : '')
                    + (t.scalex != 1 || t.scaley != 1
                      ? 's' + [t.scalex, t.scaley, 0, 0]
                      : ''));
        });
      }(s.prototype)),
      (e.Matrix = s),
      (e.matrix = function (e, t, n, r, a, i) {
        return new s(e, t, n, r, a, i);
      });
    }),
    a.plugin((e, t, n, r, a) => {
      var i;
          var o = e._.make;
          var l = e._.wrap;
          var s = e.is;
          var u = e._.getSomeDefs;
          var c = /^url\((['"]?)([^)]+)\1\)$/;
          var d = e._.$;
          var f = e.url;
          var p = String;
          var h = e._.separator;
          var m = '';
      function g(n) {
        return function (r) {
          if (
            (eve.stop(),
            r instanceof a
                && 1 == r.node.childNodes.length
                && ('radialGradient' == r.node.firstChild.tagName
                  || "linearGradient" == r.node.firstChild.tagName
                  || "pattern" == r.node.firstChild.tagName)
                && ((r = r.node.firstChild), u(this).appendChild(r), (r = l(r))),
            r instanceof t)
          ) if (
              "radialGradient" == r.type
                || "linearGradient" == r.type
                || "pattern" == r.type
            ) {
              r.node.id || d(r.node, { id: r.id });
              var i = f(r.node.id);
            } else i = r.attr(n);
          else if ((i = e.color(r)).error) {
            var o = e(u(this).ownerSVGElement).gradient(r);
            o
              ? (o.node.id || d(o.node, { id: o.id }), (i = f(o.node.id)))
              : (i = r);
          } else i = p(i);
          var s = {};
          (s[n] = i), d(this.node, s), (this.node.style[n] = m);
        };
      }
      (e.deurl = function (e) {
        var t = String(e).match(c);
        return t ? t[2] : e;
      }),
      eve.on('snap.util.attr.mask', function (e) {
        if (e instanceof t || e instanceof a) {
          if (
            (eve.stop(),
            e instanceof a
                  && 1 == e.node.childNodes.length
                  && ((e = e.node.firstChild), u(this).appendChild(e), (e = l(e))),
            "mask" == e.type)
          ) var n = e;
          else (n = o('mask', u(this))).node.appendChild(e.node);
          !n.node.id && d(n.node, { id: n.id }),
          d(this.node, { mask: f(n.id) });
        }
      }),
      (i = function (e) {
        if (e instanceof t || e instanceof a) {
          eve.stop();
          for (var n, r = e.node; r;) {
            if ('clipPath' === r.nodeName) {
              n = new t(r);
              break;
            }
            if ('svg' === r.nodeName) {
              n = void 0;
              break;
            }
            r = r.parentNode;
          }
          n
                || ((n = o('clipPath', u(this))).node.appendChild(e.node),
                !n.node.id && d(n.node, { id: n.id })),
          d(this.node, { 'clip-path': f(n.node.id || n.id) });
        }
      }),
      eve.on('snap.util.attr.clip', i),
      eve.on('snap.util.attr.clip-path', i),
      eve.on('snap.util.attr.clipPath', i),
      eve.on('snap.util.attr.fill', g('fill')),
      eve.on('snap.util.attr.stroke', g('stroke'));
      var v = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
      function b(e) {
        eve.stop(), e == +e && (e += 'px'), (this.node.style.fontSize = e);
      }
      function y() {
        return eve.stop(), this.node.style.fontSize;
      }
      eve.on('snap.util.grad.parse', (e) => {
          var t = (e = p(e)).match(v);
          if (!t) return null;
          var n = t[1],
            r = t[2],
            a = t[3];
          1 ==
            (r = r.split(/\s*,\s*/).map(function(e) {
              return +e == e ? +e : e;
            })).length &&
            0 == r[0] &&
            (r = []);
          var i = (a = (a = a.split("-")).map(function(e) {
              var t = { color: (e = e.split(":"))[0] };
              return e[1] && (t.offset = parseFloat(e[1])), t;
            })).length,
            o = 0,
            l = 0;
          function s(e, t) {
            for (var n = (t - o) / (e - l), r = l; r < e; r++)
              a[r].offset = +(+o + n * (r - l)).toFixed(2);
            (l = e), (o = t);
          }
          i--;
          for (var u = 0; u < i; u++) "offset" in a[u] && s(u, a[u].offset);
          return (
            (a[i].offset = a[i].offset || 100),
            s(i, a[i].offset),
            { type: n, params: r, stops: a }
          );
        }),
      eve.on('snap.util.attr.d', function (t) {
        eve.stop(),
        s(t, 'array')
                && s(t[0], 'array')
                && (t = e.path.toString.call(t)),
        (t = p(t)).match(/[ruo]/i) && (t = e.path.toAbsolute(t)),
        d(this.node, { d: t });
      })(-1),
      eve.on('snap.util.attr.#text', function (e) {
        eve.stop(), (e = p(e));
        for (var t = r.doc.createTextNode(e); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
        this.node.appendChild(t);
      })(-1),
      eve.on('snap.util.attr.path', function (e) {
        eve.stop(), this.attr({ d: e });
      })(-1),
      eve.on('snap.util.attr.class', function (e) {
        eve.stop(), (this.node.className.baseVal = e);
      })(-1),
      eve.on('snap.util.attr.viewBox', function (e) {
        var t;
        (t =              s(e, 'object') && 'x' in e
                ? [e.x, e.y, e.width, e.height].join(' ')
                : s(e, 'array')
                  ? e.join(' ')
                  : e),
        d(this.node, { viewBox: t }),
        eve.stop();
      })(-1),
      eve.on('snap.util.attr.transform', function (e) {
        this.transform(e), eve.stop();
      })(-1),
      eve.on('snap.util.attr.r', function (e) {
        "rect" == this.type && (eve.stop(), d(this.node, { rx: e, ry: e }));
      })(-1),
      eve.on('snap.util.attr.textpath', function (e) {
        if ((eve.stop(), 'text' == this.type)) {
          var n; var r; var 
a;
          if (!e && this.textPath) {
            for (r = this.textPath; r.node.firstChild;) this.node.appendChild(r.node.firstChild);
            return r.remove(), void delete this.textPath;
          }
          if (s(e, 'string')) {
            var i = u(this);
                  var o = l(i.parentNode).path(e);
            i.appendChild(o.node), (n = o.id), o.attr({ id: n });
          } else (e = l(e)) instanceof t
                  && ((n = e.attr('id')) || ((n = e.id), e.attr({ id: n })));
          if (n) if (((r = this.textPath), (a = this.node), r)) r.attr({ 'xlink:href': '#' + n });
            else {
              for (
                r = d('textPath', { 'xlink:href': '#' + n });
                a.firstChild;

              ) r.appendChild(a.firstChild);
              a.appendChild(r), (this.textPath = l(r));
            }
        }
      })(-1),
      eve.on('snap.util.attr.text', function (e) {
        if ('text' == this.type) {
          for (var t = this.node; t.firstChild;) t.removeChild(t.firstChild);
          for (
            var n = (function e(t) {
              var n = d('tspan');
              if (s(t, 'array')) for (let a = 0; a < t.length; a++) n.appendChild(e(t[a]));
              else n.appendChild(r.doc.createTextNode(t));
              return n.normalize && n.normalize(), n;
            }(e));
            n.firstChild;

          ) t.appendChild(n.firstChild);
        }
        eve.stop();
      })(-1),
      eve.on('snap.util.attr.fontSize', b)(-1),
      eve.on('snap.util.attr.font-size', b)(-1),
      eve.on('snap.util.getattr.transform', function () {
        return eve.stop(), this.transform();
      })(-1),
      eve.on('snap.util.getattr.textpath', function () {
        return eve.stop(), this.textPath;
      })(-1),
      (function () {
        function t(t) {
          return function () {
            eve.stop();
            var n = r.doc.defaultView
              .getComputedStyle(this.node, null)
              .getPropertyValue('marker-' + t);
            return 'none' == n ? n : e(r.doc.getElementById(n.match(c)[1]));
          };
        }
        function n(e) {
          return function (t) {
            eve.stop();
            var n = 'marker' + e.charAt(0).toUpperCase() + e.substring(1);
            if ('' != t && t) {
              if ('marker' == t.type) {
                var r = t.node.id;
                return (
                  r || d(t.node, { id: t.id }),
                  void (this.node.style[n] = f(r))
                );
              }
            } else this.node.style[n] = 'none';
          };
        }
        eve.on('snap.util.getattr.marker-end', t('end'))(-1),
        eve.on('snap.util.getattr.markerEnd', t('end'))(-1),
        eve.on('snap.util.getattr.marker-start', t('start'))(-1),
        eve.on('snap.util.getattr.markerStart', t('start'))(-1),
        eve.on('snap.util.getattr.marker-mid', t('mid'))(-1),
        eve.on('snap.util.getattr.markerMid', t('mid'))(-1),
        eve.on('snap.util.attr.marker-end', n('end'))(-1),
        eve.on('snap.util.attr.markerEnd', n('end'))(-1),
        eve.on('snap.util.attr.marker-start', n('start'))(-1),
        eve.on('snap.util.attr.markerStart', n('start'))(-1),
        eve.on('snap.util.attr.marker-mid', n('mid'))(-1),
        eve.on('snap.util.attr.markerMid', n('mid'))(-1);
      }()),
      eve.on('snap.util.getattr.r', function () {
        if ('rect' == this.type && d(this.node, 'rx') == d(this.node, 'ry')) return eve.stop(), d(this.node, 'rx');
      })(-1),
      eve.on('snap.util.getattr.text', function () {
        if ('text' == this.type || 'tspan' == this.type) {
          eve.stop();
          var e = (function e(t) {
            for (
              var n = [], r = t.childNodes, a = 0, i = r.length;
              a < i;
              a++
            ) {
              var o = r[a];
              3 == o.nodeType && n.push(o.nodeValue),
              "tspan" == o.tagName
                      && (o.childNodes.length == 1 && o.firstChild.nodeType == 3
                        ? n.push(o.firstChild.nodeValue)
                        : n.push(e(o)));
            }
            return n;
          }(this.node));
          return e.length == 1 ? e[0] : e;
        }
      })(-1),
      eve.on('snap.util.getattr.#text', function () {
        return this.node.textContent;
      })(-1),
      eve.on('snap.util.getattr.fill', function (t) {
        if (!t) {
          eve.stop();
          var n = eve('snap.util.getattr.fill', this, !0).firstDefined();
          return e(e.deurl(n)) || n;
        }
      })(-1),
      eve.on('snap.util.getattr.stroke', function (t) {
        if (!t) {
          eve.stop();
          var n = eve('snap.util.getattr.stroke', this, !0).firstDefined();
          return e(e.deurl(n)) || n;
        }
      })(-1),
      eve.on('snap.util.getattr.viewBox', function () {
        eve.stop();
        var t = d(this.node, 'viewBox');
        return t
          ? ((t = t.split(h)), e._.box(+t[0], +t[1], +t[2], +t[3]))
          : void 0;
      })(-1),
      eve.on('snap.util.getattr.points', function () {
        var e = d(this.node, 'points');
        return eve.stop(), e ? e.split(h) : void 0;
      })(-1),
      eve.on('snap.util.getattr.path', function () {
        var e = d(this.node, 'd');
        return eve.stop(), e;
      })(-1),
      eve.on('snap.util.getattr.class', function () {
        return this.node.className.baseVal;
      })(-1),
      eve.on('snap.util.getattr.fontSize', y)(-1),
      eve.on('snap.util.getattr.font-size', y)(-1);
    }),
    a.plugin((e, t, n, r, a) => {
      var i = /\S+/g;
          var o = String;
          var l = t.prototype;
      (l.addClass = function (e) {
        var t;
            var n;
            var r;
            var a = o(e || "").match(i) || [];
            var l = this.node;
            var s = l.className.baseVal;
            var u = s.match(i) || [];
        if (a.length) {
          for (t = 0; (n = a[t++]);) ~u.indexOf(n) || u.push(n);
          s != (r = u.join(' ')) && (l.className.baseVal = r);
        }
        return this;
      }),
      (l.removeClass = function (e) {
        var t;
              var n;
              var r;
              var a;
              var l = o(e || "").match(i) || [];
              var s = this.node;
              var u = s.className.baseVal;
              var c = u.match(i) || [];
        if (c.length) {
          for (t = 0; (r = l[t++]);) ~(n = c.indexOf(r)) && c.splice(n, 1);
          u != (a = c.join(' ')) && (s.className.baseVal = a);
        }
        return this;
      }),
      (l.hasClass = function (e) {
        return !!~(this.node.className.baseVal.match(i) || []).indexOf(e);
      }),
      (l.toggleClass = function (e, t) {
        if (t != null) return t ? this.addClass(e) : this.removeClass(e);
        var n;
              var r;
              var a;
              var o;
              var l = (e || "").match(i) || [];
              var s = this.node;
              var u = s.className.baseVal;
              var c = u.match(i) || [];
        for (n = 0; (a = l[n++]);) ~(r = c.indexOf(a)) ? c.splice(r, 1) : c.push(a);
        return u != (o = c.join(' ')) && (s.className.baseVal = o), this;
      });
    }),
    a.plugin((e, t, n, r, a) => {
      var i = {
          "+": function (e, t) {
            return e + t;
          },
          "-": function (e, t) {
            return e - t;
          },
          "/": function (e, t) {
            return e / t;
          },
          "*": function (e, t) {
            return e * t;
          },
        };
          var o = String;
          var l = /[a-z]+$/i;
          var s = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
      function u(e) {
        return e;
      }
      function c(e) {
        return function (t) {
          return +t.toFixed(3) + e;
        };
      }
      eve.on('snap.util.attr', function (e) {
        var t = o(e).match(s);
        if (t) {
          var n = eve.nt();
              var r = n.substring(n.lastIndexOf(".") + 1);
              var a = this.attr(r);
              var u = {};
          eve.stop();
          var c = t[3] || '',
            d = a.match(l),
            f = i[t[1]];
          if (
            (d && d == c
              ? (e = f(parseFloat(a), +t[2]))
              : ((a = this.asPX(r)),
              (e = f(this.asPX(r), this.asPX(r, t[2] + c)))),
            isNaN(a) || isNaN(e))
          ) return;
          (u[r] = e), this.attr(u);
        }
      })(-10),
      eve.on('snap.util.equal', function (e, t) {
        var n = o(this.attr(e) || '');
              var r = o(t).match(s);
        if (r) {
          eve.stop();
          var a = r[3] || '',
            d = n.match(l),
            f = i[r[1]];
          return d && d == a
            ? { from: parseFloat(n), to: f(parseFloat(n), +r[2]), f: c(d) }
            : {
              from: (n = this.asPX(e)),
              to: f(n, this.asPX(e, r[2] + a)),
              f: u,
            };
        }
      })(-10);
    }),
    a.plugin((e, t, n, r, a) => {
      var i = n.prototype;
          var o = e.is;
      (i.rect = function (e, t, n, r, a, i) {
        var l;
        return (
          null == i && (i = a),
          o(e, 'object') && '[object Object]' == e
            ? (l = e)
            : e != null &&
                ((l = {
 x: e, y: t, width: n, height: r 
}),
                a != null && ((l.rx = a), (l.ry = i))),
          this.el('rect', l)
        );
      }),
      (i.circle = function (e, t, n) {
        var r;
        return (
          o(e, 'object') && '[object Object]' == e
            ? (r = e)
            : e != null && (r = { cx: e, cy: t, r: n }),
          this.el('circle', r)
        );
      });
      var l = (function () {
        function e() {
          this.parentNode.removeChild(this);
        }
        return function (t, n) {
          var a = r.doc.createElement('img');
              var i = r.doc.body;
          (a.style.cssText = 'position:absolute;left:-9999em;top:-9999em'),
          (a.onload = function () {
            n.call(a), (a.onload = a.onerror = null), i.removeChild(a);
          }),
          (a.onerror = e),
          i.appendChild(a),
          (a.src = t);
        };
      }());
      (i.image = function (t, n, r, a, i) {
        var s = this.el('image');
        if (o(t, 'object') && 'src' in t) s.attr(t);
        else if (t != null) {
          var u = { 'xlink:href': t, preserveAspectRatio: 'none' };
          null != n && r != null && ((u.x = n), (u.y = r)),
          null != a && i != null
            ? ((u.width = a), (u.height = i))
            : l(t, function () {
              e._.$(s.node, {
                width: this.offsetWidth,
                height: this.offsetHeight,
              });
            }),
          e._.$(s.node, u);
        }
        return s;
      }),
      (i.ellipse = function (e, t, n, r) {
        var a;
        return (
          o(e, 'object') && '[object Object]' == e
            ? (a = e)
            : e != null && (a = {
 cx: e, cy: t, rx: n, ry: r 
}),
          this.el('ellipse', a)
        );
      }),
      (i.path = function (e) {
        var t;
        return (
          o(e, 'object') && !o(e, 'array') ? (t = e) : e && (t = { d: e }),
          this.el('path', t)
        );
      }),
      (i.group = i.g = function (e) {
        var t = this.el('g');
        return (
          1 == arguments.length && e && !e.type
            ? t.attr(e)
            : arguments.length
                  && t.add(Array.prototype.slice.call(arguments, 0)),
          t
        );
      }),
      (i.svg = function (e, t, n, r, a, i, l, s) {
        var u = {};
        return (
          o(e, 'object') && t == null
            ? (u = e)
            : (e != null && (u.x = e),
            null != t && (u.y = t),
            null != n && (u.width = n),
            null != r && (u.height = r),
            null != a
                    && null != i
                    && null != l
                    && null != s
                    && (u.viewBox = [a, i, l, s])),
          this.el('svg', u)
        );
      }),
      (i.mask = function (e) {
        var t = this.el('mask');
        return (
          1 == arguments.length && e && !e.type
            ? t.attr(e)
            : arguments.length
                  && t.add(Array.prototype.slice.call(arguments, 0)),
          t
        );
      }),
      (i.ptrn = function (e, t, n, r, a, i, l, s) {
        if (o(e, 'object')) var u = e;
        else (u = { patternUnits: 'userSpaceOnUse' }),
          e && (u.x = e),
          t && (u.y = t),
          null != n && (u.width = n),
          null != r && (u.height = r),
          (u.viewBox =                  null != a && i != null && l != null && s != null
                    ? [a, i, l, s]
                    : [e || 0, t || 0, n || 0, r || 0]);
        return this.el('pattern', u);
      }),
      (i.use = function (n) {
        return n != null
          ? (n instanceof t
                  && (n.attr('id') || n.attr({ id: e._.id(n) }),
                  (n = n.attr('id'))),
          "#" == String(n).charAt() && (n = n.substring(1)),
          this.el('use', { 'xlink:href': '#' + n }))
          : t.prototype.use.call(this);
      }),
      (i.symbol = function (e, t, n, r) {
        var a = {};
        return (
          null != e
                && null != t
                && null != n
                && null != r
                && (a.viewBox = [e, t, n, r]),
          this.el('symbol', a)
        );
      }),
      (i.text = function (e, t, n) {
        var r = {};
        return (
          o(e, 'object')
            ? (r = e)
            : e != null && (r = { x: e, y: t, text: n || '' }),
          this.el('text', r)
        );
      }),
      (i.line = function (e, t, n, r) {
        var a = {};
        return (
          o(e, 'object')
            ? (a = e)
            : e != null && (a = {
 x1: e, x2: n, y1: t, y2: r 
}),
          this.el('line', a)
        );
      }),
      (i.polyline = function (e) {
        arguments.length > 1
              && (e = Array.prototype.slice.call(arguments, 0));
        var t = {};
        return (
          o(e, 'object') && !o(e, 'array')
            ? (t = e)
            : e != null && (t = { points: e }),
          this.el('polyline', t)
        );
      }),
      (i.polygon = function (e) {
        arguments.length > 1
              && (e = Array.prototype.slice.call(arguments, 0));
        var t = {};
        return (
          o(e, 'object') && !o(e, 'array')
            ? (t = e)
            : e != null && (t = { points: e }),
          this.el('polygon', t)
        );
      }),
      (function () {
        var t = e._.$;
        function n() {
          return this.selectAll('stop');
        }
        function r(n, r) {
          var a = t('stop');
                var i = { offset: `${+r  }%` };
          (n = e.color(n)),
          (i['stop-color'] = n.hex),
          n.opacity < 1 && (i['stop-opacity'] = n.opacity),
          t(a, i);
          for (var o, l = this.stops(), s = 0; s < l.length; s++) {
            if (parseFloat(l[s].attr('offset')) > r) {
              this.node.insertBefore(a, l[s].node), (o = !0);
              break;
            }
          }
          return o || this.node.appendChild(a), this;
        }
        function a() {
          if ('linearGradient' == this.type) {
            var n = t(this.node, 'x1') || 0;
                  var r = t(this.node, "x2") || 1;
                  var a = t(this.node, "y1") || 0;
                  var i = t(this.node, 'y2') || 0;
            return e._.box(n, a, math.abs(r - n), math.abs(i - a));
          }
          var o = this.node.cx || 0.5;
                var l = this.node.cy || 0.5;
                var s = this.node.r || 0;
          return e._.box(o - s, l - s, 2 * s, 2 * s);
        }
        function o(t) {
          var n = t;
                var r = this.stops();
          if (
            ('string' === typeof t
                  && (n = eve(
                    'snap.util.grad.parse',
                    null,
                    'l(0,0,0,1)' + t,
                  ).firstDefined().stops),
            e.is(n, 'array'))
          ) {
            for (var a = 0; a < r.length; a++) if (n[a]) {
                var i = e.color(n[a].color);
                      var o = { offset: `${n[a].offset  }%` };
                (o['stop-color'] = i.hex),
                i.opacity < 1 && (o['stop-opacity'] = i.opacity),
                r[a].attr(o);
              } else r[a].remove();
            for (a = r.length; a < n.length; a++) this.addStop(n[a].color, n[a].offset);
            return this;
          }
        }
        function l(i, l, s, u, c) {
          var d = e._.make('linearGradient', i);
          return (
            (d.stops = n),
            (d.addStop = r),
            (d.getBBox = a),
            (d.setStops = o),
            null != l && t(d.node, {
 x1: l, y1: s, x2: u, y2: c 
}),
            d
          );
        }
        function s(i, o, l, s, u, c) {
          var d = e._.make('radialGradient', i);
          return (
            (d.stops = n),
            (d.addStop = r),
            (d.getBBox = a),
            null != o && t(d.node, { cx: o, cy: l, r: s }),
            null != u && c != null && t(d.node, { fx: u, fy: c }),
            d
          );
        }
        (i.gradient = function (e) {
          return (function (e, n) {
            var r;
                  var a = eve('snap.util.grad.parse', null, n).firstDefined();
            if (!a) return null;
            a.params.unshift(e),
            (r =                    "l" == a.type.toLowerCase()
                      ? l.apply(0, a.params)
                      : s.apply(0, a.params)),
            a.type != a.type.toLowerCase()
                    && t(r.node, { gradientUnits: 'userSpaceOnUse' });
            for (let i = a.stops, o = i.length, u = 0; u < o; u++) {
              var c = i[u];
              r.addStop(c.color, c.offset);
            }
            return r;
          }(this.defs, e));
        }),
        (i.gradientLinear = function (e, t, n, r) {
          return l(this.defs, e, t, n, r);
        }),
        (i.gradientRadial = function (e, t, n, r, a) {
          return s(this.defs, e, t, n, r, a);
        }),
        (i.toString = function () {
          var t;
                  var n = this.node.ownerDocument;
                  var r = n.createDocumentFragment();
                  var a = n.createElement("div");
                  var i = this.node.cloneNode(!0);
          return (
            r.appendChild(a),
            a.appendChild(i),
            e._.$(i, { xmlns: 'http://www.w3.org/2000/svg' }),
            (t = a.innerHTML),
            r.removeChild(r.firstChild),
            t
          );
        }),
        (i.toDataURL = function () {
          if (window && window.btoa) return (
              "data:image/svg+xml;base64,"
                    + btoa(unescape(encodeURIComponent(this)))
            );
        }),
        (i.clear = function () {
          for (var e, t = this.node.firstChild; t;) (e = t.nextSibling),
            "defs" != t.tagName
              ? t.parentNode.removeChild(t)
              : i.clear.call({ node: t }),
            (t = e);
        });
      }());
    }),
    a.plugin((e, t, n, r) => {
      var a = t.prototype;
          var i = e.is;
          var o = e._.clone;
          var l = "hasOwnProperty";
          var s = /,?([a-z]),?/gi;
          var u = parseFloat;
          var c = Math;
          var d = c.PI;
          var f = c.min;
          var p = c.max;
          var h = c.pow;
          var m = c.abs;
      function g(e) {
        var t = (g.ps = g.ps || {});
        return (
          t[e] ? (t[e].sleep = 100) : (t[e] = { sleep: 100 }),
          setTimeout(() => {
              for (var n in t)
                t[l](n) && n != e && (t[n].sleep--, !t[n].sleep && delete t[n]);
            }),
          t[e]
        );
      }
      function v(e, t, n, r) {
        return (
          null == e && (e = t = n = r = 0),
          null == t && ((t = e.y), (n = e.width), (r = e.height), (e = e.x)),
          {
            x: e,
            y: t,
            width: n,
            w: n,
            height: r,
            h: r,
            x2: e + n,
            y2: t + r,
            cx: e + n / 2,
            cy: t + r / 2,
            r1: c.min(n, r) / 2,
            r2: c.max(n, r) / 2,
            r0: c.sqrt(n * n + r * r) / 2,
            path: I(e, t, n, r),
            vb: [e, t, n, r].join(' '),
          }
        );
      }
      function b() {
        return this.join(',').replace(s, '$1');
      }
      function y(e) {
        var t = o(e);
        return (t.toString = b), t;
      }
      function w(e, t, n, r, a, i, o, l, s) {
        return s == null
          ? M(e, t, n, r, a, i, o, l)
          : C(
            e,
            t,
            n,
            r,
            a,
            i,
            o,
            l,
            (function (e, t, n, r, a, i, o, l, s) {
              if (s < 0 || M(e, t, n, r, a, i, o, l) < s) return;
              var u;
                    var c = 0.5;
                    var d = 1 - c;
              u = M(e, t, n, r, a, i, o, l, d);
              for (; m(u - s) > 0.01;) u = M(
                  e,
                  t,
                  n,
                  r,
                  a,
                  i,
                  o,
                  l,
                  (d += (u < s ? 1 : -1) * (c /= 2)),
                );
              return d;
            }(e, t, n, r, a, i, o, l, s))
          );
      }
      function x(n, r) {
        function a(e) {
          return +(+e).toFixed(3);
        }
        return e._.cacher(
          function (e, i, o) {
            e instanceof t && (e = e.attr('d'));
            for (
              var l,
                s,
                u,
                c,
                d,
                f = '',
                p = {},
                h = 0,
                m = 0,
                g = (e = W(e)).length;
              m < g;
              m++
            ) {
              if ('M' == (u = e[m])[0]) (l = +u[1]), (s = +u[2]);
              else {
                if (
                  h + (c = w(l, s, u[1], u[2], u[3], u[4], u[5], u[6]))
                    > i
                ) {
                  if (r && !p.start) {
                    if (
                      ((f += [
                        "C"
                            + a(
                              (d = w(
                                l,
                                s,
                                u[1],
                                u[2],
                                u[3],
                                u[4],
                                u[5],
                                u[6],
                                i - h,
                              )).start.x,
                            ),
                        a(d.start.y),
                        a(d.m.x),
                        a(d.m.y),
                        a(d.x),
                        a(d.y),
                      ]),
                      o)
                    ) return f;
                    (p.start = f),
                    (f = [
                      "M" + a(d.x),
                      a(d.y) + 'C' + a(d.n.x),
                      a(d.n.y),
                      a(d.end.x),
                      a(d.end.y),
                      a(u[5]),
                      a(u[6]),
                    ].join()),
                    (h += c),
                    (l = +u[5]),
                    (s = +u[6]);
                    continue;
                  }
                  if (!n && !r) return (d = w(
                      l,
                      s,
                      u[1],
                      u[2],
                      u[3],
                      u[4],
                      u[5],
                      u[6],
                      i - h,
                    ));
                }
                (h += c), (l = +u[5]), (s = +u[6]);
              }
              f += u.shift() + u;
            }
            return (
              (p.end = f),
              (d = n
                ? h
                : r
                  ? p
                  : C(l, s, u[0], u[1], u[2], u[3], u[4], u[5], 1))
            );
          },
          null,
          e._.clone,
        );
      }
      var S = x(1);
          var k = x();
          var E = x(0, 1);
      function C(e, t, n, r, a, i, o, l, s) {
        var u = 1 - s;
            var f = h(u, 3);
            var p = h(u, 2);
            var m = s * s;
            var g = m * s;
            var v = e + 2 * s * (n - e) + m * (a - 2 * n + e);
            var b = t + 2 * s * (r - t) + m * (i - 2 * r + t);
            var y = n + 2 * s * (a - n) + m * (o - 2 * a + n);
            var w = r + 2 * s * (i - r) + m * (l - 2 * i + r);
        return {
          x: f * e + 3 * p * s * n + 3 * u * s * s * a + g * o,
          y: f * t + 3 * p * s * r + 3 * u * s * s * i + g * l,
          m: { x: v, y: b },
          n: { x: y, y: w },
          start: { x: u * e + s * n, y: u * t + s * r },
          end: { x: u * a + s * o, y: u * i + s * l },
          alpha: 90 - (180 * c.atan2(v - y, b - w)) / d,
        };
      }
      function T(t, n, r, a, i, o, l, s) {
        e.is(t, 'array') || (t = [t, n, r, a, i, o, l, s]);
        var u = H.apply(null, t);
        return v(u.min.x, u.min.y, u.max.x - u.min.x, u.max.y - u.min.y);
      }
      function O(e, t, n) {
        return (
          t >= e.x && t <= e.x + e.width && n >= e.y && n <= e.y + e.height
        );
      }
      function P(e, t) {
        return (
          (e = v(e)),
          O((t = v(t)), e.x, e.y)
              || O(t, e.x2, e.y)
              || O(t, e.x, e.y2)
              || O(t, e.x2, e.y2)
              || O(e, t.x, t.y)
              || O(e, t.x2, t.y)
              || O(e, t.x, t.y2)
              || O(e, t.x2, t.y2)
              || (((e.x < t.x2 && e.x > t.x) || (t.x < e.x2 && t.x > e.x))
                && ((e.y < t.y2 && e.y > t.y) || (t.y < e.y2 && t.y > e.y)))
        );
      }
      function A(e, t, n, r, a) {
        return (
          e
              * (e * (-3 * t + 9 * n - 9 * r + 3 * a) + 6 * t - 12 * n + 6 * r)
            - 3 * t
            + 3 * n
        );
      }
      function M(e, t, n, r, a, i, o, l, s) {
        null == s && (s = 1);
        for (
          var u = (s = s > 1 ? 1 : s < 0 ? 0 : s) / 2,
            d = [
              -0.1252,
              0.1252,
              -0.3678,
              0.3678,
              -0.5873,
              0.5873,
              -0.7699,
              0.7699,
              -0.9041,
              0.9041,
              -0.9816,
              0.9816,
            ],
            f = [
              0.2491,
              0.2491,
              0.2335,
              0.2335,
              0.2032,
              0.2032,
              0.1601,
              0.1601,
              0.1069,
              0.1069,
              0.0472,
              0.0472,
            ],
            p = 0,
            h = 0;
          h < 12;
          h++
        ) {
          var m = u * d[h] + u;
              var g = A(m, e, n, a, o);
              var v = A(m, t, r, i, l);
              var b = g * g + v * v;
          p += f[h] * c.sqrt(b);
        }
        return u * p;
      }
      function _(e, t, n, r, a, i, o, l) {
        if (
          !(
            p(e, n) < f(a, o)
              || f(e, n) > p(a, o)
              || p(t, r) < f(i, l)
              || f(t, r) > p(i, l)
          )
        ) {
          var s = (e - n) * (i - l) - (t - r) * (a - o);
          if (s) {
            var u =                  ((e * r - t * n) * (a - o) - (e - n) * (a * l - i * o)) / s;
                var c = ((e * r - t * n) * (i - l) - (t - r) * (a * l - i * o)) / s;
                var d = +u.toFixed(2);
                var h = +c.toFixed(2);
            if (
              !(
                d < +f(e, n).toFixed(2)
                  || d > +p(e, n).toFixed(2)
                  || d < +f(a, o).toFixed(2)
                  || d > +p(a, o).toFixed(2)
                  || h < +f(t, r).toFixed(2)
                  || h > +p(t, r).toFixed(2)
                  || h < +f(i, l).toFixed(2)
                  || h > +p(i, l).toFixed(2)
              )
            ) return { x: u, y: c };
          }
        }
      }
      function N(e, t, n) {
        if (!P(T(e), T(t))) return n ? 0 : [];
        for (
          var r = ~~(M.apply(0, e) / 8),
            a = ~~(M.apply(0, t) / 8),
            i = [],
            o = [],
            l = {},
            s = n ? 0 : [],
            u = 0;
          u < r + 1;
          u++
        ) {
          var c = C.apply(0, e.concat(u / r));
          i.push({ x: c.x, y: c.y, t: u / r });
        }
        for (u = 0; u < a + 1; u++) (c = C.apply(0, t.concat(u / a))),
          o.push({ x: c.x, y: c.y, t: u / a });
        for (u = 0; u < r; u++) for (let d = 0; d < a; d++) {
            var f = i[u];
                var p = i[u + 1];
                var h = o[d];
                var g = o[d + 1];
                var v = m(p.x - f.x) < 0.001 ? "y" : "x";
                var b = m(g.x - h.x) < 0.001 ? "y" : "x";
                var y = _(f.x, f.y, p.x, p.y, h.x, h.y, g.x, g.y);
            if (y) {
              if (l[y.x.toFixed(4)] == y.y.toFixed(4)) continue;
              l[y.x.toFixed(4)] = y.y.toFixed(4);
              var w = f.t + m((y[v] - f[v]) / (p[v] - f[v])) * (p.t - f.t);
                  var x = h.t + m((y[b] - h[b]) / (g[b] - h[b])) * (g.t - h.t);
              w >= 0
                  && w <= 1
                  && x >= 0
                  && x <= 1
                  && (n ? s++ : s.push({
 x: y.x, y: y.y, t1: w, t2: x 
}));
            }
          }
        return s;
      }
      function F(e, t, n) {
        (e = W(e)), (t = W(t));
        for (
          var r,
            a,
            i,
            o,
            l,
            s,
            u,
            c,
            d,
            f,
            p = n ? 0 : [],
            h = 0,
            m = e.length;
          h < m;
          h++
        ) {
          var g = e[h];
          if ('M' == g[0]) (r = l = g[1]), (a = s = g[2]);
          else {
            "C" == g[0]
              ? ((d = [r, a].concat(g.slice(1))), (r = d[6]), (a = d[7]))
              : ((d = [r, a, r, a, l, s, l, s]), (r = l), (a = s));
            for (let v = 0, b = t.length; v < b; v++) {
              var y = t[v];
              if ('M' == y[0]) (i = u = y[1]), (o = c = y[2]);
              else {
                "C" == y[0]
                  ? ((f = [i, o].concat(y.slice(1))), (i = f[6]), (o = f[7]))
                  : ((f = [i, o, i, o, u, c, u, c]), (i = u), (o = c));
                var w = N(d, f, n);
                if (n) p += w;
                else {
                  for (let x = 0, S = w.length; x < S; x++) (w[x].segment1 = h),
                    (w[x].segment2 = v),
                    (w[x].bez1 = d),
                    (w[x].bez2 = f);
                  p = p.concat(w);
                }
              }
            }
          }
        }
        return p;
      }
      function D(e) {
        var t = g(e);
        if (t.bbox) return o(t.bbox);
        if (!e) return v();
        for (
          var n, r = 0, a = 0, i = [], l = [], s = 0, u = (e = W(e)).length;
          s < u;
          s++
        ) if ('M' == (n = e[s])[0]) (r = n[1]), (a = n[2]), i.push(r), l.push(a);
          else {
            var c = H(r, a, n[1], n[2], n[3], n[4], n[5], n[6]);
            (i = i.concat(c.min.x, c.max.x)),
            (l = l.concat(c.min.y, c.max.y)),
            (r = n[5]),
            (a = n[6]);
          }
        var d = f.apply(0, i);
            var h = f.apply(0, l);
            var m = v(d, h, p.apply(0, i) - d, p.apply(0, l) - h);
        return (t.bbox = o(m)), m;
      }
      function I(e, t, n, r, a) {
        if (a) return [
            ['M', +e + +a, t],
            ['l', n - 2 * a, 0],
            ['a', a, a, 0, 0, 1, a, a],
            ['l', 0, r - 2 * a],
            ['a', a, a, 0, 0, 1, -a, a],
            ['l', 2 * a - n, 0],
            ['a', a, a, 0, 0, 1, -a, -a],
            ['l', 0, 2 * a - r],
            ['a', a, a, 0, 0, 1, a, -a],
            ['z'],
          ];
        var i = [['M', e, t], ['l', n, 0], ['l', 0, r], ['l', -n, 0], ['z']];
        return (i.toString = b), i;
      }
      function j(e, t, n, r, a) {
        if (
          (a == null && r == null && (r = n),
          (e = +e),
          (t = +t),
          (n = +n),
          (r = +r),
          null != a)
        ) var i = Math.PI / 180;
              var o = e + n * Math.cos(-r * i);
              var l = e + n * Math.cos(-a * i);
              var s = [
              ['M', o, t + n * Math.sin(-r * i)],
              ['A', n, n, 0, +(a - r > 180), 0, l, t + n * Math.sin(-a * i)],
            ];
        else s = [
            ['M', e, t],
            ['m', 0, -r],
            ['a', n, r, 0, 1, 1, 0, 2 * r],
            ['a', n, r, 0, 1, 1, 0, -2 * r],
            ['z'],
          ];
        return (s.toString = b), s;
      }
      var R = e._unit2px;
          var z = {
          path: function (e) {
            return e.attr('path');
          },
          circle: function (e) {
            var t = R(e);
            return j(t.cx, t.cy, t.r);
          },
          ellipse: function (e) {
            var t = R(e);
            return j(t.cx || 0, t.cy || 0, t.rx, t.ry);
          },
          rect: function (e) {
            var t = R(e);
            return I(t.x || 0, t.y || 0, t.width, t.height, t.rx, t.ry);
          },
          image: function (e) {
            var t = R(e);
            return I(t.x || 0, t.y || 0, t.width, t.height);
          },
          line: function (e) {
            return (
              "M"
                + [
                  e.attr('x1') || 0,
                  e.attr('y1') || 0,
                  e.attr('x2'),
                  e.attr('y2'),
                ]
            );
          },
          polyline: function (e) {
            return 'M' + e.attr('points');
          },
          polygon: function (e) {
            return 'M' + e.attr('points') + 'z';
          },
          deflt: function (e) {
            var t = e.node.getBBox();
            return I(t.x, t.y, t.width, t.height);
          },
        };
      function B(t) {
        var n = g(t);
        if (n.abs) return y(n.abs);
        if (
          ((i(t, 'array') && i(t && t[0], 'array'))
              || (t = e.parsePathString(t)),
          !t || !t.length)
        ) return [['M', 0, 0]];
        var r;
            var a = [];
            var o = 0;
            var l = 0;
            var s = 0;
            var u = 0;
            var c = 0;
        "M" == t[0][0]
            && ((s = o = +t[0][1]), (u = l = +t[0][2]), c++, (a[0] = ['M', o, l]));
        for (
          var d,
            f,
            p =                3 == t.length
                && "M" == t[0][0]
                && "R" == t[1][0].toUpperCase()
                && "Z" == t[2][0].toUpperCase(),
            h = c,
            m = t.length;
          h < m;
          h++
        ) {
          if ((a.push((d = [])), (r = (f = t[h])[0]) != r.toUpperCase())) switch (((d[0] = r.toUpperCase()), d[0])) {
              case 'A':
                (d[1] = f[1]),
                (d[2] = f[2]),
                (d[3] = f[3]),
                (d[4] = f[4]),
                (d[5] = f[5]),
                (d[6] = +f[6] + o),
                (d[7] = +f[7] + l);
                break;
              case 'V':
                d[1] = +f[1] + l;
                break;
              case 'H':
                d[1] = +f[1] + o;
                break;
              case 'R':
                for (
                  var v = [o, l].concat(f.slice(1)), w = 2, x = v.length;
                  w < x;
                  w++
                ) (v[w] = +v[w] + o), (v[++w] = +v[w] + l);
                a.pop(), (a = a.concat(V(v, p)));
                break;
              case 'O':
                a.pop(),
                (v = j(o, l, f[1], f[2])).push(v[0]),
                (a = a.concat(v));
                break;
              case 'U':
                a.pop(),
                (a = a.concat(j(o, l, f[1], f[2], f[3]))),
                (d = ['U'].concat(a[a.length - 1].slice(-2)));
                break;
              case 'M':
                (s = +f[1] + o), (u = +f[2] + l);
              default:
                for (w = 1, x = f.length; w < x; w++) d[w] = +f[w] + (w % 2 ? o : l);
            }
          else if ('R' == r) (v = [o, l].concat(f.slice(1))),
            a.pop(),
            (a = a.concat(V(v, p))),
            (d = ['R'].concat(f.slice(-2)));
          else if ('O' == r) a.pop(), (v = j(o, l, f[1], f[2])).push(v[0]), (a = a.concat(v));
          else if ('U' == r) a.pop(),
            (a = a.concat(j(o, l, f[1], f[2], f[3]))),
            (d = ['U'].concat(a[a.length - 1].slice(-2)));
          else for (let S = 0, k = f.length; S < k; S++) d[S] = f[S];
          if ('O' != (r = r.toUpperCase())) switch (d[0]) {
              case 'Z':
                (o = +s), (l = +u);
                break;
              case 'H':
                o = d[1];
                break;
              case 'V':
                l = d[1];
                break;
              case 'M':
                (s = d[d.length - 2]), (u = d[d.length - 1]);
              default:
                (o = d[d.length - 2]), (l = d[d.length - 1]);
            }
        }
        return (a.toString = b), (n.abs = y(a)), a;
      }
      function L(e, t, n, r) {
        return [e, t, n, r, n, r];
      }
      function U(e, t, n, r, a, i) {
        return [
          (1 / 3) * e + (2 / 3) * n,
          (1 / 3) * t + (2 / 3) * r,
          (1 / 3) * a + (2 / 3) * n,
          (1 / 3) * i + (2 / 3) * r,
          a,
          i,
        ];
      }
      function H(e, t, n, r, a, i, o, l) {
        for (
          var s, u, d, h, g, v, b, y, w = [], x = [[], []], S = 0;
          S < 2;
          ++S
        ) if (
            (S == 0
              ? ((u = 6 * e - 12 * n + 6 * a),
              (s = -3 * e + 9 * n - 9 * a + 3 * o),
              (d = 3 * n - 3 * e))
              : ((u = 6 * t - 12 * r + 6 * i),
              (s = -3 * t + 9 * r - 9 * i + 3 * l),
              (d = 3 * r - 3 * t)),
            m(s) < 1e-12)
          ) {
            if (m(u) < 1e-12) continue;
            0 < (h = -d / u) && h < 1 && w.push(h);
          } else (b = u * u - 4 * d * s),
            (y = c.sqrt(b)),
            b < 0
                  || ((g = (-u + y) / (2 * s)) > 0 && g < 1 && w.push(g),
                  (v = (-u - y) / (2 * s)) > 0 && v < 1 && w.push(v));
        for (var k, E = w.length, C = E; E--;) (k = 1 - (h = w[E])),
          (x[0][E] =                k * k * k * e
                + 3 * k * k * h * n
                + 3 * k * h * h * a
                + h * h * h * o),
          (x[1][E] =                k * k * k * t
                + 3 * k * k * h * r
                + 3 * k * h * h * i
                + h * h * h * l);
        return (
          (x[0][C] = e),
          (x[1][C] = t),
          (x[0][C + 1] = o),
          (x[1][C + 1] = l),
          (x[0].length = x[1].length = C + 2),
          {
            min: { x: f.apply(0, x[0]), y: f.apply(0, x[1]) },
            max: { x: p.apply(0, x[0]), y: p.apply(0, x[1]) },
          }
        );
      }
      function W(t, n) {
        var r = !n && g(t);
        if (!n && r.curve) return y(r.curve);
        for (
          var a = B(t),
            i = n && B(n),
            o = {
 x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null 
},
            l = {
 x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null 
},
            s = function (t, n, r) {
              var a; var 
i;
              if (!t) return ['C', n.x, n.y, n.x, n.y, n.x, n.y];
              switch (
                (!(t[0] in { T: 1, Q: 1 }) && (n.qx = n.qy = null), t[0])
              ) {
                case 'M':
                  (n.X = t[1]), (n.Y = t[2]);
                  break;
                case 'A':
                  t = ['C'].concat(
                    function t(n, r, a, i, o, l, s, u, f, p) {
                      var h;
                          var g = (120 * d) / 180;
                          var v = (d / 180) * (+o || 0);
                          var b = [];
                          var y = e._.cacher((e, t, n) => {
                            return {
                              x: e * c.cos(n) - t * c.sin(n),
                              y: e * c.sin(n) + t * c.cos(n)
                            };
                          });
                      if (!a || !i) return [n, r, u, f, u, f];
                      if (p) (P = p[0]), (A = p[1]), (T = p[2]), (O = p[3]);
                      else {
                        (n = (h = y(n, r, -v)).x),
                        (r = h.y),
                        (u = (h = y(u, f, -v)).x),
                        (f = h.y),
                        c.cos((d / 180) * o),
                        c.sin((d / 180) * o);
                        var w = (n - u) / 2;
                            var x = (r - f) / 2;
                            var S = (w * w) / (a * a) + (x * x) / (i * i);
                        S > 1 && ((a *= S = c.sqrt(S)), (i *= S));
                        var k = a * a;
                            var E = i * i;
                            var C =
                              (l == s ? -1 : 1) *
                              c.sqrt(
                                m(
                                  (k * E - k * x * x - E * w * w) /
                                    (k * x * x + E * w * w)
                                )
                              );
                            var T = (C * a * x) / i + (n + u) / 2;
                            var O = (C * -i * w) / a + (r + f) / 2;
                            var P = c.asin(((r - O) / i).toFixed(9));
                            var A = c.asin(((f - O) / i).toFixed(9));
                        (P = n < T ? d - P : P) < 0 && (P = 2 * d + P),
                        (A = u < T ? d - A : A) < 0 && (A = 2 * d + A),
                        s && P > A && (P -= 2 * d),
                        !s && A > P && (A -= 2 * d);
                      }
                      var M = A - P;
                      if (m(M) > g) {
                        var _ = A;
                            var N = u;
                            var F = f;
                        (A = P + g * (s && A > P ? 1 : -1)),
                        (b = t(
                          (u = T + a * c.cos(A)),
                          (f = O + i * c.sin(A)),
                          a,
                          i,
                          o,
                          0,
                          s,
                          N,
                          F,
                          [A, _, T, O],
                        ));
                      }
                      M = A - P;
                      var D = c.cos(P);
                          var I = c.sin(P);
                          var j = c.cos(A);
                          var R = c.sin(A);
                          var z = c.tan(M / 4);
                          var B = (4 / 3) * a * z;
                          var L = (4 / 3) * i * z;
                          var U = [n, r];
                          var H = [n + B * I, r - L * D];
                          var W = [u + B * R, f - L * j];
                          var V = [u, f];
                      if (
                        ((H[0] = 2 * U[0] - H[0]),
                        (H[1] = 2 * U[1] - H[1]),
                        p)
                      ) return [H, W, V].concat(b);
                      for (
                        var q = [],
                          G = 0,
                          Y = (b = [H, W, V]
                            .concat(b)
                            .join()
                            .split(',')).length;
                        G < Y;
                        G++
                      ) q[G] =                            G % 2
                              ? y(b[G - 1], b[G], v).y
                              : y(b[G], b[G + 1], v).x;
                      return q;
                    }.apply(0, [n.x, n.y].concat(t.slice(1))),
                  );
                  break;
                case 'S':
                  "C" == r || 'S' == r
                    ? ((a = 2 * n.x - n.bx), (i = 2 * n.y - n.by))
                    : ((a = n.x), (i = n.y)),
                  (t = ['C', a, i].concat(t.slice(1)));
                  break;
                case 'T':
                  "Q" == r || 'T' == r
                    ? ((n.qx = 2 * n.x - n.qx), (n.qy = 2 * n.y - n.qy))
                    : ((n.qx = n.x), (n.qy = n.y)),
                  (t = ['C'].concat(U(n.x, n.y, n.qx, n.qy, t[1], t[2])));
                  break;
                case 'Q':
                  (n.qx = t[1]),
                  (n.qy = t[2]),
                  (t = ['C'].concat(U(n.x, n.y, t[1], t[2], t[3], t[4])));
                  break;
                case 'L':
                  t = ['C'].concat(L(n.x, n.y, t[1], t[2]));
                  break;
                case 'H':
                  t = ['C'].concat(L(n.x, n.y, t[1], n.y));
                  break;
                case 'V':
                  t = ['C'].concat(L(n.x, n.y, n.x, t[1]));
                  break;
                case 'Z':
                  t = ['C'].concat(L(n.x, n.y, n.X, n.Y));
              }
              return t;
            },
            f = function (e, t) {
              if (e[t].length > 7) {
                e[t].shift();
                for (let n = e[t]; n.length;) (v[t] = 'A'),
                  i && (b[t] = 'A'),
                  e.splice(t++, 0, ['C'].concat(n.splice(0, 6)));
                e.splice(t, 1), (k = p(a.length, (i && i.length) || 0));
              }
            },
            h = function (e, t, n, r, o) {
              e
                  && t
                  && "M" == e[o][0]
                  && "M" != t[o][0]
                  && (t.splice(o, 0, ['M', r.x, r.y]),
                  (n.bx = 0),
                  (n.by = 0),
                  (n.x = e[o][1]),
                  (n.y = e[o][2]),
                  (k = p(a.length, (i && i.length) || 0)));
            },
            v = [],
            b = [],
            w = '',
            x = '',
            S = 0,
            k = p(a.length, (i && i.length) || 0);
          S < k;
          S++
        ) {
          a[S] && (w = a[S][0]),
          "C" != w && ((v[S] = w), S && (x = v[S - 1])),
          (a[S] = s(a[S], o, x)),
          "A" != v[S] && 'C' == w && (v[S] = 'C'),
          f(a, S),
          i
                && (i[S] && (w = i[S][0]),
                'C' != w && ((b[S] = w), S && (x = b[S - 1])),
                (i[S] = s(i[S], l, x)),
                'A' != b[S] && 'C' == w && (b[S] = 'C'),
                f(i, S)),
          h(a, i, o, l, S),
          h(i, a, l, o, S);
          var E = a[S];
              var C = i && i[S];
              var T = E.length;
              var O = i && C.length;
          (o.x = E[T - 2]),
          (o.y = E[T - 1]),
          (o.bx = u(E[T - 4]) || o.x),
          (o.by = u(E[T - 3]) || o.y),
          (l.bx = i && (u(C[O - 4]) || l.x)),
          (l.by = i && (u(C[O - 3]) || l.y)),
          (l.x = i && C[O - 2]),
          (l.y = i && C[O - 1]);
        }
        return i || (r.curve = y(a)), i ? [a, i] : a;
      }
      function V(e, t) {
        for (var n = [], r = 0, a = e.length; a - 2 * !t > r; r += 2) {
          var i = [
            { x: +e[r - 2], y: +e[r - 1] },
            { x: +e[r], y: +e[r + 1] },
            { x: +e[r + 2], y: +e[r + 3] },
            { x: +e[r + 4], y: +e[r + 5] },
          ];
          t
            ? r
              ? a - 4 == r
                ? (i[3] = { x: +e[0], y: +e[1] })
                : a - 2 == r
                    && ((i[2] = { x: +e[0], y: +e[1] }),
                    (i[3] = { x: +e[2], y: +e[3] }))
              : (i[0] = { x: +e[a - 2], y: +e[a - 1] })
            : a - 4 == r
              ? (i[3] = i[2])
              : r || (i[0] = { x: +e[r], y: +e[r + 1] }),
          n.push([
            "C",
            (-i[0].x + 6 * i[1].x + i[2].x) / 6,
            (-i[0].y + 6 * i[1].y + i[2].y) / 6,
            (i[1].x + 6 * i[2].x - i[3].x) / 6,
            (i[1].y + 6 * i[2].y - i[3].y) / 6,
            i[2].x,
            i[2].y,
          ]);
        }
        return n;
      }
      (e.path = g),
      (e.path.getTotalLength = S),
      (e.path.getPointAtLength = k),
      (e.path.getSubpath = function (e, t, n) {
        if (this.getTotalLength(e) - n < 1e-6) return E(e, t).end;
        var r = E(e, n, 1);
        return t ? E(r, t).end : r;
      }),
      (a.getTotalLength = function () {
        if (this.node.getTotalLength) return this.node.getTotalLength();
      }),
      (a.getPointAtLength = function (e) {
        return k(this.attr('d'), e);
      }),
      (a.getSubpath = function (t, n) {
        return e.path.getSubpath(this.attr('d'), t, n);
      }),
      (e._.box = v),
      (e.path.findDotsAtSegment = C),
      (e.path.bezierBBox = T),
      (e.path.isPointInsideBBox = O),
      (e.closest = function (t, n, r, a) {
        for (
          var i = 100,
            o = v(t - i / 2, n - i / 2, i, i),
            l = [],
            s = r[0].hasOwnProperty('x')
              ? function (e) {
                return { x: r[e].x, y: r[e].y };
              }
              : function (e) {
                return { x: r[e], y: a[e] };
              },
            u = 0;
          i <= 1e6 && !u;

        ) {
          for (var c = 0, d = r.length; c < d; c++) {
            var f = s(c);
            if (O(o, f.x, f.y)) {
              u++, l.push(f);
              break;
            }
          }
          u || (o = v(t - (i *= 2) / 2, n - i / 2, i, i));
        }
        if (i != 1e6) {
          var p;
                var h = 1 / 0;
          for (c = 0, d = l.length; c < d; c++) {
            var m = e.len(t, n, l[c].x, l[c].y);
            h > m && ((h = m), (l[c].len = m), (p = l[c]));
          }
          return p;
        }
      }),
      (e.path.isBBoxIntersect = P),
      (e.path.intersection = function (e, t) {
        return F(e, t);
      }),
      (e.path.intersectionNumber = function (e, t) {
        return F(e, t, 1);
      }),
      (e.path.isPointInside = function (e, t, n) {
        var r = D(e);
        return (
          O(r, t, n)
              && F(
                e,
                [
                  ['M', t, n],
                  ['H', r.x2 + 10],
                ],
                1,
              )
                % 2
                == 1
        );
      }),
      (e.path.getBBox = D),
      (e.path.get = z),
      (e.path.toRelative = function (t) {
        var n = g(t);
              var r = String.prototype.toLowerCase;
        if (n.rel) return y(n.rel);
        (e.is(t, 'array') && e.is(t && t[0], 'array'))
              || (t = e.parsePathString(t));
        var a = [];
              var i = 0;
              var o = 0;
              var l = 0;
              var s = 0;
              var u = 0;
        "M" == t[0][0]
              && ((l = i = t[0][1]), (s = o = t[0][2]), u++, a.push(['M', i, o]));
        for (let c = u, d = t.length; c < d; c++) {
          var f = (a[c] = []);
                var p = t[c];
          if (p[0] != r.call(p[0])) switch (((f[0] = r.call(p[0])), f[0])) {
              case 'a':
                (f[1] = p[1]),
                (f[2] = p[2]),
                (f[3] = p[3]),
                (f[4] = p[4]),
                (f[5] = p[5]),
                (f[6] = +(p[6] - i).toFixed(3)),
                (f[7] = +(p[7] - o).toFixed(3));
                break;
              case 'v':
                f[1] = +(p[1] - o).toFixed(3);
                break;
              case 'm':
                (l = p[1]), (s = p[2]);
              default:
                for (let h = 1, m = p.length; h < m; h++) f[h] = +(p[h] - (h % 2 ? i : o)).toFixed(3);
            }
          else {
            (f = a[c] = []),
            "m" == p[0] && ((l = p[1] + i), (s = p[2] + o));
            for (let v = 0, w = p.length; v < w; v++) a[c][v] = p[v];
          }
          var x = a[c].length;
          switch (a[c][0]) {
            case 'z':
              (i = l), (o = s);
              break;
            case 'h':
              i += +a[c][x - 1];
              break;
            case 'v':
              o += +a[c][x - 1];
              break;
            default:
              (i += +a[c][x - 2]), (o += +a[c][x - 1]);
          }
        }
        return (a.toString = b), (n.rel = y(a)), a;
      }),
      (e.path.toAbsolute = B),
      (e.path.toCubic = W),
      (e.path.map = function (e, t) {
        if (!t) return e;
        var n; var r; var a; var i; var o; var l; var 
s;
        for (a = 0, o = (e = W(e)).length; a < o; a++) for (i = 1, l = (s = e[a]).length; i < l; i += 2) (n = t.x(s[i], s[i + 1])),
            (r = t.y(s[i], s[i + 1])),
            (s[i] = n),
            (s[i + 1] = r);
        return e;
      }),
      (e.path.toString = b),
      (e.path.clone = y);
    }),
    a.plugin((e, t, n, a) => {
      var i = Math.max;
          var o = Math.min;
          var l = function(e) {
            if (
              ((this.items = []),
              (this.bindings = {}),
              (this.length = 0),
              (this.type = "set"),
              e)
            )
              for (var t = 0, n = e.length; t < n; t++)
                e[t] &&
                  ((this[this.items.length] = this.items[this.items.length] =
                    e[t]),
                  this.length++);
          };
          var s = l.prototype;
      (s.push = function () {
        for (var e, t, n = 0, r = arguments.length; n < r; n++) (e = arguments[n])
              && ((this[(t = this.items.length)] = this.items[t] = e),
              this.length++);
        return this;
      }),
      (s.pop = function () {
        return this.length && delete this[this.length--], this.items.pop();
      }),
      (s.forEach = function (e, t) {
        for (let n = 0, r = this.items.length; n < r; n++) if (!1 === e.call(t, this.items[n], n)) return this;
        return this;
      }),
      (s.animate = function (t, n, a, i) {
        "function" !== typeof a || a.length || ((i = a), (a = r.linear)),
        t instanceof e._.Animation
                && ((i = t.callback), (a = t.easing), (n = a.dur), (t = t.attr));
        var o = arguments;
        if (e.is(t, 'array') && e.is(o[o.length - 1], 'array')) var l = !0;
        var s;
              var u = function() {
                s ? (this.b = s) : (s = this.b);
              };
              var c = 0;
              var d = this;
              var f =                i
                && function () {
                  ++c == d.length && i.call(this);
                };
        return this.forEach((e, r) => {
              eve.once("snap.animcreated." + e.id, u),
                l ? o[r] && e.animate.apply(e, o[r]) : e.animate(t, n, a, f);
            });
      }),
      (s.remove = function () {
        for (; this.length;) this.pop().remove();
        return this;
      }),
      (s.bind = function (e, t, n) {
        var r = {};
        if ('function' === typeof t) this.bindings[e] = t;
        else {
          var a = n || e;
          this.bindings[e] = function (e) {
            (r[a] = e), t.attr(r);
          };
        }
        return this;
      }),
      (s.attr = function (e) {
        var t = {};
        for (let n in e) this.bindings[n] ? this.bindings[n](e[n]) : (t[n] = e[n]);
        for (let r = 0, a = this.items.length; r < a; r++) this.items[r].attr(t);
        return this;
      }),
      (s.clear = function () {
        for (; this.length;) this.pop();
      }),
      (s.splice = function (e, t, n) {
        (e = e < 0 ? i(this.length + e, 0) : e),
        (t = i(0, o(this.length - e, t)));
        var r;
              var a = [];
              var s = [];
              var u = [];
        for (r = 2; r < arguments.length; r++) u.push(arguments[r]);
        for (r = 0; r < t; r++) s.push(this[e + r]);
        for (; r < this.length - e; r++) a.push(this[e + r]);
        var c = u.length;
        for (r = 0; r < c + a.length; r++) this.items[e + r] = this[e + r] = r < c ? u[r] : a[r - c];
        for (r = this.items.length = this.length -= t - c; this[r];) delete this[r++];
        return new l(s);
      }),
      (s.exclude = function (e) {
        for (let t = 0, n = this.length; t < n; t++) if (this[t] == e) return this.splice(t, 1), !0;
        return !1;
      }),
      (s.insertAfter = function (e) {
        for (let t = this.items.length; t--;) this.items[t].insertAfter(e);
        return this;
      }),
      (s.getBBox = function () {
        for (
          var e = [], t = [], n = [], r = [], a = this.items.length;
          a--;

        ) if (!this.items[a].removed) {
            var l = this.items[a].getBBox();
            e.push(l.x),
            t.push(l.y),
            n.push(l.x + l.width),
            r.push(l.y + l.height);
          }
        return {
          x: (e = o.apply(0, e)),
          y: (t = o.apply(0, t)),
          x2: (n = i.apply(0, n)),
          y2: (r = i.apply(0, r)),
          width: n - e,
          height: r - t,
          cx: e + (n - e) / 2,
          cy: t + (r - t) / 2,
        };
      }),
      (s.clone = function (e) {
        e = new l();
        for (let t = 0, n = this.items.length; t < n; t++) e.push(this.items[t].clone());
        return e;
      }),
      (s.toString = function () {
        return 'Snap\u2018s set';
      }),
      (s.type = 'set'),
      (e.Set = l),
      (e.set = function () {
        var e = new l();
        return (
          arguments.length
                && e.push.apply(e, Array.prototype.slice.call(arguments, 0)),
          e
        );
      });
    }),
    a.plugin((e, t, n, r) => {
      var a = {};
          var i = /[%a-z]+$/i;
          var o = String;
      function l(e) {
        var t = e[0];
        switch (t.toLowerCase()) {
          case 't':
            return [t, 0, 0];
          case 'm':
            return [t, 1, 0, 0, 1, 0, 0];
          case 'r':
            return e.length == 4 ? [t, 0, e[2], e[3]] : [t, 0];
          case 's':
            return e.length == 5
              ? [t, 1, 1, e[3], e[4]]
              : e.length == 3
                ? [t, 1, 1]
                : [t, 1];
        }
      }
      function s(e) {
        return e;
      }
      function u(e) {
        return e.join(' ');
      }
      function c(t) {
        return e.rgb(t[0], t[1], t[2], t[3]);
      }
      function d(e) {
        var t;
            var n;
            var r;
            var a;
            var i;
            var o;
            var l = 0;
            var s = [];
        for (t = 0, n = e.length; t < n; t++) {
          for (
            i = '[', o = [`"${  e[t][0]  }"`], r = 1, a = e[t].length;
            r < a;
            r++
          ) o[r] = 'val[' + l++ + ']';
          (i += `${o  }]`), (s[t] = i);
        }
        return Function('val', 'return Snap.path.toString.call([' + s + '])');
      }
      function f(e) {
        for (var t = [], n = 0, r = e.length; n < r; n++) for (let a = 1, i = e[n].length; a < i; a++) t.push(e[n][a]);
        return t;
      }
      function p(e) {
        return isFinite(e);
      }
      (a.stroke = a.fill = 'colour'),
      (t.prototype.equal = function (e, t) {
        return eve('snap.util.equal', this, e, t).firstDefined();
      }),
      eve.on('snap.util.equal', function (t, n) {
        var r;
              var h;
              var m = o(this.attr(t) || "");
              var g = this;
        if ('colour' == a[t]) return (
            (r = e.color(m)),
            (h = e.color(n)),
            {
              from: [r.r, r.g, r.b, r.opacity],
              to: [h.r, h.g, h.b, h.opacity],
              f: c,
            }
          );
        if ('viewBox' == t) return {
            from: (r = this.attr(t)
              .vb.split(' ')
              .map(Number)),
            to: (h = n.split(' ').map(Number)),
            f: u,
          };
        if (
          "transform" == t
              || "gradientTransform" == t
              || "patternTransform" == t
        ) return (
            "string" === typeof n && (n = o(n).replace(/\.{3}|\u2026/g, m)),
            (function (t, n, r) {
              (t = t || new e.Matrix()),
              (n = n || new e.Matrix()),
              (t = e.parseTransformString(t.toTransformString()) || []),
              (n = e.parseTransformString(n.toTransformString()) || []);
              for (
                var a,
                  i,
                  o,
                  s,
                  u = Math.max(t.length, n.length),
                  c = [],
                  p = [],
                  h = 0;
                h < u;
                h++
              ) {
                if (
                  ((o = t[h] || l(n[h])),
                  (s = n[h] || l(o)),
                  o[0] != s[0]
                        || ('r' == o[0].toLowerCase()
                          && (o[2] != s[2] || o[3] != s[3]))
                        || ('s' == o[0].toLowerCase()
                          && (o[3] != s[3] || o[4] != s[4])))
                ) {
                  (t = e._.transform2matrix(t, r())),
                  (n = e._.transform2matrix(n, r())),
                  (c = [['m', t.a, t.b, t.c, t.d, t.e, t.f]]),
                  (p = [['m', n.a, n.b, n.c, n.d, n.e, n.f]]);
                  break;
                }
                for (
                  c[h] = [],
                  p[h] = [],
                  a = 0,
                  i = Math.max(o.length, s.length);
                  a < i;
                  a++
                ) a in o && (c[h][a] = o[a]), a in s && (p[h][a] = s[a]);
              }
              return { from: f(c), to: f(p), f: d(c) };
            }(
                  (m = this.matrix),
                  (n = e._.rgTransform.test(n)
                    ? e._.transform2matrix(n, this.getBBox())
                    : e._.transform2matrix(
                        e._.svgTransform2string(n),
                        this.getBBox()
                      )),
                  function() {
                    return g.getBBox(1);
                  }
                ))
          );
        if ('d' == t || 'path' == t) return {
            from: f((r = e.path.toCubic(m, n))[0]),
            to: f(r[1]),
            f: d(r[0]),
          };
        if ('points' == t) return {
            from: (r = o(m).split(e._.separator)),
            to: (h = o(n).split(e._.separator)),
            f: function (e) {
              return e;
            },
          };
        if (p(m) && p(n)) return { from: parseFloat(m), to: parseFloat(n), f: s };
        var v;
              var b;
              var y;
              var w = m.match(i);
              var x = o(n).match(i);
        return w
              && ((b = w),
              (y = x),
              e.is(b, 'array')
                && e.is(y, 'array')
                && b.toString() == y.toString())
          ? {
            from: parseFloat(m),
            to: parseFloat(n),
            f:
                    ((v = w),
                    function (e) {
                      return +e.toFixed(3) + v;
                    }),
          }
          : { from: this.asPX(t), to: this.asPX(t, n), f: s };
      });
    }),
    a.plugin((e, t, n, r) => {
      for (
        var a = t.prototype,
          i = ('createTouch' in r.doc),
          o = [
            "click",
            "dblclick",
            "mousedown",
            "mousemove",
            "mouseout",
            "mouseover",
            "mouseup",
            "touchstart",
            "touchmove",
            "touchend",
            "touchcancel",
          ],
          l = {
            mousedown: 'touchstart',
            mousemove: 'touchmove',
            mouseup: 'touchend'
          },
          s = function (e, t) {
            var n = 'y' == e ? 'scrollTop' : 'scrollLeft',
              a = t && t.node ? t.node.ownerDocument : r.doc;
            return a[(n in a.documentElement) ? 'documentElement' : 'body'][
              n
            ];
          },
          u = function () {
            return this.originalEvent.preventDefault();
          },
          c = function () {
            return this.originalEvent.stopPropagation();
          },
          d = function (e, t, n, r) {
            var a = i && l[t] ? l[t] : t;
                var o = function (a) {
                var o = s('y', r);
                    var d = s('x', r);
                if (i && l.hasOwnProperty(t)) for (
                    var f = 0, p = a.targetTouches && a.targetTouches.length;
                    f < p;
                    f++
                  ) if (
                      a.targetTouches[f].target == e
                        || e.contains(a.targetTouches[f].target)
                    ) {
                      var h = a;
                      ((a = a.targetTouches[f]).originalEvent = h),
                      (a.preventDefault = u),
                      (a.stopPropagation = c);
                      break;
                    }
                var m = a.clientX + d;
                    var g = a.clientY + o;
                return n.call(r, a, m, g);
              };
            return (
              t !== a && e.addEventListener(t, o, !1),
              e.addEventListener(a, o, !1),
              function () {
                return (
                  t !== a && e.removeEventListener(t, o, !1),
                  e.removeEventListener(a, o, !1),
                  !0
                );
              }
            );
          },
          f = [],
          p = function (e) {
            for (
              var t,
                n = e.clientX,
                r = e.clientY,
                a = s('y'),
                o = s('x'),
                l = f.length;
              l--;

            ) {
              if (((t = f[l]), i)) {
                for (var u, c = e.touches && e.touches.length; c--;) if (
                    (u = e.touches[c]).identifier == t.el._drag.id
                      || t.el.node.contains(u.target)
                  ) {
                    (n = u.clientX),
                    (r = u.clientY),
                    (e.originalEvent
                      ? e.originalEvent
                      : e
                    ).preventDefault();
                    break;
                  }
              } else e.preventDefault();
              var d = t.el.node;
              d.nextSibling, d.parentNode, d.style.display;
              (n += o),
              (r += a),
              eve(
                "snap.drag.move." + t.el.id,
                t.move_scope || t.el,
                n - t.el._drag.x,
                r - t.el._drag.y,
                n,
                r,
                e,
              );
            }
          },
          h = function t(n) {
            e.unmousemove(p).unmouseup(t);
            for (var r, a = f.length; a--;) ((r = f[a]).el._drag = {}),
              eve(
                "snap.drag.end." + r.el.id,
                r.end_scope || r.start_scope || r.move_scope || r.el,
                n,
              ),
              eve.off('snap.drag.*.' + r.el.id);
            f = [];
          },
          m = o.length;
        m--;

      ) !(function (t) {
          (e[t] = a[t] = function (n, r) {
            if (e.is(n, 'function')) (this.events = this.events || []),
              this.events.push({
                name: t,
                f: n,
                unbind: d(this.node || document, t, n, r || this),
              });
            else for (let a = 0, i = this.events.length; a < i; a++) if (this.events[a].name == t) try {
                    this.events[a].f.call(this);
                  } catch (o) {}
            return this;
          }),
          (e['un' + t] = a['un' + t] = function (e) {
            for (let n = this.events || [], r = n.length; r--;) if (n[r].name == t && (n[r].f == e || !e)) return (
                  n[r].unbind(),
                  n.splice(r, 1),
                  !n.length && delete this.events,
                  this
                );
            return this;
          });
        }(o[m]));
      (a.hover = function (e, t, n, r) {
        return this.mouseover(e, n).mouseout(t, r || n);
      }),
      (a.unhover = function (e, t) {
        return this.unmouseover(e).unmouseout(t);
      });
      var g = [];
      (a.drag = function (t, n, r, a, i, o) {
        var l;
            var s = this;
        if (!arguments.length) return s.drag(
            function (e, t) {
              this.attr({ transform: l + (l ? 'T' : 't') + [e, t] });
            },
            function () {
              l = this.transform().local;
            },
          );
        function u(l, u, c) {
          (l.originalEvent || l).preventDefault(),
          (s._drag.x = u),
          (s._drag.y = c),
          (s._drag.id = l.identifier),
          !f.length && e.mousemove(p).mouseup(h),
          f.push({
 el: s, move_scope: a, start_scope: i, end_scope: o 
}),
          n && eve.on('snap.drag.start.' + s.id, n),
          t && eve.on('snap.drag.move.' + s.id, t),
          r && eve.on('snap.drag.end.' + s.id, r),
          eve('snap.drag.start.' + s.id, i || a || s, u, c, l);
        }
        function c(e, t, n) {
          eve('snap.draginit.' + s.id, s, e, t, n);
        }
        return (
          eve.on('snap.draginit.' + s.id, u),
          (s._drag = {}),
          g.push({ el: s, start: u, init: c }),
          s.mousedown(c),
          s
        );
      }),
      (a.undrag = function () {
        for (let t = g.length; t--;) g[t].el == this
                && (this.unmousedown(g[t].init),
                g.splice(t, 1),
                eve.unbind('snap.drag.*.' + this.id),
                eve.unbind('snap.draginit.' + this.id));
        return !g.length && e.unmousemove(p).unmouseup(h), this;
      });
    }),
    a.plugin((e, t, n, r) => {
      t.prototype;
      var a = n.prototype;
          var i = /^\s*url\((.+)\)/;
          var o = String;
          var l = e._.$;
      (e.filter = {}),
      (a.filter = function (n) {
        var r = this;
        "svg" != r.type && (r = r.paper);
        var a = e.parse(o(n));
              var i = e._.id();
              var s = (r.node.offsetWidth, r.node.offsetHeight, l('filter'));
        return (
          l(s, { id: i, filterUnits: 'userSpaceOnUse' }),
          s.appendChild(a.node),
          r.defs.appendChild(s),
          new t(s)
        );
      }),
      eve.on('snap.util.getattr.filter', function () {
        eve.stop();
        var t = l(this.node, 'filter');
        if (t) {
          var n = o(t).match(i);
          return n && e.select(n[1]);
        }
      }),
      eve.on('snap.util.attr.filter', function (n) {
        if (n instanceof t && 'filter' == n.type) {
          eve.stop();
          var r = n.node.id;
          r || (l(n.node, { id: n.id }), (r = n.id)),
          l(this.node, { filter: e.url(r) });
        }
        (n && 'none' != n)
              || (eve.stop(), this.node.removeAttribute('filter'));
      }),
      (e.filter.blur = function (t, n) {
        null == t && (t = 2);
        var r = n == null ? t : [t, n];
        return e.format('<feGaussianBlur stdDeviation="{def}"/>', {
          def: r,
        });
      }),
      (e.filter.blur.toString = function () {
        return this();
      }),
      (e.filter.shadow = function (t, n, r, a, i) {
        return (
          null == i
                && (a == null
                  ? ((i = r), (r = 4), (a = '#000'))
                  : ((i = a), (a = r), (r = 4))),
          null == r && (r = 4),
          null == i && (i = 1),
          null == t && ((t = 0), (n = 2)),
          null == n && (n = t),
          (a = e.color(a)),
          e.format(
            '<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>',
            {
 color: a, dx: t, dy: n, blur: r, opacity: i 
},
          )
        );
      }),
      (e.filter.shadow.toString = function () {
        return this();
      }),
      (e.filter.grayscale = function (t) {
        return (
          null == t && (t = 1),
          e.format(
            '<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>',
            {
              a: 0.2126 + 0.7874 * (1 - t),
              b: 0.7152 - 0.7152 * (1 - t),
              c: 0.0722 - 0.0722 * (1 - t),
              d: 0.2126 - 0.2126 * (1 - t),
              e: 0.7152 + 0.2848 * (1 - t),
              f: 0.0722 - 0.0722 * (1 - t),
              g: 0.2126 - 0.2126 * (1 - t),
              h: 0.0722 + 0.9278 * (1 - t),
            },
          )
        );
      }),
      (e.filter.grayscale.toString = function () {
        return this();
      }),
      (e.filter.sepia = function (t) {
        return (
          null == t && (t = 1),
          e.format(
            '<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>',
            {
              a: 0.393 + 0.607 * (1 - t),
              b: 0.769 - 0.769 * (1 - t),
              c: 0.189 - 0.189 * (1 - t),
              d: 0.349 - 0.349 * (1 - t),
              e: 0.686 + 0.314 * (1 - t),
              f: 0.168 - 0.168 * (1 - t),
              g: 0.272 - 0.272 * (1 - t),
              h: 0.534 - 0.534 * (1 - t),
              i: 0.131 + 0.869 * (1 - t),
            },
          )
        );
      }),
      (e.filter.sepia.toString = function () {
        return this();
      }),
      (e.filter.saturate = function (t) {
        return (
          null == t && (t = 1),
          e.format('<feColorMatrix type="saturate" values="{amount}"/>', {
            amount: 1 - t,
          })
        );
      }),
      (e.filter.saturate.toString = function () {
        return this();
      }),
      (e.filter.hueRotate = function (t) {
        return (
          (t = t || 0),
          e.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
            angle: t,
          })
        );
      }),
      (e.filter.hueRotate.toString = function () {
        return this();
      }),
      (e.filter.invert = function (t) {
        return (
          null == t && (t = 1),
          e.format(
            '<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>',
            { amount: t, amount2: 1 - t },
          )
        );
      }),
      (e.filter.invert.toString = function () {
        return this();
      }),
      (e.filter.brightness = function (t) {
        return (
          null == t && (t = 1),
          e.format(
            '<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>',
            { amount: t },
          )
        );
      }),
      (e.filter.brightness.toString = function () {
        return this();
      }),
      (e.filter.contrast = function (t) {
        return (
          null == t && (t = 1),
          e.format(
            '<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>',
            { amount: t, amount2: 0.5 - t / 2 },
          )
        );
      }),
      (e.filter.contrast.toString = function () {
        return this();
      });
    }),
    a.plugin((e, t, n, r, a) => {
      var i = e._.box;
          var o = e.is;
          var l = /^[^a-z]*([tbmlrc])/i;
          var s = function () {
          return 'T' + this.dx + ',' + this.dy;
        };
      (t.prototype.getAlign = function (e, t) {
        null == t && o(e, 'string') && ((t = e), (e = null));
        var n = (e = e || this.paper).getBBox ? e.getBBox() : i(e);
            var r = this.getBBox();
            var a = {};
        switch ((t = (t = t && t.match(l)) ? t[1].toLowerCase() : 'c')) {
          case 't':
            (a.dx = 0), (a.dy = n.y - r.y);
            break;
          case 'b':
            (a.dx = 0), (a.dy = n.y2 - r.y2);
            break;
          case 'm':
            (a.dx = 0), (a.dy = n.cy - r.cy);
            break;
          case 'l':
            (a.dx = n.x - r.x), (a.dy = 0);
            break;
          case 'r':
            (a.dx = n.x2 - r.x2), (a.dy = 0);
            break;
          default:
            (a.dx = n.cx - r.cx), (a.dy = 0);
        }
        return (a.toString = s), a;
      }),
      (t.prototype.align = function (e, t) {
        return this.transform('...' + this.getAlign(e, t));
      });
    }),
    a.plugin((e, t, n, a, i) => {
      var o = t.prototype;
          var l = e.is;
          var s = String;
          var u = 'hasOwnProperty';
      function c(e, t, n) {
        return function (r) {
          var a = r.slice(e, t);
          return a.length == 1 && (a = a[0]), n ? n(a) : a;
        };
      }
      var d = function (e, t, n, a) {
        "function" !== typeof n || n.length || ((a = n), (n = r.linear)),
        (this.attr = e),
        (this.dur = t),
        n && (this.easing = n),
        a && (this.callback = a);
      };
      (e._.Animation = d),
      (e.animation = function (e, t, n, r) {
        return new d(e, t, n, r);
      }),
      (o.inAnim = function () {
        var e = [];
        for (let t in this.anims) this.anims[u](t)
                && (function (t) {
                  e.push({
                    anim: new d(t._attrs, t.dur, t.easing, t._callback),
                    mina: t,
                    curStatus: t.status(),
                    status(e) {
                      return t.status(e);
                    },
                    stop() {
                      t.stop();
                    }
                  });
                }(this.anims[t]));
        return e;
      }),
      (e.animate = function (e, t, n, a, i, o) {
        "function" !== typeof i || i.length || ((o = i), (i = r.linear));
        var l = r.time();
              var s = r(e, t, l, l + a, r.time, n, i);
        return o && eve.once('mina.finish.' + s.id, o), s;
      }),
      (o.stop = function () {
        for (let e = this.inAnim(), t = 0, n = e.length; t < n; t++) e[t].stop();
        return this;
      }),
      (o.animate = function (e, t, n, a) {
        "function" !== typeof n || n.length || ((a = n), (n = r.linear)),
        e instanceof d
                && ((a = e.callback), (n = e.easing), (t = e.dur), (e = e.attr));
        var i;
              var o;
              var f;
              var p;
              var h = [];
              var m = [];
              var g = {};
              var v = this;
        for (let b in e) if (e[u](b)) {
            v.equal
              ? ((i = (p = v.equal(b, s(e[b]))).from),
              (o = p.to),
              (f = p.f))
              : ((i = +v.attr(b)), (o = +e[b]));
            var y = l(i, 'array') ? i.length : 1;
            (g[b] = c(h.length, h.length + y, f)),
            (h = h.concat(i)),
            (m = m.concat(o));
          }
        var w = r.time();
              var x = r(
            h,
            m,
            w,
            w + t,
            r.time,
            function (e) {
              var t = {};
              for (let n in g) g[u](n) && (t[n] = g[n](e));
              v.attr(t);
            },
            n,
          );
        return (
          (v.anims[x.id] = x),
          (x._attrs = e),
          (x._callback = a),
          eve('snap.animcreated.' + v.id, x),
          eve.once('mina.finish.' + x.id, () => {
                eve.off("mina.*." + x.id), delete v.anims[x.id], a && a.call(v);
              }),
          eve.once('mina.stop.' + x.id, () => {
                eve.off("mina.*." + x.id), delete v.anims[x.id];
              }),
          v
        );
      });
    }),
    a.plugin((e, t, n, r) => {
      function a(e) {
        e = e.split(/(?=#)/);
        var t = new String(e[5]);
        return (
          (t[50] = e[0]),
          (t[100] = e[1]),
          (t[200] = e[2]),
          (t[300] = e[3]),
          (t[400] = e[4]),
          (t[500] = e[5]),
          (t[600] = e[6]),
          (t[700] = e[7]),
          (t[800] = e[8]),
          (t[900] = e[9]),
          e[10]
              && ((t.A100 = e[10]),
              (t.A200 = e[11]),
              (t.A400 = e[12]),
              (t.A700 = e[13])),
          t
        );
      }
      (e.mui = {}),
      (e.flat = {}),
      (e.mui.red = a(
        "#ffebee#ffcdd2#ef9a9a#e57373#ef5350#f44336#e53935#d32f2f#c62828#b71c1c#ff8a80#ff5252#ff1744#d50000",
      )),
      (e.mui.pink = a(
        "#FCE4EC#F8BBD0#F48FB1#F06292#EC407A#E91E63#D81B60#C2185B#AD1457#880E4F#FF80AB#FF4081#F50057#C51162",
      )),
      (e.mui.purple = a(
        "#F3E5F5#E1BEE7#CE93D8#BA68C8#AB47BC#9C27B0#8E24AA#7B1FA2#6A1B9A#4A148C#EA80FC#E040FB#D500F9#AA00FF",
      )),
      (e.mui.deeppurple = a(
        "#EDE7F6#D1C4E9#B39DDB#9575CD#7E57C2#673AB7#5E35B1#512DA8#4527A0#311B92#B388FF#7C4DFF#651FFF#6200EA",
      )),
      (e.mui.indigo = a(
        "#E8EAF6#C5CAE9#9FA8DA#7986CB#5C6BC0#3F51B5#3949AB#303F9F#283593#1A237E#8C9EFF#536DFE#3D5AFE#304FFE",
      )),
      (e.mui.blue = a(
        "#E3F2FD#BBDEFB#90CAF9#64B5F6#64B5F6#2196F3#1E88E5#1976D2#1565C0#0D47A1#82B1FF#448AFF#2979FF#2962FF",
      )),
      (e.mui.lightblue = a(
        "#E1F5FE#B3E5FC#81D4FA#4FC3F7#29B6F6#03A9F4#039BE5#0288D1#0277BD#01579B#80D8FF#40C4FF#00B0FF#0091EA",
      )),
      (e.mui.cyan = a(
        "#E0F7FA#B2EBF2#80DEEA#4DD0E1#26C6DA#00BCD4#00ACC1#0097A7#00838F#006064#84FFFF#18FFFF#00E5FF#00B8D4",
      )),
      (e.mui.teal = a(
        "#E0F2F1#B2DFDB#80CBC4#4DB6AC#26A69A#009688#00897B#00796B#00695C#004D40#A7FFEB#64FFDA#1DE9B6#00BFA5",
      )),
      (e.mui.green = a(
        "#E8F5E9#C8E6C9#A5D6A7#81C784#66BB6A#4CAF50#43A047#388E3C#2E7D32#1B5E20#B9F6CA#69F0AE#00E676#00C853",
      )),
      (e.mui.lightgreen = a(
        "#F1F8E9#DCEDC8#C5E1A5#AED581#9CCC65#8BC34A#7CB342#689F38#558B2F#33691E#CCFF90#B2FF59#76FF03#64DD17",
      )),
      (e.mui.lime = a(
        "#F9FBE7#F0F4C3#E6EE9C#DCE775#D4E157#CDDC39#C0CA33#AFB42B#9E9D24#827717#F4FF81#EEFF41#C6FF00#AEEA00",
      )),
      (e.mui.yellow = a(
        "#FFFDE7#FFF9C4#FFF59D#FFF176#FFEE58#FFEB3B#FDD835#FBC02D#F9A825#F57F17#FFFF8D#FFFF00#FFEA00#FFD600",
      )),
      (e.mui.amber = a(
        "#FFF8E1#FFECB3#FFE082#FFD54F#FFCA28#FFC107#FFB300#FFA000#FF8F00#FF6F00#FFE57F#FFD740#FFC400#FFAB00",
      )),
      (e.mui.orange = a(
        "#FFF3E0#FFE0B2#FFCC80#FFB74D#FFA726#FF9800#FB8C00#F57C00#EF6C00#E65100#FFD180#FFAB40#FF9100#FF6D00",
      )),
      (e.mui.deeporange = a(
        "#FBE9E7#FFCCBC#FFAB91#FF8A65#FF7043#FF5722#F4511E#E64A19#D84315#BF360C#FF9E80#FF6E40#FF3D00#DD2C00",
      )),
      (e.mui.brown = a(
        "#EFEBE9#D7CCC8#BCAAA4#A1887F#8D6E63#795548#6D4C41#5D4037#4E342E#3E2723",
      )),
      (e.mui.grey = a(
        "#FAFAFA#F5F5F5#EEEEEE#E0E0E0#BDBDBD#9E9E9E#757575#616161#424242#212121",
      )),
      (e.mui.bluegrey = a(
        "#ECEFF1#CFD8DC#B0BEC5#90A4AE#78909C#607D8B#546E7A#455A64#37474F#263238",
      )),
      (e.flat.turquoise = '#1abc9c'),
      (e.flat.greensea = '#16a085'),
      (e.flat.sunflower = '#f1c40f'),
      (e.flat.orange = '#f39c12'),
      (e.flat.emerland = '#2ecc71'),
      (e.flat.nephritis = '#27ae60'),
      (e.flat.carrot = '#e67e22'),
      (e.flat.pumpkin = '#d35400'),
      (e.flat.peterriver = '#3498db'),
      (e.flat.belizehole = '#2980b9'),
      (e.flat.alizarin = '#e74c3c'),
      (e.flat.pomegranate = '#c0392b'),
      (e.flat.amethyst = '#9b59b6'),
      (e.flat.wisteria = '#8e44ad'),
      (e.flat.clouds = '#ecf0f1'),
      (e.flat.silver = '#bdc3c7'),
      (e.flat.wetasphalt = '#34495e'),
      (e.flat.midnightblue = '#2c3e50'),
      (e.flat.concrete = '#95a5a6'),
      (e.flat.asbestos = '#7f8c8d'),
      (e.importMUIColors = function () {
        for (let t in e.mui) e.mui.hasOwnProperty(t) && (window[t] = e.mui[t]);
      });
    }),
    (e.exports = a);
  },
  function (e, t, n) {
    let r;
    !(function (n) {
      let a;
      var i;
      var o = 'hasOwnProperty';
      var l = /[\.\/]/;
      var s = /\s*,\s*/;
      var u = function (e, t) {
        return e - t;
      };
      var c = { n: {} };
      var d = function () {
        for (let e = 0, t = this.length; e < t; e++) if ('undefined' !== typeof this[e]) return this[e];
      };
      var f = function () {
        for (let e = this.length; --e;) if ('undefined' !== typeof this[e]) return this[e];
      };
      var p = Object.prototype.toString;
      var h = String;
      var m =          Array.isArray
          || function (e) {
            return e instanceof Array || '[object Array]' == p.call(e);
          };
      var g = function e(t, n) {
        let r;
        var o = i;
        var l = Array.prototype.slice.call(arguments, 2);
        var s = e.listeners(t);
        var c = 0;
        var p = [];
        var h = {};
        var m = [];
        var g = a;
        (m.firstDefined = d), (m.lastDefined = f), (a = t), (i = 0);
        for (var v = 0, b = s.length; v < b; v++) 'zIndex' in s[v]
              && (p.push(s[v].zIndex), s[v].zIndex < 0 && (h[s[v].zIndex] = s[v]));
        for (p.sort(u); p[c] < 0;) if (((r = h[p[c++]]), m.push(r.apply(n, l)), i)) return (i = o), m;
        for (v = 0; v < b; v++) {if ('zIndex' in (r = s[v])) if (r.zIndex == p[c]) {
                if ((m.push(r.apply(n, l)), i)) break;
                do {
                  if (((r = h[p[++c]]) && m.push(r.apply(n, l)), i)) break;
                } while (r);
              } else h[r.zIndex] = r;
            else if ((m.push(r.apply(n, l)), i)) break;}
        return (i = o), (a = g), m;
      };
      (g._events = c),
      (g.listeners = function (e) {
        let t;
        var n;
        var r;
        var a;
        var i;
        var o;
        var s;
        var u;
        var d = m(e) ? e : e.split(l);
        var f = c;
        var p = [f];
        var h = [];
        for (a = 0, i = d.length; a < i; a++) {
          for (u = [], o = 0, s = p.length; o < s; o++) for (n = [(f = p[o].n)[d[a]], f['*']], r = 2; r--;) (t = n[r]) && (u.push(t), (h = h.concat(t.f || [])));
          p = u;
        }
        return h;
      }),
      (g.separator = function (e) {
        e
          ? ((e = `[${  e = h(e).replace(/(?=[\.\^\]\[\-])/g, '\\')  }]`),
          (l = new RegExp(e)))
          : (l = /[\.\/]/);
      }),
      (g.on = function (e, t) {
        if (typeof t !== 'function') return function () {};
        for (
          let n = m(e) ? (m(e[0]) ? e : [e]) : h(e).split(s),
            r = 0,
            a = n.length;
          r < a;
          r++
        ) {!(function (e) {
            for (
              var n, r = m(e) ? e : h(e).split(l), a = c, i = 0, o = r.length;
              i < o;
              i++
            ) a =                  ((a = a.n).hasOwnProperty(r[i]) && a[r[i]])
                  || (a[r[i]] = { n: {} });
            for (a.f = a.f || [], i = 0, o = a.f.length; i < o; i++) if (a.f[i] == t) {
                n = !0;
                break;
              }
            !n && a.f.push(t);
          }(n[r]));}
        return function (e) {
          +e == +e && (t.zIndex = +e);
        };
      }),
      (g.f = function (e) {
        let t = [].slice.call(arguments, 1);
        return function () {
          g.apply(
            null,
            [e, null].concat(t).concat([].slice.call(arguments, 0)),
          );
        };
      }),
      (g.stop = function () {
        i = 1;
      }),
      (g.nt = function (e) {
        let t = m(a) ? a.join('.') : a;
        return e
          ? new RegExp(`(?:\\.|\\/|^)${  e  }(?:\\.|\\/|$)`).test(t)
          : t;
      }),
      (g.nts = function () {
        return m(a) ? a : a.split(l);
      }),
      (g.off = g.unbind = function (e, t) {
        if (e) {
          let n = m(e) ? (m(e[0]) ? e : [e]) : h(e).split(s);
          if (n.length > 1) for (var r = 0, a = n.length; r < a; r++) g.off(n[r], t);
          else {
            n = m(e) ? e : h(e).split(l);
            let i;
            var u;
            var d;
            var f;
            var p;
            var v = [c];
            var b = [];
            for (r = 0, a = n.length; r < a; r++) {for (f = 0; f < v.length; f += d.length - 2) {
                if (((d = [f, 1]), (i = v[f].n), '*' != n[r])) i[n[r]]
                      && (d.push(i[n[r]]), b.unshift({ n: i, name: n[r] }));
                else for (u in i) i[o](u) && (d.push(i[u]), b.unshift({ n: i, name: u }));
                v.splice.apply(v, d);
              }}
            for (r = 0, a = v.length; r < a; r++) {for (i = v[r]; i.n;) {
                if (t) {
                  if (i.f) {
                    for (f = 0, p = i.f.length; f < p; f++) if (i.f[f] == t) {
                        i.f.splice(f, 1);
                        break;
                      }
                    !i.f.length && delete i.f;
                  }
                  for (u in i.n) if (i.n[o](u) && i.n[u].f) {
                      var y = i.n[u].f;
                      for (f = 0, p = y.length; f < p; f++) if (y[f] == t) {
                          y.splice(f, 1);
                          break;
                        }
                      !y.length && delete i.n[u].f;
                    }
                } else for (u in (delete i.f, i.n)) i.n[o](u) && i.n[u].f && delete i.n[u].f;
                i = i.n;
              }}
            e: for (r = 0, a = b.length; r < a; r++) {
              for (u in (i = b[r]).n[i.name].f) continue e;
              for (u in i.n[i.name].n) continue e;
              delete i.n[i.name];
            }
          }
        } else g._events = c = { n: {} };
      }),
      (g.once = function (e, t) {
        return g.on(e, function n() {
          return g.off(e, n), t.apply(this, arguments);
        });
      }),
      (g.version = '0.5.4'),
      (g.toString = function () {
        return 'You are running Eve 0.5.4';
      }),
      (n.eve = g),
      e.exports
        ? (e.exports = g)
        : void 0
              === (r = function () {
                return g;
              }.apply(t, [])) || (e.exports = r);
    }('undefined' !== typeof window ? window : this));
  },
  function (e, t, n) {
    

    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    const a = r(n(21));
    var i = r(n(8));
    var o = n(22);
    var l = {
      svg: {
        lib: a.default,
        pathInitial:
            'M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z',
        pathOpen:
            'M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z',
        animate(e) {
          var t = 0;
              var n = this.pathOpen.split(";");
              var r = n.length;
              var a = window.mina;
          !(function i() {
            t > r - 1
                || (e.animate(
                  { path: n[t] },
                  t === 0 ? 400 : 500,
                  t === 0 ? a.easein : a.elastic,
                  () => {
                    i();
                  }
                ),
                t++);
          }());
        },
      },
      morphShape(e, t, n) {
        return {
          position: 'absolute',
          width: '100%',
          height: '100%',
          right: n ? 'inherit' : 0,
          left: n ? 0 : 'inherit',
          MozTransform: n ? 'rotateY(180deg)' : 'rotateY(0deg)',
          MsTransform: n ? 'rotateY(180deg)' : 'rotateY(0deg)',
          OTransform: n ? 'rotateY(180deg)' : 'rotateY(0deg)',
          WebkitTransform: n ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transform: n ? 'rotateY(180deg)' : 'rotateY(0deg)'
        };
      },
      menuWrap(e, t, n) {
        return {
          MozTransform: e
            ? 'translate3d(0, 0, 0)'
            : n
              ? 'translate3d(100%, 0, 0)'
              : 'translate3d(-100%, 0, 0)',
          MsTransform: e
            ? 'translate3d(0, 0, 0)'
            : n
              ? 'translate3d(100%, 0, 0)'
              : 'translate3d(-100%, 0, 0)',
          OTransform: e
            ? 'translate3d(0, 0, 0)'
            : n
              ? 'translate3d(100%, 0, 0)'
              : 'translate3d(-100%, 0, 0)',
          WebkitTransform: e
            ? 'translate3d(0, 0, 0)'
            : n
              ? 'translate3d(100%, 0, 0)'
              : 'translate3d(-100%, 0, 0)',
          transform: e
            ? 'translate3d(0, 0, 0)'
            : n
              ? 'translate3d(100%, 0, 0)'
              : 'translate3d(-100%, 0, 0)',
          transition: e ? 'transform 0.4s 0s' : 'transform 0.4s'
        };
      },
      menu(e, t, n) {
        var r = (0, o.pxToNum)(t) - 140;
        return {
          position: 'fixed',
          MozTransform: e
            ? ''
            : n
              ? 'translate3d(' + r + ', 0, 0)'
              : 'translate3d(-' + r + ', 0, 0)',
          MsTransform: e
            ? ''
            : n
              ? 'translate3d(' + r + ', 0, 0)'
              : 'translate3d(-' + r + ', 0, 0)',
          OTransform: e
            ? ''
            : n
              ? 'translate3d(' + r + ', 0, 0)'
              : 'translate3d(-' + r + ', 0, 0)',
          WebkitTransform: e
            ? ''
            : n
              ? 'translate3d(' + r + ', 0, 0)'
              : 'translate3d(-' + r + ', 0, 0)',
          transform: e
            ? ''
            : n
              ? 'translate3d(' + r + ', 0, 0)'
              : 'translate3d(-' + r + ', 0, 0)',
          transition: e
            ? 'opacity 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27)'
            : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
          opacity: e ? 1 : 0,
        };
      },
      item(e, t, n, r) {
        var a = (0, o.pxToNum)(t) - 140;
        return {
          MozTransform: e
            ? 'translate3d(0, 0, 0)'
            : n
              ? 'translate3d(' + a + ', 0, 0)'
              : 'translate3d(-' + a + ', 0, 0)',
          MsTransform: e
            ? 'translate3d(0, 0, 0)'
            : n
              ? 'translate3d(' + a + ', 0, 0)'
              : 'translate3d(-' + a + ', 0, 0)',
          OTransform: e
            ? 'translate3d(0, 0, 0)'
            : n
              ? 'translate3d(' + a + ', 0, 0)'
              : 'translate3d(-' + a + ', 0, 0)',
          WebkitTransform: e
            ? 'translate3d(0, 0, 0)'
            : n
              ? 'translate3d(' + a + ', 0, 0)'
              : 'translate3d(-' + a + ', 0, 0)',
          transform: e
            ? 'translate3d(0, 0, 0)'
            : n
              ? 'translate3d(' + a + ', 0, 0)'
              : 'translate3d(-' + a + ', 0, 0)',
          transition: e
            ? 'opacity 0.3s 0.4s, transform 0.3s 0.4s'
            : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
          opacity: e ? 1 : 0,
        };
      },
      closeButton(e, t, n) {
        var r = (0, o.pxToNum)(t) - 140;
        return {
          MozTransform: e
            ? 'translate3d(0, 0, 0)'
            : n
              ? 'translate3d(' + r + ', 0, 0)'
              : 'translate3d(-' + r + ', 0, 0)',
          MsTransform: e
            ? 'translate3d(0, 0, 0)'
            : n
              ? 'translate3d(' + r + ', 0, 0)'
              : 'translate3d(-' + r + ', 0, 0)',
          OTransform: e
            ? 'translate3d(0, 0, 0)'
            : n
              ? 'translate3d(' + r + ', 0, 0)'
              : 'translate3d(-' + r + ', 0, 0)',
          WebkitTransform: e
            ? 'translate3d(0, 0, 0)'
            : n
              ? 'translate3d(' + r + ', 0, 0)'
              : 'translate3d(-' + r + ', 0, 0)',
          transform: e
            ? 'translate3d(0, 0, 0)'
            : n
              ? 'translate3d(' + r + ', 0, 0)'
              : 'translate3d(-' + r + ', 0, 0)',
          transition: e
            ? 'opacity 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27)'
            : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
          opacity: e ? 1 : 0,
        };
      },
    };
    (t.default = (0, i.default)(l)), (e.exports = t.default);
  },
  function (e, t, n) {
    

    Object.defineProperty(t, '__esModule', { value: !0 });
    let r;
    var a = n(8);
    var i = (r = a) && r.__esModule ? r : { default: r };
    (t.default = (0, i.default)({
      pageWrap(e, t, n) {
        return {
          MozTransform: e
            ? ''
            : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
          MsTransform: e
            ? ''
            : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
          OTransform: e
            ? ''
            : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
          WebkitTransform: e
            ? ''
            : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
          transform: e
            ? ''
            : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
          transition: 'all 0.5s'
        };
      },
      outerContainer(e) {
        return { overflow: e ? '' : 'hidden' };
      },
    })),
    (e.exports = t.default);
  },
  function (e, t, n) {
    

    Object.defineProperty(t, '__esModule', { value: !0 });
    let r;
    var a = n(8);
    var i = (r = a) && r.__esModule ? r : { default: r };
    (t.default = (0, i.default)({
      pageWrap(e, t, n) {
        return {
          MozTransform: e
            ? ''
            : n
              ? 'translate3d(-' + t + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + t + ', 0, 0) rotateY(-15deg)',
          MsTransform: e
            ? ''
            : n
              ? 'translate3d(-' + t + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + t + ', 0, 0) rotateY(-15deg)',
          OTransform: e
            ? ''
            : n
              ? 'translate3d(-' + t + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + t + ', 0, 0) rotateY(-15deg)',
          WebkitTransform: e
            ? ''
            : n
              ? 'translate3d(-' + t + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + t + ', 0, 0) rotateY(-15deg)',
          transform: e
            ? ''
            : n
              ? 'translate3d(-' + t + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + t + ', 0, 0) rotateY(-15deg)',
          transformOrigin: n ? '100% 50%' : '0% 50%',
          transformStyle: 'preserve-3d',
          transition: 'all 0.5s'
        };
      },
      outerContainer(e) {
        return { perspective: '1500px', overflow: e ? '' : 'hidden' };
      },
    })),
    (e.exports = t.default);
  },
  function (e, t, n) {
    

    Object.defineProperty(t, '__esModule', { value: !0 });
    let r;
    var a = n(8);
    var i = (r = a) && r.__esModule ? r : { default: r };
    (t.default = (0, i.default)({
      pageWrap(e, t) {
        return {
          MozTransform: e ? '' : 'translate3d(0, 0, -' + t + ')',
          MsTransform: e ? '' : 'translate3d(0, 0, -' + t + ')',
          OTransform: e ? '' : 'translate3d(0, 0, -' + t + ')',
          WebkitTransform: e ? '' : 'translate3d(0, 0, -' + t + ')',
          transform: e ? '' : 'translate3d(0, 0, -' + t + ')',
          transformOrigin: '100%',
          transformStyle: 'preserve-3d',
          transition: 'all 0.5s'
        };
      },
      outerContainer() {
        return { perspective: '1500px' };
      },
    })),
    (e.exports = t.default);
  },
  function (e, t, n) {
    

    Object.defineProperty(t, '__esModule', { value: !0 });
    let r;
    var a = n(8);
    var i = (r = a) && r.__esModule ? r : { default: r };
    (t.default = (0, i.default)({
      pageWrap(e, t, n) {
        return {
          MozTransform: e
            ? ''
            : n
              ? 'translate3d(-100px, 0, -600px) rotateY(20deg)'
              : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
          MsTransform: e
            ? ''
            : n
              ? 'translate3d(-100px, 0, -600px) rotateY(20deg)'
              : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
          OTransform: e
            ? ''
            : n
              ? 'translate3d(-100px, 0, -600px) rotateY(20deg)'
              : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
          WebkitTransform: e
            ? ''
            : n
              ? 'translate3d(-100px, 0, -600px) rotateY(20deg)'
              : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
          transform: e
            ? ''
            : n
              ? 'translate3d(-100px, 0, -600px) rotateY(20deg)'
              : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
          transformStyle: 'preserve-3d',
          transition: 'all 0.5s',
          overflow: e ? '' : 'hidden'
        };
      },
      outerContainer(e) {
        return { perspective: '1500px', overflow: e ? '' : 'hidden' };
      },
    })),
    (e.exports = t.default);
  },
  function (e, t, n) {
    

    Object.defineProperty(t, '__esModule', { value: !0 });
    let r;
    var a = n(8);
    var i = (r = a) && r.__esModule ? r : { default: r };
    (t.default = (0, i.default)({
      menuWrap(e) {
        return {
          MozTransform: e ? '' : 'translate3d(0, -100%, 0)',
          MsTransform: e ? '' : 'translate3d(0, -100%, 0)',
          OTransform: e ? '' : 'translate3d(0, -100%, 0)',
          WebkitTransform: e ? '' : 'translate3d(0, -100%, 0)',
          transform: e ? '' : 'translate3d(0, -100%, 0)',
          transition: 'all 0.5s ease-in-out'
        };
      },
      pageWrap(e, t, n) {
        return {
          MozTransform: e
            ? ''
            : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
          MsTransform: e
            ? ''
            : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
          OTransform: e
            ? ''
            : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
          WebkitTransform: e
            ? ''
            : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
          transform: e
            ? ''
            : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
          transition: 'all 0.5s'
        };
      },
      outerContainer(e) {
        return {
          perspective: '1500px',
          perspectiveOrigin: '0% 50%',
          overflow: e ? '' : 'hidden'
        };
      },
    })),
    (e.exports = t.default);
  },
  function (e, t, n) {
    

    Object.defineProperty(t, '__esModule', { value: !0 });
    let r;
    var a = n(8);
    var i = (r = a) && r.__esModule ? r : { default: r };
    (t.default = (0, i.default)({
      menuWrap(e, t, n) {
        return {
          visibility: e ? 'visible' : 'hidden',
          MozTransform: 'translate3d(0, 0, 0)',
          MsTransform: 'translate3d(0, 0, 0)',
          OTransform: 'translate3d(0, 0, 0)',
          WebkitTransform: 'translate3d(0, 0, 0)',
          transform: 'translate3d(0, 0, 0)',
          zIndex: 1e3,
        };
      },
      overlay(e, t, n) {
        return {
          zIndex: 1400,
          MozTransform: e
            ? n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)'
            : 'translate3d(0, 0, 0)',
          MsTransform: e
            ? n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)'
            : 'translate3d(0, 0, 0)',
          OTransform: e
            ? n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)'
            : 'translate3d(0, 0, 0)',
          WebkitTransform: e
            ? n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)'
            : 'translate3d(0, 0, 0)',
          transform: e
            ? n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)'
            : 'translate3d(0, 0, 0)',
          transition: 'all 0.5s',
          visibility: e ? 'visible' : 'hidden'
        };
      },
      pageWrap(e, t, n) {
        return {
          MozTransform: e
            ? ''
            : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
          MsTransform: e
            ? ''
            : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
          OTransform: e
            ? ''
            : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
          WebkitTransform: e
            ? ''
            : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
          transform: e
            ? ''
            : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
          transition: 'all 0.5s',
          zIndex: 1200,
          position: 'relative'
        };
      },
      burgerIcon(e, t, n) {
        return {
          MozTransform: e
            ? n
              ? 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(-' + t + ', 0, 0)'
            : 'translate3d(0, 0, 0)',
          MsTransform: e
            ? n
              ? 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(-' + t + ', 0, 0)'
            : 'translate3d(0, 0, 0)',
          OTransform: e
            ? n
              ? 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(-' + t + ', 0, 0)'
            : 'translate3d(0, 0, 0)',
          WebkitTransform: e
            ? n
              ? 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(-' + t + ', 0, 0)'
            : 'translate3d(0, 0, 0)',
          transform: e
            ? n
              ? 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(-' + t + ', 0, 0)'
            : 'translate3d(0, 0, 0)',
          transition: 'all 0.1s',
          position: 'relative',
          zIndex: 1300,
        };
      },
      outerContainer(e) {
        return { overflow: e ? '' : 'hidden' };
      },
    })),
    (e.exports = t.default);
  },
  function (e, t, n) {
    

    n.r(t);
    const r = n(0);
    var a = n.n(r);
    var i = n(15);
    var o = n.n(i);
    var l = (n(35), n(1));
    var s = n(2);
    function u(e, t) {
      return (
        t || (t = e.slice(0)),
        Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } }),
        )
      );
    }
    const c = n(3);
    var d = n(23);
    function f() {
      const e = u([
        '\n  @font-face {\n    font-family: \'HalloEuroboy\';\n    src: url(\'https://spectator-fonts.s3.amazonaws.com/HalloEuroboy.ttf\') format(\'truetype\');\n    font-weight: 400;\n    font-style: normal;\n  }\n  @import url("https://p.typekit.net/p.css?s=1&k=cdu0unr&ht=tk&f=35475.35476.35477.35478.35479&a=7799304&app=typekit&e=css");\n\n@font-face {\nfont-family:"basic-sans";\nsrc:url("https://use.typekit.net/af/d34176/00000000000000003b9b043b/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3") format("woff2"),url("https://use.typekit.net/af/d34176/00000000000000003b9b043b/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3") format("woff"),url("https://use.typekit.net/af/d34176/00000000000000003b9b043b/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3") format("opentype");\nfont-display:auto;font-style:italic;font-weight:600;\n}\n\n@font-face {\nfont-family:"basic-sans";\nsrc:url("https://use.typekit.net/af/fe293c/00000000000000003b9b043c/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff2"),url("https://use.typekit.net/af/fe293c/00000000000000003b9b043c/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff"),url("https://use.typekit.net/af/fe293c/00000000000000003b9b043c/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("opentype");\nfont-display:auto;font-style:normal;font-weight:600;\n}\n\n@font-face {\nfont-family:"basic-sans";\nsrc:url("https://use.typekit.net/af/1a9b5f/00000000000000003b9b043d/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/1a9b5f/00000000000000003b9b043d/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/1a9b5f/00000000000000003b9b043d/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");\nfont-display:auto;font-style:italic;font-weight:400;\n}\n\n@font-face {\nfont-family:"basic-sans";\nsrc:url("https://use.typekit.net/af/cc97f2/00000000000000003b9b043e/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/cc97f2/00000000000000003b9b043e/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/cc97f2/00000000000000003b9b043e/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");\nfont-display:auto;font-style:normal;font-weight:400;\n}\n\n@font-face {\nfont-family:"basic-sans";\nsrc:url("https://use.typekit.net/af/3f4c96/00000000000000003b9b043f/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("woff2"),url("https://use.typekit.net/af/3f4c96/00000000000000003b9b043f/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("woff"),url("https://use.typekit.net/af/3f4c96/00000000000000003b9b043f/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("opentype");\nfont-display:auto;font-style:italic;font-weight:300;\n}\n  body,\n  button {\n    font-family: \'basic-sans\', sans-serif !important; \n  }\n  div {\n    color: ',
        ';\n  }\n  h1 {\n    color: ',
        " !important;\n    font-family: 'HalloEuroboy', sans-serif;\n    font-size: 8rem;\n    font-weight: 400;\n    letter-spacing: 0.1em;\n    margin: 0;\n    @media (max-width: ",
        '){\n      font-size: 4rem;\n    }\n  }\n  h2 {\n    color: ',
        " !important;\n    font-family: 'HalloEuroboy', sans-serif;\n    font-size: 4.9rem;\n    font-weight: 300;\n    letter-spacing: 0.07em;\n    margin: 0;\n    @media (max-width: ",
        ') {\n      font-size: 2.6rem;\n    }\n\n\n  }\n  h3 {\n    color: ',
        " !important;\n    font-family: 'HalloEuroboy', sans-serif;\n    font-size: 2.2rem;\n    font-weight: 300;\n    letter-spacing: 0.06em;\n    margin: 0;\n\n    @media (min-width: ",
        '){\n      font-size: 3rem;\n    }\n\n    @media (min-width: ',
        '){\n      font-size: 4rem;\n    }\n  }\n  h4 {\n    color: ',
        ";\n    font-size: 1.6rem;\n    font-weight: 300;\n    font-family: 'HalloEuroboy', sans-serif;\n    margin: 0;\n    @media (min-width: ",
        "){\n      font-size: 2.7rem;\n    }\n  }\n  h5 {\n    @import url('https://fonts.googleapis.com/css?family=Raleway:400,700,800');\n    font-family: 'Raleway', sans-serif;\n    color: ",
        ';\n    font-size: 1.5rem;\n    font-weight: 400;\n    margin: 0;\n  }\n  h6 {\n    color: ',
        " !important;\n    font-size: 1rem;\n    font-weight: 300; \n    margin: 0;\n    font-family: 'HalloEuroboy', sans-serif;\n\n    @media (min-width: ",
        '){\n      font-size: 1.5rem;\n    }\n    @media (min-width: ',
        '){\n      font-size: 1.8rem;\n\n    }\n  }\n  p {\n    color: ',
        ' !important;\n    font-size: 0.8rem;\n    font-weight: 700;\n    margin: 0;\n    @media (min-width: ',
        '){\n      font-size: 1rem;\n    }\n    @media (min-width: ',
        '){\n      font-size: 1.3rem;\n\n    }\n  }\n\n  a {\n    color: ',
        ' !important;\n    font-size: 0.8rem;\n    font-weight: 400;\n    margin: 0;\n    @media (min-width: ',
        '){\n      font-size: 1rem;\n    }\n    @media (min-width: ',
        '){\n      font-size: 1.3rem;\n\n    }\n    \n  }\n\n  b {\n    color: ',
        ' !important  ;\n    font-size: 1.4rem;\n    font-weight: 700;\n    margin: 0;\n  }\n',
      ]);
      return (
        (f = function () {
          return e;
        }),
        e
      );
    }
    const p = {
      black: '#000000',
      white: '#FFFFFF',
      purple: '#9193C8',
      orange: '#EC7100',
      navy: '#242C49',
      yellow: '#FFD05F',
      darkGray: '#555555',
      mediumGray: '#AAAAAA',
      lightGray: '#DDDDDD',
      shadow: 'rgba(0, 0, 0, 0.3) 0 0 10px',
      grayBorder: 'border: 1px #DDDDDD solid; border-radius: 10px;',
      borderRadius: '10px',
      small: '576px',
      medium: '768px',
      large: '992px',
      extraLarge: '1200px',
    };
    var h = Object(l.b)(
      f(),
      (e) => e.theme.darkGray,
      (e) => e.theme.navy,
      p.small,
      (e) => e.theme.navy,
      p.medium,
      (e) => e.theme.navy,
      p.large,
      p.extralarge,
      (e) => e.theme.orange,
      p.extraLarge,
      (e) => e.theme.navy,
      (e) => e.theme.navy,
      p.large,
      p.extraLarge,
      (e) => e.theme.navy,
      p.large,
      p.extraLarge,
      (e) => e.theme.navy,
      p.large,
      p.extraLarge,
      (e) => e.theme.navy
    );
    function m() {
      const e = u([
        '\n  font-size: 2.2vh;\n  font-weight: bold;\n\n  &:hover {\n    color: ',
        ';\n  }\n\n  @media (max-width: ',
        ') {\n    text-shadow: 2px 2px 4px white;\n    margin-right: 2.5vw;\n    font-size: 3vh;\n  }\n',
      ]);
      return (
        (m = function () {
          return e;
        }),
        e
      );
    }
    function g() {
      const e = u([
        '\n  padding-bottom: 3vh;\n  text-align: right;\n  padding-right: 1vw;\n  color: red;\n  @media (max-width: ',
        ') {\n    padding-bottom: 2vh;\n  }\n',
      ]);
      return (
        (g = function () {
          return e;
        }),
        e
      );
    }
    function v() {
      const e = u([
        '\n  height: auto;\n  border: 2px solid;\n  border-color: ',
        ';\n  margin-bottom: 2vh;\n',
      ]);
      return (
        (v = function () {
          return e;
        }),
        e
      );
    }
    function b() {
      const e = u([
        '\n  display: flex;\n  flex-direction: row;\n  height: auto;\n  width: auto;\n  margin-top: 5vh;\n  margin-right: 4vw;\n  justify-content: flex-end;\n  @media (max-width: ',
        ') {\n    margin-top: 5vh;\n    margin-right: 8vw;\n    padding-bottom: 3vh;\n  }\n',
      ]);
      return (
        (b = function () {
          return e;
        }),
        e
      );
    }
    function y() {
      const e = u(['\n  display: flex;\n  flex-direction: column;\n']);
      return (
        (y = function () {
          return e;
        }),
        e
      );
    }
    const w = l.c.div(y());
    var x = l.c.div(b(), p.large);
    var S = l.c.div(v(), p.yellow);
    var k = l.c.div(g(), p.large);
    var E = l.c.p(m(), p.purple, p.medium);
    var C = function (e) {
      let t = e.entries;
      return a.a.createElement(
        x,
        null,
        a.a.createElement(
          w,
          null,
          t.map((e) => {
            var t = '#'.concat(e.id);
                var n = a.a.createElement(
                d.HashLink,
                {
                  smooth: !0,
                  to: t,
                  style: { textDecorationLine: 'none' },
                  id: t,
                },
                a.a.createElement(E, null, e.title),
              );
            return (
              "print" === e.id
                ? (n = a.a.createElement(
                  "a",
                  {
                    href:
                          'https://drive.google.com/file/d/1pQH9_sq7CxXspCQGbp6iwN0aRc6Of5pg/view',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    style: { textDecoration: 'none' },
                  },
                  " ",
                  a.a.createElement(E, null, e.title),
                ))
                : 'maps' === e.id
                    && (n = a.a.createElement(
                      'a',
                      {
                        href:
                          'https://www.columbiaspectator.com/orientation-2018/campus-maps/',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        style: { textDecoration: 'none' },
                      },
                      ' ',
                      a.a.createElement(E, null, e.title),
                    )),
              a.a.createElement(k, null, n)
            );
          }),
        ),
        a.a.createElement(S, null),
      );
    };
    C.defaultProps = { entries: null };
    const T = C;
    function O() {
      const e = u(['\n  margin-top: -2vh;\n']);
      return (
        (O = function () {
          return e;
        }),
        e
      );
    }
    function P() {
      const e = u([
        '\n  @media (max-width: ',
        ') {\n    margin-top: 5vh;\n  }\n',
      ]);
      return (
        (P = function () {
          return e;
        }),
        e
      );
    }
    function A() {
      const e = u([
        '\n  margin-top: 0.5rem;\n  font-style: italic;\n  font-weight: lighter;\n  @media (max-width: ',
        ') {\n    text-shadow: 2px 2px 4px white;\n  }\n',
      ]);
      return (
        (A = function () {
          return e;
        }),
        e
      );
    }
    function M() {
      const e = u([
        '\n  width: 100%;\n  height: auto;\n  background-image: url(',
        ');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n',
      ]);
      return (
        (M = function () {
          return e;
        }),
        e
      );
    }
    function _() {
      const e = u([
        '\n  display: flex;\n  flex-direction: column;\n  margin: 3.5vh 5vw 0vh 5vw;\n  @media (max-width: ',
        ') {\n    margin-top: 0vh;\n    text-align: center;\n  }\n',
      ]);
      return (
        (_ = function () {
          return e;
        }),
        e
      );
    }
    function N() {
      const e = u(['\n  display: flex;\n  flex-direction: column;\n']);
      return (
        (N = function () {
          return e;
        }),
        e
      );
    }
    function F() {
      const e = u([
        '\n  min-height: 100vh;\n  display: flex;\n  flex-direction: row;\n',
      ]);
      return (
        (F = function () {
          return e;
        }),
        e
      );
    }
    function D() {
      const e = u([
        '\n  min-height: 100vh;\n  @media (max-width: ',
        ') {\n    background-image: url(',
        ');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n  }\n  overflow: hidden;\n',
      ]);
      return (
        (D = function () {
          return e;
        }),
        e
      );
    }
    const I = l.c.div(
      D(),
      p.large,
      'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/ZNKTNLGKAFHUTFSIXC4HFO3OR4.jpeg',
    );
    var j = l.c.div(F());
    var R = l.c.div(N());
    var z = l.c.div(_(), p.large);
    var B = l.c.div(
      M(),
      "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/KPXXJFOVYRHR5HPKJ76CND2574.jpg",
    );
    var L = l.c.p(A(), p.large);
    var U = l.c.h1(P(), p.large);
    var H = l.c.h2(O());
    var W = function (e) {
      var t = e.tocEntries;
      return a.a.createElement(
        "div",
        null,
        a.a.createElement(
          c.Desktop,
          null,
          a.a.createElement(
            I,
            null,
            a.a.createElement(
              j,
              null,
              a.a.createElement(
                R,
                null,
                a.a.createElement(
                  z,
                  null,
                  a.a.createElement(U, null, 'WELCOME'),
                  a.a.createElement(H, null, 'CLASS OF 2024'),
                  a.a.createElement(
                    L,
                    null,
                    "Select an option below to explore your orientation guide",
                  ),
                ),
                a.a.createElement(T, { entries: t }),
              ),
              a.a.createElement(B, null),
            ),
          ),
        ),
        a.a.createElement(
          c.MobileAndTablet,
          null,
          a.a.createElement(
            I,
            null,
            a.a.createElement(
              z,
              null,
              a.a.createElement(U, null, 'WELCOME'),
              a.a.createElement(H, null, 'CLASS OF 2024'),
              a.a.createElement(
                L,
                null,
                "Select an option below to explore your orientation guide",
              ),
            ),
            a.a.createElement(T, { entries: t }),
          ),
        ),
      );
    };
    var V = n(13);
    function q() {
      const e = u([
        '\n  padding: 3rem;\n  color: ',
        ';\n  @media (max-width: ',
        ') {\n    font-size: 7vw;\n  }\n',
      ]);
      return (
        (q = function () {
          return e;
        }),
        e
      );
    }
    function G() {
      const e = u([
        '\n  border: 0.2rem solid;\n  width: 98%;\n  height: 98%;\n  position: absolute;\n  left: 5%;\n  border-color: ',
        ';\n\n  @media (max-width: ',
        ') {\n    left: 3%;\n    width: 98%;\n    height: 98%;\n  }\n',
      ]);
      return (
        (G = function () {
          return e;
        }),
        e
      );
    }
    function Y() {
      const e = u([
        '\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 3%;\n  background: ',
        ';\n\n  &:hover {\n    top: 1.5%;\n    left: 3.5%;\n  }\n\n  @media (max-width: ',
        ') {\n    width: 100%;\n    height: 100%;\n    top: 7%;\n\n    &:hover {\n      top: 3%;\n      left: 1%;\n    }\n  }\n',
      ]);
      return (
        (Y = function () {
          return e;
        }),
        e
      );
    }
    function K() {
      const e = u([
        '\n  width: 20vw;\n  height: 30vw;\n  position: relative;\n  margin: 1rem 0rem;\n\n  @media (max-width: ',
        ') {\n    width: 80vw;\n    height: 25vw;\n  }\n',
      ]);
      return (
        (K = function () {
          return e;
        }),
        e
      );
    }
    const Q = l.c.div(K(), p.medium);
    var $ = l.c.div(
      Y(),
      function (e) {
        return e.color;
      },
      p.medium,
    );
    var X = l.c.div(
      G(),
      function (e) {
        return e.shadowColor;
      },
      p.medium,
    );
    var Z = l.c.h4(
      q(),
      function (e) {
        return e.textColor;
      },
      p.medium,
    );
    var J = function (e) {
      let t = e.title;
      var n = e.url;
      var r = e.color;
      var i = e.shadowColor;
      var o = e.textColor;
      return a.a.createElement(
        Q,
        null,
        a.a.createElement(X, { shadowColor: i }),
        a.a.createElement(
          $,
          { color: r },
          a.a.createElement(
            'a',
            {
              href: n,
              target: '_blank',
              rel: 'noopener noreferrer',
              style: { textDecoration: 'none' },
            },
            a.a.createElement(Z, { textColor: o }, t),
          ),
        ),
      );
    };
    J.defaultProps = {
      color: '#f1bc9c',
      shadowColor: p.orange,
      textColor: 'white',
    };
    const ee = J;
    function te() {
      const e = u([
        '\n  display: flex;\n  flex-direction: row;\n  flex-wrap: no-wrap;\n  justify-content: space-around;\n  margin: 1.5rem;\n\n  @media (max-width: ',
        ') {\n    flex-direction: column;\n    align-items: center;\n  }\n',
      ]);
      return (
        (te = function () {
          return e;
        }),
        e
      );
    }
    const ne = l.c.div(te(), p.medium);
    var re = function (e) {
      var t = e.children;
      return a.a.createElement(V.ResponsiveComponent, { min: 768 }, t);
    };
    var ae = function (e) {
      let t = e.id;
      var n = e.buttons;
      var r = e.mobileButtons;
      return a.a.createElement(
        'div',
        null,
        a.a.createElement(
          re,
          null,
          a.a.createElement(
            ne,
            { id: t },
            n.map((e) => a.a.createElement(ee, {
                  title: e.title,
                  url: e.url,
                  color: e.color,
                  shadowColor: e.shadowColor,
                  textColor: e.textColor
                })),
          ),
        ),
        a.a.createElement(
          V.Mobile,
          null,
          a.a.createElement(
            ne,
            { id: t },
            r.map((e) => a.a.createElement(ee, {
                  title: e.title,
                  url: e.url,
                  color: e.color,
                  shadowColor: e.shadowColor,
                  textColor: e.textColor
                })),
          ),
        ),
      );
    };
    function ie() {
      const e = u([
        '\n  text-align: left;\n  padding: 0.7rem 1.2rem;\n  flex: 1 1 20%;\n\n  @media (max-width: ',
        ') {\n    padding: 1.1rem 0.7rem;\n  }\n',
      ]);
      return (
        (ie = function () {
          return e;
        }),
        e
      );
    }
    function oe() {
      const e = u([
        '\n  font-size: 2rem;\n  margin-bottom: 0.6rem;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  height: 7.5vh;\n  line-height: 4.5vh;\n  text-transform: uppercase;\n\n  @media (max-width: ',
        ') {\n    height: 3.5rem;\n    line-height: 2.3rem;\n  }\n',
      ]);
      return (
        (oe = function () {
          return e;
        }),
        e
      );
    }
    function le() {
      const e = u([
        '\n  text-align: left;\n  line-height: 1.5rem;\n  color: white !important \n  ;\n',
      ]);
      return (
        (le = function () {
          return e;
        }),
        e
      );
    }
    const se = l.c.p(le());
    var ue = l.c.h4(oe(), p.medium);
    var ce = l.c.div(ie(), p.medium);
    var de = function (e) {
      let t = e.title;
      var n = e.members;
      return a.a.createElement(
        ce,
        null,
        a.a.createElement(
          'div',
          { className: 'title' },
          a.a.createElement(ue, null, t),
        ),
        a.a.createElement(
          'div',
          null,
          n.map((e) => a.a.createElement(
                se,
                null,
                e.split(",")[0],
                ",",
                a.a.createElement("i", null, e.split(",")[1])
              )),
        ),
      );
    };
    function fe() {
      const e = u(['\n  color: white !important;\n']);
      return (
        (fe = function () {
          return e;
        }),
        e
      );
    }
    function pe() {
      const e = u([
        '\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  margin-top: 2rem;\n',
      ]);
      return (
        (pe = function () {
          return e;
        }),
        e
      );
    }
    function he() {
      const e = u([
        '\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex: 1 1 20%;\n  text-align: center;\n\n  @media (max-width: ',
        ') {\n    flex: 1 1 35%;\n  }\n',
      ]);
      return (
        (he = function () {
          return e;
        }),
        e
      );
    }
    function me() {
      const e = u([
        '\n  display: flex;\n  flex-direction: row;\n  align-items: ',
        ';\n  justify-content: ',
        ';\n  margin: 0vh 5vw 0vh 5vw;\n  flex-wrap: wrap;\n  width: 100%;\n\n  &::after {\n    content: "";\n    flex: auto;\n    width: 52vw;\n  }\n',
      ]);
      return (
        (me = function () {
          return e;
        }),
        e
      );
    }
    function ge() {
      const e = u(['\n  display: flex;\n  flex-direction: row;\n']);
      return (
        (ge = function () {
          return e;
        }),
        e
      );
    }
    function ve() {
      const e = u([
        '\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  background: ',
        ';\n  align-items: center;\n  padding: 1.5rem 2.5rem;\n\n  @media (max-width: ',
        ') {\n    padding: 1rem;\n  }\n',
      ]);
      return (
        (ve = function () {
          return e;
        }),
        e
      );
    }
    const be = l.c.div(ve(), p.navy, p.medium);
    var ye = l.c.div(ge());
    var we = l.c.div(
      me(),
      function (e) {
        return e.mobile ? 'stretch' : 'flex-start';
      },
      function (e) {
        return e.mobile ? 'space-around' : 'center';
      },
    );
    var xe = l.c.div(he(), p.medium);
    var Se = l.c.div(pe());
    var ke = l.c.h3(fe());
    var Ee = function (e) {
      let t = e.id;
      var n = e.staffInfo;
      var r = e.staffInfoMobile;
      return a.a.createElement(
        'div',
        null,
        a.a.createElement(
          c.Mobile,
          null,
          a.a.createElement(
            be,
            { id: t },
            a.a.createElement(
              ye,
              null,
              a.a.createElement(
                Se,
                null,
                a.a.createElement(ke, null, 'STAFF'),
              ),
            ),
            a.a.createElement(
              we,
              { mobile: !0 },
              a.a.createElement(
                xe,
                null,
                r.slice(0, Math.floor(n.length / 2)).map((e) => a.a.createElement(de, {
                      title: e.title,
                      members: e.members
                    })),
              ),
              a.a.createElement(
                xe,
                null,
                r
                  .slice(Math.floor(n.length / 2), n.length + 1)
                  .map((e) => a.a.createElement(de, {
                        title: e.title,
                        members: e.members
                      })),
              ),
            ),
          ),
        ),
        a.a.createElement(
          c.Tablet,
          null,
          a.a.createElement(
            be,
            { id: t },
            a.a.createElement(
              ye,
              null,
              a.a.createElement(
                Se,
                null,
                a.a.createElement(ke, null, 'STAFF'),
              ),
            ),
            a.a.createElement(
              we,
              null,
              a.a.createElement(
                xe,
                null,
                n.slice(0, Math.floor(n.length / 3)).map((e) => a.a.createElement(de, {
                      title: e.title,
                      members: e.members
                    })),
              ),
              a.a.createElement(
                xe,
                null,
                n
                  .slice(
                    Math.floor(n.length / 3),
                    Math.floor((n.length / 3) * 2 - 1),
                  )
                  .map((e) => a.a.createElement(de, {
                        title: e.title,
                        members: e.members
                      })),
              ),
              a.a.createElement(
                xe,
                null,
                n
                  .slice(Math.floor((n.length / 3) * 2 - 1), n.length + 1)
                  .map((e) => a.a.createElement(de, {
                        title: e.title,
                        members: e.members
                      })),
              ),
            ),
          ),
        ),
        a.a.createElement(
          c.Desktop,
          null,
          a.a.createElement(
            be,
            { id: t },
            a.a.createElement(
              ye,
              null,
              a.a.createElement(
                Se,
                null,
                a.a.createElement(ke, null, 'STAFF'),
              ),
            ),
            a.a.createElement(
              we,
              null,
              a.a.createElement(
                xe,
                null,
                n.slice(0, Math.floor(n.length / 4)).map((e) => a.a.createElement(de, {
                      title: e.title,
                      members: e.members
                    })),
              ),
              a.a.createElement(
                xe,
                null,
                n
                  .slice(Math.floor(n.length / 4), Math.floor(n.length / 2))
                  .map((e) => a.a.createElement(de, {
                        title: e.title,
                        members: e.members
                      })),
              ),
              a.a.createElement(
                xe,
                null,
                n
                  .slice(
                    Math.floor(n.length / 2),
                    Math.floor((n.length / 4) * 3),
                  )
                  .map((e) => a.a.createElement(de, {
                        title: e.title,
                        members: e.members
                      })),
              ),
              a.a.createElement(
                xe,
                null,
                n
                  .slice(Math.floor((n.length / 4) * 3), n.length + 1)
                  .map((e) => a.a.createElement(de, {
                        title: e.title,
                        members: e.members
                      })),
              ),
            ),
          ),
        ),
      );
    };
    function Ce() {
      const e = u([
        '\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: -5rem;\n  direction: rtl;\n  align-items: flex-start;\n\n  & > a {\n    box-sizing: border-box !important;\n    flex: 1 1 33%;\n    min-width: 20rem;\n    direction: ltr;\n    padding: 1rem;\n\n    @media only screen and (max-width: ',
        ') {\n      flex-basis: 100%;\n      min-width: 5rem;\n    }\n  }\n',
      ]);
      return (
        (Ce = function () {
          return e;
        }),
        e
      );
    }
    function Te() {
      const e = u([
        '\n  font-style: italic;\n  font-size: 1.5rem;\n\n  @media only screen and (max-width: ',
        ') {\n    font-size: 4vw; /* Will change with font change */\n    transform: translateY(0.8rem); /* Will change with font change */\n  }\n',
      ]);
      return (
        (Te = function () {
          return e;
        }),
        e
      );
    }
    function Oe() {
      const e = u([
        '\n  text-transform: uppercase;\n\n  @media only screen and (max-width: ',
        ') {\n    margin-right: -20vw; /* Will change with font change */\n  }\n',
      ]);
      return (
        (Oe = function () {
          return e;
        }),
        e
      );
    }
    function Pe() {
      const e = u([
        '\n  box-sizing: border-box !important;\n  display: none;\n  margin: auto 1rem;\n\n  @media only screen and (max-width: ',
        ') {\n    display: flex;\n    justify-content: space-between;\n  }\n',
      ]);
      return (
        (Pe = function () {
          return e;
        }),
        e
      );
    }
    function Ae() {
      const e = u([
        '\n  box-sizing: border-box !important;\n  display: none;\n  max-width: 40%;\n  padding: 0.5rem;\n\n  @media only screen and (min-width: ',
        ') {\n    display: block;\n  }\n',
      ]);
      return (
        (Ae = function () {
          return e;
        }),
        e
      );
    }
    function Me() {
      const e = u([
        '\n  display: flex;\n  border: 2px ',
        ' solid;\n  margin-top: 5rem;\n',
      ]);
      return (
        (Me = function () {
          return e;
        }),
        e
      );
    }
    function _e() {
      const e = u(['\n  margin: 10vh 3vw 5vh 3vw;\n']);
      return (
        (_e = function () {
          return e;
        }),
        e
      );
    }
    const Ne = l.c.div(_e());
    var Fe = l.c.div(Me(), p.orange);
    var De = l.c.div(Ae(), (e) => {
        return e.theme.small;
      });
    var Ie = l.c.div(Pe(), (e) => {
        return e.theme.small;
      });
    var je = l.c.h3(Oe(), (e) => {
        return e.theme.small;
      });
    var Re = l.c.p(Te(), (e) => {
        return e.theme.small;
      });
    var ze = l.c.div(Ce(), (e) => e.theme.small);
    const Be = function (e) {
      const t = e.id;
      var n = e.children;
      return a.a.createElement(
        Ne,
        { id: t },
        a.a.createElement(
          Ie,
          null,
          a.a.createElement(je, null, 'Join the discourse'),
          a.a.createElement(Re, null, 'the hottest topics on campus'),
        ),
        a.a.createElement(
          Fe,
          null,
          a.a.createElement(
            De,
            null,
            a.a.createElement(je, null, 'Join the discourse'),
            a.a.createElement(Re, null, 'the hottest topics on campus'),
          ),
          a.a.createElement(ze, null, n),
        ),
      );
    };
    function Le() {
      const e = u([
        '\n  color: ',
        ' !important;\n  font-size: 0.8rem;\n  line-height: 1rem;\n  display: block;\n',
      ]);
      return (
        (Le = function () {
          return e;
        }),
        e
      );
    }
    function Ue() {
      const e = u(['\n  max-width: 100%;\n']);
      return (
        (Ue = function () {
          return e;
        }),
        e
      );
    }
    function He() {
      const e = u(['\n  margin-top: 1rem;\n  color: #242c49;\n']);
      return (
        (He = function () {
          return e;
        }),
        e
      );
    }
    function We() {
      const e = u(['\n  display: block;\n  text-decoration: none;\n']);
      return (
        (We = function () {
          return e;
        }),
        e
      );
    }
    const Ve = l.c.a(We());
    var qe = l.c.p(He());
    var Ge = l.c.img(Ue());
    var Ye = l.c.p(Le(), (e) => e.linkColor);
    function Ke(e) {
      const t = e.link;
      var n = e.photoAlt;
      var r = e.photoUrl;
      var i = e.headline;
      var o = e.linkColor;
      return a.a.createElement(
        Ve,
        { href: t, target: '_blank' },
        a.a.createElement(Ge, { alt: n, src: r }),
        a.a.createElement(qe, null, i),
        a.a.createElement(Ye, { linkColor: o }, '| Click to read more'),
      );
    }
    Ke.defaultProps = { photoAlt: '' };
    const Qe = Ke;
    function $e() {
      const e = u(['\n  font-style: italic;\n  color: inherit;\n']);
      return (
        ($e = function () {
          return e;
        }),
        e
      );
    }
    function Xe() {
      const e = u([
        '\n  color: #104a4f;\n  display: inline;\n  font-weight: 600;\n  @media (max-width: ',
        ') {\n    text-align: center;\n  }\n',
      ]);
      return (
        (Xe = function () {
          return e;
        }),
        e
      );
    }
    function Ze() {
      const e = u([
        '\n  text-align: left;\n  height: 100%;\n  padding: 0.8rem;\n  padding-right: 4rem;\n  line-height: 3.3vh;\n  @media (max-width: ',
        ') {\n    line-height: 1.8vh;\n    padding-left: 2.3rem;\n    padding-top: 0.15rem;\n  }\n',
      ]);
      return (
        (Ze = function () {
          return e;
        }),
        e
      );
    }
    function Je() {
      const e = u([
        '\n  color: #104a4f;\n  text-align: right;\n  @media (max-width: ',
        ') {\n    text-align: center;\n    margin-top: 1.5vh;\n  }\n',
      ]);
      return (
        (Je = function () {
          return e;
        }),
        e
      );
    }
    function et() {
      const e = u(['\n  flex: 60%;\n  margin: 0.4rem;\n  margin-left: 1rem;\n']);
      return (
        (et = function () {
          return e;
        }),
        e
      );
    }
    function tt() {
      const e = u([
        '\n  flex: 40%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n',
      ]);
      return (
        (tt = function () {
          return e;
        }),
        e
      );
    }
    function nt() {
      const e = u([
        '\n  background: ',
        ';\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n',
      ]);
      return (
        (nt = function () {
          return e;
        }),
        e
      );
    }
    function rt() {
      const e = u([
        '\n  background: ',
        ';\n  display: flex;\n  padding: 0.4vw;\n',
      ]);
      return (
        (rt = function () {
          return e;
        }),
        e
      );
    }
    const at = l.c.div(rt(), p.purple);
    var it = l.c.div(nt(), p.purple);
    var ot = l.c.div(tt());
    var lt = l.c.div(et());
    var st = l.c.h3(Je(), p.large);
    var ut = l.c.div(Ze(), p.large);
    var ct = l.c.p(Xe(), p.large);
    var dt = l.c.a($e());
    var ft = function (e) {
      let t = e.title;
      var n = e.body;
      var r = e.link;
      var i = a.a.createElement(
        "div",
        null,
        a.a.createElement(
          ct,
          null,
          "This website was created entirely by our tech and product design teams here at Spectator.",
        ),
        a.a.createElement('br', null),
        a.a.createElement(
          ct,
          null,
          "Curious to see how it's done? Interested in doing this work yourself?",
          " ",
        ),
        a.a.createElement('br', null),
        a.a.createElement(
          ct,
          null,
          a.a.createElement(dt, { href: r }, 'Click here'),
          a.a.createElement(ct, null, ' to learn how to join our team'),
        ),
      );
      var o = n || i;
      return a.a.createElement(
        'div',
        null,
        a.a.createElement(
          c.Desktop,
          null,
          a.a.createElement(
            at,
            null,
            a.a.createElement(ot, null, a.a.createElement(st, null, t)),
            a.a.createElement(lt, null, a.a.createElement(ut, null, o)),
          ),
        ),
        a.a.createElement(
          c.MobileAndTablet,
          null,
          a.a.createElement(
            it,
            null,
            a.a.createElement(st, null, t),
            a.a.createElement(ut, null, o),
          ),
        ),
      );
    };
    function pt() {
      const e = u([
        '\n  padding-left: 1rem;\n  padding-right: 1rem;\n  line-height: 4.2vh;\n  text-transform: uppercase;\n  @media (max-width: ',
        ') {\n    padding: 0;\n    line-height: 1.5vh;\n    display: inline;\n  }\n',
      ]);
      return (
        (pt = function () {
          return e;
        }),
        e
      );
    }
    function ht() {
      const e = u(['\n  font-style: italic;\n  color: inherit;\n']);
      return (
        (ht = function () {
          return e;
        }),
        e
      );
    }
    function mt() {
      const e = u(['\n  display: inline;\n']);
      return (
        (mt = function () {
          return e;
        }),
        e
      );
    }
    function gt() {
      const e = u([
        '\n  flex: 50%;\n  height: 100%;\n  line-height: 3.5vh;\n  @media (max-width: ',
        ') {\n    line-height: 2vh;\n    margin: 2vh 5vw 0vh 5vw;\n  }\n',
      ]);
      return (
        (gt = function () {
          return e;
        }),
        e
      );
    }
    function vt() {
      const e = u([
        '\n  flex: 50%;\n  color: #09093b;\n  line-height: 6vw;\n  @media (max-width: ',
        ') {\n    margin-top: 2.5vh;\n  }\n',
      ]);
      return (
        (vt = function () {
          return e;
        }),
        e
      );
    }
    function bt() {
      const e = u(['\n  flex: 35%;\n  margin: 0.4rem;\n  margin-right: 6vw;\n']);
      return (
        (bt = function () {
          return e;
        }),
        e
      );
    }
    function yt() {
      const e = u([
        '\n  flex: 65%;\n  display: flex;\n  flex-direction: column;\n  margin-left: 6vw;\n',
      ]);
      return (
        (yt = function () {
          return e;
        }),
        e
      );
    }
    function wt() {
      const e = u([
        '\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-top: 2.4vw;\n  padding-bottom: 2.4vw;\n',
      ]);
      return (
        (wt = function () {
          return e;
        }),
        e
      );
    }
    function xt() {
      const e = u([
        '\n  background: ',
        ';\n  align-items: center;\n  justify-content: center;\n\n  max-height: 100%;\n  max-width: 100%;\n',
      ]);
      return (
        (xt = function () {
          return e;
        }),
        e
      );
    }
    function St() {
      const e = u([
        '\n  background: ',
        ';\n  display: flex;\n  padding-top: 2.4vw;\n  padding-bottom: 2.4vw;\n  max-height: 100%;\n  max-width: 100%;\n',
      ]);
      return (
        (St = function () {
          return e;
        }),
        e
      );
    }
    const kt = l.c.div(St(), p.purple);
    var Et = l.c.div(xt(), p.purple);
    var Ct = l.c.div(wt());
    var Tt = l.c.div(yt());
    var Ot = l.c.div(bt());
    var Pt = l.c.h3(vt(), p.medium);
    var At = l.c.div(gt(), p.medium);
    var Mt = l.c.p(mt());
    var _t = l.c.a(ht());
    var Nt = l.c.h6(pt(), p.large);
    var Ft = function (e) {
      let t = e.title;
      var n = e.body;
      var r = e.link;
      var i = a.a.createElement(
        "div",
        null,
        a.a.createElement(
          Mt,
          null,
          "This website was created entirely by our tech and product design teams here at Spectator.",
        ),
        a.a.createElement('br', null),
        a.a.createElement(
          Mt,
          null,
          "Curious to see how it's done? Interested in doing this work yourself?",
        ),
        a.a.createElement('br', null),
        a.a.createElement(
          Mt,
          null,
          a.a.createElement(_t, { href: r }, 'Click here'),
          a.a.createElement(Mt, null, ' to learn how to join our team'),
        ),
      );
      var o = a.a.createElement(
        "div",
        null,
        a.a.createElement(Nt, null, 'Cover art by: helen yang'),
        a.a.createElement('br', null),
        a.a.createElement(Nt, null, 'Website design by: Cecilia ORDU\xd1A'),
        a.a.createElement('br', null),
        a.a.createElement(
          Nt,
          null,
          "DEVELOPED BY: ARSALAAN ANSARI, WILLIAM CHIU, HARRISON WANG, ELAINE WANG, Matthew Vanegas & CHENOA Gale",
        ),
      );
      var l = a.a.createElement(
        "div",
        null,
        a.a.createElement(
          Mt,
          null,
          "This website was created entirely by our tech and product design teams here at Spectator.",
        ),
        a.a.createElement('br', null),
        a.a.createElement(
          Mt,
          null,
          "Curious to see how it's done? Interested in doing this work yourself?",
        ),
        a.a.createElement('br', null),
        a.a.createElement(
          Mt,
          null,
          a.a.createElement(_t, { href: r }, 'Click here'),
          a.a.createElement(Mt, null, ' to learn how to join our team'),
        ),
        a.a.createElement('br', null),
        a.a.createElement('br', null),
        a.a.createElement(Nt, null, 'Cover art by: helen yang'),
        a.a.createElement('br', null),
        a.a.createElement(Nt, null, 'Website design by: Cecilia ORDU\xd1A'),
        a.a.createElement('br', null),
        a.a.createElement(
          Nt,
          null,
          "DEVELOPED BY: ARSALAAN ANSARI, WILLIAM CHIU, HARRISON WANG, ELAINE WANG, Matthew Vanegas & CHENOA Gale",
        ),
      );
      var s = n || i;
      return a.a.createElement(
        'div',
        null,
        a.a.createElement(
          c.Desktop,
          null,
          a.a.createElement(
            kt,
            null,
            a.a.createElement(
              Tt,
              null,
              a.a.createElement(Pt, null, t),
              a.a.createElement(At, null, s),
            ),
            a.a.createElement(
              Ot,
              null,
              a.a.createElement('div', null, a.a.createElement(Nt, null, o)),
            ),
          ),
        ),
        a.a.createElement(
          c.MobileAndTablet,
          null,
          a.a.createElement(
            Et,
            null,
            a.a.createElement(
              Ct,
              null,
              a.a.createElement(Pt, null, 'LIKE WHAT YOU SEE?'),
              a.a.createElement(At, null, l),
            ),
          ),
        ),
      );
    };
    function Dt() {
      const e = u(['\n  color: ', ';\n']);
      return (
        (Dt = function () {
          return e;
        }),
        e
      );
    }
    function It() {
      const e = u([
        '\n  padding: 0.4rem 0.8rem;\n  position: relative;\n  :hover {\n    transform: translate(5%, -5%);\n  }\n  background-color: white;\n  color: #f57869;\n  font-weight: bold;\n  font-size: 2rem;\n  display: inline-block;\n  :before {\n    display: inline-block;\n    content: "";\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    border: 2px solid #e27400;\n    left: -0.4rem;\n    top: 0.2rem;\n  }\n  :after {\n    content: "";\n    position: absolute;\n    display: inline-block;\n    top: 50%;\n    height: 2px;\n    width: 500%;\n    background: #e27400;\n    left: 100%;\n  }\n',
      ]);
      return (
        (It = function () {
          return e;
        }),
        e
      );
    }
    function jt() {
      const e = u([
        '\n  position: relative;\n  display: block;\n  margin: 1rem;\n  text-decoration: none;\n',
      ]);
      return (
        (jt = function () {
          return e;
        }),
        e
      );
    }
    const Rt = l.c.a(jt());
    var zt = l.c.div(It());
    var Bt = l.c.h4(Dt(), p.orange);
    var Lt = function (e) {
      var t = e.getToKnow;
          var n = t.tab;
          var r = t.tabLink;
      return a.a.createElement(
        Rt,
        { href: r, target: '_blank', rel: 'noopener noreferrer' },
        a.a.createElement(zt, null, a.a.createElement(Bt, null, n)),
      );
    };
    var Ut = Lt;
    function Ht() {
      const e = u([
        '\n  text-shadow: -1px 3px white;\n  color: ',
        ' !important;\n  flex: 1 1 0;\n  min-width: 20rem;\n  font-size: 4rem;\n  @media (max-width: ',
        ') {\n    font-size: 2.2rem;\n    padding: 1rem;\n  }\n',
      ]);
      return (
        (Ht = function () {
          return e;
        }),
        e
      );
    }
    function Wt() {
      const e = u([
        '\n  direction: rtl;\n  margin-right: 6vw;\n  flex: 1 1 0;\n',
      ]);
      return (
        (Wt = function () {
          return e;
        }),
        e
      );
    }
    function Vt() {
      const e = u([
        '\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  background-image: url(',
        ');\n  background-size: 100% auto;\n  background-repeat: no-repeat;\n  background-position: 50% 85%;\n  padding: 3vw;\n  position: relative;\n  overflow: hidden;\n',
      ]);
      return (
        (Vt = function () {
          return e;
        }),
        e
      );
    }
    Lt.defaultProps = { getToKnow: 'error' };
    const qt = l.c.div(Vt(), (e) => e.backgroundImage.image);
    var Gt = l.c.div(Wt());
    var Yt = l.c.h3(Ht(), p.orange, p.small);
    var Kt = function (e) {
      let t = e.id;
      var n = e.backgroundImage;
      var r = e.getToKnow.map((e) => a.a.createElement(Ut, { getToKnow: e }));
      return a.a.createElement(
        qt,
        { id: t, backgroundImage: n },
        a.a.createElement(Yt, null, 'GET TO KNOW'),
        a.a.createElement(Gt, null, r),
      );
    };
    function Qt(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }
    function $t(e, t) {
      for (let n = 0; n < t.length; n++) {
        const r = t[n];
        (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
      }
    }
    function Xt(e, t, n) {
      return t && $t(e.prototype, t), n && $t(e, n), e;
    }
    function Zt(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
          : (e[t] = n),
        e
      );
    }
    function Jt() {
      return (Jt = Object.assign
        || function (e) {
          for (let t = 1; t < arguments.length; t++) {
            const n = arguments[t];
            for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function en(e, t) {
      const n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        t
          && (r = r.filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)),
        n.push.apply(n, r);
      }
      return n;
    }
    function tn(e) {
      for (let t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2
          ? en(Object(n), !0).forEach((t) => {
            Zt(e, t, n[t]);
          })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : en(Object(n)).forEach((t) => {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t),
              );
            });
      }
      return e;
    }
    function nn(e, t) {
      if (typeof t !== 'function' && t !== null) {throw new TypeError(
          'Super expression must either be null or a function'
        );}
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
      t
          && (function (e, t) {
            (
              Object.setPrototypeOf
              || function (e, t) {
                return (e.__proto__ = t), e;
              }
            )(e, t);
          }(e, t));
    }
    function rn(e) {
      return (rn = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
    }
    function an() {
      if (typeof Reflect === 'undefined' || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if (typeof Proxy === 'function') return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], () => {}),
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    }
    function on(e, t) {
      if (e == null) return {};
      let n;
      var r;
      var a = (function (e, t) {
        if (e == null) return {};
        let n;
        var r;
        var a = {};
        var i = Object.keys(e);
        for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }(e, t));
      if (Object.getOwnPropertySymbols) {
        const i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) {(n = i[r]),
          t.indexOf(n) >= 0
              || (Object.prototype.propertyIsEnumerable.call(e, n)
                && (a[n] = e[n]));}
      }
      return a;
    }
    function ln(e) {
      if (void 0 === e) {throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );}
      return e;
    }
    function sn(e, t) {
      return !t || (typeof t !== 'object' && typeof t !== 'function') ? ln(e) : t;
    }
    function un(e) {
      return function () {
        let t;
        var n = rn(e);
        if (an()) {
          const r = rn(this).constructor;
          t = Reflect.construct(n, arguments, r);
        } else t = n.apply(this, arguments);
        return sn(this, t);
      };
    }
    function cn(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return dn(e);
        }(e))
        || (function (e) {
          if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(e)) return Array.from(e);
        }(e))
        || (function (e, t) {
          if (e) {
            if (typeof e === 'string') return dn(e, t);
            let n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              n === 'Object' && e.constructor && (n = e.constructor.name),
              n === 'Map' || n === 'Set'
                ? Array.from(n)
                : n === 'Arguments'
                  || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? dn(e, t)
                  : void 0
            );
          }
        }(e))
        || (function () {
          throw new TypeError(
            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        }())
      );
    }
    function dn(e, t) {
      (t == null || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function fn(e, t) {
      return e((t = { exports: {} }), t.exports), t.exports;
    }
    function pn() {}
    function hn() {}
    function mn(e) {
      return e
        .map((e) => !1 === e ? null : e)
        .join(' ')
        .replace(/\s+/g, ' ')
        .trim();
    }
    function gn(e, t) {
      return ((100 / e) * t) / t;
    }
    function vn(e, t) {
      return (100 * e) / t;
    }
    function bn(e) {
      return ''.concat(e, '%');
    }
    function yn(e, t, n) {
      if (e === t) return !0;
      const r = In[Dn(e)];
      var a = In[Dn(t)];
      return !(!r || r !== a) && r(e, t, n);
    }
    function wn(e) {
      return function (t, n, r) {
        if (!r) return e(t, n, []);
        for (var a, i = r.length; (a = r[--i]);) if (a[0] === t && a[1] === n) return !0;
        return e(t, n, r);
      };
    }
    function xn(e) {
      const t = [];
      for (const n in e) n !== 'constructor' && t.push(n);
      return t;
    }
    function Sn(e) {
      const t = Object.prototype.toString.call(e);
      return (
        t === '[object RegExp]'
        || '[object Date]' === t
        || (function (e) {
          return e.$$typeof === zn;
        }(e))
      );
    }
    function kn(e, t) {
      return !1 !== t.clone && t.isMergeableObject(e)
        ? Cn(
          (function (e) {
            return Array.isArray(e) ? [] : {};
          }(e)),
          e,
          t,
        )
        : e;
    }
    function En(e, t, n) {
      return e.concat(t).map((e) => kn(e, n));
    }
    function Cn(e, t, n) {
      ((n = n || {}).arrayMerge = n.arrayMerge || En),
      (n.isMergeableObject = n.isMergeableObject || Rn);
      const r = Array.isArray(t);
      return r === Array.isArray(e)
        ? r
          ? n.arrayMerge(e, t, n)
          : (function (e, t, n) {
            let r = {};
            return (
              n.isMergeableObject(e)
                  && Object.keys(e).forEach((t) => {
                    r[t] = kn(e[t], n);
                  }),
              Object.keys(t).forEach((a) => {
                n.isMergeableObject(t[a]) && e[a]
                  ? (r[a] = Cn(e[a], t[a], n))
                  : (r[a] = kn(t[a], n));
              }),
              r
            );
          }(e, t, n))
        : kn(t, n);
    }
    function Tn(e) {
      const t = arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : function () {
          return {};
        };
      var n = (function (n) {
        function r(e, n) {
          let a;
          return (
            Qt(this, r),
            ((a = i.call(this, e, n)).state = t(tn({}, n.state))),
            (a.updateStateProps = a.updateStateProps.bind(ln(a))),
            a
          );
        }
        nn(r, a.a.Component);
        var i = un(r);
        return (
          Xt(r, [
            {
              key: 'componentDidMount',
              value() {
                this.context.subscribe(this.updateStateProps);
              },
            },
            {
              key: 'shouldComponentUpdate',
              value(e, t) {
                return !jn(t, this.state) || !jn(e, this.props);
              },
            },
            {
              key: 'componentWillUnmount',
              value() {
                this.context.unsubscribe(this.updateStateProps);
              },
            },
            {
              key: 'updateStateProps',
              value() {
                this.setState(t(tn({}, this.context.state)));
              },
            },
            {
              key: 'render',
              value() {
                var t = this;
                    var n = Un(this.state, this.props);
                return a.a.createElement(
                  e,
                  Jt(
                    {
                      ref: function (e) {
                        t.instance = e;
                      },
                    },
                    n,
                    {
                      carouselStore: {
                        getStoreState: this.context.getStoreState,
                        masterSpinnerError: this.context.masterSpinnerError,
                        masterSpinnerSuccess: this.context
                          .masterSpinnerSuccess,
                        setStoreState: this.context.setStoreState,
                        subscribeMasterSpinner: this.context
                          .subscribeMasterSpinner,
                        unsubscribeAllMasterSpinner: this.context
                          .unsubscribeAllMasterSpinner,
                        unsubscribeMasterSpinner: this.context
                          .unsubscribeMasterSpinner,
                      },
                    },
                  ),
                  this.props.children,
                );
              },
            },
          ]),
          r
        );
      }());
      return (
        Zt(n, 'contextType', Hn),
        Zt(n, 'propTypes', { children: Mn.children }),
        Zt(n, 'defaultProps', { children: null }),
        n
      );
    }
    const On = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    hn.resetWarningCache = pn;
    let Pn = fn((e) => {
      e.exports = (function () {
        function e(e, t, n, r, a, i) {
          if (i !== On) {
            var o = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
            );
            throw ((o.name = 'Invariant Violation'), o);
          }
        }
        function t() {
          return e;
        }
        e.isRequired = e;
        var n = {
          array: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: hn,
          resetWarningCache: pn,
        };
        return (n.PropTypes = n), n;
      }());
    });
    var An = 'loading';
    var Mn = {
      children: Pn.oneOfType([Pn.arrayOf(Pn.node), Pn.node]),
      direction: Pn.oneOf(['forward', 'backward']),
      height: function (e, t) {
        var n = e[t];
        return 'vertical' !== e.orientation
            || (n !== null && 'number' === typeof n)
          ? null
          : new Error(
            "Missing required property '".concat(
              t,
              "' when orientation is vertical.  You must supply a number representing the height in pixels",
            ),
          );
      },
      orientation: Pn.oneOf(['horizontal', 'vertical']),
      isBgImage: function (e, t) {
        return !0 === e[t] && 'img' === e.tag
          ? new Error(
            "HTML img elements should not have a backgroundImage.  Please use ".concat(
              t,
              " for other block-level HTML tags, like div, a, section, etc...",
            ),
          )
          : null;
      },
    };
    var _n = function (e) {
      var t = e.min;
          var n = e.max;
          var r = e.x;
      return Math.min(n, Math.max(t, r));
    };
    var Nn = 'buttonBack___1mlaL';
    var Fn = (function (e) {
      function t(e) {
        let r;
        return (
          Qt(this, t),
          ((r = n.call(this, e)).handleOnClick = r.handleOnClick.bind(ln(r))),
          r
        );
      }
      nn(t, a.a.Component);
      var n = un(t);
      return (
        Xt(t, null, [
          {
            key: 'setDisabled',
            value(e, t, n) {
              return e !== null ? e : t === 0 && !n;
            },
          },
        ]),
        Xt(t, [
          {
            key: 'handleOnClick',
            value(e) {
              var t = this.props;
                  var n = t.carouselStore;
                  var r = t.currentSlide;
                  var a = t.onClick;
                  var i = t.step;
                  var o = t.infinite;
                  var l = t.visibleSlides;
                  var s = t.totalSlides - l;
                  var u = Math.max(r - i, 0);
              o && (u = r === 0 ? s : u),
              n.setStoreState(
                { currentSlide: u, isPlaying: !1 },
                null !== a && a.call(this, e),
              );
            },
          },
          {
            key: 'render',
            value() {
              var e = this.props;
                  var n = (e.carouselStore, e.className);
                  var r =
                    (e.currentSlide,
                    e.disabled,
                    e.onClick,
                    e.step,
                    e.totalSlides,
                    e.visibleSlides,
                    e.infinite);
                  var i = on(e, [
                    "carouselStore",
                    "className",
                    "currentSlide",
                    "disabled",
                    "onClick",
                    "step",
                    "totalSlides",
                    "visibleSlides",
                    "infinite"
                  ]);
                  var o = mn([Nn, "carousel__back-button", n]);
                  var l = t.setDisabled(
                  this.props.disabled,
                  this.props.currentSlide,
                  r,
                );
              return a.a.createElement(
                "button",
                Jt(
                  {
                    type: 'button',
                    "aria-label": 'previous',
                    className: o,
                    onClick: this.handleOnClick,
                    disabled: l,
                  },
                  i,
                ),
                this.props.children,
              );
            },
          },
        ]),
        t
      );
    }());
    Zt(Fn, 'propTypes', {
      carouselStore: Pn.object.isRequired,
      children: Mn.children.isRequired,
      className: Pn.string,
      currentSlide: Pn.number.isRequired,
      disabled: Pn.bool,
      onClick: Pn.func,
      step: Pn.number.isRequired,
      totalSlides: Pn.number.isRequired,
      visibleSlides: Pn.number.isRequired,
      infinite: Pn.bool,
    }),
    Zt(Fn, 'defaultProps', {
      className: null,
      disabled: null,
      onClick: null,
      infinite: !1,
    });
    var Dn = fn((e, t) => {
      var n = {}.toString;
          var r = 'undefined' !== typeof window ? window.Node : Function;
      e.exports = t = function (e) {
        var t = typeof e;
        if ('object' != t) return t;
        if (((t = a[n.call(e)]), 'object' == t)) return e instanceof Map
            ? 'map'
            : e instanceof Set
              ? 'set'
              : 'object';
        if (t) return t;
        if (e instanceof r) switch (e.nodeType) {
            case 1:
              return 'element';
            case 3:
              return 'text-node';
            case 9:
              return 'document';
            case 11:
              return 'document-fragment';
            default:
              return 'dom-node';
          }
      };
      var a = (t.types = {
        "[object Function]": 'function',
        "[object Date]": 'date',
        "[object RegExp]": 'regexp',
        "[object Arguments]": 'arguments',
        "[object Array]": 'array',
        "[object Set]": 'set',
        "[object String]": 'string',
        "[object Null]": 'null',
        "[object Undefined]": 'undefined',
        "[object Number]": 'number',
        "[object Boolean]": 'boolean',
        "[object Object]": 'object',
        "[object Map]": 'map',
        "[object Text]": 'text-node',
        "[object Uint8Array]": 'bit-array',
        "[object Uint16Array]": 'bit-array',
        "[object Uint32Array]": 'bit-array',
        "[object Uint8ClampedArray]": 'bit-array',
        "[object Error]": 'error',
        "[object FormData]": 'form-data',
        "[object File]": 'file',
        "[object Blob]": 'blob'
      });
    });
    var In = (Dn.types,
    {
      number(e, t) {
        return e !== e && t !== t;
      },
      function(e, t, n) {
        return (
          e.toString() === t.toString()
              && In.object(e, t, n)
              && yn(e.prototype, t.prototype)
        );
      },
      date(e, t) {
        return +e == +t;
      },
      regexp(e, t) {
        return e.toString() === t.toString();
      },
      element(e, t) {
        return e.outerHTML === t.outerHTML;
      },
      textnode(e, t) {
        return e.textContent === t.textContent;
      },
    });
    (In.arguments = In['bit-array'] = In.array = wn((e, t, n) => {
      let r = e.length;
      if (r !== t.length) return !1;
      for (n.push([e, t]); r--;) if (!yn(e[r], t[r], n)) return !1;
      return !0;
    })),
    (In.object = wn((e, t, n) => {
      if ('function' === typeof e.equal) return n.push([e, t]), e.equal(t, n);
      var r = xn(e);
          var a = xn(t);
          var i = r.length;
      if (i !== a.length) return !1;
      for (r.sort(), a.sort(); i--;) if (r[i] !== a[i]) return !1;
      for (n.push([e, t]), i = r.length; i--;) {
        var o = r[i];
        if (!yn(e[o], t[o], n)) return !1;
      }
      return !0;
    }));
    var jn = yn;
    var Rn = function (e) {
      return (
        (function (e) {
          return !!e && 'object' === typeof e;
        }(e)) && !Sn(e)
      );
    };
    var zn = "function" === typeof Symbol && Symbol.for
      ? Symbol.for('react.element')
      : 60103;
    Cn.all = function (e, t) {
      if (!Array.isArray(e)) throw new Error('first argument should be an array');
      return e.reduce((e, n) => Cn(e, n, t), {});
    };
    let Bn;
    var Ln;
    var Un = Cn;
    var Hn = a.a.createContext();
    var Wn = function e(t) {
      return (
        Object.freeze(t),
        Object.getOwnPropertyNames(t).forEach((n) => {
            !t.hasOwnProperty(n) ||
              null === t[n] ||
              ("object" != typeof t[n] && "function" != typeof t[n]) ||
              Object.isFrozen(t[n]) ||
              e(t[n]);
          }),
        t
      );
    };
    var Vn = { masterSpinnerFinished: !1 };
    var qn = (function () {
      function e(t) {
        Qt(this, e),
        (this.state = Wn(Un(Vn, t))),
        (this.subscriptions = []),
        (this.masterSpinnerSubscriptions = {}),
        (this.setStoreState = this.setStoreState.bind(this)),
        (this.getStoreState = this.getStoreState.bind(this)),
        (this.subscribe = this.subscribe.bind(this)),
        (this.unsubscribe = this.unsubscribe.bind(this)),
        (this.updateSubscribers = this.updateSubscribers.bind(this)),
        (this.subscribeMasterSpinner = this.subscribeMasterSpinner.bind(
          this,
        )),
        (this.unsubscribeMasterSpinner = this.unsubscribeMasterSpinner.bind(
          this,
        )),
        (this.unsubscribeAllMasterSpinner = this.unsubscribeAllMasterSpinner.bind(
          this,
        )),
        (this.masterSpinnerSuccess = this.masterSpinnerSuccess.bind(this)),
        (this.masterSpinnerError = this.masterSpinnerError.bind(this));
      }
      return (
        Xt(e, [
          {
            key: 'setStoreState',
            value: function (e, t) {
              (this.state = Wn(Un(this.state, e))), this.updateSubscribers(t);
            },
          },
          {
            key: 'getStoreState',
            value: function () {
              return Un({}, this.state);
            },
          },
          {
            key: 'subscribe',
            value: function (e) {
              this.subscriptions.push(e);
            },
          },
          {
            key: 'unsubscribe',
            value: function (e) {
              var t = this.subscriptions.indexOf(e);
              -1 !== t && this.subscriptions.splice(t, 1);
            },
          },
          {
            key: 'updateSubscribers',
            value: function (e) {
              this.subscriptions.forEach((e) => {
                  return e();
                }),
              "function" === typeof e && e(this.getStoreState());
            },
          },
          {
            key: 'subscribeMasterSpinner',
            value: function (e) {
              -1
                  === Object.keys(this.masterSpinnerSubscriptions).indexOf(e)
                  && (this.masterSpinnerSubscriptions[e] = {
                    success: !1,
                    error: !1,
                    complete: !1,
                  });
            },
          },
          {
            key: 'unsubscribeMasterSpinner',
            value: function (e) {
              return (
                -1
                    !== Object.keys(this.masterSpinnerSubscriptions).indexOf(e)
                  && (this.setMasterSpinnerFinished(),
                  delete this.masterSpinnerSubscriptions[e])
              );
            },
          },
          {
            key: 'unsubscribeAllMasterSpinner',
            value: function () {
              (this.masterSpinnerSubscriptions = {}),
              this.setMasterSpinnerFinished();
            },
          },
          {
            key: 'masterSpinnerSuccess',
            value: function (e) {
              (this.masterSpinnerSubscriptions[e].success = !0),
              (this.masterSpinnerSubscriptions[e].complete = !0),
              this.setMasterSpinnerFinished();
            },
          },
          {
            key: 'masterSpinnerError',
            value: function (e) {
              (this.masterSpinnerSubscriptions[e].error = !0),
              (this.masterSpinnerSubscriptions[e].complete = !0),
              this.setMasterSpinnerFinished();
            },
          },
          {
            key: 'setMasterSpinnerFinished',
            value: function () {
              this.setStoreState({
                masterSpinnerFinished: this.isMasterSpinnerFinished(),
              });
            },
          },
          {
            key: 'isMasterSpinnerFinished',
            value: function () {
              var e = this;
              return !Object.keys(this.masterSpinnerSubscriptions).find(
                function (t) {
                  return !0 !== e.masterSpinnerSubscriptions[t].complete;
                },
              );
            },
          },
        ]),
        e
      );
    }());
    var Gn = ((Ln = Bn = (function (e) {
      function t(e) {
        let r;
        if (
          (Qt(this, t),
          (r = n.call(this, e)),
          e.isIntrinsicHeight && e.orientation !== 'horizontal')
        ) {throw Error(
                'isIntrinsicHeight can only be used in "horizontal" orientation. See Readme for more information.',
              );}
        let a = {
          currentSlide: e.currentSlide,
          disableAnimation: e.disableAnimation,
          disableKeyboard: e.disableKeyboard,
          hasMasterSpinner: e.hasMasterSpinner,
          imageErrorCount: 0,
          imageSuccessCount: 0,
          interval: e.interval,
          isPageScrollLocked: e.isPageScrollLocked,
          isPlaying: e.isPlaying,
          lockOnWindowScroll: e.lockOnWindowScroll,
          masterSpinnerThreshold: 0,
          naturalSlideHeight: e.naturalSlideHeight,
          naturalSlideWidth: e.naturalSlideWidth,
          orientation: e.orientation,
          playDirection: e.playDirection,
          privateUnDisableAnimation: !1,
          slideSize: gn(e.totalSlides, e.visibleSlides),
          slideTraySize: vn(e.totalSlides, e.visibleSlides),
          step: e.step,
          dragStep: e.dragStep,
          totalSlides: e.totalSlides,
          touchEnabled: e.touchEnabled,
          dragEnabled: e.dragEnabled,
          visibleSlides: e.visibleSlides,
          infinite: e.infinite,
          isIntrinsicHeight: e.isIntrinsicHeight,
        };
        return (r.carouselStore = new qn(a)), r;
      }
      nn(t, a.a.Component);
      var n = un(t);
      return (
        Xt(t, [
          {
            key: 'componentDidUpdate',
            value(e) {
              var t = this;
                    var n = {};
              [
                "currentSlide",
                "disableAnimation",
                "disableKeyboard",
                "hasMasterSpinner",
                "interval",
                "isPlaying",
                "naturalSlideHeight",
                "naturalSlideWidth",
                "lockOnWindowScroll",
                "orientation",
                "playDirection",
                "step",
                "dragStep",
                "totalSlides",
                "touchEnabled",
                "dragEnabled",
                "visibleSlides",
              ].forEach((r) => {
                    e[r] !== t.props[r] && (n[r] = t.props[r]);
                  }),
              this.props.currentSlide !== e.currentSlide
                      && !this.props.disableAnimation
                      && ((n.disableAnimation = !0),
                      (n.privateUnDisableAnimation = !0)),
              (this.props.totalSlides === e.totalSlides
                      && this.props.visibleSlides === e.visibleSlides)
                      || ((n.slideSize = gn(
                        this.props.totalSlides,
                        this.props.visibleSlides,
                      )),
                      (n.slideTraySize = vn(
                        this.props.totalSlides,
                        this.props.visibleSlides,
                      ))),
              this.carouselStore.state.currentSlide
                      >= this.props.totalSlides
                      && (n.currentSlide = Math.max(
                        this.props.totalSlides - 1,
                        0,
                      )),
              Object.keys(n).length > 0
                      && this.carouselStore.setStoreState(n);
            },
          },
          {
            key: 'componentWillUnmount',
            value() {
              this.carouselStore.unsubscribeAllMasterSpinner();
            },
          },
          {
            key: 'getStore',
            value() {
              return this.carouselStore;
            },
          },
          {
            key: 'render',
            value() {
              var e = this.props;
                    var t =
                      (e.children,
                      e.className,
                      e.currentSlide,
                      e.disableAnimation,
                      e.disableKeyboard,
                      e.hasMasterSpinner,
                      e.interval,
                      e.isPageScrollLocked,
                      e.isPlaying,
                      e.lockOnWindowScroll,
                      e.naturalSlideHeight,
                      e.naturalSlideWidth,
                      e.orientation,
                      e.playDirection,
                      e.step,
                      e.dragStep,
                      e.tag);
                    var n =
                      (e.totalSlides,
                      e.touchEnabled,
                      e.dragEnabled,
                      e.visibleSlides,
                      e.infinite,
                      e.isIntrinsicHeight,
                      on(e, [
                        "children",
                        "className",
                        "currentSlide",
                        "disableAnimation",
                        "disableKeyboard",
                        "hasMasterSpinner",
                        "interval",
                        "isPageScrollLocked",
                        "isPlaying",
                        "lockOnWindowScroll",
                        "naturalSlideHeight",
                        "naturalSlideWidth",
                        "orientation",
                        "playDirection",
                        "step",
                        "dragStep",
                        "tag",
                        "totalSlides",
                        "touchEnabled",
                        "dragEnabled",
                        "visibleSlides",
                        "infinite",
                        "isIntrinsicHeight"
                      ]));
                    var r = mn(['carousel', this.props.className]);
              return a.a.createElement(
                t,
                Jt({ className: r }, n),
                a.a.createElement(
                  Hn.Provider,
                  { value: this.carouselStore },
                  this.props.children,
                ),
              );
            },
          },
        ]),
        t
      );
    }())),
    Zt(Bn, 'propTypes', {
      children: Mn.children.isRequired,
      className: Pn.string,
      currentSlide: Pn.number,
      disableAnimation: Pn.bool,
      disableKeyboard: Pn.bool,
      hasMasterSpinner: Pn.bool,
      interval: Pn.number,
      isPageScrollLocked: Pn.bool,
      isPlaying: Pn.bool,
      lockOnWindowScroll: Pn.bool,
      naturalSlideHeight: Pn.number.isRequired,
      naturalSlideWidth: Pn.number.isRequired,
      orientation: Mn.orientation,
      playDirection: Mn.direction,
      step: Pn.number,
      dragStep: Pn.number,
      tag: Pn.string,
      totalSlides: Pn.number.isRequired,
      touchEnabled: Pn.bool,
      dragEnabled: Pn.bool,
      visibleSlides: Pn.number,
      infinite: Pn.bool,
      isIntrinsicHeight: Pn.bool,
    }),
    Zt(Bn, 'defaultProps', {
      className: null,
      currentSlide: 0,
      disableAnimation: !1,
      disableKeyboard: !1,
      hasMasterSpinner: !1,
      interval: 5e3,
      isPageScrollLocked: !1,
      isPlaying: !1,
      lockOnWindowScroll: !1,
      orientation: 'horizontal',
      playDirection: 'forward',
      step: 1,
      dragStep: 1,
      tag: 'div',
      touchEnabled: !0,
      dragEnabled: !0,
      visibleSlides: 1,
      infinite: !1,
      isIntrinsicHeight: !1,
    }),
    Ln);
    Hn.Consumer;
    let Yn;
    var Kn;
    var Qn;
    var $n;
    var Xn;
    var Zn;
    var Jn;
    var er;
    var tr;
    var nr;
    var rr;
    var ar;
    var ir = Tn(Fn, (e) => {
        return {
          currentSlide: e.currentSlide,
          step: e.step,
          totalSlides: e.totalSlides,
          visibleSlides: e.visibleSlides,
          infinite: e.infinite
        };
      });
    var or = 'buttonFirst___2rhFr';
    var lr =        (Tn(
          ((Kn = Yn = (function (e) {
            function t() {
              let e;
              return (
                Qt(this, t),
                ((e = n.call(this)).handleOnClick = e.handleOnClick.bind(
                  ln(e),
                )),
                e
              );
            }
            nn(t, a.a.Component);
            var n = un(t);
            return (
              Xt(t, [
                {
                  key: 'handleOnClick',
                  value(e) {
                    var t = this.props,
                      n = t.carouselStore,
                      r = t.onClick;
                    n.setStoreState(
                      { currentSlide: 0, isPlaying: !1 },
                      null !== r && r.call(this, e)
                    );
                  }
                },
                {
                  key: 'render',
                  value() {
                    var e = this.props,
                      t = (e.carouselStore, e.className),
                      n = e.currentSlide,
                      r = e.disabled,
                      i =
                        (e.onClick,
                        e.totalSlides,
                        on(e, [
                          "carouselStore",
                          "className",
                          "currentSlide",
                          "disabled",
                          "onClick",
                          "totalSlides"
                        ])),
                      o = mn([or, "carousel__first-button", t]),
                      l = null !== r ? r : 0 === n;
                    return a.a.createElement(
                      "button",
                      Jt(
                        {
                          type: "button",
                          "aria-label": "first",
                          className: o,
                          onClick: this.handleOnClick,
                          disabled: l
                        },
                        i
                      ),
                      this.props.children
                    );
                  }
                },
              ]),
              t
            );
          }())),
          Zt(Yn, 'propTypes', {
            carouselStore: Pn.object.isRequired,
            children: Mn.children.isRequired,
            className: Pn.string,
            currentSlide: Pn.number.isRequired,
            disabled: Pn.bool,
            onClick: Pn.func,
            totalSlides: Pn.number.isRequired,
          }),
          Zt(Yn, 'defaultProps', {
            className: null,
            disabled: null,
            onClick: null,
          }),
          Kn),
          (e) => {
            return { currentSlide: e.currentSlide, totalSlides: e.totalSlides };
          }
        ),
        'buttonNext___2mOCa');
    var sr = Tn(
      (($n = Qn = (function (e) {
        function t(e) {
          var r;
          return (
            Qt(this, t),
            ((r = n.call(this, e)).handleOnClick = r.handleOnClick.bind(
              ln(r),
            )),
            r
          );
        }
        nn(t, a.a.PureComponent);
        var n = un(t);
        return (
          Xt(t, null, [
            {
              key: 'setDisabled',
              value: function (e, t, n, r, a) {
                return e !== null ? e : t >= r - n && !a;
              },
            },
          ]),
          Xt(t, [
            {
              key: 'handleOnClick',
              value: function (e) {
                var t = this.props;
                    var n = t.currentSlide;
                    var r = t.onClick;
                    var a = t.step;
                    var i = t.carouselStore;
                    var o = t.infinite;
                    var l = t.totalSlides - t.visibleSlides;
                    var s = a + n;
                    var u = Math.min(s, l);
                o && (u = l === n ? 0 : u),
                i.setStoreState(
                  { currentSlide: u, isPlaying: !1 },
                  null !== r && r.call(this, e),
                );
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.props;
                    var n = (e.carouselStore, e.className);
                    var r = e.currentSlide;
                    var i = e.disabled;
                    var o = (e.onClick, e.step, e.totalSlides);
                    var l = e.visibleSlides;
                    var s = e.infinite;
                    var u = on(e, [
                      "carouselStore",
                      "className",
                      "currentSlide",
                      "disabled",
                      "onClick",
                      "step",
                      "totalSlides",
                      "visibleSlides",
                      "infinite"
                    ]);
                    var c = mn([lr, "carousel__next-button", n]);
                    var d = t.setDisabled(i, r, l, o, s);
                return a.a.createElement(
                  "button",
                  Jt(
                    {
                      type: 'button',
                      "aria-label": 'next',
                      className: c,
                      onClick: this.handleOnClick,
                      disabled: d,
                    },
                    u,
                  ),
                  this.props.children,
                );
              },
            },
          ]),
          t
        );
      }())),
      Zt(Qn, 'propTypes', {
        carouselStore: Pn.object.isRequired,
        children: Mn.children.isRequired,
        className: Pn.string,
        currentSlide: Pn.number.isRequired,
        disabled: Pn.bool,
        onClick: Pn.func,
        step: Pn.number.isRequired,
        totalSlides: Pn.number.isRequired,
        visibleSlides: Pn.number.isRequired,
        infinite: Pn.bool,
      }),
      Zt(Qn, 'defaultProps', {
        className: null,
        disabled: null,
        onClick: null,
        infinite: !1,
      }),
      $n),
      function (e) {
        return {
          currentSlide: e.currentSlide,
          step: e.step,
          totalSlides: e.totalSlides,
          visibleSlides: e.visibleSlides,
          infinite: e.infinite,
        };
      },
    );
    var ur = 'buttonLast___2yuh0';
    var cr =        (Tn(
          ((Zn = Xn = (function (e) {
            function t() {
              let e;
              return (
                Qt(this, t),
                ((e = n.call(this)).handleOnClick = e.handleOnClick.bind(
                  ln(e),
                )),
                e
              );
            }
            nn(t, a.a.Component);
            var n = un(t);
            return (
              Xt(t, [
                {
                  key: 'handleOnClick',
                  value(e) {
                    var t = this.props,
                      n = t.carouselStore,
                      r = t.onClick,
                      a = t.totalSlides,
                      i = t.visibleSlides;
                    n.setStoreState(
                      { currentSlide: a - i, isPlaying: !1 },
                      null !== r && r.call(this, e)
                    );
                  }
                },
                {
                  key: 'render',
                  value() {
                    var e = this.props,
                      t = (e.carouselStore, e.className),
                      n = e.currentSlide,
                      r = e.disabled,
                      i = (e.onClick, e.totalSlides),
                      o = e.visibleSlides,
                      l = on(e, [
                        "carouselStore",
                        "className",
                        "currentSlide",
                        "disabled",
                        "onClick",
                        "totalSlides",
                        "visibleSlides"
                      ]),
                      s = mn([ur, "carousel__last-button", t]),
                      u = null !== r ? r : n >= i - o;
                    return a.a.createElement(
                      "button",
                      Jt(
                        {
                          type: "button",
                          "aria-label": "last",
                          className: s,
                          onClick: this.handleOnClick,
                          disabled: u
                        },
                        l
                      ),
                      this.props.children
                    );
                  }
                },
              ]),
              t
            );
          }())),
          Zt(Xn, 'propTypes', {
            carouselStore: Pn.object.isRequired,
            children: Mn.children.isRequired,
            className: Pn.string,
            currentSlide: Pn.number.isRequired,
            disabled: Pn.bool,
            onClick: Pn.func,
            totalSlides: Pn.number.isRequired,
            visibleSlides: Pn.number.isRequired,
          }),
          Zt(Xn, 'defaultProps', {
            className: null,
            disabled: null,
            onClick: null,
          }),
          Zn),
          (e) => {
            return {
              currentSlide: e.currentSlide,
              totalSlides: e.totalSlides,
              visibleSlides: e.visibleSlides
            };
          }
        ),
        'buttonNext___3Lm3s');
    var dr =        (Tn(
          ((er = Jn = (function (e) {
            function t(e) {
              let r;
              return (
                Qt(this, t),
                ((r = n.call(this, e)).handleOnClick = r.handleOnClick.bind(
                  ln(r),
                )),
                r
              );
            }
            nn(t, a.a.PureComponent);
            var n = un(t);
            return (
              Xt(t, [
                {
                  key: 'handleOnClick',
                  value(e) {
                    var t = this.props.onClick;
                    this.props.carouselStore.setStoreState(
                      { isPlaying: !this.props.isPlaying },
                      null !== t && t.call(this, e)
                    );
                  }
                },
                {
                  key: 'render',
                  value() {
                    var e = this.props,
                      t = (e.carouselStore, e.children, e.childrenPaused),
                      n = e.childrenPlaying,
                      r = e.className,
                      i = e.isPlaying,
                      o =
                        (e.onClick,
                        on(e, [
                          "carouselStore",
                          "children",
                          "childrenPaused",
                          "childrenPlaying",
                          "className",
                          "isPlaying",
                          "onClick"
                        ])),
                      l = mn([cr, "carousel__play-button", r]);
                    return a.a.createElement(
                      "button",
                      Jt(
                        {
                          type: "button",
                          "aria-label": "play",
                          className: l,
                          onClick: this.handleOnClick
                        },
                        o
                      ),
                      i && n,
                      !i && t,
                      this.props.children
                    );
                  }
                },
              ]),
              t
            );
          }())),
          Zt(Jn, 'propTypes', {
            carouselStore: Pn.object.isRequired,
            children: Pn.node,
            childrenPaused: Pn.node,
            childrenPlaying: Pn.node,
            className: Pn.string,
            isPlaying: Pn.bool.isRequired,
            onClick: Pn.func,
          }),
          Zt(Jn, 'defaultProps', {
            children: null,
            childrenPaused: null,
            childrenPlaying: null,
            className: null,
            onClick: null,
          }),
          er),
          (e) => {
            return { isPlaying: e.isPlaying };
          }
        ),
        { dot: 'dot___3c3SI' });
    var fr = Tn(
      ((nr = tr = (function (e) {
        function t(e) {
          var r;
          return (
            Qt(this, t),
            ((r = n.call(this, e)).handleOnClick = r.handleOnClick.bind(
              ln(r),
            )),
            r
          );
        }
        nn(t, a.a.Component);
        var n = un(t);
        return (
          Xt(t, [
            {
              key: 'handleOnClick',
              value: function (e) {
                var t = this.props;
                    var n = t.carouselStore;
                    var r = t.onClick;
                    var a = t.slide;
                    var i = t.totalSlides;
                    var o = t.visibleSlides;
                    var l = a >= i - o ? i - o : a;
                n.setStoreState(
                  { currentSlide: l, isPlaying: !1 },
                  null !== r && r.call(this, e),
                );
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.props;
                    var t = (e.carouselStore, e.children, e.className);
                    var n = e.currentSlide;
                    var r = e.disabled;
                    var i = (e.onClick, e.selected);
                    var o = e.slide;
                    var l = (e.totalSlides, e.visibleSlides);
                    var s = on(e, [
                      "carouselStore",
                      "children",
                      "className",
                      "currentSlide",
                      "disabled",
                      "onClick",
                      "selected",
                      "slide",
                      "totalSlides",
                      "visibleSlides"
                    ]);
                    var u = o >= n && o < n + l;
                    var c = "boolean" == typeof i ? i : u;
                    var d = "boolean" == typeof r ? r : !0 === u;
                    var f = mn([
                    dr.dot,
                    c && dr.dotSelected,
                    "carousel__dot",
                    "carousel__dot--".concat(o),
                    c && 'carousel__dot--selected',
                    t,
                  ]);
                return a.a.createElement(
                  "button",
                  Jt(
                    {
                      "aria-label": 'slide dot',
                      type: 'button',
                      onClick: this.handleOnClick,
                      className: f,
                      disabled: d,
                    },
                    s,
                  ),
                  this.props.children,
                );
              },
            },
          ]),
          t
        );
      }())),
      Zt(tr, 'propTypes', {
        carouselStore: Pn.object.isRequired,
        children: Mn.children.isRequired,
        className: Pn.string,
        currentSlide: Pn.number.isRequired,
        disabled: Pn.bool,
        onClick: Pn.func,
        selected: Pn.bool,
        slide: Pn.number.isRequired,
        totalSlides: Pn.number.isRequired,
        visibleSlides: Pn.number.isRequired,
      }),
      Zt(tr, 'defaultProps', {
        className: null,
        disabled: null,
        onClick: null,
        selected: null,
      }),
      nr),
      function (e) {
        return {
          currentSlide: e.currentSlide,
          totalSlides: e.totalSlides,
          visibleSlides: e.visibleSlides,
        };
      },
    );
    var pr = {};
    var hr =        (Tn(
          ((ar = rr = (function (e) {
            function t() {
              return Qt(this, t), n.apply(this, arguments);
            }
            nn(t, a.a.Component);
            var n = un(t);
            return (
              Xt(t, [
                {
                  key: 'renderDots',
                  value() {
                    var e = this.props,
                      t = e.currentSlide,
                      n = e.totalSlides,
                      r = e.visibleSlides,
                      i = e.disableActiveDots,
                      o = e.showAsSelectedForCurrentSlideOnly,
                      l = e.renderDots;
                    if (l) {
                      var s = this.props;
                      return s.renderDots, l(on(s, ["renderDots"]));
                    }
                    for (var u = [], c = 0; c < n; c += 1) {
                      var d = o ? c === t : c >= t && c < t + r,
                        f = c >= n - r ? n - r : c;
                      u.push(
                        a.a.createElement(
                          fr,
                          { key: c, slide: f, selected: d, disabled: !!i && d },
                          a.a.createElement(
                            "span",
                            { className: mn["carousel__dot-group-dot"] },
                            this.props.dotNumbers && c + 1
                          )
                        )
                      );
                    }
                    return u;
                  }
                },
                {
                  key: 'render',
                  value() {
                    var e = this.props,
                      t = (e.carouselStore, e.children),
                      n = e.className,
                      r =
                        (e.currentSlide,
                        e.dotNumbers,
                        e.totalSlides,
                        e.visibleSlides,
                        e.disableActiveDots,
                        e.showAsSelectedForCurrentSlideOnly,
                        e.renderDots,
                        on(e, [
                          "carouselStore",
                          "children",
                          "className",
                          "currentSlide",
                          "dotNumbers",
                          "totalSlides",
                          "visibleSlides",
                          "disableActiveDots",
                          "showAsSelectedForCurrentSlideOnly",
                          "renderDots"
                        ])),
                      i = mn([pr.DotGroup, "carousel__dot-group", n]);
                    return a.a.createElement(
                      "div",
                      Jt({ className: i }, r),
                      this.renderDots(),
                      t
                    );
                  }
                },
              ]),
              t
            );
          }())),
          Zt(rr, 'propTypes', {
            children: Mn.children,
            className: Pn.string,
            currentSlide: Pn.number.isRequired,
            carouselStore: Pn.object.isRequired,
            totalSlides: Pn.number.isRequired,
            visibleSlides: Pn.number.isRequired,
            dotNumbers: Pn.bool,
            disableActiveDots: Pn.bool,
            showAsSelectedForCurrentSlideOnly: Pn.bool,
            renderDots: Pn.func,
          }),
          Zt(rr, 'defaultProps', {
            children: null,
            className: null,
            dotNumbers: !1,
            disableActiveDots: !0,
            showAsSelectedForCurrentSlideOnly: !1,
            renderDots: null,
          }),
          ar),
          (e) => {
            return {
              currentSlide: e.currentSlide,
              totalSlides: e.totalSlides,
              visibleSlides: e.visibleSlides
            };
          }
        ),
        { image: 'image___xtQGH' });
    var mr = (function (e) {
      function t(e) {
        let r;
        return (
          Qt(this, t),
          ((r = n.call(this, e)).state = { imageStatus: An }),
          (r.handleImageLoad = r.handleImageLoad.bind(ln(r))),
          (r.handleImageError = r.handleImageError.bind(ln(r))),
          (r.image = null),
          r
        );
      }
      nn(t, a.a.Component);
      var n = un(t);
      return (
        Xt(t, null, [
          {
            key: 'subscribeMasterSpinner',
            value(e) {
              e.hasMasterSpinner
                  && e.carouselStore.subscribeMasterSpinner(e.src);
            },
          },
          {
            key: 'unsubscribeMasterSpinner',
            value(e) {
              e.hasMasterSpinner
                  && e.carouselStore.unsubscribeMasterSpinner(e.src);
            },
          },
        ]),
        Xt(t, [
          {
            key: 'componentDidMount',
            value() {
              t.subscribeMasterSpinner(this.props), this.initImage();
            },
          },
          {
            key: 'componentDidUpdate',
            value(e) {
              e.src !== this.props.src
                  && (t.unsubscribeMasterSpinner(e),
                  t.subscribeMasterSpinner(this.props),
                  this.initImage());
            },
          },
          {
            key: 'componentWillUnmount',
            value() {
              t.unsubscribeMasterSpinner(this.props),
              this.image.removeEventListener('load', this.handleImageLoad),
              this.image.removeEventListener(
                "error",
                this.handleImageError,
              ),
              (this.image = null);
            },
          },
          {
            key: 'initImage',
            value() {
              if (
                (this.setState({ imageStatus: An }),
                (this.image = document.createElement('img')),
                this.image.addEventListener('load', this.handleImageLoad, !1),
                this.image.addEventListener(
                  "error",
                  this.handleImageError,
                  !1,
                ),
                (this.image.src = this.props.src),
                this.image.readyState || this.image.complete)
              ) {
                var e = this.image.src;
                (this.image.src =                    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="),
                (this.image.src = e);
              }
            },
          },
          {
            key: 'handleImageLoad',
            value(e) {
              this.setState({ imageStatus: 'success' }),
              this.props.hasMasterSpinner
                    && this.props.carouselStore.masterSpinnerSuccess(
                      this.props.src,
                    ),
              this.props.onLoad && this.props.onLoad(e);
            },
          },
          {
            key: 'handleImageError',
            value(e) {
              this.setState({ imageStatus: 'error' }),
              this.props.hasMasterSpinner
                    && this.props.carouselStore.masterSpinnerError(this.props.src),
              this.props.onError && this.props.onError(e);
            },
          },
          {
            key: 'tempTag',
            value() {
              return 'img' === this.props.tag ? 'div' : this.props.tag;
            },
          },
          {
            key: 'customRender',
            value(e) {
              return 'function' === typeof this.props[e]
                ? this.props[e]()
                : this.props.children;
            },
          },
          {
            key: 'renderLoading',
            value(e) {
              var t = this.tempTag();
                  var n = mn([
                  hr.image,
                  hr.imageLoading,
                  "carousel__image",
                  this.props.isBgImage && 'carousel__image--with-background',
                  "carousel__image--loading",
                  this.props.className,
                ]);
              return a.a.createElement(
                t,
                Jt({ className: n }, e),
                this.customRender('renderLoading'),
              );
            },
          },
          {
            key: 'renderError',
            value(e) {
              var t = this.tempTag();
                  var n = mn([
                  hr.image,
                  hr.imageError,
                  "carousel__image",
                  this.props.isBgImage && 'carousel__image--with-background',
                  "carousel__image--error",
                  this.props.className,
                ]);
              return a.a.createElement(
                t,
                Jt({ className: n }, e),
                this.customRender('renderError'),
              );
            },
          },
          {
            key: 'renderSuccess',
            value(e) {
              var t = this.props;
                  var n = t.style;
                  var r = t.tag;
                  var i = mn([
                    hr.image,
                    "carousel__image",
                    this.props.isBgImage && "carousel__image--with-background",
                    "carousel__image--success",
                    this.props.className
                  ]);
                  var o = Jt({}, n);
                  var l = e;
              if ('img' !== r) {
                var s = e.src;
                e.alt,
                (l = on(e, ['src', 'alt'])),
                (o = { ...n, backgroundImage: 'url("'.concat(s, '")'),
                      backgroundSize: "cover"});
              }
              return a.a.createElement(
                r,
                Jt({ className: i, style: o }, l),
                this.props.children,
              );
            },
          },
          {
            key: 'render',
            value() {
              var e = this.props;
                  var t =                    (e.carouselStore,
                    e.children,
                    e.className,
                    e.hasMasterSpinner,
                    e.isBgImage,
                    e.onError,
                    e.onLoad,
                    e.renderError,
                    e.renderLoading,
                    e.style,
                    e.tag,
                    on(e, [
                      'carouselStore',
                      'children',
                      'className',
                      'hasMasterSpinner',
                      'isBgImage',
                      'onError',
                      'onLoad',
                      'renderError',
                      'renderLoading',
                      'style',
                      'tag'
                    ]));
              switch (this.state.imageStatus) {
                case An:
                  return this.renderLoading(t);
                case 'success':
                  return this.renderSuccess(t);
                case 'error':
                  return this.renderError(t);
                default:
                  throw new Error('unknown value for this.state.imageStatus');
              }
            },
          },
        ]),
        t
      );
    }());
    Zt(mr, 'propTypes', {
      alt: Pn.string,
      carouselStore: Pn.object.isRequired,
      children: Mn.children,
      className: Pn.string,
      hasMasterSpinner: Pn.bool.isRequired,
      isBgImage: Mn.isBgImage,
      onError: Pn.func,
      onLoad: Pn.func,
      renderError: Pn.func,
      renderLoading: Pn.func,
      src: Pn.string.isRequired,
      style: Pn.object,
      tag: Pn.string,
    }),
    Zt(mr, 'defaultProps', {
      alt: '',
      children: null,
      className: null,
      isBgImage: !1,
      onError: null,
      onLoad: null,
      renderError: null,
      renderLoading: null,
      style: null,
      tag: 'img',
    });
    let gr;
    var vr;
    var br;
    var yr;
    var wr;
    var xr;
    var Sr;
    var kr;
    var Er = Tn(mr, (e) => {
        return {
          hasMasterSpinner: e.hasMasterSpinner,
          orientation: e.orientation
        };
      });
    var Cr = 'spinner___27VUp';
    var Tr =        ((vr = gr = (function (e) {
          function t() {
            return Qt(this, t), n.apply(this, arguments);
          }
          nn(t, a.a.PureComponent);
          var n = un(t);
          return (
            Xt(t, [
              {
                key: 'render',
                value() {
                  var e = this.props,
                    t = e.className,
                    n = on(e, ["className"]),
                    r = mn([Cr, "carousel__spinner", t]);
                  return a.a.createElement("div", Jt({ className: r }, n));
                }
              },
            ]),
            t
          );
        }())),
        Zt(gr, 'propTypes', { className: Pn.string }),
        Zt(gr, 'defaultProps', { className: null }),
        vr);
    var Or = {
      container: 'container___2O72F',
      overlay: 'overlay___IV4qY',
      hover: 'hover___MYy31',
      zoom: 'zoom___3kqYk',
      loading: 'loading___1pvNI',
      imageLoadingSpinnerContainer: 'imageLoadingSpinnerContainer___3UIPD'
    };
    var Pr =        (Tn(
          ((yr = br = (function (e) {
            function t(e) {
              let r;
              return (
                Qt(this, t),
                ((r = n.call(this, e)).state = {
                  isImageLoading: !0,
                  isHovering: !1,
                  isZooming: !1,
                  x: null,
                  y: null,
                  scale: 1,
                }),
                (r.tpCache = {}),
                (r.handleImageComplete = r.handleImageComplete.bind(ln(r))),
                (r.handleOnMouseMove = r.handleOnMouseMove.bind(ln(r))),
                (r.handleOnMouseOut = r.handleOnMouseOut.bind(ln(r))),
                (r.handleOnMouseOver = r.handleOnMouseOver.bind(ln(r))),
                (r.handleOnTouchEnd = r.handleOnTouchEnd.bind(ln(r))),
                (r.handleOnTouchMove = r.handleOnTouchMove.bind(ln(r))),
                (r.handleOnTouchStart = r.handleOnTouchStart.bind(ln(r))),
                r
              );
            }
            nn(t, a.a.Component);
            var n = un(t);
            return (
              Xt(t, null, [
                {
                  key: 'midpointBetweenTwoTouches',
                  value(e) {
                    var t = e.x1,
                      n = e.y1;
                    return { x: (t + e.x2) / 2, y: (n + e.y2) / 2 };
                  }
                },
                {
                  key: 'distanceBetweenTwoTouches',
                  value(e) {
                    var t = e.x1,
                      n = e.y1,
                      r = e.x2,
                      a = e.y2;
                    return Math.sqrt(Math.pow(r - t, 2) + Math.pow(a - n, 2));
                  }
                },
              ]),
              Xt(t, [
                {
                  key: 'componentDidUpdate',
                  value(e, t) {
                    !1 === t.isZooming &&
                      !0 === this.state.isZooming &&
                      this.props.carouselStore.setStoreState({
                        isPageScrollLocked: !0
                      }),
                      !0 === t.isZooming &&
                        !1 === this.state.isZooming &&
                        this.props.carouselStore.setStoreState({
                          isPageScrollLocked: !1
                        });
                  }
                },
                {
                  key: 'handleImageComplete',
                  value() {
                    this.setState({ isImageLoading: !1 });
                  }
                },
                {
                  key: 'handleOnMouseOver',
                  value() {
                    this.state.isZooming ||
                      this.setState({ isHovering: !0, scale: 2 });
                  }
                },
                {
                  key: 'handleOnMouseOut',
                  value() {
                    this.state.isZooming ||
                      this.setState({ isHovering: !1, scale: 1 });
                  }
                },
                {
                  key: 'handleOnMouseMove',
                  value(e) {
                    if (!this.state.isZooming) {
                      var t = bn(
                          (e.nativeEvent.offsetX / e.target.offsetWidth) * 100
                        ),
                        n = bn(
                          (e.nativeEvent.offsetY / e.target.offsetHeight) * 100
                        );
                      this.setState({ x: t, y: n });
                    }
                  }
                },
                {
                  key: 'handleOnTouchStart',
                  value(e) {
                    var t = this;
                    this.props.isPinchZoomEnabled &&
                      (cn(e.targetTouches).forEach(function(e) {
                        t.tpCache[e.identifier] = {
                          clientX: e.clientX,
                          clientY: e.clientY
                        };
                      }),
                      this.setState(function(e) {
                        return {
                          isZooming:
                            e.isZooming || Object.keys(t.tpCache).length > 1
                        };
                      }));
                  }
                },
                {
                  key: 'handleOnTouchMove',
                  value(e) {
                    var n = this;
                    if (this.state.isZooming) {
                      e.persist();
                      var r = cn(e.targetTouches)
                        .filter(function(e) {
                          return n.tpCache[e.identifier];
                        })
                        .slice(0, 2);
                      if (2 === r.length) {
                        e.stopPropagation();
                        var a = e.target.getBoundingClientRect(),
                          i = r[0].identifier,
                          o = r[1].identifier,
                          l = {
                            x1: this.tpCache[i].clientX,
                            y1: this.tpCache[i].clientY,
                            x2: this.tpCache[o].clientX,
                            y2: this.tpCache[o].clientY
                          };
                        l.distance = t.distanceBetweenTwoTouches(tn({}, l));
                        var s = t.midpointBetweenTwoTouches(tn({}, l));
                        (l.cx = s.x), (l.cy = s.y);
                        var u = {
                          x1: r[0].clientX,
                          y1: r[0].clientY,
                          x2: r[1].clientX,
                          y2: r[1].clientY
                        };
                        u.distance = t.distanceBetweenTwoTouches(tn({}, u));
                        var c = t.midpointBetweenTwoTouches(tn({}, u));
                        (u.cx = c.x), (u.cy = c.y);
                        var d = bn(
                            _n({
                              min: 0,
                              max: 100,
                              x: ((u.cx - a.left) / a.width) * 100
                            })
                          ),
                          f = bn(
                            _n({
                              min: 0,
                              max: 100,
                              x: ((u.cy - a.top) / a.height) * 100
                            })
                          ),
                          p = function(e) {
                            return _n({
                              min: 1,
                              max: 3,
                              x: e.scale + (u.distance - l.distance) / 100
                            });
                          };
                        this.setState(function(e) {
                          return {
                            isZooming: 1 !== p(e),
                            scale: p(e),
                            x: d,
                            y: f
                          };
                        });
                      }
                    }
                  }
                },
                {
                  key: 'handleOnTouchEnd',
                  value(e) {
                    var t = this;
                    this.props.isPinchZoomEnabled &&
                      (cn(e.changedTouches).forEach(function(e) {
                        delete t.tpCache[e.identifier];
                      }),
                      0 === Object.keys(this.tpCache).length &&
                        this.setState({ isZooming: !1 }));
                  }
                },
                {
                  key: 'renderLoading',
                  value() {
                    if (this.state.isImageLoading) {
                      var e = this.props.spinner;
                      return a.a.createElement(
                        "div",
                        {
                          className: mn([
                            Or.imageLoadingSpinnerContainer,
                            "carousel__image-loading-spinner-container"
                          ])
                        },
                        e && e(),
                        !e && a.a.createElement(Tr, null)
                      );
                    }
                    return null;
                  }
                },
                {
                  key: 'render',
                  value() {
                    var e = this.props,
                      t = (e.carouselStore, e.className),
                      n = e.imageClassName,
                      r = e.overlayClassName,
                      i = (e.isPinchZoomEnabled, e.spinner, e.src),
                      o = e.srcZoomed,
                      l = e.tag,
                      s = on(e, [
                        "carouselStore",
                        "className",
                        "imageClassName",
                        "overlayClassName",
                        "isPinchZoomEnabled",
                        "spinner",
                        "src",
                        "srcZoomed",
                        "tag"
                      ]),
                      u = mn([Or.container, t]),
                      c = mn([Or.image, "carousel__zoom-image", n]),
                      d = mn([
                        Or.overlay,
                        "carousel__zoom-image-overlay",
                        this.state.isHovering && Or.hover,
                        this.state.isZooming && Or.zoom,
                        this.state.isHovering &&
                          "carousel__zoom-image-overlay--hovering",
                        this.state.isZooming &&
                          "carousel__zoom-image-overlay--zooming",
                        r
                      ]),
                      f = {};
                    return (
                      (this.state.isHovering || this.state.isZooming) &&
                        ((f.transformOrigin = ""
                          .concat(this.state.x, " ")
                          .concat(this.state.y)),
                        (f.transform = "scale(".concat(this.state.scale, ")"))),
                      a.a.createElement(
                        l,
                        Jt({ className: u }, s),
                        a.a.createElement(Er, {
                          className: c,
                          tag: "div",
                          src: i,
                          isBgImage: !0,
                          onLoad: this.handleImageComplete,
                          onError: this.handleImageComplete
                        }),
                        a.a.createElement(Er, {
                          className: d,
                          tag: "div",
                          src: o || i,
                          style: f,
                          isBgImage: !0,
                          onFocus: this.handleOnMouseOver,
                          onMouseOver: this.handleOnMouseOver,
                          onBlur: this.handleOnMouseOut,
                          onMouseOut: this.handleOnMouseOut,
                          onMouseMove: this.handleOnMouseMove,
                          onTouchStart: this.handleOnTouchStart,
                          onTouchEnd: this.handleOnTouchEnd,
                          onTouchMove: this.handleOnTouchMove
                        }),
                        this.renderLoading()
                      )
                    );
                  }
                },
              ]),
              t
            );
          }())),
          Zt(br, 'propTypes', {
            carouselStore: Pn.object.isRequired,
            className: Pn.string,
            imageClassName: Pn.string,
            overlayClassName: Pn.string,
            spinner: Pn.func,
            src: Pn.string.isRequired,
            srcZoomed: Pn.string,
            tag: Pn.string,
            isPinchZoomEnabled: Pn.bool,
          }),
          Zt(br, 'defaultProps', {
            className: null,
            imageClassName: null,
            overlayClassName: null,
            isPinchZoomEnabled: !0,
            spinner: null,
            srcZoomed: null,
            tag: 'div'
          }),
          yr),
          () => {
            return {};
          }
        ),
        {
          slide: 'slide___3-Nqo',
          slideHorizontal: 'slideHorizontal___1NzNV',
          slideInner: 'slideInner___2mfX9',
          focusRing: 'focusRing___1airF'
        });
    var Ar = Tn(
      ((xr = wr = (function (e) {
        function t(e) {
          var r;
          return (
            Qt(this, t),
            ((r = n.call(this, e)).handleOnFocus = r.handleOnFocus.bind(
              ln(r),
            )),
            (r.handleOnBlur = r.handleOnBlur.bind(ln(r))),
            (r.state = { focused: !1 }),
            r
          );
        }
        nn(t, a.a.PureComponent);
        var n = un(t);
        return (
          Xt(t, [
            {
              key: 'isVisible',
              value: function () {
                var e = this.props;
                    var t = e.currentSlide;
                    var n = e.index;
                    var r = e.visibleSlides;
                return n >= t && n < t + r;
              },
            },
            {
              key: 'handleOnFocus',
              value: function (e) {
                var t = this;
                    var n = this.props.onFocus;
                this.setState({ focused: !0 }, () => {
                    null !== n && n.call(t, e);
                  });
              },
            },
            {
              key: 'handleOnBlur',
              value: function (e) {
                var t = this;
                    var n = this.props.onBlur;
                this.setState({ focused: !1 }, () => {
                    null !== n && n.call(t, e);
                  });
              },
            },
            {
              key: 'renderFocusRing',
              value: function () {
                return this.state.focused
                  ? a.a.createElement('div', {
                    className: [
                      Pr.focusRing,
                      "carousel__slide-focus-ring",
                    ].join(' '),
                  })
                  : null;
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this;
                    var t = this.props;
                    var n = (t.carouselStore, t.children, t.className);
                    var r = t.classNameHidden;
                    var i = t.classNameVisible;
                    var o = (t.currentSlide, t.index, t.innerClassName);
                    var l = t.innerTag;
                    var s = t.naturalSlideHeight;
                    var u = t.naturalSlideWidth;
                    var c = (t.onBlur, t.onFocus, t.orientation);
                    var d = t.slideSize;
                    var f = t.style;
                    var p = t.tabIndex;
                    var h = t.tag;
                    var m = t.totalSlides;
                    var g = (t.visibleSlides, t.isIntrinsicHeight);
                    var v = on(t, [
                      "carouselStore",
                      "children",
                      "className",
                      "classNameHidden",
                      "classNameVisible",
                      "currentSlide",
                      "index",
                      "innerClassName",
                      "innerTag",
                      "naturalSlideHeight",
                      "naturalSlideWidth",
                      "onBlur",
                      "onFocus",
                      "orientation",
                      "slideSize",
                      "style",
                      "tabIndex",
                      "tag",
                      "totalSlides",
                      "visibleSlides",
                      "isIntrinsicHeight"
                    ]);
                    var b = {};
                "horizontal" === c
                  ? ((b.width = bn(d)),
                  (b.paddingBottom = bn((100 * s) / (u * m))))
                  : ((b.width = bn(100)),
                  (b.paddingBottom = bn((100 * s) / u)));
                var y = {};
                g
                    && ('horizontal' === c
                      ? (b.height = 'unset')
                      : (b.width = 'unset'),
                    (b.position = 'unset'),
                    (b.paddingBottom = 'unset'),
                    (y.position = 'unset'));
                var w = { ...b, ...f},
                  x = this.isVisible(),
                  S = mn([
                    Pr.slide,
                    "horizontal" === c && Pr.slideHorizontal,
                    "carousel__slide",
                    this.state.focused && 'carousel__slide--focused',
                    x && i,
                    x && 'carousel__slide--visible',
                    !x && r,
                    !x && 'carousel__slide--hidden',
                    n,
                  ]),
                  k = mn([Pr.slideInner, 'carousel__inner-slide', o]),
                  E = this.isVisible() ? 0 : -1,
                  C = 'number' === typeof p ? p : E;
                return a.a.createElement(
                  h,
                  Jt(
                    {
                      ref: function (t) {
                        e.tagRef = t;
                      },
                      tabIndex: C,
                      "aria-selected": this.isVisible(),
                      role: 'option',
                      onFocus: this.handleOnFocus,
                      onBlur: this.handleOnBlur,
                      className: S,
                      style: w,
                    },
                    v,
                  ),
                  a.a.createElement(
                    l,
                    {
                      ref: function (t) {
                        e.innerTagRef = t;
                      },
                      className: k,
                      style: y,
                    },
                    this.props.children,
                    this.renderFocusRing(),
                  ),
                );
              },
            },
          ]),
          t
        );
      }())),
      Zt(wr, 'propTypes', {
        carouselStore: Pn.object,
        children: Mn.children,
        className: Pn.string,
        classNameHidden: Pn.string,
        classNameVisible: Pn.string,
        currentSlide: Pn.number.isRequired,
        index: Pn.number.isRequired,
        innerClassName: Pn.string,
        innerTag: Pn.string,
        naturalSlideHeight: Pn.number.isRequired,
        naturalSlideWidth: Pn.number.isRequired,
        onBlur: Pn.func,
        onFocus: Pn.func,
        orientation: Mn.orientation.isRequired,
        slideSize: Pn.number.isRequired,
        style: Pn.object,
        tabIndex: Pn.number,
        tag: Pn.string,
        totalSlides: Pn.number.isRequired,
        visibleSlides: Pn.number.isRequired,
        isIntrinsicHeight: Pn.bool,
      }),
      Zt(wr, 'defaultProps', {
        carouselStore: null,
        children: null,
        className: null,
        classNameHidden: null,
        classNameVisible: null,
        innerClassName: null,
        innerTag: 'div',
        onBlur: null,
        onFocus: null,
        style: {},
        tabIndex: null,
        tag: 'li',
        isIntrinsicHeight: !1,
      }),
      xr),
      function (e) {
        return {
          currentSlide: e.currentSlide,
          naturalSlideHeight: e.naturalSlideHeight,
          naturalSlideWidth: e.naturalSlideWidth,
          orientation: e.orientation,
          slideSize: e.slideSize,
          totalSlides: e.totalSlides,
          visibleSlides: e.visibleSlides,
          isIntrinsicHeight: e.isIntrinsicHeight,
        };
      },
    );
    var Mr = (function () {
      function e() {
        Qt(this, e);
      }
      return (
        Xt(
          e,
          [
            {
              key: 'parents',
              value: function (e, t) {
                return e.parentNode === null
                  ? t
                  : this.parents(e.parentNode, t.concat([e]));
              },
            },
            {
              key: 'scrollParent',
              value: function (t) {
                for (
                  var n = this.parents(t.parentNode, []), r = 0;
                  r < n.length;
                  r += 1
                ) if (e.scroll(n[r])) return n[r];
                return document.scrollingElement || document.documentElement;
              },
            },
            {
              key: 'getScrollParent',
              value: function (t) {
                return e.isNodeValid(t) ? this.scrollParent(t) : null;
              },
            },
          ],
          [
            {
              key: 'style',
              value: function (e, t) {
                return getComputedStyle(e, null).getPropertyValue(t);
              },
            },
            {
              key: 'overflow',
              value: function (t) {
                return (
                  e.style(t, 'overflow')
                    + e.style(t, 'overflow-y')
                    + e.style(t, 'overflow-x')
                );
              },
            },
            {
              key: 'scroll',
              value: function (t) {
                return /(auto|scroll)/.test(e.overflow(t));
              },
            },
            {
              key: 'isNodeValid',
              value: function (e) {
                return e instanceof HTMLElement || e instanceof SVGElement;
              },
            },
          ],
        ),
        e
      );
    }());
    var _r = {
      horizontalSlider: 'horizontalSlider___281Ls',
      horizontalSliderTray: 'horizontalSliderTray___1L-0W',
      verticalSlider: 'verticalSlider___34ZFD',
      verticalSliderTray: 'verticalSliderTray___267D8',
      verticalTray: 'verticalTray___12Key',
      verticalSlideTrayWrap: 'verticalSlideTrayWrap___2nO7o',
      sliderTray: 'sliderTray___-vHFQ',
      sliderAnimation: 'sliderAnimation___300FY',
      masterSpinnerContainer: 'masterSpinnerContainer___1Z6hB'
    };
    var Nr = Tn(
      ((kr = Sr = (function (e) {
        function t(e) {
          let r;
          return (
            Qt(this, t),
            ((r = n.call(this, e)).getSliderRef = r.getSliderRef.bind(ln(r))),
            (r.handleDocumentScroll = r.handleDocumentScroll.bind(ln(r))),
            (r.handleOnClickCapture = r.handleOnClickCapture.bind(ln(r))),
            (r.handleOnKeyDown = r.handleOnKeyDown.bind(ln(r))),
            (r.handleOnMouseDown = r.handleOnMouseDown.bind(ln(r))),
            (r.handleOnMouseMove = r.handleOnMouseMove.bind(ln(r))),
            (r.handleOnMouseUp = r.handleOnMouseUp.bind(ln(r))),
            (r.handleOnTouchCancel = r.handleOnTouchCancel.bind(ln(r))),
            (r.handleOnTouchEnd = r.handleOnTouchEnd.bind(ln(r))),
            (r.handleOnTouchMove = r.handleOnTouchMove.bind(ln(r))),
            (r.handleOnTouchStart = r.handleOnTouchStart.bind(ln(r))),
            (r.playBackward = r.playBackward.bind(ln(r))),
            (r.playForward = r.playForward.bind(ln(r))),
            (r.callCallback = r.callCallback.bind(ln(r))),
            (r.state = {
              cancelNextClick: !1,
              deltaX: 0,
              deltaY: 0,
              isBeingMouseDragged: !1,
              isBeingTouchDragged: !1,
              startX: 0,
              startY: 0,
            }),
            (r.interval = null),
            (r.isDocumentScrolling = null),
            (r.moveTimer = null),
            (r.originalOverflow = null),
            (r.scrollParent = null),
            (r.scrollStopTimer = null),
            r
          );
        }
        nn(t, a.a.Component);
        var n = un(t);
        return (
          Xt(t, null, [
            {
              key: 'slideSizeInPx',
              value(e, t, n, r) {
                return ('horizontal' === e ? t : n) / r;
              },
            },
            {
              key: 'slidesMoved',
              value(e, t, n, r, a, i) {
                var o = 'horizontal' === t ? n : r;
                    var l = Math.abs(Math.round(o / a));
                    var s = Math.abs(o) >= a * e ? i : 0;
                    var u = Math.max(s, l);
                if (o < 0) return u;
                var c = -u;
                return c === 0 ? 0 : c;
              },
            },
          ]),
          Xt(t, [
            {
              key: 'componentDidMount',
              value() {
                this.props.lockOnWindowScroll
                    && window.addEventListener(
                      'scroll',
                      this.handleDocumentScroll,
                      !1,
                    ),
                document.documentElement.addEventListener(
                  "mouseleave",
                  this.handleOnMouseUp,
                  !1,
                ),
                document.documentElement.addEventListener(
                  "mousemove",
                  this.handleOnMouseMove,
                  !1,
                ),
                document.documentElement.addEventListener(
                  "mouseup",
                  this.handleOnMouseUp,
                  !1,
                ),
                this.props.isPlaying && this.play();
              },
            },
            {
              key: 'componentDidUpdate',
              value(e) {
                !e.isPlaying && this.props.isPlaying && this.play(),
                e.isPlaying && !this.props.isPlaying && this.stop(),
                !e.isPageScrollLocked
                      && this.props.isPageScrollLocked
                      && this.lockScroll(),
                e.isPageScrollLocked
                      && !this.props.isPageScrollLocked
                      && this.unlockScroll(),
                !1 === e.privateUnDisableAnimation
                      && !0 === this.props.privateUnDisableAnimation
                      && this.props.carouselStore.setStoreState({
                        privateUnDisableAnimation: !1,
                        disableAnimation: !1,
                      });
              },
            },
            {
              key: 'componentWillUnmount',
              value() {
                document.documentElement.removeEventListener(
                  "mouseleave",
                  this.handleOnMouseUp,
                  !1,
                ),
                document.documentElement.removeEventListener(
                  "mousemove",
                  this.handleOnMouseMove,
                  !1,
                ),
                document.documentElement.removeEventListener(
                  "mouseup",
                  this.handleOnMouseUp,
                  !1,
                ),
                window.removeEventListener(
                  "scroll",
                  this.handleDocumentScroll,
                  !1,
                ),
                this.stop(),
                window.cancelAnimationFrame.call(window, this.moveTimer),
                window.clearTimeout(this.scrollStopTimer),
                (this.isDocumentScrolling = null),
                (this.moveTimer = null),
                (this.scrollStopTimer = null);
              },
            },
            {
              key: 'getSliderRef',
              value(e) {
                this.sliderTrayElement = e;
              },
            },
            {
              key: 'fakeOnDragStart',
              value(e) {
                var t = e.screenX;
                    var n = e.screenY;
                    var r = e.touchDrag;
                    var a = void 0 !== r && r;
                    var i = e.mouseDrag;
                    var o = void 0 !== i && i;
                this.props.carouselStore.setStoreState({ isPlaying: !1 }),
                window.cancelAnimationFrame.call(window, this.moveTimer),
                "vertical" === this.props.orientation
                      && this.props.carouselStore.setStoreState({
                        isPageScrollLocked: !0,
                      }),
                this.setState({
                  isBeingTouchDragged: a,
                  isBeingMouseDragged: o,
                  startX: t,
                  startY: n,
                });
              },
            },
            {
              key: 'fakeOnDragMove',
              value(e, t) {
                var n = this;
                this.moveTimer = window.requestAnimationFrame.call(
                  window,
                  function () {
                    n.setState((n) => {
                        return { deltaX: e - n.startX, deltaY: t - n.startY };
                      });
                  },
                );
              },
            },
            {
              key: 'fakeOnDragEnd',
              value() {
                window.cancelAnimationFrame.call(window, this.moveTimer),
                this.computeCurrentSlide(),
                "vertical" === this.props.orientation
                      && this.props.carouselStore.setStoreState({
                        isPageScrollLocked: !1,
                      }),
                this.setState({
                  deltaX: 0,
                  deltaY: 0,
                  isBeingTouchDragged: !1,
                  isBeingMouseDragged: !1,
                }),
                (this.isDocumentScrolling =                      !this.props.lockOnWindowScroll && null);
              },
            },
            {
              key: 'callCallback',
              value(e, t) {
                var n = this.props.trayProps;
                n && 'function' === typeof n[e] && (t.persist(), n[e](t));
              },
            },
            {
              key: 'handleOnMouseDown',
              value(e) {
                this.props.dragEnabled
                  ? (e.preventDefault(),
                  this.fakeOnDragStart({
                    screenX: e.screenX,
                    screenY: e.screenY,
                    mouseDrag: !0,
                  }),
                  this.callCallback('onMouseDown', e))
                  : this.callCallback('onMouseDown', e);
              },
            },
            {
              key: 'handleOnMouseMove',
              value(e) {
                this.state.isBeingMouseDragged
                    && (this.setState({ cancelNextClick: !0 }),
                    e.preventDefault(),
                    this.fakeOnDragMove(e.screenX, e.screenY));
              },
            },
            {
              key: 'handleOnMouseUp',
              value(e) {
                this.state.isBeingMouseDragged
                    && (e.preventDefault(), this.fakeOnDragEnd());
              },
            },
            {
              key: 'handleOnClickCapture',
              value(e) {
                this.state.cancelNextClick
                  ? (e.preventDefault(),
                  this.setState({ cancelNextClick: !1 }),
                  this.callCallback('onClickCapture', e))
                  : this.callCallback('onClickCapture', e);
              },
            },
            {
              key: 'handleOnTouchStart',
              value(e) {
                if (this.props.touchEnabled) {
                  "vertical" === this.props.orientation && e.preventDefault();
                  var t = e.targetTouches[0];
                  this.fakeOnDragStart({
                    screenX: t.screenX,
                    screenY: t.screenY,
                    touchDrag: !0,
                  }),
                  this.callCallback('onTouchStart', e);
                } else this.callCallback('onTouchStart', e);
              },
            },
            {
              key: 'handleDocumentScroll',
              value() {
                var e = this;
                this.props.touchEnabled
                    && ((this.isDocumentScrolling = !0),
                    window.clearTimeout(this.scrollStopTimer),
                    (this.scrollStopTimer = window.setTimeout(() => {
                      e.isDocumentScrolling = !1;
                    }, 66)));
              },
            },
            {
              key: 'handleOnTouchMove',
              value(e) {
                if (
                  !this.props.touchEnabled
                    || (this.props.lockOnWindowScroll && this.isDocumentScrolling)
                ) this.callCallback('onTouchMove', e);
                else {
                  window.cancelAnimationFrame.call(window, this.moveTimer);
                  var t = e.targetTouches[0];
                  t
                      && (this.fakeOnDragMove(t.screenX, t.screenY),
                      this.callCallback('onTouchMove', e));
                }
              },
            },
            {
              key: 'forward',
              value() {
                var e = this.props;
                    var t = e.currentSlide;
                    var n = e.step;
                    var r = e.totalSlides;
                    var a = e.visibleSlides;
                return Math.min(t + n, r - a);
              },
            },
            {
              key: 'backward',
              value() {
                var e = this.props;
                    var t = e.currentSlide;
                    var n = e.step;
                return Math.max(t - n, 0);
              },
            },
            {
              key: 'handleOnKeyDown',
              value(e) {
                var t = e.keyCode;
                    var n = this.props;
                    var r = n.carouselStore;
                    var a = n.currentSlide;
                    var i = n.disableKeyboard;
                    var o = n.totalSlides;
                    var l = n.visibleSlides;
                    var s = {};
                !0 === i
                    || o <= l
                    || (t === 37 &&
                      (e.preventDefault(),
                      this.focus(),
                      (s.currentSlide = Math.max(0, a - 1)),
                      (s.isPlaying = !1)),
                    t === 39 &&
                      (e.preventDefault(),
                      this.focus(),
                      (s.currentSlide = Math.min(o - l, a + 1)),
                      (s.isPlaying = !1)),
                    r.setStoreState(s));
              },
            },
            {
              key: 'playForward',
              value() {
                var e = this.props;
                    var t = e.carouselStore;
                    var n = e.currentSlide;
                t.setStoreState({
                  currentSlide: this.forward() === n ? 0 : this.forward(),
                });
              },
            },
            {
              key: 'playBackward',
              value() {
                var e = this.props;
                    var t = e.carouselStore;
                    var n = e.currentSlide;
                    var r = e.totalSlides;
                    var a = e.visibleSlides;
                t.setStoreState({
                  currentSlide:
                      this.backward() === n ? r - a : this.backward(),
                });
              },
            },
            {
              key: 'play',
              value() {
                var e = this.props.playDirection;
                this.interval = setInterval(
                  "forward" === e ? this.playForward : this.playBackward,
                  this.props.interval,
                );
              },
            },
            {
              key: 'stop',
              value() {
                window.clearInterval(this.interval), (this.interval = null);
              },
            },
            {
              key: 'lockScroll',
              value() {
                var e = new Mr();
                (this.scrollParent = e.getScrollParent(
                  this.sliderTrayElement,
                )),
                this.scrollParent
                      && ((this.originalOverflow =                        this.originalOverflow
                        || this.scrollParent.style.overflow),
                      (this.scrollParent.style.overflow = 'hidden'));
              },
            },
            {
              key: 'unlockScroll',
              value() {
                this.scrollParent
                    && ((this.scrollParent.style.overflow = this.originalOverflow),
                    (this.originalOverflow = null),
                    (this.scrollParent = null));
              },
            },
            {
              key: 'computeCurrentSlide',
              value() {
                var e = t.slideSizeInPx(
                    this.props.orientation,
                    this.sliderTrayElement.clientWidth,
                    this.sliderTrayElement.clientHeight,
                    this.props.totalSlides,
                  );
                    var n = t.slidesMoved(
                      this.props.moveThreshold,
                      this.props.orientation,
                      this.state.deltaX,
                      this.state.deltaY,
                      e,
                      this.props.dragStep
                    );
                    var r =
                      this.props.totalSlides -
                      Math.min(
                        this.props.totalSlides,
                        this.props.visibleSlides
                      );
                    var a = _n({ min: 0, max: r, x: this.props.currentSlide + n });
                this.props.infinite
                    && (this.props.currentSlide >= r && n > 0 && (a = 0),
                    this.props.currentSlide === 0 && n < 0 && (a = r)),
                this.props.carouselStore.setStoreState({ currentSlide: a });
              },
            },
            {
              key: 'focus',
              value() {
                this.sliderElement.focus();
              },
            },
            {
              key: 'handleOnTouchEnd',
              value(e) {
                this.endTouchMove(), this.callCallback('onTouchEnd', e);
              },
            },
            {
              key: 'handleOnTouchCancel',
              value(e) {
                this.endTouchMove(), this.callCallback('onTouchCancel', e);
              },
            },
            {
              key: 'endTouchMove',
              value() {
                this.props.touchEnabled && this.fakeOnDragEnd();
              },
            },
            {
              key: 'renderMasterSpinner',
              value() {
                var e = this.props;
                    var t = e.hasMasterSpinner;
                    var n = e.masterSpinnerFinished;
                    var r = e.spinner;
                return t && !n
                  ? ('function' === typeof this.props.onMasterSpinner
                        && this.props.onMasterSpinner(),
                  a.a.createElement(
                    "div",
                    {
                      className: mn([
                        _r.masterSpinnerContainer,
                        "carousel__master-spinner-container",
                      ]),
                    },
                    r && r(),
                    !r && a.a.createElement(Tr, null),
                  ))
                  : null;
              },
            },
            {
              key: 'render',
              value() {
                var e = this;
                    var t = this.props;
                    var n = (t.carouselStore, t.children);
                    var r = t.className;
                    var i = t.classNameAnimation;
                    var o = t.classNameTray;
                    var l = t.classNameTrayWrap;
                    var s = t.currentSlide;
                    var u = t.disableAnimation;
                    var c =
                      (t.disableKeyboard,
                      t.dragEnabled,
                      t.hasMasterSpinner,
                      t.interval,
                      t.isPageScrollLocked,
                      t.isPlaying,
                      t.lockOnWindowScroll,
                      t.masterSpinnerFinished,
                      t.moveThreshold,
                      t.naturalSlideHeight);
                    var d = t.naturalSlideWidth;
                    var f = (t.onMasterSpinner, t.orientation);
                    var p =
                      (t.playDirection,
                      t.privateUnDisableAnimation,
                      t.slideSize);
                    var h = t.slideTraySize;
                    var m = (t.spinner, t.style);
                    var g = t.tabIndex;
                    var v = (t.totalSlides, t.touchEnabled, t.trayProps);
                    var b = t.trayTag;
                    var y = t.visibleSlides;
                    var w = t.isIntrinsicHeight;
                    var x = on(t, [
                      "carouselStore",
                      "children",
                      "className",
                      "classNameAnimation",
                      "classNameTray",
                      "classNameTrayWrap",
                      "currentSlide",
                      "disableAnimation",
                      "disableKeyboard",
                      "dragEnabled",
                      "hasMasterSpinner",
                      "interval",
                      "isPageScrollLocked",
                      "isPlaying",
                      "lockOnWindowScroll",
                      "masterSpinnerFinished",
                      "moveThreshold",
                      "naturalSlideHeight",
                      "naturalSlideWidth",
                      "onMasterSpinner",
                      "orientation",
                      "playDirection",
                      "privateUnDisableAnimation",
                      "slideSize",
                      "slideTraySize",
                      "spinner",
                      "style",
                      "tabIndex",
                      "totalSlides",
                      "touchEnabled",
                      "trayProps",
                      "trayTag",
                      "visibleSlides",
                      "isIntrinsicHeight"
                    ]);
                    var S = Jt({}, m);
                    var k = {};
                "vertical" === f
                    && ((k.height = 0),
                    (k.paddingBottom = bn((100 * c * y) / d)),
                    (k.width = bn(100)));
                var E = {};
                    var C = bn(p * s * -1);
                (this.state.isBeingTouchDragged
                    || this.state.isBeingMouseDragged
                    || u)
                    && (E.transition = 'none'),
                w && ((E.display = 'flex'), (E.alignItems = 'stretch')),
                "vertical" === f
                  ? ((E.transform = 'translateY('
                    .concat(C, ') translateY(')
                    .concat(this.state.deltaY, 'px)')),
                  (E.width = bn(100)),
                  (E.flexDirection = 'column'))
                  : ((E.width = bn(h)),
                  (E.transform = 'translateX('
                    .concat(C, ') translateX(')
                    .concat(this.state.deltaX, 'px)')),
                  (E.flexDirection = 'row'));
                var T = mn([
                    "vertical" === f
                      ? _r.verticalSlider
                      : _r.horizontalSlider,
                    "carousel__slider",
                    "vertical" === f
                      ? 'carousel__slider--vertical'
                      : 'carousel__slider--horizontal',
                    r,
                  ]);
                    var O = mn([
                      _r.sliderTrayWrap,
                      "carousel__slider-tray-wrapper",
                      "vertical" === f
                        ? _r.verticalSlideTrayWrap
                        : _r.horizontalTrayWrap,
                      "vertical" === f
                        ? "carousel__slider-tray-wrap--vertical"
                        : "carousel__slider-tray-wrap--horizontal",
                      l
                    ]);
                    var P = mn([
                      _r.sliderTray,
                      i || _r.sliderAnimation,
                      "carousel__slider-tray",
                      "vertical" === f ? _r.verticalTray : _r.horizontalTray,
                      "vertical" === f
                        ? "carousel__slider-tray--vertical"
                        : "carousel__slider-tray--horizontal",
                      o
                    ]);
                    var A = null !== g ? g : 0;
                    var M =
                      (x.dragStep,
                      x.step,
                      x.infinite,
                      on(x, ["dragStep", "step", "infinite"]));
                    var _ =                      (v.className,
                      v.onClickCapture,
                      v.onMouseDown,
                      v.onTouchCancel,
                      v.onTouchEnd,
                      v.onTouchMove,
                      v.onTouchStart,
                      v.ref,
                      v.style,
                      on(v, [
                        'className',
                        'onClickCapture',
                        'onMouseDown',
                        'onTouchCancel',
                        'onTouchEnd',
                        'onTouchMove',
                        'onTouchStart',
                        'ref',
                        'style'
                      ]));
                return a.a.createElement(
                  "div",
                  Jt(
                    {
                      ref: function (t) {
                        e.sliderElement = t;
                      },
                      className: T,
                      "aria-live": 'polite',
                      style: S,
                      tabIndex: A,
                      onKeyDown: this.handleOnKeyDown,
                      role: 'listbox'
                    },
                    M,
                  ),
                  a.a.createElement(
                    "div",
                    { className: O, style: k },
                    a.a.createElement(
                      b,
                      Jt(
                        {
                          ref: this.getSliderRef,
                          className: P,
                          style: E,
                          onTouchStart: this.handleOnTouchStart,
                          onTouchMove: this.handleOnTouchMove,
                          onTouchEnd: this.handleOnTouchEnd,
                          onTouchCancel: this.handleOnTouchCancel,
                          onMouseDown: this.handleOnMouseDown,
                          onClickCapture: this.handleOnClickCapture,
                        },
                        _,
                      ),
                      n,
                    ),
                    this.renderMasterSpinner(),
                  ),
                );
              },
            },
          ]),
          t
        );
      }())),
      Zt(Sr, 'propTypes', {
        carouselStore: Pn.object.isRequired,
        children: Pn.node.isRequired,
        className: Pn.string,
        classNameAnimation: Pn.string,
        classNameTray: Pn.string,
        classNameTrayWrap: Pn.string,
        currentSlide: Pn.number.isRequired,
        disableAnimation: Pn.bool,
        disableKeyboard: Pn.bool,
        dragEnabled: Pn.bool.isRequired,
        dragStep: Pn.number,
        hasMasterSpinner: Pn.bool.isRequired,
        infinite: Pn.bool,
        interval: Pn.number.isRequired,
        isPageScrollLocked: Pn.bool.isRequired,
        isPlaying: Pn.bool.isRequired,
        lockOnWindowScroll: Pn.bool.isRequired,
        masterSpinnerFinished: Pn.bool.isRequired,
        moveThreshold: Pn.number,
        naturalSlideHeight: Pn.number.isRequired,
        naturalSlideWidth: Pn.number.isRequired,
        onMasterSpinner: Pn.func,
        orientation: Mn.orientation.isRequired,
        playDirection: Mn.direction.isRequired,
        privateUnDisableAnimation: Pn.bool,
        slideSize: Pn.number.isRequired,
        slideTraySize: Pn.number.isRequired,
        spinner: Pn.func,
        step: Pn.number.isRequired,
        style: Pn.object,
        tabIndex: Pn.number,
        totalSlides: Pn.number.isRequired,
        touchEnabled: Pn.bool.isRequired,
        trayProps: Pn.shape({
          className: Pn.string,
          onClickCapture: Pn.func,
          onMouseDown: Pn.func,
          onTouchCancel: Pn.func,
          onTouchEnd: Pn.func,
          onTouchMove: Pn.func,
          onTouchStart: Pn.func,
          ref: Pn.shape({}),
          style: Pn.string,
        }),
        trayTag: Pn.string,
        visibleSlides: Pn.number,
        isIntrinsicHeight: Pn.bool,
      }),
      Zt(Sr, 'defaultProps', {
        className: null,
        classNameAnimation: null,
        classNameTray: null,
        classNameTrayWrap: null,
        disableAnimation: !1,
        disableKeyboard: !1,
        dragStep: 1,
        infinite: !1,
        moveThreshold: 0.1,
        onMasterSpinner: null,
        privateUnDisableAnimation: !1,
        spinner: null,
        style: {},
        tabIndex: null,
        trayProps: {},
        trayTag: 'ul',
        visibleSlides: 1,
        isIntrinsicHeight: !1,
      }),
      kr),
      (e) => ({
            currentSlide: e.currentSlide,
            disableAnimation: e.disableAnimation,
            privateUnDisableAnimation: e.privateUnDisableAnimation,
            disableKeyboard: e.disableKeyboard,
            dragEnabled: e.dragEnabled,
            hasMasterSpinner: e.hasMasterSpinner,
            infinite: e.infinite,
            interval: e.interval,
            isPageScrollLocked: e.isPageScrollLocked,
            isPlaying: e.isPlaying,
            lockOnWindowScroll: e.lockOnWindowScroll,
            masterSpinnerFinished: e.masterSpinnerFinished,
            naturalSlideHeight: e.naturalSlideHeight,
            naturalSlideWidth: e.naturalSlideWidth,
            orientation: e.orientation,
            playDirection: e.playDirection,
            slideSize: e.slideSize,
            slideTraySize: e.slideTraySize,
            step: e.step,
            dragStep: e.dragStep,
            totalSlides: e.totalSlides,
            touchEnabled: e.touchEnabled,
            visibleSlides: e.visibleSlides,
            isIntrinsicHeight: e.isIntrinsicHeight
          })
    );
    n(42);
    function Fr() {
      const e = u([
        '\n  text-transform: uppercase;\n  color: ',
        ' !important;\n',
      ]);
      return (
        (Fr = function () {
          return e;
        }),
        e
      );
    }
    function Dr() {
      const e = u([
        '\n  margin-left: 3rem;\n  margin-bottom: -1vh;\n  display: flex;\n\n  @media (max-width: ',
        ') {\n    margin-left: 0rem;\n    margin-bottom: 10vh;\n    justify-content: center;\n    text-align: center;\n  }\n',
      ]);
      return (
        (Dr = function () {
          return e;
        }),
        e
      );
    }
    function Ir() {
      const e = u([
        '\n  margin: 5vh 3vw 10vh 3vw;\n  display: flex;\n  flex-direction: column;\n\n  @media (max-width: ',
        ') {\n    margin-bottom: 5vh;\n    margin-top: unset;\n  }\n',
      ]);
      return (
        (Ir = function () {
          return e;
        }),
        e
      );
    }
    function jr() {
      const e = u([
        '\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  justify-content: flex-start;\n  overflow: hidden;\n  & li {\n    height: 0;\n    display: inline-block;\n  }\n',
      ]);
      return (
        (jr = function () {
          return e;
        }),
        e
      );
    }
    function Rr() {
      const e = u([
        '\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: -5rem;\n  direction: rtl;\n  align-items: flex-start;\n\n  & > a {\n    box-sizing: border-box !important;\n    flex: 1 1 33%;\n    min-width: 20rem;\n    direction: ltr;\n    padding: 1rem;\n\n    @media only screen and (max-width: ',
        ') {\n      flex-basis: 100%;\n      min-width: 5rem;\n    }\n  }\n',
      ]);
      return (
        (Rr = function () {
          return e;
        }),
        e
      );
    }
    function zr() {
      const e = u([
        '\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n\n  & > button {\n    border: solid ',
        ';\n    border-width: 0 0.6rem 0.6rem 0;\n    display: inline-block;\n    padding: 0.6rem;\n    background: transparent;\n  }\n\n  & > .left {\n    transform: rotate(135deg);\n    margin-left: 2rem;\n  }\n\n  & > .right {\n    transform: rotate(-45deg);\n    margin-right: 2rem;\n  }\n',
      ]);
      return (
        (zr = function () {
          return e;
        }),
        e
      );
    }
    function Br() {
      const e = u([
        '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 4rem;\n',
      ]);
      return (
        (Br = function () {
          return e;
        }),
        e
      );
    }
    function Lr() {
      const e = u([
        '\n  display: flex;\n  justify-content: space-between;\n  padding: 0rem 1rem;\n\n  & > a {\n    box-sizing: border-box !important;\n    flex: 0 1 25%;\n    padding: 1rem;\n    flex-wrap: wrap;\n  }\n',
      ]);
      return (
        (Lr = function () {
          return e;
        }),
        e
      );
    }
    const Ur = l.c.div(Lr());
    var Hr = l.c.div(Br());
    var Wr = l.c.div(zr(), p.purple);
    var Vr = l.c.div(Rr(), (e) => {
        return e.theme.small;
      });
    var qr = l.c.div(jr());
    var Gr = l.c.div(Ir(), p.medium);
    var Yr = l.c.div(Dr(), p.large);
    var Kr = l.c.h3(Fr(), p.purple);
    var Qr = function (e) {
      var t = e.id;
          var n = e.slides;
      return a.a.createElement(
        "div",
        { id: t },
        a.a.createElement(
          c.Desktop,
          null,
          a.a.createElement(
            Gn,
            {
              naturalSlideWidth: 100,
              naturalSlideHeight: 27,
              totalSlides: n.length,
              currentSlide: Math.floor(n.length / 2) - 1,
            },
            a.a.createElement(
              qr,
              null,
              a.a.createElement(
                Yr,
                null,
                a.a.createElement(Kr, null, 'Stories to Follow'),
              ),
              a.a.createElement(
                Nr,
                null,
                n.map((e, t) => {
                    return a.a.createElement(
                      Ar,
                      { index: t },
                      a.a.createElement(
                        Ur,
                        null,
                        e.map(function(e) {
                          return a.a.createElement(Qe, {
                            href: e.href,
                            link: e.link,
                            photoAlt: e.photoAlt,
                            photoUrl: e.photoUrl,
                            headline: e.headline,
                            linkColor: p.purple
                          });
                        })
                      )
                    );
                  }),
              ),
              a.a.createElement(
                Hr,
                null,
                a.a.createElement(
                  Wr,
                  null,
                  a.a.createElement(ir, { class: 'left' }),
                  a.a.createElement(sr, { class: 'right' }),
                ),
              ),
            ),
          ),
        ),
        a.a.createElement(
          c.MobileAndTablet,
          null,
          a.a.createElement(
            Gr,
            null,
            a.a.createElement(
              Yr,
              null,
              a.a.createElement(Kr, null, 'Stories To Follow'),
            ),
            a.a.createElement(
              Vr,
              null,
              n.map((e) => {
                  return e.map(function(e) {
                    return a.a.createElement(Qe, {
                      href: e.href,
                      link: e.link,
                      photoAlt: e.photoAlt,
                      photoUrl: e.photoUrl,
                      headline: e.headline,
                      linkColor: p.purple
                    });
                  });
                }),
            ),
          ),
        ),
      );
    };
    var $r = Qr;
    Qr.defaultProps = { slides: null };
    const Xr = [
      {
        link:
          'https://www.columbiaspectator.com/opinion/2020/04/21/discourse-and-debate-are-we-bad-new-yorkers/',
        photoUrl:
          'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/TFDXCK62ENG65LVAS46KI6F35Y.png',
        headline: 'Discourse and Debate: Are we \u201cbad\u201d New Yorkers?',
      },
      {
        link:
          'https://www.columbiaspectator.com/opinion/2020/07/28/our-education-is-founded-on-white-supremacy-a-conscious-re-education-is-necessary/',
        photoUrl:
          'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/7LQMJ2YLQ5GDDMOWFAQWBEL3FI.JPG',
        headline:
          'Our education was founded on white supremacy. A conscious re-education is necessary.',
      },
      {
        link:
          'https://www.columbiaspectator.com/opinion/2020/03/29/100-words-we-asked-how-covid-19-has-impacted-students-lives-here-are-their-responses/',
        photoUrl:
          'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/6MTSNPXPPJEQRPTZFYEDZHPKOE.png',
        headline:
          "[100 Words]: We asked how COVID-19 has impacted students' lives. Here are their responses.",
      },
    ];
    function Zr(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }
    function Jr(e, t) {
      for (let n = 0; n < t.length; n++) {
        const r = t[n];
        (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
      }
    }
    function ea(e, t, n) {
      return t && Jr(e.prototype, t), n && Jr(e, n), e;
    }
    function ta(e) {
      return (ta = "function" === typeof Symbol && typeof Symbol.iterator === 'symbol'
        ? function (e) {
          return typeof e;
        }
        : function (e) {
          return e
                && 'function' === typeof Symbol
                && e.constructor === Symbol
                && e !== Symbol.prototype
            ? 'symbol'
            : typeof e;
        })(e);
    }
    function na(e) {
      if (void 0 === e) {throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );}
      return e;
    }
    function ra(e, t) {
      return !t || (ta(t) !== 'object' && typeof t !== 'function') ? na(e) : t;
    }
    function aa(e) {
      return (aa = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
    }
    function ia(e, t) {
      return (ia = Object.setPrototypeOf
        || function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function oa(e, t) {
      if (typeof t !== 'function' && t !== null) {throw new TypeError(
          'Super expression must either be null or a function'
        );}
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
      t && ia(e, t);
    }
    const la = [
      {
        link:
          'https://uploads.knightlab.com/storymapjs/1fb70157e6df7c9d0fab62abe8337605/orientation-1/index.html',
        name: 'Academic Buildings on Campus',
      },
      {
        link:
          'https://uploads.knightlab.com/storymapjs/1fb70157e6df7c9d0fab62abe8337605/orientation-2017-cool-spots/index.html',
        name: 'Cool Spots Around Campus',
      },
      {
        link:
          'https://uploads.knightlab.com/storymapjs/1fb70157e6df7c9d0fab62abe8337605/orientation-2017-dorms/index.html',
        name: 'Dorms',
      },
      {
        link:
          'https://uploads.knightlab.com/storymapjs/1fb70157e6df7c9d0fab62abe8337605/orientation-2017-fitness/index.html',
        name: 'Gyms and Fitness Rooms on Campus',
      },
      {
        link:
          'https://uploads.knightlab.com/storymapjs/1fb70157e6df7c9d0fab62abe8337605/orientation-2017-food/index.html',
        name: 'Food in Morningside Heights',
      },
      {
        link:
          'https://uploads.knightlab.com/storymapjs/1fb70157e6df7c9d0fab62abe8337605/orientation-2017-libraries/index.html',
        name: 'Columbia Libraries and Study Spots',
      },
      {
        link:
          'https://uploads.knightlab.com/storymapjs/1fb70157e6df7c9d0fab62abe8337605/orientation-2017-manhattanville/draft.html',
        name: 'Manhattanville',
      },
      {
        link:
          'https://uploads.knightlab.com/storymapjs/1fb70157e6df7c9d0fab62abe8337605/orientation-2017-outdoor-areas/index.html',
        name: 'Outdoor Space',
      },
      {
        link:
          'https://uploads.knightlab.com/storymapjs/1fb70157e6df7c9d0fab62abe8337605/orientation-2017-performance-areas/index.html',
        name: 'Performance Spaces',
      },
      {
        link:
          'https://uploads.knightlab.com/storymapjs/1fb70157e6df7c9d0fab62abe8337605/orientation-2017-religion/index.html',
        name: 'Religious Institutions',
      },
      {
        link:
          'https://uploads.knightlab.com/storymapjs/1fb70157e6df7c9d0fab62abe8337605/orientation-2017-stores-restaurants-bars-cafes-around-campus/index.html',
        name: 'Stores, Restaurants, Bars, and Cafes Around Campus',
      },
      {
        link:
          'https://uploads.knightlab.com/storymapjs/1fb70157e6df7c9d0fab62abe8337605/orientation-2017-student-services/index.html',
        name: 'Student Services',
      },
      {
        link:
          'https://uploads.knightlab.com/storymapjs/1fb70157e6df7c9d0fab62abe8337605/orientation-2017-where-students-can-hang-out/index.html',
        name: 'Hang Out',
      },
    ];
    function sa() {
      const e = u(['\n  color: white !important;\n']);
      return (
        (sa = function () {
          return e;
        }),
        e
      );
    }
    function ua() {
      const e = u([
        '\n  flex: 1 1 60%;\n  & iframe {\n    height: 100%;\n    width: 100%;\n    border: none;\n  }\n\n  @media only screen and (max-width: ',
        ') {\n    height: 100vh;\n    -webkit-overflow-scrolling: touch;\n  }\n',
      ]);
      return (
        (ua = function () {
          return e;
        }),
        e
      );
    }
    function ca() {
      const e = u([
        '\n  flex: 1 1 40%;\n  padding-right: 3vw;\n  border: 1rem;\n  box-sizing: border-box !important;\n  & > div {\n    background: #ffd05f;\n    padding: 2rem;\n    position: relative;\n    box-sizing: border-box !important;\n\n    & h2 {\n      color: white;\n      text-transform: uppercase;\n      @media (max-width: ',
        ') {\n        text-align: center;\n      }\n    }\n\n    & div {\n      cursor: pointer;\n      transform: translateX(1rem);\n\n      &:focus {\n        outline: none;\n      }\n\n      &:hover,\n      &.active {\n        font-style: italic;\n      }\n\n      & p {\n        padding: 0.3rem;\n        color: white !important;\n        font-weight: bold;\n\n        @media (max-width: ',
        ') {\n          font-size: 1rem;\n        }\n      }\n    }\n  }\n  @media only screen and (max-width: ',
        ') {\n    margin: 5vh 3vw;\n  }\n',
      ]);
      return (
        (ca = function () {
          return e;
        }),
        e
      );
    }
    function da() {
      const e = u([
        '\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: stretch;\n  margin: 5vh 3vw;\n\n  @media only screen and (max-width: ',
        ') {\n    flex-direction: column-reverse;\n    margin: unset;\n  }\n\n  & * {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n',
      ]);
      return (
        (da = function () {
          return e;
        }),
        e
      );
    }
    const fa = l.c.div(da(), (e) => e.theme.medium);
    var pa = l.c.div(ca(), p.large, p.large, (e) => {
        return e.theme.medium;
      });
    var ha = l.c.div(ua(), (e) => {
        return e.theme.medium;
      });
    var ma = l.c.h3(sa());
    var ga = (function (e) {
      function t(e) {
        var n;
        return (
          Zr(this, t),
          ((n = ra(this, aa(t).call(this, e))).state = {
            currentMap: la[0].link,
          }),
          (n.handleSelect = n.handleSelect.bind(na(n))),
          n
        );
      }
      return (
        oa(t, r.Component),
        ea(t, [
          {
            key: 'handleSelect',
            value: function (e) {
              this.setState({
                currentMap: la.find((t) => {
                    var n = t.name;
                    return e.currentTarget.textContent === n;
                  }).link,
              });
            },
          },
          {
            key: 'render',
            value: function () {
              var e = this;
                  var t = this.state.currentMap;
              return a.a.createElement(
                a.a.Fragment,
                null,
                a.a.createElement(
                  c.ResponsiveComponent,
                  { min: 768 },
                  a.a.createElement(
                    fa,
                    null,
                    a.a.createElement(
                      pa,
                      null,
                      a.a.createElement(
                        "div",
                        null,
                        a.a.createElement(ma, null, 'MAPS'),
                        la.map((n, r) => {
                            var i = n.name,
                              o = n.link;
                            return a.a.createElement(
                              "div",
                              {
                                key: i,
                                onClick: e.handleSelect,
                                onKeyDown: e.handleClick,
                                role: "button",
                                tabIndex: r,
                                className: o === t && "active"
                              },
                              a.a.createElement("p", null, i)
                            );
                          }),
                      ),
                    ),
                    a.a.createElement(
                      ha,
                      { id: 'map' },
                      a.a.createElement('iframe', {
                        title: 'map-iframe',
                        src: t,
                      }),
                    ),
                  ),
                ),
              );
            },
          },
        ]),
        t
      );
    }());
    var va = [
      { title: 'campus life', id: 'gettoknow' },
      { title: 'academics', id: 'gettoknow' },
      { title: 'courses we loved', id: 'banner' },
      { title: '24 traditions for the class of 2024', id: 'banner' },
      { title: 'textbooks', id: 'banner' },
      { title: 'maps', id: 'maps' },
      { title: 'stories to follow', id: 'stories' },
      { title: 'join the discourse', id: 'discourse' },
      { title: 'spectator staff', id: 'staff' },
    ];
    var ba = [
      {
        title: 'COURSES WE LOVED',
        url:
            'https://www.columbiaspectator.com/spectrum/2019/08/22/courses-we-loved-staff-picks-for-2019/',
        color: p.purple,
        shadowColor: p.orange,
      },
      {
        title: 'PREPARE FOR COURSE REGISTRATION DOWNLOAD VERGIL+',
        url:
            'https://www.columbiaspectator.com/spectrum/2018/04/30/vergils-debut-how-to-make-registration-a-piece-of-cake/',
        color: p.orange,
        shadowColor: p.orange,
      },
      {
        title: '24 TRADITIONS FOR THE CLASS OF 2024',
        url:
            'https://www.columbiaspectator.com/orientation-2018/116-traditions/',
        color: p.yellow,
        shadowColor: p.orange,
      },
      {
        title: 'GET TEXTBOOKS',
        url: '/orientation-2020/#/textbooks',
        color: p.navy,
        shadowColor: p.orange,
      },
    ];
    var ya = [
      {
        title: 'COURSES WE LOVED',
        url:
            'https://www.columbiaspectator.com/spectrum/2019/08/22/courses-we-loved-staff-picks-for-2019/',
        color: p.purple,
      },
      {
        title: 'DOWNLOAD VERGIL+',
        url:
            'https://www.columbiaspectator.com/spectrum/2018/04/30/vergils-debut-how-to-make-registration-a-piece-of-cake/',
        color: p.orange,
      },
      {
        title: '116 THINGS TO DO BEFORE GRADUATING',
        url:
            'https://www.columbiaspectator.com/orientation-2018/116-traditions/',
        color: p.yellow,
      },
      {
        title: 'GET YOUR TEXTBOOKS',
        url: '/orientation-2020/#/textbooks',
        color: p.navy,
      },
      {
        title: 'MAPS',
        url:
            'https://www.columbiaspectator.com/orientation-2018/campus-maps/',
        color: p.purple,
      },
    ];
    var wa = [
      {
        title: 'Corporate Board',
        members: [
          "Katherine Gerberich, Editor in Chief",
          "Rahil Kamath, Managing Editor",
          "Nima Mozhgani, Publisher",
        ],
      },
      {
        title: 'Design',
        members: [
          "Michelle Shin, Design Editor",
          "Kelly Pu, Layout Deputy Editor",
          "Jason Kao, Eye Graphics Deputy Editor",
          "Helen Yang, Opinions Illustrations Deputy Editor",
          "Brenda Huang, Eye Illustrations Deputy Editor",
          "Tassneen Bashir, Animations Deputy Editor",
        ],
      },
      {
        title: 'News',
        members: [
          "Karen Xia, News Editor",
          "Valeria Escobar, Deputy News Editor",
          "Shubham Saharan, Senior Staff Writer",
          "Emma James, Senior Staff Writer",
          "Nelson Luna, Staff Writer",
        ],
      },
      {
        title: 'Opinion',
        members: [
          "Kaili Meier, Co-Editorial Page Editor",
          "Erin Neil, Co-Editorial Page Editor",
          "Kyra Dawkins, Deputy Editorial Page Editor",
        ],
      },
      {
        title: 'A&E',
        members: [
          "Sarah Beckley, A&E Editor",
          "Isabela Espadas Barros Leal, A&E Deputy Editor",
          "Sarah Robertson, A&E Deputy Editor",
          "Gia Kim, A&E Deputy Editor",
          "Fonda Shen, A&E Deputy Editor",
          "Samuel Jones, A&E Deputy Editor",
          "Alejandra Quintana, A&E Deputy Editor",
          "Abby Rooney, A&E Deputy Editor",
        ],
      },
      {
        title: 'Copy',
        members: [
          "Sarah Braka, Deputy Copy Editor",
          "Eden Teferi, Deputy Copy Editor",
          "Mar\xeda Thompson, Preslotter",
        ],
      },
      {
        title: 'Product',
        members: [
          "Arsalaan Ansari, Head of Engineering",
          "William Chiu, Engineering Manager",
          "Cecilia Ordu\xf1a, Lead Product Designer",
          "Matthew Vanegas, Senior Developer",
          "Harrison Wang, Developer",
          "Elaine Wang, Developer",
          "Chenoa Gale, Developer",
        ],
      },
      {
        title: 'Engagement',
        members: [
          "Isabel Jauregui, Engagement Director",
          "Madison Harden, Senior Engagement Manager",
          "Hailey Shi, Engagement Manager",
          "Jake Fisher, Engagement Manager",
        ],
      },
      {
        title: 'Revenue',
        members: [
          "Sarah Peters, Sales Manager",
          "Katrina Yin, Growth Manager",
        ],
      },
      {
        title: 'Sports',
        members: [
          "Harry Walker, Staff Writer",
          "Elizabeth Karpen, Staff Writer",
        ],
      },
      { title: 'Spectrum', members: ['Grace Lin, Spectrum Editor'] },
      { title: 'Photo', members: ['Natalie Guerra, Photo Editor'] },
    ];
    var xa = [
      {
        title: 'Corporate Board',
        members: [
          "Katherine Gerberich, Editor in Chief",
          "Rahil Kamath, Managing Editor",
          "Nima Mozhgani, Publisher",
        ],
      },
      {
        title: 'Design',
        members: [
          "Michelle Shin, Design Editor",
          "Kelly Pu, Layout Deputy Editor",
          "Jason Kao, Eye Graphics Deputy Editor",
          "Helen Yang, Opinions Illustrations Deputy Editor",
          "Brenda Huang, Eye Illustrations Deputy Editor",
          "Tassneen Bashir, Animations Deputy Editor",
        ],
      },
      {
        title: 'Opinion',
        members: [
          "Kaili Meier, Co-Editorial Page Editor",
          "Erin Neil, Co-Editorial Page Editor",
          "Kyra Dawkins, Deputy Editorial Page Editor",
        ],
      },
      {
        title: 'Revenue',
        members: [
          "Sarah Peters, Sales Manager",
          "Katrina Yin, Growth Manager",
        ],
      },
      {
        title: 'Product',
        members: [
          "Arsalaan Ansari, Head of Engineering",
          "William Chiu, Engineering Manager",
          "Cecilia Ordu\xf1a, Lead Product Designer",
          "Matthew Vanegas, Senior Developer",
          "Harrison Wang, Developer",
          "Elaine Wang, Developer",
          "Chenoa Gale, Developer",
        ],
      },
      { title: 'Spectrum', members: ['Grace Lin, Spectrum Editor'] },
      {
        title: 'News',
        members: [
          "Karen Xia, News Editor",
          "Valeria Escobar, Deputy News Editor",
          "Shubham Saharan, Senior Staff Writer",
          "Emma James, Senior Staff Writer",
          "Nelson Luna, Staff Writer",
        ],
      },
      {
        title: 'A&E',
        members: [
          "Sarah Beckley, A&E Editor",
          "Isabela Espadas Barros Leal, A&E Deputy Editor",
          "Sarah Robertson, A&E Deputy Editor",
          "Gia Kim, A&E Deputy Editor",
          "Fonda Shen, A&E Deputy Editor",
          "Samuel Jones, A&E Deputy Editor",
          "Alejandra Quintana, A&E Deputy Editor",
          "Abby Rooney, A&E Deputy Editor",
        ],
      },
      {
        title: 'Copy',
        members: [
          "Sarah Braka, Deputy Copy Editor",
          "Eden Teferi, Deputy Copy Editor",
          "Mar\xeda Thompson, Preslotter",
        ],
      },
      {
        title: 'Sports',
        members: [
          "Harry Walker, Staff Writer",
          "Elizabeth Karpen, Staff Writer",
        ],
      },
      { title: 'Photo', members: ['Natalie Guerra, Photo Editor'] },
      {
        title: 'Engagement',
        members: [
          "Isabel Jauregui, Engagement Director",
          "Madison Harden, Senior Engagement Manager",
          "Hailey Shi, Engagement Manager",
          "Jake Fisher, Engagement Manager",
        ],
      },
    ];
    var Sa = {
      image:
          'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/ZNKTNLGKAFHUTFSIXC4HFO3OR4.jpeg'
    };
    var ka = [
      { tab: 'BARNUMBIA', tabLink: '/orientation-2020/#/barnumbia' },
      { tab: 'CAMPUS LIFE', tabLink: '/orientation-2020/#/campus' },
      { tab: 'ACADEMICS', tabLink: '/orientation-2020/#/registration' },
    ];
    var Ea = [
      [
        {
          href: 1,
          link:
              'http://columbiaspectator.com/news/2019/08/22/manhattanville-move-progresses-but-faces-fundraising-delays/',
          photoUrl:
              'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/J5VNCTISZFGZJDST3TTWOK2KNE.jpg',
          photoAlt: 'manhattanville',
          headline:
              'Manhattanville move progresses, but faces fundraising delays'
        },
        {
          href: 2,
          link:
              'https://www.columbiaspectator.com/news/2019/08/22/elite-college-admissions-under-national-scrutiny/',
          photoUrl:
              'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/YAWDMXHTGVHZHEOV745FERFK3I.jpg',
          photoAlt: 'College Admissions',
          headline: 'Elite college admissions under national scrutiny'
        },
        {
          href: 3,
          link:
              'https://www.columbiaspectator.com/news/2019/08/22/barnard-poised-for-sweeping-administrative-changes/',
          photoUrl:
              'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/RALDR4APQZCCVGLZ3WIXPOE2LM',
          photoAlt: 'Barnard administration',
          headline: 'Barnard poised for sweeping administrative changes'
        },
        {
          href: 4,
          link:
              'https://www.columbiaspectator.com/news/2019/08/22/barnard-public-safety-faces-extensive-investigation-as-students-cite-incidents-of-antiblack-racism/',
          photoUrl:
              'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/VUII2WXMNVHFPMQFYH5W26XWYM.jpg',
          photoAlt: 'Barnard Public Safety',
          headline:
              'Barnard Public Safety faces extensive investigation as students cite incidents of antiblack racism'
        },
      ],
      [
        {
          href: 5,
          link:
              'http://columbiaspectator.com/news/2019/08/22/columbia-faces-major-transition-period-following-series-of-administrative-hires/',
          photoUrl:
              'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/VU4IBS6FUZBSRCX47NNCDYQ45E.jpg',
          photoAlt: 'Columbia administration',
          headline:
              'Columbia faces major transition period following series of administrative hires'
        },
        {
          href: 6,
          link:
              'https://www.columbiaspectator.com/news/2019/08/22/centennial-anniversary-of-the-core-marked-by-heated-debates-over-curriculums-diversity/',
          photoUrl:
              'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/4EDU67YKSBBIJPHSRFNJ3OCC6U.jpeg',
          photoAlt: '100th anniversary of core',
          headline:
              'Centennial anniversary of the Core marked by heated debates over curriculum\u2019s diversity'
        },
        {
          href: 7,
          link:
              'https://www.columbiaspectator.com/news/2019/08/22/as-manhattanville-expands-columbia-continues-to-shape-its-relationship-with-harlem/',
          photoUrl:
              'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/PIGWCZ5Z7BERROWJDIDUXSLG4M.jpg',
          photoAlt: 'WHDC',
          headline:
              'As Manhattanville expands, Columbia continues to shape its relationship with Harlem'
        },
        {
          href: 8,
          link:
              'https://www.columbiaspectator.com/sports/2019/08/22/looking-back-at-the-2018-19-season/',
          photoUrl:
              'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/LUNTZKDWGVAWBDMTFW5QWRNPHU.jpg',
          photoAlt: 'looking back at the 18-19 sports season',
          headline: 'Looking back at the 2018-19 season'
        },
      ],
    ];
    var Ca = function () {
      return a.a.createElement(
        'div',
        null,
        a.a.createElement(W, { id: 'welcome', tocEntries: va }),
        a.a.createElement(ft, {
          title: 'LIKE WHAT YOU SEE?',
          body: !1,
          link: 'http://www.specpublishing.com/join',
        }),
        a.a.createElement(Kt, {
          id: 'gettoknow',
          getToKnow: ka,
          backgroundImage: Sa,
        }),
        a.a.createElement(ae, {
          id: 'banner',
          buttons: ba,
          mobileButtons: ya,
        }),
        a.a.createElement(ga, null),
        a.a.createElement($r, { id: 'stories', slides: Ea }),
        a.a.createElement(
          Be,
          { id: 'discourse' },
          Xr.map((e) => a.a.createElement(Qe, {
                link: e.link,
                photoUrl: e.photoUrl,
                headline: e.headline,
                linkColor: p.orange
              })),
        ),
        a.a.createElement(Ft, {
          title: 'LIKE WHAT YOU SEE?',
          body: !1,
          link: 'http://www.specpublishing.com/join',
          recognition:
              'COVER ART BY: HELEN YANG WEBSITE DESIGN BY: CECILIA ORDU\xd1A DEVELOPED BY: ARSALAAN ANSARI, WILLIAM CHIU, HARRISON WANG, ELAINE WANG, BILL CHEN & CHENOA BUNTS-ANDERSON',
        }),
        a.a.createElement(Ee, {
          id: 'staff',
          staffInfo: wa,
          staffInfoMobile: xa,
        }),
      );
    };
    function Ta() {
      const e = u([
        '\n  background: ',
        ';\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n',
      ]);
      return (
        (Ta = function () {
          return e;
        }),
        e
      );
    }
    function Oa() {
      const e = u([
        '\n  display: block;\n  max-width: 100%;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n',
      ]);
      return (
        (Oa = function () {
          return e;
        }),
        e
      );
    }
    function Pa() {
      const e = u(['\n  color: ', ' !important;\n  padding: 1.5rem;\n']);
      return (
        (Pa = function () {
          return e;
        }),
        e
      );
    }
    function Aa() {
      const e = u(['\n  display: block;\n  text-decoration: none;\n']);
      return (
        (Aa = function () {
          return e;
        }),
        e
      );
    }
    const Ma = l.c.a(Aa());
    var _a = l.c.h4(Pa(), p.navy);
    var Na = l.c.img(Oa());
    var Fa = l.c.div(Ta(), p.purple);
    function Da(e) {
      const t = e.link;
      var n = e.photoAlt;
      var r = e.photoUrl;
      var i = e.headline;
      return a.a.createElement(
        Ma,
        { href: t, target: '_blank' },
        a.a.createElement(Na, { alt: n, src: r }),
        a.a.createElement(Fa, null, a.a.createElement(_a, null, i)),
      );
    }
    Da.defaultProps = { photoAlt: '' };
    const Ia = Da;
    function ja() {
      const e = u([
        '\n  margin: 0vh 15vw;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: left;\n  flex-wrap: wrap;\n  flex-grow: 0;\n  & > div {\n    box-sizing: border-box !important;\n    flex: 0 1 33%;\n    padding: 1rem;\n    display: flex;\n    flex-wrap: wrap;\n    max-width: 100%;\n    max-height: 100%;\n    @media (max-width: ',
        ') {\n      flex: 0 1 50%;\n    }\n    @media (max-width: ',
        ') {\n      flex: 0 1 100%;\n    }\n  }\n\n  &::after {\n    content: "";\n    flex: auto;\n    width: 30vw;\n    flex-grow: 0;\n  }\n',
      ]);
      return (
        (ja = function () {
          return e;
        }),
        e
      );
    }
    function Ra() {
      const e = u(['\n  width: 100%;\n  height: 100%;\n  display: block;\n']);
      return (
        (Ra = function () {
          return e;
        }),
        e
      );
    }
    function za() {
      const e = u(['\n  margin: 3vh 0vw 3vh 0vw;\n  text-align: center;\n']);
      return (
        (za = function () {
          return e;
        }),
        e
      );
    }
    function Ba() {
      const e = u([
        '\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  align-items: center;\n',
      ]);
      return (
        (Ba = function () {
          return e;
        }),
        e
      );
    }
    function La() {
      const e = u(['']);
      return (
        (La = function () {
          return e;
        }),
        e
      );
    }
    const Ua = l.c.div(La());
    var Ha = l.c.div(Ba());
    var Wa = l.c.h2(za());
    var Va = l.c.div(Ra());
    var qa = l.c.div(ja(), p.medium, p.small);
    var Ga = function (e) {
      let t = e.title;
      var n = e.data;
      return a.a.createElement(
        Ua,
        null,
        a.a.createElement(Wa, null, t),
        a.a.createElement(
          Ha,
          null,
          a.a.createElement(
            qa,
            null,
            n.map((e) => a.a.createElement(
                  Va,
                  null,
                  a.a.createElement(Ia, {
                    link: e.link,
                    photoUrl: e.photoUrl,
                    photoAlt: e.photoAlt,
                    headline: e.headline
                  })
                )),
          ),
        ),
      );
    };
    function Ya() {
      const e = u(['\n  @media (max-width: ', ') {\n    padding: 1rem;\n  }\n']);
      return (
        (Ya = function () {
          return e;
        }),
        e
      );
    }
    function Ka() {
      const e = u([
        '\n  &:hover {\n    color: ',
        ';\n  }\n\n  @media (max-width: ',
        ') {\n    font-size: 1.2rem;\n  }\n',
      ]);
      return (
        (Ka = function () {
          return e;
        }),
        e
      );
    }
    function Qa() {
      const e = u([
        '\n  padding: 3rem;\n  border: 1rem;\n  box-sizing: border-box !important;\n  & * {\n    color: white;\n  }\n  background: ',
        ';\n',
      ]);
      return (
        (Qa = function () {
          return e;
        }),
        e
      );
    }
    function $a() {
      const e = u(['']);
      return (
        ($a = function () {
          return e;
        }),
        e
      );
    }
    function Xa() {
      const e = u(['\n  margin: 3vh 2vw 3vh 2vw;\n  text-align: center;\n']);
      return (
        (Xa = function () {
          return e;
        }),
        e
      );
    }
    function Za() {
      const e = u([
        '\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n\n  @media (max-width: ',
        ') {\n    flex-direction: column;\n    margin: 5vh 5vw;\n  }\n',
      ]);
      return (
        (Za = function () {
          return e;
        }),
        e
      );
    }
    function Ja() {
      const e = u([
        '\n  width: 75%;\n  @media (max-width: ',
        ') {\n    width: 90%;\n  }\n',
      ]);
      return (
        (Ja = function () {
          return e;
        }),
        e
      );
    }
    function ei() {
      const e = u([
        '\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n',
      ]);
      return (
        (ei = function () {
          return e;
        }),
        e
      );
    }
    const ti = l.c.div(ei());
    var ni = l.c.div(Ja(), p.medium);
    var ri = l.c.div(Za(), p.medium);
    var ai = l.c.h2(Xa());
    var ii = l.c.h2($a());
    var oi = l.c.div(Qa(), (e) => {
        return e.color;
      });
    var li = l.c.a(Ka(), p.navy, p.medium);
    var si = l.c.div(Ya(), p.medium);
    var ui = [
      { title: 'Sappho', url: 'https://amzn.to/2KTo7PD' },
      { title: 'The Odyssey', url: 'https://amzn.to/31RHi1Y' },
      { title: 'The Bible', url: 'https://amzn.to/2ZkFbSt' },
      { title: 'The Histories', url: 'https://amzn.to/2KTr16Z' },
      { title: 'Oresteia', url: 'https://amzn.to/33YzIoe' },
      { title: 'Antigone', url: 'https://amzn.to/33UCpH4' },
      {
        title: 'Father Comes Home From the Wars',
        url: 'https://amzn.to/2ZatFOt'
      },
      { title: 'The Symposium', url: 'https://amzn.to/2HlbpH8' },
      { title: 'The Aeneid', url: 'https://amzn.to/33VdEL2' },
      { title: 'Metamorphoses', url: 'https://amzn.to/2Zml7iE' },
      { title: 'Confessions', url: 'https://amzn.to/2ZiFQnC' },
      { title: 'The Inferno', url: 'https://amzn.to/2KQvI1c' },
      { title: 'Essays', url: 'https://amzn.to/33TnME6' },
      { title: 'Macbeth', url: 'https://amzn.to/2KS1J9h' },
      { title: 'Don Quixote', url: 'https://amzn.to/31Yu9nD' },
      { title: 'Paradise Lost', url: 'https://amzn.to/2ZnUgH6' },
      { title: 'Pride and Prejudice', url: 'https://amzn.to/321Zc1Q' },
      { title: 'Crime & Punishment', url: 'https://amzn.to/2KSGIuY' },
      { title: 'To the Lighthouse', url: 'https://amzn.to/2HjYSUf' },
      { title: 'Song of Solomon', url: 'https://amzn.to/2ZomAJf' },
    ];
    var ci = [
      { title: 'Principles of Econ', url: 'https://amzn.to/31Xm7eT' },
      {
        title: 'Intro to Stats with Calculus',
        url: 'https://amzn.to/2KP0eJ0'
      },
      { title: 'Intro to Java', url: 'https://amzn.to/2HnrWKO' },
      { title: 'Calculus I & III', url: 'https://amzn.to/2HhHBLF' },
      {
        title: 'Intro Physics (1400 or 1600)',
        url: 'https://amzn.to/2Hk2Qw7 '
      },
      { title: 'General Chemistry ', url: 'https://amzn.to/2KSSRjS' },
    ];
    var di = function (e) {
      var t = e.title;
      return a.a.createElement(
        ti,
        null,
        a.a.createElement(ai, null, t),
        a.a.createElement(
          ni,
          null,
          a.a.createElement(
            ri,
            null,
            a.a.createElement(
              oi,
              { color: p.purple },
              a.a.createElement(ii, null, 'Lithum'),
              ui.map((e) => {
                  return a.a.createElement(
                    si,
                    null,
                    a.a.createElement(
                      li,
                      {
                        href: e.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: { textDecoration: "none" }
                      },
                      e.title
                    )
                  );
                }),
            ),
            a.a.createElement(
              oi,
              { color: p.orange },
              a.a.createElement('h2', null, 'SEAS'),
              ci.map((e) => {
                  return a.a.createElement(
                    si,
                    null,
                    a.a.createElement(
                      li,
                      {
                        href: e.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: { textDecoration: "none" }
                      },
                      e.title
                    )
                  );
                }),
            ),
          ),
        ),
      );
    };
    var fi = n(27);
    function pi() {
      const e = u(['\n  position: sticky;\n  top: 0px;\n  z-index: 99999;\n']);
      return (
        (pi = function () {
          return e;
        }),
        e
      );
    }
    function hi() {
      const e = u([
        '\n  display: flex;\n  width: 100vw;\n  align-items: flex-end;\n',
      ]);
      return (
        (hi = function () {
          return e;
        }),
        e
      );
    }
    function mi() {
      const e = u([
        '\n  width: 80%;\n  object-fit: contain;\n\n  @media only screen and (max-height: ',
        ') {\n    height: 60px;\n  }\n',
      ]);
      return (
        (mi = function () {
          return e;
        }),
        e
      );
    }
    function gi() {
      const e = u([
        '\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: ',
        ';\n  text-align: center;\n  height: 100%;\n  width: 10vw;\n  @media (max-width: ',
        ') {\n    margin-left: 0vw;\n    width: 40vw;\n  }\n',
      ]);
      return (
        (gi = function () {
          return e;
        }),
        e
      );
    }
    function vi() {
      const e = u([
        '\n  color: white !important;\n  font-family: "HalloEuroboy", sans-serif;\n  font-size: 1.3rem;\n\n  @media (max-width: 1350px) {\n    height: auto;\n    padding-left: 1vw;\n    padding-right: 1vw;\n    line-height: 0.8;\n  }\n  @media (max-width: ',
        ') {\n    padding-bottom: 4vh;\n    font-size: 2rem;\n  }\n',
      ]);
      return (
        (vi = function () {
          return e;
        }),
        e
      );
    }
    function bi() {
      const e = u([
        '\n  text-align: center;\n  @media (max-width: ',
        ') {\n    margin-bottom: 2vh;\n  }\n',
      ]);
      return (
        (bi = function () {
          return e;
        }),
        e
      );
    }
    function yi() {
      const e = u([
        '\n  display: flex;\n  flex-direction: inline-row;\n  overflow: visible;\n  top: 20rem;\n  height: 6vh;\n  background: ',
        ';\n  justify-content: space-between;\n  align-items: center;\n  color: ',
        ';\n\n  & > :first-child {\n    margin-left: 2vw;\n  }\n\n  @media (max-width: ',
        ') {\n    display: flex;\n    align-items: center;\n    height: 60px;\n    background: ',
        ';\n  }\n\n  @media only screen and (max-height: ',
        ') {\n    height: 60px;\n  }\n',
      ]);
      return (
        (yi = function () {
          return e;
        }),
        e
      );
    }
    const wi = "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/ZKALKJLFQFECNGLNTICSJUMFF4.png";
    var xi = l.c.div(yi(), p.navy, p.navy, p.large, p.yellow, p.large);
    var Si = l.c.div(bi(), p.large);
    var ki = l.c.a(vi(), p.large);
    var Ei = l.c.div(gi(), p.yellow, p.large);
    var Ci = l.c.img(mi(), p.large);
    var Ti = l.c.div(hi());
    var Oi = l.c.div(pi());
    var Pi = {
      bmBurgerButton: {
        position: 'relative',
        width: '35px',
        height: '30px',
        left: '56vw',
        top: '0'
      },
      bmBurgerBars: { background: p.navy },
      bmMenu: {
        background: 'black',
        padding: '2.5em 1.5em 0',
        fontSize: '1.0em'
      },
      bmCross: { background: 'white' },
      bmOverlay: { background: 'rgba(0, 0, 0, 0.4)' },
      bmMenuWrap: { position: 'fixed', top: '0' },
    };
    var Ai = (function (e) {
      function t(e) {
        let n;
        return (
          Zr(this, t),
          ((n = ra(this, aa(t).call(this, e))).state = { menuOpen: !1 }),
          (n.closeMenu = n.closeMenu.bind(na(n))),
          (n.handleStateChange = n.handleStateChange.bind(na(n))),
          n
        );
      }
      return (
        oa(t, r.Component),
        ea(t, [
          {
            key: 'closeMenu',
            value() {
              this.setState({ menuOpen: !1 });
            },
          },
          {
            key: 'handleStateChange',
            value(e) {
              this.setState({ menuOpen: e.isOpen });
            },
          },
          {
            key: 'render',
            value() {
              var e = this;
                  var t = this.props.entries;
                  var n = this.state.menuOpen;
              return a.a.createElement(
                Oi,
                null,
                a.a.createElement(
                  c.Desktop,
                  null,
                  a.a.createElement(
                    xi,
                    null,
                    t.map((e) => {
                        var t = e.linkUrl,
                          n = e.title;
                        return a.a.createElement(
                          Si,
                          null,
                          a.a.createElement(
                            ki,
                            {
                              href: t,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              style: { textDecoration: "none" }
                            },
                            n
                          )
                        );
                      }),
                    a.a.createElement(
                      Ei,
                      null,
                      a.a.createElement(
                        "a",
                        {
                          href: 'https://www.columbiaspectator.com/',
                          "aria-label": 'image link'
                        },
                        a.a.createElement(Ci, { src: wi }),
                      ),
                    ),
                  ),
                ),
                a.a.createElement(
                  c.MobileAndTablet,
                  null,
                  a.a.createElement(
                    xi,
                    null,
                    a.a.createElement(
                      Ei,
                      null,
                      a.a.createElement(Ci, { src: wi }),
                    ),
                    a.a.createElement(
                      Ti,
                      null,
                      a.a.createElement(
                        fi.slide,
                        {
                          right: !0,
                          noOverlay: !0,
                          width: '250px',
                          styles: Pi,
                          isOpen: n,
                          onStateChange: function (t) {
                            return e.handleStateChange(t);
                          },
                        },
                        t.map((e) => {
                            var t = e.linkUrl,
                              n = e.title;
                            return a.a.createElement(
                              Si,
                              null,
                              a.a.createElement(
                                ki,
                                {
                                  href: t,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  style: { textDecoration: "none" }
                                },
                                n
                              )
                            );
                          }),
                      ),
                    ),
                  ),
                ),
              );
            },
          },
        ]),
        t
      );
    }());
    Ai.defaultProps = { entries: null };
    const Mi = [
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2018/08/18/barnumbia-101-the-relationship-roadmap/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/WA2PTR57GFELPBLWPUHMZRZVTU.jpg',
        headline: 'Barnumbia 101: The Relationship Roadmap',
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2019/04/08/a-day-in-the-life-of-a-columbia-college-student/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/UMEJFRONCVA7DA6GJ5OGOI7W4I.jpeg',
        headline: 'A day in the life of a Columbia College student',
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2019/04/17/a-day-in-the-life-of-a-barnard-student/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/C2HOGWVUAVCTHCIIWI3RVZTFDE.jpg',
        headline: 'A day in the life of a Barnard student',
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2018/09/19/a-guide-to-social-scene-at-barnumbia/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/XMS64MVEV5A25BHT2I5CDOKDQE.jpg',
        headline: 'A Guide to Social Scene at Barnumbia',
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2018/09/30/columbia-mean-girls-map-where-to-find-10-high-school-archetypes-at-columbia/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/OSCCBBJJAZDTZK2RGCQ34OWD2A.png',
        headline:
            'Columbia Mean Girls map: Where to find 10 high school archetypes at Columbia',
      },
      {
        link:
            'https://www.columbiaspectator.com/arts-and-entertainment/2019/08/21/a-short-and-sweet-where-and-what-to-eat-from-specs-arts-entertainment-editors/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/FHP4K2NI7VENNNKYVTX32SKZGQ.JPG',
        headline:
            'A short and sweet where and what to eat from Spec\u2019s arts and entertainment editors',
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2019/02/21/9-bars-near-campus-you-shouldnt-miss/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/QBPIR3MY6BATZKBG7NTMKV2VYE.jpg',
        headline: '9 bars near campus you shouldn\u2019t miss',
      },
      {
        link:
            'https://www.columbiaspectator.com/arts-and-entertainment/2019/08/22/creative-corners-on-campus-for-seeing-making-and-displaying-art/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/HN4IETPQT5GTPBMODNISOP7CTQ.jpg',
        headline:
            'Creative corners on campus for seeing, making, and displaying art',
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2019/05/21/your-guide-to-nyc-on-a-student-budget/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/MJA6EXXXS5GRLBBYVU4J26RTUQ.jpg',
        headline: 'Your guide to NYC on a student budget',
      },
    ];
    var _i = [
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2018/08/18/spectrums-guide-to-building-the-the-perfect-schedule/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/DPX7VALB5RFQZDJGBVDMNUQYPE.jpg',
        headline: 'Spectrum\u2019s Guide to Building the Perfect Schedule'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2017/04/17/todays-the-first-day-of-course-registration-heres-what-you-need-to-do-to-get-prepared/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/CUZB7RQKP5A63A4BI62QFQJEPI',
        headline:
            'Today\u2019s the first day of course registration. Here\u2019s what you need to do to get prepared'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2019/05/20/interesting-classes-to-take-your-first-semester/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/DNRZ47SIWBDMJDLQO7VTQOJPRM.jpg',
        headline: 'Interesting classes to take your first semester'
      },
      {
        link:
            'https://www.columbiaspectator.com/required-reading/2017/07/10/registration-rules-what-is-the-shopping-period-and-how-do-you-tackle-it/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/SZTCKOYH3NEBFON7TYXF5QHZRE.png',
        headline:
            'Registration Rules: What is the shopping period and how do you tackle it?'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2019/08/22/six-professors-to-keep-on-your-radar-this-fall/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/LDJSCOJT2JEAJOKE2IIDUF2M3I.jpg',
        headline: 'Six professors to keep on your radar this fall'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2017/04/12/requirements-made-easy-best-classes-to-fulfill-columbias-pe-requirement-for-the-non-athletic/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/ZKKAWGSKTJHSDKSHNDJ5MXPSBQ',
        headline:
            'Requirements Made Easy: Best classes to fulfill Columbia\u2019s PE requirement for the non-athletic'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2017/04/11/requirements-made-easy-best-classes-to-fulfill-the-global-core-requirement/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/BSXJGP264FDRBIO2665BGWUHR4',
        headline:
            'Requirements Made Easy: Best classes to fulfill the Global Core requirement'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2017/04/10/requirements-made-easy-best-classes-to-fulfill-columbias-science-requirement/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/BOVJFHNSEZDLLAFUI6M5PWG2ZY',
        headline:
            'Requirements Made Easy: Best classes to fulfill Columbia\u2019s science requirement'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2018/09/17/barnard-requirements-a-students-crash-course/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/X6BAHUIE2VA5NB5HYFDIM7UCYY.JPG',
        headline: 'Barnard requirements: A student\u2019s crash course'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2019/05/21/requirements-made-easy-a-guide-to-barnards-modes-of-thinking/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/WGXQGLHEUVAZ5I7YADHPBWFH6M.jpg',
        headline:
            'Requirements made easy: A guide to Barnard\u2019s Modes of Thinking'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2019/05/21/requirements-made-easy-five-great-barnard-first-year-seminars/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/UEXEQ3KDFBAXHNUHCDU4DCMVDQ.jpg',
        headline:
            'Requirements made easy: Five great Barnard first-year seminars'
      },
    ];
    var Ni = [
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2020/08/12/questions-to-ask-yourself-before-applying-for-internships-as-a-first-year/',
        photoUrl:
            'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/BOQEKKS5JNHRRGXLLQE7RK3LRM.gif',
        headline:
            'Questions to ask yourself before applying for internships as a first-year'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2020/08/27/places-around-mohi-to-buy-room-necessities/',
        photoUrl:
            'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/QQASN3LY7FCJFMT2AZEEUHCB3Y.JPG',
        headline: 'Places around MoHi to buy room necessities'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2020/07/16/guide-to-columbias-dining-halls/',
        photoUrl:
            'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/UPSSES5SRVBBRICDFE2KUVX2HI.gif',
        headline: 'Guide to Columbia\u2019s dining halls'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2019/05/20/packing-101-essentials-nonessentials-and-the-in-between/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/6QDUFTUWGNB45EH22EWPI55IDM.jpg',
        headline: 'Packing 101: Essentials, nonessentials, and the in-between'
      },
      {
        link:
            'https://www.columbiaspectator.com/required-reading/2017/07/03/fitness-fanatic-or-want-to-become-one-heres-how-you-can-stay-active-on-campus/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/V4EQ4L7XT5BARCCIR2BTDOOSMI.png',
        headline:
            'Fitness fanatic (or want to become one)? Here\u2019s how you can stay active on campus'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2017/11/21/acing-aetna-local-doctors-who-will-take-your-student-health-insurance/',
        photoUrl:
            'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/AZ5JLIY6O5GABE5IWTBQ77AN6I.jpg',
        headline:
            'Acing Aetna: Local doctors who will take your student health insurance'
      },
      {
        link:
            'https://www.columbiaspectator.com/required-reading/2017/04/21/how-to-navigate-campus-if-youve-never-been-here-before/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/OAX7YZTWURH67DJUR3Q3CXEICE',
        headline: 'How to navigate Columbia\u2019s Morningside campus'
      },
      {
        link: 'https://www.columbiaspectator.com/spectrum/2017/04/11/savvy/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/PWPLQWOJXBB4ZPF2FDFFMFU5RE',
        headline:
            'Savvy sightseeing: What is there to do in the city on the weekend?'
      },
      {
        link:
            'https://www.columbiaspectator.com/required-reading/2017/04/06/touring-campus-what-parts-of-columbias-campus-should-i-know-about/',
        photoUrl:
            'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/F4WRIHNY6RGBDPFW6K5W35HBVE',
        headline:
            'Touring campus: What parts of Columbia\u2019s campus should you know about?'
      },
      {
        link:
            'https://www.columbiaspectator.com/required-reading/2017/07/03/what-resources-does-barnumbia-have-for-mental-physical-and-sexual-health/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/PWHP4B3SR5DXHPYVM6BHAMUNIQ.png',
        headline:
            'What resources does Barnumbia have for mental, physical, and sexual health?'
      },
      {
        link:
            'https://www.columbiaspectator.com/required-reading/2017/07/16/money-management-unexpected-costs-in-college-and-how-to-deal-with-them/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/RFAPKSX42VC6TFPDRUTBGKDHPQ.png',
        headline:
            'Money management: Unexpected costs in college and how to deal with them'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2020/04/22/a-guide-to-morningside-heights-as-a-columbia-student/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/23SKMVUBCBH37ONRJ3G7OUBNJI.jpg',
        headline: 'A guide to Morningside Heights as a Columbia student'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2020/03/04/a-guide-to-securing-a-campus-affiliated-job/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/DJWKX53OQJFK5NQ2VXMQQFOIFU.jpg',
        headline: 'A guide to securing a campus affiliated job'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2019/10/02/what-is-beyond-barnard-and-how-can-it-help-you/',
        photoUrl:
            'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/LBQMFAS3TZD6HORHFC3AWTZN2E.jpg',
        headline: 'What is Beyond Barnard, and how can it help you?'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2019/09/23/tips-for-making-the-most-of-the-columbia-center-for-career-education-cce/',
        photoUrl:
            'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/XIIMM6KFWRG6HEIYSGNEMMCBAY.jpg',
        headline:
            'Tips for making the most of the Columbia Center for Career Education'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2019/05/21/your-guide-to-nyc-on-a-student-budget/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/MJA6EXXXS5GRLBBYVU4J26RTUQ.jpg',
        headline: 'Your guide to NYC on a student budget'
      },
    ];
    var Fi = [
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2018/09/17/barnard-requirements-a-students-crash-course/',
        photoUrl:
            'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/X6BAHUIE2VA5NB5HYFDIM7UCYY.JPG',
        headline: 'Barnard requirements: A student\u2019s crash course'
      },
      {
        link:
            'https://www.columbiaspectator.com/required-reading/2017/04/13/what-classes-will-you-take-during-your-first-year-in-seas/',
        photoUrl:
            'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/YUVYTJ5J7ZBULPO3XQ6M3FGIBE',
        headline: 'What classes will you take during your first year in SEAS?'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2018/08/18/spectrums-guide-to-building-the-the-perfect-schedule/',
        photoUrl:
            'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/DPX7VALB5RFQZDJGBVDMNUQYPE.jpg',
        headline: 'Spectrum\u2019s guide to building the perfect schedule'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2019/05/20/dos-and-donts-of-first-week-of-classes/',
        photoUrl:
            'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/YAWDMXHTGVHZHEOV745FERFK3I.jpg',
        headline: 'Dos and don\u2019ts of the first week of classes'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2019/12/04/what-to-do-if-youre-on-a-waitlist/',
        photoUrl:
            'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/OVBHCQGTHVHKRFNOHRS2YTFULE.png',
        headline: 'What to do if you\u2019re on a waitlist'
      },
      {
        link:
            'https://www.columbiaspectator.com/required-reading/2017/08/14/first-year-fears-solutions-for-common-academic-worries/',
        photoUrl:
            'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/OLYRFGF4M5FLTP2GBATFRW5CWE.png',
        headline: 'First-year fears: Solutions for common academic worries'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2017/03/31/at-the-core-of-cus-academic-scene-whats-up-with-the-core-curriculum-for-columbia-college/',
        photoUrl:
            'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/JUUQCG5C2JAF7M4Z232KL7DGYE.jpg',
        headline:
            'What\u2019s up with the Core Curriculum for Columbia College?'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2019/10/04/guide-to-tutoring-services/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/JSWGQKG3DRCU3IDDRCDRZRDQ6E.jpg',
        headline: 'Guide to tutoring services'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2020/08/20/academic-advice-for-incoming-transfer-students/',
        photoUrl:
            'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/JUUQCG5C2JAF7M4Z232KL7DGYE.jpg',
        headline: 'Academic advice for incoming transfer students'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2020/07/16/social-media-pages-you-should-follow/',
        photoUrl:
            'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/IDE2H7NJPJEGVNYIIF5HKRDLMU.gif',
        headline: 'Social media pages you should follow'
      },
    ];
    var Di = [
      {
        link:
            'https://www.columbiaspectator.com/required-reading/2017/07/24/how-to-choose-and-manage-extracurriculars-as-a-first-year/',
        photoUrl:
            'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/37EFT3YKOJE2ZCAARGOM6TQEGQ.png',
        headline: 'How to choose and manage extracurriculars as a first-year'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2018/07/03/things-every-first-year-should-know-before-coming-to-columbia/',
        photoUrl:
            'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/F7Y55RRIYFHPPIXT7WCVVZR6TU',
        headline:
            'Things every first-year should know before coming to Columbia'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2018/07/03/your-guide-to-club-and-intramural-sports-at-columbia/',
        photoUrl:
            'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/R3VOY5VIAJC2LNKKHJZP6T6XDA',
        headline: 'Your guide to club and intramural sports at Columbia'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2019/05/21/an-international-students-guide-to-columbia/',
        photoUrl:
            'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/JZMSA6EVLJFEDDRHGXNYZIBZTE',
        headline: 'An international student\u2019s guide to Columbia'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2019/05/19/advice-for-incoming-transfer-students-to-columbia-and-barnard/',
        photoUrl:
            'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/F7AOM4ZPNZAP5IQCOWD3QKZAVM.jpg',
        headline:
            'Advice for incoming transfer students to Columbia and Barnard'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2019/04/11/self-care-and-when-to-reach-out-prioritizing-your-mental-health/',
        photoUrl:
            'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/UHUOHLCSFZHIDIG3GXSZYFB5WA.jpg',
        headline:
            'Self-care and when to reach out: Prioritizing your mental health'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2019/01/30/seven-ways-to-start-a-conversation-after-class/',
        photoUrl:
            'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/PNCQPVWPE5DPTEMDDLERBYY57E.gif',
        headline: 'Seven ways to start a conversation after class'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2018/06/09/roommate-conversations-to-have-before-nsop/',
        photoUrl:
            'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/6QB6U7FGFNB5ZPBXQRT7X4H3S4',
        headline: 'Roommate conversations to have before NSOP'
      },
      {
        link:
            'https://www.columbiaspectator.com/required-reading/2017/04/03/decoding-the-tricky-barnard-columbia-relationship/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/HWGGNR5R3ZAJROTEI3NJ5S3P7Q',
        headline: 'Decoding the tricky Barnard-Columbia relationship'
      },
      {
        link:
            'https://www.columbiaspectator.com/required-reading/2017/08/14/first-year-fears-solutions-for-common-social-and-lifestyle-worries/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/HXA6ASUTIVGQ3FKNG5NG4NPFMY.png',
        headline:
            'First-year fears: Solutions for common social and lifestyle worries'
      },
      {
        link:
            'https://www.columbiaspectator.com/required-reading/2017/03/31/culminating-community-get-to-know-columbias-biggest-campus-events/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/AMEIO4C22JCPRH4P7E2CY7RMB4',
        headline:
            'Culminating community: Get to know Columbia\u2019s biggest campus events'
      },
      {
        link:
            'https://www.columbiaspectator.com/required-reading/2017/04/18/learning-our-lingo-decode-columbia-slang/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/QSJQGEXAUBGJZHKQQD2NYAHD2M',
        headline: 'Learning our lingo: How to decode Columbia slang'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2019/04/25/from-the-class-of-2022-first-year-regrets-and-advice/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/CGFH3WFNSNDP5J3X5VAKI2QJDA.gif',
        headline: 'From the class of 2022: First-year regrets and advice'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2019/09/28/class-of-2023-expectations-vs-reality/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/GDZ6V442XFGP7KWD32SQYVRE2Q.jpg',
        headline: 'Class of 2023: expectations vs. reality'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2020/04/17/a-night-out-as-a-columbia-student/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/RTCKJMVTPRGXHNCDC6AWU7X2D4',
        headline: 'A night out as a Columbia student'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2020/02/04/find-your-fit-at-spectator/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/W4TQHHUDSBF7LEOYEJC7IECWFU.jpg',
        headline: 'Find your fit at Spectator'
      },
      {
        link:
            'https://www.columbiaspectator.com/required-reading/2017/04/27/finding-your-niche-how-to-choose-cu-clubs-based-on-your-high-school-interests/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/LVND45HH3NB43EVZ4NMD7I67XU',
        headline:
            'Finding your niche: How to choose CU clubs based on your high school interests'
      },
      {
        link:
            'https://www.columbiaspectator.com/required-reading/2017/07/24/how-to-research-campus-clubs-before-the-activities-fair/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/6WMC7MYUWZDX3EDSW76TJCBOKI.png',
        headline: 'How to research campus clubs before the activities fair'
      },
    ];
    var Ii = [
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2020/04/01/how-to-do-college-online-a-guide-to-our-new-virtual-reality-of-learning/',
        photoUrl:
            'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/WI7KWA5WJRB6PKEURLHP7PIT74.jpg',
        headline:
            'How to do college online: A guide to our new virtual reality of learning'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2020/04/10/a-practical-guide-to-staying-connected-from-afar/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/MX5ZWVQMWBH3ZFRNJT27XBVLAA.GIF',
        headline: 'A practical guide to staying connected from afar'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2020/04/03/how-to-stay-physically-and-mentally-healthy-while-in-quarantine/',
        photoUrl:
            'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/NBG7UPWUSBGTBONSWTOAPXOLU4.jpg',
        headline:
            'How to stay physically and mentally healthy while in quarantine'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2020/08/14/this-just-in-columbia-is-entirely-online-for-undergraduates-mostly-online-for-graduate-students/',
        photoUrl:
            'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/EUP34UJN4ZBVRAOF7ZH2XRLXPM.jpg',
        headline:
            'Columbia has moved all undergraduate classes online. Here\u2019s what you should know'
      },
      {
        link:
            'https://www.columbiaspectator.com/spectrum/2020/04/01/how-to-do-college-online-a-guide-to-our-new-virtual-reality-of-learning/',
        photoUrl:
            'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/WI7KWA5WJRB6PKEURLHP7PIT74.jpg',
        headline:
            'How to do college online: A guide to our new virtual reality of learning'
      },
    ];
    var ji = [
      { title: 'HOME', linkUrl: '/orientation-2020/' },
      { title: 'ACADEMICS', linkUrl: '/orientation-2020/#/academics' },
      {
        title: 'ZOOM UNIVERSITY',
        linkUrl: '/orientation-2020/#/zoomuniversity'
      },
      { title: 'STUDENT LIFE', linkUrl: '/orientation-2020/#/studentlife' },
      {
        title: '24 TRADITIONS',
        linkUrl:
            'https://www.columbiaspectator.com/orientation-2018/116-traditions/'
      },
      { title: 'JOIN SPEC', linkUrl: 'http://www.specpublishing.com/join' },
    ];
    var Ri = function () {
      return a.a.createElement(Ca, null);
    };
    var zi = function () {
      return a.a.createElement(Ga, {
        title: 'GET TO KNOW BARNUMBIA',
        data: Mi,
      });
    };
    var Bi = function () {
      return a.a.createElement(Ga, { title: 'ACADEMICS', data: Fi });
    };
    var Li = function () {
      return a.a.createElement(Ga, { title: 'ZOOM UNIVERSITY', data: Ii });
    };
    var Ui = function () {
      return a.a.createElement(Ga, { title: 'STUDENT LIFE', data: Di });
    };
    var Hi = function () {
      return a.a.createElement(Ga, {
        title: 'COURSE REGISTRATION',
        data: _i,
      });
    };
    var Wi = function () {
      return a.a.createElement(Ga, { title: 'CAMPUS LIFE', data: Ni });
    };
    var Vi = function () {
      return a.a.createElement(di, { title: 'TEXTBOOK LINKS' });
    };
    const qi = function () {
      return a.a.createElement(
        l.a,
        { theme: p },
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(Ai, { entries: ji }),
          a.a.createElement(h, null),
          a.a.createElement(
            s.g,
            null,
            a.a.createElement(s.d, { exact: !0, path: '/', component: Ri }),
            a.a.createElement(s.d, {
              exact: !0,
              path: '/barnumbia',
              component: zi,
            }),
            a.a.createElement(s.d, {
              exact: !0,
              path: '/zoomuniversity',
              component: Li,
            }),
            a.a.createElement(s.d, {
              exact: !0,
              path: '/academics',
              component: Bi,
            }),
            a.a.createElement(s.d, {
              exact: !0,
              path: '/studentlife',
              component: Ui,
            }),
            a.a.createElement(s.d, {
              exact: !0,
              path: '/registration',
              component: Hi,
            }),
            a.a.createElement(s.d, {
              exact: !0,
              path: '/campus',
              component: Wi,
            }),
            a.a.createElement(s.d, {
              exact: !0,
              path: '/textbooks',
              component: Vi,
            }),
          ),
        ),
      );
    };
    Boolean(
      window.location.hostname === 'localhost'
        || '[::1]' === window.location.hostname
        || window.location.hostname.match(
          /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
        ),
    );
    const Gi = n(12);
    o.a.render(
      a.a.createElement(Gi.HashRouter, null, a.a.createElement(qi, null)),
      document.getElementById('root'),
    ),
    'serviceWorker' in navigator
        && navigator.serviceWorker.ready.then((e) => {
          e.unregister();
        });
  },
]));
// # sourceMappingURL=main.641ff5ed.js.map
