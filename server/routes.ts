import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";
import express from "express";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Serve static assets from attached_assets folder
  const assetsPath = path.resolve(process.cwd(), "attached_assets");
  app.use("/attached_assets", express.static(assetsPath));

  // Serve the static HTML website at root
  app.get("/", (_req, res) => {
    const indexPath = path.resolve(process.cwd(), "index.html");
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(404).send("index.html not found");
    }
  });

  return httpServer;
}
