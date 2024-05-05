import { authConfig } from './app/authconfig';
import NextAuth from 'next-auth';

 
export default NextAuth(authConfig).auth;
 
export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};