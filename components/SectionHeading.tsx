import React from "react";

interface Props {
  text: string;
}

const SectionHeading = ({ text }: Props) => {
  return <h2 className="text-dark-greenn text-4xl font-medium">{text}</h2>;
};

export default SectionHeading;
