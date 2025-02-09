goog.provide('speedball.board');
malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$0();
malli.core.function_schemas.cljs$core$IFn$_invoke$arity$0();
speedball.board.board_size = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(60),(80)], null);
speedball.board.center = (function speedball$board$center(){
var vec__26324 = speedball.board.board_size;
var board_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26324,(0),null);
var board_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26324,(1),null);
var center_x = (Math.floor((board_x / (2))) | (0));
var center_y = (Math.floor((board_y / (2))) | (0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,center_y], null);
});
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"speedball.board","speedball.board",1833444164,null),new cljs.core.Symbol(null,"center","center",891587159,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207)], null),speedball.core.Position], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"speedball/board.cljs",new cljs.core.Keyword(null,"line","line",212345235),17,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"end-line","end-line",1837326455),17,new cljs.core.Keyword(null,"end-column","end-column",1425389514),14], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

speedball.board.player_tile = (function speedball$board$player_tile(i){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.Keyword(null,"3","3",2097825370),new cljs.core.Keyword(null,"4","4",-1197948085),new cljs.core.Keyword(null,"5","5",538911032)], null),i);
});
speedball.board.player_tile_holding_ball = (function speedball$board$player_tile_holding_ball(i){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!","!",-311249637),new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.Keyword(null,"#","#",-275793773),new cljs.core.Keyword(null,"$","$",1073688013),new cljs.core.Keyword(null,"%","%",1704198600)], null),i);
});
speedball.board.is_empty_QMARK_ = (function speedball$board$is_empty_QMARK_(tile){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tile,new cljs.core.Keyword(null,".",".",335144435))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tile,new cljs.core.Keyword(null,"*","*",-1294732318))));
});
speedball.board.is_goal_tile_QMARK_ = (function speedball$board$is_goal_tile_QMARK_(tile){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tile,new cljs.core.Keyword(null,"*","*",-1294732318));
});
speedball.board.first_row_QMARK_ = (function speedball$board$first_row_QMARK_(i){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0));
});
speedball.board.last_row_QMARK_ = (function speedball$board$last_row_QMARK_(i){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(cljs.core.first(speedball.board.board_size) - (1)));
});
speedball.board.first_col_QMARK_ = (function speedball$board$first_col_QMARK_(i){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0));
});
speedball.board.last_col_QMARK_ = (function speedball$board$last_col_QMARK_(i){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(cljs.core.second(speedball.board.board_size) - (1)));
});
speedball.board.goal_col_QMARK_ = (function speedball$board$goal_col_QMARK_(i){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,((cljs.core.second(speedball.board.board_size) / (2)) - (1)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(cljs.core.second(speedball.board.board_size) / (2)))));
});
speedball.board.generate_walls = (function speedball$board$generate_walls(){
return cljs.core.vec((function (){var iter__5480__auto__ = (function speedball$board$generate_walls_$_iter__26334(s__26335){
return (new cljs.core.LazySeq(null,(function (){
var s__26335__$1 = s__26335;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__26335__$1);
if(temp__5804__auto__){
var s__26335__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26335__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__26335__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__26337 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__26336 = (0);
while(true){
if((i__26336 < size__5479__auto__)){
var i = cljs.core._nth(c__5478__auto__,i__26336);
cljs.core.chunk_append(b__26337,cljs.core.vec((function (){var iter__5480__auto__ = ((function (i__26336,i,c__5478__auto__,size__5479__auto__,b__26337,s__26335__$2,temp__5804__auto__){
return (function speedball$board$generate_walls_$_iter__26334_$_iter__26342(s__26343){
return (new cljs.core.LazySeq(null,((function (i__26336,i,c__5478__auto__,size__5479__auto__,b__26337,s__26335__$2,temp__5804__auto__){
return (function (){
var s__26343__$1 = s__26343;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__26343__$1);
if(temp__5804__auto____$1){
var s__26343__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26343__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__26343__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__26345 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__26344 = (0);
while(true){
if((i__26344 < size__5479__auto____$1)){
var j = cljs.core._nth(c__5478__auto____$1,i__26344);
cljs.core.chunk_append(b__26345,((((speedball.board.first_row_QMARK_(i)) && (speedball.board.goal_col_QMARK_(j))))?new cljs.core.Keyword(null,"*","*",-1294732318):((((speedball.board.last_row_QMARK_(i)) && (speedball.board.goal_col_QMARK_(j))))?new cljs.core.Keyword(null,"*","*",-1294732318):((speedball.board.first_row_QMARK_(i))?new cljs.core.Keyword(null,"n","n",562130025):((speedball.board.last_row_QMARK_(i))?new cljs.core.Keyword(null,"s","s",1705939918):((speedball.board.first_col_QMARK_(j))?new cljs.core.Keyword(null,"e","e",1381269198):((speedball.board.last_col_QMARK_(j))?new cljs.core.Keyword(null,"w","w",354169001):new cljs.core.Keyword(null,".",".",335144435)
)))))));

var G__26373 = (i__26344 + (1));
i__26344 = G__26373;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26345),speedball$board$generate_walls_$_iter__26334_$_iter__26342(cljs.core.chunk_rest(s__26343__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26345),null);
}
} else {
var j = cljs.core.first(s__26343__$2);
return cljs.core.cons(((((speedball.board.first_row_QMARK_(i)) && (speedball.board.goal_col_QMARK_(j))))?new cljs.core.Keyword(null,"*","*",-1294732318):((((speedball.board.last_row_QMARK_(i)) && (speedball.board.goal_col_QMARK_(j))))?new cljs.core.Keyword(null,"*","*",-1294732318):((speedball.board.first_row_QMARK_(i))?new cljs.core.Keyword(null,"n","n",562130025):((speedball.board.last_row_QMARK_(i))?new cljs.core.Keyword(null,"s","s",1705939918):((speedball.board.first_col_QMARK_(j))?new cljs.core.Keyword(null,"e","e",1381269198):((speedball.board.last_col_QMARK_(j))?new cljs.core.Keyword(null,"w","w",354169001):new cljs.core.Keyword(null,".",".",335144435)
)))))),speedball$board$generate_walls_$_iter__26334_$_iter__26342(cljs.core.rest(s__26343__$2)));
}
} else {
return null;
}
break;
}
});})(i__26336,i,c__5478__auto__,size__5479__auto__,b__26337,s__26335__$2,temp__5804__auto__))
,null,null));
});})(i__26336,i,c__5478__auto__,size__5479__auto__,b__26337,s__26335__$2,temp__5804__auto__))
;
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.second(speedball.board.board_size)));
})()));

var G__26374 = (i__26336 + (1));
i__26336 = G__26374;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26337),speedball$board$generate_walls_$_iter__26334(cljs.core.chunk_rest(s__26335__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26337),null);
}
} else {
var i = cljs.core.first(s__26335__$2);
return cljs.core.cons(cljs.core.vec((function (){var iter__5480__auto__ = ((function (i,s__26335__$2,temp__5804__auto__){
return (function speedball$board$generate_walls_$_iter__26334_$_iter__26347(s__26348){
return (new cljs.core.LazySeq(null,(function (){
var s__26348__$1 = s__26348;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__26348__$1);
if(temp__5804__auto____$1){
var s__26348__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26348__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__26348__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__26350 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__26349 = (0);
while(true){
if((i__26349 < size__5479__auto__)){
var j = cljs.core._nth(c__5478__auto__,i__26349);
cljs.core.chunk_append(b__26350,((((speedball.board.first_row_QMARK_(i)) && (speedball.board.goal_col_QMARK_(j))))?new cljs.core.Keyword(null,"*","*",-1294732318):((((speedball.board.last_row_QMARK_(i)) && (speedball.board.goal_col_QMARK_(j))))?new cljs.core.Keyword(null,"*","*",-1294732318):((speedball.board.first_row_QMARK_(i))?new cljs.core.Keyword(null,"n","n",562130025):((speedball.board.last_row_QMARK_(i))?new cljs.core.Keyword(null,"s","s",1705939918):((speedball.board.first_col_QMARK_(j))?new cljs.core.Keyword(null,"e","e",1381269198):((speedball.board.last_col_QMARK_(j))?new cljs.core.Keyword(null,"w","w",354169001):new cljs.core.Keyword(null,".",".",335144435)
)))))));

var G__26375 = (i__26349 + (1));
i__26349 = G__26375;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26350),speedball$board$generate_walls_$_iter__26334_$_iter__26347(cljs.core.chunk_rest(s__26348__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26350),null);
}
} else {
var j = cljs.core.first(s__26348__$2);
return cljs.core.cons(((((speedball.board.first_row_QMARK_(i)) && (speedball.board.goal_col_QMARK_(j))))?new cljs.core.Keyword(null,"*","*",-1294732318):((((speedball.board.last_row_QMARK_(i)) && (speedball.board.goal_col_QMARK_(j))))?new cljs.core.Keyword(null,"*","*",-1294732318):((speedball.board.first_row_QMARK_(i))?new cljs.core.Keyword(null,"n","n",562130025):((speedball.board.last_row_QMARK_(i))?new cljs.core.Keyword(null,"s","s",1705939918):((speedball.board.first_col_QMARK_(j))?new cljs.core.Keyword(null,"e","e",1381269198):((speedball.board.last_col_QMARK_(j))?new cljs.core.Keyword(null,"w","w",354169001):new cljs.core.Keyword(null,".",".",335144435)
)))))),speedball$board$generate_walls_$_iter__26334_$_iter__26347(cljs.core.rest(s__26348__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(i,s__26335__$2,temp__5804__auto__))
;
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.second(speedball.board.board_size)));
})()),speedball$board$generate_walls_$_iter__26334(cljs.core.rest(s__26335__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.first(speedball.board.board_size)));
})());
});
speedball.board.Tile = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyword","keyword",811389747)], null);
speedball.board.Row = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),speedball.board.Tile], null);
speedball.board.Board = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),speedball.board.Row], null);
speedball.board.generate_board = (function speedball$board$generate_board(){
return speedball.board.generate_walls();
});
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"speedball.board","speedball.board",1833444164,null),new cljs.core.Symbol(null,"generate-board","generate-board",-539397753,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207)], null),speedball.board.Board], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"speedball/board.cljs",new cljs.core.Keyword(null,"line","line",212345235),58,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"end-line","end-line",1837326455),58,new cljs.core.Keyword(null,"end-column","end-column",1425389514),22], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

