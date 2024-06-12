import {
  Button,
  Flex,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import ScreenBase from "../ScreenBase";
import { requestCreatePost } from "../../api/posts";
import { useNavigate } from "react-router-dom";

const CreatePostScreen: React.FC = () => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [iframe, setIframe] = React.useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const onCreatePost = async () => {
    if (!title || !content || !iframe) {
      toast({
        title: "Error",
        description: "Please fill all fields",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    const response = await requestCreatePost({ title, content, iframe });
    if (response.data.id) {
      navigate(`/posts/${response.data.id}`);
    } else {
      toast({
        title: "Error",
        description: "Failed to create post",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <ScreenBase>
      <Flex flexDirection={"column"} alignItems={"center"}>
        <Text margin={3} fontWeight={"900"} fontSize={"x-large"}>
          Create Post
        </Text>
        <Input
          margin={3}
          placeholder={"Title"}
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
        <Textarea
          margin={3}
          placeholder={"Content"}
          onChange={(event) => setContent(event.target.value)}
          value={content}
        />
        <Textarea
          margin={3}
          placeholder={"IFrame"}
          onChange={(event) => setIframe(event.target.value)}
          value={iframe}
        />
        <Button
          margin={3}
          paddingBlock={5}
          paddingInline={10}
          onClick={onCreatePost}
        >
          Create Post
        </Button>
      </Flex>
    </ScreenBase>
  );
};

export default CreatePostScreen;
