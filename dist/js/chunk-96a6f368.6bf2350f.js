(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-96a6f368"],{"253c":function(t,e,a){"use strict";var r=a("a20a");e["a"]={get:function(){return Object(r["a"])().get("setting-get")},updateWhatsAppGroup:function(t){return Object(r["a"])().post("setting-update-whatsapp-group",t)},updateVideoPresentation:function(t){return Object(r["a"])().post("setting-update-video-presentation",t)},updateCoupons:function(t){return Object(r["a"])().post("setting-update-coupons",t)}}},3400:function(t,e,a){t.exports=a.p+"img/auth-banner.804c3373.webp"},"5c0c":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),null!=t.drivers_coupons?r("div",{staticClass:"row pt-5 pb-5"},[r("div",{staticClass:"offset-md-2 col-md-8"},[r("form",{attrs:{id:"register-form"},on:{submit:function(e){return e.preventDefault(),t.create()}}},[t.drivers_coupons>0?r("div",{staticClass:"alert alert-primary mt-2",attrs:{role:"alert"}},[r("h3",[t._v(" There are "+t._s(t.drivers_coupons)+" places available. Join now!! ")])]):r("div",{staticClass:"alert alert-warning mt-4",attrs:{role:"alert"}},[t._m(1)]),t.drivers_coupons>0?r("div",{staticClass:"card auth-card"},[r("div",{staticClass:"card-body bg-light pb-4"},[r("div",{staticClass:"auth-header"},[r("div",[r("router-link",{attrs:{to:"/"}},[r("img",{attrs:{src:a("8e99"),alt:"Logo",id:"auth-logo"}})])],1),t._m(2)]),r("hr"),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form-label"},[t._v("City")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.user.city,expression:"user.city"}],staticClass:"form-select",attrs:{name:"city",id:"city"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.user,"city",e.target.multiple?a:a[0])}}},[r("option",{attrs:{value:""}}),r("option",{attrs:{value:"Toronto"}},[t._v("Toronto")])])]),r("div",{staticClass:"form-group mt-3"},[r("label",{staticClass:"form-label"},[t._v("Full Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.full_name,expression:"user.full_name"}],staticClass:"form-control",attrs:{name:"full_name",id:"full_name"},domProps:{value:t.user.full_name},on:{input:function(e){e.target.composing||t.$set(t.user,"full_name",e.target.value)}}})]),r("div",{staticClass:"form-group mt-3"},[r("label",{staticClass:"form-label"},[t._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{name:"email",id:"email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),r("div",{staticClass:"form-group mt-3"},[r("label",{staticClass:"form-label"},[t._v("Confirm your Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.confirm_email,expression:"user.confirm_email"}],staticClass:"form-control",attrs:{name:"confirm_email",id:"confirm_email"},domProps:{value:t.user.confirm_email},on:{input:function(e){e.target.composing||t.$set(t.user,"confirm_email",e.target.value)}}})]),r("div",{staticClass:"form-group mt-3"},[r("label",{staticClass:"form-label"},[t._v("Phone number (WhatsApp)")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.phone,expression:"user.phone"}],staticClass:"form-control",attrs:{name:"phone",id:"phone"},domProps:{value:t.user.phone},on:{input:function(e){e.target.composing||t.$set(t.user,"phone",e.target.value)}}})]),t._m(3),r("div",{staticClass:"form-check mt-3"},[r("input",{staticClass:"form-check-input",attrs:{type:"checkbox",name:"terms",id:"terms"}}),r("label",{staticClass:"form-check-label",attrs:{for:"terms"}},[t._v(" I accept the "),r("router-link",{attrs:{to:"/terms_conditions_drivers",target:"_blank"}},[t._v("terms and conditions.")])],1),r("label",{staticClass:"error error-label",staticStyle:{display:"block"},attrs:{id:"terms-error",for:"terms"}})]),r("div",{staticClass:"alert alert-success mt-4 d-none",attrs:{role:"alert",id:"register-alert-wait"}},[t._v(" Wait a moment please... ")]),r("button",{staticClass:"btn w-100 mt-4 p-2",attrs:{type:"submit",id:"register-btn-submit"}},[t._v("I want to work with Moto-Ya, Click Here!!!")])])]):t._e(),t._m(4)])])]):t._e()])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row mt-5"},[r("div",{staticClass:"offset-lg-1 col-lg-10"},[r("div",{staticClass:"carousel slide",attrs:{id:"register-slider","data-bs-ride":"carousel"}},[r("div",{staticClass:"carousel-indicators"},[r("button",{staticClass:"active",attrs:{type:"button","data-bs-target":"#register-slider","data-bs-slide-to":"0","aria-current":"true","aria-label":"Slide 1"}}),r("button",{attrs:{type:"button","data-bs-target":"#register-slider","data-bs-slide-to":"1","aria-label":"Slide 2"}}),r("button",{attrs:{type:"button","data-bs-target":"#register-slider","data-bs-slide-to":"2","aria-label":"Slide 3"}})]),r("div",{staticClass:"carousel-inner"},[r("div",{staticClass:"carousel-item active"},[r("img",{staticClass:"d-block w-100",attrs:{src:a("3400"),alt:"..."}})]),r("div",{staticClass:"carousel-item"},[r("img",{staticClass:"d-block w-100",attrs:{src:a("8d42"),alt:"..."}})]),r("div",{staticClass:"carousel-item"},[r("img",{staticClass:"d-block w-100",attrs:{src:a("cbfb"),alt:"..."}})])]),r("button",{staticClass:"carousel-control-prev",attrs:{type:"button","data-bs-target":"#register-slider","data-bs-slide":"prev"}},[r("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),r("span",{staticClass:"visually-hidden"},[t._v("Previous")])]),r("button",{staticClass:"carousel-control-next",attrs:{type:"button","data-bs-target":"#register-slider","data-bs-slide":"next"}},[r("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),r("span",{staticClass:"visually-hidden"},[t._v("Next")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",[t._v(" We have no more space available at the moment. Be aware, we'll have more space soon!!"),a("br"),t._v(" If you want you can contact us via WhatsApp and we will notify you when there are places available ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ms-4 text-blue"},[a("h5",[t._v("Easy Moto-Ya "),a("br"),t._v(" Training Program")]),a("h5",[t._v("FREE!!")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"text-secondary mt-5"},[a("small",[t._v(" You must have: "),a("br"),t._v(" - Vehicle ownership. "),a("br"),t._v(" - Insurance policy. "),a("br"),t._v(" - have a minimum of at least three years’ driving experience. ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"btn w-100 mt-5 mb-4 p-3",attrs:{href:"https://api.whatsapp.com/send?phone=16475102259&text=Necesito%20Informacion",target:"_blank",id:"register-btn-whatsapp"}},[a("i",{staticClass:"fa fa-whatsapp"}),t._v(" CONTACT US VIA WHATSAPP!! ")])}],i=a("1da1"),n=(a("96cf"),a("9a61")),o=a("253c"),l=a("a20a"),c={notifyRegister:function(t){return Object(l["a"])().post("notification-register",t)}},u={data:function(){return{user:{city:null,full_name:null,email:null,confirm_email:null,phone:null},drivers_coupons:null}},created:function(){this.getCoupons()},methods:{create:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if($("#register-form").validate({rules:{city:{required:!0},full_name:{required:!0,only_letters:!0},email:{required:!0,email:!0},confirm_email:{required:!0,equalTo:"#email"},phone:{required:!0,phone:!0},terms:{required:!0}}}),!$("#register-form").valid()){e.next=11;break}return $("#register-btn-submit").prop("disabled",!0),$("#register-alert-wait").removeClass("d-none"),e.next=6,n["a"].create(t.user);case 6:a=e.sent,console.log(a.data),"OK"==a.data?(r={full_name:t.user.full_name},c.notifyRegister(r),t.$router.push("/auth/send-email/"+t.user.email)):"EMAIL_EXISTS"==a.data&&SwalAlert("","The email entered is already registered","error"),$("#register-alert-wait").addClass("d-none"),$("#register-btn-submit").prop("disabled",!1);case 11:case"end":return e.stop()}}),e)})))()},getCoupons:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].get();case 2:a=e.sent,t.drivers_coupons=a.data.drivers_coupons;case 4:case"end":return e.stop()}}),e)})))()}}},m=u,d=(a("f8f2"),a("2877")),p=Object(d["a"])(m,r,s,!1,null,null,null);e["default"]=p.exports},"8d42":function(t,e,a){t.exports=a.p+"img/auth-banner2.6cf2d047.webp"},"8e99":function(t,e,a){t.exports=a.p+"img/logo.efda5cef.webp"},"9a61":function(t,e,a){"use strict";var r=a("a20a");e["a"]={create:function(t){return Object(r["a"])().post("employee-create",t)},get:function(){return Object(r["a"])().get("employee-get")},destroy:function(t){return Object(r["a"])().get("employee-destroy?id="+t)}}},b076:function(t,e,a){},cbfb:function(t,e,a){t.exports=a.p+"img/auth-banner3.76384862.webp"},f8f2:function(t,e,a){"use strict";a("b076")}}]);
//# sourceMappingURL=chunk-96a6f368.6bf2350f.js.map