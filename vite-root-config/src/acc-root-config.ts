import { registerApplication, start, LifeCycles } from "single-spa";
import { bootstrap, mount, unmount } from './root.component';

registerApplication(
  'root-app',
  () => import('./root.component'),
  () => true,
  { bootstrap, mount, unmount }
);

registerApplication({
  name: "@acc/profile",
  app: () =>
    System.import<LifeCycles>(
      "@acc/profile"
    ),
  activeWhen: ["/profile"],
});


registerApplication({
  name: "@acc/address",
  app: () =>
    System.import<LifeCycles>(
      "@acc/address"
    ),
  activeWhen: ["/address"],
});

registerApplication({
  name: "@acc/orders",
  app: () =>
    System.import<LifeCycles>(
      "@acc/orders"
    ),
  activeWhen: ["/orders"],
});

setTimeout(() => {
  start({
    urlRerouteOnly: true,
  });
}, 1000);
