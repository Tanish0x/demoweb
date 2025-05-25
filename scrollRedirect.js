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
      const popup = window.open(redirectUrl, '_blank', 'width=800,height=600,menubar=no,toolbar=no,location=no,status=no,popup=yes');
      if (!popup) {
        window.location.href = redirectUrl;
      }
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('touchmove', handleScroll);
}