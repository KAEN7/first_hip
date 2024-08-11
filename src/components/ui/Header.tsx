import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Header = () => {
    const router = useRouter();

    return (
        <StyledHeader>
            <Image src={"/images/logo.png"} onClick={() => router.push("/")} width={46} height={46} alt={"logo"} draggable={false} priority={true} />
            {/* 퍼덩이 */}
        </StyledHeader>
    );
};

const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    background: #fff;
    z-index: 999;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    backdrop-filter: blur(10px);
    background: black;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    font-weight: 800;

    img {
        cursor: pointer;
    }
`;

export default Header;
