import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B5-HWYXN.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"project-overview\">Project Overview</h2>\n<p><strong>Petim</strong> is a fully responsive designed landing page.</p>\n<h2 id=\"objectives\">Objectives</h2>\n<ol>\n<li>\n<p>Create a pet care website that does more then allow cats and dogs to stay.</p>\n</li>\n<li>\n<p>Develop a  designed user-friendly web and mobile landing page.</p>\n</li>\n<li>\n<p>Utilize html, css, javascript for style and mobile functionality.</p>\n</li>\n</ol>";

				const frontmatter = {"title":"Petim","image":"petcare.png","github":"https://github.com/juditanita/petCare/","url":"https://pets-cares-1.netlify.app/","tags":["html5","css3","javascript"],"slug":"Pet Care Landing Page"};
				const file = "C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/content/project/pet-care-website.md";
				const url = undefined;
				function rawContent() {
					return "## Project Overview\r\n\r\n__Petim__ is a fully responsive designed landing page. \r\n\r\n\r\n## Objectives\r\n\r\n   1. Create a pet care website that does more then allow cats and dogs to stay.    \r\n\r\n   2. Develop a  designed user-friendly web and mobile landing page.     \r\n\r\n   3.  Utilize html, css, javascript for style and mobile functionality.     \r\n\r\n\r\n\r\n\r\n \r\n\r\n\r\n\r\n";
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
