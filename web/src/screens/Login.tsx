import { Flex, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import ScreenBase from "./ScreenBase";

import IForm from "../components/IForm/IForm";
import { requestLogin } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { RootState, useAppSelector } from "../store";

const LoginScreen: React.FC = () => {
  const isPrerequisiteChecked = React.useRef<boolean>(false);
  const authState = useAppSelector((state: RootState) => state.auth);
  const toast = useToast();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const onLoginPress = async () => {
    try {
      const data = await requestLogin({ username, password });
      if (data) {
        toast({
          title: "Success",
          description: "Login successful",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate("/");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: (error as Error).message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    if (isPrerequisiteChecked.current) return;

    if (authState.isAuthenticated) {
      toast({
        title: "Error",
        description: "You are already logged in",
        status: "error",
        duration: 3000,
        isClosable: true,
      });

      // Go back to previous page
      navigate(-1);
    }
    isPrerequisiteChecked.current = true;
  }, [authState.isAuthenticated, isPrerequisiteChecked, navigate, toast]);

  return (
    <ScreenBase>
      <Flex justifyContent={"center"} alignItems={"center"}>
        <IForm
          title={"Login"}
          inputs={[
            {
              placeholder: "Username",
              value: username,
              onChange: (event) => setUsername(event.target.value),
            },
            {
              placeholder: "Password",
              value: password,
              onChange: (event) => setPassword(event.target.value),
            },
          ]}
          buttonText={"Login"}
          onSubmit={onLoginPress}
        />
      </Flex>
    </ScreenBase>
  );
};

export default LoginScreen;
