export default function TrustDock() {
  const avatars = [
    '/images/avatar1.avif',
    '/images/avatar2.jpg',
    '/images/avatar3.jfif',
    '/images/avatar4.jpg',
    '/images/avatar5.jfif',
  ];

  return (
    <div className="relative z-20 -mt-12 max-w-5xl mx-auto px-6">
      <div className="bg-white backdrop-blur-md border-[1.2px] border-gray-300 rounded-md p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Review Badge */}
          <div className="flex items-center gap-5 shrink-0 pr-6 w-fit">
            {/* Google Icon Circle */}
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="/images/google-g.png" alt="Google" className="w-full h-full object-contain" />
            </div>

            <div className="flex items-center gap-5">
              {/* Main Stats */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1.5 font-bold text-gray-900 leading-none">5.0</span>
                </div>
                <p className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider mt-1">
                  45 Google Reviews
                </p>
              </div>

              {/* Elegant Vertical Divider */}
              <div className="h-8 w-px bg-gray-200" />

              {/* Secondary Proof Point */}
              <div className="flex flex-col justify-center">
                <span className="text-lg font-bold text-gray-900 leading-none">99%</span>
                <p className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider mt-1">
                  Uptime
                </p>
              </div>
            </div>
          </div>

          {/* Avatar Section (Replacing Logos) */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {avatars.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Client ${index + 1}`}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <a 
              href="#" 
              className="text-sm font-bold text-gray-900 underline underline-offset-4 hover:text-secondary-500 transition-colors"
            >
              Viel Testimonials
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}