import { business } from "@/lib/content";

export default function WhatsAppButton({
  label = "Reach out to us on WhatsApp",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={`https://wa.me/${business.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-sm font-semibold text-maroon-900 transition-colors hover:bg-[#1ebe5b] ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-4 w-4 shrink-0 fill-current"
      >
        <path d="M17.47 14.38c-.3-.15-1.73-.85-2-.95-.27-.1-.47-.15-.66.15-.2.3-.76.95-.93 1.14-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.34.44-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.73-.71 1.98-1.39.24-.68.24-1.26.17-1.39-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 01-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 01-1.44-5.01c0-5.19 4.23-9.41 9.43-9.41 2.52 0 4.88.98 6.66 2.76a9.35 9.35 0 012.75 6.66c0 5.19-4.23 9.41-9.42 9.41zm8.02-17.43A11.28 11.28 0 0012.04.86C5.8.86.72 5.94.72 12.18c0 1.99.52 3.94 1.51 5.66L.62 23.5l5.8-1.52a11.3 11.3 0 005.4 1.38h.01c6.24 0 11.32-5.08 11.32-11.32 0-3.02-1.18-5.86-3.32-8z" />
      </svg>
      {label}
    </a>
  );
}
