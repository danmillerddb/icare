class Authentication
  include Mongoid::Document
  field :user_id, :type => String
  field :provider, :type => String
  field :uid, :type => String
end
