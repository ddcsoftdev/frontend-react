export const MOBILE_WIDTH_RANGE: number[] = [0, 768];
export const TABLET_WIDTH_RANGE: number[] = [768, 1224];
export const DESKTOP_WIDTH_RANGE: number[] = [1224, 6000];

export const isMobileString: string = 'mobile';
export const isTabletString: string = 'tablet';
export const isDesktopStirng: string = 'desktop';

export const getWindowSizeDeviceString = (size: number): string => {

    if (size >= MOBILE_WIDTH_RANGE[0] && size < MOBILE_WIDTH_RANGE[1])
        return isMobileString;
    else if (size >= TABLET_WIDTH_RANGE[0] && size < TABLET_WIDTH_RANGE[1])
        return isTabletString;
    else
        return isDesktopStirng;
};