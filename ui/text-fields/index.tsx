import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { SearchIcon } from "ui/icons/user";
import { ContainerSearch, InputSearcher, ButtonSearch } from "./styled";
import styles from "./styles.module.css";

interface Props {
    value?: string;
    name: string;
    required?: boolean;
    children: string;
    type?: "email" | "text" | "phone" | "password";
}

function SearchInput() {
    const router = useRouter();
    const form = useRef(null);

    function onSearch(e: any) {
        e.preventDefault();
        const query = e.target.query.value;
        router.push({
            pathname: "/products",
            query: { q: query },
        });
    }

    return (
        <ContainerSearch ref={form} onSubmit={onSearch}>
            <InputSearcher name="query" placeholder="Busca un producto..." />
            <ButtonSearch aria-label="search-button">
                <SearchIcon />
            </ButtonSearch>
        </ContainerSearch>
    );
}

function PrimaryTextField({ value, name, required, children, type }: Props) {
    const refInput = useRef(null);

    function verifyContentInput() {
        const input = refInput?.current as any;
        const label = input.nextSibling;

        if (input?.value) {
            label?.classList.add(styles["up-label"]);
        } else {
            label?.classList.remove(styles["up-label"]);
        }
    }

    useEffect(() => {
        verifyContentInput();
    }, [refInput, value]);

    return (
        <div className={styles["mahi_holder"]}>
            <div className={styles.container}>
                <div className={`${styles["bg_3"]} ${styles.row}`}>
                    <div className={`${styles["col-3"]} ${styles["input-effect"]}`}>
                        <input
                            defaultValue={value}
                            name={name}
                            required={required || false}
                            ref={refInput}
                            onBlur={verifyContentInput}
                            id={styles.field + children}
                            className={styles.field}
                            type={type || "text"}
                        />
                        <label htmlFor={styles.field + children} className={styles["label-field"]}>
                            {children || "label"}
                        </label>
                        <span className={styles["focus-border"]}></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SecondaryTextField({ value, name, required, children, type }: Props) {
    const refInput = useRef(null);

    function verifyContentInput() {
        const input = refInput?.current as any;
        const label = input.nextSibling;

        if (input?.value) {
            label?.classList.add(styles["up-label"]);
        } else {
            label?.classList.remove(styles["up-label"]);
        }
    }

    useEffect(() => {
        verifyContentInput();
    }, [refInput, value]);

    return (
        <div className={styles["mahi_holder"]}>
            <div className={styles.container}>
                <div className={`${styles["bg_3"]} ${styles.row}`}>
                    <div className={`${styles["col-3"]} ${styles["input-effect"]} ${styles["up"]}`}>
                        <input
                            defaultValue={value}
                            name={name}
                            required={required || false}
                            ref={refInput}
                            onLoad={verifyContentInput}
                            onBlur={verifyContentInput}
                            id={styles.field + children}
                            className={styles["field-2"]}
                            type={type || "text"}
                        />
                        <label htmlFor={styles.field + children} className={styles["label-field"]}>
                            {children || "label"}
                        </label>
                        <span className={styles["focus-border"]}>
                            <i></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function TextArea({ name, required, children }: Props) {
    const refInput = useRef(null);

    function verifyContentInput() {
        const input = refInput?.current as any;
        const label = input.nextSibling;

        if (input?.value) {
            label?.classList.add(styles["up-label"]);
        } else {
            label?.classList.remove(styles["up-label"]);
        }
    }

    useEffect(() => {
        verifyContentInput();
    }, [refInput]);

    return (
        <div className={styles["mahi_holder"]}>
            <div className={styles.container}>
                <div className={`${styles["bg_3"]} ${styles.row}`}>
                    <div className={`${styles["col-3"]} ${styles["input-effect"]} ${styles["up"]}`}>
                        <textarea
                            name={name}
                            required={required || false}
                            ref={refInput}
                            onLoad={verifyContentInput}
                            onBlur={verifyContentInput}
                            id={styles.field + children}
                            className={styles["field-2"]}
                            placeholder=""
                            rows={5}
                        />
                        <label htmlFor={styles.field + children} className={styles["label-field"]}>
                            {children || "label"}
                        </label>
                        <span className={styles["focus-border"]}>
                            <i></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { TextArea, SecondaryTextField, PrimaryTextField, SearchInput };
