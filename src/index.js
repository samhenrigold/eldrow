import 'lodash';
this.wordle = this.wordle || {},
	this.wordle.bundle = (wordle => {
		// BEGIN SCARY WEBPACK STUFF
		function a(e) {
			return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e => typeof e : e => e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e)(e);
		}

		function s(e, a) {
			if (!(e instanceof a))
				throw new TypeError("Cannot call a class as a function")
		}

		function t(e, a) {
			for (let s = 0; s < a.length; s++) {
				const t = a[s];
				t.enumerable = t.enumerable || !1,
					t.configurable = !0,
					"value" in t && (t.writable = !0),
					Object.defineProperty(e, t.key, t)
			}
		}

		function o(e, a, s) {
			return a && t(e.prototype, a), s && t(e, s), e
		}

		function n(e, a, s) {
			return a in e ? Object.defineProperty(e, a, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[a] = s, e
		}

		function r(e, a) {
			if ("function" != typeof a && null !== a)
				throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(a && a.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}),
				a && l(e, a)
		}

		function GET_PROTOTYPE_OF(e) {
			return (GET_PROTOTYPE_OF = Object.setPrototypeOf ? Object.getPrototypeOf : e => e.__proto__ || Object.getPrototypeOf(e))(e);
		}

		function l(e, a) {
			return (l = Object.setPrototypeOf || ((e, a) => (e.__proto__ = a, e)))(e, a);
		}

		function d() {
			if ("undefined" == typeof Reflect || !Reflect.construct)
				return !1;
			if (Reflect.construct.sham)
				return !1;
			if ("function" == typeof Proxy)
				return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (() => { }))), !0;
			} catch (e) {
				return !1
			}
		}

		function u(e, a, s) {
			return (u = d() ? Reflect.construct : (e, a, s) => {
				const t = [null];
				t.push.apply(t, a);
				const o = new (Function.bind.apply(e, t));
				return s && l(o, s.prototype), o
			}).apply(null, arguments);
		}

		function c(e) {
			const a = "function" == typeof Map ? new Map : undefined;
			return (c = e => {
				if (null === e || (s = e, !Function.toString.call(s).includes("[native code]")))
					return e;
				var s;
				if ("function" != typeof e)
					throw new TypeError("Super expression must either be null or a function");
				if (undefined !== a) {
					if (a.has(e))
						return a.get(e);
					a.set(e, t)
				}

				function t(...args) {
					return u(e, args, GET_PROTOTYPE_OF(this).constructor);
				}
				return t.prototype = Object.create(e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), l(t, e)
			})(e);
		}

		function p(e) {
			if (undefined === e)
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}

		function POSSIBLE_CONSTRUCTOR_RETURN(e, a) {
			return !a || "object" != typeof a && "function" != typeof a ? p(e) : a
		}

		function h(Derived) {
			const a = d();
			return function (...args) {
				let result;
				const Super = GET_PROTOTYPE_OF(Derived);
				if (a) {
					const NewTarget = GET_PROTOTYPE_OF(this).constructor;
					result = Reflect.construct(Super, args, NewTarget)
				} else
					result = Super.apply(this, args);
				return POSSIBLE_CONSTRUCTOR_RETURN(this, result)
			};
		}

		function y(e, a) {
			return (e => {
				if (Array.isArray(e))
					return e
			})(e) || ((e, a) => {
				let s = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
				if (null == s)
					return;
				let t;
				let o;
				const n = [];
				let r = !0;
				let i = !1;
				try {
					for (s = s.call(e); !(r = (t = s.next()).done) && (n.push(t.value), !a || n.length !== a); r = !0);
				} catch (e) {
					i = !0, o = e
				} finally {
					try {
						r || null == s.return || s.return()
					} finally {
						if (i)
							throw o
					}
				}
				return n
			})(e, a) || b(e, a) || (() => {
				throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			})();
		}

		function g(e) {
			return (e => {
				if (Array.isArray(e))
					return f(e)
			})(e) || (e => {
				if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
					return Array.from(e)
			})(e) || b(e) || (() => {
				throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			})();
		}

		function b(e, a) {
			if (e) {
				if ("string" == typeof e)
					return f(e, a);
				let s = Object.prototype.toString.call(e).slice(8, -1);
				return "Object" === s && e.constructor && (s = e.constructor.name), "Map" === s || "Set" === s ? Array.from(e) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? f(e, a) : undefined
			}
		}
		// END SCARY WEBPACK STUFF

		function f(e, a) {
			(null == a || a > e.length) && (a = e.length);
			for (var s = 0, t = new Array(a); s < a; s++)
				t[s] = e[s];
			return t
		}
		/* No idea what f() is for but this is how Codex described it to me:
			It creates a copy of the array.
			It then sets s to 0.
			It then sets a to the length of e.
			It then sets t to an empty array.
			It then loops while s is less than a.
			It sets t[s] = e[s].
			It increments s by 1.
			It returns t.
		*/

		const GameTile = document.createElement("template");
		GameTile.innerHTML = `
    <style>
      :host {
          display: inline-block;
      }
      .tile {
          width: 100%;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          font-size: 2rem;
          line-height: 2rem;
          font-weight: bold;
          vertical-align: middle;
          box-sizing: border-box;
          color: var(--tile-text-color);
          text-transform: uppercase;
          user-select: none;
      }
      .tile::before {
          content: '';
        display: inline-block;
        padding-bottom: 100%;
      }
    
      /* Allow tiles to be smaller on small screens */
      @media (max-height: 600px) {
          .tile {
            font-size: 1em;
            line-height: 1em;
        }
      }
    
      .tile[data-state='empty'] {
          border: 2px solid var(--color-tone-4);
      }
      .tile[data-state='tbd'] {
          background-color: var(--color-tone-7);
          border: 2px solid var(--color-tone-3);
          color: var(--color-tone-1);
      }
      .tile[data-state='correct'] {
          background-color: var(--color-correct);
      }
      .tile[data-state='present'] {
          background-color: var(--color-present);
      }
      .tile[data-state='absent'] {
          background-color: var(--color-absent);
      }
    
      .tile[data-animation='pop'] {
          animation-name: PopIn;
          animation-duration: 100ms;
      }
    
      @keyframes PopIn {
          from {
            transform: scale(0.8);
            opacity: 0;
        }
    
        40% {
            transform: scale(1.1);
            opacity: 1;
        }
      }
      .tile[data-animation='flip-in'] {
          animation-name: FlipIn;
          animation-duration: 250ms;
          animation-timing-function: ease-in;
      }
      @keyframes FlipIn {
          0% {
            transform: rotateX(0);
        }
        100% {
            transform: rotateX(-90deg);
        }
      }
      .tile[data-animation='flip-out'] {
          animation-name: FlipOut;
          animation-duration: 250ms;
          animation-timing-function: ease-in;
      }
      @keyframes FlipOut {
          0% {
            transform: rotateX(-90deg);
        }
        100% {
            transform: rotateX(0);
        }
      }
    </style>
    <div class=\"tile\" data-state=\"empty\" data-animation=\"idle\"></div>
    `;
		customElements.define("game-tile", GameTile);
		const w = document.createElement("template");
		w.innerHTML = `
    <style>
      :host {
          display: block;
      }
      :host([invalid]){
          animation-name: Shake;
          animation-duration: 600ms;
      }
      .row {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          grid-gap: 5px;
      }
      .win {
          animation-name: Bounce;
          animation-duration: 1000ms;
      }
  
      @keyframes Bounce {
          0%, 20% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-30px);
        }
        50% {
            transform: translateY(5px);
        }
        60% {
            transform: translateY(-15px);
        }
        80% {
            transform: translateY(2px);
        }
        100% {
            transform: translateY(0);
        }
      }
  
      @keyframes Shake {
          10%,
          90% {
            transform: translateX(-1px);
        }
  
        20%,
        80% {
            transform: translateX(2px);
        }
  
        30%,
        50%,
        70% {
            transform: translateX(-4px);
        }
  
        40%,
        60% {
            transform: translateX(4px);
        }
      }
    </style>
    <div class="row"></div>
  `;
		const gameRow = (e => {
			r(t, e);
			const a = h(t);

			function t() {
				let e;
				return s(this, t), (e = a.call(this)).attachShadow({
					mode: "open"
				}), e._letters = "", e._evaluation = [], e._length, e
			}
			return o(t, [{
				key: "evaluation",
				get() {
					return this._evaluation
				},
				set(e) {
					const a = this;
					this._evaluation = e,
						this.$tiles && this.$tiles.forEach(((e, s) => {
							e.setAttribute("evaluation", a._evaluation[s]),
								setTimeout((() => {
									e.setAttribute("reveal", "")
								}), 300 * s)
						}))
				}
			}, {
				key: "connectedCallback",
				value() {
					const e = this;
					this.shadowRoot.appendChild(w.content.cloneNode(!0)),
						this.$row = this.shadowRoot.querySelector(".row");
					for (let a = a => {
						const s = document.createElement("game-tile"),
							t = e._letters[a];
						(t && s.setAttribute("letter", t), e._evaluation[a]) && (s.setAttribute("evaluation", e._evaluation[a]), setTimeout((() => {
							s.setAttribute("reveal", "")
						}), 100 * a));
						a === e._length - 1 && (s.last = !0),
							e.$row.appendChild(s)
					},
						s = 0; s < this._length; s++)
						a(s);
					this.$tiles = this.shadowRoot.querySelectorAll("game-tile"),
						this.addEventListener("animationend", (({
							animationName
						}) => {
							"Shake" === animationName && e.removeAttribute("invalid")
						}))
				}
			}, {
				key: "attributeChangedCallback",
				value(e, a, s) {
					switch (e) {
						case "letters":
							this._letters = s || "";
							break;
						case "length":
							this._length = parseInt(s, 10);
							break;
						case "win":
							if (null === s) {
								this.$tiles.forEach((({
									classList
								}) => {
									classList.remove("win")
								}));
								break
							}
							this.$tiles.forEach((({
								classList,
								style
							}, a) => {
								classList.add("win"),
									style.animationDelay = "".concat(100 * a, "ms")
							}))
					}
					this._render()
				}
			}, {
				key: "_render",
				value() {
					const e = this;
					this.$row && this.$tiles.forEach(((a, s) => {
						const t = e._letters[s];
						t ? a.setAttribute("letter", t) : a.removeAttribute("letter")
					}))
				}
			}], [{
				key: "observedAttributes",
				get() {
					return ["letters", "length", "invalid", "win"]
				}
			}]), t;
		})(c(HTMLElement));
		customElements.define("game-row", gameRow);
		const SlotEl = document.createElement("template");
		SlotEl.innerHTML = `<slot></slot>`;
		const darkModeKey = "darkTheme";
		const a11yModeKey = "colorBlindTheme";

		const gameThemeManager = (e => {
			r(t, e);
			const a = h(t);

			function t() {
				let e;
				s(this, t),
					n(p(e = a.call(this)), "isDarkTheme", !1),
					n(p(e), "isColorBlindTheme", !1),
					e.attachShadow({
						mode: "open"
					});
				const o = JSON.parse(window.localStorage.getItem(darkModeKey)),
					r = window.matchMedia("(prefers-color-scheme: dark)").matches,
					i = JSON.parse(window.localStorage.getItem(a11yModeKey));
				return !0 === o || !1 === o ? e.setDarkTheme(o) : r && e.setDarkTheme(!0), !0 !== i && !1 !== i || e.setColorBlindTheme(i), e
			}
			return o(t, [{
				key: "setDarkTheme",
				value(e) {
					const a = document.querySelector("body");
					e && !a.classList.contains("nightmode") ? a.classList.add("nightmode") : a.classList.remove("nightmode"),
						this.isDarkTheme = e,
						window.localStorage.setItem(darkModeKey, JSON.stringify(e))
				}
			}, {
				key: "setColorBlindTheme",
				value(e) {
					const a = document.querySelector("body");
					e && !a.classList.contains("colorblind") ? a.classList.add("colorblind") : a.classList.remove("colorblind"),
						this.isColorBlindTheme = e,
						window.localStorage.setItem(a11yModeKey, JSON.stringify(e))
				}
			}, {
				key: "connectedCallback",
				value() {
					const e = this;
					this.shadowRoot.appendChild(SlotEl.content.cloneNode(!0)),
						this.shadowRoot.addEventListener("game-setting-change", (({
							detail
						}) => {
							const s = detail,
								t = s.name,
								o = s.checked;
							switch (t) {
								case "dark-theme":
									return void e.setDarkTheme(o);
								case "color-blind-theme":
									return void e.setColorBlindTheme(o)
							}
						}))
				}
			}]), t;
		})(c(HTMLElement));

		function q(e, a) {
			return e === a || e != e && a != a
		}

		function E(e, a) {
			for (let s = e.length; s--;)
				if (q(e[s][0], a))
					return s;
			return -1
		}
		customElements.define("game-theme-manager", gameThemeManager);
		const A = Array.prototype.splice;

		function C(e) {
			let a = -1;
			const s = null == e ? 0 : e.length;
			for (this.clear(); ++a < s;) {
				const t = e[a];
				this.set(t[0], t[1])
			}
		}
		C.prototype.clear = function () {
			this.__data__ = [],
				this.size = 0
		},
			C.prototype.delete = function (e) {
				const a = this.__data__;
				const s = E(a, e);
				return !(s < 0) && (s == a.length - 1 ? a.pop() : A.call(a, s, 1), --this.size, !0)
			},
			C.prototype.get = function (e) {
				const a = this.__data__;
				const s = E(a, e);
				return s < 0 ? undefined : a[s][1]
			},
			C.prototype.has = function (e) {
				return E(this.__data__, e) > -1
			},
			C.prototype.set = function (e, a) {
				const s = this.__data__;
				const t = E(s, e);
				return t < 0 ? (++this.size, s.push([e, a])) : s[t][1] = a, this
			};
		const L = "object" == ("undefined" == typeof global ? "undefined" : a(global)) && global && global.Object === Object && global;
		const T = "object" == ("undefined" == typeof self ? "undefined" : a(self)) && self && self.Object === Object && self;
		const I = L || T || Function("return this")();
		const M = I.Symbol;
		const O = Object.prototype;
		const R = O.hasOwnProperty;
		const P = O.toString;
		const $ = M ? M.toStringTag : undefined;
		const H = Object.prototype.toString;
		const N = M ? M.toStringTag : undefined;

		function getTag(e) {
			return null == e ? undefined === e ? "[object Undefined]" : "[object Null]" : N && N in Object(e) ? (e => {
				const a = R.call(e, $);
				const s = e[$];
				try {
					e[$] = undefined;
					var t = !0
				} catch (e) { }
				const o = P.call(e);
				return t && (a ? e[$] = s : delete e[$]), o
			})(e) : (e => H.call(e))(e);
		}

		function G(e) {
			const s = a(e);
			return null != e && ("object" == s || "function" == s)
		}

		function B(e) {
			if (!G(e))
				return !1;
			const a = getTag(e);
			return "[object Function]" == a || "[object GeneratorFunction]" == a || "[object AsyncFunction]" == a || "[object Proxy]" == a
		}
		let F;
		const W = I["__core-js_shared__"];
		const Y = (F = /[^.]+$/.exec(W && W.keys && W.keys.IE_PROTO || "")) ? `Symbol(src)_1.${F}` : "";
		const J = Function.prototype.toString;
		const U = /^\[object .+?Constructor\]$/;
		const X = Function.prototype;
		const V = Object.prototype;
		const K = X.toString;
		const Q = V.hasOwnProperty;
		const Z = RegExp(`^${K.call(Q).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?")}$`);

		function ee(e) {
			return !(!G(e) || (a = e, Y && Y in a)) && (B(e) ? Z : U).test((e => {
				if (null != e) {
					try {
						return J.call(e)
					} catch (e) { }
					try {
						return `${e}`;
					} catch (e) { }
				}
				return ""
			})(e));
			var a
		}

		function ae(e, a) {
			const s = ((e, a) => null == e ? undefined : e[a])(e, a);
			return ee(s) ? s : undefined
		}
		const se = ae(I, "Map");
		const te = ae(Object, "create");
		const hasOwnProperty = Object.prototype.hasOwnProperty;

		function re(e) {
			let a = -1;
			const s = null == e ? 0 : e.length;
			for (this.clear(); ++a < s;) {
				const t = e[a];
				this.set(t[0], t[1])
			}
		}

		function ie({ __data__ }, s) {
			let t;
			let o;
			const n = __data__;
			return ("string" == (o = a(t = s)) || "number" == o || "symbol" == o || "boolean" == o ? "__proto__" !== t : null === t) ? n["string" == typeof s ? "string" : "hash"] : n.map
		}

		function le(e) {
			let a = -1;
			const s = null == e ? 0 : e.length;
			for (this.clear(); ++a < s;) {
				const t = e[a];
				this.set(t[0], t[1])
			}
		}
		re.prototype.clear = function () {
			this.__data__ = te ? te(null) : {},
				this.size = 0
		},
			re.prototype.delete = function (e) {
				const a = this.has(e) && delete this.__data__[e];
				return this.size -= a ? 1 : 0, a
			},
			re.prototype.get = function (e) {
				const a = this.__data__;
				if (te) {
					const s = a[e];
					return "__lodash_hash_undefined__" === s ? undefined : s
				}
				return hasOwnProperty.call(a, e) ? a[e] : undefined
			},
			re.prototype.has = function (e) {
				const a = this.__data__;
				return te ? undefined !== a[e] : hasOwnProperty.call(a, e)
			},
			re.prototype.set = function (e, a) {
				const s = this.__data__;
				return this.size += this.has(e) ? 0 : 1, s[e] = te && undefined === a ? "__lodash_hash_undefined__" : a, this
			},
			le.prototype.clear = function () {
				this.size = 0,
					this.__data__ = {
						hash: new re,
						map: new (se || C),
						string: new re
					}
			},
			le.prototype.delete = function (e) {
				const a = ie(this, e).delete(e);
				return this.size -= a ? 1 : 0, a
			},
			le.prototype.get = function (e) {
				return ie(this, e).get(e)
			},
			le.prototype.has = function (e) {
				return ie(this, e).has(e)
			},
			le.prototype.set = function (e, a) {
				const s = ie(this, e);
				const t = s.size;
				return s.set(e, a), this.size += s.size == t ? 0 : 1, this
			};

		function de(e) {
			const a = this.__data__ = new C(e);
			this.size = a.size
		}
		de.prototype.clear = function () {
			this.__data__ = new C,
				this.size = 0
		},
			de.prototype.delete = function (e) {
				const a = this.__data__;
				const s = a.delete(e);
				return this.size = a.size, s
			},
			de.prototype.get = function (e) {
				return this.__data__.get(e)
			},
			de.prototype.has = function (e) {
				return this.__data__.has(e)
			},
			de.prototype.set = function (e, a) {
				let s = this.__data__;
				if (s instanceof C) {
					const t = s.__data__;
					if (!se || t.length < 199)
						return t.push([e, a]), this.size = ++s.size, this;
					s = this.__data__ = new le(t)
				}
				return s.set(e, a), this.size = s.size, this
			};
		const ue = (() => {
			try {
				var e = ae(Object, "defineProperty");
				return e({}, "", {}), e
			} catch (e) { }
		})();

		function ce(e, a, s) {
			"__proto__" == a && ue ? ue(e, a, {
				configurable: !0,
				enumerable: !0,
				value: s,
				writable: !0
			}) : e[a] = s
		}

		function pe(e, a, s) {
			(undefined !== s && !q(e[a], s) || undefined === s && !(a in e)) && ce(e, a, s)
		}
		let me;

		const he = (e, a, s) => {
			for (let t = -1, o = Object(e), n = s(e), r = n.length; r--;) {
				const i = n[me ? r : ++t];
				if (!1 === a(o[i], i, o))
					break
			}
			return e
		};

		const ye = "object" == (undefined === wordle ? "undefined" : a(wordle)) && wordle && !wordle.nodeType && wordle;
		const ge = ye && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module;
		const be = ge && ge.exports === ye ? I.Buffer : undefined;
		const fe = be ? be.allocUnsafe : undefined;
		const ke = I.Uint8Array;

		function ve({
			buffer,
			constructor,
			byteOffset,
			length
		}, a) {
			let s;
			let t;
			const o = a ? (s = buffer, t = new s.constructor(s.byteLength), new ke(t).set(new ke(s)), t) : buffer;
			return new constructor(o, byteOffset, length);
		}
		const we = Object.create;

		const xe = (() => {
			function e() { }
			return a => {
				if (!G(a))
					return {};
				if (we)
					return we(a);
				e.prototype = a;
				const s = new e;
				return e.prototype = undefined, s
			};
		})();

		let ze;
		let je;
		const Se = (ze = Object.getPrototypeOf, je = Object, e => ze(je(e)));
		const _e = Object.prototype;

		function qe(e) {
			const a = e && e.constructor;
			return e === ("function" == typeof a && a.prototype || _e)
		}

		function isObjectLike(e) {
			return null != e && "object" == a(e)
		}

		function baseIsArguments(e) {
			return isObjectLike(e) && "[object Arguments]" == getTag(e)
		}
		// const Ce = Object.prototype;
		// const Le = Ce.hasOwnProperty;
		// const Te = Ce.propertyIsEnumerable;

		// const isArguments = baseIsArguments(function (...arguments) {
		// 	return arguments;
		// }()) ? baseIsArguments : e => isObjectLike(e) && Le.call(e, "callee") && !Te.call(e, "callee");

		const Me = Array.isArray;

		function Oe(e) {
			return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
		}

		// const reTypedTag = /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/

		function Re(e) {
			return null != e && Oe(e.length) && !B(e)
		}
		const Pe = "object" == (undefined === wordle ? "undefined" : a(wordle)) && wordle && !wordle.nodeType && wordle;
		const $e = Pe && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module;
		const He = $e && $e.exports === Pe ? I.Buffer : undefined;
		const Ne = (He ? He.isBuffer : undefined) || (() => !1);
		const De = Function.prototype;
		const Ge = Object.prototype;
		const Be = De.toString;
		const Fe = Ge.hasOwnProperty;
		const We = Be.call(Object);
		// const Ye = {};
		// Ye["[object Float32Array]"] = Ye["[object Float64Array]"] = Ye["[object Int8Array]"] = Ye["[object Int16Array]"] = Ye["[object Int32Array]"] = Ye["[object Uint8Array]"] = Ye["[object Uint8ClampedArray]"] = Ye["[object Uint16Array]"] = Ye["[object Uint32Array]"] = !0,
		// 	Ye["[object Arguments]"] = Ye["[object Array]"] = Ye["[object ArrayBuffer]"] = Ye["[object Boolean]"] = Ye["[object DataView]"] = Ye["[object Date]"] = Ye["[object Error]"] = Ye["[object Function]"] = Ye["[object Map]"] = Ye["[object Number]"] = Ye["[object Object]"] = Ye["[object RegExp]"] = Ye["[object Set]"] = Ye["[object String]"] = Ye["[object WeakMap]"] = !1;
		// const Je = "object" == (undefined === e ? "undefined" : a(e)) && e && !e.nodeType && e;
		// const freeModule = Je && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module;
		// const freeProcess = freeModule && freeModule.exports === Je && L.process;

		// const nodeTypes = (() => {``
		//   try {
		//     /* Detect public `util.types` helpers for Node.js v10+. */
		//     /* Node.js deprecation code: DEP0103. */
		//     const typesHelper =
		//       freeModule && freeModule.require && freeModule.require("util").types;
		//     return typesHelper
		//       ? typesHelper
		//       : /* Legacy process.binding('util') for Node.js earlier than v10. */
		//         freeProcess && freeProcess.binding && freeProcess.binding("util");
		//   } catch (e) {}
		// })();

		// const nodeIsTypedArray = nodeTypes && nodeTypes.isTypedArray;
		// const isTypedArray = nodeIsTypedArray ? (value) => nodeIsTypedArray(value) : (value) => isObjectLike(value) && reTypedTag.test(getTag(value));

		function Ze(e, a) {
			if (("constructor" !== a || "function" != typeof e[a]) && "__proto__" != a)
				return e[a]
		}

		function aa(e, a, s) {
			const t = e[a];
			hasOwnProperty.call(e, a) && q(t, s) && (undefined !== s || a in e) || ce(e, a, s)
		}
		const sa = /^(?:0|[1-9]\d*)$/;

		function ta(e, s) {
			const t = a(e);
			return !!(s = null == s ? 9007199254740991 : s) && ("number" == t || "symbol" != t && sa.test(e)) && e > -1 && e % 1 == 0 && e < s
		}

		function na(e, a) {
			const s = Me(e);
			const t = !s && isArguments(e);
			const o = !s && !t && Ne(e);
			const n = !s && !t && !o && isTypedArray(e);
			const r = s || t || o || n;

			const i = r ? ((e, a) => {
				for (var s = -1, t = Array(e); ++s < e;)
					t[s] = a(s);
				return t
			})(e.length, String) : [];

			const l = i.length;
			for (const d in e)
				!a && !hasOwnProperty.call(e, d) || r && ("length" == d || o && ("offset" == d || "parent" == d) || n && ("buffer" == d || "byteLength" == d || "byteOffset" == d) || ta(d, l)) || i.push(d);
			return i
		}

		function ia(e) {
			if (!G(e))
				return (e => {
					const a = [];
					if (null != e)
						for (const s in Object(e))
							a.push(s);
					return a
				})(e);
			const a = qe(e);
			const s = [];
			for (const t in e)
				("constructor" != t || !a && hasOwnProperty.call(e, t)) && s.push(t);
			return s
		}

		function la(e) {
			return Re(e) ? na(e, !0) : ia(e)
		}

		function da(e) {
			return ((e, a, s, t) => {
				const o = !s;
				s || (s = {});
				for (let n = -1, r = a.length; ++n < r;) {
					const i = a[n];
					let l = t ? t(s[i], e[i], i, s, e) : undefined;
					undefined === l && (l = e[i]),
						o ? ce(s, i, l) : aa(s, i, l)
				}
				return s
			})(e, la(e));
		}

		function ua(e, a, s, t, o, n, r) {
			const i = Ze(e, s);
			const l = Ze(a, s);
			const d = r.get(l);
			if (d)
				pe(e, s, d);
			else {
				let u;
				let c = n ? n(i, l, `${s}`, e, a, r) : undefined;
				let p = undefined === c;
				if (p) {
					const m = Me(l);
					const h = !m && Ne(l);
					const y = !m && !h && isTypedArray(l);
					c = l,
						m || h || y ? Me(i) ? c = i : isObjectLike(u = i) && Re(u) ? c = ((e, a) => {
							let s = -1;
							const t = e.length;
							for (a || (a = Array(t)); ++s < t;)
								a[s] = e[s];
							return a
						})(i) : h ? (p = !1, c = ((e, a) => {
							if (a)
								return e.slice();
							const s = e.length;
							const t = fe ? fe(s) : new e.constructor(s);
							return e.copy(t), t
						})(l, !0)) : y ? (p = !1, c = ve(l, !0)) : c = [] : (e => {
							if (!isObjectLike(e) || "[object Object]" != getTag(e))
								return !1;
							const a = Se(e);
							if (null === a)
								return !0;
							const s = Fe.call(a, "constructor") && a.constructor;
							return "function" == typeof s && s instanceof s && Be.call(s) == We
						})(l) || isArguments(l) ? (c = i, isArguments(i) ? c = da(i) : G(i) && !B(i) || (c = (e => "function" != typeof e.constructor || qe(e) ? {} : xe(Se(e)))(l))) : p = !1
				}
				p && (r.set(l, c), o(c, l, t, n, r), r.delete(l)),
					pe(e, s, c)
			}
		}

		function ca(e, a, s, t, o) {
			e !== a && he(a, ((n, r) => {
				if (o || (o = new de), G(n))
					ua(e, a, r, s, ca, t, o);
				else {
					let i = t ? t(Ze(e, r), n, `${r}`, e, a, o) : undefined;
					undefined === i && (i = n),
						pe(e, r, i)
				}
			}), la)
		}

		function pa(e) {
			return e
		}

		function ma(e, a, s) {
			switch (s.length) {
				case 0:
					return e.call(a);
				case 1:
					return e.call(a, s[0]);
				case 2:
					return e.call(a, s[0], s[1]);
				case 3:
					return e.call(a, s[0], s[1], s[2])
			}
			return e.apply(a, s)
		}
		const ha = Math.max;

		const ya = ue ? (e, a) => {
			return ue(e, "toString", {
				configurable: !0,
				enumerable: !1,
				value: (s = a, () => s),
				writable: !0
			});
			var s
		} : pa;

		const ga = Date.now;
		const ba = (e => {
			let a = 0;
			let s = 0;
			return function (...args) {
				const t = ga();
				const o = 16 - (t - s);
				if (s = t, o > 0) {
					if (++a >= 800)
						return args[0];
				} else
					a = 0;
				return e.apply(undefined, args);
			};
		})(ya);

		function fa(e, a) {
			return ba(
				((e, a, s) => (a = ha(undefined === a ? e.length - 1 : a, 0), function (...args) {
					for (var t = args, o = -1, n = ha(t.length - a, 0), r = Array(n); ++o < n;)
						r[o] = t[a + o];
					o = -1;
					for (var i = Array(a + 1); ++o < a;)
						i[o] = t[o];
					return i[a] = s(r), ma(e, this, i)
				}))(e, a, pa),
				`${e}`
			);
		}
		let ka;

		const va = (ka = (e, a, s) => {
			ca(e, a, s)
		}, fa(((e, s) => {
			let t = -1;
			let o = s.length;
			let n = o > 1 ? s[o - 1] : undefined;
			const r = o > 2 ? s[2] : undefined;
			for (n = ka.length > 3 && "function" == typeof n ? (o--, n) : undefined, r && ((e, s, t) => {
				if (!G(t))
					return !1;
				const o = a(s);
				return !!("number" == o ? Re(t) && ta(s, t.length) : "string" == o && s in t) && q(t[s], e)
			})(s[0], s[1], r) && (n = o < 3 ? undefined : n, o = 1), e = Object(e); ++t < o;) {
				const i = s[t];
				i && ka(e, i, t, n)
			}
			return e
		})));

		const wa = "gameState";

		const xa = {
			boardState: null,
			evaluations: null,
			rowIndex: null,
			solution: null,
			gameStatus: null,
			lastPlayedTs: null,
			lastCompletedTs: null,
			restoringFromLocalStorage: null,
			hardMode: !1
		};

		function za() {
			const e = window.localStorage.getItem(wa) || JSON.stringify(xa);
			return JSON.parse(e)
		}

		function ja(e) {
			const a = za();
			!(e => {
				window.localStorage.setItem(wa, JSON.stringify(e))
			})(va(a, e))
		}
		const Sa = document.createElement("template");
		Sa.innerHTML = `
    <style>
    .setting {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--color-tone-4);
        padding: 16px 0;
    }
  
    a, a:visited {
        color: var(--color-tone-2);
    }
  
    .title {
        font-size: 18px;
    }
    .text {
        padding-right: 8px;
    }
    .description {
        font-size: 12px;
        color: var(--color-tone-2);
    }
  
    #footnote {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 16px;
        color: var(--color-tone-2);
        font-size: 12px;
        text-align: right;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
  
    #privacy-policy,
    #copyright {
        text-align: left;
    }
  
    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
        .setting {
          padding: 16px;
      }
    }
  
    </style>
    <div class="sections">
      <section>
        <div class="setting">
          <div class="text">
            <div class="title">Hard Mode</div>
            <div class="description">Any revealed hints must be used in subsequent guesses</div>
          </div>
          <div class="control">
            <game-switch id="hard-mode" name="hard-mode"></game-switch>
          </div>
        </div>
        <div class="setting">
          <div class="text">
            <div class="title">Dark Theme</div>
          </div>
          <div class="control">
            <game-switch id="dark-theme" name="dark-theme"></game-switch>
          </div>
        </div>
        <div class="setting">
          <div class="text">
            <div class="title">Color Blind Mode</div>
            <div class="description">High contrast colors</div>
          </div>
          <div class="control">
            <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>
          </div>
        </div>
      </section>
  
      <section>
        <div class="setting">
          <div class="text">
            <div class="title">Feedback</div>
          </div>
          <div class="control">
            <a href="mailto:wordle@powerlanguage.co.uk?subject=Feedback" title="wordle@powerlanguage.co.uk">Email</a>
            |
            <a href="https://twitter.com/intent/tweet?screen_name=powerlanguish" target="blank" title="@powerlanguish">Twitter</a>
          </div>
        </div>
      </section>
    </div>
    <div id="footnote">
      <div>
        <div id="privacy-policy"><a href="https://www.powerlanguage.co.uk/privacy-policy.html" target="_blank">Privacy Policy</a></div>
        <div id="copyright">Copyright 2021-2022. All Rights Reserved.</div>
      </div>
      <div>
        <div id="puzzle-number"></div>
        <div id="hash"></div>
      </div>
    </div>
  `;
		const gameSettings = (e => {
			r(t, e);
			const a = h(t);

			function t() {
				let e;
				return s(this, t), n(p(e = a.call(this)), "gameApp", undefined), e.attachShadow({
					mode: "open"
				}), e
			}
			return o(t, [{
				key: "connectedCallback",
				value() {
					let e;
					const a = this;
					this.shadowRoot.appendChild(Sa.content.cloneNode(!0)),
						this.shadowRoot.querySelector("#hash").textContent = null === (e = window.wordle) || undefined === e ? undefined : e.hash,
						this.shadowRoot.querySelector("#puzzle-number").textContent = "#".concat(this.gameApp.dayOffset),
						this.shadowRoot.addEventListener("game-switch-change", (e => {
							e.stopPropagation();
							const s = e.detail;
							const t = s.name;
							const o = s.checked;
							const n = s.disabled;
							a.dispatchEvent(new CustomEvent("game-setting-change", {
								bubbles: !0,
								composed: !0,
								detail: {
									name: t,
									checked: o,
									disabled: n
								}
							})),
								a.render()
						})),
						this.render()
				}
			}, {
				key: "render",
				value() {
					const e = document.querySelector("body");
					e.classList.contains("nightmode") && this.shadowRoot.querySelector("#dark-theme").setAttribute("checked", ""),
						e.classList.contains("colorblind") && this.shadowRoot.querySelector("#color-blind-theme").setAttribute("checked", "");
					const a = za();
					a.hardMode && this.shadowRoot.querySelector("#hard-mode").setAttribute("checked", ""),
						a.hardMode || "IN_PROGRESS" !== a.gameStatus || 0 === a.rowIndex || (this.shadowRoot.querySelector("#hard-mode").removeAttribute("checked"), this.shadowRoot.querySelector("#hard-mode").setAttribute("disabled", ""))
				}
			}]), t;
		})(c(HTMLElement));
		customElements.define("game-settings", gameSettings);
		const qa = document.createElement("template");
		qa.innerHTML = `
    <style>
      .toast {
          position: relative;
          margin: 16px;
          background-color: var(--color-tone-1);
          color: var(--color-tone-7);
          padding: 16px;
          border: none;
          border-radius: 4px;
          opacity: 1;
          transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
          font-weight: 700;
      }
      .win {
          background-color: var(--color-correct);
          color: var(--tile-text-color);
      }
      .fade {
          opacity: 0;
      }
    </style>
    <div class="toast"></div>
  `;
		let Ea;

		const gameToast = (e => {
			r(t, e);
			const a = h(t);

			function t() {
				let e;
				return s(this, t), n(p(e = a.call(this)), "_duration", undefined), e.attachShadow({
					mode: "open"
				}), e
			}
			return o(t, [{
				key: "connectedCallback",
				value() {
					const e = this;
					this.shadowRoot.appendChild(qa.content.cloneNode(!0));
					const a = this.shadowRoot.querySelector(".toast");
					a.textContent = this.getAttribute("text"),
						this._duration = this.getAttribute("duration") || 1e3,
						"Infinity" !== this._duration && setTimeout((() => {
							a.classList.add("fade")
						}), this._duration),
						a.addEventListener("transitionend", (a => {
							e.parentNode.removeChild(e)
						}))
				}
			}]), t;
		})(c(HTMLElement));

		function Ca(...args) {
			dataLayer.push(args)
		}
		customElements.define("game-toast", gameToast),
			window.dataLayer = window.dataLayer || [],
			Ca("js", new Date);
		Ca("config", "G-2SSGMHY3NP", {
			app_version: null === (Ea = window.wordle) || undefined === Ea ? undefined : Ea.hash,
			debug_mode: !1
		});
		const La = ["cigar", "rebut", "sissy", "humph", "awake", "blush", "focal", "evade", "naval", "serve", "heath", "dwarf", "model", "karma", "stink", "grade", "quiet", "bench", "abate", "feign", "major", "death", "fresh", "crust", "stool", "colon", "abase", "marry", "react", "batty", "pride", "floss", "helix", "croak", "staff", "paper", "unfed", "whelp", "trawl", "outdo", "adobe", "crazy", "sower", "repay", "digit", "crate", "cluck", "spike", "mimic", "pound", "maxim", "linen", "unmet", "flesh", "booby", "forth", "first", "stand", "belly", "ivory", "seedy", "print", "yearn", "drain", "bribe", "stout", "panel", "crass", "flume", "offal", "agree", "error", "swirl", "argue", "bleed", "delta", "flick", "totem", "wooer", "front", "shrub", "parry", "biome", "lapel", "start", "greet", "goner", "golem", "lusty", "loopy", "round", "audit", "lying", "gamma", "labor", "islet", "civic", "forge", "corny", "moult", "basic", "salad", "agate", "spicy", "spray", "essay", "fjord", "spend", "kebab", "guild", "aback", "motor", "alone", "hatch", "hyper", "thumb", "dowry", "ought", "belch", "dutch", "pilot", "tweed", "comet", "jaunt", "enema", "steed", "abyss", "growl", "fling", "dozen", "boozy", "erode", "world", "gouge", "click", "briar", "great", "altar", "pulpy", "blurt", "coast", "duchy", "groin", "fixer", "group", "rogue", "badly", "smart", "pithy", "gaudy", "chill", "heron", "vodka", "finer", "surer", "radio", "rouge", "perch", "retch", "wrote", "clock", "tilde", "store", "prove", "bring", "solve", "cheat", "grime", "exult", "usher", "epoch", "triad", "break", "rhino", "viral", "conic", "masse", "sonic", "vital", "trace", "using", "peach", "champ", "baton", "brake", "pluck", "craze", "gripe", "weary", "picky", "acute", "ferry", "aside", "tapir", "troll", "unify", "rebus", "boost", "truss", "siege", "tiger", "banal", "slump", "crank", "gorge", "query", "drink", "favor", "abbey", "tangy", "panic", "solar", "shire", "proxy", "point", "robot", "prick", "wince", "crimp", "knoll", "sugar", "whack", "mount", "perky", "could", "wrung", "light", "those", "moist", "shard", "pleat", "aloft", "skill", "elder", "frame", "humor", "pause", "ulcer", "ultra", "robin", "cynic", "agora", "aroma", "caulk", "shake", "pupal", "dodge", "swill", "tacit", "other", "thorn", "trove", "bloke", "vivid", "spill", "chant", "choke", "rupee", "nasty", "mourn", "ahead", "brine", "cloth", "hoard", "sweet", "month", "lapse", "watch", "today", "focus", "smelt", "tease", "cater", "movie", "lynch", "saute", "allow", "renew", "their", "slosh", "purge", "chest", "depot", "epoxy", "nymph", "found", "shall", "harry", "stove", "lowly", "snout", "trope", "fewer", "shawl", "natal", "fibre", "comma", "foray", "scare", "stair", "black", "squad", "royal", "chunk", "mince", "slave", "shame", "cheek", "ample", "flair", "foyer", "cargo", "oxide", "plant", "olive", "inert", "askew", "heist", "shown", "zesty", "hasty", "trash", "fella", "larva", "forgo", "story", "hairy", "train", "homer", "badge", "midst", "canny", "fetus", "butch", "farce", "slung", "tipsy", "metal", "yield", "delve", "being", "scour", "glass", "gamer", "scrap", "money", "hinge", "album", "vouch", "asset", "tiara", "crept", "bayou", "atoll", "manor", "creak", "showy", "phase", "froth", "depth", "gloom", "flood", "trait", "girth", "piety", "payer", "goose", "float", "donor", "atone", "primo", "apron", "blown", "cacao", "loser", "input", "gloat", "awful", "brink", "smite", "beady", "rusty", "retro", "droll", "gawky", "hutch", "pinto", "gaily", "egret", "lilac", "sever", "field", "fluff", "hydro", "flack", "agape", "wench", "voice", "stead", "stalk", "berth", "madam", "night", "bland", "liver", "wedge", "augur", "roomy", "wacky", "flock", "angry", "bobby", "trite", "aphid", "tryst", "midge", "power", "elope", "cinch", "motto", "stomp", "upset", "bluff", "cramp", "quart", "coyly", "youth", "rhyme", "buggy", "alien", "smear", "unfit", "patty", "cling", "glean", "label", "hunky", "khaki", "poker", "gruel", "twice", "twang", "shrug", "treat", "unlit", "waste", "merit", "woven", "octal", "needy", "clown", "widow", "irony", "ruder", "gauze", "chief", "onset", "prize", "fungi", "charm", "gully", "inter", "whoop", "taunt", "leery", "class", "theme", "lofty", "tibia", "booze", "alpha", "thyme", "eclat", "doubt", "parer", "chute", "stick", "trice", "alike", "sooth", "recap", "saint", "liege", "glory", "grate", "admit", "brisk", "soggy", "usurp", "scald", "scorn", "leave", "twine", "sting", "bough", "marsh", "sloth", "dandy", "vigor", "howdy", "enjoy", "valid", "ionic", "equal", "unset", "floor", "catch", "spade", "stein", "exist", "quirk", "denim", "grove", "spiel", "mummy", "fault", "foggy", "flout", "carry", "sneak", "libel", "waltz", "aptly", "piney", "inept", "aloud", "photo", "dream", "stale", "vomit", "ombre", "fanny", "unite", "snarl", "baker", "there", "glyph", "pooch", "hippy", "spell", "folly", "louse", "gulch", "vault", "godly", "threw", "fleet", "grave", "inane", "shock", "crave", "spite", "valve", "skimp", "claim", "rainy", "musty", "pique", "daddy", "quasi", "arise", "aging", "valet", "opium", "avert", "stuck", "recut", "mulch", "genre", "plume", "rifle", "count", "incur", "total", "wrest", "mocha", "deter", "study", "lover", "safer", "rivet", "funny", "smoke", "mound", "undue", "sedan", "pagan", "swine", "guile", "gusty", "equip", "tough", "canoe", "chaos", "covet", "human", "udder", "lunch", "blast", "stray", "manga", "melee", "lefty", "quick", "paste", "given", "octet", "risen", "groan", "leaky", "grind", "carve", "loose", "sadly", "spilt", "apple", "slack", "honey", "final", "sheen", "eerie", "minty", "slick", "derby", "wharf", "spelt", "coach", "erupt", "singe", "price", "spawn", "fairy", "jiffy", "filmy", "stack", "chose", "sleep", "ardor", "nanny", "niece", "woozy", "handy", "grace", "ditto", "stank", "cream", "usual", "diode", "valor", "angle", "ninja", "muddy", "chase", "reply", "prone", "spoil", "heart", "shade", "diner", "arson", "onion", "sleet", "dowel", "couch", "palsy", "bowel", "smile", "evoke", "creek", "lance", "eagle", "idiot", "siren", "built", "embed", "award", "dross", "annul", "goody", "frown", "patio", "laden", "humid", "elite", "lymph", "edify", "might", "reset", "visit", "gusto", "purse", "vapor", "crock", "write", "sunny", "loath", "chaff", "slide", "queer", "venom", "stamp", "sorry", "still", "acorn", "aping", "pushy", "tamer", "hater", "mania", "awoke", "brawn", "swift", "exile", "birch", "lucky", "freer", "risky", "ghost", "plier", "lunar", "winch", "snare", "nurse", "house", "borax", "nicer", "lurch", "exalt", "about", "savvy", "toxin", "tunic", "pried", "inlay", "chump", "lanky", "cress", "eater", "elude", "cycle", "kitty", "boule", "moron", "tenet", "place", "lobby", "plush", "vigil", "index", "blink", "clung", "qualm", "croup", "clink", "juicy", "stage", "decay", "nerve", "flier", "shaft", "crook", "clean", "china", "ridge", "vowel", "gnome", "snuck", "icing", "spiny", "rigor", "snail", "flown", "rabid", "prose", "thank", "poppy", "budge", "fiber", "moldy", "dowdy", "kneel", "track", "caddy", "quell", "dumpy", "paler", "swore", "rebar", "scuba", "splat", "flyer", "horny", "mason", "doing", "ozone", "amply", "molar", "ovary", "beset", "queue", "cliff", "magic", "truce", "sport", "fritz", "edict", "twirl", "verse", "llama", "eaten", "range", "whisk", "hovel", "rehab", "macaw", "sigma", "spout", "verve", "sushi", "dying", "fetid", "brain", "buddy", "thump", "scion", "candy", "chord", "basin", "march", "crowd", "arbor", "gayly", "musky", "stain", "dally", "bless", "bravo", "stung", "title", "ruler", "kiosk", "blond", "ennui", "layer", "fluid", "tatty", "score", "cutie", "zebra", "barge", "matey", "bluer", "aider", "shook", "river", "privy", "betel", "frisk", "bongo", "begun", "azure", "weave", "genie", "sound", "glove", "braid", "scope", "wryly", "rover", "assay", "ocean", "bloom", "irate", "later", "woken", "silky", "wreck", "dwelt", "slate", "smack", "solid", "amaze", "hazel", "wrist", "jolly", "globe", "flint", "rouse", "civil", "vista", "relax", "cover", "alive", "beech", "jetty", "bliss", "vocal", "often", "dolly", "eight", "joker", "since", "event", "ensue", "shunt", "diver", "poser", "worst", "sweep", "alley", "creed", "anime", "leafy", "bosom", "dunce", "stare", "pudgy", "waive", "choir", "stood", "spoke", "outgo", "delay", "bilge", "ideal", "clasp", "seize", "hotly", "laugh", "sieve", "block", "meant", "grape", "noose", "hardy", "shied", "drawl", "daisy", "putty", "strut", "burnt", "tulip", "crick", "idyll", "vixen", "furor", "geeky", "cough", "naive", "shoal", "stork", "bathe", "aunty", "check", "prime", "brass", "outer", "furry", "razor", "elect", "evict", "imply", "demur", "quota", "haven", "cavil", "swear", "crump", "dough", "gavel", "wagon", "salon", "nudge", "harem", "pitch", "sworn", "pupil", "excel", "stony", "cabin", "unzip", "queen", "trout", "polyp", "earth", "storm", "until", "taper", "enter", "child", "adopt", "minor", "fatty", "husky", "brave", "filet", "slime", "glint", "tread", "steal", "regal", "guest", "every", "murky", "share", "spore", "hoist", "buxom", "inner", "otter", "dimly", "level", "sumac", "donut", "stilt", "arena", "sheet", "scrub", "fancy", "slimy", "pearl", "silly", "porch", "dingo", "sepia", "amble", "shady", "bread", "friar", "reign", "dairy", "quill", "cross", "brood", "tuber", "shear", "posit", "blank", "villa", "shank", "piggy", "freak", "which", "among", "fecal", "shell", "would", "algae", "large", "rabbi", "agony", "amuse", "bushy", "copse", "swoon", "knife", "pouch", "ascot", "plane", "crown", "urban", "snide", "relay", "abide", "viola", "rajah", "straw", "dilly", "crash", "amass", "third", "trick", "tutor", "woody", "blurb", "grief", "disco", "where", "sassy", "beach", "sauna", "comic", "clued", "creep", "caste", "graze", "snuff", "frock", "gonad", "drunk", "prong", "lurid", "steel", "halve", "buyer", "vinyl", "utile", "smell", "adage", "worry", "tasty", "local", "trade", "finch", "ashen", "modal", "gaunt", "clove", "enact", "adorn", "roast", "speck", "sheik", "missy", "grunt", "snoop", "party", "touch", "mafia", "emcee", "array", "south", "vapid", "jelly", "skulk", "angst", "tubal", "lower", "crest", "sweat", "cyber", "adore", "tardy", "swami", "notch", "groom", "roach", "hitch", "young", "align", "ready", "frond", "strap", "puree", "realm", "venue", "swarm", "offer", "seven", "dryer", "diary", "dryly", "drank", "acrid", "heady", "theta", "junto", "pixie", "quoth", "bonus", "shalt", "penne", "amend", "datum", "build", "piano", "shelf", "lodge", "suing", "rearm", "coral", "ramen", "worth", "psalm", "infer", "overt", "mayor", "ovoid", "glide", "usage", "poise", "randy", "chuck", "prank", "fishy", "tooth", "ether", "drove", "idler", "swath", "stint", "while", "begat", "apply", "slang", "tarot", "radar", "credo", "aware", "canon", "shift", "timer", "bylaw", "serum", "three", "steak", "iliac", "shirk", "blunt", "puppy", "penal", "joist", "bunny", "shape", "beget", "wheel", "adept", "stunt", "stole", "topaz", "chore", "fluke", "afoot", "bloat", "bully", "dense", "caper", "sneer", "boxer", "jumbo", "lunge", "space", "avail", "short", "slurp", "loyal", "flirt", "pizza", "conch", "tempo", "droop", "plate", "bible", "plunk", "afoul", "savoy", "steep", "agile", "stake", "dwell", "knave", "beard", "arose", "motif", "smash", "broil", "glare", "shove", "baggy", "mammy", "swamp", "along", "rugby", "wager", "quack", "squat", "snaky", "debit", "mange", "skate", "ninth", "joust", "tramp", "spurn", "medal", "micro", "rebel", "flank", "learn", "nadir", "maple", "comfy", "remit", "gruff", "ester", "least", "mogul", "fetch", "cause", "oaken", "aglow", "meaty", "gaffe", "shyly", "racer", "prowl", "thief", "stern", "poesy", "rocky", "tweet", "waist", "spire", "grope", "havoc", "patsy", "truly", "forty", "deity", "uncle", "swish", "giver", "preen", "bevel", "lemur", "draft", "slope", "annoy", "lingo", "bleak", "ditty", "curly", "cedar", "dirge", "grown", "horde", "drool", "shuck", "crypt", "cumin", "stock", "gravy", "locus", "wider", "breed", "quite", "chafe", "cache", "blimp", "deign", "fiend", "logic", "cheap", "elide", "rigid", "false", "renal", "pence", "rowdy", "shoot", "blaze", "envoy", "posse", "brief", "never", "abort", "mouse", "mucky", "sulky", "fiery", "media", "trunk", "yeast", "clear", "skunk", "scalp", "bitty", "cider", "koala", "duvet", "segue", "creme", "super", "grill", "after", "owner", "ember", "reach", "nobly", "empty", "speed", "gipsy", "recur", "smock", "dread", "merge", "burst", "kappa", "amity", "shaky", "hover", "carol", "snort", "synod", "faint", "haunt", "flour", "chair", "detox", "shrew", "tense", "plied", "quark", "burly", "novel", "waxen", "stoic", "jerky", "blitz", "beefy", "lyric", "hussy", "towel", "quilt", "below", "bingo", "wispy", "brash", "scone", "toast", "easel", "saucy", "value", "spice", "honor", "route", "sharp", "bawdy", "radii", "skull", "phony", "issue", "lager", "swell", "urine", "gassy", "trial", "flora", "upper", "latch", "wight", "brick", "retry", "holly", "decal", "grass", "shack", "dogma", "mover", "defer", "sober", "optic", "crier", "vying", "nomad", "flute", "hippo", "shark", "drier", "obese", "bugle", "tawny", "chalk", "feast", "ruddy", "pedal", "scarf", "cruel", "bleat", "tidal", "slush", "semen", "windy", "dusty", "sally", "igloo", "nerdy", "jewel", "shone", "whale", "hymen", "abuse", "fugue", "elbow", "crumb", "pansy", "welsh", "syrup", "terse", "suave", "gamut", "swung", "drake", "freed", "afire", "shirt", "grout", "oddly", "tithe", "plaid", "dummy", "broom", "blind", "torch", "enemy", "again", "tying", "pesky", "alter", "gazer", "noble", "ethos", "bride", "extol", "decor", "hobby", "beast", "idiom", "utter", "these", "sixth", "alarm", "erase", "elegy", "spunk", "piper", "scaly", "scold", "hefty", "chick", "sooty", "canal", "whiny", "slash", "quake", "joint", "swept", "prude", "heavy", "wield", "femme", "lasso", "maize", "shale", "screw", "spree", "smoky", "whiff", "scent", "glade", "spent", "prism", "stoke", "riper", "orbit", "cocoa", "guilt", "humus", "shush", "table", "smirk", "wrong", "noisy", "alert", "shiny", "elate", "resin", "whole", "hunch", "pixel", "polar", "hotel", "sword", "cleat", "mango", "rumba", "puffy", "filly", "billy", "leash", "clout", "dance", "ovate", "facet", "chili", "paint", "liner", "curio", "salty", "audio", "snake", "fable", "cloak", "navel", "spurt", "pesto", "balmy", "flash", "unwed", "early", "churn", "weedy", "stump", "lease", "witty", "wimpy", "spoof", "saner", "blend", "salsa", "thick", "warty", "manic", "blare", "squib", "spoon", "probe", "crepe", "knack", "force", "debut", "order", "haste", "teeth", "agent", "widen", "icily", "slice", "ingot", "clash", "juror", "blood", "abode", "throw", "unity", "pivot", "slept", "troop", "spare", "sewer", "parse", "morph", "cacti", "tacky", "spool", "demon", "moody", "annex", "begin", "fuzzy", "patch", "water", "lumpy", "admin", "omega", "limit", "tabby", "macho", "aisle", "skiff", "basis", "plank", "verge", "botch", "crawl", "lousy", "slain", "cubic", "raise", "wrack", "guide", "foist", "cameo", "under", "actor", "revue", "fraud", "harpy", "scoop", "climb", "refer", "olden", "clerk", "debar", "tally", "ethic", "cairn", "tulle", "ghoul", "hilly", "crude", "apart", "scale", "older", "plain", "sperm", "briny", "abbot", "rerun", "quest", "crisp", "bound", "befit", "drawn", "suite", "itchy", "cheer", "bagel", "guess", "broad", "axiom", "chard", "caput", "leant", "harsh", "curse", "proud", "swing", "opine", "taste", "lupus", "gumbo", "miner", "green", "chasm", "lipid", "topic", "armor", "brush", "crane", "mural", "abled", "habit", "bossy", "maker", "dusky", "dizzy", "lithe", "brook", "jazzy", "fifty", "sense", "giant", "surly", "legal", "fatal", "flunk", "began", "prune", "small", "slant", "scoff", "torus", "ninny", "covey", "viper", "taken", "moral", "vogue", "owing", "token", "entry", "booth", "voter", "chide", "elfin", "ebony", "neigh", "minim", "melon", "kneed", "decoy", "voila", "ankle", "arrow", "mushy", "tribe", "cease", "eager", "birth", "graph", "odder", "terra", "weird", "tried", "clack", "color", "rough", "weigh", "uncut", "ladle", "strip", "craft", "minus", "dicey", "titan", "lucid", "vicar", "dress", "ditch", "gypsy", "pasta", "taffy", "flame", "swoop", "aloof", "sight", "broke", "teary", "chart", "sixty", "wordy", "sheer", "leper", "nosey", "bulge", "savor", "clamp", "funky", "foamy", "toxic", "brand", "plumb", "dingy", "butte", "drill", "tripe", "bicep", "tenor", "krill", "worse", "drama", "hyena", "think", "ratio", "cobra", "basil", "scrum", "bused", "phone", "court", "camel", "proof", "heard", "angel", "petal", "pouty", "throb", "maybe", "fetal", "sprig", "spine", "shout", "cadet", "macro", "dodgy", "satyr", "rarer", "binge", "trend", "nutty", "leapt", "amiss", "split", "myrrh", "width", "sonar", "tower", "baron", "fever", "waver", "spark", "belie", "sloop", "expel", "smote", "baler", "above", "north", "wafer", "scant", "frill", "awash", "snack", "scowl", "frail", "drift", "limbo", "fence", "motel", "ounce", "wreak", "revel", "talon", "prior", "knelt", "cello", "flake", "debug", "anode", "crime", "salve", "scout", "imbue", "pinky", "stave", "vague", "chock", "fight", "video", "stone", "teach", "cleft", "frost", "prawn", "booty", "twist", "apnea", "stiff", "plaza", "ledge", "tweak", "board", "grant", "medic", "bacon", "cable", "brawl", "slunk", "raspy", "forum", "drone", "women", "mucus", "boast", "toddy", "coven", "tumor", "truer", "wrath", "stall", "steam", "axial", "purer", "daily", "trail", "niche", "mealy", "juice", "nylon", "plump", "merry", "flail", "papal", "wheat", "berry", "cower", "erect", "brute", "leggy", "snipe", "sinew", "skier", "penny", "jumpy", "rally", "umbra", "scary", "modem", "gross", "avian", "greed", "satin", "tonic", "parka", "sniff", "livid", "stark", "trump", "giddy", "reuse", "taboo", "avoid", "quote", "devil", "liken", "gloss", "gayer", "beret", "noise", "gland", "dealt", "sling", "rumor", "opera", "thigh", "tonga", "flare", "wound", "white", "bulky", "etude", "horse", "circa", "paddy", "inbox", "fizzy", "grain", "exert", "surge", "gleam", "belle", "salvo", "crush", "fruit", "sappy", "taker", "tract", "ovine", "spiky", "frank", "reedy", "filth", "spasm", "heave", "mambo", "right", "clank", "trust", "lumen", "borne", "spook", "sauce", "amber", "lathe", "carat", "corer", "dirty", "slyly", "affix", "alloy", "taint", "sheep", "kinky", "wooly", "mauve", "flung", "yacht", "fried", "quail", "brunt", "grimy", "curvy", "cagey", "rinse", "deuce", "state", "grasp", "milky", "bison", "graft", "sandy", "baste", "flask", "hedge", "girly", "swash", "boney", "coupe", "endow", "abhor", "welch", "blade", "tight", "geese", "miser", "mirth", "cloud", "cabal", "leech", "close", "tenth", "pecan", "droit", "grail", "clone", "guise", "ralph", "tango", "biddy", "smith", "mower", "payee", "serif", "drape", "fifth", "spank", "glaze", "allot", "truck", "kayak", "virus", "testy", "tepee", "fully", "zonal", "metro", "curry", "grand", "banjo", "axion", "bezel", "occur", "chain", "nasal", "gooey", "filer", "brace", "allay", "pubic", "raven", "plead", "gnash", "flaky", "munch", "dully", "eking", "thing", "slink", "hurry", "theft", "shorn", "pygmy", "ranch", "wring", "lemon", "shore", "mamma", "froze", "newer", "style", "moose", "antic", "drown", "vegan", "chess", "guppy", "union", "lever", "lorry", "image", "cabby", "druid", "exact", "truth", "dopey", "spear", "cried", "chime", "crony", "stunk", "timid", "batch", "gauge", "rotor", "crack", "curve", "latte", "witch", "bunch", "repel", "anvil", "soapy", "meter", "broth", "madly", "dried", "scene", "known", "magma", "roost", "woman", "thong", "punch", "pasty", "downy", "knead", "whirl", "rapid", "clang", "anger", "drive", "goofy", "email", "music", "stuff", "bleep", "rider", "mecca", "folio", "setup", "verso", "quash", "fauna", "gummy", "happy", "newly", "fussy", "relic", "guava", "ratty", "fudge", "femur", "chirp", "forte", "alibi", "whine", "petty", "golly", "plait", "fleck", "felon", "gourd", "brown", "thrum", "ficus", "stash", "decry", "wiser", "junta", "visor", "daunt", "scree", "impel", "await", "press", "whose", "turbo", "stoop", "speak", "mangy", "eying", "inlet", "crone", "pulse", "mossy", "staid", "hence", "pinch", "teddy", "sully", "snore", "ripen", "snowy", "attic", "going", "leach", "mouth", "hound", "clump", "tonal", "bigot", "peril", "piece", "blame", "haute", "spied", "undid", "intro", "basal", "shine", "gecko", "rodeo", "guard", "steer", "loamy", "scamp", "scram", "manly", "hello", "vaunt", "organ", "feral", "knock", "extra", "condo", "adapt", "willy", "polka", "rayon", "skirt", "faith", "torso", "match", "mercy", "tepid", "sleek", "riser", "twixt", "peace", "flush", "catty", "login", "eject", "roger", "rival", "untie", "refit", "aorta", "adult", "judge", "rower", "artsy", "rural", "shave"];
		const Ta = ["aahed", "aalii", "aargh", "aarti", "abaca", "abaci", "abacs", "abaft", "abaka", "abamp", "aband", "abash", "abask", "abaya", "abbas", "abbed", "abbes", "abcee", "abeam", "abear", "abele", "abers", "abets", "abies", "abler", "ables", "ablet", "ablow", "abmho", "abohm", "aboil", "aboma", "aboon", "abord", "abore", "abram", "abray", "abrim", "abrin", "abris", "absey", "absit", "abuna", "abune", "abuts", "abuzz", "abyes", "abysm", "acais", "acari", "accas", "accoy", "acerb", "acers", "aceta", "achar", "ached", "aches", "achoo", "acids", "acidy", "acing", "acini", "ackee", "acker", "acmes", "acmic", "acned", "acnes", "acock", "acold", "acred", "acres", "acros", "acted", "actin", "acton", "acyls", "adaws", "adays", "adbot", "addax", "added", "adder", "addio", "addle", "adeem", "adhan", "adieu", "adios", "adits", "adman", "admen", "admix", "adobo", "adown", "adoze", "adrad", "adred", "adsum", "aduki", "adunc", "adust", "advew", "adyta", "adzed", "adzes", "aecia", "aedes", "aegis", "aeons", "aerie", "aeros", "aesir", "afald", "afara", "afars", "afear", "aflaj", "afore", "afrit", "afros", "agama", "agami", "agars", "agast", "agave", "agaze", "agene", "agers", "agger", "aggie", "aggri", "aggro", "aggry", "aghas", "agila", "agios", "agism", "agist", "agita", "aglee", "aglet", "agley", "agloo", "aglus", "agmas", "agoge", "agone", "agons", "agood", "agria", "agrin", "agros", "agued", "agues", "aguna", "aguti", "aheap", "ahent", "ahigh", "ahind", "ahing", "ahint", "ahold", "ahull", "ahuru", "aidas", "aided", "aides", "aidoi", "aidos", "aiery", "aigas", "aight", "ailed", "aimed", "aimer", "ainee", "ainga", "aioli", "aired", "airer", "airns", "airth", "airts", "aitch", "aitus", "aiver", "aiyee", "aizle", "ajies", "ajiva", "ajuga", "ajwan", "akees", "akela", "akene", "aking", "akita", "akkas", "alaap", "alack", "alamo", "aland", "alane", "alang", "alans", "alant", "alapa", "alaps", "alary", "alate", "alays", "albas", "albee", "alcid", "alcos", "aldea", "alder", "aldol", "aleck", "alecs", "alefs", "aleft", "aleph", "alews", "aleye", "alfas", "algal", "algas", "algid", "algin", "algor", "algum", "alias", "alifs", "aline", "alist", "aliya", "alkie", "alkos", "alkyd", "alkyl", "allee", "allel", "allis", "allod", "allyl", "almah", "almas", "almeh", "almes", "almud", "almug", "alods", "aloed", "aloes", "aloha", "aloin", "aloos", "alowe", "altho", "altos", "alula", "alums", "alure", "alvar", "alway", "amahs", "amain", "amate", "amaut", "amban", "ambit", "ambos", "ambry", "ameba", "ameer", "amene", "amens", "ament", "amias", "amice", "amici", "amide", "amido", "amids", "amies", "amiga", "amigo", "amine", "amino", "amins", "amirs", "amlas", "amman", "ammon", "ammos", "amnia", "amnic", "amnio", "amoks", "amole", "amort", "amour", "amove", "amowt", "amped", "ampul", "amrit", "amuck", "amyls", "anana", "anata", "ancho", "ancle", "ancon", "andro", "anear", "anele", "anent", "angas", "anglo", "anigh", "anile", "anils", "anima", "animi", "anion", "anise", "anker", "ankhs", "ankus", "anlas", "annal", "annas", "annat", "anoas", "anole", "anomy", "ansae", "antae", "antar", "antas", "anted", "antes", "antis", "antra", "antre", "antsy", "anura", "anyon", "apace", "apage", "apaid", "apayd", "apays", "apeak", "apeek", "apers", "apert", "apery", "apgar", "aphis", "apian", "apiol", "apish", "apism", "apode", "apods", "apoop", "aport", "appal", "appay", "appel", "appro", "appui", "appuy", "apres", "apses", "apsis", "apsos", "apted", "apter", "aquae", "aquas", "araba", "araks", "arame", "arars", "arbas", "arced", "archi", "arcos", "arcus", "ardeb", "ardri", "aread", "areae", "areal", "arear", "areas", "areca", "aredd", "arede", "arefy", "areic", "arene", "arepa", "arere", "arete", "arets", "arett", "argal", "argan", "argil", "argle", "argol", "argon", "argot", "argus", "arhat", "arias", "ariel", "ariki", "arils", "ariot", "arish", "arked", "arled", "arles", "armed", "armer", "armet", "armil", "arnas", "arnut", "aroba", "aroha", "aroid", "arpas", "arpen", "arrah", "arras", "arret", "arris", "arroz", "arsed", "arses", "arsey", "arsis", "artal", "artel", "artic", "artis", "aruhe", "arums", "arval", "arvee", "arvos", "aryls", "asana", "ascon", "ascus", "asdic", "ashed", "ashes", "ashet", "asked", "asker", "askoi", "askos", "aspen", "asper", "aspic", "aspie", "aspis", "aspro", "assai", "assam", "asses", "assez", "assot", "aster", "astir", "astun", "asura", "asway", "aswim", "asyla", "ataps", "ataxy", "atigi", "atilt", "atimy", "atlas", "atman", "atmas", "atmos", "atocs", "atoke", "atoks", "atoms", "atomy", "atony", "atopy", "atria", "atrip", "attap", "attar", "atuas", "audad", "auger", "aught", "aulas", "aulic", "auloi", "aulos", "aumil", "aunes", "aunts", "aurae", "aural", "aurar", "auras", "aurei", "aures", "auric", "auris", "aurum", "autos", "auxin", "avale", "avant", "avast", "avels", "avens", "avers", "avgas", "avine", "avion", "avise", "aviso", "avize", "avows", "avyze", "awarn", "awato", "awave", "aways", "awdls", "aweel", "aweto", "awing", "awmry", "awned", "awner", "awols", "awork", "axels", "axile", "axils", "axing", "axite", "axled", "axles", "axman", "axmen", "axoid", "axone", "axons", "ayahs", "ayaya", "ayelp", "aygre", "ayins", "ayont", "ayres", "ayrie", "azans", "azide", "azido", "azine", "azlon", "azoic", "azole", "azons", "azote", "azoth", "azuki", "azurn", "azury", "azygy", "azyme", "azyms", "baaed", "baals", "babas", "babel", "babes", "babka", "baboo", "babul", "babus", "bacca", "bacco", "baccy", "bacha", "bachs", "backs", "baddy", "baels", "baffs", "baffy", "bafts", "baghs", "bagie", "bahts", "bahus", "bahut", "bails", "bairn", "baisa", "baith", "baits", "baiza", "baize", "bajan", "bajra", "bajri", "bajus", "baked", "baken", "bakes", "bakra", "balas", "balds", "baldy", "baled", "bales", "balks", "balky", "balls", "bally", "balms", "baloo", "balsa", "balti", "balun", "balus", "bambi", "banak", "banco", "bancs", "banda", "bandh", "bands", "bandy", "baned", "banes", "bangs", "bania", "banks", "banns", "bants", "bantu", "banty", "banya", "bapus", "barbe", "barbs", "barby", "barca", "barde", "bardo", "bards", "bardy", "bared", "barer", "bares", "barfi", "barfs", "baric", "barks", "barky", "barms", "barmy", "barns", "barny", "barps", "barra", "barre", "barro", "barry", "barye", "basan", "based", "basen", "baser", "bases", "basho", "basij", "basks", "bason", "basse", "bassi", "basso", "bassy", "basta", "basti", "basto", "basts", "bated", "bates", "baths", "batik", "batta", "batts", "battu", "bauds", "bauks", "baulk", "baurs", "bavin", "bawds", "bawks", "bawls", "bawns", "bawrs", "bawty", "bayed", "bayer", "bayes", "bayle", "bayts", "bazar", "bazoo", "beads", "beaks", "beaky", "beals", "beams", "beamy", "beano", "beans", "beany", "beare", "bears", "beath", "beats", "beaty", "beaus", "beaut", "beaux", "bebop", "becap", "becke", "becks", "bedad", "bedel", "bedes", "bedew", "bedim", "bedye", "beedi", "beefs", "beeps", "beers", "beery", "beets", "befog", "begad", "begar", "begem", "begot", "begum", "beige", "beigy", "beins", "bekah", "belah", "belar", "belay", "belee", "belga", "bells", "belon", "belts", "bemad", "bemas", "bemix", "bemud", "bends", "bendy", "benes", "benet", "benga", "benis", "benne", "benni", "benny", "bento", "bents", "benty", "bepat", "beray", "beres", "bergs", "berko", "berks", "berme", "berms", "berob", "beryl", "besat", "besaw", "besee", "beses", "besit", "besom", "besot", "besti", "bests", "betas", "beted", "betes", "beths", "betid", "beton", "betta", "betty", "bever", "bevor", "bevue", "bevvy", "bewet", "bewig", "bezes", "bezil", "bezzy", "bhais", "bhaji", "bhang", "bhats", "bhels", "bhoot", "bhuna", "bhuts", "biach", "biali", "bialy", "bibbs", "bibes", "biccy", "bices", "bided", "bider", "bides", "bidet", "bidis", "bidon", "bield", "biers", "biffo", "biffs", "biffy", "bifid", "bigae", "biggs", "biggy", "bigha", "bight", "bigly", "bigos", "bijou", "biked", "biker", "bikes", "bikie", "bilbo", "bilby", "biled", "biles", "bilgy", "bilks", "bills", "bimah", "bimas", "bimbo", "binal", "bindi", "binds", "biner", "bines", "bings", "bingy", "binit", "binks", "bints", "biogs", "biont", "biota", "biped", "bipod", "birds", "birks", "birle", "birls", "biros", "birrs", "birse", "birsy", "bises", "bisks", "bisom", "bitch", "biter", "bites", "bitos", "bitou", "bitsy", "bitte", "bitts", "bivia", "bivvy", "bizes", "bizzo", "bizzy", "blabs", "blads", "blady", "blaer", "blaes", "blaff", "blags", "blahs", "blain", "blams", "blart", "blase", "blash", "blate", "blats", "blatt", "blaud", "blawn", "blaws", "blays", "blear", "blebs", "blech", "blees", "blent", "blert", "blest", "blets", "bleys", "blimy", "bling", "blini", "blins", "bliny", "blips", "blist", "blite", "blits", "blive", "blobs", "blocs", "blogs", "blook", "bloop", "blore", "blots", "blows", "blowy", "blubs", "blude", "bluds", "bludy", "blued", "blues", "bluet", "bluey", "bluid", "blume", "blunk", "blurs", "blype", "boabs", "boaks", "boars", "boart", "boats", "bobac", "bobak", "bobas", "bobol", "bobos", "bocca", "bocce", "bocci", "boche", "bocks", "boded", "bodes", "bodge", "bodhi", "bodle", "boeps", "boets", "boeuf", "boffo", "boffs", "bogan", "bogey", "boggy", "bogie", "bogle", "bogue", "bogus", "bohea", "bohos", "boils", "boing", "boink", "boite", "boked", "bokeh", "bokes", "bokos", "bolar", "bolas", "bolds", "boles", "bolix", "bolls", "bolos", "bolts", "bolus", "bomas", "bombe", "bombo", "bombs", "bonce", "bonds", "boned", "boner", "bones", "bongs", "bonie", "bonks", "bonne", "bonny", "bonza", "bonze", "booai", "booay", "boobs", "boody", "booed", "boofy", "boogy", "boohs", "books", "booky", "bools", "booms", "boomy", "boong", "boons", "boord", "boors", "boose", "boots", "boppy", "borak", "boral", "boras", "borde", "bords", "bored", "boree", "borel", "borer", "bores", "borgo", "boric", "borks", "borms", "borna", "boron", "borts", "borty", "bortz", "bosie", "bosks", "bosky", "boson", "bosun", "botas", "botel", "botes", "bothy", "botte", "botts", "botty", "bouge", "bouks", "boult", "bouns", "bourd", "bourg", "bourn", "bouse", "bousy", "bouts", "bovid", "bowat", "bowed", "bower", "bowes", "bowet", "bowie", "bowls", "bowne", "bowrs", "bowse", "boxed", "boxen", "boxes", "boxla", "boxty", "boyar", "boyau", "boyed", "boyfs", "boygs", "boyla", "boyos", "boysy", "bozos", "braai", "brach", "brack", "bract", "brads", "braes", "brags", "brail", "braks", "braky", "brame", "brane", "brank", "brans", "brant", "brast", "brats", "brava", "bravi", "braws", "braxy", "brays", "braza", "braze", "bream", "brede", "breds", "breem", "breer", "brees", "breid", "breis", "breme", "brens", "brent", "brere", "brers", "breve", "brews", "breys", "brier", "bries", "brigs", "briki", "briks", "brill", "brims", "brins", "brios", "brise", "briss", "brith", "brits", "britt", "brize", "broch", "brock", "brods", "brogh", "brogs", "brome", "bromo", "bronc", "brond", "brool", "broos", "brose", "brosy", "brows", "brugh", "bruin", "bruit", "brule", "brume", "brung", "brusk", "brust", "bruts", "buats", "buaze", "bubal", "bubas", "bubba", "bubbe", "bubby", "bubus", "buchu", "bucko", "bucks", "bucku", "budas", "budis", "budos", "buffa", "buffe", "buffi", "buffo", "buffs", "buffy", "bufos", "bufty", "buhls", "buhrs", "buiks", "buist", "bukes", "bulbs", "bulgy", "bulks", "bulla", "bulls", "bulse", "bumbo", "bumfs", "bumph", "bumps", "bumpy", "bunas", "bunce", "bunco", "bunde", "bundh", "bunds", "bundt", "bundu", "bundy", "bungs", "bungy", "bunia", "bunje", "bunjy", "bunko", "bunks", "bunns", "bunts", "bunty", "bunya", "buoys", "buppy", "buran", "buras", "burbs", "burds", "buret", "burfi", "burgh", "burgs", "burin", "burka", "burke", "burks", "burls", "burns", "buroo", "burps", "burqa", "burro", "burrs", "burry", "bursa", "burse", "busby", "buses", "busks", "busky", "bussu", "busti", "busts", "busty", "buteo", "butes", "butle", "butoh", "butts", "butty", "butut", "butyl", "buzzy", "bwana", "bwazi", "byded", "bydes", "byked", "bykes", "byres", "byrls", "byssi", "bytes", "byway", "caaed", "cabas", "caber", "cabob", "caboc", "cabre", "cacas", "cacks", "cacky", "cadee", "cades", "cadge", "cadgy", "cadie", "cadis", "cadre", "caeca", "caese", "cafes", "caffs", "caged", "cager", "cages", "cagot", "cahow", "caids", "cains", "caird", "cajon", "cajun", "caked", "cakes", "cakey", "calfs", "calid", "calif", "calix", "calks", "calla", "calls", "calms", "calmy", "calos", "calpa", "calps", "calve", "calyx", "caman", "camas", "cames", "camis", "camos", "campi", "campo", "camps", "campy", "camus", "caned", "caneh", "caner", "canes", "cangs", "canid", "canna", "canns", "canso", "canst", "canto", "cants", "canty", "capas", "caped", "capes", "capex", "caphs", "capiz", "caple", "capon", "capos", "capot", "capri", "capul", "carap", "carbo", "carbs", "carby", "cardi", "cards", "cardy", "cared", "carer", "cares", "caret", "carex", "carks", "carle", "carls", "carns", "carny", "carob", "carom", "caron", "carpi", "carps", "carrs", "carse", "carta", "carte", "carts", "carvy", "casas", "casco", "cased", "cases", "casks", "casky", "casts", "casus", "cates", "cauda", "cauks", "cauld", "cauls", "caums", "caups", "cauri", "causa", "cavas", "caved", "cavel", "caver", "caves", "cavie", "cawed", "cawks", "caxon", "ceaze", "cebid", "cecal", "cecum", "ceded", "ceder", "cedes", "cedis", "ceiba", "ceili", "ceils", "celeb", "cella", "celli", "cells", "celom", "celts", "cense", "cento", "cents", "centu", "ceorl", "cepes", "cerci", "cered", "ceres", "cerge", "ceria", "ceric", "cerne", "ceroc", "ceros", "certs", "certy", "cesse", "cesta", "cesti", "cetes", "cetyl", "cezve", "chace", "chack", "chaco", "chado", "chads", "chaft", "chais", "chals", "chams", "chana", "chang", "chank", "chape", "chaps", "chapt", "chara", "chare", "chark", "charr", "chars", "chary", "chats", "chave", "chavs", "chawk", "chaws", "chaya", "chays", "cheep", "chefs", "cheka", "chela", "chelp", "chemo", "chems", "chere", "chert", "cheth", "chevy", "chews", "chewy", "chiao", "chias", "chibs", "chica", "chich", "chico", "chics", "chiel", "chiks", "chile", "chimb", "chimo", "chimp", "chine", "ching", "chink", "chino", "chins", "chips", "chirk", "chirl", "chirm", "chiro", "chirr", "chirt", "chiru", "chits", "chive", "chivs", "chivy", "chizz", "choco", "chocs", "chode", "chogs", "choil", "choko", "choky", "chola", "choli", "cholo", "chomp", "chons", "choof", "chook", "choom", "choon", "chops", "chota", "chott", "chout", "choux", "chowk", "chows", "chubs", "chufa", "chuff", "chugs", "chums", "churl", "churr", "chuse", "chuts", "chyle", "chyme", "chynd", "cibol", "cided", "cides", "ciels", "ciggy", "cilia", "cills", "cimar", "cimex", "cinct", "cines", "cinqs", "cions", "cippi", "circs", "cires", "cirls", "cirri", "cisco", "cissy", "cists", "cital", "cited", "citer", "cites", "cives", "civet", "civie", "civvy", "clach", "clade", "clads", "claes", "clags", "clame", "clams", "clans", "claps", "clapt", "claro", "clart", "clary", "clast", "clats", "claut", "clave", "clavi", "claws", "clays", "cleck", "cleek", "cleep", "clefs", "clegs", "cleik", "clems", "clepe", "clept", "cleve", "clews", "clied", "clies", "clift", "clime", "cline", "clint", "clipe", "clips", "clipt", "clits", "cloam", "clods", "cloff", "clogs", "cloke", "clomb", "clomp", "clonk", "clons", "cloop", "cloot", "clops", "clote", "clots", "clour", "clous", "clows", "cloye", "cloys", "cloze", "clubs", "clues", "cluey", "clunk", "clype", "cnida", "coact", "coady", "coala", "coals", "coaly", "coapt", "coarb", "coate", "coati", "coats", "cobbs", "cobby", "cobia", "coble", "cobza", "cocas", "cocci", "cocco", "cocks", "cocky", "cocos", "codas", "codec", "coded", "coden", "coder", "codes", "codex", "codon", "coeds", "coffs", "cogie", "cogon", "cogue", "cohab", "cohen", "cohoe", "cohog", "cohos", "coifs", "coign", "coils", "coins", "coirs", "coits", "coked", "cokes", "colas", "colby", "colds", "coled", "coles", "coley", "colic", "colin", "colls", "colly", "colog", "colts", "colza", "comae", "comal", "comas", "combe", "combi", "combo", "combs", "comby", "comer", "comes", "comix", "commo", "comms", "commy", "compo", "comps", "compt", "comte", "comus", "coned", "cones", "coney", "confs", "conga", "conge", "congo", "conia", "conin", "conks", "conky", "conne", "conns", "conte", "conto", "conus", "convo", "cooch", "cooed", "cooee", "cooer", "cooey", "coofs", "cooks", "cooky", "cools", "cooly", "coomb", "cooms", "coomy", "coons", "coops", "coopt", "coost", "coots", "cooze", "copal", "copay", "coped", "copen", "coper", "copes", "coppy", "copra", "copsy", "coqui", "coram", "corbe", "corby", "cords", "cored", "cores", "corey", "corgi", "coria", "corks", "corky", "corms", "corni", "corno", "corns", "cornu", "corps", "corse", "corso", "cosec", "cosed", "coses", "coset", "cosey", "cosie", "costa", "coste", "costs", "cotan", "coted", "cotes", "coths", "cotta", "cotts", "coude", "coups", "courb", "courd", "coure", "cours", "couta", "couth", "coved", "coves", "covin", "cowal", "cowan", "cowed", "cowks", "cowls", "cowps", "cowry", "coxae", "coxal", "coxed", "coxes", "coxib", "coyau", "coyed", "coyer", "coypu", "cozed", "cozen", "cozes", "cozey", "cozie", "craal", "crabs", "crags", "craic", "craig", "crake", "crame", "crams", "crans", "crape", "craps", "crapy", "crare", "craws", "crays", "creds", "creel", "crees", "crems", "crena", "creps", "crepy", "crewe", "crews", "crias", "cribs", "cries", "crims", "crine", "crios", "cripe", "crips", "crise", "crith", "crits", "croci", "crocs", "croft", "crogs", "cromb", "crome", "cronk", "crons", "crool", "croon", "crops", "crore", "crost", "crout", "crows", "croze", "cruck", "crudo", "cruds", "crudy", "crues", "cruet", "cruft", "crunk", "cruor", "crura", "cruse", "crusy", "cruve", "crwth", "cryer", "ctene", "cubby", "cubeb", "cubed", "cuber", "cubes", "cubit", "cuddy", "cuffo", "cuffs", "cuifs", "cuing", "cuish", "cuits", "cukes", "culch", "culet", "culex", "culls", "cully", "culms", "culpa", "culti", "cults", "culty", "cumec", "cundy", "cunei", "cunit", "cunts", "cupel", "cupid", "cuppa", "cuppy", "curat", "curbs", "curch", "curds", "curdy", "cured", "curer", "cures", "curet", "curfs", "curia", "curie", "curli", "curls", "curns", "curny", "currs", "cursi", "curst", "cusec", "cushy", "cusks", "cusps", "cuspy", "cusso", "cusum", "cutch", "cuter", "cutes", "cutey", "cutin", "cutis", "cutto", "cutty", "cutup", "cuvee", "cuzes", "cwtch", "cyano", "cyans", "cycad", "cycas", "cyclo", "cyder", "cylix", "cymae", "cymar", "cymas", "cymes", "cymol", "cysts", "cytes", "cyton", "czars", "daals", "dabba", "daces", "dacha", "dacks", "dadah", "dadas", "dados", "daffs", "daffy", "dagga", "daggy", "dagos", "dahls", "daiko", "daine", "daint", "daker", "daled", "dales", "dalis", "dalle", "dalts", "daman", "damar", "dames", "damme", "damns", "damps", "dampy", "dancy", "dangs", "danio", "danks", "danny", "dants", "daraf", "darbs", "darcy", "dared", "darer", "dares", "darga", "dargs", "daric", "daris", "darks", "darky", "darns", "darre", "darts", "darzi", "dashi", "dashy", "datal", "dated", "dater", "dates", "datos", "datto", "daube", "daubs", "dauby", "dauds", "dault", "daurs", "dauts", "daven", "davit", "dawah", "dawds", "dawed", "dawen", "dawks", "dawns", "dawts", "dayan", "daych", "daynt", "dazed", "dazer", "dazes", "deads", "deair", "deals", "deans", "deare", "dearn", "dears", "deary", "deash", "deave", "deaws", "deawy", "debag", "debby", "debel", "debes", "debts", "debud", "debur", "debus", "debye", "decad", "decaf", "decan", "decko", "decks", "decos", "dedal", "deeds", "deedy", "deely", "deems", "deens", "deeps", "deere", "deers", "deets", "deeve", "deevs", "defat", "deffo", "defis", "defog", "degas", "degum", "degus", "deice", "deids", "deify", "deils", "deism", "deist", "deked", "dekes", "dekko", "deled", "deles", "delfs", "delft", "delis", "dells", "delly", "delos", "delph", "delts", "deman", "demes", "demic", "demit", "demob", "demoi", "demos", "dempt", "denar", "denay", "dench", "denes", "denet", "denis", "dents", "deoxy", "derat", "deray", "dered", "deres", "derig", "derma", "derms", "derns", "derny", "deros", "derro", "derry", "derth", "dervs", "desex", "deshi", "desis", "desks", "desse", "devas", "devel", "devis", "devon", "devos", "devot", "dewan", "dewar", "dewax", "dewed", "dexes", "dexie", "dhaba", "dhaks", "dhals", "dhikr", "dhobi", "dhole", "dholl", "dhols", "dhoti", "dhows", "dhuti", "diact", "dials", "diane", "diazo", "dibbs", "diced", "dicer", "dices", "dicht", "dicks", "dicky", "dicot", "dicta", "dicts", "dicty", "diddy", "didie", "didos", "didst", "diebs", "diels", "diene", "diets", "diffs", "dight", "dikas", "diked", "diker", "dikes", "dikey", "dildo", "dilli", "dills", "dimbo", "dimer", "dimes", "dimps", "dinar", "dined", "dines", "dinge", "dings", "dinic", "dinks", "dinky", "dinna", "dinos", "dints", "diols", "diota", "dippy", "dipso", "diram", "direr", "dirke", "dirks", "dirls", "dirts", "disas", "disci", "discs", "dishy", "disks", "disme", "dital", "ditas", "dited", "dites", "ditsy", "ditts", "ditzy", "divan", "divas", "dived", "dives", "divis", "divna", "divos", "divot", "divvy", "diwan", "dixie", "dixit", "diyas", "dizen", "djinn", "djins", "doabs", "doats", "dobby", "dobes", "dobie", "dobla", "dobra", "dobro", "docht", "docks", "docos", "docus", "doddy", "dodos", "doeks", "doers", "doest", "doeth", "doffs", "dogan", "doges", "dogey", "doggo", "doggy", "dogie", "dohyo", "doilt", "doily", "doits", "dojos", "dolce", "dolci", "doled", "doles", "dolia", "dolls", "dolma", "dolor", "dolos", "dolts", "domal", "domed", "domes", "domic", "donah", "donas", "donee", "doner", "donga", "dongs", "donko", "donna", "donne", "donny", "donsy", "doobs", "dooce", "doody", "dooks", "doole", "dools", "dooly", "dooms", "doomy", "doona", "doorn", "doors", "doozy", "dopas", "doped", "doper", "dopes", "dorad", "dorba", "dorbs", "doree", "dores", "doric", "doris", "dorks", "dorky", "dorms", "dormy", "dorps", "dorrs", "dorsa", "dorse", "dorts", "dorty", "dosai", "dosas", "dosed", "doseh", "doser", "doses", "dosha", "dotal", "doted", "doter", "dotes", "dotty", "douar", "douce", "doucs", "douks", "doula", "douma", "doums", "doups", "doura", "douse", "douts", "doved", "doven", "dover", "doves", "dovie", "dowar", "dowds", "dowed", "dower", "dowie", "dowle", "dowls", "dowly", "downa", "downs", "dowps", "dowse", "dowts", "doxed", "doxes", "doxie", "doyen", "doyly", "dozed", "dozer", "dozes", "drabs", "drack", "draco", "draff", "drags", "drail", "drams", "drant", "draps", "drats", "drave", "draws", "drays", "drear", "dreck", "dreed", "dreer", "drees", "dregs", "dreks", "drent", "drere", "drest", "dreys", "dribs", "drice", "dries", "drily", "drips", "dript", "droid", "droil", "droke", "drole", "drome", "drony", "droob", "droog", "drook", "drops", "dropt", "drouk", "drows", "drubs", "drugs", "drums", "drupe", "druse", "drusy", "druxy", "dryad", "dryas", "dsobo", "dsomo", "duads", "duals", "duans", "duars", "dubbo", "ducal", "ducat", "duces", "ducks", "ducky", "ducts", "duddy", "duded", "dudes", "duels", "duets", "duett", "duffs", "dufus", "duing", "duits", "dukas", "duked", "dukes", "dukka", "dulce", "dules", "dulia", "dulls", "dulse", "dumas", "dumbo", "dumbs", "dumka", "dumky", "dumps", "dunam", "dunch", "dunes", "dungs", "dungy", "dunks", "dunno", "dunny", "dunsh", "dunts", "duomi", "duomo", "duped", "duper", "dupes", "duple", "duply", "duppy", "dural", "duras", "dured", "dures", "durgy", "durns", "duroc", "duros", "duroy", "durra", "durrs", "durry", "durst", "durum", "durzi", "dusks", "dusts", "duxes", "dwaal", "dwale", "dwalm", "dwams", "dwang", "dwaum", "dweeb", "dwile", "dwine", "dyads", "dyers", "dyked", "dykes", "dykey", "dykon", "dynel", "dynes", "dzhos", "eagre", "ealed", "eales", "eaned", "eards", "eared", "earls", "earns", "earnt", "earst", "eased", "easer", "eases", "easle", "easts", "eathe", "eaved", "eaves", "ebbed", "ebbet", "ebons", "ebook", "ecads", "eched", "eches", "echos", "ecrus", "edema", "edged", "edger", "edges", "edile", "edits", "educe", "educt", "eejit", "eensy", "eeven", "eevns", "effed", "egads", "egers", "egest", "eggar", "egged", "egger", "egmas", "ehing", "eider", "eidos", "eigne", "eiked", "eikon", "eilds", "eisel", "ejido", "ekkas", "elain", "eland", "elans", "elchi", "eldin", "elemi", "elfed", "eliad", "elint", "elmen", "eloge", "elogy", "eloin", "elops", "elpee", "elsin", "elute", "elvan", "elven", "elver", "elves", "emacs", "embar", "embay", "embog", "embow", "embox", "embus", "emeer", "emend", "emerg", "emery", "emeus", "emics", "emirs", "emits", "emmas", "emmer", "emmet", "emmew", "emmys", "emoji", "emong", "emote", "emove", "empts", "emule", "emure", "emyde", "emyds", "enarm", "enate", "ended", "ender", "endew", "endue", "enews", "enfix", "eniac", "enlit", "enmew", "ennog", "enoki", "enols", "enorm", "enows", "enrol", "ensew", "ensky", "entia", "enure", "enurn", "envoi", "enzym", "eorls", "eosin", "epact", "epees", "ephah", "ephas", "ephod", "ephor", "epics", "epode", "epopt", "epris", "eques", "equid", "erbia", "erevs", "ergon", "ergos", "ergot", "erhus", "erica", "erick", "erics", "ering", "erned", "ernes", "erose", "erred", "erses", "eruct", "erugo", "eruvs", "erven", "ervil", "escar", "escot", "esile", "eskar", "esker", "esnes", "esses", "estoc", "estop", "estro", "etage", "etape", "etats", "etens", "ethal", "ethne", "ethyl", "etics", "etnas", "ettin", "ettle", "etuis", "etwee", "etyma", "eughs", "euked", "eupad", "euros", "eusol", "evens", "evert", "evets", "evhoe", "evils", "evite", "evohe", "ewers", "ewest", "ewhow", "ewked", "exams", "exeat", "execs", "exeem", "exeme", "exfil", "exies", "exine", "exing", "exits", "exode", "exome", "exons", "expat", "expos", "exude", "exuls", "exurb", "eyass", "eyers", "eyots", "eyras", "eyres", "eyrie", "eyrir", "ezine", "fabby", "faced", "facer", "faces", "facia", "facta", "facts", "faddy", "faded", "fader", "fades", "fadge", "fados", "faena", "faery", "faffs", "faffy", "faggy", "fagin", "fagot", "faiks", "fails", "faine", "fains", "fairs", "faked", "faker", "fakes", "fakey", "fakie", "fakir", "falaj", "falls", "famed", "fames", "fanal", "fands", "fanes", "fanga", "fango", "fangs", "fanks", "fanon", "fanos", "fanum", "faqir", "farad", "farci", "farcy", "fards", "fared", "farer", "fares", "farle", "farls", "farms", "faros", "farro", "farse", "farts", "fasci", "fasti", "fasts", "fated", "fates", "fatly", "fatso", "fatwa", "faugh", "fauld", "fauns", "faurd", "fauts", "fauve", "favas", "favel", "faver", "faves", "favus", "fawns", "fawny", "faxed", "faxes", "fayed", "fayer", "fayne", "fayre", "fazed", "fazes", "feals", "feare", "fears", "feart", "fease", "feats", "feaze", "feces", "fecht", "fecit", "fecks", "fedex", "feebs", "feeds", "feels", "feens", "feers", "feese", "feeze", "fehme", "feint", "feist", "felch", "felid", "fells", "felly", "felts", "felty", "femal", "femes", "femmy", "fends", "fendy", "fenis", "fenks", "fenny", "fents", "feods", "feoff", "ferer", "feres", "feria", "ferly", "fermi", "ferms", "ferns", "ferny", "fesse", "festa", "fests", "festy", "fetas", "feted", "fetes", "fetor", "fetta", "fetts", "fetwa", "feuar", "feuds", "feued", "feyed", "feyer", "feyly", "fezes", "fezzy", "fiars", "fiats", "fibro", "fices", "fiche", "fichu", "ficin", "ficos", "fides", "fidge", "fidos", "fiefs", "fient", "fiere", "fiers", "fiest", "fifed", "fifer", "fifes", "fifis", "figgy", "figos", "fiked", "fikes", "filar", "filch", "filed", "files", "filii", "filks", "fille", "fillo", "fills", "filmi", "films", "filos", "filum", "finca", "finds", "fined", "fines", "finis", "finks", "finny", "finos", "fiord", "fiqhs", "fique", "fired", "firer", "fires", "firie", "firks", "firms", "firns", "firry", "firth", "fiscs", "fisks", "fists", "fisty", "fitch", "fitly", "fitna", "fitte", "fitts", "fiver", "fives", "fixed", "fixes", "fixit", "fjeld", "flabs", "flaff", "flags", "flaks", "flamm", "flams", "flamy", "flane", "flans", "flaps", "flary", "flats", "flava", "flawn", "flaws", "flawy", "flaxy", "flays", "fleam", "fleas", "fleek", "fleer", "flees", "flegs", "fleme", "fleur", "flews", "flexi", "flexo", "fleys", "flics", "flied", "flies", "flimp", "flims", "flips", "flirs", "flisk", "flite", "flits", "flitt", "flobs", "flocs", "floes", "flogs", "flong", "flops", "flors", "flory", "flosh", "flota", "flote", "flows", "flubs", "flued", "flues", "fluey", "fluky", "flump", "fluor", "flurr", "fluty", "fluyt", "flyby", "flype", "flyte", "foals", "foams", "foehn", "fogey", "fogie", "fogle", "fogou", "fohns", "foids", "foils", "foins", "folds", "foley", "folia", "folic", "folie", "folks", "folky", "fomes", "fonda", "fonds", "fondu", "fones", "fonly", "fonts", "foods", "foody", "fools", "foots", "footy", "foram", "forbs", "forby", "fordo", "fords", "forel", "fores", "forex", "forks", "forky", "forme", "forms", "forts", "forza", "forze", "fossa", "fosse", "fouat", "fouds", "fouer", "fouet", "foule", "fouls", "fount", "fours", "fouth", "fovea", "fowls", "fowth", "foxed", "foxes", "foxie", "foyle", "foyne", "frabs", "frack", "fract", "frags", "fraim", "franc", "frape", "fraps", "frass", "frate", "frati", "frats", "fraus", "frays", "frees", "freet", "freit", "fremd", "frena", "freon", "frere", "frets", "fribs", "frier", "fries", "frigs", "frise", "frist", "frith", "frits", "fritt", "frize", "frizz", "froes", "frogs", "frons", "frore", "frorn", "frory", "frosh", "frows", "frowy", "frugs", "frump", "frush", "frust", "fryer", "fubar", "fubby", "fubsy", "fucks", "fucus", "fuddy", "fudgy", "fuels", "fuero", "fuffs", "fuffy", "fugal", "fuggy", "fugie", "fugio", "fugle", "fugly", "fugus", "fujis", "fulls", "fumed", "fumer", "fumes", "fumet", "fundi", "funds", "fundy", "fungo", "fungs", "funks", "fural", "furan", "furca", "furls", "furol", "furrs", "furth", "furze", "furzy", "fused", "fusee", "fusel", "fuses", "fusil", "fusks", "fusts", "fusty", "futon", "fuzed", "fuzee", "fuzes", "fuzil", "fyces", "fyked", "fykes", "fyles", "fyrds", "fytte", "gabba", "gabby", "gable", "gaddi", "gades", "gadge", "gadid", "gadis", "gadje", "gadjo", "gadso", "gaffs", "gaged", "gager", "gages", "gaids", "gains", "gairs", "gaita", "gaits", "gaitt", "gajos", "galah", "galas", "galax", "galea", "galed", "gales", "galls", "gally", "galop", "galut", "galvo", "gamas", "gamay", "gamba", "gambe", "gambo", "gambs", "gamed", "games", "gamey", "gamic", "gamin", "gamme", "gammy", "gamps", "ganch", "gandy", "ganef", "ganev", "gangs", "ganja", "ganof", "gants", "gaols", "gaped", "gaper", "gapes", "gapos", "gappy", "garbe", "garbo", "garbs", "garda", "gares", "garis", "garms", "garni", "garre", "garth", "garum", "gases", "gasps", "gaspy", "gasts", "gatch", "gated", "gater", "gates", "gaths", "gator", "gauch", "gaucy", "gauds", "gauje", "gault", "gaums", "gaumy", "gaups", "gaurs", "gauss", "gauzy", "gavot", "gawcy", "gawds", "gawks", "gawps", "gawsy", "gayal", "gazal", "gazar", "gazed", "gazes", "gazon", "gazoo", "geals", "geans", "geare", "gears", "geats", "gebur", "gecks", "geeks", "geeps", "geest", "geist", "geits", "gelds", "gelee", "gelid", "gelly", "gelts", "gemel", "gemma", "gemmy", "gemot", "genal", "genas", "genes", "genet", "genic", "genii", "genip", "genny", "genoa", "genom", "genro", "gents", "genty", "genua", "genus", "geode", "geoid", "gerah", "gerbe", "geres", "gerle", "germs", "germy", "gerne", "gesse", "gesso", "geste", "gests", "getas", "getup", "geums", "geyan", "geyer", "ghast", "ghats", "ghaut", "ghazi", "ghees", "ghest", "ghyll", "gibed", "gibel", "giber", "gibes", "gibli", "gibus", "gifts", "gigas", "gighe", "gigot", "gigue", "gilas", "gilds", "gilet", "gills", "gilly", "gilpy", "gilts", "gimel", "gimme", "gimps", "gimpy", "ginch", "ginge", "gings", "ginks", "ginny", "ginzo", "gipon", "gippo", "gippy", "girds", "girls", "girns", "giron", "giros", "girrs", "girsh", "girts", "gismo", "gisms", "gists", "gitch", "gites", "giust", "gived", "gives", "gizmo", "glace", "glads", "glady", "glaik", "glair", "glams", "glans", "glary", "glaum", "glaur", "glazy", "gleba", "glebe", "gleby", "glede", "gleds", "gleed", "gleek", "glees", "gleet", "gleis", "glens", "glent", "gleys", "glial", "glias", "glibs", "gliff", "glift", "glike", "glime", "glims", "glisk", "glits", "glitz", "gloam", "globi", "globs", "globy", "glode", "glogg", "gloms", "gloop", "glops", "glost", "glout", "glows", "gloze", "glued", "gluer", "glues", "gluey", "glugs", "glume", "glums", "gluon", "glute", "gluts", "gnarl", "gnarr", "gnars", "gnats", "gnawn", "gnaws", "gnows", "goads", "goafs", "goals", "goary", "goats", "goaty", "goban", "gobar", "gobbi", "gobbo", "gobby", "gobis", "gobos", "godet", "godso", "goels", "goers", "goest", "goeth", "goety", "gofer", "goffs", "gogga", "gogos", "goier", "gojis", "golds", "goldy", "goles", "golfs", "golpe", "golps", "gombo", "gomer", "gompa", "gonch", "gonef", "gongs", "gonia", "gonif", "gonks", "gonna", "gonof", "gonys", "gonzo", "gooby", "goods", "goofs", "googs", "gooks", "gooky", "goold", "gools", "gooly", "goons", "goony", "goops", "goopy", "goors", "goory", "goosy", "gopak", "gopik", "goral", "goras", "gored", "gores", "goris", "gorms", "gormy", "gorps", "gorse", "gorsy", "gosht", "gosse", "gotch", "goths", "gothy", "gotta", "gouch", "gouks", "goura", "gouts", "gouty", "gowan", "gowds", "gowfs", "gowks", "gowls", "gowns", "goxes", "goyim", "goyle", "graal", "grabs", "grads", "graff", "graip", "grama", "grame", "gramp", "grams", "grana", "grans", "grapy", "gravs", "grays", "grebe", "grebo", "grece", "greek", "grees", "grege", "grego", "grein", "grens", "grese", "greve", "grews", "greys", "grice", "gride", "grids", "griff", "grift", "grigs", "grike", "grins", "griot", "grips", "gript", "gripy", "grise", "grist", "grisy", "grith", "grits", "grize", "groat", "grody", "grogs", "groks", "groma", "grone", "groof", "grosz", "grots", "grouf", "grovy", "grows", "grrls", "grrrl", "grubs", "grued", "grues", "grufe", "grume", "grump", "grund", "gryce", "gryde", "gryke", "grype", "grypt", "guaco", "guana", "guano", "guans", "guars", "gucks", "gucky", "gudes", "guffs", "gugas", "guids", "guimp", "guiro", "gulag", "gular", "gulas", "gules", "gulet", "gulfs", "gulfy", "gulls", "gulph", "gulps", "gulpy", "gumma", "gummi", "gumps", "gundy", "gunge", "gungy", "gunks", "gunky", "gunny", "guqin", "gurdy", "gurge", "gurls", "gurly", "gurns", "gurry", "gursh", "gurus", "gushy", "gusla", "gusle", "gusli", "gussy", "gusts", "gutsy", "gutta", "gutty", "guyed", "guyle", "guyot", "guyse", "gwine", "gyals", "gyans", "gybed", "gybes", "gyeld", "gymps", "gynae", "gynie", "gynny", "gynos", "gyoza", "gypos", "gyppo", "gyppy", "gyral", "gyred", "gyres", "gyron", "gyros", "gyrus", "gytes", "gyved", "gyves", "haafs", "haars", "hable", "habus", "hacek", "hacks", "hadal", "haded", "hades", "hadji", "hadst", "haems", "haets", "haffs", "hafiz", "hafts", "haggs", "hahas", "haick", "haika", "haiks", "haiku", "hails", "haily", "hains", "haint", "hairs", "haith", "hajes", "hajis", "hajji", "hakam", "hakas", "hakea", "hakes", "hakim", "hakus", "halal", "haled", "haler", "hales", "halfa", "halfs", "halid", "hallo", "halls", "halma", "halms", "halon", "halos", "halse", "halts", "halva", "halwa", "hamal", "hamba", "hamed", "hames", "hammy", "hamza", "hanap", "hance", "hanch", "hands", "hangi", "hangs", "hanks", "hanky", "hansa", "hanse", "hants", "haole", "haoma", "hapax", "haply", "happi", "hapus", "haram", "hards", "hared", "hares", "harim", "harks", "harls", "harms", "harns", "haros", "harps", "harts", "hashy", "hasks", "hasps", "hasta", "hated", "hates", "hatha", "hauds", "haufs", "haugh", "hauld", "haulm", "hauls", "hault", "hauns", "hause", "haver", "haves", "hawed", "hawks", "hawms", "hawse", "hayed", "hayer", "hayey", "hayle", "hazan", "hazed", "hazer", "hazes", "heads", "heald", "heals", "heame", "heaps", "heapy", "heare", "hears", "heast", "heats", "heben", "hebes", "hecht", "hecks", "heder", "hedgy", "heeds", "heedy", "heels", "heeze", "hefte", "hefts", "heids", "heigh", "heils", "heirs", "hejab", "hejra", "heled", "heles", "helio", "hells", "helms", "helos", "helot", "helps", "helve", "hemal", "hemes", "hemic", "hemin", "hemps", "hempy", "hench", "hends", "henge", "henna", "henny", "henry", "hents", "hepar", "herbs", "herby", "herds", "heres", "herls", "herma", "herms", "herns", "heros", "herry", "herse", "hertz", "herye", "hesps", "hests", "hetes", "heths", "heuch", "heugh", "hevea", "hewed", "hewer", "hewgh", "hexad", "hexed", "hexer", "hexes", "hexyl", "heyed", "hiant", "hicks", "hided", "hider", "hides", "hiems", "highs", "hight", "hijab", "hijra", "hiked", "hiker", "hikes", "hikoi", "hilar", "hilch", "hillo", "hills", "hilts", "hilum", "hilus", "himbo", "hinau", "hinds", "hings", "hinky", "hinny", "hints", "hiois", "hiply", "hired", "hiree", "hirer", "hires", "hissy", "hists", "hithe", "hived", "hiver", "hives", "hizen", "hoaed", "hoagy", "hoars", "hoary", "hoast", "hobos", "hocks", "hocus", "hodad", "hodja", "hoers", "hogan", "hogen", "hoggs", "hoghs", "hohed", "hoick", "hoied", "hoiks", "hoing", "hoise", "hokas", "hoked", "hokes", "hokey", "hokis", "hokku", "hokum", "holds", "holed", "holes", "holey", "holks", "holla", "hollo", "holme", "holms", "holon", "holos", "holts", "homas", "homed", "homes", "homey", "homie", "homme", "homos", "honan", "honda", "honds", "honed", "honer", "hones", "hongi", "hongs", "honks", "honky", "hooch", "hoods", "hoody", "hooey", "hoofs", "hooka", "hooks", "hooky", "hooly", "hoons", "hoops", "hoord", "hoors", "hoosh", "hoots", "hooty", "hoove", "hopak", "hoped", "hoper", "hopes", "hoppy", "horah", "horal", "horas", "horis", "horks", "horme", "horns", "horst", "horsy", "hosed", "hosel", "hosen", "hoser", "hoses", "hosey", "hosta", "hosts", "hotch", "hoten", "hotty", "houff", "houfs", "hough", "houri", "hours", "houts", "hovea", "hoved", "hoven", "hoves", "howbe", "howes", "howff", "howfs", "howks", "howls", "howre", "howso", "hoxed", "hoxes", "hoyas", "hoyed", "hoyle", "hubby", "hucks", "hudna", "hudud", "huers", "huffs", "huffy", "huger", "huggy", "huhus", "huias", "hulas", "hules", "hulks", "hulky", "hullo", "hulls", "hully", "humas", "humfs", "humic", "humps", "humpy", "hunks", "hunts", "hurds", "hurls", "hurly", "hurra", "hurst", "hurts", "hushy", "husks", "husos", "hutia", "huzza", "huzzy", "hwyls", "hydra", "hyens", "hygge", "hying", "hykes", "hylas", "hyleg", "hyles", "hylic", "hymns", "hynde", "hyoid", "hyped", "hypes", "hypha", "hyphy", "hypos", "hyrax", "hyson", "hythe", "iambi", "iambs", "ibrik", "icers", "iched", "iches", "ichor", "icier", "icker", "ickle", "icons", "ictal", "ictic", "ictus", "idant", "ideas", "idees", "ident", "idled", "idles", "idola", "idols", "idyls", "iftar", "igapo", "igged", "iglus", "ihram", "ikans", "ikats", "ikons", "ileac", "ileal", "ileum", "ileus", "iliad", "ilial", "ilium", "iller", "illth", "imago", "imams", "imari", "imaum", "imbar", "imbed", "imide", "imido", "imids", "imine", "imino", "immew", "immit", "immix", "imped", "impis", "impot", "impro", "imshi", "imshy", "inapt", "inarm", "inbye", "incel", "incle", "incog", "incus", "incut", "indew", "india", "indie", "indol", "indow", "indri", "indue", "inerm", "infix", "infos", "infra", "ingan", "ingle", "inion", "inked", "inker", "inkle", "inned", "innit", "inorb", "inrun", "inset", "inspo", "intel", "intil", "intis", "intra", "inula", "inure", "inurn", "inust", "invar", "inwit", "iodic", "iodid", "iodin", "iotas", "ippon", "irade", "irids", "iring", "irked", "iroko", "irone", "irons", "isbas", "ishes", "isled", "isles", "isnae", "issei", "istle", "items", "ither", "ivied", "ivies", "ixias", "ixnay", "ixora", "ixtle", "izard", "izars", "izzat", "jaaps", "jabot", "jacal", "jacks", "jacky", "jaded", "jades", "jafas", "jaffa", "jagas", "jager", "jaggs", "jaggy", "jagir", "jagra", "jails", "jaker", "jakes", "jakey", "jalap", "jalop", "jambe", "jambo", "jambs", "jambu", "james", "jammy", "jamon", "janes", "janns", "janny", "janty", "japan", "japed", "japer", "japes", "jarks", "jarls", "jarps", "jarta", "jarul", "jasey", "jaspe", "jasps", "jatos", "jauks", "jaups", "javas", "javel", "jawan", "jawed", "jaxie", "jeans", "jeats", "jebel", "jedis", "jeels", "jeely", "jeeps", "jeers", "jeeze", "jefes", "jeffs", "jehad", "jehus", "jelab", "jello", "jells", "jembe", "jemmy", "jenny", "jeons", "jerid", "jerks", "jerry", "jesse", "jests", "jesus", "jetes", "jeton", "jeune", "jewed", "jewie", "jhala", "jiaos", "jibba", "jibbs", "jibed", "jiber", "jibes", "jiffs", "jiggy", "jigot", "jihad", "jills", "jilts", "jimmy", "jimpy", "jingo", "jinks", "jinne", "jinni", "jinns", "jirds", "jirga", "jirre", "jisms", "jived", "jiver", "jives", "jivey", "jnana", "jobed", "jobes", "jocko", "jocks", "jocky", "jocos", "jodel", "joeys", "johns", "joins", "joked", "jokes", "jokey", "jokol", "joled", "joles", "jolls", "jolts", "jolty", "jomon", "jomos", "jones", "jongs", "jonty", "jooks", "joram", "jorum", "jotas", "jotty", "jotun", "joual", "jougs", "jouks", "joule", "jours", "jowar", "jowed", "jowls", "jowly", "joyed", "jubas", "jubes", "jucos", "judas", "judgy", "judos", "jugal", "jugum", "jujus", "juked", "jukes", "jukus", "julep", "jumar", "jumby", "jumps", "junco", "junks", "junky", "jupes", "jupon", "jural", "jurat", "jurel", "jures", "justs", "jutes", "jutty", "juves", "juvie", "kaama", "kabab", "kabar", "kabob", "kacha", "kacks", "kadai", "kades", "kadis", "kafir", "kagos", "kagus", "kahal", "kaiak", "kaids", "kaies", "kaifs", "kaika", "kaiks", "kails", "kaims", "kaing", "kains", "kakas", "kakis", "kalam", "kales", "kalif", "kalis", "kalpa", "kamas", "kames", "kamik", "kamis", "kamme", "kanae", "kanas", "kandy", "kaneh", "kanes", "kanga", "kangs", "kanji", "kants", "kanzu", "kaons", "kapas", "kaphs", "kapok", "kapow", "kapus", "kaput", "karas", "karat", "karks", "karns", "karoo", "karos", "karri", "karst", "karsy", "karts", "karzy", "kasha", "kasme", "katal", "katas", "katis", "katti", "kaugh", "kauri", "kauru", "kaury", "kaval", "kavas", "kawas", "kawau", "kawed", "kayle", "kayos", "kazis", "kazoo", "kbars", "kebar", "kebob", "kecks", "kedge", "kedgy", "keech", "keefs", "keeks", "keels", "keema", "keeno", "keens", "keeps", "keets", "keeve", "kefir", "kehua", "keirs", "kelep", "kelim", "kells", "kelly", "kelps", "kelpy", "kelts", "kelty", "kembo", "kembs", "kemps", "kempt", "kempy", "kenaf", "kench", "kendo", "kenos", "kente", "kents", "kepis", "kerbs", "kerel", "kerfs", "kerky", "kerma", "kerne", "kerns", "keros", "kerry", "kerve", "kesar", "kests", "ketas", "ketch", "ketes", "ketol", "kevel", "kevil", "kexes", "keyed", "keyer", "khadi", "khafs", "khans", "khaph", "khats", "khaya", "khazi", "kheda", "kheth", "khets", "khoja", "khors", "khoum", "khuds", "kiaat", "kiack", "kiang", "kibbe", "kibbi", "kibei", "kibes", "kibla", "kicks", "kicky", "kiddo", "kiddy", "kidel", "kidge", "kiefs", "kiers", "kieve", "kievs", "kight", "kikes", "kikoi", "kiley", "kilim", "kills", "kilns", "kilos", "kilps", "kilts", "kilty", "kimbo", "kinas", "kinda", "kinds", "kindy", "kines", "kings", "kinin", "kinks", "kinos", "kiore", "kipes", "kippa", "kipps", "kirby", "kirks", "kirns", "kirri", "kisan", "kissy", "kists", "kited", "kiter", "kites", "kithe", "kiths", "kitul", "kivas", "kiwis", "klang", "klaps", "klett", "klick", "klieg", "kliks", "klong", "kloof", "kluge", "klutz", "knags", "knaps", "knarl", "knars", "knaur", "knawe", "knees", "knell", "knish", "knits", "knive", "knobs", "knops", "knosp", "knots", "knout", "knowe", "knows", "knubs", "knurl", "knurr", "knurs", "knuts", "koans", "koaps", "koban", "kobos", "koels", "koffs", "kofta", "kogal", "kohas", "kohen", "kohls", "koine", "kojis", "kokam", "kokas", "koker", "kokra", "kokum", "kolas", "kolos", "kombu", "konbu", "kondo", "konks", "kooks", "kooky", "koori", "kopek", "kophs", "kopje", "koppa", "korai", "koras", "korat", "kores", "korma", "koros", "korun", "korus", "koses", "kotch", "kotos", "kotow", "koura", "kraal", "krabs", "kraft", "krais", "krait", "krang", "krans", "kranz", "kraut", "krays", "kreep", "kreng", "krewe", "krona", "krone", "kroon", "krubi", "krunk", "ksars", "kubie", "kudos", "kudus", "kudzu", "kufis", "kugel", "kuias", "kukri", "kukus", "kulak", "kulan", "kulas", "kulfi", "kumis", "kumys", "kuris", "kurre", "kurta", "kurus", "kusso", "kutas", "kutch", "kutis", "kutus", "kuzus", "kvass", "kvell", "kwela", "kyack", "kyaks", "kyang", "kyars", "kyats", "kybos", "kydst", "kyles", "kylie", "kylin", "kylix", "kyloe", "kynde", "kynds", "kypes", "kyrie", "kytes", "kythe", "laari", "labda", "labia", "labis", "labra", "laced", "lacer", "laces", "lacet", "lacey", "lacks", "laddy", "laded", "lader", "lades", "laers", "laevo", "lagan", "lahal", "lahar", "laich", "laics", "laids", "laigh", "laika", "laiks", "laird", "lairs", "lairy", "laith", "laity", "laked", "laker", "lakes", "lakhs", "lakin", "laksa", "laldy", "lalls", "lamas", "lambs", "lamby", "lamed", "lamer", "lames", "lamia", "lammy", "lamps", "lanai", "lanas", "lanch", "lande", "lands", "lanes", "lanks", "lants", "lapin", "lapis", "lapje", "larch", "lards", "lardy", "laree", "lares", "largo", "laris", "larks", "larky", "larns", "larnt", "larum", "lased", "laser", "lases", "lassi", "lassu", "lassy", "lasts", "latah", "lated", "laten", "latex", "lathi", "laths", "lathy", "latke", "latus", "lauan", "lauch", "lauds", "laufs", "laund", "laura", "laval", "lavas", "laved", "laver", "laves", "lavra", "lavvy", "lawed", "lawer", "lawin", "lawks", "lawns", "lawny", "laxed", "laxer", "laxes", "laxly", "layed", "layin", "layup", "lazar", "lazed", "lazes", "lazos", "lazzi", "lazzo", "leads", "leady", "leafs", "leaks", "leams", "leans", "leany", "leaps", "leare", "lears", "leary", "leats", "leavy", "leaze", "leben", "leccy", "ledes", "ledgy", "ledum", "leear", "leeks", "leeps", "leers", "leese", "leets", "leeze", "lefte", "lefts", "leger", "leges", "legge", "leggo", "legit", "lehrs", "lehua", "leirs", "leish", "leman", "lemed", "lemel", "lemes", "lemma", "lemme", "lends", "lenes", "lengs", "lenis", "lenos", "lense", "lenti", "lento", "leone", "lepid", "lepra", "lepta", "lered", "leres", "lerps", "lesbo", "leses", "lests", "letch", "lethe", "letup", "leuch", "leuco", "leuds", "leugh", "levas", "levee", "leves", "levin", "levis", "lewis", "lexes", "lexis", "lezes", "lezza", "lezzy", "liana", "liane", "liang", "liard", "liars", "liart", "liber", "libra", "libri", "lichi", "licht", "licit", "licks", "lidar", "lidos", "liefs", "liens", "liers", "lieus", "lieve", "lifer", "lifes", "lifts", "ligan", "liger", "ligge", "ligne", "liked", "liker", "likes", "likin", "lills", "lilos", "lilts", "liman", "limas", "limax", "limba", "limbi", "limbs", "limby", "limed", "limen", "limes", "limey", "limma", "limns", "limos", "limpa", "limps", "linac", "linch", "linds", "lindy", "lined", "lines", "liney", "linga", "lings", "lingy", "linin", "links", "linky", "linns", "linny", "linos", "lints", "linty", "linum", "linux", "lions", "lipas", "lipes", "lipin", "lipos", "lippy", "liras", "lirks", "lirot", "lisks", "lisle", "lisps", "lists", "litai", "litas", "lited", "liter", "lites", "litho", "liths", "litre", "lived", "liven", "lives", "livor", "livre", "llano", "loach", "loads", "loafs", "loams", "loans", "loast", "loave", "lobar", "lobed", "lobes", "lobos", "lobus", "loche", "lochs", "locie", "locis", "locks", "locos", "locum", "loden", "lodes", "loess", "lofts", "logan", "loges", "loggy", "logia", "logie", "logoi", "logon", "logos", "lohan", "loids", "loins", "loipe", "loirs", "lokes", "lolls", "lolly", "lolog", "lomas", "lomed", "lomes", "loner", "longa", "longe", "longs", "looby", "looed", "looey", "loofa", "loofs", "looie", "looks", "looky", "looms", "loons", "loony", "loops", "loord", "loots", "loped", "loper", "lopes", "loppy", "loral", "loran", "lords", "lordy", "lorel", "lores", "loric", "loris", "losed", "losel", "losen", "loses", "lossy", "lotah", "lotas", "lotes", "lotic", "lotos", "lotsa", "lotta", "lotte", "lotto", "lotus", "loued", "lough", "louie", "louis", "louma", "lound", "louns", "loupe", "loups", "loure", "lours", "loury", "louts", "lovat", "loved", "loves", "lovey", "lovie", "lowan", "lowed", "lowes", "lownd", "lowne", "lowns", "lowps", "lowry", "lowse", "lowts", "loxed", "loxes", "lozen", "luach", "luaus", "lubed", "lubes", "lubra", "luces", "lucks", "lucre", "ludes", "ludic", "ludos", "luffa", "luffs", "luged", "luger", "luges", "lulls", "lulus", "lumas", "lumbi", "lumme", "lummy", "lumps", "lunas", "lunes", "lunet", "lungi", "lungs", "lunks", "lunts", "lupin", "lured", "lurer", "lures", "lurex", "lurgi", "lurgy", "lurks", "lurry", "lurve", "luser", "lushy", "lusks", "lusts", "lusus", "lutea", "luted", "luter", "lutes", "luvvy", "luxed", "luxer", "luxes", "lweis", "lyams", "lyard", "lyart", "lyase", "lycea", "lycee", "lycra", "lymes", "lynes", "lyres", "lysed", "lyses", "lysin", "lysis", "lysol", "lyssa", "lyted", "lytes", "lythe", "lytic", "lytta", "maaed", "maare", "maars", "mabes", "macas", "maced", "macer", "maces", "mache", "machi", "machs", "macks", "macle", "macon", "madge", "madid", "madre", "maerl", "mafic", "mages", "maggs", "magot", "magus", "mahoe", "mahua", "mahwa", "maids", "maiko", "maiks", "maile", "maill", "mails", "maims", "mains", "maire", "mairs", "maise", "maist", "makar", "makes", "makis", "makos", "malam", "malar", "malas", "malax", "males", "malic", "malik", "malis", "malls", "malms", "malmy", "malts", "malty", "malus", "malva", "malwa", "mamas", "mamba", "mamee", "mamey", "mamie", "manas", "manat", "mandi", "maneb", "maned", "maneh", "manes", "manet", "mangs", "manis", "manky", "manna", "manos", "manse", "manta", "manto", "manty", "manul", "manus", "mapau", "maqui", "marae", "marah", "maras", "marcs", "mardy", "mares", "marge", "margs", "maria", "marid", "marka", "marks", "marle", "marls", "marly", "marms", "maron", "maror", "marra", "marri", "marse", "marts", "marvy", "masas", "mased", "maser", "mases", "mashy", "masks", "massa", "massy", "masts", "masty", "masus", "matai", "mated", "mater", "mates", "maths", "matin", "matlo", "matte", "matts", "matza", "matzo", "mauby", "mauds", "mauls", "maund", "mauri", "mausy", "mauts", "mauzy", "maven", "mavie", "mavin", "mavis", "mawed", "mawks", "mawky", "mawns", "mawrs", "maxed", "maxes", "maxis", "mayan", "mayas", "mayed", "mayos", "mayst", "mazed", "mazer", "mazes", "mazey", "mazut", "mbira", "meads", "meals", "meane", "means", "meany", "meare", "mease", "meath", "meats", "mebos", "mechs", "mecks", "medii", "medle", "meeds", "meers", "meets", "meffs", "meins", "meint", "meiny", "meith", "mekka", "melas", "melba", "melds", "melic", "melik", "mells", "melts", "melty", "memes", "memos", "menad", "mends", "mened", "menes", "menge", "mengs", "mensa", "mense", "mensh", "menta", "mento", "menus", "meous", "meows", "merch", "mercs", "merde", "mered", "merel", "merer", "meres", "meril", "meris", "merks", "merle", "merls", "merse", "mesal", "mesas", "mesel", "meses", "meshy", "mesic", "mesne", "meson", "messy", "mesto", "meted", "metes", "metho", "meths", "metic", "metif", "metis", "metol", "metre", "meuse", "meved", "meves", "mewed", "mewls", "meynt", "mezes", "mezze", "mezzo", "mhorr", "miaou", "miaow", "miasm", "miaul", "micas", "miche", "micht", "micks", "micky", "micos", "micra", "middy", "midgy", "midis", "miens", "mieve", "miffs", "miffy", "mifty", "miggs", "mihas", "mihis", "miked", "mikes", "mikra", "mikva", "milch", "milds", "miler", "miles", "milfs", "milia", "milko", "milks", "mille", "mills", "milor", "milos", "milpa", "milts", "milty", "miltz", "mimed", "mimeo", "mimer", "mimes", "mimsy", "minae", "minar", "minas", "mincy", "minds", "mined", "mines", "minge", "mings", "mingy", "minis", "minke", "minks", "minny", "minos", "mints", "mired", "mires", "mirex", "mirid", "mirin", "mirks", "mirky", "mirly", "miros", "mirvs", "mirza", "misch", "misdo", "mises", "misgo", "misos", "missa", "mists", "misty", "mitch", "miter", "mites", "mitis", "mitre", "mitts", "mixed", "mixen", "mixer", "mixes", "mixte", "mixup", "mizen", "mizzy", "mneme", "moans", "moats", "mobby", "mobes", "mobey", "mobie", "moble", "mochi", "mochs", "mochy", "mocks", "moder", "modes", "modge", "modii", "modus", "moers", "mofos", "moggy", "mohel", "mohos", "mohrs", "mohua", "mohur", "moile", "moils", "moira", "moire", "moits", "mojos", "mokes", "mokis", "mokos", "molal", "molas", "molds", "moled", "moles", "molla", "molls", "molly", "molto", "molts", "molys", "momes", "momma", "mommy", "momus", "monad", "monal", "monas", "monde", "mondo", "moner", "mongo", "mongs", "monic", "monie", "monks", "monos", "monte", "monty", "moobs", "mooch", "moods", "mooed", "mooks", "moola", "mooli", "mools", "mooly", "moong", "moons", "moony", "moops", "moors", "moory", "moots", "moove", "moped", "moper", "mopes", "mopey", "moppy", "mopsy", "mopus", "morae", "moras", "morat", "moray", "morel", "mores", "moria", "morne", "morns", "morra", "morro", "morse", "morts", "mosed", "moses", "mosey", "mosks", "mosso", "moste", "mosts", "moted", "moten", "motes", "motet", "motey", "moths", "mothy", "motis", "motte", "motts", "motty", "motus", "motza", "mouch", "moues", "mould", "mouls", "moups", "moust", "mousy", "moved", "moves", "mowas", "mowed", "mowra", "moxas", "moxie", "moyas", "moyle", "moyls", "mozed", "mozes", "mozos", "mpret", "mucho", "mucic", "mucid", "mucin", "mucks", "mucor", "mucro", "mudge", "mudir", "mudra", "muffs", "mufti", "mugga", "muggs", "muggy", "muhly", "muids", "muils", "muirs", "muist", "mujik", "mulct", "muled", "mules", "muley", "mulga", "mulie", "mulla", "mulls", "mulse", "mulsh", "mumms", "mumps", "mumsy", "mumus", "munga", "munge", "mungo", "mungs", "munis", "munts", "muntu", "muons", "muras", "mured", "mures", "murex", "murid", "murks", "murls", "murly", "murra", "murre", "murri", "murrs", "murry", "murti", "murva", "musar", "musca", "mused", "muser", "muses", "muset", "musha", "musit", "musks", "musos", "musse", "mussy", "musth", "musts", "mutch", "muted", "muter", "mutes", "mutha", "mutis", "muton", "mutts", "muxed", "muxes", "muzak", "muzzy", "mvule", "myall", "mylar", "mynah", "mynas", "myoid", "myoma", "myope", "myops", "myopy", "mysid", "mythi", "myths", "mythy", "myxos", "mzees", "naams", "naans", "nabes", "nabis", "nabks", "nabla", "nabob", "nache", "nacho", "nacre", "nadas", "naeve", "naevi", "naffs", "nagas", "naggy", "nagor", "nahal", "naiad", "naifs", "naiks", "nails", "naira", "nairu", "naked", "naker", "nakfa", "nalas", "naled", "nalla", "named", "namer", "names", "namma", "namus", "nanas", "nance", "nancy", "nandu", "nanna", "nanos", "nanua", "napas", "naped", "napes", "napoo", "nappa", "nappe", "nappy", "naras", "narco", "narcs", "nards", "nares", "naric", "naris", "narks", "narky", "narre", "nashi", "natch", "nates", "natis", "natty", "nauch", "naunt", "navar", "naves", "navew", "navvy", "nawab", "nazes", "nazir", "nazis", "nduja", "neafe", "neals", "neaps", "nears", "neath", "neats", "nebek", "nebel", "necks", "neddy", "needs", "neeld", "neele", "neemb", "neems", "neeps", "neese", "neeze", "negro", "negus", "neifs", "neist", "neive", "nelis", "nelly", "nemas", "nemns", "nempt", "nenes", "neons", "neper", "nepit", "neral", "nerds", "nerka", "nerks", "nerol", "nerts", "nertz", "nervy", "nests", "netes", "netop", "netts", "netty", "neuks", "neume", "neums", "nevel", "neves", "nevus", "newbs", "newed", "newel", "newie", "newsy", "newts", "nexts", "nexus", "ngaio", "ngana", "ngati", "ngoma", "ngwee", "nicad", "nicht", "nicks", "nicol", "nidal", "nided", "nides", "nidor", "nidus", "niefs", "nieve", "nifes", "niffs", "niffy", "nifty", "niger", "nighs", "nihil", "nikab", "nikah", "nikau", "nills", "nimbi", "nimbs", "nimps", "niner", "nines", "ninon", "nipas", "nippy", "niqab", "nirls", "nirly", "nisei", "nisse", "nisus", "niter", "nites", "nitid", "niton", "nitre", "nitro", "nitry", "nitty", "nival", "nixed", "nixer", "nixes", "nixie", "nizam", "nkosi", "noahs", "nobby", "nocks", "nodal", "noddy", "nodes", "nodus", "noels", "noggs", "nohow", "noils", "noily", "noint", "noirs", "noles", "nolls", "nolos", "nomas", "nomen", "nomes", "nomic", "nomoi", "nomos", "nonas", "nonce", "nones", "nonet", "nongs", "nonis", "nonny", "nonyl", "noobs", "nooit", "nooks", "nooky", "noons", "noops", "nopal", "noria", "noris", "norks", "norma", "norms", "nosed", "noser", "noses", "notal", "noted", "noter", "notes", "notum", "nould", "noule", "nouls", "nouns", "nouny", "noups", "novae", "novas", "novum", "noway", "nowed", "nowls", "nowts", "nowty", "noxal", "noxes", "noyau", "noyed", "noyes", "nubby", "nubia", "nucha", "nuddy", "nuder", "nudes", "nudie", "nudzh", "nuffs", "nugae", "nuked", "nukes", "nulla", "nulls", "numbs", "numen", "nummy", "nunny", "nurds", "nurdy", "nurls", "nurrs", "nutso", "nutsy", "nyaff", "nyala", "nying", "nyssa", "oaked", "oaker", "oakum", "oared", "oases", "oasis", "oasts", "oaten", "oater", "oaths", "oaves", "obang", "obeah", "obeli", "obeys", "obias", "obied", "obiit", "obits", "objet", "oboes", "obole", "oboli", "obols", "occam", "ocher", "oches", "ochre", "ochry", "ocker", "ocrea", "octad", "octan", "octas", "octyl", "oculi", "odahs", "odals", "odeon", "odeum", "odism", "odist", "odium", "odors", "odour", "odyle", "odyls", "ofays", "offed", "offie", "oflag", "ofter", "ogams", "ogeed", "ogees", "oggin", "ogham", "ogive", "ogled", "ogler", "ogles", "ogmic", "ogres", "ohias", "ohing", "ohmic", "ohone", "oidia", "oiled", "oiler", "oinks", "oints", "ojime", "okapi", "okays", "okehs", "okras", "oktas", "oldie", "oleic", "olein", "olent", "oleos", "oleum", "olios", "ollas", "ollav", "oller", "ollie", "ology", "olpae", "olpes", "omasa", "omber", "ombus", "omens", "omers", "omits", "omlah", "omovs", "omrah", "oncer", "onces", "oncet", "oncus", "onely", "oners", "onery", "onium", "onkus", "onlay", "onned", "ontic", "oobit", "oohed", "oomph", "oonts", "ooped", "oorie", "ooses", "ootid", "oozed", "oozes", "opahs", "opals", "opens", "opepe", "oping", "oppos", "opsin", "opted", "opter", "orach", "oracy", "orals", "orang", "orant", "orate", "orbed", "orcas", "orcin", "ordos", "oread", "orfes", "orgia", "orgic", "orgue", "oribi", "oriel", "orixa", "orles", "orlon", "orlop", "ormer", "ornis", "orpin", "orris", "ortho", "orval", "orzos", "oscar", "oshac", "osier", "osmic", "osmol", "ossia", "ostia", "otaku", "otary", "ottar", "ottos", "oubit", "oucht", "ouens", "ouija", "oulks", "oumas", "oundy", "oupas", "ouped", "ouphe", "ouphs", "ourie", "ousel", "ousts", "outby", "outed", "outre", "outro", "outta", "ouzel", "ouzos", "ovals", "ovels", "ovens", "overs", "ovist", "ovoli", "ovolo", "ovule", "owche", "owies", "owled", "owler", "owlet", "owned", "owres", "owrie", "owsen", "oxbow", "oxers", "oxeye", "oxids", "oxies", "oxime", "oxims", "oxlip", "oxter", "oyers", "ozeki", "ozzie", "paals", "paans", "pacas", "paced", "pacer", "paces", "pacey", "pacha", "packs", "pacos", "pacta", "pacts", "padis", "padle", "padma", "padre", "padri", "paean", "paedo", "paeon", "paged", "pager", "pages", "pagle", "pagod", "pagri", "paiks", "pails", "pains", "paire", "pairs", "paisa", "paise", "pakka", "palas", "palay", "palea", "paled", "pales", "palet", "palis", "palki", "palla", "palls", "pally", "palms", "palmy", "palpi", "palps", "palsa", "pampa", "panax", "pance", "panda", "pands", "pandy", "paned", "panes", "panga", "pangs", "panim", "panko", "panne", "panni", "panto", "pants", "panty", "paoli", "paolo", "papas", "papaw", "papes", "pappi", "pappy", "parae", "paras", "parch", "pardi", "pards", "pardy", "pared", "paren", "pareo", "pares", "pareu", "parev", "parge", "pargo", "paris", "parki", "parks", "parky", "parle", "parly", "parma", "parol", "parps", "parra", "parrs", "parti", "parts", "parve", "parvo", "paseo", "pases", "pasha", "pashm", "paska", "paspy", "passe", "pasts", "pated", "paten", "pater", "pates", "paths", "patin", "patka", "patly", "patte", "patus", "pauas", "pauls", "pavan", "paved", "paven", "paver", "paves", "pavid", "pavin", "pavis", "pawas", "pawaw", "pawed", "pawer", "pawks", "pawky", "pawls", "pawns", "paxes", "payed", "payor", "paysd", "peage", "peags", "peaks", "peaky", "peals", "peans", "peare", "pears", "peart", "pease", "peats", "peaty", "peavy", "peaze", "pebas", "pechs", "pecke", "pecks", "pecky", "pedes", "pedis", "pedro", "peece", "peeks", "peels", "peens", "peeoy", "peepe", "peeps", "peers", "peery", "peeve", "peggy", "peghs", "peins", "peise", "peize", "pekan", "pekes", "pekin", "pekoe", "pelas", "pelau", "peles", "pelfs", "pells", "pelma", "pelon", "pelta", "pelts", "pends", "pendu", "pened", "penes", "pengo", "penie", "penis", "penks", "penna", "penni", "pents", "peons", "peony", "pepla", "pepos", "peppy", "pepsi", "perai", "perce", "percs", "perdu", "perdy", "perea", "peres", "peris", "perks", "perms", "perns", "perog", "perps", "perry", "perse", "perst", "perts", "perve", "pervo", "pervs", "pervy", "pesos", "pests", "pesty", "petar", "peter", "petit", "petre", "petri", "petti", "petto", "pewee", "pewit", "peyse", "phage", "phang", "phare", "pharm", "pheer", "phene", "pheon", "phese", "phial", "phish", "phizz", "phlox", "phoca", "phono", "phons", "phots", "phpht", "phuts", "phyla", "phyle", "piani", "pians", "pibal", "pical", "picas", "piccy", "picks", "picot", "picra", "picul", "piend", "piers", "piert", "pieta", "piets", "piezo", "pight", "pigmy", "piing", "pikas", "pikau", "piked", "piker", "pikes", "pikey", "pikis", "pikul", "pilae", "pilaf", "pilao", "pilar", "pilau", "pilaw", "pilch", "pilea", "piled", "pilei", "piler", "piles", "pilis", "pills", "pilow", "pilum", "pilus", "pimas", "pimps", "pinas", "pined", "pines", "pingo", "pings", "pinko", "pinks", "pinna", "pinny", "pinon", "pinot", "pinta", "pints", "pinup", "pions", "piony", "pious", "pioye", "pioys", "pipal", "pipas", "piped", "pipes", "pipet", "pipis", "pipit", "pippy", "pipul", "pirai", "pirls", "pirns", "pirog", "pisco", "pises", "pisky", "pisos", "pissy", "piste", "pitas", "piths", "piton", "pitot", "pitta", "piums", "pixes", "pized", "pizes", "plaas", "plack", "plage", "plans", "plaps", "plash", "plasm", "plast", "plats", "platt", "platy", "playa", "plays", "pleas", "plebe", "plebs", "plena", "pleon", "plesh", "plews", "plica", "plies", "plims", "pling", "plink", "ploat", "plods", "plong", "plonk", "plook", "plops", "plots", "plotz", "plouk", "plows", "ploye", "ploys", "plues", "pluff", "plugs", "plums", "plumy", "pluot", "pluto", "plyer", "poach", "poaka", "poake", "poboy", "pocks", "pocky", "podal", "poddy", "podex", "podge", "podgy", "podia", "poems", "poeps", "poets", "pogey", "pogge", "pogos", "pohed", "poilu", "poind", "pokal", "poked", "pokes", "pokey", "pokie", "poled", "poler", "poles", "poley", "polio", "polis", "polje", "polks", "polls", "polly", "polos", "polts", "polys", "pombe", "pomes", "pommy", "pomos", "pomps", "ponce", "poncy", "ponds", "pones", "poney", "ponga", "pongo", "pongs", "pongy", "ponks", "ponts", "ponty", "ponzu", "poods", "pooed", "poofs", "poofy", "poohs", "pooja", "pooka", "pooks", "pools", "poons", "poops", "poopy", "poori", "poort", "poots", "poove", "poovy", "popes", "poppa", "popsy", "porae", "poral", "pored", "porer", "pores", "porge", "porgy", "porin", "porks", "porky", "porno", "porns", "porny", "porta", "ports", "porty", "posed", "poses", "posey", "posho", "posts", "potae", "potch", "poted", "potes", "potin", "potoo", "potsy", "potto", "potts", "potty", "pouff", "poufs", "pouke", "pouks", "poule", "poulp", "poult", "poupe", "poupt", "pours", "pouts", "powan", "powin", "pownd", "powns", "powny", "powre", "poxed", "poxes", "poynt", "poyou", "poyse", "pozzy", "praam", "prads", "prahu", "prams", "prana", "prang", "praos", "prase", "prate", "prats", "pratt", "praty", "praus", "prays", "predy", "preed", "prees", "preif", "prems", "premy", "prent", "preon", "preop", "preps", "presa", "prese", "prest", "preve", "prexy", "preys", "prial", "pricy", "prief", "prier", "pries", "prigs", "prill", "prima", "primi", "primp", "prims", "primy", "prink", "prion", "prise", "priss", "proas", "probs", "prods", "proem", "profs", "progs", "proin", "proke", "prole", "proll", "promo", "proms", "pronk", "props", "prore", "proso", "pross", "prost", "prosy", "proto", "proul", "prows", "proyn", "prunt", "pruta", "pryer", "pryse", "pseud", "pshaw", "psion", "psoae", "psoai", "psoas", "psora", "psych", "psyop", "pubco", "pubes", "pubis", "pucan", "pucer", "puces", "pucka", "pucks", "puddy", "pudge", "pudic", "pudor", "pudsy", "pudus", "puers", "puffa", "puffs", "puggy", "pugil", "puhas", "pujah", "pujas", "pukas", "puked", "puker", "pukes", "pukey", "pukka", "pukus", "pulao", "pulas", "puled", "puler", "pules", "pulik", "pulis", "pulka", "pulks", "pulli", "pulls", "pully", "pulmo", "pulps", "pulus", "pumas", "pumie", "pumps", "punas", "punce", "punga", "pungs", "punji", "punka", "punks", "punky", "punny", "punto", "punts", "punty", "pupae", "pupas", "pupus", "purda", "pured", "pures", "purin", "puris", "purls", "purpy", "purrs", "pursy", "purty", "puses", "pusle", "pussy", "putid", "puton", "putti", "putto", "putts", "puzel", "pwned", "pyats", "pyets", "pygal", "pyins", "pylon", "pyned", "pynes", "pyoid", "pyots", "pyral", "pyran", "pyres", "pyrex", "pyric", "pyros", "pyxed", "pyxes", "pyxie", "pyxis", "pzazz", "qadis", "qaids", "qajaq", "qanat", "qapik", "qibla", "qophs", "qorma", "quads", "quaff", "quags", "quair", "quais", "quaky", "quale", "quant", "quare", "quass", "quate", "quats", "quayd", "quays", "qubit", "quean", "queme", "quena", "quern", "queyn", "queys", "quich", "quids", "quiff", "quims", "quina", "quine", "quino", "quins", "quint", "quipo", "quips", "quipu", "quire", "quirt", "quist", "quits", "quoad", "quods", "quoif", "quoin", "quoit", "quoll", "quonk", "quops", "qursh", "quyte", "rabat", "rabic", "rabis", "raced", "races", "rache", "racks", "racon", "radge", "radix", "radon", "raffs", "rafts", "ragas", "ragde", "raged", "ragee", "rager", "rages", "ragga", "raggs", "raggy", "ragis", "ragus", "rahed", "rahui", "raias", "raids", "raiks", "raile", "rails", "raine", "rains", "raird", "raita", "raits", "rajas", "rajes", "raked", "rakee", "raker", "rakes", "rakia", "rakis", "rakus", "rales", "ramal", "ramee", "ramet", "ramie", "ramin", "ramis", "rammy", "ramps", "ramus", "ranas", "rance", "rands", "ranee", "ranga", "rangi", "rangs", "rangy", "ranid", "ranis", "ranke", "ranks", "rants", "raped", "raper", "rapes", "raphe", "rappe", "rared", "raree", "rares", "rarks", "rased", "raser", "rases", "rasps", "rasse", "rasta", "ratal", "ratan", "ratas", "ratch", "rated", "ratel", "rater", "rates", "ratha", "rathe", "raths", "ratoo", "ratos", "ratus", "rauns", "raupo", "raved", "ravel", "raver", "raves", "ravey", "ravin", "rawer", "rawin", "rawly", "rawns", "raxed", "raxes", "rayah", "rayas", "rayed", "rayle", "rayne", "razed", "razee", "razer", "razes", "razoo", "readd", "reads", "reais", "reaks", "realo", "reals", "reame", "reams", "reamy", "reans", "reaps", "rears", "reast", "reata", "reate", "reave", "rebbe", "rebec", "rebid", "rebit", "rebop", "rebuy", "recal", "recce", "recco", "reccy", "recit", "recks", "recon", "recta", "recti", "recto", "redan", "redds", "reddy", "reded", "redes", "redia", "redid", "redip", "redly", "redon", "redos", "redox", "redry", "redub", "redux", "redye", "reech", "reede", "reeds", "reefs", "reefy", "reeks", "reeky", "reels", "reens", "reest", "reeve", "refed", "refel", "reffo", "refis", "refix", "refly", "refry", "regar", "reges", "reggo", "regie", "regma", "regna", "regos", "regur", "rehem", "reifs", "reify", "reiki", "reiks", "reink", "reins", "reird", "reist", "reive", "rejig", "rejon", "reked", "rekes", "rekey", "relet", "relie", "relit", "rello", "reman", "remap", "remen", "remet", "remex", "remix", "renay", "rends", "reney", "renga", "renig", "renin", "renne", "renos", "rente", "rents", "reoil", "reorg", "repeg", "repin", "repla", "repos", "repot", "repps", "repro", "reran", "rerig", "resat", "resaw", "resay", "resee", "reses", "resew", "resid", "resit", "resod", "resow", "resto", "rests", "resty", "resus", "retag", "retax", "retem", "retia", "retie", "retox", "revet", "revie", "rewan", "rewax", "rewed", "rewet", "rewin", "rewon", "rewth", "rexes", "rezes", "rheas", "rheme", "rheum", "rhies", "rhime", "rhine", "rhody", "rhomb", "rhone", "rhumb", "rhyne", "rhyta", "riads", "rials", "riant", "riata", "ribas", "ribby", "ribes", "riced", "ricer", "rices", "ricey", "richt", "ricin", "ricks", "rides", "ridgy", "ridic", "riels", "riems", "rieve", "rifer", "riffs", "rifte", "rifts", "rifty", "riggs", "rigol", "riled", "riles", "riley", "rille", "rills", "rimae", "rimed", "rimer", "rimes", "rimus", "rinds", "rindy", "rines", "rings", "rinks", "rioja", "riots", "riped", "ripes", "ripps", "rises", "rishi", "risks", "risps", "risus", "rites", "ritts", "ritzy", "rivas", "rived", "rivel", "riven", "rives", "riyal", "rizas", "roads", "roams", "roans", "roars", "roary", "roate", "robed", "robes", "roble", "rocks", "roded", "rodes", "roguy", "rohes", "roids", "roils", "roily", "roins", "roist", "rojak", "rojis", "roked", "roker", "rokes", "rolag", "roles", "rolfs", "rolls", "romal", "roman", "romeo", "romps", "ronde", "rondo", "roneo", "rones", "ronin", "ronne", "ronte", "ronts", "roods", "roofs", "roofy", "rooks", "rooky", "rooms", "roons", "roops", "roopy", "roosa", "roose", "roots", "rooty", "roped", "roper", "ropes", "ropey", "roque", "roral", "rores", "roric", "rorid", "rorie", "rorts", "rorty", "rosed", "roses", "roset", "roshi", "rosin", "rosit", "rosti", "rosts", "rotal", "rotan", "rotas", "rotch", "roted", "rotes", "rotis", "rotls", "roton", "rotos", "rotte", "rouen", "roues", "roule", "rouls", "roums", "roups", "roupy", "roust", "routh", "routs", "roved", "roven", "roves", "rowan", "rowed", "rowel", "rowen", "rowie", "rowme", "rownd", "rowth", "rowts", "royne", "royst", "rozet", "rozit", "ruana", "rubai", "rubby", "rubel", "rubes", "rubin", "ruble", "rubli", "rubus", "ruche", "rucks", "rudas", "rudds", "rudes", "rudie", "rudis", "rueda", "ruers", "ruffe", "ruffs", "rugae", "rugal", "ruggy", "ruing", "ruins", "rukhs", "ruled", "rules", "rumal", "rumbo", "rumen", "rumes", "rumly", "rummy", "rumpo", "rumps", "rumpy", "runch", "runds", "runed", "runes", "rungs", "runic", "runny", "runts", "runty", "rupia", "rurps", "rurus", "rusas", "ruses", "rushy", "rusks", "rusma", "russe", "rusts", "ruths", "rutin", "rutty", "ryals", "rybat", "ryked", "rykes", "rymme", "rynds", "ryots", "ryper", "saags", "sabal", "sabed", "saber", "sabes", "sabha", "sabin", "sabir", "sable", "sabot", "sabra", "sabre", "sacks", "sacra", "saddo", "sades", "sadhe", "sadhu", "sadis", "sados", "sadza", "safed", "safes", "sagas", "sager", "sages", "saggy", "sagos", "sagum", "saheb", "sahib", "saice", "saick", "saics", "saids", "saiga", "sails", "saims", "saine", "sains", "sairs", "saist", "saith", "sajou", "sakai", "saker", "sakes", "sakia", "sakis", "sakti", "salal", "salat", "salep", "sales", "salet", "salic", "salix", "salle", "salmi", "salol", "salop", "salpa", "salps", "salse", "salto", "salts", "salue", "salut", "saman", "samas", "samba", "sambo", "samek", "samel", "samen", "sames", "samey", "samfu", "sammy", "sampi", "samps", "sands", "saned", "sanes", "sanga", "sangh", "sango", "sangs", "sanko", "sansa", "santo", "sants", "saola", "sapan", "sapid", "sapor", "saran", "sards", "sared", "saree", "sarge", "sargo", "sarin", "saris", "sarks", "sarky", "sarod", "saros", "sarus", "saser", "sasin", "sasse", "satai", "satay", "sated", "satem", "sates", "satis", "sauba", "sauch", "saugh", "sauls", "sault", "saunt", "saury", "sauts", "saved", "saver", "saves", "savey", "savin", "sawah", "sawed", "sawer", "saxes", "sayed", "sayer", "sayid", "sayne", "sayon", "sayst", "sazes", "scabs", "scads", "scaff", "scags", "scail", "scala", "scall", "scams", "scand", "scans", "scapa", "scape", "scapi", "scarp", "scars", "scart", "scath", "scats", "scatt", "scaud", "scaup", "scaur", "scaws", "sceat", "scena", "scend", "schav", "schmo", "schul", "schwa", "sclim", "scody", "scogs", "scoog", "scoot", "scopa", "scops", "scots", "scoug", "scoup", "scowp", "scows", "scrab", "scrae", "scrag", "scran", "scrat", "scraw", "scray", "scrim", "scrip", "scrob", "scrod", "scrog", "scrow", "scudi", "scudo", "scuds", "scuff", "scuft", "scugs", "sculk", "scull", "sculp", "sculs", "scums", "scups", "scurf", "scurs", "scuse", "scuta", "scute", "scuts", "scuzz", "scyes", "sdayn", "sdein", "seals", "seame", "seams", "seamy", "seans", "seare", "sears", "sease", "seats", "seaze", "sebum", "secco", "sechs", "sects", "seder", "sedes", "sedge", "sedgy", "sedum", "seeds", "seeks", "seeld", "seels", "seely", "seems", "seeps", "seepy", "seers", "sefer", "segar", "segni", "segno", "segol", "segos", "sehri", "seifs", "seils", "seine", "seirs", "seise", "seism", "seity", "seiza", "sekos", "sekts", "selah", "seles", "selfs", "sella", "selle", "sells", "selva", "semee", "semes", "semie", "semis", "senas", "sends", "senes", "sengi", "senna", "senor", "sensa", "sensi", "sente", "senti", "sents", "senvy", "senza", "sepad", "sepal", "sepic", "sepoy", "septa", "septs", "serac", "serai", "seral", "sered", "serer", "seres", "serfs", "serge", "seric", "serin", "serks", "seron", "serow", "serra", "serre", "serrs", "serry", "servo", "sesey", "sessa", "setae", "setal", "seton", "setts", "sewan", "sewar", "sewed", "sewel", "sewen", "sewin", "sexed", "sexer", "sexes", "sexto", "sexts", "seyen", "shads", "shags", "shahs", "shako", "shakt", "shalm", "shaly", "shama", "shams", "shand", "shans", "shaps", "sharn", "shash", "shaul", "shawm", "shawn", "shaws", "shaya", "shays", "shchi", "sheaf", "sheal", "sheas", "sheds", "sheel", "shend", "shent", "sheol", "sherd", "shere", "shero", "shets", "sheva", "shewn", "shews", "shiai", "shiel", "shier", "shies", "shill", "shily", "shims", "shins", "ships", "shirr", "shirs", "shish", "shiso", "shist", "shite", "shits", "shiur", "shiva", "shive", "shivs", "shlep", "shlub", "shmek", "shmoe", "shoat", "shoed", "shoer", "shoes", "shogi", "shogs", "shoji", "shojo", "shola", "shool", "shoon", "shoos", "shope", "shops", "shorl", "shote", "shots", "shott", "showd", "shows", "shoyu", "shred", "shris", "shrow", "shtik", "shtum", "shtup", "shule", "shuln", "shuls", "shuns", "shura", "shute", "shuts", "shwas", "shyer", "sials", "sibbs", "sibyl", "sices", "sicht", "sicko", "sicks", "sicky", "sidas", "sided", "sider", "sides", "sidha", "sidhe", "sidle", "sield", "siens", "sient", "sieth", "sieur", "sifts", "sighs", "sigil", "sigla", "signa", "signs", "sijos", "sikas", "siker", "sikes", "silds", "siled", "silen", "siler", "siles", "silex", "silks", "sills", "silos", "silts", "silty", "silva", "simar", "simas", "simba", "simis", "simps", "simul", "sinds", "sined", "sines", "sings", "sinhs", "sinks", "sinky", "sinus", "siped", "sipes", "sippy", "sired", "siree", "sires", "sirih", "siris", "siroc", "sirra", "sirup", "sisal", "sises", "sista", "sists", "sitar", "sited", "sites", "sithe", "sitka", "situp", "situs", "siver", "sixer", "sixes", "sixmo", "sixte", "sizar", "sized", "sizel", "sizer", "sizes", "skags", "skail", "skald", "skank", "skart", "skats", "skatt", "skaws", "skean", "skear", "skeds", "skeed", "skeef", "skeen", "skeer", "skees", "skeet", "skegg", "skegs", "skein", "skelf", "skell", "skelm", "skelp", "skene", "skens", "skeos", "skeps", "skers", "skets", "skews", "skids", "skied", "skies", "skiey", "skimo", "skims", "skink", "skins", "skint", "skios", "skips", "skirl", "skirr", "skite", "skits", "skive", "skivy", "sklim", "skoal", "skody", "skoff", "skogs", "skols", "skool", "skort", "skosh", "skran", "skrik", "skuas", "skugs", "skyed", "skyer", "skyey", "skyfs", "skyre", "skyrs", "skyte", "slabs", "slade", "slaes", "slags", "slaid", "slake", "slams", "slane", "slank", "slaps", "slart", "slats", "slaty", "slaws", "slays", "slebs", "sleds", "sleer", "slews", "sleys", "slier", "slily", "slims", "slipe", "slips", "slipt", "slish", "slits", "slive", "sloan", "slobs", "sloes", "slogs", "sloid", "slojd", "slomo", "sloom", "sloot", "slops", "slopy", "slorm", "slots", "slove", "slows", "sloyd", "slubb", "slubs", "slued", "slues", "sluff", "slugs", "sluit", "slums", "slurb", "slurs", "sluse", "sluts", "slyer", "slype", "smaak", "smaik", "smalm", "smalt", "smarm", "smaze", "smeek", "smees", "smeik", "smeke", "smerk", "smews", "smirr", "smirs", "smits", "smogs", "smoko", "smolt", "smoor", "smoot", "smore", "smorg", "smout", "smowt", "smugs", "smurs", "smush", "smuts", "snabs", "snafu", "snags", "snaps", "snarf", "snark", "snars", "snary", "snash", "snath", "snaws", "snead", "sneap", "snebs", "sneck", "sneds", "sneed", "snees", "snell", "snibs", "snick", "snies", "snift", "snigs", "snips", "snipy", "snirt", "snits", "snobs", "snods", "snoek", "snoep", "snogs", "snoke", "snood", "snook", "snool", "snoot", "snots", "snowk", "snows", "snubs", "snugs", "snush", "snyes", "soaks", "soaps", "soare", "soars", "soave", "sobas", "socas", "soces", "socko", "socks", "socle", "sodas", "soddy", "sodic", "sodom", "sofar", "sofas", "softa", "softs", "softy", "soger", "sohur", "soils", "soily", "sojas", "sojus", "sokah", "soken", "sokes", "sokol", "solah", "solan", "solas", "solde", "soldi", "soldo", "solds", "soled", "solei", "soler", "soles", "solon", "solos", "solum", "solus", "soman", "somas", "sonce", "sonde", "sones", "songs", "sonly", "sonne", "sonny", "sonse", "sonsy", "sooey", "sooks", "sooky", "soole", "sools", "sooms", "soops", "soote", "soots", "sophs", "sophy", "sopor", "soppy", "sopra", "soral", "soras", "sorbo", "sorbs", "sorda", "sordo", "sords", "sored", "soree", "sorel", "sorer", "sores", "sorex", "sorgo", "sorns", "sorra", "sorta", "sorts", "sorus", "soths", "sotol", "souce", "souct", "sough", "souks", "souls", "soums", "soups", "soupy", "sours", "souse", "souts", "sowar", "sowce", "sowed", "sowff", "sowfs", "sowle", "sowls", "sowms", "sownd", "sowne", "sowps", "sowse", "sowth", "soyas", "soyle", "soyuz", "sozin", "spacy", "spado", "spaed", "spaer", "spaes", "spags", "spahi", "spail", "spain", "spait", "spake", "spald", "spale", "spall", "spalt", "spams", "spane", "spang", "spans", "spard", "spars", "spart", "spate", "spats", "spaul", "spawl", "spaws", "spayd", "spays", "spaza", "spazz", "speal", "spean", "speat", "specs", "spect", "speel", "speer", "speil", "speir", "speks", "speld", "spelk", "speos", "spets", "speug", "spews", "spewy", "spial", "spica", "spick", "spics", "spide", "spier", "spies", "spiff", "spifs", "spiks", "spile", "spims", "spina", "spink", "spins", "spirt", "spiry", "spits", "spitz", "spivs", "splay", "splog", "spode", "spods", "spoom", "spoor", "spoot", "spork", "sposh", "spots", "sprad", "sprag", "sprat", "spred", "sprew", "sprit", "sprod", "sprog", "sprue", "sprug", "spuds", "spued", "spuer", "spues", "spugs", "spule", "spume", "spumy", "spurs", "sputa", "spyal", "spyre", "squab", "squaw", "squeg", "squid", "squit", "squiz", "stabs", "stade", "stags", "stagy", "staig", "stane", "stang", "staph", "staps", "starn", "starr", "stars", "stats", "staun", "staws", "stays", "stean", "stear", "stedd", "stede", "steds", "steek", "steem", "steen", "steil", "stela", "stele", "stell", "steme", "stems", "stend", "steno", "stens", "stent", "steps", "stept", "stere", "stets", "stews", "stewy", "steys", "stich", "stied", "sties", "stilb", "stile", "stime", "stims", "stimy", "stipa", "stipe", "stire", "stirk", "stirp", "stirs", "stive", "stivy", "stoae", "stoai", "stoas", "stoat", "stobs", "stoep", "stogy", "stoit", "stoln", "stoma", "stond", "stong", "stonk", "stonn", "stook", "stoor", "stope", "stops", "stopt", "stoss", "stots", "stott", "stoun", "stoup", "stour", "stown", "stowp", "stows", "strad", "strae", "strag", "strak", "strep", "strew", "stria", "strig", "strim", "strop", "strow", "stroy", "strum", "stubs", "stude", "studs", "stull", "stulm", "stumm", "stums", "stuns", "stupa", "stupe", "sture", "sturt", "styed", "styes", "styli", "stylo", "styme", "stymy", "styre", "styte", "subah", "subas", "subby", "suber", "subha", "succi", "sucks", "sucky", "sucre", "sudds", "sudor", "sudsy", "suede", "suent", "suers", "suete", "suets", "suety", "sugan", "sughs", "sugos", "suhur", "suids", "suint", "suits", "sujee", "sukhs", "sukuk", "sulci", "sulfa", "sulfo", "sulks", "sulph", "sulus", "sumis", "summa", "sumos", "sumph", "sumps", "sunis", "sunks", "sunna", "sunns", "sunup", "supes", "supra", "surah", "sural", "suras", "surat", "surds", "sured", "sures", "surfs", "surfy", "surgy", "surra", "sused", "suses", "susus", "sutor", "sutra", "sutta", "swabs", "swack", "swads", "swage", "swags", "swail", "swain", "swale", "swaly", "swamy", "swang", "swank", "swans", "swaps", "swapt", "sward", "sware", "swarf", "swart", "swats", "swayl", "sways", "sweal", "swede", "sweed", "sweel", "sweer", "swees", "sweir", "swelt", "swerf", "sweys", "swies", "swigs", "swile", "swims", "swink", "swipe", "swire", "swiss", "swith", "swits", "swive", "swizz", "swobs", "swole", "swoln", "swops", "swopt", "swots", "swoun", "sybbe", "sybil", "syboe", "sybow", "sycee", "syces", "sycon", "syens", "syker", "sykes", "sylis", "sylph", "sylva", "symar", "synch", "syncs", "synds", "syned", "synes", "synth", "syped", "sypes", "syphs", "syrah", "syren", "sysop", "sythe", "syver", "taals", "taata", "taber", "tabes", "tabid", "tabis", "tabla", "tabor", "tabun", "tabus", "tacan", "taces", "tacet", "tache", "tacho", "tachs", "tacks", "tacos", "tacts", "taels", "tafia", "taggy", "tagma", "tahas", "tahrs", "taiga", "taigs", "taiko", "tails", "tains", "taira", "taish", "taits", "tajes", "takas", "takes", "takhi", "takin", "takis", "takky", "talak", "talaq", "talar", "talas", "talcs", "talcy", "talea", "taler", "tales", "talks", "talky", "talls", "talma", "talpa", "taluk", "talus", "tamal", "tamed", "tames", "tamin", "tamis", "tammy", "tamps", "tanas", "tanga", "tangi", "tangs", "tanhs", "tanka", "tanks", "tanky", "tanna", "tansy", "tanti", "tanto", "tanty", "tapas", "taped", "tapen", "tapes", "tapet", "tapis", "tappa", "tapus", "taras", "tardo", "tared", "tares", "targa", "targe", "tarns", "taroc", "tarok", "taros", "tarps", "tarre", "tarry", "tarsi", "tarts", "tarty", "tasar", "tased", "taser", "tases", "tasks", "tassa", "tasse", "tasso", "tatar", "tater", "tates", "taths", "tatie", "tatou", "tatts", "tatus", "taube", "tauld", "tauon", "taupe", "tauts", "tavah", "tavas", "taver", "tawai", "tawas", "tawed", "tawer", "tawie", "tawse", "tawts", "taxed", "taxer", "taxes", "taxis", "taxol", "taxon", "taxor", "taxus", "tayra", "tazza", "tazze", "teade", "teads", "teaed", "teaks", "teals", "teams", "tears", "teats", "teaze", "techs", "techy", "tecta", "teels", "teems", "teend", "teene", "teens", "teeny", "teers", "teffs", "teggs", "tegua", "tegus", "tehrs", "teiid", "teils", "teind", "teins", "telae", "telco", "teles", "telex", "telia", "telic", "tells", "telly", "teloi", "telos", "temed", "temes", "tempi", "temps", "tempt", "temse", "tench", "tends", "tendu", "tenes", "tenge", "tenia", "tenne", "tenno", "tenny", "tenon", "tents", "tenty", "tenue", "tepal", "tepas", "tepoy", "terai", "teras", "terce", "terek", "teres", "terfe", "terfs", "terga", "terms", "terne", "terns", "terry", "terts", "tesla", "testa", "teste", "tests", "tetes", "teths", "tetra", "tetri", "teuch", "teugh", "tewed", "tewel", "tewit", "texas", "texes", "texts", "thack", "thagi", "thaim", "thale", "thali", "thana", "thane", "thang", "thans", "thanx", "tharm", "thars", "thaws", "thawy", "thebe", "theca", "theed", "theek", "thees", "thegn", "theic", "thein", "thelf", "thema", "thens", "theow", "therm", "thesp", "thete", "thews", "thewy", "thigs", "thilk", "thill", "thine", "thins", "thiol", "thirl", "thoft", "thole", "tholi", "thoro", "thorp", "thous", "thowl", "thrae", "thraw", "thrid", "thrip", "throe", "thuds", "thugs", "thuja", "thunk", "thurl", "thuya", "thymi", "thymy", "tians", "tiars", "tical", "ticca", "ticed", "tices", "tichy", "ticks", "ticky", "tiddy", "tided", "tides", "tiers", "tiffs", "tifos", "tifts", "tiges", "tigon", "tikas", "tikes", "tikis", "tikka", "tilak", "tiled", "tiler", "tiles", "tills", "tilly", "tilth", "tilts", "timbo", "timed", "times", "timon", "timps", "tinas", "tinct", "tinds", "tinea", "tined", "tines", "tinge", "tings", "tinks", "tinny", "tints", "tinty", "tipis", "tippy", "tired", "tires", "tirls", "tiros", "tirrs", "titch", "titer", "titis", "titre", "titty", "titup", "tiyin", "tiyns", "tizes", "tizzy", "toads", "toady", "toaze", "tocks", "tocky", "tocos", "todde", "toeas", "toffs", "toffy", "tofts", "tofus", "togae", "togas", "toged", "toges", "togue", "tohos", "toile", "toils", "toing", "toise", "toits", "tokay", "toked", "toker", "tokes", "tokos", "tolan", "tolar", "tolas", "toled", "toles", "tolls", "tolly", "tolts", "tolus", "tolyl", "toman", "tombs", "tomes", "tomia", "tommy", "tomos", "tondi", "tondo", "toned", "toner", "tones", "toney", "tongs", "tonka", "tonks", "tonne", "tonus", "tools", "tooms", "toons", "toots", "toped", "topee", "topek", "toper", "topes", "tophe", "tophi", "tophs", "topis", "topoi", "topos", "toppy", "toque", "torah", "toran", "toras", "torcs", "tores", "toric", "torii", "toros", "torot", "torrs", "torse", "torsi", "torsk", "torta", "torte", "torts", "tosas", "tosed", "toses", "toshy", "tossy", "toted", "toter", "totes", "totty", "touks", "touns", "tours", "touse", "tousy", "touts", "touze", "touzy", "towed", "towie", "towns", "towny", "towse", "towsy", "towts", "towze", "towzy", "toyed", "toyer", "toyon", "toyos", "tozed", "tozes", "tozie", "trabs", "trads", "tragi", "traik", "trams", "trank", "tranq", "trans", "trant", "trape", "traps", "trapt", "trass", "trats", "tratt", "trave", "trayf", "trays", "treck", "treed", "treen", "trees", "trefa", "treif", "treks", "trema", "trems", "tress", "trest", "trets", "trews", "treyf", "treys", "triac", "tride", "trier", "tries", "triff", "trigo", "trigs", "trike", "trild", "trill", "trims", "trine", "trins", "triol", "trior", "trios", "trips", "tripy", "trist", "troad", "troak", "troat", "trock", "trode", "trods", "trogs", "trois", "troke", "tromp", "trona", "tronc", "trone", "tronk", "trons", "trooz", "troth", "trots", "trows", "troys", "trued", "trues", "trugo", "trugs", "trull", "tryer", "tryke", "tryma", "tryps", "tsade", "tsadi", "tsars", "tsked", "tsuba", "tsubo", "tuans", "tuart", "tuath", "tubae", "tubar", "tubas", "tubby", "tubed", "tubes", "tucks", "tufas", "tuffe", "tuffs", "tufts", "tufty", "tugra", "tuile", "tuina", "tuism", "tuktu", "tules", "tulpa", "tulsi", "tumid", "tummy", "tumps", "tumpy", "tunas", "tunds", "tuned", "tuner", "tunes", "tungs", "tunny", "tupek", "tupik", "tuple", "tuque", "turds", "turfs", "turfy", "turks", "turme", "turms", "turns", "turnt", "turps", "turrs", "tushy", "tusks", "tusky", "tutee", "tutti", "tutty", "tutus", "tuxes", "tuyer", "twaes", "twain", "twals", "twank", "twats", "tways", "tweel", "tween", "tweep", "tweer", "twerk", "twerp", "twier", "twigs", "twill", "twilt", "twink", "twins", "twiny", "twire", "twirp", "twite", "twits", "twoer", "twyer", "tyees", "tyers", "tyiyn", "tykes", "tyler", "tymps", "tynde", "tyned", "tynes", "typal", "typed", "types", "typey", "typic", "typos", "typps", "typto", "tyran", "tyred", "tyres", "tyros", "tythe", "tzars", "udals", "udons", "ugali", "ugged", "uhlan", "uhuru", "ukase", "ulama", "ulans", "ulema", "ulmin", "ulnad", "ulnae", "ulnar", "ulnas", "ulpan", "ulvas", "ulyie", "ulzie", "umami", "umbel", "umber", "umble", "umbos", "umbre", "umiac", "umiak", "umiaq", "ummah", "ummas", "ummed", "umped", "umphs", "umpie", "umpty", "umrah", "umras", "unais", "unapt", "unarm", "unary", "unaus", "unbag", "unban", "unbar", "unbed", "unbid", "unbox", "uncap", "unces", "uncia", "uncos", "uncoy", "uncus", "undam", "undee", "undos", "undug", "uneth", "unfix", "ungag", "unget", "ungod", "ungot", "ungum", "unhat", "unhip", "unica", "units", "unjam", "unked", "unket", "unkid", "unlaw", "unlay", "unled", "unlet", "unlid", "unman", "unmew", "unmix", "unpay", "unpeg", "unpen", "unpin", "unred", "unrid", "unrig", "unrip", "unsaw", "unsay", "unsee", "unsew", "unsex", "unsod", "untax", "untin", "unwet", "unwit", "unwon", "upbow", "upbye", "updos", "updry", "upend", "upjet", "uplay", "upled", "uplit", "upped", "upran", "uprun", "upsee", "upsey", "uptak", "upter", "uptie", "uraei", "urali", "uraos", "urare", "urari", "urase", "urate", "urbex", "urbia", "urdee", "ureal", "ureas", "uredo", "ureic", "urena", "urent", "urged", "urger", "urges", "urial", "urite", "urman", "urnal", "urned", "urped", "ursae", "ursid", "urson", "urubu", "urvas", "users", "usnea", "usque", "usure", "usury", "uteri", "uveal", "uveas", "uvula", "vacua", "vaded", "vades", "vagal", "vagus", "vails", "vaire", "vairs", "vairy", "vakas", "vakil", "vales", "valis", "valse", "vamps", "vampy", "vanda", "vaned", "vanes", "vangs", "vants", "vaped", "vaper", "vapes", "varan", "varas", "vardy", "varec", "vares", "varia", "varix", "varna", "varus", "varve", "vasal", "vases", "vasts", "vasty", "vatic", "vatus", "vauch", "vaute", "vauts", "vawte", "vaxes", "veale", "veals", "vealy", "veena", "veeps", "veers", "veery", "vegas", "veges", "vegie", "vegos", "vehme", "veils", "veily", "veins", "veiny", "velar", "velds", "veldt", "veles", "vells", "velum", "venae", "venal", "vends", "vendu", "veney", "venge", "venin", "vents", "venus", "verbs", "verra", "verry", "verst", "verts", "vertu", "vespa", "vesta", "vests", "vetch", "vexed", "vexer", "vexes", "vexil", "vezir", "vials", "viand", "vibes", "vibex", "vibey", "viced", "vices", "vichy", "viers", "views", "viewy", "vifda", "viffs", "vigas", "vigia", "vilde", "viler", "villi", "vills", "vimen", "vinal", "vinas", "vinca", "vined", "viner", "vines", "vinew", "vinic", "vinos", "vints", "viold", "viols", "vired", "vireo", "vires", "virga", "virge", "virid", "virls", "virtu", "visas", "vised", "vises", "visie", "visne", "vison", "visto", "vitae", "vitas", "vitex", "vitro", "vitta", "vivas", "vivat", "vivda", "viver", "vives", "vizir", "vizor", "vleis", "vlies", "vlogs", "voars", "vocab", "voces", "voddy", "vodou", "vodun", "voema", "vogie", "voids", "voile", "voips", "volae", "volar", "voled", "voles", "volet", "volks", "volta", "volte", "volti", "volts", "volva", "volve", "vomer", "voted", "votes", "vouge", "voulu", "vowed", "vower", "voxel", "vozhd", "vraic", "vrils", "vroom", "vrous", "vrouw", "vrows", "vuggs", "vuggy", "vughs", "vughy", "vulgo", "vulns", "vulva", "vutty", "waacs", "wacke", "wacko", "wacks", "wadds", "waddy", "waded", "wader", "wades", "wadge", "wadis", "wadts", "waffs", "wafts", "waged", "wages", "wagga", "wagyu", "wahoo", "waide", "waifs", "waift", "wails", "wains", "wairs", "waite", "waits", "wakas", "waked", "waken", "waker", "wakes", "wakfs", "waldo", "walds", "waled", "waler", "wales", "walie", "walis", "walks", "walla", "walls", "wally", "walty", "wamed", "wames", "wamus", "wands", "waned", "wanes", "waney", "wangs", "wanks", "wanky", "wanle", "wanly", "wanna", "wants", "wanty", "wanze", "waqfs", "warbs", "warby", "wards", "wared", "wares", "warez", "warks", "warms", "warns", "warps", "warre", "warst", "warts", "wases", "washy", "wasms", "wasps", "waspy", "wasts", "watap", "watts", "wauff", "waugh", "wauks", "waulk", "wauls", "waurs", "waved", "waves", "wavey", "wawas", "wawes", "wawls", "waxed", "waxer", "waxes", "wayed", "wazir", "wazoo", "weald", "weals", "weamb", "weans", "wears", "webby", "weber", "wecht", "wedel", "wedgy", "weeds", "weeke", "weeks", "weels", "weems", "weens", "weeny", "weeps", "weepy", "weest", "weete", "weets", "wefte", "wefts", "weids", "weils", "weirs", "weise", "weize", "wekas", "welds", "welke", "welks", "welkt", "wells", "welly", "welts", "wembs", "wends", "wenge", "wenny", "wents", "weros", "wersh", "wests", "wetas", "wetly", "wexed", "wexes", "whamo", "whams", "whang", "whaps", "whare", "whata", "whats", "whaup", "whaur", "wheal", "whear", "wheen", "wheep", "wheft", "whelk", "whelm", "whens", "whets", "whews", "wheys", "whids", "whift", "whigs", "whilk", "whims", "whins", "whios", "whips", "whipt", "whirr", "whirs", "whish", "whiss", "whist", "whits", "whity", "whizz", "whomp", "whoof", "whoot", "whops", "whore", "whorl", "whort", "whoso", "whows", "whump", "whups", "whyda", "wicca", "wicks", "wicky", "widdy", "wides", "wiels", "wifed", "wifes", "wifey", "wifie", "wifty", "wigan", "wigga", "wiggy", "wikis", "wilco", "wilds", "wiled", "wiles", "wilga", "wilis", "wilja", "wills", "wilts", "wimps", "winds", "wined", "wines", "winey", "winge", "wings", "wingy", "winks", "winna", "winns", "winos", "winze", "wiped", "wiper", "wipes", "wired", "wirer", "wires", "wirra", "wised", "wises", "wisha", "wisht", "wisps", "wists", "witan", "wited", "wites", "withe", "withs", "withy", "wived", "wiver", "wives", "wizen", "wizes", "woads", "woald", "wocks", "wodge", "woful", "wojus", "woker", "wokka", "wolds", "wolfs", "wolly", "wolve", "wombs", "womby", "womyn", "wonga", "wongi", "wonks", "wonky", "wonts", "woods", "wooed", "woofs", "woofy", "woold", "wools", "woons", "woops", "woopy", "woose", "woosh", "wootz", "words", "works", "worms", "wormy", "worts", "wowed", "wowee", "woxen", "wrang", "wraps", "wrapt", "wrast", "wrate", "wrawl", "wrens", "wrick", "wried", "wrier", "wries", "writs", "wroke", "wroot", "wroth", "wryer", "wuddy", "wudus", "wulls", "wurst", "wuses", "wushu", "wussy", "wuxia", "wyled", "wyles", "wynds", "wynns", "wyted", "wytes", "xebec", "xenia", "xenic", "xenon", "xeric", "xerox", "xerus", "xoana", "xrays", "xylan", "xylem", "xylic", "xylol", "xylyl", "xysti", "xysts", "yaars", "yabas", "yabba", "yabby", "yacca", "yacka", "yacks", "yaffs", "yager", "yages", "yagis", "yahoo", "yaird", "yakka", "yakow", "yales", "yamen", "yampy", "yamun", "yangs", "yanks", "yapok", "yapon", "yapps", "yappy", "yarak", "yarco", "yards", "yarer", "yarfa", "yarks", "yarns", "yarrs", "yarta", "yarto", "yates", "yauds", "yauld", "yaups", "yawed", "yawey", "yawls", "yawns", "yawny", "yawps", "ybore", "yclad", "ycled", "ycond", "ydrad", "ydred", "yeads", "yeahs", "yealm", "yeans", "yeard", "years", "yecch", "yechs", "yechy", "yedes", "yeeds", "yeesh", "yeggs", "yelks", "yells", "yelms", "yelps", "yelts", "yenta", "yente", "yerba", "yerds", "yerks", "yeses", "yesks", "yests", "yesty", "yetis", "yetts", "yeuks", "yeuky", "yeven", "yeves", "yewen", "yexed", "yexes", "yfere", "yiked", "yikes", "yills", "yince", "yipes", "yippy", "yirds", "yirks", "yirrs", "yirth", "yites", "yitie", "ylems", "ylike", "ylkes", "ymolt", "ympes", "yobbo", "yobby", "yocks", "yodel", "yodhs", "yodle", "yogas", "yogee", "yoghs", "yogic", "yogin", "yogis", "yoick", "yojan", "yoked", "yokel", "yoker", "yokes", "yokul", "yolks", "yolky", "yomim", "yomps", "yonic", "yonis", "yonks", "yoofs", "yoops", "yores", "yorks", "yorps", "youks", "yourn", "yours", "yourt", "youse", "yowed", "yowes", "yowie", "yowls", "yowza", "yrapt", "yrent", "yrivd", "yrneh", "ysame", "ytost", "yuans", "yucas", "yucca", "yucch", "yucko", "yucks", "yucky", "yufts", "yugas", "yuked", "yukes", "yukky", "yukos", "yulan", "yules", "yummo", "yummy", "yumps", "yupon", "yuppy", "yurta", "yurts", "yuzus", "zabra", "zacks", "zaida", "zaidy", "zaire", "zakat", "zaman", "zambo", "zamia", "zanja", "zante", "zanza", "zanze", "zappy", "zarfs", "zaris", "zatis", "zaxes", "zayin", "zazen", "zeals", "zebec", "zebub", "zebus", "zedas", "zeins", "zendo", "zerda", "zerks", "zeros", "zests", "zetas", "zexes", "zezes", "zhomo", "zibet", "ziffs", "zigan", "zilas", "zilch", "zilla", "zills", "zimbi", "zimbs", "zinco", "zincs", "zincy", "zineb", "zines", "zings", "zingy", "zinke", "zinky", "zippo", "zippy", "ziram", "zitis", "zizel", "zizit", "zlote", "zloty", "zoaea", "zobos", "zobus", "zocco", "zoeae", "zoeal", "zoeas", "zoism", "zoist", "zombi", "zonae", "zonda", "zoned", "zoner", "zones", "zonks", "zooea", "zooey", "zooid", "zooks", "zooms", "zoons", "zooty", "zoppa", "zoppo", "zoril", "zoris", "zorro", "zouks", "zowee", "zowie", "zulus", "zupan", "zupas", "zuppa", "zurfs", "zuzim", "zygal", "zygon", "zymes", "zymic"];
		const Ia = "present";
		const Ma = "correct";
		const Oa = "absent";
		const Ra = {
			unknown: 0,
			absent: 1,
			present: 2,
			correct: 3
		};

		function Pa(e, a) {
			const s = {};
			return e.forEach(((e, t) => {
				if (a[t])
					for (let o = 0; o < e.length; o++) {
						const n = e[o];
						const r = a[t][o];
						const i = s[n] || "unknown";
						Ra[r] > Ra[i] && (s[n] = r)
					}
			})), s;
		}

		function $a(e) {
			const a = ["th", "st", "nd", "rd"];
			const s = e % 100;
			return e + (a[(s - 20) % 10] || a[s] || a[0])
		}
		const Ha = new Date(2021, 5, 19, 0, 0, 0, 0);

		function Na(e, a) {
			const s = new Date(e);
			const t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
			return Math.round(t / 864e5)
		}

		function Da(e) {
			let a;
			const s = Ga(e);
			return a = s % La.length, La[a]
		}

		function Ga(e) {
			return Na(Ha, e)
		}
		const Ba = "abcdefghijklmnopqrstuvwxyz";
		const Fa = [].concat(g(Ba.split("").slice(13)), g(Ba.split("").slice(0, 13)));

		function Wa(e) {
			for (var a = "", s = 0; s < e.length; s++) {
				const t = Ba.indexOf(e[s]);
				a += t >= 0 ? Fa[t] : "_"
			}
			return a
		}
		const Ya = "statistics";
		const Ja = "fail";

		const Ua = {
			currentStreak: 0,
			maxStreak: 0,
			guesses: n({
				1: 0,
				2: 0,
				3: 0,
				4: 0,
				5: 0,
				6: 0
			}, Ja, 0),
			winPercentage: 0,
			gamesPlayed: 0,
			gamesWon: 0,
			averageGuesses: 0
		};

		function Xa() {
			const e = window.localStorage.getItem(Ya) || JSON.stringify(Ua);
			return JSON.parse(e)
		}

		function Va({
			isWin,
			isStreak,
			numGuesses
		}) {
			const a = isWin;
			const s = isStreak;
			const t = numGuesses;
			const o = Xa();
			a ? (o.guesses[t] += 1, s ? o.currentStreak += 1 : o.currentStreak = 1) : (o.currentStreak = 0, o.guesses.fail += 1), o.maxStreak = Math.max(o.currentStreak, o.maxStreak), o.gamesPlayed += 1, o.gamesWon += a ? 1 : 0, o.winPercentage = Math.round(o.gamesWon / o.gamesPlayed * 100), o.averageGuesses = Math.round(Object.entries(o.guesses).reduce(((e, a) => {
				const s = y(a, 2);
				const t = s[0];
				const o = s[1];
				return t !== Ja ? e += t * o : e
			}), 0) / o.gamesWon), (e => {
				window.localStorage.setItem(Ya, JSON.stringify(e))
			})(o)
		}
		const Ka = document.createElement("template");
		Ka.innerHTML = `
    <style>
    .toaster {
      position: absolute;
      top: 10%;
      left: 50%;
      transform: translate(-50%, 0);
      pointer-events: none;
      width: fit-content;
    }
    #game-toaster {
      z-index: 1000;
    }
    #system-toaster {
      z-index: 4000;
    }

    #game {
      width: 100%;
      max-width: var(--game-max-width);
      margin: 0 auto;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: var(--header-height);
      color: var(--color-tone-1);
      border-bottom: 1px solid var(--color-tone-4);
    }
    header .title {
      font-weight: 700;
      font-size: 36px;
      letter-spacing: 0.2rem;
      text-transform: uppercase;
      text-align: center;
      position: absolute;
      left: 0;
      right: 0;
      pointer-events: none;
    }

    @media (max-width: 360px) {
      header .title {
        font-size: 22px;
        letter-spacing: 0.1rem;
      }
    }

    #board-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      overflow: hidden;
    }
    #board {
      display: grid;
      grid-template-rows: repeat(6, 1fr);
      grid-gap: 5px;
      padding: 10px;
      box-sizing: border-box;
    }
    button.icon {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0 4px;
    }

    #debug-tools {
      position: absolute;
      bottom: 0;
    }
  </style>
  <game-theme-manager>
    <div id="game">
      <header>
        <div class="menu">
          <button id="help-button" class="icon" aria-label="help">
            <game-icon icon="help"></game-icon>
          </button>
        </div>
        <div class="title">WORDLE</div>
        <div class="menu">
          <button id="statistics-button" class="icon" aria-label="statistics">
            <game-icon icon="statistics"></game-icon>
          </button>
          <button id="settings-button" class="icon" aria-label="settings">
            <game-icon icon="settings"></game-icon>
          </button>
        </div>
      </header>
      <div id="board-container">
        <div id="board"></div>
      </div>
      <game-keyboard></game-keyboard>
      <game-modal></game-modal>
      <game-page></game-page>
      <div class="toaster" id="game-toaster"></div>
      <div class="toaster" id="system-toaster"></div>
    </div>
  </game-theme-manager>
  <div id="debug-tools"></div>
  `;
		const debugTools = document.createElement("template");
		debugTools.innerHTML = `
    <button id="reveal">reveal</button>
    <button id="shake">shake</button>
    <button id="bounce">bounce</button>
    <button id="toast">toast</button>
    <button id="modal">modal</button>
    `;
		const Za = "IN_PROGRESS";
		const es = "WIN";
		const as = "FAIL";
		const ss = ["Genius", "Magnificent", "Impressive", "Splendid", "Great", "Phew"];

		const gameApp = (e => {
			r(t, e);
			const a = h(t);

			function t() {
				let e;
				s(this, t),
					n(p(e = a.call(this)), "tileIndex", 0),
					n(p(e), "rowIndex", 0),
					n(p(e), "solution", undefined),
					n(p(e), "boardState", undefined),
					n(p(e), "evaluations", undefined),
					n(p(e), "canInput", !0),
					n(p(e), "gameStatus", Za),
					n(p(e), "letterEvaluations", {}),
					n(p(e), "$board", undefined),
					n(p(e), "$keyboard", undefined),
					n(p(e), "$game", undefined),
					n(p(e), "today", undefined),
					n(p(e), "lastPlayedTs", undefined),
					n(p(e), "lastCompletedTs", undefined),
					n(p(e), "hardMode", undefined),
					n(p(e), "dayOffset", undefined),
					e.attachShadow({
						mode: "open"
					}),
					e.today = new Date;
				const o = za();
				return e.lastPlayedTs = o.lastPlayedTs, !e.lastPlayedTs || Na(new Date(e.lastPlayedTs), e.today) >= 1 ? (e.boardState = new Array(6).fill(""), e.evaluations = new Array(6).fill(null), e.solution = Da(e.today), e.dayOffset = Ga(e.today), e.lastCompletedTs = o.lastCompletedTs, e.hardMode = o.hardMode, e.restoringFromLocalStorage = !1, ja({
					rowIndex: e.rowIndex,
					boardState: e.boardState,
					evaluations: e.evaluations,
					solution: e.solution,
					gameStatus: e.gameStatus
				}), Ca("event", "level_start", {
					level_name: Wa(e.solution)
				})) : (e.boardState = o.boardState, e.evaluations = o.evaluations, e.rowIndex = o.rowIndex, e.solution = o.solution, e.dayOffset = Ga(e.today), e.letterEvaluations = Pa(e.boardState, e.evaluations), e.gameStatus = o.gameStatus, e.lastCompletedTs = o.lastCompletedTs, e.hardMode = o.hardMode, e.gameStatus !== Za && (e.canInput = !1), e.restoringFromLocalStorage = !0), e
			}
			return o(t, [{
				key: "evaluateRow",
				value() {
					if (5 === this.tileIndex && !(this.rowIndex >= 6)) {
						let e;
						const a = this.$board.querySelectorAll("game-row")[this.rowIndex];
						const s = this.boardState[this.rowIndex];
						if (e = s, !Ta.includes(e) && !La.includes(e))
							return a.setAttribute("invalid", ""), void this.addToast("Not in word list");
						if (this.hardMode) {
							const t = ((e, a, s) => {
								if (!e || !a || !s)
									return {
										validGuess: !0
									};
								for (let t = 0; t < s.length; t++)
									if (s[t] === Ma && e[t] !== a[t])
										return {
											validGuess: !1,
											errorMessage: "".concat($a(t + 1), " letter must be ").concat(a[t].toUpperCase())
										};
								for (var o = {}, n = 0; n < s.length; n++)
									[Ma, Ia].includes(s[n]) && (o[a[n]] ? o[a[n]] += 1 : o[a[n]] = 1);
								const r = e.split("").reduce(((e, a) => (e[a] ? e[a] += 1 : e[a] = 1, e)), {});
								for (const i in o)
									if ((r[i] || 0) < o[i])
										return {
											validGuess: !1,
											errorMessage: "Guess must contain ".concat(i.toUpperCase())
										};
								return {
									validGuess: !0
								}
							})(s, this.boardState[this.rowIndex - 1], this.evaluations[this.rowIndex - 1]),
								o = t.validGuess,
								n = t.errorMessage;
							if (!o)
								return a.setAttribute("invalid", ""), void this.addToast(n || "Not valid in hard mode")
						}
						const r = ((e, a) => {
							for (var s = Array(a.length).fill(Oa), t = Array(a.length).fill(!0), o = Array(a.length).fill(!0), n = 0; n < e.length; n++)
								e[n] === a[n] && o[n] && (s[n] = Ma, t[n] = !1, o[n] = !1);
							for (let r = 0; r < e.length; r++) {
								const i = e[r];
								if (t[r])
									for (let l = 0; l < a.length; l++) {
										const d = a[l];
										if (o[l] && i === d) {
											s[r] = Ia,
												o[l] = !1;
											break
										}
									}
							}
							return s
						})(s, this.solution);
						this.evaluations[this.rowIndex] = r,
							this.letterEvaluations = Pa(this.boardState, this.evaluations),
							a.evaluation = this.evaluations[this.rowIndex],
							this.rowIndex += 1;
						const i = this.rowIndex >= 6,
							l = r.every((e => "correct" === e));
						if (i || l)
							Va({
								isWin: l,
								isStreak: !!this.lastCompletedTs && 1 === Na(new Date(this.lastCompletedTs), new Date),
								numGuesses: this.rowIndex
							}),
								ja({
									lastCompletedTs: Date.now()
								}),
								this.gameStatus = l ? es : as,
								Ca("event", "level_end", {
									level_name: Wa(this.solution),
									num_guesses: this.rowIndex,
									success: l
								});
						this.tileIndex = 0,
							this.canInput = !1,
							ja({
								rowIndex: this.rowIndex,
								boardState: this.boardState,
								evaluations: this.evaluations,
								solution: this.solution,
								gameStatus: this.gameStatus,
								lastPlayedTs: Date.now()
							})
					}
				}
			}, {
				key: "addLetter",
				value(e) {
					this.gameStatus === Za && (this.canInput && (this.tileIndex >= 5 || (this.boardState[this.rowIndex] += e, this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("letters", this.boardState[this.rowIndex]), this.tileIndex += 1)))
				}
			}, {
				key: "removeLetter",
				value() {
					if (this.gameStatus === Za && this.canInput && !(this.tileIndex <= 0)) {
						this.boardState[this.rowIndex] = this.boardState[this.rowIndex].slice(0, this.boardState[this.rowIndex].length - 1);
						const e = this.$board.querySelectorAll("game-row")[this.rowIndex];
						this.boardState[this.rowIndex] ? e.setAttribute("letters", this.boardState[this.rowIndex]) : e.removeAttribute("letters"),
							e.removeAttribute("invalid"),
							this.tileIndex -= 1
					}
				}
			}, {
				key: "submitGuess",
				value() {
					if (this.gameStatus === Za && this.canInput) {
						if (5 !== this.tileIndex)
							return this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("invalid", ""), void this.addToast("Not enough letters");
						this.evaluateRow()
					}
				}
			}, {
				key: "addToast",
				value(e, a) {
					const s = arguments.length > 2 && undefined !== arguments[2] && arguments[2],
						t = document.createElement("game-toast");
					t.setAttribute("text", e),
						a && t.setAttribute("duration", a),
						s ? this.shadowRoot.querySelector("#system-toaster").prepend(t) : this.shadowRoot.querySelector("#game-toaster").prepend(t)
				}
			}, {
				key: "sizeBoard",
				value() {
					const e = this.shadowRoot.querySelector("#board-container"),
						a = Math.min(Math.floor(e.clientHeight * (5 / 6)), 350),
						s = 6 * Math.floor(a / 5);
					this.$board.style.width = "".concat(a, "px"),
						this.$board.style.height = "".concat(s, "px")
				}
			}, {
				key: "showStatsModal",
				value() {
					const e = this.$game.querySelector("game-modal"),
						a = document.createElement("game-stats");
					this.gameStatus === es && this.rowIndex <= 6 && a.setAttribute("highlight-guess", this.rowIndex),
						a.gameApp = this,
						e.appendChild(a),
						e.setAttribute("open", "")
				}
			}, {
				key: "showHelpModal",
				value() {
					const e = this.$game.querySelector("game-modal");
					e.appendChild(document.createElement("game-help")),
						e.setAttribute("open", "")
				}
			}, {
				key: "connectedCallback",
				value() {
					const e = this;
					this.shadowRoot.appendChild(Ka.content.cloneNode(!0)),
						this.$game = this.shadowRoot.querySelector("#game"),
						this.$board = this.shadowRoot.querySelector("#board"),
						this.$keyboard = this.shadowRoot.querySelector("game-keyboard"),
						this.sizeBoard(),
						this.lastPlayedTs || setTimeout((() => e.showHelpModal()), 100);
					for (let a = 0; a < 6; a++) {
						const s = document.createElement("game-row");
						s.setAttribute("letters", this.boardState[a]),
							s.setAttribute("length", 5),
							this.evaluations[a] && (s.evaluation = this.evaluations[a]),
							this.$board.appendChild(s)
					}
					this.$game.addEventListener("game-key-press", (({
						detail
					}) => {
						const s = detail.key;
						"←" === s || "Backspace" === s ? e.removeLetter() : "↵" === s || "Enter" === s ? e.submitGuess() : Ba.includes(s.toLowerCase()) && e.addLetter(s.toLowerCase())
					})),
						this.$game.addEventListener("game-last-tile-revealed-in-row", (a => {
							e.$keyboard.letterEvaluations = e.letterEvaluations,
								e.rowIndex < 6 && (e.canInput = !0);
							const s = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
							(a.path || a.composedPath && a.composedPath()).includes(s) && ([es, as].includes(e.gameStatus) && (e.restoringFromLocalStorage ? e.showStatsModal() : (e.gameStatus === es && (s.setAttribute("win", ""), e.addToast(ss[e.rowIndex - 1], 2e3)), e.gameStatus === as && e.addToast(e.solution.toUpperCase(), 1 / 0), setTimeout((() => {
								e.showStatsModal()
							}), 2500))), e.restoringFromLocalStorage = !1)
						})),
						this.shadowRoot.addEventListener("game-setting-change", (({
							detail
						}) => {
							const s = detail,
								t = s.name,
								o = s.checked,
								n = s.disabled;
							switch (t) {
								case "hard-mode":
									return void (n ? e.addToast("Hard mode can only be enabled at the start of a round", 1500, !0) : (e.hardMode = o, ja({
										hardMode: o
									})))
							}
						})),
						this.shadowRoot.getElementById("settings-button").addEventListener("click", (a => {
							const s = e.$game.querySelector("game-page"),
								t = document.createTextNode("Settings");
							s.appendChild(t);
							const o = document.createElement("game-settings");
							o.setAttribute("slot", "content"),
								o.gameApp = e,
								s.appendChild(o),
								s.setAttribute("open", "")
						})),
						this.shadowRoot.getElementById("help-button").addEventListener("click", (a => {
							const s = e.$game.querySelector("game-page"),
								t = document.createTextNode("How to play");
							s.appendChild(t);
							const o = document.createElement("game-help");
							o.setAttribute("page", ""),
								o.setAttribute("slot", "content"),
								s.appendChild(o),
								s.setAttribute("open", "")
						})),
						this.shadowRoot.getElementById("statistics-button").addEventListener("click", (a => {
							e.showStatsModal()
						})),
						window.addEventListener("resize", this.sizeBoard.bind(this))
				}
			}, {
				key: "disconnectedCallback",
				value() { }
			}, {
				key: "debugTools",
				value() {
					const e = this;
					this.shadowRoot.getElementById("debug-tools").appendChild(debugTools.content.cloneNode(!0)),
						this.shadowRoot.getElementById("toast").addEventListener("click", (a => {
							e.addToast("hello world")
						})),
						this.shadowRoot.getElementById("modal").addEventListener("click", (a => {
							const s = e.$game.querySelector("game-modal");
							s.textContent = "hello plz",
								s.setAttribute("open", "")
						})),
						this.shadowRoot.getElementById("reveal").addEventListener("click", (() => {
							e.evaluateRow()
						})),
						this.shadowRoot.getElementById("shake").addEventListener("click", (() => {
							e.$board.querySelectorAll("game-row")[e.rowIndex].setAttribute("invalid", "")
						})),
						this.shadowRoot.getElementById("bounce").addEventListener("click", (() => {
							const a = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
							"" === a.getAttribute("win") ? a.removeAttribute("win") : a.setAttribute("win", "")
						}))
				}
			}]), t;
		})(c(HTMLElement));

		customElements.define("game-app", gameApp);
		const gameAppContent = document.createElement("template");
		gameAppContent.innerHTML = `
    <style>
      .overlay {
          display: none;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          justify-content: center;
          align-items: center;
          background-color: var(--opacity-50);
          z-index: 3000;
      }
  
      :host([open]) .overlay {
          display: flex;
      }
  
      .content {
          position: relative;
          border-radius: 8px;
          border: 1px solid var(--color-tone-6);
          background-color: var(--modal-content-bg);
          color: var(--color-tone-1);
          box-shadow: 0 4px 23px 0 rgb(0, 0, 0, 0.2);
          width: 90%;
          max-height: 90%;
          overflow-y: auto;
          animation: SlideIn 200ms;
          max-width: var(--game-max-width);
          padding: 16px;
          box-sizing: border-box;
      }
  
      .content.closing {
          animation: SlideOut 200ms;
      }
  
      .close-icon {
          width: 24px;
          height: 24px;
          position: absolute;
          top: 16px;
          right: 16px;
      }
  
      game-icon {
          position: fixed;
          user-select: none;
          cursor: pointer;
      }
  
      @keyframes SlideIn {
          0% {
            transform: translateY(30px);
            opacity: 0;
        }
        100% {
            transform: translateY(0px);
            opacity: 1;
        }
      }
      @keyframes SlideOut {
          0% {
            transform: translateY(0px);
            opacity: 1;
        }
        90% {
            opacity: 0;
        }
        100% {
            opacity: 0;
            transform: translateY(60px);
        }
      }
    </style>
    <div class="overlay">
      <div class="content">
        <slot></slot>
        <div class="close-icon">
          <game-icon icon="close"></game-icon>
        </div>
      </div>
    </div>
  `;
		const gameModal = (e => {
			r(t, e);
			const a = h(t);

			function t() {
				let e;
				return s(this, t), (e = a.call(this)).attachShadow({
					mode: "open"
				}), e
			}
			return o(t, [{
				key: "connectedCallback",
				value() {
					const e = this;
					this.shadowRoot.appendChild(gameAppContent.content.cloneNode(!0)),
						this.addEventListener("click", (a => {
							e.shadowRoot.querySelector(".content").classList.add("closing")
						})),
						this.shadowRoot.addEventListener("animationend", (({
							animationName
						}) => {
							"SlideOut" === animationName && (e.shadowRoot.querySelector(".content").classList.remove("closing"), e.removeChild(e.firstChild), e.removeAttribute("open"))
						}))
				}
			}]), t;
		})(c(HTMLElement));
		customElements.define("game-modal", gameModal);
		const rs = document.createElement("template");
		rs.innerHTML = `
    <style>
    :host {
        height: var(--keyboard-height);
    }
    #keyboard {
        margin: 0 8px;
        user-select: none;
    }
    
    .row {
        display: flex;
        width: 100%;
        margin: 0 auto 8px;
        /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */
        touch-action: manipulation;
    }
    
    button {
        font-family: inherit;
      font-weight: bold;
      border: 0;
      padding: 0;
      margin: 0 6px 0 0;
      height: 58px;
      border-radius: 4px;
      cursor: pointer;
      user-select: none;
      background-color: var(--key-bg);
      color: var(--key-text-color);
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      -webkit-tap-highlight-color: rgb(0,0,0,0.3);
    }
  
    button:focus {
        outline: none;
    }
  
    button.fade {
        transition: background-color 0.1s ease, color 0.1s ease;
    }
    
    button:last-of-type {
        margin: 0;
    }
    
    .half {
        flex: 0.5;
    }
    
    .one {
        flex: 1;
    }
  
    .one-and-a-half {
        flex: 1.5;
      font-size: 12px;
    }
    
    .two {
        flex: 2;
    }
  
    button[data-state='correct'] {
        background-color: var(--key-bg-correct);
      color: var(--key-evaluated-text-color);
    }
  
    button[data-state='present'] {
        background-color: var(--key-bg-present);
      color: var(--key-evaluated-text-color);
    }
  
    button[data-state='absent'] {
        background-color: var(--key-bg-absent);
      color: var(--key-evaluated-text-color);
    }
  
    </style>
    <div id=\"keyboard\"></div>
  `;
		const is = document.createElement("template");
		is.innerHTML = `<button>key</button>`;
		const ls = document.createElement("template");
		ls.innerHTML = `<div class="spacer"></div>`;
		const keyboardLayout = [
			["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
			["-", "a", "s", "d", "f", "g", "h", "j", "k", "l", "-"],
			["↵", "z", "x", "c", "v", "b", "n", "m", "←"]
		];

		const gameKeyboard = (e => {
			r(t, e);
			const a = h(t);

			function t() {
				let e;
				return s(this, t), n(p(e = a.call(this)), "_letterEvaluations", {}), e.attachShadow({
					mode: "open"
				}), e
			}
			return o(t, [{
				key: "letterEvaluations",
				set(e) {
					this._letterEvaluations = e,
						this._render()
				}
			}, {
				key: "dispatchKeyPressEvent",
				value(e) {
					this.dispatchEvent(new CustomEvent("game-key-press", {
						bubbles: !0,
						composed: !0,
						detail: {
							key: e
						}
					}))
				}
			}, {
				key: "connectedCallback",
				value() {
					const e = this;
					this.shadowRoot.appendChild(rs.content.cloneNode(!0)),
						this.$keyboard = this.shadowRoot.getElementById("keyboard"),
						this.$keyboard.addEventListener("click", (({
							target
						}) => {
							const s = target.closest("button");
							s && e.$keyboard.contains(s) && e.dispatchKeyPressEvent(s.dataset.key)
						})),
						window.addEventListener("keydown", (({
							repeat,
							key,
							metaKey,
							ctrlKey
						}) => {
							if (!0 !== repeat) {
								const s = key,
									t = metaKey,
									o = ctrlKey;
								t || o || (Ba.includes(s.toLowerCase()) || "Backspace" === s || "Enter" === s) && e.dispatchKeyPressEvent(s)
							}
						})),
						this.$keyboard.addEventListener("transitionend", (({
							target
						}) => {
							const s = target.closest("button");
							s && e.$keyboard.contains(s) && s.classList.remove("fade")
						})),
						keyboardLayout.forEach((a => {
							const s = document.createElement("div");
							s.classList.add("row"),
								a.forEach((e => {
									let a;
									if (e >= "a" && e <= "z" || "←" === e || "↵" === e) {
										if ((a = is.content.cloneNode(!0).firstElementChild).dataset.key = e, a.textContent = e, "←" === e) {
											const t = document.createElement("game-icon");
											t.setAttribute("icon", "backspace"),
												a.textContent = "",
												a.appendChild(t),
												a.classList.add("one-and-a-half")
										}
										"↵" == e && (a.textContent = "enter", a.classList.add("one-and-a-half"))
									} else
										(a = ls.content.cloneNode(!0).firstElementChild).classList.add(1 === e.length ? "half" : "one");
									s.appendChild(a)
								})),
								e.$keyboard.appendChild(s)
						})),
						this._render()
				}
			}, {
				key: "_render",
				value() {
					for (const e in this._letterEvaluations) {
						const a = this.$keyboard.querySelector('[data-key="'.concat(e, '"]'));
						a.dataset.state = this._letterEvaluations[e],
							a.classList.add("fade")
					}
				}
			}]), t;
		})(c(HTMLElement));

		/*! *****************************************************************************
			Copyright (c) Microsoft Corporation.

			Permission to use, copy, modify, and/or distribute this software for any
			purpose with or without fee is hereby granted.

			THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
			REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
			AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
			INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
			LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
			OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
			PERFORMANCE OF THIS SOFTWARE.
			***************************************************************************** */
		// Begin scary TypeScript residue
			function cs(e, a, s, t) {
			return new (s || (s = Promise))(((o, n) => {
				function r(e) {
					try {
						l(t.next(e))
					} catch (e) {
						n(e)
					}
				}

				function i(e) {
					try {
						l(t.throw(e))
					} catch (e) {
						n(e)
					}
				}

				function l({
					done,
					value
				}) {
					let a;
					done ? o(value) : (a = value, a instanceof s ? a : new s((e => {
						e(a)
					}))).then(r, i)
				}
				l((t = t.apply(e, a || [])).next())
			}));
		}

		function ps(e, a) {
			let s;
			let t;
			let o;
			let n;

			let r = {
				label: 0,
				sent() {
					if (1 & o[0])
						throw o[1];
					return o[1]
				},
				trys: [],
				ops: []
			};

			return n = {
				next: i(0),
				throw: i(1),
				return: i(2)
			}, "function" == typeof Symbol && (n[Symbol.iterator] = function () {
				return this
			}), n;

			function i(n) {
				return i => (n => {
					if (s)
						throw new TypeError("Generator is already executing.");
					for (; r;)
						try {
							if (s = 1, t && (o = 2 & n[0] ? t.return : n[0] ? t.throw || ((o = t.return) && o.call(t), 0) : t.next) && !(o = o.call(t, n[1])).done)
								return o;
							switch (t = 0, o && (n = [2 & n[0], o.value]), n[0]) {
								case 0:
								case 1:
									o = n;
									break;
								case 4:
									return r.label++, {
										value: n[1],
										done: !1
									};
								case 5:
									r.label++,
										t = n[1],
										n = [0];
									continue;
								case 7:
									n = r.ops.pop(),
										r.trys.pop();
									continue;
								default:
									if (!((o = (o = r.trys).length > 0 && o[o.length - 1]) || 6 !== n[0] && 2 !== n[0])) {
										r = 0;
										continue
									}
									if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
										r.label = n[1];
										break
									}
									if (6 === n[0] && r.label < o[1]) {
										r.label = o[1],
											o = n;
										break
									}
									if (o && r.label < o[2]) {
										r.label = o[2],
											r.ops.push(n);
										break
									}
									o[2] && r.ops.pop(),
										r.trys.pop();
									continue
							}
							n = a.call(e, r)
						} catch (e) {
							n = [6, e],
								t = 0
						} finally {
							s = o = 0
						}
					if (5 & n[0])
						throw n[1];
					return {
						value: n[0] ? n[1] : undefined,
						done: !0
					}
				})([n, i]);
			}
		}
		// End scary TypeScript residue

		// Somewhere around here, a package called "clipboard-polyfill" is being used.
		customElements.define("game-keyboard", gameKeyboard),
			function (...args) {
				(console.warn || console.log).apply(console, args)
			}.bind("[clipboard-polyfill]");
		let ms;
		let hs;
		let ys;
		let gs;
		const nav = "undefined" == typeof navigator ? undefined : navigator;
		const fs = null == nav ? undefined : nav.clipboard;
		null === (ms = null == fs ? undefined : fs.read) || undefined === ms || ms.bind(fs),
			null === (hs = null == fs ? undefined : fs.readText) || undefined === hs || hs.bind(fs);
		const ks = (null === (ys = null == fs ? undefined : fs.write) || undefined === ys || ys.bind(fs), null === (gs = null == fs ? undefined : fs.writeText) || undefined === gs ? undefined : gs.bind(fs));
		const root = "undefined" == typeof window ? undefined : window;
		const ws = (null == root || root.ClipboardItem, root);

		function zs(e, a, s) {
			for (const t in (e.success = !0, a)) {
				const o = a[t];
				const n = s.clipboardData;
				n.setData(t, o),
					"text/plain" === t && n.getData(t) !== o && (e.success = !1)
			}
			s.preventDefault()
		}

		function js(e) {
			const a = true;
			const s = zs.bind(this, a, e);
			document.addEventListener("copy", s);
			try {
				document.execCommand("copy")
			} finally {
				document.removeEventListener("copy", s)
			}
			return a.success
		}

		function Ss(e, a) {
			_s(e);
			const s = js(a);
			return qs(), s
		}

		function _s(e) {
			const a = document.getSelection();
			if (a) {
				const s = document.createRange();
				s.selectNodeContents(e),
					a.removeAllRanges(),
					a.addRange(s)
			}
		}

		function qs() {
			const e = document.getSelection();
			e && e.removeAllRanges()
		}

		function Es(e) {
			return cs(this, undefined, undefined, (function () {
				let a;
				return ps(this, (s => {
					if (a = "text/plain" in e, "undefined" == typeof ClipboardEvent && undefined !== ws.clipboardData && undefined !== ws.clipboardData.setData) {
						if (!a)
							throw new Error("No `text/plain` value was specified.");
						if (t = e["text/plain"], ws.clipboardData.setData("Text", t))
							return [2, !0];
						throw new Error("Copying failed, possibly because the user rejected it.")
					}
					var t;
					return js(e) || navigator.userAgent.includes("Edge") || Ss(document.body, e) || (e => {
						const a = document.createElement("div");
						a.setAttribute("style", "-webkit-user-select: text !important"),
							a.textContent = "temporary element",
							document.body.appendChild(a);
						const s = Ss(a, e);
						return document.body.removeChild(a), s
					})(e) || (e => {
						const a = document.createElement("div");
						a.setAttribute("style", "-webkit-user-select: text !important");
						let s = a;
						a.attachShadow && (s = a.attachShadow({
							mode: "open"
						}));
						const t = document.createElement("span");
						t.innerText = e,
							s.appendChild(t),
							document.body.appendChild(a),
							_s(t);
						const o = document.execCommand("copy");
						return qs(), document.body.removeChild(a), o
					})(e["text/plain"]) ? [2, !0] : [2, !1];
				}));
			}));
		}
		// I'm somewhat willing to bet the end of the polyfill is around here.

		// Not positive what this next function does. It has something to do with the browser share API, idk if it just checks or if it handles the actual share event.
		function browserShare(e, a, s) {
			try {
				userAgent = navigator.userAgent || navigator.vendor || window.opera,
					!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(userAgent) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(userAgent.substr(0, 4)) || navigator.userAgent.toLowerCase().includes("firefox") || undefined === navigator.share || !navigator.canShare || !navigator.canShare(e) ? function (e) {
						return cs(this, undefined, undefined, (function () {
							return ps(this, (a => {
								if (ks)
									return [2, ks(e)];
								if (!Es((e => {
									const a = {};
									return a["text/plain"] = e, a
								})(e)))
									throw new Error("writeText() failed");
								return [2]
							}));
						}));
					}(e.text).then(a, s) : navigator.share(e)
			} catch (e) {
				s()
			}
			var userAgent
		}

		const statParentEl = document.createElement("template");
		statParentEl.innerHTML = `
				<div class="statistic-container">
					<div class="statistic"></div>
					<div class="label"></div>
				</div>
			`;

		const statEl = document.createElement("template");
		statEl.innerHTML = `
      <style>
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 16px 0; 
        }
        h1 {
            font-weight: 700;
            font-size: 16px;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            text-align: center;
            margin-bottom: 10px;
        }
      
        #statistics {
            display: flex;
            margin-bottom: 
        }
    
        .statistic-container {
            flex: 1;
        }
    
        .statistic-container .statistic {
            font-size: 36px;
            font-weight: 400;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            letter-spacing: 0.05em;
            font-variant-numeric: proportional-nums;
        }
    
        .statistic.timer {
            font-variant-numeric: initial;
        }
    
        .statistic-container .label {
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
    
        #guess-distribution {
            width: 80%;
        }
    
        .graph-container {
            width: 100%;
            height: 20px;
            display: flex;
            align-items: center;
            padding-bottom: 4px;
            font-size: 14px;
            line-height: 20px;
        }
    
        .graph-container .graph {
            width: 100%;
            height: 100%;
            padding-left: 4px;
        }
    
        .graph-container .graph .graph-bar {
            height: 100%;
            /* Assume no wins */
            width: 0%;
            position: relative;
            background-color: var(--color-absent);
            display: flex;
            justify-content: center;
        }
    
        .graph-container .graph .graph-bar.highlight {
            background-color: var(--color-correct);
        }
    
        .graph-container .graph .graph-bar.align-right {
            justify-content: flex-end;
            padding-right: 8px;
        }
    
        .graph-container .graph .num-guesses {
            font-weight: bold;
            color: var(--tile-text-color);
        }
    
        #statistics,
        #guess-distribution {
            padding-bottom: 10px;
        }
    
        .footer {
            display: flex;
            width: 100%;
        }
    
        .countdown {
            border-right: 1px solid var(--color-tone-1);
            padding-right: 12px;
            width: 50%;
        }
    
        .share {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-left: 12px;
            width: 50%;
        }
    
        .no-data {
            text-align: center;
        }
    
        button#share-button {
            background-color: var(--key-bg-correct);
            color: var(--key-evaluated-text-color);
            font-family: inherit;
            font-weight: bold;
            border-radius: 4px;
            cursor: pointer;
            border: none;
            user-select: none;
            display: flex;
            justify-content: center;
            align-items: center;
            text-transform: uppercase;
            -webkit-tap-highlight-color: rgb(0,0,0,0.3);
            width: 80%;
            font-size: 20px;
            height: 52px;
            -webkit-filter: brightness(100%);
        }
        button#share-button:hover {
            opacity: 0.9;
        }
        button#share-button game-icon {
            width: 24px;
            height: 24px;
            padding-left: 8px;
        }
      </style>
    
      <div class="container">
        <h1>Statistics</h1>
        <div id="statistics"></div>
        <h1>Guess Distribution</h1>
        <div id="guess-distribution"></div>
        <div class="footer"></div>
      </div>
    `;

		const statGraphParentEl = document.createElement("template");
		statGraphParentEl.innerHTML = `
					<div class="graph-container">
						<div class="guess"></div>
						<div class="graph">
							<div class="graph-bar">
								<div class="num-guesses">
							</div>
						</div>
						</div>
					</div>
			`;
		const countdownShareEl = document.createElement("template");
		countdownShareEl.innerHTML = `
				<div class="countdown">
					<h1>Next WORDLE</h1>
					<div id="timer">
						<div class="statistic-container">
							<div class="statistic timer">
								<countdown-timer></countdown-timer>
							</div>
						</div>
					</div>
				</div>
				<div class="share">
					<button id="share-button">
						Share <game-icon icon="share"></game-icon>
					</button>
				</div>
			`;
		const statStrings = {
			currentStreak: "Current Streak",
			maxStreak: "Max Streak",
			winPercentage: "Win %",
			gamesPlayed: "Played",
			gamesWon: "Won",
			averageGuesses: "Av. Guesses"
		};

		const gameStats = (e => {
			r(t, e);
			const a = h(t);

			function t() {
				let e;
				return s(this, t), n(p(e = a.call(this)), "stats", {}), n(p(e), "gameApp", undefined), e.attachShadow({
					mode: "open"
				}), e.stats = Xa(), e
			}
			return o(t, [{
				key: "connectedCallback",
				value() {
					const e = this;
					this.shadowRoot.appendChild(statEl.content.cloneNode(!0));
					const a = this.shadowRoot.getElementById("statistics"),
						s = this.shadowRoot.getElementById("guess-distribution"),
						t = Math.max.apply(Math, g(Object.values(this.stats.guesses)));
					if (Object.values(this.stats.guesses).every((e => 0 === e))) {
						const o = document.createElement("div");
						o.classList.add("no-data"),
							o.innerText = "No Data",
							s.appendChild(o)
					} else
						for (let n = 1; n < Object.keys(this.stats.guesses).length; n++) {
							const r = n,
								i = this.stats.guesses[n],
								l = statGraphParentEl.content.cloneNode(!0),
								d = Math.max(7, Math.round(i / t * 100));
							l.querySelector(".guess").textContent = r;
							const u = l.querySelector(".graph-bar");
							if (u.style.width = "".concat(d, "%"), "number" == typeof i) {
								l.querySelector(".num-guesses").textContent = i,
									i > 0 && u.classList.add("align-right");
								const c = parseInt(this.getAttribute("highlight-guess"), 10);
								c && n === c && u.classList.add("highlight")
							}
							s.appendChild(l)
						}
					if (["gamesPlayed", "winPercentage", "currentStreak", "maxStreak"].forEach((s => {
						const t = statStrings[s],
							o = e.stats[s],
							n = statParentEl.content.cloneNode(!0);
						n.querySelector(".label").textContent = t,
							n.querySelector(".statistic").textContent = o,
							a.appendChild(n)
					})), this.gameApp.gameStatus !== Za) {
						const p = this.shadowRoot.querySelector(".footer"),
							m = countdownShareEl.content.cloneNode(!0);
						p.appendChild(m),
							this.shadowRoot.querySelector("button#share-button").addEventListener("click", (a => {
								a.preventDefault(),
									a.stopPropagation();
								browserShare((e => {
									const a = e.evaluations;
									const s = e.dayOffset;
									const t = e.rowIndex;
									const o = e.isHardMode;
									const n = e.isWin;
									const r = JSON.parse(window.localStorage.getItem(darkModeKey));
									const i = JSON.parse(window.localStorage.getItem(a11yModeKey));
									let l = "Wordle ".concat(s);
									l += " ".concat(n ? t : "X", "/").concat(6),
										o && (l += "*");
									let d = "";
									return a.forEach((e => {
										e && (e.forEach((e => {
											if (e) {
												let a = "";
												switch (e) {
													case Ma:
														a = (e => e ? "🟧" : "🟩")(i);
														break;
													case Ia:
														a = (e => e ? "🟦" : "🟨")(i);
														break;
													case Oa:
														a = (e => e ? "⬛" : "⬜")(r)
												}
												d += a
											}
										})), d += "\n")
									})), {
										text: "".concat(l, "\n\n").concat(d.trimEnd())
									};
								})({
									evaluations: e.gameApp.evaluations,
									dayOffset: e.gameApp.dayOffset,
									rowIndex: e.gameApp.rowIndex,
									isHardMode: e.gameApp.hardMode,
									isWin: e.gameApp.gameStatus === es
								}), () => {
									e.gameApp.addToast("Copied results to clipboard", 2e3, !0)
								}, () => {
									e.gameApp.addToast("Share failed", 2e3, !0)
								})
							}))
					}
				}
			}]), t;
		})(c(HTMLElement));

		customElements.define("game-stats", gameStats);
		const Rs = document.createElement("template");
		rs.innerHTML = `
    <style>
    :host {
        height: var(--keyboard-height);
    }
    #keyboard {
        margin: 0 8px;
        user-select: none;
    }
    
    .row {
        display: flex;
        width: 100%;
        margin: 0 auto 8px;
        /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */
        touch-action: manipulation;
    }
    
    button {
        font-family: inherit;
      font-weight: bold;
      border: 0;
      padding: 0;
      margin: 0 6px 0 0;
      height: 58px;
      border-radius: 4px;
      cursor: pointer;
      user-select: none;
      background-color: var(--key-bg);
      color: var(--key-text-color);
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      -webkit-tap-highlight-color: rgba(0,0,0,0.3);
    }
  
    button:focus {
        outline: none;
    }
  
    button.fade {
        transition: background-color 0.1s ease, color 0.1s ease;
    }
    
    button:last-of-type {
        margin: 0;
    }
    
    .half {
        flex: 0.5;
    }
    
    .one {
        flex: 1;
    }
  
    .one-and-a-half {
        flex: 1.5;
      font-size: 12px;
    }
    
    .two {
        flex: 2;
    }
  
    button[data-state='correct'] {
        background-color: var(--key-bg-correct);
      color: var(--key-evaluated-text-color);
    }
  
    button[data-state='present'] {
        background-color: var(--key-bg-present);
      color: var(--key-evaluated-text-color);
    }
  
    button[data-state='absent'] {
        background-color: var(--key-bg-absent);
      color: var(--key-evaluated-text-color);
    }
  
    </style>
    <div id=\"keyboard\"></div>
  `;
		const gameSwitch = (e => {
			r(t, e);
			const a = h(t);

			function t() {
				let e;
				return s(this, t), (e = a.call(this)).attachShadow({
					mode: "open"
				}), e
			}
			return o(t, [{
				key: "connectedCallback",
				value() {
					const e = this;
					this.shadowRoot.appendChild(Rs.content.cloneNode(!0)),
						this.shadowRoot.querySelector(".container").addEventListener("click", (a => {
							a.stopPropagation(),
								e.hasAttribute("checked") ? e.removeAttribute("checked") : e.setAttribute("checked", ""),
								e.dispatchEvent(new CustomEvent("game-switch-change", {
									bubbles: !0,
									composed: !0,
									detail: {
										name: e.getAttribute("name"),
										checked: e.hasAttribute("checked"),
										disabled: e.hasAttribute("disabled")
									}
								}))
						}))
				}
			}], [{
				key: "observedAttributes",
				get() {
					return ["checked"]
				}
			}]), t;
		})(c(HTMLElement));
		customElements.define("game-switch", gameSwitch);
		const $s = document.createElement("template");
		$s.innerHTML = `
    <style>
    .instructions {
        font-size: 14px;
        color: var(--color-tone-1)
    }
  
    .examples {
        border-bottom: 1px solid var(--color-tone-4);
        border-top: 1px solid var(--color-tone-4);
    }
  
    .example {
        margin-top: 24px;
        margin-bottom: 24px;
    }
  
    game-tile {
        width: 40px;
        height: 40px;
    }
  
    :host([page]) section {
        padding: 16px;
        padding-top: 0px;
    }
  
    </style>
    <section>
      <div class="instructions">
        <p>Guess the <strong>WORDLE</strong> in 6 tries.</p>
        <p>Each guess must be a valid 5 letter word. Hit the enter button to submit.</p>
        <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
        <div class="examples">
          <p><strong>Examples</strong></p>
          <div class="example">
            <div class="row">
              <game-tile letter="w" evaluation="correct" reveal></game-tile>
              <game-tile letter="e"></game-tile>
              <game-tile letter="a"></game-tile>
              <game-tile letter="r"></game-tile>
              <game-tile letter="y"></game-tile>
            </div>
            <p>The letter <strong>W</strong> is in the word and in the correct spot.</p>
          </div>
          <div class="example">
            <div class="row">
              <game-tile letter="p"></game-tile>
              <game-tile letter="i" evaluation="present" reveal></game-tile>
              <game-tile letter="l"></game-tile>
              <game-tile letter="l"></game-tile>
              <game-tile letter="s"></game-tile>
            </div>
            <p>The letter <strong>I</strong> is in the word but in the wrong spot.</p>
          </div>
          <div class="example">
            <div class="row">
              <game-tile letter="v"></game-tile>
              <game-tile letter="a"></game-tile>
              <game-tile letter="g"></game-tile>
              <game-tile letter="u" evaluation="absent" reveal></game-tile>
              <game-tile letter="e"></game-tile>
            </div>
            <p>The letter <strong>U</strong> is not in the word in any spot.</p>
          </div>
        </div>
        <p><strong>A new WORDLE will be available each day!<strong></p>
      </div>
    </section>
  `;
		const gameHelp = (e => {
			r(t, e);
			const a = h(t);

			function t() {
				let e;
				return s(this, t), (e = a.call(this)).attachShadow({
					mode: "open"
				}), e
			}
			return o(t, [{
				key: "connectedCallback",
				value() {
					this.shadowRoot.appendChild($s.content.cloneNode(!0))
				}
			}]), t;
		})(c(HTMLElement));
		customElements.define("game-help", gameHelp);
		const Ns = document.createElement("template");
		Ns.innerHTML = `
    <style>
      .overlay {
          display: none;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          justify-content: center;
          background-color: var(--color-background);
          animation: SlideIn 100ms linear;
          z-index: 2000;
      }
  
      :host([open]) .overlay {
          display: flex;
      }
  
      .content {
          position: relative;
          color: var(--color-tone-1);
          padding: 0 32px;
          max-width: var(--game-max-width);
          width: 100%;
          overflow-y: auto;
          height: 100%;
          display: flex;
          flex-direction: column;
      }
  
      .content-container {
          height: 100%;
      }
  
      .overlay.closing {
          animation: SlideOut 150ms linear;
      }
  
      header {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
      }
  
      h1 {
          font-weight: 700;
          font-size: 16px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          text-align: center;
          margin-bottom: 10px;
      }
  
      game-icon {
          position: absolute;
          right: 0;
          user-select: none;
          cursor: pointer;
      }
  
      @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
          .content {
            max-width: 100%;
            padding: 0;
        }
        game-icon {
            padding: 0 16px;
        }
      }
  
      @keyframes SlideIn {
          0% {
            transform: translateY(30px);
            opacity: 0;
        }
        100% {
            transform: translateY(0px);
            opacity: 1;
        }
      }
      @keyframes SlideOut {
          0% {
            transform: translateY(0px);
            opacity: 1;
        }
        90% {
            opacity: 0;
        }
        100% {
            opacity: 0;
            transform: translateY(60px);
        }
      }
    </style>
    <div class="overlay">
      <div class="content">
        <header>
          <h1><slot></slot></h1>
          <game-icon icon="close"></game-icon>
        </header>
        <div class="content-container">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  `;
		const gamePage = (e => {
			r(t, e);
			const a = h(t);

			function t() {
				let e;
				return s(this, t), (e = a.call(this)).attachShadow({
					mode: "open"
				}), e
			}
			return o(t, [{
				key: "connectedCallback",
				value() {
					const e = this;
					this.shadowRoot.appendChild(Ns.content.cloneNode(!0)),
						this.shadowRoot.querySelector("game-icon").addEventListener("click", (a => {
							e.shadowRoot.querySelector(".overlay").classList.add("closing")
						})),
						this.shadowRoot.addEventListener("animationend", (({
							animationName
						}) => {
							"SlideOut" === animationName && (e.shadowRoot.querySelector(".overlay").classList.remove("closing"), Array.from(e.childNodes).forEach((a => {
								e.removeChild(a)
							})), e.removeAttribute("open"))
						}))
				}
			}]), t;
		})(c(HTMLElement));
		customElements.define("game-page", gamePage);
		const icon = document.createElement("template");
		icon.innerHTML = `
		<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
      <path fill=var(--color-tone-3) />
    </svg>`;

		const iconPaths = {
			help: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
			settings: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z",
			backspace: "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z",
			close: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
			share: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
			statistics: "M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"
		};

		const gameIcon = (e => {
			r(t, e);
			const a = h(t);

			function t() {
				let e;
				return s(this, t), (e = a.call(this)).attachShadow({
					mode: "open"
				}), e
			}
			return o(t, [{
				key: "connectedCallback",
				value() {
					this.shadowRoot.appendChild(icon.content.cloneNode(!0));
					const e = this.getAttribute("icon");
					this.shadowRoot.querySelector("path").setAttribute("d", iconPaths[e]),
						"backspace" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--color-tone-1)"),
						"share" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--white)")
				}
			}]), t;
		})(c(HTMLElement));

		customElements.define("game-icon", gameIcon);
		const Ws = document.createElement("template");
		Ws.innerHTML = `<div id="timer"></div>`;

		const countdownTimer = (e => {
			r(t, e);
			const a = h(t);

			function t() {
				let e;
				s(this, t),
					n(p(e = a.call(this)), "targetEpochMS", undefined),
					n(p(e), "intervalId", undefined),
					n(p(e), "$timer", undefined),
					e.attachShadow({
						mode: "open"
					});
				const o = new Date;
				return o.setDate(o.getDate() + 1), o.setHours(0, 0, 0, 0), e.targetEpochMS = o.getTime(), e
			}
			return o(t, [{
				key: "padDigit",
				value(e) {
					return e.toString().padStart(2, "0")
				}
			}, {
				key: "updateTimer", value: function () {
					let countdown,
						now = (new Date).getTime(),
						ms = Math.floor(this.targetEpochMS - now);

					if (ms <= 0) {
						countdown = "00:00:00";
					}
					else {
						let hours = Math.floor(ms % 86_400_000 / 3_600_000),
							mins = Math.floor(ms % 3_600_000 / 60_000),
							secs = Math.floor(ms % 60_000 / 1_000);
						countdown = `${this.padDigit(hours)}:${this.padDigit(mins)}:${this.padDigit(secs)}`
					}
					this.$timer.textContent = countdown
				}
			}, {
				key: "connectedCallback",
				value() {
					const e = this;
					this.shadowRoot.appendChild(Ws.content.cloneNode(!0)),
						this.$timer = this.shadowRoot.querySelector("#timer"),
						this.intervalId = setInterval((() => {
							e.updateTimer()
						}), 200)
				}
			}, {
				key: "disconnectedCallback",
				value() {
					clearInterval(this.intervalId)
				}
			}]), t;
		})(c(HTMLElement));

		return customElements.define("countdown-timer", countdownTimer),
		wordle.CountdownTimer = countdownTimer,
		wordle.GameApp = gameApp,
		wordle.GameHelp = gameHelp,
		wordle.GameIcon = gameIcon,
		wordle.GameKeyboard = gameKeyboard,
		wordle.GameModal = gameModal,
		wordle.GamePage = gamePage,
		wordle.GameRow = gameRow,
		wordle.GameSettings = gameSettings,
		wordle.GameStats = gameStats,
		wordle.GameSwitch = gameSwitch,
		wordle.GameThemeManager = gameThemeManager,
		wordle.GameTile = GameTile,
		wordle.GameToast = gameToast,
		wordle
	}
);