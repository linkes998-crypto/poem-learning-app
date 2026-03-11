// 古诗词数据（带拼音和每句动画配置）
const poems = [
    {
        id: 1,
        title: "静夜思",
        author: "李白",
        titlePinyin: "jìng yè sī",
        authorPinyin: "lǐ bái",
        lines: [
            { 
                text: "床前明月光", 
                pinyin: "chuáng qián míng yuè guāng",
                animation: {
                    background: 'linear-gradient(to bottom, #0c1445 0%, #1a237e 50%, #283593 100%)',
                    elements: `
                        <div class="moon-full">🌕</div>
                        <div class="moon-glow"></div>
                        <div class="star star-1">✨</div>
                        <div class="star star-2">✨</div>
                        <div class="star star-3">✨</div>
                        <div class="star star-4">✨</div>
                        <div class="star star-5">✨</div>
                        <div class="window-window">🪟</div>
                        <div class="light-beam"></div>
                        <div class="floor">🪵</div>
                    `
                }
            },
            { 
                text: "疑是地上霜", 
                pinyin: "yí shì dì shàng shuāng",
                animation: {
                    background: 'linear-gradient(to bottom, #0c1445 0%, #1a237e 50%, #37474f 100%)',
                    elements: `
                        <div class="moon-full">🌕</div>
                        <div class="moon-glow"></div>
                        <div class="frost frost-1">❄️</div>
                        <div class="frost frost-2">❄️</div>
                        <div class="frost frost-3">❄️</div>
                        <div class="frost frost-4">❄️</div>
                        <div class="frost frost-5">❄️</div>
                        <div class="floor-frost">⬜</div>
                        <div class="sparkle sparkle-1">💫</div>
                        <div class="sparkle sparkle-2">💫</div>
                        <div class="sparkle sparkle-3">💫</div>
                    `
                }
            },
            { 
                text: "举头望明月", 
                pinyin: "jǔ tóu wàng míng yuè",
                animation: {
                    background: 'linear-gradient(to bottom, #0d1b2a 0%, #1b263b 50%, #415a77 100%)',
                    elements: `
                        <div class="moon-full-large">🌕</div>
                        <div class="moon-rays">☀️</div>
                        <div class="person-looking">👤</div>
                        <div class="arrow-up">⬆️</div>
                        <div class="eye-look">👀</div>
                        <div class="thought-moon">🌕</div>
                        <div class="cloud-night cloud-1">☁️</div>
                        <div class="cloud-night cloud-2">☁️</div>
                    `
                }
            },
            { 
                text: "低头思故乡", 
                pinyin: "dī tóu sī gù xiāng",
                animation: {
                    background: 'linear-gradient(to bottom, #0d1b2a 0%, #1b263b 50%, #2c3e50 100%)',
                    elements: `
                        <div class="moon-full">🌕</div>
                        <div class="person-head-down">👤</div>
                        <div class="tear tear-1">💧</div>
                        <div class="tear tear-2">💧</div>
                        <div class="home-memory">🏠</div>
                        <div class="thought-cloud">💭</div>
                        <div class="heart-sad">💔</div>
                        <div class="arrow-down">⬇️</div>
                    `
                }
            }
        ],
        emoji: "🌙",
        animation: "night"
    },
    {
        id: 2,
        title: "春晓",
        author: "孟浩然",
        titlePinyin: "chūn xiǎo",
        authorPinyin: "mèng hào rán",
        lines: [
            { 
                text: "春眠不觉晓", 
                pinyin: "chūn mián bù jué xiǎo",
                animation: {
                    background: 'linear-gradient(to bottom, #ff9a9e 0%, #fecfef 50%, #ffecd2 100%)',
                    elements: `
                        <div class="sun-morning">🌅</div>
                        <div class="sun-rays-early">☀️</div>
                        <div class="bed-sleeping">🛏️</div>
                        <div class="person-sleep">😴</div>
                        <div class="zzz zzz-1">💤</div>
                        <div class="zzz zzz-2">💤</div>
                        <div class="zzz zzz-3">💤</div>
                        <div class="window-morning">🪟</div>
                        <div class="curtain">🪟</div>
                        <div class="bird-awake bird-1">🐦</div>
                    `
                }
            },
            { 
                text: "处处闻啼鸟", 
                pinyin: "chù chù wén tí niǎo",
                animation: {
                    background: 'linear-gradient(to bottom, #a8edea 0%, #fed6e3 100%)',
                    elements: `
                        <div class="sun-shining">☀️</div>
                        <div class="bird-flying bird-1">🐦</div>
                        <div class="bird-flying bird-2">🐦</div>
                        <div class="bird-flying bird-3">🐦</div>
                        <div class="bird-flying bird-4">🐦</div>
                        <div class="bird-flying bird-5">🐦</div>
                        <div class="tree-birds">🌳</div>
                        <div class="note-music music-1">🎵</div>
                        <div class="note-music music-2">🎵</div>
                        <div class="note-music music-3">🎵</div>
                        <div class="cloud-sky cloud-1">☁️</div>
                        <div class="cloud-sky cloud-2">☁️</div>
                    `
                }
            },
            { 
                text: "夜来风雨声", 
                pinyin: "yè lái fēng yǔ shēng",
                animation: {
                    background: 'linear-gradient(to bottom, #2c3e50 0%, #34495e 50%, #7f8c8d 100%)',
                    elements: `
                        <div class="moon-rainy">🌙</div>
                        <div class="cloud-rain cloud-1">🌧️</div>
                        <div class="cloud-rain cloud-2">🌧️</div>
                        <div class="rain-drop drop-1">💧</div>
                        <div class="rain-drop drop-2">💧</div>
                        <div class="rain-drop drop-3">💧</div>
                        <div class="rain-drop drop-4">💧</div>
                        <div class="rain-drop drop-5">💧</div>
                        <div class="tree-wind">🌳</div>
                        <div class="wind-line wind-1">〰️</div>
                        <div class="wind-line wind-2">〰️</div>
                        <div class="wind-line wind-3">〰️</div>
                        <div class="house-night">🏠</div>
                    `
                }
            },
            { 
                text: "花落知多少", 
                pinyin: "huā luò zhī duō shǎo",
                animation: {
                    background: 'linear-gradient(to bottom, #e8f5e9 0%, #c8e6c9 50%, #a5d6a7 100%)',
                    elements: `
                        <div class="sun-gentle">🌤️</div>
                        <div class="flower-falling flower-1">🌸</div>
                        <div class="flower-falling flower-2">🌺</div>
                        <div class="flower-falling flower-3">🌼</div>
                        <div class="flower-falling flower-4">🌷</div>
                        <div class="flower-falling flower-5">🌸</div>
                        <div class="petal petal-1">🌸</div>
                        <div class="petal petal-2">🌺</div>
                        <div class="petal petal-3">🌼</div>
                        <div class="grass-ground">🌿</div>
                        <div class="ground-flowers ground-1">🌻</div>
                        <div class="ground-flowers ground-2">🌹</div>
                        <div class="ground-flowers ground-3">🌷</div>
                    `
                }
            }
        ],
        emoji: "🌸",
        animation: "spring"
    },
    {
        id: 3,
        title: "咏鹅",
        author: "骆宾王",
        titlePinyin: "yǒng é",
        authorPinyin: "luò bīn wáng",
        lines: [
            { 
                text: "鹅鹅鹅", 
                pinyin: "é é é",
                animation: {
                    background: 'linear-gradient(to bottom, #87CEEB 0%, #4682B4 50%, #006994 100%)',
                    elements: `
                        <div class="goose-large goose-1">🦢</div>
                        <div class="goose-large goose-2">🦢</div>
                        <div class="goose-large goose-3">🦢</div>
                        <div class="water-lake">🌊</div>
                        <div class="water-wave wave-1">〰️</div>
                        <div class="water-wave wave-2">〰️</div>
                        <div class="water-wave wave-3">〰️</div>
                        <div class="reed-bank reed-1">🌾</div>
                        <div class="reed-bank reed-2">🌾</div>
                        <div class="sun-pond">☀️</div>
                        <div class="reflection">🪞</div>
                    `
                }
            },
            { 
                text: "曲项向天歌", 
                pinyin: "qū xiàng xiàng tiān gē",
                animation: {
                    background: 'linear-gradient(to bottom, #4FC3F7 0%, #29B6F6 50%, #03A9F4 100%)',
                    elements: `
                        <div class="goose-singing">🦢</div>
                        <div class="music-note note-1">🎵</div>
                        <div class="music-note note-2">🎵</div>
                        <div class="music-note note-3">🎵</div>
                        <div class="note-big">🎶</div>
                        <div class="arrow-sing">⬆️</div>
                        <div class="mouth-open">👄</div>
                        <div class="sky-azure">🌤️</div>
                        <div class="cloud-white cloud-1">☁️</div>
                        <div class="cloud-white cloud-2">☁️</div>
                        <div class="water-blue">🌊</div>
                    `
                }
            },
            { 
                text: "白毛浮绿水", 
                pinyin: "bái máo fú lǜ shuǐ",
                animation: {
                    background: 'linear-gradient(to bottom, #5C6BC0 0%, #42A5F5 50%, #26C6DA 100%)',
                    elements: `
                        <div class="goose-floating">🦢</div>
                        <div class="feather feather-1">⬜</div>
                        <div class="feather feather-2">⬜</div>
                        <div class="feather feather-3">⬜</div>
                        <div class="water-green">🟢</div>
                        <div class="water-ripple ripple-1">⭕</div>
                        <div class="water-ripple ripple-2">⭕</div>
                        <div class="water-ripple ripple-3">⭕</div>
                        <div class="leaf-water leaf-1">🍃</div>
                        <div class="leaf-water leaf-2">🍃</div>
                        <div class="lotus lotus-1">🪷</div>
                        <div class="lotus lotus-2">🪷</div>
                    `
                }
            },
            { 
                text: "红掌拨清波", 
                pinyin: "hóng zhǎng bō qīng bō",
                animation: {
                    background: 'linear-gradient(to bottom, #66BB6A 0%, #4CAF50 50%, #43A047 100%)',
                    elements: `
                        <div class="goose-swimming">🦢</div>
                        <div class="foot-red foot-1">🔴</div>
                        <div class="foot-red foot-2">🔴</div>
                        <div class="water-move wave-1">〰️</div>
                        <div class="water-move wave-2">〰️</div>
                        <div class="water-move wave-3">〰️</div>
                        <div class="splash splash-1">💦</div>
                        <div class="splash splash-2">💦</div>
                        <div class="bubble bubble-1">⚪</div>
                        <div class="bubble bubble-2">⚪</div>
                        <div class="bubble bubble-3">⚪</div>
                    `
                }
            }
        ],
        emoji: "🦢",
        animation: "goose"
    },
    {
        id: 4,
        title: "登鹳雀楼",
        author: "王之涣",
        titlePinyin: "dēng guàn què lóu",
        authorPinyin: "wáng zhī huàn",
        lines: [
            { 
                text: "白日依山尽", 
                pinyin: "bái rì yī shān jìn",
                animation: {
                    background: 'linear-gradient(to bottom, #FF8A65 0%, #FF7043 50%, #FF5722 100%)',
                    elements: `
                        <div class="sun-setting-big">🌅</div>
                        <div class="sun-rays">☀️</div>
                        <div class="mountain-sunset mountain-1">🏔️</div>
                        <div class="mountain-sunset mountain-2">⛰️</div>
                        <div class="mountain-sunset mountain-3">🗻</div>
                        <div class="horizon-line">━━━</div>
                        <div class="sky-orange">🌄</div>
                        <div class="cloud-sunset cloud-1">☁️</div>
                        <div class="cloud-sunset cloud-2">☁️</div>
                    `
                }
            },
            { 
                text: "黄河入海流", 
                pinyin: "huáng hé rù hǎi liú",
                animation: {
                    background: 'linear-gradient(to bottom, #4A90D9 0%, #2980B9 50%, #1A5276 100%)',
                    elements: `
                        <div class="river-yellow">🟡</div>
                        <div class="river-flow river-1">🌊</div>
                        <div class="river-flow river-2">🌊</div>
                        <div class="river-flow river-3">🌊</div>
                        <div class="sea-water">🌊</div>
                        <div class="fish fish-1">🐟</div>
                        <div class="fish fish-2">🐟</div>
                        <div class="fish fish-3">🐟</div>
                        <div class="boat-river">⛵</div>
                        <div class="mountain-river mountain-1">🏔️</div>
                        <div class="mountain-river mountain-2">⛰️</div>
                    `
                }
            },
            { 
                text: "欲穷千里目", 
                pinyin: "yù qióng qiān lǐ mù",
                animation: {
                    background: 'linear-gradient(to bottom, #5C6BC0 0%, #7E57C2 50%, #9575CD 100%)',
                    elements: `
                        <div class="tower-tall">🏯</div>
                        <div class="person-on-tower">👤</div>
                        <div class="eye-looking">👀</div>
                        <div class="telescope">🔭</div>
                        <div class="mountain-far mountain-1">🏔️</div>
                        <div class="mountain-far mountain-2">⛰️</div>
                        <div class="mountain-far mountain-3">🗻</div>
                        <div class="arrow-see">👁️</div>
                        <div class="distance-line">━━━━━━</div>
                        <div class="bird-high bird-1">🦅</div>
                        <div class="bird-high bird-2">🦅</div>
                    `
                }
            },
            { 
                text: "更上一层楼", 
                pinyin: "gèng shàng yī céng lóu",
                animation: {
                    background: 'linear-gradient(to bottom, #1A237E 0%, #283593 50%, #3949AB 100%)',
                    elements: `
                        <div class="tower-multi tower-1">🏯</div>
                        <div class="tower-multi tower-2">🏯</div>
                        <div class="tower-multi tower-3">🏯</div>
                        <div class="person-climbing">🧗</div>
                        <div class="arrow-up-up">⬆️</div>
                        <div class="stair-step">🪜</div>
                        <div class="stars-night star-1">⭐</div>
                        <div class="stars-night star-2">⭐</div>
                        <div class="stars-night star-3">⭐</div>
                        <div class="moon-tower">🌙</div>
                    `
                }
            }
        ],
        emoji: "🏔️",
        animation: "mountain"
    },
    {
        id: 5,
        title: "江雪",
        author: "柳宗元",
        titlePinyin: "jiāng xuě",
        authorPinyin: "liǔ zōng yuán",
        lines: [
            { 
                text: "千山鸟飞绝", 
                pinyin: "qiān shān niǎo fēi jué",
                animation: {
                    background: 'linear-gradient(to bottom, #B0C4DE 0%, #87CEEB 50%, #B0E0E6 100%)',
                    elements: `
                        <div class="mountain-snow mountain-1">🏔️</div>
                        <div class="mountain-snow mountain-2">⛰️</div>
                        <div class="mountain-snow mountain-3">🗻</div>
                        <div class="mountain-snow mountain-4">🏔️</div>
                        <div class="snowfall snow-1">❄️</div>
                        <div class="snowfall snow-2">❄️</div>
                        <div class="snowfall snow-3">❄️</div>
                        <div class="snowfall snow-4">❄️</div>
                        <div class="snowfall snow-5">❄️</div>
                        <div class="bird-gone bird-1">🕊️</div>
                        <div class="empty-sky">🌥️</div>
                    `
                }
            },
            { 
                text: "万径人踪灭", 
                pinyin: "wàn jìng rén zōng miè",
                animation: {
                    background: 'linear-gradient(to bottom, #CFD8DC 0%, #B0BEC5 50%, #90A4AE 100%)',
                    elements: `
                        <div class="path-snow path-1">━━━</div>
                        <div class="path-snow path-2">━━━</div>
                        <div class="path-snow path-3">━━━</div>
                        <div class="footprint footprint-1">👣</div>
                        <div class="footprint footprint-2">👣</div>
                        <div class="footprint footprint-3">👣</div>
                        <div class="tree-snow tree-1">🌲</div>
                        <div class="tree-snow tree-2">🌲</div>
                        <div class="tree-snow tree-3">🌲</div>
                        <div class="snow-ground snow-1">⬜</div>
                        <div class="snow-ground snow-2">⬜</div>
                        <div class="lonely-path">🚶</div>
                    `
                }
            },
            { 
                text: "孤舟蓑笠翁", 
                pinyin: "gū zhōu suō lì wēng",
                animation: {
                    background: 'linear-gradient(to bottom, #78909C 0%, #607D8B 50%, #546E7A 100%)',
                    elements: `
                        <div class="boat-lone">⛵</div>
                        <div class="fisherman-hat">👴</div>
                        <div class="hat-straw">🎩</div>
                        <div class="raincoat-raincoat">🧥</div>
                        <div class="fishing-rod">🎣</div>
                        <div class="water-calm wave-1">〰️</div>
                        <div class="water-calm wave-2">〰️</div>
                        <div class="mist-fog">🌫️</div>
                        <div class="reed-bank reed-1">🌾</div>
                        <div class="reed-bank reed-2">🌾</div>
                    `
                }
            },
            { 
                text: "独钓寒江雪", 
                pinyin: "dú diào hán jiāng xuě",
                animation: {
                    background: 'linear-gradient(to bottom, #546E7A 0%, #455A64 50%, #37474F 100%)',
                    elements: `
                        <div class="boat-fishing">⛵</div>
                        <div class="fisherman-sitting">👴</div>
                        <div class="fishing-line">🎣</div>
                        <div class="fish-biting">🐟</div>
                        <div class="snow-cold snow-1">❄️</div>
                        <div class="snow-cold snow-2">❄️</div>
                        <div class="snow-cold snow-3">❄️</div>
                        <div class="water-cold wave-1">〰️</div>
                        <div class="water-cold wave-2">〰️</div>
                        <div class="ice-float">🧊</div>
                        <div class="winter-tree tree-1">🌲</div>
                        <div class="winter-tree tree-2">🌲</div>
                    `
                }
            }
        ],
        emoji: "❄️",
        animation: "snow"
    },
    {
        id: 6,
        title: "悯农",
        author: "李绅",
        titlePinyin: "mǐn nóng",
        authorPinyin: "lǐ shēn",
        lines: [
            { 
                text: "锄禾日当午", 
                pinyin: "chú hé rì dāng wǔ",
                animation: {
                    background: 'linear-gradient(to bottom, #FFF176 0%, #FFEE58 50%, #FDD835 100%)',
                    elements: `
                        <div class="sun-hot">🌞</div>
                        <div class="sun-rays-hot">☀️</div>
                        <div class="farmer-work">👨‍🌾</div>
                        <div class="tool-hoe">🌱</div>
                        <div class="farmland farm-1">🌾</div>
                        <div class="farmland farm-2">🌾</div>
                        <div class="farmland farm-3">🌾</div>
                        <div class="sweat-drop sweat-1">💦</div>
                        <div class="sweat-drop sweat-2">💦</div>
                        <div class="sweat-drop sweat-3">💦</div>
                        <div class="ground-soil">🟫</div>
                        <div class="cloud-hot cloud-1">☁️</div>
                        <div class="cloud-hot cloud-2">☁️</div>
                    `
                }
            },
            { 
                text: "汗滴禾下土", 
                pinyin: "hàn dī hé xià tǔ",
                animation: {
                    background: 'linear-gradient(to bottom, #FFE082 0%, #FFCA28 50%, #FFB300 100%)',
                    elements: `
                        <div class="farmer-working">👨‍🌾</div>
                        <div class="sweat-big sweat-1">💧</div>
                        <div class="sweat-big sweat-2">💧</div>
                        <div class="sweat-big sweat-3">💧</div>
                        <div class="sweat-big sweat-4">💧</div>
                        <div class="sweat-big sweat-5">💧</div>
                        <div class="crop-growing">🌱</div>
                        <div class="soil-ground">🟤</div>
                        <div class="watering">💧</div>
                        <div class="plant-root">🌿</div>
                        <div class="dirt-mound">⛰️</div>
                    `
                }
            },
            { 
                text: "谁知盘中餐", 
                pinyin: "shuí zhī pán zhōng cān",
                animation: {
                    background: 'linear-gradient(to bottom, #FFCCBC 0%, #FFAB91 50%, #FF8A65 100%)',
                    elements: `
                        <div class="bowl-rice">🍚</div>
                        <div class="plate-food">🍽️</div>
                        <div class="rice-grain grain-1">🍚</div>
                        <div class="rice-grain grain-2">🍚</div>
                        <div class="rice-grain grain-3">🍚</div>
                        <div class="chopsticks">🥢</div>
                        <div class="table-dining">🪵</div>
                        <div class="question-mark">❓</div>
                        <div class="thought-food">💭</div>
                        <div class="hand-holding">🖐️</div>
                    `
                }
            },
            { 
                text: "粒粒皆辛苦", 
                pinyin: "lì lì jiē xīn kǔ",
                animation: {
                    background: 'linear-gradient(to bottom, #DCEDC8 0%, #C5E1A5 50%, #AED581 100%)',
                    elements: `
                        <div class="grain-field grain-1">🌾</div>
                        <div class="grain-field grain-2">🌾</div>
                        <div class="grain-field grain-3">🌾</div>
                        <div class="grain-field grain-4">🌾</div>
                        <div class="hard-work work-1">💪</div>
                        <div class="hard-work work-2">💪</div>
                        <div class="sun-setting-final">🌅</div>
                        <div class="farmer-tired">😓</div>
                        <div class="heart-grateful">❤️</div>
                        <div class="grain-basket">🧺</div>
                        <div class="harvest-time">🌾</div>
                    `
                }
            }
        ],
        emoji: "🌾",
        animation: "farm"
    }
];

