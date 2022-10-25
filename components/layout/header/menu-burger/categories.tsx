import { useRouter } from "next/router";
import { TinyWhiteText } from "ui/typography";
import { Collapsible, Content } from "./styled";

function Categories() {
    const router = useRouter();

    function onclick(e: any) {
        var content = e.target.nextElementSibling;
        e.target.classList.toggle("active");
        if (content.style.maxHeight) content.style.maxHeight = null;
        else content.style.maxHeight = content.scrollHeight + "px";
    }

    function onClickItem(query: string) {
        router.push({
            pathname: "/products",
            query: { q: query },
        });
    }

    return (
        <div>
            <Collapsible onClick={onclick}>Categorias</Collapsible>
            <Content>
                <li>
                    <a href="#" onClick={() => onClickItem("gpu")}>
                        <TinyWhiteText>Placas de vídeo</TinyWhiteText>
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => onClickItem("cpu")}>
                        <TinyWhiteText>Procesadores</TinyWhiteText>
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => onClickItem("pc gamer")}>
                        <TinyWhiteText>Pc de escritorio</TinyWhiteText>
                    </a>
                </li>
            </Content>
        </div>
    );
}

export { Categories };
