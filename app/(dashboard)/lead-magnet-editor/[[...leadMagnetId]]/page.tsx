import { prismadb } from "@/lib/prismadb";
import { LeadMagnet } from "@prisma/client";
import { DEFAULT_LEAD_MAGNET } from "./lead-magnet-constants";
import LeadMagnetNotFound from "@/components/LeadMagnetNotFound";
import LeadMagnetEditorContainer from "./components/LeadMagnetEditorContainer";

interface LeadMagnetEditorParams {
  params: {
    leadMagnetId: string[];
  };
}

const LeadMagnetEditorPage = async ({ params }: LeadMagnetEditorParams) => {
  const leadMagnetId = params.leadMagnetId?.length
    ? params.leadMagnetId[0]
    : null;

  console.log({ leadMagnetId });

  let leadMagnet: LeadMagnet | null = null;

  if (!leadMagnetId) {
    leadMagnet = DEFAULT_LEAD_MAGNET;
  } else {
    leadMagnet = await prismadb.leadMagnet.findUnique({
      where: {
        id: leadMagnetId,
      },
    });
  }

  if (!leadMagnet) {
    return <LeadMagnetNotFound returnLink="/leadmagnets" />;
  }

  return <LeadMagnetEditorContainer leadMagnet={leadMagnet} />;
};

export default LeadMagnetEditorPage;
