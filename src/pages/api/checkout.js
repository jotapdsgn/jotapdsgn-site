import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("BODY:", req.body);
    console.log("ENV CHECK:", process.env.STRIPE_SECRET_KEY ? "Present" : "Missing");

    const { amount } = req.body;
    const safeAmount = Number(amount || 0);

    if (!safeAmount || safeAmount <= 0) {
      return res.status(400).json({ error: "Amount inválido" });
    }

    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: [
          {
            price_data: {
              currency: "brl",
              product_data: {
                name: "Jotapdsgn - Projeto",
              },
              unit_amount: Math.round(safeAmount * 100),
            },
            quantity: 1,
          },
        ],
        // Fallback para localhost caso a variável não exista
        success_url: `${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}/sucesso`,
        cancel_url: `${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}/cancelado`,
      });

      return res.status(200).json({ url: session.url });
    } catch (err) {
      console.log("STRIPE ERROR DETAILS:", JSON.stringify(err, null, 2));
      return res.status(500).json({ error: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}