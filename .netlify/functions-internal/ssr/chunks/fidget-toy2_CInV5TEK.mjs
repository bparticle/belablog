import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_BrOuvGzX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<!--more-->\n<h2 id=\"blender-process\">Blender process</h2>\n<p>Enkel wat aanpassingen</p>\n<h2 id=\"3d-print\">3D print</h2>\n<p>Deze keer gebruiken we twee kleuren voor de prints.</p>\n<p><img src=\"/posts/fidget-toy2/2.png\" alt=\"Image 2\"></p>";

				const frontmatter = {"title":"Kady fidget toy deel 2","date":"2024-08-26","description":"We printen een nieuwe versie van de werkende fidget toy","image":"1.png","tags":["tinkercad","3d printing","experiment","design","engineering"],"categories":["STEM"]};
				const file = "C:/Users/bruno/dev/belablog/src/content/posts/fidget-toy2.md";
				const url = undefined;
				function rawContent() {
					return "\r\n\r\n\r\n\r\n<!--more-->\r\n\r\n## Blender process\r\n\r\nEnkel wat aanpassingen\r\n\r\n## 3D print\r\n\r\nDeze keer gebruiken we twee kleuren voor de prints.\r\n\r\n![Image 2](/posts/fidget-toy2/2.png)\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"blender-process","text":"Blender process"},{"depth":2,"slug":"3d-print","text":"3D print"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
