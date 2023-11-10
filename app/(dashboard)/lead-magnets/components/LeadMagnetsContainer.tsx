"use client";

import { Button } from "@/components/ui/button";
import { Lead, LeadMagnet } from "@prisma/client";
import Link from "next/link";
import LeadMagnetTable from "./LeadMagnetTable";

interface LeadMagnetsContainerProps {
  leadMagnets: LeadMagnet[];
  leads: Lead[];
}

const LeadMagnetsContainer = ({
  leadMagnets,
  leads,
}: LeadMagnetsContainerProps) => {
  console.log("leadMagnets from inside the client", leadMagnets);
  console.log("leads from inside the client", leads);
  return (
    <div className="p-6 w-full lg:max-w-5xl lg:mx-auto">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold">구독정보 확인</h2>
        <Button variant={"default"}>
          <Link href={"/lead-magnet-editor"}>생성하기</Link>
        </Button>
      </div>

      <LeadMagnetTable leadMagnets={leadMagnets} leads={leads} />
    </div>
  );
};

export default LeadMagnetsContainer;
