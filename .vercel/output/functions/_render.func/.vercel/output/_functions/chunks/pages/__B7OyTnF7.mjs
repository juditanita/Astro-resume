/* empty css                          */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, i as renderComponent, h as createAstro } from '../astro_B5-HWYXN.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from './404_CGrLQ2EQ.mjs';
import { $ as $$Tags, g as getCollection } from './__Do7eh75X.mjs';

const $$Astro$1 = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { project } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class=" overflow-hidden flex flex-col w-full mx-auto border bg-slate-200 border-1 hover:bg-white hover:border-indigo-500 rounded-xl p-2"> <div class="flex justify-between items-center py-4 px-5 pb-8 sm:py-3 "> <a${addAttribute("/projects/" + project.slug, "href")}> <p class="sm:w-full font-semibold text-lg hover:text-xl hover:text-bold  hover:underline transition duration-500 ease-in-out inline-block mb-2">The
${project.data.title}</p> </a> <a${addAttribute(project.data.github, "href")} target="_blank" class="flex items-end "> <div class="border-2 p-2 border-black bg-white hover:scale-110 transition ease-in-out delay-150"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg> </div> </a> </div> <a${addAttribute("/projects/" + project.slug, "href")}> <div class="relative my-2 h-[500px] border-2 border-white  overflow-hidden  rounded-xl"> <img class="w-full rounded-xl shadow object-fit hover:opacity-75 transition duration-300 ease-in-out"${addAttribute("/Website-img/" + project.data.image, "src")}${addAttribute(project.data.title, "alt")}> </div> </a> <a${addAttribute("/projects/" + project.slug, "href")}> <div class="flex items-center "> <div class="bg-violet-200 p-1 rounded-full hover:ring-4 hover:ring-violet-200"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style=" transform: ;msFilter:;"><path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"></path></svg> </div> <h2 class="pl-1  text-lg font-poppins font-bold text-top-color hover:scale-115 duration-200 ">
Read More
</h2> </div> </a> <!--tags --> ${renderComponent($$result, "Tags", $$Tags, { "tags": project.data.tags.slice(0, 3) })} </div>`;
}, "C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/components/ProjectCard.astro", void 0);

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { tag } = Astro2.params;
  if (tag === void 0) {
    throw new Error("Tag is required");
  }
  const allProjectInfo = await getCollection("project");
  const tagProject = allProjectInfo.filter((project) => project.data.tags.includes(tag));
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pb-8"> <a href="/projects" class="inline-block bg-gray-100 p-2 mb-6 hover:bg-indigo-500 hover:text-white mt-8">Back To Projects</a> <div class="py-8 mb-12"> <h1 class="flex justify-center text-3xl md:text-5xl font-bold capitalize">
All ${tag} projects
</h1> </div> <div class="grid grid-cols-1 gap-6 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 mb-12  overflow-hidden"> ${tagProject.map((project) => {
    return renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "project": project })}`;
  })} </div> </section> ` })}`;
}, "C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/pages/projects/tag/[...tag].astro", void 0);

const $$file = "C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/pages/projects/tag/[...tag].astro";
const $$url = "/projects/tag/[...tag]";

const ____tag_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ProjectCard as $, ____tag_ as _ };
