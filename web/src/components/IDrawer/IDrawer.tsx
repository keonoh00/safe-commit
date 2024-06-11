import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import React from "react";

export interface IDrawerProps {
  children?: React.ReactNode;
  title?: string;
  footer?: React.ReactNode;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const IDrawer = ({
  title,
  children,
  footer,
  isOpen,
  onOpen,
  onClose,
}: IDrawerProps) => {
  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef.current}
        colorScheme={"whiteAlphaka"}
        onClick={onOpen}
        padding={0}
      >
        <HamburgerIcon w={8} h={8} color={"black"} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef.current}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{title || ""}</DrawerHeader>

          <DrawerBody>{children}</DrawerBody>

          <DrawerFooter>{footer}</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default IDrawer;