speedball.board.tile_at = (function speedball$board$tile_at(board,position){
var vec__26367 = position;
var position_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26367,(0),null);
var position_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26367,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,position_y),position_x);
});
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"speedball.board","speedball.board",1833444164,null),new cljs.core.Symbol(null,"tile-at","tile-at",-148439859,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),speedball.board.Board,speedball.core.Position], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),speedball.board.Tile], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"speedball/board.cljs",new cljs.core.Keyword(null,"line","line",212345235),64,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"end-line","end-line",1837326455),64,new cljs.core.Keyword(null,"end-column","end-column",1425389514),15], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

speedball.board.empty_at_QMARK_ = (function speedball$board$empty_at_QMARK_(board,position){
return speedball.board.is_empty_QMARK_(speedball.board.tile_at(board,position));
});
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"speedball.board","speedball.board",1833444164,null),new cljs.core.Symbol(null,"empty-at?","empty-at?",-1385833637,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),speedball.board.Board,speedball.core.Position], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"speedball/board.cljs",new cljs.core.Keyword(null,"line","line",212345235),68,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"end-line","end-line",1837326455),68,new cljs.core.Keyword(null,"end-column","end-column",1425389514),17], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

speedball.board.valid_position_QMARK_ = (function speedball$board$valid_position_QMARK_(player_position,board){
return speedball.board.empty_at_QMARK_(board,player_position);
});
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"speedball.board","speedball.board",1833444164,null),new cljs.core.Symbol(null,"valid-position?","valid-position?",466657434,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),speedball.core.Position,speedball.board.Board], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"speedball/board.cljs",new cljs.core.Keyword(null,"line","line",212345235),72,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"end-line","end-line",1837326455),72,new cljs.core.Keyword(null,"end-column","end-column",1425389514),23], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);


//# sourceMappingURL=speedball.board.js.map
