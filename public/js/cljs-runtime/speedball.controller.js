goog.provide('speedball.controller');
malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$0();
malli.core.function_schemas.cljs$core$IFn$_invoke$arity$0();
speedball.controller.Controller = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team-n","team-n",-1507643197),speedball.core.Index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"who","who",-235935040),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-teams","total-teams",1794297644),speedball.core.Index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-within-team-n","player-within-team-n",-215285399),speedball.core.Index], null)], null);
speedball.controller.new_human_controller = (function speedball$controller$new_human_controller(){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"team-n","team-n",-1507643197),(0),new cljs.core.Keyword(null,"total-teams","total-teams",1794297644),(2),new cljs.core.Keyword(null,"who","who",-235935040),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"player-within-team-n","player-within-team-n",-215285399),(0),new cljs.core.Keyword(null,"intention","intention",-289345027),null], null);
});
speedball.controller.player_n = (function speedball$controller$player_n(controller,game){
return speedball.game.team_player__GT_player_n(game,new cljs.core.Keyword(null,"team-n","team-n",-1507643197).cljs$core$IFn$_invoke$arity$1(controller),new cljs.core.Keyword(null,"player-within-team-n","player-within-team-n",-215285399).cljs$core$IFn$_invoke$arity$1(controller));
});
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"speedball.controller","speedball.controller",1266006689,null),new cljs.core.Symbol(null,"new-human-controller","new-human-controller",-1430682644,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207)], null),speedball.controller.Controller], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"speedball/controller.cljs",new cljs.core.Keyword(null,"line","line",212345235),37,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"end-line","end-line",1837326455),37,new cljs.core.Keyword(null,"end-column","end-column",1425389514),28], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

speedball.controller.new_ai_controller = (function speedball$controller$new_ai_controller(game,player_n){
var map__18290 = speedball.game.player_n__GT_team_player(game,player_n);
var map__18290__$1 = cljs.core.__destructure_map(map__18290);
var player_within_team = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18290__$1,new cljs.core.Keyword(null,"player-within-team","player-within-team",-884430425));
var team_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18290__$1,new cljs.core.Keyword(null,"team-n","team-n",-1507643197));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"team-n","team-n",-1507643197),team_n,new cljs.core.Keyword(null,"total-teams","total-teams",1794297644),(2),new cljs.core.Keyword(null,"who","who",-235935040),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"player-within-team-n","player-within-team-n",-215285399),player_within_team,new cljs.core.Keyword(null,"intention","intention",-289345027),speedball.ai.new_random_walk_intention()], null);
});
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"speedball.controller","speedball.controller",1266006689,null),new cljs.core.Symbol(null,"new-ai-controller","new-ai-controller",1027613246,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),speedball.game.Game,speedball.core.Index], null),speedball.controller.Controller], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"speedball/controller.cljs",new cljs.core.Keyword(null,"line","line",212345235),48,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"end-line","end-line",1837326455),48,new cljs.core.Keyword(null,"end-column","end-column",1425389514),25], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

