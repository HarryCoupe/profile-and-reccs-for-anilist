import { useState } from "react";
import { useRouter } from "next/router";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useApolloClient,
} from "@apollo/client";

export default function Form() {
  const [inputValue, setInputValue] = useState("");
  const client = useApolloClient();
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const queryResult = await client.query({
      query: gql`
        query ($name: String) {
          User(name: $name) {
            avatar {
              large
            }
            createdAt
            siteUrl
            bannerImage
          }
        }
      `,
      variables: {
        name: inputValue,
      },
    });
    router.push({
      pathname: "/profile",
      query: {
        avatarUrl: queryResult.data.User.avatar.large,
        createdAt: queryResult.data.User.createdAt,
        siteUrl: queryResult.data.User.siteUrl,
        bannerImageUrl: queryResult.data.User.bannerImage,
      },
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Profile Name:
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
