import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_BrOuvGzX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Twee jaar geleden had Béla een boek gekregen over Creaks, een spelletje van Amanita Design. Hij heeft nu het spelletje herontdekt en een paar van de monsters nagemaakt in Adobe Fresco op de iPad.</p>\n<video controls>\n  <source src=\"/posts/creaks/creaks_stoel.MP4\" type=\"video/mp4\">\n  Your browser does not support the video tag.\n</video>\n<video controls>\n  <source src=\"/posts/creaks/creaks_kast.MP4\" type=\"video/mp4\">\n  Your browser does not support the video tag.\n</video>\n<video controls>\n  <source src=\"/posts/creaks/creaks_globe.MP4\" type=\"video/mp4\">\n  Your browser does not support the video tag.\n</video>";

				const frontmatter = {"title":"Creaks","description":"Monsters uit Creaks, een spelletje van Amanita Design","date":"2024-09-14 01:00:00+0000","image":"creaks_tekeningen.jpg","tags":["Fresco","Tekeningen","Animation"],"categories":["Gaming","Audio-Visual"]};
				const file = "C:/Users/bruno/dev/belablog/src/content/posts/creaks.md";
				const url = undefined;
				function rawContent() {
					return "\r\n\r\nTwee jaar geleden had Béla een boek gekregen over Creaks, een spelletje van Amanita Design. Hij heeft nu het spelletje herontdekt en een paar van de monsters nagemaakt in Adobe Fresco op de iPad.\r\n\r\n<video controls>\r\n  <source src=\"/posts/creaks/creaks_stoel.MP4\" type=\"video/mp4\">\r\n  Your browser does not support the video tag.\r\n</video>\r\n\r\n<video controls>\r\n  <source src=\"/posts/creaks/creaks_kast.MP4\" type=\"video/mp4\">\r\n  Your browser does not support the video tag.\r\n</video>\r\n\r\n<video controls>\r\n  <source src=\"/posts/creaks/creaks_globe.MP4\" type=\"video/mp4\">\r\n  Your browser does not support the video tag.\r\n</video>";
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
