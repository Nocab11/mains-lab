import { ThemeConfig } from "antd";
import { DirectionType } from "antd/es/config-provider";
import { EActionsBg } from "@shared/themes/types";

export const direction: DirectionType = "ltr";

const reoundedPartial: ThemeConfig = {
  token: {
    borderRadiusLG: 0,
    borderRadius: 0,
  },
};

const defaultTheme: ThemeConfig = {
  token: {
    colorPrimary: "#00b96b",
    // fontSize: 20
  },

  components: {
    Layout: {
      headerBg: "#001529",
    },
    Card: {
      actionsBg: EActionsBg.WHITE,
    },
    Breadcrumb: {
      colorBgLayout: "white",
    },
    Flex: {
      colorBgLayout: "white",
    },
    Button: {
      defaultBorderColor: "#002C51",
    },
  },
};

const secondTheme: ThemeConfig = {
  token: {
    colorPrimary: "#e20040",
    colorBgContainer: "#001529",
    colorBgLayout: "#011d39",
    colorText: "white",
    colorTextBase: "white",
    colorBgBase: "#464849",
    colorPrimaryBg: "#011d39",
    colorLink: "#f33a6e",
    colorLinkActive: "#fe4c7d",
    colorLinkHover: "#fe4c7d",
    borderRadiusLG: 0,
    borderRadius: 0,
    // fontSize: 20
  },
  components: {
    Layout: {
      headerBg: "#001529",
    },
    Breadcrumb: {},
    Pagination: {},
    Button: {
      defaultBorderColor: "white",
    },
    Card: {
      actionsBg: EActionsBg.DARK,
    },
    Tag: {
      defaultBg: "#001529",
    },
  },
};

export default { ...defaultTheme };
