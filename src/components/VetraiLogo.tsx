export function VetraiLogo() {
  return (
    <div className="flex items-center gap-4">
      {/* Vetrai Logo */}
      <div className="flex items-center gap-2">
        <div className="relative">
          {/* Logo Icon */}
          <div className="w-10 h-10 bg-[#EE0000] rounded-lg flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M14 2L24 8V20L14 26L4 20V8L14 2Z" 
                stroke="white" 
                strokeWidth="2" 
                fill="none"
              />
              <circle cx="14" cy="14" r="4" fill="white" />
              <path 
                d="M14 10V14L17 16" 
                stroke="#EE0000" 
                strokeWidth="1.5" 
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        <div>
          <h1 className="text-white tracking-tight">Vetrai</h1>
          <p className="text-gray-400 text-xs -mt-1">Traffic Intelligence Platform</p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-10 w-px bg-gray-700 mx-2"></div>

      {/* Powered by Verizon */}
      <div className="flex items-center gap-2">
        <span className="text-gray-400 text-xs">Powered by</span>
        <div className="flex items-center gap-1">
          {/* Verizon Checkmark Logo */}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M2 8L6 12L14 4" 
              stroke="#EE0000" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[#EE0000] tracking-tight">Verizon</span>
        </div>
      </div>
    </div>
  );
}
