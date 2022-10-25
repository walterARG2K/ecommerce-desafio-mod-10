import styled from "styled-components";

const Title = styled.h1``;

const Subtitle = styled.h2`
    margin: 0;
    font-size: 32px;
`;

const Large = styled.h4`
    font-size: 24px;
`;

const LargeBold = styled.h4`
    font-size: 24px;
    font-weight: 700;
    margin: 0;
`;

const LargeBoldWhite = styled(LargeBold)`
    color: white;
`;

const Body = styled.p`
    margin: 0;
`;

const BodyWhite = styled(Body)`
    color: white;
`;

const BodyBold = styled.p`
    font-weight: 700;
    margin: 0;
`;

const BodyBoldWhite = styled(BodyBold)`
    color: white;
`;

const Tiny = styled.p`
    font-size: 14px;
    margin: 0;
`;
const TinyBold = styled.p`
    font-size: 14px;
    margin: 0;
    font-weight: 700;
`;

const TinyWhite = styled(Tiny)`
    color: white;
`;

const TinyBoldWhite = styled(TinyBold)`
    color: white;
`;

export function TinyText({ children }: any) {
    return <Tiny>{children}</Tiny>;
}

export function TinyBoldText({ children }: any) {
    return <TinyBold>{children}</TinyBold>;
}

export function TinyBoldWhiteText({ children }: any) {
    return <TinyBoldWhite>{children}</TinyBoldWhite>;
}

export function TinyWhiteText({ children }: any) {
    return <TinyWhite>{children}</TinyWhite>;
}

export function LargeBoldText({ children }: any) {
    return <LargeBold>{children}</LargeBold>;
}

export function LargeBoldWhiteText({ children }: any) {
    return <LargeBoldWhite>{children}</LargeBoldWhite>;
}
export function SubtitleText({ children }: any) {
    return <Subtitle>{children}</Subtitle>;
}
export function BodyText({ children }: any) {
    return <Body>{children}</Body>;
}

export function BodyWhiteText({ children }: any) {
    return <BodyWhite>{children}</BodyWhite>;
}

export function BodyBoldText({ children }: any) {
    return <BodyBold>{children}</BodyBold>;
}

export function BodyBoldWhiteText({ children }: any) {
    return <BodyBoldWhite>{children}</BodyBoldWhite>;
}
