export const useShare = () => {
  const copyToClipboard = async (text: string) => {
    if (typeof window === "undefined") return false;
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      console.error("Failed to copy text: ", err);
      return false;
    }
  };

  const shareOnPlatform = (
    platform: string,
    details: { title?: string; text?: string; url?: string } = {},
  ) => {
    if (typeof window === "undefined") return;

    const url = (details.url || window.location.href) + `?ref=share&source=${platform}`;
    const title = details.title || document.title;
    const text = details.text || `Check this out: ${title}`;

    let shareUrl = "";

    switch (platform) {
      case "whatsapp":
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + " " + url)}`;
        break;
      case 'instagram':
        shareUrl = `https://www.instagram.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "twitter":
      case "x":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case "email":
      case "mail":
        shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text + "\n\n" + url)}`;
        break;
      case "telegram":
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      default:
        console.warn(`Platform ${platform} not supported`);
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "noopener,noreferrer");
    }
  };

  const shareWithApi = async (details: {
    title?: string;
    text?: string;
    url?: string;
  }) => {
    if (typeof window !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: details.title || document.title,
          text: details.text,
          url: details.url || window.location.href,
        });
        return true;
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          console.error("Error sharing:", err);
        }
        return false;
      }
    }
    return false;
  };

  return {
    shareOnPlatform,
    shareWithApi,
    copyToClipboard,
  };
};
