goog.provide('speedball.core');
malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$0();
malli.core.function_schemas.cljs$core$IFn$_invoke$arity$0();
speedball.core.Index = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)], null);
speedball.core.Position = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),speedball.core.Index,speedball.core.Index], null);
speedball.core.Positions = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1913524883),speedball.core.Position], null);
speedball.core.Positionable = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),speedball.core.Position], null)], null);
speedball.core.directions = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"west","west",708776677),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"south","south",1586796293),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)], null);
speedball.core.direction__GT_angle = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"south","south",1586796293),(0),new cljs.core.Keyword(null,"southeast","southeast",565965044),(45),new cljs.core.Keyword(null,"east","east",1189821678),(90),new cljs.core.Keyword(null,"northeast","northeast",-393120937),(135),new cljs.core.Keyword(null,"north","north",651323902),(180),new cljs.core.Keyword(null,"northwest","northwest",121027401),(225),new cljs.core.Keyword(null,"west","west",708776677),(270),new cljs.core.Keyword(null,"southwest","southwest",-212094911),(315)], null);
/**
 * Any component is less than the other
 */
speedball.core.vectors_any_lt = (function speedball$core$vectors_any_lt(p__26288,p__26289){
var vec__26290 = p__26288;
var a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26290,(0),null);
var a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26290,(1),null);
var vec__26293 = p__26289;
var b1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26293,(0),null);
var b2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26293,(1),null);
return (((a1 < a2)) || ((b1 < b2)));
});
speedball.core.add_vectors = (function speedball$core$add_vectors(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26312 = arguments.length;
var i__5727__auto___26313 = (0);
while(true){
if((i__5727__auto___26313 < len__5726__auto___26312)){
args__5732__auto__.push((arguments[i__5727__auto___26313]));

var G__26314 = (i__5727__auto___26313 + (1));
i__5727__auto___26313 = G__26314;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return speedball.core.add_vectors.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(speedball.core.add_vectors.cljs$core$IFn$_invoke$arity$variadic = (function (vecs){
return cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._PLUS_,vecs));
}));

(speedball.core.add_vectors.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(speedball.core.add_vectors.cljs$lang$applyTo = (function (seq26296){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26296));
}));

speedball.core.subtract_vectors = (function speedball$core$subtract_vectors(vec1,vec2){
return cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vec1,vec2], null)));
});
speedball.core.max_of_vector_elements = (function speedball$core$max_of_vector_elements(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26315 = arguments.length;
var i__5727__auto___26316 = (0);
while(true){
if((i__5727__auto___26316 < len__5726__auto___26315)){
args__5732__auto__.push((arguments[i__5727__auto___26316]));

var G__26317 = (i__5727__auto___26316 + (1));
i__5727__auto___26316 = G__26317;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return speedball.core.max_of_vector_elements.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(speedball.core.max_of_vector_elements.cljs$core$IFn$_invoke$arity$variadic = (function (vectors){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv,cljs.core.max,vectors);
}));

(speedball.core.max_of_vector_elements.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(speedball.core.max_of_vector_elements.cljs$lang$applyTo = (function (seq26297){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26297));
}));

speedball.core.min_of_vector_elements = (function speedball$core$min_of_vector_elements(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26318 = arguments.length;
var i__5727__auto___26319 = (0);
while(true){
if((i__5727__auto___26319 < len__5726__auto___26318)){
args__5732__auto__.push((arguments[i__5727__auto___26319]));

var G__26320 = (i__5727__auto___26319 + (1));
i__5727__auto___26319 = G__26320;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return speedball.core.min_of_vector_elements.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(speedball.core.min_of_vector_elements.cljs$core$IFn$_invoke$arity$variadic = (function (vectors){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv,cljs.core.min,vectors);
}));

(speedball.core.min_of_vector_elements.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(speedball.core.min_of_vector_elements.cljs$lang$applyTo = (function (seq26298){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26298));
}));

/**
 * Calculates the straight-line (Euclidean) distance between two 2D vectors.
 */
speedball.core.distance = (function speedball$core$distance(p__26299,p__26300){
var vec__26301 = p__26299;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26301,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26301,(1),null);
var vec__26304 = p__26300;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26304,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26304,(1),null);
return Math.sqrt((Math.pow((x2 - x1),(2)) + Math.pow((y2 - y1),(2))));
});
/**
 * Produces a map from position to item in the 2d vector
 */
speedball.core.map_2d_with_positions = (function speedball$core$map_2d_with_positions(two_d_like){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (accum,p__26307){
var vec__26308 = p__26307;
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26308,(0),null);
var texture = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26308,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(accum,pos,texture);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (row_idx,row){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (col_idx,texture_tile){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_idx,col_idx], null),texture_tile], null);
}),row);
}),two_d_like)));
});
try{var values__9973__auto___26321 = (new cljs.core.List(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.Keyword(null,"d","d",1972142424)]),(new cljs.core.List(null,speedball.core.map_2d_with_positions(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"d","d",1972142424)], null)], null)),null,(1),null)),(2),null));
var result__9974__auto___26322 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9973__auto___26321);
if(cljs.core.truth_(result__9974__auto___26322)){
cljs.test.report.call(null, cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["speedball/core.cljs",44,new cljs.core.Keyword(null,"pass","pass",1574159993),7,75,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.Keyword(null,"d","d",1972142424)], null),cljs.core.list(new cljs.core.Symbol(null,"map-2d-with-positions","map-2d-with-positions",855858551,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"d","d",1972142424)], null)], null))),78,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9973__auto___26321),null]));
} else {
cljs.test.report.call(null, cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["speedball/core.cljs",44,new cljs.core.Keyword(null,"fail","fail",1706214930),7,75,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.Keyword(null,"d","d",1972142424)], null),cljs.core.list(new cljs.core.Symbol(null,"map-2d-with-positions","map-2d-with-positions",855858551,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"d","d",1972142424)], null)], null))),78,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9973__auto___26321),null,(1),null)),(2),null)),null]));
}

}catch (e26311){var t__10010__auto___26323 = e26311;
cljs.test.report.call(null, cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["speedball/core.cljs",44,new cljs.core.Keyword(null,"error","error",-978969032),7,75,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.Keyword(null,"d","d",1972142424)], null),cljs.core.list(new cljs.core.Symbol(null,"map-2d-with-positions","map-2d-with-positions",855858551,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"d","d",1972142424)], null)], null))),78,t__10010__auto___26323,null]));
}speedball.core.position = (function speedball$core$position(thing){
return new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(thing);
});
speedball.core.Direction = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"south","south",1586796293),new cljs.core.Keyword(null,"west","west",708776677),new cljs.core.Keyword(null,"northeast","northeast",-393120937),new cljs.core.Keyword(null,"northwest","northwest",121027401),new cljs.core.Keyword(null,"southeast","southeast",565965044),new cljs.core.Keyword(null,"southwest","southwest",-212094911)], null);

//# sourceMappingURL=speedball.core.js.map
