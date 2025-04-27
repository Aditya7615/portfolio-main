import { contactMessages, type ContactMessage, type InsertContactMessage } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// Storage interface definition
export interface IStorage {
  saveContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  getContactMessageById(id: number): Promise<ContactMessage | undefined>;
}

export class DatabaseStorage implements IStorage {
  async saveContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [contactMessage] = await db
      .insert(contactMessages)
      .values(message)
      .returning();
    
    return contactMessage;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return await db.select().from(contactMessages);
  }

  async getContactMessageById(id: number): Promise<ContactMessage | undefined> {
    const [contactMessage] = await db
      .select()
      .from(contactMessages)
      .where(eq(contactMessages.id, id));
    
    return contactMessage;
  }
}

export const storage = new DatabaseStorage();
