import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import {useTranslation} from "react-i18next";

export const BugButton = () => {
    const { t } = useTranslation('translation');

    const [error, setError] = useState(false);

    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={onThrow}
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [])}
        >
            {t('Вызвать ошибку')}
        </Button>
    );
};
