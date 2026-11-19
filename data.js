// ============================================================================
// ACADEMIC WEBSITE CONTENT FILE (JSON-style data)
// ============================================================================
// EVERYTHING IN THIS FILE IS OPTIONAL:
// - Don't want buttons on a paper, talk, or project? Set `links: []` (or omit `links`).
// - Don't want an image on a paper or talk? Set `image: ""` (or omit `image`).
// - Don't want a status badge, summary, award, or BibTeX? Set it to `""` (or omit it).
// - Don't want an entire section (e.g. `news: []` or `projects: []`)? Empty the array
//   and the entire section + its top navigation link will automatically disappear!
//
// LATEX MATH SUPPORT (via KaTeX):
// - Write inline math with $...$, e.g. "optimizing $\mathcal{L}(\theta)$ in $\mathbb{R}^d$".
// - Note: Because this is a JS file, if you use backticks `...` or quotes "...",
//   use String.raw`...` or double-backslash `\\alpha` when writing LaTeX commands!
//   Tip: Prefixing any string containing LaTeX with String.raw`...` lets you write
//   normal single-backslash LaTeX like String.raw`We prove an $O(\sqrt{T})$ bound.`
// ============================================================================

const SITE_DATA = {
  // 1. PROFILE & BIO
  profile: {
    name: "Theophilus Amaefuna",
    role: "PhD Student in Computer Science",
    department: "Bellini College of Artificial Intelligence, Cybersecurity and Computing",
    university: "University of South Florida",
    location: "📍 Tampa, FL",
    avatar: "assets/profile-placeholder.svg",
    cvUrl: "assets/PostGrad_CV.pdf",
    lastUpdated: "November 2026",

    // Social / Academic Links (leave url: "" to hide any button)
    links: [
      { label: "✉️ Email", url: "mailto:ikennaamaefuna@usf.edu"  , highlight: true },
      { label: "🎓 Google Scholar", url: "https://scholar.google.com/citations?user=xu6qXxUAAAAJ&hl=en&authuser=1" },
      { label: "💻 GitHub", url: "https://github.com/ait360" },
    //   { label: "🆔 ORCID", url: "https://orcid.org" },
      { label: "🔗 LinkedIn", url: "https://linkedin.com"},
      { label: "📄 Curriculum Vitae", url: "assets/PostGrad_CV.pdf", highlight: false }
    ],

    // About Me paragraphs (HTML like <strong> or <a href="..."> is allowed)
    aboutParagraphs: [
      `I am a Fourth year PhD student in the <strong>Bellini College of Artificial Intelligence, Cybersecurity and Computing</strong> at <strong><a href="https://www.usf.edu/">University of South Florida</a></strong>, where I am fortunate to be advised by <a href="https://ankurmali.github.io/">Dr. Ankur Mali</a> at the <a href="https://tkai-lab-mali.github.io/">TrustWorthy Knowledge-Driven AI TKAI Lab</a>.`,
      `My research focuses on <strong>Curvature Weighted MDL-inspired Methods for Large Language Models (LLMs)</strong>, <strong>Predictive Coding Networks</strong>, and <strong>Formal Methods</strong>. Specifically, I am interested in understanding how to compute accurate and efficient curvature information for LLMs. I am also interested in exploring how real world contraints affect these models and the
      the limitations of current Formal methods Approaches.`,
      `Prior to starting my PhD, I received my B.S. / M.S. in Industrial Mathematics from <strong><a href="https://www.uniben.edu/">University of Benin</a></strong>, where I worked with <a href="https://scholar.google.com/citations?user=YT1rbEgAAAAJ&hl=en">Dr. Grace C. Nwachukwu</a> on Third Derivative Generalized Enright-Type Methods for Stiff Systems.`
    ],

    // Optional banner below bio (set to "" to hide the callout box completely)
    // statusCallout: `<strong>📢 Open to Collaboration / Internships:</strong> I am always happy to chat about research collaborations in [Topic]. Feel free to reach out at <code>your.email [at] university.edu</code>.`,
    statusCallout: "",

    researchInterests: [
    //   "[Research Topic / Method 1]",
      "Predictive Coding Networks",
      "Curvature Weighted MDL-inspired Methods for Large Language Models (LLMs)",
      "Formal Methods",
      "Influence Functions",
    //   "[Research Topic / Method 2]",
    //   "[Application Domain 3]",
    //   "[Open Science / Reproducibility]"
    ],

    education: [
      {
        degree: "PhD in Computer Science",
        years: "2023 – Present",
        institution: "University of South Florida, Florida, USA"
      },
      {
        degree: "M.Sc. in Industrial Mathematics",
        years: "2021",
        institution: "University of Benin, Benin City, Nigeria"
      },
      {
        degree: "B.Sc. in Industrial Mathematics",
        years: "2015",
        institution: "University of Benin, Benin City, Nigeria"
      }
    ]
  },

  // 2. RECENT NEWS
  news: [
    {
      date: "Sep 2026",
      text: `I gave a talk on our UAI-accepted paper <em>"Curvature-Weighted Capacity Allocation: A Minimum Description Length Framework for Layer-Adaptive Large Language Model Optimization"</em> 
            at the <strong>USF AI+X talk series</strong> as a featured speaker!`
    },
    {
      date: "Sep 2026",
      text: `Our paper <em>"Curvature-Weighted Capacity Allocation: A Minimum Description Length Framework for Layer-Adaptive Large Language Model Optimization"</em> 
            was published at <strong>Proceedings of the 42nd Conference on Uncertainty in Artificial Intelligence</strong>!`
    },
    {
      date: "May 2026",
      text: `Our paper <em>"Curvature-Weighted Capacity Allocation: A Minimum Description Length Framework for Layer-Adaptive Large Language Model Optimization"</em> 
            was accepted to <strong>Conference on Uncertainty in Artificial Intelligence</strong>!`
    },
    // {
    //   date: "Sep 2026",
    //   text: `Our paper <em>"[Paper Title]"</em> was accepted to <strong>[Journal / Conference Name]</strong>!`
    // },
    // {
    //   date: "May 2026",
    //   text: `Awarded the <strong>[Fellowship / Travel Grant Name]</strong> for the 2026–2027 academic year.`
    // },
    {
      date: "Aug 2023",
      text: `Started my PhD journey at <strong>University of South Florida</strong>!`
    }
  ],

  // 3. PUBLICATIONS & PREPRINTS
  // Note: `image` is optional! Set `image: ""` if a paper has no figure.
  publications: [
    {
      title: "Curvature-Weighted Capacity Allocation: A Minimum Description Length Framework for Layer-Adaptive Large Language Model Optimization",
      url: "https://proceedings.mlr.press/v337/amaefuna26a",
      authors: "<strong>Theophilus Amaefuna*</strong>, Hitesh Vaidya*, Anshuman Chhabra, Ankur Mali",
      venue: "42nd Conference on Uncertainty in Artificial Intelligence, 2026",
      status: "Published", // e.g. "Published", "Preprint / Under Review"
      isPublished: true,                // true = green badge, false = amber badge
      award: "",                         // optional award text, e.g. "🏆 Best Paper"
      image: "assets/workflow_v2.png", // optional! Leave "" for no image (converted from workflow_v2.pdf)
      summary: String.raw`We propose <strong>LayerGain</strong> $\zeta_k^2 = g_k^\top \widetilde{H}_{kk}^{-1} g_k$, a curvature-weighted MDL-inspired framework that quantifies layer quality via normalized LayerGain
      $q_k$ to derive closed-form layer-wise expert allocation and pruning under budget constraints, along with quadratic transfer regret bounds across tasks.`,
      links: [
        { label: "📄 PDF", url: "https://openreview.net/pdf?id=K3RH5EuzD8" },
        { label: "💻 Code", url: "https://github.com/TKAI-LAB-Mali/Curvature-Weighted-Capacity-Allocation"},
        // { label: "📊 Dataset", url: "#" }
      ],
      imagePosition: "top", // "top" = wide figure above text, "side" = figure on left side of text "bottom" = wide figure below text. Omit or set to "" for default layout.
      bibtex: `@article{amaefuna2026title,
  title={Curvature-Weighted Capacity Allocation: A Minimum Description Length Framework for Layer-Adaptive Large Language Model Optimization},
  author={Amaefuna, Theophilus and Vaidya, Hitesh and Chhabra, Anshuman and Mali, Ankur},
  journal={Proceedings of Machine Learning Research},
  year={2026}
}`
    },
//     {
//       title: "[Title of Your Published Paper (Example Without an Image)]",
//       url: "#",
//       authors: "First Author*, <strong>Alex Rivera*</strong>, and Advisor Name",
//       venue: "Proceedings of the [Conference / Journal Name], 2025",
//       status: "Published",
//       isPublished: true,
//       award: "🏆 Best Poster Runner-Up",
//       image: "", // <-- Empty string means no image; card automatically expands to full width!
//       summary: "We propose a novel method for [problem], improving accuracy/understanding by [key metric or insight] across [benchmark/system].",
//       links: [
//         { label: "📄 PDF", url: "#" },
//         { label: "💻 Code", url: "#" },
//         { label: "🖥️ Slides", url: "#" }
//       ],
//       bibtex: `@inproceedings{author2025title,
//   title={[Title of Your Published Conference or Journal Paper]},
//   author={Author, First and Rivera, Alex and Name, Advisor},
//   booktitle={Proceedings of [Conference/Journal]},
//   year={2025}
// }`
//     }
  ],

  // 4. TALKS & PRESENTATIONS
  // Note: `image` is optional! Set `image: ""` if a talk has no thumbnail image.
  // `badgeStyle` can be: "invited" (blue), "contributed" (gray), or "poster" (purple) featured in the talk card. Omit or set to "" for no badge.
  talks: [
    {
      date: "Sep 2026",
      type: "Featured Speaker",
      badgeStyle: "featured",
      title: "Curvature-Weighted Capacity Allocation: A Minimum Description Length Framework for Layer-Adaptive Large Language Model Optimization",
      venue: "AI+X Seminar Series",
      location: "University of South Florida, Tampa, FL",
      image: "assets/Curvature__AI_X_slide1.png", // optional! Leave "" for no image
      imagePosition: "side", // "side", "top", or "bottom"
      links: [
        { label: "🖥️ Slides (PDF)", url: "assets/Curvature__AI_X.pdf" },
        // { label: "🎥 Recording", url: "#" }
        { label: "📄 Related Paper", url: "https://openreview.net/pdf?id=K3RH5EuzD8" }
      ]
    },
    // {
    //   date: "Jul 2026",
    //   type: "Contributed Talk",
    //   badgeStyle: "contributed",
    //   title: "[Title of Your Conference Oral Presentation (Without Image)]",
    //   venue: "[Annual Meeting / Conference Name]",
    //   location: "[City, Country]",
    //   image: "", // <-- No image on this talk
    //   links: [
    //     { label: "🖥️ Slides (PDF)", url: "#" },
    //     { label: "📄 Related Paper", url: "#" }
    //   ]
    // },
    // {
    //   date: "Oct 2025",
    //   type: "Poster",
    //   badgeStyle: "poster",
    //   title: "[Title of a Talk or Poster With No Buttons and No Image]",
    //   venue: "[Symposium / Workshop Name]",
    //   location: "[City, Country]",
    //   image: "",
    //   links: [] // <-- Empty links array: no buttons are rendered at all!
    // }
  ],

  // 5. RESEARCH PROJECTS
//   projects: [
//     {
//       title: "[Project Title 1: e.g., Open-Source Toolkit for X]",
//       description: "Brief description of an ongoing research theme, software package, or dataset you are building during your PhD.",
//       links: [
//         { label: "💻 GitHub Repo", url: "#" },
//         { label: "📖 Documentation", url: "#" }
//       ]
//     },
//     {
//       title: "[Project Title 2: e.g., Investigating Y under Z]",
//       description: "Even if a project hasn't resulted in a paper yet, describing your active direction helps potential collaborators find you.",
//       links: [
//         { label: "🔗 Project Overview", url: "#" }
//       ]
//     }
//   ],

  // 6. TEACHING & SERVICE
  teaching: [
    {
      course: "CAP 4641: Natural Language Processing",
      role: "Teaching Assistant, University of South Florida • Spring 2024, Spring 2025, Spring 2026"
    },
    {
      course: "CAI 5307: Natural Language Processing",
      role: "Teaching Assistant, University of South Florida • Spring 2025, Spring 2026"
    },
    {
      course: "COP 6611: Operating Systems",
      role: "Teaching Assistant, University of South Florida • Fall 2025"
    },
    {
      course: "CAI 5005: Introduction to AI",
      role: "Teaching Assistant, University of South Florida • Fall 2025"
    },
    {
      course: "CIS 3213: Foundations of Cybersecurity",
      role: "Teaching Assistant, University of South Florida • Spring 2024, Summer 2025"
    },
    {
      course: "COP 4600: Operating Systems",
      role: "Teaching Assistant, University of South Florida • Spring 2025"
    },
    {
      course: "COP 2510: Programming Concepts",
      role: "Teaching Assistant, University of South Florida • Fall 2023, Summer 2024"
    },
    {
      course: "CAP 6640: Natural Language Processing",
      role: "Teaching Assistant, University of South Florida • Spring 2024"
    }
  ],

//   honorsAndService: [
//     "<strong>Reviewer:</strong> [Journal/Conference A], [Workshop B]",
//     "<strong>[Fellowship / Scholarship Name]</strong> (2025)",
//     "<strong>[Department / University Award]</strong> (2024)"
//   ]
};
