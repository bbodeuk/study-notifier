import axios from "axios";
import chapter from "./data/chapter";
import formatContent from "./utils/formatContent";

function reminder() {
    const webhookUrl = process.env.WEBHOOK_URL;
    const nextChapter = chapter.find((x) => Date.now() <= x.date.getTime());

    if (!nextChapter || !webhookUrl) {
        return;
    }

    axios.post(webhookUrl, {
        content: formatContent("다음 발표 리마인드", nextChapter),
    });
}

reminder();
