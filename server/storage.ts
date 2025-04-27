import { contactMessages, type ContactMessage, type InsertContactMessage } from "@shared/schema";

// Storage interface definition
export interface IStorage {
  saveContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  getContactMessageById(id: number): Promise<ContactMessage | undefined>;
}

export class MemStorage implements IStorage {
  private messages: Map<number, ContactMessage>;
  private currentMessageId: number;

  constructor() {
    this.messages = new Map();
    this.currentMessageId = 1;
  }

  async saveContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentMessageId++;
    const timestamp = new Date().toISOString();
    
    const contactMessage: ContactMessage = {
      id,
      name: message.name,
      email: message.email,
      message: message.message,
      createdAt: timestamp
    };
    
    this.messages.set(id, contactMessage);
    return contactMessage;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.messages.values());
  }

  async getContactMessageById(id: number): Promise<ContactMessage | undefined> {
    return this.messages.get(id);
  }
}

export const storage = new MemStorage();
