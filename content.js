const newProfilePictureUrl =
  "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg";

function changeProfilePictures() {
  const profilePictures = document.querySelectorAll('img[src*="profile"]');
  profilePictures.forEach((img) => {
    img.src = newProfilePictureUrl;
  });
}

const observer = new MutationObserver(changeProfilePictures);

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

changeProfilePictures();