// 游戏状态
let gameState = {
    currentIndex: 0,
    isPlaying: false,
    isRecording: false,
    totalScore: 0,
    recognition: null,
    currentPoemText: '',
    currentLineIndex: 0,
    isReadingLines: false
};

// DOM元素
const container = document.getElementById('container');
const startScreen = document.getElementById('startScreen');
const poemScreen = document.getElementById('poemScreen');
const finishScreen = document.getElementById('finishScreen');
const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const startReciteBtn = document.getElementById('startReciteBtn');
const stopReciteBtn = document.getElementById('stopReciteBtn');
const nextPoemBtn = document.getElementById('nextPoemBtn');

const animationScene = document.getElementById('animationScene');
const currentLine = document.getElementById('currentLine');
const linePinyin = document.getElementById('linePinyin');
const lineText = document.getElementById('lineText');
const poemTitle = document.getElementById('poemTitle');
const poemAuthor = document.getElementById('poemAuthor');
const poemContent = document.getElementById('poemContent');
const currentNum = document.getElementById('currentNum');
const totalNum = document.getElementById('totalNum');
const tips = document.getElementById('tips');
const recitePrompt = document.getElementById('recitePrompt');
const scoreResult = document.getElementById('scoreResult');
const scoreStars = document.getElementById('scoreStars');
const scoreText = document.getElementById('scoreText');
const scoreComment = document.getElementById('scoreComment');
const totalScore = document.getElementById('totalScore');

