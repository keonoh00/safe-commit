import { Flex, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import ScreenBase from "./ScreenBase";
import { useNavigate } from "react-router-dom";
import ISkeleton from "../components/ISkeleton/ISkeleton";
import IForm from "../components/IForm/IForm";
import { requestLogin } from "../api/auth";

const LoginScreen: React.FC = () => {
  const toast = useToast();
  const [isPrerequisiteChecked, setIsPrerequisiteChecked] =
    React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // TODO: Check if user is logged in
    const isLoggedIn = false;
    if (isLoggedIn) {
      navigate("/");
    }
    setIsPrerequisiteChecked(true);
  }, [isPrerequisiteChecked, navigate]);

  const onLoginPress = async () => {
    try {
      await requestLogin({ username, password });
      navigate("/");
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

  return (
    <ScreenBase>
      {isPrerequisiteChecked ? (
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
      ) : (
        <ISkeleton />
      )}
    </ScreenBase>
  );
};

export default LoginScreen;
