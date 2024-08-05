import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B5-HWYXN.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"project-overview\">Project Overview</h2>\n<p><strong>Rifvy</strong> is a fully responsive bakery landing page.\r\nIt has a contact form, magazine displays, featured cake cards, stylish footer. The magazines pictures are created with canva.</p>\n<h2 id=\"objectives\">Objectives</h2>\n<ol>\n<li>\n<p>Learning Sass and Jquery with colorful designs.</p>\n</li>\n<li>\n<p>Utilising the Jquery slide in functionallities when user can see photos of the sample prices.</p>\n</li>\n<li>\n<p>Utilising the sass style.</p>\n</li>\n</ol>";

				const frontmatter = {"title":"Rifvy","image":"Flower-cake.png","github":"https://github.com/juditanita/cake-with-sass---jquery/settings","url":"https://flower-cake.netlify.app/","tags":["jquery","sass"],"slug":"Cake landing page"};
				const file = "C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/content/project/rifvy.md";
				const url = undefined;
				function rawContent() {
					return "\r\n\r\n## Project Overview\r\n\r\n__Rifvy__ is a fully responsive bakery landing page.\r\nIt has a contact form, magazine displays, featured cake cards, stylish footer. The magazines pictures are created with canva.\r\n\r\n\r\n## Objectives\r\n\r\n   1. Learning Sass and Jquery with colorful designs.   \r\n\r\n   2. Utilising the Jquery slide in functionallities when user can see photos of the sample prices.    \r\n\r\n   3. Utilising the sass style.  \r\n\r\n\r\n";
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
