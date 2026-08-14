import app from "./app";
import { logger } from "./lib/logger";

const rawPort = process.env["PORT"] || "3000";
const port = Number(rawPort);

// Only listen on a port if we are NOT running in Vercel.
// Vercel Serverless handles the listening process automatically.
if (!process.env.VERCEL) {
  if (Number.isNaN(port) || port <= 0) {
    throw new Error(`Invalid PORT value: "${rawPort}"`);
  }

  app.listen(port, (err?: any) => {
    if (err) {
      logger.error({ err }, "Error listening on port");
      process.exit(1);
    }
    logger.info({ port }, "Server listening");
  });
}

// Required for Vercel to recognize it as a serverless function
export default app;
