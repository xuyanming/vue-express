import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
import home from '@/views/home/home'
import tabletree from '@/views/table/tabletree'
const comp={Layout,tabletree}
Vue.use(Router)
import navConfig from './nav.config.json'
const LOAD_DOCS_MAP =  (parentpath,lang) => {
    console.log(`@/views${(parentpath ? parentpath+'/' : lang.path) + lang.path}.vue`)
    return r => require.ensure([], () => r(require(`@/views${(parentpath ? parentpath+'/' : lang.path) + lang.path}.vue`)));
};

const loadDocs = function(parentpath,lang) {
  return LOAD_DOCS_MAP(parentpath,lang);
};
const registerRoute = (navConfig,parentpath) => {
  let route = [];
  navConfig.forEach((lang, index) => {
    let navs = lang.children;
    if(parentpath){
       lang.parentpath=parentpath+'/'+lang.path 
    }else{
        lang.parentpath=lang.path
    }
    if(lang.children){
      route.push({
        path: lang.parentpath,
        name:lang.name,
        redirect: `${lang.path}/${lang.children[0].path}`,
        component: comp[lang.component],
        meta:lang.meta,
        children: registerRoute(navs,lang.parentpath)
      });
    }else{
        route.push({
          path: lang.parentpath,
          component: loadDocs(parentpath,lang),
          hidden: lang.hidden,
          name:lang.name,
          meta:lang.meta,
        });
    }
  });
  return route;
};

let route = registerRoute(navConfig["router_zh"]);
console.log(route)
route.unshift({
    path: "/",
    name:"home",
    redirect:"/home",
    component: Layout,
    meta: { title: "首页",icon: "el-icon-menu" },
    children:[{ 
        path: "/home",  
        name: "homeindex", 
        component: home,
        meta: { title: "首页",icon: "el-icon-menu" }
      },]
})

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: route,
})
