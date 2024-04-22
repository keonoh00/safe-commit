import { Flex, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import ScreenBase from "./ScreenBase";
import IForm from "../components/IForm/IForm";
import ISkeleton from "../components/ISkeleton/ISkeleton";
import { useNavigate } from "react-router-dom";
import { PATH } from "../routes";

const ResetPasswordScreen: React.FC = () => {
  const [isPrerequisiteChecked, setIsPrerequisiteChecked] =
    React.useState(false);
  const [password1, setPassword1] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const onSubmit = () => {
    if (password1 !== password2) {
      toast({
        title: "Password mismatch",
        description: "Please make sure both passwords are the same",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (password1.length < 8) {
      toast({
        title: "Password too short",
        description: "Please make sure your password is at least 8 characters",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    toast({
      title: "Password reset",
      description: "Your password has been reset, please login again",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    navigate(PATH.LOGIN);
  };

  useEffect(() => {
    // TODO: Check if user is logged in
    const isLoggedIn = false;
    if (isLoggedIn) {
      navigate("/");
    }
    setIsPrerequisiteChecked(true);
  }, [isPrerequisiteChecked, navigate]);

  return (
    <ScreenBase>
      {isPrerequisiteChecked ? (
        <Flex justifyContent={"center"} alignItems={"center"}>
          <IForm
            title={"Reset your password!"}
            inputs={[
              {
                placeholder: "Password",
                value: password1,
                onChange: (event) => setPassword1(event.target.value),
              },
              {
                placeholder: "Reenter Password",
                value: password2,
                onChange: (event) => setPassword2(event.target.value),
              },
            ]}
            buttonText={"Reset Password"}
            onSubmit={onSubmit}
          />
        </Flex>
      ) : (
        <ISkeleton />
      )}
    </ScreenBase>
  );
};

export default ResetPasswordScreen;
