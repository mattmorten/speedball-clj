goog.provide('malli.instrument');
goog.scope(function(){
  malli.instrument.goog$module$goog$object = goog.module.get('goog.object');
});
malli.instrument._ns_js_path = (function malli$instrument$_ns_js_path(ns){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),/\./)));
});
malli.instrument._prop_js_path = (function malli$instrument$_prop_js_path(ns,prop){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),/\./),cljs.core.name(prop))));
});
malli.instrument._get_prop = (function malli$instrument$_get_prop(ns,prop){
return malli.instrument.goog$module$goog$object.getValueByKeys(goog.global,malli.instrument._prop_js_path(ns,prop));
});
malli.instrument._get_ns = (function malli$instrument$_get_ns(ns){
return malli.instrument.goog$module$goog$object.getValueByKeys(goog.global,malli.instrument._ns_js_path(ns));
});
malli.instrument._find_var = (function malli$instrument$_find_var(n,s){
return malli.instrument._get_prop(n,s);
});
malli.instrument._original = (function malli$instrument$_original(f){
return malli.instrument.goog$module$goog$object.get(f,"malli$instrument$original");
});
malli.instrument._instrumented_QMARK_ = (function malli$instrument$_instrumented_QMARK_(f){
return malli.instrument.goog$module$goog$object.get(f,"malli$instrument$instrumented?") === true;
});
malli.instrument.meta_fn = (function malli$instrument$meta_fn(f,m){
var new_f = goog.bind(f,({}));
Object.assign(new_f,f);

var x21624_21932 = new_f;
(x21624_21932.cljs$core$IMeta$ = cljs.core.PROTOCOL_SENTINEL);

(x21624_21932.cljs$core$IMeta$_meta$arity$1 = (function (_){
var ___$1 = this;
return m;
}));


return new_f;
});
malli.instrument._filter_ns = (function malli$instrument$_filter_ns(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21933 = arguments.length;
var i__5727__auto___21934 = (0);
while(true){
if((i__5727__auto___21934 < len__5726__auto___21933)){
args__5732__auto__.push((arguments[i__5727__auto___21934]));

var G__21935 = (i__5727__auto___21934 + (1));
i__5727__auto___21934 = G__21935;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return malli.instrument._filter_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(malli.instrument._filter_ns.cljs$core$IFn$_invoke$arity$variadic = (function (ns){
return (function (n,_,___$1){
var fexpr__21626 = cljs.core.set(ns);
return (fexpr__21626.cljs$core$IFn$_invoke$arity$1 ? fexpr__21626.cljs$core$IFn$_invoke$arity$1(n) : fexpr__21626.call(null, n));
});
}));

(malli.instrument._filter_ns.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.instrument._filter_ns.cljs$lang$applyTo = (function (seq21625){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21625));
}));

malli.instrument._filter_var = (function malli$instrument$_filter_var(f){
return (function (n,s,d){
var G__21627 = (new cljs.core.Var(cljs.core.constantly(malli.instrument._find_var(n,s)),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(n,s),d));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21627) : f.call(null, G__21627));
});
});
malli.instrument._filter_schema = (function malli$instrument$_filter_schema(f){
return (function (_,___$1,p__21628){
var map__21629 = p__21628;
var map__21629__$1 = cljs.core.__destructure_map(map__21629);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21629__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(schema) : f.call(null, schema));
});
});
malli.instrument._arity__GT_schema = (function malli$instrument$_arity__GT_schema(fn_schema){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (schema){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arity","arity",-1808556135).cljs$core$IFn$_invoke$arity$1(malli.core._function_info(malli.core.schema.cljs$core$IFn$_invoke$arity$1(schema))),schema], null);
}),cljs.core.rest(fn_schema)));
});
malli.instrument._variadic_QMARK_ = (function malli$instrument$_variadic_QMARK_(f){
return malli.instrument.goog$module$goog$object.get(f,"cljs$core$IFn$_invoke$arity$variadic");
});
malli.instrument._max_fixed_arity = (function malli$instrument$_max_fixed_arity(f){
return malli.instrument.goog$module$goog$object.get(f,"cljs$lang$maxFixedArity");
});
malli.instrument._pure_variadic_QMARK_ = (function malli$instrument$_pure_variadic_QMARK_(f){
var max_fixed_arity = malli.instrument._max_fixed_arity(f);
var and__5000__auto__ = max_fixed_arity;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = malli.instrument._variadic_QMARK_(f);
if(cljs.core.truth_(and__5000__auto____$1)){
return cljs.core.every_QMARK_((function (p1__21630_SHARP_){
return (!(cljs.core.fn_QMARK_(malli.instrument.goog$module$goog$object.get(f,["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21630_SHARP_)].join('')))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((20)));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});
malli.instrument._replace_variadic_fn = (function malli$instrument$_replace_variadic_fn(original_fn,n,s,opts){
var accessor = "cljs$core$IFn$_invoke$arity$variadic";
var arity_fn = malli.instrument.goog$module$goog$object.get(original_fn,accessor);
if(cljs.core.truth_(arity_fn)){
malli.instrument.goog$module$goog$object.set(original_fn,"malli$instrument$instrumented?",true);

var max_fixed_arity = malli.instrument._max_fixed_arity(original_fn);
var instrumented_variadic_fn = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(opts,(function() { 
var G__21944__delegate = function (args){
var vec__21631 = cljs.core.split_at(max_fixed_arity,cljs.core.vec(args));
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21631,(0),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21631,(1),null);
var final_args = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(fixed_args),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(rest_args)], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(arity_fn,final_args);
};
var G__21944 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21945__i = 0, G__21945__a = new Array(arguments.length -  0);
while (G__21945__i < G__21945__a.length) {G__21945__a[G__21945__i] = arguments[G__21945__i + 0]; ++G__21945__i;}
  args = new cljs.core.IndexedSeq(G__21945__a,0,null);
} 
return G__21944__delegate.call(this,args);};
G__21944.cljs$lang$maxFixedArity = 0;
G__21944.cljs$lang$applyTo = (function (arglist__21946){
var args = cljs.core.seq(arglist__21946);
return G__21944__delegate(args);
});
G__21944.cljs$core$IFn$_invoke$arity$variadic = G__21944__delegate;
return G__21944;
})()
);
var instrumented_wrapper = (function() { 
var G__21947__delegate = function (args){
var vec__21634 = cljs.core.split_at(max_fixed_arity,cljs.core.vec(args));
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21634,(0),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21634,(1),null);
var final_args = cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list_STAR_,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(fixed_args),cljs.core.not_empty(rest_args))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instrumented_variadic_fn,final_args);
};
var G__21947 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21948__i = 0, G__21948__a = new Array(arguments.length -  0);
while (G__21948__i < G__21948__a.length) {G__21948__a[G__21948__i] = arguments[G__21948__i + 0]; ++G__21948__i;}
  args = new cljs.core.IndexedSeq(G__21948__a,0,null);
} 
return G__21947__delegate.call(this,args);};
G__21947.cljs$lang$maxFixedArity = 0;
G__21947.cljs$lang$applyTo = (function (arglist__21949){
var args = cljs.core.seq(arglist__21949);
return G__21947__delegate(args);
});
G__21947.cljs$core$IFn$_invoke$arity$variadic = G__21947__delegate;
return G__21947;
})()
;
malli.instrument.goog$module$goog$object.set(instrumented_wrapper,"malli$instrument$original",arity_fn);

malli.instrument.goog$module$goog$object.set(malli.instrument._get_prop(n,s),"malli$instrument$instrumented?",true);

malli.instrument.goog$module$goog$object.set(malli.instrument._get_prop(n,s),accessor,instrumented_wrapper);

return malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),s,malli.instrument.meta_fn(original_fn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"instrumented-symbol","instrumented-symbol",-216975268),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(n,s)], null)));
} else {
return null;
}
});
malli.instrument._replace_multi_arity = (function malli$instrument$_replace_multi_arity(original_fn,n,s,opts){
var schema = new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(opts);
malli.instrument.goog$module$goog$object.set(original_fn,"malli$instrument$instrumented?",true);

malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),s,malli.instrument.meta_fn(original_fn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"instrumented-symbol","instrumented-symbol",-216975268),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(n,s)], null)));

