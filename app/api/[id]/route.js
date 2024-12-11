import { z } from "zod";

const endpointSchema = z.object({
  id: z.number(),
});

export async function GET(request) {
  const { id } = endpointSchema.parse({ id: "should-have-been-a-number" });
}
