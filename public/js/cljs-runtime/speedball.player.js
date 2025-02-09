goog.provide('speedball.player');
malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$0();
malli.core.function_schemas.cljs$core$IFn$_invoke$arity$0();
speedball.player.Player = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closed","closed",-919675359),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),speedball.core.Position], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"facing","facing",-854439413),speedball.core.Direction], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"holding-ball?","holding-ball?",-1911626544),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null);
speedball.player.add_player_position = (function speedball$player$add_player_position(player_position,direction){
return speedball.core.add_vectors.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([player_position,(direction.cljs$core$IFn$_invoke$arity$1 ? direction.cljs$core$IFn$_invoke$arity$1(speedball.core.directions) : direction.call(null, speedball.core.directions))], 0));
});
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"speedball.player","speedball.player",-670199455,null),new cljs.core.Symbol(null,"add-player-position","add-player-position",-979393274,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),speedball.core.Position,speedball.core.Direction], null),speedball.core.Position], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"speedball/player.cljs",new cljs.core.Keyword(null,"line","line",212345235),21,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"end-line","end-line",1837326455),21,new cljs.core.Keyword(null,"end-column","end-column",1425389514),27], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

speedball.player.move_player = (function speedball$player$move_player(player,direction,board){
var new_position = speedball.player.add_player_position(speedball.core.position(player),direction);
if(speedball.board.valid_position_QMARK_(new_position,board)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(player,new cljs.core.Keyword(null,"position","position",-2011731912),new_position,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"facing","facing",-854439413),direction], 0));
} else {
return player;
}
});
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"speedball.player","speedball.player",-670199455,null),new cljs.core.Symbol(null,"move-player","move-player",1154793800,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),speedball.player.Player,speedball.core.Direction,speedball.board.Board], null),speedball.player.Player], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"speedball/player.cljs",new cljs.core.Keyword(null,"line","line",212345235),30,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"end-line","end-line",1837326455),30,new cljs.core.Keyword(null,"end-column","end-column",1425389514),19], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

speedball.player.new_player = (function speedball$player$new_player(var_args){
var G__26378 = arguments.length;
switch (G__26378) {
case 0:
return speedball.player.new_player.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return speedball.player.new_player.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(speedball.player.new_player.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.Keyword(null,"facing","facing",-854439413),new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.Keyword(null,"holding-ball?","holding-ball?",-1911626544),false], null);
}));

(speedball.player.new_player.cljs$core$IFn$_invoke$arity$1 = (function (arg){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speedball.player.new_player.cljs$core$IFn$_invoke$arity$0(),arg], 0));
}));

(speedball.player.new_player.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=speedball.player.js.map
