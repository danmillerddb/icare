class Site
  include Mongoid::Document
  include Mongo::Voteable

  field :name, type: String
  field :url, type: String
  field :description, type: String
  field :supporters, type: Array
  field :count, type: Integer 
  belongs_to :user
  embeds_many :supports
  
  voteable self, :up => +1, :down => -1
end
