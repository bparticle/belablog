import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_BrOuvGzX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>De deur des Doods blijft een fascinerend onderwerp. Dit filmpje is gemaakt in Adobe Fresco en gemonteerd met muziek en geluiden in Adobe Rush, allemaal op de iPad.</p>\n<video controls>\n  <source src=\"/posts/deur-des-doods_2/deur-des-doods_2.MP4\" type=\"video/mp4\">\n  Your browser does not support the video tag.\n</video>\n<p>Hier is nog een versie van de deur des doods, deze keer in karton met een skelet er in.</p>\n<video controls>\n  <source src=\"/posts/deur-des-doods_2/deur-des-doods_karton.mp4\" type=\"video/mp4\">\n  Your browser does not support the video tag.\n</video>\n<p>Pixel art</p>\n<p><img src=\"/posts/deur-des-doods_2/skelet.jpg\" alt=\"skelet\"> <img src=\"/posts/deur-des-doods_2/deur-des-doods_2.jpg\" alt=\"Deur des doods\"></p>\n<p>Dit is hoe het Rush project er uit ziet, met de verschillende lagen audio en video.</p>\n<p><img src=\"/posts/deur-des-doods_2/rush-project.PNG\" alt=\"Deur des Doods rush project\"></p>";

				const frontmatter = {"title":"Deur des doods 2","description":"De deur des Doods maar nu is een filmpje","date":"2024-09-04 00:30:00+0000","image":"skelet_deur.png","tags":["Adobe Rush","Fresco","Animation","Pixel Art"],"categories":["Audio-Visual","Art","Crafts"]};
				const file = "C:/Users/bruno/dev/belablog/src/content/posts/deur-des-doods_2.md";
				const url = undefined;
				function rawContent() {
					return "\r\n\r\nDe deur des Doods blijft een fascinerend onderwerp. Dit filmpje is gemaakt in Adobe Fresco en gemonteerd met muziek en geluiden in Adobe Rush, allemaal op de iPad.\r\n\r\n<video controls>\n  <source src=\"/posts/deur-des-doods_2/deur-des-doods_2.MP4\" type=\"video/mp4\">\n  Your browser does not support the video tag.\n</video>\r\n\r\nHier is nog een versie van de deur des doods, deze keer in karton met een skelet er in.\r\n\r\n<video controls>\n  <source src=\"/posts/deur-des-doods_2/deur-des-doods_karton.mp4\" type=\"video/mp4\">\n  Your browser does not support the video tag.\n</video>\r\n\r\nPixel art\r\n\r\n![skelet](/posts/deur-des-doods_2/skelet.jpg) ![Deur des doods](/posts/deur-des-doods_2/deur-des-doods_2.jpg)\r\n\r\nDit is hoe het Rush project er uit ziet, met de verschillende lagen audio en video. \r\n\r\n![Deur des Doods rush project](/posts/deur-des-doods_2/rush-project.PNG)\r\n";
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
