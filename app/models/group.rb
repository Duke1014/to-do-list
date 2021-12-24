class Group < ApplicationRecord
    has_and_belongs_to_many :users
    has_many :todos, through: :users
    has_many :comments
end
