'use client';

export function Awards() {
  const awards = [
    { number: '10X', label: 'Red Dot Awards' },
    { number: '2X', label: 'Gold Cannes' },
    { number: '4X', label: 'D&AD Awards' },
    { number: '5X', label: 'One Show' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Awards</h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {awards.map((award, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl font-bold mb-2">{award.number}</div>
              <p className="text-sm text-foreground/60">{award.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
