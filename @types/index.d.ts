import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      address: string;
      uid: string;
      tag: string;
      name: string;
      image: string;
    };
  }
}
