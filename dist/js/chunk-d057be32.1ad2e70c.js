(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d057be32"],{2683:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("layout",{scopedSlots:t._u([{key:"sidebar",fn:function(){return[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link sid-link",attrs:{to:"/cms/setting/"}},[s("i",{staticClass:"fa fa-whatsapp"}),t._v(" WhatsApp Group")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link sid-link",attrs:{to:"/cms/setting/presentation-video"}},[s("i",{staticClass:"fa fa-video"}),t._v(" Presentation Video")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link sid-link",attrs:{to:"/cms/setting/change-password"}},[s("i",{staticClass:"fas fa-key"}),t._v(" Change Password")])],1)]},proxy:!0},{key:"title",fn:function(){return[t._v("Setting")]},proxy:!0},{key:"subtitle",fn:function(){return[t._v(t._s(t.$route.name))]},proxy:!0},{key:"main",fn:function(){return[s("router-view")]},proxy:!0}])})],1)},i=[],n=s("1da1"),r=(s("96cf"),s("9a61")),c=s("f5f2"),l={components:{Layout:c["a"]},data:function(){return{drivers:[]}},created:function(){this.get()},methods:{get:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r["a"].get();case 2:s=e.sent,t.drivers=s.data;case 4:case"end":return e.stop()}}),e)})))()},destroy:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:SwalQuestion("","Are you sure you want to delete?",function(){var s=Object(n["a"])(regeneratorRuntime.mark((function s(a){var i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(!a.isConfirmed){s.next=5;break}return s.next=3,r["a"].destroy(t);case 3:i=s.sent,"OK"==i.data?(SwalMixin("User deleted","success"),e.get()):SwalMixin("An error has occurred, please try again","error");case 5:case"end":return s.stop()}}),s)})));return function(t){return s.apply(this,arguments)}}());case 1:case"end":return s.stop()}}),s)})))()}}},o=l,u=s("2877"),m=Object(u["a"])(o,a,i,!1,null,null,null);e["default"]=m.exports},3109:function(t,e,s){"use strict";s("4583")},4583:function(t,e,s){},"8e99":function(t,e,s){t.exports=s.p+"img/logo.efda5cef.webp"},"9a61":function(t,e,s){"use strict";var a=s("a20a");e["a"]={create:function(t){return Object(a["a"])().post("employee-create",t)},get:function(){return Object(a["a"])().get("employee-get")},destroy:function(t){return Object(a["a"])().get("employee-destroy?id="+t)}}},f5f2:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"wrapper"}},[a("div",{staticClass:"text-center",attrs:{id:"cms-header-resp"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"offset-sm-5 col-sm-2 offset-4 col-4"},[a("router-link",{attrs:{to:"/cms/"}},[a("img",{staticClass:"w-100",attrs:{src:s("8e99"),id:"cms-logo-resp"}})])],1)]),"a"==t.user.rol?a("span",{staticClass:"text-light"},[t._v("Administrator")]):t._e(),"e"==t.user.rol?a("span",{staticClass:"text-light"},[t._v("Driver")]):t._e()]),a("nav",{staticClass:"navbar navbar-default top-navbar",attrs:{role:"navigation",id:"cms-nav-top"}},[a("ul",{staticClass:"nav"},[a("li",{staticClass:"nav-item",attrs:{id:"cms-typeuser"}},[a("router-link",{staticClass:"nav-link",attrs:{to:"/cms/"}},[a("i",{staticClass:"fa-solid fa-circle-user fa-fw me-1"}),"a"==t.user.rol?a("span",{staticClass:"text-light"},[t._v("Administrator")]):a("span",{staticClass:"text-light"},[t._v("Driver")])])],1)]),a("ul",{staticClass:"nav"},[a("li",{staticClass:"nav-item me-sm-4 me-2"},[a("button",{staticClass:"btn btn-black text-light",attrs:{id:"cms-btn-expand-menu"},on:{click:function(e){return t.expandMenu()}}},[a("i",{staticClass:"fas fa-bars"})])]),"a"==t.user.rol?a("li",{staticClass:"nav-item me-sm-4 me-2"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/cms/"}},[a("i",{staticClass:"fa fa-video fa-fw me-1"}),a("span",{staticClass:"text-light cms-nav-link-text"},[t._v("Training Program")])])],1):t._e(),"a"==t.user.rol?a("li",{staticClass:"nav-item me-sm-4 me-2"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/cms/drivers/"}},[a("i",{staticClass:"fas fa-users fa-fw me-1"}),a("span",{staticClass:"text-light cms-nav-link-text"},[t._v("Drivers")])])],1):t._e(),"a"==t.user.rol?a("li",{staticClass:"nav-item me-sm-4 me-2"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/cms/setting/"}},[a("i",{staticClass:"fa fa-gears fa-fw me-1"}),a("span",{staticClass:"text-light cms-nav-link-text"},[t._v("Setting")])])],1):t._e(),"e"==t.user.rol?a("li",{staticClass:"nav-item me-sm-4 me-2"},[t._m(0)]):t._e(),a("li",{staticClass:"nav-item me-lg-4"},[a("a",{staticClass:"nav-link",attrs:{href:t.domain},on:{click:function(e){return t.logout()}}},[a("i",{staticClass:"fa fa-power-off fa-fw me-1"}),a("span",{staticClass:"text-light cms-nav-link-text"},[t._v("Log out")])])])]),a("ul",{staticClass:"nav d-none",attrs:{id:"cms-adjust-menuresp"}})]),a("div",{attrs:{id:"cms-menu-content"}},[a("nav",{staticClass:"navbar-default navbar-side",attrs:{role:"navigation",id:"cms-sidebar"}},[a("ul",{staticClass:"nav flex-column",attrs:{id:"cms-sidebar-menu"}},[a("li",{staticClass:"nav-item text-center pb-4",attrs:{id:"cms-logo-content"}},[a("router-link",{attrs:{to:"/cms/"}},[a("img",{attrs:{src:s("8e99"),id:"cms-logo"}})])],1),t._t("sidebar")],2)]),a("div",{attrs:{id:"page-wrapper"}},[a("div",{staticClass:"pt-4 ps-5 pe-5",attrs:{id:"page-inner"}},[a("main",[a("h3",{staticClass:"page-header text-blue",attrs:{id:"cms-content-title"}},[t._t("title")],2),a("div",{staticClass:"panel panel-default",attrs:{id:"panel-main"}},[a("div",{staticClass:"panel-heading",attrs:{id:"cms-content-subtitle"}},[a("h5",{staticClass:"text-blue"},[t._t("subtitle")],2)]),a("div",{staticClass:"panel-body",attrs:{id:"cms-panel-body"}},[a("div",{attrs:{id:"cms-main"}},[t._t("main")],2)])])]),t._m(1)])])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"nav-link",attrs:{target:"_blank",href:"https://api.whatsapp.com/send?phone=16475102259&text=Necesito%20Informacion"}},[s("i",{staticClass:"fa fa-whatsapp fa-fw me-1"}),s("span",{staticClass:"text-light cms-nav-link-text"},[t._v("Contact")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"mt-5 mb-4 text-secondary",attrs:{id:"cms-footer"}},[s("p",[t._v("© MOTO-YA 2023")])])}],n=s("1da1"),r=(s("96cf"),s("3e56")),c={data:function(){return{user:{email:null,rol:null}}},created:function(){this.getUser()},mounted:function(){var t=this;setTimeout((function(){t.checkedClicItemMenu()}),1e3)},methods:{logout:function(){localStorage.removeItem("token"),this.$router.push("/")},expandMenu:function(){$("#cms-sidebar").hasClass("active")?$("#cms-sidebar").hide(100).removeClass("active"):$("#cms-sidebar").show(100).addClass("active")},checkedClicItemMenu:function(){$("#cms-sidebar .sid-link").click((function(){$("#cms-sidebar").hasClass("active")&&$("#cms-sidebar").hide().removeClass("active")}))},getUser:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r["a"].getUser();case 2:s=e.sent,t.user.email=s.data.email,t.user.rol=s.data.rol;case 5:case"end":return e.stop()}}),e)})))()}}},l=c,o=(s("3109"),s("2877")),u=Object(o["a"])(l,a,i,!1,null,null,null);e["a"]=u.exports}}]);
//# sourceMappingURL=chunk-d057be32.1ad2e70c.js.map