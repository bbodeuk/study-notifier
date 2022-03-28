const { DISCORD_ID } = process.env;
const user: User = Object.fromEntries(
    `${DISCORD_ID}`.split("\n").map((x) => x.split(" "))
);

export default user;
