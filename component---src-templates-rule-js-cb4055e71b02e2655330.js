(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{143:function(e,a,l){"use strict";l.r(a),l.d(a,"query",function(){return o});l(75),l(74),l(76),l(56),l(37),l(167),l(35),l(166);var s=l(0),n=l.n(s),t=l(155),r=l(170),u=l.n(r),i=l(169),m=l(164),c=l(154);a.default=function(e){var a,l=e.data,s=l.rule,r=l.allRules,o=l.allGlossary,d=l.site,g=s.html,b=s.frontmatter,v=s.tableOfContents,f=s.fields.slug,h=new u.a.Converter,p="Rule | "+b.name+" | "+d.siteMetadata.title,y=f.replace("rules/",""),E="/testcases/"+y+"/rule-"+y+"-testcases-for-em-report-tool.json",k=function(e){var a=[];return Object.keys(m).forEach(function(l){m[l].forEach(function(s){s.slug!==e||a.includes(l)||a.push(l)})}),a};return n.a.createElement(t.a,null,n.a.createElement(c.a,{title:p,keywords:d.siteMetadata.keywords}),n.a.createElement("section",{className:"page-rule"},n.a.createElement("section",null,n.a.createElement("header",null,n.a.createElement("h1",null,b.name)),n.a.createElement("br",null),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:h.makeHtml(b.description)}}),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:g}}),function(e){var a=k(e);if(!a)return null;var l=o.edges.filter(function(e){var l=e.node.frontmatter.key;return a.includes("#"+l)});return l.length?n.a.createElement(n.a.Fragment,null,n.a.createElement("br",null),n.a.createElement("hr",null),n.a.createElement("a",{id:"glossary-listing",href:"#glossary-listing"},n.a.createElement("h2",null,"Referenced Glossary")),l.map(function(e){var a=e.node,l=a.frontmatter,s=a.html,t=l.key;return n.a.createElement("article",{key:a.id},n.a.createElement("a",{id:t,href:"#"+t},n.a.createElement("h3",null,l.title)),n.a.createElement("i",null,"key: ",n.a.createElement("u",null,t)),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:s}}),n.a.createElement("br",null))})):null}(f)),n.a.createElement("div",{className:"toc"},n.a.createElement("ul",{className:"meta-data"},(a=b.rule_type)?n.a.createElement("li",null,n.a.createElement("span",{role:"heading","aria-level":"1",className:"heading"},"Rule Type"),n.a.createElement("p",null,a)):null,n.a.createElement("li",null,Object(i.d)(b.success_criterion)),n.a.createElement("li",null,Object(i.e)(b.test_aspects)),n.a.createElement("li",null,Object(i.a)(b.atomic_rules,r.edges,!0)),n.a.createElement("li",null,Object(i.b)(b.authors))),n.a.createElement("span",{role:"heading","aria-level":"1",className:"heading"},"Table of Contents"),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:v}}),n.a.createElement("ul",null,function(e){var a=k(e);return a&&o.edges.filter(function(e){var l=e.node.frontmatter.key;return a.includes("#"+l)}).length?n.a.createElement("li",null,n.a.createElement("a",{href:"#glossary-listing"},"Referenced Glossary")):null}(f)),n.a.createElement("span",{role:"heading","aria-level":"1",className:"heading"},"Download Testcases"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{className:"btn-secondary","aria-label":"test cases of rule for use in wcag em report tool",target:"_blank",rel:"noopener noreferrer",href:E},"For EM Report Tool"))))))};var o="3276776206"},164:function(e){e.exports={"#included-in-the-accessibility-tree":[{name:"ARIA state or property allowed",slug:"rules/5c01ea"},{name:"ARIA state or property has valid value",slug:"rules/6a7281"},{name:"Audio-only as a media alternative for text",slug:"rules/afb423"},{name:"Autocomplete valid",slug:"rules/73f2c2"},{name:"Buttons have an accessible name",slug:"rules/97a4e1"},{name:"Filename is valid accessible name",slug:"rules/9eb3f6"},{name:"Form field has accessible name",slug:"rules/e086e5"},{name:"Form field label is descriptive",slug:"rules/cc0f0a"},{name:"Heading is descriptive",slug:"rules/b49b2e"},{name:"Id attribute is unique",slug:"rules/3ea0c8"},{name:"Iframes with identical accessible names serve equivalent purpose",slug:"rules/4b1c6c"},{name:"Image button has accessible name",slug:"rules/59796f"},{name:"Image has accessible name",slug:"rules/23a2a8"},{name:"Links have an accessible name",slug:"rules/c487ae"},{name:"No keyboard trap non-standard navigation",slug:"rules/ebe86a"},{name:"Role attribute has valid value",slug:"rules/674b10"},{name:"Video as a media alternative for text",slug:"rules/ab4d13"},{name:"Video-only as a media alternative for text",slug:"rules/fd26cf"},{name:"audio elements have a transcript",slug:"rules/2eb176"},{name:"audio only has a text alternative",slug:"rules/e7aa44"},{name:"iframe has an accessible name",slug:"rules/cae760"},{name:"video only element has transcript",slug:"rules/ee13b5"}],"#semantic-role":[{name:"ARIA state or property allowed",slug:"rules/5c01ea"},{name:"Autocomplete valid",slug:"rules/73f2c2"},{name:"Buttons have an accessible name",slug:"rules/97a4e1"},{name:"Filename is valid accessible name",slug:"rules/9eb3f6"},{name:"Form field has accessible name",slug:"rules/e086e5"},{name:"Form field label is descriptive",slug:"rules/cc0f0a"},{name:"Heading is descriptive",slug:"rules/b49b2e"},{name:"Image has accessible name",slug:"rules/23a2a8"},{name:"Links have an accessible name",slug:"rules/c487ae"},{name:"Role attribute has valid value",slug:"rules/674b10"},{name:"Role has required states and properties",slug:"rules/4e8ab6"},{name:"label and name from content mismatch",slug:"rules/2ee8b8"}],"#non-empty":[{name:"ARIA state or property has valid value",slug:"rules/6a7281"},{name:"Autocomplete valid",slug:"rules/73f2c2"},{name:"Buttons have an accessible name",slug:"rules/97a4e1"},{name:"Form field has accessible name",slug:"rules/e086e5"},{name:"HTML has lang attribute",slug:"rules/b5c3f8"},{name:"HTML lang and xml:lang match",slug:"rules/5b7ae0"},{name:"Image button has accessible name",slug:"rules/59796f"},{name:"Image has accessible name",slug:"rules/23a2a8"},{name:"Links have an accessible name",slug:"rules/c487ae"},{name:"Role attribute has valid value",slug:"rules/674b10"},{name:"Role has required states and properties",slug:"rules/4e8ab6"},{name:"Valid body lang attribute",slug:"rules/de46e4"},{name:"Validity of HTML Lang attribute",slug:"rules/bf051a"},{name:"iframe has an accessible name",slug:"rules/cae760"}],"#focusable":[{name:"ARIA state or property has valid value",slug:"rules/6a7281"},{name:"No keyboard trap",slug:"rules/80af7b"},{name:"No keyboard trap non-standard navigation",slug:"rules/ebe86a"},{name:"No keyboard trap standard navigation",slug:"rules/a1b64e"}],"#accessible-name":[{name:"ARIA state or property has valid value",slug:"rules/6a7281"},{name:"Buttons have an accessible name",slug:"rules/97a4e1"},{name:"Filename is valid accessible name",slug:"rules/9eb3f6"},{name:"Form field has accessible name",slug:"rules/e086e5"},{name:"Iframes with identical accessible names serve equivalent purpose",slug:"rules/4b1c6c"},{name:"Image button has accessible name",slug:"rules/59796f"},{name:"Image has accessible name",slug:"rules/23a2a8"},{name:"Links have an accessible name",slug:"rules/c487ae"},{name:"iframe has an accessible name",slug:"rules/cae760"},{name:"label and name from content mismatch",slug:"rules/2ee8b8"}],"#non-streaming-media-element":[{name:"Audio-only as a media alternative for text",slug:"rules/afb423"},{name:"audio elements have a transcript",slug:"rules/2eb176"},{name:"audio only has a text alternative",slug:"rules/e7aa44"}],"#visible":[{name:"Audio-only as a media alternative for text",slug:"rules/afb423"},{name:"Form field label is descriptive",slug:"rules/cc0f0a"},{name:"Heading is descriptive",slug:"rules/b49b2e"},{name:"Video as a media alternative for text",slug:"rules/ab4d13"},{name:"Video element description track",slug:"rules/f196ce"},{name:"Video has audio alternative",slug:"rules/eac66b"},{name:"Video only element has description track",slug:"rules/ac7dc6"},{name:"Video-only as a media alternative for text",slug:"rules/fd26cf"},{name:"audio elements have a transcript",slug:"rules/2eb176"},{name:"audio only has a text alternative",slug:"rules/e7aa44"},{name:"video element audio described",slug:"rules/1ea59c"},{name:"video element transcript",slug:"rules/1a02b0"},{name:"video has captions",slug:"rules/f51b46"},{name:"video only element has transcript",slug:"rules/ee13b5"},{name:"video only has an accessibile alternative",slug:"rules/c3232f"},{name:"video only has audio alternative",slug:"rules/d7ba54"},{name:"video with audio has audio description",slug:"rules/1ec09b"},{name:"video with audio has audio descriptions or transcript",slug:"rules/c5a4ea"}],"#visible-on-the-page":[{name:"Autocomplete valid",slug:"rules/73f2c2"},{name:"Id attribute is unique",slug:"rules/3ea0c8"},{name:"No keyboard trap non-standard navigation",slug:"rules/ebe86a"}],"#correct-autocomplete-field":[{name:"Autocomplete valid",slug:"rules/73f2c2"}],"#appropriate-field-for-the-form-control":[{name:"Autocomplete valid",slug:"rules/73f2c2"}],"#whitespace":[{name:"Document title is descriptive",slug:"rules/c4a8a4"},{name:"HTML Page has a title",slug:"rules/2779a5"},{name:"Iframes with identical accessible names serve equivalent purpose",slug:"rules/4b1c6c"}],"#filename":[{name:"Filename is valid accessible name",slug:"rules/9eb3f6"}],"#valid-language-subtag":[{name:"HTML lang and xml:lang match",slug:"rules/5b7ae0"},{name:"Valid body lang attribute",slug:"rules/de46e4"},{name:"Validity of HTML Lang attribute",slug:"rules/bf051a"}],"#section-of-content":[{name:"Heading is descriptive",slug:"rules/b49b2e"}],"#matching-characters":[{name:"Iframes with identical accessible names serve equivalent purpose",slug:"rules/4b1c6c"}],"#same-resource":[{name:"Iframes with identical accessible names serve equivalent purpose",slug:"rules/4b1c6c"}],"#equivalent-purpose":[{name:"Iframes with identical accessible names serve equivalent purpose",slug:"rules/4b1c6c"}],"#decorative":[{name:"Image has accessible name",slug:"rules/23a2a8"}],"#standard-keyboard-navigation":[{name:"No keyboard trap non-standard navigation",slug:"rules/ebe86a"},{name:"No keyboard trap standard navigation",slug:"rules/a1b64e"}],"#implicit-role":[{name:"Role has required states and properties",slug:"rules/4e8ab6"}],"#non-streaming":[{name:"Video as a media alternative for text",slug:"rules/ab4d13"},{name:"Video element description track",slug:"rules/f196ce"},{name:"Video only element has description track",slug:"rules/ac7dc6"},{name:"Video-only as a media alternative for text",slug:"rules/fd26cf"},{name:"video element audio described",slug:"rules/1ea59c"},{name:"video element transcript",slug:"rules/1a02b0"},{name:"video has captions",slug:"rules/f51b46"},{name:"video only element has transcript",slug:"rules/ee13b5"},{name:"video only has an accessibile alternative",slug:"rules/c3232f"},{name:"video only has audio alternative",slug:"rules/d7ba54"},{name:"video with audio has audio description",slug:"rules/1ec09b"},{name:"video with audio has audio descriptions or transcript",slug:"rules/c5a4ea"}],"#visible-text-content":[{name:"label and name from content mismatch",slug:"rules/2ee8b8"}],"#audio":[{name:"video has captions",slug:"rules/f51b46"}],"#captions":[{name:"video has captions",slug:"rules/f51b46"}]}},167:function(e,a,l){var s=l(26),n=l(36);l(168)("keys",function(){return function(e){return n(s(e))}})},168:function(e,a,l){var s=l(11),n=l(18),t=l(20);e.exports=function(e,a){var l=(n.Object||{})[e]||Object[e],r={};r[e]=a(l),s(s.S+s.F*t(function(){l(1)}),"Object",r)}}}]);
//# sourceMappingURL=component---src-templates-rule-js-cb4055e71b02e2655330.js.map