var seq__21637 = cljs.core.seq(malli.instrument._arity__GT_schema(schema));
var chunk__21638 = null;
var count__21639 = (0);
var i__21640 = (0);
while(true){
if((i__21640 < count__21639)){
var vec__21647 = chunk__21638.cljs$core$IIndexed$_nth$arity$2(null, i__21640);
var arity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21647,(0),null);
var f_schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21647,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arity,new cljs.core.Keyword(null,"varargs","varargs",1030150858))){
malli.instrument._replace_variadic_fn(original_fn,n,s,opts);
} else {
var accessor_21951 = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join('');
var arity_fn_21952 = malli.instrument.goog$module$goog$object.get(original_fn,accessor_21951);
if(cljs.core.truth_(arity_fn_21952)){
var instrumented_fn_21953 = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"schema","schema",-1582001791),f_schema),arity_fn_21952);
malli.instrument.goog$module$goog$object.set(instrumented_fn_21953,"malli$instrument$original",arity_fn_21952);

malli.instrument.goog$module$goog$object.set(instrumented_fn_21953,"malli$instrument$instrumented?",true);

malli.instrument.goog$module$goog$object.set(malli.instrument._get_prop(n,s),accessor_21951,instrumented_fn_21953);
} else {
}
}


var G__21954 = seq__21637;
var G__21955 = chunk__21638;
var G__21956 = count__21639;
var G__21957 = (i__21640 + (1));
seq__21637 = G__21954;
chunk__21638 = G__21955;
count__21639 = G__21956;
i__21640 = G__21957;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21637);
if(temp__5804__auto__){
var seq__21637__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21637__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21637__$1);
var G__21958 = cljs.core.chunk_rest(seq__21637__$1);
var G__21959 = c__5525__auto__;
var G__21960 = cljs.core.count(c__5525__auto__);
var G__21961 = (0);
seq__21637 = G__21958;
chunk__21638 = G__21959;
count__21639 = G__21960;
i__21640 = G__21961;
continue;
} else {
var vec__21650 = cljs.core.first(seq__21637__$1);
var arity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21650,(0),null);
var f_schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21650,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arity,new cljs.core.Keyword(null,"varargs","varargs",1030150858))){
malli.instrument._replace_variadic_fn(original_fn,n,s,opts);
} else {
var accessor_21962 = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join('');
var arity_fn_21963 = malli.instrument.goog$module$goog$object.get(original_fn,accessor_21962);
if(cljs.core.truth_(arity_fn_21963)){
var instrumented_fn_21964 = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"schema","schema",-1582001791),f_schema),arity_fn_21963);
malli.instrument.goog$module$goog$object.set(instrumented_fn_21964,"malli$instrument$original",arity_fn_21963);

malli.instrument.goog$module$goog$object.set(instrumented_fn_21964,"malli$instrument$instrumented?",true);

malli.instrument.goog$module$goog$object.set(malli.instrument._get_prop(n,s),accessor_21962,instrumented_fn_21964);
} else {
}
}


var G__21966 = cljs.core.next(seq__21637__$1);
var G__21967 = null;
var G__21968 = (0);
var G__21969 = (0);
seq__21637 = G__21966;
chunk__21638 = G__21967;
count__21639 = G__21968;
i__21640 = G__21969;
continue;
}
} else {
return null;
}
}
break;
}
});
malli.instrument._replace_fn = (function malli$instrument$_replace_fn(original_fn,n,s,opts){
try{if(cljs.core.truth_(malli.instrument._pure_variadic_QMARK_(original_fn))){
return malli.instrument._replace_variadic_fn(original_fn,n,s,opts);
} else {
if(cljs.core.truth_(malli.instrument._max_fixed_arity(original_fn))){
return malli.instrument._replace_multi_arity(original_fn,n,s,opts);
} else {
var instrumented_fn = malli.instrument.meta_fn(malli.core._instrument.cljs$core$IFn$_invoke$arity$2(opts,original_fn),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"instrumented-symbol","instrumented-symbol",-216975268),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s))], null));
malli.instrument.goog$module$goog$object.set(original_fn,"malli$instrument$instrumented?",true);

malli.instrument.goog$module$goog$object.set(instrumented_fn,"malli$instrument$instrumented?",true);

malli.instrument.goog$module$goog$object.set(instrumented_fn,"malli$instrument$original",original_fn);

return malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),cljs.core.munge(cljs.core.name(s)),instrumented_fn);

}
}
}catch (e21653){var e = e21653;
if((e instanceof cljs.core.ExceptionInfo)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Schema error when instrumenting function: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s)))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_message(e))].join(''),cljs.core.ex_data(e));
} else {
throw (new Error(["Schema error when instrumenting function: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s))),". ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')));
}
}});
malli.instrument._strument_BANG_ = (function malli$instrument$_strument_BANG_(var_args){
var G__21656 = arguments.length;
switch (G__21656) {
case 0:
return malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (p__21657){
var map__21658 = p__21657;
var map__21658__$1 = cljs.core.__destructure_map(map__21658);
var options = map__21658__$1;
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21658__$1,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21658__$1,new cljs.core.Keyword(null,"data","data",-232669377),malli.core.function_schemas.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cljs","cljs",1492417629)));
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21658__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21658__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21658__$1,new cljs.core.Keyword(null,"report","report",1394055010));
var skip_instrumented_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21658__$1,new cljs.core.Keyword(null,"skip-instrumented?","skip-instrumented?",1366613843),false);
var seq__21659 = cljs.core.seq(data);
var chunk__21664 = null;
var count__21665 = (0);
var i__21666 = (0);
while(true){
if((i__21666 < count__21665)){
var vec__21797 = chunk__21664.cljs$core$IIndexed$_nth$arity$2(null, i__21666);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21797,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21797,(1),null);
var seq__21667_21972 = cljs.core.seq(d);
var chunk__21668_21973 = null;
var count__21669_21974 = (0);
var i__21670_21975 = (0);
while(true){
if((i__21670_21975 < count__21669_21974)){
var vec__21830_21976 = chunk__21668_21973.cljs$core$IIndexed$_nth$arity$2(null, i__21670_21975);
var s_21977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21830_21976,(0),null);
var d_21978__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21830_21976,(1),null);
if(cljs.core.truth_((function (){var or__5002__auto__ = cljs.core.not(filters);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.some(((function (seq__21667_21972,chunk__21668_21973,count__21669_21974,i__21670_21975,seq__21659,chunk__21664,count__21665,i__21666,or__5002__auto__,vec__21830_21976,s_21977,d_21978__$1,vec__21797,n,d,map__21658,map__21658__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (p1__21654_SHARP_){
return (p1__21654_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__21654_SHARP_.cljs$core$IFn$_invoke$arity$3(n,s_21977,d_21978__$1) : p1__21654_SHARP_.call(null, n,s_21977,d_21978__$1));
});})(seq__21667_21972,chunk__21668_21973,count__21669_21974,i__21670_21975,seq__21659,chunk__21664,count__21665,i__21666,or__5002__auto__,vec__21830_21976,s_21977,d_21978__$1,vec__21797,n,d,map__21658,map__21658__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
,filters);
}
})())){
var temp__5804__auto___21979 = malli.instrument._find_var(n,s_21977);
if(cljs.core.truth_(temp__5804__auto___21979)){
var v_21980 = temp__5804__auto___21979;
var G__21833_21981 = mode;
var G__21833_21982__$1 = (((G__21833_21981 instanceof cljs.core.Keyword))?G__21833_21981.fqn:null);
switch (G__21833_21982__$1) {
case "instrument":
var original_fn_21986 = (function (){var or__5002__auto__ = malli.instrument._original(v_21980);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return v_21980;
}
})();
var dgen_21987 = (function (){var $ = cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scope","scope",-439358418),new cljs.core.Keyword(null,"report","report",1394055010),new cljs.core.Keyword(null,"gen","gen",142575302)], null));
var $__$1 = (function (){var G__21834 = $;
if(cljs.core.truth_(report)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__21834,new cljs.core.Keyword(null,"report","report",1394055010),((function (seq__21667_21972,chunk__21668_21973,count__21669_21974,i__21670_21975,seq__21659,chunk__21664,count__21665,i__21666,G__21834,$,original_fn_21986,G__21833_21981,G__21833_21982__$1,v_21980,temp__5804__auto___21979,vec__21830_21976,s_21977,d_21978__$1,vec__21797,n,d,map__21658,map__21658__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (r){
return ((function (seq__21667_21972,chunk__21668_21973,count__21669_21974,i__21670_21975,seq__21659,chunk__21664,count__21665,i__21666,G__21834,$,original_fn_21986,G__21833_21981,G__21833_21982__$1,v_21980,temp__5804__auto___21979,vec__21830_21976,s_21977,d_21978__$1,vec__21797,n,d,map__21658,map__21658__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (t,data__$1){
var G__21835 = t;
var G__21836 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s_21977)));
return (r.cljs$core$IFn$_invoke$arity$2 ? r.cljs$core$IFn$_invoke$arity$2(G__21835,G__21836) : r.call(null, G__21835,G__21836));
});
;})(seq__21667_21972,chunk__21668_21973,count__21669_21974,i__21670_21975,seq__21659,chunk__21664,count__21665,i__21666,G__21834,$,original_fn_21986,G__21833_21981,G__21833_21982__$1,v_21980,temp__5804__auto___21979,vec__21830_21976,s_21977,d_21978__$1,vec__21797,n,d,map__21658,map__21658__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
});})(seq__21667_21972,chunk__21668_21973,count__21669_21974,i__21670_21975,seq__21659,chunk__21664,count__21665,i__21666,G__21834,$,original_fn_21986,G__21833_21981,G__21833_21982__$1,v_21980,temp__5804__auto___21979,vec__21830_21976,s_21977,d_21978__$1,vec__21797,n,d,map__21658,map__21658__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
);
} else {
return G__21834;
}
})();
var $__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$__$1,d_21978__$1], 0));
if(cljs.core.truth_((function (){var and__5000__auto__ = gen;
if(cljs.core.truth_(and__5000__auto__)){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_21978__$1) === true;
} else {
return and__5000__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($__$2,new cljs.core.Keyword(null,"gen","gen",142575302),gen);
} else {
if(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_21978__$1) === true){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($__$2,new cljs.core.Keyword(null,"gen","gen",142575302));
} else {
return $__$2;

}
}
})();
if(cljs.core.truth_((function (){var and__5000__auto__ = original_fn_21986;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not((function (){var and__5000__auto____$1 = skip_instrumented_QMARK_;
if(cljs.core.truth_(and__5000__auto____$1)){
return malli.instrument._instrumented_QMARK_(v_21980);
} else {
return and__5000__auto____$1;
}
})());
} else {
return and__5000__auto__;
}
})())){
malli.instrument._replace_fn(original_fn_21986,n,s_21977,dgen_21987);
} else {
}

break;
case "unstrument":
if(malli.instrument._instrumented_QMARK_(v_21980)){
var original_fn_21994 = (function (){var or__5002__auto__ = malli.instrument._original(v_21980);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return v_21980;
}
})();
if(cljs.core.truth_(malli.instrument._pure_variadic_QMARK_(original_fn_21994))){
var accessor_21995 = "cljs$core$IFn$_invoke$arity$variadic";
var variadic_fn_21996 = malli.instrument.goog$module$goog$object.get(v_21980,accessor_21995);
var orig_variadic_fn_21997 = malli.instrument.goog$module$goog$object.get(variadic_fn_21996,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_21994,accessor_21995,orig_variadic_fn_21997);
} else {
if(cljs.core.truth_(malli.instrument._max_fixed_arity(original_fn_21994))){
var seq__21837_21998 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.range.cljs$core$IFn$_invoke$arity$1((20)),"variadic"));
var chunk__21840_21999 = null;
var count__21841_22000 = (0);
var i__21842_22001 = (0);
while(true){
if((i__21842_22001 < count__21841_22000)){
var arity_22002 = chunk__21840_21999.cljs$core$IIndexed$_nth$arity$2(null, i__21842_22001);
var accessor_22003 = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_22002)].join('');
var arity_fn_22004 = malli.instrument.goog$module$goog$object.get(original_fn_21994,accessor_22003);
if(cljs.core.truth_(arity_fn_22004)){
var orig_22005 = malli.instrument.goog$module$goog$object.get(arity_fn_22004,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_21994,accessor_22003,orig_22005);


var G__22006 = seq__21837_21998;
var G__22007 = chunk__21840_21999;
var G__22008 = count__21841_22000;
var G__22009 = (i__21842_22001 + (1));
seq__21837_21998 = G__22006;
chunk__21840_21999 = G__22007;
count__21841_22000 = G__22008;
i__21842_22001 = G__22009;
continue;
} else {
var G__22010 = seq__21837_21998;
var G__22011 = chunk__21840_21999;
var G__22012 = count__21841_22000;
var G__22013 = (i__21842_22001 + (1));
seq__21837_21998 = G__22010;
chunk__21840_21999 = G__22011;
count__21841_22000 = G__22012;
i__21842_22001 = G__22013;
continue;
}
} else {
var temp__5804__auto___22014__$1 = cljs.core.seq(seq__21837_21998);
if(temp__5804__auto___22014__$1){
var seq__21837_22015__$1 = temp__5804__auto___22014__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21837_22015__$1)){
var c__5525__auto___22016 = cljs.core.chunk_first(seq__21837_22015__$1);
var G__22017 = cljs.core.chunk_rest(seq__21837_22015__$1);
var G__22018 = c__5525__auto___22016;
var G__22019 = cljs.core.count(c__5525__auto___22016);
var G__22020 = (0);
seq__21837_21998 = G__22017;
chunk__21840_21999 = G__22018;
count__21841_22000 = G__22019;
i__21842_22001 = G__22020;
continue;
} else {
var arity_22021 = cljs.core.first(seq__21837_22015__$1);
var accessor_22022 = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_22021)].join('');
var arity_fn_22023 = malli.instrument.goog$module$goog$object.get(original_fn_21994,accessor_22022);
if(cljs.core.truth_(arity_fn_22023)){
var orig_22024 = malli.instrument.goog$module$goog$object.get(arity_fn_22023,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_21994,accessor_22022,orig_22024);


var G__22025 = cljs.core.next(seq__21837_22015__$1);
var G__22026 = null;
var G__22027 = (0);
var G__22028 = (0);
seq__21837_21998 = G__22025;
chunk__21840_21999 = G__22026;
count__21841_22000 = G__22027;
i__21842_22001 = G__22028;
continue;
} else {
var G__22029 = cljs.core.next(seq__21837_22015__$1);
var G__22030 = null;
var G__22031 = (0);
var G__22032 = (0);
seq__21837_21998 = G__22029;
chunk__21840_21999 = G__22030;
count__21841_22000 = G__22031;
i__21842_22001 = G__22032;
continue;
}
}
} else {
}
}
break;
}
} else {
malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),cljs.core.munge(cljs.core.name(s_21977)),original_fn_21994);

}
}
} else {
}

