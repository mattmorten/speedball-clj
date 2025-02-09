goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12582 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12582(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12584 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12584(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11704 = coll;
var G__11705 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11704,G__11705) : shadow.dom.lazy_native_coll_seq.call(null, G__11704,G__11705));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__11733 = arguments.length;
switch (G__11733) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__11735 = arguments.length;
switch (G__11735) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__11744 = arguments.length;
switch (G__11744) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__11747 = arguments.length;
switch (G__11747) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__11755 = arguments.length;
switch (G__11755) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__11768 = arguments.length;
switch (G__11768) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e11771){if((e11771 instanceof Object)){
var e = e11771;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11771;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__11773 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11774 = null;
var count__11775 = (0);
var i__11776 = (0);
while(true){
if((i__11776 < count__11775)){
var el = chunk__11774.cljs$core$IIndexed$_nth$arity$2(null, i__11776);
var handler_12597__$1 = ((function (seq__11773,chunk__11774,count__11775,i__11776,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__11773,chunk__11774,count__11775,i__11776,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12597__$1);


var G__12600 = seq__11773;
var G__12601 = chunk__11774;
var G__12602 = count__11775;
var G__12603 = (i__11776 + (1));
seq__11773 = G__12600;
chunk__11774 = G__12601;
count__11775 = G__12602;
i__11776 = G__12603;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11773);
if(temp__5804__auto__){
var seq__11773__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11773__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11773__$1);
var G__12604 = cljs.core.chunk_rest(seq__11773__$1);
var G__12605 = c__5525__auto__;
var G__12606 = cljs.core.count(c__5525__auto__);
var G__12607 = (0);
seq__11773 = G__12604;
chunk__11774 = G__12605;
count__11775 = G__12606;
i__11776 = G__12607;
continue;
} else {
var el = cljs.core.first(seq__11773__$1);
var handler_12608__$1 = ((function (seq__11773,chunk__11774,count__11775,i__11776,el,seq__11773__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__11773,chunk__11774,count__11775,i__11776,el,seq__11773__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12608__$1);


var G__12611 = cljs.core.next(seq__11773__$1);
var G__12612 = null;
var G__12613 = (0);
var G__12614 = (0);
seq__11773 = G__12611;
chunk__11774 = G__12612;
count__11775 = G__12613;
i__11776 = G__12614;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__11794 = arguments.length;
switch (G__11794) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__11805 = cljs.core.seq(events);
var chunk__11806 = null;
var count__11807 = (0);
var i__11808 = (0);
while(true){
if((i__11808 < count__11807)){
var vec__11815 = chunk__11806.cljs$core$IIndexed$_nth$arity$2(null, i__11808);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11815,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11815,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12617 = seq__11805;
var G__12618 = chunk__11806;
var G__12619 = count__11807;
var G__12620 = (i__11808 + (1));
seq__11805 = G__12617;
chunk__11806 = G__12618;
count__11807 = G__12619;
i__11808 = G__12620;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11805);
if(temp__5804__auto__){
var seq__11805__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11805__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11805__$1);
var G__12621 = cljs.core.chunk_rest(seq__11805__$1);
var G__12622 = c__5525__auto__;
var G__12623 = cljs.core.count(c__5525__auto__);
var G__12624 = (0);
seq__11805 = G__12621;
chunk__11806 = G__12622;
count__11807 = G__12623;
i__11808 = G__12624;
continue;
} else {
var vec__11820 = cljs.core.first(seq__11805__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11820,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11820,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12625 = cljs.core.next(seq__11805__$1);
var G__12626 = null;
var G__12627 = (0);
var G__12628 = (0);
seq__11805 = G__12625;
chunk__11806 = G__12626;
count__11807 = G__12627;
i__11808 = G__12628;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__11823 = cljs.core.seq(styles);
var chunk__11824 = null;
var count__11825 = (0);
var i__11826 = (0);
while(true){
if((i__11826 < count__11825)){
var vec__11843 = chunk__11824.cljs$core$IIndexed$_nth$arity$2(null, i__11826);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11843,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11843,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12629 = seq__11823;
var G__12630 = chunk__11824;
var G__12631 = count__11825;
var G__12632 = (i__11826 + (1));
seq__11823 = G__12629;
chunk__11824 = G__12630;
count__11825 = G__12631;
i__11826 = G__12632;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11823);
if(temp__5804__auto__){
var seq__11823__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11823__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11823__$1);
var G__12633 = cljs.core.chunk_rest(seq__11823__$1);
var G__12634 = c__5525__auto__;
var G__12635 = cljs.core.count(c__5525__auto__);
var G__12636 = (0);
seq__11823 = G__12633;
chunk__11824 = G__12634;
count__11825 = G__12635;
i__11826 = G__12636;
continue;
} else {
var vec__11848 = cljs.core.first(seq__11823__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11848,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11848,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12637 = cljs.core.next(seq__11823__$1);
var G__12638 = null;
var G__12639 = (0);
var G__12640 = (0);
seq__11823 = G__12637;
chunk__11824 = G__12638;
count__11825 = G__12639;
i__11826 = G__12640;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__11851_12645 = key;
var G__11851_12646__$1 = (((G__11851_12645 instanceof cljs.core.Keyword))?G__11851_12645.fqn:null);
switch (G__11851_12646__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_12651 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_12651,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_12651,"aria-");
}
})())){
el.setAttribute(ks_12651,value);
} else {
(el[ks_12651] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__11896){
var map__11897 = p__11896;
var map__11897__$1 = cljs.core.__destructure_map(map__11897);
var props = map__11897__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11897__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__11899 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11899,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11899,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11899,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__11902 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__11902,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__11902;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__11925 = arguments.length;
switch (G__11925) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__11956){
var vec__11957 = p__11956;
var seq__11958 = cljs.core.seq(vec__11957);
var first__11959 = cljs.core.first(seq__11958);
var seq__11958__$1 = cljs.core.next(seq__11958);
var nn = first__11959;
var first__11959__$1 = cljs.core.first(seq__11958__$1);
var seq__11958__$2 = cljs.core.next(seq__11958__$1);
var np = first__11959__$1;
var nc = seq__11958__$2;
var node = vec__11957;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11960 = nn;
var G__11961 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11960,G__11961) : create_fn.call(null, G__11960,G__11961));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11962 = nn;
var G__11963 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11962,G__11963) : create_fn.call(null, G__11962,G__11963));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__11971 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11971,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11971,(1),null);
var seq__11975_12663 = cljs.core.seq(node_children);
var chunk__11976_12664 = null;
var count__11977_12665 = (0);
var i__11978_12666 = (0);
while(true){
if((i__11978_12666 < count__11977_12665)){
var child_struct_12668 = chunk__11976_12664.cljs$core$IIndexed$_nth$arity$2(null, i__11978_12666);
var children_12669 = shadow.dom.dom_node(child_struct_12668);
if(cljs.core.seq_QMARK_(children_12669)){
var seq__11996_12670 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12669));
var chunk__11998_12671 = null;
var count__11999_12672 = (0);
var i__12000_12673 = (0);
while(true){
if((i__12000_12673 < count__11999_12672)){
var child_12675 = chunk__11998_12671.cljs$core$IIndexed$_nth$arity$2(null, i__12000_12673);
if(cljs.core.truth_(child_12675)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12675);


var G__12676 = seq__11996_12670;
var G__12677 = chunk__11998_12671;
var G__12678 = count__11999_12672;
var G__12679 = (i__12000_12673 + (1));
seq__11996_12670 = G__12676;
chunk__11998_12671 = G__12677;
count__11999_12672 = G__12678;
i__12000_12673 = G__12679;
continue;
} else {
var G__12680 = seq__11996_12670;
var G__12681 = chunk__11998_12671;
var G__12682 = count__11999_12672;
var G__12683 = (i__12000_12673 + (1));
seq__11996_12670 = G__12680;
chunk__11998_12671 = G__12681;
count__11999_12672 = G__12682;
i__12000_12673 = G__12683;
continue;
}
} else {
var temp__5804__auto___12684 = cljs.core.seq(seq__11996_12670);
if(temp__5804__auto___12684){
var seq__11996_12685__$1 = temp__5804__auto___12684;
if(cljs.core.chunked_seq_QMARK_(seq__11996_12685__$1)){
var c__5525__auto___12686 = cljs.core.chunk_first(seq__11996_12685__$1);
var G__12687 = cljs.core.chunk_rest(seq__11996_12685__$1);
var G__12688 = c__5525__auto___12686;
var G__12689 = cljs.core.count(c__5525__auto___12686);
var G__12690 = (0);
seq__11996_12670 = G__12687;
chunk__11998_12671 = G__12688;
count__11999_12672 = G__12689;
i__12000_12673 = G__12690;
continue;
} else {
var child_12691 = cljs.core.first(seq__11996_12685__$1);
if(cljs.core.truth_(child_12691)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12691);


var G__12692 = cljs.core.next(seq__11996_12685__$1);
var G__12693 = null;
var G__12694 = (0);
var G__12695 = (0);
seq__11996_12670 = G__12692;
chunk__11998_12671 = G__12693;
count__11999_12672 = G__12694;
i__12000_12673 = G__12695;
continue;
} else {
var G__12696 = cljs.core.next(seq__11996_12685__$1);
var G__12697 = null;
var G__12698 = (0);
var G__12699 = (0);
seq__11996_12670 = G__12696;
chunk__11998_12671 = G__12697;
count__11999_12672 = G__12698;
i__12000_12673 = G__12699;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12669);
}


var G__12700 = seq__11975_12663;
var G__12701 = chunk__11976_12664;
var G__12702 = count__11977_12665;
var G__12703 = (i__11978_12666 + (1));
seq__11975_12663 = G__12700;
chunk__11976_12664 = G__12701;
count__11977_12665 = G__12702;
i__11978_12666 = G__12703;
continue;
} else {
var temp__5804__auto___12704 = cljs.core.seq(seq__11975_12663);
if(temp__5804__auto___12704){
var seq__11975_12705__$1 = temp__5804__auto___12704;
if(cljs.core.chunked_seq_QMARK_(seq__11975_12705__$1)){
var c__5525__auto___12706 = cljs.core.chunk_first(seq__11975_12705__$1);
var G__12708 = cljs.core.chunk_rest(seq__11975_12705__$1);
var G__12709 = c__5525__auto___12706;
var G__12710 = cljs.core.count(c__5525__auto___12706);
var G__12711 = (0);
seq__11975_12663 = G__12708;
chunk__11976_12664 = G__12709;
count__11977_12665 = G__12710;
i__11978_12666 = G__12711;
continue;
} else {
var child_struct_12712 = cljs.core.first(seq__11975_12705__$1);
var children_12713 = shadow.dom.dom_node(child_struct_12712);
if(cljs.core.seq_QMARK_(children_12713)){
var seq__12002_12714 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12713));
var chunk__12004_12715 = null;
var count__12005_12716 = (0);
var i__12006_12717 = (0);
while(true){
if((i__12006_12717 < count__12005_12716)){
var child_12718 = chunk__12004_12715.cljs$core$IIndexed$_nth$arity$2(null, i__12006_12717);
if(cljs.core.truth_(child_12718)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12718);


var G__12719 = seq__12002_12714;
var G__12720 = chunk__12004_12715;
var G__12721 = count__12005_12716;
var G__12722 = (i__12006_12717 + (1));
seq__12002_12714 = G__12719;
chunk__12004_12715 = G__12720;
count__12005_12716 = G__12721;
i__12006_12717 = G__12722;
continue;
} else {
var G__12725 = seq__12002_12714;
var G__12726 = chunk__12004_12715;
var G__12727 = count__12005_12716;
var G__12728 = (i__12006_12717 + (1));
seq__12002_12714 = G__12725;
chunk__12004_12715 = G__12726;
count__12005_12716 = G__12727;
i__12006_12717 = G__12728;
continue;
}
} else {
var temp__5804__auto___12729__$1 = cljs.core.seq(seq__12002_12714);
if(temp__5804__auto___12729__$1){
var seq__12002_12730__$1 = temp__5804__auto___12729__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12002_12730__$1)){
var c__5525__auto___12731 = cljs.core.chunk_first(seq__12002_12730__$1);
var G__12732 = cljs.core.chunk_rest(seq__12002_12730__$1);
var G__12733 = c__5525__auto___12731;
var G__12734 = cljs.core.count(c__5525__auto___12731);
var G__12735 = (0);
seq__12002_12714 = G__12732;
chunk__12004_12715 = G__12733;
count__12005_12716 = G__12734;
i__12006_12717 = G__12735;
continue;
} else {
var child_12738 = cljs.core.first(seq__12002_12730__$1);
if(cljs.core.truth_(child_12738)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12738);


var G__12739 = cljs.core.next(seq__12002_12730__$1);
var G__12740 = null;
var G__12741 = (0);
var G__12742 = (0);
seq__12002_12714 = G__12739;
chunk__12004_12715 = G__12740;
count__12005_12716 = G__12741;
i__12006_12717 = G__12742;
continue;
} else {
var G__12743 = cljs.core.next(seq__12002_12730__$1);
var G__12744 = null;
var G__12745 = (0);
var G__12746 = (0);
seq__12002_12714 = G__12743;
chunk__12004_12715 = G__12744;
count__12005_12716 = G__12745;
i__12006_12717 = G__12746;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12713);
}


var G__12748 = cljs.core.next(seq__11975_12705__$1);
var G__12749 = null;
var G__12750 = (0);
var G__12751 = (0);
seq__11975_12663 = G__12748;
chunk__11976_12664 = G__12749;
count__11977_12665 = G__12750;
i__11978_12666 = G__12751;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__12018 = cljs.core.seq(node);
var chunk__12019 = null;
var count__12020 = (0);
var i__12021 = (0);
while(true){
if((i__12021 < count__12020)){
var n = chunk__12019.cljs$core$IIndexed$_nth$arity$2(null, i__12021);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__12761 = seq__12018;
var G__12762 = chunk__12019;
var G__12763 = count__12020;
var G__12764 = (i__12021 + (1));
seq__12018 = G__12761;
chunk__12019 = G__12762;
count__12020 = G__12763;
i__12021 = G__12764;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12018);
if(temp__5804__auto__){
var seq__12018__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12018__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12018__$1);
var G__12765 = cljs.core.chunk_rest(seq__12018__$1);
var G__12766 = c__5525__auto__;
var G__12767 = cljs.core.count(c__5525__auto__);
var G__12768 = (0);
seq__12018 = G__12765;
chunk__12019 = G__12766;
count__12020 = G__12767;
i__12021 = G__12768;
continue;
} else {
var n = cljs.core.first(seq__12018__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__12769 = cljs.core.next(seq__12018__$1);
var G__12770 = null;
var G__12771 = (0);
var G__12772 = (0);
seq__12018 = G__12769;
chunk__12019 = G__12770;
count__12020 = G__12771;
i__12021 = G__12772;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__12025 = arguments.length;
switch (G__12025) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__12027 = arguments.length;
switch (G__12027) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__12029 = arguments.length;
switch (G__12029) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12782 = arguments.length;
var i__5727__auto___12783 = (0);
while(true){
if((i__5727__auto___12783 < len__5726__auto___12782)){
args__5732__auto__.push((arguments[i__5727__auto___12783]));

var G__12784 = (i__5727__auto___12783 + (1));
i__5727__auto___12783 = G__12784;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12032_12786 = cljs.core.seq(nodes);
var chunk__12033_12787 = null;
var count__12034_12788 = (0);
var i__12035_12789 = (0);
while(true){
if((i__12035_12789 < count__12034_12788)){
var node_12790 = chunk__12033_12787.cljs$core$IIndexed$_nth$arity$2(null, i__12035_12789);
fragment.appendChild(shadow.dom._to_dom(node_12790));


var G__12791 = seq__12032_12786;
var G__12792 = chunk__12033_12787;
var G__12793 = count__12034_12788;
var G__12794 = (i__12035_12789 + (1));
seq__12032_12786 = G__12791;
chunk__12033_12787 = G__12792;
count__12034_12788 = G__12793;
i__12035_12789 = G__12794;
continue;
} else {
var temp__5804__auto___12795 = cljs.core.seq(seq__12032_12786);
if(temp__5804__auto___12795){
var seq__12032_12796__$1 = temp__5804__auto___12795;
if(cljs.core.chunked_seq_QMARK_(seq__12032_12796__$1)){
var c__5525__auto___12797 = cljs.core.chunk_first(seq__12032_12796__$1);
var G__12798 = cljs.core.chunk_rest(seq__12032_12796__$1);
var G__12799 = c__5525__auto___12797;
var G__12800 = cljs.core.count(c__5525__auto___12797);
var G__12801 = (0);
seq__12032_12786 = G__12798;
chunk__12033_12787 = G__12799;
count__12034_12788 = G__12800;
i__12035_12789 = G__12801;
continue;
} else {
var node_12802 = cljs.core.first(seq__12032_12796__$1);
fragment.appendChild(shadow.dom._to_dom(node_12802));


var G__12803 = cljs.core.next(seq__12032_12796__$1);
var G__12804 = null;
var G__12805 = (0);
var G__12806 = (0);
seq__12032_12786 = G__12803;
chunk__12033_12787 = G__12804;
count__12034_12788 = G__12805;
i__12035_12789 = G__12806;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12031){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12031));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12057_12807 = cljs.core.seq(scripts);
var chunk__12058_12808 = null;
var count__12059_12809 = (0);
var i__12060_12810 = (0);
while(true){
if((i__12060_12810 < count__12059_12809)){
var vec__12072_12811 = chunk__12058_12808.cljs$core$IIndexed$_nth$arity$2(null, i__12060_12810);
var script_tag_12812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12072_12811,(0),null);
var script_body_12813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12072_12811,(1),null);
eval(script_body_12813);


var G__12814 = seq__12057_12807;
var G__12815 = chunk__12058_12808;
var G__12816 = count__12059_12809;
var G__12817 = (i__12060_12810 + (1));
seq__12057_12807 = G__12814;
chunk__12058_12808 = G__12815;
count__12059_12809 = G__12816;
i__12060_12810 = G__12817;
continue;
} else {
var temp__5804__auto___12818 = cljs.core.seq(seq__12057_12807);
if(temp__5804__auto___12818){
var seq__12057_12819__$1 = temp__5804__auto___12818;
if(cljs.core.chunked_seq_QMARK_(seq__12057_12819__$1)){
var c__5525__auto___12820 = cljs.core.chunk_first(seq__12057_12819__$1);
var G__12821 = cljs.core.chunk_rest(seq__12057_12819__$1);
var G__12822 = c__5525__auto___12820;
var G__12823 = cljs.core.count(c__5525__auto___12820);
var G__12824 = (0);
seq__12057_12807 = G__12821;
chunk__12058_12808 = G__12822;
count__12059_12809 = G__12823;
i__12060_12810 = G__12824;
continue;
} else {
var vec__12075_12825 = cljs.core.first(seq__12057_12819__$1);
var script_tag_12826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12075_12825,(0),null);
var script_body_12827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12075_12825,(1),null);
eval(script_body_12827);


var G__12828 = cljs.core.next(seq__12057_12819__$1);
var G__12829 = null;
var G__12830 = (0);
var G__12831 = (0);
seq__12057_12807 = G__12828;
chunk__12058_12808 = G__12829;
count__12059_12809 = G__12830;
i__12060_12810 = G__12831;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12078){
var vec__12079 = p__12078;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12079,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12079,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12097 = arguments.length;
switch (G__12097) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12100 = cljs.core.seq(style_keys);
var chunk__12101 = null;
var count__12102 = (0);
var i__12103 = (0);
while(true){
if((i__12103 < count__12102)){
var it = chunk__12101.cljs$core$IIndexed$_nth$arity$2(null, i__12103);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12837 = seq__12100;
var G__12838 = chunk__12101;
var G__12839 = count__12102;
var G__12840 = (i__12103 + (1));
seq__12100 = G__12837;
chunk__12101 = G__12838;
count__12102 = G__12839;
i__12103 = G__12840;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12100);
if(temp__5804__auto__){
var seq__12100__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12100__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12100__$1);
var G__12841 = cljs.core.chunk_rest(seq__12100__$1);
var G__12842 = c__5525__auto__;
var G__12843 = cljs.core.count(c__5525__auto__);
var G__12844 = (0);
seq__12100 = G__12841;
chunk__12101 = G__12842;
count__12102 = G__12843;
i__12103 = G__12844;
continue;
} else {
var it = cljs.core.first(seq__12100__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12846 = cljs.core.next(seq__12100__$1);
var G__12847 = null;
var G__12848 = (0);
var G__12849 = (0);
seq__12100 = G__12846;
chunk__12101 = G__12847;
count__12102 = G__12848;
i__12103 = G__12849;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12106,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12114 = k12106;
var G__12114__$1 = (((G__12114 instanceof cljs.core.Keyword))?G__12114.fqn:null);
switch (G__12114__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12106,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12120){
var vec__12121 = p__12120;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12121,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12121,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12105){
var self__ = this;
var G__12105__$1 = this;
return (new cljs.core.RecordIter((0),G__12105__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12109,other12110){
var self__ = this;
var this12109__$1 = this;
return (((!((other12110 == null)))) && ((((this12109__$1.constructor === other12110.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12109__$1.x,other12110.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12109__$1.y,other12110.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12109__$1.__extmap,other12110.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12106){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12156 = k12106;
var G__12156__$1 = (((G__12156 instanceof cljs.core.Keyword))?G__12156.fqn:null);
switch (G__12156__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12106);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12105){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12159 = cljs.core.keyword_identical_QMARK_;
var expr__12160 = k__5309__auto__;
if(cljs.core.truth_((pred__12159.cljs$core$IFn$_invoke$arity$2 ? pred__12159.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12160) : pred__12159.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__12160)))){
return (new shadow.dom.Coordinate(G__12105,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12159.cljs$core$IFn$_invoke$arity$2 ? pred__12159.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12160) : pred__12159.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__12160)))){
return (new shadow.dom.Coordinate(self__.x,G__12105,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12105),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12105){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12105,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12112){
var extmap__5342__auto__ = (function (){var G__12167 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12112,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12112)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12167);
} else {
return G__12167;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12112),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12112),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12197,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12229 = k12197;
var G__12229__$1 = (((G__12229 instanceof cljs.core.Keyword))?G__12229.fqn:null);
switch (G__12229__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12197,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12233){
var vec__12235 = p__12233;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12235,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12235,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12196){
var self__ = this;
var G__12196__$1 = this;
return (new cljs.core.RecordIter((0),G__12196__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12198,other12199){
var self__ = this;
var this12198__$1 = this;
return (((!((other12199 == null)))) && ((((this12198__$1.constructor === other12199.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12198__$1.w,other12199.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12198__$1.h,other12199.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12198__$1.__extmap,other12199.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12197){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12273 = k12197;
var G__12273__$1 = (((G__12273 instanceof cljs.core.Keyword))?G__12273.fqn:null);
switch (G__12273__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12197);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12196){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12278 = cljs.core.keyword_identical_QMARK_;
var expr__12279 = k__5309__auto__;
if(cljs.core.truth_((pred__12278.cljs$core$IFn$_invoke$arity$2 ? pred__12278.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12279) : pred__12278.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__12279)))){
return (new shadow.dom.Size(G__12196,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12278.cljs$core$IFn$_invoke$arity$2 ? pred__12278.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12279) : pred__12278.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__12279)))){
return (new shadow.dom.Size(self__.w,G__12196,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12196),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12196){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12196,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12223){
var extmap__5342__auto__ = (function (){var G__12282 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12223,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12223)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12282);
} else {
return G__12282;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12223),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12223),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__12907 = (i + (1));
var G__12908 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__12907;
ret = G__12908;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12359){
var vec__12360 = p__12359;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12360,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12360,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12375 = arguments.length;
switch (G__12375) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__12913 = ps;
var G__12914 = (i + (1));
el__$1 = G__12913;
i = G__12914;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12454 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12454,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12454,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12454,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12462_12917 = cljs.core.seq(props);
var chunk__12463_12918 = null;
var count__12464_12919 = (0);
var i__12465_12920 = (0);
while(true){
if((i__12465_12920 < count__12464_12919)){
var vec__12484_12921 = chunk__12463_12918.cljs$core$IIndexed$_nth$arity$2(null, i__12465_12920);
var k_12922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12484_12921,(0),null);
var v_12923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12484_12921,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_12922);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12922),v_12923);


var G__12924 = seq__12462_12917;
var G__12925 = chunk__12463_12918;
var G__12926 = count__12464_12919;
var G__12927 = (i__12465_12920 + (1));
seq__12462_12917 = G__12924;
chunk__12463_12918 = G__12925;
count__12464_12919 = G__12926;
i__12465_12920 = G__12927;
continue;
} else {
var temp__5804__auto___12928 = cljs.core.seq(seq__12462_12917);
if(temp__5804__auto___12928){
var seq__12462_12929__$1 = temp__5804__auto___12928;
if(cljs.core.chunked_seq_QMARK_(seq__12462_12929__$1)){
var c__5525__auto___12930 = cljs.core.chunk_first(seq__12462_12929__$1);
var G__12931 = cljs.core.chunk_rest(seq__12462_12929__$1);
var G__12932 = c__5525__auto___12930;
var G__12933 = cljs.core.count(c__5525__auto___12930);
var G__12934 = (0);
seq__12462_12917 = G__12931;
chunk__12463_12918 = G__12932;
count__12464_12919 = G__12933;
i__12465_12920 = G__12934;
continue;
} else {
var vec__12491_12935 = cljs.core.first(seq__12462_12929__$1);
var k_12936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12491_12935,(0),null);
var v_12937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12491_12935,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_12936);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12936),v_12937);


var G__12938 = cljs.core.next(seq__12462_12929__$1);
var G__12939 = null;
var G__12940 = (0);
var G__12941 = (0);
seq__12462_12917 = G__12938;
chunk__12463_12918 = G__12939;
count__12464_12919 = G__12940;
i__12465_12920 = G__12941;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12528 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12528,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12528,(1),null);
var seq__12533_12944 = cljs.core.seq(node_children);
var chunk__12535_12945 = null;
var count__12536_12946 = (0);
var i__12537_12947 = (0);
while(true){
if((i__12537_12947 < count__12536_12946)){
var child_struct_12948 = chunk__12535_12945.cljs$core$IIndexed$_nth$arity$2(null, i__12537_12947);
if((!((child_struct_12948 == null)))){
if(typeof child_struct_12948 === 'string'){
var text_12949 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_12949),child_struct_12948].join(''));
} else {
var children_12951 = shadow.dom.svg_node(child_struct_12948);
if(cljs.core.seq_QMARK_(children_12951)){
var seq__12555_12953 = cljs.core.seq(children_12951);
var chunk__12557_12954 = null;
var count__12558_12955 = (0);
var i__12559_12956 = (0);
while(true){
if((i__12559_12956 < count__12558_12955)){
var child_12957 = chunk__12557_12954.cljs$core$IIndexed$_nth$arity$2(null, i__12559_12956);
if(cljs.core.truth_(child_12957)){
node.appendChild(child_12957);


var G__12958 = seq__12555_12953;
var G__12959 = chunk__12557_12954;
var G__12960 = count__12558_12955;
var G__12961 = (i__12559_12956 + (1));
seq__12555_12953 = G__12958;
chunk__12557_12954 = G__12959;
count__12558_12955 = G__12960;
i__12559_12956 = G__12961;
continue;
} else {
var G__12963 = seq__12555_12953;
var G__12964 = chunk__12557_12954;
var G__12965 = count__12558_12955;
var G__12966 = (i__12559_12956 + (1));
seq__12555_12953 = G__12963;
chunk__12557_12954 = G__12964;
count__12558_12955 = G__12965;
i__12559_12956 = G__12966;
continue;
}
} else {
var temp__5804__auto___12968 = cljs.core.seq(seq__12555_12953);
if(temp__5804__auto___12968){
var seq__12555_12969__$1 = temp__5804__auto___12968;
if(cljs.core.chunked_seq_QMARK_(seq__12555_12969__$1)){
var c__5525__auto___12970 = cljs.core.chunk_first(seq__12555_12969__$1);
var G__12972 = cljs.core.chunk_rest(seq__12555_12969__$1);
var G__12973 = c__5525__auto___12970;
var G__12974 = cljs.core.count(c__5525__auto___12970);
var G__12975 = (0);
seq__12555_12953 = G__12972;
chunk__12557_12954 = G__12973;
count__12558_12955 = G__12974;
i__12559_12956 = G__12975;
continue;
} else {
var child_12976 = cljs.core.first(seq__12555_12969__$1);
if(cljs.core.truth_(child_12976)){
node.appendChild(child_12976);


var G__12977 = cljs.core.next(seq__12555_12969__$1);
var G__12978 = null;
var G__12979 = (0);
var G__12980 = (0);
seq__12555_12953 = G__12977;
chunk__12557_12954 = G__12978;
count__12558_12955 = G__12979;
i__12559_12956 = G__12980;
continue;
} else {
var G__12981 = cljs.core.next(seq__12555_12969__$1);
var G__12982 = null;
var G__12983 = (0);
var G__12984 = (0);
seq__12555_12953 = G__12981;
chunk__12557_12954 = G__12982;
count__12558_12955 = G__12983;
i__12559_12956 = G__12984;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_12951);
}
}


var G__12985 = seq__12533_12944;
var G__12986 = chunk__12535_12945;
var G__12987 = count__12536_12946;
var G__12988 = (i__12537_12947 + (1));
seq__12533_12944 = G__12985;
chunk__12535_12945 = G__12986;
count__12536_12946 = G__12987;
i__12537_12947 = G__12988;
continue;
} else {
var G__12989 = seq__12533_12944;
var G__12990 = chunk__12535_12945;
var G__12991 = count__12536_12946;
var G__12992 = (i__12537_12947 + (1));
seq__12533_12944 = G__12989;
chunk__12535_12945 = G__12990;
count__12536_12946 = G__12991;
i__12537_12947 = G__12992;
continue;
}
} else {
var temp__5804__auto___12993 = cljs.core.seq(seq__12533_12944);
if(temp__5804__auto___12993){
var seq__12533_12994__$1 = temp__5804__auto___12993;
if(cljs.core.chunked_seq_QMARK_(seq__12533_12994__$1)){
var c__5525__auto___12995 = cljs.core.chunk_first(seq__12533_12994__$1);
var G__12996 = cljs.core.chunk_rest(seq__12533_12994__$1);
var G__12997 = c__5525__auto___12995;
var G__12998 = cljs.core.count(c__5525__auto___12995);
var G__12999 = (0);
seq__12533_12944 = G__12996;
chunk__12535_12945 = G__12997;
count__12536_12946 = G__12998;
i__12537_12947 = G__12999;
continue;
} else {
var child_struct_13000 = cljs.core.first(seq__12533_12994__$1);
if((!((child_struct_13000 == null)))){
if(typeof child_struct_13000 === 'string'){
var text_13002 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13002),child_struct_13000].join(''));
} else {
var children_13003 = shadow.dom.svg_node(child_struct_13000);
if(cljs.core.seq_QMARK_(children_13003)){
var seq__12565_13004 = cljs.core.seq(children_13003);
var chunk__12567_13005 = null;
var count__12568_13006 = (0);
var i__12569_13007 = (0);
while(true){
if((i__12569_13007 < count__12568_13006)){
var child_13008 = chunk__12567_13005.cljs$core$IIndexed$_nth$arity$2(null, i__12569_13007);
if(cljs.core.truth_(child_13008)){
node.appendChild(child_13008);


var G__13010 = seq__12565_13004;
var G__13011 = chunk__12567_13005;
var G__13012 = count__12568_13006;
var G__13013 = (i__12569_13007 + (1));
seq__12565_13004 = G__13010;
chunk__12567_13005 = G__13011;
count__12568_13006 = G__13012;
i__12569_13007 = G__13013;
continue;
} else {
var G__13014 = seq__12565_13004;
var G__13015 = chunk__12567_13005;
var G__13016 = count__12568_13006;
var G__13017 = (i__12569_13007 + (1));
seq__12565_13004 = G__13014;
chunk__12567_13005 = G__13015;
count__12568_13006 = G__13016;
i__12569_13007 = G__13017;
continue;
}
} else {
var temp__5804__auto___13018__$1 = cljs.core.seq(seq__12565_13004);
if(temp__5804__auto___13018__$1){
var seq__12565_13019__$1 = temp__5804__auto___13018__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12565_13019__$1)){
var c__5525__auto___13020 = cljs.core.chunk_first(seq__12565_13019__$1);
var G__13021 = cljs.core.chunk_rest(seq__12565_13019__$1);
var G__13022 = c__5525__auto___13020;
var G__13023 = cljs.core.count(c__5525__auto___13020);
var G__13024 = (0);
seq__12565_13004 = G__13021;
chunk__12567_13005 = G__13022;
count__12568_13006 = G__13023;
i__12569_13007 = G__13024;
continue;
} else {
var child_13025 = cljs.core.first(seq__12565_13019__$1);
if(cljs.core.truth_(child_13025)){
node.appendChild(child_13025);


var G__13026 = cljs.core.next(seq__12565_13019__$1);
var G__13027 = null;
var G__13028 = (0);
var G__13029 = (0);
seq__12565_13004 = G__13026;
chunk__12567_13005 = G__13027;
count__12568_13006 = G__13028;
i__12569_13007 = G__13029;
continue;
} else {
var G__13030 = cljs.core.next(seq__12565_13019__$1);
var G__13031 = null;
var G__13032 = (0);
var G__13033 = (0);
seq__12565_13004 = G__13030;
chunk__12567_13005 = G__13031;
count__12568_13006 = G__13032;
i__12569_13007 = G__13033;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13003);
}
}


var G__13035 = cljs.core.next(seq__12533_12994__$1);
var G__13036 = null;
var G__13037 = (0);
var G__13038 = (0);
seq__12533_12944 = G__13035;
chunk__12535_12945 = G__13036;
count__12536_12946 = G__13037;
i__12537_12947 = G__13038;
continue;
} else {
var G__13039 = cljs.core.next(seq__12533_12994__$1);
var G__13040 = null;
var G__13041 = (0);
var G__13042 = (0);
seq__12533_12944 = G__13039;
chunk__12535_12945 = G__13040;
count__12536_12946 = G__13041;
i__12537_12947 = G__13042;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13054 = arguments.length;
var i__5727__auto___13056 = (0);
while(true){
if((i__5727__auto___13056 < len__5726__auto___13054)){
args__5732__auto__.push((arguments[i__5727__auto___13056]));

var G__13057 = (i__5727__auto___13056 + (1));
i__5727__auto___13056 = G__13057;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12579){
var G__12580 = cljs.core.first(seq12579);
var seq12579__$1 = cljs.core.next(seq12579);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12580,seq12579__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
