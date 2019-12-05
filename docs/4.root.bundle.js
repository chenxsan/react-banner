(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{95:function(s,a,n){"use strict";n.r(a),a.default='<p>Integrating the <code>Banner</code> with <a href="https://github.com/ReactTraining/react-router">React Router</a> is very straightforward. Once\nyou\'ve installed <code>react-router</code> and set up your application...</p>\n<p><strong>src/index.jsx</strong></p>\n<pre><code class="hljs language-js"><span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">\'react\'</span>\n<span class="hljs-keyword">import</span> ReactDOM <span class="hljs-keyword">from</span> <span class="hljs-string">\'react-dom\'</span>\n<span class="hljs-keyword">import</span> { BrowserRouter, Route } <span class="hljs-keyword">from</span> <span class="hljs-string">\'react-router-dom\'</span>\n<span class="hljs-keyword">import</span> Application <span class="hljs-keyword">from</span> <span class="hljs-string">\'.components/application\'</span>\n\nReactDOM.render((\n    <span class="xml"><span class="hljs-tag">&#x3C;<span class="hljs-name">BrowserRouter</span>></span>\n        <span class="hljs-tag">&#x3C;<span class="hljs-name">Route</span> <span class="hljs-attr">path</span>=<span class="hljs-string">"/"</span> <span class="hljs-attr">component</span>=<span class="hljs-string">{</span> <span class="hljs-attr">Application</span> } /></span>\n    <span class="hljs-tag">&#x3C;/<span class="hljs-name">BrowserRouter</span>></span>\n), document.querySelector(\'#root\'))</span></code></pre>\n<p>Your application might not be set up exactly as above, e.g. you might have a\nredux store or do some tricks for hot loading. The important point is that\nit\'s react-based and your <code>Application</code> component is the child of a <code>Route</code>.</p>\n<p>Now we\'ll simply pass the <code>url</code> from the <code>location</code> prop that <code>Route</code> provides\nand pass the <code>SPALink</code> we copied from <a href="">here</a>.</p>\n<p><strong>src/components/application.jsx</strong></p>\n<pre><code class="hljs language-js"><span class="hljs-keyword">const</span> Application = <span class="hljs-function"><span class="hljs-params">props</span> =></span> (\n    <span class="xml"><span class="hljs-tag">&#x3C;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"application"</span>></span>\n        <span class="hljs-tag">&#x3C;<span class="hljs-name">Banner</span>\n            <span class="hljs-attr">logo</span>=<span class="hljs-string">"SPA Example"</span>\n            <span class="hljs-attr">url</span>=<span class="hljs-string">{</span> <span class="hljs-attr">props.location.pathname</span> }\n            <span class="hljs-attr">link</span>=<span class="hljs-string">{</span> <span class="hljs-attr">SPALink</span> }\n            <span class="hljs-attr">items</span>=<span class="hljs-string">{[</span>\n                { "<span class="hljs-attr">content</span>"<span class="hljs-attr">:</span> "<span class="hljs-attr">Example</span> <span class="hljs-attr">Link</span>", "<span class="hljs-attr">url</span>"<span class="hljs-attr">:</span> "/<span class="hljs-attr">example</span>" },\n                { "<span class="hljs-attr">content</span>"<span class="hljs-attr">:</span> "<span class="hljs-attr">Another</span>", "<span class="hljs-attr">url</span>"<span class="hljs-attr">:</span> "/<span class="hljs-attr">another</span>" }\n            ]} /></span>\n    <span class="hljs-tag">&#x3C;/<span class="hljs-name">div</span>></span>\n)</span></code></pre>\n<p>All the links in the <code>Banner</code> will now use the <code>pushState</code> API via\n<code>react-router</code> rather than traditional navigation. Feel free to customize\n<code>SPALink</code> to your needs.</p>\n'}}]);
//# sourceMappingURL=4.root.bundle.js.map