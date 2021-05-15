{
  "name": "çal",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "bmsOy",
  "actions": [
    {
      "channel": "0",
      "varName": "",
      "info": "1",
      "storage": "1",
      "varName2": "kullanilan-kanal",
      "name": "Store Channel Info"
    },
    {
      "channel": "0",
      "varName": "",
      "info": "0",
      "storage": "2",
      "varName2": "kullanilan-kanal-obje",
      "name": "Store Channel Info"
    },
    {
      "info": "0",
      "find": "${tempVars(\"kullanilan-kanal\")}",
      "storage": "1",
      "varName": "bot_channel",
      "name": "Find Channel"
    },
    {
      "member": "1",
      "varName": "",
      "info": "0",
      "storage": "1",
      "varName2": "name",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "",
      "info": "2",
      "storage": "1",
      "varName2": "mem-user",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "",
      "info": "16",
      "storage": "1",
      "varName2": "mem-url",
      "name": "Store Member Info"
    },
    {
      "server": "0",
      "varName": "",
      "storage": "1",
      "varName2": "get-bot-member",
      "name": "Get Bot as Member"
    },
    {
      "member": "2",
      "varName": "get-bot-member",
      "permission": "CONNECT",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "2",
      "iffalseVal": "17",
      "name": "Check Member Permissions"
    },
    {
      "member": "1",
      "varName": "",
      "info": "4",
      "varName2": "",
      "iftrue": "0",
      "iftrueVal": "test_queue",
      "iffalse": "4",
      "iffalseVal": "no_voice",
      "name": "Check If Member"
    },
    {
      "member": "1",
      "varName": "",
      "info": "8",
      "varName2": "",
      "iftrue": "4",
      "iftrueVal": "no_defean",
      "iffalse": "0",
      "iffalseVal": "test_queue",
      "name": "Check If Member"
    },
    {
      "condition": "0",
      "comparison": "4",
      "value": "0",
      "iftrue": "4",
      "iftrueVal": "0",
      "iffalse": "4",
      "iffalseVal": "Spotify:Check",
      "name": "Check Parameters"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "no_defean",
      "color": "#00ff00",
      "description": "Kişi kendini sağırlaştırdı ise burası devreye girer.",
      "name": "Create Anchor"
    },
    {
      "channel": "5",
      "varName": "bot_channel",
      "message": ":x: **|** **${tempVars(\"name\")}**, lütfen **sağırlaştırmanı** açıp dene.",
      "storage": "0",
      "varName2": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    },
    {
      "time": "2",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "0",
      "varName": "",
      "reason": "",
      "name": "Delete Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "no_permission",
      "color": "#00ff00",
      "description": "Botun yetkisi yok ise burası devreye girer.",
      "name": "Create Anchor"
    },
    {
      "channel": "5",
      "varName": "bot_channel",
      "message": ":x: **|** **${tempVars(\"name\")}**, lütfen bana **ses kanallarına erişim** yetkisi verip dene.",
      "storage": "0",
      "varName2": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    },
    {
      "time": "2",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "0",
      "varName": "",
      "reason": "",
      "name": "Delete Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "no_voice",
      "color": "#00ff00",
      "description": "Ses kanalında değil isen burası devreye girer.",
      "name": "Create Anchor"
    },
    {
      "channel": "5",
      "varName": "bot_channel",
      "message": ":x: **|** **${tempVars(\"name\")}**, lütfen bir **ses kanalına** girip dene.",
      "storage": "0",
      "varName2": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    },
    {
      "time": "2",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "0",
      "varName": "",
      "reason": "",
      "name": "Delete Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "0",
      "color": "#00ff00",
      "description": "Oynat dedikten sonra birşey demediysen:",
      "name": "Create Anchor"
    },
    {
      "member": "2",
      "varName": "get-bot-member",
      "info": "4",
      "varName2": "",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "5",
      "name": "Check If Member"
    },
    {
      "server": "0",
      "info": "13",
      "storage": "1",
      "varName": "playing_now",
      "varName2": "",
      "name": "Store Audio Info"
    },
    {
      "server": "0",
      "info": "14",
      "storage": "1",
      "varName": "current_time",
      "varName2": "",
      "name": "Store Audio Info"
    },
    {
      "channel": "5",
      "varName": "bot_channel",
      "message": ":notes: **|** En son oynatılan şarkı: **${tempVars(\"playing_now\")}**",
      "storage": "0",
      "varName2": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    },
    {
      "storage": "0",
      "varName": "",
      "reason": "",
      "name": "Delete Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "channel": "5",
      "varName": "bot_channel",
      "message": "<a:ret:838733663205720064> **|** **${tempVars(\"name\")}** lütfen bir şarkı adı veya linki yazıp tekrar dene.\n<a:uyari:804074533987811338> **|** Örnek kullanım: ``m-oynat Despacito`` şeklinde kullanabilirsin.",
      "storage": "0",
      "varName2": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    },
    {
      "storage": "0",
      "varName": "",
      "reason": "",
      "name": "Delete Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "Spotify:Check",
      "color": "#00ff00",
      "description": "Spotify Linki atılmış ise desteklenmediğini söyler.",
      "name": "Create Anchor"
    },
    {
      "info": "1",
      "infoIndex": "1",
      "storage": "1",
      "varName": "spotilink/title",
      "name": "Store Command Params"
    },
    {
      "storage": "1",
      "varName": "spotilink/title",
      "comparison": "5",
      "value": "'spotify.com'",
      "iftrue": "0",
      "iftrueVal": "Spotify:Search",
      "iffalse": "4",
      "iffalseVal": "Playlist_algila",
      "name": "Check Variable"
    },
    {
      "channel": "5",
      "varName": "bot_channel",
      "message": "<a:uyari:804074533987811338> **|** Spotify linki ile müzik eklemek kısa süreliğine devre dışı, bunun yerine istediğin şarkının adını yazabilirsin. Örnek olarak: ``m-oynat Despacito`` şeklinde kullanabilirsin.",
      "storage": "0",
      "varName2": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "Playlist_algila",
      "color": "#00ff40",
      "description": "Playlist komut çalışmaya devam eder:",
      "name": "Create Anchor"
    },
    {
      "info": "1",
      "infoIndex": "1",
      "storage": "1",
      "varName": "playilink/title",
      "name": "Store Command Params"
    },
    {
      "storage": "1",
      "varName": "playilink/title",
      "comparison": "5",
      "value": "'playlist'",
      "iftrue": "0",
      "iftrueVal": "Spotify:Search",
      "iffalse": "4",
      "iffalseVal": "In_Voice",
      "name": "Check Variable"
    },
    {
      "channel": "5",
      "varName": "bot_channel",
      "message": "<a:yukleniyor:804355400819802152> **|** ``Playlist`` isteğin sıraya **ekleniyor...**",
      "storage": "0",
      "varName2": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    },
    {
      "channel": "0",
      "varName": "",
      "name": "Join Voice Channel"
    },
    {
      "url": "${tempVars(\"playilink/title\")}",
      "seek": "0",
      "volume": "",
      "passes": "1",
      "bitrate": "",
      "maxvid": "200",
      "name": "Play YouTube Playlist"
    },
    {
      "time": "1",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "server": "0",
      "info": "5",
      "storage": "1",
      "varName": "playlist:uzunlugu",
      "varName2": "",
      "name": "Store Audio Info"
    },
    {
      "storage": "0",
      "varName": "",
      "reason": "",
      "name": "Delete Message"
    },
    {
      "title": "YouTube playlistin sıraya eklendi:",
      "author": "",
      "color": "RANDOM",
      "url": "",
      "authorIcon": "",
      "authorUrl": "",
      "imageUrl": "",
      "thumbUrl": "",
      "timestamp": "false",
      "debug": "false",
      "text": "",
      "year": "",
      "month": "",
      "day": "",
      "hour": "",
      "minute": "",
      "second": "",
      "storage": "1",
      "varName": "embed-playlist",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed-playlist",
      "fieldName": "Playlist detayları:",
      "message": "Playlist'i ekleyen: ${tempVars(\"name\")}\nPlaylist linki: [**Linke gitmek için tıkla!**](${tempVars(\"playilink/title\")})\nPlaylist uzunluğu: **${tempVars(\"playlist:uzunlugu\")} video**",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed-playlist",
      "message": "Müziği geçmek için m-geç, durdurmak için m-durdur komutlarını kullan.",
      "footerIcon": "${tempVars(\"mem-url\")}",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "embed-playlist",
      "channel": "0",
      "varName2": "",
      "storage3": "0",
      "varName3": "",
      "iffalse": "0",
      "iffalseVal": "",
      "messageContent": "",
      "name": "Send Embed Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "In_Voice",
      "color": "#00ff40",
      "description": "Ses kanalında isen komut çalışmaya devam eder:",
      "name": "Create Anchor"
    },
    {
      "info": "1",
      "infoIndex": "1",
      "storage": "1",
      "varName": "title/link",
      "name": "Store Command Params"
    },
    {
      "channel": "5",
      "varName": "bot_channel",
      "message": "<a:yukleniyor:804355400819802152> **|** ``${tempVars(\"title/link\")}`` isteğin YouTube'da **aranıyor...**",
      "storage": "0",
      "varName2": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    },
    {
      "code": "const Scraper = require('@yimura/scraper').default;\n\nconst youtube = new Scraper();\n\nyoutube.search(`${tempVars(\"title/link\")}`).then(results => {\n    console.log(results.videos[0]);\n    \n  Actions.storeValue(results.videos[0].id, 1, \"url1\", cache);\n  Actions.storeValue(results.videos[0].title, 1, \"title\", cache);\n  Actions.storeValue(results.videos[0].link, 1, \"link1\", cache);\n  Actions.storeValue(results.videos[0].thumbnail, 1, \"thumbnail\", cache);\n  Actions.storeValue(results.videos[0].duration, 1, \"duration\", cache);\n  \n     console.log(results.videos[1]);\n    \n  Actions.storeValue(results.videos[1].id, 1, \"url2\", cache);\n  Actions.storeValue(results.videos[1].title, 1, \"title1\", cache);\n  Actions.storeValue(results.videos[1].link, 1, \"link2\", cache);\n  Actions.storeValue(results.videos[1].thumbnail, 1, \"thumbnail1\", cache);\n  Actions.storeValue(results.videos[1].duration, 1, \"duration1\", cache);\n  \n  console.log(results.videos[2]);\n    \n  Actions.storeValue(results.videos[2].id, 1, \"url3\", cache);\n  Actions.storeValue(results.videos[2].title, 1, \"title2\", cache);\n  Actions.storeValue(results.videos[2].link, 1, \"link3\", cache);\n  Actions.storeValue(results.videos[2].thumbnail, 1, \"thumbnail2\", cache);\n  Actions.storeValue(results.videos[2].duration, 1, \"duration2\", cache);\n});",
      "behavior": "0",
      "interpretation": "1",
      "storage": "0",
      "varName": "",
      "VTypeSelect": "0",
      "CVTypeValue": "",
      "name": "Run Script"
    },
    {
      "time": "2",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "title": "▶️ **|** Lütfen bu sonuçlardan birini seç:",
      "author": "",
      "color": "RANDOM",
      "url": "",
      "authorIcon": "",
      "authorUrl": "",
      "imageUrl": "",
      "thumbUrl": "",
      "timestamp": "false",
      "debug": "false",
      "text": "",
      "year": "",
      "month": "",
      "day": "",
      "hour": "",
      "minute": "",
      "second": "",
      "storage": "1",
      "varName": "embed-select",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed-select",
      "fieldName": "Arama Sonuçları:",
      "message": "**1.** [${tempVars(\"title\")}](${tempVars(\"link1\")})\n**2.** [${tempVars(\"title1\")}](${tempVars(\"link2\")})\n**3.** [${tempVars(\"title2\")}](${tempVars(\"link3\")})",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed-select",
      "fieldName": "Lütfen bu sonuçlardan birini oynatmak için seçin:",
      "message": "Seçmek için komut kullanmadan **1**, **2**, veya **3** şeklinde cevap verebilirsin.",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed-select",
      "message": "Aramayı iptal etmek için herhangi birşey yazabilirsin.",
      "footerIcon": "",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "embed-select",
      "channel": "0",
      "varName2": "",
      "storage3": "1",
      "varName3": "mesaj:obje",
      "iffalse": "0",
      "iffalseVal": "",
      "messageContent": "",
      "name": "Send Embed Message"
    },
    {
      "storage": "0",
      "varName": "",
      "filter": "content.length > 0 && author.id === user.id",
      "max": "1",
      "time": "60000",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "4",
      "storage2": "1",
      "varName2": "answer:result",
      "name": "Await Response Call Action"
    },
    {
      "storage": "1",
      "varName": "answer:result",
      "conversion": "0",
      "storage2": "1",
      "varName2": "answer:sayi:convert",
      "name": "Convert Variable"
    },
    {
      "storage": "1",
      "varName": "answer:sayi:convert",
      "comparison": "1",
      "value": "1",
      "iftrue": "4",
      "iftrueVal": "sonuc_1",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "answer:sayi:convert",
      "comparison": "1",
      "value": "2",
      "iftrue": "4",
      "iftrueVal": "sonuc_2",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "answer:sayi:convert",
      "comparison": "1",
      "value": "3",
      "iftrue": "4",
      "iftrueVal": "sonuc_3",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "<a:ret:838733663205720064> **|** Seçim yapılmadığından dolayı arama **iptal** edildi.",
      "storage": "0",
      "varName2": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "iftrue": "3",
      "iftrueVal": "1",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check is Bot in Voice Channel"
    },
    {
      "anchor_id": "sonuc_1",
      "color": "#25f900",
      "description": "Birinci sonucu oynatacak bölüm:",
      "name": "Create Anchor"
    },
    {
      "channel": "0",
      "varName": "",
      "name": "Join Voice Channel"
    },
    {
      "url": "https://www.youtube.com/watch?v=${tempVars(\"url1\")}",
      "seek": "0",
      "volume": "",
      "passes": "1",
      "bitrate": "",
      "type": "0",
      "name": "Play YouTube Video"
    },
    {
      "description": "",
      "jump_to_anchor": "embed1",
      "color": "#000000",
      "name": "Jump to Anchor"
    },
    {
      "anchor_id": "sonuc_2",
      "color": "#25f900",
      "description": "İkinci sonucu oynatacak bölüm:",
      "name": "Create Anchor"
    },
    {
      "channel": "0",
      "varName": "",
      "name": "Join Voice Channel"
    },
    {
      "url": "https://www.youtube.com/watch?v=${tempVars(\"url2\")}",
      "seek": "0",
      "volume": "",
      "passes": "1",
      "bitrate": "",
      "type": "0",
      "name": "Play YouTube Video"
    },
    {
      "description": "",
      "jump_to_anchor": "embed2",
      "color": "#000000",
      "name": "Jump to Anchor"
    },
    {
      "anchor_id": "sonuc_3",
      "color": "#25f900",
      "description": "Üçüncü sonucu oynatacak bölüm:",
      "name": "Create Anchor"
    },
    {
      "channel": "0",
      "varName": "",
      "name": "Join Voice Channel"
    },
    {
      "url": "https://www.youtube.com/watch?v=${tempVars(\"url3\")}",
      "seek": "0",
      "volume": "",
      "passes": "1",
      "bitrate": "",
      "type": "0",
      "name": "Play YouTube Video"
    },
    {
      "description": "",
      "jump_to_anchor": "embed3",
      "color": "#000000",
      "name": "Jump to Anchor"
    },
    {
      "anchor_id": "embed1",
      "color": "#1aff1f",
      "description": "EMBED1",
      "name": "Create Anchor"
    },
    {
      "title": "İsteğin sıraya eklendi:",
      "author": "",
      "color": "RANDOM",
      "url": "",
      "authorIcon": "",
      "authorUrl": "",
      "imageUrl": "",
      "thumbUrl": "${tempVars(\"thumbnail\")}",
      "timestamp": "false",
      "debug": "false",
      "text": "",
      "year": "",
      "month": "",
      "day": "",
      "hour": "",
      "minute": "",
      "second": "",
      "storage": "1",
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "time": "${tempVars(\"duration\")}",
      "storage": "1",
      "varName": "time_left",
      "name": "Convert Seconds To D/H/M/S"
    },
    {
      "server": "0",
      "info": "5",
      "storage": "1",
      "varName": "sira_uzunlugu",
      "varName2": "",
      "name": "Store Audio Info"
    },
    {
      "storage": "1",
      "varName": "sira_uzunlugu",
      "comparison": "0",
      "value": "",
      "iftrue": "3",
      "iftrueVal": "2",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "[**${tempVars(\"title\")}**](${tempVars(\"link1\")})\n\nİsteyen kişi: **${tempVars(\"name\")}**\nSıradaki yeri: **Şu anda oynatılıyor**\nVideo Süresi: **${tempVars(\"time_left\")}**",
      "name": "Set Embed Description"
    },
    {
      "count": "1",
      "name": "Skip Actions"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "[**${tempVars(\"title\")}**](${tempVars(\"link1\")})\n\nİsteyen kişi: **${tempVars(\"name\")}**\nSıradaki yeri: **${tempVars(\"sira_uzunlugu\")}**\nVideo Süresi: **${tempVars(\"time_left\")}**",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "Müziği geçmek için m-geç, durdurmak için m-durdur komutlarını kullan.",
      "footerIcon": "${tempVars(\"mem-url\")}",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "embed",
      "channel": "5",
      "varName2": "bot_channel",
      "storage3": "0",
      "varName3": "nowplaying",
      "iffalse": "0",
      "iffalseVal": "",
      "messageContent": "",
      "name": "Send Embed Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "embed2",
      "color": "#1aff1f",
      "description": "EMBED2",
      "name": "Create Anchor"
    },
    {
      "title": "İsteğin sıraya eklendi:",
      "author": "",
      "color": "RANDOM",
      "url": "",
      "authorIcon": "",
      "authorUrl": "",
      "imageUrl": "",
      "thumbUrl": "${tempVars(\"thumbnail1\")}",
      "timestamp": "false",
      "debug": "false",
      "text": "",
      "year": "",
      "month": "",
      "day": "",
      "hour": "",
      "minute": "",
      "second": "",
      "storage": "1",
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "time": "${tempVars(\"duration1\")}",
      "storage": "1",
      "varName": "time_left",
      "name": "Convert Seconds To D/H/M/S"
    },
    {
      "server": "0",
      "info": "5",
      "storage": "1",
      "varName": "sira_uzunlugu",
      "varName2": "",
      "name": "Store Audio Info"
    },
    {
      "storage": "1",
      "varName": "sira_uzunlugu",
      "comparison": "0",
      "value": "",
      "iftrue": "3",
      "iftrueVal": "2",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "[**${tempVars(\"title1\")}**](${tempVars(\"link2\")})\n\nİsteyen kişi: **${tempVars(\"name\")}**\nSıradaki yeri: **Şu anda oynatılıyor**\nVideo Süresi: **${tempVars(\"time_left\")}**",
      "name": "Set Embed Description"
    },
    {
      "count": "1",
      "name": "Skip Actions"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "[**${tempVars(\"title1\")}**](${tempVars(\"link2\")})\n\nİsteyen kişi: **${tempVars(\"name\")}**\nSıradaki yeri: **${tempVars(\"sira_uzunlugu\")}**\nVideo Süresi: **${tempVars(\"time_left\")}**",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "Müziği geçmek için m-geç, durdurmak için m-durdur komutlarını kullan.",
      "footerIcon": "${tempVars(\"mem-url\")}",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "embed",
      "channel": "5",
      "varName2": "bot_channel",
      "storage3": "0",
      "varName3": "nowplaying",
      "iffalse": "0",
      "iffalseVal": "",
      "messageContent": "",
      "name": "Send Embed Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "embed3",
      "color": "#1aff1f",
      "description": "EMBED3",
      "name": "Create Anchor"
    },
    {
      "title": "İsteğin sıraya eklendi:",
      "author": "",
      "color": "RANDOM",
      "url": "",
      "authorIcon": "",
      "authorUrl": "",
      "imageUrl": "",
      "thumbUrl": "${tempVars(\"thumbnail2\")}",
      "timestamp": "false",
      "debug": "false",
      "text": "",
      "year": "",
      "month": "",
      "day": "",
      "hour": "",
      "minute": "",
      "second": "",
      "storage": "1",
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "time": "${tempVars(\"duration2\")}",
      "storage": "1",
      "varName": "time_left",
      "name": "Convert Seconds To D/H/M/S"
    },
    {
      "server": "0",
      "info": "5",
      "storage": "1",
      "varName": "sira_uzunlugu",
      "varName2": "",
      "name": "Store Audio Info"
    },
    {
      "storage": "1",
      "varName": "sira_uzunlugu",
      "comparison": "0",
      "value": "",
      "iftrue": "3",
      "iftrueVal": "2",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "[**${tempVars(\"title2\")}**](${tempVars(\"link3\")})\n\nİsteyen kişi: **${tempVars(\"name\")}**\nSıradaki yeri: **Şu anda oynatılıyor**\nVideo Süresi: **${tempVars(\"time_left\")}**",
      "name": "Set Embed Description"
    },
    {
      "count": "1",
      "name": "Skip Actions"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "[**${tempVars(\"title2\")}**](${tempVars(\"link3\")})\n\nİsteyen kişi: **${tempVars(\"name\")}**\nSıradaki yeri: **${tempVars(\"sira_uzunlugu\")}**\nVideo Süresi: **${tempVars(\"time_left\")}**",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "Müziği geçmek için m-geç, durdurmak için m-durdur komutlarını kullan.",
      "footerIcon": "${tempVars(\"mem-url\")}",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "embed",
      "channel": "5",
      "varName2": "bot_channel",
      "storage3": "0",
      "varName3": "nowplaying",
      "iffalse": "0",
      "iffalseVal": "",
      "messageContent": "",
      "name": "Send Embed Message"
    },
    {
      "name": "End Action Sequence"
    }
  ],
  "_aliases": [
    "p",
    "play",
    "çal"
  ]
}