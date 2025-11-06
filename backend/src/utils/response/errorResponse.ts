/**
 * @summary
 * Creates a standardized error response object
 *
 * @function errorResponse
 * @module utils/response
 *
 * @param {string} message - Error message
 * @param {any} [details] - Optional error details
 *
 * @returns {object} Standardized error response
 *
 * @example
 * const response = errorResponse('Invalid input', { field: 'name' });
 */
export function errorResponse(message: string, details?: any): object {
  return {
    success: false,
    error: {
      message,
      ...(details && { details }),
    },
    timestamp: new Date().toISOString(),
  };
}
