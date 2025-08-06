import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_BrOuvGzX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Vandaag was Béla geschrokken van de skeletten in the Sokpop spelletje <a target=\"_blank\" href=\"https://sokpop.itch.io/krakens-curse\">Kraken’s Curse</a>.</p>\n<p><img src=\"/posts/island-game/kraken_0.jpg\" alt=\"\" title=\"Kraken&#x27;s curse drawing 1\"> <img src=\"/posts/island-game/kraken_1.jpg\" alt=\"\" title=\"Kraken&#x27;s curse drawing 2\"> <img src=\"/posts/island-game/kraken_2.jpg\" alt=\"\" title=\"Kraken&#x27;s curse drawing 3\"></p>\n<p>Eerst wisten we niet hoe <a target=\"_blank\" href=\"https://sokpop.itch.io/dino-game\">Dino Game</a> Dino Game werkte, maar dan vonden we een manier om de controller aan te sluiten.</p>\n<p><img src=\"/posts/island-game/dino.png\" alt=\"\" title=\"Dino Game\"></p>";

				const frontmatter = {"title":"Kraken's Curse and Dino game by sokpop","description":"Nieuwe spelletjes van Sokpop","date":"2024-09-01 01:00:00+0000","image":"kraken.png","tags":["sokpop","Steam","Tekeningen"],"categories":["Gaming","Art"]};
				const file = "C:/Users/bruno/dev/belablog/src/content/posts/island-game.md";
				const url = undefined;
				function rawContent() {
					return "\r\n\r\nVandaag was Béla geschrokken van de skeletten in the Sokpop spelletje <a target=\"_blank\" href=\"https://sokpop.itch.io/krakens-curse\">Kraken's Curse</a>.\r\n\r\n![](/posts/island-game/kraken_0.jpg \"Kraken's curse drawing 1\") ![](/posts/island-game/kraken_1.jpg \"Kraken's curse drawing 2\") ![](/posts/island-game/kraken_2.jpg \"Kraken's curse drawing 3\")\r\n\r\nEerst wisten we niet hoe <a target=\"_blank\" href=\"https://sokpop.itch.io/dino-game\">Dino Game</a> Dino Game werkte, maar dan vonden we een manier om de controller aan te sluiten.\r\n\r\n![](/posts/island-game/dino.png \"Dino Game\")\r\n";
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
