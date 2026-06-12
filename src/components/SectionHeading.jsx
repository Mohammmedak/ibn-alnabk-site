export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p
        className={`mb-3 text-sm font-bold tracking-[0.2em] ${
          light ? "text-[#C6A75E]" : "text-[#8D6B2D]"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`mb-4 text-3xl font-extrabold leading-tight sm:text-4xl ${
          light ? "text-white" : "text-[#1F2E24]"
        }`}
      >
        {title}
      </h2>

      <p
        className={`text-lg leading-8 ${
          light ? "text-white/80" : "text-[#4F4A43]"
        }`}
      >
        {description}
      </p>
    </div>
  );
}