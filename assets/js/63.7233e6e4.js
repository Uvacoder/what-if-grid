(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{528:function(t,s,e){"use strict";e.r(s);var a=e(55),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("Here is a list of APIs that can return some images and notes of the process of setting up NoneBot and CoolQ HTTP API (on my Mac).")]),t._v(" "),e("h2",{attrs:{id:"misc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#misc"}},[t._v("#")]),t._v(" Misc")]),t._v(" "),e("p",[t._v("I wrote a qqbot which can throw a picture of tempting food back to the people who send pictures of tempting food to you (which we called '放毒' in Chinese) automatically. I called this bot "),e("a",{attrs:{href:"https://github.com/Renovamen/AntiFood",target:"_blank",rel:"noopener noreferrer"}},[t._v("AntiFood"),e("OutboundLink")],1),t._v(", it is based on "),e("a",{attrs:{href:"https://github.com/richardchien/nonebot",target:"_blank",rel:"noopener noreferrer"}},[t._v("NoneBot"),e("OutboundLink")],1),t._v(". So here is a list of APIs that can return some images and notes of the process of setting up NoneBot and "),e("a",{attrs:{href:"https://github.com/richardchien/coolq-http-api",target:"_blank",rel:"noopener noreferrer"}},[t._v("CoolQ HTTP API"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"image-apis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#image-apis"}},[t._v("#")]),t._v(" Image APIs")]),t._v(" "),e("ul",[e("li",[t._v("Unsplash\n"),e("ul",[e("li",[t._v("Offical: https://source.unsplash.com/")]),t._v(" "),e("li",[t._v("Lorem Picsum: https://picsum.photos/")])])]),t._v(" "),e("li",[t._v("Cats: https://thecatapi.com/")]),t._v(" "),e("li",[t._v("Dogs: https://shibe.online/")]),t._v(" "),e("li",[t._v("Anime: http://img.xjh.me/")])]),t._v(" "),e("p",[t._v("Finally, I choose to crawl food pictures from Baidu Image...")]),t._v(" "),e("h2",{attrs:{id:"coolq-http-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#coolq-http-api"}},[t._v("#")]),t._v(" CoolQ HTTP API")]),t._v(" "),e("p",[t._v("NoneBot depends on CoolQ HTTP API ("),e("a",{attrs:{href:"https://cqhttp.cc/docs/4.14/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("docs"),e("OutboundLink")],1),t._v("), it can be deployed by using docker.")]),t._v(" "),e("p",[t._v("Pull docker image and create a folder for CoolQ:")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker pull richardchien/cqhttp:latest\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" coolq\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("Run it (on "),e("code",[t._v("127.0.0.1:9000")]),t._v(", default password is "),e("code",[t._v("MAX8char")]),t._v("):")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker run -ti --rm --name cqhttp-test "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" \n           -v "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("/coolq:/home/user/coolq "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n           -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000")]),t._v(":9000 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n           -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5700")]),t._v(":5700 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n           -e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("COOLQ_ACCOUNT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456789")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# qq id of the bot")]),t._v("\n           -e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("COOLQ_URL")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://dlsec.cqp.me/cqp-tuling "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n           -e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("CQHTTP_SERVE_DATA_FILES")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("yes "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n           richardchien/cqhttp:latest\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("h2",{attrs:{id:"nonebot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nonebot"}},[t._v("#")]),t._v(" NoneBot")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://nonebot.cqp.moe/guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Here"),e("OutboundLink")],1),t._v(" are docs of NoneBot.")]),t._v(" "),e("p",[t._v("Modify "),e("code",[t._v("coolq/app/io.github.richardchien.coolqhttpapi/config/123456789.ini")]),t._v(" (config file of CoolQ):")]),t._v(" "),e("div",{staticClass:"language-ini line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ini"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[123456789]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("serve_data_files")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" yes")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ws_reverse_api_url")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" ws://host.docker.internal:8080/ws/api/")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ws_reverse_event_url")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" ws://host.docker.internal:8080/ws/event/")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("use_ws_reverse")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" true")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[t._v("Here use "),e("code",[t._v("host.docker.internal")]),t._v(" but not "),e("code",[t._v("127.0.0.1")]),t._v(", because here CoolQ is running in docker.")]),t._v(" "),e("p",[t._v("Install NoneBot:")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("pip "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" nonebot\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("Then, just run "),e("code",[t._v("bot.py")]),t._v(".")]),t._v(" "),e("p",[t._v("Note that sending images needs CoolQ Pro, and CoolQ's CQ code can only send images under "),e("code",[t._v("coolq/data/image/")]),t._v(". But CoolQ HTTP API "),e("a",{attrs:{href:"https://cqhttp.cc/docs/4.14/#/CQCode",target:"_blank",rel:"noopener noreferrer"}},[t._v("enhances"),e("OutboundLink")],1),t._v(" it.")])])}),[],!1,null,null,null);s.default=n.exports}}]);