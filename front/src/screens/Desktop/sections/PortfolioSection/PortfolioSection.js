
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Sample portfolio data
const portfolioImages = [
    {
      src: "https://c.animaapp.com/mbefdp65f3u1c4/img/frame-90.png",
      alt: "Frame",
      width: "244px",
      text: "Walky\nFitness app"
    },
    {
      src: "https://c.animaapp.com/mbefdp65f3u1c4/img/frame-95.png",
      alt: "Frame",
      width: "292px",
      text: "Twist Click\nLogo design"
    },
    {
      src: "https://c.animaapp.com/mbefdp65f3u1c4/img/frame-96.png",
      alt: "Frame",
      width: "292px",
      text: "Genie\nPar Gims"
    },
    {
      src: "https://c.animaapp.com/mbefdp65f3u1c4/img/frame-97.png",
      alt: "Frame",
      width: "292px",
      text: "Amp Fresh\nBranding"
    },
    {
      src: "https://c.animaapp.com/mbefdp65f3u1c4/img/frame-98.png",
      alt: "Frame",
      width: "268px",
      text: "Souls\mMusic App"
    },
];
export const PortfolioSection =  () => {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  useEffect(() => {
    checkScrollButtons()
    const scrollElement = scrollRef.current
    if (scrollElement) {
      scrollElement.addEventListener("scroll", checkScrollButtons)
      return () => scrollElement.removeEventListener("scroll", checkScrollButtons)
    }
  }, [])

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320
      const newScrollLeft = scrollRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative w-full mt-16 overflow-hidden">
      {/* Background with enhanced styling */}
      <div
        className="w-full h-[834px] rotate-180 opacity-[0.74]"
        style={{
          background: "linear-gradient(34deg, rgba(0,0,0,0.39) 0%, rgba(191,255,0,0.39) 100%)",
          boxShadow: "inset 0px 4px 191.6px 178px #000000e0",
        }}
      />

      {/* Content overlay */}
      <div className="absolute w-full top-[93px] left-0 px-4">
        {/* Title section */}
        <div className="text-center mb-8">
        <h2 className="text-center font-['Montserrat',Helvetica] font-bold text-white text-[40px] tracking-[0] leading-[normal]">
              Nos Réalisations
            </h2>

            <img
              className="mx-auto w-[297px] h-[25px] mt-4"
              alt="Vector"
              src="https://c.animaapp.com/mbefdp65f3u1c4/img/vector-2043.svg"
            />

          {/* Decorative line */}
          <div className="mx-auto w-[297px] h-[25px] relative">
            <svg width="297" height="25" viewBox="0 0 297 25" className="w-full h-full">
              <path d="M0 12.5 L297 12.5" stroke="url(#gradient)" strokeWidth="2" fill="none" />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(191,255,0,0.2)" />
                  <stop offset="50%" stopColor="rgba(191,255,0,1)" />
                  <stop offset="100%" stopColor="rgba(191,255,0,0.2)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Portfolio gallery with navigation */}
        <div className="relative mt-[120px]">
          {/* Navigation buttons */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 ${
              canScrollLeft
                ? "text-white hover:bg-lime-400/20 hover:border-lime-400/50 hover:scale-110"
                : "text-gray-500 cursor-not-allowed opacity-50"
            }`}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 ${
              canScrollRight
                ? "text-white hover:bg-lime-400/20 hover:border-lime-400/50 hover:scale-110"
                : "text-gray-500 cursor-not-allowed opacity-50"
            }`}
          >
            <ChevronRight size={24} />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 px-16 pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {portfolioImages.map((image, index) => (
              <div key={index} className="relative flex-shrink-0 snap-center group cursor-pointer">
                {/* Image container with enhanced hover effects */}
                <div className="relative overflow-hidden rounded-2xl transition-all duration-500 ease-out group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-lime-400/20">
                  <img
                    className="h-[392px] object-cover transition-all duration-500 group-hover:scale-110"
                    style={{ width: image.width }}
                    alt={image.alt}
                    src={image.src || "/placeholder.svg"}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 rounded-2xl" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-lime-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  {/* Content */}
                  <div className="absolute left-4 bottom-4 text-left transform transition-all duration-300 group-hover:translate-y-[-4px]">
                    {image.text.split("\n").map((part, idx) =>
                      idx === 0 ? (
                        <span key={idx} className="block text-white font-bold text-xl mb-1 drop-shadow-lg">
                          {part}
                        </span>
                      ) : (
                        <span key={idx} className="block text-white/90 text-base drop-shadow-md">
                          {part}
                        </span>
                      ),
                    )}
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-lime-400/20 backdrop-blur-sm border border-lime-400/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                    <div className="w-2 h-2 rounded-full bg-lime-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style> */}
    </section>
  )
}