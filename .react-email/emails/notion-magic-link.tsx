//
import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Tailwind,
  Text,
  Button,
} from "@react-email/components";

//
const Email = () => {
  return (
    <Html>
      <Head>
        <Tailwind>
          <Body className="bg-white my-12 mx-auto font-sans">
            <Img
              className="mx-auto w-24"
              src="data:image/png;base64,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"
            ></Img>
            <Container className="p-8 rounded-lg shadow-lg text-center">
              <Heading className=" text-xl pt-4 "> Hello There 👋</Heading>
              <Text className=" text-lg fond-medium text-gray-700">
                Thanks for joining me on this journey, check out some courses
                down here below.
              </Text>
              <Button
                href="https://github.com/rissh"
                className="bg-purple-700 text-white font-bold px-4 py-6 rounded-md"
              >
                Check out the Courses
              </Button>
            </Container>
          </Body>
        </Tailwind>
      </Head>
    </Html>
  );
};

export default Email;
