import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_BrOuvGzX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>De verjaardagskronen van Béla</p>\n<p><img src=\"/posts/verjaardags-kroon/03.jpg\" alt=\"\" title=\"Verjaardagskroon 1\"> <img src=\"/posts/verjaardags-kroon/04.jpg\" alt=\"\" title=\"Verjaardagskroon 2\"></p>\n<p><img src=\"/posts/verjaardags-kroon/00.jpg\" alt=\"\" title=\"Verjaardagskroon 1\"> <img src=\"/posts/verjaardags-kroon/01.jpg\" alt=\"\" title=\"Verjaardagskroon 2\"> <img src=\"/posts/verjaardags-kroon/02.jpg\" alt=\"\" title=\"Verjaardagskroon 3\"></p>";

				const frontmatter = {"title":"Verjaardagskronen","description":"Elk jaar maaktne we een kroon voor Béla zijn verjaardag","date":"2024-05-01 01:00:00+0000","image":"00.jpg","tags":["Tekeningen"],"categories":["Crafts"]};
				const file = "C:/Users/bruno/dev/belablog/src/content/posts/verjaardags-kroon.md";
				const url = undefined;
				function rawContent() {
					return "\r\n\r\nDe verjaardagskronen van Béla\r\n\r\n![](/posts/verjaardags-kroon/03.jpg \"Verjaardagskroon 1\") ![](/posts/verjaardags-kroon/04.jpg \"Verjaardagskroon 2\") \r\n\r\n![](/posts/verjaardags-kroon/00.jpg \"Verjaardagskroon 1\") ![](/posts/verjaardags-kroon/01.jpg \"Verjaardagskroon 2\") ![](/posts/verjaardags-kroon/02.jpg \"Verjaardagskroon 3\")\r\n";
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
