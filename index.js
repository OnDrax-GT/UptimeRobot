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
    bot.chat('/gamemode creative'); 
});
    bot.on('end', () => { setTimeout(createBot, 10000); });
    bot.on('error', (err) => console.log('Error:', err));
}
createBot();
