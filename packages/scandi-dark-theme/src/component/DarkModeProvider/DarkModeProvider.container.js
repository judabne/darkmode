import { connect } from "react-redux";

import { enableDarkMode } from "../../store/DarkMode/DarkMode.action";

import DarkModeProvider from "./DarkModeProvider.component";

/** @namespace ScandiDarkTheme/Component/DarkModeProvider/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
  isDarkModeEnabled: state.DarkModeReducer.enabled,
});

/** @namespace ScandiDarkTheme/Component/DarkModeProvider/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({
  enableDarkMode: (enabled) => dispatch(enableDarkMode(enabled)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DarkModeProvider);