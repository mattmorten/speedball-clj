goog.provide('speedball.game');
malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$0();
malli.core.function_schemas.cljs$core$IFn$_invoke$arity$0();
speedball.game.Game = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),speedball.board.Board], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),speedball.player.Player], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ball","ball",542859139),speedball.ball.Ball], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"goals","goals",-1712076283),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),speedball.core.Index], null)], null)], null);
speedball.game.new_game = (function speedball$game$new_game(var_args){
var G__26390 = arguments.length;
switch (G__26390) {
case 0:
return speedball.game.new_game.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return speedball.game.new_game.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(speedball.game.new_game.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"board","board",-1907017633),speedball.board.generate_board(),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [speedball.player.new_player.cljs$core$IFn$_invoke$arity$0(),speedball.player.new_player.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(6)], null)], null)),speedball.player.new_player.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7)], null)], null)),speedball.player.new_player.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(9)], null)], null))], null),new cljs.core.Keyword(null,"teams","teams",1677714510),(2),new cljs.core.Keyword(null,"ball","ball",542859139),speedball.ball.generate_ball(),new cljs.core.Keyword(null,"goals","goals",-1712076283),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null);
}));

(speedball.game.new_game.cljs$core$IFn$_invoke$arity$1 = (function (arg){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speedball.game.new_game.cljs$core$IFn$_invoke$arity$0(),arg], 0));
}));

(speedball.game.new_game.cljs$lang$maxFixedArity = 1);

malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"speedball.game","speedball.game",1995752765,null),new cljs.core.Symbol(null,"new-game","new-game",1807773175,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207)], null),speedball.game.Game], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461)], null)], null),speedball.game.Game], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"speedball/game.cljs",new cljs.core.Keyword(null,"line","line",212345235),36,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"end-line","end-line",1837326455),36,new cljs.core.Keyword(null,"end-column","end-column",1425389514),11], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

speedball.game.which_team = (function speedball$game$which_team(game,player_n){
return cljs.core.mod(player_n,new cljs.core.Keyword(null,"teams","teams",1677714510).cljs$core$IFn$_invoke$arity$1(game));
});
speedball.game.team_player__GT_player_n = (function speedball$game$team_player__GT_player_n(game,team_n,player_within_team_n){
return (team_n + (new cljs.core.Keyword(null,"teams","teams",1677714510).cljs$core$IFn$_invoke$arity$1(game) * player_within_team_n));
});
speedball.game.player_n__GT_team_player = (function speedball$game$player_n__GT_team_player(game,player_n){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"team-n","team-n",-1507643197),cljs.core.mod(player_n,new cljs.core.Keyword(null,"teams","teams",1677714510).cljs$core$IFn$_invoke$arity$1(game)),new cljs.core.Keyword(null,"player-within-team","player-within-team",-884430425),(Math.floor((player_n / new cljs.core.Keyword(null,"teams","teams",1677714510).cljs$core$IFn$_invoke$arity$1(game))) | (0))], null);
});
speedball.game.player_n = (function speedball$game$player_n(game,player_n){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(game),player_n);
});
speedball.game.player_position = (function speedball$game$player_position(game,player_n){
return new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(game),player_n));
});
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"speedball.game","speedball.game",1995752765,null),new cljs.core.Symbol(null,"player-position","player-position",361408146,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),speedball.game.Game,speedball.core.Index], null),speedball.core.Position], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"speedball/game.cljs",new cljs.core.Keyword(null,"line","line",212345235),59,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"end-line","end-line",1837326455),59,new cljs.core.Keyword(null,"end-column","end-column",1425389514),23], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

speedball.game.ball_position = (function speedball$game$ball_position(game){
return new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ball","ball",542859139).cljs$core$IFn$_invoke$arity$1(game));
});
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"speedball.game","speedball.game",1995752765,null),new cljs.core.Symbol(null,"ball-position","ball-position",393086620,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),speedball.game.Game], null),speedball.core.Position], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"speedball/game.cljs",new cljs.core.Keyword(null,"line","line",212345235),62,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"end-line","end-line",1837326455),62,new cljs.core.Keyword(null,"end-column","end-column",1425389514),21], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

speedball.game.player_has_ball_QMARK_ = (function speedball$game$player_has_ball_QMARK_(var_args){
var G__26392 = arguments.length;
switch (G__26392) {
case 2:
return speedball.game.player_has_ball_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return speedball.game.player_has_ball_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(speedball.game.player_has_ball_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (game,player_n){
return new cljs.core.Keyword(null,"holding-ball?","holding-ball?",-1911626544).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(game),player_n));
}));

