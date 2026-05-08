import "@emotion/react";
import type { AppTheme } from "@/styles/theme";

declare module "@emotion/react" {
  export interface Theme {
    colors: AppTheme["colors"];
    radius: AppTheme["radius"];
  }
}
