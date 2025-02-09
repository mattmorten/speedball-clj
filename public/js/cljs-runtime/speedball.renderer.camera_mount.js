goog.provide('speedball.renderer.camera_mount');
malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$0();
malli.core.function_schemas.cljs$core$IFn$_invoke$arity$0();
speedball.renderer.camera_mount.TrackingState = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),speedball.core.Index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"ball","ball",542859139)], null)], null)], null);
speedball.renderer.camera_mount.CameraMount = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),speedball.camera.Camera], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"tracking","tracking",2029532180)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),speedball.renderer.camera_mount.TrackingState], null)], null);
speedball.renderer.camera_mount.new_camera_mount = (function speedball$renderer$camera_mount$new_camera_mount(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"camera","camera",-1190348585),speedball.camera.new_camera(),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"tracking","tracking",2029532180),new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"ball","ball",542859139),new cljs.core.Keyword(null,"player","player",-97687400),(0)], null)], null);
});
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"speedball.renderer.camera-mount","speedball.renderer.camera-mount",203204103,null),new cljs.core.Symbol(null,"new-camera-mount","new-camera-mount",-1935074726,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207)], null),speedball.renderer.camera_mount.CameraMount], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"speedball/renderer/camera_mount.cljs",new cljs.core.Keyword(null,"line","line",212345235),36,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"end-line","end-line",1837326455),36,new cljs.core.Keyword(null,"end-column","end-column",1425389514),24], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

speedball.renderer.camera_mount.mount_state = (function speedball$renderer$camera_mount$mount_state(camera_mount){
return new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(camera_mount);
});
speedball.renderer.camera_mount.tracking_subject_position = (function speedball$renderer$camera_mount$tracking_subject_position(camera_mount,game){
var G__26406 = new cljs.core.Keyword(null,"object","object",1474613949).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(camera_mount));
var G__26406__$1 = (((G__26406 instanceof cljs.core.Keyword))?G__26406.fqn:null);
switch (G__26406__$1) {
case "player":
return speedball.game.player_position(game,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(camera_mount)));

break;
case "ball":
return speedball.game.ball_position(game);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26406__$1)].join('')));

}
});
speedball.renderer.camera_mount.run_tracking = (function speedball$renderer$camera_mount$run_tracking(camera_mount,game){
var tracking_subject_position = speedball.renderer.camera_mount.tracking_subject_position(camera_mount,game);
var camera = new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(camera_mount);
var minimum_bounds = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
var maximum_bounds = speedball.core.subtract_vectors(speedball.board.board_size,speedball.camera.dimensions(camera));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(camera_mount,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585)], null),(function (old_camera){
return speedball.camera.center_to(old_camera,tracking_subject_position,minimum_bounds,maximum_bounds);
}));
});
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"speedball.renderer.camera-mount","speedball.renderer.camera-mount",203204103,null),new cljs.core.Symbol(null,"run-tracking","run-tracking",-1238505263,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),speedball.renderer.camera_mount.CameraMount,speedball.game.Game], null),speedball.renderer.camera_mount.CameraMount], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"speedball/renderer/camera_mount.cljs",new cljs.core.Keyword(null,"line","line",212345235),57,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"end-line","end-line",1837326455),57,new cljs.core.Keyword(null,"end-column","end-column",1425389514),20], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

speedball.renderer.camera_mount.evaluate_camera_mount_for_game = (function speedball$renderer$camera_mount$evaluate_camera_mount_for_game(camera_mount,game){
var G__26410 = speedball.renderer.camera_mount.mount_state(camera_mount);
var G__26410__$1 = (((G__26410 instanceof cljs.core.Keyword))?G__26410.fqn:null);
switch (G__26410__$1) {
case "tracking":
return speedball.renderer.camera_mount.run_tracking(camera_mount,game);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26410__$1)].join('')));

}
});
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"speedball.renderer.camera-mount","speedball.renderer.camera-mount",203204103,null),new cljs.core.Symbol(null,"evaluate-camera-mount-for-game","evaluate-camera-mount-for-game",429804890,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),speedball.renderer.camera_mount.CameraMount,speedball.game.Game], null),speedball.renderer.camera_mount.CameraMount], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"speedball/renderer/camera_mount.cljs",new cljs.core.Keyword(null,"line","line",212345235),64,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"end-line","end-line",1837326455),64,new cljs.core.Keyword(null,"end-column","end-column",1425389514),38], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

