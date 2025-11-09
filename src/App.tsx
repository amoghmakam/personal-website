import './App.css'

function App() {
  const projects = [
    {
      title: 'AI Privacy Redaction Tool',
      summary:
        'An AI-powered privacy shield that detects and redacts sensitive visuals and text (like license plates and personal information) from dashcam footage, web content, and AI workflows — all processed locally for maximum data security.',
      problem:
        'With the rise of AI-generated and user-recorded data, sensitive information is frequently exposed in videos, images, and text. Existing tools often rely on cloud-based processing, risking data leaks and privacy violations.',
      approach:
        'Implemented YOLOv8 and OpenCV for real-time detection of sensitive visuals. Integrated SIM AI, BrightData, and Claude MCP for privacy-safe data redaction and communication. Built a Python + JavaScript MCP module enabling seamless, local AI interactions without exposing user data.',
      impact:
        'Won 3rd place for Promise’s Public Impact Prize at CalHacks, the world’s largest collegiate hackathon. Delivered an end-to-end, privacy-preserving AI pipeline that demonstrates secure, on-device redaction for real-world data streams.',
      tags: ['Computer Vision', 'Privacy AI', 'Claude MCP', 'BrightData', 'YOLOv8', 'OpenCV', 'Hackathon Winner'],
      link: 'https://github.com/amoghmakam',
    },
    {
      title: 'Financial Market Analyst MVP',
      summary:
        'An AI-driven financial analysis pipeline that scrapes, embeds, and summarizes market data from multiple sources to produce automated, daily financial insights.',
      problem: 'Analysts spend hours manually collecting and interpreting financial data from unstructured sources like news, SEC filings, and earnings reports. This project aimed to automate that workflow using AI and retrieval-based techniques.',
      approach:
        'Built a data ingestion pipeline to scrape financial documents (news, PDFs, SEC filings). Created a vector store using FAISS to store embeddings for fast retrieval. Used LangChain and OpenAI API to implement a Retrieval-Augmented Generation (RAG) system. Deployed CrewAI agents and APScheduler for automated daily scraping, summarization, and Slack delivery.',
      impact:
        'Reduced financial data review time from hours to minutes. Enabled scalable, hands-free financial brief generation — improving analyst productivity and decision-making.',
      tags: ['NLP', 'RAG', 'FAISS', 'LangChain', 'CrewAI', 'OpenAI API', 'Python'],
      link: 'https://github.com/amoghmakam',
    },
    {
      title: 'Coming Soon...',
      summary: 'Another full-stack data science build is in the works—stay tuned for a fresh case study.',
      problem: 'Exploring a real-world challenge where responsible AI and storytelling converge.',
      approach:
        'Designing the experiment, assembling the dataset, and testing modeling ideas before publishing the full write-up.',
      impact:
        'Check back shortly for metrics, interactive visuals, and an open-source repo you can explore end to end.',
      tags: ['Designing', 'Prototyping'],
      link: 'https://github.com/amoghmakam',
    },
  ]

  const skills = [
    { category: 'Languages', items: ['Python', 'SQL', 'R', 'Java', 'HTML', 'CSS'] },
    { category: 'Libraries / Frameworks', items: ['OpenCV', 'YOLOv8', 'FAISS', 'LangChain', 'PyMuPDF', 'APScheduler'] },
    {
      category: 'AI & Data Tools',
      items: ['Vertex AI', 'OpenAI API', 'Generative AI (Text + Multimodal)', 'SIM AI', 'CrewAI'],
    },
    {
      category: 'Data Science & Analytics',
      items: ['Statistical Programming (R)', 'Applied Probability & Statistics', 'Data Structures & Algorithms', 'Big Data'],
    },
    { category: 'Developer Tools', items: ['Git', 'Jupyter Notebook', 'BrightData', 'MCP (Model Context Protocol)'] },
    { category: 'Other Interests', items: ['Data Visualization', 'Privacy AI', 'Automation', 'Predictive Modeling'] },
  ]

  const experiences = {
    professional: [
      {
        icon: '💼',
        role: 'Event Lead',
        org: 'ACM (SJSU Computer Science Club)',
        timeframe: 'Aug 2025 – Present',
        bullets: [
          'Coordinated speaker events, hackathons, and networking sessions for 100+ participants.',
          'Managed logistics and partnerships to ensure smooth event execution and high-quality experiences.',
        ],
      },
      {
        icon: '🧠',
        role: 'Data Analyst Intern',
        org: 'Humans in Space',
        timeframe: 'Jun 2023 – Aug 2023',
        bullets: [
          'Analyzed patient datasets to identify trends in musculoskeletal injuries.',
          'Built forecasting models to estimate recovery times, aiding orthopedic specialists in treatment planning.',
          'Contributed 50+ hours to developing predictive analytics for clinical applications.',
        ],
      },
    ],
    volunteer: [
      {
        icon: '💖',
        role: 'Volunteer Initiative',
        org: 'Heart to Heart Foundation',
        timeframe: 'Jul 2023 – Sep 2023',
        bullets: [
          'Hosted former Indian cricket legend Sunil Gavaskar for a fundraising event benefiting children with congenital heart defects.',
          'Raised $35,000, funding 14 free surgeries for kids in underdeveloped areas.',
          'Coordinated event logistics for 80+ attendees and conducted outreach to 500+ individuals.',
        ],
      },
    ],
  }

  const education = {
    school: 'San José State University',
    degree: 'B.S. in Data Science — Sophomore',
    details: '📍 San Jose, CA · GPA: 3.87',
    coursework: [
      'Data Structures & Algorithms',
      'Big Data',
      'Applied Probability & Statistics',
      'Statistical Programming (R)',
      'Discrete Mathematics',
      'Linear Algebra',
    ],
    clubs: ['ACM', 'Spartan Analytics'],
  }

  return (
    <div className="app">
      <nav className="top-nav">
        <a href="#home" className="brand">
          Amogh Makam
        </a>
        <nav className="nav-links">
          <ul>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </nav>

      <header id="home" className="hero">
        <div className="hero-content">
          <p className="eyebrow">Hi, I’m Amogh 👋</p>
          <h1>
            Data Science major at <span>San José State University</span> focused on responsible AI, predictive
            modeling, and building data-driven tools for social good.
          </h1>
          <div className="hero-cta">
            <a className="button primary" href="#projects">
              Explore my projects
            </a>
            <a className="button secondary" href="/Amogh%20Makam%20-%20Resume.docx%20(9)%20copy.pdf" target="_blank">
              View resume
            </a>
          </div>
        </div>
        <div className="hero-card">
          <p>Currently exploring:</p>
          <ul>
            <li>Fairness-aware modeling for student success predictions</li>
            <li>Low-latency recommender systems with vector search</li>
            <li>Storytelling dashboards for civic data transparency</li>
          </ul>
        </div>
      </header>

      <main>
        <section id="projects" className="section">
          <div className="section-heading">
            <h2>Featured Projects</h2>
            <p>
              Each project blends rigorous analytics with actionable storytelling—here’s how I tackle real-world
              problems from end to end.
            </p>
          </div>

          <div className="card-grid">
            {projects.map((project) => (
              <article key={project.title} className="card project-card">
                <header>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </header>
                <dl>
                  <div>
                    <dt>Problem</dt>
                    <dd>{project.problem}</dd>
                  </div>
                  <div>
                    <dt>Approach</dt>
                    <dd>{project.approach}</dd>
                  </div>
                  <div>
                    <dt>Impact</dt>
                    <dd>{project.impact}</dd>
                  </div>
                </dl>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a className="inline-link" href={project.link} target="_blank" rel="noreferrer">
                  View GitHub →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <h2>Skills & Technologies</h2>
            <p>Tools I rely on to move from exploratory analysis to production-grade experiences.</p>
          </div>
          <div className="skill-grid">
            {skills.map(({ category, items }) => (
              <div key={category} className="skill-card">
                <h3>{category}</h3>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading">
            <h2>Experience & Education</h2>
            <p>Focused on applying responsible AI principles while shipping measurable outcomes.</p>
          </div>

          <div className="experience-grid">
            <div className="experience-column">
              <h3>Education</h3>
              <article className="card education-card">
                <header>
                  <h4>{education.school}</h4>
                  <p>{education.degree}</p>
                  <span>{education.details}</span>
                </header>
                <div className="education-group">
                  <h5>Relevant Coursework</h5>
                  <ul>
                    {education.coursework.map((course) => (
                      <li key={course}>{course}</li>
                    ))}
                  </ul>
                </div>
                <div className="education-group">
                  <h5>Clubs</h5>
                  <ul>
                    {education.clubs.map((club) => (
                      <li key={club}>{club}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>

            <div className="experience-column">
              <h3>Professional Experience</h3>
              {experiences.professional.map((experience) => (
                <article key={experience.role} className="card experience-card">
                  <header>
                    <h4>
                      <span aria-hidden>{experience.icon}</span> {experience.role}
                    </h4>
                    <p>{experience.org}</p>
                    <span>{experience.timeframe}</span>
                  </header>
                  <ul>
                    {experience.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}

              <h3>Volunteer Work</h3>
              {experiences.volunteer.map((experience) => (
                <article key={experience.role} className="card experience-card">
                  <header>
                    <h4>
                      <span aria-hidden>{experience.icon}</span> {experience.org}
                    </h4>
                    <p>{experience.role}</p>
                    <span>{experience.timeframe}</span>
                  </header>
                  <ul>
                    {experience.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-heading">
            <h2>Say Hello</h2>
            <p>Looking for data science internships, research collaborations, or hackathon teammates.</p>
          </div>
          <div className="contact-card">
            <ul>
              <li>
                <span>Email</span>
                <a href="mailto:amogh.makam@sjsu.edu">amogh.makam@sjsu.edu</a>
              </li>
              <li>
                <span>LinkedIn</span>
                <a href="https://www.linkedin.com/in/amogh-makam-a522ab313/" target="_blank" rel="noreferrer">
                  linkedin.com/in/amogh-makam-a522ab313/
                </a>
              </li>
              <li>
                <span>GitHub</span>
                <a href="https://github.com/amoghmakam" target="_blank" rel="noreferrer">
                  github.com/amoghmakam
                </a>
              </li>
              <li>
                <span>Resume</span>
                <a href="/Amogh%20Makam%20-%20Resume.docx%20(9)%20copy.pdf" target="_blank" rel="noreferrer">
                  Download PDF
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

    </div>
  )
}

export default App
