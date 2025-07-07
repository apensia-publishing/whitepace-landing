import style from "./page.module.css";
import { useState } from "react";
// import workTogetherImage from "../../assets/hero_page/work_together.svg";
import { Link } from "react-router";
import HamburgerMenu from "../components/hamburger/HamburgerMenu";
import Modal from "../components/modal/Modal";
import Button from "../components/button/Button";

type HamburgerButtonProps = {
  hamburgerOpen: boolean;
};

function HamburgerButton({
  hamburgerOpen,
  ...props
}: HamburgerButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`${style.hamburger_btn} ${hamburgerOpen ? style.open : ""}`}
      {...props}
    >
      <div aria-labelledby="top_line" className={style.line} />
      <div aria-labelledby="middle_line" className={style.line} />
      <div aria-labelledby="bottom_line" className={style.line} />
    </button>
  );
}

export const menuData = [
  {
    id: "products",
    innerItems: ["Whitepace", "Whitepace HR", "Whitepace Admin"],
  },
  { id: "solutions", innerItems: ["All-in-One", "WhitepaceMind"] },
  { id: "resources", innerItems: ["How it works", "Troublehsooting"] },
  { id: "pricing" },
];

export default function HeroPage() {
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);

  return (
    <>
      <main>
        {/* <HamburgerMenu hamburgerOpen={hamburgerOpen} /> */}
        <header id={style.header}>
          <Link to="/" className={style.logo}>
            <img src="../logo.svg" alt="Logo" />
            <span>whitepace</span>
          </Link>
          <ul className={style.menus_wrapper}>
            {menuData.map((i, index) => (
              <li key={i.id} className={style.menu_item_wrapper}>
                <button className={style.menu}>
                  {i.id.charAt(0).toUpperCase() + i.id.slice(1)}
                  {index !== 3 ? (
                    <img
                      src="../icons/chevron_down.svg"
                      alt="Arrow down icon"
                      width={20}
                      height={20}
                      className={style.arrow_icon}
                    />
                  ) : null}
                </button>
                {i.innerItems && (
                  <div className={style.modal_wrapper}>
                    {i.innerItems.map((j, index) => (
                      <Link key={index} to="/" className={style.modal_item}>
                        {j}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className={style.btns_wrapper}>
            <ul className={style.utils_btn_wrapper}>
              <Link to="/" className={`${style.util_btn} ${style.login}`}>
                Login
              </Link>
              <Button to="/" buttonText="Try Whitepace" />
            </ul>
            <HamburgerButton
              hamburgerOpen={hamburgerOpen}
              onClick={() => setHamburgerOpen((prev) => !prev)}
            />
          </div>
        </header>
        <section id={style.hero}>
          <div className={style.text_wrapper}>
            <h1>Get More Done with Whitepace</h1>
            <h2>
              Product management shoftware that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </h2>
          </div>
          <div className={style.image_wrapper} />
        </section>

        {/* Info section */}
        <section id={style.info}>
          <div className={style.content_wrapper} id={style.project_mgmt}>
            <div className={style.text_wrapper}>
              <h1>
                Project
                <br />
                Management
              </h1>
              <p>
                Images, videos, PDFs and audio files are supported. Create math
                expressions and diagrams directly from the app. Take photos with
                the mobile app and save them to a note.
              </p>
              <Button to="/" buttonText="Get Started" />
            </div>
            <div className={style.image_wrapper}>
              <img
                src="https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg"
                alt="Project management background image"
              />
            </div>
          </div>
          <div className={style.content_wrapper} id={style.work_together}>
            <div className={style.text_wrapper}>
              <h1>Work Together</h1>
              <p>
                With whitepace, share your notes with your colleagues and
                collaborate on them. You can also publish a note to the internet
                and share the URL with others.
              </p>
              <Button to="/" buttonText="Get Started" />
            </div>
            <div className={style.image_wrapper}>
              <img src="ui/work_together.svg" alt="Work Together image" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
