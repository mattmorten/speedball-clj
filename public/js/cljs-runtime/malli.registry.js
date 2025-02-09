goog.provide('malli.registry');
/**
 * @define {string}
 */
malli.registry.mode = goog.define("malli.registry.mode","default");
/**
 * @define {string}
 */
malli.registry.type = goog.define("malli.registry.type","default");

/**
 * @interface
 */
malli.registry.Registry = function(){};

var malli$registry$Registry$_schema$dyn_13599 = (function (this$,type){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (malli.registry._schema[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5351__auto__.call(null, this$,type));
} else {
var m__5349__auto__ = (malli.registry._schema["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5349__auto__.call(null, this$,type));
} else {
throw cljs.core.missing_protocol("Registry.-schema",this$);
}
}
});
/**
 * returns the schema from a registry
 */
malli.registry._schema = (function malli$registry$_schema(this$,type){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schema$arity$2 == null)))))){
return this$.malli$registry$Registry$_schema$arity$2(this$,type);
} else {
return malli$registry$Registry$_schema$dyn_13599(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_13600 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (malli.registry._schemas[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (malli.registry._schemas["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("Registry.-schemas",this$);
}
}
});
/**
 * returns all schemas from a registry
 */
malli.registry._schemas = (function malli$registry$_schemas(this$){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schemas$arity$1 == null)))))){
return this$.malli$registry$Registry$_schemas$arity$1(this$);
} else {
return malli$registry$Registry$_schemas$dyn_13600(this$);
}
});

malli.registry.registry_QMARK_ = (function malli$registry$registry_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.malli$registry$Registry$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry13464 = (function (m,fm,meta13465){
this.m = m;
this.fm = fm;
this.meta13465 = meta13465;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry13464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13466,meta13465__$1){
var self__ = this;
var _13466__$1 = this;
return (new malli.registry.t_malli$registry13464(self__.m,self__.fm,meta13465__$1));
}));

(malli.registry.t_malli$registry13464.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13466){
var self__ = this;
var _13466__$1 = this;
return self__.meta13465;
}));

(malli.registry.t_malli$registry13464.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry13464.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry13464.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry13464.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta13465","meta13465",1778848916,null)], null);
}));

(malli.registry.t_malli$registry13464.cljs$lang$type = true);

(malli.registry.t_malli$registry13464.cljs$lang$ctorStr = "malli.registry/t_malli$registry13464");

(malli.registry.t_malli$registry13464.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry13464");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry13464.
 */
malli.registry.__GT_t_malli$registry13464 = (function malli$registry$__GT_t_malli$registry13464(m,fm,meta13465){
return (new malli.registry.t_malli$registry13464(m,fm,meta13465));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry13464(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry13476 = (function (m,meta13477){
this.m = m;
this.meta13477 = meta13477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry13476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13478,meta13477__$1){
var self__ = this;
var _13478__$1 = this;
return (new malli.registry.t_malli$registry13476(self__.m,meta13477__$1));
}));

(malli.registry.t_malli$registry13476.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13478){
var self__ = this;
var _13478__$1 = this;
return self__.meta13477;
}));

(malli.registry.t_malli$registry13476.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry13476.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null, type));
}));

(malli.registry.t_malli$registry13476.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry13476.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta13477","meta13477",-1642012085,null)], null);
}));

(malli.registry.t_malli$registry13476.cljs$lang$type = true);

(malli.registry.t_malli$registry13476.cljs$lang$ctorStr = "malli.registry/t_malli$registry13476");

