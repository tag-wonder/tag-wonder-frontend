import localFont from 'next/font/local';

const samliphopangche = localFont({
  src: './SDSamliphopangcheBasic.woff2',
  display: 'swap',
  preload: true,
  fallback: [
    'SDSamliphopangche_Basic',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
});

const miSaeng = localFont({
  src: './SDMiSaeng.woff2',
  display: 'swap',
  preload: true,
  fallback: [
    'SDMiSaeng',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
});

const hSYuji = localFont({
  src: './HSYuji.woff2',
  display: 'swap',
  preload: true,
  fallback: [
    'HSYuji-Regular',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
});

export default {
  miSaeng: miSaeng.className,
  hSYuji: hSYuji.className,
  samliphopangche: samliphopangche.className,
};
