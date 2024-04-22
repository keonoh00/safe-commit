import { AuthRequest } from "./types/session";

export const requireAuth = (
  req: AuthRequest,
  res: Response,
  next: () => void
) => {
  if (req.session.userId) {
    next(); // User is authenticated, continue to next middleware
  } else {
    res.redirect("/login"); // User is not authenticated, redirect to login page
  }
};
