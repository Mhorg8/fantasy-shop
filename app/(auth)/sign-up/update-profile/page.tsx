import ProfileUpdate from "@/components/profile/ProfileUpdate";
import ProfileView from "@/components/profile/ProfileView";

const UpdateProfile = () => {
  return (
    <div className="w-full h-full grid grid-cols-12 gap-5 py-8 px-5">
      <ProfileView />
      <ProfileUpdate />
    </div>
  );
};

export default UpdateProfile;
