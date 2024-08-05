/* empty css                          */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, h as createAstro, g as addAttribute, i as renderComponent } from '../astro_B5-HWYXN.mjs';
import 'kleur/colors';
import { e as experienceData, s as skillTabs, a as $$Image, b as educationData, i as infoData, $ as $$MainLayout } from './404_CGrLQ2EQ.mjs';
import 'clsx';
/* empty css                          */

const AboutImg = new Proxy({"src":"/_astro/1.fQ26yvH7.png","width":810,"height":810,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/images/1.png";
							}
							
							return target[name];
						}
					});

const $$Astro$3 = createAstro();
const $$InfoCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$InfoCard;
  const { title, name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="border-b border-gray-200 flex justify-between items-center py-3 w-full px-2"> <p class="">${title}</p> <p class="">${name}</p> </div>`;
}, "C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/components/InfoCard.astro", void 0);

const $$Astro$2 = createAstro();
const $$DetailsEd = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$DetailsEd;
  const { qualification, schoolProvider, timeFrame, address, details } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="mt-2 border-b-2 break-inside-avoid pb-4 mb-2 bg-white px-2 "> <header> <h3 class="text-lg font-semibold text-gray-700 leading-snugish py-2 "> ${qualification} </h3> <p class="pb-2 flex flex-wrap items-center gap-1 justify-start text-sm leading-normal text-gray-500"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path><path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"></path></svg> ${timeFrame} </p> <p class="leading-normal  text-md flex flex-wrap gap-1 items-center"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M2 7v1l11 4 9-4V7L11 4z"></path><path d="M4 11v4.267c0 1.621 4.001 3.893 9 3.734 4-.126 6.586-1.972 7-3.467.024-.089.037-.178.037-.268V11L13 14l-5-1.667v3.213l-1-.364V12l-3-1z"></path></svg> ${schoolProvider} </p> <p class="leading-normal  text-md flex flex-wrap gap-1 items-center"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg> ${address} </p> </header> <p class=" text-gray-800 text-base mb-4 text-justify mt-2"> ${details} </p> </article>`;
}, "C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/components/DetailsEd.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div>${experienceData.map(
    ({ title, timeFrame, address, details }) => renderTemplate`<article class="  p-2  border-b-4 border-slate-50 pb-4 last:border-transparent"> <header> <h3 class="text-xl font-poppins font-semibold text-black leading-snugish py-2 "> ${title} </h3> <p class="pb-2 flex flex-wrap items-center gap-1 justify-start text-sm leading-normal text-gray-500"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path><path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"></path></svg> ${timeFrame} &nbsp; | &nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg> ${address} </p> </header> <div class=" mt-2 font-normal text-gray-700 text-md leading-snugish"> <span class="text-gray-800 font-semibold ">
Key Responsibilities
</span> <p class="text-gray-800 text-base mb-4 text-justify mt-2"> ${details} </p> </div> </article>`
  )}</div>`;
}, "C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/components/Experience.astro", void 0);

const $$Astro$1 = createAstro();
const $$AboutHeaders = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AboutHeaders;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="py-2 w-full pb-4"> <h2 class="pl-2 uppercase text-lg font-poppins font-bold text-top-color before:content-['•'] before:mr-1 before:text-amber-400 before:text-2xl"> ${title} </h2> </div> `;
}, "C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/components/AboutHeaders.astro", void 0);