break;
default:
(mode.cljs$core$IFn$_invoke$arity$2 ? mode.cljs$core$IFn$_invoke$arity$2(v_21980,d_21978__$1) : mode.call(null, v_21980,d_21978__$1));

}
} else {
}
} else {
}


var G__22033 = seq__21667_21972;
var G__22034 = chunk__21668_21973;
var G__22035 = count__21669_21974;
var G__22036 = (i__21670_21975 + (1));
seq__21667_21972 = G__22033;
chunk__21668_21973 = G__22034;
count__21669_21974 = G__22035;
i__21670_21975 = G__22036;
continue;
} else {
var temp__5804__auto___22037 = cljs.core.seq(seq__21667_21972);
if(temp__5804__auto___22037){
var seq__21667_22038__$1 = temp__5804__auto___22037;
if(cljs.core.chunked_seq_QMARK_(seq__21667_22038__$1)){
var c__5525__auto___22039 = cljs.core.chunk_first(seq__21667_22038__$1);
var G__22040 = cljs.core.chunk_rest(seq__21667_22038__$1);
var G__22041 = c__5525__auto___22039;
var G__22042 = cljs.core.count(c__5525__auto___22039);
var G__22043 = (0);
seq__21667_21972 = G__22040;
chunk__21668_21973 = G__22041;
count__21669_21974 = G__22042;
i__21670_21975 = G__22043;
continue;
} else {
var vec__21845_22044 = cljs.core.first(seq__21667_22038__$1);
var s_22045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21845_22044,(0),null);
var d_22046__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21845_22044,(1),null);
if(cljs.core.truth_((function (){var or__5002__auto__ = cljs.core.not(filters);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.some(((function (seq__21667_21972,chunk__21668_21973,count__21669_21974,i__21670_21975,seq__21659,chunk__21664,count__21665,i__21666,or__5002__auto__,vec__21845_22044,s_22045,d_22046__$1,seq__21667_22038__$1,temp__5804__auto___22037,vec__21797,n,d,map__21658,map__21658__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (p1__21654_SHARP_){
return (p1__21654_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__21654_SHARP_.cljs$core$IFn$_invoke$arity$3(n,s_22045,d_22046__$1) : p1__21654_SHARP_.call(null, n,s_22045,d_22046__$1));
});})(seq__21667_21972,chunk__21668_21973,count__21669_21974,i__21670_21975,seq__21659,chunk__21664,count__21665,i__21666,or__5002__auto__,vec__21845_22044,s_22045,d_22046__$1,seq__21667_22038__$1,temp__5804__auto___22037,vec__21797,n,d,map__21658,map__21658__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
,filters);
}
})())){
var temp__5804__auto___22050__$1 = malli.instrument._find_var(n,s_22045);
if(cljs.core.truth_(temp__5804__auto___22050__$1)){
var v_22051 = temp__5804__auto___22050__$1;
var G__21848_22052 = mode;
var G__21848_22053__$1 = (((G__21848_22052 instanceof cljs.core.Keyword))?G__21848_22052.fqn:null);
switch (G__21848_22053__$1) {
case "instrument":
var original_fn_22058 = (function (){var or__5002__auto__ = malli.instrument._original(v_22051);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return v_22051;
}
})();
var dgen_22059 = (function (){var $ = cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scope","scope",-439358418),new cljs.core.Keyword(null,"report","report",1394055010),new cljs.core.Keyword(null,"gen","gen",142575302)], null));
var $__$1 = (function (){var G__21849 = $;
if(cljs.core.truth_(report)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__21849,new cljs.core.Keyword(null,"report","report",1394055010),((function (seq__21667_21972,chunk__21668_21973,count__21669_21974,i__21670_21975,seq__21659,chunk__21664,count__21665,i__21666,G__21849,$,original_fn_22058,G__21848_22052,G__21848_22053__$1,v_22051,temp__5804__auto___22050__$1,vec__21845_22044,s_22045,d_22046__$1,seq__21667_22038__$1,temp__5804__auto___22037,vec__21797,n,d,map__21658,map__21658__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (r){
return ((function (seq__21667_21972,chunk__21668_21973,count__21669_21974,i__21670_21975,seq__21659,chunk__21664,count__21665,i__21666,G__21849,$,original_fn_22058,G__21848_22052,G__21848_22053__$1,v_22051,temp__5804__auto___22050__$1,vec__21845_22044,s_22045,d_22046__$1,seq__21667_22038__$1,temp__5804__auto___22037,vec__21797,n,d,map__21658,map__21658__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (t,data__$1){
var G__21850 = t;
var G__21851 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s_22045)));
return (r.cljs$core$IFn$_invoke$arity$2 ? r.cljs$core$IFn$_invoke$arity$2(G__21850,G__21851) : r.call(null, G__21850,G__21851));
});
;})(seq__21667_21972,chunk__21668_21973,count__21669_21974,i__21670_21975,seq__21659,chunk__21664,count__21665,i__21666,G__21849,$,original_fn_22058,G__21848_22052,G__21848_22053__$1,v_22051,temp__5804__auto___22050__$1,vec__21845_22044,s_22045,d_22046__$1,seq__21667_22038__$1,temp__5804__auto___22037,vec__21797,n,d,map__21658,map__21658__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
});})(seq__21667_21972,chunk__21668_21973,count__21669_21974,i__21670_21975,seq__21659,chunk__21664,count__21665,i__21666,G__21849,$,original_fn_22058,G__21848_22052,G__21848_22053__$1,v_22051,temp__5804__auto___22050__$1,vec__21845_22044,s_22045,d_22046__$1,seq__21667_22038__$1,temp__5804__auto___22037,vec__21797,n,d,map__21658,map__21658__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
);
} else {
return G__21849;
}
})();
var $__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$__$1,d_22046__$1], 0));
if(cljs.core.truth_((function (){var and__5000__auto__ = gen;
if(cljs.core.truth_(and__5000__auto__)){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_22046__$1) === true;
} else {
return and__5000__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($__$2,new cljs.core.Keyword(null,"gen","gen",142575302),gen);
} else {
if(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_22046__$1) === true){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($__$2,new cljs.core.Keyword(null,"gen","gen",142575302));
} else {
return $__$2;

}
}
})();
if(cljs.core.truth_((function (){var and__5000__auto__ = original_fn_22058;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not((function (){var and__5000__auto____$1 = skip_instrumented_QMARK_;
if(cljs.core.truth_(and__5000__auto____$1)){
return malli.instrument._instrumented_QMARK_(v_22051);
} else {
return and__5000__auto____$1;
}
})());
} else {
return and__5000__auto__;
}
})())){
malli.instrument._replace_fn(original_fn_22058,n,s_22045,dgen_22059);
} else {
}

