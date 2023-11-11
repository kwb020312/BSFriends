import { useState } from "react";

export type LeadMagnetSections =
  | "content"
  | "prompt"
  | "email"
  | "profile"
  | "settings";

const LeadMagnetEditor = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [selectedEditor, setSelectedEditor] = useState("content");
  return (
    <div className="flex h-screen w-full flex-col overflow-y-hidden">
      <LeadMagnetEditorNavbar />
      <div className="flex h-full flex-row">
        <LeadMagnetEditorSidebar
          isSidebarCollapsed={isSidebarCollapsed}
          setSelectedEditor={setSelectedEditor}
          setIsSidebarCollapsed={setIsSidebarCollapsed}
        />
        <div className="h-full flex-grow">
          {selectedEditor === "content" && <LeadMagnetContentEditor />}
          {selectedEditor === "prompt" && <LeadMagnetPromptEditor />}
          {selectedEditor === "email" && <LeadMagnetEmailEditor />}
          {selectedEditor === "profile" && <LeadMagnetProfileEditor />}
          {selectedEditor === "settings" && <LeadMagnetSettingsEditor />}
        </div>
      </div>
    </div>
  );
};

export default LeadMagnetEditor;
