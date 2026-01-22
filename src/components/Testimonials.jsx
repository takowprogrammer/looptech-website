'use client';

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Loop Tech transformed our legacy infrastructure. Their cloud migration strategy was seamless, and we've seen a 40% improvement in system latency since the move.",
    author: "Dr. Njoh Samuel",
    source: "LinkedIn",
    icon: "/images/google-p.png",
    role: "Director of Operations, FinCorp",
    rating: 5,
    date: "2 weeks ago",
  },
  {
    text: "The AidSync platform they deployed for us has completely cleared our support backlog. Our internal team is finally organized, and no request falls through the cracks.",
    author: "Beryline Atabong",
    source: "Google",
    icon: "/images/google-p.png",
    role: "HR & Admin Manager",
    rating: 5,
    date: "1 month ago",
  },
  {
    text: "Finding a reliable IT hardware partner in the region was difficult until we found Dunamis. The procurement process is transparent, and the equipment is always top-tier.",
    author: "Emmanuel Tabi",
    source: "X",
    icon: "/images/google-p.png",
    role: "Managing Director, BuildRight Ltd",
    rating: 4.5,
    date: "3 weeks ago",
  },
  {
    text: "Their team doesn't just fix problems; they architect solutions. The security audit they performed on our network saved us from a major potential data breach.",
    author: "Fru Kevin",
    source: "Facebook",
    icon: "/images/fb.png",
    role: "Head of IT Infrastructure",
    rating: 5,
    date: "1 week ago",
  },
  {
    text: "Loop Tech's consulting on our Google Cloud setup was instrumental. They optimized our spending and taught our local team how to manage the environment independently.",
    author: "Grace Amabo",
    source: "LinkedIn",
    icon: "/images/linkedin.svg",
    role: "CTO, AgriTech Solutions",
    rating: 5,
    date: "2 days ago",
  },
  {
    text: "Reliable, professional, and highly skilled. They handled our multi-office network setup with zero downtime. Highly recommend for any enterprise-scale project.",
    author: "David Mua",
    source: "Google",
    icon: "/images/google-p.png",
    role: "Logistics Manager",
    rating: 4.5,
    date: "5 days ago",
  },
  {
    text: "The team is deeply knowledgeable about the local business landscape while maintaining international standards. A rare find in the IT consulting space.",
    author: "Sonia Egbe",
    source: "Facebook",
    icon: "/images/fb.png",
    role: "Procurement Officer",
    rating: 5,
    date: "2 weeks ago",
  },
];
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="mt-6 flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-4 h-4 text-yellow-400 fill-yellow-400 inline-block mr-1" />
      ))}
      {hasHalfStar && (
        <div className="relative w-4 h-4 inline-block mr-1">
          <Star className="w-4 h-4 text-yellow-400 absolute" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          </div>
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="w-4 h-4 text-yellow-400 inline-block mr-1" />
      ))}
    </div>
  );
};

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: false,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-[#f3f4f6] py-16 md:py-20 " id="testimonials">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-10">
          what our clients say
        </h2>

        <div className="relative">
          {canScrollPrev && (
            <button
              onClick={scrollPrev}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-white border border-gray-300 rounded-full shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
          )}

          {canScrollNext && (
            <button
              onClick={scrollNext}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-white border border-gray-300 rounded-full shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          )}

          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-6">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="min-w-[300px] min-h-[300px] max-w-[320px] border-[1.1px] border-gray-300 bg-white rounded-md p-5 flex-shrink-0"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src="/images/google-g.png"
                      alt={item.source}
                      className="w-5 h-5"
                    />
                    <span className="text-sm text-gray-500">
                      {item.date}
                    </span>
                  </div>

                  <p className="text-gray-800 text-sm leading-relaxed">
                    {`"${item.text}"`}
                  </p>

                  <StarRating rating={item.rating} />

                  <div className="mt-4 text-sm text-gray-600">
                    <span className="mr-2">{item.author}</span> | <span className="opacity-60 ml-2">{item.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}