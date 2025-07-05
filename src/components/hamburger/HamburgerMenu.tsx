import style from "./HamburgerMenu.module.css";
import { menuData } from "../../pages/HeroPage";

type HamburgerMenuProps = {
  hamburgerOpen: boolean;
};

export default function HamburgerMenu({ hamburgerOpen }: HamburgerMenuProps) {
  return (
    <aside className={style.hamburger_menu}>
      <svg
        className={style.hamburger_menu_bg}
        viewBox="0 0 100 100"
        xmlns="http//www.w3.org/2000/svg"
      >
        <circle cx="100%" cy="0" r="0">
          <ul className={style.hamburger_menu_wrapper}></ul>
        </circle>
      </svg>
    </aside>
  );
}
