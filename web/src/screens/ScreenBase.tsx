import { Flex } from "@chakra-ui/react";
import IHeader from "../components/IHeader/IHeader";

interface ScreenBaseProps {
  children: React.ReactNode;
}

const ScreenBase: React.FC<ScreenBaseProps> = ({ children }) => {
  return (
    <Flex flexDirection={"column"} paddingInline={12}>
      <IHeader />
      {children}
    </Flex>
  );
};

export default ScreenBase;
