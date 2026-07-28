import { z } from "zod";

/**
 * Validator for MongoDB ObjectId string representation
 */
export const mongoIdSchema = z
  .string()
  .regex(/^[0-9a-fA-F]{24}$/, "Invalid MongoDB ObjectId");

/**
 * Validation schema for Project inputs
 */
export const projectValidationSchema = z.object({
  title: z.string().min(1, "Title is required").max(100),
  slug: z.string().regex(/^[a-z0-9-]+$/, "Slug must be lowercase alphanumeric and dashes only"),
  description: z.string().min(1, "Description is required").max(500),
  content: z.string().min(1, "Detailed content is required"),
  coverImage: z.string().url("Cover image must be a valid URL"),
  githubUrl: z.string().url("GitHub link must be a valid URL").optional().or(z.literal("")),
  liveUrl: z.string().url("Live link must be a valid URL").optional().or(z.literal("")),
  tags: z.array(z.string().min(1)).min(1, "Provide at least one tag"),
  featured: z.boolean().default(false),
  order: z.number().int().default(0),
});

/**
 * Validation schema for Certificate inputs
 */
export const certificateValidationSchema = z.object({
  title: z.string().min(1, "Certificate title is required").max(120),
  issuer: z.string().min(1, "Issuer is required").max(100),
  issueDate: z.coerce.date(),
  credentialId: z.string().optional().or(z.literal("")),
  credentialUrl: z.string().url("Credential link must be a valid URL").optional().or(z.literal("")),
  image: z.string().url("Certificate image must be a valid URL"),
  order: z.number().int().default(0),
});

/**
 * Validation schema for Career entry inputs
 */
export const careerValidationSchema = z.object({
  company: z.string().min(1, "Company name is required").max(100),
  role: z.string().min(1, "Role is required").max(100),
  location: z.string().min(1, "Location is required").max(100),
  type: z.enum(["Full-time", "Part-time", "Contract", "Freelance", "Internship"]),
  startDate: z.coerce.date(),
  endDate: z.coerce.date().optional(),
  description: z.array(z.string().min(1)).min(1, "Accomplishment list must contain at least one point"),
  order: z.number().int().default(0),
});

/**
 * Validation schema for Visitor Comments
 */
export const commentValidationSchema = z.object({
  authorName: z.string().min(1, "Name is required").max(50),
  authorEmail: z.string().email("Invalid email address"),
  content: z.string().min(1, "Comment content is required").max(1000),
  approved: z.boolean().default(false),
  pageSlug: z.string().min(1),
});

/**
 * Type inferred from schemas
 */
export type ProjectInput = z.infer<typeof projectValidationSchema>;
export type CertificateInput = z.infer<typeof certificateValidationSchema>;
export type CareerInput = z.infer<typeof careerValidationSchema>;
export type CommentInput = z.infer<typeof commentValidationSchema>;
