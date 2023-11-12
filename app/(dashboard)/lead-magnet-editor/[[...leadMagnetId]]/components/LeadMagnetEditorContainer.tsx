"use client";

import { LeadMagnet } from "@prisma/client";
import React from "react";
import LeadMagnetEditor from "./LeadMagnetEditor";
import { useSession } from "@clerk/nextjs";
import LoadingScreen from "@/components/LoadingScreen";
import { ProfileEditorContextProvider } from "@/context/ProfileEditorContext";
import { LeadMagnetEditorContextProvider } from "@/context/LeadMagnetEditorContext";

interface LeadMagnetEditorContainerProps {
  leadMagnet: LeadMagnet;
}

function LeadMagnetEditorContainer({
  leadMagnet,
}: LeadMagnetEditorContainerProps) {
  const { isLoaded } = useSession();

  if (!isLoaded) return <LoadingScreen />;

  return (
    <LeadMagnetEditorContextProvider leadMagnet={leadMagnet}>
      <ProfileEditorContextProvider>
        <LeadMagnetEditor />
      </ProfileEditorContextProvider>
    </LeadMagnetEditorContextProvider>
  );
}

export default LeadMagnetEditorContainer;
