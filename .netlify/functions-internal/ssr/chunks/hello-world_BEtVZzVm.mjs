import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_BrOuvGzX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Welkom op de blog van Béla. Hier kun je allemaal dingetjes zien die ik leuk vind en heb geleerd. Bijvoorbeeld</p>\n<ul>\n<li>Tinkercad ⌨️</li>\n<li>Origami 🙇‍♂️</li>\n<li>Tekenen ✏️</li>\n<li>Knutselen ✂️</li>\n<li>Filmpjes maken 🎥</li>\n<li>Techniek ⚙️</li>\n<li>Electriciteit 💡</li>\n<li>Strips en boeken lezen 📕</li>\n<li>Met hondjes spelen 🐶</li>\n<li>Filmpjes kijken 🎬</li>\n<li>In een kartonnen doos zitten 📦</li>\n<li>Liedjes zingen 🎵</li>\n<li>Leuke geluidjes maken 🎺</li>\n<li>3D printen 🚢</li>\n<li>Gamen 🎮</li>\n</ul>";

				const frontmatter = {"title":"Hallo van Béla","description":"Welkom op de Béla Blog","image":"cover.jpg","date":"2024-08-25 00:00:00+0000","categories":["Stories"],"weight":1};
				const file = "C:/Users/bruno/dev/belablog/src/content/posts/hello-world.md";
				const url = undefined;
				function rawContent() {
					return "\r\n\r\nWelkom op de blog van Béla. Hier kun je allemaal dingetjes zien die ik leuk vind en heb geleerd. Bijvoorbeeld \r\n\r\n- Tinkercad ⌨️\r\n- Origami 🙇‍♂️\r\n- Tekenen ✏️\r\n- Knutselen ✂️\r\n- Filmpjes maken 🎥\r\n- Techniek ⚙️\r\n- Electriciteit 💡\r\n- Strips en boeken lezen 📕\r\n- Met hondjes spelen 🐶\r\n- Filmpjes kijken 🎬\r\n- In een kartonnen doos zitten 📦\r\n- Liedjes zingen 🎵\r\n- Leuke geluidjes maken 🎺\r\n- 3D printen 🚢\r\n- Gamen 🎮";
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
