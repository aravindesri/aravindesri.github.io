(window["webpackJsonparcgis-storymaps-gallery"]=window["webpackJsonparcgis-storymaps-gallery"]||[]).push([[0],{37:function(e,t,a){e.exports=a(69)},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),c=a.n(o),s=a(2),i=a(3),l=a(5),p=a(4),u=a(6),m=a(30),h=a.n(m),d=a(13),g=a.n(d),f=a(8),b=a.n(f),y=a(34),j=a.n(y),k=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(j.a,{href:this.props.href,target:"_blank",onClick:function(){return console.log("clicked")}},this.props.children)}}]),t}(r.a.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.isToggled?"https://storymapsqa.arcgis.com/collections/".concat(this.props.id):this.props.href;return r.a.createElement(b.a,{className:"card block trailer-1 animated-fade-in",key:this.props.id},r.a.createElement(f.CardImage,{className:"card-image",src:this.props.src,caption:"Author:"+this.props.owner,alt:this.props.title}),r.a.createElement(f.CardContent,{className:"card-content"},r.a.createElement(f.CardTitle,null,this.props.title)),r.a.createElement(k,{href:e},"View Story"))}}]),t}(r.a.Component),O=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.isOn;return r.a.createElement("label",{style:{marginTop:"20px",marginLeft:"30px"}},"View stories in QA",r.a.createElement("input",{type:"checkbox",onChange:this.props.onToggle,checked:e}))}}]),t}(r.a.Component),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).onToggle=function(e){a.setState({toggle:e.target.checked})},a.state={results:[],toggle:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://www.arcgis.com/sharing/rest/search?q=type:StoryMap%20AND%20typekeywords:storymapcollection&countFields=access,contentstatus,categories&sortorder=desc&sortfield=modified&num=200&f=pjson").then(function(t){var a=t.data.results,n=t.data.total,r=t.data.num;e.setState({results:a,total:n,num:r})})}},{key:"render",value:function(){var e=this;return r.a.createElement(g.a,null,r.a.createElement("header",{className:"top-nav fade-in"},r.a.createElement("div",{style:{display:"inline-flex",float:"left"}},r.a.createElement("h4",{style:{marginTop:"15px",marginLeft:"20px"}},"ArcGIS StoryMaps Gallery"),r.a.createElement(O,{onToggle:this.onToggle})),r.a.createElement("span",{style:{marginTop:"20px",marginRight:"140px",float:"right"}},"Showing ",r.a.createElement("strong",null,this.state.total)," collections")),r.a.createElement("div",{className:"grid-container leader-1"},r.a.createElement("div",{className:"column-24"},r.a.createElement("div",{className:"padding-leader-1 block-group block-group-4-up tablet-block-group-3-up phone-block-group-1-up"},this.state.results.map(function(t){return r.a.createElement(E,{key:t.id,src:"https://www.arcgis.com/sharing/rest/content/items/".concat(t.id,"/info/").concat(t.thumbnail),id:t.id,title:t.title,owner:t.owner,href:"https://storymaps.arcgis.com/collections/".concat(t.id),isToggled:e.state.toggle})})))))}}]),t}(r.a.Component);c.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.41ad60ab.chunk.js.map