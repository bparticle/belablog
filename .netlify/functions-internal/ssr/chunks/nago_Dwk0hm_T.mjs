import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_BrOuvGzX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"nago\">Nago</h2>\n<p>Nago is de poes uit Kirby spelletjes en Manga Mania boekjes.</p>\n<h3 id=\"tekeningen\">Tekeningen</h3>\n<p><img src=\"/posts/nago/IMG_20250806_123000_092_optimized.jpg\" alt=\"\" title=\"Nago tekeningen\"></p>\n<h3 id=\"kaartjes\">Kaartjes</h3>\n<p><img src=\"/posts/nago/NAGO1_s-ezgif.com-optimize.gif\" alt=\"\" title=\"NAGO animatie 1\"></p>\n<p><img src=\"/posts/nago/NAGO2_s-ezgif.com-optimize.gif\" alt=\"\" title=\"NAGO animatie 2\"></p>\n<p><img src=\"/posts/nago/NAGO3_s-ezgif.com-optimize.gif\" alt=\"\" title=\"NAGO animatie 3\"></p>\n<p><img src=\"/posts/nago/NAGO4_s-ezgif.com-optimize.gif\" alt=\"\" title=\"NAGO animatie 4\"></p>\n<p><img src=\"/posts/nago/NAGO5_s-ezgif.com-optimize.gif\" alt=\"\" title=\"NAGO animatie 5\"></p>";

				const frontmatter = {"title":"Nago","description":"Een verzameling Nago tekeningen en animaties","image":"IMG_20250806_123000_092_optimized.jpg","date":"2025-08-06 00:00:00+0000","tags":["Animatie"],"categories":["Art"]};
				const file = "C:/Users/bruno/dev/belablog/src/content/posts/nago.md";
				const url = undefined;
				function rawContent() {
					return "\r\n\r\n## Nago\r\n\r\nNago is de poes uit Kirby spelletjes en Manga Mania boekjes.\r\n\r\n### Tekeningen\r\n\r\n![](/posts/nago/IMG_20250806_123000_092_optimized.jpg \"Nago tekeningen\")\r\n\r\n### Kaartjes\r\n\r\n![](/posts/nago/NAGO1_s-ezgif.com-optimize.gif \"NAGO animatie 1\")\r\n\r\n![](/posts/nago/NAGO2_s-ezgif.com-optimize.gif \"NAGO animatie 2\")\r\n\r\n![](/posts/nago/NAGO3_s-ezgif.com-optimize.gif \"NAGO animatie 3\")\r\n\r\n![](/posts/nago/NAGO4_s-ezgif.com-optimize.gif \"NAGO animatie 4\")\r\n\r\n![](/posts/nago/NAGO5_s-ezgif.com-optimize.gif \"NAGO animatie 5\") ";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"nago","text":"Nago"},{"depth":3,"slug":"tekeningen","text":"Tekeningen"},{"depth":3,"slug":"kaartjes","text":"Kaartjes"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
