function formatToTwoDigits(number: number) {
    if (number < 10) {
        return `0${number}`;
    }

    return `${number}`;
}

export default function formatDate(date: Date) {
    return `${date.getFullYear()}년 ${formatToTwoDigits(
        date.getMonth() + 1
    )}월 ${formatToTwoDigits(date.getDate())}일`;
}
