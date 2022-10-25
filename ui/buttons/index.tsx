import { useEffect, useRef } from "react";
import styles from "./action.module.css";
import { Primary, Secondary } from "./styled";

interface Props {
    onClick?: any;
    children: string;
    anim?: boolean;
}

function ActionButton({ onClick, children }: Props) {
    return (
        <button onClick={onClick} className={styles["glow-on-hover"]}>
            {children}
        </button>
    );
}

function PrimaryButton({ anim, onClick, children }: Props) {
    const buttonRef = useRef(null as any);

    useEffect(() => {
        const span = buttonRef.current.firstChild as HTMLElement;
        if (anim) {
            buttonRef.current.disabled = true;
            if (!span.textContent) span.textContent = children;
            else span.textContent = "";
            span.classList.toggle(styles.spinner);
            return onClick;
        } else {
            buttonRef.current.disabled = false;
            span.textContent = children;
            span.classList.remove(styles.spinner);
        }
    }, [anim]);

    return (
        <Primary ref={buttonRef} onClick={onClick}>
            <span>{children}</span>
        </Primary>
    );
}

function SecondaryButton({ anim, onClick, children }: Props) {
    const buttonRef = useRef(null as any);

    useEffect(() => {
        const span = buttonRef.current.firstChild as HTMLElement;
        if (anim) {
            buttonRef.current.disabled = true;
            if (!span.textContent) span.textContent = children;
            else span.textContent = "";
            span.classList.toggle(styles.spinner);
            return onClick;
        } else {
            buttonRef.current.disabled = false;
            span.textContent = children;
            span.classList.remove(styles.spinner);
        }
    }, [anim]);

    return (
        <Secondary ref={buttonRef} onClick={onClick}>
            <span>{children}</span>
        </Secondary>
    );
}

export { ActionButton, PrimaryButton, SecondaryButton };
