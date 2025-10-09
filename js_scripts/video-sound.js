// video-sound.js
// Handles tap-to-unmute behavior for embedded looping videos

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".video-wrapper video").forEach(video => {
      const hint = video.parentElement.querySelector(".sound-hint");
  
      // Click or tap toggles mute
      video.addEventListener("click", async () => {
        try {
          video.muted = !video.muted;
  
          if (!video.muted) {
            hint.textContent = "🔇 Tap to mute";
            await video.play(); // ensures playback continues with sound
          } else {
            hint.textContent = "🔊 Tap to unmute";
          }
        } catch (err) {
          console.warn("Video interaction failed:", err);
        }
      });
  
      // Hover hint (for desktop)
      video.parentElement.addEventListener("mouseenter", () => {
        hint.style.opacity = "1";
      });
      video.parentElement.addEventListener("mouseleave", () => {
        hint.style.opacity = "0";
      });
  
      // Small UX touch: show hint briefly on page load
      hint.style.opacity = "1";
      setTimeout(() => { hint.style.opacity = "0"; }, 2500);
    });
  });