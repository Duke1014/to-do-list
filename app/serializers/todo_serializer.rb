class TodoSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :category_id, :content, :is_done

  belongs_to :user
  belongs_to :category
end