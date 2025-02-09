goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15022 = (function (f,blockable,meta15023){
this.f = f;
this.blockable = blockable;
this.meta15023 = meta15023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15024,meta15023__$1){
var self__ = this;
var _15024__$1 = this;
return (new cljs.core.async.t_cljs$core$async15022(self__.f,self__.blockable,meta15023__$1));
}));

(cljs.core.async.t_cljs$core$async15022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15024){
var self__ = this;
var _15024__$1 = this;
return self__.meta15023;
}));

(cljs.core.async.t_cljs$core$async15022.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15022.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15022.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15022.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15022.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15023","meta15023",-1740157958,null)], null);
}));

(cljs.core.async.t_cljs$core$async15022.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15022");

(cljs.core.async.t_cljs$core$async15022.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15022");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15022.
 */
cljs.core.async.__GT_t_cljs$core$async15022 = (function cljs$core$async$__GT_t_cljs$core$async15022(f,blockable,meta15023){
return (new cljs.core.async.t_cljs$core$async15022(f,blockable,meta15023));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15021 = arguments.length;
switch (G__15021) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async15022(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__15037 = arguments.length;
switch (G__15037) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__15047 = arguments.length;
switch (G__15047) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__15068 = arguments.length;
switch (G__15068) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_18122 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18122) : fn1.call(null, val_18122));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18122) : fn1.call(null, val_18122));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15089 = arguments.length;
switch (G__15089) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___18124 = n;
var x_18125 = (0);
while(true){
if((x_18125 < n__5593__auto___18124)){
(a[x_18125] = x_18125);

var G__18126 = (x_18125 + (1));
x_18125 = G__18126;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15111 = (function (flag,meta15112){
this.flag = flag;
this.meta15112 = meta15112;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15113,meta15112__$1){
var self__ = this;
var _15113__$1 = this;
return (new cljs.core.async.t_cljs$core$async15111(self__.flag,meta15112__$1));
}));

(cljs.core.async.t_cljs$core$async15111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15113){
var self__ = this;
var _15113__$1 = this;
return self__.meta15112;
}));

(cljs.core.async.t_cljs$core$async15111.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15111.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15111.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15111.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15111.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15112","meta15112",459452257,null)], null);
}));

(cljs.core.async.t_cljs$core$async15111.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15111.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15111");

(cljs.core.async.t_cljs$core$async15111.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15111");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15111.
 */
cljs.core.async.__GT_t_cljs$core$async15111 = (function cljs$core$async$__GT_t_cljs$core$async15111(flag,meta15112){
return (new cljs.core.async.t_cljs$core$async15111(flag,meta15112));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async15111(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15125 = (function (flag,cb,meta15126){
this.flag = flag;
this.cb = cb;
this.meta15126 = meta15126;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15127,meta15126__$1){
var self__ = this;
var _15127__$1 = this;
return (new cljs.core.async.t_cljs$core$async15125(self__.flag,self__.cb,meta15126__$1));
}));

(cljs.core.async.t_cljs$core$async15125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15127){
var self__ = this;
var _15127__$1 = this;
return self__.meta15126;
}));

(cljs.core.async.t_cljs$core$async15125.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15125.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15125.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15125.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15125.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15126","meta15126",985763536,null)], null);
}));

