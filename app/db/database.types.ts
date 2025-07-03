export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      diaries: {
        Row: {
          content: string | null
          created_at: string
          date: string
          diary_id: number
          likes: number
          profile_id: string
          stats: Json
          status: Database["public"]["Enums"]["diary_status"]
          thumbnail_image: string | null
          title: string | null
          updated_at: string
        }
        Insert: {
          content?: string | null
          created_at?: string
          date: string
          diary_id?: never
          likes?: number
          profile_id: string
          stats?: Json
          status: Database["public"]["Enums"]["diary_status"]
          thumbnail_image?: string | null
          title?: string | null
          updated_at?: string
        }
        Update: {
          content?: string | null
          created_at?: string
          date?: string
          diary_id?: never
          likes?: number
          profile_id?: string
          stats?: Json
          status?: Database["public"]["Enums"]["diary_status"]
          thumbnail_image?: string | null
          title?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_diaries_profile_id"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      diary_comments: {
        Row: {
          comment_id: number
          content: string
          created_at: string
          diary_id: number
          parent_comment_id: number | null
          profile_id: string | null
          updated_at: string
        }
        Insert: {
          comment_id?: never
          content: string
          created_at?: string
          diary_id: number
          parent_comment_id?: number | null
          profile_id?: string | null
          updated_at?: string
        }
        Update: {
          comment_id?: never
          content?: string
          created_at?: string
          diary_id?: number
          parent_comment_id?: number | null
          profile_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "diary_comments_diary_id_diaries_diary_id_fk"
            columns: ["diary_id"]
            isOneToOne: false
            referencedRelation: "diaries"
            referencedColumns: ["diary_id"]
          },
          {
            foreignKeyName: "diary_comments_parent_comment_id_diary_comments_comment_id_fk"
            columns: ["parent_comment_id"]
            isOneToOne: false
            referencedRelation: "diary_comments"
            referencedColumns: ["comment_id"]
          },
          {
            foreignKeyName: "diary_comments_profile_id_profiles_profile_id_fk"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      diary_likes: {
        Row: {
          diary_id: number
          profile_id: string
        }
        Insert: {
          diary_id: number
          profile_id: string
        }
        Update: {
          diary_id?: number
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "diary_likes_diary_id_diaries_diary_id_fk"
            columns: ["diary_id"]
            isOneToOne: false
            referencedRelation: "diaries"
            referencedColumns: ["diary_id"]
          },
          {
            foreignKeyName: "diary_likes_profile_id_profiles_profile_id_fk"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      friends: {
        Row: {
          accepter_profile_id: string
          created_at: string
          requester_profile_id: string
          updated_at: string
        }
        Insert: {
          accepter_profile_id: string
          created_at?: string
          requester_profile_id: string
          updated_at?: string
        }
        Update: {
          accepter_profile_id?: string
          created_at?: string
          requester_profile_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "friends_accepter_profile_id_profiles_profile_id_fk"
            columns: ["accepter_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "friends_requester_profile_id_profiles_profile_id_fk"
            columns: ["requester_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      guestbook_comments: {
        Row: {
          content: string
          created_at: string
          guestbook_id: number
          updated_at: string
        }
        Insert: {
          content: string
          created_at?: string
          guestbook_id: number
          updated_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          guestbook_id?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "guestbook_comments_guestbook_id_guestbooks_guestbook_id_fk"
            columns: ["guestbook_id"]
            isOneToOne: true
            referencedRelation: "guestbooks"
            referencedColumns: ["guestbook_id"]
          },
        ]
      }
      guestbooks: {
        Row: {
          author_profile_id: string | null
          content: string
          created_at: string
          guestbook_id: number
          is_secret: boolean
          owner_profile_id: string
          updated_at: string
        }
        Insert: {
          author_profile_id?: string | null
          content: string
          created_at?: string
          guestbook_id?: never
          is_secret?: boolean
          owner_profile_id: string
          updated_at?: string
        }
        Update: {
          author_profile_id?: string | null
          content?: string
          created_at?: string
          guestbook_id?: never
          is_secret?: boolean
          owner_profile_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "guestbooks_author_profile_id_profiles_profile_id_fk"
            columns: ["author_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "guestbooks_owner_profile_id_profiles_profile_id_fk"
            columns: ["owner_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      monthly_themes: {
        Row: {
          cover_image: string | null
          created_at: string
          date: string
          description: string | null
          profile_id: string
          theme_id: number
          title: string
          updated_at: string
        }
        Insert: {
          cover_image?: string | null
          created_at?: string
          date: string
          description?: string | null
          profile_id: string
          theme_id?: never
          title: string
          updated_at?: string
        }
        Update: {
          cover_image?: string | null
          created_at?: string
          date?: string
          description?: string | null
          profile_id?: string
          theme_id?: never
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_monthly_themes_profile_id"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string
          diary_id: number | null
          guestbook_id: number | null
          is_read: boolean
          notification_id: number
          source_id: string | null
          target_id: string
          type: Database["public"]["Enums"]["notification_type"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          diary_id?: number | null
          guestbook_id?: number | null
          is_read?: boolean
          notification_id?: never
          source_id?: string | null
          target_id: string
          type: Database["public"]["Enums"]["notification_type"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          diary_id?: number | null
          guestbook_id?: number | null
          is_read?: boolean
          notification_id?: never
          source_id?: string | null
          target_id?: string
          type?: Database["public"]["Enums"]["notification_type"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_diary_id_diaries_diary_id_fk"
            columns: ["diary_id"]
            isOneToOne: false
            referencedRelation: "diaries"
            referencedColumns: ["diary_id"]
          },
          {
            foreignKeyName: "notifications_guestbook_id_guestbooks_guestbook_id_fk"
            columns: ["guestbook_id"]
            isOneToOne: false
            referencedRelation: "guestbooks"
            referencedColumns: ["guestbook_id"]
          },
          {
            foreignKeyName: "notifications_source_id_profiles_profile_id_fk"
            columns: ["source_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "notifications_target_id_profiles_profile_id_fk"
            columns: ["target_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          nickname: string
          profile_id: string
          profile_image: string | null
          slug: string
          stats: Json | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          nickname: string
          profile_id: string
          profile_image?: string | null
          slug: string
          stats?: Json | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          nickname?: string
          profile_id?: string
          profile_image?: string | null
          slug?: string
          stats?: Json | null
          updated_at?: string
        }
        Relationships: []
      }
      spaces: {
        Row: {
          created_at: string
          description: string | null
          profile_id: string
          space_id: number
          stats: Json | null
          title: string
          updated_at: string
          visibility: Database["public"]["Enums"]["space_visibility"]
        }
        Insert: {
          created_at?: string
          description?: string | null
          profile_id: string
          space_id?: never
          stats?: Json | null
          title: string
          updated_at?: string
          visibility?: Database["public"]["Enums"]["space_visibility"]
        }
        Update: {
          created_at?: string
          description?: string | null
          profile_id?: string
          space_id?: never
          stats?: Json | null
          title?: string
          updated_at?: string
          visibility?: Database["public"]["Enums"]["space_visibility"]
        }
        Relationships: [
          {
            foreignKeyName: "spaces_profile_id_profiles_profile_id_fk"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      diary_status: "SUNNY" | "CLOUDY" | "RAINY" | "VACATION" | "PILL"
      notification_type:
        | "DIARY_COMMENT"
        | "DIARY_MENTION"
        | "GUESTBOOK"
        | "GUESTBOOK_COMMENT"
      space_visibility: "PUBLIC" | "FRIEND" | "PRIVATE"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      diary_status: ["SUNNY", "CLOUDY", "RAINY", "VACATION", "PILL"],
      notification_type: [
        "DIARY_COMMENT",
        "DIARY_MENTION",
        "GUESTBOOK",
        "GUESTBOOK_COMMENT",
      ],
      space_visibility: ["PUBLIC", "FRIEND", "PRIVATE"],
    },
  },
} as const
