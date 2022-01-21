class GroupTodoSerializer < ActiveModel::Serializer
  attributes :id, :category_id, :group_id, :content, :is_done

  belongs_to :group
  belongs_to :category
end
