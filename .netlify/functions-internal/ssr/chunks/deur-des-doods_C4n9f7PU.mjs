import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_BrOuvGzX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Béla vond een leeg doosje filament en maakte er een deur des doods van.</p>\n<video controls>\n  <source src=\"/posts/deur-des-doods/deur-des-doods.mp4\" type=\"video/mp4\">\n  Your browser does not support the video tag.\n</video>";

				const frontmatter = {"title":"Deur des doods","description":"Een leeg filament doosje wordt een griezelig knutselproject","date":"2024-09-02 01:00:00+0000","image":"deur-des-doods.png","tags":["knutselen"],"categories":["Crafts"]};
				const file = "C:/Users/bruno/dev/belablog/src/content/posts/deur-des-doods.md";
				const url = undefined;
				function rawContent() {
					return "\r\n\r\nBéla vond een leeg doosje filament en maakte er een deur des doods van.\r\n\r\n<video controls>\n  <source src=\"/posts/deur-des-doods/deur-des-doods.mp4\" type=\"video/mp4\">\n  Your browser does not support the video tag.\n</video>";
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
