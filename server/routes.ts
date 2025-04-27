import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { contactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const validatedData = contactMessageSchema.parse(req.body);
      
      // Save message
      const message = await storage.saveContactMessage(validatedData);
      
      // Return success response
      return res.status(200).json({
        success: true,
        message: "Contact message received",
        data: { id: message.id },
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Invalid request data",
          errors: error.errors,
        });
      }
      
      console.error("Error handling contact message:", error);
      return res.status(500).json({
        success: false,
        message: "An error occurred while processing your request",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
