
const clientId ="1181986534493270066"; // Ganti dengan Client ID aplikasi Discord Anda
const DiscordRPC = require("discord-rpc");
const RPC = new DiscordRPC.Client({ transport: "ipc" });

DiscordRPC.register(clientId);

async function setActivity() {
    if (!RPC) return;

    RPC.setActivity({
        details: "his is all about a very long journey",
        state: "who knows if this will all end",
        startTimestamp: new Date(Date.now() - 1701941441),
        largeImageKey: "https://media.giphy.com/media/4ilFRqgbzbx4c/giphy.gif", 
        largeImageText: "IAM",
        smallImageKey: "https://c.tenor.com/TgKK6YKNkm0AAAAi/verified-verificado.gif", 
        smallImageText: "NOT GOOD",
        buttons: [
            {
                 label: "MY",
             url: "http://www.youtube.com/@xionskece"
             },
            {
                label: "JOURNEY",
             url: "https://www.tiktok.com/@xionskece?_t=8hxdwnKIFgQ&_r=1" 
            },
        ],
    });
}

RPC.on("ready", () => {
    setActivity();

    setInterval(() => {
        
    }, 20 * 1000);
});

RPC.login({ clientId }).catch(console.error);