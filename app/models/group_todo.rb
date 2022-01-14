class GroupTodo < ApplicationRecord
    validates :content, presence: true

    belongs_to :user
    belongs_to :category
    belongs_to :group
end
