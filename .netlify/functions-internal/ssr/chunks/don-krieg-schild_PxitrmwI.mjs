import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_BrOuvGzX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Don Krieg</p>";

				const frontmatter = {"title":"Don Krieg schild","date":"2024-09-22 00:00:00+0000","description":"Béla heeft het schild van Don Krieg gemaakt uit One Piece","image":"img_6126.jpeg","tags":["Knutselen","Tekeningen"],"categories":["Art"]};
				const file = "C:/Users/bruno/dev/belablog/src/content/posts/don-krieg-schild.md";
				const url = undefined;
				function rawContent() {
					return "\r\nDon Krieg\r\n";
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
