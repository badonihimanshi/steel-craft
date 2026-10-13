export default function PageHeader({
  title,
  imageSeed,
}: {
  title: string;
  imageSeed: string;
}) {
  return (
    <div className="border-b border-ink/10 bg-canvas">
      <div className="h-56 w-full overflow-hidden sm:h-72">
        <img
          src={`https://picsum.photos/seed/${imageSeed}/1600/500`}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-8">
        <h1 className="font-display text-3xl font-semibold uppercase tracking-wide text-graphite sm:text-4xl">
          {title}
        </h1>
      </div>
    </div>
  );
}
