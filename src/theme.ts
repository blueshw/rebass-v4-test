export const COLORS = {
  pink: "lightpink",
  green: "#3ddc99",
  defaultGray: "#dddddd",
  blue: "#33b",
  transparent: "transparent",
  black: "#333333",
  black02: "#000000",
  grey00: "#444444",
  grey01: "#555555",
  grey02: "#777777",
  grey03: "#999999",
  grey04: "#bbbbbb",
  white: "#ffffff",
  yellow01: "#ffd201",
  yellow02: "#ffc101",
  yellow03: "#ffb601",
  yellow04: "#fdf1c4",
  yellow05: "#ffd800",
  red01: "#ff2f2f",
  red02: "#ff4e4e",
  red03: "#da5333",
  red04: "#f86071",
  blue01: "#1c68ff",
  blue02: "#4167b2",
  lightGrey01: "#d8d8d8",
  lightGrey02: "#e8e8e8",
  lightGrey03: "#f2f2f2",
  lightGrey04: "#f6f6f6",
  lightGrey05: "#f9f9f9",
  line01: "#f6f6f6",
  lightYellow: "#fffbee",
  orange: "#ff924e",
  whatsapp: "#455a64",
  gray02_a30: "rgba(119, 119, 119, 0.3)",
  dimmed: `rgba(0, 0, 0, 0.5)`,
  black_a30: "rgba(51, 51, 51, 0.3)",
  black_a60: "rgba(51, 51, 51, 0.6)",
  black_a90: "rgba(51, 51, 51, 0.9)",
  black02_a10: "rgba(0, 0, 0, 0.1)",
  black02_a05: "rgba(0, 0, 0, 0.05)",
  black02_a08: "rgba(0, 0, 0, 0.08)",
  black02_a15: "rgba(0, 0, 0, 0.15)",
  black02_a30: "rgba(0, 0, 0, 0.3)",
  black02_a40: "rgba(0, 0, 0, 0.4)",
  black02_a50: "rgba(0, 0, 0, 0.5)",
  black02_a60: "rgba(0, 0, 0, 0.6)",
  black02_a70: "rgba(0, 0, 0, 0.7)",
  black02_a80: "rgba(0, 0, 0, 0.8)",
  black02_a85: "rgba(0, 0, 0, 0.85)",
  yellow01_a70: `rgba(255, 210, 1, 0.7)`,
  white_a40: "rgba(255, 255, 255, 0.4)",
  white_a50: "rgba(255, 255, 255, 0.5)",
};
export type ColorVariant = keyof typeof COLORS;

export type ButtonVariant =
  | "transparent"
  | "transparent_02"
  | "transparent_yellow01_a70"
  | "transparent_yellow01_a70_02"
  | "black"
  | "black_02"
  | "black_03"
  | "black02"
  | "lightGrey01"
  | "lightGrey03"
  | "lightGrey03_02"
  | "lightGrey04"
  | "white_lightGrey01"
  | "white_black_a30"
  | "white_lightGrey02"
  | "white"
  | "red04"
  | "yellow01"
  | "yellow01_02"
  | "yellow01_03"
  | "yellow01_04"
  | "whatsapp"
  | "white_google"
  | "blue02_facebook"
  | "red03_email"
  | "black02_apple";

const DISABLED_KEY = "&:disabled";
const ACTIVE_KEY = "&:active";
const DISABLED_PAGETEXT_KEY = "&:disabled > span";

interface IButtonActiveProps {
  backgroundColor: string;
}
interface IButtonProps {
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
}
interface IButtonDisabledProps extends IButtonProps {
  background?: string;
  color?: string;
  opacity?: number;
}
interface IButtonFullProps extends IButtonProps {
  [ACTIVE_KEY]?: IButtonActiveProps;
  [DISABLED_KEY]?: IButtonDisabledProps;
  [DISABLED_PAGETEXT_KEY]?: IButtonDisabledProps;
}
const DISABLED_STYLE_LIGHTGREY01: IButtonFullProps = {
  [DISABLED_KEY]: {
    backgroundColor: COLORS.lightGrey01,
    opacity: 1,
  },
  [DISABLED_PAGETEXT_KEY]: {
    color: `${COLORS.white} !important`,
  },
};

