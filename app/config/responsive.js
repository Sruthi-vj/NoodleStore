import { Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');
export const responsiveHeight = h => {
    // return Platform.OS == 'ios' ? height * (h / 100) - 1 : height * (h / 100);
    return height * (h / 100);
};

export const responsiveWidth = w => {
    return width * (w / 100);
};

export const responsiveFontSize = f => {
    return Platform.OS == 'ios'
        ? Math.sqrt(height * height + width * width) * (f / 100) - 2
        : Math.sqrt(height * height + width * width) * (f / 100);
};
