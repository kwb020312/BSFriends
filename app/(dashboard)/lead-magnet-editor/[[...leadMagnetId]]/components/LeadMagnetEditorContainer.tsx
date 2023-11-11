"use client";

import { LeadMagnetEditorContextProvider } from "@/context/LeadMagnetEditorContext";
import { LeadMagnet } from "@prisma/client";
import LeadMagnetEditor from "./LeadMagnetEditor";

interface LeadMagnetEditorContainerProps {
  leadMagnet: LeadMagnet;
}

const LeadMagnetEditorContainer = ({
  leadMagnet,
}: LeadMagnetEditorContainerProps) => {
  return (
    <LeadMagnetEditorContextProvider leadMagnet={leadMagnet}>
      <LeadMagnetEditor />
    </LeadMagnetEditorContextProvider>
  );
};

export default LeadMagnetEditorContainer;
