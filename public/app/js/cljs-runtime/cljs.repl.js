goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19479){
var map__19497 = p__19479;
var map__19497__$1 = cljs.core.__destructure_map(map__19497);
var m = map__19497__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19497__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19497__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19544_19867 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19545_19868 = null;
var count__19546_19869 = (0);
var i__19547_19870 = (0);
while(true){
if((i__19547_19870 < count__19546_19869)){
var f_19871 = chunk__19545_19868.cljs$core$IIndexed$_nth$arity$2(null, i__19547_19870);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19871], 0));


var G__19872 = seq__19544_19867;
var G__19873 = chunk__19545_19868;
var G__19874 = count__19546_19869;
var G__19875 = (i__19547_19870 + (1));
seq__19544_19867 = G__19872;
chunk__19545_19868 = G__19873;
count__19546_19869 = G__19874;
i__19547_19870 = G__19875;
continue;
} else {
var temp__5804__auto___19876 = cljs.core.seq(seq__19544_19867);
if(temp__5804__auto___19876){
var seq__19544_19877__$1 = temp__5804__auto___19876;
if(cljs.core.chunked_seq_QMARK_(seq__19544_19877__$1)){
var c__5525__auto___19878 = cljs.core.chunk_first(seq__19544_19877__$1);
var G__19879 = cljs.core.chunk_rest(seq__19544_19877__$1);
var G__19880 = c__5525__auto___19878;
var G__19881 = cljs.core.count(c__5525__auto___19878);
var G__19882 = (0);
seq__19544_19867 = G__19879;
chunk__19545_19868 = G__19880;
count__19546_19869 = G__19881;
i__19547_19870 = G__19882;
continue;
} else {
var f_19883 = cljs.core.first(seq__19544_19877__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19883], 0));


var G__19884 = cljs.core.next(seq__19544_19877__$1);
var G__19885 = null;
var G__19886 = (0);
var G__19887 = (0);
seq__19544_19867 = G__19884;
chunk__19545_19868 = G__19885;
count__19546_19869 = G__19886;
i__19547_19870 = G__19887;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19888 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19888], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19888)))?cljs.core.second(arglists_19888):arglists_19888)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19640_19889 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19641_19890 = null;
var count__19642_19891 = (0);
var i__19643_19892 = (0);
while(true){
if((i__19643_19892 < count__19642_19891)){
var vec__19686_19893 = chunk__19641_19890.cljs$core$IIndexed$_nth$arity$2(null, i__19643_19892);
var name_19894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19686_19893,(0),null);
var map__19689_19895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19686_19893,(1),null);
var map__19689_19896__$1 = cljs.core.__destructure_map(map__19689_19895);
var doc_19897 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19689_19896__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19689_19896__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19894], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19898], 0));

if(cljs.core.truth_(doc_19897)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19897], 0));
} else {
}


var G__19899 = seq__19640_19889;
var G__19900 = chunk__19641_19890;
var G__19901 = count__19642_19891;
var G__19902 = (i__19643_19892 + (1));
seq__19640_19889 = G__19899;
chunk__19641_19890 = G__19900;
count__19642_19891 = G__19901;
i__19643_19892 = G__19902;
continue;
} else {
var temp__5804__auto___19903 = cljs.core.seq(seq__19640_19889);
if(temp__5804__auto___19903){
var seq__19640_19904__$1 = temp__5804__auto___19903;
if(cljs.core.chunked_seq_QMARK_(seq__19640_19904__$1)){
var c__5525__auto___19905 = cljs.core.chunk_first(seq__19640_19904__$1);
var G__19906 = cljs.core.chunk_rest(seq__19640_19904__$1);
var G__19907 = c__5525__auto___19905;
var G__19908 = cljs.core.count(c__5525__auto___19905);
var G__19909 = (0);
seq__19640_19889 = G__19906;
chunk__19641_19890 = G__19907;
count__19642_19891 = G__19908;
i__19643_19892 = G__19909;
continue;
} else {
var vec__19695_19910 = cljs.core.first(seq__19640_19904__$1);
var name_19911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19695_19910,(0),null);
var map__19698_19912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19695_19910,(1),null);
var map__19698_19913__$1 = cljs.core.__destructure_map(map__19698_19912);
var doc_19914 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19698_19913__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19915 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19698_19913__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19911], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19915], 0));

if(cljs.core.truth_(doc_19914)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19914], 0));
} else {
}


var G__19916 = cljs.core.next(seq__19640_19904__$1);
var G__19917 = null;
var G__19918 = (0);
var G__19919 = (0);
seq__19640_19889 = G__19916;
chunk__19641_19890 = G__19917;
count__19642_19891 = G__19918;
i__19643_19892 = G__19919;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19700 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19701 = null;
var count__19702 = (0);
var i__19703 = (0);
while(true){
if((i__19703 < count__19702)){
var role = chunk__19701.cljs$core$IIndexed$_nth$arity$2(null, i__19703);
var temp__5804__auto___19920__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19920__$1)){
var spec_19921 = temp__5804__auto___19920__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19921)], 0));
} else {
}


