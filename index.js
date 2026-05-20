const express = require('express');
const app = express();
const port = 3000;

// Membuat server web mini agar Replit punya URL publik
app.get('/', (req, res) => {
  res.send('Bot AFK Minecraft sedang berjalan 24/7!');
});

app.listen(port, () => {
  console.log(`Web server aktif di port ${port}`);
});

// --- KODE MINEFLAYER ANDA DI BAWAH INI ---
const mineflayer = require('mineflayer');

// --- BOT 1: PENJAGA LOBBY ---
function createLobbyBot() {
    const botLobby = mineflayer.createBot({
        host: 'yonszz.duckdns.org', // Ganti dengan IP Velocity-mu
        port: 12509,                  // Ganti dengan Port Velocity-mu
        username: 'Bot_Lobby',       
        auth: 'offline'               
    });

    botLobby.on('spawn', () => { 
        console.log('Bot Lobby masuk!'); 
        setTimeout(() => { botLobby.chat('/gamemode creative'); }, 3000); 
    });
    
    botLobby.on('error', (err) => console.log('Error Lobby:', err));
    botLobby.on('end', () => { setTimeout(createLobbyBot, 6000); });
}

// --- BOT 2: PENJAGA SURVIVAL ---
function createSurvivalBot() {
    const botSurvival = mineflayer.createBot({
        host: 'yonszz.duckdns.org', // Ganti dengan IP Velocity-mu
        port: 12509,                  // Ganti dengan Port Velocity-mu
        username: 'Bot_Survival',       
        auth: 'offline'               
    });

    botSurvival.on('spawn', () => { 
        console.log('Bot Survival masuk!'); 
        // Tunggu 3 detik, lalu pindah ke server survival
        // setTimeout(() => { botSurvival.chat('/server survival'); }, 3000); 
        // Tunggu 6 detik, lalu ubah ke mode creative
        // setTimeout(() => { botSurvival.chat('/gamemode creative'); }, 6000); 
    });

    botSurvival.on('error', (err) => console.log('Error Survival:', err));
    botSurvival.on('end', () => { setTimeout(createSurvivalBot, 9000); });
}

// --- JALANKAN KEDUA BOT DENGAN JEDA WAKTU ---
createLobbyBot(); // Jalankan Bot 1 langsung

// Tunggu 10 detik, baru jalankan Bot 2 agar tidak dianggap spam oleh server
setTimeout(() => {
    createSurvivalBot();
}, 10000);


function createBot() {
    const bot = mineflayer.createBot({
        host: 'yonszz.duckdns.org',      
        port: 12509,                  
        username: 'yonszz_BOT',       
        auth: 'offline'               
    });

    bot.on('spawn', () => { 
    console.log('Bot masuk ke Minecraft!'); 
    // Menyuruh bot mengetik command otomatis
    setTimeout(() => { bot.chat('/gamemode creative'); }, 3000);
});
    bot.on('end', () => { setTimeout(createBot, 8000); });
    bot.on('error', (err) => console.log('Error:', err));
}
createBot();
