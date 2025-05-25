/**
 * Sets up a scroll-based redirect functionality
 * @param {Object} options - Configuration options
 * @param {number} options.scrollThreshold - Scroll amount in pixels to trigger redirect
 * @param {string} options.redirectUrl - URL to redirect to
 */
export function setupScrollRedirect({
  scrollThreshold = 100,
  redirectUrl = 'https://www.youtube.com'
}) {
  let hasRedirected = false;
  
  // Handle both scroll and touch events for mobile
  const handleScroll = () => {
    const scrollPosition = window.scrollY || window.pageYOffset;
    
    if (scrollPosition > scrollThreshold && !hasRedirected) {
      hasRedirected = true;
      
      // Direct window open with specific dimensions
      const features = [
        'width=3840',
        'height=2160',
        'left=0',
        'top=0',
        'menubar=no',
        'toolbar=no',
        'location=no',
        'status=no',
        'scrollbars=yes',
        'resizable=yes'
      ].join(',');
      
      // Open in new window
      window.open(redirectUrl, '_blank', features);
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('touchmove', handleScroll);
}