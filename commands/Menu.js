const {cmd} = require('../lib')
const PastebinAPI = require("pastebin-js");
pastebin = new PastebinAPI("EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL");
cmd({
        pattern: "jfkhhv",
        desc: "To check ping",
        category: "extra",
        filename: __filename,
    },
    async(Void, citel) => {
        if(!citel.quoted) return citel.reply('Please quote any text to get link.')
        let data = await pastebin.createPaste(citel.quoted.text, "Secktor-Pastebin")
        citel.reply('_Here is your link._\n'+data)
    }
);

    //---------------------------------------------------------------------------

cmd({

            pattern: "1.1",           
            alias :['හෙරකු','herokubin','bin'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "💌",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*❆│· • • ━ ⊰❄️⊱ ━ • • ·│❆*
*˼‏👥˹ قـسـم الاعـضـاء┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*❄️⃝🧚‍♀️⤺┇.ايدي*
*❄️⃝🧚‍♀️⤺┇.رانك*
*❄️⃝🧚‍♀️⤺┇.المتصدرين*
*❄️⃝🧚‍♀️⤺┇.كشف*
*❄️⃝🧚‍♀️⤺┇.صورته*
*❄️⃝🧚‍♀️⤺┇.كونكت*
*❄️⃝🧚‍♀️⤺┇.طلب*
*❄️⃝🧚‍♀️⤺┇.مساعده*
*❄️⃝🧚‍♀️⤺┇.تشفير*
*❄️⃝🧚‍♀️⤺┇.حل*
*❄️⃝🧚‍♀️⤺┇.ترجم*
*❄️⃝🧚‍♀️⤺┇.اكشف*
*❄️⃝🧚‍♀️⤺┇.تخمين*
*❄️⃝🧚‍♀️⤺┇.زخرفه*
*❄️⃝🧚‍♀️⤺┇.اختصار*
*❄️⃝🧚‍♀️⤺┇.السا*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "2.1",           
            alias :['හෙරකු','herokubin','bin'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "💌",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*❆│· • • ━ ⊰❄️⊱ ━ • • ·│❆*
*˼‏🧑🏻‍💻˹ قـسـم الـمـطـور┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*❄️⃝🧚‍♀️⤺┇.انضم*
*❄️⃝🧚‍♀️⤺┇.بان*
*❄️⃝🧚‍♀️⤺┇.اذاعه*
*❄️⃝🧚‍♀️⤺┇.البوت*
*❄️⃝🧚‍♀️⤺┇.المده*
*❄️⃝🧚‍♀️⤺┇.بينج*
*❄️⃝🧚‍♀️⤺┇.فيروس*
*❄️⃝🧚‍♀️⤺┇.اخرج*
*❄️⃝🧚‍♀️⤺┇.فك-البان*
*❄️⃝🧚‍♀️⤺┇.الجروبات*
*❄️⃝🧚‍♀️⤺┇.البوت فتح*
*❄️⃝🧚‍♀️⤺┇.البوت قفل*
*❄️⃝🧚‍♀️⤺┇.المحظورين*
*❄️⃝🧚‍♀️⤺┇.ملاحظاتي*
*❄️⃝🧚‍♀️⤺┇.ملاحظه*
*❄️⃝🧚‍♀️⤺┇.حذف-ملاحظه*
*❄️⃝🧚‍♀️⤺┇.حذف-ملاحظاتي*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )   


    //---------------------------------------------------------------------------

cmd({

            pattern: "3.1",           
            alias :['හෙරකු','herokubin','bin'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "💌",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*❆│· • • ━ ⊰❄️⊱ ━ • • ·│❆*
*˼‏🏰˹ قـسم الـجـروب┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*❄️⃝🧚‍♀️⤺┇.منشن*
*❄️⃝🧚‍♀️⤺┇.مخفي*
*❄️⃝🧚‍♀️⤺┇.الرابط*
*❄️⃝🧚‍♀️⤺┇.اعاده*
*❄️⃝🧚‍♀️⤺┇.ترقيه*
*❄️⃝🧚‍♀️⤺┇.تخفيض*
*❄️⃝🧚‍♀️⤺┇.اضافه*
*❄️⃝🧚‍♀️⤺┇.طرد*
*❄️⃝🧚‍♀️⤺┇.غادر*
*❄️⃝🧚‍♀️⤺┇.حذف*
*❄️⃝🧚‍♀️⤺┇.تدمير*
*❄️⃝🧚‍♀️⤺┇.ارقام*
*❄️⃝🧚‍♀️⤺┇.الترحيب*
*❄️⃝🧚‍♀️⤺┇.المغادره*
*❄️⃝🧚‍♀️⤺┇.جروب*
*❄️⃝🧚‍♀️⤺┇.استطلاع*
*❄️⃝🧚‍♀️⤺┇.تفعيل*
*❄️⃝🧚‍♀️⤺┇.تعطيل*
*❄️⃝🧚‍♀️⤺┇.تغيرالاسم*
*❄️⃝🧚‍♀️⤺┇.تغيرالوصف*
*❄️⃝🧚‍♀️⤺┇.تغيرالصوره*
*❄️⃝🧚‍♀️⤺┇.انذار*
*❄️⃝🧚‍♀️⤺┇.حذف-انذار*
*❄️⃝🧚‍♀️⤺┇.الانذارات*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    ) 



    //---------------------------------------------------------------------------

cmd({

            pattern: "4.1",           
            alias :['හෙරකු','herokubin','bin'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "💌",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*❆│· • • ━ ⊰❄️⊱ ━ • • ·│❆*
*˼‏📥˹قـسم التـحمـيل┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*❄️⃝🧚‍♀️⤺┇.شغل*
*❄️⃝🧚‍♀️⤺┇.فيديو*
*❄️⃝🧚‍♀️⤺┇.صوتي*
*❄️⃝🧚‍♀️⤺┇.فيد*
*❄️⃝🧚‍♀️⤺┇.تطبيق*
*❄️⃝🧚‍♀️⤺┇.مود*
*❄️⃝🧚‍♀️⤺┇.ملف*
*❄️⃝🧚‍♀️⤺┇.بينت*
*❄️⃝🧚‍♀️⤺┇.جوجل*
*❄️⃝🧚‍♀️⤺┇.بحث*
*❄️⃝🧚‍♀️⤺┇.صوره*
*❄️⃝🧚‍♀️⤺┇.ويلبر*
*❄️⃝🧚‍♀️⤺┇.تليجرام*
*❄️⃝🧚‍♀️⤺┇.ميديافاير*
*❄️⃝🧚‍♀️⤺┇.طقم*
*❄️⃝🧚‍♀️⤺┇.اولاد*
*❄️⃝🧚‍♀️⤺┇.خلفيه*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )    


    //---------------------------------------------------------------------------

cmd({

            pattern: "5.1",           
            alias :['හෙරකු','herokubin','bin'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "💌",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*❆│· • • ━ ⊰❄️⊱ ━ • • ·│❆*
*˼‏🎮˹ قـسم الألـعـاب و الترفيه┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*❄️⃝🧚‍♀️⤺┇.اكس*
*❄️⃝🧚‍♀️⤺┇.شخص*
*❄️⃝🧚‍♀️⤺┇.شبيهي*
*❄️⃝🧚‍♀️⤺┇.نرد*
*❄️⃝🧚‍♀️⤺┇.هل*
*❄️⃝🧚‍♀️⤺┇.سؤال*
*❄️⃝🧚‍♀️⤺┇.ه*
*❄️⃝🧚‍♀️⤺┇.كت*
*❄️⃝🧚‍♀️⤺┇.احزر*
*❄️⃝🧚‍♀️⤺┇.عكس*
*❄️⃝🧚‍♀️⤺┇.رابطي*
*❄️⃝🧚‍♀️⤺┇.رابطه*
*❄️⃝🧚‍♀️⤺┇.علم*
*❄️⃝🧚‍♀️⤺┇.تهكير*
*❄️⃝🧚‍♀️⤺┇.عض*
*❄️⃝🧚‍♀️⤺┇.اضرب*
*❄️⃝🧚‍♀️⤺┇.قبل*
*❄️⃝🧚‍♀️⤺┇.اقتل*
*❄️⃝🧚‍♀️⤺┇.ارقص*
*❄️⃝🧚‍♀️⤺┇.حب*
*❄️⃝🧚‍♀️⤺┇.كف*
*❄️⃝🧚‍♀️⤺┇.كسر*
*❄️⃝🧚‍♀️⤺┇.تنمر*
*❄️⃝🧚‍♀️⤺┇.ضم*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )   


    //---------------------------------------------------------------------------

cmd({

            pattern: "6.1",           
            alias :['හෙරකු','herokubin','bin'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "💌",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*❆│· • • ━ ⊰❄️⊱ ━ • • ·│❆*
*˼‏♻️˹ قـسم الـتـحـويـل┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*❄️⃝🧚‍♀️⤺┇.ملصق*
*❄️⃝🧚‍♀️⤺┇.سرقه*
*❄️⃝🧚‍♀️⤺┇.دمج*
*❄️⃝🧚‍♀️⤺┇.لصوت*
*❄️⃝🧚‍♀️⤺┇.لصوره*
*❄️⃝🧚‍♀️⤺┇.اكتب*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )        


    //---------------------------------------------------------------------------

cmd({

            pattern: "7.1",           
            alias :['හෙරකු','herokubin','bin'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "💌",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*❆│· • • ━ ⊰❄️⊱ ━ • • ·│❆*
*˼‏🧚‍♂️˹ قـسـم الانـمـي┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*❄️⃝🧚‍♀️⤺┇.وايفو*
*❄️⃝🧚‍♀️⤺┇.نيكو*
*❄️⃝🧚‍♀️⤺┇.لولي*
*❄️⃝🧚‍♀️⤺┇.ناروتو*
*❄️⃝🧚‍♀️⤺┇.انمي*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )  
                                           
                                           
                                                //---------------------------------------------------------------------------

cmd({

            pattern: "8.1",           
            alias :['හෙරකු','herokubin','bin'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "💌",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*❆│· • • ━ ⊰❄️⊱ ━ • • ·│❆*
*˼‏🏛️˹ قـسـم البنـك┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*❄️⃝🧚‍♀️⤺┇.البنك*
*❄️⃝🧚‍♀️⤺┇.محفظتي*
*❄️⃝🧚‍♀️⤺┇.اموالي*
*❄️⃝🧚‍♀️⤺┇.سحب*
*❄️⃝🧚‍♀️⤺┇.ايداع*
*❄️⃝🧚‍♀️⤺┇.تحويل*
*❄️⃝🧚‍♀️⤺┇.اعطي*
*❄️⃝🧚‍♀️⤺┇.تصفير*
*❄️⃝🧚‍♀️⤺┇.راتبي*
*❄️⃝🧚‍♀️⤺┇.التوب*
*❄️⃝🧚‍♀️⤺┇.هجوم*
*❄️⃝🧚‍♀️⤺┇.رهان*
*❄️⃝🧚‍♀️⤺┇.حظ*
*❄️⃝🧚‍♀️⤺┇.ألتوب*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )    
                                                //---------------------------------------------------------------------------

cmd({

            pattern: "9.1",           
            alias :['හෙරකු','herokubin','bin'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "💌",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*❄️⃝🧚‍♀️━━ •┇✦الأوامـر✦┇• ━━❄️⃝🧚‍♀️*

*❁ اللهم صّلِ وسَلّمْ عَلۓِ نَبِيْنَامُحَمد ﷺ ❁*

*❆│· • • ━ ⊰❄️⊱ ━ • • ·│❆*
*˼‏👥˹ قـسـم الاعـضـاء┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*❄️⃝🧚‍♀️⤺┇.ايدي*
*❄️⃝🧚‍♀️⤺┇.رانك*
*❄️⃝🧚‍♀️⤺┇.المتصدرين*
*❄️⃝🧚‍♀️⤺┇.كشف*
*❄️⃝🧚‍♀️⤺┇.صورته*
*❄️⃝🧚‍♀️⤺┇.كونكت*
*❄️⃝🧚‍♀️⤺┇.طلب*
*❄️⃝🧚‍♀️⤺┇.مساعده*
*❄️⃝🧚‍♀️⤺┇.تشفير*
*❄️⃝🧚‍♀️⤺┇.حل*
*❄️⃝🧚‍♀️⤺┇.ترجم*
*❄️⃝🧚‍♀️⤺┇.اكشف*
*❄️⃝🧚‍♀️⤺┇.تخمين*
*❄️⃝🧚‍♀️⤺┇.زخرفه*
*❄️⃝🧚‍♀️⤺┇.اختصار*
*❄️⃝🧚‍♀️⤺┇.السا*
*❆│· • • ━ ⊰❄️⊱ ━ • • ·│❆*
*˼‏🧑🏻‍💻˹ قـسـم الـمـطـور┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*❄️⃝🧚‍♀️⤺┇.انضم*
*❄️⃝🧚‍♀️⤺┇.بان*
*❄️⃝🧚‍♀️⤺┇.اذاعه*
*❄️⃝🧚‍♀️⤺┇.البوت*
*❄️⃝🧚‍♀️⤺┇.المده*
*❄️⃝🧚‍♀️⤺┇.بينج*
*❄️⃝🧚‍♀️⤺┇.فيروس*
*❄️⃝🧚‍♀️⤺┇.اخرج*
*❄️⃝🧚‍♀️⤺┇.فك-البان*
*❄️⃝🧚‍♀️⤺┇.الجروبات*
*❄️⃝🧚‍♀️⤺┇.البوت فتح*
*❄️⃝🧚‍♀️⤺┇.البوت قفل*
*❄️⃝🧚‍♀️⤺┇.المحظورين*
*❄️⃝🧚‍♀️⤺┇.ملاحظاتي*
*❄️⃝🧚‍♀️⤺┇.ملاحظه*
*❄️⃝🧚‍♀️⤺┇.حذف-ملاحظه*
*❄️⃝🧚‍♀️⤺┇.حذف-ملاحظاتي*
*❆│· • • ━ ⊰❄️⊱ ━ • • ·│❆*
*˼‏🏰˹ قـسم الـجـروب┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*❄️⃝🧚‍♀️⤺┇.منشن*
*❄️⃝🧚‍♀️⤺┇.مخفي*
*❄️⃝🧚‍♀️⤺┇.الرابط*
*❄️⃝🧚‍♀️⤺┇.اعاده*
*❄️⃝🧚‍♀️⤺┇.ترقيه*
*❄️⃝🧚‍♀️⤺┇.تخفيض*
*❄️⃝🧚‍♀️⤺┇.اضافه*
*❄️⃝🧚‍♀️⤺┇.طرد*
*❄️⃝🧚‍♀️⤺┇.غادر*
*❄️⃝🧚‍♀️⤺┇.حذف*
*❄️⃝🧚‍♀️⤺┇.تدمير*
*❄️⃝🧚‍♀️⤺┇.ارقام*
*❄️⃝🧚‍♀️⤺┇.الترحيب*
*❄️⃝🧚‍♀️⤺┇.المغادره*
*❄️⃝🧚‍♀️⤺┇.جروب*
*❄️⃝🧚‍♀️⤺┇.استطلاع*
*❄️⃝🧚‍♀️⤺┇.تفعيل*
*❄️⃝🧚‍♀️⤺┇.تعطيل*
*❄️⃝🧚‍♀️⤺┇.تغيرالاسم*
*❄️⃝🧚‍♀️⤺┇.تغيرالوصف*
*❄️⃝🧚‍♀️⤺┇.تغيرالصوره*
*❄️⃝🧚‍♀️⤺┇.انذار*
*❄️⃝🧚‍♀️⤺┇.حذف-انذار*
*❄️⃝🧚‍♀️⤺┇.الانذارات*
*❆│· • • ━ ⊰❄️⊱ ━ • • ·│❆*
*˼‏📥˹قـسم التـحمـيل┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*❄️⃝🧚‍♀️⤺┇.شغل*
*❄️⃝🧚‍♀️⤺┇.فيديو*
*❄️⃝🧚‍♀️⤺┇.صوتي*
*❄️⃝🧚‍♀️⤺┇.فيد*
*❄️⃝🧚‍♀️⤺┇.تطبيق*
*❄️⃝🧚‍♀️⤺┇.مود*
*❄️⃝🧚‍♀️⤺┇.ملف*
*❄️⃝🧚‍♀️⤺┇.بينت*
*❄️⃝🧚‍♀️⤺┇.جوجل*
*❄️⃝🧚‍♀️⤺┇.بحث*
*❄️⃝🧚‍♀️⤺┇.صوره*
*❄️⃝🧚‍♀️⤺┇.ويلبر*
*❄️⃝🧚‍♀️⤺┇.تليجرام*
*❄️⃝🧚‍♀️⤺┇.ميديافاير*
*❄️⃝🧚‍♀️⤺┇.طقم*
*❄️⃝🧚‍♀️⤺┇.اولاد*
*❄️⃝🧚‍♀️⤺┇.خلفيه*
*❆│· • • ━ ⊰❄️⊱ ━ • • ·│❆*
*˼‏🎮˹ قـسم الألـعـاب و الترفيه┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*❄️⃝🧚‍♀️⤺┇.اكس*
*❄️⃝🧚‍♀️⤺┇.شخص*
*❄️⃝🧚‍♀️⤺┇.شبيهي*
*❄️⃝🧚‍♀️⤺┇.نرد*
*❄️⃝🧚‍♀️⤺┇.هل*
*❄️⃝🧚‍♀️⤺┇.سؤال*
*❄️⃝🧚‍♀️⤺┇.ه*
*❄️⃝🧚‍♀️⤺┇.كت*
*❄️⃝🧚‍♀️⤺┇.احزر*
*❄️⃝🧚‍♀️⤺┇.عكس*
*❄️⃝🧚‍♀️⤺┇.رابطي*
*❄️⃝🧚‍♀️⤺┇.رابطه*
*❄️⃝🧚‍♀️⤺┇.علم*
*❄️⃝🧚‍♀️⤺┇.تهكير*
*❄️⃝🧚‍♀️⤺┇.عض*
*❄️⃝🧚‍♀️⤺┇.اضرب*
*❄️⃝🧚‍♀️⤺┇.قبل*
*❄️⃝🧚‍♀️⤺┇.اقتل*
*❄️⃝🧚‍♀️⤺┇.ارقص*
*❄️⃝🧚‍♀️⤺┇.حب*
*❄️⃝🧚‍♀️⤺┇.كف*
*❄️⃝🧚‍♀️⤺┇.كسر*
*❄️⃝🧚‍♀️⤺┇.تنمر*
*❄️⃝🧚‍♀️⤺┇.ضم*
*❆│· • • ━ ⊰❄️⊱ ━ • • ·│❆*
*˼‏♻️˹ قـسم الـتـحـويـل┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*❄️⃝🧚‍♀️⤺┇.ملصق*
*❄️⃝🧚‍♀️⤺┇.سرقه*
*❄️⃝🧚‍♀️⤺┇.دمج*
*❄️⃝🧚‍♀️⤺┇.لصوت*
*❄️⃝🧚‍♀️⤺┇.لصوره*
*❄️⃝🧚‍♀️⤺┇.اكتب*
*❆│· • • ━ ⊰❄️⊱ ━ • • ·│❆*
*˼‏🧚‍♂️˹ قـسـم الانـمـي┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*❄️⃝🧚‍♀️⤺┇.وايفو*
*❄️⃝🧚‍♀️⤺┇.نيكو*
*❄️⃝🧚‍♀️⤺┇.لولي*
*❄️⃝🧚‍♀️⤺┇.ناروتو*
*❄️⃝🧚‍♀️⤺┇.انمي*
*❆│· • • ━ ⊰❄️⊱ ━ • • ·│❆*
*˼‏🏛️˹ قـسـم البنـك┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*❄️⃝🧚‍♀️⤺┇.البنك*
*❄️⃝🧚‍♀️⤺┇.محفظتي*
*❄️⃝🧚‍♀️⤺┇.اموالي*
*❄️⃝🧚‍♀️⤺┇.سحب*
*❄️⃝🧚‍♀️⤺┇.ايداع*
*❄️⃝🧚‍♀️⤺┇.تحويل*
*❄️⃝🧚‍♀️⤺┇.اعطي*
*❄️⃝🧚‍♀️⤺┇.تصفير*
*❄️⃝🧚‍♀️⤺┇.راتبي*
*❄️⃝🧚‍♀️⤺┇.التوب*
*❄️⃝🧚‍♀️⤺┇.هجوم*
*❄️⃝🧚‍♀️⤺┇.رهان*
*❄️⃝🧚‍♀️⤺┇.حظ*
*❄️⃝🧚‍♀️⤺┇.ألتوب*
┛─━═║✠║◦¦❄️¦◦║✠║═━─┗



*~.¸¸ ❝ 𝐸𝐿𝑆𝐴 𝐵𝑂𝑇 ❝ ¸¸.~*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )                                                    
