import React, { useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";

import Dropdown from "../ui/Dropdown";
import { DescendantType } from "@/@types/meta/descendant";
import Text from "../ui/Text";

interface SkillProps {
    maxWidth: string;
    data: DescendantType;
}

const Skill = ({ maxWidth, data }: SkillProps) => {
    const [selectIndex, setSelectIndex] = useState<number>(0);

    return (
        <Dropdown title={"스킬"} maxWidth={maxWidth} vertical={"row"}>
            <StyledSkillNav>
                {data &&
                    data?.descendant_skill.map((skill, index) => (
                        <StyledImageWrapper key={skill.skill_name} onClick={() => setSelectIndex(index)}>
                            <Image
                                src={skill.skill_image_url}
                                fill
                                objectFit="contain" // 원본 비율 유지
                                alt={data.descendant_name}
                                draggable={false}
                                priority={true}
                            />
                        </StyledImageWrapper>
                    ))}
            </StyledSkillNav>

            <StyledSkillBody>
                {data &&
                    data?.descendant_skill.map((skill, index) => (
                        <StyledContent key={skill.skill_name} $isHidden={index !== selectIndex}>
                            <Text type="subtitle">{skill.skill_name}</Text>
                            <StyledMarkWrapper>
                                <StyledMarker>{skill.arche_type}</StyledMarker>
                                <StyledMarker>{skill.element_type}</StyledMarker>
                                <StyledMarker>{skill.skill_type}</StyledMarker>
                            </StyledMarkWrapper>
                            <Text>{skill.skill_description}</Text>
                        </StyledContent>
                    ))}
            </StyledSkillBody>
        </Dropdown>
    );
};

const StyledSkill = styled.div``;

const StyledSkillNav = styled.nav`
    display: flex;
`;

const StyledImageWrapper = styled.div`
    width: 5rem;
    height: 5rem;
    position: relative;
    object-fit: cover;
    border-radius: 0.5rem;
`;

const StyledSkillBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`;

const StyledContent = styled.div<{ $isHidden: boolean }>`
    display: ${(props) => (props.$isHidden ? "none" : "flex")};
    flex-direction: column;
    gap: 1rem;
`;

const StyledMarkWrapper = styled.div`
    display: flex;
    gap: 0.5rem;
`;

const StyledMarker = styled.div`
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    background: #696a6b;
    color: #ffffff;
    font-size: 0.75rem;
`;

export default Skill;
