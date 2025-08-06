import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_BrOuvGzX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>We hebben een nieuw klik dingetje gevonden op het Kady kanaal en Béla is het aan het namaken op tinkercad.</p>\n<p>Hij was even triest omdat de dag voorbij was en hij morgen naar sportkamp gaat.</p>\n<p><img src=\"/posts/een-nieuw-ontwerp-van-kady/img_5819.jpeg\" alt=\"\" title=\"Kady3D\"></p>";

				const frontmatter = {"title":"Een nieuw ontwerp van Kady","date":"2024-08-27 03:00:00+0000","description":"Een nieuw ontwerp in Tinkercad","image":"img_5823.jpeg","tags":["Tinkercad"],"categories":["STEM"]};
				const file = "C:/Users/bruno/dev/belablog/src/content/posts/een-nieuw-ontwerp-van-kady.md";
				const url = undefined;
				function rawContent() {
					return "\r\nWe hebben een nieuw klik dingetje gevonden op het Kady kanaal en Béla is het aan het namaken op tinkercad.\r\n\r\nHij was even triest omdat de dag voorbij was en hij morgen naar sportkamp gaat.\r\n\r\n![](/posts/een-nieuw-ontwerp-van-kady/img_5819.jpeg \"Kady3D\")\r\n";
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
