import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar";

const Profile = () => {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {

    const savedImage = localStorage.getItem(
      "profileImage"
    );

    if (savedImage) {
      setProfileImage(savedImage);
    }

  }, []);

  const handleImageChange = (e) => {

    const file = e.target.files[0];

    if (file) {

      const reader = new FileReader();

      reader.onloadend = () => {

        setProfileImage(reader.result);

        localStorage.setItem(
          "profileImage",
          reader.result
        );

      };

      reader.readAsDataURL(file);

    }
  };

  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto py-10 px-4">

        <div className="bg-white p-10 rounded-3xl shadow-2xl">

          <div className="flex flex-col items-center">

            {
              profileImage ? (

                <img
                  src={profileImage}
                  alt=""
                  className="w-40 h-40 rounded-full object-cover border-4 border-black"
                />

              ) : (

                <div className="w-40 h-40 rounded-full bg-gray-300 flex items-center justify-center text-6xl font-bold text-white">

                  ?

                </div>

              )
            }

            <label className="mt-6 bg-black text-white px-6 py-3 rounded-xl cursor-pointer hover:bg-gray-800 transition">

              Upload Profile Image

              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />

            </label>

            <h1 className="text-4xl font-bold mt-8">
              {user?.name}
            </h1>

            <p className="text-gray-500 mt-3 text-lg">
              {user?.email}
            </p>

          </div>

        </div>

      </div>
    </>
  );
};

export default Profile;