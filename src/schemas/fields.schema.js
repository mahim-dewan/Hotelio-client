const { default: z } = require("zod");

export const emailSchema = z.string().trim().email("Invalid mail address");
