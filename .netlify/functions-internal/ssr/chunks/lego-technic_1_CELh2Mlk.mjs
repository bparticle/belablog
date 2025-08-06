import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_BrOuvGzX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"een-deur-gemaakt-van-lego-technic\">Een deur gemaakt van Lego Technic</h2>\n<p>Deze techniek heeft Béla zelf verzonnen.</p>\n<video controls>\n  <source src=\"/posts/lego-technic_1/lego_technic.mp4\" type=\"video/mp4\">\n  Your browser does not support the video tag.\n</video>\n<h2 id=\"tinkercad\">Tinkercad</h2>";

				const frontmatter = {"title":"Lego Technic deur","date":"2024-09-04 01:30:00+0000","description":"Een zelf uitgevonden techniek om een brandkast te versterken met een dubbel slot.","image":"technic_0_door.png","tags":["lego","design","Tinkercad","engineering"],"categories":["STEM"]};
				const file = "C:/Users/bruno/dev/belablog/src/content/posts/lego-technic_1.md";
				const url = undefined;
				function rawContent() {
					return "\r\n\r\n## Een deur gemaakt van Lego Technic\r\n\r\nDeze techniek heeft Béla zelf verzonnen.\r\n\r\n<video controls>\n  <source src=\"/posts/lego-technic_1/lego_technic.mp4\" type=\"video/mp4\">\n  Your browser does not support the video tag.\n</video>\r\n\r\n## Tinkercad\r\n\r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"een-deur-gemaakt-van-lego-technic","text":"Een deur gemaakt van Lego Technic"},{"depth":2,"slug":"tinkercad","text":"Tinkercad"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