speedball.renderer.camera_mount.track_player = (function speedball$renderer$camera_mount$track_player(camera_mount,player_n){
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(camera_mount,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"tracking","tracking",2029532180)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.Keyword(null,"object","object",1474613949)], null),new cljs.core.Keyword(null,"player","player",-97687400)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.Keyword(null,"player","player",-97687400)], null),player_n);
});
speedball.renderer.camera_mount.track_ball = (function speedball$renderer$camera_mount$track_ball(camera_mount){
return cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(camera_mount,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"tracking","tracking",2029532180)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.Keyword(null,"object","object",1474613949)], null),new cljs.core.Keyword(null,"ball","ball",542859139));
});
speedball.renderer.camera_mount.toggle_player_on_camera = (function speedball$renderer$camera_mount$toggle_player_on_camera(camera_mount,game){
var number_of_players = speedball.game.number_of_players(game);
var existing_player = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(camera_mount));
return speedball.renderer.camera_mount.track_player(camera_mount,cljs.core.mod((existing_player + (1)),number_of_players));
});
speedball.renderer.camera_mount.render_row = (function speedball$renderer$camera_mount$render_row(camera,rendered_board_row){
var vec__26412 = speedball.core.position(camera);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26412,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26412,(1),null);
var width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(camera);
var sub = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(rendered_board_row,x);
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(width,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sub,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"0","0",351625802)))));
});
speedball.renderer.camera_mount._render_row_guard = (function speedball$renderer$camera_mount$_render_row_guard(p__26416){
var vec__26417 = p__26416;
var vec__26420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26417,(0),null);
var camera = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26420,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26420,(1),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26417,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(camera),cljs.core.count(result));
});
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"speedball.renderer.camera-mount","speedball.renderer.camera-mount",203204103,null),new cljs.core.Symbol(null,"render-row","render-row",-2023575800,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),speedball.camera.Camera,speedball.board.Row], null),speedball.board.Row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),speedball.renderer.camera_mount._render_row_guard], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"speedball/renderer/camera_mount.cljs",new cljs.core.Keyword(null,"line","line",212345235),99,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"end-line","end-line",1837326455),99,new cljs.core.Keyword(null,"end-column","end-column",1425389514),18], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

speedball.renderer.camera_mount.render_camera = (function speedball$renderer$camera_mount$render_camera(camera,rendered_board){
var vec__26423 = speedball.core.position(camera);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26423,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26423,(1),null);
var height = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(camera);
var sub = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(rendered_board,y);
var board_width = cljs.core.count(cljs.core.first(rendered_board));
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (row){
return speedball.renderer.camera_mount.render_row(camera,row);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(height,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sub,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(board_width,new cljs.core.Keyword(null,"0","0",351625802))))))));
});
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"speedball.renderer.camera-mount","speedball.renderer.camera-mount",203204103,null),new cljs.core.Symbol(null,"render-camera","render-camera",1701016549,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),speedball.camera.Camera,speedball.board.Board], null),speedball.board.Board], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"speedball/renderer/camera_mount.cljs",new cljs.core.Keyword(null,"line","line",212345235),111,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"end-line","end-line",1837326455),111,new cljs.core.Keyword(null,"end-column","end-column",1425389514),21], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

speedball.renderer.camera_mount.render_camera_mount = (function speedball$renderer$camera_mount$render_camera_mount(camera_mount,rendered_board){
return speedball.renderer.camera_mount.render_camera(new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(camera_mount),rendered_board);
});
speedball.renderer.camera_mount.render_camera(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(3),new cljs.core.Keyword(null,"height","height",1025178622),(2),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(3)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"n","n",562130025)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,".",".",335144435),new cljs.core.Keyword(null,".",".",335144435),new cljs.core.Keyword(null,".",".",335144435),new cljs.core.Keyword(null,"e","e",1381269198)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,".",".",335144435),new cljs.core.Keyword(null,".",".",335144435),new cljs.core.Keyword(null,".",".",335144435),new cljs.core.Keyword(null,"e","e",1381269198)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,".",".",335144435),new cljs.core.Keyword(null,".",".",335144435),new cljs.core.Keyword(null,".",".",335144435),new cljs.core.Keyword(null,"e","e",1381269198)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,".",".",335144435),new cljs.core.Keyword(null,".",".",335144435),new cljs.core.Keyword(null,".",".",335144435),new cljs.core.Keyword(null,"e","e",1381269198)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"s","s",1705939918)], null)], null));

//# sourceMappingURL=speedball.renderer.camera_mount.js.map
