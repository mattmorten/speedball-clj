goog.provide('speedball.ai');
malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$0();
malli.core.function_schemas.cljs$core$IFn$_invoke$arity$0();
speedball.ai.RandomWalkIntention = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"random-walk","random-walk",1361904468)], null)], null)], null);
speedball.ai.new_random_walk_intention = (function speedball$ai$new_random_walk_intention(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"random-walk","random-walk",1361904468)], null);
});
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"speedball.ai","speedball.ai",184982236,null),new cljs.core.Symbol(null,"new-random-walk-intention","new-random-walk-intention",-32427339,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207)], null),speedball.ai.RandomWalkIntention], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"speedball/ai.cljs",new cljs.core.Keyword(null,"line","line",212345235),21,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"end-line","end-line",1837326455),21,new cljs.core.Keyword(null,"end-column","end-column",1425389514),33], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

speedball.ai.produce_random_walk_action = (function speedball$ai$produce_random_walk_action(game,player_n){
var random = cljs.core.rand_int((4));
var direction = (function (){var G__26404 = random;
switch (G__26404) {
case (0):
return new cljs.core.Keyword(null,"north","north",651323902);

break;
case (1):
return new cljs.core.Keyword(null,"east","east",1189821678);

break;
case (2):
return new cljs.core.Keyword(null,"south","south",1586796293);

break;
case (3):
return new cljs.core.Keyword(null,"west","west",708776677);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26404)].join('')));

}
})();
return speedball.game.new_move_player_action(player_n,direction);
});
speedball.ai.produce_action = (function speedball$ai$produce_action(intention,game,player_n){
var G__26407 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(intention);
var G__26407__$1 = (((G__26407 instanceof cljs.core.Keyword))?G__26407.fqn:null);
switch (G__26407__$1) {
case "random-walk":
return speedball.ai.produce_random_walk_action(game,player_n);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26407__$1)].join('')));

}
});

//# sourceMappingURL=speedball.ai.js.map
