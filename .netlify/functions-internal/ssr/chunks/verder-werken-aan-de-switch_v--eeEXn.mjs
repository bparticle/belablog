import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_BrOuvGzX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Vandaag hebben we samen in Blender gewerkt aan het oppoetsen van het switch ontwerp dat Béla gisteren had gemaakt in Tinkercad. Er waren een aantal probleempjes die we makkelijk konden oplossen. Daarna hebben we een testprint gemaakt en een uiteindelijke versie in twee kleuren.</p>\n<video controls>\n  <source src=\"/posts/verder-werken-aan-de-switch/kadyswitch.mp4\" type=\"video/mp4\">\n  Your browser does not support the video tag.\n</video>";

				const frontmatter = {"title":"Verder werken aan de switch","date":"2024-08-28 14:00:00+0000","description":"De switch van Kady oppoetsen ","image":"img_5832.jpeg","tags":["tinkercad","3d printing","experiment","design","engineering"],"categories":["STEM"]};
				const file = "C:/Users/bruno/dev/belablog/src/content/posts/verder-werken-aan-de-switch.md";
				const url = undefined;
				function rawContent() {
					return "\r\nVandaag hebben we samen in Blender gewerkt aan het oppoetsen van het switch ontwerp dat Béla gisteren had gemaakt in Tinkercad. Er waren een aantal probleempjes die we makkelijk konden oplossen. Daarna hebben we een testprint gemaakt en een uiteindelijke versie in twee kleuren.\r\n\r\n<video controls>\r\n  <source src=\"/posts/verder-werken-aan-de-switch/kadyswitch.mp4\" type=\"video/mp4\">\r\n  Your browser does not support the video tag.\r\n</video>";
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
