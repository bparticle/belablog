import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_BrOuvGzX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>In de droom van Béla was hij de robot van het spelletje <a target=\"_blank\" href=\"https://amanita-design.net/games/machinarium.html\">Machinarium</a>, en moest de meisjesrobot gered worden van de bad guys. Er kwamen handgranaten aan te pas, en trappen, en vallen en vliegen.</p>\n<p><img src=\"/posts/belas-droom/belas-droom.jpg\" alt=\"Béla&#x27;s droom\"></p>";

				const frontmatter = {"title":"Béla's droom","description":"Een droom over een ander Machinarium spelletje","date":"2024-08-31 00:00:00+0000","image":"droom-cover.jpg","categories":["Stories"]};
				const file = "C:/Users/bruno/dev/belablog/src/content/posts/belas-droom.md";
				const url = undefined;
				function rawContent() {
					return "\r\n\r\nIn de droom van Béla was hij de robot van het spelletje <a target=\"_blank\" href=\"https://amanita-design.net/games/machinarium.html\">Machinarium</a>, en moest de meisjesrobot gered worden van de bad guys. Er kwamen handgranaten aan te pas, en trappen, en vallen en vliegen.\r\n\r\n![Béla's droom](/posts/belas-droom/belas-droom.jpg)";
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
