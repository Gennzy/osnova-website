interface Env {
  TG_BOT_TOKEN: string;
  TG_CHAT_ID: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { TG_BOT_TOKEN, TG_CHAT_ID } = context.env;

  if (!TG_BOT_TOKEN || !TG_CHAT_ID) {
    return new Response(JSON.stringify({ error: 'Server misconfigured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = (await context.request.json()) as { message?: string };
    const message = body.message;

    if (!message || typeof message !== 'string') {
      return new Response(JSON.stringify({ error: 'Missing message' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const tgRes = await fetch(
      `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TG_CHAT_ID,
          text: message,
          parse_mode: 'HTML',
        }),
      }
    );

    if (!tgRes.ok) {
      const errText = await tgRes.text();
      console.error('Telegram API error:', errText);
      return new Response(JSON.stringify({ error: 'Telegram API error' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    console.error('Lead handler error:', e);
    return new Response(JSON.stringify({ error: 'Internal error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
