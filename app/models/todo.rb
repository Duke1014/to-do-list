class Todo < ApplicationRecord
    validates :content, presence: true

    belongs_to :users
    belongs_to :category
end
