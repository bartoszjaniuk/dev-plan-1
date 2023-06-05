import { NextApiHandler } from "next";
import * as bcrypt from "bcrypt";
import { authorizedApolloClient } from "@/graphql/apolloClient";
import {
  RegisterDocument,
  RegisterMutation,
  RegisterMutationVariables,
} from "@/generated/graphql";

const SignUpHandler: NextApiHandler = async (req, res) => {
  const { email, password } = req.body;

  const passwordHash = await bcrypt.hash(password, 12);

  const user = await authorizedApolloClient.mutate<
    RegisterMutation,
    RegisterMutationVariables
  >({
    mutation: RegisterDocument,
    variables: {
      email,
      password: passwordHash,
    },
  });

  res.json({
    ...user.data?.createAppUser,
  });
};

export default SignUpHandler;
