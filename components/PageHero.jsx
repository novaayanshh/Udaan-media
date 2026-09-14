export default function PageHero({ image, title }) {
  return (
    <div className="relative w-full h-[220px] md:h-[320px] overflow-hidden">
      <img src={image} alt={title || ""} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary-dark/50" />
      {title && (
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white font-heading font-bold text-3xl md:text-5xl text-center px-4 drop-shadow-lg">
            {title}
          </h1>
        </div>
      )}
    </div>
  );
}
