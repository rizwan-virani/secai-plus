/* ============================================================================
   secai+  ::  contentData.js
   Exam facts (single source of truth), per-domain metadata + objectives, PBQ
   format definitions, curated external resources, and the Exam-Mechanics and
   Career-Guidance readers. The dense per-domain reading content lives in
   lazy-loaded modules (assets/js/content/domainN.js) that populate SECAI.reading.

   This file loads first and establishes the global SECAI namespace consumed by
   quizEngine.js and app.js.

   Authored by Professor Rizwan Virani, San Jacinto College.
   ========================================================================== */
window.SECAI = window.SECAI || {};

/* ---------------------------------------------------------------------------
   SINGLE SOURCE OF TRUTH for every exam figure. The dashboard cards, mock-exam
   engine, scoring, analytics, readiness projection, and the readers below all
   read from this object — no exam figure is duplicated as a literal elsewhere.
   --------------------------------------------------------------------------- */
SECAI.exam = {
  code: "CY0-001",
  name: "CompTIA SecAI+",
  minutes: 60,
  maxQuestions: 60,
  scaleLow: 100, scaleHigh: 900, passing: 600,
  domains: 4,
  launched: "2026"
};
/* Local alias so the readers below can interpolate the figures instead of
   re-typing them — keeps the single-source-of-truth guarantee intact. */
var E = SECAI.exam;

/* Per-domain metadata. `objectives` mirror the official CY0-001 exam outline;
   `weight` values are the official domain percentages (17/40/24/19 = 100). */
SECAI.domainMeta = [
  { id: 1, weight: 17, color: "d1", icon: "🧠", title: "Basic AI Concepts for Cybersecurity", sectionCount: 12,
    short: "The vocabulary and mechanics of AI as it touches security: AI/ML types and techniques, how models are trained and prompted, the importance of data security to AI, AI-driven threats, and security across the AI life cycle.",
    objectives: [
      { id: "1.1", t: "Compare and contrast various AI types and techniques used in cybersecurity" },
      { id: "1.2", t: "Explain the importance of data security in relation to AI" },
      { id: "1.3", t: "Explain the importance of security throughout the life cycle of AI" }
    ] },
  { id: 2, weight: 40, color: "d2", icon: "🛡", title: "Securing AI Systems", sectionCount: 18,
    short: "The largest domain: threat-modeling AI systems, implementing security, access, and data controls for models and pipelines, monitoring and auditing AI, and analyzing attack evidence to select compensating controls across on-prem, cloud, and hybrid deployments.",
    objectives: [
      { id: "2.1", t: "Given a scenario, use AI threat-modeling resources" },
      { id: "2.2", t: "Given a set of requirements, implement security controls for AI systems" },
      { id: "2.3", t: "Given a scenario, implement appropriate access controls for AI systems" },
      { id: "2.4", t: "Given a scenario, implement data security controls for AI systems" },
      { id: "2.5", t: "Given a scenario, implement monitoring and auditing for AI systems" },
      { id: "2.6", t: "Given a scenario, analyze the evidence of an attack and suggest compensating controls for AI" }
    ] },
  { id: 3, weight: 24, color: "d3", icon: "🤖", title: "AI-Assisted Security", sectionCount: 12,
    short: "Using AI to do security work: AI-enabled tools for detection, triage, and response; how AI enables and enhances attack vectors; and automating security workflows such as alert correlation, threat hunting, and response orchestration.",
    objectives: [
      { id: "3.1", t: "Given a scenario, use AI-enabled tools to facilitate security tasks" },
      { id: "3.2", t: "Explain how AI enables or enhances attack vectors" },
      { id: "3.3", t: "Given a scenario, use AI to automate security tasks" }
    ] },
  { id: 4, weight: 19, color: "d4", icon: "⚖", title: "AI Governance, Risk & Compliance", sectionCount: 12,
    short: "Governance structures that support trustworthy AI, the risks AI introduces to an organization, and the impact of compliance and regulation — NIST AI RMF, the EU AI Act, ISO/IEC 42001, GDPR — on the business use and development of AI.",
    objectives: [
      { id: "4.1", t: "Explain organizational governance structures that support AI" },
      { id: "4.2", t: "Explain risks associated with AI" },
      { id: "4.3", t: "Summarize the impact of compliance on business use and development of AI" }
    ] }
];

