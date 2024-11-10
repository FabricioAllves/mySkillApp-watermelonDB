import { appSchema } from "@nozbe/watermelondb";
import { skillSchema } from "./skillSchemas";

export const schemas = appSchema({
  version: 1,  
  tables: [skillSchema],
});
