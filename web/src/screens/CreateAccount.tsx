import { Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import ScreenBase from "./ScreenBase";
import { useNavigate } from "react-router-dom";
import ISkeleton from "../components/ISkeleton/ISkeleton";
import IForm from "../components/IForm/IForm";

const CreateAccountScreen: React.FC = () => {
  const [isPrerequisiteChecked, setIsPrerequisiteChecked] =
    React.useState(false);
  const [id, setId] = React.useState("");
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

  return (
    <ScreenBase>
      {isPrerequisiteChecked ? (
        <Flex justifyContent={"center"} alignItems={"center"}>
          <IForm
            title={"Create your account!"}
            inputs={[
              {
                placeholder: "ID",
                value: id,
                onChange: (event) => setId(event.target.value),
              },
              {
                placeholder: "Password",
                value: password,
                onChange: (event) => setPassword(event.target.value),
              },
            ]}
            buttonText={"Create Account"}
            onSubmit={() => {}}
          />
        </Flex>
      ) : (
        <ISkeleton />
      )}
    </ScreenBase>
  );
};

export default CreateAccountScreen;