const BUTTONS: { [key in ButtonVariant]: IButtonFullProps } = {
  transparent: {
    backgroundColor: "transparent",
  },
  transparent_02: {
    backgroundColor: "transparent",
    [ACTIVE_KEY]: {
      backgroundColor: COLORS.lightGrey03,
    },
  },
  transparent_yellow01_a70: {
    backgroundColor: "transparent",
    border: `1px solid ${COLORS.yellow01_a70}`,
    borderRadius: "9.5px",
  },
  transparent_yellow01_a70_02: {
    backgroundColor: "transparent",
    border: `1px solid ${COLORS.yellow01_a70}`,
    borderRadius: "11px",
  },
  black: {
    backgroundColor: COLORS.black,
    borderRadius: "5px",
  },
  black_02: {
    backgroundColor: COLORS.black,
    borderRadius: "3px",
  },
  black_03: {
    backgroundColor: COLORS.black,
    borderRadius: "24px",
  },
  black02: {
    backgroundColor: COLORS.black02,
    borderRadius: "26px",
  },
  lightGrey01: {
    backgroundColor: COLORS.lightGrey01,
    borderRadius: "3px",
  },
  lightGrey03: {
    backgroundColor: COLORS.lightGrey03,
    borderRadius: "0px",
    [DISABLED_KEY]: {
      opacity: 1,
    },
  },
  lightGrey03_02: {
    backgroundColor: COLORS.lightGrey03,
    borderRadius: "5px",
  },
  lightGrey04: {
    backgroundColor: COLORS.lightGrey04,
    borderRadius: "3px",
  },
  white_lightGrey01: {
    backgroundColor: COLORS.white,
    border: `1px solid ${COLORS.lightGrey01}`,
    borderRadius: "5px",
  },
  white_black_a30: {
    backgroundColor: COLORS.white,
    border: `1px solid ${COLORS.black_a30}`,
    borderRadius: "5px",
  },
  white_lightGrey02: {
    backgroundColor: COLORS.white,
    border: `1px solid ${COLORS.lightGrey02}`,
    borderRadius: "2.5px",
  },
  white: {
    backgroundColor: COLORS.white,
  },
  red04: {
    backgroundColor: COLORS.red04,
    [DISABLED_KEY]: {
      backgroundColor: COLORS.grey04,
      opacity: 1,
    },
  },
  yellow01: {
    backgroundColor: COLORS.yellow01,
    borderRadius: "5px",
    ...DISABLED_STYLE_LIGHTGREY01,
  },
  yellow01_02: {
    backgroundColor: COLORS.yellow01,
    borderRadius: "0px",
    ...DISABLED_STYLE_LIGHTGREY01,
  },
  yellow01_03: {
    backgroundColor: COLORS.yellow01,
    borderRadius: "9.5px",
  },
  yellow01_04: {
    backgroundColor: COLORS.yellow01,
    borderRadius: "3px",
    ...DISABLED_STYLE_LIGHTGREY01,
  },
  whatsapp: {
    backgroundColor: COLORS.whatsapp,
    borderRadius: "3px",
  },
  white_google: {
    backgroundColor: COLORS.white,
    border: `solid 1px ${COLORS.black02}`,
    borderRadius: "30px",
  },
  blue02_facebook: {
    backgroundColor: COLORS.blue02,
    border: `solid 1px ${COLORS.blue02}`,
    borderRadius: "30px",
  },
  red03_email: {
    backgroundColor: COLORS.red03,
    border: `solid 1px ${COLORS.red03}`,
    borderRadius: "30px",
  },
  black02_apple: {
    backgroundColor: COLORS.black02,
    border: `solid 1px ${COLORS.black02}`,
    borderRadius: "30px",
  },
};

const theme = { colors: COLORS, buttons: BUTTONS };

export default theme;
