import React, {FC, PropsWithChildren} from 'react';

import styles from './ImagePreview.module.scss';
import image_null from '../../constants/images/image_null.png';

interface IProps extends PropsWithChildren {
    path: string,
    title: string,
}

const ImagePreview: FC<IProps> = ({path, title}) => {
    return (
        <>
            {
                path ?
                    <img
                        className={styles.image}
                        src={`${process.env.REACT_APP_IMAGE_URL}${path}`}
                        alt={title}/> :
                    <img
                        className={styles.null}
                        src={image_null}
                        alt="image_null logo"
                    />
            }
        </>
    );
};

export default ImagePreview;
