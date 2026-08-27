/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_PORTAL_URL?: string;
    NEXT_PUBLIC_DASHBOARD1_URL?: string;
    NEXT_PUBLIC_DASHBOARD2_URL?: string;
    NEXT_PUBLIC_DASHBOARD3_URL?: string;
    NEXT_PUBLIC_DASHBOARD4_URL?: string;
    NEXT_PUBLIC_ADMIN_URL?: string;
    NEXT_PUBLIC_LOGIN_URL?: string;
  }
}

declare var process: {
  env: NodeJS.ProcessEnv;
};
