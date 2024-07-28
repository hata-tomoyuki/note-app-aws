import { Note } from "@/app/notes/type";
import { createClient, MicroCMSQueries } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN!,
    apiKey: process.env.NEXT_PUBLIC_API_KEY!,
});

export const getNotesList = async () => {
    const noteLists = await client.getList<Note>({
        endpoint: "notes",
    });

    return noteLists;
}

export const getNoteDetail = async (contentId: string, queries?: MicroCMSQueries) => {
    const noteDetail = await client.getListDetail<Note>({
        endpoint: "notes",
        contentId,
        queries,
    });

    return noteDetail;
}


