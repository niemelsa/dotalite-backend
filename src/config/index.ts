import dotenv from "dotenv";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

export default {
  port: parseInt(process.env.PORT, 10),
};
