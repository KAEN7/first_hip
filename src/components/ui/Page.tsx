import React from "react";
import styled from "@emotion/styled";

interface CSSProps {
    vertical?: boolean;
    justify?: string;
    align?: string;
    gap?: number;
}

interface PageProps extends CSSProps {
    children: React.ReactNode;
}

const Page = ({ children, vertical, justify, align, gap }: PageProps) => {
    return (
        <StyledPage vertical={vertical} justify={justify} align={align} gap={gap}>
            {children}
        </StyledPage>
    );
};

const StyledPage = styled.div<CSSProps>`
    display: flex;
    flex-direction: ${(props) => (props.vertical ? "column" : "row")};
    justify-content: ${(props) => props.justify ?? "center"};
    align-items: ${(props) => props.align ?? "center"};
    gap: ${(props) => props.gap ?? 0}rem;
    padding: 1.5rem;
    box-sizing: border-box;
`;

export default Page;