// 初始化语音识别
function initSpeechRecognition() {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        gameState.recognition = new SpeechRecognition();
        gameState.recognition.lang = 'zh-CN';
        gameState.recognition.continuous = false;
        gameState.recognition.interimResults = true;

        gameState.recognition.onresult = (event) => {
            const transcript = Array.from(event.results)
                .map(result => result[0].transcript)
                .join('');
            
            console.log('识别结果:', transcript);
            
            if (event.results[0].isFinal) {
                calculateScore(transcript);
            }
        };

        gameState.recognition.onerror = (event) => {
            console.error('语音识别错误:', event.error);
            tips.textContent = '识别失败，请重试';
            startReciteBtn.style.display = 'inline-block';
            stopReciteBtn.style.display = 'none';
        };

        gameState.recognition.onend = () => {
            gameState.isRecording = false;
            startReciteBtn.style.display = 'inline-block';
            stopReciteBtn.style.display = 'none';
        };
    } else {
        console.warn('浏览器不支持语音识别');
        tips.textContent = '您的浏览器不支持语音识别';
    }
}

// 计算背诵分数
function calculateScore(userText) {
    const poem = poems[gameState.currentIndex];
    const poemText = poem.lines.map(line => line.text).join('');
    
    // 简单的相似度计算
    let score = 0;
    const userChars = userText.replace(/[^\u4e00-\u9fa5]/g, '');
    const poemChars = poemText.replace(/[^\u4e00-\u9fa5]/g, '');
    
    // 计算匹配的字符数
    let matchCount = 0;
    for (let char of poemChars) {
        if (userChars.includes(char)) {
            matchCount++;
        }
    }
    
    // 计算分数（最高5分）
    const matchRate = matchCount / poemChars.length;
    score = Math.min(5, Math.ceil(matchRate * 5));
    
    showScoreResult(score);
}

