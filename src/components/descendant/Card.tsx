import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { DescendantType } from "@/@types/meta/descendant";

interface DescendantCardProps {
    data: DescendantType;
    onClick?: () => void;
}

const DescendantCard: React.FC<DescendantCardProps> = ({ data, onClick }) => {
    return (
        <StyledCard onClick={onClick}>
            <StyledInnerCard>
                <StyledImageWrapper>
                    <Image
                        src={data.descendant_image_url}
                        fill
                        objectFit="contain" // 원본 비율 유지
                        alt={data.descendant_name}
                        draggable={false}
                        priority={true}
                    />
                </StyledImageWrapper>
                <StyledBanner>
                    <span>{data.descendant_name}</span>
                </StyledBanner>
            </StyledInnerCard>
        </StyledCard>
    );
};

const StyledCard = styled.div`
    display: flex;
    width: 8rem;
    max-width: 8rem;
    height: fit-content;
    cursor: pointer;
    border-radius: 0.25rem;

    &:hover {
        background: #27272a;
    }
`;

const StyledInnerCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    gap: 0.5rem;
    padding: 0.5rem 0.5rem;
    box-sizing: border-box;
`;

const StyledImageWrapper = styled.div`
    width: 5rem;
    height: 5rem;
    position: relative;
    object-fit: cover;
    border-radius: 0.5rem;
`;

const StyledBanner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    /* padding: 0.5rem; */
    box-sizing: border-box;
    border-radius: 0 0 0.25rem 0.25rem;
    width: fit-content;
    white-space: nowrap;
    font-weight: 700;
`;

export default DescendantCard;
