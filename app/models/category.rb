class Category < ApplicationRecord
    validates :category_name, presence: true, uniqueness: true, length: { maximum: 20 }

    has_many :todos
    has_many :users, through: :todos
end
