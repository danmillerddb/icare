class Site
  include Mongoid::Document
  include Mongo::Voteable
  include Mongoid::Taggable
  
  field :name, type: String
  field :url, type: String
  field :description, type: String
  field :supporters, type: Array
  field :tags, type: Array
  field :count, type: Integer 
  belongs_to :user
  embeds_many :supports
  
  tags_separator ' '
  
  voteable self, :up => +1, :down => -1
end
