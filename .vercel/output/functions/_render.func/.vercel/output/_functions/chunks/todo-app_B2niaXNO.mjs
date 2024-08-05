import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B5-HWYXN.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"project-overview\">Project Overview</h2>\n<p><strong>Todo-app</strong> is a fully responsive local storage app with weather display and song advise related with the current weater,\r\nIt has all the functionality that the simple todo application needs. When user wants to edit the todo list item, a promp appear in the top of the windows, like an alert.\r\nThe todo app also displays the current weather with icons and user can get a random song from the database related with the current weather.</p>\n<h2 id=\"objectives\">Objectives</h2>\n<ol>\n<li>\n<p>With the stylish background created on canva user can have a simple  functionalities todo app with javascript class.</p>\n</li>\n<li>\n<p>Implement current information on the weather.</p>\n</li>\n<li>\n<p>Get random song according to the weather that user syncronise themselves with rhydm, lyrics rather than the occasional burden of the weather.</p>\n</li>\n</ol>";

				const frontmatter = {"title":"Todo App saves on Local Storage","image":"todoapp.png","github":"https://github.com/juditanita/class-todo","url":"https://todoandweathermusic.netlify.app/","tags":["javascipt","api"],"slug":"Todo-App"};
				const file = "C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/content/project/todo-app.md";
				const url = undefined;
				function rawContent() {
					return "\r\n\r\n## Project Overview\r\n\r\n__Todo-app__ is a fully responsive local storage app with weather display and song advise related with the current weater,\r\nIt has all the functionality that the simple todo application needs. When user wants to edit the todo list item, a promp appear in the top of the windows, like an alert. \r\nThe todo app also displays the current weather with icons and user can get a random song from the database related with the current weather.\r\n\r\n\r\n## Objectives\r\n\r\n   1. With the stylish background created on canva user can have a simple  functionalities todo app with javascript class.   \r\n\r\n   2. Implement current information on the weather.    \r\n\r\n   3. Get random song according to the weather that user syncronise themselves with rhydm, lyrics rather than the occasional burden of the weather.  \r\n\r\n\r\n";
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