break;
case "unstrument":
if(malli.instrument._instrumented_QMARK_(v_22051)){
var original_fn_22063 = (function (){var or__5002__auto__ = malli.instrument._original(v_22051);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return v_22051;
}
})();
if(cljs.core.truth_(malli.instrument._pure_variadic_QMARK_(original_fn_22063))){
var accessor_22067 = "cljs$core$IFn$_invoke$arity$variadic";
var variadic_fn_22068 = malli.instrument.goog$module$goog$object.get(v_22051,accessor_22067);
var orig_variadic_fn_22069 = malli.instrument.goog$module$goog$object.get(variadic_fn_22068,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_22063,accessor_22067,orig_variadic_fn_22069);
} else {
if(cljs.core.truth_(malli.instrument._max_fixed_arity(original_fn_22063))){
var seq__21852_22070 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.range.cljs$core$IFn$_invoke$arity$1((20)),"variadic"));
var chunk__21855_22071 = null;
var count__21856_22072 = (0);
var i__21857_22073 = (0);
while(true){
if((i__21857_22073 < count__21856_22072)){
var arity_22074 = chunk__21855_22071.cljs$core$IIndexed$_nth$arity$2(null, i__21857_22073);
var accessor_22075 = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_22074)].join('');
var arity_fn_22076 = malli.instrument.goog$module$goog$object.get(original_fn_22063,accessor_22075);
if(cljs.core.truth_(arity_fn_22076)){
var orig_22077 = malli.instrument.goog$module$goog$object.get(arity_fn_22076,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_22063,accessor_22075,orig_22077);


var G__22078 = seq__21852_22070;
var G__22079 = chunk__21855_22071;
var G__22080 = count__21856_22072;
var G__22081 = (i__21857_22073 + (1));
seq__21852_22070 = G__22078;
chunk__21855_22071 = G__22079;
count__21856_22072 = G__22080;
i__21857_22073 = G__22081;
continue;
} else {
var G__22082 = seq__21852_22070;
var G__22083 = chunk__21855_22071;
var G__22084 = count__21856_22072;
var G__22085 = (i__21857_22073 + (1));
seq__21852_22070 = G__22082;
chunk__21855_22071 = G__22083;
count__21856_22072 = G__22084;
i__21857_22073 = G__22085;
continue;
}
} else {
var temp__5804__auto___22086__$2 = cljs.core.seq(seq__21852_22070);
if(temp__5804__auto___22086__$2){
var seq__21852_22087__$1 = temp__5804__auto___22086__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21852_22087__$1)){
var c__5525__auto___22088 = cljs.core.chunk_first(seq__21852_22087__$1);
var G__22089 = cljs.core.chunk_rest(seq__21852_22087__$1);
var G__22090 = c__5525__auto___22088;
var G__22091 = cljs.core.count(c__5525__auto___22088);
var G__22092 = (0);
seq__21852_22070 = G__22089;
chunk__21855_22071 = G__22090;
count__21856_22072 = G__22091;
i__21857_22073 = G__22092;
continue;
} else {
var arity_22093 = cljs.core.first(seq__21852_22087__$1);
var accessor_22094 = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_22093)].join('');
var arity_fn_22095 = malli.instrument.goog$module$goog$object.get(original_fn_22063,accessor_22094);
if(cljs.core.truth_(arity_fn_22095)){
var orig_22096 = malli.instrument.goog$module$goog$object.get(arity_fn_22095,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_22063,accessor_22094,orig_22096);


var G__22097 = cljs.core.next(seq__21852_22087__$1);
var G__22098 = null;
var G__22099 = (0);
var G__22100 = (0);
seq__21852_22070 = G__22097;
chunk__21855_22071 = G__22098;
count__21856_22072 = G__22099;
i__21857_22073 = G__22100;
continue;
} else {
var G__22101 = cljs.core.next(seq__21852_22087__$1);
var G__22102 = null;
var G__22103 = (0);
var G__22104 = (0);
seq__21852_22070 = G__22101;
chunk__21855_22071 = G__22102;
count__21856_22072 = G__22103;
i__21857_22073 = G__22104;
continue;
}
}
} else {
}
}
break;
}
} else {
malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),cljs.core.munge(cljs.core.name(s_22045)),original_fn_22063);

}
}
} else {
}

break;
default:
(mode.cljs$core$IFn$_invoke$arity$2 ? mode.cljs$core$IFn$_invoke$arity$2(v_22051,d_22046__$1) : mode.call(null, v_22051,d_22046__$1));

}
} else {
}
} else {
}


var G__22105 = cljs.core.next(seq__21667_22038__$1);
var G__22106 = null;
var G__22107 = (0);
var G__22108 = (0);
seq__21667_21972 = G__22105;
chunk__21668_21973 = G__22106;
count__21669_21974 = G__22107;
i__21670_21975 = G__22108;
continue;
}
} else {
}
}
break;
}

