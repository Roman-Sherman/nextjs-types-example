import { z } from "zod";

const endpointSchema = z.object({
  id: z.number(),
});

export async function GET(request, { params }) {
  const { id } = endpointSchema.parse(await params);
}
