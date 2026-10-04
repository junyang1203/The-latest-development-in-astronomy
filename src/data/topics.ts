import { Topic } from '../types';

export const GLOBAL_GAME_LINK = "https://astro-quest-kappa.vercel.app/";

export const TOPICS: Topic[] = [
  {
    id: "exoplanets",
    title: "EXOPLANETS",
    titleZh: "系外行星",
    subtitle: "Finding Worlds Beyond Our Solar System",
    subtitleZh: "寻找太阳系外的全新世界",
    gameLink: "https://exoplanet-hunter-rc6x.vercel.app/",
    gameName: "Exoplanet Hunter",
    gameNameZh: "系外行星猎手",
    tag: "Kepler & TESS Missions",
    tagZh: "开普勒与苔丝巡天任务",
    color: "#38bdf8",
    accentGradient: "from-cyan-500 to-blue-600",
    quiz: {
      question: "How does the Transit Method detect an exoplanet?",
      questionZh: "凌日法（Transit Method）是如何探测系外行星的？",
      options: [
        "By measuring the tiny dip in brightness when a planet blocks starlight",
        "By taking a direct close-up photograph of the planet's surface",
        "By sending radio probe signals directly to the exoplanet",
        "By catching gravitational waves emitted from the planet's core"
      ],
      optionsZh: [
        "通过测量行星遮挡恒星光线时恒星亮度的微小变暗周期",
        "通过直接拍摄行星表面的特写高清照片",
        "通过向系外行星直接发射无线电探测探测器",
        "通过捕捉行星核心发出的引力波信号"
      ],
      correctIndex: 0,
      explanation: "When a planet crosses between us and its host star, it blocks a fraction of the starlight, producing a periodic dip in the light curve.",
      explanationZh: "当行星穿行于我们与恒星之间时，会遮挡微量星光，在光变曲线上产生周期性的亮度下降。"
    },
    sections: [
      {
        heading: "🌍 What is an Exoplanet?",
        headingZh: "🌍 什么是系外行星？",
        content: `Look at the night sky. Many of the stars you see are not alone. Just like our Sun has planets orbiting it, other stars can also have their own planets.

A planet that orbits a star outside our Solar System is called an exoplanet.

For a long time, scientists could only wonder whether planets existed around other stars. Today, thousands of exoplanets have been confirmed. NASA reports that more than 6,000 exoplanets have been discovered.

But there is a problem:
How can we find a planet that is extremely far away?
The planet may be too small and too faint to see directly.`,
        contentZh: `仰望夜空，你所看到的许多恒星并不孤单。就像我们的太阳拥有环绕它运行的行星一样，其他恒星也可以拥有属于它们自己的行星世界。

一颗环绕太阳系以外恒星运转的行星，被称为“系外行星”（Exoplanet）。

在漫长的岁月里，科学家只能猜测其他恒星周围是否存在行星。如今，已有数千颗系外行星被证实存在。美国国家航空航天局（NASA）报告已发现超过 6,000 颗系外行星。

但这带来了一个难题：
如何找到远在亿万公里之外的行星？
这些行星往往太小、太暗淡，根本无法直接用普通光学镜头看清。`,
        graphic: "transit"
      },
      {
        heading: "🔭 How do scientists find them?",
        headingZh: "🔭 科学家是如何寻找它们的？",
        content: `One of the most successful methods is called the transit method.

Imagine you are looking at a bright lamp from far away. Now imagine a tiny ball slowly moving across the lamp. The lamp would appear slightly darker for a short time.

Something similar happens with an exoplanet.

When a planet passes between us and its star, it blocks a tiny amount of the star's light. Astronomers measure this small change in brightness. If the same change happens again and again at regular intervals, it can be evidence that a planet is orbiting the star.`,
        contentZh: `最成功的探测方法之一被称为“凌日法”（Transit Method）。

想象一下，你从很远的地方看着一盏明亮的路灯。现在想象一颗微小的小球缓缓从灯泡前掠过。灯光会在短暂的时间里显得稍微暗淡了一点。

类似的事情也发生在系外行星身上。

当一颗行星从我们与它的母恒星之间穿过时，它会遮挡极少量的恒星光芒。天文学家精确测量这种微弱的亮度变化。如果这种亮度骤降以规则的时间间隔反复出现，就是行星环绕该恒星运转的关键证据。`,
        graphic: "transit"
      },
      {
        heading: "🌎 What can we learn from an exoplanet?",
        headingZh: "🌎 我们能从系外行星上了解什么？",
        content: `The change in brightness can tell scientists about the planet's size and orbit.

During some transits, a small amount of starlight can also pass through the planet's atmosphere. By studying that light, scientists can learn about gases in the atmosphere.

This is exciting because scientists are not just asking:
“Does this planet exist?”
They can also ask:
“What is this planet like?”

💡 A simple example
Imagine there are three stars:
Star A: brightness stays the same.
Star B: brightness suddenly becomes slightly lower, then returns to normal.
Star C: brightness becomes slightly lower again and again at regular intervals.
Star C is especially interesting because the repeated pattern could indicate a planet repeatedly passing in front of its star.`,
        contentZh: `亮度的变化幅度能够告诉科学家行星的物理尺寸和轨道周期。

在某些凌日过程中，少量星光还会穿透行星的大气层边缘。通过光谱分析这些穿透光，科学家可以破译其大气中包含的气体成分（如水蒸气、二氧化碳、甲烷等）。

这令人无比振奋，因为科学家不仅是在问：
“这颗行星真的存在吗？”
他们更能进一步探寻：
“这是一颗怎样的星球？它是否有生命宜居的可能？”

💡 一个简单的例子
想象三颗恒星：
恒星 A：亮度恒定不变。
恒星 B：亮度突然略微下降一次，随后恢复正常。
恒星 C：亮度以规则周期一次又一次微弱下降。
恒星 C 尤其令人瞩目，因为这种重复的节律往往意味着有一颗行星正在周而复始地掠过恒星表面。`,
        graphic: "transit"
      },
      {
        heading: "🤯 Interesting fact & 🌟 The big idea",
        headingZh: "🤯 趣闻事实与 🌟 核心洞见",
        content: `The change in brightness can be extremely tiny. It is like trying to notice a very small object passing in front of a huge spotlight from an enormous distance. And there is another problem: the planetary system must be positioned at the right angle for us to see the planet cross its star. If the orbit is tilted differently, we may never see a transit.

We do not always need to see a planet directly to discover it. Sometimes, we can discover it by observing the tiny effect it has on its star.`,
        contentZh: `亮度的变化常常微乎其微（通常只有不到百分之一甚至万分之一）。这就像在几十公里外观测一只小飞虫从刺眼的探照灯前飞过。

而且还有一个限制：行星系统的轨道平面必须恰好对准地球视线方向。如果它的轨道倾角发生倾斜，行星就不会从恒星前方穿过，我们就永远无法观测到凌日现象。

🌟 核心洞见：
我们并不总是需要“亲眼看到”一颗行星才能发现它。有时，通过观测它对其母恒星所产生的细微影响，我们就能准确揭示未知的世界。`,
        graphic: "transit"
      }
    ]
  },
  {
    id: "black-holes",
    title: "BLACK HOLES",
    titleZh: "黑洞秘境",
    subtitle: "Studying Something We Cannot See Directly",
    subtitleZh: "探究无法直接肉眼目睹的宇宙深渊",
    gameLink: "https://black-hole-slingshot-game.vercel.app/",
    gameName: "Black Hole Slingshot",
    gameNameZh: "黑洞引力弹弓",
    tag: "Event Horizon & Spacetime",
    tagZh: "事件视界与时空曲率",
    color: "#f97316",
    accentGradient: "from-amber-500 to-orange-600",
    quiz: {
      question: "How did the Event Horizon Telescope capture the image of M87*?",
      questionZh: "事件视界望远镜（EHT）是如何拍摄到 M87* 黑洞图像的？",
      options: [
        "By observing radio emissions from hot matter orbiting outside the event horizon",
        "By flying a space probe inside the black hole with a flash camera",
        "By capturing visible light escaping from the black hole's singularity",
        "By bouncing laser beams off the dark black hole surface"
      ],
      optionsZh: [
        "通过观测事件视界外围极热吸积盘辐射的射电波，显现出黑洞的阴影",
        "通过派遣携带闪光灯的航天探测器直接钻入黑洞内部拍摄",
        "通过捕捉从黑洞奇点逃逸出的可见光线",
        "通过将激光束射向黑洞表面并接收反弹反射光"
      ],
      correctIndex: 0,
      explanation: "Light cannot escape past the event horizon. The famous glowing ring is created by superheated gas and plasma glowing around the central black hole silhouette.",
      explanationZh: "光线无法逃逸出事件视界。著名的橙色光环是由黑洞周围超高速旋转的极热气体发出的辐射，中间黑暗部分则是黑洞投下的“阴影”。"
    },
    sections: [
      {
        heading: "🕳️ What is a Black Hole?",
        headingZh: "🕳️ 什么是黑洞？",
        content: `A black hole is a region of space where gravity is so strong that, once something crosses its event horizon, even light cannot escape.

This creates a strange problem for astronomers:
If light cannot escape from a black hole, how can we study it?

The answer is:
We study what happens around it.`,
        contentZh: `黑洞是空间中引力极度强大的一处区域，一旦任何物体或辐射跨过其“事件视界”（Event Horizon），连宇宙中速度最快的光也无法逃离。

这就给天文学家带来了一个奇特的难题：
如果光线都无法逃逸，我们该如何观测并研究它？

答案是：
我们研究黑洞周围所发生的一切物理现象。`,
        graphic: "blackhole"
      },
      {
        heading: "👀 We don't see the black hole itself",
        headingZh: "👀 我们看见的不是黑洞本身",
        content: `Imagine that you are standing in a dark room. You cannot see an invisible object directly. But suppose you see objects nearby moving in a strange way. You might think:
“Something must be there causing these objects to move.”

Astronomers use a similar idea. They observe things such as:
- stars moving around an unseen object
- extremely hot material
- radiation
- matter moving near the black hole

These observations provide evidence that a black hole is there.`,
        contentZh: `想象你站在一间黑暗的房间里，你无法直接看到一个隐形的物体。但如果你观察到附近的物品都在以极其奇特的高速轨迹环绕某个无形点旋转，你会推断：
“那里一定存在着某种极其沉重的力量在主导这一切。”

天文学家运用了完全相同的逻辑。他们观测：
- 恒星以惊人速度环绕某个看不见的中心公转
- 吸积盘中被剧烈摩擦加热至数百万度的极热物质
- 高能 X 射线及相对论喷流辐射
- 物质跌入黑洞边缘前的引力红移

这些无可辩驳的证据揭示了黑洞的真实存在。`,
        graphic: "blackhole"
      },
      {
        heading: "🌌 The Event Horizon Telescope",
        headingZh: "🌌 事件视界望远镜（EHT）",
        content: `In 2019, scientists released the first image of the environment around a black hole in the galaxy M87. But there is an important detail:
The image is not a normal photograph of the black hole itself.

The Event Horizon Telescope observed radiation from extremely hot material around the black hole and produced an image showing the black hole's shadow. So when you see the famous orange ring, remember:
The bright material around the black hole can be observed, while the black hole itself appears as the dark central shadow.

🔭 How was the image made?
The Event Horizon Telescope is not just one telescope. It is a global network of radio observatories. Scientists combine observations from different locations to create a much more powerful virtual observing system.`,
        contentZh: `2019 年，科学家发布了人类历史上第一张位于 M87 星系中心的超大质量黑洞边缘图像。但有一个至关重要的细节：
这张图像并不是直接拍下黑洞本身的“普通照片”。

事件视界望远镜（EHT）捕捉的是环绕黑洞周围极热物质所辐射出的毫米波射电信号，从而勾勒出黑洞留下的“阴影”。因此，当你看到那幅著名的金橙色光环时请记住：
环绕四周的亮斑是被引力严重弯折的光辉，而正中心不可逾越的黑影才是黑洞本身。

🔭 这张照片是如何拍出的？
EHT 并非单一望远镜，而是分布在夏威夷、智利、南极等全球多地的射电望远镜组成的庞大网络。科学家运用超长基线干涉测量技术（VLBI），合成了一台口径宛如地球大小的超级虚拟望远镜。`,
        graphic: "blackhole"
      },
      {
        heading: "🤯 Interesting fact & 🌟 The big idea",
        headingZh: "🤯 趣闻事实与 🌟 核心洞见",
        content: `The black hole photographed in M87 is about 55 million light-years away. That means the light we detected began its journey toward Earth millions of years ago. So when astronomers observe distant objects, they are also looking into the past.

When something cannot be seen directly, scientists can study its effects and use evidence to understand what is there. This is one of the most powerful ideas in modern astronomy.`,
        contentZh: `M87 星系中心的黑洞距离地球大约 5,500 万光年。这意味着我们所接收到的射电辐射，早在 5,500 万年前地球尚处新生代始新世时便已启程。因此，天文学家仰望深空，实际上是在凝望时间的过去。

🌟 核心洞见：
当某样事物无法被直接肉眼看见时，科学家可以通过研究其产生的引力效应与物理印记，以严谨的证据推导出其本质。这是现代天文学最强大的科学思想之一。`,
        graphic: "blackhole"
      }
    ]
  },
  {
    id: "gravitational-waves",
    title: "GRAVITATIONAL WAVES",
    titleZh: "引力波涟漪",
    subtitle: "Listening to the Universe",
    subtitleZh: "用时空震颤倾听宇宙的回响",
    tag: "LIGO & Spacetime Ripples",
    tagZh: "LIGO激光干涉与时空涟漪",
    color: "#6366f1",
    accentGradient: "from-indigo-500 to-violet-600",
    quiz: {
      question: "What physical distortion does a gravitational wave cause when reaching Earth?",
      questionZh: "引力波传播到地球时会引起什么样的物理变化？",
      options: [
        "It stretches and squeezes the fabric of spacetime by a fraction smaller than an atomic nucleus",
        "It produces an audible booming noise loud enough to shake human eardrums",
        "It heats the Earth's atmosphere by several degrees Celsius",
        "It turns all visible stars temporarily blue for several hours"
      ],
      optionsZh: [
        "它在微观尺度上拉伸和挤压时空结构，尺度甚至小于原子核直径",
        "它在空气中产生巨大的可听轰鸣声，震颤人类鼓膜",
        "它使地球大气温度在短时间内骤升数摄氏度",
        "它会让天空中所有恒星在数小时内短暂变成纯蓝色"
      ],
      correctIndex: 0,
      explanation: "Gravitational waves distort spacetime itself. The laser arms of LIGO measure length changes smaller than 1/10,000th the diameter of a proton.",
      explanationZh: "引力波拉伸并挤压时空本身。LIGO 的 4 公里激光干涉臂能够测出比质子直径万分之一还要细微的长度微变。"
    },
    sections: [
      {
        heading: "🌊 What are gravitational waves?",
        headingZh: "🌊 什么是引力波？",
        content: `For a long time, astronomy was mainly about looking at light. Astronomers used telescopes to collect light from stars, galaxies, planets and other objects.

But the Universe gives us another kind of signal:
Gravitational waves.

A simple way to imagine them is:
Ripples travelling through spacetime.`,
        contentZh: `在漫长的历史中，天文学主要是关于“观看光芒”。天文学家通过各类光学望远镜，收集来自恒星、星系、行星和其他天体的电磁光波。

但广袤的宇宙向我们传递着另一种截然不同的信使：
引力波（Gravitational Waves）。

最形象的理解方式就是：
它们是在时空结构本身之中激荡传播的涟漪。`,
        graphic: "waves"
      },
      {
        heading: "🌌 Where do they come from?",
        headingZh: "🌌 它们源于何处？",
        content: `Some of the most violent events in the Universe can produce gravitational waves.

For example:
Two black holes can orbit each other. They get closer and closer. Then: BOOM — they merge. This enormous event produces gravitational waves that travel through space.

These waves can travel enormous distances before reaching Earth.`,
        contentZh: `宇宙中最极端、最猛烈的天体剧变事件才会产生可被探测的强引力波。

例如：
双黑洞系统在引力拉扯下以接近光速的惊人速度相互绕转，它们的距离越来越近，最终在轰然巨响般的激波中融为一体！这一毁灭性的宇宙并合事件激荡起巨大的时空震颤，以光速席卷整个宇宙。

这些涟漪穿越数十亿光年的浩瀚深空，最终抵达地球。`,
        graphic: "waves"
      },
      {
        heading: "🔬 How can we detect them?",
        headingZh: "🔬 我们如何探测时空涟漪？",
        content: `In 2015, LIGO made the first direct detection of gravitational waves from two merging black holes. The event happened about 1.3 billion light-years away.

The signal was incredibly tiny. By the time the wave reached Earth, the change it produced was smaller than the size of an atomic nucleus. That is why detecting gravitational waves requires extremely sensitive instruments.

👂 Why call it “listening”?
We cannot hear gravitational waves with our ears. Scientists convert the detected signal into a form that we can represent as sound or a graph. So it is almost like giving astronomers a new sense.

💡 A simple example
Imagine dropping a stone into water. You may not see the stone very clearly from far away. But you can see the ripples moving across the water.`,
        contentZh: `2015 年，激光干涉引力波天文台（LIGO）首次直接探测到了双黑洞并合产生的引力波（GW150914）。这场惊心动魄的天体碰撞发生在约 13 亿光年之外。

然而当波纹抵达地球时，信号已经极其微弱。它引起的空间伸缩尺度，甚至比单个原子核的尺寸还要小得多！这也就是为何探测引力波需要人类建造出最极致灵敏的激光干涉测量仪。

👂 为什么天文学家称之为“倾听宇宙”？
我们当然无法用肉耳直接在真空中听到引力波。但科学家将探测到的时空频率信号转化为音频（即著名的“啾啾声” Chirp）。这宛如赋予了天文学家一双聆听宇宙深处呼吸的耳朵。

💡 一个生动的例子
想象往平静的池塘中投入一块巨石。哪怕你在很远的地方看不清那颗石头，但你依然能看到水面一圈圈向外荡漾的波浪。`,
        graphic: "waves"
      },
      {
        heading: "🌟 The big idea",
        headingZh: "🌟 核心洞见",
        content: `Modern astronomy is no longer only about seeing the Universe. We can also detect other signals from the Universe. This opened a new field called gravitational-wave astronomy.`,
        contentZh: `现代天文学已不再仅仅局限于“用眼睛看光”。通过捕捉引力波、中微子等非电磁信号，人类正式迈入了“多信使天文学”（Multi-Messenger Astronomy）与“引力波天文学”的划时代纪元。`,
        graphic: "waves"
      }
    ]
  },
  {
    id: "ai",
    title: "AI IN ASTRONOMY",
    titleZh: "天文AI赋能",
    subtitle: "When Artificial Intelligence Helps Us Explore Space",
    subtitleZh: "当人工智能携手人类揭开星空深处的奥秘",
    gameLink: "https://ai-cosmic-classifier.vercel.app/",
    gameName: "AI Cosmic Classifier",
    gameNameZh: "AI宇宙天体分类器",
    tag: "Machine Learning & Neural Nets",
    tagZh: "机器学习与天文大模型",
    color: "#a855f7",
    accentGradient: "from-purple-500 to-pink-600",
    quiz: {
      question: "What is the primary role of AI like NASA's ExoMiner++ in astronomy?",
      questionZh: "类似 NASA ExoMiner++ 的人工智能在天文学中的核心作用是什么？",
      options: [
        "Rapidly screening massive datasets to identify high-probability patterns for astronomers to verify",
        "Fully replacing human astronomers so research stations can be completely unattended",
        "Directly physically steering telescopes to physically catch asteroids in flight",
        "Translating alien languages transmitted across interstellar radio channels"
      ],
      optionsZh: [
        "快速筛选海量观测数据，识别高置信度模式，由天文学家进行科学验证",
        "彻底替代人类天文学家，使所有观测科研站实现全无人自主运行",
        "直接用物理手段操控望远镜去拦截捕获飞行的近地小行星",
        "翻译星际无线电中截获的外星文明语言"
      ],
      correctIndex: 0,
      explanation: "AI excels at rapid pattern recognition across petabytes of observational data, surfacing candidates while human scientists conduct validation and scientific interpretation.",
      explanationZh: "AI 极其擅长在 PB 级的海量巡天数据中迅速进行模式匹配与特征分类，筛选出候选天体，再由科学家团队进行严谨复核与理论解释。"
    },
    sections: [
      {
        heading: "🤖 Why does astronomy need AI?",
        headingZh: "🤖 天文学为什么迫切需要 AI？",
        content: `Modern telescopes collect enormous amounts of information. Imagine a telescope taking thousands, millions, or even more observations.

A human cannot realistically look at every image one by one.
This is where Artificial Intelligence (AI) can help.

NASA explains that AI can use pattern recognition to quickly identify important features in huge astronomical datasets.`,
        contentZh: `现代巡天望远镜每天都在产生天文数字级别的信息。想象一台巡天望远镜每晚拍摄数十万甚至数百万幅超高分辨率星图。

任何人类天文学家团队都无法逐一用肉眼审阅每一张图像。
这正是人工智能（AI）大显身手的领域。

NASA 指出，AI 能够通过深层模式识别，以令人惊叹的速度从海量天文数据集中快速锁定关键特征并找出不寻常的天体。`,
        graphic: "ai"
      },
      {
        heading: "🧠 How does AI help?",
        headingZh: "🧠 AI 是如何具体赋能研究的？",
        content: `Imagine giving a computer hundreds of pictures. You show it examples of:
🌀 Spiral galaxies
⭕ Elliptical galaxies
🌌 Irregular galaxies

The AI can learn patterns from the examples. Then you give it a new image. The AI can say: “This looks most similar to the spiral galaxy examples.”

This does not mean the AI “understands space” exactly like a human scientist. It is mainly very good at finding patterns in large amounts of data.

🔭 A real astronomy example
NASA's ExoMiner++ is an AI system designed to help identify and validate possible exoplanets in data from missions such as TESS. NASA reported in 2026 that it had been used in work involving hundreds of exoplanet discoveries.`,
        contentZh: `想象给计算机输入数万张已经标记的星系图。你给它展示各种典型范例：
🌀 旋涡星系（Spiral Galaxies）
⭕ 椭圆星系（Elliptical Galaxies）
🌌 不规则星系（Irregular Galaxies）

深度神经网络能够从这些范例中提炼出细微的形态学特征。当你输入一张全新的深空照片时，AI 可以在数毫秒内判定：“这幅图像与旋涡星系的置信度高达 98.7%。”

这并不意味着 AI 像人类学者一样拥有对宇宙的诗意理解，但它在超大规模数据中检索微弱规律的能力远超人类极限。

🔭 真实天文案例
NASA 的 ExoMiner++ 是一个先进的深度学习系统，专门用于分析 TESS 巡天卫星的数据，快速验证潜在系外行星的凌日候选信号。NASA 报告称其已被成功运用于确认数百颗系外行星的新发现。`,
        graphic: "ai"
      },
      {
        heading: "👨‍🔬 But can we let AI do everything?",
        headingZh: "👨‍🔬 但我们能让 AI 彻底包揽一切吗？",
        content: `No.
AI can make mistakes.

A useful way to think about it is:
1. AI Finds patterns
2. AI Suggests interesting objects
3. Human scientist checks the evidence
4. Scientific conclusion

AI is a powerful tool, but scientists still need to check whether its results make sense. NASA has also emphasized the importance of AI literacy and understanding the limitations of AI in astronomical research.`,
        contentZh: `答案是绝对不能。
AI 经常会受到噪声干扰、假阳性伪影以及训练偏差的误导。

最严谨的科学协作链路是：
1. AI 快速扫描浩瀚数据海并识别特征
2. AI 提炼出值得关注的可疑候选天体
3. 人类科学家团队深度核验物理证据
4. 得出严谨可靠的科学结论

AI 是一柄强大的利刃，但科学家必须审慎把握其局限性与算法不确定性。NASA 始终强调天文学者必须培养 AI 素养，保持科学怀疑精神。`,
        graphic: "ai"
      },
      {
        heading: "🤯 Interesting fact & 🌟 The big idea",
        headingZh: "🤯 趣闻事实与 🌟 核心洞见",
        content: `Astronomical datasets are becoming so large that AI is becoming increasingly important. NASA's astronomy community is actively developing AI and machine-learning approaches for modern astronomical research. So the future astronomer may not only need to understand stars and galaxies. They may also need to understand data and AI.

AI does not replace astronomers. It helps astronomers deal with an amount of information that would be impossible to examine manually.`,
        contentZh: `天文学数据正在以指数级飞速膨胀。未来的天文学家不仅要懂得天体物理学与恒星演化理论，更要精通数据科学与前沿 AI 算法。

🌟 核心洞见：
AI 并不会取代天文学家；恰恰相反，AI 释放了人类的精力，让人类科学家能够从数以百亿计的信息汪洋中，聚焦于真正震撼人心的科学突破与理论思辨。`,
        graphic: "ai"
      }
    ]
  },
  {
    id: "multi-wavelength",
    title: "MULTI-WAVELENGTH",
    titleZh: "多波段光谱",
    subtitle: "Seeing the Universe in More Than One Way",
    subtitleZh: "以超越可见光的宽广光谱纵览万象",
    tag: "Chandra, Webb, Hubble & Radio",
    tagZh: "韦布、哈勃、钱德拉与射电阵列",
    color: "#ec4899",
    accentGradient: "from-fuchsia-500 to-rose-600",
    quiz: {
      question: "Why do astronomers observe celestial objects across multiple wavelengths?",
      questionZh: "为什么天文学家要跨越多个波段观测同一天体？",
      options: [
        "Different wavelengths reveal distinct physical processes like cold dust, stars, and high-energy jets",
        "Because human eyes can only see visible light at nighttime",
        "Because cameras on telescopes can only capture one color per year",
        "Because light changes into sound when it reaches ultraviolet frequencies"
      ],
      optionsZh: [
        "不同波段能够揭示不同的物理过程，如冷尘埃、恒星诞生区与高能喷流",
        "因为人类眼睛只能在漆黑的夜晚看到可见光",
        "因为太空望远镜相机每年只能拍摄一种固定颜色",
        "因为光波到达紫外频段时会自动转化为声波"
      ],
      correctIndex: 0,
      explanation: "Infrared penetrates obscuring cosmic dust, visible reveals stars, and X-rays reveal million-degree gas and black hole jets, completing the cosmic puzzle.",
      explanationZh: "红外波段能穿透遮挡星光的尘埃云，可见光展示发光恒星，X 射线则展现数百万度的极端等离子体与高能喷流，拼凑出完整的宇宙全景。"
    },
    sections: [
      {
        heading: "🌈 Can we see everything in the Universe?",
        headingZh: "🌈 我们的双眼能看清宇宙中的一切吗？",
        content: `No.
Our eyes can only detect a small part of the electromagnetic spectrum called visible light.

But the Universe produces many other kinds of electromagnetic radiation. For example:
- Radio
- Infrared
- Visible light
- Ultraviolet
- X-rays
- Gamma rays

Each one can reveal different information.`,
        contentZh: `答案是远远不能。
人眼的视网膜只能感知电磁波谱中极为狭窄的一小段——即可见光。

然而在真实的宇宙中，各种剧烈或温和的物理过程正以多种多样的波长倾泻能量：
- 射电波（Radio）
- 红外线（Infrared）
- 可见光（Visible light）
- 紫外线（Ultraviolet）
- X 射线（X-rays）
- 伽马射线（Gamma rays）

每一个波段，都在向我们讲述一段截然不同的宇宙传奇。`,
        graphic: "wavelength"
      },
      {
        heading: "👀 Think about this example",
        headingZh: "👀 试想这样一个生动比喻",
        content: `Imagine looking at a person wearing a thick jacket. With your eyes, you can see the outside of the jacket. But imagine having different types of “vision”.
One type might show temperature.
Another might reveal what is happening underneath.
Another might show very energetic activity.

Astronomers use a similar idea when observing the Universe.`,
        contentZh: `想象你看着一个身穿厚重羽绒服的人。用你的普通肉眼，你只能看到外套的颜色和外部面料。但设想你拥有超感知“多重视界”：
热成像红外视界可以穿透布料呈现身体温度分布；
透视 X 射线能清晰呈现骨骼的坚硬结构；
心电监测则展示剧烈的脉搏心跳。

天文学家审视浩瀚星空时，运用的正是这种多重维度的“宇宙透视法”。`,
        graphic: "wavelength"
      },
      {
        heading: "🔭 One object can look completely different",
        headingZh: "🔭 同一天体在不同波段下判若两人",
        content: `Take a galaxy.
In visible light, you may see: stars, dust and the overall shape of the galaxy.
In infrared, you may see: through some dust and reveal cooler material or regions where stars are forming.
In X-rays, you may see: very energetic processes.

NASA explains that astronomical objects can reveal different aspects of their composition and behaviour at different wavelengths. Some objects can even be difficult to see at one wavelength but obvious at another.

🌌 A real example: Centaurus A
Visible-light observations show its dusty structure. Infrared observations provide information about dust and other material. X-ray and radio observations reveal powerful jets coming from its active centre.`,
        contentZh: `以一个星系为例：
在可见光下，你能看到成群的恒星光辉以及横亘其中的暗色尘埃带；
在红外线（如詹姆斯·韦布望远镜）下，红外光能够轻松穿透厚重尘埃，直视新恒星孕育诞生的恒星育婴室；
在 X 射线（如钱德拉天文台）下，则能捕获温度高达数百万度的超高温吸积气体。

🌌 真实典范：半人马座 A（Centaurus A）
在哈勃可见光中，它呈现为一个被深黑尘埃环环绕的椭圆星系；但在射电与 X 射线合成图像中，从星系中心超大质量黑洞喷涌而出的相对论喷流高达数百万光年，气势磅礴！`,
        graphic: "wavelength"
      },
      {
        heading: "💡 The easiest way to remember it & 🌟 The big idea",
        headingZh: "💡 最易懂的记忆法与 🌟 核心洞见",
        content: `Think of astronomy like solving a mystery.
One clue might show what something looks like. Another might show how hot it is. Another might show how energetic it is.
Put all the clues together, and scientists get a much more complete picture.

There is no single “best” way to observe the Universe. Different wavelengths give us different pieces of the puzzle. This is why modern astronomy increasingly combines observations from many different types of telescopes.`,
        contentZh: `把天文学想象成破解一桩惊天迷案：
可见光提供外貌线索，红外线揭示温度密码，X 射线指明能量风暴，射电波追踪无形磁场。
只有将所有拼图线索拼合在一起，我们才能真正窥见宇宙万物的全貌。

🌟 核心洞见：
观测宇宙不存在唯一的“最佳波段”。不同的电磁波谱共同拼凑起真理的拼图。现代前沿天文学正是通过融合天地协同的多波段观测，构建起丰满立体的大宇宙图景。`,
        graphic: "wavelength"
      }
    ]
  },
  {
    id: "future",
    title: "FUTURE ASTRONOMY",
    titleZh: "未来天文",
    subtitle: "What Will We Discover Next?",
    subtitleZh: "下一代超级巡天仪将带我们走向何方？",
    tag: "Nancy Grace Roman & Beyond",
    tagZh: "罗曼空间望远镜与万亿星系",
    color: "#10b981",
    accentGradient: "from-emerald-500 to-teal-600",
    quiz: {
      question: "How does the Nancy Grace Roman Space Telescope compare to the Hubble Space Telescope?",
      questionZh: "南希·格雷斯·罗曼空间望远镜与哈勃太空望远镜相比有何革命性突破？",
      options: [
        "It possesses a field of view at least 100 times larger than Hubble while maintaining matching clarity",
        "It is built to physically travel outside the Milky Way galaxy within 5 years",
        "It is powered entirely by nuclear fusion sails without solar arrays",
        "It replaces all space telescopes with a single mirror on the Moon"
      ],
      optionsZh: [
        "它拥有比哈勃大至少 100 倍的单次超大观测视场，同时保持同等极致解析度",
        "它计划在发射后 5 年内直接飞出银河系开展近距离探测",
        "它完全使用核聚变光帆驱动，无需任何太阳能光伏电池",
        "它将在月球背面建造单片反射镜，从而淘汰所有现存轨道望远镜"
      ],
      correctIndex: 0,
      explanation: "Roman provides a panoramic survey capability 100x wider than Hubble, allowing astronomers to map hundreds of millions of galaxies simultaneously.",
      explanationZh: "罗曼望远镜拥有比哈勃大 100 倍以上的超广角全景视场，使天文学家能够同时对亿万星系进行高精度巡天普查。"
    },
    sections: [
      {
        heading: "🚀 Is astronomy finished?",
        headingZh: "🚀 天文学的研究已经接近终点了吗？",
        content: `Definitely not.
In fact, we are entering a period where new technologies are allowing astronomers to collect more information about the Universe than ever before.

The future of astronomy is not simply about building a telescope that can “zoom in more”. It is about developing new ways of observing, processing and understanding information.`,
        contentZh: `绝非如此。
事实上，我们正迈入人类历史上最激动人心的天文大发现黄金时代。尖端光学、量子传感器与超大规模并行计算，正赋予我们前所未有的洞察力。

未来天文学的精髓并不仅仅是造一台“放大倍数更大”的望远镜，而是开辟全新的观测维度、数据融合范式与对物理规律的颠覆性理解。`,
        graphic: "telescope"
      },
      {
        heading: "🔭 A new generation of observatories",
        headingZh: "🔭 新一代超级巡天天文台",
        content: `One important example is NASA's Nancy Grace Roman Space Telescope.
Roman is designed to observe enormous areas of the sky while maintaining high-quality images. NASA says its field of view is at least 100 times larger than Hubble's, allowing it to survey huge numbers of cosmic objects efficiently.

This means future astronomy can increasingly move from:
“Let's study one object.”
to:
“Let's study millions or billions of objects and look for patterns.”`,
        contentZh: `一个具有里程碑意义的旗舰项目是 NASA 的“南希·格雷斯·罗曼空间望远镜”（Roman Space Telescope）。
罗曼望远镜旨在在保持哈勃级别的无瑕锐利图像的同时，一次性捕捉浩瀚无垠的天区。NASA 指出，它的单次视野范围至少是哈勃望远镜的 100 倍！

这意味着天文学的科研范式正发生深刻蜕变：
从过去的“耗费数月精细剖析某颗孤立天体”，
迈向“一揽子扫描数以亿计的宇宙天体，并在大数据集群中挖掘宇宙法则”。`,
        graphic: "telescope"
      },
      {
        heading: "🌌 Combining technologies & 🧠 What might we discover?",
        headingZh: "🌌 跨学科技术大协同与 🧠 未来将揭晓何种谜题？",
        content: `Imagine discovering a strange object. Scientists might use:
Visible light -> Infrared -> X-rays -> AI -> Gravitational waves.
Instead of relying on one technology, scientists can combine many different kinds of evidence.

Future observatories may help scientists investigate questions such as:
- How did the earliest galaxies form?
- How do galaxies evolve?
- How many planetary systems exist?
- What are distant planets like?
- What causes the Universe's expansion to accelerate?
- How do black holes grow?
- Are there planets with conditions suitable for life?`,
        contentZh: `想象未来一旦探测到异常天体信号，科学界将迅速发起多维联动：
可见光巡天 ➔ 空间红外测温 ➔ 轨道 X 射线定性 ➔ 算法实时模式聚类 ➔ 引力波波形对齐！
全球与太空观测阵列将在数秒内协同校准，形成坚不可摧的多维证据链。

下一代前沿天文台将帮助人类直面最具终极意义的科学之问：
- 宇宙黎明时期的第一代星系与恒星是如何诞生的？
- 驱动宇宙加速膨胀的暗能量与暗物质究竟由什么构成？
- 银河系中到底蕴藏着多少颗系外行星系统？
- 超大质量黑洞是如何在早期宇宙中以超乎寻常的速度狂暴生长的？
- 在遥远深空的哪颗蓝色斑点上，正孕育着地球之外的未知生命？`,
        graphic: "telescope"
      },
      {
        heading: "🌟 The big idea",
        headingZh: "🌟 核心洞见：六大前沿的合奏",
        content: `The most interesting discoveries may be things scientists are not expecting.

The future of astronomy is not just about seeing farther. It is about seeing the Universe in new ways. And this connects all six topics together:
- Exoplanets → find worlds beyond our Solar System.
- Black holes → study objects that cannot be seen directly.
- Gravitational waves → detect ripples produced by violent cosmic events.
- AI → process enormous amounts of astronomical data.
- Multi-wavelength astronomy → observe the Universe using different kinds of light.
- Future astronomy → combine these technologies to discover things we have never seen before.`,
        contentZh: `最令人振奋的科学突破，往往正是那些完全超出人类现有理论预期的未知事物。

未来天文学的崇高使命，不仅仅是“看得更远”，更是“以超越认知的全新方式理解宇宙”。而这也将本应用的六大前沿完美串联：
- 🪐 系外行星 ➔ 寻觅太阳系外的奇异世界
- 🕳️ 黑洞深渊 ➔ 破解无法直接看见的引力奇迹
- 🌊 时空引力波 ➔ 倾听宇宙至暴碰撞的脉动
- 🤖 天文智能 ➔ 驭驭 PB 级海量信息风暴
- 🌈 多波段光谱 ➔ 拼接超越人眼的全景真相
- 🚀 未来天文学 ➔ 融汇一切尖端科技，叩响无垠星空的永恒之门！`,
        graphic: "telescope"
      }
    ]
  }
];
