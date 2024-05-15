import styles from "@/styles/AssetWrapper.module.css";

type AssetWrapperProps = Record<string, any>;

const AssetWrapper: React.FC<AssetWrapperProps> = ({ 
    children,
    assetWidth = "100%", 
    gradientBlend = false,
}) => {

    return (
            <div 
                className={styles.assetOuterContainer}
            >
                <div 
                    className={gradientBlend ? 
                        styles.assetInnerContainer : styles.assetInnerContainerWithoutAfter
                    }
                    style={{ width: assetWidth }}
                >
                    {children}
                </div>
            </div>
    );

}

export default AssetWrapper;