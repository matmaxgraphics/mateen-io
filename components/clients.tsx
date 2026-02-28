'use client';

const clients = [
  { id: 1, name: 'Microsoft', logo: '⊞' },
  { id: 2, name: 'Product', logo: 'P' },
  { id: 3, name: 'Rise', logo: '⬆' },
  { id: 4, name: 'Hulus', logo: 'H' },
  { id: 5, name: 'Flash', logo: '⚡' },
];

const works = [
  { id: 1, title: 'UI Redesign', color: 'bg-green-100' },
  { id: 2, title: 'Identity System', color: 'bg-blue-100' },
  { id: 3, title: 'Campaign Design', color: 'bg-red-100' },
  { id: 4, title: 'App Interface', color: 'bg-yellow-100' },
];

export function Clients() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Clients</h2>
        
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {clients.map((client) => (
            <div key={client.id} className="flex items-center gap-3 text-foreground/60 hover:text-foreground transition">
              <span className="text-2xl font-bold">{client.logo}</span>
              <span className="text-sm font-medium">{client.name}</span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {works.map((work) => (
            <div key={work.id} className={`${work.color} w-full aspect-square rounded-lg flex items-center justify-center cursor-pointer hover:shadow-lg transition`}>
              <p className="text-sm font-medium text-center px-4">{work.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
