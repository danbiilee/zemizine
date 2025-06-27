export const COMMENT_MODE = {
  VIEW: "VIEW",
  EDIT: "EDIT",
  REPLY: "REPLY",
} as const;

export type CommentMode = (typeof COMMENT_MODE)[keyof typeof COMMENT_MODE];
