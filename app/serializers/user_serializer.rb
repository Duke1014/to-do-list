class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest

  has_and_belongs_to_many :groups
  has_many :todos
  has_many :categories, through: :todos

end
