import { type ComponentType } from 'react';
import { type WithThemeProps } from '../types';

export function withTheme<P extends WithThemeProps>(
    WrappedComponent: ComponentType<P>
) {
    const ComponentWithTheme = (props: P) => {
        return <WrappedComponent {...props} />;
    };

    // Сохраняем имя исходного компонента для удобства отладки
    const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    ComponentWithTheme.displayName = `withTheme(${displayName})`;

    return ComponentWithTheme;
}
