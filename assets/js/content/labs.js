window.LABS = [
  {
    "id": "Lab 01",
    "num": 1,
    "group": "BASIC AI CONCEPTS",
    "title": "Training a Classifier and Splitting Data",
    "desc": "Build the foundation of supervised machine learning by preparing a labeled dataset and training a binary classifier. You partition data into training, validation, and test sets, choose an appropriate learning paradigm, and inspect the resulting model metrics.",
    "objectives": [
      "Distinguish supervised, unsupervised, and reinforcement learning paradigms.",
      "Split a dataset into train, validation, and test partitions without leakage.",
      "Train and evaluate a baseline classifier."
    ],
    "console": {
      "host": "ai-lab01",
      "boot": [
        "[SYS] ML training sandbox online.",
        "[SYS] Dataset loaded: phish_vs_ham.csv (50000 rows)."
      ],
      "tasks": [
        { "id": "t1", "label": "Select the learning paradigm for labeled phishing data" },
        { "id": "t2", "label": "Choose the correct train/test split ratio to avoid leakage" },
        { "id": "t3", "label": "Train the classifier on the prepared split" },
        { "id": "t4", "label": "Inspect dataset partition sizes" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Learning paradigm for labeled email data",
          "options": ["Unsupervised learning", "Supervised learning", "Reinforcement learning", "Self-supervised pretraining"],
          "correct": "Supervised learning",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Split ratio that holds out a true test set",
          "options": ["100% train / 0% test", "70% train / 15% val / 15% test", "50% train / 50% train again", "Train and test on the same rows"],
          "correct": "70% train / 15% val / 15% test",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "TRAIN CLASSIFIER",
        "placeholder": "logistic_regression",
        "button": "Apply",
        "response": "[TRAIN] Fitting model on 35000 training rows.\n[TRAIN] Validation accuracy: 0.94, F1: 0.93.\n[TRAIN] Model artifact saved as clf_v1.pkl.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show split",
          "out": "[DATA] Train: 35000 rows\n[DATA] Validation: 7500 rows\n[DATA] Test: 7500 rows",
          "task": "t4"
        },
        { "cmd": "show features", "out": "[DATA] 28 features: tld, url_len, sender_spf, ..." },
        { "cmd": "show status", "out": "Training engine nominal." }
      ]
    }
  },
  {
    "id": "Lab 02",
    "num": 2,
    "group": "BASIC AI CONCEPTS",
    "title": "Running Isolation Forest Anomaly Detection",
    "desc": "Apply an unsupervised anomaly-detection algorithm to network telemetry where labels are unavailable. You configure the Isolation Forest contamination parameter, run scoring, and flag outliers that may indicate intrusion.",
    "objectives": [
      "Explain how Isolation Forest isolates anomalies via random partitioning.",
      "Tune the contamination parameter for expected anomaly rate.",
      "Interpret anomaly scores to surface suspicious events."
    ],
    "console": {
      "host": "ai-lab02",
      "boot": [
        "[SYS] Anomaly detection sandbox online.",
        "[SYS] Telemetry stream loaded: netflow_24h.parquet."
      ],
      "tasks": [
        { "id": "t1", "label": "Select the algorithm family for unlabeled outlier detection" },
        { "id": "t2", "label": "Set a realistic contamination rate" },
        { "id": "t3", "label": "Run scoring across the telemetry stream" },
        { "id": "t4", "label": "List the top anomalous flows" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Approach for detecting outliers without labels",
          "options": ["Linear regression", "Unsupervised anomaly detection", "Supervised SVM classifier", "K-fold cross-validation"],
          "correct": "Unsupervised anomaly detection",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Contamination value for ~1% expected anomalies",
          "options": ["0.5", "0.01", "0.9", "1.0"],
          "correct": "0.01",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "RUN ISOLATION FOREST",
        "placeholder": "n_estimators=100",
        "button": "Apply",
        "response": "[IFOREST] Building 100 isolation trees.\n[IFOREST] Scoring 1.2M flows complete.\n[IFOREST] 14211 flows flagged below threshold.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show anomalies",
          "out": "[ANOM] 10.0.4.7 -> 185.x.x.x score -0.71\n[ANOM] beacon interval 60s detected\n[ANOM] data egress 4.2GB off-hours",
          "task": "t4"
        },
        { "cmd": "show threshold", "out": "[IFOREST] Decision threshold: -0.45" },
        { "cmd": "show status", "out": "Anomaly engine nominal." }
      ]
    }
  },
  {
    "id": "Lab 03",
    "num": 3,
    "group": "BASIC AI CONCEPTS",
    "title": "Prompt Engineering Safe System Prompts",
    "desc": "Design a robust system prompt for an LLM-backed assistant that resists manipulation. You apply guardrail patterns, choose a least-privilege instruction strategy, and test the prompt against an injection probe.",
    "objectives": [
      "Apply system-prompt guardrails and role separation.",
      "Choose instruction hierarchies that constrain model behavior.",
      "Validate prompt resilience against a basic override attempt."
    ],
    "console": {
      "host": "ai-lab03",
      "boot": [
        "[SYS] Prompt engineering sandbox online.",
        "[SYS] Target model: assistant-llm (temp=0.2)."
      ],
      "tasks": [
        { "id": "t1", "label": "Select the safest system-prompt strategy" },
        { "id": "t2", "label": "Choose where untrusted user input should be placed" },
        { "id": "t3", "label": "Deploy the hardened system prompt" },
        { "id": "t4", "label": "Probe the prompt with an override attempt" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Strategy for a resilient system prompt",
          "options": ["Trust all user instructions", "Explicit role separation with refusal rules", "Disable all guardrails for speed", "Echo user input verbatim as instructions"],
          "correct": "Explicit role separation with refusal rules",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Placement of untrusted user content",
          "options": ["Merged into the system role", "Delimited in the user role as data, not instructions", "Concatenated as new system rules", "Used to overwrite the system prompt"],
          "correct": "Delimited in the user role as data, not instructions",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "DEPLOY SYSTEM PROMPT",
        "placeholder": "You are a read-only assistant...",
        "button": "Apply",
        "response": "[PROMPT] System prompt deployed with refusal policy.\n[PROMPT] User content sandboxed as data.\n[PROMPT] Guardrail filters active.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "probe inject 'ignore previous instructions'",
          "out": "[PROBE] Override attempt detected.\n[PROBE] Model refused: instruction outside policy.\n[PROBE] Result: PASS, no leakage.",
          "task": "t4"
        },
        { "cmd": "show policy", "out": "[PROMPT] Refusal rules: 6 active." },
        { "cmd": "show status", "out": "Prompt engine nominal." }
      ]
    }
  },
  {
    "id": "Lab 04",
    "num": 4,
    "group": "BASIC AI CONCEPTS",
    "title": "Classifying AI Threat Types",
    "desc": "Develop fluency in the AI-specific threat taxonomy by mapping real incidents to attack categories. You distinguish evasion, poisoning, extraction, and inference attacks, then tag a sample incident.",
    "objectives": [
      "Differentiate evasion, poisoning, model extraction, and inference attacks.",
      "Map an incident to the correct AI threat category.",
      "Enumerate the canonical AI attack surface."
    ],
    "console": {
      "host": "ai-lab04",
      "boot": [
        "[SYS] AI threat taxonomy lab online.",
        "[SYS] Incident feed loaded: 5 sample cases."
      ],
      "tasks": [
        { "id": "t1", "label": "Classify an adversarial input at inference time" },
        { "id": "t2", "label": "Classify tampering with training data" },
        { "id": "t3", "label": "Tag the sample incident report" },
        { "id": "t4", "label": "List recognized AI threat categories" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Threat: crafted input fools a deployed model",
          "options": ["Data poisoning", "Evasion attack", "Model extraction", "Supply-chain attack"],
          "correct": "Evasion attack",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Threat: malicious samples injected during training",
          "options": ["Data poisoning", "Membership inference", "Prompt injection", "Evasion attack"],
          "correct": "Data poisoning",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "TAG INCIDENT REPORT",
        "placeholder": "incident-2031",
        "button": "Apply",
        "response": "[TAG] Incident-2031: attacker queried API to rebuild model.\n[TAG] Category: Model extraction.\n[TAG] Confidence: high.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "list threats",
          "out": "[THREAT] Evasion\n[THREAT] Poisoning\n[THREAT] Model extraction\n[THREAT] Inference (membership/attribute)",
          "task": "t4"
        },
        { "cmd": "show case 1", "out": "[CASE] Stop sign misread via sticker patch (evasion)." },
        { "cmd": "show status", "out": "Taxonomy engine nominal." }
      ]
    }
  },
  {
    "id": "Lab 05",
    "num": 5,
    "group": "BASIC AI CONCEPTS",
    "title": "Building an AI Threat Model with MITRE ATLAS",
    "desc": "Construct a structured threat model for a deployed ML system using the MITRE ATLAS framework. You select relevant tactics, map adversary techniques, and generate a coverage report.",
    "objectives": [
      "Navigate the MITRE ATLAS tactics and techniques matrix.",
      "Map plausible adversary techniques to a model deployment.",
      "Produce a threat-model coverage summary."
    ],
    "console": {
      "host": "ai-lab05",
      "boot": [
        "[SYS] MITRE ATLAS threat-modeling lab online.",
        "[SYS] Target: public image-classification API."
      ],
      "tasks": [
        { "id": "t1", "label": "Select the ATLAS tactic for initial model access" },
        { "id": "t2", "label": "Map the technique used to steal a model" },
        { "id": "t3", "label": "Generate the threat-model report" },
        { "id": "t4", "label": "List covered ATLAS tactics" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "ATLAS tactic for first foothold via the API",
          "options": ["Exfiltration", "ML Model Access", "Impact", "Defense Evasion"],
          "correct": "ML Model Access",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Technique for reconstructing a model via queries",
          "options": ["Model Stealing", "Phishing", "Brute Force", "Lateral Movement"],
          "correct": "Model Stealing",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "GENERATE THREAT MODEL",
        "placeholder": "image-api-v2",
        "button": "Apply",
        "response": "[ATLAS] Threat model generated for image-api-v2.\n[ATLAS] 7 techniques mapped across 4 tactics.\n[ATLAS] Top risk: ML Model Access -> Model Stealing.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "list tactics",
          "out": "[ATLAS] Reconnaissance\n[ATLAS] ML Model Access\n[ATLAS] ML Attack Staging\n[ATLAS] Exfiltration",
          "task": "t4"
        },
        { "cmd": "show technique AML.T0040", "out": "[ATLAS] ML Model Inference API Access." },
        { "cmd": "show status", "out": "ATLAS engine nominal." }
      ]
    }
  },
  {
    "id": "Lab 06",
    "num": 6,
    "group": "SECURING AI SYSTEMS",
    "title": "Hardening an Inference API",
    "desc": "Lock down a public model-inference endpoint against abuse and theft. You enforce role-based access control, apply rate limiting, and verify the hardened configuration against an attack simulation.",
    "objectives": [
      "Apply RBAC to inference endpoints.",
      "Configure rate limiting to throttle extraction attempts.",
      "Validate hardening against an abuse simulation."
    ],
    "console": {
      "host": "ai-lab06",
      "boot": [
        "[SYS] Inference API hardening lab online.",
        "[SYS] Endpoint: /v1/predict (currently public)."
      ],
      "tasks": [
        { "id": "t1", "label": "Select the access-control model for the endpoint" },
        { "id": "t2", "label": "Set a rate limit that slows model extraction" },
        { "id": "t3", "label": "Apply the hardened endpoint policy" },
        { "id": "t4", "label": "Run the abuse simulation to verify" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Access-control model for the inference API",
          "options": ["Open to anonymous callers", "Role-based access control (RBAC)", "No authentication", "Shared static API key for all users"],
          "correct": "Role-based access control (RBAC)",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Rate limit to deter mass querying",
          "options": ["Unlimited requests", "60 requests/min per authenticated key", "1,000,000 requests/sec", "Disable throttling"],
          "correct": "60 requests/min per authenticated key",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "APPLY ENDPOINT POLICY",
        "placeholder": "predict-policy.yaml",
        "button": "Apply",
        "response": "[API] RBAC enforced: roles analyst, service.\n[API] Rate limit active: 60 req/min/key.\n[API] mTLS required for /v1/predict.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "simulate abuse",
          "out": "[SIM] 5000 anonymous queries attempted.\n[SIM] 4940 blocked (401/429).\n[SIM] Extraction attempt mitigated.",
          "task": "t4"
        },
        { "cmd": "show roles", "out": "[API] analyst: read; service: read+batch." },
        { "cmd": "show status", "out": "Gateway engine nominal." }
      ]
    }
  },
  {
    "id": "Lab 07",
    "num": 7,
    "group": "SECURING AI SYSTEMS",
    "title": "Configuring Data Controls",
    "desc": "Protect sensitive data that flows into and out of an AI pipeline. You select encryption for data at rest, tokenize identifiers, and enforce DLP on model outputs, then confirm the controls in an audit scan.",
    "objectives": [
      "Apply encryption at rest to training and feature stores.",
      "Tokenize sensitive identifiers before model ingestion.",
      "Enforce DLP on generated outputs."
    ],
    "console": {
      "host": "ai-lab07",
      "boot": [
        "[SYS] AI data-controls lab online.",
        "[SYS] Pipeline: ingest -> feature store -> model -> output."
      ],
      "tasks": [
        { "id": "t1", "label": "Select encryption for the feature store at rest" },
        { "id": "t2", "label": "Choose the technique to protect raw identifiers" },
        { "id": "t3", "label": "Apply DLP to the model output channel" },
        { "id": "t4", "label": "Audit the active data controls" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Encryption for the feature store",
          "options": ["No encryption", "AES-256 at rest", "ROT13 obfuscation", "Plaintext with ACLs only"],
          "correct": "AES-256 at rest",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Control to replace SSNs before ingestion",
          "options": ["Tokenization", "Logging in cleartext", "Public exposure", "Disable masking"],
          "correct": "Tokenization",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "APPLY DLP TO OUTPUT",
        "placeholder": "dlp-output-policy",
        "button": "Apply",
        "response": "[DLP] Output scanner enabled.\n[DLP] PII patterns: SSN, PAN, email redacted.\n[DLP] 0 leaks in last 1000 responses.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "audit controls",
          "out": "[AUDIT] Encryption at rest: AES-256 (PASS)\n[AUDIT] Tokenization: active (PASS)\n[AUDIT] Output DLP: active (PASS)",
          "task": "t4"
        },
        { "cmd": "show keys", "out": "[KMS] CMK rotation: 90 days." },
        { "cmd": "show status", "out": "Data-controls engine nominal." }
      ]
    }
  },
  {
    "id": "Lab 08",
    "num": 8,
    "group": "SECURING AI SYSTEMS",
    "title": "Defending Against Data Poisoning",
    "desc": "Detect and neutralize poisoning attempts in a training pipeline. You enable data provenance checks, select an outlier filter for incoming samples, and retrain on a cleaned dataset.",
    "objectives": [
      "Recognize indicators of training-data poisoning.",
      "Apply provenance and validation controls to ingested data.",
      "Retrain on a sanitized dataset and verify integrity."
    ],
    "console": {
      "host": "ai-lab08",
      "boot": [
        "[SYS] Data-poisoning defense lab online.",
        "[SYS] Incoming batch flagged: anomalous label distribution."
      ],
      "tasks": [
        { "id": "t1", "label": "Select the control that verifies data origin" },
        { "id": "t2", "label": "Choose a filter for poisoned outlier samples" },
        { "id": "t3", "label": "Retrain on the sanitized dataset" },
        { "id": "t4", "label": "Verify integrity of the cleaned set" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Control to confirm where data came from",
          "options": ["Data provenance / lineage tracking", "Disable validation", "Accept all submissions", "Random sampling only"],
          "correct": "Data provenance / lineage tracking",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Filter to remove suspicious training samples",
          "options": ["Statistical outlier removal", "Keep all outliers", "Duplicate the outliers", "Ignore label flips"],
          "correct": "Statistical outlier removal",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "RETRAIN ON CLEAN DATA",
        "placeholder": "clean_batch_v2",
        "button": "Apply",
        "response": "[CLEAN] 612 poisoned samples removed.\n[RETRAIN] Model retrained on sanitized set.\n[RETRAIN] Backdoor trigger no longer activates.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "verify integrity",
          "out": "[INTEG] Label distribution within baseline.\n[INTEG] Provenance signatures valid.\n[INTEG] Result: PASS.",
          "task": "t4"
        },
        { "cmd": "show provenance", "out": "[INTEG] 3 sources signed; 1 source quarantined." },
        { "cmd": "show status", "out": "Pipeline integrity engine nominal." }
      ]
    }
  },
  {
    "id": "Lab 09",
    "num": 9,
    "group": "SECURING AI SYSTEMS",
    "title": "Monitoring Model Drift",
    "desc": "Keep a production model reliable by detecting distribution shift over time. You select the right drift metric, set an alerting threshold, and trigger a retraining recommendation when drift exceeds tolerance.",
    "objectives": [
      "Differentiate data drift from concept drift.",
      "Choose a statistical drift metric and threshold.",
      "Operationalize drift alerts and retraining triggers."
    ],
    "console": {
      "host": "ai-lab09",
      "boot": [
        "[SYS] Model-drift monitoring lab online.",
        "[SYS] Baseline reference window captured."
      ],
      "tasks": [
        { "id": "t1", "label": "Select the metric for feature distribution shift" },
        { "id": "t2", "label": "Set the drift alert threshold" },
        { "id": "t3", "label": "Run the drift evaluation window" },
        { "id": "t4", "label": "Show current drift status by feature" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Metric for distribution shift",
          "options": ["Population Stability Index (PSI)", "Bubble sort", "TCP window size", "CPU temperature"],
          "correct": "Population Stability Index (PSI)",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "PSI threshold that signals significant drift",
          "options": ["0.0", "0.25", "negative one", "off"],
          "correct": "0.25",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "RUN DRIFT EVALUATION",
        "placeholder": "window=7d",
        "button": "Apply",
        "response": "[DRIFT] PSI computed across 28 features.\n[DRIFT] 3 features exceed 0.25 threshold.\n[DRIFT] Recommendation: schedule retraining.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show drift",
          "out": "[DRIFT] sender_geo PSI 0.41 (HIGH)\n[DRIFT] url_len PSI 0.30 (HIGH)\n[DRIFT] tld PSI 0.05 (OK)",
          "task": "t4"
        },
        { "cmd": "show baseline", "out": "[DRIFT] Reference window: 2026-05 (stable)." },
        { "cmd": "show status", "out": "Monitoring engine nominal." }
      ]
    }
  },
  {
    "id": "Lab 10",
    "num": 10,
    "group": "SECURING AI SYSTEMS",
    "title": "Analyzing a Prompt-Injection Attack",
    "desc": "Investigate a successful prompt-injection incident against an LLM agent and select compensating controls. You identify the injection vector, choose layered mitigations, and confirm the controls block a replay.",
    "objectives": [
      "Trace a prompt-injection vector through an LLM agent.",
      "Select compensating controls such as input/output filtering and least privilege.",
      "Validate that controls stop a replay of the attack."
    ],
    "console": {
      "host": "ai-lab10",
      "boot": [
        "[SYS] Prompt-injection IR lab online.",
        "[SYS] Incident: agent exfiltrated secrets via crafted web page."
      ],
      "tasks": [
        { "id": "t1", "label": "Identify the injection vector" },
        { "id": "t2", "label": "Select the strongest compensating control" },
        { "id": "t3", "label": "Apply the layered mitigation set" },
        { "id": "t4", "label": "Replay the attack to confirm it is blocked" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Where the malicious instructions entered",
          "options": ["Indirect injection via retrieved web content", "A signed admin command", "The model's weights file", "The GPU driver"],
          "correct": "Indirect injection via retrieved web content",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Most effective compensating control",
          "options": ["Grant the agent full tool access", "Least-privilege tool scoping plus output filtering", "Disable all logging", "Trust retrieved content as instructions"],
          "correct": "Least-privilege tool scoping plus output filtering",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "APPLY MITIGATIONS",
        "placeholder": "agent-guardrails.yaml",
        "button": "Apply",
        "response": "[MIT] Retrieved content tagged as untrusted data.\n[MIT] Tool scope reduced to read-only.\n[MIT] Egress filter blocks secret patterns.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "replay attack",
          "out": "[REPLAY] Injection payload re-sent.\n[REPLAY] Instructions ignored (treated as data).\n[REPLAY] No exfiltration: BLOCKED.",
          "task": "t4"
        },
        { "cmd": "show timeline", "out": "[IR] T0 fetch page -> T1 inject -> T2 exfil attempt." },
        { "cmd": "show status", "out": "Agent guardrail engine nominal." }
      ]
    }
  },
  {
    "id": "Lab 11",
    "num": 11,
    "group": "AI-ASSISTED SECURITY",
    "title": "Tuning an AI Anomaly-Detection SOC Pipeline",
    "desc": "Improve signal quality in a SOC where an ML model triages alerts. You adjust the detection threshold to balance false positives and negatives, enable feedback labeling, and review the tuned alert volume.",
    "objectives": [
      "Balance sensitivity and specificity in an alerting model.",
      "Use analyst feedback to refine detections.",
      "Quantify the impact of threshold tuning on alert volume."
    ],
    "console": {
      "host": "ai-lab11",
      "boot": [
        "[SYS] SOC anomaly-tuning lab online.",
        "[SYS] Current alert volume: 9200/day (alert fatigue)."
      ],
      "tasks": [
        { "id": "t1", "label": "Select the goal of threshold tuning" },
        { "id": "t2", "label": "Choose the feedback mechanism for the model" },
        { "id": "t3", "label": "Apply the tuned detection threshold" },
        { "id": "t4", "label": "Review post-tuning alert metrics" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Objective when raising the threshold",
          "options": ["Maximize false positives", "Reduce false positives while keeping true positives", "Disable detection", "Alert on everything"],
          "correct": "Reduce false positives while keeping true positives",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Mechanism to improve the model over time",
          "options": ["Analyst feedback labeling loop", "Never relabel data", "Delete all alerts", "Randomize scores"],
          "correct": "Analyst feedback labeling loop",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "APPLY THRESHOLD",
        "placeholder": "threshold=0.82",
        "button": "Apply",
        "response": "[TUNE] Threshold set to 0.82.\n[TUNE] Alert volume: 9200 -> 1400/day.\n[TUNE] True-positive recall held at 0.97.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show metrics",
          "out": "[SOC] Precision: 0.71 -> 0.93\n[SOC] Recall: 0.97 (held)\n[SOC] Analyst hours saved: 22/day",
          "task": "t4"
        },
        { "cmd": "show queue", "out": "[SOC] 1400 alerts, sorted by risk score." },
        { "cmd": "show status", "out": "SOC tuning engine nominal." }
      ]
    }
  },
  {
    "id": "Lab 12",
    "num": 12,
    "group": "AI-ASSISTED SECURITY",
    "title": "Building a SOAR + AI Auto-Triage Playbook",
    "desc": "Automate incident triage by chaining an AI classifier into a SOAR playbook. You define the enrichment step, set a human-in-the-loop gate for high-severity actions, and run the playbook end to end.",
    "objectives": [
      "Design a SOAR playbook that calls an AI triage step.",
      "Insert human-in-the-loop approval for destructive actions.",
      "Execute and validate the automated workflow."
    ],
    "console": {
      "host": "ai-lab12",
      "boot": [
        "[SYS] SOAR + AI triage lab online.",
        "[SYS] Trigger: new alert ingested from SIEM."
      ],
      "tasks": [
        { "id": "t1", "label": "Select the AI step's role in the playbook" },
        { "id": "t2", "label": "Choose the gate for high-severity remediation" },
        { "id": "t3", "label": "Run the playbook on a sample alert" },
        { "id": "t4", "label": "Show the playbook execution trace" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Function of the AI node in triage",
          "options": ["Classify and prioritize the alert", "Format the timestamp only", "Delete the alert", "Send spam"],
          "correct": "Classify and prioritize the alert",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Control before auto-isolating a host",
          "options": ["Human-in-the-loop approval", "Fully autonomous, no review", "Skip the action silently", "Email marketing list"],
          "correct": "Human-in-the-loop approval",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "RUN PLAYBOOK",
        "placeholder": "alert-7781",
        "button": "Apply",
        "response": "[SOAR] AI triage: severity HIGH, type credential theft.\n[SOAR] Enrichment: GeoIP, threat intel matched.\n[SOAR] Awaiting analyst approval to isolate host.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show trace",
          "out": "[SOAR] 1. ingest\n[SOAR] 2. AI classify -> HIGH\n[SOAR] 3. enrich\n[SOAR] 4. approval gate (pending)",
          "task": "t4"
        },
        { "cmd": "show actions", "out": "[SOAR] isolate-host requires approval." },
        { "cmd": "show status", "out": "SOAR engine nominal." }
      ]
    }
  },
  {
    "id": "Lab 13",
    "num": 13,
    "group": "AI-ASSISTED SECURITY",
    "title": "Detecting AI-Generated Phishing",
    "desc": "Counter the rise of LLM-crafted phishing by deploying a detection model that looks beyond grammar errors. You select robust signal features, run scoring on an inbound batch, and review flagged messages.",
    "objectives": [
      "Identify why traditional grammar-based filters fail on AI phishing.",
      "Select behavioral and header-based detection signals.",
      "Score and triage an inbound email batch."
    ],
    "console": {
      "host": "ai-lab13",
      "boot": [
        "[SYS] AI-phishing detection lab online.",
        "[SYS] Inbound batch loaded: 3000 messages."
      ],
      "tasks": [
        { "id": "t1", "label": "Select why old filters miss AI phishing" },
        { "id": "t2", "label": "Choose the most robust detection signal set" },
        { "id": "t3", "label": "Run detection scoring on the batch" },
        { "id": "t4", "label": "Review flagged phishing messages" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Reason grammar filters underperform",
          "options": ["AI text is fluent and error-free", "AI text is always misspelled", "Email is deprecated", "Filters are too fast"],
          "correct": "AI text is fluent and error-free",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Most robust detection signals",
          "options": ["Spelling mistakes only", "Sender reputation, SPF/DKIM, URL and intent features", "Message length only", "Font color"],
          "correct": "Sender reputation, SPF/DKIM, URL and intent features",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "RUN DETECTION",
        "placeholder": "batch-2026-06-28",
        "button": "Apply",
        "response": "[PHISH] Scored 3000 messages.\n[PHISH] 84 flagged as likely phishing.\n[PHISH] 19 use lookalike domains; 12 fail DKIM.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show flagged",
          "out": "[PHISH] 'Payroll update' -> spoofed sender\n[PHISH] 'Invoice due' -> lookalike domain\n[PHISH] intent: credential harvest",
          "task": "t4"
        },
        { "cmd": "show signals", "out": "[PHISH] 14 features active; intent model v3." },
        { "cmd": "show status", "out": "Phishing detection engine nominal." }
      ]
    }
  },
  {
    "id": "Lab 14",
    "num": 14,
    "group": "AI-ASSISTED SECURITY",
    "title": "Validating Automation Precision and Recall",
    "desc": "Before trusting an AI to auto-remediate, measure how often it is right. You compute precision and recall from a confusion matrix, decide whether the model is safe to automate, and review the breakdown.",
    "objectives": [
      "Interpret a confusion matrix for a security classifier.",
      "Compute precision and recall and explain the trade-off.",
      "Decide automation readiness from the metrics."
    ],
    "console": {
      "host": "ai-lab14",
      "boot": [
        "[SYS] Automation validation lab online.",
        "[SYS] Confusion matrix loaded: TP=190 FP=10 FN=20 TN=780."
      ],
      "tasks": [
        { "id": "t1", "label": "Select the formula for precision" },
        { "id": "t2", "label": "Select the formula for recall" },
        { "id": "t3", "label": "Compute the metrics for the loaded matrix" },
        { "id": "t4", "label": "Show the automation-readiness decision" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Precision is defined as",
          "options": ["TP / (TP + FP)", "TP / (TP + FN)", "TN / (TN + FP)", "FP / TP"],
          "correct": "TP / (TP + FP)",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Recall is defined as",
          "options": ["TP / (TP + FN)", "TP / (TP + FP)", "TN / total", "FN / FP"],
          "correct": "TP / (TP + FN)",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "COMPUTE METRICS",
        "placeholder": "confusion_matrix",
        "button": "Apply",
        "response": "[METRIC] Precision = 190/200 = 0.95.\n[METRIC] Recall = 190/210 = 0.905.\n[METRIC] F1 = 0.927.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show decision",
          "out": "[AUTO] Precision 0.95 >= 0.90 threshold.\n[AUTO] Low FP risk for auto-remediation.\n[AUTO] Decision: APPROVE with monitoring.",
          "task": "t4"
        },
        { "cmd": "show matrix", "out": "[METRIC] TP=190 FP=10 FN=20 TN=780." },
        { "cmd": "show status", "out": "Validation engine nominal." }
      ]
    }
  },
  {
    "id": "Lab 15",
    "num": 15,
    "group": "AI-ASSISTED SECURITY",
    "title": "Mapping NIST AI RMF Functions",
    "desc": "Operationalize the NIST AI Risk Management Framework across an AI security program. You map activities to the four core functions, select the function for a given task, and generate a coverage report.",
    "objectives": [
      "Recall the four NIST AI RMF functions: Govern, Map, Measure, Manage.",
      "Assign program activities to the correct function.",
      "Produce an AI RMF coverage report."
    ],
    "console": {
      "host": "ai-lab15",
      "boot": [
        "[SYS] NIST AI RMF mapping lab online.",
        "[SYS] Program activities loaded: 12 items."
      ],
      "tasks": [
        { "id": "t1", "label": "Map 'establish AI policy and accountability'" },
        { "id": "t2", "label": "Map 'quantify model risk with metrics'" },
        { "id": "t3", "label": "Generate the RMF coverage report" },
        { "id": "t4", "label": "List the four RMF functions" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Function for policy and accountability",
          "options": ["Govern", "Measure", "Map", "Manage"],
          "correct": "Govern",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Function for quantifying risk with metrics",
          "options": ["Measure", "Govern", "Map", "Deploy"],
          "correct": "Measure",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "GENERATE RMF REPORT",
        "placeholder": "ai-program-v1",
        "button": "Apply",
        "response": "[RMF] Coverage: Govern 4, Map 3, Measure 3, Manage 2.\n[RMF] Gap: Manage function under-resourced.\n[RMF] Report exported.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "list functions",
          "out": "[RMF] Govern\n[RMF] Map\n[RMF] Measure\n[RMF] Manage",
          "task": "t4"
        },
        { "cmd": "show item 5", "out": "[RMF] 'Context mapping of AI use' -> Map." },
        { "cmd": "show status", "out": "RMF engine nominal." }
      ]
    }
  },
  {
    "id": "Lab 16",
    "num": 16,
    "group": "AI GOVERNANCE, RISK & COMPLIANCE",
    "title": "Classifying EU AI Act Risk Tiers",
    "desc": "Determine regulatory obligations by classifying AI systems under the EU AI Act risk tiers. You assign systems to the correct tier, identify a prohibited use, and generate a classification summary.",
    "objectives": [
      "Recall the EU AI Act risk tiers: unacceptable, high, limited, minimal.",
      "Classify AI use cases into the correct tier.",
      "Identify prohibited practices."
    ],
    "console": {
      "host": "ai-lab16",
      "boot": [
        "[SYS] EU AI Act classification lab online.",
        "[SYS] Use cases loaded: 6 systems."
      ],
      "tasks": [
        { "id": "t1", "label": "Classify a CV-screening hiring system" },
        { "id": "t2", "label": "Classify a real-time social-scoring system" },
        { "id": "t3", "label": "Generate the classification summary" },
        { "id": "t4", "label": "List the EU AI Act risk tiers" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Tier for AI used to screen job applicants",
          "options": ["High risk", "Minimal risk", "Unregulated", "Limited risk"],
          "correct": "High risk",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Tier for government social scoring",
          "options": ["Unacceptable risk (prohibited)", "Minimal risk", "Limited risk", "High risk"],
          "correct": "Unacceptable risk (prohibited)",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "GENERATE SUMMARY",
        "placeholder": "eu-aiact-batch",
        "button": "Apply",
        "response": "[AIACT] 1 unacceptable (prohibited), 2 high, 1 limited, 2 minimal.\n[AIACT] High-risk systems require conformity assessment.\n[AIACT] Summary exported.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "list tiers",
          "out": "[AIACT] Unacceptable (prohibited)\n[AIACT] High\n[AIACT] Limited\n[AIACT] Minimal",
          "task": "t4"
        },
        { "cmd": "show case chatbot", "out": "[AIACT] Chatbot -> Limited (transparency duty)." },
        { "cmd": "show status", "out": "EU AI Act engine nominal." }
      ]
    }
  },
  {
    "id": "Lab 17",
    "num": 17,
    "group": "AI GOVERNANCE, RISK & COMPLIANCE",
    "title": "Running a DPIA for an AI System",
    "desc": "Conduct a Data Protection Impact Assessment for an AI system processing personal data. You determine when a DPIA is required, select the right mitigation for an identified risk, and produce the assessment record.",
    "objectives": [
      "Recognize the triggers that mandate a DPIA.",
      "Assess privacy risks of automated processing.",
      "Document mitigations and residual risk."
    ],
    "console": {
      "host": "ai-lab17",
      "boot": [
        "[SYS] DPIA workflow lab online.",
        "[SYS] System: AI credit-scoring with profiling."
      ],
      "tasks": [
        { "id": "t1", "label": "Determine if a DPIA is required" },
        { "id": "t2", "label": "Select a mitigation for opaque automated decisions" },
        { "id": "t3", "label": "Produce the DPIA record" },
        { "id": "t4", "label": "Show the residual risk rating" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Is a DPIA required for large-scale profiling?",
          "options": ["Yes, high-risk processing triggers a DPIA", "No, DPIAs are optional always", "Only for hardware", "Never for AI"],
          "correct": "Yes, high-risk processing triggers a DPIA",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Mitigation for opaque automated decisions",
          "options": ["Provide explanation and human review rights", "Hide the logic entirely", "Remove appeal options", "Disable consent"],
          "correct": "Provide explanation and human review rights",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "PRODUCE DPIA RECORD",
        "placeholder": "credit-score-dpia",
        "button": "Apply",
        "response": "[DPIA] Necessity and proportionality assessed.\n[DPIA] Risks: profiling bias, lack of transparency.\n[DPIA] Mitigations: explainability, human review, minimization.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show residual",
          "out": "[DPIA] Inherent risk: HIGH\n[DPIA] After mitigations: MEDIUM\n[DPIA] Sign-off: DPO required.",
          "task": "t4"
        },
        { "cmd": "show triggers", "out": "[DPIA] Large-scale profiling triggers assessment." },
        { "cmd": "show status", "out": "DPIA engine nominal." }
      ]
    }
  },
  {
    "id": "Lab 18",
    "num": 18,
    "group": "AI GOVERNANCE, RISK & COMPLIANCE",
    "title": "Building an AI Governance RACI",
    "desc": "Clarify ownership across an AI program by building a RACI matrix. You assign accountability for model risk decisions, distinguish accountable from responsible roles, and export the governance matrix.",
    "objectives": [
      "Define Responsible, Accountable, Consulted, Informed roles.",
      "Assign single accountability per AI decision.",
      "Export an AI governance RACI matrix."
    ],
    "console": {
      "host": "ai-lab18",
      "boot": [
        "[SYS] AI governance RACI lab online.",
        "[SYS] Decision set loaded: model approval, incident response."
      ],
      "tasks": [
        { "id": "t1", "label": "Assign accountability for model go-live approval" },
        { "id": "t2", "label": "Determine how many roles are Accountable per decision" },
        { "id": "t3", "label": "Export the RACI matrix" },
        { "id": "t4", "label": "Show the RACI row for incident response" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Who is Accountable for approving model go-live?",
          "options": ["AI Risk Owner / sponsor", "Every engineer equally", "No one", "External vendor only"],
          "correct": "AI Risk Owner / sponsor",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Accountable roles allowed per decision",
          "options": ["Exactly one", "Many at once", "Zero is fine", "Optional and skippable"],
          "correct": "Exactly one",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "EXPORT RACI MATRIX",
        "placeholder": "ai-governance-raci",
        "button": "Apply",
        "response": "[RACI] 8 decisions x 5 roles populated.\n[RACI] Each decision has exactly one Accountable.\n[RACI] Matrix exported to governance repo.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show row incident",
          "out": "[RACI] Incident response:\n[RACI] R = SOC lead; A = CISO\n[RACI] C = Legal; I = Business owner",
          "task": "t4"
        },
        { "cmd": "show roles", "out": "[RACI] Roles: CISO, AI Risk Owner, SOC lead, Legal, Eng." },
        { "cmd": "show status", "out": "RACI engine nominal." }
      ]
    }
  },
  {
    "id": "Lab 19",
    "num": 19,
    "group": "AI GOVERNANCE, RISK & COMPLIANCE",
    "title": "Assessing Third-Party Model Risk",
    "desc": "Evaluate the supply-chain risk of adopting an external foundation model. You review the model card and provenance, select the key due-diligence control, and record a vendor risk rating.",
    "objectives": [
      "Identify supply-chain risks in third-party AI models.",
      "Apply due-diligence controls such as model cards and SBOMs.",
      "Produce a vendor risk rating."
    ],
    "console": {
      "host": "ai-lab19",
      "boot": [
        "[SYS] Third-party model risk lab online.",
        "[SYS] Candidate: external-foundation-model-v4."
      ],
      "tasks": [
        { "id": "t1", "label": "Select the artifact documenting model behavior" },
        { "id": "t2", "label": "Choose the control for component provenance" },
        { "id": "t3", "label": "Record the vendor risk rating" },
        { "id": "t4", "label": "Show outstanding due-diligence gaps" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Document describing a model's limits and data",
          "options": ["Model card", "Marketing brochure", "Invoice", "Press release"],
          "correct": "Model card",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Control for tracking model components",
          "options": ["AI/Software Bill of Materials (SBOM)", "Ignore dependencies", "Trust the vendor blindly", "No tracking"],
          "correct": "AI/Software Bill of Materials (SBOM)",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "RECORD RISK RATING",
        "placeholder": "vendor-foundation-v4",
        "button": "Apply",
        "response": "[TPRM] Model card reviewed; training data partly undisclosed.\n[TPRM] SBOM incomplete: 2 components unverified.\n[TPRM] Vendor risk rating: MEDIUM-HIGH.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show gaps",
          "out": "[TPRM] Missing: bias eval results\n[TPRM] Missing: data licensing proof\n[TPRM] Action: request before onboarding",
          "task": "t4"
        },
        { "cmd": "show controls", "out": "[TPRM] Model card, SBOM, contract clauses, eval." },
        { "cmd": "show status", "out": "TPRM engine nominal." }
      ]
    }
  },
  {
    "id": "Lab 20",
    "num": 20,
    "group": "AI GOVERNANCE, RISK & COMPLIANCE",
    "title": "Operationalizing AI Compliance",
    "desc": "Turn AI policy into continuous, auditable practice. You select an automated control-monitoring approach, map a control to its evidence source, and generate a compliance attestation report.",
    "objectives": [
      "Translate AI governance policy into operational controls.",
      "Automate continuous control monitoring and evidence collection.",
      "Generate an audit-ready compliance attestation."
    ],
    "console": {
      "host": "ai-lab20",
      "boot": [
        "[SYS] AI compliance operations lab online.",
        "[SYS] Control framework loaded: NIST AI RMF + EU AI Act."
      ],
      "tasks": [
        { "id": "t1", "label": "Select the monitoring approach for controls" },
        { "id": "t2", "label": "Map the access-control to its evidence source" },
        { "id": "t3", "label": "Generate the compliance attestation" },
        { "id": "t4", "label": "Show the control compliance dashboard" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Approach for ongoing control assurance",
          "options": ["Continuous control monitoring", "One annual manual check only", "No monitoring", "Trust without evidence"],
          "correct": "Continuous control monitoring",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Evidence source for RBAC enforcement",
          "options": ["IAM access logs and config snapshots", "A verbal claim", "An unsigned spreadsheet", "No evidence"],
          "correct": "IAM access logs and config snapshots",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "GENERATE ATTESTATION",
        "placeholder": "ai-compliance-q2",
        "button": "Apply",
        "response": "[COMPLY] 42 controls evaluated automatically.\n[COMPLY] 39 passing, 3 exceptions with remediation dates.\n[COMPLY] Attestation report signed and archived.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show dashboard",
          "out": "[COMPLY] Govern: 100% | Map: 95%\n[COMPLY] Measure: 90% | Manage: 88%\n[COMPLY] Overall: 93% compliant",
          "task": "t4"
        },
        { "cmd": "show exceptions", "out": "[COMPLY] 3 open: drift logging, DPIA refresh, SBOM." },
        { "cmd": "show status", "out": "Compliance engine nominal." }
      ]
    }
  }
];
