class TodoSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :category_id, :content, :is_done

  belongs_to :users
  belongs_to :category
end