(malli.registry.t_malli$registry13476.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry13476");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry13476.
 */
malli.registry.__GT_t_malli$registry13476 = (function malli$registry$__GT_t_malli$registry13476(m,meta13477){
return (new malli.registry.t_malli$registry13476(m,meta13477));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry13476(m,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.registry = (function malli$registry$registry(_QMARK_registry){
if((_QMARK_registry == null)){
return null;
} else {
if(malli.registry.registry_QMARK_(_QMARK_registry)){
return _QMARK_registry;
} else {
if(cljs.core.map_QMARK_(_QMARK_registry)){
return malli.registry.simple_registry(_QMARK_registry);
} else {
if((((!((_QMARK_registry == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === _QMARK_registry.malli$registry$Registry$))))?true:(((!_QMARK_registry.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry):false)):cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry))){
return _QMARK_registry;
} else {
return null;
}
}
}
}
});
malli.registry.registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(malli.registry.simple_registry(cljs.core.PersistentArrayMap.EMPTY));
malli.registry.set_default_registry_BANG_ = (function malli$registry$set_default_registry_BANG_(_QMARK_registry){
if((!((malli.registry.mode === "strict")))){
return cljs.core.reset_BANG_(malli.registry.registry_STAR_,malli.registry.registry(_QMARK_registry));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("can't set default registry, invalid mode",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),malli.registry.mode,new cljs.core.Keyword(null,"type","type",1174270348),malli.registry.type], null));
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry13501 = (function (meta13502){
this.meta13502 = meta13502;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry13501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13503,meta13502__$1){
var self__ = this;
var _13503__$1 = this;
return (new malli.registry.t_malli$registry13501(meta13502__$1));
}));

(malli.registry.t_malli$registry13501.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13503){
var self__ = this;
var _13503__$1 = this;
return self__.meta13502;
}));

(malli.registry.t_malli$registry13501.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry13501.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry13501.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry13501.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta13502","meta13502",1627821777,null)], null);
}));

(malli.registry.t_malli$registry13501.cljs$lang$type = true);

(malli.registry.t_malli$registry13501.cljs$lang$ctorStr = "malli.registry/t_malli$registry13501");

(malli.registry.t_malli$registry13501.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry13501");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry13501.
 */
malli.registry.__GT_t_malli$registry13501 = (function malli$registry$__GT_t_malli$registry13501(meta13502){
return (new malli.registry.t_malli$registry13501(meta13502));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry13501(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry13525 = (function (_QMARK_registries,registries,meta13526){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta13526 = meta13526;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry13525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13527,meta13526__$1){
var self__ = this;
var _13527__$1 = this;
return (new malli.registry.t_malli$registry13525(self__._QMARK_registries,self__.registries,meta13526__$1));
}));

(malli.registry.t_malli$registry13525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13527){
var self__ = this;
var _13527__$1 = this;
return self__.meta13526;
}));

(malli.registry.t_malli$registry13525.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry13525.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__13518_SHARP_){
return malli.registry._schema(p1__13518_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry13525.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry13525.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta13526","meta13526",668774298,null)], null);
}));

(malli.registry.t_malli$registry13525.cljs$lang$type = true);

(malli.registry.t_malli$registry13525.cljs$lang$ctorStr = "malli.registry/t_malli$registry13525");

(malli.registry.t_malli$registry13525.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry13525");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry13525.
 */
malli.registry.__GT_t_malli$registry13525 = (function malli$registry$__GT_t_malli$registry13525(_QMARK_registries,registries,meta13526){
return (new malli.registry.t_malli$registry13525(_QMARK_registries,registries,meta13526));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13616 = arguments.length;
var i__5727__auto___13617 = (0);
while(true){
if((i__5727__auto___13617 < len__5726__auto___13616)){
args__5732__auto__.push((arguments[i__5727__auto___13617]));

var G__13618 = (i__5727__auto___13617 + (1));
i__5727__auto___13617 = G__13618;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_registries){
var registries = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(malli.registry.registry,_QMARK_registries);
return (new malli.registry.t_malli$registry13525(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq13519){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13519));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry13534 = (function (db,meta13535){
this.db = db;
this.meta13535 = meta13535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry13534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13536,meta13535__$1){
var self__ = this;
var _13536__$1 = this;
return (new malli.registry.t_malli$registry13534(self__.db,meta13535__$1));
}));

(malli.registry.t_malli$registry13534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13536){
var self__ = this;
var _13536__$1 = this;
return self__.meta13535;
}));

(malli.registry.t_malli$registry13534.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry13534.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry13534.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry13534.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta13535","meta13535",-691485404,null)], null);
}));

(malli.registry.t_malli$registry13534.cljs$lang$type = true);

(malli.registry.t_malli$registry13534.cljs$lang$ctorStr = "malli.registry/t_malli$registry13534");

