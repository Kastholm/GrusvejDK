export default defineEventHandler(() => {
  // Do NOT return the API key itself — only a boolean indicating presence.
  const hasResendKey = !!process.env.RESEND_API_KEY;
  console.log("API ping - RESEND_API_KEY present:", hasResendKey);
  return {
    success: true,
    ping: "pong",
    resendApiKeyPresent: hasResendKey,
  };
});
