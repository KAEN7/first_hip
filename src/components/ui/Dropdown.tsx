import React, { useState } from "react";
import styled from "@emotion/styled";
import Text from "@/components/ui/Text";

interface CSSProps {
    vertical?: "row" | "column";
    title?: string;
    justify?: string;
    align?: string;
    gap?: number;
    maxWidth?: string;
    hidden?: boolean;
}

interface DropdownProps extends CSSProps {
    children: React.ReactNode;
}

const Dropdown = ({ children, title, vertical, justify, align, gap, maxWidth, hidden }: DropdownProps) => {
    const [isHidden, setIsHidden] = useState<boolean>(hidden ?? false);

    return (
        <StyledDropdown maxWidth={maxWidth}>
            {title && (
                <StyledHeader onClick={() => setIsHidden(!isHidden)}>
                    <Text type="title">{title}</Text>
                </StyledHeader>
            )}

            <StyledList vertical={vertical} justify={justify} align={align} gap={gap} hidden={isHidden}>
                {children}
            </StyledList>
        </StyledDropdown>
    );
};

const StyledDropdown = styled.div<CSSProps>`
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${(props) => props.vertical ?? "column"};
    justify-content: ${(props) => props.justify ?? "center"};
    align-items: ${(props) => props.align ?? "center"};
    gap: 1rem;
    width: 100%;
    max-width: ${(props) => props.maxWidth ?? "100%"};
    border: 1px solid #696a6b;
    border-radius: 1.25rem;
    padding: 1rem;
    box-sizing: border-box;
`;

const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
`;

const StyledList = styled(StyledDropdown)<CSSProps>`
    display: ${(props) => (props.hidden ? "none" : "flex")};
    gap: ${(props) => props.gap ?? 1}rem;
    border: 0px;
    width: 100%;
`;

export default Dropdown;
