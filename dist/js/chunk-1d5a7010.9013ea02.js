(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d5a7010"],{2754:function(t,e,r){},"99f7":function(t,e,r){"use strict";r("2754")},b0c0:function(t,e,r){var n=r("83ab"),a=r("9bf2").f,i=Function.prototype,c=i.toString,s=/^\s*function ([^ (]*)/,o="name";n&&!(o in i)&&a(i,o,{configurable:!0,get:function(){try{return c.call(this).match(s)[1]}catch(t){return""}}})},b662:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[t.isLoading?r("appPreloader"):r("v-container",[r("v-layout",{attrs:{"justify-center":""}},[r("v-flex",{attrs:{xs12:"",md6:""}},[r("v-btn",{attrs:{block:"",color:"green"},on:{click:function(e){return t.$router.back()}}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-arrow-left")]),t._v(" Back to list ")],1)],1)],1),r("h1",{staticClass:"text-center text-uppercase mt-5 mb-10"},[t._v(t._s(t.specificCharacter.name))]),r("v-layout",{attrs:{wrap:"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg6:""}},[r("v-dialog",{attrs:{width:"1000"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[r("v-layout",{staticClass:"pl-5 pr-5",attrs:{"justify-center":""}},[r("v-img",t._g(t._b({staticClass:"charImg rounded-lg",attrs:{width:"600",src:t.specificCharacter.img}},"v-img",a,!1),n))],1)]}}])},[r("v-img",{staticClass:"charImg",attrs:{src:t.specificCharacter.img}})],1)],1),r("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg6:""}},t._l(t.specificCharacterItems,(function(e){return r("div",{key:e.char_id,staticClass:"mb-5"},[r("h2",[t._v(t._s(e.inner.length>0?e.title+":":null))]),"object"===typeof e.inner?r("div",[r("ul",t._l(e.inner,(function(n){return r("li",{key:n},[t._v(" "+t._s("Occupation"===e.title?n:"Season "+n)+" ")])})),0)]):r("p",[t._v(t._s(e.inner.length>0?e.inner:null))])])})),0)],1)],1)],1)},a=[],i=(r("b0c0"),r("62a6")),c={props:["id"],computed:{specificCharacter:function(){return this.$store.getters.getSpecificCharacter},specificCharacterItems:function(){var t=this.$store.getters.getSpecificCharacter,e=[{title:"Name",inner:t.name},{title:"Nickname",inner:t.nickname},{title:"Birthday",inner:t.birthday},{title:"Occupation",inner:t.occupation},{title:"Status",inner:t.status},{title:"Category",inner:t.category},{title:"Appearance",inner:t.appearance},{title:"Better Call Saul appearance",inner:t.better_call_saul_appearance},{title:"Portrayed",inner:t.portrayed}];return e},isLoading:function(){return this.$store.getters.getLoading}},created:function(){this.$store.dispatch("getCharactersById",this.id)},components:{appPreloader:i["a"]}},s=c,o=(r("99f7"),r("2877")),l=Object(o["a"])(s,n,a,!1,null,"14ff477f",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-1d5a7010.9013ea02.js.map