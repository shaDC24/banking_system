import React from "react";
import Image from "next/image";
import { logoutAccount } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";
const Footer = ({ user, type = "desktop" }: FooterProps) => {
  const router = useRouter();
  const handlelogOut = async () => {
    const logout = await logoutAccount();
    if (logout) router.push("/sign-in");
  };
  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
        <p className="text-xl font-bold text-gray-700">{user?.firstName[0]}</p>
      </div>
      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
      >
        <h1 className="text-14 truncate font-bold text-gray-700">
          {user?.firstName}
        </h1>
        <p className="text-14 truncate font-normal text-gray-700">
          {user?.email}
        </p>
      </div>
      <div className="footer_image" onClick={handlelogOut}>
        <Image src="icons/logout.svg" fill alt="jsm" />
      </div>
    </footer>
  );
};

export default Footer;