var G__19922 = seq__19700;
var G__19923 = chunk__19701;
var G__19924 = count__19702;
var G__19925 = (i__19703 + (1));
seq__19700 = G__19922;
chunk__19701 = G__19923;
count__19702 = G__19924;
i__19703 = G__19925;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19700);
if(temp__5804__auto____$1){
var seq__19700__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19700__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19700__$1);
var G__19926 = cljs.core.chunk_rest(seq__19700__$1);
var G__19927 = c__5525__auto__;
var G__19928 = cljs.core.count(c__5525__auto__);
var G__19929 = (0);
seq__19700 = G__19926;
chunk__19701 = G__19927;
count__19702 = G__19928;
i__19703 = G__19929;
continue;
} else {
var role = cljs.core.first(seq__19700__$1);
var temp__5804__auto___19930__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19930__$2)){
var spec_19931 = temp__5804__auto___19930__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19931)], 0));
} else {
}


var G__19932 = cljs.core.next(seq__19700__$1);
var G__19933 = null;
var G__19934 = (0);
var G__19935 = (0);
seq__19700 = G__19932;
chunk__19701 = G__19933;
count__19702 = G__19934;
i__19703 = G__19935;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19726 = datafied_throwable;
var map__19726__$1 = cljs.core.__destructure_map(map__19726);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19726__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19726__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19726__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19727 = cljs.core.last(via);
var map__19727__$1 = cljs.core.__destructure_map(map__19727);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19727__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19727__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19727__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19728 = data;
var map__19728__$1 = cljs.core.__destructure_map(map__19728);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19728__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19728__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19728__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19729 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19729__$1 = cljs.core.__destructure_map(map__19729);
var top_data = map__19729__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19729__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19733 = phase;
var G__19733__$1 = (((G__19733 instanceof cljs.core.Keyword))?G__19733.fqn:null);
switch (G__19733__$1) {
case "read-source":
var map__19738 = data;
var map__19738__$1 = cljs.core.__destructure_map(map__19738);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19738__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19738__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19740 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19740__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19740,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19740);
var G__19740__$2 = (cljs.core.truth_((function (){var fexpr__19741 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19741.cljs$core$IFn$_invoke$arity$1 ? fexpr__19741.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19741.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19740__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19740__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19740__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19740__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19744 = top_data;
var G__19744__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19744,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19744);
var G__19744__$2 = (cljs.core.truth_((function (){var fexpr__19745 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19745.cljs$core$IFn$_invoke$arity$1 ? fexpr__19745.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19745.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19744__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19744__$1);
var G__19744__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19744__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19744__$2);
var G__19744__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19744__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19744__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19744__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19744__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19752 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19752,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19752,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19752,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19752,(3),null);
var G__19755 = top_data;
var G__19755__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19755,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19755);
var G__19755__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19755__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19755__$1);
var G__19755__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19755__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19755__$2);
var G__19755__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19755__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19755__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19755__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19755__$4;
}

break;
case "execution":
var vec__19767 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19767,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19767,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19767,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19767,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19720_SHARP_){
var or__5002__auto__ = (p1__19720_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__19775 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19775.cljs$core$IFn$_invoke$arity$1 ? fexpr__19775.cljs$core$IFn$_invoke$arity$1(p1__19720_SHARP_) : fexpr__19775.call(null, p1__19720_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__19776 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19776__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19776,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19776);
var G__19776__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19776__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19776__$1);
var G__19776__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19776__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19776__$2);
var G__19776__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19776__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19776__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19776__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19776__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19733__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19796){
var map__19798 = p__19796;
var map__19798__$1 = cljs.core.__destructure_map(map__19798);
var triage_data = map__19798__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19798__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19798__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19798__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19798__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19798__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19798__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19798__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19798__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19802 = phase;
var G__19802__$1 = (((G__19802 instanceof cljs.core.Keyword))?G__19802.fqn:null);
switch (G__19802__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19803 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19804 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19805 = loc;
var G__19806 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19807_19950 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19808_19951 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19809_19952 = true;
var _STAR_print_fn_STAR__temp_val__19810_19953 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19809_19952);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19810_19953);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19793_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19793_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19808_19951);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19807_19950);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19803,G__19804,G__19805,G__19806) : format.call(null, G__19803,G__19804,G__19805,G__19806));

break;
case "macroexpansion":
var G__19817 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19818 = cause_type;
var G__19819 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19820 = loc;
var G__19821 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19817,G__19818,G__19819,G__19820,G__19821) : format.call(null, G__19817,G__19818,G__19819,G__19820,G__19821));

break;
case "compile-syntax-check":
var G__19822 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19823 = cause_type;
var G__19824 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19825 = loc;
var G__19826 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19822,G__19823,G__19824,G__19825,G__19826) : format.call(null, G__19822,G__19823,G__19824,G__19825,G__19826));

break;
case "compilation":
var G__19827 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19828 = cause_type;
var G__19829 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19830 = loc;
var G__19831 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19827,G__19828,G__19829,G__19830,G__19831) : format.call(null, G__19827,G__19828,G__19829,G__19830,G__19831));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19832 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19833 = symbol;
var G__19834 = loc;
var G__19835 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19837_19954 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19838_19955 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19839_19956 = true;
var _STAR_print_fn_STAR__temp_val__19840_19957 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19839_19956);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19840_19957);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19795_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19795_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19838_19955);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19837_19954);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19832,G__19833,G__19834,G__19835) : format.call(null, G__19832,G__19833,G__19834,G__19835));
} else {
var G__19841 = "Execution error%s at %s(%s).\n%s\n";
var G__19842 = cause_type;
var G__19843 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19844 = loc;
var G__19845 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19841,G__19842,G__19843,G__19844,G__19845) : format.call(null, G__19841,G__19842,G__19843,G__19844,G__19845));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19802__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
