/* empty css                          */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as createAstro, i as renderComponent } from '../astro_B5-HWYXN.mjs';
import 'kleur/colors';
import { P as PROJECT_PER_PAGE, $ as $$MainLayout, a as $$Image, l as logo } from './404_CGrLQ2EQ.mjs';
import { g as getCollection } from './__Do7eh75X.mjs';
import { $ as $$ProjectCard } from './__B7OyTnF7.mjs';
import 'clsx';
/* empty css                          */
/* empty css                          */

const $$Astro$1 = createAstro();
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { currentPage, totalPages, disablePrevious, disableNext } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-between mt-16 my-4"> <a${addAttribute("/projects?page=" + (currentPage - 1), "href")}${addAttribute([
    "inline-block px-3 py-2 rounded-lg ",
    disablePrevious ? " bg-gray-100 text-gray-400 pointer-events-none " : " bg-indigo-100  hover:bg-indigo-600 hover:text-white "
  ], "class:list")}>
Previous
</a> <a${addAttribute("/projects?page=" + (currentPage + 1), "href")}${addAttribute([
    "inline-block px-3 py-2 rounded-lg",
    disableNext ? " bg-gray-100  text-gray-400  pointer-events-none" : " bg-indigo-100  hover:bg-indigo-600 hover:text-white "
  ], "class:list")}>
Next
</a> </div>`;
}, "C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/components/Pagination.astro", void 0);

const $$Astro = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index$1;
  const currentPage = +Astro2.url.searchParams.get("page") || 1;
  const allProjectInfo = await getCollection("project");
  const totalPages = Math.ceil(allProjectInfo.length / PROJECT_PER_PAGE);
  console.log(totalPages);
  const projectPerPage = allProjectInfo.slice((currentPage - 1) * PROJECT_PER_PAGE, currentPage * PROJECT_PER_PAGE);
  console.log(projectPerPage.length);
  const tags = allProjectInfo.flatMap((project) => project.data.tags);
  const uniqueTags = [...new Set(tags)];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Judit Szabo Projects & Snippets" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pb-8  mt-12 h-full"> <div class="p-4  my-20"> <h1 class="flex justify-center text-3xl md:text-5xl font-bold drop-shadow-md">
Recent Projects
</h1> </div> <div class=" w-10/12 flex items-center flex-wrap p-2 justify-center mx-auto mb-6">${uniqueTags.map((tag) => renderTemplate`<a${addAttribute("/projects/tag/" + tag, "href")}> <button type="button"> <span class=" bg-indigo-50 inline-flex text-primary py-0.5 px-3 items-center justify-between text-sm capitalize border border-1 border-slate-200 rounded-full hover:bg-black hover:text-white mb-2 mr-2"> <i${addAttribute("bx bxl-" + tag.toLowerCase(), "class")}></i> <span class="capitalize lg:inline leading-5 ml-1"> ${tag}</span></span> </button> </a>`)}</div> <div class="grid grid-cols-1 gap-12 md:grid-cols-2 w-10/12 my-12  place-items-center mx-auto  "> ${projectPerPage.map((project) => {
    return renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "project": project })}`;
  })} </div> ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "disablePrevious": currentPage === 1, "disableNext": currentPage === totalPages })} </section> ` })} `;
}, "C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/pages/projects/index.astro", void 0);

const $$file$1 = "C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/pages/projects/index.astro";
const $$url$1 = "/projects";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const portfolioPhoto = new Proxy({"src":"/_astro/aboutImg.C8eO2e0m.png","width":500,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/images/aboutImg.png";
							}
							
							return target[name];
						}
					});

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="pt-10 overflow-hidden bg-gray-50 dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16"> <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl"> <div class="grid items-center grid-cols-1 md:grid-cols-2"> <div class=" pt-6  flex flex-col pl-6 gap-4"> <span class="relative inline-block"> <span class="absolute inline-block w-2/6 leading-8 bottom-0.5 h-2 left-0 lg:left-60 bg-violet-100 "></span> <h1 class="font-medium leading-loose  text-gray-700 text-5xl ">
Welcome to
<br> </h1> <span class="drop-shadow-md ml-2  text-6xl text-indigo-400 p-8">Judit's
            
            Portfolio.</span> </span> <p class="leading-loose text-lg text-gray-900   md:w-3/4  text-justify py-8 font-normal">
I believe that technology allows us, to be creative and practical and
          to help millions of users not only to be able navigate through web
          applications but to have and engaging weblife with enriched designs.
</p> </div> <div class="relative   "> ${renderComponent($$result, "Image", $$Image, { "src": portfolioPhoto, "class": "relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110", "alt": "profile foto" })} </div> <div class="flex  flex-row items-center justify-between mt-6 "> <a href="/about"> <div class="flex items-center "> <div class="bg-violet-200 p-1"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="text-black" style=" transform: ;msFilter:;"><path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"></path></svg> </div> <h2 class="pl-2 uppercase text-lg font-poppins font-bold text-top-color ">
About
</h2> </div> </a> <a href="/contact" title="" class="transition-all duration-200 text-violet-200 w-full inline-block ml-8"> <button class="px-3 py-2 rounded-full bg-slate-900 text-white hidden sm:inline-block hover:bg-violet-600">
Contact me 🡭
</button></a> </div> </div> </div> </section> `;
}, "C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/components/Hero.astro", void 0);

const catsham = new Proxy({"src":"/_astro/catsham.B5YStQOs.png","width":478,"height":471,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/images/catsham.png";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allProjectInfo = await getCollection("project");
  const firstProject = allProjectInfo[4];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full pb-20"> ${renderComponent($$result2, "Hero", $$Hero, {})} <article class="block my-20  bg-indigo-50 relative w-full md:w-9/12 mx-auto text-center  rounded-xl   shadow-md shadow-slate-300 p-6"> <h2 class="py-4 text-5xl text-black"> Featured Project</h2> <div class="absolute top-0 right-0"> ${renderComponent($$result2, "Image", $$Image, { "class": " w-[50px] rounded-lg", "src": logo, "alt": "" })}</div> <!-- Starts component --> <div class=""> <div class="grid grid-cols-1 md:gap-8 md:grid-cols-2 lg:gap-24 items-center p-6 "> <div class=" flex flex-col items-start"> <p class="text-4xl mt-4  font-semibold text-gray-700 text-balance tracking-wide"> ${firstProject.data.title} </p> <p class="text-base  mt-4 text-gray-700 text-balance"> ${firstProject.slug} </p> <div class="mt-6 text-xs font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 text-gray-950"> <a${addAttribute(firstProject.data.url, "href")}> <div class="flex items-center "> <div class="bg-violet-200 p-1  hover:ring-4 hover:ring-violet-200"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style=" transform: ;msFilter:;"><path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"></path></svg> </div> <h3 class="pl-1  text-base font-poppins font-bold text-top-color hover:scale-115 duration-200 ">
Live Demo
</h3> </div> </a> </div> </div> <div class="h-full md:order-first"> <div class=" relative  p-2 "> ${renderComponent($$result2, "Image", $$Image, { "class": "bg-white  featured aspect-square  w-full  object-cover object-center ", "src": catsham, "alt": firstProject.data.title })} <!-- <img class=" bg-white shadow-box  overflow-scroll aspect-square  w-full  object-cover object-center " src={"/Website-img/" +firstProject.data.image} alt={firstProject.data.title}/> --> </div> </div> </div> </div> <!-- Ends component --> </article> </div> ` })} `;
}, "C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/pages/index.astro", void 0);

const $$file = "C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i, portfolioPhoto as p };
