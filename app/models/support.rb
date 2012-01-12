class Support
  include Mongoid::Document
  embedded_in :site
  
  field :join_date, type: DateTime, default: Time.now
 
end
