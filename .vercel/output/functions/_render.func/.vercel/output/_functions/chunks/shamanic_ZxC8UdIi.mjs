import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B5-HWYXN.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"project-overview\">Project Overview</h2>\n<p><strong>Mystic</strong> is a fully responsive designed webshop with multiple admin possibilites,\r\nencourages shops  to cohibit with small business owner who creates retreat while also allows user to buy product through the website.</p>\n<h2 id=\"objectives\">Objectives</h2>\n<ol>\n<li>\n<p>Develop a beautifully designed shopify-themed user-friendly web and mobile website.</p>\n</li>\n<li>\n<p>Helps business to list their retreat through online shops.</p>\n</li>\n<li>\n<p>Utilize canva for designing logo and other elements, styling with tailwind using react and corrently miragejs.</p>\n</li>\n</ol>";

				const frontmatter = {"title":"Mystic Tyme","image":"healing.png","github":"https://github.com/juditanita/mysticthyme","url":"https://herbsshopandretreat.netlify.app/","tags":["react","tailwind-css","miragejs","javascipt"],"slug":"Mystic Shamanic Webshop"};
				const file = "C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/content/project/shamanic.md";
				const url = undefined;
				function rawContent() {
					return "\r\n\r\n## Project Overview\r\n\r\n__Mystic__ is a fully responsive designed webshop with multiple admin possibilites,\r\n encourages shops  to cohibit with small business owner who creates retreat while also allows user to buy product through the website.\r\n\r\n\r\n## Objectives\r\n\r\n   1. Develop a beautifully designed shopify-themed user-friendly web and mobile website.   \r\n\r\n   2. Helps business to list their retreat through online shops.    \r\n\r\n   3. Utilize canva for designing logo and other elements, styling with tailwind using react and corrently miragejs.  \r\n\r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"project-overview","text":"Project Overview"},{"depth":2,"slug":"objectives","text":"Objectives"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
