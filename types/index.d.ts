export type SubSection = {
    layout?: {
        isHorizontalSwitch?: Boolean,
    },
    text?: {
        activityDomain?: string,
        description?: string,
        skills?: any,
    },
    assetDisplay?: {
        assetWidth?: string,
        gradientBlend?: Boolean,
    },
    image?: {
        imgUri: string,
        imgAlt: string,
    },
    video?: {
        videoUri: string,
        linkUrl?: string,
    },
};