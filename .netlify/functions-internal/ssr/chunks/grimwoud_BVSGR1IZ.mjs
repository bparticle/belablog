import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_BrOuvGzX.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Béla heeft zijn favoriete beesten uit de Grimwoud boeken getekend: Bibi, een konijn dat boos wordt als je het schattig vindt, en Sofie de feestkraai, die altijd wilt feesten.</p>\n<p><img src=\"/posts/grimwoud/bibbie.jpg\" alt=\"\" title=\"grimwoud 1\"> <img src=\"/posts/grimwoud/feestkraai1.jpg\" alt=\"\" title=\"grimwoud 2\"> <img src=\"/posts/grimwoud/feestkraai2.jpg\" alt=\"\" title=\"grimwoud 2\"></p>\n<p><img src=\"/posts/grimwoud/feestkraai3.jpg\" alt=\"\" title=\"grimwoud 1\"> <img src=\"/posts/grimwoud/feestkraai4.jpg\" alt=\"\" title=\"grimwoud 2\"> <img src=\"/posts/grimwoud/feestkraai5.jpg\" alt=\"\" title=\"grimwoud 3\"></p>\n<p><img src=\"/posts/grimwoud/feestkraai6.jpg\" alt=\"\" title=\"grimwoud 1\"> <img src=\"/posts/grimwoud/feestkraai7.jpg\" alt=\"\" title=\"grimwoud 2\"></p>";

				const frontmatter = {"title":"Bibi en Sofie de feestkraai","description":"Bibi en de feestkraai van de Grimwoud boeken","date":"2024-09-15 01:00:00+0000","image":"feestkraai7.jpg","tags":["Tekeningen"],"categories":["Art","Books"]};
				const file = "C:/Users/bruno/dev/belablog/src/content/posts/grimwoud.md";
				const url = undefined;
				function rawContent() {
					return "\r\n\r\nBéla heeft zijn favoriete beesten uit de Grimwoud boeken getekend: Bibi, een konijn dat boos wordt als je het schattig vindt, en Sofie de feestkraai, die altijd wilt feesten.\r\n\r\n![](/posts/grimwoud/bibbie.jpg \"grimwoud 1\") ![](/posts/grimwoud/feestkraai1.jpg \"grimwoud 2\") ![](/posts/grimwoud/feestkraai2.jpg \"grimwoud 2\") \r\n\r\n![](/posts/grimwoud/feestkraai3.jpg \"grimwoud 1\") ![](/posts/grimwoud/feestkraai4.jpg \"grimwoud 2\") ![](/posts/grimwoud/feestkraai5.jpg \"grimwoud 3\")\r\n\r\n![](/posts/grimwoud/feestkraai6.jpg \"grimwoud 1\") ![](/posts/grimwoud/feestkraai7.jpg \"grimwoud 2\")\r\n";
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
