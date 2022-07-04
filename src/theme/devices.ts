export const devices = {
  MOBILE_S: '(min-width: 320px)',
  MOBILE_M: '(min-width: 375px)',
  MOBILE_L: '(min-width: 425px)',
  TABLET: '(min-width: 768px)',
  LAPTOP_S: '(min-width: 992px)',
  LAPTOP: '(min-width: 1024px)',
  LAPTOP_L: '(min-width: 1440px)',
  DESKTOP: '(min-width: 2560px)',
  TABLET_MAX: '(max-width: 768px)',
};

export interface IDevices {
  MOBILE_S: string;
  MOBILE_M: string;
  MOBILE_L: string;
  TABLET: string;
  LAPTOP_S: string;
  LAPTOP: string;
  LAPTOP_L: string;
  DESKTOP: string;
  TABLET_MAX: string;
}
