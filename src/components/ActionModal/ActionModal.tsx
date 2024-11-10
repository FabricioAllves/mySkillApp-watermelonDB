import React, { ReactNode } from "react";
import { Actionsheet, VStack, Button, KeyboardAvoidingView } from 'native-base';
import { Platform, Text } from "react-native";
import { ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper } from "@/components/ui/actionsheet";

interface GenericActionsheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

export function GenericActionsheet({ isOpen, onClose, title, children }: GenericActionsheetProps) {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <VStack className="w-full p-5 space-y-4">
            {title && <Text className="font-bold text-lg text-center">{title}</Text>}
            {children}
            <Button onPress={onClose} className="mt-3">
              <Text>Close</Text>
            </Button>
          </VStack>
        </ActionsheetContent>
      </Actionsheet>
    </KeyboardAvoidingView>
  );
}
