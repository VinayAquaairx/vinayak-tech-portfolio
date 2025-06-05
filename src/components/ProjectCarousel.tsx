import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from '@/components/ui/carousel';
import { HoveredImageState } from '@/types';

interface ProjectCarouselProps {
  images: string[];
  projectTitle: string;
  hoveredImage: HoveredImageState | null;
  setHoveredImage: (image: HoveredImageState | null) => void;
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ 
  images, 
  projectTitle, 
  hoveredImage, 
  setHoveredImage 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const [api, setApi] = useState<CarouselApi | undefined>(undefined);

  // Sync the carousel's active index with currentIndex
  useEffect(() => {
    if (api) {
      // When currentIndex changes, scroll the carousel to the corresponding index
      api.scrollTo(currentIndex);
    }
  }, [currentIndex, api]);

  // Set up the carousel API and listen for slide changes
  useEffect(() => {
    if (api) {
      // Update currentIndex when the carousel's active slide changes (e.g., via prev/next buttons)
      const onSelect = () => {
        const selectedIndex = api.selectedScrollSnap();
        setCurrentIndex(selectedIndex);
      };

      api.on('select', onSelect);

      return () => {
        api.off('select', onSelect);
      };
    }
  }, [api]);

  // Auto-slide effect
  useEffect(() => {
    if (!isCarouselHovered && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [images.length, isCarouselHovered]);

  const handleImageHover = (imageUrl: string, event: React.MouseEvent, isEntering: boolean) => {
    if (isEntering) {
      const rect = event.currentTarget.getBoundingClientRect();
      setHoveredImage({
        url: imageUrl,
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      });
      setIsCarouselHovered(true);
    } else {
      setHoveredImage(null);
      setIsCarouselHovered(false);
    }
  };

  return (
    <div className="relative mb-6">
      <Carousel className="w-full" opts={{ loop: true }} setApi={setApi}>
        <CarouselContent>
          {images.map((image, imgIndex) => (
            <CarouselItem key={imgIndex}>
              <div 
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                onMouseEnter={(e) => handleImageHover(image, e, true)}
                onMouseLeave={(e) => handleImageHover(image, e, false)}
              >
                <img
                  src={image}
                  alt={`${projectTitle} Screenshot ${imgIndex + 1}`}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-white font-medium bg-black/60 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    Hover to view full image
                  </span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-white/80 hover:bg-white border-0 shadow-lg" />
        <CarouselNext className="right-2 bg-white/80 hover:bg-white border-0 shadow-lg" />
      </Carousel>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-3 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-blue-500 scale-110' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};