/* The PBQ formats. `domainColor` just drives the badge tint. */
SECAI.pbqFormats = [
  { id: 1, icon: "🎯", domainColor: 2, obj: "2.1", badge: "THREAT MODELING", title: "AI Threat Modeling",
    desc: "Given an AI system exhibit, identify the threat surface, classify the adversarial technique against a framework (MITRE ATLAS / OWASP LLM Top 10), and choose the right mitigation per field.",
    long: "Each scenario presents an AI/ML system — a training pipeline, an LLM-backed application, an inference endpoint. Work the threat model field by field: name the <b>asset</b> at risk, the <b>adversarial technique</b> (poisoning, evasion, extraction, prompt injection), the <b>MITRE ATLAS / OWASP LLM</b> mapping, and the <b>mitigation</b> that best reduces the risk." },
  { id: 2, icon: "🛡", domainColor: 2, obj: "2.2 / 2.3 / 2.4", badge: "AI CONTROLS", title: "Securing AI Systems & Controls",
    desc: "Select the correct security, access, and data controls to protect an AI model, its training data, and its inference API across on-prem, cloud, and hybrid deployments.",
    long: "You are hardening an AI deployment. For each requirement — protecting the model artifact, gating the inference API, securing the training corpus, isolating the pipeline — choose the right <b>control</b>: RBAC/ABAC scoping, input/output guardrails, encryption and tokenization, network isolation, rate limiting, and secrets management." },
  { id: 3, icon: "🚨", domainColor: 2, obj: "2.5 / 2.6", badge: "ATTACK ANALYSIS", title: "Adversarial Attack Analysis",
    desc: "Read monitoring evidence — logs, prompts, model metrics — identify the AI-specific attack in progress, set severity, and choose a compensating control.",
    long: "As the on-call analyst for an AI platform, read the exhibit: anomalous inference logs, a suspicious prompt, a sudden accuracy drop. Declare the <b>attack</b> (prompt injection, jailbreak, data poisoning, model evasion, membership inference, model theft), the <b>severity</b>, and the correct <b>compensating control</b> to contain it." },
  { id: 4, icon: "⚙", domainColor: 3, obj: "3.1 / 3.3", badge: "AI-ASSISTED SOC", title: "AI-Assisted Detection & Automation",
    desc: "Configure an AI-enabled security workflow — anomaly detection, alert triage, SOAR enrichment — choosing the right model, data source, and automation action per field.",
    long: "Build an AI-assisted SOC pipeline. For each stage select the right <b>technique</b> (supervised classifier, isolation forest, LLM summarizer), the correct <b>data source</b> and feature, the appropriate <b>automation action</b>, and the human-in-the-loop checkpoint that keeps the workflow safe and auditable." },
  { id: 5, icon: "⚖", domainColor: 4, obj: "4.1 / 4.2 / 4.3", badge: "GOVERNANCE", title: "AI Governance & Compliance Mapping",
    desc: "Map governance and compliance requirements to the right framework, control, or role: NIST AI RMF functions, the EU AI Act risk tiers, ISO/IEC 42001, and GDPR obligations.",
    long: "Given an organizational requirement, engineer the governance response. For each field choose the correct <b>framework or function</b> (NIST AI RMF Govern/Map/Measure/Manage, EU AI Act risk tier, ISO/IEC 42001 clause), the accountable <b>role</b>, and the <b>compliance obligation</b> that applies to the business use of AI." }
];

/* Curated free study resources for AI security. */
SECAI.resources = [
  { icon: "📄", title: "Official CompTIA SecAI+ (CY0-001) Exam Objectives", host: "comptia.org",
    url: "https://www.comptia.org/",
    desc: "The authoritative exam outline — every objective and sub-bullet CompTIA can test. Download the objectives PDF from the certification page and use it as your master checklist." },
  { icon: "🧭", title: "NIST AI Risk Management Framework (AI RMF 1.0)", host: "nist.gov",
    url: "https://www.nist.gov/itl/ai-risk-management-framework",
    desc: "The reference governance framework for trustworthy AI. Its Govern, Map, Measure, and Manage functions underpin much of Domain 4 and the governance PBQ format." },
  { icon: "🧨", title: "OWASP Top 10 for LLM Applications", host: "owasp.org",
    url: "https://genai.owasp.org/",
    desc: "The canonical list of LLM-specific risks — prompt injection, insecure output handling, training-data poisoning, model theft — mapped to mitigations. Essential for Domains 1–3." },
  { icon: "🗺", title: "MITRE ATLAS — Adversarial Threat Landscape for AI Systems", host: "atlas.mitre.org",
    url: "https://atlas.mitre.org/",
    desc: "An ATT&CK-style knowledge base of real adversarial-ML tactics and techniques against AI systems, with case studies. The backbone of the threat-modeling and attack-analysis material." },
  { icon: "📚", title: "NIST AI 100-2: Adversarial Machine Learning Taxonomy", host: "csrc.nist.gov",
    url: "https://csrc.nist.gov/pubs/ai/100/2/e2023/final",
    desc: "When a definition has to be exact, NIST is the source. AI 100-2 formalizes the taxonomy of evasion, poisoning, privacy, and abuse attacks that the exam vocabulary is built on." },
  { icon: "⚖", title: "EU AI Act & ISO/IEC 42001 Overview", host: "artificialintelligenceact.eu",
    url: "https://artificialintelligenceact.eu/",
    desc: "The EU AI Act's risk-tier model and ISO/IEC 42001 (AI management systems) are the compliance regimes referenced throughout Domain 4. Read the risk classifications and obligations." }
];

