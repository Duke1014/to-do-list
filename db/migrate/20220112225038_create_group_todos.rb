class CreateGroupTodos < ActiveRecord::Migration[6.1]
  def change
    create_table :group_todos do |t|
      t.string :content
      t.boolean :is_done
      t.integer :category_id
      t.integer :group_id

      t.timestamps
    end
  end
end
