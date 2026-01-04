/**
 * 老张API 多语言国际化脚本
 * 支持中文(zh)和英文(en)自动切换
 * 翻译内容内嵌，支持静态页面（file://协议）
 */

class I18n {
  constructor() {
    this.defaultLang = 'zh';
    this.supportedLangs = ['zh', 'en'];
    this.currentLang = this.detectLanguage();

    // 内嵌翻译数据
    this.translations = {
      zh: {
        "meta": {
          "title": "老张API - 可能是最好的 OpenAI&Claude API 中转站",
          "description": "企业级专业稳定的 OpenAI GPT-5/Claude Opus 4.5/Gemini 3 等全模型官方同源接口的中转分发"
        },
        "promo": {
          "text": "<strong>nano banana pro API</strong> 官方2折！",
          "price": "$0.05/次",
          "features": "· 高并发 · 稳定可靠",
          "cta": "立即体验 →"
        },
        "nav": {
          "brand": "老张API",
          "home": "首页",
          "key": "KEY",
          "log": "日志",
          "status": "状态",
          "pricing": "价格",
          "aiImage": "🎨 免费AI生图",
          "docs": "开发文档",
          "login": "登录 | 注册"
        },
        "hero": {
          "title": "老张API，聚合优秀的AI大模型",
          "description": "企业级专业稳定的 <b>OpenAI/Gemini/Claude 全系最新模型</b> <b>官方同源接口</b>的中转分发。不限速，不过期，不惧封号，按量计费，长期可靠服务；",
          "card1Title": "优势 1：接入简易、快速上手",
          "card1Desc": "真开箱即用，注册即赠送0.05美金额度，免费获得API Key。立马跑通！全部模型可用",
          "card2Title": "优势 2：性价比高、消费透明",
          "card2Desc": "官网充值太麻烦！本站约官网 8 折，量大从优，可开发票；每次请求都有日志",
          "card3Title": "优势 3：官网同源，稳定可靠",
          "card3Desc": "源自官网直接转发，加密传输，规避平台封号，专业技术确保你可安全、稳定使用",
          "cta": "立即免费注册",
          "ctaNote": "(赠送$0.05美金，各种模型都能用)"
        },
        "usage": {
          "title": "两种典型使用场景",
          "subtitle": "3 分钟可以跑通的 OpenAI、Claude 、Gemini 调用，天下武功，唯快不破。<br>本站可能是对 API 新手最友好的网站：老张API。",
          "codeTitle": "💻 代码调用（能改代码，一定能用）",
          "copy": "复制",
          "getKey": "👉 获取 API Key？",
          "viewToken": "点击查看令牌",
          "moreCode": "📝 更多示例代码、最佳实践，",
          "viewDocs": "查看文档 >>",
          "toolTitle": "🔧 第三方工具使用",
          "step1Title": "1. 配置本站的 Key",
          "step1Desc": "在第三方工具的设置中填入从",
          "step1Link": "老张API获取的密钥",
          "step2Title": "2. 修改代理地址",
          "step2Desc": "将API地址修改为：",
          "toolHelp": "👨‍💻 99%用户已跑通，遇到卡点截图发给 Telegram：@laozhang_cn",
          "moreHelp": "📚 更多教程 >>",
          "helpCenter": "老张API 帮助中心"
        },
        "quickstart": {
          "title": "快速开始，只需三步 ↓",
          "step1Title": "🖥️ 1、注册「老张API」账号",
          "step1Desc": "<strong><a href=\"https://api.laozhang.ai/register/?aff_code=0Y5h\" target=\"_blank\" rel=\"noopener\" class=\"text-blue-600 hover:underline\">免费注册</a></strong>：将自动赠送 0.05 美金余额，测试阶段跑通绝对没问题~",
          "step2Title": "🔑 2、获得 API Key",
          "step2Desc": "后台的<a href=\"https://api.laozhang.ai/token\" target=\"_blank\" rel=\"noopener\" class=\"text-blue-600 hover:underline\"> 令牌 </a>栏目，可直接复制「默认令牌」使用，或生成新的令牌即 Key，Key 的格式是：<code class=\"code-highlight\">sk-xxxx......</code>",
          "step3Title": "🔄 3、修改代码的请求地址",
          "step3Method": "<strong>调用方式</strong>：只需要将请求地址和 Key 修改其他与 OpenAI 官方完全一致，简单来说：将 <code class=\"code-highlight\">https://api.openai.com</code> 全局替换改成 <code class=\"code-highlight\">https://api.laozhang.ai</code>；并使用在『老张API』网站后台的默认令牌，其他代码层面无需做任何改动。",
          "step3Model": "<strong>模型方面</strong>：本站支持主要 OpenAI 和 Claude 可用模型，注册即可试用。<a href=\"https://api.laozhang.ai/account/profile\" target=\"_blank\" rel=\"noopener\" class=\"text-blue-600 hover:underline\"> 账户后台 > 一键复制模型名称 </a>",
          "codeExample": "代码示例(快速上手)",
          "step3Note": "注意：某些程序需要添加 <code class=\"code-highlight\">v1</code> 示例，具体有 3 种情况，请测试",
          "step4Title": "📊 4、查看日志，一目了然消耗",
          "step4Desc": "通过前三步，快速跑通。而后台的<a href=\"https://api.laozhang.ai/log\" target=\"_blank\" rel=\"noopener\" class=\"text-blue-600 hover:underline\"> 日志 </a>栏目，可以查看每次调用的详细日志。每一次请求的消耗清清楚楚。",
          "step4Note": "新户注册赠送的额度用完后，可以随时在线充值，余额即刻到账，可继续调用 API。",
          "step5Title": "💰 5、费率与充值",
          "step5Item1": "<strong>性价比高：</strong>若发现账户余额不足，API 调用时会有提示，此时欢迎充值购买。本站充值是低于美金汇率的 1:7，最低 5 美金即 35 元起充，即比官网省钱、且无其他任何手续费，即可享受到官网同源的 API 资源；支持开发票。",
          "step5Item2": "<strong>费率一致：</strong>在模型的调用费率上保持和官网的一致，绝无玩套路。模型价格请看",
          "viewPricing": "点击查看模型价格",
          "step5Item3": "<strong>联系我们：</strong>Telegram：@laozhang_cn，欢迎交流反馈。",
          "referral": "邀请好友返利：复制链接 >",
          "step6Title": "🔍 6、附：API 支持的场景",
          "step6Item1": "官方代码示例本站供的代码示例，任何支持填写 API 代理地址的第三方封装程序；",
          "step6Item2": "GitHub上大多数开源OpenAI第三方「对话聊天」程序（如ChatGPT Next Web、Lobe Chat等）；",
          "step6Item3": "自定义开发项目（如数据集对比实验、LangChain等）；",
          "step6Item4": "浏览器插件（如OpenAI Translator、Glarity、沉浸式翻译）；"
        },
        "docs": {
          "title": "开发文档",
          "helpCenter": "老张API 帮助中心",
          "freeTry": "免注册试用？！"
        },
        "pricing": {
          "title": "价格说明",
          "rechargeTitle": "充值说明（可开票）",
          "minRecharge": "最低充值",
          "minRechargeValue": "5 美金 = 35 元",
          "ratio": "充值比例",
          "ratioValue": "1:7 汇率",
          "payment": "支付方式",
          "paymentValue": "支付宝在线充值",
          "principleTitle": "定价原则",
          "principle1Label": "原则一：",
          "principle1": "模型齐全 上新相对快",
          "principle2Label": "原则二：",
          "principle2": "消耗机制 与官方一致",
          "principle3Label": "原则三：",
          "principle3": "按量计费 用多少买多少",
          "benefitTitle": "新用户福利",
          "benefit1Label": "注册即送",
          "benefit1Value": "0.05 美金",
          "benefit2Label": "免费测试",
          "benefit2Value": "全部模型可用",
          "benefit3Label": "余额永久有效",
          "benefit3Value": "不过期",
          "viewFullPricing": "查看不同模型的完整价格表"
        },
        "faq": {
          "title": "老张API - 常见问题",
          "q1": "1）老张API 有什么产品优势？",
          "a1": "<ul class=\"list-none space-y-2\"><li>🛡️ <strong>稳定：</strong>老张API 将用户请求经美国服务器直接发并即时响应，保障服务稳定；</li><li>⚡ <strong>快速：</strong>老张API 专业技术团队持续优化中转服务的线路速度，来保证使用体验；</li><li>🔄 <strong>方便：</strong>基本上所有用到 OpenAI&Claude API 的地方，老张API 都可以无缝替代；</li><li>💸 <strong>省心：</strong>没有包月，没有会员，没有限时，用多少买多少，不用担心过期；</li><li>🚀 <strong>自由：</strong>没有官方网与调用次数限制，支持数万并发，企业级 API 品质；</li><li>🌐 <strong>聚合</strong>汇聚多个大模型，统一对接格式，如 Claude 使用 OpenAI 的格式，只需要换模型名称即可。并将逐步接入更多模。</li></ul>",
          "q2": "2）老张API 支持哪些OpenAI模型？Claude 也支持吗？",
          "a2": "老张API支持所有主流 AI 模型，包括 OpenAI 最新的 GPT-5、GPT-5 mini、o3、o4-mini 等，也支持 Claude Opus 4.5、Sonnet 4.5、Haiku 4.5，以及 Google Gemini 3 Pro/Flash、Grok、Deepseek 等。具体可用模型列表可在您的账户后台查看。",
          "q3": "3）如何充值 老张API 账户？",
          "a3": "登录您的老张API账户后，在「充值」页选择充值金额，支持支付宝付款。最低充值金额为5美元，充值比例为1:7（即5美元=35元人民币）。充值到账后即可用于调用。支持对公转账和开票（下单后联系 Telegram @laozhang_cn，提供付款记录和抬头）",
          "q4": "4）OpenAI API 是怎么计费的？跟什么有关？",
          "a4": "按量计费，计费单位是 Tokens，与使用的模型、输入和输出的长度有关。您自行测试一下，每次请求都有明细日志可以查询，每笔消耗清清楚楚。这样可以估算自己的项目需要多少的消耗。",
          "q5": "5）老张API 的费率如何计算？额度是什么？",
          "a5": "老张API的费率与OpenAI官方保持一致，没有额外加价。具体每个模型的费率可以在您的账户后台或我们的定价页面查看。额度 = 分组倍率 * 模型倍率 * （提示 token 数 + 补全 token 数 * 补全倍率）。一句话介绍：【老张API的费率计算和官方一致】。",
          "q6": "6）如何查看 API 使用记录和消费详细？",
          "a6": "在您的API账户后台，「日志」页面可以查看每次API调用的详细记录，包括使用的模型、消耗的token数量和对应的费用。",
          "q7": "7）站长您推荐我作为初学者，使用什么模型？",
          "a7": "OpenAI 方面，GPT-5 是当前最强大的旗舰模型，GPT-5 mini 则是性价比之选，速度快价格低。推理任务推荐 o3 或 o4-mini 模型。Claude 方面，Opus 4.5 适合复杂任务和代码生成，Sonnet 4.5 和 Haiku 4.5 则是速度和成本的平衡选择。具体模型名称请从「账户后台」栏目查看、复制。",
          "q8": "8）我是 ChatGPT Plus 用户，能否用官网直连 API？",
          "a8": "科普下：Plus 和 API 是两个体系，完全独立分开的。在 OpenAI 官网开发后台 API Key 地方，验证了海外手机号码也用不了 API，还是需要充值额度的（需要海外信用卡，很麻烦）。本站也另外提供直连 API 代充服务，价格相对高，远没有中转站性价比高。",
          "q9": "9）老张API 如何处理内容安全合规性？",
          "a9": "<p>老张API采取以下措施处理内容安全和合规性：</p><ul class=\"list-disc pl-5 mt-2\"><li><strong>内容审核：</strong> 已接入专业官方的内容审核 API，识别并拦截潜在违规内容而不返回。</li><li><strong>合规要求：</strong> 用户必须遵守所在地区的法律法规。老张API 平台保留对违规行为采取行动的权利。</li><li><strong>违规后果：</strong> 重复或严重违规可能导致账户被暂停或终止，已支付的费用不予退还。</li></ul><p class=\"mt-4\">建议用户仔细阅读我们的服务条款和使用政策。如有任何疑问，请联系我们的支持团队。</p>",
          "q10": "10）老张API 如何保障数据安全？",
          "a10": "老张API高度重视用户数据安全，采取了多重措施保护您的信息：<ul class=\"list-disc pl-5 mt-2\"><li><strong>端到端加密：</strong>所有数据传输均采用TLS 1.3协议加密，确保数据在传输过程中的安全。</li><li><strong>最小化数据存储：</strong>老张API 仅为中转平台，不会存储或查看您的API请求内容（输入和输出）。</li><li><strong>有限日志记录：</strong>老张API 只记录基础日志包括使用的模型和Tokens长度，用于故障排查和计费。日志不包含具体内容。</li><li><strong>短期日志保留：</strong>出于客户数据安全考虑和资源优化，日志仅保留7天。</li><li><strong>严格访问控制：</strong>只有经过授权的技术人员才能在必要时访问匿名化的日志数据。</li><li><strong>定期安全审计：</strong>老张API 团队会定期进行安全评估和更新，以应对新的安全挑战。</li><li><strong>合规性：</strong>老张API 团队严格遵守相关的数据保护法规和行业标准。</li></ul><p class=\"mt-4\">如果您对数据安全有任何疑问，欢迎联系我们的技术支持团队。</p>"
        },
        "cta": {
          "register": "立即免费注册API",
          "note": "(每个用户均可赠送$0.05美金测试额度，确保用起来)"
        },
        "footer": {
          "backup": "备用API接口（免 Cloudflare 盾，部地区调用速度更快）：",
          "copyright": "@2024 老张API All rights reserved",
          "terms": "用户协议",
          "privacy": "隐私政策",
          "contact": "Telegram：@laozhang_cn | 联系邮箱：hi@laozhang.ai",
          "links": "友情链接：",
          "openaiDocs": "OpenAI开发文档",
          "claudeDocs": "Claude开发文档",
          "blog": "老张API 博客",
          "docLink": "开发文档"
        }
      },
      en: {
        "meta": {
          "title": "LaoZhang API - The Best OpenAI & Claude API Gateway",
          "description": "Enterprise-grade stable OpenAI GPT-5/Claude Opus 4.5/Gemini 3 and all model official API relay service"
        },
        "promo": {
          "text": "<strong>nano banana pro API</strong> 80% OFF Official Price!",
          "price": "$0.05/request",
          "features": "· High Concurrency · Reliable",
          "cta": "Try Now →"
        },
        "nav": {
          "brand": "LaoZhang API",
          "home": "Home",
          "key": "KEY",
          "log": "Logs",
          "status": "Status",
          "pricing": "Pricing",
          "aiImage": "Free AI Image",
          "docs": "Docs",
          "login": "Login | Sign Up"
        },
        "hero": {
          "title": "LaoZhang API - Premium AI Models Aggregator",
          "description": "Enterprise-grade stable <b>OpenAI/Gemini/Claude latest models</b> <b>official API</b> relay service. No rate limits, no expiration, no account bans, pay-as-you-go, long-term reliable service.",
          "card1Title": "Advantage 1: Easy Integration, Quick Start",
          "card1Desc": "Truly plug-and-play. Get $0.05 free credit upon registration, instant API Key. Start immediately! All models available.",
          "card2Title": "Advantage 2: Cost-Effective, Transparent Billing",
          "card2Desc": "Official recharge is complicated! We offer ~20% off official prices, volume discounts available, invoices supported. Every request is logged.",
          "card3Title": "Advantage 3: Official Source, Stable & Reliable",
          "card3Desc": "Direct relay from official API, encrypted transmission, avoid account bans. Professional technology ensures safe and stable usage.",
          "cta": "Register Free Now",
          "ctaNote": "(Get $0.05 free credit, works with all models)"
        },
        "usage": {
          "title": "Two Typical Use Cases",
          "subtitle": "Get OpenAI, Claude, Gemini API working in 3 minutes. Speed is everything.<br>This might be the most beginner-friendly API site: LaoZhang API.",
          "codeTitle": "Code Integration (If you can edit code, you can use it)",
          "copy": "Copy",
          "getKey": "Get API Key?",
          "viewToken": "Click to view tokens",
          "moreCode": "More code examples & best practices,",
          "viewDocs": "View Docs >>",
          "toolTitle": "Third-Party Tool Integration",
          "step1Title": "1. Configure Your Key",
          "step1Desc": "Enter the key obtained from",
          "step1Link": "LaoZhang API",
          "step2Title": "2. Change Proxy Address",
          "step2Desc": "Set the API address to:",
          "toolHelp": "99% users succeeded. If stuck, send screenshot to Telegram: @laozhang_cn",
          "moreHelp": "More Tutorials >>",
          "helpCenter": "LaoZhang API Help Center"
        },
        "quickstart": {
          "title": "Quick Start in 3 Steps",
          "step1Title": "1. Register LaoZhang API Account",
          "step1Desc": "<strong><a href=\"https://api.laozhang.ai/register/?aff_code=0Y5h\" target=\"_blank\" rel=\"noopener\" class=\"text-blue-600 hover:underline\">Free Registration</a></strong>: Get $0.05 free credit automatically, plenty for testing~",
          "step2Title": "2. Get Your API Key",
          "step2Desc": "In the <a href=\"https://api.laozhang.ai/token\" target=\"_blank\" rel=\"noopener\" class=\"text-blue-600 hover:underline\">Token</a> section of dashboard, copy the \"Default Token\" or generate a new one. Key format: <code class=\"code-highlight\">sk-xxxx......</code>",
          "step3Title": "3. Update Request URL",
          "step3Method": "<strong>How to use</strong>: Simply change the request URL and Key, everything else stays the same as OpenAI official. Replace <code class=\"code-highlight\">https://api.openai.com</code> with <code class=\"code-highlight\">https://api.laozhang.ai</code>; use your token from LaoZhang API dashboard. No other code changes needed.",
          "step3Model": "<strong>Models</strong>: We support all major OpenAI and Claude models. <a href=\"https://api.laozhang.ai/account/profile\" target=\"_blank\" rel=\"noopener\" class=\"text-blue-600 hover:underline\">Account Dashboard > Copy Model Names</a>",
          "codeExample": "Code Example (Quick Start)",
          "step3Note": "Note: Some programs need <code class=\"code-highlight\">v1</code> suffix. There are 3 variants to test:",
          "step4Title": "4. View Logs, Track Usage",
          "step4Desc": "Complete the first 3 steps to get started. Check the <a href=\"https://api.laozhang.ai/log\" target=\"_blank\" rel=\"noopener\" class=\"text-blue-600 hover:underline\">Logs</a> section to view detailed call logs. Every request cost is crystal clear.",
          "step4Note": "After free credit is used, you can recharge online anytime. Balance reflects immediately and API calls continue.",
          "step5Title": "5. Pricing & Recharge",
          "step5Item1": "<strong>Cost-Effective:</strong> When balance is low, API will notify you. Recharge rate is 1:7 (below USD exchange rate), minimum $5 = 35 RMB. Cheaper than official, no extra fees, same official API resources. Invoices available.",
          "step5Item2": "<strong>Same Rates:</strong> Model pricing matches official rates exactly. No hidden tricks. See model prices:",
          "viewPricing": "View Model Pricing",
          "step5Item3": "<strong>Contact Us:</strong> Telegram: @laozhang_cn, welcome feedback.",
          "referral": "Refer friends for rewards: Copy link >",
          "step6Title": "6. Supported Use Cases",
          "step6Item1": "Official code examples and any third-party program supporting custom API proxy;",
          "step6Item2": "Most GitHub OpenAI third-party chat apps (ChatGPT Next Web, Lobe Chat, etc.);",
          "step6Item3": "Custom development projects (dataset experiments, LangChain, etc.);",
          "step6Item4": "Browser extensions (OpenAI Translator, Glarity, Immersive Translate);"
        },
        "docs": {
          "title": "Documentation",
          "helpCenter": "LaoZhang API Help Center",
          "freeTry": "Free Trial Without Registration?!"
        },
        "pricing": {
          "title": "Pricing",
          "rechargeTitle": "Recharge Info (Invoice Available)",
          "minRecharge": "Minimum Recharge",
          "minRechargeValue": "$5 = 35 RMB",
          "ratio": "Exchange Rate",
          "ratioValue": "1:7 Rate",
          "payment": "Payment Method",
          "paymentValue": "Alipay Online Payment",
          "principleTitle": "Pricing Principles",
          "principle1Label": "Principle 1:",
          "principle1": "Complete models, fast updates",
          "principle2Label": "Principle 2:",
          "principle2": "Same consumption as official",
          "principle3Label": "Principle 3:",
          "principle3": "Pay as you go",
          "benefitTitle": "New User Benefits",
          "benefit1Label": "Free Credit",
          "benefit1Value": "$0.05",
          "benefit2Label": "Free Testing",
          "benefit2Value": "All models available",
          "benefit3Label": "Balance Never Expires",
          "benefit3Value": "No expiration",
          "viewFullPricing": "View full pricing for all models"
        },
        "faq": {
          "title": "LaoZhang API - FAQ",
          "q1": "1) What are the advantages of LaoZhang API?",
          "a1": "<ul class=\"list-none space-y-2\"><li>🛡️ <strong>Stable:</strong> LaoZhang API relays requests through US servers with instant response, ensuring service stability.</li><li>⚡ <strong>Fast:</strong> Professional tech team continuously optimizes relay service speed for better experience.</li><li>🔄 <strong>Convenient:</strong> LaoZhang API can seamlessly replace OpenAI & Claude API in almost all scenarios.</li><li>💸 <strong>Hassle-Free:</strong> No monthly fees, no membership, no time limits. Pay for what you use, never expires.</li><li>🚀 <strong>Unlimited:</strong> No rate limits, supports tens of thousands concurrent requests. Enterprise-grade API quality.</li><li>🌐 <strong>Aggregated:</strong> Multiple AI models unified interface. Use Claude with OpenAI format, just change model name. More models coming.</li></ul>",
          "q2": "2) Which OpenAI models does LaoZhang API support? Claude too?",
          "a2": "LaoZhang API supports all mainstream AI models including OpenAI's latest GPT-5, GPT-5 mini, o3, o4-mini, Claude Opus 4.5, Sonnet 4.5, Haiku 4.5, Google Gemini 3 Pro/Flash, Grok, Deepseek, and more. Check available models in your account dashboard.",
          "q3": "3) How to recharge LaoZhang API account?",
          "a3": "After logging in, go to \"Recharge\" page, select amount, pay with Alipay. Minimum $5, rate 1:7 ($5 = 35 RMB). Balance available immediately. Bank transfer and invoices supported (contact Telegram @laozhang_cn with payment proof).",
          "q4": "4) How is OpenAI API billed? What affects pricing?",
          "a4": "Pay-per-use, billed in Tokens based on model, input and output length. Test it yourself - every request has detailed logs showing exact costs. This helps estimate your project's consumption.",
          "q5": "5) How are LaoZhang API rates calculated? What is quota?",
          "a5": "LaoZhang API rates match OpenAI official pricing exactly, no markup. Check specific model rates in your dashboard or pricing page. Quota = Group Multiplier × Model Multiplier × (Prompt Tokens + Completion Tokens × Completion Multiplier). In short: LaoZhang API rates are same as official.",
          "q6": "6) How to view API usage records and billing details?",
          "a6": "In your API account dashboard, the \"Logs\" page shows detailed records of each API call including model used, tokens consumed, and corresponding cost.",
          "q7": "7) Which model do you recommend for beginners?",
          "a7": "For OpenAI: GPT-5 is the most powerful flagship model, GPT-5 mini offers best value with fast speed and low price. For reasoning tasks, try o3 or o4-mini. For Claude: Opus 4.5 suits complex tasks and code generation, Sonnet 4.5 and Haiku 4.5 balance speed and cost. Check exact model names in your account dashboard.",
          "q8": "8) I'm a ChatGPT Plus user, can I use official API directly?",
          "a8": "Note: Plus and API are completely separate systems. Even with verified phone number on OpenAI developer dashboard, you still need to add credit (requires overseas credit card, very complicated). We also offer direct API recharge service, but it's pricier and less cost-effective than our relay service.",
          "q9": "9) How does LaoZhang API handle content safety compliance?",
          "a9": "<p>LaoZhang API takes the following measures for content safety and compliance:</p><ul class=\"list-disc pl-5 mt-2\"><li><strong>Content Moderation:</strong> Professional official content moderation API integrated to identify and block potential violations.</li><li><strong>Compliance Requirements:</strong> Users must comply with local laws and regulations. LaoZhang API reserves the right to take action against violations.</li><li><strong>Violation Consequences:</strong> Repeated or serious violations may result in account suspension or termination, with no refund for paid fees.</li></ul><p class=\"mt-4\">We recommend users carefully read our Terms of Service and Usage Policy. Contact our support team with any questions.</p>",
          "q10": "10) How does LaoZhang API ensure data security?",
          "a10": "LaoZhang API takes data security seriously with multiple protection measures:<ul class=\"list-disc pl-5 mt-2\"><li><strong>End-to-End Encryption:</strong> All data transmission uses TLS 1.3 protocol encryption for transit security.</li><li><strong>Minimal Data Storage:</strong> As a relay platform, LaoZhang API does not store or view your API request content (input and output).</li><li><strong>Limited Logging:</strong> Only basic logs including model used and token count for troubleshooting and billing. No content logged.</li><li><strong>Short-term Retention:</strong> For data security and resource optimization, logs are kept for only 7 days.</li><li><strong>Strict Access Control:</strong> Only authorized technical staff can access anonymized log data when necessary.</li><li><strong>Regular Security Audits:</strong> Regular security assessments and updates to address new security challenges.</li><li><strong>Compliance:</strong> Strict adherence to relevant data protection regulations and industry standards.</li></ul><p class=\"mt-4\">Contact our technical support team if you have any data security questions.</p>"
        },
        "cta": {
          "register": "Register Free API Now",
          "note": "(Every user gets $0.05 free credit to test)"
        },
        "footer": {
          "backup": "Backup API (No Cloudflare shield, faster in some regions):",
          "copyright": "@2024 LaoZhang API All rights reserved",
          "terms": "Terms of Service",
          "privacy": "Privacy Policy",
          "contact": "Telegram: @laozhang_cn | Email: hi@laozhang.ai",
          "links": "Links:",
          "openaiDocs": "OpenAI Documentation",
          "claudeDocs": "Claude Documentation",
          "blog": "LaoZhang API Blog",
          "docLink": "Documentation"
        }
      }
    };
  }

