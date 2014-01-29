;(function(){
var h, aa = this;
function m(a) {
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
  return a[da] || (a[da] = ++ea);
}
var da = "closure_uid_" + (1E9 * Math.random() >>> 0), ea = 0;
var fa = Array.prototype, ga = fa.indexOf ? function(a, b, c) {
  return fa.indexOf.call(a, b, c);
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
function ha(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function ia(a, b) {
  null != a && this.append.apply(this, arguments);
}
ia.prototype.Ja = "";
ia.prototype.append = function(a, b, c) {
  this.Ja += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Ja += arguments[d];
    }
  }
  return this;
};
ia.prototype.toString = function() {
  return this.Ja;
};
var ja;
function ka() {
  throw Error("No *print-fn* fn set for evaluation environment");
}
var la = !0, ma = null;
function na() {
  return new oa(null, 5, [pa, !0, qa, !0, ra, !1, ta, !1, ua, null], null);
}
function r(a) {
  return null != a && !1 !== a;
}
function va(a) {
  return null == a;
}
function wa(a) {
  return r(a) ? !1 : !0;
}
function s(a, b) {
  return a[m(null == b ? null : b)] ? !0 : a._ ? !0 : t ? !1 : null;
}
function xa(a) {
  return null == a ? null : a.constructor;
}
function u(a, b) {
  var c = xa(b), c = r(r(c) ? c.la : c) ? c.ka : m(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function ya(a) {
  var b = a.ka;
  return r(b) ? b : "" + v(a);
}
function w(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var Aa = function() {
  function a(a, b) {
    return za.c ? za.c(function(a, b) {
      a.push(b);
      return a;
    }, [], b) : za.call(null, function(a, b) {
      a.push(b);
      return a;
    }, [], b);
  }
  function b(a) {
    return c.a(null, a);
  }
  var c = null, c = function(d, c) {
    switch(arguments.length) {
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, 0, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), Ba = {}, Ca = {};
function Da(a) {
  if (a ? a.G : a) {
    return a.G(a);
  }
  var b;
  b = Da[m(null == a ? null : a)];
  if (!b && (b = Da._, !b)) {
    throw u("ICounted.-count", a);
  }
  return b.call(null, a);
}
function Ea(a) {
  if (a ? a.J : a) {
    return a.J(a);
  }
  var b;
  b = Ea[m(null == a ? null : a)];
  if (!b && (b = Ea._, !b)) {
    throw u("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
function Fa(a, b) {
  if (a ? a.F : a) {
    return a.F(a, b);
  }
  var c;
  c = Fa[m(null == a ? null : a)];
  if (!c && (c = Fa._, !c)) {
    throw u("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var Ha = {}, y = function() {
  function a(a, b, c) {
    if (a ? a.Z : a) {
      return a.Z(a, b, c);
    }
    var f;
    f = y[m(null == a ? null : a)];
    if (!f && (f = y._, !f)) {
      throw u("IIndexed.-nth", a);
    }
    return f.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.O : a) {
      return a.O(a, b);
    }
    var c;
    c = y[m(null == a ? null : a)];
    if (!c && (c = y._, !c)) {
      throw u("IIndexed.-nth", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(d, c, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, c);
      case 3:
        return a.call(this, d, c, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Ia = {};
function z(a) {
  if (a ? a.R : a) {
    return a.R(a);
  }
  var b;
  b = z[m(null == a ? null : a)];
  if (!b && (b = z._, !b)) {
    throw u("ISeq.-first", a);
  }
  return b.call(null, a);
}
function A(a) {
  if (a ? a.V : a) {
    return a.V(a);
  }
  var b;
  b = A[m(null == a ? null : a)];
  if (!b && (b = A._, !b)) {
    throw u("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var Ja = {}, Ka = {}, La = function() {
  function a(a, b, c) {
    if (a ? a.L : a) {
      return a.L(a, b, c);
    }
    var f;
    f = La[m(null == a ? null : a)];
    if (!f && (f = La._, !f)) {
      throw u("ILookup.-lookup", a);
    }
    return f.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.K : a) {
      return a.K(a, b);
    }
    var c;
    c = La[m(null == a ? null : a)];
    if (!c && (c = La._, !c)) {
      throw u("ILookup.-lookup", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function Ma(a, b) {
  if (a ? a.ib : a) {
    return a.ib(a, b);
  }
  var c;
  c = Ma[m(null == a ? null : a)];
  if (!c && (c = Ma._, !c)) {
    throw u("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function Na(a, b, c) {
  if (a ? a.Ka : a) {
    return a.Ka(a, b, c);
  }
  var d;
  d = Na[m(null == a ? null : a)];
  if (!d && (d = Na._, !d)) {
    throw u("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Oa = {};
function Pa(a, b) {
  if (a ? a.Ab : a) {
    return a.Ab(a, b);
  }
  var c;
  c = Pa[m(null == a ? null : a)];
  if (!c && (c = Pa._, !c)) {
    throw u("IMap.-dissoc", a);
  }
  return c.call(null, a, b);
}
var Qa = {};
function Sa(a) {
  if (a ? a.Bb : a) {
    return a.Bb();
  }
  var b;
  b = Sa[m(null == a ? null : a)];
  if (!b && (b = Sa._, !b)) {
    throw u("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Ta(a) {
  if (a ? a.Mb : a) {
    return a.Mb();
  }
  var b;
  b = Ta[m(null == a ? null : a)];
  if (!b && (b = Ta._, !b)) {
    throw u("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Ua = {}, Va = {};
function Wa(a, b, c) {
  if (a ? a.Db : a) {
    return a.Db(a, b, c);
  }
  var d;
  d = Wa[m(null == a ? null : a)];
  if (!d && (d = Wa._, !d)) {
    throw u("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function Xa(a) {
  if (a ? a.mb : a) {
    return a.mb(a);
  }
  var b;
  b = Xa[m(null == a ? null : a)];
  if (!b && (b = Xa._, !b)) {
    throw u("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var Ya = {};
function Za(a) {
  if (a ? a.r : a) {
    return a.r(a);
  }
  var b;
  b = Za[m(null == a ? null : a)];
  if (!b && (b = Za._, !b)) {
    throw u("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var $a = {};
function ab(a, b) {
  if (a ? a.s : a) {
    return a.s(a, b);
  }
  var c;
  c = ab[m(null == a ? null : a)];
  if (!c && (c = ab._, !c)) {
    throw u("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var bb = {}, cb = function() {
  function a(a, b, c) {
    if (a ? a.Q : a) {
      return a.Q(a, b, c);
    }
    var f;
    f = cb[m(null == a ? null : a)];
    if (!f && (f = cb._, !f)) {
      throw u("IReduce.-reduce", a);
    }
    return f.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.P : a) {
      return a.P(a, b);
    }
    var c;
    c = cb[m(null == a ? null : a)];
    if (!c && (c = cb._, !c)) {
      throw u("IReduce.-reduce", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function db(a, b) {
  if (a ? a.w : a) {
    return a.w(a, b);
  }
  var c;
  c = db[m(null == a ? null : a)];
  if (!c && (c = db._, !c)) {
    throw u("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function eb(a) {
  if (a ? a.C : a) {
    return a.C(a);
  }
  var b;
  b = eb[m(null == a ? null : a)];
  if (!b && (b = eb._, !b)) {
    throw u("IHash.-hash", a);
  }
  return b.call(null, a);
}
var fb = {};
function gb(a) {
  if (a ? a.D : a) {
    return a.D(a);
  }
  var b;
  b = gb[m(null == a ? null : a)];
  if (!b && (b = gb._, !b)) {
    throw u("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var hb = {}, ib = {};
function jb(a) {
  if (a ? a.Cb : a) {
    return a.Cb(a);
  }
  var b;
  b = jb[m(null == a ? null : a)];
  if (!b && (b = jb._, !b)) {
    throw u("IReversible.-rseq", a);
  }
  return b.call(null, a);
}
function B(a, b) {
  if (a ? a.Qb : a) {
    return a.Qb(0, b);
  }
  var c;
  c = B[m(null == a ? null : a)];
  if (!c && (c = B._, !c)) {
    throw u("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var kb = {};
function lb(a, b, c) {
  if (a ? a.u : a) {
    return a.u(a, b, c);
  }
  var d;
  d = lb[m(null == a ? null : a)];
  if (!d && (d = lb._, !d)) {
    throw u("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function mb(a, b, c) {
  if (a ? a.Pb : a) {
    return a.Pb(0, b, c);
  }
  var d;
  d = mb[m(null == a ? null : a)];
  if (!d && (d = mb._, !d)) {
    throw u("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function ob(a) {
  if (a ? a.Ca : a) {
    return a.Ca(a);
  }
  var b;
  b = ob[m(null == a ? null : a)];
  if (!b && (b = ob._, !b)) {
    throw u("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function pb(a, b) {
  if (a ? a.Na : a) {
    return a.Na(a, b);
  }
  var c;
  c = pb[m(null == a ? null : a)];
  if (!c && (c = pb._, !c)) {
    throw u("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function qb(a) {
  if (a ? a.Oa : a) {
    return a.Oa(a);
  }
  var b;
  b = qb[m(null == a ? null : a)];
  if (!b && (b = qb._, !b)) {
    throw u("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function rb(a, b, c) {
  if (a ? a.Ma : a) {
    return a.Ma(a, b, c);
  }
  var d;
  d = rb[m(null == a ? null : a)];
  if (!d && (d = rb._, !d)) {
    throw u("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function sb(a, b, c) {
  if (a ? a.Ob : a) {
    return a.Ob(0, b, c);
  }
  var d;
  d = sb[m(null == a ? null : a)];
  if (!d && (d = sb._, !d)) {
    throw u("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function tb(a) {
  if (a ? a.Jb : a) {
    return a.Jb();
  }
  var b;
  b = tb[m(null == a ? null : a)];
  if (!b && (b = tb._, !b)) {
    throw u("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function ub(a) {
  if (a ? a.kb : a) {
    return a.kb(a);
  }
  var b;
  b = ub[m(null == a ? null : a)];
  if (!b && (b = ub._, !b)) {
    throw u("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function vb(a) {
  if (a ? a.lb : a) {
    return a.lb(a);
  }
  var b;
  b = vb[m(null == a ? null : a)];
  if (!b && (b = vb._, !b)) {
    throw u("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function wb(a) {
  if (a ? a.jb : a) {
    return a.jb(a);
  }
  var b;
  b = wb[m(null == a ? null : a)];
  if (!b && (b = wb._, !b)) {
    throw u("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function xb(a) {
  this.pc = a;
  this.o = 0;
  this.f = 1073741824;
}
xb.prototype.Qb = function(a, b) {
  return this.pc.append(b);
};
function zb(a) {
  var b = new ia;
  a.u(null, new xb(b), na());
  return "" + v(b);
}
function Ab(a, b) {
  if (r(C.a ? C.a(a, b) : C.call(null, a, b))) {
    return 0;
  }
  var c = wa(a.T);
  if (r(c ? b.T : c)) {
    return-1;
  }
  if (r(a.T)) {
    if (wa(b.T)) {
      return 1;
    }
    c = Bb.a ? Bb.a(a.T, b.T) : Bb.call(null, a.T, b.T);
    return 0 === c ? Bb.a ? Bb.a(a.name, b.name) : Bb.call(null, a.name, b.name) : c;
  }
  return Cb ? Bb.a ? Bb.a(a.name, b.name) : Bb.call(null, a.name, b.name) : null;
}
function D(a, b, c, d, e) {
  this.T = a;
  this.name = b;
  this.va = c;
  this.wa = d;
  this.ca = e;
  this.f = 2154168321;
  this.o = 4096;
}
h = D.prototype;
h.u = function(a, b) {
  return B(b, this.va);
};
h.C = function() {
  var a = this.wa;
  return null != a ? a : this.wa = a = Db.a ? Db.a(E.b ? E.b(this.T) : E.call(null, this.T), E.b ? E.b(this.name) : E.call(null, this.name)) : Db.call(null, E.b ? E.b(this.T) : E.call(null, this.T), E.b ? E.b(this.name) : E.call(null, this.name));
};
h.s = function(a, b) {
  return new D(this.T, this.name, this.va, this.wa, b);
};
h.r = function() {
  return this.ca;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return La.c(c, this, null);
      case 3:
        return La.c(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
h.b = function(a) {
  return La.c(a, this, null);
};
h.a = function(a, b) {
  return La.c(a, this, b);
};
h.w = function(a, b) {
  return b instanceof D ? this.va === b.va : !1;
};
h.toString = function() {
  return this.va;
};
function F(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.f & 8388608 || a.yc)) {
    return a.D(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Eb(a, 0);
  }
  if (s(fb, a)) {
    return gb(a);
  }
  if (t) {
    throw Error([v(a), v("is not ISeqable")].join(""));
  }
  return null;
}
function G(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.f & 64 || a.La)) {
    return a.R(null);
  }
  a = F(a);
  return null == a ? null : z(a);
}
function H(a) {
  return null != a ? a && (a.f & 64 || a.La) ? a.V(null) : (a = F(a)) ? A(a) : J : J;
}
function L(a) {
  return null == a ? null : a && (a.f & 128 || a.Nb) ? a.X(null) : F(H(a));
}
var C = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || db(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.a(a, d)) {
          if (L(e)) {
            a = d, d = G(e), e = L(e);
          } else {
            return b.a(d, G(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.k = 2;
    a.g = function(a) {
      var b = G(a);
      a = L(a);
      var d = G(a);
      a = H(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, g) {
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
  b.k = 2;
  b.g = c.g;
  b.b = function() {
    return!0;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
Ca["null"] = !0;
Da["null"] = function() {
  return 0;
};
Date.prototype.w = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
db.number = function(a, b) {
  return a === b;
};
Ya["function"] = !0;
Za["function"] = function() {
  return null;
};
Ba["function"] = !0;
eb._ = function(a) {
  return ca(a);
};
var Gb = function() {
  function a(a, b, c, d) {
    for (var l = Da(a);;) {
      if (d < l) {
        c = b.a ? b.a(c, y.a(a, d)) : b.call(null, c, y.a(a, d)), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = Da(a), l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, y.a(a, l)) : b.call(null, c, y.a(a, l)), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = Da(a);
    if (0 === c) {
      return b.i ? b.i() : b.call(null);
    }
    for (var d = y.a(a, 0), l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, y.a(a, l)) : b.call(null, d, y.a(a, l)), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, g, f, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, f);
      case 4:
        return a.call(this, d, g, f, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.n = a;
  return d;
}(), Hb = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        c = b.a ? b.a(c, a[d]) : b.call(null, c, a[d]), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = a.length, l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, a[l]) : b.call(null, c, a[l]), l += 1;
      } else {
        return c;
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
        d = b.a ? b.a(d, a[l]) : b.call(null, d, a[l]), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, g, f, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, f);
      case 4:
        return a.call(this, d, g, f, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.n = a;
  return d;
}();
function Ib(a) {
  return a ? a.f & 2 || a.ac ? !0 : a.f ? !1 : s(Ca, a) : s(Ca, a);
}
function Jb(a) {
  return a ? a.f & 16 || a.Kb ? !0 : a.f ? !1 : s(Ha, a) : s(Ha, a);
}
function Eb(a, b) {
  this.d = a;
  this.l = b;
  this.o = 0;
  this.f = 166199550;
}
h = Eb.prototype;
h.C = function() {
  return Kb.b ? Kb.b(this) : Kb.call(null, this);
};
h.X = function() {
  return this.l + 1 < this.d.length ? new Eb(this.d, this.l + 1) : null;
};
h.F = function(a, b) {
  return O.a ? O.a(b, this) : O.call(null, b, this);
};
h.Cb = function() {
  var a = Da(this);
  return 0 < a ? new Lb(this, a - 1, null) : null;
};
h.toString = function() {
  return zb(this);
};
h.P = function(a, b) {
  return Hb.n(this.d, b, this.d[this.l], this.l + 1);
};
h.Q = function(a, b, c) {
  return Hb.n(this.d, b, c, this.l);
};
h.D = function() {
  return this;
};
h.G = function() {
  return this.d.length - this.l;
};
h.R = function() {
  return this.d[this.l];
};
h.V = function() {
  return this.l + 1 < this.d.length ? new Eb(this.d, this.l + 1) : J;
};
h.w = function(a, b) {
  return Mb.a ? Mb.a(this, b) : Mb.call(null, this, b);
};
h.O = function(a, b) {
  var c = b + this.l;
  return c < this.d.length ? this.d[c] : null;
};
h.Z = function(a, b, c) {
  a = b + this.l;
  return a < this.d.length ? this.d[a] : c;
};
h.J = function() {
  return J;
};
var Nb = function() {
  function a(a, b) {
    return b < a.length ? new Eb(a, b) : null;
  }
  function b(a) {
    return c.a(a, 0);
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
  c.b = b;
  c.a = a;
  return c;
}(), N = function() {
  function a(a, b) {
    return Nb.a(a, b);
  }
  function b(a) {
    return Nb.a(a, 0);
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
  c.b = b;
  c.a = a;
  return c;
}();
function Lb(a, b, c) {
  this.hb = a;
  this.l = b;
  this.j = c;
  this.o = 0;
  this.f = 32374862;
}
h = Lb.prototype;
h.C = function() {
  return Kb.b ? Kb.b(this) : Kb.call(null, this);
};
h.F = function(a, b) {
  return O.a ? O.a(b, this) : O.call(null, b, this);
};
h.toString = function() {
  return zb(this);
};
h.P = function(a, b) {
  return P.a ? P.a(b, this) : P.call(null, b, this);
};
h.Q = function(a, b, c) {
  return P.c ? P.c(b, c, this) : P.call(null, b, c, this);
};
h.D = function() {
  return this;
};
h.G = function() {
  return this.l + 1;
};
h.R = function() {
  return y.a(this.hb, this.l);
};
h.V = function() {
  return 0 < this.l ? new Lb(this.hb, this.l - 1, null) : null;
};
h.w = function(a, b) {
  return Mb.a ? Mb.a(this, b) : Mb.call(null, this, b);
};
h.s = function(a, b) {
  return new Lb(this.hb, this.l, b);
};
h.r = function() {
  return this.j;
};
h.J = function() {
  return Ob.a ? Ob.a(J, this.j) : Ob.call(null, J, this.j);
};
function Pb(a) {
  for (;;) {
    var b = L(a);
    if (null != b) {
      a = b;
    } else {
      return G(a);
    }
  }
}
db._ = function(a, b) {
  return a === b;
};
var Qb = function() {
  function a(a, b) {
    return null != a ? Fa(a, b) : Fa(J, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (r(e)) {
          a = b.a(a, d), d = G(e), e = L(e);
        } else {
          return b.a(a, d);
        }
      }
    }
    a.k = 2;
    a.g = function(a) {
      var b = G(a);
      a = L(a);
      var d = G(a);
      a = H(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.g = c.g;
  b.a = a;
  b.e = c.e;
  return b;
}();
function Q(a) {
  if (null != a) {
    if (a && (a.f & 2 || a.ac)) {
      a = a.G(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (s(Ca, a)) {
            a = Da(a);
          } else {
            if (t) {
              a: {
                a = F(a);
                for (var b = 0;;) {
                  if (Ib(a)) {
                    a = b + Da(a);
                    break a;
                  }
                  a = L(a);
                  b += 1;
                }
                a = void 0;
              }
            } else {
              a = null;
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
var Rb = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return F(a) ? G(a) : c;
      }
      if (Jb(a)) {
        return y.c(a, b, c);
      }
      if (F(a)) {
        a = L(a), b -= 1;
      } else {
        return t ? c : null;
      }
    }
  }
  function b(a, b) {
    for (;;) {
      if (null == a) {
        throw Error("Index out of bounds");
      }
      if (0 === b) {
        if (F(a)) {
          return G(a);
        }
        throw Error("Index out of bounds");
      }
      if (Jb(a)) {
        return y.a(a, b);
      }
      if (F(a)) {
        var c = L(a), f = b - 1;
        a = c;
        b = f;
      } else {
        if (t) {
          throw Error("Index out of bounds");
        }
        return null;
      }
    }
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), R = function() {
  function a(a, b, c) {
    if (null != a) {
      if (a && (a.f & 16 || a.Kb)) {
        return a.Z(null, b, c);
      }
      if (a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c;
      }
      if (s(Ha, a)) {
        return y.a(a, b);
      }
      if (t) {
        if (a ? a.f & 64 || a.La || (a.f ? 0 : s(Ia, a)) : s(Ia, a)) {
          return Rb.c(a, b, c);
        }
        throw Error([v("nth not supported on this type "), v(ya(xa(a)))].join(""));
      }
      return null;
    }
    return c;
  }
  function b(a, b) {
    if (null == a) {
      return null;
    }
    if (a && (a.f & 16 || a.Kb)) {
      return a.O(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (s(Ha, a)) {
      return y.a(a, b);
    }
    if (t) {
      if (a ? a.f & 64 || a.La || (a.f ? 0 : s(Ia, a)) : s(Ia, a)) {
        return Rb.a(a, b);
      }
      throw Error([v("nth not supported on this type "), v(ya(xa(a)))].join(""));
    }
    return null;
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), S = function() {
  function a(a, b, c) {
    return null != a ? a && (a.f & 256 || a.Lb) ? a.L(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : s(Ka, a) ? La.c(a, b, c) : t ? c : null : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.f & 256 || a.Lb) ? a.K(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : s(Ka, a) ? La.a(a, b) : null;
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Ub = function() {
  function a(a, b, c) {
    return null != a ? Na(a, b, c) : Sb.a ? Sb.a([b], [c]) : Sb.call(null, [b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var p = null;
      3 < arguments.length && (p = N(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, p);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.c(a, d, e), r(l)) {
          d = G(l), e = G(L(l)), l = L(L(l));
        } else {
          return a;
        }
      }
    }
    a.k = 3;
    a.g = function(a) {
      var b = G(a);
      a = L(a);
      var d = G(a);
      a = L(a);
      var l = G(a);
      a = H(a);
      return c(b, d, l, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, g, f) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, g);
      default:
        return c.e(b, e, g, N(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 3;
  b.g = c.g;
  b.c = a;
  b.e = c.e;
  return b;
}(), Vb = function() {
  function a(a, b) {
    return null == a ? null : Pa(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.a(a, d);
        if (r(e)) {
          d = G(e), e = L(e);
        } else {
          return a;
        }
      }
    }
    a.k = 2;
    a.g = function(a) {
      var b = G(a);
      a = L(a);
      var d = G(a);
      a = H(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, g) {
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
  b.k = 2;
  b.g = c.g;
  b.b = function(a) {
    return a;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
function Wb(a) {
  var b = "function" == m(a);
  return b ? b : a ? r(r(null) ? null : a.$b) ? !0 : a.Dc ? !1 : s(Ba, a) : s(Ba, a);
}
var Ob = function Xb(b, c) {
  return Wb(b) && !(b ? b.f & 262144 || b.Cc || (b.f ? 0 : s($a, b)) : s($a, b)) ? Xb(function() {
    "undefined" === typeof ja && (ja = function(b, c, g, f) {
      this.j = b;
      this.Ua = c;
      this.sc = g;
      this.nc = f;
      this.o = 0;
      this.f = 393217;
    }, ja.la = !0, ja.ka = "cljs.core/t9627", ja.ra = function(b, c) {
      return B(c, "cljs.core/t9627");
    }, ja.prototype.call = function() {
      function b(d, f) {
        d = this;
        var k = null;
        1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k);
      }
      function c(b, d) {
        return T.a ? T.a(b.Ua, d) : T.call(null, b.Ua, d);
      }
      b.k = 1;
      b.g = function(b) {
        var d = G(b);
        b = H(b);
        return c(d, b);
      };
      b.e = c;
      return b;
    }(), ja.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(w(c)));
    }, ja.prototype.a = function() {
      function b(d) {
        var f = null;
        0 < arguments.length && (f = N(Array.prototype.slice.call(arguments, 0), 0));
        return c.call(this, f);
      }
      function c(b) {
        return T.a ? T.a(self__.Ua, b) : T.call(null, self__.Ua, b);
      }
      b.k = 0;
      b.g = function(b) {
        b = F(b);
        return c(b);
      };
      b.e = c;
      return b;
    }(), ja.prototype.$b = !0, ja.prototype.r = function() {
      return this.nc;
    }, ja.prototype.s = function(b, c) {
      return new ja(this.j, this.Ua, this.sc, c);
    });
    return new ja(c, b, Xb, null);
  }(), c) : null == b ? null : ab(b, c);
};
function Yb(a) {
  var b = null != a;
  return(b ? a ? a.f & 131072 || a.cc || (a.f ? 0 : s(Ya, a)) : s(Ya, a) : b) ? Za(a) : null;
}
var Zb = {}, $b = 0;
function E(a) {
  if (a && (a.f & 4194304 || a.vc)) {
    a = a.C(null);
  } else {
    if ("number" === typeof a) {
      a = Math.floor(a) % 2147483647;
    } else {
      if (!0 === a) {
        a = 1;
      } else {
        if (!1 === a) {
          a = 0;
        } else {
          if ("string" === typeof a) {
            255 < $b && (Zb = {}, $b = 0);
            var b = Zb[a];
            if ("number" !== typeof b) {
              for (var c = b = 0;c < a.length;++c) {
                b = 31 * b + a.charCodeAt(c), b %= 4294967296;
              }
              Zb[a] = b;
              $b += 1;
            }
            a = b;
          } else {
            a = null == a ? 0 : t ? eb(a) : null;
          }
        }
      }
    }
  }
  return a;
}
function ac(a) {
  return a ? a.f & 16384 || a.Bc ? !0 : a.f ? !1 : s(Va, a) : s(Va, a);
}
function bc(a) {
  return a ? a.o & 512 || a.tc ? !0 : !1 : !1;
}
function cc(a) {
  var b = [];
  ha(a, function(a, d) {
    return b.push(d);
  });
  return b;
}
function dc(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
var ec = {};
function fc(a) {
  return null == a ? !1 : a ? a.f & 64 || a.La ? !0 : a.f ? !1 : s(Ia, a) : s(Ia, a);
}
function gc(a) {
  return r(a) ? !0 : !1;
}
function Bb(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (xa(a) === xa(b)) {
    return a && (a.o & 2048 || a.Xa) ? a.Ya(null, b) : a > b ? 1 : a < b ? -1 : 0;
  }
  if (t) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var hc = function() {
  function a(a, b, c, f) {
    for (;;) {
      var k = Bb(R.a(a, f), R.a(b, f));
      if (0 === k && f + 1 < c) {
        f += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var g = Q(a), f = Q(b);
    return g < f ? -1 : g > f ? 1 : t ? c.n(a, b, g, 0) : null;
  }
  var c = null, c = function(c, e, g, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, g, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.n = a;
  return c;
}(), P = function() {
  function a(a, b, c) {
    for (c = F(c);;) {
      if (c) {
        b = a.a ? a.a(b, G(c)) : a.call(null, b, G(c)), c = L(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = F(b);
    return c ? za.c ? za.c(a, G(c), L(c)) : za.call(null, a, G(c), L(c)) : a.i ? a.i() : a.call(null);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), za = function() {
  function a(a, b, c) {
    return c && (c.f & 524288 || c.ec) ? c.Q(null, a, b) : c instanceof Array ? Hb.c(c, a, b) : "string" === typeof c ? Hb.c(c, a, b) : s(bb, c) ? cb.c(c, a, b) : t ? P.c(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.f & 524288 || b.ec) ? b.P(null, a) : b instanceof Array ? Hb.a(b, a) : "string" === typeof b ? Hb.a(b, a) : s(bb, b) ? cb.a(b, a) : t ? P.a(a, b) : null;
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), ic = function() {
  var a = null, b = function() {
    function b(a, c, f) {
      var k = null;
      2 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, k);
    }
    function d(b, c, d) {
      return za.c(a, b + c, d);
    }
    b.k = 2;
    b.g = function(a) {
      var b = G(a);
      a = L(a);
      var c = G(a);
      a = H(a);
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
  a.k = 2;
  a.g = b.g;
  a.i = function() {
    return 0;
  };
  a.b = function(a) {
    return a;
  };
  a.a = function(a, b) {
    return a + b;
  };
  a.e = b.e;
  return a;
}(), jc = function() {
  var a = null, b = function() {
    function b(a, c, f) {
      var k = null;
      2 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, k);
    }
    function d(b, c, d) {
      return za.c(a, b * c, d);
    }
    b.k = 2;
    b.g = function(a) {
      var b = G(a);
      a = L(a);
      var c = G(a);
      a = H(a);
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
  a.k = 2;
  a.g = b.g;
  a.i = function() {
    return 1;
  };
  a.b = function(a) {
    return a;
  };
  a.a = function(a, b) {
    return a * b;
  };
  a.e = b.e;
  return a;
}();
function kc(a) {
  return 0 <= a ? Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a) : Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(null, a);
}
function lc(a, b) {
  return(a % b + b) % b;
}
function mc(a, b) {
  return kc((a - a % b) / b);
}
var nc = function() {
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
  c.b = a;
  return c;
}();
function oc(a) {
  return kc(nc.b(a));
}
function pc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
var v = function() {
  function a(a) {
    return null == a ? "" : a.toString();
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k);
    }
    function c(a, d) {
      for (var e = new ia(b.b(a)), l = d;;) {
        if (r(l)) {
          e = e.append(b.b(G(l))), l = L(l);
        } else {
          return e.toString();
        }
      }
    }
    a.k = 1;
    a.g = function(a) {
      var b = G(a);
      a = H(a);
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
  b.k = 1;
  b.g = c.g;
  b.i = function() {
    return "";
  };
  b.b = a;
  b.e = c.e;
  return b;
}();
function Mb(a, b) {
  return gc((b ? b.f & 16777216 || b.zc || (b.f ? 0 : s(hb, b)) : s(hb, b)) ? function() {
    for (var c = F(a), d = F(b);;) {
      if (null == c) {
        return null == d;
      }
      if (null == d) {
        return!1;
      }
      if (C.a(G(c), G(d))) {
        c = L(c), d = L(d);
      } else {
        return t ? !1 : null;
      }
    }
  }() : null);
}
function Db(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Kb(a) {
  if (F(a)) {
    var b = E(G(a));
    for (a = L(a);;) {
      if (null == a) {
        return b;
      }
      b = Db(b, E(G(a)));
      a = L(a);
    }
  } else {
    return 0;
  }
}
function rc(a) {
  var b = 0;
  for (a = F(a);;) {
    if (a) {
      var c = G(a), b = (b + (E(sc.b ? sc.b(c) : sc.call(null, c)) ^ E(tc.b ? tc.b(c) : tc.call(null, c)))) % 4503599627370496;
      a = L(a);
    } else {
      return b;
    }
  }
}
function uc(a, b, c, d, e) {
  this.j = a;
  this.Qa = b;
  this.pa = c;
  this.count = d;
  this.m = e;
  this.o = 0;
  this.f = 65937646;
}
h = uc.prototype;
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Kb(this);
};
h.X = function() {
  return 1 === this.count ? null : this.pa;
};
h.F = function(a, b) {
  return new uc(this.j, b, this, this.count + 1, null);
};
h.toString = function() {
  return zb(this);
};
h.P = function(a, b) {
  return P.a(b, this);
};
h.Q = function(a, b, c) {
  return P.c(b, c, this);
};
h.D = function() {
  return this;
};
h.G = function() {
  return this.count;
};
h.R = function() {
  return this.Qa;
};
h.V = function() {
  return 1 === this.count ? J : this.pa;
};
h.w = function(a, b) {
  return Mb(this, b);
};
h.s = function(a, b) {
  return new uc(b, this.Qa, this.pa, this.count, this.m);
};
h.r = function() {
  return this.j;
};
h.J = function() {
  return J;
};
function vc(a) {
  this.j = a;
  this.o = 0;
  this.f = 65937614;
}
h = vc.prototype;
h.C = function() {
  return 0;
};
h.X = function() {
  return null;
};
h.F = function(a, b) {
  return new uc(this.j, b, null, 1, null);
};
h.toString = function() {
  return zb(this);
};
h.P = function(a, b) {
  return P.a(b, this);
};
h.Q = function(a, b, c) {
  return P.c(b, c, this);
};
h.D = function() {
  return null;
};
h.G = function() {
  return 0;
};
h.R = function() {
  return null;
};
h.V = function() {
  return J;
};
h.w = function(a, b) {
  return Mb(this, b);
};
h.s = function(a, b) {
  return new vc(b);
};
h.r = function() {
  return this.j;
};
h.J = function() {
  return this;
};
var J = new vc(null);
function wc(a) {
  return(a ? a.f & 134217728 || a.xc || (a.f ? 0 : s(ib, a)) : s(ib, a)) ? jb(a) : za.c(Qb, J, a);
}
var xc = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof Eb && 0 === a.l) {
      b = a.d;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.R(null)), a = a.X(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = J;;) {
      if (0 < a) {
        var g = a - 1, e = e.F(null, b[a - 1]);
        a = g;
      } else {
        return e;
      }
    }
  }
  a.k = 0;
  a.g = function(a) {
    a = F(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function yc(a, b, c, d) {
  this.j = a;
  this.Qa = b;
  this.pa = c;
  this.m = d;
  this.o = 0;
  this.f = 65929452;
}
h = yc.prototype;
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Kb(this);
};
h.X = function() {
  return null == this.pa ? null : F(this.pa);
};
h.F = function(a, b) {
  return new yc(null, b, this, this.m);
};
h.toString = function() {
  return zb(this);
};
h.P = function(a, b) {
  return P.a(b, this);
};
h.Q = function(a, b, c) {
  return P.c(b, c, this);
};
h.D = function() {
  return this;
};
h.R = function() {
  return this.Qa;
};
h.V = function() {
  return null == this.pa ? J : this.pa;
};
h.w = function(a, b) {
  return Mb(this, b);
};
h.s = function(a, b) {
  return new yc(b, this.Qa, this.pa, this.m);
};
h.r = function() {
  return this.j;
};
h.J = function() {
  return Ob(J, this.j);
};
function O(a, b) {
  var c = null == b;
  return(c ? c : b && (b.f & 64 || b.La)) ? new yc(null, a, b, null) : new yc(null, a, F(b), null);
}
function W(a, b, c, d) {
  this.T = a;
  this.name = b;
  this.sa = c;
  this.wa = d;
  this.f = 2153775105;
  this.o = 4096;
}
h = W.prototype;
h.u = function(a, b) {
  return B(b, [v(":"), v(this.sa)].join(""));
};
h.C = function() {
  null == this.wa && (this.wa = Db(E(this.T), E(this.name)) + 2654435769);
  return this.wa;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return S.a(c, this);
      case 3:
        return S.c(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
h.b = function(a) {
  return S.a(a, this);
};
h.a = function(a, b) {
  return S.c(a, this, b);
};
h.w = function(a, b) {
  return b instanceof W ? this.sa === b.sa : !1;
};
h.toString = function() {
  return[v(":"), v(this.sa)].join("");
};
function zc(a, b) {
  return a === b ? !0 : a instanceof W && b instanceof W ? a.sa === b.sa : !1;
}
var Bc = function() {
  function a(a, b) {
    return new W(a, b, [v(r(a) ? [v(a), v("/")].join("") : null), v(b)].join(""), null);
  }
  function b(a) {
    if (a instanceof W) {
      return a;
    }
    if (a instanceof D) {
      var b;
      if (a && (a.o & 4096 || a.dc)) {
        b = a.T;
      } else {
        throw Error([v("Doesn't support namespace: "), v(a)].join(""));
      }
      return new W(b, Ac.b ? Ac.b(a) : Ac.call(null, a), a.va, null);
    }
    return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new W(b[0], b[1], a, null) : new W(null, b[0], a, null)) : null;
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
  c.b = b;
  c.a = a;
  return c;
}();
function Dc(a, b, c, d) {
  this.j = a;
  this.Ha = b;
  this.v = c;
  this.m = d;
  this.o = 0;
  this.f = 32374988;
}
h = Dc.prototype;
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Kb(this);
};
h.X = function() {
  gb(this);
  return null == this.v ? null : L(this.v);
};
h.F = function(a, b) {
  return O(b, this);
};
h.toString = function() {
  return zb(this);
};
function Ec(a) {
  null != a.Ha && (a.v = a.Ha.i ? a.Ha.i() : a.Ha.call(null), a.Ha = null);
  return a.v;
}
h.P = function(a, b) {
  return P.a(b, this);
};
h.Q = function(a, b, c) {
  return P.c(b, c, this);
};
h.D = function() {
  Ec(this);
  if (null == this.v) {
    return null;
  }
  for (var a = this.v;;) {
    if (a instanceof Dc) {
      a = Ec(a);
    } else {
      return this.v = a, F(this.v);
    }
  }
};
h.R = function() {
  gb(this);
  return null == this.v ? null : G(this.v);
};
h.V = function() {
  gb(this);
  return null != this.v ? H(this.v) : J;
};
h.w = function(a, b) {
  return Mb(this, b);
};
h.s = function(a, b) {
  return new Dc(b, this.Ha, this.v, this.m);
};
h.r = function() {
  return this.j;
};
h.J = function() {
  return Ob(J, this.j);
};
function Fc(a, b) {
  this.U = a;
  this.end = b;
  this.o = 0;
  this.f = 2;
}
Fc.prototype.G = function() {
  return this.end;
};
Fc.prototype.add = function(a) {
  this.U[this.end] = a;
  return this.end += 1;
};
Fc.prototype.ga = function() {
  var a = new Gc(this.U, 0, this.end);
  this.U = null;
  return a;
};
function Gc(a, b, c) {
  this.d = a;
  this.A = b;
  this.end = c;
  this.o = 0;
  this.f = 524306;
}
h = Gc.prototype;
h.P = function(a, b) {
  return Hb.n(this.d, b, this.d[this.A], this.A + 1);
};
h.Q = function(a, b, c) {
  return Hb.n(this.d, b, c, this.A);
};
h.Jb = function() {
  if (this.A === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Gc(this.d, this.A + 1, this.end);
};
h.O = function(a, b) {
  return this.d[this.A + b];
};
h.Z = function(a, b, c) {
  return 0 <= b && b < this.end - this.A ? this.d[this.A + b] : c;
};
h.G = function() {
  return this.end - this.A;
};
var Hc = function() {
  function a(a, b, c) {
    return new Gc(a, b, c);
  }
  function b(a, b) {
    return new Gc(a, b, a.length);
  }
  function c(a) {
    return new Gc(a, 0, a.length);
  }
  var d = null, d = function(d, g, f) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, g);
      case 3:
        return a.call(this, d, g, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.a = b;
  d.c = a;
  return d;
}();
function Ic(a, b, c, d) {
  this.ga = a;
  this.ha = b;
  this.j = c;
  this.m = d;
  this.f = 31850732;
  this.o = 1536;
}
h = Ic.prototype;
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Kb(this);
};
h.X = function() {
  if (1 < Da(this.ga)) {
    return new Ic(tb(this.ga), this.ha, this.j, null);
  }
  var a = gb(this.ha);
  return null == a ? null : a;
};
h.F = function(a, b) {
  return O(b, this);
};
h.toString = function() {
  return zb(this);
};
h.D = function() {
  return this;
};
h.R = function() {
  return y.a(this.ga, 0);
};
h.V = function() {
  return 1 < Da(this.ga) ? new Ic(tb(this.ga), this.ha, this.j, null) : null == this.ha ? J : this.ha;
};
h.jb = function() {
  return null == this.ha ? null : this.ha;
};
h.w = function(a, b) {
  return Mb(this, b);
};
h.s = function(a, b) {
  return new Ic(this.ga, this.ha, b, this.m);
};
h.r = function() {
  return this.j;
};
h.J = function() {
  return Ob(J, this.j);
};
h.kb = function() {
  return this.ga;
};
h.lb = function() {
  return null == this.ha ? J : this.ha;
};
function Jc(a, b) {
  return 0 === Da(a) ? b : new Ic(a, b, null, null);
}
function Kc(a) {
  for (var b = [];;) {
    if (F(a)) {
      b.push(G(a)), a = L(a);
    } else {
      return b;
    }
  }
}
function Lc(a, b) {
  if (Ib(a)) {
    return Q(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && F(c)) {
      c = L(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var Vc = function Mc(b) {
  return null == b ? null : null == L(b) ? F(G(b)) : t ? O(G(b), Mc(L(b))) : null;
}, Wc = function() {
  function a(a, b) {
    return new Dc(null, function() {
      var c = F(a);
      return c ? bc(c) ? Jc(ub(c), d.a(vb(c), b)) : O(G(c), d.a(H(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new Dc(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new Dc(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, g) {
      var e = null;
      2 < arguments.length && (e = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, e);
    }
    function b(a, c, g) {
      return function q(a, b) {
        return new Dc(null, function() {
          var c = F(a);
          return c ? bc(c) ? Jc(ub(c), q(vb(c), b)) : O(G(c), q(H(c), b)) : r(b) ? q(G(b), L(b)) : null;
        }, null, null);
      }(d.a(a, c), g);
    }
    a.k = 2;
    a.g = function(a) {
      var c = G(a);
      a = L(a);
      var d = G(a);
      a = H(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, f, k) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, f);
      default:
        return e.e(d, f, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.k = 2;
  d.g = e.g;
  d.i = c;
  d.b = b;
  d.a = a;
  d.e = e.e;
  return d;
}(), Xc = function() {
  function a(a, b, c, d) {
    return O(a, O(b, O(c, d)));
  }
  function b(a, b, c) {
    return O(a, O(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, p, n) {
      var q = null;
      4 < arguments.length && (q = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, p, q);
    }
    function b(a, c, d, g, e) {
      return O(a, O(c, O(d, O(g, Vc(e)))));
    }
    a.k = 4;
    a.g = function(a) {
      var c = G(a);
      a = L(a);
      var d = G(a);
      a = L(a);
      var e = G(a);
      a = L(a);
      var n = G(a);
      a = H(a);
      return b(c, d, e, n, a);
    };
    a.e = b;
    return a;
  }(), c = function(c, g, f, k, l) {
    switch(arguments.length) {
      case 1:
        return F(c);
      case 2:
        return O(c, g);
      case 3:
        return b.call(this, c, g, f);
      case 4:
        return a.call(this, c, g, f, k);
      default:
        return d.e(c, g, f, k, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.k = 4;
  c.g = d.g;
  c.b = function(a) {
    return F(a);
  };
  c.a = function(a, b) {
    return O(a, b);
  };
  c.c = b;
  c.n = a;
  c.e = d.e;
  return c;
}();
function Yc(a) {
  return qb(a);
}
function Zc(a, b, c) {
  var d = F(c);
  if (0 === b) {
    return a.i ? a.i() : a.call(null);
  }
  c = z(d);
  var e = A(d);
  if (1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(null, c);
  }
  var d = z(e), g = A(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = z(g), f = A(g);
  if (3 === b) {
    return a.c ? a.c(c, d, e) : a.c ? a.c(c, d, e) : a.call(null, c, d, e);
  }
  var g = z(f), k = A(f);
  if (4 === b) {
    return a.n ? a.n(c, d, e, g) : a.n ? a.n(c, d, e, g) : a.call(null, c, d, e, g);
  }
  f = z(k);
  k = A(k);
  if (5 === b) {
    return a.B ? a.B(c, d, e, g, f) : a.B ? a.B(c, d, e, g, f) : a.call(null, c, d, e, g, f);
  }
  a = z(k);
  var l = A(k);
  if (6 === b) {
    return a.ja ? a.ja(c, d, e, g, f, a) : a.ja ? a.ja(c, d, e, g, f, a) : a.call(null, c, d, e, g, f, a);
  }
  var k = z(l), p = A(l);
  if (7 === b) {
    return a.Da ? a.Da(c, d, e, g, f, a, k) : a.Da ? a.Da(c, d, e, g, f, a, k) : a.call(null, c, d, e, g, f, a, k);
  }
  var l = z(p), n = A(p);
  if (8 === b) {
    return a.yb ? a.yb(c, d, e, g, f, a, k, l) : a.yb ? a.yb(c, d, e, g, f, a, k, l) : a.call(null, c, d, e, g, f, a, k, l);
  }
  var p = z(n), q = A(n);
  if (9 === b) {
    return a.zb ? a.zb(c, d, e, g, f, a, k, l, p) : a.zb ? a.zb(c, d, e, g, f, a, k, l, p) : a.call(null, c, d, e, g, f, a, k, l, p);
  }
  var n = z(q), x = A(q);
  if (10 === b) {
    return a.nb ? a.nb(c, d, e, g, f, a, k, l, p, n) : a.nb ? a.nb(c, d, e, g, f, a, k, l, p, n) : a.call(null, c, d, e, g, f, a, k, l, p, n);
  }
  var q = z(x), M = A(x);
  if (11 === b) {
    return a.ob ? a.ob(c, d, e, g, f, a, k, l, p, n, q) : a.ob ? a.ob(c, d, e, g, f, a, k, l, p, n, q) : a.call(null, c, d, e, g, f, a, k, l, p, n, q);
  }
  var x = z(M), K = A(M);
  if (12 === b) {
    return a.pb ? a.pb(c, d, e, g, f, a, k, l, p, n, q, x) : a.pb ? a.pb(c, d, e, g, f, a, k, l, p, n, q, x) : a.call(null, c, d, e, g, f, a, k, l, p, n, q, x);
  }
  var M = z(K), U = A(K);
  if (13 === b) {
    return a.qb ? a.qb(c, d, e, g, f, a, k, l, p, n, q, x, M) : a.qb ? a.qb(c, d, e, g, f, a, k, l, p, n, q, x, M) : a.call(null, c, d, e, g, f, a, k, l, p, n, q, x, M);
  }
  var K = z(U), V = A(U);
  if (14 === b) {
    return a.rb ? a.rb(c, d, e, g, f, a, k, l, p, n, q, x, M, K) : a.rb ? a.rb(c, d, e, g, f, a, k, l, p, n, q, x, M, K) : a.call(null, c, d, e, g, f, a, k, l, p, n, q, x, M, K);
  }
  var U = z(V), I = A(V);
  if (15 === b) {
    return a.sb ? a.sb(c, d, e, g, f, a, k, l, p, n, q, x, M, K, U) : a.sb ? a.sb(c, d, e, g, f, a, k, l, p, n, q, x, M, K, U) : a.call(null, c, d, e, g, f, a, k, l, p, n, q, x, M, K, U);
  }
  var V = z(I), sa = A(I);
  if (16 === b) {
    return a.tb ? a.tb(c, d, e, g, f, a, k, l, p, n, q, x, M, K, U, V) : a.tb ? a.tb(c, d, e, g, f, a, k, l, p, n, q, x, M, K, U, V) : a.call(null, c, d, e, g, f, a, k, l, p, n, q, x, M, K, U, V);
  }
  var I = z(sa), Ga = A(sa);
  if (17 === b) {
    return a.ub ? a.ub(c, d, e, g, f, a, k, l, p, n, q, x, M, K, U, V, I) : a.ub ? a.ub(c, d, e, g, f, a, k, l, p, n, q, x, M, K, U, V, I) : a.call(null, c, d, e, g, f, a, k, l, p, n, q, x, M, K, U, V, I);
  }
  var sa = z(Ga), Fb = A(Ga);
  if (18 === b) {
    return a.vb ? a.vb(c, d, e, g, f, a, k, l, p, n, q, x, M, K, U, V, I, sa) : a.vb ? a.vb(c, d, e, g, f, a, k, l, p, n, q, x, M, K, U, V, I, sa) : a.call(null, c, d, e, g, f, a, k, l, p, n, q, x, M, K, U, V, I, sa);
  }
  Ga = z(Fb);
  Fb = A(Fb);
  if (19 === b) {
    return a.wb ? a.wb(c, d, e, g, f, a, k, l, p, n, q, x, M, K, U, V, I, sa, Ga) : a.wb ? a.wb(c, d, e, g, f, a, k, l, p, n, q, x, M, K, U, V, I, sa, Ga) : a.call(null, c, d, e, g, f, a, k, l, p, n, q, x, M, K, U, V, I, sa, Ga);
  }
  var Cc = z(Fb);
  A(Fb);
  if (20 === b) {
    return a.xb ? a.xb(c, d, e, g, f, a, k, l, p, n, q, x, M, K, U, V, I, sa, Ga, Cc) : a.xb ? a.xb(c, d, e, g, f, a, k, l, p, n, q, x, M, K, U, V, I, sa, Ga, Cc) : a.call(null, c, d, e, g, f, a, k, l, p, n, q, x, M, K, U, V, I, sa, Ga, Cc);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var T = function() {
  function a(a, b, c, d, g) {
    b = Xc.n(b, c, d, g);
    c = a.k;
    return a.g ? (d = Lc(b, c + 1), d <= c ? Zc(a, d, b) : a.g(b)) : a.apply(a, Kc(b));
  }
  function b(a, b, c, d) {
    b = Xc.c(b, c, d);
    c = a.k;
    return a.g ? (d = Lc(b, c + 1), d <= c ? Zc(a, d, b) : a.g(b)) : a.apply(a, Kc(b));
  }
  function c(a, b, c) {
    b = Xc.a(b, c);
    c = a.k;
    if (a.g) {
      var d = Lc(b, c + 1);
      return d <= c ? Zc(a, d, b) : a.g(b);
    }
    return a.apply(a, Kc(b));
  }
  function d(a, b) {
    var c = a.k;
    if (a.g) {
      var d = Lc(b, c + 1);
      return d <= c ? Zc(a, d, b) : a.g(b);
    }
    return a.apply(a, Kc(b));
  }
  var e = null, g = function() {
    function a(c, d, g, e, f, M) {
      var K = null;
      5 < arguments.length && (K = N(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, g, e, f, K);
    }
    function b(a, c, d, g, e, f) {
      c = O(c, O(d, O(g, O(e, Vc(f)))));
      d = a.k;
      return a.g ? (g = Lc(c, d + 1), g <= d ? Zc(a, g, c) : a.g(c)) : a.apply(a, Kc(c));
    }
    a.k = 5;
    a.g = function(a) {
      var c = G(a);
      a = L(a);
      var d = G(a);
      a = L(a);
      var g = G(a);
      a = L(a);
      var e = G(a);
      a = L(a);
      var f = G(a);
      a = H(a);
      return b(c, d, g, e, f, a);
    };
    a.e = b;
    return a;
  }(), e = function(e, k, l, p, n, q) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, p);
      case 5:
        return a.call(this, e, k, l, p, n);
      default:
        return g.e(e, k, l, p, n, N(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.k = 5;
  e.g = g.g;
  e.a = d;
  e.c = c;
  e.n = b;
  e.B = a;
  e.e = g.e;
  return e;
}(), $c = function() {
  function a(a, b) {
    return!C.a(a, b);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return wa(T.n(C, a, c, d));
    }
    a.k = 2;
    a.g = function(a) {
      var c = G(a);
      a = L(a);
      var d = G(a);
      a = H(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e, g) {
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
  b.k = 2;
  b.g = c.g;
  b.b = function() {
    return!1;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
function ad(a, b) {
  for (;;) {
    if (null == F(b)) {
      return!0;
    }
    if (r(a.b ? a.b(G(b)) : a.call(null, G(b)))) {
      var c = a, d = L(b);
      a = c;
      b = d;
    } else {
      return t ? !1 : null;
    }
  }
}
function bd(a) {
  return a;
}
function cd(a) {
  return function() {
    var b = null, c = function() {
      function b(a, d, k) {
        var l = null;
        2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
        return c.call(this, a, d, l);
      }
      function c(b, d, e) {
        return wa(T.n(a, b, d, e));
      }
      b.k = 2;
      b.g = function(a) {
        var b = G(a);
        a = L(a);
        var d = G(a);
        a = H(a);
        return c(b, d, a);
      };
      b.e = c;
      return b;
    }(), b = function(b, e, g) {
      switch(arguments.length) {
        case 0:
          return wa(a.i ? a.i() : a.call(null));
        case 1:
          return wa(a.b ? a.b(b) : a.call(null, b));
        case 2:
          return wa(a.a ? a.a(b, e) : a.call(null, b, e));
        default:
          return c.e(b, e, N(arguments, 2));
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.k = 2;
    b.g = c.g;
    return b;
  }();
}
var dd = function() {
  function a(a, b, c) {
    return function() {
      var d = null, l = function() {
        function d(a, b, c, e) {
          var g = null;
          3 < arguments.length && (g = N(Array.prototype.slice.call(arguments, 3), 0));
          return k.call(this, a, b, c, g);
        }
        function k(d, l, p, n) {
          return a.b ? a.b(b.b ? b.b(T.B(c, d, l, p, n)) : b.call(null, T.B(c, d, l, p, n))) : a.call(null, b.b ? b.b(T.B(c, d, l, p, n)) : b.call(null, T.B(c, d, l, p, n)));
        }
        d.k = 3;
        d.g = function(a) {
          var b = G(a);
          a = L(a);
          var c = G(a);
          a = L(a);
          var d = G(a);
          a = H(a);
          return k(b, c, d, a);
        };
        d.e = k;
        return d;
      }(), d = function(d, k, q, x) {
        switch(arguments.length) {
          case 0:
            return a.b ? a.b(b.b ? b.b(c.i ? c.i() : c.call(null)) : b.call(null, c.i ? c.i() : c.call(null))) : a.call(null, b.b ? b.b(c.i ? c.i() : c.call(null)) : b.call(null, c.i ? c.i() : c.call(null)));
          case 1:
            return a.b ? a.b(b.b ? b.b(c.b ? c.b(d) : c.call(null, d)) : b.call(null, c.b ? c.b(d) : c.call(null, d))) : a.call(null, b.b ? b.b(c.b ? c.b(d) : c.call(null, d)) : b.call(null, c.b ? c.b(d) : c.call(null, d)));
          case 2:
            return a.b ? a.b(b.b ? b.b(c.a ? c.a(d, k) : c.call(null, d, k)) : b.call(null, c.a ? c.a(d, k) : c.call(null, d, k))) : a.call(null, b.b ? b.b(c.a ? c.a(d, k) : c.call(null, d, k)) : b.call(null, c.a ? c.a(d, k) : c.call(null, d, k)));
          case 3:
            return a.b ? a.b(b.b ? b.b(c.c ? c.c(d, k, q) : c.call(null, d, k, q)) : b.call(null, c.c ? c.c(d, k, q) : c.call(null, d, k, q))) : a.call(null, b.b ? b.b(c.c ? c.c(d, k, q) : c.call(null, d, k, q)) : b.call(null, c.c ? c.c(d, k, q) : c.call(null, d, k, q)));
          default:
            return l.e(d, k, q, N(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      d.k = 3;
      d.g = l.g;
      return d;
    }();
  }
  function b(a, b) {
    return function() {
      var c = null, d = function() {
        function c(a, b, e, g) {
          var f = null;
          3 < arguments.length && (f = N(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, f);
        }
        function d(c, f, k, l) {
          return a.b ? a.b(T.B(b, c, f, k, l)) : a.call(null, T.B(b, c, f, k, l));
        }
        c.k = 3;
        c.g = function(a) {
          var b = G(a);
          a = L(a);
          var c = G(a);
          a = L(a);
          var e = G(a);
          a = H(a);
          return d(b, c, e, a);
        };
        c.e = d;
        return c;
      }(), c = function(c, f, n, q) {
        switch(arguments.length) {
          case 0:
            return a.b ? a.b(b.i ? b.i() : b.call(null)) : a.call(null, b.i ? b.i() : b.call(null));
          case 1:
            return a.b ? a.b(b.b ? b.b(c) : b.call(null, c)) : a.call(null, b.b ? b.b(c) : b.call(null, c));
          case 2:
            return a.b ? a.b(b.a ? b.a(c, f) : b.call(null, c, f)) : a.call(null, b.a ? b.a(c, f) : b.call(null, c, f));
          case 3:
            return a.b ? a.b(b.c ? b.c(c, f, n) : b.call(null, c, f, n)) : a.call(null, b.c ? b.c(c, f, n) : b.call(null, c, f, n));
          default:
            return d.e(c, f, n, N(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      c.k = 3;
      c.g = d.g;
      return c;
    }();
  }
  var c = null, d = function() {
    function a(c, d, e, p) {
      var n = null;
      3 < arguments.length && (n = N(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, n);
    }
    function b(a, c, d, e) {
      var g = wc(Xc.n(a, c, d, e));
      return function() {
        function a(c) {
          var d = null;
          0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
          return b.call(this, d);
        }
        function b(a) {
          a = T.a(G(g), a);
          for (var c = L(g);;) {
            if (c) {
              a = G(c).call(null, a), c = L(c);
            } else {
              return a;
            }
          }
        }
        a.k = 0;
        a.g = function(a) {
          a = F(a);
          return b(a);
        };
        a.e = b;
        return a;
      }();
    }
    a.k = 3;
    a.g = function(a) {
      var c = G(a);
      a = L(a);
      var d = G(a);
      a = L(a);
      var e = G(a);
      a = H(a);
      return b(c, d, e, a);
    };
    a.e = b;
    return a;
  }(), c = function(c, g, f, k) {
    switch(arguments.length) {
      case 0:
        return bd;
      case 1:
        return c;
      case 2:
        return b.call(this, c, g);
      case 3:
        return a.call(this, c, g, f);
      default:
        return d.e(c, g, f, N(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.k = 3;
  c.g = d.g;
  c.i = function() {
    return bd;
  };
  c.b = function(a) {
    return a;
  };
  c.a = b;
  c.c = a;
  c.e = d.e;
  return c;
}(), ed = function() {
  function a(a, b, c, d) {
    return function() {
      function e(a) {
        var b = null;
        0 < arguments.length && (b = N(Array.prototype.slice.call(arguments, 0), 0));
        return n.call(this, b);
      }
      function n(e) {
        return T.B(a, b, c, d, e);
      }
      e.k = 0;
      e.g = function(a) {
        a = F(a);
        return n(a);
      };
      e.e = n;
      return e;
    }();
  }
  function b(a, b, c) {
    return function() {
      function d(a) {
        var b = null;
        0 < arguments.length && (b = N(Array.prototype.slice.call(arguments, 0), 0));
        return e.call(this, b);
      }
      function e(d) {
        return T.n(a, b, c, d);
      }
      d.k = 0;
      d.g = function(a) {
        a = F(a);
        return e(a);
      };
      d.e = e;
      return d;
    }();
  }
  function c(a, b) {
    return function() {
      function c(a) {
        var b = null;
        0 < arguments.length && (b = N(Array.prototype.slice.call(arguments, 0), 0));
        return d.call(this, b);
      }
      function d(c) {
        return T.c(a, b, c);
      }
      c.k = 0;
      c.g = function(a) {
        a = F(a);
        return d(a);
      };
      c.e = d;
      return c;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, g, q) {
      var x = null;
      4 < arguments.length && (x = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, g, x);
    }
    function b(a, c, d, e, g) {
      return function() {
        function b(a) {
          var c = null;
          0 < arguments.length && (c = N(Array.prototype.slice.call(arguments, 0), 0));
          return f.call(this, c);
        }
        function f(b) {
          return T.B(a, c, d, e, Wc.a(g, b));
        }
        b.k = 0;
        b.g = function(a) {
          a = F(a);
          return f(a);
        };
        b.e = f;
        return b;
      }();
    }
    a.k = 4;
    a.g = function(a) {
      var c = G(a);
      a = L(a);
      var d = G(a);
      a = L(a);
      var e = G(a);
      a = L(a);
      var g = G(a);
      a = H(a);
      return b(c, d, e, g, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, f, k, l, p) {
    switch(arguments.length) {
      case 1:
        return d;
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, k);
      case 4:
        return a.call(this, d, f, k, l);
      default:
        return e.e(d, f, k, l, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.k = 4;
  d.g = e.g;
  d.b = function(a) {
    return a;
  };
  d.a = c;
  d.c = b;
  d.n = a;
  d.e = e.e;
  return d;
}(), fd = function() {
  function a(a, b, c, e) {
    return new Dc(null, function() {
      var p = F(b), n = F(c), q = F(e);
      return p && n && q ? O(a.c ? a.c(G(p), G(n), G(q)) : a.call(null, G(p), G(n), G(q)), d.n(a, H(p), H(n), H(q))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new Dc(null, function() {
      var e = F(b), p = F(c);
      return e && p ? O(a.a ? a.a(G(e), G(p)) : a.call(null, G(e), G(p)), d.c(a, H(e), H(p))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new Dc(null, function() {
      var c = F(b);
      if (c) {
        if (bc(c)) {
          for (var e = ub(c), p = Q(e), n = new Fc(Array(p), 0), q = 0;;) {
            if (q < p) {
              var x = a.b ? a.b(y.a(e, q)) : a.call(null, y.a(e, q));
              n.add(x);
              q += 1;
            } else {
              break;
            }
          }
          return Jc(n.ga(), d.a(a, vb(c)));
        }
        return O(a.b ? a.b(G(c)) : a.call(null, G(c)), d.a(a, H(c)));
      }
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e, g, q) {
      var x = null;
      4 < arguments.length && (x = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, g, x);
    }
    function b(a, c, e, g, f) {
      return d.a(function(b) {
        return T.a(a, b);
      }, function M(a) {
        return new Dc(null, function() {
          var b = d.a(F, a);
          return ad(bd, b) ? O(d.a(G, b), M(d.a(H, b))) : null;
        }, null, null);
      }(Qb.e(f, g, N([e, c], 0))));
    }
    a.k = 4;
    a.g = function(a) {
      var c = G(a);
      a = L(a);
      var d = G(a);
      a = L(a);
      var e = G(a);
      a = L(a);
      var g = G(a);
      a = H(a);
      return b(c, d, e, g, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, f, k, l, p) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, k);
      case 4:
        return a.call(this, d, f, k, l);
      default:
        return e.e(d, f, k, l, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.k = 4;
  d.g = e.g;
  d.a = c;
  d.c = b;
  d.n = a;
  d.e = e.e;
  return d;
}(), hd = function gd(b, c) {
  return new Dc(null, function() {
    if (0 < b) {
      var d = F(c);
      return d ? O(G(d), gd(b - 1, H(d))) : null;
    }
    return null;
  }, null, null);
}, id = function() {
  function a(a, b) {
    return hd(a, c.b(b));
  }
  function b(a) {
    return new Dc(null, function() {
      return O(a, c.b(a));
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
  c.b = b;
  c.a = a;
  return c;
}(), kd = function jd(b, c) {
  return new Dc(null, function() {
    var d = F(c);
    if (d) {
      if (bc(d)) {
        for (var e = ub(d), g = Q(e), f = new Fc(Array(g), 0), k = 0;;) {
          if (k < g) {
            if (r(b.b ? b.b(y.a(e, k)) : b.call(null, y.a(e, k)))) {
              var l = y.a(e, k);
              f.add(l);
            }
            k += 1;
          } else {
            break;
          }
        }
        return Jc(f.ga(), jd(b, vb(d)));
      }
      e = G(d);
      d = H(d);
      return r(b.b ? b.b(e) : b.call(null, e)) ? O(e, jd(b, d)) : jd(b, d);
    }
    return null;
  }, null, null);
};
function ld(a, b) {
  return null != a ? a && (a.o & 4 || a.uc) ? Yc(za.c(pb, ob(a), b)) : za.c(Fa, a, b) : za.c(Qb, J, b);
}
function md(a, b) {
  return Yc(za.c(function(b, d) {
    return r(a.b ? a.b(d) : a.call(null, d)) ? pb(b, d) : b;
  }, ob(nd), b));
}
var od = function() {
  function a(a, b, c) {
    var f = ec;
    for (b = F(b);;) {
      if (b) {
        var k = a;
        if (k ? k.f & 256 || k.Lb || (k.f ? 0 : s(Ka, k)) : s(Ka, k)) {
          a = S.c(a, G(b), f);
          if (f === a) {
            return c;
          }
          b = L(b);
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
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function pd(a, b) {
  this.p = a;
  this.d = b;
}
function qd(a) {
  return new pd(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function rd(a) {
  a = a.h;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function sd(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = qd(a);
    d.d[0] = c;
    c = d;
    b -= 5;
  }
}
var ud = function td(b, c, d, e) {
  var g = new pd(d.p, w(d.d)), f = b.h - 1 >>> c & 31;
  5 === c ? g.d[f] = e : (d = d.d[f], b = null != d ? td(b, c - 5, d, e) : sd(null, c - 5, e), g.d[f] = b);
  return g;
};
function vd(a, b) {
  throw Error([v("No item "), v(a), v(" in vector of length "), v(b)].join(""));
}
function wd(a, b) {
  if (0 <= b && b < a.h) {
    if (b >= rd(a)) {
      return a.q;
    }
    for (var c = a.root, d = a.shift;;) {
      if (0 < d) {
        var e = d - 5, c = c.d[b >>> d & 31], d = e
      } else {
        return c.d;
      }
    }
  } else {
    return vd(b, a.h);
  }
}
var yd = function xd(b, c, d, e, g) {
  var f = new pd(d.p, w(d.d));
  if (0 === c) {
    f.d[e & 31] = g;
  } else {
    var k = e >>> c & 31;
    b = xd(b, c - 5, d.d[k], e, g);
    f.d[k] = b;
  }
  return f;
};
function X(a, b, c, d, e, g) {
  this.j = a;
  this.h = b;
  this.shift = c;
  this.root = d;
  this.q = e;
  this.m = g;
  this.o = 4;
  this.f = 167668511;
}
h = X.prototype;
h.Ca = function() {
  return new zd(this.h, this.shift, Ad.b ? Ad.b(this.root) : Ad.call(null, this.root), Bd.b ? Bd.b(this.q) : Bd.call(null, this.q));
};
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Kb(this);
};
h.K = function(a, b) {
  return y.c(this, b, null);
};
h.L = function(a, b, c) {
  return y.c(this, b, c);
};
h.Ka = function(a, b, c) {
  if (0 <= b && b < this.h) {
    return rd(this) <= b ? (a = w(this.q), a[b & 31] = c, new X(this.j, this.h, this.shift, this.root, a, null)) : new X(this.j, this.h, this.shift, yd(this, this.shift, this.root, b, c), this.q, null);
  }
  if (b === this.h) {
    return Fa(this, c);
  }
  if (t) {
    throw Error([v("Index "), v(b), v(" out of bounds  [0,"), v(this.h), v("]")].join(""));
  }
  return null;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.O(null, c);
      case 3:
        return this.Z(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
h.b = function(a) {
  return this.O(null, a);
};
h.a = function(a, b) {
  return this.Z(null, a, b);
};
h.F = function(a, b) {
  if (32 > this.h - rd(this)) {
    for (var c = this.q.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.q[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new X(this.j, this.h + 1, this.shift, this.root, d, null);
  }
  c = (d = this.h >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = qd(null), d.d[0] = this.root, e = sd(null, this.shift, new pd(null, this.q)), d.d[1] = e) : d = ud(this, this.shift, this.root, new pd(null, this.q));
  return new X(this.j, this.h + 1, c, d, [b], null);
};
h.Cb = function() {
  return 0 < this.h ? new Lb(this, this.h - 1, null) : null;
};
h.Bb = function() {
  return y.a(this, 0);
};
h.Mb = function() {
  return y.a(this, 1);
};
h.toString = function() {
  return zb(this);
};
h.P = function(a, b) {
  return Gb.a(this, b);
};
h.Q = function(a, b, c) {
  return Gb.c(this, b, c);
};
h.D = function() {
  return 0 === this.h ? null : 32 > this.h ? N.b(this.q) : t ? Cd.c ? Cd.c(this, 0, 0) : Cd.call(null, this, 0, 0) : null;
};
h.G = function() {
  return this.h;
};
h.Db = function(a, b, c) {
  return Na(this, b, c);
};
h.w = function(a, b) {
  return Mb(this, b);
};
h.s = function(a, b) {
  return new X(b, this.h, this.shift, this.root, this.q, this.m);
};
h.r = function() {
  return this.j;
};
h.O = function(a, b) {
  return wd(this, b)[b & 31];
};
h.Z = function(a, b, c) {
  return 0 <= b && b < this.h ? y.a(this, b) : c;
};
h.J = function() {
  return Ob(nd, this.j);
};
var Y = new pd(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), nd = new X(null, 0, 5, Y, [], 0);
function Dd(a, b) {
  var c = a.length, d = b ? a : w(a);
  if (32 > c) {
    return new X(null, c, 5, Y, d, null);
  }
  for (var e = d.slice(0, 32), g = 32, f = (new X(null, 32, 5, Y, e, null)).Ca(null);;) {
    if (g < c) {
      e = g + 1, f = pb(f, d[g]), g = e;
    } else {
      return qb(f);
    }
  }
}
function Ed(a) {
  return qb(za.c(pb, ob(nd), a));
}
var Fd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return a instanceof Eb && 0 === a.l ? Dd.a ? Dd.a(a.d, !0) : Dd.call(null, a.d, !0) : Ed(a);
  }
  a.k = 0;
  a.g = function(a) {
    a = F(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Gd(a, b, c, d, e, g) {
  this.I = a;
  this.ba = b;
  this.l = c;
  this.A = d;
  this.j = e;
  this.m = g;
  this.f = 32243948;
  this.o = 1536;
}
h = Gd.prototype;
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Kb(this);
};
h.X = function() {
  if (this.A + 1 < this.ba.length) {
    var a = Cd.n ? Cd.n(this.I, this.ba, this.l, this.A + 1) : Cd.call(null, this.I, this.ba, this.l, this.A + 1);
    return null == a ? null : a;
  }
  return wb(this);
};
h.F = function(a, b) {
  return O(b, this);
};
h.toString = function() {
  return zb(this);
};
h.P = function(a, b) {
  return Gb.a(Jd.c ? Jd.c(this.I, this.l + this.A, Q(this.I)) : Jd.call(null, this.I, this.l + this.A, Q(this.I)), b);
};
h.Q = function(a, b, c) {
  return Gb.c(Jd.c ? Jd.c(this.I, this.l + this.A, Q(this.I)) : Jd.call(null, this.I, this.l + this.A, Q(this.I)), b, c);
};
h.D = function() {
  return this;
};
h.R = function() {
  return this.ba[this.A];
};
h.V = function() {
  if (this.A + 1 < this.ba.length) {
    var a = Cd.n ? Cd.n(this.I, this.ba, this.l, this.A + 1) : Cd.call(null, this.I, this.ba, this.l, this.A + 1);
    return null == a ? J : a;
  }
  return vb(this);
};
h.jb = function() {
  var a = this.ba.length, a = this.l + a < Da(this.I) ? Cd.c ? Cd.c(this.I, this.l + a, 0) : Cd.call(null, this.I, this.l + a, 0) : null;
  return null == a ? null : a;
};
h.w = function(a, b) {
  return Mb(this, b);
};
h.s = function(a, b) {
  return Cd.B ? Cd.B(this.I, this.ba, this.l, this.A, b) : Cd.call(null, this.I, this.ba, this.l, this.A, b);
};
h.J = function() {
  return Ob(nd, this.j);
};
h.kb = function() {
  return Hc.a(this.ba, this.A);
};
h.lb = function() {
  var a = this.ba.length, a = this.l + a < Da(this.I) ? Cd.c ? Cd.c(this.I, this.l + a, 0) : Cd.call(null, this.I, this.l + a, 0) : null;
  return null == a ? J : a;
};
var Cd = function() {
  function a(a, b, c, d, l) {
    return new Gd(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new Gd(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new Gd(a, wd(a, b), b, c, null, null);
  }
  var d = null, d = function(d, g, f, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, g, f);
      case 4:
        return b.call(this, d, g, f, k);
      case 5:
        return a.call(this, d, g, f, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.n = b;
  d.B = a;
  return d;
}();
function Kd(a, b, c, d, e) {
  this.j = a;
  this.ia = b;
  this.start = c;
  this.end = d;
  this.m = e;
  this.o = 0;
  this.f = 32400159;
}
h = Kd.prototype;
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Kb(this);
};
h.K = function(a, b) {
  return y.c(this, b, null);
};
h.L = function(a, b, c) {
  return y.c(this, b, c);
};
h.Ka = function(a, b, c) {
  var d = this, e = d.start + b;
  return Ld.B ? Ld.B(d.j, Ub.c(d.ia, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null) : Ld.call(null, d.j, Ub.c(d.ia, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.O(null, c);
      case 3:
        return this.Z(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
h.b = function(a) {
  return this.O(null, a);
};
h.a = function(a, b) {
  return this.Z(null, a, b);
};
h.F = function(a, b) {
  return Ld.B ? Ld.B(this.j, Wa(this.ia, this.end, b), this.start, this.end + 1, null) : Ld.call(null, this.j, Wa(this.ia, this.end, b), this.start, this.end + 1, null);
};
h.toString = function() {
  return zb(this);
};
h.P = function(a, b) {
  return Gb.a(this, b);
};
h.Q = function(a, b, c) {
  return Gb.c(this, b, c);
};
h.D = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : O(y.a(a.ia, d), new Dc(null, function() {
      return c(d + 1);
    }, null, null));
  }(a.start);
};
h.G = function() {
  return this.end - this.start;
};
h.Db = function(a, b, c) {
  return Na(this, b, c);
};
h.w = function(a, b) {
  return Mb(this, b);
};
h.s = function(a, b) {
  return Ld.B ? Ld.B(b, this.ia, this.start, this.end, this.m) : Ld.call(null, b, this.ia, this.start, this.end, this.m);
};
h.r = function() {
  return this.j;
};
h.O = function(a, b) {
  return 0 > b || this.end <= this.start + b ? vd(b, this.end - this.start) : y.a(this.ia, this.start + b);
};
h.Z = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : y.c(this.ia, this.start + b, c);
};
h.J = function() {
  return Ob(nd, this.j);
};
function Ld(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Kd) {
      c = b.start + c, d = b.start + d, b = b.ia;
    } else {
      var g = Q(b);
      if (0 > c || 0 > d || c > g || d > g) {
        throw Error("Index out of bounds");
      }
      return new Kd(a, b, c, d, e);
    }
  }
}
var Jd = function() {
  function a(a, b, c) {
    return Ld(null, a, b, c, null);
  }
  function b(a, b) {
    return c.c(a, b, Q(a));
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function Ad(a) {
  return new pd({}, w(a.d));
}
function Bd(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  dc(a, 0, b, 0, a.length);
  return b;
}
var Nd = function Md(b, c, d, e) {
  d = b.root.p === d.p ? d : new pd(b.root.p, w(d.d));
  var g = b.h - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var f = d.d[g];
    b = null != f ? Md(b, c - 5, f, e) : sd(b.root.p, c - 5, e);
  }
  d.d[g] = b;
  return d;
};
function zd(a, b, c, d) {
  this.h = a;
  this.shift = b;
  this.root = c;
  this.q = d;
  this.f = 275;
  this.o = 88;
}
h = zd.prototype;
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
h.b = function(a) {
  return this.K(null, a);
};
h.a = function(a, b) {
  return this.L(null, a, b);
};
h.K = function(a, b) {
  return y.c(this, b, null);
};
h.L = function(a, b, c) {
  return y.c(this, b, c);
};
h.O = function(a, b) {
  if (this.root.p) {
    return wd(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
h.Z = function(a, b, c) {
  return 0 <= b && b < this.h ? y.a(this, b) : c;
};
h.G = function() {
  if (this.root.p) {
    return this.h;
  }
  throw Error("count after persistent!");
};
h.Ob = function(a, b, c) {
  var d = this;
  if (d.root.p) {
    if (0 <= b && b < d.h) {
      return rd(this) <= b ? d.q[b & 31] = c : (a = function g(a, k) {
        var l = d.root.p === k.p ? k : new pd(d.root.p, w(k.d));
        if (0 === a) {
          l.d[b & 31] = c;
        } else {
          var p = b >>> a & 31, n = g(a - 5, l.d[p]);
          l.d[p] = n;
        }
        return l;
      }.call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.h) {
      return pb(this, c);
    }
    if (t) {
      throw Error([v("Index "), v(b), v(" out of bounds for TransientVector of length"), v(d.h)].join(""));
    }
    return null;
  }
  throw Error("assoc! after persistent!");
};
h.Ma = function(a, b, c) {
  return sb(this, b, c);
};
h.Na = function(a, b) {
  if (this.root.p) {
    if (32 > this.h - rd(this)) {
      this.q[this.h & 31] = b;
    } else {
      var c = new pd(this.root.p, this.q), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.q = d;
      if (this.h >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = sd(this.root.p, this.shift, c);
        this.root = new pd(this.root.p, d);
        this.shift = e;
      } else {
        this.root = Nd(this, this.shift, this.root, c);
      }
    }
    this.h += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
h.Oa = function() {
  if (this.root.p) {
    this.root.p = null;
    var a = this.h - rd(this), b = Array(a);
    dc(this.q, 0, b, 0, a);
    return new X(null, this.h, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function Od() {
  this.o = 0;
  this.f = 2097152;
}
Od.prototype.w = function() {
  return!1;
};
var Pd = new Od;
function Qd(a, b) {
  return gc((null == b ? 0 : b ? b.f & 1024 || b.wc || (b.f ? 0 : s(Oa, b)) : s(Oa, b)) ? Q(a) === Q(b) ? ad(bd, fd.a(function(a) {
    return C.a(S.c(b, G(a), Pd), G(L(a)));
  }, a)) : null : null);
}
function Rd(a, b) {
  var c = a.d;
  if (b instanceof W) {
    a: {
      for (var d = c.length, e = b.sa, g = 0;;) {
        if (d <= g) {
          c = -1;
          break a;
        }
        var f = c[g];
        if (f instanceof W && e === f.sa) {
          c = g;
          break a;
        }
        if (t) {
          g += 2;
        } else {
          c = null;
          break a;
        }
      }
      c = void 0;
    }
  } else {
    if (ba(b) || "number" === typeof b) {
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
          if (t) {
            e += 2;
          } else {
            c = null;
            break a;
          }
        }
        c = void 0;
      }
    } else {
      if (b instanceof D) {
        a: {
          d = c.length;
          e = b.va;
          for (g = 0;;) {
            if (d <= g) {
              c = -1;
              break a;
            }
            f = c[g];
            if (f instanceof D && e === f.va) {
              c = g;
              break a;
            }
            if (t) {
              g += 2;
            } else {
              c = null;
              break a;
            }
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
              if (t) {
                e += 2;
              } else {
                c = null;
                break a;
              }
            }
            c = void 0;
          }
        } else {
          if (t) {
            a: {
              d = c.length;
              for (e = 0;;) {
                if (d <= e) {
                  c = -1;
                  break a;
                }
                if (C.a(b, c[e])) {
                  c = e;
                  break a;
                }
                if (t) {
                  e += 2;
                } else {
                  c = null;
                  break a;
                }
              }
              c = void 0;
            }
          } else {
            c = null;
          }
        }
      }
    }
  }
  return c;
}
function Sd(a, b, c) {
  this.d = a;
  this.l = b;
  this.ca = c;
  this.o = 0;
  this.f = 32374990;
}
h = Sd.prototype;
h.C = function() {
  return Kb(this);
};
h.X = function() {
  return this.l < this.d.length - 2 ? new Sd(this.d, this.l + 2, this.ca) : null;
};
h.F = function(a, b) {
  return O(b, this);
};
h.toString = function() {
  return zb(this);
};
h.P = function(a, b) {
  return P.a(b, this);
};
h.Q = function(a, b, c) {
  return P.c(b, c, this);
};
h.D = function() {
  return this;
};
h.G = function() {
  return(this.d.length - this.l) / 2;
};
h.R = function() {
  return new X(null, 2, 5, Y, [this.d[this.l], this.d[this.l + 1]], null);
};
h.V = function() {
  return this.l < this.d.length - 2 ? new Sd(this.d, this.l + 2, this.ca) : J;
};
h.w = function(a, b) {
  return Mb(this, b);
};
h.s = function(a, b) {
  return new Sd(this.d, this.l, b);
};
h.r = function() {
  return this.ca;
};
h.J = function() {
  return Ob(J, this.ca);
};
function oa(a, b, c, d) {
  this.j = a;
  this.h = b;
  this.d = c;
  this.m = d;
  this.o = 4;
  this.f = 16123663;
}
h = oa.prototype;
h.Ca = function() {
  return new Td({}, this.d.length, w(this.d));
};
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = rc(this);
};
h.K = function(a, b) {
  return La.c(this, b, null);
};
h.L = function(a, b, c) {
  a = Rd(this, b);
  return-1 === a ? c : this.d[a + 1];
};
h.Ka = function(a, b, c) {
  a = Rd(this, b);
  if (-1 === a) {
    if (this.h < Ud) {
      a = this.d;
      for (var d = a.length, e = Array(d + 2), g = 0;;) {
        if (g < d) {
          e[g] = a[g], g += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new oa(this.j, this.h + 1, e, null);
    }
    return ab(Na(ld(Vd, this), b, c), this.j);
  }
  return c === this.d[a + 1] ? this : t ? (b = w(this.d), b[a + 1] = c, new oa(this.j, this.h, b, null)) : null;
};
h.ib = function(a, b) {
  return-1 !== Rd(this, b);
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
h.b = function(a) {
  return this.K(null, a);
};
h.a = function(a, b) {
  return this.L(null, a, b);
};
h.F = function(a, b) {
  return ac(b) ? Na(this, y.a(b, 0), y.a(b, 1)) : za.c(Fa, this, b);
};
h.toString = function() {
  return zb(this);
};
h.D = function() {
  return 0 <= this.d.length - 2 ? new Sd(this.d, 0, null) : null;
};
h.G = function() {
  return this.h;
};
h.w = function(a, b) {
  return Qd(this, b);
};
h.s = function(a, b) {
  return new oa(b, this.h, this.d, this.m);
};
h.r = function() {
  return this.j;
};
h.J = function() {
  return ab(Wd, this.j);
};
h.Ab = function(a, b) {
  if (0 <= Rd(this, b)) {
    var c = this.d.length, d = c - 2;
    if (0 === d) {
      return Ea(this);
    }
    for (var d = Array(d), e = 0, g = 0;;) {
      if (e >= c) {
        return new oa(this.j, this.h - 1, d, null);
      }
      if (C.a(b, this.d[e])) {
        e += 2;
      } else {
        if (t) {
          d[g] = this.d[e], d[g + 1] = this.d[e + 1], g += 2, e += 2;
        } else {
          return null;
        }
      }
    }
  } else {
    return this;
  }
};
var Wd = new oa(null, 0, [], null), Ud = 8;
function Td(a, b, c) {
  this.Fa = a;
  this.za = b;
  this.d = c;
  this.o = 56;
  this.f = 258;
}
h = Td.prototype;
h.Ma = function(a, b, c) {
  if (r(this.Fa)) {
    a = Rd(this, b);
    if (-1 === a) {
      if (this.za + 2 <= 2 * Ud) {
        return this.za += 2, this.d.push(b), this.d.push(c), this;
      }
      a = Xd.a ? Xd.a(this.za, this.d) : Xd.call(null, this.za, this.d);
      return rb(a, b, c);
    }
    c !== this.d[a + 1] && (this.d[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
h.Na = function(a, b) {
  if (r(this.Fa)) {
    if (b ? b.f & 2048 || b.bc || (b.f ? 0 : s(Qa, b)) : s(Qa, b)) {
      return rb(this, sc.b ? sc.b(b) : sc.call(null, b), tc.b ? tc.b(b) : tc.call(null, b));
    }
    for (var c = F(b), d = this;;) {
      var e = G(c);
      if (r(e)) {
        c = L(c), d = rb(d, sc.b ? sc.b(e) : sc.call(null, e), tc.b ? tc.b(e) : tc.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
h.Oa = function() {
  if (r(this.Fa)) {
    return this.Fa = !1, new oa(null, mc(this.za, 2), this.d, null);
  }
  throw Error("persistent! called twice");
};
h.K = function(a, b) {
  return La.c(this, b, null);
};
h.L = function(a, b, c) {
  if (r(this.Fa)) {
    return a = Rd(this, b), -1 === a ? c : this.d[a + 1];
  }
  throw Error("lookup after persistent!");
};
h.G = function() {
  if (r(this.Fa)) {
    return mc(this.za, 2);
  }
  throw Error("count after persistent!");
};
function Xd(a, b) {
  for (var c = ob(Vd), d = 0;;) {
    if (d < a) {
      c = rb(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function Yd() {
  this.H = !1;
}
function Zd(a, b) {
  return a === b ? !0 : zc(a, b) ? !0 : t ? C.a(a, b) : null;
}
var $d = function() {
  function a(a, b, c, f, k) {
    a = w(a);
    a[b] = c;
    a[f] = k;
    return a;
  }
  function b(a, b, c) {
    a = w(a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, g, f, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, g);
      case 5:
        return a.call(this, c, e, g, f, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.B = a;
  return c;
}();
function ae(a, b) {
  var c = Array(a.length - 2);
  dc(a, 0, c, 0, 2 * b);
  dc(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
var be = function() {
  function a(a, b, c, f, k, l) {
    a = a.Ga(b);
    a.d[c] = f;
    a.d[k] = l;
    return a;
  }
  function b(a, b, c, f) {
    a = a.Ga(b);
    a.d[c] = f;
    return a;
  }
  var c = null, c = function(c, e, g, f, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, g, f);
      case 6:
        return a.call(this, c, e, g, f, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.n = b;
  c.ja = a;
  return c;
}();
function ce(a, b, c) {
  this.p = a;
  this.t = b;
  this.d = c;
}
h = ce.prototype;
h.ea = function(a, b, c, d, e, g) {
  var f = 1 << (c >>> b & 31), k = pc(this.t & f - 1);
  if (0 === (this.t & f)) {
    var l = pc(this.t);
    if (2 * l < this.d.length) {
      a = this.Ga(a);
      b = a.d;
      g.H = !0;
      a: {
        for (c = 2 * (l - k), g = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[g];
          l -= 1;
          c -= 1;
          g -= 1;
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.t |= f;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = de.ea(a, b + 5, c, d, e, g);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.t >>> d & 1) && (k[d] = null != this.d[e] ? de.ea(a, b + 5, E(this.d[e]), this.d[e], this.d[e + 1], g) : this.d[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new ee(a, l + 1, k);
    }
    return t ? (b = Array(2 * (l + 4)), dc(this.d, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, dc(this.d, 2 * k, b, 2 * (k + 1), 2 * (l - k)), g.H = !0, a = this.Ga(a), a.d = b, a.t |= f, a) : null;
  }
  l = this.d[2 * k];
  f = this.d[2 * k + 1];
  return null == l ? (l = f.ea(a, b + 5, c, d, e, g), l === f ? this : be.n(this, a, 2 * k + 1, l)) : Zd(d, l) ? e === f ? this : be.n(this, a, 2 * k + 1, e) : t ? (g.H = !0, be.ja(this, a, 2 * k, null, 2 * k + 1, fe.Da ? fe.Da(a, b + 5, l, f, c, d, e) : fe.call(null, a, b + 5, l, f, c, d, e))) : null;
};
h.Sa = function() {
  return ge.b ? ge.b(this.d) : ge.call(null, this.d);
};
h.Ga = function(a) {
  if (a === this.p) {
    return this;
  }
  var b = pc(this.t), c = Array(0 > b ? 4 : 2 * (b + 1));
  dc(this.d, 0, c, 0, 2 * b);
  return new ce(a, this.t, c);
};
h.Ta = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.t & d)) {
    return this;
  }
  var e = pc(this.t & d - 1), g = this.d[2 * e], f = this.d[2 * e + 1];
  return null == g ? (a = f.Ta(a + 5, b, c), a === f ? this : null != a ? new ce(null, this.t, $d.c(this.d, 2 * e + 1, a)) : this.t === d ? null : t ? new ce(null, this.t ^ d, ae(this.d, e)) : null) : Zd(c, g) ? new ce(null, this.t ^ d, ae(this.d, e)) : t ? this : null;
};
h.da = function(a, b, c, d, e) {
  var g = 1 << (b >>> a & 31), f = pc(this.t & g - 1);
  if (0 === (this.t & g)) {
    var k = pc(this.t);
    if (16 <= k) {
      f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      f[b >>> a & 31] = de.da(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.t >>> c & 1) && (f[c] = null != this.d[d] ? de.da(a + 5, E(this.d[d]), this.d[d], this.d[d + 1], e) : this.d[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new ee(null, k + 1, f);
    }
    a = Array(2 * (k + 1));
    dc(this.d, 0, a, 0, 2 * f);
    a[2 * f] = c;
    a[2 * f + 1] = d;
    dc(this.d, 2 * f, a, 2 * (f + 1), 2 * (k - f));
    e.H = !0;
    return new ce(null, this.t | g, a);
  }
  k = this.d[2 * f];
  g = this.d[2 * f + 1];
  return null == k ? (k = g.da(a + 5, b, c, d, e), k === g ? this : new ce(null, this.t, $d.c(this.d, 2 * f + 1, k))) : Zd(c, k) ? d === g ? this : new ce(null, this.t, $d.c(this.d, 2 * f + 1, d)) : t ? (e.H = !0, new ce(null, this.t, $d.B(this.d, 2 * f, null, 2 * f + 1, fe.ja ? fe.ja(a + 5, k, g, b, c, d) : fe.call(null, a + 5, k, g, b, c, d)))) : null;
};
h.ta = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.t & e)) {
    return d;
  }
  var g = pc(this.t & e - 1), e = this.d[2 * g], g = this.d[2 * g + 1];
  return null == e ? g.ta(a + 5, b, c, d) : Zd(c, e) ? g : t ? d : null;
};
var de = new ce(null, 0, []);
function ee(a, b, c) {
  this.p = a;
  this.h = b;
  this.d = c;
}
h = ee.prototype;
h.ea = function(a, b, c, d, e, g) {
  var f = c >>> b & 31, k = this.d[f];
  if (null == k) {
    return a = be.n(this, a, f, de.ea(a, b + 5, c, d, e, g)), a.h += 1, a;
  }
  b = k.ea(a, b + 5, c, d, e, g);
  return b === k ? this : be.n(this, a, f, b);
};
h.Sa = function() {
  return he.b ? he.b(this.d) : he.call(null, this.d);
};
h.Ga = function(a) {
  return a === this.p ? this : new ee(a, this.h, w(this.d));
};
h.Ta = function(a, b, c) {
  var d = b >>> a & 31, e = this.d[d];
  if (null != e) {
    a = e.Ta(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.h) {
          a: {
            e = this.d;
            a = 2 * (this.h - 1);
            b = Array(a);
            c = 0;
            for (var g = 1, f = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[g] = e[c], g += 2, f |= 1 << c), c += 1;
              } else {
                d = new ce(null, f, b);
                break a;
              }
            }
            d = void 0;
          }
        } else {
          d = new ee(null, this.h - 1, $d.c(this.d, d, a));
        }
      } else {
        d = t ? new ee(null, this.h, $d.c(this.d, d, a)) : null;
      }
    }
    return d;
  }
  return this;
};
h.da = function(a, b, c, d, e) {
  var g = b >>> a & 31, f = this.d[g];
  if (null == f) {
    return new ee(null, this.h + 1, $d.c(this.d, g, de.da(a + 5, b, c, d, e)));
  }
  a = f.da(a + 5, b, c, d, e);
  return a === f ? this : new ee(null, this.h, $d.c(this.d, g, a));
};
h.ta = function(a, b, c, d) {
  var e = this.d[b >>> a & 31];
  return null != e ? e.ta(a + 5, b, c, d) : d;
};
function ie(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (Zd(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function je(a, b, c, d) {
  this.p = a;
  this.ma = b;
  this.h = c;
  this.d = d;
}
h = je.prototype;
h.ea = function(a, b, c, d, e, g) {
  if (c === this.ma) {
    b = ie(this.d, this.h, d);
    if (-1 === b) {
      if (this.d.length > 2 * this.h) {
        return a = be.ja(this, a, 2 * this.h, d, 2 * this.h + 1, e), g.H = !0, a.h += 1, a;
      }
      c = this.d.length;
      b = Array(c + 2);
      dc(this.d, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      g.H = !0;
      g = this.h + 1;
      a === this.p ? (this.d = b, this.h = g, a = this) : a = new je(this.p, this.ma, g, b);
      return a;
    }
    return this.d[b + 1] === e ? this : be.n(this, a, b + 1, e);
  }
  return(new ce(a, 1 << (this.ma >>> b & 31), [null, this, null, null])).ea(a, b, c, d, e, g);
};
h.Sa = function() {
  return ge.b ? ge.b(this.d) : ge.call(null, this.d);
};
h.Ga = function(a) {
  if (a === this.p) {
    return this;
  }
  var b = Array(2 * (this.h + 1));
  dc(this.d, 0, b, 0, 2 * this.h);
  return new je(a, this.ma, this.h, b);
};
h.Ta = function(a, b, c) {
  a = ie(this.d, this.h, c);
  return-1 === a ? this : 1 === this.h ? null : t ? new je(null, this.ma, this.h - 1, ae(this.d, mc(a, 2))) : null;
};
h.da = function(a, b, c, d, e) {
  return b === this.ma ? (a = ie(this.d, this.h, c), -1 === a ? (a = 2 * this.h, b = Array(a + 2), dc(this.d, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.H = !0, new je(null, this.ma, this.h + 1, b)) : C.a(this.d[a], d) ? this : new je(null, this.ma, this.h, $d.c(this.d, a + 1, d))) : (new ce(null, 1 << (this.ma >>> a & 31), [null, this])).da(a, b, c, d, e);
};
h.ta = function(a, b, c, d) {
  a = ie(this.d, this.h, c);
  return 0 > a ? d : Zd(c, this.d[a]) ? this.d[a + 1] : t ? d : null;
};
var fe = function() {
  function a(a, b, c, f, k, l, p) {
    var n = E(c);
    if (n === k) {
      return new je(null, n, 2, [c, f, l, p]);
    }
    var q = new Yd;
    return de.ea(a, b, n, c, f, q).ea(a, b, k, l, p, q);
  }
  function b(a, b, c, f, k, l) {
    var p = E(b);
    if (p === f) {
      return new je(null, p, 2, [b, c, k, l]);
    }
    var n = new Yd;
    return de.da(a, p, b, c, n).da(a, f, k, l, n);
  }
  var c = null, c = function(c, e, g, f, k, l, p) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, g, f, k, l);
      case 7:
        return a.call(this, c, e, g, f, k, l, p);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.ja = b;
  c.Da = a;
  return c;
}();
function ke(a, b, c, d, e) {
  this.j = a;
  this.fa = b;
  this.l = c;
  this.v = d;
  this.m = e;
  this.o = 0;
  this.f = 32374860;
}
h = ke.prototype;
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Kb(this);
};
h.F = function(a, b) {
  return O(b, this);
};
h.toString = function() {
  return zb(this);
};
h.P = function(a, b) {
  return P.a(b, this);
};
h.Q = function(a, b, c) {
  return P.c(b, c, this);
};
h.D = function() {
  return this;
};
h.R = function() {
  return null == this.v ? new X(null, 2, 5, Y, [this.fa[this.l], this.fa[this.l + 1]], null) : G(this.v);
};
h.V = function() {
  return null == this.v ? ge.c ? ge.c(this.fa, this.l + 2, null) : ge.call(null, this.fa, this.l + 2, null) : ge.c ? ge.c(this.fa, this.l, L(this.v)) : ge.call(null, this.fa, this.l, L(this.v));
};
h.w = function(a, b) {
  return Mb(this, b);
};
h.s = function(a, b) {
  return new ke(b, this.fa, this.l, this.v, this.m);
};
h.r = function() {
  return this.j;
};
h.J = function() {
  return Ob(J, this.j);
};
var ge = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new ke(null, a, b, null, null);
          }
          var f = a[b + 1];
          if (r(f) && (f = f.Sa(), r(f))) {
            return new ke(null, a, b + 2, f, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new ke(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.c(a, 0, null);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}();
function le(a, b, c, d, e) {
  this.j = a;
  this.fa = b;
  this.l = c;
  this.v = d;
  this.m = e;
  this.o = 0;
  this.f = 32374860;
}
h = le.prototype;
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Kb(this);
};
h.F = function(a, b) {
  return O(b, this);
};
h.toString = function() {
  return zb(this);
};
h.P = function(a, b) {
  return P.a(b, this);
};
h.Q = function(a, b, c) {
  return P.c(b, c, this);
};
h.D = function() {
  return this;
};
h.R = function() {
  return G(this.v);
};
h.V = function() {
  return he.n ? he.n(null, this.fa, this.l, L(this.v)) : he.call(null, null, this.fa, this.l, L(this.v));
};
h.w = function(a, b) {
  return Mb(this, b);
};
h.s = function(a, b) {
  return new le(b, this.fa, this.l, this.v, this.m);
};
h.r = function() {
  return this.j;
};
h.J = function() {
  return Ob(J, this.j);
};
var he = function() {
  function a(a, b, c, f) {
    if (null == f) {
      for (f = b.length;;) {
        if (c < f) {
          var k = b[c];
          if (r(k) && (k = k.Sa(), r(k))) {
            return new le(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new le(a, b, c, f, null);
    }
  }
  function b(a) {
    return c.n(null, a, 0, null);
  }
  var c = null, c = function(c, e, g, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, g, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.n = a;
  return c;
}();
function me(a, b, c, d, e, g) {
  this.j = a;
  this.h = b;
  this.root = c;
  this.S = d;
  this.Y = e;
  this.m = g;
  this.o = 4;
  this.f = 16123663;
}
h = me.prototype;
h.Ca = function() {
  return new ne({}, this.root, this.h, this.S, this.Y);
};
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = rc(this);
};
h.K = function(a, b) {
  return La.c(this, b, null);
};
h.L = function(a, b, c) {
  return null == b ? this.S ? this.Y : c : null == this.root ? c : t ? this.root.ta(0, E(b), b, c) : null;
};
h.Ka = function(a, b, c) {
  if (null == b) {
    return this.S && c === this.Y ? this : new me(this.j, this.S ? this.h : this.h + 1, this.root, !0, c, null);
  }
  a = new Yd;
  b = (null == this.root ? de : this.root).da(0, E(b), b, c, a);
  return b === this.root ? this : new me(this.j, a.H ? this.h + 1 : this.h, b, this.S, this.Y, null);
};
h.ib = function(a, b) {
  return null == b ? this.S : null == this.root ? !1 : t ? this.root.ta(0, E(b), b, ec) !== ec : null;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
h.b = function(a) {
  return this.K(null, a);
};
h.a = function(a, b) {
  return this.L(null, a, b);
};
h.F = function(a, b) {
  return ac(b) ? Na(this, y.a(b, 0), y.a(b, 1)) : za.c(Fa, this, b);
};
h.toString = function() {
  return zb(this);
};
h.D = function() {
  if (0 < this.h) {
    var a = null != this.root ? this.root.Sa() : null;
    return this.S ? O(new X(null, 2, 5, Y, [null, this.Y], null), a) : a;
  }
  return null;
};
h.G = function() {
  return this.h;
};
h.w = function(a, b) {
  return Qd(this, b);
};
h.s = function(a, b) {
  return new me(b, this.h, this.root, this.S, this.Y, this.m);
};
h.r = function() {
  return this.j;
};
h.J = function() {
  return ab(Vd, this.j);
};
h.Ab = function(a, b) {
  if (null == b) {
    return this.S ? new me(this.j, this.h - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  if (t) {
    var c = this.root.Ta(0, E(b), b);
    return c === this.root ? this : new me(this.j, this.h - 1, c, this.S, this.Y, null);
  }
  return null;
};
var Vd = new me(null, 0, null, !1, null, 0);
function Sb(a, b) {
  for (var c = a.length, d = 0, e = ob(Vd);;) {
    if (d < c) {
      var g = d + 1, e = e.Ma(null, a[d], b[d]), d = g
    } else {
      return qb(e);
    }
  }
}
function ne(a, b, c, d, e) {
  this.p = a;
  this.root = b;
  this.count = c;
  this.S = d;
  this.Y = e;
  this.o = 56;
  this.f = 258;
}
h = ne.prototype;
h.Ma = function(a, b, c) {
  return oe(this, b, c);
};
h.Na = function(a, b) {
  var c;
  a: {
    if (this.p) {
      if (b ? b.f & 2048 || b.bc || (b.f ? 0 : s(Qa, b)) : s(Qa, b)) {
        c = oe(this, sc.b ? sc.b(b) : sc.call(null, b), tc.b ? tc.b(b) : tc.call(null, b));
        break a;
      }
      c = F(b);
      for (var d = this;;) {
        var e = G(c);
        if (r(e)) {
          c = L(c), d = oe(d, sc.b ? sc.b(e) : sc.call(null, e), tc.b ? tc.b(e) : tc.call(null, e));
        } else {
          c = d;
          break a;
        }
      }
    } else {
      throw Error("conj! after persistent");
    }
    c = void 0;
  }
  return c;
};
h.Oa = function() {
  var a;
  if (this.p) {
    this.p = null, a = new me(null, this.count, this.root, this.S, this.Y, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
h.K = function(a, b) {
  return null == b ? this.S ? this.Y : null : null == this.root ? null : this.root.ta(0, E(b), b);
};
h.L = function(a, b, c) {
  return null == b ? this.S ? this.Y : c : null == this.root ? c : this.root.ta(0, E(b), b, c);
};
h.G = function() {
  if (this.p) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function oe(a, b, c) {
  if (a.p) {
    if (null == b) {
      a.Y !== c && (a.Y = c), a.S || (a.count += 1, a.S = !0);
    } else {
      var d = new Yd;
      b = (null == a.root ? de : a.root).ea(a.p, 0, E(b), b, c, d);
      b !== a.root && (a.root = b);
      d.H && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
var pe = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    for (var b = F(a), e = ob(Vd);;) {
      if (b) {
        a = L(L(b));
        var g = G(b), b = G(L(b)), e = rb(e, g, b), b = a;
      } else {
        return qb(e);
      }
    }
  }
  a.k = 0;
  a.g = function(a) {
    a = F(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function qe(a, b) {
  this.ua = a;
  this.ca = b;
  this.o = 0;
  this.f = 32374988;
}
h = qe.prototype;
h.C = function() {
  return Kb(this);
};
h.X = function() {
  var a = this.ua, a = (a ? a.f & 128 || a.Nb || (a.f ? 0 : s(Ja, a)) : s(Ja, a)) ? this.ua.X(null) : L(this.ua);
  return null == a ? null : new qe(a, this.ca);
};
h.F = function(a, b) {
  return O(b, this);
};
h.toString = function() {
  return zb(this);
};
h.P = function(a, b) {
  return P.a(b, this);
};
h.Q = function(a, b, c) {
  return P.c(b, c, this);
};
h.D = function() {
  return this;
};
h.R = function() {
  return this.ua.R(null).Bb();
};
h.V = function() {
  var a = this.ua, a = (a ? a.f & 128 || a.Nb || (a.f ? 0 : s(Ja, a)) : s(Ja, a)) ? this.ua.X(null) : L(this.ua);
  return null != a ? new qe(a, this.ca) : J;
};
h.w = function(a, b) {
  return Mb(this, b);
};
h.s = function(a, b) {
  return new qe(this.ua, b);
};
h.r = function() {
  return this.ca;
};
h.J = function() {
  return Ob(J, this.ca);
};
function sc(a) {
  return Sa(a);
}
function tc(a) {
  return Ta(a);
}
function re(a, b, c) {
  this.j = a;
  this.Ia = b;
  this.m = c;
  this.o = 4;
  this.f = 15077647;
}
h = re.prototype;
h.Ca = function() {
  return new se(ob(this.Ia));
};
h.C = function() {
  var a = this.m;
  if (null != a) {
    return a;
  }
  a: {
    for (var a = 0, b = F(this);;) {
      if (b) {
        var c = G(b), a = (a + E(c)) % 4503599627370496, b = L(b)
      } else {
        break a;
      }
    }
    a = void 0;
  }
  return this.m = a;
};
h.K = function(a, b) {
  return La.c(this, b, null);
};
h.L = function(a, b, c) {
  return Ma(this.Ia, b) ? b : c;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
h.b = function(a) {
  return this.K(null, a);
};
h.a = function(a, b) {
  return this.L(null, a, b);
};
h.F = function(a, b) {
  return new re(this.j, Ub.c(this.Ia, b, null), null);
};
h.toString = function() {
  return zb(this);
};
h.D = function() {
  var a = F(this.Ia);
  return a ? new qe(a, null) : null;
};
h.G = function() {
  return Da(this.Ia);
};
h.w = function(a, b) {
  var c = this;
  return(null == b ? !1 : b ? b.f & 4096 || b.Ac ? !0 : b.f ? !1 : s(Ua, b) : s(Ua, b)) && Q(c) === Q(b) && ad(function(a) {
    return S.c(c, a, ec) === ec ? !1 : !0;
  }, b);
};
h.s = function(a, b) {
  return new re(b, this.Ia, this.m);
};
h.r = function() {
  return this.j;
};
h.J = function() {
  return Ob(te, this.j);
};
var te = new re(null, Wd, 0);
function ue(a) {
  var b = a.length;
  if (b <= Ud) {
    for (var c = 0, d = ob(Wd);;) {
      if (c < b) {
        var e = c + 1, d = rb(d, a[c], null), c = e
      } else {
        return new re(null, qb(d), null);
      }
    }
  } else {
    for (c = 0, d = ob(te);;) {
      if (c < b) {
        e = c + 1, d = pb(d, a[c]), c = e;
      } else {
        return qb(d);
      }
    }
  }
}
function se(a) {
  this.qa = a;
  this.f = 259;
  this.o = 136;
}
h = se.prototype;
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return La.c(this.qa, c, ec) === ec ? null : c;
      case 3:
        return La.c(this.qa, c, ec) === ec ? d : c;
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
h.b = function(a) {
  return La.c(this.qa, a, ec) === ec ? null : a;
};
h.a = function(a, b) {
  return La.c(this.qa, a, ec) === ec ? b : a;
};
h.K = function(a, b) {
  return La.c(this, b, null);
};
h.L = function(a, b, c) {
  return La.c(this.qa, b, ec) === ec ? c : b;
};
h.G = function() {
  return Q(this.qa);
};
h.Na = function(a, b) {
  this.qa = rb(this.qa, b, null);
  return this;
};
h.Oa = function() {
  return new re(null, qb(this.qa), null);
};
function ve(a) {
  for (var b = nd;;) {
    if (L(a)) {
      b = Qb.a(b, G(a)), a = L(a);
    } else {
      return F(b);
    }
  }
}
function Ac(a) {
  if (a && (a.o & 4096 || a.dc)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([v("Doesn't support name: "), v(a)].join(""));
}
var we = function() {
  function a(a, b, c) {
    return(a.b ? a.b(b) : a.call(null, b)) > (a.b ? a.b(c) : a.call(null, c)) ? b : c;
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var p = null;
      3 < arguments.length && (p = N(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, p);
    }
    function c(a, d, e, l) {
      return za.c(function(c, d) {
        return b.c(a, c, d);
      }, b.c(a, d, e), l);
    }
    a.k = 3;
    a.g = function(a) {
      var b = G(a);
      a = L(a);
      var d = G(a);
      a = L(a);
      var l = G(a);
      a = H(a);
      return c(b, d, l, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, g, f) {
    switch(arguments.length) {
      case 2:
        return e;
      case 3:
        return a.call(this, b, e, g);
      default:
        return c.e(b, e, g, N(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 3;
  b.g = c.g;
  b.a = function(a, b) {
    return b;
  };
  b.c = a;
  b.e = c.e;
  return b;
}();
function xe(a, b, c, d, e) {
  this.j = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.m = e;
  this.o = 0;
  this.f = 32375006;
}
h = xe.prototype;
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Kb(this);
};
h.X = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new xe(this.j, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new xe(this.j, this.start + this.step, this.end, this.step, null) : null;
};
h.F = function(a, b) {
  return O(b, this);
};
h.toString = function() {
  return zb(this);
};
h.P = function(a, b) {
  return Gb.a(this, b);
};
h.Q = function(a, b, c) {
  return Gb.c(this, b, c);
};
h.D = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
h.G = function() {
  return wa(gb(this)) ? 0 : Math.ceil((this.end - this.start) / this.step);
};
h.R = function() {
  return null == gb(this) ? null : this.start;
};
h.V = function() {
  return null != gb(this) ? new xe(this.j, this.start + this.step, this.end, this.step, null) : J;
};
h.w = function(a, b) {
  return Mb(this, b);
};
h.s = function(a, b) {
  return new xe(b, this.start, this.end, this.step, this.m);
};
h.r = function() {
  return this.j;
};
h.O = function(a, b) {
  if (b < Da(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
h.Z = function(a, b, c) {
  return b < Da(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
h.J = function() {
  return Ob(J, this.j);
};
var ye = function() {
  function a(a, b, c) {
    return new xe(null, a, b, c, null);
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
  var e = null, e = function(e, f, k) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e);
      case 2:
        return b.call(this, e, f);
      case 3:
        return a.call(this, e, f, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.i = d;
  e.b = c;
  e.a = b;
  e.c = a;
  return e;
}();
function ze(a, b, c, d, e, g, f) {
  var k = ma;
  try {
    ma = null == ma ? null : ma - 1;
    if (null != ma && 0 > ma) {
      return B(a, "#");
    }
    B(a, c);
    F(f) && (b.c ? b.c(G(f), a, g) : b.call(null, G(f), a, g));
    for (var l = L(f), p = ua.b(g);l && (null == p || 0 !== p);) {
      B(a, d);
      b.c ? b.c(G(l), a, g) : b.call(null, G(l), a, g);
      var n = L(l);
      c = p - 1;
      l = n;
      p = c;
    }
    r(ua.b(g)) && (B(a, d), b.c ? b.c("...", a, g) : b.call(null, "...", a, g));
    return B(a, e);
  } finally {
    ma = k;
  }
}
var Ae = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = N(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = F(b), g = null, f = 0, k = 0;;) {
      if (k < f) {
        var l = g.O(null, k);
        B(a, l);
        k += 1;
      } else {
        if (e = F(e)) {
          g = e, bc(g) ? (e = ub(g), f = vb(g), g = e, l = Q(e), e = f, f = l) : (l = G(g), B(a, l), e = L(g), g = null, f = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.k = 1;
  a.g = function(a) {
    var d = G(a);
    a = H(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}(), Be = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Ce(a) {
  return[v('"'), v(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Be[a];
  })), v('"')].join("");
}
var Z = function De(b, c, d) {
  if (null == b) {
    return B(c, "nil");
  }
  if (void 0 === b) {
    return B(c, "#\x3cundefined\x3e");
  }
  if (t) {
    r(function() {
      var c = S.a(d, ra);
      return r(c) ? (c = b ? b.f & 131072 || b.cc ? !0 : b.f ? !1 : s(Ya, b) : s(Ya, b)) ? Yb(b) : c : c;
    }()) && (B(c, "^"), De(Yb(b), c, d), B(c, " "));
    if (null == b) {
      return B(c, "nil");
    }
    if (b.la) {
      return b.ra(b, c, d);
    }
    if (b && (b.f & 2147483648 || b.M)) {
      return b.u(null, c, d);
    }
    if (xa(b) === Boolean || "number" === typeof b) {
      return B(c, "" + v(b));
    }
    if (null != b && b.constructor === Object) {
      return B(c, "#js "), Ee.n ? Ee.n(fd.a(function(c) {
        return new X(null, 2, 5, Y, [Bc.b(c), b[c]], null);
      }, cc(b)), De, c, d) : Ee.call(null, fd.a(function(c) {
        return new X(null, 2, 5, Y, [Bc.b(c), b[c]], null);
      }, cc(b)), De, c, d);
    }
    if (b instanceof Array) {
      return ze(c, De, "#js [", " ", "]", d, b);
    }
    if (ba(b)) {
      return r(qa.b(d)) ? B(c, Ce(b)) : B(c, b);
    }
    if (Wb(b)) {
      return Ae.e(c, N(["#\x3c", "" + v(b), "\x3e"], 0));
    }
    if (b instanceof Date) {
      var e = function(b, c) {
        for (var d = "" + v(b);;) {
          if (Q(d) < c) {
            d = [v("0"), v(d)].join("");
          } else {
            return d;
          }
        }
      };
      return Ae.e(c, N(['#inst "', "" + v(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return b instanceof RegExp ? Ae.e(c, N(['#"', b.source, '"'], 0)) : (b ? b.f & 2147483648 || b.M || (b.f ? 0 : s(kb, b)) : s(kb, b)) ? lb(b, c, d) : t ? Ae.e(c, N(["#\x3c", "" + v(b), "\x3e"], 0)) : null;
  }
  return null;
};
function Fe(a, b) {
  var c;
  if (null == a || wa(F(a))) {
    c = "";
  } else {
    c = v;
    var d = new ia;
    a: {
      var e = new xb(d);
      Z(G(a), e, b);
      for (var g = F(L(a)), f = null, k = 0, l = 0;;) {
        if (l < k) {
          var p = f.O(null, l);
          B(e, " ");
          Z(p, e, b);
          l += 1;
        } else {
          if (g = F(g)) {
            f = g, bc(f) ? (g = ub(f), k = vb(f), f = g, p = Q(g), g = k, k = p) : (p = G(f), B(e, " "), Z(p, e, b), g = L(f), f = null, k = 0), l = 0;
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
var Ge = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return Fe(a, na());
  }
  a.k = 0;
  a.g = function(a) {
    a = F(a);
    return b(a);
  };
  a.e = b;
  return a;
}(), He = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b = Ub.c(na(), qa, !1);
    a = Fe(a, b);
    ka.b ? ka.b(a) : ka.call(null, a);
    r(la) ? (a = na(), ka.b ? ka.b("\n") : ka.call(null, "\n"), a = (S.a(a, pa), null)) : a = null;
    return a;
  }
  a.k = 0;
  a.g = function(a) {
    a = F(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Ee(a, b, c, d) {
  return ze(c, function(a, c, d) {
    b.c ? b.c(Sa(a), c, d) : b.call(null, Sa(a), c, d);
    B(c, " ");
    return b.c ? b.c(Ta(a), c, d) : b.call(null, Ta(a), c, d);
  }, "{", ", ", "}", d, F(a));
}
qe.prototype.M = !0;
qe.prototype.u = function(a, b, c) {
  return ze(b, Z, "(", " ", ")", c, this);
};
Eb.prototype.M = !0;
Eb.prototype.u = function(a, b, c) {
  return ze(b, Z, "(", " ", ")", c, this);
};
Kd.prototype.M = !0;
Kd.prototype.u = function(a, b, c) {
  return ze(b, Z, "[", " ", "]", c, this);
};
Ic.prototype.M = !0;
Ic.prototype.u = function(a, b, c) {
  return ze(b, Z, "(", " ", ")", c, this);
};
oa.prototype.M = !0;
oa.prototype.u = function(a, b, c) {
  return Ee(this, Z, b, c);
};
Dc.prototype.M = !0;
Dc.prototype.u = function(a, b, c) {
  return ze(b, Z, "(", " ", ")", c, this);
};
Lb.prototype.M = !0;
Lb.prototype.u = function(a, b, c) {
  return ze(b, Z, "(", " ", ")", c, this);
};
ke.prototype.M = !0;
ke.prototype.u = function(a, b, c) {
  return ze(b, Z, "(", " ", ")", c, this);
};
Gd.prototype.M = !0;
Gd.prototype.u = function(a, b, c) {
  return ze(b, Z, "(", " ", ")", c, this);
};
me.prototype.M = !0;
me.prototype.u = function(a, b, c) {
  return Ee(this, Z, b, c);
};
re.prototype.M = !0;
re.prototype.u = function(a, b, c) {
  return ze(b, Z, "#{", " ", "}", c, this);
};
X.prototype.M = !0;
X.prototype.u = function(a, b, c) {
  return ze(b, Z, "[", " ", "]", c, this);
};
uc.prototype.M = !0;
uc.prototype.u = function(a, b, c) {
  return ze(b, Z, "(", " ", ")", c, this);
};
Sd.prototype.M = !0;
Sd.prototype.u = function(a, b, c) {
  return ze(b, Z, "(", " ", ")", c, this);
};
vc.prototype.M = !0;
vc.prototype.u = function(a, b) {
  return B(b, "()");
};
yc.prototype.M = !0;
yc.prototype.u = function(a, b, c) {
  return ze(b, Z, "(", " ", ")", c, this);
};
xe.prototype.M = !0;
xe.prototype.u = function(a, b, c) {
  return ze(b, Z, "(", " ", ")", c, this);
};
le.prototype.M = !0;
le.prototype.u = function(a, b, c) {
  return ze(b, Z, "(", " ", ")", c, this);
};
X.prototype.Xa = !0;
X.prototype.Ya = function(a, b) {
  return hc.a(this, b);
};
Kd.prototype.Xa = !0;
Kd.prototype.Ya = function(a, b) {
  return hc.a(this, b);
};
W.prototype.Xa = !0;
W.prototype.Ya = function(a, b) {
  return Ab(this, b);
};
D.prototype.Xa = !0;
D.prototype.Ya = function(a, b) {
  return Ab(this, b);
};
function Ie(a, b, c, d) {
  this.state = a;
  this.j = b;
  this.rc = c;
  this.Vb = d;
  this.f = 2153938944;
  this.o = 2;
}
h = Ie.prototype;
h.C = function() {
  return ca(this);
};
h.Pb = function(a, b, c) {
  a = F(this.Vb);
  for (var d = null, e = 0, g = 0;;) {
    if (g < e) {
      var f = d.O(null, g), k = R.c(f, 0, null), f = R.c(f, 1, null);
      f.n ? f.n(k, this, b, c) : f.call(null, k, this, b, c);
      g += 1;
    } else {
      if (a = F(a)) {
        bc(a) ? (d = ub(a), a = vb(a), k = d, e = Q(d), d = k) : (d = G(a), k = R.c(d, 0, null), f = R.c(d, 1, null), f.n ? f.n(k, this, b, c) : f.call(null, k, this, b, c), a = L(a), d = null, e = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
h.u = function(a, b, c) {
  B(b, "#\x3cAtom: ");
  Z(this.state, b, c);
  return B(b, "\x3e");
};
h.r = function() {
  return this.j;
};
h.mb = function() {
  return this.state;
};
h.w = function(a, b) {
  return this === b;
};
var Ke = function() {
  function a(a) {
    return new Ie(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = fc(c) ? T.a(pe, c) : c, e = S.a(d, Je), d = S.a(d, ra);
      return new Ie(a, d, e, null);
    }
    a.k = 1;
    a.g = function(a) {
      var c = G(a);
      a = H(a);
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
  b.k = 1;
  b.g = c.g;
  b.b = a;
  b.e = c.e;
  return b;
}();
function Le(a, b) {
  var c = a.rc;
  if (null != c && !r(c.b ? c.b(b) : c.call(null, b))) {
    throw Error([v("Assert failed: "), v("Validator rejected reference state"), v("\n"), v(Ge.e(N([xc(new D(null, "validate", "validate", 1233162959, null), new D(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
  }
  c = a.state;
  a.state = b;
  null != a.Vb && mb(a, c, b);
  return b;
}
nc = function() {
  function a(a) {
    return(Math.random.i ? Math.random.i() : Math.random.call(null)) * a;
  }
  function b() {
    return c.b(1);
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
  c.b = a;
  return c;
}();
oc = function(a) {
  return Math.floor.b ? Math.floor.b((Math.random.i ? Math.random.i() : Math.random.call(null)) * a) : Math.floor.call(null, (Math.random.i ? Math.random.i() : Math.random.call(null)) * a);
};
var ta = new W(null, "dup", "dup"), Me = new W(null, "status", "status"), Cb = new W(null, "default", "default"), $ = new W(null, "recur", "recur"), Ne = new W(null, "snake", "snake"), Oe = new W(null, "finally-block", "finally-block"), Pe = new W(null, "catch-block", "catch-block"), Qe = new W(null, "speed", "speed"), Re = new W(null, "init", "init"), Se = new W(null, "world", "world"), pa = new W(null, "flush-on-newline", "flush-on-newline"), Te = new W(null, "catch-exception", "catch-exception"), 
af = new W(null, "pills", "pills"), bf = new W(null, "continue-block", "continue-block"), cf = new W(null, "prev", "prev"), df = new W(null, "eat", "eat"), ef = new W(null, "enter", "enter"), ff = new W(null, "space", "space"), ua = new W(null, "print-length", "print-length"), gf = new W(null, "move", "move"), hf = new W(null, "right", "right"), jf = new W(null, "left", "left"), kf = new W(null, "tick", "tick"), lf = new W(null, "vel", "vel"), t = new W(null, "else", "else"), mf = new W(null, "turbo", 
"turbo"), qa = new W(null, "readably", "readably"), Je = new W(null, "validator", "validator"), ra = new W(null, "meta", "meta"), nf = new W(null, "down", "down"), of = new W(null, "body", "body"), pf = new W(null, "reset", "reset"), qf = new W(null, "game-over", "game-over"), rf = new W(null, "up", "up"), sf = new W(null, "key-not-found", "key-not-found"), tf = new W(null, "new-vel", "new-vel"), uf = new W(null, "turn", "turn"), vf = new W(null, "priority", "priority");
var wf, xf, yf, zf;
function Af() {
  return aa.navigator ? aa.navigator.userAgent : null;
}
zf = yf = xf = wf = !1;
var Bf;
if (Bf = Af()) {
  var Cf = aa.navigator;
  wf = 0 == Bf.indexOf("Opera");
  xf = !wf && -1 != Bf.indexOf("MSIE");
  yf = !wf && -1 != Bf.indexOf("WebKit");
  zf = !wf && !yf && "Gecko" == Cf.product;
}
var Df = wf, Ef = xf, Ff = zf, Gf = yf;
function Hf() {
  var a = aa.document;
  return a ? a.documentMode : void 0;
}
var If;
a: {
  var Jf = "", Kf;
  if (Df && aa.opera) {
    var Lf = aa.opera.version, Jf = "function" == typeof Lf ? Lf() : Lf
  } else {
    if (Ff ? Kf = /rv\:([^\);]+)(\)|;)/ : Ef ? Kf = /MSIE\s+([^\);]+)(\)|;)/ : Gf && (Kf = /WebKit\/(\S+)/), Kf) {
      var Mf = Kf.exec(Af()), Jf = Mf ? Mf[1] : ""
    }
  }
  if (Ef) {
    var Nf = Hf();
    if (Nf > parseFloat(Jf)) {
      If = String(Nf);
      break a;
    }
  }
  If = Jf;
}
var Of = {};
function Pf(a) {
  var b;
  if (!(b = Of[a])) {
    b = 0;
    for (var c = String(If).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), g = 0;0 == b && g < e;g++) {
      var f = c[g] || "", k = d[g] || "", l = RegExp("(\\d*)(\\D*)", "g"), p = RegExp("(\\d*)(\\D*)", "g");
      do {
        var n = l.exec(f) || ["", "", ""], q = p.exec(k) || ["", "", ""];
        if (0 == n[0].length && 0 == q[0].length) {
          break;
        }
        b = ((0 == n[1].length ? 0 : parseInt(n[1], 10)) < (0 == q[1].length ? 0 : parseInt(q[1], 10)) ? -1 : (0 == n[1].length ? 0 : parseInt(n[1], 10)) > (0 == q[1].length ? 0 : parseInt(q[1], 10)) ? 1 : 0) || ((0 == n[2].length) < (0 == q[2].length) ? -1 : (0 == n[2].length) > (0 == q[2].length) ? 1 : 0) || (n[2] < q[2] ? -1 : n[2] > q[2] ? 1 : 0);
      } while (0 == b);
    }
    b = Of[a] = 0 <= b;
  }
  return b;
}
var Qf = aa.document, Rf = Qf && Ef ? Hf() || ("CSS1Compat" == Qf.compatMode ? parseInt(If, 10) : 5) : void 0;
var Sf = !Ef || Ef && 9 <= Rf, Tf = Ef && !Pf("9");
!Gf || Pf("528");
Ff && Pf("1.9b") || Ef && Pf("8") || Df && Pf("9.5") || Gf && Pf("528");
Ff && !Pf("8") || Ef && Pf("9");
function Uf(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
}
Uf.prototype.Hb = !1;
Uf.prototype.defaultPrevented = !1;
Uf.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
};
function Vf(a) {
  Vf[" "](a);
  return a;
}
Vf[" "] = function() {
};
function Wf(a, b) {
  a && this.bb(a, b);
}
(function() {
  function a() {
  }
  a.prototype = Uf.prototype;
  Wf.qc = Uf.prototype;
  Wf.prototype = new a;
  Wf.prototype.constructor = Wf;
})();
h = Wf.prototype;
h.target = null;
h.relatedTarget = null;
h.offsetX = 0;
h.offsetY = 0;
h.clientX = 0;
h.clientY = 0;
h.screenX = 0;
h.screenY = 0;
h.button = 0;
h.keyCode = 0;
h.charCode = 0;
h.ctrlKey = !1;
h.altKey = !1;
h.shiftKey = !1;
h.metaKey = !1;
h.Rb = null;
h.bb = function(a, b) {
  var c = this.type = a.type;
  Uf.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if (d) {
    if (Ff) {
      var e;
      a: {
        try {
          Vf(d.nodeName);
          e = !0;
          break a;
        } catch (g) {
        }
        e = !1;
      }
      e || (d = null);
    }
  } else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
  }
  this.relatedTarget = d;
  this.offsetX = Gf || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = Gf || void 0 !== a.offsetY ? a.offsetY : a.layerY;
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
  this.Rb = a;
  a.defaultPrevented && this.preventDefault();
  delete this.Hb;
};
h.preventDefault = function() {
  Wf.qc.preventDefault.call(this);
  var a = this.Rb;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, Tf) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var Xf, Yf, Zf, $f, ag;
function bg(a, b) {
  if (a ? a.Za : a) {
    return a.Za(a, b);
  }
  var c;
  c = bg[m(null == a ? null : a)];
  if (!c && (c = bg._, !c)) {
    throw u("ReadPort.take!", a);
  }
  return c.call(null, a, b);
}
function cg(a, b, c) {
  if (a ? a.Pa : a) {
    return a.Pa(a, b, c);
  }
  var d;
  d = cg[m(null == a ? null : a)];
  if (!d && (d = cg._, !d)) {
    throw u("WritePort.put!", a);
  }
  return d.call(null, a, b, c);
}
function dg(a) {
  if (a ? a.Ea : a) {
    return a.Ea(a);
  }
  var b;
  b = dg[m(null == a ? null : a)];
  if (!b && (b = dg._, !b)) {
    throw u("Channel.close!", a);
  }
  return b.call(null, a);
}
function eg(a) {
  if (a ? a.$ : a) {
    return a.$(a);
  }
  var b;
  b = eg[m(null == a ? null : a)];
  if (!b && (b = eg._, !b)) {
    throw u("Handler.active?", a);
  }
  return b.call(null, a);
}
function fg(a) {
  if (a ? a.W : a) {
    return a.W(a);
  }
  var b;
  b = fg[m(null == a ? null : a)];
  if (!b && (b = fg._, !b)) {
    throw u("Handler.commit", a);
  }
  return b.call(null, a);
}
function gg(a) {
  if (a ? a.Eb : a) {
    return a.Eb();
  }
  var b;
  b = gg[m(null == a ? null : a)];
  if (!b && (b = gg._, !b)) {
    throw u("Buffer.full?", a);
  }
  return b.call(null, a);
}
;function hg(a, b, c, d, e) {
  for (var g = 0;;) {
    if (g < e) {
      c[d + g] = a[b + g], g += 1;
    } else {
      break;
    }
  }
}
function ig(a, b, c, d) {
  this.head = a;
  this.q = b;
  this.length = c;
  this.d = d;
}
ig.prototype.pop = function() {
  if (0 === this.length) {
    return null;
  }
  var a = this.d[this.q];
  this.d[this.q] = null;
  this.q = (this.q + 1) % this.d.length;
  this.length -= 1;
  return a;
};
ig.prototype.unshift = function(a) {
  this.d[this.head] = a;
  this.head = (this.head + 1) % this.d.length;
  this.length += 1;
  return null;
};
function jg(a, b) {
  a.length + 1 === a.d.length && a.resize();
  a.unshift(b);
}
ig.prototype.resize = function() {
  var a = Array(2 * this.d.length);
  return this.q < this.head ? (hg(this.d, this.q, a, 0, this.length), this.q = 0, this.head = this.length, this.d = a) : this.q > this.head ? (hg(this.d, this.q, a, 0, this.d.length - this.q), hg(this.d, 0, a, this.d.length - this.q, this.head), this.q = 0, this.head = this.length, this.d = a) : this.q === this.head ? (this.head = this.q = 0, this.d = a) : null;
};
function kg(a, b) {
  for (var c = a.length, d = 0;;) {
    if (d < c) {
      var e = a.pop();
      (b.b ? b.b(e) : b.call(null, e)) && a.unshift(e);
      d += 1;
    } else {
      break;
    }
  }
}
function lg(a) {
  if (!(0 < a)) {
    throw Error([v("Assert failed: "), v("Can't create a ring buffer of size 0"), v("\n"), v(Ge.e(N([xc(new D(null, "\x3e", "\x3e", -1640531465, null), new D(null, "n", "n", -1640531417, null), 0)], 0)))].join(""));
  }
  return new ig(0, 0, 0, Array(a));
}
function mg(a, b) {
  this.U = a;
  this.oc = b;
  this.o = 0;
  this.f = 2;
}
mg.prototype.G = function() {
  return this.U.length;
};
mg.prototype.Eb = function() {
  return this.U.length === this.oc;
};
mg.prototype.fc = function() {
  return this.U.pop();
};
function ng(a, b) {
  if (!wa(gg(a))) {
    throw Error([v("Assert failed: "), v("Can't add to a full buffer"), v("\n"), v(Ge.e(N([xc(new D(null, "not", "not", -1640422260, null), xc(new D("impl", "full?", "impl/full?", -1337857039, null), new D(null, "this", "this", -1636972457, null)))], 0)))].join(""));
  }
  a.U.unshift(b);
}
;var og = null, pg = lg(32), qg = !1, rg = !1;
function sg() {
  qg = !0;
  rg = !1;
  for (var a = 0;;) {
    var b = pg.pop();
    if (null != b && (b.i ? b.i() : b.call(null), 1024 > a)) {
      a += 1;
      continue;
    }
    break;
  }
  qg = !1;
  return 0 < pg.length ? tg.i ? tg.i() : tg.call(null) : null;
}
"undefined" !== typeof MessageChannel && (og = new MessageChannel, og.port1.onmessage = function() {
  return sg();
});
function tg() {
  var a = rg;
  if (r(a ? qg : a)) {
    return null;
  }
  rg = !0;
  return "undefined" !== typeof MessageChannel ? og.port2.postMessage(0) : "undefined" !== typeof setImmediate ? setImmediate(sg) : t ? setTimeout(sg, 0) : null;
}
function ug(a) {
  jg(pg, a);
  tg();
}
;var vg = 0;
function wg() {
}
h = wg.prototype;
h.key = 0;
h.Ba = !1;
h.Wa = !1;
h.bb = function(a, b, c, d, e, g) {
  if ("function" == m(a)) {
    this.Sb = !0;
  } else {
    if (a && a.handleEvent && "function" == m(a.handleEvent)) {
      this.Sb = !1;
    } else {
      throw Error("Invalid listener argument");
    }
  }
  this.Aa = a;
  this.Ub = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.Ra = g;
  this.Wa = !1;
  this.key = ++vg;
  this.Ba = !1;
};
h.handleEvent = function(a) {
  return this.Sb ? this.Aa.call(this.Ra || this.src, a) : this.Aa.handleEvent.call(this.Aa, a);
};
var xg = {}, yg = {}, zg = {}, Ag = {};
function Bg(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var g = 0;g < b.length;g++) {
      Bg(a, b[g], c, d, e);
    }
  } else {
    a: {
      if (!b) {
        throw Error("Invalid event type");
      }
      d = !!d;
      var f = yg;
      b in f || (f[b] = {na:0, oa:0});
      f = f[b];
      d in f || (f[d] = {na:0, oa:0}, f.na++);
      var f = f[d], g = ca(a), k;
      f.oa++;
      if (f[g]) {
        k = f[g];
        for (var l = 0;l < k.length;l++) {
          if (f = k[l], f.Aa == c && f.Ra == e) {
            if (f.Ba) {
              break;
            }
            k[l].Wa = !1;
            a = k[l];
            break a;
          }
        }
      } else {
        k = f[g] = [], f.na++;
      }
      l = Cg();
      f = new wg;
      f.bb(c, l, a, b, d, e);
      f.Wa = !1;
      l.src = a;
      l.Aa = f;
      k.push(f);
      zg[g] || (zg[g] = []);
      zg[g].push(f);
      a.addEventListener ? a != aa && a.gc || a.addEventListener(b, l, d) : a.attachEvent(b in Ag ? Ag[b] : Ag[b] = "on" + b, l);
      a = f;
    }
    xg[a.key] = a;
  }
}
function Cg() {
  var a = Dg, b = Sf ? function(c) {
    return a.call(b.src, b.Aa, c);
  } : function(c) {
    c = a.call(b.src, b.Aa, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function hh(a, b, c, d) {
  if (!d.cb && d.Tb) {
    for (var e = 0, g = 0;e < d.length;e++) {
      d[e].Ba ? d[e].Ub.src = null : (e != g && (d[g] = d[e]), g++);
    }
    d.length = g;
    d.Tb = !1;
    0 == g && (delete yg[a][b][c], yg[a][b].na--, 0 == yg[a][b].na && (delete yg[a][b], yg[a].na--), 0 == yg[a].na && delete yg[a]);
  }
}
function ih(a, b, c, d, e) {
  var g = 1;
  b = ca(b);
  if (a[b]) {
    var f = --a.oa, k = a[b];
    k.cb ? k.cb++ : k.cb = 1;
    try {
      for (var l = k.length, p = 0;p < l;p++) {
        var n = k[p];
        n && !n.Ba && (g &= !1 !== jh(n, e));
      }
    } finally {
      a.oa = Math.max(f, a.oa), k.cb--, hh(c, d, b, k);
    }
  }
  return Boolean(g);
}
function jh(a, b) {
  if (a.Wa) {
    var c = a.key, d = xg[c];
    if (d && !d.Ba) {
      var e = d.src, g = d.type, f = d.Ub, k = d.capture;
      e.removeEventListener ? e != aa && e.gc || e.removeEventListener(g, f, k) : e.detachEvent && e.detachEvent(g in Ag ? Ag[g] : Ag[g] = "on" + g, f);
      e = ca(e);
      if (zg[e]) {
        var f = zg[e], l = ga(f, d);
        0 <= l && fa.splice.call(f, l, 1);
        0 == f.length && delete zg[e];
      }
      d.Ba = !0;
      if (d = yg[g][k][e]) {
        d.Tb = !0, hh(g, k, e, d);
      }
      delete xg[c];
    }
  }
  return a.handleEvent(b);
}
function Dg(a, b) {
  if (a.Ba) {
    return!0;
  }
  var c = a.type, d = yg;
  if (!(c in d)) {
    return!0;
  }
  var d = d[c], e, g;
  if (!Sf) {
    var f;
    if (!(f = b)) {
      a: {
        f = ["window", "event"];
        for (var k = aa;e = f.shift();) {
          if (null != k[e]) {
            k = k[e];
          } else {
            f = null;
            break a;
          }
        }
        f = k;
      }
    }
    e = f;
    f = !0 in d;
    k = !1 in d;
    if (f) {
      if (0 > e.keyCode || void 0 != e.returnValue) {
        return!0;
      }
      a: {
        var l = !1;
        if (0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a;
          } catch (p) {
            l = !0;
          }
        }
        if (l || void 0 == e.returnValue) {
          e.returnValue = !0;
        }
      }
    }
    l = new Wf;
    l.bb(e, this);
    e = !0;
    try {
      if (f) {
        for (var n = [], q = l.currentTarget;q;q = q.parentNode) {
          n.push(q);
        }
        g = d[!0];
        g.oa = g.na;
        for (var x = n.length - 1;!l.Hb && 0 <= x && g.oa;x--) {
          l.currentTarget = n[x], e &= ih(g, n[x], c, !0, l);
        }
        if (k) {
          for (g = d[!1], g.oa = g.na, x = 0;!l.Hb && x < n.length && g.oa;x++) {
            l.currentTarget = n[x], e &= ih(g, n[x], c, !1, l);
          }
        }
      } else {
        e = jh(a, l);
      }
    } finally {
      n && (n.length = 0);
    }
    return e;
  }
  c = new Wf(b, this);
  return e = jh(a, c);
}
;!Ff && !Ef || Ef && Ef && 9 <= Rf || Ff && Pf("1.9.1");
Ef && Pf("9");
var kh, mh = function lh(b) {
  "undefined" === typeof kh && (kh = function(b, d, e) {
    this.N = b;
    this.Gb = d;
    this.mc = e;
    this.o = 0;
    this.f = 393216;
  }, kh.la = !0, kh.ka = "cljs.core.async.impl.ioc-helpers/t13070", kh.ra = function(b, d) {
    return B(d, "cljs.core.async.impl.ioc-helpers/t13070");
  }, kh.prototype.$ = function() {
    return!0;
  }, kh.prototype.W = function() {
    return this.N;
  }, kh.prototype.r = function() {
    return this.mc;
  }, kh.prototype.s = function(b, d) {
    return new kh(this.N, this.Gb, d);
  });
  return new kh(b, lh, null);
};
function nh(a) {
  try {
    return a[0].call(null, a);
  } catch (b) {
    if (b instanceof Object) {
      throw a[6].Ea(null), b;
    }
    if (t) {
      throw b;
    }
    return null;
  }
}
function oh(a, b, c) {
  c = c.Za(null, mh(function(c) {
    a[2] = c;
    a[1] = b;
    return nh(a);
  }));
  return r(c) ? (a[2] = Xa(c), a[1] = b, $) : null;
}
function ph(a, b, c, d) {
  c = c.Pa(null, d, mh(function() {
    a[2] = null;
    a[1] = b;
    return nh(a);
  }));
  return r(c) ? (a[2] = Xa(c), a[1] = b, $) : null;
}
var rh = function() {
  function a(a, d, e, g) {
    var f = null;
    3 < arguments.length && (f = N(Array.prototype.slice.call(arguments, 3), 0));
    return b.call(this, a, d, e, f);
  }
  function b(a, b, e, g) {
    g = fc(g) ? T.a(pe, g) : g;
    a[1] = b;
    b = qh(function(b) {
      a[2] = b;
      return nh(a);
    }, e, g);
    return r(b) ? (a[2] = Xa(b), $) : null;
  }
  a.k = 3;
  a.g = function(a) {
    var d = G(a);
    a = L(a);
    var e = G(a);
    a = L(a);
    var g = G(a);
    a = H(a);
    return b(d, e, g, a);
  };
  a.e = b;
  return a;
}();
function sh(a, b) {
  var c = a[6];
  null != b && c.Pa(null, b, mh(function() {
    return null;
  }));
  c.Ea(null);
  return c;
}
function th(a) {
  for (;;) {
    var b = a[4], c = Pe.b(b), d = Te.b(b), e = a[5];
    if (r(function() {
      var a = e;
      return r(a) ? wa(b) : a;
    }())) {
      throw e;
    }
    if (r(function() {
      var a = e;
      return r(a) ? (a = c, r(a) ? e instanceof d : a) : a;
    }())) {
      a[1] = c;
      a[2] = e;
      a[5] = null;
      a[4] = Ub.e(b, Pe, null, N([Te, null], 0));
      break;
    }
    if (r(function() {
      var a = e;
      return r(a) ? wa(c) && wa(Oe.b(b)) : a;
    }())) {
      a[4] = cf.b(b);
    } else {
      if (r(function() {
        var a = e;
        return r(a) ? (a = wa(c)) ? Oe.b(b) : a : a;
      }())) {
        a[1] = Oe.b(b);
        a[4] = Ub.c(b, Oe, null);
        break;
      }
      if (r(function() {
        var a = wa(e);
        return a ? Oe.b(b) : a;
      }())) {
        a[1] = Oe.b(b);
        a[4] = Ub.c(b, Oe, null);
        break;
      }
      if (wa(e) && wa(Oe.b(b))) {
        a[1] = bf.b(b);
        a[4] = cf.b(b);
        break;
      }
      if (t) {
        throw Error([v("Assert failed: "), v("No matching clause"), v("\n"), v(Ge.e(N([!1], 0)))].join(""));
      }
      break;
    }
  }
}
;var uh, wh = function vh(b) {
  "undefined" === typeof uh && (uh = function(b, d, e) {
    this.H = b;
    this.Zb = d;
    this.lc = e;
    this.o = 0;
    this.f = 425984;
  }, uh.la = !0, uh.ka = "cljs.core.async.impl.channels/t13059", uh.ra = function(b, d) {
    return B(d, "cljs.core.async.impl.channels/t13059");
  }, uh.prototype.mb = function() {
    return this.H;
  }, uh.prototype.r = function() {
    return this.lc;
  }, uh.prototype.s = function(b, d) {
    return new uh(this.H, this.Zb, d);
  });
  return new uh(b, vh, null);
};
function xh(a, b) {
  this.Ra = a;
  this.H = b;
}
function yh(a) {
  return eg(a.Ra);
}
function zh(a, b, c, d, e, g) {
  this.Va = a;
  this.ab = b;
  this.gb = c;
  this.$a = d;
  this.U = e;
  this.closed = g;
}
zh.prototype.Ea = function() {
  if (!this.closed) {
    for (this.closed = !0;;) {
      var a = this.Va.pop();
      if (null != a) {
        if (a.$(null)) {
          var b = a.W(null);
          ug(function(a) {
            return function() {
              return a.b ? a.b(null) : a.call(null, null);
            };
          }(b, a));
        }
      } else {
        break;
      }
    }
  }
  return null;
};
zh.prototype.Za = function(a, b) {
  if (b.$(null)) {
    if (null != this.U && 0 < Q(this.U)) {
      return b.W(null), wh(this.U.fc());
    }
    for (;;) {
      var c = this.gb.pop();
      if (null != c) {
        var d = c.Ra, c = c.H;
        if (d.$(null)) {
          return d = d.W(null), b.W(null), ug(d), wh(c);
        }
      } else {
        if (this.closed) {
          return b.W(null), wh(null);
        }
        64 < this.ab ? (this.ab = 0, kg(this.Va, eg)) : this.ab += 1;
        if (!(1024 > this.Va.length)) {
          throw Error([v("Assert failed: "), v([v("No more than "), v(1024), v(" pending takes are allowed on a single channel.")].join("")), v("\n"), v(Ge.e(N([xc(new D(null, "\x3c", "\x3c", -1640531467, null), xc(new D(null, ".-length", ".-length", 1395928862, null), new D(null, "takes", "takes", -1530407291, null)), new D("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", -1989946393, null))], 0)))].join(""));
        }
        jg(this.Va, b);
        return null;
      }
    }
  } else {
    return null;
  }
};
zh.prototype.Pa = function(a, b, c) {
  if (null == b) {
    throw Error([v("Assert failed: "), v("Can't put nil in on a channel"), v("\n"), v(Ge.e(N([xc(new D(null, "not", "not", -1640422260, null), xc(new D(null, "nil?", "nil?", -1637150201, null), new D(null, "val", "val", -1640415014, null)))], 0)))].join(""));
  }
  if (this.closed || !c.$(null)) {
    return wh(null);
  }
  for (;;) {
    if (a = this.Va.pop(), null != a) {
      if (a.$(null)) {
        var d = a.W(null);
        c = c.W(null);
        ug(function(a) {
          return function() {
            return a.b ? a.b(b) : a.call(null, b);
          };
        }(d, c, a));
        return wh(null);
      }
    } else {
      if (null == this.U || this.U.Eb()) {
        64 < this.$a ? (this.$a = 0, kg(this.gb, yh)) : this.$a += 1;
        if (!(1024 > this.gb.length)) {
          throw Error([v("Assert failed: "), v([v("No more than "), v(1024), v(" pending puts are allowed on a single channel."), v(" Consider using a windowed buffer.")].join("")), v("\n"), v(Ge.e(N([xc(new D(null, "\x3c", "\x3c", -1640531467, null), xc(new D(null, ".-length", ".-length", 1395928862, null), new D(null, "puts", "puts", -1637078787, null)), new D("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", -1989946393, null))], 0)))].join(""));
        }
        jg(this.gb, new xh(c, b));
        return null;
      }
      c = c.W(null);
      ng(this.U, b);
      return wh(null);
    }
  }
};
function Ah(a) {
  return new zh(lg(32), 0, lg(32), 0, a, null);
}
;var Bh = function() {
  function a(a) {
    for (;;) {
      if (0.5 > Math.random() && 15 > a) {
        a += 1;
      } else {
        return a;
      }
    }
  }
  function b() {
    return c.b(0);
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
  c.b = a;
  return c;
}();
function Ch(a, b, c) {
  this.key = a;
  this.H = b;
  this.forward = c;
  this.o = 0;
  this.f = 2155872256;
}
Ch.prototype.u = function(a, b, c) {
  return ze(b, Z, "[", " ", "]", c, this);
};
Ch.prototype.D = function() {
  return Fa(Fa(J, this.H), this.key);
};
var Dh = function() {
  function a(a, b, c) {
    c = Array(c + 1);
    for (var f = 0;;) {
      if (f < c.length) {
        c[f] = null, f += 1;
      } else {
        break;
      }
    }
    return new Ch(a, b, c);
  }
  function b(a) {
    return c.c(null, null, a);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}(), Eh = function() {
  function a(a, b, c, f) {
    for (;;) {
      if (0 > c) {
        return a;
      }
      a: {
        for (;;) {
          var k = a.forward[c];
          if (r(k)) {
            if (k.key < b) {
              a = k;
            } else {
              break a;
            }
          } else {
            break a;
          }
        }
        a = void 0;
      }
      null != f && (f[c] = a);
      c -= 1;
    }
  }
  function b(a, b, g) {
    return c.n(a, b, g, null);
  }
  var c = null, c = function(c, e, g, f) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, g);
      case 4:
        return a.call(this, c, e, g, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.n = a;
  return c;
}();
function Fh(a, b) {
  this.ya = a;
  this.aa = b;
  this.o = 0;
  this.f = 2155872256;
}
Fh.prototype.u = function(a, b, c) {
  return ze(b, function(a) {
    return ze(b, Z, "", " ", "", c, a);
  }, "{", ", ", "}", c, this);
};
Fh.prototype.D = function() {
  return function b(c) {
    return new Dc(null, function() {
      return null == c ? null : O(new X(null, 2, 5, Y, [c.key, c.H], null), b(c.forward[0]));
    }, null, null);
  }(this.ya.forward[0]);
};
Fh.prototype.put = function(a, b) {
  var c = Array(15), d = Eh.n(this.ya, a, this.aa, c).forward[0];
  if (null != d && d.key === a) {
    return d.H = b;
  }
  d = Bh.i();
  if (d > this.aa) {
    for (var e = this.aa + 1;;) {
      if (e <= d + 1) {
        c[e] = this.ya, e += 1;
      } else {
        break;
      }
    }
    this.aa = d;
  }
  for (d = Dh.c(a, b, Array(d));;) {
    return 0 <= this.aa ? (c = c[0].forward, d.forward[0] = c[0], c[0] = d) : null;
  }
};
Fh.prototype.remove = function(a) {
  var b = Array(15), c = Eh.n(this.ya, a, this.aa, b).forward[0];
  if (null != c && c.key === a) {
    for (a = 0;;) {
      if (a <= this.aa) {
        var d = b[a].forward;
        d[a] === c && (d[a] = c.forward[a]);
        a += 1;
      } else {
        break;
      }
    }
    for (;;) {
      if (0 < this.aa && null == this.ya.forward[this.aa]) {
        this.aa -= 1;
      } else {
        return null;
      }
    }
  } else {
    return null;
  }
};
function Gh(a) {
  for (var b = Hh, c = b.ya, d = b.aa;;) {
    if (0 > d) {
      return c === b.ya ? null : c;
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
var Hh = new Fh(Dh.b(0), 0);
function Ih(a) {
  var b = (new Date).valueOf() + a, c = Gh(b), c = r(r(c) ? c.key < b + 10 : c) ? c.H : null;
  if (r(c)) {
    return c;
  }
  var d = Ah(null);
  Hh.put(b, d);
  setTimeout(function() {
    Hh.remove(b);
    return d.Ea(null);
  }, a);
  return d;
}
;var Kh = function Jh(b) {
  "undefined" === typeof Xf && (Xf = function(b, d, e) {
    this.N = b;
    this.Gb = d;
    this.hc = e;
    this.o = 0;
    this.f = 393216;
  }, Xf.la = !0, Xf.ka = "cljs.core.async/t10466", Xf.ra = function(b, d) {
    return B(d, "cljs.core.async/t10466");
  }, Xf.prototype.$ = function() {
    return!0;
  }, Xf.prototype.W = function() {
    return this.N;
  }, Xf.prototype.r = function() {
    return this.hc;
  }, Xf.prototype.s = function(b, d) {
    return new Xf(this.N, this.Gb, d);
  });
  return new Xf(b, Jh, null);
}, Lh = function() {
  function a(a) {
    a = C.a(a, 0) ? null : a;
    return Ah("number" === typeof a ? new mg(lg(a), a) : a);
  }
  function b() {
    return c.b(null);
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
  c.b = a;
  return c;
}();
function Mh() {
  return null;
}
var Nh = function() {
  function a(a, b, c, d) {
    a = cg(a, b, Kh(c));
    r(r(a) ? $c.a(c, Mh) : a) && (r(d) ? c.i ? c.i() : c.call(null) : ug(c));
    return null;
  }
  function b(a, b, c) {
    return d.n(a, b, c, !0);
  }
  function c(a, b) {
    return d.c(a, b, Mh);
  }
  var d = null, d = function(d, g, f, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, f);
      case 4:
        return a.call(this, d, g, f, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.n = a;
  return d;
}();
function Oh(a) {
  for (var b = Array(a), c = 0;;) {
    if (c < a) {
      b[c] = 0, c += 1;
    } else {
      break;
    }
  }
  for (c = 1;;) {
    if (C.a(c, a)) {
      return b;
    }
    var d = oc(c);
    b[c] = b[d];
    b[d] = c;
    c += 1;
  }
}
var Qh = function Ph() {
  var b = Ke.b(!0);
  "undefined" === typeof Yf && (Yf = function(b, d, e) {
    this.xa = b;
    this.Xb = d;
    this.ic = e;
    this.o = 0;
    this.f = 393216;
  }, Yf.la = !0, Yf.ka = "cljs.core.async/t10479", Yf.ra = function(b, d) {
    return B(d, "cljs.core.async/t10479");
  }, Yf.prototype.$ = function() {
    return Xa(this.xa);
  }, Yf.prototype.W = function() {
    Le(this.xa, null);
    return!0;
  }, Yf.prototype.r = function() {
    return this.ic;
  }, Yf.prototype.s = function(b, d) {
    return new Yf(this.xa, this.Xb, d);
  });
  return new Yf(b, Ph, null);
}, Sh = function Rh(b, c) {
  "undefined" === typeof Zf && (Zf = function(b, c, g, f) {
    this.Ib = b;
    this.xa = c;
    this.Yb = g;
    this.jc = f;
    this.o = 0;
    this.f = 393216;
  }, Zf.la = !0, Zf.ka = "cljs.core.async/t10485", Zf.ra = function(b, c) {
    return B(c, "cljs.core.async/t10485");
  }, Zf.prototype.$ = function() {
    return eg(this.xa);
  }, Zf.prototype.W = function() {
    fg(this.xa);
    return this.Ib;
  }, Zf.prototype.r = function() {
    return this.jc;
  }, Zf.prototype.s = function(b, c) {
    return new Zf(this.Ib, this.xa, this.Yb, c);
  });
  return new Zf(c, b, Rh, null);
};
function qh(a, b, c) {
  var d = Qh(), e = Q(b), g = Oh(e), f = vf.b(c), k = function() {
    for (var c = 0;;) {
      if (c < e) {
        var k = r(f) ? c : g[c], n = R.a(b, k), q = ac(n) ? n.b ? n.b(0) : n.call(null, 0) : null, x = r(q) ? function() {
          var b = n.b ? n.b(1) : n.call(null, 1);
          return cg(q, b, Sh(d, function(b, c, d, e, g) {
            return function() {
              return a.b ? a.b(new X(null, 2, 5, Y, [null, g], null)) : a.call(null, new X(null, 2, 5, Y, [null, g], null));
            };
          }(c, b, k, n, q, d, e, g, f)));
        }() : bg(n, Sh(d, function(b, c, d) {
          return function(b) {
            return a.b ? a.b(new X(null, 2, 5, Y, [b, d], null)) : a.call(null, new X(null, 2, 5, Y, [b, d], null));
          };
        }(c, k, n, q, d, e, g, f)));
        if (r(x)) {
          return wh(new X(null, 2, 5, Y, [Xa(x), function() {
            var a = q;
            return r(a) ? a : n;
          }()], null));
        }
        c += 1;
      } else {
        return null;
      }
    }
  }();
  return r(k) ? k : S.c(c, Cb, ec) !== ec && (k = function() {
    var a = d.$(null);
    return r(a) ? d.W(null) : a;
  }(), r(k)) ? wh(new X(null, 2, 5, Y, [Cb.b(c), Cb], null)) : null;
}
var Uh = function Th(b, c) {
  "undefined" === typeof $f && ($f = function(b, c, g, f) {
    this.ch = b;
    this.N = c;
    this.eb = g;
    this.fb = f;
    this.o = 0;
    this.f = 393216;
  }, $f.la = !0, $f.ka = "cljs.core.async/t10501", $f.ra = function(b, c) {
    return B(c, "cljs.core.async/t10501");
  }, $f.prototype.Pa = function(b, c, g) {
    return cg(this.ch, c, g);
  }, $f.prototype.Za = function(b, c) {
    var g = this, f = this, k = bg(g.ch, function() {
      "undefined" === typeof ag && (ag = function(b, c, d, e, g, f, k) {
        this.Fb = b;
        this.Wb = c;
        this.fb = d;
        this.ch = e;
        this.N = g;
        this.eb = f;
        this.kc = k;
        this.o = 0;
        this.f = 393216;
      }, ag.la = !0, ag.ka = "cljs.core.async/t10504", ag.ra = function(b, c) {
        return B(c, "cljs.core.async/t10504");
      }, ag.prototype.$ = function() {
        return eg(this.Fb);
      }, ag.prototype.W = function() {
        var b = this;
        return function(c) {
          return function(d) {
            return c.b ? c.b(null == d ? null : b.N.b ? b.N.b(d) : b.N.call(null, d)) : c.call(null, null == d ? null : b.N.b ? b.N.b(d) : b.N.call(null, d));
          };
        }(fg(b.Fb), this);
      }, ag.prototype.r = function() {
        return this.kc;
      }, ag.prototype.s = function(b, c) {
        return new ag(this.Fb, this.Wb, this.fb, this.ch, this.N, this.eb, c);
      });
      return new ag(c, f, g.fb, g.ch, g.N, g.eb, null);
    }());
    return r(r(k) ? null != Xa(k) : k) ? wh(g.N.b ? g.N.b(Xa(k)) : g.N.call(null, Xa(k))) : k;
  }, $f.prototype.Ea = function() {
    return dg(this.ch);
  }, $f.prototype.r = function() {
    return this.fb;
  }, $f.prototype.s = function(b, c) {
    return new $f(this.ch, this.N, this.eb, c);
  });
  return new $f(c, b, Th, null);
}, Vh = function() {
  function a(a, b, c) {
    var f = Lh.b(c), k = Lh.b(1);
    ug(function() {
      var c = function() {
        return function(a) {
          return function() {
            function b(c) {
              for (;;) {
                var d = function() {
                  try {
                    for (;;) {
                      var b = a(c);
                      if (!zc(b, $)) {
                        return b;
                      }
                    }
                  } catch (d) {
                    if (d instanceof Object) {
                      return c[5] = d, th(c), $;
                    }
                    if (t) {
                      throw d;
                    }
                    return null;
                  }
                }();
                if (!zc(d, $)) {
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
            d.b = b;
            return d;
          }();
        }(function(c) {
          var g = c[1];
          return 1 === g ? (c[2] = null, c[1] = 2, $) : 2 === g ? oh(c, 4, b) : 3 === g ? (g = c[2], sh(c, g)) : 4 === g ? (g = c[7], g = c[2], c[7] = g, c[1] = r(null == g) ? 5 : 6, $) : 5 === g ? (g = dg(f), c[2] = g, c[1] = 7, $) : 6 === g ? (g = c[7], g = a.b ? a.b(g) : a.call(null, g), c[1] = r(g) ? 8 : 9, $) : 7 === g ? (g = c[2], c[2] = g, c[1] = 3, $) : 8 === g ? (g = c[7], ph(c, 11, f, g)) : 9 === g ? (c[2] = null, c[1] = 10, $) : 10 === g ? (c[8] = c[2], c[2] = null, c[1] = 2, $) : 11 === 
          g ? (g = c[2], c[2] = g, c[1] = 10, $) : null;
        });
      }(), g = function() {
        var a = c.i ? c.i() : c.call(null);
        a[6] = k;
        return a;
      }();
      return nh(g);
    });
    return f;
  }
  function b(a, b) {
    return c.c(a, b, null);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Wh = function() {
  function a(a, b, c) {
    var f = Lh.b(1);
    ug(function() {
      var k = function() {
        return function(a) {
          return function() {
            function b(c) {
              for (;;) {
                var d = function() {
                  try {
                    for (;;) {
                      var b = a(c);
                      if (!zc(b, $)) {
                        return b;
                      }
                    }
                  } catch (d) {
                    if (d instanceof Object) {
                      return c[5] = d, th(c), $;
                    }
                    if (t) {
                      throw d;
                    }
                    return null;
                  }
                }();
                if (!zc(d, $)) {
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
            d.b = b;
            return d;
          }();
        }(function(f) {
          var k = f[1];
          return 1 === k ? (f[2] = null, f[1] = 2, $) : 2 === k ? oh(f, 4, a) : 3 === k ? (k = f[2], sh(f, k)) : 4 === k ? (k = f[7], k = f[2], f[7] = k, f[1] = r(null == k) ? 5 : 6, $) : 5 === k ? (f[1] = r(c) ? 8 : 9, $) : 6 === k ? (k = f[7], ph(f, 11, b, k)) : 7 === k ? (k = f[2], f[2] = k, f[1] = 3, $) : 8 === k ? (k = dg(b), f[2] = k, f[1] = 10, $) : 9 === k ? (f[2] = null, f[1] = 10, $) : 10 === k ? (k = f[2], f[2] = k, f[1] = 7, $) : 11 === k ? (f[8] = f[2], f[2] = null, f[1] = 2, $) : null;
        });
      }(), l = function() {
        var a = k.i ? k.i() : k.call(null);
        a[6] = f;
        return a;
      }();
      return nh(l);
    });
    return b;
  }
  function b(a, b) {
    return c.c(a, b, !0);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Xh = function() {
  function a(a, b) {
    var c = Lh.b(b), f = Lh.b(1);
    ug(function() {
      var b = function() {
        return function(a) {
          return function() {
            function b(c) {
              for (;;) {
                var d = function() {
                  try {
                    for (;;) {
                      var b = a(c);
                      if (!zc(b, $)) {
                        return b;
                      }
                    }
                  } catch (d) {
                    if (d instanceof Object) {
                      return c[5] = d, th(c), $;
                    }
                    if (t) {
                      throw d;
                    }
                    return null;
                  }
                }();
                if (!zc(d, $)) {
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
            d.b = b;
            return d;
          }();
        }(function(b) {
          var e = b[1];
          if (1 === e) {
            var f = Ed(a);
            b[7] = f;
            b[2] = null;
            b[1] = 2;
            return $;
          }
          if (2 === e) {
            var f = b[7], k = 0 < Q(f);
            b[1] = r(k) ? 4 : 5;
            return $;
          }
          if (3 === e) {
            return k = b[2], sh(b, k);
          }
          if (4 === e) {
            return f = b[7], rh(b, 7, f);
          }
          if (5 === e) {
            return k = dg(c), b[2] = k, b[1] = 6, $;
          }
          if (6 === e) {
            return k = b[2], b[2] = k, b[1] = 3, $;
          }
          if (7 === e) {
            var l = b[8], K = b[9], k = b[2], U = R.c(k, 0, null), V = R.c(k, 1, null);
            b[8] = k;
            b[9] = U;
            b[10] = V;
            b[1] = r(null == U) ? 8 : 9;
            return $;
          }
          return 8 === e ? (f = b[7], l = b[8], K = b[9], V = b[10], k = md(function() {
            return function(a) {
              return function(b) {
                return $c.a(a, b);
              };
            }(V, K, l, f, f, l, K, V, e);
          }(), f), b[7] = k, b[2] = null, b[1] = 2, $) : 9 === e ? (K = b[9], ph(b, 11, c, K)) : 10 === e ? (k = b[2], b[2] = k, b[1] = 6, $) : 11 === e ? (f = b[7], k = b[2], b[7] = f, b[11] = k, b[2] = null, b[1] = 2, $) : null;
        });
      }(), e = function() {
        var a = b.i ? b.i() : b.call(null);
        a[6] = f;
        return a;
      }();
      return nh(e);
    });
    return c;
  }
  function b(a) {
    return c.a(a, null);
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
  c.b = b;
  c.a = a;
  return c;
}(), Yh = function() {
  function a(a, b) {
    var c = Lh.b(b), f = Lh.b(1);
    ug(function() {
      var b = function() {
        return function(a) {
          return function() {
            function b(c) {
              for (;;) {
                var d = function() {
                  try {
                    for (;;) {
                      var b = a(c);
                      if (!zc(b, $)) {
                        return b;
                      }
                    }
                  } catch (d) {
                    if (d instanceof Object) {
                      return c[5] = d, th(c), $;
                    }
                    if (t) {
                      throw d;
                    }
                    return null;
                  }
                }();
                if (!zc(d, $)) {
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
            d.b = b;
            return d;
          }();
        }(function(b) {
          var e = b[1];
          if (1 === e) {
            var f;
            b[7] = null;
            b[2] = null;
            b[1] = 2;
            return $;
          }
          return 2 === e ? oh(b, 4, a) : 3 === e ? (e = b[2], f = dg(c), b[8] = e, sh(b, f)) : 4 === e ? (e = b[9], e = b[2], f = wa(null == e), b[9] = e, b[1] = f ? 5 : 6, $) : 5 === e ? (e = b[9], f = b[7], e = C.a(e, f), b[1] = e ? 8 : 9, $) : 6 === e ? (b[2] = null, b[1] = 7, $) : 7 === e ? (e = b[2], b[2] = e, b[1] = 3, $) : 8 === e ? (f = b[7], b[7] = f, b[2] = null, b[1] = 2, $) : 9 === e ? (e = b[9], ph(b, 11, c, e)) : 10 === e ? (e = b[2], b[2] = e, b[1] = 7, $) : 11 === e ? (e = b[9], f = 
          b[2], b[10] = f, b[7] = e, b[2] = null, b[1] = 2, $) : null;
        });
      }(), e = function() {
        var a = b.i ? b.i() : b.call(null);
        a[6] = f;
        return a;
      }();
      return nh(e);
    });
    return c;
  }
  function b(a) {
    return c.a(a, null);
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
  c.b = b;
  c.a = a;
  return c;
}();
var Zh = mc(20, 3), $h = mc(16, 2), ai = Ed(fd.c(Fd, fd.c(ic, ye.b(3), id.b(Zh)), id.b($h))), bi = new oa(null, 4, [Ne, new oa(null, 2, [of, ai, lf, new X(null, 2, 5, Y, [1, 0], null)], null), af, nd, Qe, 300, Me, null], null);
function ci() {
  return new X(null, 2, 5, Y, [oc(20), oc(16)], null);
}
function di(a, b) {
  if (3 > Q(a)) {
    for (var c = ld(te, Wc.a(a, od.a(b, new X(null, 2, 5, Y, [Ne, of], null)))), d = ci(), e = 30;;) {
      if (C.a(e, 0)) {
        return a;
      }
      if (wa(c.b ? c.b(d) : c.call(null, d))) {
        return Qb.a(a, d);
      }
      if (t) {
        d = ci(), e -= 1;
      } else {
        return null;
      }
    }
  } else {
    return a;
  }
}
var ei = function() {
  function a(a, b, c) {
    var f = Lh.b(1);
    ug(function() {
      var k = function() {
        return function(a) {
          return function() {
            function b(c) {
              for (;;) {
                var d = function() {
                  try {
                    for (;;) {
                      var b = a(c);
                      if (!zc(b, $)) {
                        return b;
                      }
                    }
                  } catch (d) {
                    if (d instanceof Object) {
                      return c[5] = d, th(c), $;
                    }
                    if (t) {
                      throw d;
                    }
                    return null;
                  }
                }();
                if (!zc(d, $)) {
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
            d.b = b;
            return d;
          }();
        }(function(f) {
          var k = f[1];
          if (2 === k) {
            var k = f[2], l = Nh.a(b, new X(null, 1, 5, Y, [kf], null));
            f[7] = k;
            return sh(f, l);
          }
          return 1 === k ? (k = [Ih(a), c], k = new X(null, 2, 5, Y, k, null), rh(f, 2, k)) : null;
        });
      }(), l = function() {
        var a = k.i ? k.i() : k.call(null);
        a[6] = f;
        return a;
      }();
      return nh(l);
    });
    return f;
  }
  function b(a, b) {
    return c.c(a, b, Lh.i());
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
var fi = function() {
  function a(a, b, c, f) {
    return[v("hsla("), v(a), v(","), v(b), v("%,"), v(c), v("%,"), v(f), v(")")].join("");
  }
  function b(a, b, g) {
    return c.n(a, b, g, 1);
  }
  var c = null, c = function(c, e, g, f) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, g);
      case 4:
        return a.call(this, c, e, g, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.n = a;
  return c;
}(), gi = 2 * Math.PI;
function hi(a, b) {
  var c = T.c(we, a, b);
  return O(c, kd(cd(function(a) {
    return c === a;
  }), b));
}
var ii = function() {
  function a(a, b) {
    return Q(a) < Q(b) ? za.c(Qb, b, a) : za.c(Qb, a, b);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      a = hi(Q, Qb.e(d, c, N([a], 0)));
      return za.c(ld, G(a), H(a));
    }
    a.k = 2;
    a.g = function(a) {
      var c = G(a);
      a = L(a);
      var d = G(a);
      a = H(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 0:
        return te;
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.g = c.g;
  b.i = function() {
    return te;
  };
  b.b = function(a) {
    return a;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
var ji = Ke.b(null), ki = document.getElementById("cnake"), li = ki.getContext("2d");
function mi(a) {
  return fd.a(ed.a(jc, 10), a);
}
var ni = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = N(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    return fd.c(ic, a, b);
  }
  a.k = 1;
  a.g = function(a) {
    var d = G(a);
    a = H(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}();
function oi(a) {
  var b;
  b = [v(16), v(" "), v("bold"), v("pt "), v("monospace")].join("");
  li.font = b;
  li.textAlign = "center";
  li.fillStyle = T.a(fi, new X(null, 3, 5, Y, [0, 0, 0], null));
  a = a.split("\n");
  b = mc(Q(a), 2);
  b = F(fd.c(Fd, a, ye.a(-b, b + 1)));
  for (var c = null, d = 0, e = 0;;) {
    if (e < d) {
      var g = c.O(null, e);
      a = R.c(g, 0, null);
      var g = R.c(g, 1, null), f = mc(200, 2), g = mc(160, 2) + 18 * g;
      li.fillText(a, f, g);
      e += 1;
    } else {
      if (a = F(b)) {
        b = a, bc(b) ? (c = ub(b), b = vb(b), a = c, d = Q(c), c = a) : (c = G(b), a = R.c(c, 0, null), g = R.c(c, 1, null), c = mc(200, 2), d = mc(160, 2) + 18 * g, li.fillText(a, c, d), b = L(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
}
ye.a(-1.5, 1.5);
oi("hola\ncu\nlo");
var pi = new X(null, 3, 5, Y, [0, 100, 40], null), qi = new X(null, 3, 5, Y, [140, 50, 40], null);
function ri(a) {
  var b = fc(a) ? T.a(pe, a) : a;
  a = S.a(b, af);
  b = S.a(b, Ne);
  return new oa(null, 2, [Ne, fd.a(mi, of.b(b)), af, fd.a(function(a) {
    return ni.e(mi(a), N([5, 5], 0));
  }, a)], null);
}
var si = new oa(null, 6, [37, jf, 38, rf, 39, hf, 40, nf, 32, ff, 13, ef], null);
function ti(a) {
  return S.c(si, a.keyCode, sf);
}
var ui = function() {
  function a(a, b) {
    var c = Lh.i();
    Bg(document.body, a, function(a) {
      return Nh.a(c, b.b ? b.b(a) : b.call(null, a));
    });
    return c;
  }
  function b(a) {
    return c.a(a, bd);
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
  c.b = b;
  c.a = a;
  return c;
}();
function vi(a, b) {
  var c = ui.a(a, ti);
  return Vh.a(b, c);
}
var wi = new re(null, new oa(null, 1, [ff, null], null), null), xi = new re(null, new oa(null, 4, [hf, null, jf, null, nf, null, rf, null], null), null), yi = new re(null, new oa(null, 1, [ef, null], null), null), zi = ii.e(xi, wi, N([yi], 0));
var la = !1, ka = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return console.log.apply(console, Aa.b ? Aa.b(a) : Aa.call(null, a));
  }
  a.k = 0;
  a.g = function(a) {
    a = F(a);
    return b(a);
  };
  a.e = b;
  return a;
}(), Ai = Lh.i(), Bi = Lh.i();
(function(a, b) {
  var c = Lh.b(1);
  ug(function() {
    var d = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var d = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!zc(b, $)) {
                      return b;
                    }
                  }
                } catch (d) {
                  if (d instanceof Object) {
                    return c[5] = d, th(c), $;
                  }
                  if (t) {
                    throw d;
                  }
                  return null;
                }
              }();
              if (!zc(d, $)) {
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
          d.b = b;
          return d;
        }();
      }(function(c) {
        var d = c[1];
        if (1 === d) {
          var e = fc(bi), l = c;
          l[1] = e ? 2 : 3;
          return $;
        }
        if (2 === d) {
          var p = T.a(pe, bi), n = l = c;
          n[2] = p;
          n[1] = 4;
          return $;
        }
        if (3 === d) {
          var q = l = c;
          q[2] = bi;
          q[1] = 4;
          return $;
        }
        if (4 === d) {
          var x = c[2], M = S.a(x, Qe), K = S.a(x, af), U = S.a(x, Ne), V = S.a(x, Me), I = bi;
          c[7] = K;
          c[8] = M;
          c[9] = V;
          c[10] = U;
          c[11] = I;
          var sa = l = c;
          sa[2] = null;
          sa[1] = 5;
          return $;
        }
        if (5 === d) {
          var I = c[11], Ga = fc(I), l = c;
          l[1] = Ga ? 7 : 8;
          return $;
        }
        if (6 === d) {
          var Fb = c[2], l = c;
          return sh(l, Fb);
        }
        if (7 === d) {
          var I = c[11], Cc = T.a(pe, I), Eg = l = c;
          Eg[2] = Cc;
          Eg[1] = 9;
          return $;
        }
        if (8 === d) {
          var I = c[11], Fg = l = c;
          Fg[2] = I;
          Fg[1] = 9;
          return $;
        }
        if (9 === d) {
          var yb = c[12], Nc = c[2], Ue = S.a(Nc, Qe), Ci = S.a(Nc, af), Ve = S.a(Nc, Ne), Oc = S.a(Nc, Me);
          c[13] = Oc;
          c[14] = Ve;
          c[15] = Ci;
          c[12] = Nc;
          c[16] = Ue;
          l = c;
          return oh(l, 10, a);
        }
        if (10 === d) {
          var Oc = c[13], Hd = c[17], Gg = c[2], Hg = R.c(Gg, 0, null), Pc = R.c(Gg, 1, null), Di = C.a(Oc, qf), Ei = $c.a(Hg, pf), Fi = Di && Ei;
          c[17] = Hg;
          c[18] = Pc;
          l = c;
          l[1] = r(Fi) ? 11 : 12;
          return $;
        }
        if (11 === d) {
          I = yb = c[12];
          c[11] = I;
          var Ig = l = c;
          Ig[2] = null;
          Ig[1] = 5;
          return $;
        }
        if (12 === d) {
          var Hd = c[17], l = c, Qc = Hd;
          C.a(mf, Qc) ? l[1] = 28 : C.a(uf, Qc) ? l[1] = 27 : C.a(kf, Qc) ? l[1] = 20 : C.a(pf, Qc) ? l[1] = 16 : C.a(Re, Qc) ? l[1] = 15 : t && (l[1] = 29);
          return $;
        }
        if (13 === d) {
          var Gi = c[2], Jg = l = c;
          Jg[2] = Gi;
          Jg[1] = 6;
          return $;
        }
        if (14 === d) {
          var Hi = c[2], Kg = l = c;
          Kg[2] = Hi;
          Kg[1] = 13;
          return $;
        }
        if (15 === d) {
          var yb = c[12], Ii = ei.a(0, a), I = yb;
          c[19] = Ii;
          c[11] = I;
          var Lg = l = c;
          Lg[2] = null;
          Lg[1] = 5;
          return $;
        }
        if (16 === d) {
          var Oc = c[13], Ji = C.a(Oc, qf), l = c;
          l[1] = Ji ? 17 : 18;
          return $;
        }
        if (17 === d) {
          var Ki = Nh.a(a, new X(null, 1, 5, Y, [Re], null)), Mg = l = c;
          Mg[2] = Ki;
          Mg[1] = 19;
          return $;
        }
        if (18 === d) {
          var Ng = l = c;
          Ng[2] = null;
          Ng[1] = 19;
          return $;
        }
        if (19 === d) {
          var Li = c[2], I = bi;
          c[20] = Li;
          c[11] = I;
          var Og = l = c;
          Og[2] = null;
          Og[1] = 5;
          return $;
        }
        if (20 === d) {
          var yb = c[12], Pg = c[21], qc = c[22], Rc;
          var We = yb, Tb = fc(We) ? T.a(pe, We) : We, Xe = S.a(Tb, af), nb = S.a(Tb, Ne), Ra, Ye, Mi = lf.b(nb), Ze = tf.b(nb), Ni = C.a(new X(null, 2, 5, Y, [0, 0], null), fd.c(ic, Ze, Mi));
          Ye = r(Ze) ? Vb.a(Ni ? nb : Ub.c(nb, lf, Ze), tf) : nb;
          var Qg = of.b(nb), Oi = Pb(Qg), Rg, Pi = fd.c(ic, Oi, lf.b(Ye));
          Rg = fd.c(lc, Pi, new X(null, 2, 5, Y, [20, 16], null));
          Ra = Ub.c(Ye, of, Qb.a(Jd.a(Qg, 1), Rg));
          var Sg, Qi = fc(Ra) ? T.a(pe, Ra) : Ra, Tg = S.a(Qi, of), Ug = Pb(Tg), $e = dd.c(wa, va, ld(te, ve(Tg)));
          Sg = $e.b ? $e.b(Ug) : $e.call(null, Ug);
          if (r(Sg)) {
            Rc = Ub.c(Tb, Me, qf);
          } else {
            var Sc, Ri = fc(Ra) ? T.a(pe, Ra) : Ra, Si = S.a(Ri, of);
            b: {
              for (var Tc = ue([Pb(Si)]), Uc = Xe;;) {
                if (F(Uc)) {
                  var Vg = Tc.b ? Tc.b(G(Uc)) : Tc.call(null, G(Uc));
                  if (r(Vg)) {
                    Sc = Vg;
                    break b;
                  }
                  var Ti = Tc, Ui = L(Uc), Tc = Ti, Uc = Ui;
                } else {
                  Sc = null;
                  break b;
                }
              }
              Sc = void 0;
            }
            if (r(Sc)) {
              var Wg, Xg = fc(Ra) ? T.a(pe, Ra) : Ra, Vi = S.a(Xg, of), Wi = fc(nb) ? T.a(pe, nb) : nb, Xi = S.a(Wi, of);
              Wg = Ub.c(Xg, of, Qb.a(Xi, Pb(Vi)));
              var Yi = ue([Sc]), Zi = di(kd(cd(Yi), Xe), Tb);
              Rc = Ub.e(Tb, Ne, Wg, N([af, Zi, Me, df], 0));
            } else {
              Rc = Ub.e(Tb, Ne, Ra, N([af, di(Xe, Tb), Me, gf], 0));
            }
          }
          var Yg = Me.b(Rc), $i = C.a(Yg, qf);
          c[21] = Yg;
          c[22] = Rc;
          l = c;
          l[1] = $i ? 21 : 22;
          return $;
        }
        if (21 === d) {
          var aj = new X(null, 1, 5, Y, [qf], null), l = c;
          return ph(l, 24, b, aj);
        }
        if (22 === d) {
          var Pg = c[21], Ue = c[16], bj = ei.a(Ue, a), cj = new X(null, 1, 5, Y, [Pg], null);
          c[23] = bj;
          l = c;
          return ph(l, 25, b, cj);
        }
        if (23 === d) {
          var dj = c[2], Zg = l = c;
          Zg[2] = dj;
          Zg[1] = 14;
          return $;
        }
        if (24 === d) {
          var qc = c[22], ej = c[2], I = qc;
          c[24] = ej;
          c[11] = I;
          var $g = l = c;
          $g[2] = null;
          $g[1] = 5;
          return $;
        }
        if (25 === d) {
          var qc = c[22], fj = new X(null, 2, 5, Y, [Se, qc], null);
          c[25] = c[2];
          l = c;
          return ph(l, 26, b, fj);
        }
        if (26 === d) {
          var qc = c[22], gj = c[2], I = qc;
          c[26] = gj;
          c[11] = I;
          var ah = l = c;
          ah[2] = null;
          ah[1] = 5;
          return $;
        }
        if (27 === d) {
          var Ve = c[14], Pc = c[18], yb = c[12], bh, ch = Ve, Id = Pc, hj = C.a(hf, Id) ? new X(null, 2, 5, Y, [1, 0], null) : C.a(jf, Id) ? new X(null, 2, 5, Y, [-1, 0], null) : C.a(nf, Id) ? new X(null, 2, 5, Y, [0, 1], null) : C.a(rf, Id) ? new X(null, 2, 5, Y, [0, -1], null) : t ? lf.b(ch) : null;
          bh = Ub.c(ch, tf, hj);
          I = Ub.c(yb, Ne, bh);
          c[11] = I;
          var dh = l = c;
          dh[2] = null;
          dh[1] = 5;
          return $;
        }
        if (28 === d) {
          var Pc = c[18], eh = yb = c[12], ij = Pc, fh = Qe.b(eh), I = Ub.c(eh, Qe, r(ij) ? fh / 4 : 4 * fh);
          c[11] = I;
          var gh = l = c;
          gh[2] = null;
          gh[1] = 5;
          return $;
        }
        if (29 === d) {
          var Hd = c[17], jj = [v("Unrecognized game command: "), v(Hd)].join("");
          throw Error(jj);
        }
        return null;
      });
    }(), e = function() {
      var a = d.i ? d.i() : d.call(null);
      a[6] = c;
      return a;
    }();
    return nh(e);
  });
})(Ai, Bi);
var kj = vi("keydown", zi), lj = vi("keyup", wi), mj = Yh.b(Xh.b(new X(null, 2, 5, Y, [Uh(function(a) {
  return r(xi.b ? xi.b(a) : xi.call(null, a)) ? new X(null, 2, 5, Y, [uf, a], null) : r(yi.b ? yi.b(a) : yi.call(null, a)) ? new X(null, 1, 5, Y, [pf], null) : r(wi.b ? wi.b(a) : wi.call(null, a)) ? new X(null, 2, 5, Y, [mf, !0], null) : null;
}, kj), Uh(function(a) {
  return r(wi.b ? wi.b(a) : wi.call(null, a)) ? new X(null, 2, 5, Y, [mf, !1], null) : null;
}, lj)], null)));
Wh.a(mj, Ai);
ki.width = 200;
ki.height = 160;
(function(a) {
  var b = Lh.b(1);
  ug(function() {
    var c = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var d = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!zc(b, $)) {
                      return b;
                    }
                  }
                } catch (d) {
                  if (d instanceof Object) {
                    return c[5] = d, th(c), $;
                  }
                  if (t) {
                    throw d;
                  }
                  return null;
                }
              }();
              if (!zc(d, $)) {
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
          d.b = b;
          return d;
        }();
      }(function(b) {
        var c = b[1];
        if (9 === c) {
          var d = b[2];
          b[7] = d;
          b[2] = null;
          b[1] = 3;
          return $;
        }
        if (8 === c) {
          return c = b[8], c = [v("Unrecognized UI command: "), v(c)].join(""), c = He.e(N([Error(c)], 0)), b[2] = c, b[1] = 5, $;
        }
        if (7 === c) {
          return d = Le(ji, null), c = oi("GAME OVER\nPress Enter to restart"), b[9] = d, b[2] = c, b[1] = 5, $;
        }
        if (6 === c) {
          return d = b[10], c = ri(d), c = Le(ji, c), b[2] = c, b[1] = 5, $;
        }
        if (5 === c) {
          return b[11] = b[2], oh(b, 9, a);
        }
        if (4 === c) {
          return c = b[2], sh(b, c);
        }
        if (3 === c) {
          return d = b[7], c = R.c(d, 0, null), d = R.c(d, 1, null), b[10] = d, b[8] = c, C.a(qf, c) ? b[1] = 7 : C.a(Se, c) ? b[1] = 6 : t && (b[1] = 8), $;
        }
        if (2 === c) {
          var c = b[2], d = R.c(c, 0, null), k = R.c(c, 1, null);
          b[12] = k;
          b[13] = d;
          b[7] = c;
          b[2] = null;
          b[1] = 3;
          return $;
        }
        return 1 === c ? oh(b, 2, a) : null;
      });
    }(), d = function() {
      var a = c.i ? c.i() : c.call(null);
      a[6] = b;
      return a;
    }();
    return nh(d);
  });
  return requestAnimationFrame(function d() {
    requestAnimationFrame(d);
    var a;
    a = Xa(ji);
    var b = fc(a) ? T.a(pe, a) : a, f = S.a(b, af);
    a = S.a(b, Ne);
    if (r(b)) {
      li.clearRect(0, 0, 200, 160);
      li.save();
      li.translate(0.5, 0.5);
      b: {
        li.fillStyle = T.a(fi, qi);
        for (var k = F(f), l = null, p = 0, n = 0;;) {
          if (n < p) {
            var f = l.O(null, n), b = R.c(f, 0, null), f = R.c(f, 1, null), q = li, x = b, M = f;
            q.beginPath();
            q.arc(x, M, 4, 0, gi, !0);
            q.fill();
            q = li;
            q.beginPath();
            q.arc(b, f, 4, 0, gi, !0);
            q.stroke();
            n += 1;
          } else {
            if (b = F(k)) {
              k = b, bc(k) ? (f = ub(k), k = vb(k), b = f, f = Q(f), l = b, p = f) : (f = G(k), b = R.c(f, 0, null), f = R.c(f, 1, null), l = li, p = b, n = f, l.beginPath(), l.arc(p, n, 4, 0, gi, !0), l.fill(), l = li, l.beginPath(), l.arc(b, f, 4, 0, gi, !0), l.stroke(), k = L(k), l = null, p = 0), n = 0;
            } else {
              break b;
            }
          }
        }
      }
      b: {
        for (li.fillStyle = T.a(fi, pi), a = F(a), f = null, l = k = 0;;) {
          if (l < k) {
            p = f.O(null, l), b = R.c(p, 0, null), p = R.c(p, 1, null), li.fillRect(b, p, 10, 10), li.strokeRect(b, p, 10, 10), l += 1;
          } else {
            if (a = F(a)) {
              bc(a) ? (f = ub(a), a = vb(a), b = f, k = Q(f), f = b) : (f = G(a), b = R.c(f, 0, null), p = R.c(f, 1, null), li.fillRect(b, p, 10, 10), li.strokeRect(b, p, 10, 10), a = L(a), f = null, k = 0), l = 0;
            } else {
              break b;
            }
          }
        }
      }
      a = li.restore();
    } else {
      a = null;
    }
    return a;
  });
})(Bi);
Nh.a(Ai, new X(null, 1, 5, Y, [Re], null));

})();