(malli.registry.t_malli$registry13534.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry13534");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry13534.
 */
malli.registry.__GT_t_malli$registry13534 = (function malli$registry$__GT_t_malli$registry13534(db,meta13535){
return (new malli.registry.t_malli$registry13534(db,meta13535));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry13534(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry13546 = (function (meta13547){
this.meta13547 = meta13547;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry13546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13548,meta13547__$1){
var self__ = this;
var _13548__$1 = this;
return (new malli.registry.t_malli$registry13546(meta13547__$1));
}));

(malli.registry.t_malli$registry13546.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13548){
var self__ = this;
var _13548__$1 = this;
return self__.meta13547;
}));

(malli.registry.t_malli$registry13546.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry13546.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry13546.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry13546.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta13547","meta13547",-522493341,null)], null);
}));

(malli.registry.t_malli$registry13546.cljs$lang$type = true);

(malli.registry.t_malli$registry13546.cljs$lang$ctorStr = "malli.registry/t_malli$registry13546");

(malli.registry.t_malli$registry13546.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry13546");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry13546.
 */
malli.registry.__GT_t_malli$registry13546 = (function malli$registry$__GT_t_malli$registry13546(meta13547){
return (new malli.registry.t_malli$registry13546(meta13547));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry13546(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry13556 = (function (meta13557){
this.meta13557 = meta13557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry13556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13558,meta13557__$1){
var self__ = this;
var _13558__$1 = this;
return (new malli.registry.t_malli$registry13556(meta13557__$1));
}));

(malli.registry.t_malli$registry13556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13558){
var self__ = this;
var _13558__$1 = this;
return self__.meta13557;
}));

(malli.registry.t_malli$registry13556.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry13556.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry13556.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry13556.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta13557","meta13557",-1923263062,null)], null);
}));

(malli.registry.t_malli$registry13556.cljs$lang$type = true);

(malli.registry.t_malli$registry13556.cljs$lang$ctorStr = "malli.registry/t_malli$registry13556");

(malli.registry.t_malli$registry13556.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry13556");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry13556.
 */
malli.registry.__GT_t_malli$registry13556 = (function malli$registry$__GT_t_malli$registry13556(meta13557){
return (new malli.registry.t_malli$registry13556(meta13557));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry13556(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry13562 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta13563){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta13563 = meta13563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry13562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13564,meta13563__$1){
var self__ = this;
var _13564__$1 = this;
return (new malli.registry.t_malli$registry13562(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta13563__$1));
}));

(malli.registry.t_malli$registry13562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13564){
var self__ = this;
var _13564__$1 = this;
return self__.meta13563;
}));

(malli.registry.t_malli$registry13562.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry13562.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5002__auto__ = (function (){var fexpr__13566 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__13566.cljs$core$IFn$_invoke$arity$1 ? fexpr__13566.cljs$core$IFn$_invoke$arity$1(name) : fexpr__13566.call(null, name));
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var temp__5804__auto__ = (function (){var G__13571 = name;
var G__13572 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__13571,G__13572) : self__.provider.call(null, G__13571,G__13572));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var schema = temp__5804__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cache_STAR_,cljs.core.assoc,name,schema);

return schema;
} else {
return null;
}
}
}));

(malli.registry.t_malli$registry13562.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry13562.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta13563","meta13563",604030703,null)], null);
}));

(malli.registry.t_malli$registry13562.cljs$lang$type = true);

(malli.registry.t_malli$registry13562.cljs$lang$ctorStr = "malli.registry/t_malli$registry13562");

(malli.registry.t_malli$registry13562.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry13562");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry13562.
 */
malli.registry.__GT_t_malli$registry13562 = (function malli$registry$__GT_t_malli$registry13562(default_registry,provider,cache_STAR_,registry_STAR_,meta13563){
return (new malli.registry.t_malli$registry13562(default_registry,provider,cache_STAR_,registry_STAR_,meta13563));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry13562(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
});
/**
 * finds a schema from a registry
 */
malli.registry.schema = (function malli$registry$schema(registry,type){
return malli.registry._schema(registry,type);
});
/**
 * finds all schemas from a registry
 */
malli.registry.schemas = (function malli$registry$schemas(registry){
return malli.registry._schemas(registry);
});

//# sourceMappingURL=malli.registry.js.map