/* ---- Reader: Exam Mechanics card. Figures interpolate from SECAI.exam (E). ---- */
SECAI.examMechanics = [
  { heading: "Format, length, and delivery", body:
    "<p>The <strong>" + E.name + " " + E.code + "</strong> is a single exam of <strong>up to " + E.maxQuestions + " questions</strong> to be completed in <strong>" + E.minutes + " minutes</strong>. It is delivered at a Pearson VUE testing center or via OnVUE online proctoring. Because the count is a <em>maximum</em>, your particular form may contain fewer scored items; CompTIA also seeds unscored items it is evaluating for future exams, and you cannot tell which is which — so treat every question as if it counts.</p>" +
    "<p>The exam mixes <strong>multiple-choice</strong> items (single- and multiple-response) with a handful of <strong>performance-based questions (PBQs)</strong>. PBQs are interactive tasks — threat-modeling an AI system, analyzing attack evidence, mapping a governance requirement to a framework — and they typically appear first. They are worth more and consume more time, which leads directly to the single most important time-management rule below.</p>" +
    "<div class='callout exam'><div class='lbl'>Exam tip</div>PBQs front-load the exam and can eat your clock. If a PBQ stalls you, <strong>flag it and move on</strong>. Bank the fast multiple-choice points first, then return with whatever time remains.</div>" },
  { heading: "Scoring: the " + E.scaleLow + "–" + E.scaleHigh + " scale", body:
    "<p>SecAI+ is scored on a <strong>scaled range of " + E.scaleLow + " to " + E.scaleHigh + "</strong>, and the passing score is <strong>" + E.passing + "</strong>. Scaled scoring is not a simple percentage: CompTIA weights items by difficulty and equates across exam forms so that no candidate is advantaged or disadvantaged by drawing a harder set. As a result you cannot reverse-engineer an exact “number correct” from " + E.passing + ", and CompTIA does not publish the raw-to-scaled mapping.</p>" +
    "<p>Practically, strong candidates aim to answer a comfortable margin above the line. There is <strong>no penalty for guessing</strong> — an unanswered question is simply wrong — so you should never leave an item blank. Eliminate obviously wrong options, make your best choice, flag it if unsure, and move on.</p>" +
    "<blockquote>This platform's mock exam reports a scaled score using a transparent linear approximation of the " + E.scaleLow + "–" + E.scaleHigh + " band. Use it as a <em>relative</em> readiness signal — “am I trending toward " + E.passing + "?” — not as a literal prediction of your official score.</blockquote>" },
  { heading: "Question styles and how to read them", body:
    "<p>CompTIA writes “best answer” questions. Often two or three options are <em>plausible</em> and only one is <em>best</em> for the scenario described. Read the <strong>last sentence first</strong> — it usually contains the actual ask (“which control <em>best</em> mitigates…”, “what should the analyst do <em>first</em>…”). Words like <strong>first</strong>, <strong>best</strong>, <strong>most likely</strong>, and <strong>least</strong> are decisive; circle them mentally.</p>" +
    "<ul><li><strong>Multiple-response</strong> items tell you how many to pick (“choose two”). You must get all of them right for credit.</li><li><strong>Scenario</strong> items bury the relevant detail in a paragraph — identify the AI asset, the threat, and the constraint before looking at options.</li><li><strong>PBQs</strong> reward methodical work; partial credit is generally available, so complete every field you can even if unsure of one.</li></ul>" +
    "<div class='callout'><div class='lbl'>Strategy</div>Use the <strong>flag-and-review</strong> workflow. First pass: answer everything you know cold and flag the rest. Second pass: spend remaining minutes only on flagged items. This guarantees you never run out of time with easy points unanswered.</div>" },
  { heading: "Recommended experience and cost", body:
    "<p>There are <strong>no formal prerequisites</strong>, but CompTIA recommends <strong>3–4 years in IT</strong> and <strong>2+ years of hands-on cybersecurity experience</strong>, plus a foundation such as <strong>Security+, CySA+, or PenTest+</strong> (or equivalent knowledge). SecAI+ is a specialty credential: it assumes you already speak security and adds the AI dimension on top.</p>" +
    "<p>The exam voucher cost varies by region. Academic and bundle discounts exist — ask your institution. There may also be funding available for a free voucher; connect with the Program Director or your professor for more information about funding opportunities.</p>" +
    "<div class='callout scenario'><div class='lbl'>Who this is for</div>Security analysts, engineers, and architects who now have to defend AI systems — or wield AI to defend everything else. The exam tests the intersection, not AI or security in isolation.</div>" },
  { heading: "Exam-day logistics", body:
    "<p>Bring two forms of ID; for online proctoring you must show a clear workspace, a working webcam, and a stable connection. You cannot use notes, phones, or smartwatches. A simple on-screen whiteboard or provided scratch material may be available — use it to jot the acronym you'll otherwise lose under pressure (think the NIST AI RMF functions, or the OWASP LLM Top 10 order).</p>" +
    "<div class='callout exam'><div class='lbl'>Mindset</div>Arrive early, breathe, and remember: the exam tests <strong>judgment</strong>, not trivia recall. Most questions are answerable by applying core principles — least privilege, defense in depth, data governance, human-in-the-loop — to the AI scenario in front of you.</div>" }
];

