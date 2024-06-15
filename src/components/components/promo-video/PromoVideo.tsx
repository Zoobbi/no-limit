import { VideoPlayer } from "@Basket/components/moleculas/video-player";
import { PONKRASHOW_YOUTUBE_ID, PROMO_HEADER, PROMO_VIDEO_ID } from "@Basket/data/content";

export const PromoVideo = () => (
  <VideoPlayer
    videoId={PROMO_VIDEO_ID}
    headerText={PROMO_HEADER}
    channelId={PONKRASHOW_YOUTUBE_ID}
  />);
