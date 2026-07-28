/**
 * Custom base class for Database related errors
 */
export class DatabaseError extends Error {
  public code: string;
  public details?: string;

  constructor(message: string, code = "DATABASE_ERROR", details?: string) {
    super(message);
    this.name = "DatabaseError";
    this.code = code;
    this.details = details;
    Object.setPrototypeOf(this, DatabaseError.prototype);
  }

  /**
   * Generates a safe response payload for front-end consumption
   * to avoid exposing sensitive Mongo infrastructure, credentials, or internal IPs.
   */
  public toSafeResponse() {
    return {
      success: false,
      error: {
        message: "A database error occurred. Please try again later.",
        code: this.code,
      },
    };
  }
}

/**
 * Handle runtime exceptions and transform them into a unified error template.
 */
export function handleDatabaseError(error: unknown): DatabaseError {
  if (error instanceof DatabaseError) {
    return error;
  }

  const err = error as Error;
  
  // Safely log full details internally on the server console
  console.error("[DATABASE_FAILURE_LOG]:", {
    message: err.message,
    stack: err.stack,
  });

  // Return masked error for safe output
  return new DatabaseError(
    "Internal database operation failed",
    "DATABASE_UNAVAILABLE",
    err.message
  );
}
