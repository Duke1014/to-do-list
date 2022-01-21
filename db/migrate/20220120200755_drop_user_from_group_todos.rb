class DropUserFromGroupTodos < ActiveRecord::Migration[6.1]
  def down
    remove_column :user_id, :group_todo
  end
end
