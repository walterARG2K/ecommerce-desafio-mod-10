import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { BodyText } from "ui/typography";
import { ContainerNextPage, ArrowLeft, NextPage, ArrowRight } from "./styled";

interface Props {
  setOffset: Dispatch<SetStateAction<number>>;
  offset: number;
  pages: [number];
}

function Pagination({ setOffset, offset, pages }: Props) {
  const itemsRef = useRef([] as any);
  const [backColor, setBackColor] = useState([] as any);
  const [actualPage, setActualPage] = useState(1);

  useEffect(() => {
    if (actualPage === 1) return;
    if (offset !== 0) return;
    setActualPage(1);
  }, [offset]);

  useEffect(() => {
    setBackColor([
      "",
      ...pages?.map((i: number) => (i === 1 ? "var(--secondary-color)" : "white")),
    ]);
  }, [pages]);

  function onClickPage(pageN: number) {
    window.scrollTo(0, 0);
    if (pageN < actualPage && pageN !== actualPage) setOffset(offset > 0 ? offset - 12 : 0);
    else if (pageN > actualPage && pageN !== actualPage) setOffset(offset + 12);

    if (pageN !== actualPage) {
      setActualPage(pageN);
      const newColors = backColor.map((background: any, index: any) =>
        index === actualPage ? "white" : background
      );
      newColors[pageN] = "var(--secondary-color)";
      setBackColor(newColors);
    }
  }

  function onPrevPage() {
    if (actualPage !== 1) onClickPage(actualPage - 1);
  }

  function onNextPage() {
    if (actualPage !== pages?.length) onClickPage(actualPage + 1);
  }

  return (
    <ContainerNextPage>
      <ArrowLeft onClick={onPrevPage} />
      {pages?.map((n: any) => (
        <NextPage
          onClick={() => onClickPage(n)}
          theme={backColor[n]}
          key={n}
          ref={(el: any) => (itemsRef.current[n] = el)}
        >
          <BodyText>{n}</BodyText>
        </NextPage>
      ))}
      <ArrowRight onClick={onNextPage} />
    </ContainerNextPage>
  );
}

export { Pagination };
