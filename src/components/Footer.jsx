import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const windyApps = [
    { name: "WindyWord.ai", url: "https://windyword.ai" },
    { name: "WindyCloud.com", url: "https://windycloud.com" },
    { name: "WindyClone.ai", url: "https://windyclone.ai" },
    { name: "WindyChat.ai", url: "https://windychat.ai" },
    { name: "WindyTraveler.com", url: "https://windytraveler.com" },
    { name: "WindyTranslate.com", url: "https://windytranslate.com" }
  ];

  const legal = [
    { name: "Privacy Policy", url: "/privacy" },
    { name: "Terms of Service", url: "/terms" },
    { name: "Cookie Policy", url: "/cookies" },
    { name: "Security", url: "#security" }
  ];

  const social = [
    { name: "Twitter", url: "https://twitter.com/windycloud", icon: "𝕏" },
    { name: "GitHub", url: "https://github.com/windycloud", icon: "💻" },
    { name: "Discord", url: "https://discord.gg/windycloud", icon: "💬" },
    { name: "LinkedIn", url: "https://linkedin.com/company/windycloud", icon: "💼" }
  ];

  return (
    <footer className="bg-windy-darker border-t border-windy-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-2">☁️</span>
              <span className="text-2xl font-bold gradient-text">WindyCloud</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              The cloud built for AI creators. Store, sync, and compute.
            </p>
            <div className="flex space-x-3">
              {social.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className="text-2xl hover:scale-110 transition-transform duration-200"
                  aria-label={item.name}
                  title={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Windy Ecosystem */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-windy-blue">Windy Ecosystem</h3>
            <ul className="space-y-2">
              {windyApps.map((app, index) => (
                <li key={index}>
                  <a
                    href={app.url}
                    className="text-gray-400 hover:text-windy-blue transition-colors duration-200 text-sm"
                  >
                    {app.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-windy-blue">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-windy-blue transition-colors duration-200 text-sm">Features</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-windy-blue transition-colors duration-200 text-sm">Pricing</a></li>
              <li><a href="#security" className="text-gray-400 hover:text-windy-blue transition-colors duration-200 text-sm">Security</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-windy-blue transition-colors duration-200 text-sm">FAQ</a></li>
              <li><a href="/docs" className="text-gray-400 hover:text-windy-blue transition-colors duration-200 text-sm">Documentation</a></li>
              <li><a href="/api" className="text-gray-400 hover:text-windy-blue transition-colors duration-200 text-sm">API</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-windy-blue">Legal</h3>
            <ul className="space-y-2">
              {legal.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="text-gray-400 hover:text-windy-blue transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-windy-blue/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} WindyCloud. Part of the Windy Empire. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Built with 🌪️ for AI creators everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
