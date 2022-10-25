import { separator } from "lib/utils";
import Image from "next/image";
import { Cart } from "ui/icons/cart";
import { TinyBoldWhiteText, TinyText } from "ui/typography";
import styles from "./card.module.css";

interface productType {
    name: string;
    price: number;
    img: string;
    onClickCart: any;
    onClickImg: any;
    onClickBuy: any;
}

function CardProduct({ name, price, img, onClickCart, onClickBuy, onClickImg }: productType) {
    return (
        <div className={styles.card}>
            <div className={styles.imgBox}>
                <div className={styles["container-cart"]}>
                    <div onClick={onClickBuy} className={styles.buy}>
                        <TinyText>COMPRAR</TinyText>
                    </div>
                    <div onClick={onClickCart} className={styles.cart}>
                        <Cart />
                    </div>
                </div>
                <div className={styles["unset-img"]}>
                    <Image
                        className={styles["custom-img"]}
                        onClick={onClickImg}
                        src={img}
                        alt=""
                        layout="fill"
                    />
                </div>
            </div>

            <div className={styles.contentBox}>
                <TinyBoldWhiteText>{name}</TinyBoldWhiteText>
                <div className={styles.price}>
                    <TinyText>{separator(price)} $ARS</TinyText>
                </div>
            </div>
        </div>
    );
}

export { CardProduct };
