goog.provide('speedball.physics');
malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$0();
malli.core.function_schemas.cljs$core$IFn$_invoke$arity$0();
speedball.physics.deg_to_rad = (function speedball$physics$deg_to_rad(degrees){
return (degrees * (Math.PI / (180)));
});
/**
 * Calculates the position (x, y) of an object emitted from (x0, y0) at an angle `theta` with initial velocity `v0`.
 * `friction-coeff` determines how velocity degrades over time (0 = no friction, 1 = high friction).
 * Returns a map with x and y coordinates at time `t`.
 */
speedball.physics.position_at_time = (function speedball$physics$position_at_time(x0,y0,theta,v0,friction_coeff,t){
var _friction_coeff = ((0) - friction_coeff);
var theta__$1 = speedball.physics.deg_to_rad(theta);
var velocity = (function (){var x__5087__auto__ = (0);
var y__5088__auto__ = (v0 * Math.exp((_friction_coeff * t)));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var xt = (x0 + ((v0 * Math.cos(theta__$1)) * (((1) - Math.exp((_friction_coeff * t))) / friction_coeff)));
var yt = (y0 + ((v0 * Math.sin(theta__$1)) * (((1) - Math.exp((_friction_coeff * t))) / friction_coeff)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),xt,new cljs.core.Keyword(null,"y","y",-1757859776),yt,new cljs.core.Keyword(null,"v","v",21465059),velocity], null);
});
speedball.physics.position_to_vec = (function speedball$physics$position_to_vec(p__26327){
var map__26328 = p__26327;
var map__26328__$1 = cljs.core.__destructure_map(map__26328);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26328__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26328__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
speedball.physics.vec_to_int = (function speedball$physics$vec_to_int(p__26329){
var vec__26330 = p__26329;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26330,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26330,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x | (0)),(y | (0))], null);
});
speedball.physics.scale = (function speedball$physics$scale(scaling,p__26333){
var vec__26338 = p__26333;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26338,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26338,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x * scaling),(y * scaling)], null);
});
speedball.physics.positions = (function speedball$physics$positions(var_args){
var G__26346 = arguments.length;
switch (G__26346) {
case 5:
return speedball.physics.positions.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return speedball.physics.positions.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(speedball.physics.positions.cljs$core$IFn$_invoke$arity$5 = (function (x,y,theta,v0,friction){
return speedball.physics.positions.cljs$core$IFn$_invoke$arity$6(x,y,theta,v0,friction,(0));
}));

(speedball.physics.positions.cljs$core$IFn$_invoke$arity$6 = (function (x,y,theta,v0,friction,t){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(speedball.physics.position_at_time(x,y,theta,v0,friction,t),speedball.physics.positions.cljs$core$IFn$_invoke$arity$6(x,y,theta,v0,friction,(t + (1))));
}),null,null));
}));

(speedball.physics.positions.cljs$lang$maxFixedArity = 6);

