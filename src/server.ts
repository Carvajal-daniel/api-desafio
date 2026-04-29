import "dotenv/config";
import { app } from "./app";

const PORT = Number(process.env.PORT) || 3000;

const start = async () => {
  try {
    await app.listen({ port: PORT, host: '0.0.0.0' });
    console.log(`🚀 Server active on http://localhost:${PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

// Em ambiente local, sobe o servidor normalmente
if (process.env.NODE_ENV !== "production") {
  start();
}

// Handler usado pela Vercel
export default async (req: any, res: any) => {
  await app.ready();
  app.server.emit('request', req, res);
};