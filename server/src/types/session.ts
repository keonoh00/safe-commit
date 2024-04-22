import { Request } from "express";
import { Session } from "express-session";

interface ISessionData {
  userId?: number;
  loggedIn?: boolean;
  username?: string;
}

export interface IRequest extends Request {
  session: Session & ISessionData;
}
