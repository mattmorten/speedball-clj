goog.provide('speedball.renderer.renderer');
malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$0();
malli.core.function_schemas.cljs$core$IFn$_invoke$arity$0();
speedball.renderer.renderer.render_player = (function speedball$renderer$renderer$render_player(game,player_n){
var player_has_ball = speedball.game.player_has_ball_QMARK_.cljs$core$IFn$_invoke$arity$2(game,player_n);
var player_doesnt_have_ball = cljs.core.not(player_has_ball);
var player_on_top_of_ball = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(speedball.game.player_position(game,player_n),speedball.game.ball_position(game));
if(((player_doesnt_have_ball) && (player_on_top_of_ball))){
return new cljs.core.Keyword(null,"j","j",-1397974765);
} else {
if(cljs.core.truth_(player_has_ball)){
return speedball.board.player_tile_holding_ball(player_n);
} else {
if(player_doesnt_have_ball){
return speedball.board.player_tile(player_n);
} else {
return null;
}
}
}
});
speedball.renderer.renderer.render_board = (function speedball$renderer$renderer$render_board(game){
var vec__18311 = speedball.game.ball_position(game);
var ball_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18311,(0),null);
var ball_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18311,(1),null);
var player_has_ball = speedball.game.player_has_ball_QMARK_.cljs$core$IFn$_invoke$arity$1(game);
var player_doesnt_have_ball = (!(player_has_ball));
var game__$1 = (function (){var G__18314 = game;
if(player_doesnt_have_ball){
return cljs.core.assoc_in(G__18314,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),ball_y,ball_x], null),new cljs.core.Keyword(null,"o","o",-1350007228));
} else {
return G__18314;
}
})();
var game__$2 = (function (){var game__$2 = game__$1;
var players = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(game__$2);
var player_n = (0);
while(true){
if(cljs.core.empty_QMARK_(players)){
return game__$2;
} else {
var player = cljs.core.first(players);
var vec__18318 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(player);
var player_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18318,(0),null);
var player_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18318,(1),null);
var game__$3 = cljs.core.assoc_in(game__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),player_y,player_x], null),speedball.renderer.renderer.render_player(game__$2,player_n));
var G__18325 = game__$3;
var G__18326 = cljs.core.rest(players);
var G__18327 = (player_n + (1));
game__$2 = G__18325;
players = G__18326;
player_n = G__18327;
continue;
}
break;
}
})();
return new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game__$2);
});
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"speedball.renderer.renderer","speedball.renderer.renderer",605866756,null),new cljs.core.Symbol(null,"render-board","render-board",690542508,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),speedball.game.Game], null),speedball.board.Board], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"speedball/renderer/renderer.cljs",new cljs.core.Keyword(null,"line","line",212345235),46,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"end-line","end-line",1837326455),46,new cljs.core.Keyword(null,"end-column","end-column",1425389514),20], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

