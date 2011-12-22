class Site
  include Mongoid::Document
  field :name, type: String
  field :url, type: String
  field :description, type: String
  field :supporters, type: Array
  embedded_in :users
end
