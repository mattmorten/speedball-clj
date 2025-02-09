goog.provide('speedball.camera');
malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$0();
malli.core.function_schemas.cljs$core$IFn$_invoke$arity$0();
speedball.camera.Camera = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),speedball.core.Index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"height","height",1025178622),speedball.core.Index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),speedball.core.Position], null)], null);
speedball.camera.new_camera = (function speedball$camera$new_camera(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(15),new cljs.core.Keyword(null,"height","height",1025178622),(10),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null);
});
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"speedball.camera","speedball.camera",644530879,null),new cljs.core.Symbol(null,"new-camera","new-camera",-289614871,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207)], null),speedball.camera.Camera], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"speedball/camera.cljs",new cljs.core.Keyword(null,"line","line",212345235),28,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"end-line","end-line",1837326455),28,new cljs.core.Keyword(null,"end-column","end-column",1425389514),18], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

speedball.camera.dimensions = (function speedball$camera$dimensions(camera){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(camera),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(camera)], null);
});
speedball.camera._center_relative_to_position = (function speedball$camera$_center_relative_to_position(camera){
var map__26382 = camera;
var map__26382__$1 = cljs.core.__destructure_map(map__26382);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26382__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26382__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(Math.floor((height / 2.0)) | (0)),(Math.floor((width / 2.0)) | (0))], null);
});
speedball.camera.center = (function speedball$camera$center(camera){
var vec__26383 = speedball.camera._center_relative_to_position(camera);
var y_relative_center = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26383,(0),null);
var x_relative_center = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26383,(1),null);
var vec__26386 = speedball.core.position(camera);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26386,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26386,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + y_relative_center),(x + x_relative_center)], null);
});
speedball.camera.center_to = (function speedball$camera$center_to(camera,desired_position,minimum_bounds,maximum_bounds){
var amount_to_subtract = speedball.camera._center_relative_to_position(camera);
var desired_root = speedball.core.subtract_vectors(desired_position,amount_to_subtract);
var desired_root__$1 = speedball.core.max_of_vector_elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([desired_root,minimum_bounds], 0));
var desired_root__$2 = speedball.core.min_of_vector_elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([desired_root__$1,maximum_bounds], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(camera,new cljs.core.Keyword(null,"position","position",-2011731912),desired_root__$2);
});
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"speedball.camera","speedball.camera",644530879,null),new cljs.core.Symbol(null,"center-to","center-to",2112053479,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),speedball.camera.Camera,speedball.core.Position,speedball.core.Position,speedball.core.Position], null),speedball.camera.Camera], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"speedball/camera.cljs",new cljs.core.Keyword(null,"line","line",212345235),53,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"end-line","end-line",1837326455),53,new cljs.core.Keyword(null,"end-column","end-column",1425389514),17], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);


//# sourceMappingURL=speedball.camera.js.map
