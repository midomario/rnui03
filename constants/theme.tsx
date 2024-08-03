import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

 const COLORS = {
    primary: "#3257A2",
    secondary: "#3365A4",
    light: "#FAFAFA",
    grey: "#BDBDBD",
    lightGrey: "#F6F6F6",
    medium: "#A1A0A0",
    dark: "#1B1919",
     white: "#FFFFFF",
     background: "#F1F2F2",
    stars: "DDA830"
}

 const SIZES = {
    XS: 8,
    SM: 10,
    MD: 14,
    LG: 18,
    XL: 24,
    XXL: 34,
    width :  width,
    height : height,
}

export { COLORS, SIZES }