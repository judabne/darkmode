import DarkModeProvider from "../component/DarkModeProvider/";
import ModeToggleButton from "../component/ModeToggleButton";

import "./Header.style.plugin";

export const renderTopMenu = (args, callback, instance) => {
  return (
    <>
      {callback(...args)}
      <div block="Header" elem="DarkModeToggle">
        <ModeToggleButton />
        <DarkModeProvider />
      </div>
    </>
  );
};

export default {
  "Component/Header/Component": {
    "member-function": {
      renderTopMenu,
    },
  },
};