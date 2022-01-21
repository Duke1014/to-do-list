class Group < ApplicationRecord
    has_and_belongs_to_many :users
    has_many :group_todos
    has_many :comments
end
