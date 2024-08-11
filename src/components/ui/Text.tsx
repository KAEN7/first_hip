import React from "react";
import styled from "@emotion/styled";

interface CSSProps {
    $mb?: number;
}

interface TextProps extends CSSProps {
    children: React.ReactNode;
    type?: "title" | "subtitle" | "normal";
}

const Text = ({ children, type, $mb }: TextProps) => {
    if (type === "title") {
        return <StyledTitle $mb={$mb}>{children}</StyledTitle>;
    }

    return <StyledText $mb={$mb}>{children}</StyledText>;
};

const StyledTitle = styled.h2<CSSProps>`
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: ${({ $mb }) => ($mb ? `${$mb}rem` : "0")};
`;

const StyledText = styled.div<CSSProps>`
    font-size: 1rem;
    white-space: pre-line;
    line-height: 1.25;
    margin-bottom: ${({ $mb }) => ($mb ? `${$mb}rem` : "0")};
`;

export default Text;
