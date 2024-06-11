import { Request } from "express";
import { Session } from "express-session";

interface ISessionData {
  username?: string;
  hashedPassword?: string;
}

export interface IRequest extends Request {
  session: Session & ISessionData;
}
