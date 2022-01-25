class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true, length: { minimum: 4 }

    has_and_belongs_to_many :groups
    has_many :todos
    has_many :categories, through: :todos
end
