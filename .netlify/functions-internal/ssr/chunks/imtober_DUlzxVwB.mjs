import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_BrOuvGzX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Alle thema’s van CreatedBy_Imrie</p>\n<p><img src=\"/posts/imtober/imtober-chart.jfif\" alt=\"\" title=\"Imtober\"></p>\n<p>De eerste tekening voor Imtober heeft als thema “Robot”</p>\n<p><img src=\"/posts/imtober/day1-robot.jpg\" alt=\"\" title=\"Robot\"></p>\n<p><img src=\"/posts/imtober/deconstruct.jpg\" alt=\"\" title=\"Deconstruct\"></p>\n<p><img src=\"/posts/imtober/demon-puzzle.jpg\" alt=\"\" title=\"Demon Puzzle\"></p>\n<p><img src=\"/posts/imtober/forest-creatures.GIF\" alt=\"\" title=\"Forest Creatures\"></p>\n<p><img src=\"/posts/imtober/kabouter.jpg\" alt=\"\" title=\"Kabouter\"></p>\n<p><img src=\"/posts/imtober/paddenstoelenhuis.jpg\" alt=\"\" title=\"Paddenstoelenhuis\"></p>";

				const frontmatter = {"title":"Imtober","description":"Béla doet mee met Imtober","image":"day1-robot.jpg","date":"2024-10-01 00:00:00+0000","tags":["Tekeningen"],"categories":["Art"]};
				const file = "C:/Users/bruno/dev/belablog/src/content/posts/imtober.md";
				const url = undefined;
				function rawContent() {
					return "\r\n\r\nAlle thema's van CreatedBy_Imrie\r\n\r\n![](/posts/imtober/imtober-chart.jfif \"Imtober\")\r\n\r\nDe eerste tekening voor Imtober heeft als thema \"Robot\"\r\n\r\n![](/posts/imtober/day1-robot.jpg \"Robot\")\r\n\r\n![](/posts/imtober/deconstruct.jpg \"Deconstruct\")\r\n\r\n![](/posts/imtober/demon-puzzle.jpg \"Demon Puzzle\")\r\n\r\n![](/posts/imtober/forest-creatures.GIF \"Forest Creatures\")\r\n\r\n![](/posts/imtober/kabouter.jpg \"Kabouter\")\r\n\r\n![](/posts/imtober/paddenstoelenhuis.jpg \"Paddenstoelenhuis\")\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
