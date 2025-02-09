goog.provide('speedballscript.frontend.app');
console.log("yo");
if((typeof speedballscript !== 'undefined') && (typeof speedballscript.frontend !== 'undefined') && (typeof speedballscript.frontend.app !== 'undefined') && (typeof speedballscript.frontend.app.counter !== 'undefined')){
} else {
speedballscript.frontend.app.counter = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(speedball.renderer.renderer.new_game_state());
}
speedballscript.frontend.app.rendered_game__GT_div = (function speedballscript$frontend$app$rendered_game__GT_div(game){
return cljs.core.vec(cljs.core.cons(new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__5480__auto__ = (function speedballscript$frontend$app$rendered_game__GT_div_$_iter__18328(s__18329){
return (new cljs.core.LazySeq(null,(function (){
var s__18329__$1 = s__18329;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18329__$1);
if(temp__5804__auto__){
var s__18329__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18329__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__18329__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__18331 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__18330 = (0);
while(true){
if((i__18330 < size__5479__auto__)){
var row = cljs.core._nth(c__5478__auto__,i__18330);
cljs.core.chunk_append(b__18331,cljs.core.vec(cljs.core.cons(new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__5480__auto__ = ((function (i__18330,row,c__5478__auto__,size__5479__auto__,b__18331,s__18329__$2,temp__5804__auto__){
return (function speedballscript$frontend$app$rendered_game__GT_div_$_iter__18328_$_iter__18333(s__18334){
return (new cljs.core.LazySeq(null,((function (i__18330,row,c__5478__auto__,size__5479__auto__,b__18331,s__18329__$2,temp__5804__auto__){
return (function (){
var s__18334__$1 = s__18334;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__18334__$1);
if(temp__5804__auto____$1){
var s__18334__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18334__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__18334__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__18336 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__18335 = (0);
while(true){
if((i__18335 < size__5479__auto____$1)){
var col = cljs.core._nth(c__5478__auto____$1,i__18335);
cljs.core.chunk_append(b__18336,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.char","span.char",-1823074986),col], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())], null)));

var G__18344 = (i__18335 + (1));
i__18335 = G__18344;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18336),speedballscript$frontend$app$rendered_game__GT_div_$_iter__18328_$_iter__18333(cljs.core.chunk_rest(s__18334__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18336),null);
}
} else {
var col = cljs.core.first(s__18334__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.char","span.char",-1823074986),col], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())], null)),speedballscript$frontend$app$rendered_game__GT_div_$_iter__18328_$_iter__18333(cljs.core.rest(s__18334__$2)));
}
} else {
return null;
}
break;
}
});})(i__18330,row,c__5478__auto__,size__5479__auto__,b__18331,s__18329__$2,temp__5804__auto__))
,null,null));
});})(i__18330,row,c__5478__auto__,size__5479__auto__,b__18331,s__18329__$2,temp__5804__auto__))
;
return iter__5480__auto__(row);
})())));

var G__18345 = (i__18330 + (1));
i__18330 = G__18345;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18331),speedballscript$frontend$app$rendered_game__GT_div_$_iter__18328(cljs.core.chunk_rest(s__18329__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18331),null);
}
} else {
var row = cljs.core.first(s__18329__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__5480__auto__ = ((function (row,s__18329__$2,temp__5804__auto__){
return (function speedballscript$frontend$app$rendered_game__GT_div_$_iter__18328_$_iter__18337(s__18338){
return (new cljs.core.LazySeq(null,(function (){
var s__18338__$1 = s__18338;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__18338__$1);
if(temp__5804__auto____$1){
var s__18338__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18338__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__18338__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__18340 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__18339 = (0);
while(true){
if((i__18339 < size__5479__auto__)){
var col = cljs.core._nth(c__5478__auto__,i__18339);
cljs.core.chunk_append(b__18340,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.char","span.char",-1823074986),col], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())], null)));

var G__18346 = (i__18339 + (1));
i__18339 = G__18346;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18340),speedballscript$frontend$app$rendered_game__GT_div_$_iter__18328_$_iter__18337(cljs.core.chunk_rest(s__18338__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18340),null);
}
} else {
var col = cljs.core.first(s__18338__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.char","span.char",-1823074986),col], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())], null)),speedballscript$frontend$app$rendered_game__GT_div_$_iter__18328_$_iter__18337(cljs.core.rest(s__18338__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__18329__$2,temp__5804__auto__))
;
return iter__5480__auto__(row);
})())),speedballscript$frontend$app$rendered_game__GT_div_$_iter__18328(cljs.core.rest(s__18329__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(game);
})()));
});
speedballscript.frontend.app.handle_keypress = (function speedballscript$frontend$app$handle_keypress(event){
var key = event.key;
console.log("Pressed ",key);

if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([key]),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["w","a","s","d","f","g","h","e","c"], null)))){
var game_state = speedball.renderer.renderer.run_game.cljs$core$IFn$_invoke$arity$2(speedballscript.frontend.app.counter,key);
return cljs.core.reset_BANG_(speedballscript.frontend.app.counter,game_state);
} else {
return null;
}
});
speedballscript.frontend.app.app = (function speedballscript$frontend$app$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var vec__18341 = cljs.core.deref(speedballscript.frontend.app.counter);
var game = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18341,(0),null);
var camera_mount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18341,(1),null);
var controller = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18341,(2),null);
var ai_controllers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18341,(3),null);
return speedballscript.frontend.app.rendered_game__GT_div(speedball.renderer.renderer.render_board(game));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(speedballscript.frontend.app.counter,cljs.core.inc);
})], null),"+1"], null)], null);
});
speedballscript.frontend.app.init = (function speedballscript$frontend$app$init(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Speedball 2"], 0));

document.addEventListener("keydown",speedballscript.frontend.app.handle_keypress);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [speedballscript.frontend.app.app], null),document.getElementById("root"));
});

//# sourceMappingURL=speedballscript.frontend.app.js.map