var G__22109 = seq__21659;
var G__22110 = chunk__21664;
var G__22111 = count__21665;
var G__22112 = (i__21666 + (1));
seq__21659 = G__22109;
chunk__21664 = G__22110;
count__21665 = G__22111;
i__21666 = G__22112;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21659);
if(temp__5804__auto__){
var seq__21659__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21659__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21659__$1);
var G__22113 = cljs.core.chunk_rest(seq__21659__$1);
var G__22114 = c__5525__auto__;
var G__22115 = cljs.core.count(c__5525__auto__);
var G__22116 = (0);
seq__21659 = G__22113;
chunk__21664 = G__22114;
count__21665 = G__22115;
i__21666 = G__22116;
continue;
} else {
var vec__21860 = cljs.core.first(seq__21659__$1);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21860,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21860,(1),null);
var seq__21660_22117 = cljs.core.seq(d);
var chunk__21661_22118 = null;
var count__21662_22119 = (0);
var i__21663_22120 = (0);
while(true){
if((i__21663_22120 < count__21662_22119)){
var vec__21893_22121 = chunk__21661_22118.cljs$core$IIndexed$_nth$arity$2(null, i__21663_22120);
var s_22122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21893_22121,(0),null);
var d_22123__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21893_22121,(1),null);
if(cljs.core.truth_((function (){var or__5002__auto__ = cljs.core.not(filters);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.some(((function (seq__21660_22117,chunk__21661_22118,count__21662_22119,i__21663_22120,seq__21659,chunk__21664,count__21665,i__21666,or__5002__auto__,vec__21893_22121,s_22122,d_22123__$1,vec__21860,n,d,seq__21659__$1,temp__5804__auto__,map__21658,map__21658__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (p1__21654_SHARP_){
return (p1__21654_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__21654_SHARP_.cljs$core$IFn$_invoke$arity$3(n,s_22122,d_22123__$1) : p1__21654_SHARP_.call(null, n,s_22122,d_22123__$1));
});})(seq__21660_22117,chunk__21661_22118,count__21662_22119,i__21663_22120,seq__21659,chunk__21664,count__21665,i__21666,or__5002__auto__,vec__21893_22121,s_22122,d_22123__$1,vec__21860,n,d,seq__21659__$1,temp__5804__auto__,map__21658,map__21658__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
,filters);
}
})())){
var temp__5804__auto___22124__$1 = malli.instrument._find_var(n,s_22122);
if(cljs.core.truth_(temp__5804__auto___22124__$1)){
var v_22125 = temp__5804__auto___22124__$1;
var G__21896_22126 = mode;
var G__21896_22127__$1 = (((G__21896_22126 instanceof cljs.core.Keyword))?G__21896_22126.fqn:null);
switch (G__21896_22127__$1) {
case "instrument":
var original_fn_22129 = (function (){var or__5002__auto__ = malli.instrument._original(v_22125);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return v_22125;
}
})();
var dgen_22130 = (function (){var $ = cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scope","scope",-439358418),new cljs.core.Keyword(null,"report","report",1394055010),new cljs.core.Keyword(null,"gen","gen",142575302)], null));
var $__$1 = (function (){var G__21897 = $;
if(cljs.core.truth_(report)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__21897,new cljs.core.Keyword(null,"report","report",1394055010),((function (seq__21660_22117,chunk__21661_22118,count__21662_22119,i__21663_22120,seq__21659,chunk__21664,count__21665,i__21666,G__21897,$,original_fn_22129,G__21896_22126,G__21896_22127__$1,v_22125,temp__5804__auto___22124__$1,vec__21893_22121,s_22122,d_22123__$1,vec__21860,n,d,seq__21659__$1,temp__5804__auto__,map__21658,map__21658__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (r){
return ((function (seq__21660_22117,chunk__21661_22118,count__21662_22119,i__21663_22120,seq__21659,chunk__21664,count__21665,i__21666,G__21897,$,original_fn_22129,G__21896_22126,G__21896_22127__$1,v_22125,temp__5804__auto___22124__$1,vec__21893_22121,s_22122,d_22123__$1,vec__21860,n,d,seq__21659__$1,temp__5804__auto__,map__21658,map__21658__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (t,data__$1){
var G__21898 = t;
var G__21899 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s_22122)));
return (r.cljs$core$IFn$_invoke$arity$2 ? r.cljs$core$IFn$_invoke$arity$2(G__21898,G__21899) : r.call(null, G__21898,G__21899));
});
;})(seq__21660_22117,chunk__21661_22118,count__21662_22119,i__21663_22120,seq__21659,chunk__21664,count__21665,i__21666,G__21897,$,original_fn_22129,G__21896_22126,G__21896_22127__$1,v_22125,temp__5804__auto___22124__$1,vec__21893_22121,s_22122,d_22123__$1,vec__21860,n,d,seq__21659__$1,temp__5804__auto__,map__21658,map__21658__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
});})(seq__21660_22117,chunk__21661_22118,count__21662_22119,i__21663_22120,seq__21659,chunk__21664,count__21665,i__21666,G__21897,$,original_fn_22129,G__21896_22126,G__21896_22127__$1,v_22125,temp__5804__auto___22124__$1,vec__21893_22121,s_22122,d_22123__$1,vec__21860,n,d,seq__21659__$1,temp__5804__auto__,map__21658,map__21658__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
);
} else {
return G__21897;
}
})();
var $__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$__$1,d_22123__$1], 0));
if(cljs.core.truth_((function (){var and__5000__auto__ = gen;
if(cljs.core.truth_(and__5000__auto__)){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_22123__$1) === true;
} else {
return and__5000__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($__$2,new cljs.core.Keyword(null,"gen","gen",142575302),gen);
} else {
if(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_22123__$1) === true){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($__$2,new cljs.core.Keyword(null,"gen","gen",142575302));
} else {
return $__$2;

}
}
})();
if(cljs.core.truth_((function (){var and__5000__auto__ = original_fn_22129;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not((function (){var and__5000__auto____$1 = skip_instrumented_QMARK_;
if(cljs.core.truth_(and__5000__auto____$1)){
return malli.instrument._instrumented_QMARK_(v_22125);
} else {
return and__5000__auto____$1;
}
})());
} else {
return and__5000__auto__;
}
})())){
malli.instrument._replace_fn(original_fn_22129,n,s_22122,dgen_22130);
} else {
}

break;
case "unstrument":
if(malli.instrument._instrumented_QMARK_(v_22125)){
var original_fn_22131 = (function (){var or__5002__auto__ = malli.instrument._original(v_22125);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return v_22125;
}
})();
if(cljs.core.truth_(malli.instrument._pure_variadic_QMARK_(original_fn_22131))){
var accessor_22132 = "cljs$core$IFn$_invoke$arity$variadic";
var variadic_fn_22133 = malli.instrument.goog$module$goog$object.get(v_22125,accessor_22132);
var orig_variadic_fn_22134 = malli.instrument.goog$module$goog$object.get(variadic_fn_22133,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_22131,accessor_22132,orig_variadic_fn_22134);
} else {
if(cljs.core.truth_(malli.instrument._max_fixed_arity(original_fn_22131))){
var seq__21900_22135 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.range.cljs$core$IFn$_invoke$arity$1((20)),"variadic"));
var chunk__21903_22136 = null;
var count__21904_22137 = (0);
var i__21905_22138 = (0);
while(true){
if((i__21905_22138 < count__21904_22137)){
var arity_22139 = chunk__21903_22136.cljs$core$IIndexed$_nth$arity$2(null, i__21905_22138);
var accessor_22140 = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_22139)].join('');
var arity_fn_22141 = malli.instrument.goog$module$goog$object.get(original_fn_22131,accessor_22140);
if(cljs.core.truth_(arity_fn_22141)){
var orig_22142 = malli.instrument.goog$module$goog$object.get(arity_fn_22141,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_22131,accessor_22140,orig_22142);


var G__22143 = seq__21900_22135;
var G__22144 = chunk__21903_22136;
var G__22145 = count__21904_22137;
var G__22146 = (i__21905_22138 + (1));
seq__21900_22135 = G__22143;
chunk__21903_22136 = G__22144;
count__21904_22137 = G__22145;
i__21905_22138 = G__22146;
continue;
} else {
var G__22147 = seq__21900_22135;
var G__22148 = chunk__21903_22136;
var G__22149 = count__21904_22137;
var G__22150 = (i__21905_22138 + (1));
seq__21900_22135 = G__22147;
chunk__21903_22136 = G__22148;
count__21904_22137 = G__22149;
i__21905_22138 = G__22150;
continue;
}
} else {
var temp__5804__auto___22151__$2 = cljs.core.seq(seq__21900_22135);
if(temp__5804__auto___22151__$2){
var seq__21900_22152__$1 = temp__5804__auto___22151__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21900_22152__$1)){
var c__5525__auto___22153 = cljs.core.chunk_first(seq__21900_22152__$1);
var G__22154 = cljs.core.chunk_rest(seq__21900_22152__$1);
var G__22155 = c__5525__auto___22153;
var G__22156 = cljs.core.count(c__5525__auto___22153);
var G__22157 = (0);
seq__21900_22135 = G__22154;
chunk__21903_22136 = G__22155;
count__21904_22137 = G__22156;
i__21905_22138 = G__22157;
continue;
} else {
var arity_22158 = cljs.core.first(seq__21900_22152__$1);
var accessor_22159 = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_22158)].join('');
var arity_fn_22160 = malli.instrument.goog$module$goog$object.get(original_fn_22131,accessor_22159);
if(cljs.core.truth_(arity_fn_22160)){
var orig_22161 = malli.instrument.goog$module$goog$object.get(arity_fn_22160,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_22131,accessor_22159,orig_22161);


var G__22162 = cljs.core.next(seq__21900_22152__$1);
var G__22163 = null;
var G__22164 = (0);
var G__22165 = (0);
seq__21900_22135 = G__22162;
chunk__21903_22136 = G__22163;
count__21904_22137 = G__22164;
i__21905_22138 = G__22165;
continue;
} else {
var G__22166 = cljs.core.next(seq__21900_22152__$1);
var G__22167 = null;
var G__22168 = (0);
var G__22169 = (0);
seq__21900_22135 = G__22166;
chunk__21903_22136 = G__22167;
count__21904_22137 = G__22168;
i__21905_22138 = G__22169;
continue;
}
}
} else {
}
}
break;
}
} else {
malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),cljs.core.munge(cljs.core.name(s_22122)),original_fn_22131);

}
}
} else {
}

