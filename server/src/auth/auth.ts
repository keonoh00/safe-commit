import { IRequest } from "../types/session";
import { Response } from "express";

export const requireAuth = (req: IRequest, res: Response, next: () => void) => {
  if (req.session.userId) {
    next(); // User is authenticated, continue to next middleware
  } else {
    res.redirect("/login"); // User is not authenticated, redirect to login page
  }
};
