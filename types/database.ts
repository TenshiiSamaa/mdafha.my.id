import { ObjectId } from "mongodb";

export interface BaseDocument {
  _id?: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export interface Project extends BaseDocument {
  title: string;
  slug: string;
  description: string;
  content: string; // Markdown details
  coverImage: string; // Uploadthing URL
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
  featured: boolean;
  order: number;
}

export interface Certificate extends BaseDocument {
  title: string;
  issuer: string;
  issueDate: Date;
  credentialId?: string;
  credentialUrl?: string;
  image: string; // Uploadthing URL
  order: number;
}

export interface Career extends BaseDocument {
  company: string;
  role: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Freelance" | "Internship";
  startDate: Date;
  endDate?: Date; // Undefined/null means "Present"
  description: string[]; // List of accomplishments
  order: number;
}

export interface User extends BaseDocument {
  email: string;
  name: string;
  role: "admin" | "guest";
  image?: string;
}

export interface Comment extends BaseDocument {
  authorName: string;
  authorEmail: string;
  content: string;
  approved: boolean;
  pageSlug: string; // Dynamic route slug context
}

export interface Like extends BaseDocument {
  pageSlug: string;
  count: number;
  ipHash: string; // Simple unique visitor hash
}

export interface Setting extends BaseDocument {
  key: string;
  value: unknown;
  description?: string;
}
