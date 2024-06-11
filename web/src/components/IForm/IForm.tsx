import { Button, Flex, Input, Text } from "@chakra-ui/react";

interface IFormInputType {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IFormProps {
  title: string;
  inputs: IFormInputType[];
  buttonText?: string;
  buttonColorScheme?: string;
  onSubmit: () => void;
}

const IForm = ({ title, buttonText, inputs, onSubmit }: IFormProps) => {
  return (
    <Flex
      flexDirection={"column"}
      padding="6"
      boxShadow="lg"
      bg="white"
      width={"50%"}
      alignItems={"center"}
    >
      <Text
        fontSize="2xl"
        fontWeight="bold"
        textAlign="center"
        marginBottom={"8"}
      >
        {title}
      </Text>

      {inputs && inputs.length > 0
        ? inputs.map((input) => (
            <Input
              key={input.placeholder}
              width={"70%"}
              marginBottom={"4"}
              placeholder={input.placeholder}
              value={input.value}
              onChange={input.onChange}
              type={
                ["Password", "Reenter Password"].includes(input.placeholder)
                  ? "password"
                  : "text"
              }
            />
          ))
        : null}

      <Button colorScheme="messenger" onClick={onSubmit}>
        {buttonText}
      </Button>
    </Flex>
  );
};

export default IForm;
