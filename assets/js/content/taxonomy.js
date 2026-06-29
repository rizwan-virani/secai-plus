window.TAXONOMY = [
  {
    title: "AI/ML Learning Types",
    subtitle: "Classify each algorithm or scenario by its machine learning paradigm.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "supervised", label: "Supervised" },
      { id: "unsupervised", label: "Unsupervised" },
      { id: "reinforcement", label: "Reinforcement" }
    ],
    items: [
      { text: "Spam email classifier trained on labeled messages", cat: "supervised" },
      { text: "Logistic regression for fraud prediction", cat: "supervised" },
      { text: "Support vector machine for malware detection", cat: "supervised" },
      { text: "Linear regression on labeled training data", cat: "supervised" },
      { text: "Random forest trained with known outcomes", cat: "supervised" },
      { text: "Isolation Forest for anomaly detection", cat: "unsupervised" },
      { text: "K-means clustering of network traffic", cat: "unsupervised" },
      { text: "Principal component analysis dimensionality reduction", cat: "unsupervised" },
      { text: "DBSCAN grouping of unlabeled log events", cat: "unsupervised" },
      { text: "Autoencoder learning patterns without labels", cat: "unsupervised" },
      { text: "Agent learning via reward and penalty signals", cat: "reinforcement" },
      { text: "Q-learning for automated response actions", cat: "reinforcement" },
      { text: "Policy optimization through trial and error", cat: "reinforcement" },
      { text: "RLHF tuning of a language model", cat: "reinforcement" },
      { text: "Game-playing agent maximizing cumulative reward", cat: "reinforcement" }
    ]
  },
  {
    title: "Adversarial AI Attack Types",
    subtitle: "Sort each adversarial technique into its attack category.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "poisoning", label: "Poisoning" },
      { id: "evasion", label: "Evasion" },
      { id: "extraction", label: "Extraction / Inference" },
      { id: "prompt", label: "Prompt-Based" }
    ],
    items: [
      { text: "Training data poisoning", cat: "poisoning" },
      { text: "Backdoor trigger injected during training", cat: "poisoning" },
      { text: "Label flipping in the training set", cat: "poisoning" },
      { text: "Corrupting a model update in federated learning", cat: "poisoning" },
      { text: "Adversarial perturbation to evade detection", cat: "evasion" },
      { text: "Crafted input that bypasses a classifier", cat: "evasion" },
      { text: "Evasion via gradient-based image noise", cat: "evasion" },
      { text: "Obfuscated malware fooling an ML detector", cat: "evasion" },
      { text: "Membership inference attack", cat: "extraction" },
      { text: "Model theft via repeated query stealing", cat: "extraction" },
      { text: "Model inversion reconstructing training data", cat: "extraction" },
      { text: "Attribute inference of sensitive features", cat: "extraction" },
      { text: "Direct prompt injection", cat: "prompt" },
      { text: "Indirect prompt injection from a web page", cat: "prompt" },
      { text: "Jailbreak that bypasses safety guardrails", cat: "prompt" },
      { text: "Role-play prompt to extract a system prompt", cat: "prompt" }
    ]
  },
  {
    title: "NIST AI RMF Functions",
    subtitle: "Map each activity to its NIST AI Risk Management Framework function.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "govern", label: "Govern" },
      { id: "map", label: "Map" },
      { id: "measure", label: "Measure" },
      { id: "manage", label: "Manage" }
    ],
    items: [
      { text: "Establish an organizational AI risk policy", cat: "govern" },
      { text: "Define roles and accountability for AI oversight", cat: "govern" },
      { text: "Cultivate a culture of responsible AI", cat: "govern" },
      { text: "Document context and intended use of the system", cat: "map" },
      { text: "Identify stakeholders and potential impacts", cat: "map" },
      { text: "Categorize the AI system and its risks", cat: "map" },
      { text: "Evaluate model accuracy and robustness metrics", cat: "measure" },
      { text: "Quantify bias and fairness across groups", cat: "measure" },
      { text: "Benchmark trustworthiness characteristics", cat: "measure" },
      { text: "Test for adversarial resilience", cat: "measure" },
      { text: "Prioritize and respond to identified AI risks", cat: "manage" },
      { text: "Allocate resources to treat the highest risks", cat: "manage" },
      { text: "Monitor deployed systems and recover from incidents", cat: "manage" },
      { text: "Decommission a system that exceeds risk tolerance", cat: "manage" }
    ]
  },
  {
    title: "AI Security Controls by Type",
    subtitle: "Classify each safeguard by the control type it represents.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "access", label: "Access" },
      { id: "data", label: "Data" },
      { id: "monitoring", label: "Monitoring" },
      { id: "model", label: "Model" }
    ],
    items: [
      { text: "Role-based access control (RBAC)", cat: "access" },
      { text: "Attribute-based access control (ABAC)", cat: "access" },
      { text: "Rate limiting on the inference API", cat: "access" },
      { text: "Least-privilege service accounts", cat: "access" },
      { text: "Encryption of the training dataset", cat: "data" },
      { text: "Tokenization of sensitive fields", cat: "data" },
      { text: "Data provenance and lineage tracking", cat: "data" },
      { text: "Drift detection on input distributions", cat: "monitoring" },
      { text: "Audit logging of all model queries", cat: "monitoring" },
      { text: "Anomaly alerting on inference behavior", cat: "monitoring" },
      { text: "Continuous performance dashboards", cat: "monitoring" },
      { text: "Model signing and integrity verification", cat: "model" },
      { text: "Output guardrails and content filters", cat: "model" },
      { text: "Adversarial robustness hardening", cat: "model" },
      { text: "Model versioning and registry controls", cat: "model" }
    ]
  },
  {
    title: "OWASP LLM Top 10 Risk Categories",
    subtitle: "Map each OWASP LLM risk to the area of the pipeline it targets.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "input", label: "Input" },
      { id: "output", label: "Output" },
      { id: "data", label: "Data" },
      { id: "model", label: "Model" }
    ],
    items: [
      { text: "Prompt injection", cat: "input" },
      { text: "Unsafe handling of untrusted user prompts", cat: "input" },
      { text: "Malicious instructions embedded in retrieved content", cat: "input" },
      { text: "Insecure output handling", cat: "output" },
      { text: "Overreliance on unverified model responses", cat: "output" },
      { text: "Cross-site scripting from unescaped model output", cat: "output" },
      { text: "Training data poisoning", cat: "data" },
      { text: "Sensitive information disclosure from training data", cat: "data" },
      { text: "Vulnerable plugin or third-party data source", cat: "data" },
      { text: "Model theft", cat: "model" },
      { text: "Supply chain vulnerability in a pretrained model", cat: "model" },
      { text: "Model denial of service through resource exhaustion", cat: "model" },
      { text: "Excessive agency granted to the model", cat: "model" }
    ]
  },
  {
    title: "EU AI Act Risk Tiers",
    subtitle: "Place each example AI use into its EU AI Act risk classification.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "unacceptable", label: "Unacceptable" },
      { id: "high", label: "High" },
      { id: "limited", label: "Limited" },
      { id: "minimal", label: "Minimal" }
    ],
    items: [
      { text: "Government social scoring of citizens", cat: "unacceptable" },
      { text: "Subliminal manipulation causing harm", cat: "unacceptable" },
      { text: "Real-time remote biometric ID in public spaces", cat: "unacceptable" },
      { text: "Exploitation of vulnerabilities of a protected group", cat: "unacceptable" },
      { text: "AI screening of job applicants", cat: "high" },
      { text: "Credit scoring that affects loan access", cat: "high" },
      { text: "Medical diagnostic decision support", cat: "high" },
      { text: "Critical infrastructure safety control", cat: "high" },
      { text: "Customer service chatbot disclosing it is AI", cat: "limited" },
      { text: "Deepfake content with mandatory labeling", cat: "limited" },
      { text: "Emotion recognition that must notify users", cat: "limited" },
      { text: "AI-powered spam filter", cat: "minimal" },
      { text: "Video game opponent AI", cat: "minimal" },
      { text: "Inventory forecasting model", cat: "minimal" }
    ]
  },
  {
    title: "AI Governance vs Risk vs Compliance",
    subtitle: "Sort each activity into governance, risk, or compliance.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "governance", label: "Governance" },
      { id: "risk", label: "Risk" },
      { id: "compliance", label: "Compliance" }
    ],
    items: [
      { text: "Drafting an enterprise AI use policy", cat: "governance" },
      { text: "Establishing an AI ethics review board", cat: "governance" },
      { text: "Defining accountability for model owners", cat: "governance" },
      { text: "Setting acceptable-use standards for generative AI", cat: "governance" },
      { text: "Conducting an algorithmic bias assessment", cat: "risk" },
      { text: "Performing a threat model of the AI system", cat: "risk" },
      { text: "Scoring likelihood and impact of model failure", cat: "risk" },
      { text: "Maintaining an AI risk register", cat: "risk" },
      { text: "Completing a GDPR data protection impact assessment", cat: "compliance" },
      { text: "Mapping controls to the EU AI Act requirements", cat: "compliance" },
      { text: "Demonstrating ISO/IEC 42001 conformance", cat: "compliance" },
      { text: "Producing an audit trail for regulators", cat: "compliance" },
      { text: "Aligning with NIST AI RMF for an attestation", cat: "compliance" }
    ]
  }
];
