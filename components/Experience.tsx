export default function Experience() {
    const jobs = [
      {
        title: "Desarrollador Frontend",
        company: "Tech Software",
        period: "2022 - 2025",
        description: "Desarrollo de paginas web utilizando CSS y JavaScript"
      },
      {
        title: "Practicante Desarrollo Web",
        company: "SOLUCIONES TECH",
        period: "2020 - 2022",
        description: "Soporte técnico y desarrollo de aplicaciones web con React"
      }
    ];
  
    return (
      <section id="experience" className="min-h-screen py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Experiencia</h2>
          <div className="space-y-8">
            {jobs.map((job, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-6 py-2">
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-gray-600">{job.company} · {job.period}</p>
                <p className="mt-2 text-gray-500">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }