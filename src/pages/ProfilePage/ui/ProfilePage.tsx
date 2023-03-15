import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import cls from './ProfilePage.module.scss';
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {profileReducer} from 'entities/Profile';

interface ProfilePageProps {
    className?: string
}

const reducers: ReducersList = {
    profile: profileReducer
}

export const ProfilePage = ({className}: ProfilePageProps) => {
    const {t} = useTranslation('translation');

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                {t('Страница не найдена')}
            </div>
        </DynamicModuleLoader>
    );
};
