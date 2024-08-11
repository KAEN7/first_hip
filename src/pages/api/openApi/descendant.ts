import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { DescendantType } from "@/@types/meta/descendant";

type Data = {
    data: DescendantType[];
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const HOST_URL = process.env.NEXT_PUBLIC_NEXON_API_HOST ?? "";
    const API_KEY = process.env.NEXT_PUBLIC_FD_API_KEY ?? "";
    const languageCode = "ko";

    try {
        const response = await axios.get(`${HOST_URL}/static/tfd/meta/${languageCode}/descendant.json`, {
            headers: {
                "x-nxopen-api-key": API_KEY,
            },
        });
        console.log(response.data);
        res.status(200).json({ data: response.data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ data: [] });
    }
};

export default handler;
