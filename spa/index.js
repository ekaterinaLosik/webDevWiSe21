import Login from "./views/Login.js";
import Admin from "./views/Admin.js";
import Staff from "./views/Staff.js";

import { parseRequestUrl } from './utils.js';

const routes = {
    '/': Login,
    '/admin': Admin,
    '/staff': Staff
  };
  
  
  const router = async () => {
   
    const content = null || document.getElementById('page_root');
  
    const { resource, id, verb } = parseRequestUrl();
  
  
    const parsedUrl =
      (resource ? '/' + resource : '/') +
      (id ? '/:id' : '') +
      (verb ? '/' + verb : '');
  
   
    const page = routes[parsedUrl] || Error404;
    content.innerHTML = await page.render();
    await page.after_render();
  };
  
  window.addEventListener('hashchange', router);
  window.addEventListener('load', router);

