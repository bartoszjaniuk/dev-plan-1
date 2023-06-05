import {
  GetAppUserDocument,
  GetAppUserQuery,
  GetAppUserQueryVariables,
} from "@/generated/graphql";
import { authorizedApolloClient } from "@/graphql/apolloClient";
import NextAuth from "next-auth";
import * as bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          if (!credentials) return null;
          const user = await authorizedApolloClient.query<
            GetAppUserQuery,
            GetAppUserQueryVariables
          >({
            query: GetAppUserDocument,
            variables: {
              email: credentials?.email,
            },
          });

          if (!user.data.appUser?.password) return null;

          const arePasswordsEqual = await bcrypt.compare(
            credentials.password,
            user.data.appUser.password
          );
          if (!arePasswordsEqual) return null;

          return {
            email: user.data.appUser.email,
            id: user.data.appUser.id,
          };
        } catch (error) {
          throw new Error("Logowanie nie powiodlo się");
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);
