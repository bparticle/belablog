import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_BrOuvGzX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Dit zijn leuke dingetjes op YouTube.</p>";

				const frontmatter = {"title":"Leuke dingetjes","description":"Leuke dingetjes op het internet","date":"2024-08-26 00:00:00+0000","tags":["leuke dingetjes","youTube","3D"],"image":"1.png","categories":["STEM"]};
				const file = "C:/Users/bruno/dev/belablog/src/content/posts/leuke-dingetjes.md";
				const url = undefined;
				function rawContent() {
					return "\r\n\r\nDit zijn leuke dingetjes op YouTube.\r\n\r\n\r\n";
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
