/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      // {
      //   protocol: '',
      //   hostname: 'pixabay.com',
      //   port: '',
      //   pathname: 'https://pixabay.com/photos/man-rain-outdoors-city-umbrella-5106022/',
      // },{
      //   protocol: '',
      //   hostname: 'google.com',
      //   port: '',
      //   pathname: 'https://drive.google.com/file/d/19AxwyHnlLCXDTzh5OKsxBqXzGaUcV9FQ/view?usp=share_link',        
      // }
    ],
  },
}

module.exports = nextConfig
