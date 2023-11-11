import Link from "next/link";
import { Button } from "./ui/button";

interface LeadMagnetNotFoundProps {
  returnLink: string;
}

const LeadMagnetNotFound = ({ returnLink }: LeadMagnetNotFoundProps) => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full gap-y-3">
      <h1 className="text-2xl">팔로잉 유저를 찾을 수 없습니다.</h1>
      <Link href={returnLink}>
        <Button variant={"outline"}>돌아가기</Button>
      </Link>
    </div>
  );
};

export default LeadMagnetNotFound;
