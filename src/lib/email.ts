import { formatNaira } from "@/lib/content";

// Shapes posted from the forms to /api/lead.
export type Lead =
  | {
      type: "rental";
      name?: string;
      phone?: string;
      email?: string;
      pickupDate?: string;
      returnDate?: string;
      items?: { name: string; price?: number | null }[];
      totalLabel?: string;
    }
  | {
      type: "consultation";
      name?: string;
      phone?: string;
      email?: string;
      projectType?: string;
      details?: string;
      reference?: string;
    };

// Escape user-provided text before it goes into the HTML email.
function esc(value: unknown): string {
  return String(value ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c] as string,
  );
}

const C = {
  bg: "#efecec",
  card: "#ffffff",
  maroon: "#692b2b",
  maroon900: "#351616",
  cream: "#f8f6f5",
  ink: "#211a1a",
  muted: "#8a8080",
  line: "#ece7e7",
};

function row(label: string, value?: string): string {
  if (!value) return "";
  return `<tr>
    <td style="padding:7px 0;color:${C.muted};font-size:13px;width:130px;vertical-align:top">${esc(label)}</td>
    <td style="padding:7px 0;color:${C.ink};font-size:14px;white-space:pre-line">${esc(value)}</td>
  </tr>`;
}

function shell(heading: string, inner: string): string {
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
  <body style="margin:0;padding:0;background:${C.bg};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.bg}">
      <tr><td align="center" style="padding:28px 16px">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:${C.card};border-radius:14px;overflow:hidden;border:1px solid ${C.line}">
          <tr><td style="background:${C.maroon900};padding:20px 28px">
            <span style="color:${C.cream};font-weight:800;letter-spacing:.08em;font-size:13px">CLAY STUDIO CREATIONS</span>
          </td></tr>
          <tr><td style="padding:28px">
            <h1 style="margin:0 0 18px;font-size:20px;line-height:1.25;color:${C.ink}">${esc(heading)}</h1>
            ${inner}
          </td></tr>
          <tr><td style="padding:16px 28px;background:${C.cream};color:${C.muted};font-size:12px;line-height:1.5">
            Sent from the Clay Studio Creations website. Reply to this email to reach the sender directly.
          </td></tr>
        </table>
      </td></tr>
    </table>
  </body></html>`;
}

export function buildLeadEmail(lead: Lead): {
  subject: string;
  html: string;
  replyTo?: string;
} {
  const name = "name" in lead ? (lead.name ?? "").trim() : "";
  const replyTo = "email" in lead ? lead.email || undefined : undefined;

  if (lead.type === "rental") {
    const items = lead.items ?? [];
    const itemRows = items
      .map(
        (i) => `<tr>
          <td style="padding:8px 0;border-bottom:1px solid ${C.line};font-size:14px;color:${C.ink}">${esc(i.name)}</td>
          <td align="right" style="padding:8px 0;border-bottom:1px solid ${C.line};font-size:14px;font-weight:600;color:${C.maroon}">${
            i.price != null ? formatNaira(i.price) : "On request"
          }</td>
        </tr>`,
      )
      .join("");

    const inner = `
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px">
        ${row("Name", lead.name)}
        ${row("Phone", lead.phone)}
        ${row("Email", lead.email)}
        ${row("Pick-up", lead.pickupDate)}
        ${row("Return", lead.returnDate)}
      </table>
      <p style="margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:${C.muted}">Gear requested</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        ${itemRows}
        <tr>
          <td style="padding:12px 0 0;font-size:14px;font-weight:700;color:${C.ink}">Estimated total / day</td>
          <td align="right" style="padding:12px 0 0;font-size:14px;font-weight:700;color:${C.maroon}">${esc(lead.totalLabel ?? "")}</td>
        </tr>
      </table>`;

    return {
      subject: `New rental request${name ? ` from ${name}` : ""} — Clay Studio Creations`,
      html: shell("New rental request", inner),
      replyTo,
    };
  }

  const inner = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${row("Name", lead.name)}
      ${row("Phone", lead.phone)}
      ${row("Email", lead.email)}
      ${row("Project type", lead.projectType)}
      ${row("Details", lead.details)}
      ${row("Reference", lead.reference)}
    </table>`;

  return {
    subject: `New consultation request${name ? ` from ${name}` : ""} — Clay Studio Creations`,
    html: shell("New consultation request", inner),
    replyTo,
  };
}