(speedball.game.player_has_ball_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (game){
return cljs.core.some(new cljs.core.Keyword(null,"holding-ball?","holding-ball?",-1911626544),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(game)) === true;
}));

(speedball.game.player_has_ball_QMARK_.cljs$lang$maxFixedArity = 2);

malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"speedball.game","speedball.game",1995752765,null),new cljs.core.Symbol(null,"player-has-ball?","player-has-ball?",141181330,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),speedball.game.Game,speedball.core.Index], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),speedball.game.Game], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"speedball/game.cljs",new cljs.core.Keyword(null,"line","line",212345235),70,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"end-line","end-line",1837326455),70,new cljs.core.Keyword(null,"end-column","end-column",1425389514),19], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

speedball.game.number_of_players = (function speedball$game$number_of_players(game){
return cljs.core.count(new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(game));
});
speedball.game.which_player_n_has_ball = (function speedball$game$which_player_n_has_ball(game){
var G__26393 = game;
var G__26393__$1 = (((G__26393 == null))?null:new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(G__26393));
var G__26393__$2 = (((G__26393__$1 == null))?null:cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,item], null);
}),G__26393__$1));
var G__26393__$3 = (((G__26393__$2 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__26394){
var vec__26395 = p__26394;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26395,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26395,(1),null);
return new cljs.core.Keyword(null,"holding-ball?","holding-ball?",-1911626544).cljs$core$IFn$_invoke$arity$1(player);
}),G__26393__$2));
var G__26393__$4 = (((G__26393__$3 == null))?null:cljs.core.first(G__26393__$3));
if((G__26393__$4 == null)){
return null;
} else {
return cljs.core.first(G__26393__$4);
}
});
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"speedball.game","speedball.game",1995752765,null),new cljs.core.Symbol(null,"which-player-n-has-ball","which-player-n-has-ball",-281843744,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),speedball.game.Game], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),speedball.core.Index], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"speedball/game.cljs",new cljs.core.Keyword(null,"line","line",212345235),87,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"end-line","end-line",1837326455),87,new cljs.core.Keyword(null,"end-column","end-column",1425389514),31], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

speedball.game.move_player_in_game = (function speedball$game$move_player_in_game(game,player_n,direction){
var game__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),player_n], null),(function (p1__26398_SHARP_){
return speedball.player.move_player(p1__26398_SHARP_,direction,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game));
}));
if(cljs.core.truth_(speedball.game.player_has_ball_QMARK_.cljs$core$IFn$_invoke$arity$2(game__$1,player_n))){
var player_position = speedball.game.player_position(game__$1,player_n);
return cljs.core.assoc_in(game__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ball","ball",542859139),new cljs.core.Keyword(null,"position","position",-2011731912)], null),player_position);
} else {
return game__$1;
}
});
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"speedball.game","speedball.game",1995752765,null),new cljs.core.Symbol(null,"move-player-in-game","move-player-in-game",-110229120,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),speedball.game.Game,speedball.core.Index,speedball.core.Direction], null),speedball.game.Game], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"speedball/game.cljs",new cljs.core.Keyword(null,"line","line",212345235),96,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"end-line","end-line",1837326455),96,new cljs.core.Keyword(null,"end-column","end-column",1425389514),27], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

speedball.game.player_picks_up_ball = (function speedball$game$player_picks_up_ball(game,player_n){
var player_position = speedball.game.player_position(game,player_n);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc_in(game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),player_n,new cljs.core.Keyword(null,"holding-ball?","holding-ball?",-1911626544)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ball","ball",542859139),new cljs.core.Keyword(null,"position","position",-2011731912)], null),player_position),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ball","ball",542859139)], null),speedball.physics.cancel_movement);
});
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"speedball.game","speedball.game",1995752765,null),new cljs.core.Symbol(null,"player-picks-up-ball","player-picks-up-ball",1294031757,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),speedball.game.Game,speedball.core.Index], null),speedball.game.Game], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"speedball/game.cljs",new cljs.core.Keyword(null,"line","line",212345235),104,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"end-line","end-line",1837326455),104,new cljs.core.Keyword(null,"end-column","end-column",1425389514),28], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

