module.exports = {
  // App Settings
    //local mongodb connetion 
   //MONGO_URI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/font',
   //mlab connetion  
   //MONGO_URI: process.env.MONGO_URI || 'mongodb://designerfavadmin:Compaq@123@ds129402.mlab.com:29402/designerfav',
   MONGO_URI: process.env.MONGO_URI || 'mongodb://fontadmin:admin123@ds062889.mlab.com:62889/font',
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'YOUR_UNIQUE_JWT_TOKEN_SECRET',
   //TOKEN_SECRET: process.env.TOKEN_SECRET || 'Fascia_Bytes_2_Bots_DesignerFav',

  // OAuth 2.0
  FACEBOOK_SECRET: process.env.FACEBOOK_SECRET || '43c20daf1acf54f5eaf318049b076353',//'dd2e7a39dba5755be46ec8201cec8a0f'
  FOURSQUARE_SECRET: process.env.FOURSQUARE_SECRET || 'YOUR_FOURSQUARE_CLIENT_SECRET',
  GOOGLE_SECRET: process.env.GOOGLE_SECRET || 'YOUR_GOOGLE_CLIENT_SECRET',
  GITHUB_SECRET: process.env.GITHUB_SECRET || 'YOUR_GITHUB_CLIENT_SECRET',
  INSTAGRAM_SECRET: process.env.INSTAGRAM_SECRET || 'YOUR_INSTAGRAM_CLIENT_SECRET',
  LINKEDIN_SECRET: process.env.LINKEDIN_SECRET || 'YOUR_LINKEDIN_CLIENT_SECRET',
  TWITCH_SECRET: process.env.TWITCH_SECRET || 'YOUR_TWITCH_CLIENT_SECRET',
  WINDOWS_LIVE_SECRET: process.env.WINDOWS_LIVE_SECRET || 'YOUR_MICROSOFT_CLIENT_SECRET',
  YAHOO_SECRET: process.env.YAHOO_SECRET || 'YOUR_YAHOO_CLIENT_SECRET',
  BITBUCKET_SECRET: process.env.BITBUCKET_SECRET || 'YOUR_BITBUCKET_CLIENT_SECRET',
  SPOTIFY_SECRET: process.env.SPOTIFY_SECRET || 'YOUR_SPOTIFY_CLIENT_SECRET',

  // OAuth 1.0
  TWITTER_KEY: process.env.TWITTER_KEY || 'YyROSuWdqJ25tleeWCCxXyS6W',
  TWITTER_SECRET: process.env.TWITTER_SECRET || '9Cr9mm2CY3m75ExFBTgURF6BRsWquTA7d6Lfithy0cT4FpnPeI',

   // OAuth 1.0
  DRIBBLE_KEY: process.env.DRIBBLE_KEY || 'cafe9492c5296869dff75f1a89cc452c1dd085712b9a47fb303d6f9305be35c2',
  DRIBBLE_SECRET: process.env.DRIBBLE_SECRET || '50babf348ae40d291d2fa43fa2801292fa190b77284b1714c360e55d6c18c63c',  
  BaseURI: 'http://favfont.azurewebsites.net'
  //BaseURI: 'http://www.designerfav.com'
};