break;
default:
(mode.cljs$core$IFn$_invoke$arity$2 ? mode.cljs$core$IFn$_invoke$arity$2(v_22125,d_22123__$1) : mode.call(null, v_22125,d_22123__$1));

}
} else {
}
} else {
}


var G__22170 = seq__21660_22117;
var G__22171 = chunk__21661_22118;
var G__22172 = count__21662_22119;
var G__22173 = (i__21663_22120 + (1));
seq__21660_22117 = G__22170;
chunk__21661_22118 = G__22171;
count__21662_22119 = G__22172;
i__21663_22120 = G__22173;
continue;
} else {
var temp__5804__auto___22174__$1 = cljs.core.seq(seq__21660_22117);
if(temp__5804__auto___22174__$1){
var seq__21660_22176__$1 = temp__5804__auto___22174__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21660_22176__$1)){
var c__5525__auto___22177 = cljs.core.chunk_first(seq__21660_22176__$1);
var G__22178 = cljs.core.chunk_rest(seq__21660_22176__$1);
var G__22179 = c__5525__auto___22177;
var G__22180 = cljs.core.count(c__5525__auto___22177);
var G__22181 = (0);
seq__21660_22117 = G__22178;
chunk__21661_22118 = G__22179;
count__21662_22119 = G__22180;
i__21663_22120 = G__22181;
continue;
} else {
var vec__21908_22183 = cljs.core.first(seq__21660_22176__$1);
var s_22184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21908_22183,(0),null);
var d_22185__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21908_22183,(1),null);
if(cljs.core.truth_((function (){var or__5002__auto__ = cljs.core.not(filters);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.some(((function (seq__21660_22117,chunk__21661_22118,count__21662_22119,i__21663_22120,seq__21659,chunk__21664,count__21665,i__21666,or__5002__auto__,vec__21908_22183,s_22184,d_22185__$1,seq__21660_22176__$1,temp__5804__auto___22174__$1,vec__21860,n,d,seq__21659__$1,temp__5804__auto__,map__21658,map__21658__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (p1__21654_SHARP_){
return (p1__21654_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__21654_SHARP_.cljs$core$IFn$_invoke$arity$3(n,s_22184,d_22185__$1) : p1__21654_SHARP_.call(null, n,s_22184,d_22185__$1));
});})(seq__21660_22117,chunk__21661_22118,count__21662_22119,i__21663_22120,seq__21659,chunk__21664,count__21665,i__21666,or__5002__auto__,vec__21908_22183,s_22184,d_22185__$1,seq__21660_22176__$1,temp__5804__auto___22174__$1,vec__21860,n,d,seq__21659__$1,temp__5804__auto__,map__21658,map__21658__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
,filters);
}
})())){
var temp__5804__auto___22186__$2 = malli.instrument._find_var(n,s_22184);
if(cljs.core.truth_(temp__5804__auto___22186__$2)){
var v_22187 = temp__5804__auto___22186__$2;
var G__21911_22192 = mode;
var G__21911_22193__$1 = (((G__21911_22192 instanceof cljs.core.Keyword))?G__21911_22192.fqn:null);
switch (G__21911_22193__$1) {
case "instrument":
var original_fn_22195 = (function (){var or__5002__auto__ = malli.instrument._original(v_22187);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return v_22187;
}
})();
var dgen_22196 = (function (){var $ = cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scope","scope",-439358418),new cljs.core.Keyword(null,"report","report",1394055010),new cljs.core.Keyword(null,"gen","gen",142575302)], null));
var $__$1 = (function (){var G__21912 = $;
if(cljs.core.truth_(report)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__21912,new cljs.core.Keyword(null,"report","report",1394055010),((function (seq__21660_22117,chunk__21661_22118,count__21662_22119,i__21663_22120,seq__21659,chunk__21664,count__21665,i__21666,G__21912,$,original_fn_22195,G__21911_22192,G__21911_22193__$1,v_22187,temp__5804__auto___22186__$2,vec__21908_22183,s_22184,d_22185__$1,seq__21660_22176__$1,temp__5804__auto___22174__$1,vec__21860,n,d,seq__21659__$1,temp__5804__auto__,map__21658,map__21658__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (r){
return ((function (seq__21660_22117,chunk__21661_22118,count__21662_22119,i__21663_22120,seq__21659,chunk__21664,count__21665,i__21666,G__21912,$,original_fn_22195,G__21911_22192,G__21911_22193__$1,v_22187,temp__5804__auto___22186__$2,vec__21908_22183,s_22184,d_22185__$1,seq__21660_22176__$1,temp__5804__auto___22174__$1,vec__21860,n,d,seq__21659__$1,temp__5804__auto__,map__21658,map__21658__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (t,data__$1){
var G__21913 = t;
var G__21914 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s_22184)));
return (r.cljs$core$IFn$_invoke$arity$2 ? r.cljs$core$IFn$_invoke$arity$2(G__21913,G__21914) : r.call(null, G__21913,G__21914));
});
;})(seq__21660_22117,chunk__21661_22118,count__21662_22119,i__21663_22120,seq__21659,chunk__21664,count__21665,i__21666,G__21912,$,original_fn_22195,G__21911_22192,G__21911_22193__$1,v_22187,temp__5804__auto___22186__$2,vec__21908_22183,s_22184,d_22185__$1,seq__21660_22176__$1,temp__5804__auto___22174__$1,vec__21860,n,d,seq__21659__$1,temp__5804__auto__,map__21658,map__21658__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
});})(seq__21660_22117,chunk__21661_22118,count__21662_22119,i__21663_22120,seq__21659,chunk__21664,count__21665,i__21666,G__21912,$,original_fn_22195,G__21911_22192,G__21911_22193__$1,v_22187,temp__5804__auto___22186__$2,vec__21908_22183,s_22184,d_22185__$1,seq__21660_22176__$1,temp__5804__auto___22174__$1,vec__21860,n,d,seq__21659__$1,temp__5804__auto__,map__21658,map__21658__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
);
} else {
return G__21912;
}
})();
var $__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$__$1,d_22185__$1], 0));
if(cljs.core.truth_((function (){var and__5000__auto__ = gen;
if(cljs.core.truth_(and__5000__auto__)){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_22185__$1) === true;
} else {
return and__5000__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($__$2,new cljs.core.Keyword(null,"gen","gen",142575302),gen);
} else {
if(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_22185__$1) === true){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($__$2,new cljs.core.Keyword(null,"gen","gen",142575302));
} else {
return $__$2;

}
}
})();
if(cljs.core.truth_((function (){var and__5000__auto__ = original_fn_22195;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not((function (){var and__5000__auto____$1 = skip_instrumented_QMARK_;
if(cljs.core.truth_(and__5000__auto____$1)){
return malli.instrument._instrumented_QMARK_(v_22187);
} else {
return and__5000__auto____$1;
}
})());
} else {
return and__5000__auto__;
}
})())){
malli.instrument._replace_fn(original_fn_22195,n,s_22184,dgen_22196);
} else {
}

