import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { userAuth } from "../../context/AuthContext.js";
import { userContent } from "../../context/EditContext.js";
import { userData } from "../../context/UserContext.js";
import ProfileEdit from "../button/ProfileEdit.js";
import EditProfile from "../input/EditProfile.js";
import Navbar from "../navbar/Navbar.js";

export default function Profile() {
  const { user } = userAuth();
  const { edit, show } = userContent();
  const { profile, content } = userData();
  return (
    <>
      <Navbar className="atalay" />
      <div className="flex relative overflow-auto bg-profile h-full w-full">
        <Link to="/home" replace>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 relative exit left-36 top-5 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </Link>
        <div className="relative profile-a12A AtA11">
          <div className="flex w-full flex-col relative">
            <div className="card-bg profile-a12C "></div>
            <ProfileEdit show={edit} />
            {show ? <EditProfile show={edit} toggle={edit} /> : null}
            <div className="profile-image-card">
              {!user.profile_image ? null : (
                <img
                  className="rounded-full"
                  src={user.profile_image ? user.profile_image : null}
                  width={100}
                  height={100}
                  alt="profile"
                />
              )}
            </div>
            <div className="flex flex-wrap">
              <div className="text-xl text-bold profile-text ">{user.name}</div>
              <div className="profile-content relative">
                {!profile ? null : !profile.content ? (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton count={1} width="150px" />
                    <Skeleton count={1} width="250px" />
                  </SkeletonTheme>
                ) : (
                  profile.content
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
