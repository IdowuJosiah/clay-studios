type Provider = "youtube" | "drive";

function embedSrc(provider: Provider, id: string) {
  if (provider === "drive") {
    return `https://drive.google.com/file/d/${id}/preview`;
  }
  return `https://www.youtube-nocookie.com/embed/${id}`;
}

export default function VideoEmbed({
  id,
  title,
  provider = "youtube",
}: {
  id: string;
  title: string;
  provider?: Provider;
}) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg border border-line bg-black">
      <iframe
        src={embedSrc(provider, id)}
        title={title}
        className="h-full w-full"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
