import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

/**
 * prepare: false
 *  - connection pooling을 supabase는 지원하지만 drizzle는 지원하지 않아서 비활성화
 */
const client = postgres(process.env.DATABASE_URL!, { prepare: false });

const db = drizzle(client);

export default db;
