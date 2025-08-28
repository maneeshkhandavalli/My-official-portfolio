// Scroll Animation Utility using Intersection Observer
class ScrollAnimations {
  constructor() {
    this.observer = null;
    this.init();
  }

  init() {
    // Create intersection observer with optimized settings for repeated animations
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateElement(entry.target);
          } else {
            this.resetElement(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );
  }

  animateElement(element) {
    // Add the animate class to trigger CSS animations
    element.classList.add('animate');
  }

  resetElement(element) {
    // Remove animate class when element leaves viewport to allow re-animation
    element.classList.remove('animate');
  }

  observe(element) {
    if (this.observer && element) {
      this.observer.observe(element);
    }
  }

  unobserve(element) {
    if (this.observer && element) {
      this.observer.unobserve(element);
    }
  }

  disconnect() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

// Create a singleton instance
const scrollAnimations = new ScrollAnimations();

// React hook for using scroll animations
export const useScrollAnimation = (ref, animationType = 'fade-up') => {
  React.useEffect(() => {
    const element = ref.current;
    if (element) {
      // Add animation class based on type
      element.classList.add('scroll-animate', animationType);
      scrollAnimations.observe(element);
    }

    return () => {
      if (element) {
        scrollAnimations.unobserve(element);
      }
    };
  }, [ref, animationType]);
};

export default scrollAnimations;