speedball.renderer.renderer.run_game = (function speedball$renderer$renderer$run_game(var_args){
var G__18322 = arguments.length;
switch (G__18322) {
case 2:
return speedball.renderer.renderer.run_game.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return speedball.renderer.renderer.run_game.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(speedball.renderer.renderer.run_game.cljs$core$IFn$_invoke$arity$2 = (function (game_atom,input){
var state = cljs.core.deref(game_atom);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(speedball.renderer.renderer.run_game,input,state);
}));

(speedball.renderer.renderer.run_game.cljs$core$IFn$_invoke$arity$5 = (function (input,game,camera_mount,controller,ai_controllers){
var camera_mount__$1 = speedball.renderer.camera_mount.evaluate_camera_mount_for_game(camera_mount,game);
var controller__$1 = speedball.controller.evaluate_control(controller,game);
var ai_controllers__$1 = speedball.controller.refresh_ai_controllers(ai_controllers,controller__$1,game);
var ai_actions = speedball.controller.produce_ai_actions(ai_controllers__$1,game);
var game__$1 = speedball.game.wait_one_second(game);
var game__$2 = speedball.game.apply_all_actions(game__$1,ai_actions);
var game__$3 = speedball.game.evaluate_game_for_goal(game__$2);
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Board:\n"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(speedball.renderer.renderer.render_board(game__$3));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Camera View:\n"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(speedball.renderer.camera_mount.render_camera_mount(camera_mount__$1,speedball.renderer.renderer.render_board(game__$3)));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Camera Mount:\n"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(camera_mount__$1);

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Controller:\n"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(controller__$1);

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["AIs:\n"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(ai_controllers__$1);

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["AI actions taken:\n"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(ai_actions);

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Closest player-n:\n\t"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(speedball.controller.closest_player_n_to_ball_on_controllers_team(controller__$1,game__$3));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Game:\n"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(game__$3,new cljs.core.Keyword(null,"board","board",-1907017633)));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Enter a key:\n\t"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(w|a|s|d: move, f: pick up ball, g: drop ball, h: throw, e: wait, c: toggle cam)"], 0));

var player_n = speedball.controller.player_n(controller__$1,game__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input,"w")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [speedball.game.move_player_in_game(game__$3,player_n,new cljs.core.Keyword(null,"north","north",651323902)),camera_mount__$1,controller__$1,ai_controllers__$1], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input,"a")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [speedball.game.move_player_in_game(game__$3,player_n,new cljs.core.Keyword(null,"west","west",708776677)),camera_mount__$1,controller__$1,ai_controllers__$1], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input,"s")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [speedball.game.move_player_in_game(game__$3,player_n,new cljs.core.Keyword(null,"south","south",1586796293)),camera_mount__$1,controller__$1,ai_controllers__$1], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input,"d")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [speedball.game.move_player_in_game(game__$3,player_n,new cljs.core.Keyword(null,"east","east",1189821678)),camera_mount__$1,controller__$1,ai_controllers__$1], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input,"f")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [speedball.game.player_picks_up_ball(game__$3,player_n),camera_mount__$1,controller__$1,ai_controllers__$1], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input,"g")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [speedball.game.player_drops_ball(game__$3,player_n),speedball.renderer.camera_mount.track_ball(camera_mount__$1),controller__$1,ai_controllers__$1], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input,"h")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [speedball.game.throw_ball(game__$3,player_n),speedball.renderer.camera_mount.track_ball(camera_mount__$1),controller__$1,ai_controllers__$1], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input,"e")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [game__$3,camera_mount__$1,controller__$1,ai_controllers__$1], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input,"c")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [game__$3,speedball.renderer.camera_mount.toggle_player_on_camera(camera_mount__$1,game__$3),controller__$1,ai_controllers__$1], null);
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid key. Try again."], 0));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [game__$3,camera_mount__$1,controller__$1,ai_controllers__$1], null);

}
}
}
}
}
}
}
}
}
}));

(speedball.renderer.renderer.run_game.cljs$lang$maxFixedArity = 5);

speedball.renderer.renderer.new_game_state = (function speedball$renderer$renderer$new_game_state(){
var game = speedball.game.new_game.cljs$core$IFn$_invoke$arity$0();
var camera_mount = speedball.renderer.camera_mount.new_camera_mount();
var controller = speedball.controller.new_human_controller();
var ai_controllers = speedball.controller.new_ai_controllers(game,controller);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [game,camera_mount,controller,ai_controllers], null);
});
speedball.renderer.renderer.render_board(speedball.game.evaluate_game_for_goal(speedball.game.player_picks_up_ball(speedball.game.new_game.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [speedball.player.new_player.cljs$core$IFn$_invoke$arity$0(),speedball.player.new_player.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null))], null)], null)),(1))));
new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(speedball.renderer.renderer.render_board(speedball.game.move_player_in_game(speedball.game.move_player_in_game(speedball.game.move_player_in_game(speedball.game.move_player_in_game(speedball.game.new_game.cljs$core$IFn$_invoke$arity$0(),(0),new cljs.core.Keyword(null,"east","east",1189821678)),(0),new cljs.core.Keyword(null,"south","south",1586796293)),(0),new cljs.core.Keyword(null,"south","south",1586796293)),(2),new cljs.core.Keyword(null,"east","east",1189821678))));

//# sourceMappingURL=speedball.renderer.renderer.js.map
