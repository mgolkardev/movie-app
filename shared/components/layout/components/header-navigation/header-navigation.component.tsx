import { Link } from "shared/components/link/link.component";
import style from "./header-navigation.style.module.scss";

export const HeaderNavigation = () => {
  return (
    <ul className={style.headerNavigation}>
      <li>
        <Link href="/">نخست</Link>
      </li>
      <li>
        <Link href="/movies">فیلم ها</Link>
      </li>
    </ul>
  );
};
