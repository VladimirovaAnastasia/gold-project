import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo } from 'react';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    /* i18next-extract-disable-next-line */
    const { t, i18n } = useTranslation('translation');

    const onToggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={onToggle}
        >
            {/* i18next-extract-disable-next-line */}
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    );
});
