"use client";

import "shared/themes/globals.scss";
import { MainLayout } from "shared/components/layout/main-layout.component";
import { Provider } from "react-redux";
import { appStore } from "shared/redux-state/app.store";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/fonts.css" />
      </head>
      <body>
        <Provider store={appStore}>
          <MainLayout>{children}</MainLayout>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
