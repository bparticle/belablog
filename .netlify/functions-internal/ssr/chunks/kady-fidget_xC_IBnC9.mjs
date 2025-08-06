import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_BrOuvGzX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Gebasseerd op een YouTube short van Kady 3D printing, heeft Béla een twee verschillende fidget toys nagemaakt from scratch in Tinkercad.</p>\n<!--more-->\n<h2 id=\"tinkercad-process\">Tinkercad process</h2>\n<p>Helemaal van nul begonnen en enkel met de video als reference heeft Béla de mechaniek nagebouwd door simpele vormen met elkaar te combineren in Tinkercad.</p>\n<video controls>\n  <source src=\"/posts/kady-fidget/kady-remake.mp4\" type=\"video/mp4\">\n  Your browser does not support the video tag.\n</video>\n<h2 id=\"3d-print\">3D print</h2>\n<p>Het uiteindelijke design hebben we geëxporteerd naar Blender en wat aanpassingen gedaan vooraleer het te exporteen als stl en in Bambu Studio te openen, en uiteindelijk te printen.</p>\n<p>de modellen hebben we op 70% grootte geprint om testen.</p>\n<p><img src=\"/posts/kady-fidget/1.jpg\" alt=\"Image 1\"> <img src=\"/posts/kady-fidget/2.jpg\" alt=\"Image 2\"></p>\n<h2 id=\"inspiratie\">Inspiratie</h2>";

				const frontmatter = {"title":"Kady fidget toy remake","date":"2024-08-25","description":"Gebasseerd op een fidget toy vanb Kady heeft Béla een 3D print gemaakt van zijn design","image":"1.jpg","tags":["tinkercad","3d printing","experiment","design","engineering"],"categories":["STEM"]};
				const file = "C:/Users/bruno/dev/belablog/src/content/posts/kady-fidget.md";
				const url = undefined;
				function rawContent() {
					return "\r\n\r\nGebasseerd op een YouTube short van Kady 3D printing, heeft Béla een twee verschillende fidget toys nagemaakt from scratch in Tinkercad.\r\n\r\n<!--more-->\r\n\r\n## Tinkercad process\r\n\r\nHelemaal van nul begonnen en enkel met de video als reference heeft Béla de mechaniek nagebouwd door simpele vormen met elkaar te combineren in Tinkercad.\r\n\r\n<video controls>\n  <source src=\"/posts/kady-fidget/kady-remake.mp4\" type=\"video/mp4\">\n  Your browser does not support the video tag.\n</video>\r\n\r\n## 3D print\r\n\r\nHet uiteindelijke design hebben we geëxporteerd naar Blender en wat aanpassingen gedaan vooraleer het te exporteen als stl en in Bambu Studio te openen, en uiteindelijk te printen.\r\n\r\nde modellen hebben we op 70% grootte geprint om testen.\r\n\r\n![Image 1](/posts/kady-fidget/1.jpg) ![Image 2](/posts/kady-fidget/2.jpg)\r\n\r\n## Inspiratie\r\n\r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"tinkercad-process","text":"Tinkercad process"},{"depth":2,"slug":"3d-print","text":"3D print"},{"depth":2,"slug":"inspiratie","text":"Inspiratie"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
