import * as React from "react";

if (
  import.meta.env.DEV &&
  import.meta.env.VITE_ENABLE_WHY_DID_YOU_RENDER === "true"
) {
  const { default: wdyr } = await import(
    "@welldone-software/why-did-you-render"
  );

  /**
   * Why Did You Render is a tool to help you understand what's causing your
   * React application to re-render. It does this by monkey-patching React and
   * tracking the props that are changing across renders.
   *
   * If you want to target a specific component to be monitored, just add this
   * to the component:
   * MyComponent.whyDidYouRender = true;
   *
   * @see https://github.com/welldone-software/why-did-you-render
   */

  wdyr(React, {
    // Uncomment the next line to include all re-renders
    // Useful for the early stages of debugging where you need to see everything
    // include: [/./],

    // Not all re-renders are bad! You can specify a list of components to
    // ignore here.
    // exclude: [
    //   /^BrowserRouter/,
    //   /^Link/,
    //   /^Route/,
    //   /Icon$/,
    // ],
    trackHooks: true,
    trackAllPureComponents: true,
  });
}
