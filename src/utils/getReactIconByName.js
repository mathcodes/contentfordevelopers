import loadable from "@loadable/component";

export default function getReactIconByName(name) {
  // get the library that the icon belongs to in the react-icons package from the name of the icon.
  const lib = name
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .split(" ")[0]
    .toLocaleLowerCase();
  // auto import the react-icons component based on its name in the icon prop.
  const icon = loadable(() => import(`react-icons/${lib}/index.js`), {
    resolveComponent: (element) => element[name],
  });
  return icon ?? null;
}