  /**
   * 检测用户语言偏好
   */
  detectLanguage() {
    // 1. 优先使用 localStorage 存储的偏好
    try {
      const saved = localStorage.getItem('laozhang-lang');
      if (saved && this.supportedLangs.includes(saved)) {
        return saved;
      }
    } catch (e) {
      // localStorage 可能不可用
    }

    // 2. 检测浏览器语言
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang && browserLang.startsWith('zh')) {
      return 'zh';
    }

    // 3. 非中文用户默认英文
    return 'en';
  }

  /**
   * 获取翻译文本
   */
  t(key) {
    const keys = key.split('.');
    let value = this.translations[this.currentLang];

    for (const k of keys) {
      if (value === undefined || value === null) {
        return key;
      }
      value = value[k];
    }

    return value !== undefined ? value : key;
  }

  /**
   * 翻译页面所有带 data-i18n 属性的元素
   */
  translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = this.t(key);

      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translation;
      } else if (el.tagName === 'IMG') {
        el.alt = translation;
      } else {
        el.innerHTML = translation;
      }
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      el.title = this.t(key);
    });

    document.documentElement.lang = this.currentLang === 'zh' ? 'zh-CN' : 'en';
    this.updateMetaTags();
  }

  /**
   * 更新页面 meta 标签
   */
  updateMetaTags() {
    const title = this.t('meta.title');
    const description = this.t('meta.description');

    if (title && title !== 'meta.title') {
      document.title = title;
    }

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && description && description !== 'meta.description') {
      metaDesc.content = description;
    }
  }

  /**
   * 切换语言
   */
  switchLanguage(lang) {
    if (!this.supportedLangs.includes(lang)) {
      console.warn(`Language ${lang} is not supported`);
      return;
    }

    this.currentLang = lang;
    try {
      localStorage.setItem('laozhang-lang', lang);
    } catch (e) {
      // localStorage 可能不可用
    }
    this.translatePage();
    this.updateLanguageButton();
  }

  /**
   * 切换到另一种语言
   */
  toggleLanguage() {
    const newLang = this.currentLang === 'zh' ? 'en' : 'zh';
    this.switchLanguage(newLang);
  }

  /**
   * 更新语言切换按钮状态
   */
  updateLanguageButton() {
    const btn = document.getElementById('lang-switcher');
    const langText = btn?.querySelector('.lang-text');
    if (langText) {
      langText.textContent = this.currentLang === 'zh' ? 'EN' : '中文';
    }
    if (btn) {
      btn.setAttribute('aria-label', this.currentLang === 'zh' ? 'Switch to English' : '切换到中文');
    }
  }

  /**
   * 初始化
   */
  init() {
    this.translatePage();
    this.updateLanguageButton();
    console.log(`I18n initialized with language: ${this.currentLang}`);
  }
}

// 创建全局实例
const i18n = new I18n();

// DOM 加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  i18n.init();
});