/* ---- Reader: Career Guidance card ---- */
SECAI.careerGuidance = [
  { heading: "Where SecAI+ sits on the ladder", body:
    "<p><strong>SecAI+ is a specialty, vendor-neutral certification at the intersection of cybersecurity and artificial intelligence.</strong> It is not an entry credential: it sits <em>above</em> a foundational security cert (Security+) and assumes real hands-on security experience. Its value is focus — it proves you can both <strong>secure AI systems</strong> and <strong>use AI to do security work</strong>, two skill sets employers increasingly demand together.</p>" +
    "<p>For hiring managers, SecAI+ on a résumé is shorthand for “this person understands adversarial ML, AI governance, and how to fold AI into a SOC without creating new risk.” As organizations rush to deploy AI, that combination is scarce and rising in value.</p>" },
  { heading: "Roles SecAI+ supports", body:
    "<p>SecAI+ aligns with a cluster of emerging and established roles where AI and security meet:</p>" +
    "<ul>" +
    "<li><strong>AI Security Engineer</strong> — hardening models, pipelines, and inference APIs; implementing guardrails, access controls, and monitoring for AI systems. Domain 2 maps almost directly to this job.</li>" +
    "<li><strong>SOC Analyst (AI-augmented)</strong> — using AI-enabled detection, triage, and SOAR automation to scale response. Domain 3 is the core skill set.</li>" +
    "<li><strong>ML / MLSecOps Engineer</strong> — embedding security across the AI life cycle from data sourcing to deployment and monitoring.</li>" +
    "<li><strong>AI Governance / GRC Analyst</strong> — operationalizing NIST AI RMF, the EU AI Act, and ISO/IEC 42001. Domain 4 underpins these roles.</li>" +
    "<li><strong>Security Architect</strong> — designing trustworthy-AI reference architectures and threat models for the enterprise.</li>" +
    "</ul>" },
  { heading: "Why AI security is a durable bet", body:
    "<p>Every organization adopting generative AI inherits a new attack surface — prompt injection, data poisoning, model theft, sensitive-data leakage — and a new compliance burden. Regulators have responded fast: the <strong>EU AI Act</strong>, <strong>NIST AI RMF</strong>, and <strong>ISO/IEC 42001</strong> all arrived in quick succession. That combination of new risk plus new regulation creates sustained demand for people who can do exactly what this exam certifies.</p>" +
    "<div class='callout exam'><div class='lbl'>Why it matters</div>AI is being deployed faster than it is being secured. SecAI+ targets that gap directly, which is what makes the skill set defensible rather than a passing trend.</div>" },
  { heading: "Building the path beyond SecAI+", body:
    "<p>Treat SecAI+ as a force multiplier on an existing security career, not a starting point. A common trajectory: <em>Security+ → hands-on SOC or security-engineering experience → SecAI+ → an AI-security specialization</em>. From here, defensive practitioners deepen into MLSecOps and detection engineering; governance-minded learners pursue AI-audit and risk certifications; and architects move toward designing enterprise trustworthy-AI programs.</p>" +
    "<div class='callout scenario'><div class='lbl'>Practical advice</div>Pair the cert with <strong>demonstrable hands-on skill</strong> — a home lab that fine-tunes and then attacks a small model, a prompt-injection CTF, or a documented AI threat model. Certifications get you past résumé filters; practical evidence gets you through interviews.</div>" }
];

/* Reading content is lazy-loaded. Each domain's dense reading sections live in
   assets/js/content/domainN.js and populate this object on demand:
   SECAI.reading[N] = [ ...sections ]. */
SECAI.reading = SECAI.reading || {};

/* Flashcard decks are likewise lazy-loaded from assets/js/content/flashN.js
   (100 cards per domain) and populate this object: SECAI.flash[N] = [ ...cards ]. */
SECAI.flash = SECAI.flash || {};