const $$Astro = createAstro();
const $$BlackBtn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlackBtn;
  const { info, letterSize } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(`bg-black p-2 py-1 rounded-lg shadow text-violet-50 drop-shadow-md ${letterSize}`, "class")}>${info}</button>`;
}, "C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/components/BlackBtn.astro", void 0);

const $$SkillCard = createComponent(($$result, $$props, $$slots) => {
  const lettersize = "text-xs";
  return renderTemplate`${maybeRenderHead()}<div class="mx-4 w-screen overflow-hidden gap-2"> ${skillTabs.map((skill) => renderTemplate`<div class="bg-red-50 inline-block ml-2 mb-2"> ${renderComponent($$result, "BlackBtn", $$BlackBtn, { "info": skill, "letterSize": lettersize })} </div>`)} </div>`;
}, "C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/components/SkillCard.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "History" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-4 mt-4 mb-10"> <div class=" rounded-lg"> <!-- top content --> <div class="flex flex-col featured gap-6 md:gap-4 md:flex-row  md:px-2 w-full"> <div class="relative  top-0 left-0 p-2  flex justify-center"> <div class="relative h-60 w-60 my-6 group mx-2 bg-white cursor-pointer rounded-full p-4"> ${renderComponent($$result2, "Image", $$Image, { "class": "h-auto w-full z-0 relative drop-shadow-xl", "src": AboutImg, "alt": "person ", "width": 280, "height": 300 })} </div> </div> <div class="w-full lg:w-2/3 text-white sm:text-center pl-5 text-start flex flex-col items-center justify-center pb-4 md:pb-0"> <h1 class="font-bold text-heading text-center text-4xl sm:text-5xl lg:text-7xl">
Judit Anita
</h1> <h3 class="text-heading text-2xl sm:text-3xl mt-2">Full Stack Developer</h3> </div> </div> <!-- main content --> <div class="py-6"> <!-- About me --> <div class="py-3 sm:order-none order-3   rounded-xl "> <div class=" mx-2 p-2 rounded-xl mb-4"> <div class="w-full px-2 flex flex-col justify-center  pb-4 break-inside-avoid"> <div class="flex items-center mb-2"> <div class="bg-violet-200 p-1"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="text-black" style=" transform: ;msFilter:;"><path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"></path></svg> </div> <h2 class="pl-2 uppercase text-lg font-poppins font-bold text-top-color ">
About Me
</h2> </div> <p class="text-gray-800 text-base mb-4 text-justify">
A certified post gratuade fullstack developer with UI/UX
            design interest, my passion is to create websites and fully
            functioning web and mobile applications.
<span class="italic font-bold">
With just 2 years of learning
</span>
- while creating experience I got involved in more than 8 programmming
                languages, and continuesly evolving toward better user experience.
</p> <div class="relative"> <div class="bg-gray-50 text-black flex flex-wrap gap-4 p-4 justify-end "> <button id="contactModel" class="hover:border-1 p-1 hover:shadow duration-300 hover:translate-y-2"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;" class="hover:scale-110 hover:text-violet-600"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path></svg> </button> <a href="" class="hover:border-1 p-1 hover:shadow duration-300 hover:translate-y-2"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="hover:scale-110 hover:text-violet-600" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg> </a> <a href="" class="hover:shadow duration-300 hover:translate-y-2" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="hover:scale-110 hover:text-violet-600" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path><circle cx="11.994" cy="11.979" r="3.003"></circle></svg> </a> <a href="" class=" hover:shadow duration-300 hover:translate-y-2" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" width="24" class="hover:scale-110 hover:text-violet-600" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><circle cx="4.983" cy="5.009" r="2.188"></circle><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path></svg> </a> </div> <!-- add remove hidden class --> <div id="contactFormModal" class="fixed z-10 top-0 right-[10%] w-1/2 sm:w-full hidden "> <div class="flex items-end justify-end h-80 mr-8"> <div class=" w-1/3 p-4 rounded shadow-md bg-violet-200"> <div class="flex justify-end"> <!-- Close Button --> <button id="closeContactForm" class="text-gray-700 hover:text-black"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <div class="flex items-center gap-1  p-2"> <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;" class="hover:scale-110 hover:text-violet-600"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path></svg> <p class="text-lg font-thin italic hover:font-semibold cursor-pointer "> sjudit21@yahoo.com</p> </div> <div class="flex items-center gap-1  px-2"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="hover:scale-110 hover:text-violet-900" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path></svg> <p class="text-lg font-thin hover:font-semibold cursor-pointer ">+(34)-642-026-851</p> </div> </div> </div> </div> </div> </div> </div> </div> <div class="flex flex-col md:flex-row md:mt-2  gap-6"> <div class="flex flex-col md:w-2/5 lg:w-1/3 gap-6 break-inside-avoid"> <!--Education part --> <div class="py-3 sm:order-none order-3 bg-white  rounded-xl shadow-md break-inside-avoid"> ${renderComponent($$result2, "AboutHeaders", $$AboutHeaders, { "title": "Education" })} <div class="bg-slate-100 mx-2 p-2 rounded-xl mb-4 pb-4 break-inside-avoid"> ${educationData.map(
    ({
      qualification,
      schoolProvider,
      timeFrame,
      address,
      details
    }) => {
      return renderTemplate`${renderComponent($$result2, "DetailsEd", $$DetailsEd, { "qualification": qualification, "schoolProvider": schoolProvider, "timeFrame": timeFrame, "address": address, "details": details })}`;
    }
  )} </div> <div class="py-2 w-full  break-inside-avoid "> ${renderComponent($$result2, "AboutHeaders", $$AboutHeaders, { "title": "Technologies" })} </div> <div class=" mx-2  mb-4 pb-4 text-base"> <div class="flex gap-4 flex-wrap mt-3"> ${renderComponent($$result2, "SkillCard", $$SkillCard, {})} </div> </div> </div> <!-- Info --> <div class="py-3 sm:order-none order-3 bg-white  rounded-xl shadow-md break-inside-avoid"> ${renderComponent($$result2, "AboutHeaders", $$AboutHeaders, { "title": "Information" })} <div class="bg-slate-100 mx-2 p-2 rounded-xl mb-4 pb-4"> ${infoData.map(({ title, name }) => {
    return renderTemplate`${renderComponent($$result2, "InfoCard", $$InfoCard, { "title": title, "name": name })}`;
  })} </div> </div> </div> <!--right side --> <div class="flex flex-col md:w-3/5 lg:w-2/3 order-first md:order-none mt-4 md:mt-0"> <!--Experience ------------------------------------------------------------------------------------------------------> <section class="pb-4    first:mt-0 py-3  sm:order-none order-3  bg-white  rounded-xl shadow-md"> <!-- To keep in the same column -------------------------------------------------------------------------> <article class="break-inside-avoid bg-white p-2"> ${renderComponent($$result2, "AboutHeaders", $$AboutHeaders, { "title": "Experience" })} <div class="mb-2 border-b border-gray-200  break-inside-avoid bg-slate-100 p-2 rounded-xl"> <!--experience component --> ${renderComponent($$result2, "Experience", $$Experience, {})} </div> </article> </section> </div> </div> </div> </div> </div> ` })} `;
}, "C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/pages/about.astro", void 0);

const $$file = "C:/Users/Usuario/OneDrive/Desktop/My_works/Astro-resume/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
