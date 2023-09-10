import { MainLayoutProperties } from "./main-layout-properties.interface";
import { HeaderTitle } from "./components/header-title/header-title.component";
import { HeaderNavigation } from "./components/header-navigation/header-navigation.component";
import style from "./main-layout.style.module.scss";

export function MainLayout({ children }: MainLayoutProperties) {
  return (
    <div className={style.app}>
      <header className={style.app__header}>
        <HeaderTitle />
        <HeaderNavigation />
      </header>
      <main className={style.app__main}>{children}</main>
    </div>
  );
}
