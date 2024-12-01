import Search from "./Search";
import MenuToggler from "./MenuToggler";
import UserProfileDropdown from "./UserProfileDropdown";

const HeaderActions = () => {
  return (
    <div className="flex items-center gap-3 justify-end flex-1 ">
      {/* searchbar  */}
      <div className="hidden md:block">
        <Search />
      </div>
      {/* user profile button */}
      <UserProfileDropdown />
      <MenuToggler />
    </div>
  );
};

export default HeaderActions;
