export const socialDataAids = {
  FACEBOOK: "HEADER_FACEBOOK_LINK",
  TWITTER: "HEADER_TWITTER_LINK",
  INSTAGRAM: "HEADER_INSTAGRAM_LINK",
  PINTEREST: "HEADER_PINTEREST_LINK",
  LINKEDIN: "HEADER_LINKEDIN_LINK",
  YOUTUBE: "HEADER_YOUTUBE_LINK",
  DISCORD: "HEADER_DISCORD_LINK",
  TWITCH: "HEADER_TWITCH_LINK",
  TIKTOK: "HEADER_TIKTOK_LINK",
  GOOGLEPLUS: "HEADER_GOOGLEPLUS_LINK",
  YELP: "HEADER_YELP_LINK",
  XING: "HEADER_XING_LINK",
  HOUZZ: "HEADER_HOUZZ_LINK",
  SOCIAL: "HEADER_SOCIAL_LINKS",
};

export const minimalIconMapping = {
  facebook: "facebookMinimal",
  twitter: "twitterMinimal",
  googleplus: "googleplusMinimal",
  pinterest: "pinterestMinimal",
  instagram: "instagramMinimal",
  linkedin: "linkedinMinimal",
  youtube: "youtubeMinimal",
  yelp: "yelpMinimal",
  XING: "XINGMinimal",
  houzz: "houzzMinimal",
  discord: "discordMinimal",
  twitch: "twitchMinimal",
  tiktok: "tiktokMinimal",
};

export const mapPropsToSocialProps = (props) => {
  return {
    dataAids: socialDataAids,
    facebookProfile: props.facebookProfile,
    twitterProfile: props.twitterProfile,
    instagramProfile: props.instagramProfile,
    pinterestProfile: props.pinterestProfile,
    linkedinProfile: props.linkedinProfile,
    youtubeProfile: props.youtubeProfile,
    googlePlusProfile: props.googlePlusProfile,
    yelpProfile: props.yelpProfile,
    xingProfile: props.xingProfile,
    houzzProfile: props.houzzProfile,
    discordProfile: props.discordProfile,
    twitchProfile: props.twitchProfile,
    tiktokProfile: props.tiktokProfile,
  };
};
