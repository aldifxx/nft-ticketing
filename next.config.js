/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'bafybeifmkgxjwo72nm67ek3f7g4lzhgstgrodqn4x2mpyurgv6nvqaycz4.gateway.ipfscdn.io',
      'bafybeidagfc22omsnhsed57qml3srk65ckiniimxfdbkwoxcdjwovlboba.gateway.ipfscdn.io',
      'bafybeigfiirdht6a2u7i3tobny44a4f7peoira6u7lpicchocuirsotjly.gateway.ipfscdn.io',
    ]
  }
}

module.exports = nextConfig
