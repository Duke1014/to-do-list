class GroupTodo < ApplicationRecord
    validates :content, presence: true

    belongs_to :category
    belongs_to :group
    accepts_nested_attributes_for :category, reject_if: :all_blank
end
