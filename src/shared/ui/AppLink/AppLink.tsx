import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'helpers/classnames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
    const { to, theme = AppLinkTheme.PRIMARY, className, children, ...otherProps } = props;

    return (
        <Link to={to} className={classNames(cls.appLink, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </Link>
    );
};
