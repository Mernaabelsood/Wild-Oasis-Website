// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "dclaevazetcjjkrzczpc.supabase.co",
//         port: "",
//         pathname: "/storage/v1/object/public/cabin-images/**",
//       },
//     ],
//   },
//   // output: "export",
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iddflntaamppoqpkcvcc.supabase.co", // Updated to match the URL in your error
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
  // output: "export",
};

export default nextConfig;

