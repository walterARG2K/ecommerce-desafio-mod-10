import { removeToken, useGetToken } from "lib/hooks";
import { useGetLengthCart } from "lib/hooks/cart";
import { useRouter } from "next/router";
import { useRef } from "react";
import { CartWhite } from "ui/icons/cart";
import { CategoriesIcon, ContactUsIcon, HomeIcon, UserLoginIcon, PerfilIcon } from "ui/icons/user";
import { BodyBoldText, BodyBoldWhiteText, TinyText } from "ui/typography";
import styles from "./burger-menu.module.css";
import { Categories } from "./categories";

function BurgerMenu() {
    const inputField = useRef(null);
    const cartLength = useGetLengthCart();
    const token = useGetToken();
    const router = useRouter();

    function onClickOutside() {
        (inputField?.current as any).checked = false;
    }

    return (
        <div className={styles["hamburger-menu"]}>
            <input ref={inputField} id={styles["menu__toggle"]} type="checkbox" />
            <label className={styles["menu__btn"]} htmlFor={styles["menu__toggle"]}>
                <span></span>
            </label>

            <ul className={styles["menu__box"]}>
                <li
                    onClick={() => {
                        router.push("/login");
                    }}
                >
                    {token?.email ? (
                        <a
                            onClick={() => removeToken()}
                            className={(styles["menu__item"], styles["login"])}
                            href="#"
                        >
                            <div className={styles.email}>
                                <TinyText>{token.email}</TinyText>
                            </div>
                            <BodyBoldText>Cerrar Sesión</BodyBoldText>
                        </a>
                    ) : (
                        <a className={styles["menu__item"]} href="#">
                            <UserLoginIcon />
                            <BodyBoldWhiteText>Iniciar Sesión</BodyBoldWhiteText>
                        </a>
                    )}
                </li>
                <li
                    onClick={() => {
                        router.push("/");
                    }}
                >
                    <a className={styles["menu__item"]} href="#">
                        <HomeIcon />
                        <BodyBoldWhiteText>Home</BodyBoldWhiteText>
                    </a>
                </li>

                <li
                    onClick={() => {
                        router.push("/my-profile");
                    }}
                >
                    <a className={styles["menu__item"]} href="#">
                        <PerfilIcon />
                        <BodyBoldWhiteText>Mi Perfil</BodyBoldWhiteText>
                    </a>
                </li>
                <li
                    onClick={() => {
                        router.push("/cart");
                    }}
                >
                    <a className={styles["menu__item"]} href="#">
                        <CartWhite />
                        <BodyBoldWhiteText>Ver Carrito: {cartLength}</BodyBoldWhiteText>
                    </a>
                </li>

                <li>
                    <div className={styles["menu__item"]}>
                        <CategoriesIcon />
                        <Categories />
                    </div>
                </li>
                <li
                    onClick={() => {
                        router.push("/contact");
                    }}
                >
                    <a className={styles["menu__item"]} href="#">
                        <ContactUsIcon />
                        <BodyBoldWhiteText>Contactános</BodyBoldWhiteText>
                    </a>
                </li>
            </ul>
            <div onClick={onClickOutside} className={styles.background} />
        </div>
    );
}

export { BurgerMenu };
