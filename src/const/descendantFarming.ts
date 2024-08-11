// https://gall.dcinside.com/mgallery/board/view/?id=first_descendant&no=63595

type FarmingAreaType = {
    difficulty: "harder" | "normal"; // 난이도
    area: string; // 지역
    item: {
        name: string; // 이름
        probability: string; // 확률 퍼센트
    }; // 비정형 물질
};

export type DecentFarmingType = {
    cells: FarmingAreaType[]; // 강화 세포
    stabilizationDevice: FarmingAreaType[]; // 안정화 장치
    helicalCatalyst: FarmingAreaType[]; // 나선 촉매
    code: FarmingAreaType[]; // 코드
};

export interface DescendantFarmingType {
    [key: string]: DecentFarmingType;
}

const ITEM = "비정형 물질";

const handleMakeBoss = (
    name:
        | "스터닝뷰티"
        | "행드맨"
        | "데드 브라이드"
        | "디바우러"
        | "그레이브 워커"
        | "프로스트 워커"
        | "몰튼 포트리스"
        | "파이로마니악"
        | "업스트럭터"
        | "스웜프 워커"
        | "엑시큐시너"
        | "글러트니"
) => {
    return `[요격전] - ${name}`;
};

const handleMakeArea = (
    key: "베스퍼스" | "요새" | "메아리 늪지" | "아그나 사막" | "백야 협곡" | "불모지" | "하기오스",
    name:
        | "추락한 방주"
        | "유적지"
        | "얼어붙은 골짜기"
        | "버려진 은신처"
        | "부유석 지대"
        | "산령"
        | "낙석지대"
        | "방어선"
        | "잃어버린 보급소"
        | "부화실"
        | "통제구역"
        | "물이끼늪"
        | "모래 언덕 기지",
    isVoid?: boolean
) => {
    return `${isVoid ? "[보이드 융합로] " : ""}${key} - ${name}`;
};

// TODO 각 상수들 분리가능한데 나중에 API로 받아올수 있는지 확인 or 상수로 분리
const DESCENDANT_FARMING: DescendantFarmingType = {
    글레이: {
        cells: [
            { difficulty: "normal", area: handleMakeBoss("스터닝뷰티"), item: { name: `${ITEM} 012`, probability: "38%" } },
            { difficulty: "normal", area: handleMakeBoss("행드맨"), item: { name: `${ITEM} 053`, probability: "38%" } },
            { difficulty: "harder", area: handleMakeBoss("데드 브라이드"), item: { name: `${ITEM} 066`, probability: "32%" } },
            { difficulty: "harder", area: handleMakeArea("요새", "추락한 방주", true), item: { name: `${ITEM} 120`, probability: "32%" } },
        ],
        stabilizationDevice: [
            { difficulty: "normal", area: handleMakeArea("베스퍼스", "유적지", true), item: { name: `${ITEM} 013`, probability: "6%" } },
            { difficulty: "normal", area: handleMakeArea("요새", "얼어붙은 골짜기"), item: { name: `${ITEM} 047`, probability: "38%" } },
            { difficulty: "harder", area: handleMakeArea("메아리 늪지", "버려진 은신처", true), item: { name: `${ITEM} 083`, probability: "32%" } },
            { difficulty: "harder", area: handleMakeBoss("프로스트 워커"), item: { name: `${ITEM} 115`, probability: "32%" } },
        ],
        helicalCatalyst: [
            { difficulty: "normal", area: handleMakeArea("아그나 사막", "부유석 지대", true), item: { name: `${ITEM} 028`, probability: "6%" } },
            { difficulty: "normal", area: handleMakeBoss("행드맨"), item: { name: `${ITEM} 050`, probability: "6%" } },
            { difficulty: "harder", area: handleMakeBoss("디바우러"), item: { name: `${ITEM} 078`, probability: "32%" } },
            { difficulty: "harder", area: handleMakeArea("백야 협곡", "산령", true), item: { name: `${ITEM} 099`, probability: "32%" } },
        ],
        code: [
            { difficulty: "normal", area: handleMakeBoss("그레이브 워커"), item: { name: `${ITEM} 002`, probability: "38%" } },
            { difficulty: "harder", area: handleMakeBoss("데드 브라이드"), item: { name: `${ITEM} 069`, probability: "20%" } },
            { difficulty: "harder", area: handleMakeArea("아그나 사막", "부유석 지대", true), item: { name: `${ITEM} 093`, probability: "20%" } },
            { difficulty: "harder", area: handleMakeBoss("몰튼 포트리스"), item: { name: `${ITEM} 124`, probability: "10%" } },
        ],
    },
    "얼티밋 글레이": {
        cells: [
            { difficulty: "harder", area: handleMakeArea("불모지", "낙석지대", true), item: { name: `${ITEM} 060`, probability: "6%" } },
            { difficulty: "harder", area: handleMakeBoss("파이로마니악"), item: { name: `${ITEM} 084`, probability: "6%" } },
            { difficulty: "harder", area: handleMakeArea("요새", "방어선", true), item: { name: `${ITEM} 122`, probability: "6%" } },
        ],
        stabilizationDevice: [
            { difficulty: "harder", area: handleMakeBoss("디바우러"), item: { name: `${ITEM} 076`, probability: "6%" } },
            { difficulty: "harder", area: handleMakeArea("아그나 사막", "부유석 지대", true), item: { name: `${ITEM} 092`, probability: "6%" } },
            { difficulty: "harder", area: handleMakeBoss("업스트럭터"), item: { name: `${ITEM} 104`, probability: "6%" } },
        ],
        helicalCatalyst: [
            { difficulty: "harder", area: handleMakeArea("베스퍼스", "잃어버린 보급소", true), item: { name: `${ITEM} 072`, probability: "6%" } },
            { difficulty: "harder", area: handleMakeBoss("스웜프 워커"), item: { name: `${ITEM} 104`, probability: "6%" } },
            { difficulty: "harder", area: handleMakeArea("백야 협곡", "부화실", true), item: { name: `${ITEM} 102`, probability: "6%" } },
        ],
        code: [
            { difficulty: "harder", area: handleMakeBoss("엑시큐시너"), item: { name: `${ITEM} 058`, probability: "6%" } },
            { difficulty: "harder", area: handleMakeBoss("데드 브라이드"), item: { name: `${ITEM} 068AA`, probability: "6%" } },
            { difficulty: "harder", area: handleMakeBoss("글러트니"), item: { name: `${ITEM} 068AA`, probability: "6%" } },
            { difficulty: "harder", area: handleMakeBoss("몰튼 포트리스"), item: { name: `${ITEM} 126`, probability: "6%" } },
        ],
    },
    레픽: {
        cells: [
            { difficulty: "normal", area: handleMakeBoss("스터닝뷰티"), item: { name: `${ITEM} 012`, probability: "15%" } },
            { difficulty: "harder", area: handleMakeArea("불모지", "통제구역", true), item: { name: `${ITEM} 064`, probability: "32%" } },
            { difficulty: "harder", area: handleMakeArea("메아리 늪지", "물이끼늪", true), item: { name: `${ITEM} 080`, probability: "32%" } },
            { difficulty: "harder", area: handleMakeArea("하기오스", "모래 언덕 기지", true), item: { name: `${ITEM} 108`, probability: "32%" } },
        ],
        stabilizationDevice: [],
        helicalCatalyst: [],
        code: [],
    },
};

export default DESCENDANT_FARMING;
