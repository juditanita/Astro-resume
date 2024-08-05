import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B5-HWYXN.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"project-overview\">Project Overview</h2>\n<p><strong>Driway</strong> is a fully responsive designed landing page, with engaging features cards. With a .</p>\n<h2 id=\"objectives\">Objectives</h2>\n<ol>\n<li>\n<p>Develop a user-friendly web and mobile landing page that shows features and process, teams and plans.</p>\n</li>\n<li>\n<p>Focus on real-world impact.</p>\n</li>\n<li>\n<p>Utilize bootstrap style to create a clear easy to see through information page.</p>\n</li>\n</ol>";

				const frontmatter = {"title":"Driway","image":"drivingreview.png","github":"https://github.com/juditanita/driving-school","url":"https://driving-instructors.netlify.app","tags":["html5","bootstrap","css3"],"slug":"Driving School Landing page"};
				const file = "C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/content/project/drivingschool-landingpage.md";
				const url = undefined;
				function rawContent() {
					return "\r\n\r\n## Project Overview\r\n\r\n__Driway__ is a fully responsive designed landing page, with engaging features cards. With a . \r\n\r\n## Objectives\r\n\r\n   1. Develop a user-friendly web and mobile landing page that shows features and process, teams and plans.   \r\n\r\n   2. Focus on real-world impact.    \r\n\r\n   3. Utilize bootstrap style to create a clear easy to see through information page.     \r\n\r\n \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n";
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
