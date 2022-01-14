class Todo < ApplicationRecord
    validates :content, presence: true

    belongs_to :user
    belongs_to :category
end
