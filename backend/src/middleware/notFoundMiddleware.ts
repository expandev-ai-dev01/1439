import { Request, Response } from 'express';

/**
 * @summary
 * Middleware to handle 404 Not Found errors
 *
 * @function notFoundMiddleware
 * @module middleware
 *
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 *
 * @returns {void} Sends 404 response to client
 */
export function notFoundMiddleware(req: Request, res: Response): void {
  res.status(404).json({
    success: false,
    error: {
      message: 'Route not found',
      path: req.originalUrl,
      method: req.method,
    },
    timestamp: new Date().toISOString(),
  });
}
