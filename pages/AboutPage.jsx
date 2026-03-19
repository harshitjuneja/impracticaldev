function AboutPage() {
  const { usePageTitle } = window.AppUtils;
  usePageTitle("About | Impractical Dev");

  return (
    <div className="about-page">
      <section className="page-head reveal">
        <p className="kicker">Profile</p>
        <h1>About Me</h1>
        <p className="lead">Health AI and computer vision researcher with product engineering and developer community leadership experience.</p>
      </section>

      <section className="grid reveal about-overview">
        <article className="card">
          <h2>Quick Profile</h2>
          <ul className="plain-list">
            <li><strong>Name:</strong> Harshit Juneja</li>
            <li><strong>Current Role:</strong> Artificial Intelligence Researcher at University Hospital Schleswig-Holstein (UKSH)</li>
            <li><strong>Location:</strong> Dresden, Saxony, Germany</li>
            <li><strong>Focus:</strong> Health AI, liver cancer risk modeling, medical imaging</li>
          </ul>
        </article>
        <article className="card">
          <h2>Contact</h2>
          <ul className="plain-list">
            <li><strong>Mobile:</strong> +91 8287445510</li>
            <li><strong>Email:</strong> junejaharshit01@gmail.com</li>
            <li><strong>LinkedIn:</strong> <a className="text-link" href="https://www.linkedin.com/in/harshitjuneja" target="_blank" rel="noopener noreferrer">linkedin.com/in/harshitjuneja</a></li>
            <li><strong>YouTube:</strong> <a className="text-link" href="https://www.youtube.com/@impracticaldev" target="_blank" rel="noopener noreferrer">@impracticaldev</a></li>
          </ul>
        </article>
        <article className="card">
          <h2>Skills And Languages</h2>
          <ul className="plain-list">
            <li><strong>Top Skills:</strong> Liver Disease Modeling, MRI, CT Scan</li>
            <li><strong>Languages:</strong> Hindi (native), English (full professional), German (elementary)</li>
            <li><strong>Core Areas:</strong> Machine Learning, Computer Vision, AWS Development, Product Engineering</li>
          </ul>
        </article>
      </section>

      <section className="stack reveal about-details">
        <article className="card">
          <h2>Experience</h2>
          <ul className="plain-list">
            <li><strong>University Hospital Schleswig-Holstein (UKSH)</strong> - Artificial Intelligence Researcher (Dec 2025 - Present, Kiel, Germany)</li>
            <li>Building risk stratification models for liver cancer patients.</li>
            <li><strong>FFB - FIL Fondsbank GmbH</strong> - Assistant Manager (Feb 2022 - Dec 2024, Kronberg, Germany)</li>
            <li>Worked cross-functionally with marketing, legal, product, customer services, and developers across Germany, UK, India, and China.</li>
            <li>Developed an AWS cloud based SaaS chatbot serving personal investing and advisory businesses with 650,000+ customers.</li>
            <li>Used customer feedback to drive redesign, reducing average customer service calls by 35.7% annually.</li>
            <li>Automated monthly reporting for employer contribution business, saving 120,000 EUR yearly and reducing data errors.</li>
            <li><strong>Otto-von-Guericke University Magdeburg</strong> - Research Assistant, AI Lab (Mar 2023 - Feb 2024, Germany)</li>
            <li>Built neural approaches to synthesize contrast-enhanced T1 MRI to address missing modality challenges in glioma segmentation.</li>
            <li>Improved structural fidelity in cross-modal registration and reconstruction, achieving strong SSIM scores.</li>
            <li>Evaluated segmentation networks and achieved performance comparable to original T1CE in segmentation tasks.</li>
            <li><strong>Impractical Dev</strong> - Founding Instructor (Oct 2020 - Feb 2024)</li>
            <li>Created educational technical content for developers on YouTube.</li>
            <li><strong>Meta</strong> - Developer Circle Lead (Nov 2018 - Jun 2022, Delhi NCR)</li>
            <li>Grew and nurtured a 16,500+ member developer community, hosted 100+ events, and led strategy for engagement and growth.</li>
            <li><strong>Fidelity International</strong> - Analyst Programmer (Jun 2017 - Nov 2021, Gurgaon, India)</li>
            <li>Led a team of 4 developers and delivered critical account and transaction journeys.</li>
            <li>Contributed to frontend migration from Backbone to React and improved mobile-first user experiences.</li>
            <li>Revamped login flows during migration, contributing to a 14% increase in NPS for advisory business.</li>
            <li><strong>Bennett Coleman and Co. Ltd. (Times Group)</strong> - English Language Teacher (Jun 2014 - Sep 2014)</li>
            <li>Taught spoken English and employability skills under the Teach India program.</li>
          </ul>
        </article>

        <article className="card">
          <h2>Education</h2>
          <ul className="plain-list">
            <li><strong>Otto-von-Guericke University Magdeburg</strong> - M.S. Data and Knowledge Engineering (Machine Learning and Recommendation Systems), 2021 - 2023</li>
            <li><strong>The NorthCap University</strong> - B.E. Computer Science and Engineering, 2013 - 2017</li>
          </ul>
        </article>

        <article className="card">
          <h2>Certifications</h2>
          <ul className="plain-list">
            <li>AWS Certified Developer - Associate</li>
            <li>Facebook Certified Community Manager</li>
          </ul>
        </article>

        <article className="card">
          <h2>Honors And Awards</h2>
          <ul className="plain-list">
            <li>Gold Medal for Zonal Level Science Exhibition</li>
            <li>Times of India: Teach India 100% Placement Award</li>
            <li>Vice Chancellor Innovation Fund Grant</li>
            <li>Fidelity Everything Counts Award: Innovation</li>
            <li>Fidelity On the Spot Award</li>
          </ul>
        </article>

        <article className="card">
          <h2>Publication</h2>
          <p><strong>Impact of Synthetic Contrast-Enhanced MRI on Brain Tumor Segmentation</strong></p>
        </article>
      </section>
    </div>
  );
}

window.RoutePages = window.RoutePages || {};
window.RoutePages.AboutPage = AboutPage;
