import user from "../data/user";
import formatDate from "./formatDate";

export default function formatContent(
    content: string,
    { date, chapters, speaker }: Chapter
) {
    return `${content}\n\n**일시**\n\`\`\`${formatDate(
        date
    )}\n\`\`\`**챕터**\n\`\`\`\n${chapters.join("\n")}\n\`\`\`**발표자**\n<@${
        user[speaker]
    }>`;
}
