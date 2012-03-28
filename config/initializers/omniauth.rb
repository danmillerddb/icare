Rails.application.config.middleware.use OmniAuth::Builder do
  #production
  provider :facebook, '363753320314028', 'da1e0091664130d7768edf2cfe442c92', {:scope => 'publish_stream'}
  
  #development
  #provider :facebook, '105799622886522', 'efb69ce3022d037ded89a2472e511472', {:scope => 'publish_stream'}

 
end