export default function Screenshots() {
  const images = ["/img/screen1.png", "/img/screen2.png", "/img/screen3.png"];

  return (
    <section id="screenshots" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">App Screenshots</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
            >
              <img src={img} alt={`Screenshot ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
