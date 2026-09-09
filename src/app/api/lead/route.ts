import { buildLeadEmail, type Lead } from "@/lib/email";

// Receives a form submission and emails it to the studio via Resend.
// Requires RESEND_API_KEY and RESEND_FROM; LEAD_TO defaults to the studio inbox.
export async function POST(request: Request) {
  let body: (Lead & { _gotcha?: string }) | null = null;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — silently accept and drop bot submissions.
  if (body?._gotcha) {
    return Response.json({ ok: true });
  }

  if (!body || (body.type !== "rental" && body.type !== "consultation")) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const to = process.env.LEAD_TO || "claycreationshq@gmail.com";
  if (!apiKey || !from) {
    // Not configured yet — let the client fall back to a mailto.
    return Response.json({ error: "Email is not configured." }, { status: 503 });
  }

  const { subject, html, replyTo } = buildLeadEmail(body);

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        subject,
        html,
        reply_to: replyTo,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("Resend send failed:", res.status, detail);
      return Response.json({ error: "Email failed to send." }, { status: 502 });
    }
  } catch (err) {
    console.error("Resend request error:", err);
    return Response.json({ error: "Email failed to send." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
