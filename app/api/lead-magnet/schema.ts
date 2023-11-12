import { z } from "zod";

export const leadMagnetCreateRequest = z.object({
  name: z.string({ required_error: "사용자 이름이 필요합니다." }),
  status: z.string({ required_error: "상태코드가 필요합니다." }),
  draftBody: z.string({ required_error: "내용이 필요합니다." }),
  draftTitle: z.string({ required_error: "제목이 필요합니다." }),
  draftSubtitle: z.string({ required_error: "부제목이 필요합니다." }),
  draftPrompt: z.string({ required_error: "사용자 명령이 필요합니다." }),
  draftFirstQuestion: z.string({
    required_error: "첫번째 질문이 필요합니다.",
  }),
  publishedBody: z.string({ required_error: "공개 내용이 필요합니다." }),
  publishedTitle: z.string({ required_error: "공개 제목이 필요합니다." }),
  publishedSubtitle: z.string({
    required_error: "공개 부제목이 필요합니다.",
  }),
  publishedPrompt: z.string({
    required_error: "공개 사용자 명령이 필요합니다.",
  }),
  publishedFirstQuestion: z.string({
    required_error: "공개 첫 질문이 필요합니다.",
  }),
  draftEmailCapture: z.string({
    required_error: "첫 이메일이 필요합니다.",
  }),
  publishedEmailCapture: z.string({
    required_error: "공개 이메일이 필요합니다.",
  }),
  slug: z.string({ required_error: "Slug is required" }),
});

export const leadMagnetUpdateRequest = leadMagnetCreateRequest.extend({
  id: z.string({ required_error: "Id is required" }),
  userId: z.string({ required_error: "User Id is required" }),
});
