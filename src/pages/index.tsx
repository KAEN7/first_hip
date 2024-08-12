import Head from "next/head";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const keywords = [""].join(",");
	const router = useRouter();

	// TODO util로 분리
	// TODO 이거는 지금 조회수가 없어서 넣어도 큰 의미가 없음
	const getMarkupScheme = (
		title?: string,
		subTitle?: string,
		url?: string,
		thumbnailUrl?: string,
		writer?: string,
		publishedAt?: number,
		updatedAt?: number
	) => {
		function formatTimestamp(timestamp?: number): string {
			const date = new Date(timestamp ? timestamp : Date.now());
			let formattedDate = date.toISOString();
			formattedDate = formattedDate.replace("Z", "+08:00");

			return formattedDate;
		}

		return {
			"@context": "https://schema.org",
			"@type": "WebPage",
			mainEntityOfPage: {
				"@type": "WebPage",
				"@id": `${process.env.NEXT_PUBLIC_DOMAIN}/${url}`, // URL
			},
			headline: `${title}`, // title
			description: `${subTitle}`, // description
			image: `vercel`, // thumbnail image
			author: {
				"@type": "Person",
				name: `${writer}`, // author name
			},
			publisher: {
				"@type": "Organization",
				name: "kaen", // company name
			},
			datePublished: `${formatTimestamp(publishedAt)}`, // create date
			dateModified: `${formatTimestamp(updatedAt)}`, // update date
		};
	};

	useEffect(() => {
		router.push("/descendant");
	}, []);

	return (
		<>
			{/* TODO 나중에 컴포넌트로 분리 */}
			<Head>
				<title>퍼덩이</title>
				<meta property="og:type" content="website" />
				<meta property="og:url" content={`${process.env.NEXT_PUBLIC_DOMAIN}`} />
				<meta property="og:title" content="퍼덩이" />
				<meta property="og:image" content="/images/logo.png" />
				<meta property="og:image:width" content="800" />
				<meta property="og:image:height" content="420" />
				<meta
					property="og:description"
					content="퍼스트 디센던트를 즐기기 위한 다양한 정보와 공략을 알아보세요"
				/>
				<meta property="og:site_name" content="퍼덩이" />
				<meta
					name="description"
					content="퍼스트 디센던트를 즐기기 위한 다양한 정보와 공략을 알아보세요"
				/>
				<meta name="twitter:title" content="퍼덩이" />
				<meta
					name="twitter:description"
					content="퍼스트 디센던트를 즐기기 위한 다양한 정보와 공략을 알아보세요"
				/>
				<meta name="keywords" content={keywords} />
				<meta name="twitter:title" content="퍼덩이" />
				<meta
					name="twitter:description"
					content="퍼스트 디센던트를 즐기기 위한 다양한 정보와 공략을 알아보세요"
				/>
				{/* <meta name="google-site-verification" content="구글서치콘솔키" /> */}
				{/* <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(
                            getMarkupScheme(data?.title, data?.subTitle, data?.url, data?.thumbnailUrl, data?.writer?.name, data?.publishedAt, data?.createdAt)
                        ),
                    }}
                /> */}
				<link rel="canonical" href={`${process.env.NEXT_PUBLIC_DOMAIN}`} />
			</Head>

			{/* <main className={`${styles.main} ${inter.className}`}></main> */}
		</>
	);
}
