import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavBarProps {
    className?: string
}

export const Navbar = ({ className }: NavBarProps) => {
    const { t } = useTranslation('translation');

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to="/" theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>
                    {t('Главная')}
                </AppLink>
                <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};
