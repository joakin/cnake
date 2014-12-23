if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}

;(function(){
var k, aa = this;
function r(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
function ba(a) {
  return "string" == typeof a;
}
function ca(a) {
  return "function" == r(a);
}
var da = "closure_uid_" + (1E9 * Math.random() >>> 0), fa = 0;
function ha(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function ia(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
}
function ja(a, b, c) {
  ja = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ha : ia;
  return ja.apply(null, arguments);
}
;function la(a) {
  return Array.prototype.join.call(arguments, "");
}
function ma(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
;function na(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function oa(a, b) {
  null != a && this.append.apply(this, arguments);
}
oa.prototype.Za = "";
oa.prototype.append = function(a, b, c) {
  this.Za += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Za += arguments[d];
    }
  }
  return this;
};
oa.prototype.toString = function() {
  return this.Za;
};
var pa = Array.prototype, qa = pa.indexOf ? function(a, b, c) {
  return pa.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (ba(a)) {
    return ba(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
};
function sa(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
;function ta() {
  throw Error("No *print-fn* fn set for evaluation environment");
}
var ua = !0, wa = null;
function ya() {
  return new t(null, 5, [za, !0, Ba, !0, Ca, !1, Ea, !1, Fa, null], null);
}
function u(a) {
  return null != a && !1 !== a;
}
function Ga(a) {
  return null == a;
}
function Ha(a) {
  return u(a) ? !1 : !0;
}
function v(a, b) {
  return a[r(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function Ja(a) {
  return null == a ? null : a.constructor;
}
function w(a, b) {
  var c = Ja(b), c = u(u(c) ? c.Ha : c) ? c.Ga : r(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function Ka(a) {
  var b = a.Ga;
  return u(b) ? b : "" + y(a);
}
var La = "undefined" !== typeof Symbol && "function" === r(Symbol) ? Symbol.Gc : "@@iterator";
function Na(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var Pa = function() {
  function a(a, b) {
    function c(a, b) {
      a.push(b);
      return a;
    }
    var g = [];
    return Oa.c ? Oa.c(c, g, b) : Oa.call(null, c, g, b);
  }
  function b(a) {
    return c.b(null, a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, 0, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), Qa = {}, Ra = {};
function Sa(a) {
  if (a ? a.J : a) {
    return a.J(a);
  }
  var b;
  b = Sa[r(null == a ? null : a)];
  if (!b && (b = Sa._, !b)) {
    throw w("ICounted.-count", a);
  }
  return b.call(null, a);
}
function Ta(a) {
  if (a ? a.N : a) {
    return a.N(a);
  }
  var b;
  b = Ta[r(null == a ? null : a)];
  if (!b && (b = Ta._, !b)) {
    throw w("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
function Ua(a, b) {
  if (a ? a.L : a) {
    return a.L(a, b);
  }
  var c;
  c = Ua[r(null == a ? null : a)];
  if (!c && (c = Ua._, !c)) {
    throw w("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var Va = {}, A = function() {
  function a(a, b, c) {
    if (a ? a.Z : a) {
      return a.Z(a, b, c);
    }
    var g;
    g = A[r(null == a ? null : a)];
    if (!g && (g = A._, !g)) {
      throw w("IIndexed.-nth", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.M : a) {
      return a.M(a, b);
    }
    var c;
    c = A[r(null == a ? null : a)];
    if (!c && (c = A._, !c)) {
      throw w("IIndexed.-nth", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}(), Wa = {};
function Xa(a) {
  if (a ? a.S : a) {
    return a.S(a);
  }
  var b;
  b = Xa[r(null == a ? null : a)];
  if (!b && (b = Xa._, !b)) {
    throw w("ISeq.-first", a);
  }
  return b.call(null, a);
}
function $a(a) {
  if (a ? a.X : a) {
    return a.X(a);
  }
  var b;
  b = $a[r(null == a ? null : a)];
  if (!b && (b = $a._, !b)) {
    throw w("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var ab = {}, bb = {}, C = function() {
  function a(a, b, c) {
    if (a ? a.D : a) {
      return a.D(a, b, c);
    }
    var g;
    g = C[r(null == a ? null : a)];
    if (!g && (g = C._, !g)) {
      throw w("ILookup.-lookup", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.H : a) {
      return a.H(a, b);
    }
    var c;
    c = C[r(null == a ? null : a)];
    if (!c && (c = C._, !c)) {
      throw w("ILookup.-lookup", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}();
function cb(a, b) {
  if (a ? a.Db : a) {
    return a.Db(a, b);
  }
  var c;
  c = cb[r(null == a ? null : a)];
  if (!c && (c = cb._, !c)) {
    throw w("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function db(a, b, c) {
  if (a ? a.ab : a) {
    return a.ab(a, b, c);
  }
  var d;
  d = db[r(null == a ? null : a)];
  if (!d && (d = db._, !d)) {
    throw w("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var eb = {};
function fb(a, b) {
  if (a ? a.Hb : a) {
    return a.Hb(a, b);
  }
  var c;
  c = fb[r(null == a ? null : a)];
  if (!c && (c = fb._, !c)) {
    throw w("IMap.-dissoc", a);
  }
  return c.call(null, a, b);
}
var gb = {};
function hb(a) {
  if (a ? a.Ib : a) {
    return a.Ib();
  }
  var b;
  b = hb[r(null == a ? null : a)];
  if (!b && (b = hb._, !b)) {
    throw w("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function ib(a) {
  if (a ? a.Qb : a) {
    return a.Qb();
  }
  var b;
  b = ib[r(null == a ? null : a)];
  if (!b && (b = ib._, !b)) {
    throw w("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var jb = {}, kb = {};
function lb(a, b, c) {
  if (a ? a.Jb : a) {
    return a.Jb(a, b, c);
  }
  var d;
  d = lb[r(null == a ? null : a)];
  if (!d && (d = lb._, !d)) {
    throw w("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function mb(a) {
  if (a ? a.Ra : a) {
    return a.Ra(a);
  }
  var b;
  b = mb[r(null == a ? null : a)];
  if (!b && (b = mb._, !b)) {
    throw w("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var nb = {};
function ob(a) {
  if (a ? a.u : a) {
    return a.u(a);
  }
  var b;
  b = ob[r(null == a ? null : a)];
  if (!b && (b = ob._, !b)) {
    throw w("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var qb = {};
function rb(a, b) {
  if (a ? a.A : a) {
    return a.A(a, b);
  }
  var c;
  c = rb[r(null == a ? null : a)];
  if (!c && (c = rb._, !c)) {
    throw w("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var sb = {}, tb = function() {
  function a(a, b, c) {
    if (a ? a.Q : a) {
      return a.Q(a, b, c);
    }
    var g;
    g = tb[r(null == a ? null : a)];
    if (!g && (g = tb._, !g)) {
      throw w("IReduce.-reduce", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.P : a) {
      return a.P(a, b);
    }
    var c;
    c = tb[r(null == a ? null : a)];
    if (!c && (c = tb._, !c)) {
      throw w("IReduce.-reduce", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}();
function ub(a, b) {
  if (a ? a.C : a) {
    return a.C(a, b);
  }
  var c;
  c = ub[r(null == a ? null : a)];
  if (!c && (c = ub._, !c)) {
    throw w("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function vb(a) {
  if (a ? a.G : a) {
    return a.G(a);
  }
  var b;
  b = vb[r(null == a ? null : a)];
  if (!b && (b = vb._, !b)) {
    throw w("IHash.-hash", a);
  }
  return b.call(null, a);
}
var wb = {};
function xb(a) {
  if (a ? a.I : a) {
    return a.I(a);
  }
  var b;
  b = xb[r(null == a ? null : a)];
  if (!b && (b = xb._, !b)) {
    throw w("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var yb = {}, zb = {};
function Bb(a) {
  if (a ? a.rb : a) {
    return a.rb(a);
  }
  var b;
  b = Bb[r(null == a ? null : a)];
  if (!b && (b = Bb._, !b)) {
    throw w("IReversible.-rseq", a);
  }
  return b.call(null, a);
}
function E(a, b) {
  if (a ? a.Ub : a) {
    return a.Ub(0, b);
  }
  var c;
  c = E[r(null == a ? null : a)];
  if (!c && (c = E._, !c)) {
    throw w("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var Cb = {};
function Db(a, b, c) {
  if (a ? a.w : a) {
    return a.w(a, b, c);
  }
  var d;
  d = Db[r(null == a ? null : a)];
  if (!d && (d = Db._, !d)) {
    throw w("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function Eb(a, b, c) {
  if (a ? a.Tb : a) {
    return a.Tb(0, b, c);
  }
  var d;
  d = Eb[r(null == a ? null : a)];
  if (!d && (d = Eb._, !d)) {
    throw w("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function Fb(a) {
  if (a ? a.Sa : a) {
    return a.Sa(a);
  }
  var b;
  b = Fb[r(null == a ? null : a)];
  if (!b && (b = Fb._, !b)) {
    throw w("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function Gb(a, b) {
  if (a ? a.fb : a) {
    return a.fb(a, b);
  }
  var c;
  c = Gb[r(null == a ? null : a)];
  if (!c && (c = Gb._, !c)) {
    throw w("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function Hb(a) {
  if (a ? a.gb : a) {
    return a.gb(a);
  }
  var b;
  b = Hb[r(null == a ? null : a)];
  if (!b && (b = Hb._, !b)) {
    throw w("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function Ib(a, b, c) {
  if (a ? a.eb : a) {
    return a.eb(a, b, c);
  }
  var d;
  d = Ib[r(null == a ? null : a)];
  if (!d && (d = Ib._, !d)) {
    throw w("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function Jb(a, b, c) {
  if (a ? a.Sb : a) {
    return a.Sb(0, b, c);
  }
  var d;
  d = Jb[r(null == a ? null : a)];
  if (!d && (d = Jb._, !d)) {
    throw w("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function Kb(a) {
  if (a ? a.Nb : a) {
    return a.Nb();
  }
  var b;
  b = Kb[r(null == a ? null : a)];
  if (!b && (b = Kb._, !b)) {
    throw w("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function Lb(a) {
  if (a ? a.Fb : a) {
    return a.Fb(a);
  }
  var b;
  b = Lb[r(null == a ? null : a)];
  if (!b && (b = Lb._, !b)) {
    throw w("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function Mb(a) {
  if (a ? a.Gb : a) {
    return a.Gb(a);
  }
  var b;
  b = Mb[r(null == a ? null : a)];
  if (!b && (b = Mb._, !b)) {
    throw w("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function Nb(a) {
  if (a ? a.Eb : a) {
    return a.Eb(a);
  }
  var b;
  b = Nb[r(null == a ? null : a)];
  if (!b && (b = Nb._, !b)) {
    throw w("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function Pb(a, b) {
  if (a ? a.lc : a) {
    return a.lc(a, b);
  }
  var c;
  c = Pb[r(null == a ? null : a)];
  if (!c && (c = Pb._, !c)) {
    throw w("IReset.-reset!", a);
  }
  return c.call(null, a, b);
}
function Qb(a) {
  if (a ? a.bb : a) {
    return a.bb(a);
  }
  var b;
  b = Qb[r(null == a ? null : a)];
  if (!b && (b = Qb._, !b)) {
    throw w("IIterable.-iterator", a);
  }
  return b.call(null, a);
}
function Rb(a) {
  this.uc = a;
  this.p = 0;
  this.h = 1073741824;
}
Rb.prototype.Ub = function(a, b) {
  return this.uc.append(b);
};
function Sb(a) {
  var b = new oa;
  a.w(null, new Rb(b), ya());
  return "" + y(b);
}
var Tb = "undefined" !== typeof Math.imul && 0 !== (Math.imul.b ? Math.imul.b(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul.b ? Math.imul.b(a, b) : Math.imul.call(null, a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function Ub(a) {
  a = Tb(a, 3432918353);
  return Tb(a << 15 | a >>> -15, 461845907);
}
function Vb(a, b) {
  var c = a ^ b;
  return Tb(c << 13 | c >>> -13, 5) + 3864292196;
}
function Wb(a, b) {
  var c = a ^ b, c = Tb(c ^ c >>> 16, 2246822507), c = Tb(c ^ c >>> 13, 3266489909);
  return c ^ c >>> 16;
}
var Xb = {}, Yb = 0;
function Zb(a) {
  255 < Yb && (Xb = {}, Yb = 0);
  var b = Xb[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = Tb(31, d) + a.charCodeAt(c), c = e
            } else {
              b = d;
              break a;
            }
          }
          b = void 0;
        } else {
          b = 0;
        }
      } else {
        b = 0;
      }
    }
    Xb[a] = b;
    Yb += 1;
  }
  return a = b;
}
function $b(a) {
  a && (a.h & 4194304 || a.yc) ? a = a.G(null) : "number" === typeof a ? a = (Math.floor.a ? Math.floor.a(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Zb(a), 0 !== a && (a = Ub(a), a = Vb(0, a), a = Wb(a, 4))) : a = a instanceof Date ? a.valueOf() : null == a ? 0 : vb(a);
  return a;
}
function ac(a) {
  var b;
  b = a.name;
  var c;
  a: {
    c = 1;
    for (var d = 0;;) {
      if (c < b.length) {
        var e = c + 2, d = Vb(d, Ub(b.charCodeAt(c - 1) | b.charCodeAt(c) << 16));
        c = e;
      } else {
        c = d;
        break a;
      }
    }
    c = void 0;
  }
  c = 1 === (b.length & 1) ? c ^ Ub(b.charCodeAt(b.length - 1)) : c;
  b = Wb(c, Tb(2, b.length));
  a = Zb(a.W);
  return b ^ a + 2654435769 + (b << 6) + (b >> 2);
}
function bc(a, b) {
  if (a.ma === b.ma) {
    return 0;
  }
  var c = Ha(a.W);
  if (u(c ? b.W : c)) {
    return-1;
  }
  if (u(a.W)) {
    if (Ha(b.W)) {
      return 1;
    }
    c = sa(a.W, b.W);
    return 0 === c ? sa(a.name, b.name) : c;
  }
  return sa(a.name, b.name);
}
function F(a, b, c, d, e) {
  this.W = a;
  this.name = b;
  this.ma = c;
  this.Qa = d;
  this.ga = e;
  this.h = 2154168321;
  this.p = 4096;
}
k = F.prototype;
k.w = function(a, b) {
  return E(b, this.ma);
};
k.G = function() {
  var a = this.Qa;
  return null != a ? a : this.Qa = a = ac(this);
};
k.A = function(a, b) {
  return new F(this.W, this.name, this.ma, this.Qa, b);
};
k.u = function() {
  return this.ga;
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return C.c(c, this, null);
      case 3:
        return C.c(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return C.c(c, this, null);
  };
  a.c = function(a, c, d) {
    return C.c(c, this, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Na(b)));
};
k.a = function(a) {
  return C.c(a, this, null);
};
k.b = function(a, b) {
  return C.c(a, this, b);
};
k.C = function(a, b) {
  return b instanceof F ? this.ma === b.ma : !1;
};
k.toString = function() {
  return this.ma;
};
function G(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.h & 8388608 || a.Ac)) {
    return a.I(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new cc(a, 0);
  }
  if (v(wb, a)) {
    return xb(a);
  }
  throw Error([y(a), y(" is not ISeqable")].join(""));
}
function I(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.h & 64 || a.cb)) {
    return a.S(null);
  }
  a = G(a);
  return null == a ? null : Xa(a);
}
function J(a) {
  return null != a ? a && (a.h & 64 || a.cb) ? a.X(null) : (a = G(a)) ? $a(a) : K : K;
}
function M(a) {
  return null == a ? null : a && (a.h & 128 || a.Rb) ? a.$(null) : G(J(a));
}
var dc = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || ub(a, b);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.b(a, d)) {
          if (M(e)) {
            a = d, d = I(e), e = M(e);
          } else {
            return b.b(d, I(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.n = 2;
    a.g = function(a) {
      var b = I(a);
      a = M(a);
      var d = I(a);
      a = J(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.n = 2;
  b.g = c.g;
  b.a = function() {
    return!0;
  };
  b.b = a;
  b.e = c.e;
  return b;
}();
function ec(a) {
  this.v = a;
}
ec.prototype.next = function() {
  if (null != this.v) {
    var a = I(this.v);
    this.v = M(this.v);
    return{done:!1, value:a};
  }
  return{done:!0, value:null};
};
function gc(a) {
  return new ec(G(a));
}
function hc(a, b) {
  var c = Ub(a), c = Vb(0, c);
  return Wb(c, b);
}
function ic(a) {
  var b = 0, c = 1;
  for (a = G(a);;) {
    if (null != a) {
      b += 1, c = Tb(31, c) + $b(I(a)) | 0, a = M(a);
    } else {
      return hc(c, b);
    }
  }
}
function jc(a) {
  var b = 0, c = 0;
  for (a = G(a);;) {
    if (null != a) {
      b += 1, c = c + $b(I(a)) | 0, a = M(a);
    } else {
      return hc(c, b);
    }
  }
}
Ra["null"] = !0;
Sa["null"] = function() {
  return 0;
};
Date.prototype.C = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
ub.number = function(a, b) {
  return a === b;
};
nb["function"] = !0;
ob["function"] = function() {
  return null;
};
Qa["function"] = !0;
vb._ = function(a) {
  return a[da] || (a[da] = ++fa);
};
function kc(a) {
  this.F = a;
  this.p = 0;
  this.h = 32768;
}
kc.prototype.Ra = function() {
  return this.F;
};
function lc(a) {
  return a instanceof kc;
}
function O(a) {
  return mb(a);
}
var mc = function() {
  function a(a, b, c, d) {
    for (var l = Sa(a);;) {
      if (d < l) {
        var m = A.b(a, d);
        c = b.b ? b.b(c, m) : b.call(null, c, m);
        if (lc(c)) {
          return mb(c);
        }
        d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    var d = Sa(a), l = c;
    for (c = 0;;) {
      if (c < d) {
        var m = A.b(a, c), l = b.b ? b.b(l, m) : b.call(null, l, m);
        if (lc(l)) {
          return mb(l);
        }
        c += 1;
      } else {
        return l;
      }
    }
  }
  function c(a, b) {
    var c = Sa(a);
    if (0 === c) {
      return b.i ? b.i() : b.call(null);
    }
    for (var d = A.b(a, 0), l = 1;;) {
      if (l < c) {
        var m = A.b(a, l), d = b.b ? b.b(d, m) : b.call(null, d, m);
        if (lc(d)) {
          return mb(d);
        }
        l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, g, h) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.c = b;
  d.l = a;
  return d;
}(), nc = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        var m = a[d];
        c = b.b ? b.b(c, m) : b.call(null, c, m);
        if (lc(c)) {
          return mb(c);
        }
        d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    var d = a.length, l = c;
    for (c = 0;;) {
      if (c < d) {
        var m = a[c], l = b.b ? b.b(l, m) : b.call(null, l, m);
        if (lc(l)) {
          return mb(l);
        }
        c += 1;
      } else {
        return l;
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if (0 === a.length) {
      return b.i ? b.i() : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        var m = a[l], d = b.b ? b.b(d, m) : b.call(null, d, m);
        if (lc(d)) {
          return mb(d);
        }
        l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, g, h) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.c = b;
  d.l = a;
  return d;
}();
function oc(a) {
  return a ? a.h & 2 || a.dc ? !0 : a.h ? !1 : v(Ra, a) : v(Ra, a);
}
function pc(a) {
  return a ? a.h & 16 || a.Ob ? !0 : a.h ? !1 : v(Va, a) : v(Va, a);
}
function qc(a, b) {
  this.d = a;
  this.k = b;
}
qc.prototype.wb = function() {
  return this.k < this.d.length;
};
qc.prototype.next = function() {
  var a = this.d[this.k];
  this.k += 1;
  return a;
};
function cc(a, b) {
  this.d = a;
  this.k = b;
  this.h = 166199550;
  this.p = 8192;
}
k = cc.prototype;
k.toString = function() {
  return Sb(this);
};
k.M = function(a, b) {
  var c = b + this.k;
  return c < this.d.length ? this.d[c] : null;
};
k.Z = function(a, b, c) {
  a = b + this.k;
  return a < this.d.length ? this.d[a] : c;
};
k.bb = function() {
  return new qc(this.d, this.k);
};
k.$ = function() {
  return this.k + 1 < this.d.length ? new cc(this.d, this.k + 1) : null;
};
k.J = function() {
  return this.d.length - this.k;
};
k.rb = function() {
  var a = Sa(this);
  return 0 < a ? new rc(this, a - 1, null) : null;
};
k.G = function() {
  return ic(this);
};
k.C = function(a, b) {
  return sc.b ? sc.b(this, b) : sc.call(null, this, b);
};
k.N = function() {
  return K;
};
k.P = function(a, b) {
  return nc.l(this.d, b, this.d[this.k], this.k + 1);
};
k.Q = function(a, b, c) {
  return nc.l(this.d, b, c, this.k);
};
k.S = function() {
  return this.d[this.k];
};
k.X = function() {
  return this.k + 1 < this.d.length ? new cc(this.d, this.k + 1) : K;
};
k.I = function() {
  return this;
};
k.L = function(a, b) {
  return P.b ? P.b(b, this) : P.call(null, b, this);
};
cc.prototype[La] = function() {
  return gc(this);
};
var tc = function() {
  function a(a, b) {
    return b < a.length ? new cc(a, b) : null;
  }
  function b(a) {
    return c.b(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), N = function() {
  function a(a, b) {
    return tc.b(a, b);
  }
  function b(a) {
    return tc.b(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function rc(a, b, c) {
  this.nb = a;
  this.k = b;
  this.m = c;
  this.h = 32374990;
  this.p = 8192;
}
k = rc.prototype;
k.toString = function() {
  return Sb(this);
};
k.u = function() {
  return this.m;
};
k.$ = function() {
  return 0 < this.k ? new rc(this.nb, this.k - 1, null) : null;
};
k.J = function() {
  return this.k + 1;
};
k.G = function() {
  return ic(this);
};
k.C = function(a, b) {
  return sc.b ? sc.b(this, b) : sc.call(null, this, b);
};
k.N = function() {
  var a = this.m;
  return uc.b ? uc.b(K, a) : uc.call(null, K, a);
};
k.P = function(a, b) {
  return Q.b ? Q.b(b, this) : Q.call(null, b, this);
};
k.Q = function(a, b, c) {
  return Q.c ? Q.c(b, c, this) : Q.call(null, b, c, this);
};
k.S = function() {
  return A.b(this.nb, this.k);
};
k.X = function() {
  return 0 < this.k ? new rc(this.nb, this.k - 1, null) : K;
};
k.I = function() {
  return this;
};
k.A = function(a, b) {
  return new rc(this.nb, this.k, b);
};
k.L = function(a, b) {
  return P.b ? P.b(b, this) : P.call(null, b, this);
};
rc.prototype[La] = function() {
  return gc(this);
};
function vc(a) {
  for (;;) {
    var b = M(a);
    if (null != b) {
      a = b;
    } else {
      return I(a);
    }
  }
}
ub._ = function(a, b) {
  return a === b;
};
var xc = function() {
  function a(a, b) {
    return null != a ? Ua(a, b) : Ua(K, b);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (u(e)) {
          a = b.b(a, d), d = I(e), e = M(e);
        } else {
          return b.b(a, d);
        }
      }
    }
    a.n = 2;
    a.g = function(a) {
      var b = I(a);
      a = M(a);
      var d = I(a);
      a = J(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 0:
        return wc;
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.n = 2;
  b.g = c.g;
  b.i = function() {
    return wc;
  };
  b.a = function(a) {
    return a;
  };
  b.b = a;
  b.e = c.e;
  return b;
}();
function R(a) {
  if (null != a) {
    if (a && (a.h & 2 || a.dc)) {
      a = a.J(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (v(Ra, a)) {
            a = Sa(a);
          } else {
            a: {
              a = G(a);
              for (var b = 0;;) {
                if (oc(a)) {
                  a = b + Sa(a);
                  break a;
                }
                a = M(a);
                b += 1;
              }
              a = void 0;
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
var yc = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return G(a) ? I(a) : c;
      }
      if (pc(a)) {
        return A.c(a, b, c);
      }
      if (G(a)) {
        a = M(a), b -= 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b) {
    for (;;) {
      if (null == a) {
        throw Error("Index out of bounds");
      }
      if (0 === b) {
        if (G(a)) {
          return I(a);
        }
        throw Error("Index out of bounds");
      }
      if (pc(a)) {
        return A.b(a, b);
      }
      if (G(a)) {
        var c = M(a), g = b - 1;
        a = c;
        b = g;
      } else {
        throw Error("Index out of bounds");
      }
    }
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}(), T = function() {
  function a(a, b, c) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number.");
    }
    if (null == a) {
      return c;
    }
    if (a && (a.h & 16 || a.Ob)) {
      return a.Z(null, b, c);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : c;
    }
    if (v(Va, a)) {
      return A.b(a, b);
    }
    if (a ? a.h & 64 || a.cb || (a.h ? 0 : v(Wa, a)) : v(Wa, a)) {
      return yc.c(a, b, c);
    }
    throw Error([y("nth not supported on this type "), y(Ka(Ja(a)))].join(""));
  }
  function b(a, b) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number");
    }
    if (null == a) {
      return a;
    }
    if (a && (a.h & 16 || a.Ob)) {
      return a.M(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (v(Va, a)) {
      return A.b(a, b);
    }
    if (a ? a.h & 64 || a.cb || (a.h ? 0 : v(Wa, a)) : v(Wa, a)) {
      return yc.b(a, b);
    }
    throw Error([y("nth not supported on this type "), y(Ka(Ja(a)))].join(""));
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}(), U = function() {
  function a(a, b, c) {
    return null != a ? a && (a.h & 256 || a.Pb) ? a.D(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : v(bb, a) ? C.c(a, b, c) : c : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.h & 256 || a.Pb) ? a.H(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : v(bb, a) ? C.b(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}(), Ac = function() {
  function a(a, b, c) {
    return null != a ? db(a, b, c) : zc([b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, h, l) {
      var m = null;
      3 < arguments.length && (m = N(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, h, m);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.c(a, d, e), u(l)) {
          d = I(l), e = I(M(l)), l = M(M(l));
        } else {
          return a;
        }
      }
    }
    a.n = 3;
    a.g = function(a) {
      var b = I(a);
      a = M(a);
      var d = I(a);
      a = M(a);
      var l = I(a);
      a = J(a);
      return c(b, d, l, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f, g) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.e(b, e, f, N(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.n = 3;
  b.g = c.g;
  b.c = a;
  b.e = c.e;
  return b;
}(), Bc = function() {
  function a(a, b) {
    return null == a ? null : fb(a, b);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.b(a, d);
        if (u(e)) {
          d = I(e), e = M(e);
        } else {
          return a;
        }
      }
    }
    a.n = 2;
    a.g = function(a) {
      var b = I(a);
      a = M(a);
      var d = I(a);
      a = J(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.n = 2;
  b.g = c.g;
  b.a = function(a) {
    return a;
  };
  b.b = a;
  b.e = c.e;
  return b;
}();
function Dc(a) {
  var b = ca(a);
  return u(b) ? b : a ? u(u(null) ? null : a.cc) ? !0 : a.Fc ? !1 : v(Qa, a) : v(Qa, a);
}
function Ec(a, b) {
  this.f = a;
  this.m = b;
  this.p = 0;
  this.h = 393217;
}
k = Ec.prototype;
k.call = function() {
  function a(a, b, c, d, e, f, g, h, l, m, n, s, p, q, x, z, B, H, L, V, S, D) {
    a = this.f;
    return W.qb ? W.qb(a, b, c, d, e, f, g, h, l, m, n, s, p, q, x, z, B, H, L, V, S, D) : W.call(null, a, b, c, d, e, f, g, h, l, m, n, s, p, q, x, z, B, H, L, V, S, D);
  }
  function b(a, b, c, d, e, f, g, h, l, m, n, s, p, q, x, z, B, H, L, V, S) {
    a = this;
    return a.f.xa ? a.f.xa(b, c, d, e, f, g, h, l, m, n, s, p, q, x, z, B, H, L, V, S) : a.f.call(null, b, c, d, e, f, g, h, l, m, n, s, p, q, x, z, B, H, L, V, S);
  }
  function c(a, b, c, d, e, f, g, h, l, m, n, s, p, q, x, z, B, H, L, V) {
    a = this;
    return a.f.wa ? a.f.wa(b, c, d, e, f, g, h, l, m, n, s, p, q, x, z, B, H, L, V) : a.f.call(null, b, c, d, e, f, g, h, l, m, n, s, p, q, x, z, B, H, L, V);
  }
  function d(a, b, c, d, e, f, g, h, l, m, n, s, p, q, x, z, B, H, L) {
    a = this;
    return a.f.va ? a.f.va(b, c, d, e, f, g, h, l, m, n, s, p, q, x, z, B, H, L) : a.f.call(null, b, c, d, e, f, g, h, l, m, n, s, p, q, x, z, B, H, L);
  }
  function e(a, b, c, d, e, f, g, h, l, m, n, s, p, q, x, z, B, H) {
    a = this;
    return a.f.ua ? a.f.ua(b, c, d, e, f, g, h, l, m, n, s, p, q, x, z, B, H) : a.f.call(null, b, c, d, e, f, g, h, l, m, n, s, p, q, x, z, B, H);
  }
  function f(a, b, c, d, e, f, g, h, l, m, n, s, p, q, x, z, B) {
    a = this;
    return a.f.ta ? a.f.ta(b, c, d, e, f, g, h, l, m, n, s, p, q, x, z, B) : a.f.call(null, b, c, d, e, f, g, h, l, m, n, s, p, q, x, z, B);
  }
  function g(a, b, c, d, e, f, g, h, l, m, n, s, p, q, x, z) {
    a = this;
    return a.f.sa ? a.f.sa(b, c, d, e, f, g, h, l, m, n, s, p, q, x, z) : a.f.call(null, b, c, d, e, f, g, h, l, m, n, s, p, q, x, z);
  }
  function h(a, b, c, d, e, f, g, h, l, m, n, s, p, q, x) {
    a = this;
    return a.f.ra ? a.f.ra(b, c, d, e, f, g, h, l, m, n, s, p, q, x) : a.f.call(null, b, c, d, e, f, g, h, l, m, n, s, p, q, x);
  }
  function l(a, b, c, d, e, f, g, h, l, m, n, s, p, q) {
    a = this;
    return a.f.qa ? a.f.qa(b, c, d, e, f, g, h, l, m, n, s, p, q) : a.f.call(null, b, c, d, e, f, g, h, l, m, n, s, p, q);
  }
  function m(a, b, c, d, e, f, g, h, l, m, n, s, p) {
    a = this;
    return a.f.pa ? a.f.pa(b, c, d, e, f, g, h, l, m, n, s, p) : a.f.call(null, b, c, d, e, f, g, h, l, m, n, s, p);
  }
  function n(a, b, c, d, e, f, g, h, l, m, n, s) {
    a = this;
    return a.f.oa ? a.f.oa(b, c, d, e, f, g, h, l, m, n, s) : a.f.call(null, b, c, d, e, f, g, h, l, m, n, s);
  }
  function p(a, b, c, d, e, f, g, h, l, m, n) {
    a = this;
    return a.f.na ? a.f.na(b, c, d, e, f, g, h, l, m, n) : a.f.call(null, b, c, d, e, f, g, h, l, m, n);
  }
  function q(a, b, c, d, e, f, g, h, l, m) {
    a = this;
    return a.f.za ? a.f.za(b, c, d, e, f, g, h, l, m) : a.f.call(null, b, c, d, e, f, g, h, l, m);
  }
  function s(a, b, c, d, e, f, g, h, l) {
    a = this;
    return a.f.ya ? a.f.ya(b, c, d, e, f, g, h, l) : a.f.call(null, b, c, d, e, f, g, h, l);
  }
  function x(a, b, c, d, e, f, g, h) {
    a = this;
    return a.f.ea ? a.f.ea(b, c, d, e, f, g, h) : a.f.call(null, b, c, d, e, f, g, h);
  }
  function z(a, b, c, d, e, f, g) {
    a = this;
    return a.f.R ? a.f.R(b, c, d, e, f, g) : a.f.call(null, b, c, d, e, f, g);
  }
  function B(a, b, c, d, e, f) {
    a = this;
    return a.f.t ? a.f.t(b, c, d, e, f) : a.f.call(null, b, c, d, e, f);
  }
  function H(a, b, c, d, e) {
    a = this;
    return a.f.l ? a.f.l(b, c, d, e) : a.f.call(null, b, c, d, e);
  }
  function L(a, b, c, d) {
    a = this;
    return a.f.c ? a.f.c(b, c, d) : a.f.call(null, b, c, d);
  }
  function V(a, b, c) {
    a = this;
    return a.f.b ? a.f.b(b, c) : a.f.call(null, b, c);
  }
  function S(a, b) {
    a = this;
    return a.f.a ? a.f.a(b) : a.f.call(null, b);
  }
  function Za(a) {
    a = this;
    return a.f.i ? a.f.i() : a.f.call(null);
  }
  var D = null, D = function(D, ea, ga, ka, ra, va, xa, Aa, Da, Ia, Ma, Ya, pb, Ab, Ob, fc, Cc, Vc, Hd, De, Of, ph) {
    switch(arguments.length) {
      case 1:
        return Za.call(this, D);
      case 2:
        return S.call(this, D, ea);
      case 3:
        return V.call(this, D, ea, ga);
      case 4:
        return L.call(this, D, ea, ga, ka);
      case 5:
        return H.call(this, D, ea, ga, ka, ra);
      case 6:
        return B.call(this, D, ea, ga, ka, ra, va);
      case 7:
        return z.call(this, D, ea, ga, ka, ra, va, xa);
      case 8:
        return x.call(this, D, ea, ga, ka, ra, va, xa, Aa);
      case 9:
        return s.call(this, D, ea, ga, ka, ra, va, xa, Aa, Da);
      case 10:
        return q.call(this, D, ea, ga, ka, ra, va, xa, Aa, Da, Ia);
      case 11:
        return p.call(this, D, ea, ga, ka, ra, va, xa, Aa, Da, Ia, Ma);
      case 12:
        return n.call(this, D, ea, ga, ka, ra, va, xa, Aa, Da, Ia, Ma, Ya);
      case 13:
        return m.call(this, D, ea, ga, ka, ra, va, xa, Aa, Da, Ia, Ma, Ya, pb);
      case 14:
        return l.call(this, D, ea, ga, ka, ra, va, xa, Aa, Da, Ia, Ma, Ya, pb, Ab);
      case 15:
        return h.call(this, D, ea, ga, ka, ra, va, xa, Aa, Da, Ia, Ma, Ya, pb, Ab, Ob);
      case 16:
        return g.call(this, D, ea, ga, ka, ra, va, xa, Aa, Da, Ia, Ma, Ya, pb, Ab, Ob, fc);
      case 17:
        return f.call(this, D, ea, ga, ka, ra, va, xa, Aa, Da, Ia, Ma, Ya, pb, Ab, Ob, fc, Cc);
      case 18:
        return e.call(this, D, ea, ga, ka, ra, va, xa, Aa, Da, Ia, Ma, Ya, pb, Ab, Ob, fc, Cc, Vc);
      case 19:
        return d.call(this, D, ea, ga, ka, ra, va, xa, Aa, Da, Ia, Ma, Ya, pb, Ab, Ob, fc, Cc, Vc, Hd);
      case 20:
        return c.call(this, D, ea, ga, ka, ra, va, xa, Aa, Da, Ia, Ma, Ya, pb, Ab, Ob, fc, Cc, Vc, Hd, De);
      case 21:
        return b.call(this, D, ea, ga, ka, ra, va, xa, Aa, Da, Ia, Ma, Ya, pb, Ab, Ob, fc, Cc, Vc, Hd, De, Of);
      case 22:
        return a.call(this, D, ea, ga, ka, ra, va, xa, Aa, Da, Ia, Ma, Ya, pb, Ab, Ob, fc, Cc, Vc, Hd, De, Of, ph);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  D.a = Za;
  D.b = S;
  D.c = V;
  D.l = L;
  D.t = H;
  D.R = B;
  D.ea = z;
  D.ya = x;
  D.za = s;
  D.na = q;
  D.oa = p;
  D.pa = n;
  D.qa = m;
  D.ra = l;
  D.sa = h;
  D.ta = g;
  D.ua = f;
  D.va = e;
  D.wa = d;
  D.xa = c;
  D.fc = b;
  D.qb = a;
  return D;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Na(b)));
};
k.i = function() {
  return this.f.i ? this.f.i() : this.f.call(null);
};
k.a = function(a) {
  return this.f.a ? this.f.a(a) : this.f.call(null, a);
};
k.b = function(a, b) {
  return this.f.b ? this.f.b(a, b) : this.f.call(null, a, b);
};
k.c = function(a, b, c) {
  return this.f.c ? this.f.c(a, b, c) : this.f.call(null, a, b, c);
};
k.l = function(a, b, c, d) {
  return this.f.l ? this.f.l(a, b, c, d) : this.f.call(null, a, b, c, d);
};
k.t = function(a, b, c, d, e) {
  return this.f.t ? this.f.t(a, b, c, d, e) : this.f.call(null, a, b, c, d, e);
};
k.R = function(a, b, c, d, e, f) {
  return this.f.R ? this.f.R(a, b, c, d, e, f) : this.f.call(null, a, b, c, d, e, f);
};
k.ea = function(a, b, c, d, e, f, g) {
  return this.f.ea ? this.f.ea(a, b, c, d, e, f, g) : this.f.call(null, a, b, c, d, e, f, g);
};
k.ya = function(a, b, c, d, e, f, g, h) {
  return this.f.ya ? this.f.ya(a, b, c, d, e, f, g, h) : this.f.call(null, a, b, c, d, e, f, g, h);
};
k.za = function(a, b, c, d, e, f, g, h, l) {
  return this.f.za ? this.f.za(a, b, c, d, e, f, g, h, l) : this.f.call(null, a, b, c, d, e, f, g, h, l);
};
k.na = function(a, b, c, d, e, f, g, h, l, m) {
  return this.f.na ? this.f.na(a, b, c, d, e, f, g, h, l, m) : this.f.call(null, a, b, c, d, e, f, g, h, l, m);
};
k.oa = function(a, b, c, d, e, f, g, h, l, m, n) {
  return this.f.oa ? this.f.oa(a, b, c, d, e, f, g, h, l, m, n) : this.f.call(null, a, b, c, d, e, f, g, h, l, m, n);
};
k.pa = function(a, b, c, d, e, f, g, h, l, m, n, p) {
  return this.f.pa ? this.f.pa(a, b, c, d, e, f, g, h, l, m, n, p) : this.f.call(null, a, b, c, d, e, f, g, h, l, m, n, p);
};
k.qa = function(a, b, c, d, e, f, g, h, l, m, n, p, q) {
  return this.f.qa ? this.f.qa(a, b, c, d, e, f, g, h, l, m, n, p, q) : this.f.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q);
};
k.ra = function(a, b, c, d, e, f, g, h, l, m, n, p, q, s) {
  return this.f.ra ? this.f.ra(a, b, c, d, e, f, g, h, l, m, n, p, q, s) : this.f.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, s);
};
k.sa = function(a, b, c, d, e, f, g, h, l, m, n, p, q, s, x) {
  return this.f.sa ? this.f.sa(a, b, c, d, e, f, g, h, l, m, n, p, q, s, x) : this.f.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, s, x);
};
k.ta = function(a, b, c, d, e, f, g, h, l, m, n, p, q, s, x, z) {
  return this.f.ta ? this.f.ta(a, b, c, d, e, f, g, h, l, m, n, p, q, s, x, z) : this.f.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, s, x, z);
};
k.ua = function(a, b, c, d, e, f, g, h, l, m, n, p, q, s, x, z, B) {
  return this.f.ua ? this.f.ua(a, b, c, d, e, f, g, h, l, m, n, p, q, s, x, z, B) : this.f.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, s, x, z, B);
};
k.va = function(a, b, c, d, e, f, g, h, l, m, n, p, q, s, x, z, B, H) {
  return this.f.va ? this.f.va(a, b, c, d, e, f, g, h, l, m, n, p, q, s, x, z, B, H) : this.f.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, s, x, z, B, H);
};
k.wa = function(a, b, c, d, e, f, g, h, l, m, n, p, q, s, x, z, B, H, L) {
  return this.f.wa ? this.f.wa(a, b, c, d, e, f, g, h, l, m, n, p, q, s, x, z, B, H, L) : this.f.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, s, x, z, B, H, L);
};
k.xa = function(a, b, c, d, e, f, g, h, l, m, n, p, q, s, x, z, B, H, L, V) {
  return this.f.xa ? this.f.xa(a, b, c, d, e, f, g, h, l, m, n, p, q, s, x, z, B, H, L, V) : this.f.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, s, x, z, B, H, L, V);
};
k.fc = function(a, b, c, d, e, f, g, h, l, m, n, p, q, s, x, z, B, H, L, V, S) {
  var Za = this.f;
  return W.qb ? W.qb(Za, a, b, c, d, e, f, g, h, l, m, n, p, q, s, x, z, B, H, L, V, S) : W.call(null, Za, a, b, c, d, e, f, g, h, l, m, n, p, q, s, x, z, B, H, L, V, S);
};
k.cc = !0;
k.A = function(a, b) {
  return new Ec(this.f, b);
};
k.u = function() {
  return this.m;
};
function uc(a, b) {
  return Dc(a) && !(a ? a.h & 262144 || a.Ec || (a.h ? 0 : v(qb, a)) : v(qb, a)) ? new Ec(a, b) : null == a ? null : rb(a, b);
}
function Fc(a) {
  var b = null != a;
  return(b ? a ? a.h & 131072 || a.ic || (a.h ? 0 : v(nb, a)) : v(nb, a) : b) ? ob(a) : null;
}
function Gc(a) {
  return null == a ? !1 : a ? a.h & 4096 || a.Cc ? !0 : a.h ? !1 : v(jb, a) : v(jb, a);
}
function Hc(a) {
  return null == a ? !1 : a ? a.h & 1024 || a.gc ? !0 : a.h ? !1 : v(eb, a) : v(eb, a);
}
function Ic(a) {
  return a ? a.h & 16384 || a.Dc ? !0 : a.h ? !1 : v(kb, a) : v(kb, a);
}
function Jc(a) {
  return a ? a.p & 512 || a.xc ? !0 : !1 : !1;
}
function Kc(a) {
  var b = [];
  na(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function Lc(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
function Mc(a, b, c, d, e) {
  b += e - 1;
  for (d += e - 1;0 !== e;) {
    c[d] = a[b], d -= 1, e -= 1, b -= 1;
  }
}
var Nc = {};
function Oc(a) {
  return null == a ? !1 : a ? a.h & 64 || a.cb ? !0 : a.h ? !1 : v(Wa, a) : v(Wa, a);
}
function Pc(a) {
  return u(a) ? !0 : !1;
}
function Qc(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (Ja(a) === Ja(b)) {
    return a && (a.p & 2048 || a.ob) ? a.pb(null, b) : sa(a, b);
  }
  throw Error("compare on non-nil objects of different types");
}
var Rc = function() {
  function a(a, b, c, g) {
    for (;;) {
      var h = Qc(T.b(a, g), T.b(b, g));
      if (0 === h && g + 1 < c) {
        g += 1;
      } else {
        return h;
      }
    }
  }
  function b(a, b) {
    var f = R(a), g = R(b);
    return f < g ? -1 : f > g ? 1 : c.l(a, b, f, 0);
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.l = a;
  return c;
}(), Q = function() {
  function a(a, b, c) {
    for (c = G(c);;) {
      if (c) {
        var g = I(c);
        b = a.b ? a.b(b, g) : a.call(null, b, g);
        if (lc(b)) {
          return mb(b);
        }
        c = M(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = G(b);
    if (c) {
      var g = I(c), c = M(c);
      return Oa.c ? Oa.c(a, g, c) : Oa.call(null, a, g, c);
    }
    return a.i ? a.i() : a.call(null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}(), Oa = function() {
  function a(a, b, c) {
    return c && (c.h & 524288 || c.kc) ? c.Q(null, a, b) : c instanceof Array ? nc.c(c, a, b) : "string" === typeof c ? nc.c(c, a, b) : v(sb, c) ? tb.c(c, a, b) : Q.c(a, b, c);
  }
  function b(a, b) {
    return b && (b.h & 524288 || b.kc) ? b.P(null, a) : b instanceof Array ? nc.b(b, a) : "string" === typeof b ? nc.b(b, a) : v(sb, b) ? tb.b(b, a) : Q.b(a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}();
function Sc(a) {
  return a;
}
var Tc = function() {
  function a(a, b, c, g) {
    a = a.a ? a.a(b) : a.call(null, b);
    c = Oa.c(a, c, g);
    return a.a ? a.a(c) : a.call(null, c);
  }
  function b(a, b, f) {
    return c.l(a, b, b.i ? b.i() : b.call(null), f);
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.l = a;
  return c;
}(), Uc = function() {
  var a = null, b = function() {
    function b(a, c, g) {
      var h = null;
      2 < arguments.length && (h = N(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, h);
    }
    function d(b, c, d) {
      return Oa.c(a, b + c, d);
    }
    b.n = 2;
    b.g = function(a) {
      var b = I(a);
      a = M(a);
      var c = I(a);
      a = J(a);
      return d(b, c, a);
    };
    b.e = d;
    return b;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 0:
        return 0;
      case 1:
        return a;
      case 2:
        return a + d;
      default:
        return b.e(a, d, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.n = 2;
  a.g = b.g;
  a.i = function() {
    return 0;
  };
  a.a = function(a) {
    return a;
  };
  a.b = function(a, b) {
    return a + b;
  };
  a.e = b.e;
  return a;
}(), Wc = function() {
  var a = null, b = function() {
    function b(a, c, g) {
      var h = null;
      2 < arguments.length && (h = N(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, h);
    }
    function d(b, c, d) {
      return Oa.c(a, b * c, d);
    }
    b.n = 2;
    b.g = function(a) {
      var b = I(a);
      a = M(a);
      var c = I(a);
      a = J(a);
      return d(b, c, a);
    };
    b.e = d;
    return b;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 0:
        return 1;
      case 1:
        return a;
      case 2:
        return a * d;
      default:
        return b.e(a, d, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.n = 2;
  a.g = b.g;
  a.i = function() {
    return 1;
  };
  a.a = function(a) {
    return a;
  };
  a.b = function(a, b) {
    return a * b;
  };
  a.e = b.e;
  return a;
}();
function Xc(a) {
  return 0 <= a ? Math.floor.a ? Math.floor.a(a) : Math.floor.call(null, a) : Math.ceil.a ? Math.ceil.a(a) : Math.ceil.call(null, a);
}
function Yc(a, b) {
  return(a % b + b) % b;
}
function Zc(a, b) {
  return Xc((a - a % b) / b);
}
var $c = function() {
  function a(a) {
    return a * c.i();
  }
  function b() {
    return Math.random.i ? Math.random.i() : Math.random.call(null);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.i = b;
  c.a = a;
  return c;
}();
function ad(a) {
  return Xc($c.a(a));
}
function bd(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
var y = function() {
  function a(a) {
    return null == a ? "" : la(a);
  }
  var b = null, c = function() {
    function a(b, d) {
      var h = null;
      1 < arguments.length && (h = N(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, h);
    }
    function c(a, d) {
      for (var e = new oa(b.a(a)), l = d;;) {
        if (u(l)) {
          e = e.append(b.a(I(l))), l = M(l);
        } else {
          return e.toString();
        }
      }
    }
    a.n = 1;
    a.g = function(a) {
      var b = I(a);
      a = J(a);
      return c(b, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, N(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.n = 1;
  b.g = c.g;
  b.i = function() {
    return "";
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
function sc(a, b) {
  var c;
  if (b ? b.h & 16777216 || b.Bc || (b.h ? 0 : v(yb, b)) : v(yb, b)) {
    if (oc(a) && oc(b) && R(a) !== R(b)) {
      c = !1;
    } else {
      a: {
        c = G(a);
        for (var d = G(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && dc.b(I(c), I(d))) {
            c = M(c), d = M(d);
          } else {
            c = !1;
            break a;
          }
        }
        c = void 0;
      }
    }
  } else {
    c = null;
  }
  return Pc(c);
}
function cd(a, b, c, d, e) {
  this.m = a;
  this.first = b;
  this.Da = c;
  this.count = d;
  this.o = e;
  this.h = 65937646;
  this.p = 8192;
}
k = cd.prototype;
k.toString = function() {
  return Sb(this);
};
k.u = function() {
  return this.m;
};
k.$ = function() {
  return 1 === this.count ? null : this.Da;
};
k.J = function() {
  return this.count;
};
k.G = function() {
  var a = this.o;
  return null != a ? a : this.o = a = ic(this);
};
k.C = function(a, b) {
  return sc(this, b);
};
k.N = function() {
  return rb(K, this.m);
};
k.P = function(a, b) {
  return Q.b(b, this);
};
k.Q = function(a, b, c) {
  return Q.c(b, c, this);
};
k.S = function() {
  return this.first;
};
k.X = function() {
  return 1 === this.count ? K : this.Da;
};
k.I = function() {
  return this;
};
k.A = function(a, b) {
  return new cd(b, this.first, this.Da, this.count, this.o);
};
k.L = function(a, b) {
  return new cd(this.m, b, this, this.count + 1, null);
};
cd.prototype[La] = function() {
  return gc(this);
};
function dd(a) {
  this.m = a;
  this.h = 65937614;
  this.p = 8192;
}
k = dd.prototype;
k.toString = function() {
  return Sb(this);
};
k.u = function() {
  return this.m;
};
k.$ = function() {
  return null;
};
k.J = function() {
  return 0;
};
k.G = function() {
  return 0;
};
k.C = function(a, b) {
  return sc(this, b);
};
k.N = function() {
  return this;
};
k.P = function(a, b) {
  return Q.b(b, this);
};
k.Q = function(a, b, c) {
  return Q.c(b, c, this);
};
k.S = function() {
  return null;
};
k.X = function() {
  return K;
};
k.I = function() {
  return null;
};
k.A = function(a, b) {
  return new dd(b);
};
k.L = function(a, b) {
  return new cd(this.m, b, null, 1, null);
};
var K = new dd(null);
dd.prototype[La] = function() {
  return gc(this);
};
function ed(a) {
  return(a ? a.h & 134217728 || a.zc || (a.h ? 0 : v(zb, a)) : v(zb, a)) ? Bb(a) : Oa.c(xc, K, a);
}
var fd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof cc && 0 === a.k) {
      b = a.d;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.S(null)), a = a.$(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = K;;) {
      if (0 < a) {
        var f = a - 1, e = e.L(null, b[a - 1]);
        a = f;
      } else {
        return e;
      }
    }
  }
  a.n = 0;
  a.g = function(a) {
    a = G(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function gd(a, b, c, d) {
  this.m = a;
  this.first = b;
  this.Da = c;
  this.o = d;
  this.h = 65929452;
  this.p = 8192;
}
k = gd.prototype;
k.toString = function() {
  return Sb(this);
};
k.u = function() {
  return this.m;
};
k.$ = function() {
  return null == this.Da ? null : G(this.Da);
};
k.G = function() {
  var a = this.o;
  return null != a ? a : this.o = a = ic(this);
};
k.C = function(a, b) {
  return sc(this, b);
};
k.N = function() {
  return uc(K, this.m);
};
k.P = function(a, b) {
  return Q.b(b, this);
};
k.Q = function(a, b, c) {
  return Q.c(b, c, this);
};
k.S = function() {
  return this.first;
};
k.X = function() {
  return null == this.Da ? K : this.Da;
};
k.I = function() {
  return this;
};
k.A = function(a, b) {
  return new gd(b, this.first, this.Da, this.o);
};
k.L = function(a, b) {
  return new gd(null, b, this, this.o);
};
gd.prototype[La] = function() {
  return gc(this);
};
function P(a, b) {
  var c = null == b;
  return(c ? c : b && (b.h & 64 || b.cb)) ? new gd(null, a, b, null) : new gd(null, a, G(b), null);
}
function hd(a, b) {
  if (a.aa === b.aa) {
    return 0;
  }
  var c = Ha(a.W);
  if (u(c ? b.W : c)) {
    return-1;
  }
  if (u(a.W)) {
    if (Ha(b.W)) {
      return 1;
    }
    c = sa(a.W, b.W);
    return 0 === c ? sa(a.name, b.name) : c;
  }
  return sa(a.name, b.name);
}
function X(a, b, c, d) {
  this.W = a;
  this.name = b;
  this.aa = c;
  this.Qa = d;
  this.h = 2153775105;
  this.p = 4096;
}
k = X.prototype;
k.w = function(a, b) {
  return E(b, [y(":"), y(this.aa)].join(""));
};
k.G = function() {
  var a = this.Qa;
  return null != a ? a : this.Qa = a = ac(this) + 2654435769 | 0;
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return U.b(c, this);
      case 3:
        return U.c(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return U.b(c, this);
  };
  a.c = function(a, c, d) {
    return U.c(c, this, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Na(b)));
};
k.a = function(a) {
  return U.b(a, this);
};
k.b = function(a, b) {
  return U.c(a, this, b);
};
k.C = function(a, b) {
  return b instanceof X ? this.aa === b.aa : !1;
};
k.toString = function() {
  return[y(":"), y(this.aa)].join("");
};
function id(a, b) {
  return a === b ? !0 : a instanceof X && b instanceof X ? a.aa === b.aa : !1;
}
var kd = function() {
  function a(a, b) {
    return new X(a, b, [y(u(a) ? [y(a), y("/")].join("") : null), y(b)].join(""), null);
  }
  function b(a) {
    if (a instanceof X) {
      return a;
    }
    if (a instanceof F) {
      var b;
      if (a && (a.p & 4096 || a.jc)) {
        b = a.W;
      } else {
        throw Error([y("Doesn't support namespace: "), y(a)].join(""));
      }
      return new X(b, jd.a ? jd.a(a) : jd.call(null, a), a.ma, null);
    }
    return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new X(b[0], b[1], a, null) : new X(null, b[0], a, null)) : null;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function ld(a, b, c, d) {
  this.m = a;
  this.Va = b;
  this.v = c;
  this.o = d;
  this.p = 0;
  this.h = 32374988;
}
k = ld.prototype;
k.toString = function() {
  return Sb(this);
};
function md(a) {
  null != a.Va && (a.v = a.Va.i ? a.Va.i() : a.Va.call(null), a.Va = null);
  return a.v;
}
k.u = function() {
  return this.m;
};
k.$ = function() {
  xb(this);
  return null == this.v ? null : M(this.v);
};
k.G = function() {
  var a = this.o;
  return null != a ? a : this.o = a = ic(this);
};
k.C = function(a, b) {
  return sc(this, b);
};
k.N = function() {
  return uc(K, this.m);
};
k.P = function(a, b) {
  return Q.b(b, this);
};
k.Q = function(a, b, c) {
  return Q.c(b, c, this);
};
k.S = function() {
  xb(this);
  return null == this.v ? null : I(this.v);
};
k.X = function() {
  xb(this);
  return null != this.v ? J(this.v) : K;
};
k.I = function() {
  md(this);
  if (null == this.v) {
    return null;
  }
  for (var a = this.v;;) {
    if (a instanceof ld) {
      a = md(a);
    } else {
      return this.v = a, G(this.v);
    }
  }
};
k.A = function(a, b) {
  return new ld(b, this.Va, this.v, this.o);
};
k.L = function(a, b) {
  return P(b, this);
};
ld.prototype[La] = function() {
  return gc(this);
};
function nd(a, b) {
  this.s = a;
  this.end = b;
  this.p = 0;
  this.h = 2;
}
nd.prototype.J = function() {
  return this.end;
};
nd.prototype.add = function(a) {
  this.s[this.end] = a;
  return this.end += 1;
};
nd.prototype.ja = function() {
  var a = new od(this.s, 0, this.end);
  this.s = null;
  return a;
};
function od(a, b, c) {
  this.d = a;
  this.O = b;
  this.end = c;
  this.p = 0;
  this.h = 524306;
}
k = od.prototype;
k.P = function(a, b) {
  return nc.l(this.d, b, this.d[this.O], this.O + 1);
};
k.Q = function(a, b, c) {
  return nc.l(this.d, b, c, this.O);
};
k.Nb = function() {
  if (this.O === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new od(this.d, this.O + 1, this.end);
};
k.M = function(a, b) {
  return this.d[this.O + b];
};
k.Z = function(a, b, c) {
  return 0 <= b && b < this.end - this.O ? this.d[this.O + b] : c;
};
k.J = function() {
  return this.end - this.O;
};
var pd = function() {
  function a(a, b, c) {
    return new od(a, b, c);
  }
  function b(a, b) {
    return new od(a, b, a.length);
  }
  function c(a) {
    return new od(a, 0, a.length);
  }
  var d = null, d = function(d, f, g) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.c = a;
  return d;
}();
function qd(a, b, c, d) {
  this.ja = a;
  this.la = b;
  this.m = c;
  this.o = d;
  this.h = 31850732;
  this.p = 1536;
}
k = qd.prototype;
k.toString = function() {
  return Sb(this);
};
k.u = function() {
  return this.m;
};
k.$ = function() {
  if (1 < Sa(this.ja)) {
    return new qd(Kb(this.ja), this.la, this.m, null);
  }
  var a = xb(this.la);
  return null == a ? null : a;
};
k.G = function() {
  var a = this.o;
  return null != a ? a : this.o = a = ic(this);
};
k.C = function(a, b) {
  return sc(this, b);
};
k.N = function() {
  return uc(K, this.m);
};
k.S = function() {
  return A.b(this.ja, 0);
};
k.X = function() {
  return 1 < Sa(this.ja) ? new qd(Kb(this.ja), this.la, this.m, null) : null == this.la ? K : this.la;
};
k.I = function() {
  return this;
};
k.Fb = function() {
  return this.ja;
};
k.Gb = function() {
  return null == this.la ? K : this.la;
};
k.A = function(a, b) {
  return new qd(this.ja, this.la, b, this.o);
};
k.L = function(a, b) {
  return P(b, this);
};
k.Eb = function() {
  return null == this.la ? null : this.la;
};
qd.prototype[La] = function() {
  return gc(this);
};
function rd(a, b) {
  return 0 === Sa(a) ? b : new qd(a, b, null, null);
}
function sd(a, b) {
  a.add(b);
}
function td(a) {
  for (var b = [];;) {
    if (G(a)) {
      b.push(I(a)), a = M(a);
    } else {
      return b;
    }
  }
}
function ud(a, b) {
  if (oc(a)) {
    return R(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && G(c)) {
      c = M(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var wd = function vd(b) {
  return null == b ? null : null == M(b) ? G(I(b)) : P(I(b), vd(M(b)));
}, xd = function() {
  function a(a, b) {
    return new ld(null, function() {
      var c = G(a);
      return c ? Jc(c) ? rd(Lb(c), d.b(Mb(c), b)) : P(I(c), d.b(J(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new ld(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new ld(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var f = null;
      2 < arguments.length && (f = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, f);
    }
    function b(a, c, e) {
      return function p(a, b) {
        return new ld(null, function() {
          var c = G(a);
          return c ? Jc(c) ? rd(Lb(c), p(Mb(c), b)) : P(I(c), p(J(c), b)) : u(b) ? p(I(b), M(b)) : null;
        }, null, null);
      }(d.b(a, c), e);
    }
    a.n = 2;
    a.g = function(a) {
      var c = I(a);
      a = M(a);
      var d = I(a);
      a = J(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, g, h) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, g);
      default:
        return e.e(d, g, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.n = 2;
  d.g = e.g;
  d.i = c;
  d.a = b;
  d.b = a;
  d.e = e.e;
  return d;
}(), yd = function() {
  function a(a, b, c, d) {
    return P(a, P(b, P(c, d)));
  }
  function b(a, b, c) {
    return P(a, P(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, m, n) {
      var p = null;
      4 < arguments.length && (p = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, m, p);
    }
    function b(a, c, d, e, f) {
      return P(a, P(c, P(d, P(e, wd(f)))));
    }
    a.n = 4;
    a.g = function(a) {
      var c = I(a);
      a = M(a);
      var d = I(a);
      a = M(a);
      var e = I(a);
      a = M(a);
      var n = I(a);
      a = J(a);
      return b(c, d, e, n, a);
    };
    a.e = b;
    return a;
  }(), c = function(c, f, g, h, l) {
    switch(arguments.length) {
      case 1:
        return G(c);
      case 2:
        return P(c, f);
      case 3:
        return b.call(this, c, f, g);
      case 4:
        return a.call(this, c, f, g, h);
      default:
        return d.e(c, f, g, h, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.n = 4;
  c.g = d.g;
  c.a = function(a) {
    return G(a);
  };
  c.b = function(a, b) {
    return P(a, b);
  };
  c.c = b;
  c.l = a;
  c.e = d.e;
  return c;
}();
function zd(a) {
  return Hb(a);
}
var Ad = function() {
  function a() {
    return Fb(wc);
  }
  var b = null, c = function() {
    function a(c, d, h) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      for (;;) {
        if (a = Gb(a, c), u(d)) {
          c = I(d), d = M(d);
        } else {
          return a;
        }
      }
    }
    a.n = 2;
    a.g = function(a) {
      var c = I(a);
      a = M(a);
      var d = I(a);
      a = J(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 0:
        return a.call(this);
      case 1:
        return b;
      case 2:
        return Gb(b, e);
      default:
        return c.e(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.n = 2;
  b.g = c.g;
  b.i = a;
  b.a = function(a) {
    return a;
  };
  b.b = function(a, b) {
    return Gb(a, b);
  };
  b.e = c.e;
  return b;
}(), Bd = function() {
  var a = null, b = function() {
    function a(c, f, g, h) {
      var l = null;
      3 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, f, g, l);
    }
    function b(a, c, d, h) {
      for (;;) {
        if (a = Ib(a, c, d), u(h)) {
          c = I(h), d = I(M(h)), h = M(M(h));
        } else {
          return a;
        }
      }
    }
    a.n = 3;
    a.g = function(a) {
      var c = I(a);
      a = M(a);
      var g = I(a);
      a = M(a);
      var h = I(a);
      a = J(a);
      return b(c, g, h, a);
    };
    a.e = b;
    return a;
  }(), a = function(a, d, e, f) {
    switch(arguments.length) {
      case 3:
        return Ib(a, d, e);
      default:
        return b.e(a, d, e, N(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.n = 3;
  a.g = b.g;
  a.c = function(a, b, e) {
    return Ib(a, b, e);
  };
  a.e = b.e;
  return a;
}();
function Cd(a, b, c) {
  var d = G(c);
  if (0 === b) {
    return a.i ? a.i() : a.call(null);
  }
  c = Xa(d);
  var e = $a(d);
  if (1 === b) {
    return a.a ? a.a(c) : a.a ? a.a(c) : a.call(null, c);
  }
  var d = Xa(e), f = $a(e);
  if (2 === b) {
    return a.b ? a.b(c, d) : a.b ? a.b(c, d) : a.call(null, c, d);
  }
  var e = Xa(f), g = $a(f);
  if (3 === b) {
    return a.c ? a.c(c, d, e) : a.c ? a.c(c, d, e) : a.call(null, c, d, e);
  }
  var f = Xa(g), h = $a(g);
  if (4 === b) {
    return a.l ? a.l(c, d, e, f) : a.l ? a.l(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var g = Xa(h), l = $a(h);
  if (5 === b) {
    return a.t ? a.t(c, d, e, f, g) : a.t ? a.t(c, d, e, f, g) : a.call(null, c, d, e, f, g);
  }
  var h = Xa(l), m = $a(l);
  if (6 === b) {
    return a.R ? a.R(c, d, e, f, g, h) : a.R ? a.R(c, d, e, f, g, h) : a.call(null, c, d, e, f, g, h);
  }
  var l = Xa(m), n = $a(m);
  if (7 === b) {
    return a.ea ? a.ea(c, d, e, f, g, h, l) : a.ea ? a.ea(c, d, e, f, g, h, l) : a.call(null, c, d, e, f, g, h, l);
  }
  var m = Xa(n), p = $a(n);
  if (8 === b) {
    return a.ya ? a.ya(c, d, e, f, g, h, l, m) : a.ya ? a.ya(c, d, e, f, g, h, l, m) : a.call(null, c, d, e, f, g, h, l, m);
  }
  var n = Xa(p), q = $a(p);
  if (9 === b) {
    return a.za ? a.za(c, d, e, f, g, h, l, m, n) : a.za ? a.za(c, d, e, f, g, h, l, m, n) : a.call(null, c, d, e, f, g, h, l, m, n);
  }
  var p = Xa(q), s = $a(q);
  if (10 === b) {
    return a.na ? a.na(c, d, e, f, g, h, l, m, n, p) : a.na ? a.na(c, d, e, f, g, h, l, m, n, p) : a.call(null, c, d, e, f, g, h, l, m, n, p);
  }
  var q = Xa(s), x = $a(s);
  if (11 === b) {
    return a.oa ? a.oa(c, d, e, f, g, h, l, m, n, p, q) : a.oa ? a.oa(c, d, e, f, g, h, l, m, n, p, q) : a.call(null, c, d, e, f, g, h, l, m, n, p, q);
  }
  var s = Xa(x), z = $a(x);
  if (12 === b) {
    return a.pa ? a.pa(c, d, e, f, g, h, l, m, n, p, q, s) : a.pa ? a.pa(c, d, e, f, g, h, l, m, n, p, q, s) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, s);
  }
  var x = Xa(z), B = $a(z);
  if (13 === b) {
    return a.qa ? a.qa(c, d, e, f, g, h, l, m, n, p, q, s, x) : a.qa ? a.qa(c, d, e, f, g, h, l, m, n, p, q, s, x) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, s, x);
  }
  var z = Xa(B), H = $a(B);
  if (14 === b) {
    return a.ra ? a.ra(c, d, e, f, g, h, l, m, n, p, q, s, x, z) : a.ra ? a.ra(c, d, e, f, g, h, l, m, n, p, q, s, x, z) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, s, x, z);
  }
  var B = Xa(H), L = $a(H);
  if (15 === b) {
    return a.sa ? a.sa(c, d, e, f, g, h, l, m, n, p, q, s, x, z, B) : a.sa ? a.sa(c, d, e, f, g, h, l, m, n, p, q, s, x, z, B) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, s, x, z, B);
  }
  var H = Xa(L), V = $a(L);
  if (16 === b) {
    return a.ta ? a.ta(c, d, e, f, g, h, l, m, n, p, q, s, x, z, B, H) : a.ta ? a.ta(c, d, e, f, g, h, l, m, n, p, q, s, x, z, B, H) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, s, x, z, B, H);
  }
  var L = Xa(V), S = $a(V);
  if (17 === b) {
    return a.ua ? a.ua(c, d, e, f, g, h, l, m, n, p, q, s, x, z, B, H, L) : a.ua ? a.ua(c, d, e, f, g, h, l, m, n, p, q, s, x, z, B, H, L) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, s, x, z, B, H, L);
  }
  var V = Xa(S), Za = $a(S);
  if (18 === b) {
    return a.va ? a.va(c, d, e, f, g, h, l, m, n, p, q, s, x, z, B, H, L, V) : a.va ? a.va(c, d, e, f, g, h, l, m, n, p, q, s, x, z, B, H, L, V) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, s, x, z, B, H, L, V);
  }
  S = Xa(Za);
  Za = $a(Za);
  if (19 === b) {
    return a.wa ? a.wa(c, d, e, f, g, h, l, m, n, p, q, s, x, z, B, H, L, V, S) : a.wa ? a.wa(c, d, e, f, g, h, l, m, n, p, q, s, x, z, B, H, L, V, S) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, s, x, z, B, H, L, V, S);
  }
  var D = Xa(Za);
  $a(Za);
  if (20 === b) {
    return a.xa ? a.xa(c, d, e, f, g, h, l, m, n, p, q, s, x, z, B, H, L, V, S, D) : a.xa ? a.xa(c, d, e, f, g, h, l, m, n, p, q, s, x, z, B, H, L, V, S, D) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, s, x, z, B, H, L, V, S, D);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var W = function() {
  function a(a, b, c, d, e) {
    b = yd.l(b, c, d, e);
    c = a.n;
    return a.g ? (d = ud(b, c + 1), d <= c ? Cd(a, d, b) : a.g(b)) : a.apply(a, td(b));
  }
  function b(a, b, c, d) {
    b = yd.c(b, c, d);
    c = a.n;
    return a.g ? (d = ud(b, c + 1), d <= c ? Cd(a, d, b) : a.g(b)) : a.apply(a, td(b));
  }
  function c(a, b, c) {
    b = yd.b(b, c);
    c = a.n;
    if (a.g) {
      var d = ud(b, c + 1);
      return d <= c ? Cd(a, d, b) : a.g(b);
    }
    return a.apply(a, td(b));
  }
  function d(a, b) {
    var c = a.n;
    if (a.g) {
      var d = ud(b, c + 1);
      return d <= c ? Cd(a, d, b) : a.g(b);
    }
    return a.apply(a, td(b));
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, s) {
      var x = null;
      5 < arguments.length && (x = N(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, g, x);
    }
    function b(a, c, d, e, f, g) {
      c = P(c, P(d, P(e, P(f, wd(g)))));
      d = a.n;
      return a.g ? (e = ud(c, d + 1), e <= d ? Cd(a, e, c) : a.g(c)) : a.apply(a, td(c));
    }
    a.n = 5;
    a.g = function(a) {
      var c = I(a);
      a = M(a);
      var d = I(a);
      a = M(a);
      var e = I(a);
      a = M(a);
      var f = I(a);
      a = M(a);
      var g = I(a);
      a = J(a);
      return b(c, d, e, f, g, a);
    };
    a.e = b;
    return a;
  }(), e = function(e, h, l, m, n, p) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, l);
      case 4:
        return b.call(this, e, h, l, m);
      case 5:
        return a.call(this, e, h, l, m, n);
      default:
        return f.e(e, h, l, m, n, N(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.n = 5;
  e.g = f.g;
  e.b = d;
  e.c = c;
  e.l = b;
  e.t = a;
  e.e = f.e;
  return e;
}(), Dd = function() {
  function a(a, b) {
    return!dc.b(a, b);
  }
  var b = null, c = function() {
    function a(c, d, h) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return Ha(W.l(dc, a, c, d));
    }
    a.n = 2;
    a.g = function(a) {
      var c = I(a);
      a = M(a);
      var d = I(a);
      a = J(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!1;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.n = 2;
  b.g = c.g;
  b.a = function() {
    return!1;
  };
  b.b = a;
  b.e = c.e;
  return b;
}();
function Ed(a, b) {
  for (;;) {
    if (null == G(b)) {
      return!0;
    }
    var c;
    c = I(b);
    c = a.a ? a.a(c) : a.call(null, c);
    if (u(c)) {
      c = a;
      var d = M(b);
      a = c;
      b = d;
    } else {
      return!1;
    }
  }
}
function Fd(a) {
  return function() {
    function b(b, c) {
      return Ha(a.b ? a.b(b, c) : a.call(null, b, c));
    }
    function c(b) {
      return Ha(a.a ? a.a(b) : a.call(null, b));
    }
    function d() {
      return Ha(a.i ? a.i() : a.call(null));
    }
    var e = null, f = function() {
      function b(a, d, e) {
        var f = null;
        2 < arguments.length && (f = N(Array.prototype.slice.call(arguments, 2), 0));
        return c.call(this, a, d, f);
      }
      function c(b, d, e) {
        return Ha(W.l(a, b, d, e));
      }
      b.n = 2;
      b.g = function(a) {
        var b = I(a);
        a = M(a);
        var d = I(a);
        a = J(a);
        return c(b, d, a);
      };
      b.e = c;
      return b;
    }(), e = function(a, e, l) {
      switch(arguments.length) {
        case 0:
          return d.call(this);
        case 1:
          return c.call(this, a);
        case 2:
          return b.call(this, a, e);
        default:
          return f.e(a, e, N(arguments, 2));
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    e.n = 2;
    e.g = f.g;
    e.i = d;
    e.a = c;
    e.b = b;
    e.e = f.e;
    return e;
  }();
}
function Gd() {
  return function() {
    function a(a) {
      0 < arguments.length && N(Array.prototype.slice.call(arguments, 0), 0);
      return!1;
    }
    a.n = 0;
    a.g = function(a) {
      G(a);
      return!1;
    };
    a.e = function() {
      return!1;
    };
    return a;
  }();
}
var Id = function() {
  function a(a, b, c) {
    return function() {
      function d(h, l, m) {
        h = c.c ? c.c(h, l, m) : c.call(null, h, l, m);
        h = b.a ? b.a(h) : b.call(null, h);
        return a.a ? a.a(h) : a.call(null, h);
      }
      function l(d, h) {
        var l;
        l = c.b ? c.b(d, h) : c.call(null, d, h);
        l = b.a ? b.a(l) : b.call(null, l);
        return a.a ? a.a(l) : a.call(null, l);
      }
      function m(d) {
        d = c.a ? c.a(d) : c.call(null, d);
        d = b.a ? b.a(d) : b.call(null, d);
        return a.a ? a.a(d) : a.call(null, d);
      }
      function n() {
        var d;
        d = c.i ? c.i() : c.call(null);
        d = b.a ? b.a(d) : b.call(null, d);
        return a.a ? a.a(d) : a.call(null, d);
      }
      var p = null, q = function() {
        function d(a, b, c, e) {
          var f = null;
          3 < arguments.length && (f = N(Array.prototype.slice.call(arguments, 3), 0));
          return h.call(this, a, b, c, f);
        }
        function h(d, l, m, n) {
          d = W.t(c, d, l, m, n);
          d = b.a ? b.a(d) : b.call(null, d);
          return a.a ? a.a(d) : a.call(null, d);
        }
        d.n = 3;
        d.g = function(a) {
          var b = I(a);
          a = M(a);
          var c = I(a);
          a = M(a);
          var d = I(a);
          a = J(a);
          return h(b, c, d, a);
        };
        d.e = h;
        return d;
      }(), p = function(a, b, c, e) {
        switch(arguments.length) {
          case 0:
            return n.call(this);
          case 1:
            return m.call(this, a);
          case 2:
            return l.call(this, a, b);
          case 3:
            return d.call(this, a, b, c);
          default:
            return q.e(a, b, c, N(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      p.n = 3;
      p.g = q.g;
      p.i = n;
      p.a = m;
      p.b = l;
      p.c = d;
      p.e = q.e;
      return p;
    }();
  }
  function b(a, b) {
    return function() {
      function c(d, g, h) {
        d = b.c ? b.c(d, g, h) : b.call(null, d, g, h);
        return a.a ? a.a(d) : a.call(null, d);
      }
      function d(c, g) {
        var h = b.b ? b.b(c, g) : b.call(null, c, g);
        return a.a ? a.a(h) : a.call(null, h);
      }
      function l(c) {
        c = b.a ? b.a(c) : b.call(null, c);
        return a.a ? a.a(c) : a.call(null, c);
      }
      function m() {
        var c = b.i ? b.i() : b.call(null);
        return a.a ? a.a(c) : a.call(null, c);
      }
      var n = null, p = function() {
        function c(a, b, e, f) {
          var g = null;
          3 < arguments.length && (g = N(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, g);
        }
        function d(c, g, h, l) {
          c = W.t(b, c, g, h, l);
          return a.a ? a.a(c) : a.call(null, c);
        }
        c.n = 3;
        c.g = function(a) {
          var b = I(a);
          a = M(a);
          var c = I(a);
          a = M(a);
          var e = I(a);
          a = J(a);
          return d(b, c, e, a);
        };
        c.e = d;
        return c;
      }(), n = function(a, b, e, f) {
        switch(arguments.length) {
          case 0:
            return m.call(this);
          case 1:
            return l.call(this, a);
          case 2:
            return d.call(this, a, b);
          case 3:
            return c.call(this, a, b, e);
          default:
            return p.e(a, b, e, N(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      n.n = 3;
      n.g = p.g;
      n.i = m;
      n.a = l;
      n.b = d;
      n.c = c;
      n.e = p.e;
      return n;
    }();
  }
  var c = null, d = function() {
    function a(c, d, e, m) {
      var n = null;
      3 < arguments.length && (n = N(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, n);
    }
    function b(a, c, d, e) {
      return function(a) {
        return function() {
          function b(a) {
            var d = null;
            0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
            return c.call(this, d);
          }
          function c(b) {
            b = W.b(I(a), b);
            for (var d = M(a);;) {
              if (d) {
                b = I(d).call(null, b), d = M(d);
              } else {
                return b;
              }
            }
          }
          b.n = 0;
          b.g = function(a) {
            a = G(a);
            return c(a);
          };
          b.e = c;
          return b;
        }();
      }(ed(yd.l(a, c, d, e)));
    }
    a.n = 3;
    a.g = function(a) {
      var c = I(a);
      a = M(a);
      var d = I(a);
      a = M(a);
      var e = I(a);
      a = J(a);
      return b(c, d, e, a);
    };
    a.e = b;
    return a;
  }(), c = function(c, f, g, h) {
    switch(arguments.length) {
      case 0:
        return Sc;
      case 1:
        return c;
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, g);
      default:
        return d.e(c, f, g, N(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.n = 3;
  c.g = d.g;
  c.i = function() {
    return Sc;
  };
  c.a = function(a) {
    return a;
  };
  c.b = b;
  c.c = a;
  c.e = d.e;
  return c;
}(), Jd = function() {
  function a(a, b, c, d) {
    return function() {
      function e(m, n, p) {
        return a.R ? a.R(b, c, d, m, n, p) : a.call(null, b, c, d, m, n, p);
      }
      function n(e, m) {
        return a.t ? a.t(b, c, d, e, m) : a.call(null, b, c, d, e, m);
      }
      function p(e) {
        return a.l ? a.l(b, c, d, e) : a.call(null, b, c, d, e);
      }
      function q() {
        return a.c ? a.c(b, c, d) : a.call(null, b, c, d);
      }
      var s = null, x = function() {
        function e(a, b, c, d) {
          var f = null;
          3 < arguments.length && (f = N(Array.prototype.slice.call(arguments, 3), 0));
          return m.call(this, a, b, c, f);
        }
        function m(e, n, p, s) {
          return W.e(a, b, c, d, e, N([n, p, s], 0));
        }
        e.n = 3;
        e.g = function(a) {
          var b = I(a);
          a = M(a);
          var c = I(a);
          a = M(a);
          var d = I(a);
          a = J(a);
          return m(b, c, d, a);
        };
        e.e = m;
        return e;
      }(), s = function(a, b, c, d) {
        switch(arguments.length) {
          case 0:
            return q.call(this);
          case 1:
            return p.call(this, a);
          case 2:
            return n.call(this, a, b);
          case 3:
            return e.call(this, a, b, c);
          default:
            return x.e(a, b, c, N(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      s.n = 3;
      s.g = x.g;
      s.i = q;
      s.a = p;
      s.b = n;
      s.c = e;
      s.e = x.e;
      return s;
    }();
  }
  function b(a, b, c) {
    return function() {
      function d(e, l, m) {
        return a.t ? a.t(b, c, e, l, m) : a.call(null, b, c, e, l, m);
      }
      function e(d, l) {
        return a.l ? a.l(b, c, d, l) : a.call(null, b, c, d, l);
      }
      function n(d) {
        return a.c ? a.c(b, c, d) : a.call(null, b, c, d);
      }
      function p() {
        return a.b ? a.b(b, c) : a.call(null, b, c);
      }
      var q = null, s = function() {
        function d(a, b, c, f) {
          var g = null;
          3 < arguments.length && (g = N(Array.prototype.slice.call(arguments, 3), 0));
          return e.call(this, a, b, c, g);
        }
        function e(d, l, m, n) {
          return W.e(a, b, c, d, l, N([m, n], 0));
        }
        d.n = 3;
        d.g = function(a) {
          var b = I(a);
          a = M(a);
          var c = I(a);
          a = M(a);
          var d = I(a);
          a = J(a);
          return e(b, c, d, a);
        };
        d.e = e;
        return d;
      }(), q = function(a, b, c, f) {
        switch(arguments.length) {
          case 0:
            return p.call(this);
          case 1:
            return n.call(this, a);
          case 2:
            return e.call(this, a, b);
          case 3:
            return d.call(this, a, b, c);
          default:
            return s.e(a, b, c, N(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      q.n = 3;
      q.g = s.g;
      q.i = p;
      q.a = n;
      q.b = e;
      q.c = d;
      q.e = s.e;
      return q;
    }();
  }
  function c(a, b) {
    return function() {
      function c(d, e, h) {
        return a.l ? a.l(b, d, e, h) : a.call(null, b, d, e, h);
      }
      function d(c, e) {
        return a.c ? a.c(b, c, e) : a.call(null, b, c, e);
      }
      function e(c) {
        return a.b ? a.b(b, c) : a.call(null, b, c);
      }
      function n() {
        return a.a ? a.a(b) : a.call(null, b);
      }
      var p = null, q = function() {
        function c(a, b, e, f) {
          var g = null;
          3 < arguments.length && (g = N(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, g);
        }
        function d(c, e, h, l) {
          return W.e(a, b, c, e, h, N([l], 0));
        }
        c.n = 3;
        c.g = function(a) {
          var b = I(a);
          a = M(a);
          var c = I(a);
          a = M(a);
          var e = I(a);
          a = J(a);
          return d(b, c, e, a);
        };
        c.e = d;
        return c;
      }(), p = function(a, b, f, g) {
        switch(arguments.length) {
          case 0:
            return n.call(this);
          case 1:
            return e.call(this, a);
          case 2:
            return d.call(this, a, b);
          case 3:
            return c.call(this, a, b, f);
          default:
            return q.e(a, b, f, N(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      p.n = 3;
      p.g = q.g;
      p.i = n;
      p.a = e;
      p.b = d;
      p.c = c;
      p.e = q.e;
      return p;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, f, p) {
      var q = null;
      4 < arguments.length && (q = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, q);
    }
    function b(a, c, d, e, f) {
      return function() {
        function b(a) {
          var c = null;
          0 < arguments.length && (c = N(Array.prototype.slice.call(arguments, 0), 0));
          return g.call(this, c);
        }
        function g(b) {
          return W.t(a, c, d, e, xd.b(f, b));
        }
        b.n = 0;
        b.g = function(a) {
          a = G(a);
          return g(a);
        };
        b.e = g;
        return b;
      }();
    }
    a.n = 4;
    a.g = function(a) {
      var c = I(a);
      a = M(a);
      var d = I(a);
      a = M(a);
      var e = I(a);
      a = M(a);
      var f = I(a);
      a = J(a);
      return b(c, d, e, f, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, g, h, l, m) {
    switch(arguments.length) {
      case 1:
        return d;
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, h);
      case 4:
        return a.call(this, d, g, h, l);
      default:
        return e.e(d, g, h, l, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.n = 4;
  d.g = e.g;
  d.a = function(a) {
    return a;
  };
  d.b = c;
  d.c = b;
  d.l = a;
  d.e = e.e;
  return d;
}();
function Kd(a, b, c, d) {
  this.state = a;
  this.m = b;
  this.wc = c;
  this.Yb = d;
  this.h = 6455296;
  this.p = 16386;
}
k = Kd.prototype;
k.G = function() {
  return this[da] || (this[da] = ++fa);
};
k.Tb = function(a, b, c) {
  for (var d = G(this.Yb), e = null, f = 0, g = 0;;) {
    if (g < f) {
      a = e.M(null, g);
      var h = T.c(a, 0, null);
      a = T.c(a, 1, null);
      var l = b, m = c;
      a.l ? a.l(h, this, l, m) : a.call(null, h, this, l, m);
      g += 1;
    } else {
      if (a = G(d)) {
        d = a, Jc(d) ? (e = Lb(d), d = Mb(d), a = e, f = R(e), e = a) : (a = I(d), h = T.c(a, 0, null), a = T.c(a, 1, null), e = h, f = b, g = c, a.l ? a.l(e, this, f, g) : a.call(null, e, this, f, g), d = M(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
k.u = function() {
  return this.m;
};
k.Ra = function() {
  return this.state;
};
k.C = function(a, b) {
  return this === b;
};
var Nd = function() {
  function a(a) {
    return new Kd(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var h = null;
      1 < arguments.length && (h = N(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, h);
    }
    function b(a, c) {
      var d = Oc(c) ? W.b(Ld, c) : c, e = U.b(d, Md), d = U.b(d, Ca);
      return new Kd(a, d, e, null);
    }
    a.n = 1;
    a.g = function(a) {
      var c = I(a);
      a = J(a);
      return b(c, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, N(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.n = 1;
  b.g = c.g;
  b.a = a;
  b.e = c.e;
  return b;
}();
function Od(a, b) {
  if (a instanceof Kd) {
    var c = a.wc;
    if (null != c && !u(c.a ? c.a(b) : c.call(null, b))) {
      throw Error([y("Assert failed: "), y("Validator rejected reference state"), y("\n"), y(function() {
        var a = fd(new F(null, "validate", "validate", 1439230700, null), new F(null, "new-value", "new-value", -1567397401, null));
        return Pd.a ? Pd.a(a) : Pd.call(null, a);
      }())].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.Yb && Eb(a, c, b);
    return b;
  }
  return Pb(a, b);
}
function Qd(a) {
  this.state = a;
  this.p = 0;
  this.h = 32768;
}
Qd.prototype.Ra = function() {
  return this.state;
};
Qd.prototype.mc = function(a) {
  return this.state = a;
};
var Rd = function() {
  function a(a, b, c, d) {
    return new ld(null, function() {
      var f = G(b), p = G(c), q = G(d);
      if (f && p && q) {
        var s = P, x;
        x = I(f);
        var z = I(p), B = I(q);
        x = a.c ? a.c(x, z, B) : a.call(null, x, z, B);
        f = s(x, e.l(a, J(f), J(p), J(q)));
      } else {
        f = null;
      }
      return f;
    }, null, null);
  }
  function b(a, b, c) {
    return new ld(null, function() {
      var d = G(b), f = G(c);
      if (d && f) {
        var p = P, q;
        q = I(d);
        var s = I(f);
        q = a.b ? a.b(q, s) : a.call(null, q, s);
        d = p(q, e.c(a, J(d), J(f)));
      } else {
        d = null;
      }
      return d;
    }, null, null);
  }
  function c(a, b) {
    return new ld(null, function() {
      var c = G(b);
      if (c) {
        if (Jc(c)) {
          for (var d = Lb(c), f = R(d), p = new nd(Array(f), 0), q = 0;;) {
            if (q < f) {
              sd(p, function() {
                var b = A.b(d, q);
                return a.a ? a.a(b) : a.call(null, b);
              }()), q += 1;
            } else {
              break;
            }
          }
          return rd(p.ja(), e.b(a, Mb(c)));
        }
        return P(function() {
          var b = I(c);
          return a.a ? a.a(b) : a.call(null, b);
        }(), e.b(a, J(c)));
      }
      return null;
    }, null, null);
  }
  function d(a) {
    return function(b) {
      return function() {
        function c(d, e) {
          var f = a.a ? a.a(e) : a.call(null, e);
          return b.b ? b.b(d, f) : b.call(null, d, f);
        }
        function d(a) {
          return b.a ? b.a(a) : b.call(null, a);
        }
        function e() {
          return b.i ? b.i() : b.call(null);
        }
        var f = null, q = function() {
          function c(a, b, e) {
            var f = null;
            2 < arguments.length && (f = N(Array.prototype.slice.call(arguments, 2), 0));
            return d.call(this, a, b, f);
          }
          function d(c, e, f) {
            e = W.c(a, e, f);
            return b.b ? b.b(c, e) : b.call(null, c, e);
          }
          c.n = 2;
          c.g = function(a) {
            var b = I(a);
            a = M(a);
            var c = I(a);
            a = J(a);
            return d(b, c, a);
          };
          c.e = d;
          return c;
        }(), f = function(a, b, f) {
          switch(arguments.length) {
            case 0:
              return e.call(this);
            case 1:
              return d.call(this, a);
            case 2:
              return c.call(this, a, b);
            default:
              return q.e(a, b, N(arguments, 2));
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        f.n = 2;
        f.g = q.g;
        f.i = e;
        f.a = d;
        f.b = c;
        f.e = q.e;
        return f;
      }();
    };
  }
  var e = null, f = function() {
    function a(c, d, e, f, g) {
      var s = null;
      4 < arguments.length && (s = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, s);
    }
    function b(a, c, d, f, g) {
      var h = function z(a) {
        return new ld(null, function() {
          var b = e.b(G, a);
          return Ed(Sc, b) ? P(e.b(I, b), z(e.b(J, b))) : null;
        }, null, null);
      };
      return e.b(function() {
        return function(b) {
          return W.b(a, b);
        };
      }(h), h(xc.e(g, f, N([d, c], 0))));
    }
    a.n = 4;
    a.g = function(a) {
      var c = I(a);
      a = M(a);
      var d = I(a);
      a = M(a);
      var e = I(a);
      a = M(a);
      var f = I(a);
      a = J(a);
      return b(c, d, e, f, a);
    };
    a.e = b;
    return a;
  }(), e = function(e, h, l, m, n) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, h);
      case 3:
        return b.call(this, e, h, l);
      case 4:
        return a.call(this, e, h, l, m);
      default:
        return f.e(e, h, l, m, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.n = 4;
  e.g = f.g;
  e.a = d;
  e.b = c;
  e.c = b;
  e.l = a;
  e.e = f.e;
  return e;
}(), Sd = function() {
  function a(a, b) {
    return new ld(null, function() {
      if (0 < a) {
        var f = G(b);
        return f ? P(I(f), c.b(a - 1, J(f))) : null;
      }
      return null;
    }, null, null);
  }
  function b(a) {
    return function(b) {
      return function(a) {
        return function() {
          function c(d, g) {
            var h = mb(a), l = a.mc(a.Ra(null) - 1), h = 0 < h ? b.b ? b.b(d, g) : b.call(null, d, g) : d;
            return 0 < l ? h : lc(h) ? h : new kc(h);
          }
          function d(a) {
            return b.a ? b.a(a) : b.call(null, a);
          }
          function l() {
            return b.i ? b.i() : b.call(null);
          }
          var m = null, m = function(a, b) {
            switch(arguments.length) {
              case 0:
                return l.call(this);
              case 1:
                return d.call(this, a);
              case 2:
                return c.call(this, a, b);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          m.i = l;
          m.a = d;
          m.b = c;
          return m;
        }();
      }(new Qd(a));
    };
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), Td = function() {
  function a(a, b) {
    return Sd.b(a, c.a(b));
  }
  function b(a) {
    return new ld(null, function() {
      return P(a, c.a(a));
    }, null, null);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), Ud = function() {
  function a(a, b) {
    return new ld(null, function() {
      var f = G(b);
      if (f) {
        if (Jc(f)) {
          for (var g = Lb(f), h = R(g), l = new nd(Array(h), 0), m = 0;;) {
            if (m < h) {
              var n;
              n = A.b(g, m);
              n = a.a ? a.a(n) : a.call(null, n);
              u(n) && (n = A.b(g, m), l.add(n));
              m += 1;
            } else {
              break;
            }
          }
          return rd(l.ja(), c.b(a, Mb(f)));
        }
        g = I(f);
        f = J(f);
        return u(a.a ? a.a(g) : a.call(null, g)) ? P(g, c.b(a, f)) : c.b(a, f);
      }
      return null;
    }, null, null);
  }
  function b(a) {
    return function(b) {
      return function() {
        function c(f, g) {
          return u(a.a ? a.a(g) : a.call(null, g)) ? b.b ? b.b(f, g) : b.call(null, f, g) : f;
        }
        function g(a) {
          return b.a ? b.a(a) : b.call(null, a);
        }
        function h() {
          return b.i ? b.i() : b.call(null);
        }
        var l = null, l = function(a, b) {
          switch(arguments.length) {
            case 0:
              return h.call(this);
            case 1:
              return g.call(this, a);
            case 2:
              return c.call(this, a, b);
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        l.i = h;
        l.a = g;
        l.b = c;
        return l;
      }();
    };
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), Vd = function() {
  function a(a, b) {
    return Ud.b(Fd(a), b);
  }
  function b(a) {
    return Ud.a(Fd(a));
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), Wd = function() {
  function a(a, b, c) {
    return a && (a.p & 4 || a.ec) ? uc(zd(Tc.l(b, Ad, Fb(a), c)), Fc(a)) : Tc.l(b, xc, a, c);
  }
  function b(a, b) {
    return null != a ? a && (a.p & 4 || a.ec) ? uc(zd(Oa.c(Gb, Fb(a), b)), Fc(a)) : Oa.c(Ua, a, b) : Oa.c(xc, K, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}();
function Xd(a, b) {
  return zd(Oa.c(function(b, d) {
    return u(a.a ? a.a(d) : a.call(null, d)) ? Ad.b(b, d) : b;
  }, Fb(wc), b));
}
var Yd = function() {
  function a(a, b, c) {
    var g = Nc;
    for (b = G(b);;) {
      if (b) {
        var h = a;
        if (h ? h.h & 256 || h.Pb || (h.h ? 0 : v(bb, h)) : v(bb, h)) {
          a = U.c(a, I(b), g);
          if (g === a) {
            return c;
          }
          b = M(b);
        } else {
          return c;
        }
      } else {
        return a;
      }
    }
  }
  function b(a, b) {
    return c.c(a, b, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}();
function Zd(a, b) {
  this.r = a;
  this.d = b;
}
function $d(a) {
  return new Zd(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function ae(a) {
  a = a.j;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function be(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = $d(a);
    d.d[0] = c;
    c = d;
    b -= 5;
  }
}
var de = function ce(b, c, d, e) {
  var f = new Zd(d.r, Na(d.d)), g = b.j - 1 >>> c & 31;
  5 === c ? f.d[g] = e : (d = d.d[g], b = null != d ? ce(b, c - 5, d, e) : be(null, c - 5, e), f.d[g] = b);
  return f;
};
function ee(a, b) {
  throw Error([y("No item "), y(a), y(" in vector of length "), y(b)].join(""));
}
function fe(a, b) {
  if (b >= ae(a)) {
    return a.q;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.d[b >>> d & 31], d = e
    } else {
      return c.d;
    }
  }
}
function ge(a, b) {
  return 0 <= b && b < a.j ? fe(a, b) : ee(b, a.j);
}
var ie = function he(b, c, d, e, f) {
  var g = new Zd(d.r, Na(d.d));
  if (0 === c) {
    g.d[e & 31] = f;
  } else {
    var h = e >>> c & 31;
    b = he(b, c - 5, d.d[h], e, f);
    g.d[h] = b;
  }
  return g;
};
function je(a, b, c, d, e, f) {
  this.k = a;
  this.mb = b;
  this.d = c;
  this.Fa = d;
  this.start = e;
  this.end = f;
}
je.prototype.wb = function() {
  return this.k < this.end;
};
je.prototype.next = function() {
  32 === this.k - this.mb && (this.d = fe(this.Fa, this.k), this.mb += 32);
  var a = this.d[this.k & 31];
  this.k += 1;
  return a;
};
function Y(a, b, c, d, e, f) {
  this.m = a;
  this.j = b;
  this.shift = c;
  this.root = d;
  this.q = e;
  this.o = f;
  this.h = 167668511;
  this.p = 8196;
}
k = Y.prototype;
k.toString = function() {
  return Sb(this);
};
k.H = function(a, b) {
  return C.c(this, b, null);
};
k.D = function(a, b, c) {
  return "number" === typeof b ? A.c(this, b, c) : c;
};
k.M = function(a, b) {
  return ge(this, b)[b & 31];
};
k.Z = function(a, b, c) {
  return 0 <= b && b < this.j ? fe(this, b)[b & 31] : c;
};
k.Jb = function(a, b, c) {
  if (0 <= b && b < this.j) {
    return ae(this) <= b ? (a = Na(this.q), a[b & 31] = c, new Y(this.m, this.j, this.shift, this.root, a, null)) : new Y(this.m, this.j, this.shift, ie(this, this.shift, this.root, b, c), this.q, null);
  }
  if (b === this.j) {
    return Ua(this, c);
  }
  throw Error([y("Index "), y(b), y(" out of bounds  [0,"), y(this.j), y("]")].join(""));
};
k.bb = function() {
  var a = this.j;
  return new je(0, 0, 0 < R(this) ? fe(this, 0) : null, this, 0, a);
};
k.u = function() {
  return this.m;
};
k.J = function() {
  return this.j;
};
k.Ib = function() {
  return A.b(this, 0);
};
k.Qb = function() {
  return A.b(this, 1);
};
k.rb = function() {
  return 0 < this.j ? new rc(this, this.j - 1, null) : null;
};
k.G = function() {
  var a = this.o;
  return null != a ? a : this.o = a = ic(this);
};
k.C = function(a, b) {
  if (b instanceof Y) {
    if (this.j === R(b)) {
      for (var c = Qb(this), d = Qb(b);;) {
        if (u(c.wb())) {
          var e = c.next(), f = d.next();
          if (!dc.b(e, f)) {
            return!1;
          }
        } else {
          return!0;
        }
      }
    } else {
      return!1;
    }
  } else {
    return sc(this, b);
  }
};
k.Sa = function() {
  var a = this;
  return new ke(a.j, a.shift, function() {
    var b = a.root;
    return le.a ? le.a(b) : le.call(null, b);
  }(), function() {
    var b = a.q;
    return me.a ? me.a(b) : me.call(null, b);
  }());
};
k.N = function() {
  return uc(wc, this.m);
};
k.P = function(a, b) {
  return mc.b(this, b);
};
k.Q = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.j) {
      var e = fe(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var g = e[f], d = b.b ? b.b(d, g) : b.call(null, d, g);
            if (lc(d)) {
              e = d;
              break a;
            }
            f += 1;
          } else {
            e = d;
            break a;
          }
        }
        e = void 0;
      }
      if (lc(e)) {
        return b = e, O.a ? O.a(b) : O.call(null, b);
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
k.ab = function(a, b, c) {
  if ("number" === typeof b) {
    return lb(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
k.I = function() {
  if (0 === this.j) {
    return null;
  }
  if (32 >= this.j) {
    return new cc(this.q, 0);
  }
  var a;
  a: {
    a = this.root;
    for (var b = this.shift;;) {
      if (0 < b) {
        b -= 5, a = a.d[0];
      } else {
        a = a.d;
        break a;
      }
    }
    a = void 0;
  }
  return ne.l ? ne.l(this, a, 0, 0) : ne.call(null, this, a, 0, 0);
};
k.A = function(a, b) {
  return new Y(b, this.j, this.shift, this.root, this.q, this.o);
};
k.L = function(a, b) {
  if (32 > this.j - ae(this)) {
    for (var c = this.q.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.q[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new Y(this.m, this.j + 1, this.shift, this.root, d, null);
  }
  c = (d = this.j >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = $d(null), d.d[0] = this.root, e = be(null, this.shift, new Zd(null, this.q)), d.d[1] = e) : d = de(this, this.shift, this.root, new Zd(null, this.q));
  return new Y(this.m, this.j + 1, c, d, [b], null);
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.M(null, c);
      case 3:
        return this.Z(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.M(null, c);
  };
  a.c = function(a, c, d) {
    return this.Z(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Na(b)));
};
k.a = function(a) {
  return this.M(null, a);
};
k.b = function(a, b) {
  return this.Z(null, a, b);
};
var Z = new Zd(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), wc = new Y(null, 0, 5, Z, [], 0);
Y.prototype[La] = function() {
  return gc(this);
};
function oe(a) {
  return Hb(Oa.c(Gb, Fb(wc), a));
}
var pe = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    if (a instanceof cc && 0 === a.k) {
      a: {
        a = a.d;
        var b = a.length;
        if (32 > b) {
          a = new Y(null, b, 5, Z, a, null);
        } else {
          for (var e = 32, f = (new Y(null, 32, 5, Z, a.slice(0, 32), null)).Sa(null);;) {
            if (e < b) {
              var g = e + 1, f = Ad.b(f, a[e]), e = g
            } else {
              a = Hb(f);
              break a;
            }
          }
          a = void 0;
        }
      }
    } else {
      a = oe(a);
    }
    return a;
  }
  a.n = 0;
  a.g = function(a) {
    a = G(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function qe(a, b, c, d, e, f) {
  this.ca = a;
  this.Ca = b;
  this.k = c;
  this.O = d;
  this.m = e;
  this.o = f;
  this.h = 32375020;
  this.p = 1536;
}
k = qe.prototype;
k.toString = function() {
  return Sb(this);
};
k.u = function() {
  return this.m;
};
k.$ = function() {
  if (this.O + 1 < this.Ca.length) {
    var a;
    a = this.ca;
    var b = this.Ca, c = this.k, d = this.O + 1;
    a = ne.l ? ne.l(a, b, c, d) : ne.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return Nb(this);
};
k.G = function() {
  var a = this.o;
  return null != a ? a : this.o = a = ic(this);
};
k.C = function(a, b) {
  return sc(this, b);
};
k.N = function() {
  return uc(wc, this.m);
};
k.P = function(a, b) {
  var c = this;
  return mc.b(function() {
    var a = c.ca, b = c.k + c.O, f = R(c.ca);
    return re.c ? re.c(a, b, f) : re.call(null, a, b, f);
  }(), b);
};
k.Q = function(a, b, c) {
  var d = this;
  return mc.c(function() {
    var a = d.ca, b = d.k + d.O, c = R(d.ca);
    return re.c ? re.c(a, b, c) : re.call(null, a, b, c);
  }(), b, c);
};
k.S = function() {
  return this.Ca[this.O];
};
k.X = function() {
  if (this.O + 1 < this.Ca.length) {
    var a;
    a = this.ca;
    var b = this.Ca, c = this.k, d = this.O + 1;
    a = ne.l ? ne.l(a, b, c, d) : ne.call(null, a, b, c, d);
    return null == a ? K : a;
  }
  return Mb(this);
};
k.I = function() {
  return this;
};
k.Fb = function() {
  return pd.b(this.Ca, this.O);
};
k.Gb = function() {
  var a = this.k + this.Ca.length;
  if (a < Sa(this.ca)) {
    var b = this.ca, c = fe(this.ca, a);
    return ne.l ? ne.l(b, c, a, 0) : ne.call(null, b, c, a, 0);
  }
  return K;
};
k.A = function(a, b) {
  var c = this.ca, d = this.Ca, e = this.k, f = this.O;
  return ne.t ? ne.t(c, d, e, f, b) : ne.call(null, c, d, e, f, b);
};
k.L = function(a, b) {
  return P(b, this);
};
k.Eb = function() {
  var a = this.k + this.Ca.length;
  if (a < Sa(this.ca)) {
    var b = this.ca, c = fe(this.ca, a);
    return ne.l ? ne.l(b, c, a, 0) : ne.call(null, b, c, a, 0);
  }
  return null;
};
qe.prototype[La] = function() {
  return gc(this);
};
var ne = function() {
  function a(a, b, c, d, l) {
    return new qe(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new qe(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new qe(a, ge(a, b), b, c, null, null);
  }
  var d = null, d = function(d, f, g, h, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, f, g);
      case 4:
        return b.call(this, d, f, g, h);
      case 5:
        return a.call(this, d, f, g, h, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.l = b;
  d.t = a;
  return d;
}();
function se(a, b, c, d, e) {
  this.m = a;
  this.Fa = b;
  this.start = c;
  this.end = d;
  this.o = e;
  this.h = 166617887;
  this.p = 8192;
}
k = se.prototype;
k.toString = function() {
  return Sb(this);
};
k.H = function(a, b) {
  return C.c(this, b, null);
};
k.D = function(a, b, c) {
  return "number" === typeof b ? A.c(this, b, c) : c;
};
k.M = function(a, b) {
  return 0 > b || this.end <= this.start + b ? ee(b, this.end - this.start) : A.b(this.Fa, this.start + b);
};
k.Z = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : A.c(this.Fa, this.start + b, c);
};
k.Jb = function(a, b, c) {
  var d = this.start + b;
  a = this.m;
  c = Ac.c(this.Fa, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return te.t ? te.t(a, c, b, d, null) : te.call(null, a, c, b, d, null);
};
k.u = function() {
  return this.m;
};
k.J = function() {
  return this.end - this.start;
};
k.rb = function() {
  return this.start !== this.end ? new rc(this, this.end - this.start - 1, null) : null;
};
k.G = function() {
  var a = this.o;
  return null != a ? a : this.o = a = ic(this);
};
k.C = function(a, b) {
  return sc(this, b);
};
k.N = function() {
  return uc(wc, this.m);
};
k.P = function(a, b) {
  return mc.b(this, b);
};
k.Q = function(a, b, c) {
  return mc.c(this, b, c);
};
k.ab = function(a, b, c) {
  if ("number" === typeof b) {
    return lb(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
k.I = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : P(A.b(a.Fa, e), new ld(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
k.A = function(a, b) {
  var c = this.Fa, d = this.start, e = this.end, f = this.o;
  return te.t ? te.t(b, c, d, e, f) : te.call(null, b, c, d, e, f);
};
k.L = function(a, b) {
  var c = this.m, d = lb(this.Fa, this.end, b), e = this.start, f = this.end + 1;
  return te.t ? te.t(c, d, e, f, null) : te.call(null, c, d, e, f, null);
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.M(null, c);
      case 3:
        return this.Z(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.M(null, c);
  };
  a.c = function(a, c, d) {
    return this.Z(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Na(b)));
};
k.a = function(a) {
  return this.M(null, a);
};
k.b = function(a, b) {
  return this.Z(null, a, b);
};
se.prototype[La] = function() {
  return gc(this);
};
function te(a, b, c, d, e) {
  for (;;) {
    if (b instanceof se) {
      c = b.start + c, d = b.start + d, b = b.Fa;
    } else {
      var f = R(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new se(a, b, c, d, e);
    }
  }
}
var re = function() {
  function a(a, b, c) {
    return te(null, a, b, c, null);
  }
  function b(a, b) {
    return c.c(a, b, R(a));
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}();
function ue(a, b) {
  return a === b.r ? b : new Zd(a, Na(b.d));
}
function le(a) {
  return new Zd({}, Na(a.d));
}
function me(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Lc(a, 0, b, 0, a.length);
  return b;
}
var we = function ve(b, c, d, e) {
  d = ue(b.root.r, d);
  var f = b.j - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.d[f];
    b = null != g ? ve(b, c - 5, g, e) : be(b.root.r, c - 5, e);
  }
  d.d[f] = b;
  return d;
};
function ke(a, b, c, d) {
  this.j = a;
  this.shift = b;
  this.root = c;
  this.q = d;
  this.h = 275;
  this.p = 88;
}
k = ke.prototype;
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.H(null, c);
      case 3:
        return this.D(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.H(null, c);
  };
  a.c = function(a, c, d) {
    return this.D(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Na(b)));
};
k.a = function(a) {
  return this.H(null, a);
};
k.b = function(a, b) {
  return this.D(null, a, b);
};
k.H = function(a, b) {
  return C.c(this, b, null);
};
k.D = function(a, b, c) {
  return "number" === typeof b ? A.c(this, b, c) : c;
};
k.M = function(a, b) {
  if (this.root.r) {
    return ge(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
k.Z = function(a, b, c) {
  return 0 <= b && b < this.j ? A.b(this, b) : c;
};
k.J = function() {
  if (this.root.r) {
    return this.j;
  }
  throw Error("count after persistent!");
};
k.Sb = function(a, b, c) {
  var d = this;
  if (d.root.r) {
    if (0 <= b && b < d.j) {
      return ae(this) <= b ? d.q[b & 31] = c : (a = function() {
        return function f(a, h) {
          var l = ue(d.root.r, h);
          if (0 === a) {
            l.d[b & 31] = c;
          } else {
            var m = b >>> a & 31, n = f(a - 5, l.d[m]);
            l.d[m] = n;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.j) {
      return Gb(this, c);
    }
    throw Error([y("Index "), y(b), y(" out of bounds for TransientVector of length"), y(d.j)].join(""));
  }
  throw Error("assoc! after persistent!");
};
k.eb = function(a, b, c) {
  if ("number" === typeof b) {
    return Jb(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
k.fb = function(a, b) {
  if (this.root.r) {
    if (32 > this.j - ae(this)) {
      this.q[this.j & 31] = b;
    } else {
      var c = new Zd(this.root.r, this.q), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.q = d;
      if (this.j >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = be(this.root.r, this.shift, c);
        this.root = new Zd(this.root.r, d);
        this.shift = e;
      } else {
        this.root = we(this, this.shift, this.root, c);
      }
    }
    this.j += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
k.gb = function() {
  if (this.root.r) {
    this.root.r = null;
    var a = this.j - ae(this), b = Array(a);
    Lc(this.q, 0, b, 0, a);
    return new Y(null, this.j, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function xe() {
  this.p = 0;
  this.h = 2097152;
}
xe.prototype.C = function() {
  return!1;
};
var ye = new xe;
function ze(a, b) {
  return Pc(Hc(b) ? R(a) === R(b) ? Ed(Sc, Rd.b(function(a) {
    return dc.b(U.c(b, I(a), ye), I(M(a)));
  }, a)) : null : null);
}
function Ae(a, b) {
  var c = a.d;
  if (b instanceof X) {
    a: {
      for (var d = c.length, e = b.aa, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var g = c[f];
        if (g instanceof X && e === g.aa) {
          c = f;
          break a;
        }
        f += 2;
      }
      c = void 0;
    }
  } else {
    if (d = ba(b), u(u(d) ? d : "number" === typeof b)) {
      a: {
        d = c.length;
        for (e = 0;;) {
          if (d <= e) {
            c = -1;
            break a;
          }
          if (b === c[e]) {
            c = e;
            break a;
          }
          e += 2;
        }
        c = void 0;
      }
    } else {
      if (b instanceof F) {
        a: {
          d = c.length;
          e = b.ma;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            g = c[f];
            if (g instanceof F && e === g.ma) {
              c = f;
              break a;
            }
            f += 2;
          }
          c = void 0;
        }
      } else {
        if (null == b) {
          a: {
            d = c.length;
            for (e = 0;;) {
              if (d <= e) {
                c = -1;
                break a;
              }
              if (null == c[e]) {
                c = e;
                break a;
              }
              e += 2;
            }
            c = void 0;
          }
        } else {
          a: {
            d = c.length;
            for (e = 0;;) {
              if (d <= e) {
                c = -1;
                break a;
              }
              if (dc.b(b, c[e])) {
                c = e;
                break a;
              }
              e += 2;
            }
            c = void 0;
          }
        }
      }
    }
  }
  return c;
}
function Be(a, b, c) {
  this.d = a;
  this.k = b;
  this.ga = c;
  this.p = 0;
  this.h = 32374990;
}
k = Be.prototype;
k.toString = function() {
  return Sb(this);
};
k.u = function() {
  return this.ga;
};
k.$ = function() {
  return this.k < this.d.length - 2 ? new Be(this.d, this.k + 2, this.ga) : null;
};
k.J = function() {
  return(this.d.length - this.k) / 2;
};
k.G = function() {
  return ic(this);
};
k.C = function(a, b) {
  return sc(this, b);
};
k.N = function() {
  return uc(K, this.ga);
};
k.P = function(a, b) {
  return Q.b(b, this);
};
k.Q = function(a, b, c) {
  return Q.c(b, c, this);
};
k.S = function() {
  return new Y(null, 2, 5, Z, [this.d[this.k], this.d[this.k + 1]], null);
};
k.X = function() {
  return this.k < this.d.length - 2 ? new Be(this.d, this.k + 2, this.ga) : K;
};
k.I = function() {
  return this;
};
k.A = function(a, b) {
  return new Be(this.d, this.k, b);
};
k.L = function(a, b) {
  return P(b, this);
};
Be.prototype[La] = function() {
  return gc(this);
};
function Ce(a, b, c) {
  this.d = a;
  this.k = b;
  this.j = c;
}
Ce.prototype.wb = function() {
  return this.k < this.j;
};
Ce.prototype.next = function() {
  var a = new Y(null, 2, 5, Z, [this.d[this.k], this.d[this.k + 1]], null);
  this.k += 2;
  return a;
};
function t(a, b, c, d) {
  this.m = a;
  this.j = b;
  this.d = c;
  this.o = d;
  this.h = 16647951;
  this.p = 8196;
}
k = t.prototype;
k.toString = function() {
  return Sb(this);
};
k.H = function(a, b) {
  return C.c(this, b, null);
};
k.D = function(a, b, c) {
  a = Ae(this, b);
  return-1 === a ? c : this.d[a + 1];
};
k.bb = function() {
  return new Ce(this.d, 0, 2 * this.j);
};
k.u = function() {
  return this.m;
};
k.J = function() {
  return this.j;
};
k.G = function() {
  var a = this.o;
  return null != a ? a : this.o = a = jc(this);
};
k.C = function(a, b) {
  if (b && (b.h & 1024 || b.gc)) {
    var c = this.d.length;
    if (this.j === b.J(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.D(null, this.d[d], Nc);
          if (e !== Nc) {
            if (dc.b(this.d[d + 1], e)) {
              d += 2;
            } else {
              return!1;
            }
          } else {
            return!1;
          }
        } else {
          return!0;
        }
      }
    } else {
      return!1;
    }
  } else {
    return ze(this, b);
  }
};
k.Sa = function() {
  return new Ee({}, this.d.length, Na(this.d));
};
k.N = function() {
  return rb(Fe, this.m);
};
k.P = function(a, b) {
  return Q.b(b, this);
};
k.Q = function(a, b, c) {
  return Q.c(b, c, this);
};
k.Hb = function(a, b) {
  if (0 <= Ae(this, b)) {
    var c = this.d.length, d = c - 2;
    if (0 === d) {
      return Ta(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new t(this.m, this.j - 1, d, null);
      }
      dc.b(b, this.d[e]) || (d[f] = this.d[e], d[f + 1] = this.d[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
k.ab = function(a, b, c) {
  a = Ae(this, b);
  if (-1 === a) {
    if (this.j < Ge) {
      a = this.d;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new t(this.m, this.j + 1, e, null);
    }
    return rb(db(Wd.b(He, this), b, c), this.m);
  }
  if (c === this.d[a + 1]) {
    return this;
  }
  b = Na(this.d);
  b[a + 1] = c;
  return new t(this.m, this.j, b, null);
};
k.Db = function(a, b) {
  return-1 !== Ae(this, b);
};
k.I = function() {
  var a = this.d;
  return 0 <= a.length - 2 ? new Be(a, 0, null) : null;
};
k.A = function(a, b) {
  return new t(b, this.j, this.d, this.o);
};
k.L = function(a, b) {
  if (Ic(b)) {
    return db(this, A.b(b, 0), A.b(b, 1));
  }
  for (var c = this, d = G(b);;) {
    if (null == d) {
      return c;
    }
    var e = I(d);
    if (Ic(e)) {
      c = db(c, A.b(e, 0), A.b(e, 1)), d = M(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.H(null, c);
      case 3:
        return this.D(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.H(null, c);
  };
  a.c = function(a, c, d) {
    return this.D(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Na(b)));
};
k.a = function(a) {
  return this.H(null, a);
};
k.b = function(a, b) {
  return this.D(null, a, b);
};
var Fe = new t(null, 0, [], null), Ge = 8;
t.prototype[La] = function() {
  return gc(this);
};
function Ee(a, b, c) {
  this.Ta = a;
  this.Xa = b;
  this.d = c;
  this.p = 56;
  this.h = 258;
}
k = Ee.prototype;
k.eb = function(a, b, c) {
  var d = this;
  if (u(d.Ta)) {
    a = Ae(this, b);
    if (-1 === a) {
      return d.Xa + 2 <= 2 * Ge ? (d.Xa += 2, d.d.push(b), d.d.push(c), this) : Bd.c(function() {
        var a = d.Xa, b = d.d;
        return Ie.b ? Ie.b(a, b) : Ie.call(null, a, b);
      }(), b, c);
    }
    c !== d.d[a + 1] && (d.d[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
k.fb = function(a, b) {
  if (u(this.Ta)) {
    if (b ? b.h & 2048 || b.hc || (b.h ? 0 : v(gb, b)) : v(gb, b)) {
      return Ib(this, Je.a ? Je.a(b) : Je.call(null, b), Ke.a ? Ke.a(b) : Ke.call(null, b));
    }
    for (var c = G(b), d = this;;) {
      var e = I(c);
      if (u(e)) {
        var f = e, c = M(c), d = Ib(d, function() {
          var a = f;
          return Je.a ? Je.a(a) : Je.call(null, a);
        }(), function() {
          var a = f;
          return Ke.a ? Ke.a(a) : Ke.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
k.gb = function() {
  if (u(this.Ta)) {
    return this.Ta = !1, new t(null, Zc(this.Xa, 2), this.d, null);
  }
  throw Error("persistent! called twice");
};
k.H = function(a, b) {
  return C.c(this, b, null);
};
k.D = function(a, b, c) {
  if (u(this.Ta)) {
    return a = Ae(this, b), -1 === a ? c : this.d[a + 1];
  }
  throw Error("lookup after persistent!");
};
k.J = function() {
  if (u(this.Ta)) {
    return Zc(this.Xa, 2);
  }
  throw Error("count after persistent!");
};
function Ie(a, b) {
  for (var c = Fb(He), d = 0;;) {
    if (d < a) {
      c = Bd.c(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function Le() {
  this.F = !1;
}
function Me(a, b) {
  return a === b ? !0 : id(a, b) ? !0 : dc.b(a, b);
}
var Ne = function() {
  function a(a, b, c, g, h) {
    a = Na(a);
    a[b] = c;
    a[g] = h;
    return a;
  }
  function b(a, b, c) {
    a = Na(a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, f, g, h) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.t = a;
  return c;
}();
function Oe(a, b) {
  var c = Array(a.length - 2);
  Lc(a, 0, c, 0, 2 * b);
  Lc(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
var Pe = function() {
  function a(a, b, c, g, h, l) {
    a = a.Ua(b);
    a.d[c] = g;
    a.d[h] = l;
    return a;
  }
  function b(a, b, c, g) {
    a = a.Ua(b);
    a.d[c] = g;
    return a;
  }
  var c = null, c = function(c, e, f, g, h, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, f, g);
      case 6:
        return a.call(this, c, e, f, g, h, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = b;
  c.R = a;
  return c;
}();
function Qe(a, b, c) {
  this.r = a;
  this.B = b;
  this.d = c;
}
k = Qe.prototype;
k.Ua = function(a) {
  if (a === this.r) {
    return this;
  }
  var b = bd(this.B), c = Array(0 > b ? 4 : 2 * (b + 1));
  Lc(this.d, 0, c, 0, 2 * b);
  return new Qe(a, this.B, c);
};
k.jb = function() {
  var a = this.d;
  return Re.a ? Re.a(a) : Re.call(null, a);
};
k.Ia = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.B & e)) {
    return d;
  }
  var f = bd(this.B & e - 1), e = this.d[2 * f], f = this.d[2 * f + 1];
  return null == e ? f.Ia(a + 5, b, c, d) : Me(c, e) ? f : d;
};
k.ia = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), h = bd(this.B & g - 1);
  if (0 === (this.B & g)) {
    var l = bd(this.B);
    if (2 * l < this.d.length) {
      var m = this.Ua(a), n = m.d;
      f.F = !0;
      Mc(n, 2 * h, n, 2 * (h + 1), 2 * (l - h));
      n[2 * h] = d;
      n[2 * h + 1] = e;
      m.B |= g;
      return m;
    }
    if (16 <= l) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[c >>> b & 31] = Se.ia(a, b + 5, c, d, e, f);
      for (m = h = 0;;) {
        if (32 > h) {
          0 !== (this.B >>> h & 1) && (g[h] = null != this.d[m] ? Se.ia(a, b + 5, $b(this.d[m]), this.d[m], this.d[m + 1], f) : this.d[m + 1], m += 2), h += 1;
        } else {
          break;
        }
      }
      return new Te(a, l + 1, g);
    }
    n = Array(2 * (l + 4));
    Lc(this.d, 0, n, 0, 2 * h);
    n[2 * h] = d;
    n[2 * h + 1] = e;
    Lc(this.d, 2 * h, n, 2 * (h + 1), 2 * (l - h));
    f.F = !0;
    m = this.Ua(a);
    m.d = n;
    m.B |= g;
    return m;
  }
  var p = this.d[2 * h], q = this.d[2 * h + 1];
  if (null == p) {
    return l = q.ia(a, b + 5, c, d, e, f), l === q ? this : Pe.l(this, a, 2 * h + 1, l);
  }
  if (Me(d, p)) {
    return e === q ? this : Pe.l(this, a, 2 * h + 1, e);
  }
  f.F = !0;
  return Pe.R(this, a, 2 * h, null, 2 * h + 1, function() {
    var f = b + 5;
    return Ue.ea ? Ue.ea(a, f, p, q, c, d, e) : Ue.call(null, a, f, p, q, c, d, e);
  }());
};
k.ha = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = bd(this.B & f - 1);
  if (0 === (this.B & f)) {
    var h = bd(this.B);
    if (16 <= h) {
      f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      f[b >>> a & 31] = Se.ha(a + 5, b, c, d, e);
      for (var l = g = 0;;) {
        if (32 > g) {
          0 !== (this.B >>> g & 1) && (f[g] = null != this.d[l] ? Se.ha(a + 5, $b(this.d[l]), this.d[l], this.d[l + 1], e) : this.d[l + 1], l += 2), g += 1;
        } else {
          break;
        }
      }
      return new Te(null, h + 1, f);
    }
    l = Array(2 * (h + 1));
    Lc(this.d, 0, l, 0, 2 * g);
    l[2 * g] = c;
    l[2 * g + 1] = d;
    Lc(this.d, 2 * g, l, 2 * (g + 1), 2 * (h - g));
    e.F = !0;
    return new Qe(null, this.B | f, l);
  }
  var m = this.d[2 * g], n = this.d[2 * g + 1];
  if (null == m) {
    return h = n.ha(a + 5, b, c, d, e), h === n ? this : new Qe(null, this.B, Ne.c(this.d, 2 * g + 1, h));
  }
  if (Me(c, m)) {
    return d === n ? this : new Qe(null, this.B, Ne.c(this.d, 2 * g + 1, d));
  }
  e.F = !0;
  return new Qe(null, this.B, Ne.t(this.d, 2 * g, null, 2 * g + 1, function() {
    var e = a + 5;
    return Ue.R ? Ue.R(e, m, n, b, c, d) : Ue.call(null, e, m, n, b, c, d);
  }()));
};
k.kb = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.B & d)) {
    return this;
  }
  var e = bd(this.B & d - 1), f = this.d[2 * e], g = this.d[2 * e + 1];
  return null == f ? (a = g.kb(a + 5, b, c), a === g ? this : null != a ? new Qe(null, this.B, Ne.c(this.d, 2 * e + 1, a)) : this.B === d ? null : new Qe(null, this.B ^ d, Oe(this.d, e))) : Me(c, f) ? new Qe(null, this.B ^ d, Oe(this.d, e)) : this;
};
var Se = new Qe(null, 0, []);
function Te(a, b, c) {
  this.r = a;
  this.j = b;
  this.d = c;
}
k = Te.prototype;
k.Ua = function(a) {
  return a === this.r ? this : new Te(a, this.j, Na(this.d));
};
k.jb = function() {
  var a = this.d;
  return Ve.a ? Ve.a(a) : Ve.call(null, a);
};
k.Ia = function(a, b, c, d) {
  var e = this.d[b >>> a & 31];
  return null != e ? e.Ia(a + 5, b, c, d) : d;
};
k.ia = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, h = this.d[g];
  if (null == h) {
    return a = Pe.l(this, a, g, Se.ia(a, b + 5, c, d, e, f)), a.j += 1, a;
  }
  b = h.ia(a, b + 5, c, d, e, f);
  return b === h ? this : Pe.l(this, a, g, b);
};
k.ha = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.d[f];
  if (null == g) {
    return new Te(null, this.j + 1, Ne.c(this.d, f, Se.ha(a + 5, b, c, d, e)));
  }
  a = g.ha(a + 5, b, c, d, e);
  return a === g ? this : new Te(null, this.j, Ne.c(this.d, f, a));
};
k.kb = function(a, b, c) {
  var d = b >>> a & 31, e = this.d[d];
  if (null != e) {
    a = e.kb(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.j) {
          a: {
            e = this.d;
            a = e.length;
            b = Array(2 * (this.j - 1));
            c = 0;
            for (var f = 1, g = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[f] = e[c], f += 2, g |= 1 << c), c += 1;
              } else {
                d = new Qe(null, g, b);
                break a;
              }
            }
            d = void 0;
          }
        } else {
          d = new Te(null, this.j - 1, Ne.c(this.d, d, a));
        }
      } else {
        d = new Te(null, this.j, Ne.c(this.d, d, a));
      }
    }
    return d;
  }
  return this;
};
function We(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (Me(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Xe(a, b, c, d) {
  this.r = a;
  this.Aa = b;
  this.j = c;
  this.d = d;
}
k = Xe.prototype;
k.Ua = function(a) {
  if (a === this.r) {
    return this;
  }
  var b = Array(2 * (this.j + 1));
  Lc(this.d, 0, b, 0, 2 * this.j);
  return new Xe(a, this.Aa, this.j, b);
};
k.jb = function() {
  var a = this.d;
  return Re.a ? Re.a(a) : Re.call(null, a);
};
k.Ia = function(a, b, c, d) {
  a = We(this.d, this.j, c);
  return 0 > a ? d : Me(c, this.d[a]) ? this.d[a + 1] : d;
};
k.ia = function(a, b, c, d, e, f) {
  if (c === this.Aa) {
    b = We(this.d, this.j, d);
    if (-1 === b) {
      if (this.d.length > 2 * this.j) {
        return a = Pe.R(this, a, 2 * this.j, d, 2 * this.j + 1, e), f.F = !0, a.j += 1, a;
      }
      c = this.d.length;
      b = Array(c + 2);
      Lc(this.d, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.F = !0;
      f = this.j + 1;
      a === this.r ? (this.d = b, this.j = f, a = this) : a = new Xe(this.r, this.Aa, f, b);
      return a;
    }
    return this.d[b + 1] === e ? this : Pe.l(this, a, b + 1, e);
  }
  return(new Qe(a, 1 << (this.Aa >>> b & 31), [null, this, null, null])).ia(a, b, c, d, e, f);
};
k.ha = function(a, b, c, d, e) {
  return b === this.Aa ? (a = We(this.d, this.j, c), -1 === a ? (a = 2 * this.j, b = Array(a + 2), Lc(this.d, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.F = !0, new Xe(null, this.Aa, this.j + 1, b)) : dc.b(this.d[a], d) ? this : new Xe(null, this.Aa, this.j, Ne.c(this.d, a + 1, d))) : (new Qe(null, 1 << (this.Aa >>> a & 31), [null, this])).ha(a, b, c, d, e);
};
k.kb = function(a, b, c) {
  a = We(this.d, this.j, c);
  return-1 === a ? this : 1 === this.j ? null : new Xe(null, this.Aa, this.j - 1, Oe(this.d, Zc(a, 2)));
};
var Ue = function() {
  function a(a, b, c, g, h, l, m) {
    var n = $b(c);
    if (n === h) {
      return new Xe(null, n, 2, [c, g, l, m]);
    }
    var p = new Le;
    return Se.ia(a, b, n, c, g, p).ia(a, b, h, l, m, p);
  }
  function b(a, b, c, g, h, l) {
    var m = $b(b);
    if (m === g) {
      return new Xe(null, m, 2, [b, c, h, l]);
    }
    var n = new Le;
    return Se.ha(a, m, b, c, n).ha(a, g, h, l, n);
  }
  var c = null, c = function(c, e, f, g, h, l, m) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, g, h, l);
      case 7:
        return a.call(this, c, e, f, g, h, l, m);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.R = b;
  c.ea = a;
  return c;
}();
function Ye(a, b, c, d, e) {
  this.m = a;
  this.Ka = b;
  this.k = c;
  this.v = d;
  this.o = e;
  this.p = 0;
  this.h = 32374860;
}
k = Ye.prototype;
k.toString = function() {
  return Sb(this);
};
k.u = function() {
  return this.m;
};
k.G = function() {
  var a = this.o;
  return null != a ? a : this.o = a = ic(this);
};
k.C = function(a, b) {
  return sc(this, b);
};
k.N = function() {
  return uc(K, this.m);
};
k.P = function(a, b) {
  return Q.b(b, this);
};
k.Q = function(a, b, c) {
  return Q.c(b, c, this);
};
k.S = function() {
  return null == this.v ? new Y(null, 2, 5, Z, [this.Ka[this.k], this.Ka[this.k + 1]], null) : I(this.v);
};
k.X = function() {
  if (null == this.v) {
    var a = this.Ka, b = this.k + 2;
    return Re.c ? Re.c(a, b, null) : Re.call(null, a, b, null);
  }
  var a = this.Ka, b = this.k, c = M(this.v);
  return Re.c ? Re.c(a, b, c) : Re.call(null, a, b, c);
};
k.I = function() {
  return this;
};
k.A = function(a, b) {
  return new Ye(b, this.Ka, this.k, this.v, this.o);
};
k.L = function(a, b) {
  return P(b, this);
};
Ye.prototype[La] = function() {
  return gc(this);
};
var Re = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new Ye(null, a, b, null, null);
          }
          var g = a[b + 1];
          if (u(g) && (g = g.jb(), u(g))) {
            return new Ye(null, a, b + 2, g, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new Ye(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.c(a, 0, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function Ze(a, b, c, d, e) {
  this.m = a;
  this.Ka = b;
  this.k = c;
  this.v = d;
  this.o = e;
  this.p = 0;
  this.h = 32374860;
}
k = Ze.prototype;
k.toString = function() {
  return Sb(this);
};
k.u = function() {
  return this.m;
};
k.G = function() {
  var a = this.o;
  return null != a ? a : this.o = a = ic(this);
};
k.C = function(a, b) {
  return sc(this, b);
};
k.N = function() {
  return uc(K, this.m);
};
k.P = function(a, b) {
  return Q.b(b, this);
};
k.Q = function(a, b, c) {
  return Q.c(b, c, this);
};
k.S = function() {
  return I(this.v);
};
k.X = function() {
  var a = this.Ka, b = this.k, c = M(this.v);
  return Ve.l ? Ve.l(null, a, b, c) : Ve.call(null, null, a, b, c);
};
k.I = function() {
  return this;
};
k.A = function(a, b) {
  return new Ze(b, this.Ka, this.k, this.v, this.o);
};
k.L = function(a, b) {
  return P(b, this);
};
Ze.prototype[La] = function() {
  return gc(this);
};
var Ve = function() {
  function a(a, b, c, g) {
    if (null == g) {
      for (g = b.length;;) {
        if (c < g) {
          var h = b[c];
          if (u(h) && (h = h.jb(), u(h))) {
            return new Ze(a, b, c + 1, h, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new Ze(a, b, c, g, null);
    }
  }
  function b(a) {
    return c.l(null, a, 0, null);
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.l = a;
  return c;
}();
function $e(a, b, c, d, e, f) {
  this.m = a;
  this.j = b;
  this.root = c;
  this.V = d;
  this.ba = e;
  this.o = f;
  this.h = 16123663;
  this.p = 8196;
}
k = $e.prototype;
k.toString = function() {
  return Sb(this);
};
k.H = function(a, b) {
  return C.c(this, b, null);
};
k.D = function(a, b, c) {
  return null == b ? this.V ? this.ba : c : null == this.root ? c : this.root.Ia(0, $b(b), b, c);
};
k.u = function() {
  return this.m;
};
k.J = function() {
  return this.j;
};
k.G = function() {
  var a = this.o;
  return null != a ? a : this.o = a = jc(this);
};
k.C = function(a, b) {
  return ze(this, b);
};
k.Sa = function() {
  return new af({}, this.root, this.j, this.V, this.ba);
};
k.N = function() {
  return rb(He, this.m);
};
k.Hb = function(a, b) {
  if (null == b) {
    return this.V ? new $e(this.m, this.j - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.kb(0, $b(b), b);
  return c === this.root ? this : new $e(this.m, this.j - 1, c, this.V, this.ba, null);
};
k.ab = function(a, b, c) {
  if (null == b) {
    return this.V && c === this.ba ? this : new $e(this.m, this.V ? this.j : this.j + 1, this.root, !0, c, null);
  }
  a = new Le;
  b = (null == this.root ? Se : this.root).ha(0, $b(b), b, c, a);
  return b === this.root ? this : new $e(this.m, a.F ? this.j + 1 : this.j, b, this.V, this.ba, null);
};
k.Db = function(a, b) {
  return null == b ? this.V : null == this.root ? !1 : this.root.Ia(0, $b(b), b, Nc) !== Nc;
};
k.I = function() {
  if (0 < this.j) {
    var a = null != this.root ? this.root.jb() : null;
    return this.V ? P(new Y(null, 2, 5, Z, [null, this.ba], null), a) : a;
  }
  return null;
};
k.A = function(a, b) {
  return new $e(b, this.j, this.root, this.V, this.ba, this.o);
};
k.L = function(a, b) {
  if (Ic(b)) {
    return db(this, A.b(b, 0), A.b(b, 1));
  }
  for (var c = this, d = G(b);;) {
    if (null == d) {
      return c;
    }
    var e = I(d);
    if (Ic(e)) {
      c = db(c, A.b(e, 0), A.b(e, 1)), d = M(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.H(null, c);
      case 3:
        return this.D(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.H(null, c);
  };
  a.c = function(a, c, d) {
    return this.D(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Na(b)));
};
k.a = function(a) {
  return this.H(null, a);
};
k.b = function(a, b) {
  return this.D(null, a, b);
};
var He = new $e(null, 0, null, !1, null, 0);
function zc(a, b) {
  for (var c = a.length, d = 0, e = Fb(He);;) {
    if (d < c) {
      var f = d + 1, e = e.eb(null, a[d], b[d]), d = f
    } else {
      return Hb(e);
    }
  }
}
$e.prototype[La] = function() {
  return gc(this);
};
function af(a, b, c, d, e) {
  this.r = a;
  this.root = b;
  this.count = c;
  this.V = d;
  this.ba = e;
  this.p = 56;
  this.h = 258;
}
k = af.prototype;
k.eb = function(a, b, c) {
  return bf(this, b, c);
};
k.fb = function(a, b) {
  return cf(this, b);
};
k.gb = function() {
  var a;
  if (this.r) {
    this.r = null, a = new $e(null, this.count, this.root, this.V, this.ba, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
k.H = function(a, b) {
  return null == b ? this.V ? this.ba : null : null == this.root ? null : this.root.Ia(0, $b(b), b);
};
k.D = function(a, b, c) {
  return null == b ? this.V ? this.ba : c : null == this.root ? c : this.root.Ia(0, $b(b), b, c);
};
k.J = function() {
  if (this.r) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function cf(a, b) {
  if (a.r) {
    if (b ? b.h & 2048 || b.hc || (b.h ? 0 : v(gb, b)) : v(gb, b)) {
      return bf(a, Je.a ? Je.a(b) : Je.call(null, b), Ke.a ? Ke.a(b) : Ke.call(null, b));
    }
    for (var c = G(b), d = a;;) {
      var e = I(c);
      if (u(e)) {
        var f = e, c = M(c), d = bf(d, function() {
          var a = f;
          return Je.a ? Je.a(a) : Je.call(null, a);
        }(), function() {
          var a = f;
          return Ke.a ? Ke.a(a) : Ke.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
}
function bf(a, b, c) {
  if (a.r) {
    if (null == b) {
      a.ba !== c && (a.ba = c), a.V || (a.count += 1, a.V = !0);
    } else {
      var d = new Le;
      b = (null == a.root ? Se : a.root).ia(a.r, 0, $b(b), b, c, d);
      b !== a.root && (a.root = b);
      d.F && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
var Ld = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = G(a);
    for (var b = Fb(He);;) {
      if (a) {
        var e = M(M(a)), b = Bd.c(b, I(a), I(M(a)));
        a = e;
      } else {
        return Hb(b);
      }
    }
  }
  a.n = 0;
  a.g = function(a) {
    a = G(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function df(a, b) {
  this.Ja = a;
  this.ga = b;
  this.p = 0;
  this.h = 32374988;
}
k = df.prototype;
k.toString = function() {
  return Sb(this);
};
k.u = function() {
  return this.ga;
};
k.$ = function() {
  var a = this.Ja, a = (a ? a.h & 128 || a.Rb || (a.h ? 0 : v(ab, a)) : v(ab, a)) ? this.Ja.$(null) : M(this.Ja);
  return null == a ? null : new df(a, this.ga);
};
k.G = function() {
  return ic(this);
};
k.C = function(a, b) {
  return sc(this, b);
};
k.N = function() {
  return uc(K, this.ga);
};
k.P = function(a, b) {
  return Q.b(b, this);
};
k.Q = function(a, b, c) {
  return Q.c(b, c, this);
};
k.S = function() {
  return this.Ja.S(null).Ib();
};
k.X = function() {
  var a = this.Ja, a = (a ? a.h & 128 || a.Rb || (a.h ? 0 : v(ab, a)) : v(ab, a)) ? this.Ja.$(null) : M(this.Ja);
  return null != a ? new df(a, this.ga) : K;
};
k.I = function() {
  return this;
};
k.A = function(a, b) {
  return new df(this.Ja, b);
};
k.L = function(a, b) {
  return P(b, this);
};
df.prototype[La] = function() {
  return gc(this);
};
function Je(a) {
  return hb(a);
}
function Ke(a) {
  return ib(a);
}
function ef(a, b, c) {
  this.m = a;
  this.Wa = b;
  this.o = c;
  this.h = 15077647;
  this.p = 8196;
}
k = ef.prototype;
k.toString = function() {
  return Sb(this);
};
k.H = function(a, b) {
  return C.c(this, b, null);
};
k.D = function(a, b, c) {
  return cb(this.Wa, b) ? b : c;
};
k.u = function() {
  return this.m;
};
k.J = function() {
  return Sa(this.Wa);
};
k.G = function() {
  var a = this.o;
  return null != a ? a : this.o = a = jc(this);
};
k.C = function(a, b) {
  return Gc(b) && R(this) === R(b) && Ed(function(a) {
    return function(b) {
      return U.c(a, b, Nc) === Nc ? !1 : !0;
    };
  }(this), b);
};
k.Sa = function() {
  return new ff(Fb(this.Wa));
};
k.N = function() {
  return uc(gf, this.m);
};
k.I = function() {
  var a = G(this.Wa);
  return a ? new df(a, null) : null;
};
k.A = function(a, b) {
  return new ef(b, this.Wa, this.o);
};
k.L = function(a, b) {
  return new ef(this.m, Ac.c(this.Wa, b, null), null);
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.H(null, c);
      case 3:
        return this.D(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.H(null, c);
  };
  a.c = function(a, c, d) {
    return this.D(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Na(b)));
};
k.a = function(a) {
  return this.H(null, a);
};
k.b = function(a, b) {
  return this.D(null, a, b);
};
var gf = new ef(null, Fe, 0);
function hf(a) {
  var b = a.length;
  if (b <= Ge) {
    for (var c = 0, d = Fb(Fe);;) {
      if (c < b) {
        var e = c + 1, d = Ib(d, a[c], null), c = e
      } else {
        return new ef(null, Hb(d), null);
      }
    }
  } else {
    for (c = 0, d = Fb(gf);;) {
      if (c < b) {
        e = c + 1, d = Gb(d, a[c]), c = e;
      } else {
        return Hb(d);
      }
    }
  }
}
ef.prototype[La] = function() {
  return gc(this);
};
function ff(a) {
  this.Ea = a;
  this.h = 259;
  this.p = 136;
}
k = ff.prototype;
k.call = function() {
  function a(a, b, c) {
    return C.c(this.Ea, b, Nc) === Nc ? c : b;
  }
  function b(a, b) {
    return C.c(this.Ea, b, Nc) === Nc ? null : b;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Na(b)));
};
k.a = function(a) {
  return C.c(this.Ea, a, Nc) === Nc ? null : a;
};
k.b = function(a, b) {
  return C.c(this.Ea, a, Nc) === Nc ? b : a;
};
k.H = function(a, b) {
  return C.c(this, b, null);
};
k.D = function(a, b, c) {
  return C.c(this.Ea, b, Nc) === Nc ? c : b;
};
k.J = function() {
  return R(this.Ea);
};
k.fb = function(a, b) {
  this.Ea = Bd.c(this.Ea, b, null);
  return this;
};
k.gb = function() {
  return new ef(null, Hb(this.Ea), null);
};
function jf(a) {
  for (var b = wc;;) {
    if (M(a)) {
      b = xc.b(b, I(a)), a = M(a);
    } else {
      return G(b);
    }
  }
}
function jd(a) {
  if (a && (a.p & 4096 || a.jc)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([y("Doesn't support name: "), y(a)].join(""));
}
var kf = function() {
  function a(a, b, c) {
    return(a.a ? a.a(b) : a.call(null, b)) > (a.a ? a.a(c) : a.call(null, c)) ? b : c;
  }
  var b = null, c = function() {
    function a(b, d, h, l) {
      var m = null;
      3 < arguments.length && (m = N(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, h, m);
    }
    function c(a, d, e, l) {
      return Oa.c(function(c, d) {
        return b.c(a, c, d);
      }, b.c(a, d, e), l);
    }
    a.n = 3;
    a.g = function(a) {
      var b = I(a);
      a = M(a);
      var d = I(a);
      a = M(a);
      var l = I(a);
      a = J(a);
      return c(b, d, l, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f, g) {
    switch(arguments.length) {
      case 2:
        return e;
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.e(b, e, f, N(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.n = 3;
  b.g = c.g;
  b.b = function(a, b) {
    return b;
  };
  b.c = a;
  b.e = c.e;
  return b;
}();
function lf(a, b, c) {
  this.k = a;
  this.end = b;
  this.step = c;
}
lf.prototype.wb = function() {
  return 0 < this.step ? this.k < this.end : this.k > this.end;
};
lf.prototype.next = function() {
  var a = this.k;
  this.k += this.step;
  return a;
};
function mf(a, b, c, d, e) {
  this.m = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.o = e;
  this.h = 32375006;
  this.p = 8192;
}
k = mf.prototype;
k.toString = function() {
  return Sb(this);
};
k.M = function(a, b) {
  if (b < Sa(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
k.Z = function(a, b, c) {
  return b < Sa(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
k.bb = function() {
  return new lf(this.start, this.end, this.step);
};
k.u = function() {
  return this.m;
};
k.$ = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new mf(this.m, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new mf(this.m, this.start + this.step, this.end, this.step, null) : null;
};
k.J = function() {
  if (Ha(xb(this))) {
    return 0;
  }
  var a = (this.end - this.start) / this.step;
  return Math.ceil.a ? Math.ceil.a(a) : Math.ceil.call(null, a);
};
k.G = function() {
  var a = this.o;
  return null != a ? a : this.o = a = ic(this);
};
k.C = function(a, b) {
  return sc(this, b);
};
k.N = function() {
  return uc(K, this.m);
};
k.P = function(a, b) {
  return mc.b(this, b);
};
k.Q = function(a, b, c) {
  for (a = this.start;;) {
    if (0 < this.step ? a < this.end : a > this.end) {
      var d = a;
      c = b.b ? b.b(c, d) : b.call(null, c, d);
      if (lc(c)) {
        return b = c, O.a ? O.a(b) : O.call(null, b);
      }
      a += this.step;
    } else {
      return c;
    }
  }
};
k.S = function() {
  return null == xb(this) ? null : this.start;
};
k.X = function() {
  return null != xb(this) ? new mf(this.m, this.start + this.step, this.end, this.step, null) : K;
};
k.I = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
k.A = function(a, b) {
  return new mf(b, this.start, this.end, this.step, this.o);
};
k.L = function(a, b) {
  return P(b, this);
};
mf.prototype[La] = function() {
  return gc(this);
};
var nf = function() {
  function a(a, b, c) {
    return new mf(null, a, b, c, null);
  }
  function b(a, b) {
    return e.c(a, b, 1);
  }
  function c(a) {
    return e.c(0, a, 1);
  }
  function d() {
    return e.c(0, Number.MAX_VALUE, 1);
  }
  var e = null, e = function(e, g, h) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e);
      case 2:
        return b.call(this, e, g);
      case 3:
        return a.call(this, e, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.i = d;
  e.a = c;
  e.b = b;
  e.c = a;
  return e;
}();
function of(a, b, c, d, e, f, g) {
  var h = wa;
  try {
    wa = null == wa ? null : wa - 1;
    if (null != wa && 0 > wa) {
      return E(a, "#");
    }
    E(a, c);
    if (G(g)) {
      var l = I(g);
      b.c ? b.c(l, a, f) : b.call(null, l, a, f);
    }
    for (var m = M(g), n = Fa.a(f) - 1;;) {
      if (!m || null != n && 0 === n) {
        G(m) && 0 === n && (E(a, d), E(a, "..."));
        break;
      } else {
        E(a, d);
        var p = I(m);
        c = a;
        g = f;
        b.c ? b.c(p, c, g) : b.call(null, p, c, g);
        var q = M(m);
        c = n - 1;
        m = q;
        n = c;
      }
    }
    return E(a, e);
  } finally {
    wa = h;
  }
}
var pf = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = N(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = G(b), f = null, g = 0, h = 0;;) {
      if (h < g) {
        var l = f.M(null, h);
        E(a, l);
        h += 1;
      } else {
        if (e = G(e)) {
          f = e, Jc(f) ? (e = Lb(f), g = Mb(f), f = e, l = R(e), e = g, g = l) : (l = I(f), E(a, l), e = M(f), f = null, g = 0), h = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.n = 1;
  a.g = function(a) {
    var d = I(a);
    a = J(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}(), qf = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function rf(a) {
  return[y('"'), y(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return qf[a];
  })), y('"')].join("");
}
var uf = function sf(b, c, d) {
  if (null == b) {
    return E(c, "nil");
  }
  if (void 0 === b) {
    return E(c, "#\x3cundefined\x3e");
  }
  u(function() {
    var c = U.b(d, Ca);
    return u(c) ? (c = b ? b.h & 131072 || b.ic ? !0 : b.h ? !1 : v(nb, b) : v(nb, b)) ? Fc(b) : c : c;
  }()) && (E(c, "^"), sf(Fc(b), c, d), E(c, " "));
  if (null == b) {
    return E(c, "nil");
  }
  if (b.Ha) {
    return b.Ma(b, c, d);
  }
  if (b && (b.h & 2147483648 || b.K)) {
    return b.w(null, c, d);
  }
  if (Ja(b) === Boolean || "number" === typeof b) {
    return E(c, "" + y(b));
  }
  if (null != b && b.constructor === Object) {
    E(c, "#js ");
    var e = Rd.b(function(c) {
      return new Y(null, 2, 5, Z, [kd.a(c), b[c]], null);
    }, Kc(b));
    return tf.l ? tf.l(e, sf, c, d) : tf.call(null, e, sf, c, d);
  }
  return b instanceof Array ? of(c, sf, "#js [", " ", "]", d, b) : u(ba(b)) ? u(Ba.a(d)) ? E(c, rf(b)) : E(c, b) : Dc(b) ? pf.e(c, N(["#\x3c", "" + y(b), "\x3e"], 0)) : b instanceof Date ? (e = function(b, c) {
    for (var d = "" + y(b);;) {
      if (R(d) < c) {
        d = [y("0"), y(d)].join("");
      } else {
        return d;
      }
    }
  }, pf.e(c, N(['#inst "', "" + y(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : b instanceof RegExp ? pf.e(c, N(['#"', b.source, '"'], 0)) : (b ? b.h & 2147483648 || b.K || (b.h ? 0 : v(Cb, b)) : v(Cb, b)) ? Db(b, c, d) : pf.e(c, N(["#\x3c", "" + y(b), "\x3e"], 0));
};
function vf(a, b) {
  var c;
  if (null == a || Ha(G(a))) {
    c = "";
  } else {
    c = y;
    var d = new oa;
    a: {
      var e = new Rb(d);
      uf(I(a), e, b);
      for (var f = G(M(a)), g = null, h = 0, l = 0;;) {
        if (l < h) {
          var m = g.M(null, l);
          E(e, " ");
          uf(m, e, b);
          l += 1;
        } else {
          if (f = G(f)) {
            g = f, Jc(g) ? (f = Lb(g), h = Mb(g), g = f, m = R(f), f = h, h = m) : (m = I(g), E(e, " "), uf(m, e, b), f = M(g), g = null, h = 0), l = 0;
          } else {
            break a;
          }
        }
      }
    }
    c = "" + c(d);
  }
  return c;
}
var Pd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return vf(a, ya());
  }
  a.n = 0;
  a.g = function(a) {
    a = G(a);
    return b(a);
  };
  a.e = b;
  return a;
}(), wf = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b = Ac.c(ya(), Ba, !1);
    a = vf(a, b);
    ta.a ? ta.a(a) : ta.call(null, a);
    u(ua) ? (a = ya(), ta.a ? ta.a("\n") : ta.call(null, "\n"), a = (U.b(a, za), null)) : a = null;
    return a;
  }
  a.n = 0;
  a.g = function(a) {
    a = G(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function tf(a, b, c, d) {
  return of(c, function(a, c, d) {
    var h = hb(a);
    b.c ? b.c(h, c, d) : b.call(null, h, c, d);
    E(c, " ");
    a = ib(a);
    return b.c ? b.c(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, G(a));
}
Qd.prototype.K = !0;
Qd.prototype.w = function(a, b, c) {
  E(b, "#\x3cVolatile: ");
  uf(this.state, b, c);
  return E(b, "\x3e");
};
cc.prototype.K = !0;
cc.prototype.w = function(a, b, c) {
  return of(b, uf, "(", " ", ")", c, this);
};
ld.prototype.K = !0;
ld.prototype.w = function(a, b, c) {
  return of(b, uf, "(", " ", ")", c, this);
};
Ye.prototype.K = !0;
Ye.prototype.w = function(a, b, c) {
  return of(b, uf, "(", " ", ")", c, this);
};
Be.prototype.K = !0;
Be.prototype.w = function(a, b, c) {
  return of(b, uf, "(", " ", ")", c, this);
};
qe.prototype.K = !0;
qe.prototype.w = function(a, b, c) {
  return of(b, uf, "(", " ", ")", c, this);
};
gd.prototype.K = !0;
gd.prototype.w = function(a, b, c) {
  return of(b, uf, "(", " ", ")", c, this);
};
rc.prototype.K = !0;
rc.prototype.w = function(a, b, c) {
  return of(b, uf, "(", " ", ")", c, this);
};
$e.prototype.K = !0;
$e.prototype.w = function(a, b, c) {
  return tf(this, uf, b, c);
};
Ze.prototype.K = !0;
Ze.prototype.w = function(a, b, c) {
  return of(b, uf, "(", " ", ")", c, this);
};
se.prototype.K = !0;
se.prototype.w = function(a, b, c) {
  return of(b, uf, "[", " ", "]", c, this);
};
ef.prototype.K = !0;
ef.prototype.w = function(a, b, c) {
  return of(b, uf, "#{", " ", "}", c, this);
};
qd.prototype.K = !0;
qd.prototype.w = function(a, b, c) {
  return of(b, uf, "(", " ", ")", c, this);
};
Kd.prototype.K = !0;
Kd.prototype.w = function(a, b, c) {
  E(b, "#\x3cAtom: ");
  uf(this.state, b, c);
  return E(b, "\x3e");
};
Y.prototype.K = !0;
Y.prototype.w = function(a, b, c) {
  return of(b, uf, "[", " ", "]", c, this);
};
dd.prototype.K = !0;
dd.prototype.w = function(a, b) {
  return E(b, "()");
};
t.prototype.K = !0;
t.prototype.w = function(a, b, c) {
  return tf(this, uf, b, c);
};
mf.prototype.K = !0;
mf.prototype.w = function(a, b, c) {
  return of(b, uf, "(", " ", ")", c, this);
};
df.prototype.K = !0;
df.prototype.w = function(a, b, c) {
  return of(b, uf, "(", " ", ")", c, this);
};
cd.prototype.K = !0;
cd.prototype.w = function(a, b, c) {
  return of(b, uf, "(", " ", ")", c, this);
};
Y.prototype.ob = !0;
Y.prototype.pb = function(a, b) {
  return Rc.b(this, b);
};
se.prototype.ob = !0;
se.prototype.pb = function(a, b) {
  return Rc.b(this, b);
};
X.prototype.ob = !0;
X.prototype.pb = function(a, b) {
  return hd(this, b);
};
F.prototype.ob = !0;
F.prototype.pb = function(a, b) {
  return bc(this, b);
};
$c = function() {
  function a(a) {
    return(Math.random.i ? Math.random.i() : Math.random.call(null)) * a;
  }
  function b() {
    return c.a(1);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.i = b;
  c.a = a;
  return c;
}();
ad = function(a) {
  a *= Math.random.i ? Math.random.i() : Math.random.call(null);
  return Math.floor.a ? Math.floor.a(a) : Math.floor.call(null, a);
};
var xf = new X(null, "y", "y", -1757859776), yf = new X(null, "tick", "tick", -835886976), zf = new X(null, "down", "down", 1565245570), Af = new X(null, "new-vel", "new-vel", 249169634), Bf = new X(null, "space", "space", 348133475), Ca = new X(null, "meta", "meta", 1499536964), Ea = new X(null, "dup", "dup", 556298533), Cf = new X(null, "turbo", "turbo", 846610757), Df = new X(null, "init", "init", -1875481434), Ef = new X(null, "snake", "snake", -244377242), Ff = new X(null, "reset", "reset", 
-800929946), Gf = new X(null, "speed", "speed", 1257663751), Md = new X(null, "validator", "validator", -1966190681), Hf = new X(null, "default", "default", -1987822328), If = new X(null, "finally-block", "finally-block", 832982472), Jf = new X(null, "file", "file", -1269645878), Kf = new X(null, "end-column", "end-column", 1425389514), Lf = new X(null, "move", "move", -2110884309), $ = new X(null, "recur", "recur", -437573268), Mf = new X(null, "catch-block", "catch-block", 1175212748), za = new X(null, 
"flush-on-newline", "flush-on-newline", -151457939), Nf = new X(null, "up", "up", -269712113), Pf = new X(null, "column", "column", 2078222095), Qf = new X(null, "enter", "enter", 1792452624), Rf = new X(null, "key-not-found", "key-not-found", -872876464), Sf = new X(null, "turn", "turn", 75759344), Ba = new X(null, "readably", "readably", 1129599760), Tf = new X(null, "world", "world", -418292623), Uf = new X(null, "line", "line", 212345235), Vf = new X(null, "priority", "priority", 1431093715), 
Wf = new X(null, "status", "status", -1997798413), Fa = new X(null, "print-length", "print-length", 1931866356), Xf = new X(null, "catch-exception", "catch-exception", -1997306795), Yf = new X(null, "prev", "prev", -1597069226), Zf = new X(null, "continue-block", "continue-block", -1852047850), $f = new X(null, "end-line", "end-line", 1837326455), ag = new X(null, "right", "right", -452581833), bg = new X(null, "eat", "eat", 1686757401), cg = new X(null, "x", "x", 2099068185), dg = new X(null, "game-over", 
"game-over", -607322695), eg = new X(null, "vel", "vel", -110770822), fg = new X(null, "body", "body", -2049205669), gg = new X(null, "pills", "pills", -85353539), hg = new X(null, "left", "left", -399115937);
var ig;
a: {
  var jg = aa.navigator;
  if (jg) {
    var kg = jg.userAgent;
    if (kg) {
      ig = kg;
      break a;
    }
  }
  ig = "";
}
function lg(a) {
  return-1 != ig.indexOf(a);
}
;var mg = lg("Opera") || lg("OPR"), ng = lg("Trident") || lg("MSIE"), og = lg("Gecko") && -1 == ig.toLowerCase().indexOf("webkit") && !(lg("Trident") || lg("MSIE")), pg = -1 != ig.toLowerCase().indexOf("webkit");
function qg() {
  var a = aa.document;
  return a ? a.documentMode : void 0;
}
var rg = function() {
  var a = "", b;
  if (mg && aa.opera) {
    return a = aa.opera.version, ca(a) ? a() : a;
  }
  og ? b = /rv\:([^\);]+)(\)|;)/ : ng ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : pg && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(ig)) ? a[1] : "");
  return ng && (b = qg(), b > parseFloat(a)) ? String(b) : a;
}(), sg = {};
function tg(a) {
  var b;
  if (!(b = sg[a])) {
    b = 0;
    for (var c = String(rg).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var g = c[f] || "", h = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var n = l.exec(g) || ["", "", ""], p = m.exec(h) || ["", "", ""];
        if (0 == n[0].length && 0 == p[0].length) {
          break;
        }
        b = ma(0 == n[1].length ? 0 : parseInt(n[1], 10), 0 == p[1].length ? 0 : parseInt(p[1], 10)) || ma(0 == n[2].length, 0 == p[2].length) || ma(n[2], p[2]);
      } while (0 == b);
    }
    b = sg[a] = 0 <= b;
  }
  return b;
}
var ug = aa.document, vg = ug && ng ? qg() || ("CSS1Compat" == ug.compatMode ? parseInt(rg, 10) : 5) : void 0;
!og && !ng || ng && ng && 9 <= vg || og && tg("1.9.1");
ng && tg("9");
var wg, xg, yg, zg, Ag;
function Bg(a, b) {
  if (a ? a.tb : a) {
    return a.tb(a, b);
  }
  var c;
  c = Bg[r(null == a ? null : a)];
  if (!c && (c = Bg._, !c)) {
    throw w("ReadPort.take!", a);
  }
  return c.call(null, a, b);
}
function Cg(a, b, c) {
  if (a ? a.ib : a) {
    return a.ib(a, b, c);
  }
  var d;
  d = Cg[r(null == a ? null : a)];
  if (!d && (d = Cg._, !d)) {
    throw w("WritePort.put!", a);
  }
  return d.call(null, a, b, c);
}
function Dg(a) {
  if (a ? a.hb : a) {
    return a.hb(a);
  }
  var b;
  b = Dg[r(null == a ? null : a)];
  if (!b && (b = Dg._, !b)) {
    throw w("Channel.close!", a);
  }
  return b.call(null, a);
}
function Eg(a) {
  if (a ? a.Y : a) {
    return a.Y(a);
  }
  var b;
  b = Eg[r(null == a ? null : a)];
  if (!b && (b = Eg._, !b)) {
    throw w("Handler.active?", a);
  }
  return b.call(null, a);
}
function Fg(a) {
  if (a ? a.T : a) {
    return a.T(a);
  }
  var b;
  b = Fg[r(null == a ? null : a)];
  if (!b && (b = Fg._, !b)) {
    throw w("Handler.commit", a);
  }
  return b.call(null, a);
}
function Gg(a, b) {
  if (a ? a.Wb : a) {
    return a.Wb(0, b);
  }
  var c;
  c = Gg[r(null == a ? null : a)];
  if (!c && (c = Gg._, !c)) {
    throw w("Buffer.add!*", a);
  }
  return c.call(null, a, b);
}
var Hg = function() {
  function a(a, b) {
    if (null == b) {
      throw Error([y("Assert failed: "), y(Pd.e(N([fd(new F(null, "not", "not", 1044554643, null), fd(new F(null, "nil?", "nil?", 1612038930, null), new F(null, "itm", "itm", -713282527, null)))], 0)))].join(""));
    }
    return Gg(a, b);
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = function(a) {
    return a;
  };
  b.b = a;
  return b;
}();
var Ig, Kg = function Jg(b) {
  "undefined" === typeof Ig && (Ig = function(b, d, e) {
    this.U = b;
    this.Mb = d;
    this.rc = e;
    this.p = 0;
    this.h = 393216;
  }, Ig.prototype.Y = function() {
    return!0;
  }, Ig.prototype.T = function() {
    return this.U;
  }, Ig.prototype.u = function() {
    return this.rc;
  }, Ig.prototype.A = function(b, d) {
    return new Ig(this.U, this.Mb, d);
  }, Ig.Ha = !0, Ig.Ga = "cljs.core.async.impl.ioc-helpers/t33302", Ig.Ma = function(b, d) {
    return E(d, "cljs.core.async.impl.ioc-helpers/t33302");
  });
  return new Ig(b, Jg, new t(null, 5, [Kf, 19, $f, 30, Pf, 3, Uf, 27, Jf, "/Users/jhernandez/dev/cnake/target/cljsbuild-compiler-1/cljs/core/async/impl/ioc_helpers.cljs"], null));
};
function Lg(a) {
  try {
    return a[0].call(null, a);
  } catch (b) {
    throw b instanceof Object && a[6].hb(null), b;
  }
}
function Mg(a, b, c) {
  c = c.tb(null, Kg(function(c) {
    a[2] = c;
    a[1] = b;
    return Lg(a);
  }));
  return u(c) ? (a[2] = O.a ? O.a(c) : O.call(null, c), a[1] = b, $) : null;
}
function Ng(a, b, c, d) {
  c = c.ib(null, d, Kg(function(c) {
    a[2] = c;
    a[1] = b;
    return Lg(a);
  }));
  return u(c) ? (a[2] = O.a ? O.a(c) : O.call(null, c), a[1] = b, $) : null;
}
function Og(a, b) {
  var c = a[6];
  null != b && c.ib(null, b, Kg(function() {
    return function() {
      return null;
    };
  }(c)));
  c.hb(null);
  return c;
}
function Pg(a) {
  for (;;) {
    var b = a[4], c = Mf.a(b), d = Xf.a(b), e = a[5];
    if (u(function() {
      var a = e;
      return u(a) ? Ha(b) : a;
    }())) {
      throw e;
    }
    if (u(function() {
      var a = e;
      return u(a) ? (a = c, u(a) ? e instanceof d : a) : a;
    }())) {
      a[1] = c;
      a[2] = e;
      a[5] = null;
      a[4] = Ac.e(b, Mf, null, N([Xf, null], 0));
      break;
    }
    if (u(function() {
      var a = e;
      return u(a) ? Ha(c) && Ha(If.a(b)) : a;
    }())) {
      a[4] = Yf.a(b);
    } else {
      if (u(function() {
        var a = e;
        return u(a) ? (a = Ha(c)) ? If.a(b) : a : a;
      }())) {
        a[1] = If.a(b);
        a[4] = Ac.c(b, If, null);
        break;
      }
      if (u(function() {
        var a = Ha(e);
        return a ? If.a(b) : a;
      }())) {
        a[1] = If.a(b);
        a[4] = Ac.c(b, If, null);
        break;
      }
      if (Ha(e) && Ha(If.a(b))) {
        a[1] = Zf.a(b);
        a[4] = Yf.a(b);
        break;
      }
      throw Error("No matching clause");
    }
  }
}
;var Qg;
function Rg() {
  var a = aa.MessageChannel;
  "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function() {
    var a = document.createElement("iframe");
    a.style.display = "none";
    a.src = "";
    document.documentElement.appendChild(a);
    var b = a.contentWindow, a = b.document;
    a.open();
    a.write("");
    a.close();
    var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host, a = ja(function(a) {
      if (a.origin == d || a.data == c) {
        this.port1.onmessage();
      }
    }, this);
    b.addEventListener("message", a, !1);
    this.port1 = {};
    this.port2 = {postMessage:function() {
      b.postMessage(c, d);
    }};
  });
  if ("undefined" !== typeof a) {
    var b = new a, c = {}, d = c;
    b.port1.onmessage = function() {
      c = c.next;
      var a = c.$a;
      c.$a = null;
      a();
    };
    return function(a) {
      d.next = {$a:a};
      d = d.next;
      b.port2.postMessage(0);
    };
  }
  return "undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ? function(a) {
    var b = document.createElement("script");
    b.onreadystatechange = function() {
      b.onreadystatechange = null;
      b.parentNode.removeChild(b);
      b = null;
      a();
      a = null;
    };
    document.documentElement.appendChild(b);
  } : function(a) {
    aa.setTimeout(a, 0);
  };
}
;function Sg(a, b, c, d, e) {
  for (var f = 0;;) {
    if (f < e) {
      c[d + f] = a[b + f], f += 1;
    } else {
      break;
    }
  }
}
function Tg(a, b, c, d) {
  this.head = a;
  this.q = b;
  this.length = c;
  this.d = d;
}
Tg.prototype.pop = function() {
  if (0 === this.length) {
    return null;
  }
  var a = this.d[this.q];
  this.d[this.q] = null;
  this.q = (this.q + 1) % this.d.length;
  this.length -= 1;
  return a;
};
Tg.prototype.unshift = function(a) {
  this.d[this.head] = a;
  this.head = (this.head + 1) % this.d.length;
  this.length += 1;
  return null;
};
function Ug(a, b) {
  a.length + 1 === a.d.length && a.resize();
  a.unshift(b);
}
Tg.prototype.resize = function() {
  var a = Array(2 * this.d.length);
  return this.q < this.head ? (Sg(this.d, this.q, a, 0, this.length), this.q = 0, this.head = this.length, this.d = a) : this.q > this.head ? (Sg(this.d, this.q, a, 0, this.d.length - this.q), Sg(this.d, 0, a, this.d.length - this.q, this.head), this.q = 0, this.head = this.length, this.d = a) : this.q === this.head ? (this.head = this.q = 0, this.d = a) : null;
};
function Vg(a, b) {
  for (var c = a.length, d = 0;;) {
    if (d < c) {
      var e = a.pop(), f;
      f = e;
      f = b.a ? b.a(f) : b.call(null, f);
      u(f) && a.unshift(e);
      d += 1;
    } else {
      break;
    }
  }
}
function Wg(a) {
  if (!(0 < a)) {
    throw Error([y("Assert failed: "), y("Can't create a ring buffer of size 0"), y("\n"), y(Pd.e(N([fd(new F(null, "\x3e", "\x3e", 1085014381, null), new F(null, "n", "n", -2092305744, null), 0)], 0)))].join(""));
  }
  return new Tg(0, 0, 0, Array(a));
}
function Xg(a, b) {
  this.s = a;
  this.tc = b;
  this.p = 0;
  this.h = 2;
}
Xg.prototype.J = function() {
  return this.s.length;
};
function Yg(a) {
  return a.s.length === a.tc;
}
Xg.prototype.sb = function() {
  return this.s.pop();
};
Xg.prototype.Wb = function(a, b) {
  Ug(this.s, b);
  return this;
};
function Zg(a) {
  return new Xg(Wg(a), a);
}
;var $g = Wg(32), ah = !1, bh = !1;
function ch() {
  ah = !0;
  bh = !1;
  for (var a = 0;;) {
    var b = $g.pop();
    if (null != b && (b.i ? b.i() : b.call(null), 1024 > a)) {
      a += 1;
      continue;
    }
    break;
  }
  ah = !1;
  return 0 < $g.length ? dh.i ? dh.i() : dh.call(null) : null;
}
function dh() {
  var a = bh;
  if (u(u(a) ? ah : a)) {
    return null;
  }
  bh = !0;
  ca(aa.setImmediate) ? aa.setImmediate(ch) : (Qg || (Qg = Rg()), Qg(ch));
}
function eh(a) {
  Ug($g, a);
  dh();
}
function fh(a, b) {
  setTimeout(a, b);
}
;var gh, ih = function hh(b) {
  "undefined" === typeof gh && (gh = function(b, d, e) {
    this.F = b;
    this.bc = d;
    this.sc = e;
    this.p = 0;
    this.h = 425984;
  }, gh.prototype.Ra = function() {
    return this.F;
  }, gh.prototype.u = function() {
    return this.sc;
  }, gh.prototype.A = function(b, d) {
    return new gh(this.F, this.bc, d);
  }, gh.Ha = !0, gh.Ga = "cljs.core.async.impl.channels/t33419", gh.Ma = function(b, d) {
    return E(d, "cljs.core.async.impl.channels/t33419");
  });
  return new gh(b, hh, new t(null, 5, [Kf, 22, $f, 18, Pf, 3, Uf, 17, Jf, "/Users/jhernandez/dev/cnake/target/cljsbuild-compiler-1/cljs/core/async/impl/channels.cljs"], null));
};
function jh(a, b) {
  this.Ba = a;
  this.F = b;
}
function kh(a) {
  return Eg(a.Ba);
}
function lh(a) {
  if (a ? a.Vb : a) {
    return a.Vb();
  }
  var b;
  b = lh[r(null == a ? null : a)];
  if (!b && (b = lh._, !b)) {
    throw w("MMC.abort", a);
  }
  return b.call(null, a);
}
function mh(a, b, c, d, e, f, g) {
  this.Pa = a;
  this.vb = b;
  this.La = c;
  this.ub = d;
  this.s = e;
  this.closed = f;
  this.da = g;
}
mh.prototype.hb = function() {
  var a = this;
  if (!a.closed) {
    a.closed = !0;
    if (u(function() {
      var b = a.s;
      return u(b) ? 0 === a.La.length : b;
    }())) {
      var b = a.s;
      a.da.a ? a.da.a(b) : a.da.call(null, b);
    }
    for (;b = a.Pa.pop(), null != b;) {
      if (b.Y(null)) {
        var c = b.T(null), d = u(function() {
          var b = a.s;
          return u(b) ? 0 < R(a.s) : b;
        }()) ? a.s.sb() : null;
        eh(function(a, b) {
          return function() {
            return a.a ? a.a(b) : a.call(null, b);
          };
        }(c, d, b, this));
      }
    }
  }
  return null;
};
mh.prototype.tb = function(a, b) {
  var c = this;
  if (b.Y(null)) {
    if (null != c.s && 0 < R(c.s)) {
      for (var d = b.T(null), e = ih(c.s.sb());;) {
        if (!u(Yg(c.s))) {
          var f = c.La.pop();
          if (null != f) {
            var g = f.Ba, h = f.F;
            if (g.Y(null)) {
              var l = g.T(null);
              b.T(null);
              eh(function(a) {
                return function() {
                  return a.a ? a.a(!0) : a.call(null, !0);
                };
              }(l, g, h, f, d, e, this));
              lc(function() {
                var a = c.s, b = h;
                return c.da.b ? c.da.b(a, b) : c.da.call(null, a, b);
              }()) && lh(this);
            }
            continue;
          }
        }
        break;
      }
      return e;
    }
    d = function() {
      for (;;) {
        var a = c.La.pop();
        if (u(a)) {
          if (Eg(a.Ba)) {
            return a;
          }
        } else {
          return null;
        }
      }
    }();
    if (u(d)) {
      return e = Fg(d.Ba), b.T(null), eh(function(a) {
        return function() {
          return a.a ? a.a(!0) : a.call(null, !0);
        };
      }(e, d, this)), ih(d.F);
    }
    if (u(c.closed)) {
      return u(c.s) && (d = c.s, c.da.a ? c.da.a(d) : c.da.call(null, d)), u(function() {
        var a = b.Y(null);
        return u(a) ? b.T(null) : a;
      }()) ? (d = function() {
        var a = c.s;
        return u(a) ? 0 < R(c.s) : a;
      }(), d = u(d) ? c.s.sb() : null, ih(d)) : null;
    }
    64 < c.vb ? (c.vb = 0, Vg(c.Pa, Eg)) : c.vb += 1;
    if (!(1024 > c.Pa.length)) {
      throw Error([y("Assert failed: "), y([y("No more than "), y(1024), y(" pending takes are allowed on a single channel.")].join("")), y("\n"), y(Pd.e(N([fd(new F(null, "\x3c", "\x3c", 993667236, null), fd(new F(null, ".-length", ".-length", -280799999, null), new F(null, "takes", "takes", 298247964, null)), new F("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0)))].join(""));
    }
    Ug(c.Pa, b);
  }
  return null;
};
mh.prototype.ib = function(a, b, c) {
  var d = this;
  if (null == b) {
    throw Error([y("Assert failed: "), y("Can't put nil in on a channel"), y("\n"), y(Pd.e(N([fd(new F(null, "not", "not", 1044554643, null), fd(new F(null, "nil?", "nil?", 1612038930, null), new F(null, "val", "val", 1769233139, null)))], 0)))].join(""));
  }
  if ((a = d.closed) || !c.Y(null)) {
    return ih(!a);
  }
  if (u(function() {
    var a = d.s;
    return u(a) ? Ha(Yg(d.s)) : a;
  }())) {
    c.T(null);
    for (c = lc(function() {
      var a = d.s;
      return d.da.b ? d.da.b(a, b) : d.da.call(null, a, b);
    }());;) {
      if (0 < d.Pa.length && 0 < R(d.s)) {
        var e = d.Pa.pop();
        if (e.Y(null)) {
          var f = e.T(null), g = d.s.sb();
          eh(function(a, b) {
            return function() {
              return a.a ? a.a(b) : a.call(null, b);
            };
          }(f, g, e, c, a, this));
        } else {
          continue;
        }
      }
      break;
    }
    c && lh(this);
    return ih(!0);
  }
  e = function() {
    for (;;) {
      var a = d.Pa.pop();
      if (u(a)) {
        if (u(a.Y(null))) {
          return a;
        }
      } else {
        return null;
      }
    }
  }();
  if (u(e)) {
    return f = Fg(e), c.T(null), eh(function(a) {
      return function() {
        return a.a ? a.a(b) : a.call(null, b);
      };
    }(f, e, a, this)), ih(!0);
  }
  64 < d.ub ? (d.ub = 0, Vg(d.La, kh)) : d.ub += 1;
  if (!(1024 > d.La.length)) {
    throw Error([y("Assert failed: "), y([y("No more than "), y(1024), y(" pending puts are allowed on a single channel."), y(" Consider using a windowed buffer.")].join("")), y("\n"), y(Pd.e(N([fd(new F(null, "\x3c", "\x3c", 993667236, null), fd(new F(null, ".-length", ".-length", -280799999, null), new F(null, "puts", "puts", -1883877054, null)), new F("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0)))].join(""));
  }
  Ug(d.La, new jh(c, b));
  return null;
};
mh.prototype.Vb = function() {
  for (;;) {
    var a = this.La.pop();
    if (null != a) {
      var b = a.Ba, c = a.F;
      if (b.Y(null)) {
        var d = b.T(null);
        eh(function(a) {
          return function() {
            return a.a ? a.a(!0) : a.call(null, !0);
          };
        }(d, b, c, a, this));
      } else {
        continue;
      }
    }
    break;
  }
  Vg(this.La, Gd());
  return Dg(this);
};
function nh(a) {
  console.log(a);
  return null;
}
function oh(a, b, c) {
  b = (u(b) ? b : nh).call(null, c);
  return null == b ? a : Hg.b(a, b);
}
var qh = function() {
  function a(a, b, c) {
    return new mh(Wg(32), 0, Wg(32), 0, a, !1, function() {
      return function(a) {
        return function() {
          function b(d, e) {
            try {
              return a.b ? a.b(d, e) : a.call(null, d, e);
            } catch (f) {
              return oh(d, c, f);
            }
          }
          function d(b) {
            try {
              return a.a ? a.a(b) : a.call(null, b);
            } catch (e) {
              return oh(b, c, e);
            }
          }
          var e = null, e = function(a, c) {
            switch(arguments.length) {
              case 1:
                return d.call(this, a);
              case 2:
                return b.call(this, a, c);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          e.a = d;
          e.b = b;
          return e;
        }();
      }(u(b) ? b.a ? b.a(Hg) : b.call(null, Hg) : Hg);
    }());
  }
  function b(a, b) {
    return d.c(a, b, null);
  }
  function c(a) {
    return d.b(a, null);
  }
  var d = null, d = function(d, f, g) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.c = a;
  return d;
}();
var rh = !ng || ng && 9 <= vg, sh = ng && !tg("9");
!pg || tg("528");
og && tg("1.9b") || ng && tg("8") || mg && tg("9.5") || pg && tg("528");
og && !tg("8") || ng && tg("9");
function th(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.Xb = !1;
}
th.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
};
function uh(a) {
  uh[" "](a);
  return a;
}
uh[" "] = function() {
};
function vh(a, b) {
  th.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.Kb = this.state = null;
  if (a) {
    var c = this.type = a.type;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
      if (og) {
        var e;
        a: {
          try {
            uh(d.nodeName);
            e = !0;
            break a;
          } catch (f) {
          }
          e = !1;
        }
        e || (d = null);
      }
    } else {
      "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
    }
    this.relatedTarget = d;
    this.offsetX = pg || void 0 !== a.offsetX ? a.offsetX : a.layerX;
    this.offsetY = pg || void 0 !== a.offsetY ? a.offsetY : a.layerY;
    this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
    this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
    this.screenX = a.screenX || 0;
    this.screenY = a.screenY || 0;
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.state = a.state;
    this.Kb = a;
    a.defaultPrevented && this.preventDefault();
  }
}
(function() {
  function a() {
  }
  a.prototype = th.prototype;
  vh.vc = th.prototype;
  vh.prototype = new a;
  vh.prototype.constructor = vh;
  vh.mb = function(a, c, d) {
    return th.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2));
  };
})();
vh.prototype.preventDefault = function() {
  vh.vc.preventDefault.call(this);
  var a = this.Kb;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, sh) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var wh = function() {
  function a(a) {
    for (;;) {
      if (.5 > Math.random() && 15 > a) {
        a += 1;
      } else {
        return a;
      }
    }
  }
  function b() {
    return c.a(0);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.i = b;
  c.a = a;
  return c;
}();
function xh(a, b, c) {
  this.key = a;
  this.F = b;
  this.forward = c;
  this.p = 0;
  this.h = 2155872256;
}
xh.prototype.w = function(a, b, c) {
  return of(b, uf, "[", " ", "]", c, this);
};
xh.prototype.I = function() {
  return Ua(Ua(K, this.F), this.key);
};
var yh = function() {
  function a(a, b, c) {
    c = Array(c + 1);
    for (var g = 0;;) {
      if (g < c.length) {
        c[g] = null, g += 1;
      } else {
        break;
      }
    }
    return new xh(a, b, c);
  }
  function b(a) {
    return c.c(null, null, a);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), zh = function() {
  function a(a, b, c, g) {
    for (;;) {
      if (0 > c) {
        return a;
      }
      a: {
        for (;;) {
          var h = a.forward[c];
          if (u(h)) {
            if (h.key < b) {
              a = h;
            } else {
              break a;
            }
          } else {
            break a;
          }
        }
        a = void 0;
      }
      null != g && (g[c] = a);
      c -= 1;
    }
  }
  function b(a, b, f) {
    return c.l(a, b, f, null);
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.l = a;
  return c;
}();
function Ah(a, b) {
  this.Oa = a;
  this.fa = b;
  this.p = 0;
  this.h = 2155872256;
}
Ah.prototype.w = function(a, b, c) {
  return of(b, function() {
    return function(a) {
      return of(b, uf, "", " ", "", c, a);
    };
  }(this), "{", ", ", "}", c, this);
};
Ah.prototype.I = function() {
  return function(a) {
    return function c(d) {
      return new ld(null, function() {
        return function() {
          return null == d ? null : P(new Y(null, 2, 5, Z, [d.key, d.F], null), c(d.forward[0]));
        };
      }(a), null, null);
    };
  }(this)(this.Oa.forward[0]);
};
Ah.prototype.put = function(a, b) {
  var c = Array(15), d = zh.l(this.Oa, a, this.fa, c).forward[0];
  if (null != d && d.key === a) {
    return d.F = b;
  }
  d = wh.i();
  if (d > this.fa) {
    for (var e = this.fa + 1;;) {
      if (e <= d + 1) {
        c[e] = this.Oa, e += 1;
      } else {
        break;
      }
    }
    this.fa = d;
  }
  for (d = yh.c(a, b, Array(d));;) {
    return 0 <= this.fa ? (c = c[0].forward, d.forward[0] = c[0], c[0] = d) : null;
  }
};
Ah.prototype.remove = function(a) {
  var b = Array(15), c = zh.l(this.Oa, a, this.fa, b).forward[0];
  if (null != c && c.key === a) {
    for (a = 0;;) {
      if (a <= this.fa) {
        var d = b[a].forward;
        d[a] === c && (d[a] = c.forward[a]);
        a += 1;
      } else {
        break;
      }
    }
    for (;;) {
      if (0 < this.fa && null == this.Oa.forward[this.fa]) {
        this.fa -= 1;
      } else {
        return null;
      }
    }
  } else {
    return null;
  }
};
function Bh(a) {
  for (var b = Ch, c = b.Oa, d = b.fa;;) {
    if (0 > d) {
      return c === b.Oa ? null : c;
    }
    var e;
    a: {
      for (e = c;;) {
        e = e.forward[d];
        if (null == e) {
          e = null;
          break a;
        }
        if (e.key >= a) {
          break a;
        }
      }
      e = void 0;
    }
    null != e ? (d -= 1, c = e) : d -= 1;
  }
}
var Ch = new Ah(yh.a(0), 0);
function Dh(a) {
  var b = (new Date).valueOf() + a, c = Bh(b), d = u(u(c) ? c.key < b + 10 : c) ? c.F : null;
  if (u(d)) {
    return d;
  }
  var e = qh.a(null);
  Ch.put(b, e);
  fh(function(a, b, c) {
    return function() {
      Ch.remove(c);
      return Dg(a);
    };
  }(e, d, b, c), a);
  return e;
}
;var Fh = function Eh(b) {
  "undefined" === typeof wg && (wg = function(b, d, e) {
    this.U = b;
    this.Mb = d;
    this.nc = e;
    this.p = 0;
    this.h = 393216;
  }, wg.prototype.Y = function() {
    return!0;
  }, wg.prototype.T = function() {
    return this.U;
  }, wg.prototype.u = function() {
    return this.nc;
  }, wg.prototype.A = function(b, d) {
    return new wg(this.U, this.Mb, d);
  }, wg.Ha = !0, wg.Ga = "cljs.core.async/t29896", wg.Ma = function(b, d) {
    return E(d, "cljs.core.async/t29896");
  });
  return new wg(b, Eh, new t(null, 5, [Kf, 20, $f, 16, Pf, 3, Uf, 13, Jf, "/Users/jhernandez/dev/cnake/target/cljsbuild-compiler-1/cljs/core/async.cljs"], null));
}, Gh = function() {
  function a(a, b, c) {
    a = dc.b(a, 0) ? null : a;
    if (u(b) && !u(a)) {
      throw Error([y("Assert failed: "), y("buffer must be supplied when transducer is"), y("\n"), y(Pd.e(N([new F(null, "buf-or-n", "buf-or-n", -1646815050, null)], 0)))].join(""));
    }
    return qh.c("number" === typeof a ? Zg(a) : a, b, c);
  }
  function b(a, b) {
    return e.c(a, b, null);
  }
  function c(a) {
    return e.c(a, null, null);
  }
  function d() {
    return e.a(null);
  }
  var e = null, e = function(e, g, h) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e);
      case 2:
        return b.call(this, e, g);
      case 3:
        return a.call(this, e, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.i = d;
  e.a = c;
  e.b = b;
  e.c = a;
  return e;
}(), Hh = Fh(function() {
  return null;
}), Ih = function() {
  function a(a, b, c, d) {
    a = Cg(a, b, Fh(c));
    return u(a) ? (b = O.a ? O.a(a) : O.call(null, a), u(d) ? c.a ? c.a(b) : c.call(null, b) : eh(function(a) {
      return function() {
        return c.a ? c.a(a) : c.call(null, a);
      };
    }(b, a, a)), b) : !0;
  }
  function b(a, b, c) {
    return d.l(a, b, c, !0);
  }
  function c(a, b) {
    var c = Cg(a, b, Hh);
    return u(c) ? O.a ? O.a(c) : O.call(null, c) : !0;
  }
  var d = null, d = function(d, f, g, h) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.c = b;
  d.l = a;
  return d;
}();
function Jh(a) {
  for (var b = Array(a), c = 0;;) {
    if (c < a) {
      b[c] = 0, c += 1;
    } else {
      break;
    }
  }
  for (c = 1;;) {
    if (dc.b(c, a)) {
      return b;
    }
    var d = ad(c);
    b[c] = b[d];
    b[d] = c;
    c += 1;
  }
}
var Lh = function Kh() {
  var b = Nd.a ? Nd.a(!0) : Nd.call(null, !0);
  "undefined" === typeof xg && (xg = function(b, d, e) {
    this.Na = b;
    this.$b = d;
    this.oc = e;
    this.p = 0;
    this.h = 393216;
  }, xg.prototype.Y = function() {
    return function() {
      var b = this.Na;
      return O.a ? O.a(b) : O.call(null, b);
    };
  }(b), xg.prototype.T = function() {
    return function() {
      var b = this.Na;
      Od.b ? Od.b(b, null) : Od.call(null, b, null);
      return!0;
    };
  }(b), xg.prototype.u = function() {
    return function() {
      return this.oc;
    };
  }(b), xg.prototype.A = function() {
    return function(b, d) {
      return new xg(this.Na, this.$b, d);
    };
  }(b), xg.Ha = !0, xg.Ga = "cljs.core.async/t29944", xg.Ma = function() {
    return function(b, d) {
      return E(d, "cljs.core.async/t29944");
    };
  }(b));
  return new xg(b, Kh, new t(null, 5, [Kf, 15, $f, 146, Pf, 5, Uf, 141, Jf, "/Users/jhernandez/dev/cnake/target/cljsbuild-compiler-1/cljs/core/async.cljs"], null));
}, Nh = function Mh(b, c) {
  "undefined" === typeof yg && (yg = function(b, c, f, g) {
    this.$a = b;
    this.Na = c;
    this.ac = f;
    this.pc = g;
    this.p = 0;
    this.h = 393216;
  }, yg.prototype.Y = function() {
    return Eg(this.Na);
  }, yg.prototype.T = function() {
    Fg(this.Na);
    return this.$a;
  }, yg.prototype.u = function() {
    return this.pc;
  }, yg.prototype.A = function(b, c) {
    return new yg(this.$a, this.Na, this.ac, c);
  }, yg.Ha = !0, yg.Ga = "cljs.core.async/t29955", yg.Ma = function(b, c) {
    return E(c, "cljs.core.async/t29955");
  });
  return new yg(c, b, Mh, new t(null, 5, [Kf, 11, $f, 154, Pf, 3, Uf, 149, Jf, "/Users/jhernandez/dev/cnake/target/cljsbuild-compiler-1/cljs/core/async.cljs"], null));
};
function Oh(a, b, c) {
  var d = Lh(), e = R(b), f = Jh(e), g = Vf.a(c), h = function() {
    for (var c = 0;;) {
      if (c < e) {
        var h = u(g) ? c : f[c], n = T.b(b, h), p = Ic(n) ? n.a ? n.a(0) : n.call(null, 0) : null, q = u(p) ? function() {
          var b = n.a ? n.a(1) : n.call(null, 1);
          return Cg(p, b, Nh(d, function(b, c, d, e, f) {
            return function(b) {
              b = new Y(null, 2, 5, Z, [b, f], null);
              return a.a ? a.a(b) : a.call(null, b);
            };
          }(c, b, h, n, p, d, e, f, g)));
        }() : Bg(n, Nh(d, function(b, c, d) {
          return function(b) {
            b = new Y(null, 2, 5, Z, [b, d], null);
            return a.a ? a.a(b) : a.call(null, b);
          };
        }(c, h, n, p, d, e, f, g)));
        if (u(q)) {
          return ih(new Y(null, 2, 5, Z, [function() {
            var a = q;
            return O.a ? O.a(a) : O.call(null, a);
          }(), function() {
            var a = p;
            return u(a) ? a : n;
          }()], null));
        }
        c += 1;
      } else {
        return null;
      }
    }
  }();
  return u(h) ? h : U.c(c, Hf, Nc) !== Nc && (h = function() {
    var a = d.Y(null);
    return u(a) ? d.T(null) : a;
  }(), u(h)) ? ih(new Y(null, 2, 5, Z, [Hf.a(c), Hf], null)) : null;
}
var Ph = function() {
  function a(a, b, c) {
    var g = Gh.a(1);
    eh(function(g) {
      return function() {
        var l = function() {
          return function(a) {
            return function() {
              function b(c) {
                for (;;) {
                  var d;
                  a: {
                    try {
                      for (;;) {
                        var e = a(c);
                        if (!id(e, $)) {
                          d = e;
                          break a;
                        }
                      }
                    } catch (f) {
                      if (f instanceof Object) {
                        c[5] = f;
                        Pg(c);
                        d = $;
                        break a;
                      }
                      throw f;
                    }
                    d = void 0;
                  }
                  if (!id(d, $)) {
                    return d;
                  }
                }
              }
              function c() {
                var a = [null, null, null, null, null, null, null, null];
                a[0] = d;
                a[1] = 1;
                return a;
              }
              var d = null, d = function(a) {
                switch(arguments.length) {
                  case 0:
                    return c.call(this);
                  case 1:
                    return b.call(this, a);
                }
                throw Error("Invalid arity: " + arguments.length);
              };
              d.i = c;
              d.a = b;
              return d;
            }();
          }(function() {
            return function(g) {
              var h = g[1];
              return 7 === h ? (h = g, h[2] = g[2], h[1] = 3, $) : 1 === h ? (g[2] = null, g[1] = 2, $) : 4 === h ? (h = g[7], h = g[2], g[7] = h, g[1] = u(null == h) ? 5 : 6, $) : 13 === h ? (g[2] = null, g[1] = 14, $) : 6 === h ? (h = g[7], Ng(g, 11, b, h)) : 3 === h ? (h = g[2], Og(g, h)) : 12 === h ? (g[2] = null, g[1] = 2, $) : 2 === h ? Mg(g, 4, a) : 11 === h ? (h = g[2], g[1] = u(h) ? 12 : 13, $) : 9 === h ? (g[2] = null, g[1] = 10, $) : 5 === h ? (g[1] = u(c) ? 8 : 9, $) : 14 === h || 10 === 
              h ? (h = g[2], g[2] = h, g[1] = 7, $) : 8 === h ? (h = Dg(b), g[2] = h, g[1] = 10, $) : null;
            };
          }(g), g);
        }(), m = function() {
          var a = l.i ? l.i() : l.call(null);
          a[6] = g;
          return a;
        }();
        return Lg(m);
      };
    }(g));
    return b;
  }
  function b(a, b) {
    return c.c(a, b, !0);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}(), Qh = function() {
  function a(a, d, e, f) {
    var g = null;
    3 < arguments.length && (g = N(Array.prototype.slice.call(arguments, 3), 0));
    return b.call(this, a, d, e, g);
  }
  function b(a, b, e, f) {
    var g = Oc(f) ? W.b(Ld, f) : f;
    a[1] = b;
    b = Oh(function() {
      return function(b) {
        a[2] = b;
        return Lg(a);
      };
    }(f, g, g), e, g);
    return u(b) ? (a[2] = O.a ? O.a(b) : O.call(null, b), $) : null;
  }
  a.n = 3;
  a.g = function(a) {
    var d = I(a);
    a = M(a);
    var e = I(a);
    a = M(a);
    var f = I(a);
    a = J(a);
    return b(d, e, f, a);
  };
  a.e = b;
  return a;
}(), Rh = function() {
  function a(a, b) {
    var c = Gh.a(b), g = Gh.a(1);
    eh(function(b, c) {
      return function() {
        var e = function() {
          return function(a) {
            return function() {
              function b(c) {
                for (;;) {
                  var d;
                  a: {
                    try {
                      for (;;) {
                        var e = a(c);
                        if (!id(e, $)) {
                          d = e;
                          break a;
                        }
                      }
                    } catch (f) {
                      if (f instanceof Object) {
                        c[5] = f;
                        Pg(c);
                        d = $;
                        break a;
                      }
                      throw f;
                    }
                    d = void 0;
                  }
                  if (!id(d, $)) {
                    return d;
                  }
                }
              }
              function c() {
                var a = [null, null, null, null, null, null, null, null, null, null, null, null];
                a[0] = d;
                a[1] = 1;
                return a;
              }
              var d = null, d = function(a) {
                switch(arguments.length) {
                  case 0:
                    return c.call(this);
                  case 1:
                    return b.call(this, a);
                }
                throw Error("Invalid arity: " + arguments.length);
              };
              d.i = c;
              d.a = b;
              return d;
            }();
          }(function(b, c) {
            return function(e) {
              var f = e[1];
              if (7 === f) {
                var g = e[7], h = e[8], l = e[2], m = T.c(l, 0, null), n = T.c(l, 1, null);
                e[7] = l;
                e[8] = m;
                e[9] = n;
                e[1] = u(null == m) ? 8 : 9;
                return $;
              }
              if (1 === f) {
                var S = oe(a);
                e[10] = S;
                e[2] = null;
                e[1] = 2;
                return $;
              }
              return 4 === f ? (S = e[10], Qh(e, 7, S)) : 6 === f ? (l = e[2], e[2] = l, e[1] = 3, $) : 3 === f ? (l = e[2], Og(e, l)) : 2 === f ? (S = e[10], l = 0 < R(S), e[1] = u(l) ? 4 : 5, $) : 11 === f ? (S = e[10], e[11] = e[2], e[10] = S, e[2] = null, e[1] = 2, $) : 9 === f ? (h = e[8], Ng(e, 11, c, h)) : 5 === f ? (l = Dg(c), e[2] = l, e[1] = 6, $) : 10 === f ? (l = e[2], e[2] = l, e[1] = 6, $) : 8 === f ? (g = e[7], h = e[8], S = e[10], n = e[9], l = Xd(function() {
                return function(a) {
                  return function(b) {
                    return Dd.b(a, b);
                  };
                }(n, h, g, S, g, h, S, n, f, b, c);
              }(), S), e[10] = l, e[2] = null, e[1] = 2, $) : null;
            };
          }(b, c), b, c);
        }(), f = function() {
          var a = e.i ? e.i() : e.call(null);
          a[6] = b;
          return a;
        }();
        return Lg(f);
      };
    }(g, c));
    return c;
  }
  function b(a) {
    return c.b(a, null);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), Th = function Sh(b, c) {
  "undefined" === typeof zg && (zg = function(b, c, f, g) {
    this.ch = b;
    this.U = c;
    this.xb = f;
    this.yb = g;
    this.p = 0;
    this.h = 393216;
  }, zg.prototype.ib = function(b, c, f) {
    return Cg(this.ch, c, f);
  }, zg.prototype.tb = function(b, c) {
    var f = this, g = this, h = Bg(f.ch, function() {
      "undefined" === typeof Ag && (Ag = function(b, c, d, e, f, g, h) {
        this.Lb = b;
        this.Zb = c;
        this.yb = d;
        this.xb = e;
        this.U = f;
        this.ch = g;
        this.qc = h;
        this.p = 0;
        this.h = 393216;
      }, Ag.prototype.Y = function() {
        return function() {
          return Eg(this.Lb);
        };
      }(g), Ag.prototype.T = function() {
        return function(b) {
          var c = this;
          return function(b) {
            return function(d) {
              d = null == d ? null : c.U.a ? c.U.a(d) : c.U.call(null, d);
              return b.a ? b.a(d) : b.call(null, d);
            };
          }(Fg(c.Lb), this, b);
        };
      }(g), Ag.prototype.u = function() {
        return function() {
          return this.qc;
        };
      }(g), Ag.prototype.A = function() {
        return function(b, c) {
          return new Ag(this.Lb, this.Zb, this.yb, this.xb, this.U, this.ch, c);
        };
      }(g), Ag.Ha = !0, Ag.Ga = "cljs.core.async/t32467", Ag.Ma = function() {
        return function(b, c) {
          return E(c, "cljs.core.async/t32467");
        };
      }(g));
      return new Ag(c, g, f.yb, f.xb, f.U, f.ch, new t(null, 5, [Kf, 46, $f, 737, Pf, 10, Uf, 731, Jf, "/Users/jhernandez/dev/cnake/target/cljsbuild-compiler-1/cljs/core/async.cljs"], null));
    }());
    return u(u(h) ? null != (O.a ? O.a(h) : O.call(null, h)) : h) ? ih(function() {
      var b = O.a ? O.a(h) : O.call(null, h);
      return f.U.a ? f.U.a(b) : f.U.call(null, b);
    }()) : h;
  }, zg.prototype.hb = function() {
    return Dg(this.ch);
  }, zg.prototype.u = function() {
    return this.yb;
  }, zg.prototype.A = function(b, c) {
    return new zg(this.ch, this.U, this.xb, c);
  }, zg.Ha = !0, zg.Ga = "cljs.core.async/t32464", zg.Ma = function(b, c) {
    return E(c, "cljs.core.async/t32464");
  });
  return new zg(c, b, Sh, new t(null, 5, [Kf, 46, $f, 743, Pf, 3, Uf, 722, Jf, "/Users/jhernandez/dev/cnake/target/cljsbuild-compiler-1/cljs/core/async.cljs"], null));
}, Uh = function() {
  function a(a, b, c) {
    c = Gh.a(c);
    var g = Gh.a(1);
    eh(function(c, f) {
      return function() {
        var g = function() {
          return function(a) {
            return function() {
              function b(c) {
                for (;;) {
                  var d;
                  a: {
                    try {
                      for (;;) {
                        var e = a(c);
                        if (!id(e, $)) {
                          d = e;
                          break a;
                        }
                      }
                    } catch (f) {
                      if (f instanceof Object) {
                        c[5] = f;
                        Pg(c);
                        d = $;
                        break a;
                      }
                      throw f;
                    }
                    d = void 0;
                  }
                  if (!id(d, $)) {
                    return d;
                  }
                }
              }
              function c() {
                var a = [null, null, null, null, null, null, null, null, null];
                a[0] = d;
                a[1] = 1;
                return a;
              }
              var d = null, d = function(a) {
                switch(arguments.length) {
                  case 0:
                    return c.call(this);
                  case 1:
                    return b.call(this, a);
                }
                throw Error("Invalid arity: " + arguments.length);
              };
              d.i = c;
              d.a = b;
              return d;
            }();
          }(function(c, f) {
            return function(c) {
              var g = c[1];
              return 7 === g ? (g = c, g[2] = c[2], g[1] = 3, $) : 1 === g ? (c[2] = null, c[1] = 2, $) : 4 === g ? (g = c[7], g = c[2], c[7] = g, c[1] = u(null == g) ? 5 : 6, $) : 6 === g ? (g = c[7], g = a.a ? a.a(g) : a.call(null, g), c[1] = u(g) ? 8 : 9, $) : 3 === g ? (g = c[2], Og(c, g)) : 2 === g ? Mg(c, 4, b) : 11 === g ? (g = c[2], c[2] = g, c[1] = 10, $) : 9 === g ? (c[2] = null, c[1] = 10, $) : 5 === g ? (g = Dg(f), c[2] = g, c[1] = 7, $) : 10 === g ? (c[8] = c[2], c[2] = null, c[1] = 
              2, $) : 8 === g ? (g = c[7], Ng(c, 11, f, g)) : null;
            };
          }(c, f), c, f);
        }(), n = function() {
          var a = g.i ? g.i() : g.call(null);
          a[6] = c;
          return a;
        }();
        return Lg(n);
      };
    }(g, c));
    return c;
  }
  function b(a, b) {
    return c.c(a, b, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}(), Vh = function() {
  function a(a, b) {
    var c = Gh.a(b), g = Gh.a(1);
    eh(function(b, c) {
      return function() {
        var e = function() {
          return function(a) {
            return function() {
              function b(c) {
                for (;;) {
                  var d;
                  a: {
                    try {
                      for (;;) {
                        var e = a(c);
                        if (!id(e, $)) {
                          d = e;
                          break a;
                        }
                      }
                    } catch (f) {
                      if (f instanceof Object) {
                        c[5] = f;
                        Pg(c);
                        d = $;
                        break a;
                      }
                      throw f;
                    }
                    d = void 0;
                  }
                  if (!id(d, $)) {
                    return d;
                  }
                }
              }
              function c() {
                var a = [null, null, null, null, null, null, null, null, null, null, null];
                a[0] = d;
                a[1] = 1;
                return a;
              }
              var d = null, d = function(a) {
                switch(arguments.length) {
                  case 0:
                    return c.call(this);
                  case 1:
                    return b.call(this, a);
                }
                throw Error("Invalid arity: " + arguments.length);
              };
              d.i = c;
              d.a = b;
              return d;
            }();
          }(function(b, c) {
            return function(b) {
              var e = b[1];
              if (7 === e) {
                return e = b, e[2] = b[2], e[1] = 3, $;
              }
              if (1 === e) {
                var f;
                b[7] = null;
                b[2] = null;
                b[1] = 2;
                return $;
              }
              return 4 === e ? (e = b[8], e = b[2], f = Ha(null == e), b[8] = e, b[1] = f ? 5 : 6, $) : 6 === e ? (b[2] = null, b[1] = 7, $) : 3 === e ? (e = b[2], f = Dg(c), b[9] = e, Og(b, f)) : 2 === e ? Mg(b, 4, a) : 11 === e ? (e = b[8], f = b[2], b[10] = f, b[7] = e, b[2] = null, b[1] = 2, $) : 9 === e ? (e = b[8], Ng(b, 11, c, e)) : 5 === e ? (e = b[8], f = b[7], e = dc.b(e, f), b[1] = e ? 8 : 9, $) : 10 === e ? (e = b[2], b[2] = e, b[1] = 7, $) : 8 === e ? (f = b[7], b[7] = f, b[2] = null, 
              b[1] = 2, $) : null;
            };
          }(b, c), b, c);
        }(), f = function() {
          var a = e.i ? e.i() : e.call(null);
          a[6] = b;
          return a;
        }();
        return Lg(f);
      };
    }(g, c));
    return c;
  }
  function b(a) {
    return c.b(a, null);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
var Wh = Zc(20, 3), Xh = Zc(16, 2), Yh = oe(Rd.c(pe, Rd.c(Uc, nf.a(3), Td.a(Wh)), Td.a(Xh))), Zh = new t(null, 4, [Ef, new t(null, 2, [fg, Yh, eg, new Y(null, 2, 5, Z, [1, 0], null)], null), gg, wc, Gf, 200, Wf, null], null);
function $h(a, b) {
  var c = function() {
    switch(b instanceof X ? b.aa : null) {
      case "right":
        return new Y(null, 2, 5, Z, [1, 0], null);
      case "left":
        return new Y(null, 2, 5, Z, [-1, 0], null);
      case "down":
        return new Y(null, 2, 5, Z, [0, 1], null);
      case "up":
        return new Y(null, 2, 5, Z, [0, -1], null);
      default:
        return eg.a(a);
    }
  }();
  return Ac.c(a, Af, c);
}
function ai() {
  return new Y(null, 2, 5, Z, [ad(20), ad(16)], null);
}
function bi(a, b) {
  if (3 > R(a)) {
    for (var c = Wd.b(gf, xd.b(a, Yd.b(b, new Y(null, 2, 5, Z, [Ef, fg], null)))), d = ai(), e = 30;;) {
      if (dc.b(e, 0)) {
        return a;
      }
      var f;
      f = d;
      f = c.a ? c.a(f) : c.call(null, f);
      if (Ha(f)) {
        return xc.b(a, d);
      }
      d = ai();
      e -= 1;
    }
  } else {
    return a;
  }
}
var ci = function() {
  function a(a, b, c) {
    var g = Gh.a(1);
    eh(function(g) {
      return function() {
        var l = function() {
          return function(a) {
            return function() {
              function b(c) {
                for (;;) {
                  var d;
                  a: {
                    try {
                      for (;;) {
                        var e = a(c);
                        if (!id(e, $)) {
                          d = e;
                          break a;
                        }
                      }
                    } catch (f) {
                      if (f instanceof Object) {
                        c[5] = f;
                        Pg(c);
                        d = $;
                        break a;
                      }
                      throw f;
                    }
                    d = void 0;
                  }
                  if (!id(d, $)) {
                    return d;
                  }
                }
              }
              function c() {
                var a = [null, null, null, null, null, null, null, null];
                a[0] = d;
                a[1] = 1;
                return a;
              }
              var d = null, d = function(a) {
                switch(arguments.length) {
                  case 0:
                    return c.call(this);
                  case 1:
                    return b.call(this, a);
                }
                throw Error("Invalid arity: " + arguments.length);
              };
              d.i = c;
              d.a = b;
              return d;
            }();
          }(function() {
            return function(g) {
              var h = g[1];
              if (2 === h) {
                var h = g[2], l = Ih.b(b, new Y(null, 1, 5, Z, [yf], null));
                g[7] = h;
                return Og(g, l);
              }
              return 1 === h ? (h = [Dh(a), c], h = new Y(null, 2, 5, Z, h, null), Qh(g, 2, h)) : null;
            };
          }(g), g);
        }(), m = function() {
          var a = l.i ? l.i() : l.call(null);
          a[6] = g;
          return a;
        }();
        return Lg(m);
      };
    }(g));
    return g;
  }
  function b(a, b) {
    return c.c(a, b, Gh.i());
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}();
function di(a, b) {
  var c = W.c(kf, a, b);
  return P(c, Vd.b(function(a) {
    return function(b) {
      return a === b;
    };
  }(c), b));
}
var ei = function() {
  function a(a, b) {
    return R(a) < R(b) ? Oa.c(xc, b, a) : Oa.c(xc, a, b);
  }
  var b = null, c = function() {
    function a(c, d, h) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      a = di(R, xc.e(d, c, N([a], 0)));
      return Oa.c(Wd, I(a), J(a));
    }
    a.n = 2;
    a.g = function(a) {
      var c = I(a);
      a = M(a);
      var d = I(a);
      a = J(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 0:
        return gf;
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.n = 2;
  b.g = c.g;
  b.i = function() {
    return gf;
  };
  b.a = function(a) {
    return a;
  };
  b.b = a;
  b.e = c.e;
  return b;
}();
var fi = "closure_listenable_" + (1E6 * Math.random() | 0), gi = 0;
function hi(a, b, c, d, e) {
  this.Ya = a;
  this.zb = null;
  this.src = b;
  this.type = c;
  this.Cb = !!d;
  this.Ba = e;
  this.key = ++gi;
  this.lb = this.Bb = !1;
}
function ii(a) {
  a.lb = !0;
  a.Ya = null;
  a.zb = null;
  a.src = null;
  a.Ba = null;
}
;function ji(a) {
  this.src = a;
  this.ka = {};
  this.Ab = 0;
}
ji.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.ka[f];
  a || (a = this.ka[f] = [], this.Ab++);
  var g = ki(a, b, d, e);
  -1 < g ? (b = a[g], c || (b.Bb = !1)) : (b = new hi(b, this.src, f, !!d, e), b.Bb = c, a.push(b));
  return b;
};
ji.prototype.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.ka)) {
    return!1;
  }
  var e = this.ka[a];
  b = ki(e, b, c, d);
  return-1 < b ? (ii(e[b]), pa.splice.call(e, b, 1), 0 == e.length && (delete this.ka[a], this.Ab--), !0) : !1;
};
function ki(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var f = a[e];
    if (!f.lb && f.Ya == b && f.Cb == !!c && f.Ba == d) {
      return e;
    }
  }
  return-1;
}
;var li = "closure_lm_" + (1E6 * Math.random() | 0), mi = {}, ni = 0;
function oi(a, b, c, d, e) {
  if ("array" == r(b)) {
    for (var f = 0;f < b.length;f++) {
      oi(a, b[f], c, d, e);
    }
  } else {
    if (c = pi(c), a && a[fi]) {
      a.Hc(b, c, d, e);
    } else {
      if (!b) {
        throw Error("Invalid event type");
      }
      var f = !!d, g = qi(a);
      g || (a[li] = g = new ji(a));
      c = g.add(b, c, !1, d, e);
      c.zb || (d = ri(), c.zb = d, d.src = a, d.Ya = c, a.addEventListener ? a.addEventListener(b.toString(), d, f) : a.attachEvent(si(b.toString()), d), ni++);
    }
  }
}
function ri() {
  var a = ti, b = rh ? function(c) {
    return a.call(b.src, b.Ya, c);
  } : function(c) {
    c = a.call(b.src, b.Ya, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function si(a) {
  return a in mi ? mi[a] : mi[a] = "on" + a;
}
function ui(a, b, c, d) {
  var e = 1;
  if (a = qi(a)) {
    if (b = a.ka[b.toString()]) {
      for (b = b.concat(), a = 0;a < b.length;a++) {
        var f = b[a];
        f && f.Cb == c && !f.lb && (e &= !1 !== vi(f, d));
      }
    }
  }
  return Boolean(e);
}
function vi(a, b) {
  var c = a.Ya, d = a.Ba || a.src;
  if (a.Bb && "number" != typeof a && a && !a.lb) {
    var e = a.src;
    if (e && e[fi]) {
      e.Ic(a);
    } else {
      var f = a.type, g = a.zb;
      e.removeEventListener ? e.removeEventListener(f, g, a.Cb) : e.detachEvent && e.detachEvent(si(f), g);
      ni--;
      if (f = qi(e)) {
        var g = a.type, h;
        if (h = g in f.ka) {
          h = f.ka[g];
          var l = qa(h, a), m;
          (m = 0 <= l) && pa.splice.call(h, l, 1);
          h = m;
        }
        h && (ii(a), 0 == f.ka[g].length && (delete f.ka[g], f.Ab--));
        0 == f.Ab && (f.src = null, e[li] = null);
      } else {
        ii(a);
      }
    }
  }
  return c.call(d, b);
}
function ti(a, b) {
  if (a.lb) {
    return!0;
  }
  if (!rh) {
    var c;
    if (!(c = b)) {
      a: {
        c = ["window", "event"];
        for (var d = aa, e;e = c.shift();) {
          if (null != d[e]) {
            d = d[e];
          } else {
            c = null;
            break a;
          }
        }
        c = d;
      }
    }
    e = c;
    c = new vh(e, this);
    d = !0;
    if (!(0 > e.keyCode || void 0 != e.returnValue)) {
      a: {
        var f = !1;
        if (0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a;
          } catch (g) {
            f = !0;
          }
        }
        if (f || void 0 == e.returnValue) {
          e.returnValue = !0;
        }
      }
      e = [];
      for (f = c.currentTarget;f;f = f.parentNode) {
        e.push(f);
      }
      for (var f = a.type, h = e.length - 1;!c.Xb && 0 <= h;h--) {
        c.currentTarget = e[h], d &= ui(e[h], f, !0, c);
      }
      for (h = 0;!c.Xb && h < e.length;h++) {
        c.currentTarget = e[h], d &= ui(e[h], f, !1, c);
      }
    }
    return d;
  }
  return vi(a, new vh(b, this));
}
function qi(a) {
  a = a[li];
  return a instanceof ji ? a : null;
}
var wi = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function pi(a) {
  if (ca(a)) {
    return a;
  }
  a[wi] || (a[wi] = function(b) {
    return a.handleEvent(b);
  });
  return a[wi];
}
;var xi = function() {
  function a(a, b, c, g) {
    return[y("hsla("), y(a), y(","), y(b), y("%,"), y(c), y("%,"), y(g), y(")")].join("");
  }
  function b(a, b, f) {
    return c.l(a, b, f, 1);
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.l = a;
  return c;
}(), yi = 2 * Math.PI;
function zi(a, b) {
  var c = Ai;
  c.beginPath();
  c.arc(a, b, 4, 0, yi, !0);
  c.fill();
}
function Bi(a, b) {
  var c = Ai;
  c.beginPath();
  c.arc(a, b, 4, 0, yi, !0);
  c.stroke();
}
function Ci(a) {
  return requestAnimationFrame(a);
}
;var Di = Nd.a ? Nd.a(null) : Nd.call(null, null), Ei = document.getElementById("cnake"), Ai = Ei.getContext("2d");
function Fi(a) {
  return Rd.b(Jd.b(Wc, 10), a);
}
var Gi = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = N(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    return Rd.c(Uc, a, b);
  }
  a.n = 1;
  a.g = function(a) {
    var d = I(a);
    a = J(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}(), Hi = new Y(null, 3, 5, Z, [0, 100, 40], null), Ii = new Y(null, 3, 5, Z, [140, 50, 40], null);
function Ji(a) {
  var b = Oc(a) ? W.b(Ld, a) : a, c = U.b(b, gg), d = U.b(b, Ef);
  return new t(null, 2, [Ef, Rd.b(Fi, fg.a(d)), gg, Rd.b(function() {
    return function(a) {
      return Gi.e(Fi(a), N([5, 5], 0));
    };
  }(a, b, b, c, d), c)], null);
}
var Ki = new t(null, 6, [37, hg, 38, Nf, 39, ag, 40, zf, 32, Bf, 13, Qf], null);
function Li(a) {
  return U.c(Ki, a.keyCode, Rf);
}
var Mi = function() {
  function a(a, b, c) {
    var d = Gh.i(), l = document.body;
    oi(l, a, function(a, d, e) {
      return function(a) {
        u(c) && a.preventDefault();
        return Ih.b(e, b.a ? b.a(a) : b.call(null, a));
      };
    }(l, a, d));
    return d;
  }
  function b(a, b) {
    return d.c(a, b, !1);
  }
  function c(a) {
    return d.c(a, Sc, !1);
  }
  var d = null, d = function(d, f, g) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.c = a;
  return d;
}();
function Ni(a, b) {
  var c = Mi.b(a, Li);
  return Uh.b(b, c);
}
var Oi = new ef(null, new t(null, 1, [Bf, null], null), null), Pi = new ef(null, new t(null, 4, [zf, null, Nf, null, ag, null, hg, null], null), null), Qi = new ef(null, new t(null, 1, [Qf, null], null), null), Ri = ei.e(Pi, Oi, N([Qi], 0));
function Si(a) {
  return u(Pi.a ? Pi.a(a) : Pi.call(null, a)) ? new Y(null, 2, 5, Z, [Sf, a], null) : u(Qi.a ? Qi.a(a) : Qi.call(null, a)) ? new Y(null, 1, 5, Z, [Ff], null) : u(Oi.a ? Oi.a(a) : Oi.call(null, a)) ? new Y(null, 2, 5, Z, [Cf, !0], null) : null;
}
function Ti(a) {
  a = a.Kb.touches[0];
  return new t(null, 2, [cg, a.pageX, xf, a.pageY], null);
}
;var ua = !1, ta = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return console.log.apply(console, Pa.a ? Pa.a(a) : Pa.call(null, a));
  }
  a.n = 0;
  a.g = function(a) {
    a = G(a);
    return b(a);
  };
  a.e = b;
  return a;
}(), Ui = Gh.i(), Vi = Gh.i();
(function(a, b) {
  var c = Gh.a(1);
  eh(function(c) {
    return function() {
      var e = function() {
        return function(a) {
          return function() {
            function b(c) {
              for (;;) {
                var d;
                a: {
                  try {
                    for (;;) {
                      var e = a(c);
                      if (!id(e, $)) {
                        d = e;
                        break a;
                      }
                    }
                  } catch (f) {
                    if (f instanceof Object) {
                      c[5] = f;
                      Pg(c);
                      d = $;
                      break a;
                    }
                    throw f;
                  }
                  d = void 0;
                }
                if (!id(d, $)) {
                  return d;
                }
              }
            }
            function c() {
              var a = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
              a[0] = d;
              a[1] = 1;
              return a;
            }
            var d = null, d = function(a) {
              switch(arguments.length) {
                case 0:
                  return c.call(this);
                case 1:
                  return b.call(this, a);
              }
              throw Error("Invalid arity: " + arguments.length);
            };
            d.i = c;
            d.a = b;
            return d;
          }();
        }(function() {
          return function(c) {
            var d = c[1];
            if (7 === d) {
              return d = c[7], d = W.b(Ld, d), c[2] = d, c[1] = 9, $;
            }
            if (20 === d) {
              var e = c[8], e = c[9], d = c[10];
              var d = e, d = Oc(d) ? W.b(Ld, d) : d, e = U.b(d, gg), f = U.b(d, Ef), n, p = eg.a(f);
              n = Af.a(f);
              p = dc.b(new Y(null, 2, 5, Z, [0, 0], null), Rd.c(Uc, n, p));
              n = u(n) ? Bc.b(p ? f : Ac.c(f, eg, n), Af) : f;
              var p = fg.a(f), q = vc(p), q = Rd.c(Uc, q, eg.a(n)), q = Rd.c(Yc, q, new Y(null, 2, 5, Z, [20, 16], null));
              n = Ac.c(n, fg, xc.b(re.b(p, 1), q));
              p = Oc(n) ? W.b(Ld, n) : n;
              q = U.b(p, fg);
              p = vc(q);
              q = Id.c(Ha, Ga, Wd.b(gf, jf(q)));
              p = q.a ? q.a(p) : q.call(null, p);
              if (u(p)) {
                d = Ac.c(d, Wf, dg);
              } else {
                p = Oc(n) ? W.b(Ld, n) : n;
                p = U.b(p, fg);
                b: {
                  p = hf([vc(p)]);
                  for (q = e;;) {
                    if (G(q)) {
                      var s;
                      s = I(q);
                      s = p.a ? p.a(s) : p.call(null, s);
                      if (u(s)) {
                        p = s;
                        break b;
                      }
                      q = M(q);
                    } else {
                      p = null;
                      break b;
                    }
                  }
                  p = void 0;
                }
                u(p) ? (n = Oc(n) ? W.b(Ld, n) : n, q = U.b(n, fg), f = Oc(f) ? W.b(Ld, f) : f, f = U.b(f, fg), f = Ac.c(n, fg, xc.b(f, vc(q))), e = bi(Vd.b(hf([p]), e), d), d = Ac.e(d, Ef, f, N([gg, e, Wf, bg], 0))) : d = Ac.e(d, Ef, n, N([gg, bi(e, d), Wf, Lf], 0));
              }
              e = Wf.a(d);
              f = dc.b(e, dg);
              c[8] = e;
              c[10] = d;
              c[1] = f ? 21 : 22;
              return $;
            }
            if (27 === d) {
              return f = c[11], d = c[12], e = c[9], d = $h(f, d), d = Ac.c(e, Ef, d), c[7] = d, c[2] = null, c[1] = 5, $;
            }
            if (1 === d) {
              return d = Oc(Zh), c[1] = d ? 2 : 3, $;
            }
            if (24 === d) {
              return d = c[10], e = c[2], c[7] = d, c[13] = e, c[2] = null, c[1] = 5, $;
            }
            if (4 === d) {
              return d = c[2], e = U.b(d, Gf), f = U.b(d, gg), n = U.b(d, Ef), p = U.b(d, Wf), d = Zh, c[14] = n, c[7] = d, c[15] = p, c[16] = e, c[17] = f, c[2] = null, c[1] = 5, $;
            }
            if (15 === d) {
              return e = c[9], d = ci.b(0, a), c[7] = e, c[18] = d, c[2] = null, c[1] = 5, $;
            }
            if (21 === d) {
              return d = new Y(null, 1, 5, Z, [dg], null), Ng(c, 24, b, d);
            }
            if (13 === d) {
              return d = c[2], c[2] = d, c[1] = 6, $;
            }
            if (22 === d) {
              return e = c[8], d = c[19], d = ci.b(d, a), e = new Y(null, 1, 5, Z, [e], null), c[20] = d, Ng(c, 25, b, e);
            }
            if (29 === d) {
              throw d = c[21], c = [y("Unrecognized game command: "), y(d)].join(""), Error(c);
            }
            if (6 === d) {
              return d = c[2], Og(c, d);
            }
            if (28 === d) {
              return d = c[12], e = c[9], f = Gf.a(e), d = Ac.c(e, Gf, u(d) ? f / 4 : 4 * f), c[7] = d, c[2] = null, c[1] = 5, $;
            }
            if (25 === d) {
              return d = c[10], d = new Y(null, 2, 5, Z, [Tf, d], null), c[22] = c[2], Ng(c, 26, b, d);
            }
            if (17 === d) {
              return d = Ih.b(a, new Y(null, 1, 5, Z, [Df], null)), c[2] = d, c[1] = 19, $;
            }
            if (3 === d) {
              return c[2] = Zh, c[1] = 4, $;
            }
            if (12 === d) {
              d = c[21];
              switch(d instanceof X ? d.aa : null) {
                case "turbo":
                  c[1] = 28;
                  break;
                case "turn":
                  c[1] = 27;
                  break;
                case "tick":
                  c[1] = 20;
                  break;
                case "reset":
                  c[1] = 16;
                  break;
                case "init":
                  c[1] = 15;
                  break;
                default:
                  c[1] = 29;
              }
              return $;
            }
            return 2 === d ? (d = W.b(Ld, Zh), c[2] = d, c[1] = 4, $) : 23 === d ? (d = c[2], c[2] = d, c[1] = 14, $) : 19 === d ? (e = c[2], d = Zh, c[7] = d, c[23] = e, c[2] = null, c[1] = 5, $) : 11 === d ? (e = c[9], c[7] = e, c[2] = null, c[1] = 5, $) : 9 === d ? (n = c[2], d = U.b(n, Gf), p = U.b(n, gg), f = U.b(n, Ef), e = U.b(n, Wf), c[11] = f, c[24] = e, c[9] = n, c[25] = p, c[19] = d, Mg(c, 10, a)) : 5 === d ? (d = c[7], d = Oc(d), c[1] = d ? 7 : 8, $) : 14 === d ? (d = c[2], c[2] = d, 
            c[1] = 13, $) : 26 === d ? (d = c[10], e = c[2], c[26] = e, c[7] = d, c[2] = null, c[1] = 5, $) : 16 === d ? (e = c[24], d = dc.b(e, dg), c[1] = d ? 17 : 18, $) : 10 === d ? (e = c[24], d = c[2], f = T.c(d, 0, null), d = T.c(d, 1, null), e = dc.b(e, dg), n = Dd.b(f, Ff), c[12] = d, c[21] = f, c[1] = u(e && n) ? 11 : 12, $) : 18 === d ? (c[2] = null, c[1] = 19, $) : 8 === d ? (d = c[7], c[2] = d, c[1] = 9, $) : null;
          };
        }(c), c);
      }(), f = function() {
        var a = e.i ? e.i() : e.call(null);
        a[6] = c;
        return a;
      }();
      return Lg(f);
    };
  }(c));
})(Ui, Vi);
var Wi = Ni("keydown", Ri), Xi = Ni("keyup", Oi), Yi = Vh.a(Rh.a(new Y(null, 3, 5, Z, [Th(Si, Wi), Th(function(a) {
  return u(Oi.a ? Oi.a(a) : Oi.call(null, a)) ? new Y(null, 2, 5, Z, [Cf, !1], null) : null;
}, Xi), function() {
  var a = Mi.c("touchmove", Ti, !0), b = Gh.i(), c = Gh.a(1);
  eh(function(a, b, c) {
    return function() {
      var g = function() {
        return function(a) {
          return function() {
            function b(c) {
              for (;;) {
                var d;
                a: {
                  try {
                    for (;;) {
                      var e = a(c);
                      if (!id(e, $)) {
                        d = e;
                        break a;
                      }
                    }
                  } catch (f) {
                    if (f instanceof Object) {
                      c[5] = f;
                      Pg(c);
                      d = $;
                      break a;
                    }
                    throw f;
                  }
                  d = void 0;
                }
                if (!id(d, $)) {
                  return d;
                }
              }
            }
            function c() {
              var a = [null, null, null, null, null, null, null, null, null, null, null, null];
              a[0] = d;
              a[1] = 1;
              return a;
            }
            var d = null, d = function(a) {
              switch(arguments.length) {
                case 0:
                  return c.call(this);
                case 1:
                  return b.call(this, a);
              }
              throw Error("Invalid arity: " + arguments.length);
            };
            d.i = c;
            d.a = b;
            return d;
          }();
        }(function(a, b, c) {
          return function(a) {
            var d = a[1];
            if (7 === d) {
              return a[7] = a[2], Mg(a, 18, b);
            }
            if (1 === d) {
              return d = zc([cg, xf], [0, 0]), a[8] = d, Mg(a, 2, b);
            }
            if (4 === d) {
              return d = a[2], Og(a, d);
            }
            if (15 === d) {
              return d = a[2], a[2] = d, a[1] = 7, $;
            }
            if (13 === d) {
              return d = Si(Nf), Ng(a, 16, c, d);
            }
            if (6 === d) {
              return d = a[9], d = 0 > xf.a(d), a[1] = u(d) ? 13 : 14, $;
            }
            if (17 === d) {
              return d = a[2], a[2] = d, a[1] = 15, $;
            }
            if (3 === d) {
              var d = a[10], e = a[11], f = [cg, xf], g = cg.a(e), h = cg.a(d), g = g - h, e = xf.a(e), d = xf.a(d), d = zc(f, [g, e - d]), f = cg.a(d), f = Math.abs(f), e = xf.a(d), f = f > Math.abs(e);
              a[9] = d;
              a[1] = u(f) ? 5 : 6;
              return $;
            }
            return 12 === d ? (d = a[2], a[2] = d, a[1] = 10, $) : 2 === d ? (d = a[8], f = a[2], a[10] = d, a[11] = f, a[2] = null, a[1] = 3, $) : 11 === d ? (d = a[2], a[2] = d, a[1] = 10, $) : 9 === d ? (d = Si(ag), Ng(a, 12, c, d)) : 5 === d ? (d = a[9], d = 0 > cg.a(d), a[1] = u(d) ? 8 : 9, $) : 14 === d ? (d = Si(zf), Ng(a, 17, c, d)) : 16 === d ? (d = a[2], a[2] = d, a[1] = 15, $) : 10 === d ? (d = a[2], a[2] = d, a[1] = 7, $) : 18 === d ? (e = a[11], f = a[2], d = e, a[10] = d, a[11] = f, 
            a[2] = null, a[1] = 3, $) : 8 === d ? (d = Si(hg), Ng(a, 11, c, d)) : null;
          };
        }(a, b, c), a, b, c);
      }(), h = function() {
        var b = g.i ? g.i() : g.call(null);
        b[6] = a;
        return b;
      }();
      return Lg(h);
    };
  }(c, a, b));
  return b;
}()], null)));
Ph.b(Yi, Ui);
Ei.width = 200;
Ei.height = 160;
(function(a) {
  var b = Gh.a(1);
  eh(function(b) {
    return function() {
      var d = function() {
        return function(a) {
          return function() {
            function b(c) {
              for (;;) {
                var d;
                a: {
                  try {
                    for (;;) {
                      var e = a(c);
                      if (!id(e, $)) {
                        d = e;
                        break a;
                      }
                    }
                  } catch (g) {
                    if (g instanceof Object) {
                      c[5] = g;
                      Pg(c);
                      d = $;
                      break a;
                    }
                    throw g;
                  }
                  d = void 0;
                }
                if (!id(d, $)) {
                  return d;
                }
              }
            }
            function c() {
              var a = [null, null, null, null, null, null, null, null, null, null, null, null, null, null];
              a[0] = d;
              a[1] = 1;
              return a;
            }
            var d = null, d = function(a) {
              switch(arguments.length) {
                case 0:
                  return c.call(this);
                case 1:
                  return b.call(this, a);
              }
              throw Error("Invalid arity: " + arguments.length);
            };
            d.i = c;
            d.a = b;
            return d;
          }();
        }(function() {
          return function(b) {
            var c = b[1];
            if (7 === c) {
              var c = Od.b ? Od.b(Di, null) : Od.call(null, Di, null), d;
              a: {
                d = Ai;
                var e;
                e = [y("bold"), y(" "), y(16), y("pt "), y("monospace")].join("");
                d.font = e;
                d.textAlign = "center";
                d.fillStyle = W.b(xi, new Y(null, 3, 5, Z, [0, 0, 0], null));
                e = ["GAME OVER", "Press Enter", "to restart"];
                for (var m = Zc(R(e), 2), m = G(Rd.c(pe, e, nf.b(-m, m + 1))), n = null, p = 0, q = 0;;) {
                  if (q < p) {
                    var s = n.M(null, q);
                    e = T.c(s, 0, null);
                    var s = T.c(s, 1, null), x = Zc(200, 2), s = Zc(160, 2) + 18 * s;
                    d.fillText(e, x, s);
                    q += 1;
                  } else {
                    if (e = G(m)) {
                      m = e, Jc(m) ? (n = Lb(m), m = Mb(m), e = n, p = R(n), n = e) : (n = I(m), e = T.c(n, 0, null), s = T.c(n, 1, null), n = Zc(200, 2), p = Zc(160, 2) + 18 * s, d.fillText(e, n, p), m = M(m), n = null, p = 0), q = 0;
                    } else {
                      d = null;
                      break a;
                    }
                  }
                }
                d = void 0;
              }
              b[7] = c;
              b[2] = d;
              b[1] = 5;
              return $;
            }
            if (1 === c) {
              return Mg(b, 2, a);
            }
            if (4 === c) {
              return c = b[2], Og(b, c);
            }
            if (6 === c) {
              return d = b[8], c = Ji(d), c = Od.b ? Od.b(Di, c) : Od.call(null, Di, c), b[2] = c, b[1] = 5, $;
            }
            if (3 === c) {
              d = b[9];
              c = b[10];
              c = T.c(d, 0, null);
              d = T.c(d, 1, null);
              b[10] = c;
              b[8] = d;
              switch(c instanceof X ? c.aa : null) {
                case "eat":
                  b[1] = 9;
                  break;
                case "move":
                  b[1] = 8;
                  break;
                case "game-over":
                  b[1] = 7;
                  break;
                case "world":
                  b[1] = 6;
                  break;
                default:
                  b[1] = 10;
              }
              return $;
            }
            return 2 === c ? (c = b[2], d = T.c(c, 0, null), e = T.c(c, 1, null), b[11] = d, b[12] = e, b[9] = c, b[2] = null, b[1] = 3, $) : 11 === c ? (d = b[2], b[9] = d, b[2] = null, b[1] = 3, $) : 9 === c ? (b[2] = null, b[1] = 5, $) : 5 === c ? (b[13] = b[2], Mg(b, 11, a)) : 10 === c ? (c = b[10], c = [y("Unrecognized UI command: "), y(c)].join(""), c = wf.e(N([Error(c)], 0)), b[2] = c, b[1] = 5, $) : 8 === c ? (b[2] = null, b[1] = 5, $) : null;
          };
        }(b), b);
      }(), e = function() {
        var a = d.i ? d.i() : d.call(null);
        a[6] = b;
        return a;
      }();
      return Lg(e);
    };
  }(b));
  return Ci(function d() {
    requestAnimationFrame(d);
    var a;
    a = O.a ? O.a(Di) : O.call(null, Di);
    var b = Oc(a) ? W.b(Ld, a) : a, g = U.b(b, gg);
    a = U.b(b, Ef);
    if (u(b)) {
      Ai.clearRect(0, 0, 200, 160);
      Ai.save();
      Ai.translate(.5, .5);
      b: {
        Ai.fillStyle = W.b(xi, Ii);
        for (var b = G(g), h = null, l = 0, m = 0;;) {
          if (m < l) {
            var n = h.M(null, m), g = T.c(n, 0, null), n = T.c(n, 1, null);
            zi(g, n);
            Bi(g, n);
            m += 1;
          } else {
            if (b = G(b)) {
              Jc(b) ? (h = Lb(b), b = Mb(b), g = h, l = R(h), h = g) : (h = I(b), g = T.c(h, 0, null), n = T.c(h, 1, null), zi(g, n), Bi(g, n), b = M(b), h = null, l = 0), m = 0;
            } else {
              break b;
            }
          }
        }
      }
      b: {
        for (Ai.fillStyle = W.b(xi, Hi), a = G(a), g = null, l = h = 0;;) {
          if (l < h) {
            m = g.M(null, l), b = T.c(m, 0, null), m = T.c(m, 1, null), Ai.fillRect(b, m, 10, 10), Ai.strokeRect(b, m, 10, 10), l += 1;
          } else {
            if (a = G(a)) {
              Jc(a) ? (g = Lb(a), a = Mb(a), b = g, h = R(g), g = b) : (g = I(a), b = T.c(g, 0, null), m = T.c(g, 1, null), Ai.fillRect(b, m, 10, 10), Ai.strokeRect(b, m, 10, 10), a = M(a), g = null, h = 0), l = 0;
            } else {
              break b;
            }
          }
        }
      }
      a = Ai.restore();
    } else {
      a = null;
    }
    return a;
  });
})(Vi);
Ih.b(Ui, new Y(null, 1, 5, Z, [Df], null));

})();
