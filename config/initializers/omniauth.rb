Rails.application.config.middleware.use OmniAuth::Builder do
  #production
  provider :facebook, '363753320314028', 'da1e0091664130d7768edf2cfe442c92', {:scope => 'publish_stream'}

 
end