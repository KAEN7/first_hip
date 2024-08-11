import React from "react";
import styled from "@emotion/styled";

import Dropdown from "../ui/Dropdown";
import Text from "../ui/Text";
import { DecentFarmingType } from "@/const/descendantFarming";

interface FarmingProps {
    maxWidth: string;
    data?: DecentFarmingType;
}

const Farming = ({ maxWidth, data }: FarmingProps) => {
    return (
        <Dropdown title={"파밍"} maxWidth={maxWidth} vertical={"row"} gap={3}>
            {data ? (
                <>
                    <StyledItemWrapper>
                        <Text type="subtitle" $mb={0.5}>
                            강화 세포
                        </Text>

                        <StyledItem>
                            {data.cells.map((item, index) => {
                                return (
                                    <StyledItemContent key={"강화 세포"}>
                                        <StyledMarker $color={item.difficulty === "normal" ? "#0d3e6f" : "#6f0d22"}>
                                            {item.difficulty === "normal" ? "일반" : "어려움"}
                                        </StyledMarker>
                                        <Text type="normal">{item.area}</Text>
                                        <Text type="normal">
                                            {item.item.name} {item.item.probability}
                                        </Text>
                                    </StyledItemContent>
                                );
                            })}
                        </StyledItem>
                    </StyledItemWrapper>

                    <StyledItemWrapper>
                        <Text type="subtitle" $mb={0.5}>
                            안정화 장치
                        </Text>

                        <StyledItem>
                            {data.stabilizationDevice.map((item, index) => {
                                return (
                                    <StyledItemContent key={"안정화 장치"}>
                                        <StyledMarker $color={item.difficulty === "normal" ? "#0d3e6f" : "#6f0d22"}>
                                            {item.difficulty === "normal" ? "일반" : "어려움"}
                                        </StyledMarker>
                                        <Text type="normal">{item.area}</Text>
                                        <Text type="normal">
                                            {item.item.name} {item.item.probability}
                                        </Text>
                                    </StyledItemContent>
                                );
                            })}
                        </StyledItem>
                    </StyledItemWrapper>

                    <StyledItemWrapper>
                        <Text type="subtitle" $mb={0.5}>
                            나선 촉매
                        </Text>

                        <StyledItem>
                            {data.helicalCatalyst.map((item, index) => {
                                return (
                                    <StyledItemContent key={"나선 촉매"}>
                                        <StyledMarker $color={item.difficulty === "normal" ? "#0d3e6f" : "#6f0d22"}>
                                            {item.difficulty === "normal" ? "일반" : "어려움"}
                                        </StyledMarker>
                                        <Text type="normal">{item.area}</Text>
                                        <Text type="normal">
                                            {item.item.name} {item.item.probability}
                                        </Text>
                                    </StyledItemContent>
                                );
                            })}
                        </StyledItem>
                    </StyledItemWrapper>

                    <StyledItemWrapper>
                        <Text type="subtitle" $mb={0.5}>
                            코드
                        </Text>

                        <StyledItem>
                            {data.code.map((item, index) => {
                                return (
                                    <StyledItemContent key={"코드"}>
                                        <StyledMarker $color={item.difficulty === "normal" ? "#0d3e6f" : "#6f0d22"}>
                                            {item.difficulty === "normal" ? "일반" : "어려움"}
                                        </StyledMarker>
                                        <Text type="normal">{item.area}</Text>
                                        <Text type="normal">
                                            {item.item.name} {item.item.probability}
                                        </Text>
                                    </StyledItemContent>
                                );
                            })}
                        </StyledItem>
                    </StyledItemWrapper>
                </>
            ) : (
                <Text type="title">아직 데이터가 없습니다!</Text>
            )}
        </Dropdown>
    );
};

const StyledItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`;

const StyledItem = styled.div`
    display: flex;
    gap: 1.5rem;
    width: 100%;
`;

const StyledItemContent = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledMarker = styled.div<{ $color: string }>`
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    background: ${({ $color }) => $color};
    color: #ffffff;
    font-size: 0.75rem;
`;

export default Farming;
