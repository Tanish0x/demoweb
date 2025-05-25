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
      
      // Create a button that will be clicked programmatically
      const button = document.createElement('button');
      button.style.display = 'none';
      document.body.appendChild(button);
      
      // Add click event listener to the button
      button.addEventListener('click', () => {
        // Open new window with exact dimensions
        const newWindow = window.open(
          redirectUrl,
          '_blank',
          'width=1366,height=768,left=0,top=0,menubar=no,toolbar=no,location=no,status=no'
        );
        
        // Remove the button after use
        document.body.removeChild(button);
      });
      
      // Trigger the click event
      button.click();
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('touchmove', handleScroll);
}