import { css } from "@emotion/css";

// 기기 사이즈
const size = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
};

// 미디어 스타일
const breakpoint = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
};

// color
const color = {
    white: "white",
    white400: "#f6f6f6",
    black: "black",
    lightBlack: "rgba(0, 0, 0, 0.85)",
    darkBlack: "rgba(0, 0, 0, 0.45)",
    gray: "#D9D9D9",
    gray400: "#C8C8C8",
    gray500: "#595959",
    gray600: "#8c8c8c",
    gray700: "#616161",
    gray900: "#202223",
    Conditional: "#F0F2F5",
    Primary5: "#40A9FF",
    Primary6: "#1890FF",
    red: "#f02020",
};

// flex 디자인
const flexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const flexCenterDir = css`
    ${flexCenter}

    flex-direction: column;
`;

const overflowY = css`
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const defaultMaxWidth = css`
    width: 100%;
    max-width: 67.5rem;
    padding: 0 2rem;

    @media screen and (${breakpoint.tablet}) {
        max-width: 50rem;
    }
`;

const mobileWidth = css`
    @media screen and (${breakpoint.mobileL}) {
        width: 25.75rem !important;
    }
`;

const fadeIn = css`
    opacity: 0;
    animation-name: fade-in;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;

    @keyframes fade-in {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
`;

export const theme = {
    size,
    breakpoint,
    color,
    flexCenter,
    flexCenterDir,
    overflowY,
    defaultMaxWidth,
    mobileWidth,
    fadeIn,
};
