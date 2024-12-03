import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <div className="w-full h-[calc(100dvh-90px)] mt-[90px] bg-gray-200/40  flex items-center justify-center">
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;
