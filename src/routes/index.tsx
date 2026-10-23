import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Keerthi M — Data Analyst Portfolio" },
      { name: "description", content: "Keerthi M, MBA (HR & Operations) from SRMIST, aspiring Data Analyst skilled in Excel, Power BI, MySQL and Python." },
      { property: "og:title", content: "Keerthi M — Data Analyst Portfolio" },
      { property: "og:description", content: "Dashboards and analysis by Keerthi M, aspiring Data Analyst from Kollam, Kerala." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const skills = [
  { name: "Excel", note: "Pivot tables, formulas, charts, dashboards" },
  { name: "Power BI", note: "DAX, data modelling, interactive reports" },
  { name: "MySQL", note: "Queries, joins, aggregations, subqueries" },
  { name: "Python", note: "Pandas, NumPy, data cleaning, visualisation" },
];

const projects = [
  {
    tag: "Excel",
    title: "Student Performance Dashboard",
    desc: "An interactive Excel dashboard tracking student marks, attendance and grade distribution — using pivot tables, slicers and charts to surface top performers and students who need support.",
    points: ["Pivot tables & slicers", "Conditional formatting", "KPI summary cards"],
  },
  {
    tag: "Power BI",
    title: "Heart Disease Analysis Dashboard",
    desc: "A Power BI report exploring heart disease risk factors across age, gender, cholesterol and blood pressure, helping identify patterns linked to higher risk.",
    points: ["DAX measures", "Drill-down visuals", "Risk-factor breakdowns"],
  },
];

function Index() {
  return (
    <div className="min-h-screen">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <span className="font-display text-xl font-semibold">Keerthi M</span>
        <nav className="flex gap-6 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground">About</a>
          <a href="#skills" className="hover:text-foreground">Skills</a>
          <a href="#projects" className="hover:text-foreground">Projects</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>
      </header>

      <section className="mx-auto max-w-5xl px-6 pb-24 pt-16">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">Aspiring Data Analyst · Kollam, Kerala</p>
        <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
          Turning raw data into <em className="text-primary">clear decisions.</em>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Hi, I'm Keerthi — an MBA graduate in HR & Operations who loves finding the story behind numbers with Excel, Power BI, SQL and Python.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="#projects" className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">View projects</a>
          <a href="#contact" className="rounded-md border px-5 py-3 text-sm font-medium hover:bg-secondary">Get in touch</a>
        </div>
      </section>

      <section id="about" className="border-y bg-card">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-3">
          <h2 className="text-3xl font-semibold">About</h2>
          <div className="space-y-4 text-muted-foreground md:col-span-2">
            <p>I completed my <strong className="text-foreground">MBA with dual specialization in Human Resources and Operations</strong> from SRM Institute of Science and Technology (SRMIST). That background taught me how businesses run — and how much good decisions depend on good data.</p>
            <p>I'm currently pursuing a <strong className="text-foreground">Data Analytics course</strong>, building hands-on skills in Excel, Power BI, MySQL and Python, and applying them to real-world dashboards.</p>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-10 text-3xl font-semibold">Skills</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s) => (
            <div key={s.name} className="rounded-lg border bg-card p-6">
              <h3 className="text-xl font-semibold text-primary">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="mb-10 text-3xl font-semibold">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.title} className="rounded-xl bg-card p-8 text-card-foreground">
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">{p.tag}</span>
                <h3 className="mt-4 text-2xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-muted-foreground">{p.desc}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="rounded-md bg-secondary px-3 py-1 text-xs">{pt}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="text-4xl font-semibold">Let's work together</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Open to Data Analyst roles and internships. I'd love to hear from you.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="mailto:keerthi@example.com" className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">Email me</a>
          <a href="https://linkedin.com" className="rounded-md border px-5 py-3 text-sm font-medium hover:bg-secondary">LinkedIn</a>
        </div>
      </section>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">© 2026 Keerthi M · Kollam, Kerala</footer>
    </div>
  );
}