speedball.game.player_drops_ball = (function speedball$game$player_drops_ball(game,player_n){
return cljs.core.assoc_in(game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),player_n,new cljs.core.Keyword(null,"holding-ball?","holding-ball?",-1911626544)], null),false);
});
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"speedball.game","speedball.game",1995752765,null),new cljs.core.Symbol(null,"player-drops-ball","player-drops-ball",1673569435,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),speedball.game.Game,speedball.core.Index], null),speedball.game.Game], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"speedball/game.cljs",new cljs.core.Keyword(null,"line","line",212345235),108,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"end-line","end-line",1837326455),108,new cljs.core.Keyword(null,"end-column","end-column",1425389514),25], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

speedball.game.is_ball_in_goal_QMARK_ = (function speedball$game$is_ball_in_goal_QMARK_(game){
var ball_position = speedball.game.ball_position(game);
var tile = speedball.board.tile_at(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game),ball_position);
return speedball.board.is_goal_tile_QMARK_(tile);
});
speedball.game.do_goal_things = (function speedball$game$do_goal_things(game){
var team_n = (0);
var player_maybe_n = speedball.game.which_player_n_has_ball(game);
var G__26399 = game;
var G__26399__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__26399,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"goals","goals",-1712076283),team_n], null),cljs.core.inc)
;
var G__26399__$2 = cljs.core.assoc_in(G__26399__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ball","ball",542859139),new cljs.core.Keyword(null,"position","position",-2011731912)], null),speedball.board.center())
;
var G__26399__$3 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__26399__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ball","ball",542859139)], null),speedball.physics.cancel_movement)
;
if((!((player_maybe_n == null)))){
return speedball.game.player_drops_ball(G__26399__$3,player_maybe_n);
} else {
return G__26399__$3;
}
});
speedball.game.evaluate_game_for_goal = (function speedball$game$evaluate_game_for_goal(game){
if(speedball.game.is_ball_in_goal_QMARK_(game)){
return speedball.game.do_goal_things(game);
} else {
return game;
}
});
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"speedball.game","speedball.game",1995752765,null),new cljs.core.Symbol(null,"evaluate-game-for-goal","evaluate-game-for-goal",190225236,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),speedball.game.Game], null),speedball.game.Game], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"speedball/game.cljs",new cljs.core.Keyword(null,"line","line",212345235),132,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"end-line","end-line",1837326455),132,new cljs.core.Keyword(null,"end-column","end-column",1425389514),30], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

speedball.game.throw_ball = (function speedball$game$throw_ball(game,player_number){
var map__26400 = speedball.game.player_n(game,player_number);
var map__26400__$1 = cljs.core.__destructure_map(map__26400);
var facing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26400__$1,new cljs.core.Keyword(null,"facing","facing",-854439413));
var movement_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(speedball.physics.init_movement,facing,speedball.board.board_size);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(speedball.game.player_drops_ball(game,player_number),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ball","ball",542859139)], null),movement_fn);
});
speedball.game.wait_one_second = (function speedball$game$wait_one_second(game){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(game,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ball","ball",542859139)], null),speedball.physics.increment_movement);
});
speedball.game.MovePlayerAction = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"move-player","move-player",-485737727)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-n","player-n",2021041068),speedball.core.Index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"direction","direction",-633359395),speedball.core.Direction], null)], null);
speedball.game.new_move_player_action = (function speedball$game$new_move_player_action(player_n,direction){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"move-player","move-player",-485737727),new cljs.core.Keyword(null,"player-n","player-n",2021041068),player_n,new cljs.core.Keyword(null,"direction","direction",-633359395),direction], null);
});
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"speedball.game","speedball.game",1995752765,null),new cljs.core.Symbol(null,"new-move-player-action","new-move-player-action",9853198,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),speedball.core.Index,speedball.core.Direction], null),speedball.game.MovePlayerAction], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"speedball/game.cljs",new cljs.core.Keyword(null,"line","line",212345235),155,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"end-line","end-line",1837326455),155,new cljs.core.Keyword(null,"end-column","end-column",1425389514),30], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

speedball.game.apply_action = (function speedball$game$apply_action(game,action){
var G__26401 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(action);
var G__26401__$1 = (((G__26401 instanceof cljs.core.Keyword))?G__26401.fqn:null);
switch (G__26401__$1) {
case "move-player":
var map__26402 = action;
var map__26402__$1 = cljs.core.__destructure_map(map__26402);
var player_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26402__$1,new cljs.core.Keyword(null,"player-n","player-n",2021041068));
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26402__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
return speedball.game.move_player_in_game(game,player_n,direction);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26401__$1)].join('')));

}
});
speedball.game.apply_all_actions = (function speedball$game$apply_all_actions(game,actions){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (game__$1,action){
return speedball.game.apply_action(game__$1,action);
}),game,actions);
});

//# sourceMappingURL=speedball.game.js.map