// 显示评分结果
function showScoreResult(score) {
    recitePrompt.style.display = 'none';
    scoreResult.style.display = 'flex';
    
    // 更新星星
    scoreStars.textContent = '⭐'.repeat(score) + '☆'.repeat(5 - score);
    
    // 更新评语
    const comments = {
        5: ['太棒了！', '发音很准确哦！'],
        4: ['很好！', '再努力一点点就完美了！'],
        3: ['不错！', '继续加油！'],
        2: ['还可以！', '多练习几次会更好！'],
        1: ['继续努力！', '再听一遍试试！'],
        0: ['没关系！', '再试一次吧！']
    };
    
    const comment = comments[score] || comments[0];
    scoreText.textContent = comment[0];
    scoreComment.textContent = comment[1];
    
    // 更新总分
    gameState.totalScore += score;
}

// 显示当前句的动画
function showLineAnimation(lineIndex, poem) {
    const line = poem.lines[lineIndex];
    const anim = line.animation;
    
    animationScene.style.background = anim.background;
    animationScene.innerHTML = anim.elements;
    animationScene.className = 'animation-scene line-' + lineIndex;
    
    // 显示当前诗句
    linePinyin.textContent = line.pinyin;
    lineText.textContent = line.text;
    currentLine.style.display = 'block';
}

