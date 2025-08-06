import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_BrOuvGzX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>We hebben een nieuwe buro in Béla zijn kamer gezet!</p>\n<p><img src=\"/posts/nieuw-burootje/IMG_5902.jpg\" alt=\"\" title=\"Burootje 1\"> <img src=\"/posts/nieuw-burootje/IMG_5903.jpg\" alt=\"\" title=\"Burootje 2\"> <img src=\"/posts/nieuw-burootje/IMG_5907.jpg\" alt=\"\" title=\"Burootje 2\"></p>\n<p><img src=\"/posts/nieuw-burootje/IMG_5904.jpg\" alt=\"\" title=\"Burootje 1\"> <img src=\"/posts/nieuw-burootje/IMG_5905.jpg\" alt=\"\" title=\"Burootje 2\"> <img src=\"/posts/nieuw-burootje/IMG_5906.jpg\" alt=\"\" title=\"Burootje 3\"></p>\n<p><img src=\"/posts/nieuw-burootje/IMG_5908.jpg\" alt=\"\" title=\"Burootje 1\"> <img src=\"/posts/nieuw-burootje/IMG_5909.jpg\" alt=\"\" title=\"Burootje 2\"></p>";

				const frontmatter = {"title":"Een nieuw burootje voor Béla","description":"Elk jaar maaktne we een kroon voor Béla zijn verjaardag","date":"2024-08-31 01:00:00+0000","image":"IMG_5907.jpg","tags":["Home"],"categories":["Stories"]};
				const file = "C:/Users/bruno/dev/belablog/src/content/posts/nieuw-burootje.md";
				const url = undefined;
				function rawContent() {
					return "\r\n\r\nWe hebben een nieuwe buro in Béla zijn kamer gezet!\r\n\r\n![](/posts/nieuw-burootje/IMG_5902.jpg \"Burootje 1\") ![](/posts/nieuw-burootje/IMG_5903.jpg \"Burootje 2\") ![](/posts/nieuw-burootje/IMG_5907.jpg \"Burootje 2\") \r\n\r\n![](/posts/nieuw-burootje/IMG_5904.jpg \"Burootje 1\") ![](/posts/nieuw-burootje/IMG_5905.jpg \"Burootje 2\") ![](/posts/nieuw-burootje/IMG_5906.jpg \"Burootje 3\")\r\n\r\n![](/posts/nieuw-burootje/IMG_5908.jpg \"Burootje 1\") ![](/posts/nieuw-burootje/IMG_5909.jpg \"Burootje 2\")\r\n";
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
