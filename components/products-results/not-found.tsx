import Image from "next/image";
import { LargeBoldText } from "ui/typography";
import { ContainerNotFound, Img } from "./styled";

function ProductNotFound() {
    return (
        <ContainerNotFound>
            <Image
                width={"100%"}
                height={"100%"}
                src="https://res.cloudinary.com/dmycj7gmx/image/upload/v1666505250/dwf-m10/no-product_vepcmy.png"
                alt=""
                layout="responsive"
            />
            <LargeBoldText>
                No hemos encontrado el producto que estás intentando buscar, intentá con otro
                producto.
            </LargeBoldText>
        </ContainerNotFound>
    );
}

export { ProductNotFound };
