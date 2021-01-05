(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{459:function(t,s,a){"use strict";a.r(s);var i=a(28),l=Object(i.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"标注问题和隐马尔科夫模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标注问题和隐马尔科夫模型"}},[t._v("#")]),t._v(" 标注问题和隐马尔科夫模型")]),t._v(" "),a("p",[a("strong",[t._v("标注问题（tagging problem）")]),t._v("（或"),a("strong",[t._v("序列标注问题（sequence labeling problem）")]),t._v("）是将源序列 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("msub",[a("mi",[t._v("x")]),a("mn",[t._v("1")])],1),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("msub",[a("mi",[t._v("x")]),a("mi",[t._v("n")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("x_1...x_n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.58056em","vertical-align":"-0.15em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal"},[t._v("x")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.30110799999999993em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[t._v("1")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])]),a("span",{staticClass:"mord"},[t._v(".")]),a("span",{staticClass:"mord"},[t._v(".")]),a("span",{staticClass:"mord"},[t._v(".")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal"},[t._v("x")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.151392em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathnormal mtight"},[t._v("n")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])])])])]),t._v("（标注模型的输入）映射到标记序列 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("msub",[a("mi",[t._v("y")]),a("mn",[t._v("1")])],1),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("msub",[a("mi",[t._v("y")]),a("mi",[t._v("n")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("y_1...y_n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.30110799999999993em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"-0.03588em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[t._v("1")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])]),a("span",{staticClass:"mord"},[t._v(".")]),a("span",{staticClass:"mord"},[t._v(".")]),a("span",{staticClass:"mord"},[t._v(".")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.151392em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"-0.03588em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathnormal mtight"},[t._v("n")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])])])])]),t._v("（标注模型的输出）的问题。")]),t._v(" "),a("p",[t._v("假设我们有训练集 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("msup",[a("mi",[t._v("x")]),a("mrow",[a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("i")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1)],1),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("msup",[a("mi",[t._v("y")]),a("mrow",[a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("i")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1)],1),a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("i")]),a("mo",[t._v("=")]),a("mn",[t._v("1...")]),a("mi",[t._v("m")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("(x^{(i)},y^{(i)}),i = 1...m")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1.138em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal"},[t._v("x")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8879999999999999em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mopen mtight"},[t._v("(")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("i")]),a("span",{staticClass:"mclose mtight"},[t._v(")")])])])])])])])])]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8879999999999999em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mopen mtight"},[t._v("(")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("i")]),a("span",{staticClass:"mclose mtight"},[t._v(")")])])])])])])])])]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("i")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"mord"},[t._v("1")]),a("span",{staticClass:"mord"},[t._v(".")]),a("span",{staticClass:"mord"},[t._v(".")]),a("span",{staticClass:"mord"},[t._v(".")]),a("span",{staticClass:"mord mathnormal"},[t._v("m")])])])]),t._v("，其中 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("msup",[a("mi",[t._v("x")]),a("mrow",[a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("i")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("x^{(i)}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.8879999999999999em","vertical-align":"0em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal"},[t._v("x")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8879999999999999em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mopen mtight"},[t._v("(")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("i")]),a("span",{staticClass:"mclose mtight"},[t._v(")")])])])])])])])])])])])]),t._v(" 为句子 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("msubsup",[a("mi",[t._v("x")]),a("mn",[t._v("1")]),a("mrow",[a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("i")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1)],1),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("msubsup",[a("mi",[t._v("x")]),a("msub",[a("mi",[t._v("n")]),a("mi",[t._v("i")])],1),a("mrow",[a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("i")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("x_1^{(i)}...x_{n_i}^{(i)}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1.311108em","vertical-align":"-0.26630799999999993em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal"},[t._v("x")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.0448em"}},[a("span",{staticStyle:{top:"-2.433692em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[t._v("1")])])]),a("span",{staticStyle:{top:"-3.2198em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mopen mtight"},[t._v("(")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("i")]),a("span",{staticClass:"mclose mtight"},[t._v(")")])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.26630799999999993em"}},[a("span")])])])])]),a("span",{staticClass:"mord"},[t._v(".")]),a("span",{staticClass:"mord"},[t._v(".")]),a("span",{staticClass:"mord"},[t._v(".")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal"},[t._v("x")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.0448em"}},[a("span",{staticStyle:{top:"-2.583408em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight"},[t._v("n")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.3280857142857143em"}},[a("span",{staticStyle:{top:"-2.357em","margin-left":"0em","margin-right":"0.07142857142857144em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.5em"}}),a("span",{staticClass:"sizing reset-size3 size1 mtight"},[a("span",{staticClass:"mord mathnormal mtight"},[t._v("i")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.143em"}},[a("span")])])])])])])])]),a("span",{staticStyle:{top:"-3.2197999999999998em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mopen mtight"},[t._v("(")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("i")]),a("span",{staticClass:"mclose mtight"},[t._v(")")])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.21669199999999994em"}},[a("span")])])])])])])])]),t._v("， "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("msup",[a("mi",[t._v("y")]),a("mrow",[a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("i")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("y^{(i)}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1.0824399999999998em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8879999999999999em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mopen mtight"},[t._v("(")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("i")]),a("span",{staticClass:"mclose mtight"},[t._v(")")])])])])])])])])])])])]),t._v(" 为标签序列 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("msubsup",[a("mi",[t._v("y")]),a("mn",[t._v("1")]),a("mrow",[a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("i")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1)],1),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("msubsup",[a("mi",[t._v("y")]),a("msub",[a("mi",[t._v("n")]),a("mi",[t._v("i")])],1),a("mrow",[a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("i")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("y_1^{(i)}...y_{n_i}^{(i)}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1.311108em","vertical-align":"-0.26630799999999993em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.0448em"}},[a("span",{staticStyle:{top:"-2.433692em","margin-left":"-0.03588em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[t._v("1")])])]),a("span",{staticStyle:{top:"-3.2198em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mopen mtight"},[t._v("(")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("i")]),a("span",{staticClass:"mclose mtight"},[t._v(")")])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.26630799999999993em"}},[a("span")])])])])]),a("span",{staticClass:"mord"},[t._v(".")]),a("span",{staticClass:"mord"},[t._v(".")]),a("span",{staticClass:"mord"},[t._v(".")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.0448em"}},[a("span",{staticStyle:{top:"-2.583408em","margin-left":"-0.03588em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight"},[t._v("n")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.3280857142857143em"}},[a("span",{staticStyle:{top:"-2.357em","margin-left":"0em","margin-right":"0.07142857142857144em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.5em"}}),a("span",{staticClass:"sizing reset-size3 size1 mtight"},[a("span",{staticClass:"mord mathnormal mtight"},[t._v("i")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.143em"}},[a("span")])])])])])])])]),a("span",{staticStyle:{top:"-3.2197999999999998em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mopen mtight"},[t._v("(")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("i")]),a("span",{staticClass:"mclose mtight"},[t._v(")")])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.21669199999999994em"}},[a("span")])])])])])])])]),t._v("。即 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("msubsup",[a("mi",[t._v("x")]),a("mi",[t._v("j")]),a("mrow",[a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("i")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("x^{(i)}_j")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1.4577719999999998em","vertical-align":"-0.4129719999999999em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal"},[t._v("x")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.0448em"}},[a("span",{staticStyle:{top:"-2.4231360000000004em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")])])]),a("span",{staticStyle:{top:"-3.2198em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mopen mtight"},[t._v("(")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("i")]),a("span",{staticClass:"mclose mtight"},[t._v(")")])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.4129719999999999em"}},[a("span")])])])])])])])]),t._v(" 是第 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("i")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("i")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.65952em","vertical-align":"0em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("i")])])])]),t._v(" 个训练句子的第 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("j")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("j")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.85396em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")])])])]),t._v(" 个单词，"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("msup",[a("mi",[t._v("y")]),a("mrow",[a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("i")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("y^{(i)}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1.0824399999999998em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8879999999999999em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mopen mtight"},[t._v("(")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("i")]),a("span",{staticClass:"mclose mtight"},[t._v(")")])])])])])])])])])])])]),t._v(" 是它的标签。那么标注问题就是从该训练集中学习出一个能把这些句子映射到其标签序列的函数。")]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"http://www.cs.columbia.edu/~mcollins/hmms-spring2013.pdf",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("Tagging Problems, and Hidden Markov Models (Notes)")]),t._v(". "),a("em",[t._v("Michael Collins")]),t._v(". Columbia University."),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.cs.columbia.edu/~mcollins/cs4705-spring2019/slides/tagging.pdf",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("Tagging Problems, and Hidden Markov Models (Slides)")]),t._v(". "),a("em",[t._v("Michael Collins")]),t._v(". Columbia University."),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://web.science.mq.edu.au/~mjohnson/papers/Johnson14-04LM-talk.pdf",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("The Noisy Channel Model and Markov Models")]),t._v(". "),a("em",[t._v("Mark Johnson")]),t._v(". Macquarie University."),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://doc.lagout.org/science/Artificial%20Intelligence/Natural%20Language%20Processing/Natural%20Language%20Processing%20for%20Online%20Applications%20Text%20Retrieval%2CExtraction%20and%20Categorization%20-%20Peter%20Jackson%20%2C%20Isabelle%20Moulinier.pdf",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("Natural Language Processing for Online Applications: Text Retrieval, Extraction and Categorization")]),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=l.exports}}]);