(cljs.core.async.t_cljs$core$async15125.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15125.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15125");

(cljs.core.async.t_cljs$core$async15125.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15125");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15125.
 */
cljs.core.async.__GT_t_cljs$core$async15125 = (function cljs$core$async$__GT_t_cljs$core$async15125(flag,cb,meta15126){
return (new cljs.core.async.t_cljs$core$async15125(flag,cb,meta15126));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async15125(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15139_SHARP_){
var G__15151 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15139_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15151) : fret.call(null, G__15151));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15140_SHARP_){
var G__15155 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15140_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15155) : fret.call(null, G__15155));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18146 = (i + (1));
i = G__18146;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18147 = arguments.length;
var i__5727__auto___18148 = (0);
while(true){
if((i__5727__auto___18148 < len__5726__auto___18147)){
args__5732__auto__.push((arguments[i__5727__auto___18148]));

var G__18149 = (i__5727__auto___18148 + (1));
i__5727__auto___18148 = G__18149;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15171){
var map__15176 = p__15171;
var map__15176__$1 = cljs.core.__destructure_map(map__15176);
var opts = map__15176__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15165){
var G__15166 = cljs.core.first(seq15165);
var seq15165__$1 = cljs.core.next(seq15165);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15166,seq15165__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15192 = arguments.length;
switch (G__15192) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14916__auto___18158 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14917__auto__ = (function (){var switch__14749__auto__ = (function (state_15277){
var state_val_15283 = (state_15277[(1)]);
if((state_val_15283 === (7))){
var inst_15269 = (state_15277[(2)]);
var state_15277__$1 = state_15277;
var statearr_15331_18159 = state_15277__$1;
(statearr_15331_18159[(2)] = inst_15269);

(statearr_15331_18159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (1))){
var state_15277__$1 = state_15277;
var statearr_15332_18160 = state_15277__$1;
(statearr_15332_18160[(2)] = null);

(statearr_15332_18160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (4))){
var inst_15242 = (state_15277[(7)]);
var inst_15242__$1 = (state_15277[(2)]);
var inst_15251 = (inst_15242__$1 == null);
var state_15277__$1 = (function (){var statearr_15333 = state_15277;
(statearr_15333[(7)] = inst_15242__$1);

return statearr_15333;
})();
if(cljs.core.truth_(inst_15251)){
var statearr_15334_18161 = state_15277__$1;
(statearr_15334_18161[(1)] = (5));

} else {
var statearr_15335_18162 = state_15277__$1;
(statearr_15335_18162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (13))){
var state_15277__$1 = state_15277;
var statearr_15336_18163 = state_15277__$1;
(statearr_15336_18163[(2)] = null);

(statearr_15336_18163[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (6))){
var inst_15242 = (state_15277[(7)]);
var state_15277__$1 = state_15277;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15277__$1,(11),to,inst_15242);
} else {
if((state_val_15283 === (3))){
var inst_15275 = (state_15277[(2)]);
var state_15277__$1 = state_15277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15277__$1,inst_15275);
} else {
if((state_val_15283 === (12))){
var state_15277__$1 = state_15277;
var statearr_15341_18164 = state_15277__$1;
(statearr_15341_18164[(2)] = null);

(statearr_15341_18164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (2))){
var state_15277__$1 = state_15277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15277__$1,(4),from);
} else {
if((state_val_15283 === (11))){
var inst_15260 = (state_15277[(2)]);
var state_15277__$1 = state_15277;
if(cljs.core.truth_(inst_15260)){
var statearr_15342_18165 = state_15277__$1;
(statearr_15342_18165[(1)] = (12));

} else {
var statearr_15343_18166 = state_15277__$1;
(statearr_15343_18166[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (9))){
var state_15277__$1 = state_15277;
var statearr_15344_18168 = state_15277__$1;
(statearr_15344_18168[(2)] = null);

(statearr_15344_18168[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (5))){
var state_15277__$1 = state_15277;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15345_18169 = state_15277__$1;
(statearr_15345_18169[(1)] = (8));

} else {
var statearr_15346_18170 = state_15277__$1;
(statearr_15346_18170[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (14))){
var inst_15267 = (state_15277[(2)]);
var state_15277__$1 = state_15277;
var statearr_15347_18171 = state_15277__$1;
(statearr_15347_18171[(2)] = inst_15267);

(statearr_15347_18171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (10))){
var inst_15257 = (state_15277[(2)]);
var state_15277__$1 = state_15277;
var statearr_15348_18173 = state_15277__$1;
(statearr_15348_18173[(2)] = inst_15257);

(statearr_15348_18173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (8))){
var inst_15254 = cljs.core.async.close_BANG_(to);
var state_15277__$1 = state_15277;
var statearr_15351_18174 = state_15277__$1;
(statearr_15351_18174[(2)] = inst_15254);

(statearr_15351_18174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14750__auto__ = null;
var cljs$core$async$state_machine__14750__auto____0 = (function (){
var statearr_15370 = [null,null,null,null,null,null,null,null];
(statearr_15370[(0)] = cljs$core$async$state_machine__14750__auto__);

(statearr_15370[(1)] = (1));

return statearr_15370;
});
var cljs$core$async$state_machine__14750__auto____1 = (function (state_15277){
while(true){
var ret_value__14751__auto__ = (function (){try{while(true){
var result__14752__auto__ = switch__14749__auto__(state_15277);
if(cljs.core.keyword_identical_QMARK_(result__14752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14752__auto__;
}
break;
}
}catch (e15381){var ex__14754__auto__ = e15381;
var statearr_15382_18178 = state_15277;
(statearr_15382_18178[(2)] = ex__14754__auto__);


if(cljs.core.seq((state_15277[(4)]))){
var statearr_15383_18179 = state_15277;
(statearr_15383_18179[(1)] = cljs.core.first((state_15277[(4)])));

} else {
throw ex__14754__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18180 = state_15277;
state_15277 = G__18180;
continue;
} else {
return ret_value__14751__auto__;
}
break;
}
});
cljs$core$async$state_machine__14750__auto__ = function(state_15277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14750__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14750__auto____1.call(this,state_15277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14750__auto____0;
cljs$core$async$state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14750__auto____1;
return cljs$core$async$state_machine__14750__auto__;
})()
})();
var state__14918__auto__ = (function (){var statearr_15398 = f__14917__auto__();
(statearr_15398[(6)] = c__14916__auto___18158);

return statearr_15398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14918__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15430){
var vec__15431 = p__15430;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15431,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15431,(1),null);
var job = vec__15431;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14916__auto___18181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14917__auto__ = (function (){var switch__14749__auto__ = (function (state_15440){
var state_val_15443 = (state_15440[(1)]);
if((state_val_15443 === (1))){
var state_15440__$1 = state_15440;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15440__$1,(2),res,v);
} else {
if((state_val_15443 === (2))){
var inst_15437 = (state_15440[(2)]);
var inst_15438 = cljs.core.async.close_BANG_(res);
var state_15440__$1 = (function (){var statearr_15459 = state_15440;
(statearr_15459[(7)] = inst_15437);

return statearr_15459;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15440__$1,inst_15438);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14750__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14750__auto____0 = (function (){
var statearr_15460 = [null,null,null,null,null,null,null,null];
(statearr_15460[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14750__auto__);

(statearr_15460[(1)] = (1));

return statearr_15460;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14750__auto____1 = (function (state_15440){
while(true){
var ret_value__14751__auto__ = (function (){try{while(true){
var result__14752__auto__ = switch__14749__auto__(state_15440);
if(cljs.core.keyword_identical_QMARK_(result__14752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14752__auto__;
}
break;
}
}catch (e15461){var ex__14754__auto__ = e15461;
var statearr_15462_18182 = state_15440;
(statearr_15462_18182[(2)] = ex__14754__auto__);


if(cljs.core.seq((state_15440[(4)]))){
var statearr_15463_18183 = state_15440;
(statearr_15463_18183[(1)] = cljs.core.first((state_15440[(4)])));

} else {
throw ex__14754__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18184 = state_15440;
state_15440 = G__18184;
continue;
} else {
return ret_value__14751__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14750__auto__ = function(state_15440){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14750__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14750__auto____1.call(this,state_15440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14750__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14750__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14750__auto__;
})()
})();
var state__14918__auto__ = (function (){var statearr_15481 = f__14917__auto__();
(statearr_15481[(6)] = c__14916__auto___18181);

return statearr_15481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14918__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15488){
var vec__15492 = p__15488;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15492,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15492,(1),null);
var job = vec__15492;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___18188 = n;
var __18189 = (0);
while(true){
if((__18189 < n__5593__auto___18188)){
var G__15497_18190 = type;
var G__15497_18191__$1 = (((G__15497_18190 instanceof cljs.core.Keyword))?G__15497_18190.fqn:null);
switch (G__15497_18191__$1) {
case "compute":
var c__14916__auto___18193 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18189,c__14916__auto___18193,G__15497_18190,G__15497_18191__$1,n__5593__auto___18188,jobs,results,process__$1,async){
return (function (){
var f__14917__auto__ = (function (){var switch__14749__auto__ = ((function (__18189,c__14916__auto___18193,G__15497_18190,G__15497_18191__$1,n__5593__auto___18188,jobs,results,process__$1,async){
return (function (state_15517){
var state_val_15521 = (state_15517[(1)]);
if((state_val_15521 === (1))){
var state_15517__$1 = state_15517;
var statearr_15525_18194 = state_15517__$1;
(statearr_15525_18194[(2)] = null);

(statearr_15525_18194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15521 === (2))){
var state_15517__$1 = state_15517;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15517__$1,(4),jobs);
} else {
if((state_val_15521 === (3))){
var inst_15515 = (state_15517[(2)]);
var state_15517__$1 = state_15517;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15517__$1,inst_15515);
} else {
if((state_val_15521 === (4))){
var inst_15506 = (state_15517[(2)]);
var inst_15507 = process__$1(inst_15506);
var state_15517__$1 = state_15517;
if(cljs.core.truth_(inst_15507)){
var statearr_15551_18198 = state_15517__$1;
(statearr_15551_18198[(1)] = (5));

} else {
var statearr_15552_18199 = state_15517__$1;
(statearr_15552_18199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15521 === (5))){
var state_15517__$1 = state_15517;
var statearr_15555_18200 = state_15517__$1;
(statearr_15555_18200[(2)] = null);

(statearr_15555_18200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15521 === (6))){
var state_15517__$1 = state_15517;
var statearr_15557_18201 = state_15517__$1;
(statearr_15557_18201[(2)] = null);

(statearr_15557_18201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15521 === (7))){
var inst_15512 = (state_15517[(2)]);
var state_15517__$1 = state_15517;
var statearr_15558_18202 = state_15517__$1;
(statearr_15558_18202[(2)] = inst_15512);

(statearr_15558_18202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18189,c__14916__auto___18193,G__15497_18190,G__15497_18191__$1,n__5593__auto___18188,jobs,results,process__$1,async))
;
return ((function (__18189,switch__14749__auto__,c__14916__auto___18193,G__15497_18190,G__15497_18191__$1,n__5593__auto___18188,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14750__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14750__auto____0 = (function (){
var statearr_15561 = [null,null,null,null,null,null,null];
(statearr_15561[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14750__auto__);

(statearr_15561[(1)] = (1));

return statearr_15561;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14750__auto____1 = (function (state_15517){
while(true){
var ret_value__14751__auto__ = (function (){try{while(true){
var result__14752__auto__ = switch__14749__auto__(state_15517);
if(cljs.core.keyword_identical_QMARK_(result__14752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14752__auto__;
}
break;
}
}catch (e15562){var ex__14754__auto__ = e15562;
var statearr_15563_18203 = state_15517;
(statearr_15563_18203[(2)] = ex__14754__auto__);


if(cljs.core.seq((state_15517[(4)]))){
var statearr_15565_18204 = state_15517;
(statearr_15565_18204[(1)] = cljs.core.first((state_15517[(4)])));

} else {
throw ex__14754__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18205 = state_15517;
state_15517 = G__18205;
continue;
} else {
return ret_value__14751__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14750__auto__ = function(state_15517){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14750__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14750__auto____1.call(this,state_15517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14750__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14750__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14750__auto__;
})()
;})(__18189,switch__14749__auto__,c__14916__auto___18193,G__15497_18190,G__15497_18191__$1,n__5593__auto___18188,jobs,results,process__$1,async))
})();
var state__14918__auto__ = (function (){var statearr_15572 = f__14917__auto__();
(statearr_15572[(6)] = c__14916__auto___18193);

return statearr_15572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14918__auto__);
});})(__18189,c__14916__auto___18193,G__15497_18190,G__15497_18191__$1,n__5593__auto___18188,jobs,results,process__$1,async))
);


break;
case "async":
var c__14916__auto___18207 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18189,c__14916__auto___18207,G__15497_18190,G__15497_18191__$1,n__5593__auto___18188,jobs,results,process__$1,async){
return (function (){
var f__14917__auto__ = (function (){var switch__14749__auto__ = ((function (__18189,c__14916__auto___18207,G__15497_18190,G__15497_18191__$1,n__5593__auto___18188,jobs,results,process__$1,async){
return (function (state_15589){
var state_val_15592 = (state_15589[(1)]);
if((state_val_15592 === (1))){
var state_15589__$1 = state_15589;
var statearr_15600_18208 = state_15589__$1;
(statearr_15600_18208[(2)] = null);

(statearr_15600_18208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15592 === (2))){
var state_15589__$1 = state_15589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15589__$1,(4),jobs);
} else {
if((state_val_15592 === (3))){
var inst_15586 = (state_15589[(2)]);
var state_15589__$1 = state_15589;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15589__$1,inst_15586);
} else {
if((state_val_15592 === (4))){
var inst_15577 = (state_15589[(2)]);
var inst_15578 = async(inst_15577);
var state_15589__$1 = state_15589;
if(cljs.core.truth_(inst_15578)){
var statearr_15619_18209 = state_15589__$1;
(statearr_15619_18209[(1)] = (5));

} else {
var statearr_15620_18210 = state_15589__$1;
(statearr_15620_18210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15592 === (5))){
var state_15589__$1 = state_15589;
var statearr_15622_18211 = state_15589__$1;
(statearr_15622_18211[(2)] = null);

(statearr_15622_18211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15592 === (6))){
var state_15589__$1 = state_15589;
var statearr_15623_18212 = state_15589__$1;
(statearr_15623_18212[(2)] = null);

(statearr_15623_18212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15592 === (7))){
var inst_15583 = (state_15589[(2)]);
var state_15589__$1 = state_15589;
var statearr_15635_18213 = state_15589__$1;
(statearr_15635_18213[(2)] = inst_15583);

(statearr_15635_18213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18189,c__14916__auto___18207,G__15497_18190,G__15497_18191__$1,n__5593__auto___18188,jobs,results,process__$1,async))
;
return ((function (__18189,switch__14749__auto__,c__14916__auto___18207,G__15497_18190,G__15497_18191__$1,n__5593__auto___18188,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14750__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14750__auto____0 = (function (){
var statearr_15652 = [null,null,null,null,null,null,null];
(statearr_15652[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14750__auto__);

(statearr_15652[(1)] = (1));

return statearr_15652;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14750__auto____1 = (function (state_15589){
while(true){
var ret_value__14751__auto__ = (function (){try{while(true){
var result__14752__auto__ = switch__14749__auto__(state_15589);
if(cljs.core.keyword_identical_QMARK_(result__14752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14752__auto__;
}
break;
}
}catch (e15659){var ex__14754__auto__ = e15659;
var statearr_15663_18217 = state_15589;
(statearr_15663_18217[(2)] = ex__14754__auto__);


if(cljs.core.seq((state_15589[(4)]))){
var statearr_15664_18222 = state_15589;
(statearr_15664_18222[(1)] = cljs.core.first((state_15589[(4)])));

} else {
throw ex__14754__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18226 = state_15589;
state_15589 = G__18226;
continue;
} else {
return ret_value__14751__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14750__auto__ = function(state_15589){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14750__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14750__auto____1.call(this,state_15589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14750__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14750__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14750__auto__;
})()
;})(__18189,switch__14749__auto__,c__14916__auto___18207,G__15497_18190,G__15497_18191__$1,n__5593__auto___18188,jobs,results,process__$1,async))
})();
var state__14918__auto__ = (function (){var statearr_15683 = f__14917__auto__();
(statearr_15683[(6)] = c__14916__auto___18207);

return statearr_15683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14918__auto__);
});})(__18189,c__14916__auto___18207,G__15497_18190,G__15497_18191__$1,n__5593__auto___18188,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15497_18191__$1)].join('')));

}

var G__18230 = (__18189 + (1));
__18189 = G__18230;
continue;
} else {
}
break;
}

var c__14916__auto___18231 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14917__auto__ = (function (){var switch__14749__auto__ = (function (state_15727){
var state_val_15729 = (state_15727[(1)]);
if((state_val_15729 === (7))){
var inst_15723 = (state_15727[(2)]);
var state_15727__$1 = state_15727;
var statearr_15771_18232 = state_15727__$1;
(statearr_15771_18232[(2)] = inst_15723);

(statearr_15771_18232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (1))){
var state_15727__$1 = state_15727;
var statearr_15772_18233 = state_15727__$1;
(statearr_15772_18233[(2)] = null);

(statearr_15772_18233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (4))){
var inst_15695 = (state_15727[(7)]);
var inst_15695__$1 = (state_15727[(2)]);
var inst_15696 = (inst_15695__$1 == null);
var state_15727__$1 = (function (){var statearr_15776 = state_15727;
(statearr_15776[(7)] = inst_15695__$1);

return statearr_15776;
})();
if(cljs.core.truth_(inst_15696)){
var statearr_15777_18238 = state_15727__$1;
(statearr_15777_18238[(1)] = (5));

} else {
var statearr_15778_18239 = state_15727__$1;
(statearr_15778_18239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (6))){
var inst_15701 = (state_15727[(8)]);
var inst_15695 = (state_15727[(7)]);
var inst_15701__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15714 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15715 = [inst_15695,inst_15701__$1];
var inst_15716 = (new cljs.core.PersistentVector(null,2,(5),inst_15714,inst_15715,null));
var state_15727__$1 = (function (){var statearr_15780 = state_15727;
(statearr_15780[(8)] = inst_15701__$1);

return statearr_15780;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15727__$1,(8),jobs,inst_15716);
} else {
if((state_val_15729 === (3))){
var inst_15725 = (state_15727[(2)]);
var state_15727__$1 = state_15727;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15727__$1,inst_15725);
} else {
if((state_val_15729 === (2))){
var state_15727__$1 = state_15727;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15727__$1,(4),from);
} else {
if((state_val_15729 === (9))){
var inst_15720 = (state_15727[(2)]);
var state_15727__$1 = (function (){var statearr_15784 = state_15727;
(statearr_15784[(9)] = inst_15720);

return statearr_15784;
})();
var statearr_15785_18240 = state_15727__$1;
(statearr_15785_18240[(2)] = null);

(statearr_15785_18240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (5))){
var inst_15698 = cljs.core.async.close_BANG_(jobs);
var state_15727__$1 = state_15727;
var statearr_15786_18241 = state_15727__$1;
(statearr_15786_18241[(2)] = inst_15698);

(statearr_15786_18241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (8))){
var inst_15701 = (state_15727[(8)]);
var inst_15718 = (state_15727[(2)]);
var state_15727__$1 = (function (){var statearr_15787 = state_15727;
(statearr_15787[(10)] = inst_15718);

return statearr_15787;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15727__$1,(9),results,inst_15701);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14750__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14750__auto____0 = (function (){
var statearr_15788 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15788[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14750__auto__);

(statearr_15788[(1)] = (1));

return statearr_15788;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14750__auto____1 = (function (state_15727){
while(true){
var ret_value__14751__auto__ = (function (){try{while(true){
var result__14752__auto__ = switch__14749__auto__(state_15727);
if(cljs.core.keyword_identical_QMARK_(result__14752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14752__auto__;
}
break;
}
}catch (e15791){var ex__14754__auto__ = e15791;
var statearr_15792_18258 = state_15727;
(statearr_15792_18258[(2)] = ex__14754__auto__);


if(cljs.core.seq((state_15727[(4)]))){
var statearr_15793_18259 = state_15727;
(statearr_15793_18259[(1)] = cljs.core.first((state_15727[(4)])));

} else {
throw ex__14754__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18260 = state_15727;
state_15727 = G__18260;
continue;
} else {
return ret_value__14751__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14750__auto__ = function(state_15727){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14750__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14750__auto____1.call(this,state_15727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14750__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14750__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14750__auto__;
})()
})();
var state__14918__auto__ = (function (){var statearr_15797 = f__14917__auto__();
(statearr_15797[(6)] = c__14916__auto___18231);

return statearr_15797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14918__auto__);
}));


var c__14916__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14917__auto__ = (function (){var switch__14749__auto__ = (function (state_15840){
var state_val_15841 = (state_15840[(1)]);
if((state_val_15841 === (7))){
var inst_15836 = (state_15840[(2)]);
var state_15840__$1 = state_15840;
var statearr_15844_18261 = state_15840__$1;
(statearr_15844_18261[(2)] = inst_15836);

(statearr_15844_18261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15841 === (20))){
var state_15840__$1 = state_15840;
var statearr_15845_18262 = state_15840__$1;
(statearr_15845_18262[(2)] = null);

(statearr_15845_18262[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15841 === (1))){
var state_15840__$1 = state_15840;
var statearr_15846_18263 = state_15840__$1;
(statearr_15846_18263[(2)] = null);

(statearr_15846_18263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15841 === (4))){
var inst_15804 = (state_15840[(7)]);
var inst_15804__$1 = (state_15840[(2)]);
var inst_15805 = (inst_15804__$1 == null);
var state_15840__$1 = (function (){var statearr_15847 = state_15840;
(statearr_15847[(7)] = inst_15804__$1);

return statearr_15847;
})();
if(cljs.core.truth_(inst_15805)){
var statearr_15850_18264 = state_15840__$1;
(statearr_15850_18264[(1)] = (5));

} else {
var statearr_15852_18265 = state_15840__$1;
(statearr_15852_18265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15841 === (15))){
var inst_15818 = (state_15840[(8)]);
var state_15840__$1 = state_15840;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15840__$1,(18),to,inst_15818);
} else {
if((state_val_15841 === (21))){
var inst_15831 = (state_15840[(2)]);
var state_15840__$1 = state_15840;
var statearr_15853_18266 = state_15840__$1;
(statearr_15853_18266[(2)] = inst_15831);

(statearr_15853_18266[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15841 === (13))){
var inst_15833 = (state_15840[(2)]);
var state_15840__$1 = (function (){var statearr_15857 = state_15840;
(statearr_15857[(9)] = inst_15833);

return statearr_15857;
})();
var statearr_15860_18267 = state_15840__$1;
(statearr_15860_18267[(2)] = null);

(statearr_15860_18267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15841 === (6))){
var inst_15804 = (state_15840[(7)]);
var state_15840__$1 = state_15840;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15840__$1,(11),inst_15804);
} else {
if((state_val_15841 === (17))){
var inst_15826 = (state_15840[(2)]);
var state_15840__$1 = state_15840;
if(cljs.core.truth_(inst_15826)){
var statearr_15867_18268 = state_15840__$1;
(statearr_15867_18268[(1)] = (19));

} else {
var statearr_15870_18269 = state_15840__$1;
(statearr_15870_18269[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15841 === (3))){
var inst_15838 = (state_15840[(2)]);
var state_15840__$1 = state_15840;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15840__$1,inst_15838);
} else {
if((state_val_15841 === (12))){
var inst_15815 = (state_15840[(10)]);
var state_15840__$1 = state_15840;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15840__$1,(14),inst_15815);
} else {
if((state_val_15841 === (2))){
var state_15840__$1 = state_15840;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15840__$1,(4),results);
} else {
if((state_val_15841 === (19))){
var state_15840__$1 = state_15840;
var statearr_15878_18270 = state_15840__$1;
(statearr_15878_18270[(2)] = null);

(statearr_15878_18270[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15841 === (11))){
var inst_15815 = (state_15840[(2)]);
var state_15840__$1 = (function (){var statearr_15879 = state_15840;
(statearr_15879[(10)] = inst_15815);

return statearr_15879;
})();
var statearr_15880_18271 = state_15840__$1;
(statearr_15880_18271[(2)] = null);

(statearr_15880_18271[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15841 === (9))){
var state_15840__$1 = state_15840;
var statearr_15882_18272 = state_15840__$1;
(statearr_15882_18272[(2)] = null);

(statearr_15882_18272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15841 === (5))){
var state_15840__$1 = state_15840;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15884_18273 = state_15840__$1;
(statearr_15884_18273[(1)] = (8));

} else {
var statearr_15885_18274 = state_15840__$1;
(statearr_15885_18274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15841 === (14))){
var inst_15818 = (state_15840[(8)]);
var inst_15820 = (state_15840[(11)]);
var inst_15818__$1 = (state_15840[(2)]);
var inst_15819 = (inst_15818__$1 == null);
var inst_15820__$1 = cljs.core.not(inst_15819);
var state_15840__$1 = (function (){var statearr_15886 = state_15840;
(statearr_15886[(8)] = inst_15818__$1);

(statearr_15886[(11)] = inst_15820__$1);

return statearr_15886;
})();
if(inst_15820__$1){
var statearr_15892_18275 = state_15840__$1;
(statearr_15892_18275[(1)] = (15));

} else {
var statearr_15896_18276 = state_15840__$1;
(statearr_15896_18276[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15841 === (16))){
var inst_15820 = (state_15840[(11)]);
var state_15840__$1 = state_15840;
var statearr_15900_18277 = state_15840__$1;
(statearr_15900_18277[(2)] = inst_15820);

(statearr_15900_18277[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15841 === (10))){
var inst_15811 = (state_15840[(2)]);
var state_15840__$1 = state_15840;
var statearr_15904_18278 = state_15840__$1;
(statearr_15904_18278[(2)] = inst_15811);

(statearr_15904_18278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15841 === (18))){
var inst_15823 = (state_15840[(2)]);
var state_15840__$1 = state_15840;
var statearr_15905_18279 = state_15840__$1;
(statearr_15905_18279[(2)] = inst_15823);

(statearr_15905_18279[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15841 === (8))){
var inst_15808 = cljs.core.async.close_BANG_(to);
var state_15840__$1 = state_15840;
var statearr_15914_18280 = state_15840__$1;
(statearr_15914_18280[(2)] = inst_15808);

(statearr_15914_18280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14750__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14750__auto____0 = (function (){
var statearr_15919 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15919[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14750__auto__);

(statearr_15919[(1)] = (1));

return statearr_15919;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14750__auto____1 = (function (state_15840){
while(true){
var ret_value__14751__auto__ = (function (){try{while(true){
var result__14752__auto__ = switch__14749__auto__(state_15840);
if(cljs.core.keyword_identical_QMARK_(result__14752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14752__auto__;
}
break;
}
}catch (e15921){var ex__14754__auto__ = e15921;
var statearr_15922_18281 = state_15840;
(statearr_15922_18281[(2)] = ex__14754__auto__);


if(cljs.core.seq((state_15840[(4)]))){
var statearr_15923_18282 = state_15840;
(statearr_15923_18282[(1)] = cljs.core.first((state_15840[(4)])));

} else {
throw ex__14754__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18283 = state_15840;
state_15840 = G__18283;
continue;
} else {
return ret_value__14751__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14750__auto__ = function(state_15840){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14750__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14750__auto____1.call(this,state_15840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14750__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14750__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14750__auto__;
})()
})();
var state__14918__auto__ = (function (){var statearr_15924 = f__14917__auto__();
(statearr_15924[(6)] = c__14916__auto__);

return statearr_15924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14918__auto__);
}));

return c__14916__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15929 = arguments.length;
switch (G__15929) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15937 = arguments.length;
switch (G__15937) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15947 = arguments.length;
switch (G__15947) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14916__auto___18287 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14917__auto__ = (function (){var switch__14749__auto__ = (function (state_15990){
var state_val_15992 = (state_15990[(1)]);
if((state_val_15992 === (7))){
var inst_15985 = (state_15990[(2)]);
var state_15990__$1 = state_15990;
var statearr_16005_18288 = state_15990__$1;
(statearr_16005_18288[(2)] = inst_15985);

(statearr_16005_18288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15992 === (1))){
var state_15990__$1 = state_15990;
var statearr_16008_18289 = state_15990__$1;
(statearr_16008_18289[(2)] = null);

(statearr_16008_18289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15992 === (4))){
var inst_15966 = (state_15990[(7)]);
var inst_15966__$1 = (state_15990[(2)]);
var inst_15967 = (inst_15966__$1 == null);
var state_15990__$1 = (function (){var statearr_16009 = state_15990;
(statearr_16009[(7)] = inst_15966__$1);

return statearr_16009;
})();
if(cljs.core.truth_(inst_15967)){
var statearr_16010_18290 = state_15990__$1;
(statearr_16010_18290[(1)] = (5));

} else {
var statearr_16011_18291 = state_15990__$1;
(statearr_16011_18291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15992 === (13))){
var state_15990__$1 = state_15990;
var statearr_16021_18292 = state_15990__$1;
(statearr_16021_18292[(2)] = null);

(statearr_16021_18292[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15992 === (6))){
var inst_15966 = (state_15990[(7)]);
var inst_15972 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15966) : p.call(null, inst_15966));
var state_15990__$1 = state_15990;
if(cljs.core.truth_(inst_15972)){
var statearr_16025_18293 = state_15990__$1;
(statearr_16025_18293[(1)] = (9));

} else {
var statearr_16026_18294 = state_15990__$1;
(statearr_16026_18294[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15992 === (3))){
var inst_15987 = (state_15990[(2)]);
var state_15990__$1 = state_15990;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15990__$1,inst_15987);
} else {
if((state_val_15992 === (12))){
var state_15990__$1 = state_15990;
var statearr_16036_18295 = state_15990__$1;
(statearr_16036_18295[(2)] = null);

(statearr_16036_18295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15992 === (2))){
var state_15990__$1 = state_15990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15990__$1,(4),ch);
} else {
if((state_val_15992 === (11))){
var inst_15966 = (state_15990[(7)]);
var inst_15976 = (state_15990[(2)]);
var state_15990__$1 = state_15990;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15990__$1,(8),inst_15976,inst_15966);
} else {
if((state_val_15992 === (9))){
var state_15990__$1 = state_15990;
var statearr_16047_18296 = state_15990__$1;
(statearr_16047_18296[(2)] = tc);

(statearr_16047_18296[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15992 === (5))){
var inst_15969 = cljs.core.async.close_BANG_(tc);
var inst_15970 = cljs.core.async.close_BANG_(fc);
var state_15990__$1 = (function (){var statearr_16048 = state_15990;
(statearr_16048[(8)] = inst_15969);

return statearr_16048;
})();
var statearr_16049_18297 = state_15990__$1;
(statearr_16049_18297[(2)] = inst_15970);

(statearr_16049_18297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15992 === (14))){
var inst_15983 = (state_15990[(2)]);
var state_15990__$1 = state_15990;
var statearr_16054_18298 = state_15990__$1;
(statearr_16054_18298[(2)] = inst_15983);

(statearr_16054_18298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15992 === (10))){
var state_15990__$1 = state_15990;
var statearr_16061_18299 = state_15990__$1;
(statearr_16061_18299[(2)] = fc);

(statearr_16061_18299[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15992 === (8))){
var inst_15978 = (state_15990[(2)]);
var state_15990__$1 = state_15990;
if(cljs.core.truth_(inst_15978)){
var statearr_16072_18301 = state_15990__$1;
(statearr_16072_18301[(1)] = (12));

} else {
var statearr_16073_18302 = state_15990__$1;
(statearr_16073_18302[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14750__auto__ = null;
var cljs$core$async$state_machine__14750__auto____0 = (function (){
var statearr_16080 = [null,null,null,null,null,null,null,null,null];
(statearr_16080[(0)] = cljs$core$async$state_machine__14750__auto__);

(statearr_16080[(1)] = (1));

return statearr_16080;
});
var cljs$core$async$state_machine__14750__auto____1 = (function (state_15990){
while(true){
var ret_value__14751__auto__ = (function (){try{while(true){
var result__14752__auto__ = switch__14749__auto__(state_15990);
if(cljs.core.keyword_identical_QMARK_(result__14752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14752__auto__;
}
break;
}
}catch (e16081){var ex__14754__auto__ = e16081;
var statearr_16082_18303 = state_15990;
(statearr_16082_18303[(2)] = ex__14754__auto__);


if(cljs.core.seq((state_15990[(4)]))){
var statearr_16083_18304 = state_15990;
(statearr_16083_18304[(1)] = cljs.core.first((state_15990[(4)])));

} else {
throw ex__14754__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18305 = state_15990;
state_15990 = G__18305;
continue;
} else {
return ret_value__14751__auto__;
}
break;
}
});
cljs$core$async$state_machine__14750__auto__ = function(state_15990){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14750__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14750__auto____1.call(this,state_15990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14750__auto____0;
cljs$core$async$state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14750__auto____1;
return cljs$core$async$state_machine__14750__auto__;
})()
})();
var state__14918__auto__ = (function (){var statearr_16084 = f__14917__auto__();
(statearr_16084[(6)] = c__14916__auto___18287);

return statearr_16084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14918__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14916__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14917__auto__ = (function (){var switch__14749__auto__ = (function (state_16118){
var state_val_16119 = (state_16118[(1)]);
if((state_val_16119 === (7))){
var inst_16114 = (state_16118[(2)]);
var state_16118__$1 = state_16118;
var statearr_16121_18306 = state_16118__$1;
(statearr_16121_18306[(2)] = inst_16114);

(statearr_16121_18306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16119 === (1))){
var inst_16090 = init;
var inst_16094 = inst_16090;
var state_16118__$1 = (function (){var statearr_16122 = state_16118;
(statearr_16122[(7)] = inst_16094);

return statearr_16122;
})();
var statearr_16123_18307 = state_16118__$1;
(statearr_16123_18307[(2)] = null);

(statearr_16123_18307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16119 === (4))){
var inst_16097 = (state_16118[(8)]);
var inst_16097__$1 = (state_16118[(2)]);
var inst_16102 = (inst_16097__$1 == null);
var state_16118__$1 = (function (){var statearr_16124 = state_16118;
(statearr_16124[(8)] = inst_16097__$1);

return statearr_16124;
})();
if(cljs.core.truth_(inst_16102)){
var statearr_16125_18308 = state_16118__$1;
(statearr_16125_18308[(1)] = (5));

} else {
var statearr_16126_18309 = state_16118__$1;
(statearr_16126_18309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16119 === (6))){
var inst_16105 = (state_16118[(9)]);
var inst_16097 = (state_16118[(8)]);
var inst_16094 = (state_16118[(7)]);
var inst_16105__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16094,inst_16097) : f.call(null, inst_16094,inst_16097));
var inst_16106 = cljs.core.reduced_QMARK_(inst_16105__$1);
var state_16118__$1 = (function (){var statearr_16127 = state_16118;
(statearr_16127[(9)] = inst_16105__$1);

return statearr_16127;
})();
if(inst_16106){
var statearr_16128_18310 = state_16118__$1;
(statearr_16128_18310[(1)] = (8));

} else {
var statearr_16129_18311 = state_16118__$1;
(statearr_16129_18311[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16119 === (3))){
var inst_16116 = (state_16118[(2)]);
var state_16118__$1 = state_16118;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16118__$1,inst_16116);
} else {
if((state_val_16119 === (2))){
var state_16118__$1 = state_16118;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16118__$1,(4),ch);
} else {
if((state_val_16119 === (9))){
var inst_16105 = (state_16118[(9)]);
var inst_16094 = inst_16105;
var state_16118__$1 = (function (){var statearr_16131 = state_16118;
(statearr_16131[(7)] = inst_16094);

return statearr_16131;
})();
var statearr_16132_18313 = state_16118__$1;
(statearr_16132_18313[(2)] = null);

(statearr_16132_18313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16119 === (5))){
var inst_16094 = (state_16118[(7)]);
var state_16118__$1 = state_16118;
var statearr_16137_18314 = state_16118__$1;
(statearr_16137_18314[(2)] = inst_16094);

(statearr_16137_18314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16119 === (10))){
var inst_16112 = (state_16118[(2)]);
var state_16118__$1 = state_16118;
var statearr_16138_18315 = state_16118__$1;
(statearr_16138_18315[(2)] = inst_16112);

(statearr_16138_18315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16119 === (8))){
var inst_16105 = (state_16118[(9)]);
var inst_16108 = cljs.core.deref(inst_16105);
var state_16118__$1 = state_16118;
var statearr_16139_18316 = state_16118__$1;
(statearr_16139_18316[(2)] = inst_16108);

(statearr_16139_18316[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14750__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14750__auto____0 = (function (){
var statearr_16142 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16142[(0)] = cljs$core$async$reduce_$_state_machine__14750__auto__);

(statearr_16142[(1)] = (1));

return statearr_16142;
});
var cljs$core$async$reduce_$_state_machine__14750__auto____1 = (function (state_16118){
while(true){
var ret_value__14751__auto__ = (function (){try{while(true){
var result__14752__auto__ = switch__14749__auto__(state_16118);
if(cljs.core.keyword_identical_QMARK_(result__14752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14752__auto__;
}
break;
}
}catch (e16143){var ex__14754__auto__ = e16143;
var statearr_16144_18317 = state_16118;
(statearr_16144_18317[(2)] = ex__14754__auto__);


if(cljs.core.seq((state_16118[(4)]))){
var statearr_16145_18318 = state_16118;
(statearr_16145_18318[(1)] = cljs.core.first((state_16118[(4)])));

} else {
throw ex__14754__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18319 = state_16118;
state_16118 = G__18319;
continue;
} else {
return ret_value__14751__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14750__auto__ = function(state_16118){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14750__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14750__auto____1.call(this,state_16118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14750__auto____0;
cljs$core$async$reduce_$_state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14750__auto____1;
return cljs$core$async$reduce_$_state_machine__14750__auto__;
})()
})();
var state__14918__auto__ = (function (){var statearr_16146 = f__14917__auto__();
(statearr_16146[(6)] = c__14916__auto__);

return statearr_16146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14918__auto__);
}));

return c__14916__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__14916__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14917__auto__ = (function (){var switch__14749__auto__ = (function (state_16155){
var state_val_16156 = (state_16155[(1)]);
if((state_val_16156 === (1))){
var inst_16150 = cljs.core.async.reduce(f__$1,init,ch);
var state_16155__$1 = state_16155;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16155__$1,(2),inst_16150);
} else {
if((state_val_16156 === (2))){
var inst_16152 = (state_16155[(2)]);
var inst_16153 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16152) : f__$1.call(null, inst_16152));
var state_16155__$1 = state_16155;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16155__$1,inst_16153);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14750__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14750__auto____0 = (function (){
var statearr_16159 = [null,null,null,null,null,null,null];
(statearr_16159[(0)] = cljs$core$async$transduce_$_state_machine__14750__auto__);

(statearr_16159[(1)] = (1));

return statearr_16159;
});
var cljs$core$async$transduce_$_state_machine__14750__auto____1 = (function (state_16155){
while(true){
var ret_value__14751__auto__ = (function (){try{while(true){
var result__14752__auto__ = switch__14749__auto__(state_16155);
if(cljs.core.keyword_identical_QMARK_(result__14752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14752__auto__;
}
break;
}
}catch (e16160){var ex__14754__auto__ = e16160;
var statearr_16161_18321 = state_16155;
(statearr_16161_18321[(2)] = ex__14754__auto__);


if(cljs.core.seq((state_16155[(4)]))){
var statearr_16163_18322 = state_16155;
(statearr_16163_18322[(1)] = cljs.core.first((state_16155[(4)])));

} else {
throw ex__14754__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18323 = state_16155;
state_16155 = G__18323;
continue;
} else {
return ret_value__14751__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14750__auto__ = function(state_16155){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14750__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14750__auto____1.call(this,state_16155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14750__auto____0;
cljs$core$async$transduce_$_state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14750__auto____1;
return cljs$core$async$transduce_$_state_machine__14750__auto__;
})()
})();
var state__14918__auto__ = (function (){var statearr_16164 = f__14917__auto__();
(statearr_16164[(6)] = c__14916__auto__);

return statearr_16164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14918__auto__);
}));

return c__14916__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__16166 = arguments.length;
switch (G__16166) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14916__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14917__auto__ = (function (){var switch__14749__auto__ = (function (state_16193){
var state_val_16194 = (state_16193[(1)]);
if((state_val_16194 === (7))){
var inst_16174 = (state_16193[(2)]);
var state_16193__$1 = state_16193;
var statearr_16199_18325 = state_16193__$1;
(statearr_16199_18325[(2)] = inst_16174);

(statearr_16199_18325[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16194 === (1))){
var inst_16167 = cljs.core.seq(coll);
var inst_16169 = inst_16167;
var state_16193__$1 = (function (){var statearr_16200 = state_16193;
(statearr_16200[(7)] = inst_16169);

return statearr_16200;
})();
var statearr_16202_18326 = state_16193__$1;
(statearr_16202_18326[(2)] = null);

(statearr_16202_18326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16194 === (4))){
var inst_16169 = (state_16193[(7)]);
var inst_16172 = cljs.core.first(inst_16169);
var state_16193__$1 = state_16193;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16193__$1,(7),ch,inst_16172);
} else {
if((state_val_16194 === (13))){
var inst_16187 = (state_16193[(2)]);
var state_16193__$1 = state_16193;
var statearr_16207_18327 = state_16193__$1;
(statearr_16207_18327[(2)] = inst_16187);

(statearr_16207_18327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16194 === (6))){
var inst_16177 = (state_16193[(2)]);
var state_16193__$1 = state_16193;
if(cljs.core.truth_(inst_16177)){
var statearr_16209_18328 = state_16193__$1;
(statearr_16209_18328[(1)] = (8));

} else {
var statearr_16210_18329 = state_16193__$1;
(statearr_16210_18329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16194 === (3))){
var inst_16191 = (state_16193[(2)]);
var state_16193__$1 = state_16193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16193__$1,inst_16191);
} else {
if((state_val_16194 === (12))){
var state_16193__$1 = state_16193;
var statearr_16212_18331 = state_16193__$1;
(statearr_16212_18331[(2)] = null);

(statearr_16212_18331[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16194 === (2))){
var inst_16169 = (state_16193[(7)]);
var state_16193__$1 = state_16193;
if(cljs.core.truth_(inst_16169)){
var statearr_16213_18335 = state_16193__$1;
(statearr_16213_18335[(1)] = (4));

} else {
var statearr_16214_18336 = state_16193__$1;
(statearr_16214_18336[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16194 === (11))){
var inst_16184 = cljs.core.async.close_BANG_(ch);
var state_16193__$1 = state_16193;
var statearr_16218_18337 = state_16193__$1;
(statearr_16218_18337[(2)] = inst_16184);

(statearr_16218_18337[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16194 === (9))){
var state_16193__$1 = state_16193;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16219_18342 = state_16193__$1;
(statearr_16219_18342[(1)] = (11));

} else {
var statearr_16220_18346 = state_16193__$1;
(statearr_16220_18346[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16194 === (5))){
var inst_16169 = (state_16193[(7)]);
var state_16193__$1 = state_16193;
var statearr_16221_18347 = state_16193__$1;
(statearr_16221_18347[(2)] = inst_16169);

(statearr_16221_18347[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16194 === (10))){
var inst_16189 = (state_16193[(2)]);
var state_16193__$1 = state_16193;
var statearr_16222_18348 = state_16193__$1;
(statearr_16222_18348[(2)] = inst_16189);

(statearr_16222_18348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16194 === (8))){
var inst_16169 = (state_16193[(7)]);
var inst_16179 = cljs.core.next(inst_16169);
var inst_16169__$1 = inst_16179;
var state_16193__$1 = (function (){var statearr_16226 = state_16193;
(statearr_16226[(7)] = inst_16169__$1);

return statearr_16226;
})();
var statearr_16229_18349 = state_16193__$1;
(statearr_16229_18349[(2)] = null);

(statearr_16229_18349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14750__auto__ = null;
var cljs$core$async$state_machine__14750__auto____0 = (function (){
var statearr_16234 = [null,null,null,null,null,null,null,null];
(statearr_16234[(0)] = cljs$core$async$state_machine__14750__auto__);

(statearr_16234[(1)] = (1));

return statearr_16234;
});
var cljs$core$async$state_machine__14750__auto____1 = (function (state_16193){
while(true){
var ret_value__14751__auto__ = (function (){try{while(true){
var result__14752__auto__ = switch__14749__auto__(state_16193);
if(cljs.core.keyword_identical_QMARK_(result__14752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14752__auto__;
}
break;
}
}catch (e16235){var ex__14754__auto__ = e16235;
var statearr_16236_18353 = state_16193;
(statearr_16236_18353[(2)] = ex__14754__auto__);


if(cljs.core.seq((state_16193[(4)]))){
var statearr_16237_18354 = state_16193;
(statearr_16237_18354[(1)] = cljs.core.first((state_16193[(4)])));

} else {
throw ex__14754__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18355 = state_16193;
state_16193 = G__18355;
continue;
} else {
return ret_value__14751__auto__;
}
break;
}
});
cljs$core$async$state_machine__14750__auto__ = function(state_16193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14750__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14750__auto____1.call(this,state_16193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14750__auto____0;
cljs$core$async$state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14750__auto____1;
return cljs$core$async$state_machine__14750__auto__;
})()
})();
var state__14918__auto__ = (function (){var statearr_16240 = f__14917__auto__();
(statearr_16240[(6)] = c__14916__auto__);

return statearr_16240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14918__auto__);
}));

return c__14916__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__16258 = arguments.length;
switch (G__16258) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18362 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18362(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18364 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18364(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18366 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18366(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18367 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18367(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16332 = (function (ch,cs,meta16333){
this.ch = ch;
this.cs = cs;
this.meta16333 = meta16333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16334,meta16333__$1){
var self__ = this;
var _16334__$1 = this;
return (new cljs.core.async.t_cljs$core$async16332(self__.ch,self__.cs,meta16333__$1));
}));

(cljs.core.async.t_cljs$core$async16332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16334){
var self__ = this;
var _16334__$1 = this;
return self__.meta16333;
}));

(cljs.core.async.t_cljs$core$async16332.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16332.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16332.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16332.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16332.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16332.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16332.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16333","meta16333",1278928844,null)], null);
}));

(cljs.core.async.t_cljs$core$async16332.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16332");

(cljs.core.async.t_cljs$core$async16332.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16332");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16332.
 */
cljs.core.async.__GT_t_cljs$core$async16332 = (function cljs$core$async$__GT_t_cljs$core$async16332(ch,cs,meta16333){
return (new cljs.core.async.t_cljs$core$async16332(ch,cs,meta16333));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async16332(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14916__auto___18371 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14917__auto__ = (function (){var switch__14749__auto__ = (function (state_16489){
var state_val_16490 = (state_16489[(1)]);
if((state_val_16490 === (7))){
var inst_16485 = (state_16489[(2)]);
var state_16489__$1 = state_16489;
var statearr_16492_18372 = state_16489__$1;
(statearr_16492_18372[(2)] = inst_16485);

(statearr_16492_18372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (20))){
var inst_16376 = (state_16489[(7)]);
var inst_16400 = cljs.core.first(inst_16376);
var inst_16401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16400,(0),null);
var inst_16402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16400,(1),null);
var state_16489__$1 = (function (){var statearr_16497 = state_16489;
(statearr_16497[(8)] = inst_16401);

return statearr_16497;
})();
if(cljs.core.truth_(inst_16402)){
var statearr_16498_18373 = state_16489__$1;
(statearr_16498_18373[(1)] = (22));

} else {
var statearr_16499_18374 = state_16489__$1;
(statearr_16499_18374[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (27))){
var inst_16430 = (state_16489[(9)]);
var inst_16342 = (state_16489[(10)]);
var inst_16437 = (state_16489[(11)]);
var inst_16432 = (state_16489[(12)]);
var inst_16437__$1 = cljs.core._nth(inst_16430,inst_16432);
var inst_16438 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16437__$1,inst_16342,done);
var state_16489__$1 = (function (){var statearr_16501 = state_16489;
(statearr_16501[(11)] = inst_16437__$1);

return statearr_16501;
})();
if(cljs.core.truth_(inst_16438)){
var statearr_16502_18377 = state_16489__$1;
(statearr_16502_18377[(1)] = (30));

} else {
var statearr_16503_18378 = state_16489__$1;
(statearr_16503_18378[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (1))){
var state_16489__$1 = state_16489;
var statearr_16504_18379 = state_16489__$1;
(statearr_16504_18379[(2)] = null);

(statearr_16504_18379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (24))){
var inst_16376 = (state_16489[(7)]);
var inst_16407 = (state_16489[(2)]);
var inst_16408 = cljs.core.next(inst_16376);
var inst_16353 = inst_16408;
var inst_16354 = null;
var inst_16355 = (0);
var inst_16356 = (0);
var state_16489__$1 = (function (){var statearr_16505 = state_16489;
(statearr_16505[(13)] = inst_16354);

(statearr_16505[(14)] = inst_16355);

(statearr_16505[(15)] = inst_16407);

(statearr_16505[(16)] = inst_16353);

(statearr_16505[(17)] = inst_16356);

return statearr_16505;
})();
var statearr_16506_18389 = state_16489__$1;
(statearr_16506_18389[(2)] = null);

(statearr_16506_18389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (39))){
var state_16489__$1 = state_16489;
var statearr_16510_18390 = state_16489__$1;
(statearr_16510_18390[(2)] = null);

(statearr_16510_18390[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (4))){
var inst_16342 = (state_16489[(10)]);
var inst_16342__$1 = (state_16489[(2)]);
var inst_16344 = (inst_16342__$1 == null);
var state_16489__$1 = (function (){var statearr_16512 = state_16489;
(statearr_16512[(10)] = inst_16342__$1);

return statearr_16512;
})();
if(cljs.core.truth_(inst_16344)){
var statearr_16513_18391 = state_16489__$1;
(statearr_16513_18391[(1)] = (5));

} else {
var statearr_16514_18392 = state_16489__$1;
(statearr_16514_18392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (15))){
var inst_16354 = (state_16489[(13)]);
var inst_16355 = (state_16489[(14)]);
var inst_16353 = (state_16489[(16)]);
var inst_16356 = (state_16489[(17)]);
var inst_16372 = (state_16489[(2)]);
var inst_16373 = (inst_16356 + (1));
var tmp16507 = inst_16354;
var tmp16508 = inst_16355;
var tmp16509 = inst_16353;
var inst_16353__$1 = tmp16509;
var inst_16354__$1 = tmp16507;
var inst_16355__$1 = tmp16508;
var inst_16356__$1 = inst_16373;
var state_16489__$1 = (function (){var statearr_16516 = state_16489;
(statearr_16516[(13)] = inst_16354__$1);

(statearr_16516[(14)] = inst_16355__$1);

(statearr_16516[(18)] = inst_16372);

(statearr_16516[(16)] = inst_16353__$1);

(statearr_16516[(17)] = inst_16356__$1);

return statearr_16516;
})();
var statearr_16517_18393 = state_16489__$1;
(statearr_16517_18393[(2)] = null);

(statearr_16517_18393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (21))){
var inst_16411 = (state_16489[(2)]);
var state_16489__$1 = state_16489;
var statearr_16521_18394 = state_16489__$1;
(statearr_16521_18394[(2)] = inst_16411);

(statearr_16521_18394[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (31))){
var inst_16437 = (state_16489[(11)]);
var inst_16441 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_16437);
var state_16489__$1 = state_16489;
var statearr_16524_18395 = state_16489__$1;
(statearr_16524_18395[(2)] = inst_16441);

(statearr_16524_18395[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (32))){
var inst_16431 = (state_16489[(19)]);
var inst_16430 = (state_16489[(9)]);
var inst_16432 = (state_16489[(12)]);
var inst_16429 = (state_16489[(20)]);
var inst_16443 = (state_16489[(2)]);
var inst_16444 = (inst_16432 + (1));
var tmp16518 = inst_16431;
var tmp16519 = inst_16430;
var tmp16520 = inst_16429;
var inst_16429__$1 = tmp16520;
var inst_16430__$1 = tmp16519;
var inst_16431__$1 = tmp16518;
var inst_16432__$1 = inst_16444;
var state_16489__$1 = (function (){var statearr_16526 = state_16489;
(statearr_16526[(19)] = inst_16431__$1);

(statearr_16526[(9)] = inst_16430__$1);

(statearr_16526[(21)] = inst_16443);

(statearr_16526[(12)] = inst_16432__$1);

(statearr_16526[(20)] = inst_16429__$1);

return statearr_16526;
})();
var statearr_16530_18396 = state_16489__$1;
(statearr_16530_18396[(2)] = null);

(statearr_16530_18396[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (40))){
var inst_16458 = (state_16489[(22)]);
var inst_16462 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_16458);
var state_16489__$1 = state_16489;
var statearr_16531_18397 = state_16489__$1;
(statearr_16531_18397[(2)] = inst_16462);

(statearr_16531_18397[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (33))){
var inst_16447 = (state_16489[(23)]);
var inst_16449 = cljs.core.chunked_seq_QMARK_(inst_16447);
var state_16489__$1 = state_16489;
if(inst_16449){
var statearr_16532_18398 = state_16489__$1;
(statearr_16532_18398[(1)] = (36));

} else {
var statearr_16533_18399 = state_16489__$1;
(statearr_16533_18399[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (13))){
var inst_16365 = (state_16489[(24)]);
var inst_16369 = cljs.core.async.close_BANG_(inst_16365);
var state_16489__$1 = state_16489;
var statearr_16534_18400 = state_16489__$1;
(statearr_16534_18400[(2)] = inst_16369);

(statearr_16534_18400[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (22))){
var inst_16401 = (state_16489[(8)]);
var inst_16404 = cljs.core.async.close_BANG_(inst_16401);
var state_16489__$1 = state_16489;
var statearr_16536_18402 = state_16489__$1;
(statearr_16536_18402[(2)] = inst_16404);

(statearr_16536_18402[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (36))){
var inst_16447 = (state_16489[(23)]);
var inst_16453 = cljs.core.chunk_first(inst_16447);
var inst_16454 = cljs.core.chunk_rest(inst_16447);
var inst_16455 = cljs.core.count(inst_16453);
var inst_16429 = inst_16454;
var inst_16430 = inst_16453;
var inst_16431 = inst_16455;
var inst_16432 = (0);
var state_16489__$1 = (function (){var statearr_16537 = state_16489;
(statearr_16537[(19)] = inst_16431);

(statearr_16537[(9)] = inst_16430);

(statearr_16537[(12)] = inst_16432);

(statearr_16537[(20)] = inst_16429);

return statearr_16537;
})();
var statearr_16538_18403 = state_16489__$1;
(statearr_16538_18403[(2)] = null);

(statearr_16538_18403[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (41))){
var inst_16447 = (state_16489[(23)]);
var inst_16464 = (state_16489[(2)]);
var inst_16465 = cljs.core.next(inst_16447);
var inst_16429 = inst_16465;
var inst_16430 = null;
var inst_16431 = (0);
var inst_16432 = (0);
var state_16489__$1 = (function (){var statearr_16539 = state_16489;
(statearr_16539[(19)] = inst_16431);

(statearr_16539[(9)] = inst_16430);

(statearr_16539[(25)] = inst_16464);

(statearr_16539[(12)] = inst_16432);

(statearr_16539[(20)] = inst_16429);

return statearr_16539;
})();
var statearr_16540_18404 = state_16489__$1;
(statearr_16540_18404[(2)] = null);

(statearr_16540_18404[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (43))){
var state_16489__$1 = state_16489;
var statearr_16541_18405 = state_16489__$1;
(statearr_16541_18405[(2)] = null);

(statearr_16541_18405[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (29))){
var inst_16473 = (state_16489[(2)]);
var state_16489__$1 = state_16489;
var statearr_16542_18406 = state_16489__$1;
(statearr_16542_18406[(2)] = inst_16473);

(statearr_16542_18406[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (44))){
var inst_16482 = (state_16489[(2)]);
var state_16489__$1 = (function (){var statearr_16543 = state_16489;
(statearr_16543[(26)] = inst_16482);

return statearr_16543;
})();
var statearr_16544_18407 = state_16489__$1;
(statearr_16544_18407[(2)] = null);

(statearr_16544_18407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (6))){
var inst_16421 = (state_16489[(27)]);
var inst_16420 = cljs.core.deref(cs);
var inst_16421__$1 = cljs.core.keys(inst_16420);
var inst_16422 = cljs.core.count(inst_16421__$1);
var inst_16423 = cljs.core.reset_BANG_(dctr,inst_16422);
var inst_16428 = cljs.core.seq(inst_16421__$1);
var inst_16429 = inst_16428;
var inst_16430 = null;
var inst_16431 = (0);
var inst_16432 = (0);
var state_16489__$1 = (function (){var statearr_16547 = state_16489;
(statearr_16547[(19)] = inst_16431);

(statearr_16547[(9)] = inst_16430);

(statearr_16547[(28)] = inst_16423);

(statearr_16547[(12)] = inst_16432);

(statearr_16547[(20)] = inst_16429);

(statearr_16547[(27)] = inst_16421__$1);

return statearr_16547;
})();
var statearr_16548_18409 = state_16489__$1;
(statearr_16548_18409[(2)] = null);

(statearr_16548_18409[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (28))){
var inst_16447 = (state_16489[(23)]);
var inst_16429 = (state_16489[(20)]);
var inst_16447__$1 = cljs.core.seq(inst_16429);
var state_16489__$1 = (function (){var statearr_16549 = state_16489;
(statearr_16549[(23)] = inst_16447__$1);

return statearr_16549;
})();
if(inst_16447__$1){
var statearr_16550_18410 = state_16489__$1;
(statearr_16550_18410[(1)] = (33));

} else {
var statearr_16552_18411 = state_16489__$1;
(statearr_16552_18411[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (25))){
var inst_16431 = (state_16489[(19)]);
var inst_16432 = (state_16489[(12)]);
var inst_16434 = (inst_16432 < inst_16431);
var inst_16435 = inst_16434;
var state_16489__$1 = state_16489;
if(cljs.core.truth_(inst_16435)){
var statearr_16557_18412 = state_16489__$1;
(statearr_16557_18412[(1)] = (27));

} else {
var statearr_16558_18413 = state_16489__$1;
(statearr_16558_18413[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (34))){
var state_16489__$1 = state_16489;
var statearr_16559_18414 = state_16489__$1;
(statearr_16559_18414[(2)] = null);

(statearr_16559_18414[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (17))){
var state_16489__$1 = state_16489;
var statearr_16560_18415 = state_16489__$1;
(statearr_16560_18415[(2)] = null);

(statearr_16560_18415[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (3))){
var inst_16487 = (state_16489[(2)]);
var state_16489__$1 = state_16489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16489__$1,inst_16487);
} else {
if((state_val_16490 === (12))){
var inst_16416 = (state_16489[(2)]);
var state_16489__$1 = state_16489;
var statearr_16564_18416 = state_16489__$1;
(statearr_16564_18416[(2)] = inst_16416);

(statearr_16564_18416[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (2))){
var state_16489__$1 = state_16489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16489__$1,(4),ch);
} else {
if((state_val_16490 === (23))){
var state_16489__$1 = state_16489;
var statearr_16567_18420 = state_16489__$1;
(statearr_16567_18420[(2)] = null);

(statearr_16567_18420[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (35))){
var inst_16471 = (state_16489[(2)]);
var state_16489__$1 = state_16489;
var statearr_16568_18421 = state_16489__$1;
(statearr_16568_18421[(2)] = inst_16471);

(statearr_16568_18421[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (19))){
var inst_16376 = (state_16489[(7)]);
var inst_16386 = cljs.core.chunk_first(inst_16376);
var inst_16387 = cljs.core.chunk_rest(inst_16376);
var inst_16388 = cljs.core.count(inst_16386);
var inst_16353 = inst_16387;
var inst_16354 = inst_16386;
var inst_16355 = inst_16388;
var inst_16356 = (0);
var state_16489__$1 = (function (){var statearr_16569 = state_16489;
(statearr_16569[(13)] = inst_16354);

(statearr_16569[(14)] = inst_16355);

(statearr_16569[(16)] = inst_16353);

(statearr_16569[(17)] = inst_16356);

return statearr_16569;
})();
var statearr_16574_18422 = state_16489__$1;
(statearr_16574_18422[(2)] = null);

(statearr_16574_18422[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (11))){
var inst_16376 = (state_16489[(7)]);
var inst_16353 = (state_16489[(16)]);
var inst_16376__$1 = cljs.core.seq(inst_16353);
var state_16489__$1 = (function (){var statearr_16577 = state_16489;
(statearr_16577[(7)] = inst_16376__$1);

return statearr_16577;
})();
if(inst_16376__$1){
var statearr_16578_18423 = state_16489__$1;
(statearr_16578_18423[(1)] = (16));

} else {
var statearr_16579_18424 = state_16489__$1;
(statearr_16579_18424[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (9))){
var inst_16418 = (state_16489[(2)]);
var state_16489__$1 = state_16489;
var statearr_16580_18425 = state_16489__$1;
(statearr_16580_18425[(2)] = inst_16418);

(statearr_16580_18425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (5))){
var inst_16351 = cljs.core.deref(cs);
var inst_16352 = cljs.core.seq(inst_16351);
var inst_16353 = inst_16352;
var inst_16354 = null;
var inst_16355 = (0);
var inst_16356 = (0);
var state_16489__$1 = (function (){var statearr_16581 = state_16489;
(statearr_16581[(13)] = inst_16354);

(statearr_16581[(14)] = inst_16355);

(statearr_16581[(16)] = inst_16353);

(statearr_16581[(17)] = inst_16356);

return statearr_16581;
})();
var statearr_16582_18426 = state_16489__$1;
(statearr_16582_18426[(2)] = null);

(statearr_16582_18426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (14))){
var state_16489__$1 = state_16489;
var statearr_16585_18427 = state_16489__$1;
(statearr_16585_18427[(2)] = null);

(statearr_16585_18427[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (45))){
var inst_16479 = (state_16489[(2)]);
var state_16489__$1 = state_16489;
var statearr_16592_18428 = state_16489__$1;
(statearr_16592_18428[(2)] = inst_16479);

(statearr_16592_18428[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (26))){
var inst_16421 = (state_16489[(27)]);
var inst_16475 = (state_16489[(2)]);
var inst_16476 = cljs.core.seq(inst_16421);
var state_16489__$1 = (function (){var statearr_16593 = state_16489;
(statearr_16593[(29)] = inst_16475);

return statearr_16593;
})();
if(inst_16476){
var statearr_16596_18429 = state_16489__$1;
(statearr_16596_18429[(1)] = (42));

} else {
var statearr_16597_18430 = state_16489__$1;
(statearr_16597_18430[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (16))){
var inst_16376 = (state_16489[(7)]);
var inst_16383 = cljs.core.chunked_seq_QMARK_(inst_16376);
var state_16489__$1 = state_16489;
if(inst_16383){
var statearr_16598_18431 = state_16489__$1;
(statearr_16598_18431[(1)] = (19));

} else {
var statearr_16600_18432 = state_16489__$1;
(statearr_16600_18432[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (38))){
var inst_16468 = (state_16489[(2)]);
var state_16489__$1 = state_16489;
var statearr_16602_18433 = state_16489__$1;
(statearr_16602_18433[(2)] = inst_16468);

(statearr_16602_18433[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (30))){
var state_16489__$1 = state_16489;
var statearr_16603_18434 = state_16489__$1;
(statearr_16603_18434[(2)] = null);

(statearr_16603_18434[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (10))){
var inst_16354 = (state_16489[(13)]);
var inst_16356 = (state_16489[(17)]);
var inst_16364 = cljs.core._nth(inst_16354,inst_16356);
var inst_16365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16364,(0),null);
var inst_16366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16364,(1),null);
var state_16489__$1 = (function (){var statearr_16604 = state_16489;
(statearr_16604[(24)] = inst_16365);

return statearr_16604;
})();
if(cljs.core.truth_(inst_16366)){
var statearr_16606_18435 = state_16489__$1;
(statearr_16606_18435[(1)] = (13));

} else {
var statearr_16608_18436 = state_16489__$1;
(statearr_16608_18436[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (18))){
var inst_16414 = (state_16489[(2)]);
var state_16489__$1 = state_16489;
var statearr_16625_18437 = state_16489__$1;
(statearr_16625_18437[(2)] = inst_16414);

(statearr_16625_18437[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (42))){
var state_16489__$1 = state_16489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16489__$1,(45),dchan);
} else {
if((state_val_16490 === (37))){
var inst_16342 = (state_16489[(10)]);
var inst_16458 = (state_16489[(22)]);
var inst_16447 = (state_16489[(23)]);
var inst_16458__$1 = cljs.core.first(inst_16447);
var inst_16459 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16458__$1,inst_16342,done);
var state_16489__$1 = (function (){var statearr_16626 = state_16489;
(statearr_16626[(22)] = inst_16458__$1);

return statearr_16626;
})();
if(cljs.core.truth_(inst_16459)){
var statearr_16627_18438 = state_16489__$1;
(statearr_16627_18438[(1)] = (39));

} else {
var statearr_16628_18439 = state_16489__$1;
(statearr_16628_18439[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16490 === (8))){
var inst_16355 = (state_16489[(14)]);
var inst_16356 = (state_16489[(17)]);
var inst_16358 = (inst_16356 < inst_16355);
var inst_16359 = inst_16358;
var state_16489__$1 = state_16489;
if(cljs.core.truth_(inst_16359)){
var statearr_16630_18440 = state_16489__$1;
(statearr_16630_18440[(1)] = (10));

} else {
var statearr_16631_18441 = state_16489__$1;
(statearr_16631_18441[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__14750__auto__ = null;
var cljs$core$async$mult_$_state_machine__14750__auto____0 = (function (){
var statearr_16635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16635[(0)] = cljs$core$async$mult_$_state_machine__14750__auto__);

(statearr_16635[(1)] = (1));

return statearr_16635;
});
var cljs$core$async$mult_$_state_machine__14750__auto____1 = (function (state_16489){
while(true){
var ret_value__14751__auto__ = (function (){try{while(true){
var result__14752__auto__ = switch__14749__auto__(state_16489);
if(cljs.core.keyword_identical_QMARK_(result__14752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14752__auto__;
}
break;
}
}catch (e16636){var ex__14754__auto__ = e16636;
var statearr_16637_18442 = state_16489;
(statearr_16637_18442[(2)] = ex__14754__auto__);


if(cljs.core.seq((state_16489[(4)]))){
var statearr_16638_18443 = state_16489;
(statearr_16638_18443[(1)] = cljs.core.first((state_16489[(4)])));

} else {
throw ex__14754__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18444 = state_16489;
state_16489 = G__18444;
continue;
} else {
return ret_value__14751__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14750__auto__ = function(state_16489){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14750__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14750__auto____1.call(this,state_16489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14750__auto____0;
cljs$core$async$mult_$_state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14750__auto____1;
return cljs$core$async$mult_$_state_machine__14750__auto__;
})()
})();
var state__14918__auto__ = (function (){var statearr_16640 = f__14917__auto__();
(statearr_16640[(6)] = c__14916__auto___18371);

return statearr_16640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14918__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16643 = arguments.length;
switch (G__16643) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18450 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18450(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18451 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18451(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18452 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18452(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18459 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18459(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18460 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18460(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18461 = arguments.length;
var i__5727__auto___18462 = (0);
while(true){
if((i__5727__auto___18462 < len__5726__auto___18461)){
args__5732__auto__.push((arguments[i__5727__auto___18462]));

var G__18464 = (i__5727__auto___18462 + (1));
i__5727__auto___18462 = G__18464;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16668){
var map__16669 = p__16668;
var map__16669__$1 = cljs.core.__destructure_map(map__16669);
var opts = map__16669__$1;
var statearr_16670_18466 = state;
(statearr_16670_18466[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16671_18467 = state;
(statearr_16671_18467[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16673_18468 = state;
(statearr_16673_18468[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16663){
var G__16664 = cljs.core.first(seq16663);
var seq16663__$1 = cljs.core.next(seq16663);
var G__16665 = cljs.core.first(seq16663__$1);
var seq16663__$2 = cljs.core.next(seq16663__$1);
var G__16666 = cljs.core.first(seq16663__$2);
var seq16663__$3 = cljs.core.next(seq16663__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16664,G__16665,G__16666,seq16663__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16675 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16676){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16676 = meta16676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16677,meta16676__$1){
var self__ = this;
var _16677__$1 = this;
return (new cljs.core.async.t_cljs$core$async16675(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16676__$1));
}));

(cljs.core.async.t_cljs$core$async16675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16677){
var self__ = this;
var _16677__$1 = this;
return self__.meta16676;
}));

(cljs.core.async.t_cljs$core$async16675.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16675.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16675.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16675.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16675.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16675.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16675.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16675.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16675.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16676","meta16676",1487022687,null)], null);
}));

(cljs.core.async.t_cljs$core$async16675.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16675.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16675");

(cljs.core.async.t_cljs$core$async16675.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16675");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16675.
 */
cljs.core.async.__GT_t_cljs$core$async16675 = (function cljs$core$async$__GT_t_cljs$core$async16675(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16676){
return (new cljs.core.async.t_cljs$core$async16675(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16676));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16675(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14916__auto___18521 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14917__auto__ = (function (){var switch__14749__auto__ = (function (state_16761){
var state_val_16762 = (state_16761[(1)]);
if((state_val_16762 === (7))){
var inst_16714 = (state_16761[(2)]);
var state_16761__$1 = state_16761;
if(cljs.core.truth_(inst_16714)){
var statearr_16768_18522 = state_16761__$1;
(statearr_16768_18522[(1)] = (8));

} else {
var statearr_16769_18523 = state_16761__$1;
(statearr_16769_18523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16762 === (20))){
var inst_16707 = (state_16761[(7)]);
var state_16761__$1 = state_16761;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16761__$1,(23),out,inst_16707);
} else {
if((state_val_16762 === (1))){
var inst_16690 = calc_state();
var inst_16691 = cljs.core.__destructure_map(inst_16690);
var inst_16692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16691,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16691,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16691,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16695 = inst_16690;
var state_16761__$1 = (function (){var statearr_16770 = state_16761;
(statearr_16770[(8)] = inst_16694);

(statearr_16770[(9)] = inst_16693);

(statearr_16770[(10)] = inst_16692);

(statearr_16770[(11)] = inst_16695);

return statearr_16770;
})();
var statearr_16771_18524 = state_16761__$1;
(statearr_16771_18524[(2)] = null);

(statearr_16771_18524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16762 === (24))){
var inst_16698 = (state_16761[(12)]);
var inst_16695 = inst_16698;
var state_16761__$1 = (function (){var statearr_16772 = state_16761;
(statearr_16772[(11)] = inst_16695);

return statearr_16772;
})();
var statearr_16773_18525 = state_16761__$1;
(statearr_16773_18525[(2)] = null);

(statearr_16773_18525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16762 === (4))){
var inst_16709 = (state_16761[(13)]);
var inst_16707 = (state_16761[(7)]);
var inst_16706 = (state_16761[(2)]);
var inst_16707__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16706,(0),null);
var inst_16708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16706,(1),null);
var inst_16709__$1 = (inst_16707__$1 == null);
var state_16761__$1 = (function (){var statearr_16774 = state_16761;
(statearr_16774[(13)] = inst_16709__$1);

(statearr_16774[(7)] = inst_16707__$1);

(statearr_16774[(14)] = inst_16708);

return statearr_16774;
})();
if(cljs.core.truth_(inst_16709__$1)){
var statearr_16775_18526 = state_16761__$1;
(statearr_16775_18526[(1)] = (5));

} else {
var statearr_16776_18527 = state_16761__$1;
(statearr_16776_18527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16762 === (15))){
var inst_16733 = (state_16761[(15)]);
var inst_16699 = (state_16761[(16)]);
var inst_16733__$1 = cljs.core.empty_QMARK_(inst_16699);
var state_16761__$1 = (function (){var statearr_16777 = state_16761;
(statearr_16777[(15)] = inst_16733__$1);

return statearr_16777;
})();
if(inst_16733__$1){
var statearr_16778_18528 = state_16761__$1;
(statearr_16778_18528[(1)] = (17));

} else {
var statearr_16779_18529 = state_16761__$1;
(statearr_16779_18529[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16762 === (21))){
var inst_16698 = (state_16761[(12)]);
var inst_16695 = inst_16698;
var state_16761__$1 = (function (){var statearr_16780 = state_16761;
(statearr_16780[(11)] = inst_16695);

return statearr_16780;
})();
var statearr_16781_18530 = state_16761__$1;
(statearr_16781_18530[(2)] = null);

(statearr_16781_18530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16762 === (13))){
var inst_16726 = (state_16761[(2)]);
var inst_16727 = calc_state();
var inst_16695 = inst_16727;
var state_16761__$1 = (function (){var statearr_16782 = state_16761;
(statearr_16782[(17)] = inst_16726);

(statearr_16782[(11)] = inst_16695);

return statearr_16782;
})();
var statearr_16783_18531 = state_16761__$1;
(statearr_16783_18531[(2)] = null);

(statearr_16783_18531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16762 === (22))){
var inst_16754 = (state_16761[(2)]);
var state_16761__$1 = state_16761;
var statearr_16784_18532 = state_16761__$1;
(statearr_16784_18532[(2)] = inst_16754);

(statearr_16784_18532[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16762 === (6))){
var inst_16708 = (state_16761[(14)]);
var inst_16712 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16708,change);
var state_16761__$1 = state_16761;
var statearr_16788_18533 = state_16761__$1;
(statearr_16788_18533[(2)] = inst_16712);

(statearr_16788_18533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16762 === (25))){
var state_16761__$1 = state_16761;
var statearr_16789_18534 = state_16761__$1;
(statearr_16789_18534[(2)] = null);

(statearr_16789_18534[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16762 === (17))){
var inst_16700 = (state_16761[(18)]);
var inst_16708 = (state_16761[(14)]);
var inst_16736 = (inst_16700.cljs$core$IFn$_invoke$arity$1 ? inst_16700.cljs$core$IFn$_invoke$arity$1(inst_16708) : inst_16700.call(null, inst_16708));
var inst_16737 = cljs.core.not(inst_16736);
var state_16761__$1 = state_16761;
var statearr_16790_18535 = state_16761__$1;
(statearr_16790_18535[(2)] = inst_16737);

(statearr_16790_18535[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16762 === (3))){
var inst_16758 = (state_16761[(2)]);
var state_16761__$1 = state_16761;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16761__$1,inst_16758);
} else {
if((state_val_16762 === (12))){
var state_16761__$1 = state_16761;
var statearr_16791_18536 = state_16761__$1;
(statearr_16791_18536[(2)] = null);

(statearr_16791_18536[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16762 === (2))){
var inst_16698 = (state_16761[(12)]);
var inst_16695 = (state_16761[(11)]);
var inst_16698__$1 = cljs.core.__destructure_map(inst_16695);
var inst_16699 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16698__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16698__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16698__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16761__$1 = (function (){var statearr_16798 = state_16761;
(statearr_16798[(18)] = inst_16700);

(statearr_16798[(12)] = inst_16698__$1);

(statearr_16798[(16)] = inst_16699);

return statearr_16798;
})();
return cljs.core.async.ioc_alts_BANG_(state_16761__$1,(4),inst_16701);
} else {
if((state_val_16762 === (23))){
var inst_16745 = (state_16761[(2)]);
var state_16761__$1 = state_16761;
if(cljs.core.truth_(inst_16745)){
var statearr_16806_18537 = state_16761__$1;
(statearr_16806_18537[(1)] = (24));

} else {
var statearr_16808_18538 = state_16761__$1;
(statearr_16808_18538[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16762 === (19))){
var inst_16740 = (state_16761[(2)]);
var state_16761__$1 = state_16761;
var statearr_16814_18539 = state_16761__$1;
(statearr_16814_18539[(2)] = inst_16740);

(statearr_16814_18539[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16762 === (11))){
var inst_16708 = (state_16761[(14)]);
var inst_16723 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16708);
var state_16761__$1 = state_16761;
var statearr_16830_18540 = state_16761__$1;
(statearr_16830_18540[(2)] = inst_16723);

(statearr_16830_18540[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16762 === (9))){
var inst_16708 = (state_16761[(14)]);
var inst_16730 = (state_16761[(19)]);
var inst_16699 = (state_16761[(16)]);
var inst_16730__$1 = (inst_16699.cljs$core$IFn$_invoke$arity$1 ? inst_16699.cljs$core$IFn$_invoke$arity$1(inst_16708) : inst_16699.call(null, inst_16708));
var state_16761__$1 = (function (){var statearr_16833 = state_16761;
(statearr_16833[(19)] = inst_16730__$1);

return statearr_16833;
})();
if(cljs.core.truth_(inst_16730__$1)){
var statearr_16841_18541 = state_16761__$1;
(statearr_16841_18541[(1)] = (14));

} else {
var statearr_16842_18542 = state_16761__$1;
(statearr_16842_18542[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16762 === (5))){
var inst_16709 = (state_16761[(13)]);
var state_16761__$1 = state_16761;
var statearr_16843_18543 = state_16761__$1;
(statearr_16843_18543[(2)] = inst_16709);

(statearr_16843_18543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16762 === (14))){
var inst_16730 = (state_16761[(19)]);
var state_16761__$1 = state_16761;
var statearr_16844_18544 = state_16761__$1;
(statearr_16844_18544[(2)] = inst_16730);

(statearr_16844_18544[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16762 === (26))){
var inst_16750 = (state_16761[(2)]);
var state_16761__$1 = state_16761;
var statearr_16845_18545 = state_16761__$1;
(statearr_16845_18545[(2)] = inst_16750);

(statearr_16845_18545[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16762 === (16))){
var inst_16742 = (state_16761[(2)]);
var state_16761__$1 = state_16761;
if(cljs.core.truth_(inst_16742)){
var statearr_16846_18546 = state_16761__$1;
(statearr_16846_18546[(1)] = (20));

} else {
var statearr_16847_18547 = state_16761__$1;
(statearr_16847_18547[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16762 === (10))){
var inst_16756 = (state_16761[(2)]);
var state_16761__$1 = state_16761;
var statearr_16853_18548 = state_16761__$1;
(statearr_16853_18548[(2)] = inst_16756);

(statearr_16853_18548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16762 === (18))){
var inst_16733 = (state_16761[(15)]);
var state_16761__$1 = state_16761;
var statearr_16857_18549 = state_16761__$1;
(statearr_16857_18549[(2)] = inst_16733);

(statearr_16857_18549[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16762 === (8))){
var inst_16707 = (state_16761[(7)]);
var inst_16721 = (inst_16707 == null);
var state_16761__$1 = state_16761;
if(cljs.core.truth_(inst_16721)){
var statearr_16860_18550 = state_16761__$1;
(statearr_16860_18550[(1)] = (11));

} else {
var statearr_16863_18551 = state_16761__$1;
(statearr_16863_18551[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__14750__auto__ = null;
var cljs$core$async$mix_$_state_machine__14750__auto____0 = (function (){
var statearr_16873 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16873[(0)] = cljs$core$async$mix_$_state_machine__14750__auto__);

(statearr_16873[(1)] = (1));

return statearr_16873;
});
var cljs$core$async$mix_$_state_machine__14750__auto____1 = (function (state_16761){
while(true){
var ret_value__14751__auto__ = (function (){try{while(true){
var result__14752__auto__ = switch__14749__auto__(state_16761);
if(cljs.core.keyword_identical_QMARK_(result__14752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14752__auto__;
}
break;
}
}catch (e16878){var ex__14754__auto__ = e16878;
var statearr_16879_18552 = state_16761;
(statearr_16879_18552[(2)] = ex__14754__auto__);


if(cljs.core.seq((state_16761[(4)]))){
var statearr_16882_18553 = state_16761;
(statearr_16882_18553[(1)] = cljs.core.first((state_16761[(4)])));

} else {
throw ex__14754__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18554 = state_16761;
state_16761 = G__18554;
continue;
} else {
return ret_value__14751__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14750__auto__ = function(state_16761){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14750__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14750__auto____1.call(this,state_16761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14750__auto____0;
cljs$core$async$mix_$_state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14750__auto____1;
return cljs$core$async$mix_$_state_machine__14750__auto__;
})()
})();
var state__14918__auto__ = (function (){var statearr_16889 = f__14917__auto__();
(statearr_16889[(6)] = c__14916__auto___18521);

return statearr_16889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14918__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18565 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18565(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18570 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18570(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18574 = (function() {
var G__18575 = null;
var G__18575__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18575__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18575 = function(p,v){
switch(arguments.length){
case 1:
return G__18575__1.call(this,p);
case 2:
return G__18575__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18575.cljs$core$IFn$_invoke$arity$1 = G__18575__1;
G__18575.cljs$core$IFn$_invoke$arity$2 = G__18575__2;
return G__18575;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16918 = arguments.length;
switch (G__16918) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18574(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18574(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16929 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16930){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16930 = meta16930;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16931,meta16930__$1){
var self__ = this;
var _16931__$1 = this;
return (new cljs.core.async.t_cljs$core$async16929(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16930__$1));
}));

(cljs.core.async.t_cljs$core$async16929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16931){
var self__ = this;
var _16931__$1 = this;
return self__.meta16930;
}));

(cljs.core.async.t_cljs$core$async16929.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16929.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16929.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16929.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16929.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16929.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16929.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16929.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16930","meta16930",588166664,null)], null);
}));

(cljs.core.async.t_cljs$core$async16929.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16929.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16929");

(cljs.core.async.t_cljs$core$async16929.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16929");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16929.
 */
cljs.core.async.__GT_t_cljs$core$async16929 = (function cljs$core$async$__GT_t_cljs$core$async16929(ch,topic_fn,buf_fn,mults,ensure_mult,meta16930){
return (new cljs.core.async.t_cljs$core$async16929(ch,topic_fn,buf_fn,mults,ensure_mult,meta16930));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16923 = arguments.length;
switch (G__16923) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16919_SHARP_){
if(cljs.core.truth_((p1__16919_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16919_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16919_SHARP_.call(null, topic)))){
return p1__16919_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16919_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16929(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14916__auto___18686 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14917__auto__ = (function (){var switch__14749__auto__ = (function (state_17027){
var state_val_17028 = (state_17027[(1)]);
if((state_val_17028 === (7))){
var inst_17019 = (state_17027[(2)]);
var state_17027__$1 = state_17027;
var statearr_17033_18687 = state_17027__$1;
(statearr_17033_18687[(2)] = inst_17019);

(statearr_17033_18687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17028 === (20))){
var state_17027__$1 = state_17027;
var statearr_17040_18689 = state_17027__$1;
(statearr_17040_18689[(2)] = null);

(statearr_17040_18689[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17028 === (1))){
var state_17027__$1 = state_17027;
var statearr_17049_18690 = state_17027__$1;
(statearr_17049_18690[(2)] = null);

(statearr_17049_18690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17028 === (24))){
var inst_17002 = (state_17027[(7)]);
var inst_17011 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17002);
var state_17027__$1 = state_17027;
var statearr_17053_18691 = state_17027__$1;
(statearr_17053_18691[(2)] = inst_17011);

(statearr_17053_18691[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17028 === (4))){
var inst_16947 = (state_17027[(8)]);
var inst_16947__$1 = (state_17027[(2)]);
var inst_16948 = (inst_16947__$1 == null);
var state_17027__$1 = (function (){var statearr_17059 = state_17027;
(statearr_17059[(8)] = inst_16947__$1);

return statearr_17059;
})();
if(cljs.core.truth_(inst_16948)){
var statearr_17063_18692 = state_17027__$1;
(statearr_17063_18692[(1)] = (5));

} else {
var statearr_17064_18693 = state_17027__$1;
(statearr_17064_18693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17028 === (15))){
var inst_16996 = (state_17027[(2)]);
var state_17027__$1 = state_17027;
var statearr_17068_18694 = state_17027__$1;
(statearr_17068_18694[(2)] = inst_16996);

(statearr_17068_18694[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17028 === (21))){
var inst_17016 = (state_17027[(2)]);
var state_17027__$1 = (function (){var statearr_17071 = state_17027;
(statearr_17071[(9)] = inst_17016);

return statearr_17071;
})();
var statearr_17075_18695 = state_17027__$1;
(statearr_17075_18695[(2)] = null);

(statearr_17075_18695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17028 === (13))){
var inst_16974 = (state_17027[(10)]);
var inst_16976 = cljs.core.chunked_seq_QMARK_(inst_16974);
var state_17027__$1 = state_17027;
if(inst_16976){
var statearr_17085_18696 = state_17027__$1;
(statearr_17085_18696[(1)] = (16));

} else {
var statearr_17089_18697 = state_17027__$1;
(statearr_17089_18697[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17028 === (22))){
var inst_17008 = (state_17027[(2)]);
var state_17027__$1 = state_17027;
if(cljs.core.truth_(inst_17008)){
var statearr_17102_18698 = state_17027__$1;
(statearr_17102_18698[(1)] = (23));

} else {
var statearr_17103_18699 = state_17027__$1;
(statearr_17103_18699[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17028 === (6))){
var inst_17002 = (state_17027[(7)]);
var inst_17004 = (state_17027[(11)]);
var inst_16947 = (state_17027[(8)]);
var inst_17002__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16947) : topic_fn.call(null, inst_16947));
var inst_17003 = cljs.core.deref(mults);
var inst_17004__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17003,inst_17002__$1);
var state_17027__$1 = (function (){var statearr_17105 = state_17027;
(statearr_17105[(7)] = inst_17002__$1);

(statearr_17105[(11)] = inst_17004__$1);

return statearr_17105;
})();
if(cljs.core.truth_(inst_17004__$1)){
var statearr_17106_18700 = state_17027__$1;
(statearr_17106_18700[(1)] = (19));

} else {
var statearr_17107_18701 = state_17027__$1;
(statearr_17107_18701[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17028 === (25))){
var inst_17013 = (state_17027[(2)]);
var state_17027__$1 = state_17027;
var statearr_17111_18702 = state_17027__$1;
(statearr_17111_18702[(2)] = inst_17013);

(statearr_17111_18702[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17028 === (17))){
var inst_16974 = (state_17027[(10)]);
var inst_16987 = cljs.core.first(inst_16974);
var inst_16988 = cljs.core.async.muxch_STAR_(inst_16987);
var inst_16989 = cljs.core.async.close_BANG_(inst_16988);
var inst_16990 = cljs.core.next(inst_16974);
var inst_16960 = inst_16990;
var inst_16961 = null;
var inst_16962 = (0);
var inst_16963 = (0);
var state_17027__$1 = (function (){var statearr_17112 = state_17027;
(statearr_17112[(12)] = inst_16961);

(statearr_17112[(13)] = inst_16989);

(statearr_17112[(14)] = inst_16963);

(statearr_17112[(15)] = inst_16962);

(statearr_17112[(16)] = inst_16960);

return statearr_17112;
})();
var statearr_17118_18703 = state_17027__$1;
(statearr_17118_18703[(2)] = null);

(statearr_17118_18703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17028 === (3))){
var inst_17021 = (state_17027[(2)]);
var state_17027__$1 = state_17027;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17027__$1,inst_17021);
} else {
if((state_val_17028 === (12))){
var inst_16998 = (state_17027[(2)]);
var state_17027__$1 = state_17027;
var statearr_17122_18704 = state_17027__$1;
(statearr_17122_18704[(2)] = inst_16998);

(statearr_17122_18704[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17028 === (2))){
var state_17027__$1 = state_17027;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17027__$1,(4),ch);
} else {
if((state_val_17028 === (23))){
var state_17027__$1 = state_17027;
var statearr_17127_18705 = state_17027__$1;
(statearr_17127_18705[(2)] = null);

(statearr_17127_18705[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17028 === (19))){
var inst_17004 = (state_17027[(11)]);
var inst_16947 = (state_17027[(8)]);
var inst_17006 = cljs.core.async.muxch_STAR_(inst_17004);
var state_17027__$1 = state_17027;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17027__$1,(22),inst_17006,inst_16947);
} else {
if((state_val_17028 === (11))){
var inst_16960 = (state_17027[(16)]);
var inst_16974 = (state_17027[(10)]);
var inst_16974__$1 = cljs.core.seq(inst_16960);
var state_17027__$1 = (function (){var statearr_17131 = state_17027;
(statearr_17131[(10)] = inst_16974__$1);

return statearr_17131;
})();
if(inst_16974__$1){
var statearr_17132_18706 = state_17027__$1;
(statearr_17132_18706[(1)] = (13));

} else {
var statearr_17133_18707 = state_17027__$1;
(statearr_17133_18707[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17028 === (9))){
var inst_17000 = (state_17027[(2)]);
var state_17027__$1 = state_17027;
var statearr_17134_18708 = state_17027__$1;
(statearr_17134_18708[(2)] = inst_17000);

(statearr_17134_18708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17028 === (5))){
var inst_16957 = cljs.core.deref(mults);
var inst_16958 = cljs.core.vals(inst_16957);
var inst_16959 = cljs.core.seq(inst_16958);
var inst_16960 = inst_16959;
var inst_16961 = null;
var inst_16962 = (0);
var inst_16963 = (0);
var state_17027__$1 = (function (){var statearr_17135 = state_17027;
(statearr_17135[(12)] = inst_16961);

(statearr_17135[(14)] = inst_16963);

(statearr_17135[(15)] = inst_16962);

(statearr_17135[(16)] = inst_16960);

return statearr_17135;
})();
var statearr_17136_18709 = state_17027__$1;
(statearr_17136_18709[(2)] = null);

(statearr_17136_18709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17028 === (14))){
var state_17027__$1 = state_17027;
var statearr_17140_18710 = state_17027__$1;
(statearr_17140_18710[(2)] = null);

(statearr_17140_18710[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17028 === (16))){
var inst_16974 = (state_17027[(10)]);
var inst_16982 = cljs.core.chunk_first(inst_16974);
var inst_16983 = cljs.core.chunk_rest(inst_16974);
var inst_16984 = cljs.core.count(inst_16982);
var inst_16960 = inst_16983;
var inst_16961 = inst_16982;
var inst_16962 = inst_16984;
var inst_16963 = (0);
var state_17027__$1 = (function (){var statearr_17141 = state_17027;
(statearr_17141[(12)] = inst_16961);

(statearr_17141[(14)] = inst_16963);

(statearr_17141[(15)] = inst_16962);

(statearr_17141[(16)] = inst_16960);

return statearr_17141;
})();
var statearr_17142_18711 = state_17027__$1;
(statearr_17142_18711[(2)] = null);

(statearr_17142_18711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17028 === (10))){
var inst_16961 = (state_17027[(12)]);
var inst_16963 = (state_17027[(14)]);
var inst_16962 = (state_17027[(15)]);
var inst_16960 = (state_17027[(16)]);
var inst_16968 = cljs.core._nth(inst_16961,inst_16963);
var inst_16969 = cljs.core.async.muxch_STAR_(inst_16968);
var inst_16970 = cljs.core.async.close_BANG_(inst_16969);
var inst_16971 = (inst_16963 + (1));
var tmp17137 = inst_16961;
var tmp17138 = inst_16962;
var tmp17139 = inst_16960;
var inst_16960__$1 = tmp17139;
var inst_16961__$1 = tmp17137;
var inst_16962__$1 = tmp17138;
var inst_16963__$1 = inst_16971;
var state_17027__$1 = (function (){var statearr_17143 = state_17027;
(statearr_17143[(12)] = inst_16961__$1);

(statearr_17143[(14)] = inst_16963__$1);

(statearr_17143[(15)] = inst_16962__$1);

(statearr_17143[(17)] = inst_16970);

(statearr_17143[(16)] = inst_16960__$1);

return statearr_17143;
})();
var statearr_17144_18712 = state_17027__$1;
(statearr_17144_18712[(2)] = null);

(statearr_17144_18712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17028 === (18))){
var inst_16993 = (state_17027[(2)]);
var state_17027__$1 = state_17027;
var statearr_17145_18713 = state_17027__$1;
(statearr_17145_18713[(2)] = inst_16993);

(statearr_17145_18713[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17028 === (8))){
var inst_16963 = (state_17027[(14)]);
var inst_16962 = (state_17027[(15)]);
var inst_16965 = (inst_16963 < inst_16962);
var inst_16966 = inst_16965;
var state_17027__$1 = state_17027;
if(cljs.core.truth_(inst_16966)){
var statearr_17146_18714 = state_17027__$1;
(statearr_17146_18714[(1)] = (10));

} else {
var statearr_17147_18715 = state_17027__$1;
(statearr_17147_18715[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14750__auto__ = null;
var cljs$core$async$state_machine__14750__auto____0 = (function (){
var statearr_17148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17148[(0)] = cljs$core$async$state_machine__14750__auto__);

(statearr_17148[(1)] = (1));

return statearr_17148;
});
var cljs$core$async$state_machine__14750__auto____1 = (function (state_17027){
while(true){
var ret_value__14751__auto__ = (function (){try{while(true){
var result__14752__auto__ = switch__14749__auto__(state_17027);
if(cljs.core.keyword_identical_QMARK_(result__14752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14752__auto__;
}
break;
}
}catch (e17149){var ex__14754__auto__ = e17149;
var statearr_17150_18716 = state_17027;
(statearr_17150_18716[(2)] = ex__14754__auto__);


if(cljs.core.seq((state_17027[(4)]))){
var statearr_17151_18717 = state_17027;
(statearr_17151_18717[(1)] = cljs.core.first((state_17027[(4)])));

} else {
throw ex__14754__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18718 = state_17027;
state_17027 = G__18718;
continue;
} else {
return ret_value__14751__auto__;
}
break;
}
});
cljs$core$async$state_machine__14750__auto__ = function(state_17027){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14750__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14750__auto____1.call(this,state_17027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14750__auto____0;
cljs$core$async$state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14750__auto____1;
return cljs$core$async$state_machine__14750__auto__;
})()
})();
var state__14918__auto__ = (function (){var statearr_17152 = f__14917__auto__();
(statearr_17152[(6)] = c__14916__auto___18686);

return statearr_17152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14918__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__17155 = arguments.length;
switch (G__17155) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17160 = arguments.length;
switch (G__17160) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__17171 = arguments.length;
switch (G__17171) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14916__auto___18722 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14917__auto__ = (function (){var switch__14749__auto__ = (function (state_17230){
var state_val_17231 = (state_17230[(1)]);
if((state_val_17231 === (7))){
var state_17230__$1 = state_17230;
var statearr_17236_18723 = state_17230__$1;
(statearr_17236_18723[(2)] = null);

(statearr_17236_18723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17231 === (1))){
var state_17230__$1 = state_17230;
var statearr_17237_18724 = state_17230__$1;
(statearr_17237_18724[(2)] = null);

(statearr_17237_18724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17231 === (4))){
var inst_17176 = (state_17230[(7)]);
var inst_17177 = (state_17230[(8)]);
var inst_17183 = (inst_17177 < inst_17176);
var state_17230__$1 = state_17230;
if(cljs.core.truth_(inst_17183)){
var statearr_17245_18725 = state_17230__$1;
(statearr_17245_18725[(1)] = (6));

} else {
var statearr_17247_18726 = state_17230__$1;
(statearr_17247_18726[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17231 === (15))){
var inst_17216 = (state_17230[(9)]);
var inst_17221 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17216);
var state_17230__$1 = state_17230;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17230__$1,(17),out,inst_17221);
} else {
if((state_val_17231 === (13))){
var inst_17216 = (state_17230[(9)]);
var inst_17216__$1 = (state_17230[(2)]);
var inst_17217 = cljs.core.some(cljs.core.nil_QMARK_,inst_17216__$1);
var state_17230__$1 = (function (){var statearr_17253 = state_17230;
(statearr_17253[(9)] = inst_17216__$1);

return statearr_17253;
})();
if(cljs.core.truth_(inst_17217)){
var statearr_17254_18727 = state_17230__$1;
(statearr_17254_18727[(1)] = (14));

} else {
var statearr_17255_18728 = state_17230__$1;
(statearr_17255_18728[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17231 === (6))){
var state_17230__$1 = state_17230;
var statearr_17256_18729 = state_17230__$1;
(statearr_17256_18729[(2)] = null);

(statearr_17256_18729[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17231 === (17))){
var inst_17223 = (state_17230[(2)]);
var state_17230__$1 = (function (){var statearr_17279 = state_17230;
(statearr_17279[(10)] = inst_17223);

return statearr_17279;
})();
var statearr_17280_18730 = state_17230__$1;
(statearr_17280_18730[(2)] = null);

(statearr_17280_18730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17231 === (3))){
var inst_17228 = (state_17230[(2)]);
var state_17230__$1 = state_17230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17230__$1,inst_17228);
} else {
if((state_val_17231 === (12))){
var _ = (function (){var statearr_17281 = state_17230;
(statearr_17281[(4)] = cljs.core.rest((state_17230[(4)])));

return statearr_17281;
})();
var state_17230__$1 = state_17230;
var ex17278 = (state_17230__$1[(2)]);
var statearr_17286_18731 = state_17230__$1;
(statearr_17286_18731[(5)] = ex17278);


if((ex17278 instanceof Object)){
var statearr_17291_18732 = state_17230__$1;
(statearr_17291_18732[(1)] = (11));

(statearr_17291_18732[(5)] = null);

} else {
throw ex17278;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17231 === (2))){
var inst_17175 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17176 = cnt;
var inst_17177 = (0);
var state_17230__$1 = (function (){var statearr_17299 = state_17230;
(statearr_17299[(11)] = inst_17175);

(statearr_17299[(7)] = inst_17176);

(statearr_17299[(8)] = inst_17177);

return statearr_17299;
})();
var statearr_17300_18733 = state_17230__$1;
(statearr_17300_18733[(2)] = null);

(statearr_17300_18733[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17231 === (11))){
var inst_17191 = (state_17230[(2)]);
var inst_17192 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17230__$1 = (function (){var statearr_17304 = state_17230;
(statearr_17304[(12)] = inst_17191);

return statearr_17304;
})();
var statearr_17306_18734 = state_17230__$1;
(statearr_17306_18734[(2)] = inst_17192);

(statearr_17306_18734[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17231 === (9))){
var inst_17177 = (state_17230[(8)]);
var _ = (function (){var statearr_17307 = state_17230;
(statearr_17307[(4)] = cljs.core.cons((12),(state_17230[(4)])));

return statearr_17307;
})();
var inst_17202 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17177) : chs__$1.call(null, inst_17177));
var inst_17203 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17177) : done.call(null, inst_17177));
var inst_17204 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17202,inst_17203);
var ___$1 = (function (){var statearr_17308 = state_17230;
(statearr_17308[(4)] = cljs.core.rest((state_17230[(4)])));

return statearr_17308;
})();
var state_17230__$1 = state_17230;
var statearr_17309_18735 = state_17230__$1;
(statearr_17309_18735[(2)] = inst_17204);

(statearr_17309_18735[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17231 === (5))){
var inst_17214 = (state_17230[(2)]);
var state_17230__$1 = (function (){var statearr_17310 = state_17230;
(statearr_17310[(13)] = inst_17214);

return statearr_17310;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17230__$1,(13),dchan);
} else {
if((state_val_17231 === (14))){
var inst_17219 = cljs.core.async.close_BANG_(out);
var state_17230__$1 = state_17230;
var statearr_17311_18736 = state_17230__$1;
(statearr_17311_18736[(2)] = inst_17219);

(statearr_17311_18736[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17231 === (16))){
var inst_17226 = (state_17230[(2)]);
var state_17230__$1 = state_17230;
var statearr_17312_18737 = state_17230__$1;
(statearr_17312_18737[(2)] = inst_17226);

(statearr_17312_18737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17231 === (10))){
var inst_17177 = (state_17230[(8)]);
var inst_17207 = (state_17230[(2)]);
var inst_17208 = (inst_17177 + (1));
var inst_17177__$1 = inst_17208;
var state_17230__$1 = (function (){var statearr_17313 = state_17230;
(statearr_17313[(14)] = inst_17207);

(statearr_17313[(8)] = inst_17177__$1);

return statearr_17313;
})();
var statearr_17314_18738 = state_17230__$1;
(statearr_17314_18738[(2)] = null);

(statearr_17314_18738[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17231 === (8))){
var inst_17212 = (state_17230[(2)]);
var state_17230__$1 = state_17230;
var statearr_17318_18739 = state_17230__$1;
(statearr_17318_18739[(2)] = inst_17212);

(statearr_17318_18739[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14750__auto__ = null;
var cljs$core$async$state_machine__14750__auto____0 = (function (){
var statearr_17319 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17319[(0)] = cljs$core$async$state_machine__14750__auto__);

(statearr_17319[(1)] = (1));

return statearr_17319;
});
var cljs$core$async$state_machine__14750__auto____1 = (function (state_17230){
while(true){
var ret_value__14751__auto__ = (function (){try{while(true){
var result__14752__auto__ = switch__14749__auto__(state_17230);
if(cljs.core.keyword_identical_QMARK_(result__14752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14752__auto__;
}
break;
}
}catch (e17320){var ex__14754__auto__ = e17320;
var statearr_17321_18740 = state_17230;
(statearr_17321_18740[(2)] = ex__14754__auto__);


if(cljs.core.seq((state_17230[(4)]))){
var statearr_17322_18741 = state_17230;
(statearr_17322_18741[(1)] = cljs.core.first((state_17230[(4)])));

} else {
throw ex__14754__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18742 = state_17230;
state_17230 = G__18742;
continue;
} else {
return ret_value__14751__auto__;
}
break;
}
});
cljs$core$async$state_machine__14750__auto__ = function(state_17230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14750__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14750__auto____1.call(this,state_17230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14750__auto____0;
cljs$core$async$state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14750__auto____1;
return cljs$core$async$state_machine__14750__auto__;
})()
})();
var state__14918__auto__ = (function (){var statearr_17323 = f__14917__auto__();
(statearr_17323[(6)] = c__14916__auto___18722);

return statearr_17323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14918__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__17326 = arguments.length;
switch (G__17326) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14916__auto___18744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14917__auto__ = (function (){var switch__14749__auto__ = (function (state_17379){
var state_val_17380 = (state_17379[(1)]);
if((state_val_17380 === (7))){
var inst_17350 = (state_17379[(7)]);
var inst_17351 = (state_17379[(8)]);
var inst_17350__$1 = (state_17379[(2)]);
var inst_17351__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17350__$1,(0),null);
var inst_17352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17350__$1,(1),null);
var inst_17353 = (inst_17351__$1 == null);
var state_17379__$1 = (function (){var statearr_17385 = state_17379;
(statearr_17385[(9)] = inst_17352);

(statearr_17385[(7)] = inst_17350__$1);

(statearr_17385[(8)] = inst_17351__$1);

return statearr_17385;
})();
if(cljs.core.truth_(inst_17353)){
var statearr_17386_18745 = state_17379__$1;
(statearr_17386_18745[(1)] = (8));

} else {
var statearr_17387_18746 = state_17379__$1;
(statearr_17387_18746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17380 === (1))){
var inst_17340 = cljs.core.vec(chs);
var inst_17341 = inst_17340;
var state_17379__$1 = (function (){var statearr_17388 = state_17379;
(statearr_17388[(10)] = inst_17341);

return statearr_17388;
})();
var statearr_17389_18747 = state_17379__$1;
(statearr_17389_18747[(2)] = null);

(statearr_17389_18747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17380 === (4))){
var inst_17341 = (state_17379[(10)]);
var state_17379__$1 = state_17379;
return cljs.core.async.ioc_alts_BANG_(state_17379__$1,(7),inst_17341);
} else {
if((state_val_17380 === (6))){
var inst_17371 = (state_17379[(2)]);
var state_17379__$1 = state_17379;
var statearr_17394_18748 = state_17379__$1;
(statearr_17394_18748[(2)] = inst_17371);

(statearr_17394_18748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17380 === (3))){
var inst_17373 = (state_17379[(2)]);
var state_17379__$1 = state_17379;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17379__$1,inst_17373);
} else {
if((state_val_17380 === (2))){
var inst_17341 = (state_17379[(10)]);
var inst_17343 = cljs.core.count(inst_17341);
var inst_17344 = (inst_17343 > (0));
var state_17379__$1 = state_17379;
if(cljs.core.truth_(inst_17344)){
var statearr_17396_18749 = state_17379__$1;
(statearr_17396_18749[(1)] = (4));

} else {
var statearr_17397_18750 = state_17379__$1;
(statearr_17397_18750[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17380 === (11))){
var inst_17341 = (state_17379[(10)]);
var inst_17364 = (state_17379[(2)]);
var tmp17395 = inst_17341;
var inst_17341__$1 = tmp17395;
var state_17379__$1 = (function (){var statearr_17398 = state_17379;
(statearr_17398[(10)] = inst_17341__$1);

(statearr_17398[(11)] = inst_17364);

return statearr_17398;
})();
var statearr_17399_18751 = state_17379__$1;
(statearr_17399_18751[(2)] = null);

(statearr_17399_18751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17380 === (9))){
var inst_17351 = (state_17379[(8)]);
var state_17379__$1 = state_17379;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17379__$1,(11),out,inst_17351);
} else {
if((state_val_17380 === (5))){
var inst_17369 = cljs.core.async.close_BANG_(out);
var state_17379__$1 = state_17379;
var statearr_17404_18752 = state_17379__$1;
(statearr_17404_18752[(2)] = inst_17369);

(statearr_17404_18752[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17380 === (10))){
var inst_17367 = (state_17379[(2)]);
var state_17379__$1 = state_17379;
var statearr_17405_18753 = state_17379__$1;
(statearr_17405_18753[(2)] = inst_17367);

(statearr_17405_18753[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17380 === (8))){
var inst_17341 = (state_17379[(10)]);
var inst_17352 = (state_17379[(9)]);
var inst_17350 = (state_17379[(7)]);
var inst_17351 = (state_17379[(8)]);
var inst_17355 = (function (){var cs = inst_17341;
var vec__17346 = inst_17350;
var v = inst_17351;
var c = inst_17352;
return (function (p1__17324_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17324_SHARP_);
});
})();
var inst_17359 = cljs.core.filterv(inst_17355,inst_17341);
var inst_17341__$1 = inst_17359;
var state_17379__$1 = (function (){var statearr_17406 = state_17379;
(statearr_17406[(10)] = inst_17341__$1);

return statearr_17406;
})();
var statearr_17407_18754 = state_17379__$1;
(statearr_17407_18754[(2)] = null);

(statearr_17407_18754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14750__auto__ = null;
var cljs$core$async$state_machine__14750__auto____0 = (function (){
var statearr_17408 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17408[(0)] = cljs$core$async$state_machine__14750__auto__);

(statearr_17408[(1)] = (1));

return statearr_17408;
});
var cljs$core$async$state_machine__14750__auto____1 = (function (state_17379){
while(true){
var ret_value__14751__auto__ = (function (){try{while(true){
var result__14752__auto__ = switch__14749__auto__(state_17379);
if(cljs.core.keyword_identical_QMARK_(result__14752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14752__auto__;
}
break;
}
}catch (e17409){var ex__14754__auto__ = e17409;
var statearr_17410_18755 = state_17379;
(statearr_17410_18755[(2)] = ex__14754__auto__);


if(cljs.core.seq((state_17379[(4)]))){
var statearr_17411_18756 = state_17379;
(statearr_17411_18756[(1)] = cljs.core.first((state_17379[(4)])));

} else {
throw ex__14754__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18757 = state_17379;
state_17379 = G__18757;
continue;
} else {
return ret_value__14751__auto__;
}
break;
}
});
cljs$core$async$state_machine__14750__auto__ = function(state_17379){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14750__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14750__auto____1.call(this,state_17379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14750__auto____0;
cljs$core$async$state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14750__auto____1;
return cljs$core$async$state_machine__14750__auto__;
})()
})();
var state__14918__auto__ = (function (){var statearr_17413 = f__14917__auto__();
(statearr_17413[(6)] = c__14916__auto___18744);

return statearr_17413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14918__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17416 = arguments.length;
switch (G__17416) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14916__auto___18759 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14917__auto__ = (function (){var switch__14749__auto__ = (function (state_17463){
var state_val_17464 = (state_17463[(1)]);
if((state_val_17464 === (7))){
var inst_17444 = (state_17463[(7)]);
var inst_17444__$1 = (state_17463[(2)]);
var inst_17446 = (inst_17444__$1 == null);
var inst_17447 = cljs.core.not(inst_17446);
var state_17463__$1 = (function (){var statearr_17465 = state_17463;
(statearr_17465[(7)] = inst_17444__$1);

return statearr_17465;
})();
if(inst_17447){
var statearr_17466_18760 = state_17463__$1;
(statearr_17466_18760[(1)] = (8));

} else {
var statearr_17474_18761 = state_17463__$1;
(statearr_17474_18761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17464 === (1))){
var inst_17421 = (0);
var state_17463__$1 = (function (){var statearr_17475 = state_17463;
(statearr_17475[(8)] = inst_17421);

return statearr_17475;
})();
var statearr_17476_18762 = state_17463__$1;
(statearr_17476_18762[(2)] = null);

(statearr_17476_18762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17464 === (4))){
var state_17463__$1 = state_17463;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17463__$1,(7),ch);
} else {
if((state_val_17464 === (6))){
var inst_17458 = (state_17463[(2)]);
var state_17463__$1 = state_17463;
var statearr_17478_18763 = state_17463__$1;
(statearr_17478_18763[(2)] = inst_17458);

(statearr_17478_18763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17464 === (3))){
var inst_17460 = (state_17463[(2)]);
var inst_17461 = cljs.core.async.close_BANG_(out);
var state_17463__$1 = (function (){var statearr_17480 = state_17463;
(statearr_17480[(9)] = inst_17460);

return statearr_17480;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17463__$1,inst_17461);
} else {
if((state_val_17464 === (2))){
var inst_17421 = (state_17463[(8)]);
var inst_17441 = (inst_17421 < n);
var state_17463__$1 = state_17463;
if(cljs.core.truth_(inst_17441)){
var statearr_17481_18764 = state_17463__$1;
(statearr_17481_18764[(1)] = (4));

} else {
var statearr_17482_18765 = state_17463__$1;
(statearr_17482_18765[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17464 === (11))){
var inst_17421 = (state_17463[(8)]);
var inst_17450 = (state_17463[(2)]);
var inst_17451 = (inst_17421 + (1));
var inst_17421__$1 = inst_17451;
var state_17463__$1 = (function (){var statearr_17483 = state_17463;
(statearr_17483[(10)] = inst_17450);

(statearr_17483[(8)] = inst_17421__$1);

return statearr_17483;
})();
var statearr_17484_18766 = state_17463__$1;
(statearr_17484_18766[(2)] = null);

(statearr_17484_18766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17464 === (9))){
var state_17463__$1 = state_17463;
var statearr_17485_18767 = state_17463__$1;
(statearr_17485_18767[(2)] = null);

(statearr_17485_18767[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17464 === (5))){
var state_17463__$1 = state_17463;
var statearr_17486_18768 = state_17463__$1;
(statearr_17486_18768[(2)] = null);

(statearr_17486_18768[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17464 === (10))){
var inst_17455 = (state_17463[(2)]);
var state_17463__$1 = state_17463;
var statearr_17487_18769 = state_17463__$1;
(statearr_17487_18769[(2)] = inst_17455);

(statearr_17487_18769[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17464 === (8))){
var inst_17444 = (state_17463[(7)]);
var state_17463__$1 = state_17463;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17463__$1,(11),out,inst_17444);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14750__auto__ = null;
var cljs$core$async$state_machine__14750__auto____0 = (function (){
var statearr_17490 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17490[(0)] = cljs$core$async$state_machine__14750__auto__);

(statearr_17490[(1)] = (1));

return statearr_17490;
});
var cljs$core$async$state_machine__14750__auto____1 = (function (state_17463){
while(true){
var ret_value__14751__auto__ = (function (){try{while(true){
var result__14752__auto__ = switch__14749__auto__(state_17463);
if(cljs.core.keyword_identical_QMARK_(result__14752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14752__auto__;
}
break;
}
}catch (e17491){var ex__14754__auto__ = e17491;
var statearr_17492_18770 = state_17463;
(statearr_17492_18770[(2)] = ex__14754__auto__);


if(cljs.core.seq((state_17463[(4)]))){
var statearr_17495_18771 = state_17463;
(statearr_17495_18771[(1)] = cljs.core.first((state_17463[(4)])));

} else {
throw ex__14754__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18772 = state_17463;
state_17463 = G__18772;
continue;
} else {
return ret_value__14751__auto__;
}
break;
}
});
cljs$core$async$state_machine__14750__auto__ = function(state_17463){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14750__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14750__auto____1.call(this,state_17463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14750__auto____0;
cljs$core$async$state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14750__auto____1;
return cljs$core$async$state_machine__14750__auto__;
})()
})();
var state__14918__auto__ = (function (){var statearr_17497 = f__14917__auto__();
(statearr_17497[(6)] = c__14916__auto___18759);

return statearr_17497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14918__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17511 = (function (f,ch,meta17502,_,fn1,meta17512){
this.f = f;
this.ch = ch;
this.meta17502 = meta17502;
this._ = _;
this.fn1 = fn1;
this.meta17512 = meta17512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17513,meta17512__$1){
var self__ = this;
var _17513__$1 = this;
return (new cljs.core.async.t_cljs$core$async17511(self__.f,self__.ch,self__.meta17502,self__._,self__.fn1,meta17512__$1));
}));

(cljs.core.async.t_cljs$core$async17511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17513){
var self__ = this;
var _17513__$1 = this;
return self__.meta17512;
}));

(cljs.core.async.t_cljs$core$async17511.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17511.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17511.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17511.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17499_SHARP_){
var G__17516 = (((p1__17499_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17499_SHARP_) : self__.f.call(null, p1__17499_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17516) : f1.call(null, G__17516));
});
}));

(cljs.core.async.t_cljs$core$async17511.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17502","meta17502",-524090627,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17501","cljs.core.async/t_cljs$core$async17501",1720323571,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17512","meta17512",740120607,null)], null);
}));

(cljs.core.async.t_cljs$core$async17511.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17511.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17511");

(cljs.core.async.t_cljs$core$async17511.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17511");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17511.
 */
cljs.core.async.__GT_t_cljs$core$async17511 = (function cljs$core$async$__GT_t_cljs$core$async17511(f,ch,meta17502,_,fn1,meta17512){
return (new cljs.core.async.t_cljs$core$async17511(f,ch,meta17502,_,fn1,meta17512));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17501 = (function (f,ch,meta17502){
this.f = f;
this.ch = ch;
this.meta17502 = meta17502;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17503,meta17502__$1){
var self__ = this;
var _17503__$1 = this;
return (new cljs.core.async.t_cljs$core$async17501(self__.f,self__.ch,meta17502__$1));
}));

(cljs.core.async.t_cljs$core$async17501.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17503){
var self__ = this;
var _17503__$1 = this;
return self__.meta17502;
}));

(cljs.core.async.t_cljs$core$async17501.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17501.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17501.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17501.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17501.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17511(self__.f,self__.ch,self__.meta17502,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17532 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17532) : self__.f.call(null, G__17532));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17501.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17501.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17501.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17502","meta17502",-524090627,null)], null);
}));

(cljs.core.async.t_cljs$core$async17501.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17501.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17501");

(cljs.core.async.t_cljs$core$async17501.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17501");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17501.
 */
cljs.core.async.__GT_t_cljs$core$async17501 = (function cljs$core$async$__GT_t_cljs$core$async17501(f,ch,meta17502){
return (new cljs.core.async.t_cljs$core$async17501(f,ch,meta17502));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17501(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17533 = (function (f,ch,meta17534){
this.f = f;
this.ch = ch;
this.meta17534 = meta17534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17535,meta17534__$1){
var self__ = this;
var _17535__$1 = this;
return (new cljs.core.async.t_cljs$core$async17533(self__.f,self__.ch,meta17534__$1));
}));

(cljs.core.async.t_cljs$core$async17533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17535){
var self__ = this;
var _17535__$1 = this;
return self__.meta17534;
}));

(cljs.core.async.t_cljs$core$async17533.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17533.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17533.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17533.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17533.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17533.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17533.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17534","meta17534",-1469358796,null)], null);
}));

(cljs.core.async.t_cljs$core$async17533.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17533.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17533");

(cljs.core.async.t_cljs$core$async17533.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17533");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17533.
 */
cljs.core.async.__GT_t_cljs$core$async17533 = (function cljs$core$async$__GT_t_cljs$core$async17533(f,ch,meta17534){
return (new cljs.core.async.t_cljs$core$async17533(f,ch,meta17534));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17533(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17564 = (function (p,ch,meta17565){
this.p = p;
this.ch = ch;
this.meta17565 = meta17565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17566,meta17565__$1){
var self__ = this;
var _17566__$1 = this;
return (new cljs.core.async.t_cljs$core$async17564(self__.p,self__.ch,meta17565__$1));
}));

(cljs.core.async.t_cljs$core$async17564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17566){
var self__ = this;
var _17566__$1 = this;
return self__.meta17565;
}));

(cljs.core.async.t_cljs$core$async17564.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17564.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17564.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17564.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17564.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17564.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17564.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17564.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17565","meta17565",1231113318,null)], null);
}));

(cljs.core.async.t_cljs$core$async17564.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17564");

(cljs.core.async.t_cljs$core$async17564.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17564");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17564.
 */
cljs.core.async.__GT_t_cljs$core$async17564 = (function cljs$core$async$__GT_t_cljs$core$async17564(p,ch,meta17565){
return (new cljs.core.async.t_cljs$core$async17564(p,ch,meta17565));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17564(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17578 = arguments.length;
switch (G__17578) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14916__auto___18790 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14917__auto__ = (function (){var switch__14749__auto__ = (function (state_17603){
var state_val_17604 = (state_17603[(1)]);
if((state_val_17604 === (7))){
var inst_17599 = (state_17603[(2)]);
var state_17603__$1 = state_17603;
var statearr_17611_18791 = state_17603__$1;
(statearr_17611_18791[(2)] = inst_17599);

(statearr_17611_18791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17604 === (1))){
var state_17603__$1 = state_17603;
var statearr_17613_18792 = state_17603__$1;
(statearr_17613_18792[(2)] = null);

(statearr_17613_18792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17604 === (4))){
var inst_17585 = (state_17603[(7)]);
var inst_17585__$1 = (state_17603[(2)]);
var inst_17586 = (inst_17585__$1 == null);
var state_17603__$1 = (function (){var statearr_17614 = state_17603;
(statearr_17614[(7)] = inst_17585__$1);

return statearr_17614;
})();
if(cljs.core.truth_(inst_17586)){
var statearr_17615_18793 = state_17603__$1;
(statearr_17615_18793[(1)] = (5));

} else {
var statearr_17616_18794 = state_17603__$1;
(statearr_17616_18794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17604 === (6))){
var inst_17585 = (state_17603[(7)]);
var inst_17590 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17585) : p.call(null, inst_17585));
var state_17603__$1 = state_17603;
if(cljs.core.truth_(inst_17590)){
var statearr_17618_18795 = state_17603__$1;
(statearr_17618_18795[(1)] = (8));

} else {
var statearr_17619_18796 = state_17603__$1;
(statearr_17619_18796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17604 === (3))){
var inst_17601 = (state_17603[(2)]);
var state_17603__$1 = state_17603;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17603__$1,inst_17601);
} else {
if((state_val_17604 === (2))){
var state_17603__$1 = state_17603;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17603__$1,(4),ch);
} else {
if((state_val_17604 === (11))){
var inst_17593 = (state_17603[(2)]);
var state_17603__$1 = state_17603;
var statearr_17624_18797 = state_17603__$1;
(statearr_17624_18797[(2)] = inst_17593);

(statearr_17624_18797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17604 === (9))){
var state_17603__$1 = state_17603;
var statearr_17625_18798 = state_17603__$1;
(statearr_17625_18798[(2)] = null);

(statearr_17625_18798[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17604 === (5))){
var inst_17588 = cljs.core.async.close_BANG_(out);
var state_17603__$1 = state_17603;
var statearr_17626_18799 = state_17603__$1;
(statearr_17626_18799[(2)] = inst_17588);

(statearr_17626_18799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17604 === (10))){
var inst_17596 = (state_17603[(2)]);
var state_17603__$1 = (function (){var statearr_17627 = state_17603;
(statearr_17627[(8)] = inst_17596);

return statearr_17627;
})();
var statearr_17628_18820 = state_17603__$1;
(statearr_17628_18820[(2)] = null);

(statearr_17628_18820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17604 === (8))){
var inst_17585 = (state_17603[(7)]);
var state_17603__$1 = state_17603;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17603__$1,(11),out,inst_17585);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14750__auto__ = null;
var cljs$core$async$state_machine__14750__auto____0 = (function (){
var statearr_17629 = [null,null,null,null,null,null,null,null,null];
(statearr_17629[(0)] = cljs$core$async$state_machine__14750__auto__);

(statearr_17629[(1)] = (1));

return statearr_17629;
});
var cljs$core$async$state_machine__14750__auto____1 = (function (state_17603){
while(true){
var ret_value__14751__auto__ = (function (){try{while(true){
var result__14752__auto__ = switch__14749__auto__(state_17603);
if(cljs.core.keyword_identical_QMARK_(result__14752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14752__auto__;
}
break;
}
}catch (e17630){var ex__14754__auto__ = e17630;
var statearr_17631_18825 = state_17603;
(statearr_17631_18825[(2)] = ex__14754__auto__);


if(cljs.core.seq((state_17603[(4)]))){
var statearr_17632_18826 = state_17603;
(statearr_17632_18826[(1)] = cljs.core.first((state_17603[(4)])));

} else {
throw ex__14754__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18827 = state_17603;
state_17603 = G__18827;
continue;
} else {
return ret_value__14751__auto__;
}
break;
}
});
cljs$core$async$state_machine__14750__auto__ = function(state_17603){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14750__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14750__auto____1.call(this,state_17603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14750__auto____0;
cljs$core$async$state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14750__auto____1;
return cljs$core$async$state_machine__14750__auto__;
})()
})();
var state__14918__auto__ = (function (){var statearr_17635 = f__14917__auto__();
(statearr_17635[(6)] = c__14916__auto___18790);

return statearr_17635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14918__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17637 = arguments.length;
switch (G__17637) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14916__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14917__auto__ = (function (){var switch__14749__auto__ = (function (state_17705){
var state_val_17709 = (state_17705[(1)]);
if((state_val_17709 === (7))){
var inst_17701 = (state_17705[(2)]);
var state_17705__$1 = state_17705;
var statearr_17717_18860 = state_17705__$1;
(statearr_17717_18860[(2)] = inst_17701);

(statearr_17717_18860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17709 === (20))){
var inst_17670 = (state_17705[(7)]);
var inst_17682 = (state_17705[(2)]);
var inst_17683 = cljs.core.next(inst_17670);
var inst_17656 = inst_17683;
var inst_17657 = null;
var inst_17658 = (0);
var inst_17659 = (0);
var state_17705__$1 = (function (){var statearr_17718 = state_17705;
(statearr_17718[(8)] = inst_17682);

(statearr_17718[(9)] = inst_17659);

(statearr_17718[(10)] = inst_17658);

(statearr_17718[(11)] = inst_17656);

(statearr_17718[(12)] = inst_17657);

return statearr_17718;
})();
var statearr_17719_18864 = state_17705__$1;
(statearr_17719_18864[(2)] = null);

(statearr_17719_18864[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17709 === (1))){
var state_17705__$1 = state_17705;
var statearr_17720_18865 = state_17705__$1;
(statearr_17720_18865[(2)] = null);

(statearr_17720_18865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17709 === (4))){
var inst_17645 = (state_17705[(13)]);
var inst_17645__$1 = (state_17705[(2)]);
var inst_17646 = (inst_17645__$1 == null);
var state_17705__$1 = (function (){var statearr_17721 = state_17705;
(statearr_17721[(13)] = inst_17645__$1);

return statearr_17721;
})();
if(cljs.core.truth_(inst_17646)){
var statearr_17722_18866 = state_17705__$1;
(statearr_17722_18866[(1)] = (5));

} else {
var statearr_17723_18867 = state_17705__$1;
(statearr_17723_18867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17709 === (15))){
var state_17705__$1 = state_17705;
var statearr_17727_18873 = state_17705__$1;
(statearr_17727_18873[(2)] = null);

(statearr_17727_18873[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17709 === (21))){
var state_17705__$1 = state_17705;
var statearr_17728_18874 = state_17705__$1;
(statearr_17728_18874[(2)] = null);

(statearr_17728_18874[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17709 === (13))){
var inst_17659 = (state_17705[(9)]);
var inst_17658 = (state_17705[(10)]);
var inst_17656 = (state_17705[(11)]);
var inst_17657 = (state_17705[(12)]);
var inst_17666 = (state_17705[(2)]);
var inst_17667 = (inst_17659 + (1));
var tmp17724 = inst_17658;
var tmp17725 = inst_17656;
var tmp17726 = inst_17657;
var inst_17656__$1 = tmp17725;
var inst_17657__$1 = tmp17726;
var inst_17658__$1 = tmp17724;
var inst_17659__$1 = inst_17667;
var state_17705__$1 = (function (){var statearr_17729 = state_17705;
(statearr_17729[(9)] = inst_17659__$1);

(statearr_17729[(10)] = inst_17658__$1);

(statearr_17729[(11)] = inst_17656__$1);

(statearr_17729[(12)] = inst_17657__$1);

(statearr_17729[(14)] = inst_17666);

return statearr_17729;
})();
var statearr_17730_18875 = state_17705__$1;
(statearr_17730_18875[(2)] = null);

(statearr_17730_18875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17709 === (22))){
var state_17705__$1 = state_17705;
var statearr_17731_18876 = state_17705__$1;
(statearr_17731_18876[(2)] = null);

(statearr_17731_18876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17709 === (6))){
var inst_17645 = (state_17705[(13)]);
var inst_17654 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17645) : f.call(null, inst_17645));
var inst_17655 = cljs.core.seq(inst_17654);
var inst_17656 = inst_17655;
var inst_17657 = null;
var inst_17658 = (0);
var inst_17659 = (0);
var state_17705__$1 = (function (){var statearr_17734 = state_17705;
(statearr_17734[(9)] = inst_17659);

(statearr_17734[(10)] = inst_17658);

(statearr_17734[(11)] = inst_17656);

(statearr_17734[(12)] = inst_17657);

return statearr_17734;
})();
var statearr_17735_18877 = state_17705__$1;
(statearr_17735_18877[(2)] = null);

(statearr_17735_18877[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17709 === (17))){
var inst_17670 = (state_17705[(7)]);
var inst_17674 = cljs.core.chunk_first(inst_17670);
var inst_17675 = cljs.core.chunk_rest(inst_17670);
var inst_17676 = cljs.core.count(inst_17674);
var inst_17656 = inst_17675;
var inst_17657 = inst_17674;
var inst_17658 = inst_17676;
var inst_17659 = (0);
var state_17705__$1 = (function (){var statearr_17737 = state_17705;
(statearr_17737[(9)] = inst_17659);

(statearr_17737[(10)] = inst_17658);

(statearr_17737[(11)] = inst_17656);

(statearr_17737[(12)] = inst_17657);

return statearr_17737;
})();
var statearr_17738_18878 = state_17705__$1;
(statearr_17738_18878[(2)] = null);

(statearr_17738_18878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17709 === (3))){
var inst_17703 = (state_17705[(2)]);
var state_17705__$1 = state_17705;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17705__$1,inst_17703);
} else {
if((state_val_17709 === (12))){
var inst_17691 = (state_17705[(2)]);
var state_17705__$1 = state_17705;
var statearr_17742_18883 = state_17705__$1;
(statearr_17742_18883[(2)] = inst_17691);

(statearr_17742_18883[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17709 === (2))){
var state_17705__$1 = state_17705;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17705__$1,(4),in$);
} else {
if((state_val_17709 === (23))){
var inst_17699 = (state_17705[(2)]);
var state_17705__$1 = state_17705;
var statearr_17746_18884 = state_17705__$1;
(statearr_17746_18884[(2)] = inst_17699);

(statearr_17746_18884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17709 === (19))){
var inst_17686 = (state_17705[(2)]);
var state_17705__$1 = state_17705;
var statearr_17747_18885 = state_17705__$1;
(statearr_17747_18885[(2)] = inst_17686);

(statearr_17747_18885[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17709 === (11))){
var inst_17670 = (state_17705[(7)]);
var inst_17656 = (state_17705[(11)]);
var inst_17670__$1 = cljs.core.seq(inst_17656);
var state_17705__$1 = (function (){var statearr_17748 = state_17705;
(statearr_17748[(7)] = inst_17670__$1);

return statearr_17748;
})();
if(inst_17670__$1){
var statearr_17749_18887 = state_17705__$1;
(statearr_17749_18887[(1)] = (14));

} else {
var statearr_17750_18888 = state_17705__$1;
(statearr_17750_18888[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17709 === (9))){
var inst_17693 = (state_17705[(2)]);
var inst_17694 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17705__$1 = (function (){var statearr_17751 = state_17705;
(statearr_17751[(15)] = inst_17693);

return statearr_17751;
})();
if(cljs.core.truth_(inst_17694)){
var statearr_17752_18894 = state_17705__$1;
(statearr_17752_18894[(1)] = (21));

} else {
var statearr_17753_18895 = state_17705__$1;
(statearr_17753_18895[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17709 === (5))){
var inst_17648 = cljs.core.async.close_BANG_(out);
var state_17705__$1 = state_17705;
var statearr_17754_18896 = state_17705__$1;
(statearr_17754_18896[(2)] = inst_17648);

(statearr_17754_18896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17709 === (14))){
var inst_17670 = (state_17705[(7)]);
var inst_17672 = cljs.core.chunked_seq_QMARK_(inst_17670);
var state_17705__$1 = state_17705;
if(inst_17672){
var statearr_17758_18897 = state_17705__$1;
(statearr_17758_18897[(1)] = (17));

} else {
var statearr_17759_18898 = state_17705__$1;
(statearr_17759_18898[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17709 === (16))){
var inst_17689 = (state_17705[(2)]);
var state_17705__$1 = state_17705;
var statearr_17760_18899 = state_17705__$1;
(statearr_17760_18899[(2)] = inst_17689);

(statearr_17760_18899[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17709 === (10))){
var inst_17659 = (state_17705[(9)]);
var inst_17657 = (state_17705[(12)]);
var inst_17664 = cljs.core._nth(inst_17657,inst_17659);
var state_17705__$1 = state_17705;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17705__$1,(13),out,inst_17664);
} else {
if((state_val_17709 === (18))){
var inst_17670 = (state_17705[(7)]);
var inst_17680 = cljs.core.first(inst_17670);
var state_17705__$1 = state_17705;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17705__$1,(20),out,inst_17680);
} else {
if((state_val_17709 === (8))){
var inst_17659 = (state_17705[(9)]);
var inst_17658 = (state_17705[(10)]);
var inst_17661 = (inst_17659 < inst_17658);
var inst_17662 = inst_17661;
var state_17705__$1 = state_17705;
if(cljs.core.truth_(inst_17662)){
var statearr_17773_18900 = state_17705__$1;
(statearr_17773_18900[(1)] = (10));

} else {
var statearr_17775_18901 = state_17705__$1;
(statearr_17775_18901[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14750__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14750__auto____0 = (function (){
var statearr_17776 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17776[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14750__auto__);

(statearr_17776[(1)] = (1));

return statearr_17776;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14750__auto____1 = (function (state_17705){
while(true){
var ret_value__14751__auto__ = (function (){try{while(true){
var result__14752__auto__ = switch__14749__auto__(state_17705);
if(cljs.core.keyword_identical_QMARK_(result__14752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14752__auto__;
}
break;
}
}catch (e17783){var ex__14754__auto__ = e17783;
var statearr_17784_18902 = state_17705;
(statearr_17784_18902[(2)] = ex__14754__auto__);


if(cljs.core.seq((state_17705[(4)]))){
var statearr_17788_18903 = state_17705;
(statearr_17788_18903[(1)] = cljs.core.first((state_17705[(4)])));

} else {
throw ex__14754__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18908 = state_17705;
state_17705 = G__18908;
continue;
} else {
return ret_value__14751__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14750__auto__ = function(state_17705){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14750__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14750__auto____1.call(this,state_17705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14750__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14750__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14750__auto__;
})()
})();
var state__14918__auto__ = (function (){var statearr_17789 = f__14917__auto__();
(statearr_17789[(6)] = c__14916__auto__);

return statearr_17789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14918__auto__);
}));

return c__14916__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17791 = arguments.length;
switch (G__17791) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17793 = arguments.length;
switch (G__17793) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17799 = arguments.length;
switch (G__17799) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14916__auto___18913 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14917__auto__ = (function (){var switch__14749__auto__ = (function (state_17844){
var state_val_17845 = (state_17844[(1)]);
if((state_val_17845 === (7))){
var inst_17839 = (state_17844[(2)]);
var state_17844__$1 = state_17844;
var statearr_17851_18914 = state_17844__$1;
(statearr_17851_18914[(2)] = inst_17839);

(statearr_17851_18914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (1))){
var inst_17818 = null;
var state_17844__$1 = (function (){var statearr_17852 = state_17844;
(statearr_17852[(7)] = inst_17818);

return statearr_17852;
})();
var statearr_17854_18915 = state_17844__$1;
(statearr_17854_18915[(2)] = null);

(statearr_17854_18915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (4))){
var inst_17824 = (state_17844[(8)]);
var inst_17824__$1 = (state_17844[(2)]);
var inst_17825 = (inst_17824__$1 == null);
var inst_17826 = cljs.core.not(inst_17825);
var state_17844__$1 = (function (){var statearr_17855 = state_17844;
(statearr_17855[(8)] = inst_17824__$1);

return statearr_17855;
})();
if(inst_17826){
var statearr_17856_18916 = state_17844__$1;
(statearr_17856_18916[(1)] = (5));

} else {
var statearr_17857_18917 = state_17844__$1;
(statearr_17857_18917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (6))){
var state_17844__$1 = state_17844;
var statearr_17858_18918 = state_17844__$1;
(statearr_17858_18918[(2)] = null);

(statearr_17858_18918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (3))){
var inst_17841 = (state_17844[(2)]);
var inst_17842 = cljs.core.async.close_BANG_(out);
var state_17844__$1 = (function (){var statearr_17859 = state_17844;
(statearr_17859[(9)] = inst_17841);

return statearr_17859;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17844__$1,inst_17842);
} else {
if((state_val_17845 === (2))){
var state_17844__$1 = state_17844;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17844__$1,(4),ch);
} else {
if((state_val_17845 === (11))){
var inst_17824 = (state_17844[(8)]);
var inst_17833 = (state_17844[(2)]);
var inst_17818 = inst_17824;
var state_17844__$1 = (function (){var statearr_17860 = state_17844;
(statearr_17860[(10)] = inst_17833);

(statearr_17860[(7)] = inst_17818);

return statearr_17860;
})();
var statearr_17861_18919 = state_17844__$1;
(statearr_17861_18919[(2)] = null);

(statearr_17861_18919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (9))){
var inst_17824 = (state_17844[(8)]);
var state_17844__$1 = state_17844;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17844__$1,(11),out,inst_17824);
} else {
if((state_val_17845 === (5))){
var inst_17824 = (state_17844[(8)]);
var inst_17818 = (state_17844[(7)]);
var inst_17828 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17824,inst_17818);
var state_17844__$1 = state_17844;
if(inst_17828){
var statearr_17864_18920 = state_17844__$1;
(statearr_17864_18920[(1)] = (8));

} else {
var statearr_17865_18921 = state_17844__$1;
(statearr_17865_18921[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (10))){
var inst_17836 = (state_17844[(2)]);
var state_17844__$1 = state_17844;
var statearr_17866_18922 = state_17844__$1;
(statearr_17866_18922[(2)] = inst_17836);

(statearr_17866_18922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (8))){
var inst_17818 = (state_17844[(7)]);
var tmp17862 = inst_17818;
var inst_17818__$1 = tmp17862;
var state_17844__$1 = (function (){var statearr_17867 = state_17844;
(statearr_17867[(7)] = inst_17818__$1);

return statearr_17867;
})();
var statearr_17871_18923 = state_17844__$1;
(statearr_17871_18923[(2)] = null);

(statearr_17871_18923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14750__auto__ = null;
var cljs$core$async$state_machine__14750__auto____0 = (function (){
var statearr_17872 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17872[(0)] = cljs$core$async$state_machine__14750__auto__);

(statearr_17872[(1)] = (1));

return statearr_17872;
});
var cljs$core$async$state_machine__14750__auto____1 = (function (state_17844){
while(true){
var ret_value__14751__auto__ = (function (){try{while(true){
var result__14752__auto__ = switch__14749__auto__(state_17844);
if(cljs.core.keyword_identical_QMARK_(result__14752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14752__auto__;
}
break;
}
}catch (e17873){var ex__14754__auto__ = e17873;
var statearr_17874_18931 = state_17844;
(statearr_17874_18931[(2)] = ex__14754__auto__);


if(cljs.core.seq((state_17844[(4)]))){
var statearr_17875_18932 = state_17844;
(statearr_17875_18932[(1)] = cljs.core.first((state_17844[(4)])));

} else {
throw ex__14754__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18933 = state_17844;
state_17844 = G__18933;
continue;
} else {
return ret_value__14751__auto__;
}
break;
}
});
cljs$core$async$state_machine__14750__auto__ = function(state_17844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14750__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14750__auto____1.call(this,state_17844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14750__auto____0;
cljs$core$async$state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14750__auto____1;
return cljs$core$async$state_machine__14750__auto__;
})()
})();
var state__14918__auto__ = (function (){var statearr_17890 = f__14917__auto__();
(statearr_17890[(6)] = c__14916__auto___18913);

return statearr_17890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14918__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17918 = arguments.length;
switch (G__17918) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14916__auto___18936 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14917__auto__ = (function (){var switch__14749__auto__ = (function (state_17959){
var state_val_17960 = (state_17959[(1)]);
if((state_val_17960 === (7))){
var inst_17955 = (state_17959[(2)]);
var state_17959__$1 = state_17959;
var statearr_17961_18937 = state_17959__$1;
(statearr_17961_18937[(2)] = inst_17955);

(statearr_17961_18937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17960 === (1))){
var inst_17920 = (new Array(n));
var inst_17922 = inst_17920;
var inst_17923 = (0);
var state_17959__$1 = (function (){var statearr_17962 = state_17959;
(statearr_17962[(7)] = inst_17923);

(statearr_17962[(8)] = inst_17922);

return statearr_17962;
})();
var statearr_17963_18938 = state_17959__$1;
(statearr_17963_18938[(2)] = null);

(statearr_17963_18938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17960 === (4))){
var inst_17926 = (state_17959[(9)]);
var inst_17926__$1 = (state_17959[(2)]);
var inst_17927 = (inst_17926__$1 == null);
var inst_17928 = cljs.core.not(inst_17927);
var state_17959__$1 = (function (){var statearr_17967 = state_17959;
(statearr_17967[(9)] = inst_17926__$1);

return statearr_17967;
})();
if(inst_17928){
var statearr_17968_18940 = state_17959__$1;
(statearr_17968_18940[(1)] = (5));

} else {
var statearr_17969_18941 = state_17959__$1;
(statearr_17969_18941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17960 === (15))){
var inst_17949 = (state_17959[(2)]);
var state_17959__$1 = state_17959;
var statearr_17970_18942 = state_17959__$1;
(statearr_17970_18942[(2)] = inst_17949);

(statearr_17970_18942[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17960 === (13))){
var state_17959__$1 = state_17959;
var statearr_17971_18943 = state_17959__$1;
(statearr_17971_18943[(2)] = null);

(statearr_17971_18943[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17960 === (6))){
var inst_17923 = (state_17959[(7)]);
var inst_17945 = (inst_17923 > (0));
var state_17959__$1 = state_17959;
if(cljs.core.truth_(inst_17945)){
var statearr_17972_18944 = state_17959__$1;
(statearr_17972_18944[(1)] = (12));

} else {
var statearr_17973_18948 = state_17959__$1;
(statearr_17973_18948[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17960 === (3))){
var inst_17957 = (state_17959[(2)]);
var state_17959__$1 = state_17959;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17959__$1,inst_17957);
} else {
if((state_val_17960 === (12))){
var inst_17922 = (state_17959[(8)]);
var inst_17947 = cljs.core.vec(inst_17922);
var state_17959__$1 = state_17959;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17959__$1,(15),out,inst_17947);
} else {
if((state_val_17960 === (2))){
var state_17959__$1 = state_17959;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17959__$1,(4),ch);
} else {
if((state_val_17960 === (11))){
var inst_17938 = (state_17959[(2)]);
var inst_17939 = (new Array(n));
var inst_17922 = inst_17939;
var inst_17923 = (0);
var state_17959__$1 = (function (){var statearr_17974 = state_17959;
(statearr_17974[(7)] = inst_17923);

(statearr_17974[(10)] = inst_17938);

(statearr_17974[(8)] = inst_17922);

return statearr_17974;
})();
var statearr_17975_18953 = state_17959__$1;
(statearr_17975_18953[(2)] = null);

(statearr_17975_18953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17960 === (9))){
var inst_17922 = (state_17959[(8)]);
var inst_17936 = cljs.core.vec(inst_17922);
var state_17959__$1 = state_17959;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17959__$1,(11),out,inst_17936);
} else {
if((state_val_17960 === (5))){
var inst_17923 = (state_17959[(7)]);
var inst_17931 = (state_17959[(11)]);
var inst_17926 = (state_17959[(9)]);
var inst_17922 = (state_17959[(8)]);
var inst_17930 = (inst_17922[inst_17923] = inst_17926);
var inst_17931__$1 = (inst_17923 + (1));
var inst_17932 = (inst_17931__$1 < n);
var state_17959__$1 = (function (){var statearr_17976 = state_17959;
(statearr_17976[(11)] = inst_17931__$1);

(statearr_17976[(12)] = inst_17930);

return statearr_17976;
})();
if(cljs.core.truth_(inst_17932)){
var statearr_17977_18959 = state_17959__$1;
(statearr_17977_18959[(1)] = (8));

} else {
var statearr_17978_18960 = state_17959__$1;
(statearr_17978_18960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17960 === (14))){
var inst_17952 = (state_17959[(2)]);
var inst_17953 = cljs.core.async.close_BANG_(out);
var state_17959__$1 = (function (){var statearr_17980 = state_17959;
(statearr_17980[(13)] = inst_17952);

return statearr_17980;
})();
var statearr_17981_18964 = state_17959__$1;
(statearr_17981_18964[(2)] = inst_17953);

(statearr_17981_18964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17960 === (10))){
var inst_17942 = (state_17959[(2)]);
var state_17959__$1 = state_17959;
var statearr_17982_18965 = state_17959__$1;
(statearr_17982_18965[(2)] = inst_17942);

(statearr_17982_18965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17960 === (8))){
var inst_17931 = (state_17959[(11)]);
var inst_17922 = (state_17959[(8)]);
var tmp17979 = inst_17922;
var inst_17922__$1 = tmp17979;
var inst_17923 = inst_17931;
var state_17959__$1 = (function (){var statearr_17983 = state_17959;
(statearr_17983[(7)] = inst_17923);

(statearr_17983[(8)] = inst_17922__$1);

return statearr_17983;
})();
var statearr_17984_18966 = state_17959__$1;
(statearr_17984_18966[(2)] = null);

(statearr_17984_18966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14750__auto__ = null;
var cljs$core$async$state_machine__14750__auto____0 = (function (){
var statearr_17985 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17985[(0)] = cljs$core$async$state_machine__14750__auto__);

(statearr_17985[(1)] = (1));

return statearr_17985;
});
var cljs$core$async$state_machine__14750__auto____1 = (function (state_17959){
while(true){
var ret_value__14751__auto__ = (function (){try{while(true){
var result__14752__auto__ = switch__14749__auto__(state_17959);
if(cljs.core.keyword_identical_QMARK_(result__14752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14752__auto__;
}
break;
}
}catch (e17986){var ex__14754__auto__ = e17986;
var statearr_17987_18967 = state_17959;
(statearr_17987_18967[(2)] = ex__14754__auto__);


if(cljs.core.seq((state_17959[(4)]))){
var statearr_17988_18968 = state_17959;
(statearr_17988_18968[(1)] = cljs.core.first((state_17959[(4)])));

} else {
throw ex__14754__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18969 = state_17959;
state_17959 = G__18969;
continue;
} else {
return ret_value__14751__auto__;
}
break;
}
});
cljs$core$async$state_machine__14750__auto__ = function(state_17959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14750__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14750__auto____1.call(this,state_17959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14750__auto____0;
cljs$core$async$state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14750__auto____1;
return cljs$core$async$state_machine__14750__auto__;
})()
})();
var state__14918__auto__ = (function (){var statearr_17989 = f__14917__auto__();
(statearr_17989[(6)] = c__14916__auto___18936);

return statearr_17989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14918__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17994 = arguments.length;
switch (G__17994) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14916__auto___18971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14917__auto__ = (function (){var switch__14749__auto__ = (function (state_18039){
var state_val_18040 = (state_18039[(1)]);
if((state_val_18040 === (7))){
var inst_18035 = (state_18039[(2)]);
var state_18039__$1 = state_18039;
var statearr_18052_18972 = state_18039__$1;
(statearr_18052_18972[(2)] = inst_18035);

(statearr_18052_18972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18040 === (1))){
var inst_17995 = [];
var inst_17996 = inst_17995;
var inst_17997 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18039__$1 = (function (){var statearr_18053 = state_18039;
(statearr_18053[(7)] = inst_17997);

(statearr_18053[(8)] = inst_17996);

return statearr_18053;
})();
var statearr_18054_18973 = state_18039__$1;
(statearr_18054_18973[(2)] = null);

(statearr_18054_18973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18040 === (4))){
var inst_18000 = (state_18039[(9)]);
var inst_18000__$1 = (state_18039[(2)]);
var inst_18001 = (inst_18000__$1 == null);
var inst_18002 = cljs.core.not(inst_18001);
var state_18039__$1 = (function (){var statearr_18055 = state_18039;
(statearr_18055[(9)] = inst_18000__$1);

return statearr_18055;
})();
if(inst_18002){
var statearr_18056_18974 = state_18039__$1;
(statearr_18056_18974[(1)] = (5));

} else {
var statearr_18057_18975 = state_18039__$1;
(statearr_18057_18975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18040 === (15))){
var inst_17996 = (state_18039[(8)]);
var inst_18027 = cljs.core.vec(inst_17996);
var state_18039__$1 = state_18039;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18039__$1,(18),out,inst_18027);
} else {
if((state_val_18040 === (13))){
var inst_18022 = (state_18039[(2)]);
var state_18039__$1 = state_18039;
var statearr_18061_18976 = state_18039__$1;
(statearr_18061_18976[(2)] = inst_18022);

(statearr_18061_18976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18040 === (6))){
var inst_17996 = (state_18039[(8)]);
var inst_18024 = inst_17996.length;
var inst_18025 = (inst_18024 > (0));
var state_18039__$1 = state_18039;
if(cljs.core.truth_(inst_18025)){
var statearr_18062_18977 = state_18039__$1;
(statearr_18062_18977[(1)] = (15));

} else {
var statearr_18063_18978 = state_18039__$1;
(statearr_18063_18978[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18040 === (17))){
var inst_18032 = (state_18039[(2)]);
var inst_18033 = cljs.core.async.close_BANG_(out);
var state_18039__$1 = (function (){var statearr_18064 = state_18039;
(statearr_18064[(10)] = inst_18032);

return statearr_18064;
})();
var statearr_18065_18979 = state_18039__$1;
(statearr_18065_18979[(2)] = inst_18033);

(statearr_18065_18979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18040 === (3))){
var inst_18037 = (state_18039[(2)]);
var state_18039__$1 = state_18039;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18039__$1,inst_18037);
} else {
if((state_val_18040 === (12))){
var inst_17996 = (state_18039[(8)]);
var inst_18015 = cljs.core.vec(inst_17996);
var state_18039__$1 = state_18039;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18039__$1,(14),out,inst_18015);
} else {
if((state_val_18040 === (2))){
var state_18039__$1 = state_18039;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18039__$1,(4),ch);
} else {
if((state_val_18040 === (11))){
var inst_17996 = (state_18039[(8)]);
var inst_18000 = (state_18039[(9)]);
var inst_18004 = (state_18039[(11)]);
var inst_18012 = inst_17996.push(inst_18000);
var tmp18066 = inst_17996;
var inst_17996__$1 = tmp18066;
var inst_17997 = inst_18004;
var state_18039__$1 = (function (){var statearr_18067 = state_18039;
(statearr_18067[(7)] = inst_17997);

(statearr_18067[(12)] = inst_18012);

(statearr_18067[(8)] = inst_17996__$1);

return statearr_18067;
})();
var statearr_18068_18980 = state_18039__$1;
(statearr_18068_18980[(2)] = null);

(statearr_18068_18980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18040 === (9))){
var inst_17997 = (state_18039[(7)]);
var inst_18008 = cljs.core.keyword_identical_QMARK_(inst_17997,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_18039__$1 = state_18039;
var statearr_18069_18981 = state_18039__$1;
(statearr_18069_18981[(2)] = inst_18008);

(statearr_18069_18981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18040 === (5))){
var inst_18005 = (state_18039[(13)]);
var inst_17997 = (state_18039[(7)]);
var inst_18000 = (state_18039[(9)]);
var inst_18004 = (state_18039[(11)]);
var inst_18004__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18000) : f.call(null, inst_18000));
var inst_18005__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18004__$1,inst_17997);
var state_18039__$1 = (function (){var statearr_18070 = state_18039;
(statearr_18070[(13)] = inst_18005__$1);

(statearr_18070[(11)] = inst_18004__$1);

return statearr_18070;
})();
if(inst_18005__$1){
var statearr_18071_18982 = state_18039__$1;
(statearr_18071_18982[(1)] = (8));

} else {
var statearr_18072_18983 = state_18039__$1;
(statearr_18072_18983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18040 === (14))){
var inst_18000 = (state_18039[(9)]);
var inst_18004 = (state_18039[(11)]);
var inst_18017 = (state_18039[(2)]);
var inst_18018 = [];
var inst_18019 = inst_18018.push(inst_18000);
var inst_17996 = inst_18018;
var inst_17997 = inst_18004;
var state_18039__$1 = (function (){var statearr_18073 = state_18039;
(statearr_18073[(14)] = inst_18017);

(statearr_18073[(7)] = inst_17997);

(statearr_18073[(8)] = inst_17996);

(statearr_18073[(15)] = inst_18019);

return statearr_18073;
})();
var statearr_18074_18987 = state_18039__$1;
(statearr_18074_18987[(2)] = null);

(statearr_18074_18987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18040 === (16))){
var state_18039__$1 = state_18039;
var statearr_18075_18988 = state_18039__$1;
(statearr_18075_18988[(2)] = null);

(statearr_18075_18988[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18040 === (10))){
var inst_18010 = (state_18039[(2)]);
var state_18039__$1 = state_18039;
if(cljs.core.truth_(inst_18010)){
var statearr_18076_18989 = state_18039__$1;
(statearr_18076_18989[(1)] = (11));

} else {
var statearr_18077_18990 = state_18039__$1;
(statearr_18077_18990[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18040 === (18))){
var inst_18029 = (state_18039[(2)]);
var state_18039__$1 = state_18039;
var statearr_18078_18991 = state_18039__$1;
(statearr_18078_18991[(2)] = inst_18029);

(statearr_18078_18991[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18040 === (8))){
var inst_18005 = (state_18039[(13)]);
var state_18039__$1 = state_18039;
var statearr_18079_18992 = state_18039__$1;
(statearr_18079_18992[(2)] = inst_18005);

(statearr_18079_18992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14750__auto__ = null;
var cljs$core$async$state_machine__14750__auto____0 = (function (){
var statearr_18084 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18084[(0)] = cljs$core$async$state_machine__14750__auto__);

(statearr_18084[(1)] = (1));

return statearr_18084;
});
var cljs$core$async$state_machine__14750__auto____1 = (function (state_18039){
while(true){
var ret_value__14751__auto__ = (function (){try{while(true){
var result__14752__auto__ = switch__14749__auto__(state_18039);
if(cljs.core.keyword_identical_QMARK_(result__14752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14752__auto__;
}
break;
}
}catch (e18086){var ex__14754__auto__ = e18086;
var statearr_18087_18993 = state_18039;
(statearr_18087_18993[(2)] = ex__14754__auto__);


if(cljs.core.seq((state_18039[(4)]))){
var statearr_18088_18994 = state_18039;
(statearr_18088_18994[(1)] = cljs.core.first((state_18039[(4)])));

} else {
throw ex__14754__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18995 = state_18039;
state_18039 = G__18995;
continue;
} else {
return ret_value__14751__auto__;
}
break;
}
});
cljs$core$async$state_machine__14750__auto__ = function(state_18039){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14750__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14750__auto____1.call(this,state_18039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14750__auto____0;
cljs$core$async$state_machine__14750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14750__auto____1;
return cljs$core$async$state_machine__14750__auto__;
})()
})();
var state__14918__auto__ = (function (){var statearr_18091 = f__14917__auto__();
(statearr_18091[(6)] = c__14916__auto___18971);

return statearr_18091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14918__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
