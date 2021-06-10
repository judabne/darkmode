// import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './DarkModeProvider.style';

export class DarkModeProvider extends PureComponent {
    static propTypes = {
        // TODO: implement prop-types
    };

    render() {
        const { children, isDarkModeEnabled } = this.props;

        // we specify a modifier called `isEnabled` in the `mods` prop
        // if isDarkModeEnabled is true, the modifier will be added, otherwise not
        return (
        <div block="DarkModeProvider" mods={{ isEnabled: isDarkModeEnabled }}>
            {children}
        </div>
        );
    }
}

export default DarkModeProvider;
