class User < ApplicationRecord
    has_secure_password
    has_and_belongs_to_many :groups
    has_many :todos
    has_many :categories, through: :todos
end
