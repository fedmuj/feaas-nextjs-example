import * as FEAAS from "@sitecore-feaas/clientside/react";
import dynamic from "next/dynamic";
// byoc/index lists all BYOC components that will be rendered on clientside
import ExternalComponentBundle from "./byoc";
// Following is BYOC components that will be rendered on server side
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
// Regular react component
import "./byoc/ExampleHybridComponent";
// Server with Client inside

import "./byoc/ExampleSwappedComponent";

import HeroBanner2 from "./byoc/HeroBanner2";

// Place somewhere in top level, e.g. layout of the app
FEAAS.enableNextClientsideComponents(dynamic, ExternalComponentBundle);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        {/*
        Important to include this on the page (preferrably in layout) so
        clientside bundle is properly prepared by Next.
      */}
        <ChakraProvider>
          <FEAAS.ExternalComponentBundle />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
