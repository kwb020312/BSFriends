import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Lead, LeadMagnet } from "@prisma/client";
import { Button } from "@/components/ui/button";

interface LeadMagnetTableProps {
  leadMagnets: LeadMagnet[];
  leads: Lead[];
}

const LeadMagnetTable = ({ leadMagnets, leads }: LeadMagnetTableProps) => {
  const getLeadsForLeadMagnet = (leadMagnetId: string): number => {
    const leadsForLeadMagnet = leads.filter(
      (lead) => lead.leadMagnetId === leadMagnetId
    );

    return leadsForLeadMagnet.length;
  };

  const getConversionRate = (
    leadMagnetId: string,
    pageViews: number
  ): number => {
    if (pageViews === 0) return 0;

    const conversionRate = Math.round(
      (getLeadsForLeadMagnet(leadMagnetId) / pageViews) * 100
    );

    return conversionRate;
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-lg">이름</TableHead>
          <TableHead className="text-lg">페이지 방문자</TableHead>
          <TableHead className="text-lg">리즈</TableHead>
          <TableHead className="text-lg">평가</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {leadMagnets.map((leadMagnet) => (
          <TableRow key={leadMagnet.id}>
            <TableCell>{leadMagnet.name}</TableCell>
            <TableCell>{leadMagnet.pageViews}</TableCell>
            <TableCell>{getLeadsForLeadMagnet(leadMagnet.id)}</TableCell>
            <TableCell>
              {getConversionRate(leadMagnet.id, leadMagnet.pageViews)} %
            </TableCell>
            <TableCell>
              <Link href={`/leads/${leadMagnet.id}`}>
                <Button className="font-normal" variant={"link"}>
                  끌어온 조회수
                </Button>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default LeadMagnetTable;
