/* property
    characterData, checked, img, key, name, nonanimu, options, opts, 
    category: ["anime"]rarity,
    series status, sub, tooltip, trap, when
*/
/* global
    dataSet,
    dataSetVersion
*/
/* eslint-disable no-global-assign */
dataSetVersion = "2019-01-23" // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {}

dataSet[dataSetVersion].options = [
    {
        name: "Filter",
        key: "category",
        tooltip: "Pick a category",
        checked: true,
        sub: [
            { name: "Anime", tooltip: "aoty", key: "anime" },
            { name: "Girl", tooltip: "girl", key: "girl", checked: false },
            { name: "Boy", tooltip: "boy", key: "boy", checked: false },
            { name: "Supp", tooltip: "supp", key: "supp", checked: false },
            { name: "OP", tooltip: "op", key: "op", checked: false },
            { name: "ED", tooltip: "ed", key: "ed", checked: false }
        ]
    }
]

dataSet[dataSetVersion].characterData = [
    {
        name: "Yuru Camp",
        img: "https://lh3.googleusercontent.com/t0vqCsFDPI1I1U6k-sJp1SvsShmi0fOOuqOtfpWBvIkOmT7gXAcbXF7I_IhFNvhsMGhLuMaOjA",
        opts: {
            category: ["anime"]
        }
    },
    {
        name: "Darling in the Frankxx",
        img: "https://lh5.googleusercontent.com/S9mmYJq4B9QeMUEupg3oO-fO7TC9EEZl1It8dhcvaazzYEJjH3COm_g8XRCjGCVhKUwM9Ph64A",
        opts: {
            category: ["anime"]
        }
    },
    {
        name: "Sora Yori mo Tooi Basho",
        img: "https://lh5.googleusercontent.com/-RVC1djRgrulD36QL7a42gTCEjm3ol_LZKrxvf6SsnIP1A4ltnQZI7Gc9dYDPmQJXOpKiEzDjA",
        opts: {
            category: ["anime"]
        }
    },
    {
        name: "Mitsuboshi Colors",
        img: "https://lh3.googleusercontent.com/1MVQDBy_BRxCoV5-Iq45N14AeHnW7dofRVK_aVb71Gjht19XEo3iy1CAXO6mLaeL5VTqBHYHCw",
        opts: {
            category: ["anime"]
        }
    },
    {
        name: "Karakai Jouzu no Takagi-san",
        img: "https://lh3.googleusercontent.com/-QOMIcZj85jOvI-T_-Ui1V3s1TZzUCRufrXdWh6w8e9yJTLJnFtY0hITFp939nYrlLlFL9GFxA",
        opts: {
            category: ["anime"]
        }
    },
    {
        name: "Hinamatsuri",
        img: "https://lh3.googleusercontent.com/TGPkCx7UDWp3p3dFs4tYWlO75Wws4HYqTlmCMcX1xiWXz6l_fHDJKEbZizk7yiTSYSd5KVKOog",
        opts: {
            category: ["anime"]
        }
    },
    {
        name: "Lost Song",
        img: "https://lh4.googleusercontent.com/yeKq3D7Y3CK6bYllXS8P5z4z5hTJU9a-liy9V0H05SeRkzvYJoaksM0C9HtxO9mSn_uq2aealw",
        opts: {
            category: ["anime"]
        }
    },
    {
        name: "Uma Musume: Pretty Derby",
        img: "https://lh4.googleusercontent.com/CYHbSZB6nFV__zY88uD7_oFlxK9Ag05BTYfjM_dpoVf2Nbzym01uM_souYDQ8vgawbl6S6N5fw",
        opts: {
            category: ["anime"]
        }
    },
    {
        name: "Last Period",
        img: "https://lh5.googleusercontent.com/h2CyANrFWljGZnsqCrrGbF4DzikFQrY6mfzZrQNwkObeDigZyYrIE7qXJCaqoCRiWeTv5SJH5g",
        opts: {
            category: ["anime"]
        }
    },
    {
        name: "SAO GGO Alternative",
        img: "https://lh6.googleusercontent.com/3eHzbya0kQDmlTFlFP3dVZiyTMjdtVZmThzij9dFYGSVX7cEe4-TAhnJCgJDCJVfBph5x5RN7w",
        opts: {
            category: ["anime"]
        }
    },
    {
        name: "Shoujo Kageki Revue Starlight",
        img: "https://lh6.googleusercontent.com/6Pyb_JXAmO55wA-OUphwIiFz8ZkIcnin3tetcur9Qo5St-dlQVe3M4GlnfbXK5zu2W2pwQhkfQ",
        opts: {
            category: ["anime"]
        }
    },
    {
        name: "Asobi Asobase",
        img: "https://lh5.googleusercontent.com/ZweW26lmR1EJzCXUW8vtnkWLlsf_6X9WLYW6AL7T5URaRKlw38EqDhfAJLw9T3xk0JZmEhGrDg",
        opts: {
            category: ["anime"]
        }
    },
    {
        name: "Grand Blue",
        img: "https://lh4.googleusercontent.com/sF_sXD3vW_Dqb7J5G2Ax5CESZAAYaUXkFmU38yvnYmjA-o__Z_30PTulO2nPVB3ep3E_x7gAbg",
        opts: {
            category: ["anime"]
        }
    },
    {
        name: "Hataraku Saibou",
        img: "https://lh6.googleusercontent.com/PXLWyOMO4IiHsvbqG7dbtAghzIMbpknvTdbLempkvLPc8BonVEUdg7WyJpa5HB84pNhlzOboNA",
        opts: {
            category: ["anime"]
        }
    },
    {
        name: "Planet With",
        img: "https://lh5.googleusercontent.com/fCU7MpGg9EM6hkcPpmyA2F9zWZE9AJIf9NIuoz3ke_zNAF_j-9O9i8aXbTNAGXtmhISGK41JIg",
        opts: {
            category: ["anime"]
        }
    },
    {
        name: "Yama no Susume Third Season",
        img: "https://lh3.googleusercontent.com/eneVNSjBllM5mcuEch7WX24lomuZ2iW0HdwbbzWKjsXBl5urbIVeONTFm3bIIf23_4kD-gmzDQ",
        opts: {
            category: ["anime"]
        }
    },
    {
        name: "Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai",
        img: "https://lh4.googleusercontent.com/xTOEoGtc-65dFiBDoxwg75dX4LNVn0kmfYlbn1qW-1182PWVmSttjxX9k5YEVjMxCn-iad10Lw",
        opts: {
            category: ["anime"]
        }
    },
    {
        name: "SSSS.Gridman",
        img: "https://lh6.googleusercontent.com/louluu5WG04Mo5LO4MHpPWcuj3PlVg7ydclD8gyarbDJ0xhfolZXrCze5enKErHqfpH1LyyW7w",
        opts: {
            category: ["anime"]
        }
    },
    {
        name: "Tensei shitara Slime Datta Ken",
        img: "https://lh5.googleusercontent.com/-RfwZDS5cAUhfbK5kQX-73A958pslpDdrx0hI8WkfPzOXZYCdNNjBIwORHuBL_SDMifkl2DTAA",
        opts: {
            category: ["anime"]
        }
    },
    {
        name: "Irozuku Sekai no Ashita kara",
        img: "https://lh4.googleusercontent.com/NPDE7mT6iv0NxHwdEBLAO1P7SEZmdYq4PMReno5ZyXeQYOvaI5iZMzKJ6gLsO2jG0SVMyeDR4A",
        opts: {
            category: ["anime"]
        }
    },
    {
        name: "Zombieland Saga",
        img: "https://lh3.googleusercontent.com/07VgsPn8ZZsXc_uzd1zXKElgUxuy_YFPW11Zs5phvaAX_spOaJeSpHC2JR3WPI90ry1RHFbNZA",
        opts: {
            category: ["anime"]
        }
    },
    {
        name: "Golden Kamuy",
        img: "https://lh3.googleusercontent.com/FrcVK-N4fa7WCVZ4pi_tAW_tc0Sm8SSET63t2VVJBE80kuQnOQEchGKqp2911E1NF8YcNXiu7Q",
        opts: {
            category: ["anime"]
        }
    },
    {
        name: "Shima Rin - Yuru Camp△",
        img: "https://lh5.googleusercontent.com/DVYxAhs-kcTHQJ2nvGlq6OiDcngsQegKqxaMqyI5S0H8FopO73pwe9CxBuxl48hF4wE9hsHeBQ",
        opts: {
            category: ["girl"]
        }
    },
    {
        name: "Kotoha - Mitsuboshi Colors",
        img: "https://lh3.googleusercontent.com/-hp2w2Elh3kANegPr02Tv3RvYWH7eaynp80lGdVKOpR2BfUr5xCh9CBEvKr5wr0V81jCKbfNpw",
        opts: {
            category: ["girl"]
        }
    },
    {
        name: "Tokura, Eiko - Slow Start",
        img: "https://lh3.googleusercontent.com/IVP5dA8lT-T6EyvADjb3s9SYBV6J0dndGvZylfL3M2af3WjlwI0vF7F0b0oXHNXK8vx_kctejA",
        opts: {
            category: ["girl"]
        }
    },
    {
        name: "Inuyama, Aoi - Yuru camp",
        img: "https://lh5.googleusercontent.com/dSA1xSfINjVPS70CPaLiKk9U2FWXTE17WtfyK9iCjxtPPeNGlzFm247TM8Yl44BfzUWIkRjdVQ",
        opts: {
            category: ["girl"]
        }
    },
    {
        name: "Takagi - Karakai Jouzu no Takagi-san",
        img: "https://lh6.googleusercontent.com/lyrzCgiRWQd0R_yXEUvH1rJ989ipGmoZ0vyTSSfl47nHbLiRW4kxw6jhQ717Ebegv4PAlH2nTA",
        opts: {
            category: ["girl"]
        }
    },
    {
        name: "Ikuno - darifura",
        img: "https://lh6.googleusercontent.com/aMdRxl98kl7f4j_261AwVcDOkIfawbgQU4TMnsj5njsu6lsSifmC2AQt-i71b7V2VmQzr3Zm1Q",
        opts: {
            category: ["girl"]
        }
    },
    {
        name: "Yashajin Ai -  Ryuuou no Oshigoto",
        img: "https://lh4.googleusercontent.com/EzNWz9Tyh1ZrnlD4JiMq5QehjxNt_VSOwbefyiLpl7X_-iUS0NOrKsVP-9VwoCbWciGQHcyOUQ",
        opts: {
            category: ["girl"]
        }
    },
    {
        name: "Kaoruko Moeta - Comiga",
        img: "https://lh4.googleusercontent.com/RQ1hNTc8owsrKm4IbugPa2tLgDRntW87LibMn2zkEoY05JWFFwMfVBXQMmClsIH1_oT0OAth4A",
        opts: {
            category: ["girl"]
        }
    },
    {
        name: "Miyu &quot;Fukaziroh&quot; Shinohara - SAO GGO Alternative",
        img: "https://lh3.googleusercontent.com/lZOKDg9O3sYgz5bNkZDFDbvyWmd9lXcgBpYCcXlL0jVEEKCSh3UT582swUXsUkNyCCsWlVXaqA",
        opts: {
            category: ["girl"]
        }
    },
    {
        name: "Teresa Wagner - Tada-kun",
        img: "https://lh4.googleusercontent.com/tVYO1SAIBJ9JLI6MVyT9Dc0jJ69NZX351PHOsn7fWqe3Ni4eiDNBS3Bq86qSJP4f9uuxqC4m5g",
        opts: {
            category: ["girl"]
        }
    },
    {
        name: "LLENN - SAO GGO Alternative",
        img: "https://lh4.googleusercontent.com/l3GK78DjxVhBZU-aO7UnWssri6DeKLWqwR0T_LvQvf0QlLC1pRy-zZ1__nIeP5P4yEKmE_L6ug",
        opts: {
            category: ["girl"]
        }
    },
    {
        name: "Saijou Claudine - Shoujo Kageki Revue Starlight",
        img: "https://lh3.googleusercontent.com/H4RZ4_fEh2kVmi-qViIEql60qV4Q_CShWUk0DZZ_XLQXXlX36kRUyudkREDaFpe6LDmjCCgCAA",
        opts: {
            category: ["girl"]
        }
    },
    {
        name: "Honda Hanako - Asobi Asobase",
        img: "https://lh5.googleusercontent.com/-wzifMspOAaDJzFdEQOY5RtEPwz4AcD9187mKBBfrJdg3C_g1WHz59tuSWyIild9IHfa6yJI_w",
        opts: {
            category: ["girl"]
        }
    },
    {
        name: "Olivia-Asobi Asobase",
        img: "https://lh5.googleusercontent.com/htKFckSV6lSsq5T835jIs0u339MtZ24jeJJrgctluysNHHtk_Pc-0nyncEomNg0Ndv7fG4fL9w",
        opts: {
            category: ["girl"]
        }
    },
    {
        name: "Hanesaki Ayano - Hanebado",
        img: "https://lh3.googleusercontent.com/KGCGWXL-cKhUp4lvlvD1I_cy5J-eD14ET4eUk_dyp7sDITs-ZXV8115U8ZKc78ppIXCyi2FFrA",
        opts: {
            category: ["girl"]
        }
    },
    {
        name: "Satsuki Usui - Shichisei no Subaru",
        img: "https://lh6.googleusercontent.com/HkMMFKSUGyywKGWLnXb_w3B9XezfM0_eRMqwb4jLtjuuE6vSDyUEO7MLQEbpTibI9hl3RUgqwg",
        opts: {
            category: ["girl"]
        }
    },
    {
        name: "Yamada Tae - Zombieland Saga",
        img: "https://lh4.googleusercontent.com/tS28AmWMo8CzCqss55HTH9YvIHmXx97W3IelTM-UGV_w5USLudY8nwJC9xo1HqufEA4_N0wXww",
        opts: {
            category: ["girl"]
        }
    },
    {
        name: "Komai Hasuki - Kishuku Gakkou no Juliet",
        img: "https://lh3.googleusercontent.com/52lSJr7xCHqFzSalrLM-_95A8ernQarIOQuJQQ28LF2DvRY1CWo6Jt7_Ve0erOMPVdNGjwk-Bg",
        opts: {
            category: ["girl"]
        }
    },
    {
        name: "Takarada Rikka - SSSS.Gridman",
        img: "https://lh4.googleusercontent.com/DJtnNm5grL20xmBdJ8z6q1X7R3DRmovGkGw5qr4H28UZtDHwICthr0KKmrLz2Ki2_6jPoAYovg",
        opts: {
            category: ["girl"]
        }
    },
    {
        name: "Sakurajima Mai - Seishun Buta Yarou",
        img: "https://lh5.googleusercontent.com/Q22d7oUmpCPYA3FWHyjgfp0QUALXnuPR-DbwYloTP5gPy1fmRyloRRN-0-ZVXqLcCugzAgfsgg",
        opts: {
            category: ["girl"]
        }
    },
    {
        name: "Futaba Rio - Seishun Buta Yarou",
        img: "https://lh3.googleusercontent.com/3dOV9RS2pHqUBZb_wViIoCMThmmYB51x8etU6FfSZoxVxhuuobZ3UwAM3u9MHvBW4SM8d4oOAQ",
        opts: {
            category: ["girl"]
        }
    },
    {
        name: "Shinjou Akane - SSSS.Gridman",
        img: "https://lh4.googleusercontent.com/GCbPOL3sKcBfGL0G2njhivW2Xx5X3h7Kbyb2DQrcR-6QpBZKaEpQhFb-VF3vZxhQYhm7ZlQSPw",
        opts: {
            category: ["girl"]
        }
    },
    {
        name: "Asirpa - Golden Kamuy",
        img: "https://lh6.googleusercontent.com/sRgzJuG0gGLzOgbbJXf2TvT5bl3YGGYT6qQvYa8T9vUXE7aDV9WcFh3cGhy25bNQWjd0U2dJTQ",
        opts: {
            category: ["girl"]
        }
    },
    {
        name: "Perusia Juliet- Kishuku Gakkou no Juliet",
        img: "https://lh3.googleusercontent.com/qPOjpMBwbwM8_dqJCdtFAnUWQqVX6HGv-oYy9FCzOpd3nmJ5VkODITXGQ3zrvj1q398bq6J8TQ",
        opts: {
            category: ["girl"]
        }
    },
    {
        name: "Tsukishiro Hitomi - Irozuku Sekai no Ashita Kara",
        img: "https://lh3.googleusercontent.com/LgG1_x1Uk9AZEJWCybd685NuWTRw5YfSm3rqOyQwSrrmlOk3b-SzvlU0wc-jgYzP1nCKxgSTfw",
        opts: {
            category: ["girl"]
        }
    },
    {
        name:"Goro - Darling in the Franxx",
        img:"https://lh4.googleusercontent.com/LxJEL2_m7BRt4F4LngsnMjf62JXeL_OqrI2FgaAZXuWU-2XtQfuIGWhy61g2r-TpaDh0Wc6mBA",
        opts: {
            category: ["boy"]
        }
    },
    {
        name:"Nitta Yoshifumi-Hinamatsuri",
        img:"https://lh3.googleusercontent.com/Zm8ZJAoKeFgO-0CDkcf4F1jg4ielgf90EshJ54bOF89QSwgKA-maQhMTIityuzno0KBcv0zGCQ",
        opts: {
            category: ["boy"]
        }
    },
    {
        name:"Sanzenkai Setsuna - Island",
        img:"https://lh3.googleusercontent.com/j7KgnbaxOeISet5ZSKY7V2jEJAKntU1I78sWV9BdyeKdpiziAOCoKvspXaF89TlHDj6u9iJfxQ",
        opts: {
            category: ["boy"]
        }
    },
    {
        name:"Sensei-Planet With",
        img:"https://lh6.googleusercontent.com/5_rd-PDEr7VlgXjx2KWYKlnZRbjlXYGwBN3F4MkATaWtmAwNFo9Y0HDm0LkXSLVM0f644exV5g",
        opts: {
            category: ["boy"]
        }
    },
    {
        name:"Azusagawa Sakuta-Seishun Buta Yarou",
        img:"https://lh3.googleusercontent.com/mL9uq14aWDinJ9ix_TA_8SeVdpWPJHafKGq36GK50Y7YjRjh14JCp_bSvTlIBbtQfit_bqqU_w",
        opts: {
            category: ["boy"]
        }
    },
    {
        name:"Tatsumi Koutarou-Zombieland Saga",
        img:"https://lh3.googleusercontent.com/B7VUJ5H_Mhe5PULhleLlZ4dJa1njIGBAOGk-5k9QQlUt9FkY3WGYOuCdtQnqbWg6esES-E16Rg",
        opts: {
            category: ["boy"]
        }
    },
    {
        name:"Tempest Rimuru-Tensei shitara Slime Datta Ken",
        img:"https://lh4.googleusercontent.com/Sryw7q40fENmR9aFAhVQpE4kjVKAP-ekB8oauUcdY8TIfvbS5Nd8Vrx3w3P0LmcVaEHuzzYaHA",
        opts: {
            category: ["boy"]
        }
    },
    {
        name:"Goblin Slayer-Goblin Slayer",
        img:"https://lh6.googleusercontent.com/RsKC-0qY9_LxCFuvwnPbtw7scIn9EpPB7PsytPQr6ZjYRvaFzAVzGAFKUNfcKAf7blLS-KdBqA",
        opts: {
            category: ["boy"]
        }
    },
    {
        name:"Kagamihara, Sakura  - Yuru Camp△",
        img:"https://lh6.googleusercontent.com/f9t1JkQJbN4cba9xGbvASe8Ky2xmvM7uq6U_wAorpKhxzHDlvMOdenzWFNa6Q0u9J5XjDya2cw",
        opts: {
            category: ["supp"]
        }
    },
    {
        name:"Gold Ship-Uma Musume",
        img:"https://lh3.googleusercontent.com/yBZ8TrDDSSvyl9I53G6o6qn44_ypzcfLU5cOiNophOTwNgjhkFwWSvci2zWstIPaW1XBJYvH_g",
        opts: {
            category: ["supp"]
        }
    },
    {
        name:"Grass Wonder-Uma Musume",
        img:"https://lh4.googleusercontent.com/2TA7txs0rlzBWRM0sFh_RPR79-khJzUZVTkrZ2bWd9W4mIYjCNatOjs9BHcE2ePzl7puIphQhQ",
        opts: {
            category: ["supp"]
        }
    },
    {
        name:"Futaba Rio-Seishun Buta Yarou",
        img:"https://lh4.googleusercontent.com/rnKd8jxEo_4b_sdWJs5gH-PPQTdQ7biOr_q6Ux1QePz7Mz_zW6rKxXbs6qKpH76VDW_k5WxyWg",
        opts: {
            category: ["supp"]
        }
    },
    {
        name:"Makinohara Shouko-Seishun Buta Yarou",
        img:"https://lh4.googleusercontent.com/tXmNpT4kWX_WJaF-SJNPAvrSN49ZxyPx05xcf4uMLJsIIzH1LC_Of-1SiMVebcKT7X4oRcTr7A",
        opts: {
            category: ["supp"]
        }
    },
    {
        name:"Gobuta-Tensei shitara Slime Datta Ken",
        img:"https://lh4.googleusercontent.com/rBOaOgTTw6QoGjrwwGqqAwsM0L2IKYz7096Uu95Iqg7qBRgQJOmuxgGugz2HdLJzphGQP8ykUA",
        opts: {
            category: ["supp"]
        }
    },
    {
        name:"High Elf Archer-Goblin Slayer",
        img:"https://lh6.googleusercontent.com/cTnIQNTzuG1ARJf7furnTihLPrccSlCLP5Ocj9aelrNKvAmSQmb1NN_rrx9yblNnugcTa7_UzQ",
        opts: {
            category: ["supp"]
        }
    },
    {
        name:"Flashback - MIYAVI vs. KenKen - Kokkoku",
        img:"https://i.ytimg.com/vi/fhBA6ynorvc/hqdefault.jpg",
        opts: {
            category: ["op"]
        }
    },
    {
        name:"Colors Power ni Omakasero! - Colors☆Slash - Mitsuboshi Color",
        img:"https://i.ytimg.com/vi/c0MJNQdD1Xk/hqdefault.jpg",
        opts: {
            category: ["op"]
        }
    },
    {
        name:"Clear - Maaya Sakamoto - Cardcaptor Sakura",
        img:"https://i.ytimg.com/vi/sbwT8yJjtUQ/hqdefault.jpg",
        opts: {
            category: ["op"]
        }
    },
    {
        name:"Otomodachi film-Masayoshi Ooishi -tada kun wa koi shinai",
        img:"https://i.ytimg.com/vi/x-KKItElCIU/hqdefault.jpg",
        opts: {
            category: ["op"]
        }
    },
    {
        name:"Ryusei-Aoi Eir -SAO GGO Alternative",
        img:"https://i.ytimg.com/vi/-P4lKMP-dPw/hqdefault.jpg",
        opts: {
            category: ["op"]
        }
    },
    {
        name:"Distance -Rie Murakawa -hinamatsuri",
        img:"https://i.ytimg.com/vi/yc0Dh_zIJ4k/hqdefault.jpg",
        opts: {
            category: ["op"]
        }
    },
    {
        name:"Make Debut- Team Spyca-Uma Musume: Derby Party",
        img:"https://i.ytimg.com/vi/nuuq0Ul_-_c/hqdefault.jpg",
        opts: {
            category: ["op"]
        }
    },
    {
        name:"Grand Blue - Shounan no Kaze - Grand Blue",
        img:"https://i.ytimg.com/vi/NKt7G9ZBGyQ/hqdefault.jpg",
        opts: {
            category: ["op"]
        }
    },
    {
        name:"Hoshi no Dialogue - Starlight Kukugumi - Shoujo Kageki Revue Starlight",
        img:"https://i.ytimg.com/vi/O_x7ia2OE0M/hqdefault.jpg",
        opts: {
            category: ["op"]
        }
    },
    {
        name:"Suripisu - Asoken - Asobi Asobase",
        img:"https://i.ytimg.com/vi/dlY050Vv6iE/hqdefault.jpg",
        opts: {
            category: ["op"]
        }
    },
    {
        name:"Make my Story - Lenny Code Fiction - Boku no Hero Academia S3",
        img:"https://i.ytimg.com/vi/XhIA35OAIw4/hqdefault.jpg",
        opts: {
            category: ["op"]
        }
    },
    {
        name:"Kimi no Sei-the peggies-Seishun Buta Yarou",
        img:"https://i.ytimg.com/vi/z1PWA11Ec3E/hqdefault.jpg",
        opts: {
            category: ["op"]
        }
    },
    {
        name:"UNION-OxT-SSSS.Gridman",
        img:"https://i.ytimg.com/vi/pAyrdmrjrUI/hqdefault.jpg",
        opts: {
            category: ["op"]
        }
    },
    {
        name:"17sai-Haruka to Miyuki-Irozuku Sekai no Ashita kara",
        img:"https://i.ytimg.com/vi/RnRYvCZy4vs/hqdefault.jpg",
        opts: {
            category: ["op"]
        }
    },
    {
        name:"Motetaino-Himote House Juunin Ichidou-Himote House",
        img:"https://i.ytimg.com/vi/LqjMXfnOiJ4/hqdefault.jpg",
        opts: {
            category: ["op"]
        }
    },
    {
        name:"Kimi ni Furete-Riko Azuna-Yagate Kimi ni Naru",
        img:"https://i.ytimg.com/vi/0hgwUqC5_mM/hqdefault.jpg",
        opts: {
            category: ["op"]
        }
    },
    {
        name:"Fuyu Biyori - Eri Sasaki - Yuru Camp",
        img:"https://i.ytimg.com/vi/laPwnkO0Wjk/hqdefault.jpg",
        opts: {
            category: ["ed"]
        }
    },
    {
        name:"Suki no Skill - Wake Up, Girls! - Death March kara Hajimaru Isekai Kyousoukyoku",
        img:"https://i.ytimg.com/vi/jo8dT-gKG2Y/hqdefault.jpg",
        opts: {
            category: ["ed"]
        }
    },
    {
        name:"Torikago - XX:me - Darling in the Franxx",
        img:"https://i.ytimg.com/vi/b18GVaTNMNA/hqdefault.jpg",
        opts: {
            category: ["ed"]
        }
    },
    {
        name:"Love Song-Manaka Iwami-Tada-kun wa Koi wo Shinai",
        img:"https://i.ytimg.com/vi/764HDdCVEx8/hqdefault.jpg",
        opts: {
            category: ["ed"]
        }
    },
    {
        name:"Namida wa Misenai-Comic Girls-Comic Girls",
        img:"https://i.ytimg.com/vi/hO3lSV2bOlI/hqdefault.jpg",
        opts: {
            category: ["ed"]
        }
    },
    {
        name:"Fly me to the Star - Starlight Kukugumi - Shoujo Kageki Revue Starlight",
        img:"https://i.ytimg.com/vi/MQVQQyU-QSU/hqdefault.jpg",
        opts: {
            category: ["ed"]
        }
    },
    {
        name:"High Stepper - Yuiko Oihara - Hanebado",
        img:"https://i.ytimg.com/vi/2K6YMCQsFD0/hqdefault.jpg",
        opts: {
            category: ["ed"]
        }
    },
    {
        name:"Eternal Star - Asaka - Island",
        img:"https://i.ytimg.com/vi/BCLeTNyJeAc/hqdefault.jpg",
        opts: {
            category: ["ed"]
        }
    },
    {
        name:"CheerS - ClariS - Hataraku Saibou",
        img:"https://i.ytimg.com/vi/Zy6FMS9jEt8/hqdefault.jpg",
        opts: {
            category: ["ed"]
        }
    },
    {
        name:"Upside Down - SHE'S - Angolmois",
        img:"https://i.ytimg.com/vi/lZHVScHXx8E/hqdefault.jpg",
        opts: {
            category: ["ed"]
        }
    },
    {
        name:"Fukashigi no Carte-Cast-Seishun Buta Yarou",
        img:"https://i.ytimg.com/vi/AVHRBAYdsCw/hqdefault.jpg",
        opts: {
            category: ["ed"]
        }
    },
    {
        name:"Hikari e-Franchouchou-Zombieland Saga",
        img:"https://i.ytimg.com/vi/qgc_klPp3JE/hqdefault.jpg",
        opts: {
            category: ["ed"]
        }
    },
    {
        name:"youthful beautiful-Uchida Maaya-SSSS.Gridman",
        img:"https://i.ytimg.com/vi/_9QYvSfn0Yk/hqdefault.jpg",
        opts: {
            category: ["ed"]
        }
    },
    {
        name:"Another colony-TRUE-Tensei shitara Slime Datta Ken",
        img:"https://i.ytimg.com/vi/z8UGEwHJAPg/hqdefault.jpg",
        opts: {
            category: ["ed"]
        }
    }
    //
    // END
    //
]
