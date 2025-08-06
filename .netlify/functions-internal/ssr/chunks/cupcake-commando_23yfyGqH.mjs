import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_BrOuvGzX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Kapitein Cupcake commando centrum in Béla zijn kamer.</p>\n<p><img src=\"/posts/cupcake-commando/03.jpg\" alt=\"\" title=\"Cupcake commando 1\"> <img src=\"/posts/cupcake-commando/02.jpg\" alt=\"\" title=\"Cupcake commando 3\"></p>\n<p><img src=\"/posts/cupcake-commando/00.jpg\" alt=\"\" title=\"Cupcake commando 1\"> <img src=\"/posts/cupcake-commando/01.jpg\" alt=\"\" title=\"Cupcake commando 2\"></p>";

				const frontmatter = {"title":"Het Kapitein Cupcake commando centrum","description":"In de Dogman boeken van Dav Pilkey is er een Kapitein Cupcake personage en Béla heeft het commando centrum nagemaakt.","date":"2024-05-01 01:00:00+0000","image":"02.jpg","tags":["Tekeningen"],"categories":["Books","Art"]};
				const file = "C:/Users/bruno/dev/belablog/src/content/posts/cupcake-commando.md";
				const url = undefined;
				function rawContent() {
					return "\r\n\r\nKapitein Cupcake commando centrum in Béla zijn kamer.\r\n\r\n![](/posts/cupcake-commando/03.jpg \"Cupcake commando 1\") ![](/posts/cupcake-commando/02.jpg \"Cupcake commando 3\")\r\n\r\n![](/posts/cupcake-commando/00.jpg \"Cupcake commando 1\") ![](/posts/cupcake-commando/01.jpg \"Cupcake commando 2\") ";
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
