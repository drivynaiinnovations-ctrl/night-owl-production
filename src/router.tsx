import { Button } from "@/components/ui/button";
import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultErrorComponent: ({ reset }) => <div className="site-container section"><h1 className="section-heading">This page could not load.</h1><Button className="mt-6" onClick={reset}>Try again</Button></div>,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