speedball.physics.handle_min_flip_component = (function speedball$physics$handle_min_flip_component(board_min_value,value){
if((value < board_min_value)){
var overflow = (board_min_value - value);
return (board_min_value + overflow);
} else {
return value;
}
});
speedball.physics.handle_max_flip_component = (function speedball$physics$handle_max_flip_component(board_max_value,value){
if((value > board_max_value)){
var overflow = (value - board_max_value);
return (board_max_value - overflow);
} else {
return value;
}
});
speedball.physics.handle_min_flip = (function speedball$physics$handle_min_flip(p__26351,p__26352){
var vec__26353 = p__26351;
var board_min_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26353,(0),null);
var board_min_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26353,(1),null);
var vec__26356 = p__26352;
var value_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26356,(0),null);
var value_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26356,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [speedball.physics.handle_min_flip_component(board_min_y,value_y),speedball.physics.handle_min_flip_component(board_min_x,value_x)], null);
});
speedball.physics.handle_max_flip = (function speedball$physics$handle_max_flip(p__26359,p__26360){
var vec__26361 = p__26359;
var board_max_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26361,(0),null);
var board_max_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26361,(1),null);
var vec__26364 = p__26360;
var value_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26364,(0),null);
var value_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26364,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [speedball.physics.handle_max_flip_component(board_max_y,value_y),speedball.physics.handle_max_flip_component(board_max_x,value_x)], null);
});
speedball.physics.handle_walls = (function speedball$physics$handle_walls(board_dimensions,position){
var board_max = speedball.core.subtract_vectors(board_dimensions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null));
var board_min = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null);
var position__$1 = position;
while(true){
var new_position = speedball.physics.handle_max_flip(board_max,speedball.physics.handle_min_flip(board_min,position__$1));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(position__$1,new_position)){
var G__26379 = new_position;
position__$1 = G__26379;
continue;
} else {
return new_position;
}
break;
}
});
speedball.physics.take_until_repeat = (function speedball$physics$take_until_repeat(){
return (function (rf){
var previous = cljs.core.volatile_BANG_((-123));
return (function() {
var G__26380 = null;
var G__26380__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null, ));
});
var G__26380__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null, result));
});
var G__26380__2 = (function (result,input){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(previous),input)){
return cljs.core.reduced(result);
} else {
cljs.core.vreset_BANG_(previous,input);

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,input) : rf.call(null, result,input));
}
});
G__26380 = function(result,input){
switch(arguments.length){
case 0:
return G__26380__0.call(this);
case 1:
return G__26380__1.call(this,result);
case 2:
return G__26380__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26380.cljs$core$IFn$_invoke$arity$0 = G__26380__0;
G__26380.cljs$core$IFn$_invoke$arity$1 = G__26380__1;
G__26380.cljs$core$IFn$_invoke$arity$2 = G__26380__2;
return G__26380;
})()
});
});
speedball.physics.xform = (function speedball$physics$xform(n,start,board_dimensions){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$1(speedball.physics.position_to_vec),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(speedball.physics.scale,0.1)),cljs.core.map.cljs$core$IFn$_invoke$arity$1(speedball.physics.vec_to_int),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(speedball.core.add_vectors,start)),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(speedball.physics.handle_walls,board_dimensions)),cljs.core.take.cljs$core$IFn$_invoke$arity$1(n)], 0));
});
speedball.physics.Movement = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),speedball.core.Positions], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),speedball.core.Index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"length","length",588987862),speedball.core.Index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981),speedball.core.Position], null)], null);
speedball.physics.Moveable = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),speedball.core.Position], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"movement","movement",1777030977),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),speedball.physics.Movement], null)], null)], null);
speedball.physics.init_movement = (function speedball$physics$init_movement(direction,board_dimensions,positionable){
var vec__26370 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(positionable);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26370,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26370,(1),null);
var angle = (speedball.core.direction__GT_angle.cljs$core$IFn$_invoke$arity$1 ? speedball.core.direction__GT_angle.cljs$core$IFn$_invoke$arity$1(direction) : speedball.core.direction__GT_angle.call(null, direction));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(positionable,new cljs.core.Keyword(null,"movement","movement",1777030977),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(speedball.physics.xform((10),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),board_dimensions),speedball.physics.positions.cljs$core$IFn$_invoke$arity$5(x,y,angle,(20),0.2)),new cljs.core.Keyword(null,"frame","frame",-1711082588),(0),new cljs.core.Keyword(null,"length","length",588987862),(5),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));
});
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"speedball.physics","speedball.physics",-2110534554,null),new cljs.core.Symbol(null,"init-movement","init-movement",6212195,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),speedball.core.Direction,speedball.core.Position,speedball.core.Positionable], null),speedball.physics.Moveable], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"speedball/physics.cljs",new cljs.core.Keyword(null,"line","line",212345235),136,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"end-line","end-line",1837326455),136,new cljs.core.Keyword(null,"end-column","end-column",1425389514),21], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

speedball.physics.cancel_movement = (function speedball$physics$cancel_movement(moveable){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(moveable,new cljs.core.Keyword(null,"movement","movement",1777030977),null);
});
speedball.physics.increment_movement = (function speedball$physics$increment_movement(moveable){
if((!((new cljs.core.Keyword(null,"movement","movement",1777030977).cljs$core$IFn$_invoke$arity$1(moveable) == null)))){
var movement = new cljs.core.Keyword(null,"movement","movement",1777030977).cljs$core$IFn$_invoke$arity$1(moveable);
var next_frame = (new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(movement) + (1));
var animation_length = new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(movement);
if((next_frame >= animation_length)){
return speedball.physics.cancel_movement(moveable);
} else {
var new_position = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(movement),next_frame);
return cljs.core.assoc_in(cljs.core.assoc_in(moveable,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"movement","movement",1777030977),new cljs.core.Keyword(null,"frame","frame",-1711082588)], null),next_frame),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),new_position);
}
} else {
return moveable;
}
});
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"speedball.physics","speedball.physics",-2110534554,null),new cljs.core.Symbol(null,"increment-movement","increment-movement",961303666,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),speedball.physics.Moveable], null),speedball.physics.Moveable], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"speedball/physics.cljs",new cljs.core.Keyword(null,"line","line",212345235),154,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"end-column","end-column",1425389514),26], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

speedball.physics.init_movement(new cljs.core.Keyword(null,"southeast","southeast",565965044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(6)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)], null));

//# sourceMappingURL=speedball.physics.js.map
