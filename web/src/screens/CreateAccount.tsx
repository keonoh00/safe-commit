import { Flex, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import ScreenBase from "./ScreenBase";
import { useNavigate } from "react-router-dom";
import ISkeleton from "../components/ISkeleton/ISkeleton";
import IForm from "../components/IForm/IForm";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { createAccountRequest } from "../api/auth";

const CreateAccountScreen: React.FC = () => {
  const isPrerequisiteChecked = React.useRef<boolean>(false);
  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const authState = useSelector((state: RootState) => state.auth);
  const toast = useToast();

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

  const onCreateAccountPress = async () => {
    const responseData = await createAccountRequest({
      name,
      username,
      password,
    });

    if (responseData.message) {
      toast({
        title: "Error",
        description: responseData.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: "Account created successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      navigate("/");
    }
  };

  return (
    <ScreenBase>
      {isPrerequisiteChecked ? (
        <Flex justifyContent={"center"} alignItems={"center"}>
          <IForm
            title={"Create your account!"}
            inputs={[
              {
                placeholder: "Name",
                value: name,
                onChange: (event) => setName(event.target.value),
              },
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
            buttonText={"Create Account"}
            onSubmit={onCreateAccountPress}
          />
        </Flex>
      ) : (
        <ISkeleton />
      )}
    </ScreenBase>
  );
};

export default CreateAccountScreen;
