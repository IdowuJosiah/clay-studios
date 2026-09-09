// Client helper: POST a form submission to our own /api/lead route (which
// emails it via Resend), with a mailto fallback the forms use on failure.

export async function submitLead(payload: Record<string, unknown>): Promise<void> {
  const res = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const body = (await res.json().catch(() => null)) as {
      error?: string;
    } | null;
    throw new Error(body?.error || "Something went wrong. Please try again.");
  }
}

// Build a pre-filled mailto so a request is never lost if the API is down or
// not configured yet. Keys starting with "_" are skipped; the rest render as
// "Label: value" lines (pass already-readable labels as keys).
export function buildMailto(
  to: string,
  subject: string,
  fields: Record<string, unknown>,
): string {
  const bodyText = Object.entries(fields)
    .filter(([k, v]) => !k.startsWith("_") && v)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
}
