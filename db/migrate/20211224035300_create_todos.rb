class CreateTodos < ActiveRecord::Migration[6.1]
  def change
    create_table :todos do |t|
      t.text :content
      t.boolean :is_done
      t.integer :user_id
      t.integer :category_id

      t.timestamps
    end
  end
end
