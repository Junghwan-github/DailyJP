import { Text, TextProps, TextStyle } from 'react-native';
import { styles } from './CustomTextStyle';

type CustomTextType = TextProps & {
  children: React.ReactNode;
  style?: TextStyle;
  locale?: 'ko' | 'jp';
  size?: TextSize;
  weight?: TextWeight;
  spacing?: TextSpacing;
};

export enum TextSize {
  S_XS = 'size_xs',
  S_SM = 'size_sm',
  S_BASE = 'size_base',
  S_LG = 'size_lg',
  S_XL = 'size_xl',
  S_2XL = 'size_2xl',
  S_3XL = 'size_3xl',
  S_4XL = 'size_4xl',
  S_5XL = 'size_5xl',
  S_6XL = 'size_6xl',
  S_7XL = 'size_7xl',
  S_8XL = 'size_8xl',
  S_9XL = 'size_9xl',
}

export enum TextWeight {
  THIN = 'font_thin',
  EXTRA_LIGHT = 'font_extralight',
  LIGHT = 'font_light',
  NORMAL = 'font_normal',
  MEDIUM = 'font_medium',
  SEMIBOLD = 'font_semibold',
  BOLD = 'font_bold',
  EXTRA_BOLD = 'font_extrabold',
  BLACK = 'font_black',
}

export enum TextSpacing {
  TIGHTER = 'tracking_tighter',
  TIGHT = 'tracking_tight',
  NORMAL = 'tracking_normal',
  WIDE = 'tracking_wide',
  WIDER = 'tracking_wider',
  WIDEST = 'tracking_widest',
}

export const CustomText = (props: CustomTextType) => {
  const {
    children,
    locale = 'ko',
    size = TextSize.S_BASE,
    weight = TextWeight.NORMAL,
    spacing = TextSpacing.NORMAL,
    style,
    ...rest
  } = props;

  const getFontSuffix = (weight: TextWeight) => {
  switch (weight) {
    case TextWeight.THIN:
      return 'Thin';
    case TextWeight.EXTRA_LIGHT:
      return 'ExtraLight';
    case TextWeight.LIGHT:
      return 'Light';
    case TextWeight.MEDIUM:
      return 'Medium';
    case TextWeight.SEMIBOLD:
      return 'SemiBold';
    case TextWeight.BOLD:
      return 'Bold';
    case TextWeight.EXTRA_BOLD:
      return 'ExtraBold';
    case TextWeight.BLACK:
      return 'Black';
    case TextWeight.NORMAL:
    default:
      return 'Regular';
  }
};

// ✅ locale + weight → fontFamily 선택
const getFontFamily = (locale: 'ko' | 'jp', weight: TextWeight) => {
  const prefix = locale === 'ko' ? 'Pretendard' : 'PretendardJP';
  return `${prefix}-${getFontSuffix(weight)}`;
};

 const fontFamily = getFontFamily(locale, weight);

  return (
    <Text
      style={[
        { fontFamily },
        styles[size],
        styles[weight],
        styles[spacing],
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};
