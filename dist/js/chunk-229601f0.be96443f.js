(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-229601f0"],{"210e":function(t,e,a){"use strict";a("e739")},"253c":function(t,e,a){"use strict";var n=a("a20a");e["a"]={get:function(){return Object(n["a"])().get("setting-get")},updateWhatsAppGroup:function(t){return Object(n["a"])().post("setting-update-whatsapp-group",t)},updateVideoPresentation:function(t){return Object(n["a"])().post("setting-update-video-presentation",t)},updateCoupons:function(t){return Object(n["a"])().post("setting-update-coupons",t)}}},3109:function(t,e,a){"use strict";a("4583")},4583:function(t,e,a){},5979:function(t,e,a){},7721:function(t,e,a){},"8d6e":function(t,e,a){"use strict";a("7721")},"8e99":function(t,e,a){t.exports=a.p+"img/logo.efda5cef.webp"},"96f3":function(t,e,a){"use strict";a("5979")},a56a:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("layout",{scopedSlots:t._u([{key:"sidebar",fn:function(){return[t._l(t.sections,(function(e){return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:t.domain+"/#/cms/"}},["a"==t.user.rol?a("span",{staticClass:"sid-link",on:{click:function(a){return t.$refs.EditSection.getSection(e.id)}}},[t._v(t._s(e.title))]):a("span",{staticClass:"sid-link"},[t._v(t._s(e.title))]),a("span",{staticStyle:{float:"right","font-size":"20px","margin-top":"-5px"},attrs:{"data-bs-toggle":"collapse","data-bs-target":"#section-chapters-"+e.id},on:{click:function(e){return t.expandSubmenu(e)}}},[a("i",{staticClass:"fas fa-arrow-circle-down"})])]),a("div",{staticClass:"collapse ps-3",attrs:{id:"section-chapters-"+e.id}},[a("ul",{staticClass:"nav flex-column"},t._l(e.chapters,(function(n){return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link sid-link",attrs:{href:t.domain+"/#/cms/"},on:{click:function(a){return t.$refs.ShowChapter.getChapter(n.id,e.title)}}},[t._v(" "+t._s(n.title)+" ")])])})),0),a("div",{staticClass:"text-center mt-4"},["a"==t.user.rol?a("button",{staticClass:"btn btn-sm btn-orange sid-link mb-2",on:{click:function(a){return t.$refs.CreateChapter.initComponent(e.id,e.title)}}},[a("i",{staticClass:"fa fa-plus"}),t._v(" Add Chapter")]):t._e()])])])})),a("div",{staticClass:"text-center mt-4"},["a"==t.user.rol?a("button",{staticClass:"btn btn-sm btn-orange sid-link",on:{click:function(e){return t.$refs.CreateSection.initComponent()}}},[a("i",{staticClass:"fa fa-plus"}),t._v(" Add Section")]):t._e()])]},proxy:!0},{key:"title",fn:function(){return[t._v("Training Program")]},proxy:!0},{key:"subtitle",fn:function(){return[a("span",{attrs:{id:"training-subtitle"}})]},proxy:!0},{key:"main",fn:function(){return[a("div",{staticStyle:{display:"none"},attrs:{id:"create-section"}},[a("CreateSection",{ref:"CreateSection",on:{sectionCreated:function(e){return t.getSections()}}})],1),a("div",{staticStyle:{display:"none"},attrs:{id:"edit-section"}},[a("EditSection",{ref:"EditSection",on:{sectionUpdated:function(e){return t.getSections()},sectionDeleted:function(e){return t.init()}}})],1),a("div",{staticStyle:{display:"none"},attrs:{id:"create-chapter"}},[a("CreateChapter",{ref:"CreateChapter",on:{chapterCreated:function(e){return t.getSections()}}})],1),a("div",{staticStyle:{display:"none"},attrs:{id:"edit-chapter"}},[a("EditChapter",{ref:"EditChapter",on:{chapterUpdated:function(e){return t.getSections()}}})],1),a("div",{staticStyle:{display:"none"},attrs:{id:"show-chapter"}},[a("ShowChapter",{ref:"ShowChapter",on:{chapterDeleted:function(e){return t.init()},editChapter:function(e){return t.editChapter(e)}}})],1)]},proxy:!0}])})],1)},i=[],r=a("1da1"),s=(a("96cf"),a("f5f2")),c=a("a20a"),o={get:function(){return Object(c["a"])().get("training-get")},createSection:function(t){return Object(c["a"])().post("training-create-section",t)},destroySection:function(t){return Object(c["a"])().get("training-destroy-section?id="+t)},getSection:function(t){return Object(c["a"])().get("training-get-section?id="+t)},updateSection:function(t){return Object(c["a"])().post("training-update-section",t)},uploadVideo:function(t){return Object(c["a"])().post("training-upload-video",t)},createChapter:function(t){return Object(c["a"])().post("training-create-chapter",t)},getChapter:function(t){return Object(c["a"])().get("training-get-chapter?id="+t)},updateChapter:function(t){return Object(c["a"])().post("training-update-chapter",t)},destroyChapter:function(t){return Object(c["a"])().get("training-destroy-chapter?id="+t)}},l=a("3e56"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"offset-lg-3 col-lg-6"},[a("form",{attrs:{id:"section-create-form"},on:{submit:function(e){return e.preventDefault(),t.create()}}},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.section.title,expression:"section.title"}],staticClass:"form-control",attrs:{name:"title"},domProps:{value:t.section.title},on:{input:function(e){e.target.composing||t.$set(t.section,"title",e.target.value)}}})]),a("button",{staticClass:"btn btn-blue p-2 w-100 mt-3",attrs:{type:"submit"}},[t._v("CREATE")])])])])])},d=[],p={data:function(){return{section:{title:null}}},methods:{initComponent:function(){$(".component-active").removeClass("component-active"),$("#create-section").addClass("component-active"),$("#training-subtitle").text("Create section")},create:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if($("#section-create-form").validate({rules:{title:{required:!0,description:!0}}}),!$("#section-create-form").valid()){e.next=6;break}return e.next=4,o.createSection(t.section);case 4:a=e.sent,"OK"==a.data?(SwalMixin("Section created","success"),t.section.title=null,t.$emit("sectionCreated")):SwalAlert("","An error has occurred, please try again","error");case 6:case"end":return e.stop()}}),e)})))()}}},h=p,m=a("2877"),v=Object(m["a"])(h,u,d,!1,null,null,null),f=v.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"offset-lg-3 col-lg-6"},[a("div",{staticClass:"text-end"},[a("button",{staticClass:"btn btn-sm btn-blue",on:{click:function(e){return t.destroySection()}}},[t._v("DELETE SECTION")])]),a("form",{attrs:{id:"section-update-form"},on:{submit:function(e){return e.preventDefault(),t.update()}}},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.section.title,expression:"section.title"}],staticClass:"form-control",attrs:{name:"title"},domProps:{value:t.section.title},on:{input:function(e){e.target.composing||t.$set(t.section,"title",e.target.value)}}})]),a("button",{staticClass:"btn btn-blue p-2 w-100 mt-3",attrs:{type:"submit"}},[t._v("UPDATE")])])])])])},C=[],w={data:function(){return{section:{id:null,title:null}}},methods:{getSection:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,o.getSection(t);case 2:n=a.sent,e.section.id=n.data.id,e.section.title=n.data.title,$(".component-active").removeClass("component-active"),$("#edit-section").addClass("component-active");case 7:case"end":return a.stop()}}),a)})))()},update:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if($("#section-update-form").validate({rules:{title:{required:!0,description:!0}}}),!$("#section-update-form").valid()){e.next=6;break}return e.next=4,o.updateSection(t.section);case 4:a=e.sent,"OK"==a.data?(SwalMixin("Section updated","success"),t.$emit("sectionUpdated")):SwalAlert("","An error has occurred, please try again","error");case 6:case"end":return e.stop()}}),e)})))()},destroySection:function(){var t=this;SwalQuestion("","Are you sure you want to delete?",function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(a){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a.isConfirmed){e.next=5;break}return e.next=3,o.destroySection(t.section.id);case 3:n=e.sent,"OK"==n.data?(SwalMixin("Section deleted","success"),t.$emit("sectionDeleted")):SwalMixin("An error has occurred, please try again","error");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}},_=w,b=Object(m["a"])(_,g,C,!1,null,null,null),k=b.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"offset-lg-1 col-lg-10"},[a("form",{attrs:{id:"chapter-create-form"},on:{submit:function(e){return e.preventDefault(),t.create()}}},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.chapter.title,expression:"chapter.title"}],staticClass:"form-control",attrs:{name:"title"},domProps:{value:t.chapter.title},on:{input:function(e){e.target.composing||t.$set(t.chapter,"title",e.target.value)}}})]),a("div",{staticClass:"form-group mt-3"},[a("label",{staticClass:"form-label"},[t._v("Video")]),t.loadingVideo||null!=t.chapter.video?t._e():a("div",{attrs:{id:"video-upload"},on:{click:function(e){return t.selecVideo()}}},[a("i",{staticClass:"fa fa-cloud-arrow-up text-secondary"}),a("h5",{staticClass:"text-secondary mt-4"},[t._v("Upload Video")])]),t.loadingVideo||null==t.chapter.video?t._e():a("div",{attrs:{id:"video-player-content"}},[a("div",{staticClass:"text-end mb-3"},[a("button",{staticClass:"btn btn-blue p-2",attrs:{type:"button"},on:{click:function(e){return t.selecVideo()}}},[t._v("UPDATE VIDEO")])]),a("video",{attrs:{src:t.backend+"../"+t.chapter.video,controls:"",width:"100%",id:"video-player"}})]),t.loadingVideo?a("div",{staticClass:"mt-5 mb-5"},[t._m(0),t._m(1)]):t._e(),a("input",{attrs:{type:"file",name:"video",id:"video",hidden:""},on:{change:function(e){return t.uploadVideo()}}})]),t._m(2),a("div",{staticClass:"form-check mt-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.chapter.show_link_whatsapp,expression:"chapter.show_link_whatsapp"}],staticClass:"form-check-input",attrs:{type:"checkbox",name:"link_whatsapp_group",id:"link_whatsapp_group"},domProps:{checked:Array.isArray(t.chapter.show_link_whatsapp)?t._i(t.chapter.show_link_whatsapp,null)>-1:t.chapter.show_link_whatsapp},on:{change:function(e){var a=t.chapter.show_link_whatsapp,n=e.target,i=!!n.checked;if(Array.isArray(a)){var r=null,s=t._i(a,r);n.checked?s<0&&t.$set(t.chapter,"show_link_whatsapp",a.concat([r])):s>-1&&t.$set(t.chapter,"show_link_whatsapp",a.slice(0,s).concat(a.slice(s+1)))}else t.$set(t.chapter,"show_link_whatsapp",i)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"link_whatsapp_group"}},[t._v(" Show link to whatsapp group in this chapter ")])]),a("button",{staticClass:"btn btn-blue p-2 w-100 mt-3",attrs:{type:"submit"}},[t._v("CREATE")])])])])])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"progress"},[a("div",{staticClass:"progress-bar progress-bar-striped progress-bar-animated",staticStyle:{width:"100%"},attrs:{role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"alert alert-info text-center mt-4",attrs:{role:"alert"}},[a("h5",[t._v("Uploading video. Please wait...")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group mt-3"},[a("label",{staticClass:"form-label"},[t._v("Content")]),a("div",{staticStyle:{"min-height":"300px"},attrs:{id:"content"}})])}],S={data:function(){return{chapter:{title:null,video:null,content:null,show_link_whatsapp:!1,training_section_id:null},loadingVideo:!1}},mounted:function(){this.initEditor()},methods:{initComponent:function(t,e){this.chapter.training_section_id=t,$(".component-active").removeClass("component-active"),$("#create-chapter").addClass("component-active"),$("#training-subtitle").text(e+" / Create chapter")},selecVideo:function(){$("#video").click()},uploadVideo:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loadingVideo=!0,a=new FormData,a.append("video",document.getElementById("video").files[0]),e.next=5,o.uploadVideo(a);case 5:n=e.sent,"EXT_INVALIDA"==n.data?SwalMixin("The file must have an .mp4 extension","error"):(t.chapter.video=n.data,document.getElementById("video").value="",t.loadingVideo=!1,SwalMixin("Video uploaded","success"));case 7:case"end":return e.stop()}}),e)})))()},initEditor:function(){var t={modules:{toolbar:[["bold","italic","underline","strike"],[{indent:"-1"},{indent:"+1"}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{align:[]}],["clean"]]},theme:"snow"};new Quill("#content",t)},create:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if($("#chapter-create-form").validate({rules:{title:{required:!0,description:!0}}}),!$("#chapter-create-form").valid()){e.next=11;break}if(null==t.chapter.video){e.next=10;break}return t.chapter.content=$("#content .ql-editor").html(),e.next=6,o.createChapter(t.chapter);case 6:a=e.sent,"OK"==a.data?(SwalMixin("Chapter created","success"),t.chapter.title=null,t.chapter.video=null,t.chapter.content=null,t.chapter.show_link_whatsapp=!1,$("#content .ql-editor").html(""),t.$emit("chapterCreated")):SwalAlert("","An error has occurred, please try again","error"),e.next=11;break;case 10:SwalAlert("","You must upload a video","error");case 11:case"end":return e.stop()}}),e)})))()}}},E=S,O=(a("96f3"),Object(m["a"])(E,x,y,!1,null,null,null)),A=O.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"offset-lg-1 col-lg-10"},[a("form",{attrs:{id:"chapter-update-form"},on:{submit:function(e){return e.preventDefault(),t.update()}}},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.chapter.title,expression:"chapter.title"}],staticClass:"form-control",attrs:{name:"title"},domProps:{value:t.chapter.title},on:{input:function(e){e.target.composing||t.$set(t.chapter,"title",e.target.value)}}})]),a("div",{staticClass:"form-group mt-3"},[a("label",{staticClass:"form-label"},[t._v("Video")]),t.loadingVideo||null!=t.chapter.video?t._e():a("div",{attrs:{id:"video-upload"},on:{click:function(e){return t.selecVideo()}}},[a("i",{staticClass:"fa fa-cloud-arrow-up text-secondary"}),a("h5",{staticClass:"text-secondary mt-4"},[t._v("Upload Video")])]),t.loadingVideo||null==t.chapter.video?t._e():a("div",{attrs:{id:"video-player-content"}},[a("div",{staticClass:"text-end mb-3"},[a("button",{staticClass:"btn btn-blue p-2",attrs:{type:"button"},on:{click:function(e){return t.selecVideo()}}},[t._v("UPDATE VIDEO")])]),a("video",{attrs:{src:t.backend+"../"+t.chapter.video,controls:"",width:"100%",id:"video-player"}})]),t.loadingVideo?a("div",{staticClass:"mt-5 mb-5"},[t._m(0),t._m(1)]):t._e(),a("input",{attrs:{type:"file",name:"video",id:"edit_video",hidden:""},on:{change:function(e){return t.uploadVideo()}}})]),t._m(2),a("div",{staticClass:"form-check mt-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.chapter.show_link_whatsapp,expression:"chapter.show_link_whatsapp"}],staticClass:"form-check-input",attrs:{type:"checkbox",name:"link_whatsapp_group",id:"edit_link_whatsapp_group"},domProps:{checked:Array.isArray(t.chapter.show_link_whatsapp)?t._i(t.chapter.show_link_whatsapp,null)>-1:t.chapter.show_link_whatsapp},on:{change:function(e){var a=t.chapter.show_link_whatsapp,n=e.target,i=!!n.checked;if(Array.isArray(a)){var r=null,s=t._i(a,r);n.checked?s<0&&t.$set(t.chapter,"show_link_whatsapp",a.concat([r])):s>-1&&t.$set(t.chapter,"show_link_whatsapp",a.slice(0,s).concat(a.slice(s+1)))}else t.$set(t.chapter,"show_link_whatsapp",i)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"edit_link_whatsapp_group"}},[t._v(" Show link to whatsapp group in this chapter ")])]),a("button",{staticClass:"btn btn-blue p-2 w-100 mt-3",attrs:{type:"submit"}},[t._v("UPDATE")])])])])])},R=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"progress"},[a("div",{staticClass:"progress-bar progress-bar-striped progress-bar-animated",staticStyle:{width:"100%"},attrs:{role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"alert alert-info text-center mt-4",attrs:{role:"alert"}},[a("h5",[t._v("Uploading video. Please wait...")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group mt-3"},[a("label",{staticClass:"form-label"},[t._v("Content")]),a("div",{staticStyle:{"min-height":"300px"},attrs:{id:"content_edit"}})])}],V={data:function(){return{chapter:{id:null,title:null,video:null,content:null,show_link_whatsapp:null},loadingVideo:!1}},mounted:function(){this.initEditor()},methods:{selecVideo:function(){$("#edit_video").click()},uploadVideo:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loadingVideo=!0,a=new FormData,a.append("video",document.getElementById("edit_video").files[0]),e.next=5,o.uploadVideo(a);case 5:n=e.sent,"EXT_INVALIDA"==n.data?SwalMixin("The file must have an .mp4 extension","error"):(t.chapter.video=n.data,document.getElementById("video").value="",t.loadingVideo=!1,SwalMixin("Video uploaded","success"));case 7:case"end":return e.stop()}}),e)})))()},initEditor:function(){var t={modules:{toolbar:[["bold","italic","underline","strike"],[{indent:"-1"},{indent:"+1"}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{align:[]}],["clean"]]},theme:"snow"};new Quill("#content_edit",t)},getChapter:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,o.getChapter(t);case 2:n=a.sent,e.chapter.id=n.data.id,e.chapter.title=n.data.title,e.chapter.video=n.data.video,e.chapter.content=n.data.content,e.chapter.show_link_whatsapp=n.data.show_link_whatsapp,setTimeout((function(){$("#content_edit .ql-editor").html(e.chapter.content)}),500),$(".component-active").removeClass("component-active"),$("#edit-chapter").addClass("component-active");case 11:case"end":return a.stop()}}),a)})))()},update:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null==t.chapter.video){e.next=8;break}return t.chapter.content=$("#content_edit .ql-editor").html(),e.next=4,o.updateChapter(t.chapter);case 4:a=e.sent,"OK"==a.data?(SwalMixin("Chapter updated","success"),t.$emit("chapterUpdated")):SwalAlert("","An error has occurred, please try again","error"),e.next=9;break;case 8:SwalAlert("","You must upload a video","error");case 9:case"end":return e.stop()}}),e)})))()}}},T=V,D=(a("210e"),Object(m["a"])(T,j,R,!1,null,null,null)),U=D.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[null!=t.chapter.id?a("div",{staticClass:"offset-lg-1 col-lg-10"},[a("div",{staticClass:"text-end"},["a"==t.user.rol?a("button",{staticClass:"btn btn-sm btn-blue me-4",attrs:{id:"chapter-delete-btn"},on:{click:function(e){return t.destroyChapter()}}},[t._v("DELETE CHAPTER")]):t._e(),"a"==t.user.rol?a("button",{staticClass:"btn btn-sm btn-blue",on:{click:function(e){return t.editChapter()}}},[t._v("EDIT CHAPTER")]):t._e()]),a("h2",{staticClass:"text-center text-blue mt-5 mb-5"},[t._v(t._s(t.chapter.title))]),a("video",{attrs:{src:t.backend+"../"+t.chapter.video,controls:"",width:"100%",id:"video-player"}}),a("div",{staticClass:"mt-5 mb-4",attrs:{id:"show-chapter-content"},domProps:{innerHTML:t._s(t.chapter.content)}}),t.chapter.show_link_whatsapp?a("div",{staticClass:"mt-5 mb-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"offset-lg-2 col-lg-8"},[a("a",{staticClass:"btn w-100 p-3",attrs:{id:"chapter-link_whatsapp_group",target:"_blank",href:t.link_whatsapp_group}},[a("i",{staticClass:"fa fa-whatsapp"}),t._v(" Join the WhatsApp Group ")])])])]):t._e()]):t._e()])])},P=[],I=a("253c"),N={data:function(){return{chapter:{id:null,title:null,video:null,content:null,show_link_whatsapp:null},link_whatsapp_group:null,user:{rol:null}}},created:function(){this.getUser()},methods:{getChapter:function(t,e){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var i,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,o.getChapter(t);case 2:if(i=n.sent,a.chapter.id=i.data.id,a.chapter.title=i.data.title,a.chapter.video=i.data.video,a.chapter.content=i.data.content,a.chapter.show_link_whatsapp=i.data.show_link_whatsapp,!a.chapter.show_link_whatsapp){n.next=13;break}return n.next=11,I["a"].get();case 11:r=n.sent,a.link_whatsapp_group=r.data.link_whatsapp_group;case 13:$(".component-active").removeClass("component-active"),$("#show-chapter").addClass("component-active"),$("#training-subtitle").text(e+" / "+a.chapter.title);case 16:case"end":return n.stop()}}),n)})))()},destroyChapter:function(){var t=this;SwalQuestion("","Are you sure you want to delete?",function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(a){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a.isConfirmed){e.next=5;break}return e.next=3,o.destroyChapter(t.chapter.id);case 3:n=e.sent,"OK"==n.data?(SwalMixin("Chapter deleted","success"),t.$emit("chapterDeleted")):SwalMixin("An error has occurred, please try again","error");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},editChapter:function(){this.$emit("editChapter",this.chapter.id)},getUser:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["a"].getUser();case 2:a=e.sent,t.user.rol=a.data.rol;case 4:case"end":return e.stop()}}),e)})))()}}},q=N,L=(a("d450"),Object(m["a"])(q,M,P,!1,null,null,null)),K=L.exports,B={components:{Layout:s["a"],CreateSection:f,EditSection:k,CreateChapter:A,EditChapter:U,ShowChapter:K},data:function(){return{sections:[],user:{rol:null}}},created:function(){this.getUser()},mounted:function(){this.init()},methods:{init:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.get();case 2:a=e.sent,t.sections=a.data,t.sections.length>0?t.sections[0].chapters.length>0?t.$refs.ShowChapter.getChapter(t.sections[0].chapters[0].id,t.sections[0].title):t.$refs.CreateChapter.initComponent(t.sections[0].id,t.sections[0].title):($(".component-active").removeClass("component-active"),$("#create-section").addClass("component-active"),$("#training-subtitle").text("Create first section"));case 5:case"end":return e.stop()}}),e)})))()},getSections:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.get();case 2:a=e.sent,t.sections=a.data;case 4:case"end":return e.stop()}}),e)})))()},expandSubmenu:function(t){var e=$(t.target);e.hasClass("active")?(e.removeClass("active"),e.animate({rotate:"0deg"})):(e.addClass("active"),e.animate({rotate:"180deg"}))},editChapter:function(t){this.$refs.EditChapter.getChapter(t)},getUser:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["a"].getUser();case 2:a=e.sent,t.user.rol=a.data.rol;case 4:case"end":return e.stop()}}),e)})))()}}},Q=B,H=(a("8d6e"),Object(m["a"])(Q,n,i,!1,null,null,null));e["default"]=H.exports},d450:function(t,e,a){"use strict";a("dd4b")},dd4b:function(t,e,a){},e739:function(t,e,a){},f5f2:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"wrapper"}},[n("div",{staticClass:"text-center",attrs:{id:"cms-header-resp"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"offset-sm-5 col-sm-2 offset-4 col-4"},[n("router-link",{attrs:{to:"/"}},[n("img",{staticClass:"w-100",attrs:{src:a("8e99"),id:"cms-logo-resp"}})])],1)]),"a"==t.user.rol?n("span",{staticClass:"text-light"},[t._v("Administrator")]):t._e(),"e"==t.user.rol?n("span",{staticClass:"text-light"},[t._v("Driver")]):t._e()]),n("nav",{staticClass:"navbar navbar-default top-navbar",attrs:{role:"navigation",id:"cms-nav-top"}},[n("ul",{staticClass:"nav"},[n("li",{staticClass:"nav-item",attrs:{id:"cms-typeuser"}},[n("router-link",{staticClass:"nav-link",attrs:{to:"/cms/"}},[n("i",{staticClass:"fa-solid fa-circle-user fa-fw me-1"}),"a"==t.user.rol?n("span",{staticClass:"text-light"},[t._v("Administrator")]):n("span",{staticClass:"text-light"},[t._v("Driver")])])],1)]),n("ul",{staticClass:"nav"},[n("li",{staticClass:"nav-item me-sm-4 me-2"},[n("button",{staticClass:"btn btn-black text-light",attrs:{id:"cms-btn-expand-menu"},on:{click:function(e){return t.expandMenu()}}},[n("i",{staticClass:"fas fa-bars"})])]),"a"==t.user.rol?n("li",{staticClass:"nav-item me-sm-4 me-2"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/cms/"}},[n("i",{staticClass:"fa fa-video fa-fw me-1"}),n("span",{staticClass:"text-light cms-nav-link-text"},[t._v("Training Program")])])],1):t._e(),"a"==t.user.rol?n("li",{staticClass:"nav-item me-sm-4 me-2"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/cms/drivers/"}},[n("i",{staticClass:"fas fa-users fa-fw me-1"}),n("span",{staticClass:"text-light cms-nav-link-text"},[t._v("Drivers")])])],1):t._e(),"a"==t.user.rol?n("li",{staticClass:"nav-item me-sm-4 me-2"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/cms/setting/"}},[n("i",{staticClass:"fa fa-gears fa-fw me-1"}),n("span",{staticClass:"text-light cms-nav-link-text"},[t._v("Setting")])])],1):t._e(),"e"==t.user.rol?n("li",{staticClass:"nav-item me-sm-4 me-2"},[t._m(0)]):t._e(),n("li",{staticClass:"nav-item me-lg-4"},[n("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(e){return t.logout()}}},[n("i",{staticClass:"fa fa-power-off fa-fw me-1"}),n("span",{staticClass:"text-light cms-nav-link-text"},[t._v("Log out")])])])]),n("ul",{staticClass:"nav d-none",attrs:{id:"cms-adjust-menuresp"}})]),n("div",{attrs:{id:"cms-menu-content"}},[n("nav",{staticClass:"navbar-default navbar-side",attrs:{role:"navigation",id:"cms-sidebar"}},[n("ul",{staticClass:"nav flex-column",attrs:{id:"cms-sidebar-menu"}},[n("li",{staticClass:"nav-item text-center pb-4",attrs:{id:"cms-logo-content"}},[n("router-link",{attrs:{to:"/"}},[n("img",{attrs:{src:a("8e99"),id:"cms-logo"}})])],1),t._t("sidebar")],2)]),n("div",{attrs:{id:"page-wrapper"}},[n("div",{staticClass:"pt-4 ps-5 pe-5",attrs:{id:"page-inner"}},[n("main",[n("h3",{staticClass:"page-header text-blue",attrs:{id:"cms-content-title"}},[t._t("title")],2),n("div",{staticClass:"panel panel-default",attrs:{id:"panel-main"}},[n("div",{staticClass:"panel-heading",attrs:{id:"cms-content-subtitle"}},[n("h5",{staticClass:"text-blue"},[t._t("subtitle")],2)]),n("div",{staticClass:"panel-body",attrs:{id:"cms-panel-body"}},[n("div",{attrs:{id:"cms-main"}},[t._t("main")],2)])])]),t._m(1)])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"nav-link",attrs:{target:"_blank",href:"https://api.whatsapp.com/send?phone=16475102259&text=Necesito%20Informacion"}},[a("i",{staticClass:"fa fa-whatsapp fa-fw me-1"}),a("span",{staticClass:"text-light cms-nav-link-text"},[t._v("Contact")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"mt-5 mb-4 text-secondary",attrs:{id:"cms-footer"}},[a("p",[t._v("© MOTO-YA 2023")])])}],r=a("1da1"),s=(a("96cf"),a("3e56")),c={data:function(){return{user:{email:null,rol:null}}},created:function(){this.getUser()},mounted:function(){var t=this;setTimeout((function(){t.checkedClicItemMenu()}),1e3)},methods:{logout:function(){localStorage.removeItem("token"),this.$router.push("/")},expandMenu:function(){$("#cms-sidebar").hasClass("active")?$("#cms-sidebar").hide(100).removeClass("active"):$("#cms-sidebar").show(100).addClass("active")},checkedClicItemMenu:function(){$("#cms-sidebar .sid-link").click((function(){$("#cms-sidebar").hasClass("active")&&$("#cms-sidebar").hide().removeClass("active")}))},getUser:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["a"].getUser();case 2:a=e.sent,t.user.email=a.data.email,t.user.rol=a.data.rol;case 5:case"end":return e.stop()}}),e)})))()}}},o=c,l=(a("3109"),a("2877")),u=Object(l["a"])(o,n,i,!1,null,null,null);e["a"]=u.exports}}]);
//# sourceMappingURL=chunk-229601f0.be96443f.js.map