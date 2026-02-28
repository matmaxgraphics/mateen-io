'use client';

export function Focus() {
  const services = [
    { name: 'Art Direction', color: 'bg-blue-500' },
    { name: 'Branding', color: 'bg-green-500' },
    { name: 'Motion Graphics', color: 'bg-yellow-500' },
    { name: 'Web Design', color: 'bg-red-500' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Focus</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div key={service.name} className="border border-border rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-4 h-4 rounded ${service.color}`} />
                <h3 className="font-semibold">{service.name}</h3>
              </div>
              <p className="text-sm text-foreground/60">
                Specialized expertise in {service.name.toLowerCase()} and visual storytelling.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
