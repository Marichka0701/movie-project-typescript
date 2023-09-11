import React, {FC, PropsWithChildren} from 'react';

import styles from './UserInfo.module.scss';
import user from '../../constants/images/user.png';

interface IProps extends PropsWithChildren {

}

const UserInfo: FC<IProps> = () => {
    return (
        <div className={styles.user}>
            <img src={user} alt="user`s photo"/>
            <p>Tanechnyk M.</p>
        </div>
    );
};

export default UserInfo;
