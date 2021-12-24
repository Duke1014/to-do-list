class Todo < ApplicationRecord
    belongs_to :users
    belongs_to :category
end
