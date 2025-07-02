import { createClient } from "@supabase/supabase-js";

import type { Database as SupabaseDatabase } from "~/db/database.types";
import type { MergeDeep, SetNonNullable, SetFieldType } from "type-fest";

/**
 * Supabase View가 데이터 타입을 nullable로 정의해서 non-nullable로 타입 오버라이딩
 */
type Database = MergeDeep<
  SupabaseDatabase,
  {
    public: {
      Views: {
        diaries_view: {
          Row: SetFieldType<
            SetNonNullable<
              SupabaseDatabase["public"]["Views"]["diaries_view"]["Row"]
            >,
            "thumbnail",
            "string" | null
          >;
        };
      };
    };
  }
>;

// 클라이언트에선 process.env 사용 불가
const client = createClient<Database>(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);
export default client;
