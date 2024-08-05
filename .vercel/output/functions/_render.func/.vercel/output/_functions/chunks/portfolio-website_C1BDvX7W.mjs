import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B5-HWYXN.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"project-overview\">Project Overview</h2>\n<p><strong>Judit Portfolio</strong> is a fully responsive portfolio website.</p>\n<h2 id=\"objectives\">Objectives</h2>\n<ol>\n<li>\n<p>Develop a user-friendly web and mobile website with clear code of resume section.</p>\n</li>\n<li>\n<p>Utilize astro tailwind and md files.</p>\n</li>\n</ol>";

				const frontmatter = {"title":"Judit Portfolio","image":"portfolio.png","github":"https://github.com/juditanita/Astro-resume","url":"","tags":["astro","tailwind-css","markdown","css3","html5","javascript"],"slug":"Judit Portfolio"};
				const file = "C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/content/project/portfolio-website.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## Project Overview\r\n\r\n__Judit Portfolio__ is a fully responsive portfolio website.\r\n\r\n\r\n## Objectives\r\n\r\n   1. Develop a user-friendly web and mobile website with clear code of resume section.   \r\n\r\n   2. Utilize astro tailwind and md files.  \r\n   \r\n";
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
