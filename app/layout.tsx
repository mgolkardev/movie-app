/** @format */

"use client";

import "shared/themes/globals.scss";
import { MainLayout } from "shared/components/layout/main-layout.component";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/fonts.css" />
      </head>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
};

export default RootLayout;