// 显示诗词
function showPoem(index) {
    const poem = poems[index];
    gameState.currentLineIndex = 0;
    gameState.isReadingLines = true;
    
    // 更新标题和作者
    poemTitle.innerHTML = `
        <span class="pinyin">${poem.titlePinyin}</span>
        <span class="chinese">${poem.title}</span>
    `;
    poemAuthor.innerHTML = `
        <span class="pinyin">${poem.authorPinyin}</span>
        <span class="chinese">-${poem.author}</span>
    `;
    
    // 更新诗句内容
    poemContent.innerHTML = poem.lines.map((line, i) => `
        <div class="poem-line" data-line="${i}">
            <div class="line-pinyin">${line.pinyin}</div>
            <div class="line-text">${line.text}</div>
        </div>
    `).join('');
    
    // 更新进度
    currentNum.textContent = index + 1;
    totalNum.textContent = poems.length;
    
    // 开始逐句朗读和动画
    setTimeout(() => {
        readLinesOneByOne(poem);
    }, 500);
}

// 逐句朗读诗词（熊大熊二风格）
function readLinesOneByOne(poem) {
    if (gameState.currentLineIndex >= poem.lines.length) {
        // 所有诗句读完了
        showRecitePrompt();
        return;
    }
    
    const line = poem.lines[gameState.currentLineIndex];
    
    // 显示当前句的动画
    showLineAnimation(gameState.currentLineIndex, poem);
    
    // 高亮当前句
    document.querySelectorAll('.poem-line').forEach((lineEl, i) => {
        if (i === gameState.currentLineIndex) {
            lineEl.classList.add('active');
        } else {
            lineEl.classList.remove('active');
        }
    });
    
    // 朗读当前句
    speakLineWithBearVoice(line.text, () => {
        // 朗读完成后，停顿一下，然后读下一句
        setTimeout(() => {
            gameState.currentLineIndex++;
            readLinesOneByOne(poem);
        }, 1200);
    });
}

