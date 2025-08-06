import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_BrOuvGzX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"allerlei-tekeningen\">Allerlei tekeningen</h2>\n<p><img src=\"/posts/tekeningen/img20240924_10451137.jpg\" alt=\"\" title=\"Ghibli studio\">\r\n<img src=\"/posts/tekeningen/mug.jpg\" alt=\"\" title=\"grimwoud 2\"></p>\n<h2 id=\"slime-rancher\">slime Rancher</h2>\n<p><img src=\"/posts/tekeningen/machine.jpg\" alt=\"\" title=\"Slime rancher 2\">\r\n<img src=\"/posts/tekeningen/sleutel.jpg\" alt=\"\" title=\"Slime Rancher\"></p>\n<h2 id=\"pilgrims\">Pilgrims</h2>\n<p><img src=\"/posts/tekeningen/pilgrims_duivel_rebus.jpg\" alt=\"\" title=\"Pilgrims 1\">\r\n<img src=\"/posts/tekeningen/pilgrims_duivel2.jpg\" alt=\"\" title=\"Pilgrims 2\">\r\n<img src=\"/posts/tekeningen/pilgrims_duivel3.jpg\" alt=\"\" title=\"Pilgrims 3\"></p>\n<h2 id=\"pimpa--raka\">Pimpa &#x26; Raka</h2>\n<p><img src=\"/posts/tekeningen/pimpa_raka_0.jpg\" alt=\"\" title=\"Pimpa en Raka 1\">\r\n<img src=\"/posts/tekeningen/pimpa_raka_1.jpg\" alt=\"\" title=\"Pimpa en Raka 2\"></p>\n<p><img src=\"/posts/tekeningen/pimpa_raka_2.jpg\" alt=\"\" title=\"Pimpa en Raka 3\">\r\n<img src=\"/posts/tekeningen/pimpa_raka_3.jpg\" alt=\"\" title=\"Pimpa en Raka 3\"></p>\n<h1 id=\"creaks\">Creaks</h1>\n<p><img src=\"/posts/tekeningen/tafelwolf.jpg\" alt=\"\" title=\"Tafelwolf\"></p>";

				const frontmatter = {"title":"Tekeningen","description":"Allerlei tekeningen","image":"pimpa_raka_1.jpg","date":"2024-09-25 00:00:00+0000","tags":["Tekeningen"],"categories":["Art"]};
				const file = "C:/Users/bruno/dev/belablog/src/content/posts/tekeningen.md";
				const url = undefined;
				function rawContent() {
					return "\r\n\r\n## Allerlei tekeningen\r\n\r\n![](/posts/tekeningen/img20240924_10451137.jpg \"Ghibli studio\") \r\n![](/posts/tekeningen/mug.jpg \"grimwoud 2\") \r\n\r\n## slime Rancher\r\n\r\n![](/posts/tekeningen/machine.jpg \"Slime rancher 2\") \r\n![](/posts/tekeningen/sleutel.jpg \"Slime Rancher\")\r\n\r\n## Pilgrims\r\n\r\n![](/posts/tekeningen/pilgrims_duivel_rebus.jpg \"Pilgrims 1\") \r\n![](/posts/tekeningen/pilgrims_duivel2.jpg \"Pilgrims 2\") \r\n![](/posts/tekeningen/pilgrims_duivel3.jpg \"Pilgrims 3\")\r\n\r\n## Pimpa & Raka\r\n\r\n![](/posts/tekeningen/pimpa_raka_0.jpg \"Pimpa en Raka 1\") \r\n![](/posts/tekeningen/pimpa_raka_1.jpg \"Pimpa en Raka 2\")\r\n\r\n![](/posts/tekeningen/pimpa_raka_2.jpg \"Pimpa en Raka 3\")\r\n![](/posts/tekeningen/pimpa_raka_3.jpg \"Pimpa en Raka 3\")\r\n\r\n# Creaks\r\n\r\n![](/posts/tekeningen/tafelwolf.jpg \"Tafelwolf\")\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"allerlei-tekeningen","text":"Allerlei tekeningen"},{"depth":2,"slug":"slime-rancher","text":"slime Rancher"},{"depth":2,"slug":"pilgrims","text":"Pilgrims"},{"depth":2,"slug":"pimpa--raka","text":"Pimpa & Raka"},{"depth":1,"slug":"creaks","text":"Creaks"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
