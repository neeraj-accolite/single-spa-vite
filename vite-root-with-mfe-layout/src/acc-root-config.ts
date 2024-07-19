import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

const data = {
  loaders: {
    navLoader: `<div class="navloader"></div>`,
  },
  props: {
    user: 'DemoUser'
  },
  errors: {
    navError: `<div>Error in loading the application</div>`
  }
};

const routes = constructRoutes(document.querySelector("#single-spa-layout"), data);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();