// 熊大熊二风格朗读单句
function speakLineWithBearVoice(text, callback) {
    if (!window.speechSynthesis) {
        if (callback) callback();
        return;
    }
    
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    utterance.rate = 0.75; // 稍慢，更亲切
    utterance.pitch = 0.9; // 稍低，模仿熊的声音
    utterance.volume = 1.0;
    
    // 尝试使用更自然的男声
    const voices = window.speechSynthesis.getVoices();
    const maleVoice = voices.find(voice => 
        voice.lang.includes('zh-CN') && 
        (voice.name.includes('Male') || voice.name.includes('男') || voice.name.includes('Li'))
    );
    if (maleVoice) {
        utterance.voice = maleVoice;
    }
    
    utterance.onstart = () => {
        tips.textContent = '💡 熊大正在朗诵...';
    };
    
    utterance.onend = () => {
        tips.textContent = '💡 熊大朗诵完成';
        if (callback) callback();
    };
    
    window.speechSynthesis.speak(utterance);
}

// 显示背诵提示
function showRecitePrompt() {
    gameState.isReadingLines = false;
    currentLine.style.display = 'none';
    recitePrompt.style.display = 'flex';
    tips.textContent = '💡 轮到你背诵啦！';
}

// 开始录音
function startRecording() {
    if (!gameState.recognition) {
        alert('您的浏览器不支持语音识别');
        return;
    }
    
    try {
        gameState.recognition.start();
        gameState.isRecording = true;
        startReciteBtn.style.display = 'none';
        stopReciteBtn.style.display = 'inline-block';
        tips.textContent = '💡 正在录音...请开始背诵';
    } catch (error) {
        console.error('开始录音失败:', error);
    }
}

