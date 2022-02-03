class Group < ApplicationRecord
    validates :group_name, presence: true, uniqueness: true, length: { minimum: 3 }

    has_and_belongs_to_many :users
    has_many :group_todos
    has_many :comments
end
