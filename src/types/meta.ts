export interface MetaDataTypes {
    title?: string;
    description: string;
    keywords?: string;
    author?: string;

    "og:title": string;
    "og:description": string;
    "og:image": string;
    "og:image:alt"?: string;
    "og:image:width"?: string;
    "og:image:height"?: string;
    "og:url"?: string;
    "og:site_name"?: string;
    "og:type"?: string;
    "og:locale"?: string;
    "og:locale:alternate"?: string;

    "twitter:card"?: string;
    "twitter:site"?: string;
    "twitter:creator"?: string;
    "twitter:title": string;
    "twitter:description": string;
    "twitter:image": string;

    "theme-color"?: string;
    "msapplication-TileColor"?: string;
    "msapplication-TileImage"?: string;
    "msapplication-config"?: string;
    "apple-mobile-web-app-title"?: string;
    "application-name"?: string;
    "msapplication-tooltip"?: string;
    "apple-mobile-web-app-capable"?: string;
    "apple-mobile-web-app-status-bar-style"?: string;
}
