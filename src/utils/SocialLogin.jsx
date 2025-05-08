import React from 'react';
import { FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';


const SocialLogin = () => {
  return (
    <div className="flex justify-center gap-4 mt-6">
      <button className="p-3 bg-white rounded-full shadow hover:opacity-90 transition" title="Google">
        <FcGoogle  className="text-red-600" size={20} />
      </button>
      <button className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition" title="Facebook">
        <FaFacebookF className="text-white" size={20} />
      </button>
      <button className="p-3 bg-black rounded-full hover:bg-gray-900 transition" title="X">
        <FaXTwitter className="text-white" size={20} />
      </button>
    </div>
  );
};

export default SocialLogin;
