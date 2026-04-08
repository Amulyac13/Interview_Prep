import { defineConfig } from "drizzle-kit";
export default defineConfig({
    out: "./drizzle",
    dialect: "postgresql",
    schema: "./utils/schema.js",
    dbCredentials:{
        url:'postgresql://Interview-prep-db_owner:npg_bhuBljF89IOt@ep-autumn-sky-a82vayns.eastus2.azure.neon.tech/Interview-prep-db?sslmode=require',
    }
})