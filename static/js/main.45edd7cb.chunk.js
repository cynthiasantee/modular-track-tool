(window["webpackJsonpfilter-search"]=window["webpackJsonpfilter-search"]||[]).push([[0],{14:function(e,a,i){e.exports=i(26)},19:function(e,a,i){},20:function(e,a,i){},26:function(e,a,i){"use strict";i.r(a);var n=i(0),t=i.n(n),s=i(9),g=i.n(s),r=(i(19),i(2)),m=i(7),o=i(1),l=(i(20),o.a.input.withConfig({displayName:"SearchBox__Input",componentId:"p9ikrs-0"})(["border:black;height:30px;width:160px;font-size:20px;color:#191919;"])),p=function(e){var a=e.searchChange;return t.a.createElement("div",null,t.a.createElement(l,{type:"search",placeholder:"search image",onChange:a}))},h=i(6),c=o.a.div.withConfig({displayName:"Card__Container",componentId:"sc-1t9yyw-0"})(["display:flex;flex-direction:column;align-items:center;flex-wrap:wrap;width:400px;height:200px;margin:5px;border:1px solid gray;"]),d=o.a.div.withConfig({displayName:"Card__ImageContainer",componentId:"sc-1t9yyw-1"})(["flex:1;display:flex;align-items:center;justify-content:center;height:151px;width:380px;"]),f=o.a.img.withConfig({displayName:"Card__Image",componentId:"sc-1t9yyw-2"})(["display:flex;max-width:100%;max-height:100%;"]),C=o.a.p.withConfig({displayName:"Card__Name",componentId:"sc-1t9yyw-3"})(["text-align:center;margin:0px;font-weight:bold;font-size:25px;color:#C2C2C2;"]),S=function(e){var a=e.image,i=e.name;return t.a.createElement(c,null,t.a.createElement(d,null,t.a.createElement(f,{src:a})),t.a.createElement(C,null,i))},u=o.a.div.withConfig({displayName:"CardList__Container",componentId:"sc-1mjdmov-0"})(["display:flex;flex-wrap:wrap;flex-direction:row;justify-content:space-around;margin-left:190px;"]),P=function(e){var a=e.list;return t.a.createElement(u,null,a.map((function(e){return t.a.createElement(S,{image:e.image,name:e.name})})))},X=o.a.div.withConfig({displayName:"Checkbox__Container",componentId:"cn6kms-0"})(["display:flex;flex-direction:row;padding-bottom:15px;align items:center;"]),B=o.a.input.withConfig({displayName:"Checkbox__Input",componentId:"cn6kms-1"})([""]),k=o.a.p.withConfig({displayName:"Checkbox__P",componentId:"cn6kms-2"})(["margin:0px;color:#C2C2C2;font-size:20px;margin-left:5px;"]),M=function(e){var a=e.tagName,i=e.checkedTags,n=e.onBoxClick;return t.a.createElement(X,null,t.a.createElement(B,{type:"checkbox",defaultChecked:i,onClick:function(){return n(a)}}),t.a.createElement(k,null,a))},w=o.a.div.withConfig({displayName:"CheckboxList__Container",componentId:"sc-1mky559-0"})([""]),y=function(e){var a=e.taglist,i=e.checkedTags,n=e.onBoxClick;return t.a.createElement(w,null,a.map((function(e){return t.a.createElement(M,{tagName:e,checkedTags:i.includes(e),onBoxClick:n})})))};var x=o.a.div.withConfig({displayName:"App__AppContainer",componentId:"sc-11v7oht-0"})(["background-color:#212121;display:flex;flex-direction:column;min-height:100vh;"]),A=o.a.div.withConfig({displayName:"App__SearchBoxContainer",componentId:"sc-11v7oht-1"})(["display:flex;justify-content:center;align-items:center;padding:10px;"]),G=o.a.div.withConfig({displayName:"App__CheckboxAndCardContainer",componentId:"sc-11v7oht-2"})(["display:flex;flex-direction:row;"]),b=o.a.div.withConfig({displayName:"App__CheckboxContainer",componentId:"sc-11v7oht-3"})(["margin-left:5px;overflow:scroll;height:100vh;position:fixed;padding-right:10px;"]),W=o.a.div.withConfig({displayName:"App__CardContainer",componentId:"sc-11v7oht-4"})(["display:flex;flex-wrap:wrap;flex-direction:row;height:fit-content;"]),v=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),i=a[0],s=a[1],g=Object(n.useState)([]),o=Object(m.a)(g,2),l=o[0],c=o[1];Object(n.useEffect)((function(){console.log(l)}),[l]);var d=Array.from(new Set(h.map((function(e){return[e.tags]})).flat().reduce((function(e,a){return[].concat(Object(r.a)(e),Object(r.a)(a))}),[]).sort())),f=h.filter((function(e){return console.log(e.name,e.tags),e.name.includes(i)&&(e.tags.some((function(e){return l.includes(e)}))||0===l.length)}));return t.a.createElement(x,null,t.a.createElement(A,null,t.a.createElement(p,{searchChange:function(e){s(e.target.value)}})),t.a.createElement(G,null,t.a.createElement(b,null,t.a.createElement(y,{taglist:d,checkedTags:l,onBoxClick:function(e){l.includes(e)?c(l.filter((function(a){return a!==e}))):c([].concat(Object(r.a)(l),[e]))}})),t.a.createElement(W,null,t.a.createElement(P,{list:f}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));g.a.render(t.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e){e.exports=JSON.parse('[{"image":"images/0-1.png","name":"0-1","tags":["Fire Cannon","Fire Spitter","XP Chest","Spikes","Corridor"]},{"image":"images/0-2f.png","name":"0-2","tags":["Zombie","XP Chest","Green Platform","Magic Shield","Spikes","Door","Button","Abyss"]},{"image":"images/0-3f.png","name":"0-3","tags":["Magic Shield","Shock Agent","Door","Button","XP Chest","Abyss"]},{"image":"images/0-4f.png","name":"0-4","tags":["Magic Shield","Spikes","XP Chest"]},{"image":"images/0-5f.png","name":"0-5","tags":["Magic Shield","XP Chest","Door","Button","Fire Cannon","Spikes"]},{"image":"images/0-6f.png","name":"0-6","tags":["XP Chest","Magic Shield","Stairs"]},{"image":"images/0-7f.png","name":"0-7","tags":["Breakable Wall","Magic Shield","XP Chest","Spikes"]},{"image":"images/0-8f.png","name":"0-8","tags":["XP Chest","Magic Shield","Spikes"]},{"image":"images/0-9f.png","name":"0-9","tags":["Magic Shield","XP Chest","Spikes","Stairs"]},{"image":"images/0-10.png","name":"0-10","tags":["Fire Spitter","Door","Button","Spikes","XP Chest"]},{"image":"images/0-11f.png","name":"0-11","tags":["Stairs","Magic Shield","Breakable Wall","Fire Spitter","Door","Button","XP Chest"]},{"image":"images/0-12f.png","name":"0-12","tags":["Abyss","Fire Spitter","Green Platform","Spikes","Door","Button","Breakable Floor","XP Chest"]},{"image":"images/0-13f.png","name":"0-13","tags":["Corridor","Green Platform","Magic Shield","XP Chest"]},{"image":"images/0-14f.png","name":"0-14","tags":["Fire Cannon","Magic Shield","Green Platform","Spikes","Stairs","XP Chest","Corridor"]},{"image":"images/0-15f.png","name":"0-15","tags":["Magic Shield","XP Chest","Spiders","Corridor"]},{"image":"images/0-16f.png","name":"0-16","tags":["Spiders","Magic Shield","Abyss","Spikes","Button","Door","XP Chest"]},{"image":"images/0-17f.png","name":"0-17","tags":["Magic Shield","Spikes","XP Chest","Breakable Floor","Spiders","Corridor"]},{"image":"images/0-18f.png","name":"0-18","tags":["Fake Wall","Magic Shield","XP Chest","Breakable Wall"]},{"image":"images/0-19f.png","name":"0-19","tags":["Boss","Vulkling","Lava","XP Chest"]},{"image":"images/0-20f.png","name":"0-20","tags":["Boss","Armadillo","Wild","Grass","XP Chest"]},{"image":"images/0-21f.png","name":"0-21","tags":["Boss","Ape Skeleton","Wild","Grass","XP Chest","Tree"]},{"image":"images/1-1f.png","name":"1-1","tags":["Lava","Spikes","XP Chest","Fire Ball","Magic Shield"]},{"image":"images/1-2.png","name":"1-2","tags":["Lava","Fire Ball","Magic Shield","XP Chest","Green Platform"]},{"image":"images/1-3f.png","name":"1-3","tags":["Magic Shield","Green Platform","Button","Crate","XP Chest"]},{"image":"images/1-4.png","name":"1-4","tags":["Door","Button","Necromancer","Magic Shield","XP Chest"]},{"image":"images/1-5f.png","name":"1-5","tags":["Abyss","Magic Shield","Green Platform","XP Chest","Spikes"]},{"image":"images/1-6.png","name":"1-6","tags":["Spikes","Saw"]},{"image":"images/1-7.png","name":"1-7","tags":["Fire Cannon","Spikes","Saw","Fire Spitter","XP Chest","Magic Shield"]},{"image":"images/1-8f.png","name":"1-8","tags":["Saw","Green Platform","Magic Shield","XP Chest"]},{"image":"images/1-9.png","name":"1-9","tags":["XP Chest","Magic Shield","Breakable Wall","Saw","Necromancer"]},{"image":"images/1-10.png","name":"1-10","tags":["Lava","Fire Ball","Necromancer","XP Chest","Magic Shield","Breakable Wall"]},{"image":"images/1-11f.png","name":"1-11","tags":["Lava","Door","Button","Abyss","Green Platform","Magic Shield","XP Chest"]},{"image":"images/1-12f.png","name":"1-12","tags":["Abyss","Saw","Green Platform","Fire Cannon","Spikes","XP Chest"]},{"image":"images/1-13f.png","name":"1-13","tags":["Falling Stonehead","Spikes","XP Chest"]},{"image":"images/1-14f.png","name":"1-14","tags":["Boss","Armadillo","Green Platform","Grass","Wild"]},{"image":"images/1-15f.png","name":"1-15","tags":["Spider Queen","Spiders","XP Chest","Boss"]},{"image":"images/1-16f.png","name":"1-16","tags":["Abyss","Venomous Gorgon","Magic Shield","XP Chest"]},{"image":"images/1-17f.png","name":"1-17","tags":["Magic Shield","Breakable Floor","Spiders","Spike","Corridor"]},{"image":"images/1-18f.png","name":"1-18","tags":["Breakable Wall","XP Chest","Door","Button","Magic Shield","Keyhole","Corridor"]},{"image":"images/1-19f.png","name":"1-19","tags":["Abyss","Breakable Floor","Fire Spitter","Door","Keyhole","XP Chest"]},{"image":"images/1-20f.png","name":"1-20","tags":["Fire Spitter","Abyss","Door","Keyhole","XP Chest"]},{"image":"images/1-21f.png","name":"1-21","tags":["Fire Spitter","Lava","Fire Ball","Magic Shield","XP Chest"]},{"image":"images/1-22f.png","name":"1-22","tags":["Mimic","Demon Chest","XP Chest","Boss"]},{"image":"images/1-23f.png","name":"1-23","tags":["Fake Wall","Lava","Magic Shield","Breakable Floor","XP Chest"]},{"image":"images/2-1.png","name":"2-1","tags":["Mud","Green Platform","Egg","XP Chest","Magic Shield","Grass","Wild"]},{"image":"images/2-2f.png","name":"2-2","tags":["Grass","Wild","Egg","Mud","XP Chest"]},{"image":"images/2-3f.png","name":"2-3","tags":["Grass","Wild","Mud","Egg","Blowing Spider","XP Chest"]},{"image":"images/2-4f.png","name":"2-4","tags":["Grass","Wild","XP Chest","Tree","Mud","Mushroom","Blowing Spider","Magic Shield","Branch"]},{"image":"images/2-5f.png","name":"2-5","tags":["Grass","Wild","XP Chest","Abyss","Green Platform","Magic Shield","Branch","Tree","Blowing Spider"]},{"image":"images/2-6f.png","name":"2-6","tags":["Grass","Wild","XP Chest","Blood Pool","Demon Stonehead","Tree","Branch","Blowing Spider","Magic Shield"]},{"image":"images/2-7f.png","name":"2-7","tags":["Grass","Wild","XP Chest","Stairs","Magic Shield","Blowing Spider","Rage","Tree","Branch"]},{"image":"images/2-8f.png","name":"2-8","tags":["Grass","Wild","XP Chest","Mud","Green Platform","Waterfall","Stairs"]},{"image":"images/2-9f.png","name":"2-9","tags":["Grass","Wild","XP Chest","Mud Cannon","Mud","Waterfall","Tree","Branch","Door","Button","Green Platform","Stairs","Swamp Monster"]},{"image":"images/2-10f.png","name":"2-10","tags":["Grass","Wild","XP Chest","Mud","Stairs","Mud Cannon","Swamp Monster"]},{"image":"images/2-11f.png","name":"2-11","tags":["Grass","Wild","XP Chest","Mushroom","Mud","Tree","Branch","Magic Shield"]},{"image":"images/2-12.png","name":"2-12","tags":["Grass","Wild","XP Chest","Mud","Swamp Monster","Mushroom","Green Platform","Corridor"]},{"image":"images/2-13f.png","name":"2-13","tags":["Grass","Wild","XP Chest","Axis of Death","Mushroom","Abyss","Green Platform"]},{"image":"images/2-14f.png","name":"2-14","tags":["Grass","Wild","XP Chest","Magic Shield","Mud","Mushroom","Swamp Monster"]},{"image":"images/2-16f.png","name":"2-16","tags":["Grass","Wild","XP Chest","Blood Pool","Clone","Stairs","Tree","Branch","Mushroom","Green Platform"]},{"image":"images/2-17f.png","name":"2-17","tags":["XP Chest","Mushroom","Lava","Fire Ball","Fire Spitter"]},{"image":"images/2-18f.png","name":"2-18","tags":["XP Chest","Lava","Mushroom","Tree","Clone","Fire Spitter","Fire Ball","Magic Shield"]},{"image":"images/2-19f.png","name":"2-19","tags":["XP Chest","Fire Elemental","Fire Ball","Lava","Fire Spitter","Axis of Death"]},{"image":"images/2-20f.png","name":"2-20","tags":["XP Chest","Spidemon","Boss"]},{"image":"images/2-21f.png","name":"2-21","tags":["XP Chest","Golem","Boss"]},{"image":"images/2-22f.png","name":"2-22","tags":["Grass","Wild","XP Chest","Ape Demon","Boss","Tree","Branch"]},{"image":"images/2-23f.png","name":"2-23","tags":["Grass","Wild","XP Chest","Armademon","Boss"]},{"image":"images/2-24f.png","name":"2-24","tags":["XP Chest","Cthulhu","Boss"]},{"image":"images/2-25f.png","name":"2-25","tags":["XP Chest","Boss","Slime"]},{"image":"images/2-26f.png","name":"2-26","tags":["Grass","Wild","XP Chest","Ape Skeleton","Armadillo"]},{"image":"images/2-27f.png","name":"2-27","tags":["XP Chest","Fire Spitter","Mushroom","Vulkling"]},{"image":"images/2-28.png","name":"2-28","tags":["Grass","Wild","XP Chest","Tree","Branch","Ape Skeleton","Mud"]},{"image":"images/3-1f.png","name":"3-1","tags":["Grass","Wild","XP Chest","Tree","Branch","Egg","Bat","Leaves"]},{"image":"images/3-2f.png","name":"3-2","tags":["Grass","Wild","XP Chest","Fire Agent","Shock Agent","Jump Agent","Tree","Branch","Abyss","Bat"]},{"image":"images/3-3f.png","name":"3-3","tags":["Grass","Wild","XP Chest","Abyss","Jump Agent","Fire Agent","Shock Agent","Bat"]},{"image":"images/3-4f.png","name":"3-4","tags":["Grass","Wild","XP Chest","Water","Fire Agent","Tornado"]},{"image":"images/3-5f.png","name":"3-5","tags":["Grass","Wild","XP Chest","Tornado"]},{"image":"images/3-6f.png","name":"3-6","tags":["Grass","Wild","XP Chest","Water","Magic Shield","Jump Agent"]},{"image":"images/3-7f.png","name":"3-7","tags":["Grass","Wild","XP Chest","Tree","Leaves","Shock Agent","Jump Agent","Magic Shield","Stairs"]},{"image":"images/3-8f.png","name":"3-8","tags":["Grass","Wild","XP Chest","Tree","Leaves","Fire Spitter","Abyss","Branch","Shock Agent","Axis of Death","Fire Agent"]},{"image":"images/3-9.png","name":"3-9","tags":["Wild","XP Chest","Shock Agent","Jump Agent","Magic Shield","Fire Spitter"]},{"image":"images/3-10f.png","name":"3-10","tags":["Grass","Wild","XP Chest","Abyss","Shock Agent","Jump Agent","Magic Shield","Fire Spitter"]},{"image":"images/3-11f.png","name":"3-11","tags":["Grass","Wild","XP Chest","Jump Agent","Axis of Death","Abyss","Mushroom"]},{"image":"images/3-12f.png","name":"3-12","tags":["Grass","Wild","XP Chest","Tree","Leaves","Branch","Fire Spitter"]},{"image":"images/3-13f.png","name":"3-13","tags":["Grass","Wild","XP Chest","Abyss","Shock Agent","Jump Agent"]},{"image":"images/3-14f.png","name":"3-14","tags":["Wild","XP Chest","Door","Button","Indoor","Magic Shield","Fire Spitter","Tree","Abyss"]},{"image":"images/3-15f.png","name":"3-15","tags":["Grass","Wild","XP Chest","Dragon Attack","Egg","Bat"]},{"image":"images/3-16f.png","name":"3-16","tags":["Grass","Wild","XP Chest","Indoor","Door","Button","Saw","Fire Agent","Time Patroller","Magic Shield"]},{"image":"images/3-17f.png","name":"3-17","tags":["Wild","XP Chest","Boss","Fire Lord","Lava"]},{"image":"images/3-18f.png","name":"3-18","tags":["Grass","Wild","XP Chest","Indoor","Saw","Boss","Orc Fighter"]}]')}},[[14,1,2]]]);
//# sourceMappingURL=main.45edd7cb.chunk.js.map