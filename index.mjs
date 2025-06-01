// Username of someone who is currently live
import { TikTokLiveConnection, WebcastEvent } from 'tiktok-live-connector';
import say from 'say';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter TikTok username: ', (inputUsername) => {
    const tiktokUsername = inputUsername || 'lilkudzivert';
    // Create a new wrapper object and pass the username
    const connection = new TikTokLiveConnection(tiktokUsername);

    // Connect to the chat (await can be used as well)
    connection.connect().then(state => {
        console.info(`Connected to roomId ${state.roomId}`);
    }).catch(err => {
        console.error('Failed to connect', err);
    });

    // Define the events that you want to handle
    // In this case we listen to chat messages (comments)
    connection.on(WebcastEvent.CHAT, data => {
        const message = `${data.user.uniqueId} (userId:${data.user.uniqueId}) writes: ${data.comment}`;
        console.log(message);
        say.speak(data.comment); // Use say to read the comment aloud
    });

    // And here we receive gifts sent to the streamer
    connection.on(WebcastEvent.GIFT, data => {
        console.log(`${data.user.uniqueId} (userId:${data.user.userId}) sends ${data.giftId}`);
        say.speak(`${data.user.uniqueId} sends a gift!`); // Use say to read the gift aloud
    });

    // ...and more events described in the documentation below

    rl.close();
});