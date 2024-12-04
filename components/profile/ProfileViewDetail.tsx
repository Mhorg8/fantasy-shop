interface Props {
  title: string;
  value: string;
}

const ProfileViewDetail = ({ title, value }: Props) => {
  return (
    <div className="flex justify-between px-3">
      <h3 className="text-base font-semibold text-neutral-500 capitalize">
        {title}:
      </h3>
      <p className="text-base font-medium">{value}</p>
    </div>
  );
};

export default ProfileViewDetail;
