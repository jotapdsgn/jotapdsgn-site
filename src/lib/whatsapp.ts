export const WHATSAPP_NUMBER = "5537998623827";

export function openWhatsAppWithMessage(message: string) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
