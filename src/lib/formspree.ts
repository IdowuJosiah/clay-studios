// Formspree integration for the contact/request forms.
//
// Set NEXT_PUBLIC_FORMSPREE_ID to your form's ID — the part after "/f/" in the
// endpoint Formspree gives you (e.g. "xldergqw" from
// https://formspree.io/f/xldergqw). Submissions are emailed to whatever
// address that form is configured to notify in the Formspree dashboard
// (set it to claycreationshq@gmail.com).
export const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

type Payload = Record<string, unknown>;

export async function submitToFormspree(data: Payload): Promise<void> {
  if (!FORMSPREE_ID) {
    throw new Error(
      "Form is not configured yet. Please reach us on WhatsApp or by email.",
    );
  }

  const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const body = (await res.json().catch(() => null)) as {
      errors?: { message: string }[];
    } | null;
    const message = body?.errors?.map((e) => e.message).join(", ");
    throw new Error(message || "Something went wrong. Please try again.");
  }
}

// Fallback: build a pre-filled mailto: link so a request is never lost when
// Formspree is unavailable (e.g. the monthly submission cap is reached) or not
// configured yet. Keys starting with "_" and internal fields are dropped, and
// the rest are laid out as readable "Label: value" lines.
const FIELD_LABELS: Record<string, string> = {
  name: "Full name",
  phone: "Phone number",
  email: "Email address",
  idType: "Valid ID type",
  gear: "Gear to rent",
  pickupDate: "Pick-up date",
  returnDate: "Return date",
  projectType: "Project type",
  details: "Project details",
  reference: "Reference",
};

export function buildMailto(
  to: string,
  subject: string,
  data: Record<string, unknown>,
): string {
  const body = Object.entries(data)
    .filter(([k, v]) => !k.startsWith("_") && k !== "form" && v)
    .map(([k, v]) => `${FIELD_LABELS[k] ?? k}: ${v}`)
    .join("\n");
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