// 停止录音
function stopRecording() {
    if (gameState.recognition && gameState.isRecording) {
        gameState.recognition.stop();
    }
}

// 下一首
function nextPoem() {
    scoreResult.style.display = 'none';
    currentLine.style.display = 'none';
    
    gameState.currentIndex++;
    
    if (gameState.currentIndex >= poems.length) {
        showFinishScreen();
    } else {
        showPoem(gameState.currentIndex);
    }
}

// 显示完成页面
function showFinishScreen() {
    poemScreen.style.display = 'none';
    finishScreen.style.display = 'block';
    
    // 显示总分
    totalScore.textContent = gameState.totalScore;
    
    // 停止朗读
    if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
}

// 开始游戏
function startGame() {
    gameState.currentIndex = 0;
    gameState.isPlaying = true;
    gameState.totalScore = 0;
    
    startScreen.style.display = 'none';
    poemScreen.style.display = 'block';
    
    showPoem(gameState.currentIndex);
}

// 重新开始
function restartGame() {
    gameState.currentIndex = 0;
    gameState.isPlaying = true;
    gameState.totalScore = 0;
    
    finishScreen.style.display = 'none';
    poemScreen.style.display = 'block';
    
    showPoem(gameState.currentIndex);
}

// 事件监听
startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', restartGame);
startReciteBtn.addEventListener('click', startRecording);
stopReciteBtn.addEventListener('click', stopRecording);
nextPoemBtn.addEventListener('click', nextPoem);

// 页面加载完成
window.addEventListener('load', () => {
    initSpeechRecognition();
    
    // 预加载语音合成
    if (window.speechSynthesis) {
        window.speechSynthesis.getVoices();
    }
});
