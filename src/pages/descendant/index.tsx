import { useState } from "react";
import styled from "@emotion/styled";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import axios from "axios";

import { DescendantType } from "@/@types/meta/descendant";

import Page from "@/components/ui/Page";
import Card from "@/components/descendant/Card";
import Dropdown from "@/components/ui/Dropdown";
import Skill from "@/components/descendant/Skill";
import Head from "next/head";
import Farming from "@/components/descendant/Farming";
import DESCENDANT_FARMING from "@/const/descendantFarming";

interface DescendantProps {
    dehydratedState: DescendantType[];
}

// const Descendant = ({ dehydratedState: descendantList }: DescendantProps) => {
const Descendant = () => {
    // const [activeData, setActiveData] = useState<DescendantType>(descendantList[0]);
    // const keywords = descendantList.map((descendant) => descendant.descendant_name).join(",");

    const maxWidth = "1120px";

    return <></>;

    // return (
    //     <StyledDescendant gap={3} align="flex-start">
    //         <Head>
    //             <title>퍼덩이 - 계승자</title>
    //             <meta property="og:type" content="website" />
    //             <meta property="og:url" content={`${process.env.NEXT_PUBLIC_DOMAIN}/descendant`} />
    //             <meta property="og:title" content="퍼덩이" />
    //             <meta property="og:image" content="/images/logo.png" />
    //             <meta property="og:image:width" content="800" />
    //             <meta property="og:image:height" content="420" />
    //             <meta property="og:description" content="퍼스트 디센던트를 즐기기 위한 다양한 정보와 공략을 알아보세요" />
    //             <meta property="og:site_name" content="퍼덩이" />
    //             <meta name="description" content="퍼스트 디센던트를 즐기기 위한 다양한 정보와 공략을 알아보세요" />
    //             <meta name="twitter:title" content="퍼덩이" />
    //             <meta name="twitter:description" content="퍼스트 디센던트를 즐기기 위한 다양한 정보와 공략을 알아보세요" />
    //             <meta name="keywords" content={keywords} />
    //             <meta name="twitter:title" content="퍼덩이" />
    //             <meta name="twitter:description" content="퍼스트 디센던트를 즐기기 위한 다양한 정보와 공략을 알아보세요" />
    //             {/* <meta name="google-site-verification" content="구글서치콘솔키" /> */}
    //             {/* <script
    //                 type="application/ld+json"
    //                 dangerouslySetInnerHTML={{
    //                     __html: JSON.stringify(
    //                         getMarkupScheme(data?.title, data?.subTitle, data?.url, data?.thumbnailUrl, data?.writer?.name, data?.publishedAt, data?.createdAt)
    //                     ),
    //                 }}
    //             /> */}
    //             <link rel="canonical" href={`${process.env.NEXT_PUBLIC_DOMAIN}/descendant`} />
    //         </Head>

    //         <StyledAside>
    //             {/* 계승자 */}
    //             {descendantList.map((descendant: DescendantType) => {
    //                 return <Card key={descendant.descendant_id} data={descendant} onClick={() => setActiveData(descendant)} />;
    //             })}
    //         </StyledAside>

    //         <StyledMain>
    //             {/* 파밍 */}
    //             <Farming maxWidth={maxWidth} data={DESCENDANT_FARMING[activeData.descendant_name]} />

    //             {/* 스킬 */}
    //             <Skill maxWidth={maxWidth} data={activeData} />

    //             {/* <Dropdown title={"레벨별 스텟"} maxWidth={maxWidth}>
    //                 <>TEST</>
    //             </Dropdown> */}
    //         </StyledMain>
    //     </StyledDescendant>
    // );
};

const StyledDescendant = styled(Page)``;

const StyledAside = styled.aside`
    display: flex;
    flex-wrap: wrap;
    width: 384px;
`;

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    gap: 24px;
`;

// export const getStaticProps = async () => {
//     const queryClient = new QueryClient();

//     await queryClient.prefetchQuery(["descendant"], () =>
//         axios
//             // .get("http://localhost:3000/api/openApi/descendant")
//             .get("/api/openApi/descendant")
//             .then((res) => res.data.data)
//             .catch((err) => {
//                 console.error("[GET ARTICLE ERROR]", err);
//                 return [];
//                 // if (err.response.status === 404) {
//                 //     console.error("[GET ARTICLE ERROR]", err);
//                 // }
//                 // return {
//                 //     notFound: true,
//                 // };
//             })
//     );

//     const dehydratedState = await dehydrate(queryClient).queries[0]?.state?.data;

//     return {
//         props: {
//             dehydratedState: dehydratedState ?? [],
//         },
//         revalidate: 10, // ? seconds 3600 = 1 Hour, 86400 = 1 Day
//     };
// };

export default Descendant;