break;
case "unstrument":
if(malli.instrument._instrumented_QMARK_(v_22187)){
var original_fn_22199 = (function (){var or__5002__auto__ = malli.instrument._original(v_22187);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return v_22187;
}
})();
if(cljs.core.truth_(malli.instrument._pure_variadic_QMARK_(original_fn_22199))){
var accessor_22200 = "cljs$core$IFn$_invoke$arity$variadic";
var variadic_fn_22201 = malli.instrument.goog$module$goog$object.get(v_22187,accessor_22200);
var orig_variadic_fn_22202 = malli.instrument.goog$module$goog$object.get(variadic_fn_22201,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_22199,accessor_22200,orig_variadic_fn_22202);
} else {
if(cljs.core.truth_(malli.instrument._max_fixed_arity(original_fn_22199))){
var seq__21915_22203 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.range.cljs$core$IFn$_invoke$arity$1((20)),"variadic"));
var chunk__21918_22204 = null;
var count__21919_22205 = (0);
var i__21920_22206 = (0);
while(true){
if((i__21920_22206 < count__21919_22205)){
var arity_22207 = chunk__21918_22204.cljs$core$IIndexed$_nth$arity$2(null, i__21920_22206);
var accessor_22208 = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_22207)].join('');
var arity_fn_22209 = malli.instrument.goog$module$goog$object.get(original_fn_22199,accessor_22208);
if(cljs.core.truth_(arity_fn_22209)){
var orig_22210 = malli.instrument.goog$module$goog$object.get(arity_fn_22209,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_22199,accessor_22208,orig_22210);


var G__22211 = seq__21915_22203;
var G__22212 = chunk__21918_22204;
var G__22213 = count__21919_22205;
var G__22214 = (i__21920_22206 + (1));
seq__21915_22203 = G__22211;
chunk__21918_22204 = G__22212;
count__21919_22205 = G__22213;
i__21920_22206 = G__22214;
continue;
} else {
var G__22215 = seq__21915_22203;
var G__22216 = chunk__21918_22204;
var G__22217 = count__21919_22205;
var G__22218 = (i__21920_22206 + (1));
seq__21915_22203 = G__22215;
chunk__21918_22204 = G__22216;
count__21919_22205 = G__22217;
i__21920_22206 = G__22218;
continue;
}
} else {
var temp__5804__auto___22219__$3 = cljs.core.seq(seq__21915_22203);
if(temp__5804__auto___22219__$3){
var seq__21915_22220__$1 = temp__5804__auto___22219__$3;
if(cljs.core.chunked_seq_QMARK_(seq__21915_22220__$1)){
var c__5525__auto___22221 = cljs.core.chunk_first(seq__21915_22220__$1);
var G__22222 = cljs.core.chunk_rest(seq__21915_22220__$1);
var G__22223 = c__5525__auto___22221;
var G__22224 = cljs.core.count(c__5525__auto___22221);
var G__22225 = (0);
seq__21915_22203 = G__22222;
chunk__21918_22204 = G__22223;
count__21919_22205 = G__22224;
i__21920_22206 = G__22225;
continue;
} else {
var arity_22226 = cljs.core.first(seq__21915_22220__$1);
var accessor_22227 = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_22226)].join('');
var arity_fn_22228 = malli.instrument.goog$module$goog$object.get(original_fn_22199,accessor_22227);
if(cljs.core.truth_(arity_fn_22228)){
var orig_22229 = malli.instrument.goog$module$goog$object.get(arity_fn_22228,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_22199,accessor_22227,orig_22229);


var G__22232 = cljs.core.next(seq__21915_22220__$1);
var G__22233 = null;
var G__22234 = (0);
var G__22235 = (0);
seq__21915_22203 = G__22232;
chunk__21918_22204 = G__22233;
count__21919_22205 = G__22234;
i__21920_22206 = G__22235;
continue;
} else {
var G__22236 = cljs.core.next(seq__21915_22220__$1);
var G__22237 = null;
var G__22238 = (0);
var G__22239 = (0);
seq__21915_22203 = G__22236;
chunk__21918_22204 = G__22237;
count__21919_22205 = G__22238;
i__21920_22206 = G__22239;
continue;
}
}
} else {
}
}
break;
}
} else {
malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),cljs.core.munge(cljs.core.name(s_22184)),original_fn_22199);

}
}
} else {
}

break;
default:
(mode.cljs$core$IFn$_invoke$arity$2 ? mode.cljs$core$IFn$_invoke$arity$2(v_22187,d_22185__$1) : mode.call(null, v_22187,d_22185__$1));

}
} else {
}
} else {
}


var G__22240 = cljs.core.next(seq__21660_22176__$1);
var G__22241 = null;
var G__22242 = (0);
var G__22243 = (0);
seq__21660_22117 = G__22240;
chunk__21661_22118 = G__22241;
count__21662_22119 = G__22242;
i__21663_22120 = G__22243;
continue;
}
} else {
}
}
break;
}

var G__22244 = cljs.core.next(seq__21659__$1);
var G__22245 = null;
var G__22246 = (0);
var G__22247 = (0);
seq__21659 = G__22244;
chunk__21664 = G__22245;
count__21665 = G__22246;
i__21666 = G__22247;
continue;
}
} else {
return null;
}
}
break;
}
}));

(malli.instrument._strument_BANG_.cljs$lang$maxFixedArity = 1);

/**
 * Checks all registered function schemas using generative testing.
 * Returns nil or a map of symbol -> explanation in case of errors.
 */
malli.instrument.check = (function malli$instrument$check(var_args){
var G__21924 = arguments.length;
switch (G__21924) {
case 0:
return malli.instrument.check.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.instrument.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.instrument.check.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.instrument.check.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.instrument.check.cljs$core$IFn$_invoke$arity$1 = (function (options){
var res_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"mode","mode",654403691),(function (v,p__21925){
var map__21926 = p__21925;
var map__21926__$1 = cljs.core.__destructure_map(map__21926);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21926__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21926__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21926__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var G__21927 = malli.generator.check.cljs$core$IFn$_invoke$arity$2(schema,malli.instrument._original(v));
if((G__21927 == null)){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(res_STAR_,cljs.core.assoc,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,name),G__21927);
}
})));

return cljs.core.not_empty(cljs.core.deref(res_STAR_));
}));

(malli.instrument.check.cljs$lang$maxFixedArity = 1);

/**
 * Applies instrumentation for a filtered set of function Vars (e.g. `defn`s).
 * See [[malli.core/-instrument]] for possible options.
 */
malli.instrument.instrument_BANG_ = (function malli$instrument$instrument_BANG_(var_args){
var G__21929 = arguments.length;
switch (G__21929) {
case 0:
return malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (options){
return malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"instrument","instrument",-960698844)));
}));

(malli.instrument.instrument_BANG_.cljs$lang$maxFixedArity = 1);

/**
 * Removes instrumentation from a filtered set of function Vars (e.g. `defn`s).
 * See [[malli.core/-instrument]] for possible options.
 */
malli.instrument.unstrument_BANG_ = (function malli$instrument$unstrument_BANG_(var_args){
var G__21931 = arguments.length;
switch (G__21931) {
case 0:
return malli.instrument.unstrument_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.instrument.unstrument_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.instrument.unstrument_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.instrument.unstrument_BANG_.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.instrument.unstrument_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (options){
return malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"unstrument","unstrument",-312041116)));
}));

(malli.instrument.unstrument_BANG_.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=malli.instrument.js.map
