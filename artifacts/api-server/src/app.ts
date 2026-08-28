import express, { type Express, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
const pinoHttp = require("pino-http");
import router from "./routes";
import { logger } from "./lib/logger";


const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req: any) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res: any) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);

// Peningkatan Keamanan
app.use(helmet());

// Konfigurasi Rate Limiting (Mencegah brute force/spam)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 menit
  max: 100, // batas 100 request per IP per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: "Terlalu banyak permintaan dari IP ini, coba lagi dalam 15 menit.",
});
app.use(limiter);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

// Add root route to prevent 404 on the main page
app.get("/", (req: Request, res: Response) => {
  res.send("🚀 E17 Course API is running successfully!");
});

export default app;
