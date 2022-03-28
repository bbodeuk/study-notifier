import axios from "axios";
import chapter from "./data/chapter";
import formatContent from "./utils/formatContent";

function alarm() {
    const webhookUrl = process.env.WEBHOOK_URL;
    const [todaysChapter] = chapter
        .filter(
            (x) =>
                x.date.getTime() <= Date.now() &&
                Date.now() - x.date.getTime() <= 86400000
        )
        .slice(-1);

    if (!todaysChapter || !webhookUrl) {
        return;
    }

    axios.post(webhookUrl, {
        content: formatContent(
            "@everyone 곧 스터디 시작 시간입니다!",
            todaysChapter
        ),
    });
}

alarm();
