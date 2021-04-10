import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.boltrswap.com",
      },
      {
        label: "Liquidity",
        href: "https://exchange.boltrswap.com/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    status: status.LIVE,
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "Team Battle",
    icon: "TeamBattleIcon",
    href: "/competition",
    status: status.SOON,
  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    items: [
      {
        label: "Leaderboard",
        href: "/teams",
        status: status.NEW,
      },
      {
        label: "YourProfile",
        href: "/",
      },
    ],
    calloutClass: "rainbow",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://boltrswap.info",
      },
      {
        label: "Tokens",
        href: "https://boltrswap.info/tokens",
      },
      {
        label: "Pairs",
        href: "https://boltrswap.info/pairs",
      },
      {
        label: "Accounts",
        href: "https://boltrswap.info/accounts",
      },
    ],
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Voting",
        href: "https://voting.boltrswap.finance",
      },
      {
        label: "Github",
        href: "https://github.com/boltrswap",
      },
      {
        label: "Docs",
        href: "https://docs.boltrswap.finance",
      },
      {
        label: "Blog",
        href: "https://boltrswap.medium.com",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/boltrswap",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/BoltrSwapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/BoltrSwap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/BoltrSwapVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/boltrswap_ita",
      },
      {
        label: "русский",
        href: "https://t.me/boltrswap_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/boltrswapturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/BoltrSwapPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/BoltrswapEs",
      },
      {
        label: "日本語",
        href: "https://t.me/boltrswapjp",
      },
      {
        label: "Français",
        href: "https://t.me/boltrswapfr",
      },
      {
        label: "Announcements",
        href: "https://t.me/BoltrSwapAnn",
      },
      {
        label: "Whale Alert",
        href: "https://t.me/BoltrSwapWhales",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/boltrswap",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
