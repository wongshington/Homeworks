class House < ActiveRecord::Base
  validates :address, presence: true

  has_many :people,
  primary_key: :id,
  foreign_key: :house_id,
  class_name: 'Residents'


end