speedball.controller.closest_player_n_to_ball_on_controllers_team = (function speedball$controller$closest_player_n_to_ball_on_controllers_team(controller,game){
var ball_position = speedball.game.ball_position(game);
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (current_closest,p__18291){
var vec__18292 = p__18291;
var player_n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18292,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18292,(1),null);
var vec__18295 = current_closest;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18295,(0),null);
var his_distance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18295,(1),null);
var map__18298 = speedball.game.player_n__GT_team_player(game,player_n);
var map__18298__$1 = cljs.core.__destructure_map(map__18298);
var team_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18298__$1,new cljs.core.Keyword(null,"team-n","team-n",-1507643197));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(team_n,new cljs.core.Keyword(null,"team-n","team-n",-1507643197).cljs$core$IFn$_invoke$arity$1(controller))){
var player_position = speedball.game.player_position(game,player_n);
var distance = speedball.core.distance(ball_position,player_position);
if((((his_distance == null)) || ((distance < his_distance)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [player_n,distance], null);
} else {
return current_closest;
}
} else {
return current_closest;
}
}),null,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,item], null);
}),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(game))));
});
speedball.controller.evaluate_control = (function speedball$controller$evaluate_control(controller,game){
var player_n = speedball.controller.player_n(controller,game);
var holding_ball_QMARK_ = speedball.game.player_has_ball_QMARK_.cljs$core$IFn$_invoke$arity$2(game,player_n);
if(cljs.core.truth_(holding_ball_QMARK_)){
return controller;
} else {
var closest_player_n = speedball.controller.closest_player_n_to_ball_on_controllers_team(controller,game);
var map__18299 = speedball.game.player_n__GT_team_player(game,closest_player_n);
var map__18299__$1 = cljs.core.__destructure_map(map__18299);
var player_within_team = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18299__$1,new cljs.core.Keyword(null,"player-within-team","player-within-team",-884430425));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword(null,"player-within-team-n","player-within-team-n",-215285399),player_within_team);
}
});
speedball.controller.clear_intention = (function speedball$controller$clear_intention(controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword(null,"intention","intention",-289345027),null);
});
speedball.controller.produce_ai_action = (function speedball$controller$produce_ai_action(controller,game){
var player_n = speedball.controller.player_n(controller,game);
var G__18300 = new cljs.core.Keyword(null,"intention","intention",-289345027).cljs$core$IFn$_invoke$arity$1(controller);
if((G__18300 == null)){
return null;
} else {
return speedball.ai.produce_action(G__18300,game,player_n);
}
});
speedball.controller.produce_ai_actions = (function speedball$controller$produce_ai_actions(controllers,game){
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (controller){
return speedball.controller.produce_ai_action(controller,game);
}),controllers)));
});
speedball.controller.new_ai_controllers = (function speedball$controller$new_ai_controllers(game,human_controller){
var size = cljs.core.count(new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(game));
var human_player_n = speedball.controller.player_n(human_controller,game);
return cljs.core.vec((function (){var iter__5480__auto__ = (function speedball$controller$new_ai_controllers_$_iter__18301(s__18302){
return (new cljs.core.LazySeq(null,(function (){
var s__18302__$1 = s__18302;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18302__$1);
if(temp__5804__auto__){
var s__18302__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18302__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__18302__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__18304 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__18303 = (0);
while(true){
if((i__18303 < size__5479__auto__)){
var i = cljs.core._nth(c__5478__auto__,i__18303);
cljs.core.chunk_append(b__18304,(function (){var is_human_player_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,human_player_n);
var G__18305 = speedball.controller.new_ai_controller(game,i);
if(is_human_player_QMARK_){
return speedball.controller.clear_intention(G__18305);
} else {
return G__18305;
}
})());

var G__18323 = (i__18303 + (1));
i__18303 = G__18323;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18304),speedball$controller$new_ai_controllers_$_iter__18301(cljs.core.chunk_rest(s__18302__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18304),null);
}
} else {
var i = cljs.core.first(s__18302__$2);
return cljs.core.cons((function (){var is_human_player_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,human_player_n);
var G__18306 = speedball.controller.new_ai_controller(game,i);
if(is_human_player_QMARK_){
return speedball.controller.clear_intention(G__18306);
} else {
return G__18306;
}
})(),speedball$controller$new_ai_controllers_$_iter__18301(cljs.core.rest(s__18302__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(size));
})());
});
/**
 * If the human-control switches, we have to re-evaluate the AIs
 * to no longer control the human player
 */
speedball.controller.refresh_ai_controllers = (function speedball$controller$refresh_ai_controllers(ai_controllers,human_controller,game){
var human_player_n = speedball.controller.player_n(human_controller,game);
return cljs.core.vec((function (){var iter__5480__auto__ = (function speedball$controller$refresh_ai_controllers_$_iter__18307(s__18308){
return (new cljs.core.LazySeq(null,(function (){
var s__18308__$1 = s__18308;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18308__$1);
if(temp__5804__auto__){
var s__18308__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18308__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__18308__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__18310 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__18309 = (0);
while(true){
if((i__18309 < size__5479__auto__)){
var ai = cljs.core._nth(c__5478__auto__,i__18309);
cljs.core.chunk_append(b__18310,(function (){var is_human_player_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(speedball.controller.player_n(ai,game),human_player_n);
if(is_human_player_QMARK_){
return speedball.controller.clear_intention(ai);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ai,new cljs.core.Keyword(null,"intention","intention",-289345027),speedball.ai.new_random_walk_intention());
}
})());

var G__18324 = (i__18309 + (1));
i__18309 = G__18324;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18310),speedball$controller$refresh_ai_controllers_$_iter__18307(cljs.core.chunk_rest(s__18308__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18310),null);
}
} else {
var ai = cljs.core.first(s__18308__$2);
return cljs.core.cons((function (){var is_human_player_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(speedball.controller.player_n(ai,game),human_player_n);
if(is_human_player_QMARK_){
return speedball.controller.clear_intention(ai);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ai,new cljs.core.Keyword(null,"intention","intention",-289345027),speedball.ai.new_random_walk_intention());
}
})(),speedball$controller$refresh_ai_controllers_$_iter__18307(cljs.core.rest(s__18308__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(ai_controllers);
})());
});

//# sourceMappingURL=speedball.controller.